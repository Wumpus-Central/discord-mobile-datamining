// === Module 15184: useQuestDockAnimatedBorderRadius ===

// Module 15184 (useQuestDockAnimatedBorderRadius)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import noop from "module_19" /* 19 */;

require = fn;
const __initData = { code: "function useQuestDockAnimatedBorderRadiusTsx1(){const{interpolate,questDockOffset,minBorder,maxBorder,Extrapolation}=this.__closure;return interpolate(questDockOffset.get(),[0,50],[minBorder,maxBorder],Extrapolation.CLAMP);}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useQuestDockAnimatedBorderRadius.tsx");

export default function useQuestDockAnimatedBorderRadius(maxBorder) {
  _require = maxBorder;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let questDockOffset;
  questDockOffset = questDockOffset.useContext(require("QuestDockExternalCoordinationContext").QuestDockExternalCoordinationContext).questDockOffset;
  require("ReanimatedRexport");
  const fn = function u() {
    value = questDockOffset.get();
    const items = [num, closure_0];
    return ReanimatedRexport.interpolate(value, [0, 50], items, ReanimatedRexport.Extrapolation.CLAMP);
  };
  const obj = { interpolate: require("ReanimatedRexport").interpolate, questDockOffset, minBorder: num, maxBorder, Extrapolation: require("ReanimatedRexport").Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 17005846780112;
  fn.__initData = __initData;
  return obj.useDerivedValue(fn);
};