// === Module 17064: handleTouch ===

// Module 17064 (handleTouch)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import showSimpleActionSheet from "showSimpleActionSheet" /* 5954 */;
import trackImpressionDefault from "trackImpression" /* 8855 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "handleRequiredAction" /* 1381 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function handleTouch() {
  closure_7.dismiss();
}
function handleMoreActions() {
  let obj = showSimpleActionSheet;
  obj = { key: "NewTermsModalMore", options: null, hasIcons: false };
  obj = { label: null, isDestructive: true, onPress: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["2jxGer"]);
  obj[2] = function onPress() {
    return callback(table[11]).logout("new_terms_modal");
  };
  const items = [obj];
  obj[1] = items;
  const result = obj.showSimpleActionSheet(obj);
}
({ View: closure_6, Keyboard: error, ScrollView: closure_8 } = get_ActivityIndicator);
({ MarketingURLs: c10, UserRequiredActions: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { contentContainer: null, scrollView: null, container: null, description: null, agreementDescription: null, navbarRight: null, stickyFooter: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, flexGrow: 1, display: "flex", alignContent: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_24 };
let obj2 = { marginTop: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_24 };
let obj3 = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[5] = { position: "absolute", right: 0, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj4 = { position: "absolute", right: 0, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[6] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_16, marginTop: ThemesDefault.space.PX_24, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj5 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_16, marginTop: ThemesDefault.space.PX_24, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
let result = require("set").fileFinishedImporting("modules/user_required_action/native/NewTermsModal.tsx");

export default function NewTermsModal() {
  const tmp = callback5();
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  const memo = React.useMemo(() => action.getAction(), []);
  const tmp5 = callback2(React.useState(false), 2);
  importDefault = tmp5[1];
  let obj = memo(5469);
  obj.useNavigatorBackPressHandler(memo(4893).BackPressHandler.minimize);
  dependencyMap = React.useCallback(callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp5;
            closure_0 = tmp2;
            closure_0 = undefined;
            closure_1_1(true);
            obj1 = closure_1_0(table[15]);
            table = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.acceptAgreements();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          callback(closure_0);
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  }), []);
  obj = { type: memo(503).ImpressionTypes.VIEW, name: memo(503).ImpressionNames.USER_AGREEMENTS, properties: { required_action: memo } };
  trackImpressionDefault(obj, {}, []);
  let tmp10 = null;
  if (null != memo) {
    obj = { style: null, children: null };
    const items = [tmp.container, ];
    obj1 = { paddingTop: null, paddingBottom: null };
    obj1[0] = top;
    obj1[1] = rect.bottom;
    items[1] = obj1;
    obj[0] = items;
    const obj2 = { style: null, contentContainerStyle: null, onTouchStart: null, children: null };
    const items1 = [tmp.scrollView];
    obj2[0] = items1;
    obj2[1] = tmp.contentContainer;
    obj2[2] = handleTouch;
    const obj3 = { maxFontSizeMultiplier: 2, variant: "heading-xxl/bold", children: null };
    const intl = tmp6(1236).intl;
    obj3[2] = intl.string(tmp6(1236).t["7glvXu"]);
    const items2 = [callback3(tmp6(4444).Text, obj3), , , , , , ];
    const obj4 = { variant: "text-md/normal", style: null, children: null };
    obj4[1] = tmp.description;
    const intl2 = tmp6(1236).intl;
    const obj5 = { url: null };
    obj5[0] = constants.TERMS_SUMMARY;
    obj4[2] = intl2.format(tmp6(1236).t.CN0Hvb, obj5);
    items2[1] = callback3(tmp6(4444).Text, obj4);
    const obj6 = { variant: "text-md/normal", children: null };
    const intl3 = tmp6(1236).intl;
    const obj7 = { url: null };
    obj7[0] = constants.TERMS;
    obj6[1] = intl3.format(tmp6(1236).t.iw0hFi, obj7);
    items2[2] = callback3(tmp6(4444).Text, obj6);
    const obj8 = { variant: "text-md/normal", children: null };
    const intl4 = tmp6(1236).intl;
    const obj9 = { url: null };
    obj9[0] = constants.PAID_TERMS;
    obj8[1] = intl4.format(tmp6(1236).t["36klnD"], obj9);
    items2[3] = callback3(tmp6(4444).Text, obj8);
    const obj10 = { variant: "text-md/normal", children: null };
    const intl5 = tmp6(1236).intl;
    const obj11 = { url: null };
    obj11[0] = constants.PRIVACY;
    obj10[1] = intl5.format(tmp6(1236).t.TquFBF, obj11);
    items2[4] = callback3(tmp6(4444).Text, obj10);
    const obj12 = { variant: "text-md/normal", children: null };
    const intl6 = tmp6(1236).intl;
    const obj13 = { url: null };
    obj13[0] = constants.GUIDELINES;
    obj12[1] = intl6.format(tmp6(1236).t.ia96Tb, obj13);
    items2[5] = callback3(tmp6(4444).Text, obj12);
    const obj14 = { variant: "text-md/normal", style: null, children: null };
    obj14[1] = tmp.agreementDescription;
    const intl7 = tmp6(1236).intl;
    obj14[2] = intl7.string(tmp6(1236).t["+USXQE"]);
    items2[6] = callback3(tmp6(4444).Text, obj14);
    obj2[3] = items2;
    const items3 = [callback4(closure_8, obj2), , ];
    const obj15 = { style: null, children: null };
    obj15[0] = tmp.stickyFooter;
    const obj16 = { loading: null, onPress: null, text: null };
    obj16[0] = tmp5[0];
    obj16[1] = function onPress() {
      if (memo === closure_1_11.AGREEMENTS) {
        callback();
      }
    };
    const intl8 = tmp6(1236).intl;
    obj16[2] = intl8.string(tmp6(1236).t["+TBKL1"]);
    obj15[1] = callback3(tmp6(4896).Button, obj16);
    items3[1] = callback3(closure_6, obj15);
    const obj17 = { style: null, source: null, color: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null };
    const items4 = [tmp.navbarRight, ];
    const obj18 = { top: null };
    obj18[0] = top;
    items4[1] = obj18;
    obj17[0] = items4;
    obj17[1] = tmp2(9729);
    obj17[2] = tmp.navbarRight.tintColor;
    obj17[3] = handleMoreActions;
    const intl9 = tmp6(1236).intl;
    obj17[5] = intl9.string(tmp6(1236).t["UKOtz+"]);
    items3[2] = callback3(tmp2(9029), obj17);
    obj[1] = items3;
    tmp10 = callback4(closure_6, obj);
    const tmp2Result = tmp2(9029);
  }
  return tmp10;
};