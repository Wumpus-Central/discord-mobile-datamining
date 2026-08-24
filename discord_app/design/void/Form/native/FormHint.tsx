// discord_app/design/void/Form/native/FormHint.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import context from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import closure_2 from "../../../../../_runtime/00019_noop.js";
import { Platform } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

require = arg1;
createCacheKey = { formHintText: null, redesignHorizontalPadding: null, horizonatalPadding: null };
createCacheKey = { fontSize: 14, marginBottom: 0, color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: 12 };
createCacheKey[2] = { paddingHorizontal: 16 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("design/void/Form/native/FormHint.tsx");

export default function FormHint(inset) {
  let flag = inset.inset;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, children } = inset);
  const tmp = callback();
  if (React.useContext(context.RedesignCompatContext)) {
    let redesignHorizontalPadding = !flag;
    if (!flag) {
      redesignHorizontalPadding = tmp.redesignHorizontalPadding;
    }
    let obj = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
    const items = [redesignHorizontalPadding, style];
    obj[2] = items;
    obj[3] = children;
    let tmp4Result = tmp4(tmp2(4734).Text, obj);
  } else {
    const items1 = [tmp.formHintText, , ];
    let horizonatalPadding = !flag;
    if (!flag) {
      horizonatalPadding = tmp.horizonatalPadding;
    }
    obj = { style: null, children: null };
    items1[1] = horizonatalPadding;
    items1[2] = style;
    obj[0] = items1;
    obj[1] = children;
    tmp4Result = tmp4(tmp2(1297).LegacyText, obj);
  }
  return tmp4Result;
};