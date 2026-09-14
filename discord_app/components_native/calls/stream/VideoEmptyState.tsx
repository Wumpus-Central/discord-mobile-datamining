// === Module 9727: VideoEmptyState ===

// Module 9727 (VideoEmptyState)
import nativeDefault from "native" /* 576 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4688 */;
import StreamActionCreators from "StreamActionCreators" /* 4778 */;
import useMountEffectDefault from "useMountEffect" /* 5073 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const VideoEmptyTypes = { NONE: "NONE", STREAM_ENDED: "STREAM_ENDED", STREAM_FAILED: "STREAM_FAILED" };
const createStyles = fn(4636);
let obj3 = { container: { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 }, placeholderImage: { marginBottom: 8, width: "100%", resizeMode: "contain" }, placeholderText: null, buttonWrapper: null, buttonPill: null };
let obj4 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 };
obj3.placeholderText = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20, textAlign: "center" };
obj3.buttonWrapper = { marginTop: 16, alignSelf: "center" };
let obj5 = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20, textAlign: "center" };
obj3.buttonPill = { borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(obj3);
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
      let obj2 = { style: tmp2.placeholderImage };
      tmp16 = closure_5(stream(9728).StreamEnded, obj2);
    }
    let obj3 = { children: null };
    const items = [tmp16, ];
    const obj4 = { style: tmp2.placeholderText, children: null };
    const intl2 = stream(1114).intl;
    obj4.children = intl2.formatToMarkdownString(stream(1114).t["1Ww0Hi"], {});
    items[1] = closure_5(stream(1176).LegacyText, obj4);
    obj3.children = items;
    let tmp5Result = closure_7(closure_6, obj3);
  } else if (tmp3.STREAM_FAILED === type) {
    let tmp7 = !removeSplashImage;
    if (!removeSplashImage) {
      obj = { style: tmp2.placeholderImage };
      tmp7 = closure_5(stream(9731).StreamFailed, obj);
    }
    const obj5 = { children: null };
    const items1 = [tmp7, ];
    const obj6 = { style: tmp2.placeholderText, children: null };
    const intl = stream(1114).intl;
    obj6.children = intl.string(stream(1114).t.rSlOep);
    items1[1] = closure_5(stream(1176).LegacyText, obj6);
    obj5.children = items1;
    tmp5Result = closure_7(closure_6, obj5);
  } else if (tmp3.NONE === type) {
    tmp5Result = null;
  }
  if (null != avError) {
    let errorCode = stream(9239).getErrorInfo(avError).errorCode;
    const obj8 = stream(9239);
  } else {
    errorCode = null;
    if (type === tmp3.STREAM_FAILED) {
      errorCode = stream(9239).getErrorInfo(stream(9239).AVError.STREAM_FAILED_TO_START).errorCode;
      const obj7 = stream(9239);
    }
  }
  const items2 = [ChannelStore];
  const items3 = [stream.channelId];
  importDefault = stream(504).useStateFromStores(items2, () => ChannelStore.getChannel(stream.channelId), items3);
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
  const obj10 = {};
  const merged1 = Object.assign(merged);
  const items4 = [tmp2.container, style.style];
  obj10.style = items4;
  const items5 = [tmp5Result, , ];
  let tmp34 = null != errorCode;
  if (tmp34) {
    const obj11 = { variant: "text-sm/semibold", color: "text-muted", selectable: true, children: null };
    const intl3 = stream(1114).intl;
    const obj12 = { errorCode };
    obj11.children = intl3.formatToPlainString(stream(1114).t.ejOT95, obj12);
    tmp34 = closure_5(stream(4632).Text, obj11);
  }
  items5[1] = tmp34;
  let tmp36 = !removeCloseButton;
  if (!removeCloseButton) {
    const obj13 = { style: tmp2.buttonWrapper, children: null };
    const obj14 = { pillStyle: tmp2.buttonPill, variant: "secondary-overlay", text: null, onPress: null };
    const intl4 = stream(1114).intl;
    obj14.text = intl4.string(stream(1114).t["4EGMWL"]);
    obj14.onPress = function onPress() {
      const obj = StreamActionCreators;
      obj.stopStream(StreamKeyUtils.encodeStreamKey(stream));
    };
    obj13.children = closure_5(stream(5057).BaseTextButton, obj14);
    tmp36 = closure_5(View, obj13);
  }
  items5[2] = tmp36;
  obj10.children = items5;
  return closure_7(View, obj10);
};
export { VideoEmptyTypes };