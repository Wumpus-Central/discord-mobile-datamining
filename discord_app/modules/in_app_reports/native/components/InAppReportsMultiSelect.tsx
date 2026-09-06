// discord_app/modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import TableCheckboxRow from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx");

export default function MultiSelect(arg0) {
  ({ element, onPress: require, state: dependencyMap } = arg0);
  if (null != element) {
    if ("checkbox" === element.type) {
      const data = element.data;
      let obj = { style: tmp.container, children: null };
      obj = {
        hasIcons: false,
        children: data.map((item) => {
          [tmp, tmp2, tmp3] = item;
          return jsx(
            TableCheckboxRow.TableCheckboxRow,
            {
              label: tmp2,
              subLabel: tmp3,
              onPress() {
                return require(closure_1_0, closure_1_1);
              },
              checked: tmp in closure_1,
            },
            tmp,
          );
        }),
      };
      obj.children = jsx(TableRowGroup.TableRowGroup, {
        hasIcons: false,
        children: data.map((item) => {
          [tmp, tmp2, tmp3] = item;
          return jsx(
            TableCheckboxRow.TableCheckboxRow,
            {
              label: tmp2,
              subLabel: tmp3,
              onPress() {
                return require(closure_1_0, closure_1_1);
              },
              checked: tmp in closure_1,
            },
            tmp,
          );
        }),
      });
      return (
        <View hasIcons={false}>
          {data.map((item) => {
            [tmp, tmp2, tmp3] = item;
            return jsx(
              TableCheckboxRow.TableCheckboxRow,
              {
                label: tmp2,
                subLabel: tmp3,
                onPress() {
                  return require(closure_1_0, closure_1_1);
                },
                checked: tmp in closure_1,
              },
              tmp,
            );
          })}
        </View>
      );
    }
  }
  return null;
}
