// === Module 1993: ? ===

// Module 1993
import _mod1652 from "module_1652" /* 1652 */;
import _modDef1994 from "module_1994" /* 1994 */;
import noop from "module_19" /* 19 */;

const module_1652 = _mod1652;

require = fn;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;
let closure_4 = module_1652.createAnimatedComponent(fn(1642).ClippingScrollView);
let closure_5 = { code: "(function pnpm_indexTsx1(){let[inverted,bottomPadding,contentInset]=this.__closure;var _contentInset,_contentInset2,_contentInset3,_contentInset4;const dynamicTop=inverted?bottomPadding.value:0;const dynamicBottom=!inverted?bottomPadding.value:0;return{dynamic:{top:dynamicTop,bottom:dynamicBottom},effective:{top:dynamicTop+(((_contentInset=contentInset)===null||_contentInset===void 0?void 0:_contentInset.top)||0),bottom:dynamicBottom+(((_contentInset2=contentInset)===null||_contentInset2===void 0?void 0:_contentInset2.bottom)||0),left:((_contentInset3=contentInset)===null||_contentInset3===void 0?void 0:_contentInset3.left)||0,right:((_contentInset4=contentInset)===null||_contentInset4===void 0?void 0:_contentInset4.right)||0}};})" };
let closure_6 = { code: "(function pnpm_indexTsx2(){let[insets]=this.__closure;return insets.value.effective;})" };
let closure_7 = { code: "(function pnpm_indexTsx3(current,previous){let[onContentInsetChange,runOnJS]=this.__closure;if(!onContentInsetChange){return;}if(previous&&current.top===previous.top&&current.bottom===previous.bottom&&current.left===previous.left&&current.right===previous.right){return;}runOnJS(onContentInsetChange)(current);})" };
let closure_8 = { code: "(function pnpm_indexTsx4(){let[insets,scrollIndicatorPadding,bottomPadding,inverted,scrollIndicatorInsets,contentOffsetY,prevContentOffsetY]=this.__closure;var _scrollIndicatorPaddi,_scrollIndicatorInset,_scrollIndicatorInset2,_scrollIndicatorInset3,_scrollIndicatorInset4;const{dynamic:dynamic,effective:effective}=insets.value;const indicatorPadding=(_scrollIndicatorPaddi=scrollIndicatorPadding)!==null&&_scrollIndicatorPaddi!==void 0?_scrollIndicatorPaddi:bottomPadding;const indicatorTop=(inverted?indicatorPadding.value:0)+(((_scrollIndicatorInset=scrollIndicatorInsets)===null||_scrollIndicatorInset===void 0?void 0:_scrollIndicatorInset.top)||0);const indicatorBottom=(!inverted?indicatorPadding.value:0)+(((_scrollIndicatorInset2=scrollIndicatorInsets)===null||_scrollIndicatorInset2===void 0?void 0:_scrollIndicatorInset2.bottom)||0);const result={contentInset:effective,scrollIndicatorInsets:{bottom:indicatorBottom,top:indicatorTop,right:(_scrollIndicatorInset3=scrollIndicatorInsets)===null||_scrollIndicatorInset3===void 0?void 0:_scrollIndicatorInset3.right,left:(_scrollIndicatorInset4=scrollIndicatorInsets)===null||_scrollIndicatorInset4===void 0?void 0:_scrollIndicatorInset4.left},contentInsetBottom:dynamic.bottom,contentInsetTop:dynamic.top};if(contentOffsetY){const curr=contentOffsetY.value;if(curr!==prevContentOffsetY.value){prevContentOffsetY.value=curr;result.contentOffset={x:0,y:curr};}}return result;})" };

export default fn(19).forwardRef((arg0, ref) => {
  ({ bottomPadding, contentInset, scrollIndicatorInsets, inverted, contentOffsetY, onContentInsetChange } = arg0);
  ({ ScrollViewComponent, scrollIndicatorPadding, applyWorkaroundForContentInsetHitTestBug, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ ScrollViewComponent: 0, bottomPadding: 0, scrollIndicatorPadding: 0, contentInset: 0, scrollIndicatorInsets: 0, inverted: 0, contentOffsetY: 0, applyWorkaroundForContentInsetHitTestBug: 0, onContentInsetChange: 0, children: 0 }));
  const sharedValue = _mod1652.useSharedValue(null);
  items = [_undefined3, inverted, bottomPadding, contentInset];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp5, tmp6, tmp7, tmp8] = items;
  function pnpm_indexTsx1() {
    let num = 0;
    if (c0) {
      num = _undefined2.value;
    }
    let num2 = 0;
    if (!c0) {
      num2 = _undefined2.value;
    }
    const obj = { dynamic: { top: num, bottom: num2 }, effective: null };
    const rect = c2;
    let num3;
    if (c2 != null) {
      num3 = rect.top;
    }
    if (!num3) {
      num3 = 0;
    }
    const rect1 = { top: num + num3, bottom: null, left: null, right: null };
    let num4;
    if (rect != null) {
      num4 = rect.bottom;
    }
    if (!num4) {
      num4 = 0;
    }
    rect1.bottom = num2 + num4;
    let num5;
    if (rect != null) {
      num5 = rect.left;
    }
    if (!num5) {
      num5 = 0;
    }
    rect1.left = num5;
    let num6;
    if (rect != null) {
      num6 = rect.right;
    }
    if (!num6) {
      num6 = 0;
    }
    rect1.right = num6;
    obj.effective = rect1;
    return obj;
  }
  const items1 = [tmp6, tmp7, tmp8];
  pnpm_indexTsx1.__closure = items1;
  pnpm_indexTsx1.__workletHash = 4530674049402;
  pnpm_indexTsx1.__initData = tmp5;
  const items2 = [inverted, , , , ];
  let top;
  if (contentInset != null) {
    top = contentInset.top;
  }
  items2[1] = top;
  let bottom;
  if (contentInset != null) {
    bottom = contentInset.bottom;
  }
  items2[2] = bottom;
  let left;
  if (contentInset != null) {
    left = contentInset.left;
  }
  items2[3] = left;
  let right;
  if (contentInset != null) {
    right = contentInset.right;
  }
  items2[4] = right;
  const derivedValue = _mod1652.useDerivedValue(pnpm_indexTsx1, items2);
  const items3 = [_undefined4, derivedValue];
  [tmp14, tmp15] = items3;
  function pnpm_indexTsx2() {
    return _undefined.value.effective;
  }
  const items4 = [tmp15];
  pnpm_indexTsx2.__closure = items4;
  pnpm_indexTsx2.__workletHash = 5140086364767;
  pnpm_indexTsx2.__initData = tmp14;
  const items5 = [closure_7, onContentInsetChange, _mod1652.runOnJS];
  [tmp16, tmp17, tmp18] = items5;
  function pnpm_indexTsx3(top, top2) {
    if (c0) {
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
        _undefined2(tmp)(top);
      }
    }
  }
  const items6 = [tmp17, tmp18];
  pnpm_indexTsx3.__closure = items6;
  pnpm_indexTsx3.__workletHash = 9660379911352;
  pnpm_indexTsx3.__initData = tmp16;
  const items7 = [onContentInsetChange];
  const animatedReaction = _mod1652.useAnimatedReaction(pnpm_indexTsx2, pnpm_indexTsx3, items7);
  const tmp2Result = _mod1652;
  const items8 = [closure_8, derivedValue, scrollIndicatorPadding, bottomPadding, inverted, scrollIndicatorInsets, contentOffsetY, sharedValue];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items8;
  function pnpm_indexTsx4() {
    value = _undefined.value;
    let iter = c1;
    if (c1 == null) {
      iter = c2;
    }
    let num = 0;
    if (c3) {
      num = iter.value;
    }
    const rect = c4;
    let num2;
    if (c4 != null) {
      num2 = rect.top;
    }
    if (!num2) {
      num2 = 0;
    }
    const obj = { contentInset: value.effective, scrollIndicatorInsets: null, contentInsetBottom: null, contentInsetTop: null };
    let num3 = 0;
    const sum = num + num2;
    if (!c3) {
      num3 = iter.value;
    }
    let num4;
    if (rect != null) {
      num4 = rect.bottom;
    }
    if (!num4) {
      num4 = 0;
    }
    const rect1 = { bottom: num3 + num4, top: sum, right: null, left: null };
    let right;
    if (rect != null) {
      right = rect.right;
    }
    rect1.right = right;
    let left;
    if (rect != null) {
      left = rect.left;
    }
    rect1.left = left;
    obj.scrollIndicatorInsets = rect1;
    ({ bottom: obj.contentInsetBottom, top: obj.contentInsetTop } = value.dynamic);
    if (_undefined3) {
      value2 = _undefined3.value;
      if (value2 !== _undefined4.value) {
        _undefined4.value = value2;
        const point = { x: 0, y: value2 };
        obj.contentOffset = point;
      }
    }
    return obj;
  }
  const items9 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  pnpm_indexTsx4.__closure = items9;
  pnpm_indexTsx4.__workletHash = 13506688530662;
  pnpm_indexTsx4.__initData = tmp20;
  let bottom1;
  if (scrollIndicatorInsets != null) {
    bottom1 = scrollIndicatorInsets.bottom;
  }
  const items10 = [bottom1, , , , , ];
  let top1;
  if (scrollIndicatorInsets != null) {
    top1 = scrollIndicatorInsets.top;
  }
  items10[1] = top1;
  let right1;
  if (scrollIndicatorInsets != null) {
    right1 = scrollIndicatorInsets.right;
  }
  items10[2] = right1;
  let left1;
  if (scrollIndicatorInsets != null) {
    left1 = scrollIndicatorInsets.left;
  }
  items10[3] = left1;
  items10[4] = inverted;
  items10[5] = contentOffsetY;
  const animatedProps = _mod1652.useAnimatedProps(pnpm_indexTsx4, items10);
  const obj3 = { animatedProps, applyWorkaroundForContentInsetHitTestBug, style: _modDef1994.container, children: null };
  const obj4 = { ref, animatedProps };
  const merged1 = Object.assign(merged);
  obj4.children = children;
  obj3.children = <ScrollViewComponent ref={ref} animatedProps={animatedProps} />;
  return <closure_4 animatedProps={animatedProps} applyWorkaroundForContentInsetHitTestBug={applyWorkaroundForContentInsetHitTestBug} style={_modDef1994.container}>{null}</closure_4>;
});