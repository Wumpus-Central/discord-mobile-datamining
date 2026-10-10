// === Module 13719: ProgressWheel ===

// Module 13719 (ProgressWheel)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4818 */;
import FastImageDefault from "FastImage" /* 6156 */;
import inlineStyles from "inlineStyles" /* 7576 */;
import useReferralProgramBannerDetails from "useReferralProgramBannerDetails" /* 13702 */;
import _modDef13720 from "module_13720" /* 13720 */;
import _modDef13721 from "module_13721" /* 13721 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = 160;
const strokeDasharray = 2 * Math.PI * 77;
let c8 = "#53ac66";
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles({ progressCircleContainer: { width: 160, height: 160, alignItems: "center", justifyContent: "center", marginTop: 24 }, progressCircleImage: { position: "absolute", width: 93, height: 93, borderRadius: 46.5 }, glowImage: { position: "absolute", width: 180, height: 180 } });
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/premium/referral_program/native/ProgressWheel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ProgressWheel(arg0) {
  const cResult = c.c(21);
  ({ nReferralsSent, altImage } = arg0);
  const tmp4 = closure_9();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_MOD_STRONG);
  const token1 = useToken.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  const result = 33.3 * nReferralsSent;
  const tmp10 = nReferralsSent === useReferralProgramBannerDetails.MAX_REFERRALS_SENT;
  if (cResult[0] === tmp10) {
    if (cResult[1] === tmp4.glowImage) {
      let tmp11 = cResult[2];
    }
    if (cResult[3] === token1) {
      if (cResult[4] === token) {
        let tmp15 = cResult[5];
      }
      const result1 = strokeDasharray * (1 - result / 100);
      if (cResult[6] !== result1) {
        const obj4 = { cx: 80, cy: 80, r: 77, stroke, strokeWidth: 6, fill: "transparent", strokeDasharray, strokeDashoffset: result1, strokeLinecap: "round", rotation: -90, origin: "80, 80" };
        const tmp22 = React4(inlineStyles.Circle, obj4);
        cResult[6] = result1;
        cResult[7] = tmp22;
        let tmp19 = tmp22;
      } else {
        tmp19 = cResult[7];
      }
      if (cResult[8] === tmp15) {
        if (cResult[9] === tmp19) {
          let tmp23 = cResult[10];
        }
        if (altImage == null) {
          altImage = _modDef13721;
        }
        if (cResult[11] !== altImage) {
          const obj5 = { uri: altImage };
          cResult[11] = altImage;
          cResult[12] = obj5;
          let tmp28 = obj5;
        } else {
          tmp28 = cResult[12];
        }
        if (cResult[13] === tmp4.progressCircleImage) {
          if (cResult[14] === tmp28) {
            let tmp29 = cResult[15];
          }
          if (cResult[16] === tmp4.progressCircleContainer) {
            if (cResult[17] === tmp11) {
              if (cResult[18] === tmp23) {
                if (cResult[19] === tmp29) {
                  let tmp32 = cResult[20];
                }
                return tmp32;
              }
            }
          }
          const obj6 = { style: tmp4.progressCircleContainer, children: null };
          const items = [tmp11, tmp23, tmp29];
          obj6.children = items;
          const tmp35 = hasOwnProperty(View, obj6);
          cResult[16] = tmp4.progressCircleContainer;
          cResult[17] = tmp11;
          cResult[18] = tmp23;
          cResult[19] = tmp29;
          cResult[20] = tmp35;
          tmp32 = tmp35;
        }
        const obj7 = { source: tmp28, style: tmp4.progressCircleImage };
        const tmp31 = React4(FastImageDefault, obj7);
        cResult[13] = tmp4.progressCircleImage;
        cResult[14] = tmp28;
        cResult[15] = tmp31;
        tmp29 = tmp31;
      }
      const size = { width: v160, height: v160, children: null };
      const items1 = [tmp15, tmp19];
      size.children = items1;
      const tmp26 = hasOwnProperty(inlineStylesDefault, size);
      cResult[8] = tmp15;
      cResult[9] = tmp19;
      cResult[10] = tmp26;
      tmp23 = tmp26;
    }
    const obj8 = { cx: 80, cy: 80, r: 77, stroke: token, strokeWidth: 6, fill: token1 };
    const tmp17 = React4(inlineStyles.Circle, obj8);
    cResult[3] = token1;
    cResult[4] = token;
    cResult[5] = tmp17;
    tmp15 = tmp17;
  }
  let tmp12 = tmp10;
  if (tmp10) {
    const obj9 = { source: _modDef13720, style: tmp4.glowImage };
    tmp12 = React4(FastImageDefault, obj9);
    const tmp5Result = FastImageDefault;
  }
  cResult[0] = tmp10;
  cResult[1] = tmp4.glowImage;
  cResult[2] = tmp12;
  tmp11 = tmp12;
}) : (function ProgressWheel(arg0) {
  ({ nReferralsSent, altImage } = arg0);
  const tmp = closure_9();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_MOD_STRONG);
  const obj3 = { style: tmp.progressCircleContainer, children: null };
  const token1 = useToken.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  let tmp9 = nReferralsSent === useReferralProgramBannerDetails.MAX_REFERRALS_SENT;
  if (tmp9) {
    const obj4 = { source: _modDef13720, style: tmp.glowImage };
    tmp9 = React4(FastImageDefault, obj4);
    const tmp4Result = FastImageDefault;
  }
  const items = [tmp9, , ];
  const size = { width: v160, height: v160, children: null };
  const items1 = [React4(inlineStyles.Circle, { cx: 80, cy: 80, r: 77, stroke: token, strokeWidth: 6, fill: token1 }), React4(inlineStyles.Circle, { cx: 80, cy: 80, r: 77, stroke, strokeWidth: 6, fill: "transparent", strokeDasharray, strokeDashoffset: strokeDasharray * (1 - 33.3 * nReferralsSent / 100), strokeLinecap: "round", rotation: -90, origin: "80, 80" })];
  size.children = items1;
  items[1] = hasOwnProperty(inlineStylesDefault, size);
  const obj5 = { cx: 80, cy: 80, r: 77, stroke, strokeWidth: 6, fill: "transparent", strokeDasharray, strokeDashoffset: strokeDasharray * (1 - 33.3 * nReferralsSent / 100), strokeLinecap: "round", rotation: -90, origin: "80, 80" };
  const tmp4Result3 = inlineStylesDefault;
  if (altImage == null) {
    altImage = _modDef13721;
  }
  items[2] = React4(FastImageDefault, { source: { uri: altImage }, style: tmp.progressCircleImage });
  obj3.children = items;
  return hasOwnProperty(View, obj3);
});