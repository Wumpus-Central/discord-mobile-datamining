// discord_app/modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";

function filterFromPending(arg0) {
  return RelationshipStore.isSpam(arg0) || RelationshipStore.isIgnored(arg0);
}
const RelationshipTypes = fn(1074).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx");

export const getPendingRelationshipIds = function getPendingRelationshipIds(mutableRelationships) {
  const pendingIncomingIds = [];
  const pendingOutgoingIds = [];
  const spamIds = [];
  const ignoredUserIds = [];
  const keys = mutableRelationships.keys();
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    value = mutableRelationships.get(nextResult);
    let tmp5 = value;
    let tmp7 = value !== RelationshipTypes.PENDING_INCOMING;
    if (!tmp7) {
      tmp7 = filterFromPending(tmp3);
    }
    if (!tmp7) {
      let arr = pendingIncomingIds.push(tmp3);
    }
    if (tmp5 === RelationshipTypes.PENDING_OUTGOING) {
      arr = pendingOutgoingIds.push(tmp3);
    }
    let isSpamResult = tmp5 === RelationshipTypes.PENDING_INCOMING;
    if (isSpamResult) {
      isSpamResult = RelationshipStore.isSpam(tmp3);
    }
    if (isSpamResult) {
      let arr1 = spamIds.push(tmp3);
    }
    let isIgnoredResult = tmp5 === RelationshipTypes.PENDING_INCOMING;
    if (isIgnoredResult) {
      isIgnoredResult = RelationshipStore.isIgnored(tmp3);
    }
    if (isIgnoredResult) {
      let arr2 = ignoredUserIds.push(tmp3);
    }
    continue;
  }
  const reversed = pendingIncomingIds.reverse();
  const reversed1 = pendingOutgoingIds.reverse();
  const reversed2 = spamIds.reverse();
  return { pendingIncomingIds, pendingOutgoingIds, spamIds, ignoredUserIds };
};
