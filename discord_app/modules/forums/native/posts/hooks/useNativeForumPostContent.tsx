// discord_app/modules/forums/native/posts/hooks/useNativeForumPostContent.tsx
import c from "../../../../../../_runtime/00576_c.js";
import Constants from "../../../../../Constants.tsx";
import util from "../../../../../intl/index.native.tsx";
import StickersUtils from "../../../../stickers/StickersUtils.tsx";
import isSystemMessageDefault from "../../../../messages/isSystemMessage.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const MessageFlags = Constants.MessageFlags;
let closure_4 = createStyles.createStyles({ italics: { fontStyle: "italic" } });
const result = size.fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(20);
      ({ message, messageContent, senderModifier } = arg0);
      ({ messageLoaded, isMessageDeleted } = arg0);
      const tmp4 = closure_4();
      if (isMessageDeleted) {
        const _Symbol7 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl9 = util.intl;
          const stringResult = intl9.string(util.t.U8Rr2l);
          cResult[0] = stringResult;
          let first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp4.italics) {
          const obj2 = { content: first, style: tmp4.italics, variant: "text-sm/normal" };
          cResult[1] = tmp4.italics;
          cResult[2] = obj2;
          let tmp54 = obj2;
        } else {
          tmp54 = cResult[2];
        }
        return tmp54;
      } else {
        if (null != message) {
          if (isSystemMessageDefault(message)) {
            if (cResult[3] === messageContent) {
              if (cResult[4] === tmp4.italics) {
                let tmp50 = cResult[5];
              }
              return tmp50;
            }
            const obj3 = { content: messageContent, style: tmp4.italics, variant: "text-sm/normal" };
            cResult[3] = messageContent;
            cResult[4] = tmp4.italics;
            cResult[5] = obj3;
            tmp50 = obj3;
          }
        }
        if (!(null != message && message.blocked)) {
          if (!tmp9) {
            if (!tmp8) {
              if ("ignored" !== senderModifier) {
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
                  let isArray = Array.isArray(messageContent);
                  if (isArray) {
                    isArray = 0 === messageContent.length;
                  }
                  tmp11 = isArray;
                }
                if (!messageLoaded) {
                  let tmp44 = messageContent;
                  if (tmp11) {
                    tmp44 = null;
                  }
                  if (cResult[18] !== tmp44) {
                    const obj4 = { content: tmp44, style: null, variant: "text-sm/medium" };
                    cResult[18] = tmp44;
                    cResult[19] = obj4;
                    let tmp45 = obj4;
                  } else {
                    tmp45 = cResult[19];
                  }
                  return tmp45;
                } else {
                  if (null != message) {
                    if (tmpResult.getMessageStickers(message).length > 0) {
                      const _Symbol5 = Symbol;
                      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl5 = util.intl;
                        const stringResult1 = intl5.string(util.t["7K5Lma"]);
                        cResult[13] = stringResult1;
                      }
                    } else {
                      if (null != message.interaction) {
                        if ("" === message.content) {
                          const _Symbol4 = Symbol;
                          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl4 = util.intl;
                            const stringResult2 = intl4.string(util.t["2v7kfl"]);
                            cResult[14] = stringResult2;
                          }
                        }
                      }
                      if (message.hasFlag(MessageFlags.IS_VOICE_MESSAGE)) {
                        const _Symbol3 = Symbol;
                        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl3 = util.intl;
                          const stringResult3 = intl3.string(util.t["6bhHrc"]);
                          cResult[15] = stringResult3;
                        }
                      } else if (message.hasFlag(MessageFlags.IS_COMPONENTS_V2)) {
                        const _Symbol2 = Symbol;
                        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = util.intl;
                          const stringResult4 = intl2.string(util.t.Xxm5i3);
                          cResult[16] = stringResult4;
                        }
                      } else {
                        if (tmp17) {
                          const _Symbol = Symbol;
                          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl = util.intl;
                            const stringResult5 = intl.string(util.t.JAKsM8);
                            cResult[17] = stringResult5;
                          }
                        }
                        tmp17 = message.embeds.length > 0 || message.attachments.length > 0;
                      }
                    }
                    tmpResult = StickersUtils;
                  }
                  const _Symbol6 = Symbol;
                  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl6 = util.intl;
                    const stringResult6 = intl6.string(util.t.mE3KJN);
                    cResult[12] = stringResult6;
                  }
                }
              }
            }
          }
        }
        if (cResult[6] === (null != message && message.blocked)) {
          if (cResult[7] === tmp9) {
            if (cResult[9] === tmp4.italics) {
              if (cResult[10] === tmp46) {
                let tmp49 = cResult[11];
              }
              return tmp49;
            }
            const obj5 = { content: cResult[8], style: tmp4.italics, variant: "text-sm/normal" };
            cResult[9] = tmp4.italics;
            cResult[10] = cResult[8];
            cResult[11] = obj5;
            tmp49 = obj5;
          }
        }
        if (!(null != message && message.blocked)) {
          if (!tmp9) {
            const intl7 = util.intl;
            let stringResult7 = intl7.string(util.t.yWK7ZM);
          }
          cResult[6] = tmp7;
          cResult[7] = tmp9;
          cResult[8] = stringResult7;
        }
        const intl8 = util.intl;
        stringResult7 = intl8.string(util.t.Lkp2fB);
        tmp8 = null != message && message.ignored;
      }
    }
  : (arg0) => {
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
