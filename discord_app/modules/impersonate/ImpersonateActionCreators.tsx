import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import initialize from "initialize";
import ME from "ME";
import { isStaticChannelRoute } from "set";

let closure_12;
let map1;
let unpackModuleId;
const require = arg1;
function updateImpersonating(closure_0, type) {
  data = data.getData(closure_0);
  if (tmp2) {
    let obj = importDefault(698);
    obj = { num_roles: null };
    const _Object = Object;
    obj[0] = Object.keys(data.roles).length;
    const merged = Object.assign(require(4388) /* collectGuildAnalyticsMetadata */.collectGuildAnalyticsMetadata(closure_0));
    obj.is_viewing_as_member = data.type === require(1940) /* ImpersonateType */.ImpersonateType.NEW_MEMBER;
    obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj);
    const obj3 = require(4388) /* collectGuildAnalyticsMetadata */;
    const tmp7 = require;
    obj = { type: "IMPERSONATE_UPDATE", guildId: null, data: null };
    obj[1] = closure_0;
    const obj1 = {};
    const merged1 = Object.assign(data);
    const merged2 = Object.assign(type);
    obj[2] = obj1;
    importDefault(709).dispatch(obj);
    const channelId = store2.getChannelId(closure_0);
    if (null == channelId) {
      if (!getUncachedChannelPermissions.can(constants.VIEW_CHANNEL, tmp21)) {
        const defaultChannel = store.getDefaultChannel(closure_0);
        if (null != defaultChannel) {
          tmp7(1222).transitionTo(closure_12.CHANNEL(closure_0, defaultChannel.id));
          const tmp7Result = tmp7(1222);
        }
      }
    }
    const obj4 = importDefault(709);
  }
}
({ Permissions: unpackModuleId, Routes: closure_12, AnalyticEvents: map1 } = ME);
let result = require("trackCommunicationDisabled").fileFinishedImporting("modules/impersonate/ImpersonateActionCreators.tsx");

export const startImpersonating = function startImpersonating(guildId, data) {
  let obj = importDefault(698);
  obj = { num_roles: Object.keys(data.roles).length };
  const merged = Object.assign(require(4388) /* collectGuildAnalyticsMetadata */.collectGuildAnalyticsMetadata(guildId));
  obj.is_viewing_as_member = data.type === require(1940) /* ImpersonateType */.ImpersonateType.NEW_MEMBER;
  obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj);
  const obj3 = require(4388) /* collectGuildAnalyticsMetadata */;
  const tmp2 = require;
  obj = { type: "IMPERSONATE_UPDATE", guildId, data };
  importDefault(709).dispatch(obj);
  const channelId = store2.getChannelId(guildId);
  if (null == channelId) {
    if (!getUncachedChannelPermissions.can(constants.VIEW_CHANNEL, tmp7)) {
      const defaultChannel = store.getDefaultChannel(guildId);
      if (null != defaultChannel) {
        tmp2(1222).transitionTo(closure_12.CHANNEL(guildId, defaultChannel.id));
        const tmp2Result = tmp2(1222);
      }
    }
  }
};
export { updateImpersonating };
export const stopImpersonating = function stopImpersonating(guildId) {
  let obj = importDefault(709);
  obj = { type: "IMPERSONATE_STOP", guildId };
  obj.dispatch(obj);
};
export const updateImpersonatedChannels = function updateImpersonatedChannels(guildId1, items1, items2) {
  const set = new Set(optedInChannels.getOptedInChannels(guildId1));
  const item = items1.forEach((arg0) => set.add(arg0));
  const item1 = items2.forEach((arg0) => set.delete(arg0));
  updateImpersonating(guildId1, { type: set(1940).ImpersonateType.NEW_MEMBER, optInChannels: set });
};
export const updateImpersonatedRoles = function updateImpersonatedRoles(guildId, c2) {
  (function optIntoPrivateChannelsForGrantedRolesForPreview(guildId, c2) {
    let closure_0 = guildId;
    let items = [...comparator.getSelectableChannelIds(guildId), ...comparator.getVocalChannelIds(guildId)];
    let closure_2 = Array.from(c2);
    const result = store.addConditionalChangeListener(() => {
      const selfMember = outer1_5.getSelfMember(set);
      set = selfMember;
      if (null == selfMember) {
        return false;
      } else if (closure_2.some((arg0) => {
        const roles = set.roles;
        return !roles.includes(arg0);
      })) {
        return true;
      } else {
        const items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(outer1_4.getSelectableChannelIds(tmp), 0);
        arraySpreadResult = HermesBuiltin.arraySpread(outer1_4.getVocalChannelIds(tmp), arraySpreadResult);
        const found = items.filter((arg0) => !closure_1.includes(arg0));
        if (found.length > 0) {
          const items1 = [];
          const _Set = Set;
          set = new Set(outer1_9.getOptedInChannels(tmp));
          const item = found.forEach((arg0) => set.add(arg0));
          const item1 = items1.forEach((arg0) => set.delete(arg0));
          const obj = { type: null, optInChannels: null };
          obj[0] = guildId(closure_2[12]).ImpersonateType.NEW_MEMBER;
          obj[1] = set;
          outer1_15(tmp, obj);
        }
        return false;
      }
    });
  })(guildId, c2);
  let obj = {};
  manyRoles = manyRoles.getManyRoles(guildId, c2);
  for (const item10013 of manyRoles) {
    obj[item10013.id] = item10013;
    continue;
  }
  obj = { type: require(1940) /* ImpersonateType */.ImpersonateType.NEW_MEMBER, roles: obj };
  updateImpersonating(guildId, obj);
};
export const updateImpersonatedData = function updateImpersonatedData(closure_0, arg1) {
  const merged = Object.assign(arg1);
  updateImpersonating(closure_0, { type: require(1940) /* ImpersonateType */.ImpersonateType.NEW_MEMBER });
};