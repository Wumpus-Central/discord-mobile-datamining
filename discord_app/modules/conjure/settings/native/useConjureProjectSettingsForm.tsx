// discord_app/modules/conjure/settings/native/useConjureProjectSettingsForm.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureProjectTypes from "../../projects/ConjureProjectTypes.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
let View = fn(17).View;
const DEFAULT_ROLE_COLOR_HEX = fn(1087).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const ConjureCollaboratorRolesSheet = "ConjureCollaboratorRolesSheet";
let createStyles = fn(4945);
let obj2 = {
  content: { gap: nativeDefault.space.PX_16 },
  roleLabel: null,
  roleListContent: null,
  roleListEmpty: null,
  roleListFooter: null,
};
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.roleLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.roleListContent = { paddingBottom: nativeDefault.space.PX_64 };
let obj5 = { paddingBottom: nativeDefault.space.PX_64 };
obj2.roleListEmpty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let obj6 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj2.roleListFooter = {
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_48,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
let closure_13 = createStyles.createStyles(obj2);
createStyles = fn(4945);
let closure_14 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: null };
  const size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  obj.circle = size;
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RoleColorCircle(color) {
      const cResult = c.c(2);
      const tmp2 = closure_14(color.color);
      if (cResult[0] !== tmp2.circle) {
        const obj2 = { style: tmp2.circle };
        const tmp6 = collapsed(View, obj2);
        cResult[0] = tmp2.circle;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function RoleColorCircle(color) {
      return collapsed(View, { style: closure_14(color.color).circle });
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureCollaboratorRolesSheet(guildId) {
      const cResult = guildId(onSave[11]).c(40);
      guildId = guildId.guildId;
      const initialSelectedRoleIds = guildId.initialSelectedRoleIds;
      onSave = guildId.onSave;
      const tmp4 = closure_13();
      const roleLabel = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildRoleStore];
        cResult[0] = items;
        let first = items;
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
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      let obj = guildId(onSave[11]);
      const stateFromStoresArray = guildId(onSave[12]).useStateFromStoresArray(first, tmp7, tmp8);
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
      const tmp11 = first1(noop.useState(P), 2);
      first1 = tmp11[0];
      noop = tmp11[1];
      const tmpResult = guildId(onSave[12]);
      [tmp14, r10054] = first1(noop.useState(""), 2);
      if (cResult[6] !== tmp14) {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
        let toLocaleLowerCaseResult = obj3.toLocaleLowerCase();
        cResult[6] = tmp14;
        cResult[7] = toLocaleLowerCaseResult;
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
            let obj2 = { count: first1.size, max: null };
            class G {
              constructor() {
                set = new Set(closure_4);
                tmp2 = onSave(set);
                obj = closure_1(closure_2[14]);
                hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
                return;
              }
            }
            let formatToPlainStringResult = obj4.formatToPlainString(initialSelectedRoleIds(tmp2[16]).g5I05P, obj2);
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
            cResult[17] = obj6.string(initialSelectedRoleIds(tmp2[16]).un99lK);
            class G {
              constructor() {
                set = new Set(closure_4);
                tmp2 = onSave(set);
                obj = closure_1(closure_2[14]);
                hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
                return;
              }
            }
            const stringResult = obj6.string(initialSelectedRoleIds(tmp2[16]).un99lK);
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
            const obj5 = { variant: "text-xs/normal", color: "text-muted", children: tmp21 };
            const tmp27 = closure_10(tmp(tmp2[17]).Text, obj5);
            cResult[18] = tmp21;
            class G {
              constructor() {
                set = new Set(closure_4);
                tmp2 = onSave(set);
                obj = closure_1(closure_2[14]);
                hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
                return;
              }
            }
            cResult[19] = tmp27;
          } else {
            class P {
              constructor() {
                set = new Set(initialSelectedRoleIds);
                return set;
              }
            }
          }
          class G {
            constructor() {
              set = new Set(closure_4);
              tmp2 = onSave(set);
              obj = closure_1(closure_2[14]);
              hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
              return;
            }
          }
          const obj7 = { style: tmp4.roleListFooter, children: tmp26 };
          const tmp31 = closure_10(View, obj7);
          cResult[20] = tmp4.roleListFooter;
          cResult[21] = tmp26;
          cResult[22] = tmp31;
        }
        class G {
          constructor() {
            set = new Set(closure_4);
            tmp2 = onSave(set);
            obj = closure_1(closure_2[14]);
            hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
            return;
          }
        }
        cResult[12] = onSave;
        cResult[13] = first1;
        cResult[14] = G;
      }
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
      cResult[10] = stateFromStoresArray;
      const tmp13 = first1(noop.useState(""), 2);
    }
  : function ConjureCollaboratorRolesSheet(guildId) {
      guildId = guildId.guildId;
      ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
      let first;
      c7 = undefined;
      const tmp = closure_13();
      const roleLabel = tmp;
      let items = [c7];
      const items1 = [guildId];
      const stateFromStoresArray = guildId(onSave[12]).useStateFromStoresArray(
        items,
        () => GuildRoleStore.getSortedRoles(guildId),
        items1,
      );
      const tmp5 = stateFromStoresArray(
        first.useState(() => new Set(importDefault)),
        2,
      );
      first = tmp5[0];
      closure_6 = tmp5[1];
      let obj = guildId(onSave[12]);
      [str, tmp8] = stateFromStoresArray(first.useState(""), 2);
      const trimmed = str.trim();
      let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
      c7 = toLocaleLowerCaseResult;
      const items2 = [toLocaleLowerCaseResult, stateFromStoresArray];
      const memo = first.useMemo(() => {
        if ("" === c7) {
          let found = stateFromStoresArray;
        } else {
          found = stateFromStoresArray.filter((id) => {
            let hasItem = id.id === closure_1_7;
            if (!hasItem) {
              const name = id.name;
              hasItem = name.toLocaleLowerCase().includes(tmp);
              const toLocaleLowerCaseResult = name.toLocaleLowerCase();
            }
            return hasItem;
          });
        }
        return found;
      }, items2);
      closure_8 = first.useCallback((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_6((size) => {
          if (closure_1) {
            if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
              return size;
            }
          }
          const set = new Set(size);
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
        onSave(new Set(first));
        const set = new Set(first);
        ActionSheetActionCreatorsDefault.hideActionSheet(ConjureCollaboratorRolesSheet);
      }, items3);
      let intl = guildId(onSave[15]).intl;
      const tmp7 = stateFromStoresArray(first.useState(""), 2);
      let obj2 = { count: first.size, max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
      const obj3 = {
        startExpanded: true,
        keyboardShouldPersistTaps: "handled",
        dismissAccessibilityLabel: null,
        footer: null,
        header: null,
        children: null,
      };
      const intl2 = guildId(onSave[15]).intl;
      obj3.dismissAccessibilityLabel = intl2.string(require("../../intl/ConjureUntranslated.messages.js").un99lK);
      let formatToPlainStringResult = intl.formatToPlainString(
        require("../../intl/ConjureUntranslated.messages.js").g5I05P,
        { count: first.size, max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES },
      );
      obj3.footer = closure_10(closure_6, {
        style: tmp.roleListFooter,
        children: closure_10(guildId(onSave[17]).Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: intl.formatToPlainString(require("../../intl/ConjureUntranslated.messages.js").g5I05P, {
            count: first.size,
            max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES,
          }),
        }),
      });
      const obj5 = { title: null, trailing: null };
      const intl3 = guildId(onSave[15]).intl;
      obj5.title = intl3.string(require("../../intl/ConjureUntranslated.messages.js")["pO3+p5"]);
      const obj6 = { label: null, onPress: null };
      const intl4 = guildId(onSave[15]).intl;
      obj6.label = intl4.string(guildId(onSave[15]).t.i4jeWR);
      obj6.onPress = callback;
      obj5.trailing = closure_10(guildId(onSave[19]).ActionSheetHeaderPressableText, obj6);
      obj3.header = closure_10(guildId(onSave[18]).BottomSheetTitleHeader, obj5);
      const obj7 = {
        size: "md",
        round: true,
        grow: false,
        accessibilityLabel: null,
        placeholder: null,
        onChange: null,
      };
      const intl5 = guildId(onSave[15]).intl;
      obj7.accessibilityLabel = intl5.string(guildId(onSave[15]).t.Sojqsr);
      const intl6 = guildId(onSave[15]).intl;
      obj7.placeholder = intl6.string(guildId(onSave[15]).t.Sojqsr);
      obj7.onChange = tmp8;
      const items4 = [closure_10(guildId(onSave[20]).SearchField, obj7)];
      const obj8 = { style: tmp.roleListContent, children: null };
      if (0 === memo.length) {
        const obj9 = { style: tmp.roleListEmpty, children: null };
        const obj10 = { variant: "text-md/normal", color: "text-muted", children: null };
        const intl7 = tmp2(onSave[15]).intl;
        obj10.children = intl7.string(tmp2(onSave[15]).t.V6nAfF);
        obj9.children = closure_10(tmp2(onSave[17]).Text, obj10);
        let tmp13Result = closure_10(tmp14, obj9);
      } else {
        const obj11 = {
          hasIcons: false,
          children: memo.map((children) => {
            const id = children;
            const hasItem = first.has(children.id);
            let tmp3 = !hasItem;
            if (!hasItem) {
              tmp3 = first.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES;
            }
            const obj = { style: roleLabel.roleLabel, children: null };
            const colorStrings = children.colorStrings;
            let primaryColor;
            if (colorStrings != null) {
              primaryColor = colorStrings.primaryColor;
            }
            if (primaryColor == null) {
              primaryColor = children.colorString;
            }
            if (primaryColor == null) {
              primaryColor = DEFAULT_ROLE_COLOR_HEX;
            }
            const obj2 = { label: null, checked: null, disabled: null, accessibilityHint: null, onPress: null };
            const items = [
              closure_1_10(closure_1_15, { color: primaryColor }),
              closure_1_10(guildId(onSave[17]).Text, { variant: "text-md/medium", children: children.name }),
            ];
            obj.children = items;
            obj2.label = closure_1_11(closure_6, obj);
            obj2.checked = hasItem;
            obj2.disabled = tmp3;
            let formatToPlainStringResult;
            if (tmp3) {
              const intl = guildId(onSave[15]).intl;
              const obj4 = { max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
              formatToPlainStringResult = intl.formatToPlainString(
                require("../../intl/ConjureUntranslated.messages.js")["dH7+/Z"],
                obj4,
              );
            }
            obj2.accessibilityHint = formatToPlainStringResult;
            obj2.onPress = function onPress(arg0) {
              return closure_8(id.id, arg0);
            };
            return closure_1_10(guildId(onSave[22]).TableCheckboxRow, obj2, children.id);
          }),
        };
        tmp13Result = closure_10(tmp2(onSave[21]).TableRowGroup, obj11);
      }
      obj8.children = tmp13Result;
      items4[1] = closure_10(closure_6, obj8);
      obj3.children = items4;
      return closure_11(guildId(onSave[23]).ActionSheet, obj3);
    };
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureProjectSettingsForm.tsx");

export default function useConjureProjectSettingsForm(projectId, arg1) {
  _require = projectId;
  importDefault = arg1;
  const tmp = closure_13();
  let items = [conjureSmartContextSetting];
  const items1 = [projectId];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => ConjureProjectStore.getProject(closure_0),
    items1,
  );
  let obj = require("initialize");
  const conjureLiveReloadSetting = require("useConjureLiveReloadSetting").useConjureLiveReloadSetting(projectId);
  const save = conjureLiveReloadSetting.save;
  const tmp7 = require("useConjureAppIdentityDraft")(projectId);
  noop = tmp7;
  const changes = tmp7.changes;
  const commit = tmp7.commit;
  let obj2 = require("useConjureLiveReloadSetting");
  conjureSmartContextSetting = require("ConjureSmartContext").useConjureSmartContextSetting(projectId);
  const save2 = conjureSmartContextSetting.save;
  let obj3 = require("ConjureSmartContext");
  const conjureRequireHostApprovalSetting =
    require("ConjureHostApproval").useConjureRequireHostApprovalSetting(projectId);
  const save3 = conjureRequireHostApprovalSetting.save;
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.collaborator_role_ids;
  }
  if (prop == null) {
    prop = [];
  }
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  let obj4 = require("ConjureHostApproval");
  [tmp12, closure_13] = save(noop.useState(str), 2);
  const tmp11 = save(noop.useState(str), 2);
  [tmp14, closure_14] = save(noop.useState(null), 2);
  const tmp13 = save(noop.useState(null), 2);
  [str2, closure_15] = save(noop.useState(tmp12), 2);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmp10Result = save(noop.useState(num), 2);
  let flags = tmp10Result[0];
  closure_17 = tmp10Result[1];
  const tmp10Result6 = save(
    noop.useState(() => new Set(prop)),
    2,
  );
  const first1 = tmp10Result6[0];
  closure_19 = tmp10Result6[1];
  const tmp10Result7 = save(noop.useState(false), 2);
  const first2 = tmp10Result7[0];
  closure_21 = tmp10Result7[1];
  const tmp15 = save(noop.useState(tmp12), 2);
  [tmp23, closure_22] = save(noop.useState(null), 2);
  const tmp10Result8 = save(noop.useState(null), 2);
  [tmp25, closure_23] = save(noop.useState(null), 2);
  const tmp10Result9 = save(noop.useState(null), 2);
  [tmp27, closure_24] = save(noop.useState(null), 2);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    result = tmp2(tmp3[13]).projectSupportsVisibility(stateFromStores);
    const tmp2Result = tmp2(tmp3[13]);
  }
  let tmp30 = null != stateFromStores;
  if (tmp30) {
    tmp30 = "user" !== stateFromStores.install_scope;
  }
  let result1 = tmp30;
  if (tmp30) {
    result1 = null != arg1;
  }
  if (result1) {
    result1 = tmp2(tmp3[13]).projectSupportsCollaboratorRoles(stateFromStores);
    const tmp2Result4 = tmp2(tmp3[13]);
  }
  const tmp10Result10 = save(noop.useState(null), 2);
  const conjureProjectAccessSettings = require("ConjureUtils").getConjureProjectAccessSettings(flags);
  const isGuildCollaboration = conjureProjectAccessSettings.isGuildCollaboration;
  let tmp33 = null != stateFromStores;
  if (tmp33) {
    tmp33 = trimmed !== tmp12;
  }
  closure_27 = tmp33;
  let tmp34 = result;
  if (result) {
    let num2;
    if (tmp14 != null) {
      num2 = tmp14.flags;
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
    tmp34 = flags !== num2;
  }
  closure_28 = tmp34;
  let tmp36 = result1;
  if (result1) {
    let roleIds;
    if (tmp14 != null) {
      roleIds = tmp14.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp36 = !tmp2(tmp3[29]).haveSameRoleIds(first1, roleIds);
    const tmp2Result6 = tmp2(tmp3[29]);
  }
  closure_29 = tmp36;
  let changed = tmp33;
  if (!tmp33) {
    changed = tmp34;
  }
  if (!changed) {
    changed = tmp36;
  }
  if (!changed) {
    changed = tmp7.changed;
  }
  let changed2 = changed;
  if (!changed) {
    changed2 = conjureLiveReloadSetting.changed;
  }
  if (!changed2) {
    changed2 = conjureSmartContextSetting.changed;
  }
  if (!changed2) {
    changed2 = conjureRequireHostApprovalSetting.changed;
  }
  const callback = obj5.useCallback((arg0) => {
    closure_1_15(arg0);
    closure_1_22(null);
    closure_1_23(null);
  }, []);
  closure_32 = obj5.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_17((arg0) => {
      if (closure_1) {
        let tmp2 = arg0 | closure_0;
      } else {
        tmp2 = arg0 & ~closure_0;
      }
      return tmp2;
    });
    closure_1_23(null);
  }, []);
  const callback1 = obj5.useCallback((items) => {
    closure_19(new Set(items));
    closure_1_23(null);
  }, []);
  const items2 = [arg1, callback1, first1];
  const callback2 = obj5.useCallback(() => {
    if (null != closure_1) {
      const obj2 = { content: null, key: null, stackingBehavior: "stack" };
      const obj3 = { guildId: tmp, initialSelectedRoleIds: first1, onSave: callback1 };
      obj2.content = collapsed(closure_16, obj3);
      obj2.key = ConjureCollaboratorRolesSheet;
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items2);
  const items3 = [
    flags,
    tmp34,
    arg1,
    commit,
    changes,
    changed2,
    save,
    save2,
    save3,
    changed,
    isGuildCollaboration,
    tmp33,
    stateFromStores,
    projectId,
    tmp36,
    first2,
    first1,
    trimmed,
  ];
  let obj6 = { style: tmp.content, children: null };
  const callback3 = obj5.useCallback(
    conjureLiveReloadSetting(function* () {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === guild_id) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              if (null != stateFromStores) {
                if (changed2) {
                  if (!first2) {
                    let result = null;
                    if (closure_27) {
                      result = tmp4(tmp89[30]).conjureProjectNameError(trimmed);
                      const obj3 = tmp4(tmp89[30]);
                    }
                    if (null != result) {
                      closure_2_22(result);
                      c4 = 3;
                      return { value: "project", done: true };
                    } else {
                      const obj6 = {};
                      const merged = Object.assign(changes);
                      if (closure_27) {
                        obj6.name = trimmed;
                      }
                      let tmp46 = closure_28;
                      if (closure_28) {
                        obj6.flags = flags;
                      }
                      let tmp48 = closure_29;
                      if (closure_29) {
                        const _Array = Array;
                        obj6.collaborator_role_ids = Array.from(first1).sort();
                        const arr = Array.from(first1);
                      }
                      let tmp50 = null == tmp98.guild_id;
                      if (tmp50) {
                        tmp50 = null != guild_id;
                      }
                      if (tmp50) {
                        if (!tmp48) {
                          if (tmp46) {
                            tmp46 = isGuildCollaboration;
                          }
                          tmp48 = tmp46;
                        }
                        tmp50 = tmp48;
                      }
                      if (tmp50) {
                        obj6.guild_id = guild_id;
                      }
                      closure_21(true);
                      closure_2_23(null);
                      dependencyMap(null);
                      c3 = 2;
                      if (changed) {
                        guild_id = 3;
                        c4 = 1;
                        const obj7 = { value: tmp4(tmp89[31]).updateProjectSettings(tmp4, obj6), done: false };
                        return obj7;
                      }
                    }
                  }
                }
              }
              c4 = 3;
              return { value: null, done: true };
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_128_21(false);
            throw tmp89;
          } else if (2 === tmp8) {
            c3 = 1;
            const intl = tmp4(tmp89[15]).intl;
            closure_128_23(intl.string(guild_id(tmp89[16])["9JPr8h"]));
            c3 = 0;
            closure_128_21(false);
            c4 = 3;
            return { value: "project", done: true };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_21(false);
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_128_13(closure_128_25);
            const obj = { flags: closure_128_16, roleIds: null };
            const items = [];
            HermesBuiltin.arraySpread(closure_128_18, 0);
            obj.roleIds = items;
            closure_128_14(obj);
            closure_128_7();
          }
          if (closure_128_4()) {
            if (!closure_128_9()) {
              const intl3 = tmp4(tmp89[15]).intl;
              closure_128_24(intl3.string(guild_id(tmp89[16])["9JPr8h"]));
              const tmp72 = "experimental";
            }
          } else {
            const intl2 = tmp4(tmp89[15]).intl;
            closure_128_23(intl2.string(guild_id(tmp89[16]).XzkNBw));
          }
          c3 = 0;
          closure_128_21(false);
          c4 = 3;
        } catch (tmp89) {
          if (tmp5 === c3) {
            c4 = tmp3;
            throw tmp89;
          } else if (tmp2 === tmp91) {
            guild_id = tmp2;
          } else {
            guild_id = tmp;
          }
        }
      }
    }),
    items3,
  );
  const items4 = [
    conjureRequireHostApprovalSetting(require("ConjureAppIdentity").ConjureAppIdentitySection, {
      iconURL: tmp7.iconURL,
      onIconChange(channelId) {
        closure_5.setIcon(channelId);
        closure_1_23(null);
      },
      name: str2,
      nameError: tmp23,
      onNameChange: callback,
      description: tmp7.description,
      onDescriptionChange(description) {
        closure_5.setDescription(description);
        closure_1_23(null);
      },
      disabled: first2,
    }),
    ,
    ,
    ,
    ,
  ];
  let tmp44Result = null;
  if (result) {
    let obj8 = { hasIcons: false, children: null };
    const obj9 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    let intl = tmp2(tmp3[15]).intl;
    obj9.label = intl.string(tmp6(tmp3[16]).ujIxRm);
    let intl2 = tmp2(tmp3[15]).intl;
    obj9.subLabel = intl2.string(tmp6(tmp3[16]).gT8zk1);
    obj9.checked = conjureProjectAccessSettings.isPublic;
    obj9.disabled = first2;
    obj9.onPress = function onPress(arg0) {
      return closure_32(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
    };
    obj8.children = tmp44(tmp2(tmp3[22]).TableCheckboxRow, obj9);
    tmp44Result = tmp44(tmp2(tmp3[21]).TableRowGroup, obj8);
  }
  items4[1] = tmp44Result;
  let tmp44Result6 = null;
  if (result) {
    tmp44Result6 = null;
    if (tmp30) {
      const obj10 = { hasIcons: false, children: null };
      const obj11 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
      let intl3 = tmp2(tmp3[15]).intl;
      obj11.label = intl3.string(tmp6(tmp3[16]).lVvR4E);
      const intl4 = tmp2(tmp3[15]).intl;
      obj11.subLabel = intl4.string(tmp6(tmp3[16]).SQZGoV);
      obj11.checked = isGuildCollaboration;
      obj11.disabled = first2;
      obj11.onPress = function onPress(arg0) {
        return closure_32(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
      };
      obj10.children = tmp44(tmp2(tmp3[22]).TableCheckboxRow, obj11);
      tmp44Result6 = tmp44(tmp2(tmp3[21]).TableRowGroup, obj10);
    }
  }
  items4[2] = tmp44Result6;
  let tmp44Result7 = null;
  if (conjureLiveReloadSetting.available) {
    const obj12 = { hasIcons: false, children: null };
    const obj13 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl5 = tmp2(tmp3[15]).intl;
    obj13.label = intl5.string(tmp6(tmp3[16]).eEo0ye);
    ({ description: obj17.subLabel, checked: obj17.checked } = conjureLiveReloadSetting);
    obj13.disabled = first2;
    obj13.onPress = function onPress(arg0) {
      conjureLiveReloadSetting.setChecked(arg0);
      closure_1_23(null);
    };
    obj12.children = tmp44(tmp2(tmp3[22]).TableCheckboxRow, obj13);
    tmp44Result7 = tmp44(tmp2(tmp3[21]).TableRowGroup, obj12);
  }
  items4[3] = tmp44Result7;
  let tmp44Result8 = null;
  if (result1) {
    const obj14 = { label: null, subLabel: null, arrow: true, disabled: null, accessibilityHint: null, onPress: null };
    const intl6 = tmp2(tmp3[15]).intl;
    obj14.label = intl6.string(tmp6(tmp3[16])["pO3+p5"]);
    const intl7 = tmp2(tmp3[15]).intl;
    obj14.subLabel = intl7.string(tmp6(tmp3[16])["9MdtK9"]);
    let tmp49 = first2;
    if (!first2) {
      tmp49 = !isGuildCollaboration;
    }
    obj14.disabled = tmp49;
    let stringResult;
    if (!isGuildCollaboration) {
      const intl8 = tmp2(tmp3[15]).intl;
      stringResult = intl8.string(tmp6(tmp3[16]).nZw5r9);
    }
    const obj15 = { hasIcons: false, children: null };
    obj14.accessibilityHint = stringResult;
    obj14.onPress = callback2;
    obj15.children = tmp44(tmp2(tmp3[33]).TableRow, obj14);
    tmp44Result8 = tmp44(tmp2(tmp3[21]).TableRowGroup, obj15);
  }
  items4[4] = tmp44Result8;
  let tmp44Result9 = null;
  if (null != tmp25) {
    const obj16 = { accessibilityRole: "alert", children: null };
    const obj18 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp25 };
    obj16.children = tmp44(tmp2(tmp3[17]).Text, obj18);
    tmp44Result9 = tmp44(tmp43, obj16);
  }
  const obj19 = { fields: save3(changes, obj6), experimentalFields: null, canSave: null, saving: null, submit: null };
  items4[5] = tmp44Result9;
  obj6.children = items4;
  const obj20 = { style: tmp.content, children: null };
  const obj21 = { hasIcons: false, children: null };
  const obj22 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl9 = tmp2(tmp3[15]).intl;
  obj22.label = intl9.string(require("../../intl/ConjureUntranslated.messages.js")["4liZ45"]);
  const intl10 = tmp2(tmp3[15]).intl;
  obj22.subLabel = intl10.string(require("../../intl/ConjureUntranslated.messages.js").I5cl7p);
  obj22.checked = conjureSmartContextSetting.checked;
  obj22.disabled = first2;
  obj22.onPress = function onPress(arg0) {
    conjureSmartContextSetting.setChecked(arg0);
    closure_1_24(null);
  };
  const items5 = [conjureRequireHostApprovalSetting(require("TableCheckboxRow").TableCheckboxRow, obj22)];
  const obj23 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl11 = tmp2(tmp3[15]).intl;
  obj23.label = intl11.string(require("../../intl/ConjureUntranslated.messages.js").mpjaVm);
  const intl12 = tmp2(tmp3[15]).intl;
  obj23.subLabel = intl12.string(require("../../intl/ConjureUntranslated.messages.js")["2PxChh"]);
  obj23.checked = conjureRequireHostApprovalSetting.checked;
  obj23.disabled = first2;
  obj23.onPress = function onPress(arg0) {
    conjureRequireHostApprovalSetting.setChecked(arg0);
    closure_1_24(null);
  };
  items5[1] = conjureRequireHostApprovalSetting(require("TableCheckboxRow").TableCheckboxRow, obj23);
  obj21.children = items5;
  const items6 = [
    save3(require("TableRowGroup").TableRowGroup, obj21),
    conjureRequireHostApprovalSetting(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, {
      projectId,
    }),
  ];
  let tmp44Result10 = null;
  if (null != tmp27) {
    const obj25 = { accessibilityRole: "alert", children: null };
    const obj26 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp27 };
    obj25.children = tmp44(tmp2(tmp3[17]).Text, obj26);
    tmp44Result10 = tmp44(tmp43, obj25);
  }
  items6[2] = tmp44Result10;
  obj20.children = items6;
  obj19.experimentalFields = save3(changes, obj20);
  if (changed2) {
    changed2 = "" !== trimmed;
  }
  obj19.canSave = changed2;
  obj19.saving = first2;
  obj19.submit = callback3;
  return obj19;
}
