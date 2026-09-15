// discord_app/modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = createStyles.createStyles(() => {
  const obj = { container: { gap: nativeDefault.space.PX_8 } };
  return obj;
});
const __initData = {
  code: "function BountiesModalEndedCtaButtonsTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}",
};
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
  const tmp = closure_5();
  closure_3 = bounty(11624).useGetQuestImpressionId();
  let obj = bounty(11624);
  const fn = function y() {
    let num = 0;
    if (visible) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, timingPresets.timingStandard) };
  };
  let obj2 = bounty(4376);
  fn.__closure = { withTiming: bounty(4640).withTiming, visible, timingStandard: bounty(4643).timingStandard };
  fn.__workletHash = 11417131685254;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  bounty(15139);
  if (visible) {
    const obj4 = { style: null, children: null };
    const items = [tmp.container, animatedStyle];
    obj4.style = items;
    const obj5 = {
      variant: "primary-overlay",
      text: tmp6.buttonLabel,
      size: "lg",
      disabled: flag,
      onPress() {
        const obj = QuestPlatformUtils;
        const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
        const result = obj.openAdGameLinkDirectly(obj2, {
          content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
          ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
          impressionId: closure_3(),
          sourceQuestContent,
        });
      },
    };
    const items1 = [closure_3(tmp2(5059).Button, obj5)];
    let tmp9Result = null;
    if (showCloseButton) {
      const obj6 = { variant: "secondary-overlay", text: null, size: "lg", disabled: null, onPress: null };
      const intl = tmp2(1115).intl;
      obj6.text = intl.string(tmp2(1115).t.cpT0Cq);
      obj6.disabled = flag;
      obj6.onPress = bounty.onClose;
      tmp9Result = tmp9(tmp2(5059).Button, obj6);
    }
    items1[1] = tmp9Result;
    obj4.children = items1;
    visible = closure_4(visible(4376).View, obj4);
    tmp9 = closure_3;
  }
  return visible;
}
