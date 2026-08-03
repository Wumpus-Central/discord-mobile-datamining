import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { flexDirection: "row", width: "100%", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.lg, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default function AppLauncherBooleanOption(arg0) {
  let dependencyMap;
  let hasError;
  let option;
  let require;
  let style;
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
  const items = [createCacheKey().container, style];
  return jsx(require(7639) /* Form */.FormCheckboxRow, {
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