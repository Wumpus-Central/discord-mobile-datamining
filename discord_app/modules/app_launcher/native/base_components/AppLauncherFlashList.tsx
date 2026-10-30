// === Module 12253: AppLauncherFlashList ===

// Module 12253 (AppLauncherFlashList)
import useAnimatedScrollLock from "useAnimatedScrollLock" /* 12254 */;
import noop from "module_19" /* 19 */;

require = fn;
class AppLauncherFlashList {
  constructor(arg0) {
    ref = global.ref;
    merged = Object.assign(global, Object.assign({ ref: 0 }));
    tmp2 = simultaneousHandlers;
    tmp3 = closure_1;
    obj = simultaneousHandlers(closure_1[5]);
    simultaneousHandlers = merged.simultaneousHandlers;
    items = [];
    items[0] = simultaneousHandlers;
    memo = closure_2.useMemo(() => function ScrollViewGestureAware(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const memo = React.useMemo(() => {
        const Gesture = simultaneousHandlers(closure_2_1[3]).Gesture;
        return Gesture.Native().simultaneousWithExternalGesture(closure_1_0);
      }, []);
      const obj = { gesture: memo, children: null };
      const merged1 = Object.assign(merged);
      obj.children = <ScrollView ref={ref.ref} />;
      return jsx(simultaneousHandlers(dependencyMap[3]).GestureDetector, { gesture: memo, children: null });
    }, items);
    if (obj.useAppLauncherContext().entrypoint === simultaneousHandlers(closure_1[6]).AppLauncherEntrypoint.VOICE) {
      tmp5 = jsx;
      obj1 = { renderScrollComponent: null, ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, animatedProps: null, overScrollMode: "never", ref: null };
      obj1.renderScrollComponent = memo;
      ({ ListHeaderComponent: obj2.ListHeaderComponent, animatedOnScroll: obj2.onScroll, contentContainerStyle: obj2.contentContainerStyle, scrollIndicatorInsets: obj2.scrollIndicatorInsets, renderItem: obj2.renderItem, getItemType: obj2.getItemType, data: obj2.data, automaticallyAdjustsScrollIndicatorInsets: obj2.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj2.keyboardDismissMode, keyboardShouldPersistTaps: obj2.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj2.showsVerticalScrollIndicator, onViewableItemsChanged: obj2.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj2.viewabilityConfigCallbackPairs, animatedProps: obj2.animatedProps } = merged);
      obj1.ref = ref;
      tmp6 = jsx(tmp2(tmp3[7]).AnimatedFlashList, obj1);
    } else {
      tmp7 = jsx;
      obj4 = { ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, preserveScrollMomentum: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, lockableScrollableContentOffsetY: null, bottomViewabilityInsetRef: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, ref: null };
      ({ ListHeaderComponent: obj3.ListHeaderComponent, onScroll: obj3.onScroll, contentContainerStyle: obj3.contentContainerStyle, scrollIndicatorInsets: obj3.scrollIndicatorInsets, renderItem: obj3.renderItem, getItemType: obj3.getItemType, data: obj3.data, preserveScrollMomentum: obj3.preserveScrollMomentum, automaticallyAdjustsScrollIndicatorInsets: obj3.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj3.keyboardDismissMode, keyboardShouldPersistTaps: obj3.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj3.showsVerticalScrollIndicator, lockableScrollableContentOffsetY: obj3.lockableScrollableContentOffsetY, bottomViewabilityInsetRef: obj3.bottomViewabilityInsetRef, onViewableItemsChanged: obj3.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj3.viewabilityConfigCallbackPairs } = merged);
      obj4.ref = ref;
      tmp6 = jsx(tmp2(tmp3[7]).BottomSheetFlashList, obj4);
    }
    return tmp6;
  }
}
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
AppLauncherFlashList.displayName = "AppLauncherFlashList";
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherFlashList.tsx");

export default AppLauncherFlashList;
export function useAppLauncherFlashListProps(arg0) {
  return useAnimatedScrollLock.useAnimatedScrollLock(arg0);
}