// === Module 12412: ConjurePlanProposalCard ===

// Module 12412 (ConjurePlanProposalCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import FastImageDefault from "FastImage" /* 5667 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5703 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 11803 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12251 */;
import conjurePlanBot from "conjurePlanBot" /* 12419 */;
import conjurePlanDesign from "conjurePlanDesign" /* 12422 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 12423 */;
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples" /* 12424 */;
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview" /* 12426 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6771 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4969);
let obj2 = { surface: { padding: 0, overflow: "hidden" }, content: { padding: nativeDefault.space.PX_12 }, whatChanged: null, footer: null, replyHint: null, design: null };
let obj3 = { padding: nativeDefault.space.PX_12 };
obj2.whatChanged = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.footer = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.replyHint = { flexShrink: 1 };
let obj5 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.design = { width: "100%", aspectRatio: 1.5, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center" };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(alt) {
  const cResult = c.c(5);
  alt = alt.alt;
  ({ projectId, design } = alt);
  let design2 = closure_10();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    if (null == src) {
      const obj3 = { style: design2.design, children: null };
      const obj4 = { size: "small", accessibilityLabel: alt };
      obj3.children = React5(React4, obj4);
      let tmp6 = React5(hasOwnProperty, obj3);
    } else {
      const obj5 = { source: null, style: null, resizeMode: "contain", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
      const obj6 = { uri: src };
      obj5.source = obj6;
      obj5.style = design2.design;
      obj5.onError = handleError;
      obj5.accessibilityLabel = alt;
      tmp6 = React5(FastImageDefault, obj5);
    }
    cResult[0] = alt;
    cResult[1] = handleError;
    cResult[2] = src;
    design2 = design2.design;
    cResult[3] = design2;
    cResult[4] = tmp6;
  }
}) : (function PlanDesign(alt) {
  alt = alt.alt;
  ({ projectId, design } = alt);
  let tmp = closure_10();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
  const src = conjureAttachmentImage.src;
  if (conjureAttachmentImage.gone) {
    return null;
  } else if (null == src) {
    const obj2 = { style: tmp.design, children: null };
    tmp = React4;
    const obj3 = { size: "small", accessibilityLabel: alt };
    obj2.children = React5(React4, obj3);
    let tmp7 = React5(hasOwnProperty, obj2);
  } else {
    const obj4 = { source: null, style: null, resizeMode: "contain", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
    const obj5 = { uri: src };
    obj4.source = obj5;
    obj4.style = tmp.design;
    obj4.onError = tmp4;
    obj4.accessibilityLabel = alt;
    tmp7 = React5(FastImageDefault, obj4);
  }
});
ReactCompilerGating = fn(558);
let obj6 = { width: "100%", aspectRatio: 1.5, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanProposalCard(projectId) {
  const cResult = projectId(conjurePlanWidget[7]).c(69);
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  ({ version, superseded, expanded, onToggleExpanded, onApprove } = projectId);
  closure_10();
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
    const parsed = proposal(tmp2[10]).parse(tmp5, true, tmp(tmp2[11]).CONJURE_MARKUP_OPTIONS);
    cResult[4] = tmp5;
    cResult[5] = parsed;
    let obj2 = proposal(tmp2[10]);
  }
  let obj = projectId(conjurePlanWidget[7]);
  const conjurePlanSlashCommandNames = projectId(conjurePlanWidget[12]).useConjurePlanSlashCommandNames(proposal.commands);
  const tmpResult = projectId(conjurePlanWidget[12]);
  conjurePlanWidget = projectId(conjurePlanWidget[13]).useConjurePlanWidget(projectId, proposal);
  const tmpResult6 = projectId(conjurePlanWidget[13]);
  const botExchanges = projectId(conjurePlanWidget[14]).useConjurePlanBotExchanges(proposal).botExchanges;
  const tmpResult7 = projectId(conjurePlanWidget[14]);
  const conjurePlanCommandExchanges = projectId(conjurePlanWidget[14]).useConjurePlanCommandExchanges(proposal);
  if (cResult[6] !== proposal) {
    const result = tmp(tmp2[15]).conjurePlanDesignExperienceId(proposal);
    cResult[6] = proposal;
    cResult[7] = result;
    let tmp15 = result;
    const tmpResult9 = tmp(tmp2[15]);
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
        project = closure_6.getProject(projectId);
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
        project = closure_6.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
    tmp20 = cResult[11];
  }
  const tmpResult8 = projectId(conjurePlanWidget[14]);
  const stateFromStores = projectId(conjurePlanWidget[16]).useStateFromStores(tmp17, B, tmp20);
  if (cResult[12] === botExchanges) {
    class B {
      constructor() {
        project = closure_6.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
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
    cResult[16] = G;
  } else {
    class G {
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
    class G {
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
      class G {
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
    const found = experiences.filter(G);
    const map = new Map(found.map(J));
    cResult[12] = botExchanges;
    cResult[13] = conjurePlanCommandExchanges;
    cResult[14] = proposal.experiences;
    cResult[15] = map;
  }
  class J {
    constructor(arg0) {
      items = [, ];
      items[0] = projectId.id;
      obj = closure_0(closure_2[17]);
      items[1] = obj.getConjurePlanSectionBotExchanges(projectId, botExchanges, closure_4);
      return items;
    }
  }
  cResult[17] = botExchanges;
  cResult[18] = conjurePlanCommandExchanges;
  cResult[19] = J;
  const tmpResult10 = projectId(conjurePlanWidget[16]);
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
  let tmp = closure_10();
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
  const conjurePlanSlashCommandNames = projectId(trimmed[12]).useConjurePlanSlashCommandNames(proposal.commands);
  let obj = projectId(trimmed[12]);
  noop = projectId(trimmed[13]).useConjurePlanWidget(projectId, proposal);
  let obj2 = projectId(trimmed[13]);
  botExchanges = projectId(trimmed[14]).useConjurePlanBotExchanges(proposal).botExchanges;
  let obj3 = projectId(trimmed[14]);
  conjurePlanCommandExchanges = projectId(trimmed[14]).useConjurePlanCommandExchanges(proposal);
  let obj4 = projectId(trimmed[14]);
  closure_6 = projectId(trimmed[15]).conjurePlanDesignExperienceId(proposal);
  let obj5 = projectId(trimmed[15]);
  const items1 = [closure_6];
  const items2 = [projectId];
  const stateFromStores = projectId(trimmed[16]).useStateFromStores(items1, () => {
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
      const items = [id.id, projectId(trimmed[17]).getConjurePlanSectionBotExchanges(id, botExchanges, conjurePlanCommandExchanges)];
      return items;
    }));
  }, items3);
  const obj7 = { style: tmp.surface, children: null };
  const obj8 = { style: tmp.content, children: null };
  const obj6 = projectId(trimmed[16]);
  if (superseded) {
    if (null != version) {
      const intl2 = tmp4(tmp5[18]).intl;
      const obj9 = { version };
      let formatToPlainStringResult = intl2.formatToPlainString(tmp10(tmp5[23]).YZ3qJs, obj9);
    }
    const obj10 = { title: formatToPlainStringResult, meta: null, superseded: null, expanded: null, onToggleExpanded: null, showLabel: null, hideLabel: null, children: null };
    let tmp12Result = null;
    if (superseded) {
      const obj11 = { children: null };
      const intl3 = tmp4(tmp5[18]).intl;
      obj11.children = intl3.string(tmp10(tmp5[23]).hF2c41);
      tmp12Result = tmp12(tmp4(tmp5[24]).ConjureNativeCollapsibleMeta, obj11);
    }
    obj10.meta = tmp12Result;
    obj10.superseded = superseded;
    obj10.expanded = flag;
    obj10.onToggleExpanded = projectId.onToggleExpanded;
    const intl4 = tmp4(tmp5[18]).intl;
    obj10.showLabel = intl4.string(tmp10(tmp5[23]).yD8EJS);
    const intl5 = tmp4(tmp5[18]).intl;
    obj10.hideLabel = intl5.string(tmp10(tmp5[23]).nSPGNb);
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
      obj13.children = tmp12(tmp4(tmp5[26]).ConjurePlanCommandMarkup, obj14);
      tmp12Result2 = tmp12(tmp4(tmp5[25]).Text, obj13);
    }
    const items4 = [tmp12Result2, ];
    let tmp9Result = null;
    if ("" !== str3) {
      const obj15 = { style: tmp.whatChanged, children: null };
      const obj16 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl8 = tmp4(tmp5[18]).intl;
      obj16.children = intl8.string(tmp10(tmp5[23]).iNS4dl);
      const items5 = [tmp12(tmp4(tmp5[25]).Text, obj16), ];
      const obj17 = { variant: "text-md/normal", color: "text-default", children: null };
      const obj18 = { text: str3, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      obj17.children = tmp12(tmp4(tmp5[26]).ConjurePlanCommandText, obj18);
      items5[1] = tmp12(tmp4(tmp5[25]).Text, obj17);
      obj15.children = items5;
      tmp9Result = closure_8(tmp13, obj15);
    }
    const obj19 = { children: null };
    items4[1] = tmp9Result;
    obj19.children = items4;
    obj12.intro = closure_8(closure_9, obj19);
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
              tmp15 = React5(ConjurePlanWidgetDefault, obj2);
            }
            return tmp15;
          } else if ("automod" === kind) {
            let tmp10 = null;
            if (null != proposal.automod) {
              tmp10 = null;
              if (proposal.automod.examples.length > 0) {
                const obj3 = { automod: proposal.automod };
                tmp10 = React5(ConjurePlanAutomodExamplesDefault, obj3);
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
              tmp3 = React5(ConjurePlanBotPreviewDefault, obj);
            }
            return tmp3;
          }
        }
      }
      let tmp23 = null;
      if (kind.id === closure_6) {
        tmp23 = null;
        if (null != proposal.design_image) {
          const obj4 = { projectId, design: proposal.design_image, alt: null };
          const intl = util.intl;
          obj4.alt = intl.string(conjurePlanDesign.conjurePlanDesignAlt(proposal));
          tmp23 = React5(closure_11, obj4);
        }
      }
      return tmp23;
    };
    obj12.commandNames = conjurePlanSlashCommandNames;
    obj10.children = tmp12(tmp10(tmp5[27]), obj12);
    obj8.children = tmp12(tmp14, obj10);
    const items6 = [tmp12(tmp13, obj8), ];
    let tmp9Result2 = null;
    if (null != onApprove) {
      tmp9Result2 = null;
      if (!superseded) {
        const obj20 = { style: tmp.footer, children: null };
        const obj21 = { text: null, variant: "primary", size: "sm", onPress: null };
        const intl6 = tmp4(tmp5[18]).intl;
        obj21.text = intl6.string(tmp10(tmp5[23])["6S+wRM"]);
        obj21.onPress = onApprove;
        const items7 = [tmp12(tmp4(tmp5[28]).Button, obj21), ];
        const obj22 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.replyHint, children: null };
        const intl7 = tmp4(tmp5[18]).intl;
        obj22.children = intl7.string(tmp10(tmp5[23]).IZoqbR);
        items7[1] = tmp12(tmp4(tmp5[25]).Text, obj22);
        obj20.children = items7;
        tmp9Result2 = closure_8(tmp13, obj20);
      }
    }
    items6[1] = tmp9Result2;
    obj7.children = items6;
    return closure_8(tmp11, obj7);
  }
  let intl = tmp4(tmp5[18]).intl;
  formatToPlainStringResult = intl.string(tmp10(tmp5[23])["3b6e7o"]);
  tmp11 = proposal(trimmed[29]);
});