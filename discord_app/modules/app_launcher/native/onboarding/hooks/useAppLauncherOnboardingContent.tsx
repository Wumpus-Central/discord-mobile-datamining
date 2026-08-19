// discord_app/modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx
import resultDefault from "useCanShowAppLauncherOnboarding.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import handleUserSettingsProtoStoreChange from "../../../../applications/ApplicationFrecencyStore.tsx";
import ensureGuildLoaded from "../../../../../stores/ChannelStore.tsx";
import { DismissibleContentGroupName as closure_6 } from "../../../../dismissible_content/DismissibleContentConstants.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx");

export default function useAppLauncherOnboardingContent(channelId) {
  channelId = channelId.channelId;
  let items = [];
  let obj = { channel: channelId(589).useStateFromStores(items1, () => closure_1_5.getChannel(channelId)) };
  items1 = [closure_5];
  const tmp3 = resultDefault({ channelId });
  if (tmp3.canShowBotsBanner) {
    items.push(tmp(1377).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  }
  if (tmp3.canShowAppsOrActivitiesBanner) {
    const push = items.push;
    const DismissibleContent = tmp(1377).DismissibleContent;
    if ((function useHasUsedActivities(channel) {
      channel = channel.channel;
      let obj = channelId(4196);
      let result = obj.useIsDismissibleContentDismissed_UNSAFE(channelId(1377).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
      const result1 = channelId(4196).useIsDismissibleContentDismissed_UNSAFE(channelId(1377).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
      const obj2 = channelId(4196);
      const items = [closure_4];
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
      const activityApplications = channelId(11211).useActivityApplications(obj);
      let flag = false;
      for (const item10042 of activityApplications) {
        if (null != stateFromStores.getEntry(item10042.id)) {
          flag = true;
          obj7.return();
          break;
        }
        obj = { hasUsedActivities: null };
        obj[0] = flag;
        return obj;
      }
      const tmpResult = channelId(11211);
    })(obj).hasUsedActivities) {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
    } else {
      push(DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
    }
  }
  let obj2 = channelId(589);
  const tmp7 = callback(channelId(7366).useSelectedDismissibleContent(items, constants.APP_LAUNCHER_ONBOARDING), 2);
  obj = { visibleContent: tmp7[0], markAsDismissed: tmp7[1] };
  return obj;
};