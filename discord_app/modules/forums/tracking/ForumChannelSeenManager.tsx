// discord_app/modules/forums/tracking/ForumChannelSeenManager.tsx
import AnalyticsFeedItemSeenActionCreators from "../../../utils/AnalyticsFeedItemSeenActionCreators.tsx";
import AnalyticsFeedItemSeenManager2 from "../../../utils/AnalyticsFeedItemSeenManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const AnalyticsFeedItemSeenManager = AnalyticsFeedItemSeenManager2.AnalyticsFeedItemSeenManager;
class ForumChannelSeenManager extends AnalyticsFeedItemSeenManager {
  constructor(channelId) {
    let FORUM_CHANNEL;
    let closure_0;
    let concat;
    let tmp3;
    channelId = channelId.channelId;
    let obj = { windowId: channelId.windowId, isPaused: channelId.isPaused, id: concat(FORUM_CHANNEL, "_", channelId) };
    const guildId = channelId.guildId;
    FORUM_CHANNEL = require("AnalyticsFeedItemSeenManager").AnalyticsFeedTypes.FORUM_CHANNEL;
    concat = HermesInternal.concat;
    const tmp4 = new tmp(obj, tmp3, tmp2, FORUM_CHANNEL, concat, "_", new.target);
    _require = tmp4;
    tmp4.createFlushSeenItemsFunction = function createFlushSeenItemsFunction(IMMEDIATE) {
      let obj = {
        guildId: closure_0.guildId,
        channelId: closure_0.channelId,
        sessionId: closure_0.sessionId,
        trackedFeedItems: closure_0.trackedFeedItems,
        isForcedFlush: null != IMMEDIATE,
      };
      return () => {
        function flushSeenItems(trackedFeedItems) {
          let channelId;
          let guildId;
          let isForcedFlush;
          let sessionId;
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
              let arr = items.push(tmp3);
              let arr2 = items1.push(tmp5);
            }
            continue;
          }
          if (0 !== items.length) {
            const obj3 = { guildId, channelId, sessionId, postIds: items, additionalTimes: items1 };
            const obj2 = closure_1_0(closure_1_1[2]);
            const result = obj2.trackForumChannelSeenBatch(obj3);
          }
        }
        flushSeenItems(obj);
      };
    };
    tmp4.guildId = guildId;
    tmp4.channelId = channelId;
    let obj2 = require("TrackingUtils");
    tmp4.sessionId = obj2.getForumChannelSessionId(channelId);
    return tmp4;
  }
}
let result = size.fileFinishedImporting("modules/forums/tracking/ForumChannelSeenManager.tsx");

export default ForumChannelSeenManager;
export const getForumPostSeenManagerId = function getForumPostSeenManagerId(arg0) {
  return "" + AnalyticsFeedItemSeenManager2.AnalyticsFeedTypes.FORUM_CHANNEL + "_" + arg0;
};
export const markForumPostItemAsSeen = function markForumPostItemAsSeen(parent_id, item, timestampMillis) {
  const obj = AnalyticsFeedItemSeenActionCreators;
  const result = obj.markAnalyticsFeedItemSeen(
    "" + AnalyticsFeedItemSeenManager2.AnalyticsFeedTypes.FORUM_CHANNEL + "_" + parent_id,
    item,
    timestampMillis,
  );
};
export const markForumPostItemAsUnseen = function markForumPostItemAsUnseen(parent_id, item, timestampMillis) {
  const obj = AnalyticsFeedItemSeenActionCreators;
  const result = obj.markAnalyticsFeedItemUnseen(
    "" + AnalyticsFeedItemSeenManager2.AnalyticsFeedTypes.FORUM_CHANNEL + "_" + parent_id,
    item,
    timestampMillis,
  );
};
