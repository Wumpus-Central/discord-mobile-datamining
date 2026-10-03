// discord_app/modules/badges/native/BadgeCatalogIcon.tsx
import c from "../../../../_runtime/00576_c.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import BadgeArtImageDefault from "BadgeArtImage.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(23);
      ({ badge, size, style } = arg0);
      if (cResult[0] !== badge) {
        const items = [, ,];
        ({
          simple_icon_raster_url: arr[0],
          complex_icon_static_url: arr[1],
          complex_icon_animated_url: arr[2],
        } = badge);
        const found = items.filter((item) => null != item);
        const joined = found.join("|");
        cResult[0] = badge;
        cResult[1] = joined;
        cResult[2] = found;
        let tmp3 = joined;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[3] !== tmp3) {
        const obj2 = { urlsKey: tmp3, candidateIndex: 0 };
        cResult[3] = tmp3;
        cResult[4] = obj2;
        let tmp6 = obj2;
      } else {
        tmp6 = cResult[4];
      }
      [tmp8, tmp9] = noop.useState(tmp6);
      require = tmp9;
      if (tmp8.urlsKey !== tmp3) {
        const obj3 = { urlsKey: tmp3, candidateIndex: 0 };
        tmp9(obj3);
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function z() {
          tmp9((candidateIndex) => {
            const obj = {};
            const merged = Object.assign(candidateIndex);
            obj.candidateIndex = candidateIndex.candidateIndex + 1;
            return obj;
          });
        };
        cResult[5] = fn;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] !== size) {
        const size1 = { width: size, height: size };
        cResult[6] = size;
        cResult[7] = size1;
        let tmp13 = size1;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === style) {
        if (cResult[9] === tmp13) {
          let tmp14 = cResult[10];
        }
        if (null == tmp11) {
          if (cResult[11] !== tmp14) {
            const obj4 = { style: tmp14, "aria-hidden": true };
            const tmp29 = <View style={tmp14} aria-hidden />;
            cResult[11] = tmp14;
            cResult[12] = tmp29;
          }
        } else {
          if (cResult[13] !== tmp11) {
            const obj5 = { uri: tmp11 };
            cResult[13] = tmp11;
            cResult[14] = obj5;
            let tmp16 = obj5;
          } else {
            tmp16 = cResult[14];
          }
          if (cResult[15] !== size) {
            const size2 = { width: size, height: size };
            cResult[15] = size;
            cResult[16] = size2;
            let tmp17 = size2;
          } else {
            tmp17 = cResult[16];
          }
          if (cResult[17] === tmp16) {
            if (cResult[18] === tmp17) {
              let tmp18 = cResult[19];
            }
            if (cResult[20] === tmp14) {
              if (cResult[21] === tmp18) {
                let tmp22 = cResult[22];
              }
              return tmp22;
            }
            const obj6 = { style: tmp14, "aria-hidden": true, children: tmp18 };
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
          const obj7 = { source: tmp16, style: tmp17, onError: tmp12 };
          const tmp21 = jsx(FastImageDefault, { source: tmp16, style: tmp17, onError: tmp12 });
          cResult[17] = tmp16;
          cResult[18] = tmp17;
          cResult[19] = tmp21;
          tmp18 = tmp21;
        }
      }
      const items1 = [tmp13, style];
      cResult[8] = style;
      cResult[9] = tmp13;
      cResult[10] = items1;
      tmp14 = items1;
      const tmp7 = _slicedToArray(noop.useState(tmp6), 2);
    }
  : (style) => {
      ({ badge, size } = style);
      const items = [, ,];
      ({ simple_icon_raster_url: arr[0], complex_icon_static_url: arr[1], complex_icon_animated_url: arr[2] } = badge);
      const found = items.filter((item) => null != item);
      const joined = found.join("|");
      [tmp3, tmp4] = noop.useState({ urlsKey: joined, candidateIndex: 0 });
      c0 = tmp4;
      if (tmp3.urlsKey !== joined) {
        let obj = { urlsKey: joined, candidateIndex: 0 };
        tmp4(obj);
      }
      [][0] = tmp4;
      const items1 = [{ width: size, height: size }, style.style];
      if (null == found[tmp3.candidateIndex]) {
        const obj2 = { style: items1, "aria-hidden": true };
        let obj3 = obj2;
      } else {
        obj3 = { style: items1, "aria-hidden": true, children: null };
        const obj4 = { source: null, style: null, onError: null };
        const obj5 = { uri: tmp6 };
        obj4.source = obj5;
        const size1 = { width: size, height: size };
        obj4.style = size1;
        obj4.onError = tmp7;
        obj3.children = jsx(FastImageDefault, { source: null, style: null, onError: null });
      }
      return <View {...obj3} />;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeCatalogIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp = dependencyMap;
      const cResult = c.c(9);
      ({ badge: simple_icon_url, size, style } = arg0);
      if (size > 24) {
        if (null != simple_icon_url.simple_icon_url) {
          if (cResult[0] === simple_icon_url.simple_icon_raster_url) {
            if (cResult[1] === simple_icon_url.simple_icon_url) {
              if (cResult[2] === size) {
              }
            }
          }
          const obj2 = {
            url: simple_icon_url.simple_icon_url,
            height: size,
            fallbackUrl: simple_icon_url.simple_icon_raster_url,
            style,
          };
          tmp = jsx(BadgeArtImageDefault, {
            url: simple_icon_url.simple_icon_url,
            height: size,
            fallbackUrl: simple_icon_url.simple_icon_raster_url,
            style,
          });
          ({ simple_icon_raster_url: tmp2[0], simple_icon_url } = simple_icon_url);
          cResult[1] = simple_icon_url;
          cResult[2] = size;
          cResult[3] = style;
          cResult[4] = tmp;
        }
      }
      if (cResult[5] === simple_icon_url) {
        if (cResult[6] === size) {
          if (cResult[7] === style) {
            let tmp4 = cResult[8];
          }
          return tmp4;
        }
      }
      const tmp5 = <closure_7 badge={simple_icon_url} size={size} style={style} />;
      cResult[5] = simple_icon_url;
      cResult[6] = size;
      cResult[7] = style;
      cResult[8] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      ({ badge, size, style } = arg0);
      if (size > 24) {
        if (null != badge.simple_icon_url) {
          const obj = { url: badge.simple_icon_url, height: size, fallbackUrl: badge.simple_icon_raster_url, style };
          let tmp2 = jsx(BadgeArtImageDefault, {
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
