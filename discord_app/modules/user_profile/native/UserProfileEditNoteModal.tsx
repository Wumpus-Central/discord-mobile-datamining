// === Module 13044: UserProfileEditNoteModal ===

// Module 13044 (UserProfileEditNoteModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import useNavigation from "useNavigation" /* 1502 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import NavigatorHeader from "NavigatorHeader" /* 6203 */;
import Navigator from "Navigator" /* 6679 */;
import UserProfileEditNote from "UserProfileEditNote" /* 13045 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsModalPresented() {
  const cResult = c.c(3);
  const navigation = useNavigation.useNavigation();
  [tmp4, importDefault] = noop.useState(false);
  if (cResult[0] !== navigation) {
    const fn = function n() {
      return navigation.addListener("transitionEnd", (data) => {
        if (!data.data.closing) {
          closure_1_1(true);
        }
      });
    };
    const items = [navigation];
    cResult[0] = navigation;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  return tmp4;
}) : (function useIsModalPresented() {
  const navigation = useNavigation.useNavigation();
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp2[1];
  const items = [navigation];
  const effect = noop.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      closure_1_1(true);
    }
  }), items);
  return tmp2[0];
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditNoteModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditNoteModal(userId) {
  const cResult = userId(onBack[4]).c(15);
  userId = userId.userId;
  const onSave = userId.onSave;
  onBack = userId.onBack;
  const tmp4 = closure_6();
  shouldFocusInput = tmp4;
  if (cResult[0] !== onBack) {
    function handleClose() {
      ModalActionCreatorsDefault.pop();
      if (onBack != null) {
        onBack();
      }
    }
    cResult[0] = onBack;
    cResult[1] = handleClose;
    let tmp5 = handleClose;
  } else {
    tmp5 = cResult[1];
  }
  onClose = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2;
    if (!tmpResult.isAndroid()) {
      obj2 = { height: 56 };
    }
    let intl = tmp(tmp2[8]).intl;
    const stringResult = intl.string(tmp(tmp2[8]).t.sHHsOM);
    class H {
      constructor() {
        obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
        intl = userId(onBack[8]).intl;
        obj.children = intl.string(userId(onBack[8]).t.sHHsOM);
        return closure_1_5(userId(onBack[9]).Text, obj);
      }
    }
    cResult[2] = obj2;
    cResult[3] = stringResult;
    cResult[4] = H;
    let tmp6 = obj2;
    let tmp8 = H;
    let tmp7 = stringResult;
    tmpResult = tmp(tmp2[7]);
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
    tmp8 = cResult[4];
  }
  if (cResult[5] !== tmp5) {
    const headerCloseButton = tmp(tmp2[10]).getHeaderCloseButton(tmp5);
    cResult[5] = tmp5;
    cResult[6] = headerCloseButton;
    class H {
      constructor() {
        obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
        intl = userId(onBack[8]).intl;
        obj.children = intl.string(userId(onBack[8]).t.sHHsOM);
        return closure_1_5(userId(onBack[9]).Text, obj);
      }
    }
    const tmpResult3 = tmp(tmp2[10]);
  }
  if (cResult[7] === tmp5) {
    if (cResult[8] === tmp4) {
      if (cResult[9] === onSave) {
        if (cResult[10] === userId) {
          let tmp12 = cResult[11];
        }
        if (cResult[12] === tmp10) {
          if (cResult[13] === tmp12) {
            const tmp13 = cResult[14];
          }
          return tmp13;
        }
        tmp(tmp2[7]);
        class H {
          constructor() {
            obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
            intl = userId(onBack[8]).intl;
            obj.children = intl.string(userId(onBack[8]).t.sHHsOM);
            return closure_1_5(userId(onBack[9]).Text, obj);
          }
        }
        const obj3 = { initialRouteName: "root", headerStatusBarHeight: tmp15, headerStyle: tmp6, screens: null };
        const obj4 = { root: null };
        const obj5 = { title: tmp7, headerTitle: tmp8, headerLeft: tmp10, render: tmp12 };
        obj4.root = obj5;
        obj3.screens = obj4;
        cResult[12] = tmp10;
        cResult[13] = tmp12;
        cResult[14] = jsx(tmp(tmp2[12]).Navigator, { initialRouteName: "root", headerStatusBarHeight: tmp15, headerStyle: tmp6, screens: null });
        class S {
          constructor() {
            obj = { userId, onSave, onClose: closure_4, shouldFocusInput: closure_3 };
            return jsx(closure_0(closure_2[11]).default, obj);
          }
        }
        const tmp14Result = jsx(tmp(tmp2[12]).Navigator, { initialRouteName: "root", headerStatusBarHeight: tmp15, headerStyle: tmp6, screens: null });
      }
    }
  }
  class S {
    constructor() {
      obj = { userId, onSave, onClose: closure_4, shouldFocusInput: closure_3 };
      return jsx(closure_0(closure_2[11]).default, obj);
    }
  }
  cResult[7] = tmp5;
  cResult[8] = tmp4;
  cResult[9] = onSave;
  cResult[10] = userId;
  cResult[11] = S;
  tmp12 = S;
  let obj = userId(onBack[4]);
}) : (function UserProfileEditNoteModal(arg0) {
  ({ userId: require, onSave: importDefault, onBack: dependencyMap } = arg0);
  function handleClose() {
    ModalActionCreatorsDefault.pop();
    if (dependencyMap != null) {
      dependencyMap();
    }
  }
  shouldFocusInput = closure_6();
  utils_PlatformUtils;
  const obj2 = { initialRouteName: "root", headerStatusBarHeight: 12, headerStyle: null, screens: null };
  let obj3;
  if (!tmp2Result.isAndroid()) {
    obj3 = { height: 56 };
  }
  obj2.headerStyle = obj3;
  const obj4 = { root: null };
  const obj5 = { title: null, headerTitle: null, headerLeft: null, render: null };
  let intl = util.intl;
  obj5.title = intl.string(util.t.sHHsOM);
  obj5.headerTitle = function headerTitle() {
    const obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
    const intl = userId(1126).intl;
    obj.children = intl.string(userId(1126).t.sHHsOM);
    return jsx(userId(5086).Text, { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null });
  };
  tmp2Result = utils_PlatformUtils;
  obj5.headerLeft = NavigatorHeader.getHeaderCloseButton(handleClose);
  obj5.render = function render() {
    return jsx(UserProfileEditNote.default, { userId, onSave, onClose: handleClose, shouldFocusInput });
  };
  obj4.root = obj5;
  obj2.screens = obj4;
  return jsx(Navigator.Navigator, { initialRouteName: "root", headerStatusBarHeight: 12, headerStyle: null, screens: null });
});