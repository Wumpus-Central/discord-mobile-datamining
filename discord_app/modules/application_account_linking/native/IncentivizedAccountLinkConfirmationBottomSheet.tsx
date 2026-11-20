// === Module 18963: IncentivizedAccountLinkConfirmationBottomSheet ===

// Module 18963 (IncentivizedAccountLinkConfirmationBottomSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2186 */;
import _modDef3603 from "module_3603" /* 3603 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import components_Button_Button from "components/Button/Button" /* 5392 */;
import LinkingDefault from "Linking" /* 5473 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 10019 */;
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet" /* 18964 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1071).HelpdeskArticles;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function IncentivizedAccountLinkConfirmationBottomSheet(orbCount) {
  let obj = { title: null, description: null, actions: null };
  const intl = util.intl;
  obj.title = intl.formatToPlainString(_modDef3603.g56Cg0, { orbCount: orbCount.orbCount });
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef3603["Mh/Ooc"]);
  let obj2 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl3 = util.intl;
  obj2.text = intl3.string(util.t.aRIFWD);
  obj2.icon = jsx(WindowLaunchIcon.WindowLaunchIcon, { size: "sm", color: nativeDefault.colors.WHITE });
  obj2.onPress = function handleTakeAction() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = LinkingDefault;
    obj2.openURL(HelpdeskUtilsDefault.getArticleURL(constants.IN_GAME_FEATURES));
  };
  obj.actions = jsx(components_Button_Button.Button, { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null });
  return <tmp title={null} description={null} actions={null} />;
};