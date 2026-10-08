// discord_app/modules/share/native/SearchableDestinationListHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _mod6212 from "../../../../_runtime/metro/06212__.js";
import useIsWindowLarge from "../../screen/native/useIsWindowLarge.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = {
  headerLeftContainer: { paddingLeft: nativeDefault.space.PX_16 },
  headerRightContainer: null,
  header: null,
};
const obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
const obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj2.header = {
  borderBottomWidth: 0,
  shadowColor: "transparent",
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj5 = {
  borderBottomWidth: 0,
  shadowColor: "transparent",
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchableDestinationListHeader(subtitleColor) {
      const cResult = subtitle(576).c(16);
      ({ title, subtitle } = subtitleColor);
      subtitleColor = subtitleColor.subtitleColor;
      ({ headerRight, onClose } = subtitleColor);
      const tmp4 = closure_4();
      const top = subtitleColor(1630)().top;
      if (cResult[0] === subtitle) {
        if (cResult[1] === subtitleColor) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] !== onClose) {
          const headerCloseButton = subtitle(6203).getHeaderCloseButton(onClose);
          cResult[3] = onClose;
          cResult[4] = headerCloseButton;
          let tmp8 = headerCloseButton;
          const tmpResult = subtitle(6203);
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] !== top) {
          if (!tmpResult3.isIOS()) {
            let num3 = top;
          } else {
            subtitle(6618);
            num3 = 0;
          }
          cResult[5] = top;
          cResult[6] = num3;
          let tmp10 = num3;
          tmpResult3 = subtitle(1381);
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
                      if (cResult[14] === title) {
                        let tmp12 = cResult[15];
                      }
                      return tmp12;
                    }
                  }
                }
              }
            }
          }
        }
        const obj2 = {
          headerStyle: tmp6,
          title,
          headerTitle: tmp7,
          headerTitleAlign: "center",
          headerLeft: tmp8,
          headerRight,
          headerLeftContainerStyle: null,
          headerRightContainerStyle: null,
          headerStatusBarHeight: null,
        };
        ({ headerLeftContainer: obj5.headerLeftContainerStyle, headerRightContainer: obj5.headerRightContainerStyle } =
          tmp4);
        obj2.headerStatusBarHeight = sum;
        const tmp14 = jsx(subtitle(6212).Header, {
          headerStyle: tmp6,
          title,
          headerTitle: tmp7,
          headerTitleAlign: "center",
          headerLeft: tmp8,
          headerRight,
          headerLeftContainerStyle: null,
          headerRightContainerStyle: null,
          headerStatusBarHeight: null,
        });
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
        return jsx(HeaderShared.GenericHeaderTitle, {
          title: children.children,
          subtitle,
          subtitleColor,
          variant: "redesign/heading-18/bold",
        });
      };
      cResult[0] = subtitle;
      cResult[1] = subtitleColor;
      cResult[2] = fn;
      tmp7 = fn;
      const obj = subtitle(576);
      tmp5 = subtitleColor;
    }
  : function SearchableDestinationListHeader(arg0) {
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
      ({ headerLeftContainer: obj.headerLeftContainerStyle, headerRightContainer: obj.headerRightContainerStyle } =
        tmp);
      if (!obj3.isIOS()) {
        let num = useSafeAreaInsetsDefault().top;
      } else {
        useIsWindowLarge;
        num = 0;
      }
      obj.headerStatusBarHeight = num + nativeDefault.space.PX_8;
      return jsx(_mod6212.Header, {
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
      });
    };
