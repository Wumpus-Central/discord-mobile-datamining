// === Module 16686: ConjureNativeMarkdown ===

// Module 16686 (ConjureNativeMarkdown)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4883 */;
import Text_Text from "Text/Text" /* 4892 */;
import ConjureMarkdownBlocks from "ConjureMarkdownBlocks" /* 16687 */;
import useConjureRevealedText from "useConjureRevealedText" /* 16688 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, flag, obj1, tmp2, tmp3, tmp7, tmp9;

let hasOwnProperty;
let metroRequire;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const CONJURE_MARKUP_OPTIONS = { allowList: true, allowHeading: true, allowLinks: true };
let obj2 = { allowList: false };
const merged = Object.assign(CONJURE_MARKUP_OPTIONS);
const PX_16 = nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj3 = { blocks: obj4, list: obj5, item: { flexDirection: "row", alignItems: "flex-start" }, marker: obj6, itemText: { flex: 1 } };
obj4 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj5 = { gap: nativeDefault.space.PX_4 };
obj6 = { minWidth: nativeDefault.space.PX_20, marginRight: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((source) => {
  let arr;
  let list;
  let obj = require("react");
  const cResult = obj.c(16);
  source = source.source;
  let tmp4 = closure_10();
  const tmp = _require;
  _require = tmp4;
  if (cResult[0] !== source) {
    const tmpResult = tmp(16687);
    const splitMarkdownBlocksResult = tmpResult.splitMarkdownBlocks(source);
    cResult[0] = source;
    cResult[1] = splitMarkdownBlocksResult;
    arr = splitMarkdownBlocksResult;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === arr) {
    if (cResult[3] === tmp4.item) {
      if (cResult[4] === tmp4.itemText) {
        if (cResult[5] === tmp4.list) {
          if (cResult[13] === tmp4.blocks) {
            let tmp10;
            if (cResult[14] === tmp7) {
              tmp10 = cResult[15];
            }
            return tmp10;
          }
          obj2 = { style: tmp6, children: tmp7 };
          cResult[13] = tmp4.blocks;
          cResult[14] = tmp7;
          cResult[15] = closure_5(View, obj2);
          closure_5(View, obj2);
          class T {
            constructor(arg0, arg1) {
              if ("text" === source.kind) {
                tmp5 = jsx;
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj1 = { variant: "text-md/normal", color: "text-default", children: null };
                tmp8 = closure_1;
                Text = closure_0(closure_2[8]).Text;
                obj3 = closure_1(closure_2[9]);
                tmp9 = closure_7;
                flag = true;
                obj1.children = obj3.parse(source.text, true, closure_7);
                tmp4 = jsx(Text, obj1, arg1);
              } else {
                tmp = jsx;
                tmp2 = View;
                obj = { style: null, accessibilityRole: "list", children: null };
                tmp3 = closure_0;
                obj.style = closure_0.list;
                items = source.items;
                obj.children = items.map(() => { /* body not rendered: F146612 */ });
                tmp4 = jsx(View, obj, arg1);
              }
              return tmp4;
            }
          }
        }
      }
    }
  }
  if (cResult[8] === tmp4.item) {
    if (cResult[9] === tmp4.itemText) {
      if (cResult[10] === tmp4.list) {
        let tmp8;
        if (cResult[11] === tmp4.marker) {
          tmp8 = cResult[12];
        }
        const mapped = arr.map(tmp8);
        cResult[2] = arr;
        cResult[3] = tmp4.item;
        cResult[4] = tmp4.itemText;
        cResult[5] = tmp4.list;
        cResult[6] = tmp4.marker;
        cResult[7] = mapped;
        class T {
          constructor(arg0, arg1) {
            if ("text" === source.kind) {
              tmp5 = jsx;
              tmp6 = closure_0;
              tmp7 = closure_2;
              obj1 = { variant: "text-md/normal", color: "text-default", children: null };
              tmp8 = closure_1;
              Text = closure_0(closure_2[8]).Text;
              obj3 = closure_1(closure_2[9]);
              tmp9 = closure_7;
              flag = true;
              obj1.children = obj3.parse(source.text, true, closure_7);
              tmp4 = jsx(Text, obj1, arg1);
            } else {
              tmp = jsx;
              tmp2 = View;
              obj = { style: null, accessibilityRole: "list", children: null };
              tmp3 = closure_0;
              obj.style = closure_0.list;
              items = source.items;
              obj.children = items.map(() => { /* body not rendered: F146612 */ });
              tmp4 = jsx(View, obj, arg1);
            }
            return tmp4;
          }
        }
      }
    }
  }
  class T {
    constructor(arg0, arg1) {
      if ("text" === source.kind) {
        tmp5 = jsx;
        tmp6 = closure_0;
        tmp7 = closure_2;
        obj1 = { variant: "text-md/normal", color: "text-default", children: null };
        tmp8 = closure_1;
        Text = closure_0(closure_2[8]).Text;
        obj3 = closure_1(closure_2[9]);
        tmp9 = closure_7;
        flag = true;
        obj1.children = obj3.parse(source.text, true, closure_7);
        tmp4 = jsx(Text, obj1, arg1);
      } else {
        tmp = jsx;
        tmp2 = View;
        obj = { style: null, accessibilityRole: "list", children: null };
        tmp3 = closure_0;
        obj.style = closure_0.list;
        items = source.items;
        obj.children = items.map(() => { /* body not rendered: F146612 */ });
        tmp4 = jsx(View, obj, arg1);
      }
      return tmp4;
    }
  }
  cResult[8] = tmp4.item;
  cResult[9] = tmp4.itemText;
  cResult[10] = tmp4.list;
  cResult[11] = tmp4.marker;
  cResult[12] = T;
  tmp8 = T;
}) : ((source) => {
  source = source.source;
  const tmp = closure_10();
  const list = tmp;
  let items = [source];
  const memo = react.useMemo(() => {
    const obj = ConjureMarkdownBlocks;
    return obj.splitMarkdownBlocks(source);
  }, items);
  let obj = {
    style: tmp.blocks,
    children: memo.map((kind, index) => {
      let items;
      let obj;
      let obj3;
      let tmp4;
      if ("text" === kind.kind) {
        obj2 = { variant: "text-md/normal", color: "text-default", children: obj3.parse(kind.text, true, obj) };
        let Text = Text_Text.Text;
        obj3 = MarkupUtilsDefault;
        tmp4 = hasOwnProperty(Text, obj2, index);
      } else {
        obj = {
          style: list.list,
          accessibilityRole: "list",
          children: items.map((children, index) => {
              let Text;
              let items;
              let items1;
              let obj4;
              let obj6;
              let obj7;
              const obj = { style: items, children: items1 };
              items = [closure_1_1.item, ];
              obj2 = { paddingLeft: children.depth * PX_16 };
              items[1] = obj2;
              const obj3 = { style: closure_1_1.marker, children: closure_2_5(source(dependencyMap[8]).Text, obj4) };
              obj4 = { variant: "text-md/normal", color: "text-default", children: children.marker };
              items1 = [closure_2_5(View, obj3), ];
              const obj5 = { style: closure_1_1.itemText, children: closure_2_5(Text, obj6) };
              obj6 = { variant: "text-md/normal", color: "text-default", children: obj7.parse(children.text, true, closure_2_8) };
              Text = source(dependencyMap[8]).Text;
              obj7 = closure_1(dependencyMap[9]);
              items1[1] = closure_2_5(View, obj5);
              return closure_2_6(View, obj, index);
            })
        };
        items = kind.items;
        tmp4 = hasOwnProperty(View, obj, index);
      }
      return tmp4;
    })
  };
  return closure_5(View, obj);
});
let closure_11 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let source;
  let streaming;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  ({ streaming, source } = arg0);
  if (cResult[0] !== streaming) {
    obj2 = { streaming };
    cResult[0] = streaming;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useConjureRevealedText;
  const text = tmpResult.useConjureRevealedText(source, tmp4).text;
  if (cResult[2] !== text) {
    const obj3 = { source: text };
    const tmp8 = hasOwnProperty(closure_11, obj3);
    cResult[2] = text;
    cResult[3] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[3];
  }
  return tmp5;
}) : ((arg0) => {
  let source;
  let streaming;
  ({ source, streaming } = arg0);
  const obj = useConjureRevealedText;
  obj2 = { source: obj.useConjureRevealedText(source, { streaming }).text };
  return hasOwnProperty(closure_11, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeMarkdown.tsx");

export default tmp5;
export { CONJURE_MARKUP_OPTIONS };
export const ConjureRevealedMarkdown = tmp6;