// === Module 12860: MultiSelect ===

// Module 12860 (MultiSelect)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5873 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
noopAll;
createCacheKey = { container: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx");

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
        return closure_1_3(closure_1_0(closure_1_1[6]).TableCheckboxRow, {
          label: tmp2,
          subLabel: tmp3,
          onPress() {
            return closure_1_0(closure_0, closure_1);
          },
          checked: tmp in closure_1
        }, tmp);
      });
      obj[1] = jsx(TableRowGroupTitle.TableRowGroup, { hasIcons: false, children: null });
      return <View hasIcons={false}>{null}</View>;
    }
  }
  return null;
};