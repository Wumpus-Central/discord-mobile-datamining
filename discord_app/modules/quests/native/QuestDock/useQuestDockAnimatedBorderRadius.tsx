// discord_app/modules/quests/native/QuestDock/useQuestDockAnimatedBorderRadius.tsx
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import QuestDockExternalCoordinationContext from "QuestDockExternalCoordinationContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = {
  code: "(function useQuestDockAnimatedBorderRadiusTsx1(){let[interpolate,questDockOffset,minBorder,maxBorder,Extrapolation]=this.__closure;return interpolate(questDockOffset.get(),[0,50],[minBorder,maxBorder],Extrapolation.CLAMP);})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/useQuestDockAnimatedBorderRadius.tsx");

export default function useQuestDockAnimatedBorderRadius(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  items = [
    closure_3,
    _mod1652.interpolate,
    noop.useContext(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContext).questDockOffset,
    num,
    arg0,
    _mod1652.Extrapolation,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6] = items;
  function useQuestDockAnimatedBorderRadiusTsx1() {
    items = [c2, c3];
    return _undefined(_undefined2.get(), [0, 50], items, _undefined3.CLAMP);
  }
  const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6];
  useQuestDockAnimatedBorderRadiusTsx1.__closure = items1;
  useQuestDockAnimatedBorderRadiusTsx1.__workletHash = 16041776927081;
  useQuestDockAnimatedBorderRadiusTsx1.__initData = tmp;
  return _mod1652.useDerivedValue(useQuestDockAnimatedBorderRadiusTsx1);
}
