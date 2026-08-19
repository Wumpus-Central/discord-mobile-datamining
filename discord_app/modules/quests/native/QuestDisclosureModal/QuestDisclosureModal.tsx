// discord_app/modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import NavigationStack from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import registerAssetDefault from "../../../../../_runtime/08143_registerAsset.js";
import QuestDisclosureModalInnerDefault from "QuestDisclosureModalInner.tsx";

function CloseButton() {
  const obj = {
    source: registerAssetDefault,
    onPress() {
      return callback(table[3]).hideModal();
    },
    accessibilityLabel: null
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: registerAssetDefault,
    onPress() {
      return callback(table[3]).hideModal();
    },
    accessibilityLabel: null
  });
}
const jsx = jsxProd.jsx;
let closure_4 = { DISCLOSURE: "disclosure" };
const result = obj132.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default function QuestDisclosureModal(arg0) {
  ({ isTargetedDisclosure: require, gamePublisher: importDefault, gameTitle: dependencyMap, cosponsorName: jsx, isVideoQuest: closure_4 } = arg0);
  function onClose() {
    return callback2(14457).hideModal();
  }
  let obj = {
    headerLeft: onClose,
    headerRight() {
      return null;
    },
    headerTitle() {
      const obj = { title: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t.GcsZKJ);
      return callback3(callback(6314).NavigatorHeader, obj);
    },
    render() {
      return jsx(QuestDisclosureModalInnerDefault, { isTargetedDisclosure: closure_0, gamePublisher: closure_1, gameTitle: closure_2, onClose, cosponsorName: closure_3, isVideoQuest: closure_4 });
    }
  };
  obj = { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE, headerBackTitle: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return jsx(NavigationStack.Navigator, { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE, headerBackTitle: null });
};