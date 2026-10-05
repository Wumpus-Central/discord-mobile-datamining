// === Module 14986: useQuestDockAnimatedBorderRadius ===

// Module 14986 (useQuestDockAnimatedBorderRadius)
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const __initData = { code: "function useQuestDockAnimatedBorderRadiusTsx1(){const{interpolate,questDockOffset,minBorder,maxBorder,Extrapolation}=this.__closure;return interpolate(questDockOffset.get(),[0,50],[minBorder,maxBorder],Extrapolation.CLAMP);}" };
const __initData2 = { code: "function useQuestDockAnimatedBorderRadiusTsx2(){const{interpolate,questDockOffset,minBorder,maxBorder,Extrapolation}=this.__closure;return interpolate(questDockOffset.get(),[0,50],[minBorder,maxBorder],Extrapolation.CLAMP);}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useQuestDockAnimatedBorderRadius.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((maxBorder, arg1) => {
  _require = maxBorder;
  let num = 0;
  if (undefined !== arg1) {
    num = arg1;
  }
  questDockOffset = questDockOffset.useContext(require("QuestDockExternalCoordinationContext").QuestDockExternalCoordinationContext).questDockOffset;
  const fn = function u() {
    value = questDockOffset.get();
    const items = [num, closure_0];
    return ReanimatedRexport.interpolate(value, [0, 50], items, ReanimatedRexport.Extrapolation.CLAMP);
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, questDockOffset, minBorder: num, maxBorder, Extrapolation: require("ReanimatedRexport").Extrapolation };
  fn.__workletHash = 17005846780112;
  fn.__initData = __initData;
  return obj.useDerivedValue(fn);
}) : ((maxBorder) => {
  _require = maxBorder;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let questDockOffset;
  questDockOffset = questDockOffset.useContext(require("QuestDockExternalCoordinationContext").QuestDockExternalCoordinationContext).questDockOffset;
  const fn = function u() {
    value = questDockOffset.get();
    const items = [num, closure_0];
    return ReanimatedRexport.interpolate(value, [0, 50], items, ReanimatedRexport.Extrapolation.CLAMP);
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, questDockOffset, minBorder: num, maxBorder, Extrapolation: require("ReanimatedRexport").Extrapolation };
  fn.__workletHash = 13043331962515;
  fn.__initData = __initData2;
  return obj.useDerivedValue(fn);
});