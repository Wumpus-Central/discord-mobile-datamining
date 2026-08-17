// discord_app/modules/channel_text_area/slate/SlateUtils.tsx
import set from "set" /* 2 */;

let obj = { type: "line", children: null };
let items = [Object.freeze({ text: "" })];
obj[1] = Object.freeze(items);
const items1 = [Object.freeze(obj)];
let closure_0 = Object.freeze(items1);
const result = set.fileFinishedImporting("modules/channel_text_area/slate/SlateUtils.tsx");

export function createEmptyState() {
  const items = [{ text: "" }];
  const richValue = [{ type: "line", children: items }];
  return { textValue: "", richValue };
}
export const createState = function createState(textValue) {
  const obj = { textValue, richValue: null };
  if ("" !== textValue) {
    const parts = textValue.split("\n");
    let mapped = parts.map((text) => {
      const children = [{ text }];
      return { type: "line", children };
    });
  } else {
    mapped = closure_0;
  }
  obj[1] = mapped;
  return obj;
};
export const toRichValue = function toRichValue(content) {
  if ("" !== content) {
    const parts = content.split("\n");
    let mapped = parts.map((text) => {
      const children = [{ text }];
      return { type: "line", children };
    });
  } else {
    mapped = closure_0;
  }
  return mapped;
};
export const voidToOptionValue = function voidToOptionValue(type) {
  type = type.type;
  if ("userMention" === type) {
    let obj = { type: "userMention", userId: null };
    obj[1] = type.userId;
    return obj;
  } else if ("channelMention" === type) {
    obj = { type: "channelMention", channelId: null };
    obj[1] = type.channelId;
    return obj;
  } else if ("soundboard" === type) {
    ({ guildId: obj5[1], soundId: obj5[2] } = type);
    return { type: "soundboard", guildId: null, soundId: null };
  } else if ("roleMention" === type) {
    const obj2 = { type: "roleMention", roleId: null };
    obj2[1] = type.roleId;
    return obj2;
  } else if ("textMention" === type) {
    const obj3 = { type: "textMention", text: null };
    obj3[1] = type.name;
    return obj3;
  } else if ("emoji" === type) {
    const obj4 = { type: "emoji", name: null, surrogate: null };
    obj4[1] = type.emoji.name;
    obj4[2] = type.emoji.surrogate;
    return obj4;
  } else if ("customEmoji" === type) {
    obj = { type: "customEmoji", emojiId: null, name: null, animated: null };
    obj[1] = type.emoji.emojiId;
    obj[2] = type.emoji.name;
    obj[3] = type.emoji.animated;
    return obj;
  } else if ("testInlineVoid" === type) {
    const _Error = Error;
    error = new Error("Unable to convert test types");
    throw error;
  } else {
    return null;
  }
};