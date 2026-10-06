// === Module 6403: ViewHolder ===

// Module 6403 (ViewHolder)
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

const require = globalThis.__r;
let _require, size;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useCallback: c2, useLayoutEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);
react = react_mod;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);

export const ViewHolder = react.memo((index) => {
  let CellRendererComponent;
  let ItemSeparatorComponent;
  let closure_0;
  let extraData;
  let height;
  let hidden;
  let inverted;
  let items4;
  let layout;
  let num;
  let onSizeChanged;
  let str2;
  let width;
  const tmp = extraData(null);
  _require = tmp;
  index = index.index;
  const refHolder = index.refHolder;
  ({ layout, onSizeChanged } = index);
  const renderItem = index.renderItem;
  extraData = index.extraData;
  const item = index.item;
  const target = index.target;
  ({ CellRendererComponent, ItemSeparatorComponent } = index);
  const trailingItem = index.trailingItem;
  const horizontal = index.horizontal;
  const items = [index, refHolder];
  ({ hidden, inverted } = index);
  let tmp2 = onSizeChanged(() => {
    const result = refHolder.set(index, closure_0);
    return () => {
      if (refHolder.get(index) === closure_1_0) {
        refHolder.delete(index);
      }
    };
  }, items);
  const items1 = [index, onSizeChanged];
  const items2 = [ItemSeparatorComponent, item, trailingItem];
  const tmp3 = refHolder((nativeEvent) => {
    if (onSizeChanged != null) {
      tmp(index, nativeEvent.nativeEvent.layout);
    }
  }, items1);
  const items3 = [item, extraData, target, renderItem];
  let invertedTransformStyle;
  const tmp4 = renderItem(() => {
    let tmp2 = null;
    if (ItemSeparatorComponent) {
      tmp2 = null;
      if (undefined !== trailingItem) {
        const obj = { leadingItem: item, trailingItem: tmp3 };
        tmp2 = metroRequire(tmp, obj);
      }
    }
    return tmp2;
  }, items2);
  const tmp5 = renderItem(() => {
    let tmpResult;
    if (renderItem != null) {
      const obj = { item, index, extraData, target };
      tmpResult = tmp(obj);
    }
    if (tmpResult == null) {
      tmpResult = null;
    }
    return tmpResult;
  }, items3);
  if (inverted) {
    let obj = require("module_6366");
    invertedTransformStyle = obj.getInvertedTransformStyle(horizontal);
  }
  let str = "column";
  if (horizontal) {
    str = "row";
  }
  size = { flexDirection: str, position: str2, width, height, minHeight: null, minWidth: null, maxHeight: null, maxWidth: null, left: null, top: null, opacity: num };
  str2 = "absolute";
  if ("StickyHeader" === target) {
    str2 = "relative";
  }
  width = undefined;
  if (layout.enforcedWidth) {
    width = layout.width;
  }
  height = undefined;
  if (layout.enforcedHeight) {
    height = layout.height;
  }
  ({ minHeight: obj2.minHeight, minWidth: obj2.minWidth, maxHeight: obj2.maxHeight, maxWidth: obj2.maxWidth, x: obj2.left, y: obj2.top } = layout);
  num = 1;
  if (hidden) {
    num = 0;
  }
  const merged = Object.assign(invertedTransformStyle);
  if (CellRendererComponent == null) {
    CellRendererComponent = require("react-native").CompatView;
  }
  const obj3 = { ref: tmp, onLayout: tmp3, style: size, index, children: items4 };
  items4 = [tmp5, tmp4];
  return target(CellRendererComponent, obj3);
}, (index, index2) => {
  let tmp = index.index === index2.index;
  if (tmp) {
    const layout = index.layout;
    const layout2 = index2.layout;
    tmp = layout.x === layout2.x && layout.y === layout2.y && layout.width === layout2.width && layout.height === layout2.height && layout.enforcedWidth === layout2.enforcedWidth && layout.enforcedHeight === layout2.enforcedHeight && layout.minWidth === layout2.minWidth && layout.minHeight === layout2.minHeight && layout.maxWidth === layout2.maxWidth && layout.maxHeight === layout2.maxHeight;
  }
  if (tmp) {
    tmp = index.refHolder === index2.refHolder;
  }
  if (tmp) {
    tmp = index.onSizeChanged === index2.onSizeChanged;
  }
  if (tmp) {
    tmp = index.extraData === index2.extraData;
  }
  if (tmp) {
    tmp = index.target === index2.target;
  }
  if (tmp) {
    tmp = index.item === index2.item;
  }
  if (tmp) {
    tmp = index.renderItem === index2.renderItem;
  }
  if (tmp) {
    tmp = index.CellRendererComponent === index2.CellRendererComponent;
  }
  if (tmp) {
    tmp = index.ItemSeparatorComponent === index2.ItemSeparatorComponent;
  }
  if (tmp) {
    tmp = index.trailingItem === index2.trailingItem;
  }
  if (tmp) {
    tmp = index.horizontal === index2.horizontal;
  }
  if (tmp) {
    tmp = index.hidden === index2.hidden;
  }
  if (tmp) {
    tmp = index.inverted === index2.inverted;
  }
  return tmp;
});