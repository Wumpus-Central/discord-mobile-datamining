// discord_app/modules/conversations/components/native/ConversationFocusScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00019_react.js";
import ChannelConversationsStore from "../../ChannelConversationsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let channelId;
      let first;
      let fullyHydrated;
      let isFullFetchPending;
      let startMessageId;
      const obj = channelId(576);
      const cResult = obj.c(17);
      let obj2 = channelId(1493);
      const params = obj2.useRoute().params;
      channelId = params.channelId;
      const conversationId = params.conversationId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelConversationsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        let tmp6;
        let tmp7;
        let tmp9;
        if (cResult[2] === conversationId) {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const tmpResult = channelId(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ChannelConversationsStore];
          cResult[5] = items1;
          tmp9 = items1;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === channelId) {
          let tmp11;
          let tmp12;
          if (cResult[7] === conversationId) {
            tmp11 = cResult[8];
            tmp12 = cResult[9];
          }
          const tmpResult2 = channelId(504);
          const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp9, tmp11, tmp12);
          ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
          if (cResult[10] === channelId) {
            if (cResult[11] === conversationId) {
              if (cResult[12] === fullyHydrated) {
                if (cResult[13] === isFullFetchPending) {
                  if (cResult[14] === stateFromStores) {
                    let tmp14;
                    if (cResult[15] === startMessageId) {
                      tmp14 = cResult[16];
                    }
                    return tmp14;
                  }
                }
              }
            }
          }
          class I {
            constructor() {
              let startMessageId;
              const conversationMetadata = ChannelConversationsStore.getConversationMetadata(channelId, conversationId);
              let flag;
              if (conversationMetadata != null) {
                flag = conversationMetadata.fullyHydrated;
              }
              if (flag == null) {
                flag = false;
              }
              const obj2 = {
                fullyHydrated: flag,
                isFullFetchPending: ChannelConversationsStore.isConversationFetchPending(conversationId, true),
                startMessageId,
              };
              startMessageId = undefined;
              if (conversationMetadata != null) {
                startMessageId = conversationMetadata.conversation.startMessageId;
              }
              if (startMessageId == null) {
                startMessageId = null;
              }
              return obj2;
            }
          }
          const tmp16 = jsx(conversationId(13111), {
            channelId,
            conversationId,
            messages: stateFromStores,
            fullyHydrated,
            isFullFetchPending,
            startMessageId,
          });
          cResult[10] = channelId;
          cResult[11] = conversationId;
          cResult[12] = fullyHydrated;
          cResult[13] = isFullFetchPending;
          cResult[14] = stateFromStores;
          cResult[15] = startMessageId;
          cResult[16] = tmp16;
          tmp14 = tmp16;
        }
        class I {
          constructor() {
            let startMessageId;
            const conversationMetadata = ChannelConversationsStore.getConversationMetadata(channelId, conversationId);
            let flag;
            if (conversationMetadata != null) {
              flag = conversationMetadata.fullyHydrated;
            }
            if (flag == null) {
              flag = false;
            }
            const obj2 = {
              fullyHydrated: flag,
              isFullFetchPending: ChannelConversationsStore.isConversationFetchPending(conversationId, true),
              startMessageId,
            };
            startMessageId = undefined;
            if (conversationMetadata != null) {
              startMessageId = conversationMetadata.conversation.startMessageId;
            }
            if (startMessageId == null) {
              startMessageId = null;
            }
            return obj2;
          }
        }
        const items2 = [channelId, conversationId];
        cResult[6] = channelId;
        cResult[7] = conversationId;
        cResult[8] = I;
        cResult[9] = items2;
        tmp12 = items2;
        tmp11 = I;
      }
      const fn = function o() {
        return ChannelConversationsStore.getHydratedMessages(channelId, conversationId);
      };
      const items3 = [channelId, conversationId];
      cResult[1] = channelId;
      cResult[2] = conversationId;
      cResult[3] = fn;
      cResult[4] = items3;
      tmp7 = items3;
      tmp6 = fn;
    }
  : () => {
      let channelId;
      let fullyHydrated;
      let isFullFetchPending;
      let startMessageId;
      const obj = channelId(1493);
      const params = obj.useRoute().params;
      channelId = params.channelId;
      const conversationId = params.conversationId;
      let obj2 = channelId(504);
      const items = [ChannelConversationsStore];
      const items1 = [channelId, conversationId];
      const messages = obj2.useStateFromStores(
        items,
        () => ChannelConversationsStore.getHydratedMessages(channelId, conversationId),
        items1,
      );
      const items2 = [ChannelConversationsStore];
      const items3 = [channelId, conversationId];
      const obj3 = channelId(504);
      const stateFromStoresObject = obj3.useStateFromStoresObject(
        items2,
        () => {
          let startMessageId;
          const conversationMetadata = ChannelConversationsStore.getConversationMetadata(channelId, conversationId);
          let flag;
          if (conversationMetadata != null) {
            flag = conversationMetadata.fullyHydrated;
          }
          if (flag == null) {
            flag = false;
          }
          const obj2 = {
            fullyHydrated: flag,
            isFullFetchPending: ChannelConversationsStore.isConversationFetchPending(conversationId, true),
            startMessageId,
          };
          startMessageId = undefined;
          if (conversationMetadata != null) {
            startMessageId = conversationMetadata.conversation.startMessageId;
          }
          if (startMessageId == null) {
            startMessageId = null;
          }
          return obj2;
        },
        items3,
      );
      ({ fullyHydrated, isFullFetchPending, startMessageId } = stateFromStoresObject);
      return jsx(conversationId(13111), {
        channelId,
        conversationId,
        messages,
        fullyHydrated,
        isFullFetchPending,
        startMessageId,
      });
    };
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default tmp3;
