// === Module 7148: ? ===

// Module 7148
import _mod19 from "module_19" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import CompatView from "CompatView" /* 7149 */;
import _mod7150 from "module_7150" /* 7150 */;
import CompatScroller from "CompatScroller" /* 7151 */;
import get_ActivityIndicator from "module_17" /* 17 */;

const noop = _mod19;

({ Animated: c2, RefreshControl: c3 } = get_ActivityIndicator);
const useMemo = _mod19.useMemo;
const jsx = jsxProd.jsx;

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
    invertedTransformStyle = ListHeaderComponent(ListHeaderComponentStyle[3]).getInvertedTransformStyle(tmp);
    let obj = ListHeaderComponent(ListHeaderComponentStyle[3]);
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
        obj.refreshing = Boolean(refreshing);
        obj.progressViewOffset = progressViewOffset;
        obj.onRefresh = tmp2;
        tmp3 = <React3 refreshing={null} progressViewOffset={null} onRefresh={null} />;
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
      obj.style = items;
      obj.children = _mod7150.getValidComponent(tmp);
      tmp2 = jsx(CompatView.CompatView, { style: null, children: null });
    }
    return tmp2;
  }, items1);
  let backdropComponent;
  const tmp8 = ListEmptyComponentStyle(() => {
    let tmp2 = null;
    if (ListFooterComponent) {
      const obj = { style: null, children: null };
      const items = [ListFooterComponentStyle, invertedTransformStyle];
      obj.style = items;
      obj.children = _mod7150.getValidComponent(tmp);
      tmp2 = jsx(CompatView.CompatView, { style: null, children: null });
    }
    return tmp2;
  }, items2);
  if (stickyHeaderConfig != null) {
    backdropComponent = stickyHeaderConfig.backdropComponent;
  }
  const items4 = [backdropComponent, invertedTransformStyle];
  let obj2 = {
    refreshControl: tmp6,
    renderHeader: tmp7,
    renderFooter: tmp8,
    renderEmpty: ListEmptyComponentStyle(() => {
      if (ListEmptyComponent) {
        const validComponent = _mod7150.getValidComponent(tmp);
        if (invertedTransformStyle) {
          const obj2 = { style: null, children: null };
          const items = [ListEmptyComponentStyle, tmp5];
          obj2.style = items;
          obj2.children = validComponent;
          let tmp7 = jsx(CompatView.CompatView, { style: null, children: null });
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
      const validComponent = _mod7150.getValidComponent(tmp);
      if (invertedTransformStyle) {
        const obj2 = { style: null, children: null };
        const items = [ListEmptyComponentStyle, tmp5];
        obj2.style = items;
        obj2.children = validComponent;
        let tmp7 = jsx(CompatView.CompatView, { style: null, children: null });
      } else {
        tmp7 = validComponent;
      }
      return tmp7;
    }
    return null;
  }, items3);
  obj2.CompatScrollView = ListEmptyComponentStyle(() => {
    if (typeof renderScrollComponent === "function") {
      if (!tmpResult.isComponentClass(renderScrollComponent)) {
        let CompatAnimatedScroller = noop.forwardRef((arg0, ref) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.ref = ref;
          return renderScrollComponent(obj);
        });
        CompatAnimatedScroller.displayName = "CustomScrollView";
      }
      return React2.createAnimatedComponent(CompatAnimatedScroller);
    }
    CompatAnimatedScroller = CompatScroller.CompatAnimatedScroller;
    if (renderScrollComponent) {
      CompatAnimatedScroller = renderScrollComponent;
    }
  }, items5);
  obj2.renderStickyHeaderBackdrop = ListEmptyComponentStyle(() => {
    let backdropComponent;
    if (stickyHeaderConfig != null) {
      backdropComponent = stickyHeaderConfig.backdropComponent;
    }
    let tmp4Result = null;
    if (backdropComponent) {
      const obj = { style: null, children: null };
      const items = [{ position: "absolute", inset: 0, pointerEvents: "none" }, invertedTransformStyle];
      obj.style = items;
      let backdropComponent1;
      if (stickyHeaderConfig != null) {
        backdropComponent1 = stickyHeaderConfig.backdropComponent;
      }
      obj.children = _mod7150.getValidComponent(backdropComponent1);
      tmp4Result = jsx(CompatView.CompatView, { style: null, children: null });
    }
    return tmp4Result;
  }, items4);
  return obj2;
};