// === Module 17398: QuestDockUnenrolledHeader ===

// Module 17398 (QuestDockUnenrolledHeader)
import useThemeDefault from "useTheme" /* 5377 */;
import FastImageDefault from "FastImage" /* 5851 */;
import QuestTypes from "QuestTypes" /* 6919 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8011 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 17323 */;
import QuestGameLogotypeDefault from "QuestGameLogotype" /* 17363 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 17399 */;
import _modDef17403 from "module_17403" /* 17403 */;
import _modDef17404 from "module_17404" /* 17404 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5141);
let closure_8 = createStyles.createStyles({ primaryContent: { alignItems: "center", flexDirection: "row" }, wreathImage: { height: 35, marginRight: 4, width: 35 }, logo: { marginTop: 2 }, getRewardLabel: { opacity: 0.7 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default noop.memo(function QuestDockUnenrolledHeader() {
  const questDockQuest = questCreative(17335).useQuestDockQuest();
  let obj = questCreative(17335);
  questCreative = questCreative(17335).useQuestCreative(questDockQuest);
  let obj2 = questCreative(17335);
  items = [questCreative];
  const obj3 = questCreative(17304);
  const callback = noop.useCallback(() => {
    const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.showModal(obj2);
  }, items);
  const actionSheetPressHandler = questCreative(17304).useActionSheetPressHandler(questCreative);
  const tmp8 = useThemeDefault();
  if (obj4.isThemeDark(tmp8)) {
    let LIGHT = ThemeTypes.DARK;
    let tmp10 = ThemeTypes;
  } else {
    LIGHT = ThemeTypes.LIGHT;
    tmp10 = ThemeTypes;
  }
  const tmp11 = closure_8();
  obj4 = questCreative(5148);
  const questGameLogotypeAssetUrl = questCreative(17303).useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const tmpResult = questCreative(17303);
  const obj5 = { blurHash: questBarHeroBlurhash, collapsedContent: null, withPressableDisclosure: true, onDisclosurePress: null, onSubmenuPress: null, children: null };
  const obj6 = { style: tmp11.getRewardLabel, variant: "body-sm/medium", color: "interactive-text-active", children: null };
  const intl = tmp(1113).intl;
  obj6.children = intl.string(questCreative(1113).t["3mgEQf"]);
  obj5.collapsedContent = closure_6(questCreative(5761).Text, obj6);
  obj5.onDisclosurePress = callback;
  obj5.onSubmenuPress = actionSheetPressHandler;
  const obj7 = { style: tmp11.primaryContent, children: null };
  const tmp7Result = QuestDockBackgroundBlurHeaderDefault;
  if (LIGHT === tmp10.DARK) {
    let tmp7Result4 = _modDef17403;
  } else {
    tmp7Result4 = _modDef17404;
  }
  const items1 = [closure_6(FastImageDefault, { source: tmp7Result4, resizeMode: "contain", style: tmp11.wreathImage }), closure_6(QuestGameLogotypeDefault, { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo })];
  obj7.children = items1;
  obj5.children = closure_7(View, obj7);
  return closure_6(tmp7Result, obj5);
});