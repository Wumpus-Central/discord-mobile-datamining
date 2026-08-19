// === Module 15970: getFriendStatusCounts ===

// Module 15970 (getFriendStatusCounts)
import sortActivity from "sortActivity" /* 4559 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import { StatusTypes } from "ME" /* 676 */;

const result = require("obj132").fileFinishedImporting("modules/friends/getFriendStatusCounts.tsx");

export default function getFriendStatusCounts() {
  let num_friends_online = 0;
  let num_friends_idle = 0;
  let num_friends_dnd = 0;
  friendIDs = friendIDs.getFriendIDs();
  while (tmp2 !== undefined) {
    status = status.getStatus(tmp3);
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