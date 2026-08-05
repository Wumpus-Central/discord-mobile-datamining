// discord_app/modules/external_pip/ExternalPipViewVideo.android.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "useExternalPipParticipant";
import get_ActivityIndicator from "updateVideoSize";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ParticipantTypes } from "ParticipantTypes";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c5;
let closure_12;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
function ExternalPipViewVideoUnavailable(wasStream) {
  wasStream = wasStream.wasStream;
  const tmp = callback3();
  let obj = { style: tmp.unavailable, children: null };
  if (wasStream) {
    obj = { style: null };
    obj[0] = tmp.unavaiableImage;
    let tmp4Result = tmp4(tmp5(10596).StreamEnded, obj);
    let tmp8 = tmp4;
    let tmp10 = tmp5;
  } else {
    tmp4Result = tmp4(tmp5(4241).CircleInformationIcon, {});
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
  items[1] = tmp8(tmp10(4281).Text, obj);
  obj[1] = items;
  return closure_12(closure_6, obj);
}
function ExternalPipViewVideoUser(arg0) {
  let importDefault;
  let require;
  let speaking;
  ({ userId: require, channelId: importDefault, speaking } = arg0);
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getUser(closure_0));
  require(589) /* initialize */;
  [][0] = ensureGuildLoaded;
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
  first = undefined;
  let callback;
  let obj = streamId(first[15]);
  first = 300;
  first = undefined;
  callback = undefined;
  let importAllResult;
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(streamId.userId, { location: "ExternalPipViewVideoStream" });
  const tmp2 = callback(importAllResult.useState(undefined), 2);
  first = tmp2[0];
  callback = tmp2[1];
  const tmp4 = callback(importAllResult.useState(false), 2);
  importAllResult = tmp4[1];
  let items = [streamId];
  const items1 = [first, 300];
  callback = importAllResult.useCallback(() => value(streamId), items);
  const effect = importAllResult.useEffect(() => {
    if (null == first) {
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
  first = tmp7;
  const items2 = [tmp7, first];
  const memo = importAllResult.useMemo(() => {
    const items = [first.video, ];
    let num = 1;
    if (null == first) {
      num = 0;
    }
    items[1] = { opacity: num };
    return items;
  }, items2);
  const token = streamId(first[16]).useToken(first(first[8]).colors.TEXT_FEEDBACK_INFO);
  const value = closure_7.get();
  callback = value;
  const items3 = [streamId, value];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    let height;
    let width;
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      let obj = streamId(first[17]);
      obj = { width: null, height: null };
      obj[0] = width * _slicedToArray;
      obj[1] = height * _slicedToArray;
      obj.updateVideoSize(tmp, obj, 1);
    }
  }, items3);
  const children = [callback2(first(first[18]), { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: memo, streamId, onReady: callback, onLayout: callback1 }), ];
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
obj.backgroundColor = require("Themes").colors.BACKGROUND_SURFACE_HIGH;
obj[0] = obj;
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj[1] = createCacheKey;
const obj2 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.margin = require("Themes").space.PX_16;
obj2.borderRadius = require("Themes").radii.sm;
obj2.justifyContent = "center";
obj2.alignContent = "center";
obj2.flexDirection = "row";
obj2.alignItems = "center";
obj2.flexWrap = "wrap";
obj2.flex = 1;
obj[2] = obj2;
obj[3] = { marginTop: require("Themes").space.PX_16 };
const obj3 = { marginTop: require("Themes").space.PX_16 };
obj[4] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm, padding: require("Themes").space.PX_8, margin: require("Themes").space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
const obj4 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm, padding: require("Themes").space.PX_8, margin: require("Themes").space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
obj[5] = { marginLeft: require("Themes").space.PX_4, textAlign: "center" };
const obj5 = { marginLeft: require("Themes").space.PX_4, textAlign: "center" };
obj[6] = { marginBottom: require("Themes").space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" };
const obj7 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7.backgroundColor = require("Themes").colors.BACKGROUND_BASE_LOWEST;
obj7.borderRadius = require("Themes").radii.sm;
obj7.margin = require("Themes").space.PX_8;
obj7.alignItems = "center";
obj7.justifyContent = "center";
obj[7] = obj7;
let closure_14 = createCacheKey.createStyles(obj);
const obj6 = { marginBottom: require("Themes").space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" };
const memoResult = importAllResult.memo(function ExternalPipViewVideo(onLayout) {
  let channelId;
  let focusedParticipantType;
  let selectedParticipantSpeaking;
  let selectedParticipantStreamId;
  let selectedParticipantUserId;
  const tmp2 = importDefault(15949)();
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
    const obj1 = { wasStream: null };
    obj1[0] = tmp7;
    tmp4Result = tmp4(ExternalPipViewVideoUnavailable, obj1);
    const tmp6 = ExternalPipViewVideoUnavailable;
  }
  obj[2] = tmp4Result;
  return closure_11(closure_6, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default memoResult;