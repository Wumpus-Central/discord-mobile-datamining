// discord_app/modules/threads/ThreadCreationHooks.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import MessageConstants from "../messages/MessageConstants.tsx";
import ThreadHooks from "ThreadHooks.tsx";
import sanitizeThreadNameDefault from "sanitizeThreadName.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import DraftStore from "../../stores/DraftStore.tsx";
import MessageParserDefault from "../messages/MessageParser.tsx";
import SlowmodeStore from "../../stores/SlowmodeStore.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../_runtime/00019_react.js";
import ForumActivePostStore from "../forums/ForumActivePostStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import ThreadConstants from "ThreadConstants.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let andDeleteMostRecentUserCreatedThreadId, c3, c4, getChannel, guildId, parentChannel;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let map1;
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
    const unparse = MessageParserDefault.unparse;
    MessageParserDefault;
    if (contentMessage != null) {
      str3 = contentMessage.content;
    }
    if (str3 == null) {
      str3 = "";
    }
    const str4 = unparse(str3, stateFromStores.id, true);
    const tmp17Result = sanitizeThreadNameDefault;
    const str6 = tmp17Result(str4.split("\n")[0], true);
    let str7 = str6.replace(/^[ #-]+/, "");
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
  let id;
  let session_id = activity.activity.session_id;
  if (null == session_id) {
    session_id = AuthenticationStore.getSessionId();
  }
  let tmp2 = null;
  if (null != session_id) {
    const party = activity.activity.party;
    obj = { type: activity.type, session_id, target_user_id: activity.targetUserId, party_id: id };
    id = undefined;
    if (party != null) {
      id = party.id;
    }
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
    let sendStickersResult;
    if (items.length > 0) {
      const id2 = id.id;
      const sendStickers = MessageActionCreatorsDefault.sendStickers;
      const obj2 = { location: MessageSendLocation.THREAD_CREATION };
      const obj3 = MessageParserDefault;
      sendStickersResult = sendStickers(id2, items, obj3.parse(id, arg1), obj2);
    }
    return sendStickersResult;
  }
  id = id.id;
  sendMessage = MessageActionCreatorsDefault.sendMessage;
  MessageActionCreatorsDefault;
  obj = MessageParserDefault;
  const obj4 = { location: MessageSendLocation.THREAD_CREATION };
  sendStickersResult = sendMessage(id, obj.parse(id, arg1), undefined, obj4);
}
function createThread_() {
  return obj(...arguments);
}
let obj = function _createThread_() {
  obj = _asyncToGenerator(async (arg0, arg1, file, arg3) => {
    let closure_8;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_3 = arg3;
    let c10 = 0;
    let c11 = 0;
    let c9 = 0;
    return (async function (arg0, value, arg2, arg3) {
      let code5;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl6;
      let intl7;
      let intl8;
      let reason;
      let string3Result;
      if (c11 === 2) {
        c11 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          let closure_4;
          c11 = 2;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              return { value, done: true };
            } else {
              body = undefined;
              analyticsLocations = undefined;
              self = undefined;
              value = undefined;
              closure_4 = closure_0.isForumLikeChannel();
              c9 = 1;
              c10 = 3;
              c11 = 1;
              const obj4 = { value: body(), done: false };
              return obj4;
            }
          } else {
            if (1 === c10) {
              c9 = 0;
              body = tmp166.body;
              self = body == null;
              let code;
              if (!self) {
                code = body.code;
              }
              if (code === closure_135_14.TOO_MANY_THREADS) {
                let string2Result;
                self = closure_135_1(closure_135_2[30]);
                const show4 = self.show;
                const intl9 = closure_135_0(closure_135_2[17]).intl;
                const string2 = intl9.string;
                const t2 = closure_135_0(closure_135_2[17]).t;
                if (closure_4) {
                  string2Result = string2(t2.vWNFkx);
                } else {
                  string2Result = string2(t2["1KEdvB"]);
                }
                const obj5 = { title: string2Result, body: string3Result };
                const intl10 = closure_135_0(closure_135_2[17]).intl;
                const string3 = intl10.string;
                const t3 = closure_135_0(closure_135_2[17]).t;
                if (closure_4) {
                  string3Result = string3(t3.KGaiEK);
                } else {
                  string3Result = string3(t3.P0wT5S);
                }
                show4(obj5);
              } else {
                const body6 = tmp166.body;
                self = body6 == null;
                let code1;
                if (!self) {
                  code1 = body6.code;
                }
                if (code1 === closure_135_14.TOO_MANY_ANNOUNCEMENT_THREADS) {
                  self = closure_135_1(closure_135_2[30]);
                  const show3 = self.show;
                  const obj6 = {
                    title: intl7.string(closure_135_0(closure_135_2[17]).t["1KEdvB"]),
                    body: intl8.string(closure_135_0(closure_135_2[17]).t.jDMxz2),
                  };
                  intl7 = closure_135_0(closure_135_2[17]).intl;
                  intl8 = closure_135_0(closure_135_2[17]).intl;
                  show3(obj6);
                } else {
                  const body7 = tmp166.body;
                  self = body7 == null;
                  let code2;
                  if (!self) {
                    code2 = body7.code;
                  }
                  if (code2 === closure_135_14.SLOWMODE_RATE_LIMITED) {
                    const retry_after = tmp166.body.retry_after;
                    c4 = retry_after;
                    if (retry_after == null) {
                      c4 = 0;
                    }
                    analyticsLocations = c4;
                    if (analyticsLocations > 0) {
                      self = closure_135_1(closure_135_2[31]);
                      const dispatch = self.dispatch;
                      const obj7 = {
                        type: "SLOWMODE_SET_COOLDOWN",
                        channelId: closure_0.id,
                        slowmodeType: closure_135_11.CreateThread,
                        cooldownMs: analyticsLocations * closure_135_1(closure_135_2[33]).Millis.SECOND,
                      };
                      dispatch(obj7);
                    }
                  } else if (429 === tmp166.status) {
                    let stringResult;
                    self = closure_135_1(closure_135_2[30]);
                    const show2 = self.show;
                    const intl5 = closure_135_0(closure_135_2[17]).intl;
                    const string = intl5.string;
                    const t = closure_135_0(closure_135_2[17]).t;
                    if (closure_4) {
                      stringResult = string(t.vWNFkx);
                    } else {
                      stringResult = string(t["1KEdvB"]);
                    }
                    const obj8 = { title: stringResult, body: intl6.string(closure_135_0(closure_135_2[17]).t.Whhv4w) };
                    intl6 = closure_135_0(closure_135_2[17]).intl;
                    show2(obj8);
                  } else {
                    self = closure_135_12;
                    const body8 = tmp166.body;
                    let code3;
                    const has = closure_135_12.has;
                    if (body8 != null) {
                      code3 = body8.code;
                    }
                    if (has(code3)) {
                      throw tmp166;
                    } else {
                      const body2 = tmp166.body;
                      self = undefined;
                      if (body2 != null) {
                        self = body2.code;
                      }
                      if (self === closure_135_14.INVALID_FORM_BODY) {
                        self = tmp166.body;
                        let name;
                        if (self != null) {
                          self = self.errors;
                          if (self != null) {
                            name = self.name;
                          }
                        }
                        if (null != name) {
                          throw tmp166;
                        }
                      }
                      const body3 = tmp166.body;
                      self = undefined;
                      if (body3 != null) {
                        self = body3.code;
                      }
                      if (self === closure_135_14.UNKNOWN_SESSION) {
                        throw tmp166;
                      } else {
                        self = closure_135_13.has;
                        const body9 = tmp166.body;
                        let code4;
                        if (body9 != null) {
                          code4 = body9.code;
                        }
                        if (self(code4)) {
                          if (null != file) {
                            const body10 = tmp166.body;
                            self = undefined;
                            if (body10 != null) {
                              self = body10.code;
                            }
                            if (self === closure_135_14.EXPLICIT_CONTENT) {
                              const obj9 = closure_135_0(closure_135_2[34]);
                              self = obj9.createNonce();
                              const tmp82 = null != tmp166.body.attachments && tmp166.body.attachments.length > 0;
                              if (tmp82) {
                                const obj11 = {
                                  type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                                  messageId: self,
                                  channelId: closure_0.id,
                                  attachments: tmp166.body.attachments,
                                };
                                const obj10 = closure_135_1(closure_135_2[31]);
                                obj10.dispatch(obj11);
                                closure_135_1(closure_135_2[35])(closure_0.id, self);
                              }
                            } else {
                              self = closure_135_0(closure_135_2[26]).handleUploadMessageAttachmentsErrors;
                              const obj12 = {
                                file,
                                guildId: closure_0.getGuildId(),
                                analyticsLocations,
                                code: code5,
                                reason,
                              };
                              closure_135_0(closure_135_2[26]);
                              analyticsLocations = closure_1;
                              if (closure_1 == null) {
                                analyticsLocations = [];
                              }
                              const body4 = tmp166.body;
                              code5 = undefined;
                              if (body4 != null) {
                                code5 = body4.code;
                              }
                              const body5 = tmp166.body;
                              reason = undefined;
                              if (body5 != null) {
                                reason = body5.reason;
                              }
                              self(obj12);
                            }
                          }
                          self = this;
                          const self2 = this;
                          c11 = 3;
                          const obj13 = {
                            value: new Promise((arg0, fn) => {
                              closure_0 = arg0;
                              closure_1 = fn;
                              if (null == closure_1_8.body) {
                                const tmp = fn();
                              }
                              const result = self.addConditionalChangeListener(() => {
                                andDeleteMostRecentUserCreatedThreadId =
                                  andDeleteMostRecentUserCreatedThreadId.getAndDeleteMostRecentUserCreatedThreadId();
                                if (null != andDeleteMostRecentUserCreatedThreadId) {
                                  const channel2 = channel.getChannel(andDeleteMostRecentUserCreatedThreadId);
                                  obj = closure_1(closure_1_2[31]);
                                  obj.wait(() => {
                                    if (null == closure_0) {
                                      closure_1();
                                    } else {
                                      closure_0(tmp);
                                    }
                                  });
                                  return false;
                                }
                              });
                            }),
                            done: true,
                          };
                          return obj13;
                        } else {
                          self = closure_135_1(closure_135_2[30]).show;
                          const obj14 = {
                            title: intl3.string(closure_135_0(closure_135_2[17]).t.j2d6Km),
                            body: intl4.string(closure_135_0(closure_135_2[17]).t.fEptJP),
                          };
                          closure_135_1(closure_135_2[30]);
                          intl3 = closure_135_0(closure_135_2[17]).intl;
                          intl4 = closure_135_0(closure_135_2[17]).intl;
                          self(obj14);
                        }
                      }
                    }
                  }
                }
              }
            } else if (2 === c10) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c11 = 3;
                return { value, done: true };
              } else {
                c9 = 2;
                self = closure_135_1(closure_135_2[29]);
                c10 = 5;
                c11 = 1;
                const obj16 = { channelId: value.id, limit: closure_135_19 };
                const obj17 = { value: self.fetchMessages(obj16), done: false };
                return obj17;
              }
            } else if (3 === c10) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                c11 = 3;
                return { value, done: true };
              } else {
                body = value;
                if (null == value.body) {
                  self = closure_135_1(closure_135_2[30]);
                  const show = self.show;
                  const obj19 = {
                    title: intl.string(closure_135_0(closure_135_2[17]).t.j2d6Km),
                    body: intl2.string(closure_135_0(closure_135_2[17]).t.fEptJP),
                  };
                  intl = closure_135_0(closure_135_2[17]).intl;
                  intl2 = closure_135_0(closure_135_2[17]).intl;
                  show(obj19);
                } else {
                  let XkUoBb;
                  const obj21 = {
                    type: "SLOWMODE_RESET_COOLDOWN",
                    slowmodeType: closure_135_11.CreateThread,
                    channelId: closure_0.id,
                  };
                  const obj20 = closure_135_1(closure_135_2[31]);
                  obj20.dispatch(obj21);
                  const obj23 = { type: "THREAD_CREATE_LOCAL", channelId: body.body.id };
                  const obj22 = closure_135_1(closure_135_2[31]);
                  obj22.dispatch(obj23);
                  self = closure_135_0(closure_135_2[32]).AccessibilityAnnouncer;
                  const announce = self.announce;
                  const intl11 = closure_135_0(closure_135_2[17]).intl;
                  const string4 = intl11.string;
                  const t4 = closure_135_0(closure_135_2[17]).t;
                  if (closure_4) {
                    XkUoBb = t4.zDAG2N;
                  } else {
                    XkUoBb = t4.XkUoBb;
                  }
                  announce(string4(XkUoBb));
                }
                c9 = 0;
              }
            } else {
              if (4 === c10) {
                c9 = 0;
              } else if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                c11 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c9 = 0;
              }
              c11 = 3;
              return { value, done: true };
            }
            self = Promise;
            const self3 = this;
            const self4 = this;
            c10 = 2;
            c11 = 1;
            const obj25 = {
              value: new Promise((arg0, fn) => {
                closure_0 = arg0;
                if (null == body.body) {
                  fn();
                }
                const result = closure_1_8.addConditionalChangeListener(() => {
                  const channel = closure_2_8.getChannel(body.body.id);
                  if (null != channel) {
                    obj = closure_2_1(file[31]);
                    obj.wait(() => {
                      channel(channel);
                    });
                    return false;
                  }
                });
              }),
              done: false,
            };
            return obj25;
          }
        } catch (tmp166) {
          if (0 === c9) {
            c11 = 3;
            throw tmp166;
          } else if (1 === tmp168) {
            c10 = 1;
          } else {
            c10 = 4;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const DraftType = DraftStore.DraftType;
const SlowmodeType = SlowmodeStore.SlowmodeType;
({ FORUM_POST_CREATION_AUTOMOD_ERRORS: closure_12, FORUM_POST_CREATION_UPLOAD_ERRORS: map1 } = ThreadConstants);
({
  AbortCodes: closure_14,
  AnalyticEvents: closure_15,
  ChannelTypes: closure_16,
  Endpoints: closure_17,
  LoggingInviteTypes: closure_18,
  MAX_MESSAGES_PER_CHANNEL: closure_19,
  MessageFlags: closure_20,
} = Constants);
const MessageSendLocation = MessageConstants.MessageSendLocation;
obj = { Disabled: 1, [1]: "Disabled", Enabled: 2, [2]: "Enabled", PrivateOnly: 3, [3]: "PrivateOnly" };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let Disabled;
      obj = ThreadHooks;
      const canStartPublicThread = obj.useCanStartPublicThread(arg0);
      const obj2 = ThreadHooks;
      if (obj2.useCanStartPrivateThread(arg0)) {
        Disabled = canStartPublicThread ? tmp2.Enabled : tmp2.PrivateOnly;
      } else {
        Disabled = tmp2.Disabled;
      }
      return Disabled;
    }
  : (arg0) => {
      let Disabled;
      obj = ThreadHooks;
      const canStartPublicThread = obj.useCanStartPublicThread(arg0);
      const obj2 = ThreadHooks;
      if (obj2.useCanStartPrivateThread(arg0)) {
        Disabled = canStartPublicThread ? tmp2.Enabled : tmp2.PrivateOnly;
      } else {
        Disabled = tmp2.Disabled;
      }
      return Disabled;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (parentChannel) => {
      let threadSettings;
      let uploadHandler;
      obj = parentChannel(threadSettings[16]);
      const cResult = obj.c(9);
      parentChannel = parentChannel.parentChannel;
      const parentMessageId = parentChannel.parentMessageId;
      threadSettings = parentChannel.threadSettings;
      const privateThreadMode = parentChannel.privateThreadMode;
      let _location = parentChannel.location;
      const onThreadCreated = parentChannel.onThreadCreated;
      const useDefaultThreadName = parentChannel.useDefaultThreadName;
      if (cResult[0] === _location) {
        if (cResult[1] === onThreadCreated) {
          if (cResult[2] === parentChannel) {
            if (cResult[3] === parentMessageId) {
              if (cResult[4] === privateThreadMode) {
                if (cResult[5] === threadSettings) {
                  if (cResult[6] === parentChannel.uploadHandler) {
                    let tmp2;
                    if (cResult[7] === useDefaultThreadName) {
                      tmp2 = cResult[8];
                    }
                    return tmp2;
                  }
                }
              }
            }
          }
        }
      }
      let closure_0 = _location((arg0, arg1, arg2) => {
        let closure_4;
        let closure_5;
        closure_0 = arg0;
        let closure_1 = arg1;
        let name = arg2;
        let c6 = 0;
        let c7 = 0;
        return (function* (arg0, value, arg2) {
          if (c7 === 2) {
            c7 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let autoArchiveDuration;
              let closure_6;
              let closure_7;
              c7 = 2;
              if (0 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  return { value, done: true };
                } else {
                  _location = tmp;
                  let stringResult;
                  autoArchiveDuration = undefined;
                  closure_6 = undefined;
                  closure_7 = undefined;
                  let closure_3 = closure_2_23(name, c3);
                  name = name.name;
                  c3 = name;
                  if (name == null) {
                    c3 = "";
                  }
                  stringResult = c3;
                  if ("" === c3) {
                    const tmp25 = c6;
                    if (tmp25) {
                      stringResult = closure_2_24(user, closure_1);
                      if ("" === stringResult) {
                        const intl = user(threadSettings[17]).intl;
                        stringResult = intl.string(user(threadSettings[17]).t["7Xm5QI"]);
                      }
                    }
                  }
                  const obj3 = user(threadSettings[18]);
                  autoArchiveDuration = obj3.getAutoArchiveDuration(user);
                  getChannel = getChannel.getChannel;
                  const obj4 = parentMessageId(threadSettings[19]);
                  closure_6 = getChannel(obj4.castMessageIdAsChannelId(closure_1));
                  c6 = 1;
                  c7 = 1;
                  const obj6 = {
                    value: closure_2_27(user, [], undefined, () => {
                      let PRIVATE_THREAD;
                      let result;
                      let tmp3;
                      let tmp7Result;
                      if (null != closure_2_1) {
                        result = closure_3_17.CHANNEL_MESSAGE_THREADS(user.id, tmp);
                        tmp3 = user;
                      } else {
                        tmp3 = user;
                        result = closure_3_17.CHANNEL_THREADS(user.id);
                      }
                      const HTTP = closure_0(closure_2[20]).HTTP;
                      const request = { url: result, body: obj, rejectWithError: tmp7Result.rejectWithMigratedError() };
                      const post = HTTP.post;
                      obj = { name, type: PRIVATE_THREAD, auto_archive_duration, location: _location };
                      if (closure_1_3) {
                        PRIVATE_THREAD = constants.PRIVATE_THREAD;
                      } else {
                        PRIVATE_THREAD =
                          tmp3.type === constants.GUILD_ANNOUNCEMENT
                            ? constants.ANNOUNCEMENT_THREAD
                            : constants.PUBLIC_THREAD;
                      }
                      tmp7Result = closure_0(closure_2[20]);
                      return post(request);
                    }),
                    done: false,
                  };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else {
                closure_7 = value;
                if (closure_7 !== closure_6) {
                  const obj8 = parentMessageId(threadSettings[21]);
                  obj8.clearDraft(user.id, closure_2_9.ThreadSettings);
                  const obj9 = parentMessageId(threadSettings[21]);
                  obj9.clearDraft(user.id, closure_2_9.FirstThreadMessage);
                  if (autoArchiveDuration != null) {
                    tmp60(closure_7);
                  }
                  closure_2_26(closure_7, user, closure_1, name, c7);
                }
                obj = parentMessageId(threadSettings[22]);
                obj.clearAll(user.id, closure_2_9.FirstThreadMessage);
                c7 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp42) {
              c7 = 3;
              throw tmp42;
            }
          }
        })();
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[0] = _location;
      cResult[1] = onThreadCreated;
      cResult[2] = parentChannel;
      cResult[3] = parentMessageId;
      cResult[4] = privateThreadMode;
      cResult[5] = threadSettings;
      cResult[6] = parentChannel.uploadHandler;
      cResult[7] = useDefaultThreadName;
      cResult[8] = fn;
      tmp2 = fn;
    }
  : (parentChannel) => {
      parentChannel = parentChannel.parentChannel;
      const parentMessageId = parentChannel.parentMessageId;
      const threadSettings = parentChannel.threadSettings;
      const privateThreadMode = parentChannel.privateThreadMode;
      let _location = parentChannel.location;
      const onThreadCreated = parentChannel.onThreadCreated;
      const useDefaultThreadName = parentChannel.useDefaultThreadName;
      const uploadHandler = parentChannel.uploadHandler;
      const useCallback = onThreadCreated.useCallback;
      let closure_0 = _location((arg0, arg1, arg2) => {
        let closure_4;
        let closure_5;
        closure_0 = arg0;
        let closure_1 = arg1;
        let name = arg2;
        let c6 = 0;
        let c7 = 0;
        return (function* (arg0, value, arg2) {
          if (c7 === 2) {
            c7 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let autoArchiveDuration;
              let closure_6;
              let closure_7;
              c7 = 2;
              if (0 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  return { value, done: true };
                } else {
                  _location = tmp;
                  let stringResult;
                  autoArchiveDuration = undefined;
                  closure_6 = undefined;
                  closure_7 = undefined;
                  let closure_3 = closure_2_23(name, c3);
                  name = name.name;
                  c3 = name;
                  if (name == null) {
                    c3 = "";
                  }
                  stringResult = c3;
                  if ("" === c3) {
                    const tmp25 = c6;
                    if (tmp25) {
                      stringResult = closure_2_24(user, closure_1);
                      if ("" === stringResult) {
                        const intl = user(threadSettings[17]).intl;
                        stringResult = intl.string(user(threadSettings[17]).t["7Xm5QI"]);
                      }
                    }
                  }
                  const obj3 = user(threadSettings[18]);
                  autoArchiveDuration = obj3.getAutoArchiveDuration(user);
                  getChannel = getChannel.getChannel;
                  const obj4 = parentMessageId(threadSettings[19]);
                  closure_6 = getChannel(obj4.castMessageIdAsChannelId(closure_1));
                  c6 = 1;
                  c7 = 1;
                  const obj6 = {
                    value: closure_2_27(user, [], undefined, () => {
                      let PRIVATE_THREAD;
                      let result;
                      let tmp3;
                      let tmp7Result;
                      if (null != closure_2_1) {
                        result = closure_3_17.CHANNEL_MESSAGE_THREADS(user.id, tmp);
                        tmp3 = user;
                      } else {
                        tmp3 = user;
                        result = closure_3_17.CHANNEL_THREADS(user.id);
                      }
                      const HTTP = closure_0(closure_2[20]).HTTP;
                      const request = { url: result, body: obj, rejectWithError: tmp7Result.rejectWithMigratedError() };
                      const post = HTTP.post;
                      obj = { name, type: PRIVATE_THREAD, auto_archive_duration, location: _location };
                      if (closure_1_3) {
                        PRIVATE_THREAD = constants.PRIVATE_THREAD;
                      } else {
                        PRIVATE_THREAD =
                          tmp3.type === constants.GUILD_ANNOUNCEMENT
                            ? constants.ANNOUNCEMENT_THREAD
                            : constants.PUBLIC_THREAD;
                      }
                      tmp7Result = closure_0(closure_2[20]);
                      return post(request);
                    }),
                    done: false,
                  };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else {
                closure_7 = value;
                if (closure_7 !== closure_6) {
                  const obj8 = parentMessageId(threadSettings[21]);
                  obj8.clearDraft(user.id, closure_2_9.ThreadSettings);
                  const obj9 = parentMessageId(threadSettings[21]);
                  obj9.clearDraft(user.id, closure_2_9.FirstThreadMessage);
                  if (autoArchiveDuration != null) {
                    tmp60(closure_7);
                  }
                  closure_2_26(closure_7, user, closure_1, name, c7);
                }
                obj = parentMessageId(threadSettings[22]);
                obj.clearAll(user.id, closure_2_9.FirstThreadMessage);
                c7 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp42) {
              c7 = 3;
              throw tmp42;
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
      return useCallback(function () {
        return closure_0(...arguments);
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (parentChannel) => {
      let appliedTags;
      obj = parentChannel(appliedTags[16]);
      const cResult = obj.c(10);
      parentChannel = parentChannel.parentChannel;
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
                      let tmp2;
                      if (cResult[8] === voiceChatEnabled) {
                        tmp2 = cResult[9];
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
      let closure_0 = onThreadCreated((arg0, name, applied_tags) => {
        let closure_5;
        let closure_6;
        closure_0 = arg0;
        let c8 = 0;
        let c9 = 0;
        let c7 = 0;
        return (function* (arg0, value, arg2) {
          let obj9;
          let tmp84;
          if (c9 === 2) {
            c9 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let tmp91;
            try {
              let obj8;
              let tmp;
              let file;
              let code;
              let reason;
              let createThread;
              c9 = 2;
              if (0 === voiceChatEnabled) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  return { value, done: true };
                } else {
                  let tmp75 = closure_0;
                  let uploaderFile;
                  name = undefined;
                  obj8 = undefined;
                  analyticsLocations = undefined;
                  guildId = undefined;
                  tmp = undefined;
                  tmp91 = undefined;
                  file = undefined;
                  code = undefined;
                  reason = undefined;
                  value = undefined;
                  createThread = undefined;
                  body = undefined;
                  let num10 = 0;
                  const tmp115 = name;
                  const tmp119 = closure_2_3(closure_2_1(appliedTags[23])(closure_0), 2);
                  if (tmp119[0]) {
                    const obj12 = closure_0(appliedTags[24]);
                    num10 = obj12.addFlag(0, constants4.SUPPRESS_NOTIFICATIONS);
                    tmp75 = tmp120;
                  }
                  const obj13 = closure_0(appliedTags[18]);
                  const autoArchiveDuration = obj13.getAutoArchiveDuration(closure_0, null);
                  name = closure_2_17.CHANNEL_THREADS(closure_0.id) + "?use_nested_fields=true";
                  obj8 = { name, auto_archive_duration: autoArchiveDuration, applied_tags, message: obj9 };
                  obj9 = { content: tmp75, sticker_ids: tmp115, flags: tmp84 };
                  tmp84 = undefined;
                  if (0 !== num10) {
                    tmp84 = num10;
                  }
                  let tmp86 = null;
                  if (null != tmp91) {
                    tmp86 = closure_2_25(tmp85);
                  }
                  analyticsLocations = tmp86;
                  guildId = null != tmp86 && null != tmp85;
                  if (guildId) {
                    obj8.message.application_id = tmp91.activity.application_id;
                    obj8.message.activity = tmp86;
                  }
                  if (null != applied_tags) {
                    if (applied_tags.length > 0) {
                      applicationId = 1;
                      voiceChatEnabled = 3;
                      c9 = 1;
                      const obj10 = { value: tmp(applied_tags), done: false };
                      return obj10;
                    }
                  }
                }
              } else if (1 === voiceChatEnabled) {
                applicationId = 0;
                tmp = tmp91;
                tmp91 = tmp;
                file = tmp91.file;
                code = tmp91.code;
                reason = tmp91.reason;
                const obj11 = { file, guildId, analyticsLocations, code, reason };
                const handleUploadMessageAttachmentsErrors = closure_0(
                  appliedTags[26],
                ).handleUploadMessageAttachmentsErrors;
                closure_0(appliedTags[26]);
                guildId = closure_0.getGuildId();
                if (analyticsLocations == null) {
                  analyticsLocations = [];
                }
                guildId = reason;
                const result = handleUploadMessageAttachmentsErrors(obj11);
                throw tmp;
              } else if (2 === voiceChatEnabled) {
                applicationId = 0;
                body = tmp91;
                code = undefined;
                if (body != null) {
                  body = body.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === constants.UNKNOWN_SESSION) {
                  if (null != analyticsLocations) {
                    delete obj8.message[tmp98];
                    delete obj8.message[tmp99];
                    voiceChatEnabled = 5;
                    c9 = 1;
                    const obj14 = { value: createThread(), done: false };
                    return obj14;
                  }
                }
                throw body;
              } else if (3 === voiceChatEnabled) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  applicationId = 0;
                  c9 = 3;
                  return { value, done: true };
                } else {
                  guildId = value;
                  uploaderFile = guildId.uploaderFile;
                  const files = guildId.files;
                  obj8.message.attachments = files.map((item, index) => {
                    obj = closure_1_0(applied_tags[25]);
                    return obj.getAttachmentPayload(item, index);
                  });
                  applicationId = 0;
                }
              } else {
                if (4 === voiceChatEnabled) {
                  if (arg0 === 1) {
                    c9 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    applicationId = 0;
                    c9 = 3;
                    return { value, done: true };
                  } else {
                    applicationId = 0;
                  }
                } else if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  obj = { value, done: true };
                  return obj;
                }
                let obj2 = closure_2_1(appliedTags[21]);
                obj2.clearDraft(closure_0.id, closure_2_9.ThreadSettings);
                const obj3 = closure_2_1(appliedTags[21]);
                obj3.clearDraft(closure_0.id, closure_2_9.FirstThreadMessage);
                const obj4 = closure_2_1(appliedTags[22]);
                obj4.clearAll(closure_0.id, closure_2_9.FirstThreadMessage);
                guildId = voiceChatEnabled;
                const obj17 = {
                  guildId: closure_0.guild_id,
                  channelId: closure_0.id,
                  postId: value.id,
                  applicationId,
                  voiceChatEnabled,
                };
                const obj5 = closure_0(appliedTags[27]);
                const result1 = obj5.trackForumPostCreated(obj17);
                if (null != obj8.message.application_id) {
                  const obj18 = {
                    location: constants5.THREAD_CREATION,
                    invite_type: constants3.APPLICATION,
                    application_id: obj8.message.application_id,
                    guild_id: closure_0.getGuildId(),
                    channel_id: value.id,
                    message_id: value.id,
                  };
                  const trackWithMetadata = closure_2_1(appliedTags[28]).trackWithMetadata;
                  const INVITE_SENT = constants2.INVITE_SENT;
                  closure_2_1(appliedTags[28]);
                  trackWithMetadata(INVITE_SENT, obj18);
                }
                if (guildId != null) {
                  tmp30(value);
                }
                c9 = 3;
                return { value, done: true };
              }
              createThread = function createThread() {
                let url;
                return closure_3_27(closure_2_0, analyticsLocations, uploaderFile, () => {
                  let obj2;
                  const HTTP = closure_3_0(applied_tags[20]).HTTP;
                  const request = { url, body, rejectWithError: obj2.rejectWithMigratedError() };
                  const post = HTTP.post;
                  obj2 = closure_3_0(applied_tags[20]);
                  return post(request);
                });
              };
              applicationId = 2;
              voiceChatEnabled = 4;
              c9 = 1;
              const obj20 = { value: createThread(), done: false };
              return obj20;
            } catch (tmp91) {
              if (0 === applicationId) {
                c9 = 3;
                throw tmp91;
              } else if (1 === tmp93) {
                voiceChatEnabled = 1;
              } else {
                voiceChatEnabled = 2;
              }
            }
          }
        })();
      });
      const fn = function () {
        return closure_0(...arguments);
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
    }
  : (parentChannel) => {
      parentChannel = parentChannel.parentChannel;
      const name = parentChannel.name;
      const appliedTags = parentChannel.appliedTags;
      let analyticsLocations = parentChannel.analyticsLocations;
      const onThreadCreated = parentChannel.onThreadCreated;
      const upload = parentChannel.upload;
      const activityAction = parentChannel.activityAction;
      let applicationId = parentChannel.applicationId;
      let voiceChatEnabled = parentChannel.voiceChatEnabled;
      const useCallback = upload.useCallback;
      let closure_0 = onThreadCreated((arg0, arg1, applied_tags) => {
        let closure_5;
        let closure_6;
        closure_0 = arg0;
        let user = arg1;
        let c8 = 0;
        let c9 = 0;
        let c7 = 0;
        return (function* (arg0, value, arg2) {
          let obj9;
          let tmp84;
          if (c9 === 2) {
            c9 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let tmp91;
            try {
              let obj8;
              let closure_4;
              let tmp;
              let file;
              let code;
              let reason;
              let createThread;
              c9 = 2;
              if (0 === voiceChatEnabled) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c9 = 3;
                  return { value, done: true };
                } else {
                  let tmp75 = closure_0;
                  let uploaderFile;
                  user = undefined;
                  applied_tags = undefined;
                  obj8 = undefined;
                  closure_4 = undefined;
                  tmp = undefined;
                  tmp91 = undefined;
                  file = undefined;
                  code = undefined;
                  reason = undefined;
                  createThread = function createThread() {
                    let url;
                    return closure_3_27(closure_2_0, analyticsLocations, uploaderFile, () => {
                      let obj2;
                      const HTTP = closure_3_0(applied_tags[20]).HTTP;
                      const request = { url, body, rejectWithError: obj2.rejectWithMigratedError() };
                      const post = HTTP.post;
                      obj2 = closure_3_0(applied_tags[20]);
                      return post(request);
                    });
                  };
                  let num10 = 0;
                  const tmp115 = user;
                  const tmp119 = closure_2_3(name(appliedTags[23])(closure_0), 2);
                  if (tmp119[0]) {
                    const obj12 = closure_0(appliedTags[24]);
                    num10 = obj12.addFlag(0, constants4.SUPPRESS_NOTIFICATIONS);
                    tmp75 = tmp120;
                  }
                  const obj13 = closure_0(appliedTags[18]);
                  const autoArchiveDuration = obj13.getAutoArchiveDuration(closure_0, null);
                  applied_tags = closure_2_17.CHANNEL_THREADS(closure_0.id) + "?use_nested_fields=true";
                  obj8 = { name: user, auto_archive_duration: autoArchiveDuration, applied_tags, message: obj9 };
                  obj9 = { content: tmp75, sticker_ids: tmp115, flags: tmp84 };
                  tmp84 = undefined;
                  if (0 !== num10) {
                    tmp84 = num10;
                  }
                  let tmp86 = null;
                  if (null != tmp91) {
                    tmp86 = closure_2_25(tmp85);
                  }
                  closure_4 = tmp86;
                  guildId = null != tmp86 && null != tmp85;
                  if (guildId) {
                    obj8.message.application_id = tmp91.activity.application_id;
                    obj8.message.activity = tmp86;
                  }
                  if (null != applied_tags) {
                    if (applied_tags.length > 0) {
                      applicationId = 1;
                      voiceChatEnabled = 3;
                      c9 = 1;
                      const obj10 = { value: tmp(applied_tags), done: false };
                      return obj10;
                    }
                  }
                }
              } else if (1 === voiceChatEnabled) {
                applicationId = 0;
                let closure_11 = tmp91;
                tmp91 = closure_11;
                file = tmp91.file;
                code = tmp91.code;
                reason = tmp91.reason;
                const obj11 = { file, guildId, analyticsLocations, code, reason };
                const handleUploadMessageAttachmentsErrors = closure_0(
                  appliedTags[26],
                ).handleUploadMessageAttachmentsErrors;
                closure_0(appliedTags[26]);
                guildId = closure_0.getGuildId();
                if (analyticsLocations == null) {
                  analyticsLocations = [];
                }
                guildId = reason;
                const result = handleUploadMessageAttachmentsErrors(obj11);
                throw closure_11;
              } else if (2 === voiceChatEnabled) {
                applicationId = 0;
                body = tmp91;
                code = undefined;
                if (body != null) {
                  body = body.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === constants.UNKNOWN_SESSION) {
                  if (null != closure_4) {
                    delete obj8.message[tmp98];
                    delete obj8.message[tmp99];
                    voiceChatEnabled = 5;
                    c9 = 1;
                    const obj14 = { value: createThread(), done: false };
                    return obj14;
                  }
                }
                throw body;
              } else if (3 === voiceChatEnabled) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  applicationId = 0;
                  c9 = 3;
                  return { value, done: true };
                } else {
                  tmp = value;
                  uploaderFile = tmp.uploaderFile;
                  const files = tmp.files;
                  obj8.message.attachments = files.map((item, index) => {
                    obj = closure_1_0(applied_tags[25]);
                    return obj.getAttachmentPayload(item, index);
                  });
                  applicationId = 0;
                }
              } else {
                if (4 === voiceChatEnabled) {
                  if (arg0 === 1) {
                    c9 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    applicationId = 0;
                    c9 = 3;
                    return { value, done: true };
                  } else {
                    user = value;
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
                  user = value;
                }
                let obj2 = name(appliedTags[21]);
                obj2.clearDraft(closure_0.id, closure_2_9.ThreadSettings);
                const obj3 = name(appliedTags[21]);
                obj3.clearDraft(closure_0.id, closure_2_9.FirstThreadMessage);
                const obj4 = name(appliedTags[22]);
                obj4.clearAll(closure_0.id, closure_2_9.FirstThreadMessage);
                guildId = voiceChatEnabled;
                const obj17 = {
                  guildId: closure_0.guild_id,
                  channelId: closure_0.id,
                  postId: user.id,
                  applicationId,
                  voiceChatEnabled,
                };
                const obj5 = closure_0(appliedTags[27]);
                const result1 = obj5.trackForumPostCreated(obj17);
                if (null != obj8.message.application_id) {
                  const obj18 = {
                    location: constants5.THREAD_CREATION,
                    invite_type: constants3.APPLICATION,
                    application_id: obj8.message.application_id,
                    guild_id: closure_0.getGuildId(),
                    channel_id: user.id,
                    message_id: user.id,
                  };
                  const trackWithMetadata = name(appliedTags[28]).trackWithMetadata;
                  const INVITE_SENT = constants2.INVITE_SENT;
                  name(appliedTags[28]);
                  trackWithMetadata(INVITE_SENT, obj18);
                }
                if (guildId != null) {
                  tmp30(user);
                }
                c9 = 3;
                return { value: user, done: true };
              }
              applicationId = 2;
              voiceChatEnabled = 4;
              c9 = 1;
              const obj20 = { value: createThread(), done: false };
              return obj20;
            } catch (tmp91) {
              if (0 === applicationId) {
                c9 = 3;
                throw tmp91;
              } else if (1 === tmp93) {
                voiceChatEnabled = 1;
              } else {
                voiceChatEnabled = 2;
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
      return useCallback(function () {
        return closure_0(...arguments);
      }, items);
    };
let result = size.fileFinishedImporting("modules/threads/ThreadCreationHooks.tsx");
const createThread_export = function createThread(arg0, name, type, auto_archive_duration, _location) {
  const id = arg0;
  return createThread_(arg0, [], undefined, () => {
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: closure_17.CHANNEL_THREADS(id.id),
      body: obj,
      rejectWithError: obj3.rejectWithMigratedError(),
    };
    const post = HTTP.post;
    obj = { name, type, auto_archive_duration, location: _location };
    obj3 = HTTPUtils;
    return post(request);
  });
};

export const PrivateThreadMode = obj;
export const usePrivateThreadMode = tmp4;
export { getIsPrivate };
export { getDefaultThreadName };
export const useCreateThreadCommon = tmp5;
export { createThread_export as createThread };
export const useCreateForumPostCommon = tmp6;
