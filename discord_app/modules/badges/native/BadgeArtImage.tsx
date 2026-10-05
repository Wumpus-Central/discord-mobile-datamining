// === Module 10882: BadgeArtImage ===

// Module 10882 (BadgeArtImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import FastImageDefault from "FastImage" /* 5974 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import APNGPlayer from "APNGPlayer" /* 8464 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, obj1, tmp2;

function ignoreSvgError() {

}
const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let animated;
  let enableAnimation;
  let fallbackUrl;
  let height;
  let style;
  let url;
  let width;
  let obj = require("react");
  const cResult = obj.c(18);
  ({ url, height, width, fallbackUrl, animated, style } = arg0);
  const tmp = _require;
  if (undefined === width) {
    width = height;
  }
  let tmp4 = undefined !== animated && animated;
  _require = tmp4;
  if (cResult[0] === height) {
    let tmp5;
    if (cResult[1] === width) {
      tmp5 = cResult[2];
    }
    importDefault = tmp5;
    if (cResult[3] === tmp4) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp7;
        let tmp6Result1;
        if (cResult[7] === style) {
          tmp7 = cResult[8];
        }
        if (cResult[9] === fallbackUrl) {
          if (cResult[10] === height) {
            if (cResult[11] === tmp6) {
              if (cResult[12] === url) {
                let tmp8;
                if (cResult[13] === width) {
                  tmp8 = cResult[14];
                }
                if (cResult[15] === tmp7) {
                  let tmp15;
                  if (cResult[16] === tmp8) {
                    tmp15 = cResult[17];
                  }
                  return tmp15;
                }
                class E {
                  constructor(arg0) {
                    tmp = animated;
                    if (tmp) {
                      tmp3 = closure_2;
                      tmp2 = closure_0;
                      obj = closure_0(closure_2[5]);
                      if (obj.isAndroid()) {
                        tmp5 = jsx;
                        tmp6 = closure_2;
                        obj1 = { url: null, style: null, autoplay: true };
                        obj1.url = arg0;
                        tmp7 = closure_1;
                        obj1.style = closure_1;
                        tmp4 = jsx(tmp2(closure_2[6]).APNGPlayer, obj1);
                      }
                      return tmp4;
                    }
                    obj4 = { source: { uri: arg0 }, style: closure_1, resizeMode: "contain", enableAnimation: tmp };
                    tmp4 = jsx(closure_1(closure_2[7]), obj4);
                    return;
                  }
                }
                const tmp17 = <View style={tmp7} aria-hidden>{tmp8}</View>;
                cResult[15] = tmp7;
                cResult[16] = tmp8;
                cResult[17] = tmp17;
                tmp15 = tmp17;
              }
            }
          }
        }
        const first = url.split(/[?#]/)[0];
        class E {
          constructor(arg0) {
            tmp = animated;
            if (tmp) {
              tmp3 = closure_2;
              tmp2 = closure_0;
              obj = closure_0(closure_2[5]);
              if (obj.isAndroid()) {
                tmp5 = jsx;
                tmp6 = closure_2;
                obj1 = { url: null, style: null, autoplay: true };
                obj1.url = arg0;
                tmp7 = closure_1;
                obj1.style = closure_1;
                tmp4 = jsx(tmp2(closure_2[6]).APNGPlayer, obj1);
              }
              return tmp4;
            }
            obj4 = { source: { uri: arg0 }, style: closure_1, resizeMode: "contain", enableAnimation: tmp };
            tmp4 = jsx(closure_1(closure_2[7]), obj4);
            return;
          }
        }
        if (obj3.endsWith(".svg")) {
          class E {
            constructor(arg0) {
              tmp = animated;
              if (tmp) {
                tmp3 = closure_2;
                tmp2 = closure_0;
                obj = closure_0(closure_2[5]);
                if (obj.isAndroid()) {
                  tmp5 = jsx;
                  tmp6 = closure_2;
                  obj1 = { url: null, style: null, autoplay: true };
                  obj1.url = arg0;
                  tmp7 = closure_1;
                  obj1.style = closure_1;
                  tmp4 = jsx(tmp2(closure_2[6]).APNGPlayer, obj1);
                }
                return tmp4;
              }
              obj4 = { source: { uri: arg0 }, style: closure_1, resizeMode: "contain", enableAnimation: tmp };
              tmp4 = jsx(closure_1(closure_2[7]), obj4);
              return;
            }
          }
          let tmp6Result;
          const SvgUri = tmp(8136).SvgUri;
          if (null != fallbackUrl) {
            tmp6Result = tmp6(fallbackUrl);
          }
          tmp6Result1 = <SvgUri uri={url} width={null} height={height} onError={ignoreSvgError} fallback={tmp6Result} />;
        } else {
          tmp6Result1 = tmp6(url);
        }
        cResult[9] = fallbackUrl;
        cResult[10] = height;
        cResult[11] = tmp6;
        cResult[12] = url;
        cResult[13] = width;
        cResult[14] = tmp6Result1;
        tmp8 = tmp6Result1;
      }
      const items = [, ];
      class E {
        constructor(arg0) {
          tmp = animated;
          if (tmp) {
            tmp3 = closure_2;
            tmp2 = closure_0;
            obj = closure_0(closure_2[5]);
            if (obj.isAndroid()) {
              tmp5 = jsx;
              tmp6 = closure_2;
              obj1 = { url: null, style: null, autoplay: true };
              obj1.url = arg0;
              tmp7 = closure_1;
              obj1.style = closure_1;
              tmp4 = jsx(tmp2(closure_2[6]).APNGPlayer, obj1);
            }
            return tmp4;
          }
          obj4 = { source: { uri: arg0 }, style: closure_1, resizeMode: "contain", enableAnimation: tmp };
          tmp4 = jsx(closure_1(closure_2[7]), obj4);
          return;
        }
      }
      items[1] = style;
      cResult[6] = tmp5;
      cResult[7] = style;
      cResult[8] = items;
      tmp7 = items;
    }
    class E {
      constructor(arg0) {
        tmp = animated;
        if (tmp) {
          tmp3 = closure_2;
          tmp2 = closure_0;
          obj = closure_0(closure_2[5]);
          if (obj.isAndroid()) {
            tmp5 = jsx;
            tmp6 = closure_2;
            obj1 = { url: null, style: null, autoplay: true };
            obj1.url = arg0;
            tmp7 = closure_1;
            obj1.style = closure_1;
            tmp4 = jsx(tmp2(closure_2[6]).APNGPlayer, obj1);
          }
          return tmp4;
        }
        obj4 = { source: { uri: arg0 }, style: closure_1, resizeMode: "contain", enableAnimation: tmp };
        tmp4 = jsx(closure_1(closure_2[7]), obj4);
        return;
      }
    }
    cResult[3] = tmp4;
    cResult[4] = tmp5;
    cResult[5] = E;
    tmp6 = E;
  }
  const size1 = { width, height };
  cResult[0] = height;
  cResult[1] = width;
  cResult[2] = size1;
  tmp5 = size1;
}) : ((style) => {
  let animated;
  let fallbackUrl;
  let height;
  let tmpResult2;
  let url;
  let width;
  ({ url, height, width } = style);
  if (width === undefined) {
    width = height;
  }
  ({ fallbackUrl, animated } = style);
  if (animated === undefined) {
    animated = false;
  }
  size = { width, height };
  const items = [size, style.style];
  const str = url.split(/[?#]/)[0];
  const formatted = str.toLowerCase();
  if (formatted.endsWith(".svg")) {
    let tmp12;
    const SvgUri = inlineStyles.SvgUri;
    if (null != fallbackUrl) {
      if (animated) {
        let tmpResult;
        const tmp8Result = PlatformUtils;
        if (tmp8Result.isAndroid()) {
          tmpResult = jsx(APNGPlayer.APNGPlayer, { url: fallbackUrl, style: size, autoplay: true });
        }
        tmp12 = tmpResult;
      }
      const obj5 = { uri: fallbackUrl };
      tmpResult = jsx(FastImageDefault, { source: obj5, style: size, resizeMode: "contain", enableAnimation: animated });
    }
    tmpResult2 = <SvgUri uri={url} width={width} height={height} onError={ignoreSvgError} fallback={tmp12} />;
  } else {
    if (animated) {
      const obj4 = PlatformUtils;
      if (obj4.isAndroid()) {
        tmpResult2 = jsx(APNGPlayer.APNGPlayer, { url, style: size, autoplay: true });
      }
    }
    const obj8 = { uri: url };
    tmpResult2 = jsx(FastImageDefault, { source: obj8, style: size, resizeMode: "contain", enableAnimation: animated });
  }
  return <View style={items} aria-hidden>{tmpResult2}</View>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/badges/native/BadgeArtImage.tsx");

export default tmp3;
export const COMPLEX_BADGE_ASPECT_RATIO = 1.56;