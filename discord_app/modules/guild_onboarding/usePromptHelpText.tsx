// discord_app/modules/guild_onboarding/usePromptHelpText.tsx
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = fn;
const Permissions = fn(1085).Permissions;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePromptHelpText(selectedChannelIds) {
      const cResult = selectedRoleIds(selectedChannelIds[8]).c(23);
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
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id) {
        if (cResult[2] === selectedRoleIds) {
          let tmp7 = cResult[3];
          let tmp8 = cResult[4];
        }
        const stateFromStoresArray = selectedRoleIds(tmp2[9]).useStateFromStoresArray(first, tmp7, tmp8);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [id, UserStore, RelationshipStore, PermissionStore];
          cResult[5] = items1;
          let tmp9 = items1;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== selectedChannelIds) {
          const fn2 = function v() {
            const mapped = Array.from(selectedChannelIds).map((item) => channel.getChannel(item));
            const found = mapped.filter((item) => {
              let canResult = null != item;
              if (canResult) {
                canResult = closure_1_4.can(constants.VIEW_CHANNEL, item);
              }
              return canResult;
            });
            return found.map((item) =>
              selectedRoleIds(selectedChannelIds[10]).computeChannelName(item, closure_1_6, closure_1_5, true),
            );
          };
          cResult[6] = selectedChannelIds;
          cResult[7] = fn2;
          let tmp14 = fn2;
        } else {
          tmp14 = cResult[7];
        }
        const tmpResult = selectedRoleIds(tmp2[9]);
        const stateFromStoresArray1 = selectedRoleIds(tmp2[9]).useStateFromStoresArray(tmp9, tmp14);
        if (cResult[8] === itemHook) {
          let singleSelect;
          if (_prompt != null) {
            singleSelect = _prompt.singleSelect;
          }
          if (cResult[9] === singleSelect) {
            if (cResult[10] === stateFromStoresArray1) {
              if (cResult[11] === stateFromStoresArray) {
                let tmp16 = cResult[12];
                let tmp17 = cResult[13];
              }
              if (cResult[20] === tmp16) {
                if (cResult[21] === tmp17) {
                  let tmp26 = cResult[22];
                }
                return tmp26;
              }
              const obj2 = { helpText: tmp16, helpTextAdditional: tmp17 };
              cResult[20] = tmp16;
              cResult[21] = tmp17;
              cResult[22] = obj2;
              tmp26 = obj2;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function k(name) {
            return "@" + name.name;
          };
          cResult[14] = fn3;
          let tmp18 = fn3;
        } else {
          tmp18 = cResult[14];
        }
        let mapped = stateFromStoresArray.map(tmp18);
        let singleSelect1;
        if (_prompt != null) {
          singleSelect1 = _prompt.singleSelect;
        }
        if (cResult[15] !== singleSelect1) {
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
          cResult[15] = singleSelect3;
          cResult[16] = str;
          let tmp20 = str;
        } else {
          tmp20 = cResult[16];
        }
        if (0 === stateFromStoresArray1.length) {
          if (mapped.length > 0) {
            let str5 = "";
            if (0 !== mapped.length) {
              const intl4 = selectedRoleIds(tmp2[6]).intl;
              const obj3 = { count: mapped.length, extraCount: null, role1: null, role2: null, itemHook: null };
              const _Math3 = Math;
              obj3.extraCount = Math.max(mapped.length - 2, 0);
              [obj6.role1, obj6.role2] = mapped;
              obj3.itemHook = itemHook;
              str5 = intl4.format(selectedRoleIds(tmp2[6]).t.Kj5GIT, obj3);
            }
            tmp20 = str5;
            let str3 = "";
          }
          cResult[8] = itemHook;
          let singleSelect4;
          if (_prompt != null) {
            singleSelect4 = _prompt.singleSelect;
          }
          cResult[9] = singleSelect4;
          cResult[10] = stateFromStoresArray1;
          cResult[11] = stateFromStoresArray;
          cResult[12] = tmp20;
          cResult[13] = str3;
          tmp17 = str3;
          tmp16 = tmp20;
        }
        let str2 = "";
        str3 = "";
        if (stateFromStoresArray1.length > 0) {
          if (cResult[17] === itemHook) {
            if (cResult[18] === stateFromStoresArray1) {
              let tmp23 = cResult[19];
            }
            str3 = str2;
            tmp20 = tmp23;
            if (mapped.length > 0) {
              if (0 !== mapped.length) {
                const intl3 = selectedRoleIds(tmp2[6]).intl;
                const obj7 = { count: mapped.length, extraCount: null, role1: null, role2: null, itemHook: null };
                const _Math2 = Math;
                obj7.extraCount = Math.max(mapped.length - 2, 0);
                [obj5.role1, obj5.role2] = mapped;
                obj7.itemHook = itemHook;
                str2 = intl3.format(selectedRoleIds(tmp2[6]).t.cJZxWf, obj7);
              }
              str3 = str2;
              tmp20 = tmp23;
            }
          }
          let formatResult = str2;
          if (0 !== stateFromStoresArray1.length) {
            const intl2 = selectedRoleIds(tmp2[6]).intl;
            const obj11 = {
              count: stateFromStoresArray1.length,
              extraCount: null,
              channel1: null,
              channel2: null,
              itemHook: null,
            };
            const _Math = Math;
            obj11.extraCount = Math.max(stateFromStoresArray1.length - 2, 0);
            [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
            obj11.itemHook = itemHook;
            formatResult = intl2.format(selectedRoleIds(tmp2[6]).t.Rj841R, obj11);
          }
          cResult[17] = itemHook;
          cResult[18] = stateFromStoresArray1;
          cResult[19] = formatResult;
          tmp23 = formatResult;
        }
        const tmpResult2 = selectedRoleIds(tmp2[9]);
      }
      const fn = function p() {
        if (null != id) {
          let manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
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
      const obj = selectedRoleIds(selectedChannelIds[8]);
    }
  : function usePromptHelpText(arg0) {
      ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
      ({ selectedChannelIds: dependencyMap, itemHook } = arg0);
      let id;
      if (guild != null) {
        id = guild.id;
      }
      const items = [GuildRoleStore];
      const items1 = [id, selectedRoleIds];
      const stateFromStoresArray = selectedRoleIds(504).useStateFromStoresArray(
        items,
        () => {
          if (null != id) {
            let manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
          } else {
            manyRoles = [];
          }
          return manyRoles;
        },
        items1,
      );
      const obj = selectedRoleIds(504);
      const items2 = [id, UserStore, RelationshipStore, PermissionStore];
      const stateFromStoresArray1 = selectedRoleIds(504).useStateFromStoresArray(items2, () => {
        const mapped = Array.from(dependencyMap).map((item) => channel.getChannel(item));
        const found = mapped.filter((item) => {
          let canResult = null != item;
          if (canResult) {
            canResult = closure_1_4.can(constants.VIEW_CHANNEL, item);
          }
          return canResult;
        });
        return found.map((item) =>
          selectedRoleIds(closure_1_1[10]).computeChannelName(item, closure_1_6, closure_1_5, true),
        );
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
            const obj3 = { count: mapped.length, extraCount: null, role1: null, role2: null, itemHook: null };
            const _Math3 = Math;
            obj3.extraCount = Math.max(mapped.length - 2, 0);
            [obj6.role1, obj6.role2] = mapped;
            obj3.itemHook = itemHook;
            str6 = intl4.format(selectedRoleIds(1126).t.Kj5GIT, obj3);
          }
          str = str6;
          let str2 = "";
        }
        const obj10 = { helpText: str, helpTextAdditional: str2 };
        return obj10;
      }
      str2 = "";
      if (stateFromStoresArray1.length > 0) {
        let str3 = "";
        if (0 !== stateFromStoresArray1.length) {
          const intl2 = selectedRoleIds(1126).intl;
          const obj11 = {
            count: stateFromStoresArray1.length,
            extraCount: null,
            channel1: null,
            channel2: null,
            itemHook: null,
          };
          const _Math = Math;
          obj11.extraCount = Math.max(stateFromStoresArray1.length - 2, 0);
          [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
          obj11.itemHook = itemHook;
          str3 = intl2.format(selectedRoleIds(1126).t.Rj841R, obj11);
        }
        let str4 = "";
        if (mapped.length > 0) {
          let str5 = "";
          if (0 !== mapped.length) {
            const intl3 = selectedRoleIds(1126).intl;
            const obj12 = { count: mapped.length, extraCount: null, role1: null, role2: null, itemHook: null };
            const _Math2 = Math;
            obj12.extraCount = Math.max(mapped.length - 2, 0);
            [obj5.role1, obj5.role2] = mapped;
            obj12.itemHook = itemHook;
            str5 = intl3.format(selectedRoleIds(1126).t.cJZxWf, obj12);
          }
          str4 = str5;
        }
        str2 = str4;
        str = str3;
      }
      const obj2 = selectedRoleIds(504);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/usePromptHelpText.tsx");

export default tmp2;
export const useCustomizeCommunityPromptHelpText = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCustomizeCommunityPromptHelpText(selectedChannelIds) {
      const cResult = selectedRoleIds(selectedChannelIds[8]).c(25);
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
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id) {
        if (cResult[2] === selectedRoleIds) {
          let tmp7 = cResult[3];
          let tmp8 = cResult[4];
        }
        const stateFromStoresArray = selectedRoleIds(tmp2[9]).useStateFromStoresArray(first, tmp7, tmp8);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [id, UserStore, RelationshipStore, PermissionStore];
          cResult[5] = items1;
          let tmp9 = items1;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] !== selectedChannelIds) {
          const fn2 = function v() {
            const mapped = Array.from(selectedChannelIds).map((item) => channel.getChannel(item));
            const found = mapped.filter((item) => {
              let canResult = null != item;
              if (canResult) {
                canResult = closure_1_4.can(constants.VIEW_CHANNEL, item);
              }
              return canResult;
            });
            return found.map((item) =>
              selectedRoleIds(selectedChannelIds[10]).computeChannelName(item, closure_1_6, closure_1_5, true),
            );
          };
          cResult[6] = selectedChannelIds;
          cResult[7] = fn2;
          let tmp14 = fn2;
        } else {
          tmp14 = cResult[7];
        }
        const tmpResult = selectedRoleIds(tmp2[9]);
        const stateFromStoresArray1 = selectedRoleIds(tmp2[9]).useStateFromStoresArray(tmp9, tmp14);
        if (cResult[8] === itemHook) {
          let singleSelect;
          if (_prompt != null) {
            singleSelect = _prompt.singleSelect;
          }
          if (cResult[9] === singleSelect) {
            if (cResult[10] === stateFromStoresArray1[0]) {
              if (cResult[11] === stateFromStoresArray1[1]) {
                if (cResult[12] === stateFromStoresArray1.length) {
                  if (cResult[13] === stateFromStoresArray) {
                    let tmp16 = cResult[14];
                  }
                  if (cResult[23] !== tmp16) {
                    const obj2 = { helpText: tmp16, helpTextAdditional: "" };
                    cResult[23] = tmp16;
                    cResult[24] = obj2;
                    let tmp24 = obj2;
                  } else {
                    tmp24 = cResult[24];
                  }
                  return tmp24;
                }
              }
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor(arg0) {
              return "@" + selectedChannelIds.name;
            }
          }
          cResult[15] = N;
        } else {
          class N {
            constructor(arg0) {
              return "@" + selectedChannelIds.name;
            }
          }
        }
        let mapped = stateFromStoresArray.map(N);
        if (_prompt != null) {
          class N {
            constructor(arg0) {
              return "@" + selectedChannelIds.name;
            }
          }
        }
        if (cResult[16] !== undefined) {
          class N {
            constructor(arg0) {
              return "@" + selectedChannelIds.name;
            }
          }
          if (_prompt != null) {
            class N {
              constructor(arg0) {
                return "@" + selectedChannelIds.name;
              }
            }
          }
          let str = "";
          if (!tmp20) {
            class N {
              constructor(arg0) {
                return "@" + selectedChannelIds.name;
              }
            }
            str = obj4.string(selectedRoleIds(tmp2[6]).t.JshhEl);
          }
          if (_prompt != null) {
            class N {
              constructor(arg0) {
                return "@" + selectedChannelIds.name;
              }
            }
          }
          cResult[16] = undefined;
          cResult[17] = str;
          let formatResult = str;
        } else {
          class N {
            constructor(arg0) {
              return "@" + selectedChannelIds.name;
            }
          }
        }
        if (0 === stateFromStoresArray1.length) {
          class N {
            constructor(arg0) {
              return "@" + selectedChannelIds.name;
            }
          }
          cResult[8] = itemHook;
          if (_prompt != null) {
            class N {
              constructor(arg0) {
                return "@" + selectedChannelIds.name;
              }
            }
          }
          cResult[9] = undefined;
          cResult[10] = stateFromStoresArray1[0];
          cResult[11] = stateFromStoresArray1[1];
          cResult[12] = stateFromStoresArray1.length;
          cResult[13] = stateFromStoresArray;
          cResult[14] = formatResult;
          tmp16 = formatResult;
        }
        if (stateFromStoresArray1.length > 0) {
          class N {
            constructor(arg0) {
              return "@" + selectedChannelIds.name;
            }
          }
        }
        if (tmp22) {
          class N {
            constructor(arg0) {
              return "@" + selectedChannelIds.name;
            }
          }
          const obj3 = {
            channelCount: stateFromStoresArray1.length,
            extraChannelCount: null,
            channel1: null,
            channel2: null,
            itemHook: null,
            roleCount: null,
            extraRoleCount: null,
            role1: null,
            role2: null,
          };
          const _Math = Math;
          obj3.extraChannelCount = Math.max(stateFromStoresArray1.length - 2, 0);
          [obj6.channel1, obj6.channel2] = stateFromStoresArray1;
          obj3.itemHook = itemHook;
          obj3.roleCount = mapped.length;
          const _Math2 = Math;
          obj3.extraRoleCount = Math.max(mapped.length - 2, 0);
          [obj6.role1, obj6.role2] = mapped;
          formatResult = obj5.format(selectedRoleIds(tmp2[6]).t.WewRHM, obj3);
        }
        tmp22 = stateFromStoresArray1.length > 0 && mapped.length > 0;
        const tmpResult2 = selectedRoleIds(tmp2[9]);
      }
      const fn = function p() {
        if (null != id) {
          let manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
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
      const obj = selectedRoleIds(selectedChannelIds[8]);
    }
  : function useCustomizeCommunityPromptHelpText(arg0) {
      ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
      ({ selectedChannelIds: dependencyMap, itemHook } = arg0);
      let id;
      if (guild != null) {
        id = guild.id;
      }
      const items = [GuildRoleStore];
      const items1 = [id, selectedRoleIds];
      const stateFromStoresArray = selectedRoleIds(504).useStateFromStoresArray(
        items,
        () => {
          if (null != id) {
            let manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
          } else {
            manyRoles = [];
          }
          return manyRoles;
        },
        items1,
      );
      const obj = selectedRoleIds(504);
      const items2 = [id, UserStore, RelationshipStore, PermissionStore];
      const stateFromStoresArray1 = selectedRoleIds(504).useStateFromStoresArray(items2, () => {
        const mapped = Array.from(dependencyMap).map((item) => channel.getChannel(item));
        const found = mapped.filter((item) => {
          let canResult = null != item;
          if (canResult) {
            canResult = closure_1_4.can(constants.VIEW_CHANNEL, item);
          }
          return canResult;
        });
        return found.map((item) =>
          selectedRoleIds(closure_1_1[10]).computeChannelName(item, closure_1_6, closure_1_5, true),
        );
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
          const obj6 = { count: mapped.length, extraCount: null, role1: null, role2: null, itemHook: null };
          const _Math4 = Math;
          obj6.extraCount = Math.max(mapped.length - 2, 0);
          [obj5.role1, obj5.role2] = mapped;
          obj6.itemHook = itemHook;
          str = intl4.format(selectedRoleIds(1126).t.vdtNYa, obj6);
        }
        const obj10 = { helpText: str, helpTextAdditional: "" };
        return obj10;
      }
      if (stateFromStoresArray1.length > 0) {
        if (0 === mapped.length) {
          const intl3 = selectedRoleIds(1126).intl;
          const obj11 = {
            count: stateFromStoresArray1.length,
            extraCount: null,
            channel1: null,
            channel2: null,
            itemHook: null,
          };
          const _Math3 = Math;
          obj11.extraCount = Math.max(stateFromStoresArray1.length - 2, 0);
          [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
          obj11.itemHook = itemHook;
          str = intl3.format(selectedRoleIds(1126).t.ZKywGU, obj11);
        }
      }
      if (tmp5) {
        const intl2 = selectedRoleIds(1126).intl;
        const obj12 = {
          channelCount: stateFromStoresArray1.length,
          extraChannelCount: null,
          channel1: null,
          channel2: null,
          itemHook: null,
          roleCount: null,
          extraRoleCount: null,
          role1: null,
          role2: null,
        };
        const _Math = Math;
        obj12.extraChannelCount = Math.max(stateFromStoresArray1.length - 2, 0);
        [obj3.channel1, obj3.channel2] = stateFromStoresArray1;
        obj12.itemHook = itemHook;
        obj12.roleCount = mapped.length;
        const _Math2 = Math;
        obj12.extraRoleCount = Math.max(mapped.length - 2, 0);
        [obj3.role1, obj3.role2] = mapped;
        str = intl2.format(selectedRoleIds(1126).t.WewRHM, obj12);
      }
      const obj2 = selectedRoleIds(504);
      tmp5 = stateFromStoresArray1.length > 0 && mapped.length > 0;
    };
