// === Module 7703: SafetyTipsRow ===

// Module 7703 (SafetyTipsRow)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { indexContainer: null };
let size = { width: 32, height: 32, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", marginRight: nativeDefault.space.PX_4 };
obj2.indexContainer = size;
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyTipsRow(arg0) {
  const cResult = require("c").c(10);
  ({ index, tip, description, end } = arg0);
  const tmp4 = closure_4();
  _require = tmp4;
  if (cResult[0] !== tmp4) {
    class TipNumber {
      constructor(arg0) {
        obj = { style: closure_0.indexContainer, children: jsx(closure_0(closure_1[7]).Text, { variant: "heading-md/semibold", color: "text-brand", children: arg0.index }) };
        return jsx(View, obj);
      }
    }
    cResult[0] = tmp4;
    cResult[1] = TipNumber;
  } else {
    class TipNumber {
      constructor(arg0) {
        obj = { style: closure_0.indexContainer, children: jsx(closure_0(closure_1[7]).Text, { variant: "heading-md/semibold", color: "text-brand", children: arg0.index }) };
        return jsx(View, obj);
      }
    }
  }
  if (cResult[2] === TipNumber) {
    class TipNumber {
      constructor(arg0) {
        obj = { style: closure_0.indexContainer, children: jsx(closure_0(closure_1[7]).Text, { variant: "heading-md/semibold", color: "text-brand", children: arg0.index }) };
        return jsx(View, obj);
      }
    }
    if (cResult[5] === description) {
      class TipNumber {
        constructor(arg0) {
          obj = { style: closure_0.indexContainer, children: jsx(closure_0(closure_1[7]).Text, { variant: "heading-md/semibold", color: "text-brand", children: arg0.index }) };
          return jsx(View, obj);
        }
      }
    }
    const obj2 = { icon: tmp6, label: tip, subLabel: description, end };
    const tmp10 = jsx(tmp(6179).TableRow, { icon: tmp6, label: tip, subLabel: description, end });
    cResult[5] = description;
    cResult[6] = end;
    cResult[7] = tmp6;
    cResult[8] = tip;
    cResult[9] = tmp10;
  }
  const tmp7 = <TipNumber index={index} />;
  cResult[2] = TipNumber;
  cResult[3] = index;
  cResult[4] = tmp7;
  const obj = require("c");
  tmp = _require;
}) : (function SafetyTipsRow(arg0) {
  ({ index, tip, description, end } = arg0);
  _require = closure_4();
  return jsx(require("TableRow").TableRow, {
    icon: jsx(function TipNumber(children) {
      return <View style={indexContainer.indexContainer}>{jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: children.index })}</View>;
    }, { index }),
    label: tip,
    subLabel: description,
    end
  });
});