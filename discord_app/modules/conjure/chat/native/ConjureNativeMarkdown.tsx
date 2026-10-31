// discord_app/modules/conjure/chat/native/ConjureNativeMarkdown.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import conjureMarkup from "conjureMarkup.tsx";
import ConjureMarkdownBlocks from "../ConjureMarkdownBlocks.tsx";
import useConjureRevealedText from "../useConjureRevealedText.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class ConjureNativeMarkdown {
  constructor(arg0) {
    source = global.source;
    closure_1 = undefined;
    tmp = closure_9();
    closure_1 = tmp;
    items = [];
    items[0] = source;
    memo = closure_2.useMemo(() => ConjureMarkdownBlocks.splitMarkdownBlocks(source), items);
    obj = {
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
              children: closure_2_4(source(dependencyMap[6]).Text, {
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
              children: source(dependencyMap[7]).parseConjureMarkup(children.text, true, obj2),
            };
            obj5.children = closure_2_4(source(dependencyMap[6]).Text, obj6);
            items1[1] = closure_2_4(View, obj5);
            obj.children = items1;
            return closure_2_5(View, obj, index);
          });
          tmp4 = React4(View, obj, index);
        }
        return tmp4;
      }),
    };
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const CONJURE_MARKUP_OPTIONS = { allowList: true, allowHeading: true, allowLinks: true };
let obj2 = {};
const merged = Object.assign(CONJURE_MARKUP_OPTIONS);
obj2.allowList = false;
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(5014);
const obj4 = { blocks: { gap: nativeDefault.space.PX_8 }, list: null, item: null, marker: null, itemText: null };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj4.list = { gap: nativeDefault.space.PX_4 };
obj4.item = { flexDirection: "row", alignItems: "flex-start" };
let obj6 = { gap: nativeDefault.space.PX_4 };
obj4.marker = { minWidth: nativeDefault.space.PX_20, marginRight: nativeDefault.space.PX_4 };
obj4.itemText = { flex: 1 };
const React7 = createStyles.createStyles(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeMarkdown.tsx");

export default ConjureNativeMarkdown;
export { CONJURE_MARKUP_OPTIONS };
export function ConjureRevealedMarkdown(arg0) {
  ({ source, streaming } = arg0);
  return React4(ConjureNativeMarkdown, {
    source: useConjureRevealedText.useConjureRevealedText(source, { streaming }).text,
  });
}
