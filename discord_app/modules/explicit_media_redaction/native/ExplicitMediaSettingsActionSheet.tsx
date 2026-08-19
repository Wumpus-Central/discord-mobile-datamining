// === Module 14179: ExplicitMediaSettingsActionSheet ===

// Module 14179 (ExplicitMediaSettingsActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { marginTop: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx");

export default function ExplicitMediaSettingsActionSheet(options) {
  options = options.options;
  let SHOW = options.currentValue;
  ({ title, subtitle } = options);
  const items = [options];
  const callback = React.useCallback((arg0) => {
    options = arg0;
    const found = options.find((item, index) => item.value === closure_0);
    if (null != found) {
      found.onPress();
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    }
  }, items);
  const items1 = [callback(options(6949).BottomSheetTitleHeader, { title, subtitle }), ];
  let obj = { style: callback2().content, children: null };
  if (SHOW == null) {
    SHOW = options(1306).ExplicitContentRedaction.SHOW;
  }
  obj = { defaultValue: SHOW, onChange: callback, hasIcons: false, children: options.map((item, index) => callback(options(table[10]).TableRadioRow, { label: item.label, value: item.value }, item.value)) };
  obj[1] = callback(options(8101).TableRadioGroup, obj);
  items1[1] = callback(View, obj);
  obj[1] = items1;
  return callback(options(6950).BottomSheet, obj);
};