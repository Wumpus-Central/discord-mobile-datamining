// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import componentDidMountDefault from "componentDidMount" /* 4763 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { headerImage: null, header: null, subtitle: null, buttons: null };
createCacheKey = { marginLeft: "auto", marginRight: "auto", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: ThemesDefault.radii.round, padding: 12, marginTop: 8, marginBottom: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: 8, marginBottom: 8, textAlign: "center" };
createCacheKey[2] = { lineHeight: 18, marginBottom: 8, textAlign: "center" };
createCacheKey[3] = { marginTop: 16, marginBottom: 8, gap: 12 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx");

export default function MemberVerificationAlert(arg0) {
  ({ icon, subtitle } = arg0);
  ({ header, buttons } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = callback2();
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
  items[1] = callback(Text.Heading, obj);
  let tmp10Result = null;
  if (null != subtitle) {
    obj1 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj1[0] = tmp2.subtitle;
    obj1[3] = subtitle;
    tmp10Result = tmp10(Text.Text, obj1);
  }
  items[2] = tmp10Result;
  items[3] = callback(View, { style: tmp2.buttons, children: buttons });
  obj.children = items;
  return closure_5(componentDidMountDefault, obj);
};