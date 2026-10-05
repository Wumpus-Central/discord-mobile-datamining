// discord_app/modules/conjure/clarification/native/ConjureImageOptions.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import react_native from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import TrashIcon from "../../../../design/components/Icon/native/redesign/generated/TrashIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ImageWarningIcon2 from "../../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import FormRadio from "../../../../design/components/Forms/native/FormRadio.native.tsx";
import IconButton2 from "../../../../design/components/Button/native/IconButton.native.tsx";
import openMediaModal from "../../../media_viewer/native/components/openMediaModal.tsx";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";
import useConjureAttachmentImage from "../../chat/useConjureAttachmentImage.tsx";
import ConjureImageOptions from "../ConjureImageOptions.tsx";
import MaximizeIcon2 from "../../../../design/components/Icon/native/redesign/generated/MaximizeIcon.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native2 from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _Promise, c3, closure_2, map, nextPromise, tmp2, tmp4Result;

let c10;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
let react = react_mod;
({ Image: metroRequire, ScrollView: metroImportDefault, View: metroImportAll } = react_native2);
const getAttachmentUrl = ConjureConnectionStore.getAttachmentUrl;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let c12 = 1024;
let c13 = 104;
let createStyles = createStyles_mod;
let obj = {
  row: obj2,
  own: obj3,
  galleryContent: obj4,
  rowTile: { flex: 1, minWidth: 0 },
  card: obj5,
  ring: obj6,
  ringSelected: obj7,
  frame: obj8,
  frameInert: { opacity: 0.5 },
  image: { width: "100%", height: "100%" },
  broken: obj9,
  brokenText: { textAlign: "center" },
  indicator: obj10,
  caption: obj11,
  view: obj12,
};
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, alignItems: "flex-start" };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj5 = { padding: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
obj6 = { borderWidth: 2, borderColor: "transparent", borderRadius: nativeDefault.radii.lg };
obj7 = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj8 = {
  width: "100%",
  aspectRatio: 1,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};
obj9 = { gap: nativeDefault.space.PX_4, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4 };
obj10 = {
  position: "absolute",
  top: nativeDefault.space.PX_4,
  end: nativeDefault.space.PX_4,
  padding: 2,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM,
};
obj11 = { paddingHorizontal: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_4 };
obj12 = { position: "absolute", end: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onMeasured) => {
      let attachmentId;
      let handleError;
      let inert;
      let items;
      let obj9;
      let projectId;
      let src;
      const obj = react2;
      const cResult = obj.c(21);
      onMeasured = onMeasured.onMeasured;
      ({ projectId, attachmentId, inert } = onMeasured);
      const tmp4 = closure_14();
      const obj2 = useConjureAttachmentImage;
      const conjureAttachmentImage = obj2.useConjureAttachmentImage(projectId, attachmentId);
      ({ src, handleError } = conjureAttachmentImage);
      let frameInert = null;
      const gone = conjureAttachmentImage.gone;
      if (inert) {
        frameInert = tmp4.frameInert;
      }
      if (cResult[0] === tmp4.frame) {
        let tmp7;
        if (cResult[1] === frameInert) {
          tmp7 = cResult[2];
        }
        if (gone) {
          let tmp17;
          let tmp21;
          let tmp24;
          const _Symbol = Symbol;
          const broken = tmp4.broken;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
            const ImageWarningIcon = ImageWarningIcon2.ImageWarningIcon;
            const tmp20 = authStore(ImageWarningIcon, obj3);
            cResult[3] = tmp20;
            tmp17 = tmp20;
          } else {
            tmp17 = cResult[3];
          }
          const _Symbol2 = Symbol;
          const brokenText = tmp4.brokenText;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl5.intl;
            const stringResult = intl.string(_modDef3723.lhgD88);
            cResult[4] = stringResult;
            tmp21 = stringResult;
          } else {
            tmp21 = cResult[4];
          }
          if (cResult[5] !== tmp4.brokenText) {
            const obj4 = { variant: "text-xs/medium", color: "text-muted", style: brokenText, children: tmp21 };
            const tmp26 = authStore(Text_Text.Text, obj4);
            cResult[5] = tmp4.brokenText;
            cResult[6] = tmp26;
            tmp24 = tmp26;
          } else {
            tmp24 = cResult[6];
          }
          if (cResult[7] === tmp4.broken) {
            let tmp27;
            if (cResult[8] === tmp24) {
              tmp27 = cResult[9];
            }
            if (cResult[10] === tmp7) {
              let tmp31;
              if (cResult[11] === tmp27) {
                tmp31 = cResult[12];
              }
              return tmp31;
            }
            const obj5 = { style: tmp7, children: tmp27 };
            const tmp34 = authStore(metroImportAll, obj5);
            cResult[10] = tmp7;
            cResult[11] = tmp27;
            cResult[12] = tmp34;
            tmp31 = tmp34;
          }
          const obj6 = { style: broken, children: items };
          items = [tmp17, tmp24];
          const tmp30 = unpackModuleId(metroImportAll, obj6);
          cResult[7] = tmp4.broken;
          cResult[8] = tmp24;
          cResult[9] = tmp30;
          tmp27 = tmp30;
        } else {
          if (cResult[13] === handleError) {
            if (cResult[14] === onMeasured) {
              if (cResult[15] === src) {
                let tmp8;
                if (cResult[16] === tmp4.image) {
                  tmp8 = cResult[17];
                }
                if (cResult[18] === tmp7) {
                  let tmp12;
                  if (cResult[19] === tmp8) {
                    tmp12 = cResult[20];
                  }
                  return tmp12;
                }
                const obj7 = { style: tmp7, children: tmp8 };
                const tmp15 = authStore(metroImportAll, obj7);
                cResult[18] = tmp7;
                cResult[19] = tmp8;
                cResult[20] = tmp15;
                tmp12 = tmp15;
              }
            }
          }
          let tmp9 = null;
          if (null != src) {
            const obj8 = {
              source: obj9,
              style: tmp4.image,
              resizeMode: "contain",
              onLoad(nativeEvent) {
                let height;
                let width;
                ({ width, height } = nativeEvent.nativeEvent.source);
                const tmp = width > 0 && height > 0;
                if (tmp) {
                  size = { width, height };
                  onMeasured(size);
                }
              },
              onError: handleError,
              accessible: false,
            };
            obj9 = { uri: src };
            tmp9 = authStore(metroRequire, obj8);
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
    }
  : (onMeasured) => {
      let attachmentId;
      let gone;
      let handleError;
      let inert;
      let intl;
      let items1;
      let obj7;
      let projectId;
      let tmp10;
      onMeasured = onMeasured.onMeasured;
      ({ projectId, attachmentId, inert } = onMeasured);
      let tmp = closure_14();
      const obj = useConjureAttachmentImage;
      const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, attachmentId);
      const src = conjureAttachmentImage.src;
      const items = [tmp.frame];
      let frameInert = null;
      ({ gone, handleError } = conjureAttachmentImage);
      if (inert) {
        frameInert = tmp.frameInert;
      }
      items[1] = frameInert;
      const obj2 = { style: items, children: null };
      if (gone) {
        const obj3 = { style: tmp.broken, children: items1 };
        const obj4 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
        const ImageWarningIcon = ImageWarningIcon2.ImageWarningIcon;
        items1 = [authStore(ImageWarningIcon, obj4)];
        const obj5 = {
          variant: "text-xs/medium",
          color: "text-muted",
          style: tmp.brokenText,
          children: intl.string(_modDef3723.lhgD88),
        };
        const Text = Text_Text.Text;
        intl = intl5.intl;
        items1[1] = authStore(Text, obj5);
        obj2.children = unpackModuleId(metroImportAll, obj3);
        tmp10 = obj2;
      } else {
        let tmp6Result = null;
        if (null != src) {
          const obj6 = {
            source: obj7,
            style: tmp.image,
            resizeMode: "contain",
            onLoad(nativeEvent) {
              let height;
              let width;
              ({ width, height } = nativeEvent.nativeEvent.source);
              const tmp = width > 0 && height > 0;
              if (tmp) {
                size = { width, height };
                onMeasured(size);
              }
            },
            onError: handleError,
            accessible: false,
          };
          obj7 = { uri: src };
          tmp6Result = authStore(metroRequire, obj6);
        }
        obj2.children = tmp6Result;
        tmp10 = obj2;
      }
      return authStore(metroImportAll, tmp10);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onView) => {
      let accessibilityRole;
      let accessibilityState;
      let disabled;
      let frameHeight;
      let galleryWidth;
      let multi;
      let onFrameHeight;
      let onMeasured;
      let onPick;
      let option;
      let projectId;
      let selected;
      const obj = react2;
      const cResult = obj.c(68);
      ({ projectId, option } = onView);
      ({ multi, galleryWidth, selected, disabled, frameHeight, onFrameHeight } = onView);
      ({ onMeasured, onPick } = onView);
      onView = onView.onView;
      const onRemove = onView.onRemove;
      const tmp4 = closure_14();
      if (cResult[0] === disabled) {
        react_native;
        if (cResult[3] === disabled) {
          let tmp8;
          let tmp11;
          if (cResult[4] === selected) {
            tmp8 = cResult[5];
          }
          const tmpResult2 = react_native;
          let radioA11yNative = tmpResult2.useRadioA11yNative(tmp8);
          if (multi) {
            radioA11yNative = tmp7;
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl5.intl;
            const stringResult = intl.string(_modDef3723["4/eeDD"]);
            cResult[6] = stringResult;
            tmp11 = stringResult;
          } else {
            tmp11 = cResult[6];
          }
          if (cResult[7] === galleryWidth) {
            let tmp14;
            if (cResult[8] === tmp4.rowTile) {
              tmp14 = cResult[9];
            }
            let ringSelected = null;
            if (selected) {
              ringSelected = tmp4.ringSelected;
            }
            if (cResult[10] === tmp4.ring) {
              if (cResult[11] === tmp14) {
                if (cResult[14] === disabled) {
                  if (cResult[15] === onPick) {
                    let tmp27;
                    ({ accessibilityRole, accessibilityState } = radioA11yNative);
                    if (cResult[18] !== option.label) {
                      const intl2 = intl5.intl;
                      const obj2 = { answer: option.label };
                      cResult[18] = option.label;
                      cResult[19] = intl2.formatToPlainString(_modDef3723.AQbxhf, obj2);
                      const formatToPlainStringResult = intl2.formatToPlainString(_modDef3723.AQbxhf, obj2);
                    }
                    if (cResult[20] === onRemove) {
                      if (cResult[23] === onRemove) {
                        if (cResult[24] === onView) {
                          let tmp36;
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
                            tmp38[0] = projectId;
                            tmp38[1] = option.image.attachment_id;
                            tmp38[2] = disabled;
                            tmp38[3] = onMeasured;
                            tmp36 = authStore(closure_15, tmp38);
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
                            tmp35[0] = tmp4.frame;
                            tmp36 = authStore(metroImportAll, tmp35);
                          }
                          cResult[29] = disabled;
                          cResult[30] = onMeasured;
                          cResult[31] = option.image;
                          cResult[32] = projectId;
                          cResult[33] = tmp4.frame;
                          cResult[34] = tmp36;
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
                    if (null != onRemove) {
                      class V {
                        constructor(arg0) {
                          return onFrameHeight(onView.nativeEvent.layout.height);
                        }
                      }
                      const intl3 = intl5.intl;
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
                      tmp30[1] = intl3.string(_modDef3723.HQEXJM);
                      const items = [tmp30];
                      tmp27 = items;
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
                        tmp28[1] = tmp11;
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
                        tmp29[0] = tmp28;
                        tmp27 = tmp29;
                      }
                    }
                    cResult[20] = onRemove;
                    cResult[21] = option.image;
                    cResult[22] = tmp27;
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
                cResult[17] = tmp22;
              }
            }
            const items1 = [tmp14, tmp4.ring, ringSelected];
            cResult[10] = tmp4.ring;
            cResult[11] = tmp14;
            cResult[12] = ringSelected;
            cResult[13] = items1;
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
          cResult[8] = tmp4.rowTile;
          cResult[9] = tmp16;
          tmp14 = tmp16;
        }
        const obj3 = { selected, disabled };
        cResult[3] = disabled;
        cResult[4] = selected;
        cResult[5] = obj3;
        tmp8 = obj3;
      }
      const obj4 = { checked: selected, disabled };
      cResult[0] = disabled;
      cResult[1] = selected;
      cResult[2] = obj4;
    }
  : (option) => {
      let IconButton;
      let closure_129_1;
      let closure_129_2;
      let closure_129_3;
      let disabled;
      let fn;
      let frameHeight;
      let galleryWidth;
      let intl2;
      let intl3;
      let intl4;
      let items3;
      let items4;
      let items5;
      let items6;
      let multi;
      let obj19;
      let obj20;
      let obj7;
      let onMeasured;
      let onRemove;
      let projectId;
      let rowTile;
      let selected;
      let tmp11;
      let tmp12;
      let tmp12Result;
      let tmp12Result3;
      let tmp13;
      let tmp2Result;
      option = option.option;
      ({
        multi,
        galleryWidth,
        selected,
        disabled,
        frameHeight,
        onFrameHeight: closure_129_1,
        onPick: closure_129_2,
        onView: closure_129_3,
        onRemove,
      } = option);
      ({ projectId, onMeasured } = option);
      const tmp = closure_14();
      const obj = react_native;
      const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected, disabled });
      const obj2 = react_native;
      let radioA11yNative = obj2.useRadioA11yNative({ selected, disabled });
      if (multi) {
        radioA11yNative = checkboxA11yNative;
      }
      const intl = intl5.intl;
      const stringResult = intl.string(_modDef3723["4/eeDD"]);
      if (null != galleryWidth) {
        rowTile = { width: galleryWidth };
        const obj3 = { width: galleryWidth };
      } else {
        rowTile = tmp.rowTile;
      }
      const items = [rowTile, tmp.ring];
      let ringSelected = null;
      if (selected) {
        ringSelected = tmp.ringSelected;
      }
      const obj4 = { style: items, children: items5 };
      items[2] = ringSelected;
      const obj6 = {
        style: tmp.card,
        onPress: fn,
        accessibilityRole: null,
        accessibilityState: null,
        accessibilityLabel: intl2.formatToPlainString(_modDef3723.AQbxhf, obj7),
        accessibilityActions: tmp11,
        onAccessibilityAction(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          if ("view" === nativeEvent.actionName) {
            closure_1_3(option);
          }
          if ("remove" === nativeEvent.actionName) {
            if (onRemove != null) {
              tmp4();
            }
          }
        },
        children: items4,
      };
      fn = undefined;
      const Card = Card_Card.Card;
      if (!disabled) {
        fn = () => closure_1_2(option);
      }
      ({ accessibilityRole: obj5.accessibilityRole, accessibilityState: obj5.accessibilityState } = radioA11yNative);
      intl2 = intl5.intl;
      obj7 = { answer: option.label };
      if (null != onRemove) {
        const obj8 = { name: "remove", label: intl3.string(_modDef3723.HQEXJM) };
        intl3 = intl5.intl;
        const items1 = [obj8];
        tmp11 = items1;
      } else if (null != option.image) {
        const items2 = [{ name: "view", label: stringResult }];
        tmp11 = items2;
        const obj9 = { name: "view", label: stringResult };
      }
      const obj10 = {
        onLayout(nativeEvent) {
          return closure_1_1(nativeEvent.nativeEvent.layout.height);
        },
        children: items3,
      };
      if (null != option.image) {
        const obj11 = { projectId, attachmentId: option.image.attachment_id, inert: disabled, onMeasured };
        tmp13 = authStore(closure_15, obj11);
        tmp12 = authStore;
      } else {
        tmp12 = authStore;
        const obj12 = { style: tmp.frame };
        tmp13 = authStore(metroImportAll, obj12);
      }
      items3 = [tmp13];
      if (multi) {
        const obj13 = { style: tmp.indicator, children: tmp12Result };
        if (multi) {
          const obj14 = { checked: selected };
          tmp12Result = tmp12(FormCheckbox.FormCheckbox, obj14);
        } else {
          const obj15 = { selected };
          tmp12Result = tmp12(FormRadio.FormRadio, obj15);
        }
        tmp12Result3 = tmp12(metroImportAll, obj13);
      } else {
        tmp12Result3 = null;
      }
      items3[1] = tmp12Result3;
      items4 = [unpackModuleId(metroImportAll, obj10)];
      const obj16 = {
        variant: "text-xs/normal",
        color: "text-muted",
        lineClamp: 1,
        style: tmp.caption,
        children: tmp2Result.imageOptionCaption(option),
      };
      const Text = Text_Text.Text;
      tmp2Result = ConjureImageOptions;
      items4[1] = tmp12(Text, obj16);
      items5 = [unpackModuleId(Card, obj6)];
      let tmp12Result4 = null;
      if (null != option.image) {
        tmp12Result4 = null;
        if (null != frameHeight) {
          let MaximizeIcon;
          const obj17 = {
            style: items6,
            importantForAccessibility: "no-hide-descendants",
            accessibilityElementsHidden: true,
            children: tmp12(IconButton, obj19),
          };
          items6 = [tmp.view];
          items6[1] = { top: frameHeight - nativeDefault.space.PX_32 };
          const obj18 = { top: frameHeight - nativeDefault.space.PX_32 };
          IconButton = IconButton2.IconButton;
          if (null != onRemove) {
            MaximizeIcon = TrashIcon.TrashIcon;
          } else {
            MaximizeIcon = MaximizeIcon2.MaximizeIcon;
          }
          obj19 = {
            icon: tmp12(MaximizeIcon, { size: "xs" }),
            size: "sm",
            variant: "secondary-overlay",
            onPress: onRemove,
            accessibilityLabel: intl4.formatToPlainString(_modDef3723.JGjZMs, obj20),
          };
          if (null == onRemove) {
            onRemove = () => closure_1_3(option);
          }
          intl4 = intl5.intl;
          obj20 = { answer: option.label };
          tmp12Result4 = tmp12(metroImportAll, obj17);
        }
      }
      items5[1] = tmp12Result4;
      return unpackModuleId(metroImportAll, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (projectId) {
      let closure_10;
      let disabled;
      let maxResult;
      let multi;
      let question;
      let selectedIds;
      let tmp15;
      let tmp19;
      let tmp6;
      let tmp8;
      let obj = projectId(disabled[9]);
      const cResult = obj.c(57);
      const tmp = projectId;
      projectId = projectId.projectId;
      ({ question, selectedIds } = projectId);
      disabled = projectId.disabled;
      const onPick = projectId.onPick;
      const own = projectId.own;
      maxResult();
      react = tmp5;
      const options = question.options;
      if (cResult[0] !== options) {
        const tmpResult = tmp(disabled[18]);
        const imageOptionsLayoutResult = tmpResult.imageOptionsLayout(options);
        cResult[0] = options;
        cResult[1] = imageOptionsLayoutResult;
        tmp6 = imageOptionsLayoutResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map();
        cResult[2] = map;
        tmp8 = map;
      } else {
        tmp8 = cResult[2];
      }
      let closure_7 = react.useRef(tmp8);
      const tmp11 = own(react.useState(null), 2);
      const frameHeight = tmp11[0];
      const onFrameHeight = tmp13;
      [tmp15, closure_10] = own(react.useState(null), 2);
      own(react.useState(null), 2);
      const ref = react.useRef(null);
      const image = own.image;
      let id;
      const obj3 = react;
      if (image != null) {
        id = image.attachment.id;
      }
      if (cResult[3] !== id) {
        class O {
          constructor() {
            if (null != id) {
              const current = ref.current;
              if (current != null) {
                current.scrollToEnd({ animated: true });
              }
            }
          }
        }
        const items = [id];
        cResult[3] = id;
        cResult[4] = O;
        cResult[5] = items;
        tmp19 = items;
      } else {
        class O {
          constructor() {
            if (null != id) {
              const current = ref.current;
              if (current != null) {
                current.scrollToEnd({ animated: true });
              }
            }
          }
        }
        tmp19 = cResult[5];
      }
      const effect = obj3.useEffect(O, tmp19);
      const length = options.length;
      if (null != own.image) {
        class O {
          constructor() {
            if (null != id) {
              const current = ref.current;
              if (current != null) {
                current.scrollToEnd({ animated: true });
              }
            }
          }
        }
      }
      const sum = length;
      let tmp22 = null != tmp15;
      if (tmp22) {
        class O {
          constructor() {
            if (null != id) {
              const current = ref.current;
              if (current != null) {
                current.scrollToEnd({ animated: true });
              }
            }
          }
        }
        tmp22 = (tmp15 - selectedIds(tmp2[7]).space.PX_8 * (sum - 1)) / sum < closure_13;
      }
      closure_13 = tmp24;
      const _Math = Math;
      const _Math2 = Math;
      const tmp25 = closure_13;
      if (tmp15 == null) {
        class O {
          constructor() {
            if (null != id) {
              const current = ref.current;
              if (current != null) {
                current.scrollToEnd({ animated: true });
              }
            }
          }
        }
      }
      maxResult = max(tmp25, min(136, (tmp15 - 2 * selectedIds(disabled[7]).space.PX_8) / 2.4));
      if (cResult[6] === options) {
        class O {
          constructor() {
            if (null != id) {
              const current = ref.current;
              if (current != null) {
                current.scrollToEnd({ animated: true });
              }
            }
          }
        }
        const onView = G;
        if (cResult[9] === disabled) {
          class O {
            constructor() {
              if (null != id) {
                const current = ref.current;
                if (current != null) {
                  current.scrollToEnd({ animated: true });
                }
              }
            }
          }
        }
        let mapped = options.map((option) => {
          let tmp3;
          projectId = option;
          const obj = {
            projectId,
            option,
            multi,
            galleryWidth: tmp3,
            selected: selectedIds.includes(option.id),
            disabled,
            frameHeight,
            onFrameHeight,
            onMeasured(arg0) {
              const current = ref.current;
              return current.set(option.id, arg0);
            },
            onPick,
            onView,
          };
          tmp3 = null;
          if (closure_13) {
            tmp3 = closure_14;
          }
          return closure_10(closure_1_16, obj, option.id);
        });
        if (null != own.image) {
          class O {
            constructor() {
              if (null != id) {
                const current = ref.current;
                if (current != null) {
                  current.scrollToEnd({ animated: true });
                }
              }
            }
          }
          if ("gallery" === tmp6 || tmp22) {
            class O {
              constructor() {
                if (null != id) {
                  const current = ref.current;
                  if (current != null) {
                    current.scrollToEnd({ animated: true });
                  }
                }
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor() {
                if (null != id) {
                  const current = ref.current;
                  if (current != null) {
                    current.scrollToEnd({ animated: true });
                  }
                }
              }
            }
            cResult[26] = tmp33;
          } else {
            class O {
              constructor() {
                if (null != id) {
                  const current = ref.current;
                  if (current != null) {
                    current.scrollToEnd({ animated: true });
                  }
                }
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor() {
                if (null != id) {
                  const current = ref.current;
                  if (current != null) {
                    current.scrollToEnd({ animated: true });
                  }
                }
              }
            }
            cResult[27] = tmp35;
          } else {
            class O {
              constructor() {
                if (null != id) {
                  const current = ref.current;
                  if (current != null) {
                    current.scrollToEnd({ animated: true });
                  }
                }
              }
            }
          }
          if (cResult[28] === disabled) {
            class O {
              constructor() {
                if (null != id) {
                  const current = ref.current;
                  if (current != null) {
                    current.scrollToEnd({ animated: true });
                  }
                }
              }
            }
          }
          let obj2 = {
            projectId,
            option: tmp30,
            multi: true === question.multi_select,
            galleryWidth: null,
            selected: own.selected,
            disabled,
            frameHeight,
            onFrameHeight: tmp11[1],
            onMeasured: tmp33,
            onPick: own.onPick,
            onView: tmp35,
            onRemove: own.onRemove,
          };
          cResult[28] = disabled;
          cResult[29] = frameHeight;
          cResult[30] = true === question.multi_select;
          cResult[31] = own.onPick;
          cResult[32] = own.onRemove;
          cResult[33] = own.selected;
          cResult[34] = tmp30;
          cResult[35] = projectId;
          cResult[36] = null;
          cResult[37] = closure_10(closure_16, obj2, tmp30.id);
          const tmp39 = closure_10(closure_16, obj2, tmp30.id);
        }
        cResult[9] = disabled;
        cResult[10] = frameHeight;
        cResult[11] = maxResult;
        cResult[12] = true === question.multi_select;
        cResult[13] = onPick;
        cResult[14] = options;
        cResult[15] = own.image;
        cResult[16] = own.onPick;
        cResult[17] = own.onRemove;
        cResult[18] = own.selected;
        cResult[19] = projectId;
        cResult[20] = "gallery" === tmp6 || tmp22;
        cResult[21] = selectedIds;
        cResult[22] = G;
        cResult[23] = mapped;
      }
      class G {
        constructor(arg0) {
          closure_0 = projectId;
          obj = projectId(disabled[18]);
          viewableImageOptionsResult = obj.viewableImageOptions(options);
          closure_1 = viewableImageOptionsResult;
          findIndexResult = viewableImageOptionsResult.findIndex((id) => id.id === id.id);
          closure_2 = findIndexResult;
          if (findIndexResult >= 0) {
            tmp2 = globalThis;
            _Promise = Promise;
            allPromises = Promise.all(
              viewableImageOptionsResult.map((image) => onFrameHeight(id, image.image.attachment_id)),
            );
            nextPromise = allPromises.then(
              (arr) => {
                const mapped = arr.map((uri, mediaIndex) => {
                  let height;
                  let width;
                  const current = ref.current;
                  const value = current.get(closure_1_1[mediaIndex].id);
                  let result = null;
                  if (null != value) {
                    const obj = projectId(disabled[18]);
                    result = obj.imageOptionViewerSize(value);
                  }
                  size = {
                    uri,
                    mediaIndex,
                    width,
                    height,
                    accessoryType: "embed",
                    description: closure_1_1[mediaIndex].label,
                    disableDownload: true,
                  };
                  width = undefined;
                  if (result != null) {
                    width = result.width;
                  }
                  if (width == null) {
                    width = id;
                  }
                  height = undefined;
                  if (result != null) {
                    height = result.height;
                  }
                  if (height == null) {
                    height = id;
                  }
                  return size;
                });
                let obj = openMediaModal;
                const obj2 = {
                  initialSources: mapped,
                  initialIndex: findIndexResult,
                  analyticsSource: "VibegrationsClarificationImageOptions",
                  shareable: false,
                  disableDownload: true,
                  disableMediaOverlayButton: true,
                  disableMediaOverlayFooter: true,
                };
                obj.openMediaModal(obj2);
              },
              () => {},
            );
          }
          return;
        }
      }
      cResult[6] = options;
      cResult[7] = projectId;
      cResult[8] = G;
    }
  : (projectId) => {
      let _undefined;
      let c10;
      let disabled;
      let items3;
      let items4;
      let multi;
      let num;
      let onPick;
      let own;
      let question;
      let tmp21;
      let tmp25Result;
      let tmp27;
      let tmp3Result2;
      projectId = projectId.projectId;
      ({ question, selectedIds: importDefault, disabled } = projectId);
      ({ onPick: _asyncToGenerator, own } = projectId);
      c10 = undefined;
      let closure_13;
      let c14;
      let onView;
      closure_16 = undefined;
      let tmp = c14();
      react = tmp2;
      const options = question.options;
      let tmp3 = projectId;
      let obj = projectId(disabled[18]);
      let obj2 = react;
      const useRef = react.useRef;
      const imageOptionsLayoutResult = obj.imageOptionsLayout(options);
      map = new Map();
      let closure_7 = useRef(map);
      const tmp7 = own(react.useState(null), 2);
      const frameHeight = tmp7[0];
      const onFrameHeight = tmp9;
      [num, c10] = own(react.useState(null), 2);
      own(react.useState(null), 2);
      const ref = react.useRef(null);
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
      const length = options.length;
      if (null != own.image) {
        num2 = 1;
      }
      const sum = length + num2;
      let tmp15 = null != num;
      if (tmp15) {
        tmp15 = (num - require("native").space.PX_8 * (sum - 1)) / sum < closure_13;
      }
      closure_13 = tmp18;
      const _Math = Math;
      const _Math2 = Math;
      const tmp19 = closure_13;
      const maxResult = max(tmp19, min(136, (num - 2 * require("native").space.PX_8) / 2.4));
      c14 = maxResult;
      const items1 = [options, projectId];
      onView = obj2.useCallback((arg0) => {
        id = arg0;
        let obj = projectId(disabled[18]);
        const viewableImageOptionsResult = obj.viewableImageOptions(options);
        let closure_1 = viewableImageOptionsResult;
        const findIndexResult = viewableImageOptionsResult.findIndex((id) => id.id === id.id);
        disabled = findIndexResult;
        if (findIndexResult >= 0) {
          const allPromises = Promise.all(
            viewableImageOptionsResult.map((image) => onFrameHeight(id, image.image.attachment_id)),
          );
          allPromises.then(
            (arr) => {
              const mapped = arr.map((uri, mediaIndex) => {
                let height;
                let width;
                const current = ref.current;
                const value = current.get(closure_1_1[mediaIndex].id);
                let result = null;
                if (null != value) {
                  const obj = projectId(disabled[18]);
                  result = obj.imageOptionViewerSize(value);
                }
                size = {
                  uri,
                  mediaIndex,
                  width,
                  height,
                  accessoryType: "embed",
                  description: closure_1_1[mediaIndex].label,
                  disableDownload: true,
                };
                width = undefined;
                if (result != null) {
                  width = result.width;
                }
                if (width == null) {
                  width = id;
                }
                height = undefined;
                if (result != null) {
                  height = result.height;
                }
                if (height == null) {
                  height = id;
                }
                return size;
              });
              let obj = openMediaModal;
              const obj2 = {
                initialSources: mapped,
                initialIndex: findIndexResult,
                analyticsSource: "VibegrationsClarificationImageOptions",
                shareable: false,
                disableDownload: true,
                disableMediaOverlayButton: true,
                disableMediaOverlayFooter: true,
              };
              obj.openMediaModal(obj2);
            },
            () => {},
          );
        }
      }, items1);
      let mapped = options.map((option) => {
        let tmp3;
        projectId = option;
        const obj = {
          projectId,
          option,
          multi,
          galleryWidth: tmp3,
          selected: closure_1.includes(option.id),
          disabled,
          frameHeight,
          onFrameHeight,
          onMeasured(arg0) {
            const current = ref.current;
            return current.set(option.id, arg0);
          },
          onPick,
          onView,
        };
        tmp3 = null;
        if (closure_13) {
          tmp3 = c14;
        }
        return _undefined(closure_16, obj, option.id);
      });
      if (null != own.image) {
        const tmp3Result = tmp3(disabled[18]);
        const ownImageOptionResult = tmp3Result.ownImageOption(own.image);
        let obj3 = {
          projectId,
          option: ownImageOptionResult,
          multi: tmp2,
          galleryWidth: tmp21,
          selected: own.selected,
          disabled,
          frameHeight,
          onFrameHeight: tmp9,
          onMeasured() {},
          onPick: own.onPick,
          onView() {},
          onRemove: own.onRemove,
        };
        tmp21 = null;
        const push = mapped.push;
        const tmp32 = c10;
        const tmp33 = closure_16;
        if ("gallery" === imageOptionsLayoutResult || tmp15) {
          tmp21 = maxResult;
        }
        const arr = push(tmp32(tmp33, obj3, ownImageOptionResult.id));
      }
      const items2 = [own, projectId];
      closure_16 = obj2.useCallback(
        _asyncToGenerator(async () => {
          let c2;
          let closure_0;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
              let tmp;
              let closure_1;
              c3 = 2;
              if (0 === disabled) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  tmp = undefined;
                  closure_1 = undefined;
                  const obj3 = tmp(disabled[24]);
                  disabled = 1;
                  c3 = 1;
                  const obj5 = { value: obj3.pickConjurePhotos("photo", 1), done: false };
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
                tmp = value;
                closure_1 = own(tmp, 1)[0];
                if (null != closure_1) {
                  const onUpload = closure_129_4.onUpload;
                  const obj = tmp(disabled[24]);
                  onUpload(obj.uploadConjurePickedFile(closure_129_0, closure_1));
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp15) {
              c3 = 3;
              throw tmp15;
            }
          }
        }),
        items2,
      );
      let obj4 = {
        onLayout(nativeEvent) {
          return _undefined(nativeEvent.nativeEvent.layout.width);
        },
        children: items3,
      };
      if ("gallery" === imageOptionsLayoutResult || tmp15) {
        let obj5 = {
          ref,
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          contentContainerStyle: tmp.galleryContent,
          children: mapped,
        };
        tmp25Result = tmp25(closure_7, obj5);
        tmp27 = tmp25;
      } else {
        let obj6 = { style: tmp.row, children: mapped };
        tmp25Result = tmp25(tmp24, obj6);
        tmp27 = tmp25;
      }
      items3 = [tmp25Result];
      let tmp23Result = null;
      if (!disabled) {
        const obj7 = { style: tmp.own, children: items4 };
        const obj8 = {
          variant: "secondary",
          size: "sm",
          icon: tmp27(tmp3(disabled[26]).ImagePlusIcon, { size: "xs" }),
          text: tmp3Result2.ownImageUploadText(question),
          loading: "upload" === own.busy,
          onPress() {
            const promise = closure_16();
            promise.catch(() => {});
          },
        };
        const Button = tmp3(disabled[25]).Button;
        tmp3Result2 = tmp3(disabled[18]);
        items4 = [tmp27(Button, obj8)];
        let tmp27Result = null;
        if (null != own.error) {
          const obj9 = {
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            accessibilityLiveRegion: "polite",
            children: own.error.text,
          };
          tmp27Result = tmp27(tmp3(disabled[14]).Text, obj9);
        }
        items4[1] = tmp27Result;
        tmp23Result = tmp23(tmp24, obj7);
      }
      items3[1] = tmp23Result;
      return ref(frameHeight, obj4);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureImageOptions.tsx");

export default tmp5;
