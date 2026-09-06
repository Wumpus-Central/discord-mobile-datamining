// discord_app/modules/guilds_bar/native/GuildsBar.tsx
import NativeViewDefault from "../../core/native/NativeView.tsx";
import FastListDefault from "../../../lib/native/FastList.tsx";
import FavoritesGuildIntroPopoverDefault from "../../favorites/onboarding/FavoritesGuildIntroPopover.tsx";
import StartupProfilerDefault from "../../app_startup/StartupProfiler.tsx";
import registerSidebarVisibilityMethods from "utils/registerSidebarVisibilityMethods.tsx";
import useGuildsBarGestureDefault from "hooks/useGuildsBarGesture.tsx";
import useGuildsBarPropsDefault from "hooks/useGuildsBarProps.tsx";
import GuildsBarDragPreviewDefault from "GuildsBarDragPreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
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
  let tmp = closure_6();
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
      closure_0 = ref(tmp[4]).addOnPipModeChangedListener((arg0) => {
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
    tmp = ref2;
  }, []);
  const items1 = [fastListRef, listProps];
  const effect2 = noop.useEffect(() => {
    const current = ref2.current;
    ref2.current = fastListRef;
    if (ref3.current) {
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
          const current2 = ref.current;
          if (current2 != null) {
            const blocks = current2.computeBlocks();
          }
        }
        tmp4 = tmp.insetStart === current.insetStart && tmp.insetEnd === current.insetEnd;
      }
    }
  }, items1);
  let obj = { profile: null, children: null };
  const tmp5 = useGuildsBarPropsDefault(fastListRef);
  obj.profile = fastListRef(11533).Profiles.Guilds;
  obj = { gesture, children: null };
  obj = { style: tmp.wrapper, collapsable: false, nativeID: "guilds-bar-view", children: null };
  const tmp10 = StartupProfilerDefault;
  const tmp11 = closure_5;
  const obj1 = {};
  const tmp12 = NativeViewDefault;
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
  const items2 = [
    closure_4(FastListDefault, obj1),
    closure_4(GuildsBarDragPreviewDefault, {}),
    closure_4(FavoritesGuildIntroPopoverDefault, {}),
  ];
  obj.children = items2;
  obj.children = tmp11(tmp12, obj);
  obj.children = closure_4(fastListRef(6655).GestureDetector, obj);
  return closure_4(tmp10, obj);
});
