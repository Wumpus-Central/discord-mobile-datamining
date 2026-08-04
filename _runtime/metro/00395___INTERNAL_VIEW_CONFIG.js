// _runtime/metro/00395___INTERNAL_VIEW_CONFIG.js
let obj = { uiViewClassName: "RCTScrollView", bubblingEventTypes: {}, directEventTypes: { topMomentumScrollBegin: { registrationName: "onMomentumScrollBegin" }, topMomentumScrollEnd: { registrationName: "onMomentumScrollEnd" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" } }, validAttributes: null };
obj = { contentOffset: null, decelerationRate: true, disableIntervalMomentum: true, maintainVisibleContentPosition: true, pagingEnabled: true, scrollEnabled: true, showsVerticalScrollIndicator: true, snapToAlignment: true, snapToEnd: true, snapToInterval: true, snapToOffsets: true, snapToStart: true, borderBottomLeftRadius: true, borderBottomRightRadius: true, sendMomentumEvents: true, borderRadius: true, nestedScrollEnabled: true, scrollEventThrottle: true, borderStyle: true, borderRightColor: null, borderColor: null, borderBottomColor: null, persistentScrollbar: true, horizontal: true, endFillColor: null, fadingEdgeLength: true, overScrollMode: true, borderTopLeftRadius: true, scrollPerfTag: true, borderTopColor: null, removeClippedSubviews: true, borderTopRightRadius: true, borderLeftColor: null, pointerEvents: true, isInvertedVirtualizedList: true, scrollsChildToFocus: true };
obj = { diff: require("pointsDiffer").default };
obj[0] = obj;
obj[19] = require("result").colorAttribute;
obj[20] = require("result").colorAttribute;
obj[21] = require("result").colorAttribute;
obj[24] = require("result").colorAttribute;
obj[29] = require("result").colorAttribute;
obj[32] = require("result").colorAttribute;
obj[3] = obj;

export default require("setRuntimeConfigProvider").get("RCTScrollView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;