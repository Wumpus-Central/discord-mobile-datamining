// discord_app/modules/guild_onboarding/useBatchUpdateSelectOption.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators.tsx";
import OptInOnboardingUtils from "../opt_in_channels/OptInOnboardingUtils.tsx";
import react from "../../../_runtime/00019_react.js";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function getRoles(singleSelect, roleIds, arg2, arg3) {
  let difference2Result;
  let items;
  let closure_0 = roleIds;
  let closure_1 = arg3;
  if (singleSelect.singleSelect) {
    if (arg2) {
      const options = singleSelect.options;
      const found = options.find((id) => closure_1.includes(id.id));
      roleIds = roleIds.roleIds;
      const difference = _modDef12.difference;
      _modDef12;
      if (roleIds == null) {
        roleIds = [];
      }
      let roleIds1;
      if (found != null) {
        roleIds1 = found.roleIds;
      }
      if (roleIds1 == null) {
        roleIds1 = [];
      }
      let roleIds2;
      const differenceResult = difference(roleIds, roleIds1);
      const difference2 = _modDef12.difference;
      _modDef12;
      if (found != null) {
        roleIds2 = found.roleIds;
      }
      if (roleIds2 == null) {
        roleIds2 = [];
      }
      let roleIds3 = roleIds.roleIds;
      if (roleIds3 == null) {
        roleIds3 = [];
      }
      difference2Result = difference2(roleIds2, roleIds3);
      items = differenceResult;
    }
    return { addedRoleIds: items, removedRoleIds: difference2Result };
  }
  if (arg2) {
    let roleIds4 = roleIds.roleIds;
    if (roleIds4 == null) {
      roleIds4 = [];
    }
    difference2Result = [];
    items = roleIds4;
  } else {
    const options1 = singleSelect.options;
    const found1 = options1.filter((id) => closure_1.includes(id.id));
    const found2 = found1.filter((id) => id.id !== id.id);
    const mapped = found1.map((roleIds) => roleIds.roleIds);
    const flatResult = mapped.flat();
    const found3 = flatResult.filter(GlobalUtils.isNotNullish);
    const mapped1 = found2.map((roleIds) => roleIds.roleIds);
    items = [];
    const flatResult1 = mapped1.flat();
    const found4 = flatResult1.filter(GlobalUtils.isNotNullish);
    const obj3 = _modDef12;
    difference2Result = obj3.difference(found3, found4);
  }
}
function getChannels(arg0) {
  let _prompt;
  let closure_129_1;
  let difference2Result;
  let guildId;
  let items1;
  let option;
  let selected;
  ({ guildId, prompt: _prompt, option } = arg0);
  ({ selected, responses: closure_129_1 } = arg0);
  if (_prompt.singleSelect) {
    if (selected) {
      const options = _prompt.options;
      const found = options.find((id) => closure_1_1.includes(id.id));
      let channelIds = option.channelIds;
      const difference = _modDef12.difference;
      _modDef12;
      if (channelIds == null) {
        channelIds = [];
      }
      let channelIds1;
      if (found != null) {
        channelIds1 = found.channelIds;
      }
      if (channelIds1 == null) {
        channelIds1 = [];
      }
      let channelIds2;
      const differenceResult = difference(channelIds, channelIds1);
      const difference2 = _modDef12.difference;
      _modDef12;
      if (found != null) {
        channelIds2 = found.channelIds;
      }
      if (channelIds2 == null) {
        channelIds2 = [];
      }
      let channelIds3 = option.channelIds;
      if (channelIds3 == null) {
        channelIds3 = [];
      }
      difference2Result = difference2(channelIds2, channelIds3);
      items1 = differenceResult;
    }
    const obj4 = OptInOnboardingUtils;
    if (obj4.hasNotSetUpChannelOptIn(guildId)) {
      const push = items1.push;
      const items = [];
      HermesBuiltin.arraySpread(items, GuildOnboardingPromptsStore.getDefaultChannelIds(guildId), 0);
      HermesBuiltin.apply(push, items, items1);
    }
    return { addedChannelIds: items1, removedChannelIds: difference2Result };
  }
  if (selected) {
    let channelIds4 = option.channelIds;
    if (channelIds4 == null) {
      channelIds4 = [];
    }
    difference2Result = [];
    items1 = channelIds4;
  } else {
    const options1 = _prompt.options;
    const found1 = options1.filter((id) => closure_1_1.includes(id.id));
    const found2 = found1.filter((id) => option.id !== id.id);
    const mapped = found1.map((channelIds) => channelIds.channelIds);
    const flatResult = mapped.flat();
    const found3 = flatResult.filter(GlobalUtils.isNotNullish);
    const mapped1 = found2.map((channelIds) => channelIds.channelIds);
    items1 = [];
    const flatResult1 = mapped1.flat();
    const found4 = flatResult1.filter(GlobalUtils.isNotNullish);
    const obj3 = _modDef12;
    difference2Result = obj3.difference(found3, found4);
  }
}
let closure_6 = UserSettingsConstants.ChannelNotificationSettingsFlags;
let closure_9 = {};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let tmp10;
      let tmp6;
      let tmp7;
      let tmp9;
      _require = guildId;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(15);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildOnboardingPromptsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function u() {
          let pendingResponseOptions = GuildOnboardingPromptsStore.getPendingResponseOptions(guildId);
          if (pendingResponseOptions == null) {
            pendingResponseOptions = closure_9;
          }
          return pendingResponseOptions;
        };
        const items1 = [guildId];
        cResult[1] = guildId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] !== guildId) {
        const fn2 = function h() {
          let obj = DispatcherDefault;
          let obj2 = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
          obj.dispatch(obj2);
          return () => {
            const obj = stateFromStores(dependencyMap[4]);
            const obj2 = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
            obj.dispatch(obj2);
          };
        };
        const items2 = [guildId];
        cResult[4] = guildId;
        cResult[5] = fn2;
        cResult[6] = items2;
        tmp10 = items2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[5];
        tmp10 = cResult[6];
      }
      const effect = react.useEffect(tmp9, tmp10);
      if (cResult[7] === guildId) {
        let tmp12;
        let tmp13;
        let tmp15;
        let tmp16;
        if (cResult[8] === stateFromStores) {
          tmp12 = cResult[9];
          tmp13 = cResult[10];
        }
        const effect1 = react.useEffect(tmp12, tmp13);
        if (cResult[11] !== guildId) {
          const fn3 = function v(prompt, option, selected) {
            let addedChannelIds;
            let addedRoleIds;
            let removedChannelIds;
            let removedRoleIds;
            const onboardingResponses = GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
            let obj = { guildId, prompt, option, selected, responses: onboardingResponses };
            ({ addedRoleIds, removedRoleIds } = getRoles(prompt, option, selected, onboardingResponses));
            getRoles(prompt, option, selected, onboardingResponses);
            ({ addedChannelIds, removedChannelIds } = getChannels(obj));
            let obj2 = {};
            getChannels(obj);
            const merged = Object.assign(
              addedChannelIds.reduce((acc, item) => {
                let channelIdFlags;
                let obj2;
                const obj = { flags: obj2.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true) };
                channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(closure_1_0, item);
                acc[item] = obj;
                obj2 = closure_0(dependencyMap[12]);
                return acc;
              }, {}),
            );
            const merged1 = Object.assign(
              removedChannelIds.reduce((acc, item) => {
                let channelIdFlags;
                let obj2;
                const obj = { flags: obj2.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, false) };
                channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(closure_1_0, item);
                acc[item] = obj;
                obj2 = closure_0(dependencyMap[12]);
                return acc;
              }, {}),
            );
            const obj3 = GuildOnboardingActionCreatorsDefault;
            option = obj3.selectOption(guildId, prompt.id, option.id, selected);
            const obj4 = DispatcherDefault;
            const obj5 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: obj2 };
            obj4.dispatch(obj5);
            const obj6 = GuildOnboardingActionCreatorsDefault;
            obj6.updateRolesLocal(guildId, addedRoleIds, removedRoleIds);
          };
          cResult[11] = guildId;
          cResult[12] = fn3;
          tmp15 = fn3;
        } else {
          tmp15 = cResult[12];
        }
        if (cResult[13] !== tmp15) {
          let obj2 = { handleSelectOption: tmp15 };
          cResult[13] = tmp15;
          cResult[14] = obj2;
          tmp16 = obj2;
        } else {
          tmp16 = cResult[14];
        }
        return tmp16;
      }
      class N {
        constructor() {
          let tmp2 = null != stateFromStores;
          if (tmp2) {
            const _Object = Object;
            tmp2 = 0 !== Object.keys(tmp).length;
          }
          if (tmp2) {
            const obj = GuildOnboardingActionCreatorsDefault;
            const result = obj.updateOnboardingResponses(guildId);
          }
        }
      }
      const items3 = [guildId, stateFromStores];
      cResult[7] = guildId;
      cResult[8] = stateFromStores;
      cResult[9] = N;
      cResult[10] = items3;
      tmp13 = items3;
      tmp12 = N;
    }
  : (guildId) => {
      let items4;
      _require = guildId;
      let obj = require("get initialized");
      const items = [GuildOnboardingPromptsStore];
      const items1 = [guildId];
      const stateFromStores = obj.useStateFromStores(
        items,
        () => {
          let pendingResponseOptions = GuildOnboardingPromptsStore.getPendingResponseOptions(guildId);
          if (pendingResponseOptions == null) {
            pendingResponseOptions = closure_9;
          }
          return pendingResponseOptions;
        },
        items1,
      );
      const items2 = [guildId];
      const effect = react.useEffect(() => {
        let obj = DispatcherDefault;
        let obj2 = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
        obj.dispatch(obj2);
        return () => {
          const obj = stateFromStores(dependencyMap[4]);
          const obj2 = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
          obj.dispatch(obj2);
        };
      }, items2);
      const items3 = [guildId, stateFromStores];
      const effect1 = react.useEffect(() => {
        let tmp2 = null != stateFromStores;
        if (tmp2) {
          const _Object = Object;
          tmp2 = 0 !== Object.keys(tmp).length;
        }
        if (tmp2) {
          const obj = GuildOnboardingActionCreatorsDefault;
          const result = obj.updateOnboardingResponses(guildId);
        }
      }, items3);
      let obj2 = {
        handleSelectOption: react.useCallback((prompt, option, selected) => {
          let addedChannelIds;
          let addedRoleIds;
          let removedChannelIds;
          let removedRoleIds;
          const onboardingResponses = GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
          let obj = { guildId, prompt, option, selected, responses: onboardingResponses };
          ({ addedRoleIds, removedRoleIds } = getRoles(prompt, option, selected, onboardingResponses));
          getRoles(prompt, option, selected, onboardingResponses);
          ({ addedChannelIds, removedChannelIds } = getChannels(obj));
          let obj2 = {};
          getChannels(obj);
          const merged = Object.assign(
            addedChannelIds.reduce((acc, item) => {
              let channelIdFlags;
              let obj2;
              const obj = { flags: obj2.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true) };
              channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(closure_1_0, item);
              acc[item] = obj;
              obj2 = closure_0(dependencyMap[12]);
              return acc;
            }, {}),
          );
          const merged1 = Object.assign(
            removedChannelIds.reduce((acc, item) => {
              let channelIdFlags;
              let obj2;
              const obj = { flags: obj2.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, false) };
              channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(closure_1_0, item);
              acc[item] = obj;
              obj2 = closure_0(dependencyMap[12]);
              return acc;
            }, {}),
          );
          const obj3 = GuildOnboardingActionCreatorsDefault;
          option = obj3.selectOption(guildId, prompt.id, option.id, selected);
          const obj4 = DispatcherDefault;
          const obj5 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: obj2 };
          obj4.dispatch(obj5);
          const obj6 = GuildOnboardingActionCreatorsDefault;
          obj6.updateRolesLocal(guildId, addedRoleIds, removedRoleIds);
        }, items4),
      };
      items4 = [guildId];
      return obj2;
    };
let result = size.fileFinishedImporting("modules/guild_onboarding/useBatchUpdateSelectOption.tsx");

export default tmp2;
