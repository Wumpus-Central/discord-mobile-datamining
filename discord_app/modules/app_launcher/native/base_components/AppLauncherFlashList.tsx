// === Module 11726: AppLauncherFlashList ===

// Module 11726 (AppLauncherFlashList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useAnimatedScrollLock from "useAnimatedScrollLock" /* 11727 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let simultaneousHandlers;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const fn = (arg0) => {
  const obj = useAnimatedScrollLock;
  return obj.useAnimatedScrollLock(arg0);
};
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((simultaneousHandlers, ref) => {
  let tmp5;
  const obj = simultaneousHandlers(576);
  const cResult = obj.c(35);
  const obj2 = simultaneousHandlers(10994);
  simultaneousHandlers = simultaneousHandlers.simultaneousHandlers;
  const items = [simultaneousHandlers];
  const entrypoint = obj2.useAppLauncherContext().entrypoint;
  const memo = react.useMemo(() => react.forwardRef((arg0, ref) => {
    const memo = React.useMemo(() => {
      const Gesture = simultaneousHandlers(closure_2_1[3]).Gesture;
      const NativeResult = Gesture.Native();
      return NativeResult.simultaneousWithExternalGesture(closure_1_0);
    }, []);
    const GestureDetector = simultaneousHandlers(dependencyMap[3]).GestureDetector;
    const merged = Object.assign(arg0);
    return <GestureDetector gesture={memo}>{null}</GestureDetector>;
  }), items);
  if (entrypoint === simultaneousHandlers(8932).AppLauncherEntrypoint.VOICE) {
    if (cResult[0] === memo) {
      if (cResult[1] === simultaneousHandlers.ListHeaderComponent) {
        if (cResult[2] === simultaneousHandlers.animatedOnScroll) {
          if (cResult[3] === simultaneousHandlers.animatedProps) {
            if (cResult[4] === simultaneousHandlers.automaticallyAdjustsScrollIndicatorInsets) {
              if (cResult[5] === simultaneousHandlers.contentContainerStyle) {
                if (cResult[6] === simultaneousHandlers.data) {
                  if (cResult[7] === simultaneousHandlers.getItemType) {
                    if (cResult[8] === simultaneousHandlers.keyboardDismissMode) {
                      if (cResult[9] === simultaneousHandlers.keyboardShouldPersistTaps) {
                        if (cResult[10] === simultaneousHandlers.onViewableItemsChanged) {
                          if (cResult[11] === simultaneousHandlers.renderItem) {
                            if (cResult[12] === simultaneousHandlers.scrollIndicatorInsets) {
                              if (cResult[13] === simultaneousHandlers.showsVerticalScrollIndicator) {
                                if (cResult[14] === simultaneousHandlers.viewabilityConfigCallbackPairs) {
                                  let tmp8;
                                  if (cResult[15] === ref) {
                                    tmp8 = cResult[16];
                                  }
                                  tmp5 = tmp8;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    ({ ListHeaderComponent: obj4.ListHeaderComponent, animatedOnScroll: obj4.onScroll, contentContainerStyle: obj4.contentContainerStyle, scrollIndicatorInsets: obj4.scrollIndicatorInsets, renderItem: obj4.renderItem, getItemType: obj4.getItemType, data: obj4.data, automaticallyAdjustsScrollIndicatorInsets: obj4.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj4.keyboardDismissMode, keyboardShouldPersistTaps: obj4.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj4.showsVerticalScrollIndicator, onViewableItemsChanged: obj4.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj4.viewabilityConfigCallbackPairs, animatedProps: obj4.animatedProps } = simultaneousHandlers);
    const tmp10 = jsx(simultaneousHandlers(8371).AnimatedFlashList, { renderScrollComponent: memo, ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, animatedProps: null, overScrollMode: "never", ref });
    cResult[0] = memo;
    cResult[1] = simultaneousHandlers.ListHeaderComponent;
    cResult[2] = simultaneousHandlers.animatedOnScroll;
    cResult[3] = simultaneousHandlers.animatedProps;
    cResult[4] = simultaneousHandlers.automaticallyAdjustsScrollIndicatorInsets;
    cResult[5] = simultaneousHandlers.contentContainerStyle;
    cResult[6] = simultaneousHandlers.data;
    cResult[7] = simultaneousHandlers.getItemType;
    cResult[8] = simultaneousHandlers.keyboardDismissMode;
    cResult[9] = simultaneousHandlers.keyboardShouldPersistTaps;
    cResult[10] = simultaneousHandlers.onViewableItemsChanged;
    cResult[11] = simultaneousHandlers.renderItem;
    cResult[12] = simultaneousHandlers.scrollIndicatorInsets;
    cResult[13] = simultaneousHandlers.showsVerticalScrollIndicator;
    cResult[14] = simultaneousHandlers.viewabilityConfigCallbackPairs;
    cResult[15] = ref;
    cResult[16] = tmp10;
    tmp8 = tmp10;
  } else {
    if (cResult[17] === simultaneousHandlers.ListHeaderComponent) {
      if (cResult[18] === simultaneousHandlers.automaticallyAdjustsScrollIndicatorInsets) {
        if (cResult[19] === simultaneousHandlers.bottomViewabilityInsetRef) {
          if (cResult[20] === simultaneousHandlers.contentContainerStyle) {
            if (cResult[21] === simultaneousHandlers.data) {
              if (cResult[22] === simultaneousHandlers.getItemType) {
                if (cResult[23] === simultaneousHandlers.keyboardDismissMode) {
                  if (cResult[24] === simultaneousHandlers.keyboardShouldPersistTaps) {
                    if (cResult[25] === simultaneousHandlers.lockableScrollableContentOffsetY) {
                      if (cResult[26] === simultaneousHandlers.onScroll) {
                        if (cResult[27] === simultaneousHandlers.onViewableItemsChanged) {
                          if (cResult[28] === simultaneousHandlers.preserveScrollMomentum) {
                            if (cResult[29] === simultaneousHandlers.renderItem) {
                              if (cResult[30] === simultaneousHandlers.scrollIndicatorInsets) {
                                if (cResult[31] === simultaneousHandlers.showsVerticalScrollIndicator) {
                                  if (cResult[32] === simultaneousHandlers.viewabilityConfigCallbackPairs) {
                                    if (cResult[33] === ref) {
                                      tmp5 = cResult[34];
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    ({ ListHeaderComponent: obj3.ListHeaderComponent, onScroll: obj3.onScroll, contentContainerStyle: obj3.contentContainerStyle, scrollIndicatorInsets: obj3.scrollIndicatorInsets, renderItem: obj3.renderItem, getItemType: obj3.getItemType, data: obj3.data, preserveScrollMomentum: obj3.preserveScrollMomentum, automaticallyAdjustsScrollIndicatorInsets: obj3.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj3.keyboardDismissMode, keyboardShouldPersistTaps: obj3.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj3.showsVerticalScrollIndicator, lockableScrollableContentOffsetY: obj3.lockableScrollableContentOffsetY, bottomViewabilityInsetRef: obj3.bottomViewabilityInsetRef, onViewableItemsChanged: obj3.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj3.viewabilityConfigCallbackPairs } = simultaneousHandlers);
    const tmp7 = jsx(simultaneousHandlers(8371).BottomSheetFlashList, { ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, preserveScrollMomentum: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, lockableScrollableContentOffsetY: null, bottomViewabilityInsetRef: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, ref });
    cResult[17] = simultaneousHandlers.ListHeaderComponent;
    cResult[18] = simultaneousHandlers.automaticallyAdjustsScrollIndicatorInsets;
    cResult[19] = simultaneousHandlers.bottomViewabilityInsetRef;
    cResult[20] = simultaneousHandlers.contentContainerStyle;
    cResult[21] = simultaneousHandlers.data;
    cResult[22] = simultaneousHandlers.getItemType;
    cResult[23] = simultaneousHandlers.keyboardDismissMode;
    cResult[24] = simultaneousHandlers.keyboardShouldPersistTaps;
    cResult[25] = simultaneousHandlers.lockableScrollableContentOffsetY;
    cResult[26] = simultaneousHandlers.onScroll;
    cResult[27] = simultaneousHandlers.onViewableItemsChanged;
    cResult[28] = simultaneousHandlers.preserveScrollMomentum;
    cResult[29] = simultaneousHandlers.renderItem;
    cResult[30] = simultaneousHandlers.scrollIndicatorInsets;
    cResult[31] = simultaneousHandlers.showsVerticalScrollIndicator;
    cResult[32] = simultaneousHandlers.viewabilityConfigCallbackPairs;
    cResult[33] = ref;
    cResult[34] = tmp7;
    tmp5 = tmp7;
  }
  return tmp5;
}) : ((simultaneousHandlers, ref) => {
  let tmp5;
  const obj = simultaneousHandlers(10994);
  simultaneousHandlers = simultaneousHandlers.simultaneousHandlers;
  const items = [simultaneousHandlers];
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  let memo = react.useMemo(() => react.forwardRef((arg0, ref) => {
    const memo = React.useMemo(() => {
      const Gesture = simultaneousHandlers(closure_2_1[3]).Gesture;
      const NativeResult = Gesture.Native();
      return NativeResult.simultaneousWithExternalGesture(closure_1_0);
    }, []);
    const GestureDetector = simultaneousHandlers(dependencyMap[3]).GestureDetector;
    const merged = Object.assign(arg0);
    return <GestureDetector gesture={memo}>{null}</GestureDetector>;
  }), items);
  if (entrypoint === simultaneousHandlers(8932).AppLauncherEntrypoint.VOICE) {
    ({ ListHeaderComponent: obj2.ListHeaderComponent, animatedOnScroll: obj2.onScroll, contentContainerStyle: obj2.contentContainerStyle, scrollIndicatorInsets: obj2.scrollIndicatorInsets, renderItem: obj2.renderItem, getItemType: obj2.getItemType, data: obj2.data, automaticallyAdjustsScrollIndicatorInsets: obj2.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj2.keyboardDismissMode, keyboardShouldPersistTaps: obj2.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj2.showsVerticalScrollIndicator, onViewableItemsChanged: obj2.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj2.viewabilityConfigCallbackPairs, animatedProps: obj2.animatedProps } = simultaneousHandlers);
    tmp5 = jsx(tmp(8371).AnimatedFlashList, { renderScrollComponent: memo, ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, animatedProps: null, overScrollMode: "never", ref });
  } else {
    ({ ListHeaderComponent: obj3.ListHeaderComponent, onScroll: obj3.onScroll, contentContainerStyle: obj3.contentContainerStyle, scrollIndicatorInsets: obj3.scrollIndicatorInsets, renderItem: obj3.renderItem, getItemType: obj3.getItemType, data: obj3.data, preserveScrollMomentum: obj3.preserveScrollMomentum, automaticallyAdjustsScrollIndicatorInsets: obj3.automaticallyAdjustsScrollIndicatorInsets, keyboardDismissMode: obj3.keyboardDismissMode, keyboardShouldPersistTaps: obj3.keyboardShouldPersistTaps, showsVerticalScrollIndicator: obj3.showsVerticalScrollIndicator, lockableScrollableContentOffsetY: obj3.lockableScrollableContentOffsetY, bottomViewabilityInsetRef: obj3.bottomViewabilityInsetRef, onViewableItemsChanged: obj3.onViewableItemsChanged, viewabilityConfigCallbackPairs: obj3.viewabilityConfigCallbackPairs } = simultaneousHandlers);
    tmp5 = jsx(tmp(8371).BottomSheetFlashList, { ListHeaderComponent: null, onScroll: null, contentContainerStyle: null, scrollIndicatorInsets: null, renderItem: null, getItemType: null, data: null, preserveScrollMomentum: null, automaticallyAdjustsScrollIndicatorInsets: null, keyboardDismissMode: null, keyboardShouldPersistTaps: null, showsVerticalScrollIndicator: null, lockableScrollableContentOffsetY: null, bottomViewabilityInsetRef: null, onViewableItemsChanged: null, viewabilityConfigCallbackPairs: null, ref });
  }
  return tmp5;
}));
forwardRefResult.displayName = "AppLauncherFlashList";
const result1 = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherFlashList.tsx");

export default forwardRefResult;
export const useAppLauncherFlashListProps = fn;