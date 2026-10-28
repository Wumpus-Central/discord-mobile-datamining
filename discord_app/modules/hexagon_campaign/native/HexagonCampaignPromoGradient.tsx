// === Module 16139: HexagonCampaignPromoGradient ===

// Module 16139 (HexagonCampaignPromoGradient)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 5288 */;
import LinearGradientDefault from "LinearGradient" /* 5294 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const angleCenter = { x: 0.5, y: 0.5 };
[closure_9, c10, closure_11, closure_12] = fn(16140).HEXAGON_CAMPAIGN_PROMO_GRADIENT_STOPS;
const prop = fn(16140).HEXAGON_CAMPAIGN_PROMO_GRADIENT_STOPS;
const locations = prop.map((location) => location.location);
const createStyles = fn(5004);
let obj2 = { shade: null };
const importDefaultResultResult = _slicedToArray(fn(16140).HEXAGON_CAMPAIGN_PROMO_GRADIENT_STOPS, 4);
obj2.shade = { backgroundColor: nativeDefault.colors[fn(undefined, 16140).HEXAGON_CAMPAIGN_PROMO_GRADIENT_SHADE_TOKEN] };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors[fn(undefined, 16140).HEXAGON_CAMPAIGN_PROMO_GRADIENT_SHADE_TOKEN] };
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignPromoGradient.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignPromoGradient(angle) {
  const cResult = c.c(13);
  angle = angle.angle;
  const tmp3 = closure_14();
  const token = useToken.useToken(nativeDefault.colors[user.token]);
  const token1 = useToken.useToken(nativeDefault.colors[user2.token]);
  const token2 = useToken.useToken(nativeDefault.colors[user3.token]);
  const token3 = useToken.useToken(nativeDefault.colors[user4.token]);
  if (cResult[0] === token) {
    if (cResult[1] === token3) {
      if (cResult[2] === token1) {
        if (cResult[3] === token2) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === angle) {
          if (cResult[6] === tmp9) {
            let tmp10 = cResult[7];
          }
          if (cResult[8] !== tmp3.shade) {
            const obj6 = { style: null, pointerEvents: "none" };
            const items = [React3.absoluteFill, tmp3.shade];
            obj6.style = items;
            const tmp20 = hasOwnProperty(React4, obj6);
            cResult[8] = tmp3.shade;
            cResult[9] = tmp20;
            let tmp16 = tmp20;
          } else {
            tmp16 = cResult[9];
          }
          if (cResult[10] === tmp10) {
            if (cResult[11] === tmp16) {
              let tmp21 = cResult[12];
            }
            return tmp21;
          }
          const obj7 = { children: null };
          const items1 = [tmp10, tmp16];
          obj7.children = items1;
          const tmp24 = React5(timestampProducer, obj7);
          cResult[10] = tmp10;
          cResult[11] = tmp16;
          cResult[12] = tmp24;
          tmp21 = tmp24;
        }
        const obj8 = { useAngle: true, angle, angleCenter, colors: tmp9, locations, style: React3.absoluteFill, pointerEvents: "none" };
        const tmp15 = hasOwnProperty(LinearGradientDefault, obj8);
        cResult[5] = angle;
        cResult[6] = tmp9;
        cResult[7] = tmp15;
        tmp10 = tmp15;
      }
    }
  }
  const items2 = [token, token1, token2, token3];
  cResult[0] = token;
  cResult[1] = token3;
  cResult[2] = token1;
  cResult[3] = token2;
  cResult[4] = items2;
  tmp9 = items2;
}) : (function HexagonCampaignPromoGradient(angle) {
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
});