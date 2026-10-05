// === Module 6398: ViewHolderCollection ===

// Module 6398 (ViewHolderCollection)
import Fragment from "Fragment" /* 21 */;
import ViewHolder2 from "ViewHolder" /* 6396 */;
import _slicedToArray from "_slicedToArray" /* 6342 */;
import react_mod from "react" /* 19 */;

let size;

let c3;
let closure_4;
let hasOwnProperty;
let react = react_mod;
({ useEffect: c3, useImperativeHandle: closure_4, useLayoutEffect: hasOwnProperty } = react);
react = react_mod;
const jsx = Fragment.jsx;

export const ViewHolderCollection = (data) => {
  let CellRendererComponent;
  let ItemSeparatorComponent;
  let adjustmentMargin;
  let adjustmentMargin1;
  let closure_11;
  let closure_13;
  let closure_14;
  let closure_3;
  let closure_4;
  let closure_5;
  let closure_8;
  let closure_9;
  let first;
  let getAdjustmentMargin;
  let getChildContainerLayout;
  let height1;
  let horizontal;
  let inverted;
  let num;
  let refHolder;
  let renderStack;
  let tmp3;
  let viewHolderCollectionRef;
  let width;
  data = data.data;
  ({ renderStack, getLayout: dependencyMap, refHolder: _slicedToArray, onSizeChanged: closure_3, renderItem: closure_4, extraData: closure_5, onCommitLayoutEffect: react, CellRendererComponent: jsx, ItemSeparatorComponent: closure_8, onCommitEffect: closure_9, horizontal } = data);
  ({ getAdjustmentMargin, currentStickyIndex: closure_11, hideStickyHeaderRelatedCell: closure_12, isInLastRow: closure_13, inverted: closure_14 } = data);
  ({ viewHolderCollectionRef, getChildContainerLayout } = data);
  [first, tmp3] = react.useState(0);
  let closure_16 = tmp3;
  size = getChildContainerLayout();
  let tmp4 = size == null;
  if (horizontal) {
    let height;
    if (!tmp4) {
      height = size.height;
    }
    width = height;
  } else if (!tmp4) {
    width = size.width;
  }
  let tmp6 = data;
  const obj = data(6361);
  let closure_17 = obj.useRecyclerViewContext();
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
      if (react != null) {
        tmp();
      }
    }
  }, items1);
  const items2 = [first];
  onSizeChanged(() => {
    if (first > 0) {
      if (closure_9 != null) {
        tmp();
      }
    }
  }, items2);
  const items3 = [tmp3];
  renderItem(viewHolderCollectionRef, () => ({
    commitLayout() {
      closure_1_16((arg0) => arg0 + 1);
    }
  }), items3);
  const tmp12 = data && data.length > 0;
  let tmp13;
  if (horizontal) {
    let width1;
    if (size != null) {
      width1 = size.width;
    }
    tmp13 = width1;
  }
  const size1 = { width: tmp13, height: height1, marginTop: adjustmentMargin, marginLeft: adjustmentMargin1, opacity: num };
  height1 = undefined;
  if (size != null) {
    height1 = size.height;
  }
  adjustmentMargin = undefined;
  if (!horizontal) {
    adjustmentMargin = getAdjustmentMargin();
  }
  adjustmentMargin1 = undefined;
  if (horizontal) {
    adjustmentMargin1 = getAdjustmentMargin();
  }
  num = 0;
  if (first > 0) {
    num = 1;
  }
  let tmp19 = tmp12;
  const CompatView = tmp6(6392).CompatView;
  if (tmp12) {
    tmp19 = size1;
  }
  if (size) {
    size = tmp12;
  }
  if (size) {
    const _Array = Array;
    size = Array.from(renderStack.entries(), (arg0) => {
      let tmp;
      [tmp, ] = arg0;
      let tmp6;
      const tmp4 = data[tmp2];
      if (ItemSeparatorComponent) {
        if (!closure_13(tmp2)) {
          tmp6 = tmp3[tmp2 + 1];
        }
      }
      const obj2 = {};
      const ViewHolder = ViewHolder2.ViewHolder;
      const merged = Object.assign(dependencyMap(tmp2));
      return <ViewHolder key={tmp} index={tmp2} item={tmp4} trailingItem={tmp6} layout={obj2} refHolder={_slicedToArray} onSizeChanged={onSizeChanged} target="Cell" renderItem={renderItem} extraData={extraData} CellRendererComponent={jsx} ItemSeparatorComponent={ItemSeparatorComponent} horizontal={horizontal} hidden={closure_12 && closure_11 === tmp2} inverted={inverted} />;
    });
  }
  return <CompatView style={tmp19}>{size}</CompatView>;
};