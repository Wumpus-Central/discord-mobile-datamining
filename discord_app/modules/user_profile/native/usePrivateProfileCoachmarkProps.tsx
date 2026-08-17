// discord_app/modules/user_profile/native/usePrivateProfileCoachmarkProps.tsx
import PrivateProfileAbstractUI from "../../../design/components/mana-assets/native/generated/PrivateProfileAbstractUI.native.tsx";
import closure_2 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { UserSettingsSections } from "../../../Constants.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function PrivateProfileCoachmarkImage() {
  return <View style={callback().imageContainer}>{jsx(PrivateProfileAbstractUI.PrivateProfileAbstractUI, { width: 100, height: 67, resizeMode: "contain" })}</View>;
}
let closure_7 = createCacheKey.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" } });
const result = require("set").fileFinishedImporting("modules/user_profile/native/usePrivateProfileCoachmarkProps.tsx");

export const usePrivateProfileCoachmarkProps = function usePrivateProfileCoachmarkProps(visibleContent) {
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  let stringResult1;
  _hogEy = markAsDismissed;
  const userIsTeen = visibleContent(markAsDismissed[9]).useUserIsTeen();
  const ProfileVisibility = visibleContent(markAsDismissed[10]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  if (userIsTeen) {
    if (setting !== tmp(_hogEy[7]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
      if (setting === tmp(_hogEy[7]).ProfileVisibility.FRIENDS_ONLY) {
        const intl3 = tmp(_hogEy[8]).intl;
        _hogEy = tmp(_hogEy[8]).t["/hogEy"];
        let stringResult = intl3.string(_hogEy);
      } else {
        let intl2 = tmp(_hogEy[8]).intl;
        stringResult = intl2.string(tmp(_hogEy[8]).t["6hEfm1"]);
      }
    }
  }
  let intl = tmp(_hogEy[8]).intl;
  stringResult1 = intl.string(tmp(_hogEy[8]).t.bnNxW1);
  const items = [stringResult1, markAsDismissed, visibleContent];
  return stringResult1.useMemo(() => {
    let obj = { title: null, description: null, position: "top", visible: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = visibleContent(markAsDismissed[8]).intl;
    obj[0] = intl.string(visibleContent(markAsDismissed[8]).t.Ve4nS1);
    obj[1] = stringResult1;
    obj[3] = visibleContent === visibleContent(markAsDismissed[11]).DismissibleContent.PRIVATE_PROFILE_COACHMARK;
    obj[4] = function onDismiss() {
      return callback(closure_1_5.USER_DISMISS);
    };
    obj[5] = function renderImgComponent() {
      return callback2(closure_8, {});
    };
    const intl2 = visibleContent(markAsDismissed[8]).intl;
    obj[6] = intl2.string(visibleContent(markAsDismissed[8]).t.eOoTMX);
    obj[8] = function onButtonPress() {
      callback(closure_1_5.TAKE_ACTION);
      let obj = closure_1_0(closure_1_1[12]);
      obj = { screen: closure_1_4.DATA_AND_PRIVACY };
      obj.openUserSettings(obj);
    };
    return obj;
  }, items);
};