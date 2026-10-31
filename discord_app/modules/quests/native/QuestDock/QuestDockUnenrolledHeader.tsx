// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestDisclosureModalActionCreatorsDefault from "../QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx";
import QuestGameLogotypeDefault from "../QuestGameLogotype.tsx";
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader.tsx";
import _modDef17155 from "../../../../../_runtime/metro/17155__.js";
import _modDef17156 from "../../../../../_runtime/metro/17156__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let closure_8 = createStyles.createStyles({
  primaryContent: { alignItems: "center", flexDirection: "row" },
  wreathImage: { height: 35, marginRight: 4, width: 35 },
  logo: { marginTop: 2 },
  getRewardLabel: { opacity: 0.7 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default noop.memo(function QuestDockUnenrolledHeader() {
  const questDockQuest = questCreative(17087).useQuestDockQuest();
  let obj = questCreative(17087);
  questCreative = questCreative(17087).useQuestCreative(questDockQuest);
  let obj2 = questCreative(17087);
  const items = [questCreative];
  const obj3 = questCreative(17056);
  const callback = noop.useCallback(() => {
    const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = {
      content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
      ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
    };
    obj.showModal(obj2);
  }, items);
  const actionSheetPressHandler = questCreative(17056).useActionSheetPressHandler(questCreative);
  const tmp8 = useThemeDefault();
  if (obj4.isThemeDark(tmp8)) {
    let LIGHT = ThemeTypes.DARK;
    let tmp10 = ThemeTypes;
  } else {
    LIGHT = ThemeTypes.LIGHT;
    tmp10 = ThemeTypes;
  }
  const tmp11 = closure_8();
  obj4 = questCreative(5021);
  const questGameLogotypeAssetUrl = questCreative(17055).useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const tmpResult = questCreative(17055);
  const obj5 = {
    blurHash: questBarHeroBlurhash,
    collapsedContent: null,
    withPressableDisclosure: true,
    onDisclosurePress: null,
    onSubmenuPress: null,
    children: null,
  };
  const obj6 = {
    style: tmp11.getRewardLabel,
    variant: "text-sm/medium",
    color: "interactive-text-active",
    children: null,
  };
  const intl = tmp(1113).intl;
  obj6.children = intl.string(questCreative(1113).t["3mgEQf"]);
  obj5.collapsedContent = closure_6(questCreative(5624).Text, obj6);
  obj5.onDisclosurePress = callback;
  obj5.onSubmenuPress = actionSheetPressHandler;
  const obj7 = { style: tmp11.primaryContent, children: null };
  const tmp7Result = QuestDockBackgroundBlurHeaderDefault;
  if (LIGHT === tmp10.DARK) {
    let tmp7Result4 = _modDef17155;
  } else {
    tmp7Result4 = _modDef17156;
  }
  const items1 = [
    closure_6(FastImageDefault, { source: tmp7Result4, resizeMode: "contain", style: tmp11.wreathImage }),
    closure_6(QuestGameLogotypeDefault, {
      assetUrl: questGameLogotypeAssetUrl,
      height: 36,
      maxWidth: 120,
      style: tmp11.logo,
    }),
  ];
  obj7.children = items1;
  obj5.children = closure_7(View, obj7);
  return closure_6(tmp7Result, obj5);
});
