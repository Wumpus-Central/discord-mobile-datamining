// === Module 17130: ConjureNativeChat ===

// Module 17130 (ConjureNativeChat)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import _modDef3849 from "module_3849" /* 3849 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5079 */;
import Text_Text from "Text/Text" /* 5088 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import FastImageDefault from "FastImage" /* 6156 */;
import _modDef6242 from "module_6242" /* 6242 */;
import ConjureTypes from "ConjureTypes" /* 6946 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 17031 */;
import ConjureHistoryFormat from "ConjureHistoryFormat" /* 17116 */;
import ConjureVersionRestoreConfirm from "ConjureVersionRestoreConfirm" /* 17120 */;
import ConjureNativeStatusLineDefault from "ConjureNativeStatusLine" /* 17131 */;
import ConjureMessageAuthor from "ConjureMessageAuthor" /* 17134 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 17137 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 17141 */;
import conjurePlanFormat from "conjurePlanFormat" /* 17142 */;
import conjurePlanTags from "conjurePlanTags" /* 17143 */;
import conjurePlanWidget2 from "conjurePlanWidget" /* 17144 */;
import useConjurePlanBotPreviewItems from "useConjurePlanBotPreviewItems" /* 17147 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 17149 */;
import ConjureNativeCollapsibleSection from "ConjureNativeCollapsibleSection" /* 17150 */;
import ConjurePlanTypeTagsDefault from "ConjurePlanTypeTags" /* 17151 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 17156 */;
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples" /* 17161 */;
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview" /* 17163 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 17165 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 17166 */;
import ConjureNativeStepImagesDefault from "ConjureNativeStepImages" /* 17168 */;
import ConjureSubagentMark from "ConjureSubagentMark" /* 17170 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 17216 */;
import ConjureChatRestore from "ConjureChatRestore" /* 17217 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 17219 */;
import ConjurePublishNoticeLineDefault from "ConjurePublishNoticeLine" /* 17220 */;
import conjurePublishCard from "conjurePublishCard" /* 17223 */;
import ConjureIdeasOfferDefault from "ConjureIdeasOffer" /* 17226 */;
import ConjureTodoState from "ConjureTodoState" /* 17237 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 17245 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 17251 */;
import conjurePendingPlan from "conjurePendingPlan" /* 17257 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 17258 */;
import chat_ConjureRepliedMessage from "chat/ConjureRepliedMessage" /* 17263 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 13213 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10651 */;
import ConjureChatStore from "ConjureChatStore" /* 12996 */;

const ConjureNativeCollapsibleSectionDefault = ConjureNativeCollapsibleSection;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
let ConjureConnectionStore = fn(13213);
({ ensureConnection: c10, getAttachmentUrl: closure_11, interruptTurn: closure_12, loadOlderHistory: map1, sendUserMessage: closure_14 } = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
let turnSettled = fn(12996).turnSettled;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
let diff = fn(17131).MESSAGE_CONTENT_INSET - fn(17131).MESSAGE_EDGE_INSET;
let c22 = 0.2;
let c23 = 500;
let c24 = 52;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, , ];
let obj2 = _modDef683(BLACK);
items[1] = _modDef683(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(5092);
let obj = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: null, bottomStack: null, incompleteNotice: null, row: null, rowGroupStart: null, avatar: null, spoken: null, avatarSpoken: null, avatarSpokenReplying: null, reminderSlot: null, reminderTip: null, reminderSeparated: null, header: null, planActions: null, planReplyHint: null, designImage: null, designPlaceholder: null, ideaCards: null, activityBox: null, activityDetail: null, stepDetail: null, stepCommand: null, attachmentPills: null, agentReaction: null, agentReactionEmoji: null, attachmentPill: null, placeholder: null };
const alphaResult = _modDef683(BLACK).alpha(0.2);
obj.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj.incompleteNotice = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
let obj5 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
obj.row = { position: "relative", paddingLeft: fn(17131).MESSAGE_CONTENT_INSET, paddingRight: fn(17131).MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
obj.rowGroupStart = { marginTop: PX_12 };
const rect = { position: "absolute", left: fn(17131).MESSAGE_EDGE_INSET, top: 2 };
obj.avatar = rect;
obj.spoken = { position: "relative", gap: PX_8 };
const rect1 = { left: fn(17131).MESSAGE_EDGE_INSET - fn(17131).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj6 = { position: "relative", paddingLeft: fn(17131).MESSAGE_CONTENT_INSET, paddingRight: fn(17131).MESSAGE_EDGE_INSET, paddingVertical: 2, gap: PX_8 };
obj.avatarSpokenReplying = { top: fn(17133).REPLY_PREVIEW_HEIGHT + PX_8 };
obj.reminderSlot = { marginTop: -PX_8 };
obj.reminderTip = { paddingTop: PX_8 };
obj.reminderSeparated = { paddingTop: PX_12 + 4 };
let obj7 = { top: fn(17133).REPLY_PREVIEW_HEIGHT + PX_8 };
let obj8 = { paddingTop: PX_12 + 4 };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj9 = { marginBottom: -nativeDefault.space.PX_4 };
obj.planActions = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12 };
obj.planReplyHint = { flexShrink: 1 };
let obj10 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12 };
obj.designImage = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj11 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.designPlaceholder = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj.ideaCards = { gap: PX_8 };
obj.activityBox = { marginLeft: -diff };
obj.activityDetail = { paddingLeft: diff };
let obj12 = { width: "100%", aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj.stepDetail = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
obj.stepCommand = { fontFamily: fn(1085).Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 18 };
let obj13 = { marginTop: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_12, borderLeftWidth: 2, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, gap: 2 };
obj.attachmentPills = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj14 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj.agentReaction = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginTop: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, paddingVertical: 2, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.agentReactionEmoji = { width: 18, height: 18 };
let obj15 = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginTop: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, paddingVertical: 2, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.attachmentPill = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
let obj16 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj.placeholder = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_29 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(arg0) {
  const cResult = c.c(10);
  ({ projectId, design } = arg0);
  let designPlaceholder = closure_29();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(_modDef3849["3/aHX6"]);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl2 = util.intl;
      obj3.children = intl2.string(_modDef3849.X15LLY);
      const tmp12 = closure_1_19(Text_Text.Text, obj3);
      cResult[1] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[1];
    }
    if (cResult[2] === handleError) {
      if (cResult[3] === src) {
        if (cResult[4] === designPlaceholder.designImage) {
          if (cResult[5] === designPlaceholder.designPlaceholder) {
            const _Symbol3 = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
              const intl3 = util.intl;
              obj4.children = intl3.string(_modDef3849.nR4B8P);
              const tmp25 = closure_1_19(Text_Text.Text, obj4);
              cResult[7] = tmp25;
              let tmp22 = tmp25;
            } else {
              tmp22 = cResult[7];
            }
            if (cResult[8] !== cResult[6]) {
              const obj5 = { direction: "vertical", spacing: 4, children: null };
              items = [tmp9, tmp13, tmp22];
              obj5.children = items;
              const tmp28 = constants2(Stack_Stack.Stack, obj5);
              cResult[8] = tmp13;
              cResult[9] = tmp28;
              let tmp26 = tmp28;
            } else {
              tmp26 = cResult[9];
            }
            return tmp26;
          }
        }
      }
    }
    if (null == src) {
      const obj6 = { style: designPlaceholder.designPlaceholder, children: null };
      const obj7 = { size: "small", accessibilityLabel: first };
      obj6.children = closure_1_19(hasOwnProperty, obj7);
      let tmp17 = closure_1_19(React5, obj6);
    } else {
      const obj8 = { source: null, style: null, resizeMode: "cover", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
      const obj9 = { uri: src };
      obj8.source = obj9;
      obj8.style = designPlaceholder.designImage;
      obj8.onError = handleError;
      obj8.accessibilityLabel = first;
      tmp17 = closure_1_19(FastImageDefault, obj8);
    }
    cResult[2] = handleError;
    cResult[3] = src;
    src = designPlaceholder.designImage;
    cResult[4] = src;
    designPlaceholder = designPlaceholder.designPlaceholder;
    cResult[5] = designPlaceholder;
    cResult[6] = tmp17;
  }
}) : (function PlanDesign(arg0) {
  ({ projectId, design } = arg0);
  const tmp = closure_29();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
  const src = conjureAttachmentImage.src;
  if (conjureAttachmentImage.gone) {
    return null;
  } else {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3849["3/aHX6"]);
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(_modDef3849.X15LLY);
    items = [closure_1_19(Text_Text.Text, obj2), , ];
    if (null == src) {
      const obj3 = { style: tmp.designPlaceholder, children: null };
      const obj4 = { size: "small", accessibilityLabel: stringResult };
      obj3.children = closure_1_19(hasOwnProperty, obj4);
      let tmp9Result = closure_1_19(React5, obj3);
    } else {
      const obj5 = { source: null, style: null, resizeMode: "cover", onError: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null };
      const obj6 = { uri: src };
      obj5.source = obj6;
      obj5.style = tmp.designImage;
      obj5.onError = tmp5;
      obj5.accessibilityLabel = stringResult;
      tmp9Result = closure_1_19(FastImageDefault, obj5);
    }
    const obj7 = { direction: "vertical", spacing: 4, children: null };
    items[1] = tmp9Result;
    const obj8 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl3 = util.intl;
    obj8.children = intl3.string(_modDef3849.nR4B8P);
    items[2] = closure_1_19(Text_Text.Text, obj8);
    obj7.children = items;
    return constants2(Stack_Stack.Stack, obj7);
  }
});
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProposalCard(arg0) {
  const cResult = c.c(64);
  ({ projectId, proposal, version, superseded, expanded, onToggleExpanded, onApprove } = arg0);
  const tmp6 = closure_29();
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
  if (tmpResult.planDeclaresSurface(proposal, ConjureTypes.ConjureSupportedSurface.AUTOMOD)) {
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
            tmp21 = closure_1_19(ConjureNativeCollapsibleSection.ConjureNativeCollapsibleMeta, obj2);
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
              const intl13 = util.intl;
              obj4.children = intl13.string(_modDef3849.iNS4dl);
              items = [closure_1_19(Text_Text.Text, obj4), ];
              const obj5 = { variant: "text-md/normal", color: "text-default", children: tmp8 };
              items[1] = closure_1_19(Text_Text.Text, obj5);
              obj3.children = items;
              tmp33 = constants2(Stack_Stack.Stack, obj3);
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
            const tmp37 = closure_1_19(Text_Text.Text, obj6);
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
                tmp39 = closure_1_19(ConjurePlanAutomodExamplesDefault, obj7);
              }
            }
            cResult[19] = automod;
            cResult[20] = tmp39;
            let tmp38 = tmp39;
          } else {
            tmp38 = cResult[20];
          }
          if (cResult[21] === projectId) {
            if (cResult[22] === proposal.design_image) {
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
                  tmp49 = closure_1_19(ConjurePlanWidgetDefault, obj8);
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
                  const intl7 = util.intl;
                  obj10.children = intl7.string(_modDef3849["5+mG1z"]);
                  const items1 = [closure_1_19(Text_Text.Text, obj10), ];
                  const changes = proposal.changes;
                  items1[1] = changes.map((item, index) => closure_1_19(require("Text/Text").Text, { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item }, index));
                  obj9.children = items1;
                  tmp56 = constants2(Stack_Stack.Stack, obj9);
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
                  const intl8 = util.intl;
                  obj12.children = intl8.string(util.t["0hKkS+"]);
                  const items2 = [closure_1_19(Text_Text.Text, obj12), ];
                  const commands = proposal.commands;
                  items2[1] = commands.map((name, index) => {
                    const obj = { variant: "text-sm/medium", color: "text-default", children: "" + require("conjurePlanFormat").conjurePlanCommandPrefix(name) + name.name };
                    const children = [closure_1_19(require("Text/Text").Text, obj), ];
                    let tmp3Result = null;
                    if (null != name.description) {
                      tmp3Result = null;
                      if ("" !== name.description) {
                        const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
                        tmp3Result = closure_1_19(require("Text/Text").Text, obj3);
                      }
                    }
                    children[1] = tmp3Result;
                    return closure_1_20(closure_1_7, { children }, index);
                  });
                  obj11.children = items2;
                  tmp60 = constants2(Stack_Stack.Stack, obj11);
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
                const intl9 = util.intl;
                obj14.children = intl9.string(_modDef3849["2UbW6r"]);
                const items3 = [closure_1_19(Text_Text.Text, obj14), ];
                const obj15 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
                items3[1] = closure_1_19(Text_Text.Text, obj15);
                obj13.children = items3;
                tmp63 = constants2(Stack_Stack.Stack, obj13);
              }
              let tmp66 = null;
              if (mapped1.length > 0) {
                const obj16 = { direction: "vertical", spacing: 4, children: null };
                const obj17 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                const intl10 = util.intl;
                obj17.children = intl10.string(_modDef3849["7TKfpj"]);
                const items4 = [closure_1_19(Text_Text.Text, obj17), ];
                const obj18 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
                items4[1] = closure_1_19(Text_Text.Text, obj18);
                obj16.children = items4;
                tmp66 = constants2(Stack_Stack.Stack, obj16);
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
                                                          const tmp82 = closure_1_19(tmp15, obj19);
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
                                          const tmp79 = closure_1_19(tmp16, obj20);
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
                  const tmp76 = constants2(Stack, obj21);
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
                  const intl11 = util.intl;
                  obj23.text = intl11.string(_modDef3849["6S+wRM"]);
                  obj23.onPress = onApprove;
                  const items6 = [closure_1_19(components_Button_Button.Button, obj23), ];
                  const obj24 = { variant: "text-sm/normal", color: "text-muted", style: tmp6.planReplyHint, children: null };
                  const intl12 = util.intl;
                  obj24.children = intl12.string(_modDef3849.IZoqbR);
                  items6[1] = closure_1_19(Text_Text.Text, obj24);
                  obj22.children = items6;
                  tmp70 = constants2(React5, obj22);
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
              tmp46 = closure_1_19(ConjurePlanBotPreviewDefault, obj25);
            }
            cResult[24] = botExchanges;
            cResult[25] = projectId;
            cResult[26] = tmp46;
            tmp45 = tmp46;
          }
          let tmp42 = null;
          if (null != proposal.design_image) {
            const obj26 = { projectId, design: proposal.design_image };
            tmp42 = closure_1_19(closure_30, obj26);
          }
          cResult[21] = projectId;
          cResult[22] = proposal.design_image;
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
          tmp30Result = closure_1_19(ConjurePlanTypeTagsDefault, obj27);
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
    const tmpResult5 = useConjurePlanBotPreviewItems;
  }
  const tmpResult4 = conjurePlanWidget2;
  let tmp13 = null;
  if (tmpResult6.planDeclaresSurface(proposal, ConjureTypes.ConjureSupportedSurface.PROFILE_WIDGET)) {
    tmp13 = conjurePlanWidget;
  }
  cResult[2] = proposal;
  cResult[3] = conjurePlanWidget;
  cResult[4] = tmp13;
  tmp12 = tmp13;
  tmpResult6 = conjurePlanTags;
}) : (function ProposalCard(expanded) {
  ({ projectId, proposal, version, superseded } = expanded);
  if (superseded === undefined) {
    superseded = false;
  }
  let flag = expanded.expanded;
  if (flag === undefined) {
    flag = true;
  }
  const onApprove = expanded.onApprove;
  const tmp = closure_29();
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
  if (tmp3Result.planDeclaresSurface(proposal, ConjureTypes.ConjureSupportedSurface.AUTOMOD)) {
    automod = proposal.automod;
  }
  tmp3Result = conjurePlanTags;
  const conjurePlanWidget = conjurePlanWidget2.useConjurePlanWidget(projectId, proposal);
  const tmp3Result4 = conjurePlanWidget2;
  let tmp7 = null;
  if (tmp3Result5.planDeclaresSurface(proposal, ConjureTypes.ConjureSupportedSurface.PROFILE_WIDGET)) {
    tmp7 = conjurePlanWidget;
  }
  tmp3Result5 = conjurePlanTags;
  const botExchanges = useConjurePlanBotPreviewItems.useConjurePlanBotExchanges(proposal).botExchanges;
  const tmp3Result6 = useConjurePlanBotPreviewItems;
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
      tmp8Result = closure_1_19(ConjureNativeCollapsibleSection.ConjureNativeCollapsibleMeta, obj3);
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
      tmp8Result6 = closure_1_19(ConjurePlanTypeTagsDefault, obj4);
      const tmp9Result = ConjurePlanTypeTagsDefault;
    }
    items = [tmp8Result6, , , , , , , , , , , ];
    let tmp14Result = null;
    if ("" !== str3) {
      const obj5 = { direction: "vertical", spacing: 4, children: null };
      const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl13 = util.intl;
      obj6.children = intl13.string(_modDef3849.iNS4dl);
      const items1 = [closure_1_19(Text_Text.Text, obj6), ];
      const obj7 = { variant: "text-md/normal", color: "text-default", children: str3 };
      items1[1] = closure_1_19(Text_Text.Text, obj7);
      obj5.children = items1;
      tmp14Result = constants2(Stack_Stack.Stack, obj5);
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
    items[2] = closure_1_19(Text_Text.Text, obj8);
    let tmp8Result7 = null;
    if (null != automod) {
      tmp8Result7 = null;
      if (automod.examples.length > 0) {
        const obj9 = { automod };
        tmp8Result7 = closure_1_19(ConjurePlanAutomodExamplesDefault, obj9);
      }
    }
    items[3] = tmp8Result7;
    let tmp8Result8 = null;
    if (null != proposal.design_image) {
      const obj10 = { projectId, design: proposal.design_image };
      tmp8Result8 = closure_1_19(closure_30, obj10);
    }
    items[4] = tmp8Result8;
    let tmp8Result9 = null;
    if (botExchanges.length > 0) {
      const obj11 = { projectId, exchanges: botExchanges };
      tmp8Result9 = closure_1_19(ConjurePlanBotPreviewDefault, obj11);
    }
    items[5] = tmp8Result9;
    let tmp8Result10 = null;
    if (null != tmp7) {
      const obj12 = {};
      const merged = Object.assign(tmp7);
      tmp8Result10 = closure_1_19(ConjurePlanWidgetDefault, obj12);
      const tmp9Result4 = ConjurePlanWidgetDefault;
    }
    items[6] = tmp8Result10;
    let tmp14Result6 = null;
    if (proposal.changes.length > 0) {
      const obj13 = { direction: "vertical", spacing: 4, children: null };
      const obj14 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl7 = util.intl;
      obj14.children = intl7.string(_modDef3849["5+mG1z"]);
      const items2 = [closure_1_19(Text_Text.Text, obj14), ];
      const changes = proposal.changes;
      items2[1] = changes.map((item, index) => closure_1_19(require("Text/Text").Text, { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item }, index));
      obj13.children = items2;
      tmp14Result6 = constants2(Stack_Stack.Stack, obj13);
    }
    items[7] = tmp14Result6;
    let tmp14Result7 = null;
    if (proposal.commands.length > 0) {
      const obj15 = { direction: "vertical", spacing: 4, children: null };
      const obj16 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl8 = util.intl;
      obj16.children = intl8.string(util.t["0hKkS+"]);
      const items3 = [closure_1_19(Text_Text.Text, obj16), ];
      const commands = proposal.commands;
      items3[1] = commands.map((name, index) => {
        const obj = { variant: "text-sm/medium", color: "text-default", children: "" + require("conjurePlanFormat").conjurePlanCommandPrefix(name) + name.name };
        const children = [closure_1_19(require("Text/Text").Text, obj), ];
        let tmp3Result = null;
        if (null != name.description) {
          tmp3Result = null;
          if ("" !== name.description) {
            const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
            tmp3Result = closure_1_19(require("Text/Text").Text, obj3);
          }
        }
        children[1] = tmp3Result;
        return closure_1_20(closure_1_7, { children }, index);
      });
      obj15.children = items3;
      tmp14Result7 = constants2(Stack_Stack.Stack, obj15);
    }
    items[8] = tmp14Result7;
    let tmp14Result8 = null;
    if (mapped.length > 0) {
      const obj17 = { direction: "vertical", spacing: 4, children: null };
      const obj18 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl9 = util.intl;
      obj18.children = intl9.string(_modDef3849["2UbW6r"]);
      const items4 = [closure_1_19(Text_Text.Text, obj18), ];
      const obj19 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
      items4[1] = closure_1_19(Text_Text.Text, obj19);
      obj17.children = items4;
      tmp14Result8 = constants2(Stack_Stack.Stack, obj17);
    }
    items[9] = tmp14Result8;
    let tmp14Result9 = null;
    if (mapped1.length > 0) {
      const obj20 = { direction: "vertical", spacing: 4, children: null };
      const obj21 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl10 = util.intl;
      obj21.children = intl10.string(_modDef3849["7TKfpj"]);
      const items5 = [closure_1_19(Text_Text.Text, obj21), ];
      const obj22 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
      items5[1] = closure_1_19(Text_Text.Text, obj22);
      obj20.children = items5;
      tmp14Result9 = constants2(Stack_Stack.Stack, obj20);
    }
    items[10] = tmp14Result9;
    let tmp14Result10 = null;
    if (null != onApprove) {
      tmp14Result10 = null;
      if (!superseded) {
        const obj23 = { style: tmp.planActions, children: null };
        const obj24 = { text: null, variant: "primary", onPress: null };
        const intl11 = util.intl;
        obj24.text = intl11.string(_modDef3849["6S+wRM"]);
        obj24.onPress = onApprove;
        const items6 = [closure_1_19(components_Button_Button.Button, obj24), ];
        const obj25 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: null };
        const intl12 = util.intl;
        obj25.children = intl12.string(_modDef3849.IZoqbR);
        items6[1] = closure_1_19(Text_Text.Text, obj25);
        obj23.children = items6;
        tmp14Result10 = constants2(React5, obj23);
      }
    }
    const obj26 = { children: null };
    const obj27 = { direction: "vertical", spacing: 8, children: null };
    items[11] = tmp14Result10;
    obj27.children = items;
    obj2.children = constants2(Stack_Stack.Stack, obj27);
    obj26.children = closure_1_19(tmp11, obj2);
    return closure_1_19(tmp10, obj26);
  }
  const intl = util.intl;
  formatToPlainStringResult = intl.string(_modDef3849["3b6e7o"]);
  tmp10 = ConjureNativeCardSurfaceDefault;
});
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? (function IdeaCards(arg0) {
  const cResult = onPick(576).c(9);
  ({ ideas, onPick } = arg0);
  const tmp4 = closure_29();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    let intl = onPick(1126).intl;
    obj2.children = intl.string(_modDef3849["wx/o8Y"]);
    const tmp8 = closure_19(onPick(5088).Text, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === ideas) {
    if (cResult[2] === onPick) {
      if (cResult[6] === tmp4.ideaCards) {
        if (cResult[7] === tmp9) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj3 = { style: tmp4.ideaCards, children: null };
      items = [first, cResult[3]];
      obj3.children = items;
      const tmp15 = closure_20(closure_7, obj3);
      cResult[6] = tmp4.ideaCards;
      cResult[7] = cResult[3];
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
  }
  if (cResult[4] !== onPick) {
    const fn = function i(title) {
      closure_0 = title;
      const obj = {
        onPress() {
          return onPick(closure_0);
        },
        accessibilityLabel: null,
        children: null
      };
      const intl = onPick(1126).intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3849.H8G39M, { title: title.title });
      items = [closure_1_19(onPick(5088).Text, { variant: "text-md/semibold", color: "text-default", children: title.title }), ];
      let tmpResult = null;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = closure_1_19(onPick(5088).Text, obj4);
      }
      items[1] = tmpResult;
      obj.children = closure_1_20(onPick(5377).Stack, { direction: "vertical", spacing: 4, children: items });
      return closure_1_19(onPick(6181).Card, obj, title.id);
    };
    cResult[4] = onPick;
    cResult[5] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  const mapped = ideas.map(tmp10);
  cResult[1] = ideas;
  cResult[2] = onPick;
  cResult[3] = mapped;
  let obj = onPick(576);
}) : (function IdeaCards(arg0) {
  ({ ideas, onPick: require } = arg0);
  let obj = { style: closure_29().ideaCards, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  let intl = util.intl;
  obj2.children = intl.string(_modDef3849["wx/o8Y"]);
  items = [
    closure_19(Text_Text.Text, obj2),
    ideas.map((title) => {
      closure_0 = title;
      const obj = {
        onPress() {
          return _require(closure_0);
        },
        accessibilityLabel: null,
        children: null
      };
      const intl = require("util").intl;
      obj.accessibilityLabel = intl.formatToPlainString(_modDef3849.H8G39M, { title: title.title });
      items = [closure_1_19(require("Text/Text").Text, { variant: "text-md/semibold", color: "text-default", children: title.title }), ];
      let tmpResult = null;
      if ("" !== title.value) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
        tmpResult = closure_1_19(require("Text/Text").Text, obj4);
      }
      items[1] = tmpResult;
      obj.children = closure_1_20(require("Stack/Stack").Stack, { direction: "vertical", spacing: 4, children: items });
      return closure_1_19(require("Card").Card, obj, title.id);
    })
  ];
  obj.children = items;
  return closure_20(closure_7, obj);
});
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (function AttachmentPills(projectId) {
  const cResult = projectId(attachmentPill[16]).c(12);
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp2 = closure_29();
  closure_1 = tmp2;
  if (cResult[0] !== projectId) {
    const fn = function n(arg0) {
      const promise = closure_2_11(projectId, arg0);
      closure_2_11(projectId, arg0).then((result) => closure_1_1(attachmentPill[38]).openURL(result)).catch(() => {

      });
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    attachmentPill = fn;
  } else {
    attachmentPill = cResult[1];
  }
  if (cResult[2] === attachments) {
    if (cResult[3] === attachmentPill) {
      if (cResult[4] === tmp2.attachmentPill) {
        if (cResult[9] === tmp2.attachmentPills) {
          if (cResult[10] === tmp4) {
            let tmp8 = cResult[11];
          }
          return tmp8;
        }
        let obj2 = { style: tmp3, children: cResult[5] };
        const tmp11 = closure_19(closure_7, obj2);
        cResult[9] = tmp2.attachmentPills;
        cResult[10] = cResult[5];
        cResult[11] = tmp11;
        tmp8 = tmp11;
      }
    }
  }
  if (cResult[6] === attachmentPill) {
    if (cResult[7] === tmp2.attachmentPill) {
      let tmp5 = cResult[8];
    }
    const mapped = attachments.map(tmp5);
    cResult[2] = attachments;
    cResult[3] = attachmentPill;
    attachmentPill = tmp2.attachmentPill;
    cResult[4] = attachmentPill;
    cResult[5] = mapped;
  }
  const fn2 = function p(id, arg1) {
    if (null != id.id) {
      const obj = {
        style: closure_1.attachmentPill,
        onPress() {
            return attachmentPill(id.id);
          },
        accessibilityLabel: null,
        children: null
      };
      const intl = projectId(attachmentPill[18]).intl;
      const obj2 = { name: id.name };
      obj.accessibilityLabel = intl.formatToPlainString(closure_1(attachmentPill[19]).GtNukg, obj2);
      const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
      obj.children = closure_1_19(projectId(attachmentPill[20]).Text, obj3);
      let tmp12 = closure_1_19(projectId(attachmentPill[37]).Card, obj, id.id);
    } else {
      const obj4 = { style: closure_1.attachmentPill, children: null };
      const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl2 = projectId(attachmentPill[18]).intl;
      const obj6 = { name: id.name };
      obj5.children = intl2.formatToPlainString(closure_1(attachmentPill[19]).nd81jR, obj6);
      obj4.children = closure_1_19(projectId(attachmentPill[20]).Text, obj5);
      const _HermesInternal = HermesInternal;
      tmp12 = closure_1_19(closure_1_7, obj4, "" + id.name + "-" + arg1);
    }
    return tmp12;
  };
  cResult[6] = attachmentPill;
  cResult[7] = tmp2.attachmentPill;
  cResult[8] = fn2;
  tmp5 = fn2;
  let obj = projectId(attachmentPill[16]);
}) : (function AttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_29();
  closure_1 = tmp;
  items = [projectId];
  dependencyMap = noop.useCallback((arg0) => {
    const promise = closure_2_11(projectId, arg0);
    closure_2_11(projectId, arg0).then((result) => closure_1_1(dependencyMap[38]).openURL(result)).catch(() => {

    });
  }, items);
  return closure_19(closure_7, {
    style: tmp.attachmentPills,
    children: attachments.map((id, index) => {
      if (null != id.id) {
        const obj = {
          style: closure_1.attachmentPill,
          onPress() {
              return closure_2(id.id);
            },
          accessibilityLabel: null,
          children: null
        };
        const intl = projectId(1126).intl;
        const obj2 = { name: id.name };
        obj.accessibilityLabel = intl.formatToPlainString(closure_1(3849).GtNukg, obj2);
        const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
        obj.children = closure_1_19(projectId(5088).Text, obj3);
        let tmp12 = closure_1_19(projectId(6181).Card, obj, id.id);
      } else {
        const obj4 = { style: closure_1.attachmentPill, children: null };
        const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
        const intl2 = projectId(1126).intl;
        const obj6 = { name: id.name };
        obj5.children = intl2.formatToPlainString(closure_1(3849).nd81jR, obj6);
        obj4.children = closure_1_19(projectId(5088).Text, obj5);
        const _HermesInternal = HermesInternal;
        tmp12 = closure_1_19(closure_1_7, obj4, "" + id.name + "-" + index);
      }
      return tmp12;
    })
  });
});
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? (function TimelineRow(arg0) {
  const cResult = require("c").c(28);
  ({ projectId, node, inGutter, live, crestColor, epoch } = arg0);
  let num = 0;
  if (undefined !== epoch) {
    num = epoch;
  }
  const tmp6 = closure_29();
  _require = tmp6;
  if (cResult[0] !== node.attachments) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function l(id) {
        if (null != id.id) {
          const CONJURE_VIEWABLE_IMAGE_TYPES = closure_0(dependencyMap[25]).CONJURE_VIEWABLE_IMAGE_TYPES;
          if (CONJURE_VIEWABLE_IMAGE_TYPES.has(id.content_type)) {
            const obj = {};
            const merged = Object.assign(id);
            obj.id = id.id;
            items = [obj];
          }
          return [];
        }
      };
      cResult[2] = fn;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[2];
    }
    const attachments = node.attachments;
    const flatMapResult = attachments.flatMap(tmp8);
    cResult[0] = node.attachments;
    cResult[1] = flatMapResult;
  } else {
    if (cResult[3] !== node) {
      const describeNodeResult = tmp(17166).describeNode(node);
      cResult[3] = node;
      cResult[4] = describeNodeResult;
      let tmp11 = describeNodeResult;
      const tmpResult = tmp(17166);
    } else {
      tmp11 = cResult[4];
    }
    let tmp13 = !tmp5;
    if (!tmp5) {
      tmp13 = "failed" !== node.status;
    }
    let str3 = "detail";
    if (tmp5) {
      str3 = "headline";
    }
    if (cResult[5] !== node.durationMs) {
      let tmp15 = null;
      if (null != node.durationMs) {
        const obj2 = { variant: "text-xs/normal", color: "text-subtle", children: tmp(17167).describeDuration(node.durationMs) };
        tmp15 = closure_19(tmp(5088).Text, obj2);
        const tmpResult2 = tmp(17167);
      }
      cResult[5] = node.durationMs;
      cResult[6] = tmp15;
      let tmp14 = tmp15;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] === crestColor) {
      if (cResult[8] === num) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp11) {
              if (cResult[12] === tmp13) {
                if (cResult[13] === tmp17) {
                  if (cResult[14] === str3) {
                    if (cResult[15] === tmp14) {
                      let tmp18 = cResult[16];
                    }
                    if (cResult[17] === node.detail) {
                      if (cResult[18] === tmp6) {
                        let tmp22 = cResult[19];
                      }
                      if (cResult[20] === arr) {
                        if (cResult[21] === projectId) {
                          if (cResult[22] === tmp6) {
                            let tmp26 = cResult[23];
                          }
                          if (cResult[24] === tmp18) {
                            if (cResult[25] === tmp22) {
                              if (cResult[26] === tmp26) {
                                let tmp32 = cResult[27];
                              }
                              return tmp32;
                            }
                          }
                          const obj3 = { children: null };
                          items = [tmp18, tmp22, tmp26];
                          obj3.children = items;
                          const tmp35 = closure_20(closure_7, obj3);
                          cResult[24] = tmp18;
                          cResult[25] = tmp22;
                          cResult[26] = tmp26;
                          cResult[27] = tmp35;
                          tmp32 = tmp35;
                        }
                      }
                      let tmp28 = null;
                      if (null != projectId) {
                        tmp28 = null;
                        if (arr.length > 0) {
                          const obj4 = { style: tmp6.stepDetail, children: null };
                          const obj5 = { projectId, images: arr };
                          obj4.children = closure_19(ConjureNativeStepImagesDefault, obj5);
                          tmp28 = closure_19(closure_7, obj4);
                        }
                      }
                      cResult[20] = arr;
                      cResult[21] = projectId;
                      cResult[22] = tmp6;
                      cResult[23] = tmp28;
                      tmp26 = tmp28;
                    }
                    let tmp23 = null;
                    if (node.detail.length > 0) {
                      const obj6 = { style: tmp6.stepDetail, children: null };
                      const detail = node.detail;
                      obj6.children = detail.map((children, index) => {
                        let stepCommand;
                        if (children.startsWith("$ ")) {
                          stepCommand = closure_0.stepCommand;
                        }
                        return closure_2_19(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children }, index);
                      });
                      tmp23 = closure_19(closure_7, obj6);
                    }
                    cResult[17] = node.detail;
                    cResult[18] = tmp6;
                    cResult[19] = tmp23;
                    tmp22 = tmp23;
                  }
                }
              }
            }
          }
        }
      }
    }
    const obj7 = { line: tmp11, live: tmp5, settled: tmp13, failed: "failed" === node.status, presentation: str3, crestColor, inGutter: tmp4, epoch: num, trailing: tmp14 };
    const tmp21 = closure_19(ConjureNativeStatusLineDefault, obj7);
    cResult[7] = crestColor;
    cResult[8] = num;
    cResult[9] = tmp4;
    cResult[10] = tmp5;
    cResult[11] = tmp11;
    cResult[12] = tmp13;
    cResult[13] = "failed" === node.status;
    cResult[14] = str3;
    cResult[15] = tmp14;
    cResult[16] = tmp21;
    tmp18 = tmp21;
  }
  let obj = require("c");
}) : (function TimelineRow(live) {
  ({ projectId, node, inGutter } = live);
  if (inGutter === undefined) {
    inGutter = false;
  }
  let flag = live.live;
  if (flag === undefined) {
    flag = false;
  }
  ({ epoch, crestColor } = live);
  if (epoch === undefined) {
    epoch = 0;
  }
  const tmp = closure_29();
  _require = tmp;
  const attachments = node.attachments;
  const flatMapResult = attachments.flatMap((id) => {
    if (null != id.id) {
      const CONJURE_VIEWABLE_IMAGE_TYPES = closure_0(dependencyMap[25]).CONJURE_VIEWABLE_IMAGE_TYPES;
      if (CONJURE_VIEWABLE_IMAGE_TYPES.has(id.content_type)) {
        const obj = {};
        const merged = Object.assign(id);
        obj.id = id.id;
        items = [obj];
      }
      return [];
    }
  });
  let obj = { line: null, live: null, settled: null, failed: null, presentation: null, crestColor: null, inGutter: null, epoch: null, trailing: null };
  const tmp7 = ConjureNativeStatusLineDefault;
  obj.line = require("ConjureTimelineTree").describeNode(node);
  obj.live = flag;
  let tmp9 = !flag;
  if (!flag) {
    tmp9 = "failed" !== node.status;
  }
  obj.settled = tmp9;
  obj.failed = "failed" === node.status;
  let str2 = "detail";
  if (flag) {
    str2 = "headline";
  }
  obj.presentation = str2;
  obj.crestColor = crestColor;
  obj.inGutter = inGutter;
  obj.epoch = epoch;
  let tmp4Result = null;
  if (null != node.durationMs) {
    const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp8(17167).describeDuration(node.durationMs) };
    tmp4Result = closure_19(tmp8(5088).Text, obj3);
    const tmp8Result = tmp8(17167);
  }
  obj.trailing = tmp4Result;
  const children = [closure_19(tmp7, obj), , ];
  let tmp4Result3 = null;
  if (node.detail.length > 0) {
    const obj4 = { style: tmp.stepDetail, children: null };
    const detail = node.detail;
    obj4.children = detail.map((children, index) => {
      let stepCommand;
      if (children.startsWith("$ ")) {
        stepCommand = closure_0.stepCommand;
      }
      return closure_2_19(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children }, index);
    });
    tmp4Result3 = closure_19(closure_7, obj4);
  }
  children[1] = tmp4Result3;
  let tmp4Result4 = null;
  if (null != projectId) {
    tmp4Result4 = null;
    if (flatMapResult.length > 0) {
      const obj5 = { style: tmp.stepDetail, children: null };
      const obj6 = { projectId, images: flatMapResult };
      obj5.children = closure_19(ConjureNativeStepImagesDefault, obj6);
      tmp4Result4 = closure_19(closure_7, obj5);
    }
  }
  children[2] = tmp4Result4;
  return closure_20(closure_7, { children });
});
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (function TurnStatusLine(projectId) {
  const cResult = projectId(epoch[16]).c(31);
  projectId = projectId.projectId;
  ({ tree, turnActive } = projectId);
  epoch = projectId.epoch;
  const tmp4 = closure_29();
  let obj = projectId(epoch[16]);
  [tmp6, _slicedToArray] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function i() {
      return _slicedToArray((arg0) => !arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tree.steps) {
    if (cResult[2] === tree.tasks) {
      const turn = tree.turn;
      let durationMs;
      if (turn != null) {
        durationMs = turn.durationMs;
      }
      if (cResult[3] === durationMs) {
        if (cResult[4] === turnActive) {
          noop = cResult[5];
          let tmp11 = cResult[6];
        }
        if (cResult[9] !== tree.steps) {
          let someResult = tree.steps.length > 1;
          if (!someResult) {
            const steps = tree.steps;
            someResult = steps.some((detail) => detail.detail.length > 0 || detail.attachments.length > 0);
          }
          cResult[9] = tree.steps;
          cResult[10] = someResult;
          let tmp22 = someResult;
        } else {
          tmp22 = cResult[10];
        }
        let tmp25;
        if (projectId.besideAvatar) {
          tmp25 = null;
        }
        let tmp26;
        if (tmp22) {
          tmp26 = first;
        }
        if (cResult[11] === epoch) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp11) {
              if (cResult[14] === tmp24) {
                if (cResult[15] === tmp25) {
                  if (cResult[16] === tmp26) {
                    if (cResult[17] === turnActive) {
                      let tmp27 = cResult[18];
                    }
                    if (cResult[19] === tmp10) {
                      if (cResult[20] === epoch) {
                        if (cResult[21] === tmp6) {
                          if (cResult[22] === tmp22) {
                            if (cResult[23] === projectId) {
                              if (cResult[24] === tmp4) {
                                if (cResult[25] === tree.steps) {
                                  if (cResult[26] === turnActive) {
                                    let tmp31 = cResult[27];
                                  }
                                  if (cResult[28] === tmp27) {
                                    if (cResult[29] === tmp31) {
                                      let tmp35 = cResult[30];
                                    }
                                    return tmp35;
                                  }
                                  const obj2 = { children: null };
                                  items = [tmp27, tmp31];
                                  obj2.children = items;
                                  const tmp38 = closure_20(closure_7, obj2);
                                  cResult[28] = tmp27;
                                  cResult[29] = tmp31;
                                  cResult[30] = tmp38;
                                  tmp35 = tmp38;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    let tmp32 = null;
                    if (tmp6) {
                      tmp32 = null;
                      if (tmp22) {
                        const obj3 = { style: tmp4.activityDetail, children: null };
                        const steps1 = tree.steps;
                        obj3.children = steps1.map((node) => {
                          const obj = { projectId, node, live: null, epoch: null };
                          let tmp3 = turnActive;
                          if (turnActive) {
                            tmp3 = node === currentStepResult;
                          }
                          obj.live = tmp3;
                          obj.epoch = epoch;
                          return closure_2_19(closure_34, obj, node.id);
                        });
                        tmp32 = closure_19(closure_7, obj3);
                      }
                    }
                    cResult[19] = tmp10;
                    cResult[20] = epoch;
                    cResult[21] = tmp6;
                    cResult[22] = tmp22;
                    cResult[23] = projectId;
                    cResult[24] = tmp4;
                    cResult[25] = tree.steps;
                    cResult[26] = turnActive;
                    cResult[27] = tmp32;
                    tmp31 = tmp32;
                  }
                }
              }
            }
          }
        }
        const obj4 = { line: tmp11, live: turnActive, settled: !turnActive, inGutter: true, glyph: tmp25, epoch, expanded: tmp6, onToggle: tmp26 };
        const tmp30 = closure_19(turnActive(tmp2[11]), obj4);
        cResult[11] = epoch;
        cResult[12] = tmp6;
        cResult[13] = tmp11;
        cResult[14] = !turnActive;
        cResult[15] = tmp25;
        cResult[16] = tmp26;
        cResult[17] = turnActive;
        cResult[18] = tmp30;
        tmp27 = tmp30;
      }
    }
  }
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const currentStepResult = projectId(epoch[39]).currentStep(tree.steps);
  noop = currentStepResult;
  let tmp13;
  if (!turnActive) {
    const turn2 = tree.turn;
    let durationMs1;
    if (turn2 != null) {
      durationMs1 = turn2.durationMs;
    }
    tmp13 = durationMs1;
  }
  if (cResult[7] !== tree.tasks) {
    const tasks = tree.tasks;
    const found = tasks.find((task) => null != task.task.groupLabel);
    let groupLabel;
    if (found != null) {
      groupLabel = found.task.groupLabel;
    }
    cResult[7] = tree.tasks;
    cResult[8] = groupLabel;
    let describeTurnDurationResult = groupLabel;
  } else {
    describeTurnDurationResult = cResult[8];
  }
  if (null != tmp13) {
    describeTurnDurationResult = tmp(tmp2[40]).describeTurnDuration(tmp13);
    const tmpResult3 = tmp(tmp2[40]);
  } else if (null != currentStepResult) {
    describeTurnDurationResult = tmp(tmp2[39]).describeNode(currentStepResult);
    const tmpResult4 = tmp(tmp2[39]);
  } else if (describeTurnDurationResult == null) {
    const intl = tmp(tmp2[18]).intl;
    describeTurnDurationResult = intl.string(turnActive(tmp2[19]).t8skVB);
  }
  ({ steps: tmp3[1], tasks: tmp3[2], turn: turn3 } = tree);
  let durationMs2;
  if (turn3 != null) {
    durationMs2 = turn3.durationMs;
  }
  cResult[3] = durationMs2;
  cResult[4] = turnActive;
  cResult[5] = currentStepResult;
  cResult[6] = describeTurnDurationResult;
  tmp11 = describeTurnDurationResult;
  const tmpResult = projectId(epoch[39]);
}) : (function TurnStatusLine(epoch) {
  ({ projectId: require, tree, turnActive } = epoch);
  epoch = epoch.epoch;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_29();
  [tmp3, c3] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const currentStepResult = require("ConjureTimelineTree").currentStep(tree.steps);
  noop = currentStepResult;
  let tmp8;
  if (!turnActive) {
    const turn = tree.turn;
    let durationMs;
    if (turn != null) {
      durationMs = turn.durationMs;
    }
    tmp8 = durationMs;
  }
  const tasks = tree.tasks;
  const found = tasks.find((task) => null != task.task.groupLabel);
  let groupLabel;
  if (found != null) {
    groupLabel = found.task.groupLabel;
  }
  if (null != tmp8) {
    groupLabel = require("ConjureDuration").describeTurnDuration(tmp8);
    const tmp5Result = require("ConjureDuration");
  } else if (null != currentStepResult) {
    groupLabel = require("ConjureTimelineTree").describeNode(currentStepResult);
    const tmp5Result2 = require("ConjureTimelineTree");
  } else if (groupLabel == null) {
    const intl = require("util").intl;
    groupLabel = intl.string(turnActive(tmp6[19]).t8skVB);
  }
  let someResult = tree.steps.length > 1;
  if (!someResult) {
    const steps = tree.steps;
    someResult = steps.some((detail) => detail.detail.length > 0 || detail.attachments.length > 0);
  }
  const obj2 = { line: groupLabel, live: turnActive, settled: !turnActive, inGutter: true, glyph: null, epoch: null, expanded: null, onToggle: null };
  let tmp19;
  let obj = require("ConjureTimelineTree");
  if (epoch.besideAvatar) {
    tmp19 = null;
  }
  obj2.glyph = tmp19;
  obj2.epoch = epoch;
  obj2.expanded = tmp3;
  let tmp20;
  if (someResult) {
    tmp20 = callback;
  }
  obj2.onToggle = tmp20;
  const children = [closure_19(turnActive(epoch[11]), obj2), ];
  let tmp17Result = null;
  if (tmp3) {
    tmp17Result = null;
    if (someResult) {
      const obj3 = { style: tmp.activityDetail, children: null };
      const steps1 = tree.steps;
      obj3.children = steps1.map((node) => {
        const obj = { projectId, node, live: null, epoch: null };
        let tmp3 = turnActive;
        if (turnActive) {
          tmp3 = node === c4;
        }
        obj.live = tmp3;
        obj.epoch = epoch;
        return closure_2_19(closure_34, obj, node.id);
      });
      tmp17Result = closure_19(closure_7, obj3);
    }
  }
  children[1] = tmp17Result;
  return closure_20(closure_7, { children });
});
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (function LaneStatusLine(projectId) {
  let obj = projectId;
  const cResult = projectId(epoch[16]).c(33);
  projectId = projectId.projectId;
  ({ lane, mark } = projectId);
  ({ turnActive, epoch } = projectId);
  const tmp3 = closure_29();
  const obj2 = projectId(epoch[16]);
  [tmp5, _slicedToArray] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function i() {
      return _slicedToArray((arg0) => !arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (turnActive) {
    turnActive = tmp7;
  }
  if (cResult[1] === "running" === lane.task.status) {
    if (cResult[2] === lane.steps) {
      if (cResult[3] === lane.task) {
        if (cResult[4] === turnActive) {
          noop = tmp9;
          let tmp18 = !turnActive;
          if (!turnActive) {
            tmp18 = "failed" !== lane.task.status;
          }
          if (cResult[8] !== mark.Illocon) {
            const tmp21 = closure_19(mark.Illocon, { size: 16, accessible: false });
            cResult[8] = mark.Illocon;
            cResult[9] = tmp21;
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[9];
          }
          let tmp22;
          if (cResult[5]) {
            tmp22 = first;
          }
          if (cResult[10] === epoch) {
            if (cResult[11] === tmp5) {
              if (cResult[12] === turnActive) {
                if (cResult[13] === tmp10) {
                  if (cResult[14] === mark.tint) {
                    if (cResult[15] === tmp18) {
                      if (cResult[16] === tmp23) {
                        if (cResult[17] === tmp19) {
                          if (cResult[18] === tmp22) {
                            let tmp24 = cResult[19];
                          }
                          if (cResult[20] === epoch) {
                            if (cResult[21] === tmp5) {
                              if (cResult[22] === tmp8) {
                                if (cResult[23] === lane.steps) {
                                  if (cResult[24] === lane.task.detail) {
                                    if (cResult[25] === tmp9) {
                                      if (cResult[26] === mark.tint) {
                                        if (cResult[27] === projectId) {
                                          if (cResult[28] === tmp3) {
                                            let tmp28 = cResult[29];
                                          }
                                          if (cResult[30] === tmp24) {
                                            if (cResult[31] === tmp28) {
                                              let tmp32 = cResult[32];
                                            }
                                            return tmp32;
                                          }
                                          const obj3 = { children: null };
                                          items = [tmp24, tmp28];
                                          obj3.children = items;
                                          const tmp35 = closure_20(closure_7, obj3);
                                          cResult[30] = tmp24;
                                          cResult[31] = tmp28;
                                          cResult[32] = tmp35;
                                          tmp32 = tmp35;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          let tmp29 = null;
                          if (tmp5) {
                            tmp29 = null;
                            if (tmp8) {
                              const obj4 = { style: tmp3.activityDetail, children: null };
                              const detail = lane.task.detail;
                              const items1 = [detail.map((children, index) => closure_1_19(projectId(epoch[20]).Text, { variant: "text-xs/normal", color: "text-feedback-critical", children }, index)), ];
                              const steps = lane.steps;
                              items1[1] = steps.map((node) => closure_2_19(closure_34, { projectId, node, live: node === currentStepResult, crestColor: mark.tint, epoch }, node.id));
                              obj4.children = items1;
                              tmp29 = closure_20(closure_7, obj4);
                            }
                          }
                          cResult[20] = epoch;
                          cResult[21] = tmp5;
                          cResult[22] = tmp8;
                          cResult[23] = lane.steps;
                          cResult[24] = lane.task.detail;
                          cResult[25] = tmp9;
                          cResult[26] = mark.tint;
                          cResult[27] = projectId;
                          cResult[28] = tmp3;
                          cResult[29] = tmp29;
                          tmp28 = tmp29;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj5 = { line: cResult[7], live: turnActive, settled: tmp18, failed: "failed" === lane.task.status, glyph: tmp19, crestColor: mark.tint, inGutter: true, epoch, expanded: tmp5, onToggle: tmp22 };
          const tmp27 = closure_19(mark(epoch[11]), obj5);
          cResult[10] = epoch;
          cResult[11] = tmp5;
          cResult[12] = turnActive;
          cResult[13] = cResult[7];
          cResult[14] = mark.tint;
          cResult[15] = tmp18;
          cResult[16] = "failed" === lane.task.status;
          cResult[17] = tmp19;
          cResult[18] = tmp22;
          cResult[19] = tmp27;
          tmp24 = tmp27;
        }
      }
    }
  }
  let currentStepResult;
  if (turnActive) {
    currentStepResult = obj(epoch[39]).currentStep(lane.steps);
    const objResult = obj(epoch[39]);
  }
  noop = currentStepResult;
  const tmp12 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" !== lane.task.status) {
    const describeTaskOutcomeResult = obj(epoch[42]).describeTaskOutcome(lane.task);
    cResult[1] = tmp7;
    cResult[2] = lane.steps;
    cResult[3] = lane.task;
    cResult[4] = turnActive;
    cResult[5] = tmp12;
    cResult[6] = currentStepResult;
    cResult[7] = describeTaskOutcomeResult;
    const objResult3 = obj(epoch[42]);
  }
  if (null != currentStepResult) {
    obj = obj(epoch[39]);
    obj.describeNode(currentStepResult);
  } else {
    obj(epoch[42]).taskTitle(lane.task);
    const objResult4 = obj(epoch[42]);
  }
  const tmp4 = _slicedToArray(noop.useState(false), 2);
}) : (function LaneStatusLine(arg0) {
  ({ projectId: require, lane, mark } = arg0);
  ({ turnActive, epoch } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_29();
  [tmp3, c3] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
  if (turnActive) {
    turnActive = tmp5;
  }
  let currentStepResult;
  if (turnActive) {
    currentStepResult = require("ConjureTimelineTree").currentStep(lane.steps);
    const obj = require("ConjureTimelineTree");
  }
  noop = currentStepResult;
  const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
  if ("running" === lane.task.status) {
    if (null != currentStepResult) {
      let describeNodeResult = require("ConjureTimelineTree").describeNode(currentStepResult);
      const obj4 = require("ConjureTimelineTree");
    } else {
      describeNodeResult = require("ConjureTaskOutcome").taskTitle(lane.task);
      const obj3 = require("ConjureTaskOutcome");
    }
  } else {
    const obj2 = require("ConjureTaskOutcome");
    const obj5 = { line: require("ConjureTaskOutcome").describeTaskOutcome(lane.task), live: turnActive, settled: null, failed: null, glyph: null, crestColor: null, inGutter: true, epoch: null, expanded: null, onToggle: null };
    let tmp26 = !turnActive;
    const describeTaskOutcomeResult = require("ConjureTaskOutcome").describeTaskOutcome(lane.task);
    if (!turnActive) {
      tmp26 = "failed" !== lane.task.status;
    }
    obj5.settled = tmp26;
    obj5.failed = "failed" === lane.task.status;
    obj5.glyph = closure_19(mark.Illocon, { size: 16, accessible: false });
    obj5.crestColor = mark.tint;
    obj5.epoch = epoch;
    obj5.expanded = tmp3;
    let tmp27;
    if (tmp9) {
      tmp27 = callback;
    }
    obj5.onToggle = tmp27;
    items = [closure_19(mark(epoch[11]), obj5), ];
    let tmp21Result = null;
    if (tmp3) {
      tmp21Result = null;
      if (tmp9) {
        const obj6 = { style: tmp.activityDetail, children: null };
        const detail = lane.task.detail;
        const items1 = [detail.map((children, index) => closure_1_19(projectId(epoch[20]).Text, { variant: "text-xs/normal", color: "text-feedback-critical", children }, index)), ];
        const steps = lane.steps;
        items1[1] = steps.map((node) => closure_2_19(closure_34, { projectId, node, live: node === c4, crestColor: mark.tint, epoch }, node.id));
        obj6.children = items1;
        tmp21Result = closure_20(closure_7, obj6);
      }
    }
    const obj7 = { children: null };
    items[1] = tmp21Result;
    obj7.children = items;
    return closure_20(closure_7, obj7);
  }
  const tmp2 = _slicedToArray(noop.useState(false), 2);
});
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityBox(projectId) {
  const cResult = projectId(length[16]).c(14);
  projectId = projectId.projectId;
  ({ tree, turnActive } = projectId);
  const besideAvatar = projectId.besideAvatar;
  let activityBox = closure_29();
  let num = 0;
  if (0 === tree.steps.length) {
    if (num === tree.tasks.length) {
      return null;
    }
  }
  if (cResult[0] === (undefined !== besideAvatar && besideAvatar)) {
    if (cResult[1] === length) {
      if (cResult[2] === projectId) {
        if (cResult[3] === activityBox.activityBox) {
          if (cResult[4] === tree) {
            if (cResult[5] === turnActive) {
              return cResult[6];
            }
          }
        }
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f(taskId) {
      return taskId.taskId;
    };
    cResult[7] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[7];
  }
  let obj = projectId(length[16]);
  const tasks = tree.tasks;
  closure_3 = projectId(tree.tasks.length[43]).subagentIllocons(tasks.map(tmp5));
  if (cResult[8] === (undefined !== besideAvatar && besideAvatar)) {
    if (cResult[9] === length) {
      if (cResult[10] === projectId) {
        if (cResult[11] === tree) {
          if (cResult[12] === turnActive) {
            let tmp6 = cResult[13];
          }
          let obj2 = { style: activityBox.activityBox, children: null };
          items = [tmp6, ];
          const tasks1 = tree.tasks;
          items[1] = tasks1.map((task) => {
            let familiarMarkResult;
            if (null != task.task.helperMark) {
              familiarMarkResult = ConjureSubagentMark.familiarMark(task.task.helperMark);
            }
            if (familiarMarkResult == null) {
              familiarMarkResult = closure_3.get(task.taskId);
            }
            let tmp5 = null;
            if (null != familiarMarkResult) {
              const obj2 = { projectId, lane: task, mark: familiarMarkResult, turnActive, epoch: length };
              tmp5 = closure_2_19(closure_36, obj2, task.taskId);
            }
            return tmp5;
          });
          obj2.children = items;
          const tmp10 = closure_20(closure_7, obj2);
          cResult[num] = tmp4;
          cResult[1] = length;
          cResult[2] = projectId;
          activityBox = activityBox.activityBox;
          cResult[3] = activityBox;
          cResult[4] = tree;
          cResult[5] = turnActive;
          num = 6;
          cResult[6] = tmp10;
        }
      }
    }
  }
  const tmp7 = closure_19(closure_35, { projectId, tree, turnActive, epoch: tree.tasks.length, besideAvatar: undefined !== besideAvatar && besideAvatar });
  cResult[8] = undefined !== besideAvatar && besideAvatar;
  cResult[9] = tree.tasks.length;
  cResult[10] = projectId;
  cResult[11] = tree;
  cResult[12] = turnActive;
  cResult[13] = tmp7;
  tmp6 = tmp7;
  const tmpResult = projectId(tree.tasks.length[43]);
}) : (function ActivityBox(projectId) {
  projectId = projectId.projectId;
  ({ tree, turnActive } = projectId);
  let flag = projectId.besideAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let length;
  closure_3 = undefined;
  if (0 === tree.steps.length) {
    if (0 === tree.tasks.length) {
      return null;
    }
  }
  length = tree.tasks.length;
  const tmp = closure_29();
  const tasks = tree.tasks;
  closure_3 = projectId(length[43]).subagentIllocons(tasks.map((taskId) => taskId.taskId));
  let obj2 = { style: tmp.activityBox, children: null };
  items = [closure_19(closure_35, { projectId, tree, turnActive, epoch: length, besideAvatar: flag }), ];
  const tasks1 = tree.tasks;
  items[1] = tasks1.map((task) => {
    let familiarMarkResult;
    if (null != task.task.helperMark) {
      familiarMarkResult = ConjureSubagentMark.familiarMark(task.task.helperMark);
    }
    if (familiarMarkResult == null) {
      familiarMarkResult = closure_3.get(task.taskId);
    }
    let tmp5 = null;
    if (null != familiarMarkResult) {
      const obj2 = { projectId, lane: task, mark: familiarMarkResult, turnActive, epoch: length };
      tmp5 = closure_2_19(closure_36, obj2, task.taskId);
    }
    return tmp5;
  });
  obj2.children = items;
  return closure_20(closure_7, obj2);
});
ReactCompilerGating = fn(558);
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? (function TranscriptFade(children) {
  const cResult = c.c(15);
  children = children.children;
  const tmp3 = closure_29();
  if (obj2.isIOS()) {
    ({ transcript, transcript: transcript2 } = tmp3);
    if (cResult[0] !== tmp3.maskSolid) {
      const obj3 = { style: tmp3.maskSolid };
      const tmp7 = closure_1_19(React5, obj3);
      cResult[0] = tmp3.maskSolid;
      cResult[1] = tmp7;
      let tmp4 = tmp7;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== tmp3.maskFade) {
      const obj4 = { style: tmp3.maskFade, colors: items, locations, start, end };
      const tmp15 = closure_1_19(LinearGradientDefault, obj4);
      cResult[2] = tmp3.maskFade;
      cResult[3] = tmp15;
      let tmp8 = tmp15;
    } else {
      tmp8 = cResult[3];
    }
    const _Math = Math;
    const bound = Math.max(0, children.clearance - c24);
    if (cResult[4] !== bound) {
      const obj5 = { style: null };
      const obj6 = { height: bound };
      obj5.style = obj6;
      const tmp22 = closure_1_19(React5, obj5);
      cResult[4] = bound;
      cResult[5] = tmp22;
      let tmp19 = tmp22;
    } else {
      tmp19 = cResult[5];
    }
    if (cResult[6] === tmp3.transcript) {
      if (cResult[7] === tmp4) {
        if (cResult[8] === tmp8) {
          if (cResult[9] === tmp19) {
            let tmp23 = cResult[10];
          }
          if (cResult[11] === children) {
            if (cResult[12] === tmp3.transcript) {
              if (cResult[13] === tmp23) {
                let tmp27 = cResult[14];
              }
              return tmp27;
            }
          }
          const obj7 = { style: transcript, maskElement: tmp23, children };
          const tmp30 = closure_1_19(_modDef6242, obj7);
          cResult[11] = children;
          cResult[12] = tmp3.transcript;
          cResult[13] = tmp23;
          cResult[14] = tmp30;
          tmp27 = tmp30;
        }
      }
    }
    const obj8 = { style: transcript2, children: null };
    items = [tmp4, tmp8, tmp19];
    obj8.children = items;
    const tmp26 = constants2(React5, obj8);
    cResult[6] = tmp3.transcript;
    cResult[7] = tmp4;
    cResult[8] = tmp8;
    cResult[9] = tmp19;
    cResult[10] = tmp26;
    tmp23 = tmp26;
  } else {
    return children;
  }
  obj2 = PlatformUtils;
}) : (function TranscriptFade(children) {
  children = children.children;
  const tmp = closure_29();
  let tmp3 = children;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: null, children: null };
    const obj3 = { style: tmp.transcript, children: null };
    const obj4 = { style: tmp.maskSolid };
    items = [closure_1_19(React5, obj4), , ];
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = closure_1_19(LinearGradientDefault, obj5);
    const obj6 = { style: null };
    const obj7 = { height: null };
    const _Math = Math;
    obj7.height = Math.max(0, children.clearance - c24);
    obj6.style = obj7;
    items[2] = closure_1_19(React5, obj6);
    obj3.children = items;
    obj2.maskElement = constants2(React5, obj3);
    obj2.children = children;
    tmp3 = closure_1_19(_modDef6242, obj2);
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled() ? (function RestoreProposalCard(arg0) {
  const cResult = c.c(15);
  ({ proposal, onRestore } = arg0);
  if (cResult[0] !== proposal.authored_at) {
    const formatAuthoredAtResult = ConjureHistoryFormat.formatAuthoredAt(proposal.authored_at);
    cResult[0] = proposal.authored_at;
    cResult[1] = formatAuthoredAtResult;
    let tmp4 = formatAuthoredAtResult;
    const tmpResult = ConjureHistoryFormat;
  } else {
    tmp4 = cResult[1];
  }
  const relative = tmp4.relative;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl = util.intl;
    obj2.children = intl.string(_modDef3849["t+b0rz"]);
    const tmp9 = closure_1_19(Text_Text.Text, obj2);
    cResult[2] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== proposal.subject) {
    const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
    const tmp12 = closure_1_19(Text_Text.Text, obj3);
    cResult[3] = proposal.subject;
    cResult[4] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== relative) {
    let tmp14 = null;
    if (null != relative) {
      const obj4 = { variant: "text-sm/normal", color: "text-muted", children: relative };
      tmp14 = closure_1_19(Text_Text.Text, obj4);
    }
    cResult[5] = relative;
    cResult[6] = tmp14;
    let tmp13 = tmp14;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] === tmp10) {
    if (cResult[8] === tmp13) {
      let tmp16 = cResult[9];
    }
    if (cResult[10] !== onRestore) {
      let tmp19 = null;
      if (null != onRestore) {
        const obj5 = { text: null, variant: "secondary", onPress: null };
        const intl2 = util.intl;
        obj5.text = intl2.string(_modDef3849.H8Jfhu);
        obj5.onPress = onRestore;
        tmp19 = closure_1_19(components_Button_Button.Button, obj5);
      }
      cResult[10] = onRestore;
      cResult[11] = tmp19;
      let tmp18 = tmp19;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] === tmp16) {
      if (cResult[13] === tmp18) {
        let tmp22 = cResult[14];
      }
      return tmp22;
    }
    const obj6 = { children: null };
    const obj7 = { direction: "vertical", spacing: 8, children: null };
    items = [tmp6, tmp16, tmp18];
    obj7.children = items;
    obj6.children = constants2(Stack_Stack.Stack, obj7);
    const tmp27 = closure_1_19(ConjureNativeCardSurfaceDefault, obj6);
    cResult[12] = tmp16;
    cResult[13] = tmp18;
    cResult[14] = tmp27;
    tmp22 = tmp27;
  }
  const obj8 = { direction: "vertical", spacing: 4, children: null };
  const items1 = [tmp10, tmp13];
  obj8.children = items1;
  const tmp17 = constants2(Stack_Stack.Stack, obj8);
  cResult[7] = tmp10;
  cResult[8] = tmp13;
  cResult[9] = tmp17;
  tmp16 = tmp17;
}) : (function RestoreProposalCard(arg0) {
  ({ proposal, onRestore } = arg0);
  const relative = ConjureHistoryFormat.formatAuthoredAt(proposal.authored_at).relative;
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3849["t+b0rz"]);
  items = [closure_1_19(Text_Text.Text, obj2), , ];
  const items1 = [closure_1_19(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: proposal.subject }), ];
  let tmp3Result = null;
  if (null != relative) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: relative };
    tmp3Result = closure_1_19(Text_Text.Text, obj4);
  }
  items1[1] = tmp3Result;
  items[1] = constants2(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items1 });
  let tmp3Result2 = null;
  if (null != onRestore) {
    const obj5 = { text: null, variant: "secondary", onPress: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(_modDef3849.H8Jfhu);
    obj5.onPress = onRestore;
    tmp3Result2 = closure_1_19(components_Button_Button.Button, obj5);
  }
  const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
  const tmp5 = ConjureNativeCardSurfaceDefault;
  items[2] = tmp3Result2;
  return closure_1_19(tmp5, { children: constants2(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }) });
});
ReactCompilerGating = fn(558);
let closure_40 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRow(projectId) {
  const cResult = projectId(groupStart[16]).c(243);
  projectId = projectId.projectId;
  const message = projectId.message;
  groupStart = projectId.groupStart;
  ({ isNewest, hostsReminder, reminder, checklistSuperseded } = projectId);
  ({ checklistExpanded, secretRequestStatus, onToggleChecklist } = projectId);
  ({ planVersion, planSuperseded } = projectId);
  ({ planExpanded, onTogglePlan } = projectId);
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onApprovePlan, onPickIdea, onAskForIdeas } = projectId);
  ({ onAnswerClarification, onDismissClarification } = projectId);
  const onRestoreVersion = projectId.onRestoreVersion;
  ({ first, clarificationDismissed } = projectId);
  const tmp4 = closure_29();
  closure_12 = tmp4;
  if (cResult[0] !== message) {
    const tmp7 = turnSettled(message);
    cResult[0] = message;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === message.steps) {
    if (cResult[3] === tmp8) {
      let tmp9 = cResult[4];
    }
    closure_13 = tmp9;
    if (cResult[5] !== message) {
      const tmp13 = turnSettled(message);
      cResult[5] = message;
      cResult[6] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === message.steps) {
      if (cResult[10] !== message.steps) {
        const latestTodosResult = tmp(tmp2[39]).latestTodos(message.steps);
        cResult[10] = message.steps;
        cResult[11] = latestTodosResult;
        const tmpResult = tmp(tmp2[39]);
      }
      if (cResult[12] !== tmp9.tasks) {
        const runningTodoAgentsResult = tmp(tmp2[48]).runningTodoAgents(tmp9.tasks);
        cResult[12] = tmp9.tasks;
        cResult[13] = runningTodoAgentsResult;
        const tmpResult6 = tmp(tmp2[48]);
      }
      if (cResult[14] === checklistSuperseded) {
        if (cResult[15] === message.render_id) {
          if (cResult[18] === message.render_id) {
            if (cResult[19] === onTogglePlan) {
              if (cResult[22] === onJumpToReplied) {
                if (cResult[25] !== message.content) {
                  const result = tmp(tmp2[49]).parseConjureDesignRemark(message.content);
                  cResult[25] = message.content;
                  cResult[26] = result;
                  let tmp24 = result;
                  const tmpResult7 = tmp(tmp2[49]);
                } else {
                  tmp24 = cResult[26];
                }
                let body;
                if (tmp24 != null) {
                  body = tmp24.body;
                }
                if (body == null) {
                  body = message.content;
                }
                if (cResult[27] !== body) {
                  const trimmed = body.trim();
                  cResult[27] = body;
                  cResult[28] = trimmed;
                  let tmp28 = trimmed;
                } else {
                  tmp28 = cResult[28];
                }
                content = tmp28;
                let attachments = null;
                if (null != message.attachments) {
                  attachments = null;
                  if (message.attachments.length > 0) {
                    attachments = message.attachments;
                  }
                }
                let rowGroupStart = groupStart;
                if (groupStart) {
                  rowGroupStart = !first;
                }
                if (rowGroupStart) {
                  rowGroupStart = tmp4.rowGroupStart;
                }
                if (cResult[29] === tmp4.row) {
                  if (cResult[30] === rowGroupStart) {
                    let tmp31 = cResult[31];
                  }
                  let user_id;
                  if ("user" === message.role) {
                    user_id = message.user_id;
                  }
                  const _Symbol = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    items = [onJumpToReplied];
                    function be() {
                      const currentUser = onJumpToReplied.getCurrentUser();
                      id = undefined;
                      if (currentUser != null) {
                        id = currentUser.id;
                      }
                      return id;
                    }
                    cResult[32] = items;
                    cResult[33] = be;
                    let tmp35 = be;
                    let tmp34 = items;
                  } else {
                    tmp34 = cResult[32];
                    tmp35 = cResult[33];
                  }
                  const stateFromStores = tmp(tmp2[50]).useStateFromStores(tmp34, tmp35);
                  if (cResult[34] === message) {
                    if (cResult[35] === onRestoreVersion) {
                      let tmp38 = cResult[36];
                    }
                    turnSettled = tmp38;
                    const tmp41 = message(tmp2[52])(projectId, message);
                    closure_19 = tmp41;
                    if (cResult[37] === user_id) {
                      if (cResult[38] === tmp28) {
                        if (cResult[39] === stateFromStores) {
                          if (cResult[40] === message) {
                            if (cResult[41] === onRestoreVersion) {
                              if (cResult[42] === projectId) {
                                if (cResult[43] === tmp41) {
                                  if ("" === tmp28) {
                                    if (null == user_id) {
                                      if (cResult[46] === onAskForIdeas) {
                                        if (cResult[47] === projectId) {
                                          if (cResult[48] === tmp4.avatar) {
                                            if (cResult[49] === tmp4.avatarSpoken) {
                                              if (cResult[50] === tmp4.header) {
                                                if (cResult[51] === tmp4.reminderSeparated) {
                                                  if (cResult[52] === tmp4.reminderTip) {
                                                    if (cResult[53] === tmp4.spoken) {
                                                      let tmp45 = cResult[54];
                                                    }
                                                    if (cResult[55] === hostsReminder) {
                                                      if (cResult[56] === reminder) {
                                                        if (cResult[57] === tmp45) {
                                                          if (cResult[58] === tmp4.reminderSlot) {
                                                            let tmp46 = cResult[59];
                                                          }
                                                          if ("user" === message.role) {
                                                            if ("" === tmp28) {
                                                              if (null == tmp24) {
                                                                if (null == attachments) {
                                                                  return null;
                                                                }
                                                              }
                                                            }
                                                            if (cResult[60] !== message.agentReaction) {
                                                              const conjureAgentReactionLabel = tmp(tmp2[61]).getConjureAgentReactionLabel(message.agentReaction);
                                                              cResult[60] = message.agentReaction;
                                                              cResult[61] = conjureAgentReactionLabel;
                                                              class Re {
                                                                constructor() {
                                                                  obj = closure_0(closure_2[53]);
                                                                  obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                  obj3 = closure_0(closure_2[54]);
                                                                  obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                  fn = undefined;
                                                                  if (null != closure_18) {
                                                                    tmp = onRestoreVersion;
                                                                    if (null != onRestoreVersion) {
                                                                      fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                    }
                                                                  }
                                                                  obj1.onRestoreVersion = fn;
                                                                  fn2 = undefined;
                                                                  if (null != closure_19) {
                                                                    fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                  }
                                                                  obj1.onViewTrace = fn2;
                                                                  return obj.showConjureMessageActions(obj1);
                                                                }
                                                              }
                                                              const tmpResult9 = tmp(tmp2[61]);
                                                            }
                                                            if (cResult[62] === groupStart) {
                                                              if (cResult[63] === message.user_id) {
                                                                if (cResult[64] === tmp4.avatar) {
                                                                  let tmp90 = cResult[65];
                                                                }
                                                                if (cResult[66] === groupStart) {
                                                                  if (cResult[67] === message.created_at) {
                                                                    if (cResult[68] === message.user_id) {
                                                                      if (cResult[69] === tmp4.header) {
                                                                        let tmp94 = cResult[70];
                                                                      }
                                                                      if (cResult[71] === tmp28) {
                                                                        if (cResult[72] === groupStart) {
                                                                          if (cResult[73] === tmp24) {
                                                                            let tmp98 = cResult[74];
                                                                          }
                                                                          if (cResult[75] === attachments) {
                                                                            if (cResult[76] === projectId) {
                                                                              let tmp104 = cResult[77];
                                                                            }
                                                                            if (cResult[78] === message.agentReaction) {
                                                                              if (cResult[79] === tmp88) {
                                                                                if (cResult[80] === tmp4.agentReaction) {
                                                                                  if (cResult[81] === tmp4.agentReactionEmoji) {
                                                                                    let tmp108 = cResult[82];
                                                                                  }
                                                                                  if (cResult[83] === tmp44) {
                                                                                    if (cResult[84] === tmp31) {
                                                                                      if (cResult[85] === tmp90) {
                                                                                        if (cResult[86] === tmp94) {
                                                                                          if (cResult[87] === tmp98) {
                                                                                            if (cResult[88] === tmp104) {
                                                                                              if (cResult[89] === tmp108) {
                                                                                                let tmp112 = cResult[90];
                                                                                              }
                                                                                              return tmp112;
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  let obj2 = { style: tmp31, onLongPress: null, accessible: false, children: null };
                                                                                  class Re {
                                                                                    constructor() {
                                                                                      obj = closure_0(closure_2[53]);
                                                                                      obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                                      obj3 = closure_0(closure_2[54]);
                                                                                      obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                                      fn = undefined;
                                                                                      if (null != closure_18) {
                                                                                        tmp = onRestoreVersion;
                                                                                        if (null != onRestoreVersion) {
                                                                                          fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                                        }
                                                                                      }
                                                                                      obj1.onRestoreVersion = fn;
                                                                                      fn2 = undefined;
                                                                                      if (null != closure_19) {
                                                                                        fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                                      }
                                                                                      obj1.onViewTrace = fn2;
                                                                                      return obj.showConjureMessageActions(obj1);
                                                                                    }
                                                                                  }
                                                                                  let items1 = [tmp90, tmp94, tmp98, tmp104, tmp108];
                                                                                  obj2.children = items1;
                                                                                  const tmp115 = closure_20(onTogglePlan, obj2);
                                                                                  cResult[83] = tmp44;
                                                                                  cResult[84] = tmp31;
                                                                                  cResult[85] = tmp90;
                                                                                  cResult[86] = tmp94;
                                                                                  cResult[87] = tmp98;
                                                                                  cResult[88] = tmp104;
                                                                                  cResult[89] = tmp108;
                                                                                  cResult[90] = tmp115;
                                                                                  tmp112 = tmp115;
                                                                                }
                                                                              }
                                                                            }
                                                                            let tmp109 = null;
                                                                            if (null != message.agentReaction) {
                                                                              tmp109 = null;
                                                                              if (null != tmp88) {
                                                                                let obj4 = { style: tmp4.agentReaction, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp88, children: null };
                                                                                let obj5 = { name: null, fastImageStyle: null };
                                                                                class Re {
                                                                                  constructor() {
                                                                                    obj = closure_0(closure_2[53]);
                                                                                    obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                                    obj3 = closure_0(closure_2[54]);
                                                                                    obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                                    fn = undefined;
                                                                                    if (null != closure_18) {
                                                                                      tmp = onRestoreVersion;
                                                                                      if (null != onRestoreVersion) {
                                                                                        fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                                      }
                                                                                    }
                                                                                    obj1.onRestoreVersion = fn;
                                                                                    fn2 = undefined;
                                                                                    if (null != closure_19) {
                                                                                      fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                                    }
                                                                                    obj1.onViewTrace = fn2;
                                                                                    return obj.showConjureMessageActions(obj1);
                                                                                  }
                                                                                }
                                                                                obj5.fastImageStyle = tmp4.agentReactionEmoji;
                                                                                obj4.children = closure_19(tmp40(tmp2[63]), obj5);
                                                                                tmp109 = closure_19(replied, obj4);
                                                                              }
                                                                            }
                                                                            cResult[78] = message.agentReaction;
                                                                            class Re {
                                                                              constructor() {
                                                                                obj = closure_0(closure_2[53]);
                                                                                obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                                obj3 = closure_0(closure_2[54]);
                                                                                obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                                fn = undefined;
                                                                                if (null != closure_18) {
                                                                                  tmp = onRestoreVersion;
                                                                                  if (null != onRestoreVersion) {
                                                                                    fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                                  }
                                                                                }
                                                                                obj1.onRestoreVersion = fn;
                                                                                fn2 = undefined;
                                                                                if (null != closure_19) {
                                                                                  fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                                }
                                                                                obj1.onViewTrace = fn2;
                                                                                return obj.showConjureMessageActions(obj1);
                                                                              }
                                                                            }
                                                                            cResult[79] = tmp88;
                                                                            cResult[80] = tmp4.agentReaction;
                                                                            cResult[81] = tmp4.agentReactionEmoji;
                                                                            cResult[82] = tmp109;
                                                                            tmp108 = tmp109;
                                                                          }
                                                                          let tmp105 = null;
                                                                          if (null != attachments) {
                                                                            let obj6 = { projectId, attachments };
                                                                            tmp105 = closure_19(closure_33, obj6);
                                                                          }
                                                                          cResult[75] = attachments;
                                                                          class Re {
                                                                            constructor() {
                                                                              obj = closure_0(closure_2[53]);
                                                                              obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                              obj3 = closure_0(closure_2[54]);
                                                                              obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                              fn = undefined;
                                                                              if (null != closure_18) {
                                                                                tmp = onRestoreVersion;
                                                                                if (null != onRestoreVersion) {
                                                                                  fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                                }
                                                                              }
                                                                              obj1.onRestoreVersion = fn;
                                                                              fn2 = undefined;
                                                                              if (null != closure_19) {
                                                                                fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                              }
                                                                              obj1.onViewTrace = fn2;
                                                                              return obj.showConjureMessageActions(obj1);
                                                                            }
                                                                          }
                                                                          cResult[76] = projectId;
                                                                          cResult[77] = tmp105;
                                                                          tmp104 = tmp105;
                                                                        }
                                                                      }
                                                                      if (tmp43) {
                                                                        let combined;
                                                                        if (!groupStart) {
                                                                          const intl2 = tmp(tmp2[18]).intl;
                                                                          const _HermesInternal = HermesInternal;
                                                                          combined = "" + intl2.string(tmp(tmp2[18]).t.KD6OJJ) + ": " + tmp28;
                                                                        }
                                                                        let obj7 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
                                                                        class Re {
                                                                          constructor() {
                                                                            obj = closure_0(closure_2[53]);
                                                                            obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                            obj3 = closure_0(closure_2[54]);
                                                                            obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                            fn = undefined;
                                                                            if (null != closure_18) {
                                                                              tmp = onRestoreVersion;
                                                                              if (null != onRestoreVersion) {
                                                                                fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                              }
                                                                            }
                                                                            obj1.onRestoreVersion = fn;
                                                                            fn2 = undefined;
                                                                            if (null != closure_19) {
                                                                              fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                            }
                                                                            obj1.onViewTrace = fn2;
                                                                            return obj.showConjureMessageActions(obj1);
                                                                          }
                                                                        }
                                                                        if (null != tmp24) {
                                                                          let obj8 = { label: tmp24.label, variant: "text-md/medium" };
                                                                          const tmp102 = closure_19(tmp40(tmp2[62]), obj8);
                                                                        }
                                                                        const items2 = [tmp102, , ];
                                                                        let str8 = null;
                                                                        if (null != tmp24) {
                                                                          str8 = null;
                                                                          if (tmp43) {
                                                                            str8 = " ";
                                                                          }
                                                                        }
                                                                        items2[1] = str8;
                                                                        items2[2] = tmp28;
                                                                        obj7.children = items2;
                                                                        let tmp100Result = closure_20(tmp(tmp2[20]).Text, obj7);
                                                                      } else {
                                                                        tmp100Result = null;
                                                                      }
                                                                      cResult[71] = tmp28;
                                                                      class Re {
                                                                        constructor() {
                                                                          obj = closure_0(closure_2[53]);
                                                                          obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                          obj3 = closure_0(closure_2[54]);
                                                                          obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                          fn = undefined;
                                                                          if (null != closure_18) {
                                                                            tmp = onRestoreVersion;
                                                                            if (null != onRestoreVersion) {
                                                                              fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                            }
                                                                          }
                                                                          obj1.onRestoreVersion = fn;
                                                                          fn2 = undefined;
                                                                          if (null != closure_19) {
                                                                            fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                          }
                                                                          obj1.onViewTrace = fn2;
                                                                          return obj.showConjureMessageActions(obj1);
                                                                        }
                                                                      }
                                                                      cResult[73] = tmp24;
                                                                      cResult[74] = tmp100Result;
                                                                      tmp98 = tmp100Result;
                                                                    }
                                                                  }
                                                                }
                                                                let tmp95 = null;
                                                                if (groupStart) {
                                                                  const obj10 = { style: tmp4.header, children: null };
                                                                  const obj12 = { userId: message.user_id, at: null };
                                                                  class Re {
                                                                    constructor() {
                                                                      obj = closure_0(closure_2[53]);
                                                                      obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                      obj3 = closure_0(closure_2[54]);
                                                                      obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                      fn = undefined;
                                                                      if (null != closure_18) {
                                                                        tmp = onRestoreVersion;
                                                                        if (null != onRestoreVersion) {
                                                                          fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                        }
                                                                      }
                                                                      obj1.onRestoreVersion = fn;
                                                                      fn2 = undefined;
                                                                      if (null != closure_19) {
                                                                        fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                      }
                                                                      obj1.onViewTrace = fn2;
                                                                      return obj.showConjureMessageActions(obj1);
                                                                    }
                                                                  }
                                                                  obj10.children = closure_19(tmp(tmp2[59]).ConjureUserHeader, obj12);
                                                                  tmp95 = closure_19(replied, obj10);
                                                                }
                                                                cResult[66] = groupStart;
                                                                class Re {
                                                                  constructor() {
                                                                    obj = closure_0(closure_2[53]);
                                                                    obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                    obj3 = closure_0(closure_2[54]);
                                                                    obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                    fn = undefined;
                                                                    if (null != closure_18) {
                                                                      tmp = onRestoreVersion;
                                                                      if (null != onRestoreVersion) {
                                                                        fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                      }
                                                                    }
                                                                    obj1.onRestoreVersion = fn;
                                                                    fn2 = undefined;
                                                                    if (null != closure_19) {
                                                                      fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                    }
                                                                    obj1.onViewTrace = fn2;
                                                                    return obj.showConjureMessageActions(obj1);
                                                                  }
                                                                }
                                                                cResult[67] = message.created_at;
                                                                cResult[68] = message.user_id;
                                                                cResult[69] = tmp4.header;
                                                                cResult[70] = tmp95;
                                                                tmp94 = tmp95;
                                                              }
                                                            }
                                                            let tmp91 = null;
                                                            if (groupStart) {
                                                              const obj13 = { style: tmp4.avatar, children: null };
                                                              { userId: null }.userId = message.user_id;
                                                              class Re {
                                                                constructor() {
                                                                  obj = closure_0(closure_2[53]);
                                                                  obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                  obj3 = closure_0(closure_2[54]);
                                                                  obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                  fn = undefined;
                                                                  if (null != closure_18) {
                                                                    tmp = onRestoreVersion;
                                                                    if (null != onRestoreVersion) {
                                                                      fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                    }
                                                                  }
                                                                  obj1.onRestoreVersion = fn;
                                                                  fn2 = undefined;
                                                                  if (null != closure_19) {
                                                                    fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                  }
                                                                  obj1.onViewTrace = fn2;
                                                                  return obj.showConjureMessageActions(obj1);
                                                                }
                                                              }
                                                              tmp91 = closure_19(replied, obj13);
                                                              const obj14 = { userId: null };
                                                            }
                                                            class Re {
                                                              constructor() {
                                                                obj = closure_0(closure_2[53]);
                                                                obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                obj3 = closure_0(closure_2[54]);
                                                                obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                fn = undefined;
                                                                if (null != closure_18) {
                                                                  tmp = onRestoreVersion;
                                                                  if (null != onRestoreVersion) {
                                                                    fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                  }
                                                                }
                                                                obj1.onRestoreVersion = fn;
                                                                fn2 = undefined;
                                                                if (null != closure_19) {
                                                                  fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                }
                                                                obj1.onViewTrace = fn2;
                                                                return obj.showConjureMessageActions(obj1);
                                                              }
                                                            }
                                                            cResult[63] = message.user_id;
                                                            cResult[64] = tmp4.avatar;
                                                            cResult[65] = tmp91;
                                                            tmp90 = tmp91;
                                                          } else {
                                                            if ("project_event" === message.kind) {
                                                              if (null != message.projectEvent) {
                                                                if (cResult[91] === message.projectEvent) {
                                                                  if (cResult[92] === projectId) {
                                                                    let tmp81 = cResult[93];
                                                                  }
                                                                  if (cResult[94] === tmp31) {
                                                                    if (cResult[95] === tmp81) {
                                                                      let tmp84 = cResult[96];
                                                                    }
                                                                    return tmp84;
                                                                  }
                                                                  const obj15 = { style: tmp31, children: null };
                                                                  class Re {
                                                                    constructor() {
                                                                      obj = closure_0(closure_2[53]);
                                                                      obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                      obj3 = closure_0(closure_2[54]);
                                                                      obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                      fn = undefined;
                                                                      if (null != closure_18) {
                                                                        tmp = onRestoreVersion;
                                                                        if (null != onRestoreVersion) {
                                                                          fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                        }
                                                                      }
                                                                      obj1.onRestoreVersion = fn;
                                                                      fn2 = undefined;
                                                                      if (null != closure_19) {
                                                                        fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                      }
                                                                      obj1.onViewTrace = fn2;
                                                                      return obj.showConjureMessageActions(obj1);
                                                                    }
                                                                  }
                                                                  const tmp87 = closure_19(replied, obj15);
                                                                  cResult[94] = tmp31;
                                                                  cResult[95] = tmp81;
                                                                  cResult[96] = tmp87;
                                                                  tmp84 = tmp87;
                                                                }
                                                                const obj16 = { projectId, event: message.projectEvent };
                                                                const tmp83 = closure_19(tmp40(tmp2[64]), obj16);
                                                                class Re {
                                                                  constructor() {
                                                                    obj = closure_0(closure_2[53]);
                                                                    obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                    obj3 = closure_0(closure_2[54]);
                                                                    obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                    fn = undefined;
                                                                    if (null != closure_18) {
                                                                      tmp = onRestoreVersion;
                                                                      if (null != onRestoreVersion) {
                                                                        fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                      }
                                                                    }
                                                                    obj1.onRestoreVersion = fn;
                                                                    fn2 = undefined;
                                                                    if (null != closure_19) {
                                                                      fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                    }
                                                                    obj1.onViewTrace = fn2;
                                                                    return obj.showConjureMessageActions(obj1);
                                                                  }
                                                                }
                                                                cResult[91] = message.projectEvent;
                                                                cResult[92] = projectId;
                                                                cResult[93] = tmp83;
                                                                tmp81 = tmp83;
                                                              }
                                                            }
                                                            if ("publish_notice" === message.kind) {
                                                              if (null != message.publishNotice) {
                                                                if (cResult[97] === message.publishNotice) {
                                                                  if (cResult[98] === projectId) {
                                                                    let tmp73 = cResult[99];
                                                                  }
                                                                  if (cResult[100] === tmp46) {
                                                                    if (cResult[101] === tmp31) {
                                                                      if (cResult[102] === tmp73) {
                                                                        let tmp76 = cResult[103];
                                                                      }
                                                                      return tmp76;
                                                                    }
                                                                  }
                                                                  const obj17 = { style: tmp31, children: null };
                                                                  class Re {
                                                                    constructor() {
                                                                      obj = closure_0(closure_2[53]);
                                                                      obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                      obj3 = closure_0(closure_2[54]);
                                                                      obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                      fn = undefined;
                                                                      if (null != closure_18) {
                                                                        tmp = onRestoreVersion;
                                                                        if (null != onRestoreVersion) {
                                                                          fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                        }
                                                                      }
                                                                      obj1.onRestoreVersion = fn;
                                                                      fn2 = undefined;
                                                                      if (null != closure_19) {
                                                                        fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                      }
                                                                      obj1.onViewTrace = fn2;
                                                                      return obj.showConjureMessageActions(obj1);
                                                                    }
                                                                  }
                                                                  tmp79[0] = tmp73;
                                                                  tmp79[1] = tmp46;
                                                                  obj17.children = tmp79;
                                                                  const tmp80 = closure_20(replied, obj17);
                                                                  cResult[100] = tmp46;
                                                                  cResult[101] = tmp31;
                                                                  cResult[102] = tmp73;
                                                                  cResult[103] = tmp80;
                                                                  tmp76 = tmp80;
                                                                }
                                                                const obj18 = { projectId, notice: message.publishNotice };
                                                                const tmp75 = closure_19(tmp40(tmp2[57]), obj18);
                                                                class Re {
                                                                  constructor() {
                                                                    obj = closure_0(closure_2[53]);
                                                                    obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                    obj3 = closure_0(closure_2[54]);
                                                                    obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                    fn = undefined;
                                                                    if (null != closure_18) {
                                                                      tmp = onRestoreVersion;
                                                                      if (null != onRestoreVersion) {
                                                                        fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                      }
                                                                    }
                                                                    obj1.onRestoreVersion = fn;
                                                                    fn2 = undefined;
                                                                    if (null != closure_19) {
                                                                      fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                    }
                                                                    obj1.onViewTrace = fn2;
                                                                    return obj.showConjureMessageActions(obj1);
                                                                  }
                                                                }
                                                                cResult[97] = message.publishNotice;
                                                                cResult[98] = projectId;
                                                                cResult[99] = tmp75;
                                                                tmp73 = tmp75;
                                                              }
                                                            }
                                                            if (true === message.interrupted) {
                                                              const _Symbol3 = Symbol;
                                                              if (cResult[104] === Symbol.for("react.memo_cache_sentinel")) {
                                                                const intl = tmp(tmp2[18]).intl;
                                                                const stringResult = intl.string(tmp40(tmp2[19]).oOmBdX);
                                                                cResult[104] = stringResult;
                                                              }
                                                              const _Symbol4 = Symbol;
                                                              class Re {
                                                                constructor() {
                                                                  obj = closure_0(closure_2[53]);
                                                                  obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                  obj3 = closure_0(closure_2[54]);
                                                                  obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                  fn = undefined;
                                                                  if (null != closure_18) {
                                                                    tmp = onRestoreVersion;
                                                                    if (null != onRestoreVersion) {
                                                                      fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                    }
                                                                  }
                                                                  obj1.onRestoreVersion = fn;
                                                                  fn2 = undefined;
                                                                  if (null != closure_19) {
                                                                    fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                  }
                                                                  obj1.onViewTrace = fn2;
                                                                  return obj.showConjureMessageActions(obj1);
                                                                }
                                                              }
                                                              if (cResult[106] !== tmp4.activityBox) {
                                                                const obj19 = { style: tmp4.activityBox, children: tmp64 };
                                                                const tmp68 = closure_19(replied, obj19);
                                                                class Re {
                                                                  constructor() {
                                                                    obj = closure_0(closure_2[53]);
                                                                    obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                    obj3 = closure_0(closure_2[54]);
                                                                    obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                    fn = undefined;
                                                                    if (null != closure_18) {
                                                                      tmp = onRestoreVersion;
                                                                      if (null != onRestoreVersion) {
                                                                        fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                      }
                                                                    }
                                                                    obj1.onRestoreVersion = fn;
                                                                    fn2 = undefined;
                                                                    if (null != closure_19) {
                                                                      fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                    }
                                                                    obj1.onViewTrace = fn2;
                                                                    return obj.showConjureMessageActions(obj1);
                                                                  }
                                                                }
                                                                cResult[106] = tmp4.activityBox;
                                                                cResult[107] = tmp68;
                                                                let tmp65 = tmp68;
                                                              } else {
                                                                tmp65 = cResult[107];
                                                              }
                                                              if (cResult[108] === tmp46) {
                                                                if (cResult[109] === tmp31) {
                                                                  if (cResult[110] === tmp65) {
                                                                    let tmp69 = cResult[111];
                                                                  }
                                                                  return tmp69;
                                                                }
                                                              }
                                                              const obj20 = { style: tmp31, children: null };
                                                              const items3 = [tmp65, tmp46];
                                                              obj20.children = items3;
                                                              const tmp72 = closure_20(replied, obj20);
                                                              cResult[108] = tmp46;
                                                              cResult[109] = tmp31;
                                                              cResult[110] = tmp65;
                                                              cResult[111] = tmp72;
                                                              tmp69 = tmp72;
                                                            } else if (cResult[112] !== message.steps) {
                                                              const _Symbol2 = Symbol;
                                                              if (cResult[114] === Symbol.for("react.memo_cache_sentinel")) {
                                                                class Be {
                                                                  constructor(arg0) {
                                                                    tmp = "error" === projectId.kind;
                                                                    if (!tmp) {
                                                                      str = "terminal_error";
                                                                      tmp = "terminal_error" === projectId.kind;
                                                                    }
                                                                    return tmp;
                                                                  }
                                                                }
                                                                cResult[114] = Be;
                                                              } else {
                                                                class Be {
                                                                  constructor(arg0) {
                                                                    tmp = "error" === projectId.kind;
                                                                    if (!tmp) {
                                                                      str = "terminal_error";
                                                                      tmp = "terminal_error" === projectId.kind;
                                                                    }
                                                                    return tmp;
                                                                  }
                                                                }
                                                              }
                                                              let steps = message.steps;
                                                              const found = steps.find(Be);
                                                              class Re {
                                                                constructor() {
                                                                  obj = closure_0(closure_2[53]);
                                                                  obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                  obj3 = closure_0(closure_2[54]);
                                                                  obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                  fn = undefined;
                                                                  if (null != closure_18) {
                                                                    tmp = onRestoreVersion;
                                                                    if (null != onRestoreVersion) {
                                                                      fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                    }
                                                                  }
                                                                  obj1.onRestoreVersion = fn;
                                                                  fn2 = undefined;
                                                                  if (null != closure_19) {
                                                                    fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                  }
                                                                  obj1.onViewTrace = fn2;
                                                                  return obj.showConjureMessageActions(obj1);
                                                                }
                                                              }
                                                              cResult[113] = found;
                                                            } else {
                                                              class Be {
                                                                constructor(arg0) {
                                                                  tmp = "error" === projectId.kind;
                                                                  if (!tmp) {
                                                                    str = "terminal_error";
                                                                    tmp = "terminal_error" === projectId.kind;
                                                                  }
                                                                  return tmp;
                                                                }
                                                              }
                                                              if ("proposal" === message.kind) {
                                                                class Be {
                                                                  constructor(arg0) {
                                                                    tmp = "error" === projectId.kind;
                                                                    if (!tmp) {
                                                                      str = "terminal_error";
                                                                      tmp = "terminal_error" === projectId.kind;
                                                                    }
                                                                    return tmp;
                                                                  }
                                                                }
                                                              }
                                                              const tmp52 = turnSettled(message);
                                                              class Re {
                                                                constructor() {
                                                                  obj = closure_0(closure_2[53]);
                                                                  obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                                  obj3 = closure_0(closure_2[54]);
                                                                  obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                                  fn = undefined;
                                                                  if (null != closure_18) {
                                                                    tmp = onRestoreVersion;
                                                                    if (null != onRestoreVersion) {
                                                                      fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                                    }
                                                                  }
                                                                  obj1.onRestoreVersion = fn;
                                                                  fn2 = undefined;
                                                                  if (null != closure_19) {
                                                                    fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                                  }
                                                                  obj1.onViewTrace = fn2;
                                                                  return obj.showConjureMessageActions(obj1);
                                                                }
                                                              }
                                                              if (tmp52) {
                                                                class Be {
                                                                  constructor(arg0) {
                                                                    tmp = "error" === projectId.kind;
                                                                    if (!tmp) {
                                                                      str = "terminal_error";
                                                                      tmp = "terminal_error" === projectId.kind;
                                                                    }
                                                                    return tmp;
                                                                  }
                                                                }
                                                                if (null != message.ideas) {
                                                                  class Be {
                                                                    constructor(arg0) {
                                                                      tmp = "error" === projectId.kind;
                                                                      if (!tmp) {
                                                                        str = "terminal_error";
                                                                        tmp = "terminal_error" === projectId.kind;
                                                                      }
                                                                      return tmp;
                                                                    }
                                                                  }
                                                                  if (message.ideas.length > 0) {
                                                                    class Be {
                                                                      constructor(arg0) {
                                                                        tmp = "error" === projectId.kind;
                                                                        if (!tmp) {
                                                                          str = "terminal_error";
                                                                          tmp = "terminal_error" === projectId.kind;
                                                                        }
                                                                        return tmp;
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              if (tmp52) {
                                                                class Be {
                                                                  constructor(arg0) {
                                                                    tmp = "error" === projectId.kind;
                                                                    if (!tmp) {
                                                                      str = "terminal_error";
                                                                      tmp = "terminal_error" === projectId.kind;
                                                                    }
                                                                    return tmp;
                                                                  }
                                                                }
                                                                if (tmp55 == null) {
                                                                  class Be {
                                                                    constructor(arg0) {
                                                                      tmp = "error" === projectId.kind;
                                                                      if (!tmp) {
                                                                        str = "terminal_error";
                                                                        tmp = "terminal_error" === projectId.kind;
                                                                      }
                                                                      return tmp;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              if (tmp52) {
                                                                class Be {
                                                                  constructor(arg0) {
                                                                    tmp = "error" === projectId.kind;
                                                                    if (!tmp) {
                                                                      str = "terminal_error";
                                                                      tmp = "terminal_error" === projectId.kind;
                                                                    }
                                                                    return tmp;
                                                                  }
                                                                }
                                                                if (tmp57 == null) {
                                                                  class Be {
                                                                    constructor(arg0) {
                                                                      tmp = "error" === projectId.kind;
                                                                      if (!tmp) {
                                                                        str = "terminal_error";
                                                                        tmp = "terminal_error" === projectId.kind;
                                                                      }
                                                                      return tmp;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              if (cResult[115] === isNewest) {
                                                                class Be {
                                                                  constructor(arg0) {
                                                                    tmp = "error" === projectId.kind;
                                                                    if (!tmp) {
                                                                      str = "terminal_error";
                                                                      tmp = "terminal_error" === projectId.kind;
                                                                    }
                                                                    return tmp;
                                                                  }
                                                                }
                                                              }
                                                              let tmp59;
                                                              if ("open" === secretRequestStatus) {
                                                                class Be {
                                                                  constructor(arg0) {
                                                                    tmp = "error" === projectId.kind;
                                                                    if (!tmp) {
                                                                      str = "terminal_error";
                                                                      tmp = "terminal_error" === projectId.kind;
                                                                    }
                                                                    return tmp;
                                                                  }
                                                                }
                                                                const activeAwaitingUserResult = obj11.activeAwaitingUser(message, isNewest);
                                                                if (activeAwaitingUserResult == null) {
                                                                  class Be {
                                                                    constructor(arg0) {
                                                                      tmp = "error" === projectId.kind;
                                                                      if (!tmp) {
                                                                        str = "terminal_error";
                                                                        tmp = "terminal_error" === projectId.kind;
                                                                      }
                                                                      return tmp;
                                                                    }
                                                                  }
                                                                }
                                                                tmp59 = activeAwaitingUserResult;
                                                              }
                                                              cResult[115] = isNewest;
                                                              cResult[116] = message;
                                                              cResult[117] = secretRequestStatus;
                                                              cResult[118] = tmp59;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    let tmp47 = null;
                                                    if (hostsReminder) {
                                                      class Be {
                                                        constructor(arg0) {
                                                          tmp = "error" === projectId.kind;
                                                          if (!tmp) {
                                                            str = "terminal_error";
                                                            tmp = "terminal_error" === projectId.kind;
                                                          }
                                                          return tmp;
                                                        }
                                                      }
                                                      const obj21 = { style: tmp4.reminderSlot, reminder, renderReminder: tmp45 };
                                                      tmp47 = closure_19(tmp40(tmp2[60]), obj21);
                                                    }
                                                    cResult[55] = hostsReminder;
                                                    class Re {
                                                      constructor() {
                                                        obj = closure_0(closure_2[53]);
                                                        obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                                        obj3 = closure_0(closure_2[54]);
                                                        obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                                        fn = undefined;
                                                        if (null != closure_18) {
                                                          tmp = onRestoreVersion;
                                                          if (null != onRestoreVersion) {
                                                            fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                                          }
                                                        }
                                                        obj1.onRestoreVersion = fn;
                                                        fn2 = undefined;
                                                        if (null != closure_19) {
                                                          fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                                        }
                                                        obj1.onViewTrace = fn2;
                                                        return obj.showConjureMessageActions(obj1);
                                                      }
                                                    }
                                                    cResult[56] = reminder;
                                                    cResult[57] = tmp45;
                                                    cResult[58] = tmp4.reminderSlot;
                                                    cResult[59] = tmp47;
                                                    tmp46 = tmp47;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      function renderReminder(arg0) {
                                        if ("outdated" === arg0) {
                                          const obj2 = { style: closure_12.reminderTip, children: null };
                                          const obj3 = { style: closure_12.spoken, children: null };
                                          const obj4 = { projectId, notice: "outdated" };
                                          obj3.children = closure_2_19(ConjurePublishNoticeLineDefault, obj4);
                                          obj2.children = closure_2_19(React5, obj3);
                                          return closure_2_19(React5, obj2);
                                        } else if ("ideas" === arg0) {
                                          const obj = { style: closure_12.reminderSeparated, children: null };
                                          const obj5 = { style: closure_12.spoken, onAsk: onAskForIdeas, attribution: null };
                                          const obj6 = { children: null };
                                          const obj7 = { style: null, children: null };
                                          items = [, ];
                                          ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                          obj7.style = items;
                                          obj7.children = closure_2_19(ConjureMessageAuthor.ConjureAvatar, {});
                                          const items1 = [closure_2_19(React5, obj7), ];
                                          const obj8 = { style: closure_12.header, children: closure_2_19(ConjureMessageAuthor.ConjureHeader, {}) };
                                          items1[1] = closure_2_19(React5, obj8);
                                          obj6.children = items1;
                                          obj5.attribution = constants2(guild, obj6);
                                          obj.children = closure_2_19(ConjureIdeasOfferDefault, obj5);
                                          return closure_2_19(React5, obj);
                                        }
                                      }
                                      cResult[46] = onAskForIdeas;
                                      class Re {
                                        constructor() {
                                          obj = closure_0(closure_2[53]);
                                          obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                                          obj3 = closure_0(closure_2[54]);
                                          obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                                          fn = undefined;
                                          if (null != closure_18) {
                                            tmp = onRestoreVersion;
                                            if (null != onRestoreVersion) {
                                              fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                                            }
                                          }
                                          obj1.onRestoreVersion = fn;
                                          fn2 = undefined;
                                          if (null != closure_19) {
                                            fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                                          }
                                          obj1.onViewTrace = fn2;
                                          return obj.showConjureMessageActions(obj1);
                                        }
                                      }
                                      cResult[48] = tmp4.avatar;
                                      cResult[49] = tmp4.avatarSpoken;
                                      cResult[50] = tmp4.header;
                                      cResult[51] = tmp4.reminderSeparated;
                                      cResult[52] = tmp4.reminderTip;
                                      cResult[53] = tmp4.spoken;
                                      cResult[54] = renderReminder;
                                      tmp45 = renderReminder;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    class Re {
                      constructor() {
                        obj = closure_0(closure_2[53]);
                        obj1 = { content: closure_15, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
                        obj3 = closure_0(closure_2[54]);
                        obj1.onQueuedAction = obj3.queuedMessageActionHandler(projectId, message, closure_17);
                        fn = undefined;
                        if (null != closure_18) {
                          tmp = onRestoreVersion;
                          if (null != onRestoreVersion) {
                            fn = () => projectId(groupStart[55]).confirmRestoreVersion({ onConfirm() { ... } });
                          }
                        }
                        obj1.onRestoreVersion = fn;
                        fn2 = undefined;
                        if (null != closure_19) {
                          fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
                        }
                        obj1.onViewTrace = fn2;
                        return obj.showConjureMessageActions(obj1);
                      }
                    }
                    cResult[37] = user_id;
                    cResult[38] = tmp28;
                    cResult[39] = stateFromStores;
                    cResult[40] = message;
                    cResult[41] = onRestoreVersion;
                    cResult[42] = projectId;
                    cResult[43] = tmp41;
                    cResult[44] = tmp38;
                    cResult[45] = Re;
                  }
                  let turnRestoreEntryResult = null;
                  if (null != onRestoreVersion) {
                    class Be {
                      constructor(arg0) {
                        tmp = "error" === projectId.kind;
                        if (!tmp) {
                          str = "terminal_error";
                          tmp = "terminal_error" === projectId.kind;
                        }
                        return tmp;
                      }
                    }
                    turnRestoreEntryResult = obj9.turnRestoreEntry(message);
                  }
                  cResult[34] = message;
                  cResult[35] = onRestoreVersion;
                  cResult[36] = turnRestoreEntryResult;
                  tmp38 = turnRestoreEntryResult;
                  const tmpResult8 = tmp(tmp2[50]);
                }
                const items4 = [tmp4.row, rowGroupStart];
                cResult[29] = tmp4.row;
                cResult[30] = rowGroupStart;
                cResult[31] = items4;
                tmp31 = items4;
              }
              function de() {
                if (null != replied) {
                  if (onJumpToReplied != null) {
                    tmp2(tmp.id);
                  }
                }
              }
              cResult[22] = onJumpToReplied;
              cResult[24] = de;
            }
          }
          function se() {
            return onTogglePlan(message.render_id, planSuperseded);
          }
          cResult[18] = message.render_id;
          cResult[20] = planSuperseded;
          cResult[21] = se;
        }
      }
      function ie() {
        return onToggleChecklist(message.render_id, checklistSuperseded);
      }
      cResult[14] = checklistSuperseded;
      cResult[15] = message.render_id;
      cResult[16] = onToggleChecklist;
      cResult[17] = ie;
    }
    const obj22 = { turnActive: !tmp11 };
    const turnSegmentsResult = obj3.turnSegments(message.steps, obj22);
    cResult[7] = message.steps;
    cResult[8] = !tmp11;
    cResult[9] = turnSegmentsResult;
  }
  let obj = projectId(groupStart[16]);
  const timelineTree = projectId(groupStart[39]).buildTimelineTree(message.steps, { turnActive: tmp8 });
  cResult[2] = message.steps;
  cResult[3] = !tmp5;
  cResult[4] = timelineTree;
  tmp9 = timelineTree;
  const tmpResult10 = projectId(groupStart[39]);
}) : (function MessageRow(projectId) {
  projectId = projectId.projectId;
  const message = projectId.message;
  const groupStart = projectId.groupStart;
  ({ isNewest, reminder, checklistSuperseded } = projectId);
  ({ secretRequestStatus, onToggleChecklist } = projectId);
  const planSuperseded = projectId.planSuperseded;
  const onTogglePlan = projectId.onTogglePlan;
  const replied = projectId.replied;
  const onJumpToReplied = projectId.onJumpToReplied;
  ({ onAskForIdeas: AppStateStore, onDismissClarification: closure_10, onRestoreVersion } = projectId);
  let trimmed;
  let user_id;
  let stateFromStores;
  let memo5;
  closure_19 = undefined;
  let restoreProposal;
  let clarification;
  c22 = undefined;
  c23 = undefined;
  let index;
  closure_25 = undefined;
  let open;
  ({ first, hostsReminder, checklistExpanded, planVersion, planExpanded, onApprovePlan, onPickIdea, onAnswerClarification, clarificationDismissed } = projectId);
  let tmp = closure_29();
  closure_12 = tmp;
  items = [message];
  const memo = onToggleChecklist.useMemo(() => {
    const obj = ConjureTimelineTree;
    return obj.buildTimelineTree(message.steps, { turnActive: !turnSettled(message) });
  }, items);
  let items1 = [message];
  const memo1 = onToggleChecklist.useMemo(() => {
    const obj = ConjureTimelineTree;
    return obj.turnSegments(message.steps, { turnActive: !turnSettled(message) });
  }, items1);
  const items2 = [message];
  const memo2 = onToggleChecklist.useMemo(() => ConjureTimelineTree.latestTodos(message.steps), items2);
  const items3 = [memo];
  const items4 = [onToggleChecklist, message.render_id, checklistSuperseded];
  const memo3 = onToggleChecklist.useMemo(() => ConjureTodoAgents.runningTodoAgents(memo.tasks), items3);
  const items5 = [onTogglePlan, message.render_id, planSuperseded];
  const callback = onToggleChecklist.useCallback(() => onToggleChecklist(message.render_id, checklistSuperseded), items4);
  const items6 = [onJumpToReplied, replied];
  const callback1 = onToggleChecklist.useCallback(() => onTogglePlan(message.render_id, planSuperseded), items5);
  const items7 = [message.content];
  const callback2 = onToggleChecklist.useCallback(() => {
    if (null != replied) {
      if (onJumpToReplied != null) {
        tmp2(tmp.id);
      }
    }
  }, items6);
  const memo4 = onToggleChecklist.useMemo(() => ConjureDesignFeedback.parseConjureDesignRemark(message.content), items7);
  let body;
  if (memo4 != null) {
    body = memo4.body;
  }
  if (body == null) {
    body = message.content;
  }
  trimmed = body.trim();
  let attachments = null;
  if (null != message.attachments) {
    attachments = null;
    if (message.attachments.length > 0) {
      attachments = message.attachments;
    }
  }
  const items8 = [tmp.row, ];
  let rowGroupStart = groupStart;
  if (groupStart) {
    rowGroupStart = !first;
  }
  if (rowGroupStart) {
    rowGroupStart = tmp.rowGroupStart;
  }
  items8[1] = rowGroupStart;
  user_id = undefined;
  if ("user" === message.role) {
    user_id = message.user_id;
  }
  const items9 = [onJumpToReplied];
  stateFromStores = projectId(groupStart[50]).useStateFromStores(items9, () => {
    const currentUser = onJumpToReplied.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items10 = [message, onRestoreVersion];
  memo5 = onToggleChecklist.useMemo(() => {
    let turnRestoreEntryResult = null;
    if (null != onRestoreVersion) {
      turnRestoreEntryResult = ConjureChatRestore.turnRestoreEntry(message);
    }
    return turnRestoreEntryResult;
  }, items10);
  const tmp18 = message(groupStart[52])(projectId, message);
  closure_19 = tmp18;
  const items11 = [trimmed, user_id, projectId, message, stateFromStores, memo5, onRestoreVersion, tmp18];
  const callback3 = onToggleChecklist.useCallback(() => {
    const obj2 = { content: trimmed, userId: user_id, onQueuedAction: null, onRestoreVersion: null, onViewTrace: null };
    const obj = ConjureMessageActionSheet;
    obj2.onQueuedAction = conjureQueuedMessage.queuedMessageActionHandler(projectId, message, stateFromStores);
    let fn;
    if (null != memo5) {
      if (null != onRestoreVersion) {
        fn = () => projectId(groupStart[55]).confirmRestoreVersion({
          onConfirm() {
            return closure_1_11(closure_1_18);
          }
        });
      }
    }
    obj2.onRestoreVersion = fn;
    let fn2;
    if (null != closure_19) {
      fn2 = () => projectId(groupStart[56]).requestConjureTrace(closure_1_0, closure_1_19);
    }
    obj2.onViewTrace = fn2;
    return obj.showConjureMessageActions(obj2);
  }, items11);
  if ("" === trimmed) {
    if (null == user_id) {
      let tmp22 = null;
      if (hostsReminder) {
        let obj3 = {
          style: tmp.reminderSlot,
          reminder,
          renderReminder(arg0) {
                  if ("outdated" === arg0) {
                    const obj2 = { style: closure_12.reminderTip, children: null };
                    const obj3 = { style: closure_12.spoken, children: null };
                    const obj4 = { projectId, notice: "outdated" };
                    obj3.children = closure_2_19(ConjurePublishNoticeLineDefault, obj4);
                    obj2.children = closure_2_19(React5, obj3);
                    return closure_2_19(React5, obj2);
                  } else if ("ideas" === arg0) {
                    const obj = { style: closure_12.reminderSeparated, children: null };
                    const obj5 = { style: closure_12.spoken, onAsk, attribution: null };
                    const obj6 = { children: null };
                    const obj7 = { style: null, children: null };
                    items = [, ];
                    ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                    obj7.style = items;
                    obj7.children = closure_2_19(ConjureMessageAuthor.ConjureAvatar, {});
                    const items1 = [closure_2_19(React5, obj7), ];
                    const obj8 = { style: closure_12.header, children: closure_2_19(ConjureMessageAuthor.ConjureHeader, {}) };
                    items1[1] = closure_2_19(React5, obj8);
                    obj6.children = items1;
                    obj5.attribution = constants2(guild, obj6);
                    obj.children = closure_2_19(ConjureIdeasOfferDefault, obj5);
                    return closure_2_19(React5, obj);
                  }
                }
        };
        tmp22 = closure_19(tmp17(tmp14[60]), obj3);
      }
      if ("user" === message.role) {
        if ("" === trimmed) {
          if (null == memo4) {
            if (null == attachments) {
              return null;
            }
          }
        }
        const conjureAgentReactionLabel = tmp13(tmp14[61]).getConjureAgentReactionLabel(message.agentReaction);
        let obj4 = { style: items8, onLongPress: tmp21, accessible: false, children: null };
        let tmp89 = null;
        if (groupStart) {
          let obj5 = { style: tmp.avatar, children: null };
          let obj6 = { userId: message.user_id };
          obj5.children = closure_19(tmp13(tmp14[59]).ConjureUserAvatar, obj6);
          tmp89 = closure_19(replied, obj5);
        }
        const items12 = [tmp89, , , , ];
        let tmp92 = null;
        if (groupStart) {
          let obj7 = { style: tmp.header, children: null };
          ({ user_id: obj49.userId, created_at: obj49.at } = message);
          obj7.children = closure_19(tmp13(tmp14[59]).ConjureUserHeader, { userId: null, at: null });
          tmp92 = closure_19(replied, obj7);
          let obj8 = { userId: null, at: null };
        }
        items12[1] = tmp92;
        if (tmp20) {
          let combined;
          if (!groupStart) {
            const intl3 = tmp13(tmp14[18]).intl;
            const _HermesInternal = HermesInternal;
            combined = "" + intl3.string(tmp13(tmp14[18]).t.KD6OJJ) + ": " + trimmed;
          }
          const obj9 = { variant: "text-md/normal", color: "text-default", accessibilityLabel: combined, children: null };
          let tmp98 = null;
          if (null != memo4) {
            const obj10 = { label: memo4.label, variant: "text-md/medium" };
            tmp98 = closure_19(tmp17(tmp14[62]), obj10);
          }
          const items13 = [tmp98, , ];
          let str6 = null;
          if (null != memo4) {
            str6 = null;
            if (tmp20) {
              str6 = " ";
            }
          }
          items13[1] = str6;
          items13[2] = trimmed;
          obj9.children = items13;
          let tmp87Result = tmp87(tmp13(tmp14[20]).Text, obj9);
        } else {
          tmp87Result = null;
        }
        items12[2] = tmp87Result;
        let tmp100 = null;
        if (null != attachments) {
          const obj11 = { projectId, attachments };
          tmp100 = closure_19(closure_33, obj11);
        }
        items12[3] = tmp100;
        let tmp103 = null;
        if (null != message.agentReaction) {
          tmp103 = null;
          if (null != conjureAgentReactionLabel) {
            const obj12 = { style: tmp.agentReaction, accessible: true, accessibilityRole: "image", accessibilityLabel: conjureAgentReactionLabel, children: null };
            const obj13 = { name: message.agentReaction, fastImageStyle: tmp.agentReactionEmoji };
            obj12.children = closure_19(tmp17(tmp14[63]), obj13);
            tmp103 = closure_19(replied, obj12);
          }
        }
        items12[4] = tmp103;
        obj4.children = items12;
        return restoreProposal(onTogglePlan, obj4);
      } else {
        if ("project_event" === message.kind) {
          if (null != message.projectEvent) {
            const obj14 = { style: items8, children: null };
            const obj15 = { projectId, event: message.projectEvent };
            obj14.children = closure_19(tmp17(tmp14[64]), obj15);
            return closure_19(replied, obj14);
          }
        }
        if ("publish_notice" === message.kind) {
          if (null != message.publishNotice) {
            const obj16 = { style: items8, children: null };
            const obj17 = { projectId, notice: message.publishNotice };
            const items14 = [closure_19(tmp17(tmp14[57]), obj17), tmp22];
            obj16.children = items14;
            return restoreProposal(replied, obj16);
          }
        }
        if (true === message.interrupted) {
          const obj18 = { style: items8, children: null };
          const obj19 = { style: tmp.activityBox, children: null };
          const obj20 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
          const intl2 = tmp13(tmp14[18]).intl;
          obj20.line = intl2.string(tmp17(tmp14[19]).oOmBdX);
          const obj21 = { size: "refresh_sm", color: tmp17(tmp14[10]).colors.TEXT_MUTED };
          obj20.glyph = closure_19(tmp13(tmp14[65]).StopIcon, obj21);
          obj19.children = closure_19(tmp17(tmp14[11]), obj20);
          const items15 = [closure_19(replied, obj19), tmp22];
          obj18.children = items15;
          return restoreProposal(replied, obj18);
        } else {
          let steps = message.steps;
          const found = steps.find((kind) => {
            let tmp = "error" === kind.kind;
            if (!tmp) {
              tmp = "terminal_error" === kind.kind;
            }
            return tmp;
          });
          let proposal;
          if ("proposal" === message.kind) {
            proposal = message.proposal;
          }
          const tmp26 = memo5(message);
          let ideas = null;
          if (tmp26) {
            ideas = null;
            if (null != message.ideas) {
              ideas = null;
              if (message.ideas.length > 0) {
                ideas = message.ideas;
              }
            }
          }
          let tmp28 = null;
          if (tmp26) {
            let publishCta = message.publishCta;
            if (publishCta == null) {
              publishCta = null;
            }
            tmp28 = publishCta;
          }
          let tmp30 = null;
          if (tmp26) {
            let secretRequest = message.secretRequest;
            if (secretRequest == null) {
              secretRequest = null;
            }
            tmp30 = secretRequest;
          }
          if ("open" === secretRequestStatus) {
            const tmp13Result7 = tmp13(tmp14[66]);
            const tmp32 = tmp13(tmp14[66]).activeAwaitingUser(message, isNewest);
            const activeAwaitingUserResult = tmp13(tmp14[66]).activeAwaitingUser(message, isNewest);
          }
          let tmp34 = null;
          if (tmp26) {
            let settingsRequest = message.settingsRequest;
            if (settingsRequest == null) {
              settingsRequest = null;
            }
            tmp34 = settingsRequest;
          }
          restoreProposal = message.restoreProposal;
          if (restoreProposal == null) {
            restoreProposal = null;
          }
          clarification = null;
          if (isNewest) {
            clarification = null;
            if (!clarificationDismissed) {
              clarification = null;
              if (null != message.clarification) {
                clarification = null;
                if (message.clarification.questions.length > 0) {
                  clarification = message.clarification;
                }
              }
            }
          }
          let items20 = memo2;
          if (memo2 == null) {
            let todos = null;
            if (null != message.todos) {
              todos = null;
              if (message.todos.length > 0) {
                todos = message.todos;
              }
            }
            items20 = todos;
          }
          if (null == items20) {
            if (null != message.provisionalTodo) {
              if ("" !== message.provisionalTodo) {
                const provisionalTodo = message.provisionalTodo;
              }
            }
          }
          const obj22 = { steps: message.steps, content: trimmed, hasProposal: null != proposal, hasLiveClarification: null != clarification, hasAttachments: null != attachments };
          const turnPresentation = tmp13(tmp14[67]).resolveTurnPresentation(obj22);
          ({ showsClosingMessage, replyKey: c22 } = turnPresentation);
          let tmp40 = memo.steps.length > 0;
          if (!tmp40) {
            tmp40 = memo.tasks.length > 0;
          }
          if (!tmp40) {
            if (0 === turnPresentation.streamed.length) {
              if ("" === trimmed) {
                if (null == proposal) {
                  if (null == found) {
                    if (null == ideas) {
                      if (null == items20) {
                        if (null == provisionalTodo) {
                          if (null == tmp30) {
                            if (null == tmp34) {
                              if (null == attachments) {
                                if (null == clarification) {
                                  if (null == restoreProposal) {
                                    if (null == tmp28) {
                                      if (null == reminder) {
                                        return null;
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
              }
            }
          }
          const tmp13Result8 = tmp13(tmp14[67]);
          const tmp25 = memo5;
          const turnLeadsWithStretchResult = tmp13(tmp14[67]).turnLeadsWithStretch(tmp40, turnPresentation);
          c23 = turnLeadsWithStretchResult;
          const found1 = memo1.filter((hasWork) => hasWork.hasWork);
          const atResult = found1.at(-1);
          index = undefined;
          if (atResult != null) {
            index = atResult.index;
          }
          const tmp44 = !tmp25(message);
          closure_25 = tmp44;
          const tmp13Result9 = tmp13(tmp14[67]);
          const obj23 = { turnActive: tmp44 };
          open = tmp13(tmp14[39]).turnLifecycle(memo1, obj23).open;
          let avatarSpokenReplying = groupStart;
          if (groupStart) {
            avatarSpokenReplying = null != replied;
          }
          let tmp48Result = null;
          if (avatarSpokenReplying) {
            const obj24 = { replied, onJump: null };
            let tmp50;
            if (null != onJumpToReplied) {
              tmp50 = callback2;
            }
            obj24.onJump = tmp50;
            tmp48Result = closure_19(tmp17(tmp14[14]), obj24);
            const tmp17Result4 = tmp17(tmp14[14]);
          }
          const items16 = [tmp48Result, , ];
          const items17 = [, , ];
          ({ avatar: arr16[0], avatarSpoken: arr16[1] } = tmp);
          if (avatarSpokenReplying) {
            avatarSpokenReplying = tmp.avatarSpokenReplying;
          }
          const obj25 = { children: null };
          const obj26 = { style: null, children: null };
          items17[2] = avatarSpokenReplying;
          obj26.style = items17;
          obj26.children = closure_19(tmp13(tmp14[59]).ConjureAvatar, {});
          items16[1] = closure_19(replied, obj26);
          const obj27 = { style: tmp.header, children: null };
          const obj28 = { at: message.created_at };
          obj27.children = closure_19(tmp13(tmp14[59]).ConjureHeader, obj28);
          items16[2] = closure_19(replied, obj27);
          obj25.children = items16;
          const tmp45Result = restoreProposal(clarification, obj25);
          const obj29 = { style: items8, onLongPress: tmp21, accessible: false, children: null };
          let tmp51Result = null;
          if (turnLeadsWithStretchResult) {
            tmp51Result = null;
            if (groupStart) {
              const obj30 = { style: tmp.spoken, children: tmp45Result };
              tmp51Result = tmp51(tmp52, obj30);
            }
          }
          const items18 = [
            tmp51Result,
            memo1.map((prose, index) => {
                      let tmp19Result = null;
                      if (null != prose.prose) {
                        tmp19Result = null;
                        if (prose.prose.key !== c22) {
                          const obj2 = { style: closure_12.spoken, children: null };
                          const obj3 = { source: prose.prose.content, streaming: null };
                          let tmp5 = closure_25;
                          if (closure_25) {
                            tmp5 = index === memo1.length - 1;
                          }
                          if (tmp5) {
                            tmp5 = !prose.hasWork;
                          }
                          obj3.streaming = tmp5;
                          obj2.children = closure_2_19(ConjureNativeMarkdown.ConjureRevealedMarkdown, obj3);
                          tmp19Result = closure_2_19(React5, obj2);
                        }
                      }
                      const children = [tmp19Result, ];
                      let tmp7Result = null;
                      if (prose.hasWork) {
                        const obj = { projectId, tree: null, turnActive: null, besideAvatar: null };
                        index = prose.index;
                        const obj4 = { steps: null, tasks: null };
                        const steps = memo.steps;
                        obj4.steps = steps.filter((segment) => segment.segment === index);
                        const tasks = memo.tasks;
                        obj4.tasks = tasks.filter((task) => task.task.segment === index);
                        if (prose.index === index) {
                          if (null != memo.turn) {
                            const obj5 = { turn: memo.turn };
                            let obj6 = obj5;
                          }
                          const merged = Object.assign(obj6);
                          obj.tree = obj4;
                          obj.turnActive = prose.index === open;
                          let tmp16 = c23;
                          if (c23) {
                            tmp16 = groupStart;
                          }
                          if (tmp16) {
                            tmp16 = 0 === index;
                          }
                          if (tmp16) {
                            let tmp17 = null == prose.prose;
                            if (!tmp17) {
                              tmp17 = prose.prose.key === c22;
                            }
                            tmp16 = tmp17;
                          }
                          obj.besideAvatar = tmp16;
                          tmp7Result = closure_2_19(closure_37, obj);
                        }
                        obj6 = {};
                      }
                      children[1] = tmp7Result;
                      return constants2(noop.Fragment, { children }, prose.key);
                    }),
  ,
  ,

          ];
          if (!showsClosingMessage) {
            if (null == proposal) {
              if (null == clarification) {
                if (null == restoreProposal) {
                  if (null == ideas) {
                    if (null == tmp30) {
                      if (null == tmp34) {
                        if (null == attachments) {
                          if (null == found) {
                            if (null == items20) {
                              if (null == provisionalTodo) {
                                let tmp45Result2 = null;
                              }
                              items18[2] = tmp45Result2;
                              let tmp51Result14 = null;
                              if (null != tmp32) {
                                const obj31 = { style: tmp.spoken, children: null };
                                const obj32 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                const intl = tmp13(tmp14[18]).intl;
                                obj32.children = intl.string(tmp17(tmp14[19]).YR8A2v);
                                obj31.children = tmp51(tmp13(tmp14[20]).Text, obj32);
                                tmp51Result14 = tmp51(tmp52, obj31);
                              }
                              items18[3] = tmp51Result14;
                              items18[4] = tmp22;
                              obj29.children = items18;
                              return tmp45(tmp54, obj29);
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
          const obj33 = { style: tmp.spoken, children: null };
          let tmp57 = null;
          if (groupStart) {
            tmp57 = null;
            if (!turnLeadsWithStretchResult) {
              tmp57 = tmp45Result;
            }
          }
          const items19 = [tmp57, , , , , , , , , , , , ];
          let tmp51Result15 = null;
          if (showsClosingMessage) {
            const obj34 = { source: turnPresentation.closingContent };
            tmp51Result15 = tmp51(tmp17(tmp14[32]), obj34);
          }
          items19[1] = tmp51Result15;
          let tmp51Result16 = null;
          if ("side_reply" === message.kind) {
            const obj35 = { variant: "text-xs/normal", color: "text-muted", children: tmp13(tmp14[68]).midTurnCaption(message.acknowledges) };
            tmp51Result16 = tmp51(tmp13(tmp14[20]).Text, obj35);
            const tmp13Result11 = tmp13(tmp14[68]);
          }
          items19[2] = tmp51Result16;
          let tmp51Result17 = null;
          if (null != attachments) {
            const obj36 = { projectId, attachments };
            tmp51Result17 = tmp51(closure_33, obj36);
          }
          items19[3] = tmp51Result17;
          if (null != items20) {
            const tmp17Result5 = tmp17(tmp14[28]);
            if (items20 == null) {
              items20 = [];
            }
            const obj37 = { children: null };
            const obj38 = { todos: items20, provisional: provisionalTodo, agents: memo3, live: null, superseded: null, expanded: null, onToggleExpanded: null };
            const tmp17Result6 = tmp17(tmp14[69]);
            obj38.live = tmp13(tmp14[70]).checklistLive(message);
            obj38.superseded = checklistSuperseded;
            obj38.expanded = checklistExpanded;
            obj38.onToggleExpanded = callback;
            obj37.children = tmp51(tmp17Result6, obj38);
            let tmp51Result18 = tmp51(tmp17Result5, obj37);
            const tmp13Result12 = tmp13(tmp14[70]);
          } else {
            tmp51Result18 = null;
          }
          items19[4] = tmp51Result18;
          let tmp51Result19 = null;
          if (null != proposal) {
            const obj39 = { projectId, proposal, version: planVersion, superseded: planSuperseded, expanded: planExpanded, onToggleExpanded: callback1, onApprove: onApprovePlan };
            tmp51Result19 = tmp51(closure_31, obj39);
          }
          items19[5] = tmp51Result19;
          let tmp51Result20 = null;
          if (null != clarification) {
            const obj40 = {
              projectId,
              clarification,
              onSubmit: onAnswerClarification,
              onDismiss() {
                          return closure_1_10(clarification.id);
                        }
            };
            tmp51Result20 = tmp51(tmp17(tmp14[71]), obj40);
          }
          items19[6] = tmp51Result20;
          let tmp51Result21 = null;
          if (null != tmp30) {
            const obj41 = { projectId, cardId: message.render_id, request: tmp30, status: secretRequestStatus, awaiting: tmp32 };
            tmp51Result21 = tmp51(tmp17(tmp14[72]), obj41);
          }
          items19[7] = tmp51Result21;
          let tmp51Result22 = null;
          if (null != tmp34) {
            const obj42 = { projectId, request: tmp34 };
            tmp51Result22 = tmp51(tmp17(tmp14[73]), obj42);
          }
          items19[8] = tmp51Result22;
          let tmp51Result23 = null;
          if (null != tmp28) {
            const obj43 = { projectId };
            tmp51Result23 = tmp51(tmp17(tmp14[74]), obj43);
          }
          items19[9] = tmp51Result23;
          let tmp51Result24 = null;
          if (null != ideas) {
            const obj44 = { ideas, onPick: onPickIdea };
            tmp51Result24 = tmp51(closure_32, obj44);
          }
          items19[10] = tmp51Result24;
          let tmp51Result25 = null;
          if (null != restoreProposal) {
            const obj45 = { proposal: restoreProposal, onRestore: null };
            let fn;
            if (isNewest) {
              if (null != onRestoreVersion) {
                fn = () => ConjureVersionRestoreConfirm.confirmRestoreVersion({
                  onConfirm() {
                    return onRestoreVersion(projectId(groupStart[51]).proposalRestoreEntry(restoreProposal));
                  }
                });
              }
            }
            obj45.onRestore = fn;
            tmp51Result25 = tmp51(closure_39, obj45);
          }
          items19[11] = tmp51Result25;
          let tmp51Result26 = null;
          if (null != found) {
            tmp51Result26 = null;
            if ("message" in found) {
              const obj46 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
              tmp51Result26 = tmp51(tmp13(tmp14[20]).Text, obj46);
            }
          }
          items19[12] = tmp51Result26;
          obj33.children = items19;
          tmp45Result2 = tmp45(tmp52, obj33);
          const tmp13Result10 = tmp13(tmp14[39]);
          tmp54 = onTogglePlan;
        }
      }
    }
  }
  let obj2 = projectId(groupStart[50]);
}));
ReactCompilerGating = fn(558);
let obj17 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeChat(projectId) {
  const cResult = projectId(stateFromStores[16]).c(258);
  projectId = projectId.projectId;
  ({ transcriptTopInset, onRestoreVersion } = projectId);
  closure_29();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [AppStateStore];
    const fn = function o() {
      return "active" === set.getState();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp10 = items1;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9, tmp10] = cResult;
  }
  let obj = projectId(stateFromStores[16]);
  stateFromStores = projectId(stateFromStores[50]).useStateFromStores(tmp8, tmp9, tmp10);
  onRestoreVersion(stateFromStores[75])(projectId);
  const bottom = onRestoreVersion(tmp4[76])().bottom;
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === projectId) {
      let tmp14 = cResult[5];
      let tmp15 = cResult[6];
    }
    const effect = stateFromStores3.useEffect(tmp14, tmp15);
    const ackConjureProjectWhileViewing = tmp2(tmp4[77]).useAckConjureProjectWhileViewing(projectId);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureChatStore];
      cResult[7] = items2;
      let tmp20 = items2;
    } else {
      tmp20 = cResult[7];
    }
    if (cResult[8] !== projectId) {
      class N {
        constructor() {
          return closure_17.getMessages(projectId);
        }
      }
      const items3 = [projectId];
      cResult[8] = projectId;
      cResult[9] = N;
      cResult[10] = items3;
      let tmp23 = items3;
    } else {
      class N {
        constructor() {
          return closure_17.getMessages(projectId);
        }
      }
      tmp23 = cResult[10];
    }
    let obj3 = stateFromStores3;
    const tmp2Result15 = tmp2(tmp4[77]);
    const stateFromStores1 = tmp2(tmp4[50]).useStateFromStores(tmp20, N, tmp23);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return closure_17.getMessages(projectId);
        }
      }
      const items4 = [ConjureProjectStore];
      cResult[11] = items4;
      const tmp27 = items4;
    } else {
      class N {
        constructor() {
          return closure_17.getMessages(projectId);
        }
      }
    }
    if (cResult[12] !== projectId) {
      class V {
        constructor() {
          publishStatus = closure_16.getPublishStatus(projectId);
          state = undefined;
          if (publishStatus != null) {
            state = publishStatus.state;
          }
          if (state == null) {
            state = null;
          }
          return state;
        }
      }
      const items5 = [projectId];
      cResult[12] = projectId;
      cResult[13] = V;
      cResult[14] = items5;
      let tmp29 = items5;
    } else {
      class V {
        constructor() {
          publishStatus = closure_16.getPublishStatus(projectId);
          state = undefined;
          if (publishStatus != null) {
            state = publishStatus.state;
          }
          if (state == null) {
            state = null;
          }
          return state;
        }
      }
      tmp29 = cResult[14];
    }
    const tmp2Result16 = tmp2(tmp4[50]);
    const stateFromStores2 = tmp2(tmp4[50]).useStateFromStores(tmp27, V, tmp29);
    if (cResult[15] === stateFromStores1) {
      class V {
        constructor() {
          publishStatus = closure_16.getPublishStatus(projectId);
          state = undefined;
          if (publishStatus != null) {
            state = publishStatus.state;
          }
          if (state == null) {
            state = null;
          }
          return state;
        }
      }
      _slicedToArray = tmp33;
      const _Symbol3 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            publishStatus = closure_16.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items6 = [ConjureChatStore];
        cResult[18] = items6;
        const tmp37 = items6;
      } else {
        class V {
          constructor() {
            publishStatus = closure_16.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
      }
      if (cResult[19] !== projectId) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        const items7 = [projectId];
        cResult[19] = projectId;
        cResult[20] = Y;
        cResult[21] = items7;
        let tmp39 = items7;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        tmp39 = cResult[21];
      }
      stateFromStores3 = tmp2(tmp4[50]).useStateFromStores(tmp37, Y, tmp39);
      const _Symbol4 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        const items8 = [ConjureChatStore];
        cResult[22] = items8;
        const tmp43 = items8;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
      }
      if (cResult[23] !== projectId) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        const items9 = [projectId];
        cResult[23] = projectId;
        cResult[24] = tmp46;
        cResult[25] = items9;
        let tmp45 = items9;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        tmp45 = cResult[25];
      }
      const tmp2Result18 = tmp2(tmp4[50]);
      const stateFromStores4 = tmp2(tmp4[50]).useStateFromStores(tmp43, tmp46, tmp45);
      const _Symbol5 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        const items10 = [ConjureChatStore];
        cResult[26] = items10;
        const tmp50 = items10;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
      }
      if (cResult[27] !== projectId) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        const items11 = [projectId];
        cResult[27] = projectId;
        cResult[28] = tmp53;
        cResult[29] = items11;
        let tmp52 = items11;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        tmp52 = cResult[29];
      }
      const tmp2Result19 = tmp2(tmp4[50]);
      const stateFromStores5 = tmp2(tmp4[50]).useStateFromStores(tmp50, tmp53, tmp52);
      const _Symbol6 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        const items12 = [ConjureChatStore];
        cResult[30] = items12;
        const tmp57 = items12;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
      }
      if (cResult[31] !== projectId) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        const items13 = [projectId];
        cResult[31] = projectId;
        cResult[32] = tmp60;
        cResult[33] = items13;
        let tmp59 = items13;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        tmp59 = cResult[33];
      }
      const tmp2Result20 = tmp2(tmp4[50]);
      const stateFromStores6 = tmp2(tmp4[50]).useStateFromStores(tmp57, tmp60, tmp59);
      class P {
        constructor() {
          if (closure_2) {
            tmp = ensureConnection;
            tmp2 = projectId;
            tmp3 = ensureConnection(projectId);
          }
          return;
        }
      }
      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        const items14 = [ConjureChatStore];
        cResult[34] = items14;
        const tmp64 = items14;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
      }
      if (cResult[35] !== projectId) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        const items15 = [projectId];
        cResult[35] = projectId;
        cResult[36] = tmp67;
        cResult[37] = items15;
        let tmp66 = items15;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        tmp66 = cResult[37];
      }
      const tmp2Result21 = tmp2(tmp4[50]);
      const stateFromStores7 = tmp2(tmp4[50]).useStateFromStores(tmp64, tmp67, tmp66);
      const tmp2Result22 = tmp2(tmp4[50]);
      [tmp74, tmp75] = obj3.useState(null);
      let tmp76 = null == tmp74;
      if (!tmp76) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        if (stateFromStores3) {
          class Y {
            constructor() {
              return closure_17.isThinking(projectId);
            }
          }
        }
        tmp76 = tmp77;
      }
      if (!tmp76) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
      }
      if (cResult[38] !== projectId) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        cResult[38] = projectId;
        cResult[39] = tmp79;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
      }
      if (stateFromStores3) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
      }
      const _Symbol7 = Symbol;
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        const items16 = [ConjureConnectionStore];
        cResult[40] = items16;
        const tmp81 = items16;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
      }
      if (cResult[41] !== projectId) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        const items17 = [projectId];
        cResult[41] = projectId;
        cResult[42] = tmp84;
        cResult[43] = items17;
        let tmp83 = items17;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        tmp83 = cResult[43];
      }
      const tmp73 = _slicedToArray(obj3.useState(null), 2);
      const stateFromStores8 = tmp2(tmp4[50]).useStateFromStores(tmp81, tmp84, tmp83);
      const _Symbol8 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
        const items18 = [ConjureConnectionStore];
        cResult[44] = items18;
        const tmp88 = items18;
      } else {
        class Y {
          constructor() {
            return closure_17.isThinking(projectId);
          }
        }
      }
      if (cResult[45] !== projectId) {
        class Ee {
          constructor() {
            return closure_15.isChatStopped(projectId);
          }
        }
        const items19 = [projectId];
        cResult[45] = projectId;
        cResult[46] = Ee;
        cResult[47] = items19;
        let tmp90 = items19;
      } else {
        class Ee {
          constructor() {
            return closure_15.isChatStopped(projectId);
          }
        }
        tmp90 = cResult[47];
      }
      const tmp2Result23 = tmp2(tmp4[50]);
      const stateFromStores9 = tmp2(tmp4[50]).useStateFromStores(tmp88, Ee, tmp90);
      const _Symbol9 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Ee {
          constructor() {
            return closure_15.isChatStopped(projectId);
          }
        }
        const items20 = [ConjureChatStore];
        cResult[48] = items20;
        const tmp94 = items20;
      } else {
        class Ee {
          constructor() {
            return closure_15.isChatStopped(projectId);
          }
        }
      }
      if (cResult[49] !== projectId) {
        class Ee {
          constructor() {
            return closure_15.isChatStopped(projectId);
          }
        }
        const items21 = [projectId];
        cResult[49] = projectId;
        cResult[50] = tmp97;
        cResult[51] = items21;
        let tmp96 = items21;
      } else {
        class Ee {
          constructor() {
            return closure_15.isChatStopped(projectId);
          }
        }
        tmp96 = cResult[51];
      }
      const tmp2Result24 = tmp2(tmp4[50]);
      const stateFromStores10 = tmp2(tmp4[50]).useStateFromStores(tmp94, tmp97, tmp96);
      const _Symbol10 = Symbol;
      if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
        class Ee {
          constructor() {
            return closure_15.isChatStopped(projectId);
          }
        }
        const items22 = [ConjureChatStore];
        cResult[52] = items22;
        const tmp101 = items22;
      } else {
        class Ee {
          constructor() {
            return closure_15.isChatStopped(projectId);
          }
        }
      }
      if (cResult[53] !== projectId) {
        class Ne {
          constructor() {
            return closure_17.isHistoryUnavailable(projectId);
          }
        }
        const items23 = [projectId];
        cResult[53] = projectId;
        cResult[54] = Ne;
        cResult[55] = items23;
        let tmp103 = items23;
      } else {
        class Ne {
          constructor() {
            return closure_17.isHistoryUnavailable(projectId);
          }
        }
        tmp103 = cResult[55];
      }
      const tmp2Result25 = tmp2(tmp4[50]);
      const stateFromStores11 = tmp2(tmp4[50]).useStateFromStores(tmp101, Ne, tmp103);
      if (cResult[56] === stateFromStores8) {
        class Ne {
          constructor() {
            return closure_17.isHistoryUnavailable(projectId);
          }
        }
      }
      const tmp2Result26 = tmp2(tmp4[50]);
      let obj2 = { historyLoaded: stateFromStores10, historyUnavailable: stateFromStores11, connState: stateFromStores8 };
      const chatEmptyStateResult = tmp2(tmp4[79]).chatEmptyState(obj2);
      cResult[56] = stateFromStores8;
      cResult[57] = stateFromStores10;
      cResult[58] = stateFromStores11;
      cResult[59] = chatEmptyStateResult;
      const tmp2Result27 = tmp2(tmp4[79]);
    }
    const tmp2Result17 = tmp2(tmp4[50]);
    const withLivePublishCardResult = tmp2(tmp4[78]).withLivePublishCard(stateFromStores1, stateFromStores2);
    cResult[15] = stateFromStores1;
    cResult[16] = stateFromStores2;
    cResult[17] = withLivePublishCardResult;
    const tmp2Result28 = tmp2(tmp4[78]);
    tmp33 = withLivePublishCardResult;
  }
  class P {
    constructor() {
      if (closure_2) {
        tmp = ensureConnection;
        tmp2 = projectId;
        tmp3 = ensureConnection(projectId);
      }
      return;
    }
  }
  const items24 = [stateFromStores, projectId];
  cResult[3] = stateFromStores;
  cResult[4] = projectId;
  cResult[5] = P;
  cResult[6] = items24;
  tmp15 = items24;
  tmp14 = P;
  const tmp2Result = projectId(stateFromStores[50]);
}) : (function ConjureNativeChat(projectId) {
  projectId = projectId.projectId;
  let num = projectId.transcriptTopInset;
  if (num === undefined) {
    num = 0;
  }
  const onRestoreVersion = projectId.onRestoreVersion;
  let stateFromStores;
  let stateFromStores2;
  let stateFromStores10;
  let render_id;
  let render_id1;
  let stateFromStores12;
  let memo1;
  c14 = undefined;
  c15 = undefined;
  let onToggleChecklist;
  closure_17 = undefined;
  c18 = undefined;
  c19 = undefined;
  let onTogglePlan;
  closure_21 = undefined;
  autoscrollToBottomThreshold = undefined;
  let onPickIdea;
  let conjureReminder;
  closure_25 = undefined;
  closure_26 = undefined;
  c27 = undefined;
  c28 = undefined;
  let canSend;
  let memo2;
  let joined;
  let memo4;
  let memo5;
  c34 = undefined;
  c35 = undefined;
  let bound;
  let ref;
  let callback2;
  let callback3;
  c45 = undefined;
  let callback6;
  closure_49 = undefined;
  let onJumpToReplied;
  let tmp = canSend();
  items = [render_id];
  stateFromStores = projectId(stateFromStores[50]).useStateFromStores(items, () => "active" === render_id.getState(), []);
  const tmp6 = onRestoreVersion(stateFromStores[75])(projectId);
  let obj2 = stateFromStores2;
  const items1 = [stateFromStores, projectId];
  const effect = stateFromStores2.useEffect(() => {
    if (stateFromStores) {
      collapsed(projectId);
    }
  }, items1);
  let obj = projectId(stateFromStores[50]);
  const ackConjureProjectWhileViewing = projectId(stateFromStores[77]).useAckConjureProjectWhileViewing(projectId);
  let obj3 = projectId(stateFromStores[77]);
  const items2 = [closure_17];
  const items3 = [projectId];
  const stateFromStores1 = projectId(stateFromStores[50]).useStateFromStores(items2, () => ConjureChatStore.getMessages(projectId), items3);
  const obj4 = projectId(stateFromStores[50]);
  const items4 = [onToggleChecklist];
  const items5 = [projectId];
  stateFromStores2 = projectId(stateFromStores[50]).useStateFromStores(items4, () => {
    const publishStatus = ConjureProjectStore.getPublishStatus(projectId);
    let state;
    if (publishStatus != null) {
      state = publishStatus.state;
    }
    if (state == null) {
      state = null;
    }
    return state;
  }, items5);
  const items6 = [stateFromStores1, stateFromStores2];
  const memo = stateFromStores2.useMemo(() => conjurePublishCard.withLivePublishCard(stateFromStores1, stateFromStores2), items6);
  const obj5 = projectId(stateFromStores[50]);
  const items7 = [closure_17];
  const items8 = [projectId];
  const stateFromStores3 = projectId(stateFromStores[50]).useStateFromStores(items7, () => ConjureChatStore.isThinking(projectId), items8);
  const obj6 = projectId(stateFromStores[50]);
  const items9 = [closure_17];
  const items10 = [projectId];
  const stateFromStores4 = projectId(stateFromStores[50]).useStateFromStores(items9, () => ConjureChatStore.isCompacting(projectId), items10);
  const obj7 = projectId(stateFromStores[50]);
  const items11 = [closure_17];
  const items12 = [projectId];
  const stateFromStores5 = projectId(stateFromStores[50]).useStateFromStores(items11, () => ConjureChatStore.isSaving(projectId), items12);
  const obj8 = projectId(stateFromStores[50]);
  const items13 = [closure_17];
  const items14 = [projectId];
  const stateFromStores6 = projectId(stateFromStores[50]).useStateFromStores(items13, () => ConjureChatStore.getThinkingActivity(projectId), items14);
  const obj9 = projectId(stateFromStores[50]);
  const items15 = [closure_17];
  const items16 = [projectId];
  const stateFromStores7 = projectId(stateFromStores[50]).useStateFromStores(items15, () => ConjureChatStore.getProjectUsage(projectId), items16);
  const obj10 = projectId(stateFromStores[50]);
  [tmp19, tmp20] = stateFromStores1(stateFromStores2.useState(null), 2);
  c7 = tmp20;
  let tmp21 = null == tmp19;
  if (!tmp21) {
    let tmp22 = stateFromStores3;
    if (stateFromStores3) {
      tmp22 = tmp19 === projectId;
    }
    tmp21 = tmp22;
  }
  if (!tmp21) {
    tmp20(null);
  }
  const items17 = [projectId];
  let tmp25 = stateFromStores3;
  const callback = obj2.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items17);
  if (stateFromStores3) {
    tmp25 = tmp19 === projectId;
  }
  let tmp18 = stateFromStores1(stateFromStores2.useState(null), 2);
  const items18 = [c15];
  const items19 = [projectId];
  const stateFromStores8 = projectId(stateFromStores[50]).useStateFromStores(items18, () => ConjureConnectionStore.getConnState(projectId), items19);
  const tmp26 = c15;
  const tmp2Result = projectId(stateFromStores[50]);
  const items20 = [c15];
  const items21 = [projectId];
  const stateFromStores9 = projectId(stateFromStores[50]).useStateFromStores(items20, () => ConjureConnectionStore.isChatStopped(projectId), items21);
  const tmp2Result16 = projectId(stateFromStores[50]);
  const items22 = [closure_17];
  const items23 = [projectId];
  stateFromStores10 = projectId(stateFromStores[50]).useStateFromStores(items22, () => ConjureChatStore.hasLoadedHistory(projectId), items23);
  const tmp2Result17 = projectId(stateFromStores[50]);
  const items24 = [closure_17];
  const items25 = [projectId];
  const stateFromStores11 = projectId(stateFromStores[50]).useStateFromStores(items24, () => ConjureChatStore.isHistoryUnavailable(projectId), items25);
  const tmp2Result18 = projectId(stateFromStores[50]);
  const chatEmptyStateResult = projectId(stateFromStores[79]).chatEmptyState({ historyLoaded: stateFromStores10, historyUnavailable: stateFromStores11, connState: stateFromStores8 });
  render_id = null;
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const findLastResult = memo.findLast((role) => {
    let tmp = "assistant" === role.role;
    if (tmp) {
      tmp = _undefined3(role);
    }
    return tmp;
  });
  render_id1 = undefined;
  if (findLastResult != null) {
    render_id1 = findLastResult.render_id;
  }
  if (render_id1 == null) {
    render_id1 = null;
  }
  const items26 = [memo];
  obj2.useMemo(() => ConjureTodoState.supersededChecklists(memo), items26);
  const tmp2Result19 = projectId(stateFromStores[79]);
  const items27 = [tmp26];
  const items28 = [projectId];
  stateFromStores12 = projectId(stateFromStores[50]).useStateFromStores(items27, () => {
    const settings = ConjureConnectionStore.getSettings(projectId);
    let secrets;
    if (settings != null) {
      secrets = settings.secrets;
    }
    return secrets;
  }, items28);
  const items29 = [memo, stateFromStores12];
  memo1 = obj2.useMemo(() => ConjureSecretRequestState.secretRequestStatuses(memo, stateFromStores12), items29);
  const tmp2Result20 = projectId(stateFromStores[50]);
  [c14, c15] = stateFromStores1(obj2.useState(() => new Map()), 2);
  onToggleChecklist = obj2.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined2((get) => projectId(stateFromStores[70]).toggleChecklist(get, closure_0, closure_1));
  }, []);
  const items30 = [memo];
  closure_17 = obj2.useMemo(() => conjurePendingPlan.planVersions(memo), items30);
  const tmp17Result = stateFromStores1(obj2.useState(() => new Map()), 2);
  [c18, c19] = stateFromStores1(obj2.useState(() => new Map()), 2);
  onTogglePlan = obj2.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined4((get) => projectId(stateFromStores[81]).togglePlanCard(get, closure_0, closure_1));
  }, []);
  const items31 = [memo];
  closure_21 = obj2.useMemo(() => ConjureChatGrouping.groupChatRows(memo.map((key) => {
    const obj = { key: key.render_id, actor: null, authorId: null, boundary: null, separate: null };
    let str = "assistant";
    if ("user" === key.role) {
      str = "user";
    }
    obj.actor = str;
    let user_id;
    if ("user" === key.role) {
      user_id = key.user_id;
    }
    obj.authorId = user_id;
    render_id = undefined;
    if ("user" !== key.role) {
      render_id = key.render_id;
    }
    obj.boundary = render_id;
    let tmp3 = "assistant" === key.role;
    if (tmp3) {
      let tmp5 = null != key.proposal || null != key.clarification;
      if (!tmp5) {
        tmp5 = "side_reply" === key.kind;
      }
      if (!tmp5) {
        tmp5 = null != key.in_reply_to;
      }
      tmp3 = tmp5;
    }
    obj.separate = tmp3;
    return obj;
  })), items31);
  const items32 = [projectId];
  autoscrollToBottomThreshold = obj2.useCallback(() => {
    const intl = util.intl;
    conjureAttachmentDrafts.sendConjureCardReply(projectId, intl.string(_modDef3849.EMgIuY));
  }, items32);
  const items33 = [projectId];
  onPickIdea = obj2.useCallback((implementation_prompt) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items33);
  const tmp17Result7 = stateFromStores1(obj2.useState(() => new Map()), 2);
  [tmp40, tmp41] = stateFromStores1(onRestoreVersion(stateFromStores[84])(projectId), 2);
  const tmp17Result8 = stateFromStores1(onRestoreVersion(stateFromStores[84])(projectId), 2);
  conjureReminder = projectId(stateFromStores[85]).useConjureReminder(projectId, memo, tmp40);
  const items34 = [projectId];
  closure_25 = obj2.useCallback(() => {
    const intl = util.intl;
    closure_2_14(projectId, intl.string(_modDef3849["t5CN3+"]));
  }, items34);
  const items35 = [projectId];
  closure_26 = obj2.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt, { clarificationAnswers, attachments });
  }, items35);
  const tmp2Result21 = projectId(stateFromStores[85]);
  [c27, c28] = stateFromStores1(obj2.useState(null), 2);
  let tmp45 = tmp44;
  if ("open" !== stateFromStores8) {
    tmp45 = "connecting" === stateFromStores8;
  }
  if (tmp45) {
    tmp45 = !stateFromStores9;
  }
  canSend = tmp45;
  const items36 = [memo];
  memo2 = obj2.useMemo(() => conjurePendingPlan.pendingPlanRenderId(memo), items36);
  const tmp17Result9 = stateFromStores1(obj2.useState(null), 2);
  joined = Array.from(memo1, (arg0) => {
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  }).join(",");
  const items37 = [conjureReminder, tmp45, memo2, joined];
  const items38 = [memo];
  const memo3 = obj2.useMemo(() => ({ reminder: conjureReminder, canSend, pendingPlanId: memo2, secretStatusesKey: joined }), items37);
  memo4 = obj2.useMemo(() => {
    let diff = memo.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp3 = memo[diff];
        if ("assistant" === tmp3.role) {
          if (!turnSettled(tmp3)) {
            break;
          }
        }
        diff = diff - 1;
      }
      return diff;
    }
    return null;
  }, items38);
  const items39 = [memo, memo4];
  memo5 = obj2.useMemo(() => {
    let tmp2;
    if (null != memo4) {
      tmp2 = memo[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      timelineTree = ConjureTimelineTree.buildTimelineTree(tmp2.steps, { turnActive: true });
    }
    return timelineTree;
  }, items39);
  let tmp51 = null != memo5;
  if (tmp51) {
    tmp51 = memo5.steps.length > 0 || memo5.tasks.length > 0;
    const tmp52 = memo5.steps.length > 0 || memo5.tasks.length > 0;
  }
  const items40 = [memo5];
  let memo6 = obj2.useMemo(() => {
    let currentStepResult;
    if (null != memo5) {
      currentStepResult = ConjureTimelineTree.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      describeNodeResult = ConjureTimelineTree.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items40);
  const arr = Array.from(memo1, (arg0) => {
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  });
  [obj19, c34] = stateFromStores1(obj2.useState(null), 2);
  const tmp17Result10 = stateFromStores1(obj2.useState(null), 2);
  [tmp56, c35] = stateFromStores1(obj2.useState(64), 2);
  const callback1 = obj2.useCallback((nativeEvent) => {
    closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    _undefined6((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const tmp17Result11 = stateFromStores1(obj2.useState(64), 2);
  bound = tmp56;
  if (!tmp2Result22.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp56, conjureReminder);
  }
  obj2.useRef(null);
  ref = obj2.useRef(null);
  obj2.useRef(false);
  obj2.useRef(true);
  obj2.useRef(0);
  obj2.useRef(0);
  callback2 = obj2.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback3 = obj2.useCallback(() => {
    const timestamp = Date.now();
    closure_41.current = timestamp + c23;
    closure_42.current = timestamp + 2000;
  }, []);
  const items41 = [projectId, callback3];
  const effect1 = obj2.useEffect(() => {
    closure_40.current = true;
    callback3();
  }, items41);
  const items42 = [stateFromStores10, callback3];
  const effect2 = obj2.useEffect(() => {
    if (stateFromStores10) {
      callback3();
    }
  }, items42);
  const items43 = [projectId];
  const callback4 = obj2.useCallback(() => {
    map1(projectId);
  }, items43);
  const callback5 = obj2.useCallback(() => {
    closure_40.current = false;
  }, []);
  tmp2Result22 = projectId(stateFromStores[44]);
  [tmp68, c45] = stateFromStores1(obj2.useState(false), 2);
  obj2.useRef(null);
  obj2.useRef(0);
  callback6 = obj2.useCallback(() => {
    const current = ref6.current;
    const current2 = ref.current;
    if (null != current) {
      const current3 = ref.current;
      let layout;
      if (current3 != null) {
        layout = current3.getLayout(current);
      }
    }
    let tmp5 = null != current2;
    if (tmp5) {
      tmp5 = null != tmp;
    }
    if (tmp5) {
      tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref7.current;
    }
    _undefined(tmp5);
  }, []);
  const items44 = [callback6];
  const items45 = [callback2, callback6];
  const callback7 = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_38.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback6();
  }, items44);
  const callback8 = obj2.useCallback((arg0, contentHeight) => {
    const timestamp = Date.now();
    let current = ref3.current;
    if (current) {
      current = timestamp < ref4.current;
    }
    if (current) {
      const _Math = Math;
      ref4.current = Math.min(timestamp + c23, ref5.current);
      callback2();
    }
    const current2 = ref.current;
    if (null != current2) {
      if (current2.contentHeight - current2.offsetY - current2.viewportHeight <= c22 * current2.viewportHeight) {
        const obj2 = {};
        const merged = Object.assign(current2);
        obj2.contentHeight = contentHeight;
        const _Math2 = Math;
        obj2.offsetY = Math.max(0, contentHeight - current2.viewportHeight);
        let obj = obj2;
      } else {
        obj = {};
        const merged1 = Object.assign(current2);
        obj.contentHeight = contentHeight;
      }
      tmp8.current = obj;
      if (ref2.current) {
        tmp15.current = false;
        const current3 = ref.current;
        if (current3 != null) {
          current3.scrollToEnd({ animated: true });
        }
      }
      callback6();
    }
  }, items45);
  const items46 = [callback6];
  const memo7 = obj2.useMemo(() => ({ itemVisiblePercentThreshold: projectId(stateFromStores[86]).MIN_VISIBLE_PERCENT }), []);
  const callback9 = obj2.useCallback((arg0) => {
    set = new Set();
    const iter = arg0.viewableItems[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.key) {
        let addResult = set.add(tmp2.key);
      }
      continue;
    }
    _undefined5(set);
    callback6();
  }, items46);
  if (stateFromStores5) {
    const intl3 = tmp2(tmp3[18]).intl;
    memo6 = intl3.string(tmp5(tmp3[19]).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(tmp3[18]).intl;
    memo6 = intl2.string(tmp5(tmp3[19]).xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(tmp3[18]).intl;
    memo6 = intl.string(tmp5(tmp3[19]).L9EDub);
  }
  const items47 = [memo, memo4];
  let tmp75;
  const memo8 = obj2.useMemo(() => {
    if (null == memo4) {
      return null;
    } else if (null == memo[tmp]) {
      return null;
    } else {
      let latestTodosResult = ConjureTimelineTree.latestTodos(tmp3.steps);
      if (null == latestTodosResult) {
        let todos = null;
        if (null != tmp3.todos) {
          todos = null;
          if (tmp3.todos.length > 0) {
            todos = tmp3.todos;
          }
        }
        latestTodosResult = todos;
      }
      return latestTodosResult;
    }
  }, items47);
  if (null != memo4) {
    tmp75 = memo[memo4];
  }
  let checklistLiveResult = null == tmp75;
  if (!checklistLiveResult) {
    checklistLiveResult = tmp2(tmp3[70]).checklistLive(tmp75);
    const tmp2Result23 = tmp2(tmp3[70]);
  }
  if (null != tmp75) {
    const tmp2Result24 = tmp2(tmp3[87]);
    const conjureTurnStartedAtResult = tmp2(tmp3[87]).conjureTurnStartedAt(tmp75);
  }
  const items48 = [memo5];
  let tmp79;
  const memo9 = obj2.useMemo(() => {
    if (null != memo5) {
      let runningTodoAgentsResult = ConjureTodoAgents.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items48);
  if (null != memo4) {
    let render_id2;
    if (memo[memo4] != null) {
      render_id2 = tmp80.render_id;
    }
    tmp79 = render_id2;
  }
  let tmp82 = null != tmp79;
  if (tmp82) {
    tmp82 = null != obj19 && !obj19.has(tmp79) || tmp68;
    const tmp83 = null != obj19 && !obj19.has(tmp79) || tmp68;
  }
  let tmp84 = null;
  if (stateFromStores3) {
    tmp84 = null;
    if (tmp51) {
      tmp84 = null;
      if (tmp82) {
        tmp84 = memo6;
      }
    }
  }
  const items49 = [bound, memo4, callback6];
  const effect3 = obj2.useEffect(() => {
    closure_46.current = memo4;
    closure_47.current = bound;
    closure_0 = requestAnimationFrame(callback6);
    return () => cancelAnimationFrame(closure_0);
  }, items49);
  const items50 = [memo];
  closure_49 = obj2.useMemo(() => {
    const map = new Map();
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if ("assistant" === nextResult.role) {
        if (null != tmp3.in_reply_to) {
          let obj2 = chat_ConjureRepliedMessage;
          let repliedMessageResult = obj2.repliedMessage(memo, tmp3.in_reply_to);
          if (null != repliedMessageResult) {
            let result = map.set(tmp3.render_id, tmp10);
          }
        }
      }
      continue;
    }
    return map;
  }, items50);
  const items51 = [memo];
  onJumpToReplied = obj2.useCallback((arg0) => {
    closure_0 = arg0;
    const findIndexResult = memo.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      closure_40.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items51);
  const items52 = [bound, memo4];
  const items53 = [projectId];
  const callback10 = obj2.useCallback(() => {
    if (null != memo4) {
      closure_40.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items52);
  const items54 = [projectId];
  const callback11 = obj2.useCallback((arg0, arg1) => {
    closure_39.current = true;
    closure_2_14(projectId, arg0, arg1);
  }, items53);
  let connectionLabelResult = null;
  const callback12 = obj2.useCallback(() => {
    __initData(projectId);
  }, items54);
  if ("open" !== stateFromStores8) {
    connectionLabelResult = tmp2(tmp3[89]).connectionLabel(stateFromStores8);
    const tmp2Result25 = tmp2(tmp3[89]);
  }
  const tmp17Result12 = stateFromStores1(obj2.useState(false), 2);
  const obj11 = { style: tmp.container, children: null };
  const conjureControlActive = projectId(stateFromStores[90]).useConjureControlActive(projectId);
  const items55 = [c19(onRestoreVersion(stateFromStores[91]), { thinking: stateFromStores3, bleedBottom: onRestoreVersion(stateFromStores[76])().bottom }), , ];
  const obj12 = { style: tmp.transcriptArea, children: null };
  const obj13 = { clearance: tmp56, children: null };
  const obj14 = { ref, fadingEdgeLength: conjureReminder, removeClippedSubviews: null, viewabilityConfig: null, onViewableItemsChanged: null, onScroll: null, onScrollBeginDrag: null, onContentSizeChange: null, onStartReached: null, scrollEventThrottle: 16, contentInset: null, ListHeaderComponent: null, style: null, contentContainerStyle: null, data: null, extraData: null, maintainVisibleContentPosition: null, keyExtractor: null, ListEmptyComponent: null, renderItem: null };
  const tmp2Result26 = projectId(stateFromStores[90]);
  const tmp94 = ref;
  const tmp2Result27 = projectId(stateFromStores[44]);
  obj14.removeClippedSubviews = projectId(stateFromStores[44]).isIOS() && undefined;
  obj14.viewabilityConfig = memo7;
  obj14.onViewableItemsChanged = callback9;
  obj14.onScroll = callback7;
  obj14.onScrollBeginDrag = callback5;
  obj14.onContentSizeChange = callback8;
  obj14.onStartReached = callback4;
  const tmp95 = projectId(stateFromStores[44]).isIOS() && undefined;
  let tmp96;
  if (tmp2Result28.isIOS()) {
    const obj15 = { top: num };
    tmp96 = obj15;
  }
  obj14.contentInset = tmp96;
  tmp2Result28 = projectId(stateFromStores[44]);
  let tmp93Result = null;
  if (!tmp2Result29.isIOS()) {
    tmp93Result = null;
    if (num > 0) {
      const obj16 = { style: null };
      const obj17 = { height: num };
      obj16.style = obj17;
      tmp93Result = tmp93(tmp92, obj16);
    }
  }
  obj14.ListHeaderComponent = tmp93Result;
  const items56 = [tmp.transcript, ];
  tmp2Result29 = projectId(stateFromStores[44]);
  const isIOSResult = projectId(stateFromStores[44]).isIOS();
  let tmp99 = !isIOSResult;
  if (!isIOSResult) {
    const obj18 = { marginBottom: tmp56 - bound };
    tmp99 = obj18;
  }
  items56[1] = tmp99;
  obj14.style = items56;
  const items57 = [tmp.transcriptContent, ];
  const tmp2Result30 = projectId(stateFromStores[44]);
  items57[1] = { paddingBottom: bound + onRestoreVersion(stateFromStores[10]).space.PX_8 };
  obj14.contentContainerStyle = items57;
  obj14.data = memo;
  obj14.extraData = memo3;
  obj14.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
  obj14.keyExtractor = function keyExtractor(render_id) {
    return render_id.render_id;
  };
  let tmp100 = "loading" === chatEmptyStateResult;
  if (tmp100) {
    obj14.ListEmptyComponent = null;
    obj14.renderItem = function renderItem(arg0) {
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: null, first: null, isNewest: null, hostsReminder: null, reminder: null, checklistSuperseded: null, secretRequestStatus: null, checklistExpanded: null, onToggleChecklist: null, planVersion: null, planSuperseded: null, planExpanded: null, onTogglePlan: null, replied: null, onJumpToReplied: null, onApprovePlan: null, onPickIdea: null, onAskForIdeas: null, onAnswerClarification: null, clarificationDismissed: null, onDismissClarification: null, onRestoreVersion: null };
      let flag = closure_21[index];
      if (flag == null) {
        flag = true;
      }
      obj.groupStart = flag;
      obj.first = 0 === index;
      obj.isNewest = item.render_id === render_id;
      obj.hostsReminder = item.render_id === render_id1;
      let tmp3 = null;
      if (item.render_id === render_id1) {
        tmp3 = conjureReminder;
      }
      obj.reminder = tmp3;
      obj.checklistSuperseded = set.has(item.render_id);
      let str = memo1.get(item.render_id);
      if (str == null) {
        str = "open";
      }
      obj.secretRequestStatus = str;
      obj.checklistExpanded = ConjureTodoState.checklistExpanded(c14, item.render_id, set.has(item.render_id));
      obj.onToggleChecklist = onToggleChecklist;
      value = closure_17.get(item.render_id);
      let version;
      if (value != null) {
        version = value.version;
      }
      obj.planVersion = version;
      value3 = closure_17.get(item.render_id);
      let superseded;
      if (value3 != null) {
        superseded = value3.superseded;
      }
      obj.planSuperseded = true === superseded;
      value4 = closure_17.get(item.render_id);
      let superseded1;
      if (value4 != null) {
        superseded1 = value4.superseded;
      }
      obj.planExpanded = conjurePendingPlan.planCardExpanded(c18, item.render_id, true === superseded1);
      obj.onTogglePlan = onTogglePlan;
      obj.replied = closure_49.get(item.render_id);
      obj.onJumpToReplied = onJumpToReplied;
      let tmp14;
      if (closure_29) {
        if (item.render_id === memo2) {
          tmp14 = closure_22;
        }
      }
      obj.onApprovePlan = tmp14;
      obj.onPickIdea = onPickIdea;
      let tmp16;
      if (closure_29) {
        tmp16 = closure_25;
      }
      obj.onAskForIdeas = tmp16;
      let tmp17;
      if (closure_29) {
        tmp17 = closure_26;
      }
      obj.onAnswerClarification = tmp17;
      let tmp18 = null != item.clarification;
      if (tmp18) {
        tmp18 = item.clarification.id === c27;
      }
      obj.clarificationDismissed = tmp18;
      obj.onDismissClarification = onDismissClarification;
      let tmp20;
      if (!stateFromStores3) {
        tmp20 = onRestoreVersion;
      }
      obj.onRestoreVersion = tmp20;
      return closure_2_19(closure_40, obj);
    };
    obj13.children = tmp93(tmp2(tmp3[92]).FlashList, obj14);
    const items58 = [tmp93(tmp94, obj13), , ];
    let tmp93Result5 = null;
    if (tmp25) {
      const obj22 = { projectId };
      tmp93Result5 = tmp93(tmp5(tmp3[93]), obj22);
    }
    items58[1] = tmp93Result5;
    let tmp93Result6 = null;
    if (null != tmp84) {
      const obj23 = { line: tmp84, onJumpToActivity: callback10, bottom: tmp5(tmp3[10]).space.PX_12 + tmp56, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
      tmp93Result6 = tmp93(tmp5(tmp3[94]), obj23);
      const tmp5Result = tmp5(tmp3[94]);
    }
    items58[2] = tmp93Result6;
    obj12.children = items58;
    items55[1] = tmp91(tmp92, obj12);
    const obj24 = { style: tmp.bottomStack, onLayout: callback1, children: null };
    const obj25 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, compacting: stateFromStores4, saving: stateFromStores5, recalling: null, activity: null, projectUsage: null, connLabel: null, controlling: null, connFailed: null, thinkingOpen: null, onToggleThinking: null };
    if (tmp100) {
      tmp100 = 0 === memo.length;
    }
    obj25.recalling = tmp100;
    obj25.activity = stateFromStores6;
    obj25.projectUsage = stateFromStores7;
    obj25.connLabel = connectionLabelResult;
    obj25.controlling = conjureControlActive;
    obj25.connFailed = "failed" === stateFromStores8;
    obj25.thinkingOpen = tmp25;
    obj25.onToggleThinking = callback;
    const items59 = [tmp93(tmp5(tmp3[95]), obj25), , ];
    let tmp93Result7 = null;
    if (null != tmp6) {
      const obj26 = { style: tmp.incompleteNotice, children: null };
      ({ message: obj46.message, onDismiss: obj46.onDismiss } = tmp6);
      obj26.children = tmp93(tmp2(tmp3[96]).NewInlineNotice, { type: "warning", role: "status", message: null, onDismiss: null });
      tmp93Result7 = tmp93(tmp92, obj26);
      const obj27 = { type: "warning", role: "status", message: null, onDismiss: null };
    }
    items59[1] = tmp93Result7;
    const obj28 = { projectId, canSend: tmp45, running: stateFromStores3, stopped: stateFromStores9, onSend: callback11, onInterrupt: null, onDraftHasTextChange: null };
    let tmp108;
    const tmp5Result3 = tmp5(tmp3[95]);
    if (stateFromStores3) {
      tmp108 = callback12;
    }
    obj28.onInterrupt = tmp108;
    obj28.onDraftHasTextChange = tmp41;
    items59[2] = tmp93(tmp5(tmp3[97]), obj28);
    obj24.children = items59;
    items55[2] = tmp91(tmp92, obj24);
    obj11.children = items55;
    return tmp91(tmp92, obj11);
  } else {
    const obj29 = { style: tmp.placeholder, children: null };
    const intl4 = tmp2(tmp3[18]).intl;
    if ("unavailable" === chatEmptyStateResult) {
      let AyiQEp = tmp5(tmp3[19]).Td4Sf4;
    } else {
      AyiQEp = tmp5(tmp3[19]).AyiQEp;
    }
    const obj30 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(AyiQEp) };
    obj29.children = tmp93(tmp2(tmp3[20]).Text, obj30);
    tmp93(tmp92, obj29);
  }
});