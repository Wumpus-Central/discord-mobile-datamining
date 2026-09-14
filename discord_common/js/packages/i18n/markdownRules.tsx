// === Module 17390: markdownRules ===

// Module 17390 (markdownRules)
import t_mod from "module_4333" /* 4333 */;
import size from "module_2" /* 2 */;

const link = t.defaultRules.link;
const text = t.defaultRules.text;
const obj = { newline: t.defaultRules.newline, paragraph: t.defaultRules.paragraph, url: t.defaultRules.url, link: null, strong: null, u: null, br: null, em: null, image: null, hook: null, noparse: null, text: null };
const obj2 = {};
const merged = Object.assign(link);
obj2.parse = function parse(arg0, arg1, context) {
  const parsed = link.parse(arg0, arg1, context);
  parsed.context = context.context;
  return parsed;
};
obj.link = obj2;
obj.strong = t.defaultRules.strong;
obj.u = t.defaultRules.u;
obj.br = t.defaultRules.br;
obj.em = t.defaultRules.em;
obj.image = t.defaultRules.image;
const obj3 = { order: text.order, match: null, parse: null, react: null };
let t = t_mod;
obj3.match = t.inlineRegex(/^\$\[(.*?)\]\((\w+)\)/);
obj3.parse = function parse(arg0, fn, render) {
  return { render: render.context[arg0[2]], content: fn(arg0[1], render) };
};
obj3.react = function react(render, fn, key) {
  return render.render(fn(render.content, key), key.key);
};
obj.hook = obj3;
const obj4 = { order: text.order, match: null, parse: null, react: null };
let t = t_mod;
obj4.match = t.inlineRegex(/^!!(\d+?)!!/);
obj4.parse = function parse(arg0, arg1, arg2) {
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
obj4.react = function react(content) {
  return content.content;
};
obj.noparse = obj4;
obj.text = text;
const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/markdownRules.tsx");

export const rules = obj;