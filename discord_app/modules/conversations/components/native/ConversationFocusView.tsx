// discord_app/modules/conversations/components/native/ConversationFocusView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ConversationsAnalytics2 from "../../ConversationsAnalytics.tsx";
import ConversationNavigatorUtils from "ConversationNavigatorUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles((backgroundColor) => {
  const obj = {
    container: { flex: 1, backgroundColor },
    pendingContent: {
      flex: 1,
      paddingVertical: nativeDefault.space.PX_24,
      alignItems: "center",
      gap: nativeDefault.space.PX_32,
      backgroundColor,
    },
  };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(startMessageId[6]).c(31);
      channelId = channelId.channelId;
      const conversationId = channelId.conversationId;
      ({ jumpMessageId, messages, fullyHydrated, startMessageId } = channelId);
      let obj = channelId(startMessageId[6]);
      const tmp = channelId;
      const token = channelId(startMessageId[7]).useToken(
        conversationId(startMessageId[4]).colors.MOBILE_ACTIONSHEET_BACKGROUND,
      );
      const tmp5 = closure_9(token);
      if (cResult[0] === channelId) {
        if (cResult[1] === conversationId) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === channelId) {
          if (cResult[4] === conversationId) {
            class M {
              constructor() {
                if (null != startMessageId) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[9]);
                  tmp4 = channelId;
                  tmp5 = conversationId;
                  result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
                }
                return;
              }
            }
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const string = tmp(startMessageId[10]).intl.string;
              class M {
                constructor() {
                  if (null != startMessageId) {
                    tmp2 = closure_0;
                    tmp3 = closure_2;
                    obj = closure_0(closure_2[9]);
                    tmp4 = channelId;
                    tmp5 = conversationId;
                    result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
                  }
                  return;
                }
              }
              cResult[7] = tmp10;
              let tmp9 = tmp10;
            } else {
              tmp9 = cResult[7];
            }
            let tmp12 = jumpMessageId;
            if (jumpMessageId == null) {
              tmp12 = startMessageId;
            }
            if (cResult[8] === conversationId) {
              if (cResult[9] === tmp6) {
                if (!fullyHydrated) {
                  if (channelId.isFullFetchPending) {
                    const _Symbol = Symbol;
                    class M {
                      constructor() {
                        if (null != startMessageId) {
                          tmp2 = closure_0;
                          tmp3 = closure_2;
                          obj = closure_0(closure_2[9]);
                          tmp4 = channelId;
                          tmp5 = conversationId;
                          result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
                        }
                        return;
                      }
                    }
                    if (cResult[13] !== tmp5.pendingContent) {
                      class M {
                        constructor() {
                          if (null != startMessageId) {
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            obj = closure_0(closure_2[9]);
                            tmp4 = channelId;
                            tmp5 = conversationId;
                            result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
                          }
                          return;
                        }
                      }
                      tmp19[0] = tmp5.pendingContent;
                      tmp19[1] = tmp15;
                      const tmp20 = closure_7(closure_6, tmp19);
                      cResult[13] = tmp5.pendingContent;
                      cResult[14] = tmp20;
                      let tmp16 = tmp20;
                    } else {
                      tmp16 = cResult[14];
                    }
                    return tmp16;
                  }
                }
                class M {
                  constructor() {
                    if (null != startMessageId) {
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      obj = closure_0(closure_2[9]);
                      tmp4 = channelId;
                      tmp5 = conversationId;
                      result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
                    }
                    return;
                  }
                }
              }
            }
            const obj3 = { jumpToChatText: tmp9, jumpTargetId: tmp12, onBeforeJumpToMessage: tmp6, conversationId };
            cResult[8] = conversationId;
            cResult[9] = tmp6;
            cResult[10] = tmp12;
            cResult[11] = obj3;
          }
        }
        class M {
          constructor() {
            if (null != startMessageId) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[9]);
              tmp4 = channelId;
              tmp5 = conversationId;
              result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
            }
            return;
          }
        }
        cResult[3] = channelId;
        cResult[4] = conversationId;
        cResult[5] = startMessageId;
        cResult[6] = M;
      }
      const fn = function t(arg0) {
        if ("footer_cta" === arg0) {
          const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
          const obj = { channelId, conversationId, dismissReason: "jump_to_conversation" };
          const result = ConversationsAnalytics.trackFocusModeDismissed(obj);
        }
      };
      cResult[0] = channelId;
      cResult[1] = conversationId;
      cResult[2] = fn;
      tmp6 = fn;
      const obj2 = channelId(startMessageId[7]);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const conversationId = channelId.conversationId;
      const jumpMessageId = channelId.jumpMessageId;
      ({ fullyHydrated, startMessageId } = channelId);
      let ChatPreview = channelId;
      let tmp = jumpMessageId;
      ({ messages, isFullFetchPending } = channelId);
      const token = channelId(jumpMessageId[7]).useToken(
        conversationId(jumpMessageId[4]).colors.MOBILE_ACTIONSHEET_BACKGROUND,
      );
      let container = closure_9(token);
      const items = [channelId, conversationId];
      const onBeforeJumpToMessage = startMessageId.useCallback((arg0) => {
        if ("footer_cta" === arg0) {
          const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
          const obj = { channelId, conversationId, dismissReason: "jump_to_conversation" };
          const result = ConversationsAnalytics.trackFocusModeDismissed(obj);
        }
      }, items);
      const items1 = [channelId, conversationId, startMessageId];
      const items2 = [conversationId, jumpMessageId, startMessageId, onBeforeJumpToMessage];
      const callback1 = startMessageId.useCallback(() => {
        if (null != startMessageId) {
          const result = ConversationNavigatorUtils.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
        }
      }, items1);
      const memo = startMessageId.useMemo(() => {
        const obj = { jumpToChatText: null, jumpTargetId: null, onBeforeJumpToMessage: null, conversationId: null };
        const intl = util.intl;
        obj.jumpToChatText = intl.string(util.t["bz/ik0"]);
        let tmp = jumpMessageId;
        if (jumpMessageId == null) {
          tmp = startMessageId;
        }
        obj.jumpTargetId = tmp;
        obj.onBeforeJumpToMessage = onBeforeJumpToMessage;
        obj.conversationId = conversationId;
        return obj;
      }, items2);
      if (!fullyHydrated) {
        if (isFullFetchPending) {
          const obj2 = { style: container.pendingContent, children: closure_7(onBeforeJumpToMessage, {}) };
          return closure_7(closure_6, obj2);
        }
      }
      if (fullyHydrated) {
        const obj3 = {
          horizontal: true,
          scrollEnabled: false,
          bounces: false,
          contentContainerStyle: null,
          children: null,
        };
        container = container.container;
        obj3.contentContainerStyle = container;
        ChatPreview = ChatPreview(tmp[13]).ChatPreview;
        const obj4 = {
          channelId,
          messages,
          jumpToChatProps: memo,
          backgroundColor: token,
          initialScrollToTop: null == jumpMessageId,
          allowReactions: true,
        };
        tmp = closure_7(ChatPreview, obj4);
        obj3.children = tmp;
        closure_7(closure_5, obj3);
      } else {
        const obj5 = { style: container.pendingContent, children: null };
        const obj6 = { variant: "text-md/normal", color: "text-muted", children: null };
        let intl = ChatPreview(tmp[10]).intl;
        obj6.children = intl.string(ChatPreview(tmp[10]).t.eylmYW);
        const items3 = [closure_7(ChatPreview(tmp[11]).Text, obj6)];
        let tmp11Result = null != startMessageId;
        if (tmp11Result) {
          const obj7 = { variant: "tertiary", text: null, onPress: null };
          const intl2 = ChatPreview(tmp[10]).intl;
          obj7.text = intl2.string(ChatPreview(tmp[10]).t.aBNTxl);
          obj7.onPress = callback1;
          tmp11Result = closure_7(ChatPreview(tmp[12]).Button, obj7);
        }
        items3[1] = tmp11Result;
        obj5.children = items3;
        closure_8(closure_6, obj5);
      }
      let obj = channelId(jumpMessageId[7]);
    };
