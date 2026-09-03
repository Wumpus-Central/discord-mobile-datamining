// discord_app/modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { content: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx",
);

export default function ExplicitMediaSettingsActionSheet(options) {
  options = options.options;
  let SHOW = options.currentValue;
  ({ title, subtitle } = options);
  const items = [options];
  const callback = React.useCallback((arg0) => {
    options = arg0;
    const found = options.find((value) => value.value === closure_0);
    if (null != found) {
      found.onPress();
      closure_1_1(closure_1_2[5]).hideActionSheet();
      const obj2 = closure_1_1(closure_1_2[5]);
    }
  }, items);
  const items1 = [callback(options(5630).BottomSheetTitleHeader, { title, subtitle })];
  let obj = { style: callback2().content, children: null };
  if (SHOW == null) {
    SHOW = options(1305).ExplicitContentRedaction.SHOW;
  }
  obj = { startExpanded: true, children: null };
  obj = {
    defaultValue: SHOW,
    onChange: callback,
    hasIcons: false,
    children: options.map((label) =>
      callback(options(table[10]).TableRadioRow, { label: label.label, value: label.value }, label.value),
    ),
  };
  obj[1] = callback(options(7704).TableRadioGroup, obj);
  items1[1] = callback(View, obj);
  obj[1] = items1;
  return closure_6(options(5631).BottomSheet, obj);
}
