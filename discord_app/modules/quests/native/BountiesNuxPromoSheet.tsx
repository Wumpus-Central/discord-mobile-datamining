// === Module 15346: BountiesNuxPromoSheet ===

// Module 15346 (BountiesNuxPromoSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import components_Button_Button from "components/Button/Button" /* 5187 */;
import BountiesPosterSpotIllustration from "BountiesPosterSpotIllustration" /* 6048 */;
import PromoSheet from "PromoSheet" /* 10494 */;
import openBountiesNuxPromoSheet from "openBountiesNuxPromoSheet" /* 15345 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
const obj2 = { illustrationContainer: { paddingTop: nativeDefault.space.PX_12 } };
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
  obj.description = intl2.string(util.t.aC3Dwj);
  const tmp = closure_6();
  obj.illustration = <View style={closure_6().illustrationContainer}>{jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 })}</View>;
  const obj3 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.cpT0Cq);
  obj3.onPress = callback;
  obj.actions = jsx(components_Button_Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(PromoSheet.PromoSheet, { gradientColor: "purple", title: null, description: null, illustration: null, actions: null });
};