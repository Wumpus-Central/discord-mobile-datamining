// discord_app/modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Form from "../../../../../design/void/Form/native/index.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = {
  flexDirection: "row",
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
};
createStyles.container = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default function AppLauncherBooleanOption(arg0) {
  ({ initialValue: require, onPress: dependencyMap } = arg0);
  ({ style, option, hasError } = arg0);
  let tmp2 = _slicedToArray(
    noop.useState(() => {
      let tmp2 = null != require;
      if (tmp2) {
        tmp2 = "text" === tmp.type;
      }
      if (tmp2) {
        tmp2 = "true" === tmp.text;
      }
      return tmp2;
    }),
    2,
  );
  const selected = tmp2[0];
  closure_3 = tmp2[1];
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
