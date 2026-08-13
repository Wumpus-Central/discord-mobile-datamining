// _runtime/05718_useSecondaryProps.js
import get_ActivityIndicator from "get ActivityIndicator";
import noop from "noop";
import { useMemo } from "noop";
import { jsx } from "jsxProd";

let c3;
let obj1;
({ Animated: obj1, RefreshControl: c3 } = get_ActivityIndicator);

export const useSecondaryProps = function useSecondaryProps(ListHeaderComponent) {
  ListHeaderComponent = ListHeaderComponent.ListHeaderComponent;
  const ListHeaderComponentStyle = ListHeaderComponent.ListHeaderComponentStyle;
  const ListFooterComponent = ListHeaderComponent.ListFooterComponent;
  const ListFooterComponentStyle = ListHeaderComponent.ListFooterComponentStyle;
  const ListEmptyComponent = ListHeaderComponent.ListEmptyComponent;
  const ListEmptyComponentStyle = ListHeaderComponent.ListEmptyComponentStyle;
  const renderScrollComponent = ListHeaderComponent.renderScrollComponent;
  const refreshing = ListHeaderComponent.refreshing;
  const progressViewOffset = ListHeaderComponent.progressViewOffset;
  const onRefresh = ListHeaderComponent.onRefresh;
  const data = ListHeaderComponent.data;
  const refreshControl = ListHeaderComponent.refreshControl;
  const stickyHeaderConfig = ListHeaderComponent.stickyHeaderConfig;
  let invertedTransformStyle;
  if (ListHeaderComponent.inverted) {
    let obj = ListHeaderComponent(ListHeaderComponentStyle[3]);
    invertedTransformStyle = obj.getInvertedTransformStyle(tmp);
  }
  let items = [onRefresh, refreshing, progressViewOffset, refreshControl];
  const items1 = [ListHeaderComponent, ListHeaderComponentStyle, invertedTransformStyle];
  const items2 = [ListFooterComponent, ListFooterComponentStyle, invertedTransformStyle];
  const tmp6 = ListEmptyComponentStyle(() => {
    let tmp = refreshControl;
    if (!refreshControl) {
      let tmp3;
      if (onRefresh) {
        const obj = { refreshing: null, progressViewOffset: null, onRefresh: null };
        const _Boolean = Boolean;
        obj[0] = Boolean(refreshing);
        obj[1] = progressViewOffset;
        obj[2] = tmp2;
        tmp3 = renderScrollComponent(ListFooterComponentStyle, obj);
      }
      tmp = tmp3;
    }
    return tmp;
  }, items);
  const items3 = [ListEmptyComponent, data, invertedTransformStyle, ListEmptyComponentStyle];
  let tmp7 = ListEmptyComponentStyle(() => {
    let tmp2 = null;
    if (ListHeaderComponent) {
      const obj = { style: null, children: null };
      const items = [ListHeaderComponentStyle, invertedTransformStyle];
      obj[0] = items;
      obj[1] = ListHeaderComponent(ListHeaderComponentStyle[5]).getValidComponent(tmp);
      tmp2 = renderScrollComponent(ListHeaderComponent(ListHeaderComponentStyle[4]).CompatView, obj);
      const obj2 = ListHeaderComponent(ListHeaderComponentStyle[5]);
    }
    return tmp2;
  }, items1);
  let backdropComponent;
  const tmp8 = ListEmptyComponentStyle(() => {
    let tmp2 = null;
    if (ListFooterComponent) {
      const obj = { style: null, children: null };
      const items = [ListFooterComponentStyle, invertedTransformStyle];
      obj[0] = items;
      obj[1] = ListHeaderComponent(ListHeaderComponentStyle[5]).getValidComponent(tmp);
      tmp2 = renderScrollComponent(ListHeaderComponent(ListHeaderComponentStyle[4]).CompatView, obj);
      const obj2 = ListHeaderComponent(ListHeaderComponentStyle[5]);
    }
    return tmp2;
  }, items2);
  if (stickyHeaderConfig != null) {
    backdropComponent = stickyHeaderConfig.backdropComponent;
  }
  const items4 = [backdropComponent, invertedTransformStyle];
  obj = {
    refreshControl: tmp6,
    renderHeader: tmp7,
    renderFooter: tmp8,
    renderEmpty: ListEmptyComponentStyle(() => {
      if (ListEmptyComponent) {
        let obj = ListHeaderComponent(ListHeaderComponentStyle[5]);
        const validComponent = obj.getValidComponent(tmp);
        if (invertedTransformStyle) {
          obj = { style: null, children: null };
          const items = [ListEmptyComponentStyle, tmp5];
          obj[0] = items;
          obj[1] = validComponent;
          let tmp7 = renderScrollComponent(ListHeaderComponent(ListHeaderComponentStyle[4]).CompatView, obj);
        } else {
          tmp7 = validComponent;
        }
        return tmp7;
      }
      return null;
    }, items3),
    CompatScrollView: null,
    renderStickyHeaderBackdrop: null
  };
  const items5 = [renderScrollComponent];
  const tmp9 = ListEmptyComponentStyle(() => {
    if (ListEmptyComponent) {
      let obj = ListHeaderComponent(ListHeaderComponentStyle[5]);
      const validComponent = obj.getValidComponent(tmp);
      if (invertedTransformStyle) {
        obj = { style: null, children: null };
        const items = [ListEmptyComponentStyle, tmp5];
        obj[0] = items;
        obj[1] = validComponent;
        let tmp7 = renderScrollComponent(ListHeaderComponent(ListHeaderComponentStyle[4]).CompatView, obj);
      } else {
        tmp7 = validComponent;
      }
      return tmp7;
    }
    return null;
  }, items3);
  obj[4] = ListEmptyComponentStyle(() => {
    if (typeof renderScrollComponent === "function") {
      if (!tmpResult.isComponentClass(tmp3)) {
        let CompatAnimatedScroller = ListEmptyComponent.forwardRef((arg0, ref) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.ref = ref;
          return callback(obj);
        });
        CompatAnimatedScroller.displayName = "CustomScrollView";
      }
      return ListFooterComponent.createAnimatedComponent(CompatAnimatedScroller);
    }
    CompatAnimatedScroller = ListHeaderComponent(ListHeaderComponentStyle[6]).CompatAnimatedScroller;
    if (renderScrollComponent) {
      CompatAnimatedScroller = tmp3;
    }
  }, items5);
  obj[5] = ListEmptyComponentStyle(() => {
    let backdropComponent;
    if (stickyHeaderConfig != null) {
      backdropComponent = tmp.backdropComponent;
    }
    let tmp4Result = null;
    if (backdropComponent) {
      const obj = { style: null, children: null };
      const items = [{ position: "absolute", inset: 0, pointerEvents: "none" }, invertedTransformStyle];
      obj[0] = items;
      let backdropComponent1;
      if (tmp != null) {
        backdropComponent1 = tmp.backdropComponent;
      }
      obj[1] = ListHeaderComponent(ListHeaderComponentStyle[5]).getValidComponent(backdropComponent1);
      tmp4Result = renderScrollComponent(ListHeaderComponent(ListHeaderComponentStyle[4]).CompatView, obj);
      const obj2 = ListHeaderComponent(ListHeaderComponentStyle[5]);
      const tmp4 = renderScrollComponent;
    }
    return tmp4Result;
  }, items4);
  return obj;
};