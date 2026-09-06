// === Module 17141: UserVideoFailed ===

// Module 17141 (UserVideoFailed)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4615 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import AVError from "AVError" /* 9110 */;
import StreamFailed from "StreamFailed" /* 9601 */;
import VideoStreamReadyActionCreators from "VideoStreamReadyActionCreators" /* 9612 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const VideoToggleState = Constants.VideoToggleState;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: null, placeholderImage: null, button: null };
obj = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, padding: 8 };
obj.container = obj;
obj.placeholderImage = { marginBottom: 8, width: "100%", resizeMode: "contain" };
obj.button = { marginTop: 16, alignSelf: "center" };
let closure_8 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserVideoFailed.tsx");

export default function UserVideoFailed(arg0) {
  ({ userId: require, removeRetryButton, removeSplashImage } = arg0);
  ({ style, avError } = arg0);
  const merged = Object.assign(arg0, Object.assign({ userId: 0, style: 0, avError: 0, removeRetryButton: 0, removeSplashImage: 0 }));
  const tmp2 = closure_8();
  let obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.container, style];
  obj.style = items;
  let tmp9 = !removeSplashImage;
  if (!removeSplashImage) {
    obj = { style: tmp2.placeholderImage };
    tmp9 = closure_5(StreamFailed.StreamFailed, obj);
  }
  const obj1 = { children: null };
  const items1 = [tmp9, ];
  const obj2 = { variant: "text-md/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["z+mxvo"]);
  items1[1] = closure_5(Text_Text.Text, obj2);
  obj1.children = items1;
  const items2 = [closure_7(closure_6, obj1), , ];
  const obj3 = { variant: "text-sm/semibold", color: "text-muted", selectable: true, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.formatToPlainString(util.t.ejOT95, { errorCode: obj.getErrorInfo(avError).errorCode });
  items2[1] = closure_5(Text_Text.Text, obj3);
  const obj4 = { style: tmp2.button, children: null };
  let tmp11Result = !removeRetryButton;
  if (!removeRetryButton) {
    const obj5 = { variant: "secondary", text: null, onPress: null };
    const intl3 = util.intl;
    obj5.text = intl3.string(util.t["hxmQ/e"]);
    obj5.onPress = function onPress() {
      const result = VideoStreamReadyActionCreators.clearVideoStreamTimeout(BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, closure_1_0);
      AudioActionCreatorsDefault.setDisableLocalVideo(closure_1_0, VideoToggleState.DISABLED, BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, false);
      const timerId = setTimeout(() => {
        AudioActionCreatorsDefault.setDisableLocalVideo(closure_1_0, constants.MANUAL_ENABLED, BaseConnectionEvent.MediaEngineContextTypes.DEFAULT, false);
      }, 1000);
    };
    tmp11Result = closure_5(components_Button_Button.Button, obj5);
  }
  obj4.children = tmp11Result;
  items2[2] = closure_5(View, obj4);
  obj.children = items2;
  return closure_7(View, obj);
};