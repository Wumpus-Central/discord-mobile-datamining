// === Module 6903: saferParse ===

// Module 6903 (saferParse)
import obj132 from "obj132" /* 2 */;
import tDefault from "t" /* 4092 */;
import collectAst from "collectAst" /* 6904 */;

function saferParse(fn, closure_0, inline, arg3, arg4) {
  let text = closure_0;
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
    const flattenAstResult = collectAst.flattenAst(inline, tmp8);
    ({ hasBailedAst, ast } = collectAst.constrainAst(flattenAstResult));
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
const result = obj132.fileFinishedImporting("../discord_common/js/packages/markup/native/MarkupParser.tsx");

export default {
  astParserFor(importDefaultResultResult) {
    closure_0 = tDefault.parserFor(importDefaultResultResult);
    return (closure_0, inline, inline) => {
      let str = closure_0;
      if (closure_0 === undefined) {
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
    closure_0 = tDefault.parserFor(importDefaultResultResult);
    const obj2 = tDefault;
    importDefault = obj2.reactFor(tDefault.ruleOutput(importDefaultResultResult, "react"));
    return (closure_0, arg1, inline) => {
      let str = closure_0;
      if (closure_0 === undefined) {
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
        obj = { inline: null };
        obj[0] = flag;
        const merged = Object.assign(obj);
        return ((arg0, inline) => {
          try {
            return callback(arg0, inline);
          } catch (tmp4) {
            const message = tmp4.message;
            let hasItem;
            if (message != null) {
              hasItem = message.includes("Cannot convert undefined");
            }
            if (hasItem) {
              const markupParserNodeTypeError = new closure_1_0(closure_1_2[0]).MarkupParserNodeTypeError(tmp);
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