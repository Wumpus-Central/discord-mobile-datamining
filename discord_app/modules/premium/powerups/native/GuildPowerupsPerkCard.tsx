// discord_app/modules/premium/powerups/native/GuildPowerupsPerkCard.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../../_runtime/04725_LinearGradient.js";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { AccessibilityAnnouncer } from "../../../../design/shared.tsx";
import { useTheme } from "../../../../hooks/useTheme.tsx";
import { GuildPowerupCardFooterActive } from "GuildPowerupsCardFooter.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, card: null, contentContainer: null, imageContainer: null, gradient: null, headerContainer: null, badge: null };
createCacheKey = { marginHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: 0, overflow: "hidden" };
createCacheKey[2] = { gap: require("Themes").space.PX_16, padding: require("Themes").space.PX_16 };
createCacheKey[3] = { width: "100%", height: 160 };
createCacheKey[4] = { position: "absolute", left: 0, right: 0, top: 0, height: "100%" };
let obj1 = { gap: require("Themes").space.PX_16, padding: require("Themes").space.PX_16 };
createCacheKey[5] = { gap: require("Themes").space.PX_4 };
const obj2 = { gap: require("Themes").space.PX_4 };
createCacheKey[6] = { position: "absolute", top: require("Themes").space.PX_12, right: require("Themes").space.PX_12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { position: "absolute", top: require("Themes").space.PX_12, right: require("Themes").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerkCard.tsx");

export default function GuildPowerupsPerkCard(arg0) {
  let badge;
  let description;
  let imageUrl;
  let isImageAnimated;
  let onPress;
  let riveComponent;
  let status;
  let style;
  let title;
  ({ imageUrl, isImageAnimated } = arg0);
  ({ title, description } = arg0);
  if (isImageAnimated === undefined) {
    isImageAnimated = true;
  }
  ({ riveComponent, status, badge } = arg0);
  ({ style, onPress } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = createCacheKey();
  let obj = AccessibilityAnnouncer;
  const tmp5 = useTheme();
  obj = { containerStyle: items, style: tmp2.card, status, onPress, children: null };
  items = [tmp2.container, style];
  obj = { style: tmp2.imageContainer, children: null };
  let tmp3Result = tmp3(11926);
  if (riveComponent == null) {
    tmp3Result = tmp3(11883);
    if (imageUrl == null) {
      imageUrl = "";
    }
    const obj1 = { imageUrl: null, isAnimated: null };
    obj1[0] = imageUrl;
    obj1[1] = isImageAnimated;
    riveComponent = callback(tmp3Result, obj1);
    const tmp11 = callback;
  }
  const items1 = [riveComponent, ];
  const tmp7 = obj.isThemeDark(useTheme()) ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"];
  items1[1] = callback(LinearGradient, { colors: obj.isThemeDark(useTheme()) ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"], style: tmp2.gradient });
  obj[1] = items1;
  const items2 = [closure_5(View, obj), , , ];
  const obj3 = { style: tmp2.contentContainer, children: null };
  const obj4 = { style: tmp2.headerContainer, children: null };
  const items3 = [callback(Text.Text, { variant: "heading-md/bold", children: title }), callback(Text.Text, { variant: "text-sm/medium", children: description })];
  obj4[1] = items3;
  const items4 = [closure_5(View, obj4), ];
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.status = status;
  items4[1] = callback(GuildPowerupCardFooterActive.GuildPowerupsCardFooter, obj5);
  obj3[1] = items4;
  items2[1] = closure_5(View, obj3);
  let tmp13Result = "new" === badge;
  if (tmp13Result) {
    const obj6 = { text: null, style: null };
    const intl = tmp6(1236).intl;
    obj6[0] = intl.string(tmp6(1236).t.y2b7CA);
    obj6[1] = tmp2.badge;
    tmp13Result = tmp13(tmp6(1297).TextBadge, obj6);
  }
  items2[2] = tmp13Result;
  tmp13Result = "beta" === badge;
  if (tmp13Result) {
    const obj7 = { text: null, color: null, style: null };
    const intl2 = tmp6(1236).intl;
    obj7[0] = intl2.string(tmp6(1236).t.oW0eUd);
    obj7[1] = tmp6(1297).BadgeColors.BRAND;
    obj7[2] = tmp2.badge;
    tmp13Result = tmp13(tmp6(1297).TextBadge, obj7);
  }
  items2[3] = tmp13Result;
  obj[4] = items2;
  return closure_5(tmp3Result, obj);
};