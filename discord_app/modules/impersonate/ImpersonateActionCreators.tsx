// === Module 5438: updateImpersonating ===

// Module 5438 (updateImpersonating)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import transitionTo from "transitionTo" /* 1222 */;
import ImpersonateType from "ImpersonateType" /* 1991 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 4666 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "comparator" /* 1983 */;
import closure_5 from "trackCommunicationDisabled" /* 1993 */;
import closure_6 from "createGuildRoleRecordFromRust" /* 1986 */;
import closure_7 from "getUncachedChannelPermissions" /* 4090 */;
import closure_8 from "handleConnectionOpen" /* 1982 */;
import closure_9 from "updateUserGuildSettingsInternal" /* 4667 */;
import closure_10 from "initialize" /* 1985 */;
import ME from "ME" /* 676 */;
import { isStaticChannelRoute } from "set" /* 1398 */;

require = arg1;
function updateImpersonating(closure_0, type) {
  data = data.getData(closure_0);
  if (tmp2) {
    let obj = expandEventPropertiesDefault;
    obj = { num_roles: null };
    const _Object = Object;
    obj[0] = Object.keys(data.roles).length;
    const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(closure_0));
    obj.is_viewing_as_member = data.type === ImpersonateType.ImpersonateType.NEW_MEMBER;
    obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj);
    const obj3 = collectGuildAnalyticsMetadata;
    const tmp7 = require;
    obj = { type: "IMPERSONATE_UPDATE", guildId: null, data: null };
    obj[1] = closure_0;
    obj1 = {};
    const merged1 = Object.assign(data);
    const merged2 = Object.assign(type);
    obj[2] = obj1;
    dispatcherDefault.dispatch(obj);
    const channelId = store2.getChannelId(closure_0);
    if (null == channelId) {
      if (!closure_7.can(constants.VIEW_CHANNEL, tmp21)) {
        const defaultChannel = store.getDefaultChannel(closure_0);
        if (null != defaultChannel) {
          tmp7(1222).transitionTo(closure_12.CHANNEL(closure_0, defaultChannel.id));
          const tmp7Result = tmp7(1222);
        }
      }
    }
    const obj4 = dispatcherDefault;
  }
}
({ Permissions: unpackModuleId, Routes: closure_12, AnalyticEvents: map1 } = ME);
let result = require("set").fileFinishedImporting("modules/impersonate/ImpersonateActionCreators.tsx");

export const startImpersonating = function startImpersonating(guildId, data) {
  let obj = expandEventPropertiesDefault;
  obj = { num_roles: Object.keys(data.roles).length };
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  obj.is_viewing_as_member = data.type === ImpersonateType.ImpersonateType.NEW_MEMBER;
  obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj);
  const obj3 = collectGuildAnalyticsMetadata;
  const tmp2 = require;
  obj = { type: "IMPERSONATE_UPDATE", guildId, data };
  dispatcherDefault.dispatch(obj);
  const channelId = store2.getChannelId(guildId);
  if (null == channelId) {
    if (!closure_7.can(constants.VIEW_CHANNEL, tmp7)) {
      const defaultChannel = store.getDefaultChannel(guildId);
      if (null != defaultChannel) {
        transitionTo.transitionTo(closure_12.CHANNEL(guildId, defaultChannel.id));
        const tmp2Result = transitionTo;
      }
    }
  }
};
export { updateImpersonating };
export const stopImpersonating = function stopImpersonating(guildId) {
  let obj = dispatcherDefault;
  obj = { type: "IMPERSONATE_STOP", guildId };
  obj.dispatch(obj);
};
export const updateImpersonatedChannels = function updateImpersonatedChannels(guildId1, items1, items2) {
  const set = new Set(optedInChannels.getOptedInChannels(guildId1));
  const item = items1.forEach((arg0) => set.add(arg0));
  const item1 = items2.forEach((arg0) => set.delete(arg0));
  updateImpersonating(guildId1, { type: set(1991).ImpersonateType.NEW_MEMBER, optInChannels: set });
};
export const updateImpersonatedRoles = function updateImpersonatedRoles(guildId, c2) {
  (function optIntoPrivateChannelsForGrantedRolesForPreview(guildId, c2) {
    closure_0 = guildId;
    let items = [...closure_4.getSelectableChannelIds(guildId), ...closure_4.getVocalChannelIds(guildId)];
    closure_2 = Array.from(c2);
    const result = store.addConditionalChangeListener(() => {
      const selfMember = closure_1_5.getSelfMember(set);
      set = selfMember;
      if (null == selfMember) {
        return false;
      } else if (closure_2.some((arg0) => {
        const roles = set.roles;
        return !roles.includes(arg0);
      })) {
        return true;
      } else {
        items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(closure_1_4.getSelectableChannelIds(tmp), 0);
        arraySpreadResult = HermesBuiltin.arraySpread(closure_1_4.getVocalChannelIds(tmp), arraySpreadResult);
        const found = items.filter((arg0) => !closure_1.includes(arg0));
        if (found.length > 0) {
          const items1 = [];
          const _Set = Set;
          set = new Set(closure_1_9.getOptedInChannels(tmp));
          const item = found.forEach((arg0) => set.add(arg0));
          const item1 = items1.forEach((arg0) => set.delete(arg0));
          const obj = { type: null, optInChannels: null };
          obj[0] = guildId(closure_2[12]).ImpersonateType.NEW_MEMBER;
          obj[1] = set;
          closure_1_15(tmp, obj);
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
  obj = { type: ImpersonateType.ImpersonateType.NEW_MEMBER, roles: obj };
  updateImpersonating(guildId, obj);
};
export const updateImpersonatedData = function updateImpersonatedData(closure_0, arg1) {
  const merged = Object.assign(arg1);
  updateImpersonating(closure_0, { type: ImpersonateType.ImpersonateType.NEW_MEMBER });
};