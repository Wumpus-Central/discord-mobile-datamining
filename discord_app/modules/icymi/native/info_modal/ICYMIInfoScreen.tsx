// discord_app/modules/icymi/native/info_modal/ICYMIInfoScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4640);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1 },
  closeIcon: null,
  closeIconColor: null,
  bgImage: null,
  headerImg: null,
  flashIcon: null,
  subContainer: null,
  header: null,
  headerText: null,
  body: null,
  divider: null,
  infoRow: null,
  infoIcon: null,
  infoText: null,
  hint: null,
  footer: null,
};
let size = {
  position: "absolute",
  justifyContent: "center",
  left: 12,
  width: 24,
  height: fn(5770).NAV_BAR_HEIGHT,
  zIndex: 2,
};
obj2.closeIcon = size;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1 };
obj2.closeIconColor = { backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.bgImage = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  aspectRatio: 1.2515923566878981,
  overflow: "visible",
};
obj2.headerImg = { position: "absolute", top: 16, width: 361, height: 240 };
obj2.flashIcon = { marginBottom: 32, marginTop: 132 };
obj2.subContainer = { flex: 1, paddingHorizontal: 16, paddingTop: 16 };
obj2.header = { alignItems: "center", paddingHorizontal: 12 };
obj2.headerText = { textAlign: "center", marginTop: 8 };
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.body = {
  gap: 16,
  padding: 16,
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  marginTop: 40,
};
let obj5 = {
  gap: 16,
  padding: 16,
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  marginTop: 40,
};
obj2.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 48 };
obj2.infoRow = { display: "flex", flexDirection: "row", alignItems: "center", overflow: "hidden", gap: 16 };
let obj6 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 48 };
obj2.infoIcon = {
  padding: 8,
  backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND,
  borderRadius: nativeDefault.radii.round,
};
obj2.infoText = { flexShrink: 1 };
obj2.hint = { margin: 12 };
const rect = {
  position: "absolute",
  bottom: 0,
  left: nativeDefault.space.PX_24,
  right: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_8,
};
obj2.footer = rect;
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoScreen.tsx");

export default function ICYMIInfoScreen(extendedOnboarding) {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  let navigation;
  const tmp = closure_12();
  ({ top, bottom } = navigation(1612)());
  const tmp4 = navigation(1612)();
  const tmp5 = navigation(4574)();
  navigation = extendedOnboarding(1484).useNavigation();
  const items = [extendedOnboarding, navigation];
  const items1 = [navigation];
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else if (extendedOnboarding) {
              const ICYMIAnalytics = tmp2(8508).ICYMIAnalytics;
              const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "overview" });
              dependencyMap(true);
              v1 = 1;
              dependencyMap = 1;
              const obj5 = { value: tmp2(16629).maybeFetchGuildDiscoveryCategories(), done: false };
              return obj5;
            } else {
              v1(4843).pop();
              dependencyMap = 3;
              const arr = v1(4843);
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
          const obj = { value, done: true };
          return obj;
        } catch (tmp18) {
          dependencyMap = tmp;
          throw tmp18;
        }
      }
    }),
    items,
  );
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      header() {
        return null;
      },
    });
  }, items1);
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp10[1];
  const obj2 = { style: null, children: null };
  const items2 = [{ marginTop: top }, tmp.closeIcon];
  obj2.style = items2;
  let obj3 = {
    source: navigation(7992),
    onPress() {
      return navigation(4843).pop();
    },
    accessibilityLabel: null,
    color: null,
  };
  const intl = extendedOnboarding(1115).intl;
  obj3.accessibilityLabel = intl.string(extendedOnboarding(1115).t.cpT0Cq);
  obj3.color = tmp.closeIconColor.backgroundColor;
  obj2.children = closure_9(extendedOnboarding(7984).HeaderIconButton, obj3);
  const items3 = [closure_9(closure_6, obj2), ,];
  let obj4 = { style: null, children: null };
  const items4 = [tmp.container, { marginBottom: bottom }];
  obj4.style = items4;
  let obj5 = { source: null, style: null };
  const obj6 = { uri: null };
  let obj = extendedOnboarding(1484);
  obj6.uri = navigation(16631);
  obj5.source = obj6;
  obj5.style = tmp.bgImage;
  const items5 = [closure_9(navigation(5675), obj5)];
  const obj7 = { style: null, children: null };
  const items6 = [tmp.subContainer];
  const tmp16 = navigation(5675);
  items6[1] = { marginTop: top + navigation(576).space.PX_12 };
  obj7.style = items6;
  const obj9 = { style: tmp.header, children: null };
  const obj8 = { marginTop: top + navigation(576).space.PX_12 };
  if (tmp5 === ThemeTypes.LIGHT) {
    let tmp2Result = tmp2(16632);
  } else {
    tmp2Result = tmp2(16633);
  }
  const items7 = [closure_9(navigation(5675), { source: { uri: tmp2Result }, style: tmp.headerImg }), , ,];
  const obj11 = { source: null, style: null };
  const obj10 = { source: { uri: tmp2Result }, style: tmp.headerImg };
  const tmp17 = navigation(5675);
  obj11.source = navigation(16634);
  obj11.style = tmp.flashIcon;
  items7[1] = closure_9(navigation(5675), obj11);
  const obj12 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp6(1115).intl;
  obj12.children = intl2.string(extendedOnboarding(1115).t["jnXV/V"]);
  items7[2] = closure_9(extendedOnboarding(4636).Text, obj12);
  const obj13 = { variant: "text-md/normal", color: "text-default", style: tmp.headerText, children: null };
  const intl3 = tmp6(1115).intl;
  obj13.children = intl3.string(extendedOnboarding(1115).t["9SjvoK"]);
  items7[3] = closure_9(extendedOnboarding(4636).Text, obj13);
  obj9.children = items7;
  const items8 = [closure_10(closure_6, obj9)];
  const obj14 = { children: null };
  const obj15 = { style: tmp.body, children: null };
  const obj16 = { style: tmp.infoRow, children: null };
  const tmp2Result2 = navigation(5675);
  const items9 = [
    closure_9(closure_6, {
      style: tmp.infoIcon,
      children: closure_9(extendedOnboarding(9440).ServerIcon, { size: "sm", color: "interactive-text-active" }),
    }),
  ];
  const obj18 = {
    variant: "text-md/medium",
    color: "mobile-text-heading-primary",
    style: tmp.infoText,
    children: null,
  };
  const intl4 = tmp6(1115).intl;
  obj18.children = intl4.string(extendedOnboarding(1115).t.knxfqR);
  items9[1] = closure_9(extendedOnboarding(4636).Text, obj18);
  obj16.children = items9;
  const items10 = [closure_10(closure_6, obj16), closure_9(closure_6, { style: tmp.divider }), , ,];
  const obj20 = { style: tmp.infoRow, children: null };
  const obj17 = {
    style: tmp.infoIcon,
    children: closure_9(extendedOnboarding(9440).ServerIcon, { size: "sm", color: "interactive-text-active" }),
  };
  const obj19 = { style: tmp.divider };
  const items11 = [
    closure_9(closure_6, {
      style: tmp.infoIcon,
      children: closure_9(extendedOnboarding(13164).NewUserIcon, { size: "sm", color: "interactive-text-active" }),
    }),
  ];
  const obj22 = {
    variant: "text-md/medium",
    color: "mobile-text-heading-primary",
    style: tmp.infoText,
    children: null,
  };
  const intl5 = tmp6(1115).intl;
  obj22.children = intl5.string(extendedOnboarding(1115).t.BnUXZi);
  items11[1] = closure_9(extendedOnboarding(4636).Text, obj22);
  obj20.children = items11;
  items10[2] = closure_10(closure_6, obj20);
  items10[3] = closure_9(closure_6, { style: tmp.divider });
  const obj24 = { style: tmp.infoRow, children: null };
  const obj21 = {
    style: tmp.infoIcon,
    children: closure_9(extendedOnboarding(13164).NewUserIcon, { size: "sm", color: "interactive-text-active" }),
  };
  const obj23 = { style: tmp.divider };
  const items12 = [
    closure_9(closure_6, {
      style: tmp.infoIcon,
      children: closure_9(extendedOnboarding(4599).CircleCheckIcon, { size: "sm", color: "interactive-text-active" }),
    }),
  ];
  const obj26 = {
    variant: "text-md/medium",
    color: "mobile-text-heading-primary",
    style: tmp.infoText,
    children: null,
  };
  const intl6 = tmp6(1115).intl;
  obj26.children = intl6.string(extendedOnboarding(1115).t.itb1rh);
  items12[1] = closure_9(extendedOnboarding(4636).Text, obj26);
  obj24.children = items12;
  items10[4] = closure_10(closure_6, obj24);
  obj15.children = items10;
  const items13 = [closure_10(closure_6, obj15)];
  const obj27 = { variant: "text-xs/medium", color: "text-muted", style: tmp.hint, children: null };
  const intl7 = tmp6(1115).intl;
  obj27.children = intl7.format(extendedOnboarding(1115).t["jVS/hc"], {
    feedbackHook(children, arg1) {
      return closure_1_9(
        extendedOnboarding(4636).Text,
        {
          variant: "text-xs/medium",
          color: "text-link",
          onPress() {
            return navigation(paths[27]).openLazy(
              extendedOnboarding(paths[29])(paths[28], paths.paths),
              "ICYMIFeedbackSheet",
              {},
            );
          },
          children,
        },
        arg1,
      );
    },
  });
  items13[1] = closure_9(extendedOnboarding(4636).Text, obj27);
  obj14.children = items13;
  items8[1] = closure_10(closure_6, obj14);
  obj7.children = items8;
  items5[1] = closure_10(closure_6, obj7);
  obj4.children = items5;
  items3[1] = closure_10(closure_7, obj4);
  const obj29 = { style: null, children: null };
  const items14 = [{ marginBottom: bottom }, tmp.footer];
  obj29.style = items14;
  const obj30 = { size: "lg", loading: tmp10[0], text: null, onPress: null };
  const intl8 = tmp6(1115).intl;
  const string = intl8.string;
  const t = tmp6(1115).t;
  if (extendedOnboarding) {
    let stringResult = string(t.LhlgY9);
  } else {
    stringResult = string(t["+IrDzN"]);
  }
  const obj31 = { children: null };
  obj30.text = stringResult;
  obj30.onPress = callback;
  obj29.children = closure_9(extendedOnboarding(5062).Button, obj30);
  items3[2] = closure_9(closure_6, obj29);
  obj31.children = items3;
  return closure_10(closure_11, obj31);
}
