// === Module 12037: useAppLauncherOnboardingContent ===

// Module 12037 (useAppLauncherOnboardingContent)
import useCanShowAppLauncherOnboardingDefault from "useCanShowAppLauncherOnboarding" /* 12043 */;
import _slicedToArray from "module_32" /* 32 */;
import ApplicationFrecencyStore from "ApplicationFrecencyStore" /* 9291 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
const constants = fn(1954).DismissibleContentGroupName;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx");

export default function useAppLauncherOnboardingContent(channelId) {
  channelId = channelId.channelId;
  let items = [];
  let obj = { channel: null };
  const items1 = [ChannelStore];
  obj.channel = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const tmp3 = useCanShowAppLauncherOnboardingDefault({ channelId });
  if (tmp3.canShowBotsBanner) {
    items.push(tmp(1943).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  }
  if (tmp3.canShowAppsOrActivitiesBanner) {
    const push = items.push;
    const DismissibleContent = tmp(1943).DismissibleContent;
    if ((function useHasUsedActivities(channel) {
      channel = channel.channel;
      let obj = channelId(4380);
      let result = obj.useIsDismissibleContentDismissed_UNSAFE(channelId(1943).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
      const result1 = channelId(4380).useIsDismissibleContentDismissed_UNSAFE(channelId(1943).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
      const obj2 = channelId(4380);
      const items = [ApplicationFrecencyStore];
      const stateFromStores = channelId(504).useStateFromStores(items, () => applicationFrecencyWithoutLoadingLatest.getApplicationFrecencyWithoutLoadingLatest());
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj3 = channelId(504);
      obj = { guildId: guild_id, fetchesShelf: null };
      if (result) {
        result = result1;
      }
      obj.fetchesShelf = !result;
      const activityApplications = channelId(12038).useActivityApplications(obj);
      let flag = false;
      for (const item10042 of activityApplications) {
        if (null != stateFromStores.getEntry(item10042.id)) {
          flag = true;
          obj7.return();
          break;
        }
        obj = { hasUsedActivities: flag };
        return obj;
      }
      const tmpResult = channelId(12038);
    })(obj).hasUsedActivities) {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
    } else {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
    }
  }
  let obj2 = channelId(504);
  const tmp7 = _slicedToArray(channelId(7388).useSelectedDismissibleContent(items, constants.APP_LAUNCHER_ONBOARDING), 2);
  obj = { visibleContent: tmp7[0], markAsDismissed: tmp7[1] };
  return obj;
};