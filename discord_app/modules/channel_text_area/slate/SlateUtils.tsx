// === Module 7686: SlateUtils ===

// Module 7686 (SlateUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_text_area/slate/SlateUtils.tsx");

export function createEmptyState() {
  const obj = { textValue: "", richValue: null };
  const element = { type: "line", children: null };
  const items = [{ text: "" }];
  element.children = items;
  const items1 = [element];
  obj.richValue = items1;
  return obj;
}
export const createState = function createState(textValue) {
  const obj = { textValue, richValue: null };
  const parts = textValue.split("\n");
  obj.richValue = parts.map((text) => {
    const element = { type: "line", children: null };
    const items = [{ text }];
    element.children = items;
    return element;
  });
  return obj;
};
export const toRichValue = function toRichValue(content) {
  const parts = content.split("\n");
  return parts.map((text) => {
    const element = { type: "line", children: null };
    const items = [{ text }];
    element.children = items;
    return element;
  });
};
export const voidToOptionValue = function voidToOptionValue(type) {
  type = type.type;
  if ("userMention" === type) {
    let obj = { type: "userMention", userId: type.userId };
    return obj;
  } else if ("channelMention" === type) {
    obj = { type: "channelMention", channelId: type.channelId };
    return obj;
  } else if ("soundboard" === type) {
    ({ guildId: obj5.guildId, soundId: obj5.soundId } = type);
    return { type: "soundboard", guildId: null, soundId: null };
  } else if ("roleMention" === type) {
    const obj2 = { type: "roleMention", roleId: type.roleId };
    return obj2;
  } else if ("textMention" === type) {
    const obj3 = { type: "textMention", text: type.name };
    return obj3;
  } else if ("emoji" === type) {
    const obj4 = { type: "emoji", name: type.emoji.name, surrogate: type.emoji.surrogate };
    return obj4;
  } else if ("customEmoji" === type) {
    obj = { type: "customEmoji", emojiId: type.emoji.emojiId, name: type.emoji.name, animated: type.emoji.animated };
    return obj;
  } else if ("testInlineVoid" === type) {
    const _Error = Error;
    const error = new Error("Unable to convert test types");
    throw error;
  } else {
    return null;
  }
};