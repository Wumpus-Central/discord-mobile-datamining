// discord_app/modules/guild_onboarding/usePromptHelpText.tsx
import Constants from "../../Constants.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let selectedChannelIds;

const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedChannelIds) => {
      let _prompt;
      let first;
      let guild;
      let selectedRoleIds;
      let obj = selectedRoleIds(selectedChannelIds[8]);
      const cResult = obj.c(23);
      ({ guild, prompt: _prompt, selectedRoleIds } = selectedChannelIds);
      selectedChannelIds = selectedChannelIds.selectedChannelIds;
      const itemHook = selectedChannelIds.itemHook;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id) {
        let tmp7;
        let tmp8;
        let tmp9;
        let tmp14;
        let tmp18;
        let tmp17;
        if (cResult[2] === selectedRoleIds) {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
        }
        const tmpResult = selectedRoleIds(selectedChannelIds[9]);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [id, UserStore, RelationshipStore, PermissionStore];
          cResult[5] = items1;
          tmp9 = items1;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== selectedChannelIds) {
          const fn2 = function v() {
            let channel;
            const arr = Array.from(selectedChannelIds);
            const mapped = arr.map((item) => channel.getChannel(item));
            const found = mapped.filter((item) => {
              const canResult = null != item && closure_1_4.can(constants.VIEW_CHANNEL, item);
              return canResult;
            });
            return found.map((item) => {
              const obj = selectedRoleIds(selectedChannelIds[10]);
              return obj.computeChannelName(item, closure_1_6, closure_1_5, true);
            });
          };
          cResult[6] = selectedChannelIds;
          cResult[7] = fn2;
          tmp14 = fn2;
        } else {
          tmp14 = cResult[7];
        }
        const tmpResult2 = selectedRoleIds(selectedChannelIds[9]);
        const stateFromStoresArray1 = tmpResult2.useStateFromStoresArray(tmp9, tmp14);
        if (cResult[8] === itemHook) {
          let singleSelect;
          const tmp15 = cResult[9];
          if (_prompt != null) {
            singleSelect = _prompt.singleSelect;
          }
          if (tmp15 === singleSelect) {
            if (cResult[10] === stateFromStoresArray1) {
              if (cResult[11] === stateFromStoresArray) {
                tmp17 = cResult[12];
                tmp18 = cResult[13];
              }
              if (cResult[20] === tmp17) {
                let tmp30;
                if (cResult[21] === tmp18) {
                  tmp30 = cResult[22];
                }
                return tmp30;
              }
              const obj2 = { helpText: tmp17, helpTextAdditional: tmp18 };
              cResult[20] = tmp17;
              cResult[21] = tmp18;
              cResult[22] = obj2;
              tmp30 = obj2;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor(name) {
              return "@" + name.name;
            }
          }
          cResult[14] = T;
        } else {
          class T {
            constructor(name) {
              return "@" + name.name;
            }
          }
        }
        let mapped = stateFromStoresArray.map(T);
        const tmp21 = cResult[15];
        if (_prompt != null) {
          class T {
            constructor(name) {
              return "@" + name.name;
            }
          }
        }
        if (tmp21 !== undefined) {
          class T {
            constructor(name) {
              return "@" + name.name;
            }
          }
          if (_prompt != null) {
            class T {
              constructor(name) {
                return "@" + name.name;
              }
            }
          }
          let str = "";
          if (!tmp24) {
            class T {
              constructor(name) {
                return "@" + name.name;
              }
            }
            str = obj4.string(selectedRoleIds(tmp2[6]).t.JshhEl);
          }
          if (_prompt != null) {
            class T {
              constructor(name) {
                return "@" + name.name;
              }
            }
          }
          cResult[15] = undefined;
          cResult[16] = str;
        } else {
          class T {
            constructor(name) {
              return "@" + name.name;
            }
          }
        }
        if (0 === stateFromStoresArray1.length) {
          class T {
            constructor(name) {
              return "@" + name.name;
            }
          }
          cResult[8] = itemHook;
          if (_prompt != null) {
            class T {
              constructor(name) {
                return "@" + name.name;
              }
            }
          }
          cResult[9] = undefined;
          cResult[10] = stateFromStoresArray1;
          cResult[11] = stateFromStoresArray;
          cResult[12] = tmp23;
          cResult[13] = str3;
          tmp18 = str3;
          tmp17 = tmp23;
        }
        if (stateFromStoresArray1.length > 0) {
          class T {
            constructor(name) {
              return "@" + name.name;
            }
          }
          let formatResult = str2;
          if (0 !== stateFromStoresArray1.length) {
            class T {
              constructor(name) {
                return "@" + name.name;
              }
            }
            const format = tmp28.format;
            const _Math = Math;
            const obj3 = {
              count: stateFromStoresArray1.length,
              extraCount: Math.max(stateFromStoresArray1.length - 2, 0),
              channel1: null,
              channel2: null,
              itemHook,
            };
            const Rj841R = selectedRoleIds(tmp2[6]).t.Rj841R;
            [obj5.channel1, obj5.channel2] = stateFromStoresArray1;
            formatResult = format(Rj841R, obj3);
          }
          cResult[17] = itemHook;
          cResult[18] = stateFromStoresArray1;
          cResult[19] = formatResult;
        }
      }
      const fn = function f() {
        let manyRoles;
        if (null != id) {
          manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
        } else {
          manyRoles = [];
        }
        return manyRoles;
      };
      const items2 = [id, selectedRoleIds];
      cResult[1] = id;
      cResult[2] = selectedRoleIds;
      cResult[3] = fn;
      cResult[4] = items2;
      tmp8 = items2;
      tmp7 = fn;
    }
  : (arg0) => {
      let _prompt;
      let guild;
      let itemHook;
      let selectedRoleIds;
      let str2;
      ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
      ({ selectedChannelIds: dependencyMap, itemHook } = arg0);
      let id;
      if (guild != null) {
        id = guild.id;
      }
      let obj = selectedRoleIds(504);
      const items = [GuildRoleStore];
      const items1 = [id, selectedRoleIds];
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => {
          let manyRoles;
          if (null != id) {
            manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
          } else {
            manyRoles = [];
          }
          return manyRoles;
        },
        items1,
      );
      const items2 = [id, UserStore, RelationshipStore, PermissionStore];
      const obj2 = selectedRoleIds(504);
      const stateFromStoresArray1 = obj2.useStateFromStoresArray(items2, () => {
        let channel;
        const arr = Array.from(dependencyMap);
        const mapped = arr.map((item) => channel.getChannel(item));
        const found = mapped.filter((item) => {
          const canResult = null != item && closure_1_4.can(constants.VIEW_CHANNEL, item);
          return canResult;
        });
        return found.map((item) => {
          const obj = selectedRoleIds(closure_1_1[10]);
          return obj.computeChannelName(item, closure_1_6, closure_1_5, true);
        });
      });
      let mapped = stateFromStoresArray.map((name) => "@" + name.name);
      let singleSelect;
      if (_prompt != null) {
        singleSelect = _prompt.singleSelect;
      }
      let str = "";
      if (!singleSelect) {
        const intl = selectedRoleIds(1126).intl;
        str = intl.string(selectedRoleIds(1126).t.JshhEl);
      }
      if (0 === stateFromStoresArray1.length) {
        if (mapped.length > 0) {
          let str6 = "";
          if (0 !== mapped.length) {
            const intl4 = selectedRoleIds(1126).intl;
            const format3 = intl4.format;
            const _Math3 = Math;
            const obj3 = {
              count: mapped.length,
              extraCount: Math.max(mapped.length - 2, 0),
              role1: null,
              role2: null,
              itemHook,
            };
            const Kj5GIT = selectedRoleIds(1126).t.Kj5GIT;
            [obj6.role1, obj6.role2] = mapped;
            str6 = format3(Kj5GIT, obj3);
          }
          str = str6;
          str2 = "";
        }
        return { helpText: str, helpTextAdditional: str2 };
      }
      str2 = "";
      if (stateFromStoresArray1.length > 0) {
        let str3 = "";
        if (0 !== stateFromStoresArray1.length) {
          const intl2 = selectedRoleIds(1126).intl;
          const format = intl2.format;
          const _Math = Math;
          const obj11 = {
            count: stateFromStoresArray1.length,
            extraCount: Math.max(stateFromStoresArray1.length - 2, 0),
            channel1: null,
            channel2: null,
            itemHook,
          };
          const Rj841R = selectedRoleIds(1126).t.Rj841R;
          [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
          str3 = format(Rj841R, obj11);
        }
        let str4 = "";
        if (mapped.length > 0) {
          let str5 = "";
          if (0 !== mapped.length) {
            const intl3 = selectedRoleIds(1126).intl;
            const format2 = intl3.format;
            const _Math2 = Math;
            const obj12 = {
              count: mapped.length,
              extraCount: Math.max(mapped.length - 2, 0),
              role1: null,
              role2: null,
              itemHook,
            };
            const cJZxWf = selectedRoleIds(1126).t.cJZxWf;
            [obj5.role1, obj5.role2] = mapped;
            str5 = format2(cJZxWf, obj12);
          }
          str4 = str5;
        }
        str2 = str4;
        str = str3;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedChannelIds) => {
      let _prompt;
      let first;
      let guild;
      let selectedRoleIds;
      let obj = selectedRoleIds(selectedChannelIds[8]);
      const cResult = obj.c(25);
      ({ guild, prompt: _prompt, selectedRoleIds } = selectedChannelIds);
      selectedChannelIds = selectedChannelIds.selectedChannelIds;
      const itemHook = selectedChannelIds.itemHook;
      let id;
      if (guild != null) {
        id = guild.id;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id) {
        let tmp7;
        let tmp8;
        let tmp9;
        let tmp14;
        let tmp18;
        let format3Result;
        let tmp17;
        if (cResult[2] === selectedRoleIds) {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
        }
        const tmpResult = selectedRoleIds(selectedChannelIds[9]);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [id, UserStore, RelationshipStore, PermissionStore];
          cResult[5] = items1;
          tmp9 = items1;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== selectedChannelIds) {
          const fn2 = function v() {
            let channel;
            const arr = Array.from(selectedChannelIds);
            const mapped = arr.map((item) => channel.getChannel(item));
            const found = mapped.filter((item) => {
              const canResult = null != item && closure_1_4.can(constants.VIEW_CHANNEL, item);
              return canResult;
            });
            return found.map((item) => {
              const obj = selectedRoleIds(selectedChannelIds[10]);
              return obj.computeChannelName(item, closure_1_6, closure_1_5, true);
            });
          };
          cResult[6] = selectedChannelIds;
          cResult[7] = fn2;
          tmp14 = fn2;
        } else {
          tmp14 = cResult[7];
        }
        const tmpResult2 = selectedRoleIds(selectedChannelIds[9]);
        const stateFromStoresArray1 = tmpResult2.useStateFromStoresArray(tmp9, tmp14);
        if (cResult[8] === itemHook) {
          let singleSelect;
          const tmp15 = cResult[9];
          if (_prompt != null) {
            singleSelect = _prompt.singleSelect;
          }
          if (tmp15 === singleSelect) {
            if (cResult[10] === stateFromStoresArray1[0]) {
              if (cResult[11] === stateFromStoresArray1[1]) {
                if (cResult[12] === stateFromStoresArray1.length) {
                  let tmp28;
                  if (cResult[13] === stateFromStoresArray) {
                    tmp17 = cResult[14];
                  }
                  if (cResult[23] !== tmp17) {
                    const obj2 = { helpText: tmp17, helpTextAdditional: "" };
                    cResult[23] = tmp17;
                    cResult[24] = obj2;
                    tmp28 = obj2;
                  } else {
                    tmp28 = cResult[24];
                  }
                  return tmp28;
                }
              }
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function k(name) {
            return "@" + name.name;
          };
          cResult[15] = fn3;
          tmp18 = fn3;
        } else {
          tmp18 = cResult[15];
        }
        let mapped = stateFromStoresArray.map(tmp18);
        let singleSelect1;
        const tmp19 = cResult[16];
        if (_prompt != null) {
          singleSelect1 = _prompt.singleSelect;
        }
        if (tmp19 !== singleSelect1) {
          let singleSelect2;
          if (_prompt != null) {
            singleSelect2 = _prompt.singleSelect;
          }
          let str = "";
          if (!singleSelect2) {
            const intl = selectedRoleIds(tmp2[6]).intl;
            str = intl.string(selectedRoleIds(tmp2[6]).t.JshhEl);
          }
          let singleSelect3;
          if (_prompt != null) {
            singleSelect3 = _prompt.singleSelect;
          }
          cResult[16] = singleSelect3;
          cResult[17] = str;
          format3Result = str;
        } else {
          format3Result = cResult[17];
        }
        if (0 === stateFromStoresArray1.length) {
          if (mapped.length > 0) {
            const intl4 = selectedRoleIds(tmp2[6]).intl;
            const format3 = intl4.format;
            const _Math4 = Math;
            const obj3 = {
              count: mapped.length,
              extraCount: Math.max(mapped.length - 2, 0),
              role1: null,
              role2: null,
              itemHook,
            };
            const vdtNYa = selectedRoleIds(tmp2[6]).t.vdtNYa;
            [obj6.role1, obj6.role2] = mapped;
            format3Result = format3(vdtNYa, obj3);
          }
          cResult[8] = itemHook;
          let singleSelect4;
          if (_prompt != null) {
            singleSelect4 = _prompt.singleSelect;
          }
          cResult[9] = singleSelect4;
          cResult[10] = stateFromStoresArray1[0];
          cResult[11] = stateFromStoresArray1[1];
          cResult[12] = stateFromStoresArray1.length;
          cResult[13] = stateFromStoresArray;
          cResult[14] = format3Result;
          tmp17 = format3Result;
        }
        if (stateFromStoresArray1.length > 0) {
          if (0 === mapped.length) {
            if (cResult[18] === itemHook) {
              if (cResult[19] === stateFromStoresArray1[0]) {
                if (cResult[20] === stateFromStoresArray1[1]) {
                  let tmp25;
                  if (cResult[21] === stateFromStoresArray1.length) {
                    tmp25 = cResult[22];
                  }
                  format3Result = tmp25;
                }
              }
            }
            const intl3 = selectedRoleIds(tmp2[6]).intl;
            const format2 = intl3.format;
            const _Math3 = Math;
            const obj7 = {
              count: stateFromStoresArray1.length,
              extraCount: Math.max(stateFromStoresArray1.length - 2, 0),
              channel1: null,
              channel2: null,
              itemHook,
            };
            const ZKywGU = selectedRoleIds(tmp2[6]).t.ZKywGU;
            [obj5.channel1, obj5.channel2] = stateFromStoresArray1;
            const format2Result = format2(ZKywGU, obj7);
            cResult[18] = itemHook;
            cResult[19] = stateFromStoresArray1[0];
            cResult[20] = stateFromStoresArray1[1];
            cResult[21] = stateFromStoresArray1.length;
            cResult[22] = format2Result;
            tmp25 = format2Result;
          }
        }
        const tmp24 = stateFromStoresArray1.length > 0 && mapped.length > 0;
        if (tmp24) {
          const intl2 = selectedRoleIds(tmp2[6]).intl;
          const format = intl2.format;
          const _Math = Math;
          const obj11 = {
            channelCount: stateFromStoresArray1.length,
            extraChannelCount: Math.max(stateFromStoresArray1.length - 2, 0),
            channel1: null,
            channel2: null,
            itemHook,
            roleCount: mapped.length,
            extraRoleCount: Math.max(mapped.length - 2, 0),
            role1: null,
            role2: null,
          };
          const WewRHM = selectedRoleIds(tmp2[6]).t.WewRHM;
          [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
          const _Math2 = Math;
          [obj4.role1, obj4.role2] = mapped;
          format3Result = format(WewRHM, obj11);
        }
      }
      const fn = function f() {
        let manyRoles;
        if (null != id) {
          manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
        } else {
          manyRoles = [];
        }
        return manyRoles;
      };
      const items2 = [id, selectedRoleIds];
      cResult[1] = id;
      cResult[2] = selectedRoleIds;
      cResult[3] = fn;
      cResult[4] = items2;
      tmp8 = items2;
      tmp7 = fn;
    }
  : (arg0) => {
      let _prompt;
      let guild;
      let itemHook;
      let selectedRoleIds;
      ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
      ({ selectedChannelIds: dependencyMap, itemHook } = arg0);
      let id;
      if (guild != null) {
        id = guild.id;
      }
      let obj = selectedRoleIds(504);
      const items = [GuildRoleStore];
      const items1 = [id, selectedRoleIds];
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => {
          let manyRoles;
          if (null != id) {
            manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
          } else {
            manyRoles = [];
          }
          return manyRoles;
        },
        items1,
      );
      const items2 = [id, UserStore, RelationshipStore, PermissionStore];
      const obj2 = selectedRoleIds(504);
      const stateFromStoresArray1 = obj2.useStateFromStoresArray(items2, () => {
        let channel;
        const arr = Array.from(dependencyMap);
        const mapped = arr.map((item) => channel.getChannel(item));
        const found = mapped.filter((item) => {
          const canResult = null != item && closure_1_4.can(constants.VIEW_CHANNEL, item);
          return canResult;
        });
        return found.map((item) => {
          const obj = selectedRoleIds(closure_1_1[10]);
          return obj.computeChannelName(item, closure_1_6, closure_1_5, true);
        });
      });
      let mapped = stateFromStoresArray.map((name) => "@" + name.name);
      let singleSelect;
      if (_prompt != null) {
        singleSelect = _prompt.singleSelect;
      }
      let str = "";
      if (!singleSelect) {
        const intl = selectedRoleIds(1126).intl;
        str = intl.string(selectedRoleIds(1126).t.JshhEl);
      }
      if (0 === stateFromStoresArray1.length) {
        if (mapped.length > 0) {
          const intl4 = selectedRoleIds(1126).intl;
          const format3 = intl4.format;
          const _Math4 = Math;
          const obj6 = {
            count: mapped.length,
            extraCount: Math.max(mapped.length - 2, 0),
            role1: null,
            role2: null,
            itemHook,
          };
          const vdtNYa = selectedRoleIds(1126).t.vdtNYa;
          [obj5.role1, obj5.role2] = mapped;
          str = format3(vdtNYa, obj6);
        }
        return { helpText: str, helpTextAdditional: "" };
      }
      if (stateFromStoresArray1.length > 0) {
        if (0 === mapped.length) {
          const intl3 = selectedRoleIds(1126).intl;
          const format2 = intl3.format;
          const _Math3 = Math;
          const obj11 = {
            count: stateFromStoresArray1.length,
            extraCount: Math.max(stateFromStoresArray1.length - 2, 0),
            channel1: null,
            channel2: null,
            itemHook,
          };
          const ZKywGU = selectedRoleIds(1126).t.ZKywGU;
          [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
          str = format2(ZKywGU, obj11);
        }
      }
      const tmp5 = stateFromStoresArray1.length > 0 && mapped.length > 0;
      if (tmp5) {
        const intl2 = selectedRoleIds(1126).intl;
        const format = intl2.format;
        const _Math = Math;
        const obj12 = {
          channelCount: stateFromStoresArray1.length,
          extraChannelCount: Math.max(stateFromStoresArray1.length - 2, 0),
          channel1: null,
          channel2: null,
          itemHook,
          roleCount: mapped.length,
          extraRoleCount: Math.max(mapped.length - 2, 0),
          role1: null,
          role2: null,
        };
        const WewRHM = selectedRoleIds(1126).t.WewRHM;
        [obj3.channel1, obj3.channel2] = stateFromStoresArray1;
        const _Math2 = Math;
        [obj3.role1, obj3.role2] = mapped;
        str = format(WewRHM, obj12);
      }
    };
const result = size.fileFinishedImporting("modules/guild_onboarding/usePromptHelpText.tsx");

export default tmp2;
export const useCustomizeCommunityPromptHelpText = tmp3;
