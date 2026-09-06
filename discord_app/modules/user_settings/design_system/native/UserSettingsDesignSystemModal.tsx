// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import ModalScreen from "../../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent from "../../../../design/components/Modal/native/ModalContent.native.tsx";
import Modal from "../../../../design/components/Modal/native/Modal.native.tsx";
import StepModal from "../../../../design/components/Modal/native/StepModal.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function DemoModal() {
  let obj = Navigator;
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj = {};
    obj = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    let obj2 = NavigatorHeader;
    obj.headerLeft = obj2.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj.headerRight = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = closure_1_0(1114).intl;
      obj.text = intl.string(closure_1_0(1114).t["5Wxrcd"]);
      obj.onPress = closure_1_1(4763).pop;
      return closure_1_7(closure_1_0(7377).HeaderActionButton, obj);
    };
    obj.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(5624).NavigatorHeader, {
        title: constants.START,
        subtitle: "I said come on fhqwhgads",
      });
    };
    obj.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_13, {
        title: "Come on fhqwhgads.",
        emoji: "\u{1F60E}",
        action: "Everybody to the limit",
        onAction() {
          return closure_0.push(constants.WHO_DAT);
        },
        secondaryAction: "Maybe later",
        onSecondaryAction: closure_1(4763).pop,
        disclaimer: "I said come on fhqwhgads.",
      });
    };
    obj[constants.START] = obj;
    obj = { headerLeft: NavigatorHeader.getHeaderBackButton(), headerRight: null, headerTitle: null, render: null };
    obj.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(5624).NavigatorHeader, { title: constants.WHO_DAT });
    };
    obj.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_13, {
        title: "Who's that?",
        emoji: "\u{1F4BF}",
        action: "It's to the limit",
        onAction() {
          return closure_0.push(constants.EVERYBODY);
        },
        children: closure_7(closure_0(6606).TextInput, { placeholder: "My friend Jake" }),
      });
    };
    obj[constants.WHO_DAT] = obj;
    const obj1 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj1.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj1.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj1.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(5624).NavigatorHeader, { title: constants.EVERYBODY });
    };
    obj1.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_14, {
        onAction() {
          return closure_0.push(constants.JOCKIN);
        },
      });
    };
    obj[constants.EVERYBODY] = obj1;
    obj2 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj2.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj2.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj2.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(5624).NavigatorHeader, {
        title: constants.JOCKIN,
        subtitle: "Tryin' to play like, you know me",
      });
    };
    obj2.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_13, {
        title: "I see you jockin' me.",
        emoji: "\u{1F525}",
        action: "I'm like come on fhqwhgads",
        onAction() {
          return closure_0.push(constants.LIMIT);
        },
        disclaimer: "Tryin' to play like, you know me.",
      });
    };
    obj[constants.JOCKIN] = obj2;
    const obj3 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj3.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj3.headerRight = function headerRight() {
      return closure_1_7(closure_1_0(5624).HeaderSubmittingIndicator, {});
    };
    obj3.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(5624).NavigatorHeader, { title: constants.LIMIT });
    };
    obj3.render = function render() {
      return closure_1_7(closure_1_13, {
        title: "Everybody to the limit.",
        emoji: "\u{1F44F}",
        action: "Everybody come on fhqwhgads!",
        onAction: closure_1_1(4763).pop,
        secondaryAction: "Push that fh-h-h-h-wqhgad",
        onSecondaryAction() {
          return closure_1_1(dependencyMap[12]).openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
        },
        disclaimer: "The cheat is to the limit.",
      });
    };
    obj[constants.LIMIT] = obj3;
    return obj;
  }, []);
  obj = { screens: navigatorScreens, initialRouteName: constants.START };
  return React5(Modal.Modal, obj);
}
function DemoStepModal() {
  let obj = Navigator;
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj = {};
    obj = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    let obj2 = NavigatorHeader;
    obj.headerLeft = obj2.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj.headerRight = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = closure_1_0(1114).intl;
      obj.text = intl.string(closure_1_0(1114).t["5Wxrcd"]);
      obj.onPress = closure_1_1(4763).pop;
      return closure_1_7(closure_1_0(7377).HeaderActionButton, obj);
    };
    obj.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(5624).NavigatorHeader, {
        title: constants.START,
        subtitle: "I said come on fhqwhgads",
      });
    };
    obj.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_13, {
        title: "Come on fhqwhgads.",
        emoji: "\u{1F60E}",
        action: "Everybody to the limit",
        onAction() {
          return closure_0.push(constants.WHO_DAT);
        },
        secondaryAction: "Maybe later",
        onSecondaryAction: closure_1(4763).pop,
        disclaimer: "I said come on fhqwhgads.",
      });
    };
    obj[constants.START] = obj;
    obj = { headerLeft: NavigatorHeader.getHeaderBackButton(), headerRight: null, headerTitle: null, render: null };
    obj.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(5624).NavigatorHeader, { title: constants.WHO_DAT });
    };
    obj.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_13, {
        title: "Who's that?",
        emoji: "\u{1F4BF}",
        action: "It's to the limit",
        onAction() {
          return closure_0.push(constants.EVERYBODY);
        },
        children: closure_7(closure_0(6606).TextInput, { placeholder: "My friend Jake" }),
      });
    };
    obj[constants.WHO_DAT] = obj;
    const obj1 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj1.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj1.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj1.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(5624).NavigatorHeader, { title: constants.EVERYBODY });
    };
    obj1.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_14, {
        onAction() {
          return closure_0.push(constants.JOCKIN);
        },
      });
    };
    obj[constants.EVERYBODY] = obj1;
    obj2 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj2.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj2.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj2.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(5624).NavigatorHeader, {
        title: constants.JOCKIN,
        subtitle: "Tryin' to play like, you know me",
      });
    };
    obj2.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_13, {
        title: "I see you jockin' me.",
        emoji: "\u{1F525}",
        action: "I'm like come on fhqwhgads",
        onAction() {
          return closure_0.push(constants.LIMIT);
        },
        disclaimer: "Tryin' to play like, you know me.",
      });
    };
    obj[constants.JOCKIN] = obj2;
    const obj3 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj3.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj3.headerRight = function headerRight() {
      return closure_1_7(closure_1_0(5624).HeaderSubmittingIndicator, {});
    };
    obj3.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(5624).NavigatorHeader, { title: constants.LIMIT });
    };
    obj3.render = function render() {
      return closure_1_7(closure_1_13, {
        title: "Everybody to the limit.",
        emoji: "\u{1F44F}",
        action: "Everybody come on fhqwhgads!",
        onAction: closure_1_1(4763).pop,
        secondaryAction: "Push that fh-h-h-h-wqhgad",
        onSecondaryAction() {
          return closure_1_1(dependencyMap[12]).openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
        },
        disclaimer: "The cheat is to the limit.",
      });
    };
    obj[constants.LIMIT] = obj3;
    return obj;
  }, []);
  const memo = noop.useMemo(() => {
    const items = [, , , ,];
    ({ START: arr[0], WHO_DAT: arr[1], EVERYBODY: arr[2], JOCKIN: arr[3], LIMIT: arr[4] } = constants);
    return items;
  }, []);
  obj = { screens: navigatorScreens, steps: memo, initialRouteName: constants.START };
  return React5(StepModal.StepModal, obj);
}
function DemoScreen(arg0) {
  ({ emoji, action, secondaryAction, disclaimer, footer } = arg0);
  ({ title, onAction, onSecondaryAction, children } = arg0);
  const tmp = closure_9();
  let tmp5 = null != emoji;
  if (tmp5) {
    let obj = { style: tmp.emojiContainer, children: null };
    obj = { maxFontSizeMultiplier: 1, variant: "heading-xxl/medium", style: tmp.emoji, children: emoji };
    obj.children = React5(tmp3(4556).Text, obj);
    tmp5 = React5(hasOwnProperty, obj);
  }
  obj = { children: null };
  const items = [
    tmp5,
    React5(Text_Text.Text, {
      accessibilityRole: "header",
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      style: tmp.title,
      children: title,
    }),
    children,
  ];
  obj.children = items;
  children = [React6(ModalContent.ModalContent, obj)];
  if (footer == null) {
    let tmp8Result = null != disclaimer;
    if (tmp8Result) {
      const obj2 = { children: disclaimer };
      tmp8Result = tmp8(tmp3(14176).ModalDisclaimer, obj2);
    }
    const items2 = [tmp8Result, ,];
    tmp8Result = null != action;
    if (tmp8Result) {
      const obj3 = { variant: "primary", text: action, onPress: onAction };
      tmp8Result = tmp8(tmp3(10996).ModalActionButton, obj3);
    }
    items2[1] = tmp8Result;
    let tmp8Result1 = null != secondaryAction;
    if (tmp8Result1) {
      const obj4 = { variant: "secondary", text: secondaryAction, onPress: onSecondaryAction };
      tmp8Result1 = tmp8(tmp3(10996).ModalActionButton, obj4);
    }
    const obj5 = { children: null };
    items2[2] = tmp8Result1;
    obj5.children = items2;
    footer = tmp2(tmp3(11926).ModalFooter, obj5);
  }
  children[1] = footer;
  return React6(ModalScreen.ModalScreen, { children });
}
function SwitchesScreen(onAction) {
  c1 = undefined;
  let tmp = closure_9();
  let parts = "I said ooh ah fhqwhgads, I said ooh ah fhqhgads!".split(" ");
  [arr2, c1] = _slicedToArray(noop.useState(parts.map(() => false)), 2);
  let obj = { title: "Everybody come on fhqwhgads.", emoji: "\u{1F44F}", footer: null, children: null };
  obj = {
    isVisible: arr2.some((item) => item),
    floatingBackgroundColor: tmp.screen.backgroundColor,
    text: "Come on fhqwhgads",
    onPress: onAction.onAction,
  };
  obj.footer = closure_7(parts(10995).ModalFloatingAction, obj);
  obj = { style: tmp.tableRows, children: null };
  const tmp2 = _slicedToArray(noop.useState(parts.map(() => false)), 2);
  obj.children = closure_7(parts(5687).TableRowGroup, {
    hasIcons: false,
    children: arr2.map((value, index) => {
      parts = index;
      return closure_1_7(
        parts(dependencyMap[23]).TableSwitchRow,
        {
          label: parts[index],
          value,
          onValueChange(arg0) {
            closure_0 = arg0;
            closure_1_1((arr) =>
              arr.map((item, index) => {
                let tmp = item;
                if (index === closure_0) {
                  tmp = closure_1_0;
                }
                return tmp;
              }),
            );
          },
        },
        index,
      );
    }),
  });
  const items = [closure_7(closure_5, obj), closure_7(parts(10995).ModalFloatingActionSpacer, {})];
  obj.children = items;
  return closure_8(DemoScreen, obj);
}
function openDemoModal() {
  let arr = ModalActionCreatorsDefault;
  arr = arr.push(DemoModal);
}
function openDemoStepModal() {
  let arr = ModalActionCreatorsDefault;
  arr = arr.push(DemoStepModal);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  container: { flex: 1, alignItems: "center", padding: 16, gap: 16 },
  screen: null,
  emojiContainer: null,
  emoji: null,
  title: null,
  tableRows: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.screen = createStyles;
let size = {
  alignItems: "center",
  justifyContent: "center",
  width: 80,
  height: 80,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginBottom: 16,
};
createStyles.emojiContainer = size;
createStyles.emoji = { fontSize: 48, lineHeight: 80 };
createStyles.title = { marginBottom: 16 };
createStyles.tableRows = { width: "100%" };
let closure_9 = createStyles.createStyles(createStyles);
const constants = {
  START: "Come on fhqwhgads",
  WHO_DAT: "Who's that?",
  EVERYBODY: "Everybody come on fhqwhgads",
  JOCKIN: "I see you jockin' me",
  LIMIT: "Everybody to the limit",
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx",
);

export default function UserSettingsDesignSystemModal() {
  let obj = { children: null };
  obj = { style: closure_9().container, children: null };
  obj = { onPress: openDemoModal, text: "Show Modal" };
  const items = [
    React5(components_Button_Button.Button, obj),
    React5(components_Button_Button.Button, { onPress: openDemoStepModal, text: "Show Stepped Modal" }),
  ];
  obj.children = items;
  obj.children = React6(hasOwnProperty, obj);
  return React5(timestampProducer, obj);
}
