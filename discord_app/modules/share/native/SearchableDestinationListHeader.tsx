// discord_app/modules/share/native/SearchableDestinationListHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _mod5631 from "../../../../_runtime/metro/05631__.js";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const useIsWindowLarge = tmp5(6945);
require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { headerLeftContainer: null, headerRightContainer: null, header: null };
createStyles = { paddingLeft: nativeDefault.space.PX_16 };
createStyles.headerLeftContainer = createStyles;
createStyles.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
const obj1 = { paddingRight: nativeDefault.space.PX_16 };
createStyles.header = {
  borderBottomWidth: 0,
  shadowColor: "transparent",
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
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
      return jsx(HeaderShared.GenericHeaderTitle, {
        title: children.children,
        subtitle,
        subtitleColor,
        variant: "redesign/heading-18/bold",
      });
    },
    headerTitleAlign: "center",
    headerLeft: NavigatorHeader.getHeaderCloseButton(onClose),
    headerRight,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null,
  };
  ({ headerLeftContainer: obj.headerLeftContainerStyle, headerRightContainer: obj.headerRightContainerStyle } = tmp);
  const tmp4 = jsx;
  if (!obj3.isIOS()) {
    let num = useSafeAreaInsetsDefault().top;
  } else {
    num = 0;
    const tmp5Result = useIsWindowLarge;
  }
  obj.headerStatusBarHeight = num + nativeDefault.space.PX_8;
  return tmp4(_mod5631.Header, obj);
}
