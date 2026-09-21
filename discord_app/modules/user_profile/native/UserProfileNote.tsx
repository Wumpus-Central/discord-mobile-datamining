// === Module 13344: UserProfileNote ===

// Module 13344 (UserProfileNote)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import openEditNoteModalDefault from "openEditNoteModal" /* 13347 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileNote.tsx");

export default function UserProfileNote(userId) {
  userId = userId.userId;
  const onBack = userId.onBack;
  let trackUserProfileAction;
  trackUserProfileAction = userId(trackUserProfileAction[2]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const note = onBack(trackUserProfileAction[3])(userId).note;
  let tmp3 = null != note;
  if (tmp3) {
    tmp3 = "" !== note;
  }
  const obj2 = { label: null, subLabel: null, accessibilityHint: null, onPress: null, trailing: null, arrow: null, start: true, end: true };
  const obj3 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = tmp(tmp2[6]).intl;
  obj3.children = intl.string(userId(trackUserProfileAction[6]).t["mQKv+v"]);
  obj2.label = jsx(userId(trackUserProfileAction[5]).Text, { variant: "text-sm/semibold", color: "text-default", children: null });
  let tmp5;
  if (tmp3) {
    tmp5 = note;
  }
  obj2.subLabel = tmp5;
  const intl2 = tmp(tmp2[6]).intl;
  const string = intl2.string;
  const t = tmp(tmp2[6]).t;
  if (tmp3) {
    let stringResult = string(t["gs+qcM"]);
  } else {
    stringResult = string(t["1ZZtts"]);
  }
  obj2.accessibilityHint = stringResult;
  obj2.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    openEditNoteModalDefault({
      userId,
      onBack,
      onSave() {
        return trackUserProfileAction({ action: "SET_NOTE" });
      }
    });
  };
  let tmp4Result;
  if (!tmp3) {
    const obj4 = { IconComponent: tmp(tmp2[9]).PaperPlusIcon };
    tmp4Result = jsx(tmp(tmp2[4]).TableRow.Icon, { IconComponent: tmp(tmp2[9]).PaperPlusIcon });
  }
  obj2.trailing = tmp4Result;
  obj2.arrow = tmp3;
  return jsx(userId(trackUserProfileAction[4]).TableRow, { label: null, subLabel: null, accessibilityHint: null, onPress: null, trailing: null, arrow: null, start: true, end: true });
};