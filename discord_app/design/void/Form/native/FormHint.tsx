// discord_app/design/void/Form/native/FormHint.tsx
import noop from "noop";
import { Platform } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { context } from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";

const require = arg1;
createCacheKey = { formHintText: null, redesignHorizontalPadding: null, horizonatalPadding: null };
createCacheKey = { fontSize: 14, marginBottom: 0, color: require("Themes").colors.TEXT_MUTED };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: 12 };
createCacheKey[2] = { paddingHorizontal: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormHint.tsx");

export default function FormHint(inset) {
  let children;
  let style;
  let flag = inset.inset;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, children } = inset);
  const tmp = createCacheKey();
  if (React.useContext(context /* context */.RedesignCompatContext)) {
    let redesignHorizontalPadding = !flag;
    if (!flag) {
      redesignHorizontalPadding = tmp.redesignHorizontalPadding;
    }
    let obj = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
    const items = [redesignHorizontalPadding, style];
    obj[2] = items;
    obj[3] = children;
    let tmp4Result = tmp4(tmp2(4281).Text, obj);
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