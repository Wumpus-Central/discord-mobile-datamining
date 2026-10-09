// discord_app/modules/badges/native/BadgeArtImage.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import APNGPlayer2 from "../../image/native/APNGPlayer.android.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function ignoreSvgError() {}
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeArtImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BadgeArtImage(arg0) {
      let SvgUri = _require;
      let size = dependencyMap;
      const cResult = require("c").c(18);
      ({ url, height, width, fallbackUrl, animated, style } = arg0);
      if (undefined === width) {
        width = height;
      }
      _require = tmp2;
      if (cResult[0] === height) {
        if (cResult[1] === width) {
          let tmp3 = cResult[2];
        }
        style = tmp3;
        if (cResult[3] === tmp2) {
          if (cResult[4] === tmp3) {
            let tmp4 = cResult[5];
          }
          if (cResult[6] === tmp3) {
            if (cResult[7] === style) {
              let tmp5 = cResult[8];
            }
            if (cResult[9] === fallbackUrl) {
              if (cResult[10] === height) {
                if (cResult[11] === tmp4) {
                  if (cResult[12] === url) {
                    if (cResult[13] === width) {
                      if (cResult[15] === tmp5) {
                        if (cResult[16] === tmp6) {
                          let tmp13 = cResult[17];
                        }
                        return tmp13;
                      }
                      const obj = { style: tmp5, "aria-hidden": true, children: cResult[14] };
                      const tmp16 = (
                        <View style={tmp5} aria-hidden>
                          {cResult[14]}
                        </View>
                      );
                      cResult[15] = tmp5;
                      cResult[16] = cResult[14];
                      cResult[17] = tmp16;
                      tmp13 = tmp16;
                    }
                  }
                }
              }
            }
            const formatted = url.split(/[?#]/)[0].toLowerCase();
            if (formatted.endsWith(".svg")) {
              SvgUri = SvgUri(7559).SvgUri;
              size = { uri: url, width, height, onError: ignoreSvgError, fallback: null };
              let tmp4Result;
              if (null != fallbackUrl) {
                tmp4Result = tmp4(fallbackUrl);
              }
              size.fallback = tmp4Result;
              let tmp4Result1 = (
                <SvgUri uri={url} width={width} height={height} onError={ignoreSvgError} fallback={null} />
              );
            } else {
              tmp4Result1 = tmp4(url);
            }
            cResult[9] = fallbackUrl;
            cResult[10] = height;
            cResult[11] = tmp4;
            cResult[12] = url;
            cResult[13] = width;
            cResult[14] = tmp4Result1;
            const str = url.split(/[?#]/)[0];
          }
          const items = [tmp3, style];
          cResult[6] = tmp3;
          cResult[7] = style;
          cResult[8] = items;
          tmp5 = items;
        }
        function raster(uri) {
          if (enableAnimation) {
            if (obj.isAndroid()) {
              const obj2 = { url: uri, style, autoplay: true };
              let tmp4 = jsx(APNGPlayer2.APNGPlayer, { url: uri, style, autoplay: true });
            }
            return tmp4;
          }
          tmp4 = jsx(FastImageDefault, { source: { uri }, style, resizeMode: "contain", enableAnimation });
          const obj3 = { source: { uri }, style, resizeMode: "contain", enableAnimation };
        }
        cResult[3] = tmp2;
        cResult[4] = tmp3;
        cResult[5] = raster;
        tmp4 = raster;
      }
      const size1 = { width, height };
      cResult[0] = height;
      cResult[1] = width;
      cResult[2] = size1;
      tmp3 = size1;
      let obj2 = require("c");
    }
  : function BadgeArtImage(style) {
      ({ url, height, width } = style);
      if (width === undefined) {
        width = height;
      }
      ({ fallbackUrl, animated } = style);
      if (animated === undefined) {
        animated = false;
      }
      const size = { width, height };
      const obj = { style: null, "aria-hidden": true, children: null };
      const items = [size, style.style];
      obj.style = items;
      const formatted = url.split(/[?#]/)[0].toLowerCase();
      if (formatted.endsWith(".svg")) {
        let APNGPlayer = require;
        const size1 = { uri: url, width, height, onError: ignoreSvgError, fallback: null };
        if (null == fallbackUrl) {
          size1.fallback = undefined;
          let tmpResult = <tmp8 {...size1} />;
        } else {
          if (!animated) {
            const obj2 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
            const obj3 = { uri: fallbackUrl };
            obj2.source = obj3;
            obj2.style = size;
            obj2.enableAnimation = animated;
            let tmpResult2 = jsx(FastImageDefault, {
              source: null,
              style: null,
              resizeMode: "contain",
              enableAnimation: null,
            });
          } else {
            APNGPlayer(1382);
          }
          APNGPlayer = APNGPlayer(8992).APNGPlayer;
          const obj5 = { url: fallbackUrl, style: size, autoplay: true };
          tmpResult2 = <APNGPlayer url={fallbackUrl} style={size} autoplay />;
        }
      } else {
        if (animated) {
          if (obj4.isAndroid()) {
            const obj6 = { url, style: size, autoplay: true };
            tmpResult = jsx(APNGPlayer2.APNGPlayer, { url, style: size, autoplay: true });
          }
          obj4 = PlatformUtils;
        }
        const obj7 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
        const obj8 = { uri: url };
        obj7.source = obj8;
        obj7.style = size;
        obj7.enableAnimation = animated;
        tmpResult = jsx(FastImageDefault, { source: null, style: null, resizeMode: "contain", enableAnimation: null });
      }
      obj.children = tmpResult;
      return (
        <View style={null} aria-hidden>
          {null}
        </View>
      );
    };
export const COMPLEX_BADGE_ASPECT_RATIO = 1.56;
