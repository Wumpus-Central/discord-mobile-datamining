// === Module 16945: VibegrationsNativeMarkdown ===

// Module 16945 (VibegrationsNativeMarkdown)
import nativeDefault from "native" /* 576 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4712 */;
import Text_Text from "Text/Text" /* 4718 */;
import VibegrationsMarkdownBlocks from "VibegrationsMarkdownBlocks" /* 16946 */;
import useVibegrationsRevealedText from "useVibegrationsRevealedText" /* 16947 */;
import noop from "module_19" /* 19 */;

require = fn;
class VibegrationsNativeMarkdown {
  constructor(arg0) {
    source = global.source;
    closure_1 = undefined;
    tmp = closure_10();
    closure_1 = tmp;
    items = [];
    items[0] = source;
    memo = closure_3.useMemo(() => VibegrationsMarkdownBlocks.splitMarkdownBlocks(source), items);
    obj = {
      style: tmp.blocks,
      children: memo.map((kind, index) => {
            if ("text" === kind.kind) {
              obj2 = { variant: "text-md/normal", color: "text-default", children: MarkupUtilsDefault.parse(kind.text, true, obj) };
              let tmp4 = hasOwnProperty(Text_Text.Text, obj2, index);
            } else {
              obj = { style: list.list, accessibilityRole: "list", children: null };
              let items = kind.items;
              obj.children = items.map((children, index) => {
                const obj = { style: null, children: null };
                const items = [list.item, { paddingLeft: children.depth * PX_16 }];
                obj.style = items;
                const obj3 = { style: list.marker, children: closure_2_5(source(4718).Text, { variant: "text-md/normal", color: "text-default", children: children.marker }) };
                const items1 = [closure_2_5(View, obj3), ];
                const obj5 = { style: list.itemText, children: null };
                const obj6 = { variant: "text-md/normal", color: "text-default", children: closure_1(4712).parse(children.text, true, obj2) };
                obj5.children = closure_2_5(source(4718).Text, obj6);
                items1[1] = closure_2_5(View, obj5);
                obj.children = items1;
                return closure_2_6(View, obj, index);
              });
              tmp4 = hasOwnProperty(View, obj, index);
            }
            return tmp4;
          })
    };
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const VIBEGRATIONS_MARKUP_OPTIONS = { allowList: true, allowHeading: true, allowLinks: true };
let obj2 = {};
const merged = Object.assign(VIBEGRATIONS_MARKUP_OPTIONS);
obj2.allowList = false;
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4722);
const obj4 = { blocks: { gap: nativeDefault.space.PX_8 }, list: null, item: null, marker: null, itemText: null };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj4.list = { gap: nativeDefault.space.PX_4 };
obj4.item = { flexDirection: "row", alignItems: "flex-start" };
let obj6 = { gap: nativeDefault.space.PX_4 };
obj4.marker = { minWidth: nativeDefault.space.PX_20, marginRight: nativeDefault.space.PX_4 };
obj4.itemText = { flex: 1 };
let closure_10 = createStyles.createStyles(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeMarkdown.tsx");

export default VibegrationsNativeMarkdown;
export { VIBEGRATIONS_MARKUP_OPTIONS };
export const VibegrationsRevealedMarkdown = function VibegrationsRevealedMarkdown(arg0) {
  ({ source, streaming } = arg0);
  return hasOwnProperty(VibegrationsNativeMarkdown, { source: useVibegrationsRevealedText.useVibegrationsRevealedText(source, { streaming }).text });
};