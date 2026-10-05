// discord_app/modules/channel_text_area/slate/SlateUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

const f94448 = (text) => {
  let items;
  const element = { type: "line", children: items };
  items = [];
  const obj = { text };
  items[0] = obj;
  return element;
};
const result = size.fileFinishedImporting("modules/channel_text_area/slate/SlateUtils.tsx");

export function createEmptyState() {
  let items;
  let items1;
  const element = { type: "line", children: items };
  items = [{ text: "" }];
  const obj = { textValue: "", richValue: items1 };
  items1 = [element];
  return obj;
}
export const createState = function createState(textValue) {
  let parts;
  let obj = { textValue, richValue: parts.map(f94448) };
  parts = textValue.split("\n");
  return obj;
};
export const toRichValue = function toRichValue(content) {
  const parts = content.split("\n");
  return parts.map(f94448);
};
export const voidToOptionValue = function voidToOptionValue(type) {
  type = type.type;
  if ("userMention" === type) {
    return { type: "userMention", userId: type.userId };
  } else if ("channelMention" === type) {
    return { type: "channelMention", channelId: type.channelId };
  } else if ("soundboard" === type) {
    const obj4 = { type: "soundboard", guildId: null, soundId: null };
    ({ guildId: obj5.guildId, soundId: obj5.soundId } = type);
    return obj4;
  } else if ("roleMention" === type) {
    return { type: "roleMention", roleId: type.roleId };
  } else if ("textMention" === type) {
    return { type: "textMention", text: type.name };
  } else if ("emoji" === type) {
    return { type: "emoji", name: type.emoji.name, surrogate: type.emoji.surrogate };
  } else if ("customEmoji" === type) {
    return { type: "customEmoji", emojiId: type.emoji.emojiId, name: type.emoji.name, animated: type.emoji.animated };
  } else if ("testInlineVoid" === type) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Unable to convert test types");
    throw error;
  } else {
    return null;
  }
};
