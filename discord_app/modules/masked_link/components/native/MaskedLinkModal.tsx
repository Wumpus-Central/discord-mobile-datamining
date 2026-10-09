// === Module 12998: MaskedLinkModal ===

// Module 12998 (MaskedLinkModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import AlertModal from "AlertModal" /* 5304 */;
import Stack_Stack from "Stack/Stack" /* 5374 */;
import Form from "Form" /* 8563 */;
import SharedStateUtils from "SharedStateUtils" /* 12995 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { linkCalloutContainer: { maxHeight: 250 }, emphasis: { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_6 = createStyles.createStyles(obj);
let obj2 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const result = size.fileFinishedImporting("modules/masked_link/components/native/MaskedLinkModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MaskedLinkModal(arg0) {
  const cResult = c.c(60);
  ({ url, trustUrl, isProtocol, onConfirm, onCancel } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === onCancel) {
    if (cResult[1] === onConfirm) {
      if (cResult[2] === trustUrl) {
        if (cResult[3] === url) {
          let tmp5 = cResult[4];
        }
        const modalState = SharedStateUtils.useModalState(tmp5);
        ({ protocol, authorityPrefix, hostname, theRestOfTheUrl, shouldTrustUrl } = modalState);
        const setShouldTrustUrl = modalState.setShouldTrustUrl;
        ({ handleConfirm, handleCancel } = modalState);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["3w1QGl"]);
          cResult[5] = stringResult;
          let tmp8 = stringResult;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== isProtocol) {
          const intl2 = util.intl;
          if (isProtocol) {
            let formatResult = intl2.format(util.t.aCYv1z, {});
          } else {
            formatResult = intl2.string(util.t.soRxRe);
          }
          cResult[6] = isProtocol;
          cResult[7] = formatResult;
        } else if (cResult[8] !== isProtocol) {
          const intl3 = util.intl;
          const string = intl3.string;
          let COq6kk = util.t;
          if (isProtocol) {
            COq6kk = COq6kk.COq6kk;
            let stringResult1 = string(COq6kk);
          } else {
            stringResult1 = string(COq6kk.NcJfJG);
          }
          cResult[8] = isProtocol;
          cResult[9] = stringResult1;
        } else {
          if (cResult[10] === handleConfirm) {
            if (cResult[11] === tmp13) {
              let tmp16 = cResult[12];
            }
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = util.intl;
              const stringResult2 = intl4.string(util.t["/g10LC"]);
              cResult[13] = stringResult2;
              let tmp19 = stringResult2;
            } else {
              tmp19 = cResult[13];
            }
            if (cResult[14] !== handleCancel) {
              const obj2 = { onPress: handleCancel, variant: "secondary", text: tmp19 };
              const tmp23 = React4(AlertModal.AlertActionButton, obj2, "cancel");
              cResult[14] = handleCancel;
              cResult[15] = tmp23;
              let tmp21 = tmp23;
            } else {
              tmp21 = cResult[15];
            }
            if (cResult[16] === tmp16) {
              if (cResult[17] === tmp21) {
                let tmp24 = cResult[18];
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
                    if (cResult[22] === str5) {
                      let tmp27 = cResult[23];
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
                        if (cResult[26] === str9) {
                          let tmp30 = cResult[27];
                        }
                        if (cResult[28] !== theRestOfTheUrl) {
                          const obj3 = { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl };
                          const tmp35 = React4(Text_Text.Text, obj3);
                          cResult[28] = theRestOfTheUrl;
                          cResult[29] = tmp35;
                          let tmp33 = tmp35;
                        } else {
                          tmp33 = cResult[29];
                        }
                        if (cResult[30] === tmp27) {
                          if (cResult[31] === tmp30) {
                            if (cResult[32] === tmp33) {
                              let tmp36 = cResult[33];
                            }
                            if (cResult[34] === tmp4.linkCalloutContainer) {
                              if (cResult[35] === tmp36) {
                                let tmp39 = cResult[36];
                              }
                              if (cResult[37] === tmp4.emphasis) {
                                if (cResult[38] === tmp39) {
                                  let tmp43 = cResult[39];
                                }
                                if (cResult[40] === setShouldTrustUrl) {
                                  if (cResult[41] === shouldTrustUrl) {
                                    let tmp47 = cResult[42];
                                  }
                                  if (cResult[43] === hostname) {
                                    if (cResult[44] === isProtocol) {
                                      if (cResult[45] === protocol) {
                                        if (cResult[47] !== cResult[46]) {
                                          const obj4 = { variant: "text-md/medium", children: tmp48 };
                                          const tmp53 = React4(Text_Text.Text, obj4);
                                          cResult[47] = tmp48;
                                          cResult[48] = tmp53;
                                          let tmp51 = tmp53;
                                        } else {
                                          tmp51 = cResult[48];
                                        }
                                        if (cResult[49] === shouldTrustUrl) {
                                          if (cResult[50] === tmp47) {
                                            if (cResult[51] === tmp51) {
                                              let tmp54 = cResult[52];
                                            }
                                            if (cResult[53] === tmp43) {
                                              if (cResult[54] === tmp54) {
                                                let tmp57 = cResult[55];
                                              }
                                              if (cResult[56] === tmp57) {
                                                if (cResult[57] === tmp10) {
                                                  if (cResult[58] === tmp24) {
                                                    let tmp60 = cResult[59];
                                                  }
                                                  return tmp60;
                                                }
                                              }
                                              const obj5 = { title: tmp8, content: tmp10, actions: tmp24, extraContent: tmp57 };
                                              const tmp62 = React4(AlertModal.AlertModal, obj5);
                                              cResult[56] = tmp57;
                                              cResult[57] = tmp10;
                                              cResult[58] = tmp24;
                                              cResult[59] = tmp62;
                                              tmp60 = tmp62;
                                            }
                                            const obj6 = { spacing: 16, children: null };
                                            const items = [tmp43, tmp54];
                                            obj6.children = items;
                                            const tmp59 = hasOwnProperty(Stack_Stack.Stack, obj6);
                                            cResult[53] = tmp43;
                                            cResult[54] = tmp54;
                                            cResult[55] = tmp59;
                                            tmp57 = tmp59;
                                          }
                                        }
                                        const obj7 = { start: true, end: true, selected: shouldTrustUrl, onPress: tmp47, label: tmp51 };
                                        const tmp56 = React4(Form.FormCheckboxRow, obj7);
                                        cResult[49] = shouldTrustUrl;
                                        cResult[50] = tmp47;
                                        cResult[51] = tmp51;
                                        cResult[52] = tmp56;
                                        tmp54 = tmp56;
                                      }
                                    }
                                  }
                                  const intl5 = util.intl;
                                  const format = intl5.format;
                                  let t = util.t;
                                  if (isProtocol) {
                                    t = { protocol: protocol.replace(":", "") };
                                    let formatResult1 = format(t["haA+Xw"], t);
                                  } else {
                                    const obj8 = { domain: hostname };
                                    formatResult1 = format(t.ZgXDsI, obj8);
                                  }
                                  cResult[43] = hostname;
                                  cResult[44] = isProtocol;
                                  cResult[45] = protocol;
                                  cResult[46] = formatResult1;
                                }
                                const fn = function z() {
                                  return setShouldTrustUrl(!shouldTrustUrl);
                                };
                                cResult[40] = setShouldTrustUrl;
                                cResult[41] = shouldTrustUrl;
                                cResult[42] = fn;
                                tmp47 = fn;
                              }
                              const obj9 = { style: tmp4.emphasis, children: tmp39 };
                              const tmp46 = React4(React2, obj9);
                              cResult[37] = tmp4.emphasis;
                              cResult[38] = tmp39;
                              cResult[39] = tmp46;
                              tmp43 = tmp46;
                            }
                            const obj10 = { start: true, end: true, label: null };
                            const obj11 = { style: tmp4.linkCalloutContainer, children: tmp36 };
                            obj10.label = React4(React3, obj11);
                            const tmp42 = React4(Form.FormRow, obj10);
                            cResult[34] = tmp4.linkCalloutContainer;
                            cResult[35] = tmp36;
                            cResult[36] = tmp42;
                            tmp39 = tmp42;
                          }
                        }
                        const obj12 = { variant: "text-md/normal", children: null };
                        const items1 = [tmp27, tmp30, tmp33];
                        obj12.children = items1;
                        const tmp38 = hasOwnProperty(Text_Text.Text, obj12);
                        cResult[30] = tmp27;
                        cResult[31] = tmp30;
                        cResult[32] = tmp33;
                        cResult[33] = tmp38;
                        tmp36 = tmp38;
                      }
                    }
                    const obj13 = { variant: str8, color: str9, children: hostname };
                    const tmp32 = React4(Text_Text.Text, obj13);
                    cResult[24] = hostname;
                    cResult[25] = str8;
                    cResult[26] = str9;
                    cResult[27] = tmp32;
                    tmp30 = tmp32;
                  }
                }
              }
              const obj14 = { variant: str5, color: str7, children: null };
              const items2 = [protocol, authorityPrefix];
              obj14.children = items2;
              const tmp29 = hasOwnProperty(Text_Text.Text, obj14);
              cResult[19] = authorityPrefix;
              cResult[20] = protocol;
              cResult[21] = str7;
              cResult[22] = str5;
              cResult[23] = tmp29;
              tmp27 = tmp29;
            }
            const obj15 = { children: null };
            const items3 = [tmp16, tmp21];
            obj15.children = items3;
            const tmp26 = hasOwnProperty(AlertModal.AlertActions, obj15);
            cResult[16] = tmp16;
            cResult[17] = tmp21;
            cResult[18] = tmp26;
            tmp24 = tmp26;
          }
          const obj16 = { variant: "primary", onPress: handleConfirm, text: cResult[9] };
          const tmp18 = React4(AlertModal.AlertActionButton, obj16, "confirm");
          cResult[10] = handleConfirm;
          cResult[11] = cResult[9];
          cResult[12] = tmp18;
          tmp16 = tmp18;
        }
        const tmpResult = SharedStateUtils;
      }
    }
  }
  const obj17 = { url, trustUrl, onConfirm, onCancel };
  cResult[0] = onCancel;
  cResult[1] = onConfirm;
  cResult[2] = trustUrl;
  cResult[3] = url;
  cResult[4] = obj17;
  tmp5 = obj17;
}) : (function MaskedLinkModal(isProtocol) {
  isProtocol = isProtocol.isProtocol;
  shouldTrustUrl = undefined;
  ({ url, trustUrl, onConfirm, onCancel } = isProtocol);
  const tmp = closure_6();
  const modalState = SharedStateUtils.useModalState({ url, trustUrl, onConfirm, onCancel });
  ({ protocol, hostname, shouldTrustUrl } = modalState);
  const setShouldTrustUrl = modalState.setShouldTrustUrl;
  ({ authorityPrefix, theRestOfTheUrl, handleConfirm, handleCancel } = modalState);
  const obj2 = { title: null, content: null, actions: null, extraContent: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["3w1QGl"]);
  const intl2 = util.intl;
  if (isProtocol) {
    let formatResult = intl2.format(util.t.aCYv1z, {});
  } else {
    formatResult = intl2.string(util.t.soRxRe);
  }
  obj2.content = formatResult;
  const obj3 = { variant: "primary", onPress: handleConfirm, text: null };
  const intl3 = util.intl;
  const string = intl3.string;
  const t = util.t;
  if (isProtocol) {
    let stringResult = string(t.COq6kk);
  } else {
    stringResult = string(t.NcJfJG);
  }
  const obj4 = { children: null };
  obj3.text = stringResult;
  const items = [React4(AlertModal.AlertActionButton, obj3, "confirm"), ];
  const obj5 = { onPress: handleCancel, variant: "secondary", text: null };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t["/g10LC"]);
  items[1] = React4(AlertModal.AlertActionButton, obj5, "cancel");
  obj4.children = items;
  obj2.actions = hasOwnProperty(AlertModal.AlertActions, obj4);
  const obj6 = { style: tmp.emphasis, children: null };
  const obj7 = { style: tmp.linkCalloutContainer, children: null };
  let str = "text-md/normal";
  if (isProtocol) {
    str = "text-md/semibold";
  }
  const obj8 = { variant: str, color: null, children: null };
  let str2 = "text-muted";
  if (isProtocol) {
    str2 = "text-default";
  }
  obj8.color = str2;
  const items1 = [protocol, authorityPrefix];
  obj8.children = items1;
  const items2 = [hasOwnProperty(Text_Text.Text, obj8), , ];
  let str3 = "text-md/semibold";
  if (isProtocol) {
    str3 = "text-md/normal";
  }
  const obj9 = { variant: str3, color: null, children: null };
  let str4 = "text-default";
  if (isProtocol) {
    str4 = "text-muted";
  }
  const obj10 = { start: true, end: true, label: null };
  const obj11 = { variant: "text-md/normal", children: null };
  obj9.color = str4;
  obj9.children = hostname;
  items2[1] = React4(Text_Text.Text, obj9);
  items2[2] = React4(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl });
  obj11.children = items2;
  obj7.children = hasOwnProperty(Text_Text.Text, obj11);
  obj10.label = React4(React3, obj7);
  obj6.children = React4(Form.FormRow, obj10);
  const items3 = [React4(React2, obj6), ];
  const obj12 = {
    start: true,
    end: true,
    selected: shouldTrustUrl,
    onPress() {
      return setShouldTrustUrl(!shouldTrustUrl);
    },
    label: null
  };
  const intl5 = util.intl;
  const format = intl5.format;
  const t2 = util.t;
  if (isProtocol) {
    const obj13 = { protocol: protocol.replace(":", "") };
    let formatResult1 = format(t2["haA+Xw"], obj13);
  } else {
    const obj14 = { domain: hostname };
    formatResult1 = format(t2.ZgXDsI, obj14);
  }
  const obj15 = { spacing: 16, children: null };
  obj12.label = React4(Text_Text.Text, { variant: "text-md/medium", children: formatResult1 });
  items3[1] = React4(Form.FormCheckboxRow, obj12);
  obj15.children = items3;
  obj2.extraContent = hasOwnProperty(Stack_Stack.Stack, obj15);
  return React4(AlertModal.AlertModal, obj2);
});