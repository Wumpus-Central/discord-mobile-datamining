// discord_app/modules/app_launcher/native/base_components/AppLauncherFlashList.tsx
import useAnimatedScrollLock from "../../../voice_panel/native/controls/utils/useAnimatedScrollLock.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
fn = (arg0) => useAnimatedScrollLock.useAnimatedScrollLock(arg0);
const forwardRefResult = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (simultaneousHandlers, ref) => {
        let viewabilityConfigCallbackPairs = simultaneousHandlers;
        let AnimatedFlashList = simultaneousHandlers;
        let tmp = dependencyMap;
        const cResult = simultaneousHandlers(576).c(35);
        const obj = simultaneousHandlers(576);
        const items = [simultaneousHandlers.simultaneousHandlers];
        showsVerticalScrollIndicator = noop.useMemo(
          () =>
            noop.forwardRef((arg0, ref) => {
              const memo = React.useMemo(() => {
                const Gesture = simultaneousHandlers(closure_2_1[3]).Gesture;
                return Gesture.Native().simultaneousWithExternalGesture(closure_1_0);
              }, []);
              const obj = { gesture: memo, children: null };
              const merged = Object.assign(arg0);
              obj.children = <ScrollView ref={ref} />;
              return jsx(simultaneousHandlers(dependencyMap[3]).GestureDetector, { gesture: memo, children: null });
            }),
          items,
        );
        if (
          obj2.useAppLauncherContext().entrypoint ===
          simultaneousHandlers.simultaneousHandlers(8932).AppLauncherEntrypoint.VOICE
        ) {
          if (cResult[0] === showsVerticalScrollIndicator) {
            if (cResult[1] === viewabilityConfigCallbackPairs.ListHeaderComponent) {
              if (cResult[2] === viewabilityConfigCallbackPairs.animatedOnScroll) {
                if (cResult[3] === viewabilityConfigCallbackPairs.animatedProps) {
                  if (cResult[4] === viewabilityConfigCallbackPairs.automaticallyAdjustsScrollIndicatorInsets) {
                    if (cResult[5] === viewabilityConfigCallbackPairs.contentContainerStyle) {
                      if (cResult[6] === viewabilityConfigCallbackPairs.data) {
                        if (cResult[7] === viewabilityConfigCallbackPairs.getItemType) {
                          if (cResult[8] === viewabilityConfigCallbackPairs.keyboardDismissMode) {
                            if (cResult[9] === viewabilityConfigCallbackPairs.keyboardShouldPersistTaps) {
                              if (cResult[10] === viewabilityConfigCallbackPairs.onViewableItemsChanged) {
                                if (cResult[11] === viewabilityConfigCallbackPairs.renderItem) {
                                  if (cResult[12] === viewabilityConfigCallbackPairs.scrollIndicatorInsets) {
                                    if (cResult[13] === viewabilityConfigCallbackPairs.showsVerticalScrollIndicator) {
                                      if (
                                        cResult[14] === viewabilityConfigCallbackPairs.viewabilityConfigCallbackPairs
                                      ) {
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
          AnimatedFlashList = AnimatedFlashList(8371).AnimatedFlashList;
          const obj6 = {
            renderScrollComponent: showsVerticalScrollIndicator,
            ListHeaderComponent: null,
            onScroll: null,
            contentContainerStyle: null,
            scrollIndicatorInsets: null,
            renderItem: null,
            getItemType: null,
            data: null,
            automaticallyAdjustsScrollIndicatorInsets: null,
            keyboardDismissMode: null,
            keyboardShouldPersistTaps: null,
            showsVerticalScrollIndicator: null,
            onViewableItemsChanged: null,
            viewabilityConfigCallbackPairs: null,
            animatedProps: null,
            overScrollMode: "never",
            ref: null,
          };
          ({
            ListHeaderComponent: obj4.ListHeaderComponent,
            animatedOnScroll: obj4.onScroll,
            contentContainerStyle: obj4.contentContainerStyle,
            scrollIndicatorInsets: obj4.scrollIndicatorInsets,
            renderItem: obj4.renderItem,
            getItemType: obj4.getItemType,
            data: obj4.data,
            automaticallyAdjustsScrollIndicatorInsets: obj4.automaticallyAdjustsScrollIndicatorInsets,
            keyboardDismissMode: obj4.keyboardDismissMode,
            keyboardShouldPersistTaps: obj4.keyboardShouldPersistTaps,
            showsVerticalScrollIndicator: obj4.showsVerticalScrollIndicator,
            onViewableItemsChanged: obj4.onViewableItemsChanged,
            viewabilityConfigCallbackPairs: obj4.viewabilityConfigCallbackPairs,
            animatedProps: obj4.animatedProps,
          } = viewabilityConfigCallbackPairs);
          obj6.ref = ref;
          tmp = (
            <AnimatedFlashList
              renderScrollComponent={showsVerticalScrollIndicator}
              ListHeaderComponent={null}
              onScroll={null}
              contentContainerStyle={null}
              scrollIndicatorInsets={null}
              renderItem={null}
              getItemType={null}
              data={null}
              automaticallyAdjustsScrollIndicatorInsets={null}
              keyboardDismissMode={null}
              keyboardShouldPersistTaps={null}
              showsVerticalScrollIndicator={null}
              onViewableItemsChanged={null}
              viewabilityConfigCallbackPairs={null}
              animatedProps={null}
              overScrollMode="never"
              ref={null}
            />
          );
          cResult[0] = showsVerticalScrollIndicator;
          cResult[1] = viewabilityConfigCallbackPairs.ListHeaderComponent;
          cResult[2] = viewabilityConfigCallbackPairs.animatedOnScroll;
          cResult[3] = viewabilityConfigCallbackPairs.animatedProps;
          cResult[4] = viewabilityConfigCallbackPairs.automaticallyAdjustsScrollIndicatorInsets;
          cResult[5] = viewabilityConfigCallbackPairs.contentContainerStyle;
          cResult[6] = viewabilityConfigCallbackPairs.data;
          cResult[7] = viewabilityConfigCallbackPairs.getItemType;
          cResult[8] = viewabilityConfigCallbackPairs.keyboardDismissMode;
          cResult[9] = viewabilityConfigCallbackPairs.keyboardShouldPersistTaps;
          cResult[10] = viewabilityConfigCallbackPairs.onViewableItemsChanged;
          cResult[11] = viewabilityConfigCallbackPairs.renderItem;
          ({ scrollIndicatorInsets: tmp2[12], showsVerticalScrollIndicator } = viewabilityConfigCallbackPairs);
          cResult[13] = showsVerticalScrollIndicator;
          viewabilityConfigCallbackPairs = viewabilityConfigCallbackPairs.viewabilityConfigCallbackPairs;
          cResult[14] = viewabilityConfigCallbackPairs;
          cResult[15] = ref;
          cResult[16] = tmp;
        } else {
          if (cResult[17] === viewabilityConfigCallbackPairs.ListHeaderComponent) {
            if (cResult[18] === viewabilityConfigCallbackPairs.automaticallyAdjustsScrollIndicatorInsets) {
              if (cResult[19] === viewabilityConfigCallbackPairs.bottomViewabilityInsetRef) {
                if (cResult[20] === viewabilityConfigCallbackPairs.contentContainerStyle) {
                  if (cResult[21] === viewabilityConfigCallbackPairs.data) {
                    if (cResult[22] === viewabilityConfigCallbackPairs.getItemType) {
                      if (cResult[23] === viewabilityConfigCallbackPairs.keyboardDismissMode) {
                        if (cResult[24] === viewabilityConfigCallbackPairs.keyboardShouldPersistTaps) {
                          if (cResult[25] === viewabilityConfigCallbackPairs.lockableScrollableContentOffsetY) {
                            if (cResult[26] === viewabilityConfigCallbackPairs.onScroll) {
                              if (cResult[27] === viewabilityConfigCallbackPairs.onViewableItemsChanged) {
                                if (cResult[28] === viewabilityConfigCallbackPairs.preserveScrollMomentum) {
                                  if (cResult[29] === viewabilityConfigCallbackPairs.renderItem) {
                                    if (cResult[30] === viewabilityConfigCallbackPairs.scrollIndicatorInsets) {
                                      if (cResult[31] === viewabilityConfigCallbackPairs.showsVerticalScrollIndicator) {
                                        if (
                                          cResult[32] === viewabilityConfigCallbackPairs.viewabilityConfigCallbackPairs
                                        ) {
                                          if (cResult[33] === ref) {
                                            let tmp3 = cResult[34];
                                          }
                                          return tmp3;
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
          const obj7 = {
            ListHeaderComponent: null,
            onScroll: null,
            contentContainerStyle: null,
            scrollIndicatorInsets: null,
            renderItem: null,
            getItemType: null,
            data: null,
            preserveScrollMomentum: null,
            automaticallyAdjustsScrollIndicatorInsets: null,
            keyboardDismissMode: null,
            keyboardShouldPersistTaps: null,
            showsVerticalScrollIndicator: null,
            lockableScrollableContentOffsetY: null,
            bottomViewabilityInsetRef: null,
            onViewableItemsChanged: null,
            viewabilityConfigCallbackPairs: null,
            ref: null,
          };
          ({
            ListHeaderComponent: obj3.ListHeaderComponent,
            onScroll: obj3.onScroll,
            contentContainerStyle: obj3.contentContainerStyle,
            scrollIndicatorInsets: obj3.scrollIndicatorInsets,
            renderItem: obj3.renderItem,
            getItemType: obj3.getItemType,
            data: obj3.data,
            preserveScrollMomentum: obj3.preserveScrollMomentum,
            automaticallyAdjustsScrollIndicatorInsets: obj3.automaticallyAdjustsScrollIndicatorInsets,
            keyboardDismissMode: obj3.keyboardDismissMode,
            keyboardShouldPersistTaps: obj3.keyboardShouldPersistTaps,
            showsVerticalScrollIndicator: obj3.showsVerticalScrollIndicator,
            lockableScrollableContentOffsetY: obj3.lockableScrollableContentOffsetY,
            bottomViewabilityInsetRef: obj3.bottomViewabilityInsetRef,
            onViewableItemsChanged: obj3.onViewableItemsChanged,
            viewabilityConfigCallbackPairs: obj3.viewabilityConfigCallbackPairs,
          } = viewabilityConfigCallbackPairs);
          obj7.ref = ref;
          const tmp5 = jsx(AnimatedFlashList(8371).BottomSheetFlashList, {
            ListHeaderComponent: null,
            onScroll: null,
            contentContainerStyle: null,
            scrollIndicatorInsets: null,
            renderItem: null,
            getItemType: null,
            data: null,
            preserveScrollMomentum: null,
            automaticallyAdjustsScrollIndicatorInsets: null,
            keyboardDismissMode: null,
            keyboardShouldPersistTaps: null,
            showsVerticalScrollIndicator: null,
            lockableScrollableContentOffsetY: null,
            bottomViewabilityInsetRef: null,
            onViewableItemsChanged: null,
            viewabilityConfigCallbackPairs: null,
            ref: null,
          });
          cResult[17] = viewabilityConfigCallbackPairs.ListHeaderComponent;
          cResult[18] = viewabilityConfigCallbackPairs.automaticallyAdjustsScrollIndicatorInsets;
          cResult[19] = viewabilityConfigCallbackPairs.bottomViewabilityInsetRef;
          cResult[20] = viewabilityConfigCallbackPairs.contentContainerStyle;
          cResult[21] = viewabilityConfigCallbackPairs.data;
          cResult[22] = viewabilityConfigCallbackPairs.getItemType;
          cResult[23] = viewabilityConfigCallbackPairs.keyboardDismissMode;
          cResult[24] = viewabilityConfigCallbackPairs.keyboardShouldPersistTaps;
          cResult[25] = viewabilityConfigCallbackPairs.lockableScrollableContentOffsetY;
          cResult[26] = viewabilityConfigCallbackPairs.onScroll;
          cResult[27] = viewabilityConfigCallbackPairs.onViewableItemsChanged;
          cResult[28] = viewabilityConfigCallbackPairs.preserveScrollMomentum;
          cResult[29] = viewabilityConfigCallbackPairs.renderItem;
          cResult[30] = viewabilityConfigCallbackPairs.scrollIndicatorInsets;
          cResult[31] = viewabilityConfigCallbackPairs.showsVerticalScrollIndicator;
          cResult[32] = viewabilityConfigCallbackPairs.viewabilityConfigCallbackPairs;
          cResult[33] = ref;
          cResult[34] = tmp5;
          tmp3 = tmp5;
        }
        obj2 = simultaneousHandlers(10994);
      }
    : (simultaneousHandlers, ref) => {
        const items = [simultaneousHandlers.simultaneousHandlers];
        let memo = noop.useMemo(
          () =>
            noop.forwardRef((arg0, ref) => {
              const memo = React.useMemo(() => {
                const Gesture = simultaneousHandlers(closure_2_1[3]).Gesture;
                return Gesture.Native().simultaneousWithExternalGesture(closure_1_0);
              }, []);
              const obj = { gesture: memo, children: null };
              const merged = Object.assign(arg0);
              obj.children = <ScrollView ref={ref} />;
              return jsx(simultaneousHandlers(dependencyMap[3]).GestureDetector, { gesture: memo, children: null });
            }),
          items,
        );
        if (
          obj.useAppLauncherContext().entrypoint ===
          simultaneousHandlers.simultaneousHandlers(8932).AppLauncherEntrypoint.VOICE
        ) {
          const obj5 = {
            renderScrollComponent: memo,
            ListHeaderComponent: null,
            onScroll: null,
            contentContainerStyle: null,
            scrollIndicatorInsets: null,
            renderItem: null,
            getItemType: null,
            data: null,
            automaticallyAdjustsScrollIndicatorInsets: null,
            keyboardDismissMode: null,
            keyboardShouldPersistTaps: null,
            showsVerticalScrollIndicator: null,
            onViewableItemsChanged: null,
            viewabilityConfigCallbackPairs: null,
            animatedProps: null,
            overScrollMode: "never",
            ref: null,
          };
          ({
            ListHeaderComponent: obj2.ListHeaderComponent,
            animatedOnScroll: obj2.onScroll,
            contentContainerStyle: obj2.contentContainerStyle,
            scrollIndicatorInsets: obj2.scrollIndicatorInsets,
            renderItem: obj2.renderItem,
            getItemType: obj2.getItemType,
            data: obj2.data,
            automaticallyAdjustsScrollIndicatorInsets: obj2.automaticallyAdjustsScrollIndicatorInsets,
            keyboardDismissMode: obj2.keyboardDismissMode,
            keyboardShouldPersistTaps: obj2.keyboardShouldPersistTaps,
            showsVerticalScrollIndicator: obj2.showsVerticalScrollIndicator,
            onViewableItemsChanged: obj2.onViewableItemsChanged,
            viewabilityConfigCallbackPairs: obj2.viewabilityConfigCallbackPairs,
            animatedProps: obj2.animatedProps,
          } = simultaneousHandlers);
          obj5.ref = ref;
          let tmp5 = jsx(tmp(8371).AnimatedFlashList, {
            renderScrollComponent: memo,
            ListHeaderComponent: null,
            onScroll: null,
            contentContainerStyle: null,
            scrollIndicatorInsets: null,
            renderItem: null,
            getItemType: null,
            data: null,
            automaticallyAdjustsScrollIndicatorInsets: null,
            keyboardDismissMode: null,
            keyboardShouldPersistTaps: null,
            showsVerticalScrollIndicator: null,
            onViewableItemsChanged: null,
            viewabilityConfigCallbackPairs: null,
            animatedProps: null,
            overScrollMode: "never",
            ref: null,
          });
        } else {
          const obj6 = {
            ListHeaderComponent: null,
            onScroll: null,
            contentContainerStyle: null,
            scrollIndicatorInsets: null,
            renderItem: null,
            getItemType: null,
            data: null,
            preserveScrollMomentum: null,
            automaticallyAdjustsScrollIndicatorInsets: null,
            keyboardDismissMode: null,
            keyboardShouldPersistTaps: null,
            showsVerticalScrollIndicator: null,
            lockableScrollableContentOffsetY: null,
            bottomViewabilityInsetRef: null,
            onViewableItemsChanged: null,
            viewabilityConfigCallbackPairs: null,
            ref: null,
          };
          ({
            ListHeaderComponent: obj3.ListHeaderComponent,
            onScroll: obj3.onScroll,
            contentContainerStyle: obj3.contentContainerStyle,
            scrollIndicatorInsets: obj3.scrollIndicatorInsets,
            renderItem: obj3.renderItem,
            getItemType: obj3.getItemType,
            data: obj3.data,
            preserveScrollMomentum: obj3.preserveScrollMomentum,
            automaticallyAdjustsScrollIndicatorInsets: obj3.automaticallyAdjustsScrollIndicatorInsets,
            keyboardDismissMode: obj3.keyboardDismissMode,
            keyboardShouldPersistTaps: obj3.keyboardShouldPersistTaps,
            showsVerticalScrollIndicator: obj3.showsVerticalScrollIndicator,
            lockableScrollableContentOffsetY: obj3.lockableScrollableContentOffsetY,
            bottomViewabilityInsetRef: obj3.bottomViewabilityInsetRef,
            onViewableItemsChanged: obj3.onViewableItemsChanged,
            viewabilityConfigCallbackPairs: obj3.viewabilityConfigCallbackPairs,
          } = simultaneousHandlers);
          obj6.ref = ref;
          tmp5 = jsx(tmp(8371).BottomSheetFlashList, {
            ListHeaderComponent: null,
            onScroll: null,
            contentContainerStyle: null,
            scrollIndicatorInsets: null,
            renderItem: null,
            getItemType: null,
            data: null,
            preserveScrollMomentum: null,
            automaticallyAdjustsScrollIndicatorInsets: null,
            keyboardDismissMode: null,
            keyboardShouldPersistTaps: null,
            showsVerticalScrollIndicator: null,
            lockableScrollableContentOffsetY: null,
            bottomViewabilityInsetRef: null,
            onViewableItemsChanged: null,
            viewabilityConfigCallbackPairs: null,
            ref: null,
          });
        }
        return tmp5;
      },
);
forwardRefResult.displayName = "AppLauncherFlashList";
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherFlashList.tsx");

export default forwardRefResult;
export const useAppLauncherFlashListProps = fn;
