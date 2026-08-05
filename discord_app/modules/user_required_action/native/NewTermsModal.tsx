// discord_app/modules/user_required_action/native/NewTermsModal.tsx
import closure_3 from "ME";
import _slicedToArray from "_slicedToArray";
import Button from "Button";
import get_ActivityIndicator from "encodeProperties";
import handleRequiredAction from "handleRequiredAction";
import ME from "ME";
import jsxProd from "registerAsset";
import createCacheKey from "createCacheKey";

let c10;
let closure_12;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function handleTouch() {
  closure_7.dismiss();
}
function handleMoreActions() {
  let obj = require(5643) /* showSimpleActionSheet */;
  obj = { key: "NewTermsModalMore", options: null, hasIcons: false };
  obj = { label: null, isDestructive: true, onPress: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["2jxGer"]);
  obj[2] = function onPress() {
    return callback(table[11]).logout("new_terms_modal");
  };
  const items = [obj];
  obj[1] = items;
  const result = obj.showSimpleActionSheet(obj);
}
({ View: closure_6, Keyboard: error, ScrollView: metroImportAll } = get_ActivityIndicator);
({ MarketingURLs: c10, UserRequiredActions: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { contentContainer: null, scrollView: null, container: null, description: null, agreementDescription: null, navbarRight: null, stickyFooter: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, flexGrow: 1, display: "flex", alignContent: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[3] = { marginTop: require("Themes").space.PX_24, marginBottom: require("Themes").space.PX_24 };
let obj2 = { marginTop: require("Themes").space.PX_24, marginBottom: require("Themes").space.PX_24 };
createCacheKey[4] = { marginTop: require("Themes").space.PX_24 };
let obj3 = { marginTop: require("Themes").space.PX_24 };
createCacheKey[5] = { position: "absolute", right: 0, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
let obj4 = { position: "absolute", right: 0, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[6] = { paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_16, marginTop: require("Themes").space.PX_24, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_16, marginTop: require("Themes").space.PX_24, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
let result = require("noop").fileFinishedImporting("modules/user_required_action/native/NewTermsModal.tsx");

export default function NewTermsModal() {
  const tmp = createCacheKey();
  const rect = importDefault(1581)();
  const top = rect.top;
  const memo = React.useMemo(() => action.getAction(), []);
  const tmp5 = callback2(React.useState(false), 2);
  importDefault = tmp5[1];
  let obj = memo(5244);
  obj.useNavigatorBackPressHandler(memo(4692).BackPressHandler.minimize);
  const dependencyMap = React.useCallback(callback(function*() {
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
        return { value: "HermesInternal", done: null };
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
            let closure_0 = tmp2;
            closure_0 = undefined;
            outer1_1(true);
            let obj1 = outer1_0(table[15]);
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  }), []);
  obj = { type: null, name: null, properties: null };
  obj[0] = memo(503).ImpressionTypes.VIEW;
  obj[1] = memo(503).ImpressionNames.USER_AGREEMENTS;
  obj[2] = { required_action: memo };
  importDefault(9267)(obj, {}, []);
  let tmp10 = null;
  if (null != memo) {
    obj = { style: null, children: null };
    const items = [tmp.container, ];
    let obj1 = { paddingTop: null, paddingBottom: null };
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
    const items2 = [callback3(tmp6(4281).Text, obj3), , , , , , ];
    const obj4 = { variant: "text-md/normal", style: null, children: null };
    obj4[1] = tmp.description;
    const intl2 = tmp6(1236).intl;
    const obj5 = { url: null };
    obj5[0] = constants.TERMS_SUMMARY;
    obj4[2] = intl2.format(tmp6(1236).t.CN0Hvb, obj5);
    items2[1] = callback3(tmp6(4281).Text, obj4);
    const obj6 = { variant: "text-md/normal", children: null };
    const intl3 = tmp6(1236).intl;
    const obj7 = { url: null };
    obj7[0] = constants.TERMS;
    obj6[1] = intl3.format(tmp6(1236).t.iw0hFi, obj7);
    items2[2] = callback3(tmp6(4281).Text, obj6);
    const obj8 = { variant: "text-md/normal", children: null };
    const intl4 = tmp6(1236).intl;
    const obj9 = { url: null };
    obj9[0] = constants.PAID_TERMS;
    obj8[1] = intl4.format(tmp6(1236).t["36klnD"], obj9);
    items2[3] = callback3(tmp6(4281).Text, obj8);
    const obj10 = { variant: "text-md/normal", children: null };
    const intl5 = tmp6(1236).intl;
    const obj11 = { url: null };
    obj11[0] = constants.PRIVACY;
    obj10[1] = intl5.format(tmp6(1236).t.TquFBF, obj11);
    items2[4] = callback3(tmp6(4281).Text, obj10);
    const obj12 = { variant: "text-md/normal", children: null };
    const intl6 = tmp6(1236).intl;
    const obj13 = { url: null };
    obj13[0] = constants.GUIDELINES;
    obj12[1] = intl6.format(tmp6(1236).t.ia96Tb, obj13);
    items2[5] = callback3(tmp6(4281).Text, obj12);
    const obj14 = { variant: "text-md/normal", style: null, children: null };
    obj14[1] = tmp.agreementDescription;
    const intl7 = tmp6(1236).intl;
    obj14[2] = intl7.string(tmp6(1236).t["+USXQE"]);
    items2[6] = callback3(tmp6(4281).Text, obj14);
    obj2[3] = items2;
    const items3 = [callback4(closure_8, obj2), , ];
    const obj15 = { style: null, children: null };
    obj15[0] = tmp.stickyFooter;
    const obj16 = { loading: null, onPress: null, text: null };
    obj16[0] = tmp5[0];
    obj16[1] = function onPress() {
      if (memo === outer1_11.AGREEMENTS) {
        callback();
      }
    };
    const intl8 = tmp6(1236).intl;
    obj16[2] = intl8.string(tmp6(1236).t["+TBKL1"]);
    obj15[1] = callback3(tmp6(4695).Button, obj16);
    items3[1] = callback3(closure_6, obj15);
    const obj17 = { style: null, source: null, color: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null };
    const items4 = [tmp.navbarRight, ];
    const obj18 = { top: null };
    obj18[0] = top;
    items4[1] = obj18;
    obj17[0] = items4;
    obj17[1] = tmp2(8973);
    obj17[2] = tmp.navbarRight.tintColor;
    obj17[3] = handleMoreActions;
    const intl9 = tmp6(1236).intl;
    obj17[5] = intl9.string(tmp6(1236).t["UKOtz+"]);
    items3[2] = callback3(tmp2(8979), obj17);
    obj[1] = items3;
    tmp10 = callback4(closure_6, obj);
    const tmp2Result = tmp2(8979);
  }
  return tmp10;
};