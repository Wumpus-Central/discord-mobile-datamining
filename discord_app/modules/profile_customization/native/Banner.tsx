// discord_app/modules/profile_customization/native/Banner.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const BANNER_HEIGHT = Constants.BANNER_HEIGHT;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ root: { width: "100%" }, image: { width: "100%", height: "100%" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let backgroundColor;
      let bannerHeight;
      let bannerSafeArea;
      let bannerSource;
      let style;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(15);
      ({ style, bannerSource, backgroundColor, bannerSafeArea, bannerHeight } = arg0);
      let num = 0;
      if (undefined !== bannerSafeArea) {
        num = bannerSafeArea;
      }
      if (undefined === bannerHeight) {
        bannerHeight = BANNER_HEIGHT;
      }
      const tmp4 = closure_6();
      if (cResult[0] !== backgroundColor) {
        const tmpResult = utils_ColorUtils;
        const int2hexResult = tmpResult.int2hex(backgroundColor);
        cResult[0] = backgroundColor;
        cResult[1] = int2hexResult;
        tmp5 = int2hexResult;
      } else {
        tmp5 = cResult[1];
      }
      const sum = bannerHeight + num;
      if (cResult[2] === tmp5) {
        let tmp8;
        if (cResult[3] === sum) {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp8) {
          if (cResult[6] === style) {
            let tmp9;
            if (cResult[7] === tmp4.root) {
              tmp9 = cResult[8];
            }
            if (cResult[9] === bannerSource) {
              let tmp10;
              if (cResult[10] === tmp4.image) {
                tmp10 = cResult[11];
              }
              if (cResult[12] === tmp9) {
                let tmp14;
                if (cResult[13] === tmp10) {
                  tmp14 = cResult[14];
                }
                return tmp14;
              }
              const tmp17 = <View style={tmp9}>{tmp10}</View>;
              cResult[12] = tmp9;
              cResult[13] = tmp10;
              cResult[14] = tmp17;
              tmp14 = tmp17;
            }
            let tmp11 = null;
            if (null != bannerSource) {
              tmp11 = jsx(FastImageDefault, { style: tmp4.image, source: bannerSource });
            }
            cResult[9] = bannerSource;
            cResult[10] = tmp4.image;
            cResult[11] = tmp11;
            tmp10 = tmp11;
          }
        }
        const items = [tmp4.root, tmp8, style];
        cResult[5] = tmp8;
        cResult[6] = style;
        cResult[7] = tmp4.root;
        cResult[8] = items;
        tmp9 = items;
      }
      const obj4 = { backgroundColor: tmp5, height: sum };
      cResult[2] = tmp5;
      cResult[3] = sum;
      cResult[4] = obj4;
      tmp8 = obj4;
    }
  : (bannerHeight) => {
      let backgroundColor;
      let bannerSafeArea;
      let bannerSource;
      let obj2;
      let style;
      ({ bannerSource, bannerSafeArea } = bannerHeight);
      ({ style, backgroundColor } = bannerHeight);
      if (bannerSafeArea === undefined) {
        bannerSafeArea = 0;
      }
      bannerHeight = bannerHeight.bannerHeight;
      if (bannerHeight === undefined) {
        bannerHeight = BANNER_HEIGHT;
      }
      const tmp = closure_6();
      const obj = { backgroundColor: obj2.int2hex(backgroundColor), height: bannerHeight + bannerSafeArea };
      const items = [tmp.root, obj, style];
      let tmp3Result = null;
      obj2 = utils_ColorUtils;
      if (null != bannerSource) {
        tmp3Result = jsx(FastImageDefault, { style: tmp.image, source: bannerSource });
      }
      return <View style={items}>{tmp3Result}</View>;
    };
const result = size.fileFinishedImporting("modules/profile_customization/native/Banner.tsx");

export default tmp3;
