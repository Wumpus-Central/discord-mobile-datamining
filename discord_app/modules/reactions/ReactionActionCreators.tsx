// === Module 7260: ReactionActionCreators ===

// Module 7260 (ReactionActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import intl4 from "intl" /* 1126 */;
import EmojiUtils from "EmojiUtils" /* 4527 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7259 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7261 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5110 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c8, closure_2;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
function checkReactionResponse(arg0, fn, isRetry) {
  let body;
  let intl;
  let intl2;
  let intl3;
  let status;
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
      if (metroImportDefault.TOO_MANY_REACTIONS === (body && body.code)) {
        obj = { title: intl.string(intl4.t.lFddsR), body: intl2.string(intl4.t.h27eIm), confirmText: intl3.string(intl4.t.BddRzS) };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = intl4.intl;
        intl2 = intl4.intl;
        intl3 = intl4.intl;
        show(obj);
      } else if (tmp4.REACTION_BLOCKED === (body && body.code)) {
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
  let ReactionTypes;
  let burst;
  let colors;
  obj = { type, channelId, messageId, userId, emoji, optimistic: true, colors, reactionType: burst ? ReactionTypes.BURST : ReactionTypes.NORMAL };
  userId = userId.userId;
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (userId == null) {
    userId = AuthenticationStore.getId();
  }
  colors = userId.colors;
  if (colors == null) {
    colors = [];
  }
  burst = userId.burst;
  ReactionTypes = MessageReactionsTypes.ReactionTypes;
  dispatch(obj);
}
function makeURL(type) {
  let REACTIONSResult;
  let channelId;
  let emoji;
  let messageId;
  let name;
  let useTypeEndpoint;
  let userId;
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
    name = "" + emoji.name + ":" + emoji.id;
  } else {
    name = emoji.name;
  }
  if (null == userId) {
    REACTIONSResult = authStore.REACTIONS(channelId, messageId, name);
  } else if (useTypeEndpoint) {
    REACTIONSResult = authStore.REACTION_WITH_TYPE(channelId, messageId, name, userId, NORMAL);
  } else {
    REACTIONSResult = authStore.REACTION(channelId, messageId, name, userId);
  }
  return REACTIONSResult;
}
let obj = function _getReactors() {
  obj = _asyncToGenerator(async (channelId) => {
    let after;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let limit;
    let obj6;
    let obj8;
    function makeURLForVoteReactors(c0, c1, c2) {
      let name = user.id;
      if (name == null) {
        name = user.name;
      }
      return closure_1_10.POLL_ANSWER_VOTERS(c0, c1, name);
    }
    if (after === 2) {
      after = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (channelId === 1) {
        throw value;
      } else if (channelId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let messageId;
        let emoji;
        let reactionType;
        let url;
        let closure_7;
        let body;
        after = 2;
        if (0 === limit) {
          if (channelId === 1) {
            after = 3;
            throw value;
          } else if (channelId === 2) {
            after = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const user = tmp4;
            let closure_1 = tmp;
            channelId = undefined;
            messageId = undefined;
            emoji = undefined;
            reactionType = undefined;
            ({ channelId: c0, messageId: c1, emoji: c2, limit: c3, after: c4, type: c5 } = closure_0);
            url = undefined;
            closure_7 = undefined;
            body = undefined;
            limit = 1;
            after = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === limit) {
          if (channelId === 1) {
            after = 3;
            throw value;
          } else if (channelId === 2) {
            after = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let tmp25;
            if (reactionType === closure_130_0(closure_130_2[10]).ReactionTypes.VOTE) {
              tmp25 = makeURLForVoteReactors(channelId, messageId, emoji);
            } else {
              const obj5 = { channelId, messageId, emoji };
              tmp25 = closure_130_14(obj5);
            }
            url = tmp25;
            const HTTP = closure_130_0(closure_130_2[11]).HTTP;
            const request = { url, query: obj6, oldFormErrors: true, rejectWithError: obj8.rejectWithMigratedError() };
            obj6 = { limit, after, type: reactionType };
            const get = HTTP.get;
            obj8 = closure_130_0(closure_130_2[11]);
            limit = 2;
            after = 1;
            const obj7 = { value: get(request), done: false };
            return obj7;
          }
        } else if (channelId === 1) {
          after = 3;
          throw value;
        } else if (channelId === 2) {
          after = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_7 = value;
          if (reactionType === closure_130_0(closure_130_2[10]).ReactionTypes.VOTE) {
            body = closure_7.body.users;
          } else {
            body = closure_7.body;
          }
          const obj10 = { type: "MESSAGE_REACTION_ADD_USERS", channelId, messageId, users: body, emoji, reactionType };
          obj = closure_130_1(closure_130_2[9]);
          obj.dispatch(obj10);
          after = 3;
          const obj11 = { value: body, done: true };
          return obj11;
        }
      } catch (tmp40) {
        after = 3;
        throw tmp40;
      }
    }
  });
  return obj(...arguments);
};
function addReaction() {
  return obj(...arguments);
}
obj = function _addReaction() {
  obj = _asyncToGenerator(async (channelId, messageId, emoji) => {
    let NORMAL;
    let closure_4;
    let closure_5;
    let closure_6;
    let intl;
    let intl2;
    let intl3;
    let nextPromise;
    let obj11;
    let obj12;
    let obj15;
    let closure_3 = arg3;
    if (c8 === 2) {
      c8 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (channelId === 1) {
        throw value;
      } else if (channelId === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let isRetry;
        let burst;
        let id;
        let MESSAGE;
        let colors;
        c8 = 2;
        const tmp5 = c7;
        if (0 === c7) {
          if (channelId === 1) {
            c8 = 3;
            throw value;
          } else if (channelId === 2) {
            c8 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            isRetry = tmp2;
            burst = tmp;
            id = undefined;
            MESSAGE = closure_3;
            if (closure_3 === undefined) {
              MESSAGE = constants.MESSAGE;
            }
            burst = undefined;
            isRetry = undefined;
            colors = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === tmp5) {
          if (channelId === 1) {
            c8 = 3;
            throw value;
          } else if (channelId === 2) {
            c8 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            burst = null != id;
            if (burst) {
              let tmp11 = id;
              burst = id.burst;
            }
            isRetry = null != id && id.isRetry;
            const tmp19 = isRetry;
            if (!tmp19) {
              if (closure_134_26(channelId, messageId, emoji, burst)) {
                let obj5 = { title: intl.string(closure_134_0(closure_134_2[7]).t["uaUU/g"]), body: intl2.string(closure_134_0(closure_134_2[7]).t.psMorl), confirmText: intl3.string(closure_134_0(closure_134_2[7]).t["NX+WJN"]) };
                const show = closure_134_1(closure_134_2[6]).show;
                const tmp29 = closure_134_1(closure_134_2[6]);
                intl = closure_134_0(closure_134_2[7]).intl;
                intl2 = closure_134_0(closure_134_2[7]).intl;
                intl3 = closure_134_0(closure_134_2[7]).intl;
                show(obj5);
                c8 = 3;
                return { value: "IconComponent", done: null };
              }
            }
            c7 = 2;
            c8 = 1;
            let obj6 = { value: closure_134_24(emoji, burst), done: false };
            return obj6;
          }
        } else if (2 === tmp5) {
          if (channelId === 1) {
            c8 = 3;
            throw value;
          } else if (channelId === 2) {
            c8 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            colors = value;
            const obj8 = { burst, colors };
            closure_134_13("MESSAGE_REACTION_ADD", channelId, messageId, emoji, obj8);
            c7 = 3;
            c8 = 1;
            const obj9 = { value: obj15.unarchiveThreadIfNecessary(channelId), done: false };
            obj15 = closure_134_1(closure_134_2[12]);
            return obj9;
          }
        } else if (channelId === 1) {
          c8 = 3;
          throw value;
        } else if (channelId === 2) {
          c8 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          const HTTP = closure_134_0(closure_134_2[11]).HTTP;
          const request = { url: closure_134_14(obj11), query: obj12, oldFormErrors: true, rejectWithError: obj.rejectWithMigratedError() };
          obj11 = { channelId, messageId, emoji, userId: "@me" };
          const put = HTTP.put;
          obj12 = { location: MESSAGE, type: NORMAL };
          let ReactionTypes = closure_134_0(closure_134_2[10]).ReactionTypes;
          if (burst) {
            NORMAL = ReactionTypes.BURST;
          } else {
            NORMAL = ReactionTypes.NORMAL;
          }
          obj = closure_134_0(closure_134_2[11]);
          const putResult = put(request);
          c8 = 3;
          const obj13 = {
            value: nextPromise.catch((error) => {
                    let NORMAL;
                    let userId;
                    obj = { isRetry };
                    if (closure_2_12(error, () => {
                      obj = { burst, isRetry: true };
                      return closure_2_16(closure_1_0, closure_1_1, user, closure_1_3, obj);
                    }, obj)) {
                      let tmp11;
                      const obj2 = { burst };
                      const obj3 = { type: "MESSAGE_REACTION_REMOVE", channelId, messageId, userId, emoji, optimistic: true, colors, reactionType: NORMAL };
                      userId = obj2.userId;
                      const dispatch = closure_1(user[9]).dispatch;
                      closure_1(user[9]);
                      if (userId == null) {
                        userId = id.getId();
                      }
                      colors = obj2.colors;
                      if (colors == null) {
                        colors = [];
                      }
                      burst = obj2.burst;
                      const ReactionTypes = closure_0(user[10]).ReactionTypes;
                      if (burst) {
                        NORMAL = ReactionTypes.BURST;
                        tmp11 = closure_0;
                      } else {
                        NORMAL = ReactionTypes.NORMAL;
                        tmp11 = closure_0;
                      }
                      dispatch(obj3);
                      const AccessibilityAnnouncer = tmp11(user[15]).AccessibilityAnnouncer;
                      const announce = AccessibilityAnnouncer.announce;
                      const intl = tmp11(user[7]).intl;
                      const formatToPlainString = intl.formatToPlainString;
                      const t = tmp11(user[7]).t;
                      if (burst) {
                        const obj4 = { name: emoji.name };
                        announce(formatToPlainString(t.fJeu87, obj4));
                      } else {
                        const obj5 = { name: emoji.name };
                        announce(formatToPlainString(t["UUn5V+"], obj5));
                      }
                    }
                  }),
            done: true
          };
          nextPromise = putResult.then(() => {
            let guild_id;
            let name;
            let obj5;
            if ("Message Shortcut" === closure_1_3) {
              const channel = burst.getChannel(channelId);
              const obj2 = { channel_id: channelId, guild_id, original_message_id: messageId, emoji_id: name, action: "react" };
              guild_id = undefined;
              const track = closure_1(user[13]).track;
              const MESSAGE_SHORTCUT_ACTION_SENT = constants.MESSAGE_SHORTCUT_ACTION_SENT;
              closure_1(user[13]);
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              name = user.id;
              if (name == null) {
                name = user.name;
              }
              let guild_id1;
              const collectGuildAnalyticsMetadata = closure_0(user[14]).collectGuildAnalyticsMetadata;
              closure_0(user[14]);
              if (channel != null) {
                guild_id1 = channel.guild_id;
              }
              const merged = Object.assign(collectGuildAnalyticsMetadata(guild_id1));
              obj = closure_0(user[14]);
              const merged1 = Object.assign(obj.collectChannelAnalyticsMetadata(channel));
              track(MESSAGE_SHORTCUT_ACTION_SENT, obj2);
            }
            const AccessibilityAnnouncer = closure_0(user[15]).AccessibilityAnnouncer;
            const announce = AccessibilityAnnouncer.announce;
            const intl = closure_0(user[7]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const t = closure_0(user[7]).t;
            if (closure_1_5) {
              const obj3 = { name: user.name };
              announce(formatToPlainString(t["RJlG+R"], obj3));
              const obj4 = { channelId, messageId, emoji: obj5 };
              obj5 = { animated: false };
              const triggerFullscreenAnimation = closure_1(user[16]).triggerFullscreenAnimation;
              closure_1(user[16]);
              const merged2 = Object.assign(user);
              const result = triggerFullscreenAnimation(obj4);
            } else {
              const obj6 = { name: user.name };
              announce(formatToPlainString(t.ol4acF, obj6));
            }
          });
          return obj13;
        }
      } catch (tmp53) {
        c8 = 3;
        throw tmp53;
      }
    }
  });
  return obj(...arguments);
};
function removeAllReactions() {
  return obj(...arguments);
}
obj = function _removeAllReactions() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let isRetry = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj2;
      let obj7;
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              closure_3 = tmp;
              isRetry = undefined;
              isRetry = null != isRetry && isRetry.isRetry;
              c5 = 1;
              c6 = 1;
              const obj5 = { value: obj2.unarchiveThreadIfNecessary(closure_0), done: false };
              obj2 = ThreadActionCreatorsDefault;
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
            const del = HTTP.del;
            const obj6 = { url: closure_132_10.REMOVE_REACTIONS(closure_0, closure_1), oldFormErrors: true, rejectWithError: obj7.rejectWithMigratedError() };
            obj7 = closure_132_0(closure_132_2[11]);
            const delResult = del(obj6);
            delResult.catch((error) => {
              obj = { isRetry };
              closure_2_12(error, () => closure_2_18(closure_1_0, closure_1_1, { isRetry: true }), obj);
            });
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c6 = 3;
          throw tmp8;
        }
      }
    })();
  });
  return obj(...arguments);
};
function removeEmojiReactions() {
  return obj(...arguments);
}
obj = function _removeEmojiReactions() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const user = arg2;
    let isRetry = arg3;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj2;
      let obj4;
      if (c7 === 2) {
        c7 = 3;
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
          let name;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              closure_4 = tmp;
              isRetry = undefined;
              name = undefined;
              isRetry = null != isRetry && isRetry.isRetry;
              c6 = 1;
              c7 = 1;
              const obj6 = { value: obj4.unarchiveThreadIfNecessary(closure_0), done: false };
              obj4 = ThreadActionCreatorsDefault;
              return obj6;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            if (null === user.id) {
              name = user.name;
            } else {
              const _HermesInternal = HermesInternal;
              name = "" + user.name + ":" + user.id;
            }
            const HTTP = closure_133_0(closure_133_2[11]).HTTP;
            obj = { url: closure_133_10.REMOVE_EMOJI_REACTIONS(closure_0, closure_1, name), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
            const del = HTTP.del;
            obj2 = closure_133_0(closure_133_2[11]);
            const delResult = del(obj);
            delResult.catch((error) => {
              obj = { isRetry };
              closure_2_12(error, () => closure_2_20(closure_1_0, closure_1_1, closure_1_2, { isRetry: true }), obj);
            });
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp24) {
          c7 = 3;
          throw tmp24;
        }
      }
    })();
  });
  return obj(...arguments);
};
function removeReaction() {
  return obj(...arguments);
}
obj = function _removeReaction() {
  obj = _asyncToGenerator(async (channelId) => {
    let NORMAL;
    let _location;
    let c0;
    let c1;
    let c2;
    let c4;
    let c5;
    let closure_3;
    let me;
    let obj10;
    let obj3;
    let userId;
    let burst = null != c5;
    if (burst) {
      burst = c5.burst;
    }
    let isRetry = null != c5;
    if (isRetry) {
      isRetry = c5.isRetry;
    }
    let obj5 = { userId, burst };
    const str2 = "MESSAGE_REACTION_REMOVE";
    const tmp36 = closure_131_13("MESSAGE_REACTION_REMOVE", channelId, me, emoji, obj5);
    const obj6 = closure_131_1(closure_131_2[12]);
    await obj6.unarchiveThreadIfNecessary(channelId);
    const HTTP = closure_131_0(closure_131_2[11]).HTTP;
    const obj9 = { channelId, messageId: me, emoji, userId: me, type: NORMAL, useTypeEndpoint: true };
    const del = HTTP.del;
    if (userId == null) {
      const str = "@me";
      me = "@me";
    }
    const ReactionTypes = closure_131_0(closure_131_2[10]).ReactionTypes;
    if (burst) {
      NORMAL = ReactionTypes.BURST;
    } else {
      NORMAL = ReactionTypes.NORMAL;
    }
    const request = { url: closure_131_14(obj9), query: obj10, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    obj10 = { location: _location, burst };
    obj3 = closure_131_0(closure_131_2[11]);
    const delResult = del(request);
    const nextPromise = delResult.then(() => {
      burst = undefined;
      if (burst != null) {
        burst = burst.burst;
      }
      const AccessibilityAnnouncer = channelId(user[15]).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = channelId(user[7]).intl;
      const formatToPlainString = intl.formatToPlainString;
      const t = channelId(user[7]).t;
      if (burst) {
        const obj2 = { name: user.name };
        announce(formatToPlainString(t["3l9f6u"], obj2));
      } else {
        obj = { name: user.name };
        announce(formatToPlainString(t["DQxi+7"], obj));
      }
    });
    nextPromise.catch((() => {
      let closure_0 = closure_1_3((colors) => {
        let burst2;
        let closure_1;
        let isRetry;
        let c3 = 0;
        let c4 = 0;
        return (function*(arg0) {
          let _location;
          if (userId === 2) {
            userId = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let messageId;
              userId = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  userId = 3;
                  throw value;
                } else if (arg0 === 2) {
                  userId = 3;
                  return { value, done: true };
                } else {
                  user = tmp;
                  messageId = tmp2;
                  colors = undefined;
                  const obj4 = { isRetry };
                  if (closure_2_12(colors, () => {
                    let obj2;
                    obj = { channelId, messageId, emoji, location: _location, userId, options: obj2 };
                    obj2 = { burst, isRetry: true };
                    return closure_2_22(obj);
                  }, obj4)) {
                    c3 = 1;
                    userId = 1;
                    const obj5 = { value: closure_2_24(user, burst2), done: false };
                    return obj5;
                  }
                }
              } else if (arg0 === 1) {
                userId = 3;
                throw value;
              } else if (arg0 === 2) {
                userId = 3;
                return { value, done: true };
              } else {
                colors = value;
                const obj7 = { userId, burst: burst2, colors };
                closure_2_13("MESSAGE_REACTION_ADD", colors, messageId, user, obj7);
                burst = undefined;
                if (burst != null) {
                  burst = burst.burst;
                }
                const AccessibilityAnnouncer = colors(closure_2_2[15]).AccessibilityAnnouncer;
                const announce = AccessibilityAnnouncer.announce;
                const intl = colors(closure_2_2[7]).intl;
                const formatToPlainString = intl.formatToPlainString;
                const t = colors(closure_2_2[7]).t;
                if (burst) {
                  const obj8 = { name: user.name };
                  announce(formatToPlainString(t.OamVbV, obj8));
                } else {
                  obj = { name: user.name };
                  announce(formatToPlainString(t["tD9+b+"], obj));
                }
              }
              userId = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp21) {
              userId = 3;
              throw tmp21;
            }
          }
        })();
      });
      return function() {
        return closure_0(...arguments);
      };
    })());
    await "IconComponent";
    if (channelId === 1) {
      throw value;
    }
    if (channelId === 2) {
      return value;
    }
    let user = tmp;
    ({ channelId: c0, messageId: c1, emoji: c2, location: _location } = closure_0);
    if (_location === undefined) {
      _location = constants.MESSAGE;
    }
    ({ userId: c4, options: c5 } = closure_0);
    return "Set";
  });
  return obj(...arguments);
};
function getOptimisticEmojiColors() {
  return obj(...arguments);
}
obj = function _getOptimisticEmojiColors() {
  obj = _asyncToGenerator(async (value, arg1) => {
    let closure_1 = arg1;
    let c3 = 0;
    let c5 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj3;
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              value = [];
              if (closure_1) {
                c4 = 1;
                c3 = 2;
                c5 = 1;
                const obj5 = { value: obj3.getEmojiColors(tmp6), done: false };
                obj3 = EmojiUtils;
                return obj5;
              }
            }
          } else if (1 === tmp4) {
            c4 = 0;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c5 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
          }
          c5 = 3;
          return { value, done: true };
        } catch (tmp11) {
          if (0 === c4) {
            c5 = 3;
            throw tmp11;
          } else {
            c3 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function hasUserAlreadyReacted(arg0, arg1, arg2, arg3) {
  const message = MessageStore.getMessage(arg0, arg1);
  const result = null != message && message.userHasReactedWithEmoji(arg2, arg3);
  return result;
}
({ AbortCodes: metroImportDefault, AnalyticEvents: metroImportAll, ComponentActions: c9, Endpoints: c10 } = Constants);
obj = { MESSAGE: "Message", FORUM_TOOLBAR: "Forum Toolbar", MOBILE_MEDIA_VIEWER: "Mobile Media Viewer", MESSAGE_HOVER_BAR: "Message Hover Bar", MESSAGE_INLINE_BUTTON: "Message Inline Button", MESSAGE_CONTEXT_MENU: "Message Context Menu", MESSAGE_REACTION_PICKER: "Message Reaction Picker", MESSAGE_SHORTCUT: "Message Shortcut", DOUBLE_TAP: "Double Tap", IN_APP_NOTIFICATION: "In App Notification" };
let result = size.fileFinishedImporting("modules/reactions/ReactionActionCreators.tsx");

export const ReactionLocations = obj;
export const getReactors = function getReactors() {
  return obj(...arguments);
};
export { addReaction };
export const playBurstReaction = function playBurstReaction(arg0) {
  let channelId;
  let emoji;
  let key;
  let messageId;
  ({ channelId, messageId, emoji, key } = arg0);
  obj = DispatcherDefault;
  obj.dispatch({ type: "BURST_REACTION_EFFECT_PLAY", channelId, messageId, emoji, key });
};
export { removeAllReactions };
export { removeEmojiReactions };
export { removeReaction };
export { hasUserAlreadyReacted };