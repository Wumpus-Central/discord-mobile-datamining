// === Module 11832: useAppLauncherOnboardingContent ===

// Module 11832 (useAppLauncherOnboardingContent)
import resultDefault from "result" /* 11838 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "handleUserSettingsProtoStoreChange" /* 8155 */;
import closure_5 from "ensureGuildLoaded" /* 1386 */;
import { DismissibleContentGroupName as closure_6 } from "ContentDismissActionType" /* 1383 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx");

export default function useAppLauncherOnboardingContent(channelId) {
  channelId = channelId.channelId;
  let items = [];
  let obj = { channel: channelId(586).useStateFromStores(items1, () => closure_1_5.getChannel(channelId)) };
  items1 = [closure_5];
  const tmp3 = resultDefault({ channelId });
  if (tmp3.canShowBotsBanner) {
    items.push(tmp(1372).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  }
  if (tmp3.canShowAppsOrActivitiesBanner) {
    const push = items.push;
    const DismissibleContent = tmp(1372).DismissibleContent;
    if ((function useHasUsedActivities(channel) {
      channel = channel.channel;
      let obj = channelId(4298);
      let result = obj.useIsDismissibleContentDismissed_UNSAFE(channelId(1372).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
      const result1 = channelId(4298).useIsDismissibleContentDismissed_UNSAFE(channelId(1372).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
      const obj2 = channelId(4298);
      const tmp = channelId;
      const items = [closure_4];
      const stateFromStores = channelId(586).useStateFromStores(items, () => applicationFrecencyWithoutLoadingLatest.getApplicationFrecencyWithoutLoadingLatest());
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj3 = channelId(586);
      obj = { guildId: guild_id, fetchesShelf: null };
      if (result) {
        result = result1;
      }
      obj[1] = !result;
      const activityApplications = tmp(11833).useActivityApplications(obj);
      let flag = false;
      for (const item10042 of activityApplications) {
        if (null != stateFromStores.getEntry(item10042.id)) {
          flag = true;
          let tmp7 = obj7;
          obj7.return();
          break;
        }
        obj = { hasUsedActivities: null };
        obj[0] = flag;
        return obj;
      }
    })(obj).hasUsedActivities) {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
    } else {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
    }
  }
  let obj2 = channelId(586);
  let tmp7 = callback(channelId(6260).useSelectedDismissibleContent(items, constants.APP_LAUNCHER_ONBOARDING), 2);
  obj = { visibleContent: tmp7[0], markAsDismissed: tmp7[1] };
  return obj;
};