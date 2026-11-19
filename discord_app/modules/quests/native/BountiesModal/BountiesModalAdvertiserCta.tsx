// discord_app/modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import AnimatedEnterExitItemDefault from "../../../../design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function BountiesModalAdvertiserCtaContent(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let getQuestImpressionId;
  let callback;
  ({ opacityStyle, transformStyle } = bounty);
  const advertiserCtaInfo = bounty(getQuestImpressionId[6]).getAdvertiserCtaInfo(bounty);
  let obj = bounty(getQuestImpressionId[6]);
  getQuestImpressionId = bounty(getQuestImpressionId[7]).useGetQuestImpressionId();
  items = [, , ,];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = sourceQuestContent;
  items[3] = getQuestImpressionId;
  callback = callback.useCallback((content) => {
    const obj = QuestPlatformUtils;
    const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
    const result = obj.openAdGameLinkDirectly(obj2, {
      content,
      ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
      impressionId: getQuestImpressionId(),
      sourceQuestContent,
    });
  }, items);
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = callback.useCallback(() => {
    callback(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
  }, items1);
  const callback2 = callback.useCallback(() => {
    callback(QuestContent.QuestContent.VIDEO_MODAL_MOBILE_FOOTER);
  }, items2);
  const obj3 = { ctaInfo: advertiserCtaInfo, style: null, onContainerPress: callback1, onButtonPress: callback2 };
  const items3 = [opacityStyle, transformStyle];
  obj3.style = items3;
  return jsx(sourceQuestContent(getQuestImpressionId[12]), {
    ctaInfo: advertiserCtaInfo,
    style: null,
    onContainerPress: callback1,
    onButtonPress: callback2,
  });
}
let QuestsExperimentLocations = fn(6437).QuestsExperimentLocations;
const jsx = fn(21).jsx;
let items = [
  {
    code: "(function BountiesModalAdvertiserCtaTsx1(visible){let[withTiming,timingStandard]=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};})",
  },
  fn(5002).withTiming,
  fn(5005).timingStandard,
];
let closure_129_0;
let closure_129_1;
[tmp2, tmp3, tmp4] = items;
class BountiesModalAdvertiserCtaTsx1 {
  constructor(arg0) {
    obj = { opacity: closure_0(global, closure_1, "respect-motion-settings") };
    return obj;
  }
}
let items1 = [tmp3, tmp4];
BountiesModalAdvertiserCtaTsx1.__closure = items1;
BountiesModalAdvertiserCtaTsx1.__workletHash = 17397968298384;
BountiesModalAdvertiserCtaTsx1.__initData = tmp2;
let items2 = [
  {
    code: "(function BountiesModalAdvertiserCtaTsx2(visible,cleanUp){let[withTiming,timingFast]=this.__closure;return{opacity:withTiming(visible,timingFast,'respect-motion-settings',cleanUp)};})",
  },
  fn(5002).withTiming,
  fn(5005).timingFast,
];
let closure_130_0;
let closure_130_1;
[tmp5, tmp6, tmp7] = items2;
class BountiesModalAdvertiserCtaTsx2 {
  constructor(arg0, arg1) {
    obj = { opacity: closure_0(global, closure_1, "respect-motion-settings", fn) };
    return obj;
  }
}
let items3 = [tmp6, tmp7];
BountiesModalAdvertiserCtaTsx2.__closure = items3;
BountiesModalAdvertiserCtaTsx2.__workletHash = 5281001933907;
BountiesModalAdvertiserCtaTsx2.__initData = tmp5;
let closure_10 = {
  code: "(function BountiesModalAdvertiserCtaTsx3(){let[withTiming,interpolate,visibility,visible,timingStandard,timingFast]=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx");

export default function BountiesModalAdvertiserCta(visible) {
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  let animatedStyle;
  const isBountiesModalTransitionsRefactorEnabled = animatedStyle(16378).useIsBountiesModalTransitionsRefactorEnabled(
    QuestsExperimentLocations.VIDEO_MODAL_MOBILE,
  );
  let obj = animatedStyle(16378);
  items = [c4];
  let num = 0;
  const stateFromStores = animatedStyle(504).useStateFromStores(items, () => _undefined2.useReducedMotion);
  if (visible) {
    num = 1;
  }
  const obj2 = animatedStyle(504);
  const items1 = [
    closure_10,
    animatedStyle(5002).withTiming,
    animatedStyle(1655).interpolate,
    num,
    visible,
    animatedStyle(5005).timingStandard,
    animatedStyle(5005).timingFast,
  ];
  animatedStyle = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  QuestsExperimentLocations = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items1;
  class BountiesModalAdvertiserCtaTsx3 {
    constructor() {
      tmp = closure_0;
      obj = { transform: null };
      obj1 = { translateY: tmp(closure_1(closure_2, [0, 1], [8, 0]), closure_3 ? closure_4 : closure_5) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  BountiesModalAdvertiserCtaTsx3.__closure = items2;
  BountiesModalAdvertiserCtaTsx3.__workletHash = 3225253604542;
  BountiesModalAdvertiserCtaTsx3.__initData = tmp6;
  animatedStyle = animatedStyle(1655).useAnimatedStyle(BountiesModalAdvertiserCtaTsx3);
  const items3 = [animatedStyle];
  const callback = noop.useCallback((arg0, opacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.opacityStyle = opacityStyle;
    obj.transformStyle = animatedStyle;
    return <BountiesModalAdvertiserCtaContent />;
  }, items3);
  const tmp2Result = animatedStyle(1655);
  const tmp2Result2 = animatedStyle(16379);
  const visibilityTransition = tmp2Result2.useVisibilityTransition({
    visible,
    entranceTiming: animatedStyle(5005).timingStandard,
    exitTiming: animatedStyle(5005).timingFast,
  });
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj4 = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
    let tmp25;
    if (visible) {
      tmp25 = merged;
    }
    obj4.item = tmp25;
    obj4.entering = BountiesModalAdvertiserCtaTsx1;
    obj4.exiting = BountiesModalAdvertiserCtaTsx2;
    obj4.renderItem = callback;
    shouldRender = jsx(AnimatedEnterExitItemDefault, {
      useReducedMotion: stateFromStores,
      item: null,
      entering: null,
      exiting: null,
      renderItem: null,
    });
  } else if (shouldRender) {
    const obj5 = {};
    const merged1 = Object.assign(merged);
    obj5.opacityStyle = tmp16;
    obj5.transformStyle = animatedStyle;
    shouldRender = <BountiesModalAdvertiserCtaContent />;
  }
  return shouldRender;
}
