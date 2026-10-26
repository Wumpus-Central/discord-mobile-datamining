// === Module 12917: SearchableDestinationListHeader ===

// Module 12917 (SearchableDestinationListHeader)
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import Link from "Link" /* 1506 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import NavigatorHeader from "NavigatorHeader" /* 6924 */;
import _mod6933 from "module_6933" /* 6933 */;
import HeaderShared from "HeaderShared" /* 9699 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4971);
let obj2 = { headerLeftContainer: { paddingLeft: nativeDefault.space.PX_16 }, headerRightContainer: null, header: null };
let obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
const obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj2.header = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj5 = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SearchableDestinationListHeader(subtitleColor) {
  const cResult = subtitle(576).c(14);
  ({ title, subtitle } = subtitleColor);
  subtitleColor = subtitleColor.subtitleColor;
  ({ headerRight, headerStatusBarHeight, onClose } = subtitleColor);
  const tmp4 = closure_5();
  const context = noop.useContext(subtitle(1506).NavigationRouteContext);
  const obj = subtitle(576);
  const tmp5 = subtitleColor;
  let isIOSResult = subtitle(1384).isIOS();
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
  if (cResult[0] === subtitle) {
    if (cResult[1] === subtitleColor) {
      let tmp10 = cResult[2];
    }
    if (cResult[3] !== onClose) {
      let headerCloseButton;
      if (null != onClose) {
        headerCloseButton = subtitle(6924).getHeaderCloseButton(onClose);
        const tmpResult = subtitle(6924);
      }
      cResult[3] = onClose;
      cResult[4] = headerCloseButton;
      let tmp11 = headerCloseButton;
    } else {
      tmp11 = cResult[4];
    }
    if (headerStatusBarHeight == null) {
      let num3 = 0;
      if (!isIOSResult) {
        num3 = subtitleColor(1633)().top;
      }
      headerStatusBarHeight = num3 + tmp5(587).space.PX_8;
    }
    if (cResult[5] === headerRight) {
      if (cResult[6] === tmp4.header) {
        if (cResult[7] === tmp4.headerLeftContainer) {
          if (cResult[8] === tmp4.headerRightContainer) {
            if (cResult[9] === tmp10) {
              if (cResult[10] === tmp11) {
                if (cResult[11] === headerStatusBarHeight) {
                  if (cResult[12] === title) {
                    let tmp15 = cResult[13];
                  }
                  return tmp15;
                }
              }
            }
          }
        }
      }
    }
    const obj3 = { headerStyle: tmp4.header, title, headerTitle: tmp10, headerTitleAlign: "center", headerLeft: tmp11, headerRight, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: null };
    ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp4);
    obj3.headerStatusBarHeight = headerStatusBarHeight;
    const tmp17 = jsx(subtitle(6933).Header, { headerStyle: tmp4.header, title, headerTitle: tmp10, headerTitleAlign: "center", headerLeft: tmp11, headerRight, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: null });
    cResult[5] = headerRight;
    cResult[6] = tmp4.header;
    cResult[7] = tmp4.headerLeftContainer;
    cResult[8] = tmp4.headerRightContainer;
    cResult[9] = tmp10;
    cResult[10] = tmp11;
    cResult[11] = headerStatusBarHeight;
    cResult[12] = title;
    cResult[13] = tmp17;
    tmp15 = tmp17;
  }
  const fn = function l(children) {
    return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle, subtitleColor, variant: "redesign/heading-18/bold" });
  };
  cResult[0] = subtitle;
  cResult[1] = subtitleColor;
  cResult[2] = fn;
  tmp10 = fn;
  const obj2 = subtitle(1384);
}) : (function SearchableDestinationListHeader(arg0) {
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
      return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle, subtitleColor, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: null,
    headerRight: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null
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
  return jsx(_mod6933.Header, {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle, subtitleColor, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: null,
    headerRight: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: null
  });
});