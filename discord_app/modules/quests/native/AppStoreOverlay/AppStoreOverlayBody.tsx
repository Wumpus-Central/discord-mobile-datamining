// === Module 12900: AppStoreOverlayBody ===

// Module 12900 (AppStoreOverlayBody)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import useToken from "useToken" /* 4779 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import LinearGradientDefault from "LinearGradient" /* 5388 */;
import FastImageDefault from "FastImage" /* 6163 */;
import AnalyticsActions from "AnalyticsActions" /* 7400 */;
import AppStoreOverlayStatsCarouselDefault from "AppStoreOverlayStatsCarousel" /* 12901 */;
import AppStoreOverlayMediaCarouselDefault from "AppStoreOverlayMediaCarousel" /* 12904 */;
import AppStoreOverlayAboutSectionDefault from "AppStoreOverlayAboutSection" /* 12909 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1085).VerticalGradient;
let closure_6 = fn(6837).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, containerWithHeader: { paddingTop: 110 }, iconContainer: null, icon: null, textBlock: null, mediaSection: null, header: null, footer: null, footerGradient: null };
let size = { width: 84, height: 84, borderRadius: nativeDefault.radii.xl, overflow: "hidden", borderWidth: 6, borderColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.iconContainer = size;
obj2.icon = { width: 72, height: 72 };
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.textBlock = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.mediaSection = { gap: nativeDefault.space.PX_8 };
obj2.header = { width: "100%", height: 156, overflow: "hidden", position: "absolute", top: 0, left: 0, right: 0 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.footer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.footerGradient = { position: "absolute", top: -32, right: 0, left: 0, height: 32 };
let closure_10 = createStyles.createStyles(obj2);
fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16 };
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppStoreOverlayBody(arg0) {
  const cResult = onOverlaySurfaceClick(576).c(42);
  ({ metadata, onOpenReviews, onMediaGetGamePress, onCarouselScroll, onOverlaySurfaceClick } = arg0);
  const tmp4 = closure_10();
  let headerUrl = metadata.headerUrl;
  if (headerUrl == null) {
    headerUrl = null;
  }
  if (cResult[0] !== onOverlaySurfaceClick) {
    const fn = function n() {
      if (onOverlaySurfaceClick != null) {
        tmp(AnalyticsActions.AppStoreOverlaySurfaces.SEE_MORE);
      }
    };
    cResult[0] = onOverlaySurfaceClick;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === headerUrl) {
    if (cResult[3] === tmp4.header) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      if (cResult[6] === tmp12) {
        let tmp13 = cResult[7];
      }
      if (cResult[8] === metadata.iconUrl) {
        if (cResult[9] === tmp4.icon) {
          if (cResult[10] === tmp4.iconContainer) {
            let tmp14 = cResult[11];
          }
          if (cResult[12] !== metadata.title) {
            const obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: metadata.title };
            const tmp21 = closure_7(onOverlaySurfaceClick(5087).Text, obj2);
            cResult[12] = metadata.title;
            cResult[13] = tmp21;
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[13];
          }
          if (cResult[14] !== metadata.subtitle) {
            let tmp23 = null != metadata.subtitle;
            if (tmp23) {
              tmp23 = "" !== metadata.subtitle;
            }
            if (tmp23) {
              const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: metadata.subtitle };
              tmp23 = closure_7(onOverlaySurfaceClick(5087).Text, obj3);
            }
            cResult[14] = metadata.subtitle;
            cResult[15] = tmp23;
            let tmp22 = tmp23;
          } else {
            tmp22 = cResult[15];
          }
          if (cResult[16] === tmp4.textBlock) {
            if (cResult[17] === tmp19) {
              if (cResult[18] === tmp22) {
                let tmp25 = cResult[19];
              }
              if (cResult[20] === metadata.stats) {
                if (cResult[21] === onCarouselScroll) {
                  if (cResult[22] === onOpenReviews) {
                    let tmp29 = cResult[23];
                  }
                  if (cResult[24] === metadata.media) {
                    if (cResult[25] === onCarouselScroll) {
                      if (cResult[26] === onMediaGetGamePress) {
                        if (cResult[27] === tmp4.mediaSection) {
                          let tmp33 = cResult[28];
                        }
                        if (cResult[29] === tmp6) {
                          if (cResult[30] === metadata.description) {
                            let tmp39 = cResult[31];
                          }
                          if (cResult[32] === tmp33) {
                            if (cResult[33] === tmp39) {
                              if (cResult[34] === tmp13) {
                                if (cResult[35] === tmp14) {
                                  if (cResult[36] === tmp25) {
                                    if (cResult[37] === tmp29) {
                                      let tmp43 = cResult[38];
                                    }
                                    if (cResult[39] === tmp43) {
                                      if (cResult[40] === tmp7) {
                                        let tmp47 = cResult[41];
                                      }
                                      return tmp47;
                                    }
                                    const obj4 = { children: null };
                                    const items = [tmp7, tmp43];
                                    obj4.children = items;
                                    const tmp50 = closure_8(closure_9, obj4);
                                    cResult[39] = tmp43;
                                    cResult[40] = tmp7;
                                    cResult[41] = tmp50;
                                    tmp47 = tmp50;
                                  }
                                }
                              }
                            }
                          }
                          const obj5 = { style: tmp13, children: null };
                          const items1 = [tmp14, tmp25, tmp29, tmp33, tmp39];
                          obj5.children = items1;
                          const tmp46 = closure_8(View, obj5);
                          cResult[32] = tmp33;
                          cResult[33] = tmp39;
                          cResult[34] = tmp13;
                          cResult[35] = tmp14;
                          cResult[36] = tmp25;
                          cResult[37] = tmp29;
                          cResult[38] = tmp46;
                          tmp43 = tmp46;
                        }
                        let tmp40 = null != metadata.description;
                        if (tmp40) {
                          tmp40 = "" !== metadata.description;
                        }
                        if (tmp40) {
                          const obj6 = { description: metadata.description, onSeeMorePress: tmp6 };
                          tmp40 = closure_7(AppStoreOverlayAboutSectionDefault, obj6);
                        }
                        cResult[29] = tmp6;
                        cResult[30] = metadata.description;
                        cResult[31] = tmp40;
                        tmp39 = tmp40;
                      }
                    }
                  }
                  let tmp34 = null != metadata.media;
                  if (tmp34) {
                    tmp34 = metadata.media.length > 0;
                  }
                  if (tmp34) {
                    const obj7 = { style: tmp4.mediaSection, children: null };
                    const obj8 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
                    const intl = onOverlaySurfaceClick(1126).intl;
                    obj8.children = intl.string(onOverlaySurfaceClick(1126).t["EV1W/L"]);
                    const items2 = [closure_7(onOverlaySurfaceClick(5087).Text, obj8), ];
                    const obj9 = { media: metadata.media, onGetGamePress: onMediaGetGamePress, onCarouselScroll };
                    items2[1] = closure_7(AppStoreOverlayMediaCarouselDefault, obj9);
                    obj7.children = items2;
                    tmp34 = closure_8(View, obj7);
                  }
                  cResult[24] = metadata.media;
                  cResult[25] = onCarouselScroll;
                  cResult[26] = onMediaGetGamePress;
                  cResult[27] = tmp4.mediaSection;
                  cResult[28] = tmp34;
                  tmp33 = tmp34;
                }
              }
              let tmp30 = null != metadata.stats;
              if (tmp30) {
                tmp30 = metadata.stats.length > 0;
              }
              if (tmp30) {
                const obj10 = { stats: metadata.stats, onRatingPress: onOpenReviews, onCarouselScroll };
                tmp30 = closure_7(AppStoreOverlayStatsCarouselDefault, obj10);
              }
              cResult[20] = metadata.stats;
              cResult[21] = onCarouselScroll;
              cResult[22] = onOpenReviews;
              cResult[23] = tmp30;
              tmp29 = tmp30;
            }
          }
          const obj11 = { style: tmp4.textBlock, children: null };
          const items3 = [tmp19, tmp22];
          obj11.children = items3;
          const tmp28 = closure_8(View, obj11);
          cResult[16] = tmp4.textBlock;
          cResult[17] = tmp19;
          cResult[18] = tmp22;
          cResult[19] = tmp28;
          tmp25 = tmp28;
        }
      }
      let tmp15 = null != metadata.iconUrl;
      if (tmp15) {
        tmp15 = "" !== metadata.iconUrl;
      }
      if (tmp15) {
        const obj12 = { style: tmp4.iconContainer, children: null };
        const obj13 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
        const obj14 = { uri: metadata.iconUrl };
        obj13.source = obj14;
        obj13.style = tmp4.icon;
        obj12.children = closure_7(FastImageDefault, obj13);
        tmp15 = closure_7(View, obj12);
      }
      cResult[8] = metadata.iconUrl;
      cResult[9] = tmp4.icon;
      cResult[10] = tmp4.iconContainer;
      cResult[11] = tmp15;
      tmp14 = tmp15;
    }
    const items4 = [tmp4.container, null != headerUrl && tmp4.containerWithHeader];
    cResult[5] = tmp4.container;
    cResult[6] = null != headerUrl && tmp4.containerWithHeader;
    cResult[7] = items4;
    tmp13 = items4;
  }
  let tmp8 = null != headerUrl;
  if (tmp8) {
    const obj15 = { style: tmp4.header, children: null };
    const obj16 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj17 = { uri: headerUrl };
    obj16.source = obj17;
    obj16.style = tmp4.header;
    obj15.children = closure_7(FastImageDefault, obj16);
    tmp8 = closure_7(View, obj15);
  }
  cResult[2] = headerUrl;
  cResult[3] = tmp4.header;
  cResult[4] = tmp8;
  tmp7 = tmp8;
  const obj = onOverlaySurfaceClick(576);
}) : (function AppStoreOverlayBody(arg0) {
  ({ metadata, onCarouselScroll, onOverlaySurfaceClick } = arg0);
  ({ onOpenReviews, onMediaGetGamePress } = arg0);
  const tmp = closure_10();
  let headerUrl = metadata.headerUrl;
  if (headerUrl == null) {
    headerUrl = null;
  }
  const items = [onOverlaySurfaceClick];
  let tmp6 = null != headerUrl;
  const callback = noop.useCallback(() => {
    if (onOverlaySurfaceClick != null) {
      tmp(AnalyticsActions.AppStoreOverlaySurfaces.SEE_MORE);
    }
  }, items);
  if (tmp6) {
    const obj = { style: tmp.header, children: null };
    const obj2 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj3 = { uri: headerUrl };
    obj2.source = obj3;
    obj2.style = tmp.header;
    obj.children = closure_7(FastImageDefault, obj2);
    tmp6 = closure_7(View, obj);
  }
  const items1 = [tmp6, ];
  const items2 = [tmp.container, ];
  const obj4 = { style: items2, children: null };
  items2[1] = null != headerUrl && tmp.containerWithHeader;
  let tmp13 = null != metadata.iconUrl;
  if (tmp13) {
    tmp13 = "" !== metadata.iconUrl;
  }
  if (tmp13) {
    const obj5 = { style: tmp.iconContainer, children: null };
    const obj6 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj7 = { uri: metadata.iconUrl };
    obj6.source = obj7;
    obj6.style = tmp.icon;
    obj5.children = closure_7(FastImageDefault, obj6);
    tmp13 = closure_7(View, obj5);
  }
  const items3 = [tmp13, , , , ];
  const obj8 = { style: tmp.textBlock, children: null };
  const items4 = [closure_7(onOverlaySurfaceClick(5087).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: metadata.title }), ];
  let tmp17Result = null != metadata.subtitle;
  if (tmp17Result) {
    tmp17Result = "" !== metadata.subtitle;
  }
  if (tmp17Result) {
    const obj10 = { variant: "text-sm/medium", color: "text-subtle", children: metadata.subtitle };
    tmp17Result = closure_7(onOverlaySurfaceClick(5087).Text, obj10);
  }
  items4[1] = tmp17Result;
  obj8.children = items4;
  items3[1] = closure_8(View, obj8);
  let tmp17Result3 = null != metadata.stats;
  if (tmp17Result3) {
    tmp17Result3 = metadata.stats.length > 0;
  }
  if (tmp17Result3) {
    const obj11 = { stats: metadata.stats, onRatingPress: onOpenReviews, onCarouselScroll };
    tmp17Result3 = closure_7(AppStoreOverlayStatsCarouselDefault, obj11);
  }
  items3[2] = tmp17Result3;
  let tmp4Result = null != metadata.media;
  if (tmp4Result) {
    tmp4Result = metadata.media.length > 0;
  }
  if (tmp4Result) {
    const obj12 = { style: tmp.mediaSection, children: null };
    const obj13 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = onOverlaySurfaceClick(1126).intl;
    obj13.children = intl.string(onOverlaySurfaceClick(1126).t["EV1W/L"]);
    const items5 = [closure_7(onOverlaySurfaceClick(5087).Text, obj13), ];
    const obj14 = { media: metadata.media, onGetGamePress: onMediaGetGamePress, onCarouselScroll };
    items5[1] = closure_7(AppStoreOverlayMediaCarouselDefault, obj14);
    obj12.children = items5;
    tmp4Result = closure_8(View, obj12);
  }
  items3[3] = tmp4Result;
  let tmp17Result4 = null != metadata.description;
  if (tmp17Result4) {
    tmp17Result4 = "" !== metadata.description;
  }
  if (tmp17Result4) {
    const obj15 = { description: metadata.description, onSeeMorePress: callback };
    tmp17Result4 = closure_7(AppStoreOverlayAboutSectionDefault, obj15);
  }
  const obj16 = { children: null };
  items3[4] = tmp17Result4;
  obj4.children = items3;
  items1[1] = closure_8(View, obj4);
  obj16.children = items1;
  return closure_8(closure_9, obj16);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBody.tsx");

export const APP_STORE_OVERLAY_HEIGHT_RATIO = 0.7;
export const APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT = 32;
export const AppStoreOverlayBody = tmp3;
export const AppStoreOverlayFooter = ReactCompilerGating.isReactCompilerEnabled() ? (function AppStoreOverlayFooter(arg0) {
  const cResult = c.c(21);
  ({ onInstallPress, onLayout } = arg0);
  const tmp4 = closure_10();
  const token = useToken.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  if (cResult[0] !== token) {
    const obj3 = _modDef683(token);
    const hexResult = _modDef683(token).alpha(0).hex();
    cResult[0] = token;
    cResult[1] = hexResult;
    let tmp7 = hexResult;
    const alphaResult = _modDef683(token).alpha(0);
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === token) {
    if (cResult[3] === tmp7) {
      let tmp9 = cResult[4];
    }
    const _Math = Math;
    const bound = Math.max(useSafeAreaInsetsDefault().bottom, closure_6);
    if (cResult[5] !== bound) {
      const obj4 = { paddingBottom: bound };
      cResult[5] = bound;
      cResult[6] = obj4;
      let tmp13 = obj4;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp9) {
      if (cResult[8] === tmp4.footerGradient) {
        let tmp15 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.lwQdjB);
        cResult[10] = stringResult;
        let tmp19 = stringResult;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] !== onInstallPress) {
        const obj5 = { size: "lg", text: tmp19, onPress: onInstallPress };
        const tmp23 = React5(components_Button_Button.Button, obj5);
        cResult[11] = onInstallPress;
        cResult[12] = tmp23;
        let tmp21 = tmp23;
      } else {
        tmp21 = cResult[12];
      }
      if (cResult[13] === tmp13) {
        if (cResult[14] === tmp21) {
          let tmp24 = cResult[15];
        }
        if (cResult[16] === onLayout) {
          if (cResult[17] === tmp4.footer) {
            if (cResult[18] === tmp15) {
              if (cResult[19] === tmp24) {
                let tmp28 = cResult[20];
              }
              return tmp28;
            }
          }
        }
        const obj7 = { style: tmp14, onLayout, children: null };
        const items = [tmp15, tmp24];
        obj7.children = items;
        const tmp31 = closure_1_8(View, obj7);
        cResult[16] = onLayout;
        cResult[17] = tmp4.footer;
        cResult[18] = tmp15;
        cResult[19] = tmp24;
        cResult[20] = tmp31;
        tmp28 = tmp31;
      }
      const obj8 = { style: tmp13, children: tmp21 };
      const tmp27 = React5(View, obj8);
      cResult[13] = tmp13;
      cResult[14] = tmp21;
      cResult[15] = tmp27;
      tmp24 = tmp27;
    }
    const obj9 = { pointerEvents: "none", style: tmp4.footerGradient, colors: tmp9, start: null, end: null };
    ({ START: obj6.start, END: obj6.end } = VerticalGradient);
    const tmp18 = React5(LinearGradientDefault, obj9);
    cResult[7] = tmp9;
    cResult[8] = tmp4.footerGradient;
    cResult[9] = tmp18;
    tmp15 = tmp18;
  }
  const items1 = [tmp7, token];
  cResult[2] = token;
  cResult[3] = tmp7;
  cResult[4] = items1;
  tmp9 = items1;
}) : (function AppStoreOverlayFooter(arg0) {
  let token;
  ({ onInstallPress, onLayout } = arg0);
  const tmp = closure_10();
  const bottom = token(1631)().bottom;
  token = bottom(4779).useToken(token(587).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  const items1 = [bottom];
  const memo = noop.useMemo(() => {
    const obj = _modDef683(token);
    const items = [_modDef683(token).alpha(0).hex(), token];
    return items;
  }, items);
  const obj2 = { style: tmp.footer, onLayout, children: null };
  const memo1 = noop.useMemo(() => ({ paddingBottom: Math.max(bottom, closure_6) }), items1);
  const items2 = [closure_7(token(5388), { pointerEvents: "none", style: tmp.footerGradient, colors: memo, start: VerticalGradient.START, end: VerticalGradient.END }), ];
  const obj4 = { style: memo1, children: null };
  const obj5 = { size: "lg", text: null, onPress: null };
  const intl = bottom(1126).intl;
  obj5.text = intl.string(bottom(1126).t.lwQdjB);
  obj5.onPress = onInstallPress;
  obj4.children = closure_7(bottom(5376).Button, obj5);
  items2[1] = closure_7(View, obj4);
  obj2.children = items2;
  return closure_8(View, obj2);
});