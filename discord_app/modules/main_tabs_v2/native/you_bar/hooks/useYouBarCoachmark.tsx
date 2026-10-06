// === Module 16345: useYouBarCoachmark ===

// Module 16345 (useYouBarCoachmark)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import Link from "Link" /* 1491 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6901 */;
import useCoachmark from "useCoachmark" /* 9895 */;
import TinyBroncoLazy from "TinyBroncoLazy" /* 14542 */;
import usePrivateProfileCoachmarkProps from "usePrivateProfileCoachmarkProps" /* 16346 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let isQuestRendered, obj1;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_6 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = markAsDismissed(576);
  const cResult = obj.c(7);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visibleContent = markAsDismissed.visibleContent;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(markAsDismissed(1126).t.gMFchc);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(markAsDismissed(1126).t["V3j11+"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp4 = stringResult;
    tmp5 = stringResult1;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const YOU_BAR_DM_SWIPE_COACHMARK = tmp(2036).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
  if (cResult[2] !== markAsDismissed) {
    const fn = function c() {
      return markAsDismissed(ContentDismissActionType.USER_DISMISS);
    };
    cResult[2] = markAsDismissed;
    cResult[3] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === visibleContent === YOU_BAR_DM_SWIPE_COACHMARK) {
    let tmp10;
    if (cResult[5] === tmp8) {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const obj2 = { title: tmp4, description: tmp5, position: "top", visible: visibleContent === YOU_BAR_DM_SWIPE_COACHMARK, onDismiss: tmp8 };
  cResult[4] = visibleContent === YOU_BAR_DM_SWIPE_COACHMARK;
  cResult[5] = tmp8;
  cResult[6] = obj2;
  tmp10 = obj2;
}) : ((visibleContent) => {
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  const items = [markAsDismissed, visibleContent];
  return react.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(intl3.t.gMFchc),
      description: intl2.string(intl3.t["V3j11+"]),
      position: "top",
      visible: visibleContent === dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK,
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((isQuestRendered) => {
  let guildId;
  let tmp18;
  let tmp19;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(15);
  isQuestRendered = isQuestRendered.isQuestRendered;
  let obj2 = ReanimatedRexport;
  const animatedRef = obj2.useAnimatedRef();
  const obj3 = TinyBroncoLazy;
  const isTinyBroncoEligible = obj3.useIsTinyBroncoEligible();
  const obj4 = Link;
  const isFocused = obj4.useIsFocused();
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp7, C);
  if (!isQuestRendered) {
    let tmp11;
    if (isFocused) {
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === isTinyBroncoEligible) {
          tmp11 = cResult[4];
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
    const tmpResult4 = useSelectedDismissibleContent;
    class C {
      constructor() {
        obj = closure_1_0(closure_1_1[11]);
        obj1 = { from: "authed", unit: closure_1_0(closure_1_1[12]).TimeUnits.DAYS };
        tmp = obj.getFirstInstallTimeElapsed(obj1) >= 10;
        tmp2 = null != closure_1_4.getGuildId() && tmp;
        return tmp2;
      }
    }
    [tmp18, tmp19] = tmpResult4.useSelectedDismissibleContent(tmp11);
    _slicedToArray(tmpResult4.useSelectedDismissibleContent(tmp11), 2);
    if (cResult[5] === tmp19) {
      if (cResult[8] === tmp19) {
        let tmp23;
        if (cResult[9] === tmp18) {
          tmp23 = cResult[10];
        }
        const tmpResult5 = usePrivateProfileCoachmarkProps;
        const privateProfileCoachmarkProps = tmpResult5.usePrivateProfileCoachmarkProps(tmp23);
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
        const tmpResult6 = useCoachmark;
        const coachmark1 = tmpResult6.useCoachmark(animatedRef, tmp22);
        if (cResult[11] === animatedRef) {
          if (cResult[12] === tmp19) {
            let tmp28;
            if (cResult[13] === tmp18) {
              tmp28 = cResult[14];
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
  }
  tmp11 = closure_6;
}) : ((isQuestRendered) => {
  let guildId;
  let tmp7;
  let tmp8;
  isQuestRendered = isQuestRendered.isQuestRendered;
  let isTinyBroncoEligible;
  let obj = isQuestRendered(isTinyBroncoEligible[8]);
  const animatedRef = obj.useAnimatedRef();
  let obj2 = isQuestRendered(isTinyBroncoEligible[9]);
  isTinyBroncoEligible = obj2.useIsTinyBroncoEligible();
  const obj3 = isQuestRendered(isTinyBroncoEligible[10]);
  const isFocused = obj3.useIsFocused();
  let items = [SelectedGuildStore];
  const obj4 = isQuestRendered(isTinyBroncoEligible[13]);
  const stateFromStores = obj4.useStateFromStores(items, () => {
    const obj = isQuestRendered(isTinyBroncoEligible[11]);
    const obj2 = { from: "authed", unit: isQuestRendered(isTinyBroncoEligible[12]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed(obj2) >= 10;
    const tmp2 = null != guildId.getGuildId() && tmp;
    return tmp2;
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
  const obj5 = isQuestRendered(isTinyBroncoEligible[14]);
  [tmp7, tmp8] = isFocused(obj5.useSelectedDismissibleContent(memo), 2);
  isFocused(obj5.useSelectedDismissibleContent(memo), 2);
  const tmp9 = closure_7({ visibleContent, markAsDismissed });
  const obj6 = isQuestRendered(isTinyBroncoEligible[15]);
  const privateProfileCoachmarkProps = obj6.usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj7 = isQuestRendered(isTinyBroncoEligible[16]);
  const coachmark = obj7.useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj8 = isQuestRendered(isTinyBroncoEligible[16]);
  const coachmark1 = obj8.useCoachmark(animatedRef, tmp9);
  return { animatedRef, visibleContent, markAsDismissed };
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export const useYouBarCoachmark = tmp2;