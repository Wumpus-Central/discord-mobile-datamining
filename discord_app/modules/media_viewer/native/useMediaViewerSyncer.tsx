// discord_app/modules/media_viewer/native/useMediaViewerSyncer.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import THUMBNAIL_MARGIN from "Constants.tsx";
import set from "../../../utils/PlatformUtils.tsx";

const require = arg1;
({ THUMBNAIL_MARGIN: c5, THUMBNAIL_HEIGHT: closure_6, THUMBNAIL_MAX_WIDTH: error, THUMBNAIL_MIN_WIDTH: closure_8, THUMBNAIL_WIDTH_MARGIN: c9 } = THUMBNAIL_MARGIN);
let closure_10 = set.isAndroid();
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
let result = set.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSyncer.tsx");

export const useMediaViewerSyncer = function useMediaViewerSyncer(sources) {
  sources = sources.sources;
  const initialIndex = sources.initialIndex;
  const onEndReached = sources.onEndReached;
  const onEndReachedThreshold = sources.onEndReachedThreshold;
  let memo;
  let items = [initialIndex];
  memo = memo.useMemo(() => {
    const obj = { selectedIndex: sources(onEndReached[5]).makeMutable(initialIndex), thumbnailsIndex: null, thumbnailsScrolling: null, thumbnailsAnimateTo: null, viewerPos: null, viewerScrolling: null, zoomed: null, swipeSource: null };
    const obj2 = sources(onEndReached[5]);
    obj[1] = sources(onEndReached[5]).makeMutable(initialIndex);
    const obj3 = sources(onEndReached[5]);
    obj[2] = sources(onEndReached[5]).makeMutable(0);
    const obj4 = sources(onEndReached[5]);
    obj[3] = sources(onEndReached[5]).makeMutable(-1);
    const obj5 = sources(onEndReached[5]);
    obj[4] = sources(onEndReached[5]).makeMutable(initialIndex);
    const obj6 = sources(onEndReached[5]);
    obj[5] = sources(onEndReached[5]).makeMutable(0);
    const obj7 = sources(onEndReached[5]);
    obj[6] = sources(onEndReached[5]).makeMutable(false);
    const obj8 = sources(onEndReached[5]);
    obj[7] = sources(onEndReached[5]).makeMutable(undefined);
    return obj;
  }, items);
  let items1 = [sources, memo, onEndReached, onEndReachedThreshold];
  return memo.useMemo(() => {
    let arr;
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
          let tmp7 = closure_1_6;
          let tmp8 = closure_1_7;
          let tmp9 = closure_1_8;
          let tmp10 = closure_1_5;
          let sum = num2 + (Math.max(Math.min(size.width * (closure_1_6 / size.height), closure_1_7), closure_1_8) + 2 * closure_1_5);
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
    function onSelectedIndexChange() {
      if ("thumbnails" === swipeSource.get()) {
        const MediaViewerAnalytics = arr(selectedIndex[4]).MediaViewerAnalytics;
        MediaViewerAnalytics.markActionPerformed(arr(selectedIndex[4]).IncrementableMediaViewerActions.THUMBNAIL_SWIPE);
      } else if ("viewer" === swipeSource.get()) {
        const MediaViewerAnalytics3 = arr(selectedIndex[4]).MediaViewerAnalytics;
        MediaViewerAnalytics3.markActionPerformed(arr(selectedIndex[4]).IncrementableMediaViewerActions.VIEWER_SWIPE);
      }
      const MediaViewerAnalytics2 = arr(selectedIndex[4]).MediaViewerAnalytics;
      MediaViewerAnalytics2.markActionPerformed(arr(selectedIndex[4]).IncrementableMediaViewerActions.SELECTED_ITEM_CHANGE);
    }
    let selectedIndex = memo.selectedIndex;
    ({ thumbnailsIndex: onEndReachedThreshold, thumbnailsScrolling: memo, thumbnailsAnimateTo: closure_5, viewerPos: closure_6, viewerScrolling: closure_7, zoomed } = memo);
    const swipeSource = memo.swipeSource;
    c11 = false;
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
        closure_1 = maxIndex;
        let obj = arr(selectedIndex[5]);
        const animatedRef = obj.useAnimatedRef();
        obj1 = arr(selectedIndex[6]);
        let size = obj1.useMediaViewerDimensions();
        let width = size.width;
        const rect = items(selectedIndex[7])();
        let obj2 = arr(selectedIndex[5]);
        obj = { onBeginDrag: null, onEndDrag: null, onScroll: null, onMomentumBegin: null, onMomentumEnd: null };
        class H {
          constructor() {
            result = closure_4.set(2 | closure_4.get());
            result1 = closure_9.set("thumbnails");
            return;
          }
        }
        obj = { thumbnailsScrolling: mapped1, SCROLLING_DRAG: 2, swipeSource };
        H.__closure = obj;
        H.__workletHash = 16224520186325;
        H.__initData = c11;
        obj[0] = H;
        class C {
          constructor() {
            result = closure_4.set(-3 & closure_4.get());
            return;
          }
        }
        C.__closure = { thumbnailsScrolling: mapped1, SCROLLING_DRAG: 2 };
        C.__workletHash = 5779899826871;
        C.__initData = closure_1_12;
        obj[1] = C;
        class N {
          constructor(arg0) {
            result = onSelect.contentOffset.x / closure_0;
            obj = closure_1_9;
            if ("thumbnails" === closure_1_9.get()) {
              tmp3 = globalThis;
              _Math3 = Math;
              _Math4 = Math;
              _Math5 = Math;
              tmp4 = closure_1;
              num2 = 0;
              tmp5 = closure_3;
              result1 = closure_3.set(Math.max(0, Math.min(Math.round(result), closure_1)));
            } else {
              tmp2 = globalThis;
              _Math = Math;
              _Math2 = Math;
              num = 0.01;
            }
            obj2 = closure_5;
            if (closure_5.get() >= 0) {
              obj4 = closure_3;
              value = closure_3.get();
              if (value === obj2.get()) {
                num3 = -1;
                result2 = obj2.set(-1);
                tmp22 = closure_2;
                result3 = closure_2.set(obj4.get());
              }
            } else {
              tmp24 = closure_7;
              tmp8 = 0 !== closure_7.get();
              if (!tmp8) {
                tmp7 = closure_4;
                tmp8 = 0 !== closure_4.get();
              }
              tmp9 = "thumbnails" === obj.get() && tmp8;
              if (tmp9) {
                tmp10 = closure_3;
                tmp12 = closure_2;
                value1 = closure_3.get();
                tmp9 = value1 !== closure_2.get();
              }
              if (tmp9) {
                tmp13 = closure_2;
                tmp14 = closure_3;
                result4 = closure_2.set(closure_3.get());
                tmp16 = closure_0;
                tmp17 = selectedIndex;
                obj3 = closure_0(selectedIndex[5]);
                tmp18 = closure_1_10;
                tmp19 = obj3.runOnJS(closure_1_10)();
              }
            }
            return;
          }
        }
        obj1 = { variableWidthThumbnailsEnabled: c11, thumbnailScrollPositions: closure_1, thumbnailSize: onSelect, swipeSource, maxIndex, thumbnailsIndex: mapped, thumbnailsAnimateTo: derivedValue2, selectedIndex: animatedRef, viewerScrolling: diff1, thumbnailsScrolling: mapped1, runOnJS: arr(selectedIndex[5]).runOnJS, onSelectedIndexChange };
        N.__closure = obj1;
        N.__workletHash = 6212589685153;
        N.__initData = closure_1_13;
        obj[2] = N;
        class L {
          constructor() {
            result = closure_4.set(4 | closure_4.get());
            result1 = closure_9.set("thumbnails");
            return;
          }
        }
        L.__closure = { thumbnailsScrolling: mapped1, SCROLLING_MOMENTUM: 4, swipeSource };
        L.__workletHash = 4138169755088;
        L.__initData = closure_1_14;
        obj[3] = L;
        let fn = function h() {
          const result = mapped1.set(-5 & mapped1.get());
        };
        fn.__closure = { thumbnailsScrolling: mapped1, SCROLLING_MOMENTUM: 4 };
        fn.__workletHash = 1471443652144;
        fn.__initData = closure_1_15;
        obj[4] = fn;
        items = [animatedRef];
        const callback = closure_1_4.useCallback((arg0) => {
          if (!store.get()) {
            const result = derivedValue2.set(arg0);
            const result1 = store2.set("thumbnails");
          }
        }, []);
        const callback1 = closure_1_4.useCallback((arg0) => {
          arr(selectedIndex[5]).scrollTo(animatedRef, maxIndex[arg0].scrollStart, 0, true);
        }, items);
        let obj6 = arr(selectedIndex[5]);
        class V {
          constructor() {
            obj = closure_5;
            if (closure_5.get() >= 0) {
              tmp = closure_0;
              tmp2 = selectedIndex;
              obj2 = closure_0(selectedIndex[5]);
              tmp3 = closure_2;
              tmp4 = closure_0;
              flag = true;
              tmp5 = obj2;
              num = 0;
              scrollToResult = obj2.scrollTo(closure_2, obj.get() * closure_0, 0, true);
            }
            return;
          }
        }
        obj2 = { thumbnailsAnimateTo: derivedValue2, variableWidthThumbnailsEnabled: c11, runOnJS: arr(selectedIndex[5]).runOnJS, scrollVarWidthThumbnails: callback1, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
        V.__closure = obj2;
        V.__workletHash = 1697086875584;
        V.__initData = closure_1_16;
        let derivedValue = obj6.useDerivedValue(V);
        let items1 = [animatedRef];
        const callback2 = closure_1_4.useCallback((arg0) => {
          const result = arr(selectedIndex[8]).lerpVarWidthThumbnailScrollBounds(closure_1, arg0);
          const obj = arr(selectedIndex[8]);
          arr(selectedIndex[5]).scrollTo(animatedRef, result, 0, false);
        }, items1);
        let obj8 = arr(selectedIndex[5]);
        class U {
          constructor() {
            tmp = 0 !== closure_7.get();
            if (tmp) {
              tmp2 = closure_3;
              tmp4 = closure_6;
              value = closure_3.get();
              tmp = value !== closure_6.get();
            }
            if (tmp) {
              tmp5 = closure_0;
              tmp6 = selectedIndex;
              obj = closure_0(selectedIndex[5]);
              tmp7 = closure_2;
              tmp8 = closure_6;
              tmp9 = closure_0;
              flag = false;
              tmp10 = obj;
              num = 0;
              scrollToResult = obj.scrollTo(closure_2, closure_6.get() * closure_0, 0, false);
            }
            return;
          }
        }
        const animatedScrollHandler = obj2.useAnimatedScrollHandler(obj);
        U.__closure = { viewerScrolling: diff1, thumbnailsIndex: mapped, viewerPos: diff, variableWidthThumbnailsEnabled: c11, runOnJS: onSelect(selectedIndex[5]).runOnJS, lerpScrollVarWidthThumbnails: callback2, scrollTo: onSelect(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
        U.__workletHash = 10477949154269;
        U.__initData = closure_1_17;
        let derivedValue1 = obj8.useDerivedValue(U);
        mapped = arr.map((arg0, arg1) => arg1);
        mapped1 = arr.map((closure_1) => {
          const size = onSelect(animatedRef[9]).flattenSource(closure_1);
          let num = 0;
          if (null != size) {
            const _Math = Math;
            const _Math2 = Math;
            num = (Math.max(Math.min(size.width * (closure_6 / size.height), diff1), closure_8) - closure_8) / 2;
          }
          return num;
        });
        let obj3 = { viewerScrolling: diff1, thumbnailsIndex: mapped, viewerPos: diff, variableWidthThumbnailsEnabled: c11, runOnJS: onSelect(selectedIndex[5]).runOnJS, lerpScrollVarWidthThumbnails: callback2, scrollTo: onSelect(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
        function ee() {
          let num = 0;
          if (mapped1.get() <= 0) {
            const obj = arr(selectedIndex[5]);
            num = -obj.interpolate(diff.get(), mapped, mapped1, "clamp");
          }
          return num;
        }
        const obj11 = onSelect(selectedIndex[5]);
        ee.__closure = { thumbnailsScrolling: mapped1, interpolate: onSelect(selectedIndex[5]).interpolate, viewerPos: diff, interpolateInput: mapped, interpolateOutput: mapped1 };
        ee.__workletHash = 10097839523885;
        ee.__initData = closure_1_18;
        derivedValue2 = obj11.useDerivedValue(ee);
        diff = (width - onSelect) / 2 - rect.left;
        let obj4 = { thumbnailsScrolling: mapped1, interpolate: onSelect(selectedIndex[5]).interpolate, viewerPos: diff, interpolateInput: mapped, interpolateOutput: mapped1 };
        function te() {
          if (diff1.get() > 0) {
            let width = closure_6 + derivedValue2.get();
          } else {
            width = arr(selectedIndex[10]).withSpring(closure_6 + derivedValue2.get(), { overshootClamping: true });
            const obj = arr(selectedIndex[10]);
          }
          return { width };
        }
        const obj13 = onSelect(selectedIndex[5]);
        te.__closure = { viewerScrolling: diff1, headerBufferSize: diff, margin: derivedValue2, withSpring: onSelect(selectedIndex[10]).withSpring };
        te.__workletHash = 11328769587377;
        te.__initData = closure_1_19;
        diff1 = (width - onSelect) / 2 - rect.right;
        const animatedStyle = obj13.useAnimatedStyle(te);
        let obj5 = { viewerScrolling: diff1, headerBufferSize: diff, margin: derivedValue2, withSpring: onSelect(selectedIndex[10]).withSpring };
        function ne() {
          if (diff1.get() > 0) {
            let width = diff1 + derivedValue2.get();
          } else {
            width = arr(selectedIndex[10]).withSpring(diff1 + derivedValue2.get(), { overshootClamping: true });
            const obj = arr(selectedIndex[10]);
          }
          return { width };
        }
        obj6 = { viewerScrolling: diff1, footerBufferSize: diff1, margin: derivedValue2, withSpring: arr(selectedIndex[10]).withSpring };
        ne.__closure = obj6;
        ne.__workletHash = 10532164558483;
        ne.__initData = closure_1_20;
        const animatedStyle1 = onSelect(selectedIndex[5]).useAnimatedStyle(ne);
        const callback3 = closure_1_4.useCallback((width, index) => {
          onSelect = index;
          let obj = onSelect(animatedRef[5]);
          const fn = function i() {
            items = [index - 1, index, index + 1];
            return index(animatedRef[5]).interpolate(closure_1_6.get(), items, [0.4, 1, 0.4], "clamp");
          };
          obj = { interpolate: onSelect(animatedRef[5]).interpolate, viewerPos: closure_6, index };
          fn.__closure = obj;
          fn.__workletHash = 5784737783661;
          fn.__initData = closure_1_21;
          const derivedValue = obj.useDerivedValue(fn);
          const bound = Math.max(Math.min(width.width * (diff / width.height), diff1), closure_1_8);
          const fn2 = function o() {
            if (closure_1_4.get() > 0) {
              let interpolateResult = closure_2_8;
            } else {
              const obj = index(animatedRef[5]);
              items = [index - 1, index, index + 1];
              const items1 = [closure_2_8, bound, closure_2_8];
              interpolateResult = obj.interpolate(closure_1_6.get(), items, items1, "clamp");
            }
            return interpolateResult;
          };
          obj = { thumbnailsScrolling: mapped1, THUMBNAIL_MIN_WIDTH: closure_1_8, interpolate: onSelect(animatedRef[5]).interpolate, viewerPos: closure_6, index, sourceWidth: bound };
          fn2.__closure = obj;
          fn2.__workletHash = 12440745987072;
          fn2.__initData = closure_1_22;
          const derivedValue1 = onSelect(animatedRef[5]).useDerivedValue(fn2);
          const obj3 = onSelect(animatedRef[5]);
          const fn3 = function u() {
            if (closure_1_7.get() > 0) {
              let withSpringResult = derivedValue1.get();
            } else {
              let obj = index(animatedRef[10]);
              withSpringResult = obj.withSpring(derivedValue1.get(), { overshootClamping: true });
            }
            obj = { width: withSpringResult, height: diff, opacity: derivedValue.get() };
            return obj;
          };
          const obj5 = onSelect(animatedRef[5]);
          fn3.__closure = { viewerScrolling: diff1, _width: derivedValue1, withSpring: onSelect(animatedRef[10]).withSpring, THUMBNAIL_HEIGHT: diff, opacity: derivedValue };
          fn3.__workletHash = 513826663139;
          fn3.__initData = closure_1_23;
          return obj5.useAnimatedStyle(fn3);
        }, []);
        const obj15 = onSelect(selectedIndex[5]);
        function ie() {
          return !store.get();
        }
        ie.__closure = { zoomed };
        ie.__workletHash = 7667674289153;
        ie.__initData = closure_1_24;
        obj8 = {
          ref: animatedRef,
          headerBufferStyle: animatedStyle,
          headerBufferSize: diff,
          footerBufferStyle: animatedStyle1,
          footerBufferSize: diff1,
          scrollEnabled: onSelect(selectedIndex[5]).useDerivedValue(ie),
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
        let obj = arr(selectedIndex[5]);
        const animatedRef = obj.useAnimatedRef();
        obj1 = arr(selectedIndex[6]);
        const size = obj1.useMediaViewerDimensions();
        const width = size.width;
        let obj2 = arr(selectedIndex[5]);
        let fn = function o() {
          if (-1 !== isSpuriousContentSizeReset.get()) {
            const obj2 = arr(selectedIndex[5]);
            obj2.scrollTo(animatedRef, isSpuriousContentSizeReset.get() * width, 0, false);
          }
        };
        obj = { thumbnailsAnimateTo: isSpuriousContentSizeReset, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, screenWidth: width };
        fn.__closure = obj;
        fn.__workletHash = 11860326453239;
        fn.__initData = closure_1_25;
        const derivedValue = obj2.useDerivedValue(fn);
        let obj4 = arr(selectedIndex[5]);
        let fn2 = function l() {
          let tmp = 0 === sharedValue.get();
          if (!tmp) {
            tmp = closure_1_7.get() > 0;
          }
          if (!tmp) {
            tmp = -1 !== isSpuriousContentSizeReset.get();
          }
          if (!tmp) {
            const obj = arr(selectedIndex[5]);
            obj.scrollTo(animatedRef, memo.get() * width, 0, false);
          }
        };
        obj = { thumbnailsScrolling: sharedValue, viewerScrolling: closure_7, thumbnailsAnimateTo: isSpuriousContentSizeReset, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailsIndex: memo, screenWidth: width };
        fn2.__closure = obj;
        fn2.__workletHash = 16855593341498;
        fn2.__initData = closure_1_26;
        const derivedValue1 = obj4.useDerivedValue(fn2);
        const diff = animatedRef.length - 1;
        selectedIndex = diff;
        items = [diff, width];
        memo = closure_1_4.useMemo(() => {
          let obj = { onBeginDrag: fn, onEndDrag: fn2, onScroll: null, onMomentumBegin: null, onMomentumEnd: null };
          fn = function l() {
            const result = store.set(2 | store.get());
            const result1 = store2.set("viewer");
          };
          obj = { viewerScrolling: closure_1_7, SCROLLING_DRAG: 2, swipeSource: closure_1_9 };
          fn.__closure = obj;
          fn.__workletHash = 1082965969005;
          fn.__initData = closure_2_27;
          fn2 = function o() {
            const result = store.set(-3 & store.get());
          };
          fn2.__closure = { viewerScrolling: closure_1_7, SCROLLING_DRAG: 2 };
          fn2.__workletHash = 1722948238280;
          fn2.__initData = closure_2_28;
          const fn3 = function i(arg0) {
            const result = closure_1_6.set(arg0 / closure_1);
            if ("viewer" === closure_1_9.get()) {
              const obj = { offsetX: null, pageSize: null, maxIndex: null };
              obj[0] = arg0;
              obj[1] = closure_1;
              obj[2] = closure_2;
              selectedIndex = animatedRef(diff[11]).resolveSelectedIndex(obj);
              let tmp4 = null != selectedIndex;
              if (tmp4) {
                tmp4 = closure_1_2.get() !== selectedIndex;
              }
              if (tmp4) {
                const result1 = closure_1_2.set(selectedIndex);
                tmp9(tmp10[5]).runOnJS(closure_1_10)();
                const tmp9Result = tmp9(tmp10[5]);
              }
              const obj2 = animatedRef(diff[11]);
              tmp10 = diff;
              tmp9 = animatedRef;
            }
          };
          obj = { viewerPos: closure_1_6, screenWidth: width, swipeSource: closure_1_9, resolveSelectedIndex: arr(selectedIndex[11]).resolveSelectedIndex, maxIndex: closure_2, selectedIndex: diff, runOnJS: arr(selectedIndex[5]).runOnJS, onSelectedIndexChange: closure_1_10 };
          fn3.__closure = obj;
          fn3.__workletHash = 4243462798580;
          fn3.__initData = closure_2_29;
          obj[2] = fn3;
          const fn4 = function n() {
            const result = store.set(4 | store.get());
            const result1 = store2.set("viewer");
          };
          fn4.__closure = { viewerScrolling: closure_1_7, SCROLLING_MOMENTUM: 4, swipeSource: closure_1_9 };
          fn4.__workletHash = 16635271467463;
          fn4.__initData = closure_2_30;
          obj[3] = fn4;
          const fn5 = function t() {
            const result = store.set(-5 & store.get());
          };
          fn5.__closure = { viewerScrolling: closure_1_7, SCROLLING_MOMENTUM: 4 };
          fn5.__workletHash = 8806989101472;
          fn5.__initData = closure_2_31;
          obj[4] = fn5;
          return obj;
        }, items);
        sharedValue = arr(selectedIndex[5]).useSharedValue(0);
        isSpuriousContentSizeReset = function isSpuriousContentSizeReset(arg0) {
          let tmp = onSelectedIndexChange;
          if (onSelectedIndexChange) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp = timestamp - sharedValue.get() < 500;
          }
          if (tmp) {
            tmp = 0 === arg0;
          }
          if (tmp) {
            tmp = 0 !== diff.get();
          }
          return tmp;
        };
        obj1 = { IS_ANDROID: onSelectedIndexChange, contentSizeLastChangedAt: sharedValue, selectedIndex };
        isSpuriousContentSizeReset.__closure = obj1;
        isSpuriousContentSizeReset.__workletHash = 16891385947601;
        isSpuriousContentSizeReset.__initData = closure_1_32;
        const obj7 = arr(selectedIndex[5]);
        obj2 = { onBeginDrag: memo.onBeginDrag, onEndDrag: fn3, onScroll: null, onMomentumBegin: null, onMomentumEnd: null };
        fn3 = function w(contentOffset) {
          memo.onEndDrag();
          memo.onScroll(contentOffset.contentOffset.x);
        };
        fn3.__closure = { onScrollWorklets: memo };
        fn3.__workletHash = 14520405122599;
        fn3.__initData = closure_1_33;
        let fn4 = function f(contentOffset) {
          if (typeof isSpuriousContentSizeReset !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let tmp = onSelectedIndexChange;
          if (onSelectedIndexChange) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp = timestamp - sharedValue.get() < 500;
          }
          if (tmp) {
            tmp = 0 === contentOffset.contentOffset.x;
          }
          if (tmp) {
            tmp = 0 !== diff.get();
          }
          if (tmp) {
            const obj = arr(selectedIndex[5]);
            obj.scrollTo(animatedRef, diff.get() * width, contentOffset.contentOffset.y, false);
          } else {
            let tmp7 = 0 === closure_1_7.get();
            if (tmp7) {
              tmp7 = 0 === sharedValue.get();
            }
            if (tmp7) {
              tmp7 = -1 === isSpuriousContentSizeReset.get();
            }
            if (!tmp7) {
              memo.onScroll(contentOffset.contentOffset.x);
            }
          }
        };
        const obj9 = arr(selectedIndex[5]);
        fn4.__closure = { isSpuriousContentSizeReset, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, selectedIndex, screenWidth: width, viewerScrolling: closure_7, thumbnailsScrolling: sharedValue, thumbnailsAnimateTo: isSpuriousContentSizeReset, onScrollWorklets: memo };
        fn4.__workletHash = 7185374511625;
        fn4.__initData = closure_1_34;
        obj2[2] = fn4;
        obj2[3] = memo.onMomentumBegin;
        let fn5 = function _(contentOffset) {
          if (typeof isSpuriousContentSizeReset !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let tmp = onSelectedIndexChange;
          if (onSelectedIndexChange) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp = timestamp - sharedValue.get() < 500;
          }
          if (tmp) {
            tmp = 0 === contentOffset.contentOffset.x;
          }
          if (tmp) {
            tmp = 0 !== diff.get();
          }
          if (!tmp) {
            memo.onScroll(contentOffset.contentOffset.x);
          }
          memo.onMomentumEnd();
        };
        fn5.__closure = { isSpuriousContentSizeReset, onScrollWorklets: memo };
        fn5.__workletHash = 6883658005321;
        fn5.__initData = closure_1_35;
        obj2[4] = fn5;
        const items1 = [animatedRef, width, sharedValue];
        const obj3 = { isSpuriousContentSizeReset, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, selectedIndex, screenWidth: width, viewerScrolling: closure_7, thumbnailsScrolling: sharedValue, thumbnailsAnimateTo: isSpuriousContentSizeReset, onScrollWorklets: memo };
        const items2 = [width, size.height, animatedRef];
        const callback = closure_1_4.useCallback(() => {
          const current = animatedRef.current;
          if (current != null) {
            current.scrollTo(tmp, false);
          }
          const result = sharedValue.set(Date.now());
        }, items1);
        const effect = closure_1_4.useEffect(() => {
          const current = animatedRef.current;
          if (current != null) {
            current.reset();
          }
        }, items2);
        obj4 = {
          ref: animatedRef,
          onScroll: obj9.useAnimatedScrollHandler(obj2),
          onContentSizeChange: callback,
          useItemVisible: closure_1_4.useCallback((index) => {
            closure_0 = index;
            const tmp = memo(sharedValue.useState(index === diff.get()), 2);
            closure_1 = tmp2;
            let obj = animatedRef(diff[5]);
            const fn = function l() {
              return closure_0 === closure_1_2.get();
            };
            fn.__closure = { index, selectedIndex: diff };
            fn.__workletHash = 16022091092784;
            fn.__initData = closure_1_36;
            const fn2 = function o(arg0, arg1) {
              if (tmp) {
                animatedRef(diff[5]).runOnJS(closure_1)(arg0);
                const obj = animatedRef(diff[5]);
              }
            };
            obj = { runOnJS: animatedRef(diff[5]).runOnJS, setVisible: tmp2 };
            fn2.__closure = obj;
            fn2.__workletHash = 16809313881276;
            fn2.__initData = closure_1_37;
            const animatedReaction = obj.useAnimatedReaction(fn, fn2);
            return tmp[0];
          }, [])
        };
        return obj4;
      },
      onEndReached: selectedIndex,
      onEndReachedThreshold
    };
  }, items1);
};