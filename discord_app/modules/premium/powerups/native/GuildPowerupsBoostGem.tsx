// === Module 12193: GuildPowerupsBoostGem ===

// Module 12193 (GuildPowerupsBoostGem)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import BoostGemDefault from "BoostGem" /* 12194 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { boostGemContainer: null };
let size = { width: 100, height: 100, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, alignItems: "center", justifyContent: "center", alignSelf: "center" };
obj.boostGemContainer = size;
let closure_5 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostGem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ style, gemWidth, gemHeight } = arg0);
  const tmp3 = closure_5();
  if (cResult[0] === style) {
    if (cResult[1] === tmp3.boostGemContainer) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === gemHeight) {
      if (cResult[4] === gemWidth) {
        let tmp5 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp5) {
          let tmp9 = cResult[8];
        }
        return tmp9;
      }
      const obj2 = { style: tmp4, children: tmp5 };
      const tmp12 = <View style={tmp4}>{tmp5}</View>;
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = tmp12;
      tmp9 = tmp12;
    }
    const size = { width: gemWidth, height: gemHeight };
    const tmp8 = jsx(BoostGemDefault, { width: gemWidth, height: gemHeight });
    cResult[3] = gemHeight;
    cResult[4] = gemWidth;
    cResult[5] = tmp8;
    tmp5 = tmp8;
  }
  const items = [tmp3.boostGemContainer, style];
  cResult[0] = style;
  cResult[1] = tmp3.boostGemContainer;
  cResult[2] = items;
  tmp4 = items;
}) : ((arg0) => {
  ({ style, gemWidth, gemHeight } = arg0);
  const obj = { style: null, children: null };
  const items = [closure_5().boostGemContainer, style];
  obj.style = items;
  obj.children = jsx(BoostGemDefault, { width: gemWidth, height: gemHeight });
  return <View style={null}>{null}</View>;
});