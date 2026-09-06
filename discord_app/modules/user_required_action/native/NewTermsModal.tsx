// discord_app/modules/user_required_action/native/NewTermsModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import showSimpleActionSheet from "../../action_sheet/native/showSimpleActionSheet.tsx";
import useTrackImpressionDefault from "../../app_analytics/useTrackImpression.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserRequiredActionStore from "../../../stores/UserRequiredActionStore.tsx";

require = fn;
function handleTouch() {
  React5.dismiss();
}
function handleMoreActions() {
  let obj = { key: "NewTermsModalMore", options: null, hasIcons: false };
  obj = { label: null, isDestructive: true, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["2jxGer"]);
  obj.onPress = function onPress() {
    return AuthenticationActionCreatorsDefault.logout("new_terms_modal");
  };
  const items = [obj];
  obj.options = items;
  const result = obj.showSimpleActionSheet(obj);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Keyboard: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const Constants = fn(1074);
({ MarketingURLs: c10, UserRequiredActions: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = {
  contentContainer: null,
  scrollView: null,
  container: null,
  description: null,
  agreementDescription: null,
  navbarRight: null,
  stickyFooter: null,
};
createStyles = {
  paddingHorizontal: nativeDefault.space.PX_16,
  flexGrow: 1,
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
};
createStyles.contentContainer = createStyles;
createStyles.scrollView = { flex: 1 };
createStyles.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.description = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
let obj2 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
createStyles.agreementDescription = { marginTop: nativeDefault.space.PX_24 };
let obj3 = { marginTop: nativeDefault.space.PX_24 };
createStyles.navbarRight = { position: "absolute", right: 0, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj4 = { position: "absolute", right: 0, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.stickyFooter = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
  marginTop: nativeDefault.space.PX_24,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_14 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_required_action/native/NewTermsModal.tsx");

export default function NewTermsModal() {
  const tmp = closure_14();
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  const memo = noop.useMemo(() => action.getAction(), []);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp5[1];
  let obj = memo(5630);
  obj.useNavigatorBackPressHandler(memo(4972).BackPressHandler.minimize);
  dependencyMap = noop.useCallback(
    asyncGeneratorStep(async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              tmp5(true);
              let obj1 = tmp2(dependencyMap[15]);
              dependencyMap = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.acceptAgreements();
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            closure_129_1(closure_128_0);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          c3 = tmp;
          throw tmp15;
        }
      }
    }),
    [],
  );
  obj = {
    type: memo(1250).ImpressionTypes.VIEW,
    name: memo(1250).ImpressionNames.USER_AGREEMENTS,
    properties: { required_action: memo },
  };
  useTrackImpressionDefault(obj, {}, []);
  let tmp10 = null;
  if (null != memo) {
    obj = { style: null, children: null };
    const items = [tmp.container];
    let obj1 = { paddingTop: top, paddingBottom: rect.bottom };
    items[1] = obj1;
    obj.style = items;
    const obj2 = { style: null, contentContainerStyle: null, onTouchStart: null, children: null };
    const items1 = [tmp.scrollView];
    obj2.style = items1;
    obj2.contentContainerStyle = tmp.contentContainer;
    obj2.onTouchStart = handleTouch;
    const obj3 = { maxFontSizeMultiplier: 2, variant: "heading-xxl/bold", children: null };
    const intl = tmp6(1114).intl;
    obj3.children = intl.string(tmp6(1114).t["7glvXu"]);
    const items2 = [closure_12(tmp6(4556).Text, obj3), , , , , ,];
    const obj4 = { variant: "text-md/normal", style: tmp.description, children: null };
    const intl2 = tmp6(1114).intl;
    const obj5 = { url: constants.TERMS_SUMMARY };
    obj4.children = intl2.format(tmp6(1114).t.CN0Hvb, obj5);
    items2[1] = closure_12(tmp6(4556).Text, obj4);
    const obj6 = { variant: "text-md/normal", children: null };
    const intl3 = tmp6(1114).intl;
    const obj7 = { url: constants.TERMS };
    obj6.children = intl3.format(tmp6(1114).t.iw0hFi, obj7);
    items2[2] = closure_12(tmp6(4556).Text, obj6);
    const obj8 = { variant: "text-md/normal", children: null };
    const intl4 = tmp6(1114).intl;
    const obj9 = { url: constants.PAID_TERMS };
    obj8.children = intl4.format(tmp6(1114).t["36klnD"], obj9);
    items2[3] = closure_12(tmp6(4556).Text, obj8);
    const obj10 = { variant: "text-md/normal", children: null };
    const intl5 = tmp6(1114).intl;
    const obj11 = { url: constants.PRIVACY };
    obj10.children = intl5.format(tmp6(1114).t.TquFBF, obj11);
    items2[4] = closure_12(tmp6(4556).Text, obj10);
    const obj12 = { variant: "text-md/normal", children: null };
    const intl6 = tmp6(1114).intl;
    const obj13 = { url: constants.GUIDELINES };
    obj12.children = intl6.format(tmp6(1114).t.ia96Tb, obj13);
    items2[5] = closure_12(tmp6(4556).Text, obj12);
    const obj14 = { variant: "text-md/normal", style: tmp.agreementDescription, children: null };
    const intl7 = tmp6(1114).intl;
    obj14.children = intl7.string(tmp6(1114).t["+USXQE"]);
    items2[6] = closure_12(tmp6(4556).Text, obj14);
    obj2.children = items2;
    const items3 = [closure_13(closure_8, obj2), ,];
    const obj15 = { style: tmp.stickyFooter, children: null };
    const obj16 = {
      loading: tmp5[0],
      onPress() {
        if (memo === constants2.AGREEMENTS) {
          dependencyMap();
        }
      },
      text: null,
    };
    const intl8 = tmp6(1114).intl;
    obj16.text = intl8.string(tmp6(1114).t["+TBKL1"]);
    obj15.children = closure_12(tmp6(4975).Button, obj16);
    items3[1] = closure_12(closure_6, obj15);
    const obj17 = {
      style: null,
      source: null,
      color: null,
      onPress: null,
      accessibilityRole: "button",
      accessibilityLabel: null,
    };
    const items4 = [tmp.navbarRight];
    const obj18 = { top };
    items4[1] = obj18;
    obj17.style = items4;
    obj17.source = tmp2(9800);
    obj17.color = tmp.navbarRight.tintColor;
    obj17.onPress = handleMoreActions;
    const intl9 = tmp6(1114).intl;
    obj17.accessibilityLabel = intl9.string(tmp6(1114).t["UKOtz+"]);
    items3[2] = closure_12(tmp2(9050), obj17);
    obj.children = items3;
    tmp10 = closure_13(closure_6, obj);
    const tmp2Result = tmp2(9050);
  }
  return tmp10;
}
