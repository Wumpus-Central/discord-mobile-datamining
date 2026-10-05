// discord_app/design/components/TableRow/native/TableRowDivider.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import TableRowConstants from "TableRowConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let adjustSpacingForIcon;

const View = react_native.View;
const TABLE_DIVIDER_WIDTH = TableRowConstants.TABLE_DIVIDER_WIDTH;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  let num;
  const obj = { height: TABLE_DIVIDER_WIDTH, paddingStart: num, marginTop: -TABLE_DIVIDER_WIDTH };
  num = 12;
  const tmp2 = arg0;
  if (tmp2) {
    num = arg1;
  }
  const obj2 = {
    container: obj,
    divider: { height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE },
  };
  ({ height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
  return obj2;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (adjustSpacingForIcon) => {
      let tmp6;
      const obj = react2;
      const cResult = obj.c(5);
      adjustSpacingForIcon = adjustSpacingForIcon.adjustSpacingForIcon;
      const tmp4 = undefined !== adjustSpacingForIcon && adjustSpacingForIcon;
      const tmpResult = useToken;
      const tmp5 = closure_6(tmp4, tmpResult.useToken(nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING));
      if (cResult[0] !== tmp5.divider) {
        const tmp9 = <View style={tmp5.divider} />;
        cResult[0] = tmp5.divider;
        cResult[1] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp5.container) {
        let tmp10;
        if (cResult[3] === tmp6) {
          tmp10 = cResult[4];
        }
        return tmp10;
      }
      const tmp11 = <View style={tmp5.container}>{tmp6}</View>;
      cResult[2] = tmp5.container;
      cResult[3] = tmp6;
      cResult[4] = tmp11;
      tmp10 = tmp11;
    }
  : (adjustSpacingForIcon) => {
      let flag = adjustSpacingForIcon.adjustSpacingForIcon;
      if (flag === undefined) {
        flag = false;
      }
      const obj = useToken;
      const tmp = closure_6(flag, obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING));
      return <View style={tmp.container}>{null}</View>;
    };
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowDivider.native.tsx");

export const TableRowDivider = tmp3;
