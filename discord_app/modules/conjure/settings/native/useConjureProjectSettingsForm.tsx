// discord_app/modules/conjure/settings/native/useConjureProjectSettingsForm.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ConjureProjectTypes from "../../projects/ConjureProjectTypes.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";

const require = globalThis.__r;

require = fn;
function RoleColorCircle(color) {
  return React7(View, { style: closure_13(color.color).circle });
}
function ConjureCollaboratorRolesSheet(guildId) {
  guildId = guildId.guildId;
  ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
  let first;
  c7 = undefined;
  const tmp = closure_12();
  const roleLabel = tmp;
  let items = [c7];
  const items1 = [guildId];
  const stateFromStoresArray = guildId(onSave[9]).useStateFromStoresArray(
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
  const obj3 = {
    startExpanded: true,
    keyboardShouldPersistTaps: "handled",
    dismissAccessibilityLabel: null,
    footer: null,
    header: null,
    children: null,
  };
  const intl2 = guildId(onSave[12]).intl;
  obj3.dismissAccessibilityLabel = intl2.string(require("../../intl/ConjureUntranslated.messages.js").un99lK);
  let formatToPlainStringResult = intl.formatToPlainString(
    require("../../intl/ConjureUntranslated.messages.js").g5I05P,
    { count: first.size, max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES },
  );
  obj3.footer = closure_9(closure_6, {
    style: tmp.roleListFooter,
    children: closure_9(guildId(onSave[15]).Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: intl.formatToPlainString(require("../../intl/ConjureUntranslated.messages.js").g5I05P, {
        count: first.size,
        max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES,
      }),
    }),
  });
  const obj5 = { title: null, trailing: null };
  const intl3 = guildId(onSave[12]).intl;
  obj5.title = intl3.string(require("../../intl/ConjureUntranslated.messages.js")["pO3+p5"]);
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
  const items4 = [closure_9(guildId(onSave[18]).SearchBar, obj7)];
  const obj8 = { style: tmp.roleListContent, children: null };
  if (0 === memo.length) {
    const obj9 = { style: tmp.roleListEmpty, children: null };
    const obj10 = { variant: "text-md/normal", color: "text-muted", children: null };
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
        const items = [
          closure_1_9(RoleColorCircle, { color: primaryColor }),
          closure_1_9(guildId(onSave[15]).Text, { variant: "text-md/medium", children: children.name }),
        ];
        obj.children = items;
        obj2.label = closure_1_10(closure_6, obj);
        obj2.checked = hasItem;
        obj2.disabled = tmp3;
        let formatToPlainStringResult;
        if (tmp3) {
          const intl = guildId(onSave[12]).intl;
          const obj4 = { max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES };
          formatToPlainStringResult = intl.formatToPlainString(
            require("../../intl/ConjureUntranslated.messages.js")["dH7+/Z"],
            obj4,
          );
        }
        obj2.accessibilityHint = formatToPlainStringResult;
        obj2.onPress = function onPress(arg0) {
          return closure_8(id.id, arg0);
        };
        return closure_1_9(guildId(onSave[20]).TableCheckboxRow, obj2, children.id);
      }),
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
({ jsx: closure_9, jsxs: c10 } = jsxProd);
ConjureCollaboratorRolesSheet = "ConjureCollaboratorRolesSheet";
let createStyles = fn(5014);
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
let closure_12 = createStyles.createStyles(obj2);
createStyles = fn(5014);
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
  const tmp4 = selectedRoleIds(12470)(projectId, arg1);
  ({ liveReload, isGuildCollaboration, selectedRoleIds } = tmp4);
  ({
    supportsVisibility,
    saving,
    saveError,
    experimentalError,
    handleFlagChange: c2,
    handleRoleSelectionChange,
  } = tmp4);
  const ensureAppInGuild = tmp4.ensureAppInGuild;
  let tmp5 = saving;
  ({
    iconURL,
    description,
    smartContext,
    hostApproval,
    name,
    nameError,
    nameChanged,
    isPublic,
    supportsCollaboration,
    supportsCollaboratorRoles,
    checkingAppInGuild,
    canSave,
    handleIconChange,
    handleNameChange,
    handleDescriptionChange,
    handleLiveReloadChange,
    handleSmartContextChange,
    handleRequireHostApprovalChange,
    submit,
  } = tmp4);
  if (!saving) {
    tmp5 = flag;
  }
  let items = [ensureAppInGuild, arg1, handleRoleSelectionChange, selectedRoleIds];
  let obj2 = { style: tmp.content, children: null };
  let tmp9 = null;
  const callback = noop.useCallback(
    handleRoleSelectionChange(function* () {
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                const items = [...arg0];
                return closure_1_3(items);
              };
              obj5.content = closure_1_9(ConjureCollaboratorRolesSheet, obj6);
              obj5.key = key;
              tmp3(dependencyMap[11]).showActionSheet(obj5);
              const obj = tmp3(dependencyMap[11]);
            } else {
              c4 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
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
    }),
    items,
  );
  if (flag) {
    let obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl = require("util").intl;
    obj3.children = intl.string(tmp2(3868).s7VnVF);
    tmp9 = closure_9(require("Text/Text").Text, obj3);
  }
  const items1 = [
    tmp9,
    closure_9(require("ConjureAppIdentity").ConjureAppIdentitySection, {
      iconURL,
      onIconChange: handleIconChange,
      name,
      nameError,
      onNameChange: handleNameChange,
      description,
      onDescriptionChange: handleDescriptionChange,
      disabled: tmp5,
    }),
    ,
    ,
    ,
    ,
  ];
  let tmp12Result = null;
  if (supportsVisibility) {
    let obj4 = { hasIcons: false, children: null };
    let obj5 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl2 = tmp13(1113).intl;
    obj5.label = intl2.string(tmp2(3868).ujIxRm);
    const intl3 = tmp13(1113).intl;
    obj5.subLabel = intl3.string(tmp2(3868).gT8zk1);
    obj5.checked = isPublic;
    obj5.disabled = tmp5;
    obj5.onPress = function onPress(arg0) {
      return _undefined(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
    };
    obj4.children = closure_9(tmp13(6974).TableCheckboxRow, obj5);
    tmp12Result = closure_9(tmp13(7060).TableRowGroup, obj4);
  }
  items1[2] = tmp12Result;
  let tmp12Result6 = null;
  if (supportsVisibility) {
    tmp12Result6 = null;
    if (supportsCollaboration) {
      let obj6 = { hasIcons: false, children: null };
      let obj7 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
      const intl4 = tmp13(1113).intl;
      obj7.label = intl4.string(tmp2(3868).lVvR4E);
      const intl5 = tmp13(1113).intl;
      obj7.subLabel = intl5.string(tmp2(3868).SQZGoV);
      obj7.checked = isGuildCollaboration;
      obj7.disabled = tmp5;
      obj7.onPress = function onPress(arg0) {
        return _undefined(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
      };
      obj6.children = closure_9(tmp13(6974).TableCheckboxRow, obj7);
      tmp12Result6 = closure_9(tmp13(7060).TableRowGroup, obj6);
    }
  }
  items1[3] = tmp12Result6;
  let tmp12Result7 = null;
  if (liveReload.available) {
    const obj8 = { hasIcons: false, children: null };
    const obj10 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl6 = tmp13(1113).intl;
    obj10.label = intl6.string(tmp2(3868).eEo0ye);
    ({ description: obj9.subLabel, checked: obj9.checked } = liveReload);
    obj10.disabled = tmp5;
    obj10.onPress = handleLiveReloadChange;
    obj8.children = closure_9(tmp13(6974).TableCheckboxRow, obj10);
    tmp12Result7 = closure_9(tmp13(7060).TableRowGroup, obj8);
  }
  items1[4] = tmp12Result7;
  let tmp12Result8 = null;
  if (supportsCollaboratorRoles) {
    const obj11 = { label: null, subLabel: null, arrow: true, disabled: null, accessibilityHint: null, onPress: null };
    const intl7 = tmp13(1113).intl;
    obj11.label = intl7.string(tmp2(3868)["pO3+p5"]);
    const intl8 = tmp13(1113).intl;
    obj11.subLabel = intl8.string(tmp2(3868)["9MdtK9"]);
    if (!tmp5) {
      tmp5 = !isGuildCollaboration;
    }
    if (!tmp5) {
      tmp5 = checkingAppInGuild;
    }
    obj11.disabled = tmp5;
    let stringResult;
    if (!isGuildCollaboration) {
      const intl9 = tmp13(1113).intl;
      stringResult = intl9.string(tmp2(3868).nZw5r9);
    }
    const obj12 = { hasIcons: false, children: null };
    obj11.accessibilityHint = stringResult;
    obj11.onPress = callback;
    obj12.children = closure_9(tmp13(6975).TableRow, obj11);
    tmp12Result8 = closure_9(tmp13(7060).TableRowGroup, obj12);
  }
  items1[5] = tmp12Result8;
  let tmp12Result9 = null;
  if (null != saveError) {
    const obj13 = { accessibilityRole: "alert", children: null };
    const obj14 = { variant: "text-xs/normal", color: "text-feedback-critical", children: saveError };
    obj13.children = closure_9(tmp13(5624).Text, obj14);
    tmp12Result9 = closure_9(View, obj13);
  }
  const obj15 = {
    fields: closure_10(View, obj2),
    experimentalFields: null,
    canSave: null,
    saving: null,
    nameChanged: null,
    submit: null,
  };
  items1[6] = tmp12Result9;
  obj2.children = items1;
  const obj16 = { style: tmp.content, children: null };
  const obj17 = { hasIcons: false, children: null };
  const obj18 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl10 = tmp13(1113).intl;
  obj18.label = intl10.string(selectedRoleIds(3868)["4liZ45"]);
  const intl11 = tmp13(1113).intl;
  obj18.subLabel = intl11.string(selectedRoleIds(3868).I5cl7p);
  obj18.checked = smartContext.checked;
  obj18.disabled = saving;
  obj18.onPress = handleSmartContextChange;
  const items2 = [closure_9(require("TableCheckboxRow").TableCheckboxRow, obj18)];
  const obj19 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl12 = tmp13(1113).intl;
  obj19.label = intl12.string(selectedRoleIds(3868).mpjaVm);
  const intl13 = tmp13(1113).intl;
  obj19.subLabel = intl13.string(selectedRoleIds(3868)["2PxChh"]);
  obj19.checked = hostApproval.checked;
  obj19.disabled = saving;
  obj19.onPress = handleRequireHostApprovalChange;
  items2[1] = closure_9(require("TableCheckboxRow").TableCheckboxRow, obj19);
  obj17.children = items2;
  const items3 = [
    closure_10(require("TableRowGroup").TableRowGroup, obj17),
    closure_9(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, { projectId }),
  ];
  let tmp12Result10 = null;
  if (null != experimentalError) {
    const obj21 = { accessibilityRole: "alert", children: null };
    const obj41 = { variant: "text-xs/normal", color: "text-feedback-critical", children: experimentalError };
    obj21.children = closure_9(tmp13(5624).Text, obj41);
    tmp12Result10 = closure_9(View, obj21);
  }
  items3[2] = tmp12Result10;
  obj16.children = items3;
  obj15.experimentalFields = closure_10(View, obj16);
  obj15.canSave = canSave;
  obj15.saving = saving;
  obj15.nameChanged = nameChanged;
  obj15.submit = submit;
  return obj15;
}
