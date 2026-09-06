// discord_app/modules/channel/getChannelA11yLabel.tsx
import UserUtils from "../../utils/UserUtils.tsx";
import useChannelName from "useChannelName.tsx";
import isRoleRequiredDefault from "isRoleRequired.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const util = tmp(1114);
const utils = tmp(8135);
require = fn;
const Constants = fn(1074);
({ ChannelTypes: hasOwnProperty, StatusTypes: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/getChannelA11yLabel.tsx");

export default function getChannelA11yLabel(mentionCount) {
  ({ channel, unread } = mentionCount);
  if (unread === undefined) {
    unread = false;
  }
  let num = mentionCount.mentionCount;
  if (num === undefined) {
    num = 0;
  }
  ({
    voiceStates,
    embeddedActivitiesCount,
    activityNames,
    isIncomingCall,
    isSubscriptionGated,
    needSubscriptionToAccess,
  } = mentionCount);
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
  let obj = useChannelName;
  const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
  if (isRoleRequiredDefault(channel)) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["4qvAtn"]);
  }
  if (flag2) {
    const intl3 = util.intl;
    let stringResult1 = intl3.string(util.t.dByf4y);
  } else if (ignored) {
    const intl2 = util.intl;
    stringResult1 = intl2.string(util.t.mMCUM9);
  }
  const type = channel.type;
  if (constants.DM === type) {
    if (num > 0) {
      let TO8LYt = util.t.TO8LYt;
    } else {
      const t8 = util.t;
      TO8LYt = unread ? t8.F2MZsu : t8.fYqXVY;
    }
  } else {
    if (tmp6.GROUP_DM === type) {
      if (num > 0) {
        let Lo0dCa = util.t.Lo0dCa;
      } else {
        const t7 = util.t;
        Lo0dCa = unread ? t7["fxxUo/"] : t7.lts3Ld;
      }
      const intl11 = util.intl;
      obj = { channelName, mentionCount: num };
      const items = [intl11.formatToPlainString(Lo0dCa, obj)];
      const intl12 = util.intl;
      obj = { members: channel.recipients.length + 1 };
      items[1] = intl12.formatToPlainString(util.t.CxSA5N, obj);
      let joined = items.join(", ");
    } else if (tmp6.GUILD_STORE === type) {
      let g8ONM0 = util.t.Bo4msg;
    } else if (tmp6.GUILD_DIRECTORY === type) {
      g8ONM0 = util.t["92EAF2"];
    } else if (tmp6.GUILD_ANNOUNCEMENT === type) {
      if (num > 0) {
        let sDKIpm = util.t.sDKIpm;
      } else {
        const t6 = util.t;
        sDKIpm = unread ? t6.VM7z8f : t6.WJ3MPt;
      }
      g8ONM0 = sDKIpm;
    } else if (tmp6.GUILD_APP === type) {
      if (num > 0) {
        let BILI3J = util.t.BILI3J;
      } else {
        const t5 = util.t;
        BILI3J = unread ? t5["xzhzM/"] : t5.F98YPC;
      }
      g8ONM0 = BILI3J;
    } else if (tmp6.GUILD_FORUM === type) {
      if (num > 0) {
        let rSsuUF = util.t.rSsuUF;
      } else {
        const t4 = util.t;
        rSsuUF = unread ? t4["dr/Oik"] : t4.Ajnhpa;
      }
      g8ONM0 = rSsuUF;
    } else if (tmp6.GUILD_MEDIA === type) {
      if (num > 0) {
        let KqEUsJ = util.t.KqEUsJ;
      } else {
        const t3 = util.t;
        KqEUsJ = unread ? t3["37AyNG"] : t3.KuUltE;
      }
      g8ONM0 = KqEUsJ;
    } else if (tmp6.GUILD_VOICE === type) {
      const intl4 = util.intl;
      const obj1 = { channelName };
      const items1 = [intl4.formatToPlainString(util.t.bkpadO, obj1)];
      if (num > 0) {
        const intl5 = util.intl;
        const obj2 = { mentionCount: num };
        items1.push(intl5.formatToPlainString(util.t["3l1GOx"], obj2));
      }
      if (unread) {
        const intl6 = util.intl;
        items1.push(intl6.string(util.t.x5zAGZ));
      }
      const userLimit = channel.userLimit;
      if (null != voiceStates) {
        if (voiceStates.length > 0) {
          const diff = voiceStates.length - 3;
          const substr = voiceStates.slice(0, 3);
          const mapped = substr.map((nick) => {
            nick = nick.nick;
            if (nick == null) {
              nick = UserUtils.getName(tmp);
            }
            return nick;
          });
          items1.push(mapped.join(", "));
          if (0 < diff) {
            const intl7 = util.intl;
            const obj3 = { overflow: diff };
            items1.push(intl7.formatToPlainString(util.t.sfgpgr, obj3));
          }
          if (tmp13) {
            const intl8 = util.intl;
            const obj4 = { userCount: voiceStates.length, limit: userLimit };
            items1.push(intl8.formatToPlainString(util.t["6qgTOF"], obj4));
          }
          tmp13 = null != userLimit && userLimit > 0;
        }
      }
      if (null != voiceChannelStartTime) {
        const intl9 = util.intl;
        const obj5 = { duration: null };
        const obj6 = { start: voiceChannelStartTime };
        const _Date = Date;
        obj5.duration = utils.formatActiveA11yTimestamp(obj6, Date.now());
        items1.push(intl9.formatToPlainString(util.t.JQtsGh, obj5));
        const tmpResult = utils;
      }
      if (tmp17) {
        const intl10 = util.intl;
        const obj7 = { activeActivities: activityNames.join(", ") };
        items1.push(intl10.formatToPlainString(util.t.LmYuHT, obj7));
      }
      joined = items1.join(", ");
      tmp17 = null != activityNames && activityNames.length > 0;
    } else if (tmp6.GUILD_STAGE_VOICE === type) {
      g8ONM0 = util.t.TPPk2T;
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
                g8ONM0 = util.t.g8ONM0;
              } else {
                let t = util.t;
                g8ONM0 = unread ? t.smf1CZ : t.s0JADj;
              }
            }
          }
        }
      }
      if (num > 0) {
        let prop = util.t["ZL7+I6"];
      } else {
        const t2 = util.t;
        prop = unread ? t2.YlVvmc : t2["0nZpiF"];
      }
      g8ONM0 = prop;
    }
    if (null != joined) {
      const items2 = [joined];
      let items4 = items2;
    } else if (null != g8ONM0) {
      const intl13 = util.intl;
      const obj8 = { channelName, mentionCount: num };
      const items3 = [intl13.formatToPlainString(g8ONM0, obj8)];
      items4 = items3;
    } else {
      items4 = [];
    }
    if (null != stringResult1) {
      items4.unshift(stringResult1);
    }
    if (isIncomingCall) {
      const intl15 = util.intl;
      items4.push(intl15.string(util.t["fk1/bX"]));
    } else if (flag) {
      const intl14 = util.intl;
      items4.push(intl14.string(util.t["NGg/fm"]));
    }
    let tmp24 = null != embeddedActivitiesCount;
    if (tmp24) {
      tmp24 = embeddedActivitiesCount > 0;
    }
    if (tmp24) {
      const intl16 = util.intl;
      const obj9 = { activitiesCount: embeddedActivitiesCount };
      items4.push(intl16.formatToPlainString(util.t.O6PLYd, obj9));
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
      const intl17 = util.intl;
      const string = intl17.string;
      t = util.t;
      if (needSubscriptionToAccess) {
        t = t["oj+HOs"];
        let stringResult2 = string(t);
      } else {
        stringResult2 = string(t.xI3TQQ);
      }
    }
  }
}
export const getStatusLabel = function getStatusLabel(status) {
  if (constants2.ONLINE === status) {
    return UserUtils.humanizeStatus(tmp.ONLINE);
  } else if (tmp.IDLE === status) {
    return UserUtils.humanizeStatus(tmp.IDLE);
  } else if (tmp.DND === status) {
    return UserUtils.humanizeStatus(tmp.DND);
  } else if (tmp.INVISIBLE === status) {
    return UserUtils.humanizeStatus(tmp.INVISIBLE);
  } else {
    return "";
  }
};
export const getChannelA11yHint = function getChannelA11yHint(userStatus) {
  userStatus = userStatus.userStatus;
  const items = [];
  ({ channel, muted } = userStatus);
  if (userStatus.isFavorite) {
    const intl = util.intl;
    items.push(intl.string(util.t.cCPjSK));
  }
  if (true === muted) {
    const intl2 = util.intl;
    items.push(intl2.string(util.t.C4zCMb));
    return items.join(", ");
  } else {
    if (channel.type === constants.DM) {
      if (null != userStatus) {
        let ONLINE = constants2;
        if (constants2.ONLINE === userStatus) {
          ONLINE = ONLINE.ONLINE;
          let str = UserUtils.humanizeStatus(ONLINE);
        } else {
          if (ONLINE.IDLE === userStatus) {
            str = UserUtils.humanizeStatus(ONLINE.IDLE);
          } else if (ONLINE.DND !== userStatus) {
            str = "";
            if (ONLINE.INVISIBLE === userStatus) {
              str = UserUtils.humanizeStatus(ONLINE.INVISIBLE);
            }
          }
          str = UserUtils.humanizeStatus(ONLINE.DND);
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
