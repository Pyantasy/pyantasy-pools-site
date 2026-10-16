(function () {
  function inviteCodeFromPath() {
    var parts = location.pathname.split("/").filter(Boolean);
    // Expect …/join/{code} (optionally under a Pages base path like /pyantasy-pools-site/join/{code})
    var joinIdx = parts.indexOf("join");
    if (joinIdx < 0) return "";
    var raw = parts[joinIdx + 1] || "";
    // Strip accidental trailing segments / extensions
    return decodeURIComponent(raw).replace(/[^A-Za-z0-9_-]/g, "").slice(0, 32);
  }

  var code = inviteCodeFromPath();
  var display = document.getElementById("code-display");
  var blurb = document.getElementById("blurb");
  var openApp = document.getElementById("open-app");

  if (!display || !openApp) return;

  if (code) {
    display.textContent = code.toUpperCase();
    if (blurb) {
      blurb.textContent =
        "Invite code " + code.toUpperCase() + ". Open on iPhone to join this pool.";
    }
    openApp.href = "pyantasy://join/" + encodeURIComponent(code);
  } else {
    display.textContent = "NO CODE";
    if (blurb) {
      blurb.textContent =
        "This invite link is missing a code. Ask your commissioner for a fresh link.";
    }
    openApp.href = "pyantasy://join/";
  }
})();
