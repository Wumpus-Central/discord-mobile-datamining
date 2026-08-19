// discord_app/modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx
import noop from "../../../../_runtime/00019_noop.js";
import getHash from "../../experiments/ExperimentStore.tsx";
import handleSettingsLoadSuccess from "../GuildOnboardingHomeSettingsStore.tsx";
import { NO_SETTINGS } from "../GuildOnboardingHomeSettingsStore.tsx";
import set from "../GuildOnboardingMemberActionStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
function GuildOnboardingHomePage(guildId) {
  guildId = guildId.guildId;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  let obj = guildId(4115);
  const sharedValue = obj.useSharedValue(-999);
  obj1 = guildId(589);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_5.getSettings(guildId));
  let tmp4 = stateFromStores;
  const tmp5 = stateFromStores(5284)(guildId);
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
  const effect = React.useEffect(() => {
    if (stateFromStores === NO_SETTINGS) {
      const guildHomeSettings = guildId(11452).fetchGuildHomeSettings(guildId);
      const obj2 = guildId(11452);
    } else if (null != stateFromStores) {
      const obj = {};
      const obj3 = stateFromStores(698);
      const merged = Object.assign(guildId(5042).collectGuildAnalyticsMetadata(guildId));
      const newMemberActions = stateFromStores.newMemberActions;
      let num;
      if (newMemberActions != null) {
        num = newMemberActions.length;
      }
      if (num == null) {
        num = 0;
      }
      obj.num_member_actions = num;
      let completedActions = closure_1_7.getCompletedActions(guildId);
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
      const obj5 = guildId(5042);
    }
  }, items1);
  const items2 = [guildId, tmp6, stateFromStores];
  const effect1 = React.useEffect(() => {
    let tmp = dependencyMap;
    if (dependencyMap) {
      tmp = stateFromStores !== NO_SETTINGS;
    }
    if (tmp) {
      const result = stateFromStores(6778).escapeToDefaultChannel(guildId);
      const obj = stateFromStores(6778);
    }
  }, items2);
  if (tmp6) {
    return null;
  } else {
    obj = { guildId: null, scrollValue: null, children: null };
    obj[0] = guildId;
    obj[1] = sharedValue;
    obj = { guildId: null, hideDescription: null };
    obj[0] = guildId;
    obj[1] = tmp5;
    const items3 = [callback(tmp4(15808), obj), ];
    if (tmp5) {
      obj1 = { children: null };
      let obj2 = { guildId: null };
      obj2[0] = guildId;
      const items4 = [callback(tmp4(15813), obj2), , ];
      let obj3 = { guildId: null };
      obj3[0] = guildId;
      items4[1] = callback(tmp4(15817), obj3);
      tmp4 = tmp4(15818);
      const obj4 = { guildId: null };
      obj4[0] = guildId;
      tmp = callback(tmp4, obj4);
      items4[2] = tmp;
      obj1[0] = items4;
      let tmp12Result = callback(closure_10, obj1);
    } else {
      let obj5 = { guildId: null };
      obj5[0] = guildId;
      tmp12Result = callback(tmp4(15821), obj5);
    }
    items3[1] = tmp12Result;
    obj[2] = items3;
    callback(tmp4(15807), obj);
    const tmp4Result = tmp4(15807);
  }
}
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let result = require("obj132").fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx");

export default function GuildOnboardingHomePageGuard(guildId) {
  guildId = guildId.guildId;
  let canSeeOnboardingHome;
  const items = [closure_4];
  const stateFromStores = guildId(canSeeOnboardingHome[7]).useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  let obj = guildId(canSeeOnboardingHome[7]);
  canSeeOnboardingHome = guildId(canSeeOnboardingHome[19]).useCanSeeOnboardingHome(guildId);
  const items1 = [guildId, stateFromStores, canSeeOnboardingHome];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!canSeeOnboardingHome) {
        const result = stateFromStores(canSeeOnboardingHome[12]).escapeToDefaultChannel(guildId);
        const obj = stateFromStores(canSeeOnboardingHome[12]);
      }
    }
  }, items1);
  return callback(GuildOnboardingHomePage, { guildId });
};