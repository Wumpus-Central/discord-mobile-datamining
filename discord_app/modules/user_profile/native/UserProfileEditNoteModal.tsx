// discord_app/modules/user_profile/native/UserProfileEditNoteModal.tsx
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import UserProfileEditNote from "UserProfileEditNote.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
  navigation = navigation(1484).useNavigation();
  [_slicedToArray, onSave] = handleClose.useState(false);
  const items = [navigation];
  const effect = handleClose.useEffect(
    () =>
      navigation.addListener("transitionEnd", (data) => {
        if (!data.data.closing) {
          onSave(true);
        }
      }),
    items,
  );
  navigation(1365);
  const obj3 = { initialRouteName: "root", headerStatusBarHeight: 12, headerStyle: null, screens: null };
  let obj = navigation(1484);
  let obj4;
  if (!tmpResult.isAndroid()) {
    obj4 = { height: 56 };
  }
  obj3.headerStyle = obj4;
  const obj5 = { root: null };
  const obj6 = { title: null, headerTitle: null, headerLeft: null, render: null };
  let intl = tmp(1115).intl;
  obj6.title = intl.string(navigation(1115).t.sHHsOM);
  obj6.headerTitle = function headerTitle() {
    const obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
    const intl = navigation(1115).intl;
    obj.children = intl.string(navigation(1115).t.sHHsOM);
    return jsx(navigation(4825).Text, {
      variant: "redesign/heading-18/bold",
      accessibilityRole: "header",
      children: null,
    });
  };
  tmpResult = navigation(1365);
  obj6.headerLeft = navigation(5929).getHeaderCloseButton(handleClose);
  obj6.render = function render() {
    return jsx(UserProfileEditNote.default, { userId: navigation, onSave, onClose: handleClose, shouldFocusInput });
  };
  obj5.root = obj6;
  obj3.screens = obj5;
  return jsx(navigation(7333).Navigator, {
    initialRouteName: "root",
    headerStatusBarHeight: 12,
    headerStyle: null,
    screens: null,
  });
}
