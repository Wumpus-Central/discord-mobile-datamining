// === Module 17082: useConjureProjectSettingsForm ===

// Module 17082 (useConjureProjectSettingsForm)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5056 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6947 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10652 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
let View = fn(17).View;
const DEFAULT_ROLE_COLOR_HEX = fn(1085).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const ConjureCollaboratorRolesSheet = "ConjureCollaboratorRolesSheet";
let createStyles = fn(5092);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, roleLabel: null, roleListContent: null, roleListEmpty: null, roleListFooter: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.roleLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.roleListContent = { paddingBottom: nativeDefault.space.PX_64 };
let obj5 = { paddingBottom: nativeDefault.space.PX_64 };
obj2.roleListEmpty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let obj6 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj2.roleListFooter = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_13 = createStyles.createStyles(obj2);
createStyles = fn(5092);
let closure_14 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: null };
  const size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  obj.circle = size;
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleColorCircle(color) {
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
}) : (function RoleColorCircle(color) {
  return collapsed(View, { style: closure_14(color.color).circle });
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureCollaboratorRolesSheet(guildId) {
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
        class J {
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
        class J {
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
        class J {
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
      class J {
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
    class J {
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
    cResult[14] = J;
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
}) : (function ConjureCollaboratorRolesSheet(guildId) {
  guildId = guildId.guildId;
  ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
  let first;
  c7 = undefined;
  const tmp = closure_13();
  const roleLabel = tmp;
  let items = [c7];
  const items1 = [guildId];
  const stateFromStoresArray = guildId(onSave[12]).useStateFromStoresArray(items, () => GuildRoleStore.getSortedRoles(guildId), items1);
  const tmp5 = stateFromStoresArray(first.useState(() => new Set(importDefault)), 2);
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
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, footer: null, header: null, children: null };
  const intl2 = guildId(onSave[15]).intl;
  obj3.dismissAccessibilityLabel = intl2.string(require("module_3849").un99lK);
  let formatToPlainStringResult = intl.formatToPlainString(require("module_3849").g5I05P, { count: first.size, max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES });
  obj3.footer = closure_10(closure_6, { style: tmp.roleListFooter, children: closure_10(guildId(onSave[17]).Text, { variant: "text-xs/normal", color: "text-muted", children: intl.formatToPlainString(require("module_3849").g5I05P, { count: first.size, max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES }) }) });
  const obj5 = { title: null, trailing: null };
  const intl3 = guildId(onSave[15]).intl;
  obj5.title = intl3.string(require("module_3849")["pO3+p5"]);
  const obj6 = { label: null, onPress: null };
  const intl4 = guildId(onSave[15]).intl;
  obj6.label = intl4.string(guildId(onSave[15]).t.i4jeWR);
  obj6.onPress = callback;
  obj5.trailing = closure_10(guildId(onSave[19]).ActionSheetHeaderPressableText, obj6);
  obj3.header = closure_10(guildId(onSave[18]).BottomSheetTitleHeader, obj5);
  const obj7 = { size: "md", round: true, grow: false, accessibilityLabel: null, placeholder: null, onChange: null };
  const intl5 = guildId(onSave[15]).intl;
  obj7.accessibilityLabel = intl5.string(guildId(onSave[15]).t.Sojqsr);
  const intl6 = guildId(onSave[15]).intl;
  obj7.placeholder = intl6.string(guildId(onSave[15]).t.Sojqsr);
  obj7.onChange = tmp8;
  const items4 = [closure_10(guildId(onSave[20]).SearchField, obj7), ];
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
          const items = [closure_1_10(closure_1_15, { color: primaryColor }), closure_1_10(guildId(onSave[17]).Text, { variant: "text-md/medium", children: children.name })];
          obj.children = items;
          obj2.label = closure_1_11(closure_6, obj);
          obj2.checked = hasItem;
          obj2.disabled = tmp3;
          let formatToPlainStringResult;
          if (tmp3) {
            const intl = guildId(onSave[15]).intl;
            const obj4 = { max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
            formatToPlainStringResult = intl.formatToPlainString(require("module_3849")["dH7+/Z"], obj4);
          }
          obj2.accessibilityHint = formatToPlainStringResult;
          obj2.onPress = function onPress(arg0) {
            return closure_8(id.id, arg0);
          };
          return closure_1_10(guildId(onSave[22]).TableCheckboxRow, obj2, children.id);
        })
    };
    tmp13Result = closure_10(tmp2(onSave[21]).TableRowGroup, obj11);
  }
  obj8.children = tmp13Result;
  items4[1] = closure_10(closure_6, obj8);
  obj3.children = items4;
  return closure_11(guildId(onSave[23]).ActionSheet, obj3);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureProjectSettingsForm.tsx");

export default function useConjureProjectSettingsForm(projectId, arg1) {
  _require = projectId;
  importDefault = arg1;
  const tmp = closure_13();
  let items = [conjureSmartContextSetting];
  const items1 = [projectId];
  stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
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
  let obj3 = require("ConjureSmartContext");
  [tmp11, closure_11] = save(noop.useState(str), 2);
  const tmp10 = save(noop.useState(str), 2);
  [tmp13, ConjureCollaboratorRolesSheet] = save(noop.useState(null), 2);
  const tmp12 = save(noop.useState(null), 2);
  [str2, closure_13] = save(noop.useState(tmp11), 2);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmp9Result = save(noop.useState(num), 2);
  let flags = tmp9Result[0];
  closure_15 = tmp9Result[1];
  const tmp9Result6 = save(noop.useState(() => new Set(prop)), 2);
  const first1 = tmp9Result6[0];
  closure_17 = tmp9Result6[1];
  const tmp9Result7 = save(noop.useState(false), 2);
  const first2 = tmp9Result7[0];
  closure_19 = tmp9Result7[1];
  const tmp14 = save(noop.useState(tmp11), 2);
  [tmp22, closure_20] = save(noop.useState(null), 2);
  const tmp9Result8 = save(noop.useState(null), 2);
  [tmp24, closure_21] = save(noop.useState(null), 2);
  const tmp9Result9 = save(noop.useState(null), 2);
  [tmp26, closure_22] = save(noop.useState(null), 2);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    result = tmp2(tmp3[13]).projectSupportsVisibility(stateFromStores);
    const tmp2Result = tmp2(tmp3[13]);
  }
  let tmp29 = null != stateFromStores;
  if (tmp29) {
    tmp29 = "user" !== stateFromStores.install_scope;
  }
  let result1 = tmp29;
  if (tmp29) {
    result1 = null != arg1;
  }
  if (result1) {
    result1 = tmp2(tmp3[13]).projectSupportsCollaboratorRoles(stateFromStores);
    const tmp2Result4 = tmp2(tmp3[13]);
  }
  const tmp9Result10 = save(noop.useState(null), 2);
  const conjureProjectAccessSettings = require("ConjureUtils").getConjureProjectAccessSettings(flags);
  const isPublic = conjureProjectAccessSettings.isPublic;
  let tmp32 = null != stateFromStores;
  if (tmp32) {
    tmp32 = trimmed !== tmp11;
  }
  closure_25 = tmp32;
  let tmp33 = result;
  if (result) {
    let num2;
    if (tmp13 != null) {
      num2 = tmp13.flags;
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
    tmp33 = flags !== num2;
  }
  closure_26 = tmp33;
  let tmp35 = result1;
  if (result1) {
    let roleIds;
    if (tmp13 != null) {
      roleIds = tmp13.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp35 = !tmp2(tmp3[28]).haveSameRoleIds(first1, roleIds);
    const tmp2Result6 = tmp2(tmp3[28]);
  }
  closure_27 = tmp35;
  let changed = tmp32;
  if (!tmp32) {
    changed = tmp33;
  }
  if (!changed) {
    changed = tmp35;
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
  const callback = obj4.useCallback((arg0) => {
    closure_1_13(arg0);
    closure_1_20(null);
    closure_1_21(null);
  }, []);
  closure_30 = obj4.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_15((arg0) => {
      if (closure_1) {
        let tmp2 = arg0 | closure_0;
      } else {
        tmp2 = arg0 & ~closure_0;
      }
      return tmp2;
    });
    closure_1_21(null);
  }, []);
  const callback1 = obj4.useCallback((items) => {
    closure_17(new Set(items));
    closure_1_21(null);
  }, []);
  const items2 = [arg1, callback1, first1];
  const callback2 = obj4.useCallback(() => {
    if (null != closure_1) {
      const obj2 = { content: null, key: null, stackingBehavior: "stack" };
      const obj3 = { guildId: tmp, initialSelectedRoleIds: first1, onSave: callback1 };
      obj2.content = collapsed(closure_16, obj3);
      obj2.key = ConjureCollaboratorRolesSheet;
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items2);
  const items3 = [flags, tmp33, arg1, commit, changes, changed2, save, save2, changed, isPublic, tmp32, stateFromStores, projectId, tmp35, first2, first1, trimmed];
  const obj5 = { style: tmp.content, children: null };
  const callback3 = obj4.useCallback(conjureLiveReloadSetting(function*() {
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
                  if (closure_25) {
                    result = tmp4(tmp94[29]).conjureProjectNameError(trimmed);
                    const obj3 = tmp4(tmp94[29]);
                  }
                  if (null != result) {
                    constants2(result);
                    c4 = 3;
                    return { value: "project", done: true };
                  } else {
                    const obj6 = {};
                    const merged = Object.assign(changes);
                    if (closure_25) {
                      obj6.name = trimmed;
                    }
                    let tmp54 = closure_26;
                    if (closure_26) {
                      obj6.flags = flags;
                    }
                    let tmp56 = closure_27;
                    if (closure_27) {
                      const _Array = Array;
                      obj6.collaborator_role_ids = Array.from(first1).sort();
                      const arr = Array.from(first1);
                    }
                    let tmp58 = null == tmp104.guild_id;
                    if (tmp58) {
                      tmp58 = null != guild_id;
                    }
                    if (tmp58) {
                      if (!tmp56) {
                        if (tmp54) {
                          tmp54 = isPublic;
                        }
                        tmp56 = tmp54;
                      }
                      tmp58 = tmp56;
                    }
                    if (tmp58) {
                      obj6.guild_id = guild_id;
                    }
                    closure_19(true);
                    guild(null);
                    closure_2_22(null);
                    c3 = 2;
                    if (changed) {
                      guild_id = 3;
                      c4 = 1;
                      const obj7 = { value: tmp4(tmp94[30]).updateProjectSettings(tmp4, obj6), done: false };
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
          closure_128_19(false);
          throw tmp94;
        } else if (2 === tmp8) {
          c3 = 1;
          const intl2 = tmp4(tmp94[15]).intl;
          closure_128_21(intl2.string(guild_id(tmp94[16])["9JPr8h"]));
          c3 = 0;
          closure_128_19(false);
          c4 = 3;
          return { value: "project", done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_19(false);
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else if (value.ok) {
          closure_128_11(closure_128_23);
          const obj = { flags: closure_128_14, roleIds: null };
          const items = [];
          HermesBuiltin.arraySpread(closure_128_16, 0);
          obj.roleIds = items;
          closure_128_12(obj);
          closure_128_7();
        } else {
          const intl = tmp4(tmp94[15]).intl;
          closure_128_21(intl.string(guild_id(tmp94[16])["9JPr8h"]));
          c3 = 0;
          closure_128_19(false);
          c4 = 3;
          return { value: "project", done: true };
        }
        if (closure_128_4()) {
          if (!closure_128_9()) {
            const intl4 = tmp4(tmp94[15]).intl;
            closure_128_22(intl4.string(guild_id(tmp94[16])["9JPr8h"]));
            const str2 = "experimental";
          }
        } else {
          const intl3 = tmp4(tmp94[15]).intl;
          closure_128_21(intl3.string(guild_id(tmp94[16]).XzkNBw));
        }
        c3 = 0;
        closure_128_19(false);
        c4 = 3;
      } catch (tmp94) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp94;
        } else if (tmp2 === tmp96) {
          guild_id = tmp2;
        } else {
          guild_id = tmp;
        }
      }
    }
  }), items3);
  let obj6 = {
    iconURL: tmp7.iconURL,
    canRemove: null != tmp7.icon,
    onIconChange(channelId) {
      closure_5.setIcon(channelId);
      closure_1_21(null);
    },
    name: str2,
    nameError: tmp22,
    onNameChange: callback,
    description: tmp7.description,
    onDescriptionChange(description) {
      closure_5.setDescription(description);
      closure_1_21(null);
    },
    previewName: null,
    disabled: null
  };
  let tmp44 = trimmed;
  if ("" === trimmed) {
    tmp44 = tmp11;
  }
  obj6.previewName = tmp44;
  obj6.disabled = first2;
  const items4 = [prop(require("ConjureAppIdentity").ConjureAppIdentitySection, obj6), , , , , ];
  let tmp43Result = null;
  if (result) {
    let obj7 = { hasIcons: false, children: null };
    let obj8 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    let intl = tmp2(tmp3[15]).intl;
    obj8.label = intl.string(tmp6(tmp3[16]).gchQFO);
    let intl2 = tmp2(tmp3[15]).intl;
    obj8.subLabel = intl2.string(tmp6(tmp3[16]).mD4GBH);
    obj8.checked = conjureProjectAccessSettings.isShared;
    obj8.disabled = first2;
    obj8.onPress = function onPress(arg0) {
      return closure_30(ConjureProjectTypes.ConjureProjectFlags.SHAREABLE, arg0);
    };
    obj7.children = tmp43(tmp2(tmp3[22]).TableCheckboxRow, obj8);
    tmp43Result = tmp43(tmp2(tmp3[21]).TableRowGroup, obj7);
  }
  items4[1] = tmp43Result;
  let tmp43Result6 = null;
  if (result) {
    tmp43Result6 = null;
    if (tmp29) {
      const obj9 = { hasIcons: false, children: null };
      const obj10 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
      let intl3 = tmp2(tmp3[15]).intl;
      obj10.label = intl3.string(tmp6(tmp3[16]).lVvR4E);
      let intl4 = tmp2(tmp3[15]).intl;
      obj10.subLabel = intl4.string(tmp6(tmp3[16]).SQZGoV);
      obj10.checked = isPublic;
      obj10.disabled = first2;
      obj10.onPress = function onPress(arg0) {
        return closure_30(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
      };
      obj9.children = tmp43(tmp2(tmp3[22]).TableCheckboxRow, obj10);
      tmp43Result6 = tmp43(tmp2(tmp3[21]).TableRowGroup, obj9);
    }
  }
  items4[2] = tmp43Result6;
  let tmp43Result7 = null;
  if (conjureLiveReloadSetting.available) {
    const obj11 = { hasIcons: false, children: null };
    const obj12 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl5 = tmp2(tmp3[15]).intl;
    obj12.label = intl5.string(tmp6(tmp3[16]).eEo0ye);
    ({ description: obj16.subLabel, checked: obj16.checked } = conjureLiveReloadSetting);
    obj12.disabled = first2;
    obj12.onPress = function onPress(arg0) {
      conjureLiveReloadSetting.setChecked(arg0);
      closure_1_21(null);
    };
    obj11.children = tmp43(tmp2(tmp3[22]).TableCheckboxRow, obj12);
    tmp43Result7 = tmp43(tmp2(tmp3[21]).TableRowGroup, obj11);
  }
  items4[3] = tmp43Result7;
  let tmp43Result8 = null;
  if (result1) {
    const obj13 = { label: null, subLabel: null, arrow: true, disabled: null, accessibilityHint: null, onPress: null };
    const intl6 = tmp2(tmp3[15]).intl;
    obj13.label = intl6.string(tmp6(tmp3[16])["pO3+p5"]);
    const intl7 = tmp2(tmp3[15]).intl;
    obj13.subLabel = intl7.string(tmp6(tmp3[16])["9MdtK9"]);
    let tmp49 = first2;
    if (!first2) {
      tmp49 = !isPublic;
    }
    obj13.disabled = tmp49;
    let stringResult;
    if (!isPublic) {
      const intl8 = tmp2(tmp3[15]).intl;
      stringResult = intl8.string(tmp6(tmp3[16]).nZw5r9);
    }
    const obj14 = { hasIcons: false, children: null };
    obj13.accessibilityHint = stringResult;
    obj13.onPress = callback2;
    obj14.children = tmp43(tmp2(tmp3[32]).TableRow, obj13);
    tmp43Result8 = tmp43(tmp2(tmp3[21]).TableRowGroup, obj14);
  }
  items4[4] = tmp43Result8;
  let tmp43Result9 = null;
  if (null != tmp24) {
    const obj15 = { accessibilityRole: "alert", children: null };
    const obj17 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp24 };
    obj15.children = tmp43(tmp2(tmp3[17]).Text, obj17);
    tmp43Result9 = tmp43(tmp42, obj15);
  }
  const obj18 = { fields: closure_11(changes, obj5), experimentalFields: null, canSave: null, saving: null, submit: null };
  items4[5] = tmp43Result9;
  obj5.children = items4;
  const obj19 = { style: tmp.content, children: null };
  const obj20 = { hasIcons: false, children: null };
  const obj21 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl9 = tmp2(tmp3[15]).intl;
  obj21.label = intl9.string(require("module_3849")["4liZ45"]);
  const intl10 = tmp2(tmp3[15]).intl;
  obj21.subLabel = intl10.string(require("module_3849").I5cl7p);
  obj21.checked = conjureSmartContextSetting.checked;
  obj21.disabled = first2;
  obj21.onPress = function onPress(arg0) {
    conjureSmartContextSetting.setChecked(arg0);
    closure_1_22(null);
  };
  obj20.children = prop(require("TableCheckboxRow").TableCheckboxRow, obj21);
  const items5 = [prop(require("TableRowGroup").TableRowGroup, obj20), ];
  let tmp43Result10 = null;
  if (null != tmp26) {
    const obj22 = { accessibilityRole: "alert", children: null };
    const obj23 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp26 };
    obj22.children = tmp43(tmp2(tmp3[17]).Text, obj23);
    tmp43Result10 = tmp43(tmp42, obj22);
  }
  items5[1] = tmp43Result10;
  obj19.children = items5;
  obj18.experimentalFields = closure_11(changes, obj19);
  if (changed2) {
    changed2 = "" !== trimmed;
  }
  obj18.canSave = changed2;
  obj18.saving = first2;
  obj18.submit = callback3;
  return obj18;
};