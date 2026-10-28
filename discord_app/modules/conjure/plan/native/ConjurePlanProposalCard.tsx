// === Module 12478: ConjurePlanProposalCard ===

// Module 12478 (ConjurePlanProposalCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import FastImageDefault from "FastImage" /* 5705 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5741 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 12238 */;
import openConjureNativeImages from "openConjureNativeImages" /* 12239 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12287 */;
import conjurePlanOverlayDesign from "conjurePlanOverlayDesign" /* 12479 */;
import conjurePlanDesign from "conjurePlanDesign" /* 12481 */;
import useConjureOverlayBackgroundDefault from "useConjureOverlayBackground" /* 12484 */;
import _modDef12485 from "module_12485" /* 12485 */;
import conjurePlanBot from "conjurePlanBot" /* 12493 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 12494 */;
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples" /* 12495 */;
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview" /* 12497 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Pressable: metroRequire, StyleSheet: closure_7, View: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5004);
let obj2 = { surface: { padding: 0, overflow: "hidden" }, content: { padding: nativeDefault.space.PX_12 }, whatChanged: null, footer: null, replyHint: null, design: null, overlayDesign: null, blurredBackground: null, overlayWidget: null, stack: null, overlayWidgetSlide: null, overlayFullWidget: null, slidePicker: null, slideButton: null, slideButtonActive: null, referenceList: null, reference: null, referenceImage: null };
let obj3 = { padding: nativeDefault.space.PX_12 };
obj2.whatChanged = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.footer = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.replyHint = { flexShrink: 1 };
let obj5 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.design = { width: "100%", aspectRatio: 1.5, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center" };
let obj6 = { width: "100%", aspectRatio: 1.5, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center" };
obj2.overlayDesign = { width: "100%", aspectRatio: fn(12479).CONJURE_PLAN_OVERLAY_SCENE_ASPECT_RATIO, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
let obj8 = { transform: null };
let items = [{ scale: 1.04 }];
obj8.transform = items;
obj2.blurredBackground = obj8;
let obj7 = { width: "100%", aspectRatio: fn(12479).CONJURE_PLAN_OVERLAY_SCENE_ASPECT_RATIO, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
obj2.overlayWidget = { position: "absolute", top: fn(12479).CONJURE_PLAN_OVERLAY_WIDGET_TOP, end: fn(12479).CONJURE_PLAN_OVERLAY_WIDGET_END };
let obj9 = { position: "absolute", top: fn(12479).CONJURE_PLAN_OVERLAY_WIDGET_TOP, end: fn(12479).CONJURE_PLAN_OVERLAY_WIDGET_END };
obj2.stack = { gap: nativeDefault.space.PX_8 };
let obj10 = { gap: nativeDefault.space.PX_8 };
obj2.overlayWidgetSlide = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj2.overlayFullWidget = { width: "100%", height: "100%" };
let obj11 = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj2.slidePicker = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
let obj12 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
obj2.slideButton = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
let obj13 = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj2.slideButtonActive = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let obj14 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.referenceList = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let obj15 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj2.reference = { height: 64, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.referenceImage = { width: "100%", height: "100%" };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanOverlayWidget(projectId) {
  const cResult = c.c(24);
  ({ src, alt, size, onError } = projectId);
  const tmp4 = closure_13();
  const tmp6Result = useConjureOverlayBackgroundDefault(projectId.projectId, _modDef12485);
  if (cResult[0] !== size) {
    const result = conjurePlanOverlayDesign.conjurePlanOverlayWidgetBox(size);
    cResult[0] = size;
    cResult[1] = result;
    let size2 = result;
    const tmpResult = conjurePlanOverlayDesign;
  } else {
    size2 = cResult[1];
  }
  if (cResult[2] === tmp6Result.blurred) {
    if (cResult[3] === tmp6Result.handleError) {
      if (cResult[4] === tmp6Result.src) {
        if (cResult[5] === tmp4.blurredBackground) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] !== src) {
          const obj2 = { uri: src };
          cResult[7] = src;
          cResult[8] = obj2;
          let tmp14 = obj2;
        } else {
          tmp14 = cResult[8];
        }
        if (cResult[9] === size2.height) {
          if (cResult[10] === size2.width) {
            let tmp15 = cResult[11];
          }
          if (cResult[12] === tmp4.overlayWidget) {
            if (cResult[13] === tmp15) {
              let tmp16 = cResult[14];
            }
            if (cResult[15] === alt) {
              if (cResult[16] === onError) {
                if (cResult[17] === tmp14) {
                  if (cResult[18] === tmp16) {
                    let tmp17 = cResult[19];
                  }
                  if (cResult[20] === tmp4.overlayDesign) {
                    if (cResult[21] === tmp9) {
                      if (cResult[22] === tmp17) {
                        let tmp20 = cResult[23];
                      }
                      return tmp20;
                    }
                  }
                  const obj3 = { style: tmp4.overlayDesign, children: null };
                  const items = [tmp9, tmp17];
                  obj3.children = items;
                  const tmp23 = closure_1_11(closure_1_8, obj3);
                  cResult[20] = tmp4.overlayDesign;
                  cResult[21] = tmp9;
                  cResult[22] = tmp17;
                  cResult[23] = tmp23;
                  tmp20 = tmp23;
                }
              }
            }
            const obj4 = { source: tmp14, style: tmp16, resizeMode: "contain", onError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
            const tmp19 = v65535(FastImageDefault, obj4);
            cResult[15] = alt;
            cResult[16] = onError;
            cResult[17] = tmp14;
            cResult[18] = tmp16;
            cResult[19] = tmp19;
            tmp17 = tmp19;
          }
          const items1 = [tmp4.overlayWidget, tmp15];
          cResult[12] = tmp4.overlayWidget;
          cResult[13] = tmp15;
          cResult[14] = items1;
          tmp16 = items1;
        }
        const size1 = { width: null, height: null };
        ({ width: obj6.width, height: obj6.height } = size2);
        cResult[9] = size2.height;
        cResult[10] = size2.width;
        cResult[11] = size1;
        tmp15 = size1;
      }
    }
  }
  let tmp11Result = null;
  if (null != tmp6Result.src) {
    if (typeof tmp6Result.src === "string") {
      const obj5 = { uri: tmp6Result.src };
      let src2 = obj5;
    } else {
      src2 = tmp6Result.src;
    }
    const obj7 = { source: src2, style: null, resizeMode: "cover", blurRadius: null, onError: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    const items2 = [React5.absoluteFill, tmp6Result.blurred && tmp4.blurredBackground];
    obj7.style = items2;
    let num3;
    if (tmp6Result.blurred) {
      num3 = 4;
    }
    obj7.blurRadius = num3;
    obj7.onError = tmp6Result.handleError;
    tmp11Result = v65535(FastImageDefault, obj7);
    const tmp5Result = FastImageDefault;
  }
  cResult[2] = tmp6Result.blurred;
  cResult[3] = tmp6Result.handleError;
  cResult[4] = tmp6Result.src;
  cResult[5] = tmp4.blurredBackground;
  cResult[6] = tmp11Result;
  tmp9 = tmp11Result;
}) : (function PlanOverlayWidget(arg0) {
  ({ projectId, src, alt, size, onError } = arg0);
  const tmp = closure_13();
  const tmp4Result = useConjureOverlayBackgroundDefault(projectId, _modDef12485);
  const size2 = conjurePlanOverlayDesign.conjurePlanOverlayWidgetBox(size);
  const obj2 = { style: tmp.overlayDesign, children: null };
  let tmp9Result = null;
  if (null != tmp4Result.src) {
    if (typeof tmp4Result.src === "string") {
      const obj3 = { uri: tmp4Result.src };
      let src2 = obj3;
    } else {
      src2 = tmp4Result.src;
    }
    const obj4 = { source: src2, style: null, resizeMode: "cover", blurRadius: null, onError: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    const items = [React5.absoluteFill, tmp4Result.blurred && tmp.blurredBackground];
    obj4.style = items;
    let num;
    if (tmp4Result.blurred) {
      num = 4;
    }
    obj4.blurRadius = num;
    obj4.onError = tmp4Result.handleError;
    tmp9Result = v65535(FastImageDefault, obj4);
    const tmp2Result = FastImageDefault;
  }
  const items1 = [tmp9Result, ];
  const obj5 = { source: { uri: src }, style: null, resizeMode: "contain", onError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
  const items2 = [tmp.overlayWidget, { width: size2.width, height: size2.height }];
  obj5.style = items2;
  items1[1] = v65535(FastImageDefault, obj5);
  obj2.children = items1;
  return closure_1_11(closure_1_8, obj2);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(projectId) {
  const cResult = projectId(alt[9]).c(13);
  projectId = projectId.projectId;
  const design = projectId.design;
  alt = projectId.alt;
  let design2 = closure_13();
  const obj = projectId(alt[9]);
  const tmp = projectId;
  const conjureAttachmentImage = projectId(alt[13]).useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    if (cResult[0] === alt) {
      if (cResult[1] === design.id) {
        if (cResult[2] === projectId) {
          let tmp5 = cResult[3];
        }
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[15]).intl;
          const stringResult = intl.string(design(tmp2[16]).TvAPIm);
          cResult[4] = stringResult;
          let tmp7 = stringResult;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === handleError) {
          if (cResult[6] === src) {
            if (cResult[7] === design2.design) {
              if (cResult[9] === alt) {
                if (cResult[10] === tmp5) {
                }
              }
              const obj3 = { onPress: tmp5, accessibilityRole: "imagebutton", accessibilityLabel: alt, accessibilityHint: tmp7, children: cResult[8] };
              const tmp21 = closure_10(closure_6, obj3);
              cResult[9] = alt;
              cResult[10] = tmp5;
              cResult[11] = cResult[8];
              cResult[12] = tmp21;
            }
          }
        }
        if (null == src) {
          const obj4 = { style: design2.design, children: closure_10(closure_5, { size: "small" }) };
          let tmp13 = closure_10(closure_8, obj4);
        } else {
          const obj5 = { source: null, style: null, resizeMode: "contain", onError: null };
          const obj6 = { uri: src };
          obj5.source = obj6;
          obj5.style = design2.design;
          obj5.onError = handleError;
          tmp13 = closure_10(design(tmp2[12]), obj5);
        }
        cResult[5] = handleError;
        cResult[6] = src;
        design2 = design2.design;
        cResult[7] = design2;
        cResult[8] = tmp13;
      }
    }
    const fn = function t() {
      const items = [{ id: design.id, alt }];
      return openConjureNativeImages.openConjureNativeImages(projectId, items, 0);
    };
    cResult[0] = alt;
    cResult[1] = design.id;
    cResult[2] = projectId;
    cResult[3] = fn;
    tmp5 = fn;
  }
  const obj2 = projectId(alt[13]);
}) : (function PlanDesign(projectId) {
  projectId = projectId.projectId;
  const design = projectId.design;
  alt = projectId.alt;
  let tmp = closure_13();
  const conjureAttachmentImage = projectId(alt[13]).useConjureAttachmentImage(projectId, design.id);
  const src = conjureAttachmentImage.src;
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    const obj2 = {
      onPress() {
          const items = [{ id: design.id, alt }];
          return openConjureNativeImages.openConjureNativeImages(projectId, items, 0);
        },
      accessibilityRole: "imagebutton",
      accessibilityLabel: alt,
      accessibilityHint: null,
      children: null
    };
    const intl = tmp2(tmp3[15]).intl;
    obj2.accessibilityHint = intl.string(design(tmp3[16]).TvAPIm);
    if (null == src) {
      const obj3 = { style: tmp.design, children: null };
      tmp = closure_5;
      obj3.children = closure_10(closure_5, { size: "small" });
      let tmp6Result = closure_10(closure_8, obj3);
    } else {
      const obj4 = { source: null, style: null, resizeMode: "contain", onError: null };
      const obj5 = { uri: src };
      obj4.source = obj5;
      obj4.style = tmp.design;
      obj4.onError = tmp5;
      tmp6Result = closure_10(tmp8(tmp3[12]), obj4);
    }
    obj2.children = tmp6Result;
    closure_10(closure_6, obj2);
    tmp8 = design;
  }
  const obj = projectId(alt[13]);
  tmp2 = projectId;
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanOverlayDesign(projectId) {
  const cResult = projectId(576).c(41);
  projectId = projectId.projectId;
  const design = projectId.design;
  const size = projectId.size;
  const tmp4 = closure_13();
  dependencyMap = tmp4;
  let obj = projectId(576);
  const conjureAttachmentImage = projectId(12238).useConjureAttachmentImage(projectId, design.id);
  ({ src: overlayWidgetSlide, handleError } = conjureAttachmentImage);
  if (cResult[0] !== (null != overlayWidgetSlide)) {
    const obj3 = { ready: tmp6 };
    cResult[0] = tmp6;
    cResult[1] = obj3;
    let tmp7 = obj3;
  } else {
    tmp7 = cResult[1];
  }
  const obj2 = projectId(12238);
  const conjurePlanOverlaySlides = projectId(12486).useConjurePlanOverlaySlides(tmp7);
  const slide = conjurePlanOverlaySlides.slide;
  ({ labels, pick } = conjurePlanOverlaySlides);
  const hold = conjurePlanOverlaySlides.hold;
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1125).intl;
      const stringResult = intl.string(design(3863).mjryK4);
      cResult[2] = stringResult;
      let tmp10 = stringResult;
    } else {
      tmp10 = cResult[2];
    }
    alt = tmp10;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1125).intl;
      const stringResult1 = intl2.string(design(3863)["rPpf5/"]);
      cResult[3] = stringResult1;
      let tmp13 = stringResult1;
    } else {
      tmp13 = cResult[3];
    }
    if (cResult[4] === design.id) {
      if (cResult[5] === projectId) {
        let tmp17 = cResult[6];
      }
      let tmp19 = tmp13;
      if (0 === slide) {
        tmp19 = tmp10;
      }
      const _Symbol3 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1125).intl;
        const stringResult2 = intl3.string(design(3863).TvAPIm);
        cResult[7] = stringResult2;
        let tmp20 = stringResult2;
      } else {
        tmp20 = cResult[7];
      }
      if (cResult[8] === handleError) {
        if (cResult[9] === projectId) {
          if (cResult[10] === size) {
            if (cResult[11] === slide) {
              if (cResult[12] === overlayWidgetSlide) {
                if (cResult[13] === tmp4.overlayDesign) {
                  if (cResult[14] === tmp4.overlayFullWidget) {
                    if (cResult[15] === tmp4.overlayWidgetSlide) {
                      if (cResult[17] === hold) {
                        if (cResult[18] === tmp17) {
                          if (cResult[19] === tmp19) {
                            if (cResult[20] === tmp23) {
                              let tmp32 = cResult[21];
                            }
                            const _Symbol4 = Symbol;
                            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl4 = tmp(1125).intl;
                              const stringResult3 = intl4.string(design(3863).EH36X6);
                              cResult[22] = stringResult3;
                              let tmp36 = stringResult3;
                            } else {
                              tmp36 = cResult[22];
                            }
                            if (cResult[23] === labels) {
                              if (cResult[24] === pick) {
                                if (cResult[25] === slide) {
                                  if (cResult[26] === tmp4.slideButton) {
                                    if (cResult[27] === tmp4.slideButtonActive) {
                                      if (cResult[34] === tmp4.slidePicker) {
                                        if (cResult[35] === tmp39) {
                                          let tmp43 = cResult[36];
                                        }
                                        if (cResult[37] === tmp4.stack) {
                                          if (cResult[38] === tmp32) {
                                            if (cResult[39] === tmp43) {
                                              let tmp47 = cResult[40];
                                            }
                                            return tmp47;
                                          }
                                        }
                                        const obj4 = { style: tmp16, children: null };
                                        let items = [, ];
                                        class H {
                                          constructor(arg0, arg1) {
                                            closure_0 = arg1;
                                            tmp = closure_1_10;
                                            items = [, ];
                                            items[0] = closure_2.slideButton;
                                            tmp3 = slide === arg1;
                                            slideButtonActive = tmp3;
                                            tmp2 = closure_1_6;
                                            if (tmp3) {
                                              slideButtonActive = closure_2.slideButtonActive;
                                            }
                                            obj = { style: items, onPress() { ... }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
                                            items[1] = slideButtonActive;
                                            str = "text-muted";
                                            if (tmp3) {
                                              str = "text-default";
                                            }
                                            obj1 = { variant: "text-xs/medium", color: str, children: projectId };
                                            obj.children = tmp(projectId(closure_2[18]).Text, obj1);
                                            return tmp(tmp2, obj, projectId);
                                          }
                                        }
                                        items[1] = tmp43;
                                        obj4.children = items;
                                        class B {
                                          constructor() {
                                            obj = closure_0(closure_2[14]);
                                            obj1 = { id: design.id, alt: closure_5 };
                                            items = [];
                                            items[0] = obj1;
                                            return obj.openConjureNativeImages(projectId, items, 0);
                                          }
                                        }
                                        cResult[37] = tmp4.stack;
                                        cResult[38] = tmp32;
                                        cResult[39] = tmp43;
                                        cResult[40] = tmp50;
                                        tmp47 = tmp50;
                                      }
                                      const obj5 = { style: tmp4.slidePicker, accessibilityRole: "tablist", accessibilityLabel: tmp36, children: null };
                                      class H {
                                        constructor(arg0, arg1) {
                                          closure_0 = arg1;
                                          tmp = closure_1_10;
                                          items = [, ];
                                          items[0] = closure_2.slideButton;
                                          tmp3 = slide === arg1;
                                          slideButtonActive = tmp3;
                                          tmp2 = closure_1_6;
                                          if (tmp3) {
                                            slideButtonActive = closure_2.slideButtonActive;
                                          }
                                          obj = { style: items, onPress() { ... }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
                                          items[1] = slideButtonActive;
                                          str = "text-muted";
                                          if (tmp3) {
                                            str = "text-default";
                                          }
                                          obj1 = { variant: "text-xs/medium", color: str, children: projectId };
                                          obj.children = tmp(projectId(closure_2[18]).Text, obj1);
                                          return tmp(tmp2, obj, projectId);
                                        }
                                      }
                                      const tmp46 = closure_10(closure_8, obj5);
                                      class B {
                                        constructor() {
                                          obj = closure_0(closure_2[14]);
                                          obj1 = { id: design.id, alt: closure_5 };
                                          items = [];
                                          items[0] = obj1;
                                          return obj.openConjureNativeImages(projectId, items, 0);
                                        }
                                      }
                                      cResult[35] = cResult[28];
                                      cResult[36] = tmp46;
                                      tmp43 = tmp46;
                                    }
                                  }
                                }
                              }
                            }
                            if (cResult[29] === pick) {
                              if (cResult[30] === slide) {
                                if (cResult[31] === tmp4.slideButton) {
                                  if (cResult[32] === tmp4.slideButtonActive) {
                                    let tmp40 = cResult[33];
                                  }
                                  const mapped = labels.map(tmp40);
                                  cResult[23] = labels;
                                  cResult[24] = pick;
                                  class H {
                                    constructor(arg0, arg1) {
                                      closure_0 = arg1;
                                      tmp = closure_1_10;
                                      items = [, ];
                                      items[0] = closure_2.slideButton;
                                      tmp3 = slide === arg1;
                                      slideButtonActive = tmp3;
                                      tmp2 = closure_1_6;
                                      if (tmp3) {
                                        slideButtonActive = closure_2.slideButtonActive;
                                      }
                                      obj = { style: items, onPress() { ... }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
                                      items[1] = slideButtonActive;
                                      str = "text-muted";
                                      if (tmp3) {
                                        str = "text-default";
                                      }
                                      obj1 = { variant: "text-xs/medium", color: str, children: projectId };
                                      obj.children = tmp(projectId(closure_2[18]).Text, obj1);
                                      return tmp(tmp2, obj, projectId);
                                    }
                                  }
                                  cResult[26] = tmp4.slideButton;
                                  class B {
                                    constructor() {
                                      obj = closure_0(closure_2[14]);
                                      obj1 = { id: design.id, alt: closure_5 };
                                      items = [];
                                      items[0] = obj1;
                                      return obj.openConjureNativeImages(projectId, items, 0);
                                    }
                                  }
                                  cResult[27] = slide;
                                  cResult[28] = mapped;
                                }
                              }
                            }
                            class H {
                              constructor(arg0, arg1) {
                                closure_0 = arg1;
                                tmp = closure_1_10;
                                items = [, ];
                                items[0] = closure_2.slideButton;
                                tmp3 = slide === arg1;
                                slideButtonActive = tmp3;
                                tmp2 = closure_1_6;
                                if (tmp3) {
                                  slideButtonActive = closure_2.slideButtonActive;
                                }
                                obj = { style: items, onPress() { ... }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
                                items[1] = slideButtonActive;
                                str = "text-muted";
                                if (tmp3) {
                                  str = "text-default";
                                }
                                obj1 = { variant: "text-xs/medium", color: str, children: projectId };
                                obj.children = tmp(projectId(closure_2[18]).Text, obj1);
                                return tmp(tmp2, obj, projectId);
                              }
                            }
                            cResult[29] = pick;
                            class B {
                              constructor() {
                                obj = closure_0(closure_2[14]);
                                obj1 = { id: design.id, alt: closure_5 };
                                items = [];
                                items[0] = obj1;
                                return obj.openConjureNativeImages(projectId, items, 0);
                              }
                            }
                            cResult[30] = slide;
                            cResult[31] = tmp4.slideButton;
                            cResult[32] = tmp4.slideButtonActive;
                            cResult[33] = H;
                            tmp40 = H;
                          }
                        }
                      }
                      const obj6 = { onPressIn: hold, onPress: tmp17, accessibilityRole: "imagebutton", accessibilityLabel: null, accessibilityHint: tmp20, children: cResult[16] };
                      class B {
                        constructor() {
                          obj = closure_0(closure_2[14]);
                          obj1 = { id: design.id, alt: closure_5 };
                          items = [];
                          items[0] = obj1;
                          return obj.openConjureNativeImages(projectId, items, 0);
                        }
                      }
                      cResult[17] = hold;
                      cResult[18] = tmp17;
                      cResult[19] = tmp19;
                      cResult[20] = cResult[16];
                      cResult[21] = tmp35;
                      tmp32 = tmp35;
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (null == overlayWidgetSlide) {
        const obj7 = { style: null, children: null };
        const items1 = [, ];
        ({ overlayDesign: arr2[0], overlayWidgetSlide: arr2[1] } = tmp4);
        obj7.style = items1;
        class H {
          constructor(arg0, arg1) {
            closure_0 = arg1;
            tmp = closure_1_10;
            items = [, ];
            items[0] = closure_2.slideButton;
            tmp3 = slide === arg1;
            slideButtonActive = tmp3;
            tmp2 = closure_1_6;
            if (tmp3) {
              slideButtonActive = closure_2.slideButtonActive;
            }
            obj = { style: items, onPress() { ... }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
            items[1] = slideButtonActive;
            str = "text-muted";
            if (tmp3) {
              str = "text-default";
            }
            obj1 = { variant: "text-xs/medium", color: str, children: projectId };
            obj.children = tmp(projectId(closure_2[18]).Text, obj1);
            return tmp(tmp2, obj, projectId);
          }
        }
        obj7.children = closure_10(alt, { size: "small" });
        let tmp51Result = closure_10(closure_8, obj7);
      } else if (tmp18) {
        const obj8 = { style: null, children: null };
        const items2 = [, ];
        ({ overlayDesign: arr[0], overlayWidgetSlide: arr[1] } = tmp4);
        obj8.style = items2;
        class H {
          constructor(arg0, arg1) {
            closure_0 = arg1;
            tmp = closure_1_10;
            items = [, ];
            items[0] = closure_2.slideButton;
            tmp3 = slide === arg1;
            slideButtonActive = tmp3;
            tmp2 = closure_1_6;
            if (tmp3) {
              slideButtonActive = closure_2.slideButtonActive;
            }
            obj = { style: items, onPress() { ... }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
            items[1] = slideButtonActive;
            str = "text-muted";
            if (tmp3) {
              str = "text-default";
            }
            obj1 = { variant: "text-xs/medium", color: str, children: projectId };
            obj.children = tmp(projectId(closure_2[18]).Text, obj1);
            return tmp(tmp2, obj, projectId);
          }
        }
        { uri: null }.uri = overlayWidgetSlide;
        class B {
          constructor() {
            obj = closure_0(closure_2[14]);
            obj1 = { id: design.id, alt: closure_5 };
            items = [];
            items[0] = obj1;
            return obj.openConjureNativeImages(projectId, items, 0);
          }
        }
        tmp28[1] = tmp4.overlayFullWidget;
        tmp28[3] = handleError;
        obj8.children = closure_10(design(5705), tmp28);
        tmp51Result = closure_10(closure_8, obj8);
        const obj9 = { uri: null };
      } else {
        const obj10 = { projectId, src: overlayWidgetSlide, alt: tmp13, size, onError: handleError };
        class H {
          constructor(arg0, arg1) {
            closure_0 = arg1;
            tmp = closure_1_10;
            items = [, ];
            items[0] = closure_2.slideButton;
            tmp3 = slide === arg1;
            slideButtonActive = tmp3;
            tmp2 = closure_1_6;
            if (tmp3) {
              slideButtonActive = closure_2.slideButtonActive;
            }
            obj = { style: items, onPress() { ... }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
            items[1] = slideButtonActive;
            str = "text-muted";
            if (tmp3) {
              str = "text-default";
            }
            obj1 = { variant: "text-xs/medium", color: str, children: projectId };
            obj.children = tmp(projectId(closure_2[18]).Text, obj1);
            return tmp(tmp2, obj, projectId);
          }
        }
      }
      class B {
        constructor() {
          obj = closure_0(closure_2[14]);
          obj1 = { id: design.id, alt: closure_5 };
          items = [];
          items[0] = obj1;
          return obj.openConjureNativeImages(projectId, items, 0);
        }
      }
      cResult[8] = handleError;
      cResult[9] = projectId;
      cResult[10] = size;
      cResult[11] = slide;
      cResult[12] = overlayWidgetSlide;
      cResult[13] = tmp4.overlayDesign;
      ({ overlayFullWidget: tmp3[14], overlayWidgetSlide } = tmp4);
      cResult[15] = overlayWidgetSlide;
      cResult[16] = tmp51Result;
    }
    class B {
      constructor() {
        obj = closure_0(closure_2[14]);
        obj1 = { id: design.id, alt: closure_5 };
        items = [];
        items[0] = obj1;
        return obj.openConjureNativeImages(projectId, items, 0);
      }
    }
    cResult[4] = design.id;
    cResult[5] = projectId;
    cResult[6] = B;
    tmp17 = B;
  }
  const tmpResult = projectId(12486);
}) : (function PlanOverlayDesign(projectId) {
  projectId = projectId.projectId;
  const design = projectId.design;
  c4 = undefined;
  c5 = undefined;
  const tmp = closure_13();
  dependencyMap = tmp;
  const conjureAttachmentImage = projectId(12238).useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError, gone } = conjureAttachmentImage);
  let obj = projectId(12238);
  const conjurePlanOverlaySlides = projectId(12486).useConjurePlanOverlaySlides({ ready: null != src });
  const slide = conjurePlanOverlaySlides.slide;
  ({ labels, pick: c4 } = conjurePlanOverlaySlides);
  if (gone) {
    return null;
  } else {
    const intl = tmp2(1125).intl;
    const stringResult = intl.string(design(3863).mjryK4);
    c5 = stringResult;
    const intl2 = tmp2(1125).intl;
    const stringResult1 = intl2.string(design(3863)["rPpf5/"]);
    const obj4 = { style: tmp.stack, children: null };
    const obj5 = {
      onPressIn: tmp6,
      onPress() {
          const items = [{ id: design.id, alt }];
          return openConjureNativeImages.openConjureNativeImages(projectId, items, 0);
        },
      accessibilityRole: "imagebutton",
      accessibilityLabel: null,
      accessibilityHint: null,
      children: null
    };
    let tmp15 = stringResult1;
    if (0 === slide) {
      tmp15 = stringResult;
    }
    obj5.accessibilityLabel = tmp15;
    const intl3 = tmp2(1125).intl;
    obj5.accessibilityHint = intl3.string(design(3863).TvAPIm);
    if (null == src) {
      const obj6 = { style: null, children: null };
      let items = [, ];
      ({ overlayDesign: arr2[0], overlayWidgetSlide: arr2[1] } = tmp);
      obj6.style = items;
      obj6.children = closure_10(c5, { size: "small" });
      let tmp12Result = closure_10(closure_8, obj6);
    } else if (tmp14) {
      const obj7 = { style: null, children: null };
      const items1 = [, ];
      ({ overlayDesign: arr[0], overlayWidgetSlide: arr[1] } = tmp);
      obj7.style = items1;
      const obj8 = { source: null, style: null, resizeMode: "contain", onError: null };
      const obj9 = { uri: src };
      obj8.source = obj9;
      obj8.style = tmp.overlayFullWidget;
      obj8.onError = handleError;
      obj7.children = closure_10(tmp7(5705), obj8);
      tmp12Result = closure_10(closure_8, obj7);
    } else {
      const obj10 = { projectId, src, alt: stringResult1, size: projectId.size, onError: handleError };
      tmp12Result = closure_10(closure_14, obj10);
    }
    obj5.children = tmp12Result;
    const items2 = [closure_10(closure_6, obj5), ];
    const obj11 = { style: tmp.slidePicker, accessibilityRole: "tablist", accessibilityLabel: null, children: null };
    const intl4 = tmp2(1125).intl;
    obj11.accessibilityLabel = intl4.string(design(3863).EH36X6);
    obj11.children = labels.map((children, index) => {
      closure_0 = index;
      const items = [closure_2.slideButton, ];
      let slideButtonActive = tmp3;
      if (slide === index) {
        slideButtonActive = closure_2.slideButtonActive;
      }
      const obj = {
        style: items,
        onPress() {
          return c4(closure_0);
        },
        accessibilityRole: "tab",
        accessibilityState: { selected: slide === index },
        children: null
      };
      items[1] = slideButtonActive;
      let str = "text-muted";
      if (slide === index) {
        str = "text-default";
      }
      obj.children = closure_1_10(projectId(closure_2[18]).Text, { variant: "text-xs/medium", color: str, children });
      return closure_1_10(closure_1_6, obj, children);
    });
    items2[1] = closure_10(closure_8, obj11);
    obj4.children = items2;
    return closure_11(closure_8, obj4);
  }
  const obj2 = projectId(12486);
  const obj3 = { ready: null != src };
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanReference(arg0) {
  const cResult = c.c(14);
  ({ alt, onOpen } = arg0);
  ({ projectId, id } = arg0);
  const tmp3 = closure_13();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, id);
  ({ src, handleError } = conjureAttachmentImage);
  [tmp6, require] = noop.useState(null);
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    let num2 = 64;
    if (null != tmp6) {
      const _Math = Math;
      num2 = Math.min(192, 64 * tmp6);
    }
    if (cResult[0] !== num2) {
      const obj3 = { width: num2 };
      cResult[0] = num2;
      cResult[1] = obj3;
      let tmp8 = obj3;
    } else {
      tmp8 = cResult[1];
    }
    if (cResult[2] === tmp3.reference) {
      if (cResult[3] === tmp8) {
        let tmp9 = cResult[4];
      }
      if (cResult[5] === handleError) {
        if (cResult[6] === src) {
          if (cResult[7] === tmp3.referenceImage) {
            let tmp10 = cResult[8];
          }
          if (cResult[9] === alt) {
            if (cResult[10] === onOpen) {
              if (cResult[11] === tmp9) {
                if (cResult[12] === tmp10) {
                  let tmp14 = cResult[13];
                }
                return tmp14;
              }
            }
          }
          const obj4 = { onPress: onOpen, style: tmp9, accessibilityRole: "imagebutton", accessibilityLabel: alt, children: tmp10 };
          const tmp17 = v65535(timestampProducer, obj4);
          cResult[9] = alt;
          cResult[10] = onOpen;
          cResult[11] = tmp9;
          cResult[12] = tmp10;
          cResult[13] = tmp17;
          tmp14 = tmp17;
        }
      }
      let tmp11 = null;
      if (null != src) {
        const obj5 = { source: null, style: null, resizeMode: "contain", onLoad: null, onError: null, accessible: false };
        const obj6 = { uri: src };
        obj5.source = obj6;
        obj5.style = tmp3.referenceImage;
        obj5.onLoad = function onLoad(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          let source = nativeEvent;
          if ("source" in nativeEvent) {
            source = nativeEvent.source;
          }
          if (tmp) {
            _require(source.width / source.height);
          }
          tmp = source.width > 0 && source.height > 0;
        };
        obj5.onError = handleError;
        tmp11 = v65535(FastImageDefault, obj5);
      }
      cResult[5] = handleError;
      cResult[6] = src;
      cResult[7] = tmp3.referenceImage;
      cResult[8] = tmp11;
      tmp10 = tmp11;
    }
    const items = [tmp3.reference, tmp8];
    cResult[2] = tmp3.reference;
    cResult[3] = tmp8;
    cResult[4] = items;
    tmp9 = items;
  }
  const tmp5 = _slicedToArray(noop.useState(null), 2);
}) : (function PlanReference(arg0) {
  c0 = undefined;
  ({ projectId, id, alt, onOpen } = arg0);
  let tmp = closure_13();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, id);
  const src = conjureAttachmentImage.src;
  ({ gone, handleError } = conjureAttachmentImage);
  [tmp5, c0] = noop.useState(null);
  if (gone) {
    return null;
  } else {
    let num2 = 64;
    if (null != tmp5) {
      const _Math = Math;
      num2 = Math.min(192, 64 * tmp5);
    }
    const obj2 = { onPress: onOpen, style: null, accessibilityRole: "imagebutton", accessibilityLabel: null, children: null };
    const items = [tmp.reference, ];
    const obj3 = { width: num2 };
    items[1] = obj3;
    obj2.style = items;
    obj2.accessibilityLabel = alt;
    let tmp7Result = null;
    if (null != src) {
      const obj4 = { source: null, style: null, resizeMode: "contain", onLoad: null, onError: null, accessible: false };
      const obj5 = { uri: src };
      obj4.source = obj5;
      obj4.style = tmp.referenceImage;
      obj4.onLoad = function onLoad(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        let source = nativeEvent;
        if ("source" in nativeEvent) {
          source = nativeEvent.source;
        }
        if (tmp) {
          _undefined(source.width / source.height);
        }
        tmp = source.width > 0 && source.height > 0;
      };
      obj4.onError = handleError;
      tmp7Result = v65535(FastImageDefault, obj4);
    }
    obj2.children = tmp7Result;
    return v65535(timestampProducer, obj2);
  }
  const tmp4 = _slicedToArray(noop.useState(null), 2);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanReferences(projectId) {
  let intl = projectId;
  let stringResult = dependencyMap;
  const cResult = projectId(576).c(20);
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  const tmp3 = closure_13();
  if (cResult[0] === projectId) {
    if (cResult[1] === proposal) {
      if (cResult[2] === tmp3) {
        let tmp10 = cResult[9];
      }
      const _Symbol = Symbol;
      if (tmp10 !== Symbol.for("react.early_return_sentinel")) {
        return tmp10;
      } else {
        if (cResult[11] === tmp4) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp7) {
              let tmp22 = cResult[14];
            }
            if (cResult[15] === tmp5) {
              if (cResult[16] === tmp8) {
                if (cResult[17] === tmp9) {
                }
              }
            }
            const obj2 = { style: tmp8, children: null };
            const items = [tmp9, tmp22];
            obj2.children = items;
            const tmp27 = closure_11(tmp5, obj2);
            cResult[15] = tmp5;
            cResult[16] = tmp8;
            cResult[17] = tmp9;
            cResult[18] = tmp22;
            cResult[19] = tmp27;
          }
        }
        const obj3 = { style: tmp6, children: tmp7 };
        const tmp24 = closure_10(tmp4, obj3);
        cResult[11] = tmp4;
        cResult[12] = tmp6;
        cResult[13] = tmp7;
        cResult[14] = tmp24;
        tmp22 = tmp24;
      }
    }
  }
  const obj = projectId(576);
  const forResult = Symbol.for("react.early_return_sentinel");
  const result = intl(12481).conjurePlanReferenceImages(proposal);
  importDefault = result;
  if (0 === result.length) {
    cResult[0] = projectId;
    cResult[1] = proposal;
    cResult[2] = tmp3;
    cResult[3] = undefined;
    cResult[4] = undefined;
    cResult[5] = undefined;
    cResult[6] = undefined;
    cResult[7] = undefined;
    cResult[8] = undefined;
    cResult[9] = null;
    tmp10 = null;
  } else {
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "text-xs/medium", color: "text-muted", children: null };
      intl = intl(1125).intl;
      stringResult = intl.string(_modDef3863.ubBJcy);
      obj4.children = stringResult;
      const tmp15 = closure_10(intl(5270).Text, obj4);
      cResult[10] = tmp15;
    }
    const referenceList = tmp3.referenceList;
    const mapped = result.map((alt, index) => {
      projectId = index;
      const id = alt.id;
      return closure_1_10(closure_1_17, {
        projectId,
        id,
        alt: alt.alt,
        onOpen() {
          return openConjureNativeImages.openConjureNativeImages(projectId, result, closure_0);
        }
      }, id);
    });
    const stack = tmp3.stack;
  }
  const intlResult = intl(12481);
}) : (function PlanReferences(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_13();
  const result = projectId(12481).conjurePlanReferenceImages(projectId.proposal);
  importDefault = result;
  let tmp4 = null;
  if (0 !== result.length) {
    const obj2 = { style: tmp.stack, children: null };
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = tmp2(1125).intl;
    obj3.children = intl.string(_modDef3863.ubBJcy);
    const items = [closure_10(tmp2(5270).Text, obj3), ];
    const obj4 = {
      style: tmp.referenceList,
      children: result.map((alt, index) => {
          const id = alt.id;
          projectId = index;
          return closure_1_10(closure_1_17, {
            projectId,
            id,
            alt: alt.alt,
            onOpen() {
              return openConjureNativeImages.openConjureNativeImages(projectId, c1, closure_0);
            }
          }, id);
        })
    };
    items[1] = closure_10(closure_8, obj4);
    obj2.children = items;
    tmp4 = closure_11(closure_8, obj2);
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let obj16 = { height: 64, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanProposalCard(projectId) {
  const cResult = projectId(576).c(74);
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  ({ version, superseded, expanded, onToggleExpanded, onApprove } = projectId);
  let obj = projectId(576);
  dependencyMap = closure_13();
  if (cResult[0] !== proposal.summary) {
    const trimmed = proposal.summary.trim();
    cResult[0] = proposal.summary;
    cResult[1] = trimmed;
    let tmp5 = trimmed;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== proposal.what_changed) {
    let str3;
    if (proposal.what_changed != null) {
      str3 = str2.trim();
    }
    if (str3 == null) {
      str3 = "";
    }
    cResult[2] = proposal.what_changed;
    cResult[3] = str3;
  }
  if (cResult[4] !== tmp5) {
    const parsed = proposal(5741).parse(tmp5, true, tmp(12287).CONJURE_MARKUP_OPTIONS);
    cResult[4] = tmp5;
    cResult[5] = parsed;
    let obj2 = proposal(5741);
  }
  const tmp4 = closure_13();
  const conjurePlanSlashCommandNames = projectId(12487).useConjurePlanSlashCommandNames(proposal.commands);
  const tmpResult = projectId(12487);
  const conjurePlanWidget = projectId(12489).useConjurePlanWidget(projectId, proposal);
  const tmpResult6 = projectId(12489);
  const botExchanges = projectId(12492).useConjurePlanBotExchanges(proposal).botExchanges;
  const tmpResult7 = projectId(12492);
  const conjurePlanCommandExchanges = projectId(12492).useConjurePlanCommandExchanges(proposal);
  if (cResult[6] !== proposal) {
    const result = tmp(12479).conjurePlanDesignPreviews(proposal);
    cResult[6] = proposal;
    cResult[7] = result;
    let tmp15 = result;
    const tmpResult9 = tmp(12479);
  } else {
    tmp15 = cResult[7];
  }
  let ui = tmp15;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore];
    cResult[8] = items;
    let tmp17 = items;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] !== projectId) {
    class M {
      constructor() {
        project = closure_9.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
    let items1 = [projectId];
    cResult[9] = projectId;
    cResult[10] = M;
    cResult[11] = items1;
    let tmp20 = items1;
  } else {
    class M {
      constructor() {
        project = closure_9.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
    tmp20 = cResult[11];
  }
  const tmpResult8 = projectId(12492);
  const stateFromStores = projectId(504).useStateFromStores(tmp17, M, tmp20);
  if (cResult[12] === botExchanges) {
    class M {
      constructor() {
        project = closure_9.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor(arg0) {
        kind = projectId.kind;
        tmp = "bot" === kind;
        if (!tmp) {
          str = "commands";
          tmp = "commands" === kind;
        }
        return tmp;
      }
    }
    cResult[16] = U;
  } else {
    class U {
      constructor(arg0) {
        kind = projectId.kind;
        tmp = "bot" === kind;
        if (!tmp) {
          str = "commands";
          tmp = "commands" === kind;
        }
        return tmp;
      }
    }
  }
  if (cResult[17] === botExchanges) {
    class U {
      constructor(arg0) {
        kind = projectId.kind;
        tmp = "bot" === kind;
        if (!tmp) {
          str = "commands";
          tmp = "commands" === kind;
        }
        return tmp;
      }
    }
    const experiences = proposal.experiences;
    if (experiences == null) {
      class U {
        constructor(arg0) {
          kind = projectId.kind;
          tmp = "bot" === kind;
          if (!tmp) {
            str = "commands";
            tmp = "commands" === kind;
          }
          return tmp;
        }
      }
    }
    const found = experiences.filter(U);
    const map = new Map(found.map(X));
    cResult[12] = botExchanges;
    cResult[13] = conjurePlanCommandExchanges;
    cResult[14] = proposal.experiences;
    cResult[15] = map;
  }
  class X {
    constructor(arg0) {
      items = [, ];
      items[0] = projectId.id;
      obj = closure_0(closure_2[26]);
      items[1] = obj.getConjurePlanSectionBotExchanges(projectId, botExchanges, closure_5);
      return items;
    }
  }
  cResult[17] = botExchanges;
  cResult[18] = conjurePlanCommandExchanges;
  cResult[19] = X;
  const tmpResult10 = projectId(504);
}) : (function ConjurePlanProposalCard(projectId) {
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  ({ version, superseded } = projectId);
  if (superseded === undefined) {
    superseded = false;
  }
  let flag = projectId.expanded;
  if (flag === undefined) {
    flag = true;
  }
  const onApprove = projectId.onApprove;
  noop = undefined;
  let botExchanges;
  let conjurePlanCommandExchanges;
  let ui;
  closure_8 = undefined;
  let tmp = closure_13();
  dependencyMap = tmp;
  const trimmed = proposal.summary.trim();
  let str3;
  if (proposal.what_changed != null) {
    str3 = str2.trim();
  }
  if (str3 == null) {
    str3 = "";
  }
  let items = [trimmed];
  const memo = noop.useMemo(() => MarkupUtilsDefault.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS), items);
  const conjurePlanSlashCommandNames = projectId(12487).useConjurePlanSlashCommandNames(proposal.commands);
  let obj = projectId(12487);
  noop = projectId(12489).useConjurePlanWidget(projectId, proposal);
  let obj2 = projectId(12489);
  botExchanges = projectId(12492).useConjurePlanBotExchanges(proposal).botExchanges;
  let obj3 = projectId(12492);
  conjurePlanCommandExchanges = projectId(12492).useConjurePlanCommandExchanges(proposal);
  let obj4 = projectId(12492);
  ui = projectId(12479).conjurePlanDesignPreviews(proposal);
  let obj5 = projectId(12479);
  let items1 = [ConjureProjectStore];
  const items2 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items1, () => {
    const project = ConjureProjectStore.getProject(projectId);
    let name;
    if (project != null) {
      name = project.name;
    }
    return name;
  }, items2);
  const items3 = [proposal.experiences, botExchanges, conjurePlanCommandExchanges];
  closure_8 = noop.useMemo(() => {
    let experiences = proposal.experiences;
    if (experiences == null) {
      experiences = [];
    }
    const found = experiences.filter((kind) => {
      kind = kind.kind;
      let tmp = "bot" === kind;
      if (!tmp) {
        tmp = "commands" === kind;
      }
      return tmp;
    });
    return new Map(found.map((id) => {
      const items = [id.id, projectId(closure_2[26]).getConjurePlanSectionBotExchanges(id, botExchanges, conjurePlanCommandExchanges)];
      return items;
    }));
  }, items3);
  let obj7 = { style: tmp.surface, children: null };
  const obj8 = { style: tmp.content, children: null };
  let obj6 = projectId(504);
  if (superseded) {
    if (null != version) {
      const intl2 = tmp4(1125).intl;
      const obj9 = { version };
      let formatToPlainStringResult = intl2.formatToPlainString(tmp10(3863).YZ3qJs, obj9);
    }
    const obj10 = { title: formatToPlainStringResult, meta: null, superseded: null, expanded: null, onToggleExpanded: null, showLabel: null, hideLabel: null, children: null };
    let tmp12Result = null;
    if (superseded) {
      const obj11 = { children: null };
      const intl3 = tmp4(1125).intl;
      obj11.children = intl3.string(tmp10(3863).hF2c41);
      tmp12Result = closure_10(tmp4(12477).ConjureNativeCollapsibleMeta, obj11);
    }
    obj10.meta = tmp12Result;
    obj10.superseded = superseded;
    obj10.expanded = flag;
    obj10.onToggleExpanded = projectId.onToggleExpanded;
    const intl4 = tmp4(1125).intl;
    obj10.showLabel = intl4.string(tmp10(3863).yD8EJS);
    const intl5 = tmp4(1125).intl;
    obj10.hideLabel = intl5.string(tmp10(3863).nSPGNb);
    let str4 = stateFromStores;
    if (stateFromStores == null) {
      let experiences = proposal.experiences;
      let name;
      if (experiences != null) {
        const first = experiences[0];
        if (first != null) {
          name = first.name;
        }
      }
      str4 = name;
    }
    if (str4 == null) {
      str4 = "";
    }
    const obj12 = { appName: str4, intro: null, proposal: null, renderPreview: null, commandNames: null };
    let tmp12Result2 = null;
    if ("" !== trimmed) {
      const obj13 = { variant: "text-md/normal", color: "text-default", children: null };
      const obj14 = { markup: memo, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      obj13.children = closure_10(tmp4(12501).ConjurePlanCommandMarkup, obj14);
      tmp12Result2 = closure_10(tmp4(5270).Text, obj13);
    }
    const items4 = [tmp12Result2, , ];
    const obj15 = { projectId, proposal };
    items4[1] = closure_10(closure_18, obj15);
    let tmp9Result = null;
    if ("" !== str3) {
      const obj16 = { style: tmp.whatChanged, children: null };
      const obj17 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl8 = tmp4(1125).intl;
      obj17.children = intl8.string(tmp10(3863).iNS4dl);
      const items5 = [closure_10(tmp4(5270).Text, obj17), ];
      const obj18 = { variant: "text-md/normal", color: "text-default", children: null };
      const obj19 = { text: str3, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      obj18.children = closure_10(tmp4(12501).ConjurePlanCommandText, obj19);
      items5[1] = closure_10(tmp4(5270).Text, obj18);
      obj16.children = items5;
      tmp9Result = closure_11(tmp13, obj16);
    }
    const obj20 = { children: null };
    items4[2] = tmp9Result;
    obj20.children = items4;
    obj12.intro = closure_11(closure_12, obj20);
    obj12.proposal = proposal;
    obj12.renderPreview = function renderPreview(kind) {
      kind = kind.kind;
      if ("frame" !== kind) {
        if ("overlay_widget" !== kind) {
          if ("user_widget" === kind) {
            let tmp15 = null;
            if (null != closure_4) {
              const obj2 = {};
              const merged = Object.assign(closure_4);
              tmp15 = v65535(ConjurePlanWidgetDefault, obj2);
            }
            return tmp15;
          } else if ("automod" === kind) {
            let tmp10 = null;
            if (null != proposal.automod) {
              tmp10 = null;
              if (proposal.automod.examples.length > 0) {
                const obj3 = { automod: proposal.automod };
                tmp10 = v65535(ConjurePlanAutomodExamplesDefault, obj3);
              }
            }
            return tmp10;
          } else {
            let items1 = closure_8.get(kind.id);
            if (items1 == null) {
              items1 = [];
            }
            let tmp3 = null;
            if (items1.length > 0) {
              const obj = { projectId, exchanges: items1 };
              tmp3 = v65535(ConjurePlanBotPreviewDefault, obj);
            }
            return tmp3;
          }
        }
      }
      ui = ui.ui;
      let experienceId;
      if (ui != null) {
        experienceId = ui.experienceId;
      }
      let tmp25 = null;
      if (kind.id === experienceId) {
        const obj4 = { projectId, design: tmp23.ui.design, alt: null };
        const intl = util.intl;
        obj4.alt = intl.string(conjurePlanDesign.conjurePlanDesignAlt(proposal));
        tmp25 = v65535(closure_15, obj4);
      }
      const overlay = tmp23.overlay;
      let experienceId1;
      if (overlay != null) {
        experienceId1 = overlay.experienceId;
      }
      let tmp34 = null;
      if (kind.id === experienceId1) {
        const obj6 = { projectId, design: tmp23.overlay.design, size: tmp23.overlay.size };
        tmp34 = v65535(closure_16, obj6);
      }
      if (null != tmp25) {
        const obj7 = { style: stack.stack, children: null };
        const items = [tmp25, tmp34];
        obj7.children = items;
        let tmp38 = closure_2_11(closure_2_8, obj7);
      } else {
        tmp38 = null;
      }
      return tmp38;
    };
    obj12.commandNames = conjurePlanSlashCommandNames;
    obj10.children = closure_10(tmp10(12502), obj12);
    obj8.children = closure_10(tmp14, obj10);
    const items6 = [closure_10(tmp13, obj8), ];
    let tmp9Result2 = null;
    if (null != onApprove) {
      tmp9Result2 = null;
      if (!superseded) {
        const obj21 = { style: tmp.footer, children: null };
        const obj22 = { text: null, variant: "primary", size: "sm", onPress: null };
        const intl6 = tmp4(1125).intl;
        obj22.text = intl6.string(tmp10(3863)["6S+wRM"]);
        obj22.onPress = onApprove;
        const items7 = [closure_10(tmp4(5280).Button, obj22), ];
        const obj23 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.replyHint, children: null };
        const intl7 = tmp4(1125).intl;
        obj23.children = intl7.string(tmp10(3863).IZoqbR);
        items7[1] = closure_10(tmp4(5270).Text, obj23);
        obj21.children = items7;
        tmp9Result2 = closure_11(tmp13, obj21);
      }
    }
    items6[1] = tmp9Result2;
    obj7.children = items6;
    return closure_11(tmp11, obj7);
  }
  let intl = tmp4(1125).intl;
  formatToPlainStringResult = intl.string(tmp10(3863)["3b6e7o"]);
  tmp11 = proposal(12226);
});