// === Module 13188: UserProfileEditNoteModal ===

// Module 13188 (UserProfileEditNoteModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import UserProfileEditNote from "UserProfileEditNote" /* 13189 */;
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
  navigation = navigation(1483).useNavigation();
  [_slicedToArray, onSave] = handleClose.useState(false);
  const items = [navigation];
  const effect = handleClose.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      onSave(true);
    }
  }), items);
  navigation(1364);
  const obj3 = { initialRouteName: "root", headerStatusBarHeight: 12, headerStyle: null, screens: null };
  let obj = navigation(1483);
  let obj4;
  if (!tmpResult.isAndroid()) {
    obj4 = { height: 56 };
  }
  obj3.headerStyle = obj4;
  const obj5 = { root: null };
  const obj6 = { title: null, headerTitle: null, headerLeft: null, render: null };
  let intl = tmp(1114).intl;
  obj6.title = intl.string(navigation(1114).t.sHHsOM);
  obj6.headerTitle = function headerTitle() {
    const obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
    const intl = navigation(1114).intl;
    obj.children = intl.string(navigation(1114).t.sHHsOM);
    return jsx(navigation(4632).Text, { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null });
  };
  tmpResult = navigation(1364);
  obj6.headerLeft = navigation(5705).getHeaderCloseButton(handleClose);
  obj6.render = function render() {
    return jsx(UserProfileEditNote.default, { userId: navigation, onSave, onClose: handleClose, shouldFocusInput });
  };
  obj5.root = obj6;
  obj3.screens = obj5;
  return jsx(navigation(7103).Navigator, { initialRouteName: "root", headerStatusBarHeight: 12, headerStyle: null, screens: null });
};