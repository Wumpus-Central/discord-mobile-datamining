// discord_app/modules/application_account_linking/native/BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet.tsx
import _modDef3579 from "../IncentivizedAccountLinking.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../../collectibles/CollectiblesActionCreators.tsx";
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = fn(1074).CollectiblesMobileShopScreen;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/application_account_linking/native/BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet.tsx",
);

export default function BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet() {
  const bloonsTDBattlesUpsellExperiment = analyticsLocations(19840).bloonsTDBattlesUpsellExperiment;
  analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.ACTION_SHEET).analyticsLocations;
  let obj = { title: null, description: null, actions: null };
  const intl = analyticsLocations(1113).intl;
  obj.title = intl.formatToPlainString(_modDef3579["WdW7U/"], {
    orbCount: bloonsTDBattlesUpsellExperiment.useConfig({
      location: "BloonsTDBattlesIncentivizedAccountLinkConfirmationBottomSheet",
    }).orbQuantity,
  });
  const intl2 = analyticsLocations(1113).intl;
  obj.description = intl2.string(_modDef3579.DTk977);
  let obj2 = { text: null, variant: "primary", size: "lg", onPress: null };
  const intl3 = analyticsLocations(1113).intl;
  obj2.text = intl3.string(_modDef3579.Iw0mSJ);
  obj2.onPress = function handleStoreRedirect() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const result = obj2.openCollectiblesShopMobile({
      analyticsLocations,
      analyticsSource: AnalyticsLocationDefault.ACTION_SHEET,
      screen: constants.FEATURED_PAGE,
    });
  };
  obj.actions = jsx(analyticsLocations(5936).Button, { text: null, variant: "primary", size: "lg", onPress: null });
  return jsx(IncentivizedAccountLinkConfirmationPromoSheetDefault, { title: null, description: null, actions: null });
}
