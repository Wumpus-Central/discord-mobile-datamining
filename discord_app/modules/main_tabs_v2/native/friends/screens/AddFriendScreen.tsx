// discord_app/modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx
import _slicedToArray from "_slicedToArray";
import ContactSyncUpsellCTA from "../../../../contact_sync/native/components/ContactSyncUpsellCTA.tsx";
import get_ActivityIndicator from "Text";
import mergeGuildAvatar from "mergeGuildAvatar";
import { AnalyticEvents } from "ME";
import { ContactPermissions } from "ContactSyncLandingPage";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let closure_12;
let closure_6;
let unpackModuleId;
const require = arg1;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = { headerText: { marginTop: 32, marginHorizontal: 16, textAlign: "center" }, subheaderText: { marginVertical: 8, marginHorizontal: 16, textAlign: "center" }, input: null, otherOptionsContainer: null, rowContainer: null, background: null };
createCacheKey = { marginTop: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { marginTop: 16, paddingHorizontal: 16 };
createCacheKey[4] = { marginTop: 8 };
createCacheKey[5] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx");

export default function AddFriendScreen(navigation) {
  let c2;
  let tmp5;
  navigation = navigation.navigation;
  let contactSyncAccount;
  let dependencyMap;
  let callback;
  let tmp = createCacheKey();
  let obj = navigation(12035);
  contactSyncAccount = obj.useContactSyncAccount();
  let obj1 = navigation(12035);
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
    obj = { url: null, username: null };
    obj[0] = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
    obj[1] = userTag;
    const obj2 = contactSyncAccount(_undefined[11]);
    const formatToPlainStringResult = intl.formatToPlainString(navigation(_undefined[12]).t["6E9a1J"], obj);
    navigation(_undefined[13]).showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
  }, []);
  const items = [callback, navigation, contactSyncAccount];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        let obj = outer1_0(outer1_2[14]);
        const intl = outer1_0(outer1_2[12]).intl;
        obj = {};
        const renderHeaderTextButton = obj.getRenderHeaderTextButton(intl.string(outer1_0(outer1_2[12]).t.RDE0Sc), _slicedToArray);
        const merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      }
    });
    const result = navigation(_undefined[9]).checkContactPermissions();
    result.then((arg0) => {
      const obj = outer1_0(outer1_2[15]);
      const tmp = outer1_9;
      const tmp2 = outer1_0;
      const tmp3 = outer1_2;
      let tmp5 = arg0 === outer1_9.NOT_DETERMINED || outer1_0(outer1_2[15]).isAndroid() && arg0 === outer1_9.UNAUTHORIZED;
      if (!tmp5) {
        tmp5 = !tmp2(tmp3[9]).isContactSyncEnabled(closure_1);
        const tmp2Result = tmp2(tmp3[9]);
      }
      callback(tmp5);
    });
  }, items);
  const items1 = [callback(contactSyncAccount(4848), { absolute: true }), ];
  obj = { keyboardShouldPersistTaps: "handled", style: tmp.background, children: null };
  obj = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = navigation(1236).intl;
  obj[4] = intl.string(navigation(1236).t.GWMTSE);
  const items2 = [callback(navigation(4299).Text, obj), , , ];
  obj1 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = navigation(1236).intl;
  obj1[3] = intl2.string(navigation(1236).t["Rn/sLl"]);
  items2[1] = callback(navigation(4299).Text, obj1);
  items2[2] = callback(contactSyncAccount(13204), { style: tmp.input, autoFocusInput: false, sourcePage: navigation.route.params.sourcePage });
  const obj3 = { style: tmp.otherOptionsContainer, children: null };
  const obj4 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
  const intl3 = navigation(1236).intl;
  obj4[3] = intl3.string(navigation(1236).t.dukg0Z);
  const items3 = [callback(navigation(4299).Text, obj4), ];
  let tmp10Result = null;
  if (tmp5) {
    const obj5 = { style: null, location: "Add Friend Modal" };
    obj5[0] = tmp.rowContainer;
    tmp10Result = callback(contactSyncAccount(13206), obj5);
  }
  const obj6 = { children: null };
  items3[1] = tmp10Result;
  obj3[1] = items3;
  items2[3] = closure_11(closure_5, obj3);
  obj[2] = items2;
  items1[1] = closure_11(closure_6, obj);
  obj6[0] = items1;
  return closure_11(closure_12, obj6);
};