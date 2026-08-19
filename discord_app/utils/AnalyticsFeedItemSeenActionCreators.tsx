// === Module 8517: markAnalyticsFeedItemSeen ===

// Module 8517 (markAnalyticsFeedItemSeen)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("utils/AnalyticsFeedItemSeenActionCreators.tsx");

export const markAnalyticsFeedItemSeen = function markAnalyticsFeedItemSeen(forumPostSeenManagerId, feedItemId, timestampMillis) {
  const obj = { type: "ANALYTICS_FEED_ITEM_SEEN", id: forumPostSeenManagerId, feedItemId, timestampMillis };
  obj.dispatch(obj);
};
export const markAnalyticsFeedItemUnseen = function markAnalyticsFeedItemUnseen(forumPostSeenManagerId, feedItemId, timestampMillis) {
  const obj = { type: "ANALYTICS_FEED_ITEM_UNSEEN", id: forumPostSeenManagerId, feedItemId, timestampMillis };
  obj.dispatch(obj);
};
export const flushAnalyticsFeedItems = function flushAnalyticsFeedItems(forumPostSeenManagerId, IMMEDIATE_WITH_COOLDOWN) {
  const obj = { type: "ANALYTICS_FEED_FLUSH", id: forumPostSeenManagerId, force: IMMEDIATE_WITH_COOLDOWN };
  obj.dispatch(obj);
};