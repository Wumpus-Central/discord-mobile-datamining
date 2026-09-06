// discord_app/modules/premium/referral_program/native/ProgressWheel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import inlineStyles from "../../../../../_runtime/08453_inlineStyles.js";
import useReferralProgramBannerDetails from "../hooks/useReferralProgramBannerDetails.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = 160;
const strokeDasharray = 2 * Math.PI * 77;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({
  progressCircleContainer: { width: 160, height: 160, alignItems: "center", justifyContent: "center", marginTop: 24 },
  progressCircleImage: { position: "absolute", width: 93, height: 93, borderRadius: 46.5 },
  glowImage: { position: "absolute", width: 180, height: 180 },
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ProgressWheel.tsx");

export default function ProgressWheel(arg0) {
  ({ nReferralsSent, altImage } = arg0);
  const tmp = closure_8();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_MOD_STRONG);
  let obj1 = useToken;
  obj = { style: tmp.progressCircleContainer, children: null };
  const token1 = obj1.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  let tmp9 = nReferralsSent === useReferralProgramBannerDetails.MAX_REFERRALS_SENT;
  if (tmp9) {
    obj = { source: null, style: null };
    let tmp4Result = tmp4(5587);
    obj.source = tmp4(13456);
    obj.style = tmp.glowImage;
    tmp9 = React4(tmp4Result, obj);
  }
  const items = [tmp9, ,];
  const size = { width: v160, height: v160, children: null };
  tmp4Result = tmp4(8453);
  const items1 = [React4(inlineStyles.Circle, { cx: 80, cy: 80, r: 77, stroke: token, strokeWidth: 6, fill: token1 })];
  obj1 = {
    cx: 80,
    cy: 80,
    r: 77,
    stroke: "#53ac66",
    strokeWidth: 6,
    fill: "transparent",
    strokeDasharray,
    strokeDashoffset: strokeDasharray * (1 - (33.3 * nReferralsSent) / 100),
    strokeLinecap: "round",
    rotation: -90,
    origin: "80, 80",
  };
  items1[1] = React4(inlineStyles.Circle, obj1);
  size.children = items1;
  items[1] = hasOwnProperty(tmp4Result, size);
  if (altImage == null) {
    altImage = tmp4(13457);
  }
  items[2] = React4(FastImageDefault, { source: { uri: altImage }, style: tmp.progressCircleImage });
  obj.children = items;
  return hasOwnProperty(View, obj);
}
