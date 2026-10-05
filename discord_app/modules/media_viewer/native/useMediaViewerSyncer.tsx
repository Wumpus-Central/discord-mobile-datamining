// === Module 7966: useMediaViewerSyncer ===

// Module 7966 (useMediaViewerSyncer)
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 7935 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7939 */;
import portraitThumbnailHelpers from "portraitThumbnailHelpers" /* 7969 */;
import resolveSelectedIndex from "resolveSelectedIndex" /* 7970 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 7967 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function makeMediaViewerSyncer(sources) {
  let __initData10;
  let __initData11;
  let __initData12;
  let __initData13;
  let __initData14;
  let __initData15;
  let __initData16;
  let __initData6;
  let __initData7;
  let __initData8;
  let __initData9;
  let _false;
  let animProps;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let onEndReached;
  let onEndReachedThreshold;
  let thumbnailScrollPositions;
  let viewerScrolling;
  let zoomed;
  sources = sources.sources;
  ({ animProps, thumbnailScrollPositions } = sources);
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  zoomed = undefined;
  function onSelectedIndexChange() {
    if ("thumbnails" === swipeSource.get()) {
      const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
      MediaViewerAnalytics.markActionPerformed(MediaViewerAnalyticsManager.IncrementableMediaViewerActions.THUMBNAIL_SWIPE);
    } else if ("viewer" === swipeSource.get()) {
      const MediaViewerAnalytics3 = MediaViewerAnalyticsManager.MediaViewerAnalytics;
      MediaViewerAnalytics3.markActionPerformed(MediaViewerAnalyticsManager.IncrementableMediaViewerActions.VIEWER_SWIPE);
    }
    const MediaViewerAnalytics2 = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    MediaViewerAnalytics2.markActionPerformed(MediaViewerAnalyticsManager.IncrementableMediaViewerActions.SELECTED_ITEM_CHANGE);
  }
  let selectedIndex = animProps.selectedIndex;
  ({ thumbnailsIndex: c3, thumbnailsScrolling: c4, thumbnailsAnimateTo: c5, viewerPos: c6, viewerScrolling: c7, zoomed } = animProps);
  const swipeSource = animProps.swipeSource;
  let c11 = false;
  ({ onEndReached, onEndReachedThreshold } = sources);
  if (thumbnailScrollPositions.length > 0) {
    const end = thumbnailScrollPositions[0].end;
    const start = thumbnailScrollPositions[0].start;
  }
  let obj = {
    index: selectedIndex,
    sources,
    zoomed,
    thumbnailScrollPositions,
    variableWidthThumbnailsEnabled: false,
    useThumbnailsProps(onSelect, maxIndex) {
      let THUMBNAIL_MIN_WIDTH;
      let derivedValue2;
      let diff1;
      let fn;
      let mapped;
      let mapped1;
      sources = onSelect;
      thumbnailScrollPositions = maxIndex;
      let obj = sources(selectedIndex[5]);
      const animatedRef = obj.useAnimatedRef();
      let obj2 = sources(selectedIndex[6]);
      size = obj2.useMediaViewerDimensions();
      let width = size.width;
      const height = size.height;
      const rect = thumbnailScrollPositions(selectedIndex[7])();
      let obj3 = { onBeginDrag: N, onEndDrag: C, onScroll: R, onMomentumBegin: L, onMomentumEnd: fn };
      const tmp2 = sources(selectedIndex[5]);
      class N {
        constructor() {
          const result = mapped1.set(2 | mapped1.get());
          const result1 = swipeSource.set("thumbnails");
        }
      }
      const obj4 = { thumbnailsScrolling: mapped1, SCROLLING_DRAG: 2, swipeSource };
      N.__closure = obj4;
      N.__workletHash = 16224520186325;
      N.__initData = _false;
      class C {
        constructor() {
          const result = mapped1.set(-3 & mapped1.get());
        }
      }
      C.__closure = { thumbnailsScrolling: mapped1, SCROLLING_DRAG: 2 };
      C.__workletHash = 5779899826871;
      C.__initData = __initData;
      class R {
        constructor(contentOffset) {
          const result = contentOffset.contentOffset.x / onSelect;
          if ("thumbnails" === swipeSource.get()) {
            const _Math3 = Math;
            const _Math4 = Math;
            const _Math5 = Math;
            const result1 = mapped.set(Math.max(0, Math.min(Math.round(result), maxIndex)));
          } else {
            const _Math = Math;
            const _Math2 = Math;
          }
          if (derivedValue2.get() >= 0) {
            const value = mapped.get();
            if (value === derivedValue2.get()) {
              const result2 = derivedValue2.set(-1);
              const result3 = selectedIndex.set(mapped.get());
            }
          } else {
            const tmp8 = 0 !== diff1.get() || 0 !== mapped1.get();
            let tmp9 = "thumbnails" === swipeSource.get() && tmp8;
            if (tmp9) {
              const value2 = mapped.get();
              tmp9 = value2 !== selectedIndex.get();
            }
            if (tmp9) {
              const result4 = selectedIndex.set(mapped.get());
              const obj3 = ReanimatedRexport;
              obj3.runOnJS(onSelectedIndexChange)();
            }
          }
        }
      }
      let obj5 = { variableWidthThumbnailsEnabled: _false, thumbnailScrollPositions, thumbnailSize: onSelect, swipeSource, maxIndex, thumbnailsIndex: mapped, thumbnailsAnimateTo: derivedValue2, selectedIndex: animatedRef, viewerScrolling: diff1, thumbnailsScrolling: mapped1, runOnJS: sources(selectedIndex[5]).runOnJS, onSelectedIndexChange };
      const useAnimatedScrollHandler = tmp2.useAnimatedScrollHandler;
      R.__closure = obj5;
      R.__workletHash = 6212589685153;
      R.__initData = __initData2;
      class L {
        constructor() {
          const result = mapped1.set(4 | mapped1.get());
          const result1 = swipeSource.set("thumbnails");
        }
      }
      L.__closure = { thumbnailsScrolling: mapped1, SCROLLING_MOMENTUM: 4, swipeSource };
      L.__workletHash = 4138169755088;
      L.__initData = __initData3;
      fn = function h() {
        const result = mapped1.set(-5 & mapped1.get());
      };
      fn.__closure = { thumbnailsScrolling: mapped1, SCROLLING_MOMENTUM: 4 };
      fn.__workletHash = 1471443652144;
      fn.__initData = __initData4;
      let items = [animatedRef];
      const animatedScrollHandler = useAnimatedScrollHandler(obj3);
      const callback = React.useCallback((arg0) => {
        if (!THUMBNAIL_MIN_WIDTH.get()) {
          const result = derivedValue2.set(arg0);
          const result1 = swipeSource.set("thumbnails");
        }
      }, []);
      const callback1 = React.useCallback((arg0) => {
        const scrollStart = thumbnailScrollPositions[arg0].scrollStart;
        const obj = ReanimatedRexport;
        obj.scrollTo(animatedRef, scrollStart, 0, true);
      }, items);
      const obj6 = sources(selectedIndex[5]);
      class V {
        constructor() {
          if (derivedValue2.get() >= 0) {
            const obj2 = ReanimatedRexport;
            obj2.scrollTo(animatedRef, derivedValue2.get() * onSelect, 0, true);
          }
        }
      }
      V.__closure = { thumbnailsAnimateTo: derivedValue2, variableWidthThumbnailsEnabled: _false, runOnJS: sources(selectedIndex[5]).runOnJS, scrollVarWidthThumbnails: callback1, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
      V.__workletHash = 1697086875584;
      V.__initData = __initData5;
      ({ thumbnailsAnimateTo: derivedValue2, variableWidthThumbnailsEnabled: _false, runOnJS: sources(selectedIndex[5]).runOnJS, scrollVarWidthThumbnails: callback1, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect });
      let derivedValue = obj6.useDerivedValue(V);
      let items1 = [animatedRef];
      const callback2 = React.useCallback((arg0) => {
        const obj = portraitThumbnailHelpers;
        const result = obj.lerpVarWidthThumbnailScrollBounds(thumbnailScrollPositions, arg0);
        const obj2 = ReanimatedRexport;
        obj2.scrollTo(animatedRef, result, 0, false);
      }, items1);
      const obj8 = sources(selectedIndex[5]);
      class U {
        constructor() {
          let tmp = 0 !== diff1.get();
          if (tmp) {
            const value = mapped.get();
            tmp = value !== viewerPos.get();
          }
          if (tmp) {
            const obj = ReanimatedRexport;
            obj.scrollTo(animatedRef, viewerPos.get() * onSelect, 0, false);
          }
        }
      }
      U.__closure = { viewerScrolling: diff1, thumbnailsIndex: mapped, viewerPos, variableWidthThumbnailsEnabled: _false, runOnJS: sources(selectedIndex[5]).runOnJS, lerpScrollVarWidthThumbnails: callback2, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
      U.__workletHash = 10477949154269;
      U.__initData = __initData6;
      ({ viewerScrolling: diff1, thumbnailsIndex: mapped, viewerPos, variableWidthThumbnailsEnabled: _false, runOnJS: sources(selectedIndex[5]).runOnJS, lerpScrollVarWidthThumbnails: callback2, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect });
      let derivedValue1 = obj8.useDerivedValue(U);
      mapped = sources.map((item, index) => index);
      mapped1 = sources.map((item) => {
        const obj = onSelect(animatedRef[9]);
        size = obj.flattenSource(item);
        let num = 0;
        if (null != size) {
          const _Math = Math;
          const _Math2 = Math;
          num = (Math.max(Math.min(size.width * (diff / size.height), diff1), THUMBNAIL_MIN_WIDTH) - THUMBNAIL_MIN_WIDTH) / 2;
        }
        return num;
      });
      function ee() {
        let num = 0;
        if (mapped1.get() <= 0) {
          const obj = ReanimatedRexport;
          num = -obj.interpolate(viewerPos.get(), mapped, mapped1, "clamp");
        }
        return num;
      }
      const obj10 = sources(selectedIndex[5]);
      ee.__closure = { thumbnailsScrolling: mapped1, interpolate: sources(selectedIndex[5]).interpolate, viewerPos, interpolateInput: mapped, interpolateOutput: mapped1 };
      ee.__workletHash = 10097839523885;
      ee.__initData = __initData7;
      ({ thumbnailsScrolling: mapped1, interpolate: sources(selectedIndex[5]).interpolate, viewerPos, interpolateInput: mapped, interpolateOutput: mapped1 });
      derivedValue2 = obj10.useDerivedValue(ee);
      const diff = (width - onSelect) / 2 - rect.left;
      viewerPos = diff;
      function te() {
        let width;
        if (diff1.get() > 0) {
          width = diff + derivedValue2.get();
        } else {
          const obj = spring;
          width = obj.withSpring(diff + derivedValue2.get(), { overshootClamping: true });
        }
        return { width };
      }
      const obj12 = sources(selectedIndex[5]);
      te.__closure = { viewerScrolling: diff1, headerBufferSize: diff, margin: derivedValue2, withSpring: sources(selectedIndex[10]).withSpring };
      te.__workletHash = 11328769587377;
      te.__initData = __initData8;
      ({ viewerScrolling: diff1, headerBufferSize: diff, margin: derivedValue2, withSpring: sources(selectedIndex[10]).withSpring });
      diff1 = (width - onSelect) / 2 - rect.right;
      const animatedStyle = obj12.useAnimatedStyle(te);
      function ne() {
        let width;
        if (diff1.get() > 0) {
          width = diff1 + derivedValue2.get();
        } else {
          const obj = spring;
          width = obj.withSpring(diff1 + derivedValue2.get(), { overshootClamping: true });
        }
        return { width };
      }
      const obj14 = sources(selectedIndex[5]);
      ne.__closure = { viewerScrolling: diff1, footerBufferSize: diff1, margin: derivedValue2, withSpring: sources(selectedIndex[10]).withSpring };
      ne.__workletHash = 10532164558483;
      ne.__initData = __initData9;
      ({ viewerScrolling: diff1, footerBufferSize: diff1, margin: derivedValue2, withSpring: sources(selectedIndex[10]).withSpring });
      const animatedStyle1 = obj14.useAnimatedStyle(ne);
      const callback3 = React.useCallback((width, index) => {
        let height;
        onSelect = index;
        let obj = onSelect(animatedRef[5]);
        const fn = function i() {
          const items = [index - 1, index, index + 1];
          const obj = sources(selectedIndex[5]);
          return obj.interpolate(diff.get(), items, [0.4, 1, 0.4], "clamp");
        };
        fn.__closure = { interpolate: onSelect(animatedRef[5]).interpolate, viewerPos, index };
        fn.__workletHash = 5784737783661;
        fn.__initData = __initData;
        ({ interpolate: onSelect(animatedRef[5]).interpolate, viewerPos, index });
        const derivedValue = obj.useDerivedValue(fn);
        const bound = Math.max(Math.min(width.width * (diff / width.height), diff1), THUMBNAIL_MIN_WIDTH);
        const fn2 = function o() {
          let interpolateResult;
          if (mapped1.get() > 0) {
            interpolateResult = zoomed;
          } else {
            const items = [index - 1, index, index + 1];
            const items1 = [zoomed, bound, zoomed];
            const obj = sources(selectedIndex[5]);
            interpolateResult = obj.interpolate(diff.get(), items, items1, "clamp");
          }
          return interpolateResult;
        };
        const obj3 = onSelect(animatedRef[5]);
        fn2.__closure = { thumbnailsScrolling: mapped1, THUMBNAIL_MIN_WIDTH, interpolate: onSelect(animatedRef[5]).interpolate, viewerPos, index, sourceWidth: bound };
        fn2.__workletHash = 12440745987072;
        fn2.__initData = __initData2;
        ({ thumbnailsScrolling: mapped1, THUMBNAIL_MIN_WIDTH, interpolate: onSelect(animatedRef[5]).interpolate, viewerPos, index, sourceWidth: bound });
        const derivedValue1 = obj3.useDerivedValue(fn2);
        const fn3 = function u() {
          let withSpringResult;
          if (diff1.get() > 0) {
            withSpringResult = derivedValue1.get();
          } else {
            const obj = sources(selectedIndex[10]);
            withSpringResult = obj.withSpring(derivedValue1.get(), { overshootClamping: true });
          }
          size = { width: withSpringResult, height, opacity: derivedValue.get() };
          return size;
        };
        const obj5 = onSelect(animatedRef[5]);
        fn3.__closure = { viewerScrolling: diff1, _width: derivedValue1, withSpring: onSelect(animatedRef[10]).withSpring, THUMBNAIL_HEIGHT: diff, opacity: derivedValue };
        fn3.__workletHash = 513826663139;
        fn3.__initData = __initData3;
        ({ viewerScrolling: diff1, _width: derivedValue1, withSpring: onSelect(animatedRef[10]).withSpring, THUMBNAIL_HEIGHT: diff, opacity: derivedValue });
        return obj5.useAnimatedStyle(fn3);
      }, []);
      function ie() {
        return !THUMBNAIL_MIN_WIDTH.get();
      }
      const obj17 = { zoomed };
      ie.__closure = obj17;
      ie.__workletHash = 7667674289153;
      ie.__initData = __initData10;
      const obj16 = sources(selectedIndex[5]);
      const obj18 = {
        ref: animatedRef,
        headerBufferStyle: animatedStyle,
        headerBufferSize: diff,
        footerBufferStyle: animatedStyle1,
        footerBufferSize: diff1,
        scrollEnabled: obj16.useDerivedValue(ie),
        onScroll: animatedScrollHandler,
        onSelect: callback,
        useThumbnailStyle: callback3,
        screenWidth: width,
        screenHeight: height,
        itemSize(arg0, arg1) {
          return swipeSource;
        }
      };
      return obj18;
    },
    useViewerProps() {
      let fn3;
      let fn4;
      let fn5;
      let isSpuriousContentSizeReset;
      let memo;
      let sharedValue;
      let obj = sources(selectedIndex[5]);
      const animatedRef = obj.useAnimatedRef();
      let obj2 = sources(selectedIndex[6]);
      size = obj2.useMediaViewerDimensions();
      const width = size.width;
      const height = size.height;
      const obj3 = sources(selectedIndex[5]);
      let fn = function o() {
        if (-1 !== isSpuriousContentSizeReset.get()) {
          const obj2 = ReanimatedRexport;
          obj2.scrollTo(animatedRef, isSpuriousContentSizeReset.get() * width, 0, false);
        }
      };
      fn.__closure = { thumbnailsAnimateTo: isSpuriousContentSizeReset, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, screenWidth: width };
      fn.__workletHash = 11860326453239;
      fn.__initData = __initData11;
      ({ thumbnailsAnimateTo: isSpuriousContentSizeReset, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, screenWidth: width });
      const derivedValue = obj3.useDerivedValue(fn);
      let fn2 = function l() {
        const tmp = 0 === sharedValue.get() || viewerScrolling.get() > 0 || -1 !== isSpuriousContentSizeReset.get();
        if (!tmp) {
          const obj = ReanimatedRexport;
          obj.scrollTo(animatedRef, memo.get() * width, 0, false);
        }
      };
      const obj5 = sources(selectedIndex[5]);
      fn2.__closure = { thumbnailsScrolling: sharedValue, viewerScrolling, thumbnailsAnimateTo: isSpuriousContentSizeReset, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailsIndex: memo, screenWidth: width };
      fn2.__workletHash = 16855593341498;
      fn2.__initData = __initData12;
      ({ thumbnailsScrolling: sharedValue, viewerScrolling, thumbnailsAnimateTo: isSpuriousContentSizeReset, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailsIndex: memo, screenWidth: width });
      const derivedValue1 = obj5.useDerivedValue(fn2);
      const diff = animatedRef.length - 1;
      selectedIndex = diff;
      const items = [diff, width];
      memo = React.useMemo(() => {
        let fn;
        let fn2;
        let fn3;
        let fn4;
        let fn5;
        let maxIndex;
        let obj = { onBeginDrag: fn, onEndDrag: fn2, onScroll: fn3, onMomentumBegin: fn4, onMomentumEnd: fn5 };
        fn = function l() {
          const result = viewerScrolling.set(2 | viewerScrolling.get());
          const result1 = closure_1_9.set("viewer");
        };
        let obj2 = { viewerScrolling, SCROLLING_DRAG: 2, swipeSource };
        fn.__closure = obj2;
        fn.__workletHash = 1082965969005;
        fn.__initData = __initData;
        fn2 = function o() {
          const result = viewerScrolling.set(-3 & viewerScrolling.get());
        };
        fn2.__closure = { viewerScrolling, SCROLLING_DRAG: 2 };
        fn2.__workletHash = 1722948238280;
        fn2.__initData = __initData2;
        fn3 = function i(offsetX) {
          const result = viewerPos.set(offsetX / width);
          if ("viewer" === swipeSource.get()) {
            const obj = { offsetX, pageSize: width, maxIndex };
            const obj2 = sources(selectedIndex[11]);
            const tmp10 = selectedIndex;
            selectedIndex = obj2.resolveSelectedIndex(obj);
            const tmp4 = null != selectedIndex && diff.get() !== selectedIndex;
            if (tmp4) {
              const result1 = diff.set(selectedIndex);
              const tmp9Result = sources(tmp10[5]);
              tmp9Result.runOnJS(onSelectedIndexChange)();
            }
          }
        };
        fn3.__closure = { viewerPos, screenWidth: width, swipeSource, resolveSelectedIndex: resolveSelectedIndex.resolveSelectedIndex, maxIndex: diff, selectedIndex, runOnJS: ReanimatedRexport.runOnJS, onSelectedIndexChange };
        fn3.__workletHash = 4243462798580;
        fn3.__initData = __initData3;
        fn4 = function n() {
          const result = viewerScrolling.set(4 | viewerScrolling.get());
          const result1 = closure_1_9.set("viewer");
        };
        fn4.__closure = { viewerScrolling, SCROLLING_MOMENTUM: 4, swipeSource };
        fn4.__workletHash = 16635271467463;
        fn4.__initData = __initData4;
        fn5 = function t() {
          const result = viewerScrolling.set(-5 & viewerScrolling.get());
        };
        fn5.__closure = { viewerScrolling, SCROLLING_MOMENTUM: 4 };
        fn5.__workletHash = 8806989101472;
        fn5.__initData = __initData5;
        ({ viewerPos, screenWidth: width, swipeSource, resolveSelectedIndex: resolveSelectedIndex.resolveSelectedIndex, maxIndex: diff, selectedIndex, runOnJS: ReanimatedRexport.runOnJS, onSelectedIndexChange });
        return obj;
      }, items);
      const obj7 = sources(selectedIndex[5]);
      sharedValue = obj7.useSharedValue(0);
      isSpuriousContentSizeReset = function isSpuriousContentSizeReset(arg0) {
        let tmp = closure_10;
        if (tmp) {
          const _Date = Date;
          const timestamp = Date.now();
          tmp = timestamp - sharedValue.get() < 500;
        }
        if (tmp) {
          tmp = 0 === arg0;
        }
        if (tmp) {
          tmp = 0 !== selectedIndex.get();
        }
        return tmp;
      };
      const obj8 = { IS_ANDROID: onSelectedIndexChange, contentSizeLastChangedAt: sharedValue, selectedIndex };
      isSpuriousContentSizeReset.__closure = obj8;
      isSpuriousContentSizeReset.__workletHash = 16891385947601;
      isSpuriousContentSizeReset.__initData = __initData13;
      const obj10 = { onBeginDrag: memo.onBeginDrag, onEndDrag: fn3, onScroll: fn4, onMomentumBegin: memo.onMomentumBegin, onMomentumEnd: fn5 };
      fn3 = function b(contentOffset) {
        memo.onEndDrag();
        memo.onScroll(contentOffset.contentOffset.x);
      };
      fn3.__closure = { onScrollWorklets: memo };
      fn3.__workletHash = 14520405122599;
      fn3.__initData = __initData14;
      fn4 = function f(contentOffset) {
        if (typeof isSpuriousContentSizeReset === "function") {
          let tmp2 = closure_10;
          if (tmp2) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp2 = timestamp - sharedValue.get() < 500;
          }
          if (tmp2) {
            tmp2 = 0 === tmp;
          }
          if (tmp2) {
            tmp2 = 0 !== selectedIndex.get();
          }
          if (tmp2) {
            const obj = ReanimatedRexport;
            obj.scrollTo(animatedRef, selectedIndex.get() * width, contentOffset.contentOffset.y, false);
          } else {
            const tmp8 = 0 === viewerScrolling.get() && 0 === sharedValue.get() && -1 === isSpuriousContentSizeReset.get();
            if (!tmp8) {
              memo.onScroll(contentOffset.contentOffset.x);
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      const obj9 = sources(selectedIndex[5]);
      fn4.__closure = { isSpuriousContentSizeReset, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, selectedIndex, screenWidth: width, viewerScrolling, thumbnailsScrolling: sharedValue, thumbnailsAnimateTo: isSpuriousContentSizeReset, onScrollWorklets: memo };
      fn4.__workletHash = 7185374511625;
      fn4.__initData = __initData15;
      fn5 = function _(contentOffset) {
        if (typeof isSpuriousContentSizeReset === "function") {
          let tmp2 = closure_10;
          if (tmp2) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp2 = timestamp - sharedValue.get() < 500;
          }
          if (tmp2) {
            tmp2 = 0 === tmp;
          }
          if (tmp2) {
            tmp2 = 0 !== selectedIndex.get();
          }
          if (!tmp2) {
            memo.onScroll(contentOffset.contentOffset.x);
          }
          memo.onMomentumEnd();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      fn5.__closure = { isSpuriousContentSizeReset, onScrollWorklets: memo };
      fn5.__workletHash = 6883658005321;
      fn5.__initData = __initData16;
      const items1 = [animatedRef, width, sharedValue];
      ({ isSpuriousContentSizeReset, scrollTo: sources(selectedIndex[5]).scrollTo, ref: animatedRef, selectedIndex, screenWidth: width, viewerScrolling, thumbnailsScrolling: sharedValue, thumbnailsAnimateTo: isSpuriousContentSizeReset, onScrollWorklets: memo });
      const items2 = [width, height, animatedRef];
      const animatedScrollHandler = obj9.useAnimatedScrollHandler(obj10);
      const callback = React.useCallback(() => {
        const current = animatedRef.current;
        if (current != null) {
          current.scrollTo(tmp, false);
        }
        const result = sharedValue.set(Date.now());
      }, items1);
      const effect = React.useEffect(() => {
        const current = animatedRef.current;
        if (current != null) {
          current.reset();
        }
      }, items2);
      const obj12 = {
        ref: animatedRef,
        onScroll: animatedScrollHandler,
        onContentSizeChange: callback,
        useItemVisible: React.useCallback((index) => {
          let closure_0 = index;
          let tmp = memo(sharedValue.useState(index === selectedIndex.get()), 2);
          let closure_1 = tmp3;
          const first = tmp[0];
          let obj = animatedRef(diff[5]);
          const fn = function l() {
            return index === diff.get();
          };
          fn.__closure = { index, selectedIndex };
          fn.__workletHash = 16022091092784;
          fn.__initData = __initData6;
          const fn2 = function o(arg0, arg1) {
            const tmp = null != arg1 && arg1 !== arg0;
            if (tmp) {
              const obj = sources(selectedIndex[5]);
              obj.runOnJS(closure_1)(arg0);
            }
          };
          fn2.__closure = { runOnJS: animatedRef(diff[5]).runOnJS, setVisible: tmp[1] };
          fn2.__workletHash = 16809313881276;
          fn2.__initData = __initData7;
          ({ runOnJS: animatedRef(diff[5]).runOnJS, setVisible: tmp[1] });
          const animatedReaction = obj.useAnimatedReaction(fn, fn2);
          return first;
        }, [])
      };
      return obj12;
    },
    onEndReached,
    onEndReachedThreshold
  };
  return obj;
}
function buildThumbnailScrollPositions(sources) {
  const items = [];
  let num = 0;
  let num2 = 0;
  if (0 < sources.length) {
    do {
      let tmp6;
      let obj = MediaSourceUtil;
      size = obj.flattenSource(sources[num]);
      if (null != size) {
        let _Math = Math;
        let _Math2 = Math;
        let sum = num2 + (Math.max(Math.min(size.width * (metroRequire / size.height), metroImportDefault), metroImportAll) + 2 * hasOwnProperty);
        let num3 = 0;
        if (0 !== num) {
          let _Math3 = Math;
          num3 = Math.floor(num2 + (sum - num2 - (items[0].end - items[0].start)) / 2);
        }
        let obj2 = { start: num2, end: sum, scrollStart: num3 };
        let arr = items.push(obj2);
        tmp6 = sum;
      } else {
        let obj3 = { start: num2, end: num2, scrollStart: num2 };
        let arr3 = items.push(obj3);
        tmp6 = num2;
      }
      num = num + 1;
      num2 = tmp6;
    } while (num < sources.length);
  }
  return items;
}
({ THUMBNAIL_MARGIN: hasOwnProperty, THUMBNAIL_HEIGHT: metroRequire, THUMBNAIL_MAX_WIDTH: metroImportDefault, THUMBNAIL_MIN_WIDTH: metroImportAll, THUMBNAIL_WIDTH_MARGIN: c9 } = Constants);
let closure_10 = PlatformUtils.isAndroid();
let closure_11 = { code: "function useMediaViewerSyncerTsx1(){const{thumbnailsScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_DRAG);swipeSource.set('thumbnails');}" };
let closure_12 = { code: "function useMediaViewerSyncerTsx2(){const{thumbnailsScrolling,SCROLLING_DRAG}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_DRAG);}" };
let closure_13 = { code: "function useMediaViewerSyncerTsx3(event){const{variableWidthThumbnailsEnabled,thumbnailScrollPositions,thumbnailSize,swipeSource,maxIndex,thumbnailsIndex,thumbnailsAnimateTo,selectedIndex,viewerScrolling,thumbnailsScrolling,runOnJS,onSelectedIndexChange}=this.__closure;let thumbnails=0;if(variableWidthThumbnailsEnabled){if(event.contentOffset.x<0){thumbnails=0;}else if(event.contentOffset.x>=thumbnailScrollPositions[thumbnailScrollPositions.length-1].end){thumbnails=thumbnailScrollPositions.length-1;}else{for(let i=0;i<thumbnailScrollPositions.length;i++){const startPos=thumbnailScrollPositions[i].scrollStart;let endPos=i<thumbnailScrollPositions.length-1?thumbnailScrollPositions[i+1].scrollStart:startPos;if(i===thumbnailScrollPositions.length-1){endPos=thumbnailScrollPositions[i].end;}if(event.contentOffset.x>=startPos&&event.contentOffset.x<endPos){thumbnails=i+(event.contentOffset.x-startPos)/(endPos-startPos);break;}}}}else{thumbnails=event.contentOffset.x/thumbnailSize;}if(swipeSource.get()==='thumbnails'||Math.abs(Math.round(thumbnails)-thumbnails)<0.01){const index=Math.max(0,Math.min(Math.round(thumbnails),maxIndex));thumbnailsIndex.set(index);}if(thumbnailsAnimateTo.get()>=0){if(thumbnailsIndex.get()===thumbnailsAnimateTo.get()){thumbnailsAnimateTo.set(-1);selectedIndex.set(thumbnailsIndex.get());}return;}const wasTouched=viewerScrolling.get()!==0||thumbnailsScrolling.get()!==0;if(swipeSource.get()==='thumbnails'&&wasTouched&&thumbnailsIndex.get()!==selectedIndex.get()){selectedIndex.set(thumbnailsIndex.get());runOnJS(onSelectedIndexChange)();}}" };
let closure_14 = { code: "function useMediaViewerSyncerTsx4(){const{thumbnailsScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('thumbnails');}" };
let closure_15 = { code: "function useMediaViewerSyncerTsx5(){const{thumbnailsScrolling,SCROLLING_MOMENTUM}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_MOMENTUM);}" };
let closure_16 = { code: "function useMediaViewerSyncerTsx6(){const{thumbnailsAnimateTo,variableWidthThumbnailsEnabled,runOnJS,scrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(thumbnailsAnimateTo.get()<0)return;if(variableWidthThumbnailsEnabled){runOnJS(scrollVarWidthThumbnails)(thumbnailsAnimateTo.get());}else{scrollTo(ref,thumbnailsAnimateTo.get()*thumbnailSize,0,true);}}" };
let closure_17 = { code: "function useMediaViewerSyncerTsx7(){const{viewerScrolling,thumbnailsIndex,viewerPos,variableWidthThumbnailsEnabled,runOnJS,lerpScrollVarWidthThumbnails,scrollTo,ref,thumbnailSize}=this.__closure;if(viewerScrolling.get()===0)return;else if(thumbnailsIndex.get()!==viewerPos.get()){if(variableWidthThumbnailsEnabled){runOnJS(lerpScrollVarWidthThumbnails)(viewerPos.get());}else{scrollTo(ref,viewerPos.get()*thumbnailSize,0,false);}}}" };
let closure_18 = { code: "function useMediaViewerSyncerTsx8(){const{thumbnailsScrolling,interpolate,viewerPos,interpolateInput,interpolateOutput}=this.__closure;return thumbnailsScrolling.get()>0?0:-interpolate(viewerPos.get(),interpolateInput,interpolateOutput,'clamp');}" };
let closure_19 = { code: "function useMediaViewerSyncerTsx9(){const{viewerScrolling,headerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?headerBufferSize+margin.get():withSpring(headerBufferSize+margin.get(),{overshootClamping:true})};}" };
let closure_20 = { code: "function useMediaViewerSyncerTsx10(){const{viewerScrolling,footerBufferSize,margin,withSpring}=this.__closure;return{width:viewerScrolling.get()>0?footerBufferSize+margin.get():withSpring(footerBufferSize+margin.get(),{overshootClamping:true})};}" };
let closure_21 = { code: "function useMediaViewerSyncerTsx11(){const{interpolate,viewerPos,index}=this.__closure;return interpolate(viewerPos.get(),[index-1,index,index+1],[0.4,1,0.4],'clamp');}" };
let closure_22 = { code: "function useMediaViewerSyncerTsx13(){const{thumbnailsScrolling,THUMBNAIL_MIN_WIDTH,interpolate,viewerPos,index,sourceWidth}=this.__closure;return thumbnailsScrolling.get()>0?THUMBNAIL_MIN_WIDTH:interpolate(viewerPos.get(),[index-1,index,index+1],[THUMBNAIL_MIN_WIDTH,sourceWidth,THUMBNAIL_MIN_WIDTH],'clamp');}" };
let closure_23 = { code: "function useMediaViewerSyncerTsx14(){const{viewerScrolling,_width,withSpring,THUMBNAIL_HEIGHT,opacity}=this.__closure;return{width:viewerScrolling.get()>0?_width.get():withSpring(_width.get(),{overshootClamping:true}),height:THUMBNAIL_HEIGHT,opacity:opacity.get()};}" };
let closure_24 = { code: "function useMediaViewerSyncerTsx15(){const{zoomed}=this.__closure;return!zoomed.get();}" };
let closure_25 = { code: "function useMediaViewerSyncerTsx16(){const{thumbnailsAnimateTo,scrollTo,ref,screenWidth}=this.__closure;if(thumbnailsAnimateTo.get()===-1)return;scrollTo(ref,thumbnailsAnimateTo.get()*screenWidth,0,false);}" };
let closure_26 = { code: "function useMediaViewerSyncerTsx17(){const{thumbnailsScrolling,viewerScrolling,thumbnailsAnimateTo,scrollTo,ref,thumbnailsIndex,screenWidth}=this.__closure;if(thumbnailsScrolling.get()===0||viewerScrolling.get()>0||thumbnailsAnimateTo.get()!==-1)return;scrollTo(ref,thumbnailsIndex.get()*screenWidth,0,false);}" };
let closure_27 = { code: "function useMediaViewerSyncerTsx18(){const{viewerScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_DRAG);swipeSource.set('viewer');}" };
let closure_28 = { code: "function useMediaViewerSyncerTsx19(){const{viewerScrolling,SCROLLING_DRAG}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_DRAG);}" };
let closure_29 = { code: "function useMediaViewerSyncerTsx20(offsetX){const{viewerPos,screenWidth,swipeSource,resolveSelectedIndex,maxIndex,selectedIndex,runOnJS,onSelectedIndexChange}=this.__closure;viewerPos.set(offsetX/screenWidth);if(swipeSource.get()!=='viewer')return;const nearest=resolveSelectedIndex({offsetX:offsetX,pageSize:screenWidth,maxIndex:maxIndex});if(nearest==null||selectedIndex.get()===nearest)return;selectedIndex.set(nearest);runOnJS(onSelectedIndexChange)();}" };
let closure_30 = { code: "function useMediaViewerSyncerTsx21(){const{viewerScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('viewer');}" };
let closure_31 = { code: "function useMediaViewerSyncerTsx22(){const{viewerScrolling,SCROLLING_MOMENTUM}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_MOMENTUM);}" };
let closure_32 = { code: "function isSpuriousContentSizeReset_useMediaViewerSyncerTsx23(offsetX){const{IS_ANDROID,contentSizeLastChangedAt,selectedIndex}=this.__closure;return IS_ANDROID&&Date.now()-contentSizeLastChangedAt.get()<500&&offsetX===0&&selectedIndex.get()!==0;}" };
let closure_33 = { code: "function useMediaViewerSyncerTsx24(event){const{onScrollWorklets}=this.__closure;onScrollWorklets.onEndDrag();onScrollWorklets.onScroll(event.contentOffset.x);}" };
let closure_34 = { code: "function useMediaViewerSyncerTsx25(event){const{isSpuriousContentSizeReset,scrollTo,ref,selectedIndex,screenWidth,viewerScrolling,thumbnailsScrolling,thumbnailsAnimateTo,onScrollWorklets}=this.__closure;if(isSpuriousContentSizeReset(event.contentOffset.x)){scrollTo(ref,selectedIndex.get()*screenWidth,event.contentOffset.y,false);return;}if(viewerScrolling.get()===0&&thumbnailsScrolling.get()===0&&thumbnailsAnimateTo.get()===-1)return;onScrollWorklets.onScroll(event.contentOffset.x);}" };
let closure_35 = { code: "function useMediaViewerSyncerTsx26(event){const{isSpuriousContentSizeReset,onScrollWorklets}=this.__closure;if(!isSpuriousContentSizeReset(event.contentOffset.x)){onScrollWorklets.onScroll(event.contentOffset.x);}onScrollWorklets.onMomentumEnd();}" };
let closure_36 = { code: "function useMediaViewerSyncerTsx27(){const{index,selectedIndex}=this.__closure;return index===selectedIndex.get();}" };
let closure_37 = { code: "function useMediaViewerSyncerTsx28(result,previous){const{runOnJS,setVisible}=this.__closure;if(previous==null||previous===result)return;runOnJS(setVisible)(result);}" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let initialIndex;
  let onEndReached;
  let onEndReachedThreshold;
  let sources;
  let tmp4;
  let tmpResult;
  let tmpResult10;
  let tmpResult11;
  let tmpResult12;
  let tmpResult13;
  let tmpResult14;
  let tmpResult8;
  let tmpResult9;
  const obj = react2;
  const cResult = obj.c(7);
  ({ sources, initialIndex, onEndReached, onEndReachedThreshold } = arg0);
  if (cResult[0] !== initialIndex) {
    const obj2 = { selectedIndex: tmpResult.makeMutable(initialIndex), thumbnailsIndex: tmpResult8.makeMutable(initialIndex), thumbnailsScrolling: tmpResult9.makeMutable(0), thumbnailsAnimateTo: tmpResult10.makeMutable(-1), viewerPos: tmpResult11.makeMutable(initialIndex), viewerScrolling: tmpResult12.makeMutable(0), zoomed: tmpResult13.makeMutable(false), swipeSource: tmpResult14.makeMutable(undefined) };
    tmpResult = ReanimatedRexport;
    tmpResult8 = ReanimatedRexport;
    tmpResult9 = ReanimatedRexport;
    tmpResult10 = ReanimatedRexport;
    tmpResult11 = ReanimatedRexport;
    tmpResult12 = ReanimatedRexport;
    tmpResult13 = ReanimatedRexport;
    cResult[0] = initialIndex;
    cResult[1] = obj2;
    tmp4 = obj2;
    tmpResult14 = ReanimatedRexport;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    if (cResult[3] === onEndReached) {
      if (cResult[4] === onEndReachedThreshold) {
        let tmp5;
        if (cResult[5] === sources) {
          tmp5 = cResult[6];
        }
        return tmp5;
      }
    }
  }
  const obj3 = { sources, animProps: tmp4, thumbnailScrollPositions: buildThumbnailScrollPositions(sources), onEndReached, onEndReachedThreshold };
  const tmp6 = makeMediaViewerSyncer(obj3);
  cResult[2] = tmp4;
  cResult[3] = onEndReached;
  cResult[4] = onEndReachedThreshold;
  cResult[5] = sources;
  cResult[6] = tmp6;
  tmp5 = tmp6;
}) : ((sources) => {
  sources = sources.sources;
  const initialIndex = sources.initialIndex;
  const onEndReached = sources.onEndReached;
  const onEndReachedThreshold = sources.onEndReachedThreshold;
  let memo;
  const items = [initialIndex];
  memo = memo.useMemo(() => {
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    let obj6;
    let obj7;
    let obj8;
    let obj9;
    const obj = { selectedIndex: obj2.makeMutable(initialIndex), thumbnailsIndex: obj3.makeMutable(initialIndex), thumbnailsScrolling: obj4.makeMutable(0), thumbnailsAnimateTo: obj5.makeMutable(-1), viewerPos: obj6.makeMutable(initialIndex), viewerScrolling: obj7.makeMutable(0), zoomed: obj8.makeMutable(false), swipeSource: obj9.makeMutable(undefined) };
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    obj4 = ReanimatedRexport;
    obj5 = ReanimatedRexport;
    obj6 = ReanimatedRexport;
    obj7 = ReanimatedRexport;
    obj8 = ReanimatedRexport;
    obj9 = ReanimatedRexport;
    return obj;
  }, items);
  const items1 = [sources, memo, onEndReached, onEndReachedThreshold];
  return memo.useMemo(() => {
    const obj = { sources, animProps: memo, thumbnailScrollPositions: buildThumbnailScrollPositions(sources), onEndReached, onEndReachedThreshold };
    return makeMediaViewerSyncer(obj);
  }, items1);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSyncer.tsx");

export const useMediaViewerSyncer = tmp3;