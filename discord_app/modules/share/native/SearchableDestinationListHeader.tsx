// === Module 12615: SearchableDestinationListHeader ===

// Module 12615 (SearchableDestinationListHeader)
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import NavigatorHeader from "NavigatorHeader" /* 6423 */;
import _mod6432 from "module_6432" /* 6432 */;
import useIsWindowLarge from "useIsWindowLarge" /* 6849 */;
import HeaderShared from "HeaderShared" /* 9534 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5153);
let obj2 = { headerLeftContainer: { paddingLeft: nativeDefault.space.PX_16 }, headerRightContainer: null, header: null };
const obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
const obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj2.header = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj5 = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SearchableDestinationListHeader(subtitleColor) {
  const cResult = subtitle(576).c(17);
  ({ title, subtitle } = subtitleColor);
  subtitleColor = subtitleColor.subtitleColor;
  ({ headerRight, headerStatusBarHeight, onClose } = subtitleColor);
  const tmp4 = closure_4();
  const top = subtitleColor(1633)().top;
  if (cResult[0] === subtitle) {
    if (cResult[1] === subtitleColor) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== onClose) {
      let headerCloseButton;
      if (null != onClose) {
        headerCloseButton = subtitle(6423).getHeaderCloseButton(onClose);
        const tmpResult = subtitle(6423);
      }
      cResult[3] = onClose;
      cResult[4] = headerCloseButton;
      let tmp7 = headerCloseButton;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === headerStatusBarHeight) {
      if (cResult[6] === top) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === headerRight) {
        if (cResult[9] === tmp4.header) {
          if (cResult[10] === tmp4.headerLeftContainer) {
            if (cResult[11] === tmp4.headerRightContainer) {
              if (cResult[12] === tmp6) {
                if (cResult[13] === tmp7) {
                  if (cResult[14] === tmp10) {
                    if (cResult[15] === title) {
                      let tmp13 = cResult[16];
                    }
                    return tmp13;
                  }
                }
              }
            }
          }
        }
      }
      const obj2 = { headerStyle: tmp4.header, title, headerTitle: tmp6, headerTitleAlign: "center", headerLeft: tmp7, headerRight, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: null };
      ({ headerLeftContainer: obj5.headerLeftContainerStyle, headerRightContainer: obj5.headerRightContainerStyle } = tmp4);
      obj2.headerStatusBarHeight = tmp10;
      const tmp15 = jsx(subtitle(6432).Header, { headerStyle: tmp4.header, title, headerTitle: tmp6, headerTitleAlign: "center", headerLeft: tmp7, headerRight, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: null });
      cResult[8] = headerRight;
      cResult[9] = tmp4.header;
      cResult[10] = tmp4.headerLeftContainer;
      cResult[11] = tmp4.headerRightContainer;
      cResult[12] = tmp6;
      cResult[13] = tmp7;
      cResult[14] = tmp10;
      cResult[15] = title;
      cResult[16] = tmp15;
      tmp13 = tmp15;
    }
    let sum = headerStatusBarHeight;
    if (headerStatusBarHeight == null) {
      if (!tmpResult3.isIOS()) {
        let num3 = top;
      } else {
        subtitle(6849);
        num3 = 0;
      }
      sum = num3 + tmp5(587).space.PX_8;
      tmpResult3 = subtitle(1384);
    }
    cResult[5] = headerStatusBarHeight;
    cResult[6] = top;
    cResult[7] = sum;
    tmp10 = sum;
  }
  const fn = function o(children) {
    return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle, subtitleColor, variant: "redesign/heading-18/bold" });
  };
  cResult[0] = subtitle;
  cResult[1] = subtitleColor;
  cResult[2] = fn;
  tmp6 = fn;
  const obj = subtitle(576);
  tmp5 = subtitleColor;
}) : (function SearchableDestinationListHeader(arg0) {
  ({ subtitle: require, subtitleColor: importDefault, headerStatusBarHeight, onClose } = arg0);
  ({ title, headerRight } = arg0);
  const tmp = closure_4();
  const obj = {
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
    const tmp5Result = NavigatorHeader;
  }
  obj.headerLeft = headerCloseButton;
  obj.headerRight = headerRight;
  ({ headerLeftContainer: obj.headerLeftContainerStyle, headerRightContainer: obj.headerRightContainerStyle } = tmp);
  if (headerStatusBarHeight == null) {
    if (!tmp5Result3.isIOS()) {
      let num = useSafeAreaInsetsDefault().top;
    } else {
      useIsWindowLarge;
      num = 0;
    }
    headerStatusBarHeight = num + nativeDefault.space.PX_8;
    tmp5Result3 = PlatformUtils;
  }
  obj.headerStatusBarHeight = headerStatusBarHeight;
  return jsx(_mod6432.Header, {
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