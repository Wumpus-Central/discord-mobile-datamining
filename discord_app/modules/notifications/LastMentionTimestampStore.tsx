// === Module 7115: LastMentionTimestampStore ===

// Module 7115 (LastMentionTimestampStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import UserStore from "UserStore" /* 1371 */;

let timestamp = null;
const dependencyMap = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
const dependencyMap4 = {};
const Store = initializeDefault.Store;
class LastMentionTimestampStore extends Store {
}
const prototype = LastMentionTimestampStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildMemberStore, UserGuildSettingsStore, UserStore);
};
prototype["getGlobalStats"] = function getGlobalStats() {
  let rounded = null;
  if (null != timestamp) {
    const _Math = Math;
    const _Date = Date;
    rounded = Math.floor((Date.now() - tmp) / 1000);
  }
  const obj = { approx_seconds_since_last_notification: rounded, approx_seconds_since_last_mention: null, approx_seconds_since_last_role_mention: null, approx_seconds_since_last_everyone_mention: null };
  let rounded1 = null;
  if (null != timestamp) {
    const _Math2 = Math;
    const _Date2 = Date;
    rounded1 = Math.floor((Date.now() - tmp4) / 1000);
  }
  obj.approx_seconds_since_last_mention = rounded1;
  let rounded2 = null;
  if (null != timestamp) {
    const _Math3 = Math;
    const _Date3 = Date;
    rounded2 = Math.floor((Date.now() - tmp7) / 1000);
  }
  obj.approx_seconds_since_last_role_mention = rounded2;
  let rounded3 = null;
  if (null != timestamp) {
    const _Math4 = Math;
    const _Date4 = Date;
    rounded3 = Math.floor((Date.now() - tmp10) / 1000);
  }
  obj.approx_seconds_since_last_everyone_mention = rounded3;
  return obj;
};
prototype["getStats"] = function getStats(arg0) {
  let rounded = null;
  if (null != timestamp) {
    const _Math = Math;
    const _Date = Date;
    rounded = Math.floor((Date.now() - tmp) / 1000);
  }
  const obj = { approx_seconds_since_last_notification: rounded, approx_seconds_since_last_mention: null, approx_seconds_since_last_role_mention: null, approx_seconds_since_last_everyone_mention: null, approx_seconds_since_last_guild_notification: null, approx_seconds_since_last_guild_mention: null, approx_seconds_since_last_guild_role_mention: null, approx_seconds_since_last_guild_everyone_mention: null };
  let rounded1 = null;
  if (null != timestamp) {
    const _Math2 = Math;
    const _Date2 = Date;
    rounded1 = Math.floor((Date.now() - tmp4) / 1000);
  }
  obj.approx_seconds_since_last_mention = rounded1;
  let rounded2 = null;
  if (null != timestamp) {
    const _Math3 = Math;
    const _Date3 = Date;
    rounded2 = Math.floor((Date.now() - tmp7) / 1000);
  }
  obj.approx_seconds_since_last_role_mention = rounded2;
  let rounded3 = null;
  if (null != timestamp) {
    const _Math4 = Math;
    const _Date4 = Date;
    rounded3 = Math.floor((Date.now() - tmp10) / 1000);
  }
  obj.approx_seconds_since_last_everyone_mention = rounded3;
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
  obj.approx_seconds_since_last_guild_notification = tmp13;
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
  obj.approx_seconds_since_last_guild_mention = tmp18;
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
  obj.approx_seconds_since_last_guild_role_mention = tmp23;
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
  obj.approx_seconds_since_last_guild_everyone_mention = tmp28;
  return obj;
};
const lastMentionTimestampStore = new LastMentionTimestampStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let tmp4 = null != timestamp;
    if (tmp4) {
      const _Date = Date;
      tmp4 = Date.now() - tmp3 < 60000;
    }
    if (!tmp4) {
      timestamp = null;
    }
    let tmp7 = null != timestamp;
    if (tmp7) {
      const _Date2 = Date;
      tmp7 = Date.now() - tmp6 < 60000;
    }
    if (!tmp7) {
      timestamp = null;
    }
    let tmp10 = null != timestamp;
    if (tmp10) {
      const _Date3 = Date;
      tmp10 = Date.now() - tmp9 < 60000;
    }
    if (!tmp10) {
      timestamp = null;
    }
    let tmp13 = null != timestamp;
    if (tmp13) {
      const _Date4 = Date;
      tmp13 = Date.now() - tmp12 < 60000;
    }
    if (!tmp13) {
      timestamp = null;
    }
    for (const key10037 in closure_9) {
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
    timestamp = Date.now();
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/LastMentionTimestampStore.tsx");

export default lastMentionTimestampStore;
export const trackMessageNotificationTimestamps = function trackMessageNotificationTimestamps(mentions, guildId) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const result = UserGuildSettingsStore.isSuppressEveryoneEnabled(guildId);
  let someResult = null != mentions.mentions;
  const result1 = UserGuildSettingsStore.isSuppressRolesEnabled(guildId);
  if (someResult) {
    mentions = mentions.mentions;
    someResult = mentions.some((id) => id.id === id);
  }
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = GuildMemberStore.getMember(guildId, id);
    }
  }
  let someResult1 = null != mentions.mention_roles && null != member && null != member.roles;
  if (someResult1) {
    const mention_roles = mentions.mention_roles;
    someResult1 = mention_roles.some((item) => {
      const roles = member.roles;
      return roles.includes(item);
    });
  }
  const obj = { type: "MESSAGE_NOTIFICATION_SHOWN", guildId, mentioned: someResult, roleMentioned: null, everyoneMentioned: null };
  if (someResult1) {
    someResult1 = !result1;
  }
  obj.roleMentioned = someResult1;
  obj.everyoneMentioned = true === mentions.mention_everyone && !result;
  obj.dispatch(obj);
};