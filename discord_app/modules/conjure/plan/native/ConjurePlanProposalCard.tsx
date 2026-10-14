// === Module 11927: ConjurePlanProposalCard ===

// Module 11927 (ConjurePlanProposalCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 5034 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5083 */;
import Text_Text from "Text/Text" /* 5092 */;
import Stack_Stack from "Stack/Stack" /* 5382 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 11868 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 11923 */;
import ConjurePlanCommandText from "ConjurePlanCommandText" /* 11945 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5096);
let obj2 = { planActions: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12 }, planReplyHint: { flexShrink: 1 }, designImage: null, designPlaceholder: null };
let obj3 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12 };
obj2.designImage = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj4 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.designPlaceholder = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_8 = createStyles.createStyles(obj2);
fn(558);
let obj5 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(alt) {
  const cResult = c.c(6);
  alt = alt.alt;
  ({ projectId, design } = alt);
  let designPlaceholder = closure_8();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    if (null == src) {
      const obj3 = { style: designPlaceholder.designPlaceholder, children: null };
      const obj4 = { size: "small", accessibilityLabel: alt };
      obj3.children = timestampProducer(React4, obj4);
      let tmp5Result = timestampProducer(hasOwnProperty, obj3);
    } else {
      const obj5 = { source: null, style: null, resizeMode: "cover", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
      const obj6 = { uri: src };
      obj5.source = obj6;
      obj5.style = designPlaceholder.designImage;
      obj5.onError = handleError;
      obj5.accessibilityLabel = alt;
      tmp5Result = timestampProducer(FastImageDefault, obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: tmp5Result };
    const tmp5Result2 = timestampProducer(Stack_Stack.Stack, obj7);
    cResult[0] = alt;
    cResult[1] = handleError;
    cResult[2] = src;
    src = designPlaceholder.designImage;
    cResult[3] = src;
    designPlaceholder = designPlaceholder.designPlaceholder;
    cResult[4] = designPlaceholder;
    cResult[5] = tmp5Result2;
  }
}) : (function PlanDesign(alt) {
  alt = alt.alt;
  ({ projectId, design } = alt);
  let tmp = closure_8();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
  const src = conjureAttachmentImage.src;
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    if (null == src) {
      const obj2 = { style: tmp.designPlaceholder, children: null };
      tmp = React4;
      const obj3 = { size: "small", accessibilityLabel: alt };
      obj2.children = timestampProducer(React4, obj3);
      let tmp6Result = timestampProducer(hasOwnProperty, obj2);
    } else {
      const obj4 = { source: null, style: null, resizeMode: "cover", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
      const obj5 = { uri: src };
      obj4.source = obj5;
      obj4.style = tmp.designImage;
      obj4.onError = tmp5;
      obj4.accessibilityLabel = alt;
      tmp6Result = timestampProducer(FastImageDefault, obj4);
    }
    const obj6 = { direction: "vertical", spacing: 4, children: tmp6Result };
    timestampProducer(Stack_Stack.Stack, obj6);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanProposalCard(arg0) {
  const tmp = conjurePlanSlashCommandNames;
  const cResult = conjurePlanSlashCommandNames(576).c(94);
  ({ projectId, proposal, version, superseded, expanded, onToggleExpanded, onApprove } = arg0);
  const tmp6 = closure_8();
  if (cResult[0] !== proposal.summary) {
    const trimmed = proposal.summary.trim();
    cResult[0] = proposal.summary;
    cResult[1] = trimmed;
    let tmp7 = trimmed;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== proposal.what_changed) {
    let str3;
    if (proposal.what_changed != null) {
      str3 = str2.trim();
    }
    if (str3 == null) {
      str3 = "";
    }
    cResult[2] = proposal.what_changed;
    cResult[3] = str3;
    let tmp9 = str3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp7) {
    const parsed = obj31(5083).parse(tmp7, true, tmp(11868).CONJURE_MARKUP_OPTIONS);
    cResult[4] = tmp7;
    cResult[5] = parsed;
    let tmp11 = parsed;
    let obj2 = obj31(5083);
  } else {
    tmp11 = cResult[5];
  }
  let obj = conjurePlanSlashCommandNames(576);
  conjurePlanSlashCommandNames = tmp(11928).useConjurePlanSlashCommandNames(proposal.commands);
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  const mapped = bot_permissions.map(tmp(11929).formatConjurePlanRequirementName);
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const mapped1 = privileged_intents.map(tmp(11929).formatConjurePlanRequirementName);
  const tmpResult = tmp(11928);
  let automod = null;
  if (tmpResult7.planDeclaresSurface(proposal, tmp(6952).ConjureSupportedSurface.AUTOMOD)) {
    automod = proposal.automod;
  }
  tmpResult7 = tmp(11930);
  const conjurePlanWidget = tmp(11931).useConjurePlanWidget(projectId, proposal);
  if (cResult[6] === proposal) {
    if (cResult[7] === conjurePlanWidget) {
      let tmp17 = cResult[8];
    }
    const botExchanges = tmp(11934).useConjurePlanBotExchanges(proposal).botExchanges;
    if (cResult[9] === automod) {
      if (cResult[10] === botExchanges) {
        if (cResult[11] === projectId) {
          if (cResult[12] === proposal) {
            if (cResult[13] === tmp17) {
              obj31 = cResult[14];
            }
            if (cResult[32] === tmp19) {
              if (cResult[33] === proposal) {
                dependencyMap = cResult[34];
                let arr7 = cResult[35];
              }
              const tmp53 = obj31(11838);
              const tmp54 = obj31(11926);
              if (cResult[36] === tmp4) {
                if (cResult[37] === version) {
                  if (cResult[39] !== tmp4) {
                    let tmp59 = null;
                    if (tmp4) {
                      let obj3 = { children: null };
                      const intl8 = tmp(1126).intl;
                      obj3.children = intl8.string(tmp52(3849).hF2c41);
                      tmp59 = closure_6(tmp(11926).ConjureNativeCollapsibleMeta, obj3);
                    }
                    cResult[39] = tmp4;
                    cResult[40] = tmp59;
                    let tmp58 = tmp59;
                  } else {
                    tmp58 = cResult[40];
                  }
                  const _Symbol = Symbol;
                  if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl9 = tmp(1126).intl;
                    const stringResult = intl9.string(tmp52(3849).yD8EJS);
                    const intl10 = tmp(1126).intl;
                    const stringResult1 = intl10.string(tmp52(3849).nSPGNb);
                    cResult[41] = stringResult;
                    cResult[42] = stringResult1;
                    let tmp63 = stringResult1;
                    let tmp62 = stringResult;
                  } else {
                    tmp62 = cResult[41];
                    tmp63 = cResult[42];
                  }
                  const Stack = tmp(5382).Stack;
                  if (cResult[43] === conjurePlanSlashCommandNames) {
                    if (cResult[44] === tmp9) {
                      let tmp66 = cResult[45];
                    }
                    if (cResult[46] === conjurePlanSlashCommandNames) {
                      if (cResult[47] === tmp7) {
                        if (cResult[48] === tmp11) {
                          if (cResult[50] !== cResult[49]) {
                            const obj4 = { variant: "text-md/normal", color: "text-default", children: tmp68 };
                            const tmp74 = closure_6(tmp(5092).Text, obj4);
                            cResult[50] = tmp68;
                            cResult[51] = tmp74;
                            let tmp72 = tmp74;
                          } else {
                            tmp72 = cResult[51];
                          }
                          if (cResult[52] === tmp5) {
                            if (cResult[53] === tmp19) {
                              if (cResult[54] === arr6) {
                                if (cResult[55] === conjurePlanSlashCommandNames) {
                                  if (cResult[56] === tmp4) {
                                    let tmp75 = cResult[57];
                                  }
                                  if (cResult[58] === tmp19) {
                                    if (cResult[59] === arr7) {
                                      let tmp82 = cResult[60];
                                    }
                                    if (cResult[61] === proposal.changes) {
                                      if (cResult[62] === conjurePlanSlashCommandNames) {
                                        let tmp84 = cResult[63];
                                      }
                                      if (cResult[64] !== proposal.commands) {
                                        let tmp89 = null;
                                        if (proposal.commands.length > 0) {
                                          const obj5 = { direction: "vertical", spacing: 4, children: null };
                                          const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                                          const intl14 = tmp(1126).intl;
                                          obj6.children = intl14.string(tmp(1126).t["0hKkS+"]);
                                          let items = [closure_6(tmp(5092).Text, obj6), ];
                                          const commands = proposal.commands;
                                          items[1] = commands.map((name, index) => {
                                            if ("/" === obj.conjurePlanCommandPrefix(name)) {
                                              const obj2 = { name: name.name, size: "text-sm" };
                                              let combined = closure_1_6(conjurePlanSlashCommandNames(result[26]).ConjurePlanCommandMention, obj2);
                                            } else {
                                              const _HermesInternal = HermesInternal;
                                              combined = "" + conjurePlanSlashCommandNames(result[10]).conjurePlanCommandPrefix(name) + name.name;
                                              const tmp4Result = conjurePlanSlashCommandNames(result[10]);
                                            }
                                            const children = [closure_1_6(conjurePlanSlashCommandNames(result[25]).Text, { variant: "text-sm/medium", color: "text-default", children: combined }), ];
                                            let tmp3Result2 = null;
                                            if (null != name.description) {
                                              tmp3Result2 = null;
                                              if ("" !== name.description) {
                                                const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
                                                tmp3Result2 = closure_1_6(conjurePlanSlashCommandNames(result[25]).Text, obj3);
                                              }
                                            }
                                            children[1] = tmp3Result2;
                                            return closure_1_7(closure_1_5, { children }, index);
                                          });
                                          obj5.children = items;
                                          tmp89 = closure_7(tmp(5382).Stack, obj5);
                                        }
                                        cResult[64] = proposal.commands;
                                        cResult[65] = tmp89;
                                        let tmp88 = tmp89;
                                      } else {
                                        tmp88 = cResult[65];
                                      }
                                      let tmp92 = null;
                                      if (mapped.length > 0) {
                                        const obj7 = { direction: "vertical", spacing: 4, children: null };
                                        const obj8 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                                        const intl15 = tmp(1126).intl;
                                        obj8.children = intl15.string(tmp52(3849)["2UbW6r"]);
                                        const items1 = [closure_6(tmp(5092).Text, obj8), ];
                                        const obj9 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
                                        items1[1] = closure_6(tmp(5092).Text, obj9);
                                        obj7.children = items1;
                                        tmp92 = closure_7(tmp(5382).Stack, obj7);
                                      }
                                      let tmp95 = null;
                                      if (mapped1.length > 0) {
                                        const obj10 = { direction: "vertical", spacing: 4, children: null };
                                        const obj11 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                                        const intl16 = tmp(1126).intl;
                                        obj11.children = intl16.string(tmp52(3849)["7TKfpj"]);
                                        const items2 = [closure_6(tmp(5092).Text, obj11), ];
                                        const obj12 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
                                        items2[1] = closure_6(tmp(5092).Text, obj12);
                                        obj10.children = items2;
                                        tmp95 = closure_7(tmp(5382).Stack, obj10);
                                      }
                                      if (cResult[66] === onApprove) {
                                        if (cResult[67] === tmp6) {
                                          if (cResult[68] === tmp4) {
                                            let tmp98 = cResult[69];
                                          }
                                          if (cResult[70] === Stack) {
                                            if (cResult[71] === tmp66) {
                                              if (cResult[72] === tmp72) {
                                                if (cResult[73] === tmp75) {
                                                  if (cResult[74] === tmp82) {
                                                    if (cResult[75] === tmp84) {
                                                      if (cResult[76] === tmp88) {
                                                        if (cResult[77] === tmp92) {
                                                          if (cResult[78] === tmp95) {
                                                            if (cResult[79] === tmp98) {
                                                              let tmp103 = cResult[80];
                                                            }
                                                            if (cResult[81] === tmp54) {
                                                              if (cResult[82] === tmp5) {
                                                                if (cResult[83] === onToggleExpanded) {
                                                                  if (cResult[84] === tmp4) {
                                                                    if (cResult[85] === tmp62) {
                                                                      if (cResult[86] === tmp63) {
                                                                        if (cResult[87] === tmp103) {
                                                                          if (cResult[88] === tmp55) {
                                                                            if (cResult[89] === tmp58) {
                                                                              let tmp106 = cResult[90];
                                                                            }
                                                                            if (cResult[91] === tmp53) {
                                                                              if (cResult[92] === tmp106) {
                                                                                let tmp109 = cResult[93];
                                                                              }
                                                                              return tmp109;
                                                                            }
                                                                            const obj13 = { children: tmp106 };
                                                                            const tmp111 = closure_6(tmp53, obj13);
                                                                            cResult[91] = tmp53;
                                                                            cResult[92] = tmp106;
                                                                            cResult[93] = tmp111;
                                                                            tmp109 = tmp111;
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            const obj14 = { title: tmp55, meta: tmp58, superseded: tmp4, expanded: tmp5, onToggleExpanded, showLabel: tmp62, hideLabel: tmp63, children: tmp103 };
                                                            const tmp108 = closure_6(tmp54, obj14);
                                                            cResult[81] = tmp54;
                                                            cResult[82] = tmp5;
                                                            cResult[83] = onToggleExpanded;
                                                            cResult[84] = tmp4;
                                                            cResult[85] = tmp62;
                                                            cResult[86] = tmp63;
                                                            cResult[87] = tmp103;
                                                            cResult[88] = tmp55;
                                                            cResult[89] = tmp58;
                                                            cResult[90] = tmp108;
                                                            tmp106 = tmp108;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj15 = { direction: "vertical", spacing: 8, children: null };
                                          const items3 = [tmp66, tmp72, tmp75, tmp82, tmp84, tmp88, tmp92, tmp95, tmp98];
                                          obj15.children = items3;
                                          const tmp105 = closure_7(Stack, obj15);
                                          cResult[70] = Stack;
                                          cResult[71] = tmp66;
                                          cResult[72] = tmp72;
                                          cResult[73] = tmp75;
                                          cResult[74] = tmp82;
                                          cResult[75] = tmp84;
                                          cResult[76] = tmp88;
                                          cResult[77] = tmp92;
                                          cResult[78] = tmp95;
                                          cResult[79] = tmp98;
                                          cResult[80] = tmp105;
                                          tmp103 = tmp105;
                                        }
                                      }
                                      let tmp99 = null;
                                      if (null != onApprove) {
                                        tmp99 = null;
                                        if (!tmp4) {
                                          const obj16 = { style: tmp6.planActions, children: null };
                                          const obj17 = { text: null, variant: "primary", onPress: null };
                                          const intl17 = tmp(1126).intl;
                                          obj17.text = intl17.string(tmp52(3849)["6S+wRM"]);
                                          obj17.onPress = onApprove;
                                          const items4 = [closure_6(tmp(5384).Button, obj17), ];
                                          const obj18 = { variant: "text-sm/normal", color: "text-muted", style: tmp6.planReplyHint, children: null };
                                          const intl18 = tmp(1126).intl;
                                          obj18.children = intl18.string(tmp52(3849).IZoqbR);
                                          items4[1] = closure_6(tmp(5092).Text, obj18);
                                          obj16.children = items4;
                                          tmp99 = closure_7(closure_5, obj16);
                                        }
                                      }
                                      cResult[66] = onApprove;
                                      cResult[67] = tmp6;
                                      cResult[68] = tmp4;
                                      cResult[69] = tmp99;
                                      tmp98 = tmp99;
                                    }
                                    let tmp85 = null;
                                    if (proposal.changes.length > 0) {
                                      const obj19 = { direction: "vertical", spacing: 4, children: null };
                                      const obj20 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                                      const intl13 = tmp(1126).intl;
                                      obj20.children = intl13.string(tmp52(3849)["5+mG1z"]);
                                      const items5 = [closure_6(tmp(5092).Text, obj20), ];
                                      const changes = proposal.changes;
                                      items5[1] = changes.map((text, index) => {
                                        const obj = { variant: "text-sm/normal", color: "text-default", children: null };
                                        const items = ["\u2022 ", timestampProducer(ConjurePlanCommandText.ConjurePlanCommandText, { text, commandNames: conjurePlanSlashCommandNames, size: "text-sm" })];
                                        obj.children = items;
                                        return React5(Text_Text.Text, obj, index);
                                      });
                                      obj19.children = items5;
                                      tmp85 = closure_7(tmp(5382).Stack, obj19);
                                    }
                                    cResult[61] = proposal.changes;
                                    cResult[62] = conjurePlanSlashCommandNames;
                                    cResult[63] = tmp85;
                                    tmp84 = tmp85;
                                  }
                                  const mapped2 = arr7.map((item) => {
                                    let tmp2 = null;
                                    if (null != obj31[item]) {
                                      const obj = { direction: "vertical", spacing: 4, children: null };
                                      const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: tmp.label };
                                      const items = [timestampProducer(Text_Text.Text, obj2), tmp.content];
                                      obj.children = items;
                                      tmp2 = React5(Stack_Stack.Stack, obj, item);
                                    }
                                    return tmp2;
                                  });
                                  cResult[58] = tmp19;
                                  cResult[59] = arr7;
                                  cResult[60] = mapped2;
                                  tmp82 = mapped2;
                                }
                              }
                            }
                          }
                          if (arr6.length <= 0) {
                            cResult[52] = tmp5;
                            cResult[53] = tmp19;
                            cResult[54] = arr6;
                            cResult[55] = conjurePlanSlashCommandNames;
                            cResult[56] = tmp4;
                            cResult[57] = null;
                            tmp75 = null;
                          } else {
                            const obj21 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                            const intl12 = tmp(1126).intl;
                            obj21.children = intl12.string(tmp52(3849).mrMYrN);
                            const items6 = [closure_6(tmp(5092).Text, obj21), ];
                            if (1 === arr6.length) {
                              const obj22 = { row: arr6[0], previews: tmp19, commandNames: conjurePlanSlashCommandNames };
                              let tmp78Result = closure_6(tmp(11946).ConjurePlanSingleSurface, obj22);
                            } else {
                              const obj23 = { rows: arr6, previews: tmp19, cycling: null, commandNames: null };
                              let tmp79 = !tmp4;
                              if (!tmp4) {
                                tmp79 = tmp5;
                              }
                              obj23.cycling = tmp79;
                              obj23.commandNames = conjurePlanSlashCommandNames;
                              tmp78Result = closure_6(tmp(11946).ConjurePlanSurfaceNav, obj23);
                            }
                            const obj24 = { direction: "vertical", spacing: 12, children: null };
                            items6[1] = tmp78Result;
                            obj24.children = items6;
                            closure_7(tmp(5382).Stack, obj24);
                          }
                        }
                      }
                    }
                    if ("" === tmp7) {
                      const intl11 = tmp(1126).intl;
                      let stringResult2 = intl11.string(tmp52(3849)["0+RUWx"]);
                    } else {
                      const obj25 = { markup: tmp11, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
                      stringResult2 = closure_6(tmp(11945).ConjurePlanCommandMarkup, obj25);
                    }
                    cResult[46] = conjurePlanSlashCommandNames;
                    cResult[47] = tmp7;
                    cResult[48] = tmp11;
                    cResult[49] = stringResult2;
                  }
                  let tmp67 = null;
                  if ("" !== tmp9) {
                    const obj26 = { direction: "vertical", spacing: 4, children: null };
                    const obj27 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                    const intl19 = tmp(1126).intl;
                    obj27.children = intl19.string(tmp52(3849).iNS4dl);
                    const items7 = [closure_6(tmp(5092).Text, obj27), ];
                    const obj28 = { variant: "text-md/normal", color: "text-default", children: null };
                    const obj29 = { text: tmp9, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
                    obj28.children = closure_6(tmp(11945).ConjurePlanCommandText, obj29);
                    items7[1] = closure_6(tmp(5092).Text, obj28);
                    obj26.children = items7;
                    tmp67 = closure_7(tmp(5382).Stack, obj26);
                  }
                  cResult[43] = conjurePlanSlashCommandNames;
                  cResult[44] = tmp9;
                  cResult[45] = tmp67;
                  tmp66 = tmp67;
                }
              }
              if (!tmp4) {
                const intl6 = tmp(1126).intl;
                let stringResult3 = intl6.string(tmp52(3849)["3b6e7o"]);
                cResult[36] = tmp4;
                cResult[37] = version;
                cResult[38] = stringResult3;
              }
              const intl7 = tmp(1126).intl;
              const obj30 = { version };
              stringResult3 = intl7.formatToPlainString(tmp52(3849).YZ3qJs, obj30);
            }
            const _Object = Object;
            const keys = Object.keys(tmp19);
            const result = tmp(11944).conjurePlanSurfaceRows(proposal, keys);
            dependencyMap = result;
            const found = keys.filter((item) => {
              closure_0 = item;
              return !result.some((preview) => preview.preview === closure_0);
            });
            cResult[32] = tmp19;
            cResult[33] = proposal;
            cResult[34] = result;
            cResult[35] = found;
            arr7 = found;
            const tmpResult10 = tmp(11944);
          }
        }
      }
    }
    obj31 = {};
    if (null != automod) {
      if (automod.examples.length > 0) {
        const _Symbol2 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult4 = intl.string(obj31(3849).z4ZKYG);
          cResult[15] = stringResult4;
          let tmp20 = stringResult4;
        } else {
          tmp20 = cResult[15];
        }
        if (cResult[16] !== automod) {
          const obj32 = { label: tmp20, content: null };
          const obj33 = { automod };
          tmp20 = closure_6(obj31(11936), obj33);
          obj32.content = tmp20;
          cResult[16] = automod;
          cResult[17] = obj32;
          let tmp23 = obj32;
        } else {
          tmp23 = cResult[17];
        }
        obj31.automod = tmp23;
      }
    }
    if (null == proposal.design_image) {
      if (botExchanges.length <= 0) {
        if (null == tmp17) {
          cResult[9] = automod;
          cResult[10] = botExchanges;
          cResult[11] = projectId;
          cResult[12] = proposal;
          cResult[13] = tmp17;
          cResult[14] = obj31;
        } else {
          const _Symbol5 = Symbol;
          if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
            const intl5 = tmp(1126).intl;
            const stringResult5 = intl5.string(obj31(3849).ove4zH);
            cResult[29] = stringResult5;
            let tmp39 = stringResult5;
          } else {
            tmp39 = cResult[29];
          }
          if (cResult[30] !== tmp17) {
            const obj34 = { label: tmp39, content: null };
            const obj35 = {};
            const merged = Object.assign(tmp17);
            tmp39 = closure_6(obj31(11943), obj35);
            obj34.content = tmp39;
            cResult[30] = tmp17;
            cResult[31] = obj34;
            let tmp42 = obj34;
            const tmp45 = obj31(11943);
          } else {
            tmp42 = cResult[31];
          }
          obj31.widget = tmp42;
        }
      } else {
        const _Symbol4 = Symbol;
        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult6 = intl4.string(obj31(3849).sA1lTv);
          cResult[25] = stringResult6;
          let tmp33 = stringResult6;
        } else {
          tmp33 = cResult[25];
        }
        if (cResult[26] === botExchanges) {
          if (cResult[27] === projectId) {
            let tmp36 = cResult[28];
          }
          obj31.bot = tmp36;
        }
        const obj36 = { label: tmp33, content: null };
        const obj37 = { projectId, exchanges: botExchanges };
        tmp33 = closure_6(obj31(11939), obj37);
        obj36.content = tmp33;
        cResult[26] = botExchanges;
        cResult[27] = projectId;
        cResult[28] = obj36;
        tmp36 = obj36;
      }
    } else {
      const _Symbol3 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult7 = intl2.string(obj31(3849).X15LLY);
        cResult[18] = stringResult7;
        let design_image = stringResult7;
      } else {
        design_image = cResult[18];
      }
      if (cResult[19] !== proposal) {
        const intl3 = tmp(1126).intl;
        const stringResult8 = intl3.string(tmp(11938).conjurePlanDesignAlt(proposal));
        cResult[19] = proposal;
        cResult[20] = stringResult8;
        let tmp28 = stringResult8;
        const tmpResult11 = tmp(11938);
      } else {
        tmp28 = cResult[20];
      }
      if (cResult[21] === projectId) {
        if (cResult[22] === proposal.design_image) {
          if (cResult[23] === tmp28) {
            let tmp30 = cResult[24];
          }
          obj31.design = tmp30;
        }
      }
      const obj38 = { label: design_image, content: null };
      const obj39 = { projectId, design: proposal.design_image, alt: tmp28 };
      obj38.content = closure_6(closure_9, obj39);
      cResult[21] = projectId;
      design_image = proposal.design_image;
      cResult[22] = design_image;
      cResult[23] = tmp28;
      cResult[24] = obj38;
      tmp30 = obj38;
    }
    const tmpResult9 = tmp(11934);
  }
  const tmpResult8 = tmp(11931);
  let tmp18 = null;
  if (tmpResult12.planDeclaresSurface(proposal, tmp(6952).ConjureSupportedSurface.PROFILE_WIDGET)) {
    tmp18 = conjurePlanWidget;
  }
  cResult[6] = proposal;
  cResult[7] = conjurePlanWidget;
  cResult[8] = tmp18;
  tmp17 = tmp18;
  tmpResult12 = tmp(11930);
}) : (function ConjurePlanProposalCard(expanded) {
  ({ projectId, proposal, version, superseded } = expanded);
  if (superseded === undefined) {
    superseded = false;
  }
  let flag = expanded.expanded;
  if (flag === undefined) {
    flag = true;
  }
  const onApprove = expanded.onApprove;
  let conjurePlanSlashCommandNames;
  let obj2;
  noop = undefined;
  const tmp = closure_8();
  const trimmed = proposal.summary.trim();
  let str3;
  if (proposal.what_changed != null) {
    str3 = str2.trim();
  }
  if (str3 == null) {
    str3 = "";
  }
  let items = [trimmed];
  const tmp4 = trimmed;
  const tmp5 = obj2;
  const memo = noop.useMemo(() => MarkupUtilsDefault.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS), items);
  conjurePlanSlashCommandNames = trimmed(obj2[9]).useConjurePlanSlashCommandNames(proposal.commands);
  let bot_permissions = proposal.bot_permissions;
  if (bot_permissions == null) {
    bot_permissions = [];
  }
  const mapped = bot_permissions.map(tmp4(tmp5[10]).formatConjurePlanRequirementName);
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const mapped1 = privileged_intents.map(tmp4(tmp5[10]).formatConjurePlanRequirementName);
  let obj = trimmed(obj2[9]);
  let automod = null;
  if (tmp4Result.planDeclaresSurface(proposal, tmp4(tmp5[12]).ConjureSupportedSurface.AUTOMOD)) {
    automod = proposal.automod;
  }
  tmp4Result = tmp4(tmp5[11]);
  const conjurePlanWidget = tmp4(tmp5[13]).useConjurePlanWidget(projectId, proposal);
  const tmp4Result6 = tmp4(tmp5[13]);
  let tmp9 = null;
  if (tmp4Result7.planDeclaresSurface(proposal, tmp4(tmp5[12]).ConjureSupportedSurface.PROFILE_WIDGET)) {
    tmp9 = conjurePlanWidget;
  }
  tmp4Result7 = tmp4(tmp5[11]);
  const botExchanges = tmp4(tmp5[14]).useConjurePlanBotExchanges(proposal).botExchanges;
  obj2 = {};
  let tmp10 = null != automod;
  if (tmp10) {
    tmp10 = automod.examples.length > 0;
  }
  if (tmp10) {
    let obj3 = { label: null, content: null };
    const intl = tmp4(tmp5[15]).intl;
    obj3.label = intl.string(conjurePlanSlashCommandNames(tmp5[16]).z4ZKYG);
    const obj4 = { automod };
    obj3.content = closure_6(conjurePlanSlashCommandNames(tmp5[17]), obj4);
    obj2.automod = obj3;
  }
  if (null != proposal.design_image) {
    const obj5 = { label: null, content: null };
    const intl17 = tmp4(tmp5[15]).intl;
    obj5.label = intl17.string(conjurePlanSlashCommandNames(tmp5[16]).X15LLY);
    const obj6 = { projectId, design: proposal.design_image, alt: null };
    const intl18 = tmp4(tmp5[15]).intl;
    obj6.alt = intl18.string(tmp4(tmp5[18]).conjurePlanDesignAlt(proposal));
    obj5.content = closure_6(closure_9, obj6);
    obj2.design = obj5;
    const tmp4Result9 = tmp4(tmp5[18]);
  }
  if (botExchanges.length > 0) {
    const obj7 = { label: null, content: null };
    const intl2 = tmp4(tmp5[15]).intl;
    obj7.label = intl2.string(conjurePlanSlashCommandNames(tmp5[16]).sA1lTv);
    const obj8 = { projectId, exchanges: botExchanges };
    obj7.content = closure_6(conjurePlanSlashCommandNames(tmp5[19]), obj8);
    obj2.bot = obj7;
  }
  if (null != tmp9) {
    const obj9 = { label: null, content: null };
    const intl3 = tmp4(tmp5[15]).intl;
    obj9.label = intl3.string(conjurePlanSlashCommandNames(tmp5[16]).ove4zH);
    const obj10 = {};
    const merged = Object.assign(tmp9);
    obj9.content = closure_6(conjurePlanSlashCommandNames(tmp5[20]), obj10);
    obj2.widget = obj9;
    const tmp17 = conjurePlanSlashCommandNames(tmp5[20]);
  }
  const keys = Object.keys(obj2);
  const tmp4Result8 = tmp4(tmp5[14]);
  let result = tmp4(tmp5[21]).conjurePlanSurfaceRows(proposal, keys);
  noop = result;
  const found = keys.filter((item) => {
    closure_0 = item;
    return !_undefined.some((preview) => preview.preview === closure_0);
  });
  const tmp4Result10 = tmp4(tmp5[21]);
  if (superseded) {
    if (null != version) {
      const intl5 = tmp4(tmp5[15]).intl;
      const obj11 = { version };
      let formatToPlainStringResult = intl5.formatToPlainString(tmp22(tmp5[16]).YZ3qJs, obj11);
    }
    const obj12 = { title: formatToPlainStringResult, meta: null, superseded: null, expanded: null, onToggleExpanded: null, showLabel: null, hideLabel: null, children: null };
    let tmp21Result = null;
    if (superseded) {
      const obj13 = { children: null };
      const intl6 = tmp4(tmp5[15]).intl;
      obj13.children = intl6.string(tmp22(tmp5[16]).hF2c41);
      tmp21Result = closure_6(tmp4(tmp5[23]).ConjureNativeCollapsibleMeta, obj13);
    }
    obj12.meta = tmp21Result;
    obj12.superseded = superseded;
    obj12.expanded = flag;
    obj12.onToggleExpanded = expanded.onToggleExpanded;
    const intl7 = tmp4(tmp5[15]).intl;
    obj12.showLabel = intl7.string(tmp22(tmp5[16]).yD8EJS);
    const intl8 = tmp4(tmp5[15]).intl;
    obj12.hideLabel = intl8.string(tmp22(tmp5[16]).nSPGNb);
    let tmp27Result = null;
    if ("" !== str3) {
      const obj14 = { direction: "vertical", spacing: 4, children: null };
      const obj15 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl19 = tmp4(tmp5[15]).intl;
      obj15.children = intl19.string(tmp22(tmp5[16]).iNS4dl);
      const items1 = [closure_6(tmp4(tmp5[25]).Text, obj15), ];
      const obj16 = { variant: "text-md/normal", color: "text-default", children: null };
      const obj17 = { text: str3, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      obj16.children = closure_6(tmp4(tmp5[26]).ConjurePlanCommandText, obj17);
      items1[1] = closure_6(tmp4(tmp5[25]).Text, obj16);
      obj14.children = items1;
      tmp27Result = closure_7(tmp4(tmp5[24]).Stack, obj14);
    }
    const items2 = [tmp27Result, , , , , , , , ];
    if ("" === trimmed) {
      const intl9 = tmp4(tmp5[15]).intl;
      let stringResult = intl9.string(tmp22(tmp5[16])["0+RUWx"]);
    } else {
      const obj18 = { markup: memo, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      stringResult = closure_6(tmp4(tmp5[26]).ConjurePlanCommandMarkup, obj18);
    }
    const obj19 = { variant: "text-md/normal", color: "text-default", children: stringResult };
    items2[1] = closure_6(tmp4(tmp5[25]).Text, obj19);
    if (result.length <= 0) {
      items2[2] = null;
      items2[3] = found.map((item) => {
        let tmp2 = null;
        if (null != obj2[item]) {
          const obj = { direction: "vertical", spacing: 4, children: null };
          obj2 = { variant: "text-sm/semibold", color: "text-muted", children: tmp.label };
          const items = [timestampProducer(Text_Text.Text, obj2), tmp.content];
          obj.children = items;
          tmp2 = React5(Stack_Stack.Stack, obj, item);
        }
        return tmp2;
      });
      let tmp27Result7 = null;
      if (proposal.changes.length > 0) {
        const obj20 = { direction: "vertical", spacing: 4, children: null };
        const obj21 = { variant: "text-sm/semibold", color: "text-muted", children: null };
        const intl11 = tmp4(tmp5[15]).intl;
        obj21.children = intl11.string(tmp22(tmp5[16])["5+mG1z"]);
        const items3 = [closure_6(tmp4(tmp5[25]).Text, obj21), ];
        const changes = proposal.changes;
        items3[1] = changes.map((text, index) => {
          const obj = { variant: "text-sm/normal", color: "text-default", children: null };
          const items = ["\u2022 ", timestampProducer(ConjurePlanCommandText.ConjurePlanCommandText, { text, commandNames: conjurePlanSlashCommandNames, size: "text-sm" })];
          obj.children = items;
          return React5(Text_Text.Text, obj, index);
        });
        obj20.children = items3;
        tmp27Result7 = closure_7(tmp4(tmp5[24]).Stack, obj20);
      }
      items2[4] = tmp27Result7;
      let tmp27Result8 = null;
      if (proposal.commands.length > 0) {
        const obj22 = { direction: "vertical", spacing: 4, children: null };
        const obj23 = { variant: "text-sm/semibold", color: "text-muted", children: null };
        const intl12 = tmp4(tmp5[15]).intl;
        obj23.children = intl12.string(tmp4(tmp5[15]).t["0hKkS+"]);
        const items4 = [closure_6(tmp4(tmp5[25]).Text, obj23), ];
        const commands = proposal.commands;
        items4[1] = commands.map((name, index) => {
          if ("/" === obj.conjurePlanCommandPrefix(name)) {
            obj2 = { name: name.name, size: "text-sm" };
            let combined = closure_1_6(trimmed(tmp5[26]).ConjurePlanCommandMention, obj2);
          } else {
            const _HermesInternal = HermesInternal;
            combined = "" + trimmed(tmp5[10]).conjurePlanCommandPrefix(name) + name.name;
            const tmp4Result = trimmed(tmp5[10]);
          }
          const children = [closure_1_6(trimmed(obj2[25]).Text, { variant: "text-sm/medium", color: "text-default", children: combined }), ];
          let tmp3Result2 = null;
          if (null != name.description) {
            tmp3Result2 = null;
            if ("" !== name.description) {
              const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
              tmp3Result2 = closure_1_6(trimmed(tmp5[25]).Text, obj3);
            }
          }
          children[1] = tmp3Result2;
          return closure_1_7(closure_1_5, { children }, index);
        });
        obj22.children = items4;
        tmp27Result8 = closure_7(tmp4(tmp5[24]).Stack, obj22);
      }
      items2[5] = tmp27Result8;
      let tmp27Result9 = null;
      if (mapped.length > 0) {
        const obj24 = { direction: "vertical", spacing: 4, children: null };
        const obj25 = { variant: "text-sm/semibold", color: "text-muted", children: null };
        const intl13 = tmp4(tmp5[15]).intl;
        obj25.children = intl13.string(tmp22(tmp5[16])["2UbW6r"]);
        const items5 = [closure_6(tmp4(tmp5[25]).Text, obj25), ];
        const obj26 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
        items5[1] = closure_6(tmp4(tmp5[25]).Text, obj26);
        obj24.children = items5;
        tmp27Result9 = closure_7(tmp4(tmp5[24]).Stack, obj24);
      }
      items2[6] = tmp27Result9;
      let tmp27Result10 = null;
      if (mapped1.length > 0) {
        const obj27 = { direction: "vertical", spacing: 4, children: null };
        const obj28 = { variant: "text-sm/semibold", color: "text-muted", children: null };
        const intl14 = tmp4(tmp5[15]).intl;
        obj28.children = intl14.string(tmp22(tmp5[16])["7TKfpj"]);
        const items6 = [closure_6(tmp4(tmp5[25]).Text, obj28), ];
        const obj29 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
        items6[1] = closure_6(tmp4(tmp5[25]).Text, obj29);
        obj27.children = items6;
        tmp27Result10 = closure_7(tmp4(tmp5[24]).Stack, obj27);
      }
      items2[7] = tmp27Result10;
      let tmp27Result11 = null;
      if (null != onApprove) {
        tmp27Result11 = null;
        if (!superseded) {
          const obj30 = { style: tmp.planActions, children: null };
          const obj31 = { text: null, variant: "primary", onPress: null };
          const intl15 = tmp4(tmp5[15]).intl;
          obj31.text = intl15.string(tmp22(tmp5[16])["6S+wRM"]);
          obj31.onPress = onApprove;
          const items7 = [closure_6(tmp4(tmp5[28]).Button, obj31), ];
          const obj32 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: null };
          const intl16 = tmp4(tmp5[15]).intl;
          obj32.children = intl16.string(tmp22(tmp5[16]).IZoqbR);
          items7[1] = closure_6(tmp4(tmp5[25]).Text, obj32);
          obj30.children = items7;
          tmp27Result11 = closure_7(closure_5, obj30);
        }
      }
      const obj33 = { children: null };
      const obj34 = { direction: "vertical", spacing: 8, children: null };
      items2[8] = tmp27Result11;
      obj34.children = items2;
      obj12.children = closure_7(tmp4(tmp5[24]).Stack, obj34);
      obj33.children = closure_6(tmp24, obj12);
      return closure_6(tmp23, obj33);
    } else {
      const obj35 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl10 = tmp4(tmp5[15]).intl;
      obj35.children = intl10.string(tmp22(tmp5[16]).mrMYrN);
      const items8 = [closure_6(tmp4(tmp5[25]).Text, obj35), ];
      if (1 === result.length) {
        const obj36 = { row: null, previews: null, commandNames: null };
        result = result[0];
        obj36.row = result;
        obj36.previews = obj2;
        obj36.commandNames = conjurePlanSlashCommandNames;
        let tmp21Result2 = closure_6(tmp4(tmp5[27]).ConjurePlanSingleSurface, obj36);
      } else {
        const obj37 = { rows: result, previews: obj2, cycling: null, commandNames: null };
        let tmp31 = !superseded;
        if (!superseded) {
          tmp31 = flag;
        }
        obj37.cycling = tmp31;
        obj37.commandNames = conjurePlanSlashCommandNames;
        tmp21Result2 = closure_6(tmp4(tmp5[27]).ConjurePlanSurfaceNav, obj37);
      }
      const obj38 = { direction: "vertical", spacing: 12, children: null };
      items8[1] = tmp21Result2;
      obj38.children = items8;
      closure_7(tmp4(tmp5[24]).Stack, obj38);
    }
  }
  const intl4 = tmp4(tmp5[15]).intl;
  formatToPlainStringResult = intl4.string(tmp22(tmp5[16])["3b6e7o"]);
  tmp23 = conjurePlanSlashCommandNames(tmp5[22]);
});