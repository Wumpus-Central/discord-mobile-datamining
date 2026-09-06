// === Module 1850: ? ===

// Module 1850
import cancelAnimation2 from "cancelAnimation" /* 1636 */;
import noop from "module_19" /* 19 */;

const cancelAnimation = cancelAnimation2;

require = fn;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;
let closure_4 = cancelAnimation.createAnimatedComponent(fn(1626).ClippingScrollView);
let closure_5 = { code: "function pnpm_indexTsx1(){const{inverted,bottomPadding,contentInset}=this.__closure;var _contentInset,_contentInset2,_contentInset3,_contentInset4;const dynamicTop=inverted?bottomPadding.value:0;const dynamicBottom=!inverted?bottomPadding.value:0;return{dynamic:{top:dynamicTop,bottom:dynamicBottom},effective:{top:dynamicTop+(((_contentInset=contentInset)===null||_contentInset===void 0?void 0:_contentInset.top)||0),bottom:dynamicBottom+(((_contentInset2=contentInset)===null||_contentInset2===void 0?void 0:_contentInset2.bottom)||0),left:((_contentInset3=contentInset)===null||_contentInset3===void 0?void 0:_contentInset3.left)||0,right:((_contentInset4=contentInset)===null||_contentInset4===void 0?void 0:_contentInset4.right)||0}};}" };
let closure_6 = { code: "function pnpm_indexTsx2(){const{insets}=this.__closure;return insets.value.effective;}" };
let closure_7 = { code: "function pnpm_indexTsx3(current,previous){const{onContentInsetChange,runOnJS}=this.__closure;if(!onContentInsetChange){return;}if(previous&&current.top===previous.top&&current.bottom===previous.bottom&&current.left===previous.left&&current.right===previous.right){return;}runOnJS(onContentInsetChange)(current);}" };
let value = { code: "function pnpm_indexTsx4(){const{insets,scrollIndicatorPadding,bottomPadding,inverted,scrollIndicatorInsets,contentOffsetY,prevContentOffsetY}=this.__closure;var _scrollIndicatorPaddi,_scrollIndicatorInset,_scrollIndicatorInset2,_scrollIndicatorInset3,_scrollIndicatorInset4;const{dynamic:dynamic,effective:effective}=insets.value;const indicatorPadding=(_scrollIndicatorPaddi=scrollIndicatorPadding)!==null&&_scrollIndicatorPaddi!==void 0?_scrollIndicatorPaddi:bottomPadding;const indicatorTop=(inverted?indicatorPadding.value:0)+(((_scrollIndicatorInset=scrollIndicatorInsets)===null||_scrollIndicatorInset===void 0?void 0:_scrollIndicatorInset.top)||0);const indicatorBottom=(!inverted?indicatorPadding.value:0)+(((_scrollIndicatorInset2=scrollIndicatorInsets)===null||_scrollIndicatorInset2===void 0?void 0:_scrollIndicatorInset2.bottom)||0);const result={contentInset:effective,scrollIndicatorInsets:{bottom:indicatorBottom,top:indicatorTop,right:(_scrollIndicatorInset3=scrollIndicatorInsets)===null||_scrollIndicatorInset3===void 0?void 0:_scrollIndicatorInset3.right,left:(_scrollIndicatorInset4=scrollIndicatorInsets)===null||_scrollIndicatorInset4===void 0?void 0:_scrollIndicatorInset4.left},contentInsetBottom:dynamic.bottom,contentInsetTop:dynamic.top};if(contentOffsetY){const curr=contentOffsetY.value;if(curr!==prevContentOffsetY.value){prevContentOffsetY.value=curr;result.contentOffset={x:0,y:curr};}}return result;}" };

export default fn(19).forwardRef((bottomPadding, ref) => {
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
  let obj1 = bottomPadding(contentInset[3]);
  class T {
    constructor() {
      num = 0;
      tmp = inverted;
      if (inverted) {
        tmp2 = bottomPadding;
        num = bottomPadding.value;
      }
      num2 = 0;
      if (!tmp) {
        tmp3 = bottomPadding;
        num2 = bottomPadding.value;
      }
      obj = { dynamic: { top: num, bottom: num2 }, effective: null };
      rect = contentInset;
      num3 = undefined;
      if (contentInset != null) {
        num3 = rect.top;
      }
      if (!num3) {
        num3 = 0;
      }
      rect = { top: num + num3, bottom: null, left: null, right: null };
      num4 = undefined;
      if (rect != null) {
        num4 = rect.bottom;
      }
      if (!num4) {
        num4 = 0;
      }
      rect.bottom = num2 + num4;
      num5 = undefined;
      if (rect != null) {
        num5 = rect.left;
      }
      if (!num5) {
        num5 = 0;
      }
      rect.left = num5;
      num6 = undefined;
      if (rect != null) {
        num6 = rect.right;
      }
      if (!num6) {
        num6 = 0;
      }
      rect.right = num6;
      obj.effective = rect;
      return obj;
    }
  }
  T.__closure = { inverted, bottomPadding, contentInset };
  T.__workletHash = 788035152099;
  T.__initData = contentOffsetY;
  const items = [inverted, , , , ];
  let top;
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
  derivedValue = obj1.useDerivedValue(T, items);
  let tmp2Result = tmp2(tmp3[3]);
  class B {
    constructor() {
      return closure_8.value.effective;
    }
  }
  B.__closure = { insets: derivedValue };
  B.__workletHash = 3359315898790;
  B.__initData = onContentInsetChange;
  const fn = function x(top, top2) {
    if (onContentInsetChange) {
      let tmp4 = top2;
      if (top2) {
        tmp4 = top.top === top2.top;
      }
      if (tmp4) {
        tmp4 = top.bottom === top2.bottom;
      }
      if (tmp4) {
        tmp4 = top.left === top2.left;
      }
      if (tmp4) {
        tmp4 = top.right === top2.right;
      }
      if (!tmp4) {
        cancelAnimation2.runOnJS(tmp)(top);
      }
    }
  };
  obj = { onContentInsetChange, runOnJS: tmp2(tmp3[3]).runOnJS };
  fn.__closure = obj;
  fn.__workletHash = 12461544130657;
  fn.__initData = sharedValue;
  const items1 = [onContentInsetChange];
  const animatedReaction = tmp2Result.useAnimatedReaction(B, fn, items1);
  tmp2Result = tmp2(tmp3[3]);
  const fn2 = function w() {
    value = derivedValue.value;
    let iter = scrollIndicatorPadding;
    if (scrollIndicatorPadding == null) {
      iter = bottomPadding;
    }
    let num = 0;
    if (inverted) {
      num = iter.value;
    }
    let rect = scrollIndicatorInsets;
    let num2;
    if (scrollIndicatorInsets != null) {
      num2 = rect.top;
    }
    if (!num2) {
      num2 = 0;
    }
    const obj = { contentInset: value.effective, scrollIndicatorInsets: null, contentInsetBottom: null, contentInsetTop: null };
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
    rect = { bottom: num3 + num4, top: sum, right: null, left: null };
    let right;
    if (rect != null) {
      right = rect.right;
    }
    rect.right = right;
    let left;
    if (rect != null) {
      left = rect.left;
    }
    rect.left = left;
    obj.scrollIndicatorInsets = rect;
    ({ bottom: obj.contentInsetBottom, top: obj.contentInsetTop } = value.dynamic);
    if (contentOffsetY) {
      value = contentOffsetY.value;
      if (value !== sharedValue.value) {
        sharedValue.value = value;
        const point = { x: 0, y: value };
        obj.contentOffset = point;
      }
    }
    return obj;
  };
  fn2.__closure = { insets: derivedValue, scrollIndicatorPadding, bottomPadding, inverted, scrollIndicatorInsets, contentOffsetY, prevContentOffsetY: sharedValue };
  fn2.__workletHash = 909305568735;
  fn2.__initData = derivedValue;
  let bottom1;
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
  const animatedProps = tmp2Result.useAnimatedProps(fn2, items2);
  obj = { animatedProps, applyWorkaroundForContentInsetHitTestBug, style: scrollIndicatorPadding(tmp3[5]).container, children: null };
  obj1 = { ref, animatedProps };
  const merged1 = Object.assign(merged);
  obj1.children = children;
  obj.children = scrollIndicatorInsets(ScrollViewComponent, obj1);
  return scrollIndicatorInsets(inverted, obj);
});