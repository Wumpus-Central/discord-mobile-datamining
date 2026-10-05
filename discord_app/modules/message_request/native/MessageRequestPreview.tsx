// === Module 17058: MessageRequestPreview ===

// Module 17058 (MessageRequestPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import Constants from "Constants" /* 1085 */;
import createStyles_mod from "createStyles" /* 4890 */;
import TextStyles_mod from "TextStyles" /* 5915 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, isBlockedForMessageResult, obj1, tmp2, tmp3, tmp5, trackResult;

let Fonts;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ Fonts, AnalyticEvents: metroRequire, MessageFlags: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { systemContent: obj2, messageContent: obj3 };
obj2 = { fontStyle: "italic", lineHeight: 16 };
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 12));
obj3 = { lineHeight: 16 };
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 12));
let closure_9 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let error;
  let first;
  let items2;
  let loaded;
  let tmp28;
  let tmp9;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(26);
  channel = channel.channel;
  const style = channel.style;
  const tmp4 = closure_9();
  const obj2 = channel(12259);
  const messageRequestPreview = obj2.useMessageRequestPreview(channel);
  const message = messageRequestPreview.message;
  ({ loaded, error } = messageRequestPreview);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== message) {
    class S {
      constructor() {
        tmp = message;
        isBlockedForMessageResult = null != message;
        if (isBlockedForMessageResult) {
          tmp3 = closure_5;
          isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
        }
        obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
        isIgnoredForMessageResult = null != tmp;
        if (isIgnoredForMessageResult) {
          tmp5 = closure_5;
          isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
        }
        obj.isIgnored = isIgnoredForMessageResult;
        return obj;
      }
    }
    const items1 = [message];
    cResult[1] = message;
    cResult[2] = S;
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    class S {
      constructor() {
        tmp = message;
        isBlockedForMessageResult = null != message;
        if (isBlockedForMessageResult) {
          tmp3 = closure_5;
          isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
        }
        obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
        isIgnoredForMessageResult = null != tmp;
        if (isIgnoredForMessageResult) {
          tmp5 = closure_5;
          isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
        }
        obj.isIgnored = isIgnoredForMessageResult;
        return obj;
      }
    }
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, S, tmp9);
  if (cResult[4] === channel) {
    let flag;
    let tmp13;
    class S {
      constructor() {
        tmp = message;
        isBlockedForMessageResult = null != message;
        if (isBlockedForMessageResult) {
          tmp3 = closure_5;
          isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
        }
        obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
        isIgnoredForMessageResult = null != tmp;
        if (isIgnoredForMessageResult) {
          tmp5 = closure_5;
          isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
        }
        obj.isIgnored = isIgnoredForMessageResult;
        return obj;
      }
    }
    const effect = react.useEffect(P, items2);
    if (error) {
      let tmp22;
      class S {
        constructor() {
          tmp = message;
          isBlockedForMessageResult = null != message;
          if (isBlockedForMessageResult) {
            tmp3 = closure_5;
            isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
          }
          obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
          isIgnoredForMessageResult = null != tmp;
          if (isIgnoredForMessageResult) {
            tmp5 = closure_5;
            isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
          }
          obj.isIgnored = isIgnoredForMessageResult;
          return obj;
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            tmp = message;
            isBlockedForMessageResult = null != message;
            if (isBlockedForMessageResult) {
              tmp3 = closure_5;
              isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
            }
            obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
            isIgnoredForMessageResult = null != tmp;
            if (isIgnoredForMessageResult) {
              tmp5 = closure_5;
              isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
            }
            obj.isIgnored = isIgnoredForMessageResult;
            return obj;
          }
        }
        const stringResult = obj8.string(tmp(1126).t.BZHld2);
        cResult[8] = stringResult;
        tmp22 = stringResult;
      } else {
        class S {
          constructor() {
            tmp = message;
            isBlockedForMessageResult = null != message;
            if (isBlockedForMessageResult) {
              tmp3 = closure_5;
              isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
            }
            obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
            isIgnoredForMessageResult = null != tmp;
            if (isIgnoredForMessageResult) {
              tmp5 = closure_5;
              isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
            }
            obj.isIgnored = isIgnoredForMessageResult;
            return obj;
          }
        }
      }
      flag = false;
      tmp13 = tmp22;
    } else {
      class S {
        constructor() {
          tmp = message;
          isBlockedForMessageResult = null != message;
          if (isBlockedForMessageResult) {
            tmp3 = closure_5;
            isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
          }
          obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
          isIgnoredForMessageResult = null != tmp;
          if (isIgnoredForMessageResult) {
            tmp5 = closure_5;
            isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
          }
          obj.isIgnored = isIgnoredForMessageResult;
          return obj;
        }
      }
      flag = false;
      tmp13 = null;
      if (loaded) {
        class S {
          constructor() {
            tmp = message;
            isBlockedForMessageResult = null != message;
            if (isBlockedForMessageResult) {
              tmp3 = closure_5;
              isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
            }
            obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
            isIgnoredForMessageResult = null != tmp;
            if (isIgnoredForMessageResult) {
              tmp5 = closure_5;
              isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
            }
            obj.isIgnored = isIgnoredForMessageResult;
            return obj;
          }
        }
        if (null != message) {
          class S {
            constructor() {
              tmp = message;
              isBlockedForMessageResult = null != message;
              if (isBlockedForMessageResult) {
                tmp3 = closure_5;
                isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
              }
              obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
              isIgnoredForMessageResult = null != tmp;
              if (isIgnoredForMessageResult) {
                tmp5 = closure_5;
                isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
              }
              obj.isIgnored = isIgnoredForMessageResult;
              return obj;
            }
          }
        }
        if (message != null) {
          class S {
            constructor() {
              tmp = message;
              isBlockedForMessageResult = null != message;
              if (isBlockedForMessageResult) {
                tmp3 = closure_5;
                isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
              }
              obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
              isIgnoredForMessageResult = null != tmp;
              if (isIgnoredForMessageResult) {
                tmp5 = closure_5;
                isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
              }
              obj.isIgnored = isIgnoredForMessageResult;
              return obj;
            }
          }
        }
        if (null != undefined) {
          class S {
            constructor() {
              tmp = message;
              isBlockedForMessageResult = null != message;
              if (isBlockedForMessageResult) {
                tmp3 = closure_5;
                isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
              }
              obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
              isIgnoredForMessageResult = null != tmp;
              if (isIgnoredForMessageResult) {
                tmp5 = closure_5;
                isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
              }
              obj.isIgnored = isIgnoredForMessageResult;
              return obj;
            }
          }
          if ("" !== message.content) {
            let tmp20;
            class S {
              constructor() {
                tmp = message;
                isBlockedForMessageResult = null != message;
                if (isBlockedForMessageResult) {
                  tmp3 = closure_5;
                  isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
                }
                obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
                isIgnoredForMessageResult = null != tmp;
                if (isIgnoredForMessageResult) {
                  tmp5 = closure_5;
                  isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
                }
                obj.isIgnored = isIgnoredForMessageResult;
                return obj;
              }
            }
            const content = tmp19.content;
            const _Array = Array;
            if (!Array.isArray(content)) {
              class S {
                constructor() {
                  tmp = message;
                  isBlockedForMessageResult = null != message;
                  if (isBlockedForMessageResult) {
                    tmp3 = closure_5;
                    isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
                  }
                  obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
                  isIgnoredForMessageResult = null != tmp;
                  if (isIgnoredForMessageResult) {
                    tmp5 = closure_5;
                    isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
                  }
                  obj.isIgnored = isIgnoredForMessageResult;
                  return obj;
                }
              }
              tmp13 = content;
            } else {
              class S {
                constructor() {
                  tmp = message;
                  isBlockedForMessageResult = null != message;
                  if (isBlockedForMessageResult) {
                    tmp3 = closure_5;
                    isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
                  }
                  obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
                  isIgnoredForMessageResult = null != tmp;
                  if (isIgnoredForMessageResult) {
                    tmp5 = closure_5;
                    isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
                  }
                  obj.isIgnored = isIgnoredForMessageResult;
                  return obj;
                }
              }
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              class S {
                constructor() {
                  tmp = message;
                  isBlockedForMessageResult = null != message;
                  if (isBlockedForMessageResult) {
                    tmp3 = closure_5;
                    isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
                  }
                  obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
                  isIgnoredForMessageResult = null != tmp;
                  if (isIgnoredForMessageResult) {
                    tmp5 = closure_5;
                    isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
                  }
                  obj.isIgnored = isIgnoredForMessageResult;
                  return obj;
                }
              }
              const stringResult1 = obj7.string(tmp(1126).t["262oPB"]);
              cResult[13] = stringResult1;
              tmp20 = stringResult1;
            } else {
              class S {
                constructor() {
                  tmp = message;
                  isBlockedForMessageResult = null != message;
                  if (isBlockedForMessageResult) {
                    tmp3 = closure_5;
                    isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
                  }
                  obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
                  isIgnoredForMessageResult = null != tmp;
                  if (isIgnoredForMessageResult) {
                    tmp5 = closure_5;
                    isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
                  }
                  obj.isIgnored = isIgnoredForMessageResult;
                  return obj;
                }
              }
            }
            tmp13 = tmp20;
            flag = false;
          }
        }
        if (null != message) {
          class S {
            constructor() {
              tmp = message;
              isBlockedForMessageResult = null != message;
              if (isBlockedForMessageResult) {
                tmp3 = closure_5;
                isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
              }
              obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
              isIgnoredForMessageResult = null != tmp;
              if (isIgnoredForMessageResult) {
                tmp5 = closure_5;
                isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
              }
              obj.isIgnored = isIgnoredForMessageResult;
              return obj;
            }
          }
          if (obj5.getMessageStickers(message).length > 0) {
            let tmp17;
            class S {
              constructor() {
                tmp = message;
                isBlockedForMessageResult = null != message;
                if (isBlockedForMessageResult) {
                  tmp3 = closure_5;
                  isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
                }
                obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
                isIgnoredForMessageResult = null != tmp;
                if (isIgnoredForMessageResult) {
                  tmp5 = closure_5;
                  isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
                }
                obj.isIgnored = isIgnoredForMessageResult;
                return obj;
              }
            }
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              class S {
                constructor() {
                  tmp = message;
                  isBlockedForMessageResult = null != message;
                  if (isBlockedForMessageResult) {
                    tmp3 = closure_5;
                    isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
                  }
                  obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
                  isIgnoredForMessageResult = null != tmp;
                  if (isIgnoredForMessageResult) {
                    tmp5 = closure_5;
                    isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
                  }
                  obj.isIgnored = isIgnoredForMessageResult;
                  return obj;
                }
              }
              const stringResult2 = obj6.string(tmp(1126).t["zuI+by"]);
              cResult[14] = stringResult2;
              tmp17 = stringResult2;
            } else {
              class S {
                constructor() {
                  tmp = message;
                  isBlockedForMessageResult = null != message;
                  if (isBlockedForMessageResult) {
                    tmp3 = closure_5;
                    isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
                  }
                  obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
                  isIgnoredForMessageResult = null != tmp;
                  if (isIgnoredForMessageResult) {
                    tmp5 = closure_5;
                    isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
                  }
                  obj.isIgnored = isIgnoredForMessageResult;
                  return obj;
                }
              }
            }
            tmp13 = tmp17;
            flag = false;
          } else {
            class S {
              constructor() {
                tmp = message;
                isBlockedForMessageResult = null != message;
                if (isBlockedForMessageResult) {
                  tmp3 = closure_5;
                  isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
                }
                obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
                isIgnoredForMessageResult = null != tmp;
                if (isIgnoredForMessageResult) {
                  tmp5 = closure_5;
                  isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
                }
                obj.isIgnored = isIgnoredForMessageResult;
                return obj;
              }
            }
          }
        } else {
          let tmp15;
          class S {
            constructor() {
              tmp = message;
              isBlockedForMessageResult = null != message;
              if (isBlockedForMessageResult) {
                tmp3 = closure_5;
                isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
              }
              obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
              isIgnoredForMessageResult = null != tmp;
              if (isIgnoredForMessageResult) {
                tmp5 = closure_5;
                isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
              }
              obj.isIgnored = isIgnoredForMessageResult;
              return obj;
            }
          }
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor() {
                tmp = message;
                isBlockedForMessageResult = null != message;
                if (isBlockedForMessageResult) {
                  tmp3 = closure_5;
                  isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
                }
                obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
                isIgnoredForMessageResult = null != tmp;
                if (isIgnoredForMessageResult) {
                  tmp5 = closure_5;
                  isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
                }
                obj.isIgnored = isIgnoredForMessageResult;
                return obj;
              }
            }
            const stringResult3 = obj4.string(tmp(1126).t["0KfDxM"]);
            cResult[19] = stringResult3;
            tmp15 = stringResult3;
          } else {
            class S {
              constructor() {
                tmp = message;
                isBlockedForMessageResult = null != message;
                if (isBlockedForMessageResult) {
                  tmp3 = closure_5;
                  isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
                }
                obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
                isIgnoredForMessageResult = null != tmp;
                if (isIgnoredForMessageResult) {
                  tmp5 = closure_5;
                  isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
                }
                obj.isIgnored = isIgnoredForMessageResult;
                return obj;
              }
            }
          }
          tmp13 = tmp15;
          flag = false;
        }
      }
    }
    const tmp24 = flag ? tmp4.messageContent : tmp4.systemContent;
    if (cResult[20] === tmp24) {
      class S {
        constructor() {
          tmp = message;
          isBlockedForMessageResult = null != message;
          if (isBlockedForMessageResult) {
            tmp3 = closure_5;
            isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
          }
          obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
          isIgnoredForMessageResult = null != tmp;
          if (isIgnoredForMessageResult) {
            tmp5 = closure_5;
            isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
          }
          obj.isIgnored = isIgnoredForMessageResult;
          return obj;
        }
      }
      if (cResult[23] === style) {
        class S {
          constructor() {
            tmp = message;
            isBlockedForMessageResult = null != message;
            if (isBlockedForMessageResult) {
              tmp3 = closure_5;
              isBlockedForMessageResult = closure_5.isBlockedForMessage(tmp);
            }
            obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
            isIgnoredForMessageResult = null != tmp;
            if (isIgnoredForMessageResult) {
              tmp5 = closure_5;
              isIgnoredForMessageResult = closure_5.isIgnoredForMessage(tmp);
            }
            obj.isIgnored = isIgnoredForMessageResult;
            return obj;
          }
        }
        return tmp28;
      }
      const tmp31 = <View style={style}>{tmp25}</View>;
      cResult[23] = style;
      cResult[24] = tmp25;
      cResult[25] = tmp31;
      tmp28 = tmp31;
    }
    cResult[20] = tmp24;
    cResult[21] = tmp13;
    cResult[22] = jsx(tmp(1188).LegacyText, { style: tmp24, numberOfLines: 3, ellipsizeMode: "tail", children: tmp13 });
    const tmp27 = jsx(tmp(1188).LegacyText, { style: tmp24, numberOfLines: 3, ellipsizeMode: "tail", children: tmp13 });
  }
  class P {
    constructor() {
      if (null != message) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        obj = closure_1(closure_2[12]);
        tmp4 = AnalyticEvents;
        obj1 = { is_spam: null, channel_id: null, other_user_id: null };
        tmp5 = channel;
        ({ isSpam: obj2.is_spam, id: obj2.channel_id } = channel);
        obj1.other_user_id = tmp.author.id;
        trackResult = obj.track(AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, obj1);
      }
      return;
    }
  }
  items2 = [channel, message];
  cResult[4] = channel;
  cResult[5] = message;
  cResult[6] = P;
  cResult[7] = items2;
}) : ((channel) => {
  let error;
  let isBlocked;
  let isIgnored;
  let loaded;
  channel = channel.channel;
  const style = channel.style;
  const tmp = closure_9();
  let obj = channel(12259);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  const message = messageRequestPreview.message;
  ({ loaded, error } = messageRequestPreview);
  const obj2 = channel(504);
  const items = [RelationshipStore];
  const items1 = [message];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let isIgnoredForMessageResult;
    const obj = { isBlocked: null != message && RelationshipStore.isBlockedForMessage(message), isIgnored: isIgnoredForMessageResult };
    isIgnoredForMessageResult = null != message && RelationshipStore.isIgnoredForMessage(message);
    return obj;
  }, items1);
  const items2 = [channel, message];
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const effect = react.useEffect(() => {
    if (null != message) {
      const obj3 = { is_spam: null, channel_id: null, other_user_id: tmp.author.id };
      ({ isSpam: obj2.is_spam, id: obj2.channel_id } = channel);
      const obj = AnalyticsUtilsDefault;
      obj.track(metroRequire.MESSAGE_REQUEST_PREVIEW_VIEWED, obj3);
    }
  }, items2);
  if (error) {
    const intl9 = tmp2(1126).intl;
    intl9.string(tmp2(1126).t.BZHld2);
    let flag = false;
  } else {
    flag = false;
    if (loaded) {
      if (null != message) {
        if (isBlocked) {
          const intl8 = tmp2(1126).intl;
          intl8.string(tmp2(1126).t["WPe+xL"]);
          flag = false;
        }
      }
      if (null != message) {
        if (isIgnored) {
          const intl7 = tmp2(1126).intl;
          intl7.string(tmp2(1126).t.uxrh1O);
          flag = false;
        }
      }
      let content;
      if (message != null) {
        content = message.content;
      }
      if (null != content) {
        if ("" !== message.content) {
          const content1 = message(7531)(message, { noStyleAndInteraction: true, allowGameMentions: true }).content;
          const _Array = Array;
          if (!Array.isArray(content1)) {
            flag = true;
          }
          const intl6 = tmp2(1126).intl;
          intl6.string(tmp2(1126).t["262oPB"]);
          flag = false;
        }
      }
      if (null != message) {
        const tmp2Result = channel(5428);
        if (tmp2Result.getMessageStickers(message).length > 0) {
          const intl5 = tmp2(1126).intl;
          let stringResult1 = intl5.string(tmp2(1126).t["zuI+by"]);
        } else if (null != message.interaction) {
          const intl4 = tmp2(1126).intl;
          stringResult1 = intl4.string(tmp2(1126).t["2v7kfl"]);
        } else if (message.hasFlag(constants2.IS_VOICE_MESSAGE)) {
          const intl3 = tmp2(1126).intl;
          stringResult1 = intl3.string(tmp2(1126).t["6bhHrc"]);
        } else {
          const hasFlagResult = message.hasFlag(constants2.IS_COMPONENTS_V2);
          const intl2 = tmp2(1126).intl;
          const string = intl2.string;
          const t = tmp2(1126).t;
          if (hasFlagResult) {
            stringResult1 = string(t.Xxm5i3);
          } else {
            stringResult1 = string(t.LoMGlg);
          }
        }
        flag = false;
      } else {
        const intl = tmp2(1126).intl;
        intl.string(tmp2(1126).t["0KfDxM"]);
        flag = false;
      }
    }
  }
  return <View style={style}>{null}</View>;
}));
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestPreview.tsx");

export default memoResult;