// === Module 10771: VideoEmptyState ===

// Module 10771 (VideoEmptyState)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4831 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
noopAll;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let obj = { NONE: "NONE", STREAM_ENDED: "STREAM_ENDED", STREAM_FAILED: "STREAM_FAILED" };
obj = { container: null, placeholderImage: null, placeholderText: null, buttonWrapper: null, buttonPill: null };
obj = { alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_700, padding: 8 };
obj[0] = obj;
obj[1] = { marginBottom: 8, width: "100%", resizeMode: "contain" };
createCacheKey = { color: ThemesDefault.unsafe_rawColors.WHITE, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20, textAlign: "center" };
obj[2] = createCacheKey;
obj[3] = { marginTop: 16, alignSelf: "center" };
obj[4] = { borderRadius: ThemesDefault.radii.round };
let closure_9 = createCacheKey.createStyles(obj);
let obj2 = { borderRadius: ThemesDefault.radii.round };
const result = require("set").fileFinishedImporting("components_native/calls/stream/VideoEmptyState.tsx");

export default function VideoEmptyState(style) {
  ({ type, avError, removeSplashImage, removeCloseButton, stream } = style);
  const merged = Object.assign(style, Object.create(null));
  importDefault = undefined;
  const tmp2 = callback2();
  if (obj.STREAM_ENDED === type) {
    let tmp16 = !removeSplashImage;
    if (!removeSplashImage) {
      obj = { style: null };
      obj[0] = tmp2.placeholderImage;
      tmp16 = callback(stream(10772).StreamEnded, obj);
    }
    obj = { children: null };
    const items = [tmp16, ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp2.placeholderText;
    const intl2 = stream(1236).intl;
    obj1[1] = intl2.formatToMarkdownString(stream(1236).t["1Ww0Hi"], {});
    items[1] = callback(stream(1297).LegacyText, obj1);
    obj[0] = items;
    let tmp5Result = closure_7(closure_6, obj);
    const tmp14 = closure_7;
    const tmp15 = closure_6;
  } else if (tmp3.STREAM_FAILED === type) {
    let tmp7 = !removeSplashImage;
    if (!removeSplashImage) {
      obj = { style: null };
      obj[0] = tmp2.placeholderImage;
      tmp7 = callback(stream(10775).StreamFailed, obj);
    }
    let obj2 = { children: null };
    const items1 = [tmp7, ];
    let obj3 = { style: null, children: null };
    obj3[0] = tmp2.placeholderText;
    const intl = stream(1236).intl;
    obj3[1] = intl.string(stream(1236).t.rSlOep);
    items1[1] = callback(stream(1297).LegacyText, obj3);
    obj2[0] = items1;
    tmp5Result = closure_7(closure_6, obj2);
    const tmp5 = closure_7;
    const tmp6 = closure_6;
  } else if (tmp3.NONE === type) {
    tmp5Result = null;
  }
  if (null != avError) {
    let obj7 = stream(9317);
    let errorCode = obj7.getErrorInfo(avError).errorCode;
  } else {
    errorCode = null;
    if (type === tmp3.STREAM_FAILED) {
      let obj6 = stream(9317);
      errorCode = obj6.getErrorInfo(stream(9317).AVError.STREAM_FAILED_TO_START).errorCode;
    }
  }
  let obj8 = stream(589);
  const items2 = [closure_4];
  const items3 = [stream.channelId];
  importDefault = obj8.useStateFromStores(items2, () => closure_1_4.getChannel(stream.channelId), items3);
  useMountLayoutEffectDefault(() => {
    let isGuildStageVoiceResult;
    if (closure_1 != null) {
      isGuildStageVoiceResult = closure_1.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      const obj2 = stream(closure_1_2[14]);
      obj2.stopStream(stream(closure_1_2[15]).encodeStreamKey(stream));
      const obj3 = stream(closure_1_2[15]);
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
    const intl3 = tmp28(1236).intl;
    obj6 = { errorCode: null };
    obj6[0] = errorCode;
    obj5[3] = intl3.formatToPlainString(tmp28(1236).t.ejOT95, obj6);
    tmp34 = callback(tmp28(4376).Text, obj5);
  }
  items5[1] = tmp34;
  let tmp36 = !removeCloseButton;
  if (!removeCloseButton) {
    obj7 = { style: null, children: null };
    obj7[0] = tmp2.buttonWrapper;
    obj8 = { pillStyle: null, variant: "secondary", text: null, onPress: null };
    obj8[0] = tmp2.buttonPill;
    const intl4 = tmp28(1236).intl;
    obj8[2] = intl4.string(tmp28(1236).t["4EGMWL"]);
    obj8[3] = function onPress() {
      obj = stream(closure_1_2[14]);
      obj.stopStream(stream(closure_1_2[15]).encodeStreamKey(stream));
    };
    obj7[1] = callback(tmp28(4816).BaseTextButton, obj8);
    tmp36 = callback(tmp32, obj7);
  }
  items5[2] = tmp36;
  obj4.children = items5;
  return closure_7(View, obj4);
};
export const VideoEmptyTypes = obj;