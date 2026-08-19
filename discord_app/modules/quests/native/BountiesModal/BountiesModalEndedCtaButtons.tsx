// discord_app/modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles(() => {
  const obj = { gap: ThemesDefault.space.PX_8 };
  obj[0] = obj;
  return obj;
});
let closure_6 = { code: "function BountiesModalEndedCtaButtonsTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
let result = obj132.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx");

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
  let obj = bounty(10687);
  const callback = obj.useGetQuestImpressionId();
  obj1 = bounty(4115);
  const fn = function y() {
    let obj = bounty(dependencyMap[5]);
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, bounty(dependencyMap[6]).timingStandard) };
    return obj;
  };
  obj = { withTiming: bounty(4664).withTiming, visible, timingStandard: bounty(4667).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 11417131685254;
  fn.__initData = closure_6;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  bounty(14394);
  if (visible) {
    obj = { style: null, children: null };
    const items = [tmp.container, animatedStyle];
    obj[0] = items;
    obj1 = { variant: "primary-overlay", text: null, size: "lg", disabled: null, onPress: null };
    obj1[1] = tmp6.buttonLabel;
    obj1[3] = flag;
    obj1[4] = function onPress() {
      bounty(dependencyMap[9]);
      { adContentId: bounty.id, adCreativeType: bounty(dependencyMap[10]).AdCreativeType.BOUNTY, cta: bounty.cta };
      const obj = { content: bounty(dependencyMap[11]).QuestContent.VIDEO_MODAL_END_CARD, ctaContent: bounty(dependencyMap[12]).QuestContentCTA.OPEN_GAME_LINK, impressionId: callback(), sourceQuestContent: closure_2 };
      const result = obj.openAdGameLinkDirectly(obj, obj);
    };
    const items1 = [callback(tmp2(4745).Button, obj1), ];
    let tmp9Result = null;
    if (showCloseButton) {
      const obj2 = { variant: "secondary-overlay", text: null, size: "lg", disabled: null, onPress: null };
      const intl = tmp2(1236).intl;
      obj2[1] = intl.string(tmp2(1236).t.cpT0Cq);
      obj2[3] = flag;
      obj2[4] = bounty.onClose;
      tmp9Result = tmp9(tmp2(4745).Button, obj2);
    }
    items1[1] = tmp9Result;
    obj[1] = items1;
    visible = callback(visible(4115).View, obj);
    tmp9 = callback;
  }
  return visible;
};