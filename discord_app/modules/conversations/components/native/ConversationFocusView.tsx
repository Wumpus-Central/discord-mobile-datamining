// === Module 13111: ConversationFocusView ===

// Module 13111 (ConversationFocusView)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7564 */;
import ConversationNavigatorUtils from "ConversationNavigatorUtils" /* 7579 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ ActivityIndicator: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((backgroundColor) => {
  const obj = { container: { flex: 1, backgroundColor }, pendingContent: { flex: 1, paddingVertical: nativeDefault.space.PX_24, alignItems: "center", gap: nativeDefault.space.PX_32, backgroundColor } };
  ({ flex: 1, paddingVertical: nativeDefault.space.PX_24, alignItems: "center", gap: nativeDefault.space.PX_32, backgroundColor });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let fullyHydrated;
  let jumpMessageId;
  let messages;
  let startMessageId;
  const tmp = channelId;
  let obj = channelId(startMessageId[6]);
  const cResult = obj.c(31);
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  ({ jumpMessageId, messages, fullyHydrated, startMessageId } = channelId);
  const isFullFetchPending = channelId.isFullFetchPending;
  const obj2 = channelId(startMessageId[7]);
  const token = obj2.useToken(conversationId(startMessageId[4]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const tmp5 = closure_9(token);
  if (cResult[0] === channelId) {
    let tmp6;
    if (cResult[1] === conversationId) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === channelId) {
      if (cResult[4] === conversationId) {
        let tmp9;
        class M {
          constructor() {
            if (null != startMessageId) {
              const obj = ConversationNavigatorUtils;
              const result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
            }
          }
        }
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const string = tmp(startMessageId[10]).intl.string;
          class M {
            constructor() {
              if (null != startMessageId) {
                const obj = ConversationNavigatorUtils;
                const result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
              }
            }
          }
          cResult[7] = tmp10;
          tmp9 = tmp10;
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
              if (isFullFetchPending) {
                let tmp16;
                const _Symbol = Symbol;
                class M {
                  constructor() {
                    if (null != startMessageId) {
                      const obj = ConversationNavigatorUtils;
                      const result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
                    }
                  }
                }
                if (cResult[13] !== tmp5.pendingContent) {
                  class M {
                    constructor() {
                      if (null != startMessageId) {
                        const obj = ConversationNavigatorUtils;
                        const result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
                      }
                    }
                  }
                  tmp19[0] = tmp5.pendingContent;
                  tmp19[1] = tmp15;
                  const tmp20 = closure_7(closure_6, tmp19);
                  cResult[13] = tmp5.pendingContent;
                  cResult[14] = tmp20;
                  tmp16 = tmp20;
                } else {
                  tmp16 = cResult[14];
                }
                return tmp16;
              }
            }
            class M {
              constructor() {
                if (null != startMessageId) {
                  const obj = ConversationNavigatorUtils;
                  const result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
                }
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
          const obj = ConversationNavigatorUtils;
          const result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
        }
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
}) : ((channelId) => {
  let fullyHydrated;
  let intl;
  let intl2;
  let isFullFetchPending;
  let items3;
  let messages;
  let obj4;
  let startMessageId;
  let tmp12Result;
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  const jumpMessageId = channelId.jumpMessageId;
  ({ fullyHydrated, startMessageId } = channelId);
  let tmp = channelId;
  ({ messages, isFullFetchPending } = channelId);
  let obj = channelId(jumpMessageId[7]);
  const token = obj.useToken(conversationId(jumpMessageId[4]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const tmp4 = closure_9(token);
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
      const obj = ConversationNavigatorUtils;
      const result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
    }
  }, items1);
  const memo = startMessageId.useMemo(() => {
    let intl;
    let tmp;
    const obj = { jumpToChatText: intl.string(intl3.t["bz/ik0"]), jumpTargetId: tmp, onBeforeJumpToMessage, conversationId };
    intl = intl3.intl;
    tmp = jumpMessageId;
    if (jumpMessageId == null) {
      tmp = startMessageId;
    }
    return obj;
  }, items2);
  if (!fullyHydrated) {
    let tmp11;
    if (isFullFetchPending) {
      const obj2 = { style: tmp4.pendingContent, children: closure_7(onBeforeJumpToMessage, {}) };
      tmp11 = closure_7(closure_6, obj2);
    }
    return tmp11;
  }
  if (fullyHydrated) {
    const obj3 = { horizontal: true, scrollEnabled: false, bounces: false, contentContainerStyle: tmp4.container, children: closure_7(tmp(jumpMessageId[13]).ChatPreview, obj4) };
    obj4 = { channelId, messages, jumpToChatProps: memo, backgroundColor: token, initialScrollToTop: null == jumpMessageId, allowReactions: true };
    tmp12Result = closure_7(closure_5, obj3);
  } else {
    const obj5 = { style: tmp4.pendingContent, children: items3 };
    const obj6 = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp(jumpMessageId[10]).t.eylmYW) };
    const Text = tmp(tmp2[11]).Text;
    intl = tmp(tmp2[10]).intl;
    items3 = [closure_7(Text, obj6), ];
    let tmp14Result = null != startMessageId;
    if (tmp14Result) {
      const obj7 = { variant: "tertiary", text: intl2.string(tmp(jumpMessageId[10]).t.aBNTxl), onPress: callback1 };
      const Button = tmp(tmp2[12]).Button;
      intl2 = tmp(tmp2[10]).intl;
      tmp14Result = closure_7(Button, obj7);
    }
    items3[1] = tmp14Result;
    tmp12Result = closure_8(closure_6, obj5);
  }
  tmp11 = tmp12Result;
});
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusView.tsx");

export default tmp4;