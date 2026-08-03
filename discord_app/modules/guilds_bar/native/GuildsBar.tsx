// === Module 14956: ? ===

// Module 14956
import importAllResult from "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
let c3 = importAllResult;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ wrapper: { position: "relative", overflow: "visible", flex: 1 } });
const memoResult = importAllResult.memo(function GuildsBar(enableHome) {
  let gesture;
  let listDataProps;
  let listProps;
  let onFastListScroll;
  let onFastListScrollWorklet;
  let persistantKeys;
  let scrollPosition;
  let scrollerRef;
  let flag = enableHome.enableHome;
  if (flag === undefined) {
    flag = false;
  }
  listProps = undefined;
  let tmp4 = fastListRef(14957)();
  fastListRef = tmp4.fastListRef;
  listProps = fastListRef;
  ({ scrollPosition, gesture, scrollerRef, persistantKeys, onFastListScroll, onFastListScrollWorklet } = tmp4);
  let tmp = callback();
  const tmp2 = fastListRef;
  ({ listProps, listDataProps } = fastListRef(14967)(fastListRef));
  const items = [fastListRef];
  const effect = importAllResult.useEffect(() => {
    const result = listProps(ref[7]).registerGuildVisibilityMethod(listProps);
  }, items);
  let dependencyMap;
  importAllResult = undefined;
  dependencyMap = importAllResult.useRef(listProps);
  importAllResult = importAllResult.useRef(false);
  const effect1 = importAllResult.useEffect(() => {
    if (obj.isAndroid()) {
      let closure_0 = fastListRef(tmp[4]).addOnPipModeChangedListener((arg0) => {
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
    tmp = ref;
  }, []);
  const items1 = [fastListRef, listProps];
  const effect2 = importAllResult.useEffect(() => {
    const current = ref.current;
    ref.current = listProps;
    if (ref2.current) {
      let num = tmp.chunkBase;
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
        tmp4 = tmp.insetStart === current.insetStart && tmp.insetEnd === current.insetEnd;
      }
    }
  }, items1);
  let obj = { profile: null, children: null };
  const tmp5 = fastListRef(14967)(fastListRef);
  obj[0] = listProps(10910).Profiles.Guilds;
  obj = { gesture, children: null };
  obj = { style: tmp.wrapper, collapsable: false, nativeID: "guilds-bar-view", children: null };
  const tmp10 = fastListRef(10910);
  const tmp11 = closure_5;
  const obj1 = {};
  const tmp12 = fastListRef(5572);
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
  const items2 = [closure_4(fastListRef(7683), obj1), closure_4(tmp2(15040), {})];
  obj[3] = items2;
  obj[1] = tmp11(tmp12, obj);
  obj[1] = closure_4(listProps(5277).GestureDetector, obj);
  return closure_4(tmp10, obj);
});
let result = require("createCacheKey").fileFinishedImporting("modules/guilds_bar/native/GuildsBar.tsx");

export default memoResult;