// === Module 9597: VideoEmptyState ===

// Module 9597 (VideoEmptyState)
import nativeDefault from "native" /* 576 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import StreamActionCreators from "StreamActionCreators" /* 4702 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let VideoEmptyTypes = { NONE: "NONE", STREAM_ENDED: "STREAM_ENDED", STREAM_FAILED: "STREAM_FAILED" };
fn(4560);
VideoEmptyTypes = { container: null, placeholderImage: null, placeholderText: null, buttonWrapper: null, buttonPill: null };
VideoEmptyTypes = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 };
VideoEmptyTypes.container = VideoEmptyTypes;
VideoEmptyTypes.placeholderImage = { marginBottom: 8, width: "100%", resizeMode: "contain" };
const createStyles = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20, textAlign: "center" };
VideoEmptyTypes.placeholderText = createStyles;
VideoEmptyTypes.buttonWrapper = { marginTop: 16, alignSelf: "center" };
VideoEmptyTypes.buttonPill = { borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(VideoEmptyTypes);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/VideoEmptyState.tsx");

export default function VideoEmptyState(style) {
  ({ type, avError, removeSplashImage, removeCloseButton, stream } = style);
  const merged = Object.assign(style, Object.assign({ type: 0, style: 0, avError: 0, removeSplashImage: 0, removeCloseButton: 0, stream: 0 }));
  importDefault = undefined;
  const tmp2 = closure_9();
  if (obj.STREAM_ENDED === type) {
    let tmp16 = !removeSplashImage;
    if (!removeSplashImage) {
      obj = { style: tmp2.placeholderImage };
      tmp16 = closure_5(stream(9598).StreamEnded, obj);
    }
    obj = { children: null };
    const items = [tmp16, ];
    const obj1 = { style: tmp2.placeholderText, children: null };
    const intl2 = stream(1114).intl;
    obj1.children = intl2.formatToMarkdownString(stream(1114).t["1Ww0Hi"], {});
    items[1] = closure_5(stream(1178).LegacyText, obj1);
    obj.children = items;
    let tmp5Result = closure_7(closure_6, obj);
  } else if (tmp3.STREAM_FAILED === type) {
    let tmp7 = !removeSplashImage;
    if (!removeSplashImage) {
      obj = { style: tmp2.placeholderImage };
      tmp7 = closure_5(stream(9601).StreamFailed, obj);
    }
    let obj2 = { children: null };
    const items1 = [tmp7, ];
    let obj3 = { style: tmp2.placeholderText, children: null };
    const intl = stream(1114).intl;
    obj3.children = intl.string(stream(1114).t.rSlOep);
    items1[1] = closure_5(stream(1178).LegacyText, obj3);
    obj2.children = items1;
    tmp5Result = closure_7(closure_6, obj2);
  } else if (tmp3.NONE === type) {
    tmp5Result = null;
  }
  if (null != avError) {
    let obj7 = stream(9110);
    let errorCode = obj7.getErrorInfo(avError).errorCode;
  } else {
    errorCode = null;
    if (type === tmp3.STREAM_FAILED) {
      let obj6 = stream(9110);
      errorCode = obj6.getErrorInfo(stream(9110).AVError.STREAM_FAILED_TO_START).errorCode;
    }
  }
  let obj8 = stream(504);
  const items2 = [ChannelStore];
  const items3 = [stream.channelId];
  importDefault = obj8.useStateFromStores(items2, () => ChannelStore.getChannel(stream.channelId), items3);
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
  const obj4 = {};
  const merged1 = Object.assign(merged);
  const items4 = [tmp2.container, style.style];
  obj4.style = items4;
  const items5 = [tmp5Result, , ];
  let tmp34 = null != errorCode;
  if (tmp34) {
    const obj5 = { variant: "text-sm/semibold", color: "text-muted", selectable: true, children: null };
    const intl3 = stream(1114).intl;
    obj6 = { errorCode };
    obj5.children = intl3.formatToPlainString(stream(1114).t.ejOT95, obj6);
    tmp34 = closure_5(stream(4556).Text, obj5);
  }
  items5[1] = tmp34;
  let tmp36 = !removeCloseButton;
  if (!removeCloseButton) {
    obj7 = { style: tmp2.buttonWrapper, children: null };
    obj8 = { pillStyle: tmp2.buttonPill, variant: "secondary-overlay", text: null, onPress: null };
    const intl4 = stream(1114).intl;
    obj8.text = intl4.string(stream(1114).t["4EGMWL"]);
    obj8.onPress = function onPress() {
      obj = StreamActionCreators;
      obj.stopStream(StreamKeyUtils.encodeStreamKey(stream));
    };
    obj7.children = closure_5(stream(4976).BaseTextButton, obj8);
    tmp36 = closure_5(View, obj7);
  }
  items5[2] = tmp36;
  obj4.children = items5;
  return closure_7(View, obj4);
};
export { VideoEmptyTypes };