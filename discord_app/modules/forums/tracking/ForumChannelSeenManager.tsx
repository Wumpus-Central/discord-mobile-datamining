// discord_app/modules/forums/tracking/ForumChannelSeenManager.tsx
import AnalyticsFeedItemSeenActionCreators from "../../../utils/AnalyticsFeedItemSeenActionCreators.tsx";
import AnalyticsFeedItemSeenManager2 from "../../../utils/AnalyticsFeedItemSeenManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticsFeedItemSeenManager = AnalyticsFeedItemSeenManager2.AnalyticsFeedItemSeenManager;
const prototype = function ForumChannelSeenManager(channelId) {
  channelId = channelId.channelId;
  let obj = { windowId: channelId.windowId, isPaused: channelId.isPaused, id: null };
  const FORUM_CHANNEL = require("AnalyticsFeedItemSeenManager").AnalyticsFeedTypes.FORUM_CHANNEL;
  obj.id = concat(FORUM_CHANNEL, "_", channelId);
  tmp = new tmp(obj, tmp3, tmp2, FORUM_CHANNEL, concat, "_", new.target);
  _require = tmp;
  tmp.createFlushSeenItemsFunction = function createFlushSeenItemsFunction(IMMEDIATE) {
    let obj = {
      guildId: closure_0.guildId,
      channelId: closure_0.channelId,
      sessionId: closure_0.sessionId,
      trackedFeedItems: closure_0.trackedFeedItems,
      isForcedFlush: null != IMMEDIATE,
    };
    return () => {
      (function flushSeenItems(trackedFeedItems) {
        trackedFeedItems = trackedFeedItems.trackedFeedItems;
        const items = [];
        const items1 = [];
        ({ guildId, channelId, sessionId, isForcedFlush } = trackedFeedItems);
        const keys = Object.keys(trackedFeedItems);
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          obj = trackedFeedItems[nextResult];
          let tmp3 = nextResult;
          let seenTimeDestructive = obj.computeSeenTimeDestructive(isForcedFlush);
          if (seenTimeDestructive > 0) {
            items.push(tmp3);
            let arr = items1.push(tmp5);
          }
          continue;
        }
        if (0 !== items.length) {
          obj = { guildId, channelId, sessionId, postIds: items, additionalTimes: items1 };
          const result = closure_1_0(dependencyMap[2]).trackForumChannelSeenBatch(obj);
          const obj2 = closure_1_0(dependencyMap[2]);
        }
      })(obj);
    };
  };
  tmp.guildId = channelId.guildId;
  tmp.channelId = channelId;
  tmp.sessionId = require("TrackingUtils").getForumChannelSessionId(channelId);
  return tmp;
}.prototype;
class prototype extends AnalyticsFeedItemSeenManager {}
let result = size.fileFinishedImporting("modules/forums/tracking/ForumChannelSeenManager.tsx");

export default prototype;
export const getForumPostSeenManagerId = function getForumPostSeenManagerId(arg0) {
  return "" + AnalyticsFeedItemSeenManager2.AnalyticsFeedTypes.FORUM_CHANNEL + "_" + arg0;
};
export const markForumPostItemAsSeen = function markForumPostItemAsSeen(parent_id, item, timestampMillis) {
  const result = AnalyticsFeedItemSeenActionCreators.markAnalyticsFeedItemSeen(
    "" + AnalyticsFeedItemSeenManager2.AnalyticsFeedTypes.FORUM_CHANNEL + "_" + parent_id,
    item,
    timestampMillis,
  );
};
export const markForumPostItemAsUnseen = function markForumPostItemAsUnseen(parent_id, item, timestampMillis) {
  const result = AnalyticsFeedItemSeenActionCreators.markAnalyticsFeedItemUnseen(
    "" + AnalyticsFeedItemSeenManager2.AnalyticsFeedTypes.FORUM_CHANNEL + "_" + parent_id,
    item,
    timestampMillis,
  );
};
