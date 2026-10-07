// discord_app/modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import InteractionComponentTypes from "../../../interaction_components/InteractionComponentTypes.tsx";
import AutocompleteUtilsDefault from "../../../../utils/AutocompleteUtils.tsx";
import SelectComponentActionSheetDefault from "../../../interaction_components/native/components/SelectComponentActionSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";

const require = globalThis.__r;

require = fn;
function queryGuilds(query) {
  let obj = { type: InteractionComponentTypes.SelectOptionType.GUILD, guild: null, label: null, value: null };
  const obj3 = { id: value, name: null };
  const intl = util.intl;
  obj3.name = intl.string(util.t["32u1Dx"]);
  obj.guild = GuildRecordUtils.dangerouslyConstructGuildRecordFromUntypedObject(obj3);
  const intl2 = util.intl;
  obj.label = intl2.string(util.t["32u1Dx"]);
  obj.value = value;
  const items = [obj];
  if (0 === query.length) {
    const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
    let reduced = flattenedGuildIds.reduce((arr, item) => {
      guild = guild.getGuild(item);
      if (null != guild) {
        const obj = {
          type: require("InteractionComponentTypes").SelectOptionType.GUILD,
          value: null,
          label: null,
          guild: null,
        };
        ({ id: obj.value, name: obj.label } = guild);
        obj.guild = guild;
        arr = arr.push(obj);
      }
      return arr;
    }, items);
  } else {
    const obj5 = { query };
    reduced = AutocompleteUtilsDefault.queryGuilds(obj5).map((record) => {
      record = record.record;
      return {
        type: require("InteractionComponentTypes").SelectOptionType.GUILD,
        value: record.id,
        label: record.name,
        guild: record,
      };
    });
    const queryGuildsResult = AutocompleteUtilsDefault.queryGuilds(obj5);
  }
  return reduced;
}
const UserSettingsSafetySelectedGuildStore = fn(15815);
({
  GUILD_SELECT_ALL_SERVERS_OPTION_ID: closure_7,
  setSelectedGuildId: closure_8,
  useUserSafetySettingsSelectedGuildStore: closure_9,
} = UserSettingsSafetySelectedGuildStore);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { iconContainer: { marginRight: nativeDefault.space.PX_12 } };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let stringResult = dependencyMap;
      const cResult = selectedGuildId(576).c(6);
      selectedGuildId = closure_9().selectedGuildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== selectedGuildId) {
        const fn = function n() {
          return GuildStore.getGuild(selectedGuildId);
        };
        cResult[1] = selectedGuildId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = selectedGuildId(576);
      const stateFromStores = selectedGuildId(504).useStateFromStores(first, tmp6);
      if (selectedGuildId !== value) {
        if (null != stateFromStores) {
          if (cResult[4] !== stateFromStores) {
            const obj2 = { type: tmp(5129).SelectOptionType.GUILD, guild: stateFromStores, label: null, value: null };
            ({ name: obj3.label, id: obj3.value } = stateFromStores);
            cResult[4] = stateFromStores;
            cResult[5] = obj2;
            let tmp10 = obj2;
          } else {
            tmp10 = cResult[5];
          }
          return tmp10;
        }
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { type: tmp(5129).SelectOptionType.GUILD, guild: null, label: null, value: null };
        const obj5 = { id: value, name: null };
        const intl = tmp(1126).intl;
        obj5.name = intl.string(tmp(1126).t["32u1Dx"]);
        obj4.guild = tmp(2066).dangerouslyConstructGuildRecordFromUntypedObject(obj5);
        const intl2 = tmp(1126).intl;
        stringResult = intl2.string(tmp(1126).t["32u1Dx"]);
        obj4.label = stringResult;
        obj4.value = value;
        cResult[3] = obj4;
        const tmpResult2 = tmp(2066);
      }
      const tmpResult = selectedGuildId(504);
    }
  : () => {
      const selectedGuildId = closure_9().selectedGuildId;
      const items = [GuildStore];
      const stateFromStores = selectedGuildId(504).useStateFromStores(items, () =>
        GuildStore.getGuild(selectedGuildId),
      );
      if (selectedGuildId !== value) {
        if (null != stateFromStores) {
          let obj3 = { type: tmp(5129).SelectOptionType.GUILD, guild: stateFromStores, label: null, value: null };
          ({ name: obj2.label, id: obj2.value } = stateFromStores);
        }
        return obj3;
      }
      const obj4 = { type: selectedGuildId(5129).SelectOptionType.GUILD, guild: null, label: null, value: null };
      const obj = selectedGuildId(504);
      const obj5 = { id: value, name: null };
      const intl = tmp(1126).intl;
      obj5.name = intl.string(selectedGuildId(1126).t["32u1Dx"]);
      obj4.guild = selectedGuildId(2066).dangerouslyConstructGuildRecordFromUntypedObject(obj5);
      const intl2 = tmp(1126).intl;
      obj4.label = intl2.string(selectedGuildId(1126).t["32u1Dx"]);
      obj4.value = value;
      obj3 = obj4;
      const tmpResult = selectedGuildId(2066);
    };
ReactCompilerGating = fn(558);
let obj3 = { marginRight: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = iter(576).c(18);
      let tmp4 = closure_11();
      const tmp5 = _slicedToArray(noop.useState(""), 2);
      const first = tmp5[0];
      iter = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { maxValues: 1, minValues: 1, placeholder: null };
        const intl = tmp(1126).intl;
        obj2.placeholder = intl.string(tmp(1126).t["ZImm/x"]);
        cResult[0] = obj2;
        let first1 = obj2;
      } else {
        first1 = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(arg0) {
          return queryGuilds(arg0);
        };
        cResult[1] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== first) {
        const tmp8Result = tmp8(first);
        cResult[2] = first;
        cResult[3] = tmp8Result;
        let tmp9 = tmp8Result;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            obj = closure_1(closure_1_2[14]);
            return obj.hideActionSheet();
          }
        }
        cResult[4] = L;
      } else {
        class L {
          constructor() {
            obj = closure_1(closure_1_2[14]);
            return obj.hideActionSheet();
          }
        }
      }
      importDefault = L;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            obj = closure_1(closure_1_2[14]);
            return obj.hideActionSheet();
          }
        }
        cResult[5] = tmp13;
      } else {
        class L {
          constructor() {
            obj = closure_1(closure_1_2[14]);
            return obj.hideActionSheet();
          }
        }
      }
      if (cResult[6] !== iter.value) {
        class L {
          constructor() {
            obj = closure_1(closure_1_2[14]);
            return obj.hideActionSheet();
          }
        }
        cResult[6] = iter.value;
        cResult[7] = tmp15;
      } else {
        class L {
          constructor() {
            obj = closure_1(closure_1_2[14]);
            return obj.hideActionSheet();
          }
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0) {
            return arg0.label;
          }
        }
        cResult[8] = T;
      } else {
        class T {
          constructor(arg0) {
            return arg0.label;
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor(arg0) {
            if (arg0.value === closure_1_7) {
              tmp7 = closure_1_10;
              tmp8 = closure_0;
              tmp9 = closure_1_2;
              tmp6 = closure_1_10(closure_0(closure_1_2[15]).GuildSelectDefaultIcon, {});
            } else {
              tmp = closure_1_10;
              tmp2 = closure_1;
              tmp3 = closure_1_2;
              obj = { guild: null, size: null };
              obj.guild = arg0.guild;
              tmp5 = closure_0;
              tmp4 = closure_1(closure_1_2[16]);
              obj.size = closure_0(closure_1_2[16]).GuildIconSizes.SMALL_32;
              tmp6 = closure_1_10(tmp4, obj);
            }
            return tmp6;
          }
        }
        cResult[9] = U;
      } else {
        class U {
          constructor(arg0) {
            if (arg0.value === closure_1_7) {
              tmp7 = closure_1_10;
              tmp8 = closure_0;
              tmp9 = closure_1_2;
              tmp6 = closure_1_10(closure_0(closure_1_2[15]).GuildSelectDefaultIcon, {});
            } else {
              tmp = closure_1_10;
              tmp2 = closure_1;
              tmp3 = closure_1_2;
              obj = { guild: null, size: null };
              obj.guild = arg0.guild;
              tmp5 = closure_0;
              tmp4 = closure_1(closure_1_2[16]);
              obj.size = closure_0(closure_1_2[16]).GuildIconSizes.SMALL_32;
              tmp6 = closure_1_10(tmp4, obj);
            }
            return tmp6;
          }
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(arg0) {
            if (arg0.value === closure_1_7) {
              tmp7 = closure_1_10;
              tmp8 = closure_0;
              tmp9 = closure_1_2;
              tmp6 = closure_1_10(closure_0(closure_1_2[15]).GuildSelectDefaultIcon, { size: "xs" });
            } else {
              tmp = closure_1_10;
              tmp2 = closure_1;
              tmp3 = closure_1_2;
              obj = { guild: null, size: null };
              obj.guild = arg0.guild;
              tmp5 = closure_0;
              tmp4 = closure_1(closure_1_2[16]);
              obj.size = closure_0(closure_1_2[16]).GuildIconSizes.XSMALL;
              tmp6 = closure_1_10(tmp4, obj);
            }
            return tmp6;
          }
        }
        cResult[10] = P;
      } else {
        class P {
          constructor(arg0) {
            if (arg0.value === closure_1_7) {
              tmp7 = closure_1_10;
              tmp8 = closure_0;
              tmp9 = closure_1_2;
              tmp6 = closure_1_10(closure_0(closure_1_2[15]).GuildSelectDefaultIcon, { size: "xs" });
            } else {
              tmp = closure_1_10;
              tmp2 = closure_1;
              tmp3 = closure_1_2;
              obj = { guild: null, size: null };
              obj.guild = arg0.guild;
              tmp5 = closure_0;
              tmp4 = closure_1(closure_1_2[16]);
              obj.size = closure_0(closure_1_2[16]).GuildIconSizes.XSMALL;
              tmp6 = closure_1_10(tmp4, obj);
            }
            return tmp6;
          }
        }
      }
      if (cResult[11] !== iter) {
        class P {
          constructor(arg0) {
            if (arg0.value === closure_1_7) {
              tmp7 = closure_1_10;
              tmp8 = closure_0;
              tmp9 = closure_1_2;
              tmp6 = closure_1_10(closure_0(closure_1_2[15]).GuildSelectDefaultIcon, { size: "xs" });
            } else {
              tmp = closure_1_10;
              tmp2 = closure_1;
              tmp3 = closure_1_2;
              obj = { guild: null, size: null };
              obj.guild = arg0.guild;
              tmp5 = closure_0;
              tmp4 = closure_1(closure_1_2[16]);
              obj.size = closure_0(closure_1_2[16]).GuildIconSizes.XSMALL;
              tmp6 = closure_1_10(tmp4, obj);
            }
            return tmp6;
          }
        }
        tmp20[0] = iter;
        cResult[11] = iter;
        cResult[12] = tmp20;
      } else {
        class P {
          constructor(arg0) {
            if (arg0.value === closure_1_7) {
              tmp7 = closure_1_10;
              tmp8 = closure_0;
              tmp9 = closure_1_2;
              tmp6 = closure_1_10(closure_0(closure_1_2[15]).GuildSelectDefaultIcon, { size: "xs" });
            } else {
              tmp = closure_1_10;
              tmp2 = closure_1;
              tmp3 = closure_1_2;
              obj = { guild: null, size: null };
              obj.guild = arg0.guild;
              tmp5 = closure_0;
              tmp4 = closure_1(closure_1_2[16]);
              obj.size = closure_0(closure_1_2[16]).GuildIconSizes.XSMALL;
              tmp6 = closure_1_10(tmp4, obj);
            }
            return tmp6;
          }
        }
      }
      if (cResult[13] === tmp15) {
        class P {
          constructor(arg0) {
            if (arg0.value === closure_1_7) {
              tmp7 = closure_1_10;
              tmp8 = closure_0;
              tmp9 = closure_1_2;
              tmp6 = closure_1_10(closure_0(closure_1_2[15]).GuildSelectDefaultIcon, { size: "xs" });
            } else {
              tmp = closure_1_10;
              tmp2 = closure_1;
              tmp3 = closure_1_2;
              obj = { guild: null, size: null };
              obj.guild = arg0.guild;
              tmp5 = closure_0;
              tmp4 = closure_1(closure_1_2[16]);
              obj.size = closure_0(closure_1_2[16]).GuildIconSizes.XSMALL;
              tmp6 = closure_1_10(tmp4, obj);
            }
            return tmp6;
          }
        }
      }
      let obj = iter(576);
      const obj3 = {
        onPressOptionItem: tmp13,
        renderHeaderIcon: P,
        renderIcon: U,
        iconContainerStyle: tmp4.iconContainer,
        selectionActionComponent: first1,
        options: tmp9,
        selectedCount: 1,
        selectedOptions: tmp20,
        isSelected: tmp15,
        submitSelection: L,
        onQueryChange: tmp5[1],
        itemAccessibilityLabel: T,
        allowEmpty: false,
        expanded: true,
      };
      cResult[13] = tmp15;
      cResult[14] = tmp9;
      cResult[15] = tmp4.iconContainer;
      cResult[16] = tmp20;
      cResult[17] = jsx(SelectComponentActionSheetDefault, {
        onPressOptionItem: tmp13,
        renderHeaderIcon: P,
        renderIcon: U,
        iconContainerStyle: tmp4.iconContainer,
        selectionActionComponent: first1,
        options: tmp9,
        selectedCount: 1,
        selectedOptions: tmp20,
        isSelected: tmp15,
        submitSelection: L,
        onQueryChange: tmp5[1],
        itemAccessibilityLabel: T,
        allowEmpty: false,
        expanded: true,
      });
      const tmp21 = jsx(SelectComponentActionSheetDefault, {
        onPressOptionItem: tmp13,
        renderHeaderIcon: P,
        renderIcon: U,
        iconContainerStyle: tmp4.iconContainer,
        selectionActionComponent: first1,
        options: tmp9,
        selectedCount: 1,
        selectedOptions: tmp20,
        isSelected: tmp15,
        submitSelection: L,
        onQueryChange: tmp5[1],
        itemAccessibilityLabel: T,
        allowEmpty: false,
        expanded: true,
      });
    }
  : () => {
      const tmp2 = _slicedToArray(noop.useState(""), 2);
      const first = tmp2[0];
      let tmp4 = closure_12();
      importDefault = tmp4;
      let obj = { maxValues: 1, minValues: 1, placeholder: null };
      const intl = first(callback[10]).intl;
      obj.placeholder = intl.string(first(callback[10]).t["ZImm/x"]);
      callback = noop.useCallback((arg0) => queryGuilds(arg0), []);
      const items = [first, callback];
      const memo = noop.useMemo(() => callback(first), items);
      const obj2 = {
        onPressOptionItem(arg0, guild) {
          closure_1_8(guild.guild.id);
          closure_1(callback[14]).hideActionSheet();
        },
        renderHeaderIcon(value) {
          if (value.value === closure_1_7) {
            let tmp6 = jsx(first(callback[15]).GuildSelectDefaultIcon, { size: "xs" });
          } else {
            const obj = { guild: value.guild, size: first(callback[16]).GuildIconSizes.XSMALL };
            tmp6 = jsx(closure_1(callback[16]), {
              guild: value.guild,
              size: first(callback[16]).GuildIconSizes.XSMALL,
            });
            const tmp4 = closure_1(callback[16]);
          }
          return tmp6;
        },
        renderIcon(value) {
          if (value.value === closure_1_7) {
            let tmp6 = jsx(first(callback[15]).GuildSelectDefaultIcon, {});
          } else {
            const obj = { guild: value.guild, size: first(callback[16]).GuildIconSizes.SMALL_32 };
            tmp6 = jsx(closure_1(callback[16]), {
              guild: value.guild,
              size: first(callback[16]).GuildIconSizes.SMALL_32,
            });
            const tmp4 = closure_1(callback[16]);
          }
          return tmp6;
        },
        iconContainerStyle: closure_11().iconContainer,
        selectionActionComponent: obj,
        options: memo,
        selectedCount: 1,
        selectedOptions: null,
        isSelected(value) {
          return value.value === closure_1.value;
        },
        submitSelection() {
          return closure_1(callback[14]).hideActionSheet();
        },
        onQueryChange: tmp2[1],
        itemAccessibilityLabel(label) {
          return label.label;
        },
        allowEmpty: false,
        expanded: true,
      };
      const items1 = [tmp4];
      obj2.selectedOptions = items1;
      return jsx(require("SelectComponentActionSheet"), {
        onPressOptionItem(arg0, guild) {
          closure_1_8(guild.guild.id);
          closure_1(callback[14]).hideActionSheet();
        },
        renderHeaderIcon(value) {
          if (value.value === closure_1_7) {
            let tmp6 = jsx(first(callback[15]).GuildSelectDefaultIcon, { size: "xs" });
          } else {
            const obj = { guild: value.guild, size: first(callback[16]).GuildIconSizes.XSMALL };
            tmp6 = jsx(closure_1(callback[16]), {
              guild: value.guild,
              size: first(callback[16]).GuildIconSizes.XSMALL,
            });
            const tmp4 = closure_1(callback[16]);
          }
          return tmp6;
        },
        renderIcon(value) {
          if (value.value === closure_1_7) {
            let tmp6 = jsx(first(callback[15]).GuildSelectDefaultIcon, {});
          } else {
            const obj = { guild: value.guild, size: first(callback[16]).GuildIconSizes.SMALL_32 };
            tmp6 = jsx(closure_1(callback[16]), {
              guild: value.guild,
              size: first(callback[16]).GuildIconSizes.SMALL_32,
            });
            const tmp4 = closure_1(callback[16]);
          }
          return tmp6;
        },
        iconContainerStyle: closure_11().iconContainer,
        selectionActionComponent: obj,
        options: memo,
        selectedCount: 1,
        selectedOptions: null,
        isSelected(value) {
          return value.value === closure_1.value;
        },
        submitSelection() {
          return closure_1(callback[14]).hideActionSheet();
        },
        onQueryChange: tmp2[1],
        itemAccessibilityLabel(label) {
          return label.label;
        },
        allowEmpty: false,
        expanded: true,
      });
    };
