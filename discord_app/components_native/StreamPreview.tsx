// === Module 10164: render ===

// Module 10164 (render)
import initialize from "initialize" /* 586 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import PressableBase from "PressableBase" /* 5076 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 10167 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "handleThemeChange" /* 1301 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
({ Image: c3, View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { wrapper: null, text: null, fallbackImage: null };
createCacheKey = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.alignItems = "center";
createCacheKey.justifyContent = "center";
createCacheKey.paddingLeft = 20;
createCacheKey.paddingRight = 20;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", fontSize: 14, lineHeight: 18, marginTop: 16, color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[2] = { width: "100%" };
let closure_8 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class DefaultFallback extends PureComponent {
}
DefaultFallback.prototype["render"] = function render() {
  const tmp = callback3(this.context);
  let obj = { style: tmp.wrapper, children: null };
  obj = { resizeMode: "contain", style: tmp.fallbackImage, source: null };
  if (obj3.isThemeDark(this.props.theme)) {
    let tmp6Result = tmp6(10165);
  } else {
    tmp6Result = tmp6(10166);
  }
  obj[2] = tmp6Result;
  obj[1] = closure_6(closure_3, obj);
  return closure_6(closure_4, obj);
};
DefaultFallback.contextType = require("ManaContext").ThemeContext;
const obj2 = { touchable: null, imageContainer: null, image: null };
const obj3 = { flex: 1, width: "100%", height: "w", aspectRatio: true, backgroundColor: true };
obj3[4] = ThemesDefault.colors.BACKGROUND_BASE_LOWEST;
obj2[0] = obj3;
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.unsafe_rawColors.BLACK };
obj2[1] = createCacheKey;
obj2[2] = { flex: 1 };
let closure_10 = createCacheKey.createLegacyClassComponentStyles(obj2);
const PureComponent2 = importAllResult.PureComponent;
class StreamPreview extends PureComponent2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { isImageLoaded: false, isImageErrored: false };
    applyArgumentsResult.handleLoadStart = function handleLoadStart() {
      applyArgumentsResult.setState({ isImageLoaded: false, isImageErrored: false });
    };
    applyArgumentsResult.handleLoad = function handleLoad() {
      applyArgumentsResult.setState({ isImageLoaded: true });
    };
    applyArgumentsResult.handleError = function handleError() {
      applyArgumentsResult.setState({ isImageErrored: true });
    };
    return applyArgumentsResult;
  }
}
StreamPreview.prototype["render"] = function render() {
  const tmp = callback4(this.context);
  ({ url, isFetching, renderFallback, theme } = this.props);
  if (null != url) {
    if (!isFetching) {
      if (!this.state.isImageErrored) {
        if (!tmp7) {
          let renderFallbackResult;
          if (renderFallback != null) {
            renderFallbackResult = renderFallback(true, theme);
          }
          let tmp8 = renderFallbackResult;
        }
        let obj = { resizeMode: "contain", style: null, source: null, onLoadStart: null, onLoad: null, onError: null };
        obj[1] = tmp.image;
        obj = { uri: null, cache: "force-cache" };
        obj[0] = url;
        obj[2] = obj;
        ({ handleLoadStart: obj[3], handleLoad: obj[4], handleError: obj[5] } = this);
        const tmp12 = callback(closure_3, obj);
      }
      obj = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.6, style: null, disabled: null, onPress: null, children: null };
      obj[1] = tmp2;
      const items = [tmp.touchable, tmp3];
      obj[3] = items;
      obj[4] = tmp6;
      obj[5] = tmp5;
      obj1 = { style: null, children: null };
      obj1[0] = tmp.imageContainer;
      const items1 = [tmp8, tmp12];
      obj1[1] = items1;
      const items2 = [callback2(closure_4, obj1), tmp4];
      obj[6] = items2;
      return callback2(PressableBase.PressableOpacity, obj);
    }
  }
  let renderFallbackResult1;
  if (renderFallback != null) {
    renderFallbackResult1 = renderFallback(isFetching, theme);
  }
  tmp8 = renderFallbackResult1;
};
StreamPreview.contextType = require("ManaContext").ThemeContext;
StreamPreview.defaultProps = {
  renderFallback: function defaultRenderFallback(arg0, theme) {
    const obj = { theme, caption: null };
    const intl = getSystemLocale.intl;
    const string = intl.string;
    const t = getSystemLocale.t;
    if (arg0) {
      let stringResult = string(t.NQ7H8V);
    } else {
      stringResult = string(t.uQZTBV);
    }
    obj[1] = stringResult;
    return closure_6(DefaultFallback, obj);
  }
};
let obj1 = { textAlign: "center", fontSize: 14, lineHeight: 18, marginTop: 16, color: ThemesDefault.colors.TEXT_MUTED };
const result = require("set").fileFinishedImporting("components_native/StreamPreview.tsx");

export default function ConnectedStreamPreview(stream) {
  ({ guildId, channelId, ownerId } = stream.stream);
  ({ previewUrl, isLoading } = useFetchStreamPreviewDefault(guildId, channelId, ownerId));
  let obj = initialize;
  const items = [closure_5];
  obj = {};
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const merged = Object.assign(stream);
  obj.url = previewUrl;
  obj.isFetching = isLoading;
  obj.theme = stateFromStores;
  return callback(StreamPreview, obj);
};