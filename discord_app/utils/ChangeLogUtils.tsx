// === Module 7873: defaultRules ===

// Module 7873 (defaultRules)
const require = arg1;
function defaultRules(uri) {
  let obj = {};
  const merged = Object.assign(_require(7874).baseRules);
  obj = {};
  const merged1 = Object.assign(image);
  if (typeof _require(7874).customRules.image === "fileFinishedImporting") {
    const customRules = tmp(7874).customRules;
    image = customRules.image(uri);
  } else {
    image = tmp(7874).customRules.image;
  }
  const merged2 = Object.assign(image);
  obj.image = obj;
  obj = {};
  const merged3 = Object.assign(link);
  if (typeof _require(7874).customRules.link === "fileFinishedImporting") {
    const customRules2 = tmp(7874).customRules;
    link = customRules2.link(uri);
  } else {
    link = tmp(7874).customRules.link;
  }
  const merged4 = Object.assign(link);
  obj.link = obj;
  const merged5 = Object.assign(list);
  if (typeof _require(7874).customRules.list === "fileFinishedImporting") {
    const customRules3 = tmp(7874).customRules;
    list = customRules3.list(uri);
  } else {
    list = tmp(7874).customRules.list;
  }
  const merged6 = Object.assign(list);
  obj.list = {};
  obj.interpolation = {
    order: importDefault(4633).order,
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
  if (typeof _require(7874).customRules.lheading === "fileFinishedImporting") {
    const customRules4 = tmp(7874).customRules;
    lheading = customRules4.lheading(uri);
  } else {
    lheading = tmp(7874).customRules.lheading;
  }
  const merged8 = Object.assign(lheading);
  obj.lheading = obj3;
  const merged9 = Object.assign(heading);
  if (typeof _require(7874).customRules.heading === "fileFinishedImporting") {
    const customRules5 = tmp(7874).customRules;
    heading = customRules5.heading(uri);
  } else {
    heading = tmp(7874).customRules.heading;
  }
  const merged10 = Object.assign(heading);
  obj.heading = {};
  const merged11 = Object.assign(blockQuote);
  if (typeof _require(7874).customRules.blockQuote === "fileFinishedImporting") {
    const customRules6 = tmp(7874).customRules;
    blockQuote = customRules6.blockQuote(uri);
  } else {
    blockQuote = tmp(7874).customRules.blockQuote;
  }
  const merged12 = Object.assign(blockQuote);
  obj.blockQuote = {};
  const merged13 = Object.assign(paragraph);
  if (typeof _require(7874).customRules.paragraph === "fileFinishedImporting") {
    const customRules7 = tmp(7874).customRules;
    paragraph = customRules7.paragraph(uri);
  } else {
    paragraph = tmp(7874).customRules.paragraph;
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
    if (typeof _require(7874).customRules.lheading === "fileFinishedImporting") {
      const customRules = tmp3(7874).customRules;
      lheading = customRules.lheading(uri);
    } else {
      lheading = tmp3(7874).customRules.lheading;
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
    const merged1 = Object.assign(importDefault(3892).defaultRules.newline);
    obj.newline = obj;
    obj.text = importDefault(4633);
    obj.list = importDefault(4651);
    obj.subtext = importDefault(4652);
    const merged2 = Object.assign(obj);
    return obj;
  }
};
export const renderChangelogMessageMarkup = function renderChangelogMessageMarkup(content, uri) {
  let obj = importDefault(4183);
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