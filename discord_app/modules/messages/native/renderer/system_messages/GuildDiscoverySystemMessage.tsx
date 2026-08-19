// === Module 8227: createGuildDiscoveryDisqualifiedSystemMessage ===

// Module 8227 (createGuildDiscoveryDisqualifiedSystemMessage)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import createCommonMessageDefault from "createCommonMessage" /* 8188 */;

const result = obj132.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildDiscoverySystemMessage.tsx");

export const createGuildDiscoveryDisqualifiedSystemMessage = function createGuildDiscoveryDisqualifiedSystemMessage(message) {
  const obj = { content: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.NxS3hY);
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
export const createGuildDiscoveryRequalifiedSystemMessage = function createGuildDiscoveryRequalifiedSystemMessage(message) {
  const obj = { content: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.tu6tOR);
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodInitialWarningSystemMessage = function createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message) {
  const obj = { content: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.BoiiWz);
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodFinalWarningSystemMessage = function createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message) {
  const obj = { content: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.ED4mGc);
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};