// discord_app/modules/conjure/chat/native/ConjureNativeChat.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _modDef3827 from "../../intl/ConjureUntranslated.messages.js";
import MarkupUtilsDefault from "../../../markup/MarkupUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05387_LinearGradient.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import _modDef6245 from "../../../../../_runtime/metro/06245__.js";
import ConjureDesignFeedback from "../../design_feedback/ConjureDesignFeedback.tsx";
import ConjureHistoryFormat from "../../history/ConjureHistoryFormat.tsx";
import ConjureVersionRestoreConfirm from "../../history/native/ConjureVersionRestoreConfirm.tsx";
import ConjureNativeStatusLineDefault from "../../agent_activity/native/ConjureNativeStatusLine.tsx";
import ConjureMessageAuthor from "ConjureMessageAuthor.tsx";
import ConjureMessageActionSheet from "ConjureMessageActionSheet.tsx";
import useConjureAttachmentImage from "../useConjureAttachmentImage.tsx";
import conjurePlanFormat from "../../plan/conjurePlanFormat.tsx";
import conjurePlanWidget2 from "../../plan/conjurePlanWidget.tsx";
import useConjurePlanBotPreviewItems from "../../plan/useConjurePlanBotPreviewItems.tsx";
import ConjureNativeCardSurfaceDefault from "../../shared/native/ConjureNativeCardSurface.tsx";
import ConjureNativeCollapsibleSection from "../../shared/native/ConjureNativeCollapsibleSection.tsx";
import ConjurePlanTypeTagsDefault from "../../plan/native/ConjurePlanTypeTags.tsx";
import conjurePlanTags from "../../plan/conjurePlanTags.tsx";
import ConjureNativeMarkdown from "ConjureNativeMarkdown.tsx";
import ConjurePlanAutomodExamplesDefault from "../../plan/native/ConjurePlanAutomodExamples.tsx";
import ConjurePlanBotPreviewDefault from "../../plan/native/ConjurePlanBotPreview.tsx";
import ConjurePlanWidgetDefault from "../../plan/native/ConjurePlanWidget.tsx";
import ConjureTimelineTree from "../../agent_activity/ConjureTimelineTree.tsx";
import ConjureNativeStepImagesDefault from "ConjureNativeStepImages.tsx";
import ConjureSubagentMark from "../../agent_activity/native/ConjureSubagentMark.tsx";
import ConjureTodoAgents from "../../agent_activity/ConjureTodoAgents.tsx";
import ConjureChatRestore from "../../history/ConjureChatRestore.tsx";
import ConjurePublishNoticeLineDefault from "../../publish/native/ConjurePublishNoticeLine.tsx";
import conjurePublishCard from "../../publish/conjurePublishCard.tsx";
import ConjureIdeasOfferDefault from "../../reminders/native/ConjureIdeasOffer.tsx";
import ConjureTodoState from "../../agent_activity/ConjureTodoState.tsx";
import conjureAttachmentDrafts from "../conjureAttachmentDrafts.tsx";
import ConjureSecretRequestState from "../../secrets/ConjureSecretRequestState.tsx";
import conjurePendingPlan from "../../plan/conjurePendingPlan.tsx";
import ConjureChatGrouping from "../ConjureChatGrouping.tsx";
import chat_ConjureRepliedMessage from "../ConjureRepliedMessage.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";
import ConjureConnectionStore_mod from "../../connection/ConjureConnectionStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import ConjureChatStore from "../ConjureChatStore.tsx";

const ConjureNativeCollapsibleSectionDefault = ConjureNativeCollapsibleSection;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
let ConjureConnectionStore = fn(13072);
({
  ensureConnection: closure_9,
  getAttachmentUrl: c10,
  interruptTurn: closure_11,
  loadOlderHistory: closure_12,
  sendUserMessage: map1,
} = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
let turnSettled = fn(13073).turnSettled;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
let diff = fn(16933).MESSAGE_CONTENT_INSET - fn(16933).MESSAGE_EDGE_INSET;
let c21 = 0.2;
let c22 = 500;
let c23 = 52;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, ,];
let obj2 = _modDef683(BLACK);
items[1] = _modDef683(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(5090);
let obj = {
  container: { flex: 1 },
  transcript: { flex: 1 },
  maskSolid: { flex: 1, backgroundColor: BLACK },
  maskFade: { height: 52 },
  transcriptArea: { flex: 1, position: "relative" },
  transcriptContent: null,
  bottomStack: null,
  row: null,
  rowGroupStart: null,
  avatar: null,
  spoken: null,
  avatarSpoken: null,
  avatarSpokenReplying: null,
  reminderSlot: null,
  reminderTip: null,
  reminderSeparated: null,
  header: null,
  planActions: null,
  planReplyHint: null,
  designImage: null,
  designPlaceholder: null,
  ideaCards: null,
  activityBox: null,
  activityDetail: null,
  stepDetail: null,
  stepCommand: null,
  attachmentPills: null,
  agentReaction: null,
  agentReactionEmoji: null,
  attachmentPill: null,
  placeholder: null,
};
const alphaResult = _modDef683(BLACK).alpha(0.2);
obj.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj.row = {
  position: "relative",
  paddingLeft: fn(16933).MESSAGE_CONTENT_INSET,
  paddingRight: fn(16933).MESSAGE_EDGE_INSET,
  paddingVertical: 2,
  gap: PX_8,
};
obj.rowGroupStart = { marginTop: PX_12 };
const rect = { position: "absolute", left: fn(16933).MESSAGE_EDGE_INSET, top: 2 };
obj.avatar = rect;
obj.spoken = { position: "relative", gap: PX_8 };
const rect1 = { left: fn(16933).MESSAGE_EDGE_INSET - fn(16933).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj5 = {
  position: "relative",
  paddingLeft: fn(16933).MESSAGE_CONTENT_INSET,
  paddingRight: fn(16933).MESSAGE_EDGE_INSET,
  paddingVertical: 2,
  gap: PX_8,
};
obj.avatarSpokenReplying = { top: fn(16935).REPLY_PREVIEW_HEIGHT + PX_8 };
obj.reminderSlot = { marginTop: -PX_8 };
obj.reminderTip = { paddingTop: PX_8 };
obj.reminderSeparated = { paddingTop: PX_12 + 4 };
let obj6 = { top: fn(16935).REPLY_PREVIEW_HEIGHT + PX_8 };
let obj7 = { paddingTop: PX_12 + 4 };
obj.header = { marginBottom: -nativeDefault.space.PX_4 };
let obj8 = { marginBottom: -nativeDefault.space.PX_4 };
obj.planActions = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_8,
  columnGap: nativeDefault.space.PX_12,
};
obj.planReplyHint = { flexShrink: 1 };
let obj9 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  rowGap: nativeDefault.space.PX_8,
  columnGap: nativeDefault.space.PX_12,
};
obj.designImage = {
  width: "100%",
  aspectRatio: 1.6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj10 = {
  width: "100%",
  aspectRatio: 1.6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj.designPlaceholder = {
  width: "100%",
  aspectRatio: 1.6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignItems: "center",
  justifyContent: "center",
};
obj.ideaCards = { gap: PX_8 };
obj.activityBox = { marginLeft: -diff };
obj.activityDetail = { paddingLeft: diff };
let obj11 = {
  width: "100%",
  aspectRatio: 1.6,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  alignItems: "center",
  justifyContent: "center",
};
obj.stepDetail = {
  marginTop: nativeDefault.space.PX_4,
  paddingLeft: nativeDefault.space.PX_12,
  borderLeftWidth: 2,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  gap: 2,
};
obj.stepCommand = { fontFamily: fn(1085).Fonts.CODE_NORMAL, fontSize: 12, lineHeight: 18 };
let obj12 = {
  marginTop: nativeDefault.space.PX_4,
  paddingLeft: nativeDefault.space.PX_12,
  borderLeftWidth: 2,
  borderLeftColor: nativeDefault.colors.BORDER_SUBTLE,
  gap: 2,
};
obj.attachmentPills = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj13 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj.agentReaction = {
  alignSelf: "flex-start",
  alignItems: "center",
  justifyContent: "center",
  marginTop: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_6,
  paddingVertical: 2,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj.agentReactionEmoji = { width: 18, height: 18 };
let obj14 = {
  alignSelf: "flex-start",
  alignItems: "center",
  justifyContent: "center",
  marginTop: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_6,
  paddingVertical: 2,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj.attachmentPill = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
let obj15 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
obj.placeholder = {
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_24,
};
let closure_28 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PlanDesign(arg0) {
      const cResult = c.c(10);
      ({ projectId, design } = arg0);
      let designPlaceholder = closure_28();
      const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
      ({ src, handleError } = conjureAttachmentImage);
      if (conjureAttachmentImage.gone) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(_modDef3827["3/aHX6"]);
          cResult[0] = stringResult;
          let first = stringResult;
        } else {
          first = cResult[0];
        }
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl2 = util.intl;
          obj3.children = intl2.string(_modDef3827.X15LLY);
          const tmp12 = collapsedCategories(Text_Text.Text, obj3);
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
                  obj4.children = intl3.string(_modDef3827.nR4B8P);
                  const tmp25 = collapsedCategories(Text_Text.Text, obj4);
                  cResult[7] = tmp25;
                  let tmp22 = tmp25;
                } else {
                  tmp22 = cResult[7];
                }
                if (cResult[8] !== cResult[6]) {
                  const obj5 = { direction: "vertical", spacing: 4, children: null };
                  items = [tmp9, tmp13, tmp22];
                  obj5.children = items;
                  const tmp28 = closure_1_19(Stack_Stack.Stack, obj5);
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
          obj6.children = collapsedCategories(hasOwnProperty, obj7);
          let tmp17 = collapsedCategories(React5, obj6);
        } else {
          const obj8 = {
            source: null,
            style: null,
            resizeMode: "cover",
            onError: null,
            accessible: true,
            accessibilityRole: "image",
            accessibilityLabel: null,
          };
          const obj9 = { uri: src };
          obj8.source = obj9;
          obj8.style = designPlaceholder.designImage;
          obj8.onError = handleError;
          obj8.accessibilityLabel = first;
          tmp17 = collapsedCategories(FastImageDefault, obj8);
        }
        cResult[2] = handleError;
        cResult[3] = src;
        src = designPlaceholder.designImage;
        cResult[4] = src;
        designPlaceholder = designPlaceholder.designPlaceholder;
        cResult[5] = designPlaceholder;
        cResult[6] = tmp17;
      }
    }
  : function PlanDesign(arg0) {
      ({ projectId, design } = arg0);
      const tmp = closure_28();
      const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
      const src = conjureAttachmentImage.src;
      if (conjureAttachmentImage.gone) {
        return null;
      } else {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3827["3/aHX6"]);
        const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
        const intl2 = util.intl;
        obj2.children = intl2.string(_modDef3827.X15LLY);
        items = [collapsedCategories(Text_Text.Text, obj2), ,];
        if (null == src) {
          const obj3 = { style: tmp.designPlaceholder, children: null };
          const obj4 = { size: "small", accessibilityLabel: stringResult };
          obj3.children = collapsedCategories(hasOwnProperty, obj4);
          let tmp9Result = collapsedCategories(React5, obj3);
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
          obj5.style = tmp.designImage;
          obj5.onError = tmp5;
          obj5.accessibilityLabel = stringResult;
          tmp9Result = collapsedCategories(FastImageDefault, obj5);
        }
        const obj7 = { direction: "vertical", spacing: 4, children: null };
        items[1] = tmp9Result;
        const obj8 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl3 = util.intl;
        obj8.children = intl3.string(_modDef3827.nR4B8P);
        items[2] = collapsedCategories(Text_Text.Text, obj8);
        obj7.children = items;
        return closure_1_19(Stack_Stack.Stack, obj7);
      }
    };
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProposalCard(arg0) {
      const cResult = c.c(64);
      ({ projectId, proposal, version, superseded, expanded, onToggleExpanded, onApprove } = arg0);
      const tmp6 = closure_28();
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
      const automod = proposal.automod;
      const conjurePlanWidget = conjurePlanWidget2.useConjurePlanWidget(projectId, proposal);
      const tmpResult = conjurePlanWidget2;
      const conjurePlanBotExchanges = useConjurePlanBotPreviewItems.useConjurePlanBotExchanges(proposal);
      ({ botInteraction, botExchanges } = conjurePlanBotExchanges);
      const tmp13 = ConjureNativeCardSurfaceDefault;
      const tmp14 = ConjureNativeCollapsibleSectionDefault;
      if (cResult[2] === (undefined !== superseded && superseded)) {
        if (cResult[3] === version) {
          if (cResult[5] !== tmp4) {
            let tmp19 = null;
            if (tmp4) {
              const obj2 = { children: null };
              const intl3 = util.intl;
              obj2.children = intl3.string(_modDef3827.hF2c41);
              tmp19 = collapsedCategories(ConjureNativeCollapsibleSection.ConjureNativeCollapsibleMeta, obj2);
            }
            cResult[5] = tmp4;
            cResult[6] = tmp19;
            let tmp18 = tmp19;
          } else {
            tmp18 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = util.intl;
            const stringResult = intl4.string(_modDef3827.yD8EJS);
            const intl5 = util.intl;
            const stringResult1 = intl5.string(_modDef3827.nSPGNb);
            cResult[7] = stringResult;
            cResult[8] = stringResult1;
            let tmp23 = stringResult1;
            let tmp22 = stringResult;
          } else {
            tmp22 = cResult[7];
            tmp23 = cResult[8];
          }
          const Stack = Stack_Stack.Stack;
          if (cResult[9] === botInteraction) {
            if (cResult[10] === proposal) {
              if (cResult[11] === tmp4) {
                let tmp26 = cResult[12];
              }
              if (cResult[13] !== tmp8) {
                let tmp31 = null;
                if ("" !== tmp8) {
                  let obj3 = { direction: "vertical", spacing: 4, children: null };
                  const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                  const intl13 = util.intl;
                  obj4.children = intl13.string(_modDef3827.iNS4dl);
                  items = [collapsedCategories(Text_Text.Text, obj4)];
                  const obj5 = { variant: "text-md/normal", color: "text-default", children: tmp8 };
                  items[1] = collapsedCategories(Text_Text.Text, obj5);
                  obj3.children = items;
                  tmp31 = closure_1_19(Stack_Stack.Stack, obj3);
                }
                cResult[13] = tmp8;
                cResult[14] = tmp31;
                let tmp30 = tmp31;
              } else {
                tmp30 = cResult[14];
              }
              if ("" === trimmed) {
                const intl6 = util.intl;
                let stringResult2 = intl6.string(_modDef3827["0+RUWx"]);
              } else {
                stringResult2 = MarkupUtilsDefault.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS);
                const tmp12Result = MarkupUtilsDefault;
              }
              if (cResult[15] !== stringResult2) {
                const obj6 = { variant: "text-md/normal", color: "text-default", children: stringResult2 };
                const tmp35 = collapsedCategories(Text_Text.Text, obj6);
                cResult[15] = stringResult2;
                cResult[16] = tmp35;
                let tmp33 = tmp35;
              } else {
                tmp33 = cResult[16];
              }
              if (cResult[17] !== automod) {
                let tmp37 = null;
                if (null != automod) {
                  tmp37 = null;
                  if (automod.examples.length > 0) {
                    const obj7 = { automod };
                    tmp37 = collapsedCategories(ConjurePlanAutomodExamplesDefault, obj7);
                  }
                }
                cResult[17] = automod;
                cResult[18] = tmp37;
                let tmp36 = tmp37;
              } else {
                tmp36 = cResult[18];
              }
              if (cResult[19] === automod) {
                if (cResult[20] === projectId) {
                  if (cResult[21] === proposal.design_image) {
                    let tmp39 = cResult[22];
                  }
                  if (cResult[23] === botExchanges) {
                    if (cResult[24] === projectId) {
                      let tmp43 = cResult[25];
                    }
                    if (cResult[26] === automod) {
                      if (cResult[27] === conjurePlanWidget) {
                        let tmp46 = cResult[28];
                      }
                      if (cResult[29] !== proposal.changes) {
                        let tmp54 = null;
                        if (proposal.changes.length > 0) {
                          const obj8 = { direction: "vertical", spacing: 4, children: null };
                          const obj9 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                          const intl7 = util.intl;
                          obj9.children = intl7.string(_modDef3827["5+mG1z"]);
                          const items1 = [collapsedCategories(Text_Text.Text, obj9)];
                          const changes = proposal.changes;
                          items1[1] = changes.map((item, index) =>
                            closure_1_18(
                              require("Text/Text").Text,
                              { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item },
                              index,
                            ),
                          );
                          obj8.children = items1;
                          tmp54 = closure_1_19(Stack_Stack.Stack, obj8);
                        }
                        cResult[29] = proposal.changes;
                        cResult[30] = tmp54;
                        let tmp53 = tmp54;
                      } else {
                        tmp53 = cResult[30];
                      }
                      if (cResult[31] !== proposal.commands) {
                        let tmp58 = null;
                        if (proposal.commands.length > 0) {
                          const obj10 = { direction: "vertical", spacing: 4, children: null };
                          const obj11 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                          const intl8 = util.intl;
                          obj11.children = intl8.string(util.t["0hKkS+"]);
                          const items2 = [collapsedCategories(Text_Text.Text, obj11)];
                          const commands = proposal.commands;
                          items2[1] = commands.map((name, index) => {
                            const obj = {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: "" + require("conjurePlanFormat").conjurePlanCommandPrefix(name) + name.name,
                            };
                            const children = [closure_1_18(require("Text/Text").Text, obj)];
                            let tmp3Result = null;
                            if (null != name.description) {
                              tmp3Result = null;
                              if ("" !== name.description) {
                                const obj3 = {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: name.description,
                                };
                                tmp3Result = closure_1_18(require("Text/Text").Text, obj3);
                              }
                            }
                            children[1] = tmp3Result;
                            return closure_1_19(closure_1_7, { children }, index);
                          });
                          obj10.children = items2;
                          tmp58 = closure_1_19(Stack_Stack.Stack, obj10);
                        }
                        cResult[31] = proposal.commands;
                        cResult[32] = tmp58;
                        let tmp57 = tmp58;
                      } else {
                        tmp57 = cResult[32];
                      }
                      let tmp61 = null;
                      if (mapped.length > 0) {
                        const obj12 = { direction: "vertical", spacing: 4, children: null };
                        const obj13 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                        const intl9 = util.intl;
                        obj13.children = intl9.string(_modDef3827["2UbW6r"]);
                        const items3 = [collapsedCategories(Text_Text.Text, obj13)];
                        const obj14 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
                        items3[1] = collapsedCategories(Text_Text.Text, obj14);
                        obj12.children = items3;
                        tmp61 = closure_1_19(Stack_Stack.Stack, obj12);
                      }
                      let tmp64 = null;
                      if (mapped1.length > 0) {
                        const obj15 = { direction: "vertical", spacing: 4, children: null };
                        const obj16 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                        const intl10 = util.intl;
                        obj16.children = intl10.string(_modDef3827["7TKfpj"]);
                        const items4 = [collapsedCategories(Text_Text.Text, obj16)];
                        const obj17 = {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: mapped1.join(", "),
                        };
                        items4[1] = collapsedCategories(Text_Text.Text, obj17);
                        obj15.children = items4;
                        tmp64 = closure_1_19(Stack_Stack.Stack, obj15);
                      }
                      if (cResult[33] === onApprove) {
                        if (cResult[34] === tmp6) {
                          if (cResult[35] === tmp4) {
                            let tmp67 = cResult[36];
                          }
                          if (cResult[37] === Stack) {
                            if (cResult[38] === tmp26) {
                              if (cResult[39] === tmp30) {
                                if (cResult[40] === tmp33) {
                                  if (cResult[41] === tmp36) {
                                    if (cResult[42] === tmp39) {
                                      if (cResult[43] === tmp43) {
                                        if (cResult[44] === tmp46) {
                                          if (cResult[45] === tmp53) {
                                            if (cResult[46] === tmp57) {
                                              if (cResult[47] === tmp61) {
                                                if (cResult[48] === tmp64) {
                                                  if (cResult[49] === tmp67) {
                                                    let tmp72 = cResult[50];
                                                  }
                                                  if (cResult[51] === tmp14) {
                                                    if (cResult[52] === tmp5) {
                                                      if (cResult[53] === onToggleExpanded) {
                                                        if (cResult[54] === tmp4) {
                                                          if (cResult[55] === tmp72) {
                                                            if (cResult[56] === tmp15) {
                                                              if (cResult[57] === tmp18) {
                                                                if (cResult[58] === tmp22) {
                                                                  if (cResult[59] === tmp23) {
                                                                    let tmp75 = cResult[60];
                                                                  }
                                                                  if (cResult[61] === tmp13) {
                                                                    if (cResult[62] === tmp75) {
                                                                      let tmp78 = cResult[63];
                                                                    }
                                                                    return tmp78;
                                                                  }
                                                                  const obj18 = { children: tmp75 };
                                                                  const tmp80 = collapsedCategories(tmp13, obj18);
                                                                  cResult[61] = tmp13;
                                                                  cResult[62] = tmp75;
                                                                  cResult[63] = tmp80;
                                                                  tmp78 = tmp80;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const obj19 = {
                                                    title: tmp15,
                                                    meta: tmp18,
                                                    superseded: tmp4,
                                                    expanded: tmp5,
                                                    onToggleExpanded,
                                                    showLabel: tmp22,
                                                    hideLabel: tmp23,
                                                    children: tmp72,
                                                  };
                                                  const tmp77 = collapsedCategories(tmp14, obj19);
                                                  cResult[51] = tmp14;
                                                  cResult[52] = tmp5;
                                                  cResult[53] = onToggleExpanded;
                                                  cResult[54] = tmp4;
                                                  cResult[55] = tmp72;
                                                  cResult[56] = tmp15;
                                                  cResult[57] = tmp18;
                                                  cResult[58] = tmp22;
                                                  cResult[59] = tmp23;
                                                  cResult[60] = tmp77;
                                                  tmp75 = tmp77;
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
                          const obj20 = { direction: "vertical", spacing: 8, children: null };
                          const items5 = [
                            tmp26,
                            tmp30,
                            tmp33,
                            tmp36,
                            tmp39,
                            tmp43,
                            tmp46,
                            tmp53,
                            tmp57,
                            tmp61,
                            tmp64,
                            tmp67,
                          ];
                          obj20.children = items5;
                          const tmp74 = closure_1_19(Stack, obj20);
                          cResult[37] = Stack;
                          cResult[38] = tmp26;
                          cResult[39] = tmp30;
                          cResult[40] = tmp33;
                          cResult[41] = tmp36;
                          cResult[42] = tmp39;
                          cResult[43] = tmp43;
                          cResult[44] = tmp46;
                          cResult[45] = tmp53;
                          cResult[46] = tmp57;
                          cResult[47] = tmp61;
                          cResult[48] = tmp64;
                          cResult[49] = tmp67;
                          cResult[50] = tmp74;
                          tmp72 = tmp74;
                        }
                      }
                      let tmp68 = null;
                      if (null != onApprove) {
                        tmp68 = null;
                        if (!tmp4) {
                          const obj21 = { style: tmp6.planActions, children: null };
                          const obj22 = { text: null, variant: "primary", onPress: null };
                          const intl11 = util.intl;
                          obj22.text = intl11.string(_modDef3827["6S+wRM"]);
                          obj22.onPress = onApprove;
                          const items6 = [collapsedCategories(components_Button_Button.Button, obj22)];
                          const obj23 = {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            style: tmp6.planReplyHint,
                            children: null,
                          };
                          const intl12 = util.intl;
                          obj23.children = intl12.string(_modDef3827.IZoqbR);
                          items6[1] = collapsedCategories(Text_Text.Text, obj23);
                          obj21.children = items6;
                          tmp68 = closure_1_19(React5, obj21);
                        }
                      }
                      cResult[33] = onApprove;
                      cResult[34] = tmp6;
                      cResult[35] = tmp4;
                      cResult[36] = tmp68;
                      tmp67 = tmp68;
                    }
                    let tmp47 = null;
                    if (null == automod) {
                      tmp47 = null;
                      if (null != conjurePlanWidget) {
                        const obj24 = {};
                        const merged = Object.assign(conjurePlanWidget);
                        tmp47 = collapsedCategories(ConjurePlanWidgetDefault, obj24);
                        const tmp12Result3 = ConjurePlanWidgetDefault;
                      }
                    }
                    cResult[26] = automod;
                    cResult[27] = conjurePlanWidget;
                    cResult[28] = tmp47;
                    tmp46 = tmp47;
                  }
                  let tmp44 = null;
                  if (botExchanges.length > 0) {
                    const obj25 = { projectId, exchanges: botExchanges };
                    tmp44 = collapsedCategories(ConjurePlanBotPreviewDefault, obj25);
                  }
                  cResult[23] = botExchanges;
                  cResult[24] = projectId;
                  cResult[25] = tmp44;
                  tmp43 = tmp44;
                }
              }
              let tmp40 = null;
              if (null == automod) {
                tmp40 = null;
                if (null != proposal.design_image) {
                  const obj26 = { projectId, design: proposal.design_image };
                  tmp40 = collapsedCategories(closure_29, obj26);
                }
              }
              cResult[19] = automod;
              cResult[20] = projectId;
              cResult[21] = proposal.design_image;
              cResult[22] = tmp40;
              tmp39 = tmp40;
            }
          }
          let tmp27 = null;
          if (!tmp4) {
            const obj27 = { tags: null };
            const tmp12Result4 = ConjurePlanTypeTagsDefault;
            obj27.tags = conjurePlanTags.getConjurePlanTags(proposal, botInteraction);
            tmp27 = collapsedCategories(tmp12Result4, obj27);
            const tmpResult4 = conjurePlanTags;
          }
          cResult[9] = botInteraction;
          cResult[10] = proposal;
          cResult[11] = tmp4;
          cResult[12] = tmp27;
          tmp26 = tmp27;
        }
      }
      if (!(undefined !== superseded && superseded)) {
        const intl = util.intl;
        let stringResult3 = intl.string(_modDef3827["3b6e7o"]);
        cResult[2] = tmp4;
        cResult[3] = version;
        cResult[4] = stringResult3;
      }
      const intl2 = util.intl;
      stringResult3 = intl2.formatToPlainString(_modDef3827.YZ3qJs, { version });
      const tmpResult3 = useConjurePlanBotPreviewItems;
    }
  : function ProposalCard(expanded) {
      ({ projectId, proposal, version, superseded } = expanded);
      if (superseded === undefined) {
        superseded = false;
      }
      let flag = expanded.expanded;
      if (flag === undefined) {
        flag = true;
      }
      const onApprove = expanded.onApprove;
      const tmp = closure_28();
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
      const automod = proposal.automod;
      const conjurePlanWidget = conjurePlanWidget2.useConjurePlanWidget(projectId, proposal);
      let tmp3Result = conjurePlanWidget2;
      const conjurePlanBotExchanges = useConjurePlanBotPreviewItems.useConjurePlanBotExchanges(proposal);
      const botExchanges = conjurePlanBotExchanges.botExchanges;
      const tmp3Result3 = useConjurePlanBotPreviewItems;
      if (superseded) {
        if (null != version) {
          const intl2 = util.intl;
          let obj = { version };
          let formatToPlainStringResult = intl2.formatToPlainString(_modDef3827.YZ3qJs, obj);
        }
        const obj2 = {
          title: formatToPlainStringResult,
          meta: null,
          superseded: null,
          expanded: null,
          onToggleExpanded: null,
          showLabel: null,
          hideLabel: null,
          children: null,
        };
        let tmp7Result = null;
        if (superseded) {
          let obj3 = { children: null };
          const intl3 = util.intl;
          obj3.children = intl3.string(_modDef3827.hF2c41);
          tmp7Result = collapsedCategories(ConjureNativeCollapsibleSection.ConjureNativeCollapsibleMeta, obj3);
        }
        obj2.meta = tmp7Result;
        obj2.superseded = superseded;
        obj2.expanded = flag;
        obj2.onToggleExpanded = expanded.onToggleExpanded;
        const intl4 = util.intl;
        obj2.showLabel = intl4.string(_modDef3827.yD8EJS);
        const intl5 = util.intl;
        obj2.hideLabel = intl5.string(_modDef3827.nSPGNb);
        let tmp7Result6 = null;
        if (!superseded) {
          const obj4 = { tags: null };
          const tmp8Result = ConjurePlanTypeTagsDefault;
          obj4.tags = conjurePlanTags.getConjurePlanTags(proposal, conjurePlanBotExchanges.botInteraction);
          tmp7Result6 = collapsedCategories(tmp8Result, obj4);
          const tmp3Result4 = conjurePlanTags;
        }
        items = [tmp7Result6, , , , , , , , , , ,];
        let tmp13Result = null;
        if ("" !== str3) {
          const obj5 = { direction: "vertical", spacing: 4, children: null };
          const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl13 = util.intl;
          obj6.children = intl13.string(_modDef3827.iNS4dl);
          const items1 = [collapsedCategories(Text_Text.Text, obj6)];
          const obj7 = { variant: "text-md/normal", color: "text-default", children: str3 };
          items1[1] = collapsedCategories(Text_Text.Text, obj7);
          obj5.children = items1;
          tmp13Result = closure_1_19(Stack_Stack.Stack, obj5);
        }
        items[1] = tmp13Result;
        if ("" === trimmed) {
          const intl6 = util.intl;
          let stringResult = intl6.string(_modDef3827["0+RUWx"]);
        } else {
          stringResult = MarkupUtilsDefault.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS);
          const tmp8Result3 = MarkupUtilsDefault;
        }
        const obj8 = { variant: "text-md/normal", color: "text-default", children: stringResult };
        items[2] = collapsedCategories(Text_Text.Text, obj8);
        let tmp7Result7 = null;
        if (null != automod) {
          tmp7Result7 = null;
          if (automod.examples.length > 0) {
            const obj9 = { automod };
            tmp7Result7 = collapsedCategories(ConjurePlanAutomodExamplesDefault, obj9);
          }
        }
        items[3] = tmp7Result7;
        let tmp7Result8 = null;
        if (null == automod) {
          tmp7Result8 = null;
          if (null != proposal.design_image) {
            const obj10 = { projectId, design: proposal.design_image };
            tmp7Result8 = collapsedCategories(closure_29, obj10);
          }
        }
        items[4] = tmp7Result8;
        let tmp7Result9 = null;
        if (botExchanges.length > 0) {
          const obj11 = { projectId, exchanges: botExchanges };
          tmp7Result9 = collapsedCategories(ConjurePlanBotPreviewDefault, obj11);
        }
        items[5] = tmp7Result9;
        let tmp7Result10 = null;
        if (null == automod) {
          tmp7Result10 = null;
          if (null != conjurePlanWidget) {
            const obj12 = {};
            const merged = Object.assign(conjurePlanWidget);
            tmp7Result10 = collapsedCategories(ConjurePlanWidgetDefault, obj12);
            const tmp8Result4 = ConjurePlanWidgetDefault;
          }
        }
        items[6] = tmp7Result10;
        let tmp13Result6 = null;
        if (proposal.changes.length > 0) {
          const obj13 = { direction: "vertical", spacing: 4, children: null };
          const obj14 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl7 = util.intl;
          obj14.children = intl7.string(_modDef3827["5+mG1z"]);
          const items2 = [collapsedCategories(Text_Text.Text, obj14)];
          const changes = proposal.changes;
          items2[1] = changes.map((item, index) =>
            closure_1_18(
              require("Text/Text").Text,
              { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item },
              index,
            ),
          );
          obj13.children = items2;
          tmp13Result6 = closure_1_19(Stack_Stack.Stack, obj13);
        }
        items[7] = tmp13Result6;
        let tmp13Result7 = null;
        if (proposal.commands.length > 0) {
          const obj15 = { direction: "vertical", spacing: 4, children: null };
          const obj16 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl8 = util.intl;
          obj16.children = intl8.string(util.t["0hKkS+"]);
          const items3 = [collapsedCategories(Text_Text.Text, obj16)];
          const commands = proposal.commands;
          items3[1] = commands.map((name, index) => {
            const obj = {
              variant: "text-sm/medium",
              color: "text-default",
              children: "" + require("conjurePlanFormat").conjurePlanCommandPrefix(name) + name.name,
            };
            const children = [closure_1_18(require("Text/Text").Text, obj)];
            let tmp3Result = null;
            if (null != name.description) {
              tmp3Result = null;
              if ("" !== name.description) {
                const obj3 = { variant: "text-sm/normal", color: "text-muted", children: name.description };
                tmp3Result = closure_1_18(require("Text/Text").Text, obj3);
              }
            }
            children[1] = tmp3Result;
            return closure_1_19(closure_1_7, { children }, index);
          });
          obj15.children = items3;
          tmp13Result7 = closure_1_19(Stack_Stack.Stack, obj15);
        }
        items[8] = tmp13Result7;
        let tmp13Result8 = null;
        if (mapped.length > 0) {
          const obj17 = { direction: "vertical", spacing: 4, children: null };
          const obj18 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl9 = util.intl;
          obj18.children = intl9.string(_modDef3827["2UbW6r"]);
          const items4 = [collapsedCategories(Text_Text.Text, obj18)];
          const obj19 = { variant: "text-sm/normal", color: "text-default", children: mapped.join(", ") };
          items4[1] = collapsedCategories(Text_Text.Text, obj19);
          obj17.children = items4;
          tmp13Result8 = closure_1_19(Stack_Stack.Stack, obj17);
        }
        items[9] = tmp13Result8;
        let tmp13Result9 = null;
        if (mapped1.length > 0) {
          const obj20 = { direction: "vertical", spacing: 4, children: null };
          const obj21 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl10 = util.intl;
          obj21.children = intl10.string(_modDef3827["7TKfpj"]);
          const items5 = [collapsedCategories(Text_Text.Text, obj21)];
          const obj22 = { variant: "text-sm/normal", color: "text-default", children: mapped1.join(", ") };
          items5[1] = collapsedCategories(Text_Text.Text, obj22);
          obj20.children = items5;
          tmp13Result9 = closure_1_19(Stack_Stack.Stack, obj20);
        }
        items[10] = tmp13Result9;
        let tmp13Result10 = null;
        if (null != onApprove) {
          tmp13Result10 = null;
          if (!superseded) {
            const obj23 = { style: tmp.planActions, children: null };
            const obj24 = { text: null, variant: "primary", onPress: null };
            const intl11 = util.intl;
            obj24.text = intl11.string(_modDef3827["6S+wRM"]);
            obj24.onPress = onApprove;
            const items6 = [collapsedCategories(components_Button_Button.Button, obj24)];
            const obj25 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: null };
            const intl12 = util.intl;
            obj25.children = intl12.string(_modDef3827.IZoqbR);
            items6[1] = collapsedCategories(Text_Text.Text, obj25);
            obj23.children = items6;
            tmp13Result10 = closure_1_19(React5, obj23);
          }
        }
        const obj26 = { children: null };
        const obj27 = { direction: "vertical", spacing: 8, children: null };
        items[11] = tmp13Result10;
        obj27.children = items;
        obj2.children = closure_1_19(Stack_Stack.Stack, obj27);
        obj26.children = collapsedCategories(tmp10, obj2);
        return collapsedCategories(tmp9, obj26);
      }
      const intl = util.intl;
      formatToPlainStringResult = intl.string(_modDef3827["3b6e7o"]);
      tmp9 = ConjureNativeCardSurfaceDefault;
    };
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled()
  ? function IdeaCards(arg0) {
      const cResult = onPick(576).c(9);
      ({ ideas, onPick } = arg0);
      const tmp4 = closure_28();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
        let intl = onPick(1126).intl;
        obj2.children = intl.string(_modDef3827["wx/o8Y"]);
        const tmp8 = closure_18(onPick(5086).Text, obj2);
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
          const tmp15 = closure_19(closure_7, obj3);
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
            children: null,
          };
          const intl = onPick(1126).intl;
          obj.accessibilityLabel = intl.formatToPlainString(_modDef3827.H8G39M, { title: title.title });
          items = [
            closure_1_18(onPick(5086).Text, {
              variant: "text-md/semibold",
              color: "text-default",
              children: title.title,
            }),
          ];
          let tmpResult = null;
          if ("" !== title.value) {
            const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
            tmpResult = closure_1_18(onPick(5086).Text, obj4);
          }
          items[1] = tmpResult;
          obj.children = closure_1_19(onPick(5373).Stack, { direction: "vertical", spacing: 4, children: items });
          return closure_1_18(onPick(6186).Card, obj, title.id);
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
    }
  : function IdeaCards(arg0) {
      ({ ideas, onPick: require } = arg0);
      let obj = { style: closure_28().ideaCards, children: null };
      const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      let intl = util.intl;
      obj2.children = intl.string(_modDef3827["wx/o8Y"]);
      items = [
        closure_18(Text_Text.Text, obj2),
        ideas.map((title) => {
          closure_0 = title;
          const obj = {
            onPress() {
              return _require(closure_0);
            },
            accessibilityLabel: null,
            children: null,
          };
          const intl = require("util").intl;
          obj.accessibilityLabel = intl.formatToPlainString(_modDef3827.H8G39M, { title: title.title });
          items = [
            closure_1_18(require("Text/Text").Text, {
              variant: "text-md/semibold",
              color: "text-default",
              children: title.title,
            }),
          ];
          let tmpResult = null;
          if ("" !== title.value) {
            const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
            tmpResult = closure_1_18(require("Text/Text").Text, obj4);
          }
          items[1] = tmpResult;
          obj.children = closure_1_19(require("Stack/Stack").Stack, {
            direction: "vertical",
            spacing: 4,
            children: items,
          });
          return closure_1_18(require("Card").Card, obj, title.id);
        }),
      ];
      obj.children = items;
      return closure_19(closure_7, obj);
    };
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AttachmentPills(projectId) {
      const cResult = projectId(attachmentPill[15]).c(12);
      projectId = projectId.projectId;
      const attachments = projectId.attachments;
      const tmp2 = closure_28();
      closure_1 = tmp2;
      if (cResult[0] !== projectId) {
        const fn = function n(arg0) {
          const promise = collapsed(projectId, arg0);
          collapsed(projectId, arg0)
            .then((result) => closure_1_1(attachmentPill[36]).openURL(result))
            .catch(() => {});
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
            const tmp11 = closure_18(closure_7, obj2);
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
            children: null,
          };
          const intl = projectId(attachmentPill[17]).intl;
          const obj2 = { name: id.name };
          obj.accessibilityLabel = intl.formatToPlainString(closure_1(attachmentPill[18]).GtNukg, obj2);
          const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
          obj.children = closure_1_18(projectId(attachmentPill[19]).Text, obj3);
          let tmp12 = closure_1_18(projectId(attachmentPill[35]).Card, obj, id.id);
        } else {
          const obj4 = { style: closure_1.attachmentPill, children: null };
          const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
          const intl2 = projectId(attachmentPill[17]).intl;
          const obj6 = { name: id.name };
          obj5.children = intl2.formatToPlainString(closure_1(attachmentPill[18]).nd81jR, obj6);
          obj4.children = closure_1_18(projectId(attachmentPill[19]).Text, obj5);
          const _HermesInternal = HermesInternal;
          tmp12 = closure_1_18(closure_1_7, obj4, "" + id.name + "-" + arg1);
        }
        return tmp12;
      };
      cResult[6] = attachmentPill;
      cResult[7] = tmp2.attachmentPill;
      cResult[8] = fn2;
      tmp5 = fn2;
      let obj = projectId(attachmentPill[15]);
    }
  : function AttachmentPills(projectId) {
      projectId = projectId.projectId;
      const attachments = projectId.attachments;
      const tmp = closure_28();
      closure_1 = tmp;
      items = [projectId];
      dependencyMap = noop.useCallback((arg0) => {
        const promise = collapsed(projectId, arg0);
        collapsed(projectId, arg0)
          .then((result) => closure_1_1(dependencyMap[36]).openURL(result))
          .catch(() => {});
      }, items);
      return closure_18(closure_7, {
        style: tmp.attachmentPills,
        children: attachments.map((id, index) => {
          if (null != id.id) {
            const obj = {
              style: closure_1.attachmentPill,
              onPress() {
                return closure_2(id.id);
              },
              accessibilityLabel: null,
              children: null,
            };
            const intl = projectId(1126).intl;
            const obj2 = { name: id.name };
            obj.accessibilityLabel = intl.formatToPlainString(closure_1(3827).GtNukg, obj2);
            const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
            obj.children = closure_1_18(projectId(5086).Text, obj3);
            let tmp12 = closure_1_18(projectId(6186).Card, obj, id.id);
          } else {
            const obj4 = { style: closure_1.attachmentPill, children: null };
            const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
            const intl2 = projectId(1126).intl;
            const obj6 = { name: id.name };
            obj5.children = intl2.formatToPlainString(closure_1(3827).nd81jR, obj6);
            obj4.children = closure_1_18(projectId(5086).Text, obj5);
            const _HermesInternal = HermesInternal;
            tmp12 = closure_1_18(closure_1_7, obj4, "" + id.name + "-" + index);
          }
          return tmp12;
        }),
      });
    };
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TimelineRow(arg0) {
      const cResult = require("c").c(28);
      ({ projectId, node, inGutter, live, crestColor, epoch } = arg0);
      let num = 0;
      if (undefined !== epoch) {
        num = epoch;
      }
      const tmp6 = closure_28();
      _require = tmp6;
      if (cResult[0] !== node.attachments) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function l(id) {
            if (null != id.id) {
              const CONJURE_VIEWABLE_IMAGE_TYPES = closure_0(dependencyMap[37]).CONJURE_VIEWABLE_IMAGE_TYPES;
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
          const describeNodeResult = tmp(16965).describeNode(node);
          cResult[3] = node;
          cResult[4] = describeNodeResult;
          let tmp11 = describeNodeResult;
          const tmpResult = tmp(16965);
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
            const obj2 = {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: tmp(16966).describeDuration(node.durationMs),
            };
            tmp15 = closure_18(tmp(5086).Text, obj2);
            const tmpResult2 = tmp(16966);
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
                              const tmp35 = closure_19(closure_7, obj3);
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
                              obj4.children = closure_18(ConjureNativeStepImagesDefault, obj5);
                              tmp28 = closure_18(closure_7, obj4);
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
                            return collapsedCategories(
                              Text_Text.Text,
                              { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children },
                              index,
                            );
                          });
                          tmp23 = closure_18(closure_7, obj6);
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
        const obj7 = {
          line: tmp11,
          live: tmp5,
          settled: tmp13,
          failed: "failed" === node.status,
          presentation: str3,
          crestColor,
          inGutter: tmp4,
          epoch: num,
          trailing: tmp14,
        };
        const tmp21 = closure_18(ConjureNativeStatusLineDefault, obj7);
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
    }
  : function TimelineRow(live) {
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
      const tmp = closure_28();
      _require = tmp;
      const attachments = node.attachments;
      const flatMapResult = attachments.flatMap((id) => {
        if (null != id.id) {
          const CONJURE_VIEWABLE_IMAGE_TYPES = closure_0(dependencyMap[37]).CONJURE_VIEWABLE_IMAGE_TYPES;
          if (CONJURE_VIEWABLE_IMAGE_TYPES.has(id.content_type)) {
            const obj = {};
            const merged = Object.assign(id);
            obj.id = id.id;
            items = [obj];
          }
          return [];
        }
      });
      let obj = {
        line: null,
        live: null,
        settled: null,
        failed: null,
        presentation: null,
        crestColor: null,
        inGutter: null,
        epoch: null,
        trailing: null,
      };
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
        const obj3 = {
          variant: "text-xs/normal",
          color: "text-subtle",
          children: tmp8(16966).describeDuration(node.durationMs),
        };
        tmp4Result = closure_18(tmp8(5086).Text, obj3);
        const tmp8Result = tmp8(16966);
      }
      obj.trailing = tmp4Result;
      const children = [closure_18(tmp7, obj), ,];
      let tmp4Result3 = null;
      if (node.detail.length > 0) {
        const obj4 = { style: tmp.stepDetail, children: null };
        const detail = node.detail;
        obj4.children = detail.map((children, index) => {
          let stepCommand;
          if (children.startsWith("$ ")) {
            stepCommand = closure_0.stepCommand;
          }
          return collapsedCategories(
            Text_Text.Text,
            { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children },
            index,
          );
        });
        tmp4Result3 = closure_18(closure_7, obj4);
      }
      children[1] = tmp4Result3;
      let tmp4Result4 = null;
      if (null != projectId) {
        tmp4Result4 = null;
        if (flatMapResult.length > 0) {
          const obj5 = { style: tmp.stepDetail, children: null };
          const obj6 = { projectId, images: flatMapResult };
          obj5.children = closure_18(ConjureNativeStepImagesDefault, obj6);
          tmp4Result4 = closure_18(closure_7, obj5);
        }
      }
      children[2] = tmp4Result4;
      return closure_19(closure_7, { children });
    };
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TurnStatusLine(projectId) {
      const cResult = projectId(epoch[15]).c(31);
      projectId = projectId.projectId;
      ({ tree, turnActive } = projectId);
      epoch = projectId.epoch;
      const tmp4 = closure_28();
      let obj = projectId(epoch[15]);
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
                                      const tmp38 = closure_19(closure_7, obj2);
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
                              return collapsedCategories(closure_33, obj, node.id);
                            });
                            tmp32 = closure_18(closure_7, obj3);
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
            const obj4 = {
              line: tmp11,
              live: turnActive,
              settled: !turnActive,
              inGutter: true,
              glyph: tmp25,
              epoch,
              expanded: tmp6,
              onToggle: tmp26,
            };
            const tmp30 = closure_18(turnActive(tmp2[10]), obj4);
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
      const currentStepResult = projectId(epoch[38]).currentStep(tree.steps);
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
        describeTurnDurationResult = tmp(tmp2[39]).describeTurnDuration(tmp13);
        const tmpResult3 = tmp(tmp2[39]);
      } else if (null != currentStepResult) {
        describeTurnDurationResult = tmp(tmp2[38]).describeNode(currentStepResult);
        const tmpResult4 = tmp(tmp2[38]);
      } else if (describeTurnDurationResult == null) {
        const intl = tmp(tmp2[17]).intl;
        describeTurnDurationResult = intl.string(turnActive(tmp2[18]).t8skVB);
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
      const tmpResult = projectId(epoch[38]);
    }
  : function TurnStatusLine(epoch) {
      ({ projectId: require, tree, turnActive } = epoch);
      epoch = epoch.epoch;
      _slicedToArray = undefined;
      noop = undefined;
      const tmp = closure_28();
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
        groupLabel = intl.string(turnActive(tmp6[18]).t8skVB);
      }
      let someResult = tree.steps.length > 1;
      if (!someResult) {
        const steps = tree.steps;
        someResult = steps.some((detail) => detail.detail.length > 0 || detail.attachments.length > 0);
      }
      const obj2 = {
        line: groupLabel,
        live: turnActive,
        settled: !turnActive,
        inGutter: true,
        glyph: null,
        epoch: null,
        expanded: null,
        onToggle: null,
      };
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
      const children = [closure_18(turnActive(epoch[10]), obj2)];
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
            return collapsedCategories(closure_33, obj, node.id);
          });
          tmp17Result = closure_18(closure_7, obj3);
        }
      }
      children[1] = tmp17Result;
      return closure_19(closure_7, { children });
    };
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LaneStatusLine(projectId) {
      let obj = projectId;
      const cResult = projectId(epoch[15]).c(33);
      projectId = projectId.projectId;
      ({ lane, mark } = projectId);
      ({ turnActive, epoch } = projectId);
      const tmp3 = closure_28();
      const obj2 = projectId(epoch[15]);
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
      if ((cResult[1] === "running") === lane.task.status) {
        if (cResult[2] === lane.steps) {
          if (cResult[3] === lane.task) {
            if (cResult[4] === turnActive) {
              noop = tmp9;
              let tmp18 = !turnActive;
              if (!turnActive) {
                tmp18 = "failed" !== lane.task.status;
              }
              if (cResult[8] !== mark.Illocon) {
                const tmp21 = closure_18(mark.Illocon, { size: 16, accessible: false });
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
                                              const tmp35 = closure_19(closure_7, obj3);
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
                                  const items1 = [
                                    detail.map((children, index) =>
                                      closure_1_18(
                                        projectId(epoch[19]).Text,
                                        { variant: "text-xs/normal", color: "text-feedback-critical", children },
                                        index,
                                      ),
                                    ),
                                  ];
                                  const steps = lane.steps;
                                  items1[1] = steps.map((node) =>
                                    collapsedCategories(
                                      closure_33,
                                      {
                                        projectId,
                                        node,
                                        live: node === currentStepResult,
                                        crestColor: mark.tint,
                                        epoch,
                                      },
                                      node.id,
                                    ),
                                  );
                                  obj4.children = items1;
                                  tmp29 = closure_19(closure_7, obj4);
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
              const obj5 = {
                line: cResult[7],
                live: turnActive,
                settled: tmp18,
                failed: "failed" === lane.task.status,
                glyph: tmp19,
                crestColor: mark.tint,
                inGutter: true,
                epoch,
                expanded: tmp5,
                onToggle: tmp22,
              };
              const tmp27 = closure_18(mark(epoch[10]), obj5);
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
        currentStepResult = obj(epoch[38]).currentStep(lane.steps);
        const objResult = obj(epoch[38]);
      }
      noop = currentStepResult;
      const tmp12 = lane.task.detail.length > 0 || lane.steps.length > 0;
      if ("running" !== lane.task.status) {
        const describeTaskOutcomeResult = obj(epoch[41]).describeTaskOutcome(lane.task);
        cResult[1] = tmp7;
        cResult[2] = lane.steps;
        cResult[3] = lane.task;
        cResult[4] = turnActive;
        cResult[5] = tmp12;
        cResult[6] = currentStepResult;
        cResult[7] = describeTaskOutcomeResult;
        const objResult3 = obj(epoch[41]);
      }
      if (null != currentStepResult) {
        obj = obj(epoch[38]);
        obj.describeNode(currentStepResult);
      } else {
        obj(epoch[41]).taskTitle(lane.task);
        const objResult4 = obj(epoch[41]);
      }
      const tmp4 = _slicedToArray(noop.useState(false), 2);
    }
  : function LaneStatusLine(arg0) {
      ({ projectId: require, lane, mark } = arg0);
      ({ turnActive, epoch } = arg0);
      _slicedToArray = undefined;
      noop = undefined;
      const tmp = closure_28();
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
        const obj5 = {
          line: require("ConjureTaskOutcome").describeTaskOutcome(lane.task),
          live: turnActive,
          settled: null,
          failed: null,
          glyph: null,
          crestColor: null,
          inGutter: true,
          epoch: null,
          expanded: null,
          onToggle: null,
        };
        let tmp26 = !turnActive;
        const describeTaskOutcomeResult = require("ConjureTaskOutcome").describeTaskOutcome(lane.task);
        if (!turnActive) {
          tmp26 = "failed" !== lane.task.status;
        }
        obj5.settled = tmp26;
        obj5.failed = "failed" === lane.task.status;
        obj5.glyph = closure_18(mark.Illocon, { size: 16, accessible: false });
        obj5.crestColor = mark.tint;
        obj5.epoch = epoch;
        obj5.expanded = tmp3;
        let tmp27;
        if (tmp9) {
          tmp27 = callback;
        }
        obj5.onToggle = tmp27;
        items = [closure_18(mark(epoch[10]), obj5)];
        let tmp21Result = null;
        if (tmp3) {
          tmp21Result = null;
          if (tmp9) {
            const obj6 = { style: tmp.activityDetail, children: null };
            const detail = lane.task.detail;
            const items1 = [
              detail.map((children, index) =>
                closure_1_18(
                  projectId(epoch[19]).Text,
                  { variant: "text-xs/normal", color: "text-feedback-critical", children },
                  index,
                ),
              ),
            ];
            const steps = lane.steps;
            items1[1] = steps.map((node) =>
              collapsedCategories(
                closure_33,
                { projectId, node, live: node === c4, crestColor: mark.tint, epoch },
                node.id,
              ),
            );
            obj6.children = items1;
            tmp21Result = closure_19(closure_7, obj6);
          }
        }
        const obj7 = { children: null };
        items[1] = tmp21Result;
        obj7.children = items;
        return closure_19(closure_7, obj7);
      }
      const tmp2 = _slicedToArray(noop.useState(false), 2);
    };
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivityBox(projectId) {
      const cResult = projectId(length[15]).c(14);
      projectId = projectId.projectId;
      ({ tree, turnActive } = projectId);
      const besideAvatar = projectId.besideAvatar;
      let activityBox = closure_28();
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
      let obj = projectId(length[15]);
      const tasks = tree.tasks;
      closure_3 = projectId(tree.tasks.length[42]).subagentIllocons(tasks.map(tmp5));
      if (cResult[8] === (undefined !== besideAvatar && besideAvatar)) {
        if (cResult[9] === length) {
          if (cResult[10] === projectId) {
            if (cResult[11] === tree) {
              if (cResult[12] === turnActive) {
                let tmp6 = cResult[13];
              }
              let obj2 = { style: activityBox.activityBox, children: null };
              items = [tmp6];
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
                  tmp5 = collapsedCategories(closure_35, obj2, task.taskId);
                }
                return tmp5;
              });
              obj2.children = items;
              const tmp10 = closure_19(closure_7, obj2);
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
      const tmp7 = closure_18(closure_34, {
        projectId,
        tree,
        turnActive,
        epoch: tree.tasks.length,
        besideAvatar: undefined !== besideAvatar && besideAvatar,
      });
      cResult[8] = undefined !== besideAvatar && besideAvatar;
      cResult[9] = tree.tasks.length;
      cResult[10] = projectId;
      cResult[11] = tree;
      cResult[12] = turnActive;
      cResult[13] = tmp7;
      tmp6 = tmp7;
      const tmpResult = projectId(tree.tasks.length[42]);
    }
  : function ActivityBox(projectId) {
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
      const tmp = closure_28();
      const tasks = tree.tasks;
      closure_3 = projectId(length[42]).subagentIllocons(tasks.map((taskId) => taskId.taskId));
      let obj2 = { style: tmp.activityBox, children: null };
      items = [closure_18(closure_34, { projectId, tree, turnActive, epoch: length, besideAvatar: flag })];
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
          tmp5 = collapsedCategories(closure_35, obj2, task.taskId);
        }
        return tmp5;
      });
      obj2.children = items;
      return closure_19(closure_7, obj2);
    };
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TranscriptFade(children) {
      const cResult = c.c(15);
      children = children.children;
      const tmp3 = closure_28();
      if (obj2.isIOS()) {
        ({ transcript, transcript: transcript2 } = tmp3);
        if (cResult[0] !== tmp3.maskSolid) {
          const obj3 = { style: tmp3.maskSolid };
          const tmp7 = collapsedCategories(React5, obj3);
          cResult[0] = tmp3.maskSolid;
          cResult[1] = tmp7;
          let tmp4 = tmp7;
        } else {
          tmp4 = cResult[1];
        }
        if (cResult[2] !== tmp3.maskFade) {
          const obj4 = { style: tmp3.maskFade, colors: items, locations, start, end };
          const tmp15 = collapsedCategories(LinearGradientDefault, obj4);
          cResult[2] = tmp3.maskFade;
          cResult[3] = tmp15;
          let tmp8 = tmp15;
        } else {
          tmp8 = cResult[3];
        }
        const _Math = Math;
        const bound = Math.max(0, children.clearance - c23);
        if (cResult[4] !== bound) {
          const obj5 = { style: null };
          const obj6 = { height: bound };
          obj5.style = obj6;
          const tmp22 = collapsedCategories(React5, obj5);
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
              const tmp30 = collapsedCategories(_modDef6245, obj7);
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
        const tmp26 = closure_1_19(React5, obj8);
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
    }
  : function TranscriptFade(children) {
      children = children.children;
      const tmp = closure_28();
      let tmp3 = children;
      if (obj.isIOS()) {
        const obj2 = { style: tmp.transcript, maskElement: null, children: null };
        const obj3 = { style: tmp.transcript, children: null };
        const obj4 = { style: tmp.maskSolid };
        items = [collapsedCategories(React5, obj4), ,];
        const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
        items[1] = collapsedCategories(LinearGradientDefault, obj5);
        const obj6 = { style: null };
        const obj7 = { height: null };
        const _Math = Math;
        obj7.height = Math.max(0, children.clearance - c23);
        obj6.style = obj7;
        items[2] = collapsedCategories(React5, obj6);
        obj3.children = items;
        obj2.maskElement = closure_1_19(React5, obj3);
        obj2.children = children;
        tmp3 = collapsedCategories(_modDef6245, obj2);
      }
      return tmp3;
    };
ReactCompilerGating = fn(558);
let closure_38 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RestoreProposalCard(arg0) {
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
        obj2.children = intl.string(_modDef3827["t+b0rz"]);
        const tmp9 = collapsedCategories(Text_Text.Text, obj2);
        cResult[2] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== proposal.subject) {
        const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
        const tmp12 = collapsedCategories(Text_Text.Text, obj3);
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
          tmp14 = collapsedCategories(Text_Text.Text, obj4);
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
            obj5.text = intl2.string(_modDef3827.H8Jfhu);
            obj5.onPress = onRestore;
            tmp19 = collapsedCategories(components_Button_Button.Button, obj5);
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
        obj6.children = closure_1_19(Stack_Stack.Stack, obj7);
        const tmp27 = collapsedCategories(ConjureNativeCardSurfaceDefault, obj6);
        cResult[12] = tmp16;
        cResult[13] = tmp18;
        cResult[14] = tmp27;
        tmp22 = tmp27;
      }
      const obj8 = { direction: "vertical", spacing: 4, children: null };
      const items1 = [tmp10, tmp13];
      obj8.children = items1;
      const tmp17 = closure_1_19(Stack_Stack.Stack, obj8);
      cResult[7] = tmp10;
      cResult[8] = tmp13;
      cResult[9] = tmp17;
      tmp16 = tmp17;
    }
  : function RestoreProposalCard(arg0) {
      ({ proposal, onRestore } = arg0);
      const relative = ConjureHistoryFormat.formatAuthoredAt(proposal.authored_at).relative;
      const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl = util.intl;
      obj2.children = intl.string(_modDef3827["t+b0rz"]);
      items = [collapsedCategories(Text_Text.Text, obj2), ,];
      const items1 = [
        collapsedCategories(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-default",
          children: proposal.subject,
        }),
      ];
      let tmp3Result = null;
      if (null != relative) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: relative };
        tmp3Result = collapsedCategories(Text_Text.Text, obj4);
      }
      items1[1] = tmp3Result;
      items[1] = closure_1_19(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items1 });
      let tmp3Result2 = null;
      if (null != onRestore) {
        const obj5 = { text: null, variant: "secondary", onPress: null };
        const intl2 = util.intl;
        obj5.text = intl2.string(_modDef3827.H8Jfhu);
        obj5.onPress = onRestore;
        tmp3Result2 = collapsedCategories(components_Button_Button.Button, obj5);
      }
      const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
      const tmp5 = ConjureNativeCardSurfaceDefault;
      items[2] = tmp3Result2;
      return collapsedCategories(tmp5, {
        children: closure_1_19(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }),
      });
    };
ReactCompilerGating = fn(558);
let closure_39 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MessageRow(projectId) {
        const cResult = projectId(groupStart[15]).c(237);
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
        const tmp4 = closure_28();
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
              const latestTodosResult = tmp(tmp2[38]).latestTodos(message.steps);
              cResult[10] = message.steps;
              cResult[11] = latestTodosResult;
              const tmpResult = tmp(tmp2[38]);
            }
            if (cResult[12] !== tmp9.tasks) {
              const runningTodoAgentsResult = tmp(tmp2[47]).runningTodoAgents(tmp9.tasks);
              cResult[12] = tmp9.tasks;
              cResult[13] = runningTodoAgentsResult;
              const tmpResult6 = tmp(tmp2[47]);
            }
            if (cResult[14] === checklistSuperseded) {
              if (cResult[15] === message.render_id) {
                if (cResult[18] === message.render_id) {
                  if (cResult[19] === onTogglePlan) {
                    if (cResult[22] === onJumpToReplied) {
                      if (cResult[25] !== message.content) {
                        const result = tmp(tmp2[48]).parseConjureDesignRemark(message.content);
                        cResult[25] = message.content;
                        cResult[26] = result;
                        let tmp24 = result;
                        const tmpResult7 = tmp(tmp2[48]);
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
                      const content = tmp28;
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
                        if (cResult[32] === message) {
                          if (cResult[33] === onRestoreVersion) {
                            let tmp33 = cResult[34];
                          }
                          turnSettled = tmp33;
                          if (cResult[35] === user_id) {
                            if (cResult[36] === tmp28) {
                              if (cResult[37] === onRestoreVersion) {
                                if ("" === tmp28) {
                                  if (cResult[40] === onAskForIdeas) {
                                    if (cResult[41] === projectId) {
                                      if (cResult[42] === tmp4.avatar) {
                                        if (cResult[43] === tmp4.avatarSpoken) {
                                          if (cResult[44] === tmp4.header) {
                                            if (cResult[45] === tmp4.reminderSeparated) {
                                              if (cResult[46] === tmp4.reminderTip) {
                                                if (cResult[47] === tmp4.spoken) {
                                                  let tmp38 = cResult[48];
                                                }
                                                if (cResult[49] === hostsReminder) {
                                                  if (cResult[50] === reminder) {
                                                    if (cResult[51] === tmp38) {
                                                      if (cResult[52] === tmp4.reminderSlot) {
                                                        let tmp39 = cResult[53];
                                                      }
                                                      if ("user" === message.role) {
                                                        if ("" === tmp28) {
                                                          if (null == tmp24) {
                                                            if (null == attachments) {
                                                              return null;
                                                            }
                                                          }
                                                        }
                                                        if (cResult[54] !== message.agentReaction) {
                                                          const conjureAgentReactionLabel = tmp(
                                                            tmp2[56],
                                                          ).getConjureAgentReactionLabel(message.agentReaction);
                                                          cResult[54] = message.agentReaction;
                                                          cResult[55] = conjureAgentReactionLabel;
                                                          let tmp89 = conjureAgentReactionLabel;
                                                          const tmpResult8 = tmp(tmp2[56]);
                                                        } else {
                                                          tmp89 = cResult[55];
                                                        }
                                                        if (cResult[56] === groupStart) {
                                                          if (cResult[57] === message.user_id) {
                                                            if (cResult[58] === tmp4.avatar) {
                                                              let tmp91 = cResult[59];
                                                            }
                                                            if (cResult[60] === groupStart) {
                                                              if (cResult[61] === message.created_at) {
                                                                if (cResult[62] === message.user_id) {
                                                                  if (cResult[63] === tmp4.header) {
                                                                    let tmp95 = cResult[64];
                                                                  }
                                                                  if (cResult[65] === tmp28) {
                                                                    if (cResult[66] === groupStart) {
                                                                      if (cResult[67] === tmp24) {
                                                                        let tmp99 = cResult[68];
                                                                      }
                                                                      if (cResult[69] === attachments) {
                                                                        if (cResult[70] === projectId) {
                                                                          let tmp107 = cResult[71];
                                                                        }
                                                                        if (cResult[72] === message.agentReaction) {
                                                                          if (cResult[73] === tmp89) {
                                                                            if (cResult[74] === tmp4.agentReaction) {
                                                                              if (
                                                                                cResult[75] === tmp4.agentReactionEmoji
                                                                              ) {
                                                                                let tmp111 = cResult[76];
                                                                              }
                                                                              if (cResult[77] === tmp37) {
                                                                                if (cResult[78] === tmp31) {
                                                                                  if (cResult[79] === tmp91) {
                                                                                    if (cResult[80] === tmp95) {
                                                                                      if (cResult[81] === tmp99) {
                                                                                        if (cResult[82] === tmp107) {
                                                                                          if (cResult[83] === tmp111) {
                                                                                            let tmp116 = cResult[84];
                                                                                          }
                                                                                          return tmp116;
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                              let obj2 = {
                                                                                style: tmp31,
                                                                                onLongPress: tmp37,
                                                                                accessible: false,
                                                                                children: null,
                                                                              };
                                                                              items = [
                                                                                tmp91,
                                                                                tmp95,
                                                                                tmp99,
                                                                                tmp107,
                                                                                tmp111,
                                                                              ];
                                                                              obj2.children = items;
                                                                              const tmp119 = closure_19(
                                                                                onTogglePlan,
                                                                                obj2,
                                                                              );
                                                                              cResult[77] = tmp37;
                                                                              cResult[78] = tmp31;
                                                                              cResult[79] = tmp91;
                                                                              cResult[80] = tmp95;
                                                                              cResult[81] = tmp99;
                                                                              cResult[82] = tmp107;
                                                                              cResult[83] = tmp111;
                                                                              cResult[84] = tmp119;
                                                                              tmp116 = tmp119;
                                                                            }
                                                                          }
                                                                        }
                                                                        let tmp112 = null;
                                                                        if (null != message.agentReaction) {
                                                                          tmp112 = null;
                                                                          if (null != tmp89) {
                                                                            let obj3 = {
                                                                              style: tmp4.agentReaction,
                                                                              accessible: true,
                                                                              accessibilityRole: "image",
                                                                              accessibilityLabel: tmp89,
                                                                              children: null,
                                                                            };
                                                                            let obj4 = {
                                                                              name: message.agentReaction,
                                                                              fastImageStyle: tmp4.agentReactionEmoji,
                                                                            };
                                                                            obj3.children = closure_18(
                                                                              message(tmp2[58]),
                                                                              obj4,
                                                                            );
                                                                            tmp112 = closure_18(replied, obj3);
                                                                          }
                                                                        }
                                                                        cResult[72] = message.agentReaction;
                                                                        cResult[73] = tmp89;
                                                                        cResult[74] = tmp4.agentReaction;
                                                                        cResult[75] = tmp4.agentReactionEmoji;
                                                                        cResult[76] = tmp112;
                                                                        tmp111 = tmp112;
                                                                      }
                                                                      let tmp108 = null;
                                                                      if (null != attachments) {
                                                                        let obj5 = { projectId, attachments };
                                                                        tmp108 = closure_18(closure_32, obj5);
                                                                      }
                                                                      cResult[69] = attachments;
                                                                      cResult[70] = projectId;
                                                                      cResult[71] = tmp108;
                                                                      tmp107 = tmp108;
                                                                    }
                                                                  }
                                                                  if (tmp36) {
                                                                    let combined;
                                                                    if (!groupStart) {
                                                                      const intl2 = tmp(tmp2[17]).intl;
                                                                      const _HermesInternal = HermesInternal;
                                                                      combined =
                                                                        "" +
                                                                        intl2.string(tmp(tmp2[17]).t.KD6OJJ) +
                                                                        ": " +
                                                                        tmp28;
                                                                    }
                                                                    let obj6 = {
                                                                      variant: "text-md/normal",
                                                                      color: "text-default",
                                                                      accessibilityLabel: combined,
                                                                      children: null,
                                                                    };
                                                                    let tmp104 = null;
                                                                    if (null != tmp24) {
                                                                      let obj7 = {
                                                                        label: tmp24.label,
                                                                        variant: "text-md/medium",
                                                                      };
                                                                      tmp104 = closure_18(message(tmp2[57]), obj7);
                                                                    }
                                                                    let items1 = [tmp104, ,];
                                                                    let str9 = null;
                                                                    if (null != tmp24) {
                                                                      str9 = null;
                                                                      if (tmp36) {
                                                                        str9 = " ";
                                                                      }
                                                                    }
                                                                    items1[1] = str9;
                                                                    items1[2] = tmp28;
                                                                    obj6.children = items1;
                                                                    let tmp101Result = closure_19(
                                                                      tmp(tmp2[19]).Text,
                                                                      obj6,
                                                                    );
                                                                  } else {
                                                                    tmp101Result = null;
                                                                  }
                                                                  cResult[65] = tmp28;
                                                                  cResult[66] = groupStart;
                                                                  cResult[67] = tmp24;
                                                                  cResult[68] = tmp101Result;
                                                                  tmp99 = tmp101Result;
                                                                }
                                                              }
                                                            }
                                                            let tmp96 = null;
                                                            if (groupStart) {
                                                              const obj9 = { style: tmp4.header, children: null };
                                                              ({ user_id: obj23.userId, created_at: obj23.at } =
                                                                message);
                                                              obj9.children = closure_18(
                                                                tmp(tmp2[54]).ConjureUserHeader,
                                                                { userId: null, at: null },
                                                              );
                                                              tmp96 = closure_18(replied, obj9);
                                                              const obj11 = { userId: null, at: null };
                                                            }
                                                            cResult[60] = groupStart;
                                                            cResult[61] = message.created_at;
                                                            cResult[62] = message.user_id;
                                                            cResult[63] = tmp4.header;
                                                            cResult[64] = tmp96;
                                                            tmp95 = tmp96;
                                                          }
                                                        }
                                                        let tmp92 = null;
                                                        if (groupStart) {
                                                          const obj12 = { style: tmp4.avatar, children: null };
                                                          const obj13 = { userId: message.user_id };
                                                          obj12.children = closure_18(
                                                            tmp(tmp2[54]).ConjureUserAvatar,
                                                            obj13,
                                                          );
                                                          tmp92 = closure_18(replied, obj12);
                                                        }
                                                        cResult[56] = groupStart;
                                                        cResult[57] = message.user_id;
                                                        cResult[58] = tmp4.avatar;
                                                        cResult[59] = tmp92;
                                                        tmp91 = tmp92;
                                                      } else {
                                                        if ("project_event" === message.kind) {
                                                          if (null != message.projectEvent) {
                                                            if (cResult[85] === message.projectEvent) {
                                                              if (cResult[86] === projectId) {
                                                                let tmp81 = cResult[87];
                                                              }
                                                              if (cResult[88] === tmp31) {
                                                                if (cResult[89] === tmp81) {
                                                                  let tmp85 = cResult[90];
                                                                }
                                                                return tmp85;
                                                              }
                                                              const obj14 = { style: tmp31, children: tmp81 };
                                                              const tmp88 = closure_18(replied, obj14);
                                                              cResult[88] = tmp31;
                                                              cResult[89] = tmp81;
                                                              cResult[90] = tmp88;
                                                              tmp85 = tmp88;
                                                            }
                                                            const obj15 = { projectId, event: message.projectEvent };
                                                            const tmp84 = closure_18(message(tmp2[59]), obj15);
                                                            cResult[85] = message.projectEvent;
                                                            cResult[86] = projectId;
                                                            cResult[87] = tmp84;
                                                            tmp81 = tmp84;
                                                          }
                                                        }
                                                        if ("publish_notice" === message.kind) {
                                                          if (null != message.publishNotice) {
                                                            if (cResult[91] === message.publishNotice) {
                                                              if (cResult[92] === projectId) {
                                                                let tmp73 = cResult[93];
                                                              }
                                                              if (cResult[94] === tmp39) {
                                                                if (cResult[95] === tmp31) {
                                                                  if (cResult[96] === tmp73) {
                                                                    let tmp77 = cResult[97];
                                                                  }
                                                                  return tmp77;
                                                                }
                                                              }
                                                              const obj16 = { style: tmp31, children: null };
                                                              const items2 = [tmp73, tmp39];
                                                              obj16.children = items2;
                                                              const tmp80 = closure_19(replied, obj16);
                                                              cResult[94] = tmp39;
                                                              cResult[95] = tmp31;
                                                              cResult[96] = tmp73;
                                                              cResult[97] = tmp80;
                                                              tmp77 = tmp80;
                                                            }
                                                            const obj17 = { projectId, notice: message.publishNotice };
                                                            const tmp76 = closure_18(message(tmp2[52]), obj17);
                                                            cResult[91] = message.publishNotice;
                                                            cResult[92] = projectId;
                                                            cResult[93] = tmp76;
                                                            tmp73 = tmp76;
                                                          }
                                                        }
                                                        if (true === message.interrupted) {
                                                          const _Symbol2 = Symbol;
                                                          if (cResult[98] === Symbol.for("react.memo_cache_sentinel")) {
                                                            const intl = tmp(tmp2[17]).intl;
                                                            const stringResult = intl.string(message(tmp2[18]).oOmBdX);
                                                            cResult[98] = stringResult;
                                                            let tmp57 = stringResult;
                                                          } else {
                                                            tmp57 = cResult[98];
                                                          }
                                                          const _Symbol3 = Symbol;
                                                          if (cResult[99] === Symbol.for("react.memo_cache_sentinel")) {
                                                            const obj18 = {
                                                              line: tmp57,
                                                              live: false,
                                                              settled: true,
                                                              inGutter: true,
                                                              glyph: null,
                                                            };
                                                            const obj19 = {
                                                              size: "refresh_sm",
                                                              color: message(tmp2[9]).colors.TEXT_MUTED,
                                                            };
                                                            obj18.glyph = closure_18(tmp(tmp2[60]).StopIcon, obj19);
                                                            const tmp64 = closure_18(message(tmp2[10]), obj18);
                                                            cResult[99] = tmp64;
                                                            let tmp60 = tmp64;
                                                            const tmp63 = message(tmp2[10]);
                                                          } else {
                                                            tmp60 = cResult[99];
                                                          }
                                                          if (cResult[100] !== tmp4.activityBox) {
                                                            const obj20 = { style: tmp4.activityBox, children: tmp60 };
                                                            const tmp68 = closure_18(replied, obj20);
                                                            cResult[100] = tmp4.activityBox;
                                                            cResult[101] = tmp68;
                                                            let tmp65 = tmp68;
                                                          } else {
                                                            tmp65 = cResult[101];
                                                          }
                                                          if (cResult[102] === tmp39) {
                                                            if (cResult[103] === tmp31) {
                                                              if (cResult[104] === tmp65) {
                                                                let tmp69 = cResult[105];
                                                              }
                                                              return tmp69;
                                                            }
                                                          }
                                                          const obj21 = { style: tmp31, children: null };
                                                          const items3 = [tmp65, tmp39];
                                                          obj21.children = items3;
                                                          const tmp72 = closure_19(replied, obj21);
                                                          cResult[102] = tmp39;
                                                          cResult[103] = tmp31;
                                                          cResult[104] = tmp65;
                                                          cResult[105] = tmp72;
                                                          tmp69 = tmp72;
                                                        } else if (cResult[106] !== message.steps) {
                                                          const _Symbol = Symbol;
                                                          if (
                                                            cResult[108] === Symbol.for("react.memo_cache_sentinel")
                                                          ) {
                                                            class Le {
                                                              constructor(arg0) {
                                                                tmp = "error" === projectId.kind;
                                                                if (!tmp) {
                                                                  str = "terminal_error";
                                                                  tmp = "terminal_error" === projectId.kind;
                                                                }
                                                                return tmp;
                                                              }
                                                            }
                                                            cResult[108] = Le;
                                                          } else {
                                                            class Le {
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
                                                          const found = steps.find(Le);
                                                          cResult[106] = message.steps;
                                                          cResult[107] = found;
                                                        } else {
                                                          class Le {
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
                                                            class Le {
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
                                                          const tmp47 = turnSettled(message);
                                                          if (tmp47) {
                                                            class Le {
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
                                                              class Le {
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
                                                                class Le {
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
                                                          if (tmp47) {
                                                            class Le {
                                                              constructor(arg0) {
                                                                tmp = "error" === projectId.kind;
                                                                if (!tmp) {
                                                                  str = "terminal_error";
                                                                  tmp = "terminal_error" === projectId.kind;
                                                                }
                                                                return tmp;
                                                              }
                                                            }
                                                            if (tmp50 == null) {
                                                              class Le {
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
                                                          if (tmp47) {
                                                            class Le {
                                                              constructor(arg0) {
                                                                tmp = "error" === projectId.kind;
                                                                if (!tmp) {
                                                                  str = "terminal_error";
                                                                  tmp = "terminal_error" === projectId.kind;
                                                                }
                                                                return tmp;
                                                              }
                                                            }
                                                            if (tmp52 == null) {
                                                              class Le {
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
                                                          if (cResult[109] === isNewest) {
                                                            class Le {
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
                                                          let tmp54;
                                                          if ("open" === secretRequestStatus) {
                                                            class Le {
                                                              constructor(arg0) {
                                                                tmp = "error" === projectId.kind;
                                                                if (!tmp) {
                                                                  str = "terminal_error";
                                                                  tmp = "terminal_error" === projectId.kind;
                                                                }
                                                                return tmp;
                                                              }
                                                            }
                                                            const activeAwaitingUserResult = obj10.activeAwaitingUser(
                                                              message,
                                                              isNewest,
                                                            );
                                                            if (activeAwaitingUserResult == null) {
                                                              class Le {
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
                                                            tmp54 = activeAwaitingUserResult;
                                                          }
                                                          cResult[109] = isNewest;
                                                          cResult[110] = message;
                                                          cResult[111] = secretRequestStatus;
                                                          cResult[112] = tmp54;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                let tmp40 = null;
                                                if (hostsReminder) {
                                                  class Le {
                                                    constructor(arg0) {
                                                      tmp = "error" === projectId.kind;
                                                      if (!tmp) {
                                                        str = "terminal_error";
                                                        tmp = "terminal_error" === projectId.kind;
                                                      }
                                                      return tmp;
                                                    }
                                                  }
                                                  const obj22 = {
                                                    style: tmp4.reminderSlot,
                                                    reminder,
                                                    renderReminder: tmp38,
                                                  };
                                                  tmp40 = closure_18(message(tmp2[55]), obj22);
                                                }
                                                cResult[49] = hostsReminder;
                                                cResult[50] = reminder;
                                                cResult[51] = tmp38;
                                                cResult[52] = tmp4.reminderSlot;
                                                cResult[53] = tmp40;
                                                tmp39 = tmp40;
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
                                      obj3.children = collapsedCategories(ConjurePublishNoticeLineDefault, obj4);
                                      obj2.children = collapsedCategories(React5, obj3);
                                      return collapsedCategories(React5, obj2);
                                    } else if ("ideas" === arg0) {
                                      const obj = { style: closure_12.reminderSeparated, children: null };
                                      const obj5 = {
                                        style: closure_12.spoken,
                                        onAsk: onAskForIdeas,
                                        attribution: null,
                                      };
                                      const obj6 = { children: null };
                                      const obj7 = { style: null, children: null };
                                      items = [,];
                                      ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                      obj7.style = items;
                                      obj7.children = collapsedCategories(ConjureMessageAuthor.ConjureAvatar, {});
                                      const items1 = [collapsedCategories(React5, obj7)];
                                      const obj8 = {
                                        style: closure_12.header,
                                        children: collapsedCategories(ConjureMessageAuthor.ConjureHeader, {}),
                                      };
                                      items1[1] = collapsedCategories(React5, obj8);
                                      obj6.children = items1;
                                      obj5.attribution = closure_2_19(constants2, obj6);
                                      obj.children = collapsedCategories(ConjureIdeasOfferDefault, obj5);
                                      return collapsedCategories(React5, obj);
                                    }
                                  }
                                  cResult[40] = onAskForIdeas;
                                  cResult[41] = projectId;
                                  cResult[42] = tmp4.avatar;
                                  cResult[43] = tmp4.avatarSpoken;
                                  cResult[44] = tmp4.header;
                                  cResult[45] = tmp4.reminderSeparated;
                                  cResult[46] = tmp4.reminderTip;
                                  cResult[47] = tmp4.spoken;
                                  cResult[48] = renderReminder;
                                  tmp38 = renderReminder;
                                }
                              }
                            }
                          }
                          function _e() {
                            const obj2 = { content, userId: user_id, onRestoreVersion: null };
                            let fn;
                            if (null != closure_17) {
                              if (null != onRestoreVersion) {
                                fn = () =>
                                  projectId(groupStart[51]).confirmRestoreVersion({
                                    onConfirm() {
                                      return closure_1_11(closure_1_17);
                                    },
                                  });
                              }
                            }
                            obj2.onRestoreVersion = fn;
                            return ConjureMessageActionSheet.showConjureMessageActions(obj2);
                          }
                          cResult[35] = user_id;
                          cResult[36] = tmp28;
                          cResult[37] = onRestoreVersion;
                          cResult[38] = tmp33;
                          cResult[39] = _e;
                        }
                        let turnRestoreEntryResult = null;
                        if (null != onRestoreVersion) {
                          class Le {
                            constructor(arg0) {
                              tmp = "error" === projectId.kind;
                              if (!tmp) {
                                str = "terminal_error";
                                tmp = "terminal_error" === projectId.kind;
                              }
                              return tmp;
                            }
                          }
                          turnRestoreEntryResult = obj8.turnRestoreEntry(message);
                        }
                        cResult[32] = message;
                        cResult[33] = onRestoreVersion;
                        cResult[34] = turnRestoreEntryResult;
                        tmp33 = turnRestoreEntryResult;
                      }
                      const items4 = [tmp4.row, rowGroupStart];
                      cResult[29] = tmp4.row;
                      cResult[30] = rowGroupStart;
                      cResult[31] = items4;
                      tmp31 = items4;
                    }
                    function ce() {
                      if (null != replied) {
                        if (onJumpToReplied != null) {
                          tmp2(tmp.id);
                        }
                      }
                    }
                    cResult[22] = onJumpToReplied;
                    cResult[23] = replied;
                    cResult[24] = ce;
                  }
                }
                function oe() {
                  return onTogglePlan(message.render_id, planSuperseded);
                }
                cResult[18] = message.render_id;
                cResult[19] = onTogglePlan;
                cResult[20] = planSuperseded;
                cResult[21] = oe;
              }
            }
            function ae() {
              return onToggleChecklist(message.render_id, checklistSuperseded);
            }
            cResult[14] = checklistSuperseded;
            cResult[15] = message.render_id;
            cResult[16] = onToggleChecklist;
            cResult[17] = ae;
          }
          const obj24 = { turnActive: !tmp11 };
          const turnSegmentsResult = tmp(tmp2[38]).turnSegments(message.steps, obj24);
          cResult[7] = message.steps;
          cResult[8] = !tmp11;
          cResult[9] = turnSegmentsResult;
          const tmpResult9 = tmp(tmp2[38]);
        }
        let obj = projectId(groupStart[15]);
        const timelineTree = projectId(groupStart[38]).buildTimelineTree(message.steps, { turnActive: tmp8 });
        cResult[2] = message.steps;
        cResult[3] = !tmp5;
        cResult[4] = timelineTree;
        tmp9 = timelineTree;
        const tmpResult10 = projectId(groupStart[38]);
      }
    : function MessageRow(projectId) {
        projectId = projectId.projectId;
        const message = projectId.message;
        const groupStart = projectId.groupStart;
        ({ isNewest, reminder, checklistSuperseded } = projectId);
        ({ secretRequestStatus, onToggleChecklist } = projectId);
        const planSuperseded = projectId.planSuperseded;
        const onTogglePlan = projectId.onTogglePlan;
        const replied = projectId.replied;
        const onJumpToReplied = projectId.onJumpToReplied;
        ({ onAskForIdeas: closure_9, onDismissClarification: closure_10, onRestoreVersion } = projectId);
        let trimmed;
        let user_id;
        let memo5;
        let restoreProposal;
        let clarification;
        c20 = undefined;
        c21 = undefined;
        let index;
        closure_23 = undefined;
        let open;
        ({
          first,
          hostsReminder,
          checklistExpanded,
          planVersion,
          planExpanded,
          onApprovePlan,
          onPickIdea,
          onAnswerClarification,
          clarificationDismissed,
        } = projectId);
        let tmp = closure_28();
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
        const callback = onToggleChecklist.useCallback(
          () => onToggleChecklist(message.render_id, checklistSuperseded),
          items4,
        );
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
        const memo4 = onToggleChecklist.useMemo(
          () => ConjureDesignFeedback.parseConjureDesignRemark(message.content),
          items7,
        );
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
        const items8 = [tmp.row];
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
        const items9 = [message, onRestoreVersion];
        memo5 = onToggleChecklist.useMemo(() => {
          let turnRestoreEntryResult = null;
          if (null != onRestoreVersion) {
            turnRestoreEntryResult = ConjureChatRestore.turnRestoreEntry(message);
          }
          return turnRestoreEntryResult;
        }, items9);
        const items10 = [trimmed, user_id, memo5, onRestoreVersion];
        const callback3 = onToggleChecklist.useCallback(() => {
          const obj2 = { content: trimmed, userId: user_id, onRestoreVersion: null };
          let fn;
          if (null != memo5) {
            if (null != onRestoreVersion) {
              fn = () =>
                projectId(groupStart[51]).confirmRestoreVersion({
                  onConfirm() {
                    return closure_1_11(closure_1_17);
                  },
                });
            }
          }
          obj2.onRestoreVersion = fn;
          return ConjureMessageActionSheet.showConjureMessageActions(obj2);
        }, items10);
        if ("" === trimmed) {
          let tmp17 = null;
          if (hostsReminder) {
            let obj2 = {
              style: tmp.reminderSlot,
              reminder,
              renderReminder(arg0) {
                if ("outdated" === arg0) {
                  const obj2 = { style: closure_12.reminderTip, children: null };
                  const obj3 = { style: closure_12.spoken, children: null };
                  const obj4 = { projectId, notice: "outdated" };
                  obj3.children = collapsedCategories(ConjurePublishNoticeLineDefault, obj4);
                  obj2.children = collapsedCategories(React5, obj3);
                  return collapsedCategories(React5, obj2);
                } else if ("ideas" === arg0) {
                  const obj = { style: closure_12.reminderSeparated, children: null };
                  const obj5 = { style: closure_12.spoken, onAsk, attribution: null };
                  const obj6 = { children: null };
                  const obj7 = { style: null, children: null };
                  items = [,];
                  ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                  obj7.style = items;
                  obj7.children = collapsedCategories(ConjureMessageAuthor.ConjureAvatar, {});
                  const items1 = [collapsedCategories(React5, obj7)];
                  const obj8 = {
                    style: closure_12.header,
                    children: collapsedCategories(ConjureMessageAuthor.ConjureHeader, {}),
                  };
                  items1[1] = collapsedCategories(React5, obj8);
                  obj6.children = items1;
                  obj5.attribution = closure_2_19(constants2, obj6);
                  obj.children = collapsedCategories(ConjureIdeasOfferDefault, obj5);
                  return collapsedCategories(React5, obj);
                }
              },
            };
            tmp17 = restoreProposal(message(groupStart[55]), obj2);
          }
          if ("user" === message.role) {
            if ("" === trimmed) {
              if (null == memo4) {
                if (null == attachments) {
                  return null;
                }
              }
            }
            const conjureAgentReactionLabel = projectId(groupStart[56]).getConjureAgentReactionLabel(
              message.agentReaction,
            );
            let obj5 = { style: items8, onLongPress: tmp16, accessible: false, children: null };
            let tmp107 = null;
            if (groupStart) {
              let obj6 = { style: tmp.avatar, children: null };
              let obj7 = { userId: message.user_id };
              obj6.children = restoreProposal(tmp102(tmp103[54]).ConjureUserAvatar, obj7);
              tmp107 = restoreProposal(replied, obj6);
            }
            const items11 = [tmp107, , , ,];
            let tmp110 = null;
            if (groupStart) {
              let obj8 = { style: tmp.header, children: null };
              ({ user_id: obj48.userId, created_at: obj48.at } = message);
              obj8.children = restoreProposal(tmp102(tmp103[54]).ConjureUserHeader, { userId: null, at: null });
              tmp110 = restoreProposal(replied, obj8);
              const obj9 = { userId: null, at: null };
            }
            items11[1] = tmp110;
            if (tmp15) {
              let combined;
              if (!groupStart) {
                const intl3 = tmp102(tmp103[17]).intl;
                const _HermesInternal = HermesInternal;
                combined = "" + intl3.string(tmp102(tmp103[17]).t.KD6OJJ) + ": " + trimmed;
              }
              const obj10 = {
                variant: "text-md/normal",
                color: "text-default",
                accessibilityLabel: combined,
                children: null,
              };
              let tmp116 = null;
              if (null != memo4) {
                const obj11 = { label: memo4.label, variant: "text-md/medium" };
                tmp116 = restoreProposal(message(tmp103[57]), obj11);
              }
              const items12 = [tmp116, ,];
              let str6 = null;
              if (null != memo4) {
                str6 = null;
                if (tmp15) {
                  str6 = " ";
                }
              }
              items12[1] = str6;
              items12[2] = trimmed;
              obj10.children = items12;
              let tmp105Result = tmp105(tmp102(tmp103[19]).Text, obj10);
            } else {
              tmp105Result = null;
            }
            items11[2] = tmp105Result;
            let tmp119 = null;
            if (null != attachments) {
              const obj12 = { projectId, attachments };
              tmp119 = restoreProposal(closure_32, obj12);
            }
            items11[3] = tmp119;
            let tmp122 = null;
            if (null != message.agentReaction) {
              tmp122 = null;
              if (null != conjureAgentReactionLabel) {
                const obj13 = {
                  style: tmp.agentReaction,
                  accessible: true,
                  accessibilityRole: "image",
                  accessibilityLabel: conjureAgentReactionLabel,
                  children: null,
                };
                const obj14 = { name: message.agentReaction, fastImageStyle: tmp.agentReactionEmoji };
                obj13.children = restoreProposal(message(tmp103[58]), obj14);
                tmp122 = restoreProposal(replied, obj13);
              }
            }
            items11[4] = tmp122;
            obj5.children = items11;
            return clarification(onTogglePlan, obj5);
          } else {
            if ("project_event" === message.kind) {
              if (null != message.projectEvent) {
                const obj15 = { style: items8, children: null };
                const obj16 = { projectId, event: message.projectEvent };
                obj15.children = restoreProposal(message(groupStart[59]), obj16);
                return restoreProposal(replied, obj15);
              }
            }
            if ("publish_notice" === message.kind) {
              if (null != message.publishNotice) {
                const obj17 = { style: items8, children: null };
                const obj18 = { projectId, notice: message.publishNotice };
                const items13 = [restoreProposal(message(groupStart[52]), obj18), tmp17];
                obj17.children = items13;
                return clarification(replied, obj17);
              }
            }
            if (true === message.interrupted) {
              const obj19 = { style: items8, children: null };
              const obj20 = { style: tmp.activityBox, children: null };
              const obj21 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
              const intl2 = projectId(groupStart[17]).intl;
              obj21.line = intl2.string(message(groupStart[18]).oOmBdX);
              const obj22 = { size: "refresh_sm", color: message(groupStart[9]).colors.TEXT_MUTED };
              obj21.glyph = restoreProposal(projectId(groupStart[60]).StopIcon, obj22);
              obj20.children = restoreProposal(message(groupStart[10]), obj21);
              const items14 = [restoreProposal(replied, obj20), tmp17];
              obj19.children = items14;
              return clarification(replied, obj19);
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
              const tmp23 = memo5(message);
              let ideas = null;
              if (tmp23) {
                ideas = null;
                if (null != message.ideas) {
                  ideas = null;
                  if (message.ideas.length > 0) {
                    ideas = message.ideas;
                  }
                }
              }
              let tmp25 = null;
              if (tmp23) {
                let publishCta = message.publishCta;
                if (publishCta == null) {
                  publishCta = null;
                }
                tmp25 = publishCta;
              }
              let tmp27 = null;
              if (tmp23) {
                let secretRequest = message.secretRequest;
                if (secretRequest == null) {
                  secretRequest = null;
                }
                tmp27 = secretRequest;
              }
              if ("open" === secretRequestStatus) {
                let obj3 = projectId(groupStart[61]);
                const tmp29 = projectId(groupStart[61]).activeAwaitingUser(message, isNewest);
                const activeAwaitingUserResult = projectId(groupStart[61]).activeAwaitingUser(message, isNewest);
              }
              let tmp33 = null;
              if (tmp23) {
                let settingsRequest = message.settingsRequest;
                if (settingsRequest == null) {
                  settingsRequest = null;
                }
                tmp33 = settingsRequest;
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
              let items19 = memo2;
              if (memo2 == null) {
                let todos = null;
                if (null != message.todos) {
                  todos = null;
                  if (message.todos.length > 0) {
                    todos = message.todos;
                  }
                }
                items19 = todos;
              }
              if (null == items19) {
                if (null != message.provisionalTodo) {
                  if ("" !== message.provisionalTodo) {
                    const provisionalTodo = message.provisionalTodo;
                  }
                }
              }
              const obj23 = {
                steps: message.steps,
                content: trimmed,
                hasProposal: null != proposal,
                hasAttachments: null != attachments,
              };
              const turnPresentation = projectId(groupStart[62]).resolveTurnPresentation(obj23);
              ({ showsClosingMessage, replyKey: c20 } = turnPresentation);
              let tmp41 = memo.steps.length > 0;
              if (!tmp41) {
                tmp41 = memo.tasks.length > 0;
              }
              if (!tmp41) {
                if (0 === turnPresentation.streamed.length) {
                  if ("" === trimmed) {
                    if (null == proposal) {
                      if (null == found) {
                        if (null == ideas) {
                          if (null == items19) {
                            if (null == provisionalTodo) {
                              if (null == tmp27) {
                                if (null == tmp33) {
                                  if (null == attachments) {
                                    if (null == clarification) {
                                      if (null == restoreProposal) {
                                        if (null == tmp25) {
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
              let obj4 = projectId(groupStart[62]);
              const tmp22 = memo5;
              const turnLeadsWithStretchResult = projectId(groupStart[62]).turnLeadsWithStretch(
                tmp41,
                turnPresentation,
              );
              c21 = turnLeadsWithStretchResult;
              const found1 = memo1.filter((hasWork) => hasWork.hasWork);
              const atResult = found1.at(-1);
              index = undefined;
              if (atResult != null) {
                index = atResult.index;
              }
              const tmp45 = !tmp22(message);
              closure_23 = tmp45;
              const tmp38Result = projectId(groupStart[62]);
              const obj24 = { turnActive: tmp45 };
              open = projectId(groupStart[38]).turnLifecycle(memo1, obj24).open;
              let avatarSpokenReplying = groupStart;
              if (groupStart) {
                avatarSpokenReplying = null != replied;
              }
              let tmp49Result = null;
              if (avatarSpokenReplying) {
                const obj25 = { replied, onJump: null };
                let tmp52;
                if (null != onJumpToReplied) {
                  tmp52 = callback2;
                }
                obj25.onJump = tmp52;
                tmp49Result = restoreProposal(message(tmp39[13]), obj25);
                const tmp51 = message(tmp39[13]);
              }
              const items15 = [tmp49Result, ,];
              const items16 = [, ,];
              ({ avatar: arr15[0], avatarSpoken: arr15[1] } = tmp);
              if (avatarSpokenReplying) {
                avatarSpokenReplying = tmp.avatarSpokenReplying;
              }
              const obj26 = { children: null };
              const obj27 = { style: null, children: null };
              items16[2] = avatarSpokenReplying;
              obj27.style = items16;
              obj27.children = restoreProposal(projectId(groupStart[54]).ConjureAvatar, {});
              items15[1] = restoreProposal(replied, obj27);
              const obj28 = { style: tmp.header, children: null };
              const obj29 = { at: message.created_at };
              obj28.children = restoreProposal(projectId(groupStart[54]).ConjureHeader, obj29);
              items15[2] = restoreProposal(replied, obj28);
              obj26.children = items15;
              const tmp46Result = clarification(c20, obj26);
              const obj30 = { style: items8, onLongPress: tmp16, accessible: false, children: null };
              let tmp53Result = null;
              if (turnLeadsWithStretchResult) {
                tmp53Result = null;
                if (groupStart) {
                  const obj31 = { style: tmp.spoken, children: tmp46Result };
                  tmp53Result = tmp53(tmp54, obj31);
                }
              }
              const items17 = [
                tmp53Result,
                memo1.map((prose, index) => {
                  let tmp19Result = null;
                  if (null != prose.prose) {
                    tmp19Result = null;
                    if (prose.prose.key !== c20) {
                      const obj2 = { style: closure_12.spoken, children: null };
                      const obj3 = { source: prose.prose.content, streaming: null };
                      let tmp5 = closure_23;
                      if (closure_23) {
                        tmp5 = index === memo1.length - 1;
                      }
                      if (tmp5) {
                        tmp5 = !prose.hasWork;
                      }
                      obj3.streaming = tmp5;
                      obj2.children = collapsedCategories(ConjureNativeMarkdown.ConjureRevealedMarkdown, obj3);
                      tmp19Result = collapsedCategories(React5, obj2);
                    }
                  }
                  const children = [tmp19Result];
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
                      let tmp16 = c21;
                      if (c21) {
                        tmp16 = groupStart;
                      }
                      if (tmp16) {
                        tmp16 = 0 === index;
                      }
                      if (tmp16) {
                        let tmp17 = null == prose.prose;
                        if (!tmp17) {
                          tmp17 = prose.prose.key === c20;
                        }
                        tmp16 = tmp17;
                      }
                      obj.besideAvatar = tmp16;
                      tmp7Result = collapsedCategories(closure_36, obj);
                    }
                    obj6 = {};
                  }
                  children[1] = tmp7Result;
                  return closure_2_19(noop.Fragment, { children }, prose.key);
                }),
                ,
                ,
              ];
              if (!showsClosingMessage) {
                if (null == proposal) {
                  if (null == clarification) {
                    if (null == restoreProposal) {
                      if (null == ideas) {
                        if (null == tmp27) {
                          if (null == tmp33) {
                            if (null == attachments) {
                              if (null == found) {
                                if (null == items19) {
                                  if (null == provisionalTodo) {
                                    let tmp46Result2 = null;
                                  }
                                  items17[2] = tmp46Result2;
                                  let tmp53Result14 = null;
                                  if (null != tmp29) {
                                    const obj32 = { style: tmp.spoken, children: null };
                                    const obj33 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                    const intl = tmp38(tmp39[17]).intl;
                                    obj33.children = intl.string(message(tmp39[18]).YR8A2v);
                                    obj32.children = tmp53(tmp38(tmp39[19]).Text, obj33);
                                    tmp53Result14 = tmp53(tmp54, obj32);
                                  }
                                  items17[3] = tmp53Result14;
                                  items17[4] = tmp17;
                                  obj30.children = items17;
                                  return tmp46(tmp56, obj30);
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
              const obj34 = { style: tmp.spoken, children: null };
              let tmp59 = null;
              if (groupStart) {
                tmp59 = null;
                if (!turnLeadsWithStretchResult) {
                  tmp59 = tmp46Result;
                }
              }
              const items18 = [tmp59, , , , , , , , , , , ,];
              let tmp53Result15 = null;
              if (showsClosingMessage) {
                const obj35 = { source: turnPresentation.closingContent };
                tmp53Result15 = tmp53(message(tmp39[30]), obj35);
              }
              items18[1] = tmp53Result15;
              let tmp53Result16 = null;
              if ("side_reply" === message.kind) {
                const obj36 = {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: tmp38(tmp39[63]).midTurnCaption(message.acknowledges),
                };
                tmp53Result16 = tmp53(tmp38(tmp39[19]).Text, obj36);
                const tmp38Result5 = tmp38(tmp39[63]);
              }
              items18[2] = tmp53Result16;
              let tmp53Result17 = null;
              if (null != attachments) {
                const obj37 = { projectId, attachments };
                tmp53Result17 = tmp53(closure_32, obj37);
              }
              items18[3] = tmp53Result17;
              if (null != items19) {
                const tmp67 = message(tmp39[25]);
                if (items19 == null) {
                  items19 = [];
                }
                const obj38 = { children: null };
                const obj39 = {
                  todos: items19,
                  provisional: provisionalTodo,
                  agents: memo3,
                  live: null,
                  superseded: null,
                  expanded: null,
                  onToggleExpanded: null,
                };
                const tmp68 = message(tmp39[64]);
                obj39.live = tmp38(tmp39[65]).checklistLive(message);
                obj39.superseded = checklistSuperseded;
                obj39.expanded = checklistExpanded;
                obj39.onToggleExpanded = callback;
                obj38.children = tmp53(tmp68, obj39);
                let tmp53Result18 = tmp53(tmp67, obj38);
                const tmp38Result6 = tmp38(tmp39[65]);
              } else {
                tmp53Result18 = null;
              }
              items18[4] = tmp53Result18;
              let tmp53Result19 = null;
              if (null != proposal) {
                const obj40 = {
                  projectId,
                  proposal,
                  version: planVersion,
                  superseded: planSuperseded,
                  expanded: planExpanded,
                  onToggleExpanded: callback1,
                  onApprove: onApprovePlan,
                };
                tmp53Result19 = tmp53(closure_30, obj40);
              }
              items18[5] = tmp53Result19;
              let tmp53Result20 = null;
              if (null != clarification) {
                const obj41 = {
                  projectId,
                  clarification,
                  onSubmit: onAnswerClarification,
                  onDismiss() {
                    return closure_1_10(clarification.id);
                  },
                };
                tmp53Result20 = tmp53(message(tmp39[66]), obj41);
              }
              items18[6] = tmp53Result20;
              let tmp53Result21 = null;
              if (null != tmp27) {
                const obj42 = {
                  projectId,
                  cardId: message.render_id,
                  request: tmp27,
                  status: secretRequestStatus,
                  awaiting: tmp29,
                };
                tmp53Result21 = tmp53(message(tmp39[67]), obj42);
              }
              items18[7] = tmp53Result21;
              let tmp53Result22 = null;
              if (null != tmp33) {
                const obj44 = { projectId, request: tmp33 };
                tmp53Result22 = tmp53(message(tmp39[68]), obj44);
              }
              items18[8] = tmp53Result22;
              let tmp53Result23 = null;
              if (null != tmp25) {
                const obj45 = { projectId };
                tmp53Result23 = tmp53(message(tmp39[69]), obj45);
              }
              items18[9] = tmp53Result23;
              let tmp53Result24 = null;
              if (null != ideas) {
                const obj46 = { ideas, onPick: onPickIdea };
                tmp53Result24 = tmp53(closure_31, obj46);
              }
              items18[10] = tmp53Result24;
              let tmp53Result25 = null;
              if (null != restoreProposal) {
                const obj47 = { proposal: restoreProposal, onRestore: null };
                let fn;
                if (isNewest) {
                  if (null != onRestoreVersion) {
                    fn = () =>
                      ConjureVersionRestoreConfirm.confirmRestoreVersion({
                        onConfirm() {
                          return onRestoreVersion(projectId(groupStart[49]).proposalRestoreEntry(restoreProposal));
                        },
                      });
                  }
                }
                obj47.onRestore = fn;
                tmp53Result25 = tmp53(closure_38, obj47);
              }
              items18[11] = tmp53Result25;
              let tmp53Result26 = null;
              if (null != found) {
                tmp53Result26 = null;
                if ("message" in found) {
                  const obj49 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
                  tmp53Result26 = tmp53(tmp38(tmp39[19]).Text, obj49);
                }
              }
              items18[12] = tmp53Result26;
              obj34.children = items18;
              tmp46Result2 = tmp46(tmp54, obj34);
              const tmp38Result4 = projectId(groupStart[38]);
              tmp56 = onTogglePlan;
            }
          }
        }
      },
);
ReactCompilerGating = fn(558);
let obj16 = {
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_24,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureNativeChat(projectId) {
      const cResult = projectId(stateFromStores[15]).c(254);
      projectId = projectId.projectId;
      ({ transcriptTopInset, onRestoreVersion } = projectId);
      current();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [AppStateStore];
        const fn = function o() {
          return "active" === state.getState();
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
      let obj = projectId(stateFromStores[15]);
      stateFromStores = projectId(stateFromStores[70]).useStateFromStores(tmp8, tmp9, tmp10);
      const bottom = onRestoreVersion(tmp4[71])().bottom;
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === projectId) {
          let tmp13 = cResult[5];
          let tmp14 = cResult[6];
        }
        const effect = stateFromStores3.useEffect(tmp13, tmp14);
        const ackConjureProjectWhileViewing = tmp2(tmp4[72]).useAckConjureProjectWhileViewing(projectId);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ConjureChatStore];
          cResult[7] = items2;
          let tmp19 = items2;
        } else {
          tmp19 = cResult[7];
        }
        if (cResult[8] !== projectId) {
          class N {
            constructor() {
              return closure_16.getMessages(projectId);
            }
          }
          const items3 = [projectId];
          cResult[8] = projectId;
          cResult[9] = N;
          cResult[10] = items3;
          let tmp22 = items3;
        } else {
          class N {
            constructor() {
              return closure_16.getMessages(projectId);
            }
          }
          tmp22 = cResult[10];
        }
        let obj3 = stateFromStores3;
        const tmp2Result15 = tmp2(tmp4[72]);
        const stateFromStores1 = tmp2(tmp4[70]).useStateFromStores(tmp19, N, tmp22);
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor() {
              return closure_16.getMessages(projectId);
            }
          }
          const items4 = [ConjureProjectStore];
          cResult[11] = items4;
          const tmp26 = items4;
        } else {
          class N {
            constructor() {
              return closure_16.getMessages(projectId);
            }
          }
        }
        if (cResult[12] !== projectId) {
          class U {
            constructor() {
              publishStatus = closure_15.getPublishStatus(projectId);
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
          cResult[13] = U;
          cResult[14] = items5;
          let tmp28 = items5;
        } else {
          class U {
            constructor() {
              publishStatus = closure_15.getPublishStatus(projectId);
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
          tmp28 = cResult[14];
        }
        const tmp2Result16 = tmp2(tmp4[70]);
        const stateFromStores2 = tmp2(tmp4[70]).useStateFromStores(tmp26, U, tmp28);
        if (cResult[15] === stateFromStores1) {
          class U {
            constructor() {
              publishStatus = closure_15.getPublishStatus(projectId);
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
          _slicedToArray = tmp32;
          const _Symbol3 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                publishStatus = closure_15.getPublishStatus(projectId);
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
            const tmp36 = items6;
          } else {
            class U {
              constructor() {
                publishStatus = closure_15.getPublishStatus(projectId);
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
                return closure_16.isThinking(projectId);
              }
            }
            const items7 = [projectId];
            cResult[19] = projectId;
            cResult[20] = Y;
            cResult[21] = items7;
            let tmp38 = items7;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            tmp38 = cResult[21];
          }
          stateFromStores3 = tmp2(tmp4[70]).useStateFromStores(tmp36, Y, tmp38);
          const _Symbol4 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            const items8 = [ConjureChatStore];
            cResult[22] = items8;
            const tmp42 = items8;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
          }
          if (cResult[23] !== projectId) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            const items9 = [projectId];
            cResult[23] = projectId;
            cResult[24] = tmp45;
            cResult[25] = items9;
            let tmp44 = items9;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            tmp44 = cResult[25];
          }
          const tmp2Result18 = tmp2(tmp4[70]);
          const stateFromStores4 = tmp2(tmp4[70]).useStateFromStores(tmp42, tmp45, tmp44);
          const _Symbol5 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            const items10 = [ConjureChatStore];
            cResult[26] = items10;
            const tmp49 = items10;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
          }
          if (cResult[27] !== projectId) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            const items11 = [projectId];
            cResult[27] = projectId;
            cResult[28] = tmp52;
            cResult[29] = items11;
            let tmp51 = items11;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            tmp51 = cResult[29];
          }
          const tmp2Result19 = tmp2(tmp4[70]);
          const stateFromStores5 = tmp2(tmp4[70]).useStateFromStores(tmp49, tmp52, tmp51);
          const _Symbol6 = Symbol;
          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            const items12 = [ConjureChatStore];
            cResult[30] = items12;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
          }
          if (cResult[31] !== projectId) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            const items13 = [projectId];
            cResult[31] = projectId;
            cResult[32] = tmp59;
            cResult[33] = items13;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
          }
          tmp2(tmp4[70]);
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
          const _Symbol7 = Symbol;
          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            const items14 = [ConjureChatStore];
            cResult[34] = items14;
            const tmp63 = items14;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
          }
          if (cResult[35] !== projectId) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            const items15 = [projectId];
            cResult[35] = projectId;
            cResult[36] = tmp66;
            cResult[37] = items15;
            let tmp65 = items15;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            tmp65 = cResult[37];
          }
          const tmp2Result20 = tmp2(tmp4[70]);
          const stateFromStores6 = tmp2(tmp4[70]).useStateFromStores(tmp63, tmp66, tmp65);
          const tmp2Result22 = tmp2(tmp4[70]);
          [tmp73, tmp74] = obj3.useState(null);
          let tmp75 = null == tmp73;
          if (!tmp75) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            if (stateFromStores3) {
              class Y {
                constructor() {
                  return closure_16.isThinking(projectId);
                }
              }
            }
            tmp75 = tmp76;
          }
          if (!tmp75) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
          }
          if (cResult[38] !== projectId) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            cResult[38] = projectId;
            cResult[39] = tmp78;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
          }
          if (stateFromStores3) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
          }
          const _Symbol8 = Symbol;
          if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            const items16 = [ConjureConnectionStore];
            cResult[40] = items16;
            const tmp80 = items16;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
          }
          if (cResult[41] !== projectId) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            const items17 = [projectId];
            cResult[41] = projectId;
            cResult[42] = tmp83;
            cResult[43] = items17;
            let tmp82 = items17;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            tmp82 = cResult[43];
          }
          const tmp72 = _slicedToArray(obj3.useState(null), 2);
          const stateFromStores7 = tmp2(tmp4[70]).useStateFromStores(tmp80, tmp83, tmp82);
          const _Symbol9 = Symbol;
          if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
            const items18 = [ConjureConnectionStore];
            cResult[44] = items18;
            const tmp87 = items18;
          } else {
            class Y {
              constructor() {
                return closure_16.isThinking(projectId);
              }
            }
          }
          if (cResult[45] !== projectId) {
            class Re {
              constructor() {
                return closure_14.isChatStopped(projectId);
              }
            }
            const items19 = [projectId];
            cResult[45] = projectId;
            cResult[46] = Re;
            cResult[47] = items19;
            let tmp89 = items19;
          } else {
            class Re {
              constructor() {
                return closure_14.isChatStopped(projectId);
              }
            }
            tmp89 = cResult[47];
          }
          const tmp2Result23 = tmp2(tmp4[70]);
          const stateFromStores8 = tmp2(tmp4[70]).useStateFromStores(tmp87, Re, tmp89);
          const _Symbol10 = Symbol;
          if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
            class Re {
              constructor() {
                return closure_14.isChatStopped(projectId);
              }
            }
            const items20 = [ConjureChatStore];
            cResult[48] = items20;
            const tmp93 = items20;
          } else {
            class Re {
              constructor() {
                return closure_14.isChatStopped(projectId);
              }
            }
          }
          if (cResult[49] !== projectId) {
            class Ae {
              constructor() {
                return closure_16.hasLoadedHistory(projectId);
              }
            }
            const items21 = [projectId];
            cResult[49] = projectId;
            cResult[50] = Ae;
            cResult[51] = items21;
            let tmp95 = items21;
          } else {
            class Ae {
              constructor() {
                return closure_16.hasLoadedHistory(projectId);
              }
            }
            tmp95 = cResult[51];
          }
          const tmp2Result24 = tmp2(tmp4[70]);
          const stateFromStores9 = tmp2(tmp4[70]).useStateFromStores(tmp93, Ae, tmp95);
          const _Symbol11 = Symbol;
          if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
            class Ae {
              constructor() {
                return closure_16.hasLoadedHistory(projectId);
              }
            }
            const items22 = [ConjureChatStore];
            cResult[52] = items22;
            const tmp99 = items22;
          } else {
            class Ae {
              constructor() {
                return closure_16.hasLoadedHistory(projectId);
              }
            }
          }
          if (cResult[53] !== projectId) {
            class De {
              constructor() {
                return closure_16.isHistoryUnavailable(projectId);
              }
            }
            const items23 = [projectId];
            cResult[53] = projectId;
            cResult[54] = De;
            cResult[55] = items23;
            let tmp101 = items23;
          } else {
            class De {
              constructor() {
                return closure_16.isHistoryUnavailable(projectId);
              }
            }
            tmp101 = cResult[55];
          }
          const tmp2Result25 = tmp2(tmp4[70]);
          const stateFromStores10 = tmp2(tmp4[70]).useStateFromStores(tmp99, De, tmp101);
          if (cResult[56] === stateFromStores7) {
            class De {
              constructor() {
                return closure_16.isHistoryUnavailable(projectId);
              }
            }
          }
          const tmp2Result26 = tmp2(tmp4[70]);
          let obj2 = {
            historyLoaded: stateFromStores9,
            historyUnavailable: stateFromStores10,
            connState: stateFromStores7,
          };
          const chatEmptyStateResult = tmp2(tmp4[74]).chatEmptyState(obj2);
          cResult[56] = stateFromStores7;
          cResult[57] = stateFromStores9;
          cResult[58] = stateFromStores10;
          cResult[59] = chatEmptyStateResult;
          const tmp2Result27 = tmp2(tmp4[74]);
        }
        const tmp2Result17 = tmp2(tmp4[70]);
        const tmp2Result28 = tmp2(tmp4[73]);
        cResult[15] = stateFromStores1;
        cResult[16] = stateFromStores2;
        cResult[17] = tmp2(tmp4[73]).withLivePublishCard(stateFromStores1, stateFromStores2);
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
        const withLivePublishCardResult = tmp2(tmp4[73]).withLivePublishCard(stateFromStores1, stateFromStores2);
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
      tmp14 = items24;
      tmp13 = P;
      const tmp2Result = projectId(stateFromStores[70]);
    }
  : function ConjureNativeChat(projectId) {
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
      autoscrollToBottomThreshold = undefined;
      closure_22 = undefined;
      fadingEdgeLength = undefined;
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
      let tmp = c28();
      items = [stateFromStores10];
      stateFromStores = projectId(stateFromStores[70]).useStateFromStores(
        items,
        () => "active" === stateFromStores10.getState(),
        [],
      );
      let obj2 = stateFromStores2;
      const items1 = [stateFromStores, projectId];
      const effect = stateFromStores2.useEffect(() => {
        if (stateFromStores) {
          options(projectId);
        }
      }, items1);
      let obj = projectId(stateFromStores[70]);
      const ackConjureProjectWhileViewing = projectId(stateFromStores[72]).useAckConjureProjectWhileViewing(projectId);
      let obj3 = projectId(stateFromStores[72]);
      const items2 = [onToggleChecklist];
      const items3 = [projectId];
      const stateFromStores1 = projectId(stateFromStores[70]).useStateFromStores(
        items2,
        () => ConjureChatStore.getMessages(projectId),
        items3,
      );
      const obj4 = projectId(stateFromStores[70]);
      const items4 = [c15];
      const items5 = [projectId];
      stateFromStores2 = projectId(stateFromStores[70]).useStateFromStores(
        items4,
        () => {
          const publishStatus = ConjureProjectStore.getPublishStatus(projectId);
          state = undefined;
          if (publishStatus != null) {
            state = publishStatus.state;
          }
          if (state == null) {
            state = null;
          }
          return state;
        },
        items5,
      );
      const items6 = [stateFromStores1, stateFromStores2];
      const memo = stateFromStores2.useMemo(
        () => conjurePublishCard.withLivePublishCard(stateFromStores1, stateFromStores2),
        items6,
      );
      const obj5 = projectId(stateFromStores[70]);
      const items7 = [onToggleChecklist];
      const items8 = [projectId];
      const stateFromStores3 = projectId(stateFromStores[70]).useStateFromStores(
        items7,
        () => ConjureChatStore.isThinking(projectId),
        items8,
      );
      const obj6 = projectId(stateFromStores[70]);
      const items9 = [onToggleChecklist];
      const items10 = [projectId];
      const stateFromStores4 = projectId(stateFromStores[70]).useStateFromStores(
        items9,
        () => ConjureChatStore.isCompacting(projectId),
        items10,
      );
      const obj7 = projectId(stateFromStores[70]);
      const items11 = [onToggleChecklist];
      const items12 = [projectId];
      const stateFromStores5 = projectId(stateFromStores[70]).useStateFromStores(
        items11,
        () => ConjureChatStore.isSaving(projectId),
        items12,
      );
      const obj8 = projectId(stateFromStores[70]);
      const items13 = [onToggleChecklist];
      const items14 = [projectId];
      const stateFromStores6 = projectId(stateFromStores[70]).useStateFromStores(
        items13,
        () => ConjureChatStore.getThinkingActivity(projectId),
        items14,
      );
      const obj9 = projectId(stateFromStores[70]);
      const items15 = [onToggleChecklist];
      const items16 = [projectId];
      const stateFromStores7 = projectId(stateFromStores[70]).useStateFromStores(
        items15,
        () => ConjureChatStore.getProjectUsage(projectId),
        items16,
      );
      const obj10 = projectId(stateFromStores[70]);
      [tmp18, tmp19] = stateFromStores1(stateFromStores2.useState(null), 2);
      c7 = tmp19;
      let tmp20 = null == tmp18;
      if (!tmp20) {
        let tmp21 = stateFromStores3;
        if (stateFromStores3) {
          tmp21 = tmp18 === projectId;
        }
        tmp20 = tmp21;
      }
      if (!tmp20) {
        tmp19(null);
      }
      const items17 = [projectId];
      let tmp24 = stateFromStores3;
      const callback = obj2.useCallback(
        () =>
          _undefined((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          }),
        items17,
      );
      if (stateFromStores3) {
        tmp24 = tmp18 === projectId;
      }
      let tmp17 = stateFromStores1(stateFromStores2.useState(null), 2);
      const items18 = [c14];
      const items19 = [projectId];
      const stateFromStores8 = projectId(stateFromStores[70]).useStateFromStores(
        items18,
        () => ConjureConnectionStore.getConnState(projectId),
        items19,
      );
      const tmp25 = c14;
      const tmp2Result = projectId(stateFromStores[70]);
      const items20 = [c14];
      const items21 = [projectId];
      const stateFromStores9 = projectId(stateFromStores[70]).useStateFromStores(
        items20,
        () => ConjureConnectionStore.isChatStopped(projectId),
        items21,
      );
      const tmp2Result16 = projectId(stateFromStores[70]);
      const items22 = [onToggleChecklist];
      const items23 = [projectId];
      stateFromStores10 = projectId(stateFromStores[70]).useStateFromStores(
        items22,
        () => ConjureChatStore.hasLoadedHistory(projectId),
        items23,
      );
      const tmp2Result17 = projectId(stateFromStores[70]);
      const items24 = [onToggleChecklist];
      const items25 = [projectId];
      const stateFromStores11 = projectId(stateFromStores[70]).useStateFromStores(
        items24,
        () => ConjureChatStore.isHistoryUnavailable(projectId),
        items25,
      );
      const tmp2Result18 = projectId(stateFromStores[70]);
      const chatEmptyStateResult = projectId(stateFromStores[74]).chatEmptyState({
        historyLoaded: stateFromStores10,
        historyUnavailable: stateFromStores11,
        connState: stateFromStores8,
      });
      render_id = null;
      if (memo.length > 0) {
        render_id = memo[memo.length - 1].render_id;
      }
      const findLastResult = memo.findLast((role) => {
        let tmp = "assistant" === role.role;
        if (tmp) {
          tmp = closure_17(role);
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
      const tmp2Result19 = projectId(stateFromStores[74]);
      const items27 = [tmp25];
      const items28 = [projectId];
      stateFromStores12 = projectId(stateFromStores[70]).useStateFromStores(
        items27,
        () => {
          const settings = ConjureConnectionStore.getSettings(projectId);
          let secrets;
          if (settings != null) {
            secrets = settings.secrets;
          }
          return secrets;
        },
        items28,
      );
      const items29 = [memo, stateFromStores12];
      memo1 = obj2.useMemo(() => ConjureSecretRequestState.secretRequestStatuses(memo, stateFromStores12), items29);
      const tmp2Result20 = projectId(stateFromStores[70]);
      [c14, c15] = stateFromStores1(
        obj2.useState(() => new Map()),
        2,
      );
      onToggleChecklist = obj2.useCallback((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        _undefined2((get) => projectId(stateFromStores[65]).toggleChecklist(get, closure_0, closure_1));
      }, []);
      const items30 = [memo];
      closure_17 = obj2.useMemo(() => conjurePendingPlan.planVersions(memo), items30);
      const tmp16Result = stateFromStores1(
        obj2.useState(() => new Map()),
        2,
      );
      [c18, c19] = stateFromStores1(
        obj2.useState(() => new Map()),
        2,
      );
      onTogglePlan = obj2.useCallback((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        _undefined3((get) => projectId(stateFromStores[76]).togglePlanCard(get, closure_0, closure_1));
      }, []);
      const items31 = [memo];
      autoscrollToBottomThreshold = obj2.useMemo(
        () =>
          ConjureChatGrouping.groupChatRows(
            memo.map((key) => {
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
            }),
          ),
        items31,
      );
      const items32 = [projectId];
      closure_22 = obj2.useCallback(() => {
        const intl = util.intl;
        conjureAttachmentDrafts.sendConjureCardReply(projectId, intl.string(_modDef3827.EMgIuY));
      }, items32);
      const items33 = [projectId];
      fadingEdgeLength = obj2.useCallback((implementation_prompt) => {
        conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
      }, items33);
      const tmp16Result7 = stateFromStores1(
        obj2.useState(() => new Map()),
        2,
      );
      [tmp39, tmp40] = stateFromStores1(onRestoreVersion(stateFromStores[79])(projectId), 2);
      const tmp16Result8 = stateFromStores1(onRestoreVersion(stateFromStores[79])(projectId), 2);
      conjureReminder = projectId(stateFromStores[80]).useConjureReminder(projectId, memo, tmp39);
      const items34 = [projectId];
      closure_25 = obj2.useCallback(() => {
        const intl = util.intl;
        __initData2(projectId, intl.string(_modDef3827["t5CN3+"]));
      }, items34);
      const items35 = [projectId];
      closure_26 = obj2.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
        conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt, {
          clarificationAnswers,
          attachments,
        });
      }, items35);
      const tmp2Result21 = projectId(stateFromStores[80]);
      [c27, c28] = stateFromStores1(obj2.useState(null), 2);
      let tmp44 = tmp43;
      if ("open" !== stateFromStores8) {
        tmp44 = "connecting" === stateFromStores8;
      }
      if (tmp44) {
        tmp44 = !stateFromStores9;
      }
      canSend = tmp44;
      const items36 = [memo];
      memo2 = obj2.useMemo(() => conjurePendingPlan.pendingPlanRenderId(memo), items36);
      const tmp16Result9 = stateFromStores1(obj2.useState(null), 2);
      joined = Array.from(memo1, (arg0) => {
        [tmp, tmp2] = arg0;
        return "" + tmp + ":" + tmp2;
      }).join(",");
      const items37 = [conjureReminder, tmp44, memo2, joined];
      const items38 = [memo];
      const memo3 = obj2.useMemo(
        () => ({ reminder: conjureReminder, canSend, pendingPlanId: memo2, secretStatusesKey: joined }),
        items37,
      );
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
      let tmp50 = null != memo5;
      if (tmp50) {
        tmp50 = memo5.steps.length > 0 || memo5.tasks.length > 0;
        const tmp51 = memo5.steps.length > 0 || memo5.tasks.length > 0;
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
      const tmp16Result10 = stateFromStores1(obj2.useState(null), 2);
      [tmp55, c35] = stateFromStores1(obj2.useState(64), 2);
      const callback1 = obj2.useCallback((nativeEvent) => {
        closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
        _undefined5((arg0) => {
          let tmp = closure_0;
          if (arg0 === closure_0) {
            tmp = arg0;
          }
          return tmp;
        });
      }, []);
      const tmp16Result11 = stateFromStores1(obj2.useState(64), 2);
      bound = tmp55;
      if (!tmp2Result22.isIOS()) {
        let _Math = Math;
        bound = Math.min(tmp55, fadingEdgeLength);
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
        closure_41.current = timestamp + c22;
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
        __initData(projectId);
      }, items43);
      const callback5 = obj2.useCallback(() => {
        closure_40.current = false;
      }, []);
      tmp2Result22 = projectId(stateFromStores[43]);
      [tmp67, c45] = stateFromStores1(obj2.useState(false), 2);
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
        closure_38.current = {
          offsetY: nativeEvent.contentOffset.y,
          viewportHeight: nativeEvent.layoutMeasurement.height,
          contentHeight: nativeEvent.contentSize.height,
        };
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
          ref4.current = Math.min(timestamp + c22, ref5.current);
          callback2();
        }
        const current2 = ref.current;
        if (null != current2) {
          if (current2.contentHeight - current2.offsetY - current2.viewportHeight <= c21 * current2.viewportHeight) {
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
      const memo7 = obj2.useMemo(
        () => ({ itemVisiblePercentThreshold: projectId(stateFromStores[81]).MIN_VISIBLE_PERCENT }),
        [],
      );
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
        _undefined4(set);
        callback6();
      }, items46);
      if (stateFromStores5) {
        const intl3 = tmp2(tmp3[17]).intl;
        memo6 = intl3.string(tmp5(tmp3[18]).mKK6wB);
      } else if (stateFromStores4) {
        const intl2 = tmp2(tmp3[17]).intl;
        memo6 = intl2.string(tmp5(tmp3[18]).xnCAaP);
      } else if (memo6 == null) {
        let intl = tmp2(tmp3[17]).intl;
        memo6 = intl.string(tmp5(tmp3[18]).L9EDub);
      }
      const items47 = [memo, memo4];
      let tmp74;
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
        tmp74 = memo[memo4];
      }
      let checklistLiveResult = null == tmp74;
      if (!checklistLiveResult) {
        checklistLiveResult = tmp2(tmp3[65]).checklistLive(tmp74);
        const tmp2Result23 = tmp2(tmp3[65]);
      }
      if (null != tmp74) {
        const tmp2Result24 = tmp2(tmp3[82]);
        const conjureTurnStartedAtResult = tmp2(tmp3[82]).conjureTurnStartedAt(tmp74);
      }
      const items48 = [memo5];
      let tmp78;
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
          render_id2 = tmp79.render_id;
        }
        tmp78 = render_id2;
      }
      let tmp81 = null != tmp78;
      if (tmp81) {
        tmp81 = (null != obj19 && !obj19.has(tmp78)) || tmp67;
        const tmp82 = (null != obj19 && !obj19.has(tmp78)) || tmp67;
      }
      let tmp83 = null;
      if (stateFromStores3) {
        tmp83 = null;
        if (tmp50) {
          tmp83 = null;
          if (tmp81) {
            tmp83 = memo6;
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
        __initData2(projectId, arg0, arg1);
      }, items53);
      let connectionLabelResult = null;
      const callback12 = obj2.useCallback(() => {
        closure_2_11(projectId);
      }, items54);
      if ("open" !== stateFromStores8) {
        connectionLabelResult = tmp2(tmp3[84]).connectionLabel(stateFromStores8);
        const tmp2Result25 = tmp2(tmp3[84]);
      }
      const tmp16Result12 = stateFromStores1(obj2.useState(false), 2);
      const obj11 = { style: tmp.container, children: null };
      const conjureControlActive = projectId(stateFromStores[85]).useConjureControlActive(projectId);
      const items55 = [
        c18(onRestoreVersion(stateFromStores[86]), {
          thinking: stateFromStores3,
          bleedBottom: onRestoreVersion(stateFromStores[71])().bottom,
        }),
        ,
      ];
      const obj12 = { style: tmp.transcriptArea, children: null };
      const obj13 = { clearance: tmp55, children: null };
      const obj14 = {
        ref,
        fadingEdgeLength,
        removeClippedSubviews: null,
        viewabilityConfig: null,
        onViewableItemsChanged: null,
        onScroll: null,
        onScrollBeginDrag: null,
        onContentSizeChange: null,
        onStartReached: null,
        scrollEventThrottle: 16,
        contentInset: null,
        ListHeaderComponent: null,
        style: null,
        contentContainerStyle: null,
        data: null,
        extraData: null,
        maintainVisibleContentPosition: null,
        keyExtractor: null,
        ListEmptyComponent: null,
        renderItem: null,
      };
      const tmp2Result26 = projectId(stateFromStores[85]);
      const tmp93 = ref;
      const tmp2Result27 = projectId(stateFromStores[43]);
      obj14.removeClippedSubviews = projectId(stateFromStores[43]).isIOS() && undefined;
      obj14.viewabilityConfig = memo7;
      obj14.onViewableItemsChanged = callback9;
      obj14.onScroll = callback7;
      obj14.onScrollBeginDrag = callback5;
      obj14.onContentSizeChange = callback8;
      obj14.onStartReached = callback4;
      const tmp94 = projectId(stateFromStores[43]).isIOS() && undefined;
      let tmp95;
      if (tmp2Result28.isIOS()) {
        const obj15 = { top: num };
        tmp95 = obj15;
      }
      obj14.contentInset = tmp95;
      tmp2Result28 = projectId(stateFromStores[43]);
      let tmp92Result = null;
      if (!tmp2Result29.isIOS()) {
        tmp92Result = null;
        if (num > 0) {
          const obj16 = { style: null };
          const obj17 = { height: num };
          obj16.style = obj17;
          tmp92Result = tmp92(tmp91, obj16);
        }
      }
      obj14.ListHeaderComponent = tmp92Result;
      const items56 = [tmp.transcript];
      tmp2Result29 = projectId(stateFromStores[43]);
      const isIOSResult = projectId(stateFromStores[43]).isIOS();
      let tmp98 = !isIOSResult;
      if (!isIOSResult) {
        const obj18 = { marginBottom: tmp55 - bound };
        tmp98 = obj18;
      }
      items56[1] = tmp98;
      obj14.style = items56;
      const items57 = [tmp.transcriptContent];
      const tmp2Result30 = projectId(stateFromStores[43]);
      items57[1] = { paddingBottom: bound + onRestoreVersion(stateFromStores[9]).space.PX_8 };
      obj14.contentContainerStyle = items57;
      obj14.data = memo;
      obj14.extraData = memo3;
      obj14.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
      obj14.keyExtractor = function keyExtractor(render_id) {
        return render_id.render_id;
      };
      let tmp99 = "loading" === chatEmptyStateResult;
      if (tmp99) {
        obj14.ListEmptyComponent = null;
        obj14.renderItem = function renderItem(arg0) {
          ({ item, index } = arg0);
          const obj = {
            projectId,
            message: item,
            groupStart: null,
            first: null,
            isNewest: null,
            hostsReminder: null,
            reminder: null,
            checklistSuperseded: null,
            secretRequestStatus: null,
            checklistExpanded: null,
            onToggleChecklist: null,
            planVersion: null,
            planSuperseded: null,
            planExpanded: null,
            onTogglePlan: null,
            replied: null,
            onJumpToReplied: null,
            onApprovePlan: null,
            onPickIdea: null,
            onAskForIdeas: null,
            onAnswerClarification: null,
            clarificationDismissed: null,
            onDismissClarification: null,
            onRestoreVersion: null,
          };
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
          const value4 = closure_17.get(item.render_id);
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
          return collapsedCategories(closure_39, obj);
        };
        obj13.children = tmp92(tmp2(tmp3[87]).FlashList, obj14);
        const items58 = [tmp92(tmp93, obj13), ,];
        let tmp92Result4 = null;
        if (tmp24) {
          const obj22 = { projectId };
          tmp92Result4 = tmp92(tmp5(tmp3[88]), obj22);
        }
        items58[1] = tmp92Result4;
        let tmp92Result5 = null;
        if (null != tmp83) {
          const obj23 = {
            line: tmp83,
            onJumpToActivity: callback10,
            bottom: tmp5(tmp3[9]).space.PX_12 + tmp55,
            todos: memo8,
            todosLive: checklistLiveResult,
            agents: memo9,
          };
          tmp92Result5 = tmp92(tmp5(tmp3[89]), obj23);
          const tmp5Result = tmp5(tmp3[89]);
        }
        items58[2] = tmp92Result5;
        obj12.children = items58;
        items55[1] = tmp90(tmp91, obj12);
        const obj24 = { style: tmp.bottomStack, onLayout: callback1, children: null };
        const obj25 = {
          projectId,
          thinking: stateFromStores3,
          turnStartedAt: conjureTurnStartedAtResult,
          compacting: stateFromStores4,
          saving: stateFromStores5,
          recalling: null,
          activity: null,
          projectUsage: null,
          connLabel: null,
          controlling: null,
          connFailed: null,
          thinkingOpen: null,
          onToggleThinking: null,
        };
        if (tmp99) {
          tmp99 = 0 === memo.length;
        }
        obj25.recalling = tmp99;
        obj25.activity = stateFromStores6;
        obj25.projectUsage = stateFromStores7;
        obj25.connLabel = connectionLabelResult;
        obj25.controlling = conjureControlActive;
        obj25.connFailed = "failed" === stateFromStores8;
        obj25.thinkingOpen = tmp24;
        obj25.onToggleThinking = callback;
        const items59 = [tmp92(tmp5(tmp3[90]), obj25)];
        const obj26 = {
          projectId,
          canSend: tmp44,
          running: stateFromStores3,
          stopped: stateFromStores9,
          onSend: callback11,
          onInterrupt: null,
          onDraftHasTextChange: null,
        };
        let tmp106;
        const tmp5Result3 = tmp5(tmp3[90]);
        if (stateFromStores3) {
          tmp106 = callback12;
        }
        obj26.onInterrupt = tmp106;
        obj26.onDraftHasTextChange = tmp40;
        items59[1] = tmp92(tmp5(tmp3[91]), obj26);
        obj24.children = items59;
        items55[2] = tmp90(tmp91, obj24);
        obj11.children = items55;
        return tmp90(tmp91, obj11);
      } else {
        const obj27 = { style: tmp.placeholder, children: null };
        const intl4 = tmp2(tmp3[17]).intl;
        if ("unavailable" === chatEmptyStateResult) {
          let AyiQEp = tmp5(tmp3[18]).Td4Sf4;
        } else {
          AyiQEp = tmp5(tmp3[18]).AyiQEp;
        }
        const obj28 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(AyiQEp) };
        obj27.children = tmp92(tmp2(tmp3[19]).Text, obj28);
        tmp92(tmp91, obj27);
      }
    };
