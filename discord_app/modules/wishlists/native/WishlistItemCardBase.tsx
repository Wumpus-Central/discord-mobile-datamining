// discord_app/modules/wishlists/native/WishlistItemCardBase.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../intl/index.native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import LockIcon2 from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import useUserProfileColors from "../../user_profile/hooks/native/useUserProfileColors.tsx";
import useWishlistHooks from "../hooks/useWishlistHooks.tsx";
import CheckmarkLargeBoldIcon2 from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeBoldIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let toastText;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
({ Pressable: c3, View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
let createStyles = createStyles_mod;
let obj = {
  card: obj2,
  overlayContainer: obj3,
  previewWrap: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" },
  dimmedPreview: { opacity: 0.5 },
  sourceIcon: obj4,
  lockBadge: obj5,
};
obj2 = {
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "center", alignItems: "center", zIndex: 2, shadowOpacity: 0.5, shadowRadius: 6, elevation: 6 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { zIndex: 1 };
const merged1 = Object.assign(rect);
obj5 = {
  zIndex: 2,
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  alignItems: "center",
  justifyContent: "center",
};
const merged2 = Object.assign(rect);
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (toastText) => {
      let tmp5;
      let tmp6;
      let obj = toastText(576);
      const cResult = obj.c(6);
      const tmp = toastText;
      toastText = toastText.toastText;
      const tmp4 = closure_8();
      if (cResult[0] !== toastText) {
        const fn = function o() {
          const obj = ToastActionCreatorsDefault;
          const obj2 = { key: "WISHLIST_SOURCE_ICON", content: toastText };
          obj.open(obj2);
        };
        cResult[0] = toastText;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "md" };
        const HeartIcon = tmp(8428).HeartIcon;
        const tmp9 = closure_5(HeartIcon, obj2);
        cResult[2] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp5) {
        let tmp10;
        if (cResult[4] === tmp4.sourceIcon) {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
      const obj3 = {
        style: tmp4.sourceIcon,
        onPress: tmp5,
        accessible: false,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: tmp6,
      };
      const tmp11 = closure_5(closure_3, obj3);
      cResult[3] = tmp5;
      cResult[4] = tmp4.sourceIcon;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : (toastText) => {
      let HeartIcon;
      let obj2;
      toastText = toastText.toastText;
      let obj = {
        style: closure_8().sourceIcon,
        onPress() {
          const obj = ToastActionCreatorsDefault;
          const obj2 = { key: "WISHLIST_SOURCE_ICON", content: toastText };
          obj.open(obj2);
        },
        accessible: false,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: closure_5(HeartIcon, obj2),
      };
      obj2 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "md" };
      HeartIcon = toastText(8428).HeartIcon;
      return closure_5(closure_3, obj);
    };
let obj6 = { OWNED: "owned", LOCKED: "locked" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (source) => {
      let CheckmarkLargeBoldIcon;
      let LockIcon;
      let accessibilityHidden;
      let accessibilityLabel;
      let items;
      let obj11;
      let obj13;
      let onPress;
      let overlay;
      let primaryColor;
      let recipientName;
      let renderPreview;
      let secondaryColor;
      let theme;
      const obj = react2;
      const cResult = obj.c(54);
      ({ onPress, accessibilityLabel, renderPreview, size, overlay, accessibilityHidden, recipientName } = source);
      let num = 170;
      source = source.source;
      if (undefined !== size) {
        num = size;
      }
      const tmp4 = closure_8();
      const tmpResult = native;
      const themeContext = tmpResult.useThemeContext();
      ({ theme, primaryColor, secondaryColor } = themeContext);
      if (cResult[0] === primaryColor) {
        if (cResult[1] === secondaryColor) {
          let tmp6;
          let tmp10;
          let tmp11;
          if (cResult[2] === theme) {
            tmp6 = cResult[3];
          }
          const tmpResult3 = useUserProfileColors;
          const containerBackground = tmpResult3.useUserProfileColors(tmp6).containerBackground;
          const tmpResult4 = useToken;
          let token = tmpResult4.useToken(nativeDefault.colors.BG_SURFACE_RAISED);
          if (null != primaryColor) {
            token = containerBackground;
          }
          if (cResult[4] !== token) {
            const obj2 = { backgroundColor: token };
            cResult[4] = token;
            cResult[5] = obj2;
            tmp10 = obj2;
          } else {
            tmp10 = cResult[5];
          }
          if (cResult[6] !== num) {
            let obj3;
            if (typeof num === "object") {
              const size1 = { width: null, height: null };
              ({ width: obj7.width, height: obj7.height } = num);
              obj3 = size1;
            } else {
              obj3 = { width: num, aspectRatio: 1 };
            }
            cResult[6] = num;
            cResult[7] = obj3;
            tmp11 = obj3;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp4.card) {
            if (cResult[9] === tmp10) {
              let tmp12;
              let stringResult;
              if (cResult[10] === tmp11) {
                tmp12 = cResult[11];
              }
              const tmp13 = source === useWishlistHooks.WishlistItemSource.WISHLIST;
              if (cResult[12] === accessibilityLabel) {
                if (cResult[13] === tmp13) {
                  if (cResult[14] === overlay) {
                    let obj9;
                    let tmp14;
                    if (cResult[15] === recipientName) {
                      obj9 = cResult[16];
                      tmp14 = cResult[17];
                    }
                    const joined = obj9.join(", ");
                    if (cResult[18] === tmp4.previewWrap) {
                      let tmp23;
                      let tmp24;
                      if (cResult[19] === (overlay === obj6.OWNED && tmp4.dimmedPreview)) {
                        tmp23 = cResult[20];
                      }
                      if (cResult[21] !== renderPreview) {
                        const renderPreviewResult = renderPreview();
                        cResult[21] = renderPreview;
                        cResult[22] = renderPreviewResult;
                        tmp24 = renderPreviewResult;
                      } else {
                        tmp24 = cResult[22];
                      }
                      if (cResult[23] === tmp23) {
                        let tmp26;
                        if (cResult[24] === tmp24) {
                          tmp26 = cResult[25];
                        }
                        if (cResult[26] === overlay) {
                          let tmp30;
                          if (cResult[27] === tmp4.overlayContainer) {
                            tmp30 = cResult[28];
                          }
                          if (cResult[29] === overlay) {
                            let tmp34;
                            if (cResult[30] === tmp4.lockBadge) {
                              tmp34 = cResult[31];
                            }
                            if (cResult[32] === tmp13) {
                              let tmp38;
                              if (cResult[33] === tmp14) {
                                tmp38 = cResult[34];
                              }
                              if (cResult[35] === tmp26) {
                                if (cResult[36] === tmp30) {
                                  if (cResult[37] === tmp34) {
                                    let tmp42;
                                    if (cResult[38] === tmp38) {
                                      tmp42 = cResult[39];
                                    }
                                    if (null == onPress) {
                                      let tmp52;
                                      if ("" !== joined) {
                                        tmp52 = joined;
                                      }
                                      let str4 = "auto";
                                      if (accessibilityHidden) {
                                        str4 = "no-hide-descendants";
                                      }
                                      if (cResult[40] === accessibilityHidden) {
                                        if (cResult[41] === tmp12) {
                                          if (cResult[42] === tmp42) {
                                            if (cResult[43] === ("" !== joined || undefined)) {
                                              if (cResult[44] === tmp52) {
                                                let tmp53;
                                                if (cResult[45] === str4) {
                                                  tmp53 = cResult[46];
                                                }
                                                return tmp53;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      const obj4 = {
                                        style: tmp12,
                                        accessible: "" !== joined || undefined,
                                        accessibilityLabel: tmp52,
                                        accessibilityElementsHidden: accessibilityHidden,
                                        importantForAccessibility: str4,
                                        children: tmp42,
                                      };
                                      const tmp56 = hasOwnProperty(React3, obj4);
                                      cResult[40] = accessibilityHidden;
                                      cResult[41] = tmp12;
                                      cResult[42] = tmp42;
                                      cResult[43] = "" !== joined || undefined;
                                      cResult[44] = tmp52;
                                      cResult[45] = str4;
                                      cResult[46] = tmp56;
                                      tmp53 = tmp56;
                                    } else {
                                      let str2 = "auto";
                                      if (accessibilityHidden) {
                                        str2 = "no-hide-descendants";
                                      }
                                      if (cResult[47] === accessibilityHidden) {
                                        if (cResult[48] === tmp12) {
                                          if (cResult[49] === joined) {
                                            if (cResult[50] === tmp42) {
                                              if (cResult[51] === onPress) {
                                                let tmp46;
                                                if (cResult[52] === str2) {
                                                  tmp46 = cResult[53];
                                                }
                                                return tmp46;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      const obj5 = {
                                        accessibilityRole: "button",
                                        accessibilityLabel: joined,
                                        style: tmp12,
                                        onPress,
                                        accessibilityElementsHidden: accessibilityHidden,
                                        importantForAccessibility: str2,
                                        children: tmp42,
                                      };
                                      const tmp49 = hasOwnProperty(_false, obj5);
                                      cResult[47] = accessibilityHidden;
                                      cResult[48] = tmp12;
                                      cResult[49] = joined;
                                      cResult[50] = tmp42;
                                      cResult[51] = onPress;
                                      cResult[52] = str2;
                                      cResult[53] = tmp49;
                                      tmp46 = tmp49;
                                    }
                                  }
                                }
                              }
                              obj6 = { children: items };
                              items = [tmp26, tmp30, tmp34, tmp38];
                              const tmp45 = metroImportDefault(metroRequire, obj6);
                              cResult[35] = tmp26;
                              cResult[36] = tmp30;
                              cResult[37] = tmp34;
                              cResult[38] = tmp38;
                              cResult[39] = tmp45;
                              tmp42 = tmp45;
                            }
                            let tmp39 = tmp13;
                            if (tmp39) {
                              const obj8 = { toastText: tmp14 };
                              tmp39 = hasOwnProperty(closure_9, obj8);
                            }
                            cResult[32] = tmp13;
                            cResult[33] = tmp14;
                            cResult[34] = tmp39;
                            tmp38 = tmp39;
                          }
                          let tmp35 = overlay === tmp21.LOCKED;
                          if (tmp35) {
                            const obj10 = {
                              style: tmp4.lockBadge,
                              pointerEvents: "none",
                              accessibilityElementsHidden: true,
                              importantForAccessibility: "no-hide-descendants",
                              children: hasOwnProperty(LockIcon, obj11),
                            };
                            obj11 = {
                              color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
                              size: "custom",
                              style: { width: 18, height: 18 },
                            };
                            LockIcon = LockIcon2.LockIcon;
                            tmp35 = hasOwnProperty(React3, obj10);
                          }
                          cResult[29] = overlay;
                          cResult[30] = tmp4.lockBadge;
                          cResult[31] = tmp35;
                          tmp34 = tmp35;
                        }
                        let tmp31 = overlay === tmp21.OWNED;
                        if (tmp31) {
                          const obj12 = {
                            style: tmp4.overlayContainer,
                            pointerEvents: "none",
                            accessibilityElementsHidden: true,
                            importantForAccessibility: "no-hide-descendants",
                            children: hasOwnProperty(CheckmarkLargeBoldIcon, obj13),
                          };
                          obj13 = {
                            color: nativeDefault.colors.WHITE,
                            size: "custom",
                            style: { width: 40, height: 40 },
                          };
                          CheckmarkLargeBoldIcon = CheckmarkLargeBoldIcon2.CheckmarkLargeBoldIcon;
                          tmp31 = hasOwnProperty(React3, obj12);
                        }
                        cResult[26] = overlay;
                        cResult[27] = tmp4.overlayContainer;
                        cResult[28] = tmp31;
                        tmp30 = tmp31;
                      }
                      const obj14 = { style: tmp23, "aria-hidden": true, children: tmp24 };
                      const tmp29 = hasOwnProperty(React3, obj14);
                      cResult[23] = tmp23;
                      cResult[24] = tmp24;
                      cResult[25] = tmp29;
                      tmp26 = tmp29;
                    }
                    const items1 = [tmp4.previewWrap, overlay === obj6.OWNED && tmp4.dimmedPreview];
                    cResult[18] = tmp4.previewWrap;
                    cResult[19] = overlay === obj6.OWNED && tmp4.dimmedPreview;
                    cResult[20] = items1;
                    tmp23 = items1;
                  }
                }
              }
              const intl = intl4.intl;
              const obj15 = { username: recipientName };
              const formatToPlainStringResult = intl.formatToPlainString(intl4.t.p3RmJF, obj15);
              const items2 = [accessibilityLabel, ,];
              if (obj6.OWNED === overlay) {
                const intl3 = intl4.intl;
                stringResult = intl3.string(intl4.t["6cfuDj"]);
              } else {
                stringResult = null;
                if (tmp16.LOCKED === overlay) {
                  const intl2 = intl4.intl;
                  stringResult = intl2.string(intl4.t.wu4gyV);
                }
              }
              items2[1] = stringResult;
              let tmp18 = null;
              if (tmp13) {
                tmp18 = formatToPlainStringResult;
              }
              items2[2] = tmp18;
              const found = items2.filter(GlobalUtils.isNotNullish);
              cResult[12] = accessibilityLabel;
              cResult[13] = tmp13;
              cResult[14] = overlay;
              cResult[15] = recipientName;
              cResult[16] = found;
              cResult[17] = formatToPlainStringResult;
              tmp14 = formatToPlainStringResult;
              obj9 = found;
            }
          }
          const items3 = [tmp4.card, tmp10, tmp11];
          cResult[8] = tmp4.card;
          cResult[9] = tmp10;
          cResult[10] = tmp11;
          cResult[11] = items3;
          tmp12 = items3;
        }
      }
      const obj16 = { theme, primaryColor, secondaryColor };
      cResult[0] = primaryColor;
      cResult[1] = secondaryColor;
      cResult[2] = theme;
      cResult[3] = obj16;
      tmp6 = obj16;
    }
  : (recipientName) => {
      let CheckmarkLargeBoldIcon;
      let LockIcon;
      let accessibilityHidden;
      let accessibilityLabel;
      let obj10;
      let obj5;
      let obj8;
      let onPress;
      let overlay;
      let primaryColor;
      let renderPreview;
      let secondaryColor;
      let source;
      let str;
      let str3;
      let stringResult;
      let theme;
      let tmp23;
      ({ onPress, size } = recipientName);
      ({ accessibilityLabel, renderPreview, source } = recipientName);
      if (size === undefined) {
        size = 170;
      }
      ({ overlay, accessibilityHidden } = recipientName);
      recipientName = recipientName.recipientName;
      const tmp = closure_8();
      const obj = native;
      const themeContext = obj.useThemeContext();
      ({ primaryColor, theme, secondaryColor } = themeContext);
      const obj2 = useUserProfileColors;
      const containerBackground = obj2.useUserProfileColors({
        theme,
        primaryColor,
        secondaryColor,
      }).containerBackground;
      const obj3 = useToken;
      let token = obj3.useToken(nativeDefault.colors.BG_SURFACE_RAISED);
      if (null != primaryColor) {
        token = containerBackground;
      }
      const items = [tmp.card, { backgroundColor: token }];
      if (typeof size === "object") {
        const size1 = { width: null, height: null };
        ({ width: obj4.width, height: obj4.height } = size);
        obj5 = size1;
      } else {
        obj5 = { width: size, aspectRatio: 1 };
      }
      items[2] = obj5;
      const WISHLIST = useWishlistHooks.WishlistItemSource.WISHLIST;
      const intl = intl4.intl;
      const formatToPlainStringResult = intl.formatToPlainString(intl4.t.p3RmJF, { username: recipientName });
      const items1 = [accessibilityLabel, ,];
      if (obj6.OWNED === overlay) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(intl4.t["6cfuDj"]);
      } else {
        stringResult = null;
        if (obj6.LOCKED === overlay) {
          const intl2 = intl4.intl;
          stringResult = intl2.string(intl4.t.wu4gyV);
        }
      }
      let tmp15Result4 = source === WISHLIST;
      items1[1] = stringResult;
      let tmp11 = null;
      if (tmp15Result4) {
        tmp11 = formatToPlainStringResult;
      }
      items1[2] = tmp11;
      const found = items1.filter(GlobalUtils.isNotNullish);
      const joined = found.join(", ");
      const items2 = [tmp.previewWrap];
      const dimmedPreview = overlay === tmp8.OWNED && tmp.dimmedPreview;
      obj6 = { style: items2, "aria-hidden": true, children: renderPreview() };
      items2[1] = dimmedPreview;
      const items3 = [hasOwnProperty(React3, obj6), , ,];
      let tmp15Result = overlay === tmp8.OWNED;
      if (tmp15Result) {
        const obj7 = {
          style: tmp.overlayContainer,
          pointerEvents: "none",
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: hasOwnProperty(CheckmarkLargeBoldIcon, obj8),
        };
        obj8 = { color: nativeDefault.colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
        CheckmarkLargeBoldIcon = CheckmarkLargeBoldIcon2.CheckmarkLargeBoldIcon;
        tmp15Result = hasOwnProperty(React3, obj7);
      }
      items3[1] = tmp15Result;
      let tmp15Result3 = overlay === tmp8.LOCKED;
      if (tmp15Result3) {
        const obj9 = {
          style: tmp.lockBadge,
          pointerEvents: "none",
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: hasOwnProperty(LockIcon, obj10),
        };
        obj10 = {
          color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
          size: "custom",
          style: { width: 18, height: 18 },
        };
        LockIcon = LockIcon2.LockIcon;
        tmp15Result3 = hasOwnProperty(React3, obj9);
      }
      items3[2] = tmp15Result3;
      if (tmp15Result4) {
        const obj11 = { toastText: formatToPlainStringResult };
        tmp15Result4 = hasOwnProperty(closure_9, obj11);
      }
      items3[3] = tmp15Result4;
      const tmp13Result = metroImportDefault(metroRequire, { children: items3 });
      if (null == onPress) {
        const obj12 = {
          style: items,
          accessible: "" !== joined || undefined,
          accessibilityLabel: tmp23,
          accessibilityElementsHidden: accessibilityHidden,
          importantForAccessibility: str3,
          children: tmp13Result,
        };
        tmp23 = undefined;
        if ("" !== joined) {
          tmp23 = joined;
        }
        str3 = "auto";
        if (accessibilityHidden) {
          str3 = "no-hide-descendants";
        }
        return hasOwnProperty(React3, obj12);
      } else {
        const obj13 = {
          accessibilityRole: "button",
          accessibilityLabel: joined,
          style: items,
          onPress,
          accessibilityElementsHidden: accessibilityHidden,
          importantForAccessibility: str,
          children: tmp13Result,
        };
        str = "auto";
        if (accessibilityHidden) {
          str = "no-hide-descendants";
        }
        return hasOwnProperty(_false, obj13);
      }
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default tmp9;
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = rect;
export const WishlistItemCardOverlay = obj6;
