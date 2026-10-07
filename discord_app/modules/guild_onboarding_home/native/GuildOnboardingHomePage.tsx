// === Module 16546: GuildOnboardingHomePage ===

// Module 16546 (GuildOnboardingHomePage)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 7532 */;
import noop from "module_19" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4782 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5083 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 5084 */;

require = fn;
const NO_SETTINGS = fn(5083).NO_SETTINGS;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(24);
  guildId = guildId.guildId;
  let obj = guildId(576);
  let tmp = guildId;
  const sharedValue = guildId(4618).useSharedValue(-999);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class I {
      constructor() {
        return closure_5.getSettings(guildId);
      }
    }
    cResult[1] = guildId;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        return closure_5.getSettings(guildId);
      }
    }
  }
  let obj2 = guildId(4618);
  const stateFromStores = tmp(504).useStateFromStores(first, I);
  const tmp9 = stateFromStores(6738)(guildId);
  let tmp10 = !tmp9;
  if (!tmp9) {
    class I {
      constructor() {
        return closure_5.getSettings(guildId);
      }
    }
    if (stateFromStores != null) {
      class I {
        constructor() {
          return closure_5.getSettings(guildId);
        }
      }
      if (tmp12 != null) {
        class I {
          constructor() {
            return closure_5.getSettings(guildId);
          }
        }
      }
    }
    if (undefined == null) {
      class I {
        constructor() {
          return closure_5.getSettings(guildId);
        }
      }
    }
    tmp10 = 0 === tmp11;
  }
  dependencyMap = tmp10;
  if (cResult[3] === guildId) {
    class I {
      constructor() {
        return closure_5.getSettings(guildId);
      }
    }
    if (cResult[6] === guildId) {
      class I {
        constructor() {
          return closure_5.getSettings(guildId);
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
    if (stateFromStores === NO_SETTINGS) {
      const guildHomeSettings = GuildOnboardingHomeActionCreators.fetchGuildHomeSettings(guildId);
    } else if (null != stateFromStores) {
      const obj = {};
      const obj3 = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      const newMemberActions = stateFromStores.newMemberActions;
      let num;
      if (newMemberActions != null) {
        num = newMemberActions.length;
      }
      if (num == null) {
        num = 0;
      }
      obj.num_member_actions = num;
      let completedActions = GuildOnboardingMemberActionStore.getCompletedActions(guildId);
      if (completedActions == null) {
        completedActions = {};
      }
      obj.num_member_actions_completed = Object.keys(completedActions).length;
      const resourceChannels = stateFromStores.resourceChannels;
      let num2;
      if (resourceChannels != null) {
        num2 = resourceChannels.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj.num_resource_channels = num2;
      obj3.track(AnalyticEvents.SERVER_GUIDE_VIEWED, obj);
    }
  };
  cResult[3] = guildId;
  cResult[4] = stateFromStores;
  cResult[5] = fn;
  const tmpResult = tmp(504);
}) : ((guildId) => {
  guildId = guildId.guildId;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  const sharedValue = guildId(4618).useSharedValue(-999);
  let obj = guildId(4618);
  const items = [GuildOnboardingHomeSettingsStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getSettings(guildId));
  let tmp4 = stateFromStores;
  const tmp5 = stateFromStores(6738)(guildId);
  let tmp6 = !tmp5;
  if (!tmp5) {
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
    tmp6 = 0 === num;
  }
  dependencyMap = tmp6;
  const items1 = [guildId, stateFromStores, tmp6];
  const effect = noop.useEffect(() => {
    if (stateFromStores === NO_SETTINGS) {
      const guildHomeSettings = GuildOnboardingHomeActionCreators.fetchGuildHomeSettings(guildId);
    } else if (null != stateFromStores) {
      const obj = {};
      const obj3 = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      const newMemberActions = stateFromStores.newMemberActions;
      let num;
      if (newMemberActions != null) {
        num = newMemberActions.length;
      }
      if (num == null) {
        num = 0;
      }
      obj.num_member_actions = num;
      let completedActions = GuildOnboardingMemberActionStore.getCompletedActions(guildId);
      if (completedActions == null) {
        completedActions = {};
      }
      obj.num_member_actions_completed = Object.keys(completedActions).length;
      const resourceChannels = stateFromStores.resourceChannels;
      let num2;
      if (resourceChannels != null) {
        num2 = resourceChannels.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj.num_resource_channels = num2;
      obj3.track(AnalyticEvents.SERVER_GUIDE_VIEWED, obj);
    }
  }, items1);
  const items2 = [guildId, tmp6, stateFromStores];
  const effect1 = noop.useEffect(() => {
    let tmp = closure_2;
    if (closure_2) {
      tmp = stateFromStores !== NO_SETTINGS;
    }
    if (tmp) {
      const result = GuildActionCreatorsDefault.escapeToDefaultChannel(guildId);
    }
  }, items2);
  if (tmp6) {
    return null;
  } else {
    let obj3 = { guildId, scrollValue: sharedValue, children: null };
    const obj4 = { guildId, hideDescription: tmp5 };
    const items3 = [closure_9(tmp4(16547), obj4), ];
    if (tmp5) {
      let obj5 = { children: null };
      const obj6 = { guildId };
      const items4 = [closure_9(tmp4(16552), obj6), , ];
      const obj7 = { guildId };
      items4[1] = closure_9(tmp4(16556), obj7);
      tmp4 = tmp4(16557);
      const obj8 = { guildId };
      tmp = closure_9(tmp4, obj8);
      items4[2] = tmp;
      obj5.children = items4;
      let tmp12Result = closure_11(closure_10, obj5);
    } else {
      const obj9 = { guildId };
      tmp12Result = closure_9(tmp4(16560), obj9);
    }
    items3[1] = tmp12Result;
    obj3.children = items3;
    closure_11(tmp4(16563), obj3);
    const tmp4Result = tmp4(16563);
  }
  let obj2 = guildId(504);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(canSeeOnboardingHome[7]).c(9);
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
  let obj = guildId(canSeeOnboardingHome[7]);
  const stateFromStores = guildId(canSeeOnboardingHome[9]).useStateFromStores(tmp4, tmp5);
  const tmpResult = guildId(canSeeOnboardingHome[9]);
  canSeeOnboardingHome = guildId(canSeeOnboardingHome[21]).useCanSeeOnboardingHome(guildId);
  if (cResult[2] === canSeeOnboardingHome) {
    if (cResult[3] === guildId) {
      if (cResult[4] === stateFromStores) {
        let tmp9 = cResult[5];
        let tmp10 = cResult[6];
      }
      const effect = noop.useEffect(tmp9, tmp10);
      if (cResult[7] !== guildId) {
        const obj2 = { guildId };
        const tmp16 = closure_9(closure_12, obj2);
        cResult[7] = guildId;
        cResult[8] = tmp16;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[8];
      }
      return tmp13;
    }
  }
  const fn2 = function _() {
    if (stateFromStores) {
      if (!canSeeOnboardingHome) {
        const result = GuildActionCreatorsDefault.escapeToDefaultChannel(guildId);
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
  const tmpResult2 = guildId(canSeeOnboardingHome[21]);
}) : ((guildId) => {
  guildId = guildId.guildId;
  let canSeeOnboardingHome;
  const items = [ExperimentStore];
  const stateFromStores = guildId(canSeeOnboardingHome[9]).useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  let obj = guildId(canSeeOnboardingHome[9]);
  canSeeOnboardingHome = guildId(canSeeOnboardingHome[21]).useCanSeeOnboardingHome(guildId);
  const items1 = [guildId, stateFromStores, canSeeOnboardingHome];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      if (!canSeeOnboardingHome) {
        const result = GuildActionCreatorsDefault.escapeToDefaultChannel(guildId);
      }
    }
  }, items1);
  return closure_9(closure_12, { guildId });
});