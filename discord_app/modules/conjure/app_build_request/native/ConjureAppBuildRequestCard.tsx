// === Module 12337: ConjureAppBuildRequestCard ===

// Module 12337 (ConjureAppBuildRequestCard)
import nativeDefault from "native" /* 587 */;
import _modDef3820 from "module_3820" /* 3820 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5171 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 11696 */;
import ConjureClarificationProjectSheetDefault from "ConjureClarificationProjectSheet" /* 12336 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ConjureAppBuildRequestProjectSheet = "ConjureAppBuildRequestProjectSheet";
const createStyles = fn(4945);
let obj2 = { card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, header: null, heading: null, footer: null };
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.heading = { flex: 1 };
obj2.footer = { flexDirection: "row", justifyContent: "flex-end" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_build_request/native/ConjureAppBuildRequestCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppBuildRequestCard(arg0) {
  const cResult = conjureAppBuildRequestForm(576).c(49);
  ({ request, onDismiss } = arg0);
  ({ projectId, canSend } = arg0);
  const tmp4 = closure_7();
  const obj = conjureAppBuildRequestForm(576);
  conjureAppBuildRequestForm = conjureAppBuildRequestForm(12338).useConjureAppBuildRequestForm(projectId, request, canSend);
  if (cResult[0] === conjureAppBuildRequestForm.projects) {
    if (cResult[1] === conjureAppBuildRequestForm.targetId) {
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1128).intl;
        const stringResult = intl.string(_modDef3820["29gr8j"]);
        cResult[5] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[5];
      }
      importDefault = tmp10;
      if (cResult[6] !== conjureAppBuildRequestForm) {
        function openSheet() {
          const obj2 = {
            content: React4(ConjureClarificationProjectSheetDefault, {
              sheetKey: ConjureAppBuildRequestProjectSheet,
              title,
              projects: conjureAppBuildRequestForm.projects,
              onPick(projectId) {
                return targetId.setTargetId(projectId.projectId);
              }
            }),
            key: ConjureAppBuildRequestProjectSheet,
            stackingBehavior: "stack"
          };
          ActionSheetActionCreators.showActionSheet(obj2);
        }
        cResult[6] = conjureAppBuildRequestForm;
        cResult[7] = openSheet;
        let tmp13 = openSheet;
      } else {
        tmp13 = cResult[7];
      }
      ({ card, header } = tmp4);
      if (cResult[8] !== request.summary) {
        const obj3 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: request.summary };
        const tmp16 = closure_4(tmp(5195).Text, obj3);
        cResult[8] = request.summary;
        cResult[9] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] === tmp4.heading) {
        if (cResult[11] === tmp14) {
          let tmp17 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp23 = closure_4(tmp(6882).XSmallIcon, { size: "sm" });
          cResult[13] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[13];
        }
        const _Symbol3 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1128).intl;
          const stringResult1 = intl2.string(_modDef3820.KQUuAZ);
          cResult[14] = stringResult1;
          let tmp24 = stringResult1;
        } else {
          tmp24 = cResult[14];
        }
        if (cResult[15] !== onDismiss) {
          const obj4 = { variant: "tertiary", size: "sm", icon: tmp21, onPress: onDismiss, accessibilityLabel: tmp24 };
          const tmp29 = closure_4(tmp(7907).IconButton, obj4);
          cResult[15] = onDismiss;
          cResult[16] = tmp29;
          let tmp27 = tmp29;
        } else {
          tmp27 = cResult[16];
        }
        if (cResult[17] === tmp4.header) {
          if (cResult[18] === tmp27) {
            if (cResult[19] === tmp17) {
              let tmp30 = cResult[20];
            }
            if (cResult[21] === conjureAppBuildRequestForm.projects.length) {
              if (cResult[22] === conjureAppBuildRequestForm.sending) {
                if (cResult[23] === tmp13) {
                  let name;
                  if (tmp6 != null) {
                    name = tmp6.name;
                  }
                  if (cResult[24] === name) {
                    let serverName;
                    if (tmp6 != null) {
                      serverName = tmp6.serverName;
                    }
                    if (cResult[25] === serverName) {
                      let tmp37 = cResult[26];
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl5 = tmp(1128).intl;
                      const stringResult2 = intl5.string(_modDef3820.XZNsDA);
                      cResult[27] = stringResult2;
                      let tmp47 = stringResult2;
                    } else {
                      tmp47 = cResult[27];
                    }
                    if (cResult[28] !== conjureAppBuildRequestForm.failed) {
                      let stringResult3;
                      if (conjureAppBuildRequestForm.failed) {
                        const intl6 = tmp(1128).intl;
                        stringResult3 = intl6.string(_modDef3820.kMZz8G);
                      }
                      cResult[28] = conjureAppBuildRequestForm.failed;
                      cResult[29] = stringResult3;
                      let tmp50 = stringResult3;
                    } else {
                      tmp50 = cResult[29];
                    }
                    if (cResult[30] === conjureAppBuildRequestForm.prompt) {
                      if (cResult[31] === conjureAppBuildRequestForm.sending) {
                        if (cResult[32] === conjureAppBuildRequestForm.setPrompt) {
                          if (cResult[33] === tmp50) {
                            let tmp53 = cResult[34];
                          }
                          const _Symbol5 = Symbol;
                          if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl7 = tmp(1128).intl;
                            const stringResult4 = intl7.string(_modDef3820.gG4j6o);
                            cResult[35] = stringResult4;
                            let tmp56 = stringResult4;
                          } else {
                            tmp56 = cResult[35];
                          }
                          if (cResult[36] === conjureAppBuildRequestForm.sending) {
                            if (cResult[37] === conjureAppBuildRequestForm.submit) {
                              if (cResult[38] === tmp59) {
                                let tmp60 = cResult[39];
                              }
                              if (cResult[40] === tmp4.footer) {
                                if (cResult[41] === tmp60) {
                                  let tmp63 = cResult[42];
                                }
                                if (cResult[43] === tmp4.card) {
                                  if (cResult[44] === tmp30) {
                                    if (cResult[45] === tmp37) {
                                      if (cResult[46] === tmp53) {
                                        if (cResult[47] === tmp63) {
                                          let tmp67 = cResult[48];
                                        }
                                        return tmp67;
                                      }
                                    }
                                  }
                                }
                                const obj5 = { style: card, children: null };
                                const items = [tmp30, tmp37, tmp53, tmp63];
                                obj5.children = items;
                                const tmp70 = closure_5(ConjureNativeCardSurfaceDefault, obj5);
                                cResult[43] = tmp4.card;
                                cResult[44] = tmp30;
                                cResult[45] = tmp37;
                                cResult[46] = tmp53;
                                cResult[47] = tmp63;
                                cResult[48] = tmp70;
                                tmp67 = tmp70;
                              }
                              const obj6 = { style: tmp4.footer, children: tmp60 };
                              const tmp66 = closure_4(View, obj6);
                              cResult[40] = tmp4.footer;
                              cResult[41] = tmp60;
                              cResult[42] = tmp66;
                              tmp63 = tmp66;
                            }
                          }
                          const obj7 = { variant: "primary", size: "sm", text: tmp56, disabled: !conjureAppBuildRequestForm.canSubmit, loading: null, onPress: null };
                          ({ sending: obj10.loading, submit: obj10.onPress } = conjureAppBuildRequestForm);
                          const tmp62 = closure_4(tmp(5205).Button, obj7);
                          cResult[36] = conjureAppBuildRequestForm.sending;
                          cResult[37] = conjureAppBuildRequestForm.submit;
                          cResult[38] = !conjureAppBuildRequestForm.canSubmit;
                          cResult[39] = tmp62;
                          tmp60 = tmp62;
                        }
                      }
                    }
                    const obj8 = { label: tmp47, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
                    ({ prompt: obj9.value, setPrompt: obj9.onChange } = conjureAppBuildRequestForm);
                    obj8.maxLength = tmp(12338).CONJURE_APP_BUILD_PROMPT_MAX_LENGTH;
                    obj8.disabled = conjureAppBuildRequestForm.sending;
                    obj8.errorMessage = tmp50;
                    const tmp55 = closure_4(tmp(7131).TextArea, obj8);
                    cResult[30] = conjureAppBuildRequestForm.prompt;
                    cResult[31] = conjureAppBuildRequestForm.sending;
                    cResult[32] = conjureAppBuildRequestForm.setPrompt;
                    cResult[33] = tmp50;
                    cResult[34] = tmp55;
                    tmp53 = tmp55;
                  }
                }
              }
            }
            if (0 === conjureAppBuildRequestForm.projects.length) {
              const obj11 = { variant: "text-sm/normal", color: "text-muted", children: null };
              const intl4 = tmp(1128).intl;
              obj11.children = intl4.string(_modDef3820.TbbzW5);
              let tmp71Result = closure_4(tmp(5195).Text, obj11);
            } else {
              const obj12 = { title: tmp10, hasIcons: false, children: null };
              let name1;
              if (tmp6 != null) {
                name1 = tmp6.name;
              }
              if (name1 == null) {
                const intl3 = tmp(1128).intl;
                name1 = intl3.string(_modDef3820.twlOb6);
              }
              const obj13 = { label: name1, subLabel: null, arrow: true, disabled: null, onPress: null };
              let serverName1;
              if (tmp6 != null) {
                serverName1 = tmp6.serverName;
              }
              obj13.subLabel = serverName1;
              obj13.disabled = conjureAppBuildRequestForm.sending;
              obj13.onPress = tmp13;
              obj12.children = closure_4(tmp(6854).TableRow, obj13);
              tmp71Result = closure_4(tmp(6938).TableRowGroup, obj12);
            }
            cResult[21] = conjureAppBuildRequestForm.projects.length;
            cResult[22] = conjureAppBuildRequestForm.sending;
            cResult[23] = tmp13;
            let name2;
            if (tmp6 != null) {
              name2 = tmp6.name;
            }
            cResult[24] = name2;
            let serverName2;
            if (tmp6 != null) {
              serverName2 = tmp6.serverName;
            }
            cResult[25] = serverName2;
            cResult[26] = tmp71Result;
            tmp37 = tmp71Result;
          }
        }
        const obj24 = { style: header, children: null };
        const items1 = [tmp17, tmp27];
        obj24.children = items1;
        const tmp33 = closure_5(View, obj24);
        cResult[17] = tmp4.header;
        cResult[18] = tmp27;
        cResult[19] = tmp17;
        cResult[20] = tmp33;
        tmp30 = tmp33;
      }
      const obj25 = { style: tmp4.heading, children: tmp14 };
      const tmp20 = closure_4(View, obj25);
      cResult[10] = tmp4.heading;
      cResult[11] = tmp14;
      cResult[12] = tmp20;
      tmp17 = tmp20;
    }
  }
  if (cResult[3] !== conjureAppBuildRequestForm.targetId) {
    const fn = function p(projectId) {
      return projectId.projectId === conjureAppBuildRequestForm.targetId;
    };
    cResult[3] = conjureAppBuildRequestForm.targetId;
    cResult[4] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[4];
  }
  const projects = conjureAppBuildRequestForm.projects;
  const found = projects.find(tmp7);
  cResult[0] = conjureAppBuildRequestForm.projects;
  cResult[1] = conjureAppBuildRequestForm.targetId;
  cResult[2] = found;
  let obj2 = conjureAppBuildRequestForm(12338);
}) : (function ConjureAppBuildRequestCard(request) {
  request = request.request;
  let conjureAppBuildRequestForm;
  ({ projectId, canSend, onDismiss } = request);
  const tmp = closure_7();
  conjureAppBuildRequestForm = conjureAppBuildRequestForm(12338).useConjureAppBuildRequestForm(projectId, request, canSend);
  const projects = conjureAppBuildRequestForm.projects;
  const found = projects.find((projectId) => projectId.projectId === conjureAppBuildRequestForm.targetId);
  const intl = conjureAppBuildRequestForm(1128).intl;
  const stringResult = intl.string(_modDef3820["29gr8j"]);
  importDefault = stringResult;
  let obj2 = { style: tmp.card, children: null };
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { style: tmp.heading, children: null };
  const obj = conjureAppBuildRequestForm(12338);
  obj4.children = closure_4(conjureAppBuildRequestForm(5195).Text, { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: request.summary });
  const items = [closure_4(View, obj4), ];
  const obj6 = { variant: "tertiary", size: "sm", icon: closure_4(conjureAppBuildRequestForm(6882).XSmallIcon, { size: "sm" }), onPress: onDismiss, accessibilityLabel: null };
  const intl2 = conjureAppBuildRequestForm(1128).intl;
  obj6.accessibilityLabel = intl2.string(_modDef3820.KQUuAZ);
  items[1] = closure_4(conjureAppBuildRequestForm(7907).IconButton, obj6);
  obj3.children = items;
  const items1 = [closure_5(View, obj3), , , ];
  if (0 === conjureAppBuildRequestForm.projects.length) {
    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl4 = tmp2(1128).intl;
    obj7.children = intl4.string(tmp6(3820).TbbzW5);
    let tmp11Result = closure_4(tmp2(5195).Text, obj7);
  } else {
    const obj8 = { title: stringResult, hasIcons: false, children: null };
    let name;
    if (found != null) {
      name = found.name;
    }
    if (name == null) {
      const intl3 = tmp2(1128).intl;
      name = intl3.string(tmp6(3820).twlOb6);
    }
    const obj10 = { label: name, subLabel: null, arrow: true, disabled: null, onPress: null };
    let serverName;
    if (found != null) {
      serverName = found.serverName;
    }
    obj10.subLabel = serverName;
    obj10.disabled = conjureAppBuildRequestForm.sending;
    obj10.onPress = function openSheet() {
      const obj2 = {
        content: React4(ConjureClarificationProjectSheetDefault, {
          sheetKey: ConjureAppBuildRequestProjectSheet,
          title,
          projects: conjureAppBuildRequestForm.projects,
          onPick(projectId) {
            return targetId.setTargetId(projectId.projectId);
          }
        }),
        key: ConjureAppBuildRequestProjectSheet,
        stackingBehavior: "stack"
      };
      ActionSheetActionCreators.showActionSheet(obj2);
    };
    obj8.children = closure_4(tmp2(6854).TableRow, obj10);
    tmp11Result = closure_4(tmp2(6938).TableRowGroup, obj8);
  }
  items1[1] = tmp11Result;
  const obj12 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
  const intl5 = tmp2(1128).intl;
  obj12.label = intl5.string(_modDef3820.XZNsDA);
  ({ prompt: obj9.value, setPrompt: obj9.onChange } = conjureAppBuildRequestForm);
  obj12.maxLength = conjureAppBuildRequestForm(12338).CONJURE_APP_BUILD_PROMPT_MAX_LENGTH;
  obj12.disabled = conjureAppBuildRequestForm.sending;
  let stringResult1;
  if (conjureAppBuildRequestForm.failed) {
    const intl6 = tmp2(1128).intl;
    stringResult1 = intl6.string(tmp6(3820).kMZz8G);
  }
  obj12.errorMessage = stringResult1;
  items1[2] = closure_4(conjureAppBuildRequestForm(7131).TextArea, obj12);
  const obj23 = { style: tmp.footer, children: null };
  const obj24 = { variant: "primary", size: "sm", text: null, disabled: null, loading: null, onPress: null };
  const intl7 = tmp2(1128).intl;
  obj24.text = intl7.string(_modDef3820.gG4j6o);
  obj24.disabled = !conjureAppBuildRequestForm.canSubmit;
  ({ sending: obj11.loading, submit: obj11.onPress } = conjureAppBuildRequestForm);
  obj23.children = closure_4(conjureAppBuildRequestForm(5205).Button, obj24);
  items1[3] = closure_4(View, obj23);
  obj2.children = items1;
  return closure_5(ConjureNativeCardSurfaceDefault, obj2);
});