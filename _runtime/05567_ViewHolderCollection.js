// _runtime/05567_ViewHolderCollection.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import closure_6 from "noop";
import { jsx } from "jsxProd";

let c3;
let c4;
let c5;
const require = arg1;
({ useEffect: c3, useImperativeHandle: c4, useLayoutEffect: c5 } = noop);

export const ViewHolderCollection = (data) => {
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let _slicedToArray;
  let closure_3;
  let closure_4;
  let closure_5;
  let closure_6;
  let closure_8;
  let closure_9;
  let dependencyMap;
  let getAdjustmentMargin;
  let getChildContainerLayout;
  let horizontal;
  let jsx;
  let renderStack;
  let viewHolderCollectionRef;
  data = data.data;
  ({ renderStack, getLayout: dependencyMap, refHolder: _slicedToArray, onSizeChanged: closure_3, renderItem: closure_4, extraData: closure_5, onCommitLayoutEffect: closure_6, CellRendererComponent: jsx, ItemSeparatorComponent: closure_8, onCommitEffect: closure_9, horizontal } = data);
  ({ getAdjustmentMargin, currentStickyIndex: closure_11, hideStickyHeaderRelatedCell: closure_12, isInLastRow: closure_13, inverted: closure_14 } = data);
  ({ viewHolderCollectionRef, getChildContainerLayout } = data);
  const tmp = callback(React.useState(0), 2);
  const first = tmp[0];
  let closure_16 = tmp3;
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
  let obj = data(5530);
  let closure_17 = obj.useRecyclerViewContext();
  const items = [width];
  callback4(() => {
    if (first > 0) {
      if (closure_17 != null) {
        obj.layout();
      }
      obj = closure_17;
    }
  }, items);
  const items1 = [first];
  callback4(() => {
    if (first > 0) {
      if (closure_6 != null) {
        tmp();
      }
    }
  }, items1);
  const items2 = [first];
  callback2(() => {
    if (first > 0) {
      if (closure_9 != null) {
        tmp();
      }
    }
  }, items2);
  const items3 = [tmp[1]];
  callback3(viewHolderCollectionRef, () => ({
    commitLayout() {
      callback((arg0) => arg0 + 1);
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
  obj = { width: tmp13, height: null, marginTop: null, marginLeft: null, opacity: null };
  let height1;
  if (size != null) {
    height1 = size.height;
  }
  obj[1] = height1;
  let adjustmentMargin;
  if (!horizontal) {
    adjustmentMargin = getAdjustmentMargin();
  }
  obj[2] = adjustmentMargin;
  let adjustmentMargin1;
  if (horizontal) {
    adjustmentMargin1 = getAdjustmentMargin();
  }
  obj[3] = adjustmentMargin1;
  let num = 0;
  if (first > 0) {
    num = 1;
  }
  obj[4] = num;
  let tmp19 = tmp12;
  if (tmp12) {
    tmp19 = obj;
  }
  obj = { style: tmp19, children: null };
  if (size) {
    size = tmp12;
  }
  if (size) {
    const _Array = Array;
    size = Array.from(renderStack.entries(), (arg0) => {
      let tmp;
      [tmp, ] = arg0;
      let tmp5;
      if (closure_8) {
        if (!callback2(tmp2)) {
          tmp5 = tmp3[tmp2 + 1];
        }
      }
      let obj = { index: tmp2, item: data[tmp2], trailingItem: tmp5, layout: null, refHolder: null, onSizeChanged: null, target: "Cell", renderItem: null, extraData: null, CellRendererComponent: null, ItemSeparatorComponent: null, horizontal: null, hidden: null, inverted: null };
      obj = {};
      const merged = Object.assign(callback(tmp2));
      obj[3] = obj;
      obj[4] = _slicedToArray;
      obj[5] = closure_3;
      obj[7] = closure_4;
      obj[8] = closure_5;
      obj[9] = closure_7;
      obj[10] = closure_8;
      obj[11] = horizontal;
      let tmp11 = closure_12;
      if (closure_12) {
        tmp11 = closure_11 === tmp2;
      }
      obj[12] = tmp11;
      obj[13] = closure_14;
      return outer1_7(data(outer1_1[5]).ViewHolder, obj, tmp);
    });
  }
  obj[1] = size;
  return jsx(data(5561).CompatView, { style: tmp19, children: null });
};