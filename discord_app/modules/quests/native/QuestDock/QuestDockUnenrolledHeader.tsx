// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import _modDef15150 from "../QuestGameLogotype.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ThemeTypes } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({
  primaryContent: { alignItems: "center", flexDirection: "row" },
  wreathImage: { height: 35, marginRight: 4, width: 35 },
  logo: { marginTop: 2 },
  getRewardLabel: { opacity: 0.7 },
});
const memoResult = importAllResult.memo(function QuestDockUnenrolledHeader() {
  let obj = questCreative(15102);
  const questDockQuest = obj.useQuestDockQuest();
  obj1 = questCreative(15102);
  questCreative = obj1.useQuestCreative(questDockQuest);
  let obj2 = questCreative(15092);
  const items = [questCreative];
  const callback = importAllResult.useCallback(() => {
    let obj = closure_1_1(closure_1_2[7]);
    obj = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: null };
    obj = {
      content: questCreative(closure_1_2[8]).QuestContent.QUEST_BAR_MOBILE,
      ctaContent: questCreative(closure_1_2[9]).QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE,
      sourceQuestContent: questCreative(closure_1_2[8]).QuestContent.QUEST_BAR_MOBILE,
    };
    obj[2] = obj;
    obj.showModal(obj);
  }, items);
  const actionSheetPressHandler = obj2.useActionSheetPressHandler(questCreative);
  let obj3 = questCreative(4411);
  if (obj3.isThemeDark(tmp8)) {
    let LIGHT = tmp9.DARK;
    let tmp10 = tmp9;
  } else {
    LIGHT = tmp9.LIGHT;
    tmp10 = tmp9;
  }
  const tmp11 = callback();
  tmp8 = useThemeDefault();
  const questGameLogotypeAssetUrl = questCreative(15091).useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  let tmp7Result = tmp7(15192);
  obj = {
    blurHash: questBarHeroBlurhash,
    collapsedContent: null,
    withPressableDisclosure: true,
    onDisclosurePress: null,
    onSubmenuPress: null,
    children: null,
  };
  obj = { style: tmp11.getRewardLabel, variant: "text-sm/medium", color: "interactive-text-active", children: null };
  const intl = tmp(1114).intl;
  obj[3] = intl.string(questCreative(1114).t["3mgEQf"]);
  obj[1] = closure_6(questCreative(4556).Text, obj);
  obj[3] = callback;
  obj[4] = actionSheetPressHandler;
  obj1 = { style: tmp11.primaryContent, children: null };
  tmp7Result = tmp7(5587);
  if (LIGHT === tmp10.DARK) {
    let tmp7Result1 = tmp7(15196);
  } else {
    tmp7Result1 = tmp7(15197);
  }
  obj2 = { source: tmp7Result1, resizeMode: "contain", style: tmp11.wreathImage };
  const items1 = [closure_6(tmp7Result, obj2)];
  obj3 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo };
  items1[1] = closure_6(_modDef15150, obj3);
  obj1[1] = items1;
  obj[5] = closure_7(View, obj1);
  return closure_6(tmp7Result, obj);
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default memoResult;
