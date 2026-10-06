// === Module 13275: ProgressWheel ===

// Module 13275 (ProgressWheel)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4586 */;
import FastImageDefault from "FastImage" /* 5981 */;
import inlineStyles from "inlineStyles" /* 8169 */;
import useReferralProgramBannerDetails from "useReferralProgramBannerDetails" /* 13261 */;
import AssetRegistryDefault from "AssetRegistry" /* 13276 */;
import _modDef13277 from "module_13277" /* 13277 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = 160;
const strokeDasharray = 2 * Math.PI * 77;
let c8 = "#53ac66";
let closure_9 = createStyles.createStyles({ progressCircleContainer: { width: 160, height: 160, alignItems: "center", justifyContent: "center", marginTop: 24 }, progressCircleImage: { position: "absolute", width: 93, height: 93, borderRadius: 46.5 }, glowImage: { position: "absolute", width: 180, height: 180 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let altImage;
  let items;
  let items1;
  let nReferralsSent;
  const obj = react2;
  const cResult = obj.c(21);
  ({ nReferralsSent, altImage } = arg0);
  const tmp4 = closure_9();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_MOD_STRONG);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  const result = 33.3 * nReferralsSent;
  const tmp10 = nReferralsSent === useReferralProgramBannerDetails.MAX_REFERRALS_SENT;
  if (cResult[0] === tmp10) {
    let tmp11;
    if (cResult[1] === tmp4.glowImage) {
      tmp11 = cResult[2];
    }
    if (cResult[3] === token1) {
      let tmp15;
      let tmp19;
      if (cResult[4] === token) {
        tmp15 = cResult[5];
      }
      const result1 = strokeDasharray * (1 - result / 100);
      if (cResult[6] !== result1) {
        const obj4 = { cx: 80, cy: 80, r: 77, stroke, strokeWidth: 6, fill: "transparent", strokeDasharray, strokeDashoffset: result1, strokeLinecap: "round", rotation: -90, origin: "80, 80" };
        const tmp22 = React3(inlineStyles.Circle, obj4);
        cResult[6] = result1;
        cResult[7] = tmp22;
        tmp19 = tmp22;
      } else {
        tmp19 = cResult[7];
      }
      if (cResult[8] === tmp15) {
        let tmp23;
        let tmp28;
        if (cResult[9] === tmp19) {
          tmp23 = cResult[10];
        }
        if (altImage == null) {
          altImage = _modDef13277;
        }
        if (cResult[11] !== altImage) {
          const obj5 = { uri: altImage };
          cResult[11] = altImage;
          cResult[12] = obj5;
          tmp28 = obj5;
        } else {
          tmp28 = cResult[12];
        }
        if (cResult[13] === tmp4.progressCircleImage) {
          let tmp29;
          if (cResult[14] === tmp28) {
            tmp29 = cResult[15];
          }
          if (cResult[16] === tmp4.progressCircleContainer) {
            if (cResult[17] === tmp11) {
              if (cResult[18] === tmp23) {
                let tmp32;
                if (cResult[19] === tmp29) {
                  tmp32 = cResult[20];
                }
                return tmp32;
              }
            }
          }
          const obj6 = { style: tmp4.progressCircleContainer, children: items };
          items = [tmp11, tmp23, tmp29];
          const tmp35 = hasOwnProperty(View, obj6);
          cResult[16] = tmp4.progressCircleContainer;
          cResult[17] = tmp11;
          cResult[18] = tmp23;
          cResult[19] = tmp29;
          cResult[20] = tmp35;
          tmp32 = tmp35;
        }
        const obj7 = { source: tmp28, style: tmp4.progressCircleImage };
        const tmp31 = React3(FastImageDefault, obj7);
        cResult[13] = tmp4.progressCircleImage;
        cResult[14] = tmp28;
        cResult[15] = tmp31;
        tmp29 = tmp31;
      }
      size = { width: v160, height: v160, children: items1 };
      items1 = [tmp15, tmp19];
      const tmp26 = hasOwnProperty(inlineStylesDefault, size);
      cResult[8] = tmp15;
      cResult[9] = tmp19;
      cResult[10] = tmp26;
      tmp23 = tmp26;
    }
    const obj8 = { cx: 80, cy: 80, r: 77, stroke: token, strokeWidth: 6, fill: token1 };
    const tmp17 = React3(inlineStyles.Circle, obj8);
    cResult[3] = token1;
    cResult[4] = token;
    cResult[5] = tmp17;
    tmp15 = tmp17;
  }
  let tmp12 = tmp10;
  if (tmp12) {
    const obj9 = { source: AssetRegistryDefault, style: tmp4.glowImage };
    const tmp5Result = FastImageDefault;
    tmp12 = React3(tmp5Result, obj9);
  }
  cResult[0] = tmp10;
  cResult[1] = tmp4.glowImage;
  cResult[2] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let altImage;
  let items;
  let items1;
  let nReferralsSent;
  ({ nReferralsSent, altImage } = arg0);
  const tmp = closure_9();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_MOD_STRONG);
  const obj3 = { style: tmp.progressCircleContainer, children: items };
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  let tmp9 = nReferralsSent === useReferralProgramBannerDetails.MAX_REFERRALS_SENT;
  if (tmp9) {
    const obj4 = { source: AssetRegistryDefault, style: tmp.glowImage };
    const tmp4Result = FastImageDefault;
    tmp9 = React3(tmp4Result, obj4);
  }
  items = [tmp9, , ];
  size = { width: v160, height: v160, children: items1 };
  items1 = [, ];
  const tmp4Result3 = inlineStylesDefault;
  items1[0] = React3(inlineStyles.Circle, { cx: 80, cy: 80, r: 77, stroke: token, strokeWidth: 6, fill: token1 });
  const obj5 = { cx: 80, cy: 80, r: 77, stroke, strokeWidth: 6, fill: "transparent", strokeDasharray, strokeDashoffset: strokeDasharray * (1 - 33.3 * nReferralsSent / 100), strokeLinecap: "round", rotation: -90, origin: "80, 80" };
  items1[1] = React3(inlineStyles.Circle, obj5);
  items[1] = hasOwnProperty(tmp4Result3, size);
  const tmp4Result4 = FastImageDefault;
  if (altImage == null) {
    altImage = _modDef13277;
  }
  const obj6 = { source: { uri: altImage }, style: tmp.progressCircleImage };
  items[2] = React3(tmp4Result4, obj6);
  return hasOwnProperty(View, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/premium/referral_program/native/ProgressWheel.tsx");

export default tmp4;