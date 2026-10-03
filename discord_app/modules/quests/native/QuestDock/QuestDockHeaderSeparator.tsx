// discord_app/modules/quests/native/QuestDock/QuestDockHeaderSeparator.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
const obj = { separator: null };
let size = { backgroundColor: nativeDefault.colors.TEXT_DEFAULT, opacity: 0.2, height: 18, width: 1.5 };
obj.separator = size;
let closure_4 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockHeaderSeparator.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        const tmp2 = closure_4();
        if (cResult[0] !== tmp2.separator) {
          const obj2 = { style: tmp2.separator };
          const tmp6 = <View style={tmp2.separator} />;
          cResult[0] = tmp2.separator;
          cResult[1] = tmp6;
          let tmp3 = tmp6;
        } else {
          tmp3 = cResult[1];
        }
        return tmp3;
      }
    : () => <View style={closure_4().separator} />,
);
