// === Module 6617: LastMentionTimestampStore ===

// Module 6617 (LastMentionTimestampStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5077 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let timestamp = null;
const React4 = {};
const authStore = {};
const unpackModuleId = {};
let closure_12 = {};
const Store = get_initializedDefault.Store;
class LastMentionTimestampStore extends Store {
  initialize() {
    this.waitFor(GuildMemberStore, UserGuildSettingsStore, UserStore);
  }
  getGlobalStats() {
    let rounded1;
    let rounded2;
    let rounded3;
    let rounded = null;
    if (null != timestamp) {
      const _Math = Math;
      const _Date = Date;
      rounded = Math.floor((Date.now() - tmp) / 1000);
    }
    const obj = { approx_seconds_since_last_notification: rounded, approx_seconds_since_last_mention: rounded1, approx_seconds_since_last_role_mention: rounded2, approx_seconds_since_last_everyone_mention: rounded3 };
    rounded1 = null;
    if (null != timestamp) {
      const _Math2 = Math;
      const _Date2 = Date;
      rounded1 = Math.floor((Date.now() - tmp4) / 1000);
    }
    rounded2 = null;
    if (null != timestamp) {
      const _Math3 = Math;
      const _Date3 = Date;
      rounded2 = Math.floor((Date.now() - tmp7) / 1000);
    }
    rounded3 = null;
    if (null != timestamp) {
      const _Math4 = Math;
      const _Date4 = Date;
      rounded3 = Math.floor((Date.now() - tmp10) / 1000);
    }
    return obj;
  }
  getStats(arg0) {
    let rounded1;
    let rounded2;
    let rounded3;
    let tmp13;
    let tmp18;
    let tmp23;
    let tmp28;
    let rounded = null;
    if (null != timestamp) {
      const _Math = Math;
      const _Date = Date;
      rounded = Math.floor((Date.now() - tmp) / 1000);
    }
    const obj = { approx_seconds_since_last_notification: rounded, approx_seconds_since_last_mention: rounded1, approx_seconds_since_last_role_mention: rounded2, approx_seconds_since_last_everyone_mention: rounded3, approx_seconds_since_last_guild_notification: tmp13, approx_seconds_since_last_guild_mention: tmp18, approx_seconds_since_last_guild_role_mention: tmp23, approx_seconds_since_last_guild_everyone_mention: tmp28 };
    rounded1 = null;
    if (null != timestamp) {
      const _Math2 = Math;
      const _Date2 = Date;
      rounded1 = Math.floor((Date.now() - tmp4) / 1000);
    }
    rounded2 = null;
    if (null != timestamp) {
      const _Math3 = Math;
      const _Date3 = Date;
      rounded2 = Math.floor((Date.now() - tmp7) / 1000);
    }
    rounded3 = null;
    if (null != timestamp) {
      const _Math4 = Math;
      const _Date4 = Date;
      rounded3 = Math.floor((Date.now() - tmp10) / 1000);
    }
    tmp13 = null;
    if (null != arg0) {
      let rounded4 = null;
      if (null != closure_9[arg0]) {
        const _Math5 = Math;
        const _Date5 = Date;
        rounded4 = Math.floor((Date.now() - tmp15) / 1000);
      }
      tmp13 = rounded4;
    }
    tmp18 = null;
    if (null != arg0) {
      let rounded5 = null;
      if (null != closure_10[arg0]) {
        const _Math6 = Math;
        const _Date6 = Date;
        rounded5 = Math.floor((Date.now() - tmp20) / 1000);
      }
      tmp18 = rounded5;
    }
    tmp23 = null;
    if (null != arg0) {
      let rounded6 = null;
      if (null != closure_12[arg0]) {
        const _Math7 = Math;
        const _Date7 = Date;
        rounded6 = Math.floor((Date.now() - tmp25) / 1000);
      }
      tmp23 = rounded6;
    }
    tmp28 = null;
    if (null != arg0) {
      let rounded7 = null;
      if (null != closure_11[arg0]) {
        const _Math8 = Math;
        const _Date8 = Date;
        rounded7 = Math.floor((Date.now() - tmp30) / 1000);
      }
      tmp28 = rounded7;
    }
    return obj;
  }
}
const prototype = LastMentionTimestampStore.prototype;
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let tmp2 = null != timestamp;
    if (tmp2) {
      const _Date = Date;
      tmp2 = Date.now() - tmp < 60000;
    }
    if (!tmp2) {
      timestamp = null;
    }
    let tmp5 = null != timestamp;
    if (tmp5) {
      const _Date2 = Date;
      tmp5 = Date.now() - tmp4 < 60000;
    }
    if (!tmp5) {
      timestamp = null;
    }
    let tmp8 = null != timestamp;
    if (tmp8) {
      const _Date3 = Date;
      tmp8 = Date.now() - tmp7 < 60000;
    }
    if (!tmp8) {
      timestamp = null;
    }
    let tmp11 = null != timestamp;
    if (tmp11) {
      const _Date4 = Date;
      tmp11 = Date.now() - tmp10 < 60000;
    }
    if (!tmp11) {
      timestamp = null;
    }
    for (const key10037 in closure_9) {
      let tmp19 = closure_9[key10037];
      let tmp13 = null != tmp19;
      if (tmp13) {
        let _Date5 = Date;
        tmp13 = Date.now() - tmp19 < 60000;
      }
      if (tmp13) {
        continue;
      } else {
        delete closure_9[key10037];
        continue;
      }
      continue;
    }
    for (const key10045 in closure_10) {
      let tmp22 = closure_10[key10045];
      let tmp14 = null != tmp22;
      if (tmp14) {
        let _Date6 = Date;
        tmp14 = Date.now() - tmp22 < 60000;
      }
      if (tmp14) {
        continue;
      } else {
        delete closure_10[key10045];
        continue;
      }
      continue;
    }
    for (const key10053 in closure_12) {
      let tmp25 = closure_12[key10053];
      let tmp15 = null != tmp25;
      if (tmp15) {
        let _Date7 = Date;
        tmp15 = Date.now() - tmp25 < 60000;
      }
      if (tmp15) {
        continue;
      } else {
        delete closure_12[key10053];
        continue;
      }
      continue;
    }
    for (const key10061 in closure_11) {
      let tmp28 = closure_11[key10061];
      let tmp16 = null != tmp28;
      if (tmp16) {
        let _Date8 = Date;
        tmp16 = Date.now() - tmp28 < 60000;
      }
      if (tmp16) {
        continue;
      } else {
        delete closure_11[key10061];
        continue;
      }
      continue;
    }
  },
  MESSAGE_NOTIFICATION_SHOWN: function handleMessageNotificationShown(guildId) {
    let everyoneMentioned;
    let mentioned;
    let roleMentioned;
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
};
const lastMentionTimestampStore = new LastMentionTimestampStore(DispatcherDefault, obj);
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
  const obj = { type: "MESSAGE_NOTIFICATION_SHOWN", guildId, mentioned: someResult, roleMentioned: someResult1, everyoneMentioned: true === mentions.mention_everyone && !result };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  if (someResult1) {
    someResult1 = !result1;
  }
  dispatch(obj);
};