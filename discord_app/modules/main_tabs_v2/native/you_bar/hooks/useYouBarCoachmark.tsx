// === Module 17980: useYouBarCoachmark ===

// Module 17980 (useYouBarCoachmark)
import util from "util" /* 1112 */;
import dismissible_content from "dismissible_content" /* 4750 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4950 */;

require = fn;
const ContentDismissActionType = fn(4763).ContentDismissActionType;
let closure_6 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export function useYouBarCoachmark(isCondensed) {
  isCondensed = isCondensed.isCondensed;
  let isAgeNoticeEligible;
  let isFocused;
  let stateFromStores;
  const animatedRef = isCondensed(isAgeNoticeEligible[6]).useAnimatedRef();
  const avatarAnchorRef = isFocused.useRef(null);
  let obj = isCondensed(isAgeNoticeEligible[6]);
  isAgeNoticeEligible = isCondensed(isAgeNoticeEligible[7]).useIsAgeNoticeEligible();
  let obj2 = isCondensed(isAgeNoticeEligible[7]);
  const isCheckpointRelaunchCoachmarkEligible = isCondensed(isAgeNoticeEligible[8]).useIsCheckpointRelaunchCoachmarkEligible("YouBar");
  const obj3 = isCondensed(isAgeNoticeEligible[8]);
  isFocused = isCondensed(isAgeNoticeEligible[9]).useIsFocused();
  const obj4 = isCondensed(isAgeNoticeEligible[9]);
  items = [stateFromStores];
  stateFromStores = isCondensed(isAgeNoticeEligible[10]).useStateFromStores(items, () => {
    const obj = isCondensed(isAgeNoticeEligible[11]);
    const obj2 = { from: "authed", unit: isCondensed(isAgeNoticeEligible[12]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed({ from: "authed", unit: isCondensed(isAgeNoticeEligible[12]).TimeUnits.DAYS }) >= 10;
    return null != stateFromStores.getGuildId() && obj.getFirstInstallTimeElapsed({ from: "authed", unit: isCondensed(isAgeNoticeEligible[12]).TimeUnits.DAYS }) >= 10;
  });
  const items1 = [isCondensed, stateFromStores, isAgeNoticeEligible, isCheckpointRelaunchCoachmarkEligible, isFocused];
  const memo = isFocused.useMemo(() => {
    if (!isCondensed) {
      if (isFocused) {
        items = [];
        if (stateFromStores) {
          items.push(dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
        }
        items.push(dismissible_content.DismissibleContent.PRIVATE_PROFILE_COACHMARK);
        if (isAgeNoticeEligible) {
          items.push(dismissible_content.DismissibleContent.TINY_BRONCO);
        }
        if (isCheckpointRelaunchCoachmarkEligible) {
          items.push(dismissible_content.DismissibleContent.BUILD_A_BEAR_RELAUNCH_COACHMARK);
        }
        return items;
      }
    }
    return closure_6;
  }, items1);
  const obj5 = isCondensed(isAgeNoticeEligible[10]);
  const obj6 = isCondensed(isAgeNoticeEligible[13]);
  [tmp9, tmp10] = isCheckpointRelaunchCoachmarkEligible(isCondensed(isAgeNoticeEligible[13]).useSelectedDismissibleContent(memo), 2);
  closure_129_0 = visibleContent;
  closure_129_1 = markAsDismissed;
  const items2 = [markAsDismissed, visibleContent];
  const memo1 = isFocused.useMemo(() => {
    const obj = { title: null, description: null, position: "top", visible: null, onDismiss: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.gMFchc);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t["V3j11+"]);
    obj.visible = isCondensed === dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
    obj.onDismiss = function onDismiss() {
      return isAgeNoticeEligible(constants.USER_DISMISS);
    };
    return obj;
  }, items2);
  const tmp8 = isCheckpointRelaunchCoachmarkEligible(isCondensed(isAgeNoticeEligible[13]).useSelectedDismissibleContent(memo), 2);
  const privateProfileCoachmarkProps = isCondensed(isAgeNoticeEligible[14]).usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj7 = isCondensed(isAgeNoticeEligible[14]);
  const checkpointRelaunchCoachmarkProps = isCondensed(isAgeNoticeEligible[8]).useCheckpointRelaunchCoachmarkProps({ visibleContent, markAsDismissed });
  const obj8 = isCondensed(isAgeNoticeEligible[8]);
  const coachmark = isCondensed(isAgeNoticeEligible[15]).useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj9 = isCondensed(isAgeNoticeEligible[15]);
  const coachmark1 = isCondensed(isAgeNoticeEligible[15]).useCoachmark(animatedRef, memo1);
  const obj10 = isCondensed(isAgeNoticeEligible[15]);
  const coachmark2 = isCondensed(isAgeNoticeEligible[15]).useCoachmark(avatarAnchorRef, checkpointRelaunchCoachmarkProps);
  return { animatedRef, avatarAnchorRef, visibleContent, markAsDismissed };
}