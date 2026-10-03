// discord_app/modules/message_request/native/MessageRequestPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import TextStyles_mod from "../../rebrand/native/TextStyles.tsx";

const require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ Fonts, AnalyticEvents: metroRequire, MessageFlags: closure_7 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { systemContent: null, messageContent: null };
let obj3 = { fontStyle: "italic" };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 12));
obj3.lineHeight = 16;
obj.systemContent = obj3;
const obj4 = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 12));
obj4.lineHeight = 16;
obj.messageContent = obj4;
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestPreview.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = channel(576).c(26);
        channel = channel.channel;
        const style = channel.style;
        const tmp4 = closure_9();
        let obj = channel(576);
        const messageRequestPreview = channel(12259).useMessageRequestPreview(channel);
        const message = messageRequestPreview.message;
        ({ loaded, error } = messageRequestPreview);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [RelationshipStore];
          cResult[0] = items;
          let first = items;
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
          let tmp9 = items1;
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
        const obj2 = channel(12259);
        const stateFromStoresObject = channel(504).useStateFromStoresObject(first, S, tmp9);
        if (cResult[4] === channel) {
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
          const effect = noop.useEffect(P, items2);
          if (error) {
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
            let flag = false;
            let tmp13 = null;
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
                    const tmp20 = stringResult1;
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
                    const tmp17 = stringResult2;
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
                  const tmp15 = stringResult3;
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
            const tmp25 = flag ? tmp4.messageContent : tmp4.systemContent;
            if (cResult[20] === tmp25) {
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
                return tmp29;
              }
              let obj3 = { style, children: tmp26 };
              const tmp32 = <View style={style}>{tmp26}</View>;
              cResult[23] = style;
              cResult[24] = tmp26;
              cResult[25] = tmp32;
              tmp29 = tmp32;
            }
            const obj9 = { style: tmp25, numberOfLines: 3, ellipsizeMode: "tail", children: tmp13 };
            const tmp28 = jsx(tmp(1188).LegacyText, {
              style: tmp25,
              numberOfLines: 3,
              ellipsizeMode: "tail",
              children: tmp13,
            });
            cResult[20] = tmp25;
            cResult[21] = tmp13;
            cResult[22] = tmp28;
          }
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
        const tmpResult = channel(504);
      }
    : (channel) => {
        channel = channel.channel;
        const tmp = closure_9();
        const messageRequestPreview = channel(12259).useMessageRequestPreview(channel);
        const message = messageRequestPreview.message;
        ({ loaded, error } = messageRequestPreview);
        let obj = channel(12259);
        const items = [RelationshipStore];
        const items1 = [message];
        const stateFromStoresObject = channel(504).useStateFromStoresObject(
          items,
          () => {
            let isBlockedForMessageResult = null != message;
            if (isBlockedForMessageResult) {
              isBlockedForMessageResult = RelationshipStore.isBlockedForMessage(message);
            }
            const obj = { isBlocked: isBlockedForMessageResult, isIgnored: null };
            let isIgnoredForMessageResult = null != message;
            if (isIgnoredForMessageResult) {
              isIgnoredForMessageResult = RelationshipStore.isIgnoredForMessage(message);
            }
            obj.isIgnored = isIgnoredForMessageResult;
            return obj;
          },
          items1,
        );
        const items2 = [channel, message];
        ({ isBlocked, isIgnored } = stateFromStoresObject);
        const effect = noop.useEffect(() => {
          if (null != message) {
            const obj3 = { is_spam: null, channel_id: null, other_user_id: null };
            ({ isSpam: obj2.is_spam, id: obj2.channel_id } = channel);
            obj3.other_user_id = tmp.author.id;
            AnalyticsUtilsDefault.track(constants.MESSAGE_REQUEST_PREVIEW_VIEWED, obj3);
          }
        }, items2);
        if (error) {
          const intl9 = tmp2(1126).intl;
          let stringResult = intl9.string(tmp2(1126).t.BZHld2);
          let flag = false;
        } else {
          stringResult = null;
          flag = false;
          if (loaded) {
            if (null != message) {
              if (isBlocked) {
                const intl8 = tmp2(1126).intl;
                stringResult = intl8.string(tmp2(1126).t["WPe+xL"]);
                flag = false;
              }
            }
            if (null != message) {
              if (isIgnored) {
                const intl7 = tmp2(1126).intl;
                stringResult = intl7.string(tmp2(1126).t.uxrh1O);
                flag = false;
              }
            }
            let content;
            if (message != null) {
              content = message.content;
            }
            if (null != content) {
              if ("" !== message.content) {
                const content1 = message(7531)(message, {
                  noStyleAndInteraction: true,
                  allowGameMentions: true,
                }).content;
                const _Array = Array;
                if (!Array.isArray(content1)) {
                  flag = true;
                  stringResult = content1;
                }
                const intl6 = tmp2(1126).intl;
                stringResult = intl6.string(tmp2(1126).t["262oPB"]);
                flag = false;
              }
            }
            if (null != message) {
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
                const intl2 = tmp2(1126).intl;
                const string = intl2.string;
                const t = tmp2(1126).t;
                if (hasFlagResult) {
                  stringResult1 = string(t.Xxm5i3);
                } else {
                  stringResult1 = string(t.LoMGlg);
                }
                hasFlagResult = message.hasFlag(constants2.IS_COMPONENTS_V2);
              }
              stringResult = stringResult1;
              flag = false;
              tmp2Result = tmp2(5428);
            } else {
              const intl = tmp2(1126).intl;
              stringResult = intl.string(tmp2(1126).t["0KfDxM"]);
              flag = false;
            }
          }
        }
        let obj3 = {
          style: channel.style,
          children: jsx(channel(1188).LegacyText, {
            style: flag ? tmp.messageContent : tmp.systemContent,
            numberOfLines: 3,
            ellipsizeMode: "tail",
            children: stringResult,
          }),
        };
        return (
          <View style={channel.style}>
            {jsx(channel(1188).LegacyText, {
              style: flag ? tmp.messageContent : tmp.systemContent,
              numberOfLines: 3,
              ellipsizeMode: "tail",
              children: stringResult,
            })}
          </View>
        );
      },
);
