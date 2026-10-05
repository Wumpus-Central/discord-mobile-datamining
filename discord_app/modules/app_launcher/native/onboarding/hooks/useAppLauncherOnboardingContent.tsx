// discord_app/modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx
import get_initialized from "../../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../../_runtime/00576_react.js";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import useActivityApplications2 from "useActivityApplications.tsx";
import useCanShowAppLauncherOnboardingDefault from "useCanShowAppLauncherOnboarding.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import ApplicationFrecencyStore from "../../../../applications/ApplicationFrecencyStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let channel, channelId;

const constants = DismissibleContentConstants.DismissibleContentGroupName;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let applicationFrecencyWithoutLoadingLatest;
      let tmp6;
      let tmp7;
      const obj = react;
      const cResult = obj.c(7);
      channel = channel.channel;
      const obj2 = DismissibleContentUnsafeUtils;
      let result = obj2.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER,
      );
      const obj3 = DismissibleContentUnsafeUtils;
      const result1 = obj3.useIsDismissibleContentDismissed_UNSAFE(
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp6, A);
      if (result) {
        result = result1;
      }
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (cResult[2] === !result) {
        let tmp11;
        if (cResult[3] === guild_id) {
          tmp11 = cResult[4];
        }
        const tmpResult2 = useActivityApplications2;
        const activityApplications = tmpResult2.useActivityApplications(tmp11);
        class A {
          constructor() {
            return closure_1_4.getApplicationFrecencyWithoutLoadingLatest();
          }
        }
        for (const item10063 of activityApplications) {
          let flag;
          if (null != stateFromStores.getEntry(item10063.id)) {
            flag = true;
            obj8.return();
            class A {
              constructor() {
                return closure_1_4.getApplicationFrecencyWithoutLoadingLatest();
              }
            }
          }
          if (cResult[5] !== flag) {
            let obj4 = { hasUsedActivities: flag };
            class A {
              constructor() {
                return closure_1_4.getApplicationFrecencyWithoutLoadingLatest();
              }
            }
            cResult[5] = flag;
            cResult[6] = obj4;
          }
          class A {
            constructor() {
              return closure_1_4.getApplicationFrecencyWithoutLoadingLatest();
            }
          }
        }
      }
      const obj5 = { guildId: guild_id, fetchesShelf: !result };
      cResult[2] = !result;
      cResult[3] = guild_id;
      cResult[4] = obj5;
      tmp11 = obj5;
    }
  : (channel) => {
      let applicationFrecencyWithoutLoadingLatest;
      channel = channel.channel;
      const obj = DismissibleContentUnsafeUtils;
      let result = obj.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER,
      );
      const obj2 = DismissibleContentUnsafeUtils;
      const result1 = obj2.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER,
      );
      const items = [ApplicationFrecencyStore];
      const obj3 = get_initialized;
      const stateFromStores = obj3.useStateFromStores(items, () =>
        applicationFrecencyWithoutLoadingLatest.getApplicationFrecencyWithoutLoadingLatest(),
      );
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj4 = { guildId: guild_id, fetchesShelf: !result };
      const useActivityApplications = useActivityApplications2.useActivityApplications;
      useActivityApplications2;
      if (result) {
        result = result1;
      }
      const activityApplications = useActivityApplications(obj4);
      let flag = false;
      for (const item10042 of activityApplications) {
        if (null != stateFromStores.getEntry(item10042.id)) {
          flag = true;
          obj6.return();
          break;
        }
        let obj5 = { hasUsedActivities: flag };
        return obj5;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp15;
      let tmp16;
      let tmp6;
      let tmp8;
      let tmp9;
      const obj = channelId(576);
      const cResult = obj.c(10);
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function l() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = channelId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        const obj2 = { channel: stateFromStores };
        cResult[3] = stateFromStores;
        cResult[4] = obj2;
        tmp8 = obj2;
      } else {
        tmp8 = cResult[4];
      }
      const hasUsedActivities = closure_7(tmp8).hasUsedActivities;
      if (cResult[5] !== channelId) {
        const obj3 = { channelId };
        cResult[5] = channelId;
        cResult[6] = obj3;
        tmp9 = obj3;
      } else {
        tmp9 = cResult[6];
      }
      const items1 = [];
      const tmp10 = useCanShowAppLauncherOnboardingDefault(tmp9);
      const canShowAppsOrActivitiesBanner = tmp10.canShowAppsOrActivitiesBanner;
      if (tmp10.canShowBotsBanner) {
        items1.push(channelId(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
      }
      if (canShowAppsOrActivitiesBanner) {
        const push = items1.push;
        const DismissibleContent = tmp(2036).DismissibleContent;
        if (hasUsedActivities) {
          push(DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
        } else {
          push(DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
        }
      }
      const tmpResult2 = channelId(6891);
      [tmp15, tmp16] = tmpResult2.useSelectedDismissibleContent(items1, constants.APP_LAUNCHER_ONBOARDING);
      _slicedToArray(tmpResult2.useSelectedDismissibleContent(items1, constants.APP_LAUNCHER_ONBOARDING), 2);
      if (cResult[7] === tmp16) {
        let tmp17;
        if (cResult[8] === tmp15) {
          tmp17 = cResult[9];
        }
        return tmp17;
      }
      const obj4 = { visibleContent: tmp15, markAsDismissed: tmp16 };
      cResult[7] = tmp16;
      cResult[8] = tmp15;
      cResult[9] = obj4;
      tmp17 = obj4;
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const items = [];
      const items1 = [ChannelStore];
      const obj = channelId(504);
      const obj2 = { channel: obj.useStateFromStores(items1, () => ChannelStore.getChannel(channelId)) };
      const hasUsedActivities = closure_7(obj2).hasUsedActivities;
      const tmp3 = useCanShowAppLauncherOnboardingDefault({ channelId });
      const canShowAppsOrActivitiesBanner = tmp3.canShowAppsOrActivitiesBanner;
      if (tmp3.canShowBotsBanner) {
        items.push(channelId(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
      }
      if (canShowAppsOrActivitiesBanner) {
        const push = items.push;
        const DismissibleContent = tmp(2036).DismissibleContent;
        if (hasUsedActivities) {
          push(DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
        } else {
          push(DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
        }
      }
      const tmpResult = channelId(6891);
      const tmp7 = _slicedToArray(tmpResult.useSelectedDismissibleContent(items, constants.APP_LAUNCHER_ONBOARDING), 2);
      return { visibleContent: tmp7[0], markAsDismissed: tmp7[1] };
    };
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/hooks/useAppLauncherOnboardingContent.tsx",
);

export default tmp2;
