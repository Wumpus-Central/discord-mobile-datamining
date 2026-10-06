// discord_app/modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let bounty;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles(() => {
  const obj = { container: { gap: nativeDefault.space.PX_8 } };
  ({ gap: nativeDefault.space.PX_8 });
  return obj;
});
const __initData = {
  code: "function BountiesModalEndedCtaButtonsTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}",
};
const __initData2 = {
  code: "function BountiesModalEndedCtaButtonsTsx2(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}",
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (bounty) => {
      let disabled;
      let intl;
      let items;
      let items1;
      let onClose;
      let showCloseButton;
      let sourceQuestContent;
      let tmp9;
      let tmp = bounty;
      let obj = bounty(sourceQuestContent[4]);
      const cResult = obj.c(13);
      bounty = bounty.bounty;
      const visible = bounty.visible;
      sourceQuestContent = bounty.sourceQuestContent;
      ({ onClose, showCloseButton, disabled } = bounty);
      const tmp6 = closure_5();
      const tmpResult = tmp(sourceQuestContent[5]);
      const getQuestImpressionId = tmpResult.useGetQuestImpressionId();
      const fn = function u() {
        let num = 0;
        const withTiming = timing.withTiming;
        timing;
        if (visible) {
          num = 1;
        }
        const obj = { opacity: withTiming(num, timingPresets.timingStandard) };
        return obj;
      };
      const tmpResult3 = tmp(sourceQuestContent[6]);
      let obj2 = { withTiming: tmp(tmp2[7]).withTiming, visible, timingStandard: tmp(tmp2[8]).timingStandard };
      fn.__closure = obj2;
      fn.__workletHash = 11417131685254;
      fn.__initData = __initData;
      const animatedStyle = tmpResult3.useAnimatedStyle(fn);
      if (cResult[0] !== bounty) {
        const tmpResult4 = tmp(sourceQuestContent[9]);
        const bountyCtaInfo = tmpResult4.getBountyCtaInfo(bounty);
        let num = 0;
        cResult[0] = bounty;
        cResult[1] = bountyCtaInfo;
        tmp9 = bountyCtaInfo;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] === animatedStyle) {
        if (cResult[3] === bounty) {
          if (cResult[4] === tmp9) {
            if (cResult[5] === (undefined !== disabled && disabled)) {
              if (cResult[6] === getQuestImpressionId) {
                if (cResult[7] === onClose) {
                  if (cResult[8] === (undefined === showCloseButton || showCloseButton)) {
                    if (cResult[9] === sourceQuestContent) {
                      if (cResult[10] === tmp6) {
                        let tmp11;
                        if (cResult[11] === visible) {
                          tmp11 = cResult[12];
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
      if (tmp13Result) {
        const obj3 = { style: items, children: items1 };
        items = [tmp6.container, animatedStyle];
        const View = visible(tmp2[6]).View;
        const obj4 = {
          variant: "primary-overlay",
          text: tmp9.buttonLabel,
          size: "lg",
          disabled: undefined !== disabled && disabled,
          onPress() {
            const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
            const obj = {
              adContentId: bounty.id,
              adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
              cta: bounty.cta,
            };
            const obj2 = {
              content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
              ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
              impressionId: getQuestImpressionId(),
              sourceQuestContent,
            };
            const result = openAdGameLinkDirectly(obj, obj2);
          },
        };
        items1 = [getQuestImpressionId(tmp(sourceQuestContent[10]).Button, obj4)];
        let tmp15Result = null;
        const tmp15 = getQuestImpressionId;
        if (undefined === showCloseButton || showCloseButton) {
          const obj5 = {
            variant: "secondary-overlay",
            text: intl.string(tmp(sourceQuestContent[15]).t.cpT0Cq),
            size: "lg",
            disabled: undefined !== disabled && disabled,
            onPress: onClose,
          };
          const Button = tmp(tmp2[10]).Button;
          intl = tmp(tmp2[15]).intl;
          tmp15Result = tmp15(Button, obj5);
        }
        items1[1] = tmp15Result;
        tmp13Result = closure_4(View, obj3);
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
    }
  : (bounty) => {
      let intl;
      let items;
      let items1;
      let showCloseButton;
      let sourceQuestContent;
      bounty = bounty.bounty;
      let visible = bounty.visible;
      ({ sourceQuestContent: dependencyMap, showCloseButton } = bounty);
      const onClose = bounty.onClose;
      if (showCloseButton === undefined) {
        showCloseButton = true;
      }
      let flag = bounty.disabled;
      if (flag === undefined) {
        flag = false;
      }
      let tmp = closure_5();
      let obj = bounty(10929);
      let closure_3 = obj.useGetQuestImpressionId();
      let obj2 = bounty(4618);
      const fn = function y() {
        let num = 0;
        const withTiming = timing.withTiming;
        timing;
        if (visible) {
          num = 1;
        }
        const obj = { opacity: withTiming(num, timingPresets.timingStandard) };
        return obj;
      };
      fn.__closure = { withTiming: bounty(4897).withTiming, visible, timingStandard: bounty(4900).timingStandard };
      fn.__workletHash = 5587342121093;
      fn.__initData = __initData2;
      ({ withTiming: bounty(4897).withTiming, visible, timingStandard: bounty(4900).timingStandard });
      const animatedStyle = obj2.useAnimatedStyle(fn);
      bounty(14853);
      if (visible) {
        const obj4 = { style: items, children: items1 };
        items = [tmp.container, animatedStyle];
        const View = visible(4618).View;
        const obj5 = {
          variant: "primary-overlay",
          text: tmp6.buttonLabel,
          size: "lg",
          disabled: flag,
          onPress() {
            const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
            const obj = {
              adContentId: bounty.id,
              adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
              cta: bounty.cta,
            };
            const obj2 = {
              content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD,
              ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
              impressionId: closure_3(),
              sourceQuestContent: dependencyMap,
            };
            const result = openAdGameLinkDirectly(obj, obj2);
          },
        };
        items1 = [closure_3(bounty(5601).Button, obj5)];
        let tmp9Result = null;
        const tmp9 = closure_3;
        if (showCloseButton) {
          const obj6 = {
            variant: "secondary-overlay",
            text: intl.string(bounty(1126).t.cpT0Cq),
            size: "lg",
            disabled: flag,
            onPress: onClose,
          };
          const Button = tmp2(5601).Button;
          intl = tmp2(1126).intl;
          tmp9Result = tmp9(Button, obj6);
        }
        items1[1] = tmp9Result;
        visible = closure_4(View, obj4);
      }
      return visible;
    };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndedCtaButtons.tsx");

export default tmp3;
