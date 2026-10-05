// discord_app/modules/markup/Timestamp.native.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../toast/native/ToastActionCreators.tsx";
import useFormattedTimestampDefault from "useFormattedTimestamp.tsx";
import react from "../../../_runtime/00019_react.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let node;

let obj2;
const jsx = Fragment.jsx;
let obj = { timestamp: obj2 };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (node) => {
      let tmp6;
      let obj = node(576);
      const cResult = obj.c(6);
      const tmp = node;
      node = node.node;
      const style = node.style;
      const tmp4 = closure_4();
      const tmp5 = useFormattedTimestampDefault(node);
      let timestamp = tmp4.timestamp;
      if (timestamp == null) {
        timestamp = style;
      }
      if (cResult[0] !== node.full) {
        const fn = function o() {
          const obj = ToastActionCreatorsDefault;
          const obj2 = { key: "TIMESTAMP", content: node.full };
          obj.open(obj2);
        };
        cResult[0] = node.full;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === timestamp) {
          let tmp7;
          if (cResult[4] === tmp6) {
            tmp7 = cResult[5];
          }
          return tmp7;
        }
      }
      const tmp8 = jsx(tmp(1188).LegacyText, { style: timestamp, onPress: tmp6, children: tmp5 });
      cResult[2] = tmp5;
      cResult[3] = timestamp;
      cResult[4] = tmp6;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : (node) => {
      node = node.node;
      const style = node.style;
      let timestamp = closure_4().timestamp;
      const tmp = closure_4();
      const tmp2 = useFormattedTimestampDefault(node);
      const LegacyText = node(1188).LegacyText;
      if (timestamp == null) {
        timestamp = style;
      }
      return (
        <LegacyText
          style={timestamp}
          onPress={function onPress() {
            const obj = ToastActionCreatorsDefault;
            const obj2 = { key: "TIMESTAMP", content: node.full };
            obj.open(obj2);
          }}
        >
          {tmp2}
        </LegacyText>
      );
    };
const result = size.fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default tmp3;
