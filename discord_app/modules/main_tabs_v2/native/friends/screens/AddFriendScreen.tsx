// discord_app/modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../../../stores/UserStore.tsx";
import { AnalyticEvents } from "../../../../../Constants.tsx";
import { ContactPermissions } from "../../../../contact_sync/native/ContactSyncConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = {
  headerText: { marginTop: 32, marginHorizontal: 16, textAlign: "center" },
  subheaderText: { marginVertical: 8, marginHorizontal: 16, textAlign: "center" },
  input: null,
  otherOptionsContainer: null,
  rowContainer: null,
  background: null,
};
createCacheKey = { marginTop: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { marginTop: 16, paddingHorizontal: 16 };
createCacheKey[4] = { marginTop: 8 };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx");

export default function AddFriendScreen(navigation) {
  navigation = navigation.navigation;
  let contactSyncAccount;
  dependencyMap = undefined;
  let callback;
  let tmp = callback2();
  let obj = navigation(12454);
  contactSyncAccount = obj.useContactSyncAccount();
  obj1 = navigation(12454);
  [tmp5, c2] = callback(React.useState(!obj1.isContactSyncEnabled(contactSyncAccount)), 2);
  callback = React.useCallback(() => {
    currentUser = currentUser.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      let obj = contactSyncAccount(_undefined[10]);
      userTag = obj.getUserTag(currentUser);
    }
    contactSyncAccount(_undefined[11]).track(constants.FRIEND_ADD_VIEWED, {
      friend_add_type: "Invite",
      source_page: "Add Friend Modal",
    });
    const intl = navigation(_undefined[12]).intl;
    obj = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
    const obj2 = contactSyncAccount(_undefined[11]);
    const formatToPlainStringResult = intl.formatToPlainString(navigation(_undefined[12]).t["6E9a1J"], obj);
    navigation(_undefined[13]).showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
  }, []);
  const items = [callback, navigation, contactSyncAccount];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        let obj = closure_1_0(closure_1_2[14]);
        const intl = closure_1_0(closure_1_2[12]).intl;
        obj = {};
        const renderHeaderTextButton = obj.getRenderHeaderTextButton(
          intl.string(closure_1_0(closure_1_2[12]).t.RDE0Sc),
          closure_3,
        );
        const merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      },
    });
    const result = navigation(_undefined[9]).checkContactPermissions();
    result.then((arg0) => {
      const obj = closure_1_0(closure_1_2[15]);
      const tmp = closure_1_9;
      const tmp2 = closure_1_0;
      const tmp3 = closure_1_2;
      let tmp5 =
        arg0 === closure_1_9.NOT_DETERMINED ||
        (closure_1_0(closure_1_2[15]).isAndroid() && arg0 === closure_1_9.UNAUTHORIZED);
      if (!tmp5) {
        tmp5 = !tmp2(tmp3[9]).isContactSyncEnabled(closure_1);
        const tmp2Result = tmp2(tmp3[9]);
      }
      callback(tmp5);
    });
  }, items);
  const items1 = [callback(contactSyncAccount(5079), { absolute: true })];
  obj = { keyboardShouldPersistTaps: "handled", style: tmp.background, children: null };
  obj = {
    style: tmp.headerText,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  let intl = navigation(1233).intl;
  obj[4] = intl.string(navigation(1233).t.GWMTSE);
  const items2 = [callback(navigation(4474).Text, obj), , ,];
  obj1 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = navigation(1233).intl;
  obj1[3] = intl2.string(navigation(1233).t["Rn/sLl"]);
  items2[1] = callback(navigation(4474).Text, obj1);
  items2[2] = callback(contactSyncAccount(13833), {
    style: tmp.input,
    autoFocusInput: false,
    sourcePage: navigation.route.params.sourcePage,
  });
  const obj3 = { style: tmp.otherOptionsContainer, children: null };
  const obj4 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
  const intl3 = navigation(1233).intl;
  obj4[3] = intl3.string(navigation(1233).t.dukg0Z);
  const items3 = [callback(navigation(4474).Text, obj4)];
  let tmp10Result = null;
  if (tmp5) {
    const obj5 = { style: null, location: "Add Friend Modal" };
    obj5[0] = tmp.rowContainer;
    tmp10Result = callback(contactSyncAccount(13835), obj5);
  }
  const obj6 = { children: null };
  items3[1] = tmp10Result;
  obj3[1] = items3;
  items2[3] = closure_11(closure_5, obj3);
  obj[2] = items2;
  items1[1] = closure_11(closure_6, obj);
  obj6[0] = items1;
  return closure_11(closure_12, obj6);
}
