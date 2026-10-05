// discord_app/modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import GuildRecordUtils from "../../../../utils/GuildRecordUtils.tsx";
import InteractionComponentTypes from "../../../interaction_components/InteractionComponentTypes.tsx";
import AutocompleteUtilsDefault from "../../../../utils/AutocompleteUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import UserSettingsSafetySelectedGuildStore from "../UserSettingsSafetySelectedGuildStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault, record;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
function queryGuilds(query) {
  let dangerouslyConstructGuildRecordFromUntypedObject;
  let intl;
  let intl2;
  let obj2;
  let reduced;
  let obj = {
    type: InteractionComponentTypes.SelectOptionType.GUILD,
    guild: dangerouslyConstructGuildRecordFromUntypedObject(obj2),
    label: intl2.string(intl3.t["32u1Dx"]),
    value,
  };
  obj2 = { id: value, name: intl.string(intl3.t["32u1Dx"]) };
  dangerouslyConstructGuildRecordFromUntypedObject = GuildRecordUtils.dangerouslyConstructGuildRecordFromUntypedObject;
  GuildRecordUtils;
  intl = intl3.intl;
  intl2 = intl3.intl;
  const items = [obj];
  if (0 === query.length) {
    const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
    reduced = flattenedGuildIds.reduce((acc, item) => {
      guild = guild.getGuild(item);
      if (null != guild) {
        const obj = {
          type: require("InteractionComponentTypes").SelectOptionType.GUILD,
          value: null,
          label: null,
          guild,
        };
        const push = acc.push;
        ({ id: obj.value, name: obj.label } = guild);
        push(obj);
      }
      return acc;
    }, items);
  } else {
    const obj4 = { query };
    const obj3 = AutocompleteUtilsDefault;
    const queryGuildsResult = obj3.queryGuilds(obj4);
    reduced = queryGuildsResult.map((record) => {
      record = record.record;
      const obj = {
        type: require("InteractionComponentTypes").SelectOptionType.GUILD,
        value: record.id,
        label: record.name,
        guild: record,
      };
      return obj;
    });
  }
  return reduced;
}
({
  GUILD_SELECT_ALL_SERVERS_OPTION_ID: metroImportDefault,
  setSelectedGuildId: metroImportAll,
  useUserSafetySettingsSelectedGuildStore: c9,
} = UserSettingsSafetySelectedGuildStore);
const jsx = Fragment.jsx;
let obj = { iconContainer: obj2 };
obj2 = { marginRight: nativeDefault.space.PX_12 };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let dangerouslyConstructGuildRecordFromUntypedObject;
      let first;
      let intl;
      let intl2;
      let obj5;
      let selectedGuildId;
      let tmp11;
      let tmp6;
      const obj = selectedGuildId(576);
      const cResult = obj.c(6);
      selectedGuildId = closure_9().selectedGuildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== selectedGuildId) {
        const fn = function n() {
          return GuildStore.getGuild(selectedGuildId);
        };
        cResult[1] = selectedGuildId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = selectedGuildId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (selectedGuildId !== value) {
        let tmp10;
        if (null != stateFromStores) {
          if (cResult[4] !== stateFromStores) {
            const obj2 = {
              type: selectedGuildId(5122).SelectOptionType.GUILD,
              guild: stateFromStores,
              label: null,
              value: null,
            };
            ({ name: obj3.label, id: obj3.value } = stateFromStores);
            cResult[4] = stateFromStores;
            cResult[5] = obj2;
            tmp10 = obj2;
          } else {
            tmp10 = cResult[5];
          }
        }
        return tmp10;
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {
          type: selectedGuildId(5122).SelectOptionType.GUILD,
          guild: dangerouslyConstructGuildRecordFromUntypedObject(obj5),
          label: intl2.string(selectedGuildId(1126).t["32u1Dx"]),
          value,
        };
        obj5 = { id: value, name: intl.string(selectedGuildId(1126).t["32u1Dx"]) };
        dangerouslyConstructGuildRecordFromUntypedObject =
          selectedGuildId(2066).dangerouslyConstructGuildRecordFromUntypedObject;
        selectedGuildId(2066);
        intl = tmp(1126).intl;
        intl2 = tmp(1126).intl;
        cResult[3] = obj4;
        tmp11 = obj4;
      } else {
        tmp11 = cResult[3];
      }
      tmp10 = tmp11;
    }
  : () => {
      let dangerouslyConstructGuildRecordFromUntypedObject;
      let intl;
      let intl2;
      let obj7;
      const selectedGuildId = closure_9().selectedGuildId;
      const items = [GuildStore];
      const obj = selectedGuildId(504);
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
      if (selectedGuildId !== value) {
        let obj3;
        if (null != stateFromStores) {
          obj3 = {
            type: selectedGuildId(5122).SelectOptionType.GUILD,
            guild: stateFromStores,
            label: null,
            value: null,
          };
          ({ name: obj2.label, id: obj2.value } = stateFromStores);
        }
        return obj3;
      }
      const obj4 = {
        type: selectedGuildId(5122).SelectOptionType.GUILD,
        guild: dangerouslyConstructGuildRecordFromUntypedObject(obj7),
        label: intl2.string(selectedGuildId(1126).t["32u1Dx"]),
        value,
      };
      obj7 = { id: value, name: intl.string(selectedGuildId(1126).t["32u1Dx"]) };
      dangerouslyConstructGuildRecordFromUntypedObject =
        selectedGuildId(2066).dangerouslyConstructGuildRecordFromUntypedObject;
      selectedGuildId(2066);
      intl = tmp(1126).intl;
      intl2 = tmp(1126).intl;
      obj3 = obj4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let first1;
      let intl;
      let iter;
      let tmp10;
      let tmp7;
      let tmp9;
      let obj = iter(576);
      const cResult = obj.c(18);
      const tmp4 = closure_11();
      [first, tmp7] = react.useState("");
      iter = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { maxValues: 1, minValues: 1, placeholder: intl.string(iter(1126).t["ZImm/x"]) };
        intl = tmp(1126).intl;
        cResult[0] = obj2;
        first1 = obj2;
      } else {
        first1 = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(arg0) {
          return queryGuilds(arg0);
        };
        cResult[1] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] !== first) {
        const tmp9Result = tmp9(first);
        cResult[2] = first;
        cResult[3] = tmp9Result;
        tmp10 = tmp9Result;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            const obj = L(dependencyMap[14]);
            return obj.hideActionSheet();
          }
        }
        cResult[4] = L;
      } else {
        class L {
          constructor() {
            const obj = L(dependencyMap[14]);
            return obj.hideActionSheet();
          }
        }
      }
      L = tmp12;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            const obj = L(dependencyMap[14]);
            return obj.hideActionSheet();
          }
        }
        cResult[5] = tmp14;
      } else {
        class L {
          constructor() {
            const obj = L(dependencyMap[14]);
            return obj.hideActionSheet();
          }
        }
      }
      if (cResult[6] !== iter.value) {
        class L {
          constructor() {
            const obj = L(dependencyMap[14]);
            return obj.hideActionSheet();
          }
        }
        cResult[6] = iter.value;
        cResult[7] = tmp16;
      } else {
        class L {
          constructor() {
            const obj = L(dependencyMap[14]);
            return obj.hideActionSheet();
          }
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(label) {
            return label.label;
          }
        }
        cResult[8] = T;
      } else {
        class T {
          constructor(label) {
            return label.label;
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor(value) {
            let tmp6;
            if (value.value === closure_1_7) {
              tmp6 = jsx(iter(dependencyMap[15]).GuildSelectDefaultIcon, {});
            } else {
              L(dependencyMap[16]);
              tmp6 = <tmp4 guild={value.guild} size={iter(dependencyMap[16]).GuildIconSizes.SMALL_32} />;
            }
            return tmp6;
          }
        }
        cResult[9] = U;
      } else {
        class U {
          constructor(value) {
            let tmp6;
            if (value.value === closure_1_7) {
              tmp6 = jsx(iter(dependencyMap[15]).GuildSelectDefaultIcon, {});
            } else {
              L(dependencyMap[16]);
              tmp6 = <tmp4 guild={value.guild} size={iter(dependencyMap[16]).GuildIconSizes.SMALL_32} />;
            }
            return tmp6;
          }
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(value) {
            let tmp6;
            if (value.value === closure_1_7) {
              tmp6 = jsx(iter(dependencyMap[15]).GuildSelectDefaultIcon, { size: "xs" });
            } else {
              L(dependencyMap[16]);
              tmp6 = <tmp4 guild={value.guild} size={iter(dependencyMap[16]).GuildIconSizes.XSMALL} />;
            }
            return tmp6;
          }
        }
        cResult[10] = P;
      } else {
        class P {
          constructor(value) {
            let tmp6;
            if (value.value === closure_1_7) {
              tmp6 = jsx(iter(dependencyMap[15]).GuildSelectDefaultIcon, { size: "xs" });
            } else {
              L(dependencyMap[16]);
              tmp6 = <tmp4 guild={value.guild} size={iter(dependencyMap[16]).GuildIconSizes.XSMALL} />;
            }
            return tmp6;
          }
        }
      }
      if (cResult[11] !== iter) {
        class P {
          constructor(value) {
            let tmp6;
            if (value.value === closure_1_7) {
              tmp6 = jsx(iter(dependencyMap[15]).GuildSelectDefaultIcon, { size: "xs" });
            } else {
              L(dependencyMap[16]);
              tmp6 = <tmp4 guild={value.guild} size={iter(dependencyMap[16]).GuildIconSizes.XSMALL} />;
            }
            return tmp6;
          }
        }
        tmp21[0] = iter;
        cResult[11] = iter;
        cResult[12] = tmp21;
      } else {
        class P {
          constructor(value) {
            let tmp6;
            if (value.value === closure_1_7) {
              tmp6 = jsx(iter(dependencyMap[15]).GuildSelectDefaultIcon, { size: "xs" });
            } else {
              L(dependencyMap[16]);
              tmp6 = <tmp4 guild={value.guild} size={iter(dependencyMap[16]).GuildIconSizes.XSMALL} />;
            }
            return tmp6;
          }
        }
      }
      if (cResult[13] === tmp16) {
        class P {
          constructor(value) {
            let tmp6;
            if (value.value === closure_1_7) {
              tmp6 = jsx(iter(dependencyMap[15]).GuildSelectDefaultIcon, { size: "xs" });
            } else {
              L(dependencyMap[16]);
              tmp6 = <tmp4 guild={value.guild} size={iter(dependencyMap[16]).GuildIconSizes.XSMALL} />;
            }
            return tmp6;
          }
        }
      }
      cResult[13] = tmp16;
      cResult[14] = tmp10;
      cResult[15] = tmp4.iconContainer;
      cResult[16] = tmp21;
      cResult[17] = jsx(L(11432), {
        onPressOptionItem: tmp14,
        renderHeaderIcon: P,
        renderIcon: U,
        iconContainerStyle: tmp4.iconContainer,
        selectionActionComponent: first1,
        options: tmp10,
        selectedCount: 1,
        selectedOptions: tmp21,
        isSelected: tmp16,
        submitSelection: tmp12,
        onQueryChange: tmp7,
        itemAccessibilityLabel: T,
        allowEmpty: false,
        expanded: true,
      });
      jsx(L(11432), {
        onPressOptionItem: tmp14,
        renderHeaderIcon: P,
        renderIcon: U,
        iconContainerStyle: tmp4.iconContainer,
        selectionActionComponent: first1,
        options: tmp10,
        selectedCount: 1,
        selectedOptions: tmp21,
        isSelected: tmp16,
        submitSelection: tmp12,
        onQueryChange: tmp7,
        itemAccessibilityLabel: T,
        allowEmpty: false,
        expanded: true,
      });
    }
  : () => {
      let callback;
      let closure_1;
      let first;
      let intl;
      let tmp4;
      const tmp = closure_11();
      [first, tmp4] = react.useState("");
      const tmp5 = closure_12();
      importDefault = tmp5;
      let obj = { maxValues: 1, minValues: 1, placeholder: intl.string(first(callback[10]).t["ZImm/x"]) };
      intl = first(callback[10]).intl;
      callback = react.useCallback((arg0) => queryGuilds(arg0), []);
      const items = [first, callback];
      const memo = react.useMemo(() => callback(first), items);
      const items1 = [tmp5];
      return jsx(require("SelectComponentActionSheet"), {
        onPressOptionItem(arg0, guild) {
          closure_1_8(guild.guild.id);
          const obj = closure_1(callback[14]);
          obj.hideActionSheet();
        },
        renderHeaderIcon(value) {
          let tmp6;
          if (value.value === closure_1_7) {
            tmp6 = jsx(first(callback[15]).GuildSelectDefaultIcon, { size: "xs" });
          } else {
            closure_1(callback[16]);
            tmp6 = <tmp4 guild={value.guild} size={first(callback[16]).GuildIconSizes.XSMALL} />;
          }
          return tmp6;
        },
        renderIcon(value) {
          let tmp6;
          if (value.value === closure_1_7) {
            tmp6 = jsx(first(callback[15]).GuildSelectDefaultIcon, {});
          } else {
            closure_1(callback[16]);
            tmp6 = <tmp4 guild={value.guild} size={first(callback[16]).GuildIconSizes.SMALL_32} />;
          }
          return tmp6;
        },
        iconContainerStyle: tmp.iconContainer,
        selectionActionComponent: obj,
        options: memo,
        selectedCount: 1,
        selectedOptions: items1,
        isSelected(value) {
          return value.value === closure_1.value;
        },
        submitSelection() {
          const obj = closure_1(callback[14]);
          return obj.hideActionSheet();
        },
        onQueryChange: tmp4,
        itemAccessibilityLabel(label) {
          return label.label;
        },
        allowEmpty: false,
        expanded: true,
      });
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/SettingsPrivacyAndSafetyGuildSelectActionSheet.tsx",
);

export default tmp3;
