// === Module 12876: UserProfileEditNoteModal ===

// Module 12876 (UserProfileEditNoteModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import useNavigation from "useNavigation" /* 1490 */;
import Text_Text from "Text/Text" /* 4886 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import Navigator2 from "Navigator" /* 6496 */;
import UserProfileEditNote from "UserProfileEditNote" /* 12877 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation, onClose, shouldFocusInput;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_129_1;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = useNavigation;
  navigation = obj2.useNavigation();
  [tmp4, closure_129_1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
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
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  return tmp4;
}) : (() => {
  let closure_1;
  let first;
  const obj = useNavigation;
  navigation = obj.useNavigation();
  [first, closure_1] = react.useState(false);
  const items = [navigation];
  const effect = react.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      closure_1_1(true);
    }
  }), items);
  return first;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let obj5;
  let onBack;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = userId(onBack[4]);
  const cResult = obj.c(15);
  userId = userId.userId;
  const onSave = userId.onSave;
  onBack = userId.onBack;
  const tmp4 = closure_6();
  shouldFocusInput = tmp4;
  if (cResult[0] !== onBack) {
    const fn = function t() {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      if (onBack != null) {
        onBack();
      }
    };
    cResult[0] = onBack;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  onClose = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2;
    const tmpResult = userId(onBack[7]);
    if (!tmpResult.isAndroid()) {
      obj2 = { height: 56 };
    }
    let intl = tmp(tmp2[8]).intl;
    const stringResult = intl.string(userId(onBack[8]).t.sHHsOM);
    class H {
      constructor() {
        const Text = userId(onBack[9]).Text;
        const intl = userId(onBack[8]).intl;
        return <Text variant="redesign/heading-18/bold" accessibilityRole="header">{intl.string(userId(onBack[8]).t.sHHsOM)}</Text>;
      }
    }
    cResult[2] = obj2;
    cResult[3] = stringResult;
    cResult[4] = H;
    tmp6 = obj2;
    tmp8 = H;
    tmp7 = stringResult;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
    tmp8 = cResult[4];
  }
  if (cResult[5] !== tmp5) {
    const tmpResult3 = userId(onBack[10]);
    const headerCloseButton = tmpResult3.getHeaderCloseButton(tmp5);
    cResult[5] = tmp5;
    cResult[6] = headerCloseButton;
    class H {
      constructor() {
        const Text = userId(onBack[9]).Text;
        const intl = userId(onBack[8]).intl;
        return <Text variant="redesign/heading-18/bold" accessibilityRole="header">{intl.string(userId(onBack[8]).t.sHHsOM)}</Text>;
      }
    }
  }
  if (cResult[7] === tmp5) {
    if (cResult[8] === tmp4) {
      if (cResult[9] === onSave) {
        let tmp12;
        if (cResult[10] === userId) {
          tmp12 = cResult[11];
        }
        if (cResult[12] === tmp10) {
          let tmp13;
          if (cResult[13] === tmp12) {
            tmp13 = cResult[14];
          }
          return tmp13;
        }
        const Navigator = tmp(tmp2[12]).Navigator;
        userId(onBack[7]);
        class H {
          constructor() {
            const Text = userId(onBack[9]).Text;
            const intl = userId(onBack[8]).intl;
            return <Text variant="redesign/heading-18/bold" accessibilityRole="header">{intl.string(userId(onBack[8]).t.sHHsOM)}</Text>;
          }
        }
        const obj4 = { root: obj5 };
        obj5 = { title: tmp7, headerTitle: tmp8, headerLeft: tmp10, render: tmp12 };
        cResult[12] = tmp10;
        cResult[13] = tmp12;
        cResult[14] = <Navigator initialRouteName="root" headerStatusBarHeight={tmp15} headerStyle={tmp6} screens={obj4} />;
        class S {
          constructor() {
            return jsx(UserProfileEditNote.default, { userId, onSave, onClose, shouldFocusInput });
          }
        }
      }
    }
  }
  class S {
    constructor() {
      return jsx(UserProfileEditNote.default, { userId, onSave, onClose, shouldFocusInput });
    }
  }
  cResult[7] = tmp5;
  cResult[8] = tmp4;
  cResult[9] = onSave;
  cResult[10] = userId;
  cResult[11] = S;
  tmp12 = S;
}) : ((arg0) => {
  let intl;
  let obj5;
  let onSave;
  let require;
  let tmp2Result2;
  let userId;
  ({ userId: require, onSave: importDefault, onBack: dependencyMap } = arg0);
  function handleClose() {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    if (dependencyMap != null) {
      dependencyMap();
    }
  }
  shouldFocusInput = closure_6();
  const Navigator = Navigator2.Navigator;
  utils_PlatformUtils;
  let obj3;
  const tmp2Result = utils_PlatformUtils;
  if (!tmp2Result.isAndroid()) {
    obj3 = { height: 56 };
  }
  const obj4 = { root: obj5 };
  obj5 = {
    title: intl.string(intl2.t.sHHsOM),
    headerTitle() {
      const Text = Text_Text.Text;
      const intl = intl2.intl;
      return <Text variant="redesign/heading-18/bold" accessibilityRole="header">{intl.string(intl2.t.sHHsOM)}</Text>;
    },
    headerLeft: tmp2Result2.getHeaderCloseButton(handleClose),
    render() {
      return jsx(UserProfileEditNote.default, { userId: require, onSave: importDefault, onClose: handleClose, shouldFocusInput });
    }
  };
  intl = intl2.intl;
  tmp2Result2 = NavigatorHeader;
  return <Navigator initialRouteName="root" headerStatusBarHeight={12} headerStyle={obj3} screens={obj4} />;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditNoteModal.tsx");

export default tmp2;