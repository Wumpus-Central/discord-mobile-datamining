// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx
import closure_2 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../../stores/SelectedGuildStore.tsx";
import { ContentDismissActionType } from "../../../../dismissible_content/DismissibleContentConstants.tsx";

const require = arg1;
let closure_6 = [];
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export const useYouBarCoachmark = function useYouBarCoachmark(isQuestRendered) {
  isQuestRendered = isQuestRendered.isQuestRendered;
  const visibleContent = isQuestRendered;
  let markAsDismissed;
  let isTinyBroncoEligible;
  let isFocused;
  let stateFromStores;
  const animatedRef = visibleContent(markAsDismissed[6]).useAnimatedRef();
  let obj = visibleContent(markAsDismissed[6]);
  const isInPrivateProfilesExperiment = visibleContent(markAsDismissed[7]).useIsInPrivateProfilesExperiment("PrivateProfileCoachmark");
  markAsDismissed = isInPrivateProfilesExperiment;
  const obj2 = visibleContent(markAsDismissed[7]);
  isTinyBroncoEligible = visibleContent(markAsDismissed[8]).useIsTinyBroncoEligible();
  const obj3 = visibleContent(markAsDismissed[8]);
  isFocused = visibleContent(markAsDismissed[9]).useIsFocused();
  const obj4 = visibleContent(markAsDismissed[9]);
  let items = [stateFromStores];
  stateFromStores = visibleContent(markAsDismissed[10]).useStateFromStores(items, () => {
    let obj = visibleContent(markAsDismissed[11]);
    obj = { from: "authed", unit: visibleContent(markAsDismissed[12]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed(obj) >= 10;
    return null != stateFromStores.getGuildId() && obj.getFirstInstallTimeElapsed(obj) >= 10;
  });
  const items1 = [isInPrivateProfilesExperiment, isQuestRendered, stateFromStores, isTinyBroncoEligible, isFocused];
  const memo = isFocused.useMemo(() => {
    if (!visibleContent) {
      if (isFocused) {
        const items = [];
        if (stateFromStores) {
          items.push(visibleContent(markAsDismissed[5]).DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
        }
        if (markAsDismissed) {
          items.push(visibleContent(markAsDismissed[5]).DismissibleContent.PRIVATE_PROFILE_COACHMARK);
        }
        if (isTinyBroncoEligible) {
          items.push(visibleContent(markAsDismissed[5]).DismissibleContent.TINY_BRONCO);
        }
        return items;
      }
    }
    return closure_1_6;
  }, items1);
  const obj5 = visibleContent(markAsDismissed[10]);
  const obj6 = visibleContent(markAsDismissed[13]);
  [tmp8, tmp9] = isTinyBroncoEligible(visibleContent(markAsDismissed[13]).useSelectedDismissibleContent(memo), 2);
  const items2 = [markAsDismissed, visibleContent];
  const memo1 = isFocused.useMemo(() => {
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
  const tmp7 = isTinyBroncoEligible(visibleContent(markAsDismissed[13]).useSelectedDismissibleContent(memo), 2);
  const privateProfileCoachmarkProps = visibleContent(markAsDismissed[14]).usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj7 = visibleContent(markAsDismissed[14]);
  const coachmark = visibleContent(markAsDismissed[15]).useCoachmark(animatedRef, privateProfileCoachmarkProps);
  const obj8 = visibleContent(markAsDismissed[15]);
  const coachmark1 = visibleContent(markAsDismissed[15]).useCoachmark(animatedRef, memo1);
  return { animatedRef, visibleContent, markAsDismissed };
};