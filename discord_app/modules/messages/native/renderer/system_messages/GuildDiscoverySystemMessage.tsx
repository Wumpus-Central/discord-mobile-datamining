// discord_app/modules/messages/native/renderer/system_messages/GuildDiscoverySystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GuildDiscoverySystemMessage.tsx",
);

export const createGuildDiscoveryDisqualifiedSystemMessage = function createGuildDiscoveryDisqualifiedSystemMessage(
  message,
) {
  const obj = { content: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.NxS3hY);
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
export const createGuildDiscoveryRequalifiedSystemMessage = function createGuildDiscoveryRequalifiedSystemMessage(
  message,
) {
  const obj = { content: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.tu6tOR);
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodInitialWarningSystemMessage =
  function createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message) {
    const obj = { content: null };
    const intl = util.intl;
    obj.content = intl.string(util.t.BoiiWz);
    const merged = Object.assign(createCommonMessageDefault(message));
    return obj;
  };
export const createGuildDiscoveryGracePeriodFinalWarningSystemMessage =
  function createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message) {
    const obj = { content: null };
    const intl = util.intl;
    obj.content = intl.string(util.t.ED4mGc);
    const merged = Object.assign(createCommonMessageDefault(message));
    return obj;
  };
