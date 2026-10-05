// === Module 11638: useNativeForumPostContent ===

// Module 11638 (useNativeForumPostContent)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl10 from "intl" /* 1126 */;
import StickersUtils from "StickersUtils" /* 5428 */;
import isSystemMessageDefault from "isSystemMessage" /* 6773 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MessageFlags = Constants.MessageFlags;
let closure_4 = createStyles.createStyles({ italics: { fontStyle: "italic" } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isMessageDeleted;
  let message;
  let messageContent;
  let messageLoaded;
  let senderModifier;
  const obj = react;
  const cResult = obj.c(20);
  ({ message, messageContent, senderModifier } = arg0);
  ({ messageLoaded, isMessageDeleted } = arg0);
  const tmp4 = closure_4();
  if (isMessageDeleted) {
    let first;
    let tmp46;
    const _Symbol7 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl9 = intl10.intl;
      const stringResult = intl9.string(intl10.t.U8Rr2l);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp4.italics) {
      const obj2 = { content: first, style: tmp4.italics, variant: "text-sm/normal" };
      cResult[1] = tmp4.italics;
      cResult[2] = obj2;
      tmp46 = obj2;
    } else {
      tmp46 = cResult[2];
    }
    return tmp46;
  } else {
    let tmp39;
    if (null != message) {
      if (isSystemMessageDefault(message)) {
        if (cResult[3] === messageContent) {
          let tmp42;
          if (cResult[4] === tmp4.italics) {
            tmp42 = cResult[5];
          }
          return tmp42;
        }
        const obj3 = { content: messageContent, style: tmp4.italics, variant: "text-sm/normal" };
        cResult[3] = messageContent;
        cResult[4] = tmp4.italics;
        cResult[5] = obj3;
        tmp42 = obj3;
      }
    }
    const tmp8 = null != message && message.ignored;
    if (!(null != message && message.blocked)) {
      if ("blocked" !== senderModifier) {
        if (!tmp8) {
          if ("ignored" !== senderModifier) {
            let tmp38;
            let content;
            if (message != null) {
              content = message.content;
            }
            let tmp11 = null == content;
            if (!tmp11) {
              let content1;
              if (message != null) {
                content1 = message.content;
              }
              tmp11 = "" === content1;
            }
            if (!tmp11) {
              tmp11 = null == messageContent;
            }
            if (!tmp11) {
              tmp11 = "" === messageContent;
            }
            if (!tmp11) {
              const _Array = Array;
              const isArray = Array.isArray(messageContent) && 0 === messageContent.length;
              tmp11 = isArray;
            }
            let tmp15 = null;
            if (messageLoaded) {
              let tmp18;
              if (null == message) {
                let tmp35;
                const _Symbol6 = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl6 = intl10.intl;
                  const stringResult1 = intl6.string(intl10.t.mE3KJN);
                  cResult[12] = stringResult1;
                  tmp35 = stringResult1;
                } else {
                  tmp35 = cResult[12];
                }
                tmp18 = tmp35;
              } else {
                const tmpResult = StickersUtils;
                if (tmpResult.getMessageStickers(message).length > 0) {
                  let tmp32;
                  const _Symbol5 = Symbol;
                  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl5 = intl10.intl;
                    const stringResult2 = intl5.string(intl10.t["7K5Lma"]);
                    cResult[13] = stringResult2;
                    tmp32 = stringResult2;
                  } else {
                    tmp32 = cResult[13];
                  }
                  tmp18 = tmp32;
                } else {
                  if (null != message.interaction) {
                    if ("" === message.content) {
                      let tmp29;
                      const _Symbol4 = Symbol;
                      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl4 = intl10.intl;
                        const stringResult3 = intl4.string(intl10.t["2v7kfl"]);
                        cResult[14] = stringResult3;
                        tmp29 = stringResult3;
                      } else {
                        tmp29 = cResult[14];
                      }
                      tmp18 = tmp29;
                    }
                  }
                  if (message.hasFlag(MessageFlags.IS_VOICE_MESSAGE)) {
                    let tmp26;
                    const _Symbol3 = Symbol;
                    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl3 = intl10.intl;
                      const stringResult4 = intl3.string(intl10.t["6bhHrc"]);
                      cResult[15] = stringResult4;
                      tmp26 = stringResult4;
                    } else {
                      tmp26 = cResult[15];
                    }
                    tmp18 = tmp26;
                  } else if (message.hasFlag(MessageFlags.IS_COMPONENTS_V2)) {
                    let tmp23;
                    const _Symbol2 = Symbol;
                    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl2 = intl10.intl;
                      const stringResult5 = intl2.string(intl10.t.Xxm5i3);
                      cResult[16] = stringResult5;
                      tmp23 = stringResult5;
                    } else {
                      tmp23 = cResult[16];
                    }
                    tmp18 = tmp23;
                  } else {
                    tmp18 = null;
                    const tmp17 = message.embeds.length > 0 || message.attachments.length > 0;
                    if (tmp17) {
                      let tmp20;
                      const _Symbol = Symbol;
                      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl = intl10.intl;
                        const stringResult6 = intl.string(intl10.t.JAKsM8);
                        cResult[17] = stringResult6;
                        tmp20 = stringResult6;
                      } else {
                        tmp20 = cResult[17];
                      }
                      tmp18 = tmp20;
                    }
                  }
                }
              }
              tmp15 = tmp18;
            }
            let tmp37 = messageContent;
            if (tmp11) {
              tmp37 = tmp15;
            }
            if (cResult[18] !== tmp37) {
              const obj4 = { content: tmp37, style: null, variant: "text-sm/medium" };
              cResult[18] = tmp37;
              cResult[19] = obj4;
              tmp38 = obj4;
            } else {
              tmp38 = cResult[19];
            }
            return tmp38;
          }
        }
      }
    }
    if (cResult[6] === (null != message && message.blocked)) {
      if (cResult[7] === "blocked" === senderModifier) {
        tmp39 = cResult[8];
      }
      if (cResult[9] === tmp4.italics) {
        let tmp41;
        if (cResult[10] === tmp39) {
          tmp41 = cResult[11];
        }
        return tmp41;
      }
      const obj5 = { content: tmp39, style: tmp4.italics, variant: "text-sm/normal" };
      cResult[9] = tmp4.italics;
      cResult[10] = tmp39;
      cResult[11] = obj5;
      tmp41 = obj5;
    }
    if (!(null != message && message.blocked)) {
      let stringResult7;
      if ("blocked" !== senderModifier) {
        const intl7 = intl10.intl;
        stringResult7 = intl7.string(intl10.t.yWK7ZM);
      }
      cResult[6] = null != message && message.blocked;
      cResult[7] = "blocked" === senderModifier;
      cResult[8] = stringResult7;
      tmp39 = stringResult7;
    }
    const intl8 = intl10.intl;
    stringResult7 = intl8.string(intl10.t.Lkp2fB);
  }
}) : ((arg0) => {
  let intl9;
  let isMessageDeleted;
  let message;
  let messageContent;
  let messageLoaded;
  let senderModifier;
  ({ message, messageContent, senderModifier } = arg0);
  ({ messageLoaded, isMessageDeleted } = arg0);
  const tmp = closure_4();
  if (isMessageDeleted) {
    const obj2 = { content: intl9.string(intl10.t.U8Rr2l), style: tmp.italics, variant: "text-sm/normal" };
    intl9 = intl10.intl;
    return obj2;
  } else {
    if (null != message) {
      if (isSystemMessageDefault(message)) {
        return { content: messageContent, style: tmp.italics, variant: "text-sm/normal" };
      }
    }
    const tmp6 = null != message && message.ignored;
    if (!(null != message && message.blocked)) {
      if ("blocked" !== senderModifier) {
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
              const isArray = Array.isArray(messageContent) && 0 === messageContent.length;
              tmp9 = isArray;
            }
            let tmp13 = null;
            if (messageLoaded) {
              let stringResult;
              if (null == message) {
                const intl6 = intl10.intl;
                stringResult = intl6.string(intl10.t.mE3KJN);
              } else {
                const obj5 = StickersUtils;
                if (obj5.getMessageStickers(message).length > 0) {
                  const intl5 = intl10.intl;
                  stringResult = intl5.string(intl10.t["7K5Lma"]);
                } else {
                  if (null != message.interaction) {
                    if ("" === message.content) {
                      const intl4 = intl10.intl;
                      stringResult = intl4.string(intl10.t["2v7kfl"]);
                    }
                  }
                  if (message.hasFlag(MessageFlags.IS_VOICE_MESSAGE)) {
                    const intl3 = intl10.intl;
                    stringResult = intl3.string(intl10.t["6bhHrc"]);
                  } else if (message.hasFlag(MessageFlags.IS_COMPONENTS_V2)) {
                    const intl2 = intl10.intl;
                    stringResult = intl2.string(intl10.t.Xxm5i3);
                  } else {
                    stringResult = null;
                    const tmp15 = message.embeds.length > 0 || message.attachments.length > 0;
                    if (tmp15) {
                      const intl = intl10.intl;
                      stringResult = intl.string(intl10.t.JAKsM8);
                    }
                  }
                }
              }
              tmp13 = stringResult;
            }
            let tmp19 = messageContent;
            if (tmp9) {
              tmp19 = tmp13;
            }
            return { content: tmp19, style: null, variant: "text-sm/medium" };
          }
        }
      }
    }
    if (!(null != message && message.blocked)) {
      let stringResult1;
      if ("blocked" !== senderModifier) {
        const intl7 = intl10.intl;
        stringResult1 = intl7.string(intl10.t.yWK7ZM);
      }
      return { content: stringResult1, style: tmp.italics, variant: "text-sm/normal" };
    }
    const intl8 = intl10.intl;
    stringResult1 = intl8.string(intl10.t.Lkp2fB);
  }
});
const result = size.fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostContent.tsx");

export default tmp2;