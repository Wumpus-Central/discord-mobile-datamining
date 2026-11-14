// discord_app/modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import _modDef3579 from "../IncentivizedAccountLinking.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import WindowLaunchIcon from "../../../design/components/Icon/native/redesign/generated/WindowLaunchIcon.tsx";
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx",
);

export default function IncentivizedAccountLinkConfirmationBottomSheet(orbCount) {
  let obj = { title: null, description: null, actions: null };
  const intl = util.intl;
  obj.title = intl.formatToPlainString(_modDef3579.g56Cg0, { orbCount: orbCount.orbCount });
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef3579["Mh/Ooc"]);
  let obj2 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl3 = util.intl;
  obj2.text = intl3.string(util.t.aRIFWD);
  obj2.icon = jsx(WindowLaunchIcon.WindowLaunchIcon, { size: "sm", color: nativeDefault.colors.WHITE });
  obj2.onPress = function handleTakeAction() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = LinkingDefault;
    obj2.openURL(HelpdeskUtilsDefault.getArticleURL(constants.IN_GAME_FEATURES));
  };
  obj.actions = jsx(components_Button_Button.Button, {
    text: null,
    icon: null,
    iconPosition: "end",
    size: "lg",
    onPress: null,
  });
  return <tmp title={null} description={null} actions={null} />;
}
