// discord_app/modules/conjure/settings/native/useConjureProjectSettingsForm.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureTypes from "../../ConjureTypes.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import GuildRoleStore_mod from "../../../../stores/GuildRoleStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let _require, c4, closure_12, guildId, importDefault, set;

let c10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
let react = react_mod;
let View = react_native.View;
let GuildRoleStore = GuildRoleStore_mod;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const ConjureCollaboratorRolesSheet = "ConjureCollaboratorRolesSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, roleLabel: obj3, roleListContent: obj4, roleListEmpty: obj5, roleListFooter: obj6 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { paddingBottom: nativeDefault.space.PX_64 };
obj5 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj6 = {
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_48,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
let closure_13 = createStyles(obj);
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: size };
  size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (color) => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_14(color.color);
      if (cResult[0] !== tmp2.circle) {
        const obj2 = { style: tmp2.circle };
        const tmp6 = authStore(View, obj2);
        cResult[0] = tmp2.circle;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : (color) => {
      const obj = { style: closure_14(color.color).circle };
      return authStore(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_5;
      let closure_7;
      let first;
      let first1;
      let obj3;
      let onSave;
      let tmp14;
      let tmp7;
      let tmp8;
      const tmp = guildId;
      let obj = guildId(onSave[11]);
      const cResult = obj.c(40);
      guildId = guildId.guildId;
      const initialSelectedRoleIds = guildId.initialSelectedRoleIds;
      onSave = guildId.onSave;
      const tmp4 = closure_13();
      const roleLabel = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildRoleStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function h() {
          return GuildRoleStore.getSortedRoles(guildId);
        };
        const items1 = [guildId];
        cResult[1] = guildId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(onSave[12]);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
      if (cResult[4] !== initialSelectedRoleIds) {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
        cResult[4] = initialSelectedRoleIds;
        cResult[5] = P;
      } else {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
      }
      const tmp11 = first1(react.useState(P), 2);
      first1 = tmp11[0];
      react = tmp11[1];
      [tmp14, r10054] = first1(react.useState(""), 2);
      first1(react.useState(""), 2);
      if (cResult[6] !== tmp14) {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
        cResult[6] = tmp14;
        cResult[7] = obj3.toLocaleLowerCase();
        const toLocaleLowerCaseResult = obj3.toLocaleLowerCase();
      } else {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
      }
      View = tmp15;
      if (cResult[8] === tmp15) {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              set = new Set(initialSelectedRoleIds);
              return set;
            }
          }
          cResult[11] = tmp19;
        } else {
          class P {
            constructor() {
              set = new Set(initialSelectedRoleIds);
              return set;
            }
          }
        }
        GuildRoleStore = tmp19;
        if (cResult[12] === onSave) {
          class P {
            constructor() {
              set = new Set(initialSelectedRoleIds);
              return set;
            }
          }
          if (cResult[15] !== first1.size) {
            class P {
              constructor() {
                set = new Set(initialSelectedRoleIds);
                return set;
              }
            }
            let formatToPlainString = tmp22.formatToPlainString;
            let obj2 = { count: first1.size, max: null };
            const g5I05P = initialSelectedRoleIds(tmp2[16]).g5I05P;
            class J {
              constructor() {
                set = new Set(first1);
                onSave(set);
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(ConjureCollaboratorRolesSheet);
              }
            }
            let formatToPlainStringResult = formatToPlainString(g5I05P, obj2);
            cResult[15] = first1.size;
            cResult[16] = formatToPlainStringResult;
          } else {
            class P {
              constructor() {
                set = new Set(initialSelectedRoleIds);
                return set;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class P {
              constructor() {
                set = new Set(initialSelectedRoleIds);
                return set;
              }
            }
            cResult[17] = obj5.string(initialSelectedRoleIds(onSave[16]).un99lK);
            obj5.string(initialSelectedRoleIds(onSave[16]).un99lK);
            class J {
              constructor() {
                set = new Set(first1);
                onSave(set);
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(ConjureCollaboratorRolesSheet);
              }
            }
          } else {
            class P {
              constructor() {
                set = new Set(initialSelectedRoleIds);
                return set;
              }
            }
          }
          if (cResult[18] !== tmp21) {
            class P {
              constructor() {
                set = new Set(initialSelectedRoleIds);
                return set;
              }
            }
            let obj4 = { variant: "text-xs/normal", color: "text-muted", children: tmp21 };
            cResult[18] = tmp21;
            const tmp28 = closure_10(tmp(onSave[17]).Text, obj4);
            class J {
              constructor() {
                set = new Set(first1);
                onSave(set);
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(ConjureCollaboratorRolesSheet);
              }
            }
            cResult[19] = tmp28;
          } else {
            class P {
              constructor() {
                set = new Set(initialSelectedRoleIds);
                return set;
              }
            }
          }
          class J {
            constructor() {
              set = new Set(first1);
              onSave(set);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(ConjureCollaboratorRolesSheet);
            }
          }
          const obj6 = { style: tmp4.roleListFooter, children: tmp27 };
          cResult[20] = tmp4.roleListFooter;
          cResult[21] = tmp27;
          cResult[22] = closure_10(View, obj6);
          const tmp32 = closure_10(View, obj6);
        }
        class J {
          constructor() {
            set = new Set(first1);
            onSave(set);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjureCollaboratorRolesSheet);
          }
        }
        cResult[12] = onSave;
        cResult[13] = first1;
        cResult[14] = J;
      }
      const tmp17 = stateFromStoresArray;
      if ("" !== tmp15) {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
      }
      cResult[8] = tmp15;
      cResult[9] = stateFromStoresArray;
      cResult[10] = tmp17;
    }
  : (guildId) => {
      let ActionSheetHeaderPressableText;
      let BottomSheetTitleHeader;
      let Text;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let items4;
      let obj10;
      let obj4;
      let obj5;
      let obj6;
      let onSave;
      let str;
      let tmp13Result;
      let tmp8;
      guildId = guildId.guildId;
      ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
      let first;
      let c7;
      const tmp = closure_13();
      const roleLabel = tmp;
      let obj = guildId(onSave[12]);
      let items = [c7];
      const items1 = [guildId];
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => GuildRoleStore.getSortedRoles(guildId),
        items1,
      );
      const tmp5 = stateFromStoresArray(
        first.useState(() => {
          set = new Set(importDefault);
          return set;
        }),
        2,
      );
      first = tmp5[0];
      let closure_6 = tmp5[1];
      [str, tmp8] = stateFromStoresArray(first.useState(""), 2);
      stateFromStoresArray(first.useState(""), 2);
      const trimmed = str.trim();
      let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
      c7 = toLocaleLowerCaseResult;
      const items2 = [toLocaleLowerCaseResult, stateFromStoresArray];
      const memo = first.useMemo(() => {
        let found;
        if ("" === c7) {
          found = stateFromStoresArray;
        } else {
          found = stateFromStoresArray.filter((id) => {
            let hasItem = id.id === closure_1_7;
            if (!hasItem) {
              const name = id.name;
              const toLocaleLowerCaseResult = name.toLocaleLowerCase();
              hasItem = toLocaleLowerCaseResult.includes(tmp);
            }
            return hasItem;
          });
        }
        return found;
      }, items2);
      let closure_8 = first.useCallback((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        closure_6((size) => {
          if (closure_1) {
            if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
              return size;
            }
          }
          set = new Set(size);
          if (closure_1) {
            set.add(closure_0);
          } else {
            set.delete(closure_0);
          }
          return set;
        });
      }, []);
      const items3 = [onSave, first];
      const callback = first.useCallback(() => {
        set = new Set(first);
        onSave(set);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(ConjureCollaboratorRolesSheet);
      }, items3);
      let intl = guildId(onSave[15]).intl;
      let formatToPlainString = intl.formatToPlainString;
      let obj2 = { count: first.size, max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
      const g5I05P = require("../../intl/ConjureUntranslated.messages.js").g5I05P;
      let formatToPlainStringResult = formatToPlainString(g5I05P, obj2);
      let obj3 = {
        startExpanded: true,
        keyboardShouldPersistTaps: "handled",
        dismissAccessibilityLabel: intl2.string(require("../../intl/ConjureUntranslated.messages.js").un99lK),
        footer: closure_10(closure_6, obj4),
        header: closure_10(BottomSheetTitleHeader, obj5),
        children: items4,
      };
      const ActionSheet = guildId(onSave[23]).ActionSheet;
      intl2 = guildId(onSave[15]).intl;
      obj4 = {
        style: tmp.roleListFooter,
        children: closure_10(guildId(onSave[17]).Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: formatToPlainStringResult,
        }),
      };
      obj5 = {
        title: intl3.string(require("../../intl/ConjureUntranslated.messages.js")["pO3+p5"]),
        trailing: closure_10(ActionSheetHeaderPressableText, obj6),
      };
      BottomSheetTitleHeader = guildId(onSave[18]).BottomSheetTitleHeader;
      intl3 = guildId(onSave[15]).intl;
      obj6 = { label: intl4.string(guildId(onSave[15]).t.i4jeWR), onPress: callback };
      ActionSheetHeaderPressableText = guildId(onSave[19]).ActionSheetHeaderPressableText;
      intl4 = guildId(onSave[15]).intl;
      const obj7 = {
        size: "md",
        round: true,
        grow: false,
        accessibilityLabel: intl5.string(guildId(onSave[15]).t.Sojqsr),
        placeholder: intl6.string(guildId(onSave[15]).t.Sojqsr),
        onChange: tmp8,
      };
      const SearchField = guildId(onSave[20]).SearchField;
      intl5 = guildId(onSave[15]).intl;
      intl6 = guildId(onSave[15]).intl;
      items4 = [closure_10(SearchField, obj7)];
      const obj8 = { style: tmp.roleListContent, children: tmp13Result };
      if (0 === memo.length) {
        const obj9 = { style: tmp.roleListEmpty, children: closure_10(Text, obj10) };
        obj10 = {
          variant: "text-md/normal",
          color: "text-muted",
          children: intl7.string(guildId(onSave[15]).t.V6nAfF),
        };
        Text = tmp2(onSave[17]).Text;
        intl7 = tmp2(onSave[15]).intl;
        tmp13Result = closure_10(tmp14, obj9);
      } else {
        const obj11 = {
          hasIcons: false,
          children: memo.map((children) => {
            let formatToPlainStringResult;
            let items;
            const hasItem = first.has(children.id);
            const tmp3 = !hasItem && first.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES;
            const colorStrings = children.colorStrings;
            let primaryColor;
            const obj = { style: roleLabel.roleLabel, children: items };
            const TableCheckboxRow = guildId(onSave[22]).TableCheckboxRow;
            if (colorStrings != null) {
              primaryColor = colorStrings.primaryColor;
            }
            if (primaryColor == null) {
              primaryColor = children.colorString;
            }
            if (primaryColor == null) {
              primaryColor = DEFAULT_ROLE_COLOR_HEX;
            }
            const obj2 = {
              label: closure_1_11(closure_6, obj),
              checked: hasItem,
              disabled: tmp3,
              accessibilityHint: formatToPlainStringResult,
              onPress(arg0) {
                return closure_8(children.id, arg0);
              },
            };
            items = [closure_1_10(closure_1_15, { color: primaryColor })];
            const obj3 = { variant: "text-md/medium", children: children.name };
            items[1] = closure_1_10(guildId(onSave[17]).Text, obj3);
            formatToPlainStringResult = undefined;
            if (tmp3) {
              const intl = guildId(onSave[15]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const obj4 = { max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
              const prop = require("../../intl/ConjureUntranslated.messages.js")["dH7+/Z"];
              formatToPlainStringResult = formatToPlainString(prop, obj4);
            }
            return closure_1_10(TableCheckboxRow, obj2, children.id);
          }),
        };
        const TableRowGroup = tmp2(onSave[21]).TableRowGroup;
        tmp13Result = closure_10(TableRowGroup, obj11);
      }
      items4[1] = closure_10(closure_6, obj8);
      return closure_11(ActionSheet, obj3);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureProjectSettingsForm.tsx");

export default function useConjureProjectSettingsForm(projectId, arg1) {
  let TableCheckboxRow;
  let TableCheckboxRow2;
  let TableCheckboxRow3;
  let first2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items4;
  let obj11;
  let obj13;
  let obj18;
  let obj7;
  let obj9;
  let stateFromStores;
  let str2;
  let stringResult;
  let tmp10;
  let tmp19;
  let tmp21;
  let tmp8;
  _require = projectId;
  importDefault = arg1;
  let tmp2 = _require;
  const tmp = first2();
  let obj = require("get initialized");
  let items = [ConjureProjectStore];
  const items1 = [projectId];
  stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  let obj2 = require("useConjureLiveReloadSetting");
  const conjureLiveReloadSetting = obj2.useConjureLiveReloadSetting(projectId);
  const save = conjureLiveReloadSetting.save;
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.collaborator_role_ids;
  }
  if (prop == null) {
    prop = [];
  }
  let obj3 = prop;
  let str;
  const useState = prop.useState;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  [tmp8, View] = save(useState(str), 2);
  save(useState(str), 2);
  [tmp10, GuildRoleStore] = save(obj3.useState(null), 2);
  const tmp9 = save(obj3.useState(null), 2);
  [str2, ConjureProjectStore] = save(obj3.useState(tmp8), 2);
  let num;
  const useState2 = obj3.useState;
  const tmp11 = save(obj3.useState(tmp8), 2);
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmp6Result = save(useState2(num), 2);
  let flags = tmp6Result[0];
  let closure_10 = tmp6Result[1];
  const tmp6Result5 = save(
    obj3.useState(() => {
      set = new Set(prop);
      return set;
    }),
    2,
  );
  const first1 = tmp6Result5[0];
  closure_12 = tmp6Result5[1];
  const tmp6Result6 = save(obj3.useState(false), 2);
  first2 = tmp6Result6[0];
  closure_14 = tmp6Result6[1];
  [tmp19, closure_15] = save(obj3.useState(null), 2);
  save(obj3.useState(null), 2);
  [tmp21, closure_16] = save(obj3.useState(null), 2);
  save(obj3.useState(null), 2);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    const tmp2Result = tmp2(stateFromStores[13]);
    result = tmp2Result.projectSupportsVisibility(stateFromStores);
  }
  let result1 = tmp24 && null != arg1;
  if (result1) {
    const tmp2Result4 = tmp2(stateFromStores[13]);
    result1 = tmp2Result4.projectSupportsCollaboratorRoles(stateFromStores);
  }
  const tmp2Result5 = tmp2(stateFromStores[25]);
  const conjureProjectAccessSettings = tmp2Result5.getConjureProjectAccessSettings(flags);
  const isPublic = conjureProjectAccessSettings.isPublic;
  let tmp27 = null != stateFromStores;
  const isShared = conjureProjectAccessSettings.isShared;
  if (tmp27) {
    tmp27 = trimmed !== tmp8;
  }
  let closure_19 = tmp27;
  let tmp28 = result;
  if (tmp28) {
    let num2;
    if (tmp10 != null) {
      num2 = tmp10.flags;
    }
    if (num2 == null) {
      flags = undefined;
      if (stateFromStores != null) {
        flags = stateFromStores.flags;
      }
      num2 = flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp28 = flags !== num2;
  }
  let closure_20 = tmp28;
  let tmp30 = result1;
  if (tmp30) {
    let roleIds;
    const haveSameRoleIds = tmp2(tmp3[26]).haveSameRoleIds;
    tmp2(stateFromStores[26]);
    if (tmp10 != null) {
      roleIds = tmp10.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp30 = !haveSameRoleIds(first1, roleIds);
  }
  let closure_21 = tmp30;
  let closure_22 = tmp33;
  let tmp34 = tmp33 || conjureLiveReloadSetting.changed;
  let closure_23 = tmp34;
  const callback = obj3.useCallback((arg0) => {
    ConjureProjectStore(arg0);
    closure_15(null);
    closure_16(null);
  }, []);
  let closure_24 = obj3.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    closure_1 = arg1;
    closure_10((arg0) => {
      let tmp2;
      if (closure_1) {
        tmp2 = arg0 | closure_0;
      } else {
        tmp2 = arg0 & ~closure_0;
      }
      return tmp2;
    });
    let tmp2 = closure_16(null);
  }, []);
  const callback1 = obj3.useCallback((items) => {
    set = new Set(items);
    closure_12(set);
    closure_16(null);
  }, []);
  const items2 = [arg1, callback1, first1];
  const callback2 = obj3.useCallback(() => {
    let obj2;
    if (null != closure_1) {
      const obj = {
        content: authStore(closure_16, obj2),
        key: ConjureCollaboratorRolesSheet,
        stackingBehavior: "stack",
      };
      obj2 = { guildId: tmp, initialSelectedRoleIds: first1, onSave: callback1 };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      showActionSheet(obj);
    }
  }, items2);
  const items3 = [
    flags,
    tmp28,
    arg1,
    tmp34,
    save,
    tmp33,
    isPublic,
    tmp27,
    stateFromStores,
    projectId,
    tmp30,
    first2,
    first1,
    trimmed,
  ];
  let obj4 = { style: tmp.content, children: items4 };
  const callback3 = obj3.useCallback(
    conjureLiveReloadSetting(function* () {
      let closure_0;
      let closure_2;
      let guild_id;
      let items;
      let obj5;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === guild_id) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              if (null != stateFromStores) {
                if (closure_23) {
                  if (!first2) {
                    if ("" === trimmed) {
                      const intl4 = tmp(stateFromStores[15]).intl;
                      closure_15(intl4.string(guild_id(stateFromStores[16]).l669D8));
                      c4 = 3;
                      return { value: false, done: true };
                    } else {
                      const obj4 = {};
                      if (closure_19) {
                        obj4.name = trimmed;
                      }
                      let tmp45 = closure_20;
                      if (tmp45) {
                        obj4.flags = flags;
                      }
                      let tmp47 = closure_21;
                      if (tmp47) {
                        const _Array = Array;
                        const arr = Array.from(first1);
                        obj4.collaborator_role_ids = arr.sort();
                      }
                      let tmp49 = null == tmp87.guild_id && null != guild_id;
                      if (tmp49) {
                        if (!tmp47) {
                          if (tmp45) {
                            tmp45 = isPublic;
                          }
                          tmp47 = tmp45;
                        }
                        tmp49 = tmp47;
                      }
                      if (tmp49) {
                        obj4.guild_id = guild_id;
                      }
                      closure_14(true);
                      closure_16(null);
                      c3 = 2;
                      if (closure_22) {
                        guild_id = 3;
                        c4 = 1;
                        const obj6 = { value: obj5.updateProjectSettings(tmp, obj4), done: false };
                        obj5 = tmp(stateFromStores[27]);
                        return obj6;
                      }
                    }
                  }
                }
              }
              c4 = 3;
              return { value: true, done: true };
            }
          } else if (1 === guild_id) {
            c3 = 0;
            closure_128_14(false);
            throw stateFromStores;
          } else if (2 === guild_id) {
            const intl2 = tmp(stateFromStores[15]).intl;
            closure_128_16(intl2.string(guild_id(stateFromStores[16])["9JPr8h"]));
            c3 = 0;
            closure_128_14(false);
            c4 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_14(false);
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else if (value.ok) {
            closure_128_6(closure_128_17);
            const obj = { flags: closure_128_9, roleIds: items };
            items = [];
            HermesBuiltin.arraySpread(items, closure_128_11, 0);
            closure_128_7(obj);
          } else {
            const intl = tmp(stateFromStores[15]).intl;
            closure_128_16(intl.string(guild_id(stateFromStores[16])["9JPr8h"]));
            c3 = 0;
            closure_128_14(false);
            c4 = 3;
            return { value: false, done: true };
          }
          let flag = closure_128_4();
          if (!flag) {
            const intl3 = tmp(stateFromStores[15]).intl;
            closure_128_16(intl3.string(guild_id(stateFromStores[16]).XzkNBw));
            flag = false;
          }
          c3 = 0;
          closure_128_14(false);
          c4 = 3;
          const obj8 = { value: flag, done: true };
          return obj8;
        } catch (tmp78) {
          stateFromStores = tmp78;
          if (0 === c3) {
            c4 = 3;
            throw tmp78;
          } else if (1 === tmp80) {
            guild_id = 1;
          } else {
            guild_id = 2;
          }
        }
      }
    }),
    items3,
  );
  let obj5 = {
    label: intl.string(require("../../intl/ConjureUntranslated.messages.js").ncxNJT),
    value: str2,
    onChange: callback,
    maxLength: 128,
    disabled: first2,
  };
  const TextInput = tmp2(tmp3[28]).TextInput;
  intl = tmp2(tmp3[15]).intl;
  items4 = [closure_10(TextInput, obj5), , , , , ,];
  let tmp41Result = null;
  const tmp39 = first1;
  if (null != tmp19) {
    let obj6 = { accessibilityRole: "alert", children: tmp41(tmp2(tmp3[17]).Text, obj7) };
    obj7 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp19 };
    tmp41Result = tmp41(View, obj6);
  }
  items4[1] = tmp41Result;
  let tmp41Result6 = null;
  if (result) {
    let obj8 = { hasIcons: false, children: tmp41(TableCheckboxRow, obj9) };
    const TableRowGroup = tmp2(tmp3[21]).TableRowGroup;
    obj9 = {
      label: intl2.string(require("../../intl/ConjureUntranslated.messages.js").gchQFO),
      subLabel: intl3.string(require("../../intl/ConjureUntranslated.messages.js").mD4GBH),
      checked: isShared,
      disabled: first2,
      onPress(arg0) {
        return closure_24(ConjureTypes.ConjureProjectFlags.SHAREABLE, arg0);
      },
    };
    TableCheckboxRow = tmp2(tmp3[22]).TableCheckboxRow;
    intl2 = tmp2(tmp3[15]).intl;
    intl3 = tmp2(tmp3[15]).intl;
    tmp41Result6 = tmp41(TableRowGroup, obj8);
  }
  items4[2] = tmp41Result6;
  let tmp41Result7 = null;
  if (result) {
    tmp41Result7 = null;
    if (null != stateFromStores && "user" !== stateFromStores.install_scope) {
      const obj10 = { hasIcons: false, children: closure_10(TableCheckboxRow2, obj11) };
      const TableRowGroup2 = tmp2(tmp3[21]).TableRowGroup;
      obj11 = {
        label: intl4.string(require("../../intl/ConjureUntranslated.messages.js").lVvR4E),
        subLabel: intl5.string(require("../../intl/ConjureUntranslated.messages.js").SQZGoV),
        checked: isPublic,
        disabled: first2,
        onPress(arg0) {
          return closure_24(ConjureTypes.ConjureProjectFlags.PUBLIC, arg0);
        },
      };
      TableCheckboxRow2 = tmp2(tmp3[22]).TableCheckboxRow;
      intl4 = tmp2(tmp3[15]).intl;
      intl5 = tmp2(tmp3[15]).intl;
      tmp41Result7 = tmp41(TableRowGroup2, obj10);
    }
  }
  items4[3] = tmp41Result7;
  let tmp41Result8 = null;
  if (conjureLiveReloadSetting.available) {
    const obj12 = { hasIcons: false, children: closure_10(TableCheckboxRow3, obj13) };
    const TableRowGroup3 = tmp2(tmp3[21]).TableRowGroup;
    obj13 = {
      label: intl6.string(require("../../intl/ConjureUntranslated.messages.js").eEo0ye),
      subLabel: null,
      checked: null,
      disabled: first2,
      onPress(arg0) {
        conjureLiveReloadSetting.setChecked(arg0);
        closure_16(null);
      },
    };
    TableCheckboxRow3 = tmp2(tmp3[22]).TableCheckboxRow;
    intl6 = tmp2(tmp3[15]).intl;
    ({ description: obj16.subLabel, checked: obj16.checked } = conjureLiveReloadSetting);
    tmp41Result8 = tmp41(TableRowGroup3, obj12);
  }
  items4[4] = tmp41Result8;
  let tmp41Result9 = null;
  if (result1) {
    const TableRowGroup4 = tmp2(tmp3[21]).TableRowGroup;
    const obj14 = {
      label: intl7.string(require("../../intl/ConjureUntranslated.messages.js")["pO3+p5"]),
      subLabel: intl8.string(require("../../intl/ConjureUntranslated.messages.js")["9MdtK9"]),
      arrow: true,
      disabled: first2 || !isPublic,
      accessibilityHint: stringResult,
      onPress: callback2,
    };
    const TableRow = tmp2(tmp3[29]).TableRow;
    intl7 = tmp2(tmp3[15]).intl;
    intl8 = tmp2(tmp3[15]).intl;
    stringResult = undefined;
    if (!isPublic) {
      const intl9 = tmp2(tmp3[15]).intl;
      stringResult = intl9.string(tmp42(tmp3[16]).nZw5r9);
    }
    const obj15 = { hasIcons: false, children: closure_10(TableRow, obj14) };
    tmp41Result9 = tmp41(TableRowGroup4, obj15);
  }
  items4[5] = tmp41Result9;
  let tmp41Result10 = null;
  if (null != tmp21) {
    const obj17 = { accessibilityRole: "alert", children: closure_10(tmp2(stateFromStores[17]).Text, obj18) };
    obj18 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp21 };
    tmp41Result10 = tmp41(View, obj17);
  }
  items4[6] = tmp41Result10;
  const obj19 = { fields: tmp39(View, obj4), canSave: tmp34, saving: first2, submit: callback3 };
  if (tmp34) {
    tmp34 = "" !== trimmed;
  }
  return obj19;
}
