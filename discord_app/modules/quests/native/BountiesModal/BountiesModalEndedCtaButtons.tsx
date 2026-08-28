// discord_app/modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx
import set from "../../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles(() => {
  let obj = { container: null };
  obj = { gap: ThemesDefault.space.PX_8 };
  obj[0] = obj;
  return obj;
});
let closure_6 = { code: "function BountiesModalEndedCtaButtonsTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
let result = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx");

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
  let callback;
  let obj = bounty(11024);
  callback = obj.useGetQuestImpressionId();
  obj1 = bounty(4186);
  const fn = function y() {
    let obj = bounty(closure_1_2[5]);
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, bounty(closure_1_2[6]).timingStandard) };
    return obj;
  };
  obj = { withTiming: bounty(4447).withTiming, visible, timingStandard: bounty(4450).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 11417131685254;
  fn.__initData = closure_6;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  bounty(14576);
  if (visible) {
    obj = { style: null, children: null };
    const items = [tmp.container, animatedStyle];
    obj[0] = items;
    obj1 = { variant: "primary-overlay", text: null, size: "lg", disabled: null, onPress: null };
    obj1[1] = tmp6.buttonLabel;
    obj1[3] = flag;
    obj1[4] = function onPress() {
      let obj = bounty(closure_1_2[9]);
      obj = { adContentId: bounty.id, adCreativeType: bounty(closure_1_2[10]).AdCreativeType.BOUNTY, cta: bounty.cta };
      obj = { content: bounty(closure_1_2[11]).QuestContent.VIDEO_MODAL_END_CARD, ctaContent: bounty(closure_1_2[12]).QuestContentCTA.OPEN_GAME_LINK, impressionId: callback(), sourceQuestContent: closure_2 };
      const result = obj.openAdGameLinkDirectly(obj, obj);
    };
    const items1 = [callback(tmp2(4893).Button, obj1), ];
    let tmp9Result = null;
    if (showCloseButton) {
      const obj2 = { variant: "secondary-overlay", text: null, size: "lg", disabled: null, onPress: null };
      const intl = tmp2(1236).intl;
      obj2[1] = intl.string(tmp2(1236).t.cpT0Cq);
      obj2[3] = flag;
      obj2[4] = bounty.onClose;
      tmp9Result = tmp9(tmp2(4893).Button, obj2);
    }
    items1[1] = tmp9Result;
    obj[1] = items1;
    visible = closure_4(visible(4186).View, obj);
    const tmp7 = closure_4;
    tmp9 = callback;
  }
  return visible;
};