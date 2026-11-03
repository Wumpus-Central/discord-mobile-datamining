// _runtime/metro/01963__.js
import _mod1835 from "01835__.js";

let items = [
  { code: "(function createViewDescriptor_Pnpm_styleUpdaterTs1(screenId){return{shadowNodeWrapper:screenId};})" },
];
[tmp2] = items;
function createViewDescriptor(shadowNodeWrapper) {
  return { shadowNodeWrapper };
}
createViewDescriptor.__workletHash = 10842686220160;
createViewDescriptor.__initData = tmp2;
const items1 = [
  {
    code: "(function applyStyleForTopScreen_Pnpm_styleUpdaterTs2(screenTransitionConfig,event){let[createViewDescriptor,updateProps]=this.__closure;const{screenDimensions:screenDimensions,topScreenId:topScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{topScreenStyle:computeTopScreenStyle}=screenTransition;const topScreenStyle=computeTopScreenStyle(event,screenDimensions);const topScreenDescriptor={value:[createViewDescriptor(topScreenId)]};updateProps(topScreenDescriptor,topScreenStyle,undefined);})",
  },
  createViewDescriptor,
  _mod1835.updateProps,
];
let c0;
let c1;
[tmp3, tmp4, tmp5] = items1;
function applyStyleForTopScreen(screenTransition, arg1) {
  const obj = { value: null };
  items = [_undefined(screenTransition.topScreenId)];
  obj.value = items;
  _undefined2(
    obj,
    screenTransition.screenTransition.topScreenStyle(arg1, screenTransition.screenDimensions),
    undefined,
  );
}
const items2 = [tmp4, tmp5];
applyStyleForTopScreen.__closure = items2;
applyStyleForTopScreen.__workletHash = 13369011521969;
applyStyleForTopScreen.__initData = tmp3;
const items3 = [
  {
    code: "(function applyStyleForBelowTopScreen_Pnpm_styleUpdaterTs3(screenTransitionConfig,event){let[createViewDescriptor,updateProps]=this.__closure;const{screenDimensions:screenDimensions,belowTopScreenId:belowTopScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{belowTopScreenStyle:computeBelowTopScreenStyle}=screenTransition;const belowTopScreenStyle=computeBelowTopScreenStyle(event,screenDimensions);const belowTopScreenDescriptor={value:[createViewDescriptor(belowTopScreenId)]};updateProps(belowTopScreenDescriptor,belowTopScreenStyle,undefined);})",
  },
  createViewDescriptor,
  _mod1835.updateProps,
];
let closure_129_0;
let closure_129_1;
[tmp6, tmp7, tmp8] = items3;
function applyStyleForBelowTopScreen(screenTransition, arg1) {
  const obj = { value: null };
  items = [_undefined(screenTransition.belowTopScreenId)];
  obj.value = items;
  _undefined2(
    obj,
    screenTransition.screenTransition.belowTopScreenStyle(arg1, screenTransition.screenDimensions),
    undefined,
  );
}
const items4 = [tmp7, tmp8];
applyStyleForBelowTopScreen.__closure = items4;
applyStyleForBelowTopScreen.__workletHash = 15881372991843;
applyStyleForBelowTopScreen.__initData = tmp6;
const items5 = [
  {
    code: "(function applyStyle_Pnpm_styleUpdaterTs4(screenTransitionConfig,event){let[applyStyleForTopScreen,applyStyleForBelowTopScreen]=this.__closure;applyStyleForTopScreen(screenTransitionConfig,event);applyStyleForBelowTopScreen(screenTransitionConfig,event);})",
  },
  applyStyleForTopScreen,
  applyStyleForBelowTopScreen,
];
let closure_130_0;
let closure_130_1;
[tmp9, tmp10, tmp11] = items5;
function applyStyle(arg0, arg1) {
  _undefined(arg0, arg1);
  _undefined2(arg0, arg1);
}
const items6 = [tmp10, tmp11];
applyStyle.__closure = items6;
applyStyle.__workletHash = 6907100812805;
applyStyle.__initData = tmp9;

export { applyStyleForBelowTopScreen };
export { applyStyle };
