// === Module 17152: ExternalPipViewVideo ===

// Module 17152 (ExternalPipViewVideo)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4594 */;
import StreamEnded from "StreamEnded" /* 9730 */;
import ExternalPipDefault from "ExternalPip" /* 9742 */;
import VideoActionCreators from "VideoActionCreators" /* 17153 */;
import useExternalPipParticipantDefault from "useExternalPipParticipant" /* 17154 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function ExternalPipViewVideoUnavailable(wasStream) {
  wasStream = wasStream.wasStream;
  const tmp = closure_14();
  const obj = { style: tmp.unavailable, children: null };
  if (wasStream) {
    const obj2 = { style: tmp.unavaiableImage };
    let tmp4Result = closure_1_11(StreamEnded.StreamEnded, obj2);
    let tmp8 = closure_1_11;
    let tmp10 = require;
  } else {
    tmp4Result = closure_1_11(CircleInformationIcon.CircleInformationIcon, {});
    tmp8 = closure_1_11;
    tmp10 = require;
  }
  const items = [tmp4Result, ];
  const obj3 = { variant: "text-md/semibold", style: tmp.unavailableText, lineClamp: 1, children: null };
  const intl = tmp10(1115).intl;
  if (wasStream) {
    let result = intl.formatToMarkdownString(tmp10(1115).t["1Ww0Hi"], {});
  } else {
    result = intl.string(tmp10(1115).t.Nzo5nz);
  }
  obj3.children = result;
  items[1] = tmp8(tmp10(4635).Text, obj3);
  obj.children = items;
  return closure_1_12(timestampProducer, obj);
}
function ExternalPipViewVideoUser(arg0) {
  ({ userId: require, channelId: importDefault, speaking } = arg0);
  const tmp = closure_14();
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => UserStore.getUser(require));
  initialize;
  [][0] = ChannelStore;
  const obj2 = { style: tmp.user, children: null };
  let tmp7Result = null;
  if (null != stateFromStores) {
    const obj3 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, guildId: tmp6, size: native.AvatarSizes.XXLARGE, animate: speaking, speaking };
    tmp7Result = closure_11(native.Avatar, obj3);
  }
  obj2.children = tmp7Result;
  return closure_11(closure_6, obj2);
}
function ExternalPipViewVideoStream(streamId) {
  streamId = streamId.streamId;
  first = 300;
  _slicedToArray = undefined;
  noop = undefined;
  const surfaceDirectRendererExperiment = streamId(9737).useSurfaceDirectRendererExperiment(streamId.userId, { location: "ExternalPipViewVideoStream" });
  [first, _slicedToArray] = noop.useState(undefined);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  noop = tmp4[1];
  let items = [streamId];
  const items1 = [first, 300];
  const callback = noop.useCallback(() => value(streamId), items);
  const effect = noop.useEffect(() => {
    if (null == closure_2) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_4(true);
      }, first);
      return () => {
        clearTimeout(closure_0);
      };
    } else {
      closure_4(false);
    }
  }, items1);
  const tmp7 = closure_14();
  dependencyMap = tmp7;
  const items2 = [tmp7, first];
  const memo = noop.useMemo(() => {
    const items = [video.video, ];
    let num = 1;
    if (null == first) {
      num = 0;
    }
    items[1] = { opacity: num };
    return items;
  }, items2);
  let obj = streamId(9737);
  const token = streamId(4341).useToken(first(576).colors.TEXT_FEEDBACK_INFO);
  value = closure_7.get();
  _slicedToArray = value;
  const items3 = [streamId, value];
  const callback1 = noop.useCallback((nativeEvent) => {
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      const size = { width: width * value, height: height * value };
      VideoActionCreators.updateVideoSize(tmp, size, 1);
    }
  }, items3);
  const children = [closure_11(first(9748), { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: memo, streamId, onReady: callback, onLayout: callback1 }), ];
  let tmp14Result = null;
  if (null == first) {
    tmp14Result = null;
    if (tmp4[0]) {
      const obj3 = { style: tmp7.videoUnavailableWrap, children: null };
      const obj4 = { style: tmp7.videoUnavailableSpinner, size: "large", color: token };
      obj3.children = closure_11(closure_5, obj4);
      tmp14Result = closure_11(closure_6, obj3);
    }
  }
  children[1] = tmp14Result;
  return closure_12(closure_13, { children });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, StyleSheet, View: metroRequire, PixelRatio: closure_7 } = get_ActivityIndicator);
const ParticipantTypes = fn(4660).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4639);
let obj = { container: null, video: null, videoUnavailableWrap: null, videoUnavailableSpinner: null, unavailable: null, unavailableText: null, unavaiableImage: null, user: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj.container = obj3;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.video = {};
const obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5.margin = nativeDefault.space.PX_16;
obj5.borderRadius = nativeDefault.radii.sm;
obj5.justifyContent = "center";
obj5.alignContent = "center";
obj5.flexDirection = "row";
obj5.alignItems = "center";
obj5.flexWrap = "wrap";
obj5.flex = 1;
obj.videoUnavailableWrap = obj5;
obj.videoUnavailableSpinner = { marginTop: nativeDefault.space.PX_16 };
let obj4 = {};
const obj6 = { marginTop: nativeDefault.space.PX_16 };
obj.unavailable = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: nativeDefault.space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
const obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: nativeDefault.space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
obj.unavailableText = { marginLeft: nativeDefault.space.PX_4, textAlign: "center" };
const obj8 = { marginLeft: nativeDefault.space.PX_4, textAlign: "center" };
obj.unavaiableImage = { marginBottom: nativeDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" };
const obj10 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj10.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj10.borderRadius = nativeDefault.radii.sm;
obj10.margin = nativeDefault.space.PX_8;
obj10.alignItems = "center";
obj10.justifyContent = "center";
obj.user = obj10;
let closure_14 = createStyles.createStyles(obj);
const obj9 = { marginBottom: nativeDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default noop.memo(function ExternalPipViewVideo(onLayout) {
  const tmp2 = useExternalPipParticipantDefault();
  ({ selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType } = tmp2);
  const items = [selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType];
  ({ channelId, selectedParticipantSpeaking } = tmp2);
  const effect = noop.useEffect(() => {
    ExternalPipDefault.refreshPipUi();
  }, items);
  const obj = { style: closure_14().container, onLayout: onLayout.onLayout, children: null };
  if (null != selectedParticipantStreamId) {
    const obj2 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
    let tmp4Result = closure_1_11(ExternalPipViewVideoStream, obj2);
  } else if (null != selectedParticipantUserId) {
    const obj3 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
    tmp4Result = closure_1_11(ExternalPipViewVideoUser, obj3);
  } else {
    let tmp7 = focusedParticipantType === ParticipantTypes.STREAM;
    if (!tmp7) {
      tmp7 = focusedParticipantType === ParticipantTypes.HIDDEN_STREAM;
    }
    const obj4 = { wasStream: tmp7 };
    tmp4Result = closure_1_11(ExternalPipViewVideoUnavailable, obj4);
  }
  obj.children = tmp4Result;
  return closure_1_11(timestampProducer, obj);
});