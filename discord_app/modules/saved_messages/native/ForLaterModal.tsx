// discord_app/modules/saved_messages/native/ForLaterModal.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef4689 from "../../../actions/ModalActionCreators.tsx";
import keyExtractorDefault from "ForLaterScreen.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { modal: null, headerLeftContainer: null, headerRightContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: ThemesDefault.space.PX_16 };
const obj1 = { paddingLeft: ThemesDefault.space.PX_16 };
createCacheKey[2] = { paddingRight: ThemesDefault.space.PX_16 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj2 = { paddingRight: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/saved_messages/native/ForLaterModal.tsx");

export default function ForLaterModal(type) {
  type = type.type;
  let _require;
  const tmp = callback();
  const intl = require("../../../intl/index.native.tsx").intl;
  if (type === require("../SavedMessagesTypes.tsx").SavedMessageSortTypes.REMINDER) {
  } else {
  }
  const stringResult = intl.string(_2pAkDA);
  _require = stringResult;
  let obj = { style: tmp.modal, children: null };
  obj = {
    title: stringResult,
    headerTitle() {
      return closure_1_4(_undefined(closure_1_2[9]).GenericHeaderTitle, { title: _undefined });
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
    num = useSafeAreaInsetsDefault().top;
  }
  obj[3] = num + ThemesDefault.space.PX_8;
  tmp4Result = tmp4(5460);
  obj[4] = tmp4Result.getHeaderCloseButton(_modDef4689.pop);
  ({ headerLeftContainer: obj2[5], headerRightContainer: obj2[6] } = tmp);
  const items = [closure_4(require("../../../../_runtime/05467_Background.js").Header, obj), ];
  obj = { type, onClose: _modDef4689.pop };
  items[1] = closure_4(keyExtractorDefault, obj, type);
  obj[1] = items;
  return closure_5(View, obj);
};