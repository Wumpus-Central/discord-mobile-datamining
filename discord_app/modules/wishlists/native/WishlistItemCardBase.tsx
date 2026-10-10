// === Module 8976: WishlistItemCardBase ===

// Module 8976 (WishlistItemCardBase)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import useToken from "useToken" /* 4818 */;
import native from "native" /* 4827 */;
import LockIcon from "LockIcon" /* 8222 */;
import useUserProfileColors from "useUserProfileColors" /* 8364 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 8848 */;
import useWishlistHooks from "useWishlistHooks" /* 8979 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
const createStyles = fn(5092);
let obj = { card: { borderWidth: 1, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_MUTED, justifyContent: "center", alignItems: "center", overflow: "hidden" }, overlayContainer: null, previewWrap: null, dimmedPreview: null, sourceIcon: null, lockBadge: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj4.zIndex = 2;
obj4.shadowOpacity = 0.5;
obj4.shadowRadius = 6;
obj4.elevation = 6;
obj.overlayContainer = obj4;
obj.previewWrap = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" };
obj.dimmedPreview = { opacity: 0.5 };
let obj5 = {};
const merged1 = Object.assign(rect);
obj5.zIndex = 1;
obj.sourceIcon = obj5;
let obj6 = {};
const merged2 = Object.assign(rect);
obj6.zIndex = 2;
obj6.width = 32;
obj6.height = 32;
obj6.borderRadius = nativeDefault.radii.round;
obj6.backgroundColor = nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
obj6.alignItems = "center";
obj6.justifyContent = "center";
obj.lockBadge = obj6;
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function SourceIcon(toastText) {
  const cResult = toastText(576).c(6);
  toastText = toastText.toastText;
  const tmp4 = closure_8();
  if (cResult[0] !== toastText) {
    function onPress() {
      ToastActionCreatorsDefault.open("WISHLIST_SOURCE_ICON", { text: toastText });
    }
    cResult[0] = toastText;
    cResult[1] = onPress;
    let tmp5 = onPress;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "md" };
    const tmp9 = closure_5(tmp(8977).HeartIcon, obj2);
    cResult[2] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp5) {
    if (cResult[4] === tmp4.sourceIcon) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = closure_5(closure_3, { style: tmp4.sourceIcon, onPress: tmp5, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp6 });
  cResult[3] = tmp5;
  cResult[4] = tmp4.sourceIcon;
  cResult[5] = tmp11;
  tmp10 = tmp11;
  const obj = toastText(576);
  const obj3 = { style: tmp4.sourceIcon, onPress: tmp5, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp6 };
  tmp = toastText;
}) : (function SourceIcon(toastText) {
  toastText = toastText.toastText;
  const obj = {
    style: closure_8().sourceIcon,
    onPress() {
      ToastActionCreatorsDefault.open("WISHLIST_SOURCE_ICON", { text: toastText });
    },
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: closure_5(toastText(8977).HeartIcon, { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "md" })
  };
  return closure_5(closure_3, obj);
});
let obj7 = { OWNED: "owned", LOCKED: "locked" };
ReactCompilerGating = fn(558);
let obj3 = { borderWidth: 1, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_MUTED, justifyContent: "center", alignItems: "center", overflow: "hidden" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function WishlistItemCardBase(source) {
  const cResult = c.c(54);
  ({ onPress, accessibilityLabel, renderPreview, size, overlay, accessibilityHidden, recipientName } = source);
  let num = 170;
  if (undefined !== size) {
    num = size;
  }
  const tmp4 = closure_8();
  const themeContext = native.useThemeContext();
  ({ theme, primaryColor, secondaryColor } = themeContext);
  if (cResult[0] === primaryColor) {
    if (cResult[1] === secondaryColor) {
      if (cResult[2] === theme) {
        let tmp6 = cResult[3];
      }
      const tmpResult3 = useUserProfileColors;
      let containerBackground = useToken.useToken(nativeDefault.colors.BG_SURFACE_RAISED);
      if (null != primaryColor) {
        containerBackground = tmpResult3.useUserProfileColors(tmp6).containerBackground;
      }
      if (cResult[4] !== containerBackground) {
        const obj2 = { backgroundColor: containerBackground };
        cResult[4] = containerBackground;
        cResult[5] = obj2;
        let tmp9 = obj2;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] !== num) {
        if (typeof num === "object") {
          const size1 = { width: null, height: null };
          ({ width: obj7.width, height: obj7.height } = num);
          let obj3 = size1;
        } else {
          obj3 = { width: num, aspectRatio: 1 };
        }
        cResult[6] = num;
        cResult[7] = obj3;
      } else {
        if (cResult[8] === tmp4.card) {
          if (cResult[9] === tmp9) {
            if (cResult[10] === tmp10) {
              let tmp12 = cResult[11];
            }
            const tmp13 = source.source === useWishlistHooks.WishlistItemSource.WISHLIST;
            if (cResult[12] === accessibilityLabel) {
              if (cResult[13] === tmp13) {
                if (cResult[14] === overlay) {
                  if (cResult[15] === recipientName) {
                    let obj9 = cResult[16];
                    let tmp14 = cResult[17];
                  }
                  const joined = obj9.join(", ");
                  if (cResult[18] === tmp4.previewWrap) {
                    if (cResult[19] === tmp22) {
                      let tmp23 = cResult[20];
                    }
                    if (cResult[21] !== renderPreview) {
                      const renderPreviewResult = renderPreview();
                      cResult[21] = renderPreview;
                      cResult[22] = renderPreviewResult;
                      let tmp24 = renderPreviewResult;
                    } else {
                      tmp24 = cResult[22];
                    }
                    if (cResult[23] === tmp23) {
                      if (cResult[24] === tmp24) {
                        let tmp26 = cResult[25];
                      }
                      if (cResult[26] === overlay) {
                        if (cResult[27] === tmp4.overlayContainer) {
                          let tmp30 = cResult[28];
                        }
                        if (cResult[29] === overlay) {
                          if (cResult[30] === tmp4.lockBadge) {
                            let tmp34 = cResult[31];
                          }
                          if (cResult[32] === tmp13) {
                            if (cResult[33] === tmp14) {
                              let tmp38 = cResult[34];
                            }
                            if (cResult[35] === tmp26) {
                              if (cResult[36] === tmp30) {
                                if (cResult[37] === tmp34) {
                                  if (cResult[38] === tmp38) {
                                    let tmp42 = cResult[39];
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
                                          if (cResult[43] === tmp51) {
                                            if (cResult[44] === tmp52) {
                                              if (cResult[45] === str4) {
                                                let tmp53 = cResult[46];
                                              }
                                              return tmp53;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj4 = { style: tmp12, accessible: "" !== joined || undefined, accessibilityLabel: tmp52, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: str4, children: tmp42 };
                                    const tmp56 = hasOwnProperty(React4, obj4);
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
                                              if (cResult[52] === str2) {
                                                let tmp46 = cResult[53];
                                              }
                                              return tmp46;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj5 = { accessibilityRole: "button", accessibilityLabel: joined, style: tmp12, onPress, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: str2, children: tmp42 };
                                    const tmp49 = hasOwnProperty(React3, obj5);
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
                            const obj6 = { children: null };
                            const items = [tmp26, tmp30, tmp34, tmp38];
                            obj6.children = items;
                            const tmp45 = React5(timestampProducer, obj6);
                            cResult[35] = tmp26;
                            cResult[36] = tmp30;
                            cResult[37] = tmp34;
                            cResult[38] = tmp38;
                            cResult[39] = tmp45;
                            tmp42 = tmp45;
                          }
                          let tmp39 = tmp13;
                          if (tmp13) {
                            const obj8 = { toastText: tmp14 };
                            tmp39 = hasOwnProperty(closure_9, obj8);
                          }
                          cResult[32] = tmp13;
                          cResult[33] = tmp14;
                          cResult[34] = tmp39;
                          tmp38 = tmp39;
                        }
                        let tmp35 = overlay === obj7.LOCKED;
                        if (tmp35) {
                          const obj10 = { style: tmp4.lockBadge, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
                          const obj11 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, size: "custom", style: { width: 18, height: 18 } };
                          obj10.children = hasOwnProperty(LockIcon.LockIcon, obj11);
                          tmp35 = hasOwnProperty(React4, obj10);
                        }
                        cResult[29] = overlay;
                        cResult[30] = tmp4.lockBadge;
                        cResult[31] = tmp35;
                        tmp34 = tmp35;
                      }
                      let tmp31 = overlay === obj7.OWNED;
                      if (tmp31) {
                        const obj12 = { style: tmp4.overlayContainer, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
                        const obj13 = { color: nativeDefault.colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
                        obj12.children = hasOwnProperty(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj13);
                        tmp31 = hasOwnProperty(React4, obj12);
                      }
                      cResult[26] = overlay;
                      cResult[27] = tmp4.overlayContainer;
                      cResult[28] = tmp31;
                      tmp30 = tmp31;
                    }
                    const obj14 = { style: tmp23, "aria-hidden": true, children: tmp24 };
                    const tmp29 = hasOwnProperty(React4, obj14);
                    cResult[23] = tmp23;
                    cResult[24] = tmp24;
                    cResult[25] = tmp29;
                    tmp26 = tmp29;
                  }
                  const items1 = [tmp4.previewWrap, overlay === obj7.OWNED && tmp4.dimmedPreview];
                  cResult[18] = tmp4.previewWrap;
                  cResult[19] = overlay === obj7.OWNED && tmp4.dimmedPreview;
                  cResult[20] = items1;
                  tmp23 = items1;
                }
              }
            }
            const intl = util.intl;
            const obj15 = { username: recipientName };
            const formatToPlainStringResult = intl.formatToPlainString(util.t.p3RmJF, obj15);
            const items2 = [accessibilityLabel, , ];
            if (obj7.OWNED === overlay) {
              const intl3 = util.intl;
              let stringResult = intl3.string(util.t["6cfuDj"]);
            } else {
              stringResult = null;
              if (tmp16.LOCKED === overlay) {
                const intl2 = util.intl;
                stringResult = intl2.string(util.t.wu4gyV);
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
        const items3 = [tmp4.card, tmp9, cResult[7]];
        cResult[8] = tmp4.card;
        cResult[9] = tmp9;
        cResult[10] = cResult[7];
        cResult[11] = items3;
        tmp12 = items3;
      }
      const tmpResult4 = useToken;
    }
  }
  const obj16 = { theme, primaryColor, secondaryColor };
  cResult[0] = primaryColor;
  cResult[1] = secondaryColor;
  cResult[2] = theme;
  cResult[3] = obj16;
  tmp6 = obj16;
  const tmpResult = native;
}) : (function WishlistItemCardBase(username) {
  ({ onPress, size } = username);
  ({ accessibilityLabel, renderPreview, source } = username);
  if (size === undefined) {
    size = 170;
  }
  ({ overlay, accessibilityHidden } = username);
  const tmp = closure_8();
  const themeContext = native.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  const obj2 = useUserProfileColors;
  let containerBackground = useToken.useToken(nativeDefault.colors.BG_SURFACE_RAISED);
  if (null != primaryColor) {
    containerBackground = obj2.useUserProfileColors({ theme, primaryColor, secondaryColor }).containerBackground;
  }
  const items = [tmp.card, { backgroundColor: containerBackground }, ];
  if (typeof size === "object") {
    const size1 = { width: null, height: null };
    ({ width: obj4.width, height: obj4.height } = size);
    let obj5 = size1;
  } else {
    obj5 = { width: size, aspectRatio: 1 };
  }
  items[2] = obj5;
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.p3RmJF, { username: username.recipientName });
  const items1 = [accessibilityLabel, , ];
  if (obj7.OWNED === overlay) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t["6cfuDj"]);
  } else {
    stringResult = null;
    if (tmp7.LOCKED === overlay) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.wu4gyV);
    }
  }
  let tmp14Result4 = source === useWishlistHooks.WishlistItemSource.WISHLIST;
  items1[1] = stringResult;
  let tmp10 = null;
  if (tmp14Result4) {
    tmp10 = formatToPlainStringResult;
  }
  items1[2] = tmp10;
  const found = items1.filter(GlobalUtils.isNotNullish);
  const joined = found.join(", ");
  const items2 = [tmp.previewWrap, ];
  let dimmedPreview = overlay === tmp7.OWNED;
  if (dimmedPreview) {
    dimmedPreview = tmp.dimmedPreview;
  }
  items2[1] = dimmedPreview;
  const items3 = [hasOwnProperty(React4, { style: items2, "aria-hidden": true, children: renderPreview() }), , , ];
  let tmp14Result = overlay === tmp7.OWNED;
  if (tmp14Result) {
    obj7 = { style: tmp.overlayContainer, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj8 = { color: nativeDefault.colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
    obj7.children = hasOwnProperty(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj8);
    tmp14Result = hasOwnProperty(React4, obj7);
  }
  items3[1] = tmp14Result;
  let tmp14Result3 = overlay === tmp7.LOCKED;
  if (tmp14Result3) {
    const obj9 = { style: tmp.lockBadge, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj10 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, size: "custom", style: { width: 18, height: 18 } };
    obj9.children = hasOwnProperty(LockIcon.LockIcon, obj10);
    tmp14Result3 = hasOwnProperty(React4, obj9);
  }
  items3[2] = tmp14Result3;
  if (tmp14Result4) {
    const obj11 = { toastText: formatToPlainStringResult };
    tmp14Result4 = hasOwnProperty(closure_9, obj11);
  }
  items3[3] = tmp14Result4;
  const tmp12Result = React5(timestampProducer, { children: items3 });
  if (null == onPress) {
    const obj12 = { style: items, accessible: "" !== joined || undefined, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    let tmp22;
    if ("" !== joined) {
      tmp22 = joined;
    }
    obj12.accessibilityLabel = tmp22;
    obj12.accessibilityElementsHidden = accessibilityHidden;
    let str3 = "auto";
    if (accessibilityHidden) {
      str3 = "no-hide-descendants";
    }
    obj12.importantForAccessibility = str3;
    obj12.children = tmp12Result;
    return hasOwnProperty(React4, obj12);
  } else {
    const obj13 = { accessibilityRole: "button", accessibilityLabel: joined, style: items, onPress, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: null, children: null };
    let str = "auto";
    if (accessibilityHidden) {
      str = "no-hide-descendants";
    }
    obj13.importantForAccessibility = str;
    obj13.children = tmp12Result;
    return hasOwnProperty(React3, obj13);
  }
  const obj6 = { style: items2, "aria-hidden": true, children: renderPreview() };
});
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = rect;
export const WishlistItemCardOverlay = obj7;