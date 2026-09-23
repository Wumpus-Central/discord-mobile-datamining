// === Module 8332: markup/MarkupParser ===

// Module 8332 (markup/MarkupParser)
import _modDef1929 from "module_1929" /* 1929 */;
import MarkupASTUtils from "MarkupASTUtils" /* 8333 */;
import size from "module_2" /* 2 */;

function saferParse(fn, value, inline, arg3, arg4) {
  let text = value;
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
let result = size.fileFinishedImporting("../discord_common/js/packages/markup/native/MarkupParser.tsx");

export default {
  astParserFor(importDefaultResultResult) {
    closure_0 = _modDef1929.parserFor(importDefaultResultResult);
    return () => {
      let str = value;
      if (value === undefined) {
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
      const merged = Object.assign(obj);
      const tmp3 = saferParse(closure_0, str, { inline }, tmp, !inline);
      let result = tmp3;
      if (!obj.formatInline) {
        const _Array = Array;
        result = tmp3;
        if (Array.isArray(tmp3)) {
          result = MarkupASTUtils.reinsertConsumedListSeparators(tmp3);
        }
      }
      return result;
    };
  },
  reactParserFor(importDefaultResultResult) {
    closure_0 = _modDef1929.parserFor(importDefaultResultResult);
    let obj2 = _modDef1929;
    importDefault = obj2.reactFor(_modDef1929.ruleOutput(importDefaultResultResult, "react"));
    return () => {
      let str = value;
      if (value === undefined) {
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
        const merged = Object.assign(obj);
        return ((arg0, arg1) => {
          try {
            return closure_1_1(arg0, arg1);
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
        })(saferParse(closure_0, str, obj2, tmp, !flag), obj2);
      } else {
        return null;
      }
    };
  }
};