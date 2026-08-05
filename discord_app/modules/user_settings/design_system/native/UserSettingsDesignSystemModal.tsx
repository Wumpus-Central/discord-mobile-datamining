// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx
import _slicedToArray from "_slicedToArray";
import ModalDisclaimer from "ModalDisclaimer";
import get_ActivityIndicator from "Text";
import jsxProd from "ModalFloatingAction";
import createCacheKey from "createCacheKey";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { Modal } from "../../../../design/components/Modal/native/Modal.native.tsx";
import { ModalContent } from "../../../../design/components/Modal/native/ModalContent.native.tsx";
import { ModalScreen } from "../../../../design/components/Modal/native/ModalScreen.native.tsx";
import { StepModal } from "../../../../design/components/Modal/native/StepModal.native.tsx";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function DemoModal() {
  let obj = NavigationStack;
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj = {};
    obj = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    let obj2 = callback(5238);
    obj[0] = obj2.getHeaderCloseButton(callback2(4490).pop);
    obj[1] = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t["5Wxrcd"]);
      obj[1] = callback2(4490).pop;
      return callback3(callback(5917).HeaderActionButton, obj);
    };
    obj[2] = function headerTitle() {
      return callback3(callback(5238).NavigatorHeader, { title: constants.START, subtitle: "I said come on fhqwhgads" });
    };
    obj[3] = function render(arg0, arg1) {
      let closure_0 = arg1;
      return callback3(closure_13, {
        title: "Come on fhqwhgads.",
        emoji: "\u{1F60E}",
        action: "Everybody to the limit",
        onAction() {
          return arr.push(outer1_10.WHO_DAT);
        },
        secondaryAction: "Maybe later",
        onSecondaryAction: callback2(4490).pop,
        disclaimer: "I said come on fhqwhgads."
      });
    };
    obj[constants.START] = obj;
    obj = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj[0] = callback(5238).getHeaderBackButton();
    const obj5 = callback(5238);
    obj[1] = callback(5238).getHeaderCloseButton(callback2(4490).pop);
    obj[2] = function headerTitle() {
      return callback3(callback(5238).NavigatorHeader, { title: constants.WHO_DAT });
    };
    obj[3] = function render(arg0, arg1) {
      const callback = arg1;
      return callback3(closure_13, {
        title: "Who's that?",
        emoji: "\u{1F4BF}",
        action: "It's to the limit",
        onAction() {
          return arr.push(outer1_10.EVERYBODY);
        },
        children: callback3(callback(7713).TextInput, { placeholder: "My friend Jake" })
      });
    };
    obj[constants.WHO_DAT] = obj;
    const obj1 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    const obj6 = callback(5238);
    obj1[0] = callback(5238).getHeaderBackButton();
    const obj8 = callback(5238);
    obj1[1] = callback(5238).getHeaderCloseButton(callback2(4490).pop);
    obj1[2] = function headerTitle() {
      return callback3(callback(5238).NavigatorHeader, { title: constants.EVERYBODY });
    };
    obj1[3] = function render(arg0, arg1) {
      let closure_0 = arg1;
      return callback3(closure_14, {
        onAction() {
          return arr.push(outer1_10.JOCKIN);
        }
      });
    };
    obj[constants.EVERYBODY] = obj1;
    obj2 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    const obj9 = callback(5238);
    obj2[0] = callback(5238).getHeaderBackButton();
    const obj11 = callback(5238);
    obj2[1] = callback(5238).getHeaderCloseButton(callback2(4490).pop);
    obj2[2] = function headerTitle() {
      return callback3(callback(5238).NavigatorHeader, { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" });
    };
    obj2[3] = function render(arg0, arg1) {
      let closure_0 = arg1;
      return callback3(closure_13, {
        title: "I see you jockin' me.",
        emoji: "\u{1F525}",
        action: "I'm like come on fhqwhgads",
        onAction() {
          return arr.push(outer1_10.LIMIT);
        },
        disclaimer: "Tryin' to play like, you know me."
      });
    };
    obj[constants.JOCKIN] = obj2;
    const obj3 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    const obj12 = callback(5238);
    obj3[0] = callback(5238).getHeaderBackButton();
    obj3[1] = function headerRight() {
      return callback3(callback(5238).HeaderSubmittingIndicator, {});
    };
    obj3[2] = function headerTitle() {
      return callback3(callback(5238).NavigatorHeader, { title: constants.LIMIT });
    };
    obj3[3] = function render() {
      return callback3(closure_13, {
        title: "Everybody to the limit.",
        emoji: "\u{1F44F}",
        action: "Everybody come on fhqwhgads!",
        onAction: callback2(4490).pop,
        secondaryAction: "Push that fh-h-h-h-wqhgad",
        onSecondaryAction() {
          return callback(table[12]).openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
        },
        disclaimer: "The cheat is to the limit."
      });
    };
    obj[constants.LIMIT] = obj3;
    return obj;
  }, []);
  obj = { screens: navigatorScreens, initialRouteName: constants.START };
  return callback2(Modal.Modal, obj);
}
function DemoStepModal() {
  let obj = NavigationStack;
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj = {};
    obj = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    let obj2 = callback(5238);
    obj[0] = obj2.getHeaderCloseButton(callback2(4490).pop);
    obj[1] = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t["5Wxrcd"]);
      obj[1] = callback2(4490).pop;
      return callback3(callback(5917).HeaderActionButton, obj);
    };
    obj[2] = function headerTitle() {
      return callback3(callback(5238).NavigatorHeader, { title: constants.START, subtitle: "I said come on fhqwhgads" });
    };
    obj[3] = function render(arg0, arg1) {
      let closure_0 = arg1;
      return callback3(closure_13, {
        title: "Come on fhqwhgads.",
        emoji: "\u{1F60E}",
        action: "Everybody to the limit",
        onAction() {
          return arr.push(outer1_10.WHO_DAT);
        },
        secondaryAction: "Maybe later",
        onSecondaryAction: callback2(4490).pop,
        disclaimer: "I said come on fhqwhgads."
      });
    };
    obj[constants.START] = obj;
    obj = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj[0] = callback(5238).getHeaderBackButton();
    const obj5 = callback(5238);
    obj[1] = callback(5238).getHeaderCloseButton(callback2(4490).pop);
    obj[2] = function headerTitle() {
      return callback3(callback(5238).NavigatorHeader, { title: constants.WHO_DAT });
    };
    obj[3] = function render(arg0, arg1) {
      const callback = arg1;
      return callback3(closure_13, {
        title: "Who's that?",
        emoji: "\u{1F4BF}",
        action: "It's to the limit",
        onAction() {
          return arr.push(outer1_10.EVERYBODY);
        },
        children: callback3(callback(7713).TextInput, { placeholder: "My friend Jake" })
      });
    };
    obj[constants.WHO_DAT] = obj;
    const obj1 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    const obj6 = callback(5238);
    obj1[0] = callback(5238).getHeaderBackButton();
    const obj8 = callback(5238);
    obj1[1] = callback(5238).getHeaderCloseButton(callback2(4490).pop);
    obj1[2] = function headerTitle() {
      return callback3(callback(5238).NavigatorHeader, { title: constants.EVERYBODY });
    };
    obj1[3] = function render(arg0, arg1) {
      let closure_0 = arg1;
      return callback3(closure_14, {
        onAction() {
          return arr.push(outer1_10.JOCKIN);
        }
      });
    };
    obj[constants.EVERYBODY] = obj1;
    obj2 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    const obj9 = callback(5238);
    obj2[0] = callback(5238).getHeaderBackButton();
    const obj11 = callback(5238);
    obj2[1] = callback(5238).getHeaderCloseButton(callback2(4490).pop);
    obj2[2] = function headerTitle() {
      return callback3(callback(5238).NavigatorHeader, { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" });
    };
    obj2[3] = function render(arg0, arg1) {
      let closure_0 = arg1;
      return callback3(closure_13, {
        title: "I see you jockin' me.",
        emoji: "\u{1F525}",
        action: "I'm like come on fhqwhgads",
        onAction() {
          return arr.push(outer1_10.LIMIT);
        },
        disclaimer: "Tryin' to play like, you know me."
      });
    };
    obj[constants.JOCKIN] = obj2;
    const obj3 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    const obj12 = callback(5238);
    obj3[0] = callback(5238).getHeaderBackButton();
    obj3[1] = function headerRight() {
      return callback3(callback(5238).HeaderSubmittingIndicator, {});
    };
    obj3[2] = function headerTitle() {
      return callback3(callback(5238).NavigatorHeader, { title: constants.LIMIT });
    };
    obj3[3] = function render() {
      return callback3(closure_13, {
        title: "Everybody to the limit.",
        emoji: "\u{1F44F}",
        action: "Everybody come on fhqwhgads!",
        onAction: callback2(4490).pop,
        secondaryAction: "Push that fh-h-h-h-wqhgad",
        onSecondaryAction() {
          return callback(table[12]).openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
        },
        disclaimer: "The cheat is to the limit."
      });
    };
    obj[constants.LIMIT] = obj3;
    return obj;
  }, []);
  const memo = React.useMemo(() => {
    const items = [, , , , ];
    ({ START: arr[0], WHO_DAT: arr[1], EVERYBODY: arr[2], JOCKIN: arr[3], LIMIT: arr[4] } = closure_10);
    return items;
  }, []);
  obj = { screens: navigatorScreens, steps: memo, initialRouteName: constants.START };
  return callback2(StepModal.StepModal, obj);
}
function DemoScreen(arg0) {
  let action;
  let children;
  let disclaimer;
  let emoji;
  let footer;
  let onAction;
  let onSecondaryAction;
  let secondaryAction;
  let title;
  ({ emoji, action, secondaryAction, disclaimer, footer } = arg0);
  ({ title, onAction, onSecondaryAction, children } = arg0);
  const tmp = createCacheKey();
  let tmp5 = null != emoji;
  if (tmp5) {
    let obj = { style: null, children: null };
    obj[0] = tmp.emojiContainer;
    obj = { maxFontSizeMultiplier: 1, variant: "heading-xxl/medium", style: null, children: null };
    obj[2] = tmp.emoji;
    obj[3] = emoji;
    obj[1] = callback2(tmp3(4281).Text, obj);
    tmp5 = callback2(closure_5, obj);
  }
  obj = { children: null };
  const items = [tmp5, callback2(Text.Text, { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: title }), children];
  obj[0] = items;
  children = [closure_8(ModalContent.ModalContent, obj), ];
  if (footer == null) {
    let tmp8Result = null != disclaimer;
    if (tmp8Result) {
      const obj2 = { children: null };
      obj2[0] = disclaimer;
      tmp8Result = tmp8(tmp3(13334).ModalDisclaimer, obj2);
    }
    const items2 = [tmp8Result, , ];
    tmp8Result = null != action;
    if (tmp8Result) {
      const obj3 = { variant: "primary", text: null, onPress: null };
      obj3[1] = action;
      obj3[2] = onAction;
      tmp8Result = tmp8(tmp3(10181).ModalActionButton, obj3);
    }
    items2[1] = tmp8Result;
    let tmp8Result1 = null != secondaryAction;
    if (tmp8Result1) {
      const obj4 = { variant: "secondary", text: null, onPress: null };
      obj4[1] = secondaryAction;
      obj4[2] = onSecondaryAction;
      tmp8Result1 = tmp8(tmp3(10181).ModalActionButton, obj4);
    }
    const obj5 = { children: null };
    items2[2] = tmp8Result1;
    obj5[0] = items2;
    footer = tmp2(tmp3(11246).ModalFooter, obj5);
  }
  children[1] = footer;
  return closure_8(ModalScreen.ModalScreen, { children });
}
function SwitchesScreen(onAction) {
  let arr2;
  let c1;
  let parts;
  c1 = undefined;
  let tmp = createCacheKey();
  parts = "I said ooh ah fhqwhgads, I said ooh ah fhqhgads!".split(" ");
  [arr2, c1] = callback(React.useState(parts.map(() => false)), 2);
  let obj = { title: "Everybody come on fhqwhgads.", emoji: "\u{1F44F}", footer: null, children: null };
  obj = { isVisible: null, floatingBackgroundColor: null, text: "Come on fhqwhgads", onPress: null };
  obj[0] = arr2.some((arg0) => arg0);
  obj[1] = tmp.screen.backgroundColor;
  obj[3] = onAction.onAction;
  obj[2] = callback2(parts(10180).ModalFloatingAction, obj);
  obj = { style: tmp.tableRows, children: null };
  const obj1 = { hasIcons: false, children: null };
  obj1[1] = arr2.map((value) => {
    const parts = arg1;
    return outer1_7(parts(outer1_2[23]).TableSwitchRow, {
      label: parts[arg1],
      value,
      onValueChange(arg0) {
        let closure_0 = arg0;
        outer1_1((arr) => arr.map((arg0, arg1) => {
          let tmp = arg0;
          if (arg1 === outer1_0) {
            tmp = closure_0;
          }
          return tmp;
        }));
      }
    }, arg1);
  });
  obj[1] = callback2(parts(5649).TableRowGroup, obj1);
  const items = [callback2(closure_5, obj), callback2(parts(10180).ModalFloatingActionSpacer, {})];
  obj[3] = items;
  return callback3(DemoScreen, obj);
}
function openDemoModal() {
  let arr = ModalActionCreators;
  arr = arr.push(DemoModal);
}
function openDemoStepModal() {
  let arr = ModalActionCreators;
  arr = arr.push(DemoStepModal);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: { flex: 1, alignItems: "center", padding: 16, gap: 16 }, screen: null, emojiContainer: null, emoji: null, title: null, tableRows: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginBottom: 16 };
createCacheKey[3] = { fontSize: 48, lineHeight: 80 };
createCacheKey[4] = { marginBottom: 16 };
createCacheKey[5] = { width: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = { START: "Come on fhqwhgads", WHO_DAT: "Who's that?", EVERYBODY: "Everybody come on fhqwhgads", JOCKIN: "I see you jockin' me", LIMIT: "Everybody to the limit" };
let obj1 = { alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginBottom: 16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx");

export default function UserSettingsDesignSystemModal() {
  let obj = { children: null };
  obj = { style: createCacheKey().container, children: null };
  obj = { onPress: openDemoModal, text: "Show Modal" };
  const items = [callback2(Button.Button, obj), callback2(Button.Button, { onPress: openDemoStepModal, text: "Show Stepped Modal" })];
  obj[1] = items;
  obj[0] = callback3(closure_5, obj);
  return callback2(closure_6, obj);
};