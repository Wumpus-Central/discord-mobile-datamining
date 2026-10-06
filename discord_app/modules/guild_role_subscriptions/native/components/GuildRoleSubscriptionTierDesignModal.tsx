// === Module 18008: GuildRoleSubscriptionTierDesignModal ===

// Module 18008 (GuildRoleSubscriptionTierDesignModal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import useToken5 from "useToken" /* 4586 */;
import RoleIconUtils from "RoleIconUtils" /* 6693 */;
import FormHeaderDefault from "FormHeader" /* 9490 */;
import FormStylesDefault from "FormStyles" /* 13728 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15038 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15060 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 15071 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 17967 */;
import FormImagePicker from "FormImagePicker" /* 17973 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17974 */;
import EditStateContextProvider from "EditStateContextProvider" /* 17990 */;
import FormRoleColorPickerDefault from "FormRoleColorPicker" /* 18009 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const FormImagePickerDefault = FormImagePicker;
let _require;

let c10;
let c9;
let obj2;
let unpackModuleId;
const View = react_native.View;
const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionsTierScenes;
const UPLOAD_SMALL_SIZE = Constants.UPLOAD_SMALL_SIZE;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let obj = { memberPreviews: { paddingHorizontal: 16, paddingTop: 26 }, member: obj2, memberLight: { borderTopLeftRadius: 8, borderTopRightRadius: 8, borderTopWidth: 1 }, memberDark: { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderBottomWidth: 1 } };
obj2 = { padding: 16, borderRadius: nativeDefault.radii.none, borderWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((role) => {
  let items;
  let tmp13;
  const obj = react2;
  const cResult = obj.c(28);
  role = role.role;
  const tmp4 = closure_12();
  const useToken = useToken5.useToken;
  useToken5;
  const token = useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.DARK);
  const useToken2 = useToken5.useToken;
  useToken5;
  const token2 = useToken2(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.LIGHT);
  const useToken3 = useToken5.useToken;
  useToken5;
  const token3 = useToken3(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.DARK);
  const useToken4 = useToken5.useToken;
  useToken5;
  const token4 = useToken4(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.LIGHT);
  if (cResult[0] !== token2) {
    const obj2 = { backgroundColor: token2 };
    cResult[0] = token2;
    cResult[1] = obj2;
    tmp13 = obj2;
  } else {
    tmp13 = cResult[1];
  }
  if (cResult[2] === tmp4.member) {
    if (cResult[3] === tmp4.memberLight) {
      let tmp14;
      let tmp15;
      if (cResult[4] === tmp13) {
        tmp14 = cResult[5];
      }
      if (cResult[6] !== token4) {
        const obj3 = { color: token4 };
        cResult[6] = token4;
        cResult[7] = obj3;
        tmp15 = obj3;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] === role) {
        if (cResult[9] === tmp14) {
          let tmp16;
          let tmp19;
          if (cResult[10] === tmp15) {
            tmp16 = cResult[11];
          }
          if (cResult[12] !== token) {
            const obj4 = { backgroundColor: token };
            cResult[12] = token;
            cResult[13] = obj4;
            tmp19 = obj4;
          } else {
            tmp19 = cResult[13];
          }
          if (cResult[14] === tmp4.member) {
            if (cResult[15] === tmp4.memberDark) {
              let tmp20;
              let tmp21;
              if (cResult[16] === tmp19) {
                tmp20 = cResult[17];
              }
              if (cResult[18] !== token3) {
                const obj5 = { color: token3 };
                cResult[18] = token3;
                cResult[19] = obj5;
                tmp21 = obj5;
              } else {
                tmp21 = cResult[19];
              }
              if (cResult[20] === role) {
                if (cResult[21] === tmp20) {
                  let tmp22;
                  if (cResult[22] === tmp21) {
                    tmp22 = cResult[23];
                  }
                  if (cResult[24] === tmp4.memberPreviews) {
                    if (cResult[25] === tmp16) {
                      let tmp25;
                      if (cResult[26] === tmp22) {
                        tmp25 = cResult[27];
                      }
                      return tmp25;
                    }
                  }
                  const obj6 = { style: tmp4.memberPreviews, children: items };
                  items = [tmp16, tmp22];
                  const tmp28 = authStore(View, obj6);
                  cResult[24] = tmp4.memberPreviews;
                  cResult[25] = tmp16;
                  cResult[26] = tmp22;
                  cResult[27] = tmp28;
                  tmp25 = tmp28;
                }
              }
              const obj7 = { style: tmp20, textStyle: tmp21, role };
              const tmp24 = React4(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj7);
              cResult[20] = role;
              cResult[21] = tmp20;
              cResult[22] = tmp21;
              cResult[23] = tmp24;
              tmp22 = tmp24;
            }
          }
          const items1 = [, , ];
          ({ member: arr2[0], memberDark: arr2[1] } = tmp4);
          items1[2] = tmp19;
          cResult[14] = tmp4.member;
          cResult[15] = tmp4.memberDark;
          cResult[16] = tmp19;
          cResult[17] = items1;
          tmp20 = items1;
        }
      }
      const obj8 = { style: tmp14, textStyle: tmp15, role };
      const tmp18 = React4(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj8);
      cResult[8] = role;
      cResult[9] = tmp14;
      cResult[10] = tmp15;
      cResult[11] = tmp18;
      tmp16 = tmp18;
    }
  }
  const items2 = [, , ];
  ({ member: arr[0], memberLight: arr[1] } = tmp4);
  items2[2] = tmp13;
  cResult[2] = tmp4.member;
  cResult[3] = tmp4.memberLight;
  cResult[4] = tmp13;
  cResult[5] = items2;
  tmp14 = items2;
}) : ((role) => {
  let items;
  let items1;
  let items2;
  role = role.role;
  const tmp = closure_12();
  const useToken = useToken5.useToken;
  useToken5;
  const token = useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.DARK);
  const useToken2 = useToken5.useToken;
  useToken5;
  const token2 = useToken2(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.LIGHT);
  const useToken3 = useToken5.useToken;
  useToken5;
  const token3 = useToken3(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.DARK);
  const useToken4 = useToken5.useToken;
  const obj = { style: tmp.memberPreviews, children: items1 };
  useToken5;
  const token4 = useToken4(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.LIGHT);
  const obj2 = { style: items, textStyle: { color: token4 }, role };
  items = [, , ];
  ({ member: arr[0], memberLight: arr[1] } = tmp);
  items[2] = { backgroundColor: token2 };
  items1 = [React4(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj2), ];
  const obj3 = { style: items2, textStyle: { color: token3 }, role };
  items2 = [, , ];
  ({ member: arr3[0], memberDark: arr3[1] } = tmp);
  items2[2] = { backgroundColor: token };
  items1[1] = React4(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj3);
  return authStore(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let editStateId;
  let guildId;
  let items;
  let tmp12;
  let tmp14;
  let tmp18;
  let tmp22;
  let tmp24;
  let tmp27;
  let tmp29;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(29);
  const tmp5 = FormStylesDefault();
  const obj2 = EditStateContextProvider;
  const editStateContext = obj2.useEditStateContext();
  ({ editStateId, guildId } = editStateContext);
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp8, tmp9] = obj3.useRoleColor(editStateId, guildId);
  _slicedToArray(obj3.useRoleColor(editStateId, guildId), 2);
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const tmp10 = _slicedToArray(obj4.useRoleIcon(editStateId, guildId), 2)[1];
  let closure_0 = tmp10;
  const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const role = obj5.useRole(editStateId, guildId);
  if (cResult[0] !== role) {
    const tmpResult = RoleIconUtils;
    let roleIconData = tmpResult.getRoleIconData(role);
    if (roleIconData == null) {
      roleIconData = {};
    }
    cResult[0] = role;
    cResult[1] = roleIconData;
    tmp12 = roleIconData;
  } else {
    tmp12 = cResult[1];
  }
  const customIconSrc = tmp12.customIconSrc;
  if (cResult[2] !== customIconSrc) {
    let tmp16;
    if (null != customIconSrc) {
      tmp16 = { uri: customIconSrc };
      const obj6 = { uri: customIconSrc };
    }
    cResult[2] = customIconSrc;
    cResult[3] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[3];
  }
  const tmpResult2 = RoleSubscriptionSettingsDisabledContext;
  const roleSubscriptionSettingsDisabled = tmpResult2.useRoleSubscriptionSettingsDisabled();
  if (cResult[4] !== role) {
    const obj7 = { role };
    const tmp21 = React4(closure_13, obj7);
    cResult[4] = role;
    cResult[5] = tmp21;
    tmp18 = tmp21;
  } else {
    tmp18 = cResult[5];
  }
  const header = tmp5.header;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.sEr1zr);
    cResult[6] = stringResult;
    tmp22 = stringResult;
  } else {
    tmp22 = cResult[6];
  }
  if (cResult[7] !== tmp5.header) {
    const obj8 = { style: header, children: tmp22 };
    const tmp26 = React4(FormHeaderDefault, obj8);
    cResult[7] = tmp5.header;
    cResult[8] = tmp26;
    tmp24 = tmp26;
  } else {
    tmp24 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t.Glqj9m);
    cResult[9] = stringResult1;
    tmp27 = stringResult1;
  } else {
    tmp27 = cResult[9];
  }
  if (cResult[10] !== tmp10) {
    const fn = function x(icon) {
      const obj = { icon: icon.uri, unicodeEmoji: "Array" };
      return closure_0(obj);
    };
    cResult[10] = tmp10;
    cResult[11] = fn;
    tmp29 = fn;
  } else {
    tmp29 = cResult[11];
  }
  if (cResult[12] === tmp14) {
    if (cResult[13] === roleSubscriptionSettingsDisabled) {
      let tmp30;
      let tmp33;
      let tmp35;
      if (cResult[14] === tmp29) {
        tmp30 = cResult[15];
      }
      const _Symbol = Symbol;
      const header2 = tmp5.header;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl4.intl;
        const stringResult2 = intl3.string(intl4.t["W7hH+z"]);
        cResult[16] = stringResult2;
        tmp33 = stringResult2;
      } else {
        tmp33 = cResult[16];
      }
      if (cResult[17] !== tmp5.header) {
        const obj9 = { style: header2, children: tmp33 };
        const tmp37 = React4(FormHeaderDefault, obj9);
        cResult[17] = tmp5.header;
        cResult[18] = tmp37;
        tmp35 = tmp37;
      } else {
        tmp35 = cResult[18];
      }
      if (cResult[19] === tmp8) {
        if (cResult[20] === roleSubscriptionSettingsDisabled) {
          let tmp38;
          if (cResult[21] === tmp9) {
            tmp38 = cResult[22];
          }
          if (cResult[23] === tmp35) {
            if (cResult[24] === tmp38) {
              if (cResult[25] === tmp18) {
                if (cResult[26] === tmp24) {
                  let tmp41;
                  if (cResult[27] === tmp30) {
                    tmp41 = cResult[28];
                  }
                  return tmp41;
                }
              }
            }
          }
          const obj10 = { children: items };
          items = [tmp18, tmp24, tmp30, tmp35, tmp38];
          const tmp44 = authStore(unpackModuleId, obj10);
          cResult[23] = tmp35;
          cResult[24] = tmp38;
          cResult[25] = tmp18;
          cResult[26] = tmp24;
          cResult[27] = tmp30;
          cResult[28] = tmp44;
          tmp41 = tmp44;
        }
      }
      const obj11 = { color: tmp8, onChange: tmp9, disabled: roleSubscriptionSettingsDisabled };
      const tmp40 = React4(FormRoleColorPickerDefault, obj11);
      cResult[19] = tmp8;
      cResult[20] = roleSubscriptionSettingsDisabled;
      cResult[21] = tmp9;
      cResult[22] = tmp40;
      tmp38 = tmp40;
    }
  }
  const obj12 = { description: tmp27, image: tmp14, imageUploadSize: UPLOAD_SMALL_SIZE, previewShape: FormImagePicker.PreviewShape.SQUIRCLE, previewResizeMode: "cover", setImage: tmp29, disabled: roleSubscriptionSettingsDisabled };
  const tmp4Result = FormImagePickerDefault;
  const tmp32 = React4(tmp4Result, obj12);
  cResult[12] = tmp14;
  cResult[13] = roleSubscriptionSettingsDisabled;
  cResult[14] = tmp29;
  cResult[15] = tmp32;
  tmp30 = tmp32;
}) : (() => {
  let closure_0;
  let editStateId;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let role;
  let tmp7;
  let tmp8;
  const tmp3 = role(13728)();
  let obj = require("EditStateContextProvider");
  const editStateContext = obj.useEditStateContext();
  ({ editStateId, guildId } = editStateContext);
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  [tmp7, tmp8] = obj2.useRoleColor(editStateId, guildId);
  _slicedToArray(obj2.useRoleColor(editStateId, guildId), 2);
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  _require = _slicedToArray(obj3.useRoleIcon(editStateId, guildId), 2)[1];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  role = obj4.useRole(editStateId, guildId);
  const items = [role];
  const customIconSrc = react.useMemo(() => {
    const obj = RoleIconUtils;
    let roleIconData = obj.getRoleIconData(role);
    if (roleIconData == null) {
      roleIconData = {};
    }
    return roleIconData;
  }, items).customIconSrc;
  let tmp10;
  if (null != customIconSrc) {
    tmp10 = { uri: customIconSrc };
    const obj5 = { uri: customIconSrc };
  }
  const tmp4Result = require("RoleSubscriptionSettingsDisabledContext");
  const roleSubscriptionSettingsDisabled = tmp4Result.useRoleSubscriptionSettingsDisabled();
  const obj6 = { children: items1 };
  items1 = [closure_9(closure_13, { role }), , , , ];
  const obj7 = { style: tmp3.header, children: intl.string(require("intl").t.sEr1zr) };
  const tmpResult = role(9490);
  intl = tmp4(1126).intl;
  items1[1] = closure_9(tmpResult, obj7);
  const obj8 = {
    description: intl2.string(require("intl").t.Glqj9m),
    image: tmp10,
    imageUploadSize: UPLOAD_SMALL_SIZE,
    previewShape: require("FormImagePicker").PreviewShape.SQUIRCLE,
    previewResizeMode: "cover",
    setImage(icon) {
      const obj = { icon: icon.uri, unicodeEmoji: "Array" };
      return closure_0(obj);
    },
    disabled: roleSubscriptionSettingsDisabled
  };
  const tmpResult3 = role(17973);
  intl2 = tmp4(1126).intl;
  items1[2] = closure_9(tmpResult3, obj8);
  const obj9 = { style: tmp3.header, children: intl3.string(require("intl").t["W7hH+z"]) };
  const tmpResult4 = role(9490);
  intl3 = tmp4(1126).intl;
  items1[3] = closure_9(tmpResult4, obj9);
  items1[4] = closure_9(role(18009), { color: tmp7, onChange: tmp8, disabled: roleSubscriptionSettingsDisabled });
  return closure_10(closure_11, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = React4(closure_14, {});
    cResult[0] = tmp5;
    first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => React4(closure_14, {}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.AbcgTx);
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t.YAUjGn);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = React4(closure_14, {});
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const obj2 = { title: tmp4, description: tmp5, canProceedToNextStep: true, nextStep: constants.CONFIRMATION, children: tmp8 };
    const tmp15 = GuildRoleSubscriptionTierEditStepDefault;
    const merged = Object.assign(arg0);
    const tmp20 = React4(tmp15, obj2);
    cResult[3] = arg0;
    cResult[4] = tmp20;
    tmp12 = tmp20;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : ((arg0) => {
  let intl;
  let intl2;
  const obj = { title: intl.string(intl4.t.AbcgTx), description: intl2.string(intl4.t.YAUjGn), canProceedToNextStep: true, nextStep: constants.CONFIRMATION, children: React4(closure_14, {}) };
  const tmp = GuildRoleSubscriptionTierEditStepDefault;
  intl = intl4.intl;
  intl2 = intl4.intl;
  const merged = Object.assign(arg0);
  return React4(tmp, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDesignModal.tsx");

export default tmp4;
export const GuildRoleSubscriptionTierDesignTab = tmp3;