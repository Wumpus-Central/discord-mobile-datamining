// discord_app/modules/zoom_layout/ZoomLayoutPager.native.tsx
import _modDef1652 from "../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../_runtime/metro/01705__.js";
import LegacyBaseButton from "../../../_runtime/05430_LegacyBaseButton.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let jsx = fn(21).jsx;
let obj = {};
let merged = Object.assign(fn(5774).springStandard);
obj.stiffness = 100;
obj.overshootClamping = true;
let closure_8 = {
  code: "(function ZoomLayoutPagerNativeTsx1(){let[cancelAnimation,translateX,dragging,onEndDrag,onMomentumEnd,isPaging]=this.__closure;var _onMomentumEnd;cancelAnimation(translateX);if(dragging.get()){var _onEndDrag;dragging.set(false);(_onEndDrag=onEndDrag)===null||_onEndDrag===void 0||_onEndDrag();}(_onMomentumEnd=onMomentumEnd)===null||_onMomentumEnd===void 0||_onMomentumEnd();isPaging.set(false);})",
};
let closure_9 = {
  code: "(function ZoomLayoutPagerNativeTsx2(finished){let[onScroll,page,width,isPaging,onMomentumEnd]=this.__closure;var _onScroll,_onMomentumEnd;if(!finished)return;(_onScroll=onScroll)===null||_onScroll===void 0||_onScroll(page*width);isPaging.set(false);(_onMomentumEnd=onMomentumEnd)===null||_onMomentumEnd===void 0||_onMomentumEnd();})",
};
let closure_10 = {
  code: "(function ZoomLayoutPagerNativeTsx3(index,animated=true,velocity=0){let[stopPaging,pageCount,currentPageShared,scheduleOnRN,updateCurrentPage,isPaging,onMomentumBegin,translateX,withSpring,width,SPRING_CONFIG,_worklet_7743549908746_init_data,onScroll,onMomentumEnd]=this.__closure;stopPaging();const page=Math.max(0,Math.min(pageCount-1,index));currentPageShared.set(page);scheduleOnRN(updateCurrentPage,page);if(animated){var _onMomentumBegin;isPaging.set(true);(_onMomentumBegin=onMomentumBegin)===null||_onMomentumBegin===void 0||_onMomentumBegin();translateX.set(withSpring(-page*width,{...SPRING_CONFIG,velocity:velocity},'respect-motion-settings',function ZoomLayoutPagerNativeTsx2Factory([_worklet_7743549908746_init_data,onScroll,page,width,isPaging,onMomentumEnd]){const ZoomLayoutPagerNativeTsx2=function(finished){if(!finished)return;onScroll===null||onScroll===void 0||onScroll(page*width);isPaging.set(false);onMomentumEnd===null||onMomentumEnd===void 0||onMomentumEnd();};ZoomLayoutPagerNativeTsx2.__closure=[onScroll,page,width,isPaging,onMomentumEnd];ZoomLayoutPagerNativeTsx2.__workletHash=7743549908746;ZoomLayoutPagerNativeTsx2.__initData=_worklet_7743549908746_init_data;return ZoomLayoutPagerNativeTsx2;}([_worklet_7743549908746_init_data,onScroll,page,width,isPaging,onMomentumEnd])));}else{var _onScroll;translateX.set(-page*width);(_onScroll=onScroll)===null||_onScroll===void 0||_onScroll(page*width);}})",
};
let closure_11 = {
  code: "(function ZoomLayoutPagerNativeTsx4(_,manager){let[gestureEnabled]=this.__closure;if(!gestureEnabled.get())manager.fail();})",
};
let closure_12 = {
  code: "(function ZoomLayoutPagerNativeTsx5(){let[stopPaging,savedTranslateX,translateX,dragging,isPaging,onBeginDrag]=this.__closure;var _onBeginDrag;stopPaging();savedTranslateX.set(translateX.get());dragging.set(true);isPaging.set(true);(_onBeginDrag=onBeginDrag)===null||_onBeginDrag===void 0||_onBeginDrag();})",
};
let closure_13 = {
  code: "(function ZoomLayoutPagerNativeTsx6(event){let[savedTranslateX,pageCount,width,translateX]=this.__closure;let position=savedTranslateX.get()+event.translationX;const minimum=-Math.max(0,pageCount-1)*width;if(position>0)position*=0.3;else if(position<minimum)position=minimum+(position-minimum)*0.3;translateX.set(position);})",
};
let closure_14 = {
  code: "(function ZoomLayoutPagerNativeTsx7(event,success){let[translateX,savedTranslateX,width,pageChangeVelocityThreshold,pageChangePositionThreshold,goToPage]=this.__closure;const distance=translateX.get()-savedTranslateX.get();const startPage=Math.round(-savedTranslateX.get()/width);let page=Math.round(-translateX.get()/width);if(success&&Math.abs(event.velocityX)>pageChangeVelocityThreshold){const forward=event.velocityX<0;const reversed=forward?distance>0:distance<0;page=reversed?startPage:startPage+(forward?1:-1);}else if(success&&Math.abs(distance)>pageChangePositionThreshold*width){page=startPage+(distance<0?1:-1);}goToPage(page,true,success?event.velocityX:0);})",
};
let closure_15 = {
  code: "(function ZoomLayoutPagerNativeTsx8(){let[dragging,goToPage,translateX,width]=this.__closure;if(dragging.get())goToPage(Math.round(-translateX.get()/width));})",
};
let closure_16 = {
  code: "(function ZoomLayoutPagerNativeTsx9(){let[translateX]=this.__closure;return translateX.get();})",
};
let closure_17 = {
  code: "(function ZoomLayoutPagerNativeTsx10(position){let[isPaging,onScroll]=this.__closure;var _onScroll;if(isPaging.get())(_onScroll=onScroll)===null||_onScroll===void 0||_onScroll(-position);})",
};
let closure_18 = {
  code: "(function ZoomLayoutPagerNativeTsx11(){let[selectedPage,isPaging]=this.__closure;return{page:selectedPage.get(),paging:isPaging.get()};})",
};
let closure_19 = {
  code: "(function ZoomLayoutPagerNativeTsx12({page:page,paging:paging}){let[currentPageShared,goToPage]=this.__closure;if(!paging&&page!==currentPageShared.get())goToPage(page,false);})",
};
let closure_20 = {
  code: "(function ZoomLayoutPagerNativeTsx13(){let[goToPage,currentPageShared]=this.__closure;return goToPage(currentPageShared.get(),false);})",
};
let closure_21 = {
  code: "(function ZoomLayoutPagerNativeTsx14(){let[translateX,pageCount,width,height]=this.__closure;return{transform:[{translateX:translateX.get()}],width:pageCount*width,height:height};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/zoom_layout/ZoomLayoutPager.native.tsx");

export default noop.memo(function ZoomLayoutPager(pageCount) {
  pageCount = pageCount.pageCount;
  _require = pageCount;
  let num = pageCount.pageChangePositionThreshold;
  if (num === undefined) {
    num = 0.3;
  }
  importDefault = num;
  let num2 = pageCount.pageChangeVelocityThreshold;
  if (num2 === undefined) {
    num2 = 500;
  }
  dependencyMap = num2;
  const width = pageCount.width;
  height = pageCount.height;
  noop = height;
  const selectedPage = pageCount.selectedPage;
  c5 = selectedPage;
  const isPaging = pageCount.isPaging;
  jsx = isPaging;
  let num3 = pageCount.renderAheadCount;
  if (num3 === undefined) {
    num3 = 1;
  }
  c7 = num3;
  ({ onRenderPage: c8, onPageChanged } = pageCount);
  c9 = onPageChanged;
  ({ onScroll, onBeginDrag } = pageCount);
  c10 = onBeginDrag;
  ({ onEndDrag, onMomentumBegin, onMomentumEnd, onCreateGesture } = pageCount);
  c11 = onCreateGesture;
  const gestureRef = pageCount.gestureRef;
  c12 = gestureRef;
  const gestureEnabled = pageCount.gestureEnabled;
  c13 = gestureEnabled;
  let callback1;
  let callback2;
  let memo;
  closure_23 = undefined;
  const tmp = height(
    noop.useState(() => _undefined5.get()),
    2,
  );
  const first = tmp[0];
  closure_15 = tmp[1];
  const sharedValue = require("../../../_runtime/metro/01652__.js").useSharedValue(first);
  const obj2 = require("../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../_runtime/metro/01652__.js").useSharedValue(-first * width);
  const obj3 = require("../../../_runtime/metro/01652__.js");
  const sharedValue2 = require("../../../_runtime/metro/01652__.js").useSharedValue(-first * width);
  const obj4 = require("../../../_runtime/metro/01652__.js");
  const sharedValue3 = require("../../../_runtime/metro/01652__.js").useSharedValue(false);
  items = [onPageChanged];
  const callback = noop.useCallback((arg0) => {
    closure_15(arg0);
    if (_undefined9 != null) {
      _undefined9(arg0);
    }
  }, items);
  let items1 = [
    c8,
    require("../../../_runtime/metro/01652__.js").cancelAnimation,
    sharedValue1,
    sharedValue3,
    onEndDrag,
    onMomentumEnd,
    isPaging,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  height = undefined;
  noop = undefined;
  c5 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items1;
  class ZoomLayoutPagerNativeTsx1 {
    constructor() {
      tmp = closure_0(closure_1);
      obj = closure_2;
      if (closure_2.get()) {
        flag = false;
        result = obj.set(false);
        tmp3 = null;
        if (closure_3 != null) {
          tmp4 = closure_3();
        }
      }
      if (closure_4 != null) {
        tmp5 = closure_4();
      }
      result1 = closure_5.set(false);
      return;
    }
  }
  let items2 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  ZoomLayoutPagerNativeTsx1.__closure = items2;
  ZoomLayoutPagerNativeTsx1.__workletHash = 7395508593940;
  ZoomLayoutPagerNativeTsx1.__initData = tmp10;
  let items3 = [sharedValue1, sharedValue3, onEndDrag, onMomentumEnd, isPaging];
  callback1 = noop.useCallback(ZoomLayoutPagerNativeTsx1, items3);
  let items4 = [
    c10,
    callback1,
    pageCount,
    sharedValue,
    require("../../../_runtime/metro/01705__.js").scheduleOnRN,
    callback,
    isPaging,
    onMomentumBegin,
    sharedValue1,
    require("spring/spring").withSpring,
    width,
    c7,
    c9,
    onScroll,
    onMomentumEnd,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  height = undefined;
  noop = undefined;
  c5 = undefined;
  jsx = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items4;
  class ZoomLayoutPagerNativeTsx3 {
    constructor(arg0) {
      flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      num = arg2;
      if (arg2 === undefined) {
        num = 0;
      }
      tmp = closure_0();
      bound = Math.max(0, Math.min(closure_1 - 1, pageCount));
      result = closure_2.set(bound);
      tmp4 = closure_3(closure_4, bound);
      if (flag) {
        flag2 = true;
        tmp10 = closure_5;
        result1 = closure_5.set(true);
        tmp12 = null;
        if (closure_6 != null) {
          tmp13 = closure_6();
        }
        tmp16 = closure_9;
        result2 = -bound * closure_9;
        obj = {};
        tmp18 = closure_10;
        tmp19 = obj;
        tmp14 = closure_7;
        tmp15 = closure_8;
        merged = Object.assign(closure_10);
        obj.velocity = num;
        tmp21 = closure_11;
        items = [, , , , ,];
        items[0] = closure_11;
        tmp22 = closure_12;
        items[1] = closure_12;
        items[2] = bound;
        items[3] = closure_9;
        items[4] = tmp10;
        tmp23 = closure_13;
        items[5] = closure_13;
        closure_0 = undefined;
        closure_1 = undefined;
        closure_2 = undefined;
        closure_3 = undefined;
        closure_4 = undefined;
        tmp24 = items;
        [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items;
        class ZoomLayoutPagerNativeTsx2 {
          constructor(arg0) {
            if (pageCount) {
              tmp2 = null;
              if (closure_0 != null) {
                tmp3 = closure_1;
                tmp4 = closure_2;
                tmpResult = tmp(closure_1 * closure_2);
              }
              tmp6 = closure_3;
              flag = false;
              result = closure_3.set(false);
              if (closure_4 != null) {
                tmp8Result = tmp8();
              }
            }
            return;
          }
        }
        items1 = [, , , ,];
        items1[0] = tmp26;
        items1[1] = tmp27;
        items1[2] = tmp28;
        items1[3] = tmp29;
        items1[4] = tmp30;
        ZoomLayoutPagerNativeTsx2.__closure = items1;
        num2 = 7743549908746;
        ZoomLayoutPagerNativeTsx2.__workletHash = 7743549908746;
        ZoomLayoutPagerNativeTsx2.__initData = tmp25;
        str = "respect-motion-settings";
        tmp31 = result2;
        tmp32 = obj;
        tmp33 = ZoomLayoutPagerNativeTsx2;
        result3 = closure_7.set(tmp15(result2, obj, "respect-motion-settings", ZoomLayoutPagerNativeTsx2));
      } else {
        tmp5 = closure_7;
        tmp6 = closure_9;
        result4 = closure_7.set(-bound * closure_9);
        tmp9 = null;
        if (closure_12 != null) {
          tmp8Result = tmp8(bound * tmp6);
        }
      }
      return;
    }
  }
  let items5 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
  ZoomLayoutPagerNativeTsx3.__closure = items5;
  ZoomLayoutPagerNativeTsx3.__workletHash = 15580971465797;
  ZoomLayoutPagerNativeTsx3.__initData = tmp18;
  let items6 = [
    callback1,
    pageCount,
    sharedValue,
    callback,
    isPaging,
    onMomentumBegin,
    sharedValue1,
    width,
    onScroll,
    onMomentumEnd,
  ];
  callback2 = obj.useCallback(ZoomLayoutPagerNativeTsx3, items6);
  let items7 = [
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
  memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const withRefResult = Gesture.Pan().withRef(c12);
    const maxPointersResult = Gesture.Pan().withRef(c12).maxPointers(1);
    const activeOffsetXResult = Gesture.Pan().withRef(c12).maxPointers(1).activeOffsetX([-10, 10]);
    items = [closure_11, c13];
    c0 = undefined;
    [tmp, tmp2] = items;
    class ZoomLayoutPagerNativeTsx4 {
      constructor(arg0, arg1) {
        if (!closure_0.get()) {
          tmp = arg1;
          failResult = arg1.fail();
        }
        return;
      }
    }
    const items1 = [tmp2];
    ZoomLayoutPagerNativeTsx4.__closure = items1;
    ZoomLayoutPagerNativeTsx4.__workletHash = 8449633442098;
    ZoomLayoutPagerNativeTsx4.__initData = tmp;
    const failOffsetYResult = Gesture.Pan().withRef(c12).maxPointers(1).activeOffsetX([-10, 10]).failOffsetY([-10, 10]);
    const items2 = [closure_12, callback1, sharedValue2, sharedValue1, sharedValue3, c6, c10];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items2;
    class ZoomLayoutPagerNativeTsx5 {
      constructor() {
        tmp = closure_0();
        result = closure_1.set(closure_2.get());
        result1 = closure_3.set(true);
        result2 = closure_4.set(true);
        if (closure_5 != null) {
          tmp5 = closure_5();
        }
        return;
      }
    }
    const items3 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
    ZoomLayoutPagerNativeTsx5.__closure = items3;
    ZoomLayoutPagerNativeTsx5.__workletHash = 14265668669150;
    ZoomLayoutPagerNativeTsx5.__initData = tmp6;
    const onTouchesDownResult = Gesture.Pan()
      .withRef(c12)
      .maxPointers(1)
      .activeOffsetX([-10, 10])
      .failOffsetY([-10, 10])
      .onTouchesDown(ZoomLayoutPagerNativeTsx4);
    const items4 = [closure_13, sharedValue2, c0, c3, sharedValue1];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp14, tmp15, tmp16, tmp17, tmp18] = items4;
    class ZoomLayoutPagerNativeTsx6 {
      constructor(arg0) {
        sum = closure_0.get() + arg0.translationX;
        result = -Math.max(0, closure_1 - 1) * closure_2;
        if (sum > 0) {
          num2 = 0.3;
          result1 = sum * 0.3;
        } else {
          result1 = sum;
          if (sum < result) {
            num = 0.3;
            result1 = result + 0.3 * (sum - result);
          }
        }
        result2 = closure_3.set(result1);
        return;
      }
    }
    const items5 = [tmp15, tmp16, tmp17, tmp18];
    ZoomLayoutPagerNativeTsx6.__closure = items5;
    ZoomLayoutPagerNativeTsx6.__workletHash = 4355817730097;
    ZoomLayoutPagerNativeTsx6.__initData = tmp14;
    const onStartResult = Gesture.Pan()
      .withRef(c12)
      .maxPointers(1)
      .activeOffsetX([-10, 10])
      .failOffsetY([-10, 10])
      .onTouchesDown(ZoomLayoutPagerNativeTsx4)
      .onStart(ZoomLayoutPagerNativeTsx5);
    const items6 = [closure_14, sharedValue1, sharedValue2, c3, c2, c1, callback2];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items6;
    class ZoomLayoutPagerNativeTsx7 {
      constructor(arg0, arg1) {
        value = closure_0.get();
        diff = value - closure_1.get();
        tmp3 = closure_2;
        rounded = Math.round(-closure_1.get() / closure_2);
        rounded1 = Math.round(-closure_0.get() / closure_2);
        if (arg1) {
          _Math = Math;
          tmp6 = closure_3;
          if (Math.abs(arg0.velocityX) > closure_3) {
            num3 = 0;
            tmp9 = arg0.velocityX < 0;
            sum = rounded;
            if (!(tmp9 ? diff > 0 : diff < 0)) {
              num4 = -1;
              if (tmp9) {
                num4 = 1;
              }
              sum = rounded + num4;
            }
            rounded1 = sum;
          }
          num5 = 0;
          tmp11 = closure_5;
          if (arg1) {
            num5 = arg0.velocityX;
          }
          flag = true;
          tmp11Result = tmp11(rounded1, true, num5);
          return;
        }
        tmp7 = arg1;
        if (arg1) {
          _Math2 = Math;
          tmp8 = closure_4;
          tmp7 = Math.abs(diff) > closure_4 * tmp3;
        }
        if (tmp7) {
          num = -1;
          num2 = 0;
          if (diff < 0) {
            num = 1;
          }
          rounded1 = rounded + num;
        }
        return;
      }
    }
    const items7 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
    ZoomLayoutPagerNativeTsx7.__closure = items7;
    ZoomLayoutPagerNativeTsx7.__workletHash = 11667777990278;
    ZoomLayoutPagerNativeTsx7.__initData = tmp20;
    const onUpdateResult = Gesture.Pan()
      .withRef(c12)
      .maxPointers(1)
      .activeOffsetX([-10, 10])
      .failOffsetY([-10, 10])
      .onTouchesDown(ZoomLayoutPagerNativeTsx4)
      .onStart(ZoomLayoutPagerNativeTsx5)
      .onUpdate(ZoomLayoutPagerNativeTsx6);
    const items8 = [closure_15, sharedValue3, callback2, sharedValue1, c3];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp27, tmp28, tmp29, tmp30, tmp31] = items8;
    class ZoomLayoutPagerNativeTsx8 {
      constructor() {
        if (closure_0.get()) {
          tmp = closure_1;
          tmp2 = globalThis;
          _Math = Math;
          tmp3 = closure_2;
          tmp4 = closure_3;
          tmp5 = closure_1(Math.round(-closure_2.get() / closure_3));
        }
        return;
      }
    }
    const items9 = [tmp28, tmp29, tmp30, tmp31];
    ZoomLayoutPagerNativeTsx8.__closure = items9;
    ZoomLayoutPagerNativeTsx8.__workletHash = 7231016856330;
    ZoomLayoutPagerNativeTsx8.__initData = tmp27;
    return Gesture.Pan()
      .withRef(c12)
      .maxPointers(1)
      .activeOffsetX([-10, 10])
      .failOffsetY([-10, 10])
      .onTouchesDown(ZoomLayoutPagerNativeTsx4)
      .onStart(ZoomLayoutPagerNativeTsx5)
      .onUpdate(ZoomLayoutPagerNativeTsx6)
      .onEnd(ZoomLayoutPagerNativeTsx7)
      .onFinalize(ZoomLayoutPagerNativeTsx8);
  }, items7);
  let items8 = [onCreateGesture, memo];
  const memo1 = obj.useMemo(() => {
    let tmpResult;
    if (c11 != null) {
      tmpResult = tmp(memo);
    }
    if (tmpResult == null) {
      tmpResult = memo;
    }
    return tmpResult;
  }, items8);
  const obj5 = require("../../../_runtime/metro/01652__.js");
  let items9 = [sharedValue, sharedValue1];
  _require = undefined;
  [tmp36, tmp37] = items9;
  class ZoomLayoutPagerNativeTsx9 {
    constructor() {
      return closure_0.get();
    }
  }
  const items10 = [tmp37];
  ZoomLayoutPagerNativeTsx9.__closure = items10;
  ZoomLayoutPagerNativeTsx9.__workletHash = 12002625415812;
  ZoomLayoutPagerNativeTsx9.__initData = tmp36;
  const items11 = [sharedValue1, isPaging, onScroll];
  _require = undefined;
  importDefault = undefined;
  [tmp38, tmp39, tmp40] = items11;
  class ZoomLayoutPagerNativeTsx10 {
    constructor(arg0) {
      if (closure_0.get()) {
        tmp2 = null;
        if (closure_1 != null) {
          tmp3 = pageCount;
          tmpResult = tmp(-pageCount);
        }
      }
      return;
    }
  }
  const items12 = [tmp39, tmp40];
  ZoomLayoutPagerNativeTsx10.__closure = items12;
  ZoomLayoutPagerNativeTsx10.__workletHash = 10461805768773;
  ZoomLayoutPagerNativeTsx10.__initData = tmp38;
  const animatedReaction = require("../../../_runtime/metro/01652__.js").useAnimatedReaction(
    ZoomLayoutPagerNativeTsx9,
    ZoomLayoutPagerNativeTsx10,
  );
  const tmp3Result = require("../../../_runtime/metro/01652__.js");
  const items13 = [sharedValue2, selectedPage, isPaging];
  _require = undefined;
  importDefault = undefined;
  [tmp42, tmp43, tmp44] = items13;
  class ZoomLayoutPagerNativeTsx11 {
    constructor() {
      obj = { page: closure_0.get(), paging: closure_1.get() };
      return obj;
    }
  }
  const items14 = [tmp43, tmp44];
  ZoomLayoutPagerNativeTsx11.__closure = items14;
  ZoomLayoutPagerNativeTsx11.__workletHash = 12937330645255;
  ZoomLayoutPagerNativeTsx11.__initData = tmp42;
  const items15 = [sharedValue3, sharedValue, callback2];
  _require = undefined;
  importDefault = undefined;
  [tmp45, tmp46, tmp47] = items15;
  class ZoomLayoutPagerNativeTsx12 {
    constructor(arg0) {
      ({ page, paging } = pageCount);
      if (!paging) {
        tmp = closure_0;
        paging = page === closure_0.get();
      }
      if (!paging) {
        tmp2 = closure_1;
        flag = false;
        tmp3 = closure_1(page, false);
      }
      return;
    }
  }
  const items16 = [tmp46, tmp47];
  ZoomLayoutPagerNativeTsx12.__closure = items16;
  ZoomLayoutPagerNativeTsx12.__workletHash = 10042999683418;
  ZoomLayoutPagerNativeTsx12.__initData = tmp45;
  const animatedReaction1 = require("../../../_runtime/metro/01652__.js").useAnimatedReaction(
    ZoomLayoutPagerNativeTsx11,
    ZoomLayoutPagerNativeTsx12,
  );
  const items17 = [width, height, callback2, sharedValue];
  const effect = obj.useEffect(() => {
    items = [closure_20, callback2, sharedValue];
    c0 = undefined;
    c1 = undefined;
    [tmp, tmp2, tmp3] = items;
    class ZoomLayoutPagerNativeTsx13 {
      constructor() {
        return closure_0(closure_1.get(), false);
      }
    }
    const items1 = [tmp2, tmp3];
    ZoomLayoutPagerNativeTsx13.__closure = items1;
    ZoomLayoutPagerNativeTsx13.__workletHash = 9355468723939;
    ZoomLayoutPagerNativeTsx13.__initData = tmp;
    _mod1705.scheduleOnUI(ZoomLayoutPagerNativeTsx13);
  }, items17);
  const imperativeHandle = obj.useImperativeHandle(pageCount.ref, () => ({
    goToPage(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      return c0(c2[6]).scheduleOnUI(callback2, arg0, flag);
    },
    getCurrentPage() {
      return sharedValue.get();
    },
  }));
  const items18 = [first, num3, pageCount];
  const memo2 = obj.useMemo(() => {
    let bound1;
    items = [];
    let bound = Math.max(0, first - c7);
    if (bound <= Math.min(c0 - 1, first + c7)) {
      do {
        let arr = items.push(bound);
        bound = bound + 1;
        let _Math = Math;
        bound1 = Math.min(c0 - 1, first + c7);
      } while (bound <= bound1);
    }
    return items;
  }, items18);
  const items19 = [width, height];
  const items20 = [width, height];
  const memo3 = obj.useMemo(() => {
    const size = { overflow: "hidden", width: _undefined4, height };
    return size;
  }, items19);
  closure_23 = obj.useMemo(() => {
    const size = { position: "absolute", top: 0, width: _undefined4, height };
    return size;
  }, items20);
  const tmp3Result3 = require("../../../_runtime/metro/01652__.js");
  const items21 = [callback2, sharedValue1, pageCount, width, height];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  height = undefined;
  [tmp52, tmp53, tmp54, tmp55, tmp56] = items21;
  class ZoomLayoutPagerNativeTsx14 {
    constructor() {
      size = { transform: null, width: null, height: null };
      obj1 = { translateX: closure_0.get() };
      items = [];
      items[0] = obj1;
      size.transform = items;
      size.width = closure_1 * closure_2;
      size.height = closure_3;
      return size;
    }
  }
  const items22 = [tmp53, tmp54, tmp55, tmp56];
  ZoomLayoutPagerNativeTsx14.__closure = items22;
  ZoomLayoutPagerNativeTsx14.__workletHash = 9683182820627;
  ZoomLayoutPagerNativeTsx14.__initData = tmp52;
  const animatedStyle = require("../../../_runtime/metro/01652__.js").useAnimatedStyle(ZoomLayoutPagerNativeTsx14);
  const obj6 = { gesture: memo1, children: null };
  const obj7 = { collapsable: false, style: memo3, children: null };
  const tmp3Result4 = require("../../../_runtime/metro/01652__.js");
  obj7.children = jsx(_modDef1652.View, {
    style: animatedStyle,
    children: memo2.map((item) => {
      obj = {
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
      items = [closure_23, { left: item * c3 }];
      obj.style = items;
      obj.children = _undefined8(item);
      return (
        <View key={item} accessibilityElementsHidden={item !== first} importantForAccessibility={null} style={null}>
          {null}
        </View>
      );
    }),
  });
  obj6.children = (
    <c5 collapsable={false} style={memo3}>
      {null}
    </c5>
  );
  return jsx(require("LegacyBaseButton").GestureDetector, { gesture: memo1, children: null });
});
