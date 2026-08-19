// === Module 9090: SearchableDestinationListHeader ===

// Module 9090 (SearchableDestinationListHeader)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import HeaderBackImage from "HeaderBackImage" /* 6314 */;
import Background from "Background" /* 6319 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7925 */;
import GenericHeaderTitle from "GenericHeaderTitle" /* 8492 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { paddingLeft: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingRight: ThemesDefault.space.PX_16 };
createCacheKey[2] = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default function SearchableDestinationListHeader(arg0) {
  ({ subtitle: require, subtitleColor: importDefault } = arg0);
  ({ title, headerRight, onClose } = arg0);
  const tmp = callback();
  const obj = {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return jsx(GenericHeaderTitle.GenericHeaderTitle, { title: children.children, subtitle: closure_0, subtitleColor: closure_1, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: HeaderBackImage.getHeaderCloseButton(onClose),
    headerRight,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null
  };
  ({ headerLeftContainer: obj[6], headerRightContainer: obj[7] } = tmp);
  if (!obj3.isIOS()) {
    let num = useSafeAreaInsetsDefault().top;
  } else {
    useIsWindowLarge;
    num = 0;
  }
  obj[8] = num + ThemesDefault.space.PX_8;
  return jsx(Background.Header, {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return jsx(GenericHeaderTitle.GenericHeaderTitle, { title: children.children, subtitle: closure_0, subtitleColor: closure_1, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: HeaderBackImage.getHeaderCloseButton(onClose),
    headerRight,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null
  });
};