// === Module 7647: markup/MarkupParser ===

// Module 7647 (markup/MarkupParser)
import _modDef1936 from "module_1936" /* 1936 */;
import MarkupASTUtils from "MarkupASTUtils" /* 7648 */;
import size from "module_2" /* 2 */;

let importDefault;

function saferParse(fn, arg1, inline, arg3, arg4) {
  let ast;
  let hasBailedAst;
  let text = arg1;
  let tmp2 = arg3;
  if (arg3 === undefined) {
    tmp2 = null;
  }
  try {
    if (arg4) {
      text = `${tmp}

  `;
    }
    const tmp4 = fn(text, inline);
    const obj = MarkupASTUtils;
    const flattenAstResult = obj.flattenAst(inline, tmp4);
    const obj2 = MarkupASTUtils;
    ({ hasBailedAst, ast } = obj2.constrainAst(flattenAstResult));
    obj2.constrainAst(flattenAstResult);
  } catch (err) {
    let str2 = "";
    if (arg4) {
      str2 = "\n\n";
    }
    ast = fn(str2, inline);
    hasBailedAst = false;
  }
  if (tmp2) {
    ast = tmp2(ast, inline.inline, hasBailedAst);
  }
  return ast;
}
let obj = {
  astParserFor(importDefaultResultResult) {
    let obj = _modDef1936;
    let closure_0 = obj.parserFor(importDefaultResultResult);
    return (arg0) => {
      let str = arg0;
      if (arg0 === undefined) {
        str = "";
      }
      let obj = arg2;
      if (arg2 === undefined) {
        obj = {};
      }
      let tmp = arg3;
      if (arg3 === undefined) {
        tmp = null;
      }
      const obj2 = { inline };
      const merged = Object.assign(obj);
      const tmp3 = saferParse(closure_0, str, obj2, tmp, !inline);
      let result = tmp3;
      if (!obj.formatInline) {
        const _Array = Array;
        result = tmp3;
        if (Array.isArray(tmp3)) {
          const obj3 = MarkupASTUtils;
          result = obj3.reinsertConsumedListSeparators(tmp3);
        }
      }
      return result;
    };
  },
  reactParserFor(importDefaultResultResult) {
    let closure_1;
    let obj = _modDef1936;
    let closure_0 = obj.parserFor(importDefaultResultResult);
    let tmp = _modDef1936;
    const reactFor = tmp.reactFor;
    let obj2 = _modDef1936;
    importDefault = reactFor(obj2.ruleOutput(importDefaultResultResult, "react"));
    return () => {
      let str = arg0;
      if (arg0 === undefined) {
        str = "";
      }
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let obj = arg2;
      if (arg2 === undefined) {
        obj = {};
      }
      let tmp = arg3;
      if (arg3 === undefined) {
        tmp = null;
      }
      if (str.trim()) {
        const obj2 = { inline: flag };
        const tmp3 = obj2;
        const merged = Object.assign(obj);
        return (function(arg0, arg1) {
          try {
            return closure_1_1(arg0, arg1);
          } catch (tmp3) {
            const message = tmp3.message;
            let hasItem;
            if (message != null) {
              hasItem = message.includes("Cannot convert undefined");
            }
            if (hasItem) {
              const self = this;
              const self2 = this;
              const markupParserNodeTypeError = new closure_0(dependencyMap[0]).MarkupParserNodeTypeError(arg0);
              throw markupParserNodeTypeError;
            } else {
              throw tmp3;
            }
          }
        })(saferParse(closure_0, str, obj2, tmp, !flag), obj2);
      } else {
        return null;
      }
    };
  }
};
let result = size.fileFinishedImporting("../discord_common/js/packages/markup/native/MarkupParser.tsx");

export default obj;