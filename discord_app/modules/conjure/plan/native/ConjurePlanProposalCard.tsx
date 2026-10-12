// === Module 17281: ConjurePlanProposalCard ===

// Module 17281 (ConjurePlanProposalCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5079 */;
import Text_Text from "Text/Text" /* 5088 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import FastImageDefault from "FastImage" /* 6157 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6947 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 17212 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 17276 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 17278 */;
import ConjureNativeCollapsibleSection from "ConjureNativeCollapsibleSection" /* 17280 */;
import conjurePlanFormat from "conjurePlanFormat" /* 17282 */;
import conjurePlanTags from "conjurePlanTags" /* 17283 */;
import conjurePlanWidget2 from "conjurePlanWidget" /* 17284 */;
import useConjurePlanBotPreviewItems from "useConjurePlanBotPreviewItems" /* 17287 */;
import ConjurePlanTypeTagsDefault from "ConjurePlanTypeTags" /* 17289 */;
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples" /* 17294 */;
import conjurePlanDesign from "conjurePlanDesign" /* 17296 */;
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview" /* 17297 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 17299 */;
import noop from "module_19" /* 19 */;

const ConjureNativeCollapsibleSectionDefault = ConjureNativeCollapsibleSection;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = { planActions: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12 }, planReplyHint: { flexShrink: 1 }, designImage: null, designPlaceholder: null };
let obj3 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12 };
obj2.designImage = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj4 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.designPlaceholder = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_7 = createStyles.createStyles(obj2);
fn(558);
let obj5 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
const ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(alt) {
  let Stack = require;
  let tmp = dependencyMap;
  const cResult = c.c(10);
  alt = alt.alt;
  ({ projectId, design } = alt);
  let designPlaceholder = closure_7();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl = util.intl;
      obj3.children = intl.string(_modDef3849.X15LLY);
      const tmp8 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[0] = tmp8;
      let first = tmp8;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === alt) {
      if (cResult[2] === handleError) {
        if (cResult[3] === src) {
          if (cResult[4] === designPlaceholder.designImage) {
            if (cResult[5] === designPlaceholder.designPlaceholder) {
              const _Symbol2 = Symbol;
              if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
                const intl2 = util.intl;
                obj4.children = intl2.string(_modDef3849.nR4B8P);
                const tmp20 = hasOwnProperty(Text_Text.Text, obj4);
                cResult[7] = tmp20;
                let tmp17 = tmp20;
              } else {
                tmp17 = cResult[7];
              }
              if (cResult[8] !== cResult[6]) {
                Stack = Stack_Stack.Stack;
                const obj5 = { direction: "vertical", spacing: 4, children: null };
                const items = [first, tmp9, tmp17];
                obj5.children = items;
                tmp = timestampProducer(Stack, obj5);
                cResult[8] = tmp9;
                cResult[9] = tmp;
              }
            }
          }
        }
      }
    }
    if (null == src) {
      const obj6 = { style: designPlaceholder.designPlaceholder, children: null };
      const obj7 = { size: "small", accessibilityLabel: alt };
      obj6.children = hasOwnProperty(React3, obj7);
      let tmp12 = hasOwnProperty(React4, obj6);
    } else {
      const obj8 = { source: null, style: null, resizeMode: "cover", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
      const obj9 = { uri: src };
      obj8.source = obj9;
      obj8.style = designPlaceholder.designImage;
      obj8.onError = handleError;
      obj8.accessibilityLabel = alt;
      tmp12 = hasOwnProperty(FastImageDefault, obj8);
    }
    cResult[1] = alt;
    cResult[2] = handleError;
    cResult[3] = src;
    src = designPlaceholder.designImage;
    cResult[4] = src;
    designPlaceholder = designPlaceholder.designPlaceholder;
    cResult[5] = designPlaceholder;
    cResult[6] = tmp12;
  }
}) : (function PlanDesign(alt) {
  alt = alt.alt;
  ({ projectId, design } = alt);
  let tmp = closure_7();
  let intl = require;
  let stringResult = dependencyMap;
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
  const src = conjureAttachmentImage.src;
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(_modDef3849.X15LLY);
    const items = [hasOwnProperty(Text_Text.Text, obj2), , ];
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: null };
      tmp = React3;
      const obj4 = { size: "small", accessibilityLabel: alt };
      obj3.children = hasOwnProperty(React3, obj4);
      let tmp6Result = hasOwnProperty(React4, obj3);
    } else {
      const obj5 = { source: null, style: null, resizeMode: "cover", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
      const obj6 = { uri: src };
      obj5.source = obj6;
      obj5.style = tmp.designImage;
      obj5.onError = tmp4;
      obj5.accessibilityLabel = alt;
      tmp6Result = hasOwnProperty(FastImageDefault, obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: null };
    items[1] = tmp6Result;
    const obj8 = { variant: "text-xs/normal", color: "text-muted", children: null };
    intl = util.intl;
    stringResult = intl.string(_modDef3849.nR4B8P);
    obj8.children = stringResult;
    items[2] = hasOwnProperty(Text_Text.Text, obj8);
    obj7.children = items;
    timestampProducer(Stack_Stack.Stack, obj7);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanProposalCard(arg0) {
  const cResult = c.c(64);
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
  const mapped = bot_permissions.map(conjurePlanFormat.formatConjurePlanRequirementName);
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const mapped1 = privileged_intents.map(conjurePlanFormat.formatConjurePlanRequirementName);
  let automod = null;
  if (tmpResult.planDeclaresSurface(proposal, ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD)) {
    automod = proposal.automod;
  }
  tmpResult = conjurePlanTags;
  const conjurePlanWidget = conjurePlanWidget2.useConjurePlanWidget(projectId, proposal);
  if (cResult[2] === proposal) {
    if (cResult[3] === conjurePlanWidget) {
      let tmp12 = cResult[4];
    }
    const botExchanges = useConjurePlanBotPreviewItems.useConjurePlanBotExchanges(proposal).botExchanges;
    const tmp15 = ConjureNativeCardSurfaceDefault;
    const tmp16 = ConjureNativeCollapsibleSectionDefault;
    if (cResult[5] === tmp4) {
      if (cResult[6] === version) {
        if (cResult[8] !== tmp4) {
          let tmp21 = null;
          if (tmp4) {
            const obj2 = { children: null };
            const intl3 = util.intl;
            obj2.children = intl3.string(_modDef3849.hF2c41);
            tmp21 = hasOwnProperty(ConjureNativeCollapsibleSection.ConjureNativeCollapsibleMeta, obj2);
          }
          cResult[8] = tmp4;
          cResult[9] = tmp21;
          let tmp20 = tmp21;
        } else {
          tmp20 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = util.intl;
          const stringResult = intl4.string(_modDef3849.yD8EJS);
          const intl5 = util.intl;
          const stringResult1 = intl5.string(_modDef3849.nSPGNb);
          cResult[10] = stringResult;
          cResult[11] = stringResult1;
          let tmp25 = stringResult1;
          let tmp24 = stringResult;
        } else {
          tmp24 = cResult[10];
          tmp25 = cResult[11];
        }
        const Stack = Stack_Stack.Stack;
        if (cResult[12] === proposal.supported_surfaces) {
          if (cResult[13] === tmp4) {
            let tmp28 = cResult[14];
          }
          if (cResult[15] !== tmp8) {
            let tmp33 = null;
            if ("" !== tmp8) {
              let obj3 = { direction: "vertical", spacing: 4, children: null };
              const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: null };
              const intl14 = util.intl;
              obj4.children = intl14.string(_modDef3849.iNS4dl);
              const items = [hasOwnProperty(Text_Text.Text, obj4), ];
              const obj5 = { variant: "text-md/normal", color: "text-default", children: tmp8 };
              items[1] = hasOwnProperty(Text_Text.Text, obj5);
              obj3.children = items;
              tmp33 = timestampProducer(Stack_Stack.Stack, obj3);
            }
            cResult[15] = tmp8;
            cResult[16] = tmp33;
            let tmp32 = tmp33;
          } else {
            tmp32 = cResult[16];
          }
          if ("" === trimmed) {
            const intl6 = util.intl;
            let stringResult2 = intl6.string(_modDef3849["0+RUWx"]);
          } else {
            stringResult2 = MarkupUtilsDefault.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS);
            const tmp14Result = MarkupUtilsDefault;
          }
          if (cResult[17] !== stringResult2) {
            const obj6 = { variant: "text-md/normal", color: "text-default", children: stringResult2 };
            const tmp37 = hasOwnProperty(Text_Text.Text, obj6);
            cResult[17] = stringResult2;
            cResult[18] = tmp37;
            let tmp35 = tmp37;
          } else {
            tmp35 = cResult[18];
          }
          if (cResult[19] !== automod) {
            let tmp39 = null;
            if (null != automod) {
              tmp39 = null;
              if (automod.examples.length > 0) {
                const obj7 = { automod };
                tmp39 = hasOwnProperty(ConjurePlanAutomodExamplesDefault, obj7);
              }
            }
            cResult[19] = automod;
            cResult[20] = tmp39;
            let tmp38 = tmp39;
          } else {
            tmp38 = cResult[20];
          }
          if (cResult[21] === projectId) {
            if (cResult[22] === proposal) {
              let tmp41 = cResult[23];
            }
            if (cResult[24] === botExchanges) {
              if (cResult[25] === projectId) {
                let tmp45 = cResult[26];
              }
              if (cResult[27] !== tmp12) {
                let tmp49 = null;
                if (null != tmp12) {
                  const obj8 = {};
                  const merged = Object.assign(tmp12);
                  tmp49 = hasOwnProperty(ConjurePlanWidgetDefault, obj8);
                  const tmp14Result3 = ConjurePlanWidgetDefault;
                }
                cResult[27] = tmp12;
                cResult[28] = tmp49;
                let tmp48 = tmp49;
              } else {
                tmp48 = cResult[28];
              }
              if (cResult[29] !== proposal.changes) {
                let tmp56 = null;
                if (proposal.changes.length > 0) {
                  const obj9 = { direction: "vertical", spacing: 4, children: null };
                  const obj10 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                  const intl8 = util.intl;
                  obj10.children = intl8.string(_modDef3849["5+mG1z"]);
                  const items1 = [hasOwnProperty(Text_Text.Text, obj10), ];
                  const changes = proposal.changes;
                  items1[1] = changes.map((item, index) => closure_1_5(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item }, index));
                  obj9.children = items1;
                  tmp56 = timestampProducer(Stack_Stack.Stack, obj9);
                }
                cResult[29] = proposal.changes;
                cResult[30] = tmp56;
                let tmp55 = tmp56;
              } else {
                tmp55 = cResult[30];
              }
              if (cResult[31] !== proposal.commands) {
                let tmp60 = null;
                if (proposal.commands.length > 0) {
                  const obj11 = { direction: "vertical", spacing: 4, children: null };
                  const obj12 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                  const intl9 = util.intl;
                  obj12.children = intl9.string(util.t["0hKkS+"]);
                  const items2 = [hasOwnProperty(Text_Text.Text, obj12), ];
                  const commands = proposal.commands;
                  items2[1] = commands.map((name, index) => {
                    const obj = { variant: "text-sm/medium", color: "text-default", children: "" + conjurePlanFormat.conjurePlanCommandPrefix(name) + name.name };
                    const children = [closure_1_5(Text_Text.Text, obj), ];
                    let tmp3Result = null;
                    if (null != name.description) {
                      tmp3Result = null;
                      if ("" !== name.description) {
                        const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
                        tmp3Result = closure_1_5(Text_Text.Text, obj3);
                      }
                    }
                    children[1] = tmp3Result;
                    return closure_1_6(closure_1_4, { children }, index);
                  });
                  obj11.children = items2;
                  tmp60 = timestampProducer(Stack_Stack.Stack, obj11);
                }
                cResult[31] = proposal.commands;
                cResult[32] = tmp60;
                let tmp59 = tmp60;
              } else {
                tmp59 = cResult[32];
              }
              let tmp63 = null;
              if (mapped.length > 0) {
                const obj13 = { direction: "vertical", spacing: 4, children: null };
                const obj14 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                const intl10 = util.intl;
                obj14.children = intl10.string(_modDef3849["2UbW6r"]);
                const items3 = [hasOwnProperty(Text_Text.Text, obj14), ];
                const obj15 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
                items3[1] = hasOwnProperty(Text_Text.Text, obj15);
                obj13.children = items3;
                tmp63 = timestampProducer(Stack_Stack.Stack, obj13);
              }
              let tmp66 = null;
              if (mapped1.length > 0) {
                const obj16 = { direction: "vertical", spacing: 4, children: null };
                const obj17 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                const intl11 = util.intl;
                obj17.children = intl11.string(_modDef3849["7TKfpj"]);
                const items4 = [hasOwnProperty(Text_Text.Text, obj17), ];
                const obj18 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
                items4[1] = hasOwnProperty(Text_Text.Text, obj18);
                obj16.children = items4;
                tmp66 = timestampProducer(Stack_Stack.Stack, obj16);
              }
              if (cResult[33] === onApprove) {
                if (cResult[34] === tmp6) {
                  if (cResult[35] === tmp4) {
                    let tmp69 = cResult[36];
                  }
                  if (cResult[37] === Stack) {
                    if (cResult[38] === tmp28) {
                      if (cResult[39] === tmp32) {
                        if (cResult[40] === tmp35) {
                          if (cResult[41] === tmp38) {
                            if (cResult[42] === tmp41) {
                              if (cResult[43] === tmp45) {
                                if (cResult[44] === tmp48) {
                                  if (cResult[45] === tmp55) {
                                    if (cResult[46] === tmp59) {
                                      if (cResult[47] === tmp63) {
                                        if (cResult[48] === tmp66) {
                                          if (cResult[49] === tmp69) {
                                            let tmp74 = cResult[50];
                                          }
                                          if (cResult[51] === tmp16) {
                                            if (cResult[52] === tmp5) {
                                              if (cResult[53] === onToggleExpanded) {
                                                if (cResult[54] === tmp4) {
                                                  if (cResult[55] === tmp74) {
                                                    if (cResult[56] === tmp17) {
                                                      if (cResult[57] === tmp20) {
                                                        if (cResult[58] === tmp24) {
                                                          if (cResult[59] === tmp25) {
                                                            let tmp77 = cResult[60];
                                                          }
                                                          if (cResult[61] === tmp15) {
                                                            if (cResult[62] === tmp77) {
                                                              let tmp80 = cResult[63];
                                                            }
                                                            return tmp80;
                                                          }
                                                          const obj19 = { children: tmp77 };
                                                          const tmp82 = hasOwnProperty(tmp15, obj19);
                                                          cResult[61] = tmp15;
                                                          cResult[62] = tmp77;
                                                          cResult[63] = tmp82;
                                                          tmp80 = tmp82;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj20 = { title: tmp17, meta: tmp20, superseded: tmp4, expanded: tmp5, onToggleExpanded, showLabel: tmp24, hideLabel: tmp25, children: tmp74 };
                                          const tmp79 = hasOwnProperty(tmp16, obj20);
                                          cResult[51] = tmp16;
                                          cResult[52] = tmp5;
                                          cResult[53] = onToggleExpanded;
                                          cResult[54] = tmp4;
                                          cResult[55] = tmp74;
                                          cResult[56] = tmp17;
                                          cResult[57] = tmp20;
                                          cResult[58] = tmp24;
                                          cResult[59] = tmp25;
                                          cResult[60] = tmp79;
                                          tmp77 = tmp79;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj21 = { direction: "vertical", spacing: 8, children: null };
                  const items5 = [tmp28, tmp32, tmp35, tmp38, tmp41, tmp45, tmp48, tmp55, tmp59, tmp63, tmp66, tmp69];
                  obj21.children = items5;
                  const tmp76 = timestampProducer(Stack, obj21);
                  cResult[37] = Stack;
                  cResult[38] = tmp28;
                  cResult[39] = tmp32;
                  cResult[40] = tmp35;
                  cResult[41] = tmp38;
                  cResult[42] = tmp41;
                  cResult[43] = tmp45;
                  cResult[44] = tmp48;
                  cResult[45] = tmp55;
                  cResult[46] = tmp59;
                  cResult[47] = tmp63;
                  cResult[48] = tmp66;
                  cResult[49] = tmp69;
                  cResult[50] = tmp76;
                  tmp74 = tmp76;
                }
              }
              let tmp70 = null;
              if (null != onApprove) {
                tmp70 = null;
                if (!tmp4) {
                  const obj22 = { style: tmp6.planActions, children: null };
                  const obj23 = { text: null, variant: "primary", onPress: null };
                  const intl12 = util.intl;
                  obj23.text = intl12.string(_modDef3849["6S+wRM"]);
                  obj23.onPress = onApprove;
                  const items6 = [hasOwnProperty(components_Button_Button.Button, obj23), ];
                  const obj24 = { variant: "text-sm/normal", color: "text-muted", style: tmp6.planReplyHint, children: null };
                  const intl13 = util.intl;
                  obj24.children = intl13.string(_modDef3849.IZoqbR);
                  items6[1] = hasOwnProperty(Text_Text.Text, obj24);
                  obj22.children = items6;
                  tmp70 = timestampProducer(React4, obj22);
                }
              }
              cResult[33] = onApprove;
              cResult[34] = tmp6;
              cResult[35] = tmp4;
              cResult[36] = tmp70;
              tmp69 = tmp70;
            }
            let tmp46 = null;
            if (botExchanges.length > 0) {
              const obj25 = { projectId, exchanges: botExchanges };
              tmp46 = hasOwnProperty(ConjurePlanBotPreviewDefault, obj25);
            }
            cResult[24] = botExchanges;
            cResult[25] = projectId;
            cResult[26] = tmp46;
            tmp45 = tmp46;
          }
          let tmp42 = null;
          if (null != proposal.design_image) {
            const obj26 = { projectId, design: proposal.design_image, alt: null };
            const intl7 = util.intl;
            obj26.alt = intl7.string(conjurePlanDesign.conjurePlanDesignAlt(proposal));
            tmp42 = hasOwnProperty(closure_8, obj26);
            const tmpResult7 = conjurePlanDesign;
          }
          cResult[21] = projectId;
          cResult[22] = proposal;
          cResult[23] = tmp42;
          tmp41 = tmp42;
        }
        let tmp30Result = null;
        if (!tmp4) {
          let supported_surfaces = proposal.supported_surfaces;
          if (supported_surfaces == null) {
            supported_surfaces = [];
          }
          const obj27 = { tags: supported_surfaces };
          tmp30Result = hasOwnProperty(ConjurePlanTypeTagsDefault, obj27);
          const tmp14Result4 = ConjurePlanTypeTagsDefault;
        }
        cResult[12] = proposal.supported_surfaces;
        cResult[13] = tmp4;
        cResult[14] = tmp30Result;
        tmp28 = tmp30Result;
      }
    }
    if (!tmp4) {
      const intl = util.intl;
      let stringResult3 = intl.string(_modDef3849["3b6e7o"]);
      cResult[5] = tmp4;
      cResult[6] = version;
      cResult[7] = stringResult3;
    }
    const intl2 = util.intl;
    const obj28 = { version };
    stringResult3 = intl2.formatToPlainString(_modDef3849.YZ3qJs, obj28);
    const tmpResult6 = useConjurePlanBotPreviewItems;
  }
  const tmpResult5 = conjurePlanWidget2;
  let tmp13 = null;
  if (tmpResult8.planDeclaresSurface(proposal, ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET)) {
    tmp13 = conjurePlanWidget;
  }
  cResult[2] = proposal;
  cResult[3] = conjurePlanWidget;
  cResult[4] = tmp13;
  tmp12 = tmp13;
  tmpResult8 = conjurePlanTags;
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
  const mapped = bot_permissions.map(conjurePlanFormat.formatConjurePlanRequirementName);
  let privileged_intents = proposal.privileged_intents;
  if (privileged_intents == null) {
    privileged_intents = [];
  }
  const mapped1 = privileged_intents.map(conjurePlanFormat.formatConjurePlanRequirementName);
  let automod = null;
  if (tmp3Result.planDeclaresSurface(proposal, ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD)) {
    automod = proposal.automod;
  }
  tmp3Result = conjurePlanTags;
  const conjurePlanWidget = conjurePlanWidget2.useConjurePlanWidget(projectId, proposal);
  const tmp3Result5 = conjurePlanWidget2;
  let tmp7 = null;
  if (tmp3Result6.planDeclaresSurface(proposal, ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET)) {
    tmp7 = conjurePlanWidget;
  }
  tmp3Result6 = conjurePlanTags;
  const botExchanges = useConjurePlanBotPreviewItems.useConjurePlanBotExchanges(proposal).botExchanges;
  const tmp3Result7 = useConjurePlanBotPreviewItems;
  if (superseded) {
    if (null != version) {
      const intl2 = util.intl;
      let obj = { version };
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3849.YZ3qJs, obj);
    }
    const obj2 = { title: formatToPlainStringResult, meta: null, superseded: null, expanded: null, onToggleExpanded: null, showLabel: null, hideLabel: null, children: null };
    let tmp8Result = null;
    if (superseded) {
      let obj3 = { children: null };
      const intl3 = util.intl;
      obj3.children = intl3.string(_modDef3849.hF2c41);
      tmp8Result = hasOwnProperty(ConjureNativeCollapsibleSection.ConjureNativeCollapsibleMeta, obj3);
    }
    obj2.meta = tmp8Result;
    obj2.superseded = superseded;
    obj2.expanded = flag;
    obj2.onToggleExpanded = expanded.onToggleExpanded;
    const intl4 = util.intl;
    obj2.showLabel = intl4.string(_modDef3849.yD8EJS);
    const intl5 = util.intl;
    obj2.hideLabel = intl5.string(_modDef3849.nSPGNb);
    let tmp8Result6 = null;
    if (!superseded) {
      let supported_surfaces = proposal.supported_surfaces;
      if (supported_surfaces == null) {
        supported_surfaces = [];
      }
      const obj4 = { tags: supported_surfaces };
      tmp8Result6 = hasOwnProperty(ConjurePlanTypeTagsDefault, obj4);
      const tmp9Result = ConjurePlanTypeTagsDefault;
    }
    const items = [tmp8Result6, , , , , , , , , , , ];
    let tmp14Result = null;
    if ("" !== str3) {
      const obj5 = { direction: "vertical", spacing: 4, children: null };
      const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl14 = util.intl;
      obj6.children = intl14.string(_modDef3849.iNS4dl);
      const items1 = [hasOwnProperty(Text_Text.Text, obj6), ];
      const obj7 = { variant: "text-md/normal", color: "text-default", children: str3 };
      items1[1] = hasOwnProperty(Text_Text.Text, obj7);
      obj5.children = items1;
      tmp14Result = timestampProducer(Stack_Stack.Stack, obj5);
    }
    items[1] = tmp14Result;
    if ("" === trimmed) {
      const intl6 = util.intl;
      let stringResult = intl6.string(_modDef3849["0+RUWx"]);
    } else {
      stringResult = MarkupUtilsDefault.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS);
      const tmp9Result3 = MarkupUtilsDefault;
    }
    const obj8 = { variant: "text-md/normal", color: "text-default", children: stringResult };
    items[2] = hasOwnProperty(Text_Text.Text, obj8);
    let tmp8Result7 = null;
    if (null != automod) {
      tmp8Result7 = null;
      if (automod.examples.length > 0) {
        const obj9 = { automod };
        tmp8Result7 = hasOwnProperty(ConjurePlanAutomodExamplesDefault, obj9);
      }
    }
    items[3] = tmp8Result7;
    let tmp8Result8 = null;
    if (null != proposal.design_image) {
      const obj10 = { projectId, design: proposal.design_image, alt: null };
      const intl7 = util.intl;
      obj10.alt = intl7.string(conjurePlanDesign.conjurePlanDesignAlt(proposal));
      tmp8Result8 = hasOwnProperty(closure_8, obj10);
      const tmp3Result8 = conjurePlanDesign;
    }
    items[4] = tmp8Result8;
    let tmp8Result9 = null;
    if (botExchanges.length > 0) {
      const obj11 = { projectId, exchanges: botExchanges };
      tmp8Result9 = hasOwnProperty(ConjurePlanBotPreviewDefault, obj11);
    }
    items[5] = tmp8Result9;
    let tmp8Result10 = null;
    if (null != tmp7) {
      const obj12 = {};
      const merged = Object.assign(tmp7);
      tmp8Result10 = hasOwnProperty(ConjurePlanWidgetDefault, obj12);
      const tmp9Result4 = ConjurePlanWidgetDefault;
    }
    items[6] = tmp8Result10;
    let tmp14Result6 = null;
    if (proposal.changes.length > 0) {
      const obj13 = { direction: "vertical", spacing: 4, children: null };
      const obj14 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl8 = util.intl;
      obj14.children = intl8.string(_modDef3849["5+mG1z"]);
      const items2 = [hasOwnProperty(Text_Text.Text, obj14), ];
      const changes = proposal.changes;
      items2[1] = changes.map((item, index) => closure_1_5(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item }, index));
      obj13.children = items2;
      tmp14Result6 = timestampProducer(Stack_Stack.Stack, obj13);
    }
    items[7] = tmp14Result6;
    let tmp14Result7 = null;
    if (proposal.commands.length > 0) {
      const obj15 = { direction: "vertical", spacing: 4, children: null };
      const obj16 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl9 = util.intl;
      obj16.children = intl9.string(util.t["0hKkS+"]);
      const items3 = [hasOwnProperty(Text_Text.Text, obj16), ];
      const commands = proposal.commands;
      items3[1] = commands.map((name, index) => {
        const obj = { variant: "text-sm/medium", color: "text-default", children: "" + conjurePlanFormat.conjurePlanCommandPrefix(name) + name.name };
        const children = [closure_1_5(Text_Text.Text, obj), ];
        let tmp3Result = null;
        if (null != name.description) {
          tmp3Result = null;
          if ("" !== name.description) {
            const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
            tmp3Result = closure_1_5(Text_Text.Text, obj3);
          }
        }
        children[1] = tmp3Result;
        return closure_1_6(closure_1_4, { children }, index);
      });
      obj15.children = items3;
      tmp14Result7 = timestampProducer(Stack_Stack.Stack, obj15);
    }
    items[8] = tmp14Result7;
    let tmp14Result8 = null;
    if (mapped.length > 0) {
      const obj17 = { direction: "vertical", spacing: 4, children: null };
      const obj18 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl10 = util.intl;
      obj18.children = intl10.string(_modDef3849["2UbW6r"]);
      const items4 = [hasOwnProperty(Text_Text.Text, obj18), ];
      const obj19 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
      items4[1] = hasOwnProperty(Text_Text.Text, obj19);
      obj17.children = items4;
      tmp14Result8 = timestampProducer(Stack_Stack.Stack, obj17);
    }
    items[9] = tmp14Result8;
    let tmp14Result9 = null;
    if (mapped1.length > 0) {
      const obj20 = { direction: "vertical", spacing: 4, children: null };
      const obj21 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl11 = util.intl;
      obj21.children = intl11.string(_modDef3849["7TKfpj"]);
      const items5 = [hasOwnProperty(Text_Text.Text, obj21), ];
      const obj22 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
      items5[1] = hasOwnProperty(Text_Text.Text, obj22);
      obj20.children = items5;
      tmp14Result9 = timestampProducer(Stack_Stack.Stack, obj20);
    }
    items[10] = tmp14Result9;
    let tmp14Result10 = null;
    if (null != onApprove) {
      tmp14Result10 = null;
      if (!superseded) {
        const obj23 = { style: tmp.planActions, children: null };
        const obj24 = { text: null, variant: "primary", onPress: null };
        const intl12 = util.intl;
        obj24.text = intl12.string(_modDef3849["6S+wRM"]);
        obj24.onPress = onApprove;
        const items6 = [hasOwnProperty(components_Button_Button.Button, obj24), ];
        const obj25 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: null };
        const intl13 = util.intl;
        obj25.children = intl13.string(_modDef3849.IZoqbR);
        items6[1] = hasOwnProperty(Text_Text.Text, obj25);
        obj23.children = items6;
        tmp14Result10 = timestampProducer(React4, obj23);
      }
    }
    const obj26 = { children: null };
    const obj27 = { direction: "vertical", spacing: 8, children: null };
    items[11] = tmp14Result10;
    obj27.children = items;
    obj2.children = timestampProducer(Stack_Stack.Stack, obj27);
    obj26.children = hasOwnProperty(tmp11, obj2);
    return hasOwnProperty(tmp10, obj26);
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.string(_modDef3849["3b6e7o"]);
  tmp10 = ConjureNativeCardSurfaceDefault;
});