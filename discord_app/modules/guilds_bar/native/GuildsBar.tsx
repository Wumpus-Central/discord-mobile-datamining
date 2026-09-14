// === Module 16380: GuildsBar ===

// Module 16380 (GuildsBar)
import NativeViewDefault from "NativeView" /* 5670 */;
import FastListDefault from "FastList" /* 7175 */;
import FavoritesGuildIntroPopoverDefault from "FavoritesGuildIntroPopover" /* 10367 */;
import StartupProfilerDefault from "StartupProfiler" /* 11663 */;
import registerSidebarVisibilityMethods from "registerSidebarVisibilityMethods" /* 16277 */;
import useGuildsBarGestureDefault from "useGuildsBarGesture" /* 16381 */;
import useGuildsBarPropsDefault from "useGuildsBarProps" /* 16389 */;
import GuildsBarDragPreviewDefault from "GuildsBarDragPreview" /* 16458 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let closure_6 = createStyles.createStyles({ wrapper: { position: "relative", overflow: "visible", flex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBar.tsx");

export default noop.memo(function GuildsBar(enableHome) {
  let flag = enableHome.enableHome;
  if (flag === undefined) {
    flag = false;
  }
  let tmp4 = useGuildsBarGestureDefault();
  const fastListRef = tmp4.fastListRef;
  ({ scrollPosition, gesture, scrollerRef, persistantKeys, onFastListScroll, onFastListScrollWorklet } = tmp4);
  const tmp = closure_6();
  ({ listProps, listDataProps } = useGuildsBarPropsDefault(fastListRef));
  const items = [fastListRef];
  const effect = noop.useEffect(() => {
    const result = registerSidebarVisibilityMethods.registerGuildVisibilityMethod(fastListRef);
  }, items);
  closure_129_0 = listProps;
  closure_129_1 = fastListRef;
  closure_129_2 = noop.useRef(listProps);
  closure_129_3 = noop.useRef(false);
  const effect1 = noop.useEffect(() => {
    if (obj.isAndroid()) {
      closure_0 = ref(ref2[4]).addOnPipModeChangedListener((arg0) => {
        if (arg0) {
          ref3.current = true;
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
    obj = fastListRef(ref2[3]);
  }, []);
  const items1 = [fastListRef, listProps];
  const effect2 = noop.useEffect(() => {
    const current = ref2.current;
    ref2.current = fastListRef;
    if (ref3.current) {
      let num = fastListRef.chunkBase;
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
          const current2 = ref.current;
          if (current2 != null) {
            const blocks = current2.computeBlocks();
          }
        }
        tmp4 = fastListRef.insetStart === current.insetStart && fastListRef.insetEnd === current.insetEnd;
      }
    }
  }, items1);
  let obj = { profile: null, children: null };
  const tmp5 = useGuildsBarPropsDefault(fastListRef);
  obj.profile = fastListRef(11663).Profiles.Guilds;
  const obj2 = { gesture, children: null };
  const obj3 = { style: tmp.wrapper, collapsable: false, nativeID: "guilds-bar-view", children: null };
  const tmp10 = StartupProfilerDefault;
  const obj4 = {};
  const tmp12 = NativeViewDefault;
  const merged = Object.assign(listProps);
  const merged1 = Object.assign(listDataProps);
  obj4.ref = fastListRef;
  obj4.manualRef = scrollerRef;
  obj4.disableContentWrappers = true;
  obj4.onScroll = onFastListScroll;
  obj4.onScrollWorklet = onFastListScrollWorklet;
  obj4.scrollPosValue = scrollPosition;
  obj4.stickySectionsVariant = "sticky-mount";
  obj4.optimizeListItemRender = true;
  obj4.persistantKeys = persistantKeys;
  obj4.disableRecyclingOnFullCompute = true;
  let obj5;
  if (flag) {
    obj5 = { overflow: "visible" };
  }
  obj4.style = obj5;
  obj4.nativeID = "guilds-bar-fast-list";
  const items2 = [closure_4(FastListDefault, obj4), closure_4(GuildsBarDragPreviewDefault, {}), closure_4(FavoritesGuildIntroPopoverDefault, {})];
  obj3.children = items2;
  obj2.children = closure_5(tmp12, obj3);
  obj.children = closure_4(fastListRef(6756).GestureDetector, obj2);
  return closure_4(tmp10, obj);
});