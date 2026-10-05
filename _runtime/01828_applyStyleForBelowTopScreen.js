// === Module 1828: applyStyleForBelowTopScreen ===

// Module 1828 (applyStyleForBelowTopScreen)
import _mod1743 from "module_1743" /* 1743 */;
import module_1646 from "module_1646" /* 1646 */;

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
if (module_1646.isFabric()) {
  createViewDescriptorPaper = createViewDescriptorFabric;
}
function applyStyleForTopScreen(topScreenId, arg1) {
  let items;
  topScreenId = topScreenId.topScreenId;
  const obj = { value: items };
  items = [];
  const topScreenStyleResult = topScreenId.screenTransition.topScreenStyle(arg1, topScreenId.screenDimensions);
  items[0] = createViewDescriptorPaper(topScreenId);
  const obj2 = _mod1743;
  obj2.updateProps(obj, topScreenStyleResult, undefined);
}
let obj = { createViewDescriptor: createViewDescriptorPaper, updateProps: _mod1743.updateProps };
applyStyleForTopScreen.__closure = obj;
applyStyleForTopScreen.__workletHash = 541570832073;
applyStyleForTopScreen.__initData = { code: "function applyStyleForTopScreen_Pnpm_styleUpdaterTs3(screenTransitionConfig,event){const{createViewDescriptor,updateProps}=this.__closure;const{screenDimensions:screenDimensions,topScreenId:topScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{topScreenStyle:computeTopScreenStyle}=screenTransition;const topScreenStyle=computeTopScreenStyle(event,screenDimensions);const topScreenDescriptor={value:[createViewDescriptor(topScreenId)]};updateProps(topScreenDescriptor,topScreenStyle,undefined);}" };
function applyStyleForBelowTopScreen(belowTopScreenId, value) {
  let items;
  belowTopScreenId = belowTopScreenId.belowTopScreenId;
  const obj = { value: items };
  items = [];
  const belowTopScreenStyleResult = belowTopScreenId.screenTransition.belowTopScreenStyle(value, belowTopScreenId.screenDimensions);
  items[0] = createViewDescriptorPaper(belowTopScreenId);
  const obj2 = _mod1743;
  obj2.updateProps(obj, belowTopScreenStyleResult, undefined);
}
let obj2 = { createViewDescriptor: createViewDescriptorPaper, updateProps: _mod1743.updateProps };
applyStyleForBelowTopScreen.__closure = obj2;
applyStyleForBelowTopScreen.__workletHash = 1349027100765;
applyStyleForBelowTopScreen.__initData = { code: "function applyStyleForBelowTopScreen_Pnpm_styleUpdaterTs4(screenTransitionConfig,event){const{createViewDescriptor,updateProps}=this.__closure;const{screenDimensions:screenDimensions,belowTopScreenId:belowTopScreenId,screenTransition:screenTransition}=screenTransitionConfig;const{belowTopScreenStyle:computeBelowTopScreenStyle}=screenTransition;const belowTopScreenStyle=computeBelowTopScreenStyle(event,screenDimensions);const belowTopScreenDescriptor={value:[createViewDescriptor(belowTopScreenId)]};updateProps(belowTopScreenDescriptor,belowTopScreenStyle,undefined);}" };
function applyStyle(topScreenId, value) {
  let items;
  let items1;
  if (typeof applyStyleForTopScreen === "function") {
    topScreenId = topScreenId.topScreenId;
    const obj = { value: items };
    items = [];
    const topScreenStyleResult = topScreenId.screenTransition.topScreenStyle(value, topScreenId.screenDimensions);
    items[0] = createViewDescriptorPaper(topScreenId);
    const obj2 = _mod1743;
    obj2.updateProps(obj, topScreenStyleResult, undefined);
    if (typeof applyStyleForBelowTopScreen === "function") {
      const belowTopScreenId = topScreenId.belowTopScreenId;
      const obj3 = { value: items1 };
      items1 = [];
      const belowTopScreenStyleResult = topScreenId.screenTransition.belowTopScreenStyle(value, topScreenId.screenDimensions);
      items1[0] = createViewDescriptorPaper(belowTopScreenId);
      const tmp5Result = _mod1743;
      tmp5Result.updateProps(obj3, belowTopScreenStyleResult, undefined);
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