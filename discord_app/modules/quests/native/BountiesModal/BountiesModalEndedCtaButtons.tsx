// === Module 15075: BountiesModalEndedCtaButtons ===

// Module 15075 (BountiesModalEndedCtaButtons)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4575 */;
import timingPresets from "timingPresets" /* 4578 */;
import QuestContent from "QuestContent" /* 5463 */;
import AdCreativeType from "AdCreativeType" /* 5465 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7742 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11528 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4574 */;
import size from "module_2" /* 2 */;

({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = createStyles.createStyles(() => {
  let obj = { container: null };
  obj = { gap: nativeDefault.space.PX_8 };
  obj.container = obj;
  return obj;
});
const __initData = { code: "function BountiesModalEndedCtaButtonsTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx");

export default function BountiesModalEndedCtaButtons(bounty) {
  bounty = bounty.bounty;
  let visible = bounty.visible;
  ({ sourceQuestContent: dependencyMap, showCloseButton } = bounty);
  if (showCloseButton === undefined) {
    showCloseButton = true;
  }
  let flag = bounty.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let obj = bounty(11518);
  closure_3 = obj.useGetQuestImpressionId();
  let obj1 = bounty(4310);
  const fn = function y() {
    let obj = timing;
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, timingPresets.timingStandard) };
    return obj;
  };
  obj = { withTiming: bounty(4575).withTiming, visible, timingStandard: bounty(4578).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 11417131685254;
  fn.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  bounty(15070);
  if (visible) {
    obj = { style: null, children: null };
    const items = [tmp.container, animatedStyle];
    obj.style = items;
    obj1 = {
      variant: "primary-overlay",
      text: tmp6.buttonLabel,
      size: "lg",
      disabled: flag,
      onPress() {
          let obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
          obj = { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_3(), sourceQuestContent };
          const result = obj.openAdGameLinkDirectly(obj, obj);
        }
    };
    const items1 = [closure_3(tmp2(4989).Button, obj1), ];
    let tmp9Result = null;
    if (showCloseButton) {
      const obj2 = { variant: "secondary-overlay", text: null, size: "lg", disabled: null, onPress: null };
      const intl = tmp2(1114).intl;
      obj2.text = intl.string(tmp2(1114).t.cpT0Cq);
      obj2.disabled = flag;
      obj2.onPress = bounty.onClose;
      tmp9Result = tmp9(tmp2(4989).Button, obj2);
    }
    items1[1] = tmp9Result;
    obj.children = items1;
    visible = closure_4(visible(4310).View, obj);
    tmp9 = closure_3;
  }
  return visible;
};