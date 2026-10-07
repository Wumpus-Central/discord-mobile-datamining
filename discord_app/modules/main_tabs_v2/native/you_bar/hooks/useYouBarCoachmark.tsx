// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import util from "../../../../../intl/index.native.tsx";
import Link from "../../../../../../_runtime/01491_Link.js";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import useSelectedDismissibleContent from "../../../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import useCoachmark from "../../../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import TinyBroncoLazy from "../../../../tiny_bronco/native/TinyBroncoLazy.tsx";
import usePrivateProfileCoachmarkProps from "../../../../user_profile/native/usePrivateProfileCoachmarkProps.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../../../stores/SelectedGuildStore.tsx";

require = fn;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
let closure_6 = [];
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      const cResult = markAsDismissed(576).c(7);
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.gMFchc);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t["V3j11+"]);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp4 = stringResult;
        tmp5 = stringResult1;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] !== markAsDismissed) {
        const fn = function c() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        };
        cResult[2] = markAsDismissed;
        cResult[3] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[3];
      }
      const tmp9 =
        markAsDismissed.visibleContent === markAsDismissed(2036).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
      if (cResult[4] === tmp9) {
        if (cResult[5] === tmp8) {
          let tmp10 = cResult[6];
        }
        return tmp10;
      }
      const obj2 = { title: tmp4, description: tmp5, position: "top", visible: tmp9, onDismiss: tmp8 };
      cResult[4] = tmp9;
      cResult[5] = tmp8;
      cResult[6] = obj2;
      tmp10 = obj2;
      const obj = markAsDismissed(576);
    }
  : (visibleContent) => {
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      const items = [markAsDismissed, visibleContent];
      return noop.useMemo(() => {
        const obj = { title: null, description: null, position: "top", visible: null, onDismiss: null };
        const intl = util.intl;
        obj.title = intl.string(util.t.gMFchc);
        const intl2 = util.intl;
        obj.description = intl2.string(util.t["V3j11+"]);
        obj.visible = visibleContent === dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
        obj.onDismiss = function onDismiss() {
          return markAsDismissed(constants.USER_DISMISS);
        };
        return obj;
      }, items);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export const useYouBarCoachmark = ReactCompilerGating.isReactCompilerEnabled()
  ? (isQuestRendered) => {
      const cResult = c.c(15);
      const animatedRef = ReanimatedRexport.useAnimatedRef();
      const isTinyBroncoEligible = TinyBroncoLazy.useIsTinyBroncoEligible();
      const isFocused = Link.useIsFocused();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore];
        class C {
          constructor() {
            obj = closure_1_0(closure_1_1[11]);
            obj1 = { from: "authed", unit: closure_1_0(closure_1_1[12]).TimeUnits.DAYS };
            tmp = obj.getFirstInstallTimeElapsed(obj1) >= 10;
            tmp2 = null != closure_1_4.getGuildId() && tmp;
            return tmp2;
          }
        }
        cResult[0] = items;
        cResult[1] = C;
        tmp7 = items;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp7, C);
      if (!isQuestRendered.isQuestRendered) {
        if (isFocused) {
          if (cResult[2] === stateFromStores) {
            if (cResult[3] === isTinyBroncoEligible) {
              let tmp11 = cResult[4];
            }
          }
          const items1 = [];
          if (stateFromStores) {
            items1.push(dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
          }
          class C {
            constructor() {
              obj = closure_1_0(closure_1_1[11]);
              obj1 = { from: "authed", unit: closure_1_0(closure_1_1[12]).TimeUnits.DAYS };
              tmp = obj.getFirstInstallTimeElapsed(obj1) >= 10;
              tmp2 = null != closure_1_4.getGuildId() && tmp;
              return tmp2;
            }
          }
          tmp13(dismissible_content.DismissibleContent.PRIVATE_PROFILE_COACHMARK);
          if (isTinyBroncoEligible) {
            items1.push(dismissible_content.DismissibleContent.TINY_BRONCO);
          }
          cResult[2] = stateFromStores;
          cResult[3] = isTinyBroncoEligible;
          cResult[4] = items1;
          tmp11 = items1;
        }
        class C {
          constructor() {
            obj = closure_1_0(closure_1_1[11]);
            obj1 = { from: "authed", unit: closure_1_0(closure_1_1[12]).TimeUnits.DAYS };
            tmp = obj.getFirstInstallTimeElapsed(obj1) >= 10;
            tmp2 = null != closure_1_4.getGuildId() && tmp;
            return tmp2;
          }
        }
        const tmpResult4 = useSelectedDismissibleContent;
        [tmp18, tmp19] = useSelectedDismissibleContent.useSelectedDismissibleContent(tmp11);
        if (cResult[5] === tmp19) {
          if (cResult[8] === tmp19) {
            if (cResult[9] === tmp18) {
              let tmp23 = cResult[10];
            }
            const privateProfileCoachmarkProps = usePrivateProfileCoachmarkProps.usePrivateProfileCoachmarkProps(tmp23);
            class C {
              constructor() {
                obj = closure_1_0(closure_1_1[11]);
                obj1 = { from: "authed", unit: closure_1_0(closure_1_1[12]).TimeUnits.DAYS };
                tmp = obj.getFirstInstallTimeElapsed(obj1) >= 10;
                tmp2 = null != closure_1_4.getGuildId() && tmp;
                return tmp2;
              }
            }
            const coachmark = obj9.useCoachmark(animatedRef, privateProfileCoachmarkProps);
            const tmpResult5 = usePrivateProfileCoachmarkProps;
            const coachmark1 = useCoachmark.useCoachmark(animatedRef, tmp22);
            if (cResult[11] === animatedRef) {
              if (cResult[12] === tmp19) {
                if (cResult[13] === tmp18) {
                  let tmp28 = cResult[14];
                }
                return tmp28;
              }
            }
            const obj5 = { animatedRef, visibleContent: tmp18, markAsDismissed: tmp19 };
            cResult[11] = animatedRef;
            cResult[12] = tmp19;
            cResult[13] = tmp18;
            cResult[14] = obj5;
            tmp28 = obj5;
            const tmpResult6 = useCoachmark;
          }
          class C {
            constructor() {
              obj = closure_1_0(closure_1_1[11]);
              obj1 = { from: "authed", unit: closure_1_0(closure_1_1[12]).TimeUnits.DAYS };
              tmp = obj.getFirstInstallTimeElapsed(obj1) >= 10;
              tmp2 = null != closure_1_4.getGuildId() && tmp;
              return tmp2;
            }
          }
          tmp24[0] = tmp18;
          tmp24[1] = tmp19;
          cResult[8] = tmp19;
          cResult[9] = tmp18;
          cResult[10] = tmp24;
          tmp23 = tmp24;
        }
        const obj6 = { visibleContent: tmp18, markAsDismissed: tmp19 };
        cResult[5] = tmp19;
        cResult[6] = tmp18;
        cResult[7] = obj6;
        const tmp17 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(tmp11), 2);
      }
      tmp11 = closure_6;
      const tmpResult = initialize;
    }
  : (isQuestRendered) => {
      isQuestRendered = isQuestRendered.isQuestRendered;
      let isTinyBroncoEligible;
      const animatedRef = isQuestRendered(isTinyBroncoEligible[8]).useAnimatedRef();
      let obj = isQuestRendered(isTinyBroncoEligible[8]);
      isTinyBroncoEligible = isQuestRendered(isTinyBroncoEligible[9]).useIsTinyBroncoEligible();
      let obj2 = isQuestRendered(isTinyBroncoEligible[9]);
      const isFocused = isQuestRendered(isTinyBroncoEligible[10]).useIsFocused();
      const obj3 = isQuestRendered(isTinyBroncoEligible[10]);
      let items = [SelectedGuildStore];
      const stateFromStores = isQuestRendered(isTinyBroncoEligible[13]).useStateFromStores(items, () => {
        const obj = isQuestRendered(isTinyBroncoEligible[11]);
        const obj2 = { from: "authed", unit: isQuestRendered(isTinyBroncoEligible[12]).TimeUnits.DAYS };
        const tmp =
          obj.getFirstInstallTimeElapsed({
            from: "authed",
            unit: isQuestRendered(isTinyBroncoEligible[12]).TimeUnits.DAYS,
          }) >= 10;
        return (
          null != guildId.getGuildId() &&
          obj.getFirstInstallTimeElapsed({
            from: "authed",
            unit: isQuestRendered(isTinyBroncoEligible[12]).TimeUnits.DAYS,
          }) >= 10
        );
      });
      const items1 = [isQuestRendered, stateFromStores, isTinyBroncoEligible, isFocused];
      const memo = stateFromStores.useMemo(() => {
        if (!isQuestRendered) {
          if (isFocused) {
            const items = [];
            if (stateFromStores) {
              items.push(dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
            }
            items.push(dismissible_content.DismissibleContent.PRIVATE_PROFILE_COACHMARK);
            if (isTinyBroncoEligible) {
              items.push(dismissible_content.DismissibleContent.TINY_BRONCO);
            }
            return items;
          }
        }
        return closure_6;
      }, items1);
      const obj4 = isQuestRendered(isTinyBroncoEligible[13]);
      const obj5 = isQuestRendered(isTinyBroncoEligible[14]);
      [tmp7, tmp8] = isFocused(isQuestRendered(isTinyBroncoEligible[14]).useSelectedDismissibleContent(memo), 2);
      const tmp6 = isFocused(isQuestRendered(isTinyBroncoEligible[14]).useSelectedDismissibleContent(memo), 2);
      const tmp9 = closure_7({ visibleContent, markAsDismissed });
      const privateProfileCoachmarkProps = isQuestRendered(isTinyBroncoEligible[15]).usePrivateProfileCoachmarkProps({
        visibleContent,
        markAsDismissed,
      });
      const obj6 = isQuestRendered(isTinyBroncoEligible[15]);
      const coachmark = isQuestRendered(isTinyBroncoEligible[16]).useCoachmark(
        animatedRef,
        privateProfileCoachmarkProps,
      );
      const obj7 = isQuestRendered(isTinyBroncoEligible[16]);
      const coachmark1 = isQuestRendered(isTinyBroncoEligible[16]).useCoachmark(animatedRef, tmp9);
      return { animatedRef, visibleContent, markAsDismissed };
    };
