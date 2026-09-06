// discord_app/modules/relationships/RelationshipManager.tsx
import Constants from "../../Constants.tsx";
import util from "../../intl/index.native.tsx";
import shared from "../../design/shared.tsx";
import RelationshipUtilsAll from "../../utils/RelationshipUtils.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleRelationshipAdd(relationship) {
  relationship = relationship.relationship;
  if (!tmp) {
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    const obj = { username: relationship.user.username };
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.zH0kC7, obj));
    const result = RelationshipUtilsAll.showPendingNotification(relationship.user);
  }
  tmp = relationship.type !== RelationshipTypes.PENDING_INCOMING || relationship.userIgnored;
}
function handleFriendRequestAccepted(user) {
  user = user.user;
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  const intl = util.intl;
  AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t["/+7xky"], { username: user.username }));
  const result = RelationshipUtilsAll.showAcceptedNotification(user);
}
const RelationshipTypes = Constants.RelationshipTypes;
let prototype = function RelationshipManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    RELATIONSHIP_ADD: handleRelationshipAdd,
    FRIEND_REQUEST_ACCEPTED: handleFriendRequestAccepted,
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
let result = size.fileFinishedImporting("modules/relationships/RelationshipManager.tsx");

export default prototype;
