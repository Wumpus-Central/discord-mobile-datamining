// === Module 16751: getFriendStatusCounts ===

// Module 16751 (getFriendStatusCounts)
import PresenceStore from "PresenceStore" /* 4600 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

const StatusTypes = fn(1074).StatusTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/friends/getFriendStatusCounts.tsx");

export default function getFriendStatusCounts() {
  let num_friends_online = 0;
  let num_friends_idle = 0;
  let num_friends_dnd = 0;
  const friendIDs = RelationshipStore.getFriendIDs();
  while (tmp2 !== undefined) {
    let status = PresenceStore.getStatus(tmp3);
    if (StatusTypes.ONLINE === status) {
      num_friends_online = num_friends_online + 1;
    } else if (StatusTypes.IDLE === status) {
      num_friends_idle = num_friends_idle + 1;
    } else if (StatusTypes.DND === status) {
      num_friends_dnd = num_friends_dnd + 1;
    }
    continue;
  }
  return { num_friends_online, num_friends_idle, num_friends_dnd };
};