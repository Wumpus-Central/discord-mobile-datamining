// discord_app/modules/conjure/plan/native/ConjurePlanProposalCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import MarkupUtilsDefault from "../../../markup/MarkupUtils.tsx";
import useConjureAttachmentImage from "../../chat/useConjureAttachmentImage.tsx";
import openConjureNativeImages from "../../chat/native/openConjureNativeImages.tsx";
import ConjureNativeMarkdown from "../../chat/native/ConjureNativeMarkdown.tsx";
import conjurePlanOverlayDesign from "../conjurePlanOverlayDesign.tsx";
import conjurePlanDesign from "../conjurePlanDesign.tsx";
import useConjureOverlayBackgroundDefault from "../../preview/useConjureOverlayBackground.tsx";
import _modDef12691 from "../../../../../_runtime/metro/12691__.js";
import ConjurePlanWidgetDefault from "ConjurePlanWidget.tsx";
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples.tsx";
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

require = fn;
function PlanOverlayWidget(arg0) {
  ({ projectId, src, alt, size, onError } = arg0);
  const tmp = closure_13();
  const tmp4Result = useConjureOverlayBackgroundDefault(projectId, _modDef12691);
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
    const obj4 = {
      source: src2,
      style: null,
      resizeMode: "cover",
      blurRadius: null,
      onError: null,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
    };
    const items = [absoluteFill.absoluteFill, tmp4Result.blurred && tmp.blurredBackground];
    obj4.style = items;
    let num;
    if (tmp4Result.blurred) {
      num = 4;
    }
    obj4.blurRadius = num;
    obj4.onError = tmp4Result.handleError;
    tmp9Result = closure_1_10(FastImageDefault, obj4);
    const tmp2Result = FastImageDefault;
  }
  const items1 = [tmp9Result];
  const obj5 = {
    source: { uri: src },
    style: null,
    resizeMode: "contain",
    onError,
    accessible: true,
    accessibilityRole: "image",
    accessibilityLabel: alt,
  };
  const items2 = [tmp.overlayWidget, { width: size2.width, height: size2.height }];
  obj5.style = items2;
  items1[1] = closure_1_10(FastImageDefault, obj5);
  obj2.children = items1;
  return closure_1_11(React6, obj2);
}
function PlanDesign(projectId) {
  projectId = projectId.projectId;
  const design = projectId.design;
  const alt = projectId.alt;
  let tmp = closure_13();
  const conjureAttachmentImage = projectId(alt[11]).useConjureAttachmentImage(projectId, design.id);
  const src = conjureAttachmentImage.src;
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    const obj2 = {
      onPress() {
        const items = [{ id: design.id, alt }];
        return openConjureNativeImages.openConjureNativeImages(projectId, items, 0);
      },
      accessibilityRole: "imagebutton",
      accessibilityLabel: alt,
      accessibilityHint: null,
      children: null,
    };
    const intl = tmp2(tmp3[13]).intl;
    obj2.accessibilityHint = intl.string(design(tmp3[14]).TvAPIm);
    if (null == src) {
      const obj3 = { style: tmp.design, children: null };
      tmp = closure_5;
      obj3.children = closure_10(closure_5, { size: "small" });
      let tmp6Result = closure_10(closure_8, obj3);
    } else {
      const obj4 = { source: null, style: null, resizeMode: "contain", onError: null };
      const obj5 = { uri: src };
      obj4.source = obj5;
      obj4.style = tmp.design;
      obj4.onError = tmp5;
      tmp6Result = closure_10(tmp8(tmp3[10]), obj4);
    }
    obj2.children = tmp6Result;
    closure_10(closure_6, obj2);
    tmp8 = design;
  }
  const obj = projectId(alt[11]);
  tmp2 = projectId;
}
function PlanOverlayDesign(projectId) {
  projectId = projectId.projectId;
  const design = projectId.design;
  c4 = undefined;
  c5 = undefined;
  const tmp = closure_13();
  dependencyMap = tmp;
  const conjureAttachmentImage = projectId(12455).useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError, gone } = conjureAttachmentImage);
  let obj = projectId(12455);
  const conjurePlanOverlaySlides = projectId(12692).useConjurePlanOverlaySlides({ ready: null != src });
  const slide = conjurePlanOverlaySlides.slide;
  ({ labels, pick: c4 } = conjurePlanOverlaySlides);
  if (gone) {
    return null;
  } else {
    const intl = tmp2(1114).intl;
    const stringResult = intl.string(design(3865).mjryK4);
    c5 = stringResult;
    const intl2 = tmp2(1114).intl;
    const stringResult1 = intl2.string(design(3865)["rPpf5/"]);
    const obj4 = { style: tmp.stack, children: null };
    const obj5 = {
      onPressIn: tmp6,
      onPress() {
        const items = [{ id: design.id, alt }];
        return openConjureNativeImages.openConjureNativeImages(projectId, items, 0);
      },
      accessibilityRole: "imagebutton",
      accessibilityLabel: null,
      accessibilityHint: null,
      children: null,
    };
    let tmp15 = stringResult1;
    if (0 === slide) {
      tmp15 = stringResult;
    }
    obj5.accessibilityLabel = tmp15;
    const intl3 = tmp2(1114).intl;
    obj5.accessibilityHint = intl3.string(design(3865).TvAPIm);
    if (null == src) {
      const obj6 = { style: null, children: null };
      let items = [,];
      ({ overlayDesign: arr2[0], overlayWidgetSlide: arr2[1] } = tmp);
      obj6.style = items;
      obj6.children = closure_10(c5, { size: "small" });
      let tmp12Result = closure_10(closure_8, obj6);
    } else if (tmp14) {
      const obj7 = { style: null, children: null };
      const items1 = [,];
      ({ overlayDesign: arr[0], overlayWidgetSlide: arr[1] } = tmp);
      obj7.style = items1;
      const obj8 = { source: null, style: null, resizeMode: "contain", onError: null };
      const obj9 = { uri: src };
      obj8.source = obj9;
      obj8.style = tmp.overlayFullWidget;
      obj8.onError = handleError;
      obj7.children = closure_10(tmp7(5712), obj8);
      tmp12Result = closure_10(closure_8, obj7);
    } else {
      const obj10 = { projectId, src, alt: stringResult1, size: projectId.size, onError: handleError };
      tmp12Result = closure_10(PlanOverlayWidget, obj10);
    }
    obj5.children = tmp12Result;
    const items2 = [closure_10(closure_6, obj5)];
    const obj11 = { style: tmp.slidePicker, accessibilityRole: "tablist", accessibilityLabel: null, children: null };
    const intl4 = tmp2(1114).intl;
    obj11.accessibilityLabel = intl4.string(design(3865).EH36X6);
    obj11.children = labels.map((children, index) => {
      closure_0 = index;
      const items = [closure_2.slideButton];
      let slideButtonActive = tmp3;
      if (slide === index) {
        slideButtonActive = closure_2.slideButtonActive;
      }
      const obj = {
        style: items,
        onPress() {
          return c4(closure_0);
        },
        accessibilityRole: "tab",
        accessibilityState: { selected: slide === index },
        children: null,
      };
      items[1] = slideButtonActive;
      let str = "text-muted";
      if (slide === index) {
        str = "text-default";
      }
      obj.children = closure_1_10(projectId(closure_2[16]).Text, { variant: "text-xs/medium", color: str, children });
      return closure_1_10(closure_1_6, obj, children);
    });
    items2[1] = closure_10(closure_8, obj11);
    obj4.children = items2;
    return closure_11(closure_8, obj4);
  }
  const obj2 = projectId(12692);
  const obj3 = { ready: null != src };
}
function PlanReference(arg0) {
  c0 = undefined;
  ({ projectId, id, alt, onOpen } = arg0);
  let tmp = closure_13();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, id);
  const src = conjureAttachmentImage.src;
  ({ gone, handleError } = conjureAttachmentImage);
  [tmp5, c0] = noop.useState(null);
  if (gone) {
    return null;
  } else {
    let num2 = 64;
    if (null != tmp5) {
      const _Math = Math;
      num2 = Math.min(192, 64 * tmp5);
    }
    const obj2 = {
      onPress: onOpen,
      style: null,
      accessibilityRole: "imagebutton",
      accessibilityLabel: null,
      children: null,
    };
    const items = [tmp.reference];
    const obj3 = { width: num2 };
    items[1] = obj3;
    obj2.style = items;
    obj2.accessibilityLabel = alt;
    let tmp7Result = null;
    if (null != src) {
      const obj4 = { source: null, style: null, resizeMode: "contain", onLoad: null, onError: null, accessible: false };
      const obj5 = { uri: src };
      obj4.source = obj5;
      obj4.style = tmp.referenceImage;
      obj4.onLoad = function onLoad(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        let source = nativeEvent;
        if ("source" in nativeEvent) {
          source = nativeEvent.source;
        }
        if (tmp) {
          _undefined(source.width / source.height);
        }
        tmp = source.width > 0 && source.height > 0;
      };
      obj4.onError = handleError;
      tmp7Result = closure_1_10(FastImageDefault, obj4);
    }
    obj2.children = tmp7Result;
    return closure_1_10(timestampProducer, obj2);
  }
  const tmp4 = _slicedToArray(noop.useState(null), 2);
}
function PlanReferences(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_13();
  const result = projectId(12687).conjurePlanReferenceImages(projectId.proposal);
  importDefault = result;
  let tmp4 = null;
  if (0 !== result.length) {
    const obj2 = { style: tmp.stack, children: null };
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = tmp2(1114).intl;
    obj3.children = intl.string(_modDef3865.ubBJcy);
    const items = [closure_10(tmp2(5619).Text, obj3)];
    const obj4 = {
      style: tmp.referenceList,
      children: result.map((alt, index) => {
        const id = alt.id;
        projectId = index;
        return closure_1_10(
          PlanReference,
          {
            projectId,
            id,
            alt: alt.alt,
            onOpen() {
              return openConjureNativeImages.openConjureNativeImages(projectId, c1, closure_0);
            },
          },
          id,
        );
      }),
    };
    items[1] = closure_10(closure_8, obj4);
    obj2.children = items;
    tmp4 = closure_11(closure_8, obj2);
  }
  return tmp4;
}
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: hasOwnProperty,
  Pressable: metroRequire,
  StyleSheet: closure_7,
  View: closure_8,
} = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  surface: { padding: 0, overflow: "hidden" },
  content: { padding: nativeDefault.space.PX_12 },
  whatChanged: null,
  footer: null,
  replyHint: null,
  design: null,
  overlayDesign: null,
  blurredBackground: null,
  overlayWidget: null,
  stack: null,
  overlayWidgetSlide: null,
  overlayFullWidget: null,
  slidePicker: null,
  slideButton: null,
  slideButtonActive: null,
  referenceList: null,
  reference: null,
  referenceImage: null,
};
let obj3 = { padding: nativeDefault.space.PX_12 };
obj2.whatChanged = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.footer = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_8,
  columnGap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_MUTED,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj2.replyHint = { flexShrink: 1 };
let obj5 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_8,
  columnGap: nativeDefault.space.PX_12,
  padding: nativeDefault.space.PX_12,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_MUTED,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj2.design = {
  width: "100%",
  aspectRatio: 1.5,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  alignItems: "center",
  justifyContent: "center",
};
let obj6 = {
  width: "100%",
  aspectRatio: 1.5,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  alignItems: "center",
  justifyContent: "center",
};
obj2.overlayDesign = {
  width: "100%",
  aspectRatio: fn(12685).CONJURE_PLAN_OVERLAY_SCENE_ASPECT_RATIO,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  overflow: "hidden",
};
let obj8 = { transform: null };
let items = [{ scale: 1.04 }];
obj8.transform = items;
obj2.blurredBackground = obj8;
let obj7 = {
  width: "100%",
  aspectRatio: fn(12685).CONJURE_PLAN_OVERLAY_SCENE_ASPECT_RATIO,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  overflow: "hidden",
};
obj2.overlayWidget = {
  position: "absolute",
  top: fn(12685).CONJURE_PLAN_OVERLAY_WIDGET_TOP,
  end: fn(12685).CONJURE_PLAN_OVERLAY_WIDGET_END,
};
let obj9 = {
  position: "absolute",
  top: fn(12685).CONJURE_PLAN_OVERLAY_WIDGET_TOP,
  end: fn(12685).CONJURE_PLAN_OVERLAY_WIDGET_END,
};
obj2.stack = { gap: nativeDefault.space.PX_8 };
let obj10 = { gap: nativeDefault.space.PX_8 };
obj2.overlayWidgetSlide = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj2.overlayFullWidget = { width: "100%", height: "100%" };
let obj11 = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj2.slidePicker = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
let obj12 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
obj2.slideButton = {
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
};
let obj13 = {
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
};
obj2.slideButtonActive = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let obj14 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.referenceList = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let obj15 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj2.reference = {
  height: 64,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
obj2.referenceImage = { width: "100%", height: "100%" };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default function ConjurePlanProposalCard(projectId) {
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
  let ui;
  closure_8 = undefined;
  let tmp = closure_13();
  dependencyMap = tmp;
  const trimmed = proposal.summary.trim();
  let str3;
  if (proposal.what_changed != null) {
    str3 = str2.trim();
  }
  if (str3 == null) {
    str3 = "";
  }
  let items = [trimmed];
  const memo = noop.useMemo(
    () => MarkupUtilsDefault.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS),
    items,
  );
  const conjurePlanSlashCommandNames = projectId(12693).useConjurePlanSlashCommandNames(proposal.commands);
  let obj = projectId(12693);
  noop = projectId(12695).useConjurePlanWidget(projectId, proposal);
  let obj2 = projectId(12695);
  botExchanges = projectId(12698).useConjurePlanBotExchanges(proposal).botExchanges;
  let obj3 = projectId(12698);
  conjurePlanCommandExchanges = projectId(12698).useConjurePlanCommandExchanges(proposal);
  let obj4 = projectId(12698);
  ui = projectId(12685).conjurePlanDesignPreviews(proposal);
  let obj5 = projectId(12685);
  let items1 = [ConjureProjectStore];
  const items2 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(
    items1,
    () => {
      const project = ConjureProjectStore.getProject(projectId);
      let name;
      if (project != null) {
        name = project.name;
      }
      return name;
    },
    items2,
  );
  const items3 = [proposal.experiences, botExchanges, conjurePlanCommandExchanges];
  closure_8 = noop.useMemo(() => {
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
    return new Map(
      found.map((id) => {
        const items = [
          id.id,
          projectId(closure_2[24]).getConjurePlanSectionBotExchanges(id, botExchanges, conjurePlanCommandExchanges),
        ];
        return items;
      }),
    );
  }, items3);
  let obj7 = { style: tmp.surface, children: null };
  const obj8 = { style: tmp.content, children: null };
  let obj6 = projectId(504);
  if (superseded) {
    if (null != version) {
      const intl2 = tmp4(1114).intl;
      const obj9 = { version };
      let formatToPlainStringResult = intl2.formatToPlainString(tmp10(3865).YZ3qJs, obj9);
    }
    const obj10 = {
      title: formatToPlainStringResult,
      meta: null,
      superseded: null,
      expanded: null,
      onToggleExpanded: null,
      showLabel: null,
      hideLabel: null,
      children: null,
    };
    let tmp12Result = null;
    if (superseded) {
      const obj11 = { children: null };
      const intl3 = tmp4(1114).intl;
      obj11.children = intl3.string(tmp10(3865).hF2c41);
      tmp12Result = closure_10(tmp4(12683).ConjureNativeCollapsibleMeta, obj11);
    }
    obj10.meta = tmp12Result;
    obj10.superseded = superseded;
    obj10.expanded = flag;
    obj10.onToggleExpanded = projectId.onToggleExpanded;
    const intl4 = tmp4(1114).intl;
    obj10.showLabel = intl4.string(tmp10(3865).yD8EJS);
    const intl5 = tmp4(1114).intl;
    obj10.hideLabel = intl5.string(tmp10(3865).nSPGNb);
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
      obj13.children = closure_10(tmp4(12704).ConjurePlanCommandMarkup, obj14);
      tmp12Result2 = closure_10(tmp4(5619).Text, obj13);
    }
    const items4 = [tmp12Result2, ,];
    const obj15 = { projectId, proposal };
    items4[1] = closure_10(PlanReferences, obj15);
    let tmp9Result = null;
    if ("" !== str3) {
      const obj16 = { style: tmp.whatChanged, children: null };
      const obj17 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl8 = tmp4(1114).intl;
      obj17.children = intl8.string(tmp10(3865).iNS4dl);
      const items5 = [closure_10(tmp4(5619).Text, obj17)];
      const obj18 = { variant: "text-md/normal", color: "text-default", children: null };
      const obj19 = { text: str3, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      obj18.children = closure_10(tmp4(12704).ConjurePlanCommandText, obj19);
      items5[1] = closure_10(tmp4(5619).Text, obj18);
      obj16.children = items5;
      tmp9Result = closure_11(tmp13, obj16);
    }
    const obj20 = { children: null };
    items4[2] = tmp9Result;
    obj20.children = items4;
    obj12.intro = closure_11(closure_12, obj20);
    obj12.proposal = proposal;
    obj12.renderPreview = function renderPreview(kind) {
      kind = kind.kind;
      if ("frame" !== kind) {
        if ("overlay_widget" !== kind) {
          if ("user_widget" === kind) {
            let tmp15 = null;
            if (null != closure_4) {
              const obj2 = {};
              const merged = Object.assign(closure_4);
              tmp15 = closure_2_10(ConjurePlanWidgetDefault, obj2);
            }
            return tmp15;
          } else if ("automod" === kind) {
            let tmp10 = null;
            if (null != proposal.automod) {
              tmp10 = null;
              if (proposal.automod.examples.length > 0) {
                const obj3 = { automod: proposal.automod };
                tmp10 = closure_2_10(ConjurePlanAutomodExamplesDefault, obj3);
              }
            }
            return tmp10;
          } else {
            let items1 = closure_8.get(kind.id);
            if (items1 == null) {
              items1 = [];
            }
            let tmp3 = null;
            if (items1.length > 0) {
              const obj = { projectId, exchanges: items1 };
              tmp3 = closure_2_10(ConjurePlanBotPreviewDefault, obj);
            }
            return tmp3;
          }
        }
      }
      ui = ui.ui;
      let experienceId;
      if (ui != null) {
        experienceId = ui.experienceId;
      }
      let tmp25 = null;
      if (kind.id === experienceId) {
        const obj4 = { projectId, design: tmp23.ui.design, alt: null };
        const intl = util.intl;
        obj4.alt = intl.string(conjurePlanDesign.conjurePlanDesignAlt(proposal));
        tmp25 = closure_2_10(PlanDesign, obj4);
      }
      const overlay = tmp23.overlay;
      let experienceId1;
      if (overlay != null) {
        experienceId1 = overlay.experienceId;
      }
      let tmp34 = null;
      if (kind.id === experienceId1) {
        const obj6 = { projectId, design: tmp23.overlay.design, size: tmp23.overlay.size };
        tmp34 = closure_2_10(PlanOverlayDesign, obj6);
      }
      if (null != tmp25) {
        const obj7 = { style: stack.stack, children: null };
        const items = [tmp25, tmp34];
        obj7.children = items;
        let tmp38 = closure_2_11(React6, obj7);
      } else {
        tmp38 = null;
      }
      return tmp38;
    };
    obj12.commandNames = conjurePlanSlashCommandNames;
    obj10.children = closure_10(tmp10(12700), obj12);
    obj8.children = closure_10(tmp14, obj10);
    const items6 = [closure_10(tmp13, obj8)];
    let tmp9Result2 = null;
    if (null != onApprove) {
      tmp9Result2 = null;
      if (!superseded) {
        const obj21 = { style: tmp.footer, children: null };
        const obj22 = { text: null, variant: "primary", size: "sm", onPress: null };
        const intl6 = tmp4(1114).intl;
        obj22.text = intl6.string(tmp10(3865)["6S+wRM"]);
        obj22.onPress = onApprove;
        const items7 = [closure_10(tmp4(5629).Button, obj22)];
        const obj23 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.replyHint, children: null };
        const intl7 = tmp4(1114).intl;
        obj23.children = intl7.string(tmp10(3865).IZoqbR);
        items7[1] = closure_10(tmp4(5619).Text, obj23);
        obj21.children = items7;
        tmp9Result2 = closure_11(tmp13, obj21);
      }
    }
    items6[1] = tmp9Result2;
    obj7.children = items6;
    return closure_11(tmp11, obj7);
  }
  let intl = tmp4(1114).intl;
  formatToPlainStringResult = intl.string(tmp10(3865)["3b6e7o"]);
  tmp11 = proposal(12442);
}
