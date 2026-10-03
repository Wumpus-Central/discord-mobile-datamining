// discord_app/modules/interaction_components/native/InteractionModal.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import ComponentStateContext from "../ComponentStateContext.tsx";
import InteractionModalUtils from "../InteractionModalUtils.tsx";
import renderComponents from "renderComponents.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function onClose() {
  return ModalActionCreatorsDefault.popWithKey(interaction_modal);
}
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const InteractionModalState = fn(14160).InteractionModalState;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const interaction_modal = "interaction_modal";
const createStyles = fn(4890);
let obj2 = {
  modal: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
  scroll: { flex: 1 },
  modalContent: null,
  header: null,
  titleView: null,
  icon: null,
  footer: null,
  closeButton: null,
  closeIcon: null,
  error: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.modalContent = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj4 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.header = {
  flexDirection: "row",
  marginBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.titleView = { flex: 1 };
let obj5 = {
  flexDirection: "row",
  marginBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.icon = { marginRight: nativeDefault.space.PX_8 };
let obj6 = { marginRight: nativeDefault.space.PX_8 };
obj2.footer = { marginTop: "auto", marginBottom: nativeDefault.space.PX_16 };
obj2.closeButton = { marginLeft: "auto" };
let obj7 = { marginTop: "auto", marginBottom: nativeDefault.space.PX_16 };
obj2.closeIcon = { color: nativeDefault.colors.TEXT_MUTED };
let obj8 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.error = { marginBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (title) => {
      const cResult = c.c(63);
      const tmp4 = closure_9();
      title = title.title;
      const modalState = InteractionModalUtils.useModalState(title, onClose);
      ({
        components,
        applicationIconURL,
        applicationName,
        error,
        validators,
        validationErrors,
        setValidationErrors,
        onSubmit,
      } = modalState);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { includeKeyboardHeight: true };
        cResult[0] = obj3;
        let first = obj3;
      } else {
        first = cResult[0];
      }
      const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
      if (cResult[1] === insets.bottom) {
        if (cResult[2] === insets.top) {
          let tmp9 = cResult[3];
        }
        if (cResult[4] === tmp4.modal) {
          if (cResult[5] === tmp9) {
            let tmp10 = cResult[6];
          }
          ({ header, icon } = tmp4);
          if (cResult[7] !== applicationIconURL) {
            const source = AvatarUtilsDefault.makeSource(applicationIconURL);
            cResult[7] = applicationIconURL;
            cResult[8] = source;
            let tmp11 = source;
            const tmp8Result = AvatarUtilsDefault;
          } else {
            tmp11 = cResult[8];
          }
          if (cResult[9] === tmp4.icon) {
            if (cResult[10] === tmp11) {
              let tmp13 = cResult[11];
            }
            if (cResult[12] !== title) {
              const obj4 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: title };
              const tmp18 = timestampProducer(Text_Text.Text, obj4);
              cResult[12] = title;
              cResult[13] = tmp18;
              let tmp16 = tmp18;
            } else {
              tmp16 = cResult[13];
            }
            if (cResult[14] === tmp4.titleView) {
              if (cResult[15] === tmp16) {
                let tmp19 = cResult[16];
              }
              const _Symbol = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = util.intl;
                const stringResult = intl.string(util.t.cpT0Cq);
                cResult[17] = stringResult;
                let tmp23 = stringResult;
              } else {
                tmp23 = cResult[17];
              }
              if (cResult[18] !== tmp4.closeIcon.color) {
                const obj5 = { color: tmp4.closeIcon.color };
                const tmp27 = timestampProducer(XSmallIcon.XSmallIcon, obj5);
                cResult[18] = tmp4.closeIcon.color;
                cResult[19] = tmp27;
                let tmp25 = tmp27;
              } else {
                tmp25 = cResult[19];
              }
              if (cResult[20] === tmp4.closeButton) {
                if (cResult[21] === tmp25) {
                  let tmp28 = cResult[22];
                }
                if (cResult[23] === tmp4.header) {
                  if (cResult[24] === tmp28) {
                    if (cResult[25] === tmp13) {
                      if (cResult[26] === tmp19) {
                        let tmp31 = cResult[27];
                      }
                      if (cResult[28] === error) {
                        if (cResult[29] === tmp4.error) {
                          let tmp37 = cResult[30];
                        }
                        if (cResult[31] !== applicationName) {
                          const intl2 = util.intl;
                          const obj6 = { applicationName };
                          const formatResult = intl2.format(util.t["dSTy/w"], obj6);
                          cResult[31] = applicationName;
                          cResult[32] = formatResult;
                          let tmp42 = formatResult;
                        } else {
                          tmp42 = cResult[32];
                        }
                        if (cResult[33] !== tmp42) {
                          const obj7 = { messageType: native.HelpMessageTypes.WARNING, children: tmp42 };
                          const tmp46 = timestampProducer(native.HelpMessage, obj7);
                          cResult[33] = tmp42;
                          cResult[34] = tmp46;
                          let tmp44 = tmp46;
                        } else {
                          tmp44 = cResult[34];
                        }
                        if (cResult[35] === tmp37) {
                          if (cResult[36] === tmp44) {
                            let tmp47 = cResult[37];
                          }
                          if (cResult[38] !== components) {
                            const renderComponentsResult = renderComponents.renderComponents(components);
                            cResult[38] = components;
                            cResult[39] = renderComponentsResult;
                            let tmp51 = renderComponentsResult;
                            const tmpResult = renderComponents;
                          } else {
                            tmp51 = cResult[39];
                          }
                          if (cResult[40] === title) {
                            if (cResult[41] === setValidationErrors) {
                              if (cResult[42] === tmp51) {
                                if (cResult[43] === validationErrors) {
                                  if (cResult[44] === validators) {
                                    let tmp53 = cResult[45];
                                  }
                                  const _Symbol2 = Symbol;
                                  if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                                    const intl3 = util.intl;
                                    const stringResult1 = intl3.string(util.t.geKm7t);
                                    cResult[46] = stringResult1;
                                    let tmp56 = stringResult1;
                                  } else {
                                    tmp56 = cResult[46];
                                  }
                                  if (cResult[47] === onSubmit) {
                                    if (cResult[48] === tmp59) {
                                      let tmp60 = cResult[49];
                                    }
                                    if (cResult[50] === tmp4.footer) {
                                      if (cResult[51] === tmp60) {
                                        let tmp63 = cResult[52];
                                      }
                                      if (cResult[53] === tmp4.modalContent) {
                                        if (cResult[54] === tmp4.scroll) {
                                          if (cResult[55] === tmp47) {
                                            if (cResult[56] === tmp53) {
                                              if (cResult[57] === tmp63) {
                                                let tmp67 = cResult[58];
                                              }
                                              if (cResult[59] === tmp31) {
                                                if (cResult[60] === tmp10) {
                                                  if (cResult[61] === tmp67) {
                                                    let tmp71 = cResult[62];
                                                  }
                                                  return tmp71;
                                                }
                                              }
                                              const obj8 = { style: tmp10, children: null };
                                              const items = [tmp31, tmp67];
                                              obj8.children = items;
                                              const tmp74 = React5(React3, obj8);
                                              cResult[59] = tmp31;
                                              cResult[60] = tmp10;
                                              cResult[61] = tmp67;
                                              cResult[62] = tmp74;
                                              tmp71 = tmp74;
                                            }
                                          }
                                        }
                                      }
                                      const obj9 = {
                                        style: tmp35,
                                        contentContainerStyle: tmp36,
                                        keyboardShouldPersistTaps: "handled",
                                        children: null,
                                      };
                                      const items1 = [tmp47, tmp53, tmp63];
                                      obj9.children = items1;
                                      const tmp70 = React5(React4, obj9);
                                      cResult[53] = tmp4.modalContent;
                                      cResult[54] = tmp4.scroll;
                                      cResult[55] = tmp47;
                                      cResult[56] = tmp53;
                                      cResult[57] = tmp63;
                                      cResult[58] = tmp70;
                                      tmp67 = tmp70;
                                    }
                                    const obj10 = { style: tmp4.footer, children: tmp60 };
                                    const tmp66 = timestampProducer(React3, obj10);
                                    cResult[50] = tmp4.footer;
                                    cResult[51] = tmp60;
                                    cResult[52] = tmp66;
                                    tmp63 = tmp66;
                                  }
                                  const obj11 = {
                                    text: tmp56,
                                    loading: modalState.submissionState === InteractionModalState.IN_FLIGHT,
                                    size: "lg",
                                    onPress: onSubmit,
                                  };
                                  const tmp62 = timestampProducer(components_Button_Button.Button, obj11);
                                  cResult[47] = onSubmit;
                                  cResult[48] = modalState.submissionState === InteractionModalState.IN_FLIGHT;
                                  cResult[49] = tmp62;
                                  tmp60 = tmp62;
                                }
                              }
                            }
                          }
                          const obj12 = {
                            modal: title,
                            validators,
                            validationErrors,
                            setValidationErrors,
                            children: tmp51,
                          };
                          const tmp55 = timestampProducer(ComponentStateContext.ComponentStateContextProvider, obj12);
                          cResult[40] = title;
                          cResult[41] = setValidationErrors;
                          cResult[42] = tmp51;
                          cResult[43] = validationErrors;
                          cResult[44] = validators;
                          cResult[45] = tmp55;
                          tmp53 = tmp55;
                        }
                        const obj13 = { children: null };
                        const items2 = [tmp37, tmp44];
                        obj13.children = items2;
                        const tmp50 = React5(React3, obj13);
                        cResult[35] = tmp37;
                        cResult[36] = tmp44;
                        cResult[37] = tmp50;
                        tmp47 = tmp50;
                      }
                      let tmp39 = null;
                      if (null != error) {
                        tmp39 = null;
                        if ("" !== error) {
                          const obj14 = { style: tmp4.error, children: null };
                          const obj15 = { messageType: native.HelpMessageTypes.ERROR, children: error };
                          obj14.children = timestampProducer(native.HelpMessage, obj15);
                          tmp39 = timestampProducer(React3, obj14);
                        }
                      }
                      cResult[28] = error;
                      cResult[29] = tmp4.error;
                      cResult[30] = tmp39;
                      tmp37 = tmp39;
                    }
                  }
                }
                const obj16 = { style: header, children: null };
                const items3 = [tmp13, tmp19, tmp28];
                obj16.children = items3;
                const tmp34 = React5(React3, obj16);
                cResult[23] = tmp4.header;
                cResult[24] = tmp28;
                cResult[25] = tmp13;
                cResult[26] = tmp19;
                cResult[27] = tmp34;
                tmp31 = tmp34;
              }
              const obj17 = {
                accessibilityRole: "button",
                accessibilityLabel: tmp23,
                onPress: onClose,
                style: tmp4.closeButton,
                children: tmp25,
              };
              const tmp30 = timestampProducer(Pressables.PressableOpacity, obj17);
              cResult[20] = tmp4.closeButton;
              cResult[21] = tmp25;
              cResult[22] = tmp30;
              tmp28 = tmp30;
            }
            const obj18 = { style: tmp4.titleView, children: tmp16 };
            const tmp22 = timestampProducer(React3, obj18);
            cResult[14] = tmp4.titleView;
            cResult[15] = tmp16;
            cResult[16] = tmp22;
            tmp19 = tmp22;
          }
          const obj19 = { style: icon, source: tmp11, size: native.AvatarSizes.SMALL };
          const tmp15 = timestampProducer(native.Avatar, obj19);
          cResult[9] = tmp4.icon;
          cResult[10] = tmp11;
          cResult[11] = tmp15;
          tmp13 = tmp15;
        }
        const items4 = [tmp4.modal, tmp9];
        cResult[4] = tmp4.modal;
        cResult[5] = tmp9;
        cResult[6] = items4;
        tmp10 = items4;
      }
      const obj20 = { paddingTop: insets.top, paddingBottom: insets.bottom };
      cResult[1] = insets.bottom;
      cResult[2] = insets.top;
      cResult[3] = obj20;
      tmp9 = obj20;
    }
  : (children) => {
      const tmp = closure_9();
      const modalState = InteractionModalUtils.useModalState(children, onClose);
      const error = modalState.error;
      ({
        components,
        applicationIconURL,
        applicationName,
        submissionState,
        validators,
        validationErrors,
        setValidationErrors,
        onSubmit,
      } = modalState);
      const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
      const obj2 = { style: null, children: null };
      const items = [tmp.modal, { paddingTop: insets.top, paddingBottom: insets.bottom }];
      obj2.style = items;
      const obj3 = { style: tmp.header, children: null };
      const obj4 = { style: tmp.icon, source: null, size: null };
      obj4.source = AvatarUtilsDefault.makeSource(applicationIconURL);
      obj4.size = native.AvatarSizes.SMALL;
      const items1 = [timestampProducer(native.Avatar, obj4), ,];
      items1[1] = timestampProducer(React3, {
        style: tmp.titleView,
        children: timestampProducer(Text_Text.Text, {
          variant: "heading-xl/semibold",
          color: "mobile-text-heading-primary",
          children: children.title,
        }),
      });
      const obj7 = {
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        style: null,
        children: null,
      };
      const intl = util.intl;
      obj7.accessibilityLabel = intl.string(util.t.cpT0Cq);
      obj7.onPress = onClose;
      obj7.style = tmp.closeButton;
      obj7.children = timestampProducer(XSmallIcon.XSmallIcon, { color: tmp.closeIcon.color });
      items1[2] = timestampProducer(Pressables.PressableOpacity, obj7);
      obj3.children = items1;
      const items2 = [React5(React3, obj3)];
      const obj9 = {
        style: tmp.scroll,
        contentContainerStyle: tmp.modalContent,
        keyboardShouldPersistTaps: "handled",
        children: null,
      };
      let tmp7Result = null;
      if (null != error) {
        tmp7Result = null;
        if ("" !== error) {
          const obj10 = { style: tmp.error, children: null };
          const obj11 = { messageType: native.HelpMessageTypes.ERROR, children: error };
          obj10.children = timestampProducer(native.HelpMessage, obj11);
          tmp7Result = timestampProducer(React3, obj10);
        }
      }
      const obj12 = { children: null };
      const items3 = [tmp7Result];
      const obj13 = { messageType: native.HelpMessageTypes.WARNING, children: null };
      const intl2 = util.intl;
      obj13.children = intl2.format(util.t["dSTy/w"], { applicationName });
      items3[1] = timestampProducer(native.HelpMessage, obj13);
      obj12.children = items3;
      const items4 = [React5(React3, obj12), ,];
      const obj14 = { modal: children, validators, validationErrors, setValidationErrors, children: null };
      const obj6 = {
        style: tmp.titleView,
        children: timestampProducer(Text_Text.Text, {
          variant: "heading-xl/semibold",
          color: "mobile-text-heading-primary",
          children: children.title,
        }),
      };
      const obj8 = { color: tmp.closeIcon.color };
      obj14.children = renderComponents.renderComponents(components);
      items4[1] = timestampProducer(ComponentStateContext.ComponentStateContextProvider, obj14);
      const obj15 = { style: tmp.footer, children: null };
      const obj16 = { text: null, loading: null, size: "lg", onPress: null };
      const intl3 = util.intl;
      obj16.text = intl3.string(util.t.geKm7t);
      obj16.loading = submissionState === InteractionModalState.IN_FLIGHT;
      obj16.onPress = onSubmit;
      obj15.children = timestampProducer(components_Button_Button.Button, obj16);
      items4[2] = timestampProducer(React3, obj15);
      obj9.children = items4;
      items2[1] = React5(React4, obj9);
      obj2.children = items2;
      return React5(React3, obj2);
    };
let closure_11 = tmp5;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/InteractionModal.tsx");

export default tmp5;
export const openInteractionModal = function openInteractionModal(arg0) {
  ModalActionCreatorsDefault.push(closure_11, arg0, interaction_modal);
};
