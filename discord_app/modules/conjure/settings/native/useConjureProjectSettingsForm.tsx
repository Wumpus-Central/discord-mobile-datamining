// === Module 18436: useConjureProjectSettingsForm ===

// Module 18436 (useConjureProjectSettingsForm)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import _modDef4244 from "module_4244" /* 4244 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6904 */;
import ConjureSharingModeSheet from "ConjureSharingModeSheet" /* 18442 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4918 */;

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
    onSave(new Set(first));
    set = new Set(first);
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureCollaboratorRolesSheet);
  }, items3);
  let intl = guildId(onSave[12]).intl;
  const tmp7 = stateFromStoresArray(first.useState(""), 2);
  let obj2 = { count: first.size, max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES };
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, footer: null, header: null, children: null };
  const intl2 = guildId(onSave[12]).intl;
  obj3.dismissAccessibilityLabel = intl2.string(require("module_4244").un99lK);
  let formatToPlainStringResult = intl.formatToPlainString(require("module_4244").g5I05P, { count: first.size, max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES });
  obj3.footer = closure_9(closure_6, { style: tmp.roleListFooter, children: closure_9(guildId(onSave[15]).Text, { variant: "body-xs/normal", color: "text-muted", children: intl.formatToPlainString(require("module_4244").g5I05P, { count: first.size, max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES }) }) });
  const obj5 = { title: null, trailing: null };
  const intl3 = guildId(onSave[12]).intl;
  obj5.title = intl3.string(require("module_4244")["pO3+p5"]);
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
            formatToPlainStringResult = intl.formatToPlainString(require("module_4244")["dH7+/Z"], obj4);
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
const DEFAULT_ROLE_COLOR_HEX = fn(1071).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
ConjureCollaboratorRolesSheet = "ConjureCollaboratorRolesSheet";
let createStyles = fn(5012);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, roleLabel: null, roleListContent: null, roleListEmpty: null, collaboratorRolesSubLabel: null, roleListFooter: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.roleLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.roleListContent = { paddingBottom: nativeDefault.space.PX_64 };
let obj5 = { paddingBottom: nativeDefault.space.PX_64 };
obj2.roleListEmpty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let obj6 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj2.collaboratorRolesSubLabel = { gap: nativeDefault.space.PX_8 };
let obj7 = { gap: nativeDefault.space.PX_8 };
obj2.roleListFooter = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_12 = createStyles.createStyles(obj2);
createStyles = fn(5012);
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
  noop = undefined;
  c6 = undefined;
  handleRoleSelectionChange = undefined;
  let stateFromStoresArray;
  const tmp = closure_12();
  const tmp3 = sharingOptions;
  const tmp4 = require("useConjureProjectSettingsDraft")(projectId, arg1);
  ({ liveReload, sharingMode: c1, sharingOptions } = tmp4);
  ({ canChangeSharing, isGuildCollaboration, selectedRoleIds } = tmp4);
  const showsManageServerDefault = tmp4.showsManageServerDefault;
  ({ supportsVisibility, saving, saveError, experimentalError, handleFlagChange: c5, handleSharingModeChange: c6, handleRoleSelectionChange } = tmp4);
  const ensureAppInGuild = tmp4.ensureAppInGuild;
  ({ iconURL, description, smartContext, hostApproval, name, nameError, nameChanged, usesPreviewApp, canChangePreviewApp, supportsCollaboration, supportsCollaboratorRoles, checkingAppInGuild, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleUsesPreviewAppChange, handleLiveReloadChange, handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp4);
  const found = sharingOptions.find((value) => value.value === c1);
  let tmp6 = saving;
  if (!saving) {
    tmp6 = flag;
  }
  const isConjureManagedCopy = require("useConjureManagedCopy").useIsConjureManagedCopy(projectId);
  let obj2 = require("useConjureManagedCopy");
  items = [handleRoleSelectionChange];
  const items1 = [arg1, selectedRoleIds];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    if (null == closure_0) {
      items = [];
    } else {
      items = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
    }
    return items;
  }, items1);
  const items2 = [stateFromStoresArray, showsManageServerDefault];
  const memo = noop.useMemo(() => {
    if (showsManageServerDefault) {
      let obj = { id: "anyone_with_manage_server", label: null };
      const intl = util.intl;
      obj.label = intl.string(_modDef4244.Ukbq9W);
      items = [obj];
      let mapped = items;
    } else {
      mapped = stateFromStoresArray.map((id) => {
        const obj = { id: id.id, label: id.name, icon: null };
        const colorStrings = id.colorStrings;
        let primaryColor;
        if (colorStrings != null) {
          primaryColor = colorStrings.primaryColor;
        }
        if (primaryColor == null) {
          primaryColor = id.colorString;
        }
        if (primaryColor == null) {
          primaryColor = ensureAppInGuild;
        }
        obj.icon = { type: "role", color: primaryColor };
        return obj;
      });
    }
    return mapped;
  }, items2);
  const items3 = [ensureAppInGuild, arg1, handleRoleSelectionChange, selectedRoleIds];
  let obj4 = { style: tmp.content, children: null };
  let tmp13 = null;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          sharingOptions = 0;
          if (value) {
            const obj5 = { content: null, key: null, stackingBehavior: "stack" };
            const obj6 = { guildId: closure_129_0, initialSelectedRoleIds: null, onSave: null };
            const _Set = Set;
            set = new Set(closure_129_3);
            obj6.initialSelectedRoleIds = set;
            obj6.onSave = function onSave(arg0) {
              items = [...arg0];
              return closure_1_7(items);
            };
            obj5.content = stateFromStoresArray(ConjureCollaboratorRolesSheet, obj6);
            obj5.key = key;
            tmp3(sharingOptions[11]).showActionSheet(obj5);
            const obj = tmp3(sharingOptions[11]);
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
  }), items3);
  if (flag) {
    let obj5 = { variant: "body-sm/normal", color: "text-muted", children: null };
    let intl = tmp7(tmp3[12]).intl;
    obj5.children = intl.string(tmp2(tmp3[13]).s7VnVF);
    tmp13 = stateFromStoresArray(tmp7(tmp3[15]).Text, obj5);
  }
  const items4 = [tmp13, , , , , , , , , ];
  let tmp15 = null;
  if (isConjureManagedCopy) {
    let obj6 = { projectId };
    tmp15 = stateFromStoresArray(tmp2(tmp3[23]), obj6);
  }
  items4[1] = tmp15;
  items4[2] = stateFromStoresArray(require("ConjureAppIdentity").ConjureAppIdentitySection, { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: tmp6 });
  let tmp17Result10 = null;
  if (supportsVisibility) {
    tmp17Result10 = null;
    if (!isConjureManagedCopy) {
      let obj7 = { label: null, trailing: null, arrow: null, disabled: null, onPress: null };
      const intl2 = tmp7(tmp3[12]).intl;
      obj7.label = intl2.string(tmp2(tmp3[13]).jDBYrs);
      let tmp17Result;
      if (null != found) {
        const obj8 = { text: found.label };
        tmp17Result = tmp17(tmp7(tmp3[25]).TableRow.TrailingText, obj8);
      }
      obj7.trailing = tmp17Result;
      let tmp20 = !tmp6;
      if (!tmp6) {
        tmp20 = canChangeSharing;
      }
      obj7.arrow = tmp20;
      let tmp21 = tmp6;
      if (!tmp6) {
        tmp21 = !canChangeSharing;
      }
      const obj9 = { hasIcons: false, children: null };
      obj7.disabled = tmp21;
      obj7.onPress = function onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        return obj.openLazy(asyncRequireImpl(18442, dependencyMap.paths), ConjureSharingModeSheet.CONJURE_SHARING_MODE_SHEET_KEY, { options: sharingOptions, value, onChange }, "stack");
      };
      obj9.children = tmp17(tmp7(tmp3[25]).TableRow, obj7);
      tmp17Result10 = tmp17(tmp7(tmp3[19]).TableRowGroup, obj9);
    }
  }
  items4[3] = tmp17Result10;
  let tmp17Result11 = null;
  if (!flag) {
    const obj10 = { projectId };
    tmp17Result11 = tmp17(tmp2(tmp3[29]), obj10);
  }
  items4[4] = tmp17Result11;
  let tmp11Result = null;
  if (supportsVisibility) {
    tmp11Result = null;
    if (supportsCollaboration) {
      const obj11 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
      const intl3 = tmp7(tmp3[12]).intl;
      obj11.label = intl3.string(tmp2(tmp3[13]).lVvR4E);
      const intl4 = tmp7(tmp3[12]).intl;
      obj11.subLabel = intl4.string(tmp2(tmp3[13]).SQZGoV);
      obj11.checked = isGuildCollaboration;
      obj11.disabled = tmp6;
      obj11.onPress = function onPress(arg0) {
        return _undefined(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
      };
      const items5 = [tmp17(tmp7(tmp3[20]).TableCheckboxRow, obj11), ];
      let tmp17Result13 = null;
      if (supportsCollaboratorRoles) {
        tmp17Result13 = null;
        if (isGuildCollaboration) {
          const obj12 = { label: null, subLabel: null, arrow: true, disabled: null, onPress: null };
          const intl5 = tmp7(tmp3[12]).intl;
          obj12.label = intl5.string(tmp2(tmp3[13])["pO3+p5"]);
          const obj13 = { style: tmp.collaboratorRolesSubLabel, children: null };
          const obj14 = { variant: "body-xs/medium", color: "text-subtle", children: null };
          const intl6 = tmp7(tmp3[12]).intl;
          obj14.children = intl6.string(tmp2(tmp3[13]).AXPSq7);
          const items6 = [tmp17(tmp7(tmp3[15]).Text, obj14), ];
          let tmp17Result12 = null;
          if (memo.length > 0) {
            const obj15 = { label: null, items: null, size: "xs" };
            const intl7 = tmp7(tmp3[12]).intl;
            obj15.label = intl7.string(tmp2(tmp3[13])["pO3+p5"]);
            obj15.items = memo;
            tmp17Result12 = tmp17(tmp7(tmp3[30]).TagGroup, obj15);
          }
          items6[1] = tmp17Result12;
          obj13.children = items6;
          obj12.subLabel = closure_10(tmp12, obj13);
          let tmp26 = tmp6;
          if (!tmp6) {
            tmp26 = checkingAppInGuild;
          }
          obj12.disabled = tmp26;
          obj12.onPress = callback;
          tmp17Result13 = tmp17(tmp7(tmp3[25]).TableRow, obj12);
        }
      }
      const obj16 = { hasIcons: false, children: null };
      items5[1] = tmp17Result13;
      obj16.children = items5;
      tmp11Result = closure_10(tmp7(tmp3[19]).TableRowGroup, obj16);
    }
  }
  items4[5] = tmp11Result;
  let tmp17Result14 = null;
  if (canChangePreviewApp) {
    const obj17 = { hasIcons: false, children: null };
    const obj18 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl8 = tmp7(tmp3[12]).intl;
    obj18.label = intl8.string(tmp2(tmp3[13]).DV2hcV);
    const intl9 = tmp7(tmp3[12]).intl;
    obj18.subLabel = intl9.string(tmp2(tmp3[13]).yjWIzb);
    obj18.checked = usesPreviewApp;
    obj18.disabled = tmp6;
    obj18.onPress = handleUsesPreviewAppChange;
    obj17.children = tmp17(tmp7(tmp3[20]).TableCheckboxRow, obj18);
    tmp17Result14 = tmp17(tmp7(tmp3[19]).TableRowGroup, obj17);
  }
  items4[6] = tmp17Result14;
  let tmp17Result15 = null;
  if (liveReload.available) {
    const obj19 = { hasIcons: false, children: null };
    const obj21 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl10 = tmp7(tmp3[12]).intl;
    obj21.label = intl10.string(tmp2(tmp3[13]).eEo0ye);
    ({ description: obj20.subLabel, checked: obj20.checked } = liveReload);
    obj21.disabled = tmp6;
    obj21.onPress = handleLiveReloadChange;
    obj19.children = tmp17(tmp7(tmp3[20]).TableCheckboxRow, obj21);
    tmp17Result15 = tmp17(tmp7(tmp3[19]).TableRowGroup, obj19);
  }
  items4[7] = tmp17Result15;
  let tmp17Result16 = null;
  if (!flag) {
    const obj22 = { projectId };
    tmp17Result16 = tmp17(tmp2(tmp3[31]), obj22);
  }
  items4[8] = tmp17Result16;
  let tmp17Result17 = null;
  if (null != saveError) {
    const obj23 = { accessibilityRole: "alert", children: null };
    const obj24 = { variant: "body-xs/normal", color: "text-feedback-critical", children: saveError };
    obj23.children = tmp17(tmp7(tmp3[15]).Text, obj24);
    tmp17Result17 = tmp17(tmp12, obj23);
  }
  const obj25 = { fields: closure_10(c6, obj4), experimentalFields: null, canSave: null, saving: null, nameChanged: null, submit: null };
  items4[9] = tmp17Result17;
  obj4.children = items4;
  const obj26 = { style: tmp.content, children: null };
  const obj27 = { hasIcons: false, children: null };
  const obj28 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl11 = tmp7(tmp3[12]).intl;
  obj28.label = intl11.string(require("module_4244")["4liZ45"]);
  const intl12 = tmp7(tmp3[12]).intl;
  obj28.subLabel = intl12.string(require("module_4244").I5cl7p);
  obj28.checked = smartContext.checked;
  obj28.disabled = saving;
  obj28.onPress = handleSmartContextChange;
  const items7 = [stateFromStoresArray(require("TableCheckboxRow").TableCheckboxRow, obj28), ];
  const obj29 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl13 = tmp7(tmp3[12]).intl;
  obj29.label = intl13.string(require("module_4244").mpjaVm);
  const intl14 = tmp7(tmp3[12]).intl;
  obj29.subLabel = intl14.string(require("module_4244")["2PxChh"]);
  obj29.checked = hostApproval.checked;
  obj29.disabled = saving;
  obj29.onPress = handleRequireHostApprovalChange;
  items7[1] = stateFromStoresArray(require("TableCheckboxRow").TableCheckboxRow, obj29);
  obj27.children = items7;
  const items8 = [closure_10(require("TableRowGroup").TableRowGroup, obj27), stateFromStoresArray(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, { projectId }), ];
  let tmp17Result18 = null;
  if (null != experimentalError) {
    const obj31 = { accessibilityRole: "alert", children: null };
    const obj59 = { variant: "body-xs/normal", color: "text-feedback-critical", children: experimentalError };
    obj31.children = tmp17(tmp7(tmp3[15]).Text, obj59);
    tmp17Result18 = tmp17(tmp12, obj31);
  }
  items8[2] = tmp17Result18;
  obj26.children = items8;
  obj25.experimentalFields = closure_10(c6, obj26);
  obj25.canSave = canSave;
  obj25.saving = saving;
  obj25.nameChanged = nameChanged;
  obj25.submit = submit;
  return obj25;
};