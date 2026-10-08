// === Module 17016: clarification/ConjureImageOptions ===

// Module 17016 (clarification/ConjureImageOptions)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4792 */;
import TrashIcon from "TrashIcon" /* 5047 */;
import Text_Text from "Text/Text" /* 5086 */;
import FastImageDefault from "FastImage" /* 6164 */;
import FormCheckbox from "FormCheckbox" /* 6182 */;
import Card from "Card" /* 6186 */;
import FormRadio from "FormRadio" /* 6268 */;
import IconButton from "IconButton" /* 8106 */;
import ImageWarningIcon from "ImageWarningIcon" /* 8184 */;
import openMediaModal from "openMediaModal" /* 8362 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 16941 */;
import ConjureImageOptions from "ConjureImageOptions" /* 17013 */;
import MaximizeIcon2 from "MaximizeIcon" /* 17017 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const getAttachmentUrl = fn(13072).getAttachmentUrl;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let c11 = 1024;
let c12 = 104;
const createStyles = fn(5090);
let obj2 = { row: { flexDirection: "row", gap: nativeDefault.space.PX_8 }, own: null, galleryContent: null, rowTile: null, card: null, ring: null, ringSelected: null, frame: null, frameInert: null, image: null, broken: null, brokenText: null, indicator: null, caption: null, view: null };
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.own = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
let obj4 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
obj2.galleryContent = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.rowTile = { flex: 1, minWidth: 0 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.card = { padding: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
let obj6 = { padding: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
obj2.ring = { borderWidth: 2, borderColor: "transparent", borderRadius: nativeDefault.radii.lg };
let obj7 = { borderWidth: 2, borderColor: "transparent", borderRadius: nativeDefault.radii.lg };
obj2.ringSelected = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
let obj8 = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj2.frame = { width: "100%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center", overflow: "hidden" };
obj2.frameInert = { opacity: 0.5 };
obj2.image = { width: "100%", height: "100%" };
let obj9 = { width: "100%", aspectRatio: 1, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center", overflow: "hidden" };
obj2.broken = { gap: nativeDefault.space.PX_4, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4 };
obj2.brokenText = { textAlign: "center" };
let obj10 = { gap: nativeDefault.space.PX_4, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4 };
obj2.indicator = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4, padding: 2, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
let obj11 = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4, padding: 2, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
obj2.caption = { paddingHorizontal: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_4 };
let obj12 = { paddingHorizontal: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_4 };
obj2.view = { position: "absolute", end: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImageOptionPicture(onMeasured) {
  const cResult = c.c(21);
  onMeasured = onMeasured.onMeasured;
  ({ projectId, attachmentId, inert } = onMeasured);
  const tmp4 = closure_13();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, attachmentId);
  ({ src, handleError } = conjureAttachmentImage);
  let frameInert = null;
  if (inert) {
    frameInert = tmp4.frameInert;
  }
  if (cResult[0] === tmp4.frame) {
    if (cResult[1] === frameInert) {
      let tmp7 = cResult[2];
    }
    if (conjureAttachmentImage.gone) {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
        const tmp20 = options(ImageWarningIcon.ImageWarningIcon, obj3);
        cResult[3] = tmp20;
        let tmp17 = tmp20;
      } else {
        tmp17 = cResult[3];
      }
      const _Symbol2 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3827.lhgD88);
        cResult[4] = stringResult;
        let tmp21 = stringResult;
      } else {
        tmp21 = cResult[4];
      }
      if (cResult[5] !== tmp4.brokenText) {
        const obj4 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.brokenText, children: tmp21 };
        const tmp26 = options(Text_Text.Text, obj4);
        cResult[5] = tmp4.brokenText;
        cResult[6] = tmp26;
        let tmp24 = tmp26;
      } else {
        tmp24 = cResult[6];
      }
      if (cResult[7] === tmp4.broken) {
        if (cResult[8] === tmp24) {
          let tmp27 = cResult[9];
        }
        if (cResult[10] === tmp7) {
          if (cResult[11] === tmp27) {
            let tmp31 = cResult[12];
          }
          return tmp31;
        }
        const obj5 = { style: tmp7, children: tmp27 };
        const tmp34 = options(React5, obj5);
        cResult[10] = tmp7;
        cResult[11] = tmp27;
        cResult[12] = tmp34;
        tmp31 = tmp34;
      }
      const obj6 = { style: tmp4.broken, children: null };
      const items = [tmp17, tmp24];
      obj6.children = items;
      const tmp30 = collapsed(React5, obj6);
      cResult[7] = tmp4.broken;
      cResult[8] = tmp24;
      cResult[9] = tmp30;
      tmp27 = tmp30;
    } else {
      if (cResult[13] === handleError) {
        if (cResult[14] === onMeasured) {
          if (cResult[15] === src) {
            if (cResult[16] === tmp4.image) {
              let tmp8 = cResult[17];
            }
            if (cResult[18] === tmp7) {
              if (cResult[19] === tmp8) {
                let tmp12 = cResult[20];
              }
              return tmp12;
            }
            const obj7 = { style: tmp7, children: tmp8 };
            const tmp15 = options(React5, obj7);
            cResult[18] = tmp7;
            cResult[19] = tmp8;
            cResult[20] = tmp15;
            tmp12 = tmp15;
          }
        }
      }
      let tmp9 = null;
      if (null != src) {
        const obj8 = { source: null, style: null, resizeMode: "contain", onLoad: null, onError: null, accessible: false };
        const obj9 = { uri: src };
        obj8.source = obj9;
        obj8.style = tmp4.image;
        obj8.onLoad = function onLoad(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          let source = nativeEvent;
          if ("source" in nativeEvent) {
            source = nativeEvent.source;
          }
          ({ width, height } = source);
          if (tmp) {
            const size = { width, height };
            onMeasured(size);
          }
          tmp = width > 0 && height > 0;
        };
        obj8.onError = handleError;
        tmp9 = options(FastImageDefault, obj8);
      }
      cResult[13] = handleError;
      cResult[14] = onMeasured;
      cResult[15] = src;
      cResult[16] = tmp4.image;
      cResult[17] = tmp9;
      tmp8 = tmp9;
    }
  }
  const items1 = [tmp4.frame, frameInert];
  cResult[0] = tmp4.frame;
  cResult[1] = frameInert;
  cResult[2] = items1;
  tmp7 = items1;
}) : (function ImageOptionPicture(onMeasured) {
  onMeasured = onMeasured.onMeasured;
  ({ projectId, attachmentId, inert } = onMeasured);
  let tmp = closure_13();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, attachmentId);
  const src = conjureAttachmentImage.src;
  const items = [tmp.frame, ];
  let frameInert = null;
  ({ gone, handleError } = conjureAttachmentImage);
  if (inert) {
    frameInert = tmp.frameInert;
  }
  items[1] = frameInert;
  const obj2 = { style: items, children: null };
  if (gone) {
    const obj3 = { style: tmp.broken, children: null };
    const obj4 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
    const items1 = [options(ImageWarningIcon.ImageWarningIcon, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.brokenText, children: null };
    const intl = util.intl;
    obj5.children = intl.string(_modDef3827.lhgD88);
    items1[1] = options(Text_Text.Text, obj5);
    obj3.children = items1;
    obj2.children = collapsed(React5, obj3);
    let tmp10 = obj2;
  } else {
    let tmp6Result = null;
    if (null != src) {
      const obj6 = { source: null, style: null, resizeMode: "contain", onLoad: null, onError: null, accessible: false };
      const obj7 = { uri: src };
      obj6.source = obj7;
      obj6.style = tmp.image;
      obj6.onLoad = function onLoad(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        let source = nativeEvent;
        if ("source" in nativeEvent) {
          source = nativeEvent.source;
        }
        ({ width, height } = source);
        if (tmp) {
          const size = { width, height };
          onMeasured(size);
        }
        tmp = width > 0 && height > 0;
      };
      obj6.onError = handleError;
      tmp6Result = options(FastImageDefault, obj6);
    }
    obj2.children = tmp6Result;
    tmp10 = obj2;
  }
  return options(React5, tmp10);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImageOptionTile(onView) {
  const cResult = c.c(68);
  ({ projectId, option } = onView);
  ({ multi, galleryWidth, selected, disabled, frameHeight, onFrameHeight } = onView);
  ({ onMeasured, onPick } = onView);
  onView = onView.onView;
  const onRemove = onView.onRemove;
  const tmp4 = closure_13();
  if (cResult[0] === disabled) {
    useA11yRolesNative;
    if (cResult[3] === disabled) {
      if (cResult[4] === selected) {
        let tmp8 = cResult[5];
      }
      let radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp8);
      if (multi) {
        radioA11yNative = tmp7;
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3827["4/eeDD"]);
        cResult[6] = stringResult;
        let tmp11 = stringResult;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === galleryWidth) {
        if (cResult[8] === tmp4.rowTile) {
          let ringSelected = null;
          if (selected) {
            ringSelected = tmp4.ringSelected;
          }
          if (cResult[10] === tmp4.ring) {
            if (cResult[11] === tmp14) {
              if (cResult[14] === disabled) {
                if (cResult[15] === onPick) {
                  ({ accessibilityRole, accessibilityState } = radioA11yNative);
                  if (cResult[18] !== option.label) {
                    const intl2 = util.intl;
                    const obj2 = { answer: option.label };
                    const formatToPlainStringResult = intl2.formatToPlainString(_modDef3827.AQbxhf, obj2);
                    cResult[18] = option.label;
                    cResult[19] = formatToPlainStringResult;
                  }
                  if (cResult[20] === onRemove) {
                    if (cResult[21] === option.image) {
                      if (cResult[23] === onRemove) {
                        if (cResult[24] === onView) {
                          if (cResult[27] !== onFrameHeight) {
                            class V {
                              constructor(arg0) {
                                return onFrameHeight(onView.nativeEvent.layout.height);
                              }
                            }
                            class N {
                              constructor(arg0) {
                                nativeEvent = onView.nativeEvent;
                                if ("view" === nativeEvent.actionName) {
                                  tmp = onView;
                                  tmp2 = option;
                                  tmp3 = onView(option);
                                }
                                if ("remove" === nativeEvent.actionName) {
                                  tmp5 = null;
                                  if (onRemove != null) {
                                    tmp4Result = tmp4();
                                  }
                                }
                                return;
                              }
                            }
                            cResult[28] = V;
                          } else {
                            class V {
                              constructor(arg0) {
                                return onFrameHeight(onView.nativeEvent.layout.height);
                              }
                            }
                          }
                          class N {
                            constructor(arg0) {
                              nativeEvent = onView.nativeEvent;
                              if ("view" === nativeEvent.actionName) {
                                tmp = onView;
                                tmp2 = option;
                                tmp3 = onView(option);
                              }
                              if ("remove" === nativeEvent.actionName) {
                                tmp5 = null;
                                if (onRemove != null) {
                                  tmp4Result = tmp4();
                                }
                              }
                              return;
                            }
                          }
                          if (null != option.image) {
                            class V {
                              constructor(arg0) {
                                return onFrameHeight(onView.nativeEvent.layout.height);
                              }
                            }
                            class N {
                              constructor(arg0) {
                                nativeEvent = onView.nativeEvent;
                                if ("view" === nativeEvent.actionName) {
                                  tmp = onView;
                                  tmp2 = option;
                                  tmp3 = onView(option);
                                }
                                if ("remove" === nativeEvent.actionName) {
                                  tmp5 = null;
                                  if (onRemove != null) {
                                    tmp4Result = tmp4();
                                  }
                                }
                                return;
                              }
                            }
                            tmp39[0] = projectId;
                            tmp39[1] = option.image.attachment_id;
                            tmp39[2] = disabled;
                            tmp39[3] = onMeasured;
                            let tmp37 = options(closure_14, tmp39);
                          } else {
                            class V {
                              constructor(arg0) {
                                return onFrameHeight(onView.nativeEvent.layout.height);
                              }
                            }
                            class N {
                              constructor(arg0) {
                                nativeEvent = onView.nativeEvent;
                                if ("view" === nativeEvent.actionName) {
                                  tmp = onView;
                                  tmp2 = option;
                                  tmp3 = onView(option);
                                }
                                if ("remove" === nativeEvent.actionName) {
                                  tmp5 = null;
                                  if (onRemove != null) {
                                    tmp4Result = tmp4();
                                  }
                                }
                                return;
                              }
                            }
                            tmp36[0] = tmp4.frame;
                            tmp37 = options(React5, tmp36);
                          }
                          cResult[29] = disabled;
                          cResult[30] = onMeasured;
                          onMeasured = option.image;
                          cResult[31] = onMeasured;
                          cResult[32] = projectId;
                          projectId = tmp4.frame;
                          cResult[33] = projectId;
                          cResult[34] = tmp37;
                        }
                      }
                      class N {
                        constructor(arg0) {
                          nativeEvent = onView.nativeEvent;
                          if ("view" === nativeEvent.actionName) {
                            tmp = onView;
                            tmp2 = option;
                            tmp3 = onView(option);
                          }
                          if ("remove" === nativeEvent.actionName) {
                            tmp5 = null;
                            if (onRemove != null) {
                              tmp4Result = tmp4();
                            }
                          }
                          return;
                        }
                      }
                      cResult[23] = onRemove;
                      cResult[24] = onView;
                      cResult[25] = option;
                      cResult[26] = N;
                    }
                  }
                  if (null != onRemove) {
                    class V {
                      constructor(arg0) {
                        return onFrameHeight(onView.nativeEvent.layout.height);
                      }
                    }
                    const intl3 = util.intl;
                    class N {
                      constructor(arg0) {
                        nativeEvent = onView.nativeEvent;
                        if ("view" === nativeEvent.actionName) {
                          tmp = onView;
                          tmp2 = option;
                          tmp3 = onView(option);
                        }
                        if ("remove" === nativeEvent.actionName) {
                          tmp5 = null;
                          if (onRemove != null) {
                            tmp4Result = tmp4();
                          }
                        }
                        return;
                      }
                    }
                    tmp31[1] = intl3.string(_modDef3827.HQEXJM);
                    const items = [tmp31];
                    let tmp28 = items;
                  } else {
                    class V {
                      constructor(arg0) {
                        return onFrameHeight(onView.nativeEvent.layout.height);
                      }
                    }
                    if (null != option.image) {
                      class V {
                        constructor(arg0) {
                          return onFrameHeight(onView.nativeEvent.layout.height);
                        }
                      }
                      tmp29[1] = tmp11;
                      class N {
                        constructor(arg0) {
                          nativeEvent = onView.nativeEvent;
                          if ("view" === nativeEvent.actionName) {
                            tmp = onView;
                            tmp2 = option;
                            tmp3 = onView(option);
                          }
                          if ("remove" === nativeEvent.actionName) {
                            tmp5 = null;
                            if (onRemove != null) {
                              tmp4Result = tmp4();
                            }
                          }
                          return;
                        }
                      }
                      tmp30[0] = tmp29;
                      tmp28 = tmp30;
                    }
                  }
                  cResult[20] = onRemove;
                  cResult[21] = option.image;
                  cResult[22] = tmp28;
                }
              }
              if (!disabled) {
                class V {
                  constructor(arg0) {
                    return onFrameHeight(onView.nativeEvent.layout.height);
                  }
                }
              }
              cResult[14] = disabled;
              cResult[15] = onPick;
              cResult[16] = option;
              cResult[17] = tmp23;
            }
          }
          const items1 = [cResult[9], tmp4.ring, ringSelected];
          cResult[10] = tmp4.ring;
          cResult[11] = cResult[9];
          cResult[12] = ringSelected;
          cResult[13] = items1;
        }
      }
      if (null != galleryWidth) {
        class V {
          constructor(arg0) {
            return onFrameHeight(onView.nativeEvent.layout.height);
          }
        }
        tmp17[0] = galleryWidth;
        class N {
          constructor(arg0) {
            nativeEvent = onView.nativeEvent;
            if ("view" === nativeEvent.actionName) {
              tmp = onView;
              tmp2 = option;
              tmp3 = onView(option);
            }
            if ("remove" === nativeEvent.actionName) {
              tmp5 = null;
              if (onRemove != null) {
                tmp4Result = tmp4();
              }
            }
            return;
          }
        }
      } else {
        class V {
          constructor(arg0) {
            return onFrameHeight(onView.nativeEvent.layout.height);
          }
        }
      }
      cResult[7] = galleryWidth;
      galleryWidth = tmp4.rowTile;
      cResult[8] = galleryWidth;
      cResult[9] = tmp16;
      const tmpResult2 = useA11yRolesNative;
    }
    const obj3 = { selected, disabled };
    cResult[3] = disabled;
    cResult[4] = selected;
    cResult[5] = obj3;
    tmp8 = obj3;
  }
  cResult[0] = disabled;
  cResult[1] = selected;
  cResult[2] = { checked: selected, disabled };
  const obj4 = { checked: selected, disabled };
}) : (function ImageOptionTile(option) {
  option = option.option;
  ({ multi, galleryWidth, selected, disabled, frameHeight, onFrameHeight: importDefault, onPick: dependencyMap, onView: asyncGeneratorStep, onRemove } = option);
  ({ projectId, onMeasured } = option);
  const tmp = closure_13();
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked: selected, disabled });
  let radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected, disabled });
  if (multi) {
    radioA11yNative = checkboxA11yNative;
  }
  const intl = util.intl;
  if (null != galleryWidth) {
    const obj3 = { width: galleryWidth };
    let rowTile = obj3;
  } else {
    rowTile = tmp.rowTile;
  }
  const items = [rowTile, tmp.ring, ];
  let ringSelected = null;
  if (selected) {
    ringSelected = tmp.ringSelected;
  }
  const obj4 = { style: items, children: null };
  items[2] = ringSelected;
  const obj6 = { style: tmp.card, onPress: null, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, children: null };
  let fn;
  if (!disabled) {
    fn = () => dependencyMap(option);
  }
  obj6.onPress = fn;
  ({ accessibilityRole: obj5.accessibilityRole, accessibilityState: obj5.accessibilityState } = radioA11yNative);
  const intl2 = util.intl;
  obj6.accessibilityLabel = intl2.formatToPlainString(_modDef3827.AQbxhf, { answer: option.label });
  if (null != onRemove) {
    const obj8 = { name: "remove", label: null };
    const intl3 = util.intl;
    obj8.label = intl3.string(_modDef3827.HQEXJM);
    const items1 = [obj8];
    let tmp11 = items1;
  } else if (null != option.image) {
    const obj9 = { name: "view", label: stringResult };
    const items2 = [obj9];
    tmp11 = items2;
  }
  obj6.accessibilityActions = tmp11;
  obj6.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    if ("view" === nativeEvent.actionName) {
      asyncGeneratorStep(option);
    }
    if ("remove" === nativeEvent.actionName) {
      if (onRemove != null) {
        tmp4();
      }
    }
  };
  const obj10 = {
    onLayout(nativeEvent) {
      return importDefault(nativeEvent.nativeEvent.layout.height);
    },
    children: null
  };
  if (null != option.image) {
    const obj11 = { projectId, attachmentId: option.image.attachment_id, inert: disabled, onMeasured };
    let tmp13 = options(closure_14, obj11);
    let tmp12 = options;
  } else {
    tmp12 = options;
    const obj12 = { style: tmp.frame };
    tmp13 = options(React5, obj12);
  }
  const items3 = [tmp13, ];
  if (!multi) {
    if (!selected) {
      items3[1] = null;
      obj10.children = items3;
      const items4 = [collapsed(React5, obj10), ];
      const obj13 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, style: tmp.caption, children: ConjureImageOptions.imageOptionCaption(option) };
      items4[1] = tmp12(Text_Text.Text, obj13);
      obj6.children = items4;
      const items5 = [collapsed(Card.Card, obj6), ];
      let tmp12Result = null;
      if (null != option.image) {
        tmp12Result = null;
        if (null != frameHeight) {
          const obj14 = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
          const items6 = [tmp.view, ];
          const obj15 = { top: frameHeight - nativeDefault.space.PX_32 };
          items6[1] = obj15;
          obj14.style = items6;
          if (null != onRemove) {
            let MaximizeIcon = TrashIcon.TrashIcon;
          } else {
            MaximizeIcon = MaximizeIcon2.MaximizeIcon;
          }
          const obj16 = { icon: tmp12(MaximizeIcon, { size: "xs" }), size: "sm", variant: "secondary-overlay", onPress: null, accessibilityLabel: null };
          if (null == onRemove) {
            onRemove = () => asyncGeneratorStep(option);
          }
          obj16.onPress = onRemove;
          const intl4 = util.intl;
          const obj17 = { answer: option.label };
          obj16.accessibilityLabel = intl4.formatToPlainString(_modDef3827.JGjZMs, obj17);
          obj14.children = tmp12(IconButton.IconButton, obj16);
          tmp12Result = tmp12(React5, obj14);
        }
      }
      items5[1] = tmp12Result;
      obj4.children = items5;
      return collapsed(React5, obj4);
    }
  }
  const obj18 = { style: tmp.indicator, children: null };
  if (multi) {
    const obj19 = { checked: selected };
    let tmp12Result3 = tmp12(FormCheckbox.FormCheckbox, obj19);
  } else {
    const obj20 = { selected };
    tmp12Result3 = tmp12(FormRadio.FormRadio, obj20);
  }
  obj18.children = tmp12Result3;
  tmp12(React5, obj18);
  const obj7 = { answer: option.label };
  stringResult = intl.string(_modDef3827["4/eeDD"]);
});
ReactCompilerGating = fn(558);
let obj13 = { position: "absolute", end: nativeDefault.space.PX_8 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureImageOptions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureImageOptions(projectId) {
  const cResult = require("c").c(57);
  projectId = projectId.projectId;
  _require = projectId;
  ({ question, selectedIds } = projectId);
  disabled = projectId.disabled;
  const onPick = projectId.onPick;
  const own = projectId.own;
  const tmp4 = closure_13();
  noop = tmp5;
  options = question.options;
  if (cResult[0] !== options) {
    const imageOptionsLayoutResult = tmp(tmp2[19]).imageOptionsLayout(options);
    cResult[0] = options;
    cResult[1] = imageOptionsLayoutResult;
    const tmpResult = tmp(tmp2[19]);
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const _Map = Map;
    const map = new Map();
    cResult[2] = map;
    let tmp8 = map;
  } else {
    tmp8 = cResult[2];
  }
  closure_7 = noop.useRef(tmp8);
  const tmp13 = own(noop.useState(null), 2);
  const frameHeight = tmp13[0];
  const onFrameHeight = tmp15;
  let obj = require("c");
  const obj3 = noop;
  [num4, closure_10] = own(noop.useState(null), 2);
  let galleryContent = noop.useRef(null);
  const image = own.image;
  let id;
  if (image != null) {
    id = image.attachment.id;
  }
  if (cResult[3] !== id) {
    const fn = function j() {
      if (null != id) {
        const current = galleryContent.current;
        if (current != null) {
          current.scrollToEnd({ animated: true });
        }
      }
    };
    const items = [id];
    cResult[3] = id;
    cResult[4] = fn;
    cResult[5] = items;
    let tmp19 = items;
    let tmp18 = fn;
  } else {
    tmp18 = cResult[4];
    tmp19 = cResult[5];
  }
  const effect = obj3.useEffect(tmp18, tmp19);
  let num8 = 0;
  if (null != own.image) {
    num8 = 1;
  }
  const sum = options.length + num8;
  let tmp22 = null != num4;
  if (tmp22) {
    tmp22 = (num4 - selectedIds(tmp2[7]).space.PX_8 * (sum - 1)) / sum < id;
  }
  closure_13 = tmp25;
  const bound = Math.max(id, Math.min(136, (num4 - 2 * selectedIds(tmp2[7]).space.PX_8) / 2.4));
  if (cResult[6] === options) {
    if (cResult[7] === projectId) {
      let tmp28 = cResult[8];
    }
    const onView = tmp28;
    if (cResult[9] === disabled) {
      if (cResult[10] === frameHeight) {
        if (cResult[11] === bound) {
          if (cResult[12] === tmp5) {
            if (cResult[13] === onPick) {
              if (cResult[14] === options) {
                if (cResult[15] === own.image) {
                  if (cResult[16] === own.onPick) {
                    if (cResult[17] === own.onRemove) {
                      if (cResult[18] === own.selected) {
                        if (cResult[19] === projectId) {
                          if (cResult[20] === tmp25) {
                            if (cResult[21] === selectedIds) {
                              if (cResult[22] === tmp28) {
                                let tmp29 = cResult[23];
                              }
                              if (cResult[38] === own) {
                                if (cResult[39] === projectId) {
                                  let tmp38 = cResult[40];
                                }
                                closure_16 = tmp38;
                                const _Symbol3 = Symbol;
                                if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                                  function oe(nativeEvent) {
                                    return closure_1_10(nativeEvent.nativeEvent.layout.width);
                                  }
                                  cResult[41] = oe;
                                  let tmp40 = oe;
                                } else {
                                  tmp40 = cResult[41];
                                }
                                if (cResult[42] === tmp25) {
                                  if (cResult[43] === tmp4.galleryContent) {
                                    if (cResult[44] === tmp4.row) {
                                      if (cResult[45] === tmp29) {
                                        if (cResult[47] === disabled) {
                                          if (cResult[48] === own.busy) {
                                            if (cResult[49] === own.error) {
                                              if (cResult[50] === tmp38) {
                                                if (cResult[51] === question) {
                                                  if (cResult[52] === tmp4.own) {
                                                    let tmp47 = cResult[53];
                                                  }
                                                  if (cResult[54] === tmp41) {
                                                    if (cResult[55] === tmp47) {
                                                      let tmp53 = cResult[56];
                                                    }
                                                    return tmp53;
                                                  }
                                                  let obj2 = { onLayout: tmp40, children: null };
                                                  const items1 = [tmp41, tmp47];
                                                  obj2.children = items1;
                                                  const tmp56 = closure_10(closure_7, obj2);
                                                  cResult[54] = tmp41;
                                                  cResult[55] = tmp47;
                                                  cResult[56] = tmp56;
                                                  tmp53 = tmp56;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        let tmp49Result = null;
                                        if (!disabled) {
                                          let obj4 = { style: tmp4.own, children: null };
                                          let obj5 = {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: onFrameHeight(tmp(tmp2[27]).ImagePlusIcon, { size: "xs" }),
                                            text: tmp(tmp2[19]).ownImageUploadText(question),
                                            loading: "upload" === own.busy,
                                            onPress() {
                                                                                      closure_16().catch(() => {

                                                                                      });
                                                                                    }
                                          };
                                          const items2 = [onFrameHeight(tmp(tmp2[26]).Button, obj5), ];
                                          let tmp51Result = null;
                                          if (null != own.error) {
                                            let obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", accessibilityLiveRegion: "polite", children: own.error.text };
                                            tmp51Result = tmp51(tmp(tmp2[14]).Text, obj6);
                                          }
                                          items2[1] = tmp51Result;
                                          obj4.children = items2;
                                          tmp49Result = closure_10(closure_7, obj4);
                                          tmp51 = onFrameHeight;
                                          const tmpResult3 = tmp(tmp2[19]);
                                        }
                                        cResult[47] = disabled;
                                        cResult[48] = own.busy;
                                        cResult[49] = own.error;
                                        cResult[50] = tmp38;
                                        cResult[51] = question;
                                        cResult[52] = tmp4.own;
                                        cResult[53] = tmp49Result;
                                        tmp47 = tmp49Result;
                                      }
                                    }
                                  }
                                }
                                if (tmp25) {
                                  const obj7 = { ref: galleryContent, horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: null, children: null };
                                  galleryContent = tmp4.galleryContent;
                                  obj7.contentContainerStyle = galleryContent;
                                  obj7.children = tmp29;
                                  let tmp42Result = tmp42(options, obj7);
                                } else {
                                  const obj8 = { style: tmp4.row, children: tmp29 };
                                  tmp42Result = tmp42(closure_7, obj8);
                                }
                                cResult[42] = tmp25;
                                cResult[43] = tmp4.galleryContent;
                                cResult[44] = tmp4.row;
                                cResult[45] = tmp29;
                                cResult[46] = tmp42Result;
                              }
                              _require = onPick(function*() {
                                if (c3 === 2) {
                                  c3 = 3;
                                  throw new TypeError("Generator functions may not be called on executing generators");
                                } else if (tmp4 === 3) {
                                  if (arg0 === 1) {
                                    throw value;
                                  } else if (arg0 === 2) {
                                    const obj2 = { value, done: true };
                                    return obj2;
                                  } else {
                                    return { value: "IconComponent", done: null };
                                  }
                                } else {
                                  try {
                                    c3 = 2;
                                    if (0 === c2) {
                                      if (arg0 === 1) {
                                        c3 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c3 = 3;
                                        const obj4 = { value, done: true };
                                        return obj4;
                                      } else {
                                        closure_1 = tmp5;
                                        closure_128_0 = undefined;
                                        closure_128_1 = undefined;
                                        c2 = 1;
                                        c3 = 1;
                                        const obj5 = { value: tmp2(disabled[25]).pickConjurePhotos("photo", 1), done: false };
                                        return obj5;
                                      }
                                    } else if (arg0 === 1) {
                                      c3 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c3 = 3;
                                      const obj6 = { value, done: true };
                                      return obj6;
                                    } else {
                                      closure_128_0 = value;
                                      closure_128_1 = own(closure_128_0, 1)[0];
                                      if (null != closure_128_1) {
                                        own.onUpload(tmp2(disabled[25]).uploadConjurePickedFile(tmp2, closure_128_1));
                                        const obj = tmp2(disabled[25]);
                                      }
                                      c3 = 3;
                                      return { value: "IconComponent", done: null };
                                    }
                                  } catch (tmp16) {
                                    c3 = tmp;
                                    throw tmp16;
                                  }
                                }
                              });
                              function t6() {
                                const self = this;
                                const apply = closure_0.apply;
                                if (typeof apply === "unknown") {
                                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                } else {
                                  applyArgumentsResult = apply(self, arguments);
                                }
                                return applyArgumentsResult;
                              }
                              cResult[38] = own;
                              cResult[39] = projectId;
                              cResult[40] = t6;
                              tmp38 = t6;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    let mapped = options.map((option) => {
      projectId = option;
      const obj = { projectId, option, multi, galleryWidth: null, selected: null, disabled: null, frameHeight: null, onFrameHeight: null, onMeasured: null, onPick: null, onView: null };
      let tmp3 = null;
      if (closure_13) {
        tmp3 = bound;
      }
      obj.galleryWidth = tmp3;
      obj.selected = selectedIds.includes(option.id);
      obj.disabled = disabled;
      obj.frameHeight = frameHeight;
      obj.onFrameHeight = onFrameHeight;
      obj.onMeasured = function onMeasured(arg0) {
        const current = ref.current;
        return current.set(option.id, arg0);
      };
      obj.onPick = onPick;
      obj.onView = onView;
      return onFrameHeight(onView, obj, option.id);
    });
    if (null == own.image) {
      cResult[9] = disabled;
      cResult[10] = frameHeight;
      cResult[11] = bound;
      cResult[12] = tmp5;
      cResult[13] = onPick;
      cResult[14] = options;
      cResult[15] = own.image;
      cResult[16] = own.onPick;
      cResult[17] = own.onRemove;
      cResult[18] = own.selected;
      cResult[19] = projectId;
      cResult[20] = tmp25;
      cResult[21] = selectedIds;
      cResult[22] = tmp28;
      cResult[23] = mapped;
      tmp29 = mapped;
    } else {
      if (cResult[24] !== own.image) {
        const ownImageOptionResult = tmp(tmp2[19]).ownImageOption(own.image);
        cResult[24] = own.image;
        cResult[25] = ownImageOptionResult;
        let tmp30 = ownImageOptionResult;
        const tmpResult4 = tmp(tmp2[19]);
      } else {
        tmp30 = cResult[25];
      }
      let tmp32 = null;
      if (tmp25) {
        tmp32 = bound;
      }
      const _Symbol = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        function ie() {

        }
        cResult[26] = ie;
        let onPick2 = ie;
      } else {
        onPick2 = cResult[26];
      }
      const _Symbol2 = Symbol;
      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
        function te() {

        }
        cResult[27] = te;
        let arr = te;
      } else {
        arr = cResult[27];
      }
      if (cResult[28] === disabled) {
        if (cResult[29] === frameHeight) {
          if (cResult[30] === tmp5) {
            if (cResult[31] === own.onPick) {
              if (cResult[32] === own.onRemove) {
                if (cResult[33] === own.selected) {
                  if (cResult[34] === tmp30) {
                    if (cResult[35] === projectId) {
                      if (cResult[36] === tmp32) {
                        let tmp34 = cResult[37];
                      }
                      arr = mapped.push(tmp34);
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj9 = { projectId, option: tmp30, multi: tmp5, galleryWidth: tmp32, selected: own.selected, disabled, frameHeight, onFrameHeight: tmp15, onMeasured: onPick2, onPick: null, onView: null, onRemove: null };
      onPick2 = own.onPick;
      obj9.onPick = onPick2;
      obj9.onView = arr;
      obj9.onRemove = own.onRemove;
      const tmp37 = onFrameHeight(onView, obj9, tmp30.id);
      cResult[28] = disabled;
      cResult[29] = frameHeight;
      cResult[30] = tmp5;
      cResult[31] = own.onPick;
      cResult[32] = own.onRemove;
      cResult[33] = own.selected;
      cResult[34] = tmp30;
      cResult[35] = projectId;
      cResult[36] = tmp32;
      cResult[37] = tmp37;
      tmp34 = tmp37;
    }
  }
  class G {
    constructor(arg0) {
      closure_0 = projectId;
      obj = closure_0(disabled[19]);
      viewableImageOptionsResult = obj.viewableImageOptions(options);
      closure_1 = viewableImageOptionsResult;
      findIndexResult = viewableImageOptionsResult.findIndex((id) => id.id === id.id);
      closure_2 = findIndexResult;
      if (findIndexResult >= 0) {
        tmp2 = globalThis;
        _Promise = Promise;
        allPromises = Promise.all(viewableImageOptionsResult.map((image) => first(closure_0, image.image.attachment_id)));
        nextPromise = allPromises.then((arr) => {
          const mapped = arr.map((uri, mediaIndex) => {
            const current = ref.current;
            value = current.get(dependencyMap[mediaIndex].id);
            let result = null;
            if (null != value) {
              result = closure_0(disabled[19]).imageOptionViewerSize(value);
              const obj = closure_0(disabled[19]);
            }
            const size = { uri, mediaIndex, width: null, height: null, accessoryType: "embed", description: null, disableDownload: true };
            let width;
            if (result != null) {
              width = result.width;
            }
            if (width == null) {
              width = galleryContent;
            }
            size.width = width;
            let height;
            if (result != null) {
              height = result.height;
            }
            if (height == null) {
              height = galleryContent;
            }
            size.height = height;
            size.description = dependencyMap[mediaIndex].label;
            return size;
          });
          openMediaModal.openMediaModal({ initialSources: mapped, initialIndex: findIndexResult, analyticsSource: "VibegrationsClarificationImageOptions", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true });
        }, () => {

        });
      }
      return;
    }
  }
  cResult[6] = options;
  cResult[7] = projectId;
  cResult[8] = G;
  tmp28 = G;
  const tmp16 = own(noop.useState(null), 2);
}) : (function ConjureImageOptions(projectId) {
  projectId = projectId.projectId;
  ({ question, selectedIds: importDefault, disabled } = projectId);
  ({ onPick: asyncGeneratorStep, own } = projectId);
  c10 = undefined;
  closure_13 = undefined;
  let bound;
  let onView;
  closure_16 = undefined;
  const tmp = closure_13();
  noop = tmp2;
  options = question.options;
  let obj = projectId(disabled[19]);
  const imageOptionsLayoutResult = projectId(disabled[19]).imageOptionsLayout(options);
  closure_7 = noop.useRef(new Map());
  const tmp7 = own(noop.useState(null), 2);
  const frameHeight = tmp7[0];
  const onFrameHeight = tmp9;
  const map = new Map();
  [num, c10] = own(noop.useState(null), 2);
  const ref = noop.useRef(null);
  const image = own.image;
  let id;
  if (image != null) {
    id = image.attachment.id;
  }
  const items = [id];
  const effect = obj2.useEffect(() => {
    if (null != id) {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd({ animated: true });
      }
    }
  }, items);
  let num2 = 0;
  if (null != own.image) {
    num2 = 1;
  }
  const sum = options.length + num2;
  let tmp15 = null != num;
  if (tmp15) {
    tmp15 = (num - require("native").space.PX_8 * (sum - 1)) / sum < id;
  }
  closure_13 = tmp18;
  bound = Math.max(id, Math.min(136, (num - 2 * require("native").space.PX_8) / 2.4));
  const items1 = [options, projectId];
  onView = obj2.useCallback((arg0) => {
    id = arg0;
    const viewableImageOptionsResult = projectId(disabled[19]).viewableImageOptions(options);
    closure_1 = viewableImageOptionsResult;
    const findIndexResult = viewableImageOptionsResult.findIndex((id) => id.id === id.id);
    disabled = findIndexResult;
    if (findIndexResult >= 0) {
      Promise.all(viewableImageOptionsResult.map((image) => first(closure_0, image.image.attachment_id))).then((arr) => {
        const mapped = arr.map((uri, mediaIndex) => {
          const current = ref.current;
          value = current.get(dependencyMap[mediaIndex].id);
          let result = null;
          if (null != value) {
            result = projectId(disabled[19]).imageOptionViewerSize(value);
            const obj = projectId(disabled[19]);
          }
          const size = { uri, mediaIndex, width: null, height: null, accessoryType: "embed", description: null, disableDownload: true };
          let width;
          if (result != null) {
            width = result.width;
          }
          if (width == null) {
            width = ref;
          }
          size.width = width;
          let height;
          if (result != null) {
            height = result.height;
          }
          if (height == null) {
            height = ref;
          }
          size.height = height;
          size.description = dependencyMap[mediaIndex].label;
          return size;
        });
        openMediaModal.openMediaModal({ initialSources: mapped, initialIndex: findIndexResult, analyticsSource: "VibegrationsClarificationImageOptions", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true });
      }, () => {

      });
      const allPromises = Promise.all(viewableImageOptionsResult.map((image) => first(closure_0, image.image.attachment_id)));
    }
  }, items1);
  let mapped = options.map((option) => {
    projectId = option;
    const obj = { projectId, option, multi, galleryWidth: null, selected: null, disabled: null, frameHeight: null, onFrameHeight: null, onMeasured: null, onPick: null, onView: null };
    let tmp3 = null;
    if (closure_13) {
      tmp3 = bound;
    }
    obj.galleryWidth = tmp3;
    obj.selected = closure_1.includes(option.id);
    obj.disabled = disabled;
    obj.frameHeight = frameHeight;
    obj.onFrameHeight = onFrameHeight;
    obj.onMeasured = function onMeasured(arg0) {
      const current = ref.current;
      return current.set(option.id, arg0);
    };
    obj.onPick = onPick;
    obj.onView = onView;
    return onFrameHeight(onView, obj, option.id);
  });
  if (null != own.image) {
    const ownImageOptionResult = tmp3(disabled[19]).ownImageOption(own.image);
    const obj3 = { projectId, option: ownImageOptionResult, multi: tmp2, galleryWidth: null, selected: null, disabled: null, frameHeight: null, onFrameHeight: null, onMeasured: null, onPick: null, onView: null, onRemove: null };
    let tmp21 = null;
    if (tmp18) {
      tmp21 = bound;
    }
    obj3.galleryWidth = tmp21;
    obj3.selected = own.selected;
    obj3.disabled = disabled;
    obj3.frameHeight = frameHeight;
    obj3.onFrameHeight = tmp9;
    obj3.onMeasured = function onMeasured() {

    };
    obj3.onPick = own.onPick;
    obj3.onView = function onView() {

    };
    obj3.onRemove = own.onRemove;
    mapped.push(onFrameHeight(onView, obj3, ownImageOptionResult.id));
    const tmp3Result = tmp3(disabled[19]);
  }
  const items2 = [own, projectId];
  closure_16 = obj2.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: tmp2(17018).pickConjurePhotos("photo", 1), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_0 = value;
          closure_128_1 = own(closure_128_0, 1)[0];
          if (null != closure_128_1) {
            closure_129_4.onUpload(tmp2(17018).uploadConjurePickedFile(closure_129_0, closure_128_1));
            const obj = tmp2(17018);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  }), items2);
  let obj4 = {
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  if ("gallery" === imageOptionsLayoutResult || tmp15) {
    let obj5 = { ref, horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.galleryContent, children: mapped };
    let tmp25Result = tmp25(options, obj5);
    let tmp27 = tmp25;
  } else {
    let obj6 = { style: tmp.row, children: mapped };
    tmp25Result = tmp25(tmp24, obj6);
    tmp27 = tmp25;
  }
  const items3 = [tmp25Result, ];
  let tmp23Result = null;
  if (!disabled) {
    const obj7 = { style: tmp.own, children: null };
    const obj8 = {
      variant: "secondary",
      size: "sm",
      icon: tmp27(tmp3(disabled[27]).ImagePlusIcon, { size: "xs" }),
      text: tmp3(disabled[19]).ownImageUploadText(question),
      loading: "upload" === own.busy,
      onPress() {
          closure_16().catch(() => {

          });
        }
    };
    const items4 = [tmp27(tmp3(disabled[26]).Button, obj8), ];
    let tmp27Result = null;
    if (null != own.error) {
      const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", accessibilityLiveRegion: "polite", children: own.error.text };
      tmp27Result = tmp27(tmp3(disabled[14]).Text, obj9);
    }
    items4[1] = tmp27Result;
    obj7.children = items4;
    tmp23Result = tmp23(tmp24, obj7);
    const tmp3Result2 = tmp3(disabled[19]);
  }
  items3[1] = tmp23Result;
  obj4.children = items3;
  return c10(closure_7, obj4);
});