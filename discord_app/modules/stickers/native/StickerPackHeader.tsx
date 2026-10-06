// discord_app/modules/stickers/native/StickerPackHeader.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import StickersUtils from "../StickersUtils.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import AssetRegistryDefault from "../../../../_runtime/10136_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/10137_AssetRegistry.js";
import StickerPackBannerDefault from "StickerPackBanner.tsx";
import react from "../../../../_runtime/00019_react.js";
import StickerPickerConstants from "StickerPickerConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let PADDING_HORIZONTAL;
let PADDING_VERTICAL;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ PADDING_VERTICAL, PADDING_HORIZONTAL } = StickerPickerConstants);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let result = 2 * PADDING_VERTICAL;
let createStyles = createStyles_mod;
let obj = {
  section: obj2,
  label: { flex: -1 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  bannerContainer: { aspectRatio: 3.824074074074074, marginVertical: -8, width: "100%" },
  banner: { height: "100%" },
  headline: { height: 20, flex: 1, flexDirection: "row", alignItems: "center" },
  iconContainer: size,
  icon: obj3,
  animatedIcon: { position: "relative", left: 1 },
  premiumIcon: { position: "relative", left: -1 },
};
obj2 = {
  paddingTop: PADDING_VERTICAL,
  paddingHorizontal: PADDING_HORIZONTAL,
  height: 36 + result,
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles = createStyles.createStyles;
size = {
  marginLeft: 8,
  height: 16,
  width: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  alignItems: "center",
  justifyContent: "center",
};
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_7 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let Icon;
        let items;
        let items1;
        let items2;
        let items3;
        let items4;
        let obj16;
        let onPress;
        let stickerPack;
        let style;
        let withBanner;
        let withDescription;
        const obj = react2;
        const cResult = obj.c(46);
        ({ stickerPack, style, onPress, withBanner, withDescription } = arg0);
        const tmp6 = closure_7();
        if (cResult[0] === stickerPack.name) {
          let tmp7;
          if (cResult[1] === tmp6.label) {
            tmp7 = cResult[2];
          }
          if (cResult[3] === stickerPack) {
            if (cResult[4] === tmp6.animatedIcon) {
              if (cResult[5] === tmp6.icon.color) {
                let tmp9;
                if (cResult[6] === tmp6.iconContainer) {
                  tmp9 = cResult[7];
                }
                if (cResult[8] === tmp6.icon.color) {
                  let tmp14;
                  if (cResult[9] === tmp6.premiumIcon) {
                    tmp14 = cResult[10];
                  }
                  if (cResult[11] === tmp6.iconContainer) {
                    let tmp18;
                    if (cResult[12] === tmp14) {
                      tmp18 = cResult[13];
                    }
                    if (cResult[14] === tmp6.headline) {
                      if (cResult[15] === tmp7) {
                        if (cResult[16] === tmp9) {
                          let tmp22;
                          if (cResult[17] === tmp18) {
                            tmp22 = cResult[18];
                          }
                          if (cResult[19] === tmp6.header) {
                            let tmp26;
                            if (cResult[20] === tmp22) {
                              tmp26 = cResult[21];
                            }
                            if (cResult[22] === stickerPack.description) {
                              let tmp30;
                              let tmp34;
                              let tmp36;
                              if (cResult[23] === (undefined !== withDescription && withDescription)) {
                                tmp30 = cResult[24];
                              }
                              if (cResult[25] !== stickerPack.stickers.length) {
                                const intl = intl2.intl;
                                const obj2 = { numStickers: stickerPack.stickers.length };
                                const formatResult = intl.format(intl2.t["0S3JpO"], obj2);
                                cResult[25] = stickerPack.stickers.length;
                                cResult[26] = formatResult;
                                tmp34 = formatResult;
                              } else {
                                tmp34 = cResult[26];
                              }
                              if (cResult[27] !== tmp34) {
                                const obj3 = {
                                  lineClamp: 1,
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: tmp34,
                                };
                                const tmp38 = React3(Text_Text.Text, obj3);
                                cResult[27] = tmp34;
                                cResult[28] = tmp38;
                                tmp36 = tmp38;
                              } else {
                                tmp36 = cResult[28];
                              }
                              if (cResult[29] === tmp36) {
                                if (cResult[30] === tmp26) {
                                  let tmp39;
                                  if (cResult[31] === tmp30) {
                                    tmp39 = cResult[32];
                                  }
                                  if (cResult[33] === stickerPack) {
                                    if (cResult[34] === tmp6.banner) {
                                      if (cResult[35] === tmp6.bannerContainer) {
                                        let tmp43;
                                        let tmp51;
                                        if (cResult[36] === (undefined !== withBanner && withBanner)) {
                                          tmp43 = cResult[37];
                                        }
                                        if (cResult[38] === tmp39) {
                                          if (cResult[39] === onPress) {
                                            if (cResult[40] === style) {
                                              let tmp47;
                                              if (cResult[41] === tmp6.section) {
                                                tmp47 = cResult[42];
                                              }
                                              if (cResult[43] === tmp43) {
                                                let tmp53;
                                                if (cResult[44] === tmp47) {
                                                  tmp53 = cResult[45];
                                                }
                                                return tmp53;
                                              }
                                              const obj4 = { children: items };
                                              items = [tmp43, tmp47];
                                              const tmp56 = hasOwnProperty(metroRequire, obj4);
                                              cResult[43] = tmp43;
                                              cResult[44] = tmp47;
                                              cResult[45] = tmp56;
                                              tmp53 = tmp56;
                                            }
                                          }
                                        }
                                        if (null != onPress) {
                                          const obj5 = {
                                            style: items1,
                                            onPress,
                                            accessibilityRole: "header",
                                            children: tmp39,
                                          };
                                          items1 = [tmp6.section, style];
                                          tmp51 = React3(Pressables.PressableOpacity, obj5);
                                        } else {
                                          const obj6 = { style: items2, children: tmp39 };
                                          items2 = [tmp6.section, style];
                                          tmp51 = React3(View, obj6);
                                        }
                                        cResult[38] = tmp39;
                                        cResult[39] = onPress;
                                        cResult[40] = style;
                                        cResult[41] = tmp6.section;
                                        cResult[42] = tmp51;
                                        tmp47 = tmp51;
                                      }
                                    }
                                  }
                                  let tmp44 = tmp4;
                                  if (tmp44) {
                                    const obj7 = { stickerPack, containerStyle: null, style: null };
                                    ({ bannerContainer: obj14.containerStyle, banner: obj14.style } = tmp6);
                                    tmp44 = React3(StickerPackBannerDefault, obj7);
                                  }
                                  cResult[33] = stickerPack;
                                  cResult[34] = tmp6.banner;
                                  cResult[35] = tmp6.bannerContainer;
                                  cResult[36] = undefined !== withBanner && withBanner;
                                  cResult[37] = tmp44;
                                  tmp43 = tmp44;
                                }
                              }
                              const obj8 = { children: items3 };
                              items3 = [tmp26, tmp30, tmp36];
                              const tmp42 = hasOwnProperty(metroRequire, obj8);
                              cResult[29] = tmp36;
                              cResult[30] = tmp26;
                              cResult[31] = tmp30;
                              cResult[32] = tmp42;
                              tmp39 = tmp42;
                            }
                            let tmp31 = tmp5 && null != stickerPack.description;
                            if (tmp31) {
                              const obj9 = { variant: "text-sm/medium", children: stickerPack.description };
                              tmp31 = React3(Text_Text.Text, obj9);
                            }
                            cResult[22] = stickerPack.description;
                            cResult[23] = undefined !== withDescription && withDescription;
                            cResult[24] = tmp31;
                            tmp30 = tmp31;
                          }
                          const obj10 = { style: tmp6.header, children: tmp22 };
                          const tmp29 = React3(View, obj10);
                          cResult[19] = tmp6.header;
                          cResult[20] = tmp22;
                          cResult[21] = tmp29;
                          tmp26 = tmp29;
                        }
                      }
                    }
                    const obj11 = { style: tmp6.headline, children: items4 };
                    items4 = [tmp7, tmp9, tmp18];
                    const tmp25 = hasOwnProperty(View, obj11);
                    cResult[14] = tmp6.headline;
                    cResult[15] = tmp7;
                    cResult[16] = tmp9;
                    cResult[17] = tmp18;
                    cResult[18] = tmp25;
                    tmp22 = tmp25;
                  }
                  const obj12 = { style: tmp6.iconContainer, children: tmp14 };
                  const tmp21 = React3(View, obj12);
                  cResult[11] = tmp6.iconContainer;
                  cResult[12] = tmp14;
                  cResult[13] = tmp21;
                  tmp18 = tmp21;
                }
                const obj13 = {
                  source: AssetRegistryDefault2,
                  style: tmp6.premiumIcon,
                  size: native.Icon.Sizes.EXTRA_SMALL,
                  color: tmp6.icon.color,
                };
                const Icon2 = native.Icon;
                const tmp17 = React3(Icon2, obj13);
                cResult[8] = tmp6.icon.color;
                cResult[9] = tmp6.premiumIcon;
                cResult[10] = tmp17;
                tmp14 = tmp17;
              }
            }
          }
          const tmpResult = StickersUtils;
          let result = tmpResult.isStickerPackAnimated(stickerPack);
          if (result) {
            const obj15 = { style: tmp6.iconContainer, children: React3(Icon, obj16) };
            obj16 = {
              source: AssetRegistryDefault,
              style: tmp6.animatedIcon,
              size: native.Icon.Sizes.EXTRA_SMALL,
              color: tmp6.icon.color,
            };
            Icon = native.Icon;
            result = React3(View, obj15);
          }
          cResult[3] = stickerPack;
          cResult[4] = tmp6.animatedIcon;
          cResult[5] = tmp6.icon.color;
          cResult[6] = tmp6.iconContainer;
          cResult[7] = result;
          tmp9 = result;
        }
        const obj17 = {
          style: tmp6.label,
          lineClamp: 1,
          variant: "text-md/bold",
          color: "mobile-text-heading-primary",
          children: stickerPack.name,
        };
        const tmp8 = React3(Text_Text.Text, obj17);
        cResult[0] = stickerPack.name;
        cResult[1] = tmp6.label;
        cResult[2] = tmp8;
        tmp7 = tmp8;
      }
    : (withDescription) => {
        let Icon;
        let Icon2;
        let intl;
        let items;
        let items3;
        let items4;
        let obj12;
        let obj2;
        let obj6;
        let obj8;
        let onPress;
        let stickerPack;
        let style;
        let tmp4Result;
        let withBanner;
        ({ stickerPack, style, onPress, withBanner } = withDescription);
        if (withBanner === undefined) {
          withBanner = false;
        }
        let flag = withDescription.withDescription;
        if (flag === undefined) {
          flag = false;
        }
        const tmp = closure_7();
        const obj = { style: tmp.header, children: hasOwnProperty(View, obj2) };
        obj2 = { style: tmp.headline, children: items };
        items = [, ,];
        const obj3 = {
          style: tmp.label,
          lineClamp: 1,
          variant: "text-md/bold",
          color: "mobile-text-heading-primary",
          children: stickerPack.name,
        };
        items[0] = React3(Text_Text.Text, obj3);
        const obj4 = StickersUtils;
        let result = obj4.isStickerPackAnimated(stickerPack);
        if (result) {
          const obj5 = { style: tmp.iconContainer, children: React3(Icon, obj6) };
          obj6 = {
            source: AssetRegistryDefault,
            style: tmp.animatedIcon,
            size: native.Icon.Sizes.EXTRA_SMALL,
            color: tmp.icon.color,
          };
          Icon = native.Icon;
          result = React3(View, obj5);
        }
        items[1] = result;
        const obj7 = { style: tmp.iconContainer, children: React3(Icon2, obj8) };
        obj8 = {
          source: AssetRegistryDefault2,
          style: tmp.premiumIcon,
          size: native.Icon.Sizes.EXTRA_SMALL,
          color: tmp.icon.color,
        };
        Icon2 = native.Icon;
        items[2] = React3(View, obj7);
        const items1 = [React3(View, obj), ,];
        if (flag) {
          flag = null != stickerPack.description;
        }
        if (flag) {
          const obj9 = { variant: "text-sm/medium", children: stickerPack.description };
          flag = React3(Text_Text.Text, obj9);
        }
        const obj10 = { children: items1 };
        items1[1] = flag;
        const obj11 = {
          lineClamp: 1,
          variant: "text-xs/medium",
          color: "text-default",
          children: intl.format(intl2.t["0S3JpO"], obj12),
        };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        obj12 = { numStickers: stickerPack.stickers.length };
        items1[2] = React3(Text, obj11);
        const tmp2Result = hasOwnProperty(metroRequire, obj10);
        if (withBanner) {
          const obj14 = { stickerPack, containerStyle: null, style: null };
          ({ bannerContainer: obj13.containerStyle, banner: obj13.style } = tmp);
          withBanner = React3(StickerPackBannerDefault, obj14);
        }
        const children = [withBanner];
        if (null != onPress) {
          const obj15 = { style: items3, onPress, accessibilityRole: "header", children: tmp2Result };
          items3 = [tmp.section, style];
          tmp4Result = React3(Pressables.PressableOpacity, obj15);
        } else {
          const obj28 = { style: items4, children: tmp2Result };
          items4 = [tmp.section, style];
          tmp4Result = React3(View, obj28);
        }
        children[1] = tmp4Result;
        return hasOwnProperty(metroRequire, { children });
      },
);
size = size_mod;
const result1 = size.fileFinishedImporting("modules/stickers/native/StickerPackHeader.tsx");

export default memoResult;
