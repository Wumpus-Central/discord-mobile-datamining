// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import TextVariants from "../../../../../discord_common/js/packages/tokens/typography/generated/TextVariants.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp10;
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(5);
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
      if (cResult[0] !== token) {
        const obj3 = { paddingHorizontal: token };
        cResult[0] = token;
        cResult[1] = obj3;
        tmp6 = obj3;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        const TEXT_VARIANT = TextVariants.TEXT_VARIANT;
        const tmp9 = (
          <TableRowGroup title="Text Variants" hasIcons={false}>
            {TEXT_VARIANT.map((variant) => {
              let tmp = null;
              if ("code" !== variant) {
                const TableRow = TableRow2.TableRow;
                tmp = <TableRow key={variant} label={null} />;
              }
              return tmp;
            })}
          </TableRowGroup>
        );
        cResult[2] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp6) {
        ({ spacing: nativeDefault.space.PX_24, style: tmp6, children: tmp7 });
        const Stack = Stack_Stack.Stack;
        const tmp13 = <ScrollView>{null}</ScrollView>;
        cResult[3] = tmp6;
        cResult[4] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[4];
      }
      return tmp10;
    }
  : () => {
      let TEXT_VARIANT;
      const obj = useToken;
      const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
      ({ spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token }, children: null });
      const Stack = Stack_Stack.Stack;
      ({
        title: "Text Variants",
        hasIcons: false,
        children: TEXT_VARIANT.map((variant) => {
          let tmp = null;
          if ("code" !== variant) {
            const TableRow = TableRow2.TableRow;
            tmp = <TableRow key={variant} label={null} />;
          }
          return tmp;
        }),
      });
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      TEXT_VARIANT = TextVariants.TEXT_VARIANT;
      return <ScrollView>{null}</ScrollView>;
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx",
);

export default tmp3;
