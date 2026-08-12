// discord_app/modules/quests/native/QuestDock/useQuestDockAnimatedBorderRadius.tsx
import noop from "noop";

const require = arg1;
let closure_3 = { code: "function useQuestDockAnimatedBorderRadiusTsx1(){const{interpolate,questDockOffset,minBorder,maxBorder,Extrapolation}=this.__closure;return interpolate(questDockOffset.get(),[0,50],[minBorder,maxBorder],Extrapolation.CLAMP);}" };
const result = require("module_4083").fileFinishedImporting("modules/quests/native/QuestDock/useQuestDockAnimatedBorderRadius.tsx");

export default function useQuestDockAnimatedBorderRadius(maxBorder) {
  const _require = maxBorder;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let questDockOffset;
  questDockOffset = questDockOffset.useContext(_require(num[1]).QuestDockExternalCoordinationContext).questDockOffset;
  let obj = _require(num[2]);
  const fn = function u() {
    const value = questDockOffset.get();
    const items = [num, maxBorder];
    return maxBorder(num[2]).interpolate(value, [0, 50], items, maxBorder(num[2]).Extrapolation.CLAMP);
  };
  obj = { interpolate: _require(num[2]).interpolate, questDockOffset, minBorder: num, maxBorder, Extrapolation: _require(num[2]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 17005846780112;
  fn.__initData = closure_3;
  return obj.useDerivedValue(fn);
};