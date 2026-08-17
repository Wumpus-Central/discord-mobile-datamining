// discord_app/modules/relationships/RelationshipManager.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../design/shared.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import showPendingNotificationAll from "../../utils/RelationshipUtils.tsx";

function handleRelationshipAdd(relationship) {
  relationship = relationship.relationship;
  if (!tmp) {
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = getSystemLocale.intl;
    const obj = { username: null };
    obj[0] = relationship.user.username;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(getSystemLocale.t.zH0kC7, obj));
    const result = showPendingNotificationAll.showPendingNotification(relationship.user);
    const obj2 = showPendingNotificationAll;
  }
}
function handleFriendRequestAccepted(user) {
  user = user.user;
  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
  const intl = getSystemLocale.intl;
  AccessibilityAnnouncer.announce(intl.formatToPlainString(getSystemLocale.t["/+7xky"], { username: user.username }));
  const result = showPendingNotificationAll.showAcceptedNotification(user);
}
const RelationshipTypes = ME.RelationshipTypes;
initializeDefault;
let prototype = function RelationshipManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { RELATIONSHIP_ADD: handleRelationshipAdd, FRIEND_REQUEST_ACCEPTED: handleFriendRequestAccepted };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/relationships/RelationshipManager.tsx");

export default prototype;