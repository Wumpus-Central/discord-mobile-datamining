// discord_app/modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { container: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx",
);

export default function MultiSelect(arg0) {
  ({ element, onPress: require, state: dependencyMap } = arg0);
  if (null != element) {
    if ("checkbox" === element.type) {
      const data = element.data;
      let obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { hasIcons: false, children: null };
      obj[1] = data.map((arg0) => {
        [tmp, tmp2, tmp3] = arg0;
        return closure_1_3(
          closure_1_0(closure_1_1[6]).TableCheckboxRow,
          {
            label: tmp2,
            subLabel: tmp3,
            onPress() {
              return closure_1_0(closure_0, closure_1);
            },
            checked: tmp in closure_1,
          },
          tmp,
        );
      });
      obj[1] = jsx(TableRowGroupTitle.TableRowGroup, { hasIcons: false, children: null });
      return <View hasIcons={false}>{null}</View>;
    }
  }
  return null;
}
