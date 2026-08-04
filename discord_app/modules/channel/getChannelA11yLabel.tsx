import { THREAD_CHANNEL_TYPES } from "createChannelRecord";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let closure_6;
let error;
({ ChannelTypes: closure_6, StatusTypes: error } = ME);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/channel/getChannelA11yLabel.tsx");

export default function getChannelA11yLabel(mentionCount) {
  let activityNames;
  let channel;
  let embeddedActivitiesCount;
  let isIncomingCall;
  let isSubscriptionGated;
  let needSubscriptionToAccess;
  let unread;
  let voiceStates;
  ({ channel, unread } = mentionCount);
  if (unread === undefined) {
    unread = false;
  }
  let num = mentionCount.mentionCount;
  if (num === undefined) {
    num = 0;
  }
  ({ voiceStates, embeddedActivitiesCount, activityNames, isIncomingCall, isSubscriptionGated, needSubscriptionToAccess } = mentionCount);
  if (isIncomingCall === undefined) {
    isIncomingCall = false;
  }
  let flag = mentionCount.isOngoingCall;
  if (flag === undefined) {
    flag = false;
  }
  const voiceChannelStartTime = mentionCount.voiceChannelStartTime;
  let obj = require(4475) /* computeChannelName */;
  const channelName = obj.computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
  if (importDefault(4775)(channel)) {
    const intl = tmp(1236).intl;
    const stringResult = intl.string(tmp(1236).t["4qvAtn"]);
  }
  const type = channel.type;
  if (constants.DM === type) {
    if (num > 0) {
      let TO8LYt = tmp(1236).t.TO8LYt;
    } else {
      const t5 = tmp(1236).t;
      TO8LYt = unread ? t5.F2MZsu : t5.fYqXVY;
    }
  } else {
    if (tmp5.GROUP_DM === type) {
      if (num > 0) {
        let Lo0dCa = tmp(1236).t.Lo0dCa;
      } else {
        const t4 = tmp(1236).t;
        Lo0dCa = unread ? t4["fxxUo/"] : t4.lts3Ld;
      }
      const intl8 = tmp(1236).intl;
      obj = { channelName: null, mentionCount: null };
      obj[0] = channelName;
      obj[1] = num;
      const items = [intl8.formatToPlainString(Lo0dCa, obj), ];
      const intl9 = tmp(1236).intl;
      obj = { members: null };
      obj[0] = channel.recipients.length + 1;
      items[1] = intl9.formatToPlainString(tmp(1236).t.CxSA5N, obj);
      let joined = items.join(", ");
    } else if (tmp5.GUILD_STORE === type) {
      let g8ONM0 = tmp(1236).t.Bo4msg;
    } else if (tmp5.GUILD_DIRECTORY === type) {
      g8ONM0 = tmp(1236).t["92EAF2"];
    } else if (tmp5.GUILD_ANNOUNCEMENT === type) {
      if (num > 0) {
        let sDKIpm = tmp(1236).t.sDKIpm;
      } else {
        const t3 = tmp(1236).t;
        sDKIpm = unread ? t3.VM7z8f : t3.WJ3MPt;
      }
      g8ONM0 = sDKIpm;
    } else if (tmp5.GUILD_VOICE === type) {
      const intl2 = tmp(1236).intl;
      const obj1 = { channelName: null };
      obj1[0] = channelName;
      const items1 = [intl2.formatToPlainString(tmp(1236).t.bkpadO, obj1)];
      if (num > 0) {
        const intl3 = tmp(1236).intl;
        const obj2 = { mentionCount: null };
        obj2[0] = num;
        items1.push(intl3.formatToPlainString(tmp(1236).t["3l1GOx"], obj2));
      }
      if (unread) {
        const intl4 = tmp(1236).intl;
        items1.push(intl4.string(tmp(1236).t.x5zAGZ));
      }
      const userLimit = channel.userLimit;
      if (null != voiceStates) {
        if (voiceStates.length > 0) {
          const diff = voiceStates.length - 3;
          const substr = voiceStates.slice(0, 3);
          const mapped = substr.map((nick) => {
            nick = nick.nick;
            if (nick == null) {
              nick = callback(table[7]).getName(tmp);
              const obj = callback(table[7]);
            }
            return nick;
          });
          items1.push(mapped.join(", "));
          if (0 < diff) {
            const intl5 = tmp(1236).intl;
            const obj3 = { overflow: null };
            obj3[0] = diff;
            items1.push(intl5.formatToPlainString(tmp(1236).t.sfgpgr, obj3));
          }
          if (tmp12) {
            const intl6 = tmp(1236).intl;
            const obj4 = { userCount: null, limit: null };
            obj4[0] = voiceStates.length;
            obj4[1] = userLimit;
            items1.push(intl6.formatToPlainString(tmp(1236).t["6qgTOF"], obj4));
          }
          tmp12 = null != userLimit && userLimit > 0;
        }
      }
      if (null != voiceChannelStartTime) {
        const intl15 = tmp(1236).intl;
        const obj5 = { duration: null };
        const obj6 = { start: null };
        obj6[0] = voiceChannelStartTime;
        const _Date = Date;
        obj5[0] = tmp(8048).formatActiveA11yTimestamp(obj6, Date.now());
        items1.push(intl15.formatToPlainString(tmp(1236).t.JQtsGh, obj5));
        const tmpResult = tmp(8048);
      }
      if (tmp14) {
        const intl7 = tmp(1236).intl;
        const obj7 = { activeActivities: null };
        obj7[0] = activityNames.join(", ");
        items1.push(intl7.formatToPlainString(tmp(1236).t.LmYuHT, obj7));
      }
      joined = items1.join(", ");
      tmp14 = null != activityNames && activityNames.length > 0;
    } else if (tmp5.GUILD_STAGE_VOICE === type) {
      g8ONM0 = tmp(1236).t.TPPk2T;
    } else if (THREAD_CHANNEL_TYPES.has(channel.type)) {
      if (num > 0) {
        ZL7_I6 = tmp(1236).t["ZL7+I6"];
      } else {
        const t2 = tmp(1236).t;
        ZL7_I6 = unread ? t2.YlVvmc : t2["0nZpiF"];
      }
    } else if (num > 0) {
      g8ONM0 = tmp(1236).t.g8ONM0;
    } else {
      const t = tmp(1236).t;
      g8ONM0 = unread ? t.smf1CZ : t.s0JADj;
    }
    if (null != joined) {
      const items2 = [joined];
      let items4 = items2;
    } else if (null != g8ONM0) {
      const intl10 = tmp(1236).intl;
      const obj8 = { channelName: null, mentionCount: null };
      obj8[0] = channelName;
      obj8[1] = num;
      const items3 = [intl10.formatToPlainString(g8ONM0, obj8)];
      items4 = items3;
    } else {
      items4 = [];
    }
    if (isIncomingCall) {
      const intl12 = tmp(1236).intl;
      items4.push(intl12.string(tmp(1236).t["fk1/bX"]));
    } else if (flag) {
      const intl11 = tmp(1236).intl;
      items4.push(intl11.string(tmp(1236).t["NGg/fm"]));
    }
    let tmp20 = null != embeddedActivitiesCount;
    if (tmp20) {
      tmp20 = embeddedActivitiesCount > 0;
    }
    if (tmp20) {
      const intl13 = tmp(1236).intl;
      const obj9 = { activitiesCount: null };
      obj9[0] = embeddedActivitiesCount;
      items4.push(intl13.formatToPlainString(tmp(1236).t.O6PLYd, obj9));
    }
    if (!isSubscriptionGated) {
      if (null != undefined) {
        items4.push(undefined);
      }
      if (null != stringResult) {
        items4.push(stringResult);
      }
      return items4.join(", ");
    } else {
      const intl14 = tmp(1236).intl;
      const string = intl14.string;
      oj_HOs = tmp(1236).t;
      if (needSubscriptionToAccess) {
        oj_HOs = oj_HOs["oj+HOs"];
        let stringResult1 = string(oj_HOs);
      } else {
        stringResult1 = string(oj_HOs.xI3TQQ);
      }
    }
  }
};
export const getStatusLabel = function getStatusLabel(status) {
  if (constants2.ONLINE === status) {
    return require(4124) /* nameFromUser */.humanizeStatus(tmp.ONLINE);
  } else if (tmp.IDLE === status) {
    return require(4124) /* nameFromUser */.humanizeStatus(tmp.IDLE);
  } else if (tmp.DND === status) {
    return require(4124) /* nameFromUser */.humanizeStatus(tmp.DND);
  } else if (tmp.INVISIBLE === status) {
    return require(4124) /* nameFromUser */.humanizeStatus(tmp.INVISIBLE);
  } else {
    return "";
  }
};
export const getChannelA11yHint = function getChannelA11yHint(userStatus) {
  let channel;
  let muted;
  userStatus = userStatus.userStatus;
  const items = [];
  ({ channel, muted } = userStatus);
  if (userStatus.isFavorite) {
    const intl = require(1236) /* getSystemLocale */.intl;
    items.push(intl.string(require(1236) /* getSystemLocale */.t.cCPjSK));
  }
  if (true === muted) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    items.push(intl2.string(require(1236) /* getSystemLocale */.t.C4zCMb));
    return items.join(", ");
  } else {
    if (channel.type === constants.DM) {
      if (null != userStatus) {
        let ONLINE = constants2;
        if (constants2.ONLINE === userStatus) {
          ONLINE = ONLINE.ONLINE;
          let str = require(4124) /* nameFromUser */.humanizeStatus(ONLINE);
          const obj3 = require(4124) /* nameFromUser */;
        } else {
          if (ONLINE.IDLE === userStatus) {
            str = require(4124) /* nameFromUser */.humanizeStatus(ONLINE.IDLE);
            const obj2 = require(4124) /* nameFromUser */;
          } else if (ONLINE.DND !== userStatus) {
            str = "";
            if (ONLINE.INVISIBLE === userStatus) {
              str = require(4124) /* nameFromUser */.humanizeStatus(ONLINE.INVISIBLE);
              const obj4 = require(4124) /* nameFromUser */;
            }
          }
          str = require(4124) /* nameFromUser */.humanizeStatus(ONLINE.DND);
          const obj = require(4124) /* nameFromUser */;
        }
        items.push(str);
      }
    }
    let joined;
    if (items.length > 0) {
      joined = items.join(", ");
    }
    return joined;
  }
};