// === Module 8662: MultipleChoiceField ===

// Module 8662 (MultipleChoiceField)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importDefaultResult from "createTextStyle" /* 6782 */;

const require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("sum").Fonts.DISPLAY_SEMIBOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16, { uppercase: false }));
createCacheKey.paddingBottom = 16;
createCacheKey[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx");

export default function MultipleChoiceField(hasIcons) {
  ({ field, onChange: require } = hasIcons);
  const tmp = callback2();
  const choices = field.choices;
  let num = field.response;
  const items = [choices];
  const memo = React.useMemo(() => choices.map((item, index) => ({ name: item, value: index })), items);
  let obj = { style: tmp.formHeader, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label };
  const items1 = [callback(require(choices[7]).Text, obj), ];
  if (num == null) {
    num = -1;
  }
  obj = {
    defaultValue: num,
    onChange(arg0) {
      return callback(arg0);
    },
    hasIcons: hasIcons.hasIcons,
    children: memo.map((item, index) => callback2(callback(choices[9]).TableRadioRow, { label: item.name, value: item.value }, item.value))
  };
  items1[1] = callback(require(choices[8]).TableRadioGroup, obj);
  obj[1] = items1;
  return callback(View, obj);
};