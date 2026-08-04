// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { headerImage: null, header: null, subtitle: null, buttons: null };
createCacheKey = { marginLeft: "auto", marginRight: "auto", backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, borderRadius: require("Themes").radii.round, padding: 12, marginTop: 8, marginBottom: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: 8, marginBottom: 8, textAlign: "center" };
createCacheKey[2] = { lineHeight: 18, marginBottom: 8, textAlign: "center" };
createCacheKey[3] = { marginTop: 16, marginBottom: 8, gap: 12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx");

export default function MemberVerificationAlert(arg0) {
  let buttons;
  let header;
  let icon;
  let subtitle;
  ({ icon, subtitle } = arg0);
  ({ header, buttons } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = createCacheKey();
  let obj = {};
  const merged1 = Object.assign(merged);
  obj.noDefaultButtons = true;
  let tmp7 = null;
  if (null != icon) {
    obj = { style: null, children: null };
    obj[0] = tmp2.headerImage;
    obj[1] = callback(icon, { size: "lg" });
    tmp7 = callback(View, obj);
  }
  const items = [tmp7, , , ];
  obj = { style: tmp2.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: header };
  items[1] = callback(require(4189) /* Text */.Heading, obj);
  let tmp10Result = null;
  if (null != subtitle) {
    const obj1 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj1[0] = tmp2.subtitle;
    obj1[3] = subtitle;
    tmp10Result = tmp10(require(4189) /* Text */.Text, obj1);
  }
  items[2] = tmp10Result;
  items[3] = callback(View, { style: tmp2.buttons, children: buttons });
  obj.children = items;
  return closure_5(importDefault(4622), obj);
};