// === Module 13730: BoostingUnavailablePill ===

// Module 13730 (BoostingUnavailablePill)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import _modDef3277 from "module_3277" /* 3277 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4742 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const obj2 = { aboutText: null };
  const obj = ActionSheetActionCreatorsDefault;
  const intl = util.intl;
  const tmp = asyncRequireImpl(13731, dependencyMap.paths);
  obj2.aboutText = intl.formatToPlainString(_modDef3277["5xN/C1"], { premiumGroupProductName: closure_5() });
  obj.openLazy(tmp, "PremiumGroupEducationActionSheet", obj2);
}
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
let closure_5 = PremiumGroupConstants.getPremiumGroupProductName;
const jsx = jsxProd.jsx;
let obj = { premiumGroupBanner: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.lg, marginBottom: 12 }, pgUnavailable: { flex: 1, justifyContent: "center" }, pgUnavailableText: { textAlign: "center" } };
let closure_7 = createStyles.createStyles(obj);
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
const result = size.fileFinishedImporting("modules/premium/premium_group/native/BoostingUnavailablePill.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BoostingUnavailablePill(style) {
  const cResult = c.c(12);
  style = style.style;
  const tmp4 = closure_7();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.premiumGroupBanner) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    ({ pgUnavailable, pgUnavailableText } = tmp4);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["5nrJDO"]);
      cResult[3] = stringResult;
      let tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp4.pgUnavailableText) {
      const obj2 = { variant: "text-md/normal", color: "interactive-text-active", style: pgUnavailableText, children: tmp7 };
      const tmp11 = jsx(Text_Text.Text, { variant: "text-md/normal", color: "interactive-text-active", style: pgUnavailableText, children: tmp7 });
      cResult[4] = tmp4.pgUnavailableText;
      cResult[5] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp4.pgUnavailable) {
      if (cResult[7] === tmp9) {
        let tmp12 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        if (cResult[10] === tmp12) {
          let tmp16 = cResult[11];
        }
        return tmp16;
      }
      const obj3 = { activeOpacity: 0.7, onPress: handlePress, children: null };
      const obj4 = { style: tmp5, children: tmp12 };
      obj3.children = <React4 style={tmp5}>{tmp12}</React4>;
      const tmp21 = <React3 activeOpacity={0.7} onPress={handlePress}>{null}</React3>;
      cResult[9] = tmp5;
      cResult[10] = tmp12;
      cResult[11] = tmp21;
      tmp16 = tmp21;
    }
    const obj5 = { style: pgUnavailable, children: tmp9 };
    const tmp15 = <React4 style={pgUnavailable}>{tmp9}</React4>;
    cResult[6] = tmp4.pgUnavailable;
    cResult[7] = tmp9;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const items = [tmp4.premiumGroupBanner, style];
  cResult[0] = style;
  cResult[1] = tmp4.premiumGroupBanner;
  cResult[2] = items;
  tmp5 = items;
}) : (function BoostingUnavailablePill(style) {
  const tmp = closure_7();
  const obj = { activeOpacity: 0.7, onPress: handlePress, children: null };
  const obj2 = { style: null, children: null };
  const items = [tmp.premiumGroupBanner, style.style];
  obj2.style = items;
  const obj3 = { style: tmp.pgUnavailable, children: null };
  const obj4 = { variant: "text-md/normal", color: "interactive-text-active", style: tmp.pgUnavailableText, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["5nrJDO"]);
  obj3.children = jsx(Text_Text.Text, { variant: "text-md/normal", color: "interactive-text-active", style: tmp.pgUnavailableText, children: null });
  obj2.children = <React4 style={tmp.pgUnavailable}>{null}</React4>;
  obj.children = <React4 style={null}>{null}</React4>;
  return <React3 activeOpacity={0.7} onPress={handlePress}>{null}</React3>;
});