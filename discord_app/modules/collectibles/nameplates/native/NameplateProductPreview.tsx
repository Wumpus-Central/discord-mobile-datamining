// === Module 12973: NameplateProductPreview ===

// Module 12973 (NameplateProductPreview)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import utils from "utils" /* 1977 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import Text_Text from "Text/Text" /* 4886 */;
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 5305 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import TableRow2 from "TableRow" /* 5993 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7837 */;
import useShopProductItems from "useShopProductItems" /* 7842 */;
import useCurrentUser from "useCurrentUser" /* 7849 */;
import useAvatarDecorationIfNotExpiredDefault from "useAvatarDecorationIfNotExpired" /* 7930 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10633 */;
import types from "types" /* 10634 */;
import UserNameplateRow from "UserNameplateRow" /* 10646 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { position: "relative", flex: 1, justifyContent: "center", overflow: "hidden" }, memberListContainer: obj2, memberListTitle: obj3, memberListGradient: rect };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_8 };
rect = { position: "absolute", right: 0, left: 0, top: 0, bottom: 0, color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((avatarDecorationOverride) => {
  let items;
  let items1;
  let items2;
  let items5;
  let tmp14;
  const obj = react2;
  const cResult = obj.c(60);
  avatarDecorationOverride = avatarDecorationOverride.avatarDecorationOverride;
  const product = avatarDecorationOverride.product;
  const tmp4 = closure_8();
  const obj2 = useShopProductItems;
  const firstNameplate = obj2.useShopProductItems(product).firstNameplate;
  if (cResult[0] === firstNameplate) {
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    let tmp10;
    let tmp11;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
      tmp7 = cResult[4];
      tmp8 = cResult[5];
      tmp9 = cResult[6];
      tmp10 = cResult[7];
      tmp11 = cResult[8];
    }
    const _Symbol = Symbol;
    if (tmp11 !== Symbol.for("react.early_return_sentinel")) {
      return tmp11;
    } else {
      let tmp21;
      let tmp25;
      let tmp27;
      let tmp30;
      const memberListContainer = tmp4.memberListContainer;
      if (cResult[10] !== tmp7.mallow) {
        const obj3 = { user: tmp7.mallow, end: true };
        const tmp24 = metroRequire(closure_10, obj3);
        cResult[10] = tmp7.mallow;
        cResult[11] = tmp24;
        tmp21 = tmp24;
      } else {
        tmp21 = cResult[11];
      }
      const _Symbol2 = Symbol;
      const memberListTitle = tmp4.memberListTitle;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl4.intl;
        const stringResult = intl2.string(intl4.t["yzW/fZ"]);
        cResult[12] = stringResult;
        tmp25 = stringResult;
      } else {
        tmp25 = cResult[12];
      }
      if (cResult[13] !== tmp4.memberListTitle) {
        const obj4 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: memberListTitle, children: items };
        items = [tmp25, " \u2014 3"];
        const tmp29 = metroImportDefault(Text_Text.Text, obj4);
        cResult[13] = tmp4.memberListTitle;
        cResult[14] = tmp29;
        tmp27 = tmp29;
      } else {
        tmp27 = cResult[14];
      }
      if (cResult[15] !== tmp7.phibi) {
        const obj5 = { user: tmp7.phibi, start: true };
        const tmp33 = metroRequire(closure_10, obj5);
        cResult[15] = tmp7.phibi;
        cResult[16] = tmp33;
        tmp30 = tmp33;
      } else {
        tmp30 = cResult[16];
      }
      if (cResult[17] === avatarDecorationOverride) {
        let tmp34;
        let tmp38;
        let tmp42;
        let tmp44;
        let tmp47;
        if (cResult[18] === tmp6) {
          tmp34 = cResult[19];
        }
        if (cResult[20] !== tmp7.locke) {
          const obj6 = { user: tmp7.locke, end: true };
          const tmp41 = metroRequire(closure_10, obj6);
          cResult[20] = tmp7.locke;
          cResult[21] = tmp41;
          tmp38 = tmp41;
        } else {
          tmp38 = cResult[21];
        }
        const _Symbol3 = Symbol;
        const memberListTitle2 = tmp4.memberListTitle;
        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl4.intl;
          const stringResult1 = intl3.string(intl4.t["NG43/6"]);
          cResult[22] = stringResult1;
          tmp42 = stringResult1;
        } else {
          tmp42 = cResult[22];
        }
        if (cResult[23] !== tmp4.memberListTitle) {
          const obj7 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: memberListTitle2, children: items1 };
          items1 = [tmp42, " \u2014 12"];
          const tmp46 = metroImportDefault(Text_Text.Text, obj7);
          cResult[23] = tmp4.memberListTitle;
          cResult[24] = tmp46;
          tmp44 = tmp46;
        } else {
          tmp44 = cResult[24];
        }
        if (cResult[25] !== tmp7.boom) {
          const obj8 = { user: tmp7.boom, start: true };
          const tmp50 = metroRequire(closure_10, obj8);
          cResult[25] = tmp7.boom;
          cResult[26] = tmp50;
          tmp47 = tmp50;
        } else {
          tmp47 = cResult[26];
        }
        if (cResult[27] === tmp4.memberListContainer) {
          if (cResult[28] === tmp30) {
            if (cResult[29] === tmp34) {
              if (cResult[30] === tmp38) {
                if (cResult[31] === tmp44) {
                  if (cResult[32] === tmp47) {
                    if (cResult[33] === tmp21) {
                      let tmp51;
                      let tmp56;
                      let tmp55;
                      if (cResult[34] === tmp27) {
                        tmp51 = cResult[35];
                      }
                      const _Symbol4 = Symbol;
                      if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                        const point = { x: 0, y: 0 };
                        const point1 = { x: 0, y: 0.4 };
                        cResult[36] = point;
                        cResult[37] = point1;
                        tmp56 = point1;
                        tmp55 = point;
                      } else {
                        tmp55 = cResult[36];
                        tmp56 = cResult[37];
                      }
                      const _HermesInternal = HermesInternal;
                      const combined = "" + tmp4.memberListGradient.color + "00";
                      if (cResult[38] === tmp4.memberListGradient.color) {
                        let tmp58;
                        if (cResult[39] === combined) {
                          tmp58 = cResult[40];
                        }
                        if (cResult[41] === tmp4.memberListGradient) {
                          let tmp59;
                          let tmp64;
                          let tmp63;
                          if (cResult[42] === tmp58) {
                            tmp59 = cResult[43];
                          }
                          const _Symbol5 = Symbol;
                          if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                            const point2 = { x: 0, y: 0.6 };
                            const point3 = { x: 0, y: 1 };
                            cResult[44] = point2;
                            cResult[45] = point3;
                            tmp64 = point3;
                            tmp63 = point2;
                          } else {
                            tmp63 = cResult[44];
                            tmp64 = cResult[45];
                          }
                          const _HermesInternal2 = HermesInternal;
                          const combined1 = "" + tmp4.memberListGradient.color + "00";
                          if (cResult[46] === tmp4.memberListGradient.color) {
                            let tmp66;
                            if (cResult[47] === combined1) {
                              tmp66 = cResult[48];
                            }
                            if (cResult[49] === tmp4.memberListGradient) {
                              let tmp67;
                              if (cResult[50] === tmp66) {
                                tmp67 = cResult[51];
                              }
                              if (cResult[52] === tmp5) {
                                if (cResult[53] === tmp8) {
                                  if (cResult[54] === tmp51) {
                                    if (cResult[55] === tmp9) {
                                      if (cResult[56] === tmp59) {
                                        if (cResult[57] === tmp67) {
                                          let tmp71;
                                          if (cResult[58] === tmp10) {
                                            tmp71 = cResult[59];
                                          }
                                          return tmp71;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj9 = { style: tmp8, pointerEvents: tmp9, accessibilityLabel: tmp10, accessibilityRole: "image", accessible: true, children: items2 };
                              items2 = [tmp51, tmp59, tmp67];
                              const tmp73 = metroImportDefault(tmp5, obj9);
                              cResult[52] = tmp5;
                              cResult[53] = tmp8;
                              cResult[54] = tmp51;
                              cResult[55] = tmp9;
                              cResult[56] = tmp59;
                              cResult[57] = tmp67;
                              cResult[58] = tmp10;
                              cResult[59] = tmp73;
                              tmp71 = tmp73;
                            }
                            const obj10 = { style: tmp4.memberListGradient, start: tmp63, end: tmp64, colors: tmp66 };
                            const tmp70 = metroRequire(LinearGradientDefault, obj10);
                            cResult[49] = tmp4.memberListGradient;
                            cResult[50] = tmp66;
                            cResult[51] = tmp70;
                            tmp67 = tmp70;
                          }
                          const items3 = [combined1, tmp4.memberListGradient.color];
                          cResult[46] = tmp4.memberListGradient.color;
                          cResult[47] = combined1;
                          cResult[48] = items3;
                          tmp66 = items3;
                        }
                        const obj11 = { style: tmp4.memberListGradient, start: tmp55, end: tmp56, colors: tmp58 };
                        const tmp62 = metroRequire(LinearGradientDefault, obj11);
                        cResult[41] = tmp4.memberListGradient;
                        cResult[42] = tmp58;
                        cResult[43] = tmp62;
                        tmp59 = tmp62;
                      }
                      const items4 = [tmp4.memberListGradient.color, combined];
                      cResult[38] = tmp4.memberListGradient.color;
                      cResult[39] = combined;
                      cResult[40] = items4;
                      tmp58 = items4;
                    }
                  }
                }
              }
            }
          }
        }
        const obj12 = { style: memberListContainer, children: items5 };
        items5 = [tmp21, tmp27, tmp30, tmp34, tmp38, tmp44, tmp47];
        const tmp54 = metroImportDefault(View, obj12);
        cResult[27] = tmp4.memberListContainer;
        cResult[28] = tmp30;
        cResult[29] = tmp34;
        cResult[30] = tmp38;
        cResult[31] = tmp44;
        cResult[32] = tmp47;
        cResult[33] = tmp21;
        cResult[34] = tmp27;
        cResult[35] = tmp54;
        tmp51 = tmp54;
      }
      const obj13 = { previewNameplate: tmp6, previewAvatarDecoration: avatarDecorationOverride };
      const tmp37 = metroRequire(closure_9, obj13);
      cResult[17] = avatarDecorationOverride;
      cResult[18] = tmp6;
      cResult[19] = tmp37;
      tmp34 = tmp37;
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const tmpResult = utils;
  const nameplateData = tmpResult.getNameplateData(firstNameplate);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult2 = utils;
    const nameplateSampleUsers = tmpResult2.getNameplateSampleUsers();
    cResult[9] = nameplateSampleUsers;
    tmp14 = nameplateSampleUsers;
  } else {
    tmp14 = cResult[9];
  }
  let tmp16 = null;
  let formatToPlainStringResult;
  let str;
  let container;
  let tmp19;
  if (null != nameplateData) {
    tmp19 = View;
    container = tmp4.container;
    const intl = intl4.intl;
    const obj14 = { a11y_text: nameplateData.imgAlt };
    formatToPlainStringResult = intl.formatToPlainString(intl4.t.YJig7C, obj14);
    str = "box-none";
    tmp16 = forResult;
  }
  cResult[0] = firstNameplate;
  cResult[1] = tmp4;
  cResult[2] = tmp19;
  cResult[3] = nameplateData;
  cResult[4] = tmp14;
  cResult[5] = container;
  cResult[6] = str;
  cResult[7] = formatToPlainStringResult;
  cResult[8] = tmp16;
  tmp11 = tmp16;
  tmp10 = formatToPlainStringResult;
  tmp9 = str;
  tmp8 = container;
  tmp5 = tmp19;
  tmp7 = tmp14;
  tmp6 = nameplateData;
}) : ((arg0) => {
  let avatarDecorationOverride;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj5;
  let product;
  ({ product, avatarDecorationOverride } = arg0);
  const tmp = closure_8();
  const obj = useShopProductItems;
  const firstNameplate = obj.useShopProductItems(product).firstNameplate;
  const obj2 = utils;
  const nameplateData = obj2.getNameplateData(firstNameplate);
  const obj3 = utils;
  const nameplateSampleUsers = obj3.getNameplateSampleUsers();
  let tmp6 = null;
  if (null != nameplateData) {
    const obj4 = { style: tmp.container, pointerEvents: "box-none", accessibilityLabel: intl.formatToPlainString(intl4.t.YJig7C, obj5), accessibilityRole: "image", accessible: true, children: items3 };
    intl = intl4.intl;
    obj5 = { a11y_text: nameplateData.imgAlt };
    const obj6 = { style: tmp.memberListContainer, children: items };
    const obj7 = { user: nameplateSampleUsers.mallow, end: true };
    items = [metroRequire(closure_10, obj7), , , , , , ];
    const obj8 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp.memberListTitle, children: items1 };
    const Text = Text_Text.Text;
    const intl2 = intl4.intl;
    items1 = [intl2.string(intl4.t["yzW/fZ"]), " \u2014 3"];
    items[1] = metroImportDefault(Text, obj8);
    const obj9 = { user: nameplateSampleUsers.phibi, start: true };
    items[2] = metroRequire(closure_10, obj9);
    const obj10 = { previewNameplate: nameplateData, previewAvatarDecoration: avatarDecorationOverride };
    items[3] = metroRequire(closure_9, obj10);
    const obj11 = { user: nameplateSampleUsers.locke, end: true };
    items[4] = metroRequire(closure_10, obj11);
    const obj12 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp.memberListTitle, children: items2 };
    const Text2 = Text_Text.Text;
    const intl3 = intl4.intl;
    items2 = [intl3.string(intl4.t["NG43/6"]), " \u2014 12"];
    items[5] = metroImportDefault(Text2, obj12);
    const obj13 = { user: nameplateSampleUsers.boom, start: true };
    items[6] = metroRequire(closure_10, obj13);
    items3 = [metroImportDefault(View, obj6), , ];
    const obj14 = { style: tmp.memberListGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 0.4 }, colors: items4 };
    items4 = [tmp.memberListGradient.color, ];
    const _HermesInternal = HermesInternal;
    const tmp13 = LinearGradientDefault;
    items4[1] = "" + tmp.memberListGradient.color + "00";
    items3[1] = metroRequire(tmp13, obj14);
    const _HermesInternal2 = HermesInternal;
    const obj15 = { style: tmp.memberListGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: items5 };
    items5 = [, ];
    const tmp15 = LinearGradientDefault;
    items5[0] = "" + tmp.memberListGradient.color + "00";
    items5[1] = tmp.memberListGradient.color;
    items3[2] = metroRequire(tmp15, obj15);
    tmp6 = metroImportDefault(View, obj4);
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let previewAvatarDecoration;
  let previewNameplate;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(20);
  ({ previewNameplate, previewAvatarDecoration } = arg0);
  const obj2 = useCurrentUser;
  const currentUser = obj2.useCurrentUser();
  let avatarDecoration;
  if (currentUser != null) {
    avatarDecoration = currentUser.avatarDecoration;
  }
  if (cResult[0] === previewAvatarDecoration) {
    let tmp6;
    let tmp12;
    let tmp11;
    let tmp15;
    let tmp17;
    if (cResult[1] === avatarDecoration) {
      tmp6 = cResult[2];
    }
    const tmp9 = useAvatarDecorationIfNotExpiredDefault(tmp6);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      const fn = function y() {
        return useReducedMotion.useReducedMotion;
      };
      cResult[3] = items;
      cResult[4] = fn;
      tmp12 = fn;
      tmp11 = items;
    } else {
      tmp11 = cResult[3];
      tmp12 = cResult[4];
    }
    const tmpResult = get_initialized;
    const stateFromStores = tmpResult.useStateFromStores(tmp11, tmp12);
    if (cResult[5] !== currentUser) {
      const tmp8Result = UserUtilsDefault;
      const name = tmp8Result.getName(currentUser);
      cResult[5] = currentUser;
      cResult[6] = name;
      tmp15 = name;
    } else {
      tmp15 = cResult[6];
    }
    if (cResult[7] !== currentUser.id) {
      const obj3 = { userId: currentUser.id };
      cResult[7] = currentUser.id;
      cResult[8] = obj3;
      tmp17 = obj3;
    } else {
      tmp17 = cResult[8];
    }
    let tmp18 = tmp15;
    if (null != useDisplayNameStylesDefault(tmp17)) {
      if (cResult[9] === tmp15) {
        let tmp19;
        if (cResult[10] === currentUser.id) {
          tmp19 = cResult[11];
        }
        tmp18 = tmp19;
      }
      const obj4 = { userId: currentUser.id, userName: tmp15, effectDisplayType: types.EffectDisplayType.STATIC, lineClamp: 1, variant: "text-md/semibold" };
      const tmp8Result2 = UsernameWithEffectsDefault;
      const tmp22 = metroRequire(tmp8Result2, obj4);
      cResult[9] = tmp15;
      cResult[10] = currentUser.id;
      cResult[11] = tmp22;
      tmp19 = tmp22;
    }
    if (cResult[12] === tmp9) {
      if (cResult[13] === !stateFromStores) {
        let tmp24;
        if (cResult[14] === currentUser) {
          tmp24 = cResult[15];
        }
        if (cResult[16] === tmp18) {
          if (cResult[17] === previewNameplate) {
            let tmp27;
            if (cResult[18] === tmp24) {
              tmp27 = cResult[19];
            }
            return tmp27;
          }
        }
        const obj5 = { nameplate: previewNameplate, icon: tmp24, label: tmp18, isPreviewRow: true };
        const tmp29 = metroRequire(UserNameplateRow.UserNameplateRow, obj5);
        cResult[16] = tmp18;
        cResult[17] = previewNameplate;
        cResult[18] = tmp24;
        cResult[19] = tmp29;
        tmp27 = tmp29;
      }
    }
    const obj6 = { user: currentUser, guildId: "a", size: native.AvatarSizes.NORMAL, avatarDecoration: tmp9, animate: !stateFromStores, autoStatusCutout: null, "aria-hidden": "SOURCE" };
    const Avatar = native.Avatar;
    const tmp26 = metroRequire(Avatar, obj6);
    cResult[12] = tmp9;
    cResult[13] = !stateFromStores;
    cResult[14] = currentUser;
    cResult[15] = tmp26;
    tmp24 = tmp26;
  }
  const tmpResult2 = ProfileCustomizationUtils;
  const profilePreviewValue = tmpResult2.getProfilePreviewValue({ pendingValue: previewAvatarDecoration, userValue: avatarDecoration });
  cResult[0] = previewAvatarDecoration;
  cResult[1] = avatarDecoration;
  cResult[2] = profilePreviewValue;
  tmp6 = profilePreviewValue;
}) : ((arg0) => {
  let avatarDecoration;
  let previewAvatarDecoration;
  let previewNameplate;
  let useReducedMotion;
  let currentUser;
  importDefault = undefined;
  let stateFromStores;
  ({ previewNameplate, previewAvatarDecoration } = arg0);
  let obj = currentUser(stateFromStores[13]);
  currentUser = obj.useCurrentUser();
  const obj2 = { pendingValue: previewAvatarDecoration, userValue: avatarDecoration };
  avatarDecoration = undefined;
  const tmp5 = require("useAvatarDecorationIfNotExpired");
  const getProfilePreviewValue = currentUser(stateFromStores[14]).getProfilePreviewValue;
  currentUser(stateFromStores[14]);
  if (currentUser != null) {
    avatarDecoration = currentUser.avatarDecoration;
  }
  const tmp5Result = tmp5(getProfilePreviewValue(obj2));
  importDefault = tmp5Result;
  const items = [AccessibilityStore];
  const tmpResult = currentUser(stateFromStores[16]);
  stateFromStores = tmpResult.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4Result = require("UserUtils");
  const name = tmp4Result.getName(currentUser);
  let label = name;
  const obj3 = { userId: currentUser.id };
  if (null != require("useDisplayNameStyles")(obj3)) {
    const obj4 = { userId: currentUser.id, userName: name, effectDisplayType: currentUser(stateFromStores[20]).EffectDisplayType.STATIC, lineClamp: 1, variant: "text-md/semibold" };
    const tmp4Result2 = require("UsernameWithEffects");
    label = closure_6(tmp4Result2, obj4);
  }
  const items1 = [currentUser, tmp5Result, stateFromStores];
  const icon = react.useMemo(() => {
    const obj = { user: currentUser, guildId: "a", size: native.AvatarSizes.NORMAL, avatarDecoration, animate: !stateFromStores, autoStatusCutout: null, "aria-hidden": "SOURCE" };
    const Avatar = native.Avatar;
    return metroRequire(Avatar, obj);
  }, items1);
  return closure_6(currentUser(stateFromStores[22]).UserNameplateRow, { nameplate, icon, label, isPreviewRow: true });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let end;
  let obj3;
  let start;
  let tmp6;
  let user;
  const obj = react2;
  const cResult = obj.c(7);
  ({ user, start, end } = arg0);
  if (cResult[0] !== user.avatarSrc) {
    const obj2 = { source: obj3, size: native.AvatarSizes.NORMAL, "aria-hidden": true };
    obj3 = { uri: user.avatarSrc };
    const Avatar = native.Avatar;
    const tmp8 = metroRequire(Avatar, obj2);
    cResult[0] = user.avatarSrc;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === (undefined !== end && end)) {
    if (cResult[3] === (undefined !== start && start)) {
      if (cResult[4] === tmp6) {
        let tmp9;
        if (cResult[5] === user.name) {
          tmp9 = cResult[6];
        }
        return tmp9;
      }
    }
  }
  const obj4 = { icon: tmp6, label: user.name, start: undefined !== start && start, end: undefined !== end && end };
  const tmp10 = metroRequire(TableRow2.TableRow, obj4);
  cResult[2] = undefined !== end && end;
  cResult[3] = undefined !== start && start;
  cResult[4] = tmp6;
  cResult[5] = user.name;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : ((end) => {
  let Avatar;
  let obj2;
  let start;
  let user;
  ({ user, start } = end);
  if (start === undefined) {
    start = false;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { icon: metroRequire(Avatar, obj2), label: user.name, start, end: flag };
  const TableRow = TableRow2.TableRow;
  obj2 = { source: { uri: user.avatarSrc }, size: native.AvatarSizes.NORMAL, "aria-hidden": true };
  Avatar = native.Avatar;
  return metroRequire(TableRow, obj);
});
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateProductPreview.tsx");

export default tmp4;