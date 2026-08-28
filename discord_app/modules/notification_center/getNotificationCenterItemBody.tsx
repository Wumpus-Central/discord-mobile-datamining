// === Module 15943: getNotificationCenterItemBody ===

// Module 15943 (getNotificationCenterItemBody)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_3 from "scheduledEventSort" /* 7218 */;
import { isGuildEventEnded } from "scheduledEventSort" /* 7218 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "markAllUserIdListsStale" /* 4099 */;
import closure_7 from "mergeGuildAvatar" /* 1923 */;
import ME from "ME" /* 676 */;

require = arg1;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, RelationshipTypes: c9 } = ME);
const result = require("set").fileFinishedImporting("modules/notification_center/getNotificationCenterItemBody.tsx");

export default function getNotificationCenterItemBody(arg0) {
  ({ item, renderApplication } = arg0);
  let applicationId = renderApplication;
  renderApplication = undefined;
  const other_user = item.other_user;
  let id;
  if (other_user != null) {
    id = other_user.id;
  }
  if (id == null) {
    id = closure_8;
  }
  let obj = renderApplication(4290);
  obj1 = user;
  const other_user2 = item.other_user;
  let id1;
  if (other_user2 != null) {
    id1 = other_user2.id;
  }
  let name = obj.getName(user.getUser(id1));
  applicationId = item.applicationId;
  renderApplication = applicationId;
  const type = item.type;
  if (applicationId(7332).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED === type) {
    let tmp2Result = tmp2(4290);
    let other_users = item.other_users;
    let id2;
    if (other_users != null) {
      const first = other_users[0];
      if (first != null) {
        id2 = first.id;
      }
    }
    const name1 = tmp2Result.getName(obj1.getUser(id2));
    tmp2Result = tmp2(4290);
    const other_users2 = item.other_users;
    let id3;
    if (other_users2 != null) {
      if (other_users2[1] != null) {
        id3 = tmp37.id;
      }
    }
    other_users = item.other_users;
    let num;
    const name2 = tmp2Result.getName(obj1.getUser(id3));
    if (other_users != null) {
      num = other_users.length;
    }
    if (num == null) {
      num = 0;
    }
    const bound = Math.max(num - 2, 0);
    const intl12 = tmp6(1236).intl;
    obj = { user: null, user2: null, count: null };
    obj[0] = name1;
    obj[1] = name2;
    obj[2] = bound;
    return intl12.format(tmp6(1236).t.g5xyIC, obj);
  } else if (tmp6(7332).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE === type) {
    let str7;
    if (item.local_id != null) {
      const parts = str6.split("_");
      str7 = parts.pop();
    }
    if (str7 == null) {
      str7 = "unknown";
    }
    const _HermesInternal3 = HermesInternal;
    return "Update to build " + str7 + " available!";
  } else if (tmp6(7332).NotificationCenterItems.FRIEND_SUGGESTION_CREATED === type) {
    if (relationshipType.getRelationshipType(id) === constants.PENDING_OUTGOING) {
      const intl11 = tmp6(1236).intl;
      obj = { user: null };
      obj[0] = name;
      let str5 = intl11.format(tmp6(1236).t.gZVTy2, obj);
    } else {
      str5 = item.body;
      if (str5 == null) {
        str5 = "";
      }
    }
    return str5;
  } else if (tmp6(7332).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED === type) {
    const guild_scheduled_event_id = item.guild_scheduled_event_id;
    let guildScheduledEvent = null;
    if (null != guild_scheduled_event_id) {
      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(guild_scheduled_event_id);
    }
    if (guildScheduledEvent != null) {
      name = guildScheduledEvent.name;
    }
    let guild_id;
    if (guildScheduledEvent != null) {
      guild_id = guildScheduledEvent.guild_id;
    }
    guild = guild.getGuild(guild_id);
    let name3;
    if (guild != null) {
      name3 = guild.name;
    }
    let tmp6Result = tmp6(1903);
    if (!tmp6Result.isNullOrEmpty(name3)) {
      tmp6Result = tmp6(1903);
      if (!tmp6Result.isNullOrEmpty(name)) {
        if (tmp27Result) {
          const intl10 = tmp6(1236).intl;
          obj1 = { event_name: null, guild_name: null };
          obj1[0] = name;
          obj1[1] = name3;
          let formatResult = intl10.format(tmp6(1236).t.AyvfXR, obj1);
        }
        return formatResult;
      }
    }
    let str4 = item.body;
    if (str4 == null) {
      str4 = "";
    }
    formatResult = str4;
    const tmp27 = isGuildEventEnded;
    tmp27Result = isGuildEventEnded(guildScheduledEvent);
  } else if (tmp6(7332).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS === type) {
    if (null != applicationId) {
      const intl9 = tmp6(1236).intl;
      const obj2 = { username: null, applicationName: null };
      obj2[0] = name;
      obj2[1] = function applicationName() {
        return renderApplication(applicationId);
      };
      let formatResult1 = intl9.format(tmp6(1236).t["9Dgf1L"], obj2);
    } else {
      const intl8 = tmp6(1236).intl;
      const obj3 = { username: null };
      obj3[0] = name;
      formatResult1 = intl8.format(tmp19, obj3);
    }
    return formatResult1;
  } else if (tmp6(7332).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED === type) {
    if (null != applicationId) {
      const intl7 = tmp6(1236).intl;
      const obj4 = { username: null, applicationName: null };
      obj4[0] = name;
      obj4[1] = function applicationName() {
        return renderApplication(applicationId);
      };
      let formatResult2 = intl7.format(tmp6(1236).t.nnC1q9, obj4);
    } else {
      const intl6 = tmp6(1236).intl;
      const obj5 = { username: null };
      obj5[0] = name;
      formatResult2 = intl6.format(tmp17, obj5);
    }
    return formatResult2;
  } else if (tmp6(7332).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED === type) {
    if (null != applicationId) {
      const intl5 = tmp6(1236).intl;
      const obj6 = { username: null, applicationName: null };
      obj6[0] = name;
      obj6[1] = function applicationName() {
        return renderApplication(applicationId);
      };
      let formatResult3 = intl5.format(tmp6(1236).t.jXlYiF, obj6);
    } else {
      const intl4 = tmp6(1236).intl;
      const obj7 = { username: null };
      obj7[0] = name;
      formatResult3 = intl4.format(tmp15, obj7);
    }
    return formatResult3;
  } else if (tmp6(7332).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED === type) {
    const _HermesInternal2 = HermesInternal;
    tmp2(38)(null != applicationId, "Expected application id for " + item.type);
    const intl3 = tmp6(1236).intl;
    const obj8 = { username: null, applicationName: null };
    obj8[0] = name;
    obj8[1] = function applicationName() {
      return applicationId(renderApplication);
    };
    return intl3.format(tmp6(1236).t["BB/0vn"], obj8);
  } else if (tmp6(7332).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS === type) {
    const _HermesInternal = HermesInternal;
    tmp2(38)(null != applicationId, "Expected application id for " + item.type);
    const intl2 = tmp6(1236).intl;
    const obj9 = { username: null, applicationName: null };
    obj9[0] = name;
    obj9[1] = function applicationName() {
      return applicationId(renderApplication);
    };
    return intl2.format(tmp6(1236).t["7cqOLI"], obj9);
  } else if (tmp6(7332).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED === type) {
    if (null == applicationId) {
      let body = item.body;
    } else {
      const intl = tmp6(1236).intl;
      const obj10 = { username: null, applicationName: null };
      obj10[0] = name;
      obj10[1] = function applicationName() {
        return applicationId(renderApplication);
      };
      body = intl.format(tmp6(1236).t.Wi64vN, obj10);
    }
    return body;
  } else {
    let str = item.body;
    if (str == null) {
      str = "";
    }
    return str;
  }
};
export const getFriendRequestSentBody = function getFriendRequestSentBody(user) {
  const intl = getSystemLocale.intl;
  return intl.format(getSystemLocale.t.gZVTy2, { user });
};