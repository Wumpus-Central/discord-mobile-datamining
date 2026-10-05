// discord_app/modules/quests/native/QuestDock/QuestDockHeaderSeparator.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { separator: size };
size = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, opacity: 0.2, height: 18, width: 1.5 };
let closure_4 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let tmp3;
        const obj = react2;
        const cResult = obj.c(2);
        const tmp2 = closure_4();
        if (cResult[0] !== tmp2.separator) {
          const tmp6 = <View style={tmp2.separator} />;
          cResult[0] = tmp2.separator;
          cResult[1] = tmp6;
          tmp3 = tmp6;
        } else {
          tmp3 = cResult[1];
        }
        return tmp3;
      }
    : () => <View style={closure_4().separator} />,
);
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHeaderSeparator.tsx");

export default memoResult;
