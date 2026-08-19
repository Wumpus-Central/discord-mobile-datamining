// discord_app/modules/channel/getChannelA11yLabel.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";
import createChannelRecord from "../../records/ChannelRecord.tsx";
import nameFromUser from "../../utils/UserUtils.tsx";
import computeChannelName from "useChannelName.tsx";
import isRoleRequiredDefault from "isRoleRequired.tsx";
import calculateTimestampDurations from "../content_inventory/utils.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";

const THREAD_CHANNEL_TYPES = createChannelRecord.THREAD_CHANNEL_TYPES;
({ ChannelTypes: closure_6, StatusTypes: error } = ME);
const result = obj132.fileFinishedImporting("modules/channel/getChannelA11yLabel.tsx");

export default function getChannelA11yLabel(mentionCount) {
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
  let obj = computeChannelName;
  const channelName = obj.computeChannelName(channel, closure_5, closure_4);
  if (isRoleRequiredDefault(channel)) {
    const intl = getSystemLocale.intl;
    const stringResult = intl.string(getSystemLocale.t["4qvAtn"]);
  }
  const type = channel.type;
  if (constants.DM === type) {
    if (num > 0) {
      let TO8LYt = getSystemLocale.t.TO8LYt;
    } else {
      const t5 = getSystemLocale.t;
      TO8LYt = unread ? t5.F2MZsu : t5.fYqXVY;
    }
  } else {
    if (constants.GROUP_DM === type) {
      if (num > 0) {
        let Lo0dCa = getSystemLocale.t.Lo0dCa;
      } else {
        const t4 = getSystemLocale.t;
        Lo0dCa = unread ? t4["fxxUo/"] : t4.lts3Ld;
      }
      const intl8 = getSystemLocale.intl;
      obj = { channelName: null, mentionCount: null };
      obj[0] = channelName;
      obj[1] = num;
      const items = [intl8.formatToPlainString(Lo0dCa, obj), ];
      const intl9 = getSystemLocale.intl;
      obj = { members: null };
      obj[0] = channel.recipients.length + 1;
      items[1] = intl9.formatToPlainString(getSystemLocale.t.CxSA5N, obj);
      let joined = items.join(", ");
    } else if (constants.GUILD_STORE === type) {
      let g8ONM0 = getSystemLocale.t.Bo4msg;
    } else if (constants.GUILD_DIRECTORY === type) {
      g8ONM0 = getSystemLocale.t["92EAF2"];
    } else if (constants.GUILD_ANNOUNCEMENT === type) {
      if (num > 0) {
        let sDKIpm = getSystemLocale.t.sDKIpm;
      } else {
        const t3 = getSystemLocale.t;
        sDKIpm = unread ? t3.VM7z8f : t3.WJ3MPt;
      }
      g8ONM0 = sDKIpm;
    } else if (constants.GUILD_VOICE === type) {
      const intl2 = getSystemLocale.intl;
      obj1 = { channelName: null };
      obj1[0] = channelName;
      const items1 = [intl2.formatToPlainString(getSystemLocale.t.bkpadO, obj1)];
      if (num > 0) {
        const intl3 = getSystemLocale.intl;
        const obj2 = { mentionCount: null };
        obj2[0] = num;
        items1.push(intl3.formatToPlainString(getSystemLocale.t["3l1GOx"], obj2));
      }
      if (unread) {
        const intl4 = getSystemLocale.intl;
        items1.push(intl4.string(getSystemLocale.t.x5zAGZ));
      }
      const userLimit = channel.userLimit;
      if (null != voiceStates) {
        if (voiceStates.length > 0) {
          const diff = voiceStates.length - 3;
          const substr = voiceStates.slice(0, 3);
          const mapped = substr.map((item, index) => {
            let nick = item.nick;
            if (nick == null) {
              nick = callback(table[7]).getName(tmp);
              const obj = callback(table[7]);
            }
            return nick;
          });
          items1.push(mapped.join(", "));
          if (0 < diff) {
            const intl5 = getSystemLocale.intl;
            const obj3 = { overflow: null };
            obj3[0] = diff;
            items1.push(intl5.formatToPlainString(getSystemLocale.t.sfgpgr, obj3));
          }
          if (tmp13) {
            const intl6 = getSystemLocale.intl;
            const obj4 = { userCount: null, limit: null };
            obj4[0] = voiceStates.length;
            obj4[1] = userLimit;
            items1.push(intl6.formatToPlainString(getSystemLocale.t["6qgTOF"], obj4));
          }
          tmp13 = null != userLimit && userLimit > 0;
        }
      }
      if (null != voiceChannelStartTime) {
        const intl15 = getSystemLocale.intl;
        const obj5 = { duration: null };
        const obj6 = { start: null };
        obj6[0] = voiceChannelStartTime;
        const _Date = Date;
        obj5[0] = calculateTimestampDurations.formatActiveA11yTimestamp(obj6, Date.now());
        items1.push(intl15.formatToPlainString(getSystemLocale.t.JQtsGh, obj5));
        const tmpResult = calculateTimestampDurations;
      }
      if (tmp15) {
        const intl7 = getSystemLocale.intl;
        const obj7 = { activeActivities: null };
        obj7[0] = activityNames.join(", ");
        items1.push(intl7.formatToPlainString(getSystemLocale.t.LmYuHT, obj7));
      }
      joined = items1.join(", ");
      tmp15 = null != activityNames && activityNames.length > 0;
    } else if (constants.GUILD_STAGE_VOICE === type) {
      g8ONM0 = getSystemLocale.t.TPPk2T;
    } else if (THREAD_CHANNEL_TYPES.has(channel.type)) {
      if (num > 0) {
        let prop = getSystemLocale.t["ZL7+I6"];
      } else {
        const t2 = getSystemLocale.t;
        prop = unread ? t2.YlVvmc : t2["0nZpiF"];
      }
    } else if (num > 0) {
      g8ONM0 = getSystemLocale.t.g8ONM0;
    } else {
      let t = getSystemLocale.t;
      g8ONM0 = unread ? t.smf1CZ : t.s0JADj;
    }
    if (null != joined) {
      const items2 = [joined];
      let items4 = items2;
    } else if (null != g8ONM0) {
      const intl10 = getSystemLocale.intl;
      const obj8 = { channelName: null, mentionCount: null };
      obj8[0] = channelName;
      obj8[1] = num;
      const items3 = [intl10.formatToPlainString(g8ONM0, obj8)];
      items4 = items3;
    } else {
      items4 = [];
    }
    if (isIncomingCall) {
      const intl12 = getSystemLocale.intl;
      items4.push(intl12.string(getSystemLocale.t["fk1/bX"]));
    } else if (flag) {
      const intl11 = getSystemLocale.intl;
      items4.push(intl11.string(getSystemLocale.t["NGg/fm"]));
    }
    let tmp21 = null != embeddedActivitiesCount;
    if (tmp21) {
      tmp21 = embeddedActivitiesCount > 0;
    }
    if (tmp21) {
      const intl13 = getSystemLocale.intl;
      const obj9 = { activitiesCount: null };
      obj9[0] = embeddedActivitiesCount;
      items4.push(intl13.formatToPlainString(getSystemLocale.t.O6PLYd, obj9));
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
      const intl14 = getSystemLocale.intl;
      const string = intl14.string;
      t = getSystemLocale.t;
      if (needSubscriptionToAccess) {
        t = t["oj+HOs"];
        let stringResult1 = string(t);
      } else {
        stringResult1 = string(t.xI3TQQ);
      }
    }
  }
};
export const getStatusLabel = function getStatusLabel(status) {
  if (constants2.ONLINE === status) {
    return nameFromUser.humanizeStatus(constants2.ONLINE);
  } else if (constants2.IDLE === status) {
    return nameFromUser.humanizeStatus(constants2.IDLE);
  } else if (constants2.DND === status) {
    return nameFromUser.humanizeStatus(constants2.DND);
  } else if (constants2.INVISIBLE === status) {
    return nameFromUser.humanizeStatus(constants2.INVISIBLE);
  } else {
    return "";
  }
};
export const getChannelA11yHint = function getChannelA11yHint(userStatus) {
  userStatus = userStatus.userStatus;
  const items = [];
  ({ channel, muted } = userStatus);
  if (userStatus.isFavorite) {
    const intl = getSystemLocale.intl;
    items.push(intl.string(getSystemLocale.t.cCPjSK));
  }
  if (true === muted) {
    const intl2 = getSystemLocale.intl;
    items.push(intl2.string(getSystemLocale.t.C4zCMb));
    return items.join(", ");
  } else {
    if (channel.type === constants.DM) {
      if (null != userStatus) {
        let ONLINE = constants2;
        if (constants2.ONLINE === userStatus) {
          ONLINE = ONLINE.ONLINE;
          let str = nameFromUser.humanizeStatus(ONLINE);
        } else {
          if (ONLINE.IDLE === userStatus) {
            str = nameFromUser.humanizeStatus(ONLINE.IDLE);
          } else if (ONLINE.DND !== userStatus) {
            str = "";
            if (ONLINE.INVISIBLE === userStatus) {
              str = nameFromUser.humanizeStatus(ONLINE.INVISIBLE);
            }
          }
          str = nameFromUser.humanizeStatus(ONLINE.DND);
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