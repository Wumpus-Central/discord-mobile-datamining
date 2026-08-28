// discord_app/modules/external_pip/ExternalPipViewVideo.android.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useExternalPipParticipantDefault from "useExternalPipParticipant.android.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../stores/ChannelStore.tsx";
import closure_9 from "../../stores/UserStore.tsx";
import { ParticipantTypes } from "../calls/CallConstants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function ExternalPipViewVideoUnavailable(wasStream) {
  wasStream = wasStream.wasStream;
  const tmp = callback3();
  let obj = { style: tmp.unavailable, children: null };
  if (wasStream) {
    obj = { style: null };
    obj[0] = tmp.unavaiableImage;
    let tmp4Result = tmp4(tmp5(9506).StreamEnded, obj);
    let tmp8 = tmp4;
    let tmp10 = tmp5;
  } else {
    tmp4Result = tmp4(tmp5(4401).CircleInformationIcon, {});
    tmp8 = tmp4;
    tmp10 = tmp5;
  }
  const items = [tmp4Result, ];
  obj = { variant: "text-md/semibold", style: tmp.unavailableText, lineClamp: 1, children: null };
  const intl = tmp10(1236).intl;
  if (wasStream) {
    let result = intl.formatToMarkdownString(tmp10(1236).t["1Ww0Hi"], {});
  } else {
    result = intl.string(tmp10(1236).t.Nzo5nz);
  }
  obj[3] = result;
  items[1] = tmp8(tmp10(4442).Text, obj);
  obj[1] = items;
  return closure_12(closure_6, obj);
}
function ExternalPipViewVideoUser(arg0) {
  ({ userId: require, channelId: importDefault, speaking } = arg0);
  let obj = initialize;
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_9.getUser(closure_0));
  initialize;
  [][0] = closure_8;
  obj = { style: callback3().user, children: null };
  let tmp7Result = null;
  if (null != stateFromStores) {
    obj = { user: null, avatarDecoration: null, guildId: null, size: null, animate: null, speaking: null };
    obj[0] = stateFromStores;
    obj[1] = stateFromStores.avatarDecoration;
    obj[2] = tmp6;
    obj[3] = tmp2(1297).AvatarSizes.XXLARGE;
    obj[4] = speaking;
    obj[5] = speaking;
    tmp7Result = tmp7(tmp2(1297).Avatar, obj);
  }
  obj[1] = tmp7Result;
  return closure_11(closure_6, obj);
}
function ExternalPipViewVideoStream(streamId) {
  streamId = streamId.streamId;
  let first;
  dependencyMap = undefined;
  let callback;
  let obj = streamId(9513);
  first = 300;
  dependencyMap = undefined;
  callback = undefined;
  importAllResult = undefined;
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(streamId.userId, { location: "ExternalPipViewVideoStream" });
  const tmp2 = callback(importAllResult.useState(undefined), 2);
  first = tmp2[0];
  dependencyMap = first;
  callback = tmp2[1];
  const tmp4 = callback(importAllResult.useState(false), 2);
  importAllResult = tmp4[1];
  let items = [streamId];
  const items1 = [first, 300];
  callback = importAllResult.useCallback(() => value(streamId), items);
  const effect = importAllResult.useEffect(() => {
    if (null == closure_2) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback(true);
      }, first);
      return () => {
        clearTimeout(closure_0);
      };
    } else {
      callback(false);
    }
  }, items1);
  const tmp7 = callback3();
  dependencyMap = tmp7;
  const items2 = [tmp7, first];
  const memo = importAllResult.useMemo(() => {
    const items = [video.video, ];
    let num = 1;
    if (null == first) {
      num = 0;
    }
    items[1] = { opacity: num };
    return items;
  }, items2);
  const token = streamId(4166).useToken(first(712).colors.TEXT_FEEDBACK_INFO);
  const value = closure_7.get();
  callback = value;
  const items3 = [streamId, value];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      let obj = streamId(video[17]);
      obj = { width: null, height: null };
      obj[0] = width * closure_3;
      obj[1] = height * closure_3;
      obj.updateVideoSize(tmp, obj, 1);
    }
  }, items3);
  const children = [callback2(first(9524), { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: memo, streamId, onReady: callback, onLayout: callback1 }), ];
  let tmp14Result = null;
  if (null == first) {
    tmp14Result = null;
    if (tmp4[0]) {
      obj = { style: null, children: null };
      obj[0] = tmp7.videoUnavailableWrap;
      obj = { style: null, size: "large", color: null };
      obj[0] = tmp7.videoUnavailableSpinner;
      obj[2] = token;
      obj[1] = tmp14(closure_5, obj);
      tmp14Result = tmp14(closure_6, obj);
    }
  }
  children[1] = tmp14Result;
  return closure_12(closure_13, { children });
}
let c4 = importAllResult;
({ ActivityIndicator: c5, StyleSheet, View: closure_6, PixelRatio: error } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
let obj = { container: null, video: null, videoUnavailableWrap: null, videoUnavailableSpinner: null, unavailable: null, unavailableText: null, unavaiableImage: null, user: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = ThemesDefault.colors.BACKGROUND_SURFACE_HIGH;
obj[0] = obj;
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj[1] = createCacheKey;
const obj2 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.margin = ThemesDefault.space.PX_16;
obj2.borderRadius = ThemesDefault.radii.sm;
obj2.justifyContent = "center";
obj2.alignContent = "center";
obj2.flexDirection = "row";
obj2.alignItems = "center";
obj2.flexWrap = "wrap";
obj2.flex = 1;
obj[2] = obj2;
obj[3] = { marginTop: ThemesDefault.space.PX_16 };
const obj3 = { marginTop: ThemesDefault.space.PX_16 };
obj[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm, padding: ThemesDefault.space.PX_8, margin: ThemesDefault.space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
const obj4 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm, padding: ThemesDefault.space.PX_8, margin: ThemesDefault.space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
obj[5] = { marginLeft: ThemesDefault.space.PX_4, textAlign: "center" };
const obj5 = { marginLeft: ThemesDefault.space.PX_4, textAlign: "center" };
obj[6] = { marginBottom: ThemesDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" };
const obj7 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7.backgroundColor = ThemesDefault.colors.BACKGROUND_BASE_LOWEST;
obj7.borderRadius = ThemesDefault.radii.sm;
obj7.margin = ThemesDefault.space.PX_8;
obj7.alignItems = "center";
obj7.justifyContent = "center";
obj[7] = obj7;
let closure_14 = createCacheKey.createStyles(obj);
const obj6 = { marginBottom: ThemesDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" };
const memoResult = importAllResult.memo(function ExternalPipViewVideo(onLayout) {
  const tmp2 = useExternalPipParticipantDefault();
  ({ selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType } = tmp2);
  const items = [selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType];
  ({ channelId, selectedParticipantSpeaking } = tmp2);
  const effect = importAllResult.useEffect(() => {
    callback(table[20]).refreshPipUi();
  }, items);
  let obj = { style: callback3().container, onLayout: onLayout.onLayout, children: null };
  if (null != selectedParticipantStreamId) {
    obj = { streamId: null, userId: null };
    obj[0] = selectedParticipantStreamId;
    obj[1] = selectedParticipantUserId;
    let tmp4Result = tmp4(ExternalPipViewVideoStream, obj);
  } else if (null != selectedParticipantUserId) {
    obj = { userId: null, channelId: null, speaking: null };
    obj[0] = selectedParticipantUserId;
    obj[1] = channelId;
    obj[2] = selectedParticipantSpeaking;
    tmp4Result = tmp4(ExternalPipViewVideoUser, obj);
  } else {
    let tmp7 = focusedParticipantType === ParticipantTypes.STREAM;
    if (!tmp7) {
      tmp7 = focusedParticipantType === ParticipantTypes.HIDDEN_STREAM;
    }
    obj1 = { wasStream: null };
    obj1[0] = tmp7;
    tmp4Result = tmp4(ExternalPipViewVideoUnavailable, obj1);
    const tmp6 = ExternalPipViewVideoUnavailable;
  }
  obj[2] = tmp4Result;
  return closure_11(closure_6, obj);
});
let result = require("set").fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default memoResult;