// discord_app/modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx
import c from "../../../../../../_runtime/00576_c.js";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import useCanShowAppLauncherOnboardingDefault from "useCanShowAppLauncherOnboarding.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import ApplicationFrecencyStore from "../../../../applications/ApplicationFrecencyStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

const initialize = tmp(504);
const useActivityApplications = tmp(11731);
require = fn;
const constants = fn(2060).DismissibleContentGroupName;
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHasUsedActivities(channel) {
      const cResult = c.c(7);
      channel = channel.channel;
      let result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER,
      );
      const result1 = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ApplicationFrecencyStore];
        class A {
          constructor() {
            return closure_1_4.getApplicationFrecencyWithoutLoadingLatest();
          }
        }
        cResult[0] = items;
        cResult[1] = A;
        tmp6 = items;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp6, A);
      if (result) {
        result = result1;
      }
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (cResult[2] === !result) {
        if (cResult[3] === guild_id) {
          let tmp12 = cResult[4];
        }
        const activityApplications = useActivityApplications.useActivityApplications(tmp12);
        class A {
          constructor() {
            return closure_1_4.getApplicationFrecencyWithoutLoadingLatest();
          }
        }
        const tmp = activityApplications[Symbol.iterator]();
        const tmpResult2 = useActivityApplications;
      }
      const obj4 = { guildId: guild_id, fetchesShelf: !result };
      cResult[2] = !result;
      cResult[3] = guild_id;
      cResult[4] = obj4;
      tmp12 = obj4;
      const tmpResult = initialize;
    }
  : function useHasUsedActivities(channel) {
      channel = channel.channel;
      let result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER,
      );
      const result1 = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER,
      );
      const items = [ApplicationFrecencyStore];
      const stateFromStores = initialize.useStateFromStores(items, () =>
        applicationFrecencyWithoutLoadingLatest.getApplicationFrecencyWithoutLoadingLatest(),
      );
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj4 = { guildId: guild_id, fetchesShelf: null };
      if (result) {
        result = result1;
      }
      obj4.fetchesShelf = !result;
      const activityApplications = useActivityApplications.useActivityApplications(obj4);
      let flag = false;
      for (const item10042 of activityApplications) {
        if (null != stateFromStores.getEntry(item10042.id)) {
          flag = true;
          obj7.return();
          break;
        }
        let obj5 = { hasUsedActivities: flag };
        return obj5;
      }
      const tmpResult = useActivityApplications;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useAppLauncherOnboardingContent(channelId) {
      const cResult = channelId(576).c(10);
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function l() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = channelId(576);
      const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        const obj2 = { channel: stateFromStores };
        cResult[3] = stateFromStores;
        cResult[4] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] !== channelId) {
        const obj3 = { channelId };
        cResult[5] = channelId;
        cResult[6] = obj3;
        let tmp9 = obj3;
      } else {
        tmp9 = cResult[6];
      }
      const items1 = [];
      const tmp10 = useCanShowAppLauncherOnboardingDefault(tmp9);
      if (tmp10.canShowBotsBanner) {
        items1.push(tmp(2048).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
      }
      if (tmp10.canShowAppsOrActivitiesBanner) {
        const push = items1.push;
        const DismissibleContent = tmp(2048).DismissibleContent;
        if (closure_7(tmp8).hasUsedActivities) {
          push(DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
        } else {
          push(DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
        }
      }
      const tmpResult = channelId(504);
      const tmpResult2 = channelId(7090);
      [tmp15, tmp16] = channelId(7090).useSelectedDismissibleContent(items1, constants.APP_LAUNCHER_ONBOARDING);
      if (cResult[7] === tmp16) {
        if (cResult[8] === tmp15) {
          let tmp17 = cResult[9];
        }
        return tmp17;
      }
      const obj4 = { visibleContent: tmp15, markAsDismissed: tmp16 };
      cResult[7] = tmp16;
      cResult[8] = tmp15;
      cResult[9] = obj4;
      tmp17 = obj4;
      const tmp14 = _slicedToArray(
        channelId(7090).useSelectedDismissibleContent(items1, constants.APP_LAUNCHER_ONBOARDING),
        2,
      );
    }
  : function useAppLauncherOnboardingContent(channelId) {
      channelId = channelId.channelId;
      const items = [];
      const items1 = [ChannelStore];
      const obj = channelId(504);
      const tmp3 = useCanShowAppLauncherOnboardingDefault({ channelId });
      if (tmp3.canShowBotsBanner) {
        items.push(tmp(2048).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
      }
      if (tmp3.canShowAppsOrActivitiesBanner) {
        const push = items.push;
        const DismissibleContent = tmp(2048).DismissibleContent;
        if (closure_7(obj2).hasUsedActivities) {
          push(DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
        } else {
          push(DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
        }
      }
      obj2 = { channel: channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId)) };
      const tmp7 = _slicedToArray(
        channelId(7090).useSelectedDismissibleContent(items, constants.APP_LAUNCHER_ONBOARDING),
        2,
      );
      return { visibleContent: tmp7[0], markAsDismissed: tmp7[1] };
    };
