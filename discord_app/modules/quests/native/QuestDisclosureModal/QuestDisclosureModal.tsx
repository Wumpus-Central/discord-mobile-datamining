// === Module 15114: QuestDisclosureModal ===

// Module 15114 (QuestDisclosureModal)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1114 */;
import _modDef6992 from "module_6992" /* 6992 */;
import Navigator from "Navigator" /* 7000 */;
import HeaderActionButton from "HeaderActionButton" /* 7377 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15113 */;
import QuestDisclosureModalInnerDefault from "QuestDisclosureModalInner" /* 15115 */;
import size from "module_2" /* 2 */;

function CloseButton() {
  const obj = {
    source: _modDef6992,
    onPress() {
      return QuestDisclosureModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef6992,
    onPress() {
      return QuestDisclosureModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
}
const jsx = jsxProd.jsx;
const constants = { DISCLOSURE: "disclosure" };
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default function QuestDisclosureModal(arg0) {
  ({ adCreativeType: require, isTargetedDisclosure: importDefault, gamePublisher: dependencyMap, gameTitle: jsx, cosponsorName: closure_4, isVideoQuest: CloseButton } = arg0);
  function onClose() {
    return isTargetedDisclosure(gamePublisher[3]).hideModal();
  }
  let obj = {
    headerLeft: CloseButton,
    headerRight() {
      return null;
    },
    headerTitle() {
      const obj = { title: null };
      const intl = adCreativeType(gamePublisher[4]).intl;
      obj.title = intl.string(adCreativeType(gamePublisher[4]).t.GcsZKJ);
      return gameTitle(adCreativeType(gamePublisher[5]).NavigatorHeader, obj);
    },
    render() {
      return jsx(QuestDisclosureModalInnerDefault, { adCreativeType, isTargetedDisclosure, gamePublisher, gameTitle, onClose, cosponsorName, isVideoQuest });
    }
  };
  obj = { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE, headerBackTitle: null };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE, headerBackTitle: null });
};