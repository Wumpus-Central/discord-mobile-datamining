// discord_app/modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../../_runtime/08072_registerAsset.js";
import { HeaderActionButton } from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

function CloseButton() {
  const obj = { source: null, onPress: null, accessibilityLabel: null };
  obj[0] = registerAsset;
  obj[1] = function onPress() {
    return callback(table[3]).hideModal();
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, { source: null, onPress: null, accessibilityLabel: null });
}
let closure_4 = { DISCLOSURE: "disclosure" };
const result = require("registerAsset").fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModal.tsx");

export default function QuestDisclosureModal(arg0) {
  let closure_4;
  let dependencyMap;
  let importDefault;
  let jsx;
  let require;
  ({ isTargetedDisclosure: require, gamePublisher: importDefault, gameTitle: dependencyMap, cosponsorName: jsx, isVideoQuest: closure_4 } = arg0);
  function onClose() {
    return callback2(14412).hideModal();
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
      return callback3(callback(5310).NavigatorHeader, obj);
    },
    render() {
      return outer1_3(outer1_1(outer1_2[6]), { isTargetedDisclosure: closure_0, gamePublisher: closure_1, gameTitle: closure_2, onClose, cosponsorName: closure_3, isVideoQuest: closure_4 });
    }
  };
  obj = { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE, headerBackTitle: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return jsx(NavigationStack.Navigator, { screens: { [closure_4.DISCLOSURE]: obj }, initialRouteName: constants.DISCLOSURE, headerBackTitle: null });
};