// discord_app/modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx
import set from "../../../../../_runtime/00002_set.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import NavigationStack from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import registerAssetDefault from "../../../../../_runtime/07697_registerAsset.js";

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
const result = set.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default function QuestDisclosureModal(arg0) {
  ({ isTargetedDisclosure: require, gamePublisher: importDefault, gameTitle: dependencyMap, cosponsorName: jsx, isVideoQuest: closure_4 } = arg0);
  function onClose() {
    return callback2(14655).hideModal();
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
      return callback3(callback(5447).NavigatorHeader, obj);
    },
    render() {
      return closure_1_3(closure_1_1(closure_1_2[6]), { isTargetedDisclosure: closure_0, gamePublisher: closure_1, gameTitle: closure_2, onClose, cosponsorName: closure_3, isVideoQuest: closure_4 });
    }
  };
  obj = { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE, headerBackTitle: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return jsx(NavigationStack.Navigator, { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE, headerBackTitle: null });
};