// discord_app/modules/conjure/app_build_request/native/ConjureAppBuildRequestCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import TextArea from "../../../../design/components/TextInput/native/TextArea.native.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import ConjureAppBuildRequest from "../ConjureAppBuildRequest.tsx";
import ConjureAppBuildRequestProjectsSheetDefault from "ConjureAppBuildRequestProjectsSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Keyboard: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ConjureAppBuildRequestProjectSheet = "ConjureAppBuildRequestProjectSheet";
const createStyles = fn(4969);
let obj2 = {
  card: { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 },
  header: null,
  heading: null,
  footer: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.heading = { flex: 1 };
obj2.footer = { flexDirection: "row", justifyContent: "flex-end" };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_build_request/native/ConjureAppBuildRequestCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureAppBuildRequestCard(arg0) {
      const cResult = onInputFocusChange(stringResult3[6]).c(61);
      ({ projectId, request, onInputFocusChange } = arg0);
      ({ canSend, onDismiss, onSent } = arg0);
      const tmp4 = closure_8();
      let obj = onInputFocusChange(stringResult3[6]);
      const conjureAppBuildRequestForm = onInputFocusChange(stringResult3[7]).useConjureAppBuildRequestForm(
        projectId,
        request,
        canSend,
        onDismiss,
        onSent,
      );
      if (cResult[0] === conjureAppBuildRequestForm.dismiss) {
        if (cResult[1] === conjureAppBuildRequestForm.projects) {
          if (cResult[2] === conjureAppBuildRequestForm.sending) {
            if (cResult[3] === conjureAppBuildRequestForm.setTargetIds) {
              if (cResult[4] === conjureAppBuildRequestForm.targetIds) {
                if (cResult[5] === request.summary) {
                  if (cResult[6] === tmp4.card) {
                    if (cResult[7] === tmp4.header) {
                      if (cResult[8] === tmp4.heading) {
                        const _Symbol = Symbol;
                        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl = onInputFocusChange(tmp2[8]).intl;
                          const stringResult = intl.string(conjureAppBuildRequestForm(tmp2[9]).XZNsDA);
                          cResult[33] = stringResult;
                          let tmp16 = stringResult;
                        } else {
                          tmp16 = cResult[33];
                        }
                        if (cResult[34] !== onInputFocusChange) {
                          const fn = function j() {
                            let tmpResult;
                            if (onInputFocusChange != null) {
                              tmpResult = tmp(true);
                            }
                            return tmpResult;
                          };
                          const fn2 = function v() {
                            let tmpResult;
                            if (onInputFocusChange != null) {
                              tmpResult = tmp(false);
                            }
                            return tmpResult;
                          };
                          cResult[34] = onInputFocusChange;
                          cResult[35] = fn;
                          cResult[36] = fn2;
                          let tmp20 = fn2;
                          let tmp19 = fn;
                        } else {
                          tmp19 = cResult[35];
                          tmp20 = cResult[36];
                        }
                        if (cResult[37] !== conjureAppBuildRequestForm.failed) {
                          let stringResult1;
                          if (conjureAppBuildRequestForm.failed) {
                            const intl2 = onInputFocusChange(tmp2[8]).intl;
                            stringResult1 = intl2.string(conjureAppBuildRequestForm(tmp2[9]).kMZz8G);
                          }
                          cResult[37] = conjureAppBuildRequestForm.failed;
                          cResult[38] = stringResult1;
                          let tmp21 = stringResult1;
                        } else {
                          tmp21 = cResult[38];
                        }
                        if (cResult[39] === conjureAppBuildRequestForm.prompt) {
                          if (cResult[40] === conjureAppBuildRequestForm.sending) {
                            if (cResult[41] === conjureAppBuildRequestForm.setPrompt) {
                              if (cResult[42] === tmp19) {
                                if (cResult[43] === tmp20) {
                                  if (cResult[44] === tmp21) {
                                    let tmp24 = cResult[45];
                                  }
                                  const _Symbol2 = Symbol;
                                  if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                                    const intl3 = onInputFocusChange(tmp2[8]).intl;
                                    const stringResult2 = intl3.string(conjureAppBuildRequestForm(tmp2[9]).gG4j6o);
                                    cResult[46] = stringResult2;
                                    let tmp27 = stringResult2;
                                  } else {
                                    tmp27 = cResult[46];
                                  }
                                  if (cResult[47] === conjureAppBuildRequestForm.sending) {
                                    if (cResult[48] === conjureAppBuildRequestForm.submit) {
                                      if (cResult[49] === tmp30) {
                                        let tmp31 = cResult[50];
                                      }
                                      if (cResult[51] === tmp4.footer) {
                                        if (cResult[52] === tmp31) {
                                          let tmp34 = cResult[53];
                                        }
                                        if (cResult[54] === tmp6) {
                                          if (cResult[55] === tmp7) {
                                            if (cResult[56] === tmp34) {
                                              if (cResult[57] === tmp8) {
                                                if (cResult[58] === tmp9) {
                                                  if (cResult[59] === tmp24) {
                                                    let tmp38 = cResult[60];
                                                  }
                                                  return tmp38;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const obj6 = { style: tmp7, children: null };
                                        const items = [tmp8, tmp9, tmp24, tmp34];
                                        obj6.children = items;
                                        const tmp40 = closure_6(tmp6, obj6);
                                        cResult[54] = tmp6;
                                        cResult[55] = tmp7;
                                        cResult[56] = tmp34;
                                        cResult[57] = tmp8;
                                        cResult[58] = tmp9;
                                        cResult[59] = tmp24;
                                        cResult[60] = tmp40;
                                        tmp38 = tmp40;
                                      }
                                      const obj7 = { style: tmp4.footer, children: tmp31 };
                                      const tmp37 = closure_5(closure_4, obj7);
                                      cResult[51] = tmp4.footer;
                                      cResult[52] = tmp31;
                                      cResult[53] = tmp37;
                                      tmp34 = tmp37;
                                    }
                                  }
                                  const obj11 = {
                                    variant: "primary",
                                    size: "sm",
                                    text: tmp27,
                                    disabled: !conjureAppBuildRequestForm.canSubmit,
                                    loading: null,
                                    onPress: null,
                                  };
                                  ({ sending: obj5.loading, submit: obj5.onPress } = conjureAppBuildRequestForm);
                                  const tmp33 = closure_5(onInputFocusChange(tmp2[19]).Button, obj11);
                                  cResult[47] = conjureAppBuildRequestForm.sending;
                                  cResult[48] = conjureAppBuildRequestForm.submit;
                                  cResult[49] = !conjureAppBuildRequestForm.canSubmit;
                                  cResult[50] = tmp33;
                                  tmp31 = tmp33;
                                }
                              }
                            }
                          }
                        }
                        const obj12 = {
                          label: tmp16,
                          value: null,
                          onChange: null,
                          maxLength: null,
                          disabled: null,
                          onFocus: null,
                          onBlur: null,
                          errorMessage: null,
                        };
                        ({ prompt: obj4.value, setPrompt: obj4.onChange } = conjureAppBuildRequestForm);
                        obj12.maxLength = onInputFocusChange(tmp2[7]).CONJURE_APP_BUILD_PROMPT_MAX_LENGTH;
                        obj12.disabled = conjureAppBuildRequestForm.sending;
                        obj12.onFocus = tmp19;
                        obj12.onBlur = tmp20;
                        obj12.errorMessage = tmp21;
                        const tmp26 = closure_5(onInputFocusChange(tmp2[18]).TextArea, obj12);
                        cResult[39] = conjureAppBuildRequestForm.prompt;
                        cResult[40] = conjureAppBuildRequestForm.sending;
                        cResult[41] = conjureAppBuildRequestForm.setPrompt;
                        cResult[42] = tmp19;
                        cResult[43] = tmp20;
                        cResult[44] = tmp21;
                        cResult[45] = tmp26;
                        tmp24 = tmp26;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (cResult[13] !== conjureAppBuildRequestForm.targetIds) {
        class L {
          constructor(arg0) {
            targetIds = closure_1.targetIds;
            return targetIds.includes(arg0.projectId);
          }
        }
        cResult[13] = conjureAppBuildRequestForm.targetIds;
        cResult[14] = L;
      } else {
        class L {
          constructor(arg0) {
            targetIds = closure_1.targetIds;
            return targetIds.includes(arg0.projectId);
          }
        }
      }
      const projects = conjureAppBuildRequestForm.projects;
      const found = projects.filter(L);
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor(arg0) {
            targetIds = closure_1.targetIds;
            return targetIds.includes(arg0.projectId);
          }
        }
        stringResult3 = obj3.string(conjureAppBuildRequestForm(tmp2[9])["29gr8j"]);
        cResult[15] = stringResult3;
        const tmp12 = stringResult3;
      } else {
        class L {
          constructor(arg0) {
            targetIds = closure_1.targetIds;
            return targetIds.includes(arg0.projectId);
          }
        }
      }
      stringResult3 = tmp12;
      if (cResult[16] === conjureAppBuildRequestForm.projects) {
        class L {
          constructor(arg0) {
            targetIds = closure_1.targetIds;
            return targetIds.includes(arg0.projectId);
          }
        }
      }
      function openSheet() {
        React3.dismiss();
        const obj2 = { content: null, key: null, stackingBehavior: "stack" };
        const obj3 = {
          title: stringResult3,
          projects: conjureAppBuildRequestForm.projects,
          initialIds: conjureAppBuildRequestForm.targetIds,
          maxSelected: null,
          onChange: null,
        };
        const obj = ActionSheetActionCreators;
        obj3.maxSelected = ConjureAppBuildRequest.CONJURE_APP_BUILD_MAX_TARGETS;
        obj3.onChange = conjureAppBuildRequestForm.setTargetIds;
        obj2.content = hasOwnProperty(ConjureAppBuildRequestProjectsSheetDefault, obj3);
        obj2.key = ConjureAppBuildRequestProjectSheet;
        obj.showActionSheet(obj2);
      }
      cResult[16] = conjureAppBuildRequestForm.projects;
      cResult[17] = conjureAppBuildRequestForm.setTargetIds;
      cResult[18] = conjureAppBuildRequestForm.targetIds;
      cResult[19] = openSheet;
      let obj2 = onInputFocusChange(stringResult3[7]);
    }
  : function ConjureAppBuildRequestCard(arg0) {
      ({ projectId, request, onInputFocusChange: require } = arg0);
      ({ canSend, onDismiss, onSent } = arg0);
      const tmp = closure_8();
      const conjureAppBuildRequestForm = ConjureAppBuildRequest.useConjureAppBuildRequestForm(
        projectId,
        request,
        canSend,
        onDismiss,
        onSent,
      );
      const projects = conjureAppBuildRequestForm.projects;
      const found = projects.filter((projectId) => {
        const targetIds = conjureAppBuildRequestForm.targetIds;
        return targetIds.includes(projectId.projectId);
      });
      const intl = util.intl;
      const stringResult = intl.string(conjureAppBuildRequestForm(3830)["29gr8j"]);
      dependencyMap = stringResult;
      let obj2 = { style: tmp.card, children: null };
      let obj3 = { style: tmp.header, children: null };
      const obj4 = { style: tmp.heading, children: null };
      obj4.children = closure_5(Text_Text.Text, {
        variant: "text-md/semibold",
        color: "text-default",
        accessibilityRole: "header",
        children: request.summary,
      });
      const items = [closure_5(closure_4, obj4)];
      const obj6 = {
        variant: "tertiary",
        size: "sm",
        icon: closure_5(XSmallIcon.XSmallIcon, { size: "sm" }),
        onPress: conjureAppBuildRequestForm.dismiss,
        accessibilityLabel: null,
      };
      const intl2 = util.intl;
      obj6.accessibilityLabel = intl2.string(conjureAppBuildRequestForm(3830).KQUuAZ);
      items[1] = closure_5(IconButton.IconButton, obj6);
      obj3.children = items;
      const items1 = [closure_6(closure_4, obj3), , ,];
      if (0 === conjureAppBuildRequestForm.projects.length) {
        const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl4 = util.intl;
        obj7.children = intl4.string(tmp5(3830).TbbzW5);
        let tmp10Result = closure_5(Text_Text.Text, obj7);
      } else {
        const obj8 = { title: stringResult, hasIcons: false, children: null };
        if (0 === found.length) {
          const intl3 = util.intl;
          let stringResult1 = intl3.string(tmp5(3830).twlOb6);
        } else {
          const mapped = found.map((name) => name.name);
          stringResult1 = mapped.join(", ");
        }
        const obj9 = { label: stringResult1, subLabel: null, arrow: true, disabled: null, onPress: null };
        let tmp12;
        if (1 === found.length) {
          const serverName = found[0].serverName;
          tmp12 = serverName;
        }
        obj9.subLabel = tmp12;
        obj9.disabled = conjureAppBuildRequestForm.sending;
        obj9.onPress = function openSheet() {
          React3.dismiss();
          const obj2 = { content: null, key: null, stackingBehavior: "stack" };
          const obj3 = {
            title,
            projects: conjureAppBuildRequestForm.projects,
            initialIds: conjureAppBuildRequestForm.targetIds,
            maxSelected: null,
            onChange: null,
          };
          const obj = ActionSheetActionCreators;
          obj3.maxSelected = ConjureAppBuildRequest.CONJURE_APP_BUILD_MAX_TARGETS;
          obj3.onChange = conjureAppBuildRequestForm.setTargetIds;
          obj2.content = hasOwnProperty(ConjureAppBuildRequestProjectsSheetDefault, obj3);
          obj2.key = ConjureAppBuildRequestProjectSheet;
          obj.showActionSheet(obj2);
        };
        obj8.children = closure_5(TableRow.TableRow, obj9);
        tmp10Result = closure_5(TableRowGroup.TableRowGroup, obj8);
      }
      items1[1] = tmp10Result;
      const obj11 = {
        label: null,
        value: null,
        onChange: null,
        maxLength: null,
        disabled: null,
        onFocus: null,
        onBlur: null,
        errorMessage: null,
      };
      const intl5 = util.intl;
      obj11.label = intl5.string(conjureAppBuildRequestForm(3830).XZNsDA);
      ({ prompt: obj10.value, setPrompt: obj10.onChange } = conjureAppBuildRequestForm);
      obj11.maxLength = ConjureAppBuildRequest.CONJURE_APP_BUILD_PROMPT_MAX_LENGTH;
      obj11.disabled = conjureAppBuildRequestForm.sending;
      obj11.onFocus = function onFocus() {
        let tmpResult;
        if (require != null) {
          tmpResult = tmp(true);
        }
        return tmpResult;
      };
      obj11.onBlur = function onBlur() {
        let tmpResult;
        if (require != null) {
          tmpResult = tmp(false);
        }
        return tmpResult;
      };
      let stringResult2;
      if (conjureAppBuildRequestForm.failed) {
        const intl6 = util.intl;
        stringResult2 = intl6.string(tmp5(3830).kMZz8G);
      }
      obj11.errorMessage = stringResult2;
      items1[2] = closure_5(TextArea.TextArea, obj11);
      const obj13 = { style: tmp.footer, children: null };
      const obj24 = { variant: "primary", size: "sm", text: null, disabled: null, loading: null, onPress: null };
      const intl7 = util.intl;
      obj24.text = intl7.string(conjureAppBuildRequestForm(3830).gG4j6o);
      obj24.disabled = !conjureAppBuildRequestForm.canSubmit;
      ({ sending: obj12.loading, submit: obj12.onPress } = conjureAppBuildRequestForm);
      obj13.children = closure_5(components_Button_Button.Button, obj24);
      items1[3] = closure_5(closure_4, obj13);
      obj2.children = items1;
      return closure_6(conjureAppBuildRequestForm(11770), obj2);
    };
