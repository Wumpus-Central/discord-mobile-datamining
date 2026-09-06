// discord_app/modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx
import set from "../../../../../_runtime/00002_set.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import registerAssetDefault from "../../../../../_runtime/06992_registerAsset.js";
import NavigationStack from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import HeaderActionButton from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";

function CloseButton() {
  const obj = {
    source: registerAssetDefault,
    onPress() {
      return callback(table[3]).hideModal();
    },
    accessibilityLabel: null,
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: registerAssetDefault,
    onPress() {
      return callback(table[3]).hideModal();
    },
    accessibilityLabel: null,
  });
}
const jsx = jsxProd.jsx;
let closure_4 = { DISCLOSURE: "disclosure" };
const result = set.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

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
    return callback2(15113).hideModal();
  }
  let obj = {
    headerLeft: CloseButton,
    headerRight() {
      return null;
    },
    headerTitle() {
      const obj = { title: null };
      const intl = callback(1114).intl;
      obj[0] = intl.string(callback(1114).t.GcsZKJ);
      return callback3(callback(5624).NavigatorHeader, obj);
    },
    render() {
      return closure_1_3(closure_1_1(closure_1_2[6]), {
        adCreativeType: closure_0,
        isTargetedDisclosure: closure_1,
        gamePublisher: closure_2,
        gameTitle: closure_3,
        onClose,
        cosponsorName: closure_4,
        isVideoQuest: closure_5,
      });
    },
  };
  obj = { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE, headerBackTitle: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return jsx(NavigationStack.Navigator, {
    screens: { [closure_4.DISCLOSURE]: obj },
    initialRouteName: constants.DISCLOSURE,
    headerBackTitle: null,
  });
}
