// === Module 12755: MaskedLinkModal ===

// Module 12755 (MaskedLinkModal)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import AlertModal2 from "AlertModal" /* 5713 */;
import Form from "Form" /* 8895 */;
import SharedStateUtils from "SharedStateUtils" /* 12752 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { linkCalloutContainer: { maxHeight: 250 }, emphasis: obj2 };
obj2 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let authorityPrefix;
  let handleCancel;
  let handleConfirm;
  let hostname;
  let isProtocol;
  let items;
  let items1;
  let items2;
  let items3;
  let obj12;
  let onCancel;
  let onConfirm;
  let protocol;
  let shouldTrustUrl;
  let theRestOfTheUrl;
  let trustUrl;
  let url;
  const obj = react;
  const cResult = obj.c(60);
  ({ url, trustUrl, isProtocol, onConfirm, onCancel } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === onCancel) {
    if (cResult[1] === onConfirm) {
      if (cResult[2] === trustUrl) {
        let tmp5;
        let tmp8;
        let tmp10;
        let tmp12;
        if (cResult[3] === url) {
          tmp5 = cResult[4];
        }
        const tmpResult = SharedStateUtils;
        const modalState = tmpResult.useModalState(tmp5);
        ({ protocol, authorityPrefix, hostname, theRestOfTheUrl, shouldTrustUrl } = modalState);
        const setShouldTrustUrl = modalState.setShouldTrustUrl;
        ({ handleConfirm, handleCancel } = modalState);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl6.intl;
          const stringResult = intl.string(intl6.t["3w1QGl"]);
          cResult[5] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== isProtocol) {
          let formatResult;
          const intl2 = intl6.intl;
          if (isProtocol) {
            formatResult = intl2.format(intl6.t.aCYv1z, {});
          } else {
            formatResult = intl2.string(intl6.t.soRxRe);
          }
          cResult[6] = isProtocol;
          cResult[7] = formatResult;
          tmp10 = formatResult;
        } else {
          tmp10 = cResult[7];
        }
        if (cResult[8] !== isProtocol) {
          let stringResult1;
          const intl3 = intl6.intl;
          const string = intl3.string;
          const t = intl6.t;
          if (isProtocol) {
            stringResult1 = string(t.COq6kk);
          } else {
            stringResult1 = string(t.NcJfJG);
          }
          cResult[8] = isProtocol;
          cResult[9] = stringResult1;
          tmp12 = stringResult1;
        } else {
          tmp12 = cResult[9];
        }
        if (cResult[10] === handleConfirm) {
          let tmp14;
          let tmp17;
          let tmp19;
          if (cResult[11] === tmp12) {
            tmp14 = cResult[12];
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = intl6.intl;
            const stringResult2 = intl4.string(intl6.t["/g10LC"]);
            cResult[13] = stringResult2;
            tmp17 = stringResult2;
          } else {
            tmp17 = cResult[13];
          }
          if (cResult[14] !== handleCancel) {
            const obj2 = { onPress: handleCancel, variant: "secondary", text: tmp17 };
            const tmp21 = React3(AlertModal2.AlertActionButton, obj2, "cancel");
            cResult[14] = handleCancel;
            cResult[15] = tmp21;
            tmp19 = tmp21;
          } else {
            tmp19 = cResult[15];
          }
          if (cResult[16] === tmp14) {
            let tmp22;
            if (cResult[17] === tmp19) {
              tmp22 = cResult[18];
            }
            let str5 = "text-md/normal";
            if (isProtocol) {
              str5 = "text-md/semibold";
            }
            let str7 = "text-muted";
            if (isProtocol) {
              str7 = "text-default";
            }
            if (cResult[19] === authorityPrefix) {
              if (cResult[20] === protocol) {
                if (cResult[21] === str7) {
                  let tmp25;
                  if (cResult[22] === str5) {
                    tmp25 = cResult[23];
                  }
                  let str8 = "text-md/semibold";
                  if (isProtocol) {
                    str8 = "text-md/normal";
                  }
                  let str9 = "text-default";
                  if (isProtocol) {
                    str9 = "text-muted";
                  }
                  if (cResult[24] === hostname) {
                    if (cResult[25] === str8) {
                      let tmp28;
                      let tmp31;
                      if (cResult[26] === str9) {
                        tmp28 = cResult[27];
                      }
                      if (cResult[28] !== theRestOfTheUrl) {
                        const obj3 = { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl };
                        const tmp33 = React3(Text_Text.Text, obj3);
                        cResult[28] = theRestOfTheUrl;
                        cResult[29] = tmp33;
                        tmp31 = tmp33;
                      } else {
                        tmp31 = cResult[29];
                      }
                      if (cResult[30] === tmp25) {
                        if (cResult[31] === tmp28) {
                          let tmp34;
                          if (cResult[32] === tmp31) {
                            tmp34 = cResult[33];
                          }
                          if (cResult[34] === tmp4.linkCalloutContainer) {
                            let tmp37;
                            if (cResult[35] === tmp34) {
                              tmp37 = cResult[36];
                            }
                            if (cResult[37] === tmp4.emphasis) {
                              let tmp41;
                              if (cResult[38] === tmp37) {
                                tmp41 = cResult[39];
                              }
                              if (cResult[40] === setShouldTrustUrl) {
                                let tmp45;
                                let formatResult1;
                                if (cResult[41] === shouldTrustUrl) {
                                  tmp45 = cResult[42];
                                }
                                if (cResult[43] === hostname) {
                                  if (cResult[44] === isProtocol) {
                                    let tmp46;
                                    let tmp49;
                                    if (cResult[45] === protocol) {
                                      tmp46 = cResult[46];
                                    }
                                    if (cResult[47] !== tmp46) {
                                      const obj4 = { variant: "text-md/medium", children: tmp46 };
                                      const tmp51 = React3(Text_Text.Text, obj4);
                                      cResult[47] = tmp46;
                                      cResult[48] = tmp51;
                                      tmp49 = tmp51;
                                    } else {
                                      tmp49 = cResult[48];
                                    }
                                    if (cResult[49] === shouldTrustUrl) {
                                      if (cResult[50] === tmp45) {
                                        let tmp52;
                                        if (cResult[51] === tmp49) {
                                          tmp52 = cResult[52];
                                        }
                                        if (cResult[53] === tmp41) {
                                          let tmp55;
                                          if (cResult[54] === tmp52) {
                                            tmp55 = cResult[55];
                                          }
                                          if (cResult[56] === tmp55) {
                                            if (cResult[57] === tmp10) {
                                              let tmp58;
                                              if (cResult[58] === tmp22) {
                                                tmp58 = cResult[59];
                                              }
                                              return tmp58;
                                            }
                                          }
                                          const obj5 = { title: tmp8, content: tmp10, actions: tmp22, extraContent: tmp55 };
                                          const tmp60 = React3(AlertModal2.AlertModal, obj5);
                                          cResult[56] = tmp55;
                                          cResult[57] = tmp10;
                                          cResult[58] = tmp22;
                                          cResult[59] = tmp60;
                                          tmp58 = tmp60;
                                        }
                                        const obj6 = { spacing: 16, children: items };
                                        items = [tmp41, tmp52];
                                        const tmp57 = hasOwnProperty(Stack_Stack.Stack, obj6);
                                        cResult[53] = tmp41;
                                        cResult[54] = tmp52;
                                        cResult[55] = tmp57;
                                        tmp55 = tmp57;
                                      }
                                    }
                                    const obj7 = { start: true, end: true, selected: shouldTrustUrl, onPress: tmp45, label: tmp49 };
                                    const tmp54 = React3(Form.FormCheckboxRow, obj7);
                                    cResult[49] = shouldTrustUrl;
                                    cResult[50] = tmp45;
                                    cResult[51] = tmp49;
                                    cResult[52] = tmp54;
                                    tmp52 = tmp54;
                                  }
                                }
                                const intl5 = intl6.intl;
                                const format = intl5.format;
                                const t2 = intl6.t;
                                if (isProtocol) {
                                  const prop = t2["haA+Xw"];
                                  const obj8 = { protocol: protocol.replace(":", "") };
                                  formatResult1 = format(prop, obj8);
                                } else {
                                  const obj9 = { domain: hostname };
                                  formatResult1 = format(t2.ZgXDsI, obj9);
                                }
                                cResult[43] = hostname;
                                cResult[44] = isProtocol;
                                cResult[45] = protocol;
                                cResult[46] = formatResult1;
                                tmp46 = formatResult1;
                              }
                              const fn = function z() {
                                return setShouldTrustUrl(!shouldTrustUrl);
                              };
                              cResult[40] = setShouldTrustUrl;
                              cResult[41] = shouldTrustUrl;
                              cResult[42] = fn;
                              tmp45 = fn;
                            }
                            const obj10 = { style: tmp4.emphasis, children: tmp37 };
                            const tmp44 = React3(React2, obj10);
                            cResult[37] = tmp4.emphasis;
                            cResult[38] = tmp37;
                            cResult[39] = tmp44;
                            tmp41 = tmp44;
                          }
                          const obj11 = { start: true, end: true, label: React3(_false, obj12) };
                          obj12 = { style: tmp4.linkCalloutContainer, children: tmp34 };
                          const FormRow = Form.FormRow;
                          const tmp40 = React3(FormRow, obj11);
                          cResult[34] = tmp4.linkCalloutContainer;
                          cResult[35] = tmp34;
                          cResult[36] = tmp40;
                          tmp37 = tmp40;
                        }
                      }
                      const obj13 = { variant: "text-md/normal", children: items1 };
                      items1 = [tmp25, tmp28, tmp31];
                      const tmp36 = hasOwnProperty(Text_Text.Text, obj13);
                      cResult[30] = tmp25;
                      cResult[31] = tmp28;
                      cResult[32] = tmp31;
                      cResult[33] = tmp36;
                      tmp34 = tmp36;
                    }
                  }
                  const obj14 = { variant: str8, color: str9, children: hostname };
                  const tmp30 = React3(Text_Text.Text, obj14);
                  cResult[24] = hostname;
                  cResult[25] = str8;
                  cResult[26] = str9;
                  cResult[27] = tmp30;
                  tmp28 = tmp30;
                }
              }
            }
            const obj15 = { variant: str5, color: str7, children: items2 };
            items2 = [protocol, authorityPrefix];
            const tmp27 = hasOwnProperty(Text_Text.Text, obj15);
            cResult[19] = authorityPrefix;
            cResult[20] = protocol;
            cResult[21] = str7;
            cResult[22] = str5;
            cResult[23] = tmp27;
            tmp25 = tmp27;
          }
          const obj16 = { children: items3 };
          items3 = [tmp14, tmp19];
          const tmp24 = hasOwnProperty(AlertModal2.AlertActions, obj16);
          cResult[16] = tmp14;
          cResult[17] = tmp19;
          cResult[18] = tmp24;
          tmp22 = tmp24;
        }
        const obj17 = { variant: "primary", onPress: handleConfirm, text: tmp12 };
        const tmp16 = React3(AlertModal2.AlertActionButton, obj17, "confirm");
        cResult[10] = handleConfirm;
        cResult[11] = tmp12;
        cResult[12] = tmp16;
        tmp14 = tmp16;
      }
    }
  }
  const obj18 = { url, trustUrl, onConfirm, onCancel };
  cResult[0] = onCancel;
  cResult[1] = onConfirm;
  cResult[2] = trustUrl;
  cResult[3] = url;
  cResult[4] = obj18;
  tmp5 = obj18;
}) : ((isProtocol) => {
  let AlertActions;
  let FormRow;
  let Stack;
  let Text;
  let Text4;
  let authorityPrefix;
  let formatResult;
  let formatResult1;
  let handleCancel;
  let handleConfirm;
  let hostname;
  let intl;
  let intl4;
  let items;
  let items1;
  let obj10;
  let obj11;
  let obj15;
  let obj4;
  let onCancel;
  let onConfirm;
  let protocol;
  let shouldTrustUrl;
  let str2;
  let str4;
  let stringResult;
  let theRestOfTheUrl;
  let trustUrl;
  let url;
  isProtocol = isProtocol.isProtocol;
  shouldTrustUrl = undefined;
  ({ url, trustUrl, onConfirm, onCancel } = isProtocol);
  const tmp = closure_6();
  const obj = SharedStateUtils;
  const modalState = obj.useModalState({ url, trustUrl, onConfirm, onCancel });
  ({ protocol, hostname, shouldTrustUrl } = modalState);
  const setShouldTrustUrl = modalState.setShouldTrustUrl;
  ({ authorityPrefix, theRestOfTheUrl, handleConfirm, handleCancel } = modalState);
  const obj2 = { title: intl.string(intl6.t["3w1QGl"]), content: formatResult, actions: hasOwnProperty(AlertActions, obj4), extraContent: hasOwnProperty(Stack, obj15) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl6.intl;
  const intl2 = intl6.intl;
  if (isProtocol) {
    formatResult = intl2.format(intl6.t.aCYv1z, {});
  } else {
    formatResult = intl2.string(intl6.t.soRxRe);
  }
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { variant: "primary", onPress: handleConfirm, text: stringResult };
  const AlertActionButton = AlertModal2.AlertActionButton;
  const intl3 = intl6.intl;
  const string = intl3.string;
  const t = intl6.t;
  if (isProtocol) {
    stringResult = string(t.COq6kk);
  } else {
    stringResult = string(t.NcJfJG);
  }
  obj4 = { children: items };
  items = [React3(AlertActionButton, obj3, "confirm"), ];
  const obj5 = { onPress: handleCancel, variant: "secondary", text: intl4.string(intl6.t["/g10LC"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl6.intl;
  items[1] = React3(AlertActionButton2, obj5, "cancel");
  const obj6 = { style: tmp.emphasis, children: React3(FormRow, obj10) };
  Stack = Stack_Stack.Stack;
  const obj7 = { style: tmp.linkCalloutContainer, children: hasOwnProperty(Text, obj11) };
  FormRow = Form.FormRow;
  Text = Text_Text.Text;
  let str = "text-md/normal";
  const Text2 = Text_Text.Text;
  if (isProtocol) {
    str = "text-md/semibold";
  }
  const obj8 = { variant: str, color: str2, children: items1 };
  str2 = "text-muted";
  if (isProtocol) {
    str2 = "text-default";
  }
  items1 = [protocol, authorityPrefix];
  const items2 = [hasOwnProperty(Text2, obj8), , ];
  let str3 = "text-md/semibold";
  const Text3 = Text_Text.Text;
  if (isProtocol) {
    str3 = "text-md/normal";
  }
  const obj9 = { variant: str3, color: str4, children: hostname };
  str4 = "text-default";
  if (isProtocol) {
    str4 = "text-muted";
  }
  obj10 = { start: true, end: true, label: React3(_false, obj7) };
  obj11 = { variant: "text-md/normal", children: items2 };
  items2[1] = React3(Text3, obj9);
  items2[2] = React3(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl });
  const items3 = [React3(React2, obj6), ];
  const obj12 = {
    start: true,
    end: true,
    selected: shouldTrustUrl,
    onPress() {
      return setShouldTrustUrl(!shouldTrustUrl);
    },
    label: React3(Text4, { variant: "text-md/medium", children: formatResult1 })
  };
  const FormCheckboxRow = Form.FormCheckboxRow;
  Text4 = Text_Text.Text;
  const intl5 = intl6.intl;
  const format = intl5.format;
  const t2 = intl6.t;
  if (isProtocol) {
    const prop = t2["haA+Xw"];
    const obj13 = { protocol: protocol.replace(":", "") };
    formatResult1 = format(prop, obj13);
  } else {
    const obj14 = { domain: hostname };
    formatResult1 = format(t2.ZgXDsI, obj14);
  }
  obj15 = { spacing: 16, children: items3 };
  items3[1] = React3(FormCheckboxRow, obj12);
  return React3(AlertModal, obj2);
});
const result = size.fileFinishedImporting("modules/masked_link/components/native/MaskedLinkModal.tsx");

export default tmp4;