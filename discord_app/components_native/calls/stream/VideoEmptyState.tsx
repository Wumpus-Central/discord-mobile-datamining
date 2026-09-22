// === Module 9693: VideoEmptyState ===

// Module 9693 (VideoEmptyState)
import nativeDefault from "native" /* 576 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4809 */;
import StreamActionCreators from "StreamActionCreators" /* 4899 */;
import useMountEffectDefault from "useMountEffect" /* 5204 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2042 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const VideoEmptyTypes = { NONE: "NONE", STREAM_ENDED: "STREAM_ENDED", STREAM_FAILED: "STREAM_FAILED" };
const createStyles = fn(4757);
let obj3 = { container: { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 }, placeholderImage: { marginBottom: 8, width: "100%", resizeMode: "contain" }, placeholderText: null, buttonWrapper: null };
let obj4 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 };
obj3.placeholderText = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20, textAlign: "center" };
obj3.buttonWrapper = { marginTop: 16, alignSelf: "center" };
let closure_9 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/VideoEmptyState.tsx");

export default function VideoEmptyState(style) {
  ({ type, avError, removeSplashImage, removeCloseButton, stream } = style);
  const merged = Object.assign(style, Object.assign({ type: 0, style: 0, avError: 0, removeSplashImage: 0, removeCloseButton: 0, stream: 0 }));
  importDefault = undefined;
  const tmp2 = closure_9();
  if (obj.STREAM_ENDED === type) {
    let tmp10 = !removeSplashImage;
    if (!removeSplashImage) {
      let obj2 = { style: tmp2.placeholderImage };
      tmp10 = closure_5(stream(9694).StreamEnded, obj2);
    }
    let obj3 = { children: null };
    const items = [tmp10, ];
    const obj4 = { style: tmp2.placeholderText, children: null };
    const intl2 = stream(1115).intl;
    obj4.children = intl2.formatToMarkdownString(stream(1115).t["1Ww0Hi"], {});
    items[1] = closure_5(stream(1177).LegacyText, obj4);
    obj3.children = items;
    let tmp8Result = closure_7(closure_6, obj3);
  } else if (tmp3.STREAM_FAILED === type) {
    obj = { style: tmp2.placeholderText, children: null };
    const intl = stream(1115).intl;
    obj.children = intl.string(stream(1115).t.rSlOep);
    tmp8Result = closure_5(stream(1177).LegacyText, obj);
  } else if (tmp3.NONE === type) {
    tmp8Result = null;
  }
  if (null != avError) {
    let errorCode = stream(9692).getErrorInfo(avError).errorCode;
    const obj6 = stream(9692);
  } else {
    errorCode = null;
    if (type === tmp3.STREAM_FAILED) {
      errorCode = stream(9692).getErrorInfo(stream(9692).AVError.STREAM_FAILED_TO_START).errorCode;
      const obj5 = stream(9692);
    }
  }
  const items1 = [ChannelStore];
  const items2 = [stream.channelId];
  importDefault = stream(504).useStateFromStores(items1, () => ChannelStore.getChannel(stream.channelId), items2);
  useMountEffectDefault(() => {
    let isGuildStageVoiceResult;
    if (guildStageVoice != null) {
      isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      const obj2 = StreamActionCreators;
      obj2.stopStream(StreamKeyUtils.encodeStreamKey(stream));
    }
  });
  const obj8 = {};
  const merged1 = Object.assign(merged);
  const items3 = [tmp2.container, style.style];
  obj8.style = items3;
  const items4 = [tmp8Result, , ];
  let tmp28 = null != errorCode;
  if (tmp28) {
    const obj9 = { variant: "text-sm/semibold", color: "text-muted", selectable: true, children: null };
    const intl3 = stream(1115).intl;
    const obj10 = { errorCode };
    obj9.children = intl3.formatToPlainString(stream(1115).t.ejOT95, obj10);
    tmp28 = closure_5(stream(4753).Text, obj9);
  }
  items4[1] = tmp28;
  let tmp30 = !removeCloseButton;
  if (!removeCloseButton) {
    const obj11 = { style: tmp2.buttonWrapper, children: null };
    const obj12 = { variant: "secondary", size: "md", shrink: true, grow: false, text: null, onPress: null };
    const intl4 = stream(1115).intl;
    obj12.text = intl4.string(stream(1115).t["4EGMWL"]);
    obj12.onPress = function onPress() {
      const obj = StreamActionCreators;
      obj.stopStream(StreamKeyUtils.encodeStreamKey(stream));
    };
    obj11.children = closure_5(stream(5187).Button, obj12);
    tmp30 = closure_5(View, obj11);
  }
  items4[2] = tmp30;
  obj8.children = items4;
  return closure_7(View, obj8);
};
export { VideoEmptyTypes };