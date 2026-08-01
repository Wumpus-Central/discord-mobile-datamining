// === Module 16117: link ===

// Module 16117 (link)
import t from "t";
import t from "t";

const link = require("t").defaultRules.link;
const text = require("t").defaultRules.text;
let obj = { newline: require("t").defaultRules.newline, paragraph: require("t").defaultRules.paragraph, url: require("t").defaultRules.url, link: null, strong: null, u: null, br: null, em: null, image: null, hook: null, noparse: null, text: null };
obj = {};
const merged = Object.assign(link);
obj.parse = function parse(arg0, arg1, context) {
  const parsed = link.parse(arg0, arg1, context);
  parsed.context = context.context;
  return parsed;
};
obj[3] = obj;
obj[4] = require("t").defaultRules.strong;
obj[5] = require("t").defaultRules.u;
obj[6] = require("t").defaultRules.br;
obj[7] = require("t").defaultRules.em;
obj[8] = require("t").defaultRules.image;
obj = { order: text.order, match: null, parse: null, react: null };
obj[1] = t.inlineRegex(/^\$\[(.*?)\]\((\w+)\)/);
obj[2] = function parse(arg0, arg1, render) {
  return { render: render.context[arg0[2]], content: arg1(arg0[1], render) };
};
obj[3] = function react(render, arg1, key) {
  return render.render(arg1(render.content, key), key.key);
};
obj[9] = obj;
const obj1 = { order: text.order, match: null, parse: null, react: null };
obj1[1] = t.inlineRegex(/^!!(\d+?)!!/);
obj1[2] = function parse(arg0, arg1, arg2) {
  let content = str;
  if (typeof arg2.unsafeContext[arg0[1]] !== "y") {
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
const result = require("set").fileFinishedImporting("../discord_common/js/packages/i18n/markdownRules.tsx");

export const rules = obj;