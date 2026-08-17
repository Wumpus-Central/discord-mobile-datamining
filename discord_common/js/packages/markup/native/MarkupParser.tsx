// discord_common/js/packages/markup/native/MarkupParser.tsx
import set from "../../../../../_runtime/00002_set.js";
import tDefault from "../../../../../_runtime/04092_t.js";
import collectAst from "../MarkupASTUtils.tsx";

function saferParse(arg0, arg1, inline) {
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
    const tmp8 = arg0(text, inline);
    const flattenAstResult = collectAst.flattenAst(inline, tmp8);
    const obj = collectAst;
    const obj2 = collectAst;
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
const result = set.fileFinishedImporting("../discord_common/js/packages/markup/native/MarkupParser.tsx");

export default {
  astParserFor(importDefaultResultResult) {
    closure_0 = tDefault.parserFor(importDefaultResultResult);
    return (arg0, inline) => {
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
      obj = { inline };
      const merged = Object.assign(obj);
      return closure_1_3(closure_0, str, obj, tmp, !inline);
    };
  },
  reactParserFor(importDefaultResultResult) {
    closure_0 = tDefault.parserFor(importDefaultResultResult);
    let obj = tDefault;
    const obj2 = tDefault;
    importDefault = obj2.reactFor(tDefault.ruleOutput(importDefaultResultResult, "react"));
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
        obj = { inline: null };
        obj[0] = flag;
        const merged = Object.assign(obj);
        return ((arg0, arg1) => {
          try {
            return callback(arg0, arg1);
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
        })(closure_1_3(closure_0, str, obj, tmp, !flag), obj);
      } else {
        return null;
      }
    };
  }
};