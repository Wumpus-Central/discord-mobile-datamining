// discord_app/modules/quests/native/BountiesNuxPromoSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import BountiesPosterSpotIllustration from "../../../design/components/mana-assets/native/generated/BountiesPosterSpotIllustration.native.tsx";
import PromoSheet from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import openBountiesNuxPromoSheet from "openBountiesNuxPromoSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  obj.illustration = (
    <View style={closure_6().illustrationContainer}>
      {jsx(BountiesPosterSpotIllustration.BountiesPosterSpotIllustration, { width: 273, height: 205 })}
    </View>
  );
  const obj3 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.cpT0Cq);
  obj3.onPress = callback;
  obj.actions = jsx(components_Button_Button.Button, {
    grow: true,
    size: "lg",
    variant: "primary",
    text: null,
    onPress: null,
  });
  return jsx(PromoSheet.PromoSheet, {
    gradientColor: "purple",
    title: null,
    description: null,
    illustration: null,
    actions: null,
  });
}
