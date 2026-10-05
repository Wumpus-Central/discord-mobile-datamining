// === Module 1857: ? ===

// Module 1857
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardControllerNative from "KeyboardControllerNative" /* 1633 */;
import _mod1643 from "module_1643" /* 1643 */;

const cancelAnimation = _mod1643;

const forwardRef = react2.forwardRef;
const Platform = react_native.Platform;
const jsx = Fragment.jsx;
let closure_4 = cancelAnimation.createAnimatedComponent(KeyboardControllerNative.ClippingScrollView);
let closure_5 = { code: "function pnpm_indexTsx1(){const{inverted,bottomPadding,contentInset}=this.__closure;var _contentInset,_contentInset2,_contentInset3,_contentInset4;const dynamicTop=inverted?bottomPadding.value:0;const dynamicBottom=!inverted?bottomPadding.value:0;return{dynamic:{top:dynamicTop,bottom:dynamicBottom},effective:{top:dynamicTop+(((_contentInset=contentInset)===null||_contentInset===void 0?void 0:_contentInset.top)||0),bottom:dynamicBottom+(((_contentInset2=contentInset)===null||_contentInset2===void 0?void 0:_contentInset2.bottom)||0),left:((_contentInset3=contentInset)===null||_contentInset3===void 0?void 0:_contentInset3.left)||0,right:((_contentInset4=contentInset)===null||_contentInset4===void 0?void 0:_contentInset4.right)||0}};}" };
let closure_6 = { code: "function pnpm_indexTsx2(){const{insets}=this.__closure;return insets.value.effective;}" };
let closure_7 = { code: "function pnpm_indexTsx3(current,previous){const{onContentInsetChange,runOnJS}=this.__closure;if(!onContentInsetChange){return;}if(previous&&current.top===previous.top&&current.bottom===previous.bottom&&current.left===previous.left&&current.right===previous.right){return;}runOnJS(onContentInsetChange)(current);}" };
let value = { code: "function pnpm_indexTsx4(){const{insets,scrollIndicatorPadding,bottomPadding,inverted,scrollIndicatorInsets,contentOffsetY,prevContentOffsetY}=this.__closure;var _scrollIndicatorPaddi,_scrollIndicatorInset,_scrollIndicatorInset2,_scrollIndicatorInset3,_scrollIndicatorInset4;const{dynamic:dynamic,effective:effective}=insets.value;const indicatorPadding=(_scrollIndicatorPaddi=scrollIndicatorPadding)!==null&&_scrollIndicatorPaddi!==void 0?_scrollIndicatorPaddi:bottomPadding;const indicatorTop=(inverted?indicatorPadding.value:0)+(((_scrollIndicatorInset=scrollIndicatorInsets)===null||_scrollIndicatorInset===void 0?void 0:_scrollIndicatorInset.top)||0);const indicatorBottom=(!inverted?indicatorPadding.value:0)+(((_scrollIndicatorInset2=scrollIndicatorInsets)===null||_scrollIndicatorInset2===void 0?void 0:_scrollIndicatorInset2.bottom)||0);const result={contentInset:effective,scrollIndicatorInsets:{bottom:indicatorBottom,top:indicatorTop,right:(_scrollIndicatorInset3=scrollIndicatorInsets)===null||_scrollIndicatorInset3===void 0?void 0:_scrollIndicatorInset3.right,left:(_scrollIndicatorInset4=scrollIndicatorInsets)===null||_scrollIndicatorInset4===void 0?void 0:_scrollIndicatorInset4.left},contentInsetBottom:dynamic.bottom,contentInsetTop:dynamic.top};if(contentOffsetY){const curr=contentOffsetY.value;if(curr!==prevContentOffsetY.value){prevContentOffsetY.value=curr;result.contentOffset={x:0,y:curr};}}return result;}" };

export default forwardRef((bottomPadding, ref) => {
  let ScrollViewComponent;
  let applyWorkaroundForContentInsetHitTestBug;
  let children;
  let obj4;
  bottomPadding = bottomPadding.bottomPadding;
  const scrollIndicatorPadding = bottomPadding.scrollIndicatorPadding;
  const contentInset = bottomPadding.contentInset;
  const scrollIndicatorInsets = bottomPadding.scrollIndicatorInsets;
  const inverted = bottomPadding.inverted;
  const contentOffsetY = bottomPadding.contentOffsetY;
  const onContentInsetChange = bottomPadding.onContentInsetChange;
  ({ ScrollViewComponent, applyWorkaroundForContentInsetHitTestBug, children } = bottomPadding);
  const merged = Object.assign(bottomPadding, Object.assign({ ScrollViewComponent: 0, bottomPadding: 0, scrollIndicatorPadding: 0, contentInset: 0, scrollIndicatorInsets: 0, inverted: 0, contentOffsetY: 0, applyWorkaroundForContentInsetHitTestBug: 0, onContentInsetChange: 0, children: 0 }));
  let derivedValue;
  let obj = bottomPadding(contentInset[3]);
  const sharedValue = obj.useSharedValue(null);
  const tmp5 = bottomPadding(contentInset[3]);
  class T {
    constructor() {
      let num4;
      let num5;
      let num6;
      let rect1;
      let num = 0;
      if (inverted) {
        num = bottomPadding.value;
      }
      let num2 = 0;
      if (!inverted) {
        num2 = bottomPadding.value;
      }
      const rect = contentInset;
      let num3;
      const obj = { dynamic: { top: num, bottom: num2 }, effective: rect1 };
      if (contentInset != null) {
        num3 = rect.top;
      }
      if (!num3) {
        num3 = 0;
      }
      rect1 = { top: num + num3, bottom: num2 + num4, left: num5, right: num6 };
      num4 = undefined;
      if (rect != null) {
        num4 = rect.bottom;
      }
      if (!num4) {
        num4 = 0;
      }
      num5 = undefined;
      if (rect != null) {
        num5 = rect.left;
      }
      if (!num5) {
        num5 = 0;
      }
      num6 = undefined;
      if (rect != null) {
        num6 = rect.right;
      }
      if (!num6) {
        num6 = 0;
      }
      return obj;
    }
  }
  T.__closure = { inverted, bottomPadding, contentInset };
  T.__workletHash = 788035152099;
  T.__initData = contentOffsetY;
  const items = [inverted, , , , ];
  let top;
  const useDerivedValue = tmp5.useDerivedValue;
  if (contentInset != null) {
    top = contentInset.top;
  }
  items[1] = top;
  let bottom;
  if (contentInset != null) {
    bottom = contentInset.bottom;
  }
  items[2] = bottom;
  let left;
  if (contentInset != null) {
    left = contentInset.left;
  }
  items[3] = left;
  let right;
  if (contentInset != null) {
    right = contentInset.right;
  }
  items[4] = right;
  derivedValue = useDerivedValue(T, items);
  const tmp2Result = bottomPadding(contentInset[3]);
  class B {
    constructor() {
      return derivedValue.value.effective;
    }
  }
  B.__closure = { insets: derivedValue };
  B.__workletHash = 3359315898790;
  B.__initData = onContentInsetChange;
  const fn = function x(top, top2) {
    if (onContentInsetChange) {
      const tmp4 = top2 && top.top === top2.top && top.bottom === top2.bottom && top.left === top2.left && top.right === top2.right;
      if (!tmp4) {
        const obj = _mod1643;
        obj.runOnJS(tmp)(top);
      }
    }
  };
  fn.__closure = { onContentInsetChange, runOnJS: bottomPadding(contentInset[3]).runOnJS };
  fn.__workletHash = 12461544130657;
  fn.__initData = sharedValue;
  const items1 = [onContentInsetChange];
  ({ onContentInsetChange, runOnJS: bottomPadding(contentInset[3]).runOnJS });
  const animatedReaction = tmp2Result.useAnimatedReaction(B, fn, items1);
  const fn2 = function w() {
    let left;
    let rect1;
    let right;
    value = derivedValue.value;
    const dynamic = value.dynamic;
    let iter = scrollIndicatorPadding;
    const effective = value.effective;
    if (scrollIndicatorPadding == null) {
      iter = bottomPadding;
    }
    let num = 0;
    if (inverted) {
      num = iter.value;
    }
    const rect = scrollIndicatorInsets;
    let num2;
    if (scrollIndicatorInsets != null) {
      num2 = rect.top;
    }
    if (!num2) {
      num2 = 0;
    }
    const obj = { contentInset: effective, scrollIndicatorInsets: rect1, contentInsetBottom: null, contentInsetTop: null };
    let num3 = 0;
    const sum = num + num2;
    if (!inverted) {
      num3 = iter.value;
    }
    let num4;
    if (rect != null) {
      num4 = rect.bottom;
    }
    if (!num4) {
      num4 = 0;
    }
    rect1 = { bottom: num3 + num4, top: sum, right, left };
    right = undefined;
    if (rect != null) {
      right = rect.right;
    }
    left = undefined;
    if (rect != null) {
      left = rect.left;
    }
    ({ bottom: obj.contentInsetBottom, top: obj.contentInsetTop } = dynamic);
    if (contentOffsetY) {
      const value2 = contentOffsetY.value;
      if (value2 !== sharedValue.value) {
        sharedValue.value = value2;
        const point = { x: 0, y: value2 };
        obj.contentOffset = point;
      }
    }
    return obj;
  };
  fn2.__closure = { insets: derivedValue, scrollIndicatorPadding, bottomPadding, inverted, scrollIndicatorInsets, contentOffsetY, prevContentOffsetY: sharedValue };
  fn2.__workletHash = 909305568735;
  fn2.__initData = derivedValue;
  let bottom1;
  const useAnimatedProps = tmp2(tmp3[3]).useAnimatedProps;
  bottomPadding(contentInset[3]);
  if (scrollIndicatorInsets != null) {
    bottom1 = scrollIndicatorInsets.bottom;
  }
  const items2 = [bottom1, , , , , ];
  let top1;
  if (scrollIndicatorInsets != null) {
    top1 = scrollIndicatorInsets.top;
  }
  items2[1] = top1;
  let right1;
  if (scrollIndicatorInsets != null) {
    right1 = scrollIndicatorInsets.right;
  }
  items2[2] = right1;
  let left1;
  if (scrollIndicatorInsets != null) {
    left1 = scrollIndicatorInsets.left;
  }
  items2[3] = left1;
  items2[4] = inverted;
  items2[5] = contentOffsetY;
  const animatedProps = useAnimatedProps(fn2, items2);
  const obj3 = { animatedProps, applyWorkaroundForContentInsetHitTestBug, style: scrollIndicatorPadding(contentInset[5]).container, children: scrollIndicatorInsets(ScrollViewComponent, obj4) };
  obj4 = { ref, animatedProps, children };
  const merged1 = Object.assign(merged);
  return scrollIndicatorInsets(inverted, obj3);
});