// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _mod1654 from "../../../../../_runtime/metro/01654__.js";
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
import _modDef16791 from "../../../../../_runtime/metro/16791__.js";
import _modDef16792 from "../../../../../_runtime/metro/16792__.js";
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1654 = _mod1654;

require = fn;
function QuestDockAdvertiserAsset(uri) {
  const tmp = closure_13();
  const obj = {
    style: tmp.advertiserAsset,
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
    children: React5(FastImageDefault, {
      source: { uri: uri.assetUrl },
      style: tmp.advertiserAsset,
      resizeMode: "contain",
      accessible: false,
    }),
  };
  return React5(View, obj);
}
function QuestDockHeaderRewardTile() {
  const tmp = closure_13();
  const questDockQuest = QuestDockCreativeContext.useQuestDockQuest();
  items = [
    closure_15,
    spring_spring.withSpring,
    noop.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode,
    QuestDockMode,
    timestampProducer,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
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
  const items1 = [tmp5, tmp6, tmp7, tmp8];
  QuestDockUnenrolledHeaderTsx1.__closure = items1;
  QuestDockUnenrolledHeaderTsx1.__workletHash = 1590518219011;
  QuestDockUnenrolledHeaderTsx1.__initData = tmp4;
  const obj3 = {
    style: tmp.squareAsset,
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const animatedStyle = _mod1654.useAnimatedStyle(QuestDockUnenrolledHeaderTsx1);
  const obj4 = { style: null, children: null };
  const items2 = [tmp.squareAssetOverlay, animatedStyle];
  obj4.style = items2;
  const size = { quest: questDockQuest, height: PX_40, width: PX_40, withAnimation: false };
  obj4.children = React5(QuestRewardTileDefault, size);
  obj3.children = React5(_modDef1654.View, obj4);
  return React5(View, obj3);
}
function QuestDockRewardLogotype(children) {
  items = [
    closure_17,
    noop.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode,
    QuestDockMode,
    PX_10,
    closure_12,
    spring_spring.withSpring,
    timestampProducer,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class QuestDockUnenrolledHeaderTsx2 {
    constructor() {
      num = 0;
      if (closure_0.get() === closure_1.EXPANDED) {
        tmp = closure_2;
        tmp2 = closure_3;
        num = closure_2 - closure_3;
      }
      obj = { transform: null };
      obj1 = { translateX: closure_4(num, closure_5) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
  QuestDockUnenrolledHeaderTsx2.__closure = items1;
  QuestDockUnenrolledHeaderTsx2.__workletHash = 8253036165059;
  QuestDockUnenrolledHeaderTsx2.__initData = tmp2;
  const style = _mod1654.useAnimatedStyle(QuestDockUnenrolledHeaderTsx2);
  return React5(_modDef1654.View, { style, children: children.children });
}
function QuestDockOrbAmountCopy(orbCount) {
  const obj = {
    style: closure_13().getRewardLabel,
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
const QuestDockMode = fn(6871).QuestDockMode;
const QuestDockConstants = fn(16687);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_6, QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT } = QuestDockConstants);
const ThemeTypes = fn(1082).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_40 = nativeDefault.space.PX_40;
const PX_8 = nativeDefault.space.PX_8;
const PX_10 = nativeDefault.space.PX_10;
let closure_12 = QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT + PX_40 + PX_8;
const createStyles = fn(5043);
let obj = {
  advertiserAsset: null,
  squareAsset: null,
  squareAssetOverlay: null,
  primaryContent: null,
  advertiserContent: null,
  advertiserName: null,
  wreathImage: null,
  logo: null,
  getRewardLabel: null,
  advertiserNameText: null,
};
let size = {
  height: nativeDefault.space.PX_40,
  width: nativeDefault.space.PX_40,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BLACK,
  overflow: "hidden",
};
obj.advertiserAsset = size;
obj.squareAsset = { width: PX_40, height: PX_40, marginRight: PX_8, alignItems: "center", justifyContent: "center" };
obj.squareAssetOverlay = { position: "absolute" };
obj.primaryContent = { alignItems: "center", flexDirection: "row" };
obj.advertiserContent = { flex: 1, flexShrink: 1, gap: nativeDefault.space.PX_8 };
obj.advertiserName = { flex: 1, maxWidth: nativeDefault.space.PX_160 };
obj.wreathImage = { height: 35, marginRight: 4, width: 35 };
obj.logo = { marginTop: 4 };
obj.getRewardLabel = { opacity: 0.7 };
obj.advertiserNameText = { lineHeight: 16 };
let closure_13 = createStyles.createStyles(obj);
let closure_15 = {
  code: "(function QuestDockUnenrolledHeaderTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})",
};
let closure_17 = {
  code: "(function QuestDockUnenrolledHeaderTsx2(){let[activeQuestDockMode,QuestDockMode,REWARD_LOGOTYPE_EXPANDED_INSET,REWARD_LOGOTYPE_COLLAPSED_LEFT,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;let translateX=0;if(activeQuestDockMode.get()===QuestDockMode.EXPANDED){translateX=REWARD_LOGOTYPE_EXPANDED_INSET-REWARD_LOGOTYPE_COLLAPSED_LEFT;}return{transform:[{translateX:withSpring(translateX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};})",
};
let obj3 = { flex: 1, flexShrink: 1, gap: nativeDefault.space.PX_8 };
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
  const questDockQuest = questCreative(16721).useQuestDockQuest();
  let obj = questCreative(16721);
  questCreative = questCreative(16721).useQuestCreative(questDockQuest);
  let obj2 = questCreative(16721);
  items = [questCreative];
  const obj3 = questCreative(16684);
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
  const actionSheetPressHandler = questCreative(16684).useActionSheetPressHandler(questCreative);
  const tmp8 = useThemeDefault();
  if (obj4.isThemeDark(tmp8)) {
    let LIGHT = ThemeTypes.DARK;
    let tmp10 = ThemeTypes;
  } else {
    LIGHT = ThemeTypes.LIGHT;
    tmp10 = ThemeTypes;
  }
  const tmp11 = closure_13();
  obj4 = questCreative(5050);
  const questGameLogotypeAssetUrl = questCreative(16681).useQuestGameLogotypeAssetUrl(questDockQuest);
  if ("bountyIllustration" === str2) {
    let tmp16 = closure_8(tmp(16788).QuestDockBountyOrbIllustration, {});
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
    const intl = tmp(1112).intl;
    obj6.children = intl.string(tmp(1112).t["3mgEQf"]);
    tmp16 = closure_8(tmp(5634).Text, obj6);
  }
  const tmp15Result = tmp15(QuestGameLogotypeDefault, {
    assetUrl: questGameLogotypeAssetUrl,
    height: 36,
    maxWidth: 120,
    style: tmp11.logo,
  });
  if ("advertiser" === str) {
    const obj8 = { assetUrl: tmp(9904).getQuestAsset(questDockQuest, tmp(9904).QuestAssetType.GAME_TILE, LIGHT).url };
    let tmp15Result3 = tmp15(QuestDockAdvertiserAsset, obj8);
    const obj9 = { style: tmp11.advertiserName, children: null };
    const obj10 = {
      variant: "body-sm/semibold",
      color: "text-strong",
      lineClamp: 2,
      style: tmp11.advertiserNameText,
      children: questDockQuest.config.messages.gamePublisher,
    };
    obj9.children = tmp15(tmp(5634).Text, obj10);
    let tmp15Result4 = tmp15(View, obj9);
    const tmpResult2 = tmp(9904);
  } else if ("reward" === str) {
    tmp15Result3 = tmp15(QuestDockHeaderRewardTile, {});
    const obj11 = { children: tmp15Result };
    tmp15Result4 = tmp15(QuestDockRewardLogotype, obj11);
  } else {
    if (LIGHT === tmp10.DARK) {
      let tmp7Result3 = _modDef16791;
    } else {
      tmp7Result3 = _modDef16792;
    }
    const obj12 = { source: tmp7Result3, resizeMode: "contain", style: tmp11.wreathImage };
    tmp15Result3 = tmp15(FastImageDefault, obj12);
    tmp15Result4 = tmp15Result;
    const tmp7Result = FastImageDefault;
  }
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const obj7 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo };
  const tmpResult = questCreative(16681);
  const obj13 = {
    blurHash: questBarHeroBlurhash,
    collapsedContent: tmp16,
    secondaryContentWidth: null,
    secondaryContentLayout: null,
    withPressableDisclosure: true,
    onDisclosurePress: null,
    onSubmenuPress: null,
    children: null,
  };
  let prop;
  if ("bountyIllustration" === str2) {
    prop = tmp(16788).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH;
  }
  obj13.secondaryContentWidth = prop;
  let str5 = "overlay";
  if ("advertiser" === str) {
    str5 = "inline";
  }
  obj13.secondaryContentLayout = str5;
  obj13.onDisclosurePress = callback;
  obj13.onSubmenuPress = actionSheetPressHandler;
  const primaryContent = tmp11.primaryContent;
  if ("advertiser" === str) {
    const items1 = [primaryContent, tmp11.advertiserContent];
    let tmp34 = items1;
  } else {
    tmp34 = primaryContent;
  }
  const obj14 = { style: tmp34, children: null };
  const items2 = [tmp15Result3, tmp15Result4];
  obj14.children = items2;
  obj13.children = closure_9(View, obj14);
  return tmp15(QuestDockBackgroundBlurHeaderDefault, obj13);
});
