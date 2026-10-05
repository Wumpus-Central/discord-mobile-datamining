// discord_app/modules/video_calls/native/components/ParticipantTitle.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import getParticipantTitleDefault from "../../getParticipantTitle.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
const jsx = Fragment.jsx;
let obj = { usernameText: obj2 };
obj2 = { fontSize: 14, color: nativeDefault.colors.WHITE };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let participant;
      let style;
      const obj = react2;
      const cResult = obj.c(9);
      ({ channel, participant, style } = arg0);
      const tmp4 = closure_4();
      if (cResult[0] === style) {
        let tmp5;
        if (cResult[1] === tmp4.usernameText) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === channel) {
          let tmp6;
          if (cResult[4] === participant) {
            tmp6 = cResult[5];
          }
          if (cResult[6] === tmp5) {
            let tmp9;
            if (cResult[7] === tmp6) {
              tmp9 = cResult[8];
            }
            return tmp9;
          }
          const tmp11 = jsx(native.LegacyText, { style: tmp5, numberOfLines: 1, children: tmp6 });
          cResult[6] = tmp5;
          cResult[7] = tmp6;
          cResult[8] = tmp11;
          tmp9 = tmp11;
        }
        const tmp8 = getParticipantTitleDefault(channel, participant);
        cResult[3] = channel;
        cResult[4] = participant;
        cResult[5] = tmp8;
        tmp6 = tmp8;
      }
      const items = [tmp4.usernameText, style];
      cResult[0] = style;
      cResult[1] = tmp4.usernameText;
      cResult[2] = items;
      tmp5 = items;
    }
  : (arg0) => {
      let channel;
      let participant;
      let style;
      ({ channel, participant, style } = arg0);
      const items = [closure_4().usernameText, style];
      closure_4();
      const LegacyText = native.LegacyText;
      return (
        <LegacyText style={items} numberOfLines={1}>
          {getParticipantTitleDefault(channel, participant)}
        </LegacyText>
      );
    };
const result = size.fileFinishedImporting("modules/video_calls/native/components/ParticipantTitle.tsx");

export default tmp3;
