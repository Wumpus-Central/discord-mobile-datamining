// discord_app/modules/messages/UnlinkedGamePlayerPlaceholders.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MessageTypes = Constants.MessageTypes;
const re1 = /^Sent a message to .+ but has not yet linked their Discord account\.$/;
const result = size.fileFinishedImporting("modules/messages/UnlinkedGamePlayerPlaceholders.tsx");

export const MAX_NAMED_PLAYERS = 2;
export function isUnlinkedGamePlayerPlaceholder(linkedLobby, items1) {
  let isProvisional = null != linkedLobby.linkedLobby;
  if (isProvisional) {
    isProvisional = items1.type === MessageTypes.DEFAULT;
  }
  if (isProvisional) {
    isProvisional = "1384671873593512078" === items1.applicationId;
  }
  if (isProvisional) {
    let tmp2 = null == items1.additionalName;
    if (!tmp2) {
      tmp2 = "" === items1.additionalName;
    }
    isProvisional = tmp2;
  }
  if (isProvisional) {
    isProvisional = items1.author.isProvisional;
  }
  if (isProvisional) {
    isProvisional = 0 === items1.attachments.length;
  }
  if (isProvisional) {
    isProvisional = 0 === items1.embeds.length;
  }
  if (isProvisional) {
    isProvisional = re1.test(items1.content);
  }
  return isProvisional;
}
export function getFirstMessagePerAuthor(unlinkedGamePlayerPlaceholders) {
  const set = new Set();
  items = [];
  const iter = unlinkedGamePlayerPlaceholders[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (!set.has(nextResult.author.id)) {
      let addResult = set.add(tmp2.author.id);
      let arr = items.push(tmp2);
    }
    continue;
  }
  return items;
}
