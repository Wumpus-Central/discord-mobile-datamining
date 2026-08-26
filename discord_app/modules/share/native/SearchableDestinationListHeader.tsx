// === Module 11312: SearchableDestinationListHeader ===

// Module 11312 (SearchableDestinationListHeader)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import HeaderBackImage from "HeaderBackImage" /* 5442 */;
import Background from "Background" /* 5449 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7852 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

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