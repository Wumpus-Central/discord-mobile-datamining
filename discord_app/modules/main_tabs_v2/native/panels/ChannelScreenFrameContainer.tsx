// === Module 18993: ChannelScreenFrameContainer ===

// Module 18993 (ChannelScreenFrameContainer)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5726 */;
import useAppFrameDefault from "useAppFrame" /* 18417 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
function FramedContainer(translateX) {
  translateX = translateX.translateX;
  ({ roundCorners, children } = translateX);
  const merged = Object.assign(translateX, Object.assign({ translateX: 0, roundCorners: 0, children: 0 }));
  const tmp2 = closure_8();
  const tmp5 = useAppFrameDefault().hasFrame && roundCorners;
  const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH);
  items = [closure_9, tmp5, translateX, nativeDefault];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp8, tmp9, tmp10, tmp11] = items;
  class ChannelScreenFrameContainerTsx1 {
    constructor() {
      borderRadius = 0;
      if (closure_0) {
        tmp = globalThis;
        _Math = Math;
        _Math2 = Math;
        tmp2 = closure_1;
        tmp3 = closure_2;
        borderRadius = Math.min(Math.max(closure_1.get(), 0), closure_2.radii.xl);
      }
      return { borderRadius };
    }
  }
  const items1 = [tmp9, tmp10, tmp11];
  ChannelScreenFrameContainerTsx1.__closure = items1;
  ChannelScreenFrameContainerTsx1.__workletHash = 6281290789316;
  ChannelScreenFrameContainerTsx1.__initData = tmp8;
  const animatedStyle = _mod1652.useAnimatedStyle(ChannelScreenFrameContainerTsx1);
  const items2 = [closure_10, translateX, nativeDefault, token];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items2;
  class ChannelScreenFrameContainerTsx2 {
    constructor() {
      obj = { borderRadius: Math.min(Math.max(closure_0.get(), 0), closure_1.radii.xl), borderLeftWidth: null };
      num = 0;
      if (closure_0.get() > 0) {
        num = closure_2;
      }
      obj.borderLeftWidth = num;
      return obj;
    }
  }
  const items3 = [tmp14, tmp15, tmp16];
  ChannelScreenFrameContainerTsx2.__closure = items3;
  ChannelScreenFrameContainerTsx2.__workletHash = 4924901768105;
  ChannelScreenFrameContainerTsx2.__initData = tmp13;
  const animatedStyle1 = _mod1652.useAnimatedStyle(ChannelScreenFrameContainerTsx2);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  const items4 = [StyleSheet.absoluteFill, , ];
  let clip;
  if (tmp5) {
    clip = tmp2.clip;
  }
  items4[1] = clip;
  items4[2] = animatedStyle;
  obj3.style = items4;
  obj3.children = children;
  const children1 = [hasOwnProperty(_modDef1652.View, obj3), ];
  let tmp20Result = null;
  if (tmp5) {
    const obj4 = { pointerEvents: "none", style: null };
    const items6 = [tmp2.border, animatedStyle1];
    obj4.style = items6;
    tmp20Result = hasOwnProperty(_modDef1652.View, obj4);
  }
  children1[1] = tmp20Result;
  return metroImportDefault(timestampProducer, { children: children1 });
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5142);
let obj2 = { clip: { overflow: "hidden" }, border: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderTopWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
obj3.borderColor = nativeDefault.colors.APP_FRAME_BORDER;
obj2.border = obj3;
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = { code: "(function ChannelScreenFrameContainerTsx1(){let[roundCorners,translateX,tokens]=this.__closure;return{borderRadius:roundCorners?Math.min(Math.max(translateX.get(),0),tokens.radii.xl):0};})" };
let closure_10 = { code: "(function ChannelScreenFrameContainerTsx2(){let[translateX,tokens,borderWidth]=this.__closure;return{borderRadius:Math.min(Math.max(translateX.get(),0),tokens.radii.xl),borderLeftWidth:translateX.get()>0?borderWidth:0};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenFrameContainer.tsx");

export default function ChannelScreenFrameContainer(arg0) {
  ({ translateX, roundCorners } = arg0);
  const merged = Object.assign(arg0, Object.assign({ translateX: 0, roundCorners: 0 }));
  if (obj.isDuo()) {
    const obj2 = { translateX, roundCorners };
    const merged1 = Object.assign(merged);
    let tmp2Result = hasOwnProperty(FramedContainer, obj2);
  } else {
    const obj3 = {};
    const merged2 = Object.assign(merged);
    obj3.style = StyleSheet.absoluteFill;
    tmp2Result = hasOwnProperty(View, obj3);
  }
  return tmp2Result;
};
export function ChannelScreenFrameTopBorder() {
  let tmp2 = null;
  if (useAppFrameDefault().hasFrame) {
    const obj = { pointerEvents: "none", style: tmp.border };
    tmp2 = hasOwnProperty(View, obj);
  }
  return tmp2;
}