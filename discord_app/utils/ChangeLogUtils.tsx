// === Module 7777: ChangeLogUtils ===

// Module 7777 (ChangeLogUtils)
import _modDef1936 from "module_1936" /* 1936 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4883 */;
import MarkupTextRuleDefault from "MarkupTextRule" /* 5802 */;
import MarkupListRuleDefault from "MarkupListRule" /* 5816 */;
import MarkupSubtextRuleDefault from "MarkupSubtextRule" /* 5817 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const parse = (arg0, fn, inline) => {
  let num;
  let obj2;
  const match = re10.exec(arg0[1]);
  const str = arg0[1];
  const str2 = str.replace(re10, "");
  let formatted = str2;
  if (c0) {
    formatted = str2.toUpperCase();
  }
  let tmp3 = null;
  if (null != match) {
    tmp3 = match[1];
  }
  const obj = { className: tmp3, level: num, content: obj2.parseInline(fn, formatted, inline) };
  num = 2;
  if ("=" === arg0[2]) {
    num = 1;
  }
  obj2 = _modDef1936;
  return obj;
};
function defaultRules(dependencyMap) {
  let c0;
  let obj10;
  let obj11;
  let obj12;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let obj9;
  let regex;
  function match(arg0) {
    return regex.exec(arg0);
  }
  function parse(arg0, arg1, arg2) {
    let obj;
    if (null == arg2.interpolations[arg0[1]]) {
      obj = { type: "text", content: arg0[0] };
      const obj2 = { type: "text", content: arg0[0] };
    } else {
      obj = { type: "interpolation", renderer: arg2.interpolations[arg0[1]] };
    }
    return obj;
  }
  function react(renderer) {
    return renderer.renderer();
  }
  let obj = { image: obj5, link: obj6, list: obj7, interpolation: { order: MarkupTextRuleDefault.order, match, parse, react }, lheading: obj9, heading: obj10, blockQuote: obj11, paragraph: obj12 };
  const merged = Object.assign(require("utils/ChangeLogUtils").baseRules);
  if (null != require("utils/ChangeLogUtils").customRules.strong) {
    let strong;
    let obj2 = {};
    const merged1 = Object.assign(tmp(7778).baseRules.strong);
    if (typeof require("utils/ChangeLogUtils").customRules.strong === "function") {
      const customRules = tmp(7778).customRules;
      strong = customRules.strong(dependencyMap);
    } else {
      strong = tmp(7778).customRules.strong;
    }
    const obj3 = { strong: obj2 };
    const merged2 = Object.assign(strong);
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged3 = Object.assign(obj4);
  obj5 = {};
  const merged4 = Object.assign(image);
  if (typeof require("utils/ChangeLogUtils").customRules.image === "function") {
    const customRules2 = tmp(7778).customRules;
    image = customRules2.image(dependencyMap);
  } else {
    image = tmp(7778).customRules.image;
  }
  const merged5 = Object.assign(image);
  obj6 = {};
  const merged6 = Object.assign(link);
  if (typeof require("utils/ChangeLogUtils").customRules.link === "function") {
    const customRules3 = tmp(7778).customRules;
    link = customRules3.link(dependencyMap);
  } else {
    link = tmp(7778).customRules.link;
  }
  const merged7 = Object.assign(link);
  obj7 = {};
  const merged8 = Object.assign(list);
  if (typeof require("utils/ChangeLogUtils").customRules.list === "function") {
    const customRules4 = tmp(7778).customRules;
    list = customRules4.list(dependencyMap);
  } else {
    list = tmp(7778).customRules.list;
  }
  const merged9 = Object.assign(list);
  obj9 = { parse };
  ({ order: MarkupTextRuleDefault.order, match, parse, react });
  const merged10 = Object.assign(lheading);
  _require = true;
  if (typeof require("utils/ChangeLogUtils").customRules.lheading === "function") {
    const customRules5 = tmp(7778).customRules;
    lheading = customRules5.lheading(dependencyMap);
  } else {
    lheading = tmp(7778).customRules.lheading;
  }
  const merged11 = Object.assign(lheading);
  obj10 = {};
  const merged12 = Object.assign(heading);
  if (typeof require("utils/ChangeLogUtils").customRules.heading === "function") {
    const customRules6 = tmp(7778).customRules;
    heading = customRules6.heading(dependencyMap);
  } else {
    heading = tmp(7778).customRules.heading;
  }
  const merged13 = Object.assign(heading);
  obj11 = {};
  const merged14 = Object.assign(blockQuote);
  if (typeof require("utils/ChangeLogUtils").customRules.blockQuote === "function") {
    const customRules7 = tmp(7778).customRules;
    blockQuote = customRules7.blockQuote(dependencyMap);
  } else {
    blockQuote = tmp(7778).customRules.blockQuote;
  }
  const merged15 = Object.assign(blockQuote);
  obj12 = {};
  const merged16 = Object.assign(paragraph);
  if (typeof require("utils/ChangeLogUtils").customRules.paragraph === "function") {
    const customRules8 = tmp(7778).customRules;
    paragraph = customRules8.paragraph(dependencyMap);
  } else {
    paragraph = tmp(7778).customRules.paragraph;
  }
  const merged17 = Object.assign(paragraph);
  return obj;
}
let lheading = _modDef1936.defaultRules.lheading;
let heading = _modDef1936.defaultRules.heading;
let link = _modDef1936.defaultRules.link;
let image = _modDef1936.defaultRules.image;
let list = _modDef1936.defaultRules.list;
let blockQuote = _modDef1936.defaultRules.blockQuote;
let paragraph = _modDef1936.defaultRules.paragraph;
const re10 = /\{(.+?)}/;
const re11 = /^\$(\w+?)\$/;
let obj = {
  getDefaultRules(dependencyMap) {
    const obj = {};
    const merged = Object.assign(defaultRules(dependencyMap));
    return obj;
  },
  getSpecialRules(dependencyMap) {
    let c0;
    let obj = {};
    const merged = Object.assign(defaultRules(dependencyMap));
    let obj2 = { parse };
    const merged1 = Object.assign(lheading);
    _require = false;
    let tmp3 = _require;
    if (typeof require("utils/ChangeLogUtils").customRules.lheading === "function") {
      const customRules = tmp3(7778).customRules;
      lheading = customRules.lheading(dependencyMap);
    } else {
      lheading = tmp3(7778).customRules.lheading;
    }
    const obj3 = { lheading: obj2 };
    const merged2 = Object.assign(lheading);
    const merged3 = Object.assign(obj3);
    return obj;
  },
  getMessageRules(dependencyMap) {
    let obj3;
    const obj = {};
    const obj2 = { newline: obj3, text: MarkupTextRuleDefault, list: MarkupListRuleDefault, subtext: MarkupSubtextRuleDefault };
    const merged = Object.assign(defaultRules(dependencyMap));
    obj3 = {};
    const merged1 = Object.assign(_modDef1936.defaultRules.newline);
    const merged2 = Object.assign(obj2);
    return obj;
  }
};
const result = size.fileFinishedImporting("utils/ChangeLogUtils.tsx");

export default obj;
export const renderChangelogMessageMarkup = function renderChangelogMessageMarkup(content, dependencyMap, changeLog) {
  let obj3;
  const reactParserFor = MarkupUtilsDefault.reactParserFor;
  const obj = {};
  MarkupUtilsDefault;
  const merged = Object.assign(defaultRules(dependencyMap));
  content = content.content;
  const reactParserForResult = reactParserFor(obj);
  if (null != changeLog) {
    obj3 = { changeLog };
    const obj2 = { changeLog };
  } else {
    obj3 = {};
  }
  const obj4 = { hasSpoilerEmbeds: false, hasBailedAst: false, content: reactParserForResult(content, false, obj3) };
  return obj4;
};