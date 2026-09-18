// === Module 12266: useNativeForumPostContent ===

// Module 12266 (useNativeForumPostContent)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import StickersUtils from "StickersUtils" /* 5061 */;
import isSystemMessageDefault from "isSystemMessage" /* 7466 */;
import createStyles from "createStyles" /* 4722 */;
import size from "module_2" /* 2 */;

const MessageFlags = Constants.MessageFlags;
let closure_4 = createStyles.createStyles({ italics: { fontStyle: "italic" } });
const result = size.fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostContent.tsx");

export default function useNativeForumPostContent(arg0) {
  ({ message, messageContent, senderModifier } = arg0);
  ({ messageLoaded, isMessageDeleted } = arg0);
  const tmp = closure_4();
  if (isMessageDeleted) {
    const obj2 = { content: null, style: null, variant: "text-sm/normal" };
    const intl9 = util.intl;
    obj2.content = intl9.string(util.t.U8Rr2l);
    obj2.style = tmp.italics;
    return obj2;
  } else {
    if (null != message) {
      if (isSystemMessageDefault(message)) {
        const obj3 = { content: messageContent, style: tmp.italics, variant: "text-sm/normal" };
        return obj3;
      }
    }
    if (!(null != message && message.blocked)) {
      if (!tmp7) {
        if (!tmp6) {
          if ("ignored" !== senderModifier) {
            let content;
            if (message != null) {
              content = message.content;
            }
            let tmp9 = null == content;
            if (!tmp9) {
              let content1;
              if (message != null) {
                content1 = message.content;
              }
              tmp9 = "" === content1;
            }
            if (!tmp9) {
              tmp9 = null == messageContent;
            }
            if (!tmp9) {
              tmp9 = "" === messageContent;
            }
            if (!tmp9) {
              const _Array = Array;
              let isArray = Array.isArray(messageContent);
              if (isArray) {
                isArray = 0 === messageContent.length;
              }
              tmp9 = isArray;
            }
            if (!messageLoaded) {
              let tmp20 = messageContent;
              if (tmp9) {
                tmp20 = null;
              }
              const obj = { content: tmp20, style: null, variant: "text-sm/medium" };
              return obj;
            } else if (null == message) {
              const intl6 = util.intl;
              let stringResult = intl6.string(util.t.mE3KJN);
            } else {
              if (obj5.getMessageStickers(message).length > 0) {
                const intl5 = util.intl;
                stringResult = intl5.string(util.t["7K5Lma"]);
              } else {
                if (null != message.interaction) {
                  if ("" === message.content) {
                    const intl4 = util.intl;
                    stringResult = intl4.string(util.t["2v7kfl"]);
                  }
                }
                if (message.hasFlag(MessageFlags.IS_VOICE_MESSAGE)) {
                  const intl3 = util.intl;
                  stringResult = intl3.string(util.t["6bhHrc"]);
                } else if (message.hasFlag(MessageFlags.IS_COMPONENTS_V2)) {
                  const intl2 = util.intl;
                  stringResult = intl2.string(util.t.Xxm5i3);
                } else {
                  stringResult = null;
                  if (tmp15) {
                    const intl = util.intl;
                    stringResult = intl.string(util.t.JAKsM8);
                  }
                  tmp15 = message.embeds.length > 0 || message.attachments.length > 0;
                }
              }
              obj5 = StickersUtils;
            }
          }
        }
      }
    }
    if (!(null != message && message.blocked)) {
      if (!tmp7) {
        const intl7 = util.intl;
        let stringResult1 = intl7.string(util.t.yWK7ZM);
      }
      const obj4 = { content: stringResult1, style: tmp.italics, variant: "text-sm/normal" };
      return obj4;
    }
    const intl8 = util.intl;
    stringResult1 = intl8.string(util.t.Lkp2fB);
    tmp6 = null != message && message.ignored;
  }
};