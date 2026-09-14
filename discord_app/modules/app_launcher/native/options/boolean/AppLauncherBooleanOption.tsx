// discord_app/modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Form from "../../../../../design/void/Form/native/index.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
const obj2 = {
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.lg,
    alignItems: "center",
  },
};
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default function AppLauncherBooleanOption(arg0) {
  ({ initialValue: require, onPress: dependencyMap } = arg0);
  selected = undefined;
  closure_3 = undefined;
  ({ style, option, hasError } = arg0);
  [selected, closure_3] = noop.useState(() => {
    let tmp2 = null != require;
    if (tmp2) {
      tmp2 = "text" === require.type;
    }
    if (tmp2) {
      tmp2 = "true" === require.text;
    }
    return tmp2;
  });
  const obj = {
    start: true,
    end: true,
    style: null,
    hasError,
    label: option.displayName,
    selected,
    onPress() {
      closure_3(!first);
      dependencyMap(!first);
    },
  };
  const items = [closure_5().container, style];
  obj.style = items;
  return jsx(Form.FormCheckboxRow, {
    start: true,
    end: true,
    style: null,
    hasError,
    label: option.displayName,
    selected,
    onPress() {
      closure_3(!first);
      dependencyMap(!first);
    },
  });
}
