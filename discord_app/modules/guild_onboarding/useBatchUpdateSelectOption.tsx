// === Module 11554: useBatchUpdateSelectOption ===

// Module 11554 (useBatchUpdateSelectOption)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 7105 */;
import OptInOnboardingUtils from "OptInOnboardingUtils" /* 11555 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7100 */;

require = fn;
let closure_6 = fn(1084).ChannelNotificationSettingsFlags;
let closure_7 = {};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/useBatchUpdateSelectOption.tsx");

export default function useBatchUpdateSelectOption(guildId) {
  _require = guildId;
  let obj = require("initialize");
  let items = [GuildOnboardingPromptsStore];
  let items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let pendingResponseOptions = GuildOnboardingPromptsStore.getPendingResponseOptions(closure_0);
    if (pendingResponseOptions == null) {
      pendingResponseOptions = closure_7;
    }
    return pendingResponseOptions;
  }, items1);
  let items2 = [guildId];
  const effect = noop.useEffect(() => {
    let obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
    obj.dispatch(obj);
    return () => {
      stateFromStores(573);
      const obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
      obj.dispatch(obj);
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
  obj = { handleSelectOption: null };
  const items4 = [guildId];
  obj.handleSelectOption = noop.useCallback((singleSelect, roleIds, selected) => {
    let obj = GuildOnboardingPromptsStore;
    const onboardingResponses = GuildOnboardingPromptsStore.getOnboardingResponses(closure_0);
    closure_0 = roleIds;
    if (singleSelect.singleSelect) {
      if (selected) {
        const options = singleSelect.options;
        const found = options.find((id) => onboardingResponses.includes(id.id));
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
        const tmp10 = importDefault;
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
        let differenceResult1 = tmp10(12).difference(roleIds2, roleIds3);
        let items2 = differenceResult;
        const tmp10Result = tmp10(12);
      }
      closure_0 = roleIds;
      if (singleSelect.singleSelect) {
        if (selected) {
          const options1 = singleSelect.options;
          const found1 = options1.find((id) => onboardingResponses.includes(id.id));
          let channelIds = roleIds.channelIds;
          if (channelIds == null) {
            channelIds = [];
          }
          let channelIds1;
          if (found1 != null) {
            channelIds1 = found1.channelIds;
          }
          if (channelIds1 == null) {
            channelIds1 = [];
          }
          const tmp21 = importDefault;
          const differenceResult2 = _modDef12.difference(channelIds, channelIds1);
          let channelIds2;
          if (found1 != null) {
            channelIds2 = found1.channelIds;
          }
          if (channelIds2 == null) {
            channelIds2 = [];
          }
          let channelIds3 = roleIds.channelIds;
          if (channelIds3 == null) {
            channelIds3 = [];
          }
          let differenceResult3 = tmp21(12).difference(channelIds2, channelIds3);
          let items1 = differenceResult2;
          const tmp21Result = tmp21(12);
        }
        if (obj12.hasNotSetUpChannelOptIn(tmp)) {
          const push = items1.push;
          const items = [];
          HermesBuiltin.arraySpread(obj.getDefaultChannelIds(tmp), 0);
          HermesBuiltin.apply(items, items1);
        }
        obj = {};
        const merged = Object.assign(items1.reduce((acc, item) => {
          const obj = { flags: null };
          const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(closure_0, item);
          obj.flags = closure_0(1384).setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true);
          acc[item] = obj;
          return acc;
        }, {}));
        const merged1 = Object.assign(differenceResult3.reduce((acc, item) => {
          const obj = { flags: null };
          const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(closure_0, item);
          obj.flags = closure_0(1384).setFlag(channelIdFlags, constants.OPT_IN_ENABLED, false);
          acc[item] = obj;
          return acc;
        }, {}));
        const obj14 = GuildOnboardingActionCreatorsDefault;
        const option = obj14.selectOption(tmp, singleSelect.id, roleIds.id, selected);
        obj12 = OptInOnboardingUtils;
        obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: tmp, overrides: null };
        obj.overrides = obj;
        DispatcherDefault.dispatch(obj);
        GuildOnboardingActionCreatorsDefault.updateRolesLocal(tmp, items2, differenceResult1);
      }
      if (selected) {
        let channelIds4 = roleIds.channelIds;
        if (channelIds4 == null) {
          channelIds4 = [];
        }
        differenceResult3 = [];
        items1 = channelIds4;
      } else {
        const options2 = singleSelect.options;
        const found2 = options2.filter((id) => onboardingResponses.includes(id.id));
        const found3 = found2.filter((id) => closure_0.id !== id.id);
        const mapped = found2.map((channelIds) => channelIds.channelIds);
        const found4 = mapped.flat().filter(GlobalUtils.isNotNullish);
        const mapped1 = found3.map((channelIds) => channelIds.channelIds);
        const flatResult = mapped.flat();
        items1 = [];
        const found5 = mapped1.flat().filter(GlobalUtils.isNotNullish);
        const flatResult1 = mapped1.flat();
        differenceResult3 = _modDef12.difference(found4, found5);
      }
    }
    if (selected) {
      let roleIds4 = roleIds.roleIds;
      if (roleIds4 == null) {
        roleIds4 = [];
      }
      differenceResult1 = [];
      items2 = roleIds4;
    } else {
      const options3 = singleSelect.options;
      const found6 = options3.filter((id) => onboardingResponses.includes(id.id));
      const found7 = found6.filter((id) => closure_0.id !== id.id);
      const mapped2 = found6.map((roleIds) => roleIds.roleIds);
      const found8 = mapped2.flat().filter(GlobalUtils.isNotNullish);
      const mapped3 = found7.map((roleIds) => roleIds.roleIds);
      const flatResult2 = mapped2.flat();
      items2 = [];
      const found9 = mapped3.flat().filter(GlobalUtils.isNotNullish);
      const flatResult3 = mapped3.flat();
      differenceResult1 = _modDef12.difference(found8, found9);
    }
  }, items4);
  return obj;
};