// discord_app/modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importDefaultResult from "../../../../rebrand/native/TextStyles.tsx";

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