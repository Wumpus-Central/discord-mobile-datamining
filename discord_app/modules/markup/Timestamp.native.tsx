// discord_app/modules/markup/Timestamp.native.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../toast/native/ToastActionCreators.tsx";
import useFormattedTimestampDefault from "useFormattedTimestamp.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
const obj2 = {
  timestamp: { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BORDER_SUBTLE },
};
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function Timestamp(node) {
      const cResult = node(576).c(6);
      node = node.node;
      const obj = node(576);
      const tmp = node;
      const tmp5 = useFormattedTimestampDefault(node);
      let style = closure_4().timestamp;
      if (style == null) {
        style = node.style;
      }
      if (cResult[0] !== node.full) {
        const fn = function o() {
          ToastActionCreatorsDefault.open("TIMESTAMP", { text: node.full });
        };
        cResult[0] = node.full;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        if (cResult[3] === style) {
          if (cResult[4] === tmp6) {
            let tmp7 = cResult[5];
          }
          return tmp7;
        }
      }
      const tmp8 = jsx(tmp(1200).LegacyText, { style, onPress: tmp6, children: tmp5 });
      cResult[2] = tmp5;
      cResult[3] = style;
      cResult[4] = tmp6;
      cResult[5] = tmp8;
      tmp7 = tmp8;
      const tmp4 = closure_4();
    }
  : function Timestamp(node) {
      node = node.node;
      const tmp = closure_4();
      let style = tmp.timestamp;
      if (style == null) {
        style = node.style;
      }
      const tmp2 = useFormattedTimestampDefault(node);
      return jsx(node(1200).LegacyText, {
        style,
        onPress() {
          ToastActionCreatorsDefault.open("TIMESTAMP", { text: node.full });
        },
        children: useFormattedTimestampDefault(node),
      });
    };
