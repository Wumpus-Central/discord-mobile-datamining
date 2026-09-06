// discord_app/modules/threads/ThreadCreationHooks.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ThreadHooks from "ThreadHooks.tsx";
import MessageParserDefault from "../messages/MessageParser.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import ForumActivePostStore from "../forums/ForumActivePostStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import DraftStore from "../../stores/DraftStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";

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
    const tmp17 = importDefault;
    const str4 = MessageParserDefault.unparse(str3, stateFromStores.id, true);
    const tmp17Result = tmp17(7274);
    let str7 = tmp17(7274)(str4.split("\n")[0], true).replace(/^[ #-]+/, "");
    const items = [];
    const match = str7.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
    while (null != match) {
      if (null == match.index) {
        break;
      } else {
        items.push(str7.substring(0, match.index));
        let arr = items.push(match[0]);
        str7 = str7.substring(match.index + match[0].length);
        continue;
      }
    }
    items.push(str7);
    const first1 = items[0];
    let num4 = 1;
    let tmp12 = first1;
    let arr1 = first1;
    if (1 < items.length) {
      const sum = tmp12 + items[num4];
      arr1 = tmp12;
      while (sum.length <= 40) {
        num4 = num4 + 1;
        tmp12 = sum;
        arr1 = sum;
        if (num4 >= items.length) {
          break;
        }
      }
    }
    let text2 = arr1;
    if (arr1.length > 40) {
      text2 = `${arr2.substring(0, 40)}...`;
    }
    return text2;
  }
}
function createThread_() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_27 = async function _createThread_(arg0, arg1, arg2, arg3) {
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
      if (code === closure_135_15.TOO_MANY_THREADS) {
        const intl9 = closure_135_0(closure_135_2[15]).intl;
        const string2 = intl9.string;
        const t2 = closure_135_0(closure_135_2[15]).t;
        if (closure_134_4) {
          let string2Result = string2(t2.vWNFkx);
        } else {
          string2Result = string2(t2["1KEdvB"]);
        }
        let obj2 = { title: string2Result, body: null };
        const intl10 = closure_135_0(closure_135_2[15]).intl;
        const string3 = intl10.string;
        let KGaiEK = closure_135_0(closure_135_2[15]).t;
        if (closure_134_4) {
          KGaiEK = KGaiEK.KGaiEK;
          let string3Result = string3(KGaiEK);
        } else {
          string3Result = string3(KGaiEK.P0wT5S);
        }
        obj2.body = string3Result;
        obj2 = closure_135_1(closure_135_2[28]).show(obj2);
        closure_135_1(closure_135_2[28]);
      } else {
        const body7 = closure_134_8.body;
        let code1;
        if (body7 != null) {
          code1 = body7.code;
        }
        if (code1 === closure_135_15.TOO_MANY_ANNOUNCEMENT_THREADS) {
          const obj3 = { title: null, body: null };
          const intl7 = closure_135_0(closure_135_2[15]).intl;
          obj3.title = intl7.string(closure_135_0(closure_135_2[15]).t["1KEdvB"]);
          const intl8 = closure_135_0(closure_135_2[15]).intl;
          obj3.body = intl8.string(closure_135_0(closure_135_2[15]).t.jDMxz2);
          closure_135_1(closure_135_2[28]).show(obj3);
          closure_135_1(closure_135_2[28]);
        } else {
          const body8 = closure_134_8.body;
          let code2;
          if (body8 != null) {
            code2 = body8.code;
          }
          if (code2 === closure_135_15.SLOWMODE_RATE_LIMITED) {
            const retry_after = closure_134_8.body.retry_after;
            c4 = retry_after;
            if (retry_after == null) {
              c4 = 0;
            }
            closure_134_5 = c4;
            if (closure_134_5 > 0) {
              let obj4 = {
                type: "SLOWMODE_SET_COOLDOWN",
                channelId: closure_134_0.id,
                slowmodeType: closure_135_12.CreateThread,
                cooldownMs: closure_134_5 * closure_135_1(closure_135_2[31]).Millis.SECOND,
              };
              closure_135_1(closure_135_2[29]).dispatch(obj4);
              closure_135_1(closure_135_2[29]);
            }
          } else if (429 === closure_134_8.status) {
            let obj13 = closure_135_1(closure_135_2[28]);
            const intl5 = closure_135_0(closure_135_2[15]).intl;
            const string = intl5.string;
            const t = closure_135_0(closure_135_2[15]).t;
            if (closure_134_4) {
              let stringResult = string(t.vWNFkx);
            } else {
              stringResult = string(t["1KEdvB"]);
            }
            const obj5 = { title: stringResult, body: null };
            const intl6 = closure_135_0(closure_135_2[15]).intl;
            obj5.body = intl6.string(closure_135_0(closure_135_2[15]).t.Whhv4w);
            obj13.show(obj5);
          } else {
            const body9 = closure_134_8.body;
            let code3;
            if (body9 != null) {
              code3 = body9.code;
            }
            if (closure_135_13.has(code3)) {
              throw tmp47;
            } else {
              const body2 = tmp47.body;
              let code4;
              if (body2 != null) {
                code4 = body2.code;
              }
              if (code4 === closure_135_15.INVALID_FORM_BODY) {
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
              if (closure_135_14.has(code5)) {
                if (null == closure_134_2) {
                  new Promise((arg0, fn) => {
                    closure_0 = arg0;
                    closure_1 = fn;
                    if (null == closure_1_8.body) {
                      fn();
                    }
                    const result = andDeleteMostRecentUserCreatedThreadId.addConditionalChangeListener(() => {
                      andDeleteMostRecentUserCreatedThreadId =
                        andDeleteMostRecentUserCreatedThreadId.getAndDeleteMostRecentUserCreatedThreadId();
                      if (null != andDeleteMostRecentUserCreatedThreadId) {
                        const channel2 = channel.getChannel(andDeleteMostRecentUserCreatedThreadId);
                        closure_1(closure_1_2[29]).wait(() => {
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
                  const body10 = closure_134_8.body;
                  let code6;
                  if (body10 != null) {
                    code6 = body10.code;
                  }
                  if (code6 !== closure_135_15.EXPLICIT_CONTENT) {
                    const obj6 = {
                      file: closure_134_2,
                      guildId: closure_134_0.getGuildId(),
                      analyticsLocations: null,
                      code: null,
                      reason: null,
                    };
                    analyticsLocations = closure_134_1;
                    if (closure_134_1 == null) {
                      analyticsLocations = [];
                    }
                    obj6.analyticsLocations = analyticsLocations;
                    const body5 = closure_134_8.body;
                    let code7;
                    if (body5 != null) {
                      code7 = body5.code;
                    }
                    obj6.code = code7;
                    const body6 = closure_134_8.body;
                    let reason;
                    if (body6 != null) {
                      reason = body6.reason;
                    }
                    obj6.reason = reason;
                    let result = closure_135_0(closure_135_2[24]).handleUploadMessageAttachmentsErrors(obj6);
                    closure_135_0(closure_135_2[24]);
                  }
                }
                let obj10 = closure_135_0(closure_135_2[32]);
                closure_134_6 = obj10.createNonce();
                let tmp89 = null != closure_134_8.body.attachments;
                if (tmp89) {
                  tmp89 = closure_134_8.body.attachments.length > 0;
                }
                if (tmp89) {
                  let obj11 = closure_135_1(closure_135_2[29]);
                  obj11.dispatch({
                    type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                    messageId: closure_134_6,
                    channelId: closure_134_0.id,
                    attachments: closure_134_8.body.attachments,
                  });
                  closure_135_1(closure_135_2[33])(closure_134_0.id, closure_134_6);
                }
              } else {
                closure_135_1(closure_135_2[28]);
                const obj8 = { title: null, body: null };
                const intl3 = closure_135_0(closure_135_2[15]).intl;
                obj8.title = intl3.string(closure_135_0(closure_135_2[15]).t.j2d6Km);
                const intl4 = closure_135_0(closure_135_2[15]).intl;
                obj8.body = intl4.string(closure_135_0(closure_135_2[15]).t.fEptJP);
                obj8.show(obj8);
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
              closure_2_1(closure_2_2[29]).wait(() => {
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
        obj4 = closure_135_1(closure_135_2[27]);
        obj10 = { channelId: closure_134_7.id, limit: closure_135_20 };
        c10 = 5;
        c11 = 1;
        obj11 = { value: obj4.fetchMessages(obj10), done: false };
        return obj11;
      }
    } else if (3 === tmp9) {
      if (arg0 === 1) {
        c11 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_134_3 = value;
        if (null == value.body) {
          const obj12 = { title: null, body: null };
          const intl = closure_135_0(closure_135_2[15]).intl;
          obj12.title = intl.string(closure_135_0(closure_135_2[15]).t.j2d6Km);
          const intl2 = closure_135_0(closure_135_2[15]).intl;
          obj12.body = intl2.string(closure_135_0(closure_135_2[15]).t.fEptJP);
          closure_135_1(closure_135_2[28]).show(obj12);
          closure_135_1(closure_135_2[28]);
        } else {
          obj13 = {
            type: "SLOWMODE_RESET_COOLDOWN",
            slowmodeType: closure_135_12.CreateThread,
            channelId: closure_134_0.id,
          };
          closure_135_1(closure_135_2[29]).dispatch(obj13);
          closure_135_1(closure_135_2[29]);
          closure_135_1(closure_135_2[29]).dispatch({ type: "THREAD_CREATE_LOCAL", channelId: closure_134_3.body.id });
          const AccessibilityAnnouncer = closure_135_0(closure_135_2[30]).AccessibilityAnnouncer;
          const intl11 = closure_135_0(closure_135_2[15]).intl;
          const t3 = closure_135_0(closure_135_2[15]).t;
          if (closure_134_4) {
            let XkUoBb = t3.zDAG2N;
          } else {
            XkUoBb = t3.XkUoBb;
          }
          AccessibilityAnnouncer.announce(intl11.string(XkUoBb));
          closure_135_1(closure_135_2[29]);
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
const DraftType = fn(4901).DraftType;
const SlowmodeType = fn(7687).SlowmodeType;
const ThreadConstants = fn(1113);
({ FORUM_POST_CREATION_AUTOMOD_ERRORS: map1, FORUM_POST_CREATION_UPLOAD_ERRORS: closure_14 } = ThreadConstants);
const Constants = fn(1074);
({
  AbortCodes: closure_15,
  AnalyticEvents: closure_16,
  ChannelTypes: closure_17,
  Endpoints: closure_18,
  LoggingInviteTypes: closure_19,
  MAX_MESSAGES_PER_CHANNEL: closure_20,
  MessageFlags: closure_21,
} = Constants);
const MessageSendLocation = fn(4553).MessageSendLocation;
const PrivateThreadMode = {
  Disabled: 1,
  [1]: "Disabled",
  Enabled: 2,
  [2]: "Enabled",
  PrivateOnly: 3,
  [3]: "PrivateOnly",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadCreationHooks.tsx");

export { PrivateThreadMode };
export const usePrivateThreadMode = function usePrivateThreadMode(parentChannel) {
  obj = ThreadHooks;
  const canStartPublicThread = obj.useCanStartPublicThread(parentChannel);
  if (!obj2.useCanStartPrivateThread(parentChannel)) {
    return tmp2.Disabled;
  }
};
export { getIsPrivate };
export { getDefaultThreadName };
export const useCreateThreadCommon = function useCreateThreadCommon(parentChannel) {
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
    return (function* (arg0, value, arg2) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
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
              let draft2;
              closure_132_8 = undefined;
              closure_132_9 = undefined;
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
                    const intl = closure_0(threadSettings[15]).intl;
                    stringResult = intl.string(closure_0(threadSettings[15]).t["7Xm5QI"]);
                  }
                  closure_132_4 = stringResult;
                }
              }
              autoArchiveDuration = closure_0(threadSettings[16]).getAutoArchiveDuration(closure_0);
              let obj4 = closure_0(threadSettings[16]);
              channel2 = channel.getChannel(parentMessageId(threadSettings[17]).castMessageIdAsChannelId(closure_1));
              draft2 = draft.getDraft(closure_0.id, DraftType.FirstThreadMessage);
              c6 = 1;
              c7 = 1;
              let obj1 = {
                value: createThread_(closure_0, [], undefined, () => {
                  if (null != closure_1) {
                    let result = closure_3_18.CHANNEL_MESSAGE_THREADS(closure_0.id, tmp);
                    let tmp3 = closure_0;
                  } else {
                    tmp3 = closure_0;
                    result = closure_3_18.CHANNEL_THREADS(closure_0.id);
                  }
                  const HTTP = closure_0(threadSettings[18]).HTTP;
                  const request = { url: result, body: null, rejectWithError: null };
                  const body = { name, type: null, auto_archive_duration: null, location: null };
                  if (closure_1_3) {
                    let PRIVATE_THREAD = constants.PRIVATE_THREAD;
                  } else {
                    PRIVATE_THREAD =
                      tmp3.type === constants.GUILD_ANNOUNCEMENT ? tmp9.ANNOUNCEMENT_THREAD : tmp9.PUBLIC_THREAD;
                  }
                  body.type = PRIVATE_THREAD;
                  body.auto_archive_duration = auto_archive_duration;
                  body.location = location;
                  request.body = body;
                  request.rejectWithError = closure_0(threadSettings[18]).rejectWithMigratedError();
                  return HTTP.post(request);
                }),
                done: false,
              };
              return obj1;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_132_8 = value;
            if (closure_132_8 !== channel2) {
              closure_132_9 = draft2.trim();
              parentMessageId(threadSettings[19]).clearDraft(closure_0.id, DraftType.ThreadSettings);
              const obj9 = parentMessageId(threadSettings[19]);
              parentMessageId(threadSettings[19]).clearDraft(closure_0.id, DraftType.FirstThreadMessage);
              let tmp10 = "" !== closure_132_9;
              if (tmp10) {
                tmp10 = closure_132_9 !== closure_132_0.trim();
              }
              if (tmp10) {
                obj = parentMessageId(threadSettings[19]);
                obj.saveDraft(closure_132_8.id, draft2, DraftType.ChannelMessage);
              }
              if (auto_archive_duration != null) {
                tmp20(closure_132_8);
              }
              (function sendMessage(id, arg1, items1, arg3, c7) {
                if (null != c7) {
                  if (null != arg3) {
                    if (arg3.length > 0) {
                      c7(id, arg3, arg1, items1);
                    }
                  }
                }
                if (null != items1) {
                  if (items1.length > 0) {
                    const obj4 = closure_1_1(7456);
                    id = id.id;
                    obj = { location: constants.THREAD_CREATION };
                    let sendStickersResult = obj4.sendStickers(id, items1, closure_1_1(7682).parse(id, arg1), obj);
                    const obj5 = closure_1_1(7682);
                  }
                  return sendStickersResult;
                }
                closure_1_1(7456);
                obj = { location: constants.THREAD_CREATION };
                sendStickersResult = obj.sendMessage(id.id, closure_1_1(7682).parse(id, arg1), undefined, obj);
              })(closure_132_8, closure_132_0, closure_132_1, closure_132_2, c7);
              const obj10 = parentMessageId(threadSettings[19]);
            }
            obj1 = parentMessageId(threadSettings[20]);
            obj1.clearAll(closure_0.id, DraftType.FirstThreadMessage);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp60) {
          c7 = tmp;
          throw tmp60;
        }
      }
    })();
  });
  const items = [
    parentChannel,
    parentMessageId,
    threadSettings,
    onThreadCreated,
    privateThreadMode,
    _location,
    useDefaultThreadName,
    uploadHandler,
  ];
  return onThreadCreated.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
};
export const createThread = function createThread(arg0, name, PUBLIC_THREAD, autoArchiveDuration, _location) {
  const id = arg0;
  const type = PUBLIC_THREAD;
  const auto_archive_duration = autoArchiveDuration;
  return createThread_(arg0, [], undefined, () => {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: collapsedCategories.CHANNEL_THREADS(id.id),
      body: null,
      rejectWithError: HTTPUtils.rejectWithMigratedError(),
    };
    const body = { name, type, auto_archive_duration, location: _location };
    request.body = body;
    return HTTP.post(request);
  });
};
export const useCreateForumPostCommon = function useCreateForumPostCommon(parentChannel) {
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
    return (function* (arg0, value, arg2) {
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_4 = tmp5;
              let uploaderFile;
              closure_132_1 = undefined;
              closure_132_2 = undefined;
              closure_132_3 = undefined;
              closure_132_4 = undefined;
              let file;
              let code;
              let reason;
              closure_132_8 = undefined;
              let num7 = 0;
              let tmp41 = closure_0;
              if (tmp111[0]) {
                let obj5 = closure_0(appliedTags[22]);
                num7 = obj5.addFlag(0, constants3.SUPPRESS_NOTIFICATIONS);
                tmp41 = tmp112;
              }
              let obj6 = closure_0(appliedTags[16]);
              const autoArchiveDuration = obj6.getAutoArchiveDuration(closure_0, null);
              closure_132_1 = closure_2_18.CHANNEL_THREADS(closure_0.id) + "?use_nested_fields=true";
              const obj1 = { name, auto_archive_duration: autoArchiveDuration, applied_tags, message: null };
              const obj2 = { content: tmp41, sticker_ids: name, flags: null };
              let tmp50;
              if (0 !== num7) {
                tmp50 = num7;
              }
              obj2.flags = tmp50;
              obj1.message = obj2;
              closure_132_2 = obj1;
              let tmp52 = null;
              if (null != closure_6) {
                tmp52 = (function buildMessageActivity(activity) {
                  let session_id = activity.activity.session_id;
                  if (null == session_id) {
                    session_id = sessionId.getSessionId();
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
                })(tmp51);
              }
              let tmp53 = null != tmp52;
              if (tmp53) {
                tmp53 = null != tmp51;
              }
              if (tmp53) {
                obj1.message.application_id = tmp51.activity.application_id;
                obj1.message.activity = tmp52;
              }
              if (null != applied_tags) {
                if (arr2.length > 0) {
                  applicationId = 1;
                  voiceChatEnabled = 3;
                  c9 = 1;
                  let obj3 = { value: tmp3(arr2), done: false };
                  return obj3;
                }
              }
              createThread_(closure_0, analyticsLocations, uploaderFile, () => {
                const HTTP = closure_0(body[18]).HTTP;
                const request = { url, body, rejectWithError: closure_0(body[18]).rejectWithMigratedError() };
                return HTTP.post(request);
              });
              voiceChatEnabled = 2;
              c9 = 1;
              tmp111 = analyticsLocations(name(appliedTags[21])(closure_0), 2);
            }
          } else if (1 === tmp8) {
            applicationId = 0;
            closure_132_9 = closure_6;
            closure_132_4 = closure_132_9;
            file = closure_132_4.file;
            code = closure_132_4.code;
            reason = closure_132_4.reason;
            obj3 = closure_0(appliedTags[24]);
            const obj4 = { file, guildId: closure_0.getGuildId(), analyticsLocations: null, code: null, reason: null };
            if (analyticsLocations == null) {
              analyticsLocations = [];
            }
            obj4.analyticsLocations = analyticsLocations;
            obj4.code = code;
            obj4.reason = reason;
            const result = obj3.handleUploadMessageAttachmentsErrors(obj4);
            throw closure_132_9;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              obj5 = { value, done: true };
              return obj5;
            } else {
              closure_132_8 = value;
              name(appliedTags[19]).clearDraft(closure_0.id, DraftType.ThreadSettings);
              const obj13 = name(appliedTags[19]);
              name(appliedTags[19]).clearDraft(closure_0.id, DraftType.FirstThreadMessage);
              const obj14 = name(appliedTags[19]);
              name(appliedTags[20]).clearAll(closure_0.id, DraftType.FirstThreadMessage);
              const obj15 = name(appliedTags[20]);
              obj6 = {
                guildId: closure_0.guild_id,
                channelId: closure_0.id,
                postId: closure_132_8.id,
                applicationId,
                voiceChatEnabled,
              };
              const result1 = closure_0(appliedTags[25]).trackForumPostCreated(obj6);
              if (null != closure_132_2.message.application_id) {
                const obj7 = {
                  location: constants4.THREAD_CREATION,
                  invite_type: constants2.APPLICATION,
                  application_id: closure_132_2.message.application_id,
                  guild_id: closure_0.getGuildId(),
                  channel_id: closure_132_8.id,
                  message_id: closure_132_8.id,
                };
                name(appliedTags[26]).trackWithMetadata(constants.INVITE_SENT, obj7);
                const obj18 = name(appliedTags[26]);
              }
              if (closure_4 != null) {
                tmp14(closure_132_8);
              }
              c9 = 3;
              const obj8 = { value: closure_132_8, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_132_3 = value;
            uploaderFile = closure_132_3.uploaderFile;
            const files = closure_132_3.files;
            closure_132_2.message.attachments = files.map((item, index) =>
              closure_1_0(body[23]).getAttachmentPayload(item, index),
            );
            applicationId = 0;
          }
          applicationId = 0;
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp62) {
          closure_6 = tmp62;
          if (tmp4 === applicationId) {
            c9 = tmp2;
            throw tmp62;
          } else {
            voiceChatEnabled = tmp;
          }
        }
      }
    })();
  });
  const items = [
    parentChannel,
    name,
    appliedTags,
    onThreadCreated,
    analyticsLocations,
    upload,
    activityAction,
    voiceChatEnabled,
    applicationId,
  ];
  return upload.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
};
