// === Module 12302: useConjureProjectSettingsForm ===

// Module 12302 (useConjureProjectSettingsForm)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6903 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 5048 */;

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
  obj3.dismissAccessibilityLabel = intl2.string(require("module_4028").un99lK);
  let formatToPlainStringResult = intl.formatToPlainString(require("module_4028").g5I05P, { count: first.size, max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES });
  obj3.footer = closure_9(closure_6, { style: tmp.roleListFooter, children: closure_9(guildId(onSave[15]).Text, { variant: "body-xs/normal", color: "text-muted", children: intl.formatToPlainString(require("module_4028").g5I05P, { count: first.size, max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES }) }) });
  const obj5 = { title: null, trailing: null };
  const intl3 = guildId(onSave[12]).intl;
  obj5.title = intl3.string(require("module_4028")["pO3+p5"]);
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
            formatToPlainStringResult = intl.formatToPlainString(require("module_4028")["dH7+/Z"], obj4);
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
let createStyles = fn(5142);
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
createStyles = fn(5142);
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
  selectedRoleIds = undefined;
  dependencyMap = undefined;
  handleRoleSelectionChange = undefined;
  const tmp = closure_12();
  const tmp4 = selectedRoleIds(12303)(projectId, arg1);
  ({ liveReload, isGuildCollaboration, selectedRoleIds } = tmp4);
  ({ supportsVisibility, saving, saveError, experimentalError, handleFlagChange: c2, handleRoleSelectionChange } = tmp4);
  const ensureAppInGuild = tmp4.ensureAppInGuild;
  let tmp5 = saving;
  ({ iconURL, description, smartContext, hostApproval, name, nameError, nameChanged, isPublic, usesPreviewApp, canChangePreviewApp, supportsCollaboration, supportsCollaboratorRoles, checkingAppInGuild, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleUsesPreviewAppChange, handleLiveReloadChange, handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp4);
  if (!saving) {
    tmp5 = flag;
  }
  const isConjureManagedCopy = require("useConjureManagedCopy").useIsConjureManagedCopy(projectId);
  items = [ensureAppInGuild, arg1, handleRoleSelectionChange, selectedRoleIds];
  let obj3 = { style: tmp.content, children: null };
  let tmp11 = null;
  const callback = noop.useCallback(handleRoleSelectionChange(function*() {
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
              dependencyMap = 1;
              c3 = 2;
              c4 = 1;
              const obj4 = { value: ensureAppInGuild(), done: false };
              return obj4;
            } else {
              c4 = 3;
            }
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          dependencyMap = 0;
          if (value) {
            const obj5 = { content: null, key: null, stackingBehavior: "stack" };
            const obj6 = { guildId: closure_129_0, initialSelectedRoleIds: null, onSave: null };
            const _Set = Set;
            const set = new Set(closure_129_1);
            obj6.initialSelectedRoleIds = set;
            obj6.onSave = function onSave(arg0) {
              items = [...arg0];
              return closure_1_3(items);
            };
            obj5.content = closure_1_9(ConjureCollaboratorRolesSheet, obj6);
            obj5.key = key;
            tmp3(dependencyMap[11]).showActionSheet(obj5);
            const obj = tmp3(dependencyMap[11]);
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
        dependencyMap = 0;
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } catch (tmp24) {
        if (tmp4 === dependencyMap) {
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
    const intl = tmp6(1113).intl;
    obj4.children = intl.string(tmp2(4028).s7VnVF);
    tmp11 = closure_9(tmp6(5753).Text, obj4);
  }
  const items1 = [tmp11, , , , , , , , ];
  if (isConjureManagedCopy) {
    let obj5 = { projectId };
    let tmp13Result = closure_9(tmp2(12308), obj5);
    let tmp15 = closure_9;
  } else {
    let obj6 = { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: tmp5 };
    tmp13Result = closure_9(tmp6(12289).ConjureAppIdentitySection, obj6);
    tmp15 = closure_9;
  }
  items1[1] = tmp13Result;
  let tmp15Result = null;
  if (supportsVisibility) {
    tmp15Result = null;
    if (!isConjureManagedCopy) {
      let obj7 = { hasIcons: false, children: null };
      const obj8 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
      const intl2 = tmp6(1113).intl;
      obj8.label = intl2.string(tmp2(4028).ujIxRm);
      const intl3 = tmp6(1113).intl;
      obj8.subLabel = intl3.string(tmp2(4028).gT8zk1);
      obj8.checked = isPublic;
      obj8.disabled = tmp5;
      obj8.onPress = function onPress(arg0) {
        return _undefined(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
      };
      obj7.children = tmp15(tmp6(7040).TableCheckboxRow, obj8);
      tmp15Result = tmp15(tmp6(7129).TableRowGroup, obj7);
    }
  }
  items1[2] = tmp15Result;
  let tmp15Result8 = null;
  if (!flag) {
    const obj9 = { projectId };
    tmp15Result8 = tmp15(tmp2(12310), obj9);
  }
  items1[3] = tmp15Result8;
  let tmp15Result9 = null;
  if (supportsVisibility) {
    tmp15Result9 = null;
    if (supportsCollaboration) {
      const obj10 = { hasIcons: false, children: null };
      const obj11 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
      const intl4 = tmp6(1113).intl;
      obj11.label = intl4.string(tmp2(4028).lVvR4E);
      const intl5 = tmp6(1113).intl;
      obj11.subLabel = intl5.string(tmp2(4028).SQZGoV);
      obj11.checked = isGuildCollaboration;
      obj11.disabled = tmp5;
      obj11.onPress = function onPress(arg0) {
        return _undefined(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
      };
      obj10.children = tmp15(tmp6(7040).TableCheckboxRow, obj11);
      tmp15Result9 = tmp15(tmp6(7129).TableRowGroup, obj10);
    }
  }
  items1[4] = tmp15Result9;
  let tmp15Result10 = null;
  if (canChangePreviewApp) {
    const obj12 = { hasIcons: false, children: null };
    const obj13 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl6 = tmp6(1113).intl;
    obj13.label = intl6.string(tmp2(4028).DV2hcV);
    const intl7 = tmp6(1113).intl;
    obj13.subLabel = intl7.string(tmp2(4028).yjWIzb);
    obj13.checked = usesPreviewApp;
    obj13.disabled = tmp5;
    obj13.onPress = handleUsesPreviewAppChange;
    obj12.children = tmp15(tmp6(7040).TableCheckboxRow, obj13);
    tmp15Result10 = tmp15(tmp6(7129).TableRowGroup, obj12);
  }
  items1[5] = tmp15Result10;
  let tmp15Result11 = null;
  if (liveReload.available) {
    const obj14 = { hasIcons: false, children: null };
    const obj16 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl8 = tmp6(1113).intl;
    obj16.label = intl8.string(tmp2(4028).eEo0ye);
    ({ description: obj15.subLabel, checked: obj15.checked } = liveReload);
    obj16.disabled = tmp5;
    obj16.onPress = handleLiveReloadChange;
    obj14.children = tmp15(tmp6(7040).TableCheckboxRow, obj16);
    tmp15Result11 = tmp15(tmp6(7129).TableRowGroup, obj14);
  }
  items1[6] = tmp15Result11;
  let tmp15Result12 = null;
  if (supportsCollaboratorRoles) {
    const obj17 = { label: null, subLabel: null, arrow: true, disabled: null, accessibilityHint: null, onPress: null };
    const intl9 = tmp6(1113).intl;
    obj17.label = intl9.string(tmp2(4028)["pO3+p5"]);
    const intl10 = tmp6(1113).intl;
    obj17.subLabel = intl10.string(tmp2(4028)["9MdtK9"]);
    if (!tmp5) {
      tmp5 = !isGuildCollaboration;
    }
    if (!tmp5) {
      tmp5 = checkingAppInGuild;
    }
    obj17.disabled = tmp5;
    let stringResult;
    if (!isGuildCollaboration) {
      const intl11 = tmp6(1113).intl;
      stringResult = intl11.string(tmp2(4028).nZw5r9);
    }
    const obj18 = { hasIcons: false, children: null };
    obj17.accessibilityHint = stringResult;
    obj17.onPress = callback;
    obj18.children = tmp15(tmp6(7041).TableRow, obj17);
    tmp15Result12 = tmp15(tmp6(7129).TableRowGroup, obj18);
  }
  items1[7] = tmp15Result12;
  let tmp15Result13 = null;
  if (null != saveError) {
    const obj19 = { accessibilityRole: "alert", children: null };
    const obj20 = { variant: "body-xs/normal", color: "text-feedback-critical", children: saveError };
    obj19.children = tmp15(tmp6(5753).Text, obj20);
    tmp15Result13 = tmp15(View, obj19);
  }
  const obj21 = { fields: closure_10(View, obj3), experimentalFields: null, canSave: null, saving: null, nameChanged: null, submit: null };
  items1[8] = tmp15Result13;
  obj3.children = items1;
  const obj22 = { style: tmp.content, children: null };
  const obj23 = { hasIcons: false, children: null };
  const obj24 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl12 = tmp6(1113).intl;
  obj24.label = intl12.string(selectedRoleIds(4028)["4liZ45"]);
  const intl13 = tmp6(1113).intl;
  obj24.subLabel = intl13.string(selectedRoleIds(4028).I5cl7p);
  obj24.checked = smartContext.checked;
  obj24.disabled = saving;
  obj24.onPress = handleSmartContextChange;
  const items2 = [tmp15(require("TableCheckboxRow").TableCheckboxRow, obj24), ];
  const obj25 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl14 = tmp6(1113).intl;
  obj25.label = intl14.string(selectedRoleIds(4028).mpjaVm);
  const intl15 = tmp6(1113).intl;
  obj25.subLabel = intl15.string(selectedRoleIds(4028)["2PxChh"]);
  obj25.checked = hostApproval.checked;
  obj25.disabled = saving;
  obj25.onPress = handleRequireHostApprovalChange;
  items2[1] = tmp15(require("TableCheckboxRow").TableCheckboxRow, obj25);
  obj23.children = items2;
  const items3 = [closure_10(require("TableRowGroup").TableRowGroup, obj23), tmp15(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, { projectId }), ];
  let tmp15Result14 = null;
  if (null != experimentalError) {
    const obj27 = { accessibilityRole: "alert", children: null };
    const obj52 = { variant: "body-xs/normal", color: "text-feedback-critical", children: experimentalError };
    obj27.children = tmp15(tmp6(5753).Text, obj52);
    tmp15Result14 = tmp15(View, obj27);
  }
  items3[2] = tmp15Result14;
  obj22.children = items3;
  obj21.experimentalFields = closure_10(View, obj22);
  obj21.canSave = canSave;
  obj21.saving = saving;
  obj21.nameChanged = nameChanged;
  obj21.submit = submit;
  return obj21;
};