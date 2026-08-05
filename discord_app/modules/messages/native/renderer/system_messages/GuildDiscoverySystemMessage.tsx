// discord_app/modules/messages/native/renderer/system_messages/GuildDiscoverySystemMessage.tsx
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildDiscoverySystemMessage.tsx");

export const createGuildDiscoveryDisqualifiedSystemMessage = function createGuildDiscoveryDisqualifiedSystemMessage(message) {
  const obj = { content: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.NxS3hY);
  const merged = Object.assign(require("createCommonMessage.tsx")(message));
  return obj;
};
export const createGuildDiscoveryRequalifiedSystemMessage = function createGuildDiscoveryRequalifiedSystemMessage(message) {
  const obj = { content: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.tu6tOR);
  const merged = Object.assign(require("createCommonMessage.tsx")(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodInitialWarningSystemMessage = function createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message) {
  const obj = { content: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.BoiiWz);
  const merged = Object.assign(require("createCommonMessage.tsx")(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodFinalWarningSystemMessage = function createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message) {
  const obj = { content: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.ED4mGc);
  const merged = Object.assign(require("createCommonMessage.tsx")(message));
  return obj;
};