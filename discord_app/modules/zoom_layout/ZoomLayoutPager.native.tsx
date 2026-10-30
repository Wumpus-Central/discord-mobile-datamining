// discord_app/modules/zoom_layout/ZoomLayoutPager.native.tsx
import ReanimatedRexport from "../reanimated/ReanimatedRexport.tsx";
import LegacyBaseButton from "../../../_runtime/05298_LegacyBaseButton.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let __closure = {};
let merged = Object.assign(fn(5633).springStandard);
__closure.stiffness = 100;
__closure.overshootClamping = true;
let __initData = {
  code: "function ZoomLayoutPagerNativeTsx1(){const{cancelAnimation,translateX,dragging,onEndDrag,onMomentumEnd,isPaging}=this.__closure;var _onMomentumEnd;cancelAnimation(translateX);if(dragging.get()){var _onEndDrag;dragging.set(false);(_onEndDrag=onEndDrag)===null||_onEndDrag===void 0||_onEndDrag();}(_onMomentumEnd=onMomentumEnd)===null||_onMomentumEnd===void 0||_onMomentumEnd();isPaging.set(false);}",
};
let closure_9 = {
  code: "function ZoomLayoutPagerNativeTsx2(index,animated=true,velocity=0){const{stopPaging,pageCount,currentPageShared,runOnJS,updateCurrentPage,isPaging,onMomentumBegin,translateX,withSpring,width,SPRING_CONFIG,onScroll,onMomentumEnd}=this.__closure;stopPaging();const page=Math.max(0,Math.min(pageCount-1,index));currentPageShared.set(page);runOnJS(updateCurrentPage)(page);if(animated){var _onMomentumBegin;isPaging.set(true);(_onMomentumBegin=onMomentumBegin)===null||_onMomentumBegin===void 0||_onMomentumBegin();translateX.set(withSpring(-page*width,{...SPRING_CONFIG,velocity:velocity},'respect-motion-settings',function(finished){var _onScroll,_onMomentumEnd;if(!finished)return;(_onScroll=onScroll)===null||_onScroll===void 0||_onScroll(page*width);isPaging.set(false);(_onMomentumEnd=onMomentumEnd)===null||_onMomentumEnd===void 0||_onMomentumEnd();}));}else{var _onScroll2;translateX.set(-page*width);(_onScroll2=onScroll)===null||_onScroll2===void 0||_onScroll2(page*width);}}",
};
let closure_10 = {
  code: "function ZoomLayoutPagerNativeTsx3(finished){const{onScroll,page,width,isPaging,onMomentumEnd}=this.__closure;var _onScroll,_onMomentumEnd;if(!finished)return;(_onScroll=onScroll)===null||_onScroll===void 0||_onScroll(page*width);isPaging.set(false);(_onMomentumEnd=onMomentumEnd)===null||_onMomentumEnd===void 0||_onMomentumEnd();}",
};
let closure_11 = {
  code: "function ZoomLayoutPagerNativeTsx4(){const{dragging,goToPage,translateX,width}=this.__closure;if(dragging.get())goToPage(Math.round(-translateX.get()/width));}",
};
let closure_12 = {
  code: "function ZoomLayoutPagerNativeTsx5(event,success){const{translateX,savedTranslateX,width,pageChangeVelocityThreshold,pageChangePositionThreshold,goToPage}=this.__closure;const distance=translateX.get()-savedTranslateX.get();const startPage=Math.round(-savedTranslateX.get()/width);let page=Math.round(-translateX.get()/width);if(success&&Math.abs(event.velocityX)>pageChangeVelocityThreshold){const forward=event.velocityX<0;const reversed=forward?distance>0:distance<0;page=reversed?startPage:startPage+(forward?1:-1);}else if(success&&Math.abs(distance)>pageChangePositionThreshold*width){page=startPage+(distance<0?1:-1);}goToPage(page,true,success?event.velocityX:0);}",
};
let closure_13 = {
  code: "function ZoomLayoutPagerNativeTsx6(event){const{savedTranslateX,pageCount,width,translateX}=this.__closure;let position=savedTranslateX.get()+event.translationX;const minimum=-Math.max(0,pageCount-1)*width;if(position>0)position*=0.3;else if(position<minimum)position=minimum+(position-minimum)*0.3;translateX.set(position);}",
};
let closure_14 = {
  code: "function ZoomLayoutPagerNativeTsx7(){const{stopPaging,savedTranslateX,translateX,dragging,isPaging,onBeginDrag}=this.__closure;var _onBeginDrag;stopPaging();savedTranslateX.set(translateX.get());dragging.set(true);isPaging.set(true);(_onBeginDrag=onBeginDrag)===null||_onBeginDrag===void 0||_onBeginDrag();}",
};
let closure_15 = {
  code: "function ZoomLayoutPagerNativeTsx8(_,manager){const{gestureEnabled}=this.__closure;if(!gestureEnabled.get())manager.fail();}",
};
let closure_16 = {
  code: "function ZoomLayoutPagerNativeTsx9(){const{translateX}=this.__closure;return translateX.get();}",
};
let closure_17 = {
  code: "function ZoomLayoutPagerNativeTsx10(position){const{isPaging,onScroll}=this.__closure;var _onScroll;if(isPaging.get())(_onScroll=onScroll)===null||_onScroll===void 0||_onScroll(-position);}",
};
let closure_18 = {
  code: "function ZoomLayoutPagerNativeTsx11(){const{selectedPage,isPaging}=this.__closure;return{page:selectedPage.get(),paging:isPaging.get()};}",
};
let __initData2 = {
  code: "function ZoomLayoutPagerNativeTsx12({page:page,paging:paging}){const{currentPageShared,goToPage}=this.__closure;if(!paging&&page!==currentPageShared.get())goToPage(page,false);}",
};
let closure_20 = {
  code: "function ZoomLayoutPagerNativeTsx13(){const{goToPage,currentPageShared}=this.__closure;return goToPage(currentPageShared.get(),false);}",
};
let closure_21 = {
  code: "function ZoomLayoutPagerNativeTsx14(){const{translateX,pageCount,width,height}=this.__closure;return{transform:[{translateX:translateX.get()}],width:pageCount*width,height:height};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayoutPager.native.tsx");

export default noop.memo(function ZoomLayoutPager(pageCount) {
  pageCount = pageCount.pageCount;
  let num = pageCount.pageChangePositionThreshold;
  if (num === undefined) {
    num = 0.3;
  }
  let num2 = pageCount.pageChangeVelocityThreshold;
  if (num2 === undefined) {
    num2 = 500;
  }
  const width = pageCount.width;
  const height = pageCount.height;
  const selectedPage = pageCount.selectedPage;
  const isPaging = pageCount.isPaging;
  let num3 = pageCount.renderAheadCount;
  if (num3 === undefined) {
    num3 = 1;
  }
  ({ onRenderPage: closure_8, onPageChanged } = pageCount);
  const onScroll = pageCount.onScroll;
  const onBeginDrag = pageCount.onBeginDrag;
  const onEndDrag = pageCount.onEndDrag;
  const onMomentumBegin = pageCount.onMomentumBegin;
  const onMomentumEnd = pageCount.onMomentumEnd;
  const onCreateGesture = pageCount.onCreateGesture;
  const gestureRef = pageCount.gestureRef;
  const gestureEnabled = pageCount.gestureEnabled;
  let callback1;
  let callback2;
  let memo;
  closure_28 = undefined;
  const tmp = width(
    height.useState(() => selectedPage.get()),
    2,
  );
  __initData = tmp[0];
  __initData2 = tmp[1];
  const sharedValue = pageCount(num2[5]).useSharedValue(__initData);
  let obj = pageCount(num2[5]);
  const sharedValue1 = pageCount(num2[5]).useSharedValue(-__initData * width);
  let obj2 = pageCount(num2[5]);
  const sharedValue2 = pageCount(num2[5]).useSharedValue(-__initData * width);
  let obj3 = pageCount(num2[5]);
  const sharedValue3 = pageCount(num2[5]).useSharedValue(false);
  let items = [onPageChanged];
  const updateCurrentPage = height.useCallback((arg0) => {
    closure_19(arg0);
    if (onPageChanged != null) {
      onPageChanged(arg0);
    }
  }, items);
  class U {
    constructor() {
      obj = closure_0(closure_2[5]);
      cancelAnimationResult = obj.cancelAnimation(closure_21);
      obj2 = closure_23;
      if (closure_23.get()) {
        flag = false;
        result = obj2.set(false);
        tmp3 = null;
        if (onEndDrag != null) {
          tmp4 = onEndDrag();
        }
      }
      if (onMomentumEnd != null) {
        tmp5 = onMomentumEnd();
      }
      result1 = isPaging.set(false);
      return;
    }
  }
  let obj4 = pageCount(num2[5]);
  U.__closure = {
    cancelAnimation: pageCount(num2[5]).cancelAnimation,
    translateX: sharedValue1,
    dragging: sharedValue3,
    onEndDrag,
    onMomentumEnd,
    isPaging,
  };
  U.__workletHash = 386048727981;
  U.__initData = __initData;
  const items1 = [sharedValue1, sharedValue3, onEndDrag, onMomentumEnd, isPaging];
  callback1 = height.useCallback(U, items1);
  let fn = function j(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    num = arg2;
    if (arg2 === undefined) {
      num = 0;
    }
    let bound;
    callback1();
    bound = Math.max(0, Math.min(bound - 1, arg0));
    let result = sharedValue.set(bound);
    pageCount(num2[5]).runOnJS(callback)(bound);
    if (flag) {
      const result1 = isPaging.set(true);
      if (onMomentumBegin != null) {
        onMomentumBegin();
      }
      const tmp4Result = pageCount(tmp5[6]);
      const result2 = -bound * width;
      const obj2 = {};
      const merged = Object.assign(num3);
      obj2.velocity = num;
      const fn = function s(arg0) {
        if (arg0) {
          if (onScroll != null) {
            tmp(bound * width);
          }
          const result = isPaging.set(false);
          if (onMomentumEnd != null) {
            tmp8();
          }
        }
      };
      const obj3 = { onScroll, page: bound, width, isPaging, onMomentumEnd };
      fn.__closure = obj3;
      fn.__workletHash = 16161900631154;
      fn.__initData = onScroll;
      const result3 = sharedValue1.set(tmp4Result.withSpring(result2, obj2, "respect-motion-settings", fn));
    } else {
      const result4 = sharedValue1.set(-bound * width);
      if (onScroll != null) {
        tmp10(bound * width);
      }
    }
    const obj = pageCount(num2[5]);
    tmp5 = num2;
  };
  const obj5 = {
    cancelAnimation: pageCount(num2[5]).cancelAnimation,
    translateX: sharedValue1,
    dragging: sharedValue3,
    onEndDrag,
    onMomentumEnd,
    isPaging,
  };
  fn.__closure = {
    stopPaging: callback1,
    pageCount,
    currentPageShared: sharedValue,
    runOnJS: pageCount(num2[5]).runOnJS,
    updateCurrentPage,
    isPaging,
    onMomentumBegin,
    translateX: sharedValue1,
    withSpring: pageCount(num2[6]).withSpring,
    width,
    SPRING_CONFIG: num3,
    onScroll,
    onMomentumEnd,
  };
  fn.__workletHash = 17482366564447;
  fn.__initData = onPageChanged;
  const items2 = [
    callback1,
    pageCount,
    sharedValue,
    updateCurrentPage,
    isPaging,
    onMomentumBegin,
    sharedValue1,
    width,
    onScroll,
    onMomentumEnd,
  ];
  callback2 = height.useCallback(fn, items2);
  const items3 = [
    gestureRef,
    gestureEnabled,
    callback1,
    sharedValue2,
    sharedValue1,
    sharedValue3,
    isPaging,
    onBeginDrag,
    pageCount,
    width,
    num,
    num2,
    callback2,
  ];
  memo = height.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const withRefResult = Gesture.Pan().withRef(gestureRef);
    const maxPointersResult = Gesture.Pan().withRef(gestureRef).maxPointers(1);
    const activeOffsetXResult = Gesture.Pan().withRef(gestureRef).maxPointers(1).activeOffsetX([-10, 10]);
    const fn = function l(arg0, fail) {
      if (!gestureEnabled.get()) {
        fail.fail();
      }
    };
    __closure = { gestureEnabled };
    fn.__closure = __closure;
    fn.__workletHash = 17118741038439;
    fn.__initData = __initData5;
    const failOffsetYResult = Gesture.Pan()
      .withRef(gestureRef)
      .maxPointers(1)
      .activeOffsetX([-10, 10])
      .failOffsetY([-10, 10]);
    const fn2 = function s() {
      callback1();
      const result = sharedValue2.set(sharedValue1.get());
      const result1 = sharedValue3.set(true);
      const result2 = isPaging.set(true);
      if (__initData != null) {
        __initData();
      }
    };
    fn2.__closure = {
      stopPaging: callback1,
      savedTranslateX: sharedValue2,
      translateX: sharedValue1,
      dragging: sharedValue3,
      isPaging,
      onBeginDrag,
    };
    fn2.__workletHash = 10573957091429;
    fn2.__initData = __initData4;
    const obj2 = {
      stopPaging: callback1,
      savedTranslateX: sharedValue2,
      translateX: sharedValue1,
      dragging: sharedValue3,
      isPaging,
      onBeginDrag,
    };
    const onTouchesDownResult = Gesture.Pan()
      .withRef(gestureRef)
      .maxPointers(1)
      .activeOffsetX([-10, 10])
      .failOffsetY([-10, 10])
      .onTouchesDown(fn);
    const fn3 = function o(translationX) {
      const sum = sharedValue2.get() + translationX.translationX;
      const result = -Math.max(0, pageCount - 1) * width;
      if (sum > 0) {
        let result1 = sum * 0.3;
      } else {
        result1 = sum;
        if (sum < result) {
          result1 = result + 0.3 * (sum - result);
        }
      }
      const result2 = sharedValue1.set(result1);
    };
    fn3.__closure = { savedTranslateX: sharedValue2, pageCount, width, translateX: sharedValue1 };
    fn3.__workletHash = 6113088723368;
    fn3.__initData = __initData3;
    const obj3 = { savedTranslateX: sharedValue2, pageCount, width, translateX: sharedValue1 };
    const onStartResult = Gesture.Pan()
      .withRef(gestureRef)
      .maxPointers(1)
      .activeOffsetX([-10, 10])
      .failOffsetY([-10, 10])
      .onTouchesDown(fn)
      .onStart(fn2);
    const fn4 = function n(velocityX, arg1) {
      value = sharedValue1.get();
      const diff = value - sharedValue2.get();
      const rounded = Math.round(-sharedValue2.get() / width);
      let rounded1 = Math.round(-sharedValue1.get() / width);
      if (arg1) {
        const _Math = Math;
        if (Math.abs(velocityX.velocityX) > num2) {
          let sum = rounded;
          if (!(velocityX.velocityX < 0 ? diff > 0 : diff < 0)) {
            let num4 = -1;
            if (tmp9) {
              num4 = 1;
            }
            sum = rounded + num4;
          }
          rounded1 = sum;
        }
        let num5 = 0;
        if (arg1) {
          num5 = velocityX.velocityX;
        }
        callback2(rounded1, true, num5);
      }
      let tmp7 = arg1;
      if (arg1) {
        const _Math2 = Math;
        tmp7 = Math.abs(diff) > closure_1_1 * width;
      }
      if (tmp7) {
        num = -1;
        if (diff < 0) {
          num = 1;
        }
        rounded1 = rounded + num;
      }
    };
    fn4.__closure = {
      translateX: sharedValue1,
      savedTranslateX: sharedValue2,
      width,
      pageChangeVelocityThreshold: num2,
      pageChangePositionThreshold: num,
      goToPage: callback2,
    };
    fn4.__workletHash = 6083161663837;
    fn4.__initData = __initData2;
    const obj4 = {
      translateX: sharedValue1,
      savedTranslateX: sharedValue2,
      width,
      pageChangeVelocityThreshold: num2,
      pageChangePositionThreshold: num,
      goToPage: callback2,
    };
    const onUpdateResult = Gesture.Pan()
      .withRef(gestureRef)
      .maxPointers(1)
      .activeOffsetX([-10, 10])
      .failOffsetY([-10, 10])
      .onTouchesDown(fn)
      .onStart(fn2)
      .onUpdate(fn3);
    const fn5 = function t() {
      if (sharedValue3.get()) {
        const _Math = Math;
        callback2(Math.round(-sharedValue1.get() / width));
      }
    };
    fn5.__closure = { dragging: sharedValue3, goToPage: callback2, translateX: sharedValue1, width };
    fn5.__workletHash = 4326990924287;
    fn5.__initData = __initData;
    return Gesture.Pan()
      .withRef(gestureRef)
      .maxPointers(1)
      .activeOffsetX([-10, 10])
      .failOffsetY([-10, 10])
      .onTouchesDown(fn)
      .onStart(fn2)
      .onUpdate(fn3)
      .onEnd(fn4)
      .onFinalize(fn5);
  }, items3);
  const items4 = [onCreateGesture, memo];
  const memo1 = height.useMemo(() => {
    let tmpResult;
    if (onCreateGesture != null) {
      tmpResult = tmp(memo);
    }
    if (tmpResult == null) {
      tmpResult = memo;
    }
    return tmpResult;
  }, items4);
  const obj6 = {
    stopPaging: callback1,
    pageCount,
    currentPageShared: sharedValue,
    runOnJS: pageCount(num2[5]).runOnJS,
    updateCurrentPage,
    isPaging,
    onMomentumBegin,
    translateX: sharedValue1,
    withSpring: pageCount(num2[6]).withSpring,
    width,
    SPRING_CONFIG: num3,
    onScroll,
    onMomentumEnd,
  };
  class Y {
    constructor() {
      return closure_21.get();
    }
  }
  Y.__closure = { translateX: sharedValue1 };
  Y.__workletHash = 14411440486141;
  Y.__initData = gestureRef;
  let fn2 = function z(arg0) {
    if (isPaging.get()) {
      if (onScroll != null) {
        tmp(-arg0);
      }
    }
  };
  fn2.__closure = { isPaging, onScroll };
  fn2.__workletHash = 14844046061724;
  fn2.__initData = gestureEnabled;
  const animatedReaction = pageCount(num2[5]).useAnimatedReaction(Y, fn2);
  const obj7 = pageCount(num2[5]);
  class K {
    constructor() {
      obj = { page: selectedPage.get(), paging: isPaging.get() };
      return obj;
    }
  }
  K.__closure = { selectedPage, isPaging };
  K.__workletHash = 10538586061470;
  K.__initData = __initData;
  let fn3 = function q(arg0) {
    ({ page, paging } = arg0);
    if (!paging) {
      paging = page === sharedValue.get();
    }
    if (!paging) {
      callback2(page, false);
    }
  };
  fn3.__closure = { currentPageShared: sharedValue, goToPage: callback2 };
  fn3.__workletHash = 2792537933091;
  fn3.__initData = __initData2;
  const animatedReaction1 = pageCount(num2[5]).useAnimatedReaction(K, fn3);
  const items5 = [width, height, callback2, sharedValue];
  const effect = height.useEffect(() => {
    const fn = function t() {
      return callback2(__initData6.get(), false);
    };
    fn.__closure = { goToPage: callback2, currentPageShared: sharedValue };
    fn.__workletHash = 14139806451578;
    fn.__initData = __initData6;
    ReanimatedRexport.runOnUI(fn)();
  }, items5);
  const imperativeHandle = height.useImperativeHandle(pageCount.ref, () => ({
    goToPage(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      return pageCount(num2[5]).runOnUI(callback2)(arg0, flag);
    },
    getCurrentPage() {
      return __initData6.get();
    },
  }));
  const items6 = [__initData, num3, pageCount];
  const memo2 = height.useMemo(() => {
    let bound1;
    const items = [];
    let bound = Math.max(0, first - num3);
    if (bound <= Math.min(pageCount - 1, first + num3)) {
      do {
        let arr = items.push(bound);
        bound = bound + 1;
        let _Math = Math;
        bound1 = Math.min(pageCount - 1, first + num3);
      } while (bound <= bound1);
    }
    return items;
  }, items6);
  const items7 = [width, height];
  const items8 = [width, height];
  const memo3 = height.useMemo(() => {
    const size = { overflow: "hidden", width, height };
    return size;
  }, items7);
  closure_28 = height.useMemo(() => {
    const size = { position: "absolute", top: 0, width, height };
    return size;
  }, items8);
  const obj8 = pageCount(num2[5]);
  function ue() {
    const size = { transform: null, width: null, height: null };
    const items = [{ translateX: sharedValue1.get() }];
    size.transform = items;
    size.width = pageCount * width;
    size.height = height;
    return size;
  }
  ue.__closure = { translateX: sharedValue1, pageCount, width, height };
  ue.__workletHash = 12202520205194;
  ue.__initData = sharedValue1;
  const animatedStyle = pageCount(num2[5]).useAnimatedStyle(ue);
  const obj10 = { gesture: memo1, children: null };
  const obj11 = { collapsable: false, style: memo3, children: null };
  const obj9 = pageCount(num2[5]);
  obj11.children = isPaging(num(num2[5]).View, {
    style: animatedStyle,
    children: memo2.map((item) => {
      const obj = {
        accessibilityElementsHidden: item !== first,
        importantForAccessibility: null,
        style: null,
        children: null,
      };
      let str = "no-hide-descendants";
      if (item === first) {
        str = "auto";
      }
      obj.importantForAccessibility = str;
      const items = [closure_28, { left: item * width }];
      obj.style = items;
      obj.children = __initData(item);
      return (
        <View key={item} accessibilityElementsHidden={item !== first} importantForAccessibility={null} style={null}>
          {null}
        </View>
      );
    }),
  });
  obj10.children = isPaging(selectedPage, obj11);
  return isPaging(pageCount(num2[7]).GestureDetector, obj10);
});
