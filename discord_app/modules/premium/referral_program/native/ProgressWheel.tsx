// === Module 13817: ProgressWheel ===

// Module 13817 (ProgressWheel)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4526 */;
import FastImageDefault from "FastImage" /* 5892 */;
import inlineStyles from "inlineStyles" /* 8807 */;
import useReferralProgramBannerDetails from "useReferralProgramBannerDetails" /* 13806 */;
import _modDef13818 from "module_13818" /* 13818 */;
import _modDef13819 from "module_13819" /* 13819 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = 160;
const strokeDasharray = 2 * Math.PI * 77;
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles({ progressCircleContainer: { width: 160, height: 160, alignItems: "center", justifyContent: "center", marginTop: 24 }, progressCircleImage: { position: "absolute", width: 93, height: 93, borderRadius: 46.5 }, glowImage: { position: "absolute", width: 180, height: 180 } });
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ProgressWheel.tsx");

export default function ProgressWheel(arg0) {
  ({ nReferralsSent, altImage } = arg0);
  const tmp = closure_8();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_MOD_STRONG);
  const obj3 = { style: tmp.progressCircleContainer, children: null };
  const token1 = useToken.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  let tmp9 = nReferralsSent === useReferralProgramBannerDetails.MAX_REFERRALS_SENT;
  if (tmp9) {
    const obj4 = { source: _modDef13818, style: tmp.glowImage };
    tmp9 = React4(FastImageDefault, obj4);
    const tmp4Result = FastImageDefault;
  }
  const items = [tmp9, , ];
  const size = { width: v160, height: v160, children: null };
  const items1 = [React4(inlineStyles.Circle, { cx: 80, cy: 80, r: 77, stroke: token, strokeWidth: 6, fill: token1 }), React4(inlineStyles.Circle, { cx: 80, cy: 80, r: 77, stroke: "#53ac66", strokeWidth: 6, fill: "transparent", strokeDasharray, strokeDashoffset: strokeDasharray * (1 - 33.3 * nReferralsSent / 100), strokeLinecap: "round", rotation: -90, origin: "80, 80" })];
  size.children = items1;
  items[1] = hasOwnProperty(inlineStylesDefault, size);
  const obj5 = { cx: 80, cy: 80, r: 77, stroke: "#53ac66", strokeWidth: 6, fill: "transparent", strokeDasharray, strokeDashoffset: strokeDasharray * (1 - 33.3 * nReferralsSent / 100), strokeLinecap: "round", rotation: -90, origin: "80, 80" };
  const tmp4Result3 = inlineStylesDefault;
  if (altImage == null) {
    altImage = _modDef13819;
  }
  items[2] = React4(FastImageDefault, { source: { uri: altImage }, style: tmp.progressCircleImage });
  obj3.children = items;
  return hasOwnProperty(View, obj3);
};