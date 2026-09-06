// === Module 13057: UserProfileEditNoteModal ===

// Module 13057 (UserProfileEditNoteModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import UserProfileEditNote from "UserProfileEditNote" /* 13058 */;
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
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
    if (dependencyMap != null) {
      dependencyMap();
    }
  }
  navigation = undefined;
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const tmp4 = _slicedToArray(handleClose.useState(false), 2);
  const onSave = tmp4[1];
  const items = [navigation];
  const effect = handleClose.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      onSave(true);
    }
  }), items);
  _slicedToArray = tmp4[0];
  let obj1 = navigation(1116);
  obj = { initialRouteName: "root", headerStatusBarHeight: num, headerStyle: null, screens: null };
  let tmpResult = tmp(1116);
  obj = undefined;
  if (!tmpResult.isAndroid()) {
    obj = { height: 56 };
  }
  obj.headerStyle = obj;
  obj1 = { root: null };
  const obj2 = { title: null, headerTitle: null, headerLeft: null, render: null };
  let intl = tmp(1114).intl;
  obj2.title = intl.string(navigation(1114).t.sHHsOM);
  obj2.headerTitle = function headerTitle() {
    const obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
    const intl = navigation(1114).intl;
    obj.children = intl.string(navigation(1114).t.sHHsOM);
    return jsx(navigation(4556).Text, { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null });
  };
  tmpResult = tmp(5624);
  obj2.headerLeft = tmpResult.getHeaderCloseButton(handleClose);
  obj2.render = function render() {
    return jsx(UserProfileEditNote.default, { userId: navigation, onSave, onClose: handleClose, shouldFocusInput });
  };
  obj1.root = obj2;
  obj.screens = obj1;
  return jsx(navigation(7000).Navigator, obj);
};