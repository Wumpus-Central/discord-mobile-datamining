// === Module 10649: SearchableDestinationListHeader ===

// Module 10649 (SearchableDestinationListHeader)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import NavigatorHeader from "NavigatorHeader" /* 6132 */;
import _mod6139 from "module_6139" /* 6139 */;
import useIsWindowLarge from "useIsWindowLarge" /* 6560 */;
import HeaderShared from "HeaderShared" /* 7484 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
let obj2 = { headerLeftContainer: { paddingLeft: nativeDefault.space.PX_16 }, headerRightContainer: null, header: null };
const obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
const obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj2.header = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default function SearchableDestinationListHeader(arg0) {
  ({ subtitle: require, subtitleColor: importDefault } = arg0);
  ({ title, headerRight, onClose } = arg0);
  const tmp = closure_4();
  const obj = {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle, subtitleColor, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: NavigatorHeader.getHeaderCloseButton(onClose),
    headerRight,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null
  };
  ({ headerLeftContainer: obj.headerLeftContainerStyle, headerRightContainer: obj.headerRightContainerStyle } = tmp);
  if (!obj3.isIOS()) {
    let num = useSafeAreaInsetsDefault().top;
  } else {
    useIsWindowLarge;
    num = 0;
  }
  obj.headerStatusBarHeight = num + nativeDefault.space.PX_8;
  return jsx(_mod6139.Header, {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle, subtitleColor, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: NavigatorHeader.getHeaderCloseButton(onClose),
    headerRight,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null
  });
};