// discord_common/js/packages/markup/MarkupASTUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

let set;

const f95356 = (content) => {
  if (items === undefined) {
    items = [];
  }
  if (Array.isArray(content)) {
    const item = content.forEach(f95356);
  } else if (typeof content.content === "string") {
    items.push(content.content);
  } else if (null != content.content) {
    content = content.content;
    let items1 = items;
    if (items === undefined) {
      items1 = [];
    }
    const _Array = Array;
    if (Array.isArray(content)) {
      const item1 = content.forEach(f95356);
    } else if (typeof content.content === "string") {
      items1.push(content.content);
    } else if (null != content.content) {
      collectAst(content.content, items1);
    }
  }
  return items;
};
function collectAst(content) {
  let items = items1;
  if (items1 === undefined) {
    items = [];
  }
  if (Array.isArray(content)) {
    const item = content.forEach(f95356);
  } else if (typeof content.content === "string") {
    items.push(content.content);
  } else if (null != content.content) {
    items(content.content, items);
  }
  return items;
}
let ast = {};
class MarkupParserNodeTypeError extends Error {
  constructor(arg0) {
    let _Array;
    let arr;
    let tmp8;
    let tmp9;
    const self = this;
    set = new Set();
    const items = [arg0];
    if (items.length > 0) {
      do {
        arr = items.pop();
        if (undefined !== arr) {
          let _Array2 = Array;
          if (Array.isArray(arr)) {
            let push3 = items.push;
            let items1 = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(items1, arr, 0);
            tmp8 = items1;
            tmp9 = items;
            let applyResult = HermesBuiltin.apply(push3, items1, items);
          } else {
            let addResult = set.add(arr.type);
            let isArray = "content" in arr;
            if (isArray) {
              _Array = Array;
              isArray = Array.isArray(arr.content);
            }
            if (isArray) {
              let push = items.push;
              let items2 = [];
              let arraySpreadResult3 = HermesBuiltin.arraySpread(items2, arr.content, 0);
              tmp8 = items2;
              tmp9 = items;
              let applyResult1 = HermesBuiltin.apply(push, items2, items);
            }
            let isArray1 = "items" in arr;
            if (isArray1) {
              _Array = Array;
              isArray1 = Array.isArray(arr.items);
            }
            if (isArray1) {
              let push2 = items.push;
              let items3 = [];
              let arraySpreadResult4 = HermesBuiltin.arraySpread(items3, arr.items, 0);
              tmp8 = items3;
              tmp9 = items;
              let applyResult2 = HermesBuiltin.apply(push2, items3, items);
            }
          }
        }
      } while (items.length > 0);
    }
    const arr2 = Array.from(set);
    const set1 = new set(MarkupParserNodeTypeError.getMessage(arr2), tmp8, tmp9, _Array, tmp4, arr);
    set1.nodeTypes = arr2;
    return set1;
  }
  static getMessage(join) {
    return 'MarkupParserNodeTypeError: Unknown AST node type in "' + join.join(", ") + '" caused rendering failure';
  }
}
const result = size.fileFinishedImporting("../discord_common/js/packages/markup/MarkupASTUtils.tsx");
function walkAst(content, fn) {
  if (Array.isArray(content)) {
    const tmp8 = content[Symbol.iterator]();
    while (tmp8 !== undefined) {
      let tmp13 = walkAst(tmp10, fn);
      continue;
    }
  } else {
    fn(content, null);
    const _Array = Array;
    if (Array.isArray(content.content)) {
      walkAst(content.content, fn);
    }
    if ("list" === content.type) {
      walkAst(content.items, fn);
    }
  }
}
function reinsertConsumedListSeparators(content) {
  const items = [];
  const iter = content[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = "list" === nextResult.type;
    if (tmp3) {
      tmp3 = true === tmp2.consumedLeadingNewline;
    }
    if (tmp3) {
      let arr = items.push({ type: "text", content: "\n" });
    }
    let _Array = Array;
    if (Array.isArray(tmp2.content)) {
      tmp2.content = reinsertConsumedListSeparators(tmp2.content);
    }
    let arr3 = items.push(tmp2);
    continue;
  }
  return items;
}
function flattenAst(isSlate, content) {
  let closure_0 = isSlate;
  let tmp = content;
  if (content === undefined) {
    tmp = null;
  }
  const tmp2 = content;
  if (Array.isArray(content)) {
    let num3;
    const items = [];
    const length = content.length;
    for (let num3 = 0; num3 < length; num3 = num3 + 1) {
      let arr3 = flattenAst(isSlate, content[num3], tmp);
      let _Array = Array;
      if (Array.isArray(arr3)) {
        let num4;
        let length2 = arr3.length;
        for (let num4 = 0; num4 < length2; num4 = num4 + 1) {
          let arr = items.push(arr3[num4]);
        }
      } else {
        let arr2 = items.push(arr3);
      }
    }
    if (!isSlate.isSlate) {
      let num5 = 0;
      let tmp10 = null;
      if (0 < items.length) {
        do {
          let tmp11 = items[num5];
          let diff = num5;
          let tmp15 = tmp11;
          if (null != tmp10) {
            diff = num5;
            tmp15 = tmp11;
            if ("text" === tmp10.type) {
              diff = num5;
              tmp15 = tmp11;
              if (tmp10.type === tmp11.type) {
                diff = num5;
                tmp15 = tmp11;
                if (typeof tmp10.content === "string") {
                  diff = num5;
                  tmp15 = tmp11;
                  if (typeof tmp11.content === "string") {
                    tmp10.content = tmp10.content + tmp11.content;
                    let spliceResult = items.splice(num5, 1);
                    diff = num5 - 1;
                    tmp15 = tmp10;
                  }
                }
              }
            }
          }
          num5 = diff + 1;
          tmp10 = tmp15;
        } while (num5 < items.length);
      }
    }
    return items;
  } else {
    if (null != content.content) {
      content.content = flattenAst(isSlate, content.content, content);
    }
    if ("inlineCode" === content.type) {
      delete tmp2["validationChildContent"];
    }
    if ("list" === content.type) {
      const items1 = content.items;
      content.items = items1.map((item) => {
        let tmp = item;
        if (Array.isArray(item)) {
          tmp = flattenAst(isSlate, item, null);
        }
        return tmp;
      });
    }
    if (null != tmp) {
      if (content.type === tmp.type) {
        content = content.content;
      }
    }
    return content;
  }
}
function constrainAst(content, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { limit: 200, hasBailedAst: false };
  }
  if (Array.isArray(content)) {
    const length = content.length;
    if (0 < length) {
      ast = constrainAst(content[num], obj).ast;
      obj.hasBailedAst = true;
      content.length = 0;
    }
  } else if ("text" !== content.type) {
    obj.limit = obj.limit - 1;
    if (obj.limit <= 0) {
      obj.hasBailedAst = true;
      return { ast, hasBailedAst: true };
    } else {
      const _Array = Array;
      if (Array.isArray(content.content)) {
        content.content = constrainAst(content.content, obj).ast;
      }
      if ("list" === content.type) {
        const items = content.items;
        content.items = items.map((item) => constrainAst(item, obj).ast);
      }
    }
  }
  return { ast: content, hasBailedAst: obj.hasBailedAst };
}

export const NUM_MAX_AST_NODES = 200;
export { walkAst };
export { reinsertConsumedListSeparators };
export const astToString = function astToString(content) {
  let items = [];
  if (Array.isArray(content)) {
    let item = content.forEach(f95356);
  } else if (typeof content.content === "string") {
    items.push(content.content);
  } else if (null != content.content) {
    content = content.content;
    items = undefined;
    let _Array = Array;
    if (Array.isArray(content)) {
      let item1 = content.forEach(f95356);
    } else if (typeof content.content === "string") {
      items.push(content.content);
    } else if (null != content.content) {
      items(content.content, items);
    }
  }
  return items.join("");
};
export { flattenAst };
export { constrainAst };
export const getIndexedAST = function getIndexedAST(arr, arg1) {
  const f95359 = (type) => {
    let num = 0;
    if (0 !== closure_2) {
      num = arr[tmp - 1].endIndex;
    }
    closure_2 = closure_2 + 1;
    type = type.type;
    if ("spoiler" !== type) {
      if ("u" !== type) {
        if ("s" !== type) {
          if ("strong" !== type) {
            if ("em" !== type) {
              if ("customEmoji" !== type) {
                if ("emoji" !== type) {
                  if ("inlineCode" !== type) {
                    if ("text" === type) {
                      type.startIndex = closure_1 + num;
                      type.endIndex = type.startIndex + type.content.length;
                      return type;
                    } else {
                      type.startIndex = closure_1 + num;
                      const content = type.content;
                      const startIndex = type.startIndex;
                      let c2 = 0;
                      const mapped = content.map(f95359);
                      type.endIndex = mapped[mapped.length - 1].endIndex;
                      return type;
                    }
                  }
                }
              }
            }
            type.startIndex = closure_1 + num;
            const content1 = type.content;
            closure_1 = type.startIndex + 1;
            c2 = 0;
            const mapped1 = content1.map(f95359);
            type.endIndex = mapped1[mapped1.length - 1].endIndex + 1;
            return type;
          }
        }
      }
    }
    type.startIndex = closure_1 + num;
    const content2 = type.content;
    closure_1 = type.startIndex + 2;
    c2 = 0;
    const mapped2 = content2.map(f95359);
    type.endIndex = mapped2[mapped2.length - 1].endIndex + 2;
    return type;
  };
  let closure_0 = arr;
  let closure_1 = arg1;
  let closure_2 = 0;
  return arr.map(f95359);
};
export { MarkupParserNodeTypeError };
