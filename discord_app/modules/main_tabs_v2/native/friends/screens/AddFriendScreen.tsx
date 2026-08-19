// discord_app/modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import { AnalyticEvents } from "../../../../../Constants.tsx";
import { ContactPermissions } from "../../../../contact_sync/native/ContactSyncConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
const createCacheKey = { marginTop: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { marginTop: 16, paddingHorizontal: 16 };
createCacheKey[4] = { marginTop: 8 };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx");

export default function AddFriendScreen(navigation) {
  navigation = navigation.navigation;
  dependencyMap = undefined;
  let callback;
  const tmp = callback2();
  let obj = navigation(11853);
  const contactSyncAccount = obj.useContactSyncAccount();
  obj1 = navigation(11853);
  [tmp5, c2] = callback(React.useState(!obj1.isContactSyncEnabled(contactSyncAccount)), 2);
  callback = React.useCallback(() => {
    currentUser = currentUser.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      let obj = contactSyncAccount(_undefined[10]);
      userTag = obj.getUserTag(currentUser);
    }
    contactSyncAccount(_undefined[11]).track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
    const intl = navigation(_undefined[12]).intl;
    obj = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
    const obj2 = contactSyncAccount(_undefined[11]);
    const formatToPlainStringResult = intl.formatToPlainString(navigation(_undefined[12]).t["6E9a1J"], obj);
    navigation(_undefined[13]).showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
    const obj4 = navigation(_undefined[13]);
  }, []);
  const items = [callback, navigation, contactSyncAccount];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        navigation(closure_1_2[14]);
        const intl = navigation(closure_1_2[12]).intl;
        const obj = {};
        const renderHeaderTextButton = obj.getRenderHeaderTextButton(intl.string(navigation(closure_1_2[12]).t.RDE0Sc), closure_3);
        const merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      }
    });
    const result = navigation(_undefined[9]).checkContactPermissions();
    result.then((result) => {
      const obj = navigation(closure_1_2[15]);
      let tmp5 = result === closure_1_9.NOT_DETERMINED || navigation(closure_1_2[15]).isAndroid() && result === closure_1_9.UNAUTHORIZED;
      if (!tmp5) {
        tmp5 = !navigation(closure_1_2[9]).isContactSyncEnabled(closure_1);
        const tmp2Result = navigation(closure_1_2[9]);
      }
      callback(tmp5);
      const tmp4 = navigation(closure_1_2[15]).isAndroid() && result === closure_1_9.UNAUTHORIZED;
    });
  }, items);
  const items1 = [callback(contactSyncAccount(9091), { absolute: true }), ];
  obj = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = navigation(1236).intl;
  obj[4] = intl.string(navigation(1236).t.GWMTSE);
  const items2 = [callback(navigation(4734).Text, obj), , , ];
  obj1 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = navigation(1236).intl;
  obj1[3] = intl2.string(navigation(1236).t["Rn/sLl"]);
  items2[1] = callback(navigation(4734).Text, obj1);
  items2[2] = callback(contactSyncAccount(13315), { style: tmp.input, autoFocusInput: false, sourcePage: navigation.route.params.sourcePage });
  const obj3 = { style: tmp.otherOptionsContainer, children: null };
  let obj4 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
  const intl3 = navigation(1236).intl;
  obj4[3] = intl3.string(navigation(1236).t.dukg0Z);
  const items3 = [callback(navigation(4734).Text, obj4), ];
  let tmp10Result = null;
  if (tmp5) {
    const obj5 = { style: null, location: "Add Friend Modal" };
    obj5[0] = tmp.rowContainer;
    tmp10Result = callback(contactSyncAccount(13317), obj5);
  }
  const obj6 = { children: null };
  items3[1] = tmp10Result;
  obj3[1] = items3;
  items2[3] = callback(closure_5, obj3);
  obj[2] = items2;
  items1[1] = callback(closure_6, obj);
  obj6[0] = items1;
  return callback(closure_12, obj6);
};