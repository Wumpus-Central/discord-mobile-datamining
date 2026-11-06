// discord_app/modules/media_viewer/native/useMediaViewerSyncer.tsx
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import MediaSourceUtil from "MediaSourceUtil.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const Constants = fn(8958);
({
  THUMBNAIL_MARGIN: hasOwnProperty,
  THUMBNAIL_HEIGHT: closure_6,
  THUMBNAIL_MAX_WIDTH: metroImportDefault,
  THUMBNAIL_MIN_WIDTH: closure_8,
  THUMBNAIL_WIDTH_MARGIN: closure_9,
} = Constants);
const PlatformUtils = fn(1377);
let closure_10 = PlatformUtils.isAndroid();
let closure_11 = {
  code: "(function useMediaViewerSyncerTsx1(){let[thumbnailsScrolling,SCROLLING_DRAG,swipeSource]=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_DRAG);swipeSource.set('thumbnails');})",
};
let closure_12 = {
  code: "(function useMediaViewerSyncerTsx2(){let[thumbnailsScrolling,SCROLLING_DRAG]=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_DRAG);})",
};
let closure_13 = {
  code: "(function useMediaViewerSyncerTsx3(event){let[variableWidthThumbnailsEnabled,thumbnailScrollPositions,thumbnailSize,swipeSource,maxIndex,thumbnailsIndex,thumbnailsAnimateTo,selectedIndex,viewerScrolling,thumbnailsScrolling,scheduleOnRN,onSelectedIndexChange]=this.__closure;let thumbnails=0;if(variableWidthThumbnailsEnabled){if(event.contentOffset.x<0){thumbnails=0;}else if(event.contentOffset.x>=thumbnailScrollPositions[thumbnailScrollPositions.length-1].end){thumbnails=thumbnailScrollPositions.length-1;}else{for(let i=0;i<thumbnailScrollPositions.length;i++){const startPos=thumbnailScrollPositions[i].scrollStart;let endPos=i<thumbnailScrollPositions.length-1?thumbnailScrollPositions[i+1].scrollStart:startPos;if(i===thumbnailScrollPositions.length-1){endPos=thumbnailScrollPositions[i].end;}if(event.contentOffset.x>=startPos&&event.contentOffset.x<endPos){thumbnails=i+(event.contentOffset.x-startPos)/(endPos-startPos);break;}}}}else{thumbnails=event.contentOffset.x/thumbnailSize;}if(swipeSource.get()==='thumbnails'||Math.abs(Math.round(thumbnails)-thumbnails)<0.01){const index=Math.max(0,Math.min(Math.round(thumbnails),maxIndex));thumbnailsIndex.set(index);}if(thumbnailsAnimateTo.get()>=0){if(thumbnailsIndex.get()===thumbnailsAnimateTo.get()){thumbnailsAnimateTo.set(-1);selectedIndex.set(thumbnailsIndex.get());}return;}const wasTouched=viewerScrolling.get()!==0||thumbnailsScrolling.get()!==0;if(swipeSource.get()==='thumbnails'&&wasTouched&&thumbnailsIndex.get()!==selectedIndex.get()){selectedIndex.set(thumbnailsIndex.get());scheduleOnRN(onSelectedIndexChange);}})",
};
let closure_14 = {
  code: "(function useMediaViewerSyncerTsx4(){let[thumbnailsScrolling,SCROLLING_MOMENTUM,swipeSource]=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('thumbnails');})",
};
let closure_15 = {
  code: "(function useMediaViewerSyncerTsx5(){let[thumbnailsScrolling,SCROLLING_MOMENTUM]=this.__closure;thumbnailsScrolling.set(thumbnailsScrolling.get()&~SCROLLING_MOMENTUM);})",
};
let closure_16 = {
  code: "(function useMediaViewerSyncerTsx6(){let[thumbnailsAnimateTo,variableWidthThumbnailsEnabled,scheduleOnRN,scrollVarWidthThumbnails,scrollTo,ref,thumbnailSize]=this.__closure;if(thumbnailsAnimateTo.get()<0)return;if(variableWidthThumbnailsEnabled){scheduleOnRN(scrollVarWidthThumbnails,thumbnailsAnimateTo.get());}else{scrollTo(ref,thumbnailsAnimateTo.get()*thumbnailSize,0,true);}})",
};
let closure_17 = {
  code: "(function useMediaViewerSyncerTsx7(){let[viewerScrolling,thumbnailsIndex,viewerPos,variableWidthThumbnailsEnabled,scheduleOnRN,lerpScrollVarWidthThumbnails,scrollTo,ref,thumbnailSize]=this.__closure;if(viewerScrolling.get()===0)return;else if(thumbnailsIndex.get()!==viewerPos.get()){if(variableWidthThumbnailsEnabled){scheduleOnRN(lerpScrollVarWidthThumbnails,viewerPos.get());}else{scrollTo(ref,viewerPos.get()*thumbnailSize,0,false);}}})",
};
let closure_18 = {
  code: "(function useMediaViewerSyncerTsx8(){let[thumbnailsScrolling,interpolate,viewerPos,interpolateInput,interpolateOutput]=this.__closure;return thumbnailsScrolling.get()>0?0:-interpolate(viewerPos.get(),interpolateInput,interpolateOutput,'clamp');})",
};
let closure_19 = {
  code: "(function useMediaViewerSyncerTsx9(){let[viewerScrolling,headerBufferSize,margin,withSpring,Reanimated3DefaultSpringConfig]=this.__closure;return{width:viewerScrolling.get()>0?headerBufferSize+margin.get():withSpring(headerBufferSize+margin.get(),{...Reanimated3DefaultSpringConfig,overshootClamping:true})};})",
};
let closure_20 = {
  code: "(function useMediaViewerSyncerTsx10(){let[viewerScrolling,footerBufferSize,margin,withSpring,Reanimated3DefaultSpringConfig]=this.__closure;return{width:viewerScrolling.get()>0?footerBufferSize+margin.get():withSpring(footerBufferSize+margin.get(),{...Reanimated3DefaultSpringConfig,overshootClamping:true})};})",
};
let closure_21 = {
  code: "(function useMediaViewerSyncerTsx11(){let[interpolate,viewerPos,index]=this.__closure;return interpolate(viewerPos.get(),[index-1,index,index+1],[0.4,1,0.4],'clamp');})",
};
let closure_22 = {
  code: "(function useMediaViewerSyncerTsx13(){let[thumbnailsScrolling,THUMBNAIL_MIN_WIDTH,interpolate,viewerPos,index,sourceWidth]=this.__closure;return thumbnailsScrolling.get()>0?THUMBNAIL_MIN_WIDTH:interpolate(viewerPos.get(),[index-1,index,index+1],[THUMBNAIL_MIN_WIDTH,sourceWidth,THUMBNAIL_MIN_WIDTH],'clamp');})",
};
let closure_23 = {
  code: "(function useMediaViewerSyncerTsx14(){let[viewerScrolling,_width,withSpring,Reanimated3DefaultSpringConfig,THUMBNAIL_HEIGHT,opacity]=this.__closure;return{width:viewerScrolling.get()>0?_width.get():withSpring(_width.get(),{...Reanimated3DefaultSpringConfig,overshootClamping:true}),height:THUMBNAIL_HEIGHT,opacity:opacity.get()};})",
};
let closure_24 = { code: "(function useMediaViewerSyncerTsx15(){let[zoomed]=this.__closure;return!zoomed.get();})" };
let closure_25 = {
  code: "(function useMediaViewerSyncerTsx16(){let[gesturePagerEnabled,thumbnailsAnimateTo,scrollTo,ref,screenWidth]=this.__closure;if(gesturePagerEnabled||thumbnailsAnimateTo.get()===-1)return;scrollTo(ref,thumbnailsAnimateTo.get()*screenWidth,0,false);})",
};
let closure_26 = {
  code: "(function useMediaViewerSyncerTsx17(){let[gesturePagerEnabled,thumbnailsScrolling,viewerScrolling,thumbnailsAnimateTo,scrollTo,ref,thumbnailsIndex,screenWidth]=this.__closure;if(gesturePagerEnabled||thumbnailsScrolling.get()===0||viewerScrolling.get()>0||thumbnailsAnimateTo.get()!==-1)return;scrollTo(ref,thumbnailsIndex.get()*screenWidth,0,false);})",
};
let closure_27 = {
  code: "(function useMediaViewerSyncerTsx18(){let[selectedIndex]=this.__closure;return selectedIndex.get();})",
};
let closure_28 = {
  code: "(function useMediaViewerSyncerTsx19(index){let[pagerIndex]=this.__closure;return pagerIndex.set(index);})",
};
let closure_29 = {
  code: "(function useMediaViewerSyncerTsx20(){let[thumbnailsAnimateTo]=this.__closure;return thumbnailsAnimateTo.get();})",
};
let closure_30 = {
  code: "(function useMediaViewerSyncerTsx21(target,previous){let[pagerIndex]=this.__closure;if(previous!==null&&target!==-1)pagerIndex.set(target);})",
};
let closure_31 = {
  code: "(function useMediaViewerSyncerTsx22(){let[viewerScrolling,SCROLLING_DRAG,swipeSource,gesturePagerEnabled,thumbnailsAnimateTo]=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_DRAG);swipeSource.set('viewer');if(gesturePagerEnabled)thumbnailsAnimateTo.set(-1);})",
};
let closure_32 = {
  code: "(function useMediaViewerSyncerTsx23(){let[viewerScrolling,SCROLLING_DRAG]=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_DRAG);})",
};
let closure_33 = {
  code: "(function useMediaViewerSyncerTsx24(offsetX){let[viewerPos,screenWidth,swipeSource,resolveSelectedIndex,maxIndex,gesturePagerEnabled,pagerIndex,selectedIndex,scheduleOnRN,onSelectedIndexChange]=this.__closure;viewerPos.set(offsetX/screenWidth);if(swipeSource.get()!=='viewer')return;const nearest=resolveSelectedIndex({offsetX:offsetX,pageSize:screenWidth,maxIndex:maxIndex});if(nearest==null)return;if(gesturePagerEnabled)pagerIndex.set(nearest);if(selectedIndex.get()===nearest)return;selectedIndex.set(nearest);scheduleOnRN(onSelectedIndexChange);})",
};
let closure_34 = {
  code: "(function useMediaViewerSyncerTsx25(){let[viewerScrolling,SCROLLING_MOMENTUM,swipeSource]=this.__closure;viewerScrolling.set(viewerScrolling.get()|SCROLLING_MOMENTUM);swipeSource.set('viewer');})",
};
let closure_35 = {
  code: "(function useMediaViewerSyncerTsx26(){let[viewerScrolling,SCROLLING_MOMENTUM]=this.__closure;viewerScrolling.set(viewerScrolling.get()&~SCROLLING_MOMENTUM);})",
};
let closure_36 = {
  code: "(function isSpuriousContentSizeReset_useMediaViewerSyncerTsx27(offsetX){let[IS_ANDROID,contentSizeLastChangedAt,selectedIndex]=this.__closure;return IS_ANDROID&&Date.now()-contentSizeLastChangedAt.get()<500&&offsetX===0&&selectedIndex.get()!==0;})",
};
let closure_37 = {
  code: "(function useMediaViewerSyncerTsx28(event){let[onScrollWorklets]=this.__closure;onScrollWorklets.onEndDrag();onScrollWorklets.onScroll(event.contentOffset.x);})",
};
let closure_38 = {
  code: "(function useMediaViewerSyncerTsx29(event){let[isSpuriousContentSizeReset,scrollTo,ref,selectedIndex,screenWidth,viewerScrolling,thumbnailsScrolling,thumbnailsAnimateTo,onScrollWorklets]=this.__closure;if(isSpuriousContentSizeReset(event.contentOffset.x)){scrollTo(ref,selectedIndex.get()*screenWidth,event.contentOffset.y,false);return;}if(viewerScrolling.get()===0&&thumbnailsScrolling.get()===0&&thumbnailsAnimateTo.get()===-1)return;onScrollWorklets.onScroll(event.contentOffset.x);})",
};
let closure_39 = {
  code: "(function useMediaViewerSyncerTsx30(event){let[isSpuriousContentSizeReset,onScrollWorklets]=this.__closure;if(!isSpuriousContentSizeReset(event.contentOffset.x)){onScrollWorklets.onScroll(event.contentOffset.x);}onScrollWorklets.onMomentumEnd();})",
};
let closure_40 = {
  code: "(function useMediaViewerSyncerTsx31(){let[index,selectedIndex]=this.__closure;return index===selectedIndex.get();})",
};
let closure_41 = {
  code: "(function useMediaViewerSyncerTsx32(result,previous){let[scheduleOnRN,setVisible]=this.__closure;if(previous==null||previous===result)return;scheduleOnRN(setVisible,result);})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useMediaViewerSyncer.tsx");

export function useMediaViewerSyncer(sources) {
  sources = sources.sources;
  const initialIndex = sources.initialIndex;
  const onEndReached = sources.onEndReached;
  const onEndReachedThreshold = sources.onEndReachedThreshold;
  let memo;
  items = [initialIndex];
  memo = memo.useMemo(() => {
    const obj = {
      selectedIndex: _mod1652.makeMutable(initialIndex),
      thumbnailsIndex: null,
      thumbnailsScrolling: null,
      thumbnailsAnimateTo: null,
      viewerPos: null,
      viewerScrolling: null,
      zoomed: null,
      swipeSource: null,
    };
    obj.thumbnailsIndex = _mod1652.makeMutable(initialIndex);
    obj.thumbnailsScrolling = _mod1652.makeMutable(0);
    obj.thumbnailsAnimateTo = _mod1652.makeMutable(-1);
    obj.viewerPos = _mod1652.makeMutable(initialIndex);
    obj.viewerScrolling = _mod1652.makeMutable(0);
    obj.zoomed = _mod1652.makeMutable(false);
    obj.swipeSource = _mod1652.makeMutable(undefined);
    return obj;
  }, items);
  let items1 = [sources, memo, onEndReached, onEndReachedThreshold];
  return memo.useMemo(() => {
    items = [];
    let num = 0;
    let num2 = 0;
    if (0 < sources.length) {
      do {
        let obj = MediaSourceUtil;
        let size = obj.flattenSource(sources[num]);
        if (null != size) {
          let _Math = Math;
          let _Math2 = Math;
          let sum =
            num2 +
            (Math.max(Math.min(size.width * (timestampProducer / size.height), metroImportDefault), React5) +
              2 * hasOwnProperty);
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
        MediaViewerAnalytics.markActionPerformed(
          sources(onEndReached[4]).IncrementableMediaViewerActions.THUMBNAIL_SWIPE,
        );
      } else if ("viewer" === swipeSource.get()) {
        const MediaViewerAnalytics3 = sources(onEndReached[4]).MediaViewerAnalytics;
        MediaViewerAnalytics3.markActionPerformed(
          sources(onEndReached[4]).IncrementableMediaViewerActions.VIEWER_SWIPE,
        );
      }
      const MediaViewerAnalytics2 = sources(onEndReached[4]).MediaViewerAnalytics;
      MediaViewerAnalytics2.markActionPerformed(
        sources(onEndReached[4]).IncrementableMediaViewerActions.SELECTED_ITEM_CHANGE,
      );
    }
    let selectedIndex = memo.selectedIndex;
    ({
      thumbnailsIndex: onEndReachedThreshold,
      thumbnailsScrolling: memo,
      thumbnailsAnimateTo: closure_5,
      viewerPos: closure_6,
      viewerScrolling: closure_7,
      zoomed,
    } = memo);
    const swipeSource = memo.swipeSource;
    c11 = false;
    if (items.length > 0) {
      let end = items[0].end;
      const start = items[0].start;
    }
    return {
      index: selectedIndex,
      sources,
      zoomed,
      thumbnailScrollPositions: items,
      variableWidthThumbnailsEnabled: false,
      useThumbnailsProps(useThumbnailStyle, arg1) {
        const animatedRef = arr(selectedIndex[5]).useAnimatedRef();
        let obj = arr(selectedIndex[5]);
        let size = arr(selectedIndex[6]).useMediaViewerDimensions();
        let width = size.width;
        const rect = items(selectedIndex[7])();
        const obj2 = arr(selectedIndex[6]);
        items = [c11, c4, 2, c9];
        c2 = undefined;
        [tmp6, tmp7, tmp8, tmp9] = items;
        const obj4 = { onBeginDrag: null, onEndDrag: null, onScroll: null, onMomentumBegin: null, onMomentumEnd: null };
        function useMediaViewerSyncerTsx1() {
          const result = _undefined.set(_undefined.get() | c1);
          const result1 = _undefined3.set("thumbnails");
        }
        let items1 = [tmp7, tmp8, tmp9];
        useMediaViewerSyncerTsx1.__closure = items1;
        useMediaViewerSyncerTsx1.__workletHash = 3578295959116;
        useMediaViewerSyncerTsx1.__initData = tmp6;
        obj4.onBeginDrag = useMediaViewerSyncerTsx1;
        let items2 = [closure_1_12, c4, 2];
        c1 = undefined;
        [tmp10, tmp11, tmp12] = items2;
        function useMediaViewerSyncerTsx2() {
          const result = _undefined.set(_undefined.get() & ~c1);
        }
        let items3 = [tmp11, tmp12];
        useMediaViewerSyncerTsx2.__closure = items3;
        useMediaViewerSyncerTsx2.__workletHash = 5863096789454;
        useMediaViewerSyncerTsx2.__initData = tmp10;
        obj4.onEndDrag = useMediaViewerSyncerTsx2;
        let items4 = [
          closure_1_13,
          c11,
          c1,
          useThumbnailStyle,
          c9,
          arg1,
          c3,
          c5,
          c2,
          c7,
          c4,
          arr(selectedIndex[8]).scheduleOnRN,
          c10,
        ];
        c3 = undefined;
        c4 = undefined;
        c5 = undefined;
        c7 = undefined;
        c9 = undefined;
        c10 = undefined;
        c11 = undefined;
        [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items4;
        function useMediaViewerSyncerTsx3(contentOffset) {
          let end;
          let scrollStart;
          const x = contentOffset.contentOffset.x;
          if (c0) {
            let num = 0;
            if (x >= 0) {
              if (contentOffset.contentOffset.x >= _undefined2[_undefined2.length - 1].end) {
                num = _undefined2.length - 1;
              } else {
                let num4 = 0;
                num = 0;
                if (0 < _undefined2.length) {
                  while (true) {
                    scrollStart = _undefined2[num4].scrollStart;
                    end = scrollStart;
                    if (num4 < _undefined2.length - 1) {
                      end = _undefined2[num4 + 1].scrollStart;
                    }
                    if (num4 === _undefined2.length - 1) {
                      end = _undefined2[num4].end;
                    }
                    if (contentOffset.contentOffset.x >= scrollStart) {
                      if (contentOffset.contentOffset.x < end) {
                        break;
                      }
                    }
                    let sum = num4 + 1;
                    num4 = sum;
                    num = 0;
                  }
                  num = num4 + (contentOffset.contentOffset.x - scrollStart) / (end - scrollStart);
                }
              }
            }
          } else {
            num = x / c2;
          }
          if ("thumbnails" === _undefined4.get()) {
            const _Math3 = Math;
            const _Math4 = Math;
            const _Math5 = Math;
            const result = _undefined6.set(Math.max(0, Math.min(Math.round(num), c4)));
          } else {
            const _Math = Math;
            const _Math2 = Math;
          }
          if (_undefined7.get() >= 0) {
            value = _undefined6.get();
            if (value === _undefined7.get()) {
              const result1 = _undefined7.set(-1);
              const result2 = _undefined8.set(_undefined6.get());
            }
          } else {
            let tmp10 = 0 !== _undefined9.get();
            if (!tmp10) {
              tmp10 = 0 !== _undefined10.get();
            }
            let tmp11 = "thumbnails" === _undefined4.get() && tmp10;
            if (tmp11) {
              value2 = _undefined6.get();
              tmp11 = value2 !== _undefined8.get();
            }
            if (tmp11) {
              const result3 = _undefined8.set(_undefined6.get());
              _undefined11(c11);
            }
          }
        }
        let items5 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
        useMediaViewerSyncerTsx3.__closure = items5;
        useMediaViewerSyncerTsx3.__workletHash = 9053422816345;
        useMediaViewerSyncerTsx3.__initData = tmp18;
        obj4.onScroll = useMediaViewerSyncerTsx3;
        const items6 = [closure_1_14, c4, 4, c9];
        [tmp31, tmp32, tmp33, tmp34] = items6;
        function useMediaViewerSyncerTsx4() {
          const result = _undefined.set(_undefined.get() | c1);
          const result1 = _undefined3.set("thumbnails");
        }
        const items7 = [tmp32, tmp33, tmp34];
        useMediaViewerSyncerTsx4.__closure = items7;
        useMediaViewerSyncerTsx4.__workletHash = 5839468219817;
        useMediaViewerSyncerTsx4.__initData = tmp31;
        obj4.onMomentumBegin = useMediaViewerSyncerTsx4;
        const items8 = [closure_1_15, c4, 4];
        [tmp35, tmp36, tmp37] = items8;
        function useMediaViewerSyncerTsx5() {
          const result = _undefined.set(_undefined.get() & ~c1);
        }
        const items9 = [tmp36, tmp37];
        useMediaViewerSyncerTsx5.__closure = items9;
        useMediaViewerSyncerTsx5.__workletHash = 1652224521449;
        useMediaViewerSyncerTsx5.__initData = tmp35;
        obj4.onMomentumEnd = useMediaViewerSyncerTsx5;
        const obj3 = arr(selectedIndex[5]);
        const tmp15 = c3;
        const tmp16 = c5;
        const items10 = [animatedRef];
        const callback = React.useCallback((arg0) => {
          if (!_undefined9.get()) {
            const result = _undefined6.set(arg0);
            const result1 = _undefined10.set("thumbnails");
          }
        }, []);
        const callback1 = React.useCallback((arg0) => {
          sources(onEndReached[5]).scrollTo(c0, items[arg0].scrollStart, 0, true);
        }, items10);
        const animatedScrollHandler = arr(selectedIndex[5]).useAnimatedScrollHandler(obj4);
        const items11 = [
          closure_1_16,
          tmp16,
          c11,
          arr(selectedIndex[8]).scheduleOnRN,
          callback1,
          arr(selectedIndex[5]).scrollTo,
          animatedRef,
          useThumbnailStyle,
        ];
        c6 = undefined;
        [tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48] = items11;
        function useMediaViewerSyncerTsx6() {
          if (_undefined.get() >= 0) {
            if (c1) {
              _undefined3(c3, _undefined.get());
            } else {
              _undefined5(c5, _undefined.get() * c6, 0, true);
            }
          }
        }
        const items12 = [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48];
        useMediaViewerSyncerTsx6.__closure = items12;
        useMediaViewerSyncerTsx6.__workletHash = 15708245169556;
        useMediaViewerSyncerTsx6.__initData = tmp41;
        let derivedValue = arr(selectedIndex[5]).useDerivedValue(useMediaViewerSyncerTsx6);
        const items13 = [animatedRef];
        const callback2 = React.useCallback((result1) => {
          const result = sources(onEndReached[9]).lerpVarWidthThumbnailScrollBounds(items, result1);
          const obj = sources(onEndReached[9]);
          sources(onEndReached[5]).scrollTo(c0, result, 0, false);
        }, items13);
        let tmpResult = arr(selectedIndex[5]);
        const items14 = [
          closure_1_17,
          c7,
          tmp15,
          c6,
          c11,
          arr(selectedIndex[8]).scheduleOnRN,
          callback2,
          arr(selectedIndex[5]).scrollTo,
          animatedRef,
          useThumbnailStyle,
        ];
        sources = undefined;
        c4 = undefined;
        c5 = undefined;
        c6 = undefined;
        c7 = undefined;
        c8 = undefined;
        [tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61] = items14;
        function useMediaViewerSyncerTsx7() {
          let tmp = 0 !== _undefined.get();
          if (tmp) {
            value = _undefined2.get();
            tmp = value !== _undefined3.get();
          }
          if (tmp) {
            if (c3) {
              _undefined5(c5, _undefined3.get());
            } else {
              _undefined7(c7, _undefined3.get() * c8, 0, false);
            }
          }
        }
        const items15 = [tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61];
        useMediaViewerSyncerTsx7.__closure = items15;
        useMediaViewerSyncerTsx7.__workletHash = 12994437734345;
        useMediaViewerSyncerTsx7.__initData = tmp52;
        let derivedValue1 = arr(selectedIndex[5]).useDerivedValue(useMediaViewerSyncerTsx7);
        const mapped = sources.map((item, index) => index);
        const mapped1 = sources.map((item) => {
          const size = _undefined(_undefined3[10]).flattenSource(item);
          let num = 0;
          if (null != size) {
            const _Math = Math;
            const _Math2 = Math;
            num = (Math.max(Math.min(size.width * (c6 / size.height), c7), c8) - c8) / 2;
          }
          return num;
        });
        const tmp51 = c6;
        const tmpResult6 = arr(selectedIndex[5]);
        const items16 = [closure_1_18, c4, arr(selectedIndex[5]).interpolate, tmp51, mapped, mapped1];
        [tmp65, tmp66, tmp67, tmp68, tmp69, tmp70] = items16;
        function useMediaViewerSyncerTsx8() {
          let num = 0;
          if (_undefined.get() <= 0) {
            num = -_undefined2(_undefined3.get(), c3, c4, "clamp");
          }
          return num;
        }
        const items17 = [tmp66, tmp67, tmp68, tmp69, tmp70];
        useMediaViewerSyncerTsx8.__closure = items17;
        useMediaViewerSyncerTsx8.__workletHash = 12401398180532;
        useMediaViewerSyncerTsx8.__initData = tmp65;
        const derivedValue2 = arr(selectedIndex[5]).useDerivedValue(useMediaViewerSyncerTsx8);
        const diff = (width - useThumbnailStyle) / 2 - rect.left;
        const tmpResult7 = arr(selectedIndex[5]);
        const items18 = [
          closure_1_19,
          c7,
          diff,
          derivedValue2,
          arr(selectedIndex[11]).withSpring,
          arr(selectedIndex[12]).Reanimated3DefaultSpringConfig,
        ];
        [tmp73, tmp74, tmp75, tmp76, tmp77, tmp78] = items18;
        function useMediaViewerSyncerTsx9() {
          if (_undefined.get() > 0) {
            let width = c1 + _undefined3.get();
          } else {
            const obj = {};
            const sum1 = c1 + _undefined3.get();
            const merged = Object.assign(c4);
            obj.overshootClamping = true;
            width = _undefined4(sum1, obj);
          }
          return { width };
        }
        const items19 = [tmp74, tmp75, tmp76, tmp77, tmp78];
        useMediaViewerSyncerTsx9.__closure = items19;
        useMediaViewerSyncerTsx9.__workletHash = 4710683641318;
        useMediaViewerSyncerTsx9.__initData = tmp73;
        const diff1 = (width - useThumbnailStyle) / 2 - rect.right;
        const animatedStyle = arr(selectedIndex[5]).useAnimatedStyle(useMediaViewerSyncerTsx9);
        const tmpResult8 = arr(selectedIndex[5]);
        const items20 = [
          closure_1_20,
          c7,
          diff1,
          derivedValue2,
          arr(selectedIndex[11]).withSpring,
          arr(selectedIndex[12]).Reanimated3DefaultSpringConfig,
        ];
        c1 = undefined;
        c2 = undefined;
        c3 = undefined;
        c4 = undefined;
        [tmp81, tmp82, tmp83, tmp84, tmp85, tmp86] = items20;
        function useMediaViewerSyncerTsx10() {
          if (_undefined.get() > 0) {
            let width = c1 + _undefined3.get();
          } else {
            const obj = {};
            const sum1 = c1 + _undefined3.get();
            const merged = Object.assign(c4);
            obj.overshootClamping = true;
            width = _undefined4(sum1, obj);
          }
          return { width };
        }
        const items21 = [tmp82, tmp83, tmp84, tmp85, tmp86];
        useMediaViewerSyncerTsx10.__closure = items21;
        useMediaViewerSyncerTsx10.__workletHash = 411530805476;
        useMediaViewerSyncerTsx10.__initData = tmp81;
        const animatedStyle1 = arr(selectedIndex[5]).useAnimatedStyle(useMediaViewerSyncerTsx10);
        const callback3 = React.useCallback((width, arg1) => {
          items = [closure_2_21, arr(selectedIndex[5]).interpolate, c6, arg1];
          [tmp4, tmp5, tmp6, tmp7] = items;
          function useMediaViewerSyncerTsx11() {
            items = [c2 - 1, c2, c2 + 1];
            return _undefined(_undefined2.get(), items, [0.4, 1, 0.4], "clamp");
          }
          let items1 = [tmp5, tmp6, tmp7];
          useMediaViewerSyncerTsx11.__closure = items1;
          useMediaViewerSyncerTsx11.__workletHash = 11429815859380;
          useMediaViewerSyncerTsx11.__initData = tmp4;
          const derivedValue = arr(selectedIndex[5]).useDerivedValue(useMediaViewerSyncerTsx11);
          const bound = Math.max(Math.min(width.width * (closure_2_6 / width.height), closure_2_7), zoomed);
          let obj = arr(selectedIndex[5]);
          const items2 = [closure_2_22, c4, zoomed, arr(selectedIndex[5]).interpolate, c6, arg1, bound];
          [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
          function useMediaViewerSyncerTsx13() {
            if (_undefined.get() > 0) {
              let tmp8 = c1;
            } else {
              items = [c4 - 1, c4, c4 + 1];
              const items1 = [c1, c5, c1];
              tmp8 = _undefined3(_undefined4.get(), items, items1, "clamp");
            }
            return tmp8;
          }
          const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
          useMediaViewerSyncerTsx13.__closure = items3;
          useMediaViewerSyncerTsx13.__workletHash = 8664414579897;
          useMediaViewerSyncerTsx13.__initData = tmp11;
          const derivedValue1 = arr(selectedIndex[5]).useDerivedValue(useMediaViewerSyncerTsx13);
          const tmpResult = arr(selectedIndex[5]);
          const items4 = [
            closure_2_23,
            c7,
            derivedValue1,
            arr(selectedIndex[11]).withSpring,
            arr(selectedIndex[12]).Reanimated3DefaultSpringConfig,
            closure_2_6,
            derivedValue,
          ];
          c0 = undefined;
          c1 = undefined;
          c2 = undefined;
          c3 = undefined;
          c4 = undefined;
          c5 = undefined;
          [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items4;
          function useMediaViewerSyncerTsx14() {
            if (_undefined.get() > 0) {
              value = _undefined2.get();
            } else {
              const obj = {};
              value2 = _undefined2.get();
              const merged = Object.assign(c3);
              obj.overshootClamping = true;
              value = _undefined3(value2, obj);
            }
            const size = { width: value, height, opacity: _undefined5.get() };
            return size;
          }
          const items5 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
          useMediaViewerSyncerTsx14.__closure = items5;
          useMediaViewerSyncerTsx14.__workletHash = 17583136742612;
          useMediaViewerSyncerTsx14.__initData = tmp19;
          return arr(selectedIndex[5]).useAnimatedStyle(useMediaViewerSyncerTsx14);
        }, []);
        const tmpResult9 = arr(selectedIndex[5]);
        const items22 = [closure_1_24, c8];
        sources = undefined;
        [tmp89, tmp90] = items22;
        function useMediaViewerSyncerTsx15() {
          return !_undefined.get();
        }
        const items23 = [tmp90];
        useMediaViewerSyncerTsx15.__closure = items23;
        useMediaViewerSyncerTsx15.__workletHash = 2105233452792;
        useMediaViewerSyncerTsx15.__initData = tmp89;
        const tmpResult10 = arr(selectedIndex[5]);
        return {
          ref: animatedRef,
          headerBufferStyle: animatedStyle,
          headerBufferSize: diff,
          footerBufferStyle: animatedStyle1,
          footerBufferSize: diff1,
          scrollEnabled: arr(selectedIndex[5]).useDerivedValue(useMediaViewerSyncerTsx15),
          onScroll: animatedScrollHandler,
          onSelect: callback,
          useThumbnailStyle: callback3,
          screenWidth: width,
          screenHeight: size.height,
          itemSize(arg0, arg1) {
            return c9;
          },
        };
      },
      useViewerProps() {
        let flag = isMediaViewerImprovementsEnabled;
        if (isMediaViewerImprovementsEnabled === undefined) {
          flag = false;
        }
        selectedIndex = undefined;
        c5 = undefined;
        const animatedRef = arr(selectedIndex[5]).useAnimatedRef();
        let obj = arr(selectedIndex[5]);
        const size = arr(selectedIndex[6]).useMediaViewerDimensions();
        const width = size.width;
        selectedIndex = width;
        const obj2 = arr(selectedIndex[6]);
        items = [closure_1_25, flag, c5, arr(selectedIndex[5]).scrollTo, animatedRef, width];
        selectedIndex = undefined;
        c3 = undefined;
        c4 = undefined;
        [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
        function useMediaViewerSyncerTsx16() {
          let tmp = c0;
          if (!c0) {
            tmp = -1 === _undefined2.get();
          }
          if (!tmp) {
            _undefined3(c3, _undefined2.get() * c4, 0, false);
          }
        }
        let items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
        useMediaViewerSyncerTsx16.__closure = items1;
        useMediaViewerSyncerTsx16.__workletHash = 6573013391362;
        useMediaViewerSyncerTsx16.__initData = tmp5;
        const derivedValue = arr(selectedIndex[5]).useDerivedValue(useMediaViewerSyncerTsx16);
        const obj3 = arr(selectedIndex[5]);
        let items2 = [closure_1_26, flag, c4, c7, c5, arr(selectedIndex[5]).scrollTo, animatedRef, c3, width];
        selectedIndex = undefined;
        c4 = undefined;
        c5 = undefined;
        c7 = undefined;
        [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items2;
        function useMediaViewerSyncerTsx17() {
          let tmp = c0;
          if (!c0) {
            tmp = 0 === _undefined2.get();
          }
          if (!tmp) {
            tmp = _undefined3.get() > 0;
          }
          if (!tmp) {
            tmp = -1 !== _undefined4.get();
          }
          if (!tmp) {
            _undefined5(c5, _undefined7.get() * c7, 0, false);
          }
        }
        let items3 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22];
        useMediaViewerSyncerTsx17.__closure = items3;
        useMediaViewerSyncerTsx17.__workletHash = 2187986676335;
        useMediaViewerSyncerTsx17.__initData = tmp14;
        const derivedValue1 = arr(selectedIndex[5]).useDerivedValue(useMediaViewerSyncerTsx17);
        const tmp12 = c4;
        const tmp13 = c7;
        const tmpResult = arr(selectedIndex[5]);
        const sharedValue = arr(selectedIndex[5]).useSharedValue(selectedIndex.get());
        const tmpResult6 = arr(selectedIndex[5]);
        let items4 = [closure_1_27, selectedIndex];
        [tmp26, tmp27] = items4;
        function useMediaViewerSyncerTsx18() {
          return _undefined.get();
        }
        let items5 = [tmp27];
        useMediaViewerSyncerTsx18.__closure = items5;
        useMediaViewerSyncerTsx18.__workletHash = 1549933561716;
        useMediaViewerSyncerTsx18.__initData = tmp26;
        let items6 = [closure_1_28, sharedValue];
        [tmp28, tmp29] = items6;
        function useMediaViewerSyncerTsx19(arg0) {
          return _undefined.set(arg0);
        }
        let items7 = [tmp29];
        useMediaViewerSyncerTsx19.__closure = items7;
        useMediaViewerSyncerTsx19.__workletHash = 15115490811137;
        useMediaViewerSyncerTsx19.__initData = tmp28;
        let animatedReaction = arr(selectedIndex[5]).useAnimatedReaction(
          useMediaViewerSyncerTsx18,
          useMediaViewerSyncerTsx19,
        );
        const tmpResult7 = arr(selectedIndex[5]);
        let items8 = [closure_1_29, c5];
        [tmp31, tmp32] = items8;
        function useMediaViewerSyncerTsx20() {
          return _undefined.get();
        }
        let items9 = [tmp32];
        useMediaViewerSyncerTsx20.__closure = items9;
        useMediaViewerSyncerTsx20.__workletHash = 8312319312479;
        useMediaViewerSyncerTsx20.__initData = tmp31;
        const items10 = [closure_1_30, sharedValue];
        sources = undefined;
        [tmp33, tmp34] = items10;
        function useMediaViewerSyncerTsx21(arg0, arg1) {
          let tmp = null !== arg1;
          if (tmp) {
            tmp = -1 !== arg0;
          }
          if (tmp) {
            const result = _undefined.set(arg0);
          }
        }
        const items11 = [tmp34];
        useMediaViewerSyncerTsx21.__closure = items11;
        useMediaViewerSyncerTsx21.__workletHash = 13508749823092;
        useMediaViewerSyncerTsx21.__initData = tmp33;
        const animatedReaction1 = arr(selectedIndex[5]).useAnimatedReaction(
          useMediaViewerSyncerTsx20,
          useMediaViewerSyncerTsx21,
        );
        const diff = sources.length - 1;
        const items12 = [flag, diff, sharedValue, width];
        memo = React.useMemo(() => {
          items = [closure_3_31, closure_2_7, 2, swipeSource, c0, closure_2_5];
          [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
          let obj = { onBeginDrag: null, onEndDrag: null, onScroll: null, onMomentumBegin: null, onMomentumEnd: null };
          function useMediaViewerSyncerTsx22() {
            const result = _undefined.set(_undefined.get() | c1);
            const result1 = _undefined2.set("viewer");
            if (c3) {
              const result2 = maxIndex.set(-1);
            }
          }
          const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9];
          useMediaViewerSyncerTsx22.__closure = items1;
          useMediaViewerSyncerTsx22.__workletHash = 3795573056345;
          useMediaViewerSyncerTsx22.__initData = tmp4;
          obj.onBeginDrag = useMediaViewerSyncerTsx22;
          const items2 = [closure_3_32, closure_2_7, 2];
          c0 = undefined;
          [tmp10, tmp11, tmp12] = items2;
          function useMediaViewerSyncerTsx23() {
            const result = _undefined.set(_undefined.get() & ~c1);
          }
          const items3 = [tmp11, tmp12];
          useMediaViewerSyncerTsx23.__closure = items3;
          useMediaViewerSyncerTsx23.__workletHash = 15194033235480;
          useMediaViewerSyncerTsx23.__initData = tmp10;
          obj.onEndDrag = useMediaViewerSyncerTsx23;
          const items4 = [
            closure_3_33,
            closure_2_6,
            c2,
            swipeSource,
            sources(onEndReached[13]).resolveSelectedIndex,
            c4,
            c0,
            c3,
            selectedIndex,
            sources(onEndReached[8]).scheduleOnRN,
            onSelectedIndexChange,
          ];
          c3 = undefined;
          c4 = undefined;
          c5 = undefined;
          c6 = undefined;
          c7 = undefined;
          c8 = undefined;
          c9 = undefined;
          [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items4;
          function useMediaViewerSyncerTsx24(offsetX) {
            const result = _undefined.set(offsetX / pageSize);
            if ("viewer" === _undefined2.get()) {
              const obj = { offsetX, pageSize, maxIndex };
              const tmp5 = _undefined3(obj);
              if (null != tmp5) {
                if (c5) {
                  const result1 = _undefined4.set(tmp5);
                }
                if (_undefined5.get() !== tmp5) {
                  const result2 = _undefined5.set(tmp5);
                  _undefined6(c9);
                }
              }
            }
          }
          const items5 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
          useMediaViewerSyncerTsx24.__closure = items5;
          useMediaViewerSyncerTsx24.__workletHash = 5987632270997;
          useMediaViewerSyncerTsx24.__initData = tmp13;
          obj.onScroll = useMediaViewerSyncerTsx24;
          const items6 = [closure_3_34, closure_2_7, 4, swipeSource];
          c2 = undefined;
          [tmp24, tmp25, tmp26, tmp27] = items6;
          function useMediaViewerSyncerTsx25() {
            const result = _undefined.set(_undefined.get() | c1);
            const result1 = _undefined2.set("viewer");
          }
          const items7 = [tmp25, tmp26, tmp27];
          useMediaViewerSyncerTsx25.__closure = items7;
          useMediaViewerSyncerTsx25.__workletHash = 1223666194298;
          useMediaViewerSyncerTsx25.__initData = tmp24;
          obj.onMomentumBegin = useMediaViewerSyncerTsx25;
          const items8 = [closure_3_35, closure_2_7, 4];
          c0 = undefined;
          c1 = undefined;
          [tmp28, tmp29, tmp30] = items8;
          function useMediaViewerSyncerTsx26() {
            const result = _undefined.set(_undefined.get() & ~c1);
          }
          const items9 = [tmp29, tmp30];
          useMediaViewerSyncerTsx26.__closure = items9;
          useMediaViewerSyncerTsx26.__workletHash = 10664405077789;
          useMediaViewerSyncerTsx26.__initData = tmp28;
          obj.onMomentumEnd = useMediaViewerSyncerTsx26;
          return obj;
        }, items12);
        const tmpResult8 = arr(selectedIndex[5]);
        const sharedValue1 = arr(selectedIndex[5]).useSharedValue(0);
        c5 = sharedValue1;
        const items13 = [closure_1_36, onSelectedIndexChange, sharedValue1, selectedIndex];
        selectedIndex = undefined;
        [tmp39, tmp40, tmp41, tmp42] = items13;
        function isSpuriousContentSizeReset(arg0) {
          let tmp = c0;
          if (c0) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp = timestamp - _undefined2.get() < 500;
          }
          if (tmp) {
            tmp = 0 === arg0;
          }
          if (tmp) {
            tmp = 0 !== _undefined3.get();
          }
          return tmp;
        }
        const items14 = [tmp40, tmp41, tmp42];
        isSpuriousContentSizeReset.__closure = items14;
        isSpuriousContentSizeReset.__workletHash = 11879649291948;
        isSpuriousContentSizeReset.__initData = tmp39;
        const tmpResult9 = arr(selectedIndex[5]);
        const obj4 = {
          onBeginDrag: memo.onBeginDrag,
          onEndDrag: null,
          onScroll: null,
          onMomentumBegin: null,
          onMomentumEnd: null,
        };
        const items15 = [closure_1_37, memo];
        [tmp43, tmp44] = items15;
        function useMediaViewerSyncerTsx28(contentOffset) {
          _undefined.onEndDrag();
          _undefined.onScroll(contentOffset.contentOffset.x);
        }
        const items16 = [tmp44];
        useMediaViewerSyncerTsx28.__closure = items16;
        useMediaViewerSyncerTsx28.__workletHash = 5917142690034;
        useMediaViewerSyncerTsx28.__initData = tmp43;
        obj4.onEndDrag = useMediaViewerSyncerTsx28;
        const items17 = [
          closure_1_38,
          isSpuriousContentSizeReset,
          arr(selectedIndex[5]).scrollTo,
          animatedRef,
          selectedIndex,
          width,
          tmp13,
          tmp12,
          c5,
          memo,
        ];
        selectedIndex = undefined;
        c3 = undefined;
        c4 = undefined;
        c5 = undefined;
        c6 = undefined;
        c7 = undefined;
        c8 = undefined;
        [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54] = items17;
        function useMediaViewerSyncerTsx29(contentOffset) {
          if (_undefined(contentOffset.contentOffset.x)) {
            _undefined2(c2, _undefined4.get() * c4, contentOffset.contentOffset.y, false);
          } else {
            let tmp2 = 0 === _undefined6.get();
            if (tmp2) {
              tmp2 = 0 === _undefined7.get();
            }
            if (tmp2) {
              tmp2 = -1 === _undefined8.get();
            }
            if (!tmp2) {
              _undefined9.onScroll(contentOffset.contentOffset.x);
            }
          }
        }
        const items18 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54];
        useMediaViewerSyncerTsx29.__closure = items18;
        useMediaViewerSyncerTsx29.__workletHash = 5643521676828;
        useMediaViewerSyncerTsx29.__initData = tmp45;
        obj4.onScroll = useMediaViewerSyncerTsx29;
        obj4.onMomentumBegin = memo.onMomentumBegin;
        const items19 = [closure_1_39, isSpuriousContentSizeReset, memo];
        sources = undefined;
        c1 = undefined;
        [tmp55, tmp56, tmp57] = items19;
        function useMediaViewerSyncerTsx30(contentOffset) {
          if (!_undefined(contentOffset.contentOffset.x)) {
            _undefined2.onScroll(contentOffset.contentOffset.x);
          }
          _undefined2.onMomentumEnd();
        }
        const items20 = [tmp56, tmp57];
        useMediaViewerSyncerTsx30.__closure = items20;
        useMediaViewerSyncerTsx30.__workletHash = 6974344984471;
        useMediaViewerSyncerTsx30.__initData = tmp55;
        obj4.onMomentumEnd = useMediaViewerSyncerTsx30;
        const items21 = [animatedRef, width, sharedValue1];
        const tmpResult10 = arr(selectedIndex[5]);
        const items22 = [width, size.height, animatedRef];
        const callback = React.useCallback(() => {
          const current = _undefined2.current;
          if (current != null) {
            current.scrollTo(tmp, false);
          }
          const result = _undefined6.set(Date.now());
        }, items21);
        const effect = React.useEffect(() => {
          const current = _undefined2.current;
          if (current != null) {
            current.reset();
          }
        }, items22);
        const animatedScrollHandler = arr(selectedIndex[5]).useAnimatedScrollHandler(obj4);
        return {
          ref: animatedRef,
          onScroll: arr(selectedIndex[5]).useAnimatedScrollHandler(obj4),
          onScrollWorklets: memo,
          pagerIndex: sharedValue,
          onContentSizeChange: callback,
          useItemVisible: React.useCallback((arg0) => {
            [tmp2, tmp3] = onEndReachedThreshold(React.useState(arg0 === _undefined3.get()), 2);
            let tmp = onEndReachedThreshold(React.useState(arg0 === _undefined3.get()), 2);
            items = [closure_2_40, arg0, _undefined3];
            [tmp6, tmp7, tmp8] = items;
            function useMediaViewerSyncerTsx31() {
              return c0 === _undefined2.get();
            }
            const items1 = [tmp7, tmp8];
            useMediaViewerSyncerTsx31.__closure = items1;
            useMediaViewerSyncerTsx31.__workletHash = 13896134316430;
            useMediaViewerSyncerTsx31.__initData = tmp6;
            const items2 = [closure_2_41, arr(selectedIndex[8]).scheduleOnRN, tmp3];
            c0 = undefined;
            c1 = undefined;
            [tmp9, tmp10, tmp11] = items2;
            function useMediaViewerSyncerTsx32(arg0, arg1) {
              if (tmp) {
                _undefined(c1, arg0);
              }
              tmp = null != arg1 && arg1 !== arg0;
            }
            const items3 = [tmp10, tmp11];
            useMediaViewerSyncerTsx32.__closure = items3;
            useMediaViewerSyncerTsx32.__workletHash = 13069678655971;
            useMediaViewerSyncerTsx32.__initData = tmp9;
            const animatedReaction = arr(selectedIndex[5]).useAnimatedReaction(
              useMediaViewerSyncerTsx31,
              useMediaViewerSyncerTsx32,
            );
            return tmp2;
          }, []),
        };
      },
      onEndReached,
      onEndReachedThreshold,
    };
  }, items1);
}
