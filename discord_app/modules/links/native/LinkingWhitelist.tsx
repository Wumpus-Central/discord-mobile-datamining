// === Module 4095: LINKING_WHITELIST ===

// Module 4095 (LINKING_WHITELIST)
import set from "set" /* 2 */;

obj = { discordConnect: obj, facebook: obj, instagram: obj1, snapchat: obj2, spotify: obj3, tiktok: obj4, twitch: obj5, telegram: obj6, twitter: obj7, whatsapp: obj8, youtube: obj9, zoom: obj10 };
obj = { regex: /(?:^discordconnect:\/\/)/i, protocol: "discordconnect://" };
obj = { regex: /(?:^https?:\/\/)(?:www\.)?(facebook\.com)(?:$|\/)/i, protocol: "fb://" };
const values = Object.values(obj);
const result = set.fileFinishedImporting("modules/links/native/LinkingWhitelist.tsx");

export const LINKING_WHITELIST = obj;
export const LINKING_WHITELIST_VALUES = values;