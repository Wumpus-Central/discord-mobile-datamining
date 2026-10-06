// === Module 15001: useQuestDockAnimatedBorderRadius ===

// Module 15001 (useQuestDockAnimatedBorderRadius)
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const __initData = { code: "function useQuestDockAnimatedBorderRadiusTsx1(){const{interpolate,questDockOffset,minBorder,maxBorder,Extrapolation}=this.__closure;return interpolate(questDockOffset.get(),[0,50],[minBorder,maxBorder],Extrapolation.CLAMP);}" };
const __initData2 = { code: "function useQuestDockAnimatedBorderRadiusTsx2(){const{interpolate,questDockOffset,minBorder,maxBorder,Extrapolation}=this.__closure;return interpolate(questDockOffset.get(),[0,50],[minBorder,maxBorder],Extrapolation.CLAMP);}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((maxBorder, arg1) => {
  let questDockOffset;
  _require = maxBorder;
  let num = 0;
  if (undefined !== arg1) {
    num = arg1;
  }
  questDockOffset = questDockOffset.useContext(require("QuestDockExternalCoordinationContext").QuestDockExternalCoordinationContext).questDockOffset;
  const fn = function u() {
    const interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    const value = questDockOffset.get();
    const items = [num, maxBorder];
    return interpolate(value, [0, 50], items, ReanimatedRexport.Extrapolation.CLAMP);
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, questDockOffset, minBorder: num, maxBorder, Extrapolation: require("ReanimatedRexport").Extrapolation };
  fn.__workletHash = 17005846780112;
  fn.__initData = __initData;
  ({ interpolate: require("ReanimatedRexport").interpolate, questDockOffset, minBorder: num, maxBorder, Extrapolation: require("ReanimatedRexport").Extrapolation });
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
    const interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    const value = questDockOffset.get();
    const items = [num, maxBorder];
    return interpolate(value, [0, 50], items, ReanimatedRexport.Extrapolation.CLAMP);
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, questDockOffset, minBorder: num, maxBorder, Extrapolation: require("ReanimatedRexport").Extrapolation };
  fn.__workletHash = 13043331962515;
  fn.__initData = __initData2;
  ({ interpolate: require("ReanimatedRexport").interpolate, questDockOffset, minBorder: num, maxBorder, Extrapolation: require("ReanimatedRexport").Extrapolation });
  return obj.useDerivedValue(fn);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useQuestDockAnimatedBorderRadius.tsx");

export default tmp2;