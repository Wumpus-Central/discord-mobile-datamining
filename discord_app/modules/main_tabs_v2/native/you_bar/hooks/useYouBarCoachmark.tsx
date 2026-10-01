// === Module 16226: useYouBarCoachmark ===

// Module 16226 (useYouBarCoachmark)
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4684 */;

require = fn;
const ContentDismissActionType = fn(2041).ContentDismissActionType;
let closure_6 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export const useYouBarCoachmark = function useYouBarCoachmark(isQuestRendered) {
  isQuestRendered = isQuestRendered.isQuestRendered;
  let isTinyBroncoEligible;
  const animatedRef = isQuestRendered(isTinyBroncoEligible[6]).useAnimatedRef();
  let obj = isQuestRendered(isTinyBroncoEligible[6]);
  isTinyBroncoEligible = isQuestRendered(isTinyBroncoEligible[7]).useIsTinyBroncoEligible();
  let obj2 = isQuestRendered(isTinyBroncoEligible[7]);
  const isFocused = isQuestRendered(isTinyBroncoEligible[8]).useIsFocused();
  const obj3 = isQuestRendered(isTinyBroncoEligible[8]);
  let items = [SelectedGuildStore];
  const stateFromStores = isQuestRendered(isTinyBroncoEligible[9]).useStateFromStores(items, () => {
    const obj = isQuestRendered(isTinyBroncoEligible[10]);
    const obj2 = { from: "authed", unit: isQuestRendered(isTinyBroncoEligible[11]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed({ from: "authed", unit: isQuestRendered(isTinyBroncoEligible[11]).TimeUnits.DAYS }) >= 10;
    return null != guildId.getGuildId() && obj.getFirstInstallTimeElapsed({ from: "authed", unit: isQuestRendered(isTinyBroncoEligible[11]).TimeUnits.DAYS }) >= 10;
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
  const obj4 = isQuestRendered(isTinyBroncoEligible[9]);
  const obj5 = isQuestRendered(isTinyBroncoEligible[12]);
  [tmp7, tmp8] = isFocused(isQuestRendered(isTinyBroncoEligible[12]).useSelectedDismissibleContent(memo), 2);
  closure_129_0 = visibleContent;
  closure_129_1 = markAsDismissed;
  const items2 = [markAsDismissed, visibleContent];
  const memo1 = stateFromStores.useMemo(() => {
    const obj = { title: null, description: null, position: "top", visible: null, onDismiss: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.gMFchc);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t["V3j11+"]);
    obj.visible = isQuestRendered === dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
    obj.onDismiss = function onDismiss() {
      return isTinyBroncoEligible(constants.USER_DISMISS);
    };
    return obj;
  }, items2);
  const tmp6 = isFocused(isQuestRendered(isTinyBroncoEligible[12]).useSelectedDismissibleContent(memo), 2);
  const privateProfileCoachmarkProps = isQuestRendered(isTinyBroncoEligible[13]).usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj6 = isQuestRendered(isTinyBroncoEligible[13]);
  const coachmark = isQuestRendered(isTinyBroncoEligible[14]).useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj7 = isQuestRendered(isTinyBroncoEligible[14]);
  const coachmark1 = isQuestRendered(isTinyBroncoEligible[14]).useCoachmark(animatedRef, memo1);
  return { animatedRef, visibleContent, markAsDismissed };
};