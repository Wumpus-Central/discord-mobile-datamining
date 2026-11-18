// === Module 18318: useConjureProjectSettingsForm ===

// Module 18318 (useConjureProjectSettingsForm)
import nativeDefault from "native" /* 575 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6530 */;
import ConjureSharingModeSheet from "ConjureSharingModeSheet" /* 18337 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4729 */;

const require = globalThis.__r;

require = fn;
function RoleColorCircle(color) {
  return React6(View, { style: closure_13(color.color).circle });
}
function ConjureCollaboratorRolesSheet(guildId) {
  guildId = guildId.guildId;
  ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
  let first;
  c7 = undefined;
  const tmp = closure_12();
  const roleLabel = tmp;
  items = [c7];
  const items1 = [guildId];
  const stateFromStoresArray = guildId(onSave[9]).useStateFromStoresArray(items, () => GuildRoleStore.getSortedRoles(guildId), items1);
  const tmp5 = stateFromStoresArray(first.useState(() => new Set(importDefault)), 2);
  first = tmp5[0];
  closure_6 = tmp5[1];
  let obj = guildId(onSave[9]);
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
        if (size.size >= guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
  let intl = guildId(onSave[12]).intl;
  const tmp7 = stateFromStoresArray(first.useState(""), 2);
  let obj2 = { count: first.size, max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES };
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, footer: null, header: null, children: null };
  const intl2 = guildId(onSave[12]).intl;
  obj3.dismissAccessibilityLabel = intl2.string(require("module_4121").un99lK);
  let formatToPlainStringResult = intl.formatToPlainString(require("module_4121").g5I05P, { count: first.size, max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES });
  obj3.footer = closure_9(closure_6, { style: tmp.roleListFooter, children: closure_9(guildId(onSave[15]).Text, { variant: "body-xs/normal", color: "text-muted", children: intl.formatToPlainString(require("module_4121").g5I05P, { count: first.size, max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES }) }) });
  const obj5 = { title: null, trailing: null };
  const intl3 = guildId(onSave[12]).intl;
  obj5.title = intl3.string(require("module_4121")["pO3+p5"]);
  const obj6 = { label: null, onPress: null };
  const intl4 = guildId(onSave[12]).intl;
  obj6.label = intl4.string(guildId(onSave[12]).t.i4jeWR);
  obj6.onPress = callback;
  obj5.trailing = closure_9(guildId(onSave[17]).ActionSheetHeaderPressableText, obj6);
  obj3.header = closure_9(guildId(onSave[16]).BottomSheetTitleHeader, obj5);
  const obj7 = { size: "md", round: true, grow: false, accessibilityLabel: null, placeholder: null, onChange: null };
  const intl5 = guildId(onSave[12]).intl;
  obj7.accessibilityLabel = intl5.string(guildId(onSave[12]).t.Sojqsr);
  const intl6 = guildId(onSave[12]).intl;
  obj7.placeholder = intl6.string(guildId(onSave[12]).t.Sojqsr);
  obj7.onChange = tmp8;
  const items4 = [closure_9(guildId(onSave[18]).SearchBar, obj7), ];
  const obj8 = { style: tmp.roleListContent, children: null };
  if (0 === memo.length) {
    const obj9 = { style: tmp.roleListEmpty, children: null };
    const obj10 = { variant: "body-md/normal", color: "text-muted", children: null };
    const intl7 = tmp2(onSave[12]).intl;
    obj10.children = intl7.string(tmp2(onSave[12]).t.V6nAfF);
    obj9.children = closure_9(tmp2(onSave[15]).Text, obj10);
    let tmp13Result = closure_9(tmp14, obj9);
  } else {
    const obj11 = {
      hasIcons: false,
      children: memo.map((children) => {
          const id = children;
          const hasItem = first.has(children.id);
          let tmp3 = !hasItem;
          if (!hasItem) {
            tmp3 = first.size >= guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES;
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
            primaryColor = closure_8;
          }
          const obj2 = { label: null, checked: null, disabled: null, accessibilityHint: null, onPress: null };
          items = [closure_1_9(RoleColorCircle, { color: primaryColor }), closure_1_9(guildId(onSave[15]).Text, { variant: "body-md/medium", children: children.name })];
          obj.children = items;
          obj2.label = closure_1_10(closure_6, obj);
          obj2.checked = hasItem;
          obj2.disabled = tmp3;
          let formatToPlainStringResult;
          if (tmp3) {
            const intl = guildId(onSave[12]).intl;
            const obj4 = { max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES };
            formatToPlainStringResult = intl.formatToPlainString(require("module_4121")["dH7+/Z"], obj4);
          }
          obj2.accessibilityHint = formatToPlainStringResult;
          obj2.onPress = function onPress(arg0) {
            return closure_8(id.id, arg0);
          };
          return closure_1_9(guildId(onSave[20]).TableCheckboxRow, obj2, children.id);
        })
    };
    tmp13Result = closure_9(tmp2(onSave[19]).TableRowGroup, obj11);
  }
  obj8.children = tmp13Result;
  items4[1] = closure_9(closure_6, obj8);
  obj3.children = items4;
  return closure_10(guildId(onSave[14]).ActionSheet, obj3);
}
const View = fn(17).View;
const DEFAULT_ROLE_COLOR_HEX = fn(1072).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
ConjureCollaboratorRolesSheet = "ConjureCollaboratorRolesSheet";
let createStyles = fn(4823);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, roleLabel: null, roleListContent: null, roleListEmpty: null, roleListFooter: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.roleLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.roleListContent = { paddingBottom: nativeDefault.space.PX_64 };
let obj5 = { paddingBottom: nativeDefault.space.PX_64 };
obj2.roleListEmpty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let obj6 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj2.roleListFooter = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_12 = createStyles.createStyles(obj2);
createStyles = fn(4823);
let closure_13 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: null };
  const size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  obj.circle = size;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureProjectSettingsForm.tsx");

export default function useConjureProjectSettingsForm(projectId, arg1) {
  _require = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.readOnly;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  sharingOptions = undefined;
  selectedRoleIds = undefined;
  c4 = undefined;
  noop = undefined;
  handleRoleSelectionChange = undefined;
  const tmp = closure_12();
  const tmp3 = sharingOptions;
  const tmp4 = require("useConjureProjectSettingsDraft")(projectId, arg1);
  ({ liveReload, sharingMode: c1, sharingOptions } = tmp4);
  ({ canChangeSharing, isGuildCollaboration, selectedRoleIds } = tmp4);
  ({ supportsVisibility, saving, saveError, experimentalError, handleFlagChange: c4, handleSharingModeChange: c5, handleRoleSelectionChange } = tmp4);
  const ensureAppInGuild = tmp4.ensureAppInGuild;
  ({ iconURL, description, smartContext, hostApproval, name, nameError, nameChanged, usesPreviewApp, canChangePreviewApp, supportsCollaboration, supportsCollaboratorRoles, checkingAppInGuild, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleUsesPreviewAppChange, handleLiveReloadChange, handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp4);
  const found = sharingOptions.find((value) => value.value === c1);
  let tmp6 = saving;
  if (!saving) {
    tmp6 = flag;
  }
  const isConjureManagedCopy = require("useConjureManagedCopy").useIsConjureManagedCopy(projectId);
  items = [ensureAppInGuild, arg1, handleRoleSelectionChange, selectedRoleIds];
  let obj3 = { style: tmp.content, children: null };
  let tmp12 = null;
  const callback = noop.useCallback(selectedRoleIds(function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp3;
            if (null != tmp3) {
              sharingOptions = 1;
              c3 = 2;
              c4 = 1;
              const obj4 = { value: ensureAppInGuild(), done: false };
              return obj4;
            } else {
              c4 = 3;
            }
          }
        } else if (1 === tmp7) {
          sharingOptions = 0;
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          sharingOptions = 0;
          if (value) {
            const obj5 = { content: null, key: null, stackingBehavior: "stack" };
            const obj6 = { guildId: closure_129_0, initialSelectedRoleIds: null, onSave: null };
            const _Set = Set;
            const set = new Set(closure_129_3);
            obj6.initialSelectedRoleIds = set;
            obj6.onSave = function onSave(arg0) {
              items = [...arg0];
              return closure_1_6(items);
            };
            obj5.content = closure_1_9(ConjureCollaboratorRolesSheet, obj6);
            obj5.key = key;
            tmp3(sharingOptions[11]).showActionSheet(obj5);
            const obj = tmp3(sharingOptions[11]);
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
        sharingOptions = 0;
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } catch (tmp24) {
        if (tmp4 === sharingOptions) {
          c4 = tmp2;
          throw tmp24;
        } else {
          c3 = tmp;
        }
      }
    }
  }), items);
  if (flag) {
    let obj4 = { variant: "body-sm/normal", color: "text-muted", children: null };
    const intl = tmp7(tmp3[12]).intl;
    obj4.children = intl.string(tmp2(tmp3[13]).s7VnVF);
    tmp12 = closure_9(tmp7(tmp3[15]).Text, obj4);
  }
  const items1 = [tmp12, , , , , , , , , ];
  if (isConjureManagedCopy) {
    let obj5 = { projectId };
    let tmp14Result = closure_9(tmp2(tmp3[23]), obj5);
    let tmp16 = closure_9;
  } else {
    let obj6 = { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: tmp6 };
    tmp14Result = closure_9(tmp7(tmp3[24]).ConjureAppIdentitySection, obj6);
    tmp16 = closure_9;
  }
  items1[1] = tmp14Result;
  let tmp16Result10 = null;
  if (supportsVisibility) {
    tmp16Result10 = null;
    if (!isConjureManagedCopy) {
      let obj7 = { label: null, trailing: null, arrow: null, disabled: null, onPress: null };
      const intl2 = tmp7(tmp3[12]).intl;
      obj7.label = intl2.string(tmp2(tmp3[13]).jDBYrs);
      let tmp16Result;
      if (null != found) {
        const obj8 = { text: found.label };
        tmp16Result = tmp16(tmp7(tmp3[25]).TableRow.TrailingText, obj8);
      }
      obj7.trailing = tmp16Result;
      let tmp19 = !tmp6;
      if (!tmp6) {
        tmp19 = canChangeSharing;
      }
      obj7.arrow = tmp19;
      let tmp20 = tmp6;
      if (!tmp6) {
        tmp20 = !canChangeSharing;
      }
      const obj9 = { hasIcons: false, children: null };
      obj7.disabled = tmp20;
      obj7.onPress = function onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        return obj.openLazy(asyncRequireImpl(18337, dependencyMap.paths), ConjureSharingModeSheet.CONJURE_SHARING_MODE_SHEET_KEY, { options: sharingOptions, value, onChange }, "stack");
      };
      obj9.children = tmp16(tmp7(tmp3[25]).TableRow, obj7);
      tmp16Result10 = tmp16(tmp7(tmp3[19]).TableRowGroup, obj9);
    }
  }
  items1[2] = tmp16Result10;
  let tmp16Result11 = null;
  if (!flag) {
    const obj10 = { projectId };
    tmp16Result11 = tmp16(tmp2(tmp3[29]), obj10);
  }
  items1[3] = tmp16Result11;
  let tmp16Result12 = null;
  if (supportsVisibility) {
    tmp16Result12 = null;
    if (supportsCollaboration) {
      const obj11 = { hasIcons: false, children: null };
      const obj12 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
      const intl3 = tmp7(tmp3[12]).intl;
      obj12.label = intl3.string(tmp2(tmp3[13]).lVvR4E);
      const intl4 = tmp7(tmp3[12]).intl;
      obj12.subLabel = intl4.string(tmp2(tmp3[13]).SQZGoV);
      obj12.checked = isGuildCollaboration;
      obj12.disabled = tmp6;
      obj12.onPress = function onPress(arg0) {
        return _undefined(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
      };
      obj11.children = tmp16(tmp7(tmp3[20]).TableCheckboxRow, obj12);
      tmp16Result12 = tmp16(tmp7(tmp3[19]).TableRowGroup, obj11);
    }
  }
  items1[4] = tmp16Result12;
  let tmp16Result13 = null;
  if (canChangePreviewApp) {
    const obj13 = { hasIcons: false, children: null };
    const obj14 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl5 = tmp7(tmp3[12]).intl;
    obj14.label = intl5.string(tmp2(tmp3[13]).DV2hcV);
    const intl6 = tmp7(tmp3[12]).intl;
    obj14.subLabel = intl6.string(tmp2(tmp3[13]).yjWIzb);
    obj14.checked = usesPreviewApp;
    obj14.disabled = tmp6;
    obj14.onPress = handleUsesPreviewAppChange;
    obj13.children = tmp16(tmp7(tmp3[20]).TableCheckboxRow, obj14);
    tmp16Result13 = tmp16(tmp7(tmp3[19]).TableRowGroup, obj13);
  }
  items1[5] = tmp16Result13;
  let tmp16Result14 = null;
  if (liveReload.available) {
    const obj15 = { hasIcons: false, children: null };
    const obj17 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl7 = tmp7(tmp3[12]).intl;
    obj17.label = intl7.string(tmp2(tmp3[13]).eEo0ye);
    ({ description: obj16.subLabel, checked: obj16.checked } = liveReload);
    obj17.disabled = tmp6;
    obj17.onPress = handleLiveReloadChange;
    obj15.children = tmp16(tmp7(tmp3[20]).TableCheckboxRow, obj17);
    tmp16Result14 = tmp16(tmp7(tmp3[19]).TableRowGroup, obj15);
  }
  items1[6] = tmp16Result14;
  let tmp16Result15 = null;
  if (supportsCollaboratorRoles) {
    const obj18 = { label: null, subLabel: null, arrow: true, disabled: null, accessibilityHint: null, onPress: null };
    const intl8 = tmp7(tmp3[12]).intl;
    obj18.label = intl8.string(tmp2(tmp3[13])["pO3+p5"]);
    const intl9 = tmp7(tmp3[12]).intl;
    obj18.subLabel = intl9.string(tmp2(tmp3[13])["9MdtK9"]);
    if (!tmp6) {
      tmp6 = !isGuildCollaboration;
    }
    if (!tmp6) {
      tmp6 = checkingAppInGuild;
    }
    obj18.disabled = tmp6;
    let stringResult;
    if (!isGuildCollaboration) {
      const intl10 = tmp7(tmp3[12]).intl;
      stringResult = intl10.string(tmp2(tmp3[13]).nZw5r9);
    }
    const obj19 = { hasIcons: false, children: null };
    obj18.accessibilityHint = stringResult;
    obj18.onPress = callback;
    obj19.children = tmp16(tmp7(tmp3[25]).TableRow, obj18);
    tmp16Result15 = tmp16(tmp7(tmp3[19]).TableRowGroup, obj19);
  }
  items1[7] = tmp16Result15;
  let tmp16Result16 = null;
  if (!flag) {
    const obj20 = { projectId };
    tmp16Result16 = tmp16(tmp2(tmp3[30]), obj20);
  }
  items1[8] = tmp16Result16;
  let tmp16Result17 = null;
  if (null != saveError) {
    const obj21 = { accessibilityRole: "alert", children: null };
    const obj22 = { variant: "body-xs/normal", color: "text-feedback-critical", children: saveError };
    obj21.children = tmp16(tmp7(tmp3[15]).Text, obj22);
    tmp16Result17 = tmp16(tmp11, obj21);
  }
  const obj23 = { fields: closure_10(handleRoleSelectionChange, obj3), experimentalFields: null, canSave: null, saving: null, nameChanged: null, submit: null };
  items1[9] = tmp16Result17;
  obj3.children = items1;
  const obj24 = { style: tmp.content, children: null };
  const obj25 = { hasIcons: false, children: null };
  const obj26 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl11 = tmp7(tmp3[12]).intl;
  obj26.label = intl11.string(require("module_4121")["4liZ45"]);
  const intl12 = tmp7(tmp3[12]).intl;
  obj26.subLabel = intl12.string(require("module_4121").I5cl7p);
  obj26.checked = smartContext.checked;
  obj26.disabled = saving;
  obj26.onPress = handleSmartContextChange;
  const items2 = [tmp16(require("TableCheckboxRow").TableCheckboxRow, obj26), ];
  const obj27 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl13 = tmp7(tmp3[12]).intl;
  obj27.label = intl13.string(require("module_4121").mpjaVm);
  const intl14 = tmp7(tmp3[12]).intl;
  obj27.subLabel = intl14.string(require("module_4121")["2PxChh"]);
  obj27.checked = hostApproval.checked;
  obj27.disabled = saving;
  obj27.onPress = handleRequireHostApprovalChange;
  items2[1] = tmp16(require("TableCheckboxRow").TableCheckboxRow, obj27);
  obj25.children = items2;
  const items3 = [closure_10(require("TableRowGroup").TableRowGroup, obj25), tmp16(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, { projectId }), ];
  let tmp16Result18 = null;
  if (null != experimentalError) {
    const obj29 = { accessibilityRole: "alert", children: null };
    const obj56 = { variant: "body-xs/normal", color: "text-feedback-critical", children: experimentalError };
    obj29.children = tmp16(tmp7(tmp3[15]).Text, obj56);
    tmp16Result18 = tmp16(tmp11, obj29);
  }
  items3[2] = tmp16Result18;
  obj24.children = items3;
  obj23.experimentalFields = closure_10(handleRoleSelectionChange, obj24);
  obj23.canSave = canSave;
  obj23.saving = saving;
  obj23.nameChanged = nameChanged;
  obj23.submit = submit;
  return obj23;
};