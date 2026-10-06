// === Module 15128: SettingsAppearanceActivityCardItem ===

// Module 15128 (SettingsAppearanceActivityCardItem)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import ClipView from "ClipView" /* 8502 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import HappeningNowConstants from "HappeningNowConstants" /* 15129 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ClipViewDefault = ClipView;
let _require, importDefault, shiftedAvatar;

let HAPPENING_NOW_BADGE_SIZE;
let HAPPENING_NOW_CARD_HEIGHT;
let HAPPENING_NOW_CARD_MARGIN_RIGHT;
let HAPPENING_NOW_CARD_PADDING;
let HAPPENING_NOW_CARD_PADDING_RIGHT;
let HAPPENING_NOW_CONTENT_HEIGHT;
let StyleSheet;
let c3;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let size2;
({ View: c3, StyleSheet } = react_native);
({ HAPPENING_NOW_BADGE_SIZE, HAPPENING_NOW_CONTENT_HEIGHT, HAPPENING_NOW_CARD_HEIGHT, HAPPENING_NOW_CARD_MARGIN_RIGHT, HAPPENING_NOW_CARD_PADDING, HAPPENING_NOW_CARD_PADDING_RIGHT } = HappeningNowConstants);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = ReanimatedRexport.createAnimatedComponent(native.Icon);
let createStyles = createStyles_mod;
let obj = { card: obj2, cardBadgeWrapper: { position: "absolute", top: 0, right: 0 }, cardImage: obj3, cardBadge: size, cardImageAssetContainer: obj4, cardImageAssetBackground: size1, cardImageAsset: size2, shiftedAvatar: { marginLeft: -4 }, userCounter: obj5 };
obj2 = { borderRadius: nativeDefault.radii.lg, borderWidth: StyleSheet.hairlineWidth, padding: HAPPENING_NOW_CARD_PADDING, paddingRight: HAPPENING_NOW_CARD_PADDING_RIGHT, marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT, height: HAPPENING_NOW_CARD_HEIGHT, flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, position: "relative" };
size = { display: "flex", alignItems: "center", justifyContent: "center", width: HAPPENING_NOW_BADGE_SIZE, height: HAPPENING_NOW_BADGE_SIZE, borderTopRightRadius: 15, borderBottomLeftRadius: nativeDefault.radii.md };
obj4 = { height: "100%", backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG, borderRadius: nativeDefault.radii.sm };
size1 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: nativeDefault.radii.sm };
size2 = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: -4, height: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20], minWidth: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20], borderRadius: nativeDefault.radii.round, paddingHorizontal: 4, paddingTop: 1 };
let closure_8 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((kind) => {
  let Text;
  let animatedStyles;
  let avatars;
  let image;
  let items1;
  let items3;
  let items4;
  let items5;
  let items6;
  let locale;
  let num5;
  let obj14;
  let substr;
  let subtitle;
  let title;
  let tmp4;
  let tmp5;
  let tmp = num5;
  let obj = num5(substr[10]);
  const cResult = obj.c(62);
  ({ title, subtitle, image, avatars, animatedStyles } = kind);
  kind = kind.kind;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [LocaleStore];
    const fn = function o() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(substr[11]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = closure_8();
  importDefault = tmp8;
  if (cResult[2] === avatars) {
    let tmp10;
    if (cResult[3] === tmp8.shiftedAvatar) {
      num5 = cResult[4];
      tmp10 = cResult[5];
    }
    if (cResult[6] === animatedStyles.bgRaised) {
      if (cResult[7] === animatedStyles.borderStrong) {
        let tmp12;
        if (cResult[8] === tmp8.card) {
          tmp12 = cResult[9];
        }
        if (cResult[10] === tmp8.cardImage) {
          let tmp13;
          if (cResult[11] === tmp8.cardImageAssetContainer) {
            tmp13 = cResult[12];
          }
          if (cResult[13] === image) {
            let tmp14;
            if (cResult[14] === tmp8.cardImageAsset) {
              tmp14 = cResult[15];
            }
            if (cResult[16] === tmp8.cardImageAssetBackground) {
              let tmp18;
              if (cResult[17] === tmp14) {
                tmp18 = cResult[18];
              }
              if (cResult[19] === tmp13) {
                let tmp22;
                let tmp26;
                let tmp27;
                let tmp28;
                if (cResult[20] === tmp18) {
                  tmp22 = cResult[21];
                }
                const _Symbol = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj2 = { flexDirection: "row" };
                  cResult[22] = obj2;
                  tmp26 = obj2;
                } else {
                  tmp26 = cResult[22];
                }
                const _Symbol2 = Symbol;
                if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj3 = { flexDirection: "row" };
                  cResult[23] = obj3;
                  tmp27 = obj3;
                } else {
                  tmp27 = cResult[23];
                }
                if (cResult[24] !== tmp10) {
                  const obj4 = { style: tmp27, children: tmp10 };
                  const tmp31 = closure_5(closure_3, obj4);
                  cResult[24] = tmp10;
                  cResult[25] = tmp31;
                  tmp28 = tmp31;
                } else {
                  tmp28 = cResult[25];
                }
                if (cResult[26] === animatedStyles.bgModStrong) {
                  if (cResult[27] === animatedStyles.textNormal) {
                    if (cResult[28] === tmp9) {
                      if (cResult[29] === stateFromStores) {
                        let tmp32;
                        if (cResult[30] === tmp8.userCounter) {
                          tmp32 = cResult[31];
                        }
                        if (cResult[32] === tmp28) {
                          let tmp37;
                          if (cResult[33] === tmp32) {
                            tmp37 = cResult[34];
                          }
                          if (cResult[35] === animatedStyles.headerPrimary) {
                            let tmp41;
                            if (cResult[36] === title) {
                              tmp41 = cResult[37];
                            }
                            if (cResult[38] === animatedStyles.headerSecondary) {
                              let tmp44;
                              if (cResult[39] === subtitle) {
                                tmp44 = cResult[40];
                              }
                              if (cResult[41] === tmp37) {
                                if (cResult[42] === tmp41) {
                                  let tmp47;
                                  if (cResult[43] === tmp44) {
                                    tmp47 = cResult[44];
                                  }
                                  if (cResult[45] === animatedStyles.bgModSubtle) {
                                    let tmp51;
                                    if (cResult[46] === tmp8.cardBadge) {
                                      tmp51 = cResult[47];
                                    }
                                    const tmp52Result = importDefault("activity" === kind ? substr[17] : substr[18]);
                                    if (cResult[48] === animatedStyles.activityIcon) {
                                      let tmp54;
                                      if (cResult[49] === tmp52Result) {
                                        tmp54 = cResult[50];
                                      }
                                      if (cResult[51] === tmp51) {
                                        let tmp58;
                                        if (cResult[52] === tmp54) {
                                          tmp58 = cResult[53];
                                        }
                                        if (cResult[54] === tmp8.cardBadgeWrapper) {
                                          let tmp61;
                                          if (cResult[55] === tmp58) {
                                            tmp61 = cResult[56];
                                          }
                                          if (cResult[57] === tmp47) {
                                            if (cResult[58] === tmp61) {
                                              if (cResult[59] === tmp12) {
                                                let tmp65;
                                                if (cResult[60] === tmp22) {
                                                  tmp65 = cResult[61];
                                                }
                                                return tmp65;
                                              }
                                            }
                                          }
                                          const obj5 = { style: tmp12, children: items1 };
                                          items1 = [tmp22, tmp47, tmp61];
                                          const tmp67 = closure_6(require("ReanimatedRexport").View, obj5);
                                          cResult[57] = tmp47;
                                          cResult[58] = tmp61;
                                          cResult[59] = tmp12;
                                          cResult[60] = tmp22;
                                          cResult[61] = tmp67;
                                          tmp65 = tmp67;
                                        }
                                        const obj6 = { style: tmp8.cardBadgeWrapper, children: tmp58 };
                                        const tmp64 = closure_5(closure_3, obj6);
                                        cResult[54] = tmp8.cardBadgeWrapper;
                                        cResult[55] = tmp58;
                                        cResult[56] = tmp64;
                                        tmp61 = tmp64;
                                      }
                                      const obj7 = { style: tmp51, children: tmp54 };
                                      const tmp60 = closure_5(require("ReanimatedRexport").View, obj7);
                                      cResult[51] = tmp51;
                                      cResult[52] = tmp54;
                                      cResult[53] = tmp60;
                                      tmp58 = tmp60;
                                    }
                                    const obj8 = { style: animatedStyles.activityIcon, size: tmp(substr[6]).Icon.Sizes.REFRESH_SMALL_16, resizeMode: "stretch", source: tmp52Result };
                                    const tmp57 = closure_5(closure_7, obj8);
                                    cResult[48] = animatedStyles.activityIcon;
                                    cResult[49] = tmp52Result;
                                    cResult[50] = tmp57;
                                    tmp54 = tmp57;
                                  }
                                  const items2 = [tmp8.cardBadge, animatedStyles.bgModSubtle];
                                  cResult[45] = animatedStyles.bgModSubtle;
                                  cResult[46] = tmp8.cardBadge;
                                  cResult[47] = items2;
                                  tmp51 = items2;
                                }
                              }
                              const obj9 = { children: items3 };
                              items3 = [tmp37, tmp41, tmp44];
                              const tmp50 = closure_6(closure_3, obj9);
                              cResult[41] = tmp37;
                              cResult[42] = tmp41;
                              cResult[43] = tmp44;
                              cResult[44] = tmp50;
                              tmp47 = tmp50;
                            }
                            const obj10 = { animated: true, style: animatedStyles.headerSecondary, children: subtitle };
                            const tmp46 = closure_5(tmp(substr[16]).HappeningNowCardSubtitle, obj10);
                            cResult[38] = animatedStyles.headerSecondary;
                            cResult[39] = subtitle;
                            cResult[40] = tmp46;
                            tmp44 = tmp46;
                          }
                          const obj11 = { animated: true, style: animatedStyles.headerPrimary, children: title };
                          const tmp43 = closure_5(tmp(substr[16]).HappeningNowCardHeader, obj11);
                          cResult[35] = animatedStyles.headerPrimary;
                          cResult[36] = title;
                          cResult[37] = tmp43;
                          tmp41 = tmp43;
                        }
                        const obj12 = { style: tmp26, children: items4 };
                        items4 = [tmp28, tmp32];
                        const tmp40 = closure_6(closure_3, obj12);
                        cResult[32] = tmp28;
                        cResult[33] = tmp32;
                        cResult[34] = tmp40;
                        tmp37 = tmp40;
                      }
                    }
                  }
                }
                let tmp33 = null;
                if (tmp9 > 0) {
                  const obj13 = { style: items5, children: closure_6(Text, obj14) };
                  items5 = [tmp8.userCounter, animatedStyles.bgModStrong];
                  const View = require("ReanimatedRexport").View;
                  obj14 = { animated: true, variant: "text-xxs/semibold", allowFontScaling: false, style: animatedStyles.textNormal, children: items6 };
                  Text = tmp(tmp2[14]).Text;
                  items6 = ["+"];
                  const tmpResult2 = tmp(substr[15]);
                  items6[1] = tmpResult2.humanizeValue(tmp9, stateFromStores);
                  tmp33 = closure_5(View, obj13);
                }
                cResult[26] = animatedStyles.bgModStrong;
                cResult[27] = animatedStyles.textNormal;
                cResult[28] = tmp9;
                cResult[29] = stateFromStores;
                cResult[30] = tmp8.userCounter;
                cResult[31] = tmp33;
                tmp32 = tmp33;
              }
              const obj15 = { style: tmp13, children: tmp18 };
              const tmp25 = closure_5(closure_3, obj15);
              cResult[19] = tmp13;
              cResult[20] = tmp18;
              cResult[21] = tmp25;
              tmp22 = tmp25;
            }
            const obj16 = { style: tmp8.cardImageAssetBackground, children: tmp14 };
            const tmp21 = closure_5(closure_3, obj16);
            cResult[16] = tmp8.cardImageAssetBackground;
            cResult[17] = tmp14;
            cResult[18] = tmp21;
            tmp18 = tmp21;
          }
          const obj17 = { style: tmp8.cardImageAsset, source: image };
          const tmp17 = closure_5(require("FastImage"), obj17);
          cResult[13] = image;
          cResult[14] = tmp8.cardImageAsset;
          cResult[15] = tmp17;
          tmp14 = tmp17;
        }
        const items7 = [, ];
        ({ cardImageAssetContainer: arr4[0], cardImage: arr4[1] } = tmp8);
        cResult[10] = tmp8.cardImage;
        cResult[11] = tmp8.cardImageAssetContainer;
        cResult[12] = items7;
        tmp13 = items7;
      }
    }
    const items8 = [tmp8.card, , ];
    ({ borderStrong: arr3[1], bgRaised: arr3[2] } = animatedStyles);
    cResult[6] = animatedStyles.bgRaised;
    cResult[7] = animatedStyles.borderStrong;
    cResult[8] = tmp8.card;
    cResult[9] = items8;
    tmp12 = items8;
  }
  substr = undefined;
  if (avatars != null) {
    substr = avatars.slice(0, 3);
  }
  if (substr == null) {
    substr = [];
  }
  num5 = 0;
  if (null != avatars) {
    num5 = avatars.length - substr.length;
  }
  let mapped = null;
  if (null != avatars) {
    mapped = substr.map((source, index) => {
      let items;
      let tmp3Result;
      const tmp = index === substr.length - 1 && num5 <= 0;
      const obj = { source, size: native.AvatarSizes.XSMALL_20 };
      const Avatar = native.Avatar;
      const tmp6 = hasOwnProperty(Avatar, obj);
      shiftedAvatar = undefined;
      if (0 !== index) {
        shiftedAvatar = shiftedAvatar.shiftedAvatar;
      }
      const obj2 = { style: shiftedAvatar, children: tmp3Result };
      tmp3Result = tmp6;
      if (!tmp) {
        const obj3 = { cutouts: items, children: tmp6 };
        const point = { shape: ClipView.CutoutShape.Circle, x: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] - 4 - 2, y: -2, size: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] + 4 };
        items = [point];
        const tmp12 = ClipViewDefault;
        tmp3Result = hasOwnProperty(tmp12, obj3);
      }
      return hasOwnProperty(_false, obj2, index);
    });
  }
  cResult[2] = avatars;
  cResult[3] = tmp8.shiftedAvatar;
  cResult[4] = num5;
  cResult[5] = mapped;
  tmp10 = mapped;
}) : ((arg0) => {
  let Text;
  let View2;
  let animatedStyles;
  let avatars;
  let image;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let kind;
  let locale;
  let obj13;
  let obj14;
  let obj4;
  let obj5;
  let obj8;
  let subtitle;
  let title;
  ({ avatars, animatedStyles } = arg0);
  _require = undefined;
  let num3;
  ({ kind, title, subtitle, image } = arg0);
  let obj = require("useStateFromStores");
  let items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const tmp4 = closure_8();
  _require = tmp4;
  let substr;
  if (avatars != null) {
    substr = avatars.slice(0, 3);
  }
  if (substr == null) {
    substr = [];
  }
  num3 = 0;
  if (null != avatars) {
    num3 = avatars.length - substr.length;
  }
  let mapped = null;
  if (null != avatars) {
    mapped = substr.map((source, index) => {
      let items;
      let tmp2Result;
      const diff = substr.length - 1;
      const obj = { source, size: native.AvatarSizes.XSMALL_20 };
      const Avatar = native.Avatar;
      const tmp5 = hasOwnProperty(Avatar, obj);
      shiftedAvatar = undefined;
      if (0 !== index) {
        shiftedAvatar = shiftedAvatar.shiftedAvatar;
      }
      const obj2 = { style: shiftedAvatar, children: tmp2Result };
      if (index !== diff) {
        const obj3 = { cutouts: items, children: tmp5 };
        const point = { shape: ClipView.CutoutShape.Circle, x: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] - 4 - 2, y: -2, size: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] + 4 };
        items = [point];
        const tmp12 = ClipViewDefault;
        tmp2Result = hasOwnProperty(tmp12, obj3);
      } else {
        tmp2Result = tmp5;
      }
      return hasOwnProperty(_false, obj2, index);
    });
  }
  let obj2 = { style: items1, children: items3 };
  items1 = [tmp4.card, , ];
  ({ borderStrong: arr3[1], bgRaised: arr3[2] } = animatedStyles);
  let obj3 = { style: items2, children: closure_5(closure_3, obj4) };
  items2 = [, ];
  ({ cardImageAssetContainer: arr4[0], cardImage: arr4[1] } = tmp4);
  obj4 = { style: tmp4.cardImageAssetBackground, children: closure_5(substr(num3[13]), obj5) };
  const View = substr(tmp2[5]).View;
  obj5 = { style: tmp4.cardImageAsset, source: image };
  items3 = [closure_5(closure_3, obj3), , ];
  const obj6 = { style: { flexDirection: "row" }, children: items4 };
  items4 = [closure_5(closure_3, { style: { flexDirection: "row" }, children: mapped }), ];
  let tmp8Result = null;
  if (num3 > 0) {
    const obj7 = { style: items5, children: closure_6(Text, obj8) };
    items5 = [tmp4.userCounter, animatedStyles.bgModStrong];
    const View3 = tmp7(tmp2[5]).View;
    obj8 = { animated: true, variant: "text-xxs/semibold", allowFontScaling: false, style: animatedStyles.textNormal, children: items6 };
    Text = tmp(tmp2[14]).Text;
    items6 = ["+"];
    const tmpResult = require("NumberUtils");
    items6[1] = tmpResult.humanizeValue(num3, stateFromStores);
    tmp8Result = closure_5(View3, obj7);
  }
  const obj9 = { children: items7 };
  items4[1] = tmp8Result;
  items7 = [closure_6(closure_3, obj6), , ];
  const obj10 = { animated: true, style: animatedStyles.headerPrimary, children: title };
  items7[1] = closure_5(require("HappeningNowCard").HappeningNowCardHeader, obj10);
  const obj11 = { animated: true, style: animatedStyles.headerSecondary, children: subtitle };
  items7[2] = closure_5(require("HappeningNowCard").HappeningNowCardSubtitle, obj11);
  items3[1] = closure_6(closure_3, obj9);
  const obj12 = { style: tmp4.cardBadgeWrapper, children: closure_5(View2, obj13) };
  obj13 = { style: items8, children: closure_5(closure_7, obj14) };
  items8 = [tmp4.cardBadge, animatedStyles.bgModSubtle];
  obj14 = { style: animatedStyles.activityIcon, size: require("native").Icon.Sizes.REFRESH_SMALL_16, resizeMode: "stretch", source: substr("activity" === kind ? num3[17] : num3[18]) };
  View2 = tmp7(tmp2[5]).View;
  items3[2] = closure_5(closure_3, obj12);
  return closure_6(View, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardItem.tsx");

export default tmp7;