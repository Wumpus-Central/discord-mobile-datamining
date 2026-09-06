// === Module 15542: ChangeLogModal ===

// Module 15542 (ChangeLogModal)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import Navigator from "Navigator" /* 7000 */;
import ChangeLogStandardTemplateDefault from "ChangeLogStandardTemplate" /* 8090 */;
import openMediaModal from "openMediaModal" /* 8261 */;
import common_VideoDefault from "common/Video" /* 8307 */;
import _modDef15543 from "module_15543" /* 15543 */;
import noop from "module_19" /* 19 */;

require = fn;
class ChangeLogScreen {
  constructor(arg0) {
    fn = global.onClose;
    changelog = undefined;
    loaded = undefined;
    closure_2 = undefined;
    tmp = changelog;
    tmp2 = closure_2;
    obj = changelog(closure_2[5]);
    legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_10);
    obj2 = changelog(closure_2[20]);
    currentChangelog = obj2.useCurrentChangelog();
    changelog = currentChangelog.changelog;
    loaded = currentChangelog.loaded;
    size = loaded(closure_2[19])();
    diff = size.width - 36;
    result = diff * c9;
    result1 = 0.5 * size.height;
    tmp6 = c9;
    bound = Math.min(result, result1);
    if (result1 < result) {
      diff = result1 / tmp6;
    }
    tmpResult = tmp(tmp2[21]);
    navigation = tmpResult.useNavigation();
    closure_2 = navigation;
    if (null == fn) {
      fn = function o() {
        return navigation.goBack();
      };
    }
    items = [, ];
    items[0] = changelog;
    items[1] = navigation;
    effect = closure_3.useEffect(() => {
      if (null != changelog) {
        let obj = {
          headerTitle() {
              let obj = { title: null, subtitle: null };
              const intl = changelog(navigation[13]).intl;
              obj.title = intl.string(changelog(navigation[13]).t.LRmNAl);
              const intl2 = changelog(navigation[13]).intl;
              if (null != date.date) {
                if ("" !== tmp4.date) {
                  let toDateResult = loaded(navigation[23])(tmp4.date).toDate();
                  const obj2 = loaded(navigation[23])(tmp4.date);
                }
                obj = { date: toDateResult };
                obj.subtitle = intl2.formatToPlainString(tmp3, obj);
                return closure_2_7(changelog(navigation[22]).NavigatorHeader, obj);
              }
              toDateResult = new Date();
            }
        };
        navigation.setOptions(obj);
      }
    }, items);
    items1 = [, ];
    items1[0] = loaded;
    items1[1] = changelog;
    effect1 = closure_3.useEffect(() => {
      if (loaded) {
        if (null != changelog) {
          return () => loaded(navigation[24]).markChangelogAsSeen(changelog.id, changelog.date);
        }
      }
    }, items1);
    if (currentChangelog.clientTooOld) {
      tmp20 = jsx;
      tmp21 = View;
      obj = { style: null, children: null };
      obj.style = legacyClassComponentStyles.empty;
      obj1 = { variant: "heading-lg/medium", children: null };
      intl2 = tmp(tmp2[13]).intl;
      obj1.children = intl2.string(tmp(tmp2[13]).t.V9ospk);
      obj.children = jsx(tmp(tmp2[25]).Text, obj1);
      tmp15 = jsx(View, obj);
    } else if (null == changelog) {
      tmp16 = jsx;
      obj2 = { style: null, children: null };
      obj2.style = legacyClassComponentStyles.empty;
      tmp17 = View;
      Text = tmp(tmp2[25]).Text;
      obj3 = { variant: "text-md/semibold", children: null };
      intl = tmp(tmp2[13]).intl;
      string = intl.string;
      t = tmp(tmp2[13]).t;
      if (loaded) {
        t = string(t.O1iRT8);
        obj3.children = t;
        obj3 = tmp16(Text, obj3);
        obj2.children = obj3;
        tmp18 = obj2;
      } else {
        obj3[1] = string(t.ZTNur7);
        obj2.children = tmp16(Text, obj3);
        tmp18 = obj2;
      }
      tmp16Result = tmp16(tmp17, tmp18);
    } else {
      tmp13 = jsx;
      tmp14 = ChangeLog;
      size = { onClose: null, height: null, width: null, changeLog: null };
      size.onClose = fn;
      size.height = bound;
      size.width = diff;
      size.changeLog = changelog;
      tmp15 = jsx(ChangeLog, size);
    }
    return tmp15;
  }
}
function hideChangeLog() {
  ModalActionCreatorsDefault.popWithKey(CHANGELOG_MODAL_KEY);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const CHANGELOG_MODAL_KEY = fn(2010).CHANGELOG_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 0.5625;
fn(4560);
let createStyles = { video: { alignSelf: "center" }, videoWrapper: { marginBottom: 8 }, videoSpecial: null, videoOverlay: null, playButton: null, playIcon: null, empty: null };
createStyles = { borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles.videoSpecial = createStyles;
createStyles.videoOverlay = { position: "absolute", width: "100%", height: "100%" };
let size = { position: "absolute", top: "50%", left: "50%", marginLeft: -28, marginTop: -28, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: 56, height: 56 };
createStyles.playButton = size;
createStyles.playIcon = { width: 21, height: 21 };
createStyles.empty = { width: "100%", height: 240, alignItems: "center", paddingTop: 48 };
let closure_10 = createStyles.createLegacyClassComponentStyles(createStyles);
createStyles = fn(4560);
let obj1 = { bulletPoint: null, listItem: null, listText: null, listItemContent: null };
const size1 = { width: 7, height: 7, borderRadius: 3.5, marginRight: 13, marginTop: 7, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj1.bulletPoint = size1;
obj1.listItem = { flexDirection: "row", marginLeft: 4, marginBottom: 8 };
obj1.listText = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
obj1.listItemContent = { flexDirection: "column", flex: 1 };
let closure_11 = createStyles.createLegacyClassComponentStyles(obj1);
const PureComponent = noop.PureComponent;
class ListItem extends PureComponent {
}
ListItem.prototype["render"] = function render() {
  const children = this.props.children;
  const tmp = closure_11(this.context);
  let obj = { style: tmp.listItem, children: null };
  obj = { style: tmp.bulletPoint };
  const items = [React5(View, obj), ];
  obj = { style: tmp.listText, children: null };
  let childrenResult = children;
  if (typeof children === "function") {
    const obj1 = { style: tmp.listText };
    childrenResult = children(obj1);
  }
  obj.children = childrenResult;
  items[1] = React5(View, obj);
  obj.children = items;
  return React6(View, obj);
};
ListItem.contextType = fn(4271).ThemeContext;
const PureComponent2 = noop.PureComponent;
class ChangeLog extends PureComponent2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.mountedAt = 0;
    applyArgumentsResult.ref = closure_3.createRef();
    applyArgumentsResult.maxScrolledPercentage = 0;
    applyArgumentsResult.state = { ytVideoReady: false };
    applyArgumentsResult.handleScroll = function handleScroll(contentOffset) {
      applyArgumentsResult.maxScrolledPercentage = Math.min(Math.max(applyArgumentsResult.maxScrolledPercentage, (contentOffset.contentOffset.y + contentOffset.layoutMeasurement.height) / contentOffset.contentSize.height), 1);
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
        obj = { videoURI: video };
      } else {
        obj = { uri: image };
      }
      obj.track(AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED);
      const current = obj.ref.current;
      if (null != current) {
        const obj1 = { initialSources: null, disableDownload: true, shareable: false, analyticsSource: "Change Log", originViewOrOriginLayout: null };
        const obj2 = {};
        const merged = Object.assign(obj);
        obj2.width = width;
        obj2.height = height;
        const items = [obj2];
        obj1.initialSources = items;
        obj1.originViewOrOriginLayout = current;
        openMediaModal.openMediaModal(obj1);
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
    obj.change_log_id = "" + changeLog.date + ":" + changeLog.revision;
    const merged = Object.assign(obj);
    let tmp10 = obj;
    if (arg0 === AnalyticEvents.CHANGE_LOG_CLOSED) {
      obj = { seconds_open: null, max_scrolled_percentage: null };
      const _Math = Math;
      const _Date = Date;
      obj.seconds_open = Math.round((Date.now() - self.mountedAt) / 1000);
      const _parseInt = parseInt;
      const maxScrolledPercentage = self.maxScrolledPercentage;
      obj.max_scrolled_percentage = 100 * parseInt(maxScrolledPercentage.toPrecision(4), 10);
      const merged1 = Object.assign(obj);
      tmp10 = obj;
    }
    AnalyticsUtilsDefault.track(arg0, tmp10);
  }
};
prototype["renderVideo"] = function renderVideo() {
  const self = this;
  const tmp = closure_10(this.context);
  const props = this.props;
  ({ changeLog, height, onClose } = props);
  ({ video, image, youtube_video_id } = changeLog);
  if (null != video) {
    let obj = { videoURI: video };
  } else if (null == image) {
    let tmp4Result = null;
    if (null != youtube_video_id) {
      obj = { style: tmp.videoWrapper, onAccessibilityEscape: onClose, children: null };
      const obj1 = {
        height,
        play: false,
        videoId: youtube_video_id,
        onReady() {
              return self.setState({ ytVideoReady: true });
            },
        useLocalHTML: true
      };
      const items = [closure_7(_modDef15543, obj1), ];
      let tmp6Result = null;
      if (!tmp2) {
        const obj2 = { style: tmp.videoOverlay, source: null };
        const obj3 = { uri: null };
        const _HermesInternal = HermesInternal;
        obj3.uri = "https://i.ytimg.com/vi/" + youtube_video_id + "/hqdefault.jpg";
        obj2.source = obj3;
        tmp6Result = tmp6(tmp7(5587), obj2);
        const tmp7Result = tmp7(5587);
      }
      items[1] = tmp6Result;
      obj.children = items;
      tmp4Result = closure_8(View, obj);
      tmp6 = closure_7;
      tmp7 = importDefault;
    }
    return tmp4Result;
  } else {
    obj = { uri: image };
  }
  const obj4 = { style: tmp.videoWrapper, onAccessibilityEscape: onClose, children: null };
  const obj5 = { ref: self.ref, style: tmp.videoSpecial, children: null };
  const size = { style: tmp.video, src: obj, width: props.width, height, paused: true, canOpenFullscreen: true, unmutedOnFullScreen: true, accessibilityLabel: null, onPress: null };
  const intl = self(1114).intl;
  size.accessibilityLabel = intl.string(self(1114).t.zHeo07);
  size.onPress = function onPress() {
    self.track(AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED);
  };
  const items1 = [closure_7(common_VideoDefault, size), ];
  let tmp12Result = null;
  if (null != video) {
    const obj6 = { accessibilityLabel: "Play Video", accessibilityRole: "button", style: tmp.videoOverlay, onPress: self.playVideo, children: null };
    const obj7 = { accessibilityLabel: "Play Video", accessibilityRole: "button", source: tmp15(10397), onPress: self.playVideo, style: tmp.playButton, iconSize: tmp18(1178).IconSizes.CUSTOM, iconStyle: tmp.playIcon };
    obj6.children = tmp12(tmp15(9050), obj7);
    tmp12Result = tmp12(tmp18(5123).PressableOpacity, obj6);
    const tmp15Result = tmp15(9050);
  }
  items1[1] = tmp12Result;
  obj5.children = items1;
  obj4.children = closure_8(View, obj5);
  return closure_7(View, obj4);
};
prototype["render"] = function render() {
  const obj = {};
  const merged = Object.assign(this.props);
  obj.video = this.renderVideo();
  obj.onScroll = this.handleScroll;
  return React5(ChangeLogStandardTemplateDefault, obj);
};
ChangeLog.contextType = fn(4271).ThemeContext;
size = fn(2);
let result = size.fileFinishedImporting("components_native/ChangeLogModal.tsx");

export default function ChangelogModal() {
  const screens = noop.useMemo(() => {
    let obj = { CHANGELOG: null };
    obj = {
      name: "CHANGELOG",
      headerLeft: NavigatorHeader.getHeaderCloseButton(hideChangeLog),
      render() {
        return closure_1_7(closure_1_13, { onClose });
      }
    };
    obj.CHANGELOG = obj;
    return obj;
  }, []);
  return React5(Navigator.Navigator, { screens, initialRouteName: "CHANGELOG" });
};
export { ListItem };
export { ChangeLogScreen };