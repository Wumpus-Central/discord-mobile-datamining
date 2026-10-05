// === Module 15369: ChangeLogModal ===

// Module 15369 (ChangeLogModal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import ChangelogConstants from "ChangelogConstants" /* 2102 */;
import native from "native" /* 4589 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import FastImageDefault from "FastImage" /* 5974 */;
import NavigatorHeader2 from "NavigatorHeader" /* 6010 */;
import Navigator from "Navigator" /* 6496 */;
import ChangeLogStandardTemplateDefault from "ChangeLogStandardTemplate" /* 7763 */;
import openMediaModal2 from "openMediaModal" /* 7933 */;
import common_VideoDefault from "common/Video" /* 7983 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9442 */;
import AssetRegistryDefault from "AssetRegistry" /* 10123 */;
import _modDef15370 from "module_15370" /* 15370 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj4;
let size;
let size1;
function hideChangeLog() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(CHANGELOG_MODAL_KEY);
}
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const CHANGELOG_MODAL_KEY = ChangelogConstants.CHANGELOG_MODAL_KEY;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 0.5625;
let createStyles = createStyles_mod;
let obj = { video: { alignSelf: "center" }, videoWrapper: { marginBottom: 8 }, videoSpecial: obj2, videoOverlay: { position: "absolute", width: "100%", height: "100%" }, playButton: size, playIcon: { width: 21, height: 21 }, empty: { width: "100%", height: 240, alignItems: "center", paddingTop: 48 } };
obj2 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
size = { position: "absolute", top: "50%", left: "50%", marginLeft: -28, marginTop: -28, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: 56, height: 56 };
const authStore = createLegacyClassComponentStyles(obj);
createStyles = createStyles_mod;
let obj3 = { bulletPoint: size1, listItem: { flexDirection: "row", marginLeft: 4, marginBottom: 8 }, listText: obj4, listItemContent: { flexDirection: "column", flex: 1 } };
size1 = { width: 7, height: 7, borderRadius: 3.5, marginRight: 13, marginTop: 7, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
const createLegacyClassComponentStyles2 = createStyles.createLegacyClassComponentStyles;
obj4 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
const unpackModuleId = createLegacyClassComponentStyles2(obj3);
const PureComponent = react.PureComponent;
class ListItem extends PureComponent {
  render() {
    let childrenResult;
    let items;
    const children = this.props.children;
    const tmp = closure_11(this.context);
    const obj = { style: tmp.listItem, children: items };
    items = [, ];
    const obj2 = { style: tmp.bulletPoint };
    items[0] = metroImportDefault(View, obj2);
    const obj3 = { style: tmp.listText, children: childrenResult };
    childrenResult = children;
    if (typeof children === "function") {
      const obj4 = { style: tmp.listText };
      childrenResult = children(obj4);
    }
    items[1] = metroImportDefault(View, obj3);
    return metroImportAll(View, obj);
  }
}
const prototype = ListItem.prototype;
ListItem.contextType = native.ThemeContext;
const PureComponent2 = react.PureComponent;
class ChangeLog extends PureComponent2 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.mountedAt = 0;
    applyArgumentsResult.ref = react.createRef();
    applyArgumentsResult.maxScrolledPercentage = 0;
    applyArgumentsResult.state = { ytVideoReady: false };
    applyArgumentsResult.handleScroll = function handleScroll(contentOffset) {
      require.maxScrolledPercentage = Math.min(Math.max(require.maxScrolledPercentage, (contentOffset.contentOffset.y + contentOffset.layoutMeasurement.height) / contentOffset.contentSize.height), 1);
    };
    applyArgumentsResult.playVideo = function playVideo() {
      let height;
      let image;
      let items;
      let obj3;
      let video;
      let width;
      const props = require.props;
      ({ video, image } = props.changeLog);
      ({ width, height } = props);
      if (null == video) {
        if (null == image) {
          return null;
        }
      }
      if (null != video) {
        obj3 = { videoURI: video };
        const obj2 = { videoURI: video };
      } else {
        obj3 = { uri: image };
      }
      require.track(AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED);
      const current = require.ref.current;
      if (null != current) {
        const obj4 = { initialSources: items, disableDownload: true, shareable: false, analyticsSource: "Change Log", originViewOrOriginLayout: current };
        const obj5 = { width, height };
        const openMediaModal = openMediaModal2.openMediaModal;
        openMediaModal2;
        const merged = Object.assign(obj3);
        items = [obj5];
        openMediaModal(obj4);
      }
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this.mountedAt = Date.now();
    this.track(AnalyticEvents.CHANGE_LOG_OPENED);
  }
  componentWillUnmount() {
    this.track(AnalyticEvents.CHANGE_LOG_CLOSED);
  }
  track(arg0) {
    let maxScrolledPercentage;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const self = this;
    const changeLog = this.props.changeLog;
    if (null != changeLog) {
      const obj3 = { change_log_id: "" + changeLog.date + ":" + changeLog.revision };
      const _HermesInternal = HermesInternal;
      const merged = Object.assign(obj);
      let tmp10 = obj3;
      if (arg0 === AnalyticEvents.CHANGE_LOG_CLOSED) {
        const _Math = Math;
        const _Date = Date;
        const _parseInt = parseInt;
        const obj4 = { seconds_open: Math.round((Date.now() - self.mountedAt) / 1000), max_scrolled_percentage: 100 * parseInt(maxScrolledPercentage.toPrecision(4), 10) };
        maxScrolledPercentage = self.maxScrolledPercentage;
        const merged1 = Object.assign(obj3);
        tmp10 = obj4;
      }
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(arg0, tmp10);
    }
  }
  renderVideo() {
    let changeLog;
    let height;
    let image;
    let intl;
    let items;
    let items1;
    let obj;
    let obj10;
    let obj6;
    let obj8;
    let onClose;
    let tmp15Result;
    let video;
    let youtube_video_id;
    const self = this;
    const tmp = closure_10(this.context);
    const props = this.props;
    ({ changeLog, height, onClose } = props);
    ({ video, image, youtube_video_id } = changeLog);
    const width = props.width;
    if (null != video) {
      obj = { videoURI: video };
      const obj2 = { videoURI: video };
    } else if (null == image) {
      let tmp4Result = null;
      if (null != youtube_video_id) {
        const obj3 = { style: tmp.videoWrapper, onAccessibilityEscape: onClose, children: items };
        const obj4 = {
          height,
          play: false,
          videoId: youtube_video_id,
          onReady() {
                return self.setState({ ytVideoReady: true });
              },
          useLocalHTML: true
        };
        items = [closure_7(_modDef15370, obj4), ];
        let tmp6Result = null;
        if (!tmp2) {
          const obj5 = { style: tmp.videoOverlay, source: obj6 };
          const _HermesInternal = HermesInternal;
          obj6 = { uri: "https://i.ytimg.com/vi/" + youtube_video_id + "/hqdefault.jpg" };
          const tmp7Result = FastImageDefault;
          tmp6Result = closure_7(tmp7Result, obj5);
        }
        items[1] = tmp6Result;
        tmp4Result = closure_8(View, obj3);
      }
      return tmp4Result;
    } else {
      obj = { uri: image };
    }
    const obj7 = { style: tmp.videoWrapper, onAccessibilityEscape: onClose, children: closure_8(View, obj8) };
    obj8 = { ref: self.ref, style: tmp.videoSpecial, children: items1 };
    size = {
      style: tmp.video,
      src: obj,
      width,
      height,
      paused: true,
      canOpenFullscreen: true,
      unmutedOnFullScreen: true,
      accessibilityLabel: intl.string(self(1126).t.zHeo07),
      onPress() {
        self.track(AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED);
      }
    };
    const tmp17 = common_VideoDefault;
    intl = self(1126).intl;
    items1 = [closure_7(tmp17, size), ];
    let tmp12Result = null;
    if (null != video) {
      const obj9 = { accessibilityLabel: "Play Video", accessibilityRole: "button", style: tmp.videoOverlay, onPress: self.playVideo, children: closure_7(tmp15Result, obj10) };
      const PressableOpacity = tmp18(5909).PressableOpacity;
      obj10 = { accessibilityLabel: "Play Video", accessibilityRole: "button", source: AssetRegistryDefault, onPress: self.playVideo, style: tmp.playButton, iconSize: self(1188).IconSizes.CUSTOM, iconStyle: tmp.playIcon };
      tmp15Result = TouchableHitBoxDefault;
      tmp12Result = closure_7(PressableOpacity, obj9);
    }
    items1[1] = tmp12Result;
    return closure_7(View, obj7);
  }
  render() {
    const obj = { video: this.renderVideo(), onScroll: this.handleScroll };
    const tmp = ChangeLogStandardTemplateDefault;
    const merged = Object.assign(this.props);
    return metroImportDefault(tmp, obj);
  }
}
const prototype2 = ChangeLog.prototype;
ChangeLog.contextType = native.ThemeContext;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(3);
  size = useWindowDimensionsDefault();
  let diff = size.width - 36;
  const result = diff * c9;
  const result1 = 0.5 * size.height;
  const bound = Math.min(result, result1);
  if (result1 < result) {
    diff = result1 / c9;
  }
  if (cResult[0] === bound) {
    let tmp7;
    if (cResult[1] === diff) {
      tmp7 = cResult[2];
    }
    return tmp7;
  }
  const size1 = { height: bound, width: diff };
  cResult[0] = bound;
  cResult[1] = diff;
  cResult[2] = size1;
  tmp7 = size1;
}) : (() => {
  size = useWindowDimensionsDefault();
  let diff = size.width - 36;
  const result = diff * c9;
  const result1 = 0.5 * size.height;
  const size1 = { height: Math.min(result, result1), width: diff };
  if (result1 < result) {
    diff = result1 / c9;
  }
  return size1;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let changelog;
  let height;
  let intl;
  let intl2;
  let intl3;
  let width;
  let obj = changelog(navigation[20]);
  const cResult = obj.c(24);
  onClose = onClose.onClose;
  let obj2 = changelog(navigation[5]);
  const legacyClassComponentStyles = obj2.useLegacyClassComponentStyles(closure_10);
  let obj3 = changelog(navigation[22]);
  const currentChangelog = obj3.useCurrentChangelog();
  changelog = currentChangelog.changelog;
  const loaded = currentChangelog.loaded;
  const clientTooOld = currentChangelog.clientTooOld;
  ({ width, height } = closure_13());
  closure_13();
  const obj4 = changelog(navigation[23]);
  navigation = obj4.useNavigation();
  if (null == onClose) {
    let tmp8;
    if (cResult[0] !== navigation) {
      const fn = function l() {
        return navigation.goBack();
      };
      cResult[0] = navigation;
      cResult[1] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[1];
    }
    onClose = tmp8;
  }
  if (cResult[2] === changelog) {
    let tmp9;
    let tmp10;
    if (cResult[3] === navigation) {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    const effect = react.useEffect(tmp9, tmp10);
    if (cResult[6] === changelog) {
      let tmp12;
      let tmp13;
      let tmp15;
      if (cResult[7] === loaded) {
        tmp12 = cResult[8];
        tmp13 = cResult[9];
      }
      const effect1 = react.useEffect(tmp12, tmp13);
      if (clientTooOld) {
        let tmp36;
        let tmp39;
        const _Symbol3 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { variant: "heading-lg/medium", children: intl3.string(changelog(navigation[13]).t.V9ospk) };
          const Text3 = tmp(tmp2[27]).Text;
          intl3 = tmp(tmp2[13]).intl;
          const tmp38 = closure_7(Text3, obj6);
          cResult[10] = tmp38;
          tmp36 = tmp38;
        } else {
          tmp36 = cResult[10];
        }
        if (cResult[11] !== legacyClassComponentStyles.empty) {
          const obj7 = { style: legacyClassComponentStyles.empty, children: tmp36 };
          const tmp42 = closure_7(View, obj7);
          cResult[11] = legacyClassComponentStyles.empty;
          cResult[12] = tmp42;
          tmp39 = tmp42;
        } else {
          tmp39 = cResult[12];
        }
        tmp15 = tmp39;
      } else if (null == changelog) {
        let tmp23;
        if (loaded) {
          let tmp28;
          let tmp31;
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = { variant: "text-md/semibold", children: intl2.string(changelog(navigation[13]).t.O1iRT8) };
            const Text2 = tmp(tmp2[27]).Text;
            intl2 = tmp(tmp2[13]).intl;
            const tmp30 = closure_7(Text2, obj8);
            cResult[13] = tmp30;
            tmp28 = tmp30;
          } else {
            tmp28 = cResult[13];
          }
          if (cResult[14] !== legacyClassComponentStyles.empty) {
            const obj9 = { style: legacyClassComponentStyles.empty, children: tmp28 };
            const tmp34 = closure_7(View, obj9);
            cResult[14] = legacyClassComponentStyles.empty;
            cResult[15] = tmp34;
            tmp31 = tmp34;
          } else {
            tmp31 = cResult[15];
          }
          tmp23 = tmp31;
        } else {
          let tmp20;
          const _Symbol = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { variant: "text-md/semibold", children: intl.string(changelog(navigation[13]).t.ZTNur7) };
            const Text = tmp(tmp2[27]).Text;
            intl = tmp(tmp2[13]).intl;
            const tmp22 = closure_7(Text, obj10);
            cResult[16] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[16];
          }
          if (cResult[17] !== legacyClassComponentStyles.empty) {
            const obj11 = { style: legacyClassComponentStyles.empty, children: tmp20 };
            const tmp26 = closure_7(View, obj11);
            cResult[17] = legacyClassComponentStyles.empty;
            cResult[18] = tmp26;
            tmp23 = tmp26;
          } else {
            tmp23 = cResult[18];
          }
        }
        tmp15 = tmp23;
      } else {
        if (cResult[19] === changelog) {
          if (cResult[20] === height) {
            if (cResult[21] === onClose) {
              if (cResult[22] === width) {
                tmp15 = cResult[23];
              }
            }
          }
        }
        size = { onClose, height, width, changeLog: changelog };
        const tmp18 = closure_7(ChangeLog, size);
        cResult[19] = changelog;
        cResult[20] = height;
        cResult[21] = onClose;
        cResult[22] = width;
        cResult[23] = tmp18;
        tmp15 = tmp18;
      }
      return tmp15;
    }
    const fn3 = function u() {
      if (loaded) {
        if (null != changelog) {
          return () => {
            const obj = loaded(navigation[26]);
            return obj.markChangelogAsSeen(changelog.id, changelog.date);
          };
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
    let date;
    if (null != changelog) {
      let obj = {
        headerTitle() {
            let intl;
            const obj = { title: intl.string(changelog(navigation[13]).t.LRmNAl), subtitle: null };
            const NavigatorHeader = changelog(navigation[24]).NavigatorHeader;
            intl = changelog(navigation[13]).intl;
            const intl2 = changelog(navigation[13]).intl;
            const formatToPlainString = intl2.formatToPlainString;
            if (null != date.date) {
              let toDateResult;
              if ("" !== date.date) {
                const obj2 = loaded(navigation[25])(date.date);
                toDateResult = obj2.toDate();
              }
              const obj3 = { date: toDateResult };
              obj.subtitle = formatToPlainString(tmp3, obj3);
              return closure_2_7(NavigatorHeader, obj);
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
}) : ((onClose) => {
  let Text2;
  let height;
  let intl2;
  let obj5;
  let tmp12Result;
  let width;
  let fn = onClose.onClose;
  let changelog;
  navigation = undefined;
  let obj = changelog(navigation[5]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_10);
  let obj2 = changelog(navigation[22]);
  const currentChangelog = obj2.useCurrentChangelog();
  changelog = currentChangelog.changelog;
  const loaded = currentChangelog.loaded;
  const clientTooOld = currentChangelog.clientTooOld;
  ({ width, height } = closure_13());
  closure_13();
  let obj3 = changelog(navigation[23]);
  navigation = obj3.useNavigation();
  if (null == fn) {
    fn = function o() {
      return navigation.goBack();
    };
  }
  const items = [changelog, navigation];
  const effect = react.useEffect(() => {
    let date;
    if (null != changelog) {
      let obj = {
        headerTitle() {
            let intl;
            const obj = { title: intl.string(changelog(navigation[13]).t.LRmNAl), subtitle: null };
            const NavigatorHeader = changelog(navigation[24]).NavigatorHeader;
            intl = changelog(navigation[13]).intl;
            const intl2 = changelog(navigation[13]).intl;
            const formatToPlainString = intl2.formatToPlainString;
            if (null != date.date) {
              let toDateResult;
              if ("" !== date.date) {
                const obj2 = loaded(navigation[25])(date.date);
                toDateResult = obj2.toDate();
              }
              const obj3 = { date: toDateResult };
              obj.subtitle = formatToPlainString(tmp3, obj3);
              return closure_2_7(NavigatorHeader, obj);
            }
            toDateResult = new Date();
          }
      };
      navigation.setOptions(obj);
    }
  }, items);
  const items1 = [loaded, changelog];
  const effect1 = react.useEffect(() => {
    if (loaded) {
      if (null != changelog) {
        return () => {
          const obj = loaded(navigation[26]);
          return obj.markChangelogAsSeen(changelog.id, changelog.date);
        };
      }
    }
  }, items1);
  if (clientTooOld) {
    const obj4 = { style: legacyClassComponentStyles.empty, children: closure_7(Text2, obj5) };
    obj5 = { variant: "heading-lg/medium", children: intl2.string(changelog(navigation[13]).t.V9ospk) };
    Text2 = tmp(tmp2[27]).Text;
    intl2 = tmp(tmp2[13]).intl;
    tmp12Result = closure_7(View, obj4);
  } else if (null == changelog) {
    let tmp14;
    const obj6 = { style: legacyClassComponentStyles.empty, children: null };
    const Text = tmp(tmp2[27]).Text;
    const obj7 = { variant: "text-md/semibold", children: null };
    let intl = tmp(tmp2[13]).intl;
    const string = intl.string;
    const t = tmp(tmp2[13]).t;
    if (loaded) {
      obj7.children = string(t.O1iRT8);
      obj6.children = closure_7(Text, obj7);
      tmp14 = obj6;
    } else {
      obj7.children = string(t.ZTNur7);
      obj6.children = closure_7(Text, obj7);
      tmp14 = obj6;
    }
    tmp12Result = closure_7(View, tmp14);
  } else {
    size = { onClose: fn, height, width, changeLog: changelog };
    tmp12Result = closure_7(ChangeLog, size);
  }
  return tmp12Result;
});
let closure_14 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let obj3;
  let onClose;
  let tmp6;
  let tmpResult;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { CHANGELOG: obj3 };
    obj3 = {
      name: "CHANGELOG",
      headerLeft: tmpResult.getHeaderCloseButton(hideChangeLog),
      render() {
          const obj = { onClose };
          return closure_1_7(closure_1_14, obj);
        }
    };
    cResult[0] = obj2;
    first = obj2;
    tmpResult = NavigatorHeader2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { screens: first, initialRouteName: "CHANGELOG" };
    const tmp8 = metroImportDefault(Navigator.Navigator, obj4);
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => {
  const screens = react.useMemo(() => {
    let obj2;
    let obj3;
    let onClose;
    let obj = { CHANGELOG: obj2 };
    obj2 = {
      name: "CHANGELOG",
      headerLeft: obj3.getHeaderCloseButton(hideChangeLog),
      render() {
        const obj = { onClose };
        return closure_1_7(closure_1_14, obj);
      }
    };
    obj3 = NavigatorHeader2;
    return obj;
  }, []);
  return metroImportDefault(Navigator.Navigator, { screens, initialRouteName: "CHANGELOG" });
});
size = size_mod;
let result = size.fileFinishedImporting("components_native/ChangeLogModal.tsx");

export default tmp7;
export { ListItem };
export const ChangeLogScreen = tmp6;