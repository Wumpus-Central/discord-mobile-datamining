// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemNavigator.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import ButtonGroup from "../../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _mod7074 from "../../../../../_runtime/metro/07074__.js";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import ModalScreen from "../../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent from "../../../../design/components/Modal/native/ModalContent.native.tsx";
import ModalFooter from "../../../../design/components/Modal/native/ModalFooter.native.tsx";
import ModalDisclaimer from "../../../../design/components/Modal/native/ModalDisclaimer.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function DemoScreen(arg0) {
  ({ title, description, children } = arg0);
  const tmp = closure_9();
  const obj = { children: null };
  items = [
    metroImportDefault(Text_Text.Heading, { variant: "heading-xl/semibold", style: tmp.description, children: title }),
    metroImportDefault(Text_Text.Text, {
      variant: "body-md/normal",
      color: "text-subtle",
      style: tmp.description,
      children: description,
    }),
    children,
  ];
  obj.children = items;
  return React5(ModalContent.ModalContent, obj);
}
function HomeScreen(navigation) {
  navigation = navigation.navigation;
  const obj = { children: null };
  const obj2 = {
    title: "Header variants",
    description: "Each row opens a screen with a different header setup.",
    children: null,
  };
  const obj3 = { style: closure_9().fullWidth, children: null };
  const tmp = closure_9();
  obj3.children = closure_7(navigation(7129).TableRowGroup, {
    hasIcons: false,
    children: items.map((screen) => {
      screen = screen.screen;
      return closure_1_7(
        navigation(dependencyMap[10]).TableRow,
        {
          label: screen,
          subLabel: screen.description,
          arrow: true,
          onPress() {
            return navigation.push(screen);
          },
        },
        screen,
      );
    }),
  });
  obj2.children = closure_7(closure_6, obj3);
  obj.children = closure_7(DemoScreen, obj2);
  return closure_7(navigation(8045).ModalScreen, obj);
}
function SimpleScreen(arg0) {
  ({ title, description } = arg0);
  return metroImportDefault(ModalScreen.ModalScreen, {
    children: metroImportDefault(DemoScreen, { title, description }),
  });
}
function FullscreenScreen() {
  const tmp = closure_9();
  const headerHeight = _mod7074.useHeaderHeight();
  const obj2 = { children: null };
  const obj3 = {
    style: null,
    children: metroImportDefault(DemoScreen, {
      title: obj5.FULLSCREEN,
      description: "Fullscreen screens draw under a transparent header, place their own content and skip the gradient.",
    }),
  };
  items = [tmp.fill, { paddingTop: headerHeight }];
  obj3.style = items;
  obj2.children = metroImportDefault(timestampProducer, obj3);
  return metroImportDefault(ModalScreen.ModalScreen, obj2);
}
function FooterScreen(navigation) {
  navigation = navigation.navigation;
  const obj = { children: null };
  items = [
    metroImportDefault(DemoScreen, {
      title: "Footer",
      description: "A divider sits above the footer, and the buttons sit just above the home indicator.",
    }),
  ];
  const obj2 = { children: null };
  items1 = [
    metroImportDefault(ModalDisclaimer.ModalDisclaimer, { children: "This can be changed anytime in Settings." }),
  ];
  const obj3 = { size: "lg", style: closure_9().footerButtonGroup, children: null };
  const items2 = [
    metroImportDefault(components_Button_Button.Button, {
      size: "lg",
      text: "Continue",
      onPress() {
        return navigation.goBack();
      },
    }),
    metroImportDefault(components_Button_Button.Button, {
      size: "lg",
      variant: "secondary",
      text: "Cancel",
      onPress() {
        return navigation.goBack();
      },
    }),
  ];
  obj3.children = items2;
  items1[1] = React5(ButtonGroup.ButtonGroup, obj3);
  obj2.children = items1;
  items[1] = React5(ModalFooter.ModalFooter, obj2);
  obj.children = items;
  return React5(ModalScreen.ModalScreen, obj);
}
function LongContentScreen() {
  const memo = noop.useMemo(() => Array.from({ length: 30 }, (arg0, arg1) => "Row " + arg1 + 1), []);
  const obj = { children: null };
  const obj2 = {
    title: "Long content",
    description: "Scroll to see how content passes under the header.",
    children: null,
  };
  const obj3 = { style: closure_9().fullWidth, children: null };
  const tmp = closure_9();
  obj3.children = metroImportDefault(TableRowGroup.TableRowGroup, {
    hasIcons: false,
    children: memo.map((label) => closure_1_7(TableRow.TableRow, { label }, label)),
  });
  obj2.children = metroImportDefault(timestampProducer, obj3);
  obj.children = metroImportDefault(DemoScreen, obj2);
  return metroImportDefault(ModalScreen.ModalScreen, obj);
}
function DemoNavigator(arg0) {
  ({ gradient, headerTitleAlign } = arg0);
  const navigatorScreens = Navigator.useNavigatorScreens(() => {
    const obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      headerTitle() {
        return closure_1_7(closure_1_0(7067).NavigatorHeader, { title: constants.HOME });
      },
      render(arg0, navigation) {
        return closure_1_7(closure_1_14, { navigation });
      },
    };
    obj[constants.HOME] = obj2;
    const obj4 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj4.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7067).NavigatorHeader, {
        title: constants.SUBTITLE,
        subtitle: "A short supporting line",
      });
    };
    obj4.render = function render() {
      return closure_1_7(closure_1_15, {
        title: constants.SUBTITLE,
        description: "The subtitle sits under the title.",
      });
    };
    obj[constants.SUBTITLE] = obj4;
    const obj7 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj7.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7067).NavigatorHeader, {
        title: constants.ICON,
        icon: closure_1_7(closure_1_0(12448).SparklesIcon, { size: "sm" }),
      });
    };
    obj7.render = function render() {
      return closure_1_7(closure_1_15, { title: constants.ICON, description: "The icon sits before the title." });
    };
    obj[constants.ICON] = obj7;
    const obj10 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj10.headerLeft = NavigatorHeader.getHeaderTextButton("Cancel", ModalActionCreatorsDefault.pop);
    obj10.headerRight = function headerRight() {
      return closure_1_7(closure_1_0(7633).HeaderActionButton, { text: "Save", onPress: closure_1_1(6801).pop });
    };
    obj10.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7067).NavigatorHeader, { title: constants.TEXT_BUTTONS });
    };
    obj10.render = function render() {
      return closure_1_7(closure_1_15, {
        title: constants.TEXT_BUTTONS,
        description: "Text buttons replace the back and close icons. Both close the demo.",
      });
    };
    obj[constants.TEXT_BUTTONS] = obj10;
    const obj12 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj12.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj12.headerRight = function headerRight() {
      return closure_1_7(closure_1_0(7067).HeaderSubmittingIndicator, {});
    };
    obj12.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7067).NavigatorHeader, { title: constants.SUBMITTING });
    };
    obj12.render = function render() {
      return closure_1_7(closure_1_15, {
        title: constants.SUBMITTING,
        description: "Shown on the right while a request is running.",
      });
    };
    obj[constants.SUBMITTING] = obj12;
    const obj14 = { headerLeft: null, headerTitle: null, render: null };
    obj14.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj14.headerTitle = NavigatorHeader.getHeaderNoTitle();
    obj14.render = function render() {
      return closure_1_7(closure_1_15, {
        title: constants.NO_TITLE,
        description: "The header shows only a back button.",
      });
    };
    obj[constants.NO_TITLE] = obj14;
    const obj17 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj17.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj17.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj17.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7067).NavigatorHeader, { title: constants.FOOTER });
    };
    obj17.render = function render(arg0, navigation) {
      return closure_1_7(closure_1_17, { navigation });
    };
    obj[constants.FOOTER] = obj17;
    const obj20 = { headerLeft: null, headerRight: null, headerTitle: null, render: null };
    obj20.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj20.headerRight = NavigatorHeader.getHeaderCloseButton(ModalActionCreatorsDefault.pop);
    obj20.headerTitle = function headerTitle() {
      return closure_1_7(closure_1_0(7067).NavigatorHeader, { title: constants.LONG_CONTENT });
    };
    obj20.render = function render() {
      return closure_1_7(closure_1_18, {});
    };
    obj[constants.LONG_CONTENT] = obj20;
    const obj23 = { fullscreen: true, headerLeft: null, headerTitle: null, render: null };
    obj23.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj23.headerTitle = NavigatorHeader.getHeaderNoTitle();
    obj23.render = function render() {
      return closure_1_7(closure_1_16, {});
    };
    obj[constants.FULLSCREEN] = obj23;
    return obj;
  }, []);
  return metroImportDefault(Navigator.Navigator, {
    screens: navigatorScreens,
    initialRouteName: obj5.HOME,
    gradientColor: gradient,
    headerTitleAlign,
  });
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5142);
let obj2 = {
  container: { padding: nativeDefault.space.PX_16 },
  fullWidth: { width: "100%" },
  fill: { flex: 1 },
  footerButtonGroup: { paddingVertical: 0 },
  description: null,
};
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.description = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(obj2);
let obj5 = {
  HOME: "Navigator",
  SUBTITLE: "Title and subtitle",
  ICON: "Title and icon",
  TEXT_BUTTONS: "Text buttons",
  SUBMITTING: "Submitting",
  NO_TITLE: "No title",
  FOOTER: "Footer",
  LONG_CONTENT: "Long content",
  FULLSCREEN: "Fullscreen",
};
let items = [
  { screen: obj5.SUBTITLE, description: "NavigatorHeader with a subtitle" },
  { screen: obj5.ICON, description: "NavigatorHeader with an icon" },
  { screen: obj5.TEXT_BUTTONS, description: "Text buttons on both sides" },
  { screen: obj5.SUBMITTING, description: "Loading indicator on the right" },
  { screen: obj5.NO_TITLE, description: "Back button only" },
  { screen: obj5.FOOTER, description: "ModalFooter with a ButtonGroup" },
  { screen: obj5.LONG_CONTENT, description: "Content scrolls under the header" },
  { screen: obj5.FULLSCREEN, description: "Fullscreen screen, never shows the gradient" },
];
let items1 = [
  { label: "None", value: "none" },
  { label: "Purple", value: "purple" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
  { label: "Pink", value: "pink" },
  { label: "Nitro pink", value: "nitro-pink" },
  { label: "Nitro green", value: "nitro-green" },
];
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemNavigator.tsx",
);

export default function UserSettingsDesignSystemNavigator() {
  let tmp2 = _slicedToArray(noop.useState("none"), 2);
  value = tmp2[0];
  const tmp4 = _slicedToArray(noop.useState("center"), 2);
  const first1 = tmp4[0];
  let obj = { children: null };
  const obj2 = { spacing: first1(575).space.PX_16, style: closure_9().container, children: null };
  const tmp = closure_9();
  items = [
    closure_7(value(7127).TableRadioGroup, {
      title: "Gradient",
      value,
      onChange: tmp2[1],
      hasIcons: false,
      children: items1.map((label) => {
        value = label.value;
        return closure_1_7(first(dependencyMap[23]).TableRadioRow, { label: label.label, value }, value);
      }),
    }),
    ,
  ];
  const obj4 = { title: "Title alignment", value: first1, onChange: tmp4[1], hasIcons: false, children: null };
  items1 = [
    closure_7(value(7130).TableRadioRow, { label: "Center", value: "center" }),
    closure_7(value(7130).TableRadioRow, { label: "Left", value: "left" }),
  ];
  obj4.children = items1;
  items[1] = closure_8(value(7127).TableRadioGroup, obj4);
  items[2] = closure_7(value(5760).Button, {
    onPress: function openNavigator() {
      let tmp2;
      if ("none" !== first) {
        tmp2 = first;
      }
      ModalActionCreatorsDefault.push(DemoNavigator, { gradient: tmp2, headerTitleAlign: first1 });
      const obj = { gradient: tmp2, headerTitleAlign: first1 };
    },
    text: "Show Navigator",
  });
  obj2.children = items;
  obj.children = closure_8(value(6161).Stack, obj2);
  return closure_7(closure_5, obj);
}
