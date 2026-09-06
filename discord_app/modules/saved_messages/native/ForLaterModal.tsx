// === Module 7862: ForLaterModal ===

// Module 7862 (ForLaterModal)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import ForLaterScreenDefault from "ForLaterScreen" /* 13281 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { modal: null, headerLeftContainer: null, headerRightContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
createStyles.modal = createStyles;
createStyles.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
const obj1 = { paddingLeft: nativeDefault.space.PX_16 };
createStyles.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterModal.tsx");

export default function ForLaterModal(type) {
  type = type.type;
  _require = undefined;
  const tmp = closure_6();
  const intl = require("util").intl;
  if (type === require("SavedMessagesTypes").SavedMessageSortTypes.REMINDER) {
    let aUXxzT = tmp4(1114).t.aUXxzT;
  } else {
    aUXxzT = tmp4(1114).t["2pAkDA"];
  }
  const stringResult = intl.string(aUXxzT);
  _require = stringResult;
  let obj = { style: tmp.modal, children: null };
  obj = {
    title: stringResult,
    headerTitle() {
      return React4(HeaderShared.GenericHeaderTitle, { title });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  let tmp4Result = tmp4(1115);
  let num = 0;
  if (!tmp4Result.isIOS()) {
    num = useSafeAreaInsetsDefault().top;
  }
  obj.headerStatusBarHeight = num + nativeDefault.space.PX_8;
  tmp4Result = tmp4(5624);
  obj.headerLeft = tmp4Result.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
  ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } = tmp);
  const items = [closure_4(require("module_5631").Header, obj), ];
  obj = { type, onClose: ModalActionCreatorsDefault.pop };
  items[1] = closure_4(ForLaterScreenDefault, obj, type);
  obj.children = items;
  return closure_5(View, obj);
};