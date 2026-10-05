// discord_app/modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
const sm = nativeDefault.radii.sm;
let closure_6 = createStyles.createStyles((width, borderRadius) => {
  const obj = {
    appIcon: { width, height: width, borderRadius },
    entityWrapper: {
      padding: 1,
      backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
      overflow: "hidden",
      borderRadius: borderRadius + 1,
    },
  };
  ({
    padding: 1,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    overflow: "hidden",
    borderRadius: borderRadius + 1,
  });
  return obj;
});
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let iconBorderRadius;
      let iconSize;
      let iconSource;
      let iconStyle;
      let wrapperStyle;
      const obj = react;
      const cResult = obj.c(12);
      ({ iconSource, wrapperStyle, iconStyle, iconSize, iconBorderRadius } = arg0);
      let num = 32;
      if (undefined !== iconSize) {
        num = iconSize;
      }
      if (undefined === iconBorderRadius) {
        iconBorderRadius = sm;
      }
      const tmp3Result = closure_6(num, iconBorderRadius);
      if (cResult[0] === tmp3Result.entityWrapper) {
        let tmp5;
        if (cResult[1] === wrapperStyle) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === iconStyle) {
          let tmp6;
          if (cResult[4] === tmp3Result.appIcon) {
            tmp6 = cResult[5];
          }
          if (cResult[6] === iconSource) {
            let tmp7;
            if (cResult[7] === tmp6) {
              tmp7 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              let tmp11;
              if (cResult[10] === tmp7) {
                tmp11 = cResult[11];
              }
              return tmp11;
            }
            const tmp14 = <View style={tmp5}>{tmp7}</View>;
            cResult[9] = tmp5;
            cResult[10] = tmp7;
            cResult[11] = tmp14;
            tmp11 = tmp14;
          }
          const tmp10 = jsx(FastImageDefault, { style: tmp6, source: iconSource });
          cResult[6] = iconSource;
          cResult[7] = tmp6;
          cResult[8] = tmp10;
          tmp7 = tmp10;
        }
        const items = [tmp3Result.appIcon, iconStyle];
        cResult[3] = iconStyle;
        cResult[4] = tmp3Result.appIcon;
        cResult[5] = items;
        tmp6 = items;
      }
      const items1 = [tmp3Result.entityWrapper, wrapperStyle];
      cResult[0] = tmp3Result.entityWrapper;
      cResult[1] = wrapperStyle;
      cResult[2] = items1;
      tmp5 = items1;
    }
  : (iconSize) => {
      let iconSource;
      let iconStyle;
      let wrapperStyle;
      let num = iconSize.iconSize;
      ({ iconSource, wrapperStyle, iconStyle } = iconSize);
      if (num === undefined) {
        num = 32;
      }
      let iconBorderRadius = iconSize.iconBorderRadius;
      if (iconBorderRadius === undefined) {
        iconBorderRadius = sm;
      }
      const tmp = closure_6(num, iconBorderRadius);
      const items = [tmp.entityWrapper, wrapperStyle];
      const items1 = [tmp.appIcon, iconStyle];
      return <View style={items}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/EntityBorderAppIcon.tsx");

export default tmp2;
