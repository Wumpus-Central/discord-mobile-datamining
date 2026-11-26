// === Module 19308: IncentivizedAccountLinkConfirmationBottomSheet ===

// Module 19308 (IncentivizedAccountLinkConfirmationBottomSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2188 */;
import _modDef3757 from "module_3757" /* 3757 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import components_Button_Button from "components/Button/Button" /* 5641 */;
import LinkingDefault from "Linking" /* 5722 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 14103 */;
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet" /* 19309 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1071).HelpdeskArticles;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function IncentivizedAccountLinkConfirmationBottomSheet(orbCount) {
  let obj = { title: null, description: null, actions: null };
  const intl = util.intl;
  obj.title = intl.formatToPlainString(_modDef3757.g56Cg0, { orbCount: orbCount.orbCount });
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef3757["Mh/Ooc"]);
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