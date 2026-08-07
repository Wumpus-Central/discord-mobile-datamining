// discord_app/modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx
import _slicedToArray from "_slicedToArray";
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange";
import ensureGuildLoaded from "ensureGuildLoaded";
import { DismissibleContentGroupName as closure_6 } from "ContentDismissActionType";
import { result } from "useCanShowAppLauncherOnboarding.tsx";

const require = arg1;
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx");

export default function useAppLauncherOnboardingContent(channelId) {
  channelId = channelId.channelId;
  let items = [];
  let obj = { channel: null };
  const items1 = [ensureGuildLoaded];
  obj[0] = channelId(589).useStateFromStores(items1, () => outer1_5.getChannel(channelId));
  const tmp3 = result({ channelId });
  if (tmp3.canShowBotsBanner) {
    items.push(tmp(1358).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  }
  if (tmp3.canShowAppsOrActivitiesBanner) {
    const push = items.push;
    const DismissibleContent = tmp(1358).DismissibleContent;
    if ((function useHasUsedActivities(channel) {
      channel = channel.channel;
      let obj = channelId(4117);
      let result = obj.useIsDismissibleContentDismissed_UNSAFE(channelId(1358).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
      const result1 = channelId(4117).useIsDismissibleContentDismissed_UNSAFE(channelId(1358).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
      const obj2 = channelId(4117);
      const tmp = channelId;
      const items = [handleUserSettingsProtoStoreChange];
      const stateFromStores = channelId(589).useStateFromStores(items, () => applicationFrecencyWithoutLoadingLatest.getApplicationFrecencyWithoutLoadingLatest());
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj3 = channelId(589);
      obj = { guildId: guild_id, fetchesShelf: null };
      if (result) {
        result = result1;
      }
      obj[1] = !result;
      const activityApplications = tmp(11358).useActivityApplications(obj);
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
  let obj2 = channelId(589);
  let tmp7 = callback(channelId(5962).useSelectedDismissibleContent(items, constants.APP_LAUNCHER_ONBOARDING), 2);
  obj = { visibleContent: tmp7[0], markAsDismissed: tmp7[1] };
  return obj;
};