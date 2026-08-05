// _runtime/01791_createViewDescriptorPaper.js
import isJest from "isJest";

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
if (isJest.isFabric()) {
  createViewDescriptorPaper = createViewDescriptorFabric;
}
function applyStyleForTopScreen(screenTransition) {
  const obj = { value: null };
  const items = [createViewDescriptorPaper(screenTransition.topScreenId)];
  obj[0] = items;
  const topScreenStyleResult = screenTransition.screenTransition.topScreenStyle(arg1, screenTransition.screenDimensions);
  require(1706) /* updateProps */.updateProps(obj, topScreenStyleResult, undefined);
}
let obj = { createViewDescriptor: createViewDescriptorPaper, updateProps: require("updateProps").updateProps };
applyStyleForTopScreen.__closure = obj;
applyStyleForTopScreen.__workletHash = 541570832073;
applyStyleForTopScreen.__initData = { code: "function applyStyleForTopScreen_Pnpm_styleUpdaterTs3(screenTransitionConfig,event){const{createViewDescriptor,updateProps}=this.__closure;const{screenDimensions:screenDimensions,topScreenId:topScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{topScreenStyle:computeTopScreenStyle}=screenTransition;const topScreenStyle=computeTopScreenStyle(event,screenDimensions);const topScreenDescriptor={value:[createViewDescriptor(topScreenId)]};updateProps(topScreenDescriptor,topScreenStyle,undefined);}" };
function applyStyleForBelowTopScreen(screenTransition, arg1) {
  const obj = { value: null };
  const items = [createViewDescriptorPaper(screenTransition.belowTopScreenId)];
  obj[0] = items;
  const belowTopScreenStyleResult = screenTransition.screenTransition.belowTopScreenStyle(arg1, screenTransition.screenDimensions);
  require(1706) /* updateProps */.updateProps(obj, belowTopScreenStyleResult, undefined);
}
obj = { createViewDescriptor: createViewDescriptorPaper, updateProps: require("updateProps").updateProps };
applyStyleForBelowTopScreen.__closure = obj;
applyStyleForBelowTopScreen.__workletHash = 1349027100765;
applyStyleForBelowTopScreen.__initData = { code: "function applyStyleForBelowTopScreen_Pnpm_styleUpdaterTs4(screenTransitionConfig,event){const{createViewDescriptor,updateProps}=this.__closure;const{screenDimensions:screenDimensions,belowTopScreenId:belowTopScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{belowTopScreenStyle:computeBelowTopScreenStyle}=screenTransition;const belowTopScreenStyle=computeBelowTopScreenStyle(event,screenDimensions);const belowTopScreenDescriptor={value:[createViewDescriptor(belowTopScreenId)]};updateProps(belowTopScreenDescriptor,belowTopScreenStyle,undefined);}" };
function applyStyle(closure_1, value) {
  if (typeof applyStyleForTopScreen !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let obj = { value: null };
  const items = [createViewDescriptorPaper(closure_1.topScreenId)];
  obj[0] = items;
  const tmp2 = createViewDescriptorPaper;
  const tmp3 = require;
  const topScreenStyleResult = closure_1.screenTransition.topScreenStyle(value, closure_1.screenDimensions);
  require(1706) /* updateProps */.updateProps(obj, topScreenStyleResult, undefined);
  if (typeof applyStyleForBelowTopScreen !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = { value: null };
  const obj2 = require(1706) /* updateProps */;
  const items1 = [tmp2(closure_1.belowTopScreenId)];
  obj[0] = items1;
  const belowTopScreenStyleResult = closure_1.screenTransition.belowTopScreenStyle(value, closure_1.screenDimensions);
  tmp3(1706).updateProps(obj, belowTopScreenStyleResult, undefined);
}
applyStyle.__closure = { applyStyleForTopScreen, applyStyleForBelowTopScreen };
applyStyle.__workletHash = 7852442865245;
applyStyle.__initData = { code: "function applyStyle_Pnpm_styleUpdaterTs5(screenTransitionConfig,event){const{applyStyleForTopScreen,applyStyleForBelowTopScreen}=this.__closure;applyStyleForTopScreen(screenTransitionConfig,event);applyStyleForBelowTopScreen(screenTransitionConfig,event);}" };

export { applyStyleForBelowTopScreen };
export { applyStyle };