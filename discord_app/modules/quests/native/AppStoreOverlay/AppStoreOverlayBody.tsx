// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayBody.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05612_LinearGradient.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import ActionSheetConstants from "../../../action_sheet/native/ActionSheetConstants.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AppStoreOverlayStatsCarouselDefault from "AppStoreOverlayStatsCarousel.tsx";
import AppStoreOverlayMediaCarouselDefault from "AppStoreOverlayMediaCarousel.tsx";
import AppStoreOverlayAboutSectionDefault from "AppStoreOverlayAboutSection.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
const VerticalGradient = Constants.VerticalGradient;
let closure_6 = ActionSheetConstants.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  containerWithHeader: { paddingTop: 110 },
  iconContainer: size,
  icon: { width: 72, height: 72 },
  textBlock: obj3,
  mediaSection: obj4,
  header: { width: "100%", height: 156, overflow: "hidden", position: "absolute", top: 0, left: 0, right: 0 },
  footer: obj5,
  footerGradient: { position: "absolute", top: -32, right: 0, left: 0, height: 32 },
};
obj2 = {
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
createStyles = createStyles.createStyles;
size = {
  width: 84,
  height: 84,
  borderRadius: nativeDefault.radii.xl,
  overflow: "hidden",
  borderWidth: 6,
  borderColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingHorizontal: nativeDefault.space.PX_16,
};
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let intl;
      let items;
      let items1;
      let items2;
      let items3;
      let metadata;
      let obj13;
      let obj14;
      let obj16;
      let obj17;
      let onCarouselScroll;
      let onMediaGetGamePress;
      let onOpenReviews;
      let onOverlaySurfaceClick;
      let tmp6;
      const obj = onOverlaySurfaceClick(576);
      const cResult = obj.c(42);
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === headerUrl) {
        let tmp7;
        if (cResult[3] === tmp4.header) {
          tmp7 = cResult[4];
        }
        if (cResult[5] === tmp4.container) {
          let tmp13;
          if (cResult[6] === (null != headerUrl && tmp4.containerWithHeader)) {
            tmp13 = cResult[7];
          }
          if (cResult[8] === metadata.iconUrl) {
            if (cResult[9] === tmp4.icon) {
              let tmp14;
              let tmp19;
              let tmp22;
              if (cResult[10] === tmp4.iconContainer) {
                tmp14 = cResult[11];
              }
              if (cResult[12] !== metadata.title) {
                const obj2 = {
                  variant: "heading-xl/bold",
                  color: "mobile-text-heading-primary",
                  accessibilityRole: "header",
                  children: metadata.title,
                };
                const tmp21 = closure_7(onOverlaySurfaceClick(4892).Text, obj2);
                cResult[12] = metadata.title;
                cResult[13] = tmp21;
                tmp19 = tmp21;
              } else {
                tmp19 = cResult[13];
              }
              if (cResult[14] !== metadata.subtitle) {
                let tmp23 = null != metadata.subtitle && "" !== metadata.subtitle;
                if (tmp23) {
                  const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: metadata.subtitle };
                  tmp23 = closure_7(onOverlaySurfaceClick(4892).Text, obj3);
                }
                cResult[14] = metadata.subtitle;
                cResult[15] = tmp23;
                tmp22 = tmp23;
              } else {
                tmp22 = cResult[15];
              }
              if (cResult[16] === tmp4.textBlock) {
                if (cResult[17] === tmp19) {
                  let tmp25;
                  if (cResult[18] === tmp22) {
                    tmp25 = cResult[19];
                  }
                  if (cResult[20] === metadata.stats) {
                    if (cResult[21] === onCarouselScroll) {
                      let tmp29;
                      if (cResult[22] === onOpenReviews) {
                        tmp29 = cResult[23];
                      }
                      if (cResult[24] === metadata.media) {
                        if (cResult[25] === onCarouselScroll) {
                          if (cResult[26] === onMediaGetGamePress) {
                            let tmp33;
                            if (cResult[27] === tmp4.mediaSection) {
                              tmp33 = cResult[28];
                            }
                            if (cResult[29] === tmp6) {
                              let tmp39;
                              if (cResult[30] === metadata.description) {
                                tmp39 = cResult[31];
                              }
                              if (cResult[32] === tmp33) {
                                if (cResult[33] === tmp39) {
                                  if (cResult[34] === tmp13) {
                                    if (cResult[35] === tmp14) {
                                      if (cResult[36] === tmp25) {
                                        let tmp43;
                                        if (cResult[37] === tmp29) {
                                          tmp43 = cResult[38];
                                        }
                                        if (cResult[39] === tmp43) {
                                          let tmp47;
                                          if (cResult[40] === tmp7) {
                                            tmp47 = cResult[41];
                                          }
                                          return tmp47;
                                        }
                                        const obj4 = { children: items };
                                        items = [tmp7, tmp43];
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
                              const obj5 = { style: tmp13, children: items1 };
                              items1 = [tmp14, tmp25, tmp29, tmp33, tmp39];
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
                            let tmp40 = null != metadata.description && "" !== metadata.description;
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
                      let tmp34 = null != metadata.media && metadata.media.length > 0;
                      if (tmp34) {
                        const obj7 = { style: tmp4.mediaSection, children: items2 };
                        const obj8 = {
                          variant: "text-sm/semibold",
                          color: "mobile-text-heading-primary",
                          children: intl.string(onOverlaySurfaceClick(1126).t["EV1W/L"]),
                        };
                        const Text = onOverlaySurfaceClick(4892).Text;
                        intl = onOverlaySurfaceClick(1126).intl;
                        items2 = [closure_7(Text, obj8)];
                        const obj9 = { media: metadata.media, onGetGamePress: onMediaGetGamePress, onCarouselScroll };
                        items2[1] = closure_7(AppStoreOverlayMediaCarouselDefault, obj9);
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
                  let tmp30 = null != metadata.stats && metadata.stats.length > 0;
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
              const obj11 = { style: tmp4.textBlock, children: items3 };
              items3 = [tmp19, tmp22];
              const tmp28 = closure_8(View, obj11);
              cResult[16] = tmp4.textBlock;
              cResult[17] = tmp19;
              cResult[18] = tmp22;
              cResult[19] = tmp28;
              tmp25 = tmp28;
            }
          }
          let tmp15 = null != metadata.iconUrl && "" !== metadata.iconUrl;
          if (tmp15) {
            const obj12 = { style: tmp4.iconContainer, children: closure_7(FastImageDefault, obj13) };
            obj13 = { source: obj14, style: tmp4.icon, accessibilityIgnoresInvertColors: true };
            obj14 = { uri: metadata.iconUrl };
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
        const obj15 = { style: tmp4.header, children: closure_7(FastImageDefault, obj16) };
        obj16 = { source: obj17, style: tmp4.header, accessibilityIgnoresInvertColors: true };
        obj17 = { uri: headerUrl };
        tmp8 = closure_7(View, obj15);
      }
      cResult[2] = headerUrl;
      cResult[3] = tmp4.header;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : (arg0) => {
      let intl;
      let items3;
      let items4;
      let items5;
      let metadata;
      let obj2;
      let obj3;
      let obj6;
      let obj7;
      let onCarouselScroll;
      let onMediaGetGamePress;
      let onOpenReviews;
      let onOverlaySurfaceClick;
      ({ metadata, onCarouselScroll, onOverlaySurfaceClick } = arg0);
      ({ onOpenReviews, onMediaGetGamePress } = arg0);
      const tmp = closure_10();
      let headerUrl = metadata.headerUrl;
      if (headerUrl == null) {
        headerUrl = null;
      }
      const items = [onOverlaySurfaceClick];
      let tmp6 = null != headerUrl;
      const callback = react.useCallback(() => {
        if (onOverlaySurfaceClick != null) {
          tmp(AnalyticsActions.AppStoreOverlaySurfaces.SEE_MORE);
        }
      }, items);
      if (tmp6) {
        const obj = { style: tmp.header, children: closure_7(FastImageDefault, obj2) };
        obj2 = { source: obj3, style: tmp.header, accessibilityIgnoresInvertColors: true };
        obj3 = { uri: headerUrl };
        tmp6 = closure_7(View, obj);
      }
      const items1 = [tmp6];
      const items2 = [tmp.container];
      const obj4 = { style: items2, children: items3 };
      const tmp12 = null != headerUrl && tmp.containerWithHeader;
      items2[1] = tmp12;
      let tmp13 = null != metadata.iconUrl && "" !== metadata.iconUrl;
      if (tmp13) {
        const obj5 = { style: tmp.iconContainer, children: closure_7(FastImageDefault, obj6) };
        obj6 = { source: obj7, style: tmp.icon, accessibilityIgnoresInvertColors: true };
        obj7 = { uri: metadata.iconUrl };
        tmp13 = closure_7(View, obj5);
      }
      items3 = [tmp13, , , ,];
      const obj8 = { style: tmp.textBlock, children: items4 };
      items4 = [,];
      const obj9 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        children: metadata.title,
      };
      items4[0] = closure_7(onOverlaySurfaceClick(4892).Text, obj9);
      let tmp17Result = null != metadata.subtitle && "" !== metadata.subtitle;
      if (tmp17Result) {
        const obj10 = { variant: "text-sm/medium", color: "text-subtle", children: metadata.subtitle };
        tmp17Result = closure_7(onOverlaySurfaceClick(4892).Text, obj10);
      }
      items4[1] = tmp17Result;
      items3[1] = closure_8(View, obj8);
      let tmp17Result3 = null != metadata.stats && metadata.stats.length > 0;
      if (tmp17Result3) {
        const obj11 = { stats: metadata.stats, onRatingPress: onOpenReviews, onCarouselScroll };
        tmp17Result3 = closure_7(AppStoreOverlayStatsCarouselDefault, obj11);
      }
      items3[2] = tmp17Result3;
      let tmp4Result = null != metadata.media && metadata.media.length > 0;
      if (tmp4Result) {
        const obj12 = { style: tmp.mediaSection, children: items5 };
        const obj13 = {
          variant: "text-sm/semibold",
          color: "mobile-text-heading-primary",
          children: intl.string(onOverlaySurfaceClick(1126).t["EV1W/L"]),
        };
        const Text = onOverlaySurfaceClick(4892).Text;
        intl = onOverlaySurfaceClick(1126).intl;
        items5 = [closure_7(Text, obj13)];
        const obj14 = { media: metadata.media, onGetGamePress: onMediaGetGamePress, onCarouselScroll };
        items5[1] = closure_7(AppStoreOverlayMediaCarouselDefault, obj14);
        tmp4Result = closure_8(View, obj12);
      }
      items3[3] = tmp4Result;
      let tmp17Result4 = null != metadata.description && "" !== metadata.description;
      if (tmp17Result4) {
        const obj15 = { description: metadata.description, onSeeMorePress: callback };
        tmp17Result4 = closure_7(AppStoreOverlayAboutSectionDefault, obj15);
      }
      const obj16 = { children: items1 };
      items3[4] = tmp17Result4;
      items1[1] = closure_8(View, obj4);
      return closure_8(closure_9, obj16);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let onInstallPress;
      let onLayout;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(21);
      ({ onInstallPress, onLayout } = arg0);
      const tmp4 = closure_10();
      const bottom = useSafeAreaInsetsDefault().bottom;
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
      if (cResult[0] !== token) {
        const obj3 = _modDef683(token);
        const alphaResult = obj3.alpha(0);
        const hexResult = alphaResult.hex();
        cResult[0] = token;
        cResult[1] = hexResult;
        tmp7 = hexResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === token) {
        let tmp9;
        let tmp13;
        if (cResult[3] === tmp7) {
          tmp9 = cResult[4];
        }
        const _Math = Math;
        const bound = Math.max(bottom, closure_6);
        if (cResult[5] !== bound) {
          const obj4 = { paddingBottom: bound };
          cResult[5] = bound;
          cResult[6] = obj4;
          tmp13 = obj4;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] === tmp9) {
          let tmp15;
          let tmp19;
          let tmp21;
          if (cResult[8] === tmp4.footerGradient) {
            tmp15 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl2.intl;
            const stringResult = intl.string(intl2.t.lwQdjB);
            cResult[10] = stringResult;
            tmp19 = stringResult;
          } else {
            tmp19 = cResult[10];
          }
          if (cResult[11] !== onInstallPress) {
            const obj5 = { size: "lg", text: tmp19, onPress: onInstallPress };
            const tmp23 = metroImportDefault(components_Button_Button.Button, obj5);
            cResult[11] = onInstallPress;
            cResult[12] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[12];
          }
          if (cResult[13] === tmp13) {
            let tmp24;
            if (cResult[14] === tmp21) {
              tmp24 = cResult[15];
            }
            if (cResult[16] === onLayout) {
              if (cResult[17] === tmp4.footer) {
                if (cResult[18] === tmp15) {
                  let tmp28;
                  if (cResult[19] === tmp24) {
                    tmp28 = cResult[20];
                  }
                  return tmp28;
                }
              }
            }
            const obj7 = { style: tmp14, onLayout, children: items };
            items = [tmp15, tmp24];
            const tmp31 = metroImportAll(View, obj7);
            cResult[16] = onLayout;
            cResult[17] = tmp4.footer;
            cResult[18] = tmp15;
            cResult[19] = tmp24;
            cResult[20] = tmp31;
            tmp28 = tmp31;
          }
          const obj8 = { style: tmp13, children: tmp21 };
          const tmp27 = metroImportDefault(View, obj8);
          cResult[13] = tmp13;
          cResult[14] = tmp21;
          cResult[15] = tmp27;
          tmp24 = tmp27;
        }
        const obj9 = { pointerEvents: "none", style: tmp4.footerGradient, colors: tmp9, start: null, end: null };
        ({ START: obj6.start, END: obj6.end } = VerticalGradient);
        const tmp18 = metroImportDefault(LinearGradientDefault, obj9);
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
    }
  : (arg0) => {
      let Button;
      let intl;
      let items2;
      let obj5;
      let onInstallPress;
      let onLayout;
      let token;
      ({ onInstallPress, onLayout } = arg0);
      const tmp = closure_10();
      const bottom = token(1618)().bottom;
      let obj = bottom(4586);
      token = obj.useToken(token(587).colors.MOBILE_ACTIONSHEET_BACKGROUND);
      let items = [token];
      const items1 = [bottom];
      const memo = react.useMemo(() => {
        const items = [,];
        const obj = _modDef683(token);
        const alphaResult = obj.alpha(0);
        items[0] = alphaResult.hex();
        items[1] = token;
        return items;
      }, items);
      const obj2 = { style: tmp.footer, onLayout, children: items2 };
      const memo1 = react.useMemo(() => {
        const obj = { paddingBottom: Math.max(bottom, closure_6) };
        return obj;
      }, items1);
      items2 = [,];
      const obj3 = {
        pointerEvents: "none",
        style: tmp.footerGradient,
        colors: memo,
        start: VerticalGradient.START,
        end: VerticalGradient.END,
      };
      items2[0] = closure_7(token(5612), obj3);
      const obj4 = { style: memo1, children: closure_7(Button, obj5) };
      obj5 = { size: "lg", text: intl.string(bottom(1126).t.lwQdjB), onPress: onInstallPress };
      Button = bottom(5601).Button;
      intl = bottom(1126).intl;
      items2[1] = closure_7(View, obj4);
      return closure_8(View, obj2);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBody.tsx");

export const APP_STORE_OVERLAY_HEIGHT_RATIO = 0.7;
export const APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT = 32;
export const AppStoreOverlayBody = tmp4;
export const AppStoreOverlayFooter = tmp5;
