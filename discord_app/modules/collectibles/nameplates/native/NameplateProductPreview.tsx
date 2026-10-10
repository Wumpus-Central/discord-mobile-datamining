// === Module 13413: NameplateProductPreview ===

// Module 13413 (NameplateProductPreview)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import utils from "utils" /* 1990 */;
import Text_Text from "Text/Text" /* 5088 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import TableRow from "TableRow" /* 6179 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8290 */;
import useShopProductItems from "useShopProductItems" /* 8295 */;
import useCurrentUser from "useCurrentUser" /* 8302 */;
import useAvatarDecorationIfNotExpiredDefault from "useAvatarDecorationIfNotExpired" /* 8383 */;
import types from "types" /* 10263 */;
import UserNameplateRow from "UserNameplateRow" /* 10277 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { position: "relative", flex: 1, justifyContent: "center", overflow: "hidden" }, memberListContainer: { paddingHorizontal: nativeDefault.space.PX_16 }, memberListTitle: null, memberListGradient: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.memberListTitle = { paddingVertical: nativeDefault.space.PX_8 };
const rect = { position: "absolute", right: 0, left: 0, top: 0, bottom: 0, color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.memberListGradient = rect;
let closure_8 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { paddingVertical: nativeDefault.space.PX_8 };
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function NameplateUser(arg0) {
  const cResult = c.c(20);
  ({ previewNameplate, previewAvatarDecoration } = arg0);
  const currentUser = useCurrentUser.useCurrentUser();
  let avatarDecoration;
  if (currentUser != null) {
    avatarDecoration = currentUser.avatarDecoration;
  }
  if (cResult[0] === previewAvatarDecoration) {
    if (cResult[1] === avatarDecoration) {
      let tmp6 = cResult[2];
    }
    let tmp8 = importDefault;
    const tmp9 = useAvatarDecorationIfNotExpiredDefault(tmp6);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      const fn = function y() {
        return useReducedMotion.useReducedMotion;
      };
      cResult[3] = items;
      cResult[4] = fn;
      let tmp12 = fn;
      let tmp11 = items;
    } else {
      tmp11 = cResult[3];
      tmp12 = cResult[4];
    }
    const stateFromStores = initialize.useStateFromStores(tmp11, tmp12);
    if (cResult[5] !== currentUser) {
      const name = tmp8(4962).getName(currentUser);
      cResult[5] = currentUser;
      cResult[6] = name;
      let id = name;
      const tmp8Result = tmp8(4962);
    } else {
      id = cResult[6];
    }
    if (cResult[7] !== currentUser.id) {
      const obj3 = { userId: currentUser.id };
      cResult[7] = currentUser.id;
      cResult[8] = obj3;
      let tmp16 = obj3;
    } else {
      tmp16 = cResult[8];
    }
    if (null == tmp8(5628)(tmp16)) {
      if (cResult[12] === tmp9) {
        if (cResult[13] === tmp22) {
          if (cResult[14] === currentUser) {
            let tmp23 = cResult[15];
          }
          if (cResult[16] === id) {
            if (cResult[17] === previewNameplate) {
              if (cResult[18] === tmp23) {
                let tmp26 = cResult[19];
              }
              return tmp26;
            }
          }
          const obj4 = { nameplate: previewNameplate, icon: tmp23, label: id, isPreviewRow: true };
          const tmp28 = timestampProducer(UserNameplateRow.UserNameplateRow, obj4);
          cResult[16] = id;
          cResult[17] = previewNameplate;
          cResult[18] = tmp23;
          cResult[19] = tmp28;
          tmp26 = tmp28;
        }
      }
      const obj5 = { user: currentUser, guildId: "a", size: native.AvatarSizes.NORMAL, avatarDecoration: tmp9, animate: !stateFromStores, autoStatusCutout: false, "aria-hidden": false };
      const tmp25 = timestampProducer(native.Avatar, obj5);
      cResult[12] = tmp9;
      cResult[13] = !stateFromStores;
      cResult[14] = currentUser;
      cResult[15] = tmp25;
      tmp23 = tmp25;
    } else {
      if (cResult[9] === id) {
      }
      tmp8 = tmp8(10262);
      const obj6 = { userId: currentUser.id, userName: id, effectDisplayType: types.EffectDisplayType.STATIC, lineClamp: 1, variant: "text-md/semibold" };
      const tmp20 = timestampProducer(tmp8, obj6);
      cResult[9] = id;
      id = currentUser.id;
      cResult[10] = id;
      cResult[11] = tmp20;
    }
    const tmpResult = initialize;
  }
  const profilePreviewValue = ProfileCustomizationUtils.getProfilePreviewValue({ pendingValue: previewAvatarDecoration, userValue: avatarDecoration });
  cResult[0] = previewAvatarDecoration;
  cResult[1] = avatarDecoration;
  cResult[2] = profilePreviewValue;
  tmp6 = profilePreviewValue;
  const tmpResult2 = ProfileCustomizationUtils;
}) : (function NameplateUser(arg0) {
  let currentUser;
  importDefault = undefined;
  let stateFromStores;
  ({ previewNameplate, previewAvatarDecoration } = arg0);
  currentUser = currentUser(stateFromStores[13]).useCurrentUser();
  let obj = currentUser(stateFromStores[13]);
  const tmp5 = require("useAvatarDecorationIfNotExpired");
  const obj3 = { pendingValue: previewAvatarDecoration, userValue: null };
  let avatarDecoration;
  if (currentUser != null) {
    avatarDecoration = currentUser.avatarDecoration;
  }
  obj3.userValue = avatarDecoration;
  const tmp5Result = tmp5(currentUser(stateFromStores[14]).getProfilePreviewValue(obj3));
  importDefault = tmp5Result;
  const obj2 = currentUser(stateFromStores[14]);
  const items = [AccessibilityStore];
  stateFromStores = currentUser(stateFromStores[16]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmpResult = currentUser(stateFromStores[16]);
  const name = require("UserUtils").getName(currentUser);
  let label = name;
  if (null != require("useDisplayNameStyles")(obj4)) {
    const obj5 = { userId: currentUser.id, userName: name, effectDisplayType: tmp(tmp2[20]).EffectDisplayType.STATIC, lineClamp: 1, variant: "text-md/semibold" };
    label = closure_6(tmp4(tmp2[19]), obj5);
    const tmp4Result2 = tmp4(tmp2[19]);
  }
  const items1 = [currentUser, tmp5Result, stateFromStores];
  const icon = noop.useMemo(() => {
    const obj = { user: currentUser, guildId: "a", size: native.AvatarSizes.NORMAL, avatarDecoration, animate: !stateFromStores, autoStatusCutout: false, "aria-hidden": false };
    return timestampProducer(native.Avatar, obj);
  }, items1);
  return closure_6(currentUser(stateFromStores[22]).UserNameplateRow, { nameplate, icon, label, isPreviewRow: true });
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlaceholderUser(arg0) {
  const cResult = c.c(7);
  ({ user, start, end } = arg0);
  if (cResult[0] !== user.avatarSrc) {
    const obj2 = { source: null, size: null, "aria-hidden": true };
    const obj3 = { uri: user.avatarSrc };
    obj2.source = obj3;
    obj2.size = native.AvatarSizes.NORMAL;
    const tmp8 = timestampProducer(native.Avatar, obj2);
    cResult[0] = user.avatarSrc;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === (undefined !== end && end)) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === tmp6) {
        if (cResult[5] === user.name) {
          let tmp9 = cResult[6];
        }
        return tmp9;
      }
    }
  }
  const tmp10 = timestampProducer(TableRow.TableRow, { icon: tmp6, label: user.name, start: undefined !== start && start, end: undefined !== end && end });
  cResult[2] = undefined !== end && end;
  cResult[3] = undefined !== start && start;
  cResult[4] = tmp6;
  cResult[5] = user.name;
  cResult[6] = tmp10;
  tmp9 = tmp10;
  const obj4 = { icon: tmp6, label: user.name, start: undefined !== start && start, end: undefined !== end && end };
}) : (function PlaceholderUser(end) {
  ({ user, start } = end);
  if (start === undefined) {
    start = false;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { icon: timestampProducer(native.Avatar, { source: { uri: user.avatarSrc }, size: native.AvatarSizes.NORMAL, "aria-hidden": true }), label: user.name, start, end: flag };
  return timestampProducer(TableRow.TableRow, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/NameplateProductPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NameplateProductPreview(avatarDecorationOverride) {
  const cResult = c.c(60);
  avatarDecorationOverride = avatarDecorationOverride.avatarDecorationOverride;
  const tmp4 = closure_8();
  const firstNameplate = useShopProductItems.useShopProductItems(avatarDecorationOverride.product).firstNameplate;
  if (cResult[0] === firstNameplate) {
    if (cResult[1] === tmp4) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
      let tmp8 = cResult[5];
      let tmp9 = cResult[6];
      let tmp10 = cResult[7];
      let tmp11 = cResult[8];
    }
    const _Symbol = Symbol;
    if (tmp11 !== Symbol.for("react.early_return_sentinel")) {
      return tmp11;
    } else {
      if (cResult[10] !== tmp7.mallow) {
        const obj3 = { user: tmp7.mallow, end: true };
        const tmp24 = timestampProducer(closure_10, obj3);
        cResult[10] = tmp7.mallow;
        cResult[11] = tmp24;
        let tmp21 = tmp24;
      } else {
        tmp21 = cResult[11];
      }
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult = intl2.string(util.t["yzW/fZ"]);
        cResult[12] = stringResult;
        let tmp25 = stringResult;
      } else {
        tmp25 = cResult[12];
      }
      if (cResult[13] !== tmp4.memberListTitle) {
        const obj4 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp4.memberListTitle, children: null };
        const items = [tmp25, " \u2014 3"];
        obj4.children = items;
        const tmp29 = React5(Text_Text.Text, obj4);
        cResult[13] = tmp4.memberListTitle;
        cResult[14] = tmp29;
        let tmp27 = tmp29;
      } else {
        tmp27 = cResult[14];
      }
      if (cResult[15] !== tmp7.phibi) {
        const obj5 = { user: tmp7.phibi, start: true };
        const tmp33 = timestampProducer(closure_10, obj5);
        cResult[15] = tmp7.phibi;
        cResult[16] = tmp33;
        let tmp30 = tmp33;
      } else {
        tmp30 = cResult[16];
      }
      if (cResult[17] === avatarDecorationOverride) {
        if (cResult[18] === tmp6) {
          let tmp34 = cResult[19];
        }
        if (cResult[20] !== tmp7.locke) {
          const obj6 = { user: tmp7.locke, end: true };
          const tmp41 = timestampProducer(closure_10, obj6);
          cResult[20] = tmp7.locke;
          cResult[21] = tmp41;
          let tmp38 = tmp41;
        } else {
          tmp38 = cResult[21];
        }
        const _Symbol3 = Symbol;
        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = util.intl;
          const stringResult1 = intl3.string(util.t["NG43/6"]);
          cResult[22] = stringResult1;
          let tmp42 = stringResult1;
        } else {
          tmp42 = cResult[22];
        }
        if (cResult[23] !== tmp4.memberListTitle) {
          const obj7 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp4.memberListTitle, children: null };
          const items1 = [tmp42, " \u2014 12"];
          obj7.children = items1;
          const tmp46 = React5(Text_Text.Text, obj7);
          cResult[23] = tmp4.memberListTitle;
          cResult[24] = tmp46;
          let tmp44 = tmp46;
        } else {
          tmp44 = cResult[24];
        }
        if (cResult[25] !== tmp7.boom) {
          const obj8 = { user: tmp7.boom, start: true };
          const tmp50 = timestampProducer(closure_10, obj8);
          cResult[25] = tmp7.boom;
          cResult[26] = tmp50;
          let tmp47 = tmp50;
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
                      if (cResult[34] === tmp27) {
                        let tmp51 = cResult[35];
                      }
                      const _Symbol4 = Symbol;
                      if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                        const point = { x: 0, y: 0 };
                        const point1 = { x: 0, y: 0.4 };
                        cResult[36] = point;
                        cResult[37] = point1;
                        let tmp56 = point1;
                        let tmp55 = point;
                      } else {
                        tmp55 = cResult[36];
                        tmp56 = cResult[37];
                      }
                      const _HermesInternal = HermesInternal;
                      const combined = "" + tmp4.memberListGradient.color + "00";
                      if (cResult[38] === tmp4.memberListGradient.color) {
                        if (cResult[39] === combined) {
                          let tmp58 = cResult[40];
                        }
                        if (cResult[41] === tmp4.memberListGradient) {
                          if (cResult[42] === tmp58) {
                            let tmp59 = cResult[43];
                          }
                          const _Symbol5 = Symbol;
                          if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                            const point2 = { x: 0, y: 0.6 };
                            const point3 = { x: 0, y: 1 };
                            cResult[44] = point2;
                            cResult[45] = point3;
                            let tmp64 = point3;
                            let tmp63 = point2;
                          } else {
                            tmp63 = cResult[44];
                            tmp64 = cResult[45];
                          }
                          const _HermesInternal2 = HermesInternal;
                          const combined1 = "" + tmp4.memberListGradient.color + "00";
                          if (cResult[46] === tmp4.memberListGradient.color) {
                            if (cResult[47] === combined1) {
                              let tmp66 = cResult[48];
                            }
                            if (cResult[49] === tmp4.memberListGradient) {
                              if (cResult[50] === tmp66) {
                                let tmp67 = cResult[51];
                              }
                              if (cResult[52] === tmp5) {
                                if (cResult[53] === tmp8) {
                                  if (cResult[54] === tmp51) {
                                    if (cResult[55] === tmp9) {
                                      if (cResult[56] === tmp59) {
                                        if (cResult[57] === tmp67) {
                                          if (cResult[58] === tmp10) {
                                            let tmp71 = cResult[59];
                                          }
                                          return tmp71;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj9 = { style: tmp8, pointerEvents: tmp9, accessibilityLabel: tmp10, accessibilityRole: "image", accessible: true, children: null };
                              const items2 = [tmp51, tmp59, tmp67];
                              obj9.children = items2;
                              const tmp73 = React5(tmp5, obj9);
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
                            const tmp70 = timestampProducer(LinearGradientDefault, obj10);
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
                        const tmp62 = timestampProducer(LinearGradientDefault, obj11);
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
        const obj12 = { style: tmp4.memberListContainer, children: null };
        const items5 = [tmp21, tmp27, tmp30, tmp34, tmp38, tmp44, tmp47];
        obj12.children = items5;
        const tmp54 = React5(View, obj12);
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
      const tmp37 = timestampProducer(closure_9, obj13);
      cResult[17] = avatarDecorationOverride;
      cResult[18] = tmp6;
      cResult[19] = tmp37;
      tmp34 = tmp37;
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const nameplateData = utils.getNameplateData(firstNameplate);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const nameplateSampleUsers = utils.getNameplateSampleUsers();
    cResult[9] = nameplateSampleUsers;
    let tmp14 = nameplateSampleUsers;
    const tmpResult2 = utils;
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
    const intl = util.intl;
    const obj14 = { a11y_text: nameplateData.imgAlt };
    formatToPlainStringResult = intl.formatToPlainString(util.t.YJig7C, obj14);
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
  const tmpResult = utils;
}) : (function NameplateProductPreview(arg0) {
  ({ product, avatarDecorationOverride } = arg0);
  const tmp = closure_8();
  const obj = useShopProductItems;
  const nameplateData = utils.getNameplateData(obj.useShopProductItems(product).firstNameplate);
  const nameplateSampleUsers = utils.getNameplateSampleUsers();
  let tmp6 = null;
  if (null != nameplateData) {
    const obj4 = { style: tmp.container, pointerEvents: "box-none", accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
    const intl = util.intl;
    const obj5 = { a11y_text: nameplateData.imgAlt };
    obj4.accessibilityLabel = intl.formatToPlainString(util.t.YJig7C, obj5);
    const obj6 = { style: tmp.memberListContainer, children: null };
    const obj7 = { user: nameplateSampleUsers.mallow, end: true };
    const items = [timestampProducer(closure_10, obj7), , , , , , ];
    const obj8 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp.memberListTitle, children: null };
    const intl2 = util.intl;
    const items1 = [intl2.string(util.t["yzW/fZ"]), " \u2014 3"];
    obj8.children = items1;
    items[1] = React5(Text_Text.Text, obj8);
    const obj9 = { user: nameplateSampleUsers.phibi, start: true };
    items[2] = timestampProducer(closure_10, obj9);
    const obj10 = { previewNameplate: nameplateData, previewAvatarDecoration: avatarDecorationOverride };
    items[3] = timestampProducer(closure_9, obj10);
    const obj11 = { user: nameplateSampleUsers.locke, end: true };
    items[4] = timestampProducer(closure_10, obj11);
    const obj12 = { maxFontSizeMultiplier: 2, variant: "text-sm/semibold", accessibilityRole: "header", color: "interactive-text-default", style: tmp.memberListTitle, children: null };
    const intl3 = util.intl;
    const items2 = [intl3.string(util.t["NG43/6"]), " \u2014 12"];
    obj12.children = items2;
    items[5] = React5(Text_Text.Text, obj12);
    const obj13 = { user: nameplateSampleUsers.boom, start: true };
    items[6] = timestampProducer(closure_10, obj13);
    obj6.children = items;
    const items3 = [React5(View, obj6), , ];
    const obj14 = { style: tmp.memberListGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 0.4 }, colors: null };
    const items4 = [tmp.memberListGradient.color, ];
    const _HermesInternal = HermesInternal;
    items4[1] = "" + tmp.memberListGradient.color + "00";
    obj14.colors = items4;
    items3[1] = timestampProducer(LinearGradientDefault, obj14);
    const obj15 = { style: tmp.memberListGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
    const _HermesInternal2 = HermesInternal;
    const items5 = ["" + tmp.memberListGradient.color + "00", tmp.memberListGradient.color];
    obj15.colors = items5;
    items3[2] = timestampProducer(LinearGradientDefault, obj15);
    obj4.children = items3;
    tmp6 = React5(View, obj4);
  }
  return tmp6;
});