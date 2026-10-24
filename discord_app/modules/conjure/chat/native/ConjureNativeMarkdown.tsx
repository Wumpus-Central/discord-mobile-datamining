// discord_app/modules/conjure/chat/native/ConjureNativeMarkdown.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import conjureMarkup from "conjureMarkup.tsx";
import ConjureMarkdownBlocks from "../ConjureMarkdownBlocks.tsx";
import useConjureRevealedText from "../useConjureRevealedText.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const CONJURE_MARKUP_OPTIONS = { allowList: true, allowHeading: true, allowLinks: true };
let obj2 = {};
const merged = Object.assign(CONJURE_MARKUP_OPTIONS);
obj2.allowList = false;
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4971);
const obj4 = { blocks: { gap: nativeDefault.space.PX_8 }, list: null, item: null, marker: null, itemText: null };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj4.list = { gap: nativeDefault.space.PX_4 };
obj4.item = { flexDirection: "row", alignItems: "flex-start" };
let obj6 = { gap: nativeDefault.space.PX_4 };
obj4.marker = { minWidth: nativeDefault.space.PX_20, marginRight: nativeDefault.space.PX_4 };
obj4.itemText = { flex: 1 };
let closure_9 = createStyles.createStyles(obj4);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureNativeMarkdown(source) {
      const cResult = require("c").c(16);
      source = source.source;
      let tmp4 = closure_9();
      _require = tmp4;
      if (cResult[0] !== source) {
        const splitMarkdownBlocksResult = tmp(12278).splitMarkdownBlocks(source);
        cResult[0] = source;
        cResult[1] = splitMarkdownBlocksResult;
        marker = splitMarkdownBlocksResult;
        const tmpResult = tmp(12278);
      } else {
        marker = cResult[1];
      }
      if (cResult[2] === marker) {
        if (cResult[3] === tmp4.item) {
          if (cResult[4] === tmp4.itemText) {
            if (cResult[5] === tmp4.list) {
              if (cResult[6] === tmp4.marker) {
                if (cResult[13] === tmp4.blocks) {
                  if (cResult[14] === tmp7) {
                    let tmp11 = cResult[15];
                  }
                  return tmp11;
                }
                obj2 = { style: tmp6, children: cResult[7] };
                const tmp14 = closure_4(View, obj2);
                cResult[13] = tmp4.blocks;
                cResult[14] = cResult[7];
                cResult[15] = tmp14;
                tmp11 = tmp14;
              }
            }
          }
        }
      }
      if (cResult[8] === tmp4.item) {
        if (cResult[9] === tmp4.itemText) {
          if (cResult[10] === tmp4.list) {
            if (cResult[11] === tmp4.marker) {
              let tmp8 = cResult[12];
            }
            const mapped = marker.map(tmp8);
            cResult[2] = marker;
            cResult[3] = tmp4.item;
            cResult[4] = tmp4.itemText;
            ({ list: tmp3[5], marker } = tmp4);
            cResult[6] = marker;
            cResult[7] = mapped;
          }
        }
      }
      const fn = function j(kind, arg1) {
        if ("text" === kind.kind) {
          obj2 = {
            variant: "text-md/normal",
            color: "text-default",
            children: conjureMarkup.parseConjureMarkup(kind.text, true, obj),
          };
          let tmp4 = React4(Text_Text.Text, obj2, arg1);
        } else {
          obj = { style: list.list, accessibilityRole: "list", children: null };
          let items = kind.items;
          obj.children = items.map((children, index) => {
            const obj = { style: null, children: null };
            const items = [list.item, { paddingLeft: children.depth * PX_16 }];
            obj.style = items;
            const obj3 = {
              style: list.marker,
              children: closure_2_4(closure_0(5234).Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: children.marker,
              }),
            };
            const items1 = [closure_2_4(View, obj3)];
            const obj5 = { style: list.itemText, children: null };
            const obj6 = {
              variant: "text-md/normal",
              color: "text-default",
              children: closure_0(11821).parseConjureMarkup(children.text, true, obj2),
            };
            obj5.children = closure_2_4(closure_0(5234).Text, obj6);
            items1[1] = closure_2_4(View, obj5);
            obj.children = items1;
            return closure_2_5(View, obj, index);
          });
          tmp4 = React4(View, obj, arg1);
        }
        return tmp4;
      };
      cResult[8] = tmp4.item;
      cResult[9] = tmp4.itemText;
      cResult[10] = tmp4.list;
      cResult[11] = tmp4.marker;
      cResult[12] = fn;
      tmp8 = fn;
      let obj = require("c");
      tmp = _require;
    }
  : function ConjureNativeMarkdown(source) {
      source = source.source;
      const tmp = closure_9();
      const list = tmp;
      let items = [source];
      const memo = noop.useMemo(() => ConjureMarkdownBlocks.splitMarkdownBlocks(source), items);
      return closure_4(View, {
        style: tmp.blocks,
        children: memo.map((kind, index) => {
          if ("text" === kind.kind) {
            obj2 = {
              variant: "text-md/normal",
              color: "text-default",
              children: conjureMarkup.parseConjureMarkup(kind.text, true, obj),
            };
            let tmp4 = React4(Text_Text.Text, obj2, index);
          } else {
            obj = { style: list.list, accessibilityRole: "list", children: null };
            let items = kind.items;
            obj.children = items.map((children, index) => {
              const obj = { style: null, children: null };
              const items = [list.item, { paddingLeft: children.depth * PX_16 }];
              obj.style = items;
              const obj3 = {
                style: list.marker,
                children: closure_2_4(source(dependencyMap[8]).Text, {
                  variant: "text-md/normal",
                  color: "text-default",
                  children: children.marker,
                }),
              };
              const items1 = [closure_2_4(View, obj3)];
              const obj5 = { style: list.itemText, children: null };
              const obj6 = {
                variant: "text-md/normal",
                color: "text-default",
                children: source(dependencyMap[9]).parseConjureMarkup(children.text, true, obj2),
              };
              obj5.children = closure_2_4(source(dependencyMap[8]).Text, obj6);
              items1[1] = closure_2_4(View, obj5);
              obj.children = items1;
              return closure_2_5(View, obj, index);
            });
            tmp4 = React4(View, obj, index);
          }
          return tmp4;
        }),
      });
    };
let closure_10 = tmp4;
ReactCompilerGating = fn(558);
const obj7 = { minWidth: nativeDefault.space.PX_20, marginRight: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeMarkdown.tsx");

export default tmp4;
export { CONJURE_MARKUP_OPTIONS };
export const ConjureRevealedMarkdown = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureRevealedMarkdown(arg0) {
      const cResult = c.c(4);
      ({ streaming, source } = arg0);
      if (cResult[0] !== streaming) {
        obj2 = { streaming };
        cResult[0] = streaming;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const text = useConjureRevealedText.useConjureRevealedText(source, tmp4).text;
      if (cResult[2] !== text) {
        const obj3 = { source: text };
        const tmp8 = React4(closure_10, obj3);
        cResult[2] = text;
        cResult[3] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  : function ConjureRevealedMarkdown(arg0) {
      ({ source, streaming } = arg0);
      return React4(closure_10, { source: useConjureRevealedText.useConjureRevealedText(source, { streaming }).text });
    };
