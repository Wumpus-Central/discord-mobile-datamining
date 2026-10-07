// discord_app/modules/profile_customization/native/Banner.tsx
import c from "../../../../_runtime/00576_c.js";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const BANNER_HEIGHT = fn(1085).BANNER_HEIGHT;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles({ root: { width: "100%" }, image: { width: "100%", height: "100%" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/native/Banner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(15);
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
        const int2hexResult = utils_ColorUtils.int2hex(backgroundColor);
        cResult[0] = backgroundColor;
        cResult[1] = int2hexResult;
        let tmp5 = int2hexResult;
        const tmpResult = utils_ColorUtils;
      } else {
        tmp5 = cResult[1];
      }
      const sum = bannerHeight + num;
      if (cResult[2] === tmp5) {
        if (cResult[3] === sum) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] === tmp8) {
          if (cResult[6] === style) {
            if (cResult[7] === tmp4.root) {
              let tmp9 = cResult[8];
            }
            if (cResult[9] === bannerSource) {
              if (cResult[10] === tmp4.image) {
                let tmp10 = cResult[11];
              }
              if (cResult[12] === tmp9) {
                if (cResult[13] === tmp10) {
                  let tmp14 = cResult[14];
                }
                return tmp14;
              }
              const obj2 = { style: tmp9, children: tmp10 };
              const tmp17 = <View style={tmp9}>{tmp10}</View>;
              cResult[12] = tmp9;
              cResult[13] = tmp10;
              cResult[14] = tmp17;
              tmp14 = tmp17;
            }
            let tmp11 = null;
            if (null != bannerSource) {
              const obj3 = { style: tmp4.image, source: bannerSource };
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
      const obj = { backgroundColor: utils_ColorUtils.int2hex(backgroundColor), height: bannerHeight + bannerSafeArea };
      const obj3 = { style: null, children: null };
      const items = [tmp.root, obj, style];
      obj3.style = items;
      let tmp3Result = null;
      if (null != bannerSource) {
        const obj4 = { style: tmp.image, source: bannerSource };
        tmp3Result = jsx(FastImageDefault, { style: tmp.image, source: bannerSource });
      }
      obj3.children = tmp3Result;
      return <View style={null}>{null}</View>;
    };
