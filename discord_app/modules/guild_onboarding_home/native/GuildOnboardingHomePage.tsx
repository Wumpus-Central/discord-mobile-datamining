// === Module 16653: GuildOnboardingHomePage ===

// Module 16653 (GuildOnboardingHomePage)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4816 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5601 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12414 */;
import noop from "module_19" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4552 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 4823 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 4824 */;

require = fn;
function GuildOnboardingHomePage(guildId) {
  guildId = guildId.guildId;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  const sharedValue = guildId(4373).useSharedValue(-999);
  let obj = guildId(4373);
  const items = [GuildOnboardingHomeSettingsStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getSettings(guildId));
  let tmp4 = stateFromStores;
  const tmp5 = stateFromStores(7326)(guildId);
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
    const items3 = [closure_9(tmp4(16655), obj4), ];
    if (tmp5) {
      let obj5 = { children: null };
      const obj6 = { guildId };
      const items4 = [closure_9(tmp4(16660), obj6), , ];
      const obj7 = { guildId };
      items4[1] = closure_9(tmp4(16664), obj7);
      tmp4 = tmp4(16665);
      const obj8 = { guildId };
      tmp = closure_9(tmp4, obj8);
      items4[2] = tmp;
      obj5.children = items4;
      let tmp12Result = closure_11(closure_10, obj5);
    } else {
      const obj9 = { guildId };
      tmp12Result = closure_9(tmp4(16668), obj9);
    }
    items3[1] = tmp12Result;
    obj3.children = items3;
    closure_11(tmp4(16654), obj3);
    const tmp4Result = tmp4(16654);
  }
  let obj2 = guildId(504);
}
const NO_SETTINGS = fn(4823).NO_SETTINGS;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx");

export default function GuildOnboardingHomePageGuard(guildId) {
  guildId = guildId.guildId;
  let canSeeOnboardingHome;
  const items = [ExperimentStore];
  const stateFromStores = guildId(canSeeOnboardingHome[7]).useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  let obj = guildId(canSeeOnboardingHome[7]);
  canSeeOnboardingHome = guildId(canSeeOnboardingHome[19]).useCanSeeOnboardingHome(guildId);
  const items1 = [guildId, stateFromStores, canSeeOnboardingHome];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      if (!canSeeOnboardingHome) {
        const result = GuildActionCreatorsDefault.escapeToDefaultChannel(guildId);
      }
    }
  }, items1);
  return closure_9(GuildOnboardingHomePage, { guildId });
};