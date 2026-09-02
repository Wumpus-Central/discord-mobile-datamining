// === Module 11970: AppLauncherBooleanOption ===

// Module 11970 (AppLauncherBooleanOption)
import ThemesDefault from "Themes" /* 709 */;
import Form from "Form" /* 8372 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
createCacheKey = { container: null };
createCacheKey = { flexDirection: "row", width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, alignItems: "center" };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default function AppLauncherBooleanOption(arg0) {
  ({ initialValue: require, onPress: dependencyMap } = arg0);
  let first;
  let React;
  ({ style, option, hasError } = arg0);
  let tmp2 = first(React.useState(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = "text" === tmp.type;
    }
    if (tmp2) {
      tmp2 = "true" === tmp.text;
    }
    return tmp2;
  }), 2);
  first = tmp2[0];
  React = tmp2[1];
  const items = [callback().container, style];
  return jsx(Form.FormCheckboxRow, {
    start: true,
    end: true,
    style: items,
    hasError,
    label: option.displayName,
    selected: first,
    onPress() {
      callback2(!first);
      callback(!first);
    }
  });
};