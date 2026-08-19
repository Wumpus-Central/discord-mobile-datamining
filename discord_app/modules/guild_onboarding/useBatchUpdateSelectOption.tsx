// discord_app/modules/guild_onboarding/useBatchUpdateSelectOption.tsx
import noop from "../../../_runtime/00019_noop.js";
import updateUserGuildSettingsInternal from "../../stores/UserGuildSettingsStore.tsx";
import handleUpdate from "GuildOnboardingPromptsStore.tsx";
import { ChannelNotificationSettingsFlags as closure_6 } from "../user_settings/UserSettingsConstants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
let closure_7 = {};
let result = require("obj132").fileFinishedImporting("modules/guild_onboarding/useBatchUpdateSelectOption.tsx");

export default function useBatchUpdateSelectOption(arg0) {
  const _require = arg0;
  let obj = initialize;
  let items = [closure_5];
  let items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let pendingResponseOptions = closure_1_5.getPendingResponseOptions(closure_0);
    if (pendingResponseOptions == null) {
      pendingResponseOptions = closure_1_7;
    }
    return pendingResponseOptions;
  }, items1);
  let items2 = [arg0];
  const effect = React.useEffect(() => {
    stateFromStores(dependencyMap[4]);
    let obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: closure_0 };
    obj.dispatch(obj);
    return () => {
      stateFromStores(closure_1_2[4]);
      const obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: closure_0 };
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
      const result = stateFromStores(dependencyMap[9]).updateOnboardingResponses(closure_0);
      const obj = stateFromStores(dependencyMap[9]);
    }
  }, items3);
  obj = {
    handleSelectOption: React.useCallback((singleSelect, roleIds) => {
      let obj = closure_1_5;
      const onboardingResponses = closure_1_5.getOnboardingResponses(callback);
      callback = roleIds;
      if (singleSelect.singleSelect) {
        if (arg2) {
          const options = singleSelect.options;
          const found = options.find((item, index) => onboardingResponses.includes(item.id));
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
          const obj5 = stateFromStores(dependencyMap[5]);
          const differenceResult = stateFromStores(dependencyMap[5]).difference(roleIds, roleIds1);
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
          let differenceResult1 = stateFromStores(dependencyMap[5]).difference(roleIds2, roleIds3);
          let items2 = differenceResult;
          const tmp10Result = stateFromStores(dependencyMap[5]);
        }
        callback = roleIds;
        if (singleSelect.singleSelect) {
          if (arg2) {
            const options1 = singleSelect.options;
            const found1 = options1.find((item, index) => onboardingResponses.includes(item.id));
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
            const obj10 = stateFromStores(dependencyMap[5]);
            const differenceResult2 = stateFromStores(dependencyMap[5]).difference(channelIds, channelIds1);
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
            let differenceResult3 = stateFromStores(dependencyMap[5]).difference(channelIds2, channelIds3);
            let items1 = differenceResult2;
            const tmp21Result = stateFromStores(dependencyMap[5]);
          }
          if (obj12.hasNotSetUpChannelOptIn(tmp)) {
            const push = items1.push;
            const items = [];
            HermesBuiltin.arraySpread(obj.getDefaultChannelIds(tmp), 0);
            HermesBuiltin.apply(items, items1);
          }
          const merged = Object.assign(items1.reduce((acc, item, index) => {
            const obj = { flags: null };
            const channelIdFlags = closure_1_4.getChannelIdFlags(lib, item);
            obj[0] = lib(closure_1_2[10]).setFlag(channelIdFlags, closure_1_6.OPT_IN_ENABLED, true);
            acc[item] = obj;
            return acc;
          }, {}));
          const merged1 = Object.assign(differenceResult3.reduce((acc, item, index) => {
            const obj = { flags: null };
            const channelIdFlags = closure_1_4.getChannelIdFlags(lib, item);
            obj[0] = lib(closure_1_2[10]).setFlag(channelIdFlags, closure_1_6.OPT_IN_ENABLED, false);
            acc[item] = obj;
            return acc;
          }, {}));
          const obj14 = stateFromStores(dependencyMap[9]);
          const option = obj14.selectOption(tmp, singleSelect.id, roleIds.id, arg2);
          obj12 = callback(dependencyMap[7]);
          obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: null, overrides: null };
          obj[1] = tmp;
          obj[2] = obj;
          stateFromStores(dependencyMap[4]).dispatch(obj);
          const obj15 = stateFromStores(dependencyMap[4]);
          stateFromStores(dependencyMap[9]).updateRolesLocal(tmp, items2, differenceResult1);
          const obj17 = stateFromStores(dependencyMap[9]);
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
          const found2 = options2.filter((item, index) => onboardingResponses.includes(item.id));
          const found3 = found2.filter((item, index) => lib.id !== item.id);
          const mapped = found2.map((item, index) => item.channelIds);
          const found4 = mapped.flat().filter(callback(dependencyMap[6]).isNotNullish);
          const mapped1 = found3.map((item, index) => item.channelIds);
          const flatResult = mapped.flat();
          items1 = [];
          const found5 = mapped1.flat().filter(callback(dependencyMap[6]).isNotNullish);
          const flatResult1 = mapped1.flat();
          differenceResult3 = stateFromStores(dependencyMap[5]).difference(found4, found5);
          const obj9 = stateFromStores(dependencyMap[5]);
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
        const found6 = options3.filter((item, index) => onboardingResponses.includes(item.id));
        const found7 = found6.filter((item, index) => lib.id !== item.id);
        const mapped2 = found6.map((item, index) => item.roleIds);
        const found8 = mapped2.flat().filter(callback(dependencyMap[6]).isNotNullish);
        const mapped3 = found7.map((item, index) => item.roleIds);
        const flatResult2 = mapped2.flat();
        items2 = [];
        const found9 = mapped3.flat().filter(callback(dependencyMap[6]).isNotNullish);
        const flatResult3 = mapped3.flat();
        differenceResult1 = stateFromStores(dependencyMap[5]).difference(found8, found9);
        const obj4 = stateFromStores(dependencyMap[5]);
      }
    }, items4)
  };
  items4 = [arg0];
  return obj;
};