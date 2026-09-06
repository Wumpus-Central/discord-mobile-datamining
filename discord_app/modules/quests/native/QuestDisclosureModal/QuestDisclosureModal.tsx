// discord_app/modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import _modDef6992 from "../../../../../_runtime/metro/06992__.js";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators.tsx";
import QuestDisclosureModalInnerDefault from "QuestDisclosureModalInner.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function CloseButton() {
  const obj = {
    source: _modDef6992,
    onPress() {
      return QuestDisclosureModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef6992,
    onPress() {
      return QuestDisclosureModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  });
}
const jsx = jsxProd.jsx;
const constants = { DISCLOSURE: "disclosure" };
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default function QuestDisclosureModal(arg0) {
  ({
    adCreativeType: require,
    isTargetedDisclosure: importDefault,
    gamePublisher: dependencyMap,
    gameTitle: jsx,
    cosponsorName: closure_4,
    isVideoQuest: CloseButton,
  } = arg0);
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
      return jsx(QuestDisclosureModalInnerDefault, {
        adCreativeType,
        isTargetedDisclosure,
        gamePublisher,
        gameTitle,
        onClose,
        cosponsorName,
        isVideoQuest,
      });
    },
  };
  obj = { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE, headerBackTitle: null };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, {
    screens: { [closure_4.DISCLOSURE]: obj },
    initialRouteName: constants.DISCLOSURE,
    headerBackTitle: null,
  });
}
