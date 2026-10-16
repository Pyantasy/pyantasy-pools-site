# apple-app-site-association (AASA)
#
# RESIDUAL (Seen #41 / PYA-11):
# TEAMID is still a placeholder. Do not invent a Team ID. Replace it with the
# real 10-character Apple Developer Team ID once Seen #39 / PYA-12 (I14) lands
# after board Apple Program spend approval.
#
# BEFORE UNIVERSAL LINKS WORK IN PRODUCTION:
# 1. Replace TEAMID with your Apple Developer Team ID (10 characters), e.g. AB12CD34EF.
#    Find it: https://developer.apple.com/account → Membership details.
# 2. Host this file at https://{PAGES_HOST}{PAGES_BASE_PATH}/.well-known/apple-app-site-association
#    with Content-Type: application/json (no .json extension).
#    Live companion today: https://pyantasy.github.io/pyantasy-pools-site/
# 3. Set PAGES_HOST / PAGES_BASE_PATH in config/public-site.env and run
#    ./scripts/sync-public-site-config.sh (entitlements use applinks:$(PAGES_HOST))
# 4. If staying on a github.io *project* path, update AASA `paths` to include the
#    base path (e.g. /pyantasy-pools-site/join/*) OR move to a custom domain at host root.
#    Apple fetches AASA from the bare host root for Associated Domains.
# 5. Enable Associated Domains on App ID com.pyantasy.pools in the Developer portal.
# 6. Apple CDN caches AASA; after changing TEAMID, wait or use the Apple CDN flush tools.
#
# Publish the public site: ./scripts/publish-public-site.sh
# Validate (after TEAMID): https://app-site-association.cdn-apple.com/a/v1/{PAGES_HOST}
