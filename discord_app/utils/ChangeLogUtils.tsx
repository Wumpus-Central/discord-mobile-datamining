// === Module 8356: ChangeLogUtils ===

// Module 8356 (ChangeLogUtils)
import _modDef1929 from "module_1929" /* 1929 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4747 */;
import MarkupTextRuleDefault from "MarkupTextRule" /* 5218 */;
import MarkupListRuleDefault from "MarkupListRule" /* 5238 */;
import MarkupSubtextRuleDefault from "MarkupSubtextRule" /* 5239 */;

const require = globalThis.__r;

const require = fn;
function defaultRules(dependencyMap) {
  let obj = {};
  const merged = Object.assign(require("utils/ChangeLogUtils").baseRules);
  if (null != require("utils/ChangeLogUtils").customRules.strong) {
    let obj2 = {};
    const merged1 = Object.assign(tmp(8357).baseRules.strong);
    if (typeof tmp(8357).customRules.strong === "function") {
      const customRules = tmp(8357).customRules;
      let strong = customRules.strong(dependencyMap);
    } else {
      strong = tmp(8357).customRules.strong;
    }
    const obj3 = { strong: null };
    const merged2 = Object.assign(strong);
    obj3.strong = obj2;
  } else {
    const obj4 = {};
    const merged3 = Object.assign(obj4);
    const obj5 = {};
    const merged4 = Object.assign(image);
    if (typeof tmp(8357).customRules.image === "function") {
      const customRules2 = tmp(8357).customRules;
      image = customRules2.image(dependencyMap);
    } else {
      image = tmp(8357).customRules.image;
    }
    const merged5 = Object.assign(image);
    obj.image = obj5;
    const obj6 = {};
    const merged6 = Object.assign(link);
    if (typeof tmp(8357).customRules.link === "function") {
      const customRules3 = tmp(8357).customRules;
      link = customRules3.link(dependencyMap);
    } else {
      link = tmp(8357).customRules.link;
    }
    const merged7 = Object.assign(link);
    obj.link = obj6;
    const obj7 = {};
    const merged8 = Object.assign(list);
    if (typeof tmp(8357).customRules.list === "function") {
      const customRules4 = tmp(8357).customRules;
      list = customRules4.list(dependencyMap);
    } else {
      list = tmp(8357).customRules.list;
    }
    const merged9 = Object.assign(list);
    obj.list = obj7;
    const obj8 = {
      order: MarkupTextRuleDefault.order,
      match(arg0) {
          return regex.exec(arg0);
        },
      parse(arg0, arg1, arg2) {
          if (null == arg2.interpolations[arg0[1]]) {
            const obj2 = { type: "text", content: arg0[0] };
            let obj = obj2;
          } else {
            obj = { type: "interpolation", renderer: tmp };
          }
          return obj;
        },
      react(renderer) {
          return renderer.renderer();
        }
    };
    obj.interpolation = obj8;
    const obj9 = {};
    const merged10 = Object.assign(lheading);
    _require = true;
    obj9.parse = (arg0, fn, inline) => {
      const match = re10.exec(arg0[1]);
      const str2 = arg0[1].replace(re10, "");
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
      obj.level = num;
      obj.content = _modDef1929.parseInline(fn, formatted, inline);
      return obj;
    };
    if (typeof tmp(8357).customRules.lheading === "function") {
      const customRules5 = tmp(8357).customRules;
      lheading = customRules5.lheading(dependencyMap);
    } else {
      lheading = tmp(8357).customRules.lheading;
    }
    const merged11 = Object.assign(lheading);
    obj.lheading = obj9;
    const obj10 = {};
    const merged12 = Object.assign(heading);
    if (typeof tmp(8357).customRules.heading === "function") {
      const customRules6 = tmp(8357).customRules;
      heading = customRules6.heading(dependencyMap);
    } else {
      heading = tmp(8357).customRules.heading;
    }
    const merged13 = Object.assign(heading);
    obj.heading = obj10;
    const obj11 = {};
    const merged14 = Object.assign(blockQuote);
    if (typeof tmp(8357).customRules.blockQuote === "function") {
      const customRules7 = tmp(8357).customRules;
      blockQuote = customRules7.blockQuote(dependencyMap);
    } else {
      blockQuote = tmp(8357).customRules.blockQuote;
    }
    const merged15 = Object.assign(blockQuote);
    obj.blockQuote = obj11;
    const obj12 = {};
    const merged16 = Object.assign(paragraph);
    if (typeof tmp(8357).customRules.paragraph === "function") {
      const customRules8 = tmp(8357).customRules;
      paragraph = customRules8.paragraph(dependencyMap);
    } else {
      paragraph = tmp(8357).customRules.paragraph;
    }
    const merged17 = Object.assign(paragraph);
    obj.paragraph = obj12;
    return obj;
  }
}
let lheading = _modDef1929.defaultRules.lheading;
let heading = _modDef1929.defaultRules.heading;
let link = _modDef1929.defaultRules.link;
let image = _modDef1929.defaultRules.image;
let list = _modDef1929.defaultRules.list;
let blockQuote = _modDef1929.defaultRules.blockQuote;
let paragraph = _modDef1929.defaultRules.paragraph;
const re10 = /\{(.+?)}/;
const re11 = /^\$(\w+?)\$/;
const size = fn(2);
const result = size.fileFinishedImporting("utils/ChangeLogUtils.tsx");

export default {
  getDefaultRules(dependencyMap) {
    const merged = Object.assign(defaultRules(dependencyMap));
    return {};
  },
  getSpecialRules(dependencyMap) {
    const merged = Object.assign(defaultRules(dependencyMap));
    const obj2 = {};
    const merged1 = Object.assign(lheading);
    _require = false;
    obj2.parse = (arg0, fn, inline) => {
      const match = re10.exec(arg0[1]);
      const str2 = arg0[1].replace(re10, "");
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
      obj.level = num;
      obj.content = _modDef1929.parseInline(fn, formatted, inline);
      return obj;
    };
    if (typeof require("utils/ChangeLogUtils").customRules.lheading === "function") {
      const customRules = tmp3(8357).customRules;
      lheading = customRules.lheading(dependencyMap);
    } else {
      lheading = tmp3(8357).customRules.lheading;
    }
    const obj3 = { lheading: null };
    const merged2 = Object.assign(lheading);
    obj3.lheading = obj2;
    const merged3 = Object.assign(obj3);
    return {};
  },
  getMessageRules(dependencyMap) {
    const obj2 = {};
    const merged = Object.assign(defaultRules(dependencyMap));
    const merged1 = Object.assign(_modDef1929.defaultRules.newline);
    obj2.newline = {};
    obj2.text = MarkupTextRuleDefault;
    obj2.list = MarkupListRuleDefault;
    obj2.subtext = MarkupSubtextRuleDefault;
    const merged2 = Object.assign(obj2);
    return {};
  }
};
export const renderChangelogMessageMarkup = function renderChangelogMessageMarkup(content, dependencyMap, changeLog) {
  const merged = Object.assign(defaultRules(dependencyMap));
  const obj2 = {};
  if (null != changeLog) {
    const obj3 = { changeLog };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const reactParserForResult = MarkupUtilsDefault.reactParserFor({});
  return { hasSpoilerEmbeds: false, hasBailedAst: false, content: MarkupUtilsDefault.reactParserFor({})(content.content, false, obj4) };
};