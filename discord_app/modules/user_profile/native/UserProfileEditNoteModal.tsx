// === Module 12724: UserProfileEditNoteModal ===

// Module 12724 (UserProfileEditNoteModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import PlatformTypes from "PlatformTypes" /* 1235 */;
import NavigationStack from "NavigationStack" /* 6017 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileEditNoteModal.tsx");

export default function UserProfileEditNoteModal(arg0) {
  ({ userId: require, onSave: importDefault, onBack: dependencyMap } = arg0);
  function handleClose() {
    let arr = closure_1_1(closure_1_2[2]);
    arr = arr.pop();
    if (dependencyMap != null) {
      dependencyMap();
    }
  }
  let obj = PlatformTypes;
  obj = { initialRouteName: "root", headerStatusBarHeight: num, headerStyle: null, screens: null };
  let tmp2Result = tmp2(1235);
  obj = undefined;
  if (!tmp2Result.isAndroid()) {
    obj = { height: 56 };
  }
  obj[2] = obj;
  obj1 = { root: null };
  const obj2 = { title: null, headerTitle: null, headerLeft: null, render: null };
  let intl = tmp2(1233).intl;
  obj2[0] = intl.string(getSystemLocale.t.sHHsOM);
  obj2[1] = function headerTitle() {
    const obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
    const intl = callback(1233).intl;
    obj[2] = intl.string(callback(1233).t.sHHsOM);
    return handleClose(callback(4474).Text, obj);
  };
  tmp2Result = tmp2(5504);
  obj2[2] = tmp2Result.getHeaderCloseButton(handleClose);
  obj2[3] = function render() {
    return handleClose(closure_1_0(closure_1_2[8]).default, { userId: closure_0, onSave: closure_1, onClose: handleClose });
  };
  obj1[0] = obj2;
  obj[3] = obj1;
  return handleClose(NavigationStack.Navigator, obj);
};