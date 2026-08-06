// discord_app/modules/verification/native/components/Overview.tsx
import Text from "Text";
import { View } from "saveProfileAndAccountRequest";
import handleRequiredAction from "handleRequiredAction";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import importDefaultResult from "combined";

let HelpdeskArticles;
let c10;
let c9;
let closure_12;
let error;
let metroImportAll;
let unpackModuleId;
let require = arg1;
({ Endpoints: error, VerificationModalScenes: metroImportAll, VerificationTypes: c9, HelpdeskArticles } = ME);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: null, containerInner: null, title: null, body: null, blocks: null, verificationType: null, button: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, padding: 20, justifyContent: "center", alignItems: "center" };
createCacheKey[2] = { marginTop: 20, fontSize: 17, textAlign: "center", color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj1 = { marginTop: 20, fontSize: 17, textAlign: "center", color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = { marginTop: 4, marginBottom: 20, fontSize: 14, textAlign: "center", color: require("Themes").unsafe_rawColors.PRIMARY_400 };
createCacheKey[4] = { width: "60%", justifyContent: "center" };
createCacheKey[5] = { marginBottom: 20 };
createCacheKey[6] = { marginBottom: 20, marginHorizontal: 20, alignSelf: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginTop: 4, marginBottom: 20, fontSize: 14, textAlign: "center", color: require("Themes").unsafe_rawColors.PRIMARY_400 };
const articleURL = require("combined").getArticleURL(HelpdeskArticles.VERIFICATION_FAQ);
const result = require("handleRequiredAction").fileFinishedImporting("modules/verification/native/components/Overview.tsx");

export default function Overview() {
  const tmp = createCacheKey();
  const require = tmp;
  let obj = require(navigation[9]);
  const items = [handleRequiredAction];
  stateFromStores = obj.useStateFromStores(items, () => {
    action = action.getAction();
    return stateFromStores(navigation[10]).getVerificationTypes(action);
  }, [], stateFromStores(navigation[10]).areVerificationTypesEqual);
  let obj1 = require(navigation[11]);
  navigation = obj1.useNavigation();
  stateFromStores(navigation[12])(require(navigation[12]).BackPressHandler.minimize);
  const items1 = [navigation, stateFromStores, tmp.verificationType];
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.containerInner, children: null };
  const callback = React.useCallback(() => outer1_10(outer1_11, {
    children: stateFromStores.map((arg0) => {
      const verificationType = arg0;
      if (arg0 === outer1_9.CAPTCHA) {
        let obj = { text: null, onPress: null, grow: true };
        const intl = outer1_0(outer1_2[14]).intl;
        obj[0] = intl.string(outer1_0(outer1_2[14]).t["3413d0"]);
        obj[1] = function onPress() {
          let obj = callback(table[15]);
          callback(table[15]).showCaptcha().then((captcha_key) => {
            const HTTP = callback(table[16]).HTTP;
            obj = { url: constants.CAPTCHA, body: obj, oldFormErrors: true, rejectWithError: true };
            obj = { captcha_key };
            HTTP.post(obj);
          });
        };
        let tmp4 = outer1_10(outer1_0(outer1_2[13]).Button, obj);
      } else {
        obj = { style: null, children: null };
        obj[0] = verificationType.verificationType;
        obj = { text: null, onPress: null, grow: true };
        obj[0] = outer1_1(outer1_2[10]).getButtonTitle(arg0);
        obj[1] = function onPress() {
          let tmp4 = closure_0 !== outer2_9.EMAIL_OR_PHONE;
          if (tmp4) {
            tmp4 = tmp2 !== tmp3.EMAIL;
          }
          if (tmp4) {
            tmp4 = tmp2 !== tmp3.REVERIFY_EMAIL;
          }
          if (tmp4) {
            const StackActions = outer2_0(outer2_2[18]).StackActions;
            outer1_2.dispatch(StackActions.push(outer2_8.ADD_PHONE));
          } else {
            outer2_0(outer2_2[17]).accountDetailsInit();
            const currentUser = outer2_6.getCurrentUser();
            let email;
            if (currentUser != null) {
              email = currentUser.email;
            }
            const obj = outer2_0(outer2_2[17]);
          }
        };
        obj[1] = outer1_10(outer1_0(outer1_2[13]).Button, obj);
        tmp4 = outer1_10(outer1_4, obj, arg0);
        const obj4 = outer1_1(outer1_2[10]);
      }
      return tmp4;
    })
  }), items1);
  obj1 = { variant: "heading-lg/semibold", style: tmp.title, accessibilityRole: "header", children: null };
  let intl = require(navigation[14]).intl;
  obj1[3] = intl.string(require(navigation[14]).t.Iz0kDg);
  const items2 = [callback(require(navigation[19]).Text, obj1), , ];
  const obj2 = { variant: "text-sm/medium", style: tmp.body, children: null };
  const intl2 = require(navigation[14]).intl;
  obj2[2] = intl2.format(require(navigation[14]).t["0rqMV5"], { helpCenterURL: closure_14 });
  items2[1] = callback(require(navigation[19]).Text, obj2);
  const obj3 = { helpCenterURL: closure_14 };
  let tmp4 = stateFromStores(navigation[12]);
  items2[2] = callback(View, { style: tmp.blocks, children: callback() });
  obj[1] = items2;
  const items3 = [callback2(View, obj), ];
  const obj5 = { style: tmp.button, accessibilityRole: "link", children: null };
  const obj6 = { variant: "secondary", text: null, onPress: null };
  const intl3 = require(navigation[14]).intl;
  obj6[1] = intl3.string(require(navigation[14]).t["Yl/Riu"]);
  obj6[2] = require(navigation[20]).emailSupport;
  obj5[2] = callback(require(navigation[13]).Button, obj6);
  items3[1] = callback(View, obj5);
  obj[1] = items3;
  return callback2(View, obj);
};