// === Module 8747: QuestUserStatusUtils ===

// Module 8747 (QuestUserStatusUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/utils/QuestUserStatusUtils.tsx");

export function getMostRecentQuestUserStatus(userStatus, userStatus2) {
  if (null == userStatus) {
    return userStatus2;
  } else if (null == userStatus2) {
    return userStatus;
  } else {
    const _Object = Object;
    const keys = Object.keys(userStatus.progress);
    for (const item10020 of keys) {
      let tmp7 = arg0.progress[item10020];
      let iter = tmp7;
      if (null != tmp7) {
        let tmp39 = arg1.progress[tmp6];
        let iter2 = tmp39;
        if (null != tmp39) {
          if (iter2.value >= iter.value) {
            if (null != iter.completedAt) {
              if (null == iter2.completedAt) {
                obj.return();
                return arg0;
              }
            }
            let heartbeat = iter.heartbeat;
            let lastBeatAt;
            if (heartbeat != null) {
              lastBeatAt = heartbeat.lastBeatAt;
            }
            let tmp11 = lastBeatAt;
            let heartbeat2 = iter2.heartbeat;
            let lastBeatAt1;
            if (heartbeat2 != null) {
              lastBeatAt1 = heartbeat2.lastBeatAt;
            }
            let tmp14 = lastBeatAt1;
            if (iter2.value === iter.value) {
              if (!tmp) {
                if (null != iter.completedAt) {
                  if (null != tmp11) {
                    if (null != tmp14) {
                      let _Date = Date;
                      let tmp22 = new.target;
                      let tmp23 = new.target;
                      let date = new Date(tmp14);
                      let _Date2 = Date;
                      let tmp27 = new.target;
                      let tmp28 = new.target;
                      let time = date.getTime();
                      let date1 = new Date(tmp11);
                    }
                    obj.return();
                    return arg0;
                  }
                }
              }
            }
          }
        }
        obj.return();
        return arg0;
      }
      continue;
    }
    items = ["enrolledAt", "completedAt", "claimedAt"];
    for (const item10071 of items) {
      if (null != arg0[item10071]) {
        if (null == arg1[tmp34]) {
          obj4.return();
          return arg0;
        }
      }
      continue;
    }
    let tmp37 = userStatus2;
    if (userStatus.dismissedQuestContent & ~userStatus2.dismissedQuestContent) {
      tmp37 = userStatus;
    }
    return tmp37;
  }
}