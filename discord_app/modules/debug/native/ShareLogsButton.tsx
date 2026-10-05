// discord_app/modules/debug/native/ShareLogsButton.tsx
import LogAggregator from "../LogAggregator.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import showShareActionSheet2 from "../../action_sheet/native/showShareActionSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let obj = react2;
        const cResult = obj.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const PressableOpacity = Pressables.PressableOpacity;
          const intl = intl2.intl;
          const tmp6 = (
            <PressableOpacity
              accessibilityLabel={intl.string(intl2.t["Aw+09z"])}
              onPress={function onPress() {
                let obj2;
                const obj = { message: obj2.stringify() };
                const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
                showShareActionSheet2;
                obj2 = LogAggregator;
                return showShareActionSheet(obj, "Debug Logs");
              }}
            >
              {null}
            </PressableOpacity>
          );
          cResult[0] = tmp6;
          first = tmp6;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () => {
        const PressableOpacity = Pressables.PressableOpacity;
        const intl = intl2.intl;
        return (
          <PressableOpacity
            accessibilityLabel={intl.string(intl2.t["Aw+09z"])}
            onPress={function onPress() {
              let obj2;
              const obj = { message: obj2.stringify() };
              const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
              showShareActionSheet2;
              obj2 = LogAggregator;
              return showShareActionSheet(obj, "Debug Logs");
            }}
          >
            {null}
          </PressableOpacity>
        );
      },
);
const result = size.fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default memoResult;
