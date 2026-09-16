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
  const obj2 = { key: "NewTermsModalMore", options: null, hasIcons: false };
  const obj3 = { label: null, isDestructive: true, onPress: null };
  const intl = util.intl;
  obj3.label = intl.string(util.t["2jxGer"]);
  obj3.onPress = function onPress() {
    return AuthenticationActionCreatorsDefault.logout("new_terms_modal");
  };
  const items = [obj3];
  obj2.options = items;
  const result = showSimpleActionSheet.showSimpleActionSheet(obj2);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Keyboard: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const Constants = fn(1074);
({ MarketingURLs: c10, UserRequiredActions: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  contentContainer: {
    paddingHorizontal: nativeDefault.space.PX_16,
    flexGrow: 1,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  scrollView: { flex: 1 },
  container: null,
  description: null,
  agreementDescription: null,
  navbarRight: null,
  stickyFooter: null,
};
let obj3 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  flexGrow: 1,
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
};
obj2.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.description = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
let obj5 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
obj2.agreementDescription = { marginTop: nativeDefault.space.PX_24 };
let obj6 = { marginTop: nativeDefault.space.PX_24 };
obj2.navbarRight = { position: "absolute", right: 0, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj7 = { position: "absolute", right: 0, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.stickyFooter = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
  marginTop: nativeDefault.space.PX_24,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_required_action/native/NewTermsModal.tsx");

export default function NewTermsModal() {
  const tmp = closure_14();
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  const memo = noop.useMemo(() => action.getAction(), []);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp5[1];
  memo(5716).useNavigatorBackPressHandler(memo(5055).BackPressHandler.minimize);
  dependencyMap = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_128_0 = undefined;
              tmp5(true);
              dependencyMap = 1;
              c3 = 1;
              const obj5 = { value: tmp2(dependencyMap[15]).acceptAgreements(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
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
  const obj2 = { type: null, name: null, properties: null };
  let obj = memo(5716);
  obj2.type = memo(1249).ImpressionTypes.VIEW;
  obj2.name = memo(1249).ImpressionNames.USER_AGREEMENTS;
  obj2.properties = { required_action: memo };
  useTrackImpressionDefault(obj2, {}, []);
  let tmp10 = null;
  if (null != memo) {
    let obj3 = { style: null, children: null };
    const items = [tmp.container];
    let obj4 = { paddingTop: top, paddingBottom: rect.bottom };
    items[1] = obj4;
    obj3.style = items;
    let obj5 = { style: null, contentContainerStyle: null, onTouchStart: null, children: null };
    const items1 = [tmp.scrollView];
    obj5.style = items1;
    obj5.contentContainerStyle = tmp.contentContainer;
    obj5.onTouchStart = handleTouch;
    const obj6 = { maxFontSizeMultiplier: 2, variant: "heading-xxl/bold", children: null };
    const intl = tmp6(1115).intl;
    obj6.children = intl.string(tmp6(1115).t["7glvXu"]);
    const items2 = [closure_12(tmp6(4634).Text, obj6), , , , , ,];
    const obj7 = { variant: "text-md/normal", style: tmp.description, children: null };
    const intl2 = tmp6(1115).intl;
    const obj8 = { url: constants.TERMS_SUMMARY };
    obj7.children = intl2.format(tmp6(1115).t.CN0Hvb, obj8);
    items2[1] = closure_12(tmp6(4634).Text, obj7);
    const obj9 = { variant: "text-md/normal", children: null };
    const intl3 = tmp6(1115).intl;
    const obj10 = { url: constants.TERMS };
    obj9.children = intl3.format(tmp6(1115).t.iw0hFi, obj10);
    items2[2] = closure_12(tmp6(4634).Text, obj9);
    const obj11 = { variant: "text-md/normal", children: null };
    const intl4 = tmp6(1115).intl;
    const obj12 = { url: constants.PAID_TERMS };
    obj11.children = intl4.format(tmp6(1115).t["36klnD"], obj12);
    items2[3] = closure_12(tmp6(4634).Text, obj11);
    const obj13 = { variant: "text-md/normal", children: null };
    const intl5 = tmp6(1115).intl;
    const obj14 = { url: constants.PRIVACY };
    obj13.children = intl5.format(tmp6(1115).t.TquFBF, obj14);
    items2[4] = closure_12(tmp6(4634).Text, obj13);
    const obj15 = { variant: "text-md/normal", children: null };
    const intl6 = tmp6(1115).intl;
    const obj16 = { url: constants.GUIDELINES };
    obj15.children = intl6.format(tmp6(1115).t.ia96Tb, obj16);
    items2[5] = closure_12(tmp6(4634).Text, obj15);
    const obj17 = { variant: "text-md/normal", style: tmp.agreementDescription, children: null };
    const intl7 = tmp6(1115).intl;
    obj17.children = intl7.string(tmp6(1115).t["+USXQE"]);
    items2[6] = closure_12(tmp6(4634).Text, obj17);
    obj5.children = items2;
    const items3 = [closure_13(closure_8, obj5), ,];
    const obj18 = { style: tmp.stickyFooter, children: null };
    const obj19 = {
      loading: tmp5[0],
      onPress() {
        if (memo === constants2.AGREEMENTS) {
          dependencyMap();
        }
      },
      text: null,
    };
    const intl8 = tmp6(1115).intl;
    obj19.text = intl8.string(tmp6(1115).t["+TBKL1"]);
    obj18.children = closure_12(tmp6(5060).Button, obj19);
    items3[1] = closure_12(closure_6, obj18);
    const obj20 = {
      style: null,
      source: null,
      color: null,
      onPress: null,
      accessibilityRole: "button",
      accessibilityLabel: null,
    };
    const items4 = [tmp.navbarRight];
    const obj21 = { top };
    items4[1] = obj21;
    obj20.style = items4;
    obj20.source = tmp2(9940);
    obj20.color = tmp.navbarRight.tintColor;
    obj20.onPress = handleMoreActions;
    const intl9 = tmp6(1115).intl;
    obj20.accessibilityLabel = intl9.string(tmp6(1115).t["UKOtz+"]);
    items3[2] = closure_12(tmp2(9193), obj20);
    obj3.children = items3;
    tmp10 = closure_13(closure_6, obj3);
    const tmp2Result = tmp2(9193);
  }
  return tmp10;
}
