// _runtime/07241_ViewHolderCollection.js
import ViewHolder from "07239_ViewHolder.js";
import _slicedToArray from "metro/07185__.js";
import noop_mod from "metro/00019__.js";

require = fn;
let noop = fn(19);
({ useEffect: c3, useImperativeHandle: closure_4, useLayoutEffect: hasOwnProperty } = noop);
let noop = noop_mod;
const jsx = fn(21).jsx;

export const ViewHolderCollection = (data) => {
  data = data.data;
  ({
    renderStack,
    getLayout: dependencyMap,
    refHolder: _slicedToArray,
    onSizeChanged: closure_3,
    renderItem: closure_4,
    extraData: closure_5,
    onCommitLayoutEffect: noop,
    CellRendererComponent: jsx,
    ItemSeparatorComponent: closure_8,
    onCommitEffect: closure_9,
    horizontal,
  } = data);
  ({
    getAdjustmentMargin,
    currentStickyIndex: closure_11,
    hideStickyHeaderRelatedCell: closure_12,
    isInLastRow: closure_13,
    inverted: closure_14,
  } = data);
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
  closure_17 = data(7204).useRecyclerViewContext();
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
  renderItem(
    viewHolderCollectionRef,
    () => ({
      commitLayout() {
        closure_1_16((arg0) => arg0 + 1);
      },
    }),
    items3,
  );
  let tmp12 = data;
  if (data) {
    tmp12 = data.length > 0;
  }
  let tmp13;
  if (horizontal) {
    let width1;
    if (size != null) {
      width1 = size.width;
    }
    tmp13 = width1;
  }
  const size1 = { width: tmp13, height: null, marginTop: null, marginLeft: null, opacity: null };
  let height1;
  if (size != null) {
    height1 = size.height;
  }
  size1.height = height1;
  let adjustmentMargin;
  if (!horizontal) {
    adjustmentMargin = getAdjustmentMargin();
  }
  size1.marginTop = adjustmentMargin;
  let adjustmentMargin1;
  if (horizontal) {
    adjustmentMargin1 = getAdjustmentMargin();
  }
  size1.marginLeft = adjustmentMargin1;
  let num = 0;
  if (first > 0) {
    num = 1;
  }
  size1.opacity = num;
  let tmp19 = tmp12;
  if (tmp12) {
    tmp19 = size1;
  }
  const obj2 = { style: tmp19, children: null };
  if (size) {
    size = tmp12;
  }
  if (size) {
    const _Array = Array;
    size = Array.from(renderStack.entries(), (arg0) => {
      [tmp] = arg0;
      let tmp5;
      if (ItemSeparatorComponent) {
        if (!closure_1_13(tmp2)) {
          tmp5 = tmp3[tmp2 + 1];
        }
      }
      const obj = {
        index: tmp2,
        item: data[tmp2],
        trailingItem: tmp5,
        layout: null,
        refHolder: null,
        onSizeChanged: null,
        target: "Cell",
        renderItem: null,
        extraData: null,
        CellRendererComponent: null,
        ItemSeparatorComponent: null,
        horizontal: null,
        hidden: null,
        inverted: null,
      };
      const merged = Object.assign(dependencyMap(tmp2));
      obj.layout = {};
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
      return jsx(
        ViewHolder.ViewHolder,
        {
          index: tmp2,
          item: data[tmp2],
          trailingItem: tmp5,
          layout: null,
          refHolder: null,
          onSizeChanged: null,
          target: "Cell",
          renderItem: null,
          extraData: null,
          CellRendererComponent: null,
          ItemSeparatorComponent: null,
          horizontal: null,
          hidden: null,
          inverted: null,
        },
        tmp,
      );
    });
  }
  obj2.children = size;
  return jsx(data(7235).CompatView, { style: tmp19, children: null });
};
