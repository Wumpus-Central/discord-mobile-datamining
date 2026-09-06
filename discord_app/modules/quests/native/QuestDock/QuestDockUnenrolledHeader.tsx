// === Module 15191: QuestDockUnenrolledHeader ===

// Module 15191 (QuestDockUnenrolledHeader)
import useThemeDefault from "useTheme" /* 4495 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import FastImageDefault from "FastImage" /* 5587 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15113 */;
import QuestGameLogotypeDefault from "QuestGameLogotype" /* 15150 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 15192 */;
import _modDef15196 from "module_15196" /* 15196 */;
import _modDef15197 from "module_15197" /* 15197 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ primaryContent: { alignItems: "center", flexDirection: "row" }, wreathImage: { height: 35, marginRight: 4, width: 35 }, logo: { marginTop: 2 }, getRewardLabel: { opacity: 0.7 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default noop.memo(function QuestDockUnenrolledHeader() {
  let obj = questCreative(15102);
  const questDockQuest = obj.useQuestDockQuest();
  let obj1 = questCreative(15102);
  questCreative = obj1.useQuestCreative(questDockQuest);
  let obj2 = questCreative(15092);
  const items = [questCreative];
  const callback = noop.useCallback(() => {
    let obj = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: null };
    obj = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.trackingCtx = obj;
    obj.showModal(obj);
  }, items);
  const actionSheetPressHandler = obj2.useActionSheetPressHandler(questCreative);
  let obj3 = questCreative(4411);
  if (obj3.isThemeDark(tmp8)) {
    let LIGHT = ThemeTypes.DARK;
    let tmp10 = ThemeTypes;
  } else {
    LIGHT = ThemeTypes.LIGHT;
    tmp10 = ThemeTypes;
  }
  const tmp11 = closure_8();
  tmp8 = useThemeDefault();
  const questGameLogotypeAssetUrl = questCreative(15091).useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  obj = { blurHash: questBarHeroBlurhash, collapsedContent: null, withPressableDisclosure: true, onDisclosurePress: null, onSubmenuPress: null, children: null };
  obj = { style: tmp11.getRewardLabel, variant: "text-sm/medium", color: "interactive-text-active", children: null };
  const intl = tmp(1114).intl;
  obj.children = intl.string(questCreative(1114).t["3mgEQf"]);
  obj.collapsedContent = closure_6(questCreative(4556).Text, obj);
  obj.onDisclosurePress = callback;
  obj.onSubmenuPress = actionSheetPressHandler;
  obj1 = { style: tmp11.primaryContent, children: null };
  const tmp7Result = FastImageDefault;
  if (LIGHT === tmp10.DARK) {
    let tmp7Result1 = _modDef15196;
  } else {
    tmp7Result1 = _modDef15197;
  }
  obj2 = { source: tmp7Result1, resizeMode: "contain", style: tmp11.wreathImage };
  const items1 = [closure_6(tmp7Result, obj2), ];
  obj3 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo };
  items1[1] = closure_6(QuestGameLogotypeDefault, obj3);
  obj1.children = items1;
  obj.children = closure_7(View, obj1);
  return closure_6(tmp7Result, obj);
});