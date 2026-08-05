// discord_app/modules/relationships/RelationshipManager.tsx
import { RelationshipTypes } from "ME";
import "initialize";

function handleRelationshipAdd(relationship) {
  relationship = relationship.relationship;
  if (!tmp) {
    const AccessibilityAnnouncer = require("../../design/shared.tsx") /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj = { username: null };
    obj[0] = relationship.user.username;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t.zH0kC7, obj));
    const result = importAll(16428).showPendingNotification(relationship.user);
    const obj2 = importAll(16428);
  }
}
function handleFriendRequestAccepted(user) {
  user = user.user;
  const AccessibilityAnnouncer = require("../../design/shared.tsx") /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
  const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  AccessibilityAnnouncer.announce(intl.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t["/+7xky"], { username: user.username }));
  const result = importAll(16428).showAcceptedNotification(user);
}
let prototype = function RelationshipManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { RELATIONSHIP_ADD: handleRelationshipAdd, FRIEND_REQUEST_ACCEPTED: handleFriendRequestAccepted };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("getSystemLocale").fileFinishedImporting("modules/relationships/RelationshipManager.tsx");

export default prototype;