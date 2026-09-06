// discord_app/modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx
import util from "../../../../../intl/index.native.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../../../stores/SelectedGuildStore.tsx";

require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
let closure_6 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarCoachmark.tsx");

export const useYouBarCoachmark = function useYouBarCoachmark(isQuestRendered) {
  isQuestRendered = isQuestRendered.isQuestRendered;
  let isInPrivateProfilesExperiment;
  let stateFromStores;
  const animatedRef = isQuestRendered(isInPrivateProfilesExperiment[6]).useAnimatedRef();
  let obj = isQuestRendered(isInPrivateProfilesExperiment[6]);
  isInPrivateProfilesExperiment = isQuestRendered(isInPrivateProfilesExperiment[7]).useIsInPrivateProfilesExperiment(
    "PrivateProfileCoachmark",
  );
  const obj2 = isQuestRendered(isInPrivateProfilesExperiment[7]);
  const isTinyBroncoEligible = isQuestRendered(isInPrivateProfilesExperiment[8]).useIsTinyBroncoEligible();
  const obj3 = isQuestRendered(isInPrivateProfilesExperiment[8]);
  const isFocused = isQuestRendered(isInPrivateProfilesExperiment[9]).useIsFocused();
  const obj4 = isQuestRendered(isInPrivateProfilesExperiment[9]);
  let items = [stateFromStores];
  stateFromStores = isQuestRendered(isInPrivateProfilesExperiment[10]).useStateFromStores(items, () => {
    isQuestRendered(isInPrivateProfilesExperiment[11]);
    const obj = { from: "authed", unit: isQuestRendered(isInPrivateProfilesExperiment[12]).TimeUnits.DAYS };
    const tmp = obj.getFirstInstallTimeElapsed(obj) >= 10;
    return null != stateFromStores.getGuildId() && obj.getFirstInstallTimeElapsed(obj) >= 10;
  });
  const items1 = [isInPrivateProfilesExperiment, isQuestRendered, stateFromStores, isTinyBroncoEligible, isFocused];
  const memo = isFocused.useMemo(() => {
    if (!isQuestRendered) {
      if (isFocused) {
        const items = [];
        if (stateFromStores) {
          items.push(dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK);
        }
        if (isInPrivateProfilesExperiment) {
          items.push(dismissible_content.DismissibleContent.PRIVATE_PROFILE_COACHMARK);
        }
        if (isTinyBroncoEligible) {
          items.push(dismissible_content.DismissibleContent.TINY_BRONCO);
        }
        return items;
      }
    }
    return closure_6;
  }, items1);
  const obj5 = isQuestRendered(isInPrivateProfilesExperiment[10]);
  const obj6 = isQuestRendered(isInPrivateProfilesExperiment[13]);
  [tmp8, tmp9] = isTinyBroncoEligible(
    isQuestRendered(isInPrivateProfilesExperiment[13]).useSelectedDismissibleContent(memo),
    2,
  );
  closure_129_0 = visibleContent;
  closure_129_1 = markAsDismissed;
  const items2 = [markAsDismissed, visibleContent];
  const memo1 = isFocused.useMemo(() => {
    const obj = { title: null, description: null, position: "top", visible: null, onDismiss: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.gMFchc);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t["V3j11+"]);
    obj.visible = isQuestRendered === dismissible_content.DismissibleContent.YOU_BAR_DM_SWIPE_COACHMARK;
    obj.onDismiss = function onDismiss() {
      return isInPrivateProfilesExperiment(constants.USER_DISMISS);
    };
    return obj;
  }, items2);
  const tmp7 = isTinyBroncoEligible(
    isQuestRendered(isInPrivateProfilesExperiment[13]).useSelectedDismissibleContent(memo),
    2,
  );
  const privateProfileCoachmarkProps = isQuestRendered(
    isInPrivateProfilesExperiment[14],
  ).usePrivateProfileCoachmarkProps({ visibleContent, markAsDismissed });
  const obj7 = isQuestRendered(isInPrivateProfilesExperiment[14]);
  const coachmark = isQuestRendered(isInPrivateProfilesExperiment[15]).useCoachmark(
    animatedRef,
    privateProfileCoachmarkProps,
  );
  const obj8 = isQuestRendered(isInPrivateProfilesExperiment[15]);
  const coachmark1 = isQuestRendered(isInPrivateProfilesExperiment[15]).useCoachmark(animatedRef, memo1);
  return { animatedRef, visibleContent, markAsDismissed };
};
