// discord_app/modules/conjure/clarification/native/ConjureImageOptions.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3863 from "../../intl/ConjureUntranslated.messages.js";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TrashIcon from "../../../../design/components/Icon/native/redesign/generated/TrashIcon.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import FormRadio from "../../../../design/components/Forms/native/FormRadio.native.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import ImageWarningIcon from "../../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import openMediaModal from "../../../media_viewer/native/components/openMediaModal.tsx";
import useConjureAttachmentImage from "../../chat/useConjureAttachmentImage.tsx";
import ConjureImageOptions from "../ConjureImageOptions.tsx";
import MaximizeIcon2 from "../../../../design/components/Icon/native/redesign/generated/MaximizeIcon.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 1024;
let c11 = 104;
const createStyles = fn(5004);
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
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImageOptionPicture(onMeasured) {
  const cResult = c.c(21);
  onMeasured = onMeasured.onMeasured;
  ({ projectId, attachmentId, inert } = onMeasured);
  const tmp4 = closure_12();
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
        const tmp20 = closure_1_8(ImageWarningIcon.ImageWarningIcon, obj3);
        cResult[3] = tmp20;
        let tmp17 = tmp20;
      } else {
        tmp17 = cResult[3];
      }
      const _Symbol2 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3863.lhgD88);
        cResult[4] = stringResult;
        let tmp21 = stringResult;
      } else {
        tmp21 = cResult[4];
      }
      if (cResult[5] !== tmp4.brokenText) {
        const obj4 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.brokenText, children: tmp21 };
        const tmp26 = closure_1_8(Text_Text.Text, obj4);
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
        const tmp34 = closure_1_8(React5, obj5);
        cResult[10] = tmp7;
        cResult[11] = tmp27;
        cResult[12] = tmp34;
        tmp31 = tmp34;
      }
      const obj6 = { style: tmp4.broken, children: null };
      const items = [tmp17, tmp24];
      obj6.children = items;
      const tmp30 = React6(React5, obj6);
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
            const tmp15 = closure_1_8(React5, obj7);
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
        tmp9 = closure_1_8(FastImageDefault, obj8);
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
  let tmp = closure_12();
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
    const items1 = [closure_1_8(ImageWarningIcon.ImageWarningIcon, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", style: tmp.brokenText, children: null };
    const intl = util.intl;
    obj5.children = intl.string(_modDef3863.lhgD88);
    items1[1] = closure_1_8(Text_Text.Text, obj5);
    obj3.children = items1;
    obj2.children = React6(React5, obj3);
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
      tmp6Result = closure_1_8(FastImageDefault, obj6);
    }
    obj2.children = tmp6Result;
    tmp10 = obj2;
  }
  return closure_1_8(React5, tmp10);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ImageOptionTile(onView) {
  const cResult = c.c(70);
  ({ projectId, option } = onView);
  ({ multi, galleryWidth, selected, disabled, frameHeight, onFrameHeight } = onView);
  ({ onMeasured, onPick } = onView);
  onView = onView.onView;
  const onRemove = onView.onRemove;
  const tmp4 = closure_12();
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
        const stringResult = intl.string(_modDef3863["4/eeDD"]);
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
                  if (cResult[16] === onView) {
                    if (cResult[17] === option) {
                      ({ accessibilityRole, accessibilityState } = radioA11yNative);
                      if (cResult[19] !== option.label) {
                        const intl2 = util.intl;
                        const obj2 = { answer: option.label };
                        const formatToPlainStringResult = intl2.formatToPlainString(_modDef3863.AQbxhf, obj2);
                        cResult[19] = option.label;
                        cResult[20] = formatToPlainStringResult;
                      }
                      if (cResult[21] === onRemove) {
                        if (cResult[22] === option.image) {
                          if (cResult[24] === onRemove) {
                            if (cResult[25] === onView) {
                              if (cResult[28] !== onFrameHeight) {
                                class U {
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
                                cResult[29] = U;
                              } else {
                                class U {
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
                                class U {
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
                                tmp41[0] = projectId;
                                tmp41[1] = option.image.attachment_id;
                                tmp41[2] = disabled;
                                tmp41[3] = onMeasured;
                                let tmp39 = closure_1_8(closure_13, tmp41);
                              } else {
                                class U {
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
                                tmp38[0] = tmp4.frame;
                                tmp39 = closure_1_8(React5, tmp38);
                              }
                              cResult[30] = disabled;
                              cResult[31] = onMeasured;
                              onMeasured = option.image;
                              cResult[32] = onMeasured;
                              cResult[33] = projectId;
                              projectId = tmp4.frame;
                              cResult[34] = projectId;
                              cResult[35] = tmp39;
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
                          cResult[24] = onRemove;
                          cResult[25] = onView;
                          cResult[26] = option;
                          cResult[27] = N;
                        }
                      }
                      if (null != onRemove) {
                        class U {
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
                        tmp33[1] = intl3.string(_modDef3863.HQEXJM);
                        const items = [tmp33];
                        let tmp30 = items;
                      } else {
                        class U {
                          constructor(arg0) {
                            return onFrameHeight(onView.nativeEvent.layout.height);
                          }
                        }
                        if (null != option.image) {
                          class U {
                            constructor(arg0) {
                              return onFrameHeight(onView.nativeEvent.layout.height);
                            }
                          }
                          tmp31[1] = tmp11;
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
                          tmp32[0] = tmp31;
                          tmp30 = tmp32;
                        }
                      }
                      cResult[21] = onRemove;
                      cResult[22] = option.image;
                      cResult[23] = tmp30;
                    }
                  }
                }
              }
              cResult[14] = disabled;
              cResult[15] = onPick;
              cResult[16] = onView;
              cResult[17] = option;
              cResult[18] = tmp23;
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
        class U {
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
        class U {
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
  const tmp = closure_12();
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
  const obj6 = { style: tmp.card, onPress: disabled ? (() => asyncGeneratorStep(option)) : (() => dependencyMap(option)), disabled: null, accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null, children: null };
  let tmp11 = disabled;
  if (disabled) {
    tmp11 = null == option.image;
  }
  obj6.disabled = tmp11;
  ({ accessibilityRole: obj5.accessibilityRole, accessibilityState: obj5.accessibilityState } = radioA11yNative);
  const intl2 = util.intl;
  obj6.accessibilityLabel = intl2.formatToPlainString(_modDef3863.AQbxhf, { answer: option.label });
  if (null != onRemove) {
    const obj8 = { name: "remove", label: null };
    const intl3 = util.intl;
    obj8.label = intl3.string(_modDef3863.HQEXJM);
    const items1 = [obj8];
    let tmp12 = items1;
  } else if (null != option.image) {
    const obj9 = { name: "view", label: stringResult };
    const items2 = [obj9];
    tmp12 = items2;
  }
  obj6.accessibilityActions = tmp12;
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
    let tmp14 = closure_1_8(closure_13, obj11);
    let tmp13 = closure_1_8;
  } else {
    tmp13 = closure_1_8;
    const obj12 = { style: tmp.frame };
    tmp14 = closure_1_8(React5, obj12);
  }
  const items3 = [tmp14, ];
  if (!multi) {
    if (!selected) {
      items3[1] = null;
      obj10.children = items3;
      const items4 = [React6(React5, obj10), ];
      const obj13 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, style: tmp.caption, children: ConjureImageOptions.imageOptionCaption(option) };
      items4[1] = tmp13(Text_Text.Text, obj13);
      obj6.children = items4;
      const items5 = [React6(Card.Card, obj6), ];
      let tmp13Result = null;
      if (null != option.image) {
        tmp13Result = null;
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
          const obj16 = { icon: tmp13(MaximizeIcon, { size: "xs" }), size: "sm", variant: "secondary-overlay", onPress: null, accessibilityLabel: null };
          if (null == onRemove) {
            onRemove = () => asyncGeneratorStep(option);
          }
          obj16.onPress = onRemove;
          const intl4 = util.intl;
          const obj17 = { answer: option.label };
          obj16.accessibilityLabel = intl4.formatToPlainString(_modDef3863.JGjZMs, obj17);
          obj14.children = tmp13(IconButton.IconButton, obj16);
          tmp13Result = tmp13(React5, obj14);
        }
      }
      items5[1] = tmp13Result;
      obj4.children = items5;
      return React6(React5, obj4);
    }
  }
  const obj18 = { style: tmp.indicator, children: null };
  if (multi) {
    const obj19 = { checked: selected };
    let tmp13Result3 = tmp13(FormCheckbox.FormCheckbox, obj19);
  } else {
    const obj20 = { selected };
    tmp13Result3 = tmp13(FormRadio.FormRadio, obj20);
  }
  obj18.children = tmp13Result3;
  tmp13(React5, obj18);
  const obj7 = { answer: option.label };
  stringResult = intl.string(_modDef3863["4/eeDD"]);
});
ReactCompilerGating = fn(558);
let obj13 = { position: "absolute", end: nativeDefault.space.PX_8 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureImageOptions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureImageOptions(projectId) {
  const cResult = projectId(disabled[8]).c(60);
  projectId = projectId.projectId;
  ({ question, selectedIds } = projectId);
  disabled = projectId.disabled;
  const onPick = projectId.onPick;
  const own = projectId.own;
  id();
  noop = true === question.multi_select;
  const options = question.options;
  if (cResult[0] !== options) {
    const imageOptionsLayoutResult = tmp(tmp2[18]).imageOptionsLayout(options);
    cResult[0] = options;
    cResult[1] = imageOptionsLayoutResult;
    let tmp5 = imageOptionsLayoutResult;
    const tmpResult = tmp(tmp2[18]);
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const _Map = Map;
    const map = new Map();
    cResult[2] = map;
    let tmp7 = map;
  } else {
    tmp7 = cResult[2];
  }
  noop.useRef(tmp7);
  const tmp12 = own(noop.useState(null), 2);
  const frameHeight = tmp12[0];
  const onFrameHeight = tmp12[1];
  let obj = projectId(disabled[8]);
  const obj3 = noop;
  tmp = projectId;
  [tmp14, c10] = own(noop.useState(null), 2);
  const ref = noop.useRef(null);
  const image = own.image;
  id = undefined;
  if (image != null) {
    id = image.attachment.id;
  }
  if (cResult[3] !== id) {
    class O {
      constructor() {
        if (null != id) {
          tmp = closure_11;
          current = closure_11.current;
          if (current != null) {
            scrollToEndResult = current.scrollToEnd({ animated: true });
          }
        }
        return;
      }
    }
    let items = [id];
    cResult[3] = id;
    cResult[4] = O;
    cResult[5] = items;
    let tmp18 = items;
  } else {
    class O {
      constructor() {
        if (null != id) {
          tmp = closure_11;
          current = closure_11.current;
          if (current != null) {
            scrollToEndResult = current.scrollToEnd({ animated: true });
          }
        }
        return;
      }
    }
    tmp18 = cResult[5];
  }
  const effect = obj3.useEffect(O, tmp18);
  if (null != own.image) {
    class O {
      constructor() {
        if (null != id) {
          tmp = closure_11;
          current = closure_11.current;
          if (current != null) {
            scrollToEndResult = current.scrollToEnd({ animated: true });
          }
        }
        return;
      }
    }
  }
  const sum = options.length;
  let tmp21 = null != tmp14;
  if (tmp21) {
    class O {
      constructor() {
        if (null != id) {
          tmp = closure_11;
          current = closure_11.current;
          if (current != null) {
            scrollToEndResult = current.scrollToEnd({ animated: true });
          }
        }
        return;
      }
    }
    tmp21 = (tmp14 - selectedIds(tmp2[6]).space.PX_8 * (sum - 1)) / sum < ref;
  }
  closure_13 = "gallery" === tmp5 || tmp21;
  if (tmp14 == null) {
    class O {
      constructor() {
        if (null != id) {
          tmp = closure_11;
          current = closure_11.current;
          if (current != null) {
            scrollToEndResult = current.scrollToEnd({ animated: true });
          }
        }
        return;
      }
    }
  }
  const bound = Math.max(ref, Math.min(136, (tmp14 - 2 * selectedIds(tmp2[6]).space.PX_8) / 2.4));
  if (cResult[6] !== own.image) {
    class O {
      constructor() {
        if (null != id) {
          tmp = closure_11;
          current = closure_11.current;
          if (current != null) {
            scrollToEndResult = current.scrollToEnd({ animated: true });
          }
        }
        return;
      }
    }
    if (null != own.image) {
      class O {
        constructor() {
          if (null != id) {
            tmp = closure_11;
            current = closure_11.current;
            if (current != null) {
              scrollToEndResult = current.scrollToEnd({ animated: true });
            }
          }
          return;
        }
      }
      let ownImageOptionResult = obj4.ownImageOption(own.image);
    }
    cResult[6] = own.image;
    cResult[7] = ownImageOptionResult;
  } else {
    class O {
      constructor() {
        if (null != id) {
          tmp = closure_11;
          current = closure_11.current;
          if (current != null) {
            scrollToEndResult = current.scrollToEnd({ animated: true });
          }
        }
        return;
      }
    }
  }
  ownImageOptionResult = tmp25;
  if (cResult[8] === options) {
    class O {
      constructor() {
        if (null != id) {
          tmp = closure_11;
          current = closure_11.current;
          if (current != null) {
            scrollToEndResult = current.scrollToEnd({ animated: true });
          }
        }
        return;
      }
    }
  }
  class K {
    constructor(arg0) {
      closure_0 = projectId;
      obj = closure_0(disabled[18]);
      if (null == closure_15) {
        items = options;
      } else {
        tmp2 = options;
        items = [];
        num = 0;
        tmp3 = items;
        items[HermesBuiltin.arraySpread(options, 0)] = tmp;
      }
      viewableImageOptionsResult = obj.viewableImageOptions(items);
      closure_1 = viewableImageOptionsResult;
      findIndexResult = viewableImageOptionsResult.findIndex(() => { ... });
      closure_2 = findIndexResult;
      if (findIndexResult >= 0) {
        tmp5 = globalThis;
        _Promise = Promise;
        allPromises = Promise.all(viewableImageOptionsResult.map(() => { ... }));
        nextPromise = allPromises.then(() => { ... }, /* F150557 */ function() { ... });
      }
      return;
    }
  }
  cResult[8] = options;
  cResult[9] = tmp25;
  cResult[10] = projectId;
  cResult[11] = K;
  const tmp13 = own(noop.useState(null), 2);
}) : (function ConjureImageOptions(projectId) {
  projectId = projectId.projectId;
  ({ question, selectedIds: importDefault, disabled } = projectId);
  ({ onPick: asyncGeneratorStep, own } = projectId);
  c10 = undefined;
  let id;
  closure_13 = undefined;
  let bound;
  let memo;
  let onView;
  closure_17 = undefined;
  const tmp = id();
  noop = tmp2;
  const options = question.options;
  let obj = projectId(disabled[18]);
  const imageOptionsLayoutResult = projectId(disabled[18]).imageOptionsLayout(options);
  noop.useRef(new Map());
  const tmp7 = own(noop.useState(null), 2);
  const frameHeight = tmp7[0];
  const onFrameHeight = tmp9;
  const map = new Map();
  [num, c10] = own(noop.useState(null), 2);
  const ref = noop.useRef(null);
  const image = own.image;
  id = undefined;
  if (image != null) {
    id = image.attachment.id;
  }
  let items = [id];
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
    tmp15 = (num - require("native").space.PX_8 * (sum - 1)) / sum < ref;
  }
  closure_13 = tmp18;
  bound = Math.max(ref, Math.min(136, (num - 2 * require("native").space.PX_8) / 2.4));
  const items1 = [own.image];
  memo = obj2.useMemo(() => {
    let ownImageOptionResult = null;
    if (null != own.image) {
      ownImageOptionResult = ConjureImageOptions.ownImageOption(tmp.image);
    }
    return ownImageOptionResult;
  }, items1);
  const items2 = [options, memo, projectId];
  onView = obj2.useCallback((arg0) => {
    id = arg0;
    if (null == memo) {
      let items = options;
    } else {
      items = [];
      items[HermesBuiltin.arraySpread(options, 0)] = tmp;
    }
    const viewableImageOptionsResult = projectId(disabled[18]).viewableImageOptions(items);
    closure_1 = viewableImageOptionsResult;
    const findIndexResult = viewableImageOptionsResult.findIndex((id) => id.id === id.id);
    disabled = findIndexResult;
    if (findIndexResult >= 0) {
      Promise.all(viewableImageOptionsResult.map((image) => projectId(disabled[23]).getAttachmentUrl(closure_0, image.image.attachment_id))).then((arr) => {
        const mapped = arr.map((uri, mediaIndex) => {
          const current = ref.current;
          value = current.get(dependencyMap[mediaIndex].id);
          let result = null;
          if (null != value) {
            result = projectId(disabled[18]).imageOptionViewerSize(value);
            const obj = projectId(disabled[18]);
          }
          const size = { uri, mediaIndex, width: null, height: null, accessoryType: "embed", description: null, disableDownload: true };
          let width;
          if (result != null) {
            width = result.width;
          }
          if (width == null) {
            width = c10;
          }
          size.width = width;
          let height;
          if (result != null) {
            height = result.height;
          }
          if (height == null) {
            height = c10;
          }
          size.height = height;
          size.description = dependencyMap[mediaIndex].label;
          return size;
        });
        openMediaModal.openMediaModal({ initialSources: mapped, initialIndex: findIndexResult, analyticsSource: "ConjureClarificationImageOptions", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true });
      }, () => {

      });
      const allPromises = Promise.all(viewableImageOptionsResult.map((image) => projectId(disabled[23]).getAttachmentUrl(closure_0, image.image.attachment_id)));
    }
    let obj = projectId(disabled[18]);
  }, items2);
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
    return frameHeight(bound, obj, option.id);
  });
  if (null != memo) {
    const obj3 = { projectId, option: memo, multi: tmp2, galleryWidth: null, selected: null, disabled: null, frameHeight: null, onFrameHeight: null, onMeasured: null, onPick: null, onView: null, onRemove: null };
    let tmp23 = null;
    if (tmp18) {
      tmp23 = bound;
    }
    obj3.galleryWidth = tmp23;
    obj3.selected = own.selected;
    obj3.disabled = disabled;
    obj3.frameHeight = frameHeight;
    obj3.onFrameHeight = tmp9;
    obj3.onMeasured = function onMeasured(arg0) {
      const current = ref.current;
      return current.set(memo.id, arg0);
    };
    obj3.onPick = own.onPick;
    obj3.onView = onView;
    obj3.onRemove = own.onRemove;
    mapped.push(frameHeight(bound, obj3, memo.id));
  }
  const items3 = [own, projectId];
  closure_17 = obj2.useCallback(asyncGeneratorStep(async () => {
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
            const obj5 = { value: tmp2(12517).pickConjurePhotos("photo", 1), done: false };
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
            closure_129_4.onUpload(tmp2(12517).uploadConjurePickedFile(closure_129_0, closure_128_1));
            const obj = tmp2(12517);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  }), items3);
  let obj4 = {
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  if ("gallery" === imageOptionsLayoutResult || tmp15) {
    let obj5 = { ref, horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.galleryContent, children: mapped };
    let tmp27Result = tmp27(options, obj5);
    let tmp29 = tmp27;
  } else {
    let obj6 = { style: tmp.row, children: mapped };
    tmp27Result = tmp27(tmp26, obj6);
    tmp29 = tmp27;
  }
  const items4 = [tmp27Result, ];
  let tmp25Result = null;
  if (!disabled) {
    const obj7 = { style: tmp.own, children: null };
    const obj8 = {
      variant: "secondary",
      size: "sm",
      icon: tmp29(tmp3(disabled[27]).ImagePlusIcon, { size: "xs" }),
      text: tmp3(disabled[18]).ownImageUploadText(question),
      loading: "upload" === own.busy,
      onPress() {
          closure_17().catch(() => {

          });
        }
    };
    const items5 = [tmp29(tmp3(disabled[26]).Button, obj8), ];
    let tmp29Result = null;
    if (null != own.error) {
      const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", accessibilityLiveRegion: "polite", children: own.error.text };
      tmp29Result = tmp29(tmp3(disabled[13]).Text, obj9);
    }
    items5[1] = tmp29Result;
    obj7.children = items5;
    tmp25Result = tmp25(tmp26, obj7);
    const tmp3Result = tmp3(disabled[18]);
  }
  items4[1] = tmp25Result;
  obj4.children = items4;
  return onFrameHeight(ref, obj4);
});