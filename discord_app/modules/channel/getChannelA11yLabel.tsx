// === Module 9442: getChannelA11yLabel ===

// Module 9442 (getChannelA11yLabel)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import nameFromUser from "nameFromUser" /* 4322 */;
import computeChannelName from "computeChannelName" /* 4674 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5016 */;
import calculateTimestampDurations from "calculateTimestampDurations" /* 8056 */;
import closure_3 from "markAllUserIdListsStale" /* 4130 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;

require = arg1;
({ ChannelTypes: c5, StatusTypes: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/channel/getChannelA11yLabel.tsx");

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
  ({ voiceChannelStartTime, ignored } = mentionCount);
  if (ignored === undefined) {
    ignored = false;
  }
  let flag2 = mentionCount.blocked;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = require;
  let obj = computeChannelName;
  const channelName = obj.computeChannelName(channel, closure_4, closure_3);
  if (isRoleRequiredDefault(channel)) {
    const intl = getSystemLocale.intl;
    const stringResult = intl.string(getSystemLocale.t["4qvAtn"]);
  }
  if (flag2) {
    const intl3 = getSystemLocale.intl;
    let stringResult1 = intl3.string(getSystemLocale.t.dByf4y);
  } else if (ignored) {
    const intl2 = getSystemLocale.intl;
    stringResult1 = intl2.string(getSystemLocale.t.mMCUM9);
  }
  const type = channel.type;
  if (constants.DM === type) {
    if (num > 0) {
      let TO8LYt = getSystemLocale.t.TO8LYt;
    } else {
      const t8 = getSystemLocale.t;
      TO8LYt = unread ? t8.F2MZsu : t8.fYqXVY;
    }
  } else {
    if (tmp6.GROUP_DM === type) {
      if (num > 0) {
        let Lo0dCa = getSystemLocale.t.Lo0dCa;
      } else {
        const t7 = getSystemLocale.t;
        Lo0dCa = unread ? t7["fxxUo/"] : t7.lts3Ld;
      }
      const intl11 = getSystemLocale.intl;
      obj = { channelName: null, mentionCount: null };
      obj[0] = channelName;
      obj[1] = num;
      const items = [intl11.formatToPlainString(Lo0dCa, obj), ];
      const intl12 = getSystemLocale.intl;
      obj = { members: null };
      obj[0] = channel.recipients.length + 1;
      items[1] = intl12.formatToPlainString(getSystemLocale.t.CxSA5N, obj);
      let joined = items.join(", ");
    } else if (tmp6.GUILD_STORE === type) {
      let g8ONM0 = getSystemLocale.t.Bo4msg;
    } else if (tmp6.GUILD_DIRECTORY === type) {
      g8ONM0 = getSystemLocale.t["92EAF2"];
    } else if (tmp6.GUILD_ANNOUNCEMENT === type) {
      if (num > 0) {
        let sDKIpm = getSystemLocale.t.sDKIpm;
      } else {
        const t6 = getSystemLocale.t;
        sDKIpm = unread ? t6.VM7z8f : t6.WJ3MPt;
      }
      g8ONM0 = sDKIpm;
    } else if (tmp6.GUILD_APP === type) {
      if (num > 0) {
        let BILI3J = getSystemLocale.t.BILI3J;
      } else {
        const t5 = getSystemLocale.t;
        BILI3J = unread ? t5["xzhzM/"] : t5.F98YPC;
      }
      g8ONM0 = BILI3J;
    } else if (tmp6.GUILD_FORUM === type) {
      if (num > 0) {
        let rSsuUF = getSystemLocale.t.rSsuUF;
      } else {
        const t4 = getSystemLocale.t;
        rSsuUF = unread ? t4["dr/Oik"] : t4.Ajnhpa;
      }
      g8ONM0 = rSsuUF;
    } else if (tmp6.GUILD_MEDIA === type) {
      if (num > 0) {
        let KqEUsJ = getSystemLocale.t.KqEUsJ;
      } else {
        const t3 = getSystemLocale.t;
        KqEUsJ = unread ? t3["37AyNG"] : t3.KuUltE;
      }
      g8ONM0 = KqEUsJ;
    } else if (tmp6.GUILD_VOICE === type) {
      const intl4 = getSystemLocale.intl;
      obj1 = { channelName: null };
      obj1[0] = channelName;
      const items1 = [intl4.formatToPlainString(getSystemLocale.t.bkpadO, obj1)];
      if (num > 0) {
        const intl5 = getSystemLocale.intl;
        const obj2 = { mentionCount: null };
        obj2[0] = num;
        items1.push(intl5.formatToPlainString(getSystemLocale.t["3l1GOx"], obj2));
      }
      if (unread) {
        const intl6 = getSystemLocale.intl;
        items1.push(intl6.string(getSystemLocale.t.x5zAGZ));
      }
      const userLimit = channel.userLimit;
      if (null != voiceStates) {
        if (voiceStates.length > 0) {
          const diff = voiceStates.length - 3;
          const substr = voiceStates.slice(0, 3);
          const mapped = substr.map((nick) => {
            nick = nick.nick;
            if (nick == null) {
              nick = callback(table[6]).getName(tmp);
              const obj = callback(table[6]);
            }
            return nick;
          });
          items1.push(mapped.join(", "));
          if (0 < diff) {
            const intl7 = getSystemLocale.intl;
            const obj3 = { overflow: null };
            obj3[0] = diff;
            items1.push(intl7.formatToPlainString(getSystemLocale.t.sfgpgr, obj3));
          }
          if (tmp12) {
            const intl8 = getSystemLocale.intl;
            const obj4 = { userCount: null, limit: null };
            obj4[0] = voiceStates.length;
            obj4[1] = userLimit;
            items1.push(intl8.formatToPlainString(getSystemLocale.t["6qgTOF"], obj4));
          }
          tmp12 = null != userLimit && userLimit > 0;
        }
      }
      if (null != voiceChannelStartTime) {
        const intl9 = getSystemLocale.intl;
        const obj5 = { duration: null };
        const obj6 = { start: null };
        obj6[0] = voiceChannelStartTime;
        const _Date = Date;
        obj5[0] = calculateTimestampDurations.formatActiveA11yTimestamp(obj6, Date.now());
        items1.push(intl9.formatToPlainString(getSystemLocale.t.JQtsGh, obj5));
        const tmpResult = calculateTimestampDurations;
      }
      if (tmp16) {
        const intl10 = getSystemLocale.intl;
        const obj7 = { activeActivities: null };
        obj7[0] = activityNames.join(", ");
        items1.push(intl10.formatToPlainString(getSystemLocale.t.LmYuHT, obj7));
      }
      joined = items1.join(", ");
      tmp16 = null != activityNames && activityNames.length > 0;
    } else if (tmp6.GUILD_STAGE_VOICE === type) {
      g8ONM0 = getSystemLocale.t.TPPk2T;
    } else {
      if (tmp6.ANNOUNCEMENT_THREAD !== type) {
        if (tmp6.PUBLIC_THREAD !== type) {
          if (tmp6.PRIVATE_THREAD !== type) {
            if (tmp6.MEDIA_THREAD !== type) {
              if (tmp6.GUILD_TEXT !== type) {
                if (tmp6.GUILD_CATEGORY !== type) {
                  if (tmp6.GUILD_SPACE !== type) {
                    const UNKNOWN = tmp6.UNKNOWN;
                  }
                }
              }
              if (num > 0) {
                g8ONM0 = getSystemLocale.t.g8ONM0;
              } else {
                const t = getSystemLocale.t;
                g8ONM0 = unread ? t.smf1CZ : t.s0JADj;
              }
            }
          }
        }
      }
      if (num > 0) {
        ZL7_I6 = getSystemLocale.t["ZL7+I6"];
      } else {
        const t2 = getSystemLocale.t;
        ZL7_I6 = unread ? t2.YlVvmc : t2["0nZpiF"];
      }
      g8ONM0 = ZL7_I6;
    }
    if (null != joined) {
      const items2 = [joined];
      let items4 = items2;
    } else if (null != g8ONM0) {
      const intl13 = getSystemLocale.intl;
      const obj8 = { channelName: null, mentionCount: null };
      obj8[0] = channelName;
      obj8[1] = num;
      const items3 = [intl13.formatToPlainString(g8ONM0, obj8)];
      items4 = items3;
    } else {
      items4 = [];
    }
    if (null != stringResult1) {
      items4.unshift(stringResult1);
    }
    if (isIncomingCall) {
      const intl15 = getSystemLocale.intl;
      items4.push(intl15.string(getSystemLocale.t["fk1/bX"]));
    } else if (flag) {
      const intl14 = getSystemLocale.intl;
      items4.push(intl14.string(getSystemLocale.t["NGg/fm"]));
    }
    let tmp23 = null != embeddedActivitiesCount;
    if (tmp23) {
      tmp23 = embeddedActivitiesCount > 0;
    }
    if (tmp23) {
      const intl16 = getSystemLocale.intl;
      const obj9 = { activitiesCount: null };
      obj9[0] = embeddedActivitiesCount;
      items4.push(intl16.formatToPlainString(getSystemLocale.t.O6PLYd, obj9));
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
      const intl17 = getSystemLocale.intl;
      const string = intl17.string;
      oj_HOs = getSystemLocale.t;
      if (needSubscriptionToAccess) {
        oj_HOs = oj_HOs["oj+HOs"];
        let stringResult2 = string(oj_HOs);
      } else {
        stringResult2 = string(oj_HOs.xI3TQQ);
      }
    }
  }
};
export const getStatusLabel = function getStatusLabel(status) {
  if (constants2.ONLINE === status) {
    return nameFromUser.humanizeStatus(tmp.ONLINE);
  } else if (tmp.IDLE === status) {
    return nameFromUser.humanizeStatus(tmp.IDLE);
  } else if (tmp.DND === status) {
    return nameFromUser.humanizeStatus(tmp.DND);
  } else if (tmp.INVISIBLE === status) {
    return nameFromUser.humanizeStatus(tmp.INVISIBLE);
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
          const obj3 = nameFromUser;
        } else {
          if (ONLINE.IDLE === userStatus) {
            str = nameFromUser.humanizeStatus(ONLINE.IDLE);
            const obj2 = nameFromUser;
          } else if (ONLINE.DND !== userStatus) {
            str = "";
            if (ONLINE.INVISIBLE === userStatus) {
              str = nameFromUser.humanizeStatus(ONLINE.INVISIBLE);
              const obj4 = nameFromUser;
            }
          }
          str = nameFromUser.humanizeStatus(ONLINE.DND);
          const obj = nameFromUser;
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