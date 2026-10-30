// === Module 19199: UserVideoFailed ===

// Module 19199 (UserVideoFailed)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5784 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5896 */;
import AVError from "AVError" /* 5942 */;
import VideoStreamReadyActionCreators from "VideoStreamReadyActionCreators" /* 11731 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const VideoToggleState = Constants.VideoToggleState;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 }, text: { textAlign: "center" }, button: { marginTop: 16, alignSelf: "center" } };
let closure_7 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserVideoFailed.tsx");

export default function UserVideoFailed(arg0) {
  ({ userId: require, removeRetryButton } = arg0);
  ({ style, avError } = arg0);
  const merged = Object.assign(arg0, Object.assign({ userId: 0, style: 0, avError: 0, removeRetryButton: 0 }));
  const tmp2 = closure_7();
  const obj2 = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.container, style];
  obj2.style = items;
  const obj3 = { variant: "text-md/semibold", color: "text-strong", style: tmp2.text, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["z+mxvo"]);
  const items1 = [closure_5(Text_Text.Text, obj3), , ];
  const obj4 = { variant: "text-sm/semibold", color: "text-muted", style: tmp2.text, selectable: true, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.formatToPlainString(util.t.ejOT95, { errorCode: AVError.getErrorInfo(avError).errorCode });
  items1[1] = closure_5(Text_Text.Text, obj4);
  const obj5 = { style: tmp2.button, children: null };
  let tmp8Result = !removeRetryButton;
  if (!removeRetryButton) {
    const obj6 = { variant: "secondary", size: "md", text: null, onPress: null };
    const intl3 = util.intl;
    obj6.text = intl3.string(util.t["hxmQ/e"]);
    obj6.onPress = function handleRetry() {
      const result = VideoStreamReadyActionCreators.clearVideoStreamTimeout(BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, closure_1_0);
      AudioActionCreatorsDefault.setDisableLocalVideo(closure_1_0, VideoToggleState.DISABLED, BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, false);
      const timerId = setTimeout(() => {
        AudioActionCreatorsDefault.setDisableLocalVideo(closure_1_0, constants.MANUAL_ENABLED, BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, false);
      }, 1000);
    };
    tmp8Result = closure_5(components_Button_Button.Button, obj6);
  }
  obj5.children = tmp8Result;
  items1[2] = closure_5(View, obj5);
  obj2.children = items1;
  return closure_6(View, obj2);
};