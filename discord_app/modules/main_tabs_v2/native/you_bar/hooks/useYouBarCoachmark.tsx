// === Module 15692: useYouBarCoachmark ===

// Module 15692 (useYouBarCoachmark)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleConnectionOpen" /* 4201 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;

const require = arg1;
let closure_6 = [];
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export const useYouBarCoachmark = function useYouBarCoachmark(isQuestRendered) {
  isQuestRendered = isQuestRendered.isQuestRendered;
  const visibleContent = isQuestRendered;
  let markAsDismissed;
  let isFocused;
  let stateFromStores;
  const animatedRef = visibleContent(markAsDismissed[6]).useAnimatedRef();
  let obj = visibleContent(markAsDismissed[6]);
  const isInPrivateProfilesExperiment = visibleContent(markAsDismissed[7]).useIsInPrivateProfilesExperiment("PrivateProfileCoachmark");
  markAsDismissed = isInPrivateProfilesExperiment;
  const obj2 = visibleContent(markAsDismissed[7]);
  isFocused = visibleContent(markAsDismissed[8]).useIsFocused();
  const obj3 = visibleContent(markAsDismissed[8]);
  let items = [closure_4];
  stateFromStores = visibleContent(markAsDismissed[9]).useStateFromStores(items, () => {
    let obj = visibleContent(markAsDismissed[10]);
    obj = { from: "authed", unit: visibleContent(markAsDismissed[11]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed(obj) >= 10;
    return null != guildId.getGuildId() && obj.getFirstInstallTimeElapsed(obj) >= 10;
  });
  const items1 = [isInPrivateProfilesExperiment, isQuestRendered, stateFromStores, isFocused];
  const memo = stateFromStores.useMemo(() => {
    if (!visibleContent) {
      if (isFocused) {
        const items = [];
        if (stateFromStores) {
          items.push(visibleContent(markAsDismissed[5]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
        }
        if (markAsDismissed) {
          items.push(visibleContent(markAsDismissed[5]).DismissibleContent.PRIVATE_PROFILE_COACHMARK);
        }
        return items;
      }
    }
    return closure_1_6;
  }, items1);
  const obj4 = visibleContent(markAsDismissed[9]);
  const obj5 = visibleContent(markAsDismissed[12]);
  [tmp7, tmp8] = isFocused(visibleContent(markAsDismissed[12]).useSelectedDismissibleContent(memo), 2);
  const items2 = [markAsDismissed, visibleContent];
  const memo1 = stateFromStores.useMemo(() => {
    const obj = { title: null, description: null, position: "top", visible: null, onDismiss: null };
    const intl = visibleContent(markAsDismissed[4]).intl;
    obj[0] = intl.string(visibleContent(markAsDismissed[4]).t.gMFchc);
    const intl2 = visibleContent(markAsDismissed[4]).intl;
    obj[1] = intl2.string(visibleContent(markAsDismissed[4]).t["V3j11+"]);
    obj[3] = visibleContent === visibleContent(markAsDismissed[5]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
    obj[4] = function onDismiss() {
      return callback(closure_1_5.USER_DISMISS);
    };
    return obj;
  }, items2);
  const tmp6 = isFocused(visibleContent(markAsDismissed[12]).useSelectedDismissibleContent(memo), 2);
  const privateProfileCoachmarkProps = visibleContent(markAsDismissed[13]).usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj6 = visibleContent(markAsDismissed[13]);
  const coachmark = visibleContent(markAsDismissed[14]).useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj7 = visibleContent(markAsDismissed[14]);
  const coachmark1 = visibleContent(markAsDismissed[14]).useCoachmark(animatedRef, memo1);
  return { animatedRef, visibleContent, markAsDismissed };
};