// discord_app/modules/external_pip/ExternalPipViewVideo.android.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import CircleInformationIcon from "../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import ExternalPipDefault from "ExternalPip.android.tsx";
import VideoActionCreators from "../media/VideoActionCreators.tsx";
import useExternalPipParticipantDefault from "useExternalPipParticipant.android.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function ExternalPipViewVideoUnavailable() {
  const tmp = closure_14();
  const obj = { style: tmp.unavailable, children: null };
  const items = [closure_1_11(CircleInformationIcon.CircleInformationIcon, {})];
  const obj2 = { variant: "text-md/semibold", style: tmp.unavailableText, lineClamp: 1, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.Nzo5nz);
  items[1] = closure_1_11(Text_Text.Text, obj2);
  obj.children = items;
  return closure_1_12(React5, obj);
}
function ExternalPipViewVideoUser(userId) {
  userId = userId.userId;
  const channelId = userId.channelId;
  backgroundColor = undefined;
  const tmp = closure_14();
  dependencyMap = tmp;
  let items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  const obj = userId(504);
  const items1 = [ChannelStore];
  const stateFromStores1 = userId(504).useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj3 = userId(504);
  const avatarDecoration = userId(6853).useAvatarDecoration(stateFromStores, stateFromStores1);
  const obj2 = { userId, guildId: stateFromStores1, avatarURI: null, location: "ExternalPipViewVideo-native" };
  let avatarURL;
  const obj4 = userId(6853);
  const tmp6 = channelId;
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(stateFromStores1, 80, false);
  }
  obj2.avatarURI = avatarURL;
  const tmp7 = channelId(19104);
  ({ gradientStops, backgroundColor } = channelId(19104)(obj2));
  const items2 = [tmp.user, backgroundColor];
  const obj5 = {
    style: noop.useMemo(() => {
      const items = [user.user, { backgroundColor }];
      return items;
    }, items2),
    children: null,
  };
  let tmp12 = null;
  if (null != gradientStops) {
    const obj6 = { colors: gradientStops, start, end, style: StyleSheet.absoluteFill, pointerEvents: "none" };
    tmp12 = closure_11(tmp6(5587), obj6);
  }
  const items3 = [tmp12];
  let tmp17 = null;
  if (null != stateFromStores) {
    const obj7 = {
      user: stateFromStores,
      avatarDecoration,
      guildId: stateFromStores1,
      size: tmp2(1187).AvatarSizes.XXLARGE,
      speaking: userId.speaking,
    };
    tmp17 = closure_11(tmp2(1187).Avatar, obj7);
  }
  items3[1] = tmp17;
  obj5.children = items3;
  return closure_12(closure_7, obj5);
}
function ExternalPipViewVideoStream(streamId) {
  streamId = streamId.streamId;
  first = 300;
  _slicedToArray = undefined;
  noop = undefined;
  const surfaceDirectRendererExperiment = streamId(5888).useSurfaceDirectRendererExperiment(streamId.userId, {
    location: "ExternalPipViewVideoStream",
  });
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
  const items2 = [first];
  const effect1 = noop.useEffect(() => {
    if (null != first) {
      ExternalPipDefault.setPipContentReady();
    }
  }, items2);
  const tmp8 = closure_14();
  dependencyMap = tmp8;
  const items3 = [tmp8, first];
  const memo = noop.useMemo(() => {
    const items = [video.video];
    let num = 1;
    if (null == first) {
      num = 0;
    }
    items[1] = { opacity: num };
    return items;
  }, items3);
  let obj = streamId(5888);
  const token = streamId(5596).useToken(first(575).colors.TEXT_FEEDBACK_INFO);
  value = closure_8.get();
  _slicedToArray = value;
  const items4 = [streamId, value];
  const callback1 = noop.useCallback((nativeEvent) => {
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      const size = { width: width * value, height: height * value };
      VideoActionCreators.updateVideoSize(tmp, size, 1);
    }
  }, items4);
  const children = [
    closure_11(first(11772), {
      useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
      style: memo,
      streamId,
      onReady: callback,
      onLayout: callback1,
    }),
  ];
  let tmp15Result = null;
  if (null == first) {
    tmp15Result = null;
    if (tmp4[0]) {
      const obj3 = { style: tmp8.videoUnavailableWrap, children: null };
      const obj4 = { style: tmp8.videoUnavailableSpinner, size: "large", color: token };
      obj3.children = closure_11(closure_5, obj4);
      tmp15Result = closure_11(closure_7, obj3);
    }
  }
  children[1] = tmp15Result;
  return closure_12(closure_13, { children });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
({ View: closure_7, PixelRatio: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5014);
let obj = {
  container: null,
  video: null,
  videoUnavailableWrap: null,
  videoUnavailableSpinner: null,
  unavailable: null,
  unavailableText: null,
  user: null,
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj.container = obj3;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.video = {};
let obj5 = {};
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
let obj6 = { marginTop: nativeDefault.space.PX_16 };
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
let obj7 = {
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
const obj9 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj9.alignItems = "center";
obj9.justifyContent = "center";
obj.user = obj9;
let closure_14 = createStyles.createStyles(obj);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const obj8 = { marginLeft: nativeDefault.space.PX_4, textAlign: "center" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default noop.memo(function ExternalPipViewVideo(onLayout) {
  onLayout = onLayout.onLayout;
  const tmp2 = useExternalPipParticipantDefault();
  ({ selectedParticipantStreamId, selectedParticipantUserId } = tmp2);
  const items = [selectedParticipantStreamId, selectedParticipantUserId];
  ({ participantType: arr[2], channelId, selectedParticipantSpeaking } = tmp2);
  const effect = noop.useEffect(() => {
    closure_1(dependencyMap[17]).refreshPipUi();
  }, items);
  importDefault = tmp4;
  const items1 = [null != selectedParticipantStreamId, onLayout];
  let obj = {
    style: closure_14().container,
    onLayout: noop.useCallback((arg0) => {
      if (!closure_1) {
        ExternalPipDefault.setPipContentReady();
      }
      if (onLayout != null) {
        tmp4(arg0);
      }
    }, items1),
    children: null,
  };
  if (null != selectedParticipantStreamId) {
    const obj2 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
    let tmp5Result = closure_11(ExternalPipViewVideoStream, obj2);
  } else if (null != selectedParticipantUserId) {
    const obj3 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
    tmp5Result = closure_11(ExternalPipViewVideoUser, obj3);
  } else {
    tmp5Result = closure_11(ExternalPipViewVideoUnavailable, {});
  }
  obj.children = tmp5Result;
  return closure_11(closure_7, obj);
});
