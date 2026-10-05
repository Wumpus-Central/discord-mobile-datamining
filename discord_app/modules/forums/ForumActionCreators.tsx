// discord_app/modules/forums/ForumActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import intl3 from "../../intl/index.native.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AnalyticsFeedItemSeenActionCreators from "../../utils/AnalyticsFeedItemSeenActionCreators.tsx";
import ForumChannelSeenManager from "tracking/ForumChannelSeenManager.tsx";
import AnalyticsFeedItemSeenManager from "../../utils/AnalyticsFeedItemSeenManager.tsx";
import _asyncToGenerator_mod from "../../../_runtime/metro/00005__asyncToGenerator.js";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3, c4, errors, title;

let closure_4;
let hasOwnProperty;
function withErrorHandling() {
  return obj(...arguments);
}
let body = function _withErrorHandling() {
  const obj = _asyncToGenerator(async (title, body, arg2) => {
    let closure_4;
    let closure_5;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let code;
      let emoji;
      let intl;
      let intl2;
      title = body;
      await title();
      closure_2 = closure_5;
      body = closure_2.body;
      errors = body == null;
      if (!errors) {
        code = body.code;
      }
      if (code === closure_132_4.NON_MODERATED_TAG_REQUIRED) {
        errors = closure_132_1(closure_132_2[2]);
        const obj5 = { title, body };
        errors.show(obj5);
      } else {
        const body2 = closure_2.body;
        errors = body2 == null;
        let code1;
        if (!errors) {
          code1 = body2.code;
        }
        let tmp15 = code1 === closure_132_4.INVALID_FORM_BODY;
        if (tmp15) {
          errors = closure_2.body;
          emoji = undefined;
          if (errors != null) {
            ({ errors, emoji } = errors);
          }
          tmp15 = emoji;
        }
        if (tmp15) {
          errors = closure_132_1(closure_132_2[2]);
          const show = errors.show;
          const obj6 = {
            title: intl.string(closure_132_0(closure_132_2[3]).t.T8sBLJ),
            body: intl2.string(closure_132_0(closure_132_2[3]).t.aHt1Bd),
          };
          intl = closure_132_0(closure_132_2[3]).intl;
          intl2 = closure_132_0(closure_132_2[3]).intl;
          show(obj6);
        }
      }
      await "IconComponent";
      return value;
    })();
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
({ AbortCodes: closure_4, Endpoints: hasOwnProperty } = Constants);
body = {
  resort(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "RESORT_THREADS", channelId: id };
    obj.dispatch(obj2);
  },
  createForumTag(name, channelId) {
    let emojiName;
    let tmpResult;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: hasOwnProperty.FORUM_TAGS(channelId),
      body,
      rejectWithError: tmpResult.rejectWithMigratedError(),
    };
    const post = HTTP.post;
    body = { name: name.name, emoji_id: name.emojiId, emoji_name: emojiName, moderated: name.moderated };
    emojiName = undefined;
    if (null == name.emojiId) {
      emojiName = name.emojiName;
    }
    tmpResult = HTTPUtils;
    return post(request);
  },
  updateForumTag(id, channelId) {
    let emojiName;
    let tmpResult;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: hasOwnProperty.FORUM_TAG(channelId, id.id),
      body,
      rejectWithError: tmpResult.rejectWithMigratedError(),
    };
    const put = HTTP.put;
    body = { name: id.name, emoji_id: id.emojiId, emoji_name: emojiName, moderated: id.moderated };
    emojiName = undefined;
    if (null == id.emojiId) {
      emojiName = id.emojiName;
    }
    tmpResult = HTTPUtils;
    let closure_0 = put(request);
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.T8sBLJ);
    const intl2 = intl3.intl;
    withErrorHandling(() => closure_0, stringResult, intl2.string(intl3.t.imcb5u));
  },
  deleteForumTag(channelId, id) {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    const del = HTTP.del;
    const obj = { url: hasOwnProperty.FORUM_TAG(channelId, id), rejectWithError: obj2.rejectWithMigratedError() };
    obj2 = HTTPUtils;
    let closure_0 = del(obj);
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t["0ZkNDU"]);
    const intl2 = intl3.intl;
    withErrorHandling(() => closure_0, stringResult, intl2.string(intl3.t.imcb5u));
  },
  updateForumPostTags(id, arg1) {
    let closure_0 = id;
    let closure_1 = arg1;
    return (async () => {
      let closure_0;
      let obj7;
      let obj9;
      const obj3 = v1(c2[6]);
      await obj3.unarchiveThreadIfNecessary(tmp3);
      const HTTP = tmp3(c2[5]).HTTP;
      const request = {
        url: closure_1_5.CHANNEL(closure_128_0),
        body: obj7,
        rejectWithError: obj9.rejectWithMigratedError(),
      };
      const patch = HTTP.patch;
      obj7 = { applied_tags: closure_128_1 };
      obj9 = tmp3(c2[5]);
      return patch(request);
    })();
  },
  hideAdminOnboarding(channelId, hide) {
    const obj = DispatcherDefault;
    const obj2 = { type: "ADMIN_ONBOARDING_GUIDE_HIDE", channelId, hide };
    obj.dispatch(obj2);
  },
  markPostAsSeen(arg0, feedItemId, timestampMillis) {
    const markAnalyticsFeedItemSeen = AnalyticsFeedItemSeenActionCreators.markAnalyticsFeedItemSeen;
    AnalyticsFeedItemSeenActionCreators;
    const obj = ForumChannelSeenManager;
    const result = markAnalyticsFeedItemSeen(obj.getForumPostSeenManagerId(arg0), feedItemId, timestampMillis);
  },
  markPostAsUnseen(arg0, feedItemId, timestampMillis) {
    const markAnalyticsFeedItemUnseen = AnalyticsFeedItemSeenActionCreators.markAnalyticsFeedItemUnseen;
    AnalyticsFeedItemSeenActionCreators;
    const obj = ForumChannelSeenManager;
    const result = markAnalyticsFeedItemUnseen(obj.getForumPostSeenManagerId(arg0), feedItemId, timestampMillis);
  },
  flushSeenItems(arg0) {
    let IMMEDIATE_WITH_COOLDOWN;
    if (IMMEDIATE_WITH_COOLDOWN === undefined) {
      IMMEDIATE_WITH_COOLDOWN = AnalyticsFeedItemSeenManager.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
    }
    const flushAnalyticsFeedItems = AnalyticsFeedItemSeenActionCreators.flushAnalyticsFeedItems;
    AnalyticsFeedItemSeenActionCreators;
    const obj = ForumChannelSeenManager;
    const result = flushAnalyticsFeedItems(obj.getForumPostSeenManagerId(arg0), IMMEDIATE_WITH_COOLDOWN);
  },
  searchForumPosts(guild_id, id, current2, c1, c2) {
    let closure_0 = guild_id;
    let closure_1 = id;
    _asyncToGenerator = c1;
    let closure_4 = c2;
    return (async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let channelId;
          let threadIds;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              channelId = tmp;
              threadIds = undefined;
              const obj5 = { type: "FORUM_SEARCH_START", channelId };
              const obj11 = channelId(current2[4]);
              obj11.dispatch(obj5);
              current2 = 1;
              const obj13 = channelId(current2[6]);
              c3 = 2;
              c4 = 1;
              const obj6 = {
                value: obj13.searchThreads(threadIds, channelId, current2, closure_3, closure_4),
                done: false,
              };
              return obj6;
            }
          } else {
            if (1 === c3) {
              current2 = 0;
              const obj8 = { type: "FORUM_SEARCH_FAILURE", channelId: closure_129_1 };
              const obj2 = channelId(current2[4]);
              obj2.dispatch(obj8);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              current2 = 0;
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              threadIds = value;
              const obj10 = { guildId: closure_129_0, channelId: closure_129_1, numSearchResults: threadIds.length };
              const obj7 = threadIds(current2[10]);
              obj7.trackForumSearched(obj10);
              const obj12 = { type: "FORUM_SEARCH_SUCCESS", channelId: closure_129_1, threadIds };
              const obj9 = channelId(current2[4]);
              obj9.dispatch(obj12);
              current2 = 0;
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          if (0 === current2) {
            c4 = 3;
            throw tmp10;
          } else {
            c3 = 1;
          }
        }
      }
    })();
  },
  updateForumSearchQuery(id, query) {
    const obj = DispatcherDefault;
    const obj2 = { type: "FORUM_SEARCH_QUERY_UPDATED", channelId: id, query };
    obj.dispatch(obj2);
  },
  clearForumSearch(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "FORUM_SEARCH_CLEAR", channelId: id };
    obj.dispatch(obj2);
  },
};
let result = size.fileFinishedImporting("modules/forums/ForumActionCreators.tsx");

export default body;
