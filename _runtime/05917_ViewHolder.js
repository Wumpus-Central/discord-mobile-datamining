// === Module 5917: ViewHolder ===

// Module 5917 (ViewHolder)
import noopDefault from "noop" /* 19 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

({ useCallback: obj1, useLayoutEffect: c3, useMemo: c4, useRef: c5 } = noop);
({ jsx: closure_6, jsxs: error } = jsxProd);

export const ViewHolder = noopDefault.memo((index) => {
  const ref = extraData(null);
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
  onSizeChanged(() => {
    const result = refHolder.set(index, ref);
    return () => {
      if (closure_2.get(closure_1) === closure_0) {
        closure_2.delete(closure_1);
      }
    };
  }, items);
  const items1 = [index, onSizeChanged];
  const items2 = [ItemSeparatorComponent, item, trailingItem];
  const onLayout = refHolder((nativeEvent) => {
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
        const obj = { leadingItem: null, trailingItem: null };
        obj[0] = item;
        obj[1] = tmp3;
        tmp2 = item(tmp, obj);
      }
    }
    return tmp2;
  }, items2);
  if (inverted) {
    let style = ref(index[2]);
    invertedTransformStyle = style.getInvertedTransformStyle(horizontal);
  }
  let str = "column";
  if (horizontal) {
    str = "row";
  }
  style = { flexDirection: str, position: null, width: null, height: null, minHeight: null, minWidth: null, maxHeight: null, maxWidth: null, left: null, top: null, opacity: null };
  let str2 = "absolute";
  if ("StickyHeader" === target) {
    str2 = "relative";
  }
  style[1] = str2;
  let width;
  if (layout.enforcedWidth) {
    width = layout.width;
  }
  style[2] = width;
  let height;
  if (layout.enforcedHeight) {
    height = layout.height;
  }
  style[3] = height;
  ({ minHeight: obj2[4], minWidth: obj2[5], maxHeight: obj2[6], maxWidth: obj2[7], x: obj2[8], y: obj2[9] } = layout);
  let num = 1;
  if (hidden) {
    num = 0;
  }
  style[10] = num;
  const merged = Object.assign(invertedTransformStyle);
  if (CellRendererComponent == null) {
    CellRendererComponent = ref(index[3]).CompatView;
  }
  const children = [
    renderItem(() => {
      let tmpResult;
      if (renderItem != null) {
        const obj = { item: null, index: null, extraData: null, target: null };
        obj[0] = item;
        obj[1] = index;
        obj[2] = extraData;
        obj[3] = target;
        tmpResult = tmp(obj);
      }
      if (tmpResult == null) {
        tmpResult = null;
      }
      return tmpResult;
    }, items3),
    tmp4
  ];
  return target(CellRendererComponent, { ref, onLayout, style, index, children });
}, (index, index2) => {
  let tmp = index.index === index2.index;
  if (tmp) {
    const layout = index.layout;
    const layout2 = index2.layout;
    tmp = layout.x === layout2.x && layout.y === layout2.y && layout.width === layout2.width && layout.height === layout2.height && layout.enforcedWidth === layout2.enforcedWidth && layout.enforcedHeight === layout2.enforcedHeight && layout.minWidth === layout2.minWidth && layout.minHeight === layout2.minHeight && layout.maxWidth === layout2.maxWidth && layout.maxHeight === layout2.maxHeight;
    const tmp2 = layout.x === layout2.x && layout.y === layout2.y && layout.width === layout2.width && layout.height === layout2.height && layout.enforcedWidth === layout2.enforcedWidth && layout.enforcedHeight === layout2.enforcedHeight && layout.minWidth === layout2.minWidth && layout.minHeight === layout2.minHeight && layout.maxWidth === layout2.maxWidth && layout.maxHeight === layout2.maxHeight;
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