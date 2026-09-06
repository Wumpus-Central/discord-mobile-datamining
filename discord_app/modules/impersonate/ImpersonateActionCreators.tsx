// discord_app/modules/impersonate/ImpersonateActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ImpersonateTypes from "ImpersonateTypes.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import ImpersonateStore from "ImpersonateStore.tsx";

const router_utils = tmp2(1100);
require = fn;
function updateImpersonating(guildId, type) {
  const data = ImpersonateStore.getData(guildId);
  if (tmp2) {
    let obj = { num_roles: null };
    const _Object = Object;
    obj.num_roles = Object.keys(data.roles).length;
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj.is_viewing_as_member = data.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER;
    obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj);
    const tmp7 = require;
    obj = { type: "IMPERSONATE_UPDATE", guildId, data: null };
    const obj1 = {};
    const merged1 = Object.assign(data);
    const merged2 = Object.assign(type);
    obj.data = obj1;
    DispatcherDefault.dispatch(obj);
    const channelId = SelectedChannelStore.getChannelId(guildId);
    if (null == channelId) {
      if (!PermissionStore.can(constants.VIEW_CHANNEL, tmp21)) {
        const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
        if (null != defaultChannel) {
          tmp7(1100).transitionTo(closure_1_12.CHANNEL(guildId, defaultChannel.id));
          const tmp7Result = tmp7(1100);
        }
      }
    }
  }
}
const Constants = fn(1074);
({ Permissions: closure_11, Routes: closure_12, AnalyticEvents: map1 } = Constants);
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
const size = fn(2);
let result = size.fileFinishedImporting("modules/impersonate/ImpersonateActionCreators.tsx");

export const startImpersonating = function startImpersonating(guildId, data) {
  let obj = { num_roles: Object.keys(data.roles).length };
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  obj.is_viewing_as_member = data.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER;
  obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj);
  obj = { type: "IMPERSONATE_UPDATE", guildId, data };
  DispatcherDefault.dispatch(obj);
  const channelId = SelectedChannelStore.getChannelId(guildId);
  if (null == channelId) {
    if (!PermissionStore.can(constants.VIEW_CHANNEL, tmp7)) {
      const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
      if (null != defaultChannel) {
        router_utils.transitionTo(closure_1_12.CHANNEL(guildId, defaultChannel.id));
        const tmp2Result = router_utils;
      }
    }
  }
};
export { updateImpersonating };
export const stopImpersonating = function stopImpersonating(guildId) {
  const obj = { type: "IMPERSONATE_STOP", guildId };
  obj.dispatch(obj);
};
export const updateImpersonatedChannels = function updateImpersonatedChannels(guildId, items1, items2) {
  const set = new Set(UserGuildSettingsStore.getOptedInChannels(guildId));
  const item = items1.forEach((item) => set.add(item));
  const item1 = items2.forEach((item) => set.delete(item));
  updateImpersonating(guildId, { type: ImpersonateTypes.ImpersonateType.NEW_MEMBER, optInChannels: set });
};
export const updateImpersonatedRoles = function updateImpersonatedRoles(guildId, selectedRoleIds) {
  (function optIntoPrivateChannelsForGrantedRolesForPreview(guildId, selectedRoleIds) {
    let items = [...closure_4.getSelectableChannelIds(guildId), ...closure_4.getVocalChannelIds(guildId)];
    closure_2 = Array.from(selectedRoleIds);
    const result = closure_4.addConditionalChangeListener(() => {
      selfMember = selfMember.getSelfMember(set);
      set = selfMember;
      if (null == selfMember) {
        return false;
      } else if (
        closure_2.some((item) => {
          const roles = set.roles;
          return !roles.includes(item);
        })
      ) {
        return true;
      } else {
        items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(closure_1_4.getSelectableChannelIds(tmp), 0);
        arraySpreadResult = HermesBuiltin.arraySpread(closure_1_4.getVocalChannelIds(tmp), arraySpreadResult);
        const found = items.filter((item) => !items.includes(item));
        if (found.length > 0) {
          const items1 = [];
          const _Set = Set;
          set = new Set(optedInChannels.getOptedInChannels(tmp));
          const item = found.forEach((item) => set.add(item));
          const item1 = items1.forEach((item) => set.delete(item));
          const obj = { type: guildId(closure_2[12]).ImpersonateType.NEW_MEMBER, optInChannels: set };
          closure_1_15(tmp, obj);
        }
        return false;
      }
    });
  })(guildId, selectedRoleIds);
  let obj = {};
  const manyRoles = GuildRoleStore.getManyRoles(guildId, selectedRoleIds);
  for (const item10013 of manyRoles) {
    obj[item10013.id] = item10013;
    continue;
  }
  obj = { type: ImpersonateTypes.ImpersonateType.NEW_MEMBER, roles: obj };
  updateImpersonating(guildId, obj);
};
export const updateImpersonatedData = function updateImpersonatedData(guildId, arg1) {
  const merged = Object.assign(arg1);
  updateImpersonating(guildId, { type: ImpersonateTypes.ImpersonateType.NEW_MEMBER });
};
