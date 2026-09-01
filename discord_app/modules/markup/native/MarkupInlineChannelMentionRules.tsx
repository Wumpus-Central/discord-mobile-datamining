// discord_app/modules/markup/native/MarkupInlineChannelMentionRules.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import { jsxs } from "../../../../_runtime/react/00021_jsxProd.js";

let c0 = arg1;
noopAll;
c0 = "\u{1F4AC}";
const result = require("set").fileFinishedImporting("modules/markup/native/MarkupInlineChannelMentionRules.tsx");

export const inlineChannelMentionReact = function inlineChannelMentionReact(inContent, output, key) {
  if (null == inContent.inContent) {
    let smartOutputResult = u1F4AC(8005).smartOutput(inContent, output, key);
    const obj3 = u1F4AC(8005);
  } else {
    const obj = { children: null };
    const items = [output(inContent.inContent, key), " \u203A ", u1F4AC(8005).smartOutput(inContent, output, key)];
    obj[0] = items;
    smartOutputResult = jsxs(u1F4AC(1297).LegacyText, { children: null }, key.key);
    const obj2 = u1F4AC(8005);
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
