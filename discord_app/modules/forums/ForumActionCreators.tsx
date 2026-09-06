// discord_app/modules/forums/ForumActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import util from "../../intl/index.native.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AnalyticsFeedItemSeenActionCreators from "../../utils/AnalyticsFeedItemSeenActionCreators.tsx";
import ForumChannelSeenManager from "tracking/ForumChannelSeenManager.tsx";
import AnalyticsFeedItemSeenManager from "../../utils/AnalyticsFeedItemSeenManager.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function withErrorHandling() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _withErrorHandling(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = closure_1;
          closure_131_1 = closure_2;
          c6 = 1;
          c7 = 2;
          c8 = 1;
          const obj1 = { value: _require(), done: false };
          return obj1;
        }
      } else if (1 === tmp8) {
        c6 = 0;
        closure_131_2 = closure_5;
        const body = closure_131_2.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        if (code === closure_132_4.NON_MODERATED_TAG_REQUIRED) {
          let obj4 = closure_132_1(closure_132_2[2]);
          let obj2 = { title: closure_131_0, body: closure_131_1 };
          obj4.show(obj2);
        } else {
          const body3 = closure_131_2.body;
          let code1;
          if (body3 != null) {
            code1 = body3.code;
          }
          let tmp19 = code1 === closure_132_4.INVALID_FORM_BODY;
          if (tmp19) {
            const body2 = closure_131_2.body;
            let emoji;
            if (body2 != null) {
              emoji = body2.errors.emoji;
            }
            tmp19 = emoji;
          }
          if (tmp19) {
            obj2 = closure_132_1(closure_132_2[2]);
            const obj3 = { title: null, body: null };
            const intl = closure_132_0(closure_132_2[3]).intl;
            obj3.title = intl.string(closure_132_0(closure_132_2[3]).t.T8sBLJ);
            const intl2 = closure_132_0(closure_132_2[3]).intl;
            obj3.body = intl2.string(closure_132_0(closure_132_2[3]).t.aHt1Bd);
            obj2.show(obj3);
          }
        }
        c8 = 3;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        obj4 = { value, done: true };
        return obj4;
      } else {
        c6 = 0;
        c8 = 3;
        obj = { value, done: true };
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
};
const Constants = fn(1074);
({ AbortCodes: closure_4, Endpoints: hasOwnProperty } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/ForumActionCreators.tsx");

export default {
  resort(id) {
    const obj = { type: "RESORT_THREADS", channelId: id };
    obj.dispatch(obj);
  },
  createForumTag(name, channelId) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: hasOwnProperty.FORUM_TAGS(channelId), body: null, rejectWithError: null };
    const obj = { name: name.name, emoji_id: name.emojiId, emoji_name: null, moderated: null };
    let emojiName;
    if (null == name.emojiId) {
      emojiName = name.emojiName;
    }
    obj.emoji_name = emojiName;
    obj.moderated = name.moderated;
    request.body = obj;
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return HTTP.post(request);
  },
  updateForumTag(id, channelId) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: hasOwnProperty.FORUM_TAG(channelId, id.id), body: null, rejectWithError: null };
    const obj = { name: id.name, emoji_id: id.emojiId, emoji_name: null, moderated: null };
    let emojiName;
    if (null == id.emojiId) {
      emojiName = id.emojiName;
    }
    obj.emoji_name = emojiName;
    obj.moderated = id.moderated;
    request.body = obj;
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    closure_0 = HTTP.put(request);
    const intl = util.intl;
    const tmpResult = HTTPUtils;
    const intl2 = util.intl;
    withErrorHandling(() => closure_0, intl.string(util.t.T8sBLJ), intl2.string(util.t.imcb5u));
    const stringResult = intl.string(util.t.T8sBLJ);
  },
  deleteForumTag(channelId, id) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: hasOwnProperty.FORUM_TAG(channelId, id), rejectWithError: HTTPUtils.rejectWithMigratedError() };
    closure_0 = HTTP.del(obj);
    const intl = util.intl;
    const intl2 = util.intl;
    withErrorHandling(() => closure_0, intl.string(util.t["0ZkNDU"]), intl2.string(util.t.imcb5u));
  },
  updateForumPostTags(id, arg1) {
    closure_0 = id;
    closure_1 = arg1;
    return (async () => {
      await v1(7765).unarchiveThreadIfNecessary(tmp4);
      const HTTP = tmp4(1272).HTTP;
      const request = {
        url: closure_1_5.CHANNEL(closure_128_0),
        body: { applied_tags: closure_128_1 },
        rejectWithError: tmp4(1272).rejectWithMigratedError(),
      };
      return HTTP.patch(request);
    })();
  },
  hideAdminOnboarding(channelId, hide) {
    const obj = { type: "ADMIN_ONBOARDING_GUIDE_HIDE", channelId, hide };
    obj.dispatch(obj);
  },
  markPostAsSeen(arg0, feedItemId, timestampMillis) {
    const obj = AnalyticsFeedItemSeenActionCreators;
    const result = obj.markAnalyticsFeedItemSeen(
      ForumChannelSeenManager.getForumPostSeenManagerId(arg0),
      feedItemId,
      timestampMillis,
    );
  },
  markPostAsUnseen(arg0, feedItemId, timestampMillis) {
    const obj = AnalyticsFeedItemSeenActionCreators;
    const result = obj.markAnalyticsFeedItemUnseen(
      ForumChannelSeenManager.getForumPostSeenManagerId(arg0),
      feedItemId,
      timestampMillis,
    );
  },
  flushSeenItems(arg0) {
    if (IMMEDIATE_WITH_COOLDOWN === undefined) {
      IMMEDIATE_WITH_COOLDOWN = AnalyticsFeedItemSeenManager.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
    }
    const obj = AnalyticsFeedItemSeenActionCreators;
    const result = obj.flushAnalyticsFeedItems(
      ForumChannelSeenManager.getForumPostSeenManagerId(arg0),
      IMMEDIATE_WITH_COOLDOWN,
    );
  },
  searchForumPosts(guild_id, id, current2, c1, c2) {
    closure_1 = id;
    closure_2 = current2;
    asyncGeneratorStep = c1;
    closure_4 = c2;
    return (async () => {
      const channelId = tmp3;
      let obj1 = { type: "FORUM_SEARCH_START", channelId };
      channelId(573).dispatch(obj1);
      await channelId(7765).searchThreads(closure_0, channelId, closure_2, closure_3, closure_4);
      if (1 === tmp7) {
        dependencyMap = 0;
        obj1 = channelId(573);
        obj1.dispatch({ type: "FORUM_SEARCH_FAILURE", channelId: closure_129_1 });
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        guild_id(7767).trackForumSearched({
          guildId: closure_129_0,
          channelId: closure_129_1,
          numSearchResults: closure_128_0.length,
        });
        guild_id(7767);
        channelId(573).dispatch({ type: "FORUM_SEARCH_SUCCESS", channelId: closure_129_1, threadIds: closure_128_0 });
        dependencyMap = 0;
        channelId(573);
      }
      return value;
    })();
  },
  updateForumSearchQuery(id, query) {
    const obj = { type: "FORUM_SEARCH_QUERY_UPDATED", channelId: id, query };
    obj.dispatch(obj);
  },
  clearForumSearch(id) {
    const obj = { type: "FORUM_SEARCH_CLEAR", channelId: id };
    obj.dispatch(obj);
  },
};
