// === Module 7764: ReactionActionCreators ===

// Module 7764 (ReactionActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import util from "util" /* 1114 */;
import EmojiUtils from "EmojiUtils" /* 4217 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7763 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7765 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MessageStore from "MessageStore" /* 4781 */;

require = fn;
function checkReactionResponse(arg0, fn, isRetry) {
  ({ status, body } = arg0);
  if (429 === status) {
    if (isRetry.isRetry) {
      return true;
    } else {
      const _parseInt = parseInt;
      const parsed = parseInt(tmp["retry-after"]);
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(fn, parsed * DurationsDefault.Millis.SECOND);
      }
      return false;
    }
  } else {
    if (403 === status) {
      let code = body;
      if (body) {
        code = body.code;
      }
      if (constants.TOO_MANY_REACTIONS === code) {
        obj = { title: null, body: null, confirmText: null };
        const intl = util.intl;
        obj.title = intl.string(util.t.lFddsR);
        const intl2 = util.intl;
        obj.body = intl2.string(util.t.h27eIm);
        const intl3 = util.intl;
        obj.confirmText = intl3.string(util.t.BddRzS);
        obj.show(obj);
      } else if (tmp3.REACTION_BLOCKED === code) {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.dispatch(constants2.SHAKE_APP, { duration: 200, intensity: 2 });
      }
    } else if (!isRetry.isRetry) {
      fn();
      return false;
    }
    return true;
  }
}
function optimisticDispatch(type, channelId, messageId, emoji, userId) {
  obj = { type, channelId, messageId, userId: null, emoji: null, optimistic: true, colors: null, reactionType: null };
  userId = userId.userId;
  if (userId == null) {
    userId = AuthenticationStore.getId();
  }
  obj.userId = userId;
  obj.emoji = emoji;
  let colors = userId.colors;
  if (colors == null) {
    colors = [];
  }
  obj.colors = colors;
  const ReactionTypes = MessageReactionsTypes.ReactionTypes;
  obj.reactionType = userId.burst ? ReactionTypes.BURST : ReactionTypes.NORMAL;
  obj.dispatch(obj);
}
function makeURL(type) {
  ({ channelId, messageId, emoji, userId, useTypeEndpoint } = type);
  if (useTypeEndpoint === undefined) {
    useTypeEndpoint = false;
  }
  let NORMAL = type.type;
  if (NORMAL === undefined) {
    NORMAL = MessageReactionsTypes.ReactionTypes.NORMAL;
  }
  if (null != emoji.id) {
    const _HermesInternal = HermesInternal;
    let name = "" + emoji.name + ":" + emoji.id;
  } else {
    name = emoji.name;
  }
  if (null == userId) {
    let REACTIONSResult = closure_1_10.REACTIONS(channelId, messageId, name);
  } else if (useTypeEndpoint) {
    REACTIONSResult = obj.REACTION_WITH_TYPE(channelId, messageId, name, userId, NORMAL);
  } else {
    REACTIONSResult = obj.REACTION(channelId, messageId, name, userId);
  }
  return REACTIONSResult;
}
let closure_15 = async function _getReactors(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({ channelId: closure_129_0, messageId: closure_129_1, emoji: closure_129_2, limit: closure_129_3, after: closure_129_4, type: closure_129_5 } = closure_0);
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          if (closure_129_5 === closure_130_0(closure_130_2[10]).ReactionTypes.VOTE) {
            let tmp28 = (function makeURLForVoteReactors(arg0, arg1, id) {
              let name = id.id;
              if (name == null) {
                name = id.name;
              }
              return closure_1_10.POLL_ANSWER_VOTERS(arg0, arg1, name);
            })(closure_129_0, closure_129_1, closure_129_2);
          } else {
            const obj2 = { channelId: closure_129_0, messageId: closure_129_1, emoji: closure_129_2 };
            tmp28 = closure_130_14(obj2);
          }
          closure_129_6 = tmp28;
          const HTTP = closure_130_0(closure_130_2[11]).HTTP;
          const request = { url: closure_129_6, query: null, oldFormErrors: true, rejectWithError: null };
          const obj3 = { limit: closure_129_3, after: closure_129_4, type: closure_129_5 };
          request.query = obj3;
          request.rejectWithError = closure_130_0(closure_130_2[11]).rejectWithMigratedError();
          value = HTTP.get(request);
          c3 = 2;
          c4 = 1;
          const obj6 = closure_130_0(closure_130_2[11]);
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_129_7 = value;
        let tmp14;
        if (closure_129_5 === closure_130_0(closure_130_2[10]).ReactionTypes.VOTE) {
          let body = closure_129_7.body.users;
        } else {
          body = closure_129_7.body;
        }
        closure_129_8 = body;
        tmp14 = closure_130_1(closure_130_2[9]);
        obj = { type: "MESSAGE_REACTION_ADD_USERS", channelId: closure_129_0, messageId: closure_129_1, users: closure_129_8, emoji: closure_129_2, reactionType: closure_129_5 };
        tmp14.dispatch(obj);
        c4 = 3;
      }
    } catch (tmp43) {
      c4 = tmp;
      throw tmp43;
    }
  }
};
function addReaction() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = async function _addReaction(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let query = { value, done: true };
      return query;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          query = { value, done: true };
          return query;
        } else {
          let isRetry = tmp3;
          let burst = tmp2;
          closure_133_3 = undefined;
          closure_133_4 = undefined;
          closure_133_0 = closure_0;
          closure_133_1 = closure_1;
          closure_133_2 = user;
          let MESSAGE = closure_3;
          if (closure_3 === undefined) {
            MESSAGE = constants.MESSAGE;
          }
          closure_133_3 = MESSAGE;
          closure_133_4 = id;
          closure_133_5 = undefined;
          closure_133_6 = undefined;
          closure_133_7 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          burst = null != closure_133_4;
          if (burst) {
            burst = closure_133_4.burst;
          }
          closure_133_5 = burst;
          isRetry = null != closure_133_4;
          if (isRetry) {
            isRetry = closure_133_4.isRetry;
          }
          closure_133_6 = isRetry;
          if (!closure_133_6) {
            if (closure_134_26(closure_133_0, closure_133_1, closure_133_2, closure_133_5)) {
              let obj5 = closure_134_1(closure_134_2[6]);
              let obj2 = { title: null, body: null, confirmText: null };
              let intl = closure_134_0(closure_134_2[7]).intl;
              obj2.title = intl.string(closure_134_0(closure_134_2[7]).t["uaUU/g"]);
              const intl2 = closure_134_0(closure_134_2[7]).intl;
              obj2.body = intl2.string(closure_134_0(closure_134_2[7]).t.psMorl);
              const intl3 = closure_134_0(closure_134_2[7]).intl;
              obj2.confirmText = intl3.string(closure_134_0(closure_134_2[7]).t["NX+WJN"]);
              obj5.show(obj2);
              c8 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
          c7 = 2;
          c8 = 1;
          let obj3 = { value: closure_134_24(closure_133_2, closure_133_5), done: false };
          return obj3;
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_133_7 = value;
          obj5 = { burst: closure_133_5, colors: closure_133_7 };
          closure_134_13("MESSAGE_REACTION_ADD", closure_133_0, closure_133_1, closure_133_2, obj5);
          c7 = 3;
          c8 = 1;
          const obj6 = { value: closure_134_1(closure_134_2[12]).unarchiveThreadIfNecessary(closure_133_0), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        let HTTP = closure_134_0(closure_134_2[11]).HTTP;
        let put = HTTP.put;
        let request = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
        let obj8 = { channelId: closure_133_0, messageId: closure_133_1, emoji: closure_133_2, userId: "@me" };
        request.url = closure_134_14(obj8);
        query = { location: closure_133_3, type: null };
        let fn = closure_134_0(closure_134_2[10]).ReactionTypes;
        if (closure_133_5) {
          let NORMAL = fn.BURST;
        } else {
          NORMAL = fn.NORMAL;
        }
        query.type = NORMAL;
        request.query = query;
        query = closure_134_0(closure_134_2[11]);
        request.rejectWithError = query.rejectWithMigratedError();
        HTTP = put(request);
        put = HTTP.then(() => {
          if ("Message Shortcut" === closure_1_3) {
            const channel = burst.getChannel(channelId);
            obj = { channel_id: channelId, guild_id: null, original_message_id: null, emoji_id: null, action: "react" };
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            obj.guild_id = guild_id;
            obj.original_message_id = messageId;
            let name = user.id;
            if (name == null) {
              name = user.name;
            }
            obj.emoji_id = name;
            obj = closure_0(user[14]);
            let guild_id1;
            if (channel != null) {
              guild_id1 = channel.guild_id;
            }
            const merged = Object.assign(obj.collectGuildAnalyticsMetadata(guild_id1));
            let obj1 = closure_0(user[14]);
            const merged1 = Object.assign(obj1.collectChannelAnalyticsMetadata(channel));
            closure_1(user[13]).track(constants.MESSAGE_SHORTCUT_ACTION_SENT, obj);
            const obj8 = closure_1(user[13]);
          }
          const AccessibilityAnnouncer = closure_0(user[15]).AccessibilityAnnouncer;
          const announce = AccessibilityAnnouncer.announce;
          const intl = closure_0(user[7]).intl;
          const formatToPlainString = intl.formatToPlainString;
          const t = closure_0(user[7]).t;
          if (closure_1_5) {
            obj = { name: user.name };
            announce(formatToPlainString(t["RJlG+R"], obj));
            obj1 = { channelId, messageId, emoji: null };
            const obj2 = {};
            const merged2 = Object.assign(user);
            obj2.animated = false;
            obj1.emoji = obj2;
            const result = closure_1(user[16]).triggerFullscreenAnimation(obj1);
            const obj5 = closure_1(user[16]);
          } else {
            const obj3 = { name: user.name };
            announce(formatToPlainString(t.ol4acF, obj3));
          }
        });
        fn = (arg0) => {
          obj = { isRetry };
          if (closure_2_12(arg0, () => closure_2_16(closure_1_0, closure_1_1, user, closure_1_3, { burst, isRetry: true }), obj)) {
            obj = { burst };
            let obj2 = closure_1(user[9]);
            obj = { type: "MESSAGE_REACTION_REMOVE", channelId, messageId, userId: null, emoji: null, optimistic: true, colors: null, reactionType: null };
            let userId = obj.userId;
            if (userId == null) {
              userId = id.getId();
            }
            obj.userId = userId;
            obj.emoji = emoji;
            let colors = obj.colors;
            if (colors == null) {
              colors = [];
            }
            obj.colors = colors;
            const ReactionTypes = closure_0(tmp6[10]).ReactionTypes;
            if (obj.burst) {
              let NORMAL = ReactionTypes.BURST;
              let tmp10 = tmp9;
            } else {
              NORMAL = ReactionTypes.NORMAL;
              tmp10 = tmp9;
            }
            obj.reactionType = NORMAL;
            obj2.dispatch(obj);
            const AccessibilityAnnouncer = tmp10(tmp6[15]).AccessibilityAnnouncer;
            const announce = AccessibilityAnnouncer.announce;
            const intl = tmp10(tmp6[7]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const t = tmp10(tmp6[7]).t;
            if (burst) {
              const obj1 = { name: tmp3.name };
              announce(formatToPlainString(t.fJeu87, obj1));
            } else {
              obj2 = { name: tmp3.name };
              announce(formatToPlainString(t["UUn5V+"], obj2));
            }
          }
        };
        request = put.catch(fn);
        c8 = 3;
      }
    } catch (tmp53) {
      c8 = tmp;
      throw tmp53;
    }
  }
};
function removeAllReactions() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_19 = async function _removeAllReactions(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let isRetry = arg2;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp5;
            closure_3 = tmp2;
            closure_131_0 = closure_0;
            closure_131_1 = closure_1;
            closure_131_2 = undefined;
            isRetry = null != isRetry;
            if (isRetry) {
              isRetry = isRetry.isRetry;
            }
            closure_131_2 = isRetry;
            let obj1 = ThreadActionCreatorsDefault;
            c5 = 1;
            c6 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.unarchiveThreadIfNecessary(closure_0);
            return obj1;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const HTTP = closure_132_0(closure_132_2[11]).HTTP;
          const obj2 = { url: closure_132_10.REMOVE_REACTIONS(closure_131_0, closure_131_1), oldFormErrors: true, rejectWithError: closure_132_0(closure_132_2[11]).rejectWithMigratedError() };
          const obj7 = closure_132_0(closure_132_2[11]);
          HTTP.del(obj2).catch((error) => {
            closure_2_12(error, () => closure_2_18(closure_1_0, closure_1_1, { isRetry: true }), { isRetry });
          });
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp9) {
        c6 = tmp;
        throw tmp9;
      }
    }
  })();
};
function removeEmojiReactions() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_21 = async function _removeEmojiReactions(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  let isRetry = arg3;
  c6 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
            closure_5 = tmp5;
            closure_4 = tmp2;
            closure_132_0 = closure_0;
            closure_132_1 = closure_1;
            closure_132_2 = closure_2;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            isRetry = null != isRetry;
            if (isRetry) {
              isRetry = isRetry.isRetry;
            }
            closure_132_3 = isRetry;
            c6 = 1;
            c7 = 1;
            let obj1 = { value: ThreadActionCreatorsDefault.unarchiveThreadIfNecessary(closure_0), done: false };
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
          if (null === closure_132_2.id) {
            let name = closure_132_2.name;
          } else {
            const _HermesInternal = HermesInternal;
            name = "" + closure_132_2.name + ":" + closure_132_2.id;
          }
          closure_132_4 = name;
          const HTTP = closure_133_0(closure_133_2[11]).HTTP;
          obj = { url: closure_133_10.REMOVE_EMOJI_REACTIONS(closure_132_0, closure_132_1, closure_132_4), oldFormErrors: true, rejectWithError: null };
          obj1 = closure_133_0(closure_133_2[11]);
          obj.rejectWithError = obj1.rejectWithMigratedError();
          HTTP.del(obj).catch((error) => {
            closure_2_12(error, () => closure_2_20(closure_1_0, closure_1_1, closure_1_2, { isRetry: true }), { isRetry });
          });
          c7 = 3;
          const delResult = HTTP.del(obj);
        }
      } catch (tmp25) {
        c7 = tmp;
        throw tmp25;
      }
    }
  })();
};
function removeReaction() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_23 = async function _removeReaction(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          const user = tmp2;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          ({ channelId: closure_130_0, messageId: closure_130_1, emoji: closure_130_2, location: _location } = closure_0);
          if (_location === undefined) {
            _location = constants.MESSAGE;
          }
          closure_130_3 = _location;
          ({ userId: closure_130_4, options: closure_130_5 } = closure_0);
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          let burst = null != closure_130_5;
          if (burst) {
            burst = closure_130_5.burst;
          }
          closure_130_6 = burst;
          let isRetry = null != closure_130_5;
          if (isRetry) {
            isRetry = closure_130_5.isRetry;
          }
          closure_130_7 = isRetry;
          let obj2 = { userId: closure_130_4, burst: closure_130_6 };
          closure_131_13("MESSAGE_REACTION_REMOVE", closure_130_0, closure_130_1, closure_130_2, obj2);
          let obj5 = closure_131_1(closure_131_2[12]);
          c4 = 2;
          c5 = 1;
          let obj3 = { value: obj5.unarchiveThreadIfNecessary(closure_130_0), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        let obj4 = { value, done: true };
        return obj4;
      } else {
        let HTTP = closure_131_0(closure_131_2[11]).HTTP;
        let del = HTTP.del;
        let tmp16 = closure_131_14;
        obj5 = { channelId: closure_130_0, messageId: closure_130_1, emoji: closure_130_2, userId: null, type: null, useTypeEndpoint: true };
        let userId = closure_130_4;
        if (closure_130_4 == null) {
          userId = "@me";
        }
        obj5.userId = userId;
        let ReactionTypes = closure_131_0(closure_131_2[10]).ReactionTypes;
        if (closure_130_6) {
          let NORMAL = ReactionTypes.BURST;
        } else {
          NORMAL = ReactionTypes.NORMAL;
        }
        const request = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
        obj5.type = NORMAL;
        request.url = tmp16(obj5);
        const obj6 = { location: closure_130_3, burst: null };
        tmp16 = closure_130_6;
        obj6.burst = closure_130_6;
        request.query = obj6;
        obj5 = closure_131_0(closure_131_2[11]);
        request.rejectWithError = obj5.rejectWithMigratedError();
        HTTP = del(request);
        del = HTTP.then(() => {
          burst = undefined;
          if (burst != null) {
            burst = burst.burst;
          }
          const AccessibilityAnnouncer = closure_0(user[15]).AccessibilityAnnouncer;
          const announce = AccessibilityAnnouncer.announce;
          const intl = closure_0(user[7]).intl;
          const formatToPlainString = intl.formatToPlainString;
          const t = closure_0(user[7]).t;
          if (burst) {
            obj = { name: user.name };
            announce(formatToPlainString(t["3l9f6u"], obj));
          } else {
            obj = { name: user.name };
            announce(formatToPlainString(t["DQxi+7"], obj));
          }
        });
        ReactionTypes = del.catch((() => {
          closure_0 = closure_1_3(function*(arg0, value) {
            if (userId === 2) {
              userId = 3;
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
                userId = 2;
                if (0 === num3) {
                  num3 = 1;
                  if (arg0 === 1) {
                    userId = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    userId = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    const messageId = tmp3;
                    closure_129_0 = undefined;
                    let intl = { isRetry };
                    if (closure_2_12(channelId, () => {
                      let options = { channelId, messageId, emoji, location: _location, userId, options: null };
                      options = { burst, isRetry: true };
                      options.options = options;
                      return closure_2_22(options);
                    }, intl)) {
                      userId = num3;
                      const obj1 = { value: closure_2_24(tmp2, burst2), done: false };
                      return obj1;
                    } else {
                      userId = 3;
                    }
                  }
                } else if (arg0 === 1) {
                  userId = 3;
                  throw value;
                } else if (arg0 === 2) {
                  userId = 3;
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  closure_129_0 = value;
                  const obj3 = { userId, burst: burst2, colors: closure_129_0 };
                  closure_2_13("MESSAGE_REACTION_ADD", channelId, messageId, tmp2, obj3);
                  burst = undefined;
                  if (burst != null) {
                    burst = burst.burst;
                  }
                  const AccessibilityAnnouncer = channelId(4411).AccessibilityAnnouncer;
                  intl = channelId(1114).intl;
                  if (!burst) {
                    const obj4 = { name: tmp2.name };
                    AccessibilityAnnouncer.announce(intl.formatToPlainString(channelId(1114).t["tD9+b+"], obj4));
                  }
                }
                const obj5 = { name: tmp2.name };
                num3 = tmp11(tmp14(num3.OamVbV, obj5));
              } catch (tmp24) {
                userId = tmp;
                throw tmp24;
              }
            }
          });
          return function() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
        })());
        c5 = 3;
      }
    } catch (tmp41) {
      c5 = tmp;
      throw tmp41;
    }
  }
};
function getOptimisticEmojiColors() {
  const self = this;
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_25 = async function _getOptimisticEmojiColors(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c5 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp4;
          closure_130_0 = [];
          if (closure_1) {
            c4 = 1;
            let obj1 = EmojiUtils;
            c3 = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.getEmojiColors(tmp9);
            return obj1;
          }
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_0 = value;
          c4 = 0;
        }
        c4 = 0;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      }
      c5 = 3;
    } catch (tmp15) {
      if (tmp3 === c4) {
        c5 = tmp2;
        throw tmp15;
      } else {
        c3 = tmp;
      }
    }
  }
};
function hasUserAlreadyReacted(arg0, arg1, arg2, arg3) {
  const message = MessageStore.getMessage(arg0, arg1);
  let result = null != message;
  if (result) {
    result = message.userHasReactedWithEmoji(arg2, arg3);
  }
  return result;
}
const Constants = fn(1074);
({ AbortCodes: closure_7, AnalyticEvents: closure_8, ComponentActions: closure_9, Endpoints: c10 } = Constants);
const ReactionLocations = { MESSAGE: "Message", FORUM_TOOLBAR: "Forum Toolbar", MOBILE_MEDIA_VIEWER: "Mobile Media Viewer", MESSAGE_HOVER_BAR: "Message Hover Bar", MESSAGE_INLINE_BUTTON: "Message Inline Button", MESSAGE_CONTEXT_MENU: "Message Context Menu", MESSAGE_REACTION_PICKER: "Message Reaction Picker", MESSAGE_SHORTCUT: "Message Shortcut", DOUBLE_TAP: "Double Tap", IN_APP_NOTIFICATION: "In App Notification" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/ReactionActionCreators.tsx");

export { ReactionLocations };
export const getReactors = function getReactors() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { addReaction };
export const playBurstReaction = function playBurstReaction(arg0) {
  ({ channelId, messageId, emoji, key } = arg0);
  DispatcherDefault.dispatch({ type: "BURST_REACTION_EFFECT_PLAY", channelId, messageId, emoji, key });
};
export { removeAllReactions };
export { removeEmojiReactions };
export { removeReaction };
export { hasUserAlreadyReacted };