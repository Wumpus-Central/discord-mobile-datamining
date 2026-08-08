// discord_app/modules/user_profile/native/UserProfileEditNoteModal.tsx
import "noop";
import { jsx } from "jsxProd";
import { PlatformTypes } from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import { NavigationStack } from "../../../design/components/Navigator/native/Navigator.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

const require = arg1;
const result = require("module_4509").fileFinishedImporting("modules/user_profile/native/UserProfileEditNoteModal.tsx");

export default function UserProfileEditNoteModal(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ userId: require, onSave: importDefault, onBack: dependencyMap } = arg0);
  function handleClose() {
    let arr = outer1_1(outer1_2[2]);
    arr = arr.pop();
    if (dependencyMap != null) {
      dependencyMap();
    }
  }
  let obj = PlatformTypes;
  obj = { initialRouteName: "root", headerStatusBarHeight: num, headerStyle: null, screens: null };
  let tmp2Result = tmp2(501);
  obj = undefined;
  if (!tmp2Result.isAndroid()) {
    obj = { height: 56 };
  }
  obj[2] = obj;
  const obj1 = { root: null };
  const obj2 = { title: null, headerTitle: null, headerLeft: null, render: null };
  let intl = tmp2(1236).intl;
  obj2[0] = intl.string(getSystemLocale.t.sHHsOM);
  obj2[1] = function headerTitle() {
    const obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
    const intl = callback(1236).intl;
    obj[2] = intl.string(callback(1236).t.sHHsOM);
    return handleClose(callback(4299).Text, obj);
  };
  tmp2Result = tmp2(5270);
  obj2[2] = tmp2Result.getHeaderCloseButton(handleClose);
  obj2[3] = function render() {
    return handleClose(outer1_0(outer1_2[8]).default, { userId: closure_0, onSave: closure_1, onClose: handleClose });
  };
  obj1[0] = obj2;
  obj[3] = obj1;
  return handleClose(NavigationStack.Navigator, obj);
};