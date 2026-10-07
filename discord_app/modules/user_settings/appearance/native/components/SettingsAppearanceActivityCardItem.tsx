// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardItem.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import ClipView from "../../../../../design/components/Icon/native/ClipView.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../LocaleStore.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";

const require = globalThis.__r;
const ClipViewDefault = ClipView;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const HappeningNowConstants = fn(15129);
({
  HAPPENING_NOW_BADGE_SIZE,
  HAPPENING_NOW_CONTENT_HEIGHT,
  HAPPENING_NOW_CARD_HEIGHT,
  HAPPENING_NOW_CARD_MARGIN_RIGHT,
  HAPPENING_NOW_CARD_PADDING,
  HAPPENING_NOW_CARD_PADDING_RIGHT,
} = HappeningNowConstants);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = ReanimatedRexport.createAnimatedComponent(fn(1188).Icon);
const createStyles = fn(4896);
let obj = {
  card: {
    borderRadius: nativeDefault.radii.lg,
    borderWidth: StyleSheet.hairlineWidth,
    padding: HAPPENING_NOW_CARD_PADDING,
    paddingRight: HAPPENING_NOW_CARD_PADDING_RIGHT,
    marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT,
    height: HAPPENING_NOW_CARD_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
  },
  cardBadgeWrapper: { position: "absolute", top: 0, right: 0 },
  cardImage: null,
  cardBadge: null,
  cardImageAssetContainer: null,
  cardImageAssetBackground: null,
  cardImageAsset: null,
  shiftedAvatar: null,
  userCounter: null,
};
let obj3 = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: StyleSheet.hairlineWidth,
  padding: HAPPENING_NOW_CARD_PADDING,
  paddingRight: HAPPENING_NOW_CARD_PADDING_RIGHT,
  marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT,
  height: HAPPENING_NOW_CARD_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
};
obj.cardImage = {
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  minWidth: HAPPENING_NOW_CONTENT_HEIGHT,
  marginRight: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  position: "relative",
};
let size = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: HAPPENING_NOW_BADGE_SIZE,
  height: HAPPENING_NOW_BADGE_SIZE,
  borderTopRightRadius: 15,
  borderBottomLeftRadius: nativeDefault.radii.md,
};
obj.cardBadge = size;
let obj4 = {
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  minWidth: HAPPENING_NOW_CONTENT_HEIGHT,
  marginRight: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  position: "relative",
};
obj.cardImageAssetContainer = {
  height: "100%",
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG,
  borderRadius: nativeDefault.radii.sm,
};
const size1 = {
  width: HAPPENING_NOW_CONTENT_HEIGHT,
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
};
obj.cardImageAssetBackground = size1;
const size2 = {
  width: HAPPENING_NOW_CONTENT_HEIGHT,
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.cardImageAsset = size2;
obj.shiftedAvatar = { marginLeft: -4 };
let obj5 = {
  height: "100%",
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG,
  borderRadius: nativeDefault.radii.sm,
};
obj.userCounter = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: -4,
  height: fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.XSMALL_20],
  minWidth: fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.XSMALL_20],
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 4,
  paddingTop: 1,
};
let closure_8 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj6 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: -4,
  height: fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.XSMALL_20],
  minWidth: fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.XSMALL_20],
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: 4,
  paddingTop: 1,
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceActivityCardItem.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (kind) => {
      const cResult = num5(substr[10]).c(62);
      ({ title, subtitle, image, avatars, animatedStyles } = kind);
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
      const obj = num5(substr[10]);
      const stateFromStores = num5(substr[11]).useStateFromStores(tmp4, tmp5);
      const tmp8 = closure_8();
      importDefault = tmp8;
      if (cResult[2] === avatars) {
        if (cResult[3] === tmp8.shiftedAvatar) {
          num5 = cResult[4];
          let tmp10 = cResult[5];
        }
        if (cResult[6] === animatedStyles.bgRaised) {
          if (cResult[7] === animatedStyles.borderStrong) {
            if (cResult[8] === tmp8.card) {
              let tmp12 = cResult[9];
            }
            if (cResult[10] === tmp8.cardImage) {
              if (cResult[11] === tmp8.cardImageAssetContainer) {
                let tmp13 = cResult[12];
              }
              if (cResult[13] === image) {
                if (cResult[14] === tmp8.cardImageAsset) {
                  let tmp14 = cResult[15];
                }
                if (cResult[16] === tmp8.cardImageAssetBackground) {
                  if (cResult[17] === tmp14) {
                    let tmp18 = cResult[18];
                  }
                  if (cResult[19] === tmp13) {
                    if (cResult[20] === tmp18) {
                      let tmp22 = cResult[21];
                    }
                    const _Symbol = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj2 = { flexDirection: "row" };
                      cResult[22] = obj2;
                      let tmp26 = obj2;
                    } else {
                      tmp26 = cResult[22];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj3 = { flexDirection: "row" };
                      cResult[23] = obj3;
                      let tmp27 = obj3;
                    } else {
                      tmp27 = cResult[23];
                    }
                    if (cResult[24] !== tmp10) {
                      const obj4 = { style: tmp27, children: tmp10 };
                      const tmp31 = closure_5(closure_3, obj4);
                      cResult[24] = tmp10;
                      cResult[25] = tmp31;
                      let tmp28 = tmp31;
                    } else {
                      tmp28 = cResult[25];
                    }
                    if (cResult[26] === animatedStyles.bgModStrong) {
                      if (cResult[27] === animatedStyles.textNormal) {
                        if (cResult[28] === tmp9) {
                          if (cResult[29] === stateFromStores) {
                            if (cResult[30] === tmp8.userCounter) {
                              let tmp32 = cResult[31];
                            }
                            if (cResult[32] === tmp28) {
                              if (cResult[33] === tmp32) {
                                let tmp37 = cResult[34];
                              }
                              if (cResult[35] === animatedStyles.headerPrimary) {
                                if (cResult[36] === title) {
                                  let tmp41 = cResult[37];
                                }
                                if (cResult[38] === animatedStyles.headerSecondary) {
                                  if (cResult[39] === subtitle) {
                                    let tmp44 = cResult[40];
                                  }
                                  if (cResult[41] === tmp37) {
                                    if (cResult[42] === tmp41) {
                                      if (cResult[43] === tmp44) {
                                        let tmp47 = cResult[44];
                                      }
                                      if (cResult[45] === animatedStyles.bgModSubtle) {
                                        if (cResult[46] === tmp8.cardBadge) {
                                          let tmp51 = cResult[47];
                                        }
                                        const tmp52Result = importDefault(
                                          "activity" === kind.kind ? tmp2[17] : tmp2[18],
                                        );
                                        if (cResult[48] === animatedStyles.activityIcon) {
                                          if (cResult[49] === tmp52Result) {
                                            let tmp54 = cResult[50];
                                          }
                                          if (cResult[51] === tmp51) {
                                            if (cResult[52] === tmp54) {
                                              let tmp58 = cResult[53];
                                            }
                                            if (cResult[54] === tmp8.cardBadgeWrapper) {
                                              if (cResult[55] === tmp58) {
                                                let tmp61 = cResult[56];
                                              }
                                              if (cResult[57] === tmp47) {
                                                if (cResult[58] === tmp61) {
                                                  if (cResult[59] === tmp12) {
                                                    if (cResult[60] === tmp22) {
                                                      let tmp65 = cResult[61];
                                                    }
                                                    return tmp65;
                                                  }
                                                }
                                              }
                                              const obj5 = { style: tmp12, children: null };
                                              const items1 = [tmp22, tmp47, tmp61];
                                              obj5.children = items1;
                                              const tmp67 = closure_6(tmp52(tmp2[5]).View, obj5);
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
                                          const tmp60 = closure_5(tmp52(tmp2[5]).View, obj7);
                                          cResult[51] = tmp51;
                                          cResult[52] = tmp54;
                                          cResult[53] = tmp60;
                                          tmp58 = tmp60;
                                        }
                                        const obj8 = {
                                          style: animatedStyles.activityIcon,
                                          size: tmp(tmp2[6]).Icon.Sizes.REFRESH_SMALL_16,
                                          resizeMode: "stretch",
                                          source: tmp52Result,
                                        };
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
                                  const obj9 = { children: null };
                                  const items3 = [tmp37, tmp41, tmp44];
                                  obj9.children = items3;
                                  const tmp50 = closure_6(closure_3, obj9);
                                  cResult[41] = tmp37;
                                  cResult[42] = tmp41;
                                  cResult[43] = tmp44;
                                  cResult[44] = tmp50;
                                  tmp47 = tmp50;
                                }
                                const obj10 = {
                                  animated: true,
                                  style: animatedStyles.headerSecondary,
                                  children: subtitle,
                                };
                                const tmp46 = closure_5(tmp(tmp2[16]).HappeningNowCardSubtitle, obj10);
                                cResult[38] = animatedStyles.headerSecondary;
                                cResult[39] = subtitle;
                                cResult[40] = tmp46;
                                tmp44 = tmp46;
                              }
                              const obj11 = { animated: true, style: animatedStyles.headerPrimary, children: title };
                              const tmp43 = closure_5(tmp(tmp2[16]).HappeningNowCardHeader, obj11);
                              cResult[35] = animatedStyles.headerPrimary;
                              cResult[36] = title;
                              cResult[37] = tmp43;
                              tmp41 = tmp43;
                            }
                            const obj12 = { style: tmp26, children: null };
                            const items4 = [tmp28, tmp32];
                            obj12.children = items4;
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
                      const obj13 = { style: null, children: null };
                      const items5 = [tmp8.userCounter, animatedStyles.bgModStrong];
                      obj13.style = items5;
                      const obj14 = {
                        animated: true,
                        variant: "text-xxs/semibold",
                        allowFontScaling: false,
                        style: animatedStyles.textNormal,
                        children: null,
                      };
                      const items6 = ["+", tmp(tmp2[15]).humanizeValue(tmp9, stateFromStores)];
                      obj14.children = items6;
                      obj13.children = closure_6(tmp(tmp2[14]).Text, obj14);
                      tmp33 = closure_5(require("ReanimatedRexport").View, obj13);
                      const tmpResult2 = tmp(tmp2[15]);
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
            const items7 = [,];
            ({ cardImageAssetContainer: arr4[0], cardImage: arr4[1] } = tmp8);
            cResult[10] = tmp8.cardImage;
            cResult[11] = tmp8.cardImageAssetContainer;
            cResult[12] = items7;
            tmp13 = items7;
          }
        }
        const items8 = [tmp8.card, ,];
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
          let tmp = index === substr.length - 1;
          if (tmp) {
            tmp = num5 <= 0;
          }
          const tmp6 = hasOwnProperty(native.Avatar, { source, size: native.AvatarSizes.XSMALL_20 });
          shiftedAvatar = undefined;
          if (0 !== index) {
            shiftedAvatar = shiftedAvatar.shiftedAvatar;
          }
          const obj2 = { style: shiftedAvatar, children: null };
          let tmp3Result = tmp6;
          if (!tmp) {
            const obj3 = { cutouts: null, children: null };
            const point = {
              shape: ClipView.CutoutShape.Circle,
              x: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] - 4 - 2,
              y: -2,
              size: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] + 4,
            };
            const items = [point];
            obj3.cutouts = items;
            obj3.children = tmp6;
            tmp3Result = hasOwnProperty(ClipViewDefault, obj3);
          }
          obj2.children = tmp3Result;
          return hasOwnProperty(React3, obj2, index);
        });
      }
      cResult[2] = avatars;
      cResult[3] = tmp8.shiftedAvatar;
      cResult[4] = num5;
      cResult[5] = mapped;
      tmp10 = mapped;
      const tmpResult = num5(substr[11]);
    }
  : (arg0) => {
      ({ avatars, animatedStyles } = arg0);
      _require = undefined;
      let num3;
      ({ kind, title, subtitle, image } = arg0);
      let items = [LocaleStore];
      const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => locale.locale);
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
          const diff = substr.length - 1;
          const tmp5 = hasOwnProperty(native.Avatar, { source, size: native.AvatarSizes.XSMALL_20 });
          shiftedAvatar = undefined;
          if (0 !== index) {
            shiftedAvatar = shiftedAvatar.shiftedAvatar;
          }
          const obj2 = { style: shiftedAvatar, children: null };
          if (index !== diff) {
            const obj3 = { cutouts: null, children: null };
            const point = {
              shape: ClipView.CutoutShape.Circle,
              x: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] - 4 - 2,
              y: -2,
              size: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] + 4,
            };
            const items = [point];
            obj3.cutouts = items;
            obj3.children = tmp5;
            let tmp2Result = hasOwnProperty(ClipViewDefault, obj3);
          } else {
            tmp2Result = tmp5;
          }
          obj2.children = tmp2Result;
          return hasOwnProperty(React3, obj2, index);
        });
      }
      let obj2 = { style: null, children: null };
      const items1 = [tmp4.card, ,];
      ({ borderStrong: arr3[1], bgRaised: arr3[2] } = animatedStyles);
      obj2.style = items1;
      let obj3 = { style: null, children: null };
      const items2 = [,];
      ({ cardImageAssetContainer: arr4[0], cardImage: arr4[1] } = tmp4);
      obj3.style = items2;
      const obj4 = {
        style: tmp4.cardImageAssetBackground,
        children: closure_5(substr(num3[13]), { style: tmp4.cardImageAsset, source: image }),
      };
      obj3.children = closure_5(closure_3, obj4);
      const items3 = [closure_5(closure_3, obj3), ,];
      const obj6 = { style: { flexDirection: "row" }, children: null };
      const items4 = [closure_5(closure_3, { style: { flexDirection: "row" }, children: mapped })];
      let tmp8Result = null;
      if (num3 > 0) {
        const obj7 = { style: null, children: null };
        const items5 = [tmp4.userCounter, animatedStyles.bgModStrong];
        obj7.style = items5;
        const obj8 = {
          animated: true,
          variant: "text-xxs/semibold",
          allowFontScaling: false,
          style: animatedStyles.textNormal,
          children: null,
        };
        const items6 = ["+", tmp(tmp2[15]).humanizeValue(num3, stateFromStores)];
        obj8.children = items6;
        obj7.children = closure_6(tmp(tmp2[14]).Text, obj8);
        tmp8Result = closure_5(tmp7(tmp2[5]).View, obj7);
        const tmpResult = tmp(tmp2[15]);
      }
      const obj9 = { children: null };
      items4[1] = tmp8Result;
      obj6.children = items4;
      const items7 = [
        closure_6(closure_3, obj6),
        closure_5(require("HappeningNowCard").HappeningNowCardHeader, {
          animated: true,
          style: animatedStyles.headerPrimary,
          children: title,
        }),
        closure_5(require("HappeningNowCard").HappeningNowCardSubtitle, {
          animated: true,
          style: animatedStyles.headerSecondary,
          children: subtitle,
        }),
      ];
      obj9.children = items7;
      items3[1] = closure_6(closure_3, obj9);
      const obj12 = { style: tmp4.cardBadgeWrapper, children: null };
      const obj13 = { style: null, children: null };
      const items8 = [tmp4.cardBadge, animatedStyles.bgModSubtle];
      obj13.style = items8;
      const obj = require("useStateFromStores");
      const obj10 = { animated: true, style: animatedStyles.headerPrimary, children: title };
      const obj11 = { animated: true, style: animatedStyles.headerSecondary, children: subtitle };
      const obj5 = { style: tmp4.cardImageAsset, source: image };
      obj13.children = closure_5(closure_7, {
        style: animatedStyles.activityIcon,
        size: require("native").Icon.Sizes.REFRESH_SMALL_16,
        resizeMode: "stretch",
        source: substr("activity" === kind ? num3[17] : num3[18]),
      });
      obj12.children = closure_5(substr(num3[5]).View, obj13);
      items3[2] = closure_5(closure_3, obj12);
      obj2.children = items3;
      return closure_6(substr(num3[5]).View, obj2);
    };
