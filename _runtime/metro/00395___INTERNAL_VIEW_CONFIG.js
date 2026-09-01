// _runtime/metro/00395___INTERNAL_VIEW_CONFIG.js
import result from "../00026_result.js";
import setRuntimeConfigProviderAll from "../00065_setRuntimeConfigProvider.js";
import pointsDiffer from "../00078_pointsDiffer.js";

let obj = {
  uiViewClassName: "RCTScrollView",
  bubblingEventTypes: {},
  directEventTypes: {
    topMomentumScrollBegin: { registrationName: "onMomentumScrollBegin" },
    topMomentumScrollEnd: { registrationName: "onMomentumScrollEnd" },
    topScroll: { registrationName: "onScroll" },
    topScrollBeginDrag: { registrationName: "onScrollBeginDrag" },
    topScrollEndDrag: { registrationName: "onScrollEndDrag" },
  },
  validAttributes: null,
};
obj = {
  contentOffset: null,
  decelerationRate: true,
  disableIntervalMomentum: true,
  maintainVisibleContentPosition: true,
  pagingEnabled: true,
  scrollEnabled: true,
  showsVerticalScrollIndicator: true,
  snapToAlignment: true,
  snapToEnd: true,
  snapToInterval: true,
  snapToOffsets: true,
  snapToStart: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  sendMomentumEvents: true,
  borderRadius: true,
  nestedScrollEnabled: true,
  scrollEventThrottle: true,
  borderStyle: true,
  borderRightColor: null,
  borderColor: null,
  borderBottomColor: null,
  persistentScrollbar: true,
  horizontal: true,
  endFillColor: null,
  fadingEdgeLength: true,
  overScrollMode: true,
  borderTopLeftRadius: true,
  scrollPerfTag: true,
  borderTopColor: null,
  removeClippedSubviews: true,
  borderTopRightRadius: true,
  borderLeftColor: null,
  pointerEvents: true,
  isInvertedVirtualizedList: true,
  scrollsChildToFocus: true,
};
obj = { diff: pointsDiffer.default };
obj[0] = obj;
obj[19] = result.colorAttribute;
obj[20] = result.colorAttribute;
obj[21] = result.colorAttribute;
obj[24] = result.colorAttribute;
obj[29] = result.colorAttribute;
obj[32] = result.colorAttribute;
obj[3] = obj;

export default setRuntimeConfigProviderAll.get("RCTScrollView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
