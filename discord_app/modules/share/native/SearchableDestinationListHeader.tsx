// === Module 10983: SearchableDestinationListHeader ===

// Module 10983 (SearchableDestinationListHeader)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import _mod5631 from "module_5631" /* 5631 */;
import useIsWindowLarge from "useIsWindowLarge" /* 6945 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { headerLeftContainer: null, headerRightContainer: null, header: null };
createStyles = { paddingLeft: nativeDefault.space.PX_16 };
createStyles.headerLeftContainer = createStyles;
createStyles.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
const obj1 = { paddingRight: nativeDefault.space.PX_16 };
createStyles.header = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_4 = createStyles.createStyles(createStyles);
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
  return jsx(_mod5631.Header, {
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