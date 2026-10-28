// === Module 4854: VersionedDismissibleContentUtils ===

// Module 4854 (VersionedDismissibleContentUtils)
import Server from "Server" /* 1997 */;
import dismissible_content from "dismissible_content" /* 4840 */;
import TypeUtils from "TypeUtils" /* 4868 */;
import CollectiblesMarketingSurface from "CollectiblesMarketingSurface" /* 5672 */;
import AppLauncherBadgeUtils from "AppLauncherBadgeUtils" /* 5673 */;
import WideBannerDismissibleContentVersion from "WideBannerDismissibleContentVersion" /* 5674 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4855 */;
import CollectiblesMarketingsStore from "CollectiblesMarketingsStore" /* 5671 */;

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
    const obj = { storeState: EmbeddedActivitiesStore.getState(), surface: Server.EmbeddedActivitySurfaces.VOICE_LAUNCHER };
    return AppLauncherBadgeUtils.getNewestBadgeableVersion(obj);
  } else {
    if (dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK !== id) {
      if (dismissible_content.DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE !== id) {
        if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER === id) {
          return WideBannerDismissibleContentVersion.getWideBannerDismissibleContentVersion();
        } else {
          if (dismissible_content.DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL !== id) {
            if (dismissible_content.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE !== id) {
              if (dismissible_content.DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA !== id) {
                if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER !== id) {
                  if (dismissible_content.DismissibleContent.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED !== id) {
                    TypeUtils.assertUnreachable(id, { andFail: false });
                    return 0;
                  }
                }
                return 0;
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