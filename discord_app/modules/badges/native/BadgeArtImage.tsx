// discord_app/modules/badges/native/BadgeArtImage.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import TimeUtils from "../../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import inlineStyles from "../../../../_runtime/08101_inlineStyles.js";
import APNGPlayer2 from "../../image/native/APNGPlayer.android.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ignoreSvgError() {}
function timeOut() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _timeOut() {
  await TimeUtils.sleep(closure_2_10);
  return null;
};
function SvgArt(url) {
  url = url.url;
  ({ fallback, onLoad } = url);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  closure_4 = undefined;
  ({ width, height } = url);
  [tmp2, c2] = noop.useState(null);
  const tmp = _slicedToArray(noop.useState(null), 2);
  [tmp4, c3] = noop.useState(false);
  items = [url];
  const effect = noop.useEffect(() => {
    closure_1 = async function _load() {
      closure_1 = tmp3;
      let v0 = 1;
      await closure_2_9.one(
        closure_0,
        closure_2_4(async () => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_2 = tmp5;
                  closure_1 = tmp2;
                  closure_129_0 = undefined;
                  closure_129_1 = undefined;
                  items = [closure_2_0(8101).fetchText(c0), closure_2_11()];
                  c3 = 1;
                  c4 = 1;
                  const obj4 = { value: Promise.race(items), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                closure_129_0 = value;
                c0 = closure_129_0;
                if (closure_129_0 == null) {
                  c0 = "";
                }
                closure_129_1 = closure_2_0(8101).parse(c0);
                if (null == closure_129_1) {
                  const _Error = Error;
                  const error = new Error("svg has no content");
                  throw error;
                } else {
                  c4 = 3;
                  const obj = { value: closure_129_1, done: true };
                  return obj;
                }
                const obj6 = closure_2_0(8101);
              }
            } catch (tmp15) {
              c4 = tmp;
              throw tmp15;
            }
          }
        }),
      );
      if (1 === tmp7) {
        v0 = 0;
        if (!closure_129_0) {
          v2(true);
        }
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        if (!closure_129_0) {
          v0(closure_128_0);
        }
        v0 = 0;
      }
      v0 = 0;
      return value;
    };
    c0 = false;
    (function load() {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return () => {
      c0 = true;
    };
  }, items);
  let tmp6 = null != tmp2;
  if (!tmp6) {
    let tmp7 = tmp4;
    if (tmp4) {
      tmp7 = null == fallback;
    }
    tmp6 = tmp7;
  }
  closure_4 = tmp6;
  const items1 = [tmp6, onLoad];
  const effect1 = noop.useEffect(() => {
    if (closure_4) {
      if (onLoad != null) {
        tmp();
      }
    }
  }, items1);
  if (!tmp4) {
    let tmp9 = null;
    if (null != tmp2) {
      let obj2 = { ast: tmp2, override: null };
      const size = { width, height };
      obj2.override = size;
      tmp9 = jsx(url(8101).SvgAst, { ast: tmp2, override: null });
    }
    fallback = tmp9;
  }
  return fallback;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const promiseDeduper = new fn(5258).PromiseDeduper();
let closure_10 = 10 * DurationsDefault.Millis.SECOND;
let size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeArtImage.tsx");

export default function BadgeArtImage(style) {
  ({ url, height, width } = style);
  if (width === undefined) {
    width = height;
  }
  ({ fallbackUrl, animated } = style);
  if (animated === undefined) {
    animated = false;
  }
  ({ onLoad, onError, sharesSvgLoad } = style);
  if (sharesSvgLoad === undefined) {
    sharesSvgLoad = false;
  }
  const size = { width, height };
  const formatted = url.split(/[?#]/)[0].toLowerCase();
  if (formatted.endsWith(".svg")) {
    if (null == fallbackUrl) {
      if (sharesSvgLoad) {
        const size1 = { url, width, height, fallback: undefined, onLoad };
        let tmp15Result = (
          <SvgArt key={url} url={url} width={width} height={height} fallback={undefined} onLoad={onLoad} />
        );
      } else {
        const size2 = { uri: url, width, height, onLoad, onError: ignoreSvgError, fallback: undefined };
        tmp15Result = jsx(inlineStyles.SvgUri, {
          uri: url,
          width,
          height,
          onLoad,
          onError: ignoreSvgError,
          fallback: undefined,
        });
      }
    } else {
      if (!animated) {
        const obj = {
          source: null,
          style: null,
          resizeMode: "contain",
          enableAnimation: null,
          onLoadEnd: null,
          onError: null,
        };
        const obj2 = { uri: fallbackUrl };
        obj.source = obj2;
        obj.style = size;
        obj.enableAnimation = animated;
        obj.onLoadEnd = onLoad;
        obj.onError = onError;
        let tmp12 = jsx(FastImageDefault, {
          source: null,
          style: null,
          resizeMode: "contain",
          enableAnimation: null,
          onLoadEnd: null,
          onError: null,
        });
      } else {
        let APNGPlayer = require;
        PlatformUtils;
      }
      APNGPlayer = APNGPlayer(9588).APNGPlayer;
      const obj4 = { url: fallbackUrl, style: size, autoplay: true, onLoad };
      tmp12 = <APNGPlayer url={fallbackUrl} style={size} autoplay onLoad={onLoad} />;
    }
  } else {
    if (animated) {
      if (obj3.isAndroid()) {
        const obj5 = { url, style: size, autoplay: true, onLoad };
        let tmp6 = jsx(APNGPlayer2.APNGPlayer, { url, style: size, autoplay: true, onLoad });
        let tmp3 = jsx;
      }
      const obj6 = { style: null, "aria-hidden": true, children: null };
      items = [size, style.style];
      obj6.style = items;
      obj6.children = tmp6;
      return tmp3(View, obj6);
    }
    tmp3 = jsx;
    const obj7 = {
      source: null,
      style: null,
      resizeMode: "contain",
      enableAnimation: null,
      onLoadEnd: null,
      onError: null,
    };
    const obj9 = { uri: url };
    obj7.source = obj9;
    obj7.style = size;
    obj7.enableAnimation = animated;
    obj7.onLoadEnd = onLoad;
    obj7.onError = onError;
    tmp6 = jsx(FastImageDefault, {
      source: null,
      style: null,
      resizeMode: "contain",
      enableAnimation: null,
      onLoadEnd: null,
      onError: null,
    });
  }
  const str = url.split(/[?#]/)[0];
}
export const COMPLEX_BADGE_ASPECT_RATIO = 1.56;
