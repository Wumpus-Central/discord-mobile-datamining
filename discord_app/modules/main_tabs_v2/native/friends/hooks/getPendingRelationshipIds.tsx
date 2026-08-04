// discord_app/modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx
import upsertRelationship from "upsertRelationship";
import { RelationshipTypes } from "ME";

function filterFromPending(arg0) {
  return upsertRelationship.isSpam(arg0) || upsertRelationship.isIgnored(arg0);
}
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx");

export const getPendingRelationshipIds = function getPendingRelationshipIds(mutableRelationships, closure_2) {
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
    let tmp6 = RelationshipTypes;
    let tmp7 = value !== RelationshipTypes.PENDING_INCOMING;
    if (!tmp7) {
      let tmp8 = filterFromPending;
      let tmp9 = nextResult;
      tmp7 = filterFromPending(tmp3);
    }
    if (!tmp7) {
      let tmp10 = nextResult;
      let arr = pendingIncomingIds.push(tmp3);
    }
    let tmp12 = value;
    if (tmp5 === tmp6.PENDING_OUTGOING) {
      let tmp13 = nextResult;
      arr = pendingOutgoingIds.push(tmp3);
    }
    let tmp15 = value;
    let isSpamResult = tmp5 === tmp6.PENDING_INCOMING;
    if (isSpamResult) {
      let tmp17 = upsertRelationship;
      let tmp18 = nextResult;
      isSpamResult = upsertRelationship.isSpam(tmp3);
    }
    if (isSpamResult) {
      let tmp19 = nextResult;
      let arr1 = spamIds.push(tmp3);
    }
    let tmp21 = value;
    let isIgnoredResult = tmp5 === tmp6.PENDING_INCOMING;
    if (isIgnoredResult) {
      let tmp23 = upsertRelationship;
      let tmp24 = nextResult;
      isIgnoredResult = upsertRelationship.isIgnored(tmp3);
    }
    if (isIgnoredResult) {
      let tmp25 = nextResult;
      let arr2 = ignoredUserIds.push(tmp3);
    }
    continue;
  }
  const reversed = pendingIncomingIds.reverse();
  const reversed1 = pendingOutgoingIds.reverse();
  const reversed2 = spamIds.reverse();
  return { pendingIncomingIds, pendingOutgoingIds, spamIds, ignoredUserIds };
};