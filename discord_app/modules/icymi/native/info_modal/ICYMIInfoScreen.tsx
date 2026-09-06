// === Module 16468: ICYMIInfoScreen ===

// Module 16468 (ICYMIInfoScreen)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
fn(4560);
let createStyles = { container: null, closeIcon: null, closeIconColor: null, bgImage: null, headerImg: null, flashIcon: null, subContainer: null, header: null, headerText: null, body: null, divider: null, infoRow: null, infoIcon: null, infoText: null, hint: null, footer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1 };
createStyles.container = createStyles;
let size = { position: "absolute", justifyContent: "center", left: 12, width: 24, height: fn(5682).NAV_BAR_HEIGHT, zIndex: 2 };
createStyles.closeIcon = size;
createStyles.closeIconColor = { backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.bgImage = { position: "absolute", top: 0, left: 0, width: "100%", aspectRatio: 1.2515923566878981, overflow: "visible" };
createStyles.headerImg = { position: "absolute", top: 16, width: 361, height: 240 };
createStyles.flashIcon = { marginBottom: 32, marginTop: 132 };
createStyles.subContainer = { flex: 1, paddingHorizontal: 16, paddingTop: 16 };
createStyles.header = { alignItems: "center", paddingHorizontal: 12 };
createStyles.headerText = { textAlign: "center", marginTop: 8 };
let obj1 = { backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.body = { gap: 16, padding: 16, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, marginTop: 40 };
let obj2 = { gap: 16, padding: 16, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, marginTop: 40 };
createStyles.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 48 };
createStyles.infoRow = { display: "flex", flexDirection: "row", alignItems: "center", overflow: "hidden", gap: 16 };
let obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 48 };
createStyles.infoIcon = { padding: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.round };
createStyles.infoText = { flexShrink: 1 };
createStyles.hint = { margin: 12 };
const rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8 };
createStyles.footer = rect;
let closure_12 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoScreen.tsx");

export default function ICYMIInfoScreen(extendedOnboarding) {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  let navigation;
  const tmp = closure_12();
  ({ top, bottom } = navigation(1611)());
  const tmp4 = navigation(1611)();
  let obj = extendedOnboarding(1483);
  navigation = obj.useNavigation();
  const items = [extendedOnboarding, navigation];
  const items1 = [navigation];
  const callback = noop.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else if (extendedOnboarding) {
            const ICYMIAnalytics = tmp2(8359).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "overview" });
            dependencyMap(true);
            let obj1 = tmp2(16469);
            v1 = 1;
            dependencyMap = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.maybeFetchGuildDiscoveryCategories();
            return obj1;
          } else {
            let arr = v1(4763);
            arr = arr.pop();
            dependencyMap = 3;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          const _setTimeout = setTimeout;
          let timerId = setTimeout(() => {
            navigation.navigate("topics_cloud");
            const timerId = setTimeout(() => closure_1_2(false), 500);
          }, 100);
        }
        dependencyMap = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp18) {
        dependencyMap = tmp;
        throw tmp18;
      }
    }
  }), items);
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      header() {
        return null;
      }
    });
  }, items1);
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp10[1];
  obj = { style: null, children: null };
  const items2 = [{ marginTop: top }, tmp.closeIcon];
  obj.style = items2;
  obj = {
    source: navigation(7871),
    onPress() {
      return navigation(4763).pop();
    },
    accessibilityLabel: null,
    color: null
  };
  const intl = extendedOnboarding(1114).intl;
  obj.accessibilityLabel = intl.string(extendedOnboarding(1114).t.cpT0Cq);
  obj.color = tmp.closeIconColor.backgroundColor;
  obj.children = closure_9(extendedOnboarding(7863).HeaderIconButton, obj);
  const items3 = [closure_9(closure_6, obj), , ];
  let obj1 = { style: null, children: null };
  const items4 = [tmp.container, { marginBottom: bottom }];
  obj1.style = items4;
  const obj2 = { source: null, style: null };
  const obj3 = { uri: null };
  const tmp12 = closure_11;
  const tmp15 = closure_7;
  const tmp5 = navigation(4495)();
  obj3.uri = navigation(16471);
  obj2.source = obj3;
  obj2.style = tmp.bgImage;
  const items5 = [closure_9(navigation(5587), obj2), ];
  const obj4 = { style: null, children: null };
  const items6 = [tmp.subContainer, ];
  const tmp16 = navigation(5587);
  items6[1] = { marginTop: top + navigation(576).space.PX_12 };
  obj4.style = items6;
  const obj6 = { style: tmp.header, children: null };
  const obj5 = { marginTop: top + navigation(576).space.PX_12 };
  if (tmp5 === ThemeTypes.LIGHT) {
    let tmp2Result = tmp2(16472);
  } else {
    tmp2Result = tmp2(16473);
  }
  const items7 = [closure_9(navigation(5587), { source: { uri: tmp2Result }, style: tmp.headerImg }), , , ];
  const obj8 = { source: null, style: null };
  tmp2Result = tmp2(5587);
  obj8.source = navigation(16474);
  obj8.style = tmp.flashIcon;
  items7[1] = closure_9(tmp2Result, obj8);
  const obj9 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp6(1114).intl;
  obj9.children = intl2.string(extendedOnboarding(1114).t["jnXV/V"]);
  items7[2] = closure_9(extendedOnboarding(4556).Text, obj9);
  const obj10 = { variant: "text-md/normal", color: "text-default", style: tmp.headerText, children: null };
  const intl3 = tmp6(1114).intl;
  obj10.children = intl3.string(extendedOnboarding(1114).t["9SjvoK"]);
  items7[3] = closure_9(extendedOnboarding(4556).Text, obj10);
  obj6.children = items7;
  const items8 = [closure_10(closure_6, obj6), ];
  const obj11 = { children: null };
  const obj12 = { style: tmp.body, children: null };
  const obj13 = { style: tmp.infoRow, children: null };
  const obj7 = { source: { uri: tmp2Result }, style: tmp.headerImg };
  const tmp17 = navigation(5587);
  const items9 = [closure_9(closure_6, { style: tmp.infoIcon, children: closure_9(extendedOnboarding(9286).ServerIcon, { size: "sm", color: "interactive-text-active" }) }), ];
  const obj15 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText, children: null };
  const intl4 = tmp6(1114).intl;
  obj15.children = intl4.string(extendedOnboarding(1114).t.knxfqR);
  items9[1] = closure_9(extendedOnboarding(4556).Text, obj15);
  obj13.children = items9;
  const items10 = [closure_10(closure_6, obj13), closure_9(closure_6, { style: tmp.divider }), , , ];
  const obj17 = { style: tmp.infoRow, children: null };
  const obj14 = { style: tmp.infoIcon, children: closure_9(extendedOnboarding(9286).ServerIcon, { size: "sm", color: "interactive-text-active" }) };
  const obj16 = { style: tmp.divider };
  const items11 = [closure_9(closure_6, { style: tmp.infoIcon, children: closure_9(extendedOnboarding(13009).NewUserIcon, { size: "sm", color: "interactive-text-active" }) }), ];
  const obj19 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText, children: null };
  const intl5 = tmp6(1114).intl;
  obj19.children = intl5.string(extendedOnboarding(1114).t.BnUXZi);
  items11[1] = closure_9(extendedOnboarding(4556).Text, obj19);
  obj17.children = items11;
  items10[2] = closure_10(closure_6, obj17);
  items10[3] = closure_9(closure_6, { style: tmp.divider });
  const obj21 = { style: tmp.infoRow, children: null };
  const obj18 = { style: tmp.infoIcon, children: closure_9(extendedOnboarding(13009).NewUserIcon, { size: "sm", color: "interactive-text-active" }) };
  const obj20 = { style: tmp.divider };
  const items12 = [closure_9(closure_6, { style: tmp.infoIcon, children: closure_9(extendedOnboarding(4520).CircleCheckIcon, { size: "sm", color: "interactive-text-active" }) }), ];
  const obj23 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText, children: null };
  const intl6 = tmp6(1114).intl;
  obj23.children = intl6.string(extendedOnboarding(1114).t.itb1rh);
  items12[1] = closure_9(extendedOnboarding(4556).Text, obj23);
  obj21.children = items12;
  items10[4] = closure_10(closure_6, obj21);
  obj12.children = items10;
  const items13 = [closure_10(closure_6, obj12), ];
  const obj24 = { variant: "text-xs/medium", color: "text-muted", style: tmp.hint, children: null };
  const intl7 = tmp6(1114).intl;
  obj24.children = intl7.format(extendedOnboarding(1114).t["jVS/hc"], {
    feedbackHook(children, arg1) {
      return closure_1_9(extendedOnboarding(4556).Text, {
        variant: "text-xs/medium",
        color: "text-link",
        onPress() {
          return navigation(paths[27]).openLazy(extendedOnboarding(paths[29])(paths[28], paths.paths), "ICYMIFeedbackSheet", {});
        },
        children
      }, arg1);
    }
  });
  items13[1] = closure_9(extendedOnboarding(4556).Text, obj24);
  obj11.children = items13;
  items8[1] = closure_10(closure_6, obj11);
  obj4.children = items8;
  items5[1] = closure_10(closure_6, obj4);
  obj1.children = items5;
  items3[1] = closure_10(tmp15, obj1);
  const obj26 = { style: null, children: null };
  const items14 = [{ marginBottom: bottom }, tmp.footer];
  obj26.style = items14;
  const obj27 = { size: "lg", loading: tmp10[0], text: null, onPress: null };
  const intl8 = tmp6(1114).intl;
  const string = intl8.string;
  const t = tmp6(1114).t;
  if (extendedOnboarding) {
    let stringResult = string(t.LhlgY9);
  } else {
    stringResult = string(t["+IrDzN"]);
  }
  const obj28 = { children: null };
  obj27.text = stringResult;
  obj27.onPress = callback;
  obj26.children = closure_9(extendedOnboarding(4975).Button, obj27);
  items3[2] = closure_9(closure_6, obj26);
  obj28.children = items3;
  return closure_10(tmp12, obj28);
};