// discord_app/modules/saved_messages/native/ForLaterModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import ForLaterScreenDefault from "ForLaterScreen.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4722);
const obj2 = {
  modal: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    borderBottomWidth: 0,
    shadowColor: "transparent",
    height: "100%",
  },
  headerLeftContainer: null,
  headerRightContainer: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderBottomWidth: 0,
  shadowColor: "transparent",
  height: "100%",
};
obj2.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
let obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterModal.tsx");

export default function ForLaterModal(type) {
  type = type.type;
  _require = undefined;
  const tmp = closure_6();
  const intl = require("util").intl;
  if (type === require("SavedMessagesTypes").SavedMessageSortTypes.REMINDER) {
    let aUXxzT = tmp4(1115).t.aUXxzT;
  } else {
    aUXxzT = tmp4(1115).t["2pAkDA"];
  }
  const stringResult = intl.string(aUXxzT);
  _require = stringResult;
  const obj = { style: tmp.modal, children: null };
  const obj3 = {
    title: stringResult,
    headerTitle() {
      return React4(HeaderShared.GenericHeaderTitle, { title });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
  };
  let num = 0;
  if (!tmp4Result.isIOS()) {
    num = useSafeAreaInsetsDefault().top;
  }
  obj3.headerStatusBarHeight = num + nativeDefault.space.PX_8;
  tmp4Result = require("PlatformUtils");
  obj3.headerLeft = require("NavigatorHeader").getHeaderCloseButton(ModalActionCreatorsDefault.pop);
  ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } = tmp);
  const items = [closure_4(require("../../../../_runtime/metro/05801__.js").Header, obj3)];
  const obj4 = { type, onClose: null };
  const tmp4Result2 = require("NavigatorHeader");
  obj4.onClose = ModalActionCreatorsDefault.pop;
  items[1] = closure_4(ForLaterScreenDefault, obj4, type);
  obj.children = items;
  return closure_5(View, obj);
}
