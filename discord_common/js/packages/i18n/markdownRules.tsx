// discord_common/js/packages/i18n/markdownRules.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import t from "../../../../_runtime/04092_t.js";

const link = t.defaultRules.link;
const text = t.defaultRules.text;
let obj = {};
const merged = Object.assign(link);
obj.parse = function parse(arg0, arg1, context) {
  const parsed = link.parse(arg0, arg1, context);
  parsed.context = context.context;
  return parsed;
};
obj[3] = obj;
obj[4] = t.defaultRules.strong;
obj[5] = t.defaultRules.u;
obj[6] = t.defaultRules.br;
obj[7] = t.defaultRules.em;
obj[8] = t.defaultRules.image;
obj = { order: text.order, match: null, parse: null, react: null };
obj[1] = t.inlineRegex(/^\$\[(.*?)\]\((\w+)\)/);
obj[2] = function parse(arg0, fn, render) {
  return { render: render.context[arg0[2]], content: fn(arg0[1], render) };
};
obj[3] = function react(render, fn, key) {
  return render.render(fn(render.content, key), key.key);
};
obj[9] = obj;
const obj1 = { order: text.order, match: null, parse: null, react: null };
obj1[1] = t.inlineRegex(/^!!(\d+?)!!/);
obj1[2] = function parse(arg0, arg1, arg2) {
  let content = str;
  if (typeof arg2.unsafeContext[arg0[1]] !== "string") {
    let str2 = "";
    if (null != str) {
      str2 = str.toString();
    }
    content = str2;
  }
  return { type: "text", content };
};
obj1[3] = function react(content) {
  return content.content;
};
obj[10] = obj1;
obj[11] = text;
const result = obj132.fileFinishedImporting("../discord_common/js/packages/i18n/markdownRules.tsx");

export const rules = obj;