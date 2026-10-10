// === Module 18531: GuildRoleSubscriptionTierDesignModal ===

// Module 18531 (GuildRoleSubscriptionTierDesignModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useToken from "useToken" /* 4818 */;
import RoleIconUtils from "RoleIconUtils" /* 6883 */;
import FormHeaderDefault from "FormHeader" /* 8676 */;
import FormStylesDefault from "FormStyles" /* 14102 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15497 */;
import GuildRoleSubscriptionMemberPreview from "GuildRoleSubscriptionMemberPreview" /* 15508 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 18490 */;
import FormImagePicker from "FormImagePicker" /* 18496 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 18497 */;
import EditStateContextProvider from "EditStateContextProvider" /* 18513 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const FormImagePickerDefault = FormImagePicker;

require = fn;
const View = fn(17).View;
const constants = fn(15475).GuildRoleSubscriptionsTierScenes;
const UPLOAD_SMALL_SIZE = fn(1085).UPLOAD_SMALL_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { memberPreviews: { paddingHorizontal: 16, paddingTop: 26 }, member: { padding: 16, borderRadius: nativeDefault.radii.none, borderWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG }, memberLight: { borderTopLeftRadius: 8, borderTopRightRadius: 8, borderTopWidth: 1 }, memberDark: { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderBottomWidth: 1 } };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function MemberPreviews(role) {
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
                  const tmp24 = collapsed(View, obj10);
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
}) : (function MemberPreviews(role) {
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
  return collapsed(View, obj5);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function Content() {
  const cResult = c.c(29);
  const tmp5 = FormStylesDefault();
  const editStateContext = EditStateContextProvider.useEditStateContext();
  ({ editStateId, guildId } = editStateContext);
  [r10026, r10027] = GuildRoleSubscriptionListingEditStateUtilsAll.useRoleColor(editStateId, guildId);
  const tmp7 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useRoleColor(editStateId, guildId), 2);
  const tmp8 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useRoleIcon(editStateId, guildId), 2)[1];
  _require = tmp8;
  const role = GuildRoleSubscriptionListingEditStateUtilsAll.useRole(editStateId, guildId);
  if (cResult[0] !== role) {
    let roleIconData = RoleIconUtils.getRoleIconData(role);
    if (roleIconData == null) {
      roleIconData = {};
    }
    cResult[0] = role;
    cResult[1] = roleIconData;
    let tmp10 = roleIconData;
    const tmpResult = RoleIconUtils;
  } else {
    tmp10 = cResult[1];
  }
  const customIconSrc = tmp10.customIconSrc;
  if (cResult[2] !== customIconSrc) {
    let tmp14;
    if (null != customIconSrc) {
      const obj6 = { uri: customIconSrc };
      tmp14 = obj6;
    }
    cResult[2] = customIconSrc;
    cResult[3] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  const roleSubscriptionSettingsDisabled = RoleSubscriptionSettingsDisabledContext.useRoleSubscriptionSettingsDisabled();
  if (cResult[4] !== role) {
    const obj7 = { role };
    const tmp19 = options(closure_13, obj7);
    cResult[4] = role;
    cResult[5] = tmp19;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.sEr1zr);
    cResult[6] = stringResult;
    let tmp20 = stringResult;
  } else {
    tmp20 = cResult[6];
  }
  if (cResult[7] !== tmp5.header) {
    const obj8 = { style: tmp5.header, children: tmp20 };
    const tmp24 = options(FormHeaderDefault, obj8);
    cResult[7] = tmp5.header;
    cResult[8] = tmp24;
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.Glqj9m);
    cResult[9] = stringResult1;
    let tmp25 = stringResult1;
  } else {
    tmp25 = cResult[9];
  }
  if (cResult[10] !== tmp8) {
    class M {
      constructor(arg0) {
        obj = { icon: arg0.uri, unicodeEmoji: "Array" };
        return closure_0(obj);
      }
    }
    cResult[10] = tmp8;
    cResult[11] = M;
  } else {
    class M {
      constructor(arg0) {
        obj = { icon: arg0.uri, unicodeEmoji: "Array" };
        return closure_0(obj);
      }
    }
  }
  if (cResult[12] === tmp12) {
    class M {
      constructor(arg0) {
        obj = { icon: arg0.uri, unicodeEmoji: "Array" };
        return closure_0(obj);
      }
    }
  }
  const obj9 = { description: tmp25, image: tmp12, imageUploadSize: UPLOAD_SMALL_SIZE, previewShape: null, previewResizeMode: "cover", setImage: null, disabled: null };
  const tmpResult2 = RoleSubscriptionSettingsDisabledContext;
  obj9.previewShape = FormImagePicker.PreviewShape.SQUIRCLE;
  obj9.setImage = M;
  obj9.disabled = roleSubscriptionSettingsDisabled;
  const tmp4Result = FormImagePickerDefault;
  cResult[12] = tmp12;
  cResult[13] = roleSubscriptionSettingsDisabled;
  cResult[14] = M;
  cResult[15] = options(FormImagePickerDefault, obj9);
  const tmp29 = options(FormImagePickerDefault, obj9);
}) : (function Content() {
  const tmp3 = role(14102)();
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
  items1[1] = closure_9(role(8676), obj7);
  const obj8 = { description: null, image: null, imageUploadSize: null, previewShape: null, previewResizeMode: "cover", setImage: null, disabled: null };
  const tmpResult = role(8676);
  const intl2 = tmp4(1126).intl;
  obj8.description = intl2.string(require("util").t.Glqj9m);
  obj8.image = tmp10;
  obj8.imageUploadSize = UPLOAD_SMALL_SIZE;
  obj8.previewShape = require("FormImagePicker").PreviewShape.SQUIRCLE;
  obj8.setImage = function setImage(icon) {
    return closure_0({ icon: icon.uri, unicodeEmoji: "Array" });
  };
  obj8.disabled = roleSubscriptionSettingsDisabled;
  items1[2] = closure_9(role(18496), obj8);
  const obj9 = { style: tmp3.header, children: null };
  const tmpResult3 = role(18496);
  const intl3 = tmp4(1126).intl;
  obj9.children = intl3.string(require("util").t["W7hH+z"]);
  items1[3] = closure_9(role(8676), obj9);
  items1[4] = closure_9(role(18532), { color: tmp7, onChange: tmp8, disabled: roleSubscriptionSettingsDisabled });
  obj6.children = items1;
  return closure_10(closure_11, obj6);
});
fn(558);
let obj3 = { padding: 16, borderRadius: nativeDefault.radii.none, borderWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierDesignTab() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = options(closure_14, {});
    cResult[0] = tmp5;
    let first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function GuildRoleSubscriptionTierDesignTab() {
  return options(closure_14, {});
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDesignModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierDesignModal(arg0) {
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
}) : (function GuildRoleSubscriptionTierDesignModal(arg0) {
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