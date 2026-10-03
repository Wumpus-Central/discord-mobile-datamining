// === Module 11657: useCanShowAppLauncherOnboarding ===

// Module 11657 (useCanShowAppLauncherOnboarding)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import DurationsDefault from "Durations" /* 1102 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6891 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4780 */;
import UserStore from "UserStore" /* 1377 */;
import AppLauncherOnboardingPersistedStore from "AppLauncherOnboardingPersistedStore" /* 11658 */;
import AppLauncherOnboardingStore from "AppLauncherOnboardingStore" /* 11659 */;

require = fn;
const BuiltInSectionId = fn(5788).BuiltInSectionId;
let result = 5 * DurationsDefault.Millis.SECOND;
let c10 = result;
let closure_11 = 5 * DurationsDefault.Millis.SECOND;
let closure_12 = 14 * DurationsDefault.Millis.DAY;
const HOUR = DurationsDefault.Millis.HOUR;
const DAY = DurationsDefault.Millis.DAY;
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  let createdAt;
  if (stateFromStores != null) {
    createdAt = stateFromStores.createdAt;
  }
  let tmp9 = null != createdAt;
  if (tmp9) {
    const _Date = Date;
    const timestamp = Date.now();
    tmp9 = timestamp < SnowflakeUtilsDefault.extractTimestamp(stateFromStores.id) + closure_12;
  }
  return tmp9;
}) : (() => {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let createdAt;
  if (stateFromStores != null) {
    createdAt = stateFromStores.createdAt;
  }
  let tmp4 = null != createdAt;
  if (tmp4) {
    const _Date = Date;
    const timestamp = Date.now();
    tmp4 = timestamp < SnowflakeUtilsDefault.extractTimestamp(stateFromStores.id) + closure_12;
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(3);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberCountStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function s() {
      return GuildMemberCountStore.getMemberCount(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = guildId(576);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp6);
  let tmp8 = null != stateFromStores;
  if (tmp8) {
    tmp8 = stateFromStores < 200;
  }
  return tmp8;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const items = [GuildMemberCountStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(guildId));
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = stateFromStores < 200;
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((currentTimeMs) => {
  const cResult = c.c(2);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  let tmp8 = null != stateFromStores;
  if (tmp8) {
    tmp8 = currentTimeMs.currentTimeMs < stateFromStores + HOUR;
  }
  return tmp8;
}) : ((currentTimeMs) => {
  const items = [AppLauncherOnboardingPersistedStore];
  const stateFromStores = initialize.useStateFromStores(items, () => lastSeenTimeMs.getLastSeenTimeMs());
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = currentTimeMs.currentTimeMs < stateFromStores + HOUR;
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((isInCooldown) => {
  const cResult = c.c(4);
  isInCooldown = isInCooldown.isInCooldown;
  if (cResult[0] !== isInCooldown) {
    const items = [];
    if (!isInCooldown) {
      items.push(dismissible_content.DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING);
    }
    cResult[0] = isInCooldown;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(tmp4), 1)[0] === dismissible_content.DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
  if (cResult[2] !== tmp6) {
    const obj2 = { willShowGlobalSearchOnboarding: tmp6 };
    cResult[2] = tmp6;
    cResult[3] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : ((isInCooldown) => {
  const items = [];
  if (!isInCooldown.isInCooldown) {
    items.push(dismissible_content.DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING);
  }
  return { willShowGlobalSearchOnboarding: _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(items), 1)[0] === dismissible_content.DismissibleContent.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING };
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result1 = size.fileFinishedImporting("modules/app_launcher/native/onboarding/hooks/useCanShowAppLauncherOnboarding.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(576).c(32);
  channelId = channelId.channelId;
  const timestamp = Date.now();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp7);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const tmp10 = closure_15();
  if (cResult[3] !== guild_id) {
    const obj2 = { guildId: guild_id };
    cResult[3] = guild_id;
    cResult[4] = obj2;
    let tmp11 = obj2;
  } else {
    tmp11 = cResult[4];
  }
  const tmp12 = closure_16(tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { currentTimeMs: timestamp };
    cResult[5] = obj3;
    let tmp13 = obj3;
  } else {
    tmp13 = cResult[5];
  }
  const tmp14 = closure_17(tmp13);
  if (cResult[6] !== tmp14) {
    const obj4 = { isInCooldown: tmp14 };
    cResult[6] = tmp14;
    cResult[7] = obj4;
    let tmp15 = obj4;
  } else {
    tmp15 = cResult[7];
  }
  const willShowGlobalSearchOnboarding = closure_18(tmp15).willShowGlobalSearchOnboarding;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppLauncherOnboardingStore];
    class T {
      constructor() {
        obj = { recentMessageMetadata: closure_1_8.getRecentMessageMetadata(), recentApplicationCommandMetadata: closure_1_8.getRecentApplicationCommandMetadata() };
        return obj;
      }
    }
    cResult[8] = items1;
    cResult[9] = T;
    let tmp17 = T;
    let tmp16 = items1;
  } else {
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  const tmpResult = channelId(504);
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(tmp16, tmp17);
  ({ recentMessageMetadata, recentApplicationCommandMetadata } = stateFromStoresObject);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AppLauncherOnboardingPersistedStore];
    class P {
      constructor() {
        return closure_1_7.getTriggeredOnboardingContentMetadata();
      }
    }
    cResult[10] = items2;
    cResult[11] = P;
    let tmp21 = P;
    let tmp20 = items2;
  } else {
    tmp20 = cResult[10];
    tmp21 = cResult[11];
  }
  const tmpResult6 = channelId(504);
  const stateFromStores1 = channelId(504).useStateFromStores(tmp20, tmp21);
  if (cResult[12] === channelId) {
    if (cResult[13] === recentMessageMetadata) {
      let tmp24 = cResult[14];
    }
    const recentMessageMetadata2 = tmp24.recentMessageMetadata;
    let tmp27 = null != recentMessageMetadata2;
    class P {
      constructor() {
        return closure_1_7.getTriggeredOnboardingContentMetadata();
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
      if (cResult[16] === recentApplicationCommandMetadata) {
        let tmp30 = cResult[17];
      }
      const recentApplicationCommandMetadata2 = tmp30.recentApplicationCommandMetadata;
      let tmp33 = null != recentApplicationCommandMetadata2;
      class P {
        constructor() {
          return closure_1_7.getTriggeredOnboardingContentMetadata();
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
      result = tmp(4698).useIsDismissibleContentDismissed_UNSAFE(tmp(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
      const tmpResult8 = tmp(4698);
      const result1 = tmp(4698).useIsDismissibleContentDismissed_UNSAFE(tmp(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
      const tmpResult9 = tmp(4698);
      const result2 = tmp(4698).useIsDismissibleContentDismissed_UNSAFE(tmp(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
      if (cResult[18] === stateFromStores) {
        if (cResult[19] === channelId) {
          if (cResult[20] === result2) {
            if (cResult[21] === result1) {
              if (cResult[22] === result) {
                if (cResult[23] === tmp38) {
                  if (cResult[24] === tmp33) {
                    if (cResult[25] === tmp14) {
                      if (cResult[26] === tmp12) {
                        if (cResult[27] === tmp27) {
                          if (cResult[28] === tmp10) {
                            if (cResult[29] === stateFromStores1) {
                              if (cResult[30] === willShowGlobalSearchOnboarding) {
                                let tmp42 = cResult[31];
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
      let tmp43 = null != stateFromStores1 && stateFromStores1.channelId === channelId;
      if (tmp43) {
        tmp43 = stateFromStores1.timeMs + DAY > timestamp;
      }
      const obj5 = { canShowOnboarding: false, canShowBotsBanner: false, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding: false, fromTriggeredOnboarding: false };
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
            return closure_1_7.getTriggeredOnboardingContentMetadata();
          }
        }
        if (!tmp45) {
          obj5.canShowOnboarding = true;
          obj5.canShowBotsBanner = true;
        }
        let tmp46 = tmp10;
        if (!tmp10) {
          tmp46 = !tmp27;
        }
        if (!tmp46) {
          tmp46 = !tmp12;
        }
        if (!tmp46) {
          tmp46 = tmp14;
        }
        if (!tmp46) {
          let tmp47 = result1;
          if (result1) {
            tmp47 = result2;
          }
          tmp46 = tmp47;
        }
        if (!tmp46) {
          obj5.canShowOnboarding = true;
          obj5.canShowAppsOrActivitiesBanner = true;
        }
        if (willShowGlobalSearchOnboarding) {
          obj5.willShowGlobalSearchOnboarding = true;
          obj5.canShowOnboarding = true;
        }
        const canShowOnboarding = obj5.canShowOnboarding;
        let tmp48 = !canShowOnboarding;
        if (!canShowOnboarding) {
          tmp48 = tmp43;
        }
        if (tmp48) {
          obj5.canShowOnboarding = true;
          obj5.canShowBotsBanner = stateFromStores1.canShowBotsBanner;
          class P {
            constructor() {
              return closure_1_7.getTriggeredOnboardingContentMetadata();
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
      const tmpResult10 = tmp(4698);
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
  const tmpResult7 = channelId(504);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const timestamp = Date.now();
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let tmp6 = closure_15();
  const obj = channelId(504);
  const isInCooldown = closure_17({ currentTimeMs: timestamp });
  const tmp7 = closure_16({ guildId: guild_id });
  const items1 = [AppLauncherOnboardingStore];
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(items1, () => ({ recentMessageMetadata: AppLauncherOnboardingStore.getRecentMessageMetadata(), recentApplicationCommandMetadata: AppLauncherOnboardingStore.getRecentApplicationCommandMetadata() }));
  ({ recentMessageMetadata, recentApplicationCommandMetadata } = stateFromStoresObject);
  const tmp2Result = channelId(504);
  const items2 = [AppLauncherOnboardingPersistedStore];
  const stateFromStores1 = channelId(504).useStateFromStores(items2, () => triggeredOnboardingContentMetadata.getTriggeredOnboardingContentMetadata());
  let tmp11 = null != recentMessageMetadata;
  if (tmp11) {
    tmp11 = timestamp < recentMessageMetadata.timeMs + closure_10;
  }
  if (tmp11) {
    let channelId1;
    if (recentMessageMetadata != null) {
      channelId1 = recentMessageMetadata.channelId;
    }
    tmp11 = channelId1 === channelId;
  }
  let tmp14 = null != recentApplicationCommandMetadata;
  if (tmp14) {
    tmp14 = timestamp < recentApplicationCommandMetadata.timeMs + closure_11;
  }
  if (tmp14) {
    let channelId2;
    if (recentApplicationCommandMetadata != null) {
      channelId2 = recentApplicationCommandMetadata.channelId;
    }
    tmp14 = channelId2 === channelId;
  }
  if (recentApplicationCommandMetadata != null) {
    const applicationId = recentApplicationCommandMetadata.applicationId;
  }
  const tmp2Result5 = channelId(504);
  result = channelId(4698).useIsDismissibleContentDismissed_UNSAFE(tmp2(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_BOTS_BANNER);
  const tmp2Result6 = channelId(4698);
  let result1 = channelId(4698).useIsDismissibleContentDismissed_UNSAFE(tmp2(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_APPS_BANNER);
  const tmp2Result7 = channelId(4698);
  let tmp20 = null != stateFromStores1;
  const result2 = channelId(4698).useIsDismissibleContentDismissed_UNSAFE(tmp2(2036).DismissibleContent.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
  if (tmp20) {
    tmp20 = stateFromStores1.channelId === channelId;
  }
  if (tmp20) {
    tmp20 = stateFromStores1.timeMs + DAY > timestamp;
  }
  const obj2 = { canShowOnboarding: false, canShowBotsBanner: false, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding: false, fromTriggeredOnboarding: false };
  if (null != stateFromStores) {
    let tmp22 = !tmp14;
    if (tmp14) {
      tmp22 = applicationId === BuiltInSectionId.BUILT_IN;
    }
    if (!tmp22) {
      tmp22 = result;
    }
    if (!tmp22) {
      tmp22 = isInCooldown;
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
      tmp6 = isInCooldown;
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
    if (closure_18({ isInCooldown }).willShowGlobalSearchOnboarding) {
      obj2.willShowGlobalSearchOnboarding = true;
      obj2.canShowOnboarding = true;
    }
    const canShowOnboarding = obj2.canShowOnboarding;
    let tmp23 = !canShowOnboarding;
    if (!canShowOnboarding) {
      tmp23 = tmp20;
    }
    if (tmp23) {
      obj2.canShowOnboarding = true;
      ({ canShowBotsBanner: obj7.canShowBotsBanner, canShowAppsOrActivitiesBanner: obj7.canShowAppsOrActivitiesBanner, willShowGlobalSearchOnboarding: obj7.willShowGlobalSearchOnboarding } = stateFromStores1);
      obj2.fromTriggeredOnboarding = true;
    }
  }
  return obj2;
});
export const RECENT_MESSAGE_MS = result;