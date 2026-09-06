// === Module 16601: VibegrationsProjectSettingsSheet ===

// Module 16601 (VibegrationsProjectSettingsSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4527 */;
import VibegrationsTypes from "VibegrationsTypes" /* 7248 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 16587 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function RoleColorCircle(color) {
  return closure_1_10(View, { style: closure_15(color.color).circle });
}
function VibegrationsCollaboratorRolesSheet(guildId) {
  guildId = guildId.guildId;
  ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
  let first;
  c7 = undefined;
  const tmp = closure_14();
  const roleLabel = tmp;
  let obj = guildId(onSave[10]);
  let items = [c7];
  const items1 = [guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => GuildRoleStore.getSortedRoles(guildId), items1);
  const tmp5 = stateFromStoresArray(first.useState(() => new Set(importDefault)), 2);
  first = tmp5[0];
  closure_6 = tmp5[1];
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
  const callback = first.useCallback(() => {
    onSave(new Set(first));
    const set = new Set(first);
    ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsCollaboratorRolesSheet);
  }, items3);
  let intl = guildId(onSave[13]).intl;
  obj = { count: first.size, max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES };
  const tmp7 = stateFromStoresArray(first.useState(""), 2);
  obj = { scrollable: true, startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, footer: null, header: null, children: null };
  const intl2 = guildId(onSave[13]).intl;
  obj.dismissAccessibilityLabel = intl2.string(require("module_3547")["9yHiDe"]);
  let formatToPlainStringResult = intl.formatToPlainString(require("module_3547").eaqbJt, obj);
  const tmp12 = closure_11;
  obj.footer = closure_10(closure_6, { style: tmp.roleListFooter, children: closure_10(guildId(onSave[16]).Text, { variant: "text-xs/normal", color: "text-muted", children: intl.formatToPlainString(require("module_3547").eaqbJt, obj) }) });
  const obj2 = { title: null, trailing: null };
  const intl3 = guildId(onSave[13]).intl;
  obj2.title = intl3.string(require("module_3547").fqvhf0);
  const obj3 = { label: null, onPress: null };
  const intl4 = guildId(onSave[13]).intl;
  obj3.label = intl4.string(guildId(onSave[13]).t.i4jeWR);
  obj3.onPress = callback;
  obj2.trailing = closure_10(guildId(onSave[18]).ActionSheetHeaderPressableText, obj3);
  obj.header = closure_10(guildId(onSave[17]).BottomSheetTitleHeader, obj2);
  const obj4 = { size: "md", isRound: true, grow: false, accessibilityLabel: null, placeholder: null, onChange: null };
  const intl5 = guildId(onSave[13]).intl;
  obj4.accessibilityLabel = intl5.string(guildId(onSave[13]).t.Sojqsr);
  const intl6 = guildId(onSave[13]).intl;
  obj4.placeholder = intl6.string(guildId(onSave[13]).t.Sojqsr);
  obj4.onChange = tmp8;
  const items4 = [closure_10(guildId(onSave[19]).SearchField, obj4), ];
  const obj5 = { keyboardShouldPersistTaps: "handled", contentContainerStyle: tmp.roleListContent, children: null };
  if (0 === memo.length) {
    const obj6 = { style: tmp.roleListEmpty, children: null };
    const obj7 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl7 = tmp2(tmp3[13]).intl;
    obj7.children = intl7.string(tmp2(tmp3[13]).t.V6nAfF);
    obj6.children = tmp13(tmp2(tmp3[16]).Text, obj7);
    let tmp13Result = tmp13(closure_6, obj6);
  } else {
    const obj8 = {
      hasIcons: false,
      children: memo.map((children) => {
          const id = children;
          const hasItem = first.has(children.id);
          let tmp3 = !hasItem;
          if (!hasItem) {
            tmp3 = first.size >= guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES;
          }
          let obj = { style: roleLabel.roleLabel, children: null };
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
          obj = { label: null, checked: null, disabled: null, accessibilityHint: null, onPress: null };
          const items = [closure_1_10(RoleColorCircle, { color: primaryColor }), ];
          obj = { variant: "text-md/medium", children: children.name };
          items[1] = closure_1_10(guildId(onSave[16]).Text, obj);
          obj.children = items;
          obj.label = closure_1_11(closure_6, obj);
          obj.checked = hasItem;
          obj.disabled = tmp3;
          let formatToPlainStringResult;
          if (tmp3) {
            const intl = guildId(onSave[13]).intl;
            const obj1 = { max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES };
            formatToPlainStringResult = intl.formatToPlainString(require("module_3547").VPUL05, obj1);
          }
          obj.accessibilityHint = formatToPlainStringResult;
          obj.onPress = function onPress(arg0) {
            return closure_8(id.id, arg0);
          };
          return closure_1_10(guildId(onSave[22]).TableCheckboxRow, obj, children.id);
        })
    };
    tmp13Result = tmp13(tmp2(tmp3[21]).TableRowGroup, obj8);
  }
  obj5.children = tmp13Result;
  items4[1] = closure_10(guildId(onSave[20]).BottomSheetScrollView, obj5);
  obj.children = items4;
  return tmp12(guildId(onSave[15]).ActionSheet, obj);
}
const View = fn(17).View;
const DEFAULT_ROLE_COLOR_HEX = fn(1074).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const VibegrationsProjectSettingsSheet = "VibegrationsProjectSettingsSheet";
VibegrationsCollaboratorRolesSheet = "VibegrationsCollaboratorRolesSheet";
fn(4560);
let createStyles = { content: null, roleLabel: null, roleListContent: null, roleListEmpty: null, roleListFooter: null };
createStyles = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
createStyles.roleLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.roleListContent = { paddingBottom: nativeDefault.space.PX_64 };
let obj2 = { paddingBottom: nativeDefault.space.PX_64 };
createStyles.roleListEmpty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let obj3 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
createStyles.roleListFooter = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_14 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let closure_15 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: null };
  const size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  obj.circle = size;
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsProjectSettingsSheet.tsx");

export default function VibegrationsProjectSettingsSheet(projectId) {
  projectId = projectId.projectId;
  const guildId = projectId.guildId;
  let stateFromStores;
  _slicedToArray = undefined;
  let first1;
  closure_6 = undefined;
  let first2;
  closure_8 = undefined;
  let first3;
  closure_10 = undefined;
  c11 = undefined;
  c12 = undefined;
  let trimmed;
  let isPublic;
  closure_15 = undefined;
  closure_16 = undefined;
  closure_17 = undefined;
  closure_18 = undefined;
  closure_19 = undefined;
  let callback1;
  let obj = first2(stateFromStores[10]);
  const items = [closure_8];
  const items1 = [projectId];
  stateFromStores = obj.useStateFromStores(items, () => VibegrationsProjectStore.getProject(first2), items1);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.collaborator_role_ids;
  }
  if (prop == null) {
    prop = [];
  }
  let obj1 = first1;
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  const first = _slicedToArray(first1.useState(str), 1)[0];
  const tmp = isPublic();
  [str2, c4] = _slicedToArray(obj1.useState(first), 2);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  let tmp5Result = tmp5(obj1.useState(num), 2);
  first1 = tmp5Result[0];
  closure_6 = tmp5Result[1];
  tmp5Result = tmp5(obj1.useState(() => new Set(prop)), 2);
  first2 = tmp5Result[0];
  closure_8 = tmp5Result[1];
  const tmp5Result1 = _slicedToArray(obj1.useState(false), 2);
  first3 = tmp5Result1[0];
  closure_10 = tmp5Result1[1];
  const tmp7 = _slicedToArray(obj1.useState(first), 2);
  [tmp15, c11] = _slicedToArray(obj1.useState(null), 2);
  const tmp5Result2 = _slicedToArray(obj1.useState(null), 2);
  [tmp17, c12] = _slicedToArray(obj1.useState(false), 2);
  trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    let tmp2Result = tmp2(tmp3[11]);
    result = tmp2Result.projectSupportsVisibility(stateFromStores);
  }
  let result1 = null != stateFromStores;
  if (result1) {
    tmp2Result = tmp2(tmp3[11]);
    result1 = tmp2Result.projectSupportsCollaboratorRoles(stateFromStores);
  }
  const tmp5Result3 = _slicedToArray(obj1.useState(false), 2);
  const vibegrationsProjectAccessSettings = first2(stateFromStores[23]).getVibegrationsProjectAccessSettings(first1);
  isPublic = vibegrationsProjectAccessSettings.isPublic;
  let tmp22 = null != stateFromStores;
  if (tmp22) {
    tmp22 = trimmed !== first;
  }
  closure_15 = tmp22;
  let tmp23 = result;
  if (result) {
    let num2;
    if (stateFromStores != null) {
      num2 = stateFromStores.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp23 = first1 !== num2;
  }
  closure_16 = tmp23;
  let tmp24 = result1;
  if (result1) {
    tmp24 = !(first2.size === prop.length && prop.every((item) => first2.has(item)));
    const tmp25 = first2.size === prop.length && prop.every((item) => first2.has(item));
  }
  closure_17 = tmp24;
  let tmp26 = tmp22;
  if (!tmp22) {
    tmp26 = tmp23;
  }
  if (!tmp26) {
    tmp26 = tmp24;
  }
  closure_18 = tmp26;
  const callback = obj1.useCallback((arg0) => {
    _undefined(arg0);
    _undefined2(null);
    _undefined3(false);
  }, []);
  closure_19 = obj1.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_6((arg0) => {
      if (closure_1) {
        let tmp2 = arg0 | tmp;
      } else {
        tmp2 = arg0 & ~tmp;
      }
      return tmp2;
    });
    _undefined3(false);
  }, []);
  callback1 = obj1.useCallback((items) => {
    closure_8(new Set(items));
    _undefined3(false);
  }, []);
  const items2 = [guildId, callback1, first2];
  const callback2 = obj1.useCallback(() => {
    let obj = { content: null, key: VibegrationsCollaboratorRolesSheet, stackingBehavior: "stack" };
    obj = { guildId, initialSelectedRoleIds: first2, onSave: callback1 };
    obj.content = closure_2_10(VibegrationsCollaboratorRolesSheet, obj);
    obj.showActionSheet(obj);
  }, items2);
  const items3 = [first1, tmp23, guildId, tmp26, isPublic, tmp22, stateFromStores, projectId, tmp24, first3, first2, trimmed];
  const callback3 = obj1.useCallback(prop(function*(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (null != stateFromStores) {
              if (closure_18) {
                if (!first3) {
                  if ("" !== trimmed) {
                    let obj1 = {};
                    if (closure_15) {
                      obj1.name = tmp34;
                    }
                    let tmp42 = closure_16;
                    if (closure_16) {
                      obj1.flags = first1;
                    }
                    let tmp44 = closure_17;
                    if (closure_17) {
                      const _Array = Array;
                      obj1.collaborator_role_ids = Array.from(first2).sort();
                      const arr = Array.from(first2);
                    }
                    let tmp46 = null == tmp64.guild_id;
                    if (tmp46) {
                      if (!tmp44) {
                        if (tmp42) {
                          tmp42 = isPublic;
                        }
                        tmp44 = tmp42;
                      }
                      tmp46 = tmp44;
                    }
                    if (tmp46) {
                      obj1.guild_id = guildId;
                    }
                    closure_10(true);
                    _undefined3(false);
                    c3 = 2;
                    v3 = 3;
                    c4 = 1;
                    const obj2 = { value: tmp4(tmp55[24]).updateProjectSettings(first2, obj1), done: false };
                    return obj2;
                  } else {
                    const intl = tmp4(tmp55[13]).intl;
                    _undefined2(intl.string(v3(tmp55[14]).I2hgEB));
                  }
                }
              }
            }
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_12(true);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_10(false);
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (value.ok) {
            obj1 = v3(tmp55[12]);
            obj1.hideActionSheet(_undefined3);
            c3 = 1;
          } else {
            closure_128_12(true);
            c3 = 0;
            closure_128_10(false);
            c4 = 3;
            obj = { value: undefined, done: true };
            return obj;
          }
          c3 = 0;
          closure_128_10(false);
        }
        c3 = 0;
        closure_128_10(false);
        throw tmp55;
      } catch (tmp55) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp55;
        } else if (tmp2 === tmp57) {
          v3 = tmp2;
        } else {
          v3 = tmp;
        }
      }
    }
  }), items3);
  obj = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  let intl = tmp2(tmp3[13]).intl;
  obj.dismissAccessibilityLabel = intl.string(guildId(stateFromStores[14]).UYmwNU);
  obj = { title: null };
  const intl2 = tmp2(tmp3[13]).intl;
  obj.title = intl2.string(guildId(stateFromStores[14])["xhcY+n"]);
  obj.header = closure_10(first2(stateFromStores[17]).BottomSheetTitleHeader, obj);
  obj1 = { style: tmp.content, children: null };
  let obj2 = { label: null, value: null, onChange: null, maxLength: 128, isDisabled: null };
  const intl3 = tmp2(tmp3[13]).intl;
  obj2.label = intl3.string(guildId(stateFromStores[14]).u9UpIx);
  obj2.value = str2;
  obj2.onChange = callback;
  obj2.isDisabled = first3;
  const items4 = [closure_10(first2(stateFromStores[25]).TextInput, obj2), , , , , , ];
  let tmp31Result = null;
  if (null != tmp15) {
    let obj3 = { accessibilityRole: "alert", children: null };
    const obj4 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp15 };
    obj3.children = tmp31(tmp2(tmp3[16]).Text, obj4);
    tmp31Result = tmp31(tmp34, obj3);
  }
  items4[1] = tmp31Result;
  tmp31Result = null;
  if (result) {
    const obj5 = { hasIcons: false, children: null };
    const obj6 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl4 = tmp2(tmp3[13]).intl;
    obj6.label = intl4.string(tmp32(tmp3[14]).EHMPvA);
    const intl5 = tmp2(tmp3[13]).intl;
    obj6.subLabel = intl5.string(tmp32(tmp3[14]).bQQ4uT);
    obj6.checked = vibegrationsProjectAccessSettings.isShared;
    obj6.disabled = first3;
    obj6.onPress = function onPress(arg0) {
      return closure_19(VibegrationsTypes.VibegrationsProjectFlags.SHAREABLE, arg0);
    };
    obj5.children = tmp31(tmp2(tmp3[22]).TableCheckboxRow, obj6);
    tmp31Result = tmp31(tmp2(tmp3[21]).TableRowGroup, obj5);
  }
  items4[2] = tmp31Result;
  let tmp31Result1 = null;
  if (result) {
    const obj7 = { hasIcons: false, children: null };
    const obj8 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl6 = tmp2(tmp3[13]).intl;
    obj8.label = intl6.string(tmp32(tmp3[14]).fvxLKl);
    const intl7 = tmp2(tmp3[13]).intl;
    obj8.subLabel = intl7.string(tmp32(tmp3[14]).Eb3Pe3);
    obj8.checked = isPublic;
    obj8.disabled = first3;
    obj8.onPress = function onPress(arg0) {
      return closure_19(VibegrationsTypes.VibegrationsProjectFlags.PUBLIC, arg0);
    };
    obj7.children = tmp31(tmp2(tmp3[22]).TableCheckboxRow, obj8);
    tmp31Result1 = tmp31(tmp2(tmp3[21]).TableRowGroup, obj7);
  }
  items4[3] = tmp31Result1;
  let tmp31Result2 = null;
  if (result1) {
    const obj9 = { label: null, subLabel: null, arrow: true, disabled: null, accessibilityHint: null, onPress: null };
    const intl8 = tmp2(tmp3[13]).intl;
    obj9.label = intl8.string(tmp32(tmp3[14]).fqvhf0);
    const intl9 = tmp2(tmp3[13]).intl;
    obj9.subLabel = intl9.string(tmp32(tmp3[14]).gWSQVl);
    let tmp39 = first3;
    if (!first3) {
      tmp39 = !isPublic;
    }
    obj9.disabled = tmp39;
    let stringResult;
    if (!isPublic) {
      const intl10 = tmp2(tmp3[13]).intl;
      stringResult = intl10.string(tmp32(tmp3[14]).FTvt33);
    }
    const obj10 = { hasIcons: false, children: null };
    obj9.accessibilityHint = stringResult;
    obj9.onPress = callback2;
    obj10.children = tmp31(tmp2(tmp3[26]).TableRow, obj9);
    tmp31Result2 = tmp31(tmp2(tmp3[21]).TableRowGroup, obj10);
  }
  items4[4] = tmp31Result2;
  let tmp31Result3 = null;
  if (tmp17) {
    const obj11 = { accessibilityRole: "alert", children: null };
    const obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl11 = tmp2(tmp3[13]).intl;
    obj12.children = intl11.string(tmp32(tmp3[14]).dxH2ZV);
    obj11.children = tmp31(tmp2(tmp3[16]).Text, obj12);
    tmp31Result3 = tmp31(tmp34, obj11);
  }
  items4[5] = tmp31Result3;
  const obj13 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl12 = tmp2(tmp3[13]).intl;
  obj13.text = intl12.string(first2(stateFromStores[13]).t["R3BPH+"]);
  obj13.loading = first3;
  let tmp42 = !tmp26;
  if (tmp26) {
    tmp42 = "" === trimmed;
  }
  if (!tmp42) {
    tmp42 = first3;
  }
  const obj14 = { children: null };
  obj13.disabled = tmp42;
  obj13.onPress = callback3;
  items4[6] = closure_10(first2(stateFromStores[27]).Button, obj13);
  obj1.children = items4;
  obj14.children = c11(closure_6, obj1);
  obj.children = closure_10(first2(stateFromStores[20]).BottomSheetScrollView, obj14);
  return closure_10(first2(stateFromStores[15]).ActionSheet, obj);
};
export const VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY = "VibegrationsProjectSettingsSheet";