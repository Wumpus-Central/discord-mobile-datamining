// discord_app/modules/conjure/chat/native/ConjureNativeChat.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import MarkupUtilsDefault from "../../../markup/MarkupUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../../_runtime/05605_LinearGradient.js";
import _modDef6052 from "../../../../../_runtime/metro/06052__.js";
import ConjureDesignFeedback from "../../design_feedback/ConjureDesignFeedback.tsx";
import ConjureHistoryFormat from "../../history/ConjureHistoryFormat.tsx";
import ConjureVersionRestoreConfirm from "../../history/native/ConjureVersionRestoreConfirm.tsx";
import ConjureNativeStatusLineDefault from "../../agent_activity/native/ConjureNativeStatusLine.tsx";
import ConjureMessageAuthor from "ConjureMessageAuthor.tsx";
import ConjureMessageActionSheet from "ConjureMessageActionSheet.tsx";
import useConjureAttachmentImage from "../useConjureAttachmentImage.tsx";
import ConjureNativeCardSurfaceDefault from "../../shared/native/ConjureNativeCardSurface.tsx";
import ConjureNativeCollapsibleSection from "../../shared/native/ConjureNativeCollapsibleSection.tsx";
import ConjurePlanAutomodExamples from "../../plan/native/ConjurePlanAutomodExamples.tsx";
import ConjureNativeMarkdown from "ConjureNativeMarkdown.tsx";
import ConjureTimelineTree from "../../agent_activity/ConjureTimelineTree.tsx";
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
import ConjureChatStore_mod from "../ConjureChatStore.tsx";

const ConjureNativeCollapsibleSectionDefault = ConjureNativeCollapsibleSection;
const ConjurePlanAutomodExamplesDefault = ConjurePlanAutomodExamples;

require = fn;
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: hasOwnProperty,
  Image: metroRequire,
  Pressable: closure_7,
  View: closure_8,
} = get_ActivityIndicator);
let ConjureConnectionStore = fn(12904);
({
  ensureConnection: c10,
  getAttachmentUrl: closure_11,
  interruptTurn: closure_12,
  sendUserMessage: map1,
} = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
let ConjureChatStore = fn(12905);
({ getOlderHistoryCursor: closure_16, turnSettled: closure_17 } = ConjureChatStore);
let ConjureChatStore = ConjureChatStore_mod;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
let diff = fn(16654).MESSAGE_CONTENT_INSET - fn(16654).MESSAGE_EDGE_INSET;
let c22 = 0.2;
let c23 = 500;
let c24 = 52;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, ,];
let obj2 = _modDef683(BLACK);
items[1] = _modDef683(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(4890);
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
  paddingLeft: fn(16654).MESSAGE_CONTENT_INSET,
  paddingRight: fn(16654).MESSAGE_EDGE_INSET,
  paddingVertical: 2,
  gap: PX_8,
};
obj.rowGroupStart = { marginTop: PX_12 };
const rect = { position: "absolute", left: fn(16654).MESSAGE_EDGE_INSET, top: 2 };
obj.avatar = rect;
obj.spoken = { position: "relative", gap: PX_8 };
const rect1 = { left: fn(16654).MESSAGE_EDGE_INSET - fn(16654).MESSAGE_CONTENT_INSET, top: 0 };
obj.avatarSpoken = rect1;
let obj5 = {
  position: "relative",
  paddingLeft: fn(16654).MESSAGE_CONTENT_INSET,
  paddingRight: fn(16654).MESSAGE_EDGE_INSET,
  paddingVertical: 2,
  gap: PX_8,
};
obj.avatarSpokenReplying = { top: fn(16656).REPLY_PREVIEW_HEIGHT + PX_8 };
obj.reminderSlot = { marginTop: -PX_8 };
obj.reminderTip = { paddingTop: PX_8 };
obj.reminderSeparated = { paddingTop: PX_12 + 4 };
let obj6 = { top: fn(16656).REPLY_PREVIEW_HEIGHT + PX_8 };
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
let closure_29 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(7);
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
          const stringResult = intl.string(_modDef3723["3/aHX6"]);
          cResult[0] = stringResult;
          let first = stringResult;
        } else {
          first = cResult[0];
        }
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl2 = util.intl;
          obj3.children = intl2.string(_modDef3723.X15LLY);
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
                return cResult[6];
              }
            }
          }
        }
        items = [tmp9];
        if (null == src) {
          const obj4 = { style: designPlaceholder.designPlaceholder, children: null };
          const obj5 = { size: "small", accessibilityLabel: first };
          obj4.children = closure_1_19(hasOwnProperty, obj5);
          let tmp17 = closure_1_19(closure_1_8, obj4);
        } else {
          const obj6 = {
            source: null,
            style: null,
            resizeMode: "cover",
            onError: null,
            accessible: true,
            accessibilityRole: "image",
            accessibilityLabel: null,
          };
          const obj7 = { uri: src };
          obj6.source = obj7;
          obj6.style = designPlaceholder.designImage;
          obj6.onError = handleError;
          obj6.accessibilityLabel = first;
          tmp17 = closure_1_19(timestampProducer, obj6);
        }
        const obj8 = { direction: "vertical", spacing: 4, children: null };
        items[1] = tmp17;
        obj8.children = items;
        const tmp13Result = closure_1_20(Stack_Stack.Stack, obj8);
        cResult[2] = handleError;
        cResult[3] = src;
        src = designPlaceholder.designImage;
        cResult[4] = src;
        designPlaceholder = designPlaceholder.designPlaceholder;
        cResult[5] = designPlaceholder;
        cResult[6] = tmp13Result;
      }
    }
  : (arg0) => {
      ({ projectId, design } = arg0);
      const tmp = closure_29();
      const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(projectId, design.id);
      const src = conjureAttachmentImage.src;
      if (conjureAttachmentImage.gone) {
        return null;
      } else {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3723["3/aHX6"]);
        const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
        const intl2 = util.intl;
        obj2.children = intl2.string(_modDef3723.X15LLY);
        items = [closure_1_19(Text_Text.Text, obj2)];
        if (null == src) {
          const obj3 = { style: tmp.designPlaceholder, children: null };
          const obj4 = { size: "small", accessibilityLabel: stringResult };
          obj3.children = closure_1_19(hasOwnProperty, obj4);
          let tmp9Result = closure_1_19(closure_1_8, obj3);
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
          tmp9Result = closure_1_19(timestampProducer, obj5);
        }
        const obj7 = { direction: "vertical", spacing: 4, children: null };
        items[1] = tmp9Result;
        obj7.children = items;
        return closure_1_20(Stack_Stack.Stack, obj7);
      }
    };
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(90);
      ({ projectId, proposal, version, superseded, expanded, onToggleExpanded, onApprove } = arg0);
      const tmp6 = closure_29();
      if (cResult[0] === (undefined === expanded || expanded)) {
        if (cResult[1] === onToggleExpanded) {
          if (cResult[2] === proposal) {
            if (cResult[3] === tmp4) {
              if (cResult[4] === version) {
                if (cResult[43] === cResult[5]) {
                  if (cResult[44] === tmp19) {
                    if (cResult[45] === tmp20) {
                      if (cResult[46] === tmp21) {
                        let tmp71 = cResult[47];
                      }
                      if (cResult[48] !== tmp11) {
                        let tmp76 = null;
                        if (null != tmp11) {
                          tmp76 = null;
                          if (tmp11.examples.length > 0) {
                            const obj2 = { automod: tmp11 };
                            tmp76 = closure_1_19(ConjurePlanAutomodExamplesDefault, obj2);
                          }
                        }
                        cResult[48] = tmp11;
                        cResult[49] = tmp76;
                        let tmp74 = tmp76;
                      } else {
                        tmp74 = cResult[49];
                      }
                      if (cResult[50] === tmp11) {
                        if (cResult[51] === projectId) {
                          if (cResult[52] === proposal.design_image) {
                            let tmp79 = cResult[53];
                          }
                          if (cResult[54] !== proposal.changes) {
                            let tmp85 = null;
                            if (proposal.changes.length > 0) {
                              const obj3 = { direction: "vertical", spacing: 4, children: null };
                              const obj4 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                              const intl7 = util.intl;
                              obj4.children = intl7.string(_modDef3723["5+mG1z"]);
                              items = [closure_1_19(Text_Text.Text, obj4)];
                              const changes = proposal.changes;
                              items[1] = changes.map((item, index) =>
                                closure_1_19(
                                  require("Text/Text").Text,
                                  { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item },
                                  index,
                                ),
                              );
                              obj3.children = items;
                              tmp85 = closure_1_20(Stack_Stack.Stack, obj3);
                            }
                            cResult[54] = proposal.changes;
                            cResult[55] = tmp85;
                            let tmp84 = tmp85;
                          } else {
                            tmp84 = cResult[55];
                          }
                          if (cResult[56] !== arr2) {
                            let tmp90 = null;
                            if (arr2.length > 0) {
                              const obj5 = { direction: "vertical", spacing: 4, children: null };
                              const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                              const intl8 = util.intl;
                              obj6.children = intl8.string(_modDef3723["2UbW6r"]);
                              const items1 = [closure_1_19(Text_Text.Text, obj6)];
                              const obj7 = {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: arr2.join(", "),
                              };
                              items1[1] = closure_1_19(Text_Text.Text, obj7);
                              obj5.children = items1;
                              tmp90 = closure_1_20(Stack_Stack.Stack, obj5);
                            }
                            cResult[56] = arr2;
                            cResult[57] = tmp90;
                            let tmp89 = tmp90;
                          } else {
                            tmp89 = cResult[57];
                          }
                          if (cResult[58] !== arr) {
                            let tmp95 = null;
                            if (arr.length > 0) {
                              const obj8 = { direction: "vertical", spacing: 4, children: null };
                              const obj9 = { variant: "text-sm/semibold", color: "text-muted", children: null };
                              const intl9 = util.intl;
                              obj9.children = intl9.string(_modDef3723["7TKfpj"]);
                              const items2 = [closure_1_19(Text_Text.Text, obj9)];
                              const obj10 = {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: arr.join(", "),
                              };
                              items2[1] = closure_1_19(Text_Text.Text, obj10);
                              obj8.children = items2;
                              tmp95 = closure_1_20(Stack_Stack.Stack, obj8);
                            }
                            cResult[58] = arr;
                            cResult[59] = tmp95;
                            let tmp94 = tmp95;
                          } else {
                            tmp94 = cResult[59];
                          }
                          if (cResult[60] === onApprove) {
                            if (cResult[61] === tmp6) {
                              if (cResult[62] === tmp4) {
                                let tmp99 = cResult[63];
                              }
                              if (cResult[64] === tmp8) {
                                if (cResult[65] === tmp71) {
                                  if (cResult[66] === tmp74) {
                                    if (cResult[67] === tmp79) {
                                      if (cResult[68] === tmp84) {
                                        if (cResult[69] === tmp89) {
                                          if (cResult[70] === tmp94) {
                                            if (cResult[71] === tmp99) {
                                              if (cResult[72] === tmp22) {
                                                if (cResult[73] === tmp23) {
                                                  if (cResult[74] === tmp24) {
                                                    if (cResult[75] === tmp25) {
                                                      let tmp106 = cResult[76];
                                                    }
                                                    if (cResult[77] === tmp9) {
                                                      if (cResult[78] === tmp12) {
                                                        if (cResult[79] === tmp13) {
                                                          if (cResult[80] === tmp14) {
                                                            if (cResult[81] === tmp15) {
                                                              if (cResult[82] === tmp16) {
                                                                if (cResult[83] === tmp17) {
                                                                  if (cResult[84] === tmp18) {
                                                                    if (cResult[85] === tmp106) {
                                                                      let tmp109 = cResult[86];
                                                                    }
                                                                    if (cResult[87] === tmp10) {
                                                                      if (cResult[88] === tmp109) {
                                                                        let tmp112 = cResult[89];
                                                                      }
                                                                      return tmp112;
                                                                    }
                                                                    const obj11 = { children: tmp109 };
                                                                    const tmp114 = closure_1_19(tmp10, obj11);
                                                                    cResult[87] = tmp10;
                                                                    cResult[88] = tmp109;
                                                                    cResult[89] = tmp114;
                                                                    tmp112 = tmp114;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj12 = {
                                                      title: tmp12,
                                                      meta: tmp13,
                                                      superseded: tmp14,
                                                      expanded: tmp15,
                                                      onToggleExpanded: tmp16,
                                                      showLabel: tmp17,
                                                      hideLabel: tmp18,
                                                      children: tmp106,
                                                    };
                                                    const tmp111 = closure_1_19(tmp9, obj12);
                                                    cResult[77] = tmp9;
                                                    cResult[78] = tmp12;
                                                    cResult[79] = tmp13;
                                                    cResult[80] = tmp14;
                                                    cResult[81] = tmp15;
                                                    cResult[82] = tmp16;
                                                    cResult[83] = tmp17;
                                                    cResult[84] = tmp18;
                                                    cResult[85] = tmp106;
                                                    cResult[86] = tmp111;
                                                    tmp109 = tmp111;
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
                              const obj13 = { direction: tmp22, spacing: tmp23, children: null };
                              const items3 = [tmp24, tmp25, tmp71, tmp74, tmp79, tmp84, tmp89, tmp94, tmp99];
                              obj13.children = items3;
                              const tmp108 = closure_1_20(tmp8, obj13);
                              cResult[64] = tmp8;
                              cResult[65] = tmp71;
                              cResult[66] = tmp74;
                              cResult[67] = tmp79;
                              cResult[68] = tmp84;
                              cResult[69] = tmp89;
                              cResult[70] = tmp94;
                              cResult[71] = tmp99;
                              cResult[72] = tmp22;
                              cResult[73] = tmp23;
                              cResult[74] = tmp24;
                              cResult[75] = tmp25;
                              cResult[76] = tmp108;
                              tmp106 = tmp108;
                            }
                          }
                          let tmp101 = null;
                          if (null != onApprove) {
                            tmp101 = null;
                            if (!tmp4) {
                              const obj14 = { style: tmp6.planActions, children: null };
                              const obj15 = { text: null, variant: "primary", onPress: null };
                              const intl10 = util.intl;
                              obj15.text = intl10.string(_modDef3723["6S+wRM"]);
                              obj15.onPress = onApprove;
                              const items4 = [closure_1_19(components_Button_Button.Button, obj15)];
                              const obj16 = {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                style: tmp6.planReplyHint,
                                children: null,
                              };
                              const intl11 = util.intl;
                              obj16.children = intl11.string(_modDef3723.IZoqbR);
                              items4[1] = closure_1_19(Text_Text.Text, obj16);
                              obj14.children = items4;
                              tmp101 = closure_1_20(closure_1_8, obj14);
                            }
                          }
                          cResult[60] = onApprove;
                          cResult[61] = tmp6;
                          cResult[62] = tmp4;
                          cResult[63] = tmp101;
                          tmp99 = tmp101;
                        }
                      }
                      let tmp81 = null;
                      if (null == tmp11) {
                        tmp81 = null;
                        if (null != proposal.design_image) {
                          const obj17 = { projectId, design: proposal.design_image };
                          tmp81 = closure_1_19(closure_30, obj17);
                        }
                      }
                      cResult[50] = tmp11;
                      cResult[51] = projectId;
                      cResult[52] = proposal.design_image;
                      cResult[53] = tmp81;
                      tmp79 = tmp81;
                    }
                  }
                }
                const obj18 = { variant: cResult[19], color: cResult[20], children: cResult[21] };
                const tmp73 = closure_1_19(cResult[5], obj18);
                cResult[43] = cResult[5];
                cResult[44] = cResult[19];
                cResult[45] = cResult[20];
                cResult[46] = cResult[21];
                cResult[47] = tmp73;
                tmp71 = tmp73;
              }
            }
          }
        }
      }
      const trimmed = proposal.summary.trim();
      if (cResult[26] !== proposal.what_changed) {
        let str3;
        if (proposal.what_changed != null) {
          str3 = str2.trim();
        }
        if (str3 == null) {
          str3 = "";
        }
        cResult[26] = proposal.what_changed;
        cResult[27] = str3;
        let tmp27 = str3;
      } else {
        tmp27 = cResult[27];
      }
      if (cResult[28] !== proposal.bot_permissions) {
        let bot_permissions = proposal.bot_permissions;
        if (bot_permissions == null) {
          bot_permissions = [];
        }
        cResult[28] = proposal.bot_permissions;
        cResult[29] = bot_permissions;
        let tmp29 = bot_permissions;
      } else {
        tmp29 = cResult[29];
      }
      if (cResult[30] !== proposal.privileged_intents) {
        let privileged_intents = proposal.privileged_intents;
        if (privileged_intents == null) {
          privileged_intents = [];
        }
        cResult[30] = proposal.privileged_intents;
        cResult[31] = privileged_intents;
        let tmp31 = privileged_intents;
      } else {
        tmp31 = cResult[31];
      }
      const automod = proposal.automod;
      const tmp34 = ConjureNativeCardSurfaceDefault;
      const tmp35 = ConjureNativeCollapsibleSectionDefault;
      if (cResult[32] === (undefined !== superseded && superseded)) {
        if (cResult[33] === version) {
          if (cResult[35] !== tmp4) {
            let tmp41 = null;
            if (tmp4) {
              const obj19 = { children: null };
              const intl3 = util.intl;
              obj19.children = intl3.string(_modDef3723.hF2c41);
              tmp41 = closure_1_19(ConjureNativeCollapsibleSection.ConjureNativeCollapsibleMeta, obj19);
            }
            cResult[35] = tmp4;
            cResult[36] = tmp41;
            let tmp40 = tmp41;
          } else {
            tmp40 = cResult[36];
          }
          const _Symbol = Symbol;
          if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = util.intl;
            const stringResult = intl4.string(_modDef3723.yD8EJS);
            const intl5 = util.intl;
            const stringResult1 = intl5.string(_modDef3723.nSPGNb);
            cResult[37] = stringResult;
            cResult[38] = stringResult1;
            let tmp45 = stringResult1;
            let tmp44 = stringResult;
          } else {
            tmp44 = cResult[37];
            tmp45 = cResult[38];
          }
          const Stack = Stack_Stack.Stack;
          if (cResult[39] !== automod) {
            let tmp49 = null;
            if (null != automod) {
              tmp49 = closure_1_19(ConjurePlanAutomodExamples.ConjurePlanAutomodTypeTag, {});
            }
            cResult[39] = automod;
            cResult[40] = tmp49;
            let tmp48 = tmp49;
          } else {
            tmp48 = cResult[40];
          }
          if (cResult[41] !== tmp27) {
            let tmp52 = null;
            if ("" !== tmp27) {
              const obj20 = { direction: "vertical", spacing: 4, children: null };
              const obj21 = { variant: "text-sm/semibold", color: "text-muted", children: null };
              const intl12 = util.intl;
              obj21.children = intl12.string(_modDef3723.iNS4dl);
              const items5 = [closure_1_19(Text_Text.Text, obj21)];
              const obj22 = { variant: "text-md/normal", color: "text-default", children: tmp27 };
              items5[1] = closure_1_19(Text_Text.Text, obj22);
              obj20.children = items5;
              tmp52 = closure_1_20(Stack_Stack.Stack, obj20);
            }
            cResult[41] = tmp27;
            cResult[42] = tmp52;
            let tmp51 = tmp52;
          } else {
            tmp51 = cResult[42];
          }
          const Text = Text_Text.Text;
          if ("" === trimmed) {
            const intl6 = util.intl;
            let stringResult2 = intl6.string(_modDef3723["0+RUWx"]);
          } else {
            stringResult2 = MarkupUtilsDefault.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS);
            const tmp33Result = MarkupUtilsDefault;
          }
          cResult[0] = tmp5;
          cResult[1] = onToggleExpanded;
          cResult[2] = proposal;
          cResult[3] = tmp4;
          cResult[4] = version;
          cResult[5] = Text;
          cResult[6] = Stack;
          cResult[7] = tmp35;
          cResult[8] = tmp34;
          cResult[9] = automod;
          cResult[10] = tmp31;
          cResult[11] = tmp29;
          cResult[12] = cResult[34];
          cResult[13] = tmp40;
          cResult[14] = tmp4;
          cResult[15] = tmp5;
          cResult[16] = onToggleExpanded;
          cResult[17] = tmp44;
          cResult[18] = tmp45;
          version = "text-md/normal";
          cResult[19] = "text-md/normal";
          cResult[20] = "text-default";
          cResult[21] = stringResult2;
          cResult[22] = "vertical";
          cResult[23] = 8;
          cResult[24] = tmp48;
          cResult[25] = tmp51;
        }
      }
      if (!(undefined !== superseded && superseded)) {
        const intl = util.intl;
        let stringResult3 = intl.string(_modDef3723["3b6e7o"]);
        cResult[32] = tmp4;
        cResult[33] = version;
        cResult[34] = stringResult3;
      }
      const intl2 = util.intl;
      stringResult3 = intl2.formatToPlainString(_modDef3723.YZ3qJs, { version });
    }
  : (expanded) => {
      ({ proposal, version, superseded } = expanded);
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
      let privileged_intents = proposal.privileged_intents;
      if (privileged_intents == null) {
        privileged_intents = [];
      }
      const automod = proposal.automod;
      if (superseded) {
        if (null != version) {
          const intl2 = util.intl;
          const obj = { version };
          let formatToPlainStringResult = intl2.formatToPlainString(_modDef3723.YZ3qJs, obj);
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
        let tmp3Result = null;
        if (superseded) {
          const obj3 = { children: null };
          const intl3 = util.intl;
          obj3.children = intl3.string(_modDef3723.hF2c41);
          tmp3Result = closure_1_19(ConjureNativeCollapsibleSection.ConjureNativeCollapsibleMeta, obj3);
        }
        obj2.meta = tmp3Result;
        obj2.superseded = superseded;
        obj2.expanded = flag;
        obj2.onToggleExpanded = expanded.onToggleExpanded;
        const intl4 = util.intl;
        obj2.showLabel = intl4.string(_modDef3723.yD8EJS);
        const intl5 = util.intl;
        obj2.hideLabel = intl5.string(_modDef3723.nSPGNb);
        let tmp3Result4 = null;
        if (null != automod) {
          tmp3Result4 = closure_1_19(ConjurePlanAutomodExamples.ConjurePlanAutomodTypeTag, {});
        }
        items = [tmp3Result4, , , , , , , ,];
        let tmp12Result = null;
        if ("" !== str3) {
          const obj4 = { direction: "vertical", spacing: 4, children: null };
          const obj5 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl12 = util.intl;
          obj5.children = intl12.string(_modDef3723.iNS4dl);
          const items1 = [closure_1_19(Text_Text.Text, obj5)];
          const obj6 = { variant: "text-md/normal", color: "text-default", children: str3 };
          items1[1] = closure_1_19(Text_Text.Text, obj6);
          obj4.children = items1;
          tmp12Result = closure_1_20(Stack_Stack.Stack, obj4);
        }
        items[1] = tmp12Result;
        if ("" === trimmed) {
          const intl6 = util.intl;
          let stringResult = intl6.string(_modDef3723["0+RUWx"]);
        } else {
          stringResult = MarkupUtilsDefault.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS);
          const tmp4Result = MarkupUtilsDefault;
        }
        const obj7 = { variant: "text-md/normal", color: "text-default", children: stringResult };
        items[2] = closure_1_19(Text_Text.Text, obj7);
        let tmp3Result5 = null;
        if (null != automod) {
          tmp3Result5 = null;
          if (automod.examples.length > 0) {
            const obj8 = { automod };
            tmp3Result5 = closure_1_19(ConjurePlanAutomodExamplesDefault, obj8);
          }
        }
        items[3] = tmp3Result5;
        let tmp3Result6 = null;
        if (null == automod) {
          tmp3Result6 = null;
          if (null != proposal.design_image) {
            const obj9 = { projectId: expanded.projectId, design: proposal.design_image };
            tmp3Result6 = closure_1_19(closure_30, obj9);
          }
        }
        items[4] = tmp3Result6;
        let tmp12Result5 = null;
        if (proposal.changes.length > 0) {
          const obj10 = { direction: "vertical", spacing: 4, children: null };
          const obj11 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl7 = util.intl;
          obj11.children = intl7.string(_modDef3723["5+mG1z"]);
          const items2 = [closure_1_19(Text_Text.Text, obj11)];
          const changes = proposal.changes;
          items2[1] = changes.map((item, index) =>
            closure_1_19(
              require("Text/Text").Text,
              { variant: "text-sm/normal", color: "text-default", children: "\u2022 " + item },
              index,
            ),
          );
          obj10.children = items2;
          tmp12Result5 = closure_1_20(Stack_Stack.Stack, obj10);
        }
        items[5] = tmp12Result5;
        let tmp12Result6 = null;
        if (bot_permissions.length > 0) {
          const obj12 = { direction: "vertical", spacing: 4, children: null };
          const obj13 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl8 = util.intl;
          obj13.children = intl8.string(_modDef3723["2UbW6r"]);
          const items3 = [closure_1_19(Text_Text.Text, obj13)];
          const obj14 = { variant: "text-sm/normal", color: "text-default", children: bot_permissions.join(", ") };
          items3[1] = closure_1_19(Text_Text.Text, obj14);
          obj12.children = items3;
          tmp12Result6 = closure_1_20(Stack_Stack.Stack, obj12);
        }
        items[6] = tmp12Result6;
        let tmp12Result7 = null;
        if (privileged_intents.length > 0) {
          const obj15 = { direction: "vertical", spacing: 4, children: null };
          const obj16 = { variant: "text-sm/semibold", color: "text-muted", children: null };
          const intl9 = util.intl;
          obj16.children = intl9.string(_modDef3723["7TKfpj"]);
          const items4 = [closure_1_19(Text_Text.Text, obj16)];
          const obj17 = { variant: "text-sm/normal", color: "text-default", children: privileged_intents.join(", ") };
          items4[1] = closure_1_19(Text_Text.Text, obj17);
          obj15.children = items4;
          tmp12Result7 = closure_1_20(Stack_Stack.Stack, obj15);
        }
        items[7] = tmp12Result7;
        let tmp12Result8 = null;
        if (null != onApprove) {
          tmp12Result8 = null;
          if (!superseded) {
            const obj18 = { style: tmp.planActions, children: null };
            const obj19 = { text: null, variant: "primary", onPress: null };
            const intl10 = util.intl;
            obj19.text = intl10.string(_modDef3723["6S+wRM"]);
            obj19.onPress = onApprove;
            const items5 = [closure_1_19(components_Button_Button.Button, obj19)];
            const obj20 = { variant: "text-sm/normal", color: "text-muted", style: tmp.planReplyHint, children: null };
            const intl11 = util.intl;
            obj20.children = intl11.string(_modDef3723.IZoqbR);
            items5[1] = closure_1_19(Text_Text.Text, obj20);
            obj18.children = items5;
            tmp12Result8 = closure_1_20(closure_1_8, obj18);
          }
        }
        const obj21 = { children: null };
        const obj22 = { direction: "vertical", spacing: 8, children: null };
        items[8] = tmp12Result8;
        obj22.children = items;
        obj2.children = closure_1_20(Stack_Stack.Stack, obj22);
        obj21.children = closure_1_19(tmp7, obj2);
        return closure_1_19(tmp6, obj21);
      }
      const intl = util.intl;
      formatToPlainStringResult = intl.string(_modDef3723["3b6e7o"]);
      tmp6 = ConjureNativeCardSurfaceDefault;
    };
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = onPick(576).c(9);
      ({ ideas, onPick } = arg0);
      const tmp4 = closure_29();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
        let intl = onPick(1126).intl;
        obj2.children = intl.string(_modDef3723["wx/o8Y"]);
        const tmp8 = closure_19(onPick(4886).Text, obj2);
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
          const tmp15 = closure_20(closure_8, obj3);
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
          obj.accessibilityLabel = intl.formatToPlainString(_modDef3723.H8G39M, { title: title.title });
          items = [
            closure_1_19(onPick(4886).Text, {
              variant: "text-md/semibold",
              color: "text-default",
              children: title.title,
            }),
          ];
          let tmpResult = null;
          if ("" !== title.value) {
            const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
            tmpResult = closure_1_19(onPick(4886).Text, obj4);
          }
          items[1] = tmpResult;
          obj.children = closure_1_20(onPick(5593).Stack, { direction: "vertical", spacing: 4, children: items });
          return closure_1_19(onPick(5995).Card, obj, title.id);
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
  : (arg0) => {
      ({ ideas, onPick: require } = arg0);
      let obj = { style: closure_29().ideaCards, children: null };
      const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      let intl = util.intl;
      obj2.children = intl.string(_modDef3723["wx/o8Y"]);
      items = [
        closure_19(Text_Text.Text, obj2),
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
          obj.accessibilityLabel = intl.formatToPlainString(_modDef3723.H8G39M, { title: title.title });
          items = [
            closure_1_19(require("Text/Text").Text, {
              variant: "text-md/semibold",
              color: "text-default",
              children: title.title,
            }),
          ];
          let tmpResult = null;
          if ("" !== title.value) {
            const obj4 = { variant: "text-sm/normal", color: "text-muted", children: title.value };
            tmpResult = closure_1_19(require("Text/Text").Text, obj4);
          }
          items[1] = tmpResult;
          obj.children = closure_1_20(require("Stack/Stack").Stack, {
            direction: "vertical",
            spacing: 4,
            children: items,
          });
          return closure_1_19(require("Card").Card, obj, title.id);
        }),
      ];
      obj.children = items;
      return closure_20(closure_8, obj);
    };
ReactCompilerGating = fn(558);
let closure_33 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      const cResult = projectId(attachmentPill[15]).c(12);
      projectId = projectId.projectId;
      const attachments = projectId.attachments;
      const tmp2 = closure_29();
      closure_1 = tmp2;
      if (cResult[0] !== projectId) {
        const fn = function n(arg0) {
          const promise = closure_2_11(projectId, arg0);
          closure_2_11(projectId, arg0)
            .then((result) => closure_1_1(attachmentPill[28]).openURL(result))
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
            const tmp11 = closure_19(closure_8, obj2);
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
          obj.children = closure_1_19(projectId(attachmentPill[19]).Text, obj3);
          let tmp12 = closure_1_19(projectId(attachmentPill[27]).Card, obj, id.id);
        } else {
          const obj4 = { style: closure_1.attachmentPill, children: null };
          const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
          const intl2 = projectId(attachmentPill[17]).intl;
          const obj6 = { name: id.name };
          obj5.children = intl2.formatToPlainString(closure_1(attachmentPill[18]).nd81jR, obj6);
          obj4.children = closure_1_19(projectId(attachmentPill[19]).Text, obj5);
          const _HermesInternal = HermesInternal;
          tmp12 = closure_1_19(closure_1_8, obj4, "" + id.name + "-" + arg1);
        }
        return tmp12;
      };
      cResult[6] = attachmentPill;
      cResult[7] = tmp2.attachmentPill;
      cResult[8] = fn2;
      tmp5 = fn2;
      let obj = projectId(attachmentPill[15]);
    }
  : (projectId) => {
      projectId = projectId.projectId;
      const attachments = projectId.attachments;
      const tmp = closure_29();
      closure_1 = tmp;
      items = [projectId];
      dependencyMap = noop.useCallback((arg0) => {
        const promise = closure_2_11(projectId, arg0);
        closure_2_11(projectId, arg0)
          .then((result) => closure_1_1(dependencyMap[28]).openURL(result))
          .catch(() => {});
      }, items);
      return closure_19(closure_8, {
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
            obj.accessibilityLabel = intl.formatToPlainString(closure_1(3723).GtNukg, obj2);
            const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
            obj.children = closure_1_19(projectId(4886).Text, obj3);
            let tmp12 = closure_1_19(projectId(5995).Card, obj, id.id);
          } else {
            const obj4 = { style: closure_1.attachmentPill, children: null };
            const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
            const intl2 = projectId(1126).intl;
            const obj6 = { name: id.name };
            obj5.children = intl2.formatToPlainString(closure_1(3723).nd81jR, obj6);
            obj4.children = closure_1_19(projectId(4886).Text, obj5);
            const _HermesInternal = HermesInternal;
            tmp12 = closure_1_19(closure_1_8, obj4, "" + id.name + "-" + index);
          }
          return tmp12;
        }),
      });
    };
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(20);
      ({ node, inGutter, live, crestColor, epoch } = arg0);
      let num = 0;
      if (undefined !== epoch) {
        num = epoch;
      }
      const tmp6 = closure_29();
      _require = tmp6;
      if (cResult[0] !== node) {
        const describeNodeResult = tmp(16672).describeNode(node);
        cResult[0] = node;
        cResult[1] = describeNodeResult;
        let tmp7 = describeNodeResult;
        const tmpResult = tmp(16672);
      } else {
        tmp7 = cResult[1];
      }
      let tmp9 = !tmp5;
      if (!(undefined !== live && live)) {
        tmp9 = "failed" !== node.status;
      }
      let str2 = "detail";
      if (undefined !== live && live) {
        str2 = "headline";
      }
      if (cResult[2] !== node.durationMs) {
        let tmp11 = null;
        if (null != node.durationMs) {
          const obj2 = {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: tmp(16673).describeDuration(node.durationMs),
          };
          tmp11 = closure_19(tmp(4886).Text, obj2);
          const tmpResult2 = tmp(16673);
        }
        cResult[2] = node.durationMs;
        cResult[3] = tmp11;
        let tmp10 = tmp11;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === crestColor) {
        if (cResult[5] === num) {
          if (cResult[6] === tmp4) {
            if (cResult[7] === tmp5) {
              if (cResult[8] === tmp7) {
                if (cResult[9] === tmp9) {
                  if (cResult[10] === tmp13) {
                    if (cResult[11] === str2) {
                      if (cResult[12] === tmp10) {
                        let tmp14 = cResult[13];
                      }
                      if (cResult[14] === node.detail) {
                        if (cResult[15] === tmp6) {
                          let tmp16 = cResult[16];
                        }
                        if (cResult[17] === tmp16) {
                          if (cResult[18] === tmp14) {
                            let tmp20 = cResult[19];
                          }
                          return tmp20;
                        }
                        const obj3 = { children: null };
                        items = [tmp14, tmp16];
                        obj3.children = items;
                        const tmp23 = closure_20(closure_8, obj3);
                        cResult[17] = tmp16;
                        cResult[18] = tmp14;
                        cResult[19] = tmp23;
                        tmp20 = tmp23;
                      }
                      let tmp17 = null;
                      if (node.detail.length > 0) {
                        const obj4 = { style: tmp6.stepDetail, children: null };
                        const detail = node.detail;
                        obj4.children = detail.map((children, index) => {
                          stepCommand = undefined;
                          if (children.startsWith("$ ")) {
                            stepCommand = stepCommand.stepCommand;
                          }
                          return closure_2_19(
                            Text_Text.Text,
                            { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children },
                            index,
                          );
                        });
                        tmp17 = closure_19(closure_8, obj4);
                      }
                      cResult[14] = node.detail;
                      cResult[15] = tmp6;
                      cResult[16] = tmp17;
                      tmp16 = tmp17;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const tmp15 = closure_19(ConjureNativeStatusLineDefault, {
        line: tmp7,
        live: undefined !== live && live,
        settled: tmp9,
        failed: "failed" === node.status,
        presentation: str2,
        crestColor,
        inGutter: undefined !== inGutter && inGutter,
        epoch: num,
        trailing: tmp10,
      });
      cResult[4] = crestColor;
      cResult[5] = num;
      cResult[6] = undefined !== inGutter && inGutter;
      cResult[7] = undefined !== live && live;
      cResult[8] = tmp7;
      cResult[9] = tmp9;
      cResult[10] = "failed" === node.status;
      cResult[11] = str2;
      cResult[12] = tmp10;
      cResult[13] = tmp15;
      tmp14 = tmp15;
      const obj = require("c");
    }
  : (live) => {
      ({ node, inGutter } = live);
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
      const obj = {
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
      const tmp6 = ConjureNativeStatusLineDefault;
      obj.line = require("ConjureTimelineTree").describeNode(node);
      obj.live = flag;
      let tmp8 = !flag;
      if (!flag) {
        tmp8 = "failed" !== node.status;
      }
      obj.settled = tmp8;
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
          children: tmp7(16673).describeDuration(node.durationMs),
        };
        tmp4Result = closure_19(tmp7(4886).Text, obj3);
        const tmp7Result = tmp7(16673);
      }
      obj.trailing = tmp4Result;
      const children = [closure_19(tmp6, obj)];
      let tmp4Result2 = null;
      if (node.detail.length > 0) {
        const obj4 = { style: tmp.stepDetail, children: null };
        const detail = node.detail;
        obj4.children = detail.map((children, index) => {
          stepCommand = undefined;
          if (children.startsWith("$ ")) {
            stepCommand = stepCommand.stepCommand;
          }
          return closure_2_19(
            Text_Text.Text,
            { variant: "text-sm/normal", color: "text-muted", style: stepCommand, children },
            index,
          );
        });
        tmp4Result2 = closure_19(closure_8, obj4);
      }
      children[1] = tmp4Result2;
      return closure_20(closure_8, { children });
    };
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled()
  ? (epoch) => {
      const cResult = turnActive(576).c(30);
      ({ tree, turnActive } = epoch);
      epoch = epoch.epoch;
      const tmp4 = closure_29();
      let obj = turnActive(576);
      [tmp6, dependencyMap] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function i() {
          return dependencyMap((arg0) => !arg0);
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
              _slicedToArray = cResult[5];
              let tmp11 = cResult[6];
            }
            if (cResult[9] !== tree.steps) {
              let someResult = tree.steps.length > 1;
              if (!someResult) {
                const steps = tree.steps;
                someResult = steps.some((detail) => detail.detail.length > 0);
              }
              cResult[9] = tree.steps;
              cResult[10] = someResult;
              let tmp22 = someResult;
            } else {
              tmp22 = cResult[10];
            }
            let tmp25;
            if (epoch.besideAvatar) {
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
                                if (cResult[23] === tmp4) {
                                  if (cResult[24] === tree.steps) {
                                    if (cResult[25] === turnActive) {
                                      let tmp31 = cResult[26];
                                    }
                                    if (cResult[27] === tmp27) {
                                      if (cResult[28] === tmp31) {
                                        let tmp35 = cResult[29];
                                      }
                                      return tmp35;
                                    }
                                    const obj2 = { children: null };
                                    items = [tmp27, tmp31];
                                    obj2.children = items;
                                    const tmp38 = closure_20(closure_8, obj2);
                                    cResult[27] = tmp27;
                                    cResult[28] = tmp31;
                                    cResult[29] = tmp38;
                                    tmp35 = tmp38;
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
                              const obj = { node, live: null, epoch: null };
                              let tmp3 = turnActive;
                              if (turnActive) {
                                tmp3 = node === currentStepResult;
                              }
                              obj.live = tmp3;
                              obj.epoch = epoch;
                              return closure_2_19(closure_34, obj, node.id);
                            });
                            tmp32 = closure_19(closure_8, obj3);
                          }
                        }
                        cResult[19] = tmp10;
                        cResult[20] = epoch;
                        cResult[21] = tmp6;
                        cResult[22] = tmp22;
                        cResult[23] = tmp4;
                        cResult[24] = tree.steps;
                        cResult[25] = turnActive;
                        cResult[26] = tmp32;
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
            const tmp30 = closure_19(epoch(16654), obj4);
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
      const currentStepResult = turnActive(16672).currentStep(tree.steps);
      _slicedToArray = currentStepResult;
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
        describeTurnDurationResult = turnActive(16673).describeTurnDuration(tmp13);
        const tmpResult3 = turnActive(16673);
      } else if (null != currentStepResult) {
        describeTurnDurationResult = turnActive(16672).describeNode(currentStepResult);
        const tmpResult4 = turnActive(16672);
      } else if (describeTurnDurationResult == null) {
        const intl = turnActive(1126).intl;
        describeTurnDurationResult = intl.string(epoch(3723).t8skVB);
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
      const tmpResult = turnActive(16672);
    }
  : (epoch) => {
      ({ tree, turnActive } = epoch);
      epoch = epoch.epoch;
      dependencyMap = undefined;
      _slicedToArray = undefined;
      const tmp = closure_29();
      [tmp3, c2] = noop.useState(false);
      const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      const currentStepResult = turnActive(16672).currentStep(tree.steps);
      _slicedToArray = currentStepResult;
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
        groupLabel = turnActive(16673).describeTurnDuration(tmp8);
        const tmp5Result = turnActive(16673);
      } else if (null != currentStepResult) {
        groupLabel = turnActive(16672).describeNode(currentStepResult);
        const tmp5Result2 = turnActive(16672);
      } else if (groupLabel == null) {
        const intl = turnActive(1126).intl;
        groupLabel = intl.string(epoch(3723).t8skVB);
      }
      let someResult = tree.steps.length > 1;
      if (!someResult) {
        const steps = tree.steps;
        someResult = steps.some((detail) => detail.detail.length > 0);
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
      let obj = turnActive(16672);
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
      const children = [closure_19(epoch(16654), obj2)];
      let tmp17Result = null;
      if (tmp3) {
        tmp17Result = null;
        if (someResult) {
          const obj3 = { style: tmp.activityDetail, children: null };
          const steps1 = tree.steps;
          obj3.children = steps1.map((node) => {
            const obj = { node, live: null, epoch: null };
            let tmp3 = turnActive;
            if (turnActive) {
              tmp3 = node === c3;
            }
            obj.live = tmp3;
            obj.epoch = epoch;
            return closure_2_19(closure_34, obj, node.id);
          });
          tmp17Result = closure_19(closure_8, obj3);
        }
      }
      children[1] = tmp17Result;
      return closure_20(closure_8, { children });
    };
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let obj = mark;
      const cResult = mark(576).c(32);
      ({ lane, mark } = arg0);
      ({ turnActive, epoch } = arg0);
      const tmp3 = closure_29();
      const obj2 = mark(576);
      [tmp5, dependencyMap] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function i() {
          return dependencyMap((arg0) => !arg0);
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
              _slicedToArray = tmp9;
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
                                            if (cResult[27] === tmp3) {
                                              let tmp28 = cResult[28];
                                            }
                                            if (cResult[29] === tmp24) {
                                              if (cResult[30] === tmp28) {
                                                let tmp32 = cResult[31];
                                              }
                                              return tmp32;
                                            }
                                            const obj3 = { children: null };
                                            items = [tmp24, tmp28];
                                            obj3.children = items;
                                            const tmp35 = closure_20(closure_8, obj3);
                                            cResult[29] = tmp24;
                                            cResult[30] = tmp28;
                                            cResult[31] = tmp35;
                                            tmp32 = tmp35;
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
                                      closure_1_19(
                                        mark(4886).Text,
                                        { variant: "text-xs/normal", color: "text-feedback-critical", children },
                                        index,
                                      ),
                                    ),
                                  ];
                                  const steps = lane.steps;
                                  items1[1] = steps.map((node) =>
                                    closure_2_19(
                                      closure_34,
                                      { node, live: node === currentStepResult, crestColor: mark.tint, epoch },
                                      node.id,
                                    ),
                                  );
                                  obj4.children = items1;
                                  tmp29 = closure_20(closure_8, obj4);
                                }
                              }
                              cResult[20] = epoch;
                              cResult[21] = tmp5;
                              cResult[22] = tmp8;
                              cResult[23] = lane.steps;
                              cResult[24] = lane.task.detail;
                              cResult[25] = tmp9;
                              cResult[26] = mark.tint;
                              cResult[27] = tmp3;
                              cResult[28] = tmp29;
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
              const tmp27 = closure_19(epoch(16654), obj5);
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
        currentStepResult = obj(16672).currentStep(lane.steps);
        const objResult = obj(16672);
      }
      _slicedToArray = currentStepResult;
      const tmp12 = lane.task.detail.length > 0 || lane.steps.length > 0;
      if ("running" !== lane.task.status) {
        const describeTaskOutcomeResult = obj(16674).describeTaskOutcome(lane.task);
        cResult[1] = tmp7;
        cResult[2] = lane.steps;
        cResult[3] = lane.task;
        cResult[4] = turnActive;
        cResult[5] = tmp12;
        cResult[6] = currentStepResult;
        cResult[7] = describeTaskOutcomeResult;
        const objResult3 = obj(16674);
      }
      if (null != currentStepResult) {
        obj = obj(16672);
        obj.describeNode(currentStepResult);
      } else {
        obj(16674).taskTitle(lane.task);
        const objResult4 = obj(16674);
      }
      const tmp4 = _slicedToArray(noop.useState(false), 2);
    }
  : (arg0) => {
      ({ lane, mark } = arg0);
      ({ turnActive, epoch } = arg0);
      dependencyMap = undefined;
      _slicedToArray = undefined;
      const tmp = closure_29();
      [tmp3, c2] = noop.useState(false);
      const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
      if (turnActive) {
        turnActive = tmp5;
      }
      let currentStepResult;
      if (turnActive) {
        currentStepResult = mark(16672).currentStep(lane.steps);
        const obj = mark(16672);
      }
      _slicedToArray = currentStepResult;
      const tmp9 = lane.task.detail.length > 0 || lane.steps.length > 0;
      if ("running" === lane.task.status) {
        if (null != currentStepResult) {
          let describeNodeResult = mark(16672).describeNode(currentStepResult);
          const obj4 = mark(16672);
        } else {
          describeNodeResult = mark(16674).taskTitle(lane.task);
          const obj3 = mark(16674);
        }
      } else {
        const obj2 = mark(16674);
        const obj5 = {
          line: mark(16674).describeTaskOutcome(lane.task),
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
        const describeTaskOutcomeResult = mark(16674).describeTaskOutcome(lane.task);
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
        items = [closure_19(epoch(16654), obj5)];
        let tmp21Result = null;
        if (tmp3) {
          tmp21Result = null;
          if (tmp9) {
            const obj6 = { style: tmp.activityDetail, children: null };
            const detail = lane.task.detail;
            const items1 = [
              detail.map((children, index) =>
                closure_1_19(
                  mark(_undefined[19]).Text,
                  { variant: "text-xs/normal", color: "text-feedback-critical", children },
                  index,
                ),
              ),
            ];
            const steps = lane.steps;
            items1[1] = steps.map((node) =>
              closure_2_19(closure_34, { node, live: node === c3, crestColor: mark.tint, epoch }, node.id),
            );
            obj6.children = items1;
            tmp21Result = closure_20(closure_8, obj6);
          }
        }
        const obj7 = { children: null };
        items[1] = tmp21Result;
        obj7.children = items;
        return closure_20(closure_8, obj7);
      }
      const tmp2 = _slicedToArray(noop.useState(false), 2);
    };
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled()
  ? (besideAvatar) => {
      const cResult = turnActive(576).c(12);
      ({ tree, turnActive } = besideAvatar);
      besideAvatar = besideAvatar.besideAvatar;
      let activityBox = closure_29();
      let num = 0;
      if (0 === tree.steps.length) {
        if (num === tree.tasks.length) {
          return null;
        }
      }
      if (cResult[0] === (undefined !== besideAvatar && besideAvatar)) {
        if (cResult[1] === length) {
          if (cResult[2] === activityBox.activityBox) {
            if (cResult[3] === tree) {
              if (cResult[4] === turnActive) {
                return cResult[5];
              }
            }
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function v(taskId) {
          return taskId.taskId;
        };
        cResult[6] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[6];
      }
      let obj = turnActive(576);
      const tasks = tree.tasks;
      dependencyMap = turnActive(16675).subagentIllocons(tasks.map(tmp5));
      if (cResult[7] === (undefined !== besideAvatar && besideAvatar)) {
        if (cResult[8] === length) {
          if (cResult[9] === tree) {
            if (cResult[10] === turnActive) {
              let tmp6 = cResult[11];
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
                familiarMarkResult = closure_2.get(task.taskId);
              }
              let tmp5 = null;
              if (null != familiarMarkResult) {
                const obj2 = { lane: task, mark: familiarMarkResult, turnActive, epoch: length };
                tmp5 = closure_2_19(closure_36, obj2, task.taskId);
              }
              return tmp5;
            });
            obj2.children = items;
            const tmp10 = closure_20(closure_8, obj2);
            cResult[num] = tmp4;
            cResult[1] = length;
            activityBox = activityBox.activityBox;
            cResult[2] = activityBox;
            cResult[3] = tree;
            cResult[4] = turnActive;
            num = 5;
            cResult[5] = tmp10;
          }
        }
      }
      const tmp7 = closure_19(closure_35, {
        tree,
        turnActive,
        epoch: tree.tasks.length,
        besideAvatar: undefined !== besideAvatar && besideAvatar,
      });
      cResult[7] = undefined !== besideAvatar && besideAvatar;
      cResult[8] = tree.tasks.length;
      cResult[9] = tree;
      cResult[10] = turnActive;
      cResult[11] = tmp7;
      tmp6 = tmp7;
      const tmpResult = turnActive(16675);
    }
  : (besideAvatar) => {
      ({ tree, turnActive } = besideAvatar);
      let flag = besideAvatar.besideAvatar;
      if (flag === undefined) {
        flag = false;
      }
      let length;
      dependencyMap = undefined;
      if (0 === tree.steps.length) {
        if (0 === tree.tasks.length) {
          return null;
        }
      }
      length = tree.tasks.length;
      const tmp = closure_29();
      const tasks = tree.tasks;
      dependencyMap = turnActive(16675).subagentIllocons(tasks.map((taskId) => taskId.taskId));
      let obj2 = { style: tmp.activityBox, children: null };
      items = [closure_19(closure_35, { tree, turnActive, epoch: length, besideAvatar: flag })];
      const tasks1 = tree.tasks;
      items[1] = tasks1.map((task) => {
        let familiarMarkResult;
        if (null != task.task.helperMark) {
          familiarMarkResult = ConjureSubagentMark.familiarMark(task.task.helperMark);
        }
        if (familiarMarkResult == null) {
          familiarMarkResult = closure_2.get(task.taskId);
        }
        let tmp5 = null;
        if (null != familiarMarkResult) {
          const obj2 = { lane: task, mark: familiarMarkResult, turnActive, epoch: length };
          tmp5 = closure_2_19(closure_36, obj2, task.taskId);
        }
        return tmp5;
      });
      obj2.children = items;
      return closure_20(closure_8, obj2);
    };
ReactCompilerGating = fn(558);
let closure_38 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(15);
      children = children.children;
      const tmp3 = closure_29();
      if (obj2.isIOS()) {
        ({ transcript, transcript: transcript2 } = tmp3);
        if (cResult[0] !== tmp3.maskSolid) {
          const obj3 = { style: tmp3.maskSolid };
          const tmp7 = closure_1_19(closure_1_8, obj3);
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
          const tmp22 = closure_1_19(closure_1_8, obj5);
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
              const tmp30 = closure_1_19(_modDef6052, obj7);
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
        const tmp26 = closure_1_20(closure_1_8, obj8);
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
  : (children) => {
      children = children.children;
      const tmp = closure_29();
      let tmp3 = children;
      if (obj.isIOS()) {
        const obj2 = { style: tmp.transcript, maskElement: null, children: null };
        const obj3 = { style: tmp.transcript, children: null };
        const obj4 = { style: tmp.maskSolid };
        items = [closure_1_19(closure_1_8, obj4), ,];
        const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
        items[1] = closure_1_19(LinearGradientDefault, obj5);
        const obj6 = { style: null };
        const obj7 = { height: null };
        const _Math = Math;
        obj7.height = Math.max(0, children.clearance - c24);
        obj6.style = obj7;
        items[2] = closure_1_19(closure_1_8, obj6);
        obj3.children = items;
        obj2.maskElement = closure_1_20(closure_1_8, obj3);
        obj2.children = children;
        tmp3 = closure_1_19(_modDef6052, obj2);
      }
      return tmp3;
    };
ReactCompilerGating = fn(558);
let closure_39 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
        obj2.children = intl.string(_modDef3723["t+b0rz"]);
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
            obj5.text = intl2.string(_modDef3723.H8Jfhu);
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
        obj6.children = closure_1_20(Stack_Stack.Stack, obj7);
        const tmp27 = closure_1_19(ConjureNativeCardSurfaceDefault, obj6);
        cResult[12] = tmp16;
        cResult[13] = tmp18;
        cResult[14] = tmp27;
        tmp22 = tmp27;
      }
      const obj8 = { direction: "vertical", spacing: 4, children: null };
      const items1 = [tmp10, tmp13];
      obj8.children = items1;
      const tmp17 = closure_1_20(Stack_Stack.Stack, obj8);
      cResult[7] = tmp10;
      cResult[8] = tmp13;
      cResult[9] = tmp17;
      tmp16 = tmp17;
    }
  : (arg0) => {
      ({ proposal, onRestore } = arg0);
      const relative = ConjureHistoryFormat.formatAuthoredAt(proposal.authored_at).relative;
      const obj2 = { variant: "text-sm/semibold", color: "text-muted", children: null };
      const intl = util.intl;
      obj2.children = intl.string(_modDef3723["t+b0rz"]);
      items = [closure_1_19(Text_Text.Text, obj2), ,];
      const items1 = [
        closure_1_19(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: proposal.subject }),
      ];
      let tmp3Result = null;
      if (null != relative) {
        const obj4 = { variant: "text-sm/normal", color: "text-muted", children: relative };
        tmp3Result = closure_1_19(Text_Text.Text, obj4);
      }
      items1[1] = tmp3Result;
      items[1] = closure_1_20(Stack_Stack.Stack, { direction: "vertical", spacing: 4, children: items1 });
      let tmp3Result2 = null;
      if (null != onRestore) {
        const obj5 = { text: null, variant: "secondary", onPress: null };
        const intl2 = util.intl;
        obj5.text = intl2.string(_modDef3723.H8Jfhu);
        obj5.onPress = onRestore;
        tmp3Result2 = closure_1_19(components_Button_Button.Button, obj5);
      }
      const obj3 = { variant: "text-md/medium", color: "text-default", children: proposal.subject };
      const tmp5 = ConjureNativeCardSurfaceDefault;
      items[2] = tmp3Result2;
      return closure_1_19(tmp5, {
        children: closure_1_20(Stack_Stack.Stack, { direction: "vertical", spacing: 8, children: items }),
      });
    };
ReactCompilerGating = fn(558);
let closure_40 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (projectId) => {
        const cResult = projectId(groupStart[15]).c(229);
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
          const tmp7 = closure_17(message);
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
            const tmp13 = closure_17(message);
            cResult[5] = message;
            cResult[6] = tmp13;
            let tmp11 = tmp13;
          } else {
            tmp11 = cResult[6];
          }
          if (cResult[7] === message.steps) {
            if (cResult[10] !== message.steps) {
              const latestTodosResult = tmp(tmp2[29]).latestTodos(message.steps);
              cResult[10] = message.steps;
              cResult[11] = latestTodosResult;
              const tmpResult = tmp(tmp2[29]);
            }
            if (cResult[12] !== tmp9.tasks) {
              const runningTodoAgentsResult = tmp(tmp2[37]).runningTodoAgents(tmp9.tasks);
              cResult[12] = tmp9.tasks;
              cResult[13] = runningTodoAgentsResult;
              const tmpResult6 = tmp(tmp2[37]);
            }
            if (cResult[14] === checklistSuperseded) {
              if (cResult[15] === message.render_id) {
                if (cResult[18] === message.render_id) {
                  if (cResult[19] === onTogglePlan) {
                    if (cResult[22] === onJumpToReplied) {
                      if (cResult[25] !== message.content) {
                        const result = tmp(tmp2[38]).parseConjureDesignRemark(message.content);
                        cResult[25] = message.content;
                        cResult[26] = result;
                        let tmp26 = result;
                        const tmpResult7 = tmp(tmp2[38]);
                      } else {
                        tmp26 = cResult[26];
                      }
                      let body;
                      if (tmp26 != null) {
                        body = tmp26.body;
                      }
                      if (body == null) {
                        body = message.content;
                      }
                      if (cResult[27] !== body) {
                        const trimmed = body.trim();
                        cResult[27] = body;
                        cResult[28] = trimmed;
                        let tmp30 = trimmed;
                      } else {
                        tmp30 = cResult[28];
                      }
                      const content = tmp30;
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
                          let tmp33 = cResult[31];
                        }
                        let user_id;
                        if ("user" === message.role) {
                          user_id = message.user_id;
                        }
                        if (cResult[32] === message) {
                          if (cResult[33] === onRestoreVersion) {
                            let tmp35 = cResult[34];
                          }
                          closure_17 = tmp35;
                          if (cResult[35] === user_id) {
                            if (cResult[36] === tmp30) {
                              if (cResult[37] === onRestoreVersion) {
                                if (!tmp38) {
                                  if (cResult[40] === onAskForIdeas) {
                                    if (cResult[41] === projectId) {
                                      if (cResult[42] === tmp4.avatar) {
                                        if (cResult[43] === tmp4.avatarSpoken) {
                                          if (cResult[44] === tmp4.header) {
                                            if (cResult[45] === tmp4.reminderSeparated) {
                                              if (cResult[46] === tmp4.reminderTip) {
                                                if (cResult[47] === tmp4.spoken) {
                                                  let tmp40 = cResult[48];
                                                }
                                                if (cResult[49] === hostsReminder) {
                                                  if (cResult[50] === reminder) {
                                                    if (cResult[51] === tmp40) {
                                                      if (cResult[52] === tmp4.reminderSlot) {
                                                        let tmp41 = cResult[53];
                                                      }
                                                      if ("user" === message.role) {
                                                        if ("" === tmp30) {
                                                          if (null == tmp26) {
                                                            if (null == attachments) {
                                                              return null;
                                                            }
                                                          }
                                                        }
                                                        if (cResult[54] !== message.agentReaction) {
                                                          const conjureAgentReactionLabel = tmp(
                                                            tmp2[46],
                                                          ).getConjureAgentReactionLabel(message.agentReaction);
                                                          class Te {
                                                            constructor(arg0) {
                                                              if ("outdated" === projectId) {
                                                                tmp20 = jsx;
                                                                tmp21 = View;
                                                                obj1 = { style: null, children: null };
                                                                tmp22 = closure_12;
                                                                obj1.style = closure_12.reminderTip;
                                                                tmp23 = jsx;
                                                                tmp24 = View;
                                                                obj9 = { style: null, children: null };
                                                                obj9.style = closure_12.spoken;
                                                                tmp25 = jsx;
                                                                tmp26 = closure_1;
                                                                tmp27 = closure_2;
                                                                obj10 = { projectId: null, notice: "outdated" };
                                                                tmp28 = projectId;
                                                                obj10.projectId = projectId;
                                                                obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                obj1.children = jsx(View, obj9);
                                                                return jsx(View, obj1);
                                                              } else {
                                                                str = "ideas";
                                                                if ("ideas" === projectId) {
                                                                  tmp = jsx;
                                                                  tmp2 = View;
                                                                  obj = { style: null, children: null };
                                                                  tmp3 = closure_12;
                                                                  obj.style = closure_12.reminderSeparated;
                                                                  tmp4 = jsx;
                                                                  tmp5 = closure_1;
                                                                  tmp6 = closure_2;
                                                                  obj11 = {
                                                                    style: null,
                                                                    onAsk: null,
                                                                    attribution: null,
                                                                  };
                                                                  obj11.style = closure_12.spoken;
                                                                  tmp8 = onAskForIdeas;
                                                                  obj11.onAsk = onAskForIdeas;
                                                                  tmp9 = jsxs;
                                                                  tmp10 = Fragment;
                                                                  obj12 = { children: null };
                                                                  tmp11 = jsx;
                                                                  tmp12 = View;
                                                                  obj13 = { style: null, children: null };
                                                                  items = [,];
                                                                  ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                    closure_12);
                                                                  obj13.style = items;
                                                                  tmp13 = jsx;
                                                                  tmp14 = closure_0;
                                                                  tmp15 = closure_2;
                                                                  tmp7 = closure_1(closure_2[43]);
                                                                  obj13.children = jsx(
                                                                    closure_0(closure_2[44]).ConjureAvatar,
                                                                    {},
                                                                  );
                                                                  items1 = [,];
                                                                  items1[0] = jsx(View, obj13);
                                                                  tmp16 = jsx;
                                                                  tmp17 = View;
                                                                  obj14 = { style: null, children: null };
                                                                  obj14.style = closure_12.header;
                                                                  tmp18 = jsx;
                                                                  tmp19 = closure_2;
                                                                  obj14.children = jsx(
                                                                    closure_0(closure_2[44]).ConjureHeader,
                                                                    {},
                                                                  );
                                                                  items1[1] = jsx(View, obj14);
                                                                  obj12.children = items1;
                                                                  obj11.attribution = jsxs(Fragment, obj12);
                                                                  obj.children = jsx(tmp7, obj11);
                                                                  return jsx(View, obj);
                                                                } else {
                                                                  return;
                                                                }
                                                              }
                                                            }
                                                          }
                                                          cResult[54] = message.agentReaction;
                                                          cResult[55] = conjureAgentReactionLabel;
                                                          const tmpResult8 = tmp(tmp2[46]);
                                                        }
                                                        class Te {
                                                          constructor(arg0) {
                                                            if ("outdated" === projectId) {
                                                              tmp20 = jsx;
                                                              tmp21 = View;
                                                              obj1 = { style: null, children: null };
                                                              tmp22 = closure_12;
                                                              obj1.style = closure_12.reminderTip;
                                                              tmp23 = jsx;
                                                              tmp24 = View;
                                                              obj9 = { style: null, children: null };
                                                              obj9.style = closure_12.spoken;
                                                              tmp25 = jsx;
                                                              tmp26 = closure_1;
                                                              tmp27 = closure_2;
                                                              obj10 = { projectId: null, notice: "outdated" };
                                                              tmp28 = projectId;
                                                              obj10.projectId = projectId;
                                                              obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                              obj1.children = jsx(View, obj9);
                                                              return jsx(View, obj1);
                                                            } else {
                                                              str = "ideas";
                                                              if ("ideas" === projectId) {
                                                                tmp = jsx;
                                                                tmp2 = View;
                                                                obj = { style: null, children: null };
                                                                tmp3 = closure_12;
                                                                obj.style = closure_12.reminderSeparated;
                                                                tmp4 = jsx;
                                                                tmp5 = closure_1;
                                                                tmp6 = closure_2;
                                                                obj11 = { style: null, onAsk: null, attribution: null };
                                                                obj11.style = closure_12.spoken;
                                                                tmp8 = onAskForIdeas;
                                                                obj11.onAsk = onAskForIdeas;
                                                                tmp9 = jsxs;
                                                                tmp10 = Fragment;
                                                                obj12 = { children: null };
                                                                tmp11 = jsx;
                                                                tmp12 = View;
                                                                obj13 = { style: null, children: null };
                                                                items = [,];
                                                                ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                obj13.style = items;
                                                                tmp13 = jsx;
                                                                tmp14 = closure_0;
                                                                tmp15 = closure_2;
                                                                tmp7 = closure_1(closure_2[43]);
                                                                obj13.children = jsx(
                                                                  closure_0(closure_2[44]).ConjureAvatar,
                                                                  {},
                                                                );
                                                                items1 = [,];
                                                                items1[0] = jsx(View, obj13);
                                                                tmp16 = jsx;
                                                                tmp17 = View;
                                                                obj14 = { style: null, children: null };
                                                                obj14.style = closure_12.header;
                                                                tmp18 = jsx;
                                                                tmp19 = closure_2;
                                                                obj14.children = jsx(
                                                                  closure_0(closure_2[44]).ConjureHeader,
                                                                  {},
                                                                );
                                                                items1[1] = jsx(View, obj14);
                                                                obj12.children = items1;
                                                                obj11.attribution = jsxs(Fragment, obj12);
                                                                obj.children = jsx(tmp7, obj11);
                                                                return jsx(View, obj);
                                                              } else {
                                                                return;
                                                              }
                                                            }
                                                          }
                                                        }
                                                        let tmp88 = null;
                                                        if (groupStart) {
                                                          class Te {
                                                            constructor(arg0) {
                                                              if ("outdated" === projectId) {
                                                                tmp20 = jsx;
                                                                tmp21 = View;
                                                                obj1 = { style: null, children: null };
                                                                tmp22 = closure_12;
                                                                obj1.style = closure_12.reminderTip;
                                                                tmp23 = jsx;
                                                                tmp24 = View;
                                                                obj9 = { style: null, children: null };
                                                                obj9.style = closure_12.spoken;
                                                                tmp25 = jsx;
                                                                tmp26 = closure_1;
                                                                tmp27 = closure_2;
                                                                obj10 = { projectId: null, notice: "outdated" };
                                                                tmp28 = projectId;
                                                                obj10.projectId = projectId;
                                                                obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                obj1.children = jsx(View, obj9);
                                                                return jsx(View, obj1);
                                                              } else {
                                                                str = "ideas";
                                                                if ("ideas" === projectId) {
                                                                  tmp = jsx;
                                                                  tmp2 = View;
                                                                  obj = { style: null, children: null };
                                                                  tmp3 = closure_12;
                                                                  obj.style = closure_12.reminderSeparated;
                                                                  tmp4 = jsx;
                                                                  tmp5 = closure_1;
                                                                  tmp6 = closure_2;
                                                                  obj11 = {
                                                                    style: null,
                                                                    onAsk: null,
                                                                    attribution: null,
                                                                  };
                                                                  obj11.style = closure_12.spoken;
                                                                  tmp8 = onAskForIdeas;
                                                                  obj11.onAsk = onAskForIdeas;
                                                                  tmp9 = jsxs;
                                                                  tmp10 = Fragment;
                                                                  obj12 = { children: null };
                                                                  tmp11 = jsx;
                                                                  tmp12 = View;
                                                                  obj13 = { style: null, children: null };
                                                                  items = [,];
                                                                  ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                    closure_12);
                                                                  obj13.style = items;
                                                                  tmp13 = jsx;
                                                                  tmp14 = closure_0;
                                                                  tmp15 = closure_2;
                                                                  tmp7 = closure_1(closure_2[43]);
                                                                  obj13.children = jsx(
                                                                    closure_0(closure_2[44]).ConjureAvatar,
                                                                    {},
                                                                  );
                                                                  items1 = [,];
                                                                  items1[0] = jsx(View, obj13);
                                                                  tmp16 = jsx;
                                                                  tmp17 = View;
                                                                  obj14 = { style: null, children: null };
                                                                  obj14.style = closure_12.header;
                                                                  tmp18 = jsx;
                                                                  tmp19 = closure_2;
                                                                  obj14.children = jsx(
                                                                    closure_0(closure_2[44]).ConjureHeader,
                                                                    {},
                                                                  );
                                                                  items1[1] = jsx(View, obj14);
                                                                  obj12.children = items1;
                                                                  obj11.attribution = jsxs(Fragment, obj12);
                                                                  obj.children = jsx(tmp7, obj11);
                                                                  return jsx(View, obj);
                                                                } else {
                                                                  return;
                                                                }
                                                              }
                                                            }
                                                          }
                                                          tmp91[0] = tmp4.avatar;
                                                          let obj2 = { userId: message.user_id };
                                                          tmp91[1] = closure_19(tmp(tmp2[44]).ConjureUserAvatar, obj2);
                                                          tmp88 = closure_19(onJumpToReplied, tmp91);
                                                        }
                                                        cResult[56] = groupStart;
                                                        cResult[57] = message.user_id;
                                                        cResult[58] = tmp4.avatar;
                                                        cResult[59] = tmp88;
                                                      } else {
                                                        if ("publish_notice" === message.kind) {
                                                          if (null != message.publishNotice) {
                                                            if (cResult[85] === message.publishNotice) {
                                                              if (cResult[86] === projectId) {
                                                                let tmp79 = cResult[87];
                                                              }
                                                              if (cResult[88] === tmp41) {
                                                                if (cResult[89] === tmp33) {
                                                                  if (cResult[90] === tmp79) {
                                                                    let tmp82 = cResult[91];
                                                                  }
                                                                  return tmp82;
                                                                }
                                                              }
                                                              class Te {
                                                                constructor(arg0) {
                                                                  if ("outdated" === projectId) {
                                                                    tmp20 = jsx;
                                                                    tmp21 = View;
                                                                    obj1 = { style: null, children: null };
                                                                    tmp22 = closure_12;
                                                                    obj1.style = closure_12.reminderTip;
                                                                    tmp23 = jsx;
                                                                    tmp24 = View;
                                                                    obj9 = { style: null, children: null };
                                                                    obj9.style = closure_12.spoken;
                                                                    tmp25 = jsx;
                                                                    tmp26 = closure_1;
                                                                    tmp27 = closure_2;
                                                                    obj10 = { projectId: null, notice: "outdated" };
                                                                    tmp28 = projectId;
                                                                    obj10.projectId = projectId;
                                                                    obj9.children = jsx(
                                                                      closure_1(closure_2[42]),
                                                                      obj10,
                                                                    );
                                                                    obj1.children = jsx(View, obj9);
                                                                    return jsx(View, obj1);
                                                                  } else {
                                                                    str = "ideas";
                                                                    if ("ideas" === projectId) {
                                                                      tmp = jsx;
                                                                      tmp2 = View;
                                                                      obj = { style: null, children: null };
                                                                      tmp3 = closure_12;
                                                                      obj.style = closure_12.reminderSeparated;
                                                                      tmp4 = jsx;
                                                                      tmp5 = closure_1;
                                                                      tmp6 = closure_2;
                                                                      obj11 = {
                                                                        style: null,
                                                                        onAsk: null,
                                                                        attribution: null,
                                                                      };
                                                                      obj11.style = closure_12.spoken;
                                                                      tmp8 = onAskForIdeas;
                                                                      obj11.onAsk = onAskForIdeas;
                                                                      tmp9 = jsxs;
                                                                      tmp10 = Fragment;
                                                                      obj12 = { children: null };
                                                                      tmp11 = jsx;
                                                                      tmp12 = View;
                                                                      obj13 = { style: null, children: null };
                                                                      items = [,];
                                                                      ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                        closure_12);
                                                                      obj13.style = items;
                                                                      tmp13 = jsx;
                                                                      tmp14 = closure_0;
                                                                      tmp15 = closure_2;
                                                                      tmp7 = closure_1(closure_2[43]);
                                                                      obj13.children = jsx(
                                                                        closure_0(closure_2[44]).ConjureAvatar,
                                                                        {},
                                                                      );
                                                                      items1 = [,];
                                                                      items1[0] = jsx(View, obj13);
                                                                      tmp16 = jsx;
                                                                      tmp17 = View;
                                                                      obj14 = { style: null, children: null };
                                                                      obj14.style = closure_12.header;
                                                                      tmp18 = jsx;
                                                                      tmp19 = closure_2;
                                                                      obj14.children = jsx(
                                                                        closure_0(closure_2[44]).ConjureHeader,
                                                                        {},
                                                                      );
                                                                      items1[1] = jsx(View, obj14);
                                                                      obj12.children = items1;
                                                                      obj11.attribution = jsxs(Fragment, obj12);
                                                                      obj.children = jsx(tmp7, obj11);
                                                                      return jsx(View, obj);
                                                                    } else {
                                                                      return;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              let obj3 = { style: tmp33, children: null };
                                                              items = [tmp79, tmp41];
                                                              obj3.children = items;
                                                              const tmp84 = id(onJumpToReplied, obj3);
                                                              cResult[88] = tmp41;
                                                              cResult[89] = tmp33;
                                                              cResult[90] = tmp79;
                                                              cResult[91] = tmp84;
                                                              tmp82 = tmp84;
                                                            }
                                                            class Te {
                                                              constructor(arg0) {
                                                                if ("outdated" === projectId) {
                                                                  tmp20 = jsx;
                                                                  tmp21 = View;
                                                                  obj1 = { style: null, children: null };
                                                                  tmp22 = closure_12;
                                                                  obj1.style = closure_12.reminderTip;
                                                                  tmp23 = jsx;
                                                                  tmp24 = View;
                                                                  obj9 = { style: null, children: null };
                                                                  obj9.style = closure_12.spoken;
                                                                  tmp25 = jsx;
                                                                  tmp26 = closure_1;
                                                                  tmp27 = closure_2;
                                                                  obj10 = { projectId: null, notice: "outdated" };
                                                                  tmp28 = projectId;
                                                                  obj10.projectId = projectId;
                                                                  obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                  obj1.children = jsx(View, obj9);
                                                                  return jsx(View, obj1);
                                                                } else {
                                                                  str = "ideas";
                                                                  if ("ideas" === projectId) {
                                                                    tmp = jsx;
                                                                    tmp2 = View;
                                                                    obj = { style: null, children: null };
                                                                    tmp3 = closure_12;
                                                                    obj.style = closure_12.reminderSeparated;
                                                                    tmp4 = jsx;
                                                                    tmp5 = closure_1;
                                                                    tmp6 = closure_2;
                                                                    obj11 = {
                                                                      style: null,
                                                                      onAsk: null,
                                                                      attribution: null,
                                                                    };
                                                                    obj11.style = closure_12.spoken;
                                                                    tmp8 = onAskForIdeas;
                                                                    obj11.onAsk = onAskForIdeas;
                                                                    tmp9 = jsxs;
                                                                    tmp10 = Fragment;
                                                                    obj12 = { children: null };
                                                                    tmp11 = jsx;
                                                                    tmp12 = View;
                                                                    obj13 = { style: null, children: null };
                                                                    items = [,];
                                                                    ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                      closure_12);
                                                                    obj13.style = items;
                                                                    tmp13 = jsx;
                                                                    tmp14 = closure_0;
                                                                    tmp15 = closure_2;
                                                                    tmp7 = closure_1(closure_2[43]);
                                                                    obj13.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureAvatar,
                                                                      {},
                                                                    );
                                                                    items1 = [,];
                                                                    items1[0] = jsx(View, obj13);
                                                                    tmp16 = jsx;
                                                                    tmp17 = View;
                                                                    obj14 = { style: null, children: null };
                                                                    obj14.style = closure_12.header;
                                                                    tmp18 = jsx;
                                                                    tmp19 = closure_2;
                                                                    obj14.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureHeader,
                                                                      {},
                                                                    );
                                                                    items1[1] = jsx(View, obj14);
                                                                    obj12.children = items1;
                                                                    obj11.attribution = jsxs(Fragment, obj12);
                                                                    obj.children = jsx(tmp7, obj11);
                                                                    return jsx(View, obj);
                                                                  } else {
                                                                    return;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            let obj4 = { projectId, notice: message.publishNotice };
                                                            const tmp81 = closure_19(message(tmp2[42]), obj4);
                                                            cResult[85] = message.publishNotice;
                                                            cResult[86] = projectId;
                                                            cResult[87] = tmp81;
                                                            tmp79 = tmp81;
                                                          }
                                                        }
                                                        class Te {
                                                          constructor(arg0) {
                                                            if ("outdated" === projectId) {
                                                              tmp20 = jsx;
                                                              tmp21 = View;
                                                              obj1 = { style: null, children: null };
                                                              tmp22 = closure_12;
                                                              obj1.style = closure_12.reminderTip;
                                                              tmp23 = jsx;
                                                              tmp24 = View;
                                                              obj9 = { style: null, children: null };
                                                              obj9.style = closure_12.spoken;
                                                              tmp25 = jsx;
                                                              tmp26 = closure_1;
                                                              tmp27 = closure_2;
                                                              obj10 = { projectId: null, notice: "outdated" };
                                                              tmp28 = projectId;
                                                              obj10.projectId = projectId;
                                                              obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                              obj1.children = jsx(View, obj9);
                                                              return jsx(View, obj1);
                                                            } else {
                                                              str = "ideas";
                                                              if ("ideas" === projectId) {
                                                                tmp = jsx;
                                                                tmp2 = View;
                                                                obj = { style: null, children: null };
                                                                tmp3 = closure_12;
                                                                obj.style = closure_12.reminderSeparated;
                                                                tmp4 = jsx;
                                                                tmp5 = closure_1;
                                                                tmp6 = closure_2;
                                                                obj11 = { style: null, onAsk: null, attribution: null };
                                                                obj11.style = closure_12.spoken;
                                                                tmp8 = onAskForIdeas;
                                                                obj11.onAsk = onAskForIdeas;
                                                                tmp9 = jsxs;
                                                                tmp10 = Fragment;
                                                                obj12 = { children: null };
                                                                tmp11 = jsx;
                                                                tmp12 = View;
                                                                obj13 = { style: null, children: null };
                                                                items = [,];
                                                                ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                                obj13.style = items;
                                                                tmp13 = jsx;
                                                                tmp14 = closure_0;
                                                                tmp15 = closure_2;
                                                                tmp7 = closure_1(closure_2[43]);
                                                                obj13.children = jsx(
                                                                  closure_0(closure_2[44]).ConjureAvatar,
                                                                  {},
                                                                );
                                                                items1 = [,];
                                                                items1[0] = jsx(View, obj13);
                                                                tmp16 = jsx;
                                                                tmp17 = View;
                                                                obj14 = { style: null, children: null };
                                                                obj14.style = closure_12.header;
                                                                tmp18 = jsx;
                                                                tmp19 = closure_2;
                                                                obj14.children = jsx(
                                                                  closure_0(closure_2[44]).ConjureHeader,
                                                                  {},
                                                                );
                                                                items1[1] = jsx(View, obj14);
                                                                obj12.children = items1;
                                                                obj11.attribution = jsxs(Fragment, obj12);
                                                                obj.children = jsx(tmp7, obj11);
                                                                return jsx(View, obj);
                                                              } else {
                                                                return;
                                                              }
                                                            }
                                                          }
                                                        }
                                                        if (true === message.interrupted) {
                                                          const _Symbol2 = Symbol;
                                                          class Te {
                                                            constructor(arg0) {
                                                              if ("outdated" === projectId) {
                                                                tmp20 = jsx;
                                                                tmp21 = View;
                                                                obj1 = { style: null, children: null };
                                                                tmp22 = closure_12;
                                                                obj1.style = closure_12.reminderTip;
                                                                tmp23 = jsx;
                                                                tmp24 = View;
                                                                obj9 = { style: null, children: null };
                                                                obj9.style = closure_12.spoken;
                                                                tmp25 = jsx;
                                                                tmp26 = closure_1;
                                                                tmp27 = closure_2;
                                                                obj10 = { projectId: null, notice: "outdated" };
                                                                tmp28 = projectId;
                                                                obj10.projectId = projectId;
                                                                obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                obj1.children = jsx(View, obj9);
                                                                return jsx(View, obj1);
                                                              } else {
                                                                str = "ideas";
                                                                if ("ideas" === projectId) {
                                                                  tmp = jsx;
                                                                  tmp2 = View;
                                                                  obj = { style: null, children: null };
                                                                  tmp3 = closure_12;
                                                                  obj.style = closure_12.reminderSeparated;
                                                                  tmp4 = jsx;
                                                                  tmp5 = closure_1;
                                                                  tmp6 = closure_2;
                                                                  obj11 = {
                                                                    style: null,
                                                                    onAsk: null,
                                                                    attribution: null,
                                                                  };
                                                                  obj11.style = closure_12.spoken;
                                                                  tmp8 = onAskForIdeas;
                                                                  obj11.onAsk = onAskForIdeas;
                                                                  tmp9 = jsxs;
                                                                  tmp10 = Fragment;
                                                                  obj12 = { children: null };
                                                                  tmp11 = jsx;
                                                                  tmp12 = View;
                                                                  obj13 = { style: null, children: null };
                                                                  items = [,];
                                                                  ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                    closure_12);
                                                                  obj13.style = items;
                                                                  tmp13 = jsx;
                                                                  tmp14 = closure_0;
                                                                  tmp15 = closure_2;
                                                                  tmp7 = closure_1(closure_2[43]);
                                                                  obj13.children = jsx(
                                                                    closure_0(closure_2[44]).ConjureAvatar,
                                                                    {},
                                                                  );
                                                                  items1 = [,];
                                                                  items1[0] = jsx(View, obj13);
                                                                  tmp16 = jsx;
                                                                  tmp17 = View;
                                                                  obj14 = { style: null, children: null };
                                                                  obj14.style = closure_12.header;
                                                                  tmp18 = jsx;
                                                                  tmp19 = closure_2;
                                                                  obj14.children = jsx(
                                                                    closure_0(closure_2[44]).ConjureHeader,
                                                                    {},
                                                                  );
                                                                  items1[1] = jsx(View, obj14);
                                                                  obj12.children = items1;
                                                                  obj11.attribution = jsxs(Fragment, obj12);
                                                                  obj.children = jsx(tmp7, obj11);
                                                                  return jsx(View, obj);
                                                                } else {
                                                                  return;
                                                                }
                                                              }
                                                            }
                                                          }
                                                          if (cResult[92] === Symbol.for("react.memo_cache_sentinel")) {
                                                            class Te {
                                                              constructor(arg0) {
                                                                if ("outdated" === projectId) {
                                                                  tmp20 = jsx;
                                                                  tmp21 = View;
                                                                  obj1 = { style: null, children: null };
                                                                  tmp22 = closure_12;
                                                                  obj1.style = closure_12.reminderTip;
                                                                  tmp23 = jsx;
                                                                  tmp24 = View;
                                                                  obj9 = { style: null, children: null };
                                                                  obj9.style = closure_12.spoken;
                                                                  tmp25 = jsx;
                                                                  tmp26 = closure_1;
                                                                  tmp27 = closure_2;
                                                                  obj10 = { projectId: null, notice: "outdated" };
                                                                  tmp28 = projectId;
                                                                  obj10.projectId = projectId;
                                                                  obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                  obj1.children = jsx(View, obj9);
                                                                  return jsx(View, obj1);
                                                                } else {
                                                                  str = "ideas";
                                                                  if ("ideas" === projectId) {
                                                                    tmp = jsx;
                                                                    tmp2 = View;
                                                                    obj = { style: null, children: null };
                                                                    tmp3 = closure_12;
                                                                    obj.style = closure_12.reminderSeparated;
                                                                    tmp4 = jsx;
                                                                    tmp5 = closure_1;
                                                                    tmp6 = closure_2;
                                                                    obj11 = {
                                                                      style: null,
                                                                      onAsk: null,
                                                                      attribution: null,
                                                                    };
                                                                    obj11.style = closure_12.spoken;
                                                                    tmp8 = onAskForIdeas;
                                                                    obj11.onAsk = onAskForIdeas;
                                                                    tmp9 = jsxs;
                                                                    tmp10 = Fragment;
                                                                    obj12 = { children: null };
                                                                    tmp11 = jsx;
                                                                    tmp12 = View;
                                                                    obj13 = { style: null, children: null };
                                                                    items = [,];
                                                                    ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                      closure_12);
                                                                    obj13.style = items;
                                                                    tmp13 = jsx;
                                                                    tmp14 = closure_0;
                                                                    tmp15 = closure_2;
                                                                    tmp7 = closure_1(closure_2[43]);
                                                                    obj13.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureAvatar,
                                                                      {},
                                                                    );
                                                                    items1 = [,];
                                                                    items1[0] = jsx(View, obj13);
                                                                    tmp16 = jsx;
                                                                    tmp17 = View;
                                                                    obj14 = { style: null, children: null };
                                                                    obj14.style = closure_12.header;
                                                                    tmp18 = jsx;
                                                                    tmp19 = closure_2;
                                                                    obj14.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureHeader,
                                                                      {},
                                                                    );
                                                                    items1[1] = jsx(View, obj14);
                                                                    obj12.children = items1;
                                                                    obj11.attribution = jsxs(Fragment, obj12);
                                                                    obj.children = jsx(tmp7, obj11);
                                                                    return jsx(View, obj);
                                                                  } else {
                                                                    return;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            const tmp61Result = tmp61(message(tmp2[18]).oOmBdX);
                                                            cResult[92] = tmp61Result;
                                                            let tmp60 = tmp61Result;
                                                          } else {
                                                            tmp60 = cResult[92];
                                                          }
                                                          const _Symbol3 = Symbol;
                                                          if (cResult[93] === Symbol.for("react.memo_cache_sentinel")) {
                                                            class Te {
                                                              constructor(arg0) {
                                                                if ("outdated" === projectId) {
                                                                  tmp20 = jsx;
                                                                  tmp21 = View;
                                                                  obj1 = { style: null, children: null };
                                                                  tmp22 = closure_12;
                                                                  obj1.style = closure_12.reminderTip;
                                                                  tmp23 = jsx;
                                                                  tmp24 = View;
                                                                  obj9 = { style: null, children: null };
                                                                  obj9.style = closure_12.spoken;
                                                                  tmp25 = jsx;
                                                                  tmp26 = closure_1;
                                                                  tmp27 = closure_2;
                                                                  obj10 = { projectId: null, notice: "outdated" };
                                                                  tmp28 = projectId;
                                                                  obj10.projectId = projectId;
                                                                  obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                  obj1.children = jsx(View, obj9);
                                                                  return jsx(View, obj1);
                                                                } else {
                                                                  str = "ideas";
                                                                  if ("ideas" === projectId) {
                                                                    tmp = jsx;
                                                                    tmp2 = View;
                                                                    obj = { style: null, children: null };
                                                                    tmp3 = closure_12;
                                                                    obj.style = closure_12.reminderSeparated;
                                                                    tmp4 = jsx;
                                                                    tmp5 = closure_1;
                                                                    tmp6 = closure_2;
                                                                    obj11 = {
                                                                      style: null,
                                                                      onAsk: null,
                                                                      attribution: null,
                                                                    };
                                                                    obj11.style = closure_12.spoken;
                                                                    tmp8 = onAskForIdeas;
                                                                    obj11.onAsk = onAskForIdeas;
                                                                    tmp9 = jsxs;
                                                                    tmp10 = Fragment;
                                                                    obj12 = { children: null };
                                                                    tmp11 = jsx;
                                                                    tmp12 = View;
                                                                    obj13 = { style: null, children: null };
                                                                    items = [,];
                                                                    ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                      closure_12);
                                                                    obj13.style = items;
                                                                    tmp13 = jsx;
                                                                    tmp14 = closure_0;
                                                                    tmp15 = closure_2;
                                                                    tmp7 = closure_1(closure_2[43]);
                                                                    obj13.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureAvatar,
                                                                      {},
                                                                    );
                                                                    items1 = [,];
                                                                    items1[0] = jsx(View, obj13);
                                                                    tmp16 = jsx;
                                                                    tmp17 = View;
                                                                    obj14 = { style: null, children: null };
                                                                    obj14.style = closure_12.header;
                                                                    tmp18 = jsx;
                                                                    tmp19 = closure_2;
                                                                    obj14.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureHeader,
                                                                      {},
                                                                    );
                                                                    items1[1] = jsx(View, obj14);
                                                                    obj12.children = items1;
                                                                    obj11.attribution = jsxs(Fragment, obj12);
                                                                    obj.children = jsx(tmp7, obj11);
                                                                    return jsx(View, obj);
                                                                  } else {
                                                                    return;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            tmp68[0] = tmp60;
                                                            let obj5 = {
                                                              size: "refresh_sm",
                                                              color: message(tmp2[9]).colors.TEXT_MUTED,
                                                            };
                                                            tmp68[4] = closure_19(tmp(tmp2[49]).StopIcon, obj5);
                                                            const tmp69 = closure_19(message(tmp2[10]), tmp68);
                                                            cResult[93] = tmp69;
                                                            let tmp64 = tmp69;
                                                            const tmp67 = message(tmp2[10]);
                                                          } else {
                                                            tmp64 = cResult[93];
                                                          }
                                                          if (cResult[94] !== tmp4.activityBox) {
                                                            class Te {
                                                              constructor(arg0) {
                                                                if ("outdated" === projectId) {
                                                                  tmp20 = jsx;
                                                                  tmp21 = View;
                                                                  obj1 = { style: null, children: null };
                                                                  tmp22 = closure_12;
                                                                  obj1.style = closure_12.reminderTip;
                                                                  tmp23 = jsx;
                                                                  tmp24 = View;
                                                                  obj9 = { style: null, children: null };
                                                                  obj9.style = closure_12.spoken;
                                                                  tmp25 = jsx;
                                                                  tmp26 = closure_1;
                                                                  tmp27 = closure_2;
                                                                  obj10 = { projectId: null, notice: "outdated" };
                                                                  tmp28 = projectId;
                                                                  obj10.projectId = projectId;
                                                                  obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                  obj1.children = jsx(View, obj9);
                                                                  return jsx(View, obj1);
                                                                } else {
                                                                  str = "ideas";
                                                                  if ("ideas" === projectId) {
                                                                    tmp = jsx;
                                                                    tmp2 = View;
                                                                    obj = { style: null, children: null };
                                                                    tmp3 = closure_12;
                                                                    obj.style = closure_12.reminderSeparated;
                                                                    tmp4 = jsx;
                                                                    tmp5 = closure_1;
                                                                    tmp6 = closure_2;
                                                                    obj11 = {
                                                                      style: null,
                                                                      onAsk: null,
                                                                      attribution: null,
                                                                    };
                                                                    obj11.style = closure_12.spoken;
                                                                    tmp8 = onAskForIdeas;
                                                                    obj11.onAsk = onAskForIdeas;
                                                                    tmp9 = jsxs;
                                                                    tmp10 = Fragment;
                                                                    obj12 = { children: null };
                                                                    tmp11 = jsx;
                                                                    tmp12 = View;
                                                                    obj13 = { style: null, children: null };
                                                                    items = [,];
                                                                    ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                      closure_12);
                                                                    obj13.style = items;
                                                                    tmp13 = jsx;
                                                                    tmp14 = closure_0;
                                                                    tmp15 = closure_2;
                                                                    tmp7 = closure_1(closure_2[43]);
                                                                    obj13.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureAvatar,
                                                                      {},
                                                                    );
                                                                    items1 = [,];
                                                                    items1[0] = jsx(View, obj13);
                                                                    tmp16 = jsx;
                                                                    tmp17 = View;
                                                                    obj14 = { style: null, children: null };
                                                                    obj14.style = closure_12.header;
                                                                    tmp18 = jsx;
                                                                    tmp19 = closure_2;
                                                                    obj14.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureHeader,
                                                                      {},
                                                                    );
                                                                    items1[1] = jsx(View, obj14);
                                                                    obj12.children = items1;
                                                                    obj11.attribution = jsxs(Fragment, obj12);
                                                                    obj.children = jsx(tmp7, obj11);
                                                                    return jsx(View, obj);
                                                                  } else {
                                                                    return;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            tmp73[0] = tmp4.activityBox;
                                                            tmp73[1] = tmp64;
                                                            const tmp74 = closure_19(onJumpToReplied, tmp73);
                                                            cResult[94] = tmp4.activityBox;
                                                            cResult[95] = tmp74;
                                                            let tmp70 = tmp74;
                                                          } else {
                                                            tmp70 = cResult[95];
                                                          }
                                                          if (cResult[96] === tmp41) {
                                                            if (cResult[97] === tmp33) {
                                                              if (cResult[98] === tmp70) {
                                                                let tmp75 = cResult[99];
                                                              }
                                                              return tmp75;
                                                            }
                                                          }
                                                          let obj6 = { style: tmp33, children: null };
                                                          let items1 = [tmp70, tmp41];
                                                          obj6.children = items1;
                                                          const tmp78 = id(onJumpToReplied, obj6);
                                                          cResult[96] = tmp41;
                                                          cResult[97] = tmp33;
                                                          cResult[98] = tmp70;
                                                          cResult[99] = tmp78;
                                                          tmp75 = tmp78;
                                                        } else if (cResult[100] !== message.steps) {
                                                          const _Symbol = Symbol;
                                                          class Te {
                                                            constructor(arg0) {
                                                              if ("outdated" === projectId) {
                                                                tmp20 = jsx;
                                                                tmp21 = View;
                                                                obj1 = { style: null, children: null };
                                                                tmp22 = closure_12;
                                                                obj1.style = closure_12.reminderTip;
                                                                tmp23 = jsx;
                                                                tmp24 = View;
                                                                obj9 = { style: null, children: null };
                                                                obj9.style = closure_12.spoken;
                                                                tmp25 = jsx;
                                                                tmp26 = closure_1;
                                                                tmp27 = closure_2;
                                                                obj10 = { projectId: null, notice: "outdated" };
                                                                tmp28 = projectId;
                                                                obj10.projectId = projectId;
                                                                obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                obj1.children = jsx(View, obj9);
                                                                return jsx(View, obj1);
                                                              } else {
                                                                str = "ideas";
                                                                if ("ideas" === projectId) {
                                                                  tmp = jsx;
                                                                  tmp2 = View;
                                                                  obj = { style: null, children: null };
                                                                  tmp3 = closure_12;
                                                                  obj.style = closure_12.reminderSeparated;
                                                                  tmp4 = jsx;
                                                                  tmp5 = closure_1;
                                                                  tmp6 = closure_2;
                                                                  obj11 = {
                                                                    style: null,
                                                                    onAsk: null,
                                                                    attribution: null,
                                                                  };
                                                                  obj11.style = closure_12.spoken;
                                                                  tmp8 = onAskForIdeas;
                                                                  obj11.onAsk = onAskForIdeas;
                                                                  tmp9 = jsxs;
                                                                  tmp10 = Fragment;
                                                                  obj12 = { children: null };
                                                                  tmp11 = jsx;
                                                                  tmp12 = View;
                                                                  obj13 = { style: null, children: null };
                                                                  items = [,];
                                                                  ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                    closure_12);
                                                                  obj13.style = items;
                                                                  tmp13 = jsx;
                                                                  tmp14 = closure_0;
                                                                  tmp15 = closure_2;
                                                                  tmp7 = closure_1(closure_2[43]);
                                                                  obj13.children = jsx(
                                                                    closure_0(closure_2[44]).ConjureAvatar,
                                                                    {},
                                                                  );
                                                                  items1 = [,];
                                                                  items1[0] = jsx(View, obj13);
                                                                  tmp16 = jsx;
                                                                  tmp17 = View;
                                                                  obj14 = { style: null, children: null };
                                                                  obj14.style = closure_12.header;
                                                                  tmp18 = jsx;
                                                                  tmp19 = closure_2;
                                                                  obj14.children = jsx(
                                                                    closure_0(closure_2[44]).ConjureHeader,
                                                                    {},
                                                                  );
                                                                  items1[1] = jsx(View, obj14);
                                                                  obj12.children = items1;
                                                                  obj11.attribution = jsxs(Fragment, obj12);
                                                                  obj.children = jsx(tmp7, obj11);
                                                                  return jsx(View, obj);
                                                                } else {
                                                                  return;
                                                                }
                                                              }
                                                            }
                                                          }
                                                          if (
                                                            cResult[102] === Symbol.for("react.memo_cache_sentinel")
                                                          ) {
                                                            class Me {
                                                              constructor(arg0) {
                                                                tmp = "error" === projectId.kind;
                                                                if (!tmp) {
                                                                  str = "terminal_error";
                                                                  tmp = "terminal_error" === projectId.kind;
                                                                }
                                                                return tmp;
                                                              }
                                                            }
                                                            class Te {
                                                              constructor(arg0) {
                                                                if ("outdated" === projectId) {
                                                                  tmp20 = jsx;
                                                                  tmp21 = View;
                                                                  obj1 = { style: null, children: null };
                                                                  tmp22 = closure_12;
                                                                  obj1.style = closure_12.reminderTip;
                                                                  tmp23 = jsx;
                                                                  tmp24 = View;
                                                                  obj9 = { style: null, children: null };
                                                                  obj9.style = closure_12.spoken;
                                                                  tmp25 = jsx;
                                                                  tmp26 = closure_1;
                                                                  tmp27 = closure_2;
                                                                  obj10 = { projectId: null, notice: "outdated" };
                                                                  tmp28 = projectId;
                                                                  obj10.projectId = projectId;
                                                                  obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                  obj1.children = jsx(View, obj9);
                                                                  return jsx(View, obj1);
                                                                } else {
                                                                  str = "ideas";
                                                                  if ("ideas" === projectId) {
                                                                    tmp = jsx;
                                                                    tmp2 = View;
                                                                    obj = { style: null, children: null };
                                                                    tmp3 = closure_12;
                                                                    obj.style = closure_12.reminderSeparated;
                                                                    tmp4 = jsx;
                                                                    tmp5 = closure_1;
                                                                    tmp6 = closure_2;
                                                                    obj11 = {
                                                                      style: null,
                                                                      onAsk: null,
                                                                      attribution: null,
                                                                    };
                                                                    obj11.style = closure_12.spoken;
                                                                    tmp8 = onAskForIdeas;
                                                                    obj11.onAsk = onAskForIdeas;
                                                                    tmp9 = jsxs;
                                                                    tmp10 = Fragment;
                                                                    obj12 = { children: null };
                                                                    tmp11 = jsx;
                                                                    tmp12 = View;
                                                                    obj13 = { style: null, children: null };
                                                                    items = [,];
                                                                    ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                      closure_12);
                                                                    obj13.style = items;
                                                                    tmp13 = jsx;
                                                                    tmp14 = closure_0;
                                                                    tmp15 = closure_2;
                                                                    tmp7 = closure_1(closure_2[43]);
                                                                    obj13.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureAvatar,
                                                                      {},
                                                                    );
                                                                    items1 = [,];
                                                                    items1[0] = jsx(View, obj13);
                                                                    tmp16 = jsx;
                                                                    tmp17 = View;
                                                                    obj14 = { style: null, children: null };
                                                                    obj14.style = closure_12.header;
                                                                    tmp18 = jsx;
                                                                    tmp19 = closure_2;
                                                                    obj14.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureHeader,
                                                                      {},
                                                                    );
                                                                    items1[1] = jsx(View, obj14);
                                                                    obj12.children = items1;
                                                                    obj11.attribution = jsxs(Fragment, obj12);
                                                                    obj.children = jsx(tmp7, obj11);
                                                                    return jsx(View, obj);
                                                                  } else {
                                                                    return;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          } else {
                                                            class Me {
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
                                                          const found = steps.find(Me);
                                                          cResult[100] = message.steps;
                                                          cResult[101] = found;
                                                        } else {
                                                          class Me {
                                                            constructor(arg0) {
                                                              tmp = "error" === projectId.kind;
                                                              if (!tmp) {
                                                                str = "terminal_error";
                                                                tmp = "terminal_error" === projectId.kind;
                                                              }
                                                              return tmp;
                                                            }
                                                          }
                                                          class Te {
                                                            constructor(arg0) {
                                                              if ("outdated" === projectId) {
                                                                tmp20 = jsx;
                                                                tmp21 = View;
                                                                obj1 = { style: null, children: null };
                                                                tmp22 = closure_12;
                                                                obj1.style = closure_12.reminderTip;
                                                                tmp23 = jsx;
                                                                tmp24 = View;
                                                                obj9 = { style: null, children: null };
                                                                obj9.style = closure_12.spoken;
                                                                tmp25 = jsx;
                                                                tmp26 = closure_1;
                                                                tmp27 = closure_2;
                                                                obj10 = { projectId: null, notice: "outdated" };
                                                                tmp28 = projectId;
                                                                obj10.projectId = projectId;
                                                                obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                obj1.children = jsx(View, obj9);
                                                                return jsx(View, obj1);
                                                              } else {
                                                                str = "ideas";
                                                                if ("ideas" === projectId) {
                                                                  tmp = jsx;
                                                                  tmp2 = View;
                                                                  obj = { style: null, children: null };
                                                                  tmp3 = closure_12;
                                                                  obj.style = closure_12.reminderSeparated;
                                                                  tmp4 = jsx;
                                                                  tmp5 = closure_1;
                                                                  tmp6 = closure_2;
                                                                  obj11 = {
                                                                    style: null,
                                                                    onAsk: null,
                                                                    attribution: null,
                                                                  };
                                                                  obj11.style = closure_12.spoken;
                                                                  tmp8 = onAskForIdeas;
                                                                  obj11.onAsk = onAskForIdeas;
                                                                  tmp9 = jsxs;
                                                                  tmp10 = Fragment;
                                                                  obj12 = { children: null };
                                                                  tmp11 = jsx;
                                                                  tmp12 = View;
                                                                  obj13 = { style: null, children: null };
                                                                  items = [,];
                                                                  ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                    closure_12);
                                                                  obj13.style = items;
                                                                  tmp13 = jsx;
                                                                  tmp14 = closure_0;
                                                                  tmp15 = closure_2;
                                                                  tmp7 = closure_1(closure_2[43]);
                                                                  obj13.children = jsx(
                                                                    closure_0(closure_2[44]).ConjureAvatar,
                                                                    {},
                                                                  );
                                                                  items1 = [,];
                                                                  items1[0] = jsx(View, obj13);
                                                                  tmp16 = jsx;
                                                                  tmp17 = View;
                                                                  obj14 = { style: null, children: null };
                                                                  obj14.style = closure_12.header;
                                                                  tmp18 = jsx;
                                                                  tmp19 = closure_2;
                                                                  obj14.children = jsx(
                                                                    closure_0(closure_2[44]).ConjureHeader,
                                                                    {},
                                                                  );
                                                                  items1[1] = jsx(View, obj14);
                                                                  obj12.children = items1;
                                                                  obj11.attribution = jsxs(Fragment, obj12);
                                                                  obj.children = jsx(tmp7, obj11);
                                                                  return jsx(View, obj);
                                                                } else {
                                                                  return;
                                                                }
                                                              }
                                                            }
                                                          }
                                                          if ("proposal" === message.kind) {
                                                            class Me {
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
                                                          const tmp50 = closure_17(message);
                                                          if (tmp50) {
                                                            class Me {
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
                                                              class Me {
                                                                constructor(arg0) {
                                                                  tmp = "error" === projectId.kind;
                                                                  if (!tmp) {
                                                                    str = "terminal_error";
                                                                    tmp = "terminal_error" === projectId.kind;
                                                                  }
                                                                  return tmp;
                                                                }
                                                              }
                                                              class Te {
                                                                constructor(arg0) {
                                                                  if ("outdated" === projectId) {
                                                                    tmp20 = jsx;
                                                                    tmp21 = View;
                                                                    obj1 = { style: null, children: null };
                                                                    tmp22 = closure_12;
                                                                    obj1.style = closure_12.reminderTip;
                                                                    tmp23 = jsx;
                                                                    tmp24 = View;
                                                                    obj9 = { style: null, children: null };
                                                                    obj9.style = closure_12.spoken;
                                                                    tmp25 = jsx;
                                                                    tmp26 = closure_1;
                                                                    tmp27 = closure_2;
                                                                    obj10 = { projectId: null, notice: "outdated" };
                                                                    tmp28 = projectId;
                                                                    obj10.projectId = projectId;
                                                                    obj9.children = jsx(
                                                                      closure_1(closure_2[42]),
                                                                      obj10,
                                                                    );
                                                                    obj1.children = jsx(View, obj9);
                                                                    return jsx(View, obj1);
                                                                  } else {
                                                                    str = "ideas";
                                                                    if ("ideas" === projectId) {
                                                                      tmp = jsx;
                                                                      tmp2 = View;
                                                                      obj = { style: null, children: null };
                                                                      tmp3 = closure_12;
                                                                      obj.style = closure_12.reminderSeparated;
                                                                      tmp4 = jsx;
                                                                      tmp5 = closure_1;
                                                                      tmp6 = closure_2;
                                                                      obj11 = {
                                                                        style: null,
                                                                        onAsk: null,
                                                                        attribution: null,
                                                                      };
                                                                      obj11.style = closure_12.spoken;
                                                                      tmp8 = onAskForIdeas;
                                                                      obj11.onAsk = onAskForIdeas;
                                                                      tmp9 = jsxs;
                                                                      tmp10 = Fragment;
                                                                      obj12 = { children: null };
                                                                      tmp11 = jsx;
                                                                      tmp12 = View;
                                                                      obj13 = { style: null, children: null };
                                                                      items = [,];
                                                                      ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                        closure_12);
                                                                      obj13.style = items;
                                                                      tmp13 = jsx;
                                                                      tmp14 = closure_0;
                                                                      tmp15 = closure_2;
                                                                      tmp7 = closure_1(closure_2[43]);
                                                                      obj13.children = jsx(
                                                                        closure_0(closure_2[44]).ConjureAvatar,
                                                                        {},
                                                                      );
                                                                      items1 = [,];
                                                                      items1[0] = jsx(View, obj13);
                                                                      tmp16 = jsx;
                                                                      tmp17 = View;
                                                                      obj14 = { style: null, children: null };
                                                                      obj14.style = closure_12.header;
                                                                      tmp18 = jsx;
                                                                      tmp19 = closure_2;
                                                                      obj14.children = jsx(
                                                                        closure_0(closure_2[44]).ConjureHeader,
                                                                        {},
                                                                      );
                                                                      items1[1] = jsx(View, obj14);
                                                                      obj12.children = items1;
                                                                      obj11.attribution = jsxs(Fragment, obj12);
                                                                      obj.children = jsx(tmp7, obj11);
                                                                      return jsx(View, obj);
                                                                    } else {
                                                                      return;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          if (tmp50) {
                                                            class Me {
                                                              constructor(arg0) {
                                                                tmp = "error" === projectId.kind;
                                                                if (!tmp) {
                                                                  str = "terminal_error";
                                                                  tmp = "terminal_error" === projectId.kind;
                                                                }
                                                                return tmp;
                                                              }
                                                            }
                                                            if (tmp53 == null) {
                                                              class Me {
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
                                                            class Te {
                                                              constructor(arg0) {
                                                                if ("outdated" === projectId) {
                                                                  tmp20 = jsx;
                                                                  tmp21 = View;
                                                                  obj1 = { style: null, children: null };
                                                                  tmp22 = closure_12;
                                                                  obj1.style = closure_12.reminderTip;
                                                                  tmp23 = jsx;
                                                                  tmp24 = View;
                                                                  obj9 = { style: null, children: null };
                                                                  obj9.style = closure_12.spoken;
                                                                  tmp25 = jsx;
                                                                  tmp26 = closure_1;
                                                                  tmp27 = closure_2;
                                                                  obj10 = { projectId: null, notice: "outdated" };
                                                                  tmp28 = projectId;
                                                                  obj10.projectId = projectId;
                                                                  obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                  obj1.children = jsx(View, obj9);
                                                                  return jsx(View, obj1);
                                                                } else {
                                                                  str = "ideas";
                                                                  if ("ideas" === projectId) {
                                                                    tmp = jsx;
                                                                    tmp2 = View;
                                                                    obj = { style: null, children: null };
                                                                    tmp3 = closure_12;
                                                                    obj.style = closure_12.reminderSeparated;
                                                                    tmp4 = jsx;
                                                                    tmp5 = closure_1;
                                                                    tmp6 = closure_2;
                                                                    obj11 = {
                                                                      style: null,
                                                                      onAsk: null,
                                                                      attribution: null,
                                                                    };
                                                                    obj11.style = closure_12.spoken;
                                                                    tmp8 = onAskForIdeas;
                                                                    obj11.onAsk = onAskForIdeas;
                                                                    tmp9 = jsxs;
                                                                    tmp10 = Fragment;
                                                                    obj12 = { children: null };
                                                                    tmp11 = jsx;
                                                                    tmp12 = View;
                                                                    obj13 = { style: null, children: null };
                                                                    items = [,];
                                                                    ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                      closure_12);
                                                                    obj13.style = items;
                                                                    tmp13 = jsx;
                                                                    tmp14 = closure_0;
                                                                    tmp15 = closure_2;
                                                                    tmp7 = closure_1(closure_2[43]);
                                                                    obj13.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureAvatar,
                                                                      {},
                                                                    );
                                                                    items1 = [,];
                                                                    items1[0] = jsx(View, obj13);
                                                                    tmp16 = jsx;
                                                                    tmp17 = View;
                                                                    obj14 = { style: null, children: null };
                                                                    obj14.style = closure_12.header;
                                                                    tmp18 = jsx;
                                                                    tmp19 = closure_2;
                                                                    obj14.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureHeader,
                                                                      {},
                                                                    );
                                                                    items1[1] = jsx(View, obj14);
                                                                    obj12.children = items1;
                                                                    obj11.attribution = jsxs(Fragment, obj12);
                                                                    obj.children = jsx(tmp7, obj11);
                                                                    return jsx(View, obj);
                                                                  } else {
                                                                    return;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          if (tmp50) {
                                                            class Me {
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
                                                              class Me {
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
                                                            class Te {
                                                              constructor(arg0) {
                                                                if ("outdated" === projectId) {
                                                                  tmp20 = jsx;
                                                                  tmp21 = View;
                                                                  obj1 = { style: null, children: null };
                                                                  tmp22 = closure_12;
                                                                  obj1.style = closure_12.reminderTip;
                                                                  tmp23 = jsx;
                                                                  tmp24 = View;
                                                                  obj9 = { style: null, children: null };
                                                                  obj9.style = closure_12.spoken;
                                                                  tmp25 = jsx;
                                                                  tmp26 = closure_1;
                                                                  tmp27 = closure_2;
                                                                  obj10 = { projectId: null, notice: "outdated" };
                                                                  tmp28 = projectId;
                                                                  obj10.projectId = projectId;
                                                                  obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                  obj1.children = jsx(View, obj9);
                                                                  return jsx(View, obj1);
                                                                } else {
                                                                  str = "ideas";
                                                                  if ("ideas" === projectId) {
                                                                    tmp = jsx;
                                                                    tmp2 = View;
                                                                    obj = { style: null, children: null };
                                                                    tmp3 = closure_12;
                                                                    obj.style = closure_12.reminderSeparated;
                                                                    tmp4 = jsx;
                                                                    tmp5 = closure_1;
                                                                    tmp6 = closure_2;
                                                                    obj11 = {
                                                                      style: null,
                                                                      onAsk: null,
                                                                      attribution: null,
                                                                    };
                                                                    obj11.style = closure_12.spoken;
                                                                    tmp8 = onAskForIdeas;
                                                                    obj11.onAsk = onAskForIdeas;
                                                                    tmp9 = jsxs;
                                                                    tmp10 = Fragment;
                                                                    obj12 = { children: null };
                                                                    tmp11 = jsx;
                                                                    tmp12 = View;
                                                                    obj13 = { style: null, children: null };
                                                                    items = [,];
                                                                    ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                      closure_12);
                                                                    obj13.style = items;
                                                                    tmp13 = jsx;
                                                                    tmp14 = closure_0;
                                                                    tmp15 = closure_2;
                                                                    tmp7 = closure_1(closure_2[43]);
                                                                    obj13.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureAvatar,
                                                                      {},
                                                                    );
                                                                    items1 = [,];
                                                                    items1[0] = jsx(View, obj13);
                                                                    tmp16 = jsx;
                                                                    tmp17 = View;
                                                                    obj14 = { style: null, children: null };
                                                                    obj14.style = closure_12.header;
                                                                    tmp18 = jsx;
                                                                    tmp19 = closure_2;
                                                                    obj14.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureHeader,
                                                                      {},
                                                                    );
                                                                    items1[1] = jsx(View, obj14);
                                                                    obj12.children = items1;
                                                                    obj11.attribution = jsxs(Fragment, obj12);
                                                                    obj.children = jsx(tmp7, obj11);
                                                                    return jsx(View, obj);
                                                                  } else {
                                                                    return;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          if (cResult[103] === isNewest) {
                                                            class Me {
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
                                                          let tmp57;
                                                          if ("open" === secretRequestStatus) {
                                                            class Me {
                                                              constructor(arg0) {
                                                                tmp = "error" === projectId.kind;
                                                                if (!tmp) {
                                                                  str = "terminal_error";
                                                                  tmp = "terminal_error" === projectId.kind;
                                                                }
                                                                return tmp;
                                                              }
                                                            }
                                                            class Te {
                                                              constructor(arg0) {
                                                                if ("outdated" === projectId) {
                                                                  tmp20 = jsx;
                                                                  tmp21 = View;
                                                                  obj1 = { style: null, children: null };
                                                                  tmp22 = closure_12;
                                                                  obj1.style = closure_12.reminderTip;
                                                                  tmp23 = jsx;
                                                                  tmp24 = View;
                                                                  obj9 = { style: null, children: null };
                                                                  obj9.style = closure_12.spoken;
                                                                  tmp25 = jsx;
                                                                  tmp26 = closure_1;
                                                                  tmp27 = closure_2;
                                                                  obj10 = { projectId: null, notice: "outdated" };
                                                                  tmp28 = projectId;
                                                                  obj10.projectId = projectId;
                                                                  obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                                  obj1.children = jsx(View, obj9);
                                                                  return jsx(View, obj1);
                                                                } else {
                                                                  str = "ideas";
                                                                  if ("ideas" === projectId) {
                                                                    tmp = jsx;
                                                                    tmp2 = View;
                                                                    obj = { style: null, children: null };
                                                                    tmp3 = closure_12;
                                                                    obj.style = closure_12.reminderSeparated;
                                                                    tmp4 = jsx;
                                                                    tmp5 = closure_1;
                                                                    tmp6 = closure_2;
                                                                    obj11 = {
                                                                      style: null,
                                                                      onAsk: null,
                                                                      attribution: null,
                                                                    };
                                                                    obj11.style = closure_12.spoken;
                                                                    tmp8 = onAskForIdeas;
                                                                    obj11.onAsk = onAskForIdeas;
                                                                    tmp9 = jsxs;
                                                                    tmp10 = Fragment;
                                                                    obj12 = { children: null };
                                                                    tmp11 = jsx;
                                                                    tmp12 = View;
                                                                    obj13 = { style: null, children: null };
                                                                    items = [,];
                                                                    ({ avatar: arr[0], avatarSpoken: arr[1] } =
                                                                      closure_12);
                                                                    obj13.style = items;
                                                                    tmp13 = jsx;
                                                                    tmp14 = closure_0;
                                                                    tmp15 = closure_2;
                                                                    tmp7 = closure_1(closure_2[43]);
                                                                    obj13.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureAvatar,
                                                                      {},
                                                                    );
                                                                    items1 = [,];
                                                                    items1[0] = jsx(View, obj13);
                                                                    tmp16 = jsx;
                                                                    tmp17 = View;
                                                                    obj14 = { style: null, children: null };
                                                                    obj14.style = closure_12.header;
                                                                    tmp18 = jsx;
                                                                    tmp19 = closure_2;
                                                                    obj14.children = jsx(
                                                                      closure_0(closure_2[44]).ConjureHeader,
                                                                      {},
                                                                    );
                                                                    items1[1] = jsx(View, obj14);
                                                                    obj12.children = items1;
                                                                    obj11.attribution = jsxs(Fragment, obj12);
                                                                    obj.children = jsx(tmp7, obj11);
                                                                    return jsx(View, obj);
                                                                  } else {
                                                                    return;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            tmp57 = obj9.activeAwaitingUser(message, isNewest);
                                                            const activeAwaitingUserResult = obj9.activeAwaitingUser(
                                                              message,
                                                              isNewest,
                                                            );
                                                          }
                                                          cResult[103] = isNewest;
                                                          cResult[104] = message;
                                                          cResult[105] = secretRequestStatus;
                                                          cResult[106] = tmp57;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                class Te {
                                                  constructor(arg0) {
                                                    if ("outdated" === projectId) {
                                                      tmp20 = jsx;
                                                      tmp21 = View;
                                                      obj1 = { style: null, children: null };
                                                      tmp22 = closure_12;
                                                      obj1.style = closure_12.reminderTip;
                                                      tmp23 = jsx;
                                                      tmp24 = View;
                                                      obj9 = { style: null, children: null };
                                                      obj9.style = closure_12.spoken;
                                                      tmp25 = jsx;
                                                      tmp26 = closure_1;
                                                      tmp27 = closure_2;
                                                      obj10 = { projectId: null, notice: "outdated" };
                                                      tmp28 = projectId;
                                                      obj10.projectId = projectId;
                                                      obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                      obj1.children = jsx(View, obj9);
                                                      return jsx(View, obj1);
                                                    } else {
                                                      str = "ideas";
                                                      if ("ideas" === projectId) {
                                                        tmp = jsx;
                                                        tmp2 = View;
                                                        obj = { style: null, children: null };
                                                        tmp3 = closure_12;
                                                        obj.style = closure_12.reminderSeparated;
                                                        tmp4 = jsx;
                                                        tmp5 = closure_1;
                                                        tmp6 = closure_2;
                                                        obj11 = { style: null, onAsk: null, attribution: null };
                                                        obj11.style = closure_12.spoken;
                                                        tmp8 = onAskForIdeas;
                                                        obj11.onAsk = onAskForIdeas;
                                                        tmp9 = jsxs;
                                                        tmp10 = Fragment;
                                                        obj12 = { children: null };
                                                        tmp11 = jsx;
                                                        tmp12 = View;
                                                        obj13 = { style: null, children: null };
                                                        items = [,];
                                                        ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                        obj13.style = items;
                                                        tmp13 = jsx;
                                                        tmp14 = closure_0;
                                                        tmp15 = closure_2;
                                                        tmp7 = closure_1(closure_2[43]);
                                                        obj13.children = jsx(
                                                          closure_0(closure_2[44]).ConjureAvatar,
                                                          {},
                                                        );
                                                        items1 = [,];
                                                        items1[0] = jsx(View, obj13);
                                                        tmp16 = jsx;
                                                        tmp17 = View;
                                                        obj14 = { style: null, children: null };
                                                        obj14.style = closure_12.header;
                                                        tmp18 = jsx;
                                                        tmp19 = closure_2;
                                                        obj14.children = jsx(
                                                          closure_0(closure_2[44]).ConjureHeader,
                                                          {},
                                                        );
                                                        items1[1] = jsx(View, obj14);
                                                        obj12.children = items1;
                                                        obj11.attribution = jsxs(Fragment, obj12);
                                                        obj.children = jsx(tmp7, obj11);
                                                        return jsx(View, obj);
                                                      } else {
                                                        return;
                                                      }
                                                    }
                                                  }
                                                }
                                                if (hostsReminder) {
                                                  class Me {
                                                    constructor(arg0) {
                                                      tmp = "error" === projectId.kind;
                                                      if (!tmp) {
                                                        str = "terminal_error";
                                                        tmp = "terminal_error" === projectId.kind;
                                                      }
                                                      return tmp;
                                                    }
                                                  }
                                                  class Te {
                                                    constructor(arg0) {
                                                      if ("outdated" === projectId) {
                                                        tmp20 = jsx;
                                                        tmp21 = View;
                                                        obj1 = { style: null, children: null };
                                                        tmp22 = closure_12;
                                                        obj1.style = closure_12.reminderTip;
                                                        tmp23 = jsx;
                                                        tmp24 = View;
                                                        obj9 = { style: null, children: null };
                                                        obj9.style = closure_12.spoken;
                                                        tmp25 = jsx;
                                                        tmp26 = closure_1;
                                                        tmp27 = closure_2;
                                                        obj10 = { projectId: null, notice: "outdated" };
                                                        tmp28 = projectId;
                                                        obj10.projectId = projectId;
                                                        obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                                        obj1.children = jsx(View, obj9);
                                                        return jsx(View, obj1);
                                                      } else {
                                                        str = "ideas";
                                                        if ("ideas" === projectId) {
                                                          tmp = jsx;
                                                          tmp2 = View;
                                                          obj = { style: null, children: null };
                                                          tmp3 = closure_12;
                                                          obj.style = closure_12.reminderSeparated;
                                                          tmp4 = jsx;
                                                          tmp5 = closure_1;
                                                          tmp6 = closure_2;
                                                          obj11 = { style: null, onAsk: null, attribution: null };
                                                          obj11.style = closure_12.spoken;
                                                          tmp8 = onAskForIdeas;
                                                          obj11.onAsk = onAskForIdeas;
                                                          tmp9 = jsxs;
                                                          tmp10 = Fragment;
                                                          obj12 = { children: null };
                                                          tmp11 = jsx;
                                                          tmp12 = View;
                                                          obj13 = { style: null, children: null };
                                                          items = [,];
                                                          ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                                          obj13.style = items;
                                                          tmp13 = jsx;
                                                          tmp14 = closure_0;
                                                          tmp15 = closure_2;
                                                          tmp7 = closure_1(closure_2[43]);
                                                          obj13.children = jsx(
                                                            closure_0(closure_2[44]).ConjureAvatar,
                                                            {},
                                                          );
                                                          items1 = [,];
                                                          items1[0] = jsx(View, obj13);
                                                          tmp16 = jsx;
                                                          tmp17 = View;
                                                          obj14 = { style: null, children: null };
                                                          obj14.style = closure_12.header;
                                                          tmp18 = jsx;
                                                          tmp19 = closure_2;
                                                          obj14.children = jsx(
                                                            closure_0(closure_2[44]).ConjureHeader,
                                                            {},
                                                          );
                                                          items1[1] = jsx(View, obj14);
                                                          obj12.children = items1;
                                                          obj11.attribution = jsxs(Fragment, obj12);
                                                          obj.children = jsx(tmp7, obj11);
                                                          return jsx(View, obj);
                                                        } else {
                                                          return;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  tmp44[0] = tmp4.reminderSlot;
                                                  tmp44[1] = reminder;
                                                  tmp44[2] = tmp40;
                                                  const tmp42 = closure_19(message(tmp2[45]), tmp44);
                                                }
                                                cResult[49] = hostsReminder;
                                                cResult[50] = reminder;
                                                cResult[51] = tmp40;
                                                cResult[52] = tmp4.reminderSlot;
                                                cResult[53] = tmp42;
                                                tmp41 = tmp42;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  class Te {
                                    constructor(arg0) {
                                      if ("outdated" === projectId) {
                                        tmp20 = jsx;
                                        tmp21 = View;
                                        obj1 = { style: null, children: null };
                                        tmp22 = closure_12;
                                        obj1.style = closure_12.reminderTip;
                                        tmp23 = jsx;
                                        tmp24 = View;
                                        obj9 = { style: null, children: null };
                                        obj9.style = closure_12.spoken;
                                        tmp25 = jsx;
                                        tmp26 = closure_1;
                                        tmp27 = closure_2;
                                        obj10 = { projectId: null, notice: "outdated" };
                                        tmp28 = projectId;
                                        obj10.projectId = projectId;
                                        obj9.children = jsx(closure_1(closure_2[42]), obj10);
                                        obj1.children = jsx(View, obj9);
                                        return jsx(View, obj1);
                                      } else {
                                        str = "ideas";
                                        if ("ideas" === projectId) {
                                          tmp = jsx;
                                          tmp2 = View;
                                          obj = { style: null, children: null };
                                          tmp3 = closure_12;
                                          obj.style = closure_12.reminderSeparated;
                                          tmp4 = jsx;
                                          tmp5 = closure_1;
                                          tmp6 = closure_2;
                                          obj11 = { style: null, onAsk: null, attribution: null };
                                          obj11.style = closure_12.spoken;
                                          tmp8 = onAskForIdeas;
                                          obj11.onAsk = onAskForIdeas;
                                          tmp9 = jsxs;
                                          tmp10 = Fragment;
                                          obj12 = { children: null };
                                          tmp11 = jsx;
                                          tmp12 = View;
                                          obj13 = { style: null, children: null };
                                          items = [,];
                                          ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                                          obj13.style = items;
                                          tmp13 = jsx;
                                          tmp14 = closure_0;
                                          tmp15 = closure_2;
                                          tmp7 = closure_1(closure_2[43]);
                                          obj13.children = jsx(closure_0(closure_2[44]).ConjureAvatar, {});
                                          items1 = [,];
                                          items1[0] = jsx(View, obj13);
                                          tmp16 = jsx;
                                          tmp17 = View;
                                          obj14 = { style: null, children: null };
                                          obj14.style = closure_12.header;
                                          tmp18 = jsx;
                                          tmp19 = closure_2;
                                          obj14.children = jsx(closure_0(closure_2[44]).ConjureHeader, {});
                                          items1[1] = jsx(View, obj14);
                                          obj12.children = items1;
                                          obj11.attribution = jsxs(Fragment, obj12);
                                          obj.children = jsx(tmp7, obj11);
                                          return jsx(View, obj);
                                        } else {
                                          return;
                                        }
                                      }
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
                                  cResult[48] = Te;
                                  tmp40 = Te;
                                }
                                tmp38 = "" !== tmp30;
                              }
                            }
                          }
                          function _e() {
                            const obj2 = { content, userId: user_id, onRestoreVersion: null };
                            let fn;
                            if (null != closure_17) {
                              if (null != onRestoreVersion) {
                                fn = () =>
                                  projectId(groupStart[41]).confirmRestoreVersion({
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
                          cResult[36] = tmp30;
                          cResult[37] = onRestoreVersion;
                          cResult[38] = tmp35;
                          cResult[39] = _e;
                        }
                        let turnRestoreEntryResult = null;
                        if (null != onRestoreVersion) {
                          class Me {
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
                        tmp35 = turnRestoreEntryResult;
                      }
                      const items2 = [tmp4.row, rowGroupStart];
                      cResult[29] = tmp4.row;
                      cResult[30] = rowGroupStart;
                      cResult[31] = items2;
                      tmp33 = items2;
                    }
                    cResult[22] = onJumpToReplied;
                    cResult[23] = replied;
                    cResult[24] = tmp25;
                  }
                }
                cResult[18] = message.render_id;
                cResult[19] = onTogglePlan;
                cResult[20] = planSuperseded;
                cResult[21] = tmp23;
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
          let obj7 = { turnActive: !tmp11 };
          const turnSegmentsResult = tmp(tmp2[29]).turnSegments(message.steps, obj7);
          cResult[7] = message.steps;
          cResult[8] = !tmp11;
          cResult[9] = turnSegmentsResult;
          const tmpResult9 = tmp(tmp2[29]);
        }
        let obj = projectId(groupStart[15]);
        const timelineTree = projectId(groupStart[29]).buildTimelineTree(message.steps, { turnActive: tmp8 });
        cResult[2] = message.steps;
        cResult[3] = !tmp5;
        cResult[4] = timelineTree;
        tmp9 = timelineTree;
        const tmpResult10 = projectId(groupStart[29]);
      }
    : (projectId) => {
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
        let tmp = closure_29();
        closure_12 = tmp;
        items = [message];
        const memo = onToggleChecklist.useMemo(() => {
          const obj = ConjureTimelineTree;
          return obj.buildTimelineTree(message.steps, { turnActive: !constants(message) });
        }, items);
        let items1 = [message];
        const memo1 = onToggleChecklist.useMemo(() => {
          const obj = ConjureTimelineTree;
          return obj.turnSegments(message.steps, { turnActive: !constants(message) });
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
                projectId(groupStart[41]).confirmRestoreVersion({
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
              renderReminder(c2) {
                if ("outdated" === c2) {
                  const obj2 = { style: closure_12.reminderTip, children: null };
                  const obj3 = { style: closure_12.spoken, children: null };
                  const obj4 = { projectId, notice: "outdated" };
                  obj3.children = closure_2_19(ConjurePublishNoticeLineDefault, obj4);
                  obj2.children = closure_2_19(closure_2_8, obj3);
                  return closure_2_19(closure_2_8, obj2);
                } else if ("ideas" === c2) {
                  const obj = { style: closure_12.reminderSeparated, children: null };
                  const obj5 = { style: closure_12.spoken, onAsk, attribution: null };
                  const obj6 = { children: null };
                  const obj7 = { style: null, children: null };
                  items = [,];
                  ({ avatar: arr[0], avatarSpoken: arr[1] } = closure_12);
                  obj7.style = items;
                  obj7.children = closure_2_19(ConjureMessageAuthor.ConjureAvatar, {});
                  const items1 = [closure_2_19(closure_2_8, obj7)];
                  const obj8 = {
                    style: closure_12.header,
                    children: closure_2_19(ConjureMessageAuthor.ConjureHeader, {}),
                  };
                  items1[1] = closure_2_19(closure_2_8, obj8);
                  obj6.children = items1;
                  obj5.attribution = closure_2_20(guild, obj6);
                  obj.children = closure_2_19(ConjureIdeasOfferDefault, obj5);
                  return closure_2_19(closure_2_8, obj);
                }
              },
            };
            tmp17 = clarification(message(groupStart[45]), obj2);
          }
          if ("user" === message.role) {
            if ("" === trimmed) {
              if (null == memo4) {
                if (null == attachments) {
                  return null;
                }
              }
            }
            const conjureAgentReactionLabel = projectId(groupStart[46]).getConjureAgentReactionLabel(
              message.agentReaction,
            );
            let obj5 = { style: items8, onLongPress: tmp16, accessible: false, children: null };
            let tmp103 = null;
            if (groupStart) {
              let obj6 = { style: tmp.avatar, children: null };
              let obj7 = { userId: message.user_id };
              obj6.children = clarification(tmp98(tmp99[44]).ConjureUserAvatar, obj7);
              tmp103 = clarification(onJumpToReplied, obj6);
            }
            const items11 = [tmp103, , , ,];
            let tmp106 = null;
            if (groupStart) {
              let obj8 = { style: tmp.header, children: null };
              ({ user_id: obj46.userId, created_at: obj46.at } = message);
              obj8.children = clarification(tmp98(tmp99[44]).ConjureUserHeader, { userId: null, at: null });
              tmp106 = clarification(onJumpToReplied, obj8);
              const obj9 = { userId: null, at: null };
            }
            items11[1] = tmp106;
            if (tmp15) {
              let combined;
              if (!groupStart) {
                const intl3 = tmp98(tmp99[17]).intl;
                const _HermesInternal = HermesInternal;
                combined = "" + intl3.string(tmp98(tmp99[17]).t.KD6OJJ) + ": " + trimmed;
              }
              const obj10 = {
                variant: "text-md/normal",
                color: "text-default",
                accessibilityLabel: combined,
                children: null,
              };
              let tmp112 = null;
              if (null != memo4) {
                const obj11 = { label: memo4.label, variant: "text-md/medium" };
                tmp112 = clarification(message(tmp99[47]), obj11);
              }
              const items12 = [tmp112, ,];
              let str5 = null;
              if (null != memo4) {
                str5 = null;
                if (tmp15) {
                  str5 = " ";
                }
              }
              items12[1] = str5;
              items12[2] = trimmed;
              obj10.children = items12;
              let tmp101Result = tmp101(tmp98(tmp99[19]).Text, obj10);
            } else {
              tmp101Result = null;
            }
            items11[2] = tmp101Result;
            let tmp115 = null;
            if (null != attachments) {
              const obj12 = { projectId, attachments };
              tmp115 = clarification(closure_33, obj12);
            }
            items11[3] = tmp115;
            let tmp118 = null;
            if (null != message.agentReaction) {
              tmp118 = null;
              if (null != conjureAgentReactionLabel) {
                const obj13 = {
                  style: tmp.agentReaction,
                  accessible: true,
                  accessibilityRole: "image",
                  accessibilityLabel: conjureAgentReactionLabel,
                  children: null,
                };
                const obj14 = { name: message.agentReaction, fastImageStyle: tmp.agentReactionEmoji };
                obj13.children = clarification(message(tmp99[48]), obj14);
                tmp118 = clarification(onJumpToReplied, obj13);
              }
            }
            items11[4] = tmp118;
            obj5.children = items11;
            return c20(replied, obj5);
          } else {
            if ("publish_notice" === message.kind) {
              if (null != message.publishNotice) {
                const obj15 = { style: items8, children: null };
                const obj16 = { projectId, notice: message.publishNotice };
                const items13 = [clarification(message(groupStart[42]), obj16), tmp17];
                obj15.children = items13;
                return c20(onJumpToReplied, obj15);
              }
            }
            if (true === message.interrupted) {
              const obj17 = { style: items8, children: null };
              const obj18 = { style: tmp.activityBox, children: null };
              const obj19 = { line: null, live: false, settled: true, inGutter: true, glyph: null };
              const intl2 = projectId(groupStart[17]).intl;
              obj19.line = intl2.string(message(groupStart[18]).oOmBdX);
              const obj20 = { size: "refresh_sm", color: message(groupStart[9]).colors.TEXT_MUTED };
              obj19.glyph = clarification(projectId(groupStart[49]).StopIcon, obj20);
              obj18.children = clarification(message(groupStart[10]), obj19);
              const items14 = [clarification(onJumpToReplied, obj18), tmp17];
              obj17.children = items14;
              return c20(onJumpToReplied, obj17);
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
                let obj3 = projectId(groupStart[50]);
                const tmp29 = projectId(groupStart[50]).activeAwaitingUser(message, isNewest);
                const activeAwaitingUserResult = projectId(groupStart[50]).activeAwaitingUser(message, isNewest);
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
              const obj21 = {
                steps: message.steps,
                content: trimmed,
                hasProposal: null != proposal,
                hasAttachments: null != attachments,
              };
              const turnPresentation = projectId(groupStart[51]).resolveTurnPresentation(obj21);
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
              let obj4 = projectId(groupStart[51]);
              const tmp22 = memo5;
              const turnLeadsWithStretchResult = projectId(groupStart[51]).turnLeadsWithStretch(
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
              const tmp38Result = projectId(groupStart[51]);
              const obj22 = { turnActive: tmp45 };
              open = projectId(groupStart[29]).turnLifecycle(memo1, obj22).open;
              let avatarSpokenReplying = groupStart;
              if (groupStart) {
                avatarSpokenReplying = null != replied;
              }
              let tmp49Result = null;
              if (avatarSpokenReplying) {
                const obj23 = { replied, onJump: null };
                let tmp52;
                if (null != onJumpToReplied) {
                  tmp52 = callback2;
                }
                obj23.onJump = tmp52;
                tmp49Result = clarification(message(tmp39[13]), obj23);
                const tmp51 = message(tmp39[13]);
              }
              const items15 = [tmp49Result, ,];
              const items16 = [, ,];
              ({ avatar: arr15[0], avatarSpoken: arr15[1] } = tmp);
              if (avatarSpokenReplying) {
                avatarSpokenReplying = tmp.avatarSpokenReplying;
              }
              const obj24 = { children: null };
              const obj25 = { style: null, children: null };
              items16[2] = avatarSpokenReplying;
              obj25.style = items16;
              obj25.children = clarification(projectId(groupStart[44]).ConjureAvatar, {});
              items15[1] = clarification(onJumpToReplied, obj25);
              const obj26 = { style: tmp.header, children: null };
              const obj27 = { at: message.created_at };
              obj26.children = clarification(projectId(groupStart[44]).ConjureHeader, obj27);
              items15[2] = clarification(onJumpToReplied, obj26);
              obj24.children = items15;
              const tmp46Result = c20(c21, obj24);
              const obj28 = { style: items8, onLongPress: tmp16, accessible: false, children: null };
              let tmp53Result = null;
              if (turnLeadsWithStretchResult) {
                tmp53Result = null;
                if (groupStart) {
                  const obj29 = { style: tmp.spoken, children: tmp46Result };
                  tmp53Result = tmp53(tmp54, obj29);
                }
              }
              const items17 = [
                tmp53Result,
                memo1.map((prose, index) => {
                  let tmp18Result = null;
                  if (null != prose.prose) {
                    tmp18Result = null;
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
                      obj2.children = closure_2_19(ConjureNativeMarkdown.ConjureRevealedMarkdown, obj3);
                      tmp18Result = closure_2_19(closure_2_8, obj2);
                    }
                  }
                  const children = [tmp18Result];
                  let tmp7Result = null;
                  if (prose.hasWork) {
                    index = prose.index;
                    const obj = { steps: null, tasks: null };
                    const steps = memo.steps;
                    obj.steps = steps.filter((segment) => segment.segment === index);
                    const tasks = memo.tasks;
                    obj.tasks = tasks.filter((task) => task.task.segment === index);
                    if (prose.index === index) {
                      if (null != memo.turn) {
                        const obj4 = { turn: memo.turn };
                        let obj6 = obj4;
                      }
                      const obj5 = { tree: null, turnActive: null, besideAvatar: null };
                      const merged = Object.assign(obj6);
                      obj5.tree = obj;
                      obj5.turnActive = prose.index === open;
                      let tmp15 = c21;
                      if (c21) {
                        tmp15 = groupStart;
                      }
                      if (tmp15) {
                        tmp15 = 0 === index;
                      }
                      if (tmp15) {
                        let tmp16 = null == prose.prose;
                        if (!tmp16) {
                          tmp16 = prose.prose.key === c20;
                        }
                        tmp15 = tmp16;
                      }
                      obj5.besideAvatar = tmp15;
                      tmp7Result = closure_2_19(closure_37, obj5);
                    }
                    obj6 = {};
                  }
                  children[1] = tmp7Result;
                  return closure_2_20(noop.Fragment, { children }, prose.key);
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
                                    const obj30 = { style: tmp.spoken, children: null };
                                    const obj31 = { variant: "text-xs/normal", color: "text-muted", children: null };
                                    const intl = tmp38(tmp39[17]).intl;
                                    obj31.children = intl.string(message(tmp39[18]).YR8A2v);
                                    obj30.children = tmp53(tmp38(tmp39[19]).Text, obj31);
                                    tmp53Result14 = tmp53(tmp54, obj30);
                                  }
                                  items17[3] = tmp53Result14;
                                  items17[4] = tmp17;
                                  obj28.children = items17;
                                  return tmp46(tmp56, obj28);
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
              const obj32 = { style: tmp.spoken, children: null };
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
                const obj33 = { source: turnPresentation.closingContent };
                tmp53Result15 = tmp53(message(tmp39[25]), obj33);
              }
              items18[1] = tmp53Result15;
              let tmp53Result16 = null;
              if ("side_reply" === message.kind) {
                const obj34 = {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: tmp38(tmp39[52]).midTurnCaption(message.acknowledges),
                };
                tmp53Result16 = tmp53(tmp38(tmp39[19]).Text, obj34);
                const tmp38Result5 = tmp38(tmp39[52]);
              }
              items18[2] = tmp53Result16;
              let tmp53Result17 = null;
              if (null != attachments) {
                const obj35 = { projectId, attachments };
                tmp53Result17 = tmp53(closure_33, obj35);
              }
              items18[3] = tmp53Result17;
              if (null != items19) {
                const tmp67 = message(tmp39[21]);
                if (items19 == null) {
                  items19 = [];
                }
                const obj36 = { children: null };
                const obj37 = {
                  todos: items19,
                  provisional: provisionalTodo,
                  agents: memo3,
                  live: null,
                  superseded: null,
                  expanded: null,
                  onToggleExpanded: null,
                };
                const tmp68 = message(tmp39[53]);
                obj37.live = tmp38(tmp39[54]).checklistLive(message);
                obj37.superseded = checklistSuperseded;
                obj37.expanded = checklistExpanded;
                obj37.onToggleExpanded = callback;
                obj36.children = tmp53(tmp68, obj37);
                let tmp53Result18 = tmp53(tmp67, obj36);
                const tmp38Result6 = tmp38(tmp39[54]);
              } else {
                tmp53Result18 = null;
              }
              items18[4] = tmp53Result18;
              let tmp53Result19 = null;
              if (null != proposal) {
                const obj38 = {
                  projectId,
                  proposal,
                  version: planVersion,
                  superseded: planSuperseded,
                  expanded: planExpanded,
                  onToggleExpanded: callback1,
                  onApprove: onApprovePlan,
                };
                tmp53Result19 = tmp53(closure_31, obj38);
              }
              items18[5] = tmp53Result19;
              let tmp53Result20 = null;
              if (null != clarification) {
                const obj39 = {
                  projectId,
                  clarification,
                  onSubmit: onAnswerClarification,
                  onDismiss() {
                    return closure_1_10(clarification.id);
                  },
                };
                tmp53Result20 = tmp53(message(tmp39[55]), obj39);
              }
              items18[6] = tmp53Result20;
              let tmp53Result21 = null;
              if (null != tmp27) {
                const obj40 = {
                  projectId,
                  cardId: message.render_id,
                  request: tmp27,
                  status: secretRequestStatus,
                  awaiting: tmp29,
                };
                tmp53Result21 = tmp53(message(tmp39[56]), obj40);
              }
              items18[7] = tmp53Result21;
              let tmp53Result22 = null;
              if (null != tmp33) {
                const obj42 = { projectId, request: tmp33 };
                tmp53Result22 = tmp53(message(tmp39[57]), obj42);
              }
              items18[8] = tmp53Result22;
              let tmp53Result23 = null;
              if (null != tmp25) {
                const obj43 = { projectId };
                tmp53Result23 = tmp53(message(tmp39[58]), obj43);
              }
              items18[9] = tmp53Result23;
              let tmp53Result24 = null;
              if (null != ideas) {
                const obj44 = { ideas, onPick: onPickIdea };
                tmp53Result24 = tmp53(closure_32, obj44);
              }
              items18[10] = tmp53Result24;
              let tmp53Result25 = null;
              if (null != restoreProposal) {
                const obj45 = { proposal: restoreProposal, onRestore: null };
                let fn;
                if (isNewest) {
                  if (null != onRestoreVersion) {
                    fn = () =>
                      ConjureVersionRestoreConfirm.confirmRestoreVersion({
                        onConfirm() {
                          return onRestoreVersion(projectId(groupStart[39]).proposalRestoreEntry(restoreProposal));
                        },
                      });
                  }
                }
                obj45.onRestore = fn;
                tmp53Result25 = tmp53(closure_39, obj45);
              }
              items18[11] = tmp53Result25;
              let tmp53Result26 = null;
              if (null != found) {
                tmp53Result26 = null;
                if ("message" in found) {
                  const obj47 = { variant: "text-sm/normal", color: "text-feedback-critical", children: found.message };
                  tmp53Result26 = tmp53(tmp38(tmp39[19]).Text, obj47);
                }
              }
              items18[12] = tmp53Result26;
              obj32.children = items18;
              tmp46Result2 = tmp46(tmp54, obj32);
              const tmp38Result4 = projectId(groupStart[29]);
              tmp56 = replied;
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
  ? (projectId) => {
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
      stateFromStores = projectId(stateFromStores[59]).useStateFromStores(tmp8, tmp9, tmp10);
      const bottom = onRestoreVersion(tmp4[60])().bottom;
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === projectId) {
          let tmp13 = cResult[5];
          let tmp14 = cResult[6];
        }
        const effect = stateFromStores3.useEffect(tmp13, tmp14);
        const ackConjureProjectWhileViewing = tmp2(tmp4[61]).useAckConjureProjectWhileViewing(projectId);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ConjureChatStore];
          cResult[7] = items2;
          let tmp19 = items2;
        } else {
          tmp19 = cResult[7];
        }
        if (cResult[8] !== projectId) {
          class F {
            constructor() {
              return closure_18.getMessages(projectId);
            }
          }
          const items3 = [projectId];
          cResult[8] = projectId;
          cResult[9] = F;
          cResult[10] = items3;
          let tmp22 = items3;
        } else {
          class F {
            constructor() {
              return closure_18.getMessages(projectId);
            }
          }
          tmp22 = cResult[10];
        }
        let obj3 = stateFromStores3;
        const tmp2Result15 = tmp2(tmp4[61]);
        const stateFromStores1 = tmp2(tmp4[59]).useStateFromStores(tmp19, F, tmp22);
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              return closure_18.getMessages(projectId);
            }
          }
          const items4 = [ConjureProjectStore];
          cResult[11] = items4;
          const tmp26 = items4;
        } else {
          class F {
            constructor() {
              return closure_18.getMessages(projectId);
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
        const tmp2Result16 = tmp2(tmp4[59]);
        const stateFromStores2 = tmp2(tmp4[59]).useStateFromStores(tmp26, U, tmp28);
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
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            const items7 = [projectId];
            cResult[19] = projectId;
            cResult[20] = J;
            cResult[21] = items7;
            let tmp38 = items7;
          } else {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            tmp38 = cResult[21];
          }
          stateFromStores3 = tmp2(tmp4[59]).useStateFromStores(tmp36, J, tmp38);
          const _Symbol4 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            const items8 = [ConjureChatStore];
            cResult[22] = items8;
            const tmp42 = items8;
          } else {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
          }
          if (cResult[23] !== projectId) {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            const items9 = [projectId];
            cResult[23] = projectId;
            cResult[24] = tmp45;
            cResult[25] = items9;
            let tmp44 = items9;
          } else {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            tmp44 = cResult[25];
          }
          const tmp2Result18 = tmp2(tmp4[59]);
          const stateFromStores4 = tmp2(tmp4[59]).useStateFromStores(tmp42, tmp45, tmp44);
          const _Symbol5 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            const items10 = [ConjureChatStore];
            cResult[26] = items10;
            const tmp49 = items10;
          } else {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
          }
          if (cResult[27] !== projectId) {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            const items11 = [projectId];
            cResult[27] = projectId;
            cResult[28] = tmp52;
            cResult[29] = items11;
            let tmp51 = items11;
          } else {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            tmp51 = cResult[29];
          }
          const tmp2Result19 = tmp2(tmp4[59]);
          const stateFromStores5 = tmp2(tmp4[59]).useStateFromStores(tmp49, tmp52, tmp51);
          const _Symbol6 = Symbol;
          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            const items12 = [ConjureChatStore];
            cResult[30] = items12;
          } else {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
          }
          if (cResult[31] !== projectId) {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            const items13 = [projectId];
            cResult[31] = projectId;
            cResult[32] = tmp59;
            cResult[33] = items13;
          } else {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
          }
          tmp2(tmp4[59]);
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
          const tmp2Result20 = tmp2(tmp4[59]);
          [tmp66, tmp67] = obj3.useState(null);
          let tmp68 = null == tmp66;
          if (!tmp68) {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            if (stateFromStores3) {
              class J {
                constructor() {
                  return closure_18.isThinking(projectId);
                }
              }
            }
            tmp68 = tmp69;
          }
          if (!tmp68) {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
          }
          if (cResult[34] !== projectId) {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            cResult[34] = projectId;
            cResult[35] = tmp71;
          } else {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
          }
          if (stateFromStores3) {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
          }
          const _Symbol7 = Symbol;
          if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
            const items14 = [ConjureConnectionStore];
            cResult[36] = items14;
            const tmp73 = items14;
          } else {
            class J {
              constructor() {
                return closure_18.isThinking(projectId);
              }
            }
          }
          if (cResult[37] !== projectId) {
            class Se {
              constructor() {
                return closure_14.getConnState(projectId);
              }
            }
            const items15 = [projectId];
            cResult[37] = projectId;
            cResult[38] = Se;
            cResult[39] = items15;
            let tmp75 = items15;
          } else {
            class Se {
              constructor() {
                return closure_14.getConnState(projectId);
              }
            }
            tmp75 = cResult[39];
          }
          const tmp65 = _slicedToArray(obj3.useState(null), 2);
          const stateFromStores6 = tmp2(tmp4[59]).useStateFromStores(tmp73, Se, tmp75);
          const _Symbol8 = Symbol;
          if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
            class Se {
              constructor() {
                return closure_14.getConnState(projectId);
              }
            }
            const items16 = [ConjureConnectionStore];
            cResult[40] = items16;
            const tmp79 = items16;
          } else {
            class Se {
              constructor() {
                return closure_14.getConnState(projectId);
              }
            }
          }
          if (cResult[41] !== projectId) {
            class Se {
              constructor() {
                return closure_14.getConnState(projectId);
              }
            }
            const items17 = [projectId];
            cResult[41] = projectId;
            cResult[42] = tmp82;
            cResult[43] = items17;
            let tmp81 = items17;
          } else {
            class Se {
              constructor() {
                return closure_14.getConnState(projectId);
              }
            }
            tmp81 = cResult[43];
          }
          const tmp2Result22 = tmp2(tmp4[59]);
          const stateFromStores7 = tmp2(tmp4[59]).useStateFromStores(tmp79, tmp82, tmp81);
          const _Symbol9 = Symbol;
          if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
            class Se {
              constructor() {
                return closure_14.getConnState(projectId);
              }
            }
            const items18 = [ConjureChatStore];
            cResult[44] = items18;
            const tmp86 = items18;
          } else {
            class Se {
              constructor() {
                return closure_14.getConnState(projectId);
              }
            }
          }
          if (cResult[45] !== projectId) {
            class Ie {
              constructor() {
                return closure_18.hasLoadedHistory(projectId);
              }
            }
            const items19 = [projectId];
            cResult[45] = projectId;
            cResult[46] = Ie;
            cResult[47] = items19;
            let tmp88 = items19;
          } else {
            class Ie {
              constructor() {
                return closure_18.hasLoadedHistory(projectId);
              }
            }
            tmp88 = cResult[47];
          }
          const tmp2Result23 = tmp2(tmp4[59]);
          const stateFromStores8 = tmp2(tmp4[59]).useStateFromStores(tmp86, Ie, tmp88);
          const _Symbol10 = Symbol;
          if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
            class Ie {
              constructor() {
                return closure_18.hasLoadedHistory(projectId);
              }
            }
            const items20 = [ConjureChatStore];
            cResult[48] = items20;
            const tmp92 = items20;
          } else {
            class Ie {
              constructor() {
                return closure_18.hasLoadedHistory(projectId);
              }
            }
          }
          if (cResult[49] !== projectId) {
            class Ie {
              constructor() {
                return closure_18.hasLoadedHistory(projectId);
              }
            }
            const items21 = [projectId];
            cResult[49] = projectId;
            cResult[50] = tmp95;
            cResult[51] = items21;
            let tmp94 = items21;
          } else {
            class Ie {
              constructor() {
                return closure_18.hasLoadedHistory(projectId);
              }
            }
            tmp94 = cResult[51];
          }
          const tmp2Result24 = tmp2(tmp4[59]);
          const stateFromStores9 = tmp2(tmp4[59]).useStateFromStores(tmp92, tmp95, tmp94);
          const _Symbol11 = Symbol;
          if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
            class Ie {
              constructor() {
                return closure_18.hasLoadedHistory(projectId);
              }
            }
            const items22 = [ConjureChatStore];
            cResult[52] = items22;
            const tmp99 = items22;
          } else {
            class Ie {
              constructor() {
                return closure_18.hasLoadedHistory(projectId);
              }
            }
          }
          if (cResult[53] !== projectId) {
            class De {
              constructor() {
                return closure_18.isHistoryUnavailable(projectId);
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
                return closure_18.isHistoryUnavailable(projectId);
              }
            }
            tmp101 = cResult[55];
          }
          const tmp2Result25 = tmp2(tmp4[59]);
          const stateFromStores10 = tmp2(tmp4[59]).useStateFromStores(tmp99, De, tmp101);
          if (cResult[56] === stateFromStores6) {
            class De {
              constructor() {
                return closure_18.isHistoryUnavailable(projectId);
              }
            }
          }
          const tmp2Result26 = tmp2(tmp4[59]);
          let obj2 = {
            historyLoaded: stateFromStores8,
            historyUnavailable: stateFromStores10,
            connState: stateFromStores6,
          };
          const chatEmptyStateResult = tmp2(tmp4[63]).chatEmptyState(obj2);
          cResult[56] = stateFromStores6;
          cResult[57] = stateFromStores8;
          cResult[58] = stateFromStores10;
          cResult[59] = chatEmptyStateResult;
          const tmp2Result27 = tmp2(tmp4[63]);
        }
        const tmp2Result17 = tmp2(tmp4[59]);
        const tmp2Result28 = tmp2(tmp4[62]);
        cResult[15] = stateFromStores1;
        cResult[16] = stateFromStores2;
        cResult[17] = tmp2(tmp4[62]).withLivePublishCard(stateFromStores1, stateFromStores2);
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
        const withLivePublishCardResult = tmp2(tmp4[62]).withLivePublishCard(stateFromStores1, stateFromStores2);
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
      const tmp2Result = projectId(stateFromStores[59]);
    }
  : (projectId) => {
      projectId = projectId.projectId;
      let num = projectId.transcriptTopInset;
      if (num === undefined) {
        num = 0;
      }
      const onRestoreVersion = projectId.onRestoreVersion;
      let stateFromStores;
      let stateFromStores2;
      let stateFromStores9;
      let stateFromStores10;
      let render_id;
      let render_id1;
      let stateFromStores12;
      let memo1;
      c15 = undefined;
      c16 = undefined;
      let onToggleChecklist;
      closure_18 = undefined;
      c19 = undefined;
      c20 = undefined;
      let onTogglePlan;
      autoscrollToBottomThreshold = undefined;
      closure_23 = undefined;
      fadingEdgeLength = undefined;
      let conjureReminder;
      closure_26 = undefined;
      closure_27 = undefined;
      c28 = undefined;
      c29 = undefined;
      let canSend;
      let memo2;
      let joined;
      let memo4;
      let memo5;
      c35 = undefined;
      c36 = undefined;
      let bound;
      let ref;
      let callback2;
      let callback3;
      c47 = undefined;
      let callback5;
      closure_51 = undefined;
      let onJumpToReplied;
      let tmp = c29();
      items = [stateFromStores10];
      stateFromStores = projectId(stateFromStores[59]).useStateFromStores(
        items,
        () => "active" === stateFromStores10.getState(),
        [],
      );
      let obj2 = stateFromStores2;
      const items1 = [stateFromStores, projectId];
      const effect = stateFromStores2.useEffect(() => {
        if (stateFromStores) {
          v65535(projectId);
        }
      }, items1);
      let obj = projectId(stateFromStores[59]);
      const ackConjureProjectWhileViewing = projectId(stateFromStores[61]).useAckConjureProjectWhileViewing(projectId);
      let obj3 = projectId(stateFromStores[61]);
      const items2 = [closure_18];
      const items3 = [projectId];
      const stateFromStores1 = projectId(stateFromStores[59]).useStateFromStores(
        items2,
        () => ConjureChatStore.getMessages(projectId),
        items3,
      );
      const obj4 = projectId(stateFromStores[59]);
      const items4 = [c15];
      const items5 = [projectId];
      stateFromStores2 = projectId(stateFromStores[59]).useStateFromStores(
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
      const obj5 = projectId(stateFromStores[59]);
      const items7 = [closure_18];
      const items8 = [projectId];
      const stateFromStores3 = projectId(stateFromStores[59]).useStateFromStores(
        items7,
        () => ConjureChatStore.isThinking(projectId),
        items8,
      );
      const obj6 = projectId(stateFromStores[59]);
      const items9 = [closure_18];
      const items10 = [projectId];
      const stateFromStores4 = projectId(stateFromStores[59]).useStateFromStores(
        items9,
        () => ConjureChatStore.isCompacting(projectId),
        items10,
      );
      const obj7 = projectId(stateFromStores[59]);
      const items11 = [closure_18];
      const items12 = [projectId];
      const stateFromStores5 = projectId(stateFromStores[59]).useStateFromStores(
        items11,
        () => ConjureChatStore.getThinkingActivity(projectId),
        items12,
      );
      const obj8 = projectId(stateFromStores[59]);
      const items13 = [closure_18];
      const items14 = [projectId];
      const stateFromStores6 = projectId(stateFromStores[59]).useStateFromStores(
        items13,
        () => ConjureChatStore.getProjectUsage(projectId),
        items14,
      );
      const obj9 = projectId(stateFromStores[59]);
      [tmp17, tmp18] = stateFromStores1(stateFromStores2.useState(null), 2);
      c7 = tmp18;
      let tmp19 = null == tmp17;
      if (!tmp19) {
        let tmp20 = stateFromStores3;
        if (stateFromStores3) {
          tmp20 = tmp17 === projectId;
        }
        tmp19 = tmp20;
      }
      if (!tmp19) {
        tmp18(null);
      }
      const items15 = [projectId];
      let tmp23 = stateFromStores3;
      const callback = obj2.useCallback(
        () =>
          _undefined((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          }),
        items15,
      );
      if (stateFromStores3) {
        tmp23 = tmp17 === projectId;
      }
      let tmp16 = stateFromStores1(stateFromStores2.useState(null), 2);
      const items16 = [memo1];
      const items17 = [projectId];
      const stateFromStores7 = projectId(stateFromStores[59]).useStateFromStores(
        items16,
        () => ConjureConnectionStore.getConnState(projectId),
        items17,
      );
      const tmp24 = memo1;
      const tmp2Result = projectId(stateFromStores[59]);
      const items18 = [memo1];
      const items19 = [projectId];
      const stateFromStores8 = projectId(stateFromStores[59]).useStateFromStores(
        items18,
        () => ConjureConnectionStore.isChatStopped(projectId),
        items19,
      );
      const tmp2Result17 = projectId(stateFromStores[59]);
      const items20 = [closure_18];
      const items21 = [projectId];
      stateFromStores9 = projectId(stateFromStores[59]).useStateFromStores(
        items20,
        () => ConjureChatStore.hasLoadedHistory(projectId),
        items21,
      );
      const tmp2Result18 = projectId(stateFromStores[59]);
      const items22 = [closure_18];
      const items23 = [projectId];
      stateFromStores10 = projectId(stateFromStores[59]).useStateFromStores(
        items22,
        () => {
          let hasLoadedHistoryResult = ConjureChatStore.hasLoadedHistory(projectId);
          if (hasLoadedHistoryResult) {
            hasLoadedHistoryResult = null != value2(projectId);
          }
          return hasLoadedHistoryResult;
        },
        items23,
      );
      const tmp2Result19 = projectId(stateFromStores[59]);
      const items24 = [closure_18];
      const items25 = [projectId];
      const stateFromStores11 = projectId(stateFromStores[59]).useStateFromStores(
        items24,
        () => ConjureChatStore.isHistoryUnavailable(projectId),
        items25,
      );
      const tmp2Result20 = projectId(stateFromStores[59]);
      const chatEmptyStateResult = projectId(stateFromStores[63]).chatEmptyState({
        historyLoaded: stateFromStores9,
        historyUnavailable: stateFromStores11,
        connState: stateFromStores7,
      });
      render_id = null;
      if (memo.length > 0) {
        render_id = memo[memo.length - 1].render_id;
      }
      const findLastResult = memo.findLast((role) => {
        let tmp = "assistant" === role.role;
        if (tmp) {
          tmp = onToggleChecklist(role);
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
      const tmp2Result21 = projectId(stateFromStores[63]);
      const items27 = [tmp24];
      const items28 = [projectId];
      stateFromStores12 = projectId(stateFromStores[59]).useStateFromStores(
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
      const tmp2Result22 = projectId(stateFromStores[59]);
      [c15, c16] = stateFromStores1(
        obj2.useState(() => new Map()),
        2,
      );
      onToggleChecklist = obj2.useCallback((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        _undefined2((get) => projectId(stateFromStores[54]).toggleChecklist(get, closure_0, closure_1));
      }, []);
      const items30 = [memo];
      closure_18 = obj2.useMemo(() => conjurePendingPlan.planVersions(memo), items30);
      const tmp15Result = stateFromStores1(
        obj2.useState(() => new Map()),
        2,
      );
      [c19, c20] = stateFromStores1(
        obj2.useState(() => new Map()),
        2,
      );
      onTogglePlan = obj2.useCallback((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        _undefined3((get) => projectId(stateFromStores[65]).togglePlanCard(get, closure_0, closure_1));
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
      closure_23 = obj2.useCallback(() => {
        const intl = util.intl;
        conjureAttachmentDrafts.sendConjureCardReply(projectId, intl.string(_modDef3723.EMgIuY));
      }, items32);
      const items33 = [projectId];
      fadingEdgeLength = obj2.useCallback((implementation_prompt) => {
        conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
      }, items33);
      const tmp15Result7 = stateFromStores1(
        obj2.useState(() => new Map()),
        2,
      );
      [tmp39, tmp40] = stateFromStores1(onRestoreVersion(stateFromStores[68])(projectId), 2);
      const tmp15Result8 = stateFromStores1(onRestoreVersion(stateFromStores[68])(projectId), 2);
      conjureReminder = projectId(stateFromStores[69]).useConjureReminder(projectId, memo, tmp39);
      const items34 = [projectId];
      closure_26 = obj2.useCallback(() => {
        const intl = util.intl;
        __initData2(projectId, intl.string(_modDef3723["t5CN3+"]));
      }, items34);
      const items35 = [projectId];
      closure_27 = obj2.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
        conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt, {
          clarificationAnswers,
          attachments,
        });
      }, items35);
      const tmp2Result23 = projectId(stateFromStores[69]);
      [c28, c29] = stateFromStores1(obj2.useState(null), 2);
      let tmp44 = tmp43;
      if ("open" !== stateFromStores7) {
        tmp44 = "connecting" === stateFromStores7;
      }
      if (tmp44) {
        tmp44 = !stateFromStores8;
      }
      canSend = tmp44;
      const items36 = [memo];
      memo2 = obj2.useMemo(() => conjurePendingPlan.pendingPlanRenderId(memo), items36);
      const tmp15Result9 = stateFromStores1(obj2.useState(null), 2);
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
              if (!constants(tmp3)) {
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
      [obj19, c35] = stateFromStores1(obj2.useState(null), 2);
      const tmp15Result10 = stateFromStores1(obj2.useState(null), 2);
      [tmp55, c36] = stateFromStores1(obj2.useState(64), 2);
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
      const tmp15Result11 = stateFromStores1(obj2.useState(64), 2);
      bound = tmp55;
      if (!tmp2Result24.isIOS()) {
        let _Math = Math;
        bound = Math.min(tmp55, fadingEdgeLength);
      }
      obj2.useRef(null);
      obj2.useRef(null);
      obj2.useRef(false);
      obj2.useRef(true);
      obj2.useRef(0);
      obj2.useRef(0);
      ref = obj2.useRef(false);
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
        closure_42.current = timestamp + c23;
        closure_43.current = timestamp + 2000;
      }, []);
      const items41 = [projectId, callback3];
      const effect1 = obj2.useEffect(() => {
        closure_41.current = true;
        callback3();
      }, items41);
      const items42 = [stateFromStores9, callback3];
      const effect2 = obj2.useEffect(() => {
        if (stateFromStores9) {
          callback3();
        }
      }, items42);
      const items43 = [stateFromStores10, memo.length, callback2, callback3];
      const effect3 = obj2.useEffect(() => {
        if (stateFromStores10) {
          ref.current = true;
          callback3();
        } else if (ref.current) {
          ref.current = false;
          callback3();
          callback2();
        }
      }, items43);
      const callback4 = obj2.useCallback(() => {
        closure_41.current = false;
      }, []);
      tmp2Result24 = projectId(stateFromStores[33]);
      [tmp67, c47] = stateFromStores1(obj2.useState(false), 2);
      obj2.useRef(null);
      obj2.useRef(0);
      callback5 = obj2.useCallback(() => {
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
      const items44 = [callback5];
      const items45 = [callback2, callback5];
      const callback6 = obj2.useCallback((nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        closure_39.current = {
          offsetY: nativeEvent.contentOffset.y,
          viewportHeight: nativeEvent.layoutMeasurement.height,
          contentHeight: nativeEvent.contentSize.height,
        };
        callback5();
      }, items44);
      const callback7 = obj2.useCallback((arg0, contentHeight) => {
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
          callback5();
        }
      }, items45);
      const items46 = [callback5];
      const memo7 = obj2.useMemo(
        () => ({ itemVisiblePercentThreshold: projectId(stateFromStores[70]).MIN_VISIBLE_PERCENT }),
        [],
      );
      const callback8 = obj2.useCallback((arg0) => {
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
        callback5();
      }, items46);
      if (stateFromStores4) {
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
        checklistLiveResult = tmp2(tmp3[54]).checklistLive(tmp74);
        const tmp2Result25 = tmp2(tmp3[54]);
      }
      if (null != tmp74) {
        const tmp2Result26 = tmp2(tmp3[71]);
        const conjureTurnStartedAtResult = tmp2(tmp3[71]).conjureTurnStartedAt(tmp74);
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
      const items49 = [bound, memo4, callback5];
      const effect4 = obj2.useEffect(() => {
        closure_48.current = memo4;
        closure_49.current = bound;
        closure_0 = requestAnimationFrame(callback5);
        return () => cancelAnimationFrame(closure_0);
      }, items49);
      const items50 = [memo];
      closure_51 = obj2.useMemo(() => {
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
          closure_41.current = false;
          const current = ref.current;
          if (current != null) {
            const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
            current.scrollToIndex(obj);
          }
        }
      }, items51);
      const items52 = [bound, memo4];
      const items53 = [projectId];
      const callback9 = obj2.useCallback(() => {
        if (null != memo4) {
          closure_41.current = false;
          const current = ref.current;
          if (current != null) {
            const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
            current.scrollToIndex(obj);
          }
        }
      }, items52);
      const items54 = [projectId];
      const callback10 = obj2.useCallback((arg0, arg1) => {
        closure_40.current = true;
        __initData2(projectId, arg0, arg1);
      }, items53);
      let connectionLabelResult = null;
      const callback11 = obj2.useCallback(() => {
        __initData(projectId);
      }, items54);
      if ("open" !== stateFromStores7) {
        connectionLabelResult = tmp2(tmp3[73]).connectionLabel(stateFromStores7);
        const tmp2Result27 = tmp2(tmp3[73]);
      }
      const tmp15Result12 = stateFromStores1(obj2.useState(false), 2);
      const obj10 = { style: tmp.container, children: null };
      const conjureControlActive = projectId(stateFromStores[74]).useConjureControlActive(projectId);
      const items55 = [
        c19(onRestoreVersion(stateFromStores[75]), {
          thinking: stateFromStores3,
          bleedBottom: onRestoreVersion(stateFromStores[60])().bottom,
        }),
        ,
      ];
      const obj11 = { style: tmp.transcriptArea, children: null };
      const obj12 = { clearance: tmp55, children: null };
      const obj13 = {
        ref,
        fadingEdgeLength,
        removeClippedSubviews: null,
        viewabilityConfig: null,
        onViewableItemsChanged: null,
        onScroll: null,
        onScrollBeginDrag: null,
        onContentSizeChange: null,
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
      const tmp2Result28 = projectId(stateFromStores[74]);
      const tmp93 = ref;
      const tmp2Result29 = projectId(stateFromStores[33]);
      obj13.removeClippedSubviews = projectId(stateFromStores[33]).isIOS() && undefined;
      obj13.viewabilityConfig = memo7;
      obj13.onViewableItemsChanged = callback8;
      obj13.onScroll = callback6;
      obj13.onScrollBeginDrag = callback4;
      obj13.onContentSizeChange = callback7;
      const tmp94 = projectId(stateFromStores[33]).isIOS() && undefined;
      let tmp95;
      if (tmp2Result30.isIOS()) {
        const obj14 = { top: num };
        tmp95 = obj14;
      }
      obj13.contentInset = tmp95;
      tmp2Result30 = projectId(stateFromStores[33]);
      let tmp92Result = null;
      if (!tmp2Result31.isIOS()) {
        tmp92Result = null;
        if (num > 0) {
          const obj15 = { style: null };
          const obj16 = { height: num };
          obj15.style = obj16;
          tmp92Result = tmp92(tmp91, obj15);
        }
      }
      obj13.ListHeaderComponent = tmp92Result;
      const items56 = [tmp.transcript];
      tmp2Result31 = projectId(stateFromStores[33]);
      const isIOSResult = projectId(stateFromStores[33]).isIOS();
      let tmp98 = !isIOSResult;
      if (!isIOSResult) {
        const obj17 = { marginBottom: tmp55 - bound };
        tmp98 = obj17;
      }
      items56[1] = tmp98;
      obj13.style = items56;
      const items57 = [tmp.transcriptContent];
      const tmp2Result32 = projectId(stateFromStores[33]);
      items57[1] = { paddingBottom: bound + onRestoreVersion(stateFromStores[9]).space.PX_8 };
      obj13.contentContainerStyle = items57;
      obj13.data = memo;
      obj13.extraData = memo3;
      obj13.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
      obj13.keyExtractor = function keyExtractor(render_id) {
        return render_id.render_id;
      };
      let tmp99 = "loading" === chatEmptyStateResult;
      if (tmp99) {
        obj13.ListEmptyComponent = null;
        obj13.renderItem = function renderItem(arg0) {
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
          let flag = closure_22[index];
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
          obj.checklistExpanded = ConjureTodoState.checklistExpanded(c15, item.render_id, set.has(item.render_id));
          obj.onToggleChecklist = onToggleChecklist;
          value = closure_18.get(item.render_id);
          let version;
          if (value != null) {
            version = value.version;
          }
          obj.planVersion = version;
          value3 = closure_18.get(item.render_id);
          let superseded;
          if (value3 != null) {
            superseded = value3.superseded;
          }
          obj.planSuperseded = true === superseded;
          const value4 = closure_18.get(item.render_id);
          let superseded1;
          if (value4 != null) {
            superseded1 = value4.superseded;
          }
          obj.planExpanded = conjurePendingPlan.planCardExpanded(c19, item.render_id, true === superseded1);
          obj.onTogglePlan = onTogglePlan;
          obj.replied = closure_51.get(item.render_id);
          obj.onJumpToReplied = onJumpToReplied;
          let tmp14;
          if (closure_30) {
            if (item.render_id === memo2) {
              tmp14 = closure_23;
            }
          }
          obj.onApprovePlan = tmp14;
          obj.onPickIdea = onPickIdea;
          let tmp16;
          if (closure_30) {
            tmp16 = closure_26;
          }
          obj.onAskForIdeas = tmp16;
          let tmp17;
          if (closure_30) {
            tmp17 = closure_27;
          }
          obj.onAnswerClarification = tmp17;
          let tmp18 = null != item.clarification;
          if (tmp18) {
            tmp18 = item.clarification.id === c28;
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
        obj12.children = tmp92(tmp2(tmp3[76]).FlashList, obj13);
        const items58 = [tmp92(tmp93, obj12), ,];
        let tmp92Result4 = null;
        if (tmp23) {
          const obj21 = { projectId };
          tmp92Result4 = tmp92(tmp5(tmp3[77]), obj21);
        }
        items58[1] = tmp92Result4;
        let tmp92Result5 = null;
        if (null != tmp83) {
          const obj22 = {
            line: tmp83,
            onJumpToActivity: callback9,
            bottom: tmp5(tmp3[9]).space.PX_12 + tmp55,
            todos: memo8,
            todosLive: checklistLiveResult,
            agents: memo9,
          };
          tmp92Result5 = tmp92(tmp5(tmp3[78]), obj22);
          const tmp5Result = tmp5(tmp3[78]);
        }
        items58[2] = tmp92Result5;
        obj11.children = items58;
        items55[1] = tmp90(tmp91, obj11);
        const obj23 = { style: tmp.bottomStack, onLayout: callback1, children: null };
        const obj24 = {
          projectId,
          thinking: stateFromStores3,
          turnStartedAt: conjureTurnStartedAtResult,
          compacting: stateFromStores4,
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
        obj24.recalling = tmp99;
        obj24.activity = stateFromStores5;
        obj24.projectUsage = stateFromStores6;
        obj24.connLabel = connectionLabelResult;
        obj24.controlling = conjureControlActive;
        obj24.connFailed = "failed" === stateFromStores7;
        obj24.thinkingOpen = tmp23;
        obj24.onToggleThinking = callback;
        const items59 = [tmp92(tmp5(tmp3[79]), obj24)];
        const obj25 = {
          projectId,
          canSend: tmp44,
          running: stateFromStores3,
          stopped: stateFromStores8,
          onSend: callback10,
          onInterrupt: null,
          onDraftHasTextChange: null,
        };
        let tmp106;
        const tmp5Result3 = tmp5(tmp3[79]);
        if (stateFromStores3) {
          tmp106 = callback11;
        }
        obj25.onInterrupt = tmp106;
        obj25.onDraftHasTextChange = tmp40;
        items59[1] = tmp92(tmp5(tmp3[80]), obj25);
        obj23.children = items59;
        items55[2] = tmp90(tmp91, obj23);
        obj10.children = items55;
        return tmp90(tmp91, obj10);
      } else {
        const obj26 = { style: tmp.placeholder, children: null };
        const intl3 = tmp2(tmp3[17]).intl;
        if ("unavailable" === chatEmptyStateResult) {
          let AyiQEp = tmp5(tmp3[18]).Td4Sf4;
        } else {
          AyiQEp = tmp5(tmp3[18]).AyiQEp;
        }
        const obj27 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(AyiQEp) };
        obj26.children = tmp92(tmp2(tmp3[19]).Text, obj27);
        tmp92(tmp91, obj26);
      }
    };
