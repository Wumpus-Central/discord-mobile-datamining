// discord_app/modules/video_calls/native/components/UserVideoFailed.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BaseConnectionEvent from "../../../../../discord_common/js/packages/media-engine/index.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import AVError from "../../../errors/av_errors/AVError.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import VideoStreamReadyActionCreators from "../../../errors/VideoStreamReadyActionCreators.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";

const require = globalThis.__r;

require = fn;
let closure_3 = ["userId", "style", "avError", "removeRetryButton"];
const View = fn(17).View;
const VideoToggleState = fn(1085).VideoToggleState;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700,
    padding: 8,
  },
  text: { textAlign: "center" },
  button: { marginTop: 16, alignSelf: "center" },
};
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700,
  padding: 8,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserVideoFailed.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserVideoFailed(userId) {
      const cResult = require("c").c(51);
      if (cResult[0] !== userId) {
        userId = userId.userId;
        _require = userId;
        ({ style, avError, removeRetryButton } = userId);
        const tmp9 = _objectWithoutProperties(userId, closure_3);
        cResult[0] = userId;
        cResult[1] = avError;
        cResult[2] = tmp9;
        cResult[3] = removeRetryButton;
        cResult[4] = style;
        cResult[5] = userId;
        let str2 = userId;
        let str = style;
        let tmp6 = removeRetryButton;
        let tmp5 = tmp9;
        let tmp4 = avError;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        str = cResult[4];
        _require = cResult[5];
      }
      const tmp10 = closure_9();
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === str) {
            if (cResult[9] === tmp10.container) {
              if (cResult[10] === tmp10.text) {
                if (cResult[11] === str2) {
                  if (cResult[31] === cResult[12]) {
                    if (cResult[32] === tmp14) {
                      if (cResult[33] === tmp15) {
                        if (cResult[34] === tmp16) {
                          if (cResult[35] === tmp17) {
                            if (cResult[36] === tmp18) {
                              let tmp39 = cResult[37];
                            }
                            if (cResult[38] === tmp13) {
                              if (cResult[39] === tmp6) {
                                let tmp42 = cResult[40];
                              }
                              if (cResult[41] === tmp10.button) {
                                if (cResult[42] === tmp42) {
                                  let tmp45 = cResult[43];
                                }
                                if (cResult[44] === tmp12) {
                                  if (cResult[45] === tmp45) {
                                    if (cResult[46] === tmp19) {
                                      if (cResult[47] === tmp20) {
                                        if (cResult[48] === tmp21) {
                                          if (cResult[49] === tmp39) {
                                            let tmp49 = cResult[50];
                                          }
                                          return tmp49;
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj2 = {};
                                const merged = Object.assign(tmp19);
                                obj2.style = tmp20;
                                const items = [tmp21, tmp39, tmp45];
                                obj2.children = items;
                                const tmp54 = closure_8(tmp12, obj2);
                                cResult[44] = tmp12;
                                cResult[45] = tmp45;
                                cResult[46] = tmp19;
                                cResult[47] = tmp20;
                                cResult[48] = tmp21;
                                cResult[49] = tmp39;
                                cResult[50] = tmp54;
                                tmp49 = tmp54;
                              }
                              const obj3 = { style: tmp10.button, children: tmp42 };
                              const tmp48 = closure_7(View, obj3);
                              cResult[41] = tmp10.button;
                              cResult[42] = tmp42;
                              cResult[43] = tmp48;
                              tmp45 = tmp48;
                            }
                            let tmp43 = !tmp6;
                            if (!tmp6) {
                              const obj4 = { variant: "secondary", size: "md", text: null, onPress: null };
                              const intl3 = tmp(1126).intl;
                              obj4.text = intl3.string(tmp(1126).t["hxmQ/e"]);
                              obj4.onPress = tmp13;
                              tmp43 = closure_7(tmp(5375).Button, obj4);
                            }
                            cResult[38] = tmp13;
                            cResult[39] = tmp6;
                            cResult[40] = tmp43;
                            tmp42 = tmp43;
                          }
                        }
                      }
                    }
                  }
                  const obj5 = {
                    variant: cResult[15],
                    color: cResult[16],
                    style: cResult[17],
                    selectable: cResult[18],
                    children: cResult[19],
                  };
                  const tmp41 = closure_7(cResult[12], obj5);
                  cResult[31] = cResult[12];
                  cResult[32] = cResult[15];
                  cResult[33] = cResult[16];
                  cResult[34] = cResult[17];
                  cResult[35] = cResult[18];
                  cResult[36] = cResult[19];
                  cResult[37] = tmp41;
                  tmp39 = tmp41;
                }
              }
            }
          }
        }
      }
      let obj = require("c");
      if (cResult[23] !== str2) {
        function handleRetry() {
          const result = VideoStreamReadyActionCreators.clearVideoStreamTimeout(
            BaseConnectionEvent.MediaEngineContextTypes.DEFAULT,
            closure_0,
          );
          AudioActionCreatorsDefault.setDisableLocalVideo(
            closure_0,
            VideoToggleState.DISABLED,
            BaseConnectionEvent.MediaEngineContextTypes.DEFAULT,
            false,
          );
          const timerId = setTimeout(() => {
            AudioActionCreatorsDefault.setDisableLocalVideo(
              closure_1_0,
              constants.MANUAL_ENABLED,
              closure_0(5135).MediaEngineContextTypes.DEFAULT,
              false,
            );
          }, 1000);
        }
        cResult[23] = str2;
        cResult[24] = handleRetry;
        let tmp22 = handleRetry;
      } else {
        tmp22 = cResult[24];
      }
      if (cResult[25] === str) {
        if (cResult[26] === tmp10.container) {
          let tmp24 = cResult[27];
        }
        let formatToPlainString = tmp10.text;
        const _Symbol = Symbol;
        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t["z+mxvo"]);
          cResult[28] = stringResult;
          let ejOT95 = stringResult;
        } else {
          ejOT95 = cResult[28];
        }
        if (cResult[29] !== tmp10.text) {
          const obj6 = {
            variant: "text-md/semibold",
            color: "text-strong",
            style: formatToPlainString,
            children: ejOT95,
          };
          const tmp29 = closure_7(tmp(5086).Text, obj6);
          cResult[29] = tmp10.text;
          cResult[30] = tmp29;
          let tmp27 = tmp29;
        } else {
          tmp27 = cResult[30];
        }
        const Text = tmp(5086).Text;
        const text = tmp10.text;
        const intl2 = tmp(1126).intl;
        formatToPlainString = intl2.formatToPlainString;
        ejOT95 = tmp(1126).t.ejOT95;
        const obj7 = { errorCode: tmpResult.getErrorInfo(tmp4).errorCode };
        const formatToPlainStringResult = formatToPlainString(ejOT95, obj7);
        cResult[6] = tmp4;
        cResult[7] = tmp5;
        cResult[8] = str;
        cResult[9] = tmp10.container;
        cResult[10] = tmp10.text;
        cResult[11] = str2;
        cResult[12] = Text;
        cResult[13] = View;
        cResult[14] = tmp22;
        str2 = "text-sm/semibold";
        cResult[15] = "text-sm/semibold";
        str = "text-muted";
        cResult[16] = "text-muted";
        cResult[17] = text;
        cResult[18] = true;
        cResult[19] = formatToPlainStringResult;
        cResult[20] = tmp5;
        cResult[21] = tmp24;
        cResult[22] = tmp27;
      }
      const items1 = [tmp10.container, str];
      cResult[25] = str;
      cResult[26] = tmp10.container;
      cResult[27] = items1;
      tmp24 = items1;
      tmpResult = require("AVError");
    }
  : function UserVideoFailed(arg0) {
      ({ userId: require, removeRetryButton } = arg0);
      ({ style, avError } = arg0);
      const merged = Object.assign(arg0, Object.assign({ userId: 0, style: 0, avError: 0, removeRetryButton: 0 }));
      const tmp2 = closure_9();
      const obj2 = {};
      const merged1 = Object.assign(merged);
      const items = [tmp2.container, style];
      obj2.style = items;
      const obj3 = { variant: "text-md/semibold", color: "text-strong", style: tmp2.text, children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t["z+mxvo"]);
      const items1 = [closure_7(Text_Text.Text, obj3), ,];
      const obj4 = {
        variant: "text-sm/semibold",
        color: "text-muted",
        style: tmp2.text,
        selectable: true,
        children: null,
      };
      const intl2 = util.intl;
      obj4.children = intl2.formatToPlainString(util.t.ejOT95, { errorCode: AVError.getErrorInfo(avError).errorCode });
      items1[1] = closure_7(Text_Text.Text, obj4);
      const obj5 = { style: tmp2.button, children: null };
      let tmp8Result = !removeRetryButton;
      if (!removeRetryButton) {
        const obj6 = { variant: "secondary", size: "md", text: null, onPress: null };
        const intl3 = util.intl;
        obj6.text = intl3.string(util.t["hxmQ/e"]);
        obj6.onPress = function handleRetry() {
          const result = VideoStreamReadyActionCreators.clearVideoStreamTimeout(
            BaseConnectionEvent.MediaEngineContextTypes.DEFAULT,
            _require,
          );
          AudioActionCreatorsDefault.setDisableLocalVideo(
            _require,
            VideoToggleState.DISABLED,
            BaseConnectionEvent.MediaEngineContextTypes.DEFAULT,
            false,
          );
          const timerId = setTimeout(() => {
            AudioActionCreatorsDefault.setDisableLocalVideo(
              closure_1_0,
              constants.MANUAL_ENABLED,
              require("BaseConnectionEvent").MediaEngineContextTypes.DEFAULT,
              false,
            );
          }, 1000);
        };
        tmp8Result = closure_7(components_Button_Button.Button, obj6);
      }
      obj5.children = tmp8Result;
      items1[2] = closure_7(View, obj5);
      obj2.children = items1;
      return closure_8(View, obj2);
    };
