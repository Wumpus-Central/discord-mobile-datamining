// === Module 6792: updateImpersonating ===

// Module 6792 (updateImpersonating)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import transitionTo from "transitionTo" /* 1222 */;
import ImpersonateType from "ImpersonateType" /* 1988 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 5042 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import comparator from "comparator" /* 1980 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import initialize from "initialize" /* 1982 */;
import ME from "ME" /* 676 */;
import { isStaticChannelRoute } from "set" /* 1398 */;

require = fn;
function updateImpersonating(closure_0, type) {
  data = data.getData(closure_0);
  if (tmp2) {
    let obj = { num_roles: null };
    const _Object = Object;
    obj[0] = Object.keys(data.roles).length;
    const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(closure_0));
    obj.is_viewing_as_member = data.type === ImpersonateType.ImpersonateType.NEW_MEMBER;
    obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj);
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
          transitionTo.transitionTo(closure_12.CHANNEL(closure_0, defaultChannel.id));
          const tmp7Result = transitionTo;
        }
      }
    }
  }
  tmp2 = null != data && data.type === type.type;
}
({ Permissions: unpackModuleId, Routes: closure_12, AnalyticEvents: map1 } = ME);
let result = require("obj132").fileFinishedImporting("modules/impersonate/ImpersonateActionCreators.tsx");

export const startImpersonating = function startImpersonating(guildId, data) {
  let obj = { num_roles: Object.keys(data.roles).length };
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  obj.is_viewing_as_member = data.type === ImpersonateType.ImpersonateType.NEW_MEMBER;
  obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj);
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
  const obj = { type: "IMPERSONATE_STOP", guildId };
  obj.dispatch(obj);
};
export const updateImpersonatedChannels = function updateImpersonatedChannels(guildId1, items1, items2) {
  const set = new Set(optedInChannels.getOptedInChannels(guildId1));
  const item = items1.forEach((item, index) => set.add(item));
  const item1 = items2.forEach((item, index) => set.delete(item));
  updateImpersonating(guildId1, { type: set(1988).ImpersonateType.NEW_MEMBER, optInChannels: set });
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
      } else if (closure_2.some((item, index) => {
        const roles = set.roles;
        return !roles.includes(item);
      })) {
        return true;
      } else {
        items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(closure_1_4.getSelectableChannelIds(tmp), 0);
        arraySpreadResult = HermesBuiltin.arraySpread(closure_1_4.getVocalChannelIds(tmp), arraySpreadResult);
        const found = items.filter((item, index) => !closure_1.includes(item));
        if (found.length > 0) {
          const items1 = [];
          const _Set = Set;
          set = new Set(closure_1_9.getOptedInChannels(tmp));
          const item = found.forEach((item, index) => set.add(item));
          const item1 = items1.forEach((item, index) => set.delete(item));
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