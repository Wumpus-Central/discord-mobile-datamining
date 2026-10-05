// === Module 7497: ForLaterModal ===

// Module 7497 (ForLaterModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import ForLaterScreenDefault from "ForLaterScreen" /* 13123 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, type;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { modal: obj2, headerLeftContainer: obj3, headerRightContainer: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { paddingRight: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  let items;
  let title;
  let tmp10;
  let tmp12;
  let tmp6;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(19);
  type = type.type;
  const tmp4 = closure_6();
  const top = useSafeAreaInsetsDefault().top;
  if (cResult[0] !== type) {
    let aUXxzT;
    const intl = tmp(1126).intl;
    const string = intl.string;
    if (type === require("SavedMessagesTypes").SavedMessageSortTypes.REMINDER) {
      aUXxzT = tmp(1126).t.aUXxzT;
    } else {
      aUXxzT = tmp(1126).t["2pAkDA"];
    }
    const stringResult = string(aUXxzT);
    cResult[0] = type;
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  _require = tmp6;
  const modal = tmp4.modal;
  if (cResult[2] !== tmp6) {
    const fn = function u() {
      const obj = { title };
      return React3(HeaderShared.GenericHeaderTitle, obj);
    };
    cResult[2] = tmp6;
    cResult[3] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== top) {
    let num5 = 0;
    const tmpResult = require("PlatformUtils");
    if (!tmpResult.isIOS()) {
      num5 = top;
    }
    cResult[4] = top;
    cResult[5] = num5;
    tmp10 = num5;
  } else {
    tmp10 = cResult[5];
  }
  const sum = tmp10 + nativeDefault.space.PX_8;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult2 = require("NavigatorHeader");
    const headerCloseButton = tmpResult2.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    cResult[6] = headerCloseButton;
    tmp12 = headerCloseButton;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === tmp4.headerLeftContainer) {
    if (cResult[8] === tmp4.headerRightContainer) {
      if (cResult[9] === tmp9) {
        if (cResult[10] === sum) {
          let tmp14;
          let tmp16;
          if (cResult[11] === tmp6) {
            tmp14 = cResult[12];
          }
          if (cResult[13] !== type) {
            const obj2 = { type, onClose: ModalActionCreatorsDefault.pop };
            const tmp5Result = ForLaterScreenDefault;
            const tmp19 = closure_4(tmp5Result, obj2, type);
            cResult[13] = type;
            cResult[14] = tmp19;
            tmp16 = tmp19;
          } else {
            tmp16 = cResult[14];
          }
          if (cResult[15] === tmp4.modal) {
            if (cResult[16] === tmp14) {
              let tmp20;
              if (cResult[17] === tmp16) {
                tmp20 = cResult[18];
              }
              return tmp20;
            }
          }
          const obj3 = { style: modal, children: items };
          items = [tmp14, tmp16];
          const tmp23 = closure_5(View, obj3);
          cResult[15] = tmp4.modal;
          cResult[16] = tmp14;
          cResult[17] = tmp16;
          cResult[18] = tmp23;
          tmp20 = tmp23;
        }
      }
    }
  }
  const obj4 = { title: tmp6, headerTitle: tmp9, headerTitleAlign: "center", headerStatusBarHeight: sum, headerLeft: tmp12, headerLeftContainerStyle: tmp4.headerLeftContainer, headerRightContainerStyle: tmp4.headerRightContainer };
  const tmp15 = closure_4(require("module_6019").Header, obj4);
  cResult[7] = tmp4.headerLeftContainer;
  cResult[8] = tmp4.headerRightContainer;
  cResult[9] = tmp9;
  cResult[10] = sum;
  cResult[11] = tmp6;
  cResult[12] = tmp15;
  tmp14 = tmp15;
}) : ((type) => {
  let aUXxzT;
  let items;
  let num;
  let title;
  let tmp4Result2;
  type = type.type;
  _require = undefined;
  const tmp = closure_6();
  const top = useSafeAreaInsetsDefault().top;
  const intl = require("intl").intl;
  const string = intl.string;
  if (type === require("SavedMessagesTypes").SavedMessageSortTypes.REMINDER) {
    aUXxzT = tmp4(1126).t.aUXxzT;
  } else {
    aUXxzT = tmp4(1126).t["2pAkDA"];
  }
  const stringResult = string(aUXxzT);
  _require = stringResult;
  let obj = { style: tmp.modal, children: items };
  const obj3 = {
    title: stringResult,
    headerTitle() {
      const obj = { title };
      return React3(HeaderShared.GenericHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: num + nativeDefault.space.PX_8,
    headerLeft: tmp4Result2.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  const Header = tmp4(6019).Header;
  num = 0;
  const tmp4Result = require("PlatformUtils");
  if (!tmp4Result.isIOS()) {
    num = top;
  }
  ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } = tmp);
  tmp4Result2 = require("NavigatorHeader");
  items = [closure_4(Header, obj3), ];
  const obj4 = { type, onClose: ModalActionCreatorsDefault.pop };
  const tmp2Result = ForLaterScreenDefault;
  items[1] = closure_4(tmp2Result, obj4, type);
  return closure_5(View, obj);
});
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterModal.tsx");

export default tmp5;