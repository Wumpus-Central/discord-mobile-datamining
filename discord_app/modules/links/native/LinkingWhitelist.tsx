// === Module 4256: LinkingWhitelist ===

// Module 4256 (LinkingWhitelist)
import size from "module_2" /* 2 */;

const obj = { discordConnect: { regex: /(?:^discordconnect:\/\/)/i, protocol: "discordconnect://" }, facebook: { regex: /(?:^https?:\/\/)(?:www\.)?(facebook\.com)(?:$|\/)/i, protocol: "fb://" }, instagram: { regex: /(?:^https?:\/\/)(?:www\.)?(instagram\.com|instagr\.am)(?:$|\/)/i, protocol: "instagram://" }, snapchat: { regex: /(?:^https?:\/\/)(?:www\.)?(snapchat\.com)(?:$|\/)/i, protocol: "snapchat://" }, spotify: { regex: /(?:^https?:\/\/)(?:open\.)?(spotify\.com)(?:$|\/)/i, protocol: "https://open.spotify.com" }, tiktok: { regex: /(?:^https?:\/\/)(?:www\.)?(tiktok\.com)(?:$|\/)/i, protocol: "tiktok://" }, twitch: { regex: /(?:^https?:\/\/)(?:www\.)?(twitch\.tv)(?:$|\/)/i, protocol: "twitch://" }, telegram: { regex: /(?:^https?:\/\/)(?:www\.)?(t\.me)(?:$|\/)/i, protocol: "tg://" }, twitter: { regex: /(?:^https?:\/\/)(?:www\.)?(?:twitter\.com|x\.com)(?:$|\/)/i, protocol: "twitter://" }, whatsapp: { regex: /(?:^https?:\/\/)(?:www\.)?(whatsapp\.com)(?:$|\/)/i, protocol: "whatsapp://" }, youtube: { regex: /(?:^https?:\/\/)(?:www\.)?(youtube\.com|youtu\.be)(?:$|\/)/i, protocol: "youtube://" }, zoom: { regex: /(?:^https?:\/\/)(?:www\.)?(zoom\.us)(?:$|\/)/i, protocol: "zoomus://" } };
const values = Object.values(obj);
const result = size.fileFinishedImporting("modules/links/native/LinkingWhitelist.tsx");

export const LINKING_WHITELIST = obj;
export const LINKING_WHITELIST_VALUES = values;