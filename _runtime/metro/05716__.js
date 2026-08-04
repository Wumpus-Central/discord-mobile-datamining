import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let StyleSheet;
let obj1;
({ StyleSheet, View: obj1 } = get_ActivityIndicator);
const styles = StyleSheet.create({ page: { minHeight: "100%" }, card: { flex: 1, overflow: "hidden" } });

export default importAllResult.forwardRef(function CardSheet(layout, ref) {
  let enabled;
  let style;
  layout = layout.layout;
  ({ enabled, style } = layout);
  const merged = Object.assign(layout, Object.create(null));
  let importAllResult;
  let closure_2;
  let tmp2 = layout(importAllResult.useState(false), 2);
  importAllResult = tmp2[1];
  let tmp3 = layout(importAllResult.useState("auto"), 2);
  closure_2 = tmp3[1];
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({ setPointerEvents: closure_2 }));
  const items = [, ];
  ({ height: arr[0], width: arr[1] } = layout);
  const effect = importAllResult.useEffect(() => {
    if (typeof document !== "undefined") {
      const _document3 = document;
      if (document.body) {
        const _document = document;
        const _document2 = document;
        let tmp3 = document.body.clientWidth === layout.width;
        if (tmp3) {
          tmp3 = tmp === layout.height;
        }
        closure_1(tmp3);
        const tmp2 = closure_1;
      }
    }
  }, items);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.pointerEvents = tmp3[0];
  if (enabled) {
    if (tmp2[0]) {
      let card = closure_4.page;
    }
    const items1 = [card, style];
    obj.style = items1;
    return <closure_2 {...obj} />;
  }
  card = closure_4.card;
});