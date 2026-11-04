// === Module 15122: UserProfileEditNoteModal ===

// Module 15122 (UserProfileEditNoteModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import UserProfileEditNote from "UserProfileEditNote" /* 15123 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditNoteModal.tsx");

export default function UserProfileEditNoteModal(arg0) {
  ({ userId: navigation, onSave: closure_1, onBack: dependencyMap } = arg0);
  _slicedToArray = undefined;
  function handleClose() {
    ModalActionCreatorsDefault.pop();
    if (dependencyMap != null) {
      dependencyMap();
    }
  }
  navigation = undefined;
  onSave = undefined;
  navigation = navigation(1499).useNavigation();
  [_slicedToArray, onSave] = handleClose.useState(false);
  items = [navigation];
  const effect = handleClose.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      onSave(true);
    }
  }), items);
  navigation(1357);
  const obj3 = { initialRouteName: "root", headerStatusBarHeight: 12, headerStyle: null, screens: null };
  let obj = navigation(1499);
  let obj4;
  if (!tmpResult.isAndroid()) {
    obj4 = { height: 56 };
  }
  obj3.headerStyle = obj4;
  const obj5 = { root: null };
  const obj6 = { title: null, headerTitle: null, headerLeft: null, render: null };
  let intl = tmp(1113).intl;
  obj6.title = intl.string(navigation(1113).t.sHHsOM);
  obj6.headerTitle = function headerTitle() {
    const obj = { variant: "heading-md/semibold", accessibilityRole: "header", children: null };
    const intl = navigation(1113).intl;
    obj.children = intl.string(navigation(1113).t.sHHsOM);
    return jsx(navigation(5761).Text, { variant: "heading-md/semibold", accessibilityRole: "header", children: null });
  };
  tmpResult = navigation(1357);
  obj6.headerLeft = navigation(7139).getHeaderCloseButton(handleClose);
  obj6.render = function render() {
    return jsx(UserProfileEditNote.default, { userId: navigation, onSave, onClose: handleClose, shouldFocusInput });
  };
  obj5.root = obj6;
  obj3.screens = obj5;
  return jsx(navigation(7306).Navigator, { initialRouteName: "root", headerStatusBarHeight: 12, headerStyle: null, screens: null });
};