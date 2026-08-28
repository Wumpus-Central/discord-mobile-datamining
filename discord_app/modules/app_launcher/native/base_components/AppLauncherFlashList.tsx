// discord_app/modules/app_launcher/native/base_components/AppLauncherFlashList.tsx
import context from "../../../voice_panel/native/controls/utils/createUseAnimatedScrollLock.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let forwardRefResult = importAllResult.forwardRef((simultaneousHandlers) => {
  let obj = simultaneousHandlers(8989);
  simultaneousHandlers = simultaneousHandlers.simultaneousHandlers;
  const items = [simultaneousHandlers];
  let memo = importAllResult.useMemo(() => {
    if (null == simultaneousHandlers) {
      let forwardRefResult = closure_1_3;
    } else {
      forwardRefResult = closure_1_2.forwardRef((arg0, ref) => {
        const memo = closure_1_2.useMemo(() => {
          const Gesture = closure_1_0(closure_1_1[3]).Gesture;
          return Gesture.Native().simultaneousWithExternalGesture(closure_0);
        }, []);
        let obj = { gesture: memo, children: null };
        obj = { ref };
        const merged = Object.assign(arg0);
        obj[1] = closure_1_4(closure_1_3, obj);
        return closure_1_4(closure_1_0(closure_1_1[3]).GestureDetector, obj);
      });
    }
    return forwardRefResult;
  }, items);
  if (obj.useAppLauncherContext().entrypoint === simultaneousHandlers(8381).AppLauncherEntrypoint.VOICE) {
    obj = { renderScrollComponent: null, ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, animatedProps: null, overScrollMode: "never", ref: null };
    obj[0] = memo;
    ({ ListHeaderComponent: obj2[1], animatedOnScroll: obj2[2], contentContainerStyle: obj2[3], scrollIndicatorInsets: obj2[4], renderItem: obj2[5], getItemType: obj2[6], data: obj2[7], automaticallyAdjustsScrollIndicatorInsets: obj2[8], keyboardDismissMode: obj2[9], keyboardShouldPersistTaps: obj2[10], showsVerticalScrollIndicator: obj2[11], onViewableItemsChanged: obj2[12], viewabilityConfigCallbackPairs: obj2[13], animatedProps: obj2[14] } = simultaneousHandlers);
    obj[16] = arg1;
    let tmp5 = jsx(tmp(8051).AnimatedFlashList, { renderScrollComponent: null, ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, animatedProps: null, overScrollMode: "never", ref: null });
  } else {
    obj = { ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, preserveScrollMomentum: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, lockableScrollableContentOffsetY: null, bottomViewabilityInsetRef: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, ref: null };
    ({ ListHeaderComponent: obj3[0], onScroll: obj3[1], contentContainerStyle: obj3[2], scrollIndicatorInsets: obj3[3], renderItem: obj3[4], getItemType: obj3[5], data: obj3[6], preserveScrollMomentum: obj3[7], automaticallyAdjustsScrollIndicatorInsets: obj3[8], keyboardDismissMode: obj3[9], keyboardShouldPersistTaps: obj3[10], showsVerticalScrollIndicator: obj3[11], lockableScrollableContentOffsetY: obj3[12], bottomViewabilityInsetRef: obj3[13], onViewableItemsChanged: obj3[14], viewabilityConfigCallbackPairs: obj3[15] } = simultaneousHandlers);
    obj[16] = arg1;
    tmp5 = jsx(tmp(8051).BottomSheetFlashList, { ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, preserveScrollMomentum: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, lockableScrollableContentOffsetY: null, bottomViewabilityInsetRef: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, ref: null });
  }
  return tmp5;
});
forwardRefResult.displayName = "AppLauncherFlashList";
const result = require("set").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherFlashList.tsx");

export default forwardRefResult;
export const useAppLauncherFlashListProps = function useAppLauncherFlashListProps(arg0) {
  return importAllResult.useContext(context.ControlsGestureScrollLock)(arg0);
};