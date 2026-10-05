// === Module 5942: ImpersonateActionCreators ===

// Module 5942 (ImpersonateActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import router_utils from "router_utils" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import ImpersonateTypes from "ImpersonateTypes" /* 2111 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let selfMember, set;

let closure_12;
let map1;
let unpackModuleId;
function updateImpersonating(guildId, type) {
  let obj4;
  const data = ImpersonateStore.getData(guildId);
  const tmp2 = null != data && data.type === type.type;
  if (tmp2) {
    const _Object = Object;
    const obj = { num_roles: Object.keys(data.roles).length, is_viewing_as_member: data.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER };
    const track = AnalyticsUtilsDefault.track;
    const VIEW_AS_ROLES_SELECTED = map1.VIEW_AS_ROLES_SELECTED;
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
    track(VIEW_AS_ROLES_SELECTED, obj);
    const obj3 = { type: "IMPERSONATE_UPDATE", guildId, data: obj4 };
    obj4 = {};
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    const merged1 = Object.assign(data);
    const merged2 = Object.assign(type);
    dispatch(obj3);
    const channelId = SelectedChannelStore.getChannelId(guildId);
    if (null == channelId) {
      if (!PermissionStore.can(unpackModuleId.VIEW_CHANNEL, tmp23)) {
        const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
        if (null != defaultChannel) {
          const tmp8Result = router_utils;
          tmp8Result.transitionTo(closure_12.CHANNEL(guildId, defaultChannel.id));
        }
      }
    }
  }
}
({ Permissions: unpackModuleId, Routes: closure_12, AnalyticEvents: map1 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
let result = size.fileFinishedImporting("modules/impersonate/ImpersonateActionCreators.tsx");

export const startImpersonating = function startImpersonating(guildId, data) {
  const tmp2 = AnalyticsUtilsDefault;
  const track = tmp2.track;
  const VIEW_AS_ROLES_SELECTED = map1.VIEW_AS_ROLES_SELECTED;
  const obj = { num_roles: Object.keys(data.roles).length, is_viewing_as_member: data.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER };
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
  track(VIEW_AS_ROLES_SELECTED, obj);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "IMPERSONATE_UPDATE", guildId, data };
  obj3.dispatch(obj4);
  const channelId = SelectedChannelStore.getChannelId(guildId);
  if (null == channelId) {
    if (!PermissionStore.can(unpackModuleId.VIEW_CHANNEL, tmp8)) {
      const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
      if (null != defaultChannel) {
        const tmp3Result = router_utils;
        tmp3Result.transitionTo(closure_12.CHANNEL(guildId, defaultChannel.id));
      }
    }
  }
};
export { updateImpersonating };
export const stopImpersonating = function stopImpersonating(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "IMPERSONATE_STOP", guildId };
  obj.dispatch(obj2);
};
export const updateImpersonatedChannels = function updateImpersonatedChannels(guildId, items1, items2) {
  set = new Set(UserGuildSettingsStore.getOptedInChannels(guildId));
  const item = items1.forEach((item) => set.add(item));
  const item1 = items2.forEach((item) => set.delete(item));
  const obj = { type: ImpersonateTypes.ImpersonateType.NEW_MEMBER, optInChannels: set };
  updateImpersonating(guildId, obj);
};
export const updateImpersonatedRoles = function updateImpersonatedRoles(guildId, selectedRoleIds) {
  function optIntoPrivateChannelsForGrantedRolesForPreview(guildId, selectedRoleIds) {
    let optedInChannels;
    let items = [...closure_4.getSelectableChannelIds(guildId), ...closure_4.getVocalChannelIds(guildId)];
    let closure_2 = Array.from(selectedRoleIds);
    const result = closure_4.addConditionalChangeListener(function() {
      selfMember = selfMember.getSelfMember(selfMember);
      if (null == selfMember) {
        return false;
      } else if (closure_2.some((item) => {
        const roles = selfMember.roles;
        return !roles.includes(item);
      })) {
        return true;
      } else {
        items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, closure_1_4.getSelectableChannelIds(selfMember), 0);
        HermesBuiltin.arraySpread(items, closure_1_4.getVocalChannelIds(selfMember), arraySpreadResult);
        const found = items.filter((item) => !items.includes(item));
        if (found.length > 0) {
          const items1 = [];
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set(optedInChannels.getOptedInChannels(tmp2));
          const item = found.forEach((item) => set.add(item));
          const item1 = items1.forEach((item) => set.delete(item));
          const obj = { type: guildId(closure_2[12]).ImpersonateType.NEW_MEMBER, optInChannels: set };
          closure_1_15(selfMember, obj);
        }
        return false;
      }
    });
  }
  optIntoPrivateChannelsForGrantedRolesForPreview(guildId, selectedRoleIds);
  let obj = {};
  const manyRoles = GuildRoleStore.getManyRoles(guildId, selectedRoleIds);
  for (const item10013 of manyRoles) {
    obj[item10013.id] = item10013;
    continue;
  }
  const obj2 = { type: ImpersonateTypes.ImpersonateType.NEW_MEMBER, roles: obj };
  updateImpersonating(guildId, obj2);
};
export const updateImpersonatedData = function updateImpersonatedData(guildId, arg1) {
  const obj = { type: ImpersonateTypes.ImpersonateType.NEW_MEMBER };
  const merged = Object.assign(arg1);
  updateImpersonating(guildId, obj);
};