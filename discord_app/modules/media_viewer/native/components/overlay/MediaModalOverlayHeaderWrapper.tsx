// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayHeaderWrapper.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import NavigatorConstants from "../../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((paddingTop, arg1, arg2) => {
  const obj = {
    bar: {
      flexDirection: "row",
      alignItems: "center",
      height: NavigatorConstants.NAV_BAR_HEIGHT + paddingTop,
      paddingTop,
      paddingLeft: arg1 + 6,
      paddingRight: arg2 + 6,
    },
  };
  ({
    flexDirection: "row",
    alignItems: "center",
    height: NavigatorConstants.NAV_BAR_HEIGHT + paddingTop,
    paddingTop,
    paddingLeft: arg1 + 6,
    paddingRight: arg2 + 6,
  });
  return obj;
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let style;
      const obj = react2;
      const cResult = obj.c(6);
      ({ children, style } = arg0);
      const rect = useSafeAreaInsetsDefault();
      const tmp2 = closure_5(rect.top, rect.left, rect.right);
      if (cResult[0] === style) {
        let tmp3;
        if (cResult[1] === tmp2.bar) {
          tmp3 = cResult[2];
        }
        if (cResult[3] === children) {
          let tmp4;
          if (cResult[4] === tmp3) {
            tmp4 = cResult[5];
          }
          return tmp4;
        }
        const tmp7 = (
          <View style={tmp3} pointerEvents="box-none">
            {children}
          </View>
        );
        cResult[3] = children;
        cResult[4] = tmp3;
        cResult[5] = tmp7;
        tmp4 = tmp7;
      }
      const items = [tmp2.bar, style];
      cResult[0] = style;
      cResult[1] = tmp2.bar;
      cResult[2] = items;
      tmp3 = items;
    }
  : (arg0) => {
      let children;
      let style;
      ({ children, style } = arg0);
      const rect = useSafeAreaInsetsDefault();
      const items = [closure_5(rect.top, rect.left, rect.right).bar, style];
      return (
        <View style={items} pointerEvents="box-none">
          {children}
        </View>
      );
    };
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaModalOverlayHeaderWrapper.tsx",
);

export const MediaModalOverlayHeaderWrapper = tmp3;
