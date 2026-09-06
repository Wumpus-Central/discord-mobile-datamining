// _runtime/01821_applyStyle.js
import _mod1736 from "metro/01736__.js";
import 01639__ from "metro/01639__.js";

function createViewDescriptorPaper(topScreenId) {
  return { tag: topScreenId, name: "RCTView" };
}
createViewDescriptorPaper.__closure = {};
createViewDescriptorPaper.__workletHash = 10248318774025;
createViewDescriptorPaper.__initData = { code: "function createViewDescriptorPaper_Pnpm_styleUpdaterTs1(screenId){return{tag:screenId,name:'RCTView'};}" };
function createViewDescriptorFabric(shadowNodeWrapper) {
  return { shadowNodeWrapper };
}
createViewDescriptorFabric.__closure = {};
createViewDescriptorFabric.__workletHash = 2882608262143;
createViewDescriptorFabric.__initData = { code: "function createViewDescriptorFabric_Pnpm_styleUpdaterTs2(screenId){return{shadowNodeWrapper:screenId};}" };
if (module_1639.isFabric()) {
  createViewDescriptorPaper = createViewDescriptorFabric;
}
function applyStyleForTopScreen(screenTransition, arg1) {
  const obj = { value: null };
  const items = [createViewDescriptorPaper(screenTransition.topScreenId)];
  obj.value = items;
  const topScreenStyleResult = screenTransition.screenTransition.topScreenStyle(arg1, screenTransition.screenDimensions);
  _mod1736.updateProps(obj, topScreenStyleResult, undefined);
}
let obj = { createViewDescriptor: createViewDescriptorPaper, updateProps: _mod1736.updateProps };
applyStyleForTopScreen.__closure = obj;
applyStyleForTopScreen.__workletHash = 541570832073;
applyStyleForTopScreen.__initData = { code: "function applyStyleForTopScreen_Pnpm_styleUpdaterTs3(screenTransitionConfig,event){const{createViewDescriptor,updateProps}=this.__closure;const{screenDimensions:screenDimensions,topScreenId:topScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{topScreenStyle:computeTopScreenStyle}=screenTransition;const topScreenStyle=computeTopScreenStyle(event,screenDimensions);const topScreenDescriptor={value:[createViewDescriptor(topScreenId)]};updateProps(topScreenDescriptor,topScreenStyle,undefined);}" };
function applyStyleForBelowTopScreen(screenTransition, value) {
  const obj = { value: null };
  const items = [createViewDescriptorPaper(screenTransition.belowTopScreenId)];
  obj.value = items;
  const belowTopScreenStyleResult = screenTransition.screenTransition.belowTopScreenStyle(value, screenTransition.screenDimensions);
  _mod1736.updateProps(obj, belowTopScreenStyleResult, undefined);
}
obj = { createViewDescriptor: createViewDescriptorPaper, updateProps: _mod1736.updateProps };
applyStyleForBelowTopScreen.__closure = obj;
applyStyleForBelowTopScreen.__workletHash = 1349027100765;
applyStyleForBelowTopScreen.__initData = { code: "function applyStyleForBelowTopScreen_Pnpm_styleUpdaterTs4(screenTransitionConfig,event){const{createViewDescriptor,updateProps}=this.__closure;const{screenDimensions:screenDimensions,belowTopScreenId:belowTopScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{belowTopScreenStyle:computeBelowTopScreenStyle}=screenTransition;const belowTopScreenStyle=computeBelowTopScreenStyle(event,screenDimensions);const belowTopScreenDescriptor={value:[createViewDescriptor(belowTopScreenId)]};updateProps(belowTopScreenDescriptor,belowTopScreenStyle,undefined);}" };
function applyStyle(screenTransition, value) {
  if (typeof applyStyleForTopScreen === "function") {
    let obj = { value: null };
    const items = [createViewDescriptorPaper(screenTransition.topScreenId)];
    obj.value = items;
    const topScreenStyleResult = screenTransition.screenTransition.topScreenStyle(value, screenTransition.screenDimensions);
    _mod1736.updateProps(obj, topScreenStyleResult, undefined);
    if (typeof applyStyleForBelowTopScreen === "function") {
      obj = { value: null };
      const items1 = [createViewDescriptorPaper(screenTransition.belowTopScreenId)];
      obj.value = items1;
      const belowTopScreenStyleResult = screenTransition.screenTransition.belowTopScreenStyle(value, screenTransition.screenDimensions);
      _mod1736.updateProps(obj, belowTopScreenStyleResult, undefined);
      const tmp5Result = _mod1736;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
applyStyle.__closure = { applyStyleForTopScreen, applyStyleForBelowTopScreen };
applyStyle.__workletHash = 7852442865245;
applyStyle.__initData = { code: "function applyStyle_Pnpm_styleUpdaterTs5(screenTransitionConfig,event){const{applyStyleForTopScreen,applyStyleForBelowTopScreen}=this.__closure;applyStyleForTopScreen(screenTransitionConfig,event);applyStyleForBelowTopScreen(screenTransitionConfig,event);}" };

export { applyStyleForBelowTopScreen };
export { applyStyle };