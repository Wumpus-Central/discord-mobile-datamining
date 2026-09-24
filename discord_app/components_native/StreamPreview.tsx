// discord_app/components_native/StreamPreview.tsx
import initialize from "../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import util from "../intl/index.native.tsx";
import Pressables from "../design/void/Pressables/native/Pressables.tsx";
import _modDef10407 from "../../_runtime/metro/10407__.js";
import _modDef10408 from "../../_runtime/metro/10408__.js";
import useFetchStreamPreviewDefault from "../modules/go_live/useFetchStreamPreview.tsx";
import noop from "../../_runtime/metro/00019__.js";
import ThemeStore from "../modules/user_settings/ThemeStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4829);
let obj2 = { wrapper: null, text: null, fallbackImage: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.paddingLeft = 20;
obj3.paddingRight = 20;
obj2.wrapper = obj3;
obj2.text = {
  textAlign: "center",
  fontSize: 14,
  lineHeight: 18,
  marginTop: 16,
  color: nativeDefault.colors.TEXT_MUTED,
};
obj2.fallbackImage = { width: "100%" };
let closure_8 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class DefaultFallback extends PureComponent {}
DefaultFallback.prototype["render"] = function render() {
  const tmp = closure_8(this.context);
  const obj = { style: tmp.wrapper, children: null };
  const obj2 = { resizeMode: "contain", style: tmp.fallbackImage, source: null };
  if (obj3.isThemeDark(this.props.theme)) {
    let tmp6Result = _modDef10407;
  } else {
    tmp6Result = _modDef10408;
  }
  obj2.source = tmp6Result;
  obj.children = timestampProducer(React3, obj2);
  return timestampProducer(React4, obj);
};
DefaultFallback.contextType = fn(4535).ThemeContext;
createStyles = fn(4829);
const obj6 = { touchable: null, imageContainer: null, image: null };
let size = {
  flex: 1,
  width: "100%",
  height: "WireType",
  aspectRatio: true,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj6.touchable = size;
let obj4 = { textAlign: "center", fontSize: 14, lineHeight: 18, marginTop: 16, color: nativeDefault.colors.TEXT_MUTED };
obj6.imageContainer = { flex: 1, backgroundColor: nativeDefault.unsafe_rawColors.BLACK };
obj6.image = { flex: 1 };
let closure_10 = createStyles.createLegacyClassComponentStyles(obj6);
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
        const obj = {
          resizeMode: "contain",
          style: tmp.image,
          source: null,
          onLoadStart: null,
          onLoad: null,
          onError: null,
        };
        const obj2 = { uri: url, cache: "force-cache" };
        obj.source = obj2;
        ({ handleLoadStart: obj.onLoadStart, handleLoad: obj.onLoad, handleError: obj.onError } = this);
        const tmp12 = timestampProducer(React3, obj);
      }
      const obj3 = {
        accessibilityRole: "button",
        accessibilityLabel: tmp2,
        activeOpacity: 0.6,
        style: null,
        disabled: null,
        onPress: null,
        children: null,
      };
      const items = [tmp.touchable, tmp3];
      obj3.style = items;
      obj3.disabled = tmp6;
      obj3.onPress = tmp5;
      const obj4 = { style: tmp.imageContainer, children: null };
      const items1 = [tmp8, tmp12];
      obj4.children = items1;
      const items2 = [React5(React4, obj4), tmp4];
      obj3.children = items2;
      return React5(Pressables.PressableOpacity, obj3);
    }
  }
  let renderFallbackResult1;
  if (renderFallback != null) {
    renderFallbackResult1 = renderFallback(isFetching, theme);
  }
  tmp8 = renderFallbackResult1;
};
StreamPreview.contextType = fn(4535).ThemeContext;
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
  },
};
size = fn(2);
const result = size.fileFinishedImporting("components_native/StreamPreview.tsx");

export default function ConnectedStreamPreview(stream) {
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
  return timestampProducer(StreamPreview, obj2);
}
