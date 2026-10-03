// === Module 15365: ChangeLogModal ===

// Module 15365 (ChangeLogModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import FastImageDefault from "FastImage" /* 5974 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import Navigator from "Navigator" /* 6496 */;
import ChangeLogStandardTemplateDefault from "ChangeLogStandardTemplate" /* 7763 */;
import openMediaModal from "openMediaModal" /* 7933 */;
import common_VideoDefault from "common/Video" /* 7983 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9442 */;
import _modDef10123 from "module_10123" /* 10123 */;
import _modDef15366 from "module_15366" /* 15366 */;
import noop from "module_19" /* 19 */;

require = fn;
function hideChangeLog() {
  ModalActionCreatorsDefault.popWithKey(CHANGELOG_MODAL_KEY);
}
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const CHANGELOG_MODAL_KEY = fn(2102).CHANGELOG_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 0.5625;
let createStyles = fn(4890);
let obj2 = { video: { alignSelf: "center" }, videoWrapper: { marginBottom: 8 }, videoSpecial: { borderRadius: nativeDefault.radii.xs, overflow: "hidden" }, videoOverlay: { position: "absolute", width: "100%", height: "100%" }, playButton: null, playIcon: null, empty: null };
let size = { position: "absolute", top: "50%", left: "50%", marginLeft: -28, marginTop: -28, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: 56, height: 56 };
obj2.playButton = size;
obj2.playIcon = { width: 21, height: 21 };
obj2.empty = { width: "100%", height: 240, alignItems: "center", paddingTop: 48 };
let closure_10 = createStyles.createLegacyClassComponentStyles(obj2);
createStyles = fn(4890);
let obj4 = { bulletPoint: null, listItem: null, listText: null, listItemContent: null };
let size1 = { width: 7, height: 7, borderRadius: 3.5, marginRight: 13, marginTop: 7, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj4.bulletPoint = size1;
obj4.listItem = { flexDirection: "row", marginLeft: 4, marginBottom: 8 };
let obj3 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj4.listText = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
obj4.listItemContent = { flexDirection: "column", flex: 1 };
let closure_11 = createStyles.createLegacyClassComponentStyles(obj4);
const PureComponent = noop.PureComponent;
class ListItem extends PureComponent {
}
ListItem.prototype["render"] = function render() {
  const children = this.props.children;
  const tmp = closure_11(this.context);
  const obj = { style: tmp.listItem, children: null };
  const items = [React5(View, { style: tmp.bulletPoint }), ];
  const obj3 = { style: tmp.listText, children: null };
  let childrenResult = children;
  if (typeof children === "function") {
    const obj4 = { style: tmp.listText };
    childrenResult = children(obj4);
  }
  obj3.children = childrenResult;
  items[1] = React5(View, obj3);
  obj.children = items;
  return closure_1_8(View, obj);
};
ListItem.contextType = fn(4589).ThemeContext;
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
      const props = applyArgumentsResult.props;
      ({ video, image } = props.changeLog);
      ({ width, height } = props);
      if (null == video) {
        if (null == image) {
          return null;
        }
      }
      if (null != video) {
        const obj2 = { videoURI: video };
        let obj3 = obj2;
      } else {
        obj3 = { uri: image };
      }
      applyArgumentsResult.track(AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED);
      const current = applyArgumentsResult.ref.current;
      if (null != current) {
        const obj5 = { initialSources: null, disableDownload: true, shareable: false, analyticsSource: "Change Log", originViewOrOriginLayout: null };
        const obj6 = {};
        const merged = Object.assign(obj3);
        obj6.width = width;
        obj6.height = height;
        const items = [obj6];
        obj5.initialSources = items;
        obj5.originViewOrOriginLayout = current;
        openMediaModal.openMediaModal(obj5);
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
    const obj3 = { change_log_id: null };
    const _HermesInternal = HermesInternal;
    obj3.change_log_id = "" + changeLog.date + ":" + changeLog.revision;
    const merged = Object.assign(obj);
    let tmp10 = obj3;
    if (arg0 === AnalyticEvents.CHANGE_LOG_CLOSED) {
      const obj4 = { seconds_open: null, max_scrolled_percentage: null };
      const _Math = Math;
      const _Date = Date;
      obj4.seconds_open = Math.round((Date.now() - self.mountedAt) / 1000);
      const _parseInt = parseInt;
      const maxScrolledPercentage = self.maxScrolledPercentage;
      obj4.max_scrolled_percentage = 100 * parseInt(maxScrolledPercentage.toPrecision(4), 10);
      const merged1 = Object.assign(obj3);
      tmp10 = obj4;
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
    const obj2 = { videoURI: video };
    let obj = obj2;
  } else if (null == image) {
    let tmp4Result = null;
    if (null != youtube_video_id) {
      const obj3 = { style: tmp.videoWrapper, onAccessibilityEscape: onClose, children: null };
      const obj4 = {
        height,
        play: false,
        videoId: youtube_video_id,
        onReady() {
              return self.setState({ ytVideoReady: true });
            },
        useLocalHTML: true
      };
      const items = [closure_7(_modDef15366, obj4), ];
      let tmp6Result = null;
      if (!tmp2) {
        const obj5 = { style: tmp.videoOverlay, source: null };
        const obj6 = { uri: null };
        const _HermesInternal = HermesInternal;
        obj6.uri = "https://i.ytimg.com/vi/" + youtube_video_id + "/hqdefault.jpg";
        obj5.source = obj6;
        tmp6Result = closure_7(FastImageDefault, obj5);
        const tmp7Result = FastImageDefault;
      }
      items[1] = tmp6Result;
      obj3.children = items;
      tmp4Result = closure_8(View, obj3);
    }
    return tmp4Result;
  } else {
    obj = { uri: image };
  }
  const obj7 = { style: tmp.videoWrapper, onAccessibilityEscape: onClose, children: null };
  const obj8 = { ref: self.ref, style: tmp.videoSpecial, children: null };
  const size = { style: tmp.video, src: obj, width: props.width, height, paused: true, canOpenFullscreen: true, unmutedOnFullScreen: true, accessibilityLabel: null, onPress: null };
  const intl = self(1126).intl;
  size.accessibilityLabel = intl.string(self(1126).t.zHeo07);
  size.onPress = function onPress() {
    self.track(AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED);
  };
  const items1 = [closure_7(common_VideoDefault, size), ];
  let tmp12Result = null;
  if (null != video) {
    const obj9 = { accessibilityLabel: "Play Video", accessibilityRole: "button", style: tmp.videoOverlay, onPress: self.playVideo, children: null };
    const obj10 = { accessibilityLabel: "Play Video", accessibilityRole: "button", source: _modDef10123, onPress: self.playVideo, style: tmp.playButton, iconSize: tmp18(1188).IconSizes.CUSTOM, iconStyle: tmp.playIcon };
    obj9.children = closure_7(TouchableHitBoxDefault, obj10);
    tmp12Result = closure_7(tmp18(5909).PressableOpacity, obj9);
    const tmp15Result = TouchableHitBoxDefault;
  }
  items1[1] = tmp12Result;
  obj8.children = items1;
  obj7.children = closure_8(View, obj8);
  return closure_7(View, obj7);
};
prototype["render"] = function render() {
  const obj = {};
  const merged = Object.assign(this.props);
  obj.video = this.renderVideo();
  obj.onScroll = this.handleScroll;
  return React5(ChangeLogStandardTemplateDefault, obj);
};
ChangeLog.contextType = fn(4589).ThemeContext;
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const size = useWindowDimensionsDefault();
  let diff = size.width - 36;
  const result = diff * c9;
  const result1 = 0.5 * size.height;
  const bound = Math.min(result, result1);
  if (result1 < result) {
    diff = result1 / c9;
  }
  if (cResult[0] === bound) {
    if (cResult[1] === diff) {
      let tmp7 = cResult[2];
    }
    return tmp7;
  }
  const size1 = { height: bound, width: diff };
  cResult[0] = bound;
  cResult[1] = diff;
  cResult[2] = size1;
  tmp7 = size1;
}) : (() => {
  const size = useWindowDimensionsDefault();
  let diff = size.width - 36;
  const result = diff * c9;
  const result1 = 0.5 * size.height;
  const size1 = { height: Math.min(result, result1), width: null };
  if (result1 < result) {
    diff = result1 / c9;
  }
  size1.width = diff;
  return size1;
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  const cResult = changelog(navigation[20]).c(24);
  onClose = onClose.onClose;
  let obj = changelog(navigation[20]);
  let empty = changelog(navigation[5]).useLegacyClassComponentStyles(closure_10);
  let obj2 = changelog(navigation[5]);
  const currentChangelog = changelog(navigation[22]).useCurrentChangelog();
  changelog = currentChangelog.changelog;
  const loaded = currentChangelog.loaded;
  let obj3 = changelog(navigation[22]);
  ({ width, height } = closure_13());
  const tmp5 = closure_13();
  navigation = changelog(navigation[23]).useNavigation();
  if (null != onClose) {
    if (cResult[2] === changelog) {
      if (cResult[3] === navigation) {
        let tmp9 = cResult[4];
        let tmp10 = cResult[5];
      }
      const effect = noop.useEffect(tmp9, tmp10);
      if (cResult[6] === changelog) {
        if (cResult[7] === loaded) {
          let tmp12 = cResult[8];
          let tmp13 = cResult[9];
        }
        const effect1 = noop.useEffect(tmp12, tmp13);
        if (currentChangelog.clientTooOld) {
          const _Symbol3 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { variant: "heading-lg/medium", children: null };
            const intl3 = tmp(tmp2[13]).intl;
            obj6.children = intl3.string(tmp(tmp2[13]).t.V9ospk);
            const tmp40 = closure_7(tmp(tmp2[27]).Text, obj6);
            cResult[10] = tmp40;
            let tmp38 = tmp40;
          } else {
            tmp38 = cResult[10];
          }
          if (cResult[11] !== empty.empty) {
            const obj7 = { style: empty.empty, children: tmp38 };
            const tmp44 = closure_7(View, obj7);
            empty = empty.empty;
            cResult[11] = empty;
            cResult[12] = tmp44;
          }
        } else if (null == changelog) {
          if (!loaded) {
            const _Symbol = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const obj8 = { variant: "text-md/semibold", children: null };
              let intl = tmp(tmp2[13]).intl;
              obj8.children = intl.string(tmp(tmp2[13]).t.ZTNur7);
              const tmp22 = closure_7(tmp(tmp2[27]).Text, obj8);
              cResult[16] = tmp22;
              let tmp20 = tmp22;
            } else {
              tmp20 = cResult[16];
            }
            if (cResult[17] !== empty.empty) {
              const obj9 = { style: empty.empty, children: tmp20 };
              const tmp26 = closure_7(View, obj9);
              cResult[17] = empty.empty;
              cResult[18] = tmp26;
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { variant: "text-md/semibold", children: null };
            let intl2 = tmp(tmp2[13]).intl;
            obj10.children = intl2.string(tmp(tmp2[13]).t.O1iRT8);
            const tmp30 = closure_7(tmp(tmp2[27]).Text, obj10);
            cResult[13] = tmp30;
            let tmp28 = tmp30;
          } else {
            tmp28 = cResult[13];
          }
          if (cResult[14] !== empty.empty) {
            const obj11 = { style: empty.empty, children: tmp28 };
            const tmp34 = closure_7(View, obj11);
            cResult[14] = empty.empty;
            cResult[15] = tmp34;
          }
        } else {
          if (cResult[19] === changelog) {
            if (cResult[20] === height) {
              if (cResult[21] === onClose) {
                if (cResult[22] === width) {
                  let tmp15 = cResult[23];
                }
                return tmp15;
              }
            }
          }
          const size = { onClose, height, width, changeLog: changelog };
          const tmp18 = closure_7(ChangeLog, size);
          cResult[19] = changelog;
          cResult[20] = height;
          cResult[21] = onClose;
          cResult[22] = width;
          cResult[23] = tmp18;
          tmp15 = tmp18;
        }
      }
      const fn3 = function u() {
        if (loaded) {
          if (null != changelog) {
            return () => loaded(navigation[26]).markChangelogAsSeen(changelog.id, changelog.date);
          }
        }
      };
      const items = [loaded, changelog];
      cResult[6] = changelog;
      cResult[7] = loaded;
      cResult[8] = fn3;
      cResult[9] = items;
      tmp13 = items;
      tmp12 = fn3;
    }
    const fn2 = function s() {
      if (null != changelog) {
        let obj = {
          headerTitle() {
              const obj = { title: null, subtitle: null };
              const intl = changelog(navigation[13]).intl;
              obj.title = intl.string(changelog(navigation[13]).t.LRmNAl);
              const intl2 = changelog(navigation[13]).intl;
              if (null != date.date) {
                if ("" !== date.date) {
                  let toDateResult = loaded(navigation[25])(date.date).toDate();
                  const obj2 = loaded(navigation[25])(date.date);
                }
                const obj3 = { date: toDateResult };
                obj.subtitle = intl2.formatToPlainString(tmp3, obj3);
                return closure_2_7(changelog(navigation[24]).NavigatorHeader, obj);
              }
              toDateResult = new Date();
            }
        };
        navigation.setOptions(obj);
      }
    };
    const items1 = [changelog, navigation];
    cResult[2] = changelog;
    cResult[3] = navigation;
    cResult[4] = fn2;
    cResult[5] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  } else if (cResult[0] !== navigation) {
    const fn = function l() {
      return navigation.goBack();
    };
    cResult[0] = navigation;
    cResult[1] = fn;
  }
  const obj4 = changelog(navigation[23]);
}) : ((onClose) => {
  let fn = onClose.onClose;
  let changelog;
  let navigation;
  const legacyClassComponentStyles = changelog(navigation[5]).useLegacyClassComponentStyles(closure_10);
  let obj = changelog(navigation[5]);
  const currentChangelog = changelog(navigation[22]).useCurrentChangelog();
  changelog = currentChangelog.changelog;
  const loaded = currentChangelog.loaded;
  let obj2 = changelog(navigation[22]);
  ({ width, height } = closure_13());
  const tmp5 = closure_13();
  navigation = changelog(navigation[23]).useNavigation();
  if (null == fn) {
    fn = function o() {
      return navigation.goBack();
    };
  }
  const items = [changelog, navigation];
  const effect = noop.useEffect(() => {
    if (null != changelog) {
      let obj = {
        headerTitle() {
            const obj = { title: null, subtitle: null };
            const intl = changelog(navigation[13]).intl;
            obj.title = intl.string(changelog(navigation[13]).t.LRmNAl);
            const intl2 = changelog(navigation[13]).intl;
            if (null != date.date) {
              if ("" !== date.date) {
                let toDateResult = loaded(navigation[25])(date.date).toDate();
                const obj2 = loaded(navigation[25])(date.date);
              }
              const obj3 = { date: toDateResult };
              obj.subtitle = intl2.formatToPlainString(tmp3, obj3);
              return closure_2_7(changelog(navigation[24]).NavigatorHeader, obj);
            }
            toDateResult = new Date();
          }
      };
      navigation.setOptions(obj);
    }
  }, items);
  const items1 = [loaded, changelog];
  const effect1 = noop.useEffect(() => {
    if (loaded) {
      if (null != changelog) {
        return () => loaded(navigation[26]).markChangelogAsSeen(changelog.id, changelog.date);
      }
    }
  }, items1);
  if (currentChangelog.clientTooOld) {
    const obj4 = { style: legacyClassComponentStyles.empty, children: null };
    const obj5 = { variant: "heading-lg/medium", children: null };
    let intl2 = tmp(tmp2[13]).intl;
    obj5.children = intl2.string(tmp(tmp2[13]).t.V9ospk);
    obj4.children = closure_7(tmp(tmp2[27]).Text, obj5);
    let tmp11 = closure_7(View, obj4);
  } else if (null == changelog) {
    const obj6 = { style: legacyClassComponentStyles.empty, children: null };
    const Text = tmp(tmp2[27]).Text;
    let obj7 = { variant: "text-md/semibold", children: null };
    let intl = tmp(tmp2[13]).intl;
    const string = intl.string;
    let t = tmp(tmp2[13]).t;
    if (loaded) {
      t = string(t.O1iRT8);
      obj7.children = t;
      obj7 = closure_7(Text, obj7);
      obj6.children = obj7;
      let tmp14 = obj6;
    } else {
      obj7[1] = string(t.ZTNur7);
      obj6.children = closure_7(Text, obj7);
      tmp14 = obj6;
    }
    closure_7(View, tmp14);
  } else {
    const size = { onClose: fn, height, width, changeLog: changelog };
    tmp11 = closure_7(ChangeLog, size);
  }
  return tmp11;
});
let closure_14 = tmp4;
ReactCompilerGating = fn(558);
let obj6 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
size = fn(2);
let result = size.fileFinishedImporting("components_native/ChangeLogModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { CHANGELOG: null };
    const obj3 = {
      name: "CHANGELOG",
      headerLeft: NavigatorHeader.getHeaderCloseButton(hideChangeLog),
      render() {
          return closure_1_7(closure_1_14, { onClose });
        }
    };
    obj2.CHANGELOG = obj3;
    cResult[0] = obj2;
    let first = obj2;
    const tmpResult = NavigatorHeader;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { screens: first, initialRouteName: "CHANGELOG" };
    const tmp8 = React5(Navigator.Navigator, obj4);
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => {
  const screens = noop.useMemo(() => {
    const obj = { CHANGELOG: null };
    const obj2 = {
      name: "CHANGELOG",
      headerLeft: NavigatorHeader.getHeaderCloseButton(hideChangeLog),
      render() {
        return closure_1_7(closure_1_14, { onClose });
      }
    };
    obj.CHANGELOG = obj2;
    return obj;
  }, []);
  return React5(Navigator.Navigator, { screens, initialRouteName: "CHANGELOG" });
});
export { ListItem };
export const ChangeLogScreen = tmp4;