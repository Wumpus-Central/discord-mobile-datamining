// discord_app/modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Form from "../../../../../design/void/Form/native/index.tsx";
import closure_2 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

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