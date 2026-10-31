// === Module 16470: HexagonCampaignPromoGradient ===

// Module 16470 (HexagonCampaignPromoGradient)
import nativeDefault from "native" /* 575 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import useToken from "useToken" /* 5596 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const angleCenter = { x: 0.5, y: 0.5 };
[closure_9, c10, closure_11, closure_12] = fn(16471).HEXAGON_CAMPAIGN_PROMO_GRADIENT_STOPS;
const prop = fn(16471).HEXAGON_CAMPAIGN_PROMO_GRADIENT_STOPS;
const locations = prop.map((location) => location.location);
const createStyles = fn(5014);
let obj2 = { shade: null };
const importDefaultResultResult = _slicedToArray(fn(16471).HEXAGON_CAMPAIGN_PROMO_GRADIENT_STOPS, 4);
obj2.shade = { backgroundColor: nativeDefault.colors[fn(undefined, 16471).HEXAGON_CAMPAIGN_PROMO_GRADIENT_SHADE_TOKEN] };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignPromoGradient.tsx");

export default function HexagonCampaignPromoGradient(angle) {
  const tmp = closure_14();
  const token = useToken.useToken(nativeDefault.colors[user.token]);
  const token1 = useToken.useToken(nativeDefault.colors[user2.token]);
  const token2 = useToken.useToken(nativeDefault.colors[user3.token]);
  const obj5 = { children: null };
  const token3 = useToken.useToken(nativeDefault.colors[user4.token]);
  const obj6 = { useAngle: true, angle: angle.angle, angleCenter, colors: null, locations, style: React3.absoluteFill, pointerEvents: "none" };
  const items = [token, token1, token2, token3];
  obj6.colors = items;
  const items1 = [hasOwnProperty(LinearGradientDefault, obj6), ];
  const obj7 = { style: null, pointerEvents: "none" };
  const items2 = [React3.absoluteFill, tmp.shade];
  obj7.style = items2;
  items1[1] = hasOwnProperty(React4, obj7);
  obj5.children = items1;
  return React5(timestampProducer, obj5);
};