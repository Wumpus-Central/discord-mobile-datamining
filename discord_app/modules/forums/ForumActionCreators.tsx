// discord_app/modules/forums/ForumActionCreators.tsx
import sendRequest from "sendRequest";
import ME from "ME";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { markAnalyticsFeedItemSeen } from "../../utils/AnalyticsFeedItemSeenActionCreators.tsx";
import { maybeMarkSeen } from "../../utils/AnalyticsFeedItemSeenManager.tsx";
import { prototype } from "tracking/ForumChannelSeenManager.tsx";

let c4;
let c5;
const require = arg1;
function withErrorHandling(arg0, stringResult, intl2) {
  const self = this;
  const apply = _withErrorHandling.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _withErrorHandling() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
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
              const constants = tmp3;
              let sendRequest = tmp5;
              const callback = callback2;
              callback2 = closure_2;
              let c6 = 1;
              c7 = 2;
              c8 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback();
              return obj1;
            }
          } else if (1 === tmp8) {
            c6 = 0;
            closure_2 = closure_5;
            const body = closure_2.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === constants.NON_MODERATED_TAG_REQUIRED) {
              let obj4 = callback2(closure_2[2]);
              let obj2 = { title: null, body: null };
              obj2[0] = callback;
              obj2[1] = callback2;
              obj4.show(obj2);
            } else {
              const body3 = closure_2.body;
              let code1;
              if (body3 != null) {
                code1 = body3.code;
              }
              let tmp19 = code1 === constants.INVALID_FORM_BODY;
              if (tmp19) {
                const body2 = closure_2.body;
                let emoji;
                if (body2 != null) {
                  emoji = body2.errors.emoji;
                }
                tmp19 = emoji;
              }
              if (tmp19) {
                obj2 = callback2(closure_2[2]);
                const obj3 = { title: null, body: null };
                const intl = callback(closure_2[3]).intl;
                obj3[0] = intl.string(callback(closure_2[3]).t.T8sBLJ);
                const intl2 = callback(closure_2[3]).intl;
                obj3[1] = intl2.string(callback(closure_2[3]).t.aHt1Bd);
                obj2.show(obj3);
              }
            }
            c8 = 3;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp42) {
          closure_5 = tmp42;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp42;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _withErrorHandling = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AbortCodes: c4, Endpoints: c5 } = ME);
let result = require("set").fileFinishedImporting("modules/forums/ForumActionCreators.tsx");

export default {
  resort(id) {
    let obj = dispatcher;
    obj = { type: "RESORT_THREADS", channelId: id };
    obj.dispatch(obj);
  },
  createForumTag(name, channelId) {
    const HTTP = sendRequest.HTTP;
    let obj = { url: closure_5.FORUM_TAGS(channelId), body: null, rejectWithError: null };
    obj = { name: name.name, emoji_id: name.emojiId, emoji_name: null, moderated: null };
    let emojiName;
    if (null == name.emojiId) {
      emojiName = name.emojiName;
    }
    obj[2] = emojiName;
    obj[3] = name.moderated;
    obj[1] = obj;
    obj[2] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  updateForumTag(id, channelId) {
    const HTTP = _sendRequest.HTTP;
    let obj = { url: closure_5.FORUM_TAG(channelId, id.id), body: null, rejectWithError: null };
    obj = { name: id.name, emoji_id: id.emojiId, emoji_name: null, moderated: null };
    let emojiName;
    if (null == id.emojiId) {
      emojiName = id.emojiName;
    }
    obj[2] = emojiName;
    obj[3] = id.moderated;
    obj[1] = obj;
    obj[2] = _sendRequest.rejectWithMigratedError();
    _require = HTTP.put(obj);
    const intl = tmp(1236).intl;
    const tmpResult = _sendRequest;
    const intl2 = tmp(1236).intl;
    withErrorHandling(() => closure_0, intl.string(_getSystemLocale.t.T8sBLJ), intl2.string(_getSystemLocale.t.imcb5u));
  },
  deleteForumTag(closure_0, id) {
    const HTTP = _sendRequest.HTTP;
    const obj = { url: closure_5.FORUM_TAG(closure_0, id), rejectWithError: null };
    obj[1] = _sendRequest.rejectWithMigratedError();
    _require = HTTP.del(obj);
    const intl = _getSystemLocale.intl;
    const obj2 = _sendRequest;
    const intl2 = _getSystemLocale.intl;
    withErrorHandling(() => closure_0, intl.string(_getSystemLocale.t["0ZkNDU"]), intl2.string(_getSystemLocale.t.imcb5u));
  },
  updateForumPostTags(id, arg1) {
    let closure_0 = id;
    let closure_1 = arg1;
    return callback(function*() {
      let closure_0 = tmp4;
      const obj2 = v0(7144);
      yield obj2.unarchiveThreadIfNecessary(outer1_0);
      const HTTP = outer1_0(530).HTTP;
      const obj3 = { url: null, body: null, rejectWithError: null };
      obj3[0] = outer1_5.CHANNEL(closure_0);
      const obj4 = { applied_tags: null };
      obj4[0] = v0;
      obj3[1] = obj4;
      obj3[2] = outer1_0(530).rejectWithMigratedError();
      return HTTP.patch(obj3);
    })();
  },
  hideAdminOnboarding(channelId, hide) {
    let obj = dispatcher;
    obj = { type: "ADMIN_ONBOARDING_GUIDE_HIDE", channelId, hide };
    obj.dispatch(obj);
  },
  markPostAsSeen(arg0, feedItemId, timestampMillis) {
    const obj = markAnalyticsFeedItemSeen;
    const result = obj.markAnalyticsFeedItemSeen(prototype.getForumPostSeenManagerId(arg0), feedItemId, timestampMillis);
  },
  markPostAsUnseen(arg0, feedItemId, timestampMillis) {
    const obj = markAnalyticsFeedItemSeen;
    const result = obj.markAnalyticsFeedItemUnseen(prototype.getForumPostSeenManagerId(arg0), feedItemId, timestampMillis);
  },
  flushSeenItems(arg0, IMMEDIATE_WITH_COOLDOWN) {
    if (IMMEDIATE_WITH_COOLDOWN === undefined) {
      IMMEDIATE_WITH_COOLDOWN = maybeMarkSeen.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
    }
    const obj = markAnalyticsFeedItemSeen;
    const result = obj.flushAnalyticsFeedItems(prototype.getForumPostSeenManagerId(arg0), IMMEDIATE_WITH_COOLDOWN);
  },
  searchForumPosts(guild_id, id, outer1_5, c1, c2) {
    let closure_0 = guild_id;
    let closure_1 = id;
    let closure_2 = outer1_5;
    const callback = c1;
    let closure_4 = c2;
    return callback(function*() {
      let closure_1 = tmp3;
      let obj1 = { type: "FORUM_SEARCH_START", channelId: null };
      obj1[1] = outer1_1;
      outer1_1(709).dispatch(obj1);
      let dependencyMap = 1;
      const obj13 = outer1_1(7144);
      yield obj13.searchThreads(outer1_0, outer1_1, dependencyMap, c3, c4);
      if (1 === tmp7) {
        dependencyMap = 0;
        obj1 = outer1_1(709);
        const obj3 = { type: "FORUM_SEARCH_FAILURE", channelId: null };
        obj3[1] = closure_1;
        obj1.dispatch(obj3);
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const length = arg1;
        const obj4 = { guildId: null, channelId: null, numSearchResults: null };
        obj4[0] = length;
        obj4[1] = closure_1;
        obj4[2] = length.length;
        outer1_0(7146).trackForumSearched(obj4);
        const obj7 = outer1_0(7146);
        const obj5 = { type: "FORUM_SEARCH_SUCCESS", channelId: null, threadIds: null };
        obj5[1] = closure_1;
        obj5[2] = length;
        outer1_1(709).dispatch(obj5);
        dependencyMap = 0;
        const obj9 = outer1_1(709);
      }
      dependencyMap = 0;
      return arg1;
    })();
  },
  updateForumSearchQuery(id, query) {
    let obj = dispatcher;
    obj = { type: "FORUM_SEARCH_QUERY_UPDATED", channelId: id, query };
    obj.dispatch(obj);
  },
  clearForumSearch(id) {
    let obj = dispatcher;
    obj = { type: "FORUM_SEARCH_CLEAR", channelId: id };
    obj.dispatch(obj);
  }
};