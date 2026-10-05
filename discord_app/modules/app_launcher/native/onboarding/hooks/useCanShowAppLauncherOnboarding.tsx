// discord_app/modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import get_initialized from "../../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../../_runtime/00576_react.js";
import DurationsDefault from "../../../../../utils/Durations.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ApplicationCommandConstants from "../../../../application_commands/ApplicationCommandConstants.tsx";
import useSelectedDismissibleContent from "../../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildMemberCountStore from "../../../../../stores/GuildMemberCountStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import AppLauncherOnboardingPersistedStore from "../stores/AppLauncherOnboardingPersistedStore.tsx";
import AppLauncherOnboardingStore from "../stores/AppLauncherOnboardingStore.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let channelId, currentTimeMs, guildId, isInCooldown;

const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let result = 5 * DurationsDefault.Millis.SECOND;
let c10 = result;
let closure_11 = 5 * DurationsDefault.Millis.SECOND;
let closure_12 = 14 * DurationsDefault.Millis.DAY;
const HOUR = DurationsDefault.Millis.HOUR;
const DAY = DurationsDefault.Millis.DAY;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function t() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      let createdAt;
      if (stateFromStores != null) {
        createdAt = stateFromStores.createdAt;
      }
      let tmp9 = null != createdAt;
      if (tmp9) {
        const _Date = Date;
        const timestamp = Date.now();
        const obj3 = SnowflakeUtilsDefault;
        tmp9 = timestamp < obj3.extractTimestamp(stateFromStores.id) + closure_12;
      }
      return tmp9;
    }
  : () => {
      let currentUser;
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let createdAt;
      if (stateFromStores != null) {
        createdAt = stateFromStores.createdAt;
      }
      let tmp4 = null != createdAt;
      if (tmp4) {
        const _Date = Date;
        const timestamp = Date.now();
        const obj2 = SnowflakeUtilsDefault;
        tmp4 = timestamp < obj2.extractTimestamp(stateFromStores.id) + closure_12;
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let tmp6;
      const obj = guildId(576);
      const cResult = obj.c(3);
      const tmp = guildId;
      guildId = guildId.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberCountStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function s() {
          return GuildMemberCountStore.getMemberCount(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      return null != stateFromStores && stateFromStores < 200;
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const items = [GuildMemberCountStore];
      const obj = guildId(504);
      const stateFromStores = obj.useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(guildId));
      return null != stateFromStores && stateFromStores < 200;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (currentTimeMs) => {
      let lastSeenTimeMs;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      currentTimeMs = currentTimeMs.currentTimeMs;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AppLauncherOnboardingPersistedStore];
        const fn = function o() {
          return lastSeenTimeMs.getLastSeenTimeMs();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      return null != stateFromStores && currentTimeMs < stateFromStores + HOUR;
    }
  : (currentTimeMs) => {
      let lastSeenTimeMs;
      currentTimeMs = currentTimeMs.currentTimeMs;
      const items = [AppLauncherOnboardingPersistedStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => lastSeenTimeMs.getLastSeenTimeMs());
      return null != stateFromStores && currentTimeMs < stateFromStores + HOUR;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isInCooldown) => {
      let tmp4;
      let tmp7;
      const obj = react;
      const cResult = obj.c(4);
      isInCooldown = isInCooldown.isInCooldown;
      if (cResult[0] !== isInCooldown) {
        const items = [];
        if (!isInCooldown) {
          items.push(dismissible_content.DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING);
        }
        cResult[0] = isInCooldown;
        cResult[1] = items;
        tmp4 = items;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = useSelectedDismissibleContent;
      const tmp6 =
        _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp4), 1)[0] ===
        dismissible_content.DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
      if (cResult[2] !== tmp6) {
        const obj2 = { willShowGlobalSearchOnboarding: tmp6 };
        cResult[2] = tmp6;
        cResult[3] = obj2;
        tmp7 = obj2;
      } else {
        tmp7 = cResult[3];
      }
      return tmp7;
    }
  : (isInCooldown) => {
      const items = [];
      if (!isInCooldown.isInCooldown) {
        items.push(dismissible_content.DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING);
      }
      const obj = useSelectedDismissibleContent;
      const obj2 = {
        willShowGlobalSearchOnboarding:
          _slicedToArray(obj.useSelectedDismissibleContent(items), 1)[0] ===
          dismissible_content.DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING,
      };
      return obj2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let recentApplicationCommandMetadata;
      let recentMessageMetadata;
      let tmp11;
      let tmp13;
      let tmp15;
      let tmp16;
      let tmp17;
      let tmp20;
      let tmp21;
      let tmp7;
      let triggeredOnboardingContentMetadata;
      let obj = channelId(576);
      const cResult = obj.c(32);
      channelId = channelId.channelId;
      const timestamp = Date.now();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function s() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = channelId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      const tmp10 = closure_15();
      if (cResult[3] !== guild_id) {
        const obj2 = { guildId: guild_id };
        cResult[3] = guild_id;
        cResult[4] = obj2;
        tmp11 = obj2;
      } else {
        tmp11 = cResult[4];
      }
      const tmp12 = closure_16(tmp11);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { currentTimeMs: timestamp };
        cResult[5] = obj3;
        tmp13 = obj3;
      } else {
        tmp13 = cResult[5];
      }
      const tmp14 = closure_17(tmp13);
      if (cResult[6] !== tmp14) {
        const obj4 = { isInCooldown: tmp14 };
        cResult[6] = tmp14;
        cResult[7] = obj4;
        tmp15 = obj4;
      } else {
        tmp15 = cResult[7];
      }
      const willShowGlobalSearchOnboarding = closure_18(tmp15).willShowGlobalSearchOnboarding;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AppLauncherOnboardingStore];
        class T {
          constructor() {
            const obj = {
              recentMessageMetadata: AppLauncherOnboardingStore.getRecentMessageMetadata(),
              recentApplicationCommandMetadata: AppLauncherOnboardingStore.getRecentApplicationCommandMetadata(),
            };
            return obj;
          }
        }
        cResult[8] = items1;
        cResult[9] = T;
        tmp17 = T;
        tmp16 = items1;
      } else {
        tmp16 = cResult[8];
        tmp17 = cResult[9];
      }
      const tmpResult6 = channelId(504);
      const stateFromStoresObject = tmpResult6.useStateFromStoresObject(tmp16, tmp17);
      ({ recentMessageMetadata, recentApplicationCommandMetadata } = stateFromStoresObject);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [AppLauncherOnboardingPersistedStore];
        class P {
          constructor() {
            return triggeredOnboardingContentMetadata.getTriggeredOnboardingContentMetadata();
          }
        }
        cResult[10] = items2;
        cResult[11] = P;
        tmp21 = P;
        tmp20 = items2;
      } else {
        tmp20 = cResult[10];
        tmp21 = cResult[11];
      }
      const tmpResult7 = channelId(504);
      const stateFromStores1 = tmpResult7.useStateFromStores(tmp20, tmp21);
      if (cResult[12] === channelId) {
        let tmp24;
        if (cResult[13] === recentMessageMetadata) {
          tmp24 = cResult[14];
        }
        const recentMessageMetadata2 = tmp24.recentMessageMetadata;
        let tmp27 = null != recentMessageMetadata2;
        class P {
          constructor() {
            return triggeredOnboardingContentMetadata.getTriggeredOnboardingContentMetadata();
          }
        }
        if (tmp27) {
          tmp27 = tmp25 < recentMessageMetadata2.timeMs + closure_10;
        }
        if (tmp27) {
          let channelId1;
          if (recentMessageMetadata2 != null) {
            channelId1 = recentMessageMetadata2.channelId;
          }
          tmp27 = channelId1 === tmp26;
        }
        if (cResult[15] === channelId) {
          let tmp30;
          if (cResult[16] === recentApplicationCommandMetadata) {
            tmp30 = cResult[17];
          }
          const recentApplicationCommandMetadata2 = tmp30.recentApplicationCommandMetadata;
          let tmp33 = null != recentApplicationCommandMetadata2;
          class P {
            constructor() {
              return triggeredOnboardingContentMetadata.getTriggeredOnboardingContentMetadata();
            }
          }
          if (tmp33) {
            tmp33 = tmp31 < recentApplicationCommandMetadata2.timeMs + closure_11;
          }
          if (tmp33) {
            let channelId2;
            if (recentApplicationCommandMetadata2 != null) {
              channelId2 = recentApplicationCommandMetadata2.channelId;
            }
            tmp33 = channelId2 === tmp32;
          }
          let applicationId;
          if (recentApplicationCommandMetadata != null) {
            applicationId = recentApplicationCommandMetadata.applicationId;
          }
          const tmpResult8 = channelId(4698);
          result = tmpResult8.useIsDismissibleContentDismissed_UNSAFE(
            tmp(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER,
          );
          const tmpResult9 = channelId(4698);
          const result1 = tmpResult9.useIsDismissibleContentDismissed_UNSAFE(
            tmp(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER,
          );
          const tmpResult10 = channelId(4698);
          const result2 = tmpResult10.useIsDismissibleContentDismissed_UNSAFE(
            tmp(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER,
          );
          if (cResult[18] === stateFromStores) {
            if (cResult[19] === channelId) {
              if (cResult[20] === result2) {
                if (cResult[21] === result1) {
                  if (cResult[22] === result) {
                    if ((cResult[23] === applicationId) === BuiltInSectionId.BUILT_IN) {
                      if (cResult[24] === tmp33) {
                        if (cResult[25] === tmp14) {
                          if (cResult[26] === tmp12) {
                            if (cResult[27] === tmp27) {
                              if (cResult[28] === tmp10) {
                                if (cResult[29] === stateFromStores1) {
                                  let tmp42;
                                  if (cResult[30] === willShowGlobalSearchOnboarding) {
                                    tmp42 = cResult[31];
                                  }
                                  return tmp42;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj5 = {
            canShowOnboarding: false,
            canShowBotsBanner: false,
            canShowAppsOrActivitiesBanner: false,
            willShowGlobalSearchOnboarding: false,
            fromTriggeredOnboarding: false,
          };
          const tmp43 =
            null != stateFromStores1 &&
            stateFromStores1.channelId === channelId &&
            stateFromStores1.timeMs + DAY > timestamp;
          if (null != stateFromStores) {
            let tmp45 = !tmp33;
            if (tmp33) {
              tmp45 = tmp38;
            }
            if (!tmp45) {
              tmp45 = result;
            }
            class P {
              constructor() {
                return triggeredOnboardingContentMetadata.getTriggeredOnboardingContentMetadata();
              }
            }
            if (!tmp45) {
              obj5.canShowOnboarding = true;
              obj5.canShowBotsBanner = true;
            }
            let tmp46 = tmp10 || !tmp27 || !tmp12 || tmp14;
            if (!tmp46) {
              tmp46 = result1 && result2;
            }
            if (!tmp46) {
              obj5.canShowOnboarding = true;
              obj5.canShowAppsOrActivitiesBanner = true;
            }
            if (willShowGlobalSearchOnboarding) {
              obj5.willShowGlobalSearchOnboarding = true;
              obj5.canShowOnboarding = true;
            }
            const tmp48 = !obj5.canShowOnboarding && tmp43;
            if (tmp48) {
              obj5.canShowOnboarding = true;
              obj5.canShowBotsBanner = stateFromStores1.canShowBotsBanner;
              class P {
                constructor() {
                  return triggeredOnboardingContentMetadata.getTriggeredOnboardingContentMetadata();
                }
              }
              obj5.willShowGlobalSearchOnboarding = stateFromStores1.willShowGlobalSearchOnboarding;
              obj5.fromTriggeredOnboarding = true;
            }
          }
          cResult[18] = stateFromStores;
          cResult[19] = channelId;
          cResult[20] = result2;
          cResult[21] = result1;
          cResult[22] = result;
          cResult[23] = applicationId === BuiltInSectionId.BUILT_IN;
          cResult[24] = tmp33;
          cResult[25] = tmp14;
          cResult[26] = tmp12;
          cResult[27] = tmp27;
          cResult[28] = tmp10;
          cResult[29] = stateFromStores1;
          cResult[30] = willShowGlobalSearchOnboarding;
          cResult[31] = obj5;
          tmp42 = obj5;
        }
        const obj6 = { currentTimeMs: timestamp, recentApplicationCommandMetadata, channelId };
        cResult[15] = channelId;
        cResult[16] = recentApplicationCommandMetadata;
        cResult[17] = obj6;
        tmp30 = obj6;
      }
      const obj7 = { currentTimeMs: timestamp, recentMessageMetadata, channelId };
      cResult[12] = channelId;
      cResult[13] = recentMessageMetadata;
      cResult[14] = obj7;
      tmp24 = obj7;
    }
  : (channelId) => {
      let applicationId;
      let recentApplicationCommandMetadata;
      let recentMessageMetadata;
      let triggeredOnboardingContentMetadata;
      channelId = channelId.channelId;
      const timestamp = Date.now();
      let obj = channelId(504);
      const items = [ChannelStore];
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      let tmp6 = closure_15();
      const tmp7 = closure_16({ guildId: guild_id });
      const tmp8 = closure_17({ currentTimeMs: timestamp });
      const willShowGlobalSearchOnboarding = closure_18({ isInCooldown: tmp8 }).willShowGlobalSearchOnboarding;
      const items1 = [AppLauncherOnboardingStore];
      const tmp2Result = channelId(504);
      const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items1, () => {
        const obj = {
          recentMessageMetadata: AppLauncherOnboardingStore.getRecentMessageMetadata(),
          recentApplicationCommandMetadata: AppLauncherOnboardingStore.getRecentApplicationCommandMetadata(),
        };
        return obj;
      });
      ({ recentMessageMetadata, recentApplicationCommandMetadata } = stateFromStoresObject);
      const items2 = [AppLauncherOnboardingPersistedStore];
      const tmp2Result5 = channelId(504);
      const stateFromStores1 = tmp2Result5.useStateFromStores(items2, () =>
        triggeredOnboardingContentMetadata.getTriggeredOnboardingContentMetadata(),
      );
      let tmp11 = null != recentMessageMetadata && timestamp < recentMessageMetadata.timeMs + closure_10;
      if (tmp11) {
        let channelId1;
        if (recentMessageMetadata != null) {
          channelId1 = recentMessageMetadata.channelId;
        }
        tmp11 = channelId1 === channelId;
      }
      let tmp14 =
        null != recentApplicationCommandMetadata && timestamp < recentApplicationCommandMetadata.timeMs + closure_11;
      if (tmp14) {
        let channelId2;
        if (recentApplicationCommandMetadata != null) {
          channelId2 = recentApplicationCommandMetadata.channelId;
        }
        tmp14 = channelId2 === channelId;
      }
      if (recentApplicationCommandMetadata != null) {
        applicationId = recentApplicationCommandMetadata.applicationId;
      }
      const BUILT_IN = BuiltInSectionId.BUILT_IN;
      const tmp2Result6 = channelId(4698);
      result = tmp2Result6.useIsDismissibleContentDismissed_UNSAFE(
        tmp2(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER,
      );
      const tmp2Result7 = channelId(4698);
      let result1 = tmp2Result7.useIsDismissibleContentDismissed_UNSAFE(
        tmp2(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER,
      );
      let tmp20 = null != stateFromStores1;
      const tmp2Result8 = channelId(4698);
      const result2 = tmp2Result8.useIsDismissibleContentDismissed_UNSAFE(
        tmp2(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER,
      );
      if (tmp20) {
        tmp20 = stateFromStores1.channelId === channelId;
      }
      if (tmp20) {
        tmp20 = stateFromStores1.timeMs + DAY > timestamp;
      }
      const obj2 = {
        canShowOnboarding: false,
        canShowBotsBanner: false,
        canShowAppsOrActivitiesBanner: false,
        willShowGlobalSearchOnboarding: false,
        fromTriggeredOnboarding: false,
      };
      if (null != stateFromStores) {
        let tmp22 = !tmp14;
        if (tmp14) {
          tmp22 = applicationId === BUILT_IN;
        }
        if (!tmp22) {
          tmp22 = result;
        }
        if (!tmp22) {
          tmp22 = tmp8;
        }
        if (!tmp22) {
          obj2.canShowOnboarding = true;
          obj2.canShowBotsBanner = true;
        }
        if (!tmp6) {
          tmp6 = !tmp11;
        }
        if (!tmp6) {
          tmp6 = !tmp7;
        }
        if (!tmp6) {
          tmp6 = tmp8;
        }
        if (!tmp6) {
          if (result1) {
            result1 = result2;
          }
          tmp6 = result1;
        }
        if (!tmp6) {
          obj2.canShowOnboarding = true;
          obj2.canShowAppsOrActivitiesBanner = true;
        }
        if (willShowGlobalSearchOnboarding) {
          obj2.willShowGlobalSearchOnboarding = true;
          obj2.canShowOnboarding = true;
        }
        const tmp23 = !obj2.canShowOnboarding && tmp20;
        if (tmp23) {
          obj2.canShowOnboarding = true;
          ({
            canShowBotsBanner: obj7.canShowBotsBanner,
            canShowAppsOrActivitiesBanner: obj7.canShowAppsOrActivitiesBanner,
            willShowGlobalSearchOnboarding: obj7.willShowGlobalSearchOnboarding,
          } = stateFromStores1);
          obj2.fromTriggeredOnboarding = true;
        }
      }
      return obj2;
    };
let result1 = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx",
);

export default tmp3;
export const RECENT_MESSAGE_MS = result;
