// discord_app/modules/share/native/SearchableDestinationListHeader.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import HeaderBackImage from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Background from "../../../../_runtime/05383_Background.js";
import useIsWindowLarge from "../../screen/native/useIsWindowLarge.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { headerLeftContainer: null, headerRightContainer: null, header: null };
createCacheKey = { paddingLeft: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingRight: ThemesDefault.space.PX_16 };
const obj1 = { paddingRight: ThemesDefault.space.PX_16 };
createCacheKey[2] = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_4 = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("set").fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default function SearchableDestinationListHeader(arg0) {
  ({ subtitle: require, subtitleColor: importDefault } = arg0);
  ({ title, headerRight, onClose } = arg0);
  const tmp = callback();
  const obj = {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return closure_1_3(closure_1_0(closure_1_2[6]).GenericHeaderTitle, { title: children.children, subtitle: closure_0, subtitleColor: closure_1, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: HeaderBackImage.getHeaderCloseButton(onClose),
    headerRight,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null
  };
  ({ headerLeftContainer: obj[6], headerRightContainer: obj[7] } = tmp);
  const obj2 = HeaderBackImage;
  const tmp2 = importDefault;
  const tmp4 = jsx;
  const tmp5 = require;
  if (!obj3.isIOS()) {
    let num = useSafeAreaInsetsDefault().top;
  } else {
    num = 0;
    const tmp5Result = useIsWindowLarge;
  }
  obj[8] = num + ThemesDefault.space.PX_8;
  return tmp4(Background.Header, obj);
};