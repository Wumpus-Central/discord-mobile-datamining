// === Module 6913: ViewHolderCollection ===

// Module 6913 (ViewHolderCollection)
import ViewHolder from "ViewHolder" /* 6911 */;
import _slicedToArray from "module_6857" /* 6857 */;
import noop from "module_19" /* 19 */;

require = fn;
let noop = fn(19);
({ useEffect: c3, useImperativeHandle: closure_4, useLayoutEffect: hasOwnProperty } = noop);
const jsx = fn(21).jsx;

export const ViewHolderCollection = (data) => {
  data = data.data;
  ({ renderStack, getLayout: dependencyMap, refHolder: _slicedToArray, onSizeChanged: closure_3, renderItem: closure_4, extraData: closure_5, onCommitLayoutEffect: noop, CellRendererComponent: jsx, ItemSeparatorComponent: closure_8, onCommitEffect: closure_9, horizontal } = data);
  ({ getAdjustmentMargin, currentStickyIndex: closure_11, hideStickyHeaderRelatedCell: closure_12, isInLastRow: closure_13, inverted: closure_14 } = data);
  ({ viewHolderCollectionRef, getChildContainerLayout } = data);
  const tmp = _slicedToArray(noop.useState(0), 2);
  const first = tmp[0];
  closure_16 = tmp3;
  let size = getChildContainerLayout();
  if (horizontal) {
    let height;
    if (!tmp4) {
      height = size.height;
    }
    let width = height;
  } else if (!tmp4) {
    width = size.width;
  }
  let obj = data(6876);
  closure_17 = obj.useRecyclerViewContext();
  const items = [width];
  extraData(() => {
    if (first > 0) {
      if (closure_17 != null) {
        closure_17.layout();
      }
    }
  }, items);
  const items1 = [first];
  extraData(() => {
    if (first > 0) {
      if (noop != null) {
        tmp();
      }
    }
  }, items1);
  const items2 = [first];
  onSizeChanged(() => {
    if (first > 0) {
      if (closure_1_9 != null) {
        tmp();
      }
    }
  }, items2);
  const items3 = [tmp[1]];
  renderItem(viewHolderCollectionRef, () => ({
    commitLayout() {
      closure_1_16((arg0) => arg0 + 1);
    }
  }), items3);
  let tmp12 = data;
  if (data) {
    tmp12 = data.length > 0;
  }
  let tmp13;
  if (horizontal) {
    width = undefined;
    if (size != null) {
      width = size.width;
    }
    tmp13 = width;
  }
  size = { width: tmp13, height: null, marginTop: null, marginLeft: null, opacity: null };
  let height1;
  if (size != null) {
    height1 = size.height;
  }
  size.height = height1;
  let adjustmentMargin;
  if (!horizontal) {
    adjustmentMargin = getAdjustmentMargin();
  }
  size.marginTop = adjustmentMargin;
  let adjustmentMargin1;
  if (horizontal) {
    adjustmentMargin1 = getAdjustmentMargin();
  }
  size.marginLeft = adjustmentMargin1;
  let num = 0;
  if (first > 0) {
    num = 1;
  }
  size.opacity = num;
  let tmp19 = tmp12;
  if (tmp12) {
    tmp19 = size;
  }
  obj = { style: tmp19, children: null };
  if (size) {
    size = tmp12;
  }
  if (size) {
    const _Array = Array;
    size = Array.from(renderStack.entries(), (arg0) => {
      [tmp, ] = arg0;
      let tmp5;
      if (ItemSeparatorComponent) {
        if (!closure_1_13(tmp2)) {
          tmp5 = tmp3[tmp2 + 1];
        }
      }
      let obj = { index: tmp2, item: data[tmp2], trailingItem: tmp5, layout: null, refHolder: null, onSizeChanged: null, target: "Cell", renderItem: null, extraData: null, CellRendererComponent: null, ItemSeparatorComponent: null, horizontal: null, hidden: null, inverted: null };
      obj = {};
      const merged = Object.assign(dependencyMap(tmp2));
      obj.layout = obj;
      obj.refHolder = refHolder;
      obj.onSizeChanged = onSizeChanged;
      obj.renderItem = renderItem;
      obj.extraData = extraData;
      obj.CellRendererComponent = CellRendererComponent;
      obj.ItemSeparatorComponent = ItemSeparatorComponent;
      obj.horizontal = horizontal;
      let tmp11 = closure_1_12;
      if (closure_1_12) {
        tmp11 = closure_1_11 === tmp2;
      }
      obj.hidden = tmp11;
      obj.inverted = inverted;
      return jsx(ViewHolder.ViewHolder, {}, tmp);
    });
  }
  obj.children = size;
  return jsx(data(6907).CompatView, { style: tmp19, children: null });
};