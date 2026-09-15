// === Module 17290: UserVideoFailed ===

// Module 17290 (UserVideoFailed)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4635 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4694 */;
import components_Button_Button from "components/Button/Button" /* 5059 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9221 */;
import AVError from "AVError" /* 9242 */;
import StreamFailed from "StreamFailed" /* 9733 */;
import VideoStreamReadyActionCreators from "VideoStreamReadyActionCreators" /* 9744 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4639 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const VideoToggleState = Constants.VideoToggleState;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 }, placeholderImage: { marginBottom: 8, width: "100%", resizeMode: "contain" }, button: { marginTop: 16, alignSelf: "center" } };
let closure_8 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserVideoFailed.tsx");

export default function UserVideoFailed(arg0) {
  ({ userId: require, removeRetryButton, removeSplashImage } = arg0);
  ({ style, avError } = arg0);
  const merged = Object.assign(arg0, Object.assign({ userId: 0, style: 0, avError: 0, removeRetryButton: 0, removeSplashImage: 0 }));
  const tmp2 = closure_8();
  const obj2 = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.container, style];
  obj2.style = items;
  let tmp9 = !removeSplashImage;
  if (!removeSplashImage) {
    const obj3 = { style: tmp2.placeholderImage };
    tmp9 = closure_5(StreamFailed.StreamFailed, obj3);
  }
  const obj4 = { children: null };
  const items1 = [tmp9, ];
  const obj5 = { variant: "text-md/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t["z+mxvo"]);
  items1[1] = closure_5(Text_Text.Text, obj5);
  obj4.children = items1;
  const items2 = [closure_7(closure_6, obj4), , ];
  const obj6 = { variant: "text-sm/semibold", color: "text-muted", selectable: true, children: null };
  const intl2 = util.intl;
  obj6.children = intl2.formatToPlainString(util.t.ejOT95, { errorCode: AVError.getErrorInfo(avError).errorCode });
  items2[1] = closure_5(Text_Text.Text, obj6);
  const obj7 = { style: tmp2.button, children: null };
  let tmp11Result = !removeRetryButton;
  if (!removeRetryButton) {
    const obj8 = { variant: "secondary", text: null, onPress: null };
    const intl3 = util.intl;
    obj8.text = intl3.string(util.t["hxmQ/e"]);
    obj8.onPress = function onPress() {
      const result = VideoStreamReadyActionCreators.clearVideoStreamTimeout(BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, closure_1_0);
      AudioActionCreatorsDefault.setDisableLocalVideo(closure_1_0, VideoToggleState.DISABLED, BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, false);
      const timerId = setTimeout(() => {
        AudioActionCreatorsDefault.setDisableLocalVideo(closure_1_0, constants.MANUAL_ENABLED, BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, false);
      }, 1000);
    };
    tmp11Result = closure_5(components_Button_Button.Button, obj8);
  }
  obj7.children = tmp11Result;
  items2[2] = closure_5(View, obj7);
  obj2.children = items2;
  return closure_7(View, obj2);
};