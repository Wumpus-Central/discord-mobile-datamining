// discord_app/modules/parent_tools/native/FamilyCenterEmpty.tsx
import c from "../../../../_runtime/00576_c.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_4 = createStyles.createStyles({
  empty: { display: "flex", alignItems: "center", justifyContent: "center" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterEmpty(text) {
      const cResult = c.c(5);
      text = text.text;
      const tmp4 = closure_4();
      if (cResult[0] !== text) {
        const obj2 = { variant: "text-sm/medium", color: "text-muted", children: text };
        const tmp7 = jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: text });
        cResult[0] = text;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.empty) {
        if (cResult[3] === tmp5) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = <View style={tmp4.empty}>{tmp5}</View>;
      cResult[2] = tmp4.empty;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj3 = { style: tmp4.empty, children: tmp5 };
    }
  : function FamilyCenterEmpty(children) {
      return (
        <View style={closure_4().empty}>
          {jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: children.text })}
        </View>
      );
    };
