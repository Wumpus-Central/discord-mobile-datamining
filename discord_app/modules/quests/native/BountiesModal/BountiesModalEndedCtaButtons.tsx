// === Module 14854: BountiesModalEndedCtaButtons ===

// Module 14854 (BountiesModalEndedCtaButtons)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import QuestContent from "QuestContent" /* 5635 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10931 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = createStyles.createStyles(() => {
  const obj = { container: { gap: nativeDefault.space.PX_8 } };
  return obj;
});
const __initData = { code: "function BountiesModalEndedCtaButtonsTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
const __initData2 = { code: "function BountiesModalEndedCtaButtonsTsx2(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((bounty) => {
  const cResult = bounty(sourceQuestContent[4]).c(13);
  bounty = bounty.bounty;
  const visible = bounty.visible;
  sourceQuestContent = bounty.sourceQuestContent;
  ({ onClose, showCloseButton, disabled } = bounty);
  const tmp6 = closure_5();
  let obj = bounty(sourceQuestContent[4]);
  const getQuestImpressionId = bounty(sourceQuestContent[5]).useGetQuestImpressionId();
  const tmpResult = bounty(sourceQuestContent[5]);
  const fn = function u() {
    let num = 0;
    if (visible) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, timingPresets.timingStandard) };
  };
  const tmpResult3 = bounty(sourceQuestContent[6]);
  fn.__closure = { withTiming: bounty(sourceQuestContent[7]).withTiming, visible, timingStandard: bounty(sourceQuestContent[8]).timingStandard };
  fn.__workletHash = 11417131685254;
  fn.__initData = __initData;
  const animatedStyle = tmpResult3.useAnimatedStyle(fn);
  if (cResult[0] !== bounty) {
    const bountyCtaInfo = tmp(tmp2[9]).getBountyCtaInfo(bounty);
    cResult[0] = bounty;
    cResult[1] = bountyCtaInfo;
    let tmp9 = bountyCtaInfo;
    const tmpResult4 = tmp(tmp2[9]);
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === animatedStyle) {
    if (cResult[3] === bounty) {
      if (cResult[4] === tmp9) {
        if (cResult[5] === tmp5) {
          if (cResult[6] === getQuestImpressionId) {
            if (cResult[7] === onClose) {
              if (cResult[8] === tmp4) {
                if (cResult[9] === sourceQuestContent) {
                  if (cResult[10] === tmp6) {
                    if (cResult[11] === visible) {
                      let tmp11 = cResult[12];
                    }
                    return tmp11;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  let tmp13Result = visible;
  if (visible) {
    const obj3 = { style: null, children: null };
    const items = [tmp6.container, animatedStyle];
    obj3.style = items;
    const obj4 = {
      variant: "primary-overlay",
      text: tmp9.buttonLabel,
      size: "lg",
      disabled: tmp5,
      onPress() {
          const obj = QuestPlatformUtils;
          const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
          const result = obj.openAdGameLinkDirectly(obj2, { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent });
        }
    };
    const items1 = [getQuestImpressionId(tmp(tmp2[10]).Button, obj4), ];
    let tmp15Result = null;
    if (tmp4) {
      const obj5 = { variant: "secondary-overlay", text: null, size: "lg", disabled: null, onPress: null };
      const intl = tmp(tmp2[15]).intl;
      obj5.text = intl.string(tmp(tmp2[15]).t.cpT0Cq);
      obj5.disabled = tmp5;
      obj5.onPress = onClose;
      tmp15Result = tmp15(tmp(tmp2[10]).Button, obj5);
    }
    items1[1] = tmp15Result;
    obj3.children = items1;
    tmp13Result = closure_4(visible(tmp2[6]).View, obj3);
    tmp15 = getQuestImpressionId;
  }
  cResult[2] = animatedStyle;
  cResult[3] = bounty;
  cResult[4] = tmp9;
  cResult[5] = undefined !== disabled && disabled;
  cResult[6] = getQuestImpressionId;
  cResult[7] = onClose;
  cResult[8] = undefined === showCloseButton || showCloseButton;
  cResult[9] = sourceQuestContent;
  cResult[10] = tmp6;
  cResult[11] = visible;
  cResult[12] = tmp13Result;
  tmp11 = tmp13Result;
  let obj2 = { withTiming: bounty(sourceQuestContent[7]).withTiming, visible, timingStandard: bounty(sourceQuestContent[8]).timingStandard };
}) : ((bounty) => {
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
  closure_3 = bounty(10929).useGetQuestImpressionId();
  let obj = bounty(10929);
  const fn = function y() {
    let num = 0;
    if (visible) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, timingPresets.timingStandard) };
  };
  let obj2 = bounty(4618);
  fn.__closure = { withTiming: bounty(4897).withTiming, visible, timingStandard: bounty(4900).timingStandard };
  fn.__workletHash = 5587342121093;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  bounty(14853);
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
          const result = obj.openAdGameLinkDirectly(obj2, { content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_3(), sourceQuestContent });
        }
    };
    const items1 = [closure_3(tmp2(5601).Button, obj5), ];
    let tmp9Result = null;
    if (showCloseButton) {
      const obj6 = { variant: "secondary-overlay", text: null, size: "lg", disabled: null, onPress: null };
      const intl = tmp2(1126).intl;
      obj6.text = intl.string(tmp2(1126).t.cpT0Cq);
      obj6.disabled = flag;
      obj6.onPress = bounty.onClose;
      tmp9Result = tmp9(tmp2(5601).Button, obj6);
    }
    items1[1] = tmp9Result;
    obj4.children = items1;
    visible = closure_4(visible(4618).View, obj4);
    tmp9 = closure_3;
  }
  return visible;
});