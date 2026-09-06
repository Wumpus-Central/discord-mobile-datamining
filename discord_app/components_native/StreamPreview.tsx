// === Module 10059: StreamPreview ===

// Module 10059 (StreamPreview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Pressables from "Pressables" /* 5123 */;
import _modDef10060 from "module_10060" /* 10060 */;
import _modDef10061 from "module_10061" /* 10061 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 10062 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { wrapper: null, text: null, fallbackImage: null };
createStyles = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.alignItems = "center";
createStyles.justifyContent = "center";
createStyles.paddingLeft = 20;
createStyles.paddingRight = 20;
createStyles.wrapper = createStyles;
createStyles.text = { textAlign: "center", fontSize: 14, lineHeight: 18, marginTop: 16, color: nativeDefault.colors.TEXT_MUTED };
createStyles.fallbackImage = { width: "100%" };
let closure_8 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class DefaultFallback extends PureComponent {
}
DefaultFallback.prototype["render"] = function render() {
  const tmp = closure_8(this.context);
  let obj = { style: tmp.wrapper, children: null };
  obj = { resizeMode: "contain", style: tmp.fallbackImage, source: null };
  if (obj3.isThemeDark(this.props.theme)) {
    let tmp6Result = _modDef10060;
  } else {
    tmp6Result = _modDef10061;
  }
  obj.source = tmp6Result;
  obj.children = timestampProducer(React3, obj);
  return timestampProducer(React4, obj);
};
DefaultFallback.contextType = fn(4271).ThemeContext;
createStyles = fn(4560);
const obj2 = { touchable: null, imageContainer: null, image: null };
let size = { flex: 1, width: "100%", height: "w", aspectRatio: true, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.touchable = size;
let obj1 = { textAlign: "center", fontSize: 14, lineHeight: 18, marginTop: 16, color: nativeDefault.colors.TEXT_MUTED };
obj2.imageContainer = { flex: 1, backgroundColor: nativeDefault.unsafe_rawColors.BLACK };
obj2.image = { flex: 1 };
let closure_10 = createStyles.createLegacyClassComponentStyles(obj2);
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
  const tmp = closure_10(this.context);
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
        let obj = { resizeMode: "contain", style: tmp.image, source: null, onLoadStart: null, onLoad: null, onError: null };
        obj = { uri: url, cache: "force-cache" };
        obj.source = obj;
        ({ handleLoadStart: obj.onLoadStart, handleLoad: obj.onLoad, handleError: obj.onError } = this);
        const tmp12 = timestampProducer(React3, obj);
      }
      obj = { accessibilityRole: "button", accessibilityLabel: tmp2, activeOpacity: 0.6, style: null, disabled: null, onPress: null, children: null };
      const items = [tmp.touchable, tmp3];
      obj.style = items;
      obj.disabled = tmp6;
      obj.onPress = tmp5;
      const obj1 = { style: tmp.imageContainer, children: null };
      const items1 = [tmp8, tmp12];
      obj1.children = items1;
      const items2 = [React5(React4, obj1), tmp4];
      obj.children = items2;
      return React5(Pressables.PressableOpacity, obj);
    }
  }
  let renderFallbackResult1;
  if (renderFallback != null) {
    renderFallbackResult1 = renderFallback(isFetching, theme);
  }
  tmp8 = renderFallbackResult1;
};
StreamPreview.contextType = fn(4271).ThemeContext;
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
    return timestampProducer(DefaultFallback, obj);
  }
};
size = fn(2);
const result = size.fileFinishedImporting("components_native/StreamPreview.tsx");

export default function ConnectedStreamPreview(stream) {
  ({ guildId, channelId, ownerId } = stream.stream);
  ({ previewUrl, isLoading } = useFetchStreamPreviewDefault(guildId, channelId, ownerId));
  const items = [ThemeStore];
  const obj = {};
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const merged = Object.assign(stream);
  obj.url = previewUrl;
  obj.isFetching = isLoading;
  obj.theme = stateFromStores;
  return timestampProducer(StreamPreview, obj);
};