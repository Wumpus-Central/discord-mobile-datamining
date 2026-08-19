// === Module 16735: Overview ===

// Module 16735 (Overview)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import handleRequiredAction from "handleRequiredAction" /* 1385 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importDefaultResult from "combined" /* 1993 */;

const require = fn;
({ Endpoints: error, VerificationModalScenes: closure_8, VerificationTypes: c9, HelpdeskArticles } = ME);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, padding: 20, justifyContent: "center", alignItems: "center" };
createCacheKey[2] = { marginTop: 20, fontSize: 17, textAlign: "center", color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = { marginTop: 4, marginBottom: 20, fontSize: 14, textAlign: "center", color: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
createCacheKey[4] = { width: "60%", justifyContent: "center" };
createCacheKey[5] = { marginBottom: 20 };
createCacheKey[6] = { marginBottom: 20, marginHorizontal: 20, alignSelf: "center" };
let closure_13 = createCacheKey.createStyles(createCacheKey);
const articleURL = importDefaultResult.getArticleURL(HelpdeskArticles.VERIFICATION_FAQ);
const result = require("obj132").fileFinishedImporting("modules/verification/native/components/Overview.tsx");

export default function Overview() {
  const tmp = callback3();
  const _require = tmp;
  let obj = _require(navigation[9]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => {
    action = action.getAction();
    return stateFromStores(navigation[10]).getVerificationTypes(action);
  }, [], stateFromStores(navigation[10]).areVerificationTypesEqual);
  obj1 = _require(navigation[11]);
  navigation = obj1.useNavigation();
  stateFromStores(navigation[12])(_require(navigation[12]).BackPressHandler.minimize);
  const items1 = [navigation, stateFromStores, tmp.verificationType];
  obj = { style: tmp.containerInner, children: null };
  const callback = React.useCallback(() => closure_1_10(closure_1_11, {
    children: stateFromStores.map((item, index) => {
      const verificationType = item;
      if (item === closure_1_9.CAPTCHA) {
        let obj = { text: null, onPress: null, grow: true };
        const intl = closure_1_0(navigation[14]).intl;
        obj[0] = intl.string(closure_1_0(navigation[14]).t["3413d0"]);
        obj[1] = function onPress() {
          let obj = callback(table[15]);
          callback(table[15]).showCaptcha().then((result) => {
            const HTTP = callback(table[16]).HTTP;
            const obj = { captcha_key: result };
            HTTP.post(obj);
          });
        };
        let tmp4 = closure_1_10(closure_1_0(navigation[13]).Button, obj);
      } else {
        obj = { style: null, children: null };
        obj[0] = verificationType.verificationType;
        obj = { text: null, onPress: null, grow: true };
        obj[0] = stateFromStores(navigation[10]).getButtonTitle(item);
        obj[1] = function onPress() {
          let tmp4 = closure_0 !== closure_2_9.EMAIL_OR_PHONE;
          if (tmp4) {
            tmp4 = closure_0 !== closure_2_9.EMAIL;
          }
          if (tmp4) {
            tmp4 = closure_0 !== closure_2_9.REVERIFY_EMAIL;
          }
          if (tmp4) {
            const StackActions = closure_2_0(navigation[18]).StackActions;
            closure_1_2.dispatch(StackActions.push(closure_2_8.ADD_PHONE));
          } else {
            closure_2_0(navigation[17]).accountDetailsInit();
            const currentUser = closure_2_6.getCurrentUser();
            let email;
            if (currentUser != null) {
              email = currentUser.email;
            }
            const obj = closure_2_0(navigation[17]);
          }
        };
        obj[1] = closure_1_10(closure_1_0(navigation[13]).Button, obj);
        tmp4 = closure_1_10(closure_1_4, obj, item);
        const obj4 = stateFromStores(navigation[10]);
      }
      return tmp4;
    })
  }), items1);
  obj1 = { variant: "heading-lg/semibold", style: tmp.title, accessibilityRole: "header", children: null };
  let intl = _require(navigation[14]).intl;
  obj1[3] = intl.string(_require(navigation[14]).t.Iz0kDg);
  const items2 = [callback(_require(navigation[19]).Text, obj1), , ];
  const obj2 = { variant: "text-sm/medium", style: tmp.body, children: null };
  const intl2 = _require(navigation[14]).intl;
  obj2[2] = intl2.format(_require(navigation[14]).t["0rqMV5"], { helpCenterURL: closure_14 });
  items2[1] = callback(_require(navigation[19]).Text, obj2);
  let tmp4 = stateFromStores(navigation[12]);
  items2[2] = callback(View, { style: tmp.blocks, children: callback() });
  obj[1] = items2;
  const items3 = [callback2(View, obj), ];
  const obj5 = { style: tmp.button, accessibilityRole: "link", children: null };
  const obj6 = { variant: "secondary", text: null, onPress: null };
  const intl3 = _require(navigation[14]).intl;
  obj6[1] = intl3.string(_require(navigation[14]).t["Yl/Riu"]);
  obj6[2] = _require(navigation[20]).emailSupport;
  obj5[2] = callback(_require(navigation[13]).Button, obj6);
  items3[1] = callback(View, obj5);
  obj[1] = items3;
  return callback2(View, obj);
};