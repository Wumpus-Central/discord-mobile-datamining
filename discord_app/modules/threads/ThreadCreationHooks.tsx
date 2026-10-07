// === Module 8840: ThreadCreationHooks ===

// Module 8840 (ThreadCreationHooks)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ThreadHooks from "ThreadHooks" /* 6782 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 6787 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6978 */;
import MessageParserDefault from "MessageParser" /* 7179 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ForumActivePostStore from "ForumActivePostStore" /* 6818 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5116 */;

const require = globalThis.__r;

require = fn;
function getIsPrivate(threadSettingsDraft, privateThreadMode) {
  let tmp = privateThreadMode === obj.PrivateOnly;
  if (!tmp) {
    let flag = threadSettingsDraft.isPrivate;
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
}
function getDefaultThreadName(stateFromStores, parentMessageId) {
  let message = null;
  if (null != parentMessageId) {
    message = MessageStore.getMessage(stateFromStores.id, parentMessageId);
  }
  let contentMessage;
  if (message != null) {
    contentMessage = message.getContentMessage();
  }
  let str;
  if (contentMessage != null) {
    const embeds = contentMessage.embeds;
    if (embeds != null) {
      const first = embeds[0];
      if (first != null) {
        str = first.rawTitle;
      }
    }
  }
  if (str == null) {
    str = "";
  }
  let str2;
  if (message != null) {
    const poll = message.poll;
    if (poll != null) {
      const question = poll.question;
      if (question != null) {
        str2 = question.text;
      }
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  if ("" !== str) {
    let text = str;
    if (str.length > 40) {
      text = `${str.substring(0, 40)}...`;
    }
    return text;
  } else if ("" !== str2) {
    let text1 = str2;
    if (str2.length > 80) {
      text1 = `${str2.substring(0, 80)}...`;
    }
    return text1;
  } else {
    let str3;
    if (contentMessage != null) {
      str3 = contentMessage.content;
    }
    if (str3 == null) {
      str3 = "";
    }
    const str4 = MessageParserDefault.unparse(str3, stateFromStores.id, true);
    const tmp17Result = sanitizeThreadNameDefault;
    let str7 = sanitizeThreadNameDefault(str4.split("\n")[0], true).replace(/^[ #-]+/, "");
    const items = [];
    const match = str7.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
    while (null != match) {
      if (null == match.index) {
        break;
      } else {
        let arr = items.push(str7.substring(0, match.index));
        let arr3 = items.push(match[0]);
        str7 = str7.substring(match.index + match[0].length);
        continue;
      }
    }
    items.push(str7);
    const first1 = items[0];
    let num4 = 1;
    let tmp12 = first1;
    let arr2 = first1;
    if (1 < items.length) {
      const sum = tmp12 + items[num4];
      arr2 = tmp12;
      while (sum.length <= 40) {
        num4 = num4 + 1;
        tmp12 = sum;
        arr2 = sum;
        if (num4 >= items.length) {
          break;
        }
      }
    }
    let text2 = arr2;
    if (arr2.length > 40) {
      text2 = `${arr2.substring(0, 40)}...`;
    }
    return text2;
  }
}
function buildMessageActivity(activity) {
  let session_id = activity.activity.session_id;
  if (null == session_id) {
    session_id = AuthenticationStore.getSessionId();
  }
  let tmp2 = null;
  if (null != session_id) {
    obj = { type: activity.type, session_id, target_user_id: activity.targetUserId, party_id: null };
    const party = activity.activity.party;
    let id;
    if (party != null) {
      id = party.id;
    }
    obj.party_id = id;
    tmp2 = obj;
  }
  return tmp2;
}
function sendMessage(id, arg1, items, arg3, fn) {
  if (null != fn) {
    if (null != arg3) {
      if (arg3.length > 0) {
        fn(id, arg3, arg1, items);
      }
    }
  }
  if (null != items) {
    if (items.length > 0) {
      const obj4 = MessageActionCreatorsDefault;
      id = id.id;
      const obj3 = { location: MessageSendLocation.THREAD_CREATION };
      let sendStickersResult = obj4.sendStickers(id, items, MessageParserDefault.parse(id, arg1), obj3);
    }
    return sendStickersResult;
  }
  obj = MessageActionCreatorsDefault;
  sendStickersResult = obj.sendMessage(id.id, MessageParserDefault.parse(id, arg1), undefined, { location: MessageSendLocation.THREAD_CREATION });
  const obj6 = { location: MessageSendLocation.THREAD_CREATION };
}
function createThread_() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_28 = async function _createThread_(arg0, arg1, arg2, arg3) {
  let forumLikeChannel = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  c10 = 0;
  c11 = 0;
  c9 = 0;
  return (async (arg0, value, arg2, arg3) => {
    closure_7 = tmp3;
    closure_6 = tmp6;
    closure_134_0 = forumLikeChannel;
    closure_134_1 = closure_1;
    closure_134_2 = closure_2;
    closure_134_4 = forumLikeChannel.isForumLikeChannel();
    await body();
    if (1 === tmp9) {
      c9 = 0;
      closure_134_8 = closure_8;
      body = closure_134_8.body;
      let code;
      if (body != null) {
        code = body.code;
      }
      if (code === closure_135_14.TOO_MANY_THREADS) {
        const intl9 = closure_135_0(closure_135_2[17]).intl;
        const string2 = intl9.string;
        const t2 = closure_135_0(closure_135_2[17]).t;
        if (closure_134_4) {
          let string2Result = string2(t2.vWNFkx);
        } else {
          string2Result = string2(t2["1KEdvB"]);
        }
        let obj7 = { title: string2Result, body: null };
        const intl10 = closure_135_0(closure_135_2[17]).intl;
        const string3 = intl10.string;
        let KGaiEK = closure_135_0(closure_135_2[17]).t;
        if (closure_134_4) {
          KGaiEK = KGaiEK.KGaiEK;
          let string3Result = string3(KGaiEK);
        } else {
          string3Result = string3(KGaiEK.P0wT5S);
        }
        obj7.body = string3Result;
        obj7 = closure_135_1(closure_135_2[30]).show(obj7);
        closure_135_1(closure_135_2[30]);
      } else {
        const body7 = closure_134_8.body;
        let code1;
        if (body7 != null) {
          code1 = body7.code;
        }
        if (code1 === closure_135_14.TOO_MANY_ANNOUNCEMENT_THREADS) {
          const obj8 = { title: null, body: null };
          const intl7 = closure_135_0(closure_135_2[17]).intl;
          obj8.title = intl7.string(closure_135_0(closure_135_2[17]).t["1KEdvB"]);
          const intl8 = closure_135_0(closure_135_2[17]).intl;
          obj8.body = intl8.string(closure_135_0(closure_135_2[17]).t.jDMxz2);
          closure_135_1(closure_135_2[30]).show(obj8);
          closure_135_1(closure_135_2[30]);
        } else {
          const body8 = closure_134_8.body;
          let code2;
          if (body8 != null) {
            code2 = body8.code;
          }
          if (code2 === closure_135_14.SLOWMODE_RATE_LIMITED) {
            const retry_after = closure_134_8.body.retry_after;
            c4 = retry_after;
            if (retry_after == null) {
              c4 = 0;
            }
            closure_134_5 = c4;
            if (closure_134_5 > 0) {
              closure_135_1(closure_135_2[31]).dispatch({ type: "SLOWMODE_SET_COOLDOWN", channelId: closure_134_0.id, slowmodeType: closure_135_11.CreateThread, cooldownMs: closure_134_5 * closure_135_1(closure_135_2[33]).Millis.SECOND });
              closure_135_1(closure_135_2[31]);
              { type: "SLOWMODE_SET_COOLDOWN", channelId: closure_134_0.id, slowmodeType: closure_135_11.CreateThread, cooldownMs: closure_134_5 * closure_135_1(closure_135_2[33]).Millis.SECOND };
            }
          } else if (429 === closure_134_8.status) {
            const intl5 = closure_135_0(closure_135_2[17]).intl;
            const string = intl5.string;
            const t = closure_135_0(closure_135_2[17]).t;
            if (closure_134_4) {
              let stringResult = string(t.vWNFkx);
            } else {
              stringResult = string(t["1KEdvB"]);
            }
            const obj13 = { title: stringResult, body: null };
            const intl6 = closure_135_0(closure_135_2[17]).intl;
            obj13.body = intl6.string(closure_135_0(closure_135_2[17]).t.Whhv4w);
            closure_135_1(closure_135_2[30]).show(obj13);
            closure_135_1(closure_135_2[30]);
          } else {
            const body9 = closure_134_8.body;
            let code3;
            if (body9 != null) {
              code3 = body9.code;
            }
            if (closure_135_12.has(code3)) {
              throw tmp47;
            } else {
              const body2 = tmp47.body;
              let code4;
              if (body2 != null) {
                code4 = body2.code;
              }
              if (code4 === closure_135_14.INVALID_FORM_BODY) {
                const body3 = closure_134_8.body;
                let name;
                if (body3 != null) {
                  const errors = body3.errors;
                  if (errors != null) {
                    name = errors.name;
                  }
                }
                if (null != name) {
                  throw closure_134_8;
                }
              }
              const body4 = closure_134_8.body;
              let code5;
              if (body4 != null) {
                code5 = body4.code;
              }
              if (code5 === closure_135_14.UNKNOWN_SESSION) {
                throw closure_134_8;
              } else {
                const body10 = closure_134_8.body;
                let code6;
                if (body10 != null) {
                  code6 = body10.code;
                }
                if (closure_135_13.has(code6)) {
                  if (null == closure_134_2) {
                    new Promise((arg0, fn) => {
                      closure_0 = arg0;
                      closure_1 = fn;
                      if (null == closure_1_8.body) {
                        fn();
                      }
                      const result = andDeleteMostRecentUserCreatedThreadId.addConditionalChangeListener(() => {
                        andDeleteMostRecentUserCreatedThreadId = andDeleteMostRecentUserCreatedThreadId.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != andDeleteMostRecentUserCreatedThreadId) {
                          const channel2 = channel.getChannel(andDeleteMostRecentUserCreatedThreadId);
                          closure_1(closure_1_2[31]).wait(() => {
                            if (null == closure_0) {
                              closure_1();
                            } else {
                              closure_0(tmp);
                            }
                          });
                          return false;
                        }
                      });
                    });
                    c11 = 3;
                  } else {
                    const body11 = closure_134_8.body;
                    let code7;
                    if (body11 != null) {
                      code7 = body11.code;
                    }
                    if (code7 !== closure_135_14.EXPLICIT_CONTENT) {
                      const obj15 = { file: closure_134_2, guildId: closure_134_0.getGuildId(), analyticsLocations: null, code: null, reason: null };
                      analyticsLocations = closure_134_1;
                      if (closure_134_1 == null) {
                        analyticsLocations = [];
                      }
                      obj15.analyticsLocations = analyticsLocations;
                      const body5 = closure_134_8.body;
                      let code8;
                      if (body5 != null) {
                        code8 = body5.code;
                      }
                      obj15.code = code8;
                      const body6 = closure_134_8.body;
                      let reason;
                      if (body6 != null) {
                        reason = body6.reason;
                      }
                      obj15.reason = reason;
                      let result = closure_135_0(closure_135_2[26]).handleUploadMessageAttachmentsErrors(obj15);
                      closure_135_0(closure_135_2[26]);
                    }
                  }
                  closure_134_6 = closure_135_0(closure_135_2[34]).createNonce();
                  let tmp90 = null != closure_134_8.body.attachments;
                  if (tmp90) {
                    tmp90 = closure_134_8.body.attachments.length > 0;
                  }
                  if (tmp90) {
                    closure_135_1(closure_135_2[31]).dispatch({ type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE", messageId: closure_134_6, channelId: closure_134_0.id, attachments: closure_134_8.body.attachments });
                    closure_135_1(closure_135_2[35])(closure_134_0.id, closure_134_6);
                    closure_135_1(closure_135_2[31]);
                  }
                  closure_135_0(closure_135_2[34]);
                } else {
                  const obj19 = { title: null, body: null };
                  const intl3 = closure_135_0(closure_135_2[17]).intl;
                  obj19.title = intl3.string(closure_135_0(closure_135_2[17]).t.j2d6Km);
                  const intl4 = closure_135_0(closure_135_2[17]).intl;
                  obj19.body = intl4.string(closure_135_0(closure_135_2[17]).t.fEptJP);
                  closure_135_1(closure_135_2[30]).show(obj19);
                  closure_135_1(closure_135_2[30]);
                }
              }
            }
          }
        }
        new Promise((arg0, fn) => {
          closure_0 = arg0;
          if (null == body.body) {
            fn();
          }
          const result = closure_1_8.addConditionalChangeListener(() => {
            const channel = closure_2_8.getChannel(body.body.id);
            if (null != channel) {
              closure_2_1(closure_2_2[31]).wait(() => {
                channel(channel);
              });
              return false;
            }
          });
        });
        c10 = 2;
        c11 = 1;
      }
    } else if (2 === tmp9) {
      if (arg0 === 1) {
        c11 = 3;
        throw value;
      } else if (arg0 === 2) {
        c11 = 3;
        return { value, done: true };
      } else {
        closure_134_7 = value;
        c9 = 2;
        c10 = 5;
        c11 = 1;
        return { value: closure_135_1(closure_135_2[29]).fetchMessages({ channelId: closure_134_7.id, limit: closure_135_19 }), done: false };
      }
    } else if (3 === tmp9) {
      if (arg0 === 1) {
        c11 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_134_3 = value;
        if (null == value.body) {
          const obj24 = { title: null, body: null };
          const intl = closure_135_0(closure_135_2[17]).intl;
          obj24.title = intl.string(closure_135_0(closure_135_2[17]).t.j2d6Km);
          const intl2 = closure_135_0(closure_135_2[17]).intl;
          obj24.body = intl2.string(closure_135_0(closure_135_2[17]).t.fEptJP);
          closure_135_1(closure_135_2[30]).show(obj24);
          closure_135_1(closure_135_2[30]);
        } else {
          closure_135_1(closure_135_2[31]).dispatch({ type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: closure_135_11.CreateThread, channelId: closure_134_0.id });
          closure_135_1(closure_135_2[31]);
          closure_135_1(closure_135_2[31]).dispatch({ type: "THREAD_CREATE_LOCAL", channelId: closure_134_3.body.id });
          const AccessibilityAnnouncer = closure_135_0(closure_135_2[32]).AccessibilityAnnouncer;
          const intl11 = closure_135_0(closure_135_2[17]).intl;
          const t3 = closure_135_0(closure_135_2[17]).t;
          if (closure_134_4) {
            let XkUoBb = t3.zDAG2N;
          } else {
            XkUoBb = t3.XkUoBb;
          }
          AccessibilityAnnouncer.announce(intl11.string(XkUoBb));
          closure_135_1(closure_135_2[31]);
        }
        c9 = 0;
      }
    } else {
      if (4 === tmp9) {
        c9 = 0;
        c11 = 3;
      } else if (arg0 === 1) {
        c11 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c9 = 0;
      }
      c9 = 0;
      c11 = 3;
      return { value, done: true };
    }
    return value;
  })();
};
const DraftType = fn(7044).DraftType;
const SlowmodeType = fn(7184).SlowmodeType;
const ThreadConstants = fn(1125);
({ FORUM_POST_CREATION_AUTOMOD_ERRORS: closure_12, FORUM_POST_CREATION_UPLOAD_ERRORS: map1 } = ThreadConstants);
const Constants = fn(1085);
({ AbortCodes: closure_14, AnalyticEvents: closure_15, ChannelTypes: closure_16, Endpoints: closure_17, LoggingInviteTypes: closure_18, MAX_MESSAGES_PER_CHANNEL: closure_19, MessageFlags: closure_20 } = Constants);
const MessageSendLocation = fn(4889).MessageSendLocation;
const PrivateThreadMode = { Disabled: 1, [1]: "Disabled", Enabled: 2, [2]: "Enabled", PrivateOnly: 3, [3]: "PrivateOnly" };
fn(558);
let ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  obj = ThreadHooks;
  const canStartPublicThread = obj.useCanStartPublicThread(arg0);
  if (!obj2.useCanStartPrivateThread(arg0)) {
    return tmp2.Disabled;
  }
}) : ((arg0) => {
  obj = ThreadHooks;
  const canStartPublicThread = obj.useCanStartPublicThread(arg0);
  if (!obj2.useCanStartPrivateThread(arg0)) {
    return tmp2.Disabled;
  }
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((parentChannel) => {
  const cResult = require("c").c(9);
  parentChannel = parentChannel.parentChannel;
  _require = parentChannel;
  const parentMessageId = parentChannel.parentMessageId;
  threadSettings = parentChannel.threadSettings;
  const privateThreadMode = parentChannel.privateThreadMode;
  const _location = parentChannel.location;
  const onThreadCreated = parentChannel.onThreadCreated;
  const useDefaultThreadName = parentChannel.useDefaultThreadName;
  const uploadHandler = parentChannel.uploadHandler;
  if (cResult[0] === _location) {
    if (cResult[1] === onThreadCreated) {
      if (cResult[2] === parentChannel) {
        if (cResult[3] === parentMessageId) {
          if (cResult[4] === privateThreadMode) {
            if (cResult[5] === threadSettings) {
              if (cResult[6] === uploadHandler) {
                if (cResult[7] === useDefaultThreadName) {
                  let tmp2 = cResult[8];
                }
                return tmp2;
              }
            }
          }
        }
      }
    }
  }
  _require = _location((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let name = arg2;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, value, arg2) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const auto_archive_duration = tmp3;
              closure_4 = tmp2;
              closure_132_0 = closure_0;
              closure_132_1 = closure_1;
              closure_132_2 = name;
              closure_132_3 = undefined;
              closure_132_4 = undefined;
              let autoArchiveDuration;
              let channel2;
              closure_132_7 = undefined;
              closure_132_3 = getIsPrivate(name, c3);
              name = name.name;
              c3 = name;
              if (name == null) {
                c3 = "";
              }
              closure_132_4 = c3;
              if ("" === c3) {
                if (c6) {
                  let stringResult = getDefaultThreadName(closure_0, closure_1);
                  if ("" === stringResult) {
                    const intl = closure_0(threadSettings[17]).intl;
                    stringResult = intl.string(closure_0(threadSettings[17]).t["7Xm5QI"]);
                  }
                  closure_132_4 = stringResult;
                }
              }
              autoArchiveDuration = closure_0(threadSettings[18]).getAutoArchiveDuration(closure_0);
              const obj3 = closure_0(threadSettings[18]);
              channel2 = channel.getChannel(parentMessageId(threadSettings[19]).castMessageIdAsChannelId(closure_1));
              c6 = 1;
              c7 = 1;
              const obj6 = {
                value: createThread_(closure_0, [], undefined, () => {
                          if (null != closure_1) {
                            let result = closure_3_17.CHANNEL_MESSAGE_THREADS(closure_0.id, tmp);
                            let tmp3 = closure_0;
                          } else {
                            tmp3 = closure_0;
                            result = closure_3_17.CHANNEL_THREADS(closure_0.id);
                          }
                          const HTTP = closure_0(threadSettings[20]).HTTP;
                          const request = { url: result, body: null, rejectWithError: null };
                          const body = { name, type: null, auto_archive_duration: null, location: null };
                          if (closure_1_3) {
                            let PRIVATE_THREAD = constants.PRIVATE_THREAD;
                          } else {
                            PRIVATE_THREAD = tmp3.type === constants.GUILD_ANNOUNCEMENT ? constants.ANNOUNCEMENT_THREAD : constants.PUBLIC_THREAD;
                          }
                          body.type = PRIVATE_THREAD;
                          body.auto_archive_duration = auto_archive_duration;
                          body.location = location;
                          request.body = body;
                          request.rejectWithError = closure_0(threadSettings[20]).rejectWithMigratedError();
                          return HTTP.post(request);
                        }),
                done: false
              };
              return obj6;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_132_7 = value;
            if (closure_132_7 !== channel2) {
              parentMessageId(threadSettings[21]).clearDraft(closure_0.id, DraftType.ThreadSettings);
              const obj8 = parentMessageId(threadSettings[21]);
              parentMessageId(threadSettings[21]).clearDraft(closure_0.id, DraftType.FirstThreadMessage);
              if (auto_archive_duration != null) {
                tmp62(closure_132_7);
              }
              sendMessage(closure_132_7, closure_132_0, closure_132_1, closure_132_2, c7);
              const obj9 = parentMessageId(threadSettings[21]);
            }
            parentMessageId(threadSettings[22]).clearAll(closure_0.id, DraftType.FirstThreadMessage);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp43) {
          c7 = tmp;
          throw tmp43;
        }
      }
    })();
  });
  const fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[0] = _location;
  cResult[1] = onThreadCreated;
  cResult[2] = parentChannel;
  cResult[3] = parentMessageId;
  cResult[4] = privateThreadMode;
  cResult[5] = threadSettings;
  cResult[6] = uploadHandler;
  cResult[7] = useDefaultThreadName;
  cResult[8] = fn;
  tmp2 = fn;
}) : ((parentChannel) => {
  parentChannel = parentChannel.parentChannel;
  const parentMessageId = parentChannel.parentMessageId;
  const threadSettings = parentChannel.threadSettings;
  const privateThreadMode = parentChannel.privateThreadMode;
  const _location = parentChannel.location;
  const onThreadCreated = parentChannel.onThreadCreated;
  const useDefaultThreadName = parentChannel.useDefaultThreadName;
  const uploadHandler = parentChannel.uploadHandler;
  closure_0 = _location((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let name = arg2;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, value, arg2) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const auto_archive_duration = tmp3;
              closure_4 = tmp2;
              closure_132_0 = closure_0;
              closure_132_1 = closure_1;
              closure_132_2 = name;
              closure_132_3 = undefined;
              closure_132_4 = undefined;
              let autoArchiveDuration;
              let channel2;
              closure_132_7 = undefined;
              closure_132_3 = getIsPrivate(name, c3);
              name = name.name;
              c3 = name;
              if (name == null) {
                c3 = "";
              }
              closure_132_4 = c3;
              if ("" === c3) {
                if (c6) {
                  let stringResult = getDefaultThreadName(closure_0, closure_1);
                  if ("" === stringResult) {
                    const intl = closure_0(threadSettings[17]).intl;
                    stringResult = intl.string(closure_0(threadSettings[17]).t["7Xm5QI"]);
                  }
                  closure_132_4 = stringResult;
                }
              }
              autoArchiveDuration = closure_0(threadSettings[18]).getAutoArchiveDuration(closure_0);
              const obj3 = closure_0(threadSettings[18]);
              channel2 = channel.getChannel(parentMessageId(threadSettings[19]).castMessageIdAsChannelId(closure_1));
              c6 = 1;
              c7 = 1;
              const obj6 = {
                value: createThread_(closure_0, [], undefined, () => {
                          if (null != closure_1) {
                            let result = closure_3_17.CHANNEL_MESSAGE_THREADS(closure_0.id, tmp);
                            let tmp3 = closure_0;
                          } else {
                            tmp3 = closure_0;
                            result = closure_3_17.CHANNEL_THREADS(closure_0.id);
                          }
                          const HTTP = closure_0(threadSettings[20]).HTTP;
                          const request = { url: result, body: null, rejectWithError: null };
                          const body = { name, type: null, auto_archive_duration: null, location: null };
                          if (closure_1_3) {
                            let PRIVATE_THREAD = constants.PRIVATE_THREAD;
                          } else {
                            PRIVATE_THREAD = tmp3.type === constants.GUILD_ANNOUNCEMENT ? constants.ANNOUNCEMENT_THREAD : constants.PUBLIC_THREAD;
                          }
                          body.type = PRIVATE_THREAD;
                          body.auto_archive_duration = auto_archive_duration;
                          body.location = location;
                          request.body = body;
                          request.rejectWithError = closure_0(threadSettings[20]).rejectWithMigratedError();
                          return HTTP.post(request);
                        }),
                done: false
              };
              return obj6;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_132_7 = value;
            if (closure_132_7 !== channel2) {
              parentMessageId(threadSettings[21]).clearDraft(closure_0.id, DraftType.ThreadSettings);
              const obj8 = parentMessageId(threadSettings[21]);
              parentMessageId(threadSettings[21]).clearDraft(closure_0.id, DraftType.FirstThreadMessage);
              if (auto_archive_duration != null) {
                tmp62(closure_132_7);
              }
              sendMessage(closure_132_7, closure_132_0, closure_132_1, closure_132_2, c7);
              const obj9 = parentMessageId(threadSettings[21]);
            }
            parentMessageId(threadSettings[22]).clearAll(closure_0.id, DraftType.FirstThreadMessage);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp43) {
          c7 = tmp;
          throw tmp43;
        }
      }
    })();
  });
  const items = [parentChannel, parentMessageId, threadSettings, onThreadCreated, privateThreadMode, _location, useDefaultThreadName, uploadHandler];
  return onThreadCreated.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadCreationHooks.tsx");

export { PrivateThreadMode };
export const usePrivateThreadMode = tmp4;
export { getIsPrivate };
export { getDefaultThreadName };
export const useCreateThreadCommon = tmp5;
export const createThread = function createThread(arg0, name, type, auto_archive_duration, _location) {
  const id = arg0;
  return createThread_(arg0, [], undefined, () => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.CHANNEL_THREADS(id.id), body: null, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    const body = { name, type, auto_archive_duration, location: _location };
    request.body = body;
    return HTTP.post(request);
  });
};
export const useCreateForumPostCommon = ReactCompilerGating.isReactCompilerEnabled() ? ((parentChannel) => {
  const cResult = require("c").c(10);
  parentChannel = parentChannel.parentChannel;
  _require = parentChannel;
  let name = parentChannel.name;
  appliedTags = parentChannel.appliedTags;
  let analyticsLocations = parentChannel.analyticsLocations;
  const onThreadCreated = parentChannel.onThreadCreated;
  const upload = parentChannel.upload;
  const activityAction = parentChannel.activityAction;
  let applicationId = parentChannel.applicationId;
  let voiceChatEnabled = parentChannel.voiceChatEnabled;
  if (cResult[0] === activityAction) {
    if (cResult[1] === analyticsLocations) {
      if (cResult[2] === applicationId) {
        if (cResult[3] === appliedTags) {
          if (cResult[4] === name) {
            if (cResult[5] === onThreadCreated) {
              if (cResult[6] === parentChannel) {
                if (cResult[7] === upload) {
                  if (cResult[8] === voiceChatEnabled) {
                    let tmp2 = cResult[9];
                  }
                  return tmp2;
                }
              }
            }
          }
        }
      }
    }
  }
  _require = onThreadCreated((arg0, name, applied_tags) => {
    closure_0 = arg0;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0, value, arg2) {
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp11 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj6 = { value, done: true };
          return obj6;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === voiceChatEnabled) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_4 = tmp9;
              let tmp83 = closure_0;
              let uploaderFile;
              closure_132_1 = undefined;
              closure_132_2 = undefined;
              closure_132_3 = undefined;
              closure_132_4 = undefined;
              closure_132_5 = undefined;
              closure_132_6 = undefined;
              let file;
              let code2;
              let reason;
              closure_132_10 = undefined;
              closure_132_11 = undefined;
              closure_132_12 = undefined;
              let num10 = 0;
              if (tmp127[0]) {
                num10 = closure_0(appliedTags[24]).addFlag(0, constants4.SUPPRESS_NOTIFICATIONS);
                tmp83 = tmp128;
                const obj13 = closure_0(appliedTags[24]);
              }
              tmp127 = analyticsLocations(name(appliedTags[23])(closure_0), 2);
              const autoArchiveDuration = closure_0(appliedTags[18]).getAutoArchiveDuration(closure_0, null);
              closure_132_1 = closure_2_17.CHANNEL_THREADS(closure_0.id) + "?use_nested_fields=true";
              const obj8 = { name, auto_archive_duration: autoArchiveDuration, applied_tags, message: null };
              const obj9 = { content: tmp83, sticker_ids: name, flags: null };
              let tmp92;
              if (0 !== num10) {
                tmp92 = num10;
              }
              obj9.flags = tmp92;
              obj8.message = obj9;
              closure_132_2 = obj8;
              let tmp94 = null;
              if (null != closure_6) {
                tmp94 = buildMessageActivity(tmp93);
              }
              closure_132_3 = tmp94;
              let tmp96 = null != tmp94;
              if (tmp96) {
                tmp96 = null != tmp93;
              }
              if (tmp96) {
                obj8.message.application_id = tmp93.activity.application_id;
                obj8.message.activity = tmp94;
              }
              if (null != applied_tags) {
                if (applied_tags.length > 0) {
                  applicationId = 1;
                  voiceChatEnabled = 3;
                  c9 = 1;
                  const obj10 = { value: tmp6(applied_tags), done: false };
                  return obj10;
                }
              }
              closure_132_11 = function createThread() {
                return createThread_(closure_0, closure_3, closure_1_0, () => {
                  const HTTP = closure_0(body[20]).HTTP;
                  const request = { url, body, rejectWithError: closure_0(body[20]).rejectWithMigratedError() };
                  return HTTP.post(request);
                });
              };
              applicationId = 2;
              closure_132_11();
              voiceChatEnabled = 4;
              c9 = 1;
              const obj14 = closure_0(appliedTags[18]);
            }
          } else if (1 === tmp12) {
            applicationId = 0;
            closure_132_5 = closure_6;
            closure_132_6 = closure_132_5;
            file = closure_132_6.file;
            code2 = closure_132_6.code;
            reason = closure_132_6.reason;
            const obj12 = { file, guildId: closure_0.getGuildId(), analyticsLocations: null, code: null, reason: null };
            if (analyticsLocations == null) {
              analyticsLocations = [];
            }
            obj12.analyticsLocations = analyticsLocations;
            obj12.code = code2;
            obj12.reason = reason;
            const result = closure_0(appliedTags[26]).handleUploadMessageAttachmentsErrors(obj12);
            throw closure_132_5;
          } else if (2 === tmp12) {
            applicationId = 0;
            closure_132_12 = closure_6;
            let code;
            if (closure_132_12 != null) {
              const body = closure_132_12.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === constants.UNKNOWN_SESSION) {
              if (null != closure_132_3) {
                const message = closure_132_2.message;
                delete tmp8[tmp5];
                const message2 = closure_132_2.message;
                delete tmp8[tmp4];
                voiceChatEnabled = 5;
                c9 = 1;
                const obj15 = { value: closure_132_11(), done: false };
                return obj15;
              }
            }
            throw closure_132_12;
          } else if (3 === tmp12) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_132_4 = value;
              uploaderFile = closure_132_4.uploaderFile;
              const files = closure_132_4.files;
              closure_132_2.message.attachments = files.map((item, index) => closure_1_0(applied_tags[25]).getAttachmentPayload(item, index));
              applicationId = 0;
            }
          } else {
            if (4 === tmp12) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                applicationId = 0;
                c9 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                closure_132_10 = value;
                applicationId = 0;
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_132_10 = value;
            }
            name(appliedTags[21]).clearDraft(closure_0.id, DraftType.ThreadSettings);
            const obj2 = name(appliedTags[21]);
            name(appliedTags[21]).clearDraft(closure_0.id, DraftType.FirstThreadMessage);
            const obj3 = name(appliedTags[21]);
            name(appliedTags[22]).clearAll(closure_0.id, DraftType.FirstThreadMessage);
            const obj4 = name(appliedTags[22]);
            const obj17 = { guildId: closure_0.guild_id, channelId: closure_0.id, postId: closure_132_10.id, applicationId, voiceChatEnabled };
            const result1 = closure_0(appliedTags[27]).trackForumPostCreated(obj17);
            if (null != closure_132_2.message.application_id) {
              const obj18 = { location: constants5.THREAD_CREATION, invite_type: constants3.APPLICATION, application_id: closure_132_2.message.application_id, guild_id: closure_0.getGuildId(), channel_id: closure_132_10.id, message_id: closure_132_10.id };
              name(appliedTags[28]).trackWithMetadata(constants2.INVITE_SENT, obj18);
              const obj20 = name(appliedTags[28]);
            }
            if (closure_4 != null) {
              tmp38(closure_132_10);
            }
            c9 = 3;
            const obj19 = { value: closure_132_10, done: true };
            return obj19;
          }
          applicationId = 0;
          c9 = 3;
          const obj21 = { value, done: true };
          return obj21;
        } catch (tmp101) {
          closure_6 = tmp101;
          if (tmp7 === applicationId) {
            c9 = tmp3;
            throw tmp101;
          } else if (tmp2 === tmp103) {
            voiceChatEnabled = tmp2;
          } else {
            voiceChatEnabled = tmp;
          }
        }
      }
    })();
  });
  const fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[0] = activityAction;
  cResult[1] = analyticsLocations;
  cResult[2] = applicationId;
  cResult[3] = appliedTags;
  cResult[4] = name;
  cResult[5] = onThreadCreated;
  cResult[6] = parentChannel;
  cResult[7] = upload;
  cResult[8] = voiceChatEnabled;
  cResult[9] = fn;
  tmp2 = fn;
}) : ((parentChannel) => {
  parentChannel = parentChannel.parentChannel;
  let name = parentChannel.name;
  const appliedTags = parentChannel.appliedTags;
  let analyticsLocations = parentChannel.analyticsLocations;
  const onThreadCreated = parentChannel.onThreadCreated;
  const upload = parentChannel.upload;
  const activityAction = parentChannel.activityAction;
  let applicationId = parentChannel.applicationId;
  let voiceChatEnabled = parentChannel.voiceChatEnabled;
  closure_0 = onThreadCreated((arg0, name, applied_tags) => {
    closure_0 = arg0;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0, value, arg2) {
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp11 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj6 = { value, done: true };
          return obj6;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === voiceChatEnabled) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_4 = tmp9;
              let tmp83 = closure_0;
              let uploaderFile;
              closure_132_1 = undefined;
              closure_132_2 = undefined;
              closure_132_3 = undefined;
              closure_132_4 = undefined;
              closure_132_5 = undefined;
              closure_132_6 = undefined;
              let file;
              let code2;
              let reason;
              closure_132_10 = function createThread() {
                return createThread_(closure_0, body, closure_1_0, () => {
                  const HTTP = closure_0(url[20]).HTTP;
                  const request = { url, body, rejectWithError: closure_0(url[20]).rejectWithMigratedError() };
                  return HTTP.post(request);
                });
              };
              let num10 = 0;
              if (tmp127[0]) {
                num10 = closure_0(appliedTags[24]).addFlag(0, constants4.SUPPRESS_NOTIFICATIONS);
                tmp83 = tmp128;
                const obj13 = closure_0(appliedTags[24]);
              }
              tmp127 = analyticsLocations(name(appliedTags[23])(closure_0), 2);
              const autoArchiveDuration = closure_0(appliedTags[18]).getAutoArchiveDuration(closure_0, null);
              closure_132_2 = closure_2_17.CHANNEL_THREADS(closure_0.id) + "?use_nested_fields=true";
              const obj8 = { name, auto_archive_duration: autoArchiveDuration, applied_tags, message: null };
              const obj9 = { content: tmp83, sticker_ids: name, flags: null };
              let tmp92;
              if (0 !== num10) {
                tmp92 = num10;
              }
              obj9.flags = tmp92;
              obj8.message = obj9;
              closure_132_3 = obj8;
              let tmp94 = null;
              if (null != closure_6) {
                tmp94 = buildMessageActivity(tmp93);
              }
              closure_132_4 = tmp94;
              let tmp96 = null != tmp94;
              if (tmp96) {
                tmp96 = null != tmp93;
              }
              if (tmp96) {
                obj8.message.application_id = tmp93.activity.application_id;
                obj8.message.activity = tmp94;
              }
              if (null != applied_tags) {
                if (applied_tags.length > 0) {
                  applicationId = 1;
                  voiceChatEnabled = 3;
                  c9 = 1;
                  const obj10 = { value: tmp6(applied_tags), done: false };
                  return obj10;
                }
              }
              applicationId = 2;
              closure_132_10();
              voiceChatEnabled = 4;
              c9 = 1;
              const obj14 = closure_0(appliedTags[18]);
            }
          } else if (1 === tmp12) {
            applicationId = 0;
            closure_132_11 = closure_6;
            closure_132_6 = closure_132_11;
            file = closure_132_6.file;
            code2 = closure_132_6.code;
            reason = closure_132_6.reason;
            const obj12 = { file, guildId: closure_0.getGuildId(), analyticsLocations: null, code: null, reason: null };
            if (analyticsLocations == null) {
              analyticsLocations = [];
            }
            obj12.analyticsLocations = analyticsLocations;
            obj12.code = code2;
            obj12.reason = reason;
            const result = closure_0(appliedTags[26]).handleUploadMessageAttachmentsErrors(obj12);
            throw closure_132_11;
          } else if (2 === tmp12) {
            applicationId = 0;
            closure_132_12 = closure_6;
            let code;
            if (closure_132_12 != null) {
              const body = closure_132_12.body;
              if (body != null) {
                code = body.code;
              }
            }
            if (code === constants.UNKNOWN_SESSION) {
              if (null != closure_132_4) {
                const message = closure_132_3.message;
                delete tmp8[tmp5];
                const message2 = closure_132_3.message;
                delete tmp8[tmp4];
                voiceChatEnabled = 5;
                c9 = 1;
                const obj15 = { value: closure_132_10(), done: false };
                return obj15;
              }
            }
            throw closure_132_12;
          } else if (3 === tmp12) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_132_5 = value;
              uploaderFile = closure_132_5.uploaderFile;
              const files = closure_132_5.files;
              closure_132_3.message.attachments = files.map((item, index) => closure_1_0(applied_tags[25]).getAttachmentPayload(item, index));
              applicationId = 0;
            }
          } else {
            if (4 === tmp12) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                applicationId = 0;
                c9 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                closure_132_1 = value;
                applicationId = 0;
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_132_1 = value;
            }
            name(appliedTags[21]).clearDraft(closure_0.id, DraftType.ThreadSettings);
            const obj2 = name(appliedTags[21]);
            name(appliedTags[21]).clearDraft(closure_0.id, DraftType.FirstThreadMessage);
            const obj3 = name(appliedTags[21]);
            name(appliedTags[22]).clearAll(closure_0.id, DraftType.FirstThreadMessage);
            const obj4 = name(appliedTags[22]);
            const obj17 = { guildId: closure_0.guild_id, channelId: closure_0.id, postId: closure_132_1.id, applicationId, voiceChatEnabled };
            const result1 = closure_0(appliedTags[27]).trackForumPostCreated(obj17);
            if (null != closure_132_3.message.application_id) {
              const obj18 = { location: constants5.THREAD_CREATION, invite_type: constants3.APPLICATION, application_id: closure_132_3.message.application_id, guild_id: closure_0.getGuildId(), channel_id: closure_132_1.id, message_id: closure_132_1.id };
              name(appliedTags[28]).trackWithMetadata(constants2.INVITE_SENT, obj18);
              const obj20 = name(appliedTags[28]);
            }
            if (closure_4 != null) {
              tmp38(closure_132_1);
            }
            c9 = 3;
            const obj19 = { value: closure_132_1, done: true };
            return obj19;
          }
          applicationId = 0;
          c9 = 3;
          const obj21 = { value, done: true };
          return obj21;
        } catch (tmp101) {
          closure_6 = tmp101;
          if (tmp7 === applicationId) {
            c9 = tmp3;
            throw tmp101;
          } else if (tmp2 === tmp103) {
            voiceChatEnabled = tmp2;
          } else {
            voiceChatEnabled = tmp;
          }
        }
      }
    })();
  });
  const items = [parentChannel, name, appliedTags, onThreadCreated, analyticsLocations, upload, activityAction, voiceChatEnabled, applicationId];
  return upload.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
});