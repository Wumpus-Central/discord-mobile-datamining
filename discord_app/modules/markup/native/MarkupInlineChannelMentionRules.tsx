// === Module 10147: inlineChannelMentionReact ===

// Module 10147 (inlineChannelMentionReact)
import noopAll from "noop" /* 19 */;
import { jsxs } from "jsxProd" /* 21 */;

let c0 = arg1;
noopAll;
c0 = "\u{1F4AC}";
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupInlineChannelMentionRules.tsx");

export const inlineChannelMentionReact = function inlineChannelMentionReact(inContent, output, key) {
  if (null == inContent.inContent) {
    let smartOutputResult = u1F4AC(7951).smartOutput(inContent, output, key);
    const obj3 = u1F4AC(7951);
  } else {
    const obj = { children: null };
    const items = [output(inContent.inContent, key), " \u203A ", u1F4AC(7951).smartOutput(inContent, output, key)];
    obj[0] = items;
    smartOutputResult = jsxs(u1F4AC(1297).LegacyText, { children: null }, key.key);
    const obj2 = u1F4AC(7951);
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
    const items = [str, str(closure_1_1[2]).smartOutput(tmp2, output, key), undefined];
    obj[0] = items;
    closure_1_2(str(closure_1_1[3]).LegacyText, obj, key.key);
  };
}
export const inlineChannelReact = (arg0, output, key) => {
  const obj = { children: null };
  const items = [str, str(closure_1_1[2]).smartOutput(tmp2, output, key), undefined];
  obj[0] = items;
  closure_1_2(str(closure_1_1[3]).LegacyText, obj, key.key);
};