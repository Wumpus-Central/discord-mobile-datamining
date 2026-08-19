// === Module 1389: getVersionedDismissibleContentCurrentVersion ===

// Module 1389 (getVersionedDismissibleContentCurrentVersion)
import DismissibleContent from "DismissibleContent" /* 1377 */;
import exact from "exact" /* 1404 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import CollectiblesMarketingSurface from "CollectiblesMarketingSurface" /* 13446 */;
import getNewestBadgeableVersion from "getNewestBadgeableVersion" /* 13447 */;
import getWideBannerDismissibleContentVersion from "getWideBannerDismissibleContentVersion" /* 13448 */;
import participantFromServer from "participantFromServer" /* 1390 */;
import getMarketingBySurface from "getMarketingBySurface" /* 5351 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/dismissible_content/VersionedDismissibleContentUtils.tsx");

export const getVersionedDismissibleContentCurrentVersion = function getVersionedDismissibleContentCurrentVersion(closure_0) {
  if (DismissibleContent.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING === closure_0) {
    marketingBySurface = marketingBySurface.getMarketingBySurface(CollectiblesMarketingSurface.CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON);
    let num5;
    if (marketingBySurface != null) {
      num5 = marketingBySurface.version;
    }
    if (num5 == null) {
      num5 = 0;
    }
    return num5;
  } else if (DismissibleContent.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE === closure_0) {
    let tmpResult = getNewestBadgeableVersion;
    const obj = { storeState: null, surface: null };
    obj[0] = state.getState();
    obj[1] = PermissionOverwriteType.EmbeddedActivitySurfaces.VOICE_LAUNCHER;
    return tmpResult.getNewestBadgeableVersion(obj);
  } else {
    if (DismissibleContent.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK !== closure_0) {
      if (DismissibleContent.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE !== closure_0) {
        if (DismissibleContent.DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER === closure_0) {
          tmpResult = getWideBannerDismissibleContentVersion;
          return tmpResult.getWideBannerDismissibleContentVersion();
        } else {
          if (DismissibleContent.DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL !== closure_0) {
            if (DismissibleContent.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE !== closure_0) {
              if (DismissibleContent.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA !== closure_0) {
                if (DismissibleContent.DismissibleContent.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER !== closure_0) {
                  if (DismissibleContent.DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER === closure_0) {
                    return 0;
                  } else {
                    exact.assertUnreachable(closure_0, { andFail: false });
                    return 0;
                  }
                }
              }
            }
          }
          return 1;
        }
      }
    }
    return 0;
  }
};