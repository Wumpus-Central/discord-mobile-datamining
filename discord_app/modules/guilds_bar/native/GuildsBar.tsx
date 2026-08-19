// === Module 15545: ? ===

// Module 15545
import importAllResult from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let c3 = importAllResult;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ wrapper: { position: "relative", overflow: "visible", flex: 1 } });
const memoResult = importAllResult.memo(function GuildsBar(enableHome) {
  let flag = enableHome.enableHome;
  if (flag === undefined) {
    flag = false;
  }
  let tmp4 = fastListRef(15546)();
  fastListRef = tmp4.fastListRef;
  listProps = fastListRef;
  ({ scrollPosition, gesture, scrollerRef, persistantKeys, onFastListScroll, onFastListScrollWorklet } = tmp4);
  const tmp = callback();
  ({ listProps, listDataProps } = fastListRef(15556)(fastListRef));
  const items = [fastListRef];
  const effect = importAllResult.useEffect(() => {
    const result = listProps(ref[7]).registerGuildVisibilityMethod(listProps);
  }, items);
  importAllResult = undefined;
  dependencyMap = importAllResult.useRef(listProps);
  importAllResult = importAllResult.useRef(false);
  const effect1 = importAllResult.useEffect(() => {
    if (obj.isAndroid()) {
      closure_0 = fastListRef(ref[4]).addOnPipModeChangedListener((arg0) => {
        if (arg0) {
          closure_3.current = true;
        }
      });
      return () => {
        let removeResult;
        if (closure_0 != null) {
          removeResult = closure_0.remove();
        }
        return removeResult;
      };
    }
    obj = listProps(ref[3]);
  }, []);
  const items1 = [fastListRef, listProps];
  const effect2 = importAllResult.useEffect(() => {
    const current = ref.current;
    ref.current = listProps;
    if (ref2.current) {
      let num = listProps.chunkBase;
      if (num == null) {
        num = 0;
      }
      let num2 = current.chunkBase;
      if (num2 == null) {
        num2 = 0;
      }
      if (num > num2) {
        tmp2.current = false;
        if (tmp4) {
          const current2 = fastListRef.current;
          if (current2 != null) {
            const blocks = current2.computeBlocks();
          }
        }
        tmp4 = listProps.insetStart === current.insetStart && listProps.insetEnd === current.insetEnd;
      }
    }
  }, items1);
  let obj = { profile: null, children: null };
  const tmp5 = fastListRef(15556)(fastListRef);
  obj[0] = listProps(10725).Profiles.Guilds;
  obj = { style: tmp.wrapper, collapsable: false, nativeID: "guilds-bar-view", children: null };
  const tmp10 = fastListRef(10725);
  obj1 = {};
  const tmp12 = fastListRef(7190);
  const merged = Object.assign(listProps);
  const merged1 = Object.assign(listDataProps);
  obj1.ref = fastListRef;
  obj1.manualRef = scrollerRef;
  obj1.disableContentWrappers = true;
  obj1.onScroll = onFastListScroll;
  obj1.onScrollWorklet = onFastListScrollWorklet;
  obj1.scrollPosValue = scrollPosition;
  obj1.stickySectionsVariant = "sticky-mount";
  obj1.optimizeListItemRender = true;
  obj1.persistantKeys = persistantKeys;
  obj1.disableRecyclingOnFullCompute = true;
  let obj2;
  if (flag) {
    obj2 = { overflow: "visible" };
  }
  obj1.style = obj2;
  obj1.nativeID = "guilds-bar-fast-list";
  const items2 = [callback(fastListRef(8124), obj1), callback(fastListRef(15623), {}), callback(fastListRef(9988), {})];
  obj[3] = items2;
  obj[1] = callback2(tmp12, obj);
  obj[1] = callback(listProps(6377).GestureDetector, obj);
  return callback(tmp10, obj);
});
let result = require("obj132").fileFinishedImporting("modules/guilds_bar/native/GuildsBar.tsx");

export default memoResult;