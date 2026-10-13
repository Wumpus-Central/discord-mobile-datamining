// discord_app/modules/conjure/plan/native/ConjurePlanProposalCard.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useConjureAttachmentImage from "../../chat/useConjureAttachmentImage.tsx";
import ConjureNativeCardSurfaceDefault from "../../shared/native/ConjureNativeCardSurface.tsx";
import ConjureNativeCollapsibleSectionDefault from "../../shared/native/ConjureNativeCollapsibleSection.tsx";
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples.tsx";
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview.tsx";
import ConjurePlanWidgetDefault from "ConjurePlanWidget.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  planActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    rowGap: nativeDefault.space.PX_8,
    columnGap: nativeDefault.space.PX_12,
  },
  planReplyHint: { flexShrink: 1 },
  designImage: null,
  designPlaceholder: null,
};
let obj3 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_8,
  columnGap: nativeDefault.space.PX_12,
};
obj2.designImage = {
  width: "100%",
  aspectRatio: 1.6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj4 = {
  width: "100%",
  aspectRatio: 1.6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.designPlaceholder = {
  width: "100%",
  aspectRatio: 1.6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignItems: "center",
  justifyContent: "center",
};
let closure_7 = createStyles.createStyles(obj2);
fn(558);
let obj5 = {
  width: "100%",
  aspectRatio: 1.6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignItems: "center",
  justifyContent: "center",
};
const ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PlanDesign(alt) {
      const cResult = c.c(6);
      alt = alt.alt;
      ({ projectId, design } = alt);
      let designPlaceholder = closure_7();
      const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
      ({ src, handleError } = conjureAttachmentImage);
      if (conjureAttachmentImage.gone) {
        return null;
      } else {
        if (null == src) {
          const obj3 = { style: designPlaceholder.designPlaceholder, children: null };
          const obj4 = { size: "small", accessibilityLabel: alt };
          obj3.children = hasOwnProperty(React3, obj4);
          let tmp5Result = hasOwnProperty(React4, obj3);
        } else {
          const obj5 = {
            source: null,
            style: null,
            resizeMode: "cover",
            onError: null,
            accessible: true,
            accessibilityRole: "image",
            accessibilityLabel: null,
          };
          const obj6 = { uri: src };
          obj5.source = obj6;
          obj5.style = designPlaceholder.designImage;
          obj5.onError = handleError;
          obj5.accessibilityLabel = alt;
          tmp5Result = hasOwnProperty(FastImageDefault, obj5);
        }
        const obj7 = { direction: "vertical", spacing: 4, children: tmp5Result };
        const tmp5Result2 = hasOwnProperty(Stack_Stack.Stack, obj7);
        cResult[0] = alt;
        cResult[1] = handleError;
        cResult[2] = src;
        src = designPlaceholder.designImage;
        cResult[3] = src;
        designPlaceholder = designPlaceholder.designPlaceholder;
        cResult[4] = designPlaceholder;
        cResult[5] = tmp5Result2;
      }
    }
  : function PlanDesign(alt) {
      alt = alt.alt;
      ({ projectId, design } = alt);
      let tmp = closure_7();
      const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
      const src = conjureAttachmentImage.src;
      if (conjureAttachmentImage.gone) {
        return null;
      } else {
        if (null == src) {
          const obj2 = { style: tmp.designPlaceholder, children: null };
          tmp = React3;
          const obj3 = { size: "small", accessibilityLabel: alt };
          obj2.children = hasOwnProperty(React3, obj3);
          let tmp6Result = hasOwnProperty(React4, obj2);
        } else {
          const obj4 = {
            source: null,
            style: null,
            resizeMode: "cover",
            onError: null,
            accessible: true,
            accessibilityRole: "image",
            accessibilityLabel: null,
          };
          const obj5 = { uri: src };
          obj4.source = obj5;
          obj4.style = tmp.designImage;
          obj4.onError = tmp5;
          obj4.accessibilityLabel = alt;
          tmp6Result = hasOwnProperty(FastImageDefault, obj4);
        }
        const obj6 = { direction: "vertical", spacing: 4, children: tmp6Result };
        hasOwnProperty(Stack_Stack.Stack, obj6);
      }
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePlanProposalCard(arg0) {
      const tmp = obj28;
      const cResult = obj28(576).c(83);
      ({ projectId, proposal, version, superseded, expanded, onToggleExpanded, onApprove } = arg0);
      const tmp6 = closure_7();
      const trimmed = proposal.summary.trim();
      if (cResult[0] !== proposal.what_changed) {
        let str3;
        if (proposal.what_changed != null) {
          str3 = str2.trim();
        }
        if (str3 == null) {
          str3 = "";
        }
        cResult[0] = proposal.what_changed;
        cResult[1] = str3;
        let tmp8 = str3;
      } else {
        tmp8 = cResult[1];
      }
      let bot_permissions = proposal.bot_permissions;
      if (bot_permissions == null) {
        bot_permissions = [];
      }
      const mapped = bot_permissions.map(tmp(11900).formatConjurePlanRequirementName);
      let privileged_intents = proposal.privileged_intents;
      if (privileged_intents == null) {
        privileged_intents = [];
      }
      const mapped1 = privileged_intents.map(tmp(11900).formatConjurePlanRequirementName);
      let obj = obj28(576);
      let automod = null;
      if (tmpResult.planDeclaresSurface(proposal, tmp(6947).ConjureSupportedSurface.AUTOMOD)) {
        automod = proposal.automod;
      }
      tmpResult = tmp(11901);
      const conjurePlanWidget = tmp(11902).useConjurePlanWidget(projectId, proposal);
      if (cResult[2] === proposal) {
        if (cResult[3] === conjurePlanWidget) {
          let tmp12 = cResult[4];
        }
        const botExchanges = tmp(11905).useConjurePlanBotExchanges(proposal).botExchanges;
        if (cResult[5] === automod) {
          if (cResult[6] === botExchanges) {
            if (cResult[7] === projectId) {
              if (cResult[8] === proposal) {
                if (cResult[9] === tmp12) {
                  obj28 = cResult[10];
                }
                if (cResult[28] === tmp14) {
                  if (cResult[29] === proposal) {
                    importDefault = cResult[30];
                    let arr7 = cResult[31];
                  }
                  const tmp48 = ConjureNativeCardSurfaceDefault;
                  const tmp49 = ConjureNativeCollapsibleSectionDefault;
                  if (cResult[32] === tmp4) {
                    if (cResult[33] === version) {
                      if (cResult[35] !== tmp4) {
                        let tmp54 = null;
                        if (tmp4) {
                          let obj2 = { children: null };
                          const intl8 = tmp(1126).intl;
                          obj2.children = intl8.string(tmp47(3849).hF2c41);
                          tmp54 = closure_5(tmp(11898).ConjureNativeCollapsibleMeta, obj2);
                        }
                        cResult[35] = tmp4;
                        cResult[36] = tmp54;
                        let tmp53 = tmp54;
                      } else {
                        tmp53 = cResult[36];
                      }
                      const _Symbol = Symbol;
                      if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl9 = tmp(1126).intl;
                        const stringResult = intl9.string(tmp47(3849).yD8EJS);
                        const intl10 = tmp(1126).intl;
                        const stringResult1 = intl10.string(tmp47(3849).nSPGNb);
                        cResult[37] = stringResult;
                        cResult[38] = stringResult1;
                        let tmp58 = stringResult1;
                        let tmp57 = stringResult;
                      } else {
                        tmp57 = cResult[37];
                        tmp58 = cResult[38];
                      }
                      const Stack = tmp(5377).Stack;
                      if (cResult[39] !== tmp8) {
                        let tmp62 = null;
                        if ("" !== tmp8) {
                          let obj3 = { direction: "vertical", spacing: 4, children: null };
                          const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                          const intl19 = tmp(1126).intl;
                          obj4.children = intl19.string(tmp47(3849).iNS4dl);
                          let items = [closure_5(tmp(5088).Text, obj4)];
                          const obj5 = { variant: "text-md/normal", color: "text-default", children: tmp8 };
                          items[1] = closure_5(tmp(5088).Text, obj5);
                          obj3.children = items;
                          tmp62 = closure_6(tmp(5377).Stack, obj3);
                        }
                        cResult[39] = tmp8;
                        cResult[40] = tmp62;
                        let tmp61 = tmp62;
                      } else {
                        tmp61 = cResult[40];
                      }
                      if ("" === trimmed) {
                        const intl11 = tmp(1126).intl;
                        let stringResult2 = intl11.string(tmp47(3849)["0+RUWx"]);
                      } else {
                        stringResult2 = tmp47(5079).parse(trimmed, true, tmp(11830).CONJURE_MARKUP_OPTIONS);
                        const tmp47Result = tmp47(5079);
                      }
                      if (cResult[41] !== stringResult2) {
                        const obj6 = { variant: "text-md/normal", color: "text-default", children: stringResult2 };
                        const tmp66 = closure_5(tmp(5088).Text, obj6);
                        cResult[41] = stringResult2;
                        cResult[42] = tmp66;
                        let tmp64 = tmp66;
                      } else {
                        tmp64 = cResult[42];
                      }
                      if (cResult[43] === tmp5) {
                        if (cResult[44] === tmp14) {
                          if (cResult[45] === arr6) {
                            if (cResult[46] === tmp4) {
                              let tmp67 = cResult[47];
                            }
                            if (cResult[48] === tmp14) {
                              if (cResult[49] === arr7) {
                                let tmp74 = cResult[50];
                              }
                              if (cResult[51] !== proposal.changes) {
                                let tmp77 = null;
                                if (proposal.changes.length > 0) {
                                  const obj7 = { direction: "vertical", spacing: 4, children: null };
                                  const obj8 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                                  const intl13 = tmp(1126).intl;
                                  obj8.children = intl13.string(tmp47(3849)["5+mG1z"]);
                                  const items1 = [closure_5(tmp(5088).Text, obj8)];
                                  const changes = proposal.changes;
                                  items1[1] = changes.map((item, index) =>
                                    closure_1_5(
                                      obj28(5088).Text,
                                      { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item },
                                      index,
                                    ),
                                  );
                                  obj7.children = items1;
                                  tmp77 = closure_6(tmp(5377).Stack, obj7);
                                }
                                cResult[51] = proposal.changes;
                                cResult[52] = tmp77;
                                let tmp76 = tmp77;
                              } else {
                                tmp76 = cResult[52];
                              }
                              if (cResult[53] !== proposal.commands) {
                                let tmp81 = null;
                                if (proposal.commands.length > 0) {
                                  const obj9 = { direction: "vertical", spacing: 4, children: null };
                                  const obj10 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                                  const intl14 = tmp(1126).intl;
                                  obj10.children = intl14.string(tmp(1126).t["0hKkS+"]);
                                  const items2 = [closure_5(tmp(5088).Text, obj10)];
                                  const commands = proposal.commands;
                                  items2[1] = commands.map((name, index) => {
                                    const obj = {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: "" + obj28(11900).conjurePlanCommandPrefix(name) + name.name,
                                    };
                                    const children = [closure_1_5(obj28(5088).Text, obj)];
                                    let tmp3Result = null;
                                    if (null != name.description) {
                                      tmp3Result = null;
                                      if ("" !== name.description) {
                                        const obj3 = {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: name.description,
                                        };
                                        tmp3Result = closure_1_5(obj28(5088).Text, obj3);
                                      }
                                    }
                                    children[1] = tmp3Result;
                                    return closure_1_6(closure_1_4, { children }, index);
                                  });
                                  obj9.children = items2;
                                  tmp81 = closure_6(tmp(5377).Stack, obj9);
                                }
                                cResult[53] = proposal.commands;
                                cResult[54] = tmp81;
                                let tmp80 = tmp81;
                              } else {
                                tmp80 = cResult[54];
                              }
                              let tmp84 = null;
                              if (mapped.length > 0) {
                                const obj11 = { direction: "vertical", spacing: 4, children: null };
                                const obj12 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                                const intl15 = tmp(1126).intl;
                                obj12.children = intl15.string(tmp47(3849)["2UbW6r"]);
                                const items3 = [closure_5(tmp(5088).Text, obj12)];
                                const obj13 = {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: mapped.join(", "),
                                };
                                items3[1] = closure_5(tmp(5088).Text, obj13);
                                obj11.children = items3;
                                tmp84 = closure_6(tmp(5377).Stack, obj11);
                              }
                              let tmp87 = null;
                              if (mapped1.length > 0) {
                                const obj14 = { direction: "vertical", spacing: 4, children: null };
                                const obj15 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                                const intl16 = tmp(1126).intl;
                                obj15.children = intl16.string(tmp47(3849)["7TKfpj"]);
                                const items4 = [closure_5(tmp(5088).Text, obj15)];
                                const obj16 = {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: mapped1.join(", "),
                                };
                                items4[1] = closure_5(tmp(5088).Text, obj16);
                                obj14.children = items4;
                                tmp87 = closure_6(tmp(5377).Stack, obj14);
                              }
                              if (cResult[55] === onApprove) {
                                if (cResult[56] === tmp6) {
                                  if (cResult[57] === tmp4) {
                                    let tmp90 = cResult[58];
                                  }
                                  if (cResult[59] === Stack) {
                                    if (cResult[60] === tmp61) {
                                      if (cResult[61] === tmp64) {
                                        if (cResult[62] === tmp67) {
                                          if (cResult[63] === tmp74) {
                                            if (cResult[64] === tmp76) {
                                              if (cResult[65] === tmp80) {
                                                if (cResult[66] === tmp84) {
                                                  if (cResult[67] === tmp87) {
                                                    if (cResult[68] === tmp90) {
                                                      let tmp95 = cResult[69];
                                                    }
                                                    if (cResult[70] === tmp49) {
                                                      if (cResult[71] === tmp5) {
                                                        if (cResult[72] === onToggleExpanded) {
                                                          if (cResult[73] === tmp4) {
                                                            if (cResult[74] === tmp95) {
                                                              if (cResult[75] === tmp50) {
                                                                if (cResult[76] === tmp53) {
                                                                  if (cResult[77] === tmp57) {
                                                                    if (cResult[78] === tmp58) {
                                                                      let tmp98 = cResult[79];
                                                                    }
                                                                    if (cResult[80] === tmp48) {
                                                                      if (cResult[81] === tmp98) {
                                                                        let tmp101 = cResult[82];
                                                                      }
                                                                      return tmp101;
                                                                    }
                                                                    const obj17 = { children: tmp98 };
                                                                    const tmp103 = closure_5(tmp48, obj17);
                                                                    cResult[80] = tmp48;
                                                                    cResult[81] = tmp98;
                                                                    cResult[82] = tmp103;
                                                                    tmp101 = tmp103;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj18 = {
                                                      title: tmp50,
                                                      meta: tmp53,
                                                      superseded: tmp4,
                                                      expanded: tmp5,
                                                      onToggleExpanded,
                                                      showLabel: tmp57,
                                                      hideLabel: tmp58,
                                                      children: tmp95,
                                                    };
                                                    const tmp100 = closure_5(tmp49, obj18);
                                                    cResult[70] = tmp49;
                                                    cResult[71] = tmp5;
                                                    cResult[72] = onToggleExpanded;
                                                    cResult[73] = tmp4;
                                                    cResult[74] = tmp95;
                                                    cResult[75] = tmp50;
                                                    cResult[76] = tmp53;
                                                    cResult[77] = tmp57;
                                                    cResult[78] = tmp58;
                                                    cResult[79] = tmp100;
                                                    tmp98 = tmp100;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj19 = { direction: "vertical", spacing: 8, children: null };
                                  const items5 = [tmp61, tmp64, tmp67, tmp74, tmp76, tmp80, tmp84, tmp87, tmp90];
                                  obj19.children = items5;
                                  const tmp97 = closure_6(Stack, obj19);
                                  cResult[59] = Stack;
                                  cResult[60] = tmp61;
                                  cResult[61] = tmp64;
                                  cResult[62] = tmp67;
                                  cResult[63] = tmp74;
                                  cResult[64] = tmp76;
                                  cResult[65] = tmp80;
                                  cResult[66] = tmp84;
                                  cResult[67] = tmp87;
                                  cResult[68] = tmp90;
                                  cResult[69] = tmp97;
                                  tmp95 = tmp97;
                                }
                              }
                              let tmp91 = null;
                              if (null != onApprove) {
                                tmp91 = null;
                                if (!tmp4) {
                                  const obj20 = { style: tmp6.planActions, children: null };
                                  const obj21 = { text: null, variant: "primary", onPress: null };
                                  const intl17 = tmp(1126).intl;
                                  obj21.text = intl17.string(tmp47(3849)["6S+wRM"]);
                                  obj21.onPress = onApprove;
                                  const items6 = [closure_5(tmp(5379).Button, obj21)];
                                  const obj22 = {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    style: tmp6.planReplyHint,
                                    children: null,
                                  };
                                  const intl18 = tmp(1126).intl;
                                  obj22.children = intl18.string(tmp47(3849).IZoqbR);
                                  items6[1] = closure_5(tmp(5088).Text, obj22);
                                  obj20.children = items6;
                                  tmp91 = closure_6(closure_4, obj20);
                                }
                              }
                              cResult[55] = onApprove;
                              cResult[56] = tmp6;
                              cResult[57] = tmp4;
                              cResult[58] = tmp91;
                              tmp90 = tmp91;
                            }
                            const mapped2 = arr7.map((item) => {
                              let tmp2 = null;
                              if (null != obj28[item]) {
                                const obj = { direction: "vertical", spacing: 4, children: null };
                                const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: tmp.label };
                                const items = [hasOwnProperty(Text_Text.Text, obj2), tmp.content];
                                obj.children = items;
                                tmp2 = timestampProducer(Stack_Stack.Stack, obj, item);
                              }
                              return tmp2;
                            });
                            cResult[48] = tmp14;
                            cResult[49] = arr7;
                            cResult[50] = mapped2;
                            tmp74 = mapped2;
                          }
                        }
                      }
                      if (arr6.length <= 0) {
                        cResult[43] = tmp5;
                        cResult[44] = tmp14;
                        cResult[45] = arr6;
                        cResult[46] = tmp4;
                        cResult[47] = null;
                        tmp67 = null;
                      } else {
                        const obj23 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                        const intl12 = tmp(1126).intl;
                        obj23.children = intl12.string(tmp47(3849).mrMYrN);
                        const items7 = [closure_5(tmp(5088).Text, obj23)];
                        if (1 === arr6.length) {
                          const obj24 = { row: arr6[0], previews: tmp14 };
                          let tmp70Result = closure_5(tmp(11916).ConjurePlanSingleSurface, obj24);
                        } else {
                          const obj25 = { rows: arr6, previews: tmp14, cycling: null };
                          let tmp71 = !tmp4;
                          if (!tmp4) {
                            tmp71 = tmp5;
                          }
                          obj25.cycling = tmp71;
                          tmp70Result = closure_5(tmp(11916).ConjurePlanSurfaceNav, obj25);
                        }
                        const obj26 = { direction: "vertical", spacing: 12, children: null };
                        items7[1] = tmp70Result;
                        obj26.children = items7;
                        closure_6(tmp(5377).Stack, obj26);
                      }
                    }
                  }
                  if (!tmp4) {
                    const intl6 = tmp(1126).intl;
                    let stringResult3 = intl6.string(tmp47(3849)["3b6e7o"]);
                    cResult[32] = tmp4;
                    cResult[33] = version;
                    cResult[34] = stringResult3;
                  }
                  const intl7 = tmp(1126).intl;
                  const obj27 = { version };
                  stringResult3 = intl7.formatToPlainString(tmp47(3849).YZ3qJs, obj27);
                }
                const _Object = Object;
                const keys = Object.keys(tmp14);
                const result = tmp(11915).conjurePlanSurfaceRows(proposal, keys);
                importDefault = result;
                const found = keys.filter((item) => {
                  closure_0 = item;
                  return !result.some((preview) => preview.preview === closure_0);
                });
                cResult[28] = tmp14;
                cResult[29] = proposal;
                cResult[30] = result;
                cResult[31] = found;
                arr7 = found;
                const tmpResult8 = tmp(11915);
              }
            }
          }
        }
        obj28 = {};
        if (null != automod) {
          if (automod.examples.length > 0) {
            const _Symbol2 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult4 = intl.string(_modDef3849.z4ZKYG);
              cResult[11] = stringResult4;
              let tmp15 = stringResult4;
            } else {
              tmp15 = cResult[11];
            }
            if (cResult[12] !== automod) {
              const obj29 = { label: tmp15, content: null };
              const obj30 = { automod };
              tmp15 = closure_5(ConjurePlanAutomodExamplesDefault, obj30);
              obj29.content = tmp15;
              cResult[12] = automod;
              cResult[13] = obj29;
              let tmp18 = obj29;
            } else {
              tmp18 = cResult[13];
            }
            obj28.automod = tmp18;
          }
        }
        if (null == proposal.design_image) {
          if (botExchanges.length <= 0) {
            if (null == tmp12) {
              cResult[5] = automod;
              cResult[6] = botExchanges;
              cResult[7] = projectId;
              cResult[8] = proposal;
              cResult[9] = tmp12;
              cResult[10] = obj28;
            } else {
              const _Symbol5 = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                const intl5 = tmp(1126).intl;
                const stringResult5 = intl5.string(_modDef3849.ove4zH);
                cResult[25] = stringResult5;
                let tmp34 = stringResult5;
              } else {
                tmp34 = cResult[25];
              }
              if (cResult[26] !== tmp12) {
                const obj31 = { label: tmp34, content: null };
                const obj32 = {};
                const merged = Object.assign(tmp12);
                tmp34 = closure_5(ConjurePlanWidgetDefault, obj32);
                obj31.content = tmp34;
                cResult[26] = tmp12;
                cResult[27] = obj31;
                let tmp37 = obj31;
              } else {
                tmp37 = cResult[27];
              }
              obj28.widget = tmp37;
            }
          } else {
            const _Symbol4 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult6 = intl4.string(_modDef3849.sA1lTv);
              cResult[21] = stringResult6;
              let tmp28 = stringResult6;
            } else {
              tmp28 = cResult[21];
            }
            if (cResult[22] === botExchanges) {
              if (cResult[23] === projectId) {
                let tmp31 = cResult[24];
              }
              obj28.bot = tmp31;
            }
            const obj33 = { label: tmp28, content: null };
            const obj34 = { projectId, exchanges: botExchanges };
            tmp28 = closure_5(ConjurePlanBotPreviewDefault, obj34);
            obj33.content = tmp28;
            cResult[22] = botExchanges;
            cResult[23] = projectId;
            cResult[24] = obj33;
            tmp31 = obj33;
          }
        } else {
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult7 = intl2.string(_modDef3849.X15LLY);
            cResult[14] = stringResult7;
            let design_image = stringResult7;
          } else {
            design_image = cResult[14];
          }
          if (cResult[15] !== proposal) {
            const intl3 = tmp(1126).intl;
            const stringResult8 = intl3.string(tmp(11909).conjurePlanDesignAlt(proposal));
            cResult[15] = proposal;
            cResult[16] = stringResult8;
            let tmp23 = stringResult8;
            const tmpResult9 = tmp(11909);
          } else {
            tmp23 = cResult[16];
          }
          if (cResult[17] === projectId) {
            if (cResult[18] === proposal.design_image) {
              if (cResult[19] === tmp23) {
                let tmp25 = cResult[20];
              }
              obj28.design = tmp25;
            }
          }
          const obj35 = { label: design_image, content: null };
          const obj36 = { projectId, design: proposal.design_image, alt: tmp23 };
          obj35.content = closure_5(closure_8, obj36);
          cResult[17] = projectId;
          design_image = proposal.design_image;
          cResult[18] = design_image;
          cResult[19] = tmp23;
          cResult[20] = obj35;
          tmp25 = obj35;
        }
        const tmpResult7 = tmp(11905);
      }
      const tmpResult6 = tmp(11902);
      let tmp13 = null;
      if (tmpResult10.planDeclaresSurface(proposal, tmp(6947).ConjureSupportedSurface.PROFILE_WIDGET)) {
        tmp13 = conjurePlanWidget;
      }
      cResult[2] = proposal;
      cResult[3] = conjurePlanWidget;
      cResult[4] = tmp13;
      tmp12 = tmp13;
      tmpResult10 = tmp(11901);
    }
  : function ConjurePlanProposalCard(expanded) {
      ({ projectId, proposal, version, superseded } = expanded);
      if (superseded === undefined) {
        superseded = false;
      }
      let flag = expanded.expanded;
      if (flag === undefined) {
        flag = true;
      }
      const onApprove = expanded.onApprove;
      let previews;
      importDefault = undefined;
      const tmp = closure_7();
      const trimmed = proposal.summary.trim();
      let str3;
      if (proposal.what_changed != null) {
        str3 = str2.trim();
      }
      if (str3 == null) {
        str3 = "";
      }
      let bot_permissions = proposal.bot_permissions;
      if (bot_permissions == null) {
        bot_permissions = [];
      }
      const tmp3 = previews;
      const mapped = bot_permissions.map(previews(11900).formatConjurePlanRequirementName);
      let privileged_intents = proposal.privileged_intents;
      if (privileged_intents == null) {
        privileged_intents = [];
      }
      const mapped1 = privileged_intents.map(tmp3(11900).formatConjurePlanRequirementName);
      let automod = null;
      if (tmp3Result.planDeclaresSurface(proposal, tmp3(6947).ConjureSupportedSurface.AUTOMOD)) {
        automod = proposal.automod;
      }
      tmp3Result = tmp3(11901);
      const conjurePlanWidget = tmp3(11902).useConjurePlanWidget(projectId, proposal);
      const tmp3Result6 = tmp3(11902);
      let tmp7 = null;
      if (tmp3Result7.planDeclaresSurface(proposal, tmp3(6947).ConjureSupportedSurface.PROFILE_WIDGET)) {
        tmp7 = conjurePlanWidget;
      }
      tmp3Result7 = tmp3(11901);
      const botExchanges = tmp3(11905).useConjurePlanBotExchanges(proposal).botExchanges;
      previews = {};
      let tmp8 = null != automod;
      if (tmp8) {
        tmp8 = automod.examples.length > 0;
      }
      if (tmp8) {
        let obj2 = { label: null, content: null };
        const intl = tmp3(1126).intl;
        obj2.label = intl.string(_modDef3849.z4ZKYG);
        let obj3 = { automod };
        obj2.content = closure_5(ConjurePlanAutomodExamplesDefault, obj3);
        previews.automod = obj2;
      }
      if (null != proposal.design_image) {
        const obj4 = { label: null, content: null };
        const intl17 = tmp3(1126).intl;
        obj4.label = intl17.string(_modDef3849.X15LLY);
        const obj5 = { projectId, design: proposal.design_image, alt: null };
        const intl18 = tmp3(1126).intl;
        obj5.alt = intl18.string(tmp3(11909).conjurePlanDesignAlt(proposal));
        obj4.content = closure_5(closure_8, obj5);
        previews.design = obj4;
        const tmp3Result9 = tmp3(11909);
      }
      if (botExchanges.length > 0) {
        const obj6 = { label: null, content: null };
        const intl2 = tmp3(1126).intl;
        obj6.label = intl2.string(_modDef3849.sA1lTv);
        const obj7 = { projectId, exchanges: botExchanges };
        obj6.content = closure_5(ConjurePlanBotPreviewDefault, obj7);
        previews.bot = obj6;
      }
      if (null != tmp7) {
        const obj8 = { label: null, content: null };
        const intl3 = tmp3(1126).intl;
        obj8.label = intl3.string(_modDef3849.ove4zH);
        const obj9 = {};
        const merged = Object.assign(tmp7);
        obj8.content = closure_5(ConjurePlanWidgetDefault, obj9);
        previews.widget = obj8;
      }
      const keys = Object.keys(previews);
      const tmp3Result8 = tmp3(11905);
      let result = tmp3(11915).conjurePlanSurfaceRows(proposal, keys);
      importDefault = result;
      const found = keys.filter((item) => {
        closure_0 = item;
        return !_undefined.some((preview) => preview.preview === closure_0);
      });
      const tmp3Result10 = tmp3(11915);
      if (superseded) {
        if (null != version) {
          const intl5 = tmp3(1126).intl;
          const obj10 = { version };
          let formatToPlainStringResult = intl5.formatToPlainString(tmp20(3849).YZ3qJs, obj10);
        }
        const obj11 = {
          title: formatToPlainStringResult,
          meta: null,
          superseded: null,
          expanded: null,
          onToggleExpanded: null,
          showLabel: null,
          hideLabel: null,
          children: null,
        };
        let tmp19Result = null;
        if (superseded) {
          const obj12 = { children: null };
          const intl6 = tmp3(1126).intl;
          obj12.children = intl6.string(tmp20(3849).hF2c41);
          tmp19Result = closure_5(tmp3(11898).ConjureNativeCollapsibleMeta, obj12);
        }
        obj11.meta = tmp19Result;
        obj11.superseded = superseded;
        obj11.expanded = flag;
        obj11.onToggleExpanded = expanded.onToggleExpanded;
        const intl7 = tmp3(1126).intl;
        obj11.showLabel = intl7.string(tmp20(3849).yD8EJS);
        const intl8 = tmp3(1126).intl;
        obj11.hideLabel = intl8.string(tmp20(3849).nSPGNb);
        let tmp25Result = null;
        if ("" !== str3) {
          const obj13 = { direction: "vertical", spacing: 4, children: null };
          const obj14 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl19 = tmp3(1126).intl;
          obj14.children = intl19.string(tmp20(3849).iNS4dl);
          let items = [closure_5(tmp3(5088).Text, obj14)];
          const obj15 = { variant: "text-md/normal", color: "text-default", children: str3 };
          items[1] = closure_5(tmp3(5088).Text, obj15);
          obj13.children = items;
          tmp25Result = closure_6(tmp3(5377).Stack, obj13);
        }
        const items1 = [tmp25Result, , , , , , , ,];
        if ("" === trimmed) {
          const intl9 = tmp3(1126).intl;
          let stringResult = intl9.string(tmp20(3849)["0+RUWx"]);
        } else {
          stringResult = tmp20(5079).parse(trimmed, true, tmp3(11830).CONJURE_MARKUP_OPTIONS);
          const tmp20Result = tmp20(5079);
        }
        const obj16 = { variant: "text-md/normal", color: "text-default", children: stringResult };
        items1[1] = closure_5(tmp3(5088).Text, obj16);
        if (result.length <= 0) {
          items1[2] = null;
          items1[3] = found.map((item) => {
            let tmp2 = null;
            if (null != obj[item]) {
              obj = { direction: "vertical", spacing: 4, children: null };
              const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: tmp.label };
              const items = [hasOwnProperty(Text_Text.Text, obj2), tmp.content];
              obj.children = items;
              tmp2 = timestampProducer(Stack_Stack.Stack, obj, item);
            }
            return tmp2;
          });
          let tmp25Result7 = null;
          if (proposal.changes.length > 0) {
            const obj17 = { direction: "vertical", spacing: 4, children: null };
            const obj18 = { variant: "text-sm/semibold", color: "text-muted", children: null };
            const intl11 = tmp3(1126).intl;
            obj18.children = intl11.string(tmp20(3849)["5+mG1z"]);
            const items2 = [closure_5(tmp3(5088).Text, obj18)];
            const changes = proposal.changes;
            items2[1] = changes.map((item, index) => {
              const obj = { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item };
              return closure_1_5(obj(5088).Text, obj, index);
            });
            obj17.children = items2;
            tmp25Result7 = closure_6(tmp3(5377).Stack, obj17);
          }
          items1[4] = tmp25Result7;
          let tmp25Result8 = null;
          if (proposal.commands.length > 0) {
            const obj19 = { direction: "vertical", spacing: 4, children: null };
            const obj20 = { variant: "text-sm/semibold", color: "text-muted", children: null };
            const intl12 = tmp3(1126).intl;
            obj20.children = intl12.string(tmp3(1126).t["0hKkS+"]);
            const items3 = [closure_5(tmp3(5088).Text, obj20)];
            const commands = proposal.commands;
            items3[1] = commands.map((name, index) => {
              obj = {
                variant: "text-sm/medium",
                color: "text-default",
                children: "" + obj(11900).conjurePlanCommandPrefix(name) + name.name,
              };
              const children = [closure_1_5(obj(5088).Text, obj)];
              let tmp3Result = null;
              if (null != name.description) {
                tmp3Result = null;
                if ("" !== name.description) {
                  const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
                  tmp3Result = closure_1_5(obj(5088).Text, obj3);
                }
              }
              children[1] = tmp3Result;
              return closure_1_6(closure_1_4, { children }, index);
            });
            obj19.children = items3;
            tmp25Result8 = closure_6(tmp3(5377).Stack, obj19);
          }
          items1[5] = tmp25Result8;
          let tmp25Result9 = null;
          if (mapped.length > 0) {
            const obj21 = { direction: "vertical", spacing: 4, children: null };
            const obj22 = { variant: "text-sm/semibold", color: "text-muted", children: null };
            const intl13 = tmp3(1126).intl;
            obj22.children = intl13.string(tmp20(3849)["2UbW6r"]);
            const items4 = [closure_5(tmp3(5088).Text, obj22)];
            const obj23 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
            items4[1] = closure_5(tmp3(5088).Text, obj23);
            obj21.children = items4;
            tmp25Result9 = closure_6(tmp3(5377).Stack, obj21);
          }
          items1[6] = tmp25Result9;
          let tmp25Result10 = null;
          if (mapped1.length > 0) {
            const obj24 = { direction: "vertical", spacing: 4, children: null };
            const obj25 = { variant: "text-sm/semibold", color: "text-muted", children: null };
            const intl14 = tmp3(1126).intl;
            obj25.children = intl14.string(tmp20(3849)["7TKfpj"]);
            const items5 = [closure_5(tmp3(5088).Text, obj25)];
            const obj26 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
            items5[1] = closure_5(tmp3(5088).Text, obj26);
            obj24.children = items5;
            tmp25Result10 = closure_6(tmp3(5377).Stack, obj24);
          }
          items1[7] = tmp25Result10;
          let tmp25Result11 = null;
          if (null != onApprove) {
            tmp25Result11 = null;
            if (!superseded) {
              const obj27 = { style: tmp.planActions, children: null };
              const obj28 = { text: null, variant: "primary", onPress: null };
              const intl15 = tmp3(1126).intl;
              obj28.text = intl15.string(tmp20(3849)["6S+wRM"]);
              obj28.onPress = onApprove;
              const items6 = [closure_5(tmp3(5379).Button, obj28)];
              const obj29 = {
                variant: "text-sm/normal",
                color: "text-muted",
                style: tmp.planReplyHint,
                children: null,
              };
              const intl16 = tmp3(1126).intl;
              obj29.children = intl16.string(tmp20(3849).IZoqbR);
              items6[1] = closure_5(tmp3(5088).Text, obj29);
              obj27.children = items6;
              tmp25Result11 = closure_6(closure_4, obj27);
            }
          }
          const obj30 = { children: null };
          const obj31 = { direction: "vertical", spacing: 8, children: null };
          items1[8] = tmp25Result11;
          obj31.children = items1;
          obj11.children = closure_6(tmp3(5377).Stack, obj31);
          obj30.children = closure_5(tmp22, obj11);
          return closure_5(tmp21, obj30);
        } else {
          const obj32 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl10 = tmp3(1126).intl;
          obj32.children = intl10.string(tmp20(3849).mrMYrN);
          const items7 = [closure_5(tmp3(5088).Text, obj32)];
          if (1 === result.length) {
            const obj33 = { row: null, previews: null };
            result = result[0];
            obj33.row = result;
            obj33.previews = previews;
            let tmp19Result2 = closure_5(tmp3(11916).ConjurePlanSingleSurface, obj33);
          } else {
            const obj34 = { rows: result, previews, cycling: null };
            let tmp29 = !superseded;
            if (!superseded) {
              tmp29 = flag;
            }
            obj34.cycling = tmp29;
            tmp19Result2 = closure_5(tmp3(11916).ConjurePlanSurfaceNav, obj34);
          }
          const obj35 = { direction: "vertical", spacing: 12, children: null };
          items7[1] = tmp19Result2;
          obj35.children = items7;
          closure_6(tmp3(5377).Stack, obj35);
        }
      }
      const intl4 = tmp3(1126).intl;
      formatToPlainStringResult = intl4.string(tmp20(3849)["3b6e7o"]);
      tmp21 = ConjureNativeCardSurfaceDefault;
    };
