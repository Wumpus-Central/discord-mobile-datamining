// === Module 8470: useMediaViewerSyncer ===

// Module 8470 (useMediaViewerSyncer)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import THUMBNAIL_MARGIN from "THUMBNAIL_MARGIN";
import set from "set";
import set from "THUMBNAIL_MARGIN";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ THUMBNAIL_MARGIN: c5, THUMBNAIL_HEIGHT: closure_6, THUMBNAIL_MAX_WIDTH: error, THUMBNAIL_MIN_WIDTH: metroImportAll, THUMBNAIL_WIDTH_MARGIN: c9 } = THUMBNAIL_MARGIN);
set = set.isAndroid();
let closure_11 = { code: "function useMediaViewerSyncerTsx1(){const{thumbnailsScrolling,SCROLLING_DRAG,swipeSource}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_DRAG);swipeSource.set('thumbnails');}" };
let closure_12 = { code: "function useMediaViewerSyncerTsx2(){const{thumbnailsScrolling,SCROLLING_DRAG}=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_DRAG);}" };
let closure_13 = { code: "function useMediaViewerSyncerTsx3(event){const{variableWidthThumbnailsEnabled,thumbnailScrollPositions,thumbnailSize,swipeSource,maxIndex,thumbnailsIndex,thumbnailsAnimateTo,selectedIndex,viewerScrolling,thumbnailsScrolling,runOnJS,onSelectedIndexChange}=this.__closure;let thumbnails=0;if(variableWidthThumbnailsEnabled){if(event.contentOffset.x<0){thumbnails=0;}else if(event.contentOffset.x>=thumbnailScrollPositions[thumbnailScrollPositions.length-1].end){thumbnails=thumbnailScrollPositions.length-1;}else{for(let i=0;i<thumbnailScrollPositions.length;i++){const startPos=thumbnailScrollPositions[i].scrollStart;let endPos=i<thumbnailScrollPositions.length-1?thumbnailScrollPositions[i+1].scrollStart:startPos;if(i===thumbnailScrollPositions.length-1){endPos=thumbnailScrollPositions[i].end;}if(event.contentOffset.x>=startPos&&event.contentOffset.x<endPos){thumbnails=i+(event.contentOffset.x-startPos)/(endPos-startPos);break;}}}}else{thumbnails=event.contentOffset.x/thumbnailSize;}if(swipeSource.get()==='thumbnails'||Math.abs(Math.round(thumbnails)-thumbnails)<0.01){const index=Math.max(0,Math.min(Math.round(thumbnails),maxIndex));thumbnailsIndex.set(index);}if(thumbnailsAnimateTo.get()>=0){if(thumbnailsIndex.get()===thumbnailsAnimateTo.get()){thumbnailsAnimateTo.set(-1);selectedIndex.set(thumbnailsIndex.get());}return;}const wasTouched=viewerScrolling.get()!==0||thumbnailsScrolling.get()!==0;if(wasTouched&&thumbnailsIndex.get()!==selectedIndex.get()){selectedIndex.set(thumbnailsIndex.get());runOnJS(onSelectedIndexChange)();}}" };
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
let closure_29 = { code: "function useMediaViewerSyncerTsx20(pos){const{viewerPos}=this.__closure;viewerPos.set(pos);}" };
let closure_30 = { code: "function useMediaViewerSyncerTsx21(){const{viewerScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('viewer');}" };
let closure_31 = { code: "function useMediaViewerSyncerTsx22(){const{viewerScrolling,SCROLLING_MOMENTUM}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_MOMENTUM);}" };
let closure_32 = { code: "function useMediaViewerSyncerTsx23(event){const{contentSizeLastChangedAt,IS_ANDROID,selectedIndex,scrollTo,ref,screenWidth,viewerScrolling,thumbnailsScrolling,thumbnailsAnimateTo,onScrollWorklets}=this.__closure;const contentSizeChangedRecently=Date.now()-contentSizeLastChangedAt.get()<500;if(IS_ANDROID&&contentSizeChangedRecently&&event.contentOffset.x===0&&selectedIndex.get()!==0){scrollTo(ref,selectedIndex.get()*screenWidth,event.contentOffset.y,false);return;}if(viewerScrolling.get()===0&&thumbnailsScrolling.get()===0&&thumbnailsAnimateTo.get()===-1)return;onScrollWorklets.onScroll(event.contentOffset.x/screenWidth);}" };
let closure_33 = { code: "function useMediaViewerSyncerTsx24(){const{index,selectedIndex}=this.__closure;return index===selectedIndex.get();}" };
let closure_34 = { code: "function useMediaViewerSyncerTsx25(result,previous){const{runOnJS,setVisible}=this.__closure;if(previous==null||previous===result)return;runOnJS(setVisible)(result);}" };
let result = set.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSyncer.tsx");

export const useMediaViewerSyncer = function useMediaViewerSyncer(sources) {
  sources = sources.sources;
  const initialIndex = sources.initialIndex;
  const onEndReached = sources.onEndReached;
  const onEndReachedThreshold = sources.onEndReachedThreshold;
  let memo;
  let items = [initialIndex];
  memo = memo.useMemo(() => {
    const obj = { selectedIndex: null, thumbnailsIndex: null, thumbnailsScrolling: null, thumbnailsAnimateTo: null, viewerPos: null, viewerScrolling: null, zoomed: null, swipeSource: null };
    obj[0] = sources(onEndReached[4]).makeMutable(initialIndex);
    const obj2 = sources(onEndReached[4]);
    obj[1] = sources(onEndReached[4]).makeMutable(initialIndex);
    const obj3 = sources(onEndReached[4]);
    obj[2] = sources(onEndReached[4]).makeMutable(0);
    const obj4 = sources(onEndReached[4]);
    obj[3] = sources(onEndReached[4]).makeMutable(-1);
    const obj5 = sources(onEndReached[4]);
    obj[4] = sources(onEndReached[4]).makeMutable(initialIndex);
    const obj6 = sources(onEndReached[4]);
    obj[5] = sources(onEndReached[4]).makeMutable(0);
    const obj7 = sources(onEndReached[4]);
    obj[6] = sources(onEndReached[4]).makeMutable(false);
    const obj8 = sources(onEndReached[4]);
    obj[7] = sources(onEndReached[4]).makeMutable(undefined);
    return obj;
  }, items);
  let items1 = [sources, memo, onEndReached, onEndReachedThreshold];
  return memo.useMemo(() => {
    let arr;
    let closure_5;
    let closure_6;
    let closure_7;
    let memo;
    let onEndReachedThreshold;
    let zoomed;
    let items = [];
    let num = 0;
    let num2 = 0;
    if (0 < arr.length) {
      do {
        let tmp = sources;
        let tmp2 = onEndReached;
        let obj = sources(onEndReached[9]);
        let size = obj.flattenSource(arr[num]);
        let tmp3 = num;
        let tmp4 = num2;
        if (null != size) {
          let _Math = Math;
          let _Math2 = Math;
          let tmp7 = outer1_6;
          let tmp8 = outer1_7;
          let tmp9 = outer1_8;
          let tmp10 = outer1_5;
          let sum = num2 + (Math.max(Math.min(size.width * (outer1_6 / size.height), outer1_7), outer1_8) + 2 * outer1_5);
          let num3 = 0;
          if (0 !== num) {
            let _Math3 = Math;
            num3 = Math.floor(num2 + (sum - num2 - (items[0].end - items[0].start)) / 2);
          }
          obj = { start: null, end: null, scrollStart: null };
          obj[0] = num2;
          obj[1] = sum;
          obj[2] = num3;
          arr = items.push(obj);
          let tmp6 = sum;
        } else {
          obj = { start: null, end: null, scrollStart: null };
          obj[0] = num2;
          obj[1] = num2;
          obj[2] = num2;
          arr = items.push(obj);
          tmp6 = num2;
        }
        num = num + 1;
        num2 = tmp6;
      } while (num < arr.length);
    }
    const selectedIndex = memo.selectedIndex;
    ({ thumbnailsIndex: onEndReachedThreshold, thumbnailsScrolling: memo, thumbnailsAnimateTo: closure_5, viewerPos: closure_6, viewerScrolling: closure_7, zoomed } = memo);
    const swipeSource = memo.swipeSource;
    let c10 = false;
    if (items.length > 0) {
      const end = items[0].end;
      const start = items[0].start;
    }
    return {
      index: selectedIndex,
      sources: arr,
      zoomed,
      thumbnailScrollPositions: items,
      variableWidthThumbnailsEnabled: false,
      useThumbnailsProps(onSelect, maxIndex) {
        let closure_1 = maxIndex;
        function onSelectedIndexChange() {
          if ("thumbnails" === store.get()) {
            const MediaViewerAnalytics = onSelect(animatedRef[7]).MediaViewerAnalytics;
            MediaViewerAnalytics.markActionPerformed(onSelect(animatedRef[7]).IncrementableMediaViewerActions.THUMBNAIL_SWIPE);
          } else if ("viewer" === store.get()) {
            const MediaViewerAnalytics3 = onSelect(animatedRef[7]).MediaViewerAnalytics;
            MediaViewerAnalytics3.markActionPerformed(onSelect(animatedRef[7]).IncrementableMediaViewerActions.VIEWER_SWIPE);
          }
          const MediaViewerAnalytics2 = onSelect(animatedRef[7]).MediaViewerAnalytics;
          MediaViewerAnalytics2.markActionPerformed(onSelect(animatedRef[7]).IncrementableMediaViewerActions.SELECTED_ITEM_CHANGE);
        }
        let obj = arr(selectedIndex[4]);
        const animatedRef = obj.useAnimatedRef();
        let obj1 = arr(selectedIndex[5]);
        let size = obj1.useMediaViewerDimensions();
        let width = size.width;
        const rect = items(selectedIndex[6])();
        let obj2 = arr(selectedIndex[4]);
        obj = { onBeginDrag: fn, onEndDrag: null, onScroll: null, onMomentumBegin: null, onMomentumEnd: null };
        fn = function y() {
          const result = mapped.set(2 | mapped.get());
          const result1 = store.set("thumbnails");
        };
        obj = { thumbnailsScrolling: mapped, SCROLLING_DRAG: 2, swipeSource };
        fn.__closure = obj;
        fn.__workletHash = 16224520186325;
        fn.__initData = outer1_11;
        class C {
          constructor() {
            result = runOnJS.set(-3 & runOnJS.get());
            return;
          }
        }
        C.__closure = { thumbnailsScrolling: mapped, SCROLLING_DRAG: 2 };
        C.__workletHash = 5779899826871;
        C.__initData = outer1_12;
        obj[1] = C;
        class E {
          constructor(arg0) {
            result = onSelect.contentOffset.x / closure_0;
            if ("thumbnails" === outer1_9.get()) {
              tmp3 = globalThis;
              _Math3 = Math;
              _Math4 = Math;
              _Math5 = Math;
              tmp4 = closure_1;
              num2 = 0;
              tmp5 = onSelectedIndexChange;
              result1 = onSelectedIndexChange.set(Math.max(0, Math.min(Math.round(result), closure_1)));
            } else {
              tmp2 = globalThis;
              _Math = Math;
              _Math2 = Math;
              num = 0.01;
            }
            obj = scrollTo;
            if (scrollTo.get() >= 0) {
              obj3 = onSelectedIndexChange;
              value = onSelectedIndexChange.get();
              if (value === obj.get()) {
                num3 = -1;
                result2 = obj.set(-1);
                tmp21 = outer1_2;
                result3 = outer1_2.set(obj3.get());
              }
            } else {
              tmp23 = outer1_7;
              tmp8 = 0 !== outer1_7.get();
              if (!tmp8) {
                tmp7 = runOnJS;
                tmp8 = 0 !== runOnJS.get();
              }
              if (tmp8) {
                tmp9 = onSelectedIndexChange;
                tmp11 = outer1_2;
                value1 = onSelectedIndexChange.get();
                tmp8 = value1 !== outer1_2.get();
              }
              if (tmp8) {
                tmp12 = outer1_2;
                tmp13 = onSelectedIndexChange;
                result4 = outer1_2.set(onSelectedIndexChange.get());
                tmp15 = outer2_0;
                tmp16 = selectedIndex;
                obj2 = outer2_0(selectedIndex[4]);
                tmp17 = onSelectedIndexChange;
                tmp18 = obj2.runOnJS(onSelectedIndexChange)();
              }
            }
            return;
          }
        }
        obj1 = { variableWidthThumbnailsEnabled: c10, thumbnailScrollPositions: closure_1, thumbnailSize: onSelect, swipeSource, maxIndex, thumbnailsIndex: onSelectedIndexChange, thumbnailsAnimateTo: mapped1, selectedIndex: animatedRef, viewerScrolling: closure_7, thumbnailsScrolling: mapped, runOnJS: arr(selectedIndex[4]).runOnJS, onSelectedIndexChange };
        E.__closure = obj1;
        E.__workletHash = 10605529664479;
        E.__initData = outer1_13;
        obj[2] = E;
        class P {
          constructor() {
            result = runOnJS.set(4 | runOnJS.get());
            result1 = closure_9.set("thumbnails");
            return;
          }
        }
        P.__closure = { thumbnailsScrolling: mapped, SCROLLING_MOMENTUM: 4, swipeSource };
        P.__workletHash = 4138169755088;
        P.__initData = outer1_14;
        obj[3] = P;
        class R {
          constructor() {
            result = runOnJS.set(-5 & runOnJS.get());
            return;
          }
        }
        R.__closure = { thumbnailsScrolling: mapped, SCROLLING_MOMENTUM: 4 };
        R.__workletHash = 1471443652144;
        R.__initData = outer1_15;
        obj[4] = R;
        items = [animatedRef];
        const callback = outer1_4.useCallback((arg0) => {
          if (!diff1.get()) {
            const result = mapped1.set(arg0);
            const result1 = store.set("thumbnails");
          }
        }, []);
        const callback1 = outer1_4.useCallback((arg0) => {
          arr(selectedIndex[4]).scrollTo(animatedRef, maxIndex[arg0].scrollStart, 0, true);
        }, items);
        let obj6 = arr(selectedIndex[4]);
        let fn2 = function k() {
          if (mapped1.get() >= 0) {
            const obj2 = arr(selectedIndex[4]);
            obj2.scrollTo(animatedRef, mapped1.get() * closure_0, 0, true);
          }
        };
        obj2 = { thumbnailsAnimateTo: mapped1, variableWidthThumbnailsEnabled: c10, runOnJS: arr(selectedIndex[4]).runOnJS, scrollVarWidthThumbnails: callback1, scrollTo: arr(selectedIndex[4]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
        fn2.__closure = obj2;
        fn2.__workletHash = 1697086875584;
        fn2.__initData = outer1_16;
        let derivedValue = obj6.useDerivedValue(fn2);
        let items1 = [animatedRef];
        const callback2 = outer1_4.useCallback((arg0) => {
          const result = arr(selectedIndex[8]).lerpVarWidthThumbnailScrollBounds(closure_1, arg0);
          const obj = arr(selectedIndex[8]);
          arr(selectedIndex[4]).scrollTo(animatedRef, result, 0, false);
        }, items1);
        let obj8 = arr(selectedIndex[4]);
        class Z {
          constructor() {
            tmp = 0 !== outer1_7.get();
            if (tmp) {
              tmp2 = onSelectedIndexChange;
              tmp4 = useDerivedValue;
              value = onSelectedIndexChange.get();
              tmp = value !== useDerivedValue.get();
            }
            if (tmp) {
              tmp5 = outer2_0;
              tmp6 = selectedIndex;
              obj = outer2_0(selectedIndex[4]);
              tmp7 = closure_2;
              tmp8 = useDerivedValue;
              tmp9 = closure_0;
              flag = false;
              tmp10 = obj;
              num = 0;
              scrollToResult = obj.scrollTo(closure_2, useDerivedValue.get() * closure_0, 0, false);
            }
            return;
          }
        }
        const animatedScrollHandler = obj2.useAnimatedScrollHandler(obj);
        Z.__closure = { viewerScrolling: closure_7, thumbnailsIndex: onSelectedIndexChange, viewerPos: derivedValue2, variableWidthThumbnailsEnabled: c10, runOnJS: onSelect(selectedIndex[4]).runOnJS, lerpScrollVarWidthThumbnails: callback2, scrollTo: onSelect(selectedIndex[4]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
        Z.__workletHash = 10477949154269;
        Z.__initData = outer1_17;
        let derivedValue1 = obj8.useDerivedValue(Z);
        mapped = arr.map((arg0, arg1) => arg1);
        mapped1 = arr.map((closure_1) => {
          const size = onSelect(animatedRef[9]).flattenSource(closure_1);
          let num = 0;
          if (null != size) {
            const _Math = Math;
            const _Math2 = Math;
            num = (Math.max(Math.min(size.width * (derivedValue2 / size.height), closure_7), diff1) - diff1) / 2;
          }
          return num;
        });
        let obj3 = { viewerScrolling: closure_7, thumbnailsIndex: onSelectedIndexChange, viewerPos: derivedValue2, variableWidthThumbnailsEnabled: c10, runOnJS: onSelect(selectedIndex[4]).runOnJS, lerpScrollVarWidthThumbnails: callback2, scrollTo: onSelect(selectedIndex[4]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
        function ee() {
          let num = 0;
          if (mapped.get() <= 0) {
            const obj = arr(selectedIndex[4]);
            num = -obj.interpolate(derivedValue2.get(), mapped, mapped1, "clamp");
          }
          return num;
        }
        const obj11 = onSelect(selectedIndex[4]);
        ee.__closure = { thumbnailsScrolling: mapped, interpolate: onSelect(selectedIndex[4]).interpolate, viewerPos: derivedValue2, interpolateInput: mapped, interpolateOutput: mapped1 };
        ee.__workletHash = 10097839523885;
        ee.__initData = outer1_18;
        derivedValue2 = obj11.useDerivedValue(ee);
        const diff = (width - onSelect) / 2 - rect.left;
        closure_7 = diff;
        const obj4 = { thumbnailsScrolling: mapped, interpolate: onSelect(selectedIndex[4]).interpolate, viewerPos: derivedValue2, interpolateInput: mapped, interpolateOutput: mapped1 };
        function te() {
          if (diff.get() > 0) {
            let width = closure_7 + derivedValue2.get();
          } else {
            width = arr(selectedIndex[10]).withSpring(closure_7 + derivedValue2.get(), { overshootClamping: true });
            const obj = arr(selectedIndex[10]);
          }
          return { width };
        }
        const obj13 = onSelect(selectedIndex[4]);
        te.__closure = { viewerScrolling: closure_7, headerBufferSize: diff, margin: derivedValue2, withSpring: onSelect(selectedIndex[10]).withSpring };
        te.__workletHash = 11328769587377;
        te.__initData = outer1_19;
        const diff1 = (width - onSelect) / 2 - rect.right;
        const animatedStyle = obj13.useAnimatedStyle(te);
        let obj5 = { viewerScrolling: closure_7, headerBufferSize: diff, margin: derivedValue2, withSpring: onSelect(selectedIndex[10]).withSpring };
        function ne() {
          if (diff.get() > 0) {
            let width = diff1 + derivedValue2.get();
          } else {
            width = arr(selectedIndex[10]).withSpring(diff1 + derivedValue2.get(), { overshootClamping: true });
            const obj = arr(selectedIndex[10]);
          }
          return { width };
        }
        obj6 = { viewerScrolling: closure_7, footerBufferSize: diff1, margin: derivedValue2, withSpring: arr(selectedIndex[10]).withSpring };
        ne.__closure = obj6;
        ne.__workletHash = 10532164558483;
        ne.__initData = outer1_20;
        const animatedStyle1 = onSelect(selectedIndex[4]).useAnimatedStyle(ne);
        const callback3 = outer1_4.useCallback((width, index) => {
          const onSelect = index;
          let obj = onSelect(animatedRef[4]);
          const fn = function i() {
            const items = [index - 1, index, index + 1];
            return index(animatedRef[4]).interpolate(outer1_6.get(), items, [0.4, 1, 0.4], "clamp");
          };
          obj = { interpolate: onSelect(animatedRef[4]).interpolate, viewerPos: derivedValue2, index };
          fn.__closure = obj;
          fn.__workletHash = 5784737783661;
          fn.__initData = outer1_21;
          const derivedValue = obj.useDerivedValue(fn);
          const bound = Math.max(Math.min(width.width * (derivedValue2 / width.height), diff), diff1);
          const fn2 = function l() {
            if (outer1_4.get() > 0) {
              let interpolateResult = diff1;
            } else {
              const obj = index(animatedRef[4]);
              const items = [index - 1, index, index + 1];
              const items1 = [diff1, bound, diff1];
              interpolateResult = obj.interpolate(outer1_6.get(), items, items1, "clamp");
            }
            return interpolateResult;
          };
          obj = { thumbnailsScrolling: mapped, THUMBNAIL_MIN_WIDTH: diff1, interpolate: onSelect(animatedRef[4]).interpolate, viewerPos: derivedValue2, index, sourceWidth: bound };
          fn2.__closure = obj;
          fn2.__workletHash = 12440745987072;
          fn2.__initData = outer1_22;
          const derivedValue1 = onSelect(animatedRef[4]).useDerivedValue(fn2);
          const obj3 = onSelect(animatedRef[4]);
          const fn3 = function u() {
            if (outer1_7.get() > 0) {
              let withSpringResult = derivedValue1.get();
            } else {
              let obj = index(animatedRef[10]);
              withSpringResult = obj.withSpring(derivedValue1.get(), { overshootClamping: true });
            }
            obj = { width: withSpringResult, height: derivedValue2, opacity: derivedValue.get() };
            return obj;
          };
          const obj5 = onSelect(animatedRef[4]);
          fn3.__closure = { viewerScrolling: closure_7, _width: derivedValue1, withSpring: onSelect(animatedRef[10]).withSpring, THUMBNAIL_HEIGHT: derivedValue2, opacity: derivedValue };
          fn3.__workletHash = 513826663139;
          fn3.__initData = outer1_23;
          return obj5.useAnimatedStyle(fn3);
        }, []);
        const obj15 = onSelect(selectedIndex[4]);
        function ie() {
          return !diff1.get();
        }
        ie.__closure = { zoomed: diff1 };
        ie.__workletHash = 7667674289153;
        ie.__initData = outer1_24;
        obj8 = {
          ref: animatedRef,
          headerBufferStyle: animatedStyle,
          headerBufferSize: diff,
          footerBufferStyle: animatedStyle1,
          footerBufferSize: diff1,
          scrollEnabled: onSelect(selectedIndex[4]).useDerivedValue(ie),
          onScroll: animatedScrollHandler,
          onSelect: callback,
          useThumbnailStyle: callback3,
          screenWidth: width,
          screenHeight: size.height,
          itemSize(arg0, arg1) {
            return closure_9;
          }
        };
        return obj8;
      },
      useViewerProps() {
        let obj = arr(selectedIndex[4]);
        const animatedRef = obj.useAnimatedRef();
        let obj1 = arr(selectedIndex[5]);
        const size = obj1.useMediaViewerDimensions();
        let width = size.width;
        let obj2 = arr(selectedIndex[4]);
        let fn = function i() {
          if (-1 !== outer1_5.get()) {
            const obj2 = arr(selectedIndex[4]);
            obj2.scrollTo(animatedRef, outer1_5.get() * width, 0, false);
          }
        };
        obj = { thumbnailsAnimateTo: closure_5, scrollTo: arr(selectedIndex[4]).scrollTo, ref: animatedRef, screenWidth: width };
        fn.__closure = obj;
        fn.__workletHash = 11860326453239;
        fn.__initData = outer1_25;
        const derivedValue = obj2.useDerivedValue(fn);
        let fn2 = function l() {
          let tmp = 0 === outer1_4.get();
          if (!tmp) {
            tmp = outer1_7.get() > 0;
          }
          if (!tmp) {
            tmp = -1 !== outer1_5.get();
          }
          if (!tmp) {
            const obj = arr(selectedIndex[4]);
            obj.scrollTo(animatedRef, sharedValue.get() * width, 0, false);
          }
        };
        obj = { thumbnailsScrolling: noop, viewerScrolling: closure_7, thumbnailsAnimateTo: closure_5, scrollTo: arr(selectedIndex[4]).scrollTo, ref: animatedRef, thumbnailsIndex: sharedValue, screenWidth: width };
        fn2.__closure = obj;
        fn2.__workletHash = 16855593341498;
        fn2.__initData = outer1_26;
        const derivedValue1 = arr(selectedIndex[4]).useDerivedValue(fn2);
        const memo = outer1_4.useMemo(() => {
          const onBeginDrag = function o() {
            const result = store.set(2 | store.get());
            const result1 = store2.set("viewer");
          };
          let obj = { viewerScrolling: closure_7, SCROLLING_DRAG: 2, swipeSource: closure_9 };
          onBeginDrag.__closure = obj;
          onBeginDrag.__workletHash = 1082965969005;
          onBeginDrag.__initData = outer1_27;
          const onEndDrag = function l() {
            const result = store.set(-3 & store.get());
          };
          onEndDrag.__closure = { viewerScrolling: closure_7, SCROLLING_DRAG: 2 };
          onEndDrag.__workletHash = 1722948238280;
          onEndDrag.__initData = outer1_28;
          const onScroll = function i(arg0) {
            const result = closure_6.set(arg0);
          };
          obj = { viewerPos: closure_6 };
          onScroll.__closure = obj;
          onScroll.__workletHash = 3817181878424;
          onScroll.__initData = outer1_29;
          const onMomentumBegin = function n() {
            const result = store.set(4 | store.get());
            const result1 = store2.set("viewer");
          };
          onMomentumBegin.__closure = { viewerScrolling: closure_7, SCROLLING_MOMENTUM: 4, swipeSource: closure_9 };
          onMomentumBegin.__workletHash = 16635271467463;
          onMomentumBegin.__initData = outer1_30;
          const onMomentumEnd = function t() {
            const result = store.set(-5 & store.get());
          };
          onMomentumEnd.__closure = { viewerScrolling: closure_7, SCROLLING_MOMENTUM: 4 };
          onMomentumEnd.__workletHash = 8806989101472;
          onMomentumEnd.__initData = outer1_31;
          return { onBeginDrag, onEndDrag, onScroll, onMomentumBegin, onMomentumEnd };
        }, []);
        const obj5 = arr(selectedIndex[4]);
        sharedValue = arr(selectedIndex[4]).useSharedValue(0);
        const obj7 = arr(selectedIndex[4]);
        obj1 = { onBeginDrag: memo.onBeginDrag, onEndDrag: memo.onEndDrag, onScroll: null, onMomentumBegin: null, onMomentumEnd: null };
        class S {
          constructor(arg0) {
            timestamp = Date.now();
            if (c10) {
              num = 500;
              if (tmp2 < 500) {
                num2 = 0;
                if (0 === arg0.contentOffset.x) {
                  obj = outer1_2;
                  if (0 !== outer1_2.get()) {
                    tmp9 = outer2_0;
                    tmp10 = selectedIndex;
                    obj2 = outer2_0(selectedIndex[4]);
                    tmp11 = closure_0;
                    tmp12 = width;
                    flag = false;
                    tmp13 = obj2;
                    scrollToResult = obj2.scrollTo(closure_0, obj.get() * width, arg0.contentOffset.y, false);
                  }
                  return;
                }
              }
            }
            tmp3 = 0 === outer1_7.get();
            if (tmp3) {
              tmp4 = outer1_4;
              tmp3 = 0 === outer1_4.get();
            }
            if (tmp3) {
              tmp5 = outer1_5;
              num3 = -1;
              tmp3 = -1 === outer1_5.get();
            }
            if (!tmp3) {
              tmp6 = closure_2;
              tmp7 = width;
              onScrollResult = closure_2.onScroll(arg0.contentOffset.x / width);
            }
            return;
          }
        }
        obj2 = { contentSizeLastChangedAt: sharedValue, IS_ANDROID: c10, selectedIndex: memo, scrollTo: arr(selectedIndex[4]).scrollTo, ref: animatedRef, screenWidth: width, viewerScrolling: closure_7, thumbnailsScrolling: noop, thumbnailsAnimateTo: closure_5, onScrollWorklets: memo };
        S.__closure = obj2;
        S.__workletHash = 7511342747846;
        S.__initData = outer1_32;
        obj1[2] = S;
        ({ onMomentumBegin: obj9[3], onMomentumEnd: obj9[4] } = memo);
        const items = [animatedRef, width, sharedValue];
        const obj8 = arr(selectedIndex[4]);
        const items1 = [width, size.height, animatedRef];
        const callback = outer1_4.useCallback(() => {
          const current = animatedRef.current;
          if (current != null) {
            current.scrollTo(tmp, false);
          }
          const result = sharedValue.set(Date.now());
        }, items);
        const effect = outer1_4.useEffect(() => {
          const current = animatedRef.current;
          if (current != null) {
            current.reset();
          }
        }, items1);
        const animatedScrollHandler = arr(selectedIndex[4]).useAnimatedScrollHandler(obj1);
        return {
          ref: animatedRef,
          onScroll: arr(selectedIndex[4]).useAnimatedScrollHandler(obj1),
          onContentSizeChange: callback,
          useItemVisible: outer1_4.useCallback((index) => {
            let closure_0 = index;
            const tmp = sharedValue(outer1_4.useState(index === memo.get()), 2);
            const width = tmp2;
            let obj = animatedRef(memo[4]);
            const fn = function o() {
              return closure_0 === outer1_2.get();
            };
            fn.__closure = { index, selectedIndex: memo };
            fn.__workletHash = 16337538404179;
            fn.__initData = outer1_33;
            const fn2 = function l(arg0, arg1) {
              if (tmp) {
                animatedRef(memo[4]).runOnJS(closure_1)(arg0);
                const obj = animatedRef(memo[4]);
              }
            };
            obj = { runOnJS: animatedRef(memo[4]).runOnJS, setVisible: tmp2 };
            fn2.__closure = obj;
            fn2.__workletHash = 17035713313425;
            fn2.__initData = outer1_34;
            const animatedReaction = obj.useAnimatedReaction(fn, fn2);
            return tmp[0];
          }, [])
        };
      },
      onEndReached: selectedIndex,
      onEndReachedThreshold
    };
  }, items1);
};