// discord_app/modules/dismissible_content/VersionedDismissibleContentUtils.tsx
import participantFromServer from "participantFromServer";
import getMarketingBySurface from "getMarketingBySurface";
import { DismissibleContent } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";

const require = arg1;
const result = require("DismissibleContent").fileFinishedImporting("modules/dismissible_content/VersionedDismissibleContentUtils.tsx");

export const getVersionedDismissibleContentCurrentVersion = function getVersionedDismissibleContentCurrentVersion(closure_0) {
  if (DismissibleContent.DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING === closure_0) {
    marketingBySurface = marketingBySurface.getMarketingBySurface(tmp(13212).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON);
    let num5;
    if (marketingBySurface != null) {
      num5 = marketingBySurface.version;
    }
    if (num5 == null) {
      num5 = 0;
    }
    return num5;
  } else if (tmp(1358).DismissibleContent.ACTIVITIES_VOICE_LAUNCHER_BADGE === closure_0) {
    let tmpResult = tmp(13213);
    const obj = { storeState: null, surface: null };
    obj[0] = state.getState();
    obj[1] = tmp(1906).EmbeddedActivitySurfaces.VOICE_LAUNCHER;
    return tmpResult.getNewestBadgeableVersion(obj);
  } else {
    if (tmp(1358).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK !== closure_0) {
      if (tmp(1358).DismissibleContent.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE !== closure_0) {
        if (tmp(1358).DismissibleContent.COLLECTIBLES_SHOP_WIDE_BANNER === closure_0) {
          tmpResult = tmp(13214);
          return tmpResult.getWideBannerDismissibleContentVersion();
        } else {
          if (tmp(1358).DismissibleContent.GAME_SHOP_ANNOUNCEMENT_MODAL !== closure_0) {
            if (tmp(1358).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE !== closure_0) {
              if (tmp(1358).DismissibleContent.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA !== closure_0) {
                if (tmp(1358).DismissibleContent.COLLECTIBLES_SHOP_SLAYER_STOREFRONT_PROMOTIONAL_BANNER !== closure_0) {
                  if (tmp(1358).DismissibleContent.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER === closure_0) {
                    return 0;
                  } else {
                    tmp(1385).assertUnreachable(closure_0, { andFail: false });
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