// _runtime/metro/00395__.js
import _mod26 from "00026__.js";
import pointsDiffer from "../00078_pointsDiffer.js";
import 00065__ from "00065__.js";

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RCTScrollView", bubblingEventTypes: {}, directEventTypes: { topMomentumScrollBegin: { registrationName: "onMomentumScrollBegin" }, topMomentumScrollEnd: { registrationName: "onMomentumScrollEnd" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" } }, validAttributes: null };
const obj2 = { contentOffset: { diff: pointsDiffer.default }, decelerationRate: true, disableIntervalMomentum: true, maintainVisibleContentPosition: true, pagingEnabled: true, scrollEnabled: true, showsVerticalScrollIndicator: true, snapToAlignment: true, snapToEnd: true, snapToInterval: true, snapToOffsets: true, snapToStart: true, borderBottomLeftRadius: true, borderBottomRightRadius: true, sendMomentumEvents: true, borderRadius: true, nestedScrollEnabled: true, scrollEventThrottle: true, borderStyle: true, borderRightColor: _mod26.colorAttribute, borderColor: _mod26.colorAttribute, borderBottomColor: _mod26.colorAttribute, persistentScrollbar: true, horizontal: true, endFillColor: _mod26.colorAttribute, fadingEdgeLength: true, overScrollMode: true, borderTopLeftRadius: true, scrollPerfTag: true, borderTopColor: _mod26.colorAttribute, removeClippedSubviews: true, borderTopRightRadius: true, borderLeftColor: _mod26.colorAttribute, pointerEvents: true, isInvertedVirtualizedList: true, scrollsChildToFocus: true };
__INTERNAL_VIEW_CONFIG.validAttributes = obj2;

export default module_65.get("RCTScrollView", () => obj);
export { __INTERNAL_VIEW_CONFIG };