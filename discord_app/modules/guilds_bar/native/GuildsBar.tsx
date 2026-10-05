// discord_app/modules/guilds_bar/native/GuildsBar.tsx
import NativeViewDefault from "../../core/native/NativeView.tsx";
import FastListDefault from "../../../lib/native/FastList.tsx";
import FavoritesGuildIntroPopoverDefault from "../../favorites/onboarding/FavoritesGuildIntroPopover.tsx";
import StartupProfilerDefault from "../../app_startup/StartupProfiler.tsx";
import registerSidebarVisibilityMethods from "utils/registerSidebarVisibilityMethods.tsx";
import useGuildsBarGestureDefault from "hooks/useGuildsBarGesture.tsx";
import useGuildsBarPropsDefault from "hooks/useGuildsBarProps.tsx";
import GuildsBarDragPreviewDefault from "GuildsBarDragPreview.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, current, dependencyMap, enableHome;

let closure_4;
let hasOwnProperty;
let react = react_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ wrapper: { position: "relative", overflow: "visible", flex: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (current, arg1) => {
      let ref2;
      let ref3;
      let tmp2;
      let tmp3;
      _require = current;
      const ref = arg1;
      let obj = require("react");
      const cResult = obj.c(6);
      let obj2 = react;
      dependencyMap = react.useRef(current);
      react = react.useRef(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          let closure_0;
          const obj = current(ref2[5]);
          if (obj.isAndroid()) {
            const obj2 = ref(ref2[6]);
            current = obj2.addOnPipModeChangedListener((arg0) => {
              const tmp = arg0;
              if (tmp) {
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
        };
        const items = [];
        let num = 0;
        cResult[0] = fn;
        let num2 = 1;
        cResult[1] = items;
        tmp2 = fn;
        tmp3 = items;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const effect = obj2.useEffect(tmp2, tmp3);
      if (cResult[2] === arg1) {
        let tmp5;
        let tmp6;
        if (cResult[3] === current) {
          tmp5 = cResult[4];
          tmp6 = cResult[5];
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
            const tmp4 = current.insetStart === current.insetStart && current.insetEnd === current.insetEnd;
            if (tmp4) {
              const current2 = ref.current;
              if (current2 != null) {
                const blocks = current2.computeBlocks();
              }
            }
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
      let ref3;
      const ref = arg1;
      const ref2 = react.useRef(current);
      react = react.useRef(false);
      const effect = react.useEffect(() => {
        let closure_0;
        const obj = current(ref2[5]);
        if (obj.isAndroid()) {
          const obj2 = ref(ref2[6]);
          current = obj2.addOnPipModeChangedListener((arg0) => {
            const tmp = arg0;
            if (tmp) {
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
      }, []);
      const items = [arg1, current];
      const effect1 = react.useEffect(() => {
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
            const tmp4 = current.insetStart === current.insetStart && current.insetEnd === current.insetEnd;
            if (tmp4) {
              const current2 = ref.current;
              if (current2 != null) {
                const blocks = current2.computeBlocks();
              }
            }
          }
        }
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (enableHome) => {
        let fastListRef;
        let gesture;
        let items1;
        let listDataProps;
        let listProps;
        let obj4;
        let onFastListScroll;
        let onFastListScrollWorklet;
        let persistantKeys;
        let scrollPosition;
        let scrollerRef;
        let tmp10;
        let tmp13;
        let tmp9;
        let obj = fastListRef(576);
        const cResult = obj.c(23);
        enableHome = enableHome.enableHome;
        const tmp5 = closure_6();
        const tmp7 = useGuildsBarGestureDefault();
        ({ scrollPosition, gesture, scrollerRef, fastListRef } = tmp7);
        ({ persistantKeys, onFastListScroll, onFastListScrollWorklet } = tmp7);
        ({ listProps, listDataProps } = useGuildsBarPropsDefault(fastListRef));
        useGuildsBarPropsDefault(fastListRef);
        if (cResult[0] !== fastListRef) {
          const fn = function u() {
            const obj = registerSidebarVisibilityMethods;
            const result = obj.registerGuildVisibilityMethod(fastListRef);
          };
          const items = [fastListRef];
          cResult[0] = fastListRef;
          cResult[1] = fn;
          cResult[2] = items;
          tmp10 = items;
          tmp9 = fn;
        } else {
          tmp9 = cResult[1];
          tmp10 = cResult[2];
        }
        const effect = react.useEffect(tmp9, tmp10);
        closure_7(listProps, fastListRef);
        if (cResult[3] !== (undefined !== enableHome && enableHome)) {
          let obj2;
          if (undefined !== enableHome && enableHome) {
            obj2 = { overflow: "visible" };
          }
          cResult[3] = undefined !== enableHome && enableHome;
          cResult[4] = obj2;
          tmp13 = obj2;
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
                        let tmp14;
                        let tmp21;
                        let tmp20;
                        if (cResult[13] === tmp13) {
                          tmp14 = cResult[14];
                        }
                        const _Symbol = Symbol;
                        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp23 = closure_4(GuildsBarDragPreviewDefault, {});
                          const tmp24 = closure_4(FavoritesGuildIntroPopoverDefault, {});
                          cResult[15] = tmp23;
                          cResult[16] = tmp24;
                          tmp21 = tmp24;
                          tmp20 = tmp23;
                        } else {
                          tmp20 = cResult[15];
                          tmp21 = cResult[16];
                        }
                        if (cResult[17] === tmp5.wrapper) {
                          let tmp25;
                          if (cResult[18] === tmp14) {
                            tmp25 = cResult[19];
                          }
                          if (cResult[20] === gesture) {
                            let tmp28;
                            if (cResult[21] === tmp25) {
                              tmp28 = cResult[22];
                            }
                            return tmp28;
                          }
                          const obj3 = {
                            profile: fastListRef(11571).Profiles.Guilds,
                            children: closure_4(fastListRef(6140).GestureDetector, obj4),
                          };
                          obj4 = { gesture, children: tmp25 };
                          const tmp6Result = StartupProfilerDefault;
                          const tmp31 = closure_4(tmp6Result, obj3);
                          cResult[20] = gesture;
                          cResult[21] = tmp25;
                          cResult[22] = tmp31;
                          tmp28 = tmp31;
                        }
                        const obj5 = {
                          style: tmp5.wrapper,
                          collapsable: false,
                          nativeID: "guilds-bar-view",
                          children: items1,
                        };
                        items1 = [tmp14, tmp20, tmp21];
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
        const obj6 = {
          ref: fastListRef,
          manualRef: scrollerRef,
          disableContentWrappers: true,
          onScroll: onFastListScroll,
          onScrollWorklet: onFastListScrollWorklet,
          scrollPosValue: scrollPosition,
          stickySectionsVariant: "sticky-mount",
          optimizeListItemRender: true,
          persistantKeys,
          disableRecyclingOnFullCompute: true,
          style: tmp13,
          nativeID: "guilds-bar-fast-list",
        };
        const tmp6Result2 = FastListDefault;
        const merged = Object.assign(listProps);
        const merged1 = Object.assign(listDataProps);
        const tmp18 = closure_4(tmp6Result2, obj6);
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
      }
    : (enableHome) => {
        let GestureDetector;
        let gesture;
        let items1;
        let listDataProps;
        let listProps;
        let obj2;
        let obj3;
        let obj5;
        let onFastListScroll;
        let onFastListScrollWorklet;
        let persistantKeys;
        let scrollPosition;
        let scrollerRef;
        let tmp11;
        let flag = enableHome.enableHome;
        if (flag === undefined) {
          flag = false;
        }
        const tmp = closure_6();
        const tmp4 = useGuildsBarGestureDefault();
        const fastListRef = tmp4.fastListRef;
        ({ scrollPosition, gesture, scrollerRef, persistantKeys, onFastListScroll, onFastListScrollWorklet } = tmp4);
        ({ listProps, listDataProps } = useGuildsBarPropsDefault(fastListRef));
        const items = [fastListRef];
        useGuildsBarPropsDefault(fastListRef);
        const effect = react.useEffect(() => {
          const obj = registerSidebarVisibilityMethods;
          const result = obj.registerGuildVisibilityMethod(fastListRef);
        }, items);
        closure_7(listProps, fastListRef);
        let obj = { profile: fastListRef(11571).Profiles.Guilds, children: closure_4(GestureDetector, obj2) };
        const tmp9 = StartupProfilerDefault;
        obj2 = { gesture, children: closure_5(tmp11, obj3) };
        GestureDetector = fastListRef(6140).GestureDetector;
        obj3 = { style: tmp.wrapper, collapsable: false, nativeID: "guilds-bar-view", children: items1 };
        const obj4 = {
          ref: fastListRef,
          manualRef: scrollerRef,
          disableContentWrappers: true,
          onScroll: onFastListScroll,
          onScrollWorklet: onFastListScrollWorklet,
          scrollPosValue: scrollPosition,
          stickySectionsVariant: "sticky-mount",
          optimizeListItemRender: true,
          persistantKeys,
          disableRecyclingOnFullCompute: true,
          style: obj5,
          nativeID: "guilds-bar-fast-list",
        };
        tmp11 = NativeViewDefault;
        const tmp12 = FastListDefault;
        const merged = Object.assign(listProps);
        const merged1 = Object.assign(listDataProps);
        obj5 = undefined;
        if (flag) {
          obj5 = { overflow: "visible" };
        }
        items1 = [
          closure_4(tmp12, obj4),
          closure_4(GuildsBarDragPreviewDefault, {}),
          closure_4(FavoritesGuildIntroPopoverDefault, {}),
        ];
        return closure_4(tmp9, obj);
      },
);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBar.tsx");

export default memoResult;
