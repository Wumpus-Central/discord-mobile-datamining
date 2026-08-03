// === Module 10153: useBatchUpdateSelectOption ===

// Module 10153 (useBatchUpdateSelectOption)
import noop from "noop";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import handleUpdate from "handleUpdate";
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES";

const require = arg1;
let closure_7 = {};
let result = require("handleUpdate").fileFinishedImporting("modules/guild_onboarding/useBatchUpdateSelectOption.tsx");

export default function useBatchUpdateSelectOption(arg0) {
  const _require = arg0;
  let obj = _require(589);
  let items = [handleUpdate];
  let items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let pendingResponseOptions = outer1_5.getPendingResponseOptions(closure_0);
    if (pendingResponseOptions == null) {
      pendingResponseOptions = outer1_7;
    }
    return pendingResponseOptions;
  }, items1);
  let items2 = [arg0];
  const effect = React.useEffect(() => {
    let obj = stateFromStores(outer1_2[4]);
    obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: closure_0 };
    obj.dispatch(obj);
    return () => {
      let obj = outer1_1(outer1_2[4]);
      obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: closure_0 };
      obj.dispatch(obj);
    };
  }, items2);
  const items3 = [arg0, stateFromStores];
  const effect1 = React.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      const _Object = Object;
      tmp2 = 0 !== Object.keys(tmp).length;
    }
    if (tmp2) {
      const result = stateFromStores(outer1_2[9]).updateOnboardingResponses(closure_0);
      const obj = stateFromStores(outer1_2[9]);
    }
  }, items3);
  obj = {
    handleSelectOption: React.useCallback((singleSelect, roleIds) => {
      let obj = outer1_5;
      const onboardingResponses = outer1_5.getOnboardingResponses(callback);
      callback = roleIds;
      if (singleSelect.singleSelect) {
        if (arg2) {
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
          const obj5 = stateFromStores(outer1_2[5]);
          const tmp10 = stateFromStores;
          const tmp11 = outer1_2;
          const differenceResult = stateFromStores(outer1_2[5]).difference(roleIds, roleIds1);
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
          let differenceResult1 = tmp10(tmp11[5]).difference(roleIds2, roleIds3);
          let items2 = differenceResult;
          const tmp10Result = tmp10(tmp11[5]);
        }
        callback = roleIds;
        if (singleSelect.singleSelect) {
          if (arg2) {
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
            const obj10 = stateFromStores(outer1_2[5]);
            const tmp21 = stateFromStores;
            const tmp22 = outer1_2;
            const differenceResult2 = stateFromStores(outer1_2[5]).difference(channelIds, channelIds1);
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
            let differenceResult3 = tmp21(tmp22[5]).difference(channelIds2, channelIds3);
            let items1 = differenceResult2;
            const tmp21Result = tmp21(tmp22[5]);
          }
          if (obj12.hasNotSetUpChannelOptIn(tmp)) {
            const push = items1.push;
            const items = [];
            HermesBuiltin.arraySpread(obj.getDefaultChannelIds(tmp), 0);
            HermesBuiltin.apply(items, items1);
          }
          obj = {};
          const merged = Object.assign(items1.reduce((arg0, id) => {
            const obj = { flags: null };
            const channelIdFlags = outer1_4.getChannelIdFlags(lib, id);
            obj[0] = lib(outer1_2[10]).setFlag(channelIdFlags, outer1_6.OPT_IN_ENABLED, true);
            arg0[id] = obj;
            return arg0;
          }, {}));
          const merged1 = Object.assign(differenceResult3.reduce((arg0, id) => {
            const obj = { flags: null };
            const channelIdFlags = outer1_4.getChannelIdFlags(lib, id);
            obj[0] = lib(outer1_2[10]).setFlag(channelIdFlags, outer1_6.OPT_IN_ENABLED, false);
            arg0[id] = obj;
            return arg0;
          }, {}));
          const obj14 = stateFromStores(outer1_2[9]);
          const option = obj14.selectOption(tmp, singleSelect.id, roleIds.id, arg2);
          obj12 = callback(outer1_2[7]);
          obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: null, overrides: null };
          obj[1] = tmp;
          obj[2] = obj;
          stateFromStores(outer1_2[4]).dispatch(obj);
          const obj15 = stateFromStores(outer1_2[4]);
          stateFromStores(outer1_2[9]).updateRolesLocal(tmp, items2, differenceResult1);
        }
        if (arg2) {
          let channelIds4 = roleIds.channelIds;
          if (channelIds4 == null) {
            channelIds4 = [];
          }
          differenceResult3 = [];
          items1 = channelIds4;
        } else {
          const options2 = singleSelect.options;
          const found2 = options2.filter((id) => onboardingResponses.includes(id.id));
          const found3 = found2.filter((id) => lib.id !== id.id);
          const mapped = found2.map((channelIds) => channelIds.channelIds);
          const found4 = mapped.flat().filter(callback(outer1_2[6]).isNotNullish);
          const mapped1 = found3.map((channelIds) => channelIds.channelIds);
          const flatResult = mapped.flat();
          items1 = [];
          const found5 = mapped1.flat().filter(callback(outer1_2[6]).isNotNullish);
          const flatResult1 = mapped1.flat();
          differenceResult3 = stateFromStores(outer1_2[5]).difference(found4, found5);
          const obj9 = stateFromStores(outer1_2[5]);
        }
      }
      if (arg2) {
        let roleIds4 = roleIds.roleIds;
        if (roleIds4 == null) {
          roleIds4 = [];
        }
        differenceResult1 = [];
        items2 = roleIds4;
      } else {
        const options3 = singleSelect.options;
        const found6 = options3.filter((id) => onboardingResponses.includes(id.id));
        const found7 = found6.filter((id) => lib.id !== id.id);
        const mapped2 = found6.map((roleIds) => roleIds.roleIds);
        const found8 = mapped2.flat().filter(callback(outer1_2[6]).isNotNullish);
        const mapped3 = found7.map((roleIds) => roleIds.roleIds);
        const flatResult2 = mapped2.flat();
        items2 = [];
        const found9 = mapped3.flat().filter(callback(outer1_2[6]).isNotNullish);
        const flatResult3 = mapped3.flat();
        differenceResult1 = stateFromStores(outer1_2[5]).difference(found8, found9);
        const obj4 = stateFromStores(outer1_2[5]);
      }
    }, items4)
  };
  items4 = [arg0];
  return obj;
};