// === Module 16424: getNotificationCenterItemBody ===

// Module 16424 (getNotificationCenterItemBody)
import _modDef38 from "module_38" /* 38 */;
import util from "util" /* 1114 */;
import StringUtils from "StringUtils" /* 1925 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7640 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const isGuildEventEnded = fn(7526).isGuildEventEnded;
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, RelationshipTypes: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/getNotificationCenterItemBody.tsx");

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
    id = React6;
  }
  let obj = UserUtilsDefault;
  let obj1 = UserStore;
  const other_user2 = item.other_user;
  let id1;
  if (other_user2 != null) {
    id1 = other_user2.id;
  }
  let name = obj.getName(UserStore.getUser(id1));
  applicationId = item.applicationId;
  renderApplication = applicationId;
  const type = item.type;
  if (NotificationCenterItemsTypes.NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED === type) {
    let tmp2Result = UserUtilsDefault;
    let other_users = item.other_users;
    let id2;
    if (other_users != null) {
      const first = other_users[0];
      if (first != null) {
        id2 = first.id;
      }
    }
    const name1 = tmp2Result.getName(obj1.getUser(id2));
    tmp2Result = UserUtilsDefault;
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
    const intl12 = util.intl;
    obj = { user: name1, user2: name2, count: bound };
    return intl12.format(util.t.g5xyIC, obj);
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
    if (RelationshipStore.getRelationshipType(id) === constants.PENDING_OUTGOING) {
      const intl11 = util.intl;
      obj = { user: name };
      let str5 = intl11.format(util.t.gZVTy2, obj);
    } else {
      str5 = item.body;
      if (str5 == null) {
        str5 = "";
      }
    }
    return str5;
  } else if (NotificationCenterItemsTypes.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED === type) {
    const guild_scheduled_event_id = item.guild_scheduled_event_id;
    let guildScheduledEvent = null;
    if (null != guild_scheduled_event_id) {
      guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(guild_scheduled_event_id);
    }
    if (guildScheduledEvent != null) {
      name = guildScheduledEvent.name;
    }
    let guild_id;
    if (guildScheduledEvent != null) {
      guild_id = guildScheduledEvent.guild_id;
    }
    const guild = GuildStore.getGuild(guild_id);
    let name3;
    if (guild != null) {
      name3 = guild.name;
    }
    let tmp6Result = StringUtils;
    if (!tmp6Result.isNullOrEmpty(name3)) {
      tmp6Result = StringUtils;
      if (!tmp6Result.isNullOrEmpty(name)) {
        if (tmp27Result) {
          const intl10 = util.intl;
          obj1 = { event_name: name, guild_name: name3 };
          let formatResult = intl10.format(util.t.AyvfXR, obj1);
        }
        return formatResult;
      }
    }
    let str4 = item.body;
    if (str4 == null) {
      str4 = "";
    }
    formatResult = str4;
    tmp27Result = isGuildEventEnded(guildScheduledEvent);
  } else if (NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS === type) {
    if (null != applicationId) {
      const intl9 = util.intl;
      const obj2 = {
        username: name,
        applicationName() {
              return renderApplication(applicationId);
            }
      };
      let formatResult1 = intl9.format(util.t["9Dgf1L"], obj2);
    } else {
      const intl8 = util.intl;
      const obj3 = { username: name };
      formatResult1 = intl8.format(tmp19, obj3);
    }
    return formatResult1;
  } else if (NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED === type) {
    if (null != applicationId) {
      const intl7 = util.intl;
      const obj4 = {
        username: name,
        applicationName() {
              return renderApplication(applicationId);
            }
      };
      let formatResult2 = intl7.format(util.t.nnC1q9, obj4);
    } else {
      const intl6 = util.intl;
      const obj5 = { username: name };
      formatResult2 = intl6.format(tmp17, obj5);
    }
    return formatResult2;
  } else if (NotificationCenterItemsTypes.NotificationCenterItems.FRIEND_REQUEST_ACCEPTED === type) {
    if (null != applicationId) {
      const intl5 = util.intl;
      const obj6 = {
        username: name,
        applicationName() {
              return renderApplication(applicationId);
            }
      };
      let formatResult3 = intl5.format(util.t.jXlYiF, obj6);
    } else {
      const intl4 = util.intl;
      const obj7 = { username: name };
      formatResult3 = intl4.format(tmp15, obj7);
    }
    return formatResult3;
  } else if (NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED === type) {
    const _HermesInternal2 = HermesInternal;
    _modDef38(null != applicationId, "Expected application id for " + item.type);
    const intl3 = util.intl;
    const obj8 = {
      username: name,
      applicationName() {
          return applicationId(renderApplication);
        }
    };
    return intl3.format(util.t["BB/0vn"], obj8);
  } else if (NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS === type) {
    const _HermesInternal = HermesInternal;
    _modDef38(null != applicationId, "Expected application id for " + item.type);
    const intl2 = util.intl;
    const obj9 = {
      username: name,
      applicationName() {
          return applicationId(renderApplication);
        }
    };
    return intl2.format(util.t["7cqOLI"], obj9);
  } else if (NotificationCenterItemsTypes.NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED === type) {
    if (null == applicationId) {
      let body = item.body;
    } else {
      const intl = util.intl;
      const obj10 = {
        username: name,
        applicationName() {
              return applicationId(renderApplication);
            }
      };
      body = intl.format(util.t.Wi64vN, obj10);
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
  const intl = util.intl;
  return intl.format(util.t.gZVTy2, { user });
};