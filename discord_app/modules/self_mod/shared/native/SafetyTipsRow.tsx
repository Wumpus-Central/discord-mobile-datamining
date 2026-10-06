// discord_app/modules/self_mod/shared/native/SafetyTipsRow.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { indexContainer: size };
size = {
  width: 32,
  height: 32,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  marginRight: nativeDefault.space.PX_4,
};
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let description;
      let end;
      let index;
      let indexContainer;
      let tip;
      let tmp5;
      const obj = require("react");
      const cResult = obj.c(10);
      ({ index, tip, description, end } = arg0);
      const tmp4 = closure_4();
      const tmp = _require;
      _require = tmp4;
      if (cResult[0] !== tmp4) {
        const fn = function c(children) {
          return (
            <View style={indexContainer.indexContainer}>
              {jsx(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: children.index })}
            </View>
          );
        };
        cResult[0] = tmp4;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp5) {
        let tmp6;
        if (cResult[3] === index) {
          tmp6 = cResult[4];
        }
        if (cResult[5] === description) {
          if (cResult[6] === end) {
            if (cResult[7] === tmp6) {
              let tmp8;
              if (cResult[8] === tip) {
                tmp8 = cResult[9];
              }
              return tmp8;
            }
          }
        }
        const tmp10 = jsx(tmp(6000).TableRow, { icon: tmp6, label: tip, subLabel: description, end });
        cResult[5] = description;
        cResult[6] = end;
        cResult[7] = tmp6;
        cResult[8] = tip;
        cResult[9] = tmp10;
        tmp8 = tmp10;
      }
      const tmp7 = <tmp5 index={index} />;
      cResult[2] = tmp5;
      cResult[3] = index;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    }
  : (arg0) => {
      let description;
      let end;
      let index;
      let indexContainer;
      let tip;
      ({ index, tip, description, end } = arg0);
      _require = closure_4();
      const TableRow = require("TableRow").TableRow;
      return <TableRow icon={null} label={tip} subLabel={description} end={end} />;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsRow.tsx");

export default tmp3;
