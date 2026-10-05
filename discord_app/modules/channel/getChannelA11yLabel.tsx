// discord_app/modules/channel/getChannelA11yLabel.tsx
import intl18 from "../../intl/index.native.tsx";
import UserUtils from "../../utils/UserUtils.tsx";
import useChannelName from "useChannelName.tsx";
import isRoleRequiredDefault from "isRoleRequired.tsx";
import utils from "../content_inventory/utils.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let nick;

let hasOwnProperty;
let metroRequire;
({ ChannelTypes: hasOwnProperty, StatusTypes: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/channel/getChannelA11yLabel.tsx");

export default function getChannelA11yLabel(mentionCount) {
  let activityNames;
  let channel;
  let embeddedActivitiesCount;
  let g8ONM0;
  let ignored;
  let isIncomingCall;
  let isSubscriptionGated;
  let items4;
  let joined;
  let needSubscriptionToAccess;
  let obj9;
  let stringResult1;
  let tmpResult;
  let unread;
  let voiceChannelStartTime;
  let voiceStates;
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
  let stringResult;
  if (isRoleRequiredDefault(channel)) {
    const intl = intl18.intl;
    stringResult = intl.string(intl18.t["4qvAtn"]);
  }
  if (flag2) {
    const intl3 = intl18.intl;
    stringResult1 = intl3.string(intl18.t.dByf4y);
  } else if (ignored) {
    const intl2 = intl18.intl;
    stringResult1 = intl2.string(intl18.t.mMCUM9);
  }
  const type = channel.type;
  if (hasOwnProperty.DM === type) {
    let TO8LYt;
    if (num > 0) {
      TO8LYt = intl18.t.TO8LYt;
    } else {
      const t8 = intl18.t;
      TO8LYt = unread ? t8.F2MZsu : t8.fYqXVY;
    }
    g8ONM0 = TO8LYt;
  } else if (hasOwnProperty.GROUP_DM === type) {
    let Lo0dCa;
    if (num > 0) {
      Lo0dCa = intl18.t.Lo0dCa;
    } else {
      const t7 = intl18.t;
      Lo0dCa = unread ? t7["fxxUo/"] : t7.lts3Ld;
    }
    const intl11 = intl18.intl;
    const obj2 = { channelName, mentionCount: num };
    const items = [intl11.formatToPlainString(Lo0dCa, obj2)];
    const intl12 = intl18.intl;
    const obj3 = { members: channel.recipients.length + 1 };
    items[1] = intl12.formatToPlainString(intl18.t.CxSA5N, obj3);
    joined = items.join(", ");
  } else if (hasOwnProperty.GUILD_STORE === type) {
    g8ONM0 = intl18.t.Bo4msg;
  } else if (hasOwnProperty.GUILD_DIRECTORY === type) {
    g8ONM0 = intl18.t["92EAF2"];
  } else if (hasOwnProperty.GUILD_ANNOUNCEMENT === type) {
    let sDKIpm;
    if (num > 0) {
      sDKIpm = intl18.t.sDKIpm;
    } else {
      const t6 = intl18.t;
      sDKIpm = unread ? t6.VM7z8f : t6.WJ3MPt;
    }
    g8ONM0 = sDKIpm;
  } else if (hasOwnProperty.GUILD_APP === type) {
    let BILI3J;
    if (num > 0) {
      BILI3J = intl18.t.BILI3J;
    } else {
      const t5 = intl18.t;
      BILI3J = unread ? t5["xzhzM/"] : t5.F98YPC;
    }
    g8ONM0 = BILI3J;
  } else if (hasOwnProperty.GUILD_FORUM === type) {
    let rSsuUF;
    if (num > 0) {
      rSsuUF = intl18.t.rSsuUF;
    } else {
      const t4 = intl18.t;
      rSsuUF = unread ? t4["dr/Oik"] : t4.Ajnhpa;
    }
    g8ONM0 = rSsuUF;
  } else if (hasOwnProperty.GUILD_MEDIA === type) {
    let KqEUsJ;
    if (num > 0) {
      KqEUsJ = intl18.t.KqEUsJ;
    } else {
      const t3 = intl18.t;
      KqEUsJ = unread ? t3["37AyNG"] : t3.KuUltE;
    }
    g8ONM0 = KqEUsJ;
  } else if (hasOwnProperty.GUILD_VOICE === type) {
    const intl4 = intl18.intl;
    const obj4 = { channelName };
    const items1 = [intl4.formatToPlainString(intl18.t.bkpadO, obj4)];
    if (num > 0) {
      const push = items1.push;
      const intl5 = intl18.intl;
      const obj5 = { mentionCount: num };
      push(intl5.formatToPlainString(intl18.t["3l1GOx"], obj5));
    }
    if (unread) {
      const push2 = items1.push;
      const intl6 = intl18.intl;
      push2(intl6.string(intl18.t.x5zAGZ));
    }
    const userLimit = channel.userLimit;
    if (null != voiceStates) {
      if (voiceStates.length > 0) {
        const diff = voiceStates.length - 3;
        const substr = voiceStates.slice(0, 3);
        const mapped = substr.map((nick) => {
          nick = nick.nick;
          if (nick == null) {
            const obj = UserUtils;
            nick = obj.getName(tmp);
          }
          return nick;
        });
        items1.push(mapped.join(", "));
        if (0 < diff) {
          const push3 = items1.push;
          const intl7 = intl18.intl;
          const obj6 = { overflow: diff };
          push3(intl7.formatToPlainString(intl18.t.sfgpgr, obj6));
        }
        const tmp13 = null != userLimit && userLimit > 0;
        if (tmp13) {
          const push4 = items1.push;
          const intl8 = intl18.intl;
          const obj7 = { userCount: voiceStates.length, limit: userLimit };
          push4(intl8.formatToPlainString(intl18.t["6qgTOF"], obj7));
        }
      }
    }
    if (null != voiceChannelStartTime) {
      const push5 = items1.push;
      const intl9 = intl18.intl;
      const formatToPlainString = intl9.formatToPlainString;
      const obj8 = { duration: tmpResult.formatActiveA11yTimestamp(obj9, Date.now()) };
      const JQtsGh = intl18.t.JQtsGh;
      const _Date = Date;
      obj9 = { start: voiceChannelStartTime };
      tmpResult = utils;
      push5(formatToPlainString(JQtsGh, obj8));
    }
    const tmp17 = null != activityNames && activityNames.length > 0;
    if (tmp17) {
      const push6 = items1.push;
      const intl10 = intl18.intl;
      const formatToPlainString2 = intl10.formatToPlainString;
      const obj10 = { activeActivities: activityNames.join(", ") };
      const LmYuHT = intl18.t.LmYuHT;
      push6(formatToPlainString2(LmYuHT, obj10));
    }
    joined = items1.join(", ");
  } else if (hasOwnProperty.GUILD_STAGE_VOICE === type) {
    g8ONM0 = intl18.t.TPPk2T;
  } else {
    let prop;
    if (hasOwnProperty.ANNOUNCEMENT_THREAD !== type) {
      if (hasOwnProperty.PUBLIC_THREAD !== type) {
        if (hasOwnProperty.PRIVATE_THREAD !== type) {
          if (hasOwnProperty.MEDIA_THREAD !== type) {
            if (hasOwnProperty.GUILD_TEXT !== type) {
              if (hasOwnProperty.GUILD_CATEGORY !== type) {
                if (hasOwnProperty.GUILD_SPACE !== type) {
                  const UNKNOWN = hasOwnProperty.UNKNOWN;
                }
              }
            }
            if (num > 0) {
              g8ONM0 = intl18.t.g8ONM0;
            } else {
              const t = intl18.t;
              g8ONM0 = unread ? t.smf1CZ : t.s0JADj;
            }
          }
        }
      }
    }
    if (num > 0) {
      prop = intl18.t["ZL7+I6"];
    } else {
      const t2 = intl18.t;
      prop = unread ? t2.YlVvmc : t2["0nZpiF"];
    }
    g8ONM0 = prop;
  }
  if (null != joined) {
    const items2 = [joined];
    items4 = items2;
  } else if (null != g8ONM0) {
    const intl13 = intl18.intl;
    const obj11 = { channelName, mentionCount: num };
    const items3 = [intl13.formatToPlainString(g8ONM0, obj11)];
    items4 = items3;
  } else {
    items4 = [];
  }
  if (null != stringResult1) {
    items4.unshift(stringResult1);
  }
  if (isIncomingCall) {
    const push8 = items4.push;
    const intl15 = intl18.intl;
    push8(intl15.string(intl18.t["fk1/bX"]));
  } else if (flag) {
    const push7 = items4.push;
    const intl14 = intl18.intl;
    push7(intl14.string(intl18.t["NGg/fm"]));
  }
  const tmp22 = null != embeddedActivitiesCount && embeddedActivitiesCount > 0;
  if (tmp22) {
    const push9 = items4.push;
    const intl16 = intl18.intl;
    const obj12 = { activitiesCount: embeddedActivitiesCount };
    push9(intl16.formatToPlainString(intl18.t.O6PLYd, obj12));
  }
  let tmp24;
  if (isSubscriptionGated) {
    let stringResult2;
    const intl17 = intl18.intl;
    const string = intl17.string;
    const t9 = intl18.t;
    if (needSubscriptionToAccess) {
      stringResult2 = string(t9["oj+HOs"]);
    } else {
      stringResult2 = string(t9.xI3TQQ);
    }
    tmp24 = stringResult2;
  }
  if (null != tmp24) {
    items4.push(tmp24);
  }
  if (null != stringResult) {
    items4.push(stringResult);
  }
  return items4.join(", ");
}
export const getStatusLabel = function getStatusLabel(status) {
  if (metroRequire.ONLINE === status) {
    const obj4 = UserUtils;
    return obj4.humanizeStatus(metroRequire.ONLINE);
  } else if (metroRequire.IDLE === status) {
    const obj3 = UserUtils;
    return obj3.humanizeStatus(metroRequire.IDLE);
  } else if (metroRequire.DND === status) {
    const obj2 = UserUtils;
    return obj2.humanizeStatus(metroRequire.DND);
  } else if (metroRequire.INVISIBLE === status) {
    const obj = UserUtils;
    return obj.humanizeStatus(metroRequire.INVISIBLE);
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
    const push = items.push;
    const intl = intl18.intl;
    push(intl.string(intl18.t.cCPjSK));
  }
  if (true === muted) {
    const push2 = items.push;
    const intl2 = intl18.intl;
    push2(intl2.string(intl18.t.C4zCMb));
    return items.join(", ");
  } else {
    if (channel.type === hasOwnProperty.DM) {
      if (null != userStatus) {
        let str;
        const push3 = items.push;
        if (metroRequire.ONLINE === userStatus) {
          const obj3 = UserUtils;
          str = obj3.humanizeStatus(metroRequire.ONLINE);
        } else if (metroRequire.IDLE === userStatus) {
          const obj2 = UserUtils;
          str = obj2.humanizeStatus(metroRequire.IDLE);
        } else if (metroRequire.DND === userStatus) {
          const obj = UserUtils;
          str = obj.humanizeStatus(metroRequire.DND);
        } else {
          str = "";
          if (metroRequire.INVISIBLE === userStatus) {
            const obj4 = UserUtils;
            str = obj4.humanizeStatus(metroRequire.INVISIBLE);
          }
        }
        push3(str);
      }
    }
    let joined;
    if (items.length > 0) {
      joined = items.join(", ");
    }
    return joined;
  }
};
