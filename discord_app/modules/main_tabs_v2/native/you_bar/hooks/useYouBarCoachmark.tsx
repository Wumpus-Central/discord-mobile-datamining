// === Module 18423: useYouBarCoachmark ===

// Module 18423 (useYouBarCoachmark)
import util from "util" /* 1113 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;

require = fn;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
let closure_6 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export function useYouBarCoachmark(isCondensed) {
  isCondensed = isCondensed.isCondensed;
  let isTinyBroncoEligible;
  const animatedRef = isCondensed(isTinyBroncoEligible[6]).useAnimatedRef();
  let obj = isCondensed(isTinyBroncoEligible[6]);
  isTinyBroncoEligible = isCondensed(isTinyBroncoEligible[7]).useIsTinyBroncoEligible();
  let obj2 = isCondensed(isTinyBroncoEligible[7]);
  const isFocused = isCondensed(isTinyBroncoEligible[8]).useIsFocused();
  const obj3 = isCondensed(isTinyBroncoEligible[8]);
  let items = [SelectedGuildStore];
  const stateFromStores = isCondensed(isTinyBroncoEligible[9]).useStateFromStores(items, () => {
    const obj = isCondensed(isTinyBroncoEligible[10]);
    const obj2 = { from: "authed", unit: isCondensed(isTinyBroncoEligible[11]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed({ from: "authed", unit: isCondensed(isTinyBroncoEligible[11]).TimeUnits.DAYS }) >= 10;
    return null != guildId.getGuildId() && obj.getFirstInstallTimeElapsed({ from: "authed", unit: isCondensed(isTinyBroncoEligible[11]).TimeUnits.DAYS }) >= 10;
  });
  const items1 = [isCondensed, stateFromStores, isTinyBroncoEligible, isFocused];
  const memo = stateFromStores.useMemo(() => {
    if (!isCondensed) {
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
  const obj4 = isCondensed(isTinyBroncoEligible[9]);
  const obj5 = isCondensed(isTinyBroncoEligible[12]);
  [tmp7, tmp8] = isFocused(isCondensed(isTinyBroncoEligible[12]).useSelectedDismissibleContent(memo), 2);
  closure_129_0 = visibleContent;
  closure_129_1 = markAsDismissed;
  const items2 = [markAsDismissed, visibleContent];
  const memo1 = stateFromStores.useMemo(() => {
    const obj = { title: null, description: null, position: "top", visible: null, onDismiss: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.gMFchc);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t["V3j11+"]);
    obj.visible = isCondensed === dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
    obj.onDismiss = function onDismiss() {
      return isTinyBroncoEligible(constants.USER_DISMISS);
    };
    return obj;
  }, items2);
  const tmp6 = isFocused(isCondensed(isTinyBroncoEligible[12]).useSelectedDismissibleContent(memo), 2);
  const privateProfileCoachmarkProps = isCondensed(isTinyBroncoEligible[13]).usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj6 = isCondensed(isTinyBroncoEligible[13]);
  const coachmark = isCondensed(isTinyBroncoEligible[14]).useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj7 = isCondensed(isTinyBroncoEligible[14]);
  const coachmark1 = isCondensed(isTinyBroncoEligible[14]).useCoachmark(animatedRef, memo1);
  return { animatedRef, visibleContent, markAsDismissed };
}