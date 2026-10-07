// discord_app/modules/stage_channels/native/components/StageChannelCallView.tsx
import c from "../../../../../_runtime/00576_c.js";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import StatusBarDefault from "../../../status_bar/native/components/StatusBar.android.tsx";
import FocusedControls from "../../../video_calls/native/components/FocusedControls.tsx";
import StageChannelAnimationUtils from "StageChannelAnimationUtils.tsx";
import StageChannelBackgroundDefault from "StageChannelBackground.tsx";
import StageChannelCallListDefault from "StageChannelCallList.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
function CONTROL_PADDING_PX(arg0) {}
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(8);
      children = children.children;
      const tmp4 = closure_7();
      const top = useSafeAreaInsetsDefault().top;
      if (cResult[0] !== top) {
        if (typeof CONTROL_PADDING_PX === "function") {
          const sum = FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT + top;
          cResult[0] = top;
          cResult[1] = sum;
          let tmp6 = sum;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        tmp6 = cResult[1];
      }
      const stageActionBarAnimation = StageChannelAnimationUtils.useStageActionBarAnimation(children.channelId, tmp6);
      if (cResult[2] === stageActionBarAnimation) {
        if (cResult[3] === tmp4.container) {
          let tmp10 = cResult[4];
        }
        if (cResult[5] === children) {
          if (cResult[6] === tmp10) {
            let tmp11 = cResult[7];
          }
          return tmp11;
        }
        const obj2 = { children: null };
        const obj3 = { style: tmp10, children };
        obj2.children = React3(ReanimatedRexportDefault.View, obj3);
        const tmp14 = React3(StageChannelBackgroundDefault, obj2);
        cResult[5] = children;
        cResult[6] = tmp10;
        cResult[7] = tmp14;
        tmp11 = tmp14;
        const tmp5Result = StageChannelBackgroundDefault;
      }
      const items = [tmp4.container, stageActionBarAnimation];
      cResult[2] = stageActionBarAnimation;
      cResult[3] = tmp4.container;
      cResult[4] = items;
      tmp10 = items;
      const tmpResult = StageChannelAnimationUtils;
    }
  : (arg0) => {
      ({ children, channelId } = arg0);
      StageChannelAnimationUtils;
      if (typeof CONTROL_PADDING_PX === "function") {
        const obj = { children: null };
        const tmp6Result = tmp6(
          channelId,
          FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT + useSafeAreaInsetsDefault().top,
        );
        const obj2 = { style: null, children: null };
        const items = [tmp.container, tmp6Result];
        obj2.style = items;
        obj2.children = children;
        obj.children = React3(ReanimatedRexportDefault.View, obj2);
        return React3(StageChannelBackgroundDefault, obj);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      tmp = closure_7();
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = c.c(6);
      channel = channel.channel;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = React3(StatusBarDefault, { animated: true, barStyle: "light-content" });
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const obj2 = { channel };
        const tmp10 = React3(StageChannelCallListDefault, obj2);
        cResult[1] = channel;
        cResult[2] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === channel.id) {
        if (cResult[4] === tmp7) {
          let tmp11 = cResult[5];
        }
        return tmp11;
      }
      const obj3 = { children: null };
      const items = [first, React3(closure_8, { channelId: channel.id, children: tmp7 })];
      obj3.children = items;
      const tmp12 = hasOwnProperty(React4, obj3);
      cResult[3] = channel.id;
      cResult[4] = tmp7;
      cResult[5] = tmp12;
      tmp11 = tmp12;
      const obj4 = { channelId: channel.id, children: tmp7 };
    }
  : (channel) => {
      channel = channel.channel;
      const obj = { children: null };
      const items = [
        React3(StatusBarDefault, { animated: true, barStyle: "light-content" }),
        React3(closure_8, { channelId: channel.id, children: React3(StageChannelCallListDefault, { channel }) }),
      ];
      obj.children = items;
      return hasOwnProperty(React4, obj);
    };
