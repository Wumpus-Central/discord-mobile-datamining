// discord_app/modules/share/native/SearchableDestinationListHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import Link from "../../../../_runtime/01498_Link.js";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _mod7005 from "../../../../_runtime/metro/07005__.js";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
const obj2 = {
  headerLeftContainer: { paddingLeft: nativeDefault.space.PX_16 },
  headerRightContainer: null,
  header: null,
};
let obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
const obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj2.header = {
  borderBottomWidth: 0,
  shadowColor: "transparent",
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default function SearchableDestinationListHeader(arg0) {
  ({ subtitle: require, subtitleColor: importDefault, headerStatusBarHeight, onClose } = arg0);
  ({ title, headerRight } = arg0);
  const tmp = closure_5();
  const context = noop.useContext(Link.NavigationRouteContext);
  let isIOSResult = PlatformUtils.isIOS();
  if (isIOSResult) {
    let presentation;
    if (context != null) {
      const params = context.params;
      if (params != null) {
        presentation = params.presentation;
      }
    }
    isIOSResult = "modal" === presentation;
  }
  const obj3 = {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return jsx(HeaderShared.GenericHeaderTitle, {
        title: children.children,
        subtitle,
        subtitleColor,
        variant: "redesign/heading-18/bold",
      });
    },
    headerTitleAlign: "center",
    headerLeft: null,
    headerRight: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null,
  };
  let headerCloseButton;
  if (null != onClose) {
    headerCloseButton = NavigatorHeader.getHeaderCloseButton(onClose);
    const tmp4Result = NavigatorHeader;
  }
  obj3.headerLeft = headerCloseButton;
  obj3.headerRight = headerRight;
  ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } = tmp);
  if (headerStatusBarHeight == null) {
    let num = 0;
    if (!isIOSResult) {
      num = useSafeAreaInsetsDefault().top;
    }
    headerStatusBarHeight = num + nativeDefault.space.PX_8;
  }
  obj3.headerStatusBarHeight = headerStatusBarHeight;
  return jsx(_mod7005.Header, {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return jsx(HeaderShared.GenericHeaderTitle, {
        title: children.children,
        subtitle,
        subtitleColor,
        variant: "redesign/heading-18/bold",
      });
    },
    headerTitleAlign: "center",
    headerLeft: null,
    headerRight: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null,
  });
}
