// === Module 11131: StreamPreview ===

// Module 11131 (StreamPreview)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import FastImageDefault from "FastImage" /* 6163 */;
import Pressables from "Pressables" /* 6191 */;
import _modDef11132 from "module_11132" /* 11132 */;
import _modDef11133 from "module_11133" /* 11133 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 11134 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1205 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let createStyles = fn(5091);
let obj2 = { wrapper: null, text: null, fallbackImage: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.paddingLeft = 20;
obj3.paddingRight = 20;
obj2.wrapper = obj3;
obj2.text = { textAlign: "center", fontSize: 14, lineHeight: 18, marginTop: 16, color: nativeDefault.colors.TEXT_MUTED };
obj2.fallbackImage = { width: "100%" };
let closure_7 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class DefaultFallback extends PureComponent {
}
DefaultFallback.prototype["render"] = function render() {
  const tmp = closure_7(this.context);
  const obj = { style: tmp.wrapper, children: null };
  const obj2 = { resizeMode: "contain", style: tmp.fallbackImage, source: null };
  const tmp6 = FastImageDefault;
  if (obj3.isThemeDark(this.props.theme)) {
    let tmp4Result = _modDef11132;
  } else {
    tmp4Result = _modDef11133;
  }
  obj2.source = tmp4Result;
  obj.children = hasOwnProperty(tmp6, obj2);
  return hasOwnProperty(React3, obj);
};
DefaultFallback.contextType = fn(4788).ThemeContext;
createStyles = fn(5091);
const obj6 = { touchable: null, imageContainer: null, image: null };
let size = { flex: 1, width: "100%", height: "k", aspectRatio: true, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj6.touchable = size;
let obj4 = { textAlign: "center", fontSize: 14, lineHeight: 18, marginTop: 16, color: nativeDefault.colors.TEXT_MUTED };
obj6.imageContainer = { flex: 1, backgroundColor: nativeDefault.unsafe_rawColors.BLACK };
obj6.image = { flex: 1 };
let closure_9 = createStyles.createLegacyClassComponentStyles(obj6);
const PureComponent2 = noop.PureComponent;
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
  const tmp = closure_9(this.context);
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
        const obj = { resizeMode: "contain", style: tmp.image, source: null, onLoadStart: null, onLoad: null, onError: null };
        const obj2 = { uri: url, cache: "force-cache" };
        obj.source = obj2;
        ({ handleLoadStart: obj.onLoadStart, handleLoad: obj.onLoad, handleError: obj.onError } = this);
        const tmp13 = hasOwnProperty(FastImageDefault, obj);
      }
      const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp2, activeOpacity: 0.6, style: null, disabled: null, onPress: null, children: null };
      const items = [tmp.touchable, tmp3];
      obj3.style = items;
      obj3.disabled = tmp6;
      obj3.onPress = tmp5;
      const obj4 = { style: tmp.imageContainer, children: null };
      const items1 = [tmp8, tmp13];
      obj4.children = items1;
      const items2 = [timestampProducer(React3, obj4), tmp4];
      obj3.children = items2;
      return timestampProducer(Pressables.PressableOpacity, obj3);
    }
  }
  let renderFallbackResult1;
  if (renderFallback != null) {
    renderFallbackResult1 = renderFallback(isFetching, theme);
  }
  tmp8 = renderFallbackResult1;
};
StreamPreview.contextType = fn(4788).ThemeContext;
StreamPreview.defaultProps = {
  renderFallback: function defaultRenderFallback(arg0, theme) {
    const obj = { theme, caption: null };
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (arg0) {
      let stringResult = string(t.NQ7H8V);
    } else {
      stringResult = string(t.uQZTBV);
    }
    obj.caption = stringResult;
    return hasOwnProperty(DefaultFallback, obj);
  }
};
const ReactCompilerGating = fn(558);
const obj7 = { flex: 1, backgroundColor: nativeDefault.unsafe_rawColors.BLACK };
size = fn(2);
const result = size.fileFinishedImporting("components_native/StreamPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedStreamPreview(stream) {
  const cResult = c.c(7);
  ({ guildId, channelId, ownerId } = stream.stream);
  ({ previewUrl, isLoading } = useFetchStreamPreviewDefault(guildId, channelId, ownerId));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function s() {
      return theme.theme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmp4 = useFetchStreamPreviewDefault(guildId, channelId, ownerId);
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === isLoading) {
    if (cResult[3] === stream) {
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === previewUrl) {
          let tmp9 = cResult[6];
        }
        return tmp9;
      }
    }
  }
  const obj2 = {};
  const merged = Object.assign(stream);
  obj2.url = previewUrl;
  obj2.isFetching = isLoading;
  obj2.theme = stateFromStores;
  const tmp11 = hasOwnProperty(StreamPreview, obj2);
  cResult[2] = isLoading;
  cResult[3] = stream;
  cResult[4] = stateFromStores;
  cResult[5] = previewUrl;
  cResult[6] = tmp11;
  tmp9 = tmp11;
  const tmpResult = initialize;
}) : (function ConnectedStreamPreview(stream) {
  ({ guildId, channelId, ownerId } = stream.stream);
  ({ previewUrl, isLoading } = useFetchStreamPreviewDefault(guildId, channelId, ownerId));
  const tmp = useFetchStreamPreviewDefault(guildId, channelId, ownerId);
  const items = [ThemeStore];
  const obj2 = {};
  const stateFromStores = initialize.useStateFromStores(items, () => theme.theme);
  const merged = Object.assign(stream);
  obj2.url = previewUrl;
  obj2.isFetching = isLoading;
  obj2.theme = stateFromStores;
  return hasOwnProperty(StreamPreview, obj2);
});