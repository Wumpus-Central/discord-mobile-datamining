// === Module 11517: useNativeForumPostContent ===

// Module 11517 (useNativeForumPostContent)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4805 */;
import isSystemMessageDefault from "isSystemMessage" /* 6069 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const MessageFlags = ME.MessageFlags;
let closure_4 = createCacheKey.createStyles({ italics: { fontStyle: "italic" } });
const result = set.fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostContent.tsx");

export default function useNativeForumPostContent(arg0) {
  ({ message, messageContent, senderModifier } = arg0);
  ({ messageLoaded, isMessageDeleted } = arg0);
  const tmp = callback();
  if (isMessageDeleted) {
    let obj = { content: null, style: null, variant: "text-sm/normal" };
    const intl9 = getSystemLocale.intl;
    obj[0] = intl9.string(getSystemLocale.t.U8Rr2l);
    obj[1] = tmp.italics;
    return obj;
  } else {
    if (null != message) {
      if (isSystemMessageDefault(message)) {
        obj = { content: null, style: null, variant: "text-sm/normal" };
        obj[0] = messageContent;
        obj[1] = tmp.italics;
        return obj;
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
              obj = { content: null, style: null, variant: "text-sm/medium" };
              obj[0] = tmp20;
              return obj;
            } else if (null == message) {
              const intl6 = getSystemLocale.intl;
              let stringResult = intl6.string(getSystemLocale.t.mE3KJN);
            } else {
              if (obj5.getMessageStickers(message).length > 0) {
                const intl5 = tmp28(1236).intl;
                stringResult = intl5.string(tmp28(1236).t["7K5Lma"]);
              } else {
                if (null != message.interaction) {
                  if ("" === message.content) {
                    const intl4 = tmp28(1236).intl;
                    stringResult = intl4.string(tmp28(1236).t["2v7kfl"]);
                  }
                }
                if (message.hasFlag(MessageFlags.IS_VOICE_MESSAGE)) {
                  const intl3 = tmp28(1236).intl;
                  stringResult = intl3.string(tmp28(1236).t["6bhHrc"]);
                } else if (message.hasFlag(tmp14.IS_COMPONENTS_V2)) {
                  const intl2 = tmp28(1236).intl;
                  stringResult = intl2.string(tmp28(1236).t.Xxm5i3);
                } else {
                  stringResult = null;
                  if (tmp15) {
                    const intl = tmp28(1236).intl;
                    stringResult = intl.string(tmp28(1236).t.JAKsM8);
                  }
                  tmp15 = message.embeds.length > 0 || message.attachments.length > 0;
                }
                tmp14 = MessageFlags;
              }
              obj5 = getStickerExtensionFromFormatType;
            }
          }
        }
      }
    }
    if (!(null != message && message.blocked)) {
      if (!tmp7) {
        const intl7 = getSystemLocale.intl;
        let stringResult1 = intl7.string(getSystemLocale.t.yWK7ZM);
      }
      obj1 = { content: null, style: null, variant: "text-sm/normal" };
      obj1[0] = stringResult1;
      obj1[1] = tmp.italics;
      return obj1;
    }
    const intl8 = getSystemLocale.intl;
    stringResult1 = intl8.string(getSystemLocale.t.Lkp2fB);
    tmp6 = null != message && message.ignored;
  }
};