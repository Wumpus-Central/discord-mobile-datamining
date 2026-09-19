// discord_app/modules/video_calls/native/components/UserVideoFailed.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BaseConnectionEvent from "../../../../../discord_common/js/packages/media-engine/index.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import AVError from "../../../errors/av_errors/AVError.tsx";
import VideoStreamReadyActionCreators from "../../../errors/VideoStreamReadyActionCreators.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const VideoToggleState = Constants.VideoToggleState;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700,
    padding: 8,
  },
  text: { textAlign: "center" },
  button: { marginTop: 16, alignSelf: "center" },
};
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
  const items1 = [closure_5(Text_Text.Text, obj3), ,];
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
    obj6.onPress = function onPress() {
      const result = VideoStreamReadyActionCreators.clearVideoStreamTimeout(
        BaseConnectionEvent.MediaEngineContextTypes.DEFAULT,
        closure_1_0,
      );
      AudioActionCreatorsDefault.setDisableLocalVideo(
        closure_1_0,
        VideoToggleState.DISABLED,
        BaseConnectionEvent.MediaEngineContextTypes.DEFAULT,
        false,
      );
      const timerId = setTimeout(() => {
        AudioActionCreatorsDefault.setDisableLocalVideo(
          closure_1_0,
          constants.MANUAL_ENABLED,
          BaseConnectionEvent.MediaEngineContextTypes.DEFAULT,
          false,
        );
      }, 1000);
    };
    tmp8Result = closure_5(components_Button_Button.Button, obj6);
  }
  obj5.children = tmp8Result;
  items1[2] = closure_5(View, obj5);
  obj2.children = items1;
  return closure_6(View, obj2);
}
