// discord_app/utils/ChangeLogUtils.tsx
import { t } from "../../_runtime/04060_t.js";
import { regExp } from "../modules/markup/MarkupListRule.tsx";
import { MarkupSubtextRule } from "../modules/markup/MarkupSubtextRule.tsx";
import { textRegexp } from "../modules/markup/MarkupTextRule.tsx";
import { ChangeLogLink } from "native/ChangeLogUtils.tsx";
const require = arg1;
function defaultRules(uri) {
  let obj = {};
  const merged = Object.assign(_ChangeLogLink.baseRules);
  if (null != _ChangeLogLink.customRules.strong) {
    obj = {};
    const merged1 = Object.assign(tmp(8260).baseRules.strong);
    if (typeof tmp(8260).customRules.strong === "function") {
      const customRules = tmp(8260).customRules;
      let strong = customRules.strong(uri);
    } else {
      strong = tmp(8260).customRules.strong;
    }
    obj = { strong: null };
    const merged2 = Object.assign(strong);
    obj[0] = obj;
  } else {
    const obj1 = {};
    const merged3 = Object.assign(obj1);
    const obj2 = {};
    const merged4 = Object.assign(image);
    if (typeof tmp(8260).customRules.image === "function") {
      const customRules2 = tmp(8260).customRules;
      image = customRules2.image(uri);
    } else {
      image = tmp(8260).customRules.image;
    }
    const merged5 = Object.assign(image);
    obj.image = obj2;
    const obj3 = {};
    const merged6 = Object.assign(link);
    if (typeof tmp(8260).customRules.link === "function") {
      const customRules3 = tmp(8260).customRules;
      link = customRules3.link(uri);
    } else {
      link = tmp(8260).customRules.link;
    }
    const merged7 = Object.assign(link);
    obj.link = obj3;
    const obj4 = {};
    const merged8 = Object.assign(list);
    if (typeof tmp(8260).customRules.list === "function") {
      const customRules4 = tmp(8260).customRules;
      list = customRules4.list(uri);
    } else {
      list = tmp(8260).customRules.list;
    }
    const merged9 = Object.assign(list);
    obj.list = obj4;
    const obj5 = { order: null, match: null, parse: null, react: null };
    obj5[0] = textRegexp.order;
    obj5[1] = function match(arg0) {
      return regex.exec(arg0);
    };
    obj5[2] = function parse(arg0, arg1, arg2) {
      if (null == arg2.interpolations[arg0[1]]) {
        let obj = { type: "text", content: null };
        obj[1] = arg0[0];
      } else {
        obj = { type: "interpolation", renderer: null };
        obj[1] = tmp;
      }
      return obj;
    };
    obj5[3] = function react(renderer) {
      return renderer.renderer();
    };
    obj.interpolation = obj5;
    const obj6 = {};
    const merged10 = Object.assign(lheading);
    _require = true;
    obj6.parse = (arg0, arg1, inline) => {
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
    if (typeof tmp(8260).customRules.lheading === "function") {
      const customRules5 = tmp(8260).customRules;
      lheading = customRules5.lheading(uri);
    } else {
      lheading = tmp(8260).customRules.lheading;
    }
    const merged11 = Object.assign(lheading);
    obj.lheading = obj6;
    const obj7 = {};
    const merged12 = Object.assign(heading);
    if (typeof tmp(8260).customRules.heading === "function") {
      const customRules6 = tmp(8260).customRules;
      heading = customRules6.heading(uri);
    } else {
      heading = tmp(8260).customRules.heading;
    }
    const merged13 = Object.assign(heading);
    obj.heading = obj7;
    const obj8 = {};
    const merged14 = Object.assign(blockQuote);
    if (typeof tmp(8260).customRules.blockQuote === "function") {
      const customRules7 = tmp(8260).customRules;
      blockQuote = customRules7.blockQuote(uri);
    } else {
      blockQuote = tmp(8260).customRules.blockQuote;
    }
    const merged15 = Object.assign(blockQuote);
    obj.blockQuote = obj8;
    const obj9 = {};
    const merged16 = Object.assign(paragraph);
    if (typeof tmp(8260).customRules.paragraph === "function") {
      const customRules8 = tmp(8260).customRules;
      paragraph = customRules8.paragraph(uri);
    } else {
      paragraph = tmp(8260).customRules.paragraph;
    }
    const merged17 = Object.assign(paragraph);
    obj.paragraph = obj9;
    return obj;
  }
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
    if (typeof _ChangeLogLink.customRules.lheading === "function") {
      const customRules = tmp3(8260).customRules;
      lheading = customRules.lheading(uri);
    } else {
      lheading = tmp3(8260).customRules.lheading;
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
    const merged1 = Object.assign(t.defaultRules.newline);
    obj.newline = obj;
    obj.text = textRegexp;
    obj.list = regExp;
    obj.subtext = MarkupSubtextRule;
    const merged2 = Object.assign(obj);
    return obj;
  }
};
export const renderChangelogMessageMarkup = function renderChangelogMessageMarkup(content, uri) {
  let obj = require("../modules/markup/MarkupUtils.tsx") /* get defaultRules */;
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