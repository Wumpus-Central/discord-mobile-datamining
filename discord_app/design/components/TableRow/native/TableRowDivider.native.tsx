// discord_app/design/components/TableRow/native/TableRowDivider.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const TABLE_DIVIDER_WIDTH = fn(5996).TABLE_DIVIDER_WIDTH;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  const obj = { height: TABLE_DIVIDER_WIDTH, paddingStart: null, marginTop: null };
  let num = 12;
  if (arg0) {
    num = arg1;
  }
  const obj2 = {
    container: obj,
    divider: { height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE },
  };
  obj.paddingStart = num;
  obj.marginTop = -TABLE_DIVIDER_WIDTH;
  return obj2;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowDivider.native.tsx");

export const TableRowDivider = ReactCompilerGating.isReactCompilerEnabled()
  ? (adjustSpacingForIcon) => {
      const cResult = c.c(5);
      adjustSpacingForIcon = adjustSpacingForIcon.adjustSpacingForIcon;
      const tmp4 = undefined !== adjustSpacingForIcon && adjustSpacingForIcon;
      const tmp5 = closure_6(tmp4, useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING));
      if (cResult[0] !== tmp5.divider) {
        const obj2 = { style: tmp5.divider };
        const tmp9 = <View style={tmp5.divider} />;
        cResult[0] = tmp5.divider;
        cResult[1] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp5.container) {
        if (cResult[3] === tmp6) {
          let tmp10 = cResult[4];
        }
        return tmp10;
      }
      const tmp11 = <View style={tmp5.container}>{tmp6}</View>;
      cResult[2] = tmp5.container;
      cResult[3] = tmp6;
      cResult[4] = tmp11;
      tmp10 = tmp11;
      const obj3 = { style: tmp5.container, children: tmp6 };
      const tmpResult = useToken;
    }
  : (adjustSpacingForIcon) => {
      let flag = adjustSpacingForIcon.adjustSpacingForIcon;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_6(flag, useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING));
      const obj2 = { style: tmp.container, children: <View style={tmp.divider} /> };
      return (
        <View style={tmp.container}>
          <View style={tmp.divider} />
        </View>
      );
    };
