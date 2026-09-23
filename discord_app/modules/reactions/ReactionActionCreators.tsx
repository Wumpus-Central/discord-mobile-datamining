// === Module 8091: ReactionActionCreators ===

// Module 8091 (ReactionActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1091 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import util from "util" /* 1115 */;
import EmojiUtils from "EmojiUtils" /* 4480 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5193 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 8090 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8092 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import MessageStore from "MessageStore" /* 5047 */;

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
        const obj2 = { title: null, body: null, confirmText: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t.lFddsR);
        const intl2 = util.intl;
        obj2.body = intl2.string(util.t.h27eIm);
        const intl3 = util.intl;
        obj2.confirmText = intl3.string(util.t.BddRzS);
        AlertActionCreatorsDefault.show(obj2);
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
  const obj2 = { type, channelId, messageId, userId: null, emoji: null, optimistic: true, colors: null, reactionType: null };
  userId = userId.userId;
  if (userId == null) {
    userId = AuthenticationStore.getId();
  }
  obj2.userId = userId;
  obj2.emoji = emoji;
  let colors = userId.colors;
  if (colors == null) {
    colors = [];
  }
  obj2.colors = colors;
  const ReactionTypes = MessageReactionsTypes.ReactionTypes;
  obj2.reactionType = userId.burst ? ReactionTypes.BURST : ReactionTypes.NORMAL;
  DispatcherDefault.dispatch(obj2);
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
    REACTIONSResult = closure_1_10.REACTION_WITH_TYPE(channelId, messageId, name, userId, NORMAL);
  } else {
    REACTIONSResult = closure_1_10.REACTION(channelId, messageId, name, userId);
  }
  return REACTIONSResult;
}
let closure_15 = async function _getReactors(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
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
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
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
            const obj5 = { channelId: closure_129_0, messageId: closure_129_1, emoji: closure_129_2 };
            tmp28 = closure_130_14(obj5);
          }
          closure_129_6 = tmp28;
          const HTTP = closure_130_0(closure_130_2[11]).HTTP;
          const request = { url: closure_129_6, query: null, oldFormErrors: true, rejectWithError: null };
          const obj7 = { limit: closure_129_3, after: closure_129_4, type: closure_129_5 };
          request.query = obj7;
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
        const obj8 = { value, done: true };
        return obj8;
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
let closure_17 = async function _addReaction(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
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
          let obj3 = { value, done: true };
          return obj3;
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
          return { value: "flex", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          let obj4 = { value, done: true };
          return obj4;
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
              let obj5 = { title: null, body: null, confirmText: null };
              let intl = closure_134_0(closure_134_2[7]).intl;
              obj5.title = intl.string(closure_134_0(closure_134_2[7]).t["uaUU/g"]);
              const intl2 = closure_134_0(closure_134_2[7]).intl;
              obj5.body = intl2.string(closure_134_0(closure_134_2[7]).t.psMorl);
              const intl3 = closure_134_0(closure_134_2[7]).intl;
              obj5.confirmText = intl3.string(closure_134_0(closure_134_2[7]).t["NX+WJN"]);
              closure_134_1(closure_134_2[6]).show(obj5);
              c8 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
          c7 = 2;
          c8 = 1;
          let obj7 = { value: closure_134_24(closure_133_2, closure_133_5), done: false };
          return obj7;
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          let obj8 = { value, done: true };
          return obj8;
        } else {
          closure_133_7 = value;
          let obj9 = { burst: closure_133_5, colors: closure_133_7 };
          closure_134_13("MESSAGE_REACTION_ADD", closure_133_0, closure_133_1, closure_133_2, obj9);
          c7 = 3;
          c8 = 1;
          const obj10 = { value: closure_134_1(closure_134_2[12]).unarchiveThreadIfNecessary(closure_133_0), done: false };
          return obj10;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        let HTTP = closure_134_0(closure_134_2[11]).HTTP;
        let put = HTTP.put;
        let request = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
        const obj12 = { channelId: closure_133_0, messageId: closure_133_1, emoji: closure_133_2, userId: "@me" };
        request.url = closure_134_14(obj12);
        let query = { location: closure_133_3, type: null };
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
            const obj3 = { channel_id: channelId, guild_id: null, original_message_id: null, emoji_id: null, action: "react" };
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            obj3.guild_id = guild_id;
            obj3.original_message_id = messageId;
            let name = user.id;
            if (name == null) {
              name = user.name;
            }
            obj3.emoji_id = name;
            const obj8 = closure_1(user[13]);
            let guild_id1;
            if (channel != null) {
              guild_id1 = channel.guild_id;
            }
            const merged = Object.assign(closure_0(user[14]).collectGuildAnalyticsMetadata(guild_id1));
            obj = closure_0(user[14]);
            const merged1 = Object.assign(closure_0(user[14]).collectChannelAnalyticsMetadata(channel));
            obj8.track(constants.MESSAGE_SHORTCUT_ACTION_SENT, obj3);
            const obj2 = closure_0(user[14]);
          }
          const AccessibilityAnnouncer = closure_0(user[15]).AccessibilityAnnouncer;
          const announce = AccessibilityAnnouncer.announce;
          const intl = closure_0(user[7]).intl;
          const formatToPlainString = intl.formatToPlainString;
          const t = closure_0(user[7]).t;
          if (closure_1_5) {
            const obj4 = { name: user.name };
            announce(formatToPlainString(t["RJlG+R"], obj4));
            const obj6 = { channelId, messageId, emoji: null };
            const obj7 = {};
            const merged2 = Object.assign(user);
            obj7.animated = false;
            obj6.emoji = obj7;
            const result = closure_1(user[16]).triggerFullscreenAnimation(obj6);
            const obj5 = closure_1(user[16]);
          } else {
            const obj9 = { name: user.name };
            announce(formatToPlainString(t.ol4acF, obj9));
          }
        });
        fn = (arg0) => {
          if (closure_2_12(arg0, () => closure_2_16(closure_1_0, closure_1_1, user, closure_1_3, { burst, isRetry: true }), obj)) {
            const obj2 = { burst };
            const obj4 = { type: "MESSAGE_REACTION_REMOVE", channelId, messageId, userId: null, emoji: null, optimistic: true, colors: null, reactionType: null };
            let userId = obj2.userId;
            if (userId == null) {
              userId = id.getId();
            }
            obj4.userId = userId;
            obj4.emoji = emoji;
            let colors = obj2.colors;
            if (colors == null) {
              colors = [];
            }
            obj4.colors = colors;
            const ReactionTypes = closure_0(user[10]).ReactionTypes;
            if (obj2.burst) {
              let NORMAL = ReactionTypes.BURST;
              let tmp10 = closure_0;
            } else {
              NORMAL = ReactionTypes.NORMAL;
              tmp10 = closure_0;
            }
            obj4.reactionType = NORMAL;
            closure_1(user[9]).dispatch(obj4);
            const AccessibilityAnnouncer = tmp10(user[15]).AccessibilityAnnouncer;
            const announce = AccessibilityAnnouncer.announce;
            const intl = tmp10(user[7]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const t = tmp10(user[7]).t;
            if (burst) {
              const obj5 = { name: emoji.name };
              announce(formatToPlainString(t.fJeu87, obj5));
            } else {
              const obj6 = { name: emoji.name };
              announce(formatToPlainString(t["UUn5V+"], obj6));
            }
            const obj3 = closure_1(user[9]);
          }
          obj = { isRetry };
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
        const obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
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
            c5 = 1;
            c6 = 1;
            const obj5 = { value: ThreadActionCreatorsDefault.unarchiveThreadIfNecessary(closure_0), done: false };
            return obj5;
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
          const obj6 = { url: closure_132_10.REMOVE_REACTIONS(closure_131_0, closure_131_1), oldFormErrors: true, rejectWithError: closure_132_0(closure_132_2[11]).rejectWithMigratedError() };
          const obj7 = closure_132_0(closure_132_2[11]);
          HTTP.del(obj6).catch((error) => {
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
        const obj3 = { value, done: true };
        return obj3;
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
            const obj5 = { value, done: true };
            return obj5;
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
            const obj6 = { value: ThreadActionCreatorsDefault.unarchiveThreadIfNecessary(closure_0), done: false };
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
          if (null === closure_132_2.id) {
            let name = closure_132_2.name;
          } else {
            const _HermesInternal = HermesInternal;
            name = "" + closure_132_2.name + ":" + closure_132_2.id;
          }
          closure_132_4 = name;
          const HTTP = closure_133_0(closure_133_2[11]).HTTP;
          obj = { url: closure_133_10.REMOVE_EMOJI_REACTIONS(closure_132_0, closure_132_1, closure_132_4), oldFormErrors: true, rejectWithError: closure_133_0(closure_133_2[11]).rejectWithMigratedError() };
          const obj2 = closure_133_0(closure_133_2[11]);
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
let closure_23 = async function _removeReaction(arg0) {
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
          let obj2 = { value, done: true };
          return obj2;
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
          return { value: "flex", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj3 = { value, done: true };
          return obj3;
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
          let obj4 = { userId: closure_130_4, burst: closure_130_6 };
          closure_131_13("MESSAGE_REACTION_REMOVE", closure_130_0, closure_130_1, closure_130_2, obj4);
          c4 = 2;
          c5 = 1;
          let obj5 = { value: closure_131_1(closure_131_2[12]).unarchiveThreadIfNecessary(closure_130_0), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        let obj7 = { value, done: true };
        return obj7;
      } else {
        let HTTP = closure_131_0(closure_131_2[11]).HTTP;
        let del = HTTP.del;
        let tmp16 = closure_131_14;
        let obj8 = { channelId: closure_130_0, messageId: closure_130_1, emoji: closure_130_2, userId: null, type: null, useTypeEndpoint: true };
        let userId = closure_130_4;
        if (closure_130_4 == null) {
          userId = "@me";
        }
        obj8.userId = userId;
        let ReactionTypes = closure_131_0(closure_131_2[10]).ReactionTypes;
        if (closure_130_6) {
          let NORMAL = ReactionTypes.BURST;
        } else {
          NORMAL = ReactionTypes.NORMAL;
        }
        const request = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
        obj8.type = NORMAL;
        request.url = tmp16(obj8);
        const obj9 = { location: closure_130_3, burst: null };
        tmp16 = closure_130_6;
        obj9.burst = closure_130_6;
        request.query = obj9;
        obj8 = closure_131_0(closure_131_2[11]);
        request.rejectWithError = obj8.rejectWithMigratedError();
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
            const obj2 = { name: user.name };
            announce(formatToPlainString(t["3l9f6u"], obj2));
          } else {
            obj = { name: user.name };
            announce(formatToPlainString(t["DQxi+7"], obj));
          }
        });
        ReactionTypes = del.catch((() => {
          closure_0 = closure_1_3(function*(arg0) {
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
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    const messageId = tmp3;
                    closure_129_0 = undefined;
                    let intl = { isRetry };
                    if (closure_2_12(channelId, () => {
                      obj = { channelId, messageId, emoji, location: _location, userId, options: { burst, isRetry: true } };
                      return closure_2_22(obj);
                    }, intl)) {
                      userId = num3;
                      const obj3 = { value: closure_2_24(tmp2, burst2), done: false };
                      return obj3;
                    } else {
                      userId = 3;
                    }
                  }
                } else if (arg0 === 1) {
                  userId = 3;
                  throw value;
                } else if (arg0 === 2) {
                  userId = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_129_0 = value;
                  const obj5 = { userId, burst: burst2, colors: closure_129_0 };
                  closure_2_13("MESSAGE_REACTION_ADD", channelId, messageId, tmp2, obj5);
                  burst = undefined;
                  if (burst != null) {
                    burst = burst.burst;
                  }
                  const AccessibilityAnnouncer = channelId(4678).AccessibilityAnnouncer;
                  intl = channelId(1115).intl;
                  if (!burst) {
                    const obj6 = { name: tmp2.name };
                    AccessibilityAnnouncer.announce(intl.formatToPlainString(channelId(1115).t["tD9+b+"], obj6));
                  }
                }
                const obj7 = { name: tmp2.name };
                num3 = tmp11(tmp14(num3.OamVbV, obj7));
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
let closure_25 = async function _getOptimisticEmojiColors(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp4;
          closure_130_0 = [];
          if (closure_1) {
            c4 = 1;
            c3 = 2;
            c5 = 1;
            const obj5 = { value: EmojiUtils.getEmojiColors(tmp9), done: false };
            return obj5;
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