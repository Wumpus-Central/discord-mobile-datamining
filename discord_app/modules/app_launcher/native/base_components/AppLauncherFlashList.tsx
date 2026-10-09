// discord_app/modules/app_launcher/native/base_components/AppLauncherFlashList.tsx
import useAnimatedScrollLock from "../../../voice_panel/native/controls/utils/useAnimatedScrollLock.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["ref"];
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AppLauncherFlashList(ref) {
      let AnimatedFlashList = simultaneousHandlers;
      let tmp = dependencyMap;
      const cResult = simultaneousHandlers(576).c(38);
      if (cResult[0] !== ref) {
        const tmp6 = _objectWithoutProperties(ref.ref, closure_2);
        cResult[0] = ref.ref;
        cResult[1] = tmp6;
        cResult[2] = ref.ref;
        let tmp3 = ref;
        let viewabilityConfigCallbackPairs = tmp6;
      } else {
        viewabilityConfigCallbackPairs = cResult[1];
        tmp3 = cResult[2];
      }
      const obj = simultaneousHandlers(576);
      const items = [viewabilityConfigCallbackPairs.simultaneousHandlers];
      showsVerticalScrollIndicator = noop.useMemo(
        () =>
          function ScrollViewGestureAware(ref) {
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const memo = React.useMemo(() => {
              const Gesture = simultaneousHandlers(closure_2_1[4]).Gesture;
              return Gesture.Native().simultaneousWithExternalGesture(closure_1_0);
            }, []);
            const obj = { gesture: memo, children: null };
            const merged1 = Object.assign(merged);
            obj.children = <ScrollView ref={ref.ref} />;
            return jsx(simultaneousHandlers(dependencyMap[4]).GestureDetector, { gesture: memo, children: null });
          },
        items,
      );
      if (
        AnimatedFlashListResult.useAppLauncherContext().entrypoint ===
        AnimatedFlashList(10588).AppLauncherEntrypoint.VOICE
      ) {
        if (cResult[3] === showsVerticalScrollIndicator) {
          if (cResult[4] === viewabilityConfigCallbackPairs.ListHeaderComponent) {
            if (cResult[5] === viewabilityConfigCallbackPairs.animatedOnScroll) {
              if (cResult[6] === viewabilityConfigCallbackPairs.animatedProps) {
                if (cResult[7] === viewabilityConfigCallbackPairs.automaticallyAdjustsScrollIndicatorInsets) {
                  if (cResult[8] === viewabilityConfigCallbackPairs.contentContainerStyle) {
                    if (cResult[9] === viewabilityConfigCallbackPairs.data) {
                      if (cResult[10] === viewabilityConfigCallbackPairs.getItemType) {
                        if (cResult[11] === viewabilityConfigCallbackPairs.keyboardDismissMode) {
                          if (cResult[12] === viewabilityConfigCallbackPairs.keyboardShouldPersistTaps) {
                            if (cResult[13] === viewabilityConfigCallbackPairs.onViewableItemsChanged) {
                              if (cResult[14] === viewabilityConfigCallbackPairs.renderItem) {
                                if (cResult[15] === viewabilityConfigCallbackPairs.scrollIndicatorInsets) {
                                  if (cResult[16] === viewabilityConfigCallbackPairs.showsVerticalScrollIndicator) {
                                    if (cResult[17] === viewabilityConfigCallbackPairs.viewabilityConfigCallbackPairs) {
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
        AnimatedFlashList = AnimatedFlashList(8608).AnimatedFlashList;
        const obj2 = {
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
        obj2.ref = tmp3;
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
        cResult[3] = showsVerticalScrollIndicator;
        cResult[4] = viewabilityConfigCallbackPairs.ListHeaderComponent;
        cResult[5] = viewabilityConfigCallbackPairs.animatedOnScroll;
        cResult[6] = viewabilityConfigCallbackPairs.animatedProps;
        cResult[7] = viewabilityConfigCallbackPairs.automaticallyAdjustsScrollIndicatorInsets;
        cResult[8] = viewabilityConfigCallbackPairs.contentContainerStyle;
        cResult[9] = viewabilityConfigCallbackPairs.data;
        cResult[10] = viewabilityConfigCallbackPairs.getItemType;
        cResult[11] = viewabilityConfigCallbackPairs.keyboardDismissMode;
        cResult[12] = viewabilityConfigCallbackPairs.keyboardShouldPersistTaps;
        cResult[13] = viewabilityConfigCallbackPairs.onViewableItemsChanged;
        cResult[14] = viewabilityConfigCallbackPairs.renderItem;
        ({ scrollIndicatorInsets: tmp2[15], showsVerticalScrollIndicator } = viewabilityConfigCallbackPairs);
        cResult[16] = showsVerticalScrollIndicator;
        viewabilityConfigCallbackPairs = viewabilityConfigCallbackPairs.viewabilityConfigCallbackPairs;
        cResult[17] = viewabilityConfigCallbackPairs;
        cResult[18] = tmp3;
        cResult[19] = tmp;
      } else {
        if (cResult[20] === viewabilityConfigCallbackPairs.ListHeaderComponent) {
          if (cResult[21] === viewabilityConfigCallbackPairs.automaticallyAdjustsScrollIndicatorInsets) {
            if (cResult[22] === viewabilityConfigCallbackPairs.bottomViewabilityInsetRef) {
              if (cResult[23] === viewabilityConfigCallbackPairs.contentContainerStyle) {
                if (cResult[24] === viewabilityConfigCallbackPairs.data) {
                  if (cResult[25] === viewabilityConfigCallbackPairs.getItemType) {
                    if (cResult[26] === viewabilityConfigCallbackPairs.keyboardDismissMode) {
                      if (cResult[27] === viewabilityConfigCallbackPairs.keyboardShouldPersistTaps) {
                        if (cResult[28] === viewabilityConfigCallbackPairs.lockableScrollableContentOffsetY) {
                          if (cResult[29] === viewabilityConfigCallbackPairs.onScroll) {
                            if (cResult[30] === viewabilityConfigCallbackPairs.onViewableItemsChanged) {
                              if (cResult[31] === viewabilityConfigCallbackPairs.preserveScrollMomentum) {
                                if (cResult[32] === viewabilityConfigCallbackPairs.renderItem) {
                                  if (cResult[33] === viewabilityConfigCallbackPairs.scrollIndicatorInsets) {
                                    if (cResult[34] === viewabilityConfigCallbackPairs.showsVerticalScrollIndicator) {
                                      if (
                                        cResult[35] === viewabilityConfigCallbackPairs.viewabilityConfigCallbackPairs
                                      ) {
                                        if (cResult[36] === tmp3) {
                                          let tmp7 = cResult[37];
                                        }
                                        return tmp7;
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
        } = viewabilityConfigCallbackPairs);
        obj6.ref = tmp3;
        const tmp9 = jsx(AnimatedFlashList(8608).BottomSheetFlashList, {
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
        cResult[20] = viewabilityConfigCallbackPairs.ListHeaderComponent;
        cResult[21] = viewabilityConfigCallbackPairs.automaticallyAdjustsScrollIndicatorInsets;
        cResult[22] = viewabilityConfigCallbackPairs.bottomViewabilityInsetRef;
        cResult[23] = viewabilityConfigCallbackPairs.contentContainerStyle;
        cResult[24] = viewabilityConfigCallbackPairs.data;
        cResult[25] = viewabilityConfigCallbackPairs.getItemType;
        cResult[26] = viewabilityConfigCallbackPairs.keyboardDismissMode;
        cResult[27] = viewabilityConfigCallbackPairs.keyboardShouldPersistTaps;
        cResult[28] = viewabilityConfigCallbackPairs.lockableScrollableContentOffsetY;
        cResult[29] = viewabilityConfigCallbackPairs.onScroll;
        cResult[30] = viewabilityConfigCallbackPairs.onViewableItemsChanged;
        cResult[31] = viewabilityConfigCallbackPairs.preserveScrollMomentum;
        cResult[32] = viewabilityConfigCallbackPairs.renderItem;
        cResult[33] = viewabilityConfigCallbackPairs.scrollIndicatorInsets;
        cResult[34] = viewabilityConfigCallbackPairs.showsVerticalScrollIndicator;
        cResult[35] = viewabilityConfigCallbackPairs.viewabilityConfigCallbackPairs;
        cResult[36] = tmp3;
        cResult[37] = tmp9;
        tmp7 = tmp9;
      }
      AnimatedFlashListResult = AnimatedFlashList(10587);
    }
  : function AppLauncherFlashList(ref) {
      let merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const items = [merged.simultaneousHandlers];
      let memo = noop.useMemo(
        () =>
          function ScrollViewGestureAware(ref) {
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const memo = React.useMemo(() => {
              const Gesture = simultaneousHandlers(closure_2_1[4]).Gesture;
              return Gesture.Native().simultaneousWithExternalGesture(closure_1_0);
            }, []);
            const obj = { gesture: memo, children: null };
            const merged1 = Object.assign(merged);
            obj.children = <ScrollView ref={ref.ref} />;
            return jsx(simultaneousHandlers(dependencyMap[4]).GestureDetector, { gesture: memo, children: null });
          },
        items,
      );
      if (obj.useAppLauncherContext().entrypoint === merged.simultaneousHandlers(10588).AppLauncherEntrypoint.VOICE) {
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
        } = merged);
        obj5.ref = ref;
        let tmp6 = jsx(tmp2(8608).AnimatedFlashList, {
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
        } = merged);
        obj6.ref = ref;
        tmp6 = jsx(tmp2(8608).BottomSheetFlashList, {
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
      return tmp6;
    };
tmp3.displayName = "AppLauncherFlashList";
function useAppLauncherFlashListProps(arg0) {
  return useAnimatedScrollLock.useAnimatedScrollLock(arg0);
}
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherFlashList.tsx");

export default tmp3;
export { useAppLauncherFlashListProps };
