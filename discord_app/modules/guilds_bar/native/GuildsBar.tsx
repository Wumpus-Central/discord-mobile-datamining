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
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles({ wrapper: { position: "relative", overflow: "visible", flex: 1 } });
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (current, arg1) => {
      _require = current;
      const cResult = require("c").c(6);
      dependencyMap = noop.useRef(current);
      noop = noop.useRef(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          if (obj.isAndroid()) {
            current = ref(ref2[6]).addOnPipModeChangedListener((arg0) => {
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
          obj = current(ref2[5]);
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp2 = fn;
        tmp3 = items;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const effect = obj2.useEffect(tmp2, tmp3);
      if (cResult[2] === arg1) {
        if (cResult[3] === current) {
          let tmp5 = cResult[4];
          let tmp6 = cResult[5];
        }
        const effect1 = obj2.useEffect(tmp5, tmp6);
      }
      const fn2 = function c() {
        current = ref2.current;
        ref2.current = current;
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
      };
      const items1 = [arg1, current];
      cResult[2] = arg1;
      cResult[3] = current;
      cResult[4] = fn2;
      cResult[5] = items1;
      tmp6 = items1;
      tmp5 = fn2;
    }
  : (current, arg1) => {
      noop.useRef(current);
      noop = noop.useRef(false);
      const effect = noop.useEffect(() => {
        if (obj.isAndroid()) {
          current = ref(ref2[6]).addOnPipModeChangedListener((arg0) => {
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
        obj = current(ref2[5]);
      }, []);
      const items = [arg1, current];
      const effect1 = noop.useEffect(() => {
        current = ref2.current;
        ref2.current = current;
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
      }, items);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBar.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (enableHome) => {
        const cResult = fastListRef(576).c(23);
        enableHome = enableHome.enableHome;
        const tmp5 = closure_6();
        const tmp7 = useGuildsBarGestureDefault();
        ({ scrollPosition, gesture, scrollerRef, fastListRef } = tmp7);
        ({ persistantKeys, onFastListScroll, onFastListScrollWorklet } = tmp7);
        const obj = fastListRef(576);
        ({ listProps, listDataProps } = useGuildsBarPropsDefault(fastListRef));
        if (cResult[0] !== fastListRef) {
          const fn = function u() {
            const result = registerSidebarVisibilityMethods.registerGuildVisibilityMethod(fastListRef);
          };
          const items = [fastListRef];
          cResult[0] = fastListRef;
          cResult[1] = fn;
          cResult[2] = items;
          let tmp10 = items;
          let tmp9 = fn;
        } else {
          tmp9 = cResult[1];
          tmp10 = cResult[2];
        }
        const effect = noop.useEffect(tmp9, tmp10);
        closure_7(listProps, fastListRef);
        if (cResult[3] !== (undefined !== enableHome && enableHome)) {
          let obj2;
          if (tmp4) {
            obj2 = { overflow: "visible" };
          }
          cResult[3] = tmp4;
          cResult[4] = obj2;
          let tmp13 = obj2;
        } else {
          tmp13 = cResult[4];
        }
        if (cResult[5] === fastListRef) {
          if (cResult[6] === listDataProps) {
            if (cResult[7] === listProps) {
              if (cResult[8] === onFastListScroll) {
                if (cResult[9] === onFastListScrollWorklet) {
                  if (cResult[10] === persistantKeys) {
                    if (cResult[11] === scrollPosition) {
                      if (cResult[12] === scrollerRef) {
                        if (cResult[13] === tmp13) {
                          let tmp14 = cResult[14];
                        }
                        const _Symbol = Symbol;
                        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp23 = closure_4(GuildsBarDragPreviewDefault, {});
                          const tmp24 = closure_4(FavoritesGuildIntroPopoverDefault, {});
                          cResult[15] = tmp23;
                          cResult[16] = tmp24;
                          let tmp21 = tmp24;
                          let tmp20 = tmp23;
                        } else {
                          tmp20 = cResult[15];
                          tmp21 = cResult[16];
                        }
                        if (cResult[17] === tmp5.wrapper) {
                          if (cResult[18] === tmp14) {
                            let tmp25 = cResult[19];
                          }
                          if (cResult[20] === gesture) {
                            if (cResult[21] === tmp25) {
                              let tmp28 = cResult[22];
                            }
                            return tmp28;
                          }
                          const obj3 = { profile: fastListRef(11584).Profiles.Guilds, children: null };
                          const obj4 = { gesture, children: tmp25 };
                          obj3.children = closure_4(fastListRef(6147).GestureDetector, obj4);
                          const tmp31 = closure_4(StartupProfilerDefault, obj3);
                          cResult[20] = gesture;
                          cResult[21] = tmp25;
                          cResult[22] = tmp31;
                          tmp28 = tmp31;
                          const tmp6Result = StartupProfilerDefault;
                        }
                        const obj5 = {
                          style: tmp5.wrapper,
                          collapsable: false,
                          nativeID: "guilds-bar-view",
                          children: null,
                        };
                        const items1 = [tmp14, tmp20, tmp21];
                        obj5.children = items1;
                        const tmp27 = closure_5(NativeViewDefault, obj5);
                        cResult[17] = tmp5.wrapper;
                        cResult[18] = tmp14;
                        cResult[19] = tmp27;
                        tmp25 = tmp27;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj6 = {};
        const tmp8 = useGuildsBarPropsDefault(fastListRef);
        const merged = Object.assign(listProps);
        const merged1 = Object.assign(listDataProps);
        obj6.ref = fastListRef;
        obj6.manualRef = scrollerRef;
        obj6.disableContentWrappers = true;
        obj6.onScroll = onFastListScroll;
        obj6.onScrollWorklet = onFastListScrollWorklet;
        obj6.scrollPosValue = scrollPosition;
        obj6.stickySectionsVariant = "sticky-mount";
        obj6.optimizeListItemRender = true;
        obj6.persistantKeys = persistantKeys;
        obj6.disableRecyclingOnFullCompute = true;
        obj6.style = tmp13;
        obj6.nativeID = "guilds-bar-fast-list";
        const tmp18 = closure_4(FastListDefault, obj6);
        cResult[5] = fastListRef;
        cResult[6] = listDataProps;
        cResult[7] = listProps;
        cResult[8] = onFastListScroll;
        cResult[9] = onFastListScrollWorklet;
        cResult[10] = persistantKeys;
        cResult[11] = scrollPosition;
        cResult[12] = scrollerRef;
        cResult[13] = tmp13;
        cResult[14] = tmp18;
        tmp14 = tmp18;
        const tmp6Result2 = FastListDefault;
      }
    : (enableHome) => {
        let flag = enableHome.enableHome;
        if (flag === undefined) {
          flag = false;
        }
        const tmp4 = useGuildsBarGestureDefault();
        const fastListRef = tmp4.fastListRef;
        ({ scrollPosition, gesture, scrollerRef, persistantKeys, onFastListScroll, onFastListScrollWorklet } = tmp4);
        const tmp = closure_6();
        ({ listProps, listDataProps } = useGuildsBarPropsDefault(fastListRef));
        const items = [fastListRef];
        const effect = noop.useEffect(() => {
          const result = registerSidebarVisibilityMethods.registerGuildVisibilityMethod(fastListRef);
        }, items);
        closure_7(listProps, fastListRef);
        const obj = { profile: null, children: null };
        const tmp5 = useGuildsBarPropsDefault(fastListRef);
        obj.profile = fastListRef(11584).Profiles.Guilds;
        const obj2 = { gesture, children: null };
        const obj3 = { style: tmp.wrapper, collapsable: false, nativeID: "guilds-bar-view", children: null };
        const tmp9 = StartupProfilerDefault;
        const obj4 = {};
        const tmp11 = NativeViewDefault;
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
        const items1 = [
          closure_4(FastListDefault, obj4),
          closure_4(GuildsBarDragPreviewDefault, {}),
          closure_4(FavoritesGuildIntroPopoverDefault, {}),
        ];
        obj3.children = items1;
        obj2.children = closure_5(tmp11, obj3);
        obj.children = closure_4(fastListRef(6147).GestureDetector, obj2);
        return closure_4(tmp9, obj);
      },
);
