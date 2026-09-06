// discord_app/modules/video_calls/native/components/UserVideoFailed.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BaseConnectionEvent from "../../../../../discord_common/js/packages/media-engine/index.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import AVError from "../../../errors/av_errors/AVError.tsx";
import VideoStreamReadyActionCreators from "../../../errors/VideoStreamReadyActionCreators.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const VideoToggleState = Constants.VideoToggleState;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: null, placeholderImage: null, button: null };
obj = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700,
  padding: 8,
};
obj.container = obj;
obj.placeholderImage = { marginBottom: 8, width: "100%", resizeMode: "contain" };
obj.button = { marginTop: 16, alignSelf: "center" };
let closure_8 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserVideoFailed.tsx");

export default function UserVideoFailed(arg0) {
  ({ userId: require, removeRetryButton, removeSplashImage } = arg0);
  ({ style, avError } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({ userId: 0, style: 0, avError: 0, removeRetryButton: 0, removeSplashImage: 0 }),
  );
  const tmp2 = closure_8();
  let obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.container, style];
  obj.style = items;
  let tmp9 = !removeSplashImage;
  if (!removeSplashImage) {
    obj = { style: tmp2.placeholderImage };
    tmp9 = closure_5(tmp3(9601).StreamFailed, obj);
  }
  const obj1 = { children: null };
  const items1 = [tmp9];
  const obj2 = { variant: "text-md/semibold", color: "text-strong", children: null };
  const intl = tmp3(1114).intl;
  obj2.children = intl.string(util.t["z+mxvo"]);
  items1[1] = closure_5(Text_Text.Text, obj2);
  obj1.children = items1;
  const items2 = [closure_7(closure_6, obj1), ,];
  const obj3 = { variant: "text-sm/semibold", color: "text-muted", selectable: true, children: null };
  const intl2 = tmp3(1114).intl;
  obj3.children = intl2.formatToPlainString(util.t.ejOT95, { errorCode: obj.getErrorInfo(avError).errorCode });
  items2[1] = closure_5(Text_Text.Text, obj3);
  const obj4 = { style: tmp2.button, children: null };
  let tmp11Result = !removeRetryButton;
  if (!removeRetryButton) {
    const obj5 = { variant: "secondary", text: null, onPress: null };
    const intl3 = tmp3(1114).intl;
    obj5.text = intl3.string(tmp3(1114).t["hxmQ/e"]);
    obj5.onPress = function onPress() {
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
    tmp11Result = tmp11(tmp3(4975).Button, obj5);
  }
  obj4.children = tmp11Result;
  items2[2] = closure_5(View, obj4);
  obj.children = items2;
  return closure_7(View, obj);
}
