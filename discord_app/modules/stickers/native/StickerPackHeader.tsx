// discord_app/modules/stickers/native/StickerPackHeader.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef9769 from "../../../../_runtime/metro/09769__.js";
import _modDef9770 from "../../../../_runtime/metro/09770__.js";
import StickerPackBannerDefault from "StickerPackBanner.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const util = PressableOpacity(1126);
const native = PressableOpacity(1200);
const Text_Text = PressableOpacity(5088);
const StickersUtils = PressableOpacity(5749);
const Pressables = PressableOpacity(6184);
require = fn;
const View = fn(17).View;
const StickerPickerConstants = fn(9727);
({ PADDING_VERTICAL, PADDING_HORIZONTAL } = StickerPickerConstants);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
let result = 2 * PADDING_VERTICAL;
const createStyles = fn(5092);
let obj = {
  section: {
    paddingTop: PADDING_VERTICAL,
    paddingHorizontal: PADDING_HORIZONTAL,
    height: 36 + result,
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  label: { flex: -1 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  bannerContainer: { aspectRatio: 3.824074074074074, marginVertical: -8, width: "100%" },
  banner: { height: "100%" },
  headline: { height: 20, flex: 1, flexDirection: "row", alignItems: "center" },
  iconContainer: null,
  icon: null,
  animatedIcon: null,
  premiumIcon: null,
};
let size = {
  marginLeft: 8,
  height: 16,
  width: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  alignItems: "center",
  justifyContent: "center",
};
obj.iconContainer = size;
let obj3 = {
  paddingTop: PADDING_VERTICAL,
  paddingHorizontal: PADDING_HORIZONTAL,
  height: 36 + result,
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj.icon = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.animatedIcon = { position: "relative", left: 1 };
obj.premiumIcon = { position: "relative", left: -1 };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size = fn(2);
const result1 = size.fileFinishedImporting("modules/stickers/native/StickerPackHeader.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function StickerPackHeader(arg0) {
        let PressableOpacity = require;
        let obj = dependencyMap;
        const cResult = c.c(46);
        ({ stickerPack, style, onPress, withBanner, withDescription } = arg0);
        let section = closure_7();
        if (cResult[0] === stickerPack.name) {
          if (cResult[1] === section.label) {
            let tmp4 = cResult[2];
          }
          if (cResult[3] === stickerPack) {
            if (cResult[4] === section.animatedIcon) {
              if (cResult[5] === section.icon.color) {
                if (cResult[6] === section.iconContainer) {
                  let tmp6 = cResult[7];
                }
                if (cResult[8] === section.icon.color) {
                  if (cResult[9] === section.premiumIcon) {
                    let tmp11 = cResult[10];
                  }
                  if (cResult[11] === section.iconContainer) {
                    if (cResult[12] === tmp11) {
                      let tmp15 = cResult[13];
                    }
                    if (cResult[14] === section.headline) {
                      if (cResult[15] === tmp4) {
                        if (cResult[16] === tmp6) {
                          if (cResult[17] === tmp15) {
                            let tmp19 = cResult[18];
                          }
                          if (cResult[19] === section.header) {
                            if (cResult[20] === tmp19) {
                              let tmp23 = cResult[21];
                            }
                            if (cResult[22] === stickerPack.description) {
                              if (cResult[23] === tmp3) {
                                let tmp27 = cResult[24];
                              }
                              if (cResult[25] !== stickerPack.stickers.length) {
                                const intl = util.intl;
                                const obj3 = { numStickers: stickerPack.stickers.length };
                                const formatResult = intl.format(util.t["0S3JpO"], obj3);
                                cResult[25] = stickerPack.stickers.length;
                                cResult[26] = formatResult;
                                let tmp31 = formatResult;
                              } else {
                                tmp31 = cResult[26];
                              }
                              if (cResult[27] !== tmp31) {
                                const obj4 = {
                                  lineClamp: 1,
                                  variant: "text-xs/medium",
                                  color: "text-default",
                                  children: tmp31,
                                };
                                const tmp35 = React4(Text_Text.Text, obj4);
                                cResult[27] = tmp31;
                                cResult[28] = tmp35;
                                let tmp33 = tmp35;
                              } else {
                                tmp33 = cResult[28];
                              }
                              if (cResult[29] === tmp33) {
                                if (cResult[30] === tmp23) {
                                  if (cResult[31] === tmp27) {
                                    let tmp36 = cResult[32];
                                  }
                                  if (cResult[33] === stickerPack) {
                                    if (cResult[34] === section.banner) {
                                      if (cResult[35] === section.bannerContainer) {
                                        if (cResult[36] === tmp2) {
                                          let tmp40 = cResult[37];
                                        }
                                        if (cResult[38] === tmp36) {
                                          if (cResult[39] === onPress) {
                                            if (cResult[40] === style) {
                                              if (cResult[41] === section.section) {
                                                if (cResult[43] === tmp40) {
                                                  if (cResult[44] === tmp44) {
                                                    let tmp51 = cResult[45];
                                                  }
                                                  return tmp51;
                                                }
                                                const obj5 = { children: null };
                                                const items = [tmp40, cResult[42]];
                                                obj5.children = items;
                                                const tmp54 = hasOwnProperty(timestampProducer, obj5);
                                                cResult[43] = tmp40;
                                                cResult[44] = cResult[42];
                                                cResult[45] = tmp54;
                                                tmp51 = tmp54;
                                              }
                                            }
                                          }
                                        }
                                        if (null != onPress) {
                                          PressableOpacity = Pressables.PressableOpacity;
                                          obj = {
                                            style: null,
                                            onPress: null,
                                            accessibilityRole: "header",
                                            children: null,
                                          };
                                          const items1 = [section.section, style];
                                          obj.style = items1;
                                          obj.onPress = onPress;
                                          obj.children = tmp36;
                                          let tmp48 = React4(PressableOpacity, obj);
                                        } else {
                                          const obj6 = { style: null, children: null };
                                          const items2 = [section.section, style];
                                          obj6.style = items2;
                                          obj6.children = tmp36;
                                          tmp48 = React4(View, obj6);
                                        }
                                        cResult[38] = tmp36;
                                        cResult[39] = onPress;
                                        cResult[40] = style;
                                        section = section.section;
                                        cResult[41] = section;
                                        cResult[42] = tmp48;
                                      }
                                    }
                                  }
                                  let tmp41 = tmp2;
                                  if (tmp2) {
                                    const obj7 = { stickerPack, containerStyle: null, style: null };
                                    ({ bannerContainer: obj15.containerStyle, banner: obj15.style } = section);
                                    tmp41 = React4(StickerPackBannerDefault, obj7);
                                  }
                                  cResult[33] = stickerPack;
                                  cResult[34] = section.banner;
                                  cResult[35] = section.bannerContainer;
                                  cResult[36] = tmp2;
                                  cResult[37] = tmp41;
                                  tmp40 = tmp41;
                                }
                              }
                              const obj8 = { children: null };
                              const items3 = [tmp23, tmp27, tmp33];
                              obj8.children = items3;
                              const tmp39 = hasOwnProperty(timestampProducer, obj8);
                              cResult[29] = tmp33;
                              cResult[30] = tmp23;
                              cResult[31] = tmp27;
                              cResult[32] = tmp39;
                              tmp36 = tmp39;
                            }
                            let tmp28 = tmp3;
                            if (tmp3) {
                              tmp28 = null != stickerPack.description;
                            }
                            if (tmp28) {
                              const obj9 = { variant: "text-sm/medium", children: stickerPack.description };
                              tmp28 = React4(Text_Text.Text, obj9);
                            }
                            cResult[22] = stickerPack.description;
                            cResult[23] = tmp3;
                            cResult[24] = tmp28;
                            tmp27 = tmp28;
                          }
                          const obj10 = { style: section.header, children: tmp19 };
                          const tmp26 = React4(View, obj10);
                          cResult[19] = section.header;
                          cResult[20] = tmp19;
                          cResult[21] = tmp26;
                          tmp23 = tmp26;
                        }
                      }
                    }
                    const obj11 = { style: section.headline, children: null };
                    const items4 = [tmp4, tmp6, tmp15];
                    obj11.children = items4;
                    const tmp22 = hasOwnProperty(View, obj11);
                    cResult[14] = section.headline;
                    cResult[15] = tmp4;
                    cResult[16] = tmp6;
                    cResult[17] = tmp15;
                    cResult[18] = tmp22;
                    tmp19 = tmp22;
                  }
                  const obj12 = { style: section.iconContainer, children: tmp11 };
                  const tmp18 = React4(View, obj12);
                  cResult[11] = section.iconContainer;
                  cResult[12] = tmp11;
                  cResult[13] = tmp18;
                  tmp15 = tmp18;
                }
                const obj13 = {
                  source: _modDef9770,
                  style: section.premiumIcon,
                  size: native.Icon.Sizes.EXTRA_SMALL,
                  color: section.icon.color,
                };
                const tmp14 = React4(native.Icon, obj13);
                cResult[8] = section.icon.color;
                cResult[9] = section.premiumIcon;
                cResult[10] = tmp14;
                tmp11 = tmp14;
              }
            }
          }
          let result = StickersUtils.isStickerPackAnimated(stickerPack);
          if (result) {
            const obj14 = { style: section.iconContainer, children: null };
            const obj16 = {
              source: _modDef9769,
              style: section.animatedIcon,
              size: native.Icon.Sizes.EXTRA_SMALL,
              color: section.icon.color,
            };
            obj14.children = React4(native.Icon, obj16);
            result = React4(View, obj14);
          }
          cResult[3] = stickerPack;
          cResult[4] = section.animatedIcon;
          cResult[5] = section.icon.color;
          cResult[6] = section.iconContainer;
          cResult[7] = result;
          tmp6 = result;
          const PressableOpacityResult = StickersUtils;
        }
        const tmp5 = React4(Text_Text.Text, {
          style: section.label,
          lineClamp: 1,
          variant: "text-md/bold",
          color: "mobile-text-heading-primary",
          children: stickerPack.name,
        });
        cResult[0] = stickerPack.name;
        cResult[1] = section.label;
        cResult[2] = tmp5;
        tmp4 = tmp5;
        const obj17 = {
          style: section.label,
          lineClamp: 1,
          variant: "text-md/bold",
          color: "mobile-text-heading-primary",
          children: stickerPack.name,
        };
      }
    : function StickerPackHeader(withDescription) {
        ({ stickerPack, style, onPress, withBanner } = withDescription);
        if (withBanner === undefined) {
          withBanner = false;
        }
        let flag = withDescription.withDescription;
        if (flag === undefined) {
          flag = false;
        }
        const tmp = closure_7();
        const obj = { style: tmp.header, children: null };
        const obj2 = { style: tmp.headline, children: null };
        const items = [
          React4(Text_Text.Text, {
            style: tmp.label,
            lineClamp: 1,
            variant: "text-md/bold",
            color: "mobile-text-heading-primary",
            children: stickerPack.name,
          }),
          ,
        ];
        let result = StickersUtils.isStickerPackAnimated(stickerPack);
        if (result) {
          const obj5 = { style: tmp.iconContainer, children: null };
          const obj6 = {
            source: _modDef9769,
            style: tmp.animatedIcon,
            size: native.Icon.Sizes.EXTRA_SMALL,
            color: tmp.icon.color,
          };
          obj5.children = React4(native.Icon, obj6);
          result = React4(View, obj5);
        }
        items[1] = result;
        const obj7 = { style: tmp.iconContainer, children: null };
        const obj3 = {
          style: tmp.label,
          lineClamp: 1,
          variant: "text-md/bold",
          color: "mobile-text-heading-primary",
          children: stickerPack.name,
        };
        obj7.children = React4(native.Icon, {
          source: _modDef9770,
          style: tmp.premiumIcon,
          size: native.Icon.Sizes.EXTRA_SMALL,
          color: tmp.icon.color,
        });
        items[2] = React4(View, obj7);
        obj2.children = items;
        obj.children = hasOwnProperty(View, obj2);
        const items1 = [React4(View, obj), ,];
        if (flag) {
          flag = null != stickerPack.description;
        }
        if (flag) {
          const obj9 = { variant: "text-sm/medium", children: stickerPack.description };
          flag = React4(Text_Text.Text, obj9);
        }
        const obj10 = { children: null };
        items1[1] = flag;
        const obj11 = { lineClamp: 1, variant: "text-xs/medium", color: "text-default", children: null };
        const intl = util.intl;
        obj11.children = intl.format(util.t["0S3JpO"], { numStickers: stickerPack.stickers.length });
        items1[2] = React4(Text_Text.Text, obj11);
        obj10.children = items1;
        const tmp2Result = hasOwnProperty(timestampProducer, obj10);
        if (withBanner) {
          const obj14 = { stickerPack, containerStyle: null, style: null };
          ({ bannerContainer: obj13.containerStyle, banner: obj13.style } = tmp);
          withBanner = React4(StickerPackBannerDefault, obj14);
        }
        const children = [withBanner];
        if (null != onPress) {
          const obj15 = { style: null, onPress: null, accessibilityRole: "header", children: null };
          const items3 = [tmp.section, style];
          obj15.style = items3;
          obj15.onPress = onPress;
          obj15.children = tmp2Result;
          let tmp4Result = React4(Pressables.PressableOpacity, obj15);
        } else {
          const obj28 = { style: null, children: null };
          const items4 = [tmp.section, style];
          obj28.style = items4;
          obj28.children = tmp2Result;
          tmp4Result = React4(View, obj28);
        }
        children[1] = tmp4Result;
        return hasOwnProperty(timestampProducer, { children });
      },
);
