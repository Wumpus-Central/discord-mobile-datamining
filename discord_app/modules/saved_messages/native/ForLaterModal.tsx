// discord_app/modules/saved_messages/native/ForLaterModal.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Background } from "../../../../_runtime/05277_Background.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";
import { SavedMessageSortTypes } from "../SavedMessagesTypes.tsx";
import { keyExtractor } from "ForLaterScreen.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { modal: null, headerLeftContainer: null, headerRightContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: require("Themes").space.PX_16 };
const obj1 = { paddingLeft: require("Themes").space.PX_16 };
createCacheKey[2] = { paddingRight: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { paddingRight: require("Themes").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/saved_messages/native/ForLaterModal.tsx");

export default function ForLaterModal(type) {
  type = type.type;
  let _require;
  const tmp = createCacheKey();
  const intl = _getSystemLocale.intl;
  if (type === _SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
  } else {
  }
  const stringResult = intl.string(_2pAkDA);
  _require = stringResult;
  let obj = { style: tmp.modal, children: null };
  obj = {
    title: stringResult,
    headerTitle() {
      return outer1_4(_undefined(outer1_2[9]).GenericHeaderTitle, { title: _undefined });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  let tmp4Result = tmp4(500);
  let num = 0;
  if (!tmp4Result.isIOS()) {
    num = useSafeAreaInsets().top;
  }
  obj[3] = num + Themes.space.PX_8;
  tmp4Result = tmp4(5270);
  obj[4] = tmp4Result.getHeaderCloseButton(ModalActionCreators.pop);
  ({ headerLeftContainer: obj2[5], headerRightContainer: obj2[6] } = tmp);
  const items = [closure_4(_Background.Header, obj), ];
  obj = { type, onClose: null };
  obj[1] = ModalActionCreators.pop;
  items[1] = closure_4(keyExtractor, obj, type);
  obj[1] = items;
  return closure_5(View, obj);
};