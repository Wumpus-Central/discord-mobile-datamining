// === Module 12166: UserProfileEditNoteModal ===

// Module 12166 (UserProfileEditNoteModal)
import noopAll from "noop" /* 19 */;
import PlatformTypes from "PlatformTypes" /* 501 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import NavigationStack from "NavigationStack" /* 6312 */;
import HeaderBackImage from "HeaderBackImage" /* 6314 */;
import UserProfileEditNote from "UserProfileEditNote" /* 12167 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileEditNoteModal.tsx");

export default function UserProfileEditNoteModal(arg0) {
  ({ userId: require, onSave: importDefault, onBack: dependencyMap } = arg0);
  function handleClose() {
    let arr = importDefault(closure_1_2[2]);
    arr = arr.pop();
    if (dependencyMap != null) {
      dependencyMap();
    }
  }
  let tmp2Result = PlatformTypes;
  let obj;
  if (!tmp2Result.isAndroid()) {
    obj = { height: 56 };
  }
  obj[2] = obj;
  obj1 = { root: null };
  const obj2 = { title: null, headerTitle: null, headerLeft: null, render: null };
  let intl = getSystemLocale.intl;
  obj2[0] = intl.string(getSystemLocale.t.sHHsOM);
  obj2[1] = function headerTitle() {
    const obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
    const intl = callback(1236).intl;
    obj[2] = intl.string(callback(1236).t.sHHsOM);
    return handleClose(callback(4734).Text, obj);
  };
  tmp2Result = HeaderBackImage;
  obj2[2] = tmp2Result.getHeaderCloseButton(handleClose);
  obj2[3] = function render() {
    return handleClose(UserProfileEditNote.default, { userId: closure_0, onSave: closure_1, onClose: handleClose });
  };
  obj1[0] = obj2;
  obj[3] = obj1;
  return handleClose(NavigationStack.Navigator, obj);
};