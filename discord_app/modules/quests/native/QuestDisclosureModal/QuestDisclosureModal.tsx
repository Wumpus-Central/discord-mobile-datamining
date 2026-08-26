// === Module 14629: CloseButton ===

// Module 14629 (CloseButton)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import NavigationStack from "NavigationStack" /* 5955 */;
import HeaderActionButton from "HeaderActionButton" /* 6183 */;
import registerAssetDefault from "registerAsset" /* 8245 */;

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
    return callback2(14628).hideModal();
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
      return callback3(callback(5442).NavigatorHeader, obj);
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