// discord_app/modules/badges/native/BadgeCatalogIcon.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import BadgeArtImageDefault from "BadgeArtImage.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const f105623 = (item) => null != item;
const View = react_native.View;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let badge;
      let style;
      let tmp12;
      let tmp13;
      let tmp3;
      let tmp4;
      let tmp6;
      let tmp8;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(23);
      ({ badge, size, style } = arg0);
      if (cResult[0] !== badge) {
        const items = [, ,];
        ({
          simple_icon_raster_url: arr[0],
          complex_icon_static_url: arr[1],
          complex_icon_animated_url: arr[2],
        } = badge);
        const found = items.filter(f105623);
        const joined = found.join("|");
        cResult[0] = badge;
        cResult[1] = joined;
        cResult[2] = found;
        tmp4 = found;
        tmp3 = joined;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      if (cResult[3] !== tmp3) {
        const obj2 = { urlsKey: tmp3, candidateIndex: 0 };
        cResult[3] = tmp3;
        cResult[4] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[4];
      }
      [tmp8, tmp9] = react.useState(tmp6);
      let closure_0 = tmp9;
      _slicedToArray(react.useState(tmp6), 2);
      if (tmp8.urlsKey !== tmp3) {
        const obj3 = { urlsKey: tmp3, candidateIndex: 0 };
        tmp9(obj3);
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function z() {
          tmp9((candidateIndex) => {
            const obj = { candidateIndex: candidateIndex.candidateIndex + 1 };
            const merged = Object.assign(candidateIndex);
            return obj;
          });
        };
        cResult[5] = fn;
        tmp12 = fn;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] !== size) {
        const size1 = { width: size, height: size };
        cResult[6] = size;
        cResult[7] = size1;
        tmp13 = size1;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === style) {
        let tmp14;
        let tmp22;
        if (cResult[9] === tmp13) {
          tmp14 = cResult[10];
        }
        if (null == tmp4[tmp8.candidateIndex]) {
          let tmp26;
          if (cResult[11] !== tmp14) {
            const tmp29 = <View style={tmp14} aria-hidden />;
            cResult[11] = tmp14;
            cResult[12] = tmp29;
            tmp26 = tmp29;
          } else {
            tmp26 = cResult[12];
          }
          tmp22 = tmp26;
        } else {
          let tmp16;
          let tmp17;
          if (cResult[13] !== tmp4[tmp8.candidateIndex]) {
            const obj5 = { uri: tmp4[tmp8.candidateIndex] };
            cResult[13] = tmp4[tmp8.candidateIndex];
            cResult[14] = obj5;
            tmp16 = obj5;
          } else {
            tmp16 = cResult[14];
          }
          if (cResult[15] !== size) {
            const size2 = { width: size, height: size };
            cResult[15] = size;
            cResult[16] = size2;
            tmp17 = size2;
          } else {
            tmp17 = cResult[16];
          }
          if (cResult[17] === tmp16) {
            let tmp18;
            if (cResult[18] === tmp17) {
              tmp18 = cResult[19];
            }
            if (cResult[20] === tmp14) {
              if (cResult[21] === tmp18) {
                tmp22 = cResult[22];
              }
            }
            const tmp25 = (
              <View style={tmp14} aria-hidden>
                {tmp18}
              </View>
            );
            cResult[20] = tmp14;
            cResult[21] = tmp18;
            cResult[22] = tmp25;
            tmp22 = tmp25;
          }
          const tmp21 = jsx(FastImageDefault, { source: tmp16, style: tmp17, onError: tmp12 });
          cResult[17] = tmp16;
          cResult[18] = tmp17;
          cResult[19] = tmp21;
          tmp18 = tmp21;
        }
        return tmp22;
      }
      const items1 = [tmp13, style];
      cResult[8] = style;
      cResult[9] = tmp13;
      cResult[10] = items1;
      tmp14 = items1;
    }
  : (style) => {
      let badge;
      let obj3;
      let tmp3;
      let tmp4;
      ({ badge, size } = style);
      const items = [, ,];
      ({ simple_icon_raster_url: arr[0], complex_icon_static_url: arr[1], complex_icon_animated_url: arr[2] } = badge);
      style = style.style;
      const found = items.filter(f105623);
      const joined = found.join("|");
      [tmp3, tmp4] = react.useState({ urlsKey: joined, candidateIndex: 0 });
      let c0 = tmp4;
      _slicedToArray(react.useState({ urlsKey: joined, candidateIndex: 0 }), 2);
      if (tmp3.urlsKey !== joined) {
        const obj = { urlsKey: joined, candidateIndex: 0 };
        tmp4(obj);
      }
      [][0] = tmp4;
      const items1 = [{ width: size, height: size }, style];
      if (null == found[tmp3.candidateIndex]) {
        obj3 = { style: items1, "aria-hidden": true };
        const obj2 = { style: items1, "aria-hidden": true };
      } else {
        obj3 = { style: items1, "aria-hidden": true, children: null };
        const size1 = { width: size, height: size };
        const obj5 = { uri: found[tmp3.candidateIndex] };
      }
      return <View {...obj3} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let badge;
      let style;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(9);
      ({ badge, size, style } = arg0);
      if (size > 24) {
        if (null != badge.simple_icon_url) {
          if (cResult[0] === badge.simple_icon_raster_url) {
            if (cResult[1] === badge.simple_icon_url) {
              if (cResult[2] === size) {
                let tmp6;
                if (cResult[3] === style) {
                  tmp6 = cResult[4];
                }
                tmp4 = tmp6;
              }
            }
          }
          const tmp9 = jsx(BadgeArtImageDefault, {
            url: badge.simple_icon_url,
            height: size,
            fallbackUrl: badge.simple_icon_raster_url,
            style,
          });
          cResult[0] = badge.simple_icon_raster_url;
          cResult[1] = badge.simple_icon_url;
          cResult[2] = size;
          cResult[3] = style;
          cResult[4] = tmp9;
          tmp6 = tmp9;
        }
        return tmp4;
      }
      if (cResult[5] === badge) {
        if (cResult[6] === size) {
          if (cResult[7] === style) {
            tmp4 = cResult[8];
          }
        }
      }
      const tmp5 = <closure_7 badge={badge} size={size} style={style} />;
      cResult[5] = badge;
      cResult[6] = size;
      cResult[7] = style;
      cResult[8] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      let badge;
      let style;
      ({ badge, size, style } = arg0);
      if (size > 24) {
        let tmp2;
        if (null != badge.simple_icon_url) {
          tmp2 = jsx(BadgeArtImageDefault, {
            url: badge.simple_icon_url,
            height: size,
            fallbackUrl: badge.simple_icon_raster_url,
            style,
          });
        }
        return tmp2;
      }
      tmp2 = <closure_7 badge={badge} size={size} style={style} />;
    };
const result = size.fileFinishedImporting("modules/badges/native/BadgeCatalogIcon.tsx");

export default tmp2;
