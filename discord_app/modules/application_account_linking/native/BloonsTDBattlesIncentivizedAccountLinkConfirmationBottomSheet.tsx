// === Module 19253: BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet ===

// Module 19253 (BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet)
import _modDef3756 from "module_3756" /* 3756 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6279 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6348 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6349 */;
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet" /* 19246 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(1073).CollectiblesMobileShopScreen;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_account_linking/native/BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet() {
  const bloonsTDBattlesUpsellExperiment = analyticsLocations(19251).bloonsTDBattlesUpsellExperiment;
  analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.ACTION_SHEET).analyticsLocations;
  let obj = { title: null, description: null, actions: null };
  const intl = analyticsLocations(1112).intl;
  obj.title = intl.formatToPlainString(_modDef3756["WdW7U/"], { orbCount: bloonsTDBattlesUpsellExperiment.useConfig({ location: "BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet" }).orbQuantity });
  const intl2 = analyticsLocations(1112).intl;
  obj.description = intl2.string(_modDef3756.DTk977);
  let obj2 = { text: null, variant: "primary", size: "lg", onPress: null };
  const intl3 = analyticsLocations(1112).intl;
  obj2.text = intl3.string(_modDef3756.Iw0mSJ);
  obj2.onPress = function handleStoreRedirect() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const result = obj2.openCollectiblesShopMobile({ analyticsLocations, analyticsSource: AnalyticsLocationDefault.ACTION_SHEET, screen: constants.FEATURED_PAGE });
  };
  obj.actions = jsx(analyticsLocations(5610).Button, { text: null, variant: "primary", size: "lg", onPress: null });
  return jsx(IncentivizedAccountLinkConfirmationPromoSheetDefault, { title: null, description: null, actions: null });
};