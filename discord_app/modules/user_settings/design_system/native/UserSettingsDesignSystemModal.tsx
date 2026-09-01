// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef4723 from "../../../../actions/ModalActionCreators.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import NavigationStack from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import ModalScreen from "../../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent from "../../../../design/components/Modal/native/ModalContent.native.tsx";
import Modal from "../../../../design/components/Modal/native/Modal.native.tsx";
import StepModal from "../../../../design/components/Modal/native/StepModal.native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function DemoModal() {
  let obj = NavigationStack;
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj = {};
    obj = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    let obj2 = callback(5495);
    obj[0] = obj2.getHeaderCloseButton(callback2(4723).pop);
    obj[1] = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t["5Wxrcd"]);
      obj[1] = callback2(4723).pop;
      return callback3(callback(6237).HeaderActionButton, obj);
    };
    obj[2] = function headerTitle() {
      return callback3(callback(5495).NavigatorHeader, { title: constants.START, subtitle: "I said come on fhqwhgads" });
    };
    obj[3] = function render(arg0, arg1) {
      closure_0 = arg1;
      return callback3(closure_13, {
        title: "Come on fhqwhgads.",
        emoji: "\u{1F60E}",
        action: "Everybody to the limit",
        onAction() {
          return arr.push(closure_1_10.WHO_DAT);
        },
        secondaryAction: "Maybe later",
        onSecondaryAction: callback2(4723).pop,
        disclaimer: "I said come on fhqwhgads."
      });
    };
    obj[constants.START] = obj;
    obj = { headerLeft: callback(5495).getHeaderBackButton(), headerRight: null, headerTitle: null, render: null };
    const obj5 = callback(5495);
    obj[1] = callback(5495).getHeaderCloseButton(callback2(4723).pop);
    obj[2] = function headerTitle() {
      return callback3(callback(5495).NavigatorHeader, { title: constants.WHO_DAT });
    };
    obj[3] = function render(arg0, arg1) {
      const callback = arg1;
      return callback3(closure_13, {
        title: "Who's that?",
        emoji: "\u{1F4BF}",
        action: "It's to the limit",
        onAction() {
          return arr.push(closure_1_10.EVERYBODY);
        },
        children: callback3(callback(7705).TextInput, { placeholder: "My friend Jake" })
      });
    };
    obj[constants.WHO_DAT] = obj;
    obj1 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    const obj6 = callback(5495);
    obj1[0] = callback(5495).getHeaderBackButton();
    const obj8 = callback(5495);
    obj1[1] = callback(5495).getHeaderCloseButton(callback2(4723).pop);
    obj1[2] = function headerTitle() {
      return callback3(callback(5495).NavigatorHeader, { title: constants.EVERYBODY });
    };
    obj1[3] = function render(arg0, arg1) {
      closure_0 = arg1;
      return callback3(closure_14, {
        onAction() {
          return arr.push(closure_1_10.JOCKIN);
        }
      });
    };
    obj[constants.EVERYBODY] = obj1;
    obj2 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    const obj9 = callback(5495);
    obj2[0] = callback(5495).getHeaderBackButton();
    const obj11 = callback(5495);
    obj2[1] = callback(5495).getHeaderCloseButton(callback2(4723).pop);
    obj2[2] = function headerTitle() {
      return callback3(callback(5495).NavigatorHeader, { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" });
    };
    obj2[3] = function render(arg0, arg1) {
      closure_0 = arg1;
      return callback3(closure_13, {
        title: "I see you jockin' me.",
        emoji: "\u{1F525}",
        action: "I'm like come on fhqwhgads",
        onAction() {
          return arr.push(closure_1_10.LIMIT);
        },
        disclaimer: "Tryin' to play like, you know me."
      });
    };
    obj[constants.JOCKIN] = obj2;
    const obj3 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    const obj12 = callback(5495);
    obj3[0] = callback(5495).getHeaderBackButton();
    obj3[1] = function headerRight() {
      return callback3(callback(5495).HeaderSubmittingIndicator, {});
    };
    obj3[2] = function headerTitle() {
      return callback3(callback(5495).NavigatorHeader, { title: constants.LIMIT });
    };
    obj3[3] = function render() {
      return callback3(closure_13, {
        title: "Everybody to the limit.",
        emoji: "\u{1F44F}",
        action: "Everybody come on fhqwhgads!",
        onAction: callback2(4723).pop,
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
    let obj2 = callback(5495);
    obj[0] = obj2.getHeaderCloseButton(callback2(4723).pop);
    obj[1] = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t["5Wxrcd"]);
      obj[1] = callback2(4723).pop;
      return callback3(callback(6237).HeaderActionButton, obj);
    };
    obj[2] = function headerTitle() {
      return callback3(callback(5495).NavigatorHeader, { title: constants.START, subtitle: "I said come on fhqwhgads" });
    };
    obj[3] = function render(arg0, arg1) {
      closure_0 = arg1;
      return callback3(closure_13, {
        title: "Come on fhqwhgads.",
        emoji: "\u{1F60E}",
        action: "Everybody to the limit",
        onAction() {
          return arr.push(closure_1_10.WHO_DAT);
        },
        secondaryAction: "Maybe later",
        onSecondaryAction: callback2(4723).pop,
        disclaimer: "I said come on fhqwhgads."
      });
    };
    obj[constants.START] = obj;
    obj = { headerLeft: callback(5495).getHeaderBackButton(), headerRight: null, headerTitle: null, render: null };
    const obj5 = callback(5495);
    obj[1] = callback(5495).getHeaderCloseButton(callback2(4723).pop);
    obj[2] = function headerTitle() {
      return callback3(callback(5495).NavigatorHeader, { title: constants.WHO_DAT });
    };
    obj[3] = function render(arg0, arg1) {
      const callback = arg1;
      return callback3(closure_13, {
        title: "Who's that?",
        emoji: "\u{1F4BF}",
        action: "It's to the limit",
        onAction() {
          return arr.push(closure_1_10.EVERYBODY);
        },
        children: callback3(callback(7705).TextInput, { placeholder: "My friend Jake" })
      });
    };
    obj[constants.WHO_DAT] = obj;
    obj1 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    const obj6 = callback(5495);
    obj1[0] = callback(5495).getHeaderBackButton();
    const obj8 = callback(5495);
    obj1[1] = callback(5495).getHeaderCloseButton(callback2(4723).pop);
    obj1[2] = function headerTitle() {
      return callback3(callback(5495).NavigatorHeader, { title: constants.EVERYBODY });
    };
    obj1[3] = function render(arg0, arg1) {
      closure_0 = arg1;
      return callback3(closure_14, {
        onAction() {
          return arr.push(closure_1_10.JOCKIN);
        }
      });
    };
    obj[constants.EVERYBODY] = obj1;
    obj2 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    const obj9 = callback(5495);
    obj2[0] = callback(5495).getHeaderBackButton();
    const obj11 = callback(5495);
    obj2[1] = callback(5495).getHeaderCloseButton(callback2(4723).pop);
    obj2[2] = function headerTitle() {
      return callback3(callback(5495).NavigatorHeader, { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" });
    };
    obj2[3] = function render(arg0, arg1) {
      closure_0 = arg1;
      return callback3(closure_13, {
        title: "I see you jockin' me.",
        emoji: "\u{1F525}",
        action: "I'm like come on fhqwhgads",
        onAction() {
          return arr.push(closure_1_10.LIMIT);
        },
        disclaimer: "Tryin' to play like, you know me."
      });
    };
    obj[constants.JOCKIN] = obj2;
    const obj3 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    const obj12 = callback(5495);
    obj3[0] = callback(5495).getHeaderBackButton();
    obj3[1] = function headerRight() {
      return callback3(callback(5495).HeaderSubmittingIndicator, {});
    };
    obj3[2] = function headerTitle() {
      return callback3(callback(5495).NavigatorHeader, { title: constants.LIMIT });
    };
    obj3[3] = function render() {
      return callback3(closure_13, {
        title: "Everybody to the limit.",
        emoji: "\u{1F44F}",
        action: "Everybody come on fhqwhgads!",
        onAction: callback2(4723).pop,
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
  ({ emoji, action, secondaryAction, disclaimer, footer } = arg0);
  ({ title, onAction, onSecondaryAction, children } = arg0);
  const tmp = callback4();
  let tmp5 = null != emoji;
  if (tmp5) {
    let obj = { style: null, children: null };
    obj[0] = tmp.emojiContainer;
    obj = { maxFontSizeMultiplier: 1, variant: "heading-xxl/medium", style: null, children: null };
    obj[2] = tmp.emoji;
    obj[3] = emoji;
    obj[1] = callback2(tmp3(4474).Text, obj);
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
      tmp8Result = tmp8(tmp3(13819).ModalDisclaimer, obj2);
    }
    const items2 = [tmp8Result, , ];
    tmp8Result = null != action;
    if (tmp8Result) {
      const obj3 = { variant: "primary", text: null, onPress: null };
      obj3[1] = action;
      obj3[2] = onAction;
      tmp8Result = tmp8(tmp3(10733).ModalActionButton, obj3);
    }
    items2[1] = tmp8Result;
    let tmp8Result1 = null != secondaryAction;
    if (tmp8Result1) {
      const obj4 = { variant: "secondary", text: null, onPress: null };
      obj4[1] = secondaryAction;
      obj4[2] = onSecondaryAction;
      tmp8Result1 = tmp8(tmp3(10733).ModalActionButton, obj4);
    }
    const obj5 = { children: null };
    items2[2] = tmp8Result1;
    obj5[0] = items2;
    footer = tmp2(tmp3(11499).ModalFooter, obj5);
  }
  children[1] = footer;
  return closure_8(ModalScreen.ModalScreen, { children });
}
function SwitchesScreen(onAction) {
  let parts;
  c1 = undefined;
  let tmp = callback4();
  parts = "I said ooh ah fhqwhgads, I said ooh ah fhqhgads!".split(" ");
  [arr2, c1] = callback(React.useState(parts.map(() => false)), 2);
  let obj = { title: "Everybody come on fhqwhgads.", emoji: "\u{1F44F}", footer: null, children: null };
  obj = { isVisible: arr2.some((arg0) => arg0), floatingBackgroundColor: tmp.screen.backgroundColor, text: "Come on fhqwhgads", onPress: onAction.onAction };
  obj[2] = callback2(parts(10732).ModalFloatingAction, obj);
  obj = { style: tmp.tableRows, children: null };
  const tmp2 = callback(React.useState(parts.map(() => false)), 2);
  obj[1] = callback2(parts(5992).TableRowGroup, {
    hasIcons: false,
    children: arr2.map((value) => {
      parts = arg1;
      return closure_1_7(parts(closure_1_2[23]).TableSwitchRow, {
        label: parts[arg1],
        value,
        onValueChange(arg0) {
          closure_0 = arg0;
          closure_1_1((arr) => arr.map((arg0, arg1) => {
            let tmp = arg0;
            if (arg1 === closure_1_0) {
              tmp = closure_0;
            }
            return tmp;
          }));
        }
      }, arg1);
    })
  });
  const items = [callback2(closure_5, obj), callback2(parts(10732).ModalFloatingActionSpacer, {})];
  obj[3] = items;
  return callback3(DemoScreen, obj);
}
function openDemoModal() {
  let arr = _modDef4723;
  arr = arr.push(DemoModal);
}
function openDemoStepModal() {
  let arr = _modDef4723;
  arr = arr.push(DemoStepModal);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: { flex: 1, alignItems: "center", padding: 16, gap: 16 }, screen: null, emojiContainer: null, emoji: null, title: null, tableRows: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 16 };
createCacheKey[3] = { fontSize: 48, lineHeight: 80 };
createCacheKey[4] = { marginBottom: 16 };
createCacheKey[5] = { width: "100%" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { START: "Come on fhqwhgads", WHO_DAT: "Who's that?", EVERYBODY: "Everybody come on fhqwhgads", JOCKIN: "I see you jockin' me", LIMIT: "Everybody to the limit" };
let obj1 = { alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, marginBottom: 16 };
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx");

export default function UserSettingsDesignSystemModal() {
  let obj = { children: null };
  obj = { style: callback4().container, children: null };
  obj = { onPress: openDemoModal, text: "Show Modal" };
  const items = [callback2(Button.Button, obj), callback2(Button.Button, { onPress: openDemoStepModal, text: "Show Stepped Modal" })];
  obj[1] = items;
  obj[0] = callback3(closure_5, obj);
  return callback2(closure_6, obj);
};