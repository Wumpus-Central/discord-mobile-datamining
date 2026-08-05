// discord_app/modules/saved_messages/native/ForLaterModal.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { modal: null, headerContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/saved_messages/native/ForLaterModal.tsx");

export default function ForLaterModal(type) {
  type = type.type;
  let _require;
  const tmp = createCacheKey();
  const intl = _require("../../../intl/index.native.tsx").intl;
  if (type === _require("../SavedMessagesTypes.tsx").SavedMessageSortTypes.REMINDER) {
  } else {
  }
  const stringResult = intl.string(_2pAkDA);
  _require = stringResult;
  let obj = { style: tmp.modal, children: null };
  obj = { style: tmp.headerContainer, children: null };
  obj = {
    title: stringResult,
    headerTitle() {
      return outer1_4(_undefined(outer1_2[8]).GenericHeaderTitle, { title: _undefined });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null
  };
  let tmp2Result = tmp2(500);
  let num;
  if (tmp2Result.isIOS()) {
    num = 0;
  }
  obj[3] = num;
  tmp2Result = tmp2(5238);
  obj[4] = tmp2Result.getHeaderCloseButton(require("../../../actions/ModalActionCreators.tsx").pop);
  obj[1] = closure_4(_require("../../../../_runtime/05245_Background.js").Header, obj);
  const items = [closure_4(View, obj), ];
  const obj1 = { type, onClose: null };
  obj1[1] = require("../../../actions/ModalActionCreators.tsx").pop;
  items[1] = closure_4(require("ForLaterScreen.tsx"), obj1, type);
  obj[1] = items;
  return closure_5(View, obj);
};