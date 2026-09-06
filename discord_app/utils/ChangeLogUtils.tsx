// === Module 8093: ChangeLogUtils ===

// Module 8093 (ChangeLogUtils)
import _modDef4257 from "module_4257" /* 4257 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4550 */;
import MarkupTextRuleDefault from "MarkupTextRule" /* 5005 */;
import MarkupListRuleDefault from "MarkupListRule" /* 5025 */;
import MarkupSubtextRuleDefault from "MarkupSubtextRule" /* 5026 */;

const require = fn;
function defaultRules(dependencyMap) {
  let obj = {};
  const merged = Object.assign(require("utils/ChangeLogUtils").baseRules);
  if (null != require("utils/ChangeLogUtils").customRules.strong) {
    obj = {};
    const merged1 = Object.assign(tmp(8094).baseRules.strong);
    if (typeof tmp(8094).customRules.strong === "function") {
      const customRules = tmp(8094).customRules;
      let strong = customRules.strong(dependencyMap);
    } else {
      strong = tmp(8094).customRules.strong;
    }
    obj = { strong: null };
    const merged2 = Object.assign(strong);
    obj.strong = obj;
  } else {
    const obj1 = {};
    const merged3 = Object.assign(obj1);
    const obj2 = {};
    const merged4 = Object.assign(image);
    if (typeof tmp(8094).customRules.image === "function") {
      const customRules2 = tmp(8094).customRules;
      image = customRules2.image(dependencyMap);
    } else {
      image = tmp(8094).customRules.image;
    }
    const merged5 = Object.assign(image);
    obj.image = obj2;
    const obj3 = {};
    const merged6 = Object.assign(link);
    if (typeof tmp(8094).customRules.link === "function") {
      const customRules3 = tmp(8094).customRules;
      link = customRules3.link(dependencyMap);
    } else {
      link = tmp(8094).customRules.link;
    }
    const merged7 = Object.assign(link);
    obj.link = obj3;
    const obj4 = {};
    const merged8 = Object.assign(list);
    if (typeof tmp(8094).customRules.list === "function") {
      const customRules4 = tmp(8094).customRules;
      list = customRules4.list(dependencyMap);
    } else {
      list = tmp(8094).customRules.list;
    }
    const merged9 = Object.assign(list);
    obj.list = obj4;
    const obj5 = {
      order: MarkupTextRuleDefault.order,
      match(arg0) {
          return regex.exec(arg0);
        },
      parse(arg0, arg1, arg2) {
          if (null == arg2.interpolations[arg0[1]]) {
            let obj = { type: "text", content: arg0[0] };
          } else {
            obj = { type: "interpolation", renderer: tmp };
          }
          return obj;
        },
      react(renderer) {
          return renderer.renderer();
        }
    };
    obj.interpolation = obj5;
    const obj6 = {};
    const merged10 = Object.assign(lheading);
    _require = true;
    obj6.parse = (arg0, fn, inline) => {
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
      obj.content = _modDef4257.parseInline(fn, formatted, inline);
      return obj;
    };
    if (typeof tmp(8094).customRules.lheading === "function") {
      const customRules5 = tmp(8094).customRules;
      lheading = customRules5.lheading(dependencyMap);
    } else {
      lheading = tmp(8094).customRules.lheading;
    }
    const merged11 = Object.assign(lheading);
    obj.lheading = obj6;
    const obj7 = {};
    const merged12 = Object.assign(heading);
    if (typeof tmp(8094).customRules.heading === "function") {
      const customRules6 = tmp(8094).customRules;
      heading = customRules6.heading(dependencyMap);
    } else {
      heading = tmp(8094).customRules.heading;
    }
    const merged13 = Object.assign(heading);
    obj.heading = obj7;
    const obj8 = {};
    const merged14 = Object.assign(blockQuote);
    if (typeof tmp(8094).customRules.blockQuote === "function") {
      const customRules7 = tmp(8094).customRules;
      blockQuote = customRules7.blockQuote(dependencyMap);
    } else {
      blockQuote = tmp(8094).customRules.blockQuote;
    }
    const merged15 = Object.assign(blockQuote);
    obj.blockQuote = obj8;
    const obj9 = {};
    const merged16 = Object.assign(paragraph);
    if (typeof tmp(8094).customRules.paragraph === "function") {
      const customRules8 = tmp(8094).customRules;
      paragraph = customRules8.paragraph(dependencyMap);
    } else {
      paragraph = tmp(8094).customRules.paragraph;
    }
    const merged17 = Object.assign(paragraph);
    obj.paragraph = obj9;
    return obj;
  }
}
let lheading = _modDef4257.defaultRules.lheading;
let heading = _modDef4257.defaultRules.heading;
let link = _modDef4257.defaultRules.link;
let image = _modDef4257.defaultRules.image;
let list = _modDef4257.defaultRules.list;
let blockQuote = _modDef4257.defaultRules.blockQuote;
let paragraph = _modDef4257.defaultRules.paragraph;
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
    let obj = {};
    const merged = Object.assign(defaultRules(dependencyMap));
    obj = {};
    const merged1 = Object.assign(lheading);
    _require = false;
    obj.parse = (arg0, fn, inline) => {
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
      obj.content = _modDef4257.parseInline(fn, formatted, inline);
      return obj;
    };
    if (typeof require("utils/ChangeLogUtils").customRules.lheading === "function") {
      const customRules = tmp3(8094).customRules;
      lheading = customRules.lheading(dependencyMap);
    } else {
      lheading = tmp3(8094).customRules.lheading;
    }
    obj = { lheading: null };
    const merged2 = Object.assign(lheading);
    obj.lheading = obj;
    const merged3 = Object.assign(obj);
    return obj;
  },
  getMessageRules(dependencyMap) {
    let obj = {};
    obj = {};
    const merged = Object.assign(defaultRules(dependencyMap));
    obj = {};
    const merged1 = Object.assign(_modDef4257.defaultRules.newline);
    obj.newline = obj;
    obj.text = MarkupTextRuleDefault;
    obj.list = MarkupListRuleDefault;
    obj.subtext = MarkupSubtextRuleDefault;
    const merged2 = Object.assign(obj);
    return obj;
  }
};
export const renderChangelogMessageMarkup = function renderChangelogMessageMarkup(content, dependencyMap, changeLog) {
  let obj = {};
  const merged = Object.assign(defaultRules(dependencyMap));
  if (null != changeLog) {
    obj = { changeLog };
    let obj1 = obj;
  } else {
    obj1 = {};
  }
  const reactParserForResult = obj.reactParserFor(obj);
  return { hasSpoilerEmbeds: false, hasBailedAst: false, content: obj.reactParserFor(obj)(content.content, false, obj1) };
};