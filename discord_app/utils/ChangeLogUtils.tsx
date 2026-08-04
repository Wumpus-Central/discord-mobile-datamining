const require = arg1;
function defaultRules(uri) {
  let obj = {};
  const merged = Object.assign(_require(8004).baseRules);
  obj = {};
  const merged1 = Object.assign(image);
  if (typeof _require(8004).customRules.image === "function") {
    const customRules = tmp(8004).customRules;
    image = customRules.image(uri);
  } else {
    image = tmp(8004).customRules.image;
  }
  const merged2 = Object.assign(image);
  obj.image = obj;
  obj = {};
  const merged3 = Object.assign(link);
  if (typeof _require(8004).customRules.link === "function") {
    const customRules2 = tmp(8004).customRules;
    link = customRules2.link(uri);
  } else {
    link = tmp(8004).customRules.link;
  }
  const merged4 = Object.assign(link);
  obj.link = obj;
  const merged5 = Object.assign(list);
  if (typeof _require(8004).customRules.list === "function") {
    const customRules3 = tmp(8004).customRules;
    list = customRules3.list(uri);
  } else {
    list = tmp(8004).customRules.list;
  }
  const merged6 = Object.assign(list);
  obj.list = {};
  obj.interpolation = {
    order: importDefault(4724).order,
    match(arg0) {
      return regex.exec(arg0);
    },
    parse(arg0, arg1, arg2) {
      if (null == arg2.interpolations[arg0[1]]) {
        let obj = { type: "text", content: null };
        obj[1] = arg0[0];
      } else {
        obj = { type: "interpolation", renderer: null };
        obj[1] = tmp;
      }
      return obj;
    },
    react(renderer) {
      return renderer.renderer();
    }
  };
  const obj3 = {};
  const merged7 = Object.assign(lheading);
  _require = true;
  obj3.parse = (arg0, arg1, inline) => {
    const match = outer1_10.exec(arg0[1]);
    const str2 = arg0[1].replace(outer1_10, "");
    let formatted = str2;
    if (c0) {
      formatted = str2.toUpperCase();
    }
    let tmp3 = null;
    if (null != match) {
      tmp3 = match[1];
    }
    const obj = { className: tmp3, level: null, content: null };
    let num = 2;
    if ("=" === arg0[2]) {
      num = 1;
    }
    obj[1] = num;
    obj[2] = outer1_1(outer1_2[0]).parseInline(arg1, formatted, inline);
    return obj;
  };
  if (typeof _require(8004).customRules.lheading === "function") {
    const customRules4 = tmp(8004).customRules;
    lheading = customRules4.lheading(uri);
  } else {
    lheading = tmp(8004).customRules.lheading;
  }
  const merged8 = Object.assign(lheading);
  obj.lheading = obj3;
  const merged9 = Object.assign(heading);
  if (typeof _require(8004).customRules.heading === "function") {
    const customRules5 = tmp(8004).customRules;
    heading = customRules5.heading(uri);
  } else {
    heading = tmp(8004).customRules.heading;
  }
  const merged10 = Object.assign(heading);
  obj.heading = {};
  const merged11 = Object.assign(blockQuote);
  if (typeof _require(8004).customRules.blockQuote === "function") {
    const customRules6 = tmp(8004).customRules;
    blockQuote = customRules6.blockQuote(uri);
  } else {
    blockQuote = tmp(8004).customRules.blockQuote;
  }
  const merged12 = Object.assign(blockQuote);
  obj.blockQuote = {};
  const merged13 = Object.assign(paragraph);
  if (typeof _require(8004).customRules.paragraph === "function") {
    const customRules7 = tmp(8004).customRules;
    paragraph = customRules7.paragraph(uri);
  } else {
    paragraph = tmp(8004).customRules.paragraph;
  }
  const merged14 = Object.assign(paragraph);
  obj.paragraph = {};
  return obj;
}
let lheading = require("t").defaultRules.lheading;
let heading = require("t").defaultRules.heading;
let link = require("t").defaultRules.link;
let image = require("t").defaultRules.image;
let list = require("t").defaultRules.list;
let blockQuote = require("t").defaultRules.blockQuote;
let paragraph = require("t").defaultRules.paragraph;
const re10 = /\{(.+?)}/;
const re11 = /^\$(\w+?)\$/;
const result = require("textRegexp").fileFinishedImporting("utils/ChangeLogUtils.tsx");

export default {
  getDefaultRules(uri) {
    const merged = Object.assign(defaultRules(uri));
    return {};
  },
  getSpecialRules(uri) {
    let obj = {};
    const merged = Object.assign(defaultRules(uri));
    obj = {};
    const merged1 = Object.assign(lheading);
    const _require = false;
    obj.parse = (arg0, arg1, inline) => {
      const match = outer1_10.exec(arg0[1]);
      const str2 = arg0[1].replace(outer1_10, "");
      let formatted = str2;
      if (c0) {
        formatted = str2.toUpperCase();
      }
      let tmp3 = null;
      if (null != match) {
        tmp3 = match[1];
      }
      const obj = { className: tmp3, level: null, content: null };
      let num = 2;
      if ("=" === arg0[2]) {
        num = 1;
      }
      obj[1] = num;
      obj[2] = outer1_1(outer1_2[0]).parseInline(arg1, formatted, inline);
      return obj;
    };
    if (typeof _require(8004).customRules.lheading === "function") {
      const customRules = tmp3(8004).customRules;
      lheading = customRules.lheading(uri);
    } else {
      lheading = tmp3(8004).customRules.lheading;
    }
    obj = { lheading: null };
    const merged2 = Object.assign(lheading);
    obj[0] = obj;
    const merged3 = Object.assign(obj);
    return obj;
  },
  getMessageRules(uri) {
    let obj = {};
    obj = {};
    const merged = Object.assign(defaultRules(uri));
    obj = {};
    const merged1 = Object.assign(importDefault(3984).defaultRules.newline);
    obj.newline = obj;
    obj.text = importDefault(4724);
    obj.list = importDefault(4742);
    obj.subtext = importDefault(4743);
    const merged2 = Object.assign(obj);
    return obj;
  }
};
export const renderChangelogMessageMarkup = function renderChangelogMessageMarkup(content, uri) {
  let obj = importDefault(4275);
  obj = {};
  const merged = Object.assign(defaultRules(uri));
  if (null != arg2) {
    obj = { changeLog: null };
    obj[0] = arg2;
    let obj1 = obj;
  } else {
    obj1 = {};
  }
  const reactParserForResult = obj.reactParserFor(obj);
  return { hasSpoilerEmbeds: false, hasBailedAst: false, content: obj.reactParserFor(obj)(content.content, false, obj1) };
};