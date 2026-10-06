// === Module 16452: ICYMIInfoScreen ===

// Module 16452 (ICYMIInfoScreen)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size_mod from "module_2" /* 2 */;

let c2, dependencyMap, navigation;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let size;
let unpackModuleId;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, closeIcon: size, closeIconColor: obj3, bgImage: { position: "absolute", top: 0, left: 0, width: "100%", aspectRatio: 1.2515923566878981, overflow: "visible" }, headerImg: { position: "absolute", top: 16, width: 361, height: 240 }, flashIcon: { marginBottom: 32, marginTop: 132 }, subContainer: { flex: 1, paddingHorizontal: 16, paddingTop: 16 }, header: { alignItems: "center", paddingHorizontal: 12 }, headerText: { textAlign: "center", marginTop: 8 }, body: obj4, divider: obj5, infoRow: { display: "flex", flexDirection: "row", alignItems: "center", overflow: "hidden", gap: 16 }, infoIcon: obj6, infoText: { flexShrink: 1 }, hint: { margin: 12 }, footer: rect };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1 };
createStyles = createStyles.createStyles;
size = { position: "absolute", justifyContent: "center", left: 12, width: 24, height: NavigatorConstants.NAV_BAR_HEIGHT, zIndex: 2 };
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj4 = { gap: 16, padding: 16, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, marginTop: 40 };
obj5 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 48 };
obj6 = { padding: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.round };
rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8 };
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoScreen.tsx");

export default function ICYMIInfoScreen(extendedOnboarding) {
  let Button;
  let HeaderIconButton;
  let bottom;
  let closure_2;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj28;
  let obj3;
  let obj30;
  let obj6;
  let stringResult;
  let tmp2Result;
  let top;
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  navigation = undefined;
  dependencyMap = undefined;
  const tmp = closure_12();
  const tmp3 = dependencyMap;
  ({ top, bottom } = navigation(1618)());
  const tmp4 = navigation(1618)();
  const tmp5 = navigation(4797)();
  let obj = extendedOnboarding(1490);
  navigation = obj.useNavigation();
  const items = [extendedOnboarding, navigation];
  const items1 = [navigation];
  const callback = react.useCallback(_asyncToGenerator(async () => {
    let closure_0;
    let v1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (extendedOnboarding) {
            const ICYMIAnalytics = tmp(c2[12]).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "overview" });
            closure_2(true);
            v1 = 1;
            const obj2 = tmp(c2[13]);
            c2 = 1;
            const obj5 = { value: obj2.maybeFetchGuildDiscoveryCategories(), done: false };
            return obj5;
          } else {
            const arr = v1(c2[14]);
            arr.pop();
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const _setTimeout = setTimeout;
          let timerId = setTimeout(() => {
            navigation.navigate("topics_cloud");
            const timerId = setTimeout(() => closure_1_2(false), 500);
          }, 100);
        }
        c2 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp17) {
        c2 = 3;
        throw tmp17;
      }
    }
  }), items);
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = {
      header() {
        return null;
      }
    };
    navigation.setOptions(obj);
  }, items1);
  [first, dependencyMap] = react.useState(false);
  let obj2 = { style: items2, children: closure_9(HeaderIconButton, obj3) };
  items2 = [{ marginTop: top }, tmp.closeIcon];
  obj3 = {
    source: navigation(7517),
    onPress() {
      const arr = navigation(closure_2[14]);
      return arr.pop();
    },
    accessibilityLabel: intl.string(extendedOnboarding(1126).t.cpT0Cq),
    color: tmp.closeIconColor.backgroundColor
  };
  HeaderIconButton = extendedOnboarding(7509).HeaderIconButton;
  intl = extendedOnboarding(1126).intl;
  const items3 = [closure_9(closure_6, obj2), , ];
  let obj4 = { style: items4, children: items5 };
  items4 = [tmp.container, { marginBottom: bottom }];
  let obj5 = { source: obj6, style: tmp.bgImage };
  obj6 = { uri: navigation(16455) };
  const tmp17 = navigation(5981);
  items5 = [closure_9(tmp17, obj5), ];
  const obj7 = { style: items6, children: items8 };
  items6 = [tmp.subContainer, { marginTop: top + navigation(587).space.PX_12 }];
  const obj9 = { style: tmp.header, children: items7 };
  ({ marginTop: top + navigation(587).space.PX_12 });
  const tmp18 = navigation(5981);
  if (tmp5 === ThemeTypes.LIGHT) {
    tmp2Result = tmp2(16456);
  } else {
    tmp2Result = tmp2(16457);
  }
  items7 = [, , , ];
  const obj10 = { source: { uri: tmp2Result }, style: tmp.headerImg };
  items7[0] = closure_9(tmp18, obj10);
  const obj11 = { source: navigation(16458), style: tmp.flashIcon };
  const tmp2Result2 = navigation(5981);
  items7[1] = closure_9(tmp2Result2, obj11);
  const obj12 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl2.string(extendedOnboarding(1126).t["jnXV/V"]) };
  const Text = tmp6(4892).Text;
  intl2 = tmp6(1126).intl;
  items7[2] = closure_9(Text, obj12);
  const obj13 = { variant: "text-md/normal", color: "text-default", style: tmp.headerText, children: intl3.string(extendedOnboarding(1126).t["9SjvoK"]) };
  const Text2 = tmp6(4892).Text;
  intl3 = tmp6(1126).intl;
  items7[3] = closure_9(Text2, obj13);
  items8 = [closure_10(closure_6, obj9), ];
  const obj16 = { style: tmp.infoRow, children: items9 };
  items9 = [, ];
  const obj14 = { children: items13 };
  const obj15 = { style: tmp.body, children: items10 };
  const obj17 = { style: tmp.infoIcon, children: closure_9(extendedOnboarding(8823).ServerIcon, { size: "sm", color: "interactive-text-active" }) };
  items9[0] = closure_9(closure_6, obj17);
  const obj18 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText, children: intl4.string(extendedOnboarding(1126).t.knxfqR) };
  const Text3 = tmp6(4892).Text;
  intl4 = tmp6(1126).intl;
  items9[1] = closure_9(Text3, obj18);
  items10 = [closure_10(closure_6, obj16), , , , ];
  const obj19 = { style: tmp.divider };
  items10[1] = closure_9(closure_6, obj19);
  const obj20 = { style: tmp.infoRow, children: items11 };
  items11 = [, ];
  const obj21 = { style: tmp.infoIcon, children: closure_9(extendedOnboarding(12851).NewUserIcon, { size: "sm", color: "interactive-text-active" }) };
  items11[0] = closure_9(closure_6, obj21);
  const obj22 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText, children: intl5.string(extendedOnboarding(1126).t.BnUXZi) };
  const Text4 = tmp6(4892).Text;
  intl5 = tmp6(1126).intl;
  items11[1] = closure_9(Text4, obj22);
  items10[2] = closure_10(closure_6, obj20);
  const obj23 = { style: tmp.divider };
  items10[3] = closure_9(closure_6, obj23);
  const obj24 = { style: tmp.infoRow, children: items12 };
  items12 = [, ];
  const obj25 = { style: tmp.infoIcon, children: closure_9(extendedOnboarding(4798).CircleCheckIcon, { size: "sm", color: "interactive-text-active" }) };
  items12[0] = closure_9(closure_6, obj25);
  const obj26 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText, children: intl6.string(extendedOnboarding(1126).t.itb1rh) };
  const Text5 = tmp6(4892).Text;
  intl6 = tmp6(1126).intl;
  items12[1] = closure_9(Text5, obj26);
  items10[4] = closure_10(closure_6, obj24);
  items13 = [closure_10(closure_6, obj15), ];
  const obj27 = { variant: "text-xs/medium", color: "text-muted", style: tmp.hint, children: intl7.format(extendedOnboarding(1126).t["jVS/hc"], obj28) };
  const Text6 = tmp6(4892).Text;
  intl7 = tmp6(1126).intl;
  obj28 = {
    feedbackHook(children, arg1) {
      let obj = {
        variant: "text-xs/medium",
        color: "text-link",
        onPress() {
          const obj = navigation(paths[27]);
          return obj.openLazy(extendedOnboarding(paths[29])(paths[28], paths.paths), "ICYMIFeedbackSheet", {});
        },
        children
      };
      return closure_1_9(extendedOnboarding(paths[23]).Text, obj, arg1);
    }
  };
  items13[1] = closure_9(Text6, obj27);
  items8[1] = closure_10(closure_6, obj14);
  items5[1] = closure_10(closure_6, obj7);
  items3[1] = closure_10(closure_7, obj4);
  const obj29 = { style: items14, children: closure_9(Button, obj30) };
  items14 = [{ marginBottom: bottom }, tmp.footer];
  obj30 = { size: "lg", loading: first, text: stringResult, onPress: callback };
  Button = tmp6(5601).Button;
  const intl8 = tmp6(1126).intl;
  const string = intl8.string;
  const t = tmp6(1126).t;
  if (extendedOnboarding) {
    stringResult = string(t.LhlgY9);
  } else {
    stringResult = string(t["+IrDzN"]);
  }
  const obj31 = { children: items3 };
  items3[2] = closure_9(closure_6, obj29);
  return closure_10(closure_11, obj31);
};