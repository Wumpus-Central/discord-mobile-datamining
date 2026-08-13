// discord_app/modules/premium/referral_program/native/ProgressWheel.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { inlineStyles } from "../../../../../_runtime/07880_inlineStyles.js";
import { metadata } from "../../../../../discord_assets/assets/premium/referral_program/referralTrial.png.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { preload } from "../../../../components_native/common/FastImage.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";
import { MAX_REFERRALS_SENT } from "../hooks/useReferralProgramBannerDetails.tsx";

let c4;
let c5;
({ jsx: c4, jsxs: c5 } = jsxProd);
let c6 = 160;
let closure_7 = 2 * Math.PI * 77;
let closure_8 = createCacheKey.createStyles({ progressCircleContainer: { width: 160, height: 160, alignItems: "center", justifyContent: "center", marginTop: 24 }, progressCircleImage: { position: "absolute", width: 93, height: 93, borderRadius: 46.5 }, glowImage: { position: "absolute", width: 180, height: 180 } });
const result = require("createCacheKey").fileFinishedImporting("modules/premium/referral_program/native/ProgressWheel.tsx");

export default function ProgressWheel(nReferralsSent) {
  nReferralsSent = nReferralsSent.nReferralsSent;
  const tmp = callback2();
  let obj = map;
  const token = obj.useToken(Themes.colors.BACKGROUND_MOD_STRONG);
  let obj1 = map;
  obj = { style: tmp.progressCircleContainer, children: null };
  const token1 = obj1.useToken(Themes.colors.BACKGROUND_SURFACE_HIGH);
  let tmp9 = nReferralsSent === MAX_REFERRALS_SENT.MAX_REFERRALS_SENT;
  if (tmp9) {
    obj = { source: null, style: null };
    let tmp4Result = tmp4(5308);
    obj[0] = tmp4(12792);
    obj[1] = tmp.glowImage;
    tmp9 = callback(tmp4Result, obj);
  }
  const items = [tmp9, , ];
  obj1 = { width: c6, height: c6, children: null };
  tmp4Result = tmp4(7880);
  const items1 = [callback(inlineStyles.Circle, { cx: 80, cy: 80, r: 77, stroke: token, strokeWidth: 6, fill: token1 }), callback(inlineStyles.Circle, { cx: 80, cy: 80, r: 77, stroke: "#53ac66", strokeWidth: 6, fill: "transparent", strokeDasharray: closure_7, strokeDashoffset: closure_7 * (1 - 33.3 * nReferralsSent / 100), strokeLinecap: "round", rotation: -90, origin: "80, 80" })];
  obj1[2] = items1;
  items[1] = closure_5(tmp4Result, obj1);
  const obj3 = { source: null, style: null };
  const obj4 = { uri: null };
  obj4[0] = metadata;
  obj3[0] = obj4;
  obj3[1] = tmp.progressCircleImage;
  items[2] = callback(preload, obj3);
  obj[1] = items;
  return closure_5(View, obj);
};