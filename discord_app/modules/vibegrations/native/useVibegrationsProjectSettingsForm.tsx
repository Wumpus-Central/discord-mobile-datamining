// === Module 17047: useVibegrationsProjectSettingsForm ===

// Module 17047 (useVibegrationsProjectSettingsForm)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4796 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5363 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2101 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 9389 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function RoleColorCircle(color) {
  return closure_1_10(View, { style: closure_14(color.color).circle });
}
function VibegrationsCollaboratorRolesSheet(guildId) {
  guildId = guildId.guildId;
  ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
  let first;
  c7 = undefined;
  const tmp = closure_13();
  const roleLabel = tmp;
  let items = [c7];
  const items1 = [guildId];
  const stateFromStoresArray = guildId(onSave[10]).useStateFromStoresArray(items, () => GuildRoleStore.getSortedRoles(guildId), items1);
  const tmp5 = stateFromStoresArray(first.useState(() => new Set(importDefault)), 2);
  first = tmp5[0];
  closure_6 = tmp5[1];
  let obj = guildId(onSave[10]);
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
  const tmp7 = stateFromStoresArray(first.useState(""), 2);
  let obj2 = { count: first.size, max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES };
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, footer: null, header: null, children: null };
  const intl2 = guildId(onSave[13]).intl;
  obj3.dismissAccessibilityLabel = intl2.string(require("module_3714")["9yHiDe"]);
  let formatToPlainStringResult = intl.formatToPlainString(require("module_3714").eaqbJt, { count: first.size, max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES });
  obj3.footer = closure_10(closure_6, { style: tmp.roleListFooter, children: closure_10(guildId(onSave[16]).Text, { variant: "text-xs/normal", color: "text-muted", children: intl.formatToPlainString(require("module_3714").eaqbJt, { count: first.size, max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES }) }) });
  const obj5 = { title: null, trailing: null };
  const intl3 = guildId(onSave[13]).intl;
  obj5.title = intl3.string(require("module_3714").fqvhf0);
  const obj6 = { label: null, onPress: null };
  const intl4 = guildId(onSave[13]).intl;
  obj6.label = intl4.string(guildId(onSave[13]).t.i4jeWR);
  obj6.onPress = callback;
  obj5.trailing = closure_10(guildId(onSave[18]).ActionSheetHeaderPressableText, obj6);
  obj3.header = closure_10(guildId(onSave[17]).BottomSheetTitleHeader, obj5);
  const obj7 = { size: "md", round: true, grow: false, accessibilityLabel: null, placeholder: null, onChange: null };
  const intl5 = guildId(onSave[13]).intl;
  obj7.accessibilityLabel = intl5.string(guildId(onSave[13]).t.Sojqsr);
  const intl6 = guildId(onSave[13]).intl;
  obj7.placeholder = intl6.string(guildId(onSave[13]).t.Sojqsr);
  obj7.onChange = tmp8;
  const items4 = [closure_10(guildId(onSave[19]).SearchField, obj7), ];
  const obj8 = { style: tmp.roleListContent, children: null };
  if (0 === memo.length) {
    const obj9 = { style: tmp.roleListEmpty, children: null };
    const obj10 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl7 = tmp2(onSave[13]).intl;
    obj10.children = intl7.string(tmp2(onSave[13]).t.V6nAfF);
    obj9.children = closure_10(tmp2(onSave[16]).Text, obj10);
    let tmp13Result = closure_10(tmp14, obj9);
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
            primaryColor = DEFAULT_ROLE_COLOR_HEX;
          }
          const obj2 = { label: null, checked: null, disabled: null, accessibilityHint: null, onPress: null };
          const items = [closure_1_10(RoleColorCircle, { color: primaryColor }), closure_1_10(guildId(onSave[16]).Text, { variant: "text-md/medium", children: children.name })];
          obj.children = items;
          obj2.label = closure_1_11(closure_6, obj);
          obj2.checked = hasItem;
          obj2.disabled = tmp3;
          let formatToPlainStringResult;
          if (tmp3) {
            const intl = guildId(onSave[13]).intl;
            const obj4 = { max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES };
            formatToPlainStringResult = intl.formatToPlainString(require("module_3714").VPUL05, obj4);
          }
          obj2.accessibilityHint = formatToPlainStringResult;
          obj2.onPress = function onPress(arg0) {
            return closure_8(id.id, arg0);
          };
          return closure_1_10(guildId(onSave[21]).TableCheckboxRow, obj2, children.id);
        })
    };
    tmp13Result = closure_10(tmp2(onSave[20]).TableRowGroup, obj11);
  }
  obj8.children = tmp13Result;
  items4[1] = closure_10(closure_6, obj8);
  obj3.children = items4;
  return closure_11(guildId(onSave[15]).ActionSheet, obj3);
}
const View = fn(17).View;
const DEFAULT_ROLE_COLOR_HEX = fn(1074).DEFAULT_ROLE_COLOR_HEX;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
VibegrationsCollaboratorRolesSheet = "VibegrationsCollaboratorRolesSheet";
let createStyles = fn(4829);
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
createStyles = fn(4829);
let closure_14 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: null };
  const size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  obj.circle = size;
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/useVibegrationsProjectSettingsForm.tsx");

export default function useVibegrationsProjectSettingsForm(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const tmp = trimmed();
  const items = [closure_8];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => VibegrationsProjectStore.getProject(closure_0), items1);
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
  const first = _slicedToArray(first1.useState(str), 1)[0];
  let obj = require("initialize");
  [str2, _slicedToArray] = first1.useState(first);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  [first1, closure_6] = first1.useState(num);
  [first2, closure_8] = first1.useState(() => new Set(prop));
  [first3, closure_10] = first1.useState(false);
  const tmp7 = _slicedToArray(first1.useState(first), 2);
  [tmp15, closure_11] = first1.useState(null);
  const tmp5Result7 = _slicedToArray(first1.useState(null), 2);
  [tmp17, VibegrationsCollaboratorRolesSheet] = first1.useState(false);
  trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    result = tmp2(tmp3[11]).projectSupportsVisibility(stateFromStores);
    const tmp2Result = tmp2(tmp3[11]);
  }
  let result1 = null != stateFromStores && null != arg1;
  if (result1) {
    result1 = tmp2(tmp3[11]).projectSupportsCollaboratorRoles(stateFromStores);
    const tmp2Result4 = tmp2(tmp3[11]);
  }
  const tmp5Result8 = _slicedToArray(first1.useState(false), 2);
  const vibegrationsProjectAccessSettings = require("VibegrationsUtils").getVibegrationsProjectAccessSettings(first1);
  const isPublic = vibegrationsProjectAccessSettings.isPublic;
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
    tmp24 = !tmp2(tmp3[23]).haveSameRoleIds(first2, prop);
    const tmp2Result6 = tmp2(tmp3[23]);
  }
  closure_17 = tmp24;
  let tmp25 = tmp22;
  if (!tmp22) {
    tmp25 = tmp23;
  }
  if (!tmp25) {
    tmp25 = tmp24;
  }
  closure_18 = tmp25;
  const callback = obj2.useCallback((arg0) => {
    _slicedToArray(arg0);
    closure_1_11(null);
    VibegrationsCollaboratorRolesSheet(false);
  }, []);
  closure_19 = obj2.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_6((arg0) => {
      if (closure_1) {
        let tmp2 = arg0 | closure_0;
      } else {
        tmp2 = arg0 & ~closure_0;
      }
      return tmp2;
    });
    VibegrationsCollaboratorRolesSheet(false);
  }, []);
  const callback1 = obj2.useCallback((items) => {
    closure_8(new Set(items));
    VibegrationsCollaboratorRolesSheet(false);
  }, []);
  const items2 = [arg1, callback1, first2];
  const callback2 = obj2.useCallback(() => {
    if (null != closure_1) {
      const obj2 = { content: null, key: null, stackingBehavior: "stack" };
      const obj3 = { guildId: tmp, initialSelectedRoleIds: first2, onSave: callback1 };
      obj2.content = closure_2_10(VibegrationsCollaboratorRolesSheet, obj3);
      obj2.key = VibegrationsCollaboratorRolesSheet;
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items2);
  const items3 = [first1, tmp23, arg1, tmp25, isPublic, tmp22, stateFromStores, arg0, tmp24, first3, first2, trimmed];
  let obj3 = { style: tmp.content, children: null };
  const callback3 = obj2.useCallback(prop(function*() {
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
        return { value: "HermesInternal", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            if (null != stateFromStores) {
              if (closure_18) {
                if (!first3) {
                  if ("" === trimmed) {
                    const intl = tmp4(tmp51[13]).intl;
                    closure_2_11(intl.string(guild_id(tmp51[14]).I2hgEB));
                    c4 = 3;
                    return { value: false, done: true };
                  } else {
                    const obj5 = {};
                    if (closure_15) {
                      obj5.name = tmp30;
                    }
                    let tmp31 = closure_16;
                    if (closure_16) {
                      obj5.flags = first1;
                    }
                    let tmp33 = closure_17;
                    if (closure_17) {
                      const _Array = Array;
                      obj5.collaborator_role_ids = Array.from(first2).sort();
                      const arr = Array.from(first2);
                    }
                    let tmp35 = null == tmp60.guild_id;
                    if (tmp35) {
                      tmp35 = null != guild_id;
                    }
                    if (tmp35) {
                      if (!tmp33) {
                        if (tmp31) {
                          tmp31 = isPublic;
                        }
                        tmp33 = tmp31;
                      }
                      tmp35 = tmp33;
                    }
                    if (tmp35) {
                      obj5.guild_id = guild_id;
                    }
                    closure_10(true);
                    VibegrationsCollaboratorRolesSheet(false);
                    c3 = 2;
                    guild_id = 3;
                    c4 = 1;
                    const obj6 = { value: tmp4(tmp51[24]).updateProjectSettings(tmp4, obj5), done: false };
                    return obj6;
                  }
                }
              }
            }
            c4 = 3;
            return { value: true, done: true };
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_128_10(false);
          throw tmp51;
        } else if (2 === tmp8) {
          c3 = 1;
          closure_128_12(true);
          c3 = 0;
          closure_128_10(false);
          c4 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_10(false);
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          let flag = value.ok;
          if (!flag) {
            closure_128_12(true);
            flag = false;
          }
          c3 = 0;
          closure_128_10(false);
          c4 = 3;
          const obj = { value: flag, done: true };
          return obj;
        }
      } catch (tmp51) {
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp51;
        } else if (tmp2 === tmp53) {
          guild_id = tmp2;
        } else {
          guild_id = tmp;
        }
      }
    }
  }), items3);
  const obj4 = { label: null, value: null, onChange: null, maxLength: 128, disabled: null };
  let intl = tmp2(tmp3[13]).intl;
  obj4.label = intl.string(require("module_3714").u9UpIx);
  obj4.value = str2;
  obj4.onChange = callback;
  obj4.disabled = first3;
  const items4 = [closure_10(require("TextInput").TextInput, obj4), , , , , ];
  let tmp32Result = null;
  if (null != tmp15) {
    let obj5 = { accessibilityRole: "alert", children: null };
    let obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp15 };
    obj5.children = tmp32(tmp2(tmp3[16]).Text, obj6);
    tmp32Result = tmp32(tmp31, obj5);
  }
  items4[1] = tmp32Result;
  let tmp32Result5 = null;
  if (result) {
    let obj7 = { hasIcons: false, children: null };
    const obj8 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl2 = tmp2(tmp3[13]).intl;
    obj8.label = intl2.string(tmp33(tmp3[14]).EHMPvA);
    const intl3 = tmp2(tmp3[13]).intl;
    obj8.subLabel = intl3.string(tmp33(tmp3[14]).bQQ4uT);
    obj8.checked = vibegrationsProjectAccessSettings.isShared;
    obj8.disabled = first3;
    obj8.onPress = function onPress(arg0) {
      return closure_19(VibegrationsTypes.VibegrationsProjectFlags.SHAREABLE, arg0);
    };
    obj7.children = tmp32(tmp2(tmp3[21]).TableCheckboxRow, obj8);
    tmp32Result5 = tmp32(tmp2(tmp3[20]).TableRowGroup, obj7);
  }
  items4[2] = tmp32Result5;
  let tmp32Result6 = null;
  if (result) {
    const obj9 = { hasIcons: false, children: null };
    const obj10 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl4 = tmp2(tmp3[13]).intl;
    obj10.label = intl4.string(tmp33(tmp3[14]).fvxLKl);
    const intl5 = tmp2(tmp3[13]).intl;
    obj10.subLabel = intl5.string(tmp33(tmp3[14]).Eb3Pe3);
    obj10.checked = isPublic;
    obj10.disabled = first3;
    obj10.onPress = function onPress(arg0) {
      return closure_19(VibegrationsTypes.VibegrationsProjectFlags.PUBLIC, arg0);
    };
    obj9.children = tmp32(tmp2(tmp3[21]).TableCheckboxRow, obj10);
    tmp32Result6 = tmp32(tmp2(tmp3[20]).TableRowGroup, obj9);
  }
  items4[3] = tmp32Result6;
  let tmp32Result7 = null;
  if (result1) {
    const obj11 = { label: null, subLabel: null, arrow: true, disabled: null, accessibilityHint: null, onPress: null };
    const intl6 = tmp2(tmp3[13]).intl;
    obj11.label = intl6.string(tmp33(tmp3[14]).fqvhf0);
    const intl7 = tmp2(tmp3[13]).intl;
    obj11.subLabel = intl7.string(tmp33(tmp3[14]).gWSQVl);
    let tmp38 = first3;
    if (!first3) {
      tmp38 = !isPublic;
    }
    obj11.disabled = tmp38;
    let stringResult;
    if (!isPublic) {
      const intl8 = tmp2(tmp3[13]).intl;
      stringResult = intl8.string(tmp33(tmp3[14]).FTvt33);
    }
    const obj12 = { hasIcons: false, children: null };
    obj11.accessibilityHint = stringResult;
    obj11.onPress = callback2;
    obj12.children = tmp32(tmp2(tmp3[26]).TableRow, obj11);
    tmp32Result7 = tmp32(tmp2(tmp3[20]).TableRowGroup, obj12);
  }
  items4[4] = tmp32Result7;
  let tmp32Result8 = null;
  if (tmp17) {
    const obj13 = { accessibilityRole: "alert", children: null };
    const obj14 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl9 = tmp2(tmp3[13]).intl;
    obj14.children = intl9.string(tmp33(tmp3[14]).dxH2ZV);
    obj13.children = tmp32(tmp2(tmp3[16]).Text, obj14);
    tmp32Result8 = tmp32(tmp31, obj13);
  }
  const obj15 = { fields: closure_11(closure_6, obj3), canSave: null, saving: null, submit: null };
  items4[5] = tmp32Result8;
  obj3.children = items4;
  if (tmp25) {
    tmp25 = "" !== trimmed;
  }
  obj15.canSave = tmp25;
  obj15.saving = first3;
  obj15.submit = callback3;
  return obj15;
};