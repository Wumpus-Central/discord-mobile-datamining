// === Module 1955: VersionedDismissibleContentUtils ===

// Module 1955 (VersionedDismissibleContentUtils)
import Server from "Server" /* 1894 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import TypeUtils from "TypeUtils" /* 1969 */;
import CollectiblesMarketingSurface from "CollectiblesMarketingSurface" /* 13986 */;
import AppLauncherBadgeUtils from "AppLauncherBadgeUtils" /* 13987 */;
import WideBannerDismissibleContentVersion from "WideBannerDismissibleContentVersion" /* 13988 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import CollectiblesMarketingsStore from "CollectiblesMarketingsStore" /* 7585 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/VersionedDismissibleContentUtils.tsx");

export const getVersionedDismissibleContentCurrentVersion = function getVersionedDismissibleContentCurrentVersion(id) {
  if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING === id) {
    const marketingBySurface = CollectiblesMarketingsStore.getMarketingBySurface(CollectiblesMarketingSurface.CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON);
    let num5;
    if (marketingBySurface != null) {
      num5 = marketingBySurface.version;
    }
    if (num5 == null) {
      num5 = 0;
    }
    return num5;
  } else if (dismissible_content.DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE === id) {
    let tmpResult = AppLauncherBadgeUtils;
    const obj = { storeState: EmbeddedActivitiesStore.getState(), surface: Server.EmbeddedActivitySurfaces.VOICE_LAUNCHER };
    return tmpResult.getNewestBadgeableVersion(obj);
  } else {
    if (dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK !== id) {
      if (dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE !== id) {
        if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER === id) {
          tmpResult = WideBannerDismissibleContentVersion;
          return tmpResult.getWideBannerDismissibleContentVersion();
        } else {
          if (dismissible_content.DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL !== id) {
            if (dismissible_content.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE !== id) {
              if (dismissible_content.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA !== id) {
                if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER !== id) {
                  if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER === id) {
                    return 0;
                  } else {
                    TypeUtils.assertUnreachable(id, { andFail: false });
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