// discord_app/modules/conjure/settings/native/useConjureProjectSettingsForm.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureProjectTypes from "../../projects/ConjureProjectTypes.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const View = fn(17).View;
const DEFAULT_ROLE_COLOR_HEX = fn(1084).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const ConjureCollaboratorRolesSheet = "ConjureCollaboratorRolesSheet";
let createStyles = fn(5004);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, roleLabel: null, roleListContent: null, roleListEmpty: null, roleListFooter: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.roleLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.roleListContent = { paddingBottom: nativeDefault.space.PX_64 };
let obj5 = { paddingBottom: nativeDefault.space.PX_64 };
obj2.roleListEmpty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let obj6 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj2.roleListFooter = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_11 = createStyles.createStyles(obj2);
createStyles = fn(5004);
let closure_12 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: null };
  const size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  obj.circle = size;
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleColorCircle(color) {
  const cResult = c.c(2);
  const tmp2 = closure_12(color.color);
  if (cResult[0] !== tmp2.circle) {
    const obj2 = { style: tmp2.circle };
    const tmp6 = closure_1_8(View, obj2);
    cResult[0] = tmp2.circle;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function RoleColorCircle(color) {
  return closure_1_8(View, { style: closure_12(color.color).circle });
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureCollaboratorRolesSheet(guildId) {
  const cResult = guildId(onSave[9]).c(40);
  guildId = guildId.guildId;
  const initialSelectedRoleIds = guildId.initialSelectedRoleIds;
  onSave = guildId.onSave;
  const tmp4 = closure_11();
  _slicedToArray = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildRoleStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = S;
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
    tmp8 = cResult[3];
  }
  let obj = guildId(onSave[9]);
  const stateFromStoresArray = guildId(onSave[10]).useStateFromStoresArray(first, S, tmp8);
  if (cResult[4] !== initialSelectedRoleIds) {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
    cResult[4] = initialSelectedRoleIds;
    cResult[5] = tmp11;
  } else {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
  }
  [first1, View] = first1.useState(tmp11);
  const tmpResult = guildId(onSave[10]);
  [tmp15, r10054] = first1.useState("");
  if (cResult[6] !== tmp15) {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
    let toLocaleLowerCaseResult = obj3.toLocaleLowerCase();
    cResult[6] = tmp15;
    cResult[7] = toLocaleLowerCaseResult;
  } else {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
  }
  GuildRoleStore = tmp16;
  if (cResult[8] === tmp16) {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(arg0, arg1) {
          closure_0 = guildId;
          closure_1 = arg1;
          tmp = closure_5(() => { ... });
          return;
        }
      }
      cResult[11] = X;
    } else {
      class X {
        constructor(arg0, arg1) {
          closure_0 = guildId;
          closure_1 = arg1;
          tmp = closure_5(() => { ... });
          return;
        }
      }
    }
    closure_7 = X;
    if (cResult[12] === onSave) {
      class X {
        constructor(arg0, arg1) {
          closure_0 = guildId;
          closure_1 = arg1;
          tmp = closure_5(() => { ... });
          return;
        }
      }
      if (cResult[15] !== first1.size) {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5(() => { ... });
            return;
          }
        }
        let obj2 = { count: first1.size, max: null };
        class M {
          constructor() {
            set = new Set(closure_4);
            tmp2 = onSave(set);
            obj = closure_1(closure_2[12]);
            hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
            return;
          }
        }
        let formatToPlainStringResult = obj4.formatToPlainString(initialSelectedRoleIds(tmp2[14]).g5I05P, obj2);
        cResult[15] = first1.size;
        cResult[16] = formatToPlainStringResult;
      } else {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5(() => { ... });
            return;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5(() => { ... });
            return;
          }
        }
        cResult[17] = obj6.string(initialSelectedRoleIds(tmp2[14]).un99lK);
        class M {
          constructor() {
            set = new Set(closure_4);
            tmp2 = onSave(set);
            obj = closure_1(closure_2[12]);
            hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
            return;
          }
        }
        const stringResult = obj6.string(initialSelectedRoleIds(tmp2[14]).un99lK);
      } else {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5(() => { ... });
            return;
          }
        }
      }
      if (cResult[18] !== tmp21) {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5(() => { ... });
            return;
          }
        }
        const obj5 = { variant: "text-xs/normal", color: "text-muted", children: tmp21 };
        const tmp27 = closure_8(tmp(tmp2[15]).Text, obj5);
        cResult[18] = tmp21;
        class M {
          constructor() {
            set = new Set(closure_4);
            tmp2 = onSave(set);
            obj = closure_1(closure_2[12]);
            hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
            return;
          }
        }
        cResult[19] = tmp27;
      } else {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5(() => { ... });
            return;
          }
        }
      }
      class M {
        constructor() {
          set = new Set(closure_4);
          tmp2 = onSave(set);
          obj = closure_1(closure_2[12]);
          hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
          return;
        }
      }
      const obj7 = { style: tmp4.roleListFooter, children: tmp26 };
      const tmp31 = closure_8(View, obj7);
      cResult[20] = tmp4.roleListFooter;
      cResult[21] = tmp26;
      cResult[22] = tmp31;
    }
    class M {
      constructor() {
        set = new Set(closure_4);
        tmp2 = onSave(set);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
        return;
      }
    }
    cResult[12] = onSave;
    cResult[13] = first1;
    cResult[14] = M;
  }
  if ("" !== tmp16) {
    class X {
      constructor(arg0, arg1) {
        closure_0 = guildId;
        closure_1 = arg1;
        tmp = closure_5(() => { ... });
        return;
      }
    }
  }
  cResult[8] = tmp16;
  cResult[9] = stateFromStoresArray;
  cResult[10] = stateFromStoresArray;
  const tmp14 = _slicedToArray(first1.useState(""), 2);
}) : (function ConjureCollaboratorRolesSheet(guildId) {
  guildId = guildId.guildId;
  ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
  first = undefined;
  closure_6 = undefined;
  const tmp = closure_11();
  _slicedToArray = tmp;
  let items = [closure_6];
  const items1 = [guildId];
  const stateFromStoresArray = guildId(onSave[10]).useStateFromStoresArray(items, () => GuildRoleStore.getSortedRoles(guildId), items1);
  [first, closure_6] = stateFromStoresArray.useState(() => new Set(importDefault));
  let obj = guildId(onSave[10]);
  [str, tmp8] = stateFromStoresArray.useState("");
  const trimmed = str.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  c7 = toLocaleLowerCaseResult;
  const items2 = [toLocaleLowerCaseResult, stateFromStoresArray];
  const memo = stateFromStoresArray.useMemo(() => {
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
  closure_8 = stateFromStoresArray.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_6((size) => {
      if (closure_1) {
        if (size.size >= guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
  const callback = stateFromStoresArray.useCallback(() => {
    onSave(new Set(first));
    const set = new Set(first);
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureCollaboratorRolesSheet);
  }, items3);
  let intl = guildId(onSave[13]).intl;
  const tmp7 = _slicedToArray(stateFromStoresArray.useState(""), 2);
  let obj2 = { count: first.size, max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES };
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, footer: null, header: null, children: null };
  const intl2 = guildId(onSave[13]).intl;
  obj3.dismissAccessibilityLabel = intl2.string(require("../../intl/ConjureUntranslated.messages.js").un99lK);
  let formatToPlainStringResult = intl.formatToPlainString(require("../../intl/ConjureUntranslated.messages.js").g5I05P, { count: first.size, max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES });
  obj3.footer = closure_8(first, { style: tmp.roleListFooter, children: closure_8(guildId(onSave[15]).Text, { variant: "text-xs/normal", color: "text-muted", children: intl.formatToPlainString(require("../../intl/ConjureUntranslated.messages.js").g5I05P, { count: first.size, max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES }) }) });
  const obj5 = { title: null, trailing: null };
  const intl3 = guildId(onSave[13]).intl;
  obj5.title = intl3.string(require("../../intl/ConjureUntranslated.messages.js")["pO3+p5"]);
  const obj6 = { label: null, onPress: null };
  const intl4 = guildId(onSave[13]).intl;
  obj6.label = intl4.string(guildId(onSave[13]).t.i4jeWR);
  obj6.onPress = callback;
  obj5.trailing = closure_8(guildId(onSave[17]).ActionSheetHeaderPressableText, obj6);
  obj3.header = closure_8(guildId(onSave[16]).BottomSheetTitleHeader, obj5);
  const obj7 = { size: "md", round: true, grow: false, accessibilityLabel: null, placeholder: null, onChange: null };
  const intl5 = guildId(onSave[13]).intl;
  obj7.accessibilityLabel = intl5.string(guildId(onSave[13]).t.Sojqsr);
  const intl6 = guildId(onSave[13]).intl;
  obj7.placeholder = intl6.string(guildId(onSave[13]).t.Sojqsr);
  obj7.onChange = tmp8;
  const items4 = [closure_8(guildId(onSave[18]).SearchBar, obj7), ];
  const obj8 = { style: tmp.roleListContent, children: null };
  if (0 === memo.length) {
    const obj9 = { style: tmp.roleListEmpty, children: null };
    const obj10 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl7 = tmp2(onSave[13]).intl;
    obj10.children = intl7.string(tmp2(onSave[13]).t.V6nAfF);
    obj9.children = tmp13(tmp2(onSave[15]).Text, obj10);
    let tmp13Result = tmp13(tmp14, obj9);
  } else {
    const obj11 = {
      hasIcons: false,
      children: memo.map((children) => {
          const id = children;
          const hasItem = first.has(children.id);
          let tmp3 = !hasItem;
          if (!hasItem) {
            tmp3 = first.size >= guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES;
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
            primaryColor = c7;
          }
          const obj2 = { label: null, checked: null, disabled: null, accessibilityHint: null, onPress: null };
          const items = [closure_8(closure_1_13, { color: primaryColor }), closure_8(guildId(onSave[15]).Text, { variant: "text-md/medium", children: children.name })];
          obj.children = items;
          obj2.label = closure_1_9(first, obj);
          obj2.checked = hasItem;
          obj2.disabled = tmp3;
          let formatToPlainStringResult;
          if (tmp3) {
            const intl = guildId(onSave[13]).intl;
            const obj4 = { max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES };
            formatToPlainStringResult = intl.formatToPlainString(require("../../intl/ConjureUntranslated.messages.js")["dH7+/Z"], obj4);
          }
          obj2.accessibilityHint = formatToPlainStringResult;
          obj2.onPress = function onPress(arg0) {
            return closure_8(id.id, arg0);
          };
          return closure_8(guildId(onSave[20]).TableCheckboxRow, obj2, children.id);
        })
    };
    tmp13Result = tmp13(tmp2(onSave[19]).TableRowGroup, obj11);
  }
  obj8.children = tmp13Result;
  items4[1] = closure_8(first, obj8);
  obj3.children = items4;
  return closure_9(guildId(onSave[21]).ActionSheet, obj3);
});
ReactCompilerGating = fn(558);
let obj7 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureProjectSettingsForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectSettingsForm(projectId, arg1) {
  _require = arg1;
  const cResult = require("c").c(76);
  const tmp4 = closure_11();
  const tmp6 = selectedRoleIds(handleFlagChange[22])(projectId, arg1);
  ({ iconURL, description, liveReload, smartContext, hostApproval, name, nameError, nameChanged, isPublic, isGuildCollaboration, selectedRoleIds } = tmp6);
  ({ supportsVisibility, supportsCollaboration, supportsCollaboratorRoles, saving, saveError, experimentalError, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleFlagChange } = tmp6);
  ({ handleLiveReloadChange, handleRoleSelectionChange } = tmp6);
  ({ handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp6);
  if (cResult[0] === arg1) {
    if (cResult[1] === handleRoleSelectionChange) {
      if (cResult[2] === selectedRoleIds) {
        let tmp7 = cResult[3];
      }
      if (cResult[4] === description) {
        if (cResult[5] === handleDescriptionChange) {
          if (cResult[6] === handleIconChange) {
            if (cResult[7] === handleNameChange) {
              if (cResult[8] === iconURL) {
                if (cResult[9] === name) {
                  if (cResult[10] === nameError) {
                    if (cResult[11] === saving) {
                      let tmp8 = cResult[12];
                    }
                    if (cResult[13] === handleFlagChange) {
                      if (cResult[14] === isPublic) {
                        if (cResult[15] === saving) {
                          if (cResult[16] === supportsVisibility) {
                            let tmp11 = cResult[17];
                          }
                          if (cResult[18] === handleFlagChange) {
                            if (cResult[19] === isGuildCollaboration) {
                              if (cResult[20] === saving) {
                                if (cResult[21] === supportsCollaboration) {
                                  if (cResult[22] === supportsVisibility) {
                                    let tmp14 = cResult[23];
                                  }
                                  if (cResult[24] === handleLiveReloadChange) {
                                    if (cResult[25] === liveReload.available) {
                                      if (cResult[26] === liveReload.checked) {
                                        if (cResult[27] === liveReload.description) {
                                          if (cResult[28] === saving) {
                                            let tmp17 = cResult[29];
                                          }
                                          if (cResult[30] === tmp7) {
                                            if (cResult[31] === isGuildCollaboration) {
                                              if (cResult[32] === saving) {
                                                if (cResult[33] === supportsCollaboratorRoles) {
                                                  let tmp20 = cResult[34];
                                                }
                                                if (cResult[35] !== saveError) {
                                                  let tmp26 = null;
                                                  if (null != saveError) {
                                                    let obj2 = { accessibilityRole: "alert", children: null };
                                                    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: saveError };
                                                    obj2.children = closure_8(tmp(handleFlagChange[15]).Text, obj3);
                                                    tmp26 = closure_8(View, obj2);
                                                  }
                                                  cResult[35] = saveError;
                                                  cResult[36] = tmp26;
                                                  let tmp25 = tmp26;
                                                } else {
                                                  tmp25 = cResult[36];
                                                }
                                                if (cResult[37] === tmp4.content) {
                                                  if (cResult[38] === tmp8) {
                                                    if (cResult[39] === tmp11) {
                                                      if (cResult[40] === tmp14) {
                                                        if (cResult[41] === tmp17) {
                                                          if (cResult[42] === tmp20) {
                                                            if (cResult[43] === tmp25) {
                                                              let tmp29 = cResult[44];
                                                            }
                                                            const _Symbol = Symbol;
                                                            if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
                                                              const intl9 = tmp(handleFlagChange[13]).intl;
                                                              const stringResult = intl9.string(selectedRoleIds(handleFlagChange[14])["4liZ45"]);
                                                              const intl10 = tmp(handleFlagChange[13]).intl;
                                                              const stringResult1 = intl10.string(selectedRoleIds(handleFlagChange[14]).I5cl7p);
                                                              cResult[45] = stringResult1;
                                                              cResult[46] = stringResult;
                                                              let tmp35 = stringResult;
                                                              let tmp34 = stringResult1;
                                                            } else {
                                                              tmp34 = cResult[45];
                                                              tmp35 = cResult[46];
                                                            }
                                                            if (cResult[47] === handleSmartContextChange) {
                                                              if (cResult[48] === saving) {
                                                                if (cResult[49] === smartContext.checked) {
                                                                  let tmp38 = cResult[50];
                                                                }
                                                                const _Symbol2 = Symbol;
                                                                if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                                                                  const intl11 = tmp(handleFlagChange[13]).intl;
                                                                  const stringResult2 = intl11.string(selectedRoleIds(handleFlagChange[14]).mpjaVm);
                                                                  const intl12 = tmp(handleFlagChange[13]).intl;
                                                                  const stringResult3 = intl12.string(selectedRoleIds(handleFlagChange[14])["2PxChh"]);
                                                                  cResult[51] = stringResult2;
                                                                  cResult[52] = stringResult3;
                                                                  let tmp42 = stringResult3;
                                                                  let tmp41 = stringResult2;
                                                                } else {
                                                                  tmp41 = cResult[51];
                                                                  tmp42 = cResult[52];
                                                                }
                                                                if (cResult[53] === handleRequireHostApprovalChange) {
                                                                  if (cResult[54] === hostApproval.checked) {
                                                                    if (cResult[55] === saving) {
                                                                      let tmp45 = cResult[56];
                                                                    }
                                                                    if (cResult[57] === tmp38) {
                                                                      if (cResult[58] === tmp45) {
                                                                        let tmp48 = cResult[59];
                                                                      }
                                                                      if (cResult[60] !== projectId) {
                                                                        const obj4 = { projectId };
                                                                        const tmp53 = closure_8(tmp(handleFlagChange[25]).ConjureAllowedHostsSetting, obj4);
                                                                        cResult[60] = projectId;
                                                                        cResult[61] = tmp53;
                                                                        let tmp51 = tmp53;
                                                                      } else {
                                                                        tmp51 = cResult[61];
                                                                      }
                                                                      if (cResult[62] !== experimentalError) {
                                                                        let tmp55 = null;
                                                                        if (null != experimentalError) {
                                                                          const obj5 = { accessibilityRole: "alert", children: null };
                                                                          const obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: experimentalError };
                                                                          obj5.children = closure_8(tmp(handleFlagChange[15]).Text, obj6);
                                                                          tmp55 = closure_8(View, obj5);
                                                                        }
                                                                        cResult[62] = experimentalError;
                                                                        cResult[63] = tmp55;
                                                                        let tmp54 = tmp55;
                                                                      } else {
                                                                        tmp54 = cResult[63];
                                                                      }
                                                                      if (cResult[64] === tmp4.content) {
                                                                        if (cResult[65] === tmp48) {
                                                                          if (cResult[66] === tmp51) {
                                                                            if (cResult[67] === tmp54) {
                                                                              let tmp58 = cResult[68];
                                                                            }
                                                                            if (cResult[69] === canSave) {
                                                                              if (cResult[70] === tmp58) {
                                                                                if (cResult[71] === tmp29) {
                                                                                  if (cResult[72] === nameChanged) {
                                                                                    if (cResult[73] === saving) {
                                                                                      if (cResult[74] === submit) {
                                                                                        let tmp62 = cResult[75];
                                                                                      }
                                                                                      return tmp62;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                            const obj7 = { fields: tmp29, experimentalFields: tmp58, canSave, saving, nameChanged, submit };
                                                                            cResult[69] = canSave;
                                                                            cResult[70] = tmp58;
                                                                            cResult[71] = tmp29;
                                                                            cResult[72] = nameChanged;
                                                                            cResult[73] = saving;
                                                                            cResult[74] = submit;
                                                                            cResult[75] = obj7;
                                                                            tmp62 = obj7;
                                                                          }
                                                                        }
                                                                      }
                                                                      const obj9 = { style: tmp4.content, children: null };
                                                                      let items = [tmp48, tmp51, tmp54];
                                                                      obj9.children = items;
                                                                      const tmp61 = closure_9(View, obj9);
                                                                      cResult[64] = tmp4.content;
                                                                      cResult[65] = tmp48;
                                                                      cResult[66] = tmp51;
                                                                      cResult[67] = tmp54;
                                                                      cResult[68] = tmp61;
                                                                      tmp58 = tmp61;
                                                                    }
                                                                    const obj10 = { hasIcons: false, children: null };
                                                                    const items1 = [tmp38, tmp45];
                                                                    obj10.children = items1;
                                                                    const tmp50 = closure_9(tmp(handleFlagChange[19]).TableRowGroup, obj10);
                                                                    cResult[57] = tmp38;
                                                                    cResult[58] = tmp45;
                                                                    cResult[59] = tmp50;
                                                                    tmp48 = tmp50;
                                                                  }
                                                                }
                                                                const obj11 = { label: tmp41, subLabel: tmp42, checked: hostApproval.checked, disabled: saving, onPress: handleRequireHostApprovalChange };
                                                                const tmp47 = closure_8(tmp(handleFlagChange[20]).TableCheckboxRow, obj11);
                                                                cResult[53] = handleRequireHostApprovalChange;
                                                                cResult[54] = hostApproval.checked;
                                                                cResult[55] = saving;
                                                                cResult[56] = tmp47;
                                                                tmp45 = tmp47;
                                                              }
                                                            }
                                                            const obj12 = { label: tmp35, subLabel: tmp34, checked: smartContext.checked, disabled: saving, onPress: handleSmartContextChange };
                                                            const tmp40 = closure_8(tmp(handleFlagChange[20]).TableCheckboxRow, obj12);
                                                            cResult[47] = handleSmartContextChange;
                                                            cResult[48] = saving;
                                                            cResult[49] = smartContext.checked;
                                                            cResult[50] = tmp40;
                                                            tmp38 = tmp40;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj13 = { style: tmp4.content, children: null };
                                                const items2 = [tmp8, tmp11, tmp14, tmp17, tmp20, tmp25];
                                                obj13.children = items2;
                                                const tmp32 = closure_9(View, obj13);
                                                cResult[37] = tmp4.content;
                                                cResult[38] = tmp8;
                                                cResult[39] = tmp11;
                                                cResult[40] = tmp14;
                                                cResult[41] = tmp17;
                                                cResult[42] = tmp20;
                                                cResult[43] = tmp25;
                                                cResult[44] = tmp32;
                                                tmp29 = tmp32;
                                              }
                                            }
                                          }
                                          let tmp22Result = null;
                                          if (supportsCollaboratorRoles) {
                                            const obj14 = { label: null, subLabel: null, arrow: true, disabled: null, accessibilityHint: null, onPress: null };
                                            const intl6 = tmp(handleFlagChange[13]).intl;
                                            obj14.label = intl6.string(selectedRoleIds(handleFlagChange[14])["pO3+p5"]);
                                            const intl7 = tmp(handleFlagChange[13]).intl;
                                            obj14.subLabel = intl7.string(selectedRoleIds(handleFlagChange[14])["9MdtK9"]);
                                            let tmp23 = saving;
                                            if (!saving) {
                                              tmp23 = !isGuildCollaboration;
                                            }
                                            obj14.disabled = tmp23;
                                            let stringResult4;
                                            if (!isGuildCollaboration) {
                                              const intl8 = tmp(handleFlagChange[13]).intl;
                                              stringResult4 = intl8.string(selectedRoleIds(handleFlagChange[14]).nZw5r9);
                                            }
                                            const obj15 = { hasIcons: false, children: null };
                                            obj14.accessibilityHint = stringResult4;
                                            obj14.onPress = tmp7;
                                            obj15.children = closure_8(tmp(handleFlagChange[24]).TableRow, obj14);
                                            tmp22Result = closure_8(tmp(handleFlagChange[19]).TableRowGroup, obj15);
                                          }
                                          cResult[30] = tmp7;
                                          cResult[31] = isGuildCollaboration;
                                          cResult[32] = saving;
                                          cResult[33] = supportsCollaboratorRoles;
                                          cResult[34] = tmp22Result;
                                          tmp20 = tmp22Result;
                                        }
                                      }
                                    }
                                  }
                                  let tmp18 = null;
                                  if (liveReload.available) {
                                    const obj16 = { hasIcons: false, children: null };
                                    const obj17 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
                                    const intl5 = tmp(handleFlagChange[13]).intl;
                                    obj17.label = intl5.string(selectedRoleIds(handleFlagChange[14]).eEo0ye);
                                    ({ description: obj8.subLabel, checked: obj8.checked } = liveReload);
                                    obj17.disabled = saving;
                                    obj17.onPress = handleLiveReloadChange;
                                    obj16.children = closure_8(tmp(handleFlagChange[20]).TableCheckboxRow, obj17);
                                    tmp18 = closure_8(tmp(handleFlagChange[19]).TableRowGroup, obj16);
                                  }
                                  cResult[24] = handleLiveReloadChange;
                                  cResult[25] = liveReload.available;
                                  cResult[26] = liveReload.checked;
                                  cResult[27] = liveReload.description;
                                  cResult[28] = saving;
                                  cResult[29] = tmp18;
                                  tmp17 = tmp18;
                                }
                              }
                            }
                          }
                          let tmp15 = null;
                          if (supportsVisibility) {
                            tmp15 = null;
                            if (supportsCollaboration) {
                              const obj18 = { hasIcons: false, children: null };
                              const obj19 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
                              const intl3 = tmp(handleFlagChange[13]).intl;
                              obj19.label = intl3.string(selectedRoleIds(handleFlagChange[14]).lVvR4E);
                              const intl4 = tmp(handleFlagChange[13]).intl;
                              obj19.subLabel = intl4.string(selectedRoleIds(handleFlagChange[14]).SQZGoV);
                              obj19.checked = isGuildCollaboration;
                              obj19.disabled = saving;
                              obj19.onPress = function onPress(arg0) {
                                return handleFlagChange(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
                              };
                              obj18.children = closure_8(tmp(handleFlagChange[20]).TableCheckboxRow, obj19);
                              tmp15 = closure_8(tmp(handleFlagChange[19]).TableRowGroup, obj18);
                            }
                          }
                          cResult[18] = handleFlagChange;
                          cResult[19] = isGuildCollaboration;
                          cResult[20] = saving;
                          cResult[21] = supportsCollaboration;
                          cResult[22] = supportsVisibility;
                          cResult[23] = tmp15;
                          tmp14 = tmp15;
                        }
                      }
                    }
                    let tmp12 = null;
                    if (supportsVisibility) {
                      const obj20 = { hasIcons: false, children: null };
                      const obj21 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
                      const intl = tmp(handleFlagChange[13]).intl;
                      obj21.label = intl.string(selectedRoleIds(handleFlagChange[14]).ujIxRm);
                      const intl2 = tmp(handleFlagChange[13]).intl;
                      obj21.subLabel = intl2.string(selectedRoleIds(handleFlagChange[14]).gT8zk1);
                      obj21.checked = isPublic;
                      obj21.disabled = saving;
                      obj21.onPress = function onPress(arg0) {
                        return handleFlagChange(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
                      };
                      obj20.children = closure_8(tmp(handleFlagChange[20]).TableCheckboxRow, obj21);
                      tmp12 = closure_8(tmp(handleFlagChange[19]).TableRowGroup, obj20);
                    }
                    cResult[13] = handleFlagChange;
                    cResult[14] = isPublic;
                    cResult[15] = saving;
                    cResult[16] = supportsVisibility;
                    cResult[17] = tmp12;
                    tmp11 = tmp12;
                  }
                }
              }
            }
          }
        }
      }
      const obj41 = { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: saving };
      const tmp10 = closure_8(tmp(handleFlagChange[23]).ConjureAppIdentitySection, obj41);
      cResult[4] = description;
      cResult[5] = handleDescriptionChange;
      cResult[6] = handleIconChange;
      cResult[7] = handleNameChange;
      cResult[8] = iconURL;
      cResult[9] = name;
      cResult[10] = nameError;
      cResult[11] = saving;
      cResult[12] = tmp10;
      tmp8 = tmp10;
    }
  }
  const fn = function o() {
    if (null != closure_0) {
      const obj2 = { content: null, key: null, stackingBehavior: "stack" };
      const obj3 = { guildId: tmp, initialSelectedRoleIds: null, onSave: null };
      const _Set = Set;
      const set = new Set(selectedRoleIds);
      obj3.initialSelectedRoleIds = set;
      obj3.onSave = function onSave(arg0) {
        const items = [...arg0];
        return handleRoleSelectionChange(items);
      };
      obj2.content = closure_2_8(closure_14, obj3);
      obj2.key = ConjureCollaboratorRolesSheet;
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  };
  cResult[0] = arg1;
  cResult[1] = handleRoleSelectionChange;
  cResult[2] = selectedRoleIds;
  cResult[3] = fn;
  tmp7 = fn;
  let obj = require("c");
}) : (function useConjureProjectSettingsForm(projectId, arg1) {
  _require = arg1;
  const tmp = closure_11();
  const tmp4 = selectedRoleIds(12218)(projectId, arg1);
  ({ liveReload, isGuildCollaboration, selectedRoleIds } = tmp4);
  ({ supportsVisibility, saving, saveError, experimentalError, handleFlagChange: dependencyMap, handleRoleSelectionChange } = tmp4);
  let items = [arg1, handleRoleSelectionChange, selectedRoleIds];
  ({ iconURL, description, smartContext, hostApproval, name, nameError, nameChanged, isPublic, supportsCollaboration, supportsCollaboratorRoles, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleLiveReloadChange, handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp4);
  let obj = { style: tmp.content, children: null };
  const callback = noop.useCallback(() => {
    if (null != closure_0) {
      const obj2 = { content: null, key: null, stackingBehavior: "stack" };
      const obj3 = { guildId: tmp, initialSelectedRoleIds: null, onSave: null };
      const _Set = Set;
      const set = new Set(selectedRoleIds);
      obj3.initialSelectedRoleIds = set;
      obj3.onSave = function onSave(arg0) {
        const items = [...arg0];
        return handleRoleSelectionChange(items);
      };
      obj2.content = closure_2_8(closure_14, obj3);
      obj2.key = ConjureCollaboratorRolesSheet;
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items);
  const items1 = [closure_8(require("ConjureAppIdentity").ConjureAppIdentitySection, { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: saving }), , , , , ];
  let tmp8Result = null;
  if (supportsVisibility) {
    let obj2 = { hasIcons: false, children: null };
    let obj3 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl = tmp9(1125).intl;
    obj3.label = intl.string(selectedRoleIds(3863).ujIxRm);
    const intl2 = tmp9(1125).intl;
    obj3.subLabel = intl2.string(selectedRoleIds(3863).gT8zk1);
    obj3.checked = isPublic;
    obj3.disabled = saving;
    obj3.onPress = function onPress(arg0) {
      return dependencyMap(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
    };
    obj2.children = closure_8(tmp9(6936).TableCheckboxRow, obj3);
    tmp8Result = closure_8(tmp9(7023).TableRowGroup, obj2);
  }
  items1[1] = tmp8Result;
  let tmp8Result6 = null;
  if (supportsVisibility) {
    tmp8Result6 = null;
    if (supportsCollaboration) {
      const obj4 = { hasIcons: false, children: null };
      const obj5 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
      const intl3 = tmp9(1125).intl;
      obj5.label = intl3.string(selectedRoleIds(3863).lVvR4E);
      const intl4 = tmp9(1125).intl;
      obj5.subLabel = intl4.string(selectedRoleIds(3863).SQZGoV);
      obj5.checked = isGuildCollaboration;
      obj5.disabled = saving;
      obj5.onPress = function onPress(arg0) {
        return dependencyMap(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
      };
      obj4.children = closure_8(tmp9(6936).TableCheckboxRow, obj5);
      tmp8Result6 = closure_8(tmp9(7023).TableRowGroup, obj4);
    }
  }
  items1[2] = tmp8Result6;
  let tmp8Result7 = null;
  if (liveReload.available) {
    const obj6 = { hasIcons: false, children: null };
    const obj8 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl5 = tmp9(1125).intl;
    obj8.label = intl5.string(selectedRoleIds(3863).eEo0ye);
    ({ description: obj7.subLabel, checked: obj7.checked } = liveReload);
    obj8.disabled = saving;
    obj8.onPress = handleLiveReloadChange;
    obj6.children = closure_8(tmp9(6936).TableCheckboxRow, obj8);
    tmp8Result7 = closure_8(tmp9(7023).TableRowGroup, obj6);
  }
  items1[3] = tmp8Result7;
  let tmp8Result8 = null;
  if (supportsCollaboratorRoles) {
    const obj9 = { label: null, subLabel: null, arrow: true, disabled: null, accessibilityHint: null, onPress: null };
    const intl6 = tmp9(1125).intl;
    obj9.label = intl6.string(selectedRoleIds(3863)["pO3+p5"]);
    const intl7 = tmp9(1125).intl;
    obj9.subLabel = intl7.string(selectedRoleIds(3863)["9MdtK9"]);
    let tmp14 = saving;
    if (!saving) {
      tmp14 = !isGuildCollaboration;
    }
    obj9.disabled = tmp14;
    let stringResult;
    if (!isGuildCollaboration) {
      const intl8 = tmp9(1125).intl;
      stringResult = intl8.string(selectedRoleIds(3863).nZw5r9);
    }
    const obj10 = { hasIcons: false, children: null };
    obj9.accessibilityHint = stringResult;
    obj9.onPress = callback;
    obj10.children = closure_8(tmp9(6939).TableRow, obj9);
    tmp8Result8 = closure_8(tmp9(7023).TableRowGroup, obj10);
  }
  items1[4] = tmp8Result8;
  let tmp8Result9 = null;
  if (null != saveError) {
    const obj11 = { accessibilityRole: "alert", children: null };
    const obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", children: saveError };
    obj11.children = closure_8(tmp9(5270).Text, obj12);
    tmp8Result9 = closure_8(View, obj11);
  }
  const obj13 = { fields: closure_9(View, obj), experimentalFields: null, canSave: null, saving: null, nameChanged: null, submit: null };
  items1[5] = tmp8Result9;
  obj.children = items1;
  const obj14 = { style: tmp.content, children: null };
  const obj15 = { hasIcons: false, children: null };
  const obj16 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl9 = tmp9(1125).intl;
  obj16.label = intl9.string(selectedRoleIds(3863)["4liZ45"]);
  const intl10 = tmp9(1125).intl;
  obj16.subLabel = intl10.string(selectedRoleIds(3863).I5cl7p);
  obj16.checked = smartContext.checked;
  obj16.disabled = saving;
  obj16.onPress = handleSmartContextChange;
  const items2 = [closure_8(require("TableCheckboxRow").TableCheckboxRow, obj16), ];
  const obj17 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl11 = tmp9(1125).intl;
  obj17.label = intl11.string(selectedRoleIds(3863).mpjaVm);
  const intl12 = tmp9(1125).intl;
  obj17.subLabel = intl12.string(selectedRoleIds(3863)["2PxChh"]);
  obj17.checked = hostApproval.checked;
  obj17.disabled = saving;
  obj17.onPress = handleRequireHostApprovalChange;
  items2[1] = closure_8(require("TableCheckboxRow").TableCheckboxRow, obj17);
  obj15.children = items2;
  const items3 = [closure_9(require("TableRowGroup").TableRowGroup, obj15), closure_8(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, { projectId }), ];
  let tmp8Result10 = null;
  if (null != experimentalError) {
    const obj19 = { accessibilityRole: "alert", children: null };
    const obj37 = { variant: "text-xs/normal", color: "text-feedback-critical", children: experimentalError };
    obj19.children = closure_8(tmp9(5270).Text, obj37);
    tmp8Result10 = closure_8(View, obj19);
  }
  items3[2] = tmp8Result10;
  obj14.children = items3;
  obj13.experimentalFields = closure_9(View, obj14);
  obj13.canSave = canSave;
  obj13.saving = saving;
  obj13.nameChanged = nameChanged;
  obj13.submit = submit;
  return obj13;
});