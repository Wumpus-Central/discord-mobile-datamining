// discord_app/modules/relationships/RelationshipManager.tsx
import Constants from "../../Constants.tsx";
import intl2 from "../../intl/index.native.tsx";
import shared from "../../design/shared.tsx";
import RelationshipUtilsAll from "../../utils/RelationshipUtils.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleRelationshipAdd(relationship) {
  relationship = relationship.relationship;
  const tmp = relationship.type !== RelationshipTypes.PENDING_INCOMING || relationship.userIgnored;
  if (!tmp) {
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl2.intl;
    const obj = { username: relationship.user.username };
    announce(intl.formatToPlainString(intl2.t.zH0kC7, obj));
    const obj2 = RelationshipUtilsAll;
    const result = obj2.showPendingNotification(relationship.user);
  }
}
function handleFriendRequestAccepted(user) {
  user = user.user;
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  const announce = AccessibilityAnnouncer.announce;
  const intl = intl2.intl;
  const obj = { username: user.username };
  announce(intl.formatToPlainString(intl2.t["/+7xky"], obj));
  const obj2 = RelationshipUtilsAll;
  const result = obj2.showAcceptedNotification(user);
}
const RelationshipTypes = Constants.RelationshipTypes;
class RelationshipManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { RELATIONSHIP_ADD: handleRelationshipAdd, FRIEND_REQUEST_ACCEPTED: handleFriendRequestAccepted };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const relationshipManager = new RelationshipManager();
let result = size.fileFinishedImporting("modules/relationships/RelationshipManager.tsx");

export default relationshipManager;
