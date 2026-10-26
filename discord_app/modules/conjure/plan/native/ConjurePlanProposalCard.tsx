// === Module 12425: ConjurePlanProposalCard ===

// Module 12425 (ConjurePlanProposalCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import FastImageDefault from "FastImage" /* 5669 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5705 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 12180 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12229 */;
import conjurePlanOverlayDesign from "conjurePlanOverlayDesign" /* 12426 */;
import useConjureOverlayBackgroundDefault from "useConjureOverlayBackground" /* 12428 */;
import _modDef12429 from "module_12429" /* 12429 */;
import conjurePlanBot from "conjurePlanBot" /* 12436 */;
import conjurePlanDesign from "conjurePlanDesign" /* 12439 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 12440 */;
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples" /* 12441 */;
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview" /* 12443 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4971);
let obj2 = { surface: { padding: 0, overflow: "hidden" }, content: { padding: nativeDefault.space.PX_12 }, whatChanged: null, footer: null, replyHint: null, design: null, overlayDesign: null, blurredBackground: null, overlayWidget: null };
let obj3 = { padding: nativeDefault.space.PX_12 };
obj2.whatChanged = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.footer = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.replyHint = { flexShrink: 1 };
let obj5 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.design = { width: "100%", aspectRatio: 1.5, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center" };
let obj6 = { width: "100%", aspectRatio: 1.5, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center" };
obj2.overlayDesign = { width: "100%", aspectRatio: fn(12426).CONJURE_PLAN_OVERLAY_SCENE_ASPECT_RATIO, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
let obj8 = { transform: null };
let items = [{ scale: 1.04 }];
obj8.transform = items;
obj2.blurredBackground = obj8;
let obj7 = { width: "100%", aspectRatio: fn(12426).CONJURE_PLAN_OVERLAY_SCENE_ASPECT_RATIO, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
obj2.overlayWidget = { position: "absolute", top: fn(12426).CONJURE_PLAN_OVERLAY_WIDGET_TOP, end: fn(12426).CONJURE_PLAN_OVERLAY_WIDGET_END };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanOverlayWidget(projectId) {
  const cResult = c.c(24);
  ({ src, alt, size, onError } = projectId);
  const tmp4 = closure_11();
  const tmp6Result = useConjureOverlayBackgroundDefault(projectId.projectId, _modDef12429);
  if (cResult[0] !== size) {
    const result = conjurePlanOverlayDesign.conjurePlanOverlayWidgetBox(size);
    cResult[0] = size;
    cResult[1] = result;
    let size2 = result;
    const tmpResult = conjurePlanOverlayDesign;
  } else {
    size2 = cResult[1];
  }
  if (cResult[2] === tmp6Result.blurred) {
    if (cResult[3] === tmp6Result.handleError) {
      if (cResult[4] === tmp6Result.src) {
        if (cResult[5] === tmp4.blurredBackground) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] !== src) {
          const obj2 = { uri: src };
          cResult[7] = src;
          cResult[8] = obj2;
          let tmp14 = obj2;
        } else {
          tmp14 = cResult[8];
        }
        if (cResult[9] === size2.height) {
          if (cResult[10] === size2.width) {
            let tmp15 = cResult[11];
          }
          if (cResult[12] === tmp4.overlayWidget) {
            if (cResult[13] === tmp15) {
              let tmp16 = cResult[14];
            }
            if (cResult[15] === alt) {
              if (cResult[16] === onError) {
                if (cResult[17] === tmp14) {
                  if (cResult[18] === tmp16) {
                    let tmp17 = cResult[19];
                  }
                  if (cResult[20] === tmp4.overlayDesign) {
                    if (cResult[21] === tmp9) {
                      if (cResult[22] === tmp17) {
                        let tmp20 = cResult[23];
                      }
                      return tmp20;
                    }
                  }
                  const obj3 = { style: tmp4.overlayDesign, children: null };
                  const items = [tmp9, tmp17];
                  obj3.children = items;
                  const tmp23 = React6(timestampProducer, obj3);
                  cResult[20] = tmp4.overlayDesign;
                  cResult[21] = tmp9;
                  cResult[22] = tmp17;
                  cResult[23] = tmp23;
                  tmp20 = tmp23;
                }
              }
            }
            const obj4 = { source: tmp14, style: tmp16, resizeMode: "contain", onError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
            const tmp19 = closure_1_8(FastImageDefault, obj4);
            cResult[15] = alt;
            cResult[16] = onError;
            cResult[17] = tmp14;
            cResult[18] = tmp16;
            cResult[19] = tmp19;
            tmp17 = tmp19;
          }
          const items1 = [tmp4.overlayWidget, tmp15];
          cResult[12] = tmp4.overlayWidget;
          cResult[13] = tmp15;
          cResult[14] = items1;
          tmp16 = items1;
        }
        const size1 = { width: null, height: null };
        ({ width: obj6.width, height: obj6.height } = size2);
        cResult[9] = size2.height;
        cResult[10] = size2.width;
        cResult[11] = size1;
        tmp15 = size1;
      }
    }
  }
  let tmp11Result = null;
  if (null != tmp6Result.src) {
    if (typeof tmp6Result.src === "string") {
      const obj5 = { uri: tmp6Result.src };
      let src2 = obj5;
    } else {
      src2 = tmp6Result.src;
    }
    const obj7 = { source: src2, style: null, resizeMode: "cover", blurRadius: null, onError: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    const items2 = [hasOwnProperty.absoluteFill, tmp6Result.blurred && tmp4.blurredBackground];
    obj7.style = items2;
    let num3;
    if (tmp6Result.blurred) {
      num3 = 4;
    }
    obj7.blurRadius = num3;
    obj7.onError = tmp6Result.handleError;
    tmp11Result = closure_1_8(FastImageDefault, obj7);
    const tmp5Result = FastImageDefault;
  }
  cResult[2] = tmp6Result.blurred;
  cResult[3] = tmp6Result.handleError;
  cResult[4] = tmp6Result.src;
  cResult[5] = tmp4.blurredBackground;
  cResult[6] = tmp11Result;
  tmp9 = tmp11Result;
}) : (function PlanOverlayWidget(arg0) {
  ({ projectId, src, alt, size, onError } = arg0);
  const tmp = closure_11();
  const tmp4Result = useConjureOverlayBackgroundDefault(projectId, _modDef12429);
  const size2 = conjurePlanOverlayDesign.conjurePlanOverlayWidgetBox(size);
  const obj2 = { style: tmp.overlayDesign, children: null };
  let tmp9Result = null;
  if (null != tmp4Result.src) {
    if (typeof tmp4Result.src === "string") {
      const obj3 = { uri: tmp4Result.src };
      let src2 = obj3;
    } else {
      src2 = tmp4Result.src;
    }
    const obj4 = { source: src2, style: null, resizeMode: "cover", blurRadius: null, onError: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    const items = [hasOwnProperty.absoluteFill, tmp4Result.blurred && tmp.blurredBackground];
    obj4.style = items;
    let num;
    if (tmp4Result.blurred) {
      num = 4;
    }
    obj4.blurRadius = num;
    obj4.onError = tmp4Result.handleError;
    tmp9Result = closure_1_8(FastImageDefault, obj4);
    const tmp2Result = FastImageDefault;
  }
  const items1 = [tmp9Result, ];
  const obj5 = { source: { uri: src }, style: null, resizeMode: "contain", onError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
  const items2 = [tmp.overlayWidget, { width: size2.width, height: size2.height }];
  obj5.style = items2;
  items1[1] = closure_1_8(FastImageDefault, obj5);
  obj2.children = items1;
  return React6(timestampProducer, obj2);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(design) {
  const cResult = c.c(13);
  ({ projectId, alt, overlayWidgetSize } = design);
  overlayDesign = closure_11();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.design.id);
  ({ src, handleError } = conjureAttachmentImage);
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    if (null == src) {
      if (null == src) {
        const items = [overlayDesign.design, ];
        let overlayDesign2 = null != overlayWidgetSize;
        if (overlayDesign2) {
          overlayDesign2 = overlayDesign.overlayDesign;
        }
        const obj3 = { style: null, children: null };
        items[1] = overlayDesign2;
        obj3.style = items;
        const obj4 = { size: "small", accessibilityLabel: alt };
        obj3.children = closure_1_8(React4, obj4);
        let tmp7Result = closure_1_8(timestampProducer, obj3);
      } else {
        const obj5 = { source: null, style: null, resizeMode: "contain", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
        const obj6 = { uri: src };
        obj5.source = obj6;
        obj5.style = overlayDesign.design;
        obj5.onError = handleError;
        obj5.accessibilityLabel = alt;
        tmp7Result = closure_1_8(FastImageDefault, obj5);
      }
      cResult[6] = alt;
      cResult[7] = handleError;
      cResult[8] = overlayWidgetSize;
      cResult[9] = src;
      ({ design: tmp2[10], overlayDesign } = overlayDesign);
      cResult[11] = overlayDesign;
      cResult[12] = tmp7Result;
    }
    if (cResult[0] === alt) {
      if (cResult[1] === handleError) {
        if (cResult[2] === overlayWidgetSize) {
          if (cResult[3] === projectId) {
          }
        }
      }
    }
    const obj7 = { projectId, src, alt, size: overlayWidgetSize, onError: handleError };
    const tmp14 = closure_1_8(closure_12, obj7);
    cResult[0] = alt;
    cResult[1] = handleError;
    cResult[2] = overlayWidgetSize;
    cResult[3] = projectId;
    cResult[4] = src;
    cResult[5] = tmp14;
  }
}) : (function PlanDesign(design) {
  ({ projectId, alt, overlayWidgetSize } = design);
  const tmp = closure_11();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.design.id);
  ({ src, handleError } = conjureAttachmentImage);
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    if (null == src) {
      if (null == src) {
        const items = [tmp.design, ];
        let overlayDesign = null != overlayWidgetSize;
        if (overlayDesign) {
          overlayDesign = tmp.overlayDesign;
        }
        const obj2 = { style: null, children: null };
        items[1] = overlayDesign;
        obj2.style = items;
        const obj3 = { size: "small", accessibilityLabel: alt };
        obj2.children = closure_1_8(React4, obj3);
        let tmp7Result = closure_1_8(timestampProducer, obj2);
      } else {
        const obj4 = { source: null, style: null, resizeMode: "contain", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
        const obj5 = { uri: src };
        obj4.source = obj5;
        obj4.style = tmp.design;
        obj4.onError = handleError;
        obj4.accessibilityLabel = alt;
        tmp7Result = closure_1_8(FastImageDefault, obj4);
      }
    }
    const obj6 = { projectId, src, alt, size: overlayWidgetSize, onError: handleError };
    tmp7Result = closure_1_8(closure_12, obj6);
  }
});
ReactCompilerGating = fn(558);
let obj9 = { position: "absolute", top: fn(12426).CONJURE_PLAN_OVERLAY_WIDGET_TOP, end: fn(12426).CONJURE_PLAN_OVERLAY_WIDGET_END };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanProposalCard(projectId) {
  const cResult = projectId(conjurePlanWidget[8]).c(69);
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  ({ version, superseded, expanded, onToggleExpanded, onApprove } = projectId);
  closure_11();
  if (cResult[0] !== proposal.summary) {
    const trimmed = proposal.summary.trim();
    cResult[0] = proposal.summary;
    cResult[1] = trimmed;
    let tmp5 = trimmed;
  } else {
    tmp5 = cResult[1];
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
  }
  if (cResult[4] !== tmp5) {
    const parsed = proposal(tmp2[13]).parse(tmp5, true, tmp(tmp2[14]).CONJURE_MARKUP_OPTIONS);
    cResult[4] = tmp5;
    cResult[5] = parsed;
    let obj2 = proposal(tmp2[13]);
  }
  let obj = projectId(conjurePlanWidget[8]);
  const conjurePlanSlashCommandNames = projectId(conjurePlanWidget[15]).useConjurePlanSlashCommandNames(proposal.commands);
  const tmpResult = projectId(conjurePlanWidget[15]);
  conjurePlanWidget = projectId(conjurePlanWidget[16]).useConjurePlanWidget(projectId, proposal);
  const tmpResult6 = projectId(conjurePlanWidget[16]);
  const botExchanges = projectId(conjurePlanWidget[17]).useConjurePlanBotExchanges(proposal).botExchanges;
  const tmpResult7 = projectId(conjurePlanWidget[17]);
  const conjurePlanCommandExchanges = projectId(conjurePlanWidget[17]).useConjurePlanCommandExchanges(proposal);
  if (cResult[6] !== proposal) {
    const result = tmp(tmp2[18]).conjurePlanDesignExperienceId(proposal);
    cResult[6] = proposal;
    cResult[7] = result;
    let tmp15 = result;
    const tmpResult9 = tmp(tmp2[18]);
  } else {
    tmp15 = cResult[7];
  }
  closure_5 = tmp15;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore];
    cResult[8] = items;
    let tmp17 = items;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] !== projectId) {
    class B {
      constructor() {
        project = closure_7.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
    const items1 = [projectId];
    cResult[9] = projectId;
    cResult[10] = B;
    cResult[11] = items1;
    let tmp20 = items1;
  } else {
    class B {
      constructor() {
        project = closure_7.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
    tmp20 = cResult[11];
  }
  const tmpResult8 = projectId(conjurePlanWidget[17]);
  const stateFromStores = projectId(conjurePlanWidget[19]).useStateFromStores(tmp17, B, tmp20);
  if (cResult[12] === botExchanges) {
    class B {
      constructor() {
        project = closure_7.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0) {
        kind = projectId.kind;
        tmp = "bot" === kind;
        if (!tmp) {
          str = "commands";
          tmp = "commands" === kind;
        }
        return tmp;
      }
    }
    cResult[16] = F;
  } else {
    class F {
      constructor(arg0) {
        kind = projectId.kind;
        tmp = "bot" === kind;
        if (!tmp) {
          str = "commands";
          tmp = "commands" === kind;
        }
        return tmp;
      }
    }
  }
  if (cResult[17] === botExchanges) {
    class F {
      constructor(arg0) {
        kind = projectId.kind;
        tmp = "bot" === kind;
        if (!tmp) {
          str = "commands";
          tmp = "commands" === kind;
        }
        return tmp;
      }
    }
    const experiences = proposal.experiences;
    if (experiences == null) {
      class F {
        constructor(arg0) {
          kind = projectId.kind;
          tmp = "bot" === kind;
          if (!tmp) {
            str = "commands";
            tmp = "commands" === kind;
          }
          return tmp;
        }
      }
    }
    const found = experiences.filter(F);
    const map = new Map(found.map(G));
    cResult[12] = botExchanges;
    cResult[13] = conjurePlanCommandExchanges;
    cResult[14] = proposal.experiences;
    cResult[15] = map;
  }
  class G {
    constructor(arg0) {
      items = [, ];
      items[0] = projectId.id;
      obj = closure_0(closure_2[20]);
      items[1] = obj.getConjurePlanSectionBotExchanges(projectId, botExchanges, closure_4);
      return items;
    }
  }
  cResult[17] = botExchanges;
  cResult[18] = conjurePlanCommandExchanges;
  cResult[19] = G;
  const tmpResult10 = projectId(conjurePlanWidget[19]);
}) : (function ConjurePlanProposalCard(projectId) {
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  ({ version, superseded } = projectId);
  if (superseded === undefined) {
    superseded = false;
  }
  let flag = projectId.expanded;
  if (flag === undefined) {
    flag = true;
  }
  const onApprove = projectId.onApprove;
  noop = undefined;
  let botExchanges;
  let conjurePlanCommandExchanges;
  closure_6 = undefined;
  closure_7 = undefined;
  let tmp = closure_11();
  const trimmed = proposal.summary.trim();
  let str3;
  if (proposal.what_changed != null) {
    str3 = str2.trim();
  }
  if (str3 == null) {
    str3 = "";
  }
  let items = [trimmed];
  const memo = noop.useMemo(() => MarkupUtilsDefault.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS), items);
  const conjurePlanSlashCommandNames = projectId(trimmed[15]).useConjurePlanSlashCommandNames(proposal.commands);
  let obj = projectId(trimmed[15]);
  noop = projectId(trimmed[16]).useConjurePlanWidget(projectId, proposal);
  let obj2 = projectId(trimmed[16]);
  botExchanges = projectId(trimmed[17]).useConjurePlanBotExchanges(proposal).botExchanges;
  let obj3 = projectId(trimmed[17]);
  conjurePlanCommandExchanges = projectId(trimmed[17]).useConjurePlanCommandExchanges(proposal);
  let obj4 = projectId(trimmed[17]);
  closure_6 = projectId(trimmed[18]).conjurePlanDesignExperienceId(proposal);
  let obj5 = projectId(trimmed[18]);
  const items1 = [closure_7];
  const items2 = [projectId];
  const stateFromStores = projectId(trimmed[19]).useStateFromStores(items1, () => {
    const project = ConjureProjectStore.getProject(projectId);
    let name;
    if (project != null) {
      name = project.name;
    }
    return name;
  }, items2);
  const items3 = [proposal.experiences, botExchanges, conjurePlanCommandExchanges];
  closure_7 = noop.useMemo(() => {
    let experiences = proposal.experiences;
    if (experiences == null) {
      experiences = [];
    }
    const found = experiences.filter((kind) => {
      kind = kind.kind;
      let tmp = "bot" === kind;
      if (!tmp) {
        tmp = "commands" === kind;
      }
      return tmp;
    });
    return new Map(found.map((id) => {
      const items = [id.id, projectId(trimmed[20]).getConjurePlanSectionBotExchanges(id, botExchanges, conjurePlanCommandExchanges)];
      return items;
    }));
  }, items3);
  const obj7 = { style: tmp.surface, children: null };
  const obj8 = { style: tmp.content, children: null };
  let obj6 = projectId(trimmed[19]);
  if (superseded) {
    if (null != version) {
      const intl2 = tmp4(tmp5[21]).intl;
      const obj9 = { version };
      let formatToPlainStringResult = intl2.formatToPlainString(tmp10(tmp5[26]).YZ3qJs, obj9);
    }
    const obj10 = { title: formatToPlainStringResult, meta: null, superseded: null, expanded: null, onToggleExpanded: null, showLabel: null, hideLabel: null, children: null };
    let tmp12Result = null;
    if (superseded) {
      const obj11 = { children: null };
      const intl3 = tmp4(tmp5[21]).intl;
      obj11.children = intl3.string(tmp10(tmp5[26]).hF2c41);
      tmp12Result = closure_8(tmp4(tmp5[27]).ConjureNativeCollapsibleMeta, obj11);
    }
    obj10.meta = tmp12Result;
    obj10.superseded = superseded;
    obj10.expanded = flag;
    obj10.onToggleExpanded = projectId.onToggleExpanded;
    const intl4 = tmp4(tmp5[21]).intl;
    obj10.showLabel = intl4.string(tmp10(tmp5[26]).yD8EJS);
    const intl5 = tmp4(tmp5[21]).intl;
    obj10.hideLabel = intl5.string(tmp10(tmp5[26]).nSPGNb);
    let str4 = stateFromStores;
    if (stateFromStores == null) {
      let experiences = proposal.experiences;
      let name;
      if (experiences != null) {
        const first = experiences[0];
        if (first != null) {
          name = first.name;
        }
      }
      str4 = name;
    }
    if (str4 == null) {
      str4 = "";
    }
    const obj12 = { appName: str4, intro: null, proposal: null, renderPreview: null, commandNames: null };
    let tmp12Result2 = null;
    if ("" !== trimmed) {
      const obj13 = { variant: "text-md/normal", color: "text-default", children: null };
      const obj14 = { markup: memo, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      obj13.children = closure_8(tmp4(tmp5[29]).ConjurePlanCommandMarkup, obj14);
      tmp12Result2 = closure_8(tmp4(tmp5[28]).Text, obj13);
    }
    const items4 = [tmp12Result2, ];
    let tmp9Result = null;
    if ("" !== str3) {
      const obj15 = { style: tmp.whatChanged, children: null };
      const obj16 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl8 = tmp4(tmp5[21]).intl;
      obj16.children = intl8.string(tmp10(tmp5[26]).iNS4dl);
      const items5 = [closure_8(tmp4(tmp5[28]).Text, obj16), ];
      const obj17 = { variant: "text-md/normal", color: "text-default", children: null };
      const obj18 = { text: str3, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      obj17.children = closure_8(tmp4(tmp5[29]).ConjurePlanCommandText, obj18);
      items5[1] = closure_8(tmp4(tmp5[28]).Text, obj17);
      obj15.children = items5;
      tmp9Result = closure_9(tmp13, obj15);
    }
    const obj19 = { children: null };
    items4[1] = tmp9Result;
    obj19.children = items4;
    obj12.intro = closure_9(closure_10, obj19);
    obj12.proposal = proposal;
    obj12.renderPreview = function renderPreview(kind) {
      kind = kind.kind;
      if ("frame" !== kind) {
        if ("overlay_widget" !== kind) {
          if ("user_widget" === kind) {
            let tmp15 = null;
            if (null != closure_3) {
              const obj2 = {};
              const merged = Object.assign(closure_3);
              tmp15 = closure_2_8(ConjurePlanWidgetDefault, obj2);
            }
            return tmp15;
          } else if ("automod" === kind) {
            let tmp10 = null;
            if (null != proposal.automod) {
              tmp10 = null;
              if (proposal.automod.examples.length > 0) {
                const obj3 = { automod: proposal.automod };
                tmp10 = closure_2_8(ConjurePlanAutomodExamplesDefault, obj3);
              }
            }
            return tmp10;
          } else {
            let items = closure_7.get(kind.id);
            if (items == null) {
              items = [];
            }
            let tmp3 = null;
            if (items.length > 0) {
              const obj = { projectId, exchanges: items };
              tmp3 = closure_2_8(ConjurePlanBotPreviewDefault, obj);
            }
            return tmp3;
          }
        }
      }
      let tmp23 = null;
      if (kind.id === closure_6) {
        tmp23 = null;
        if (null != proposal.design_image) {
          const obj4 = { projectId, design: proposal.design_image, alt: null, overlayWidgetSize: null };
          const intl = util.intl;
          obj4.alt = intl.string(conjurePlanDesign.conjurePlanDesignAlt(proposal));
          obj4.overlayWidgetSize = conjurePlanOverlayDesign.conjurePlanOverlayWidgetSize(proposal);
          tmp23 = closure_2_8(closure_13, obj4);
        }
      }
      return tmp23;
    };
    obj12.commandNames = conjurePlanSlashCommandNames;
    obj10.children = closure_8(tmp10(tmp5[30]), obj12);
    obj8.children = closure_8(tmp14, obj10);
    const items6 = [closure_8(tmp13, obj8), ];
    let tmp9Result2 = null;
    if (null != onApprove) {
      tmp9Result2 = null;
      if (!superseded) {
        const obj20 = { style: tmp.footer, children: null };
        const obj21 = { text: null, variant: "primary", size: "sm", onPress: null };
        const intl6 = tmp4(tmp5[21]).intl;
        obj21.text = intl6.string(tmp10(tmp5[26])["6S+wRM"]);
        obj21.onPress = onApprove;
        const items7 = [closure_8(tmp4(tmp5[31]).Button, obj21), ];
        const obj22 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.replyHint, children: null };
        const intl7 = tmp4(tmp5[21]).intl;
        obj22.children = intl7.string(tmp10(tmp5[26]).IZoqbR);
        items7[1] = closure_8(tmp4(tmp5[28]).Text, obj22);
        obj20.children = items7;
        tmp9Result2 = closure_9(tmp13, obj20);
      }
    }
    items6[1] = tmp9Result2;
    obj7.children = items6;
    return closure_9(tmp11, obj7);
  }
  let intl = tmp4(tmp5[21]).intl;
  formatToPlainStringResult = intl.string(tmp10(tmp5[26])["3b6e7o"]);
  tmp11 = proposal(trimmed[32]);
});