// === Module 10713: SearchableDestinationListHeader ===

// Module 10713 (SearchableDestinationListHeader)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import _mod6019 from "module_6019" /* 6019 */;
import useIsWindowLarge from "useIsWindowLarge" /* 6433 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { headerLeftContainer: obj2, headerRightContainer: obj3, header: { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND } };
obj2 = { paddingLeft: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingRight: nativeDefault.space.PX_16 };
({ borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((subtitleColor) => {
  let headerRight;
  let onClose;
  let subtitle;
  let title;
  const obj = subtitle(576);
  const cResult = obj.c(16);
  ({ title, subtitle } = subtitleColor);
  subtitleColor = subtitleColor.subtitleColor;
  ({ headerRight, onClose } = subtitleColor);
  const tmp4 = closure_4();
  const top = subtitleColor(1618)().top;
  const tmp5 = subtitleColor;
  if (cResult[0] === subtitle) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[1] === subtitleColor) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== onClose) {
      const tmpResult = subtitle(6010);
      const headerCloseButton = tmpResult.getHeaderCloseButton(onClose);
      cResult[3] = onClose;
      cResult[4] = headerCloseButton;
      tmp8 = headerCloseButton;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== top) {
      let num3;
      const tmpResult3 = subtitle(1369);
      if (!tmpResult3.isIOS()) {
        num3 = top;
      } else {
        subtitle(6433);
        num3 = 0;
      }
      cResult[5] = top;
      cResult[6] = num3;
      tmp10 = num3;
    } else {
      tmp10 = cResult[6];
    }
    const sum = tmp10 + tmp5(587).space.PX_8;
    if (cResult[7] === headerRight) {
      if (cResult[8] === tmp4.header) {
        if (cResult[9] === tmp4.headerLeftContainer) {
          if (cResult[10] === tmp4.headerRightContainer) {
            if (cResult[11] === tmp7) {
              if (cResult[12] === tmp8) {
                if (cResult[13] === sum) {
                  let tmp12;
                  if (cResult[14] === title) {
                    tmp12 = cResult[15];
                  }
                  return tmp12;
                }
              }
            }
          }
        }
      }
    }
    ({ headerLeftContainer: obj5.headerLeftContainerStyle, headerRightContainer: obj5.headerRightContainerStyle } = tmp4);
    const tmp14 = jsx(subtitle(6019).Header, { headerStyle: tmp6, title, headerTitle: tmp7, headerTitleAlign: "center", headerLeft: tmp8, headerRight, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: sum });
    cResult[7] = headerRight;
    cResult[8] = tmp4.header;
    cResult[9] = tmp4.headerLeftContainer;
    cResult[10] = tmp4.headerRightContainer;
    cResult[11] = tmp7;
    cResult[12] = tmp8;
    cResult[13] = sum;
    cResult[14] = title;
    cResult[15] = tmp14;
    tmp12 = tmp14;
  }
  const fn = function o(children) {
    return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle, subtitleColor, variant: "redesign/heading-18/bold" });
  };
  cResult[0] = subtitle;
  cResult[1] = subtitleColor;
  cResult[2] = fn;
  tmp7 = fn;
}) : ((arg0) => {
  let headerRight;
  let num;
  let obj2;
  let onClose;
  let subtitle;
  let subtitleColor;
  let title;
  function headerTitle(children) {
    return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle: require, subtitleColor: importDefault, variant: "redesign/heading-18/bold" });
  }
  ({ subtitle: require, subtitleColor: importDefault } = arg0);
  ({ title, headerRight, onClose } = arg0);
  const tmp = closure_4();
  const top = useSafeAreaInsetsDefault().top;
  const obj = { headerStyle: tmp.header, title, headerTitle, headerTitleAlign: "center", headerLeft: obj2.getHeaderCloseButton(onClose), headerRight, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: num + nativeDefault.space.PX_8 };
  const Header = _mod6019.Header;
  obj2 = NavigatorHeader;
  ({ headerLeftContainer: obj.headerLeftContainerStyle, headerRightContainer: obj.headerRightContainerStyle } = tmp);
  const obj3 = PlatformUtils;
  if (!obj3.isIOS()) {
    num = top;
  } else {
    useIsWindowLarge;
    num = 0;
  }
  return <Header headerStyle={tmp.header} title={title} headerTitle={headerTitle} headerTitleAlign="center" headerLeft={obj2.getHeaderCloseButton(onClose)} headerRight={headerRight} headerLeftContainerStyle={null} headerRightContainerStyle={null} headerStatusBarHeight={num + nativeDefault.space.PX_8} />;
});
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default tmp4;