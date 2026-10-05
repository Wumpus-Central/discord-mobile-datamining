// === Module 16364: getNotificationCenterItemBody ===

// Module 16364 (getNotificationCenterItemBody)
import _modDef38 from "module_38" /* 38 */;
import intl13 from "intl" /* 1126 */;
import StringUtils from "StringUtils" /* 2018 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import GuildScheduledEventStore2 from "GuildScheduledEventStore" /* 7037 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7125 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const GuildScheduledEventStore = GuildScheduledEventStore2;

let c9;
let metroImportAll;
const isGuildEventEnded = GuildScheduledEventStore2.isGuildEventEnded;
({ EMPTY_STRING_SNOWFLAKE_ID: metroImportAll, RelationshipTypes: c9 } = Constants);
const result = size.fileFinishedImporting("modules/notification_center/getNotificationCenterItemBody.tsx");

export default function getNotificationCenterItemBody(arg0) {
  let item;
  let renderApplication;
  function applicationName() {
    return renderApplication(applicationId);
  }
  ({ item, renderApplication } = arg0);
  let applicationId;
  const other_user = item.other_user;
  let id;
  if (other_user != null) {
    id = other_user.id;
  }
  if (id == null) {
    id = metroImportAll;
  }
  const other_user2 = item.other_user;
  let id1;
  const getName = UserUtilsDefault.getName;
  const getUser = UserStore.getUser;
  UserUtilsDefault;
  if (other_user2 != null) {
    id1 = other_user2.id;
  }
  const name1 = getName(getUser(id1));
  applicationId = item.applicationId;
  const type = item.type;
  if (NotificationCenterItemsTypes.NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED === type) {
    const other_users = item.other_users;
    let id2;
    const getName2 = UserUtilsDefault.getName;
    const getUser2 = UserStore.getUser;
    UserUtilsDefault;
    if (other_users != null) {
      const first = other_users[0];
      if (first != null) {
        id2 = first.id;
      }
    }
    const name2 = getName2(getUser2(id2));
    const other_users2 = item.other_users;
    let id3;
    const getName3 = UserUtilsDefault.getName;
    const getUser3 = UserStore.getUser;
    UserUtilsDefault;
    if (other_users2 != null) {
      if (other_users2[1] != null) {
        id3 = tmp42.id;
      }
    }
    const other_users1 = item.other_users;
    let num;
    const name3 = getName3(getUser3(id3));
    const _Math = Math;
    if (other_users1 != null) {
      num = other_users1.length;
    }
    if (num == null) {
      num = 0;
    }
    const maxResult = max(num - 2, 0);
    const intl12 = intl13.intl;
    const obj2 = { user: name2, user2: name3, count: maxResult };
    return intl12.format(intl13.t.g5xyIC, obj2);
  } else if (NotificationCenterItemsTypes.NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE === type) {
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
  } else if (NotificationCenterItemsTypes.NotificationCenterItems.FRIEND_SUGGESTION_CREATED === type) {
    let str5;
    if (RelationshipStore.getRelationshipType(id) === constants.PENDING_OUTGOING) {
      const intl11 = intl13.intl;
      const obj3 = { user: name1 };
      str5 = intl11.format(intl13.t.gZVTy2, obj3);
    } else {
      str5 = item.body;
      if (str5 == null) {
        str5 = "";
      }
    }
    return str5;
  } else if (NotificationCenterItemsTypes.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED === type) {
    let name;
    const guild_scheduled_event_id = item.guild_scheduled_event_id;
    let guildScheduledEvent = null;
    if (null != guild_scheduled_event_id) {
      guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(guild_scheduled_event_id);
    }
    if (guildScheduledEvent != null) {
      name = guildScheduledEvent.name;
    }
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (guildScheduledEvent != null) {
      guild_id = guildScheduledEvent.guild_id;
    }
    const guild = getGuild(guild_id);
    let name4;
    if (guild != null) {
      name4 = guild.name;
    }
    const tmp30Result = isGuildEventEnded(guildScheduledEvent);
    const tmp8Result = StringUtils;
    if (!tmp8Result.isNullOrEmpty(name4)) {
      const tmp8Result2 = StringUtils;
      if (!tmp8Result2.isNullOrEmpty(name)) {
        let formatResult;
        if (tmp30Result) {
          const intl10 = intl13.intl;
          const obj4 = { event_name: name, guild_name: name4 };
          formatResult = intl10.format(intl13.t.AyvfXR, obj4);
        }
        return formatResult;
      }
    }
    let str4 = item.body;
    if (str4 == null) {
      str4 = "";
    }
    formatResult = str4;
  } else if (NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS === type) {
    let formatResult1;
    const v9Dgf1L = intl13.t["9Dgf1L"];
    if (null != applicationId) {
      const intl9 = intl13.intl;
      const obj5 = { username: name1, applicationName };
      formatResult1 = intl9.format(v9Dgf1L, obj5);
    } else {
      const intl8 = intl13.intl;
      const obj6 = { username: name1 };
      formatResult1 = intl8.format(tmp22, obj6);
    }
    return formatResult1;
  } else if (NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED === type) {
    let formatResult2;
    const nnC1q9 = intl13.t.nnC1q9;
    if (null != applicationId) {
      const intl7 = intl13.intl;
      const obj7 = { username: name1, applicationName };
      formatResult2 = intl7.format(nnC1q9, obj7);
    } else {
      const intl6 = intl13.intl;
      const obj8 = { username: name1 };
      formatResult2 = intl6.format(tmp19, obj8);
    }
    return formatResult2;
  } else if (NotificationCenterItemsTypes.NotificationCenterItems.FRIEND_REQUEST_ACCEPTED === type) {
    let formatResult3;
    const jXlYiF = intl13.t.jXlYiF;
    if (null != applicationId) {
      const intl5 = intl13.intl;
      const obj9 = { username: name1, applicationName };
      formatResult3 = intl5.format(jXlYiF, obj9);
    } else {
      const intl4 = intl13.intl;
      const obj10 = { username: name1 };
      formatResult3 = intl4.format(tmp17, obj10);
    }
    return formatResult3;
  } else if (NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED === type) {
    const _HermesInternal2 = HermesInternal;
    const tmp14 = null != applicationId;
    const tmp2Result5 = _modDef38;
    tmp2Result5(tmp14, "Expected application id for " + item.type);
    const intl3 = intl13.intl;
    const obj11 = {
      username: name1,
      applicationName() {
          return renderApplication(applicationId);
        }
    };
    return intl3.format(intl13.t["BB/0vn"], obj11);
  } else if (NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS === type) {
    const _HermesInternal = HermesInternal;
    const tmp10 = null != applicationId;
    const tmp2Result6 = _modDef38;
    tmp2Result6(tmp10, "Expected application id for " + item.type);
    const intl2 = intl13.intl;
    const obj12 = {
      username: name1,
      applicationName() {
          return renderApplication(applicationId);
        }
    };
    return intl2.format(intl13.t["7cqOLI"], obj12);
  } else if (NotificationCenterItemsTypes.NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED === type) {
    let body;
    if (null == applicationId) {
      body = item.body;
    } else {
      const intl = intl13.intl;
      const obj = {
        username: name1,
        applicationName() {
              return renderApplication(applicationId);
            }
      };
      body = intl.format(intl13.t.Wi64vN, obj);
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
  const intl = intl13.intl;
  const obj = { user };
  return intl.format(intl13.t.gZVTy2, obj);
};