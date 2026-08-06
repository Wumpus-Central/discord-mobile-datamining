// discord_app/modules/notification_center/getNotificationCenterItemBody.tsx
import scheduledEventSort from "scheduledEventSort";
import { isGuildEventEnded } from "scheduledEventSort";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let c9;
let metroImportAll;
const require = arg1;
({ EMPTY_STRING_SNOWFLAKE_ID: metroImportAll, RelationshipTypes: c9 } = ME);
const re10 = /[\\`*_~|<>[\]:]/g;
const result = require("upsertRelationship").fileFinishedImporting("modules/notification_center/getNotificationCenterItemBody.tsx");

export default function getNotificationCenterItemBody(arg0) {
  let item;
  let renderApplication;
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
  let obj = renderApplication(4123);
  let obj1 = user;
  const other_user2 = item.other_user;
  let id1;
  if (other_user2 != null) {
    id1 = other_user2.id;
  }
  const str = obj.getName(user.getUser(id1));
  if (undefined !== str) {
    const replaced = str.replace(closure_10, "\\$&");
  }
  applicationId = item.applicationId;
  renderApplication = applicationId;
  const type = item.type;
  if (applicationId(7022).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED === type) {
    let tmp2Result = tmp2(4123);
    let other_users = item.other_users;
    let id2;
    if (other_users != null) {
      const first = other_users[0];
      if (first != null) {
        id2 = first.id;
      }
    }
    const str16 = tmp2Result.getName(obj1.getUser(id2));
    let replaced1;
    if (undefined !== str16) {
      replaced1 = str16.replace(closure_10, "\\$&");
    }
    tmp2Result = tmp2(4123);
    const other_users2 = item.other_users;
    let id3;
    if (other_users2 != null) {
      if (other_users2[1] != null) {
        id3 = tmp43.id;
      }
    }
    const str18 = tmp2Result.getName(obj1.getUser(id3));
    let replaced2;
    if (undefined !== str18) {
      replaced2 = str18.replace(closure_10, "\\$&");
    }
    other_users = item.other_users;
    let num;
    if (other_users != null) {
      num = other_users.length;
    }
    if (num == null) {
      num = 0;
    }
    const bound = Math.max(num - 2, 0);
    const intl12 = tmp7(1236).intl;
    obj = { user: null, user2: null, count: null };
    obj[0] = replaced1;
    obj[1] = replaced2;
    obj[2] = bound;
    return intl12.format(tmp7(1236).t.g5xyIC, obj);
  } else if (tmp7(7022).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE === type) {
    let str12;
    if (item.local_id != null) {
      const parts = str11.split("_");
      str12 = parts.pop();
    }
    if (str12 == null) {
      str12 = "unknown";
    }
    const _HermesInternal3 = HermesInternal;
    return "Update to build " + str12 + " available!";
  } else if (tmp7(7022).NotificationCenterItems.FRIEND_SUGGESTION_CREATED === type) {
    if (relationshipType.getRelationshipType(id) === constants.PENDING_OUTGOING) {
      const intl11 = tmp7(1236).intl;
      obj = { user: null };
      obj[0] = replaced;
      let str10 = intl11.format(tmp7(1236).t.gZVTy2, obj);
    } else {
      str10 = item.body;
      if (str10 == null) {
        str10 = "";
      }
    }
    return str10;
  } else if (tmp7(7022).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED === type) {
    const guild_scheduled_event_id = item.guild_scheduled_event_id;
    let guildScheduledEvent = null;
    if (null != guild_scheduled_event_id) {
      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(guild_scheduled_event_id);
    }
    let guild_id;
    if (guildScheduledEvent != null) {
      guild_id = guildScheduledEvent.guild_id;
    }
    guild = guild.getGuild(guild_id);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    let tmp7Result = tmp7(1884);
    if (!tmp7Result.isNullOrEmpty(name)) {
      tmp7Result = tmp7(1884);
      if (!tmp7Result.isNullOrEmpty(str6)) {
        if (tmp28Result) {
          const intl10 = tmp7(1236).intl;
          let replaced3;
          if (undefined !== str6) {
            replaced3 = str6.replace(closure_10, "\\$&");
          }
          obj1 = { event_name: null, guild_name: null };
          obj1[0] = replaced3;
          let replaced4;
          if (undefined !== name) {
            replaced4 = name.replace(closure_10, "\\$&");
          }
          obj1[1] = replaced4;
          let formatResult = intl10.format(tmp7(1236).t.AyvfXR, obj1);
        }
        return formatResult;
      }
    }
    let str9 = item.body;
    if (str9 == null) {
      str9 = "";
    }
    formatResult = str9;
    const tmp28 = isGuildEventEnded;
    tmp28Result = isGuildEventEnded(guildScheduledEvent);
  } else if (tmp7(7022).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS === type) {
    if (null != applicationId) {
      const intl9 = tmp7(1236).intl;
      const obj2 = { username: null, applicationName: null };
      obj2[0] = replaced;
      obj2[1] = function applicationName() {
        return renderApplication(applicationId);
      };
      let formatResult1 = intl9.format(tmp7(1236).t["9Dgf1L"], obj2);
    } else {
      const intl8 = tmp7(1236).intl;
      const obj3 = { username: null };
      obj3[0] = replaced;
      formatResult1 = intl8.format(tmp20, obj3);
    }
    return formatResult1;
  } else if (tmp7(7022).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED === type) {
    if (null != applicationId) {
      const intl7 = tmp7(1236).intl;
      const obj4 = { username: null, applicationName: null };
      obj4[0] = replaced;
      obj4[1] = function applicationName() {
        return renderApplication(applicationId);
      };
      let formatResult2 = intl7.format(tmp7(1236).t.nnC1q9, obj4);
    } else {
      const intl6 = tmp7(1236).intl;
      const obj5 = { username: null };
      obj5[0] = replaced;
      formatResult2 = intl6.format(tmp18, obj5);
    }
    return formatResult2;
  } else if (tmp7(7022).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED === type) {
    if (null != applicationId) {
      const intl5 = tmp7(1236).intl;
      const obj6 = { username: null, applicationName: null };
      obj6[0] = replaced;
      obj6[1] = function applicationName() {
        return renderApplication(applicationId);
      };
      let formatResult3 = intl5.format(tmp7(1236).t.jXlYiF, obj6);
    } else {
      const intl4 = tmp7(1236).intl;
      const obj7 = { username: null };
      obj7[0] = replaced;
      formatResult3 = intl4.format(tmp16, obj7);
    }
    return formatResult3;
  } else if (tmp7(7022).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED === type) {
    const _HermesInternal2 = HermesInternal;
    tmp2(38)(null != applicationId, "Expected application id for " + item.type);
    const intl3 = tmp7(1236).intl;
    const obj8 = { username: null, applicationName: null };
    obj8[0] = replaced;
    obj8[1] = function applicationName() {
      return applicationId(renderApplication);
    };
    return intl3.format(tmp7(1236).t["BB/0vn"], obj8);
  } else if (tmp7(7022).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS === type) {
    const _HermesInternal = HermesInternal;
    tmp2(38)(null != applicationId, "Expected application id for " + item.type);
    const intl2 = tmp7(1236).intl;
    const obj9 = { username: null, applicationName: null };
    obj9[0] = replaced;
    obj9[1] = function applicationName() {
      return applicationId(renderApplication);
    };
    return intl2.format(tmp7(1236).t["7cqOLI"], obj9);
  } else if (tmp7(7022).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED === type) {
    if (null == applicationId) {
      let body = item.body;
    } else {
      const intl = tmp7(1236).intl;
      const obj10 = { username: null, applicationName: null };
      obj10[0] = replaced;
      obj10[1] = function applicationName() {
        return applicationId(renderApplication);
      };
      body = intl.format(tmp7(1236).t.Wi64vN, obj10);
    }
    return body;
  } else {
    let str3 = item.body;
    if (str3 == null) {
      str3 = "";
    }
    return str3;
  }
};