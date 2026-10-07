// === Module 11184: useBatchUpdateSelectOption ===

// Module 11184 (useBatchUpdateSelectOption)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6607 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6602 */;

const require = globalThis.__r;

require = fn;
function getRoles(singleSelect, roleIds, arg2, arg3) {
  const id = roleIds;
  closure_1 = arg3;
  if (singleSelect.singleSelect) {
    if (arg2) {
      options = singleSelect.options;
      const found = options.find((id) => closure_1.includes(id.id));
      roleIds = roleIds.roleIds;
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
      const differenceResult = _modDef12.difference(roleIds, roleIds1);
      let roleIds2;
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
      let differenceResult1 = _modDef12.difference(roleIds2, roleIds3);
      let items = differenceResult;
      const tmp8Result = _modDef12;
    }
    const obj = { addedRoleIds: items, removedRoleIds: differenceResult1 };
    return obj;
  }
  if (arg2) {
    let roleIds4 = roleIds.roleIds;
    if (roleIds4 == null) {
      roleIds4 = [];
    }
    differenceResult1 = [];
    items = roleIds4;
  } else {
    const options1 = singleSelect.options;
    const found1 = options1.filter((id) => closure_1.includes(id.id));
    const found2 = found1.filter((id) => id.id !== id.id);
    const mapped = found1.map((roleIds) => roleIds.roleIds);
    const found3 = mapped.flat().filter(GlobalUtils.isNotNullish);
    const mapped1 = found2.map((roleIds) => roleIds.roleIds);
    const flatResult = mapped.flat();
    items = [];
    const found4 = mapped1.flat().filter(GlobalUtils.isNotNullish);
    const flatResult1 = mapped1.flat();
    differenceResult1 = _modDef12.difference(found3, found4);
  }
}
function getChannels(arg0) {
  ({ guildId, prompt: _prompt, option } = arg0);
  ({ selected, responses: importDefault } = arg0);
  if (_prompt.singleSelect) {
    if (selected) {
      options = _prompt.options;
      const found = options.find((id) => importDefault.includes(id.id));
      let channelIds = option.channelIds;
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
      const differenceResult = _modDef12.difference(channelIds, channelIds1);
      let channelIds2;
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
      let differenceResult1 = _modDef12.difference(channelIds2, channelIds3);
      let items1 = differenceResult;
      const tmp8Result = _modDef12;
    }
    if (obj6.hasNotSetUpChannelOptIn(guildId)) {
      const push = items1.push;
      const items = [];
      HermesBuiltin.arraySpread(GuildOnboardingPromptsStore.getDefaultChannelIds(guildId), 0);
      HermesBuiltin.apply(items, items1);
    }
    const obj = { addedChannelIds: items1, removedChannelIds: differenceResult1 };
    return obj;
  }
  if (selected) {
    let channelIds4 = option.channelIds;
    if (channelIds4 == null) {
      channelIds4 = [];
    }
    differenceResult1 = [];
    items1 = channelIds4;
  } else {
    const options1 = _prompt.options;
    const found1 = options1.filter((id) => importDefault.includes(id.id));
    const found2 = found1.filter((id) => option.id !== id.id);
    const mapped = found1.map((channelIds) => channelIds.channelIds);
    const found3 = mapped.flat().filter(GlobalUtils.isNotNullish);
    const mapped1 = found2.map((channelIds) => channelIds.channelIds);
    const flatResult = mapped.flat();
    items1 = [];
    const found4 = mapped1.flat().filter(GlobalUtils.isNotNullish);
    const flatResult1 = mapped1.flat();
    differenceResult1 = _modDef12.difference(found3, found4);
  }
}
let closure_6 = fn(1095).ChannelNotificationSettingsFlags;
let closure_9 = {};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/useBatchUpdateSelectOption.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  _require = guildId;
  const cResult = require("c").c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingPromptsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function u() {
      let pendingResponseOptions = GuildOnboardingPromptsStore.getPendingResponseOptions(closure_0);
      if (pendingResponseOptions == null) {
        pendingResponseOptions = closure_9;
      }
      return pendingResponseOptions;
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== guildId) {
    const fn2 = function h() {
      DispatcherDefault.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId });
      return () => {
        stateFromStores(584).dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId });
      };
    };
    const items2 = [guildId];
    cResult[4] = guildId;
    cResult[5] = fn2;
    cResult[6] = items2;
    let tmp10 = items2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
    tmp10 = cResult[6];
  }
  const effect = noop.useEffect(tmp9, tmp10);
  if (cResult[7] === guildId) {
    if (cResult[8] === stateFromStores) {
      let tmp12 = cResult[9];
      let tmp13 = cResult[10];
    }
    const effect1 = noop.useEffect(tmp12, tmp13);
    if (cResult[11] !== guildId) {
      const fn3 = function v(prompt, option, selected) {
        const onboardingResponses = GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
        ({ addedRoleIds, removedRoleIds } = getRoles(prompt, option, selected, onboardingResponses));
        let obj = { guildId, prompt, option, selected, responses: onboardingResponses };
        const tmp2 = getRoles(prompt, option, selected, onboardingResponses);
        ({ addedChannelIds, removedChannelIds } = getChannels({ guildId, prompt, option, selected, responses: onboardingResponses }));
        const merged = Object.assign(addedChannelIds.reduce((acc, item) => {
          const obj = { flags: null };
          const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, item);
          obj.flags = closure_0(1390).setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true);
          acc[item] = obj;
          return acc;
        }, {}));
        const merged1 = Object.assign(removedChannelIds.reduce((acc, item) => {
          const obj = { flags: null };
          const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, item);
          obj.flags = closure_0(1390).setFlag(channelIdFlags, constants.OPT_IN_ENABLED, false);
          acc[item] = obj;
          return acc;
        }, {}));
        const obj2 = {};
        const tmp3 = getChannels({ guildId, prompt, option, selected, responses: onboardingResponses });
        option = GuildOnboardingActionCreatorsDefault.selectOption(guildId, prompt.id, option.id, selected);
        DispatcherDefault.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: obj2 });
        const obj5 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: obj2 };
        GuildOnboardingActionCreatorsDefault.updateRolesLocal(guildId, addedRoleIds, removedRoleIds);
      };
      cResult[11] = guildId;
      cResult[12] = fn3;
      let tmp15 = fn3;
    } else {
      tmp15 = cResult[12];
    }
    if (cResult[13] !== tmp15) {
      let obj2 = { handleSelectOption: tmp15 };
      cResult[13] = tmp15;
      cResult[14] = obj2;
      let tmp16 = obj2;
    } else {
      tmp16 = cResult[14];
    }
    return tmp16;
  }
  class N {
    constructor() {
      tmp2 = null != closure_1;
      if (tmp2) {
        tmp3 = globalThis;
        _Object = Object;
        num = 0;
        tmp2 = 0 !== Object.keys(tmp).length;
      }
      if (tmp2) {
        tmp4 = closure_1;
        tmp5 = closure_2;
        obj = closure_1(closure_2[11]);
        tmp6 = closure_0;
        result = obj.updateOnboardingResponses(closure_0);
      }
      return;
    }
  }
  const items3 = [guildId, stateFromStores];
  cResult[7] = guildId;
  cResult[8] = stateFromStores;
  cResult[9] = N;
  cResult[10] = items3;
  tmp13 = items3;
  tmp12 = N;
  const tmpResult = require("initialize");
}) : ((guildId) => {
  _require = guildId;
  const items = [GuildOnboardingPromptsStore];
  const items1 = [guildId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let pendingResponseOptions = GuildOnboardingPromptsStore.getPendingResponseOptions(closure_0);
    if (pendingResponseOptions == null) {
      pendingResponseOptions = closure_9;
    }
    return pendingResponseOptions;
  }, items1);
  const items2 = [guildId];
  const effect = noop.useEffect(() => {
    DispatcherDefault.dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId });
    return () => {
      stateFromStores(584).dispatch({ type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId });
    };
  }, items2);
  const items3 = [guildId, stateFromStores];
  const effect1 = noop.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      const _Object = Object;
      tmp2 = 0 !== Object.keys(tmp).length;
    }
    if (tmp2) {
      const result = GuildOnboardingActionCreatorsDefault.updateOnboardingResponses(closure_0);
    }
  }, items3);
  let obj2 = { handleSelectOption: null };
  const items4 = [guildId];
  obj2.handleSelectOption = noop.useCallback((prompt, option, selected) => {
    const onboardingResponses = GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
    ({ addedRoleIds, removedRoleIds } = getRoles(prompt, option, selected, onboardingResponses));
    let obj = { guildId, prompt, option, selected, responses: onboardingResponses };
    const tmp2 = getRoles(prompt, option, selected, onboardingResponses);
    ({ addedChannelIds, removedChannelIds } = getChannels({ guildId, prompt, option, selected, responses: onboardingResponses }));
    const merged = Object.assign(addedChannelIds.reduce((acc, item) => {
      const obj = { flags: null };
      const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, item);
      obj.flags = closure_0(1390).setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true);
      acc[item] = obj;
      return acc;
    }, {}));
    const merged1 = Object.assign(removedChannelIds.reduce((acc, item) => {
      const obj = { flags: null };
      const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, item);
      obj.flags = closure_0(1390).setFlag(channelIdFlags, constants.OPT_IN_ENABLED, false);
      acc[item] = obj;
      return acc;
    }, {}));
    const obj2 = {};
    const tmp3 = getChannels({ guildId, prompt, option, selected, responses: onboardingResponses });
    option = GuildOnboardingActionCreatorsDefault.selectOption(guildId, prompt.id, option.id, selected);
    DispatcherDefault.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: obj2 });
    const obj5 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: obj2 };
    GuildOnboardingActionCreatorsDefault.updateRolesLocal(guildId, addedRoleIds, removedRoleIds);
  }, items4);
  return obj2;
});