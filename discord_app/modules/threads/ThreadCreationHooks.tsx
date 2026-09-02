// discord_app/modules/threads/ThreadCreationHooks.tsx
import useCanStartPrivateThread from "ThreadHooks.tsx";
import rebuildDefault from "../messages/MessageParser.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../_runtime/00019_noop.js";
import closure_6 from "../forums/ForumActivePostStore.tsx";
import closure_7 from "../../stores/AuthenticationStore.tsx";
import closure_8 from "../../stores/ChannelStore.tsx";
import closure_9 from "../../stores/DraftStore.tsx";
import { DraftType } from "../../stores/DraftStore.tsx";
import closure_11 from "../../stores/MessageStore.tsx";
import { SlowmodeType } from "../../stores/SlowmodeStore.tsx";
import AbortCodes from "ThreadConstants.tsx";
import ME from "../../Constants.tsx";
import { MessageSendLocation } from "../messages/MessageConstants.tsx";

require = arg1;
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
    message = message.getMessage(stateFromStores.id, parentMessageId);
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
    obj = rebuildDefault;
    const tmp17 = importDefault;
    const str4 = rebuildDefault.unparse(str3, stateFromStores.id, true);
    const tmp17Result = tmp17(6129);
    let str7 = tmp17(6129)(str4.split("\n")[0], true).replace(/^[ #-]+/, "");
    const items = [];
    const match = str7.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
    while (null != match) {
      if (null == match.index) {
        break;
      } else {
        let arr = items.push(str7.substring(0, match.index));
        arr = items.push(match[0]);
        str7 = str7.substring(match.index + match[0].length);
        continue;
      }
    }
    let arr1 = items.push(str7);
    const first1 = items[0];
    let num4 = 1;
    let tmp12 = first1;
    arr1 = first1;
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
function createThread_(channel, arg1, arg2, arg3) {
  const self = this;
  const apply = _createThread_.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createThread_() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c10 = 0;
    c11 = 0;
    c9 = 0;
    return (function*(arg0, body) {
      let id = tmp3;
      closure_6 = tmp6;
      let throwTypeErrorResult = lib;
      throwTypeErrorResult = callback;
      throwTypeErrorResult = dependencyMap;
      throwTypeErrorResult = lib2;
      c4 = lib.isForumLikeChannel();
      c9 = 1;
      yield lib2();
      if (1 === tmp9) {
        c9 = 0;
        body = throwTypeErrorResult.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        if (code === constants.TOO_MANY_THREADS) {
          throwTypeErrorResult = closure_6;
          throwTypeErrorResult = id;
          throwTypeErrorResult = callback;
          throwTypeErrorResult = dependencyMap;
          throwTypeErrorResult = c4;
          throwTypeErrorResult = id;
          throwTypeErrorResult = lib;
          throwTypeErrorResult = dependencyMap;
          const intl9 = lib(1233).intl;
          const string2 = intl9.string;
          throwTypeErrorResult = lib;
          throwTypeErrorResult = dependencyMap;
          const t2 = lib(1233).t;
          if (c4) {
            throwTypeErrorResult = string2(t2.vWNFkx);
          } else {
            throwTypeErrorResult = string2(t2["1KEdvB"]);
          }
          let obj2 = { title: null, body: null };
          throwTypeErrorResult = closure_6;
          obj2[0] = throwTypeErrorResult;
          throwTypeErrorResult = c4;
          throwTypeErrorResult = id;
          throwTypeErrorResult = lib;
          throwTypeErrorResult = dependencyMap;
          const intl10 = lib(1233).intl;
          const string3 = intl10.string;
          throwTypeErrorResult = lib;
          throwTypeErrorResult = dependencyMap;
          let KGaiEK = lib(1233).t;
          if (c4) {
            KGaiEK = KGaiEK.KGaiEK;
            throwTypeErrorResult = string3(KGaiEK);
          } else {
            throwTypeErrorResult = string3(KGaiEK.P0wT5S);
          }
          obj2[1] = throwTypeErrorResult;
          obj2 = callback(4857).show(obj2);
          const obj18 = callback(4857);
        } else {
          throwTypeErrorResult = closure_6;
          const body7 = throwTypeErrorResult.body;
          let code1;
          if (body7 != null) {
            code1 = body7.code;
          }
          if (code1 === constants.TOO_MANY_ANNOUNCEMENT_THREADS) {
            throwTypeErrorResult = id;
            throwTypeErrorResult = callback;
            throwTypeErrorResult = dependencyMap;
            const obj15 = callback(4857);
            const obj3 = { title: null, body: null };
            throwTypeErrorResult = lib;
            throwTypeErrorResult = dependencyMap;
            const intl7 = lib(1233).intl;
            throwTypeErrorResult = lib;
            throwTypeErrorResult = dependencyMap;
            obj3[0] = intl7.string(lib(1233).t["1KEdvB"]);
            throwTypeErrorResult = lib;
            throwTypeErrorResult = dependencyMap;
            const intl8 = lib(1233).intl;
            throwTypeErrorResult = lib;
            throwTypeErrorResult = dependencyMap;
            obj3[1] = intl8.string(lib(1233).t.jDMxz2);
            throwTypeErrorResult = obj15.show(obj3);
          } else {
            throwTypeErrorResult = closure_6;
            const body8 = throwTypeErrorResult.body;
            let code2;
            if (body8 != null) {
              code2 = body8.code;
            }
            if (code2 === constants.SLOWMODE_RATE_LIMITED) {
              throwTypeErrorResult = closure_6;
              const retry_after = throwTypeErrorResult.body.retry_after;
              c4 = retry_after;
              if (retry_after == null) {
                c4 = 0;
              }
              throwTypeErrorResult = closure_6;
              throwTypeErrorResult = c4;
              closure_5 = c4;
              throwTypeErrorResult = closure_5;
              if (closure_5 > 0) {
                throwTypeErrorResult = closure_6;
                throwTypeErrorResult = id;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                let obj4 = { type: "SLOWMODE_SET_COOLDOWN", channelId: null, slowmodeType: null, cooldownMs: null };
                throwTypeErrorResult = lib;
                obj4[1] = lib.id;
                throwTypeErrorResult = closure_12;
                obj4[2] = closure_12.CreateThread;
                throwTypeErrorResult = closure_5;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                obj4[3] = closure_5 * callback(684).Millis.SECOND;
                throwTypeErrorResult = callback(706).dispatch(obj4);
                const obj29 = callback(706);
              }
            } else {
              throwTypeErrorResult = closure_6;
              if (429 === throwTypeErrorResult.status) {
                throwTypeErrorResult = closure_6;
                throwTypeErrorResult = id;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                let obj13 = callback(4857);
                throwTypeErrorResult = c4;
                throwTypeErrorResult = id;
                throwTypeErrorResult = lib;
                throwTypeErrorResult = dependencyMap;
                const intl5 = lib(1233).intl;
                const string = intl5.string;
                throwTypeErrorResult = lib;
                throwTypeErrorResult = dependencyMap;
                const t = lib(1233).t;
                if (c4) {
                  throwTypeErrorResult = string(t.vWNFkx);
                } else {
                  throwTypeErrorResult = string(t["1KEdvB"]);
                }
                const obj5 = { title: null, body: null };
                throwTypeErrorResult = id;
                obj5[0] = throwTypeErrorResult;
                throwTypeErrorResult = lib;
                throwTypeErrorResult = dependencyMap;
                const intl6 = lib(1233).intl;
                throwTypeErrorResult = lib;
                throwTypeErrorResult = dependencyMap;
                obj5[1] = intl6.string(lib(1233).t.Whhv4w);
                throwTypeErrorResult = obj13.show(obj5);
              } else {
                throwTypeErrorResult = closure_6;
                throwTypeErrorResult = id;
                const body9 = throwTypeErrorResult.body;
                let code3;
                throwTypeErrorResult = set;
                if (body9 != null) {
                  code3 = body9.code;
                }
                if (set.has(code3)) {
                  throw tmp47;
                } else {
                  const body2 = tmp47.body;
                  let code4;
                  if (body2 != null) {
                    code4 = body2.code;
                  }
                  if (code4 === constants.INVALID_FORM_BODY) {
                    const body3 = throwTypeErrorResult.body;
                    let name;
                    if (body3 != null) {
                      const errors = body3.errors;
                      if (errors != null) {
                        name = errors.name;
                      }
                    }
                    if (null != name) {
                      throwTypeErrorResult = closure_6;
                      throw throwTypeErrorResult;
                    }
                  }
                  const body4 = throwTypeErrorResult.body;
                  let code5;
                  if (body4 != null) {
                    code5 = body4.code;
                  }
                  if (set2.has(code5)) {
                    if (null == dependencyMap) {
                      throwTypeErrorResult = closure_6;
                      throwTypeErrorResult = new.target;
                      throwTypeErrorResult = new.target;
                      throwTypeErrorResult = new Promise((arg0, arg1) => {
                        closure_0 = arg0;
                        closure_1 = arg1;
                        if (null == throwTypeErrorResult.body) {
                          arg1();
                        }
                        const result = closure_6.addConditionalChangeListener(() => {
                          const andDeleteMostRecentUserCreatedThreadId = closure_1_6.getAndDeleteMostRecentUserCreatedThreadId();
                          if (null != andDeleteMostRecentUserCreatedThreadId) {
                            const channel = closure_1_8.getChannel(andDeleteMostRecentUserCreatedThreadId);
                            callback(closure_1_2[29]).wait(() => { ... });
                            return false;
                          }
                        });
                      });
                      c11 = 3;
                    } else {
                      throwTypeErrorResult = closure_6;
                      const body10 = throwTypeErrorResult.body;
                      let code6;
                      if (body10 != null) {
                        code6 = body10.code;
                      }
                      if (code6 !== constants.EXPLICIT_CONTENT) {
                        throwTypeErrorResult = closure_6;
                        throwTypeErrorResult = id;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = dependencyMap;
                        const obj6 = { file: null, guildId: null, analyticsLocations: null, code: null, reason: null };
                        throwTypeErrorResult = dependencyMap;
                        obj6[0] = dependencyMap;
                        throwTypeErrorResult = lib;
                        obj6[1] = lib.getGuildId();
                        throwTypeErrorResult = callback;
                        closure_5 = callback;
                        if (callback == null) {
                          closure_5 = [];
                        }
                        obj6[2] = closure_5;
                        const body5 = throwTypeErrorResult.body;
                        let code7;
                        if (body5 != null) {
                          code7 = body5.code;
                        }
                        obj6[3] = code7;
                        const body6 = throwTypeErrorResult.body;
                        let reason;
                        if (body6 != null) {
                          reason = body6.reason;
                        }
                        obj6[4] = reason;
                        let result = lib(8173).handleUploadMessageAttachmentsErrors(obj6);
                        const obj27 = lib(8173);
                      }
                    }
                    let obj10 = lib(7508);
                    closure_6 = obj10.createNonce();
                    let tmp89 = null != throwTypeErrorResult.body.attachments;
                    if (tmp89) {
                      tmp89 = throwTypeErrorResult.body.attachments.length > 0;
                    }
                    if (tmp89) {
                      let obj11 = callback(706);
                      const obj7 = { type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE", messageId: null, channelId: null, attachments: null };
                      obj7[1] = closure_6;
                      obj7[2] = lib.id;
                      obj7[3] = throwTypeErrorResult.body.attachments;
                      obj11.dispatch(obj7);
                      throwTypeErrorResult = callback;
                      throwTypeErrorResult = dependencyMap;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = closure_6;
                      throwTypeErrorResult = callback(8404)(lib.id, closure_6);
                    }
                  } else {
                    let obj8 = callback(4857);
                    obj8 = { title: null, body: null };
                    const intl3 = lib(1233).intl;
                    obj8[0] = intl3.string(lib(1233).t.j2d6Km);
                    const intl4 = lib(1233).intl;
                    obj8[1] = intl4.string(lib(1233).t.fEptJP);
                    obj8.show(obj8);
                  }
                }
              }
            }
          }
          throwTypeErrorResult = closure_6;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = new.target;
          throwTypeErrorResult = new Promise((arg0, arg1) => {
            closure_0 = arg0;
            if (null == body.body) {
              arg1();
            }
            const result = throwTypeErrorResult.addConditionalChangeListener(() => {
              const channel = throwTypeErrorResult.getChannel(closure_1_3.body.id);
              if (null != channel) {
                callback(table[29]).wait(() => { ... });
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
          throw body;
        } else if (arg0 === 2) {
          c11 = 3;
          const obj9 = { value: null, done: true };
          obj9[0] = body;
          return obj9;
        } else {
          id = body;
          c9 = 2;
          obj4 = callback(7210);
          obj10 = { channelId: null, limit: null };
          obj10[0] = id.id;
          obj10[1] = closure_20;
          c10 = 5;
          c11 = 1;
          obj11 = { value: null, done: false };
          obj11[0] = obj4.fetchMessages(obj10);
          return obj11;
        }
      } else if (3 === tmp9) {
        if (arg0 === 1) {
          c11 = 3;
          throw body;
        } else if (arg0 !== 2) {
          throwTypeErrorResult = closure_6;
          lib2 = body;
          if (null == body.body) {
            obj1 = callback(4857);
            const obj12 = { title: null, body: null };
            const intl = lib(1233).intl;
            obj12[0] = intl.string(lib(1233).t.j2d6Km);
            const intl2 = lib(1233).intl;
            obj12[1] = intl2.string(lib(1233).t.fEptJP);
            obj1.show(obj12);
          } else {
            throwTypeErrorResult = closure_6;
            throwTypeErrorResult = id;
            throwTypeErrorResult = callback;
            throwTypeErrorResult = dependencyMap;
            obj13 = { type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: null, channelId: null };
            throwTypeErrorResult = closure_12;
            obj13[1] = closure_12.CreateThread;
            throwTypeErrorResult = lib;
            obj13[2] = lib.id;
            throwTypeErrorResult = callback(706).dispatch(obj13);
            throwTypeErrorResult = callback;
            throwTypeErrorResult = dependencyMap;
            const obj23 = callback(706);
            const obj14 = { type: "THREAD_CREATE_LOCAL", channelId: null };
            throwTypeErrorResult = lib2;
            obj14[1] = lib2.body.id;
            throwTypeErrorResult = callback(706).dispatch(obj14);
            throwTypeErrorResult = lib;
            throwTypeErrorResult = dependencyMap;
            const AccessibilityAnnouncer = lib(1362).AccessibilityAnnouncer;
            throwTypeErrorResult = lib;
            throwTypeErrorResult = dependencyMap;
            const intl11 = lib(1233).intl;
            throwTypeErrorResult = c4;
            throwTypeErrorResult = id;
            throwTypeErrorResult = lib;
            throwTypeErrorResult = dependencyMap;
            const t3 = lib(1233).t;
            if (c4) {
              let XkUoBb = t3.zDAG2N;
            } else {
              XkUoBb = t3.XkUoBb;
            }
            AccessibilityAnnouncer.announce(intl11.string(XkUoBb));
            const obj25 = callback(706);
          }
          c9 = 0;
        }
      } else {
        if (4 === tmp9) {
          c9 = 0;
          c11 = 3;
        } else if (arg0 === 1) {
          c11 = 3;
          throw body;
        } else if (arg0 !== 2) {
          c9 = 0;
        }
        c9 = 0;
        c11 = 3;
        obj = { value: null, done: true };
        obj[0] = body;
        return obj;
      }
      c9 = 0;
      return body;
    })();
  });
  closure_27 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ FORUM_POST_CREATION_AUTOMOD_ERRORS: map1, FORUM_POST_CREATION_UPLOAD_ERRORS: closure_14 } = AbortCodes);
({ AbortCodes: closure_15, AnalyticEvents: closure_16, ChannelTypes: closure_17, Endpoints: closure_18, LoggingInviteTypes: closure_19, MAX_MESSAGES_PER_CHANNEL: closure_20, MessageFlags: closure_21 } = ME);
let obj = { Disabled: 1, [1]: "Disabled", Enabled: 2, [2]: "Enabled", PrivateOnly: 3, [3]: "PrivateOnly" };
let result = require("set").fileFinishedImporting("modules/threads/ThreadCreationHooks.tsx");

export const PrivateThreadMode = obj;
export const usePrivateThreadMode = function usePrivateThreadMode(parentChannel) {
  obj = useCanStartPrivateThread;
  const canStartPublicThread = obj.useCanStartPublicThread(parentChannel);
  if (!obj2.useCanStartPrivateThread(parentChannel)) {
    return tmp2.Disabled;
  }
};
export { getIsPrivate };
export { getDefaultThreadName };
export const useCreateThreadCommon = function useCreateThreadCommon(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  closure_0 = parentChannel;
  const parentMessageId = parentChannel.parentMessageId;
  const threadSettings = parentChannel.threadSettings;
  const privateThreadMode = parentChannel.privateThreadMode;
  const _location = parentChannel.location;
  const onThreadCreated = parentChannel.onThreadCreated;
  const useDefaultThreadName = parentChannel.useDefaultThreadName;
  const uploadHandler = parentChannel.uploadHandler;
  closure_0 = undefined;
  closure_0 = _location((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === channel) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let autoArchiveDuration = tmp3;
              closure_4 = tmp2;
              c3 = undefined;
              closure_4 = undefined;
              autoArchiveDuration = undefined;
              channel = undefined;
              c7 = undefined;
              let draft;
              closure_9 = undefined;
              c3 = closure_2_24(name, closure_1_3);
              name = name.name;
              c3 = name;
              if (name == null) {
                c3 = "";
              }
              closure_4 = c3;
              if ("" === c3) {
                if (channel) {
                  let stringResult = closure_2_25(lib, closure_1);
                  if ("" === stringResult) {
                    const intl = lib(threadSettings[15]).intl;
                    stringResult = intl.string(lib(threadSettings[15]).t["7Xm5QI"]);
                  }
                  closure_4 = stringResult;
                }
              }
              autoArchiveDuration = lib(threadSettings[16]).getAutoArchiveDuration(lib);
              let obj4 = lib(threadSettings[16]);
              channel = closure_2_8.getChannel(parentMessageId(threadSettings[17]).castMessageIdAsChannelId(closure_1));
              channel = 1;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_2_26(lib, [], undefined, () => {
                if (null != closure_1) {
                  let result = closure_2_18.CHANNEL_MESSAGE_THREADS(lib.id, tmp);
                  let tmp3 = lib;
                } else {
                  tmp3 = lib;
                  result = closure_2_18.CHANNEL_THREADS(lib.id);
                }
                const HTTP = lib(527).HTTP;
                obj = { url: result, body: null, rejectWithError: null };
                obj = { name: closure_4, type: null, auto_archive_duration: null, location: null };
                if (c3) {
                  let PRIVATE_THREAD = closure_2_17.PRIVATE_THREAD;
                } else {
                  PRIVATE_THREAD = tmp3.type === closure_2_17.GUILD_ANNOUNCEMENT ? tmp9.ANNOUNCEMENT_THREAD : tmp9.PUBLIC_THREAD;
                }
                obj[1] = PRIVATE_THREAD;
                obj[2] = closure_5;
                obj[3] = stringResult;
                obj[1] = obj;
                obj[2] = lib(527).rejectWithMigratedError();
                return HTTP.post(obj);
              });
              return obj1;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            c7 = arg1;
            if (c7 !== channel) {
              draft = closure_2_9.getDraft(lib.id, closure_2_10.FirstThreadMessage);
              closure_9 = draft.trim();
              parentMessageId(threadSettings[19]).clearDraft(lib.id, closure_2_10.ThreadSettings);
              const obj9 = parentMessageId(threadSettings[19]);
              parentMessageId(threadSettings[19]).clearDraft(lib.id, closure_2_10.FirstThreadMessage);
              let tmp10 = "" !== closure_9;
              if (tmp10) {
                tmp10 = closure_2_9 !== lib.trim();
              }
              if (tmp10) {
                obj = parentMessageId(threadSettings[19]);
                obj.saveDraft(uploadHandler.id, closure_2_8, closure_2_10.ChannelMessage);
              }
              if (closure_1_5 != null) {
                tmp20(c7);
              }
              (function sendMessage(c7, closure_0, closure_1, closure_2, c72) {
                if (null != c72) {
                  if (null != closure_2) {
                    if (closure_2.length > 0) {
                      c72(c7, closure_2, closure_0, closure_1);
                    }
                  }
                }
                if (null != closure_1) {
                  if (closure_1.length > 0) {
                    const obj4 = callback(7210);
                    const id = c7.id;
                    obj = { location: null };
                    obj[0] = constants.THREAD_CREATION;
                    let sendStickersResult = obj4.sendStickers(id, closure_1, callback(7436).parse(c7, closure_0), obj);
                    const obj5 = callback(7436);
                  }
                  return sendStickersResult;
                }
                obj = callback(7210);
                obj = { location: constants.THREAD_CREATION };
                sendStickersResult = obj.sendMessage(c7.id, callback(7436).parse(c7, closure_0), undefined, obj);
              })(c7, lib, closure_1, name, c7);
              const obj10 = parentMessageId(threadSettings[19]);
            }
            obj1 = parentMessageId(threadSettings[20]);
            obj1.clearAll(lib.id, closure_2_10.FirstThreadMessage);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp57) {
          c7 = tmp;
          throw tmp57;
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
};
export const createThread = function createThread(channel, closure_2, PUBLIC_THREAD, autoArchiveDuration, arg4) {
  closure_0 = channel;
  closure_1 = closure_2;
  closure_2 = PUBLIC_THREAD;
  closure_3 = autoArchiveDuration;
  closure_4 = arg4;
  return createThread_(channel, [], undefined, () => {
    const HTTP = channel(PUBLIC_THREAD[18]).HTTP;
    obj = { url: closure_1_18.CHANNEL_THREADS(channel.id), body: obj, rejectWithError: null };
    obj = { name: closure_1, type: PUBLIC_THREAD, auto_archive_duration: closure_3, location: closure_4 };
    obj[2] = channel(PUBLIC_THREAD[18]).rejectWithMigratedError();
    return HTTP.post(obj);
  });
};
export const useCreateForumPostCommon = function useCreateForumPostCommon(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  closure_0 = parentChannel;
  const name = parentChannel.name;
  const appliedTags = parentChannel.appliedTags;
  const analyticsLocations = parentChannel.analyticsLocations;
  const onThreadCreated = parentChannel.onThreadCreated;
  const upload = parentChannel.upload;
  const activityAction = parentChannel.activityAction;
  const applicationId = parentChannel.applicationId;
  const voiceChatEnabled = parentChannel.voiceChatEnabled;
  closure_0 = undefined;
  closure_0 = onThreadCreated((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_8 = 0;
    closure_9 = 0;
    let reason = 0;
    return (function*(arg0, arg1, arg2) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c5 = tmp3;
              c4 = tmp5;
              let trackWithMetadataResult = uploaderFile;
              uploaderFile = undefined;
              closure_1 = undefined;
              obj1 = undefined;
              closure_3 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              trackWithMetadataResult = name;
              trackWithMetadataResult = appliedTags;
              trackWithMetadataResult = closure_1;
              trackWithMetadataResult = analyticsLocations;
              trackWithMetadataResult = analyticsLocations(name(appliedTags[21])(uploaderFile), 2);
              let num7 = 0;
              let tmp41 = uploaderFile;
              if (trackWithMetadataResult[0]) {
                let obj5 = store(appliedTags[22]);
                num7 = obj5.addFlag(0, closure_2_21.SUPPRESS_NOTIFICATIONS);
                tmp41 = trackWithMetadataResult;
              }
              let obj6 = store(appliedTags[16]);
              const autoArchiveDuration = obj6.getAutoArchiveDuration(store, null);
              closure_1 = closure_2_18.CHANNEL_THREADS(store.id) + "?use_nested_fields=true";
              obj1 = { name: null, auto_archive_duration: null, applied_tags: null, message: null };
              obj1[0] = closure_1;
              obj1[1] = autoArchiveDuration;
              obj1[2] = closure_2;
              const obj2 = { content: null, sticker_ids: null, flags: null };
              obj2[0] = tmp41;
              obj2[1] = trackWithMetadataResult;
              let tmp50;
              if (0 !== num7) {
                tmp50 = num7;
              }
              obj2[2] = tmp50;
              obj1[3] = obj2;
              let tmp52 = null;
              if (null != code) {
                tmp52 = (function buildMessageActivity(activity) {
                  let session_id = activity.activity.session_id;
                  if (null == session_id) {
                    session_id = sessionId.getSessionId();
                  }
                  let tmp2 = null;
                  if (null != session_id) {
                    obj = { type: null, session_id: null, target_user_id: null, party_id: null };
                    obj[0] = activity.type;
                    obj[1] = session_id;
                    obj[2] = activity.targetUserId;
                    const party = activity.activity.party;
                    let id;
                    if (party != null) {
                      id = party.id;
                    }
                    obj[3] = id;
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
              if (null != obj1) {
                if (arr2.length > 0) {
                  c7 = 1;
                  c8 = 3;
                  c9 = 1;
                  let obj3 = { value: null, done: false };
                  obj3[0] = file(arr2);
                  return obj3;
                }
              }
              closure_2_26(store, closure_1_3, uploaderFile, () => {
                const HTTP = uploaderFile(obj1[18]).HTTP;
                obj = { url: closure_1, body: obj1, rejectWithError: uploaderFile(obj1[18]).rejectWithMigratedError() };
                return HTTP.post(obj);
              });
              c8 = 2;
              c9 = 1;
            }
          } else if (1 === tmp8) {
            c7 = 0;
            closure_9 = c6;
            closure_4 = closure_9;
            file = closure_4.file;
            code = closure_4.code;
            reason = closure_4.reason;
            obj3 = store(appliedTags[24]);
            const obj4 = { file: null, guildId: null, analyticsLocations: null, code: null, reason: null };
            obj4[0] = file;
            obj4[1] = store.getGuildId();
            closure_3 = closure_1_3;
            if (closure_1_3 == null) {
              closure_3 = [];
            }
            obj4[2] = closure_3;
            obj4[3] = code;
            obj4[4] = reason;
            const result = obj3.handleUploadMessageAttachmentsErrors(obj4);
            throw closure_9;
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              const user = arg1;
              name(appliedTags[19]).clearDraft(store.id, closure_2_10.ThreadSettings);
              const obj13 = name(appliedTags[19]);
              name(appliedTags[19]).clearDraft(store.id, closure_2_10.FirstThreadMessage);
              const obj14 = name(appliedTags[19]);
              name(appliedTags[20]).clearAll(store.id, closure_2_10.FirstThreadMessage);
              const obj15 = name(appliedTags[20]);
              obj6 = { guildId: null, channelId: null, postId: null, applicationId: null, voiceChatEnabled: null };
              obj6[0] = store.guild_id;
              obj6[1] = store.id;
              obj6[2] = user.id;
              obj6[3] = reason;
              obj6[4] = user;
              const result1 = store(appliedTags[25]).trackForumPostCreated(obj6);
              if (null != closure_2.message.application_id) {
                const obj7 = { location: null, invite_type: null, application_id: null, guild_id: null, channel_id: null, message_id: null };
                trackWithMetadataResult = closure_2_22;
                obj7[0] = closure_2_22.THREAD_CREATION;
                trackWithMetadataResult = closure_2_19;
                obj7[1] = closure_2_19.APPLICATION;
                trackWithMetadataResult = closure_2;
                obj7[2] = closure_2.message.application_id;
                trackWithMetadataResult = store;
                obj7[3] = store.getGuildId();
                trackWithMetadataResult = user;
                obj7[4] = user.id;
                trackWithMetadataResult = user;
                obj7[5] = user.id;
                trackWithMetadataResult = name(appliedTags[26]).trackWithMetadata(closure_2_16.INVITE_SENT, obj7);
                const obj18 = name(appliedTags[26]);
              }
              if (closure_4 != null) {
                tmp14(user);
              }
              c9 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = user;
              return obj8;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_3 = arg1;
            uploaderFile = closure_3.uploaderFile;
            const files = closure_3.files;
            obj1.message.attachments = files.map((closure_0, closure_1) => uploaderFile(obj1[23]).getAttachmentPayload(closure_0, closure_1));
            c7 = 0;
          }
          c7 = 0;
          c9 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp62) {
          c6 = tmp62;
          if (tmp4 === c7) {
            c9 = tmp2;
            throw tmp62;
          } else {
            c8 = trackWithMetadataResult;
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
};