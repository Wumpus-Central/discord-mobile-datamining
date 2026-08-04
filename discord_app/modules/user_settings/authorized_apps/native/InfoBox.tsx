// discord_app/modules/user_settings/authorized_apps/native/InfoBox.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { infoBox: null, infoBoxWarning: null, infoText: null };
createCacheKey = { borderRadius: require("Themes").radii.xs, padding: 8, borderStyle: "solid", borderWidth: 1, borderColor: require("Themes").colors.TEXT_LINK, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_INFO, flexDirection: "row", alignItems: "center", gap: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: require("Themes").colors.ICON_FEEDBACK_WARNING, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_WARNING };
createCacheKey[2] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { INFO: "info", WARNING: "warning" };
let obj1 = { borderColor: require("Themes").colors.ICON_FEEDBACK_WARNING, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_WARNING };
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/authorized_apps/native/InfoBox.tsx");

export default function InfoBox(look) {
  let children;
  let style;
  let INFO = look.look;
  ({ children, style } = look);
  if (INFO === undefined) {
    INFO = obj2.INFO;
  }
  const tmp2 = createCacheKey();
  const items = [tmp2.infoBox];
  const items1 = [, ];
  ({ infoBox: arr2[0], infoBoxWarning: arr2[1] } = tmp2);
  let obj = {};
  obj = { color: null };
  obj[0] = importDefault(712).colors.TEXT_LINK;
  obj[obj2.INFO] = callback(require(4149) /* CircleInformationIcon */.CircleInformationIcon, obj);
  obj = { color: null };
  obj[0] = importDefault(712).colors.ICON_FEEDBACK_WARNING;
  obj[obj2.WARNING] = callback(require(6733) /* CircleErrorIcon */.CircleErrorIcon, obj);
  const obj1 = { style: null, children: null };
  const items2 = [style, ...{ [closure_7.INFO]: items, [closure_7.WARNING]: items1 }[INFO]];
  obj1[0] = items2;
  const items3 = [obj[INFO], ];
  obj2 = { style: tmp2.infoText, variant: "text-sm/semibold", children };
  items3[1] = callback(require(4189) /* Text */.Text, obj2);
  obj1[1] = items3;
  return callback2(View, obj1);
};
export const InfoBoxLooks = obj2;