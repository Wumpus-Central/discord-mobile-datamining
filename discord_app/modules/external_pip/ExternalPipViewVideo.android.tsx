// discord_app/modules/external_pip/ExternalPipViewVideo.android.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ExternalPipDefault from "ExternalPip.android.tsx";
import VideoActionCreators from "../media/VideoActionCreators.tsx";
import useExternalPipParticipantDefault from "useExternalPipParticipant.android.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function ExternalPipViewVideoUnavailable(wasStream) {
  wasStream = wasStream.wasStream;
  const tmp = closure_14();
  let obj = { style: tmp.unavailable, children: null };
  if (wasStream) {
    obj = { style: tmp.unavaiableImage };
    let tmp4Result = tmp4(tmp5(9598).StreamEnded, obj);
    let tmp8 = tmp4;
    let tmp10 = tmp5;
  } else {
    tmp4Result = tmp4(tmp5(4515).CircleInformationIcon, {});
    tmp8 = tmp4;
    tmp10 = tmp5;
  }
  const items = [tmp4Result];
  obj = { variant: "text-md/semibold", style: tmp.unavailableText, lineClamp: 1, children: null };
  const intl = tmp10(1114).intl;
  if (wasStream) {
    let result = intl.formatToMarkdownString(tmp10(1114).t["1Ww0Hi"], {});
  } else {
    result = intl.string(tmp10(1114).t.Nzo5nz);
  }
  obj.children = result;
  items[1] = tmp8(tmp10(4556).Text, obj);
  obj.children = items;
  return closure_1_12(timestampProducer, obj);
}
function ExternalPipViewVideoUser(arg0) {
  ({ userId: require, channelId: importDefault, speaking } = arg0);
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(require));
  initialize;
  [][0] = ChannelStore;
  obj = { style: closure_14().user, children: null };
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = {
      user: stateFromStores,
      avatarDecoration: stateFromStores.avatarDecoration,
      guildId: tmp6,
      size: tmp2(1178).AvatarSizes.XXLARGE,
      animate: speaking,
      speaking,
    };
    tmp7Result = tmp7(tmp2(1178).Avatar, obj);
  }
  obj.children = tmp7Result;
  return closure_11(closure_6, obj);
}
function ExternalPipViewVideoStream(streamId) {
  streamId = streamId.streamId;
  let obj = streamId(9605);
  _slicedToArray = undefined;
  noop = undefined;
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(streamId.userId, {
    location: "ExternalPipViewVideoStream",
  });
  const tmp2 = _slicedToArray(noop.useState(undefined), 2);
  const first = tmp2[0];
  _slicedToArray = tmp2[1];
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
    const items = [video.video];
    let num = 1;
    if (null == first) {
      num = 0;
    }
    items[1] = { opacity: num };
    return items;
  }, items2);
  const token = streamId(4262).useToken(first(576).colors.TEXT_FEEDBACK_INFO);
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
  const children = [
    closure_11(first(9616), {
      useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
      style: memo,
      streamId,
      onReady: callback,
      onLayout: callback1,
    }),
  ];
  let tmp14Result = null;
  if (null == first) {
    tmp14Result = null;
    if (tmp4[0]) {
      obj = { style: tmp7.videoUnavailableWrap, children: null };
      obj = { style: tmp7.videoUnavailableSpinner, size: "large", color: token };
      obj.children = tmp14(closure_5, obj);
      tmp14Result = tmp14(closure_6, obj);
    }
  }
  children[1] = tmp14Result;
  return closure_12(closure_13, { children });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, StyleSheet, View: metroRequire, PixelRatio: closure_7 } = get_ActivityIndicator);
const ParticipantTypes = fn(4581).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
fn(4560);
let obj = {
  container: null,
  video: null,
  videoUnavailableWrap: null,
  videoUnavailableSpinner: null,
  unavailable: null,
  unavailableText: null,
  unavaiableImage: null,
  user: null,
};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj.container = obj;
const createStyles = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.video = createStyles;
const obj2 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.margin = nativeDefault.space.PX_16;
obj2.borderRadius = nativeDefault.radii.sm;
obj2.justifyContent = "center";
obj2.alignContent = "center";
obj2.flexDirection = "row";
obj2.alignItems = "center";
obj2.flexWrap = "wrap";
obj2.flex = 1;
obj.videoUnavailableWrap = obj2;
obj.videoUnavailableSpinner = { marginTop: nativeDefault.space.PX_16 };
const obj3 = { marginTop: nativeDefault.space.PX_16 };
obj.unavailable = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_8,
  margin: nativeDefault.space.PX_8,
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  flex: 1,
};
const obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_8,
  margin: nativeDefault.space.PX_8,
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  flex: 1,
};
obj.unavailableText = { marginLeft: nativeDefault.space.PX_4, textAlign: "center" };
const obj5 = { marginLeft: nativeDefault.space.PX_4, textAlign: "center" };
obj.unavaiableImage = { marginBottom: nativeDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" };
const obj7 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj7.borderRadius = nativeDefault.radii.sm;
obj7.margin = nativeDefault.space.PX_8;
obj7.alignItems = "center";
obj7.justifyContent = "center";
obj.user = obj7;
let closure_14 = createStyles.createStyles(obj);
const obj6 = { marginBottom: nativeDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" };
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
  let obj = { style: closure_14().container, onLayout: onLayout.onLayout, children: null };
  if (null != selectedParticipantStreamId) {
    obj = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
    let tmp4Result = tmp4(ExternalPipViewVideoStream, obj);
  } else if (null != selectedParticipantUserId) {
    obj = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
    tmp4Result = tmp4(ExternalPipViewVideoUser, obj);
  } else {
    let tmp7 = focusedParticipantType === ParticipantTypes.STREAM;
    if (!tmp7) {
      tmp7 = focusedParticipantType === ParticipantTypes.HIDDEN_STREAM;
    }
    const obj1 = { wasStream: tmp7 };
    tmp4Result = tmp4(ExternalPipViewVideoUnavailable, obj1);
  }
  obj.children = tmp4Result;
  return closure_1_11(timestampProducer, obj);
});
