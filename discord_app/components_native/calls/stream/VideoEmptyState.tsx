// === Module 10849: VideoEmptyState ===

// Module 10849 (VideoEmptyState)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import useMountEffectDefault from "useMountEffect" /* 5393 */;
import StreamKeyUtils from "StreamKeyUtils" /* 5897 */;
import StreamActionCreators from "StreamActionCreators" /* 7443 */;
import StreamEnded from "StreamEnded" /* 10850 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["type", "style", "avError", "removeSplashImage", "removeCloseButton", "stream"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const VideoEmptyTypes = { NONE: "NONE", STREAM_ENDED: "STREAM_ENDED", STREAM_FAILED: "STREAM_FAILED" };
const createStyles = fn(5091);
let obj3 = { container: { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 }, placeholderImage: { marginBottom: 8, width: "100%", resizeMode: "contain" }, placeholderText: null, buttonWrapper: null };
let obj4 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 };
obj3.placeholderText = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20, textAlign: "center" };
obj3.buttonWrapper = { marginTop: 16, alignSelf: "center" };
let closure_11 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.unsafe_rawColors.WHITE, fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD, fontSize: 16, lineHeight: 20, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/VideoEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VideoEmptyState(arg0) {
  let obj = require("c");
  const cResult = obj.c(39);
  if (cResult[0] !== arg0) {
    ({ type, style, avError, removeSplashImage } = arg0);
    _require = removeSplashImage;
    ({ removeCloseButton, stream } = arg0);
    importDefault = stream;
    const tmp13 = _objectWithoutProperties(arg0, stateFromStores);
    cResult[0] = arg0;
    cResult[1] = avError;
    cResult[2] = tmp13;
    cResult[3] = removeCloseButton;
    cResult[4] = removeSplashImage;
    cResult[5] = stream;
    cResult[6] = style;
    cResult[7] = type;
    let tmp10 = type;
    let tmp9 = style;
    let tmp6 = removeCloseButton;
    let tmp4 = avError;
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
      if (cResult[10] === tmp14.placeholderText) {
        let tmp15 = cResult[11];
      }
      if (cResult[12] !== tmp14.placeholderText) {
        function renderBodyStreamFailed() {
          const obj = { style: closure_2.placeholderText, children: null };
          const intl = util.intl;
          obj.children = intl.string(util.t.rSlOep);
          return React5(native.LegacyText, obj);
        }
        cResult[12] = tmp14.placeholderText;
        cResult[13] = renderBodyStreamFailed;
        let tmp16 = renderBodyStreamFailed;
      } else {
        tmp16 = cResult[13];
      }
      if (obj.STREAM_ENDED === tmp10) {
        if (cResult[14] !== tmp15) {
          const tmp15Result = tmp15();
          cResult[14] = tmp15;
          cResult[15] = tmp15Result;
        }
      } else {
        if (tmp17.STREAM_FAILED === tmp10) {
          if (cResult[16] !== tmp16) {
            const tmp16Result = tmp16();
            cResult[16] = tmp16;
            cResult[17] = tmp16Result;
          }
        }
        if (null != tmp4) {
          let errorCode = tmp(5288).getErrorInfo(tmp4).errorCode;
          const tmpResult = tmp(5288);
        } else {
          errorCode = null;
          if (tmp10 === tmp17.STREAM_FAILED) {
            errorCode = tmp(5288).getErrorInfo(tmp(5288).AVError.STREAM_FAILED_TO_START).errorCode;
            const tmpResult3 = tmp(5288);
          }
        }
        const _Symbol = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [ChannelStore];
          cResult[18] = items;
          let tmp27 = items;
        } else {
          tmp27 = cResult[18];
        }
        if (cResult[19] !== stream.channelId) {
          class N {
            constructor() {
              return closure_6.getChannel(closure_1.channelId);
            }
          }
          const items1 = [stream.channelId];
          cResult[19] = stream.channelId;
          cResult[20] = N;
          cResult[21] = items1;
          let tmp30 = items1;
        } else {
          class N {
            constructor() {
              return closure_6.getChannel(closure_1.channelId);
            }
          }
          tmp30 = cResult[21];
        }
        stateFromStores = tmp(504).useStateFromStores(tmp27, N, tmp30);
        if (cResult[22] === stateFromStores) {
          class N {
            constructor() {
              return closure_6.getChannel(closure_1.channelId);
            }
          }
          useMountEffectDefault(W);
          if (cResult[25] === tmp9) {
            class N {
              constructor() {
                return closure_6.getChannel(closure_1.channelId);
              }
            }
            let tmp37 = null != errorCode;
            if (tmp37) {
              class N {
                constructor() {
                  return closure_6.getChannel(closure_1.channelId);
                }
              }
              let obj2 = { variant: "text-sm/semibold", color: "text-muted", selectable: true, children: null };
              let intl = tmp(1126).intl;
              let obj3 = { errorCode };
              obj2.children = intl.formatToPlainString(tmp(1126).t.ejOT95, obj3);
              tmp37 = closure_7(tmp(5087).Text, obj2);
            }
            if (cResult[28] === tmp6) {
              class N {
                constructor() {
                  return closure_6.getChannel(closure_1.channelId);
                }
              }
            }
            let tmp39 = !tmp6;
            if (!tmp6) {
              class N {
                constructor() {
                  return closure_6.getChannel(closure_1.channelId);
                }
              }
              const obj4 = { style: tmp14.buttonWrapper, children: null };
              const obj5 = { variant: "secondary", size: "md", shrink: true, grow: false, text: null, onPress: null };
              const intl2 = tmp(1126).intl;
              obj5.text = intl2.string(tmp(1126).t["4EGMWL"]);
              obj5.onPress = function onPress() {
                const obj = StreamActionCreators;
                obj.stopStream(StreamKeyUtils.encodeStreamKey(closure_1));
              };
              obj4.children = closure_7(tmp(5376).Button, obj5);
              tmp39 = closure_7(View, obj4);
            }
            cResult[28] = tmp6;
            cResult[29] = stream;
            cResult[30] = tmp14.buttonWrapper;
            class W {
              constructor() {
                obj = closure_3;
                isGuildStageVoiceResult = undefined;
                if (closure_3 != null) {
                  isGuildStageVoiceResult = obj.isGuildStageVoice();
                }
                if (isGuildStageVoiceResult) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj2 = closure_0(closure_2[15]);
                  obj3 = closure_0(closure_2[16]);
                  tmp4 = closure_1;
                  stopStreamResult = obj2.stopStream(obj3.encodeStreamKey(closure_1));
                }
                return;
              }
            }
          }
          const items2 = [tmp14.container, tmp9];
          cResult[25] = tmp9;
          cResult[26] = tmp14.container;
          class W {
            constructor() {
              obj = closure_3;
              isGuildStageVoiceResult = undefined;
              if (closure_3 != null) {
                isGuildStageVoiceResult = obj.isGuildStageVoice();
              }
              if (isGuildStageVoiceResult) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj2 = closure_0(closure_2[15]);
                obj3 = closure_0(closure_2[16]);
                tmp4 = closure_1;
                stopStreamResult = obj2.stopStream(obj3.encodeStreamKey(closure_1));
              }
              return;
            }
          }
        }
        class W {
          constructor() {
            obj = closure_3;
            isGuildStageVoiceResult = undefined;
            if (closure_3 != null) {
              isGuildStageVoiceResult = obj.isGuildStageVoice();
            }
            if (isGuildStageVoiceResult) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj2 = closure_0(closure_2[15]);
              obj3 = closure_0(closure_2[16]);
              tmp4 = closure_1;
              stopStreamResult = obj2.stopStream(obj3.encodeStreamKey(closure_1));
            }
            return;
          }
        }
        cResult[22] = stateFromStores;
        cResult[23] = stream;
        cResult[24] = W;
        const tmpResult4 = tmp(504);
      }
    }
  }
  function renderBodyStreamEnded() {
    let tmp3 = !closure_0;
    if (!closure_0) {
      const obj = { style: closure_2.placeholderImage };
      tmp3 = React5(StreamEnded.StreamEnded, obj);
    }
    const obj2 = { children: null };
    const items = [tmp3, ];
    const obj3 = { style: closure_2.placeholderText, children: null };
    const intl = util.intl;
    obj3.children = intl.formatToMarkdownString(util.t["1Ww0Hi"], {});
    items[1] = React5(native.LegacyText, obj3);
    obj2.children = items;
    return options(closure_2_8, obj2);
  }
  cResult[8] = removeSplashImage;
  cResult[9] = tmp14.placeholderImage;
  cResult[10] = tmp14.placeholderText;
  cResult[11] = renderBodyStreamEnded;
  tmp15 = renderBodyStreamEnded;
}) : (function VideoEmptyState(style) {
  ({ type, avError, removeSplashImage, removeCloseButton, stream } = style);
  const merged = Object.assign(style, Object.assign({ type: 0, style: 0, avError: 0, removeSplashImage: 0, removeCloseButton: 0, stream: 0 }));
  importDefault = undefined;
  const tmp2 = closure_11();
  if (obj.STREAM_ENDED === type) {
    let tmp10 = !removeSplashImage;
    if (!removeSplashImage) {
      let obj2 = { style: tmp2.placeholderImage };
      tmp10 = closure_7(stream(10850).StreamEnded, obj2);
    }
    let obj3 = { children: null };
    const items = [tmp10, ];
    const obj4 = { style: tmp2.placeholderText, children: null };
    const intl2 = stream(1126).intl;
    obj4.children = intl2.formatToMarkdownString(stream(1126).t["1Ww0Hi"], {});
    items[1] = closure_7(stream(1200).LegacyText, obj4);
    obj3.children = items;
    let tmp8Result = closure_9(closure_8, obj3);
  } else if (tmp3.STREAM_FAILED === type) {
    obj = { style: tmp2.placeholderText, children: null };
    const intl = stream(1126).intl;
    obj.children = intl.string(stream(1126).t.rSlOep);
    tmp8Result = closure_7(stream(1200).LegacyText, obj);
  } else if (tmp3.NONE === type) {
    tmp8Result = null;
  }
  if (null != avError) {
    let errorCode = stream(5288).getErrorInfo(avError).errorCode;
    const obj6 = stream(5288);
  } else {
    errorCode = null;
    if (type === tmp3.STREAM_FAILED) {
      errorCode = stream(5288).getErrorInfo(stream(5288).AVError.STREAM_FAILED_TO_START).errorCode;
      const obj5 = stream(5288);
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
    const intl3 = stream(1126).intl;
    const obj10 = { errorCode };
    obj9.children = intl3.formatToPlainString(stream(1126).t.ejOT95, obj10);
    tmp28 = closure_7(stream(5087).Text, obj9);
  }
  items4[1] = tmp28;
  let tmp30 = !removeCloseButton;
  if (!removeCloseButton) {
    const obj11 = { style: tmp2.buttonWrapper, children: null };
    const obj12 = { variant: "secondary", size: "md", shrink: true, grow: false, text: null, onPress: null };
    const intl4 = stream(1126).intl;
    obj12.text = intl4.string(stream(1126).t["4EGMWL"]);
    obj12.onPress = function onPress() {
      const obj = StreamActionCreators;
      obj.stopStream(StreamKeyUtils.encodeStreamKey(stream));
    };
    obj11.children = closure_7(stream(5376).Button, obj12);
    tmp30 = closure_7(View, obj11);
  }
  items4[2] = tmp30;
  obj8.children = items4;
  return closure_9(View, obj8);
});
export { VideoEmptyTypes };