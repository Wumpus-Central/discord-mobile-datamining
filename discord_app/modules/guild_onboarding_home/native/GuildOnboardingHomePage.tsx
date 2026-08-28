// === Module 16069: GuildOnboardingHomePage ===

// Module 16069 (GuildOnboardingHomePage)
import closure_3 from "noop" /* 19 */;
import closure_4 from "getHash" /* 4359 */;
import closure_5 from "handleSettingsLoadSuccess" /* 4673 */;
import { NO_SETTINGS } from "handleSettingsLoadSuccess" /* 4673 */;
import closure_7 from "set" /* 4674 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
function GuildOnboardingHomePage(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  let obj = guildId(4186);
  const sharedValue = obj.useSharedValue(-999);
  obj1 = guildId(589);
  const items = [closure_5];
  stateFromStores = obj1.useStateFromStores(items, () => closure_1_5.getSettings(guildId));
  let tmp4 = stateFromStores;
  const tmp5 = stateFromStores(6035)(guildId);
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
    if (stateFromStores === closure_1_6) {
      const guildHomeSettings = guildId(11787).fetchGuildHomeSettings(guildId);
      const obj2 = guildId(11787);
    } else if (null != tmp) {
      const obj = {};
      const obj3 = stateFromStores(698);
      const merged = Object.assign(guildId(4666).collectGuildAnalyticsMetadata(guildId));
      const newMemberActions = tmp.newMemberActions;
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
      const resourceChannels = tmp.resourceChannels;
      let num2;
      if (resourceChannels != null) {
        num2 = resourceChannels.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj.num_resource_channels = num2;
      obj3.track(closure_1_8.SERVER_GUIDE_VIEWED, obj);
      const obj5 = guildId(4666);
      const tmp14 = guildId;
    }
  }, items1);
  const items2 = [guildId, tmp6, stateFromStores];
  const effect1 = React.useEffect(() => {
    let tmp = dependencyMap;
    if (dependencyMap) {
      tmp = stateFromStores !== closure_1_6;
    }
    if (tmp) {
      const result = stateFromStores(5422).escapeToDefaultChannel(guildId);
      const obj = stateFromStores(5422);
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
    const items3 = [callback(tmp4(16071), obj), ];
    if (tmp5) {
      obj1 = { children: null };
      let obj2 = { guildId: null };
      obj2[0] = guildId;
      const items4 = [tmp12(tmp4(16076), obj2), , ];
      let obj3 = { guildId: null };
      obj3[0] = guildId;
      items4[1] = tmp12(tmp4(16080), obj3);
      tmp4 = tmp4(16081);
      const obj4 = { guildId: null };
      obj4[0] = guildId;
      tmp = tmp12(tmp4, obj4);
      items4[2] = tmp;
      obj1[0] = items4;
      let tmp12Result = tmp10(closure_10, obj1);
    } else {
      let obj5 = { guildId: null };
      obj5[0] = guildId;
      tmp12Result = tmp12(tmp4(16084), obj5);
    }
    items3[1] = tmp12Result;
    obj[2] = items3;
    closure_11(tmp4(16070), obj);
    const tmp4Result = tmp4(16070);
  }
}
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let result = require("set").fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx");

export default function GuildOnboardingHomePageGuard(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  let canSeeOnboardingHome;
  const items = [closure_4];
  stateFromStores = guildId(canSeeOnboardingHome[7]).useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
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