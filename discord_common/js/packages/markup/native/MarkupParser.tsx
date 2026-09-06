// === Module 7988: markup/MarkupParser ===

// Module 7988 (markup/MarkupParser)
import _modDef4257 from "module_4257" /* 4257 */;
import MarkupASTUtils from "MarkupASTUtils" /* 7989 */;
import size from "module_2" /* 2 */;

function saferParse(fn, arg1, inline, arg3, arg4) {
  let text = arg1;
  let tmp6 = arg3;
  if (arg3 === undefined) {
    tmp6 = null;
  }
  try {
    if (arg4) {
      text = `${tmp5}

  `;
    }
    const tmp8 = fn(text, inline);
    const flattenAstResult = MarkupASTUtils.flattenAst(inline, tmp8);
    ({ hasBailedAst, ast } = MarkupASTUtils.constrainAst(flattenAstResult));
    if (tmp6) {
      ast = tmp6(ast, inline.inline, hasBailedAst);
    }
    return ast;
  } catch (err) {
    let str2 = "";
    if (tmp4) {
      str2 = "\n\n";
    }
    ast = tmp3(str2, tmp);
    hasBailedAst = false;
  }
}
const result = size.fileFinishedImporting("../discord_common/js/packages/markup/native/MarkupParser.tsx");

export default {
  astParserFor(importDefaultResultResult) {
    closure_0 = _modDef4257.parserFor(importDefaultResultResult);
    return (arg0, inline, inline) => {
      let str = arg0;
      if (arg0 === undefined) {
        str = "";
      }
      let obj = inline;
      if (inline === undefined) {
        obj = {};
      }
      let tmp = arg3;
      if (arg3 === undefined) {
        tmp = null;
      }
      obj = { inline };
      const merged = Object.assign(obj);
      return saferParse(closure_0, str, obj, tmp, !inline);
    };
  },
  reactParserFor(importDefaultResultResult) {
    closure_0 = _modDef4257.parserFor(importDefaultResultResult);
    const obj2 = _modDef4257;
    importDefault = obj2.reactFor(_modDef4257.ruleOutput(importDefaultResultResult, "react"));
    return (arg0, arg1, inline) => {
      let str = arg0;
      if (arg0 === undefined) {
        str = "";
      }
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let obj = inline;
      if (inline === undefined) {
        obj = {};
      }
      let tmp = arg3;
      if (arg3 === undefined) {
        tmp = null;
      }
      if (str.trim()) {
        obj = { inline: flag };
        const merged = Object.assign(obj);
        return ((arg0, inline) => {
          try {
            return closure_1_1(arg0, inline);
          } catch (tmp4) {
            const message = tmp4.message;
            let hasItem;
            if (message != null) {
              hasItem = message.includes("Cannot convert undefined");
            }
            if (hasItem) {
              const markupParserNodeTypeError = new closure_0(dependencyMap[0]).MarkupParserNodeTypeError(tmp);
              throw markupParserNodeTypeError;
            } else {
              throw tmp4;
            }
          }
        })(saferParse(closure_0, str, obj, tmp, !flag), obj);
      } else {
        return null;
      }
    };
  }
};