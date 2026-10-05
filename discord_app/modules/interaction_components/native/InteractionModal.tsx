// === Module 17519: InteractionModal ===

// Module 17519 (InteractionModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Text_Text from "Text/Text" /* 4886 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import Pressables from "Pressables" /* 5909 */;
import XSmallIcon from "XSmallIcon" /* 6017 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import ComponentStateContext from "ComponentStateContext" /* 7795 */;
import InteractionModalStore from "InteractionModalStore" /* 14162 */;
import InteractionModalUtils from "InteractionModalUtils" /* 17520 */;
import renderComponents from "renderComponents" /* 17521 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
function onClose() {
  const obj = ModalActionCreatorsDefault;
  return obj.popWithKey(interaction_modal);
}
({ View: c3, ScrollView: closure_4 } = react_native);
const InteractionModalState = InteractionModalStore.InteractionModalState;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const interaction_modal = "interaction_modal";
let createStyles = createStyles_mod;
let obj = { modal: obj2, scroll: { flex: 1 }, modalContent: obj3, header: obj4, titleView: { flex: 1 }, icon: obj5, footer: obj6, closeButton: { marginLeft: "auto" }, closeIcon: obj7, error: obj8 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { marginRight: nativeDefault.space.PX_8 };
obj6 = { marginTop: "auto", marginBottom: nativeDefault.space.PX_16 };
obj7 = { color: nativeDefault.colors.TEXT_MUTED };
obj8 = { marginBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((title) => {
  let HelpMessage;
  let applicationIconURL;
  let applicationName;
  let components;
  let error;
  let first;
  let header;
  let icon;
  let items;
  let items1;
  let items2;
  let items3;
  let obj15;
  let onSubmit;
  let setValidationErrors;
  let validationErrors;
  let validators;
  const obj = react2;
  const cResult = obj.c(63);
  const tmp4 = closure_9();
  title = title.title;
  const obj2 = InteractionModalUtils;
  const modalState = obj2.useModalState(title, onClose);
  ({ components, applicationIconURL, applicationName, error, validators, validationErrors, setValidationErrors, onSubmit } = modalState);
  const submissionState = modalState.submissionState;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (cResult[1] === insets.bottom) {
    let tmp9;
    if (cResult[2] === insets.top) {
      tmp9 = cResult[3];
    }
    if (cResult[4] === tmp4.modal) {
      let tmp10;
      let tmp11;
      if (cResult[5] === tmp9) {
        tmp10 = cResult[6];
      }
      ({ header, icon } = tmp4);
      if (cResult[7] !== applicationIconURL) {
        const tmp8Result = AvatarUtilsDefault;
        const source = tmp8Result.makeSource(applicationIconURL);
        cResult[7] = applicationIconURL;
        cResult[8] = source;
        tmp11 = source;
      } else {
        tmp11 = cResult[8];
      }
      if (cResult[9] === tmp4.icon) {
        let tmp13;
        let tmp16;
        if (cResult[10] === tmp11) {
          tmp13 = cResult[11];
        }
        if (cResult[12] !== title) {
          const obj4 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: title };
          const tmp18 = metroRequire(Text_Text.Text, obj4);
          cResult[12] = title;
          cResult[13] = tmp18;
          tmp16 = tmp18;
        } else {
          tmp16 = cResult[13];
        }
        if (cResult[14] === tmp4.titleView) {
          let tmp19;
          let tmp23;
          let tmp25;
          if (cResult[15] === tmp16) {
            tmp19 = cResult[16];
          }
          const _Symbol = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl4.intl;
            const stringResult = intl.string(intl4.t.cpT0Cq);
            cResult[17] = stringResult;
            tmp23 = stringResult;
          } else {
            tmp23 = cResult[17];
          }
          if (cResult[18] !== tmp4.closeIcon.color) {
            const obj5 = { color: tmp4.closeIcon.color };
            const tmp27 = metroRequire(XSmallIcon.XSmallIcon, obj5);
            cResult[18] = tmp4.closeIcon.color;
            cResult[19] = tmp27;
            tmp25 = tmp27;
          } else {
            tmp25 = cResult[19];
          }
          if (cResult[20] === tmp4.closeButton) {
            let tmp28;
            if (cResult[21] === tmp25) {
              tmp28 = cResult[22];
            }
            if (cResult[23] === tmp4.header) {
              if (cResult[24] === tmp28) {
                if (cResult[25] === tmp13) {
                  let tmp31;
                  if (cResult[26] === tmp19) {
                    tmp31 = cResult[27];
                  }
                  if (cResult[28] === error) {
                    let tmp37;
                    let tmp42;
                    let tmp44;
                    if (cResult[29] === tmp4.error) {
                      tmp37 = cResult[30];
                    }
                    if (cResult[31] !== applicationName) {
                      const intl2 = intl4.intl;
                      const obj6 = { applicationName };
                      const formatResult = intl2.format(intl4.t["dSTy/w"], obj6);
                      cResult[31] = applicationName;
                      cResult[32] = formatResult;
                      tmp42 = formatResult;
                    } else {
                      tmp42 = cResult[32];
                    }
                    if (cResult[33] !== tmp42) {
                      const obj7 = { messageType: native.HelpMessageTypes.WARNING, children: tmp42 };
                      const HelpMessage2 = native.HelpMessage;
                      const tmp46 = metroRequire(HelpMessage2, obj7);
                      cResult[33] = tmp42;
                      cResult[34] = tmp46;
                      tmp44 = tmp46;
                    } else {
                      tmp44 = cResult[34];
                    }
                    if (cResult[35] === tmp37) {
                      let tmp47;
                      let tmp51;
                      if (cResult[36] === tmp44) {
                        tmp47 = cResult[37];
                      }
                      if (cResult[38] !== components) {
                        const tmpResult = renderComponents;
                        const renderComponentsResult = tmpResult.renderComponents(components);
                        cResult[38] = components;
                        cResult[39] = renderComponentsResult;
                        tmp51 = renderComponentsResult;
                      } else {
                        tmp51 = cResult[39];
                      }
                      if (cResult[40] === title) {
                        if (cResult[41] === setValidationErrors) {
                          if (cResult[42] === tmp51) {
                            if (cResult[43] === validationErrors) {
                              let tmp53;
                              let tmp56;
                              if (cResult[44] === validators) {
                                tmp53 = cResult[45];
                              }
                              const _Symbol2 = Symbol;
                              const footer = tmp4.footer;
                              if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl3 = intl4.intl;
                                const stringResult1 = intl3.string(intl4.t.geKm7t);
                                cResult[46] = stringResult1;
                                tmp56 = stringResult1;
                              } else {
                                tmp56 = cResult[46];
                              }
                              if (cResult[47] === onSubmit) {
                                let tmp60;
                                if (cResult[48] === submissionState === InteractionModalState.IN_FLIGHT) {
                                  tmp60 = cResult[49];
                                }
                                if (cResult[50] === tmp4.footer) {
                                  let tmp63;
                                  if (cResult[51] === tmp60) {
                                    tmp63 = cResult[52];
                                  }
                                  if (cResult[53] === tmp4.modalContent) {
                                    if (cResult[54] === tmp4.scroll) {
                                      if (cResult[55] === tmp47) {
                                        if (cResult[56] === tmp53) {
                                          let tmp67;
                                          if (cResult[57] === tmp63) {
                                            tmp67 = cResult[58];
                                          }
                                          if (cResult[59] === tmp31) {
                                            if (cResult[60] === tmp10) {
                                              let tmp71;
                                              if (cResult[61] === tmp67) {
                                                tmp71 = cResult[62];
                                              }
                                              return tmp71;
                                            }
                                          }
                                          const obj8 = { style: tmp10, children: items };
                                          items = [tmp31, tmp67];
                                          const tmp74 = metroImportDefault(_false, obj8);
                                          cResult[59] = tmp31;
                                          cResult[60] = tmp10;
                                          cResult[61] = tmp67;
                                          cResult[62] = tmp74;
                                          tmp71 = tmp74;
                                        }
                                      }
                                    }
                                  }
                                  const obj9 = { style: tmp35, contentContainerStyle: tmp36, keyboardShouldPersistTaps: "handled", children: items1 };
                                  items1 = [tmp47, tmp53, tmp63];
                                  const tmp70 = metroImportDefault(React3, obj9);
                                  cResult[53] = tmp4.modalContent;
                                  cResult[54] = tmp4.scroll;
                                  cResult[55] = tmp47;
                                  cResult[56] = tmp53;
                                  cResult[57] = tmp63;
                                  cResult[58] = tmp70;
                                  tmp67 = tmp70;
                                }
                                const obj10 = { style: footer, children: tmp60 };
                                const tmp66 = metroRequire(_false, obj10);
                                cResult[50] = tmp4.footer;
                                cResult[51] = tmp60;
                                cResult[52] = tmp66;
                                tmp63 = tmp66;
                              }
                              const obj11 = { text: tmp56, loading: submissionState === InteractionModalState.IN_FLIGHT, size: "lg", onPress: onSubmit };
                              const tmp62 = metroRequire(components_Button_Button.Button, obj11);
                              cResult[47] = onSubmit;
                              cResult[48] = submissionState === InteractionModalState.IN_FLIGHT;
                              cResult[49] = tmp62;
                              tmp60 = tmp62;
                            }
                          }
                        }
                      }
                      const obj12 = { modal: title, validators, validationErrors, setValidationErrors, children: tmp51 };
                      const tmp55 = metroRequire(ComponentStateContext.ComponentStateContextProvider, obj12);
                      cResult[40] = title;
                      cResult[41] = setValidationErrors;
                      cResult[42] = tmp51;
                      cResult[43] = validationErrors;
                      cResult[44] = validators;
                      cResult[45] = tmp55;
                      tmp53 = tmp55;
                    }
                    const obj13 = { children: items2 };
                    items2 = [tmp37, tmp44];
                    const tmp50 = metroImportDefault(_false, obj13);
                    cResult[35] = tmp37;
                    cResult[36] = tmp44;
                    cResult[37] = tmp50;
                    tmp47 = tmp50;
                  }
                  let tmp39 = null;
                  if (null != error) {
                    tmp39 = null;
                    if ("" !== error) {
                      const obj14 = { style: tmp4.error, children: metroRequire(HelpMessage, obj15) };
                      obj15 = { messageType: native.HelpMessageTypes.ERROR, children: error };
                      HelpMessage = native.HelpMessage;
                      tmp39 = metroRequire(_false, obj14);
                    }
                  }
                  cResult[28] = error;
                  cResult[29] = tmp4.error;
                  cResult[30] = tmp39;
                  tmp37 = tmp39;
                }
              }
            }
            const obj16 = { style: header, children: items3 };
            items3 = [tmp13, tmp19, tmp28];
            const tmp34 = metroImportDefault(_false, obj16);
            cResult[23] = tmp4.header;
            cResult[24] = tmp28;
            cResult[25] = tmp13;
            cResult[26] = tmp19;
            cResult[27] = tmp34;
            tmp31 = tmp34;
          }
          const obj17 = { accessibilityRole: "button", accessibilityLabel: tmp23, onPress: onClose, style: tmp4.closeButton, children: tmp25 };
          const tmp30 = metroRequire(Pressables.PressableOpacity, obj17);
          cResult[20] = tmp4.closeButton;
          cResult[21] = tmp25;
          cResult[22] = tmp30;
          tmp28 = tmp30;
        }
        const obj18 = { style: tmp4.titleView, children: tmp16 };
        const tmp22 = metroRequire(_false, obj18);
        cResult[14] = tmp4.titleView;
        cResult[15] = tmp16;
        cResult[16] = tmp22;
        tmp19 = tmp22;
      }
      const obj19 = { style: icon, source: tmp11, size: native.AvatarSizes.SMALL };
      const Avatar = native.Avatar;
      const tmp15 = metroRequire(Avatar, obj19);
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
}) : ((modal) => {
  let Button;
  let HelpMessage;
  let applicationIconURL;
  let applicationName;
  let components;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj16;
  let obj5;
  let obj8;
  let onSubmit;
  let setValidationErrors;
  let submissionState;
  let tmp2Result;
  let validationErrors;
  let validators;
  const tmp = closure_9();
  const title = modal.title;
  const obj = InteractionModalUtils;
  const modalState = obj.useModalState(modal, onClose);
  const error = modalState.error;
  ({ components, applicationIconURL, applicationName, submissionState, validators, validationErrors, setValidationErrors, onSubmit } = modalState);
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const obj2 = { style: items, children: items2 };
  items = [tmp.modal, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  const obj3 = { style: tmp.header, children: items1 };
  const obj4 = { style: tmp.icon, source: obj5.makeSource(applicationIconURL), size: native.AvatarSizes.SMALL };
  const Avatar = native.Avatar;
  obj5 = AvatarUtilsDefault;
  items1 = [metroRequire(Avatar, obj4), , ];
  const obj6 = { style: tmp.titleView, children: metroRequire(Text_Text.Text, { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: title }) };
  items1[1] = metroRequire(_false, obj6);
  const obj7 = { accessibilityRole: "button", accessibilityLabel: intl.string(intl4.t.cpT0Cq), onPress: onClose, style: tmp.closeButton, children: metroRequire(XSmallIcon.XSmallIcon, obj8) };
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl4.intl;
  obj8 = { color: tmp.closeIcon.color };
  items1[2] = metroRequire(PressableOpacity, obj7);
  items2 = [metroImportDefault(_false, obj3), ];
  let tmp7Result = null;
  const obj9 = { style: tmp.scroll, contentContainerStyle: tmp.modalContent, keyboardShouldPersistTaps: "handled", children: items4 };
  if (null != error) {
    tmp7Result = null;
    if ("" !== error) {
      const obj10 = { style: tmp.error, children: metroRequire(HelpMessage, obj11) };
      obj11 = { messageType: native.HelpMessageTypes.ERROR, children: error };
      HelpMessage = native.HelpMessage;
      tmp7Result = metroRequire(_false, obj10);
    }
  }
  const obj12 = { children: items3 };
  items3 = [tmp7Result, ];
  const obj13 = { messageType: native.HelpMessageTypes.WARNING, children: intl2.format(intl4.t["dSTy/w"], { applicationName }) };
  const HelpMessage2 = native.HelpMessage;
  intl2 = intl4.intl;
  items3[1] = metroRequire(HelpMessage2, obj13);
  items4 = [metroImportDefault(_false, obj12), , ];
  const obj14 = { modal, validators, validationErrors, setValidationErrors, children: tmp2Result.renderComponents(components) };
  const ComponentStateContextProvider = ComponentStateContext.ComponentStateContextProvider;
  tmp2Result = renderComponents;
  items4[1] = metroRequire(ComponentStateContextProvider, obj14);
  const obj15 = { style: tmp.footer, children: metroRequire(Button, obj16) };
  obj16 = { text: intl3.string(intl4.t.geKm7t), loading: submissionState === InteractionModalState.IN_FLIGHT, size: "lg", onPress: onSubmit };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items4[2] = metroRequire(_false, obj15);
  items2[1] = metroImportDefault(React3, obj9);
  return metroImportDefault(_false, obj2);
});
let closure_11 = tmp6;
const result = size.fileFinishedImporting("modules/interaction_components/native/InteractionModal.tsx");

export default tmp6;
export const openInteractionModal = function openInteractionModal(application) {
  const arr = ModalActionCreatorsDefault;
  arr.push(closure_11, application, interaction_modal);
};