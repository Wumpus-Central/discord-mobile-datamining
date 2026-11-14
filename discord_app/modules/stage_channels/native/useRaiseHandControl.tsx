// discord_app/modules/stage_channels/native/useRaiseHandControl.tsx
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AgeVerificationAnalyticsUtils from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import useStageSpeakingForCurrentUser from "../useStageSpeakingForCurrentUser.tsx";
import AgeVerificationActionCreatorsDefault from "../../age_assurance/AgeVerificationActionCreators.native.tsx";
import useLocalStorageState from "../../../hooks/useLocalStorageState.tsx";
import useCanRaiseHand from "../useCanRaiseHand.tsx";
import AgeVerificationSpeakerActionSheet from "components/AgeVerificationSpeakerActionSheet.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const AgeVerificationSpeakerActionSheetDefault = AgeVerificationSpeakerActionSheet;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/useRaiseHandControl.tsx");

export default function useRaiseHandControl(id) {
  [tmp2, require] = shouldAgeVerifyToSpeakForCurrentUser(first(12964)(id), 2);
  let tmp = shouldAgeVerifyToSpeakForCurrentUser(first(12964)(id), 2);
  const tmp3 = shouldAgeVerifyToSpeakForCurrentUser(
    useLocalStorageState.useLocalStorageState("age-verification-stage-popover-dismissed", false),
    2,
  );
  first = tmp3[0];
  dependencyMap = tmp5;
  shouldAgeVerifyToSpeakForCurrentUser = useStageSpeakingForCurrentUser.useShouldAgeVerifyToSpeakForCurrentUser(id.id);
  const shouldShowAgeVerificationPopover = useStageSpeakingForCurrentUser.useShouldShowAgeVerificationPopover(id.id);
  const canRaiseHand = useCanRaiseHand.useCanRaiseHand(id);
  items = [shouldShowAgeVerificationPopover, first, tmp3[1]];
  const effect = shouldShowAgeVerificationPopover.useEffect(() => {
    let tmp = shouldShowAgeVerificationPopover;
    if (shouldShowAgeVerificationPopover) {
      tmp = !first;
    }
    if (tmp) {
      const obj2 = { content: null, key: null };
      const obj3 = {
        onClose() {
          return closure_1_2(true);
        },
      };
      obj2.content = jsx(AgeVerificationSpeakerActionSheetDefault, {
        onClose() {
          return closure_1_2(true);
        },
      });
      obj2.key = AgeVerificationSpeakerActionSheet.AGE_VERIFICATION_SPEAKER_SHEET_KEY;
      ActionSheetActionCreators.showActionSheet(obj2);
    }
  }, items);
  const obj5 = {
    hasRequestedToSpeak: tmp2,
    shouldAgeVerifyToSpeak: shouldAgeVerifyToSpeakForCurrentUser,
    disabled: null,
    handlePress: null,
  };
  let tmp10 = !canRaiseHand;
  if (!canRaiseHand) {
    tmp10 = !tmp2;
  }
  obj5.disabled = tmp10;
  obj5.handlePress = function handlePress() {
    if (shouldAgeVerifyToSpeakForCurrentUser) {
      const obj2 = {
        entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND,
      };
      const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
    } else {
      closure_1_0();
    }
  };
  return obj5;
}
