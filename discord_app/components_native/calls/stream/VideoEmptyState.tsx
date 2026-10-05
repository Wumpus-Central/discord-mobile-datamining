// === Module 9096: VideoEmptyState ===

// Module 9096 (VideoEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4942 */;
import StreamActionCreators from "StreamActionCreators" /* 5032 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import StreamEnded from "StreamEnded" /* 9097 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let closure_3 = ["type", "style", "avError", "removeSplashImage", "removeCloseButton", "stream"];
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const VideoEmptyTypes = { NONE: "NONE", STREAM_ENDED: "STREAM_ENDED", STREAM_FAILED: "STREAM_FAILED" };
let createStyles = createStyles_mod;
let obj2 = { container: obj3, placeholderImage: { marginBottom: 8, width: "100%", resizeMode: "contain" }, placeholderText: obj4, buttonWrapper: { marginTop: 16, alignSelf: "center" } };
obj3 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 };
createStyles = createStyles.createStyles;
obj4 = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20, textAlign: "center" };
let closure_11 = createStyles(obj2);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Button;
  let avError;
  let channelId;
  let closure_0;
  let closure_2;
  let intl;
  let intl2;
  let obj2;
  let obj3;
  let obj5;
  let obj7;
  let removeCloseButton;
  let removeSplashImage;
  let stateFromStores;
  let stream;
  let style;
  let tmp10;
  let tmp26;
  let tmp4;
  let tmp6;
  let tmp9;
  let type;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(39);
  if (cResult[0] !== arg0) {
    ({ type, style, avError, removeSplashImage } = arg0);
    _require = removeSplashImage;
    ({ removeCloseButton, stream } = arg0);
    importDefault = stream;
    cResult[0] = arg0;
    cResult[1] = avError;
    cResult[2] = _objectWithoutProperties(arg0, stateFromStores);
    cResult[3] = removeCloseButton;
    cResult[4] = removeSplashImage;
    cResult[5] = stream;
    cResult[6] = style;
    cResult[7] = type;
    tmp10 = type;
    tmp9 = style;
    tmp6 = removeCloseButton;
    tmp4 = avError;
    const tmp13 = _objectWithoutProperties(arg0, stateFromStores);
  } else {
    tmp4 = cResult[1];
    tmp6 = cResult[3];
    _require = cResult[4];
    importDefault = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  const tmp14 = closure_11();
  dependencyMap = tmp14;
  if (cResult[8] === removeSplashImage) {
    if (cResult[9] === tmp14.placeholderImage) {
      let errorCode;
      let tmp22;
      let tmp24;
      if (cResult[12] !== tmp14.placeholderText) {
        class R {
          constructor() {
            let intl;
            const obj = { style: closure_2.placeholderText, children: intl.string(intl5.t.rSlOep) };
            const LegacyText = native.LegacyText;
            intl = intl5.intl;
            return metroImportDefault(LegacyText, obj);
          }
        }
        cResult[12] = tmp14.placeholderText;
        cResult[13] = R;
      } else {
        class R {
          constructor() {
            let intl;
            const obj = { style: closure_2.placeholderText, children: intl.string(intl5.t.rSlOep) };
            const LegacyText = native.LegacyText;
            intl = intl5.intl;
            return metroImportDefault(LegacyText, obj);
          }
        }
      }
      const tmp17 = obj;
      if (obj.STREAM_ENDED === tmp10) {
        class R {
          constructor() {
            let intl;
            const obj = { style: closure_2.placeholderText, children: intl.string(intl5.t.rSlOep) };
            const LegacyText = native.LegacyText;
            intl = intl5.intl;
            return metroImportDefault(LegacyText, obj);
          }
        }
      } else {
        class R {
          constructor() {
            let intl;
            const obj = { style: closure_2.placeholderText, children: intl.string(intl5.t.rSlOep) };
            const LegacyText = native.LegacyText;
            intl = intl5.intl;
            return metroImportDefault(LegacyText, obj);
          }
        }
      }
      if (null != tmp4) {
        class R {
          constructor() {
            let intl;
            const obj = { style: closure_2.placeholderText, children: intl.string(intl5.t.rSlOep) };
            const LegacyText = native.LegacyText;
            intl = intl5.intl;
            return metroImportDefault(LegacyText, obj);
          }
        }
        errorCode = obj3.getErrorInfo(tmp4).errorCode;
      } else {
        class R {
          constructor() {
            let intl;
            const obj = { style: closure_2.placeholderText, children: intl.string(intl5.t.rSlOep) };
            const LegacyText = native.LegacyText;
            intl = intl5.intl;
            return metroImportDefault(LegacyText, obj);
          }
        }
        if (tmp10 === tmp17.STREAM_FAILED) {
          class R {
            constructor() {
              let intl;
              const obj = { style: closure_2.placeholderText, children: intl.string(intl5.t.rSlOep) };
              const LegacyText = native.LegacyText;
              intl = intl5.intl;
              return metroImportDefault(LegacyText, obj);
            }
          }
          errorCode = obj2.getErrorInfo(tmp(9095).AVError.STREAM_FAILED_TO_START).errorCode;
        }
      }
      const _Symbol = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            let intl;
            const obj = { style: closure_2.placeholderText, children: intl.string(intl5.t.rSlOep) };
            const LegacyText = native.LegacyText;
            intl = intl5.intl;
            return metroImportDefault(LegacyText, obj);
          }
        }
        let items = [ChannelStore];
        cResult[18] = items;
        tmp22 = items;
      } else {
        class R {
          constructor() {
            let intl;
            const obj = { style: closure_2.placeholderText, children: intl.string(intl5.t.rSlOep) };
            const LegacyText = native.LegacyText;
            intl = intl5.intl;
            return metroImportDefault(LegacyText, obj);
          }
        }
      }
      if (cResult[19] !== stream.channelId) {
        class N {
          constructor() {
            return ChannelStore.getChannel(channelId.channelId);
          }
        }
        const items1 = [stream.channelId];
        cResult[19] = stream.channelId;
        cResult[20] = N;
        cResult[21] = items1;
        tmp24 = items1;
      } else {
        class N {
          constructor() {
            return ChannelStore.getChannel(channelId.channelId);
          }
        }
        tmp24 = cResult[21];
      }
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(tmp22, N, tmp24);
      if (cResult[22] === stateFromStores) {
        class N {
          constructor() {
            return ChannelStore.getChannel(channelId.channelId);
          }
        }
        useMountEffectDefault(tmp26);
        if (cResult[25] === tmp9) {
          class N {
            constructor() {
              return ChannelStore.getChannel(channelId.channelId);
            }
          }
          let tmp31 = null != errorCode;
          if (tmp31) {
            class N {
              constructor() {
                return ChannelStore.getChannel(channelId.channelId);
              }
            }
            const obj4 = { variant: "text-sm/semibold", color: "text-muted", selectable: true, children: intl.formatToPlainString(tmp(1126).t.ejOT95, obj5) };
            const Text = tmp(4886).Text;
            intl = tmp(1126).intl;
            obj5 = { errorCode };
            tmp31 = closure_7(Text, obj4);
          }
          if (cResult[28] === tmp6) {
            class N {
              constructor() {
                return ChannelStore.getChannel(channelId.channelId);
              }
            }
          }
          let tmp33 = !tmp6;
          if (tmp33) {
            class N {
              constructor() {
                return ChannelStore.getChannel(channelId.channelId);
              }
            }
            const obj6 = { style: tmp14.buttonWrapper, children: closure_7(Button, obj7) };
            obj7 = {
              variant: "secondary",
              size: "md",
              shrink: true,
              grow: false,
              text: intl2.string(tmp(1126).t["4EGMWL"]),
              onPress() {
                          const stopStream = StreamActionCreators.stopStream;
                          StreamActionCreators;
                          const obj = StreamKeyUtils;
                          stopStream(obj.encodeStreamKey(channelId));
                        }
            };
            Button = tmp(5594).Button;
            intl2 = tmp(1126).intl;
            tmp33 = closure_7(View, obj6);
          }
          cResult[28] = tmp6;
          cResult[29] = stream;
          cResult[30] = tmp14.buttonWrapper;
          cResult[31] = tmp33;
        }
        const items2 = [tmp14.container, tmp9];
        cResult[25] = tmp9;
        cResult[26] = tmp14.container;
        cResult[27] = items2;
      }
      const fn2 = function k() {
        let isGuildStageVoiceResult;
        if (stateFromStores != null) {
          isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          const stopStream = StreamActionCreators.stopStream;
          StreamActionCreators;
          const obj2 = StreamKeyUtils;
          stopStream(obj2.encodeStreamKey(channelId));
        }
      };
      cResult[22] = stateFromStores;
      cResult[23] = stream;
      cResult[24] = fn2;
      tmp26 = fn2;
    }
  }
  const fn = function x() {
    let intl;
    let items;
    let tmp3 = !closure_0;
    if (tmp3) {
      const obj = { style: closure_2.placeholderImage };
      tmp3 = metroImportDefault(StreamEnded.StreamEnded, obj);
    }
    const obj2 = { children: items };
    items = [tmp3, ];
    const obj3 = { style: closure_2.placeholderText, children: intl.formatToMarkdownString(intl5.t["1Ww0Hi"], {}) };
    const LegacyText = native.LegacyText;
    intl = intl5.intl;
    items[1] = metroImportDefault(LegacyText, obj3);
    return React4(metroImportAll, obj2);
  };
  cResult[8] = removeSplashImage;
  cResult[9] = tmp14.placeholderImage;
  cResult[10] = tmp14.placeholderText;
  cResult[11] = fn;
}) : ((style) => {
  let Button;
  let avError;
  let errorCode;
  let guildStageVoice;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items3;
  let items4;
  let obj;
  let obj10;
  let obj12;
  let removeCloseButton;
  let removeSplashImage;
  let stream;
  let tmp8Result;
  let type;
  ({ type, avError, removeSplashImage, removeCloseButton, stream } = style);
  style = style.style;
  const merged = Object.assign(style, Object.assign({ type: 0, style: 0, avError: 0, removeSplashImage: 0, removeCloseButton: 0, stream: 0 }));
  importDefault = undefined;
  const tmp2 = closure_11();
  if (obj.STREAM_ENDED === type) {
    let tmp10 = !removeSplashImage;
    if (tmp10) {
      let obj2 = { style: tmp2.placeholderImage };
      tmp10 = closure_7(stream(9097).StreamEnded, obj2);
    }
    const obj3 = { children: items };
    items = [tmp10, ];
    const obj4 = { style: tmp2.placeholderText, children: intl2.formatToMarkdownString(stream(1126).t["1Ww0Hi"], {}) };
    const LegacyText2 = stream(1188).LegacyText;
    intl2 = stream(1126).intl;
    items[1] = closure_7(LegacyText2, obj4);
    tmp8Result = closure_9(closure_8, obj3);
  } else if (obj.STREAM_FAILED === type) {
    obj = { style: tmp2.placeholderText, children: intl.string(stream(1126).t.rSlOep) };
    const LegacyText = stream(1188).LegacyText;
    intl = stream(1126).intl;
    tmp8Result = closure_7(LegacyText, obj);
  } else if (obj.NONE === type) {
    tmp8Result = null;
  }
  if (null != avError) {
    const obj6 = stream(9095);
    errorCode = obj6.getErrorInfo(avError).errorCode;
  } else {
    errorCode = null;
    if (type === obj.STREAM_FAILED) {
      const obj5 = stream(9095);
      errorCode = obj5.getErrorInfo(stream(9095).AVError.STREAM_FAILED_TO_START).errorCode;
    }
  }
  const items1 = [ChannelStore];
  const items2 = [stream.channelId];
  const obj7 = stream(504);
  importDefault = obj7.useStateFromStores(items1, () => ChannelStore.getChannel(stream.channelId), items2);
  useMountEffectDefault(() => {
    let isGuildStageVoiceResult;
    if (guildStageVoice != null) {
      isGuildStageVoiceResult = guildStageVoice.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      const stopStream = StreamActionCreators.stopStream;
      StreamActionCreators;
      const obj2 = StreamKeyUtils;
      stopStream(obj2.encodeStreamKey(stream));
    }
  });
  const obj8 = { style: items3, children: items4 };
  const merged1 = Object.assign(merged);
  items3 = [tmp2.container, style];
  items4 = [tmp8Result, , ];
  let tmp28 = null != errorCode;
  if (tmp28) {
    const obj9 = { variant: "text-sm/semibold", color: "text-muted", selectable: true, children: intl3.formatToPlainString(stream(1126).t.ejOT95, obj10) };
    const Text = stream(4886).Text;
    intl3 = stream(1126).intl;
    obj10 = { errorCode };
    tmp28 = closure_7(Text, obj9);
  }
  items4[1] = tmp28;
  let tmp30 = !removeCloseButton;
  if (tmp30) {
    const obj11 = { style: tmp2.buttonWrapper, children: closure_7(Button, obj12) };
    obj12 = {
      variant: "secondary",
      size: "md",
      shrink: true,
      grow: false,
      text: intl4.string(stream(1126).t["4EGMWL"]),
      onPress() {
          const stopStream = StreamActionCreators.stopStream;
          StreamActionCreators;
          const obj = StreamKeyUtils;
          stopStream(obj.encodeStreamKey(stream));
        }
    };
    Button = stream(5594).Button;
    intl4 = stream(1126).intl;
    tmp30 = closure_7(View, obj11);
  }
  items4[2] = tmp30;
  return closure_9(View, obj8);
});
const result = size.fileFinishedImporting("components_native/calls/stream/VideoEmptyState.tsx");

export default tmp5;
export { VideoEmptyTypes };