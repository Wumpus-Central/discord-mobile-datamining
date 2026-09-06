// discord_app/modules/dismissible_content/VersionedDismissibleContentUtils.tsx
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import CollectiblesMarketingsStore from "../collectibles/CollectiblesMarketingsStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/VersionedDismissibleContentUtils.tsx");

export const getVersionedDismissibleContentCurrentVersion = function getVersionedDismissibleContentCurrentVersion(id) {
  if (dismissible_content.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING === id) {
    const marketingBySurface = CollectiblesMarketingsStore.getMarketingBySurface(
      tmp(13986).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON,
    );
    let num5;
    if (marketingBySurface != null) {
      num5 = marketingBySurface.version;
    }
    if (num5 == null) {
      num5 = 0;
    }
    return num5;
  } else if (tmp(1943).DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE === id) {
    let tmpResult = tmp(13987);
    const obj = {
      storeState: EmbeddedActivitiesStore.getState(),
      surface: tmp(1894).EmbeddedActivitySurfaces.VOICE_LAUNCHER,
    };
    return tmpResult.getNewestBadgeableVersion(obj);
  } else {
    if (tmp(1943).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK !== id) {
      if (tmp(1943).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE !== id) {
        if (tmp(1943).DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER === id) {
          tmpResult = tmp(13988);
          return tmpResult.getWideBannerDismissibleContentVersion();
        } else {
          if (tmp(1943).DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL !== id) {
            if (tmp(1943).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE !== id) {
              if (tmp(1943).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA !== id) {
                if (tmp(1943).DismissibleContent.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER !== id) {
                  if (tmp(1943).DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER === id) {
                    return 0;
                  } else {
                    tmp(1969).assertUnreachable(id, { andFail: false });
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
