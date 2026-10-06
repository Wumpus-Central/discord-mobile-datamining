// === Module 16546: GuildOnboardingHomePage ===

// Module 16546 (GuildOnboardingHomePage)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import GuildOnboardingHomeSettingsStore2 from "GuildOnboardingHomeSettingsStore" /* 5083 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 7532 */;
import react from "react" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4782 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 5084 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildOnboardingHomeSettingsStore = GuildOnboardingHomeSettingsStore2;
let dependencyMap, guildId;

let c10;
let c9;
let unpackModuleId;
const NO_SETTINGS = GuildOnboardingHomeSettingsStore2.NO_SETTINGS;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_2;
  let first;
  let tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(24);
  guildId = guildId.guildId;
  let obj2 = guildId(4618);
  const sharedValue = obj2.useSharedValue(-999);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class I {
      constructor() {
        return GuildOnboardingHomeSettingsStore.getSettings(guildId);
      }
    }
    let num2 = 1;
    cResult[1] = guildId;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        return GuildOnboardingHomeSettingsStore.getSettings(guildId);
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, I);
  let tmp10 = !stateFromStores(6738)(guildId);
  const tmp9 = stateFromStores(6738)(guildId);
  if (tmp10) {
    class I {
      constructor() {
        return GuildOnboardingHomeSettingsStore.getSettings(guildId);
      }
    }
    if (stateFromStores != null) {
      class I {
        constructor() {
          return GuildOnboardingHomeSettingsStore.getSettings(guildId);
        }
      }
      if (tmp12 != null) {
        class I {
          constructor() {
            return GuildOnboardingHomeSettingsStore.getSettings(guildId);
          }
        }
      }
    }
    if (undefined == null) {
      class I {
        constructor() {
          return GuildOnboardingHomeSettingsStore.getSettings(guildId);
        }
      }
    }
    tmp10 = 0 === tmp11;
  }
  dependencyMap = tmp10;
  if (cResult[3] === guildId) {
    class I {
      constructor() {
        return GuildOnboardingHomeSettingsStore.getSettings(guildId);
      }
    }
    if (cResult[6] === guildId) {
      class I {
        constructor() {
          return GuildOnboardingHomeSettingsStore.getSettings(guildId);
        }
      }
    }
    const items1 = [guildId, stateFromStores, tmp10];
    cResult[6] = guildId;
    cResult[7] = tmp10;
    cResult[8] = stateFromStores;
    cResult[9] = items1;
  }
  const fn = function p() {
    let completedActions;
    let keys;
    let num;
    let num2;
    if (stateFromStores === NO_SETTINGS) {
      const obj2 = GuildOnboardingHomeActionCreators;
      const guildHomeSettings = obj2.fetchGuildHomeSettings(guildId);
    } else if (null != stateFromStores) {
      const obj = { num_member_actions: num, num_member_actions_completed: keys(completedActions).length, num_resource_channels: num2 };
      const track = AnalyticsUtilsDefault.track;
      const SERVER_GUIDE_VIEWED = AnalyticEvents.SERVER_GUIDE_VIEWED;
      AnalyticsUtilsDefault;
      const obj4 = AppAnalyticsUtils;
      const merged = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
      const newMemberActions = stateFromStores.newMemberActions;
      num = undefined;
      if (newMemberActions != null) {
        num = newMemberActions.length;
      }
      if (num == null) {
        num = 0;
      }
      const _Object = Object;
      keys = Object.keys;
      completedActions = GuildOnboardingMemberActionStore.getCompletedActions(guildId);
      if (completedActions == null) {
        completedActions = {};
      }
      const resourceChannels = stateFromStores.resourceChannels;
      num2 = undefined;
      if (resourceChannels != null) {
        num2 = resourceChannels.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      track(SERVER_GUIDE_VIEWED, obj);
    }
  };
  cResult[3] = guildId;
  cResult[4] = stateFromStores;
  cResult[5] = fn;
}) : ((guildId) => {
  let closure_2;
  let items3;
  let items4;
  guildId = guildId.guildId;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  let obj = guildId(4618);
  const sharedValue = obj.useSharedValue(-999);
  let obj2 = guildId(504);
  const items = [GuildOnboardingHomeSettingsStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getSettings(guildId));
  const tmp5 = stateFromStores(6738)(guildId);
  let tmp6 = !tmp5;
  if (tmp6) {
    let num;
    if (stateFromStores != null) {
      let resourceChannels = stateFromStores.resourceChannels;
      if (resourceChannels != null) {
        num = resourceChannels.length;
      }
    }
    if (num == null) {
      num = 0;
    }
    let num2 = 0;
    tmp6 = 0 === num;
  }
  dependencyMap = tmp6;
  const items1 = [guildId, stateFromStores, tmp6];
  const effect = react.useEffect(() => {
    let completedActions;
    let keys;
    let num;
    let num2;
    if (stateFromStores === NO_SETTINGS) {
      const obj2 = GuildOnboardingHomeActionCreators;
      const guildHomeSettings = obj2.fetchGuildHomeSettings(guildId);
    } else if (null != stateFromStores) {
      const obj = { num_member_actions: num, num_member_actions_completed: keys(completedActions).length, num_resource_channels: num2 };
      const track = AnalyticsUtilsDefault.track;
      const SERVER_GUIDE_VIEWED = AnalyticEvents.SERVER_GUIDE_VIEWED;
      AnalyticsUtilsDefault;
      const obj4 = AppAnalyticsUtils;
      const merged = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
      const newMemberActions = stateFromStores.newMemberActions;
      num = undefined;
      if (newMemberActions != null) {
        num = newMemberActions.length;
      }
      if (num == null) {
        num = 0;
      }
      const _Object = Object;
      keys = Object.keys;
      completedActions = GuildOnboardingMemberActionStore.getCompletedActions(guildId);
      if (completedActions == null) {
        completedActions = {};
      }
      const resourceChannels = stateFromStores.resourceChannels;
      num2 = undefined;
      if (resourceChannels != null) {
        num2 = resourceChannels.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      track(SERVER_GUIDE_VIEWED, obj);
    }
  }, items1);
  const items2 = [guildId, tmp6, stateFromStores];
  const effect1 = react.useEffect(() => {
    const tmp = closure_2 && stateFromStores !== NO_SETTINGS;
    if (tmp) {
      const obj = GuildActionCreatorsDefault;
      const result = obj.escapeToDefaultChannel(guildId);
    }
  }, items2);
  let tmp11Result2 = null;
  if (!tmp6) {
    let tmp13Result;
    let obj4 = { guildId, hideDescription: tmp5 };
    const obj3 = { guildId, scrollValue: sharedValue, children: items3 };
    items3 = [, ];
    const tmp4Result = stateFromStores(16563);
    items3[0] = closure_9(stateFromStores(16547), obj4);
    if (tmp5) {
      const obj5 = { children: items4 };
      const obj6 = { guildId };
      items4 = [closure_9(stateFromStores(16552), obj6), , ];
      const obj7 = { guildId };
      items4[1] = closure_9(stateFromStores(16556), obj7);
      const obj8 = { guildId };
      items4[2] = closure_9(stateFromStores(16557), obj8);
      tmp13Result = closure_11(closure_10, obj5);
    } else {
      const obj9 = { guildId };
      tmp13Result = closure_9(tmp4(16560), obj9);
    }
    items3[1] = tmp13Result;
    tmp11Result2 = closure_11(tmp4Result, obj3);
  }
  return tmp11Result2;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let canSeeOnboardingHome;
  let hasLoadedExperiments;
  let tmp4;
  let tmp5;
  let obj = guildId(canSeeOnboardingHome[7]);
  const cResult = obj.c(9);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ExperimentStore];
    const fn = function s() {
      return hasLoadedExperiments.hasLoadedExperiments;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = guildId(canSeeOnboardingHome[9]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmpResult2 = guildId(canSeeOnboardingHome[21]);
  canSeeOnboardingHome = tmpResult2.useCanSeeOnboardingHome(guildId);
  if (cResult[2] === canSeeOnboardingHome) {
    if (cResult[3] === guildId) {
      let tmp9;
      let tmp10;
      let tmp13;
      if (cResult[4] === stateFromStores) {
        tmp9 = cResult[5];
        tmp10 = cResult[6];
      }
      const effect = react.useEffect(tmp9, tmp10);
      if (cResult[7] !== guildId) {
        const obj2 = { guildId };
        const tmp16 = closure_9(closure_12, obj2);
        cResult[7] = guildId;
        cResult[8] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[8];
      }
      return tmp13;
    }
  }
  const fn2 = function _() {
    if (stateFromStores) {
      if (!canSeeOnboardingHome) {
        const obj = GuildActionCreatorsDefault;
        const result = obj.escapeToDefaultChannel(guildId);
      }
    }
  };
  const items1 = [guildId, stateFromStores, canSeeOnboardingHome];
  cResult[2] = canSeeOnboardingHome;
  cResult[3] = guildId;
  cResult[4] = stateFromStores;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp10 = items1;
  tmp9 = fn2;
}) : ((guildId) => {
  let hasLoadedExperiments;
  guildId = guildId.guildId;
  let canSeeOnboardingHome;
  let obj = guildId(canSeeOnboardingHome[9]);
  const items = [ExperimentStore];
  const stateFromStores = obj.useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  const obj2 = guildId(canSeeOnboardingHome[21]);
  canSeeOnboardingHome = obj2.useCanSeeOnboardingHome(guildId);
  const items1 = [guildId, stateFromStores, canSeeOnboardingHome];
  const effect = react.useEffect(() => {
    if (stateFromStores) {
      if (!canSeeOnboardingHome) {
        const obj = GuildActionCreatorsDefault;
        const result = obj.escapeToDefaultChannel(guildId);
      }
    }
  }, items1);
  return closure_9(closure_12, { guildId });
});
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx");

export default tmp3;