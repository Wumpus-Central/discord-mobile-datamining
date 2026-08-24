// discord_app/modules/quarantine/native/QuarantineModeInfoAlert.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import componentDidMountDefault from "../../../components_native/common/Alert.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../rebrand/native/TextStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { header: null, text: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("ME").Fonts.PRIMARY_BOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey.textAlign = "center";
createCacheKey.marginVertical = 12;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginVertical: 8 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/quarantine/native/QuarantineModeInfoAlert.tsx");

export default function QuarantineModeInfoAlert(onClose) {
  const tmp = callback3();
  let obj = { onClose: onClose.onClose, children: null };
  obj = { style: tmp.header, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.EouHwv);
  const items = [callback(Button.LegacyText, obj), ];
  obj = { style: tmp.text, variant: "text-md/medium", children: null };
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.zNPBMA);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(componentDidMountDefault, obj);
};