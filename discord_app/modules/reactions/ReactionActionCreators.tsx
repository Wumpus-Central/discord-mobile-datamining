// discord_app/modules/reactions/ReactionActionCreators.tsx
import setDefault from "../../utils/Durations.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import ComponentDispatcher from "../../utils/ComponentDispatchUtils.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import setDefault2 from "../../actions/AlertActionCreators.tsx";
import ReactionTypes2 from "../messages/MessageReactionsTypes.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/AuthenticationStore.tsx";
import closure_5 from "../../stores/ChannelStore.tsx";
import closure_6 from "../../stores/MessageStore.tsx";
import ME from "../../Constants.tsx";

require = arg1;
function checkReactionResponse(arg0, arg1, isRetry) {
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
        const timerId = setTimeout(arg1, parsed * setDefault.Millis.SECOND);
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
        obj = setDefault2;
        obj = { title: null, body: null, confirmText: null };
        const intl = getSystemLocale.intl;
        obj[0] = intl.string(getSystemLocale.t.lFddsR);
        const intl2 = getSystemLocale.intl;
        obj[1] = intl2.string(getSystemLocale.t.h27eIm);
        const intl3 = getSystemLocale.intl;
        obj[2] = intl3.string(getSystemLocale.t.BddRzS);
        obj.show(obj);
      } else if (tmp3.REACTION_BLOCKED === code) {
        const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
        ComponentDispatch.dispatch(constants2.SHAKE_APP, { duration: 200, intensity: 2 });
      }
    } else if (!isRetry.isRetry) {
      arg1();
      return false;
    }
    return true;
  }
}
function optimisticDispatch(type, channelId, messageId, arg3, userId) {
  obj = dispatcherDefault;
  obj = { type, channelId, messageId, userId: null, emoji: null, optimistic: true, colors: null, reactionType: null };
  userId = userId.userId;
  if (userId == null) {
    userId = id.getId();
  }
  obj[3] = userId;
  obj[4] = arg3;
  let colors = userId.colors;
  if (colors == null) {
    colors = [];
  }
  obj[6] = colors;
  const ReactionTypes = ReactionTypes2.ReactionTypes;
  obj[7] = userId.burst ? ReactionTypes.BURST : ReactionTypes.NORMAL;
  obj.dispatch(obj);
}
function makeURL(type) {
  ({ channelId, messageId, emoji, userId, useTypeEndpoint } = type);
  if (useTypeEndpoint === undefined) {
    useTypeEndpoint = false;
  }
  let NORMAL = type.type;
  if (NORMAL === undefined) {
    NORMAL = ReactionTypes2.ReactionTypes.NORMAL;
  }
  if (null != emoji.id) {
    const _HermesInternal = HermesInternal;
    let name = "" + emoji.name + ":" + emoji.id;
  } else {
    name = emoji.name;
  }
  if (null == userId) {
    let REACTIONSResult = closure_10.REACTIONS(channelId, messageId, name);
  } else if (useTypeEndpoint) {
    REACTIONSResult = obj.REACTION_WITH_TYPE(channelId, messageId, name, userId, NORMAL);
  } else {
    REACTIONSResult = obj.REACTION(channelId, messageId, name, userId);
  }
  return REACTIONSResult;
}
function _getReactors() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              let callback2 = tmp2;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ channelId: c0, messageId: c1, emoji: c2, limit: c3, after: c4, type: c5 } = callback);
              closure_6 = undefined;
              closure_7 = undefined;
              let body;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (c5 === callback(7440).ReactionTypes.VOTE) {
                let tmp28 = (function makeURLForVoteReactors(c0, c1, c2) {
                  let name = c2.id;
                  if (name == null) {
                    name = c2.name;
                  }
                  return closure_10.POLL_ANSWER_VOTERS(c0, c1, name);
                })(callback, callback2, dependencyMap);
              } else {
                const obj2 = { channelId: null, messageId: null, emoji: null };
                obj2[0] = callback;
                obj2[1] = callback2;
                obj2[2] = dependencyMap;
                tmp28 = callback3(obj2);
              }
              closure_6 = tmp28;
              const HTTP = callback(530).HTTP;
              const obj3 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
              obj3[0] = closure_6;
              const obj4 = { limit: null, after: null, type: null };
              obj4[0] = c3;
              obj4[1] = c4;
              obj4[2] = c5;
              obj3[1] = obj4;
              let obj5 = callback(530);
              obj3[3] = obj5.rejectWithMigratedError();
              const value = HTTP.get(obj3);
              c3 = 2;
              c4 = 1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_7 = arg1;
            let tmp14;
            if (c5 === callback(7440).ReactionTypes.VOTE) {
              body = closure_7.body.users;
            } else {
              body = closure_7.body;
            }
            tmp14 = callback2(709);
            obj = { type: "MESSAGE_REACTION_ADD_USERS", channelId: null, messageId: null, users: null, emoji: null, reactionType: null };
            obj[1] = callback;
            obj[2] = callback2;
            obj[3] = body;
            obj[4] = dependencyMap;
            obj[5] = c5;
            tmp14.dispatch(obj);
            c4 = 3;
          }
        } catch (tmp43) {
          c4 = tmp;
          throw tmp43;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function addReaction() {
  const self = this;
  const apply = _addReaction.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _addReaction() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    c7 = 0;
    c8 = 0;
    const iter = (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let isRetry = tmp3;
              let burst = tmp2;
              let MESSAGE;
              closure_4 = undefined;
              if (MESSAGE === undefined) {
                MESSAGE = closure_1_11.MESSAGE;
              }
              burst = undefined;
              isRetry = undefined;
              c7 = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              burst = null != closure_4;
              if (burst) {
                burst = closure_4.burst;
              }
              isRetry = null != closure_4;
              if (isRetry) {
                isRetry = closure_4.isRetry;
              }
              if (!isRetry) {
                if (callback6(callback, callback2, dependencyMap, burst)) {
                  let obj5 = callback2(4809);
                  let obj2 = { title: null, body: null, confirmText: null };
                  let intl = callback(1236).intl;
                  obj2[0] = intl.string(callback(1236).t["uaUU/g"]);
                  const intl2 = callback(1236).intl;
                  obj2[1] = intl2.string(callback(1236).t.psMorl);
                  const intl3 = callback(1236).intl;
                  obj2[2] = intl3.string(callback(1236).t["NX+WJN"]);
                  obj5.show(obj2);
                  c8 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
              c7 = 2;
              c8 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = callback5(dependencyMap, burst);
              return obj3;
            }
          } else if (2 === tmp6) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              c7 = arg1;
              obj5 = { burst: null, colors: null };
              obj5[0] = burst;
              obj5[1] = c7;
              callback3("MESSAGE_REACTION_ADD", callback, callback2, dependencyMap, obj5);
              c7 = 3;
              c8 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = callback2(7442).unarchiveThreadIfNecessary(callback);
              return obj6;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            let HTTP = callback(530).HTTP;
            let put = HTTP.put;
            let obj8 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
            const obj9 = { channelId: null, messageId: null, emoji: null, userId: "@me" };
            obj9[0] = callback;
            obj9[1] = callback2;
            obj9[2] = dependencyMap;
            obj8[0] = callback4(obj9);
            obj = { location: null, type: null };
            obj[0] = MESSAGE;
            let fn = callback(7440).ReactionTypes;
            if (burst) {
              let NORMAL = fn.BURST;
            } else {
              NORMAL = fn.NORMAL;
            }
            obj[1] = NORMAL;
            obj8[1] = obj;
            obj = callback(530);
            obj8[3] = obj.rejectWithMigratedError();
            HTTP = put(obj8);
            put = HTTP.then(() => {
              if ("Message Shortcut" === MESSAGE) {
                const channel = burst.getChannel(callback);
                obj = { channel_id: null, guild_id: null, original_message_id: null, emoji_id: null, action: "react" };
                obj[0] = callback;
                let guild_id;
                if (channel != null) {
                  guild_id = channel.guild_id;
                }
                obj[1] = guild_id;
                obj[2] = callback2;
                let name = user.id;
                if (name == null) {
                  name = user.name;
                }
                obj[3] = name;
                obj = callback(user[14]);
                let guild_id1;
                if (channel != null) {
                  guild_id1 = channel.guild_id;
                }
                const merged = Object.assign(obj.collectGuildAnalyticsMetadata(guild_id1));
                obj1 = callback(user[14]);
                const merged1 = Object.assign(obj1.collectChannelAnalyticsMetadata(channel));
                callback2(user[13]).track(constants.MESSAGE_SHORTCUT_ACTION_SENT, obj);
                const obj8 = callback2(user[13]);
              }
              const AccessibilityAnnouncer = callback(user[15]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = callback(user[7]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const t = callback(user[7]).t;
              if (burst) {
                obj = { name: null };
                obj[0] = user.name;
                announce(formatToPlainString(t["RJlG+R"], obj));
                obj1 = { channelId: null, messageId: null, emoji: null };
                obj1[0] = callback;
                obj1[1] = callback2;
                const obj2 = {};
                const merged2 = Object.assign(user);
                obj2.animated = false;
                obj1[2] = obj2;
                const result = callback2(user[16]).triggerFullscreenAnimation(obj1);
                const obj5 = callback2(user[16]);
              } else {
                const obj3 = { name: null };
                obj3[0] = user.name;
                announce(formatToPlainString(t.ol4acF, obj3));
              }
            });
            fn = (arg0) => {
              obj = { isRetry };
              if (closure_1_12(arg0, () => closure_1_16(closure_0, closure_1, closure_2, closure_3, { burst: closure_5, isRetry: true }), obj)) {
                obj = { burst: null };
                obj[0] = burst;
                let obj2 = callback2(user[9]);
                obj = { type: null, channelId: null, messageId: null, userId: null, emoji: null, optimistic: true, colors: null, reactionType: null };
                obj[0] = "MESSAGE_REACTION_REMOVE";
                obj[1] = callback;
                obj[2] = callback2;
                let userId = obj.userId;
                if (userId == null) {
                  userId = id.getId();
                }
                obj[3] = userId;
                obj[4] = user;
                let colors = obj.colors;
                if (colors == null) {
                  colors = [];
                }
                obj[6] = colors;
                const ReactionTypes = callback(tmp6[10]).ReactionTypes;
                if (obj.burst) {
                  let NORMAL = ReactionTypes.BURST;
                  let tmp10 = tmp9;
                } else {
                  NORMAL = ReactionTypes.NORMAL;
                  tmp10 = tmp9;
                }
                obj[7] = NORMAL;
                obj2.dispatch(obj);
                const AccessibilityAnnouncer = tmp10(tmp6[15]).AccessibilityAnnouncer;
                const announce = AccessibilityAnnouncer.announce;
                const intl = tmp10(tmp6[7]).intl;
                const formatToPlainString = intl.formatToPlainString;
                const t = tmp10(tmp6[7]).t;
                if (burst) {
                  obj1 = { name: null };
                  obj1[0] = tmp3.name;
                  announce(formatToPlainString(t.fJeu87, obj1));
                } else {
                  obj2 = { name: null };
                  obj2[0] = tmp3.name;
                  announce(formatToPlainString(t["UUn5V+"], obj2));
                }
              }
            };
            obj8 = put.catch(fn);
            c8 = 3;
          }
        } catch (tmp53) {
          c8 = tmp;
          throw tmp53;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_17 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function removeAllReactions(closure_0, closure_1) {
  const self = this;
  const apply = _removeAllReactions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeAllReactions() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp5;
              closure_3 = tmp2;
              let isRetry;
              isRetry = null != isRetry;
              if (isRetry) {
                isRetry = isRetry.isRetry;
              }
              obj1 = callback2(table[12]);
              c5 = 1;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.unarchiveThreadIfNecessary(callback);
              return obj1;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const HTTP = callback(isRetry[11]).HTTP;
            const obj2 = { url: null, oldFormErrors: true, rejectWithError: null };
            obj2[0] = closure_10.REMOVE_REACTIONS(callback, callback2);
            obj2[2] = callback(isRetry[11]).rejectWithMigratedError();
            const obj7 = callback(isRetry[11]);
            HTTP.del(obj2).catch((arg0) => {
              closure_1_12(arg0, () => closure_1_18(closure_0, closure_1, { isRetry: true }), { isRetry });
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
  });
  closure_19 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function removeEmojiReactions(channelId, messageId, emoji) {
  const self = this;
  const apply = _removeEmojiReactions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeEmojiReactions() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp5;
              let name = tmp2;
              let isRetry;
              name = undefined;
              isRetry = null != isRetry;
              if (isRetry) {
                isRetry = isRetry.isRetry;
              }
              c6 = 1;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback2(user[12]).unarchiveThreadIfNecessary(callback);
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
            if (null === user.id) {
              name = user.name;
            } else {
              const _HermesInternal = HermesInternal;
              name = "" + user.name + ":" + user.id;
            }
            const HTTP = callback(user[11]).HTTP;
            obj = { url: null, oldFormErrors: true, rejectWithError: null };
            obj[0] = closure_10.REMOVE_EMOJI_REACTIONS(callback, callback2, name);
            obj1 = callback(user[11]);
            obj[2] = obj1.rejectWithMigratedError();
            HTTP.del(obj).catch((arg0) => {
              closure_1_12(arg0, () => closure_1_20(closure_0, closure_1, closure_2, { isRetry: true }), { isRetry });
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
  });
  closure_21 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function removeReaction() {
  const self = this;
  const apply = _removeReaction.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeReaction() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              _location = tmp3;
              dependencyMap = tmp2;
              let callback;
              let callback2;
              dependencyMap = undefined;
              _location = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ channelId: c0, messageId: c1, emoji: c2, location: _location } = callback);
              if (_location === undefined) {
                _location = closure_1_11.MESSAGE;
              }
              ({ userId: c4, options: c5 } = callback);
              let burst;
              let isRetry;
              c4 = 1;
              c5 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              burst = null != c5;
              if (burst) {
                burst = c5.burst;
              }
              isRetry = null != c5;
              if (isRetry) {
                isRetry = c5.isRetry;
              }
              let obj2 = { userId: null, burst: null };
              obj2[0] = c4;
              obj2[1] = burst;
              callback3("MESSAGE_REACTION_REMOVE", callback, callback2, dependencyMap, obj2);
              let obj5 = callback2(7442);
              c4 = 2;
              c5 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = obj5.unarchiveThreadIfNecessary(callback);
              return obj3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            let HTTP = callback(530).HTTP;
            let del = HTTP.del;
            let tmp16 = closure_14;
            obj5 = { channelId: null, messageId: null, emoji: null, userId: null, type: null, useTypeEndpoint: true };
            obj5[0] = callback;
            obj5[1] = callback2;
            obj5[2] = dependencyMap;
            callback2 = c4;
            if (c4 == null) {
              callback2 = "@me";
            }
            obj5[3] = callback2;
            let ReactionTypes = callback(7440).ReactionTypes;
            if (burst) {
              let NORMAL = ReactionTypes.BURST;
            } else {
              NORMAL = ReactionTypes.NORMAL;
            }
            obj = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
            obj5[4] = NORMAL;
            obj[0] = tmp16(obj5);
            const obj6 = { location: null, burst: null };
            obj6[0] = _location;
            tmp16 = burst;
            obj6[1] = burst;
            obj[1] = obj6;
            obj5 = callback(530);
            obj[3] = obj5.rejectWithMigratedError();
            HTTP = del(obj);
            del = HTTP.then(() => {
              burst = undefined;
              if (burst != null) {
                burst = burst.burst;
              }
              const AccessibilityAnnouncer = _undefined(_undefined2[15]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = _undefined(_undefined2[7]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const t = _undefined(_undefined2[7]).t;
              if (burst) {
                obj = { name: null };
                obj[0] = _undefined2.name;
                announce(formatToPlainString(t["3l9f6u"], obj));
              } else {
                obj = { name: null };
                obj[0] = _undefined2.name;
                announce(formatToPlainString(t["DQxi+7"], obj));
              }
            });
            ReactionTypes = del.catch((() => {
              closure_0 = _location((arg0) => {
                closure_0 = arg0;
                c3 = 0;
                c4 = 0;
                return (/* F122488 */ function*() { ... })();
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
    })();
    iter.next();
    return iter;
  });
  closure_23 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getOptimisticEmojiColors() {
  const self = this;
  const apply = _getOptimisticEmojiColors.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getOptimisticEmojiColors() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c5 = 0;
    c4 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              let callback = [];
              if (closure_1) {
                c4 = 1;
                obj1 = callback(closure_1_2[17]);
                c3 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.getEmojiColors(tmp9);
                return obj1;
              }
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              callback = arg1;
              c4 = 0;
            }
            c4 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  closure_25 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function hasUserAlreadyReacted(arg0, arg1, arg2, arg3) {
  message = message.getMessage(arg0, arg1);
  let result = null != message;
  if (result) {
    result = message.userHasReactedWithEmoji(arg2, arg3);
  }
  return result;
}
({ AbortCodes: error, AnalyticEvents: closure_8, ComponentActions: c9, Endpoints: c10 } = ME);
let obj = { MESSAGE: "Message", FORUM_TOOLBAR: "Forum Toolbar", MOBILE_MEDIA_VIEWER: "Mobile Media Viewer", MESSAGE_HOVER_BAR: "Message Hover Bar", MESSAGE_INLINE_BUTTON: "Message Inline Button", MESSAGE_CONTEXT_MENU: "Message Context Menu", MESSAGE_REACTION_PICKER: "Message Reaction Picker", MESSAGE_SHORTCUT: "Message Shortcut", DOUBLE_TAP: "Double Tap", IN_APP_NOTIFICATION: "In App Notification" };
let result = require("set").fileFinishedImporting("modules/reactions/ReactionActionCreators.tsx");

export const ReactionLocations = obj;
export const getReactors = function getReactors(arg0) {
  const self = this;
  const apply = _getReactors.apply;
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
  dispatcherDefault.dispatch({ type: "BURST_REACTION_EFFECT_PLAY", channelId, messageId, emoji, key });
};
export { removeAllReactions };
export { removeEmojiReactions };
export { removeReaction };
export { hasUserAlreadyReacted };