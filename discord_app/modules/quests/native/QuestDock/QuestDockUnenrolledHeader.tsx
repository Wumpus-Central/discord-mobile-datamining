// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestRewardTileDefault from "../QuestRewardTile.tsx";
import QuestDockGestureContext from "QuestDockGestureContext.tsx";
import QuestDisclosureModalActionCreatorsDefault from "../QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx";
import QuestDockCreativeContext from "QuestDockCreativeContext.tsx";
import QuestGameLogotypeDefault from "../QuestGameLogotype.tsx";
import _modDef17797 from "../../../../../_runtime/metro/17797__.js";
import _modDef17798 from "../../../../../_runtime/metro/17798__.js";
import QuestDockHeaderTitleDefault from "QuestDockHeaderTitle.tsx";
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1655 = _mod1655;

require = fn;
function QuestDockAdvertiserAsset(uri) {
  const tmp = closure_11();
  const obj = {
    style: tmp.squareAsset,
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
    children: React5(FastImageDefault, {
      source: { uri: uri.assetUrl },
      style: tmp.advertiserAsset,
      resizeMode: "cover",
      accessible: false,
    }),
  };
  return React5(View, obj);
}
function QuestDockHeaderRewardTile() {
  const tmp = closure_11();
  const questDockQuest = QuestDockCreativeContext.useQuestDockQuest();
  const activeQuestDockMode = noop.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode;
  const tmp6 = useThemeDefault();
  items = [closure_13, spring_spring.withSpring, activeQuestDockMode, QuestDockMode, closure_6];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13] = items;
  class QuestDockUnenrolledHeaderTsx1 {
    constructor() {
      tmp = closure_0;
      num = 1;
      if (closure_1.get() === closure_2.EXPANDED) {
        num = 0;
      }
      obj = { opacity: tmp(num, closure_3) };
      return obj;
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13];
  QuestDockUnenrolledHeaderTsx1.__closure = items1;
  QuestDockUnenrolledHeaderTsx1.__workletHash = 1590518219011;
  QuestDockUnenrolledHeaderTsx1.__initData = tmp9;
  const animatedStyle = _mod1655.useAnimatedStyle(QuestDockUnenrolledHeaderTsx1);
  const items2 = [closure_14, spring_spring.withSpring, activeQuestDockMode, QuestDockMode, closure_6];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19] = items2;
  class QuestDockUnenrolledHeaderTsx2 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get() === closure_2.EXPANDED) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_3) };
      return obj;
    }
  }
  const items3 = [tmp16, tmp17, tmp18, tmp19];
  QuestDockUnenrolledHeaderTsx2.__closure = items3;
  QuestDockUnenrolledHeaderTsx2.__workletHash = 15239501095488;
  QuestDockUnenrolledHeaderTsx2.__initData = tmp15;
  const obj3 = {
    style: tmp.squareAsset,
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const animatedStyle1 = _mod1655.useAnimatedStyle(QuestDockUnenrolledHeaderTsx2);
  const obj4 = { style: null, children: null };
  const items4 = [tmp.squareAssetOverlay, animatedStyle1];
  obj4.style = items4;
  const tmp2Result = _mod1655;
  const tmp5Result = FastImageDefault;
  if (tmp2Result2.isThemeDark(tmp6)) {
    let tmp5Result2 = _modDef17797;
  } else {
    tmp5Result2 = _modDef17798;
  }
  obj4.children = React5(tmp5Result, { source: tmp5Result2, resizeMode: "contain", style: tmp.squareAssetImage });
  const items5 = [React5(_modDef1655.View, obj4)];
  const obj6 = { style: null, children: null };
  const items6 = [tmp.squareAssetOverlay, animatedStyle];
  obj6.style = items6;
  const size = { quest: questDockQuest, height: v35, width: v35, withAnimation: false };
  obj6.children = React5(QuestRewardTileDefault, size);
  items5[1] = React5(_modDef1655.View, obj6);
  obj3.children = items5;
  return React6(View, obj3);
}
function QuestDockOrbAmountCopy(orbCount) {
  const obj = {
    style: closure_11().getRewardLabel,
    variant: "body-sm/medium",
    color: "interactive-text-active",
    lineClamp: 1,
    children: null,
  };
  const intl = util.intl;
  obj.children = intl.format(util.t.QVBTlz, { orbCount: orbCount.orbCount });
  return React5(Text_Text.Text, obj);
}
const View = fn(17).View;
const QuestDockMode = fn(6954).QuestDockMode;
let closure_6 = fn(17698).QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 35;
const createStyles = fn(5306);
let obj = {
  advertiserAsset: null,
  squareAsset: null,
  squareAssetImage: null,
  squareAssetOverlay: null,
  primaryContent: null,
  advertiserContent: null,
  advertiserName: null,
  wreathImage: null,
  logo: null,
  getRewardLabel: null,
};
let size = {
  height: nativeDefault.space.PX_32,
  width: nativeDefault.space.PX_32,
  borderRadius: nativeDefault.radii.sm,
};
obj.advertiserAsset = size;
const size1 = {
  width: 35,
  height: 35,
  marginRight: nativeDefault.space.PX_4,
  alignItems: "center",
  justifyContent: "center",
};
obj.squareAsset = size1;
obj.squareAssetImage = { width: 35, height: 35 };
obj.squareAssetOverlay = { position: "absolute" };
obj.primaryContent = { alignItems: "center", flexDirection: "row" };
obj.advertiserContent = { flex: 1, gap: 6.5 };
obj.advertiserName = { flex: 1, maxWidth: 120 };
obj.wreathImage = { height: 35, marginRight: 4, width: 35 };
obj.logo = { marginTop: 2 };
obj.getRewardLabel = { opacity: 0.7 };
let closure_11 = createStyles.createStyles(obj);
let closure_13 = {
  code: "(function QuestDockUnenrolledHeaderTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})",
};
let closure_14 = {
  code: "(function QuestDockUnenrolledHeaderTsx2(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default noop.memo(function QuestDockUnenrolledHeader(squareAsset) {
  let str = squareAsset.squareAsset;
  if (str === undefined) {
    str = "default";
  }
  let str2 = squareAsset.rewardMessage;
  if (str2 === undefined) {
    str2 = "generic";
  }
  const orbCount = squareAsset.orbCount;
  let questCreative;
  const questDockQuest = questCreative(17727).useQuestDockQuest();
  let obj = questCreative(17727);
  questCreative = questCreative(17727).useQuestCreative(questDockQuest);
  let obj2 = questCreative(17727);
  items = [questCreative];
  const obj3 = questCreative(17695);
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
  const actionSheetPressHandler = questCreative(17695).useActionSheetPressHandler(questCreative);
  const tmp8 = useThemeDefault();
  if (obj4.isThemeDark(tmp8)) {
    let LIGHT = ThemeTypes.DARK;
    let tmp10 = ThemeTypes;
  } else {
    LIGHT = ThemeTypes.LIGHT;
    tmp10 = ThemeTypes;
  }
  const tmp11 = closure_11();
  obj4 = questCreative(5313);
  const questGameLogotypeAssetUrl = questCreative(17693).useQuestGameLogotypeAssetUrl(questDockQuest);
  if ("bountyIllustration" === str2) {
    let tmp16 = closure_8(tmp(17794).QuestDockBountyOrbIllustration, {});
    let tmp15 = closure_8;
  } else {
    if ("orbAmount" === str2) {
      if (null != orbCount) {
        const obj5 = { orbCount };
        tmp16 = closure_8(QuestDockOrbAmountCopy, obj5);
        tmp15 = closure_8;
      }
    }
    tmp15 = closure_8;
    const obj6 = {
      style: tmp11.getRewardLabel,
      variant: "body-sm/medium",
      color: "interactive-text-active",
      children: null,
    };
    const intl = tmp(1113).intl;
    obj6.children = intl.string(tmp(1113).t["3mgEQf"]);
    tmp16 = closure_8(tmp(5919).Text, obj6);
  }
  if ("advertiser" === str) {
    const obj7 = { assetUrl: tmp(10146).getQuestAsset(questDockQuest, tmp(10146).QuestAssetType.GAME_TILE, LIGHT).url };
    let tmp15Result = tmp15(QuestDockAdvertiserAsset, obj7);
    const tmpResult2 = tmp(10146);
  } else if ("reward" === str) {
    tmp15Result = tmp15(QuestDockHeaderRewardTile, {});
  } else {
    if (LIGHT === tmp10.DARK) {
      let tmp7Result3 = _modDef17797;
    } else {
      tmp7Result3 = _modDef17798;
    }
    const obj8 = { source: tmp7Result3, resizeMode: "contain", style: tmp11.wreathImage };
    tmp15Result = tmp15(FastImageDefault, obj8);
    const tmp7Result = FastImageDefault;
  }
  let primaryContent = tmp11.primaryContent;
  if ("advertiser" === str) {
    const items1 = [,];
    ({ primaryContent: arr2[0], advertiserContent: arr2[1] } = tmp11);
    const obj9 = { style: tmp11.advertiserName, children: null };
    const obj10 = { children: questDockQuest.config.messages.gamePublisher };
    obj9.children = tmp15(QuestDockHeaderTitleDefault, obj10);
    let tmp15Result2 = tmp15(View, obj9);
    primaryContent = items1;
  } else {
    const obj11 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo };
    tmp15Result2 = tmp15(QuestGameLogotypeDefault, obj11);
  }
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const tmpResult = questCreative(17693);
  const obj12 = {
    blurHash: questBarHeroBlurhash,
    collapsedContent: tmp16,
    secondaryContentWidth: null,
    withPressableDisclosure: true,
    onDisclosurePress: null,
    onSubmenuPress: null,
    children: null,
  };
  let prop;
  if ("bountyIllustration" === str2) {
    prop = tmp(17794).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH;
  }
  obj12.secondaryContentWidth = prop;
  obj12.onDisclosurePress = callback;
  obj12.onSubmenuPress = actionSheetPressHandler;
  const obj13 = { style: primaryContent, children: null };
  const items2 = [tmp15Result, tmp15Result2];
  obj13.children = items2;
  obj12.children = closure_9(View, obj13);
  return tmp15(QuestDockBackgroundBlurHeaderDefault, obj12);
});
