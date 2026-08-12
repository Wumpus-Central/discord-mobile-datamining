// discord_app/modules/markup/native/MarkupInlineChannelMentionRules.tsx
import "noop";
import { jsxs } from "jsxProd";

let c0 = arg1;
c0 = "\u{1F4AC}";
const result = require("smartOutput").fileFinishedImporting("modules/markup/native/MarkupInlineChannelMentionRules.tsx");

export const inlineChannelMentionReact = function inlineChannelMentionReact(inContent, output, key) {
  if (null == inContent.inContent) {
    let smartOutputResult = u1F4AC(8237).smartOutput(inContent, output, key);
    const obj3 = u1F4AC(8237);
  } else {
    const obj = { children: null };
    const items = [output(inContent.inContent, key), " \u203A ", u1F4AC(8237).smartOutput(inContent, output, key)];
    obj[0] = items;
    smartOutputResult = jsxs(u1F4AC(1297).LegacyText, { children: null }, key.key);
    const obj2 = u1F4AC(8237);
  }
  return smartOutputResult;
};
export function createInlineChannelReact(arg0) {
  let str = arg0;
  if (arg0 === undefined) {
    str = "\u{1F4AC}";
  }
  return (arg0, output, key) => {
    const obj = { children: null };
    const items = [str, str(outer1_1[2]).smartOutput(tmp2, output, key), undefined];
    obj[0] = items;
    outer1_2(str(outer1_1[3]).LegacyText, obj, key.key);
  };
}
export const inlineChannelReact = (arg0, output, key) => {
  const obj = { children: null };
  const items = [str, str(outer1_1[2]).smartOutput(tmp2, output, key), undefined];
  obj[0] = items;
  outer1_2(str(outer1_1[3]).LegacyText, obj, key.key);
};