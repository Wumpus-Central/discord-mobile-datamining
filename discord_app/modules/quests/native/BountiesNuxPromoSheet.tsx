// === Module 17486: BountiesNuxPromoSheet ===

// Module 17486 (BountiesNuxPromoSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import PromoSheet from "PromoSheet" /* 10644 */;
import openBountiesNuxPromoSheet from "openBountiesNuxPromoSheet" /* 17485 */;
import BountiesPosterSpotIllustration from "BountiesPosterSpotIllustration" /* 17487 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let obj2 = { illustrationContainer: { paddingTop: nativeDefault.space.PX_12 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesNuxPromoSheet.tsx");

export default function BountiesNuxPromoSheet() {
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(openBountiesNuxPromoSheet.PROMO_SHEET_KEY);
  }, []);
  const obj = { gradientColor: "purple", title: null, description: null, illustration: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.DDpHZG);
  const intl2 = util.intl;
  const obj2 = { productNamePlural: null };
  const intl3 = util.intl;
  obj2.productNamePlural = intl3.string(util.t["JDvNF+"]);
  obj.description = intl2.format(util.t.uLPcSI, obj2);
  const tmp = closure_6();
  obj.illustration = <View style={closure_6().illustrationContainer}>{jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 })}</View>;
  const obj4 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t.cpT0Cq);
  obj4.onPress = callback;
  obj.actions = jsx(components_Button_Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(PromoSheet.PromoSheet, { gradientColor: "purple", title: null, description: null, illustration: null, actions: null });
};