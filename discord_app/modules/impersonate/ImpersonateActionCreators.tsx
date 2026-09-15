// discord_app/modules/impersonate/ImpersonateActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import router_utils from "../routing/router_utils.tsx";
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

require = fn;
function updateImpersonating(guildId, type) {
  const data = ImpersonateStore.getData(guildId);
  if (tmp2) {
    const obj2 = { num_roles: null };
    const _Object = Object;
    obj2.num_roles = Object.keys(data.roles).length;
    const obj = AnalyticsUtilsDefault;
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj2.is_viewing_as_member = data.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER;
    obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj2);
    const obj5 = { type: "IMPERSONATE_UPDATE", guildId, data: null };
    const obj6 = {};
    const merged1 = Object.assign(data);
    const merged2 = Object.assign(type);
    obj5.data = obj6;
    DispatcherDefault.dispatch(obj5);
    const channelId = SelectedChannelStore.getChannelId(guildId);
    if (null == channelId) {
      if (!PermissionStore.can(constants.VIEW_CHANNEL, tmp21)) {
        const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
        if (null != defaultChannel) {
          router_utils.transitionTo(closure_1_12.CHANNEL(guildId, defaultChannel.id));
          const tmp7Result = router_utils;
        }
      }
    }
  }
  tmp2 = null != data && data.type === type.type;
}
const Constants = fn(1074);
({ Permissions: closure_11, Routes: closure_12, AnalyticEvents: map1 } = Constants);
const isStaticChannelRoute = fn(1965).isStaticChannelRoute;
const size = fn(2);
let result = size.fileFinishedImporting("modules/impersonate/ImpersonateActionCreators.tsx");

export const startImpersonating = function startImpersonating(guildId, data) {
  const obj2 = { num_roles: Object.keys(data.roles).length };
  const obj = AnalyticsUtilsDefault;
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  obj2.is_viewing_as_member = data.type === ImpersonateTypes.ImpersonateType.NEW_MEMBER;
  obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj2);
  DispatcherDefault.dispatch({ type: "IMPERSONATE_UPDATE", guildId, data });
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
  const obj5 = { type: "IMPERSONATE_UPDATE", guildId, data };
};
export { updateImpersonating };
export const stopImpersonating = function stopImpersonating(guildId) {
  DispatcherDefault.dispatch({ type: "IMPERSONATE_STOP", guildId });
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
        HermesBuiltin.arraySpread(
          closure_1_4.getVocalChannelIds(tmp),
          HermesBuiltin.arraySpread(closure_1_4.getSelectableChannelIds(tmp), 0),
        );
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
  updateImpersonating(guildId, { type: ImpersonateTypes.ImpersonateType.NEW_MEMBER, roles: obj });
};
export const updateImpersonatedData = function updateImpersonatedData(guildId, arg1) {
  const merged = Object.assign(arg1);
  updateImpersonating(guildId, { type: ImpersonateTypes.ImpersonateType.NEW_MEMBER });
};
