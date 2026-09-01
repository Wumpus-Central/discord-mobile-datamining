// discord_app/modules/forums/tracking/ForumChannelSeenManager.tsx
import set from "../../../../_runtime/00002_set.js";
import markAnalyticsFeedItemSeen from "../../../utils/AnalyticsFeedItemSeenActionCreators.tsx";
import maybeMarkSeen from "../../../utils/AnalyticsFeedItemSeenManager.tsx";

const AnalyticsFeedItemSeenManager = maybeMarkSeen.AnalyticsFeedItemSeenManager;
const prototype = function ForumChannelSeenManager(channelId) {
  channelId = channelId.channelId;
  let obj = { windowId: channelId.windowId, isPaused: channelId.isPaused, id: null };
  const FORUM_CHANNEL = require("../../../utils/AnalyticsFeedItemSeenManager.tsx").AnalyticsFeedTypes.FORUM_CHANNEL;
  obj[2] = concat(FORUM_CHANNEL, "_", channelId);
  tmp = new tmp(obj, tmp3, tmp2, FORUM_CHANNEL, concat, "_", new.target);
  // ThrowIfThisInitialized (0x7c)
  _require = tmp;
  tmp.createFlushSeenItemsFunction = function createFlushSeenItemsFunction(IMMEDIATE) {
    obj = {
      guildId: obj.guildId,
      channelId: obj.channelId,
      sessionId: obj.sessionId,
      trackedFeedItems: obj.trackedFeedItems,
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
            let tmp6 = nextResult;
            let arr = items.push(tmp3);
            let tmp8 = seenTimeDestructive;
            arr = items1.push(tmp5);
          }
          continue;
        }
        if (0 !== items.length) {
          obj = { guildId: null, channelId: null, sessionId: null, postIds: null, additionalTimes: null };
          obj[0] = guildId;
          obj[1] = channelId;
          obj[2] = sessionId;
          obj[3] = items;
          obj[4] = items1;
          const result = callback(table[2]).trackForumChannelSeenBatch(obj);
          const obj2 = callback(table[2]);
        }
      })(obj);
    };
  };
  tmp.guildId = channelId.guildId;
  tmp.channelId = channelId;
  tmp.sessionId = require("TrackingUtils.tsx").getForumChannelSessionId(channelId);
  return tmp;
}.prototype;
class prototype extends AnalyticsFeedItemSeenManager {}
let result = set.fileFinishedImporting("modules/forums/tracking/ForumChannelSeenManager.tsx");

export default prototype;
export const getForumPostSeenManagerId = function getForumPostSeenManagerId(arg0) {
  return "" + maybeMarkSeen.AnalyticsFeedTypes.FORUM_CHANNEL + "_" + arg0;
};
export const markForumPostItemAsSeen = function markForumPostItemAsSeen(parent_id, item, timestampMillis) {
  const result = markAnalyticsFeedItemSeen.markAnalyticsFeedItemSeen(
    "" + maybeMarkSeen.AnalyticsFeedTypes.FORUM_CHANNEL + "_" + parent_id,
    item,
    timestampMillis,
  );
};
export const markForumPostItemAsUnseen = function markForumPostItemAsUnseen(parent_id, item, timestampMillis) {
  const result = markAnalyticsFeedItemSeen.markAnalyticsFeedItemUnseen(
    "" + maybeMarkSeen.AnalyticsFeedTypes.FORUM_CHANNEL + "_" + parent_id,
    item,
    timestampMillis,
  );
};
