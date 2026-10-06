// === Module 13405: GuildBoostingMarketingWave ===

// Module 13405 (GuildBoostingMarketingWave)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4586 */;
import inlineStyles from "inlineStyles" /* 8169 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (cResult[0] !== token) {
    const tmp8 = jsx(inlineStyles.Path, { d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z", fill: token });
    cResult[0] = token;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === arg0) {
    let tmp9;
    if (cResult[3] === tmp6) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  inlineStylesDefault;
  const merged = Object.assign(arg0);
  const tmp12 = <tmp4Result fill="none" viewBox="0 0 1512 510" preserveAspectRatio="none">{tmp6}</tmp4Result>;
  cResult[2] = arg0;
  cResult[3] = tmp6;
  cResult[4] = tmp12;
  tmp9 = tmp12;
}) : ((arg0) => {
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  inlineStylesDefault;
  const merged = Object.assign(arg0);
  return <tmp3Result fill="none" viewBox="0 0 1512 510" preserveAspectRatio="none">{jsx(inlineStyles.Path, { d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z", fill: token })}</tmp3Result>;
});
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingWave.tsx");

export default tmp3;