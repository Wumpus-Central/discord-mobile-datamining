// discord_app/modules/notifications/LastMentionTimestampStore.tsx
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "trackCommunicationDisabled" /* 1990 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 5043 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;

let c5 = null;
let c6 = null;
let c7 = null;
let c8 = null;
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
const Store = initializeDefault.Store;
class LastMentionTimestampStore extends Store {
}
const prototype = LastMentionTimestampStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_3, closure_4);
};
prototype["getGlobalStats"] = function getGlobalStats() {
  let rounded = null;
  if (null != c5) {
    const _Math = Math;
    const _Date = Date;
    rounded = Math.floor((Date.now() - tmp) / 1000);
  }
  const obj = { approx_seconds_since_last_notification: rounded, approx_seconds_since_last_mention: null, approx_seconds_since_last_role_mention: null, approx_seconds_since_last_everyone_mention: null };
  let rounded1 = null;
  if (null != c6) {
    const _Math2 = Math;
    const _Date2 = Date;
    rounded1 = Math.floor((Date.now() - tmp4) / 1000);
  }
  obj[1] = rounded1;
  let rounded2 = null;
  if (null != c7) {
    const _Math3 = Math;
    const _Date3 = Date;
    rounded2 = Math.floor((Date.now() - tmp7) / 1000);
  }
  obj[2] = rounded2;
  let rounded3 = null;
  if (null != c8) {
    const _Math4 = Math;
    const _Date4 = Date;
    rounded3 = Math.floor((Date.now() - tmp10) / 1000);
  }
  obj[3] = rounded3;
  return obj;
};
prototype["getStats"] = function getStats(arg0) {
  let rounded = null;
  if (null != c5) {
    const _Math = Math;
    const _Date = Date;
    rounded = Math.floor((Date.now() - tmp) / 1000);
  }
  const obj = { approx_seconds_since_last_notification: rounded, approx_seconds_since_last_mention: null, approx_seconds_since_last_role_mention: null, approx_seconds_since_last_everyone_mention: null, approx_seconds_since_last_guild_notification: null, approx_seconds_since_last_guild_mention: null, approx_seconds_since_last_guild_role_mention: null, approx_seconds_since_last_guild_everyone_mention: null };
  let rounded1 = null;
  if (null != c6) {
    const _Math2 = Math;
    const _Date2 = Date;
    rounded1 = Math.floor((Date.now() - tmp4) / 1000);
  }
  obj[1] = rounded1;
  let rounded2 = null;
  if (null != c7) {
    const _Math3 = Math;
    const _Date3 = Date;
    rounded2 = Math.floor((Date.now() - tmp7) / 1000);
  }
  obj[2] = rounded2;
  let rounded3 = null;
  if (null != c8) {
    const _Math4 = Math;
    const _Date4 = Date;
    rounded3 = Math.floor((Date.now() - tmp10) / 1000);
  }
  obj[3] = rounded3;
  let tmp13 = null;
  if (null != arg0) {
    let rounded4 = null;
    if (null != dependencyMap[arg0]) {
      const _Math5 = Math;
      const _Date5 = Date;
      rounded4 = Math.floor((Date.now() - tmp15) / 1000);
    }
    tmp13 = rounded4;
  }
  obj[4] = tmp13;
  let tmp18 = null;
  if (null != arg0) {
    let rounded5 = null;
    if (null != dependencyMap2[arg0]) {
      const _Math6 = Math;
      const _Date6 = Date;
      rounded5 = Math.floor((Date.now() - tmp20) / 1000);
    }
    tmp18 = rounded5;
  }
  obj[5] = tmp18;
  let tmp23 = null;
  if (null != arg0) {
    let rounded6 = null;
    if (null != dependencyMap4[arg0]) {
      const _Math7 = Math;
      const _Date7 = Date;
      rounded6 = Math.floor((Date.now() - tmp25) / 1000);
    }
    tmp23 = rounded6;
  }
  obj[6] = tmp23;
  let tmp28 = null;
  if (null != arg0) {
    let rounded7 = null;
    if (null != dependencyMap3[arg0]) {
      const _Math8 = Math;
      const _Date8 = Date;
      rounded7 = Math.floor((Date.now() - tmp30) / 1000);
    }
    tmp28 = rounded7;
  }
  obj[7] = tmp28;
  return obj;
};
const lastMentionTimestampStore = new LastMentionTimestampStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let tmp4 = null != c5;
    if (tmp4) {
      const _Date = Date;
      tmp4 = Date.now() - tmp3 < 60000;
    }
    if (!tmp4) {
      c5 = null;
    }
    let tmp7 = null != c6;
    if (tmp7) {
      const _Date2 = Date;
      tmp7 = Date.now() - tmp6 < 60000;
    }
    if (!tmp7) {
      c6 = null;
    }
    let tmp10 = null != c7;
    if (tmp10) {
      const _Date3 = Date;
      tmp10 = Date.now() - tmp9 < 60000;
    }
    if (!tmp10) {
      c7 = null;
    }
    let tmp13 = null != c8;
    if (tmp13) {
      const _Date4 = Date;
      tmp13 = Date.now() - tmp12 < 60000;
    }
    if (!tmp13) {
      c8 = null;
    }
    for (const key10037 in closure_9) {
      let tmp19 = key10037;
      let tmp20 = dependencyMap;
      let tmp21 = dependencyMap[key10037];
      let tmp15 = null != tmp21;
      if (tmp15) {
        let _Date5 = Date;
        tmp15 = Date.now() - tmp21 < 60000;
      }
      if (tmp15) {
        continue;
      } else {
        delete tmp[tmp2];
        continue;
      }
      continue;
    }
    for (const key10045 in closure_10) {
      let tmp22 = key10045;
      let tmp23 = dependencyMap2;
      let tmp24 = dependencyMap2[key10045];
      let tmp16 = null != tmp24;
      if (tmp16) {
        let _Date6 = Date;
        tmp16 = Date.now() - tmp24 < 60000;
      }
      if (tmp16) {
        continue;
      } else {
        delete tmp[tmp2];
        continue;
      }
      continue;
    }
    for (const key10053 in closure_12) {
      let tmp25 = key10053;
      let tmp26 = dependencyMap4;
      let tmp27 = dependencyMap4[key10053];
      let tmp17 = null != tmp27;
      if (tmp17) {
        let _Date7 = Date;
        tmp17 = Date.now() - tmp27 < 60000;
      }
      if (tmp17) {
        continue;
      } else {
        delete tmp[tmp2];
        continue;
      }
      continue;
    }
    for (const key10061 in closure_11) {
      let tmp28 = key10061;
      let tmp29 = dependencyMap3;
      let tmp30 = dependencyMap3[key10061];
      let tmp18 = null != tmp30;
      if (tmp18) {
        let _Date8 = Date;
        tmp18 = Date.now() - tmp30 < 60000;
      }
      if (tmp18) {
        continue;
      } else {
        delete tmp[tmp2];
        continue;
      }
      continue;
    }
  },
  MESSAGE_NOTIFICATION_SHOWN: function handleMessageNotificationShown(guildId) {
    guildId = guildId.guildId;
    ({ mentioned, roleMentioned, everyoneMentioned } = guildId);
    const timestamp = Date.now();
    if (null != guildId) {
      closure_9[guildId] = timestamp;
    }
    if (mentioned) {
      if (null != guildId) {
        closure_10[guildId] = timestamp;
      }
    }
    if (roleMentioned) {
      if (null != guildId) {
        closure_12[guildId] = timestamp;
      }
    }
    if (everyoneMentioned) {
      if (null != guildId) {
        closure_11[guildId] = timestamp;
      }
    }
  }
});
let result = require("set").fileFinishedImporting("modules/notifications/LastMentionTimestampStore.tsx");

export default lastMentionTimestampStore;
export const trackMessageNotificationTimestamps = function trackMessageNotificationTimestamps(mentions, guildId) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = closure_3.isSuppressEveryoneEnabled(guildId);
  let someResult = null != mentions.mentions;
  const result1 = closure_3.isSuppressRolesEnabled(guildId);
  if (someResult) {
    mentions = mentions.mentions;
    someResult = mentions.some((id) => id.id === id);
  }
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = member.getMember(guildId, id);
    }
  }
  let someResult1 = null != mentions.mention_roles && null != member && null != member.roles;
  if (someResult1) {
    const mention_roles = mentions.mention_roles;
    someResult1 = mention_roles.some((arg0) => {
      const roles = member.roles;
      return roles.includes(arg0);
    });
  }
  let obj = id(member[3]);
  obj = { type: "MESSAGE_NOTIFICATION_SHOWN", guildId, mentioned: someResult, roleMentioned: null, everyoneMentioned: null };
  if (someResult1) {
    someResult1 = !result1;
  }
  obj[3] = someResult1;
  obj[4] = true === mentions.mention_everyone && !result;
  obj.dispatch(obj);
};