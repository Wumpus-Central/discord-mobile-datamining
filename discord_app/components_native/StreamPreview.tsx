// discord_app/components_native/StreamPreview.tsx
import get_initialized from "../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../_runtime/00576_react.js";
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../intl/index.native.tsx";
import native from "../../discord_common/js/packages/design/native.tsx";
import shared from "../design/shared.tsx";
import Pressables from "../design/void/Pressables/native/Pressables.tsx";
import AssetRegistryDefault from "../../_runtime/09757_AssetRegistry.js";
import AssetRegistryDefault2 from "../../_runtime/09758_AssetRegistry.js";
import useFetchStreamPreviewDefault from "../modules/go_live/useFetchStreamPreview.tsx";
import react from "../../_runtime/00019_react.js";
import react_native from "../../_runtime/00017_react-native.js";
import ThemeStore from "../modules/user_settings/ThemeStore.tsx";
import Fragment from "../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../_runtime/metro/00002__.js";

let StyleSheet;
let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
({ Image: c3, View: closure_4, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, text: obj3, fallbackImage: { width: "100%" } };
obj2 = { alignItems: "center", justifyContent: "center", paddingLeft: 20, paddingRight: 20 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { textAlign: "center", fontSize: 14, lineHeight: 18, marginTop: 16, color: nativeDefault.colors.TEXT_MUTED };
const metroImportAll = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class DefaultFallback extends PureComponent {
  render() {
    let obj2;
    let tmp6Result;
    const tmp = closure_8(this.context);
    const obj = { style: tmp.wrapper, children: metroRequire(_false, obj2) };
    const theme = this.props.theme;
    obj2 = { resizeMode: "contain", style: tmp.fallbackImage, source: tmp6Result };
    const obj3 = shared;
    if (obj3.isThemeDark(theme)) {
      tmp6Result = AssetRegistryDefault;
    } else {
      tmp6Result = AssetRegistryDefault2;
    }
    return metroRequire(React3, obj);
  }
}
const prototype = DefaultFallback.prototype;
DefaultFallback.contextType = native.ThemeContext;
createStyles = createStyles_mod;
let obj4 = {
  touchable: size,
  imageContainer: { flex: 1, backgroundColor: nativeDefault.unsafe_rawColors.BLACK },
  image: { flex: 1 },
};
size = {
  flex: 1,
  width: "100%",
  height: "__initData",
  aspectRatio: true,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
const createLegacyClassComponentStyles2 = createStyles.createLegacyClassComponentStyles;
({ flex: 1, backgroundColor: nativeDefault.unsafe_rawColors.BLACK });
const authStore = createLegacyClassComponentStyles2(obj4);
const PureComponent2 = react.PureComponent;
class StreamPreview extends PureComponent2 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
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
  render() {
    let isFetching;
    let items;
    let items1;
    let items2;
    let obj2;
    let renderFallback;
    let theme;
    let url;
    const tmp = closure_10(this.context);
    ({ url, isFetching, renderFallback, theme } = this.props);
    const state = this.state;
    if (null != url) {
      if (!isFetching) {
        let tmp8;
        let tmp12;
        if (!state.isImageErrored) {
          if (!tmp7) {
            let renderFallbackResult;
            if (renderFallback != null) {
              renderFallbackResult = renderFallback(true, theme);
            }
            tmp8 = renderFallbackResult;
          }
          const obj = {
            resizeMode: "contain",
            style: tmp.image,
            source: obj2,
            onLoadStart: null,
            onLoad: null,
            onError: null,
          };
          obj2 = { uri: url, cache: "force-cache" };
          ({ handleLoadStart: obj.onLoadStart, handleLoad: obj.onLoad, handleError: obj.onError } = this);
          tmp12 = metroRequire(_false, obj);
        }
        const obj3 = {
          accessibilityRole: "button",
          accessibilityLabel: tmp2,
          activeOpacity: 0.6,
          style: items,
          disabled: tmp6,
          onPress: tmp5,
          children: items2,
        };
        items = [tmp.touchable, tmp3];
        const obj4 = { style: tmp.imageContainer, children: items1 };
        items1 = [tmp8, tmp12];
        const PressableOpacity = Pressables.PressableOpacity;
        items2 = [metroImportDefault(React3, obj4), tmp4];
        return metroImportDefault(PressableOpacity, obj3);
      }
    }
    let renderFallbackResult1;
    if (renderFallback != null) {
      renderFallbackResult1 = renderFallback(isFetching, theme);
    }
    tmp8 = renderFallbackResult1;
  }
}
const prototype2 = StreamPreview.prototype;
StreamPreview.contextType = native.ThemeContext;
StreamPreview.defaultProps = {
  renderFallback: function defaultRenderFallback(arg0, theme) {
    let stringResult;
    const obj = { theme, caption: stringResult };
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    const tmp3 = arg0;
    if (tmp3) {
      stringResult = string(t.NQ7H8V);
    } else {
      stringResult = string(t.uQZTBV);
    }
    return metroRequire(DefaultFallback, obj);
  },
};
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (stream) => {
      let channelId;
      let guildId;
      let isLoading;
      let ownerId;
      let previewUrl;
      let theme;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(7);
      ({ guildId, channelId, ownerId } = stream.stream);
      ({ previewUrl, isLoading } = useFetchStreamPreviewDefault(guildId, channelId, ownerId));
      useFetchStreamPreviewDefault(guildId, channelId, ownerId);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === isLoading) {
        if (cResult[3] === stream) {
          if (cResult[4] === stateFromStores) {
            let tmp9;
            if (cResult[5] === previewUrl) {
              tmp9 = cResult[6];
            }
            return tmp9;
          }
        }
      }
      const obj2 = { url: previewUrl, isFetching: isLoading, theme: stateFromStores };
      const merged = Object.assign(stream);
      const tmp11 = metroRequire(StreamPreview, obj2);
      cResult[2] = isLoading;
      cResult[3] = stream;
      cResult[4] = stateFromStores;
      cResult[5] = previewUrl;
      cResult[6] = tmp11;
      tmp9 = tmp11;
    }
  : (stream) => {
      let channelId;
      let guildId;
      let isLoading;
      let ownerId;
      let previewUrl;
      let stateFromStores;
      let theme;
      ({ guildId, channelId, ownerId } = stream.stream);
      ({ previewUrl, isLoading } = useFetchStreamPreviewDefault(guildId, channelId, ownerId));
      useFetchStreamPreviewDefault(guildId, channelId, ownerId);
      const items = [ThemeStore];
      const obj2 = { url: previewUrl, isFetching: isLoading, theme: stateFromStores };
      const obj = get_initialized;
      stateFromStores = obj.useStateFromStores(items, () => theme.theme);
      const merged = Object.assign(stream);
      return metroRequire(StreamPreview, obj2);
    };
size = size_mod;
const result = size.fileFinishedImporting("components_native/StreamPreview.tsx");

export default tmp8;
