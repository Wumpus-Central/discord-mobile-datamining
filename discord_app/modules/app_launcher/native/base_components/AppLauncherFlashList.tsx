// === Module 12102: AppLauncherFlashList ===

// Module 12102 (AppLauncherFlashList)
import createUseAnimatedScrollLock from "createUseAnimatedScrollLock" /* 12103 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
let forwardRefResult = noop.forwardRef((simultaneousHandlers, ref) => {
  let obj = simultaneousHandlers(11215);
  const items = [simultaneousHandlers.simultaneousHandlers];
  let memo = noop.useMemo(() => {
    if (null == simultaneousHandlers) {
      let forwardRefResult = ScrollView;
    } else {
      forwardRefResult = noop.forwardRef((arg0, ref) => {
        const memo = React.useMemo(() => {
          const Gesture = simultaneousHandlers(closure_2_1[3]).Gesture;
          return Gesture.Native().simultaneousWithExternalGesture(closure_1_0);
        }, []);
        let obj = { gesture: memo, children: null };
        obj = { ref };
        const merged = Object.assign(arg0);
        obj.children = <ScrollView ref={ref} />;
        return jsx(simultaneousHandlers(dependencyMap[3]).GestureDetector, { ref });
      });
    }
    return forwardRefResult;
  }, items);
  if (obj.useAppLauncherContext().entrypoint === simultaneousHandlers.simultaneousHandlers(9409).AppLauncherEntrypoint.VOICE) {
    obj = { renderScrollComponent: memo, ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, animatedProps: null, overScrollMode: "never", ref: null };
    ({ ListHeaderComponent: obj2.ListHeaderComponent, animatedOnScroll: obj2.onScroll, contentContainerStyle: obj2.contentContainerStyle, scrollIndicatorInsets: obj2.scrollIndicatorInsets, renderItem: obj2.renderItem, getItemType: obj2.getItemType, data: obj2.data, automaticallyAdjustsScrollIndicatorInsets: obj2.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj2.keyboardDismissMode, keyboardShouldPersistTaps: obj2.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj2.showsVerticalScrollIndicator, onViewableItemsChanged: obj2.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj2.viewabilityConfigCallbackPairs, animatedProps: obj2.animatedProps } = simultaneousHandlers);
    obj.ref = ref;
    let tmp5 = jsx(tmp(8874).AnimatedFlashList, { renderScrollComponent: memo, ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, animatedProps: null, overScrollMode: "never", ref: null });
  } else {
    obj = { ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, preserveScrollMomentum: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, lockableScrollableContentOffsetY: null, bottomViewabilityInsetRef: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, ref: null };
    ({ ListHeaderComponent: obj3.ListHeaderComponent, onScroll: obj3.onScroll, contentContainerStyle: obj3.contentContainerStyle, scrollIndicatorInsets: obj3.scrollIndicatorInsets, renderItem: obj3.renderItem, getItemType: obj3.getItemType, data: obj3.data, preserveScrollMomentum: obj3.preserveScrollMomentum, automaticallyAdjustsScrollIndicatorInsets: obj3.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj3.keyboardDismissMode, keyboardShouldPersistTaps: obj3.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj3.showsVerticalScrollIndicator, lockableScrollableContentOffsetY: obj3.lockableScrollableContentOffsetY, bottomViewabilityInsetRef: obj3.bottomViewabilityInsetRef, onViewableItemsChanged: obj3.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj3.viewabilityConfigCallbackPairs } = simultaneousHandlers);
    obj.ref = ref;
    tmp5 = jsx(tmp(8874).BottomSheetFlashList, { ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, preserveScrollMomentum: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, lockableScrollableContentOffsetY: null, bottomViewabilityInsetRef: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, ref: null });
  }
  return tmp5;
});
forwardRefResult.displayName = "AppLauncherFlashList";
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherFlashList.tsx");

export default forwardRefResult;
export const useAppLauncherFlashListProps = function useAppLauncherFlashListProps(arg0) {
  return noop.useContext(createUseAnimatedScrollLock.ControlsGestureScrollLock)(arg0);
};