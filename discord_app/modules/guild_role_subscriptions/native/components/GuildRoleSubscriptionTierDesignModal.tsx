// === Module 17940: GuildRoleSubscriptionTierDesignModal ===

// Module 17940 (GuildRoleSubscriptionTierDesignModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useToken from "useToken" /* 4580 */;
import RoleIconUtils from "RoleIconUtils" /* 6686 */;
import FormHeaderDefault from "FormHeader" /* 9477 */;
import FormStylesDefault from "FormStyles" /* 13708 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15041 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 15052 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 17897 */;
import FormImagePicker from "FormImagePicker" /* 17903 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17906 */;
import EditStateContextProvider from "EditStateContextProvider" /* 17922 */;
import FormRoleColorPickerDefault from "FormRoleColorPicker" /* 17941 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const FormImagePickerDefault = FormImagePicker;

require = fn;
const View = fn(17).View;
const constants = fn(15019).GuildRoleSubscriptionsTierScenes;
const UPLOAD_SMALL_SIZE = fn(1085).UPLOAD_SMALL_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { memberPreviews: { paddingHorizontal: 16, paddingTop: 26 }, member: { padding: 16, borderRadius: nativeDefault.radii.none, borderWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG }, memberLight: { borderTopLeftRadius: 8, borderTopRightRadius: 8, borderTopWidth: 1 }, memberDark: { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderBottomWidth: 1 } };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((role) => {
  const cResult = c.c(28);
  role = role.role;
  const tmp4 = closure_12();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.DARK);
  const token1 = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.LIGHT);
  const token2 = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.DARK);
  const token3 = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.LIGHT);
  if (cResult[0] !== token1) {
    const obj6 = { backgroundColor: token1 };
    cResult[0] = token1;
    cResult[1] = obj6;
    let tmp9 = obj6;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === tmp4.member) {
    if (cResult[3] === tmp4.memberLight) {
      if (cResult[4] === tmp9) {
        let tmp10 = cResult[5];
      }
      if (cResult[6] !== token3) {
        const obj7 = { color: token3 };
        cResult[6] = token3;
        cResult[7] = obj7;
        let tmp11 = obj7;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === role) {
        if (cResult[9] === tmp10) {
          if (cResult[10] === tmp11) {
            let tmp12 = cResult[11];
          }
          if (cResult[12] !== token) {
            const obj8 = { backgroundColor: token };
            cResult[12] = token;
            cResult[13] = obj8;
            let tmp15 = obj8;
          } else {
            tmp15 = cResult[13];
          }
          if (cResult[14] === tmp4.member) {
            if (cResult[15] === tmp4.memberDark) {
              if (cResult[16] === tmp15) {
                let tmp16 = cResult[17];
              }
              if (cResult[18] !== token2) {
                const obj9 = { color: token2 };
                cResult[18] = token2;
                cResult[19] = obj9;
                let tmp17 = obj9;
              } else {
                tmp17 = cResult[19];
              }
              if (cResult[20] === role) {
                if (cResult[21] === tmp16) {
                  if (cResult[22] === tmp17) {
                    let tmp18 = cResult[23];
                  }
                  if (cResult[24] === tmp4.memberPreviews) {
                    if (cResult[25] === tmp12) {
                      if (cResult[26] === tmp18) {
                        let tmp21 = cResult[27];
                      }
                      return tmp21;
                    }
                  }
                  const obj10 = { style: tmp4.memberPreviews, children: null };
                  const items = [tmp12, tmp18];
                  obj10.children = items;
                  const tmp24 = v65535(View, obj10);
                  cResult[24] = tmp4.memberPreviews;
                  cResult[25] = tmp12;
                  cResult[26] = tmp18;
                  cResult[27] = tmp24;
                  tmp21 = tmp24;
                }
              }
              const obj11 = { style: tmp16, textStyle: tmp17, role };
              const tmp20 = options(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj11);
              cResult[20] = role;
              cResult[21] = tmp16;
              cResult[22] = tmp17;
              cResult[23] = tmp20;
              tmp18 = tmp20;
            }
          }
          const items1 = [, , ];
          ({ member: arr2[0], memberDark: arr2[1] } = tmp4);
          items1[2] = tmp15;
          cResult[14] = tmp4.member;
          cResult[15] = tmp4.memberDark;
          cResult[16] = tmp15;
          cResult[17] = items1;
          tmp16 = items1;
        }
      }
      const obj12 = { style: tmp10, textStyle: tmp11, role };
      const tmp14 = options(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj12);
      cResult[8] = role;
      cResult[9] = tmp10;
      cResult[10] = tmp11;
      cResult[11] = tmp14;
      tmp12 = tmp14;
    }
  }
  const items2 = [, , ];
  ({ member: arr[0], memberLight: arr[1] } = tmp4);
  items2[2] = tmp9;
  cResult[2] = tmp4.member;
  cResult[3] = tmp4.memberLight;
  cResult[4] = tmp9;
  cResult[5] = items2;
  tmp10 = items2;
}) : ((role) => {
  role = role.role;
  const tmp = closure_12();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.DARK);
  const token1 = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW, nativeDefault.themes.LIGHT);
  const token2 = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.DARK);
  const obj5 = { style: tmp.memberPreviews, children: null };
  const token3 = useToken.useToken(nativeDefault.colors.TEXT_DEFAULT, nativeDefault.themes.LIGHT);
  const obj6 = { style: null, textStyle: { color: token3 }, role };
  const items = [, , ];
  ({ member: arr[0], memberLight: arr[1] } = tmp);
  items[2] = { backgroundColor: token1 };
  obj6.style = items;
  const items1 = [options(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj6), ];
  const obj7 = { style: null, textStyle: { color: token2 }, role };
  const items2 = [, , ];
  ({ member: arr3[0], memberDark: arr3[1] } = tmp);
  items2[2] = { backgroundColor: token };
  obj7.style = items2;
  items1[1] = options(GuildRoleSubscriptionMemberPreview.GuildRoleSubscriptionMemberPreview, obj7);
  obj5.children = items1;
  return v65535(View, obj5);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(29);
  const tmp5 = FormStylesDefault();
  const editStateContext = EditStateContextProvider.useEditStateContext();
  ({ editStateId, guildId } = editStateContext);
  [tmp8, tmp9] = GuildRoleSubscriptionListingEditStateUtilsAll.useRoleColor(editStateId, guildId);
  const tmp7 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useRoleColor(editStateId, guildId), 2);
  const tmp10 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useRoleIcon(editStateId, guildId), 2)[1];
  closure_0 = tmp10;
  const role = GuildRoleSubscriptionListingEditStateUtilsAll.useRole(editStateId, guildId);
  if (cResult[0] !== role) {
    let roleIconData = RoleIconUtils.getRoleIconData(role);
    if (roleIconData == null) {
      roleIconData = {};
    }
    cResult[0] = role;
    cResult[1] = roleIconData;
    let tmp12 = roleIconData;
    const tmpResult = RoleIconUtils;
  } else {
    tmp12 = cResult[1];
  }
  const customIconSrc = tmp12.customIconSrc;
  if (cResult[2] !== customIconSrc) {
    let tmp16;
    if (null != customIconSrc) {
      const obj6 = { uri: customIconSrc };
      tmp16 = obj6;
    }
    cResult[2] = customIconSrc;
    cResult[3] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[3];
  }
  const roleSubscriptionSettingsDisabled = RoleSubscriptionSettingsDisabledContext.useRoleSubscriptionSettingsDisabled();
  if (cResult[4] !== role) {
    const obj7 = { role };
    const tmp21 = options(closure_13, obj7);
    cResult[4] = role;
    cResult[5] = tmp21;
    let tmp18 = tmp21;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.sEr1zr);
    cResult[6] = stringResult;
    let tmp22 = stringResult;
  } else {
    tmp22 = cResult[6];
  }
  if (cResult[7] !== tmp5.header) {
    const obj8 = { style: tmp5.header, children: tmp22 };
    const tmp26 = options(FormHeaderDefault, obj8);
    cResult[7] = tmp5.header;
    cResult[8] = tmp26;
    let tmp24 = tmp26;
  } else {
    tmp24 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.Glqj9m);
    cResult[9] = stringResult1;
    let tmp27 = stringResult1;
  } else {
    tmp27 = cResult[9];
  }
  if (cResult[10] !== tmp10) {
    const fn = function x(icon) {
      return closure_0({ icon: icon.uri, unicodeEmoji: "a" });
    };
    cResult[10] = tmp10;
    cResult[11] = fn;
    let tmp29 = fn;
  } else {
    tmp29 = cResult[11];
  }
  if (cResult[12] === tmp14) {
    if (cResult[13] === roleSubscriptionSettingsDisabled) {
      if (cResult[14] === tmp29) {
        let tmp30 = cResult[15];
      }
      const _Symbol = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult2 = intl3.string(util.t["W7hH+z"]);
        cResult[16] = stringResult2;
        let tmp33 = stringResult2;
      } else {
        tmp33 = cResult[16];
      }
      if (cResult[17] !== tmp5.header) {
        const obj9 = { style: tmp5.header, children: tmp33 };
        const tmp37 = options(FormHeaderDefault, obj9);
        cResult[17] = tmp5.header;
        cResult[18] = tmp37;
        let tmp35 = tmp37;
      } else {
        tmp35 = cResult[18];
      }
      if (cResult[19] === tmp8) {
        if (cResult[20] === roleSubscriptionSettingsDisabled) {
          if (cResult[21] === tmp9) {
            let tmp38 = cResult[22];
          }
          if (cResult[23] === tmp35) {
            if (cResult[24] === tmp38) {
              if (cResult[25] === tmp18) {
                if (cResult[26] === tmp24) {
                  if (cResult[27] === tmp30) {
                    let tmp41 = cResult[28];
                  }
                  return tmp41;
                }
              }
            }
          }
          const obj10 = { children: null };
          const items = [tmp18, tmp24, tmp30, tmp35, tmp38];
          obj10.children = items;
          const tmp44 = v65535(closure_1_11, obj10);
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
      const tmp40 = options(FormRoleColorPickerDefault, obj11);
      cResult[19] = tmp8;
      cResult[20] = roleSubscriptionSettingsDisabled;
      cResult[21] = tmp9;
      cResult[22] = tmp40;
      tmp38 = tmp40;
    }
  }
  const obj12 = { description: tmp27, image: tmp14, imageUploadSize: UPLOAD_SMALL_SIZE, previewShape: null, previewResizeMode: "cover", setImage: null, disabled: null };
  const tmpResult2 = RoleSubscriptionSettingsDisabledContext;
  obj12.previewShape = FormImagePicker.PreviewShape.SQUIRCLE;
  obj12.setImage = tmp29;
  obj12.disabled = roleSubscriptionSettingsDisabled;
  const tmp32 = options(FormImagePickerDefault, obj12);
  cResult[12] = tmp14;
  cResult[13] = roleSubscriptionSettingsDisabled;
  cResult[14] = tmp29;
  cResult[15] = tmp32;
  tmp30 = tmp32;
  const tmp4Result = FormImagePickerDefault;
}) : (() => {
  const tmp3 = role(13708)();
  const editStateContext = require("EditStateContextProvider").useEditStateContext();
  ({ editStateId, guildId } = editStateContext);
  const obj = require("EditStateContextProvider");
  [tmp7, tmp8] = GuildRoleSubscriptionListingEditStateUtilsAll.useRoleColor(editStateId, guildId);
  const tmp6 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useRoleColor(editStateId, guildId), 2);
  _require = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useRoleIcon(editStateId, guildId), 2)[1];
  role = GuildRoleSubscriptionListingEditStateUtilsAll.useRole(editStateId, guildId);
  const items = [role];
  const customIconSrc = noop.useMemo(() => {
    let roleIconData = RoleIconUtils.getRoleIconData(role);
    if (roleIconData == null) {
      roleIconData = {};
    }
    return roleIconData;
  }, items).customIconSrc;
  let tmp10;
  if (null != customIconSrc) {
    const obj5 = { uri: customIconSrc };
    tmp10 = obj5;
  }
  const roleSubscriptionSettingsDisabled = require("RoleSubscriptionSettingsDisabledContext").useRoleSubscriptionSettingsDisabled();
  const obj6 = { children: null };
  const items1 = [closure_9(closure_13, { role }), , , , ];
  const obj7 = { style: tmp3.header, children: null };
  const tmp4Result = require("RoleSubscriptionSettingsDisabledContext");
  const intl = tmp4(1126).intl;
  obj7.children = intl.string(require("util").t.sEr1zr);
  items1[1] = closure_9(role(9477), obj7);
  const obj8 = { description: null, image: null, imageUploadSize: null, previewShape: null, previewResizeMode: "cover", setImage: null, disabled: null };
  const tmpResult = role(9477);
  const intl2 = tmp4(1126).intl;
  obj8.description = intl2.string(require("util").t.Glqj9m);
  obj8.image = tmp10;
  obj8.imageUploadSize = UPLOAD_SMALL_SIZE;
  obj8.previewShape = require("FormImagePicker").PreviewShape.SQUIRCLE;
  obj8.setImage = function setImage(icon) {
    return closure_0({ icon: icon.uri, unicodeEmoji: "a" });
  };
  obj8.disabled = roleSubscriptionSettingsDisabled;
  items1[2] = closure_9(role(17903), obj8);
  const obj9 = { style: tmp3.header, children: null };
  const tmpResult3 = role(17903);
  const intl3 = tmp4(1126).intl;
  obj9.children = intl3.string(require("util").t["W7hH+z"]);
  items1[3] = closure_9(role(9477), obj9);
  items1[4] = closure_9(role(17941), { color: tmp7, onChange: tmp8, disabled: roleSubscriptionSettingsDisabled });
  obj6.children = items1;
  return closure_10(closure_11, obj6);
});
fn(558);
let obj3 = { padding: 16, borderRadius: nativeDefault.radii.none, borderWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = options(closure_14, {});
    cResult[0] = tmp5;
    let first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => options(closure_14, {}));
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDesignModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.AbcgTx);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.YAUjGn);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = options(closure_14, {});
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const obj2 = { title: tmp4, description: tmp5, canProceedToNextStep: true, nextStep: constants.CONFIRMATION };
    const merged = Object.assign(arg0);
    obj2.children = tmp8;
    const tmp20 = options(GuildRoleSubscriptionTierEditStepDefault, obj2);
    cResult[3] = arg0;
    cResult[4] = tmp20;
    let tmp12 = tmp20;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : ((arg0) => {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.AbcgTx);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.YAUjGn);
  obj.nextStep = constants.CONFIRMATION;
  const merged = Object.assign(arg0);
  obj.children = options(closure_14, {});
  return options(GuildRoleSubscriptionTierEditStepDefault, obj);
});
export const GuildRoleSubscriptionTierDesignTab = tmp3;