// === Module 18133: UserSettingsDesignSystemModal ===

// Module 18133 (UserSettingsDesignSystemModal)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5751 */;
import components_Button_Button from "components/Button/Button" /* 5758 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import NavigatorHeader from "NavigatorHeader" /* 7064 */;
import Navigator from "Navigator" /* 7231 */;
import ModalScreen from "ModalScreen" /* 8041 */;
import ModalContent from "ModalContent" /* 8043 */;
import Modal from "Modal" /* 11627 */;
import ModalFooter from "ModalFooter" /* 13452 */;
import StepModal from "StepModal" /* 13458 */;
import ModalActionButton from "ModalActionButton" /* 13652 */;
import ModalDisclaimer from "ModalDisclaimer" /* 16185 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function DemoModal() {
  const navigatorScreens = Navigator.useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerRight() {
        const obj = { text: null, onPress: null };
        const intl = closure_1_0(1113).intl;
        obj.text = intl.string(closure_1_0(1113).t["5Wxrcd"]);
        obj.onPress = closure_1_1(6799).pop;
        return closure_1_7(closure_1_0(7630).HeaderActionButton, obj);
      },
      headerTitle() {
        return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.START, subtitle: "I said come on fhqwhgads" });
      },
      render(arg0, arg1) {
        closure_0 = arg1;
        return closure_7(closure_15, {
          title: "Come on fhqwhgads.",
          emoji: "\u{1F60E}",
          action: "Everybody to the limit",
          onAction() {
            return closure_0.push(constants.WHO_DAT);
          },
          secondaryAction: "Maybe later",
          onSecondaryAction: closure_1(6799).pop,
          disclaimer: "I said come on fhqwhgads."
        });
      }
    };
    obj[constants.START] = obj2;
    const obj4 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj4.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.WHO_DAT });
    };
    obj4.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_15, {
        title: "Who's that?",
        emoji: "\u{1F4BF}",
        action: "It's to the limit",
        onAction() {
          return closure_0.push(constants.EVERYBODY);
        },
        children: closure_7(closure_0(7148).TextInput, { placeholder: "My friend Jake" })
      });
    };
    obj[constants.WHO_DAT] = obj4;
    const obj7 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj7.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.EVERYBODY });
    };
    obj7.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_16, {
        onAction() {
          return closure_0.push(constants.JOCKIN);
        }
      });
    };
    obj[constants.EVERYBODY] = obj7;
    const obj10 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj10.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj10.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj10.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" });
    };
    obj10.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_15, {
        title: "I see you jockin' me.",
        emoji: "\u{1F525}",
        action: "I'm like come on fhqwhgads",
        onAction() {
          return closure_0.push(constants.LIMIT);
        },
        disclaimer: "Tryin' to play like, you know me."
      });
    };
    obj[constants.JOCKIN] = obj10;
    const obj13 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj13.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj13.headerRight = function headerRight() {
      return closure_1_7(closure_1_0(7064).HeaderSubmittingIndicator, {});
    };
    obj13.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.LIMIT });
    };
    obj13.render = function render() {
      return closure_1_7(closure_1_15, {
        title: "Everybody to the limit.",
        emoji: "\u{1F44F}",
        action: "Everybody come on fhqwhgads!",
        onAction: closure_1_1(6799).pop,
        secondaryAction: "Push that fh-h-h-h-wqhgad",
        onSecondaryAction() {
          return closure_1_1(dependencyMap[12]).openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
        },
        disclaimer: "The cheat is to the limit."
      });
    };
    obj[constants.LIMIT] = obj13;
    return obj;
  }, []);
  return metroImportDefault(Modal.Modal, { screens: navigatorScreens, initialRouteName: constants.START });
}
function DemoStepModal() {
  const navigatorScreens = Navigator.useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerRight() {
        const obj = { text: null, onPress: null };
        const intl = closure_1_0(1113).intl;
        obj.text = intl.string(closure_1_0(1113).t["5Wxrcd"]);
        obj.onPress = closure_1_1(6799).pop;
        return closure_1_7(closure_1_0(7630).HeaderActionButton, obj);
      },
      headerTitle() {
        return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.START, subtitle: "I said come on fhqwhgads" });
      },
      render(arg0, arg1) {
        closure_0 = arg1;
        return closure_7(closure_15, {
          title: "Come on fhqwhgads.",
          emoji: "\u{1F60E}",
          action: "Everybody to the limit",
          onAction() {
            return closure_0.push(constants.WHO_DAT);
          },
          secondaryAction: "Maybe later",
          onSecondaryAction: closure_1(6799).pop,
          disclaimer: "I said come on fhqwhgads."
        });
      }
    };
    obj[constants.START] = obj2;
    const obj4 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj4.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.WHO_DAT });
    };
    obj4.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_15, {
        title: "Who's that?",
        emoji: "\u{1F4BF}",
        action: "It's to the limit",
        onAction() {
          return closure_0.push(constants.EVERYBODY);
        },
        children: closure_7(closure_0(7148).TextInput, { placeholder: "My friend Jake" })
      });
    };
    obj[constants.WHO_DAT] = obj4;
    const obj7 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj7.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.EVERYBODY });
    };
    obj7.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_16, {
        onAction() {
          return closure_0.push(constants.JOCKIN);
        }
      });
    };
    obj[constants.EVERYBODY] = obj7;
    const obj10 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj10.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj10.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj10.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" });
    };
    obj10.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_15, {
        title: "I see you jockin' me.",
        emoji: "\u{1F525}",
        action: "I'm like come on fhqwhgads",
        onAction() {
          return closure_0.push(constants.LIMIT);
        },
        disclaimer: "Tryin' to play like, you know me."
      });
    };
    obj[constants.JOCKIN] = obj10;
    const obj13 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj13.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj13.headerRight = function headerRight() {
      return closure_1_7(closure_1_0(7064).HeaderSubmittingIndicator, {});
    };
    obj13.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.LIMIT });
    };
    obj13.render = function render() {
      return closure_1_7(closure_1_15, {
        title: "Everybody to the limit.",
        emoji: "\u{1F44F}",
        action: "Everybody come on fhqwhgads!",
        onAction: closure_1_1(6799).pop,
        secondaryAction: "Push that fh-h-h-h-wqhgad",
        onSecondaryAction() {
          return closure_1_1(dependencyMap[12]).openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
        },
        disclaimer: "The cheat is to the limit."
      });
    };
    obj[constants.LIMIT] = obj13;
    return obj;
  }, []);
  const memo = noop.useMemo(() => {
    items = [, , , , ];
    ({ START: arr[0], WHO_DAT: arr[1], EVERYBODY: arr[2], JOCKIN: arr[3], LIMIT: arr[4] } = constants);
    return items;
  }, []);
  return metroImportDefault(StepModal.StepModal, { screens: navigatorScreens, steps: memo, initialRouteName: constants.START });
}
function DemoGradientStepModal() {
  const navigatorScreens = Navigator.useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerRight() {
        const obj = { text: null, onPress: null };
        const intl = closure_1_0(1113).intl;
        obj.text = intl.string(closure_1_0(1113).t["5Wxrcd"]);
        obj.onPress = closure_1_1(6799).pop;
        return closure_1_7(closure_1_0(7630).HeaderActionButton, obj);
      },
      headerTitle() {
        return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.START, subtitle: "I said come on fhqwhgads" });
      },
      render(arg0, arg1) {
        closure_0 = arg1;
        return closure_7(closure_15, {
          title: "Come on fhqwhgads.",
          emoji: "\u{1F60E}",
          action: "Everybody to the limit",
          onAction() {
            return closure_0.push(constants.WHO_DAT);
          },
          secondaryAction: "Maybe later",
          onSecondaryAction: closure_1(6799).pop,
          disclaimer: "I said come on fhqwhgads."
        });
      }
    };
    obj[constants.START] = obj2;
    const obj4 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj4.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.WHO_DAT });
    };
    obj4.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_15, {
        title: "Who's that?",
        emoji: "\u{1F4BF}",
        action: "It's to the limit",
        onAction() {
          return closure_0.push(constants.EVERYBODY);
        },
        children: closure_7(closure_0(7148).TextInput, { placeholder: "My friend Jake" })
      });
    };
    obj[constants.WHO_DAT] = obj4;
    const obj7 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj7.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.EVERYBODY });
    };
    obj7.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_16, {
        onAction() {
          return closure_0.push(constants.JOCKIN);
        }
      });
    };
    obj[constants.EVERYBODY] = obj7;
    const obj10 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj10.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj10.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj10.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" });
    };
    obj10.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_15, {
        title: "I see you jockin' me.",
        emoji: "\u{1F525}",
        action: "I'm like come on fhqwhgads",
        onAction() {
          return closure_0.push(constants.LIMIT);
        },
        disclaimer: "Tryin' to play like, you know me."
      });
    };
    obj[constants.JOCKIN] = obj10;
    const obj13 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj13.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj13.headerRight = function headerRight() {
      return closure_1_7(closure_1_0(7064).HeaderSubmittingIndicator, {});
    };
    obj13.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.LIMIT });
    };
    obj13.render = function render() {
      return closure_1_7(closure_1_15, {
        title: "Everybody to the limit.",
        emoji: "\u{1F44F}",
        action: "Everybody come on fhqwhgads!",
        onAction: closure_1_1(6799).pop,
        secondaryAction: "Push that fh-h-h-h-wqhgad",
        onSecondaryAction() {
          return closure_1_1(dependencyMap[12]).openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
        },
        disclaimer: "The cheat is to the limit."
      });
    };
    obj[constants.LIMIT] = obj13;
    return obj;
  }, []);
  const memo = noop.useMemo(() => {
    items = [, , , , ];
    ({ START: arr[0], WHO_DAT: arr[1], EVERYBODY: arr[2], JOCKIN: arr[3], LIMIT: arr[4] } = constants);
    return items;
  }, []);
  return metroImportDefault(StepModal.StepModal, { screens: navigatorScreens, steps: memo, initialRouteName: constants.START, gradientColor: "purple" });
}
function DemoGradientModal() {
  const navigatorScreens = Navigator.useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerRight() {
        const obj = { text: null, onPress: null };
        const intl = closure_1_0(1113).intl;
        obj.text = intl.string(closure_1_0(1113).t["5Wxrcd"]);
        obj.onPress = closure_1_1(6799).pop;
        return closure_1_7(closure_1_0(7630).HeaderActionButton, obj);
      },
      headerTitle() {
        return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.START, subtitle: "I said come on fhqwhgads" });
      },
      render(arg0, arg1) {
        closure_0 = arg1;
        return closure_7(closure_15, {
          title: "Come on fhqwhgads.",
          emoji: "\u{1F60E}",
          action: "Everybody to the limit",
          onAction() {
            return closure_0.push(constants.WHO_DAT);
          },
          secondaryAction: "Maybe later",
          onSecondaryAction: closure_1(6799).pop,
          disclaimer: "I said come on fhqwhgads."
        });
      }
    };
    obj[constants.START] = obj2;
    const obj4 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj4.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.WHO_DAT });
    };
    obj4.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_15, {
        title: "Who's that?",
        emoji: "\u{1F4BF}",
        action: "It's to the limit",
        onAction() {
          return closure_0.push(constants.EVERYBODY);
        },
        children: closure_7(closure_0(7148).TextInput, { placeholder: "My friend Jake" })
      });
    };
    obj[constants.WHO_DAT] = obj4;
    const obj7 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj7.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.EVERYBODY });
    };
    obj7.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_16, {
        onAction() {
          return closure_0.push(constants.JOCKIN);
        }
      });
    };
    obj[constants.EVERYBODY] = obj7;
    const obj10 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj10.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj10.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj10.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.JOCKIN, subtitle: "Tryin' to play like, you know me" });
    };
    obj10.render = function render(arg0, arg1) {
      closure_0 = arg1;
      return closure_7(closure_15, {
        title: "I see you jockin' me.",
        emoji: "\u{1F525}",
        action: "I'm like come on fhqwhgads",
        onAction() {
          return closure_0.push(constants.LIMIT);
        },
        disclaimer: "Tryin' to play like, you know me."
      });
    };
    obj[constants.JOCKIN] = obj10;
    const obj13 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj13.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj13.headerRight = function headerRight() {
      return closure_1_7(closure_1_0(7064).HeaderSubmittingIndicator, {});
    };
    obj13.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7064).NavigatorHeader, { title: constants.LIMIT });
    };
    obj13.render = function render() {
      return closure_1_7(closure_1_15, {
        title: "Everybody to the limit.",
        emoji: "\u{1F44F}",
        action: "Everybody come on fhqwhgads!",
        onAction: closure_1_1(6799).pop,
        secondaryAction: "Push that fh-h-h-h-wqhgad",
        onSecondaryAction() {
          return closure_1_1(dependencyMap[12]).openURL("https://www.youtube.com/watch?v=votBDwhTu1E");
        },
        disclaimer: "The cheat is to the limit."
      });
    };
    obj[constants.LIMIT] = obj13;
    return obj;
  }, []);
  return metroImportDefault(Modal.Modal, { screens: navigatorScreens, initialRouteName: constants.START, gradientColor: "blue" });
}
function DemoScreen(arg0) {
  ({ emoji, action, secondaryAction, disclaimer, footer } = arg0);
  ({ title, onAction, onSecondaryAction, children } = arg0);
  const tmp = closure_9();
  let tmp5 = null != emoji;
  if (tmp5) {
    const obj = { style: tmp.emojiContainer, children: null };
    const obj2 = { maxFontSizeMultiplier: 1, variant: "heading-xxl/medium", style: tmp.emoji, children: emoji };
    obj.children = metroImportDefault(Text_Text.Text, obj2);
    tmp5 = metroImportDefault(hasOwnProperty, obj);
  }
  const obj3 = { children: null };
  items = [tmp5, metroImportDefault(Text_Text.Text, { accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: title }), children];
  obj3.children = items;
  const children1 = [React5(ModalContent.ModalContent, obj3), ];
  if (footer == null) {
    let tmp8Result = null != disclaimer;
    if (tmp8Result) {
      const obj5 = { children: disclaimer };
      tmp8Result = metroImportDefault(ModalDisclaimer.ModalDisclaimer, obj5);
    }
    const items2 = [tmp8Result, , ];
    let tmp8Result3 = null != action;
    if (tmp8Result3) {
      const obj6 = { variant: "primary", text: action, onPress: onAction };
      tmp8Result3 = metroImportDefault(ModalActionButton.ModalActionButton, obj6);
    }
    items2[1] = tmp8Result3;
    let tmp8Result4 = null != secondaryAction;
    if (tmp8Result4) {
      const obj7 = { variant: "secondary", text: secondaryAction, onPress: onSecondaryAction };
      tmp8Result4 = metroImportDefault(ModalActionButton.ModalActionButton, obj7);
    }
    const obj8 = { children: null };
    items2[2] = tmp8Result4;
    obj8.children = items2;
    footer = React5(ModalFooter.ModalFooter, obj8);
  }
  children1[1] = footer;
  return React5(ModalScreen.ModalScreen, { children: children1 });
}
function SwitchesScreen(onAction) {
  c1 = undefined;
  let tmp = closure_9();
  let parts = "I said ooh ah fhqwhgads, I said ooh ah fhqhgads!".split(" ");
  [arr2, c1] = noop.useState(parts.map(() => false));
  const obj = { title: "Everybody come on fhqwhgads.", emoji: "\u{1F44F}", footer: null, children: null };
  const tmp2 = _slicedToArray(noop.useState(parts.map(() => false)), 2);
  obj.footer = closure_7(parts(13651).ModalFloatingAction, { isVisible: arr2.some((item) => item), floatingBackgroundColor: tmp.screen.backgroundColor, text: "Come on fhqwhgads", onPress: onAction.onAction });
  const obj3 = { style: tmp.tableRows, children: null };
  const obj2 = { isVisible: arr2.some((item) => item), floatingBackgroundColor: tmp.screen.backgroundColor, text: "Come on fhqwhgads", onPress: onAction.onAction };
  obj3.children = closure_7(parts(7126).TableRowGroup, {
    hasIcons: false,
    children: arr2.map((value, index) => {
      parts = index;
      return closure_1_7(parts(dependencyMap[23]).TableSwitchRow, {
        label: parts[index],
        value,
        onValueChange(arg0) {
          closure_0 = arg0;
          closure_1_1((arr) => arr.map((item, index) => {
            let tmp = item;
            if (index === closure_0) {
              tmp = closure_1_0;
            }
            return tmp;
          }));
        }
      }, index);
    })
  });
  items = [closure_7(closure_5, obj3), closure_7(parts(13651).ModalFloatingActionSpacer, {})];
  obj.children = items;
  return closure_8(DemoScreen, obj);
}
function openDemoModal() {
  ModalActionCreatorsDefault.push(DemoModal);
}
function openDemoStepModal() {
  ModalActionCreatorsDefault.push(DemoStepModal);
}
function openDemoGradientStepModal() {
  ModalActionCreatorsDefault.push(DemoGradientStepModal);
}
function openDemoGradientModal() {
  ModalActionCreatorsDefault.push(DemoGradientModal);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5140);
let obj2 = { container: { flex: 1, alignItems: "center", padding: 16, gap: 16 }, screen: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, emojiContainer: null, emoji: null, title: null, tableRows: null };
let size = { alignItems: "center", justifyContent: "center", width: 80, height: 80, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginBottom: 16 };
obj2.emojiContainer = size;
obj2.emoji = { fontSize: 48, lineHeight: 80 };
obj2.title = { marginBottom: 16 };
obj2.tableRows = { width: "100%" };
let closure_9 = createStyles.createStyles(obj2);
const constants = { START: "Come on fhqwhgads", WHO_DAT: "Who's that?", EVERYBODY: "Everybody come on fhqwhgads", JOCKIN: "I see you jockin' me", LIMIT: "Everybody to the limit" };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemModal.tsx");

export default function UserSettingsDesignSystemModal() {
  const obj = { children: null };
  const obj2 = { style: closure_9().container, children: null };
  items = [metroImportDefault(components_Button_Button.Button, { onPress: openDemoModal, text: "Show Modal" }), metroImportDefault(components_Button_Button.Button, { onPress: openDemoStepModal, text: "Show Stepped Modal" }), metroImportDefault(components_Button_Button.Button, { onPress: openDemoGradientModal, text: "Show Gradient Modal" }), metroImportDefault(components_Button_Button.Button, { onPress: openDemoGradientStepModal, text: "Show Gradient Stepped Modal" })];
  obj2.children = items;
  obj.children = React5(hasOwnProperty, obj2);
  return metroImportDefault(timestampProducer, obj);
};