// discord_app/components_native/ChangeLogModal.tsx
import expandEventPropertiesDefault from "../utils/AnalyticsUtils.tsx";
import ThemesDefault from "../../discord_common/js/packages/tokens/native.tsx";
import _modDef4723 from "../actions/ModalActionCreators.tsx";
import NavigationStack from "../design/components/Navigator/native/Navigator.native.tsx";
import LHeadingDefault from "ChangeLogStandardTemplate.tsx";
import VideoComponentDefault from "common/Video.tsx";
import _modDef15371 from "../../_runtime/metro/15371__.js";
import importAllResult from "../../_runtime/00019_noop.js";
import { View } from "../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../Constants.tsx";
import { CHANGELOG_MODAL_KEY } from "../modules/changelog/ChangelogConstants.tsx";
import jsxProd from "../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../design/components/Styles/native/createStyles.tsx";

require = arg1;
class ChangeLogScreen {
  constructor(arg0) {
    fn = global.onClose;
    changelog = undefined;
    loaded = undefined;
    closure_2 = undefined;
    tmp = changelog;
    tmp2 = closure_2;
    obj = require("createCacheKey");
    legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_10);
    obj2 = require("useChangelog");
    currentChangelog = obj2.useCurrentChangelog();
    changelog = currentChangelog.changelog;
    loaded = currentChangelog.loaded;
    size = require("useWindowDimensions")();
    diff = size.width - 36;
    result = diff * c9;
    result1 = 0.5 * size.height;
    tmp6 = c9;
    bound = Math.min(result, result1);
    if (result1 < result) {
      diff = result1 / tmp6;
    }
    tmpResult = require("createStandardNavigationFactories");
    navigation = tmpResult.useNavigation();
    closure_2 = navigation;
    if (null == fn) {
      fn = function o() {
        return navigation.goBack();
      };
    }
    items = [,];
    items[0] = changelog;
    items[1] = navigation;
    effect = closure_3.useEffect(() => {
      if (null != changelog) {
        let obj = { headerTitle: null };
        obj[0] = function headerTitle() {
          let obj = { title: null, subtitle: null };
          const intl = closure_1_0(closure_1_2[13]).intl;
          obj[0] = intl.string(closure_1_0(closure_1_2[13]).t.LRmNAl);
          const intl2 = closure_1_0(closure_1_2[13]).intl;
          if (null != date.date) {
            if ("" !== tmp4.date) {
              let toDateResult = closure_1_1(closure_1_2[23])(tmp4.date).toDate();
              const obj2 = closure_1_1(closure_1_2[23])(tmp4.date);
            }
            obj = { date: null };
            obj[0] = toDateResult;
            obj[1] = intl2.formatToPlainString(tmp3, obj);
            return closure_1_7(closure_1_0(closure_1_2[22]).NavigatorHeader, obj);
          }
          toDateResult = new Date();
        };
        navigation.setOptions(obj);
      }
    }, items);
    items1 = [,];
    items1[0] = loaded;
    items1[1] = changelog;
    effect1 = closure_3.useEffect(() => {
      if (loaded) {
        if (null != changelog) {
          return () => closure_1_1(closure_1_2[24]).markChangelogAsSeen(closure_0.id, closure_0.date);
        }
      }
    }, items1);
    if (currentChangelog.clientTooOld) {
      tmp20 = jsx;
      tmp21 = View;
      obj = { style: null, children: null };
      obj[0] = legacyClassComponentStyles.empty;
      obj1 = { variant: "heading-lg/medium", children: null };
      intl2 = require("getSystemLocale").intl;
      obj1[1] = intl2.string(require("getSystemLocale").t.V9ospk);
      obj[1] = jsx(require("Text").Text, obj1);
      tmp15 = jsx(View, obj);
    } else if (null == changelog) {
      tmp16 = jsx;
      obj2 = { style: null, children: null };
      obj2[0] = legacyClassComponentStyles.empty;
      tmp17 = View;
      Text = require("Text").Text;
      obj3 = { variant: "text-md/semibold", children: null };
      intl = require("getSystemLocale").intl;
      string = intl.string;
      t = require("getSystemLocale").t;
      if (loaded) {
        t = string(t.O1iRT8);
        obj3[1] = t;
        obj3 = tmp16(Text, obj3);
        obj2[1] = obj3;
        tmp18 = obj2;
      } else {
        obj3[1] = string(t.ZTNur7);
        obj2[1] = tmp16(Text, obj3);
        tmp18 = obj2;
      }
      tmp16Result = tmp16(tmp17, tmp18);
    } else {
      tmp13 = jsx;
      tmp14 = ChangeLog;
      obj4 = { onClose: null, height: null, width: null, changeLog: null };
      obj4[0] = fn;
      obj4[1] = bound;
      obj4[2] = diff;
      obj4[3] = changelog;
      tmp15 = jsx(ChangeLog, obj4);
    }
    return tmp15;
  }
}
function hideChangeLog() {
  _modDef4723.popWithKey(CHANGELOG_MODAL_KEY);
}
let c3 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let c9 = 0.5625;
createCacheKey = {
  video: { alignSelf: "center" },
  videoWrapper: { marginBottom: 8 },
  videoSpecial: null,
  videoOverlay: null,
  playButton: null,
  playIcon: null,
  empty: null,
};
createCacheKey = { borderRadius: ThemesDefault.radii.xs, overflow: "hidden" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { position: "absolute", width: "100%", height: "100%" };
createCacheKey[4] = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginLeft: -28,
  marginTop: -28,
  borderRadius: ThemesDefault.radii.round,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  width: 56,
  height: 56,
};
createCacheKey[5] = { width: 21, height: 21 };
createCacheKey[6] = { width: "100%", height: 240, alignItems: "center", paddingTop: 48 };
let closure_10 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
let obj2 = { bulletPoint: null, listItem: null, listText: null, listItemContent: null };
let obj1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  marginLeft: -28,
  marginTop: -28,
  borderRadius: ThemesDefault.radii.round,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  width: 56,
  height: 56,
};
obj2[0] = {
  width: 7,
  height: 7,
  borderRadius: 3.5,
  marginRight: 13,
  marginTop: 7,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG,
};
obj2[1] = { flexDirection: "row", marginLeft: 4, marginBottom: 8 };
createCacheKey = { color: ThemesDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
obj2[2] = createCacheKey;
obj2[3] = { flexDirection: "column", flex: 1 };
let closure_11 = createCacheKey.createLegacyClassComponentStyles(obj2);
const PureComponent = importAllResult.PureComponent;
class ListItem extends PureComponent {}
ListItem.prototype["render"] = function render() {
  const children = this.props.children;
  const tmp = callback3(this.context);
  let obj = { style: tmp.listItem, children: null };
  obj = { style: tmp.bulletPoint };
  const items = [callback(View, obj)];
  obj = { style: tmp.listText, children: null };
  let childrenResult = children;
  if (typeof children === "function") {
    obj1 = { style: null };
    obj1[0] = tmp.listText;
    childrenResult = children(obj1);
  }
  obj[1] = childrenResult;
  items[1] = callback(View, obj);
  obj[1] = items;
  return closure_8(View, obj);
};
ListItem.contextType = require("ManaContext").ThemeContext;
const PureComponent2 = importAllResult.PureComponent;
class ChangeLog extends PureComponent2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.mountedAt = 0;
    applyArgumentsResult.ref = closure_3.createRef();
    applyArgumentsResult.maxScrolledPercentage = 0;
    applyArgumentsResult.state = { ytVideoReady: false };
    applyArgumentsResult.handleScroll = function handleScroll(contentOffset) {
      applyArgumentsResult.maxScrolledPercentage = Math.min(
        Math.max(
          applyArgumentsResult.maxScrolledPercentage,
          (contentOffset.contentOffset.y + contentOffset.layoutMeasurement.height) / contentOffset.contentSize.height,
        ),
        1,
      );
    };
    applyArgumentsResult.playVideo = function playVideo() {
      let obj = applyArgumentsResult;
      const props = applyArgumentsResult.props;
      ({ video, image } = props.changeLog);
      ({ width, height } = props);
      if (null == video) {
        if (null == image) {
          return null;
        }
      }
      if (null != video) {
        obj = { videoURI: null };
        obj[0] = video;
      } else {
        obj = { uri: null };
        obj[0] = image;
      }
      obj.track(closure_1_5.CHANGE_LOG_VIDEO_INTERACTED);
      const current = obj.ref.current;
      if (null != current) {
        obj1 = {
          initialSources: null,
          disableDownload: true,
          shareable: false,
          analyticsSource: "Change Log",
          originViewOrOriginLayout: null,
        };
        const obj2 = {};
        const merged = Object.assign(obj);
        obj2.width = width;
        obj2.height = height;
        const items = [obj2];
        obj1[0] = items;
        obj1[4] = current;
        applyArgumentsResult(closure_1_2[9]).openMediaModal(obj1);
        const obj4 = applyArgumentsResult(closure_1_2[9]);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = ChangeLog.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this.mountedAt = Date.now();
  this.track(AnalyticEvents.CHANGE_LOG_OPENED);
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  this.track(AnalyticEvents.CHANGE_LOG_CLOSED);
};
prototype["track"] = function track(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const self = this;
  const changeLog = this.props.changeLog;
  if (null != changeLog) {
    obj = { change_log_id: null };
    const _HermesInternal = HermesInternal;
    obj[0] = "" + changeLog.date + ":" + changeLog.revision;
    const merged = Object.assign(obj);
    let tmp10 = obj;
    if (arg0 === AnalyticEvents.CHANGE_LOG_CLOSED) {
      obj = { seconds_open: null, max_scrolled_percentage: null };
      const _Math = Math;
      const _Date = Date;
      obj[0] = Math.round((Date.now() - self.mountedAt) / 1000);
      const _parseInt = parseInt;
      const maxScrolledPercentage = self.maxScrolledPercentage;
      obj[1] = 100 * parseInt(maxScrolledPercentage.toPrecision(4), 10);
      const merged1 = Object.assign(obj);
      tmp10 = obj;
    }
    expandEventPropertiesDefault.track(arg0, tmp10);
    const obj2 = expandEventPropertiesDefault;
  }
};
prototype["renderVideo"] = function renderVideo() {
  let self = this;
  self = this;
  const tmp = callback2(this.context);
  const props = this.props;
  ({ changeLog, height, onClose } = props);
  ({ video, image, youtube_video_id } = changeLog);
  if (null != video) {
    let obj = { videoURI: null };
    obj[0] = video;
  } else if (null == image) {
    let tmp4Result = null;
    if (null != youtube_video_id) {
      obj = { style: null, onAccessibilityEscape: null, children: null };
      obj[0] = tmp.videoWrapper;
      obj[1] = onClose;
      obj1 = { height: null, play: false, videoId: null, onReady: null, useLocalHTML: true };
      obj1[0] = height;
      obj1[2] = youtube_video_id;
      obj1[3] = function onReady() {
        return self.setState({ ytVideoReady: true });
      };
      const items = [callback(_modDef15371, obj1)];
      let tmp6Result = null;
      if (!tmp2) {
        const obj2 = { style: null, source: null };
        obj2[0] = tmp.videoOverlay;
        const obj3 = { uri: null };
        const _HermesInternal = HermesInternal;
        obj3[0] = "https://i.ytimg.com/vi/" + youtube_video_id + "/hqdefault.jpg";
        obj2[1] = obj3;
        tmp6Result = tmp6(tmp7(5501), obj2);
        const tmp7Result = tmp7(5501);
      }
      items[1] = tmp6Result;
      obj[2] = items;
      tmp4Result = closure_8(View, obj);
      const tmp4 = closure_8;
      const tmp5 = View;
      tmp6 = callback;
      tmp7 = importDefault;
    }
    return tmp4Result;
  } else {
    obj = { uri: null };
    obj[0] = image;
  }
  const obj4 = { style: tmp.videoWrapper, onAccessibilityEscape: onClose, children: null };
  const obj5 = { ref: self.ref, style: tmp.videoSpecial, children: null };
  const obj6 = {
    style: tmp.video,
    src: obj,
    width: props.width,
    height,
    paused: true,
    canOpenFullscreen: true,
    unmutedOnFullScreen: true,
    accessibilityLabel: null,
    onPress: null,
  };
  const intl = self(1233).intl;
  obj6[7] = intl.string(self(1233).t.zHeo07);
  obj6[8] = function onPress() {
    self.track(closure_1_5.CHANGE_LOG_VIDEO_INTERACTED);
  };
  const items1 = [callback(VideoComponentDefault, obj6)];
  let tmp12Result = null;
  if (null != video) {
    const obj7 = {
      accessibilityLabel: "Play Video",
      accessibilityRole: "button",
      style: null,
      onPress: null,
      children: null,
    };
    obj7[2] = tmp.videoOverlay;
    obj7[3] = self.playVideo;
    const obj8 = {
      accessibilityLabel: "Play Video",
      accessibilityRole: "button",
      source: null,
      onPress: null,
      style: null,
      iconSize: null,
      iconStyle: null,
    };
    obj8[2] = tmp15(10411);
    obj8[3] = self.playVideo;
    obj8[4] = tmp.playButton;
    obj8[5] = tmp18(1296).IconSizes.CUSTOM;
    obj8[6] = tmp.playIcon;
    obj7[4] = tmp12(tmp15(9081), obj8);
    tmp12Result = tmp12(tmp18(5076).PressableOpacity, obj7);
    const tmp15Result = tmp15(9081);
  }
  items1[1] = tmp12Result;
  obj5[2] = items1;
  obj4[2] = closure_8(View, obj5);
  return callback(View, obj4);
};
prototype["render"] = function render() {
  const obj = {};
  const merged = Object.assign(this.props);
  obj.video = this.renderVideo();
  obj.onScroll = this.handleScroll;
  return callback(LHeadingDefault, obj);
};
ChangeLog.contextType = require("ManaContext").ThemeContext;
let obj3 = {
  width: 7,
  height: 7,
  borderRadius: 3.5,
  marginRight: 13,
  marginTop: 7,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG,
};
let result = require("set").fileFinishedImporting("components_native/ChangeLogModal.tsx");

export default function ChangelogModal() {
  const screens = importAllResult.useMemo(() => {
    let obj = { CHANGELOG: null };
    obj = {
      name: "CHANGELOG",
      headerLeft: callback(table[22]).getHeaderCloseButton(closure_14),
      render() {
        return callback(closure_13, { onClose: closure_14 });
      },
    };
    obj[0] = obj;
    return obj;
  }, []);
  return callback(NavigationStack.Navigator, { screens, initialRouteName: "CHANGELOG" });
}
export { ListItem };
export { ChangeLogScreen };
