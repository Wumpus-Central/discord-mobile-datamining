import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx");

export default function MultiSelect(arg0) {
  let dependencyMap;
  let element;
  let require;
  ({ element, onPress: require, state: dependencyMap } = arg0);
  if (null != element) {
    if ("checkbox" === element.type) {
      const data = element.data;
      let obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { hasIcons: false, children: null };
      obj[1] = data.map((arg0) => {
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = arg0;
        return outer1_3(outer1_0(outer1_1[6]).TableCheckboxRow, {
          label: tmp2,
          subLabel: tmp3,
          onPress() {
            return outer1_0(closure_0, closure_1);
          },
          checked: tmp in closure_1
        }, tmp);
      });
      obj[1] = jsx(require(5620) /* TableRowGroupTitle */.TableRowGroup, { hasIcons: false, children: null });
      return <View hasIcons={false}>{null}</View>;
    }
  }
  return null;
};