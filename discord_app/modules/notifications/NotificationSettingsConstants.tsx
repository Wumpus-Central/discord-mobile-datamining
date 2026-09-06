// discord_app/modules/notifications/NotificationSettingsConstants.tsx
import _modDef2722 from "NotificationSettings.messages.js";
import NotifSettings from "../../../discord_common/js/shared/shared-constants/NotifSettings.tsx";
import NotifTypes from "../../../discord_common/js/shared/shared-constants/NotifTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { badge: true, visibility: "popup", vibrate: true, sound: true };
obj = { badge: true, visibility: "default", vibrate: true, sound: true };
obj = { badge: true, visibility: "default", vibrate: false, sound: false };
const items = [{ title: _modDef2722.S5cB9e, string_id: "111_realtime" }, , ,];
const obj1 = { title: _modDef2722.S5cB9e, string_id: "111_realtime" };
items[1] = { title: _modDef2722["UzRF+8"], string_id: "222_social" };
const obj2 = { title: _modDef2722["UzRF+8"], string_id: "222_social" };
items[2] = { title: _modDef2722.zRKbpz, string_id: "333_server" };
const obj3 = { title: _modDef2722.zRKbpz, string_id: "333_server" };
items[3] = { title: _modDef2722.q5M7HV, string_id: "444_other" };
const obj4 = { title: _modDef2722.q5M7HV, string_id: "444_other" };
const items1 = [
  {
    title: _modDef2722["IUH/Oe"],
    id: NotifSettings.NotifSettings.CALLS,
    string_id: "calls",
    category: "111_realtime",
    behavior: { badge: false, ringtone: "call_ringing", visibility: "popup", vibrate: true, sound: true },
    systemOnly: true,
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
];
const obj5 = {
  title: _modDef2722["IUH/Oe"],
  id: NotifSettings.NotifSettings.CALLS,
  string_id: "calls",
  category: "111_realtime",
  behavior: { badge: false, ringtone: "call_ringing", visibility: "popup", vibrate: true, sound: true },
  systemOnly: true,
};
items1[1] = {
  title: _modDef2722.VeBD1N,
  id: NotifSettings.NotifSettings.VOICE_CONNECTED,
  string_id: "mediaConnections",
  category: "111_realtime",
  behavior: { badge: false, visibility: "default", vibrate: false, sound: true },
  systemOnly: true,
};
const obj6 = {
  title: _modDef2722.VeBD1N,
  id: NotifSettings.NotifSettings.VOICE_CONNECTED,
  string_id: "mediaConnections",
  category: "111_realtime",
  behavior: { badge: false, visibility: "default", vibrate: false, sound: true },
  systemOnly: true,
};
items1[2] = {
  title: _modDef2722.NGdNZb,
  id: NotifSettings.NotifSettings.DMS,
  string_id: "directMessages",
  category: "222_social",
  behavior: obj,
  systemOnly: true,
};
const obj7 = {
  title: _modDef2722.NGdNZb,
  id: NotifSettings.NotifSettings.DMS,
  string_id: "directMessages",
  category: "222_social",
  behavior: obj,
  systemOnly: true,
};
items1[3] = {
  title: _modDef2722.NxgGZA,
  id: NotifSettings.NotifSettings.FRIEND_REQUESTS,
  string_id: "friendRequests",
  category: "222_social",
  behavior: obj,
  systemOnly: true,
};
const obj8 = {
  title: _modDef2722.NxgGZA,
  id: NotifSettings.NotifSettings.FRIEND_REQUESTS,
  string_id: "friendRequests",
  category: "222_social",
  behavior: obj,
  systemOnly: true,
};
items1[4] = {
  title: _modDef2722.MOjygY,
  id: NotifSettings.NotifSettings.POLLS,
  string_id: "polls",
  category: "222_social",
  behavior: obj,
  systemOnly: true,
};
const obj9 = {
  title: _modDef2722.MOjygY,
  id: NotifSettings.NotifSettings.POLLS,
  string_id: "polls",
  category: "222_social",
  behavior: obj,
  systemOnly: true,
};
items1[5] = {
  title: _modDef2722.wv4QHR,
  id: NotifSettings.NotifSettings.REACTIONS,
  string_id: "reactions",
  category: "222_social",
  behavior: obj,
};
const obj10 = {
  title: _modDef2722.wv4QHR,
  id: NotifSettings.NotifSettings.REACTIONS,
  string_id: "reactions",
  category: "222_social",
  behavior: obj,
};
items1[6] = {
  title: _modDef2722.n0Wp6j,
  id: NotifSettings.NotifSettings.MISSED_MESSAGES_LOW,
  string_id: "missed_messages_low",
  category: "222_social",
  behavior: obj,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [0, 2, 3, 4],
};
const obj11 = {
  title: _modDef2722.n0Wp6j,
  id: NotifSettings.NotifSettings.MISSED_MESSAGES_LOW,
  string_id: "missed_messages_low",
  category: "222_social",
  behavior: obj,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [0, 2, 3, 4],
};
items1[7] = {
  title: _modDef2722.n0Wp6j,
  id: NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT,
  string_id: "missed_messages_default",
  category: "222_social",
  behavior: obj,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [1, 5],
};
const obj12 = {
  title: _modDef2722.n0Wp6j,
  id: NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT,
  string_id: "missed_messages_default",
  category: "222_social",
  behavior: obj,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [1, 5],
};
items1[8] = {
  title: _modDef2722.Iy9grw,
  id: NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW,
  string_id: "voice_activity_low",
  category: "222_social",
  behavior: obj,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [0, 1, 3, 4],
};
const obj13 = {
  title: _modDef2722.Iy9grw,
  id: NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW,
  string_id: "voice_activity_low",
  category: "222_social",
  behavior: obj,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [0, 1, 3, 4],
};
items1[9] = {
  title: _modDef2722.Iy9grw,
  id: NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT,
  string_id: "voice_activity_default",
  category: "222_social",
  behavior: obj,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [2, 5],
};
const obj14 = {
  title: _modDef2722.Iy9grw,
  id: NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT,
  string_id: "voice_activity_default",
  category: "222_social",
  behavior: obj,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [2, 5],
};
items1[10] = {
  title: _modDef2722["9EDo+/"],
  id: NotifSettings.NotifSettings.GAMING_LOW,
  string_id: "gaming_low",
  category: "222_social",
  behavior: obj,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [0, 1, 2, 4],
};
const obj15 = {
  title: _modDef2722["9EDo+/"],
  id: NotifSettings.NotifSettings.GAMING_LOW,
  string_id: "gaming_low",
  category: "222_social",
  behavior: obj,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [0, 1, 2, 4],
};
items1[11] = {
  title: _modDef2722["9EDo+/"],
  id: NotifSettings.NotifSettings.GAMING_DEFAULT,
  string_id: "gaming_default",
  category: "222_social",
  behavior: obj,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [3, 5],
};
const obj16 = {
  title: _modDef2722["9EDo+/"],
  id: NotifSettings.NotifSettings.GAMING_DEFAULT,
  string_id: "gaming_default",
  category: "222_social",
  behavior: obj,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [3, 5],
};
items1[12] = {
  title: _modDef2722.vcrTV5,
  id: NotifSettings.NotifSettings.FRIEND_ACTIVITY_LOW,
  string_id: "social",
  category: "222_social",
  behavior: obj,
  systemOnly: true,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [0, 1, 2, 3],
};
const obj17 = {
  title: _modDef2722.vcrTV5,
  id: NotifSettings.NotifSettings.FRIEND_ACTIVITY_LOW,
  string_id: "social",
  category: "222_social",
  behavior: obj,
  systemOnly: true,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [0, 1, 2, 3],
};
items1[13] = {
  title: _modDef2722.vcrTV5,
  id: NotifSettings.NotifSettings.FRIEND_ACTIVITY_DEFAULT,
  string_id: "social",
  category: "222_social",
  behavior: obj,
  systemOnly: true,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [4, 5],
};
const obj18 = {
  title: _modDef2722.vcrTV5,
  id: NotifSettings.NotifSettings.FRIEND_ACTIVITY_DEFAULT,
  string_id: "social",
  category: "222_social",
  behavior: obj,
  systemOnly: true,
  experiment: "2026-05-noisier-notif-settings-defaults",
  variations: [4, 5],
};
items1[14] = {
  title: _modDef2722["4qWUAO"],
  id: NotifSettings.NotifSettings.GUILD_MESSAGES,
  string_id: "messages",
  category: "333_server",
  behavior: obj,
  systemOnly: true,
};
const obj19 = {
  title: _modDef2722["4qWUAO"],
  id: NotifSettings.NotifSettings.GUILD_MESSAGES,
  string_id: "messages",
  category: "333_server",
  behavior: obj,
  systemOnly: true,
};
items1[15] = {
  title: _modDef2722.HibKoy,
  id: NotifSettings.NotifSettings.FORUM_NOTIFICATIONS,
  string_id: "forumThreadCreated",
  category: "333_server",
  behavior: obj,
  systemOnly: true,
};
const obj20 = {
  title: _modDef2722.HibKoy,
  id: NotifSettings.NotifSettings.FORUM_NOTIFICATIONS,
  string_id: "forumThreadCreated",
  category: "333_server",
  behavior: obj,
  systemOnly: true,
};
items1[16] = {
  title: _modDef2722["40TIqW"],
  id: NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS,
  string_id: "guildEventLive",
  category: "333_server",
  behavior: obj,
  systemOnly: true,
};
const obj21 = {
  title: _modDef2722["40TIqW"],
  id: NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS,
  string_id: "guildEventLive",
  category: "333_server",
  behavior: obj,
  systemOnly: true,
};
items1[17] = {
  title: _modDef2722["4n388K"],
  id: NotifSettings.NotifSettings.STAGE_NOTIFICATIONS,
  string_id: "stageLive",
  category: "333_server",
  behavior: obj,
  systemOnly: true,
};
const obj22 = {
  title: _modDef2722["4n388K"],
  id: NotifSettings.NotifSettings.STAGE_NOTIFICATIONS,
  string_id: "stageLive",
  category: "333_server",
  behavior: obj,
  systemOnly: true,
};
items1[18] = {
  title: _modDef2722.kIrLfg,
  id: NotifSettings.NotifSettings.OTHER_GUILD,
  string_id: "other",
  category: "333_server",
  behavior: obj,
  systemOnly: true,
};
const obj23 = {
  title: _modDef2722.kIrLfg,
  id: NotifSettings.NotifSettings.OTHER_GUILD,
  string_id: "other",
  category: "333_server",
  behavior: obj,
  systemOnly: true,
};
items1[19] = {
  title: _modDef2722["T+79Eo"],
  id: NotifSettings.NotifSettings.OTHER,
  string_id: "default",
  category: "444_other",
  behavior: obj,
  systemOnly: true,
};
const obj24 = {
  title: _modDef2722["T+79Eo"],
  id: NotifSettings.NotifSettings.OTHER,
  string_id: "default",
  category: "444_other",
  behavior: obj,
  systemOnly: true,
};
items1[20] = {
  title: _modDef2722.zJlwvV,
  id: NotifSettings.NotifSettings.SYSTEM,
  string_id: "systemMessages",
  category: "444_other",
  behavior: obj,
  systemOnly: true,
};
const obj26 = {};
const items2 = [NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT];
obj26[NotifTypes.NotifTypes.GUILD_STREAM_START] = items2;
const items3 = [NotifSettings.NotifSettings.STAGE_NOTIFICATIONS];
obj26[NotifTypes.NotifTypes.STAGE_INSTANCE_CREATE] = items3;
const items4 = [NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT];
obj26[NotifTypes.NotifTypes.GO_LIVE_NOTIFICATION] = items4;
const items5 = [NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT];
obj26[NotifTypes.NotifTypes.VOICE_CHANNEL_ACTIVITY] = items5;
const items6 = [NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT];
obj26[NotifTypes.NotifTypes.VOICE_CHANNEL_ACTIVITY_PEAK_AFFINITY] = items6;
const items7 = [NotifSettings.NotifSettings.MISSED_MESSAGES_LOW, NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT];
obj26[NotifTypes.NotifTypes.MISSED_MESSAGE_PUSH] = items7;
const items8 = [NotifSettings.NotifSettings.GAMING_LOW, NotifSettings.NotifSettings.GAMING_DEFAULT];
obj26[NotifTypes.NotifTypes.FRIEND_GAMING_ACTIVITY_PUSH] = items8;
const items9 = [NotifSettings.NotifSettings.GAMING_LOW, NotifSettings.NotifSettings.GAMING_DEFAULT];
obj26[NotifTypes.NotifTypes.FRIENDS_PLAYING_GAME] = items9;
const items10 = [NotifSettings.NotifSettings.GAMING_LOW, NotifSettings.NotifSettings.GAMING_DEFAULT];
obj26[NotifTypes.NotifTypes.FRIENDS_PLAYING_TRENDING_GAME] = items10;
const items11 = [NotifSettings.NotifSettings.SYSTEM];
obj26[NotifTypes.NotifTypes.PARENTAL_CONSENT_FINAL_WARNING] = items11;
const items12 = [NotifSettings.NotifSettings.FRIEND_ACTIVITY_LOW, NotifSettings.NotifSettings.FRIEND_ACTIVITY_DEFAULT];
obj26[NotifTypes.NotifTypes.CUSTOM_STATUS_UPDATE] = items12;
const items13 = [NotifSettings.NotifSettings.FRIEND_ACTIVITY_LOW, NotifSettings.NotifSettings.FRIEND_ACTIVITY_DEFAULT];
obj26[NotifTypes.NotifTypes.PROFILE_UPDATES_NOTIFICATION] = items13;
const result = size.fileFinishedImporting("modules/notifications/NotificationSettingsConstants.tsx");

export const NOTIF_CATEGORIES = items;
export const NOTIF_SETTINGS = items1;
export const NOTIF_SETTING_MAPPING = obj26;
