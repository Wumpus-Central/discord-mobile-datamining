// === Module 8865: useMediaViewerSyncer ===

// Module 8865 (useMediaViewerSyncer)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8839 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const Constants = fn(8866);
({ THUMBNAIL_MARGIN: hasOwnProperty, THUMBNAIL_HEIGHT: metroRequire, THUMBNAIL_MAX_WIDTH: closure_7, THUMBNAIL_MIN_WIDTH: closure_8, THUMBNAIL_WIDTH_MARGIN: closure_9 } = Constants);
const PlatformUtils = fn(1375);
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
let closure_25 = { code: "function useMediaViewerSyncerTsx16(){const{gesturePagerEnabled,thumbnailsAnimateTo,scrollTo,ref,screenWidth}=this.__closure;if(gesturePagerEnabled||thumbnailsAnimateTo.get()===-1)return;scrollTo(ref,thumbnailsAnimateTo.get()*screenWidth,0,false);}" };
let closure_26 = { code: "function useMediaViewerSyncerTsx17(){const{gesturePagerEnabled,thumbnailsScrolling,viewerScrolling,thumbnailsAnimateTo,scrollTo,ref,thumbnailsIndex,screenWidth}=this.__closure;if(gesturePagerEnabled||thumbnailsScrolling.get()===0||viewerScrolling.get()>0||thumbnailsAnimateTo.get()!==-1)return;scrollTo(ref,thumbnailsIndex.get()*screenWidth,0,false);}" };
let closure_27 = { code: "function useMediaViewerSyncerTsx18(){const{selectedIndex}=this.__closure;return selectedIndex.get();}" };
let closure_28 = { code: "function useMediaViewerSyncerTsx19(index){const{pagerIndex}=this.__closure;return pagerIndex.set(index);}" };
let closure_29 = { code: "function useMediaViewerSyncerTsx20(){const{thumbnailsAnimateTo}=this.__closure;return thumbnailsAnimateTo.get();}" };
let closure_30 = { code: "function useMediaViewerSyncerTsx21(target,previous){const{pagerIndex}=this.__closure;if(previous!==null&&target!==-1)pagerIndex.set(target);}" };
let closure_31 = { code: "function useMediaViewerSyncerTsx22(){const{viewerScrolling,SCROLLING_DRAG,swipeSource,gesturePagerEnabled,thumbnailsAnimateTo}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_DRAG);swipeSource.set('viewer');if(gesturePagerEnabled)thumbnailsAnimateTo.set(-1);}" };
let closure_32 = { code: "function useMediaViewerSyncerTsx23(){const{viewerScrolling,SCROLLING_DRAG}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_DRAG);}" };
let closure_33 = { code: "function useMediaViewerSyncerTsx24(offsetX){const{viewerPos,screenWidth,swipeSource,resolveSelectedIndex,maxIndex,gesturePagerEnabled,pagerIndex,selectedIndex,runOnJS,onSelectedIndexChange}=this.__closure;viewerPos.set(offsetX/screenWidth);if(swipeSource.get()!=='viewer')return;const nearest=resolveSelectedIndex({offsetX:offsetX,pageSize:screenWidth,maxIndex:maxIndex});if(nearest==null)return;if(gesturePagerEnabled)pagerIndex.set(nearest);if(selectedIndex.get()===nearest)return;selectedIndex.set(nearest);runOnJS(onSelectedIndexChange)();}" };
let closure_34 = { code: "function useMediaViewerSyncerTsx25(){const{viewerScrolling,SCROLLING_MOMENTUM,swipeSource}=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('viewer');}" };
let closure_35 = { code: "function useMediaViewerSyncerTsx26(){const{viewerScrolling,SCROLLING_MOMENTUM}=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_MOMENTUM);}" };
let closure_36 = { code: "function isSpuriousContentSizeReset_useMediaViewerSyncerTsx27(offsetX){const{IS_ANDROID,contentSizeLastChangedAt,selectedIndex}=this.__closure;return IS_ANDROID&&Date.now()-contentSizeLastChangedAt.get()<500&&offsetX===0&&selectedIndex.get()!==0;}" };
let closure_37 = { code: "function useMediaViewerSyncerTsx28(event){const{onScrollWorklets}=this.__closure;onScrollWorklets.onEndDrag();onScrollWorklets.onScroll(event.contentOffset.x);}" };
let closure_38 = { code: "function useMediaViewerSyncerTsx29(event){const{isSpuriousContentSizeReset,scrollTo,ref,selectedIndex,screenWidth,viewerScrolling,thumbnailsScrolling,thumbnailsAnimateTo,onScrollWorklets}=this.__closure;if(isSpuriousContentSizeReset(event.contentOffset.x)){scrollTo(ref,selectedIndex.get()*screenWidth,event.contentOffset.y,false);return;}if(viewerScrolling.get()===0&&thumbnailsScrolling.get()===0&&thumbnailsAnimateTo.get()===-1)return;onScrollWorklets.onScroll(event.contentOffset.x);}" };
let closure_39 = { code: "function useMediaViewerSyncerTsx30(event){const{isSpuriousContentSizeReset,onScrollWorklets}=this.__closure;if(!isSpuriousContentSizeReset(event.contentOffset.x)){onScrollWorklets.onScroll(event.contentOffset.x);}onScrollWorklets.onMomentumEnd();}" };
let closure_40 = { code: "function useMediaViewerSyncerTsx31(){const{index,selectedIndex}=this.__closure;return index===selectedIndex.get();}" };
let closure_41 = { code: "function useMediaViewerSyncerTsx32(result,previous){const{runOnJS,setVisible}=this.__closure;if(previous==null||previous===result)return;runOnJS(setVisible)(result);}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSyncer.tsx");

export function useMediaViewerSyncer(sources) {
  sources = sources.sources;
  const initialIndex = sources.initialIndex;
  const onEndReached = sources.onEndReached;
  const onEndReachedThreshold = sources.onEndReachedThreshold;
  let memo;
  let items = [initialIndex];
  memo = memo.useMemo(() => {
    const obj = { selectedIndex: ReanimatedRexport.makeMutable(initialIndex), thumbnailsIndex: null, thumbnailsScrolling: null, thumbnailsAnimateTo: null, viewerPos: null, viewerScrolling: null, zoomed: null, swipeSource: null };
    obj.thumbnailsIndex = ReanimatedRexport.makeMutable(initialIndex);
    obj.thumbnailsScrolling = ReanimatedRexport.makeMutable(0);
    obj.thumbnailsAnimateTo = ReanimatedRexport.makeMutable(-1);
    obj.viewerPos = ReanimatedRexport.makeMutable(initialIndex);
    obj.viewerScrolling = ReanimatedRexport.makeMutable(0);
    obj.zoomed = ReanimatedRexport.makeMutable(false);
    obj.swipeSource = ReanimatedRexport.makeMutable(undefined);
    return obj;
  }, items);
  let items1 = [sources, memo, onEndReached, onEndReachedThreshold];
  return memo.useMemo(() => {
    let items = [];
    let num = 0;
    let num2 = 0;
    if (0 < sources.length) {
      do {
        let obj = MediaSourceUtil;
        let size = obj.flattenSource(sources[num]);
        if (null != size) {
          let _Math = Math;
          let _Math2 = Math;
          let sum = num2 + (Math.max(Math.min(size.width * (timestampProducer / size.height), React5), React6) + 2 * hasOwnProperty);
          let num3 = 0;
          if (0 !== num) {
            let _Math3 = Math;
            num3 = Math.floor(num2 + (sum - num2 - (items[0].end - items[0].start)) / 2);
          }
          let obj2 = { start: num2, end: sum, scrollStart: num3 };
          let arr2 = items.push(obj2);
          let tmp6 = sum;
        } else {
          let obj3 = { start: num2, end: num2, scrollStart: num2 };
          let arr4 = items.push(obj3);
          tmp6 = num2;
        }
        num = num + 1;
        num2 = tmp6;
      } while (num < sources.length);
    }
    function onSelectedIndexChange() {
      if ("thumbnails" === swipeSource.get()) {
        const MediaViewerAnalytics = sources(onEndReached[4]).MediaViewerAnalytics;
        MediaViewerAnalytics.markActionPerformed(sources(onEndReached[4]).IncrementableMediaViewerActions.THUMBNAIL_SWIPE);
      } else if ("viewer" === swipeSource.get()) {
        const MediaViewerAnalytics3 = sources(onEndReached[4]).MediaViewerAnalytics;
        MediaViewerAnalytics3.markActionPerformed(sources(onEndReached[4]).IncrementableMediaViewerActions.VIEWER_SWIPE);
      }
      const MediaViewerAnalytics2 = sources(onEndReached[4]).MediaViewerAnalytics;
      MediaViewerAnalytics2.markActionPerformed(sources(onEndReached[4]).IncrementableMediaViewerActions.SELECTED_ITEM_CHANGE);
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
      sources,
      zoomed,
      thumbnailScrollPositions: items,
      variableWidthThumbnailsEnabled: false,
      useThumbnailsProps(onSelect, maxIndex) {
        thumbnailScrollPositions = maxIndex;
        const animatedRef = arr(selectedIndex[5]).useAnimatedRef();
        let obj = arr(selectedIndex[5]);
        let size = arr(selectedIndex[6]).useMediaViewerDimensions();
        let width = size.width;
        const rect = items(selectedIndex[7])();
        let obj2 = arr(selectedIndex[6]);
        let obj4 = { onBeginDrag: null, onEndDrag: null, onScroll: null, onMomentumBegin: null, onMomentumEnd: null };
        class L {
          constructor() {
            result = closure_4.set(2 | closure_4.get());
            result1 = closure_1_9.set("thumbnails");
            return;
          }
        }
        L.__closure = { thumbnailsScrolling: mapped1, SCROLLING_DRAG: 2, swipeSource };
        L.__workletHash = 16224520186325;
        L.__initData = variableWidthThumbnailsEnabled;
        obj4.onBeginDrag = L;
        class V {
          constructor() {
            result = closure_4.set(-3 & closure_4.get());
            return;
          }
        }
        V.__closure = { thumbnailsScrolling: mapped1, SCROLLING_DRAG: 2 };
        V.__workletHash = 5779899826871;
        V.__initData = __initData;
        obj4.onEndDrag = V;
        class E {
          constructor(arg0) {
            result = onSelect.contentOffset.x / closure_0;
            obj = swipeSource;
            if ("thumbnails" === swipeSource.get()) {
              tmp3 = globalThis;
              _Math3 = Math;
              _Math4 = Math;
              _Math5 = Math;
              tmp4 = closure_1;
              num2 = 0;
              tmp5 = thumbnailsIndex;
              result1 = thumbnailsIndex.set(Math.max(0, Math.min(Math.round(result), closure_1)));
            } else {
              tmp2 = globalThis;
              _Math = Math;
              _Math2 = Math;
              num = 0.01;
            }
            obj2 = thumbnailsAnimateTo;
            if (thumbnailsAnimateTo.get() >= 0) {
              obj4 = thumbnailsIndex;
              value = thumbnailsIndex.get();
              if (value === obj2.get()) {
                num3 = -1;
                result2 = obj2.set(-1);
                tmp22 = selectedIndex;
                result3 = selectedIndex.set(obj4.get());
              }
            } else {
              tmp24 = viewerScrolling;
              tmp8 = 0 !== viewerScrolling.get();
              if (!tmp8) {
                tmp7 = thumbnailsScrolling;
                tmp8 = 0 !== thumbnailsScrolling.get();
              }
              tmp9 = "thumbnails" === obj.get() && tmp8;
              if (tmp9) {
                tmp10 = thumbnailsIndex;
                tmp12 = selectedIndex;
                value1 = thumbnailsIndex.get();
                tmp9 = value1 !== selectedIndex.get();
              }
              if (tmp9) {
                tmp13 = selectedIndex;
                tmp14 = thumbnailsIndex;
                result4 = selectedIndex.set(thumbnailsIndex.get());
                tmp16 = sources;
                tmp17 = onEndReached;
                obj3 = sources(onEndReached[5]);
                tmp18 = onSelectedIndexChange;
                tmp19 = obj3.runOnJS(onSelectedIndexChange)();
              }
            }
            return;
          }
        }
        let obj3 = arr(selectedIndex[5]);
        let obj5 = { thumbnailsScrolling: mapped1, SCROLLING_DRAG: 2, swipeSource };
        E.__closure = { variableWidthThumbnailsEnabled, thumbnailScrollPositions, thumbnailSize: onSelect, swipeSource, maxIndex, thumbnailsIndex: mapped, thumbnailsAnimateTo: derivedValue2, selectedIndex: animatedRef, viewerScrolling: diff1, thumbnailsScrolling: mapped1, runOnJS: arr(selectedIndex[5]).runOnJS, onSelectedIndexChange };
        E.__workletHash = 6212589685153;
        E.__initData = __initData2;
        obj4.onScroll = E;
        class P {
          constructor() {
            result = closure_4.set(4 | closure_4.get());
            result1 = closure_1_9.set("thumbnails");
            return;
          }
        }
        P.__closure = { thumbnailsScrolling: mapped1, SCROLLING_MOMENTUM: 4, swipeSource };
        P.__workletHash = 4138169755088;
        P.__initData = __initData3;
        obj4.onMomentumBegin = P;
        let fn = function h() {
          const result = mapped1.set(-5 & mapped1.get());
        };
        fn.__closure = { thumbnailsScrolling: mapped1, SCROLLING_MOMENTUM: 4 };
        fn.__workletHash = 1471443652144;
        fn.__initData = __initData4;
        obj4.onMomentumEnd = fn;
        const obj6 = { variableWidthThumbnailsEnabled, thumbnailScrollPositions, thumbnailSize: onSelect, swipeSource, maxIndex, thumbnailsIndex: mapped, thumbnailsAnimateTo: derivedValue2, selectedIndex: animatedRef, viewerScrolling: diff1, thumbnailsScrolling: mapped1, runOnJS: arr(selectedIndex[5]).runOnJS, onSelectedIndexChange };
        items = [animatedRef];
        const callback = thumbnailsScrolling.useCallback((arg0) => {
          if (!THUMBNAIL_MIN_WIDTH.get()) {
            const result = derivedValue2.set(arg0);
            const result1 = swipeSource.set("thumbnails");
          }
        }, []);
        const callback1 = thumbnailsScrolling.useCallback((arg0) => {
          sources(onEndReached[5]).scrollTo(animatedRef, items[arg0].scrollStart, 0, true);
        }, items);
        const animatedScrollHandler = obj3.useAnimatedScrollHandler(obj4);
        class H {
          constructor() {
            obj = thumbnailsAnimateTo;
            if (thumbnailsAnimateTo.get() >= 0) {
              tmp = sources;
              tmp2 = onEndReached;
              obj2 = sources(onEndReached[5]);
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
        const obj7 = arr(selectedIndex[5]);
        H.__closure = { thumbnailsAnimateTo: derivedValue2, variableWidthThumbnailsEnabled, runOnJS: arr(selectedIndex[5]).runOnJS, scrollVarWidthThumbnails: callback1, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
        H.__workletHash = 1697086875584;
        H.__initData = __initData5;
        let derivedValue = obj7.useDerivedValue(H);
        let items1 = [animatedRef];
        const callback2 = thumbnailsScrolling.useCallback((arg0) => {
          const result = sources(onEndReached[8]).lerpVarWidthThumbnailScrollBounds(items, arg0);
          const obj = sources(onEndReached[8]);
          sources(onEndReached[5]).scrollTo(animatedRef, result, 0, false);
        }, items1);
        const obj8 = { thumbnailsAnimateTo: derivedValue2, variableWidthThumbnailsEnabled, runOnJS: arr(selectedIndex[5]).runOnJS, scrollVarWidthThumbnails: callback1, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
        class B {
          constructor() {
            tmp = 0 !== viewerScrolling.get();
            if (tmp) {
              tmp2 = thumbnailsIndex;
              tmp4 = viewerPos;
              value = thumbnailsIndex.get();
              tmp = value !== viewerPos.get();
            }
            if (tmp) {
              tmp5 = sources;
              tmp6 = onEndReached;
              obj = sources(onEndReached[5]);
              tmp7 = closure_2;
              tmp8 = viewerPos;
              tmp9 = closure_0;
              flag = false;
              tmp10 = obj;
              num = 0;
              scrollToResult = obj.scrollTo(closure_2, viewerPos.get() * closure_0, 0, false);
            }
            return;
          }
        }
        const obj9 = arr(selectedIndex[5]);
        B.__closure = { viewerScrolling: diff1, thumbnailsIndex: mapped, viewerPos, variableWidthThumbnailsEnabled, runOnJS: arr(selectedIndex[5]).runOnJS, lerpScrollVarWidthThumbnails: callback2, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
        B.__workletHash = 10477949154269;
        B.__initData = __initData6;
        let derivedValue1 = obj9.useDerivedValue(B);
        mapped = onSelect.map((item, index) => index);
        mapped1 = onSelect.map((item) => {
          const size = onSelect(animatedRef[9]).flattenSource(item);
          let num = 0;
          if (null != size) {
            const _Math = Math;
            const _Math2 = Math;
            num = (Math.max(Math.min(size.width * (diff / size.height), diff1), THUMBNAIL_MIN_WIDTH) - THUMBNAIL_MIN_WIDTH) / 2;
          }
          return num;
        });
        const obj10 = { viewerScrolling: diff1, thumbnailsIndex: mapped, viewerPos, variableWidthThumbnailsEnabled, runOnJS: arr(selectedIndex[5]).runOnJS, lerpScrollVarWidthThumbnails: callback2, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailSize: onSelect };
        class J {
          constructor() {
            num = 0;
            if (thumbnailsScrolling.get() <= 0) {
              tmp = sources;
              tmp2 = onEndReached;
              obj = sources(onEndReached[5]);
              tmp3 = viewerPos;
              tmp4 = closure_3;
              tmp5 = closure_4;
              str = "clamp";
              tmp6 = obj;
              num = -obj.interpolate(viewerPos.get(), closure_3, closure_4, "clamp");
            }
            return num;
          }
        }
        const obj11 = arr(selectedIndex[5]);
        J.__closure = { thumbnailsScrolling: mapped1, interpolate: arr(selectedIndex[5]).interpolate, viewerPos, interpolateInput: mapped, interpolateOutput: mapped1 };
        J.__workletHash = 10097839523885;
        J.__initData = __initData7;
        derivedValue2 = obj11.useDerivedValue(J);
        const diff = (width - onSelect) / 2 - rect.left;
        viewerPos = diff;
        const obj12 = { thumbnailsScrolling: mapped1, interpolate: arr(selectedIndex[5]).interpolate, viewerPos, interpolateInput: mapped, interpolateOutput: mapped1 };
        class X {
          constructor() {
            if (viewerScrolling.get() > 0) {
              tmp6 = closure_6;
              tmp7 = closure_5;
              sum = closure_6 + closure_5.get();
            } else {
              tmp = sources;
              tmp2 = onEndReached;
              obj = sources(onEndReached[10]);
              tmp3 = closure_6;
              tmp4 = closure_5;
              sum = obj.withSpring(closure_6 + closure_5.get(), { overshootClamping: true });
            }
            return { width: sum };
          }
        }
        const obj13 = arr(selectedIndex[5]);
        X.__closure = { viewerScrolling: diff1, headerBufferSize: diff, margin: derivedValue2, withSpring: arr(selectedIndex[10]).withSpring };
        X.__workletHash = 11328769587377;
        X.__initData = __initData8;
        diff1 = (width - onSelect) / 2 - rect.right;
        const animatedStyle = obj13.useAnimatedStyle(X);
        const obj14 = { viewerScrolling: diff1, headerBufferSize: diff, margin: derivedValue2, withSpring: arr(selectedIndex[10]).withSpring };
        class F {
          constructor() {
            if (viewerScrolling.get() > 0) {
              tmp6 = closure_7;
              tmp7 = closure_5;
              sum = closure_7 + closure_5.get();
            } else {
              tmp = sources;
              tmp2 = onEndReached;
              obj = sources(onEndReached[10]);
              tmp3 = closure_7;
              tmp4 = closure_5;
              sum = obj.withSpring(closure_7 + closure_5.get(), { overshootClamping: true });
            }
            return { width: sum };
          }
        }
        const obj15 = arr(selectedIndex[5]);
        F.__closure = { viewerScrolling: diff1, footerBufferSize: diff1, margin: derivedValue2, withSpring: arr(selectedIndex[10]).withSpring };
        F.__workletHash = 10532164558483;
        F.__initData = __initData9;
        const animatedStyle1 = obj15.useAnimatedStyle(F);
        const callback3 = thumbnailsScrolling.useCallback((width, index) => {
          onSelect = index;
          const fn = function i() {
            const items = [closure_0 - 1, closure_0, closure_0 + 1];
            return arr(selectedIndex[5]).interpolate(diff.get(), items, [0.4, 1, 0.4], "clamp");
          };
          let obj = onSelect(animatedRef[5]);
          fn.__closure = { interpolate: onSelect(animatedRef[5]).interpolate, viewerPos, index };
          fn.__workletHash = 5784737783661;
          fn.__initData = __initData;
          const derivedValue = obj.useDerivedValue(fn);
          const bound = Math.max(Math.min(width.width * (diff / width.height), diff1), THUMBNAIL_MIN_WIDTH);
          const obj2 = { interpolate: onSelect(animatedRef[5]).interpolate, viewerPos, index };
          const fn2 = function l() {
            if (mapped1.get() > 0) {
              let interpolateResult = zoomed;
            } else {
              const obj = arr(selectedIndex[5]);
              const items = [closure_0 - 1, closure_0, closure_0 + 1];
              const items1 = [zoomed, bound, zoomed];
              interpolateResult = obj.interpolate(diff.get(), items, items1, "clamp");
            }
            return interpolateResult;
          };
          const obj3 = onSelect(animatedRef[5]);
          fn2.__closure = { thumbnailsScrolling: mapped1, THUMBNAIL_MIN_WIDTH, interpolate: onSelect(animatedRef[5]).interpolate, viewerPos, index, sourceWidth: bound };
          fn2.__workletHash = 12440745987072;
          fn2.__initData = __initData2;
          const derivedValue1 = obj3.useDerivedValue(fn2);
          const obj4 = { thumbnailsScrolling: mapped1, THUMBNAIL_MIN_WIDTH, interpolate: onSelect(animatedRef[5]).interpolate, viewerPos, index, sourceWidth: bound };
          const fn3 = function u() {
            if (diff1.get() > 0) {
              let withSpringResult = derivedValue1.get();
            } else {
              withSpringResult = arr(selectedIndex[10]).withSpring(derivedValue1.get(), { overshootClamping: true });
              const obj = arr(selectedIndex[10]);
            }
            const size = { width: withSpringResult, height, opacity: derivedValue.get() };
            return size;
          };
          const obj5 = onSelect(animatedRef[5]);
          fn3.__closure = { viewerScrolling: diff1, _width: derivedValue1, withSpring: onSelect(animatedRef[10]).withSpring, THUMBNAIL_HEIGHT: diff, opacity: derivedValue };
          fn3.__workletHash = 513826663139;
          fn3.__initData = __initData3;
          return obj5.useAnimatedStyle(fn3);
        }, []);
        const obj16 = { viewerScrolling: diff1, footerBufferSize: diff1, margin: derivedValue2, withSpring: arr(selectedIndex[10]).withSpring };
        let fn2 = function q() {
          return !THUMBNAIL_MIN_WIDTH.get();
        };
        fn2.__closure = { zoomed };
        fn2.__workletHash = 7667674289153;
        fn2.__initData = __initData10;
        const obj17 = arr(selectedIndex[5]);
        const obj18 = { zoomed };
        return {
          ref: animatedRef,
          headerBufferStyle: animatedStyle,
          headerBufferSize: diff,
          footerBufferStyle: animatedStyle1,
          footerBufferSize: diff1,
          scrollEnabled: arr(selectedIndex[5]).useDerivedValue(fn2),
          onScroll: animatedScrollHandler,
          onSelect: callback,
          useThumbnailStyle: callback3,
          screenWidth: width,
          screenHeight: size.height,
          itemSize(arg0, arg1) {
            return swipeSource;
          }
        };
      },
      useViewerProps() {
        let flag = isMediaViewerImprovementsEnabled;
        if (isMediaViewerImprovementsEnabled === undefined) {
          flag = false;
        }
        let sharedValue;
        thumbnailsScrolling = undefined;
        memo = undefined;
        let isSpuriousContentSizeReset;
        const animatedRef = arr(selectedIndex[5]).useAnimatedRef();
        let obj = arr(selectedIndex[5]);
        const size = arr(selectedIndex[6]).useMediaViewerDimensions();
        const width = size.width;
        let obj2 = arr(selectedIndex[6]);
        let fn = function o() {
          let tmp = flag;
          if (!flag) {
            tmp = -1 === thumbnailsAnimateTo.get();
          }
          if (!tmp) {
            const obj = sources(onEndReached[5]);
            obj.scrollTo(animatedRef, thumbnailsAnimateTo.get() * width, 0, false);
          }
        };
        let obj3 = arr(selectedIndex[5]);
        fn.__closure = { gesturePagerEnabled: flag, thumbnailsAnimateTo: memo, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, screenWidth: width };
        fn.__workletHash = 2613111977339;
        fn.__initData = __initData11;
        const derivedValue = obj3.useDerivedValue(fn);
        const obj4 = { gesturePagerEnabled: flag, thumbnailsAnimateTo: memo, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, screenWidth: width };
        let fn2 = function s() {
          let tmp = flag;
          if (!flag) {
            tmp = 0 === thumbnailsScrolling.get();
          }
          if (!tmp) {
            tmp = viewerScrolling.get() > 0;
          }
          if (!tmp) {
            tmp = -1 !== thumbnailsAnimateTo.get();
          }
          if (!tmp) {
            const obj = sources(onEndReached[5]);
            obj.scrollTo(animatedRef, onEndReachedThreshold.get() * width, 0, false);
          }
        };
        const obj5 = arr(selectedIndex[5]);
        fn2.__closure = { gesturePagerEnabled: flag, thumbnailsScrolling, viewerScrolling: isSpuriousContentSizeReset, thumbnailsAnimateTo: memo, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailsIndex: sharedValue, screenWidth: width };
        fn2.__workletHash = 14956555189814;
        fn2.__initData = __initData12;
        const derivedValue1 = obj5.useDerivedValue(fn2);
        const obj6 = { gesturePagerEnabled: flag, thumbnailsScrolling, viewerScrolling: isSpuriousContentSizeReset, thumbnailsAnimateTo: memo, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, thumbnailsIndex: sharedValue, screenWidth: width };
        sharedValue = arr(selectedIndex[5]).useSharedValue(width.get());
        const obj7 = arr(selectedIndex[5]);
        let fn3 = function b() {
          return width.get();
        };
        fn3.__closure = { selectedIndex: width };
        fn3.__workletHash = 8868337511821;
        fn3.__initData = __initData13;
        let fn4 = function f(arg0) {
          return sharedValue.set(arg0);
        };
        fn4.__closure = { pagerIndex: sharedValue };
        fn4.__workletHash = 493937534680;
        fn4.__initData = __initData14;
        let animatedReaction = arr(selectedIndex[5]).useAnimatedReaction(fn3, fn4);
        const obj8 = arr(selectedIndex[5]);
        let fn5 = function x() {
          return memo.get();
        };
        fn5.__closure = { thumbnailsAnimateTo: memo };
        fn5.__workletHash = 2755126692038;
        fn5.__initData = __initData15;
        const fn6 = function w(arg0, arg1) {
          let tmp = null !== arg1;
          if (tmp) {
            tmp = -1 !== arg0;
          }
          if (tmp) {
            const result = sharedValue.set(arg0);
          }
        };
        fn6.__closure = { pagerIndex: sharedValue };
        fn6.__workletHash = 12394178261965;
        fn6.__initData = __initData16;
        const animatedReaction1 = arr(selectedIndex[5]).useAnimatedReaction(fn5, fn6);
        const diff = flag.length - 1;
        thumbnailsScrolling = diff;
        const items = [flag, diff, sharedValue, width];
        memo = thumbnailsScrolling.useMemo(() => {
          const obj = { onBeginDrag: null, onEndDrag: null, onScroll: null, onMomentumBegin: null, onMomentumEnd: null };
          const fn = function s() {
            const result = isSpuriousContentSizeReset.set(2 | isSpuriousContentSizeReset.get());
            const result1 = swipeSource.set("viewer");
            if (flag) {
              const result2 = memo.set(-1);
            }
          };
          fn.__closure = { viewerScrolling, SCROLLING_DRAG: 2, swipeSource, gesturePagerEnabled: flag, thumbnailsAnimateTo };
          fn.__workletHash = 8518089138784;
          fn.__initData = __initData;
          obj.onBeginDrag = fn;
          const fn2 = function o() {
            const result = isSpuriousContentSizeReset.set(-3 & isSpuriousContentSizeReset.get());
          };
          fn2.__closure = { viewerScrolling, SCROLLING_DRAG: 2 };
          fn2.__workletHash = 16302777003905;
          fn2.__initData = __initData2;
          obj.onEndDrag = fn2;
          const fn3 = function i(offsetX) {
            const result = sharedValue1.set(offsetX / pageSize);
            if ("viewer" === swipeSource.get()) {
              const obj2 = { offsetX, pageSize, maxIndex };
              selectedIndex = arr(selectedIndex[11]).resolveSelectedIndex(obj2);
              if (null != selectedIndex) {
                if (flag) {
                  const result1 = sharedValue.set(selectedIndex);
                }
                if (width.get() !== selectedIndex) {
                  const result2 = width.set(selectedIndex);
                  arr(tmp10[5]).runOnJS(onSelectedIndexChange)();
                  const tmp9Result = arr(tmp10[5]);
                }
              }
              const obj3 = arr(selectedIndex[11]);
              tmp10 = selectedIndex;
            }
          };
          fn3.__closure = { viewerPos, screenWidth: width, swipeSource, resolveSelectedIndex: sources(onEndReached[11]).resolveSelectedIndex, maxIndex, gesturePagerEnabled: flag, pagerIndex: sharedValue, selectedIndex, runOnJS: sources(onEndReached[5]).runOnJS, onSelectedIndexChange };
          fn3.__workletHash = 11551682753261;
          fn3.__initData = __initData3;
          obj.onScroll = fn3;
          const fn4 = function n() {
            const result = isSpuriousContentSizeReset.set(4 | isSpuriousContentSizeReset.get());
            const result1 = closure_1_9.set("viewer");
          };
          fn4.__closure = { viewerScrolling, SCROLLING_MOMENTUM: 4, swipeSource };
          fn4.__workletHash = 16196642042435;
          fn4.__initData = __initData4;
          obj.onMomentumBegin = fn4;
          const fn5 = function t() {
            const result = isSpuriousContentSizeReset.set(-5 & isSpuriousContentSizeReset.get());
          };
          fn5.__closure = { viewerScrolling, SCROLLING_MOMENTUM: 4 };
          fn5.__workletHash = 9245618526500;
          fn5.__initData = __initData5;
          obj.onMomentumEnd = fn5;
          return obj;
        }, items);
        const obj9 = arr(selectedIndex[5]);
        const sharedValue1 = arr(selectedIndex[5]).useSharedValue(0);
        isSpuriousContentSizeReset = function isSpuriousContentSizeReset(arg0) {
          let tmp = closure_3_10;
          if (closure_3_10) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp = timestamp - sharedValue1.get() < 500;
          }
          if (tmp) {
            tmp = 0 === arg0;
          }
          if (tmp) {
            tmp = 0 !== selectedIndex.get();
          }
          return tmp;
        };
        isSpuriousContentSizeReset.__closure = { IS_ANDROID: onSelectedIndexChange, contentSizeLastChangedAt: sharedValue1, selectedIndex: width };
        isSpuriousContentSizeReset.__workletHash = 15250440053717;
        isSpuriousContentSizeReset.__initData = __initData17;
        const obj10 = arr(selectedIndex[5]);
        const obj11 = { IS_ANDROID: onSelectedIndexChange, contentSizeLastChangedAt: sharedValue1, selectedIndex: width };
        const obj13 = { onBeginDrag: memo.onBeginDrag, onEndDrag: null, onScroll: null, onMomentumBegin: null, onMomentumEnd: null };
        class M {
          constructor(arg0) {
            onEndDragResult = closure_5.onEndDrag();
            onScrollResult = closure_5.onScroll(isMediaViewerImprovementsEnabled.contentOffset.x);
            return;
          }
        }
        M.__closure = { onScrollWorklets: memo };
        M.__workletHash = 9872882137515;
        M.__initData = __initData18;
        obj13.onEndDrag = M;
        const fn7 = function v(contentOffset) {
          if (typeof isSpuriousContentSizeReset === "function") {
            let tmp2 = closure_3_10;
            if (closure_3_10) {
              const _Date = Date;
              const timestamp = Date.now();
              tmp2 = timestamp - sharedValue1.get() < 500;
            }
            if (tmp2) {
              tmp2 = 0 === tmp;
            }
            if (tmp2) {
              tmp2 = 0 !== selectedIndex.get();
            }
            if (tmp2) {
              const obj = sources(onEndReached[5]);
              obj.scrollTo(animatedRef, selectedIndex.get() * width, contentOffset.contentOffset.y, false);
            } else {
              let tmp8 = 0 === viewerScrolling.get();
              if (tmp8) {
                tmp8 = 0 === thumbnailsScrolling.get();
              }
              if (tmp8) {
                tmp8 = -1 === thumbnailsAnimateTo.get();
              }
              if (!tmp8) {
                memo.onScroll(contentOffset.contentOffset.x);
              }
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        };
        const obj12 = arr(selectedIndex[5]);
        fn7.__closure = { isSpuriousContentSizeReset, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, selectedIndex: width, screenWidth: width, viewerScrolling: isSpuriousContentSizeReset, thumbnailsScrolling, thumbnailsAnimateTo: memo, onScrollWorklets: memo };
        fn7.__workletHash = 11837192464005;
        fn7.__initData = __initData19;
        obj13.onScroll = fn7;
        obj13.onMomentumBegin = memo.onMomentumBegin;
        class I {
          constructor(arg0) {
            if (typeof isSpuriousContentSizeReset === "function") {
              tmp2 = closure_3_10;
              if (closure_3_10) {
                tmp3 = globalThis;
                _Date = Date;
                tmp5 = closure_6;
                timestamp = Date.now();
                num = 500;
                tmp2 = timestamp - closure_6.get() < 500;
              }
              if (tmp2) {
                num2 = 0;
                tmp2 = 0 === tmp;
              }
              if (tmp2) {
                tmp6 = selectedIndex;
                num3 = 0;
                tmp2 = 0 !== selectedIndex.get();
              }
              if (!tmp2) {
                tmp7 = closure_5;
                onScrollResult = closure_5.onScroll(isMediaViewerImprovementsEnabled.contentOffset.x);
              }
              tmp9 = closure_5;
              onMomentumEndResult = closure_5.onMomentumEnd();
              return;
            } else {
              str = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        I.__closure = { isSpuriousContentSizeReset, onScrollWorklets: memo };
        I.__workletHash = 17580250323854;
        I.__initData = __initData20;
        obj13.onMomentumEnd = I;
        const items1 = [animatedRef, width, sharedValue1];
        const obj14 = { isSpuriousContentSizeReset, scrollTo: arr(selectedIndex[5]).scrollTo, ref: animatedRef, selectedIndex: width, screenWidth: width, viewerScrolling: isSpuriousContentSizeReset, thumbnailsScrolling, thumbnailsAnimateTo: memo, onScrollWorklets: memo };
        const items2 = [width, size.height, animatedRef];
        const callback = thumbnailsScrolling.useCallback(() => {
          const current = animatedRef.current;
          if (current != null) {
            current.scrollTo(tmp, false);
          }
          const result = sharedValue1.set(Date.now());
        }, items1);
        const effect = thumbnailsScrolling.useEffect(() => {
          const current = animatedRef.current;
          if (current != null) {
            current.reset();
          }
        }, items2);
        const animatedScrollHandler = obj12.useAnimatedScrollHandler(obj13);
        return {
          ref: animatedRef,
          onScroll: obj12.useAnimatedScrollHandler(obj13),
          onScrollWorklets: memo,
          pagerIndex: sharedValue,
          onContentSizeChange: callback,
          useItemVisible: thumbnailsScrolling.useCallback((index) => {
            closure_0 = index;
            let tmp = sharedValue(maxIndex.useState(index === width.get()), 2);
            closure_1 = tmp2;
            const fn = function o() {
              return closure_0 === width.get();
            };
            fn.__closure = { index, selectedIndex: width };
            fn.__workletHash = 4782151967479;
            fn.__initData = __initData;
            const fn2 = function l(arg0, arg1) {
              if (tmp) {
                arr(selectedIndex[5]).runOnJS(closure_1)(arg0);
                const obj = arr(selectedIndex[5]);
              }
              tmp = null != arg1 && arg1 !== arg0;
            };
            let obj = flag(width[5]);
            fn2.__closure = { runOnJS: flag(width[5]).runOnJS, setVisible: tmp[1] };
            fn2.__workletHash = 9343933858295;
            fn2.__initData = __initData2;
            const animatedReaction = obj.useAnimatedReaction(fn, fn2);
            return tmp[0];
          }, [])
        };
      },
      onEndReached,
      onEndReachedThreshold
    };
  }, items1);
}