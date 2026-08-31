// === Module 16151: RoleColorCircle ===

// Module 16151 (RoleColorCircle)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "createGuildRoleRecordFromRust" /* 1985 */;
import closure_8 from "isProjectOwner" /* 16140 */;
import { DEFAULT_ROLE_COLOR_HEX } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
function RoleColorCircle(color) {
  return callback2(View, { style: callback4(color.color).circle });
}
function VibegrationsCollaboratorRolesSheet(guildId) {
  guildId = guildId.guildId;
  ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
  closure_3 = undefined;
  let stateFromStoresArray;
  let first;
  closure_6 = undefined;
  c7 = undefined;
  closure_8 = undefined;
  const tmp = callback3();
  closure_3 = tmp;
  let obj = guildId(onSave[10]);
  let items = [c7];
  const items1 = [guildId];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => _undefined.getSortedRoles(guildId), items1);
  const tmp5 = stateFromStoresArray(first.useState(() => new Set(closure_1)), 2);
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
        let hasItem = id.id === closure_7;
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
    callback((size) => {
      if (closure_1) {
        if (size.size >= callback(closure_1_2[11]).MAX_PROJECT_COLLABORATOR_ROLES) {
          return size;
        }
      }
      const set = new Set(size);
      if (closure_1) {
        set.add(callback);
      } else {
        set.delete(callback);
      }
      return set;
    });
  }, []);
  const items3 = [onSave, first];
  const callback = first.useCallback(() => {
    onSave(new Set(first));
    const set = new Set(first);
    closure_1_1(onSave[12]).hideActionSheet(closure_1_13);
  }, items3);
  let intl = guildId(onSave[13]).intl;
  obj = { count: first.size, max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES };
  const tmp7 = stateFromStoresArray(first.useState(""), 2);
  obj = { scrollable: true, startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: null, footer: null, header: null, children: null };
  const intl2 = guildId(onSave[13]).intl;
  obj[3] = intl2.string(importDefault(onSave[14])["9yHiDe"]);
  let formatToPlainStringResult = intl.formatToPlainString(importDefault(onSave[14]).eaqbJt, obj);
  const tmp12 = closure_11;
  obj[4] = callback2(closure_6, { style: tmp.roleListFooter, children: callback2(guildId(onSave[16]).Text, { variant: "text-xs/normal", color: "text-muted", children: intl.formatToPlainString(importDefault(onSave[14]).eaqbJt, obj) }) });
  const obj2 = { title: null, trailing: null };
  const intl3 = guildId(onSave[13]).intl;
  obj2[0] = intl3.string(importDefault(onSave[14]).fqvhf0);
  const obj3 = { label: null, onPress: null };
  const intl4 = guildId(onSave[13]).intl;
  obj3[0] = intl4.string(guildId(onSave[13]).t.i4jeWR);
  obj3[1] = callback;
  obj2[1] = callback2(guildId(onSave[18]).ActionSheetHeaderPressableText, obj3);
  obj[5] = callback2(guildId(onSave[17]).BottomSheetTitleHeader, obj2);
  const obj4 = { size: "md", isRound: true, grow: false, accessibilityLabel: null, placeholder: null, onChange: null };
  const intl5 = guildId(onSave[13]).intl;
  obj4[3] = intl5.string(guildId(onSave[13]).t.Sojqsr);
  const intl6 = guildId(onSave[13]).intl;
  obj4[4] = intl6.string(guildId(onSave[13]).t.Sojqsr);
  obj4[5] = tmp8;
  const items4 = [callback2(guildId(onSave[19]).SearchField, obj4), ];
  const obj5 = { keyboardShouldPersistTaps: "handled", contentContainerStyle: tmp.roleListContent, children: null };
  if (0 === memo.length) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.roleListEmpty;
    const obj7 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl7 = tmp2(tmp3[13]).intl;
    obj7[2] = intl7.string(tmp2(tmp3[13]).t.V6nAfF);
    obj6[1] = tmp13(tmp2(tmp3[16]).Text, obj7);
    let tmp13Result = tmp13(closure_6, obj6);
  } else {
    const obj8 = { hasIcons: false, children: null };
    obj8[1] = memo.map((children) => {
      closure_0 = children;
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
        primaryColor = closure_1_9;
      }
      obj = { label: null, checked: null, disabled: null, accessibilityHint: null, onPress: null };
      const items = [closure_1_10(closure_1_16, { color: primaryColor }), ];
      obj = { variant: "text-md/medium", children: children.name };
      items[1] = closure_1_10(guildId(onSave[16]).Text, obj);
      obj[1] = items;
      obj[0] = closure_1_11(closure_6, obj);
      obj[1] = hasItem;
      obj[2] = tmp3;
      let formatToPlainStringResult;
      if (tmp3) {
        const intl = guildId(onSave[13]).intl;
        obj1 = { max: null };
        obj1[0] = guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES;
        formatToPlainStringResult = intl.formatToPlainString(closure_1_1(onSave[14]).VPUL05, obj1);
      }
      obj[3] = formatToPlainStringResult;
      obj[4] = function onPress(arg0) {
        return closure_1_8(id.id, arg0);
      };
      return closure_1_10(guildId(onSave[22]).TableCheckboxRow, obj, children.id);
    });
    tmp13Result = tmp13(tmp2(tmp3[21]).TableRowGroup, obj8);
  }
  obj5[2] = tmp13Result;
  items4[1] = callback2(guildId(onSave[20]).BottomSheetScrollView, obj5);
  obj[6] = items4;
  return tmp12(guildId(onSave[15]).ActionSheet, obj);
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const VibegrationsProjectSettingsSheet = "VibegrationsProjectSettingsSheet";
VibegrationsCollaboratorRolesSheet = "VibegrationsCollaboratorRolesSheet";
createCacheKey = { content: null, roleLabel: null, roleListContent: null, roleListEmpty: null, roleListFooter: null };
createCacheKey = { gap: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[2] = { paddingBottom: ThemesDefault.space.PX_64 };
let obj2 = { paddingBottom: ThemesDefault.space.PX_64 };
createCacheKey[3] = { alignItems: "center", paddingVertical: ThemesDefault.space.PX_24 };
let obj3 = { alignItems: "center", paddingVertical: ThemesDefault.space.PX_24 };
createCacheKey[4] = { alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_48, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let closure_15 = createCacheKey.createStyles((backgroundColor) => {
  let obj = { circle: null };
  obj = { width: 12, height: 12, borderRadius: ThemesDefault.radii.round, backgroundColor, flexShrink: 0 };
  obj[0] = obj;
  return obj;
});
let obj4 = { alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_48, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsProjectSettingsSheet.tsx");

export default function VibegrationsProjectSettingsSheet(projectId) {
  projectId = projectId.projectId;
  let first2 = projectId;
  const guildId = projectId.guildId;
  let stateFromStores;
  let prop;
  let callback;
  let first1;
  closure_6 = undefined;
  first2 = undefined;
  closure_8 = undefined;
  let first3;
  let callback2;
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
  stateFromStores = obj.useStateFromStores(items, () => project.getProject(first2), items1);
  prop = undefined;
  if (stateFromStores != null) {
    prop = stateFromStores.collaborator_role_ids;
  }
  if (prop == null) {
    prop = [];
  }
  obj1 = first1;
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  const first = callback(first1.useState(str), 1)[0];
  const tmp = isPublic();
  [str2, c4] = callback(obj1.useState(first), 2);
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
  const tmp5Result1 = callback(obj1.useState(false), 2);
  first3 = tmp5Result1[0];
  callback2 = tmp5Result1[1];
  const tmp7 = callback(obj1.useState(first), 2);
  [tmp15, c11] = callback(obj1.useState(null), 2);
  const tmp5Result2 = callback(obj1.useState(null), 2);
  [tmp17, c12] = callback(obj1.useState(false), 2);
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
  const tmp5Result3 = callback(obj1.useState(false), 2);
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
    tmp24 = !(first2.size === prop.length && prop.every((arg0) => first2.has(arg0)));
    const tmp25 = first2.size === prop.length && prop.every((arg0) => first2.has(arg0));
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
  callback = obj1.useCallback((arg0) => {
    _undefined(arg0);
    _undefined2(null);
    _undefined3(false);
  }, []);
  closure_19 = obj1.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    callback((arg0) => {
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
    project(new Set(items));
    _undefined3(false);
  }, []);
  const items2 = [guildId, callback1, first2];
  callback2 = obj1.useCallback(() => {
    let obj = first2(stateFromStores[12]);
    obj = { content: callback2(closure_17, obj), key: trimmed, stackingBehavior: "stack" };
    obj = { guildId, initialSelectedRoleIds: first2, onSave: callback1 };
    obj.showActionSheet(obj);
  }, items2);
  const items3 = [first1, tmp23, guildId, tmp26, isPublic, tmp22, stateFromStores, projectId, tmp24, first3, first2, trimmed];
  const callback3 = obj1.useCallback(prop(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            if (null != closure_1_2) {
              if (closure_1_18) {
                if (!closure_1_9) {
                  if ("" !== closure_1_13) {
                    obj1 = {};
                    if (closure_1_15) {
                      obj1.name = tmp34;
                    }
                    let tmp42 = closure_1_16;
                    if (closure_1_16) {
                      obj1.flags = closure_1_5;
                    }
                    let tmp44 = closure_1_17;
                    if (closure_1_17) {
                      const _Array = Array;
                      obj1.collaborator_role_ids = Array.from(closure_1_7).sort();
                      const arr = Array.from(closure_1_7);
                    }
                    let tmp46 = null == tmp65.guild_id;
                    if (tmp46) {
                      if (!tmp44) {
                        if (tmp42) {
                          tmp42 = closure_1_14;
                        }
                        tmp44 = tmp42;
                      }
                      tmp46 = tmp44;
                    }
                    if (tmp46) {
                      obj1.guild_id = v0;
                    }
                    closure_1_10(true);
                    closure_1_12(false);
                    c3 = 2;
                    v0 = 3;
                    c4 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = closure_1_0(closure_1_2[24]).updateProjectSettings(closure_1_0, obj1);
                    return obj2;
                  } else {
                    const intl = closure_1_0(closure_1_2[13]).intl;
                    closure_1_11(intl.string(v0(closure_1_2[14]).I2hgEB));
                  }
                }
              }
            }
            c4 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            closure_1_12(true);
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_1_10(false);
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else if (arg1.ok) {
            obj1 = v0(closure_1_2[12]);
            obj1.hideActionSheet(closure_1_12);
            c3 = 1;
          } else {
            callback2(true);
            c3 = 0;
            callback(false);
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = undefined;
            return obj;
          }
          c3 = 0;
          closure_1_10(false);
        }
        c3 = 0;
        callback(false);
        throw closure_2;
      } catch (tmp55) {
        closure_2 = tmp55;
        if (tmp5 === c3) {
          c4 = tmp3;
          throw tmp55;
        } else if (tmp2 === tmp57) {
          v0 = tmp2;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items3);
  obj = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  let intl = tmp2(tmp3[13]).intl;
  obj[2] = intl.string(guildId(stateFromStores[14]).UYmwNU);
  obj = { title: null };
  const intl2 = tmp2(tmp3[13]).intl;
  obj[0] = intl2.string(guildId(stateFromStores[14])["xhcY+n"]);
  obj[3] = callback2(first2(stateFromStores[17]).BottomSheetTitleHeader, obj);
  obj1 = { style: tmp.content, children: null };
  let obj2 = { label: null, value: null, onChange: null, maxLength: 128, isDisabled: null };
  const intl3 = tmp2(tmp3[13]).intl;
  obj2[0] = intl3.string(guildId(stateFromStores[14]).u9UpIx);
  obj2[1] = str2;
  obj2[2] = callback;
  obj2[4] = first3;
  const items4 = [callback2(first2(stateFromStores[25]).TextInput, obj2), , , , , , ];
  let tmp31Result = null;
  if (null != tmp15) {
    let obj3 = { accessibilityRole: "alert", children: null };
    const obj4 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    obj4[2] = tmp15;
    obj3[1] = tmp31(tmp2(tmp3[16]).Text, obj4);
    tmp31Result = tmp31(tmp34, obj3);
  }
  items4[1] = tmp31Result;
  tmp31Result = null;
  if (result) {
    const obj5 = { hasIcons: false, children: null };
    const obj6 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl4 = tmp2(tmp3[13]).intl;
    obj6[0] = intl4.string(tmp32(tmp3[14]).EHMPvA);
    const intl5 = tmp2(tmp3[13]).intl;
    obj6[1] = intl5.string(tmp32(tmp3[14]).bQQ4uT);
    obj6[2] = vibegrationsProjectAccessSettings.isShared;
    obj6[3] = first3;
    obj6[4] = function onPress(arg0) {
      return callback3(first2(stateFromStores[11]).VibegrationsProjectFlags.SHAREABLE, arg0);
    };
    obj5[1] = tmp31(tmp2(tmp3[22]).TableCheckboxRow, obj6);
    tmp31Result = tmp31(tmp2(tmp3[21]).TableRowGroup, obj5);
  }
  items4[2] = tmp31Result;
  let tmp31Result1 = null;
  if (result) {
    const obj7 = { hasIcons: false, children: null };
    const obj8 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
    const intl6 = tmp2(tmp3[13]).intl;
    obj8[0] = intl6.string(tmp32(tmp3[14]).fvxLKl);
    const intl7 = tmp2(tmp3[13]).intl;
    obj8[1] = intl7.string(tmp32(tmp3[14]).Eb3Pe3);
    obj8[2] = isPublic;
    obj8[3] = first3;
    obj8[4] = function onPress(arg0) {
      return callback3(first2(stateFromStores[11]).VibegrationsProjectFlags.PUBLIC, arg0);
    };
    obj7[1] = tmp31(tmp2(tmp3[22]).TableCheckboxRow, obj8);
    tmp31Result1 = tmp31(tmp2(tmp3[21]).TableRowGroup, obj7);
  }
  items4[3] = tmp31Result1;
  let tmp31Result2 = null;
  if (result1) {
    const obj9 = { label: null, subLabel: null, arrow: true, disabled: null, accessibilityHint: null, onPress: null };
    const intl8 = tmp2(tmp3[13]).intl;
    obj9[0] = intl8.string(tmp32(tmp3[14]).fqvhf0);
    const intl9 = tmp2(tmp3[13]).intl;
    obj9[1] = intl9.string(tmp32(tmp3[14]).gWSQVl);
    let tmp39 = first3;
    if (!first3) {
      tmp39 = !isPublic;
    }
    obj9[3] = tmp39;
    let stringResult;
    if (!isPublic) {
      const intl10 = tmp2(tmp3[13]).intl;
      stringResult = intl10.string(tmp32(tmp3[14]).FTvt33);
    }
    const obj10 = { hasIcons: false, children: null };
    obj9[4] = stringResult;
    obj9[5] = callback2;
    obj10[1] = tmp31(tmp2(tmp3[26]).TableRow, obj9);
    tmp31Result2 = tmp31(tmp2(tmp3[21]).TableRowGroup, obj10);
  }
  items4[4] = tmp31Result2;
  let tmp31Result3 = null;
  if (tmp17) {
    const obj11 = { accessibilityRole: "alert", children: null };
    const obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl11 = tmp2(tmp3[13]).intl;
    obj12[2] = intl11.string(tmp32(tmp3[14]).dxH2ZV);
    obj11[1] = tmp31(tmp2(tmp3[16]).Text, obj12);
    tmp31Result3 = tmp31(tmp34, obj11);
  }
  items4[5] = tmp31Result3;
  const obj13 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl12 = tmp2(tmp3[13]).intl;
  obj13[0] = intl12.string(first2(stateFromStores[13]).t["R3BPH+"]);
  obj13[2] = first3;
  let tmp42 = !tmp26;
  if (tmp26) {
    tmp42 = "" === trimmed;
  }
  if (!tmp42) {
    tmp42 = first3;
  }
  const obj14 = { children: null };
  obj13[3] = tmp42;
  obj13[4] = callback3;
  items4[6] = callback2(first2(stateFromStores[27]).Button, obj13);
  obj1[1] = items4;
  obj14[0] = c11(closure_6, obj1);
  obj[4] = callback2(first2(stateFromStores[20]).BottomSheetScrollView, obj14);
  return callback2(first2(stateFromStores[15]).ActionSheet, obj);
};
export const VIBEGRATIONS_PROJECT_SETTINGS_SHEET_KEY = "VibegrationsProjectSettingsSheet";