// discord_app/modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { content: null };
createCacheKey = { marginTop: require("Themes").space.PX_24, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx");

export default function ExplicitMediaSettingsActionSheet(options) {
  let subtitle;
  let title;
  options = options.options;
  let SHOW = options.currentValue;
  ({ title, subtitle } = options);
  const items = [options];
  const callback = React.useCallback((arg0) => {
    const options = arg0;
    const found = options.find((value) => value.value === closure_0);
    if (null != found) {
      found.onPress();
      outer1_1(outer1_2[5]).hideActionSheet();
      const obj2 = outer1_1(outer1_2[5]);
    }
  }, items);
  const items1 = [callback(options(5436).BottomSheetTitleHeader, { title, subtitle }), ];
  let obj = { style: createCacheKey().content, children: null };
  if (SHOW == null) {
    SHOW = options(1306).ExplicitContentRedaction.SHOW;
  }
  obj = { startExpanded: true, children: null };
  obj = { defaultValue: SHOW, onChange: callback, hasIcons: false, children: options.map((label) => callback(options(table[10]).TableRadioRow, { label: label.label, value: label.value }, label.value)) };
  obj[1] = callback(options(8030).TableRadioGroup, obj);
  items1[1] = callback(View, obj);
  obj[1] = items1;
  return closure_6(options(5437).BottomSheet, obj);
};