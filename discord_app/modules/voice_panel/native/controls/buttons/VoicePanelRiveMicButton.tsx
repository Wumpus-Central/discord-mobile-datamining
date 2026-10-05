// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import MicrophoneRive2 from "../../../../../../discord_common/js/packages/design/components/Rive/native/generated/MicrophoneRive.tsx";
import MicrophoneSlashIcon from "../../../../../design/components/Icon/native/redesign/generated/MicrophoneSlashIcon.tsx";
import MicrophoneIcon2 from "../../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let color;
      let first;
      let muted;
      const obj = react2;
      const cResult = obj.c(11);
      ({ color, muted } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        size = { width: 24, height: 24, pointerEvents: "none" };
        cResult[0] = size;
        first = size;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === color) {
        let tmp6;
        if (cResult[2] === !muted) {
          tmp6 = cResult[3];
        }
        let str = "On";
        if (muted) {
          str = "Off";
        }
        if (cResult[4] === color) {
          let tmp7;
          if (cResult[5] === muted) {
            tmp7 = cResult[6];
          }
          if (cResult[7] === tmp6) {
            if (cResult[8] === str) {
              let tmp10;
              if (cResult[9] === tmp7) {
                tmp10 = cResult[10];
              }
              return tmp10;
            }
          }
          const tmp13 = <View style={first}>{null}</View>;
          cResult[7] = tmp6;
          cResult[8] = str;
          cResult[9] = tmp7;
          cResult[10] = tmp13;
          tmp10 = tmp13;
        }
        if (muted) {
          let MicrophoneIcon = MicrophoneSlashIcon.MicrophoneSlashIcon;
        } else {
          MicrophoneIcon = MicrophoneIcon2.MicrophoneIcon;
        }
        const tmp8Result = <MicrophoneIcon color={color} />;
        cResult[4] = color;
        cResult[5] = muted;
        cResult[6] = tmp8Result;
        tmp7 = tmp8Result;
      }
      const obj5 = { fill: color, on: !muted };
      cResult[1] = color;
      cResult[2] = !muted;
      cResult[3] = obj5;
      tmp6 = obj5;
    }
  : (arg0) => {
      let color;
      let muted;
      ({ color, muted } = arg0);
      let str = "On";
      const MicrophoneRive = MicrophoneRive2.MicrophoneRive;
      if (muted) {
        str = "Off";
      }
      if (muted) {
        let MicrophoneIcon = MicrophoneSlashIcon.MicrophoneSlashIcon;
      } else {
        MicrophoneIcon = MicrophoneIcon2.MicrophoneIcon;
      }
      return <View style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</View>;
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = tmp3;
