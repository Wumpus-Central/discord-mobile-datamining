// === Module 19100: BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet ===

// Module 19100 (BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet)
import _modDef3702 from "module_3702" /* 3702 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7520 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7539 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 8074 */;
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet" /* 19093 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(1073).CollectiblesMobileShopScreen;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_account_linking/native/BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet() {
  const bloonsTDBattlesUpsellExperiment = analyticsLocations(19098).bloonsTDBattlesUpsellExperiment;
  analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.ACTION_SHEET).analyticsLocations;
  let obj = { title: null, description: null, actions: null };
  const intl = analyticsLocations(1112).intl;
  obj.title = intl.formatToPlainString(_modDef3702["WdW7U/"], { orbCount: bloonsTDBattlesUpsellExperiment.useConfig({ location: "BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet" }).orbQuantity });
  const intl2 = analyticsLocations(1112).intl;
  obj.description = intl2.string(_modDef3702.DTk977);
  let obj2 = { text: null, variant: "primary", size: "lg", onPress: null };
  const intl3 = analyticsLocations(1112).intl;
  obj2.text = intl3.string(_modDef3702.Iw0mSJ);
  obj2.onPress = function handleStoreRedirect() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const result = obj2.openCollectiblesShopMobile({ analyticsLocations, analyticsSource: AnalyticsLocationDefault.ACTION_SHEET, screen: constants.FEATURED_PAGE });
  };
  obj.actions = jsx(analyticsLocations(5511).Button, { text: null, variant: "primary", size: "lg", onPress: null });
  return jsx(IncentivizedAccountLinkConfirmationPromoSheetDefault, { title: null, description: null, actions: null });
};