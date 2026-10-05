// === Module 16949: getPendingRelationshipIds ===

// Module 16949 (getPendingRelationshipIds)
import Constants from "Constants" /* 1085 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import size from "module_2" /* 2 */;

function filterFromPending(arg0) {
  const tmp = RelationshipStore.isSpam(arg0) || RelationshipStore.isIgnored(arg0);
  return tmp;
}
const RelationshipTypes = Constants.RelationshipTypes;
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
    let value = mutableRelationships.get(nextResult);
    let tmp5 = value;
    let tmp7 = value !== RelationshipTypes.PENDING_INCOMING;
    if (!tmp7) {
      tmp7 = filterFromPending(tmp3);
    }
    if (!tmp7) {
      let arr = pendingIncomingIds.push(tmp3);
    }
    if (tmp5 === RelationshipTypes.PENDING_OUTGOING) {
      let arr2 = pendingOutgoingIds.push(tmp3);
    }
    let isSpamResult = tmp5 === RelationshipTypes.PENDING_INCOMING;
    if (isSpamResult) {
      isSpamResult = RelationshipStore.isSpam(tmp3);
    }
    if (isSpamResult) {
      let arr3 = spamIds.push(tmp3);
    }
    let isIgnoredResult = tmp5 === RelationshipTypes.PENDING_INCOMING;
    if (isIgnoredResult) {
      isIgnoredResult = RelationshipStore.isIgnored(tmp3);
    }
    if (isIgnoredResult) {
      let arr4 = ignoredUserIds.push(tmp3);
    }
    continue;
  }
  const reversed = pendingIncomingIds.reverse();
  const reversed1 = pendingOutgoingIds.reverse();
  const reversed2 = spamIds.reverse();
  return { pendingIncomingIds, pendingOutgoingIds, spamIds, ignoredUserIds };
};