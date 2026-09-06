// === Module 16365: usePrivateProfileCoachmarkProps ===

// Module 16365 (usePrivateProfileCoachmarkProps)
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import PrivateProfileAbstractUI from "PrivateProfileAbstractUI" /* 6365 */;
import noop from "module_19" /* 19 */;

require = fn;
function PrivateProfileCoachmarkImage() {
  return <View style={closure_7().imageContainer}>{jsx(PrivateProfileAbstractUI.PrivateProfileAbstractUI, { width: 100, height: 67, resizeMode: "contain" })}</View>;
}
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/usePrivateProfileCoachmarkProps.tsx");

export const usePrivateProfileCoachmarkProps = function usePrivateProfileCoachmarkProps(visibleContent) {
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  let stringResult1;
  let prop = markAsDismissed;
  const userIsTeen = visibleContent(markAsDismissed[9]).useUserIsTeen();
  const ProfileVisibility = visibleContent(markAsDismissed[10]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  if (userIsTeen) {
    if (setting !== tmp(prop[7]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
      if (setting === tmp(prop[7]).ProfileVisibility.FRIENDS_ONLY) {
        const intl3 = tmp(prop[8]).intl;
        prop = tmp(prop[8]).t["/hogEy"];
        let stringResult = intl3.string(prop);
      } else {
        let intl2 = tmp(prop[8]).intl;
        stringResult = intl2.string(tmp(prop[8]).t["6hEfm1"]);
      }
    }
  }
  let intl = tmp(prop[8]).intl;
  stringResult1 = intl.string(tmp(prop[8]).t.bnNxW1);
  const items = [stringResult1, markAsDismissed, visibleContent];
  return stringResult1.useMemo(() => {
    let obj = { title: null, description: null, position: "top", visible: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.Ve4nS1);
    obj.description = stringResult1;
    obj.visible = visibleContent === dismissible_content.DismissibleContent.PRIVATE_PROFILE_COACHMARK;
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants2.USER_DISMISS);
    };
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_6(closure_1_8, {});
    };
    const intl2 = util.intl;
    obj.buttonLabel = intl2.string(util.t.eOoTMX);
    obj.onButtonPress = function onButtonPress() {
      closure_1_1(constants2.TAKE_ACTION);
      visibleContent(markAsDismissed[12]);
      const obj = { screen: constants.DATA_AND_PRIVACY };
      obj.openUserSettings(obj);
    };
    return obj;
  }, items);
};