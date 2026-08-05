// discord_app/modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { headerContainer: null };
obj = { padding: require("Themes").space.PX_16 };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default function GuildPowerupsSectionHeader(arg0) {
  let description;
  let title;
  ({ title, description } = arg0);
  const obj = { style: callback3().headerContainer, children: null };
  const items = [callback(require(4281) /* Text */.Text, { variant: "heading-lg/semibold", accessibilityRole: "header", children: title }), callback(require(4281) /* Text */.Text, { variant: "text-md/normal", children: description })];
  obj[1] = items;
  return callback2(View, obj);
};