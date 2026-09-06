// discord_app/modules/verification/native/components/Overview.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserRequiredActionStore from "../../../../stores/UserRequiredActionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import HelpdeskUtils from "../../../../utils/HelpdeskUtils.tsx";

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({
  Endpoints: closure_7,
  VerificationModalScenes: closure_8,
  VerificationTypes: closure_9,
  HelpdeskArticles,
} = Constants);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  containerInner: null,
  title: null,
  body: null,
  blocks: null,
  verificationType: null,
  button: null,
};
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.containerInner = { flex: 1, padding: 20, justifyContent: "center", alignItems: "center" };
createStyles.title = {
  marginTop: 20,
  fontSize: 17,
  textAlign: "center",
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
let obj1 = {
  marginTop: 20,
  fontSize: 17,
  textAlign: "center",
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
createStyles.body = {
  marginTop: 4,
  marginBottom: 20,
  fontSize: 14,
  textAlign: "center",
  color: nativeDefault.unsafe_rawColors.PRIMARY_400,
};
createStyles.blocks = { width: "60%", justifyContent: "center" };
createStyles.verificationType = { marginBottom: 20 };
createStyles.button = { marginBottom: 20, marginHorizontal: 20, alignSelf: "center" };
let closure_13 = createStyles.createStyles(createStyles);
const helpCenterURL = HelpdeskUtils.getArticleURL(HelpdeskArticles.VERIFICATION_FAQ);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/Overview.tsx");

export default function Overview() {
  const tmp = closure_13();
  _require = tmp;
  let obj = require("initialize");
  const items = [UserRequiredActionStore];
  stateFromStores = obj.useStateFromStores(
    items,
    () => {
      action = action.getAction();
      return stateFromStores(navigation[10]).getVerificationTypes(action);
    },
    [],
    stateFromStores(navigation[10]).areVerificationTypesEqual,
  );
  let obj1 = require("useNavigation");
  navigation = obj1.useNavigation();
  stateFromStores(navigation[12])(require("useBackPressHandler").BackPressHandler.minimize);
  const items1 = [navigation, stateFromStores, tmp.verificationType];
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.containerInner, children: null };
  const callback = noop.useCallback(
    () =>
      closure_2_10(closure_2_11, {
        children: stateFromStores.map((item) => {
          if (item === constants.CAPTCHA) {
            let obj = { text: null, onPress: null, grow: true };
            const intl = closure_1_0(navigation[14]).intl;
            obj.text = intl.string(closure_1_0(navigation[14]).t["3413d0"]);
            obj.onPress = function onPress() {
              const obj = closure_1_1(dependencyMap[15]);
              closure_1_1(dependencyMap[15])
                .showCaptcha()
                .then((captcha_key) => {
                  const HTTP = item(dependencyMap[16]).HTTP;
                  const request = {
                    url: constants.CAPTCHA,
                    body: { captcha_key },
                    oldFormErrors: true,
                    rejectWithError: true,
                  };
                  HTTP.post(request);
                });
            };
            let tmp4 = closure_1_10(closure_1_0(navigation[13]).Button, obj, item);
          } else {
            obj = { style: item.verificationType, children: null };
            obj = {
              text: stateFromStores(navigation[10]).getButtonTitle(item),
              onPress() {
                let tmp4 = item !== constants2.EMAIL_OR_PHONE;
                if (tmp4) {
                  tmp4 = item !== constants2.EMAIL;
                }
                if (tmp4) {
                  tmp4 = item !== constants2.REVERIFY_EMAIL;
                }
                if (tmp4) {
                  const StackActions = item(navigation[18]).StackActions;
                  closure_2_2.dispatch(StackActions.push(constants.ADD_PHONE));
                } else {
                  item(navigation[17]).accountDetailsInit();
                  currentUser = currentUser.getCurrentUser();
                  let email;
                  if (currentUser != null) {
                    email = currentUser.email;
                  }
                  const obj = item(navigation[17]);
                }
              },
              grow: true,
            };
            obj.children = closure_1_10(closure_1_0(navigation[13]).Button, obj);
            tmp4 = closure_1_10(closure_1_4, obj, item);
            const obj4 = stateFromStores(navigation[10]);
          }
          return tmp4;
        }),
      }),
    items1,
  );
  obj1 = { variant: "heading-lg/semibold", style: tmp.title, accessibilityRole: "header", children: null };
  let intl = require("util").intl;
  obj1.children = intl.string(require("util").t.Iz0kDg);
  const items2 = [closure_10(require("Text/Text").Text, obj1), ,];
  const obj2 = { variant: "text-sm/medium", style: tmp.body, children: null };
  const intl2 = require("util").intl;
  obj2.children = intl2.format(require("util").t["0rqMV5"], { helpCenterURL });
  items2[1] = closure_10(require("Text/Text").Text, obj2);
  const obj3 = { helpCenterURL };
  let tmp4 = stateFromStores(navigation[12]);
  items2[2] = closure_10(View, { style: tmp.blocks, children: callback() });
  obj.children = items2;
  const items3 = [closure_12(View, obj)];
  const obj5 = { style: tmp.button, accessibilityRole: "link", children: null };
  const obj6 = { variant: "secondary", text: null, onPress: null };
  const intl3 = require("util").intl;
  obj6.text = intl3.string(require("util").t["Yl/Riu"]);
  obj6.onPress = require("SupportUtils").emailSupport;
  obj5.children = closure_10(require("components/Button/Button").Button, obj6);
  items3[1] = closure_10(View, obj5);
  obj.children = items3;
  return closure_12(View, obj);
}
