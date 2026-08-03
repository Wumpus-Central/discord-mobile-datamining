import _slicedToArray from "_slicedToArray";
import closure_4 from "jsxProd";
import metadata from "metadata";
import get_ActivityIndicator from "getSystemLocale";
import { ThemeTypes } from "sum";
import jsxProd from "metadata";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
createCacheKey = { container: null, closeIcon: null, closeIconColor: null, bgImage: null, headerImg: null, flashIcon: null, subContainer: null, header: null, headerText: null, body: null, divider: null, infoRow: null, infoIcon: null, infoText: null, hint: null, footer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", justifyContent: "center", left: 12, width: 24, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, zIndex: 2 };
let obj1 = { position: "absolute", justifyContent: "center", left: 12, width: 24, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, zIndex: 2 };
createCacheKey[2] = { backgroundColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = { position: "absolute", top: 0, left: 0, width: "100%", aspectRatio: 1.2515923566878981, overflow: "visible" };
createCacheKey[4] = { position: "absolute", top: 16, width: 361, height: 240 };
createCacheKey[5] = { marginBottom: 32, marginTop: 132 };
createCacheKey[6] = { flex: 1, paddingHorizontal: 16, paddingTop: 16 };
createCacheKey[7] = { alignItems: "center", paddingHorizontal: 12 };
createCacheKey[8] = { textAlign: "center", marginTop: 8 };
let obj2 = { backgroundColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[9] = { gap: 16, padding: 16, backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.lg, marginTop: 40 };
let obj3 = { gap: 16, padding: 16, backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.lg, marginTop: 40 };
createCacheKey[10] = { height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginLeft: 48 };
createCacheKey[11] = { display: "flex", flexDirection: "row", alignItems: "center", overflow: "hidden", gap: 16 };
let obj4 = { height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginLeft: 48 };
createCacheKey[12] = { padding: 8, backgroundColor: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: require("Themes").radii.round };
createCacheKey[13] = { flexShrink: 1 };
createCacheKey[14] = { margin: 12 };
let obj5 = { padding: 8, backgroundColor: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: require("Themes").radii.round };
createCacheKey[15] = { position: "absolute", bottom: 0, left: require("Themes").space.PX_24, right: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj6 = { position: "absolute", bottom: 0, left: require("Themes").space.PX_24, right: require("Themes").space.PX_24, paddingBottom: require("Themes").space.PX_8 };
let result = require("noop").fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoScreen.tsx");

export default function ICYMIInfoScreen(extendedOnboarding) {
  let bottom;
  let top;
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  let navigation;
  let dependencyMap;
  const tmp = createCacheKey();
  ({ top, bottom } = navigation(1581)());
  const tmp4 = navigation(1581)();
  let obj = extendedOnboarding(1480);
  navigation = obj.useNavigation();
  const items = [extendedOnboarding, navigation];
  const items1 = [navigation];
  const callback = React.useCallback(callback2(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp2;
            if (outer1_0) {
              const ICYMIAnalytics = outer1_0(8505).ICYMIAnalytics;
              const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "overview" });
              dependencyMap(true);
              let obj1 = outer1_0(15428);
              v0 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.maybeFetchGuildDiscoveryCategories();
              return obj1;
            } else {
              let arr = v0(4461);
              arr = arr.pop();
              dependencyMap = 3;
            }
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          const _setTimeout = setTimeout;
          let timerId = setTimeout(() => {
            navigation.navigate("topics_cloud");
            const timerId = setTimeout(() => callback(false), 500);
          }, 100);
        }
        dependencyMap = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp18) {
        dependencyMap = tmp;
        throw tmp18;
      }
    }
  }), items);
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      header() {
        return null;
      }
    });
  }, items1);
  const tmp10 = callback(React.useState(false), 2);
  dependencyMap = tmp10[1];
  obj = { style: items2, children: null };
  items2 = [{ marginTop: top }, tmp.closeIcon];
  obj = { source: null, onPress: null, accessibilityLabel: null, color: null };
  obj[0] = navigation(9308);
  obj[1] = function onPress() {
    return navigation(4461).pop();
  };
  const intl = extendedOnboarding(1236).intl;
  obj[2] = intl.string(extendedOnboarding(1236).t.cpT0Cq);
  obj[3] = tmp.closeIconColor.backgroundColor;
  obj[1] = callback3(extendedOnboarding(9300).HeaderIconButton, obj);
  const items3 = [callback3(closure_6, obj), , ];
  let obj1 = { style: items4, children: null };
  items4 = [tmp.container, { marginBottom: bottom }];
  const obj2 = { source: null, style: null };
  const obj3 = { uri: null };
  const tmp12 = closure_11;
  const tmp15 = closure_7;
  const tmp5 = navigation(4191)();
  obj3[0] = navigation(15430);
  obj2[0] = obj3;
  obj2[1] = tmp.bgImage;
  const items5 = [callback3(navigation(5207), obj2), ];
  const obj4 = { style: null, children: null };
  const items6 = [tmp.subContainer, ];
  const tmp16 = navigation(5207);
  items6[1] = { marginTop: top + navigation(712).space.PX_12 };
  obj4[0] = items6;
  const obj6 = { style: tmp.header, children: null };
  const obj5 = { marginTop: top + navigation(712).space.PX_12 };
  if (tmp5 === ThemeTypes.LIGHT) {
    let tmp2Result = tmp2(15431);
  } else {
    tmp2Result = tmp2(15432);
  }
  const items7 = [callback3(navigation(5207), { source: { uri: tmp2Result }, style: tmp.headerImg }), , , ];
  const obj8 = { source: null, style: null };
  tmp2Result = tmp2(5207);
  obj8[0] = navigation(15433);
  obj8[1] = tmp.flashIcon;
  items7[1] = callback3(tmp2Result, obj8);
  const obj9 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = tmp6(1236).intl;
  obj9[2] = intl2.string(extendedOnboarding(1236).t["jnXV/V"]);
  items7[2] = callback3(extendedOnboarding(4251).Text, obj9);
  const obj10 = { variant: "text-md/normal", color: "text-default", style: tmp.headerText, children: null };
  const intl3 = tmp6(1236).intl;
  obj10[3] = intl3.string(extendedOnboarding(1236).t["9SjvoK"]);
  items7[3] = callback3(extendedOnboarding(4251).Text, obj10);
  obj6[1] = items7;
  const items8 = [closure_10(closure_6, obj6), ];
  const obj11 = { children: null };
  const obj12 = { style: tmp.body, children: null };
  const obj13 = { style: tmp.infoRow, children: null };
  const obj7 = { source: { uri: tmp2Result }, style: tmp.headerImg };
  const tmp17 = navigation(5207);
  const items9 = [callback3(closure_6, { style: tmp.infoIcon, children: callback3(extendedOnboarding(9190).ServerIcon, { size: "sm", color: "interactive-text-active" }) }), ];
  const obj15 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText, children: null };
  const intl4 = tmp6(1236).intl;
  obj15[3] = intl4.string(extendedOnboarding(1236).t.knxfqR);
  items9[1] = callback3(extendedOnboarding(4251).Text, obj15);
  obj13[1] = items9;
  const items10 = [closure_10(closure_6, obj13), callback3(closure_6, { style: tmp.divider }), , , ];
  const obj17 = { style: tmp.infoRow, children: null };
  const obj14 = { style: tmp.infoIcon, children: callback3(extendedOnboarding(9190).ServerIcon, { size: "sm", color: "interactive-text-active" }) };
  const obj16 = { style: tmp.divider };
  const items11 = [callback3(closure_6, { style: tmp.infoIcon, children: callback3(extendedOnboarding(12110).NewUserIcon, { size: "sm", color: "interactive-text-active" }) }), ];
  const obj19 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText, children: null };
  const intl5 = tmp6(1236).intl;
  obj19[3] = intl5.string(extendedOnboarding(1236).t.BnUXZi);
  items11[1] = callback3(extendedOnboarding(4251).Text, obj19);
  obj17[1] = items11;
  items10[2] = closure_10(closure_6, obj17);
  items10[3] = callback3(closure_6, { style: tmp.divider });
  const obj21 = { style: tmp.infoRow, children: null };
  const obj18 = { style: tmp.infoIcon, children: callback3(extendedOnboarding(12110).NewUserIcon, { size: "sm", color: "interactive-text-active" }) };
  const obj20 = { style: tmp.divider };
  const items12 = [callback3(closure_6, { style: tmp.infoIcon, children: callback3(extendedOnboarding(4216).CircleCheckIcon, { size: "sm", color: "interactive-text-active" }) }), ];
  const obj23 = { variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp.infoText, children: null };
  const intl6 = tmp6(1236).intl;
  obj23[3] = intl6.string(extendedOnboarding(1236).t.itb1rh);
  items12[1] = callback3(extendedOnboarding(4251).Text, obj23);
  obj21[1] = items12;
  items10[4] = closure_10(closure_6, obj21);
  obj12[1] = items10;
  const items13 = [closure_10(closure_6, obj12), ];
  const obj24 = { variant: "text-xs/medium", color: "text-muted", style: tmp.hint, children: null };
  const intl7 = tmp6(1236).intl;
  obj24[3] = intl7.format(extendedOnboarding(1236).t["jVS/hc"], {
    feedbackHook(children) {
      return callback(extendedOnboarding(4251).Text, {
        variant: "text-xs/medium",
        color: "text-link",
        onPress() {
          return callback2(paths[27]).openLazy(callback(paths[29])(paths[28], paths.paths), "ICYMIFeedbackSheet", {});
        },
        children
      }, arg1);
    }
  });
  items13[1] = callback3(extendedOnboarding(4251).Text, obj24);
  obj11[0] = items13;
  items8[1] = closure_10(closure_6, obj11);
  obj4[1] = items8;
  items5[1] = closure_10(closure_6, obj4);
  obj1[1] = items5;
  items3[1] = closure_10(tmp15, obj1);
  const obj26 = { style: items14, children: null };
  items14 = [{ marginBottom: bottom }, tmp.footer];
  const obj27 = { size: "lg", loading: tmp10[0], text: null, onPress: null };
  const intl8 = tmp6(1236).intl;
  const string = intl8.string;
  const t = tmp6(1236).t;
  if (extendedOnboarding) {
    let stringResult = string(t.LhlgY9);
  } else {
    stringResult = string(t["+IrDzN"]);
  }
  const obj28 = { children: null };
  obj27[2] = stringResult;
  obj27[3] = callback;
  obj26[1] = callback3(extendedOnboarding(4666).Button, obj27);
  items3[2] = callback3(closure_6, obj26);
  obj28[0] = items3;
  return closure_10(tmp12, obj28);
};