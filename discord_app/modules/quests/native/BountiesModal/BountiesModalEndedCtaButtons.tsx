// === Module 17314: BountiesModalEndedCtaButtons ===

// Module 17314 (BountiesModalEndedCtaButtons)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import QuestContent from "QuestContent" /* 6844 */;
import AdCreativeType from "AdCreativeType" /* 6846 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7952 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9815 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = createStyles.createStyles(() => {
  const obj = { container: { gap: nativeDefault.space.PX_8 } };
  return obj;
});
let closure_6 = { code: "(function BountiesModalEndedCtaButtonsTsx1(){let[withTiming,visible,timingStandard]=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};})" };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx");

export default function BountiesModalEndedCtaButtons(bounty) {
  _require = bounty.bounty;
  ({ visible, sourceQuestContent: c1, showCloseButton } = bounty);
  if (showCloseButton === undefined) {
    showCloseButton = true;
  }
  let flag = bounty.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_5();
  require("ContentImpressionTrackerHooks").useGetQuestImpressionId();
  let obj = require("ContentImpressionTrackerHooks");
  items = [closure_6, require("timing/timing").withTiming, visible, require("timingPresets").timingStandard];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class BountiesModalEndedCtaButtonsTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  BountiesModalEndedCtaButtonsTsx1.__closure = items1;
  BountiesModalEndedCtaButtonsTsx1.__workletHash = 17030874897727;
  BountiesModalEndedCtaButtonsTsx1.__initData = tmp4;
  const animatedStyle = require("module_1652").useAnimatedStyle(BountiesModalEndedCtaButtonsTsx1);
  require("BountyCtaHelpers");
  if (visible) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.container, animatedStyle];
    obj3.style = items2;
    const obj4 = {
      variant: "primary-overlay",
      text: tmp10.buttonLabel,
      size: "lg",
      disabled: flag,
      onPress() {
          const obj = QuestPlatformUtils;
          const obj2 = { adContentId: _undefined.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: _undefined.cta };
          const result = obj.openAdGameLinkDirectly(obj2, { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: _undefined2(), sourceQuestContent });
        }
    };
    const items3 = [closure_3(tmp2(5760).Button, obj4), ];
    let tmp13Result = null;
    if (showCloseButton) {
      const obj5 = { variant: "secondary-overlay", text: null, size: "lg", disabled: null, onPress: null };
      const intl = tmp2(1113).intl;
      obj5.text = intl.string(tmp2(1113).t.cpT0Cq);
      obj5.disabled = flag;
      obj5.onPress = bounty.onClose;
      tmp13Result = closure_3(tmp2(5760).Button, obj5);
    }
    items3[1] = tmp13Result;
    obj3.children = items3;
    visible = closure_4(_modDef1652.View, obj3);
  }
  return visible;
};