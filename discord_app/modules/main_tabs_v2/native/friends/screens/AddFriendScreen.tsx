// === Module 16766: AddFriendScreen ===

// Module 16766 (AddFriendScreen)
import nativeDefault from "native" /* 576 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12680 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const ContactPermissions = fn(12678).ContactPermissions;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
fn(4560);
let createStyles = { headerText: { marginTop: 32, marginHorizontal: 16, textAlign: "center" }, subheaderText: { marginVertical: 8, marginHorizontal: 16, textAlign: "center" }, input: null, otherOptionsContainer: null, rowContainer: null, background: null };
createStyles = { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.input = createStyles;
createStyles.otherOptionsContainer = { marginTop: 16, paddingHorizontal: 16 };
createStyles.rowContainer = { marginTop: 8 };
createStyles.background = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx");

export default function AddFriendScreen(navigation) {
  navigation = navigation.navigation;
  dependencyMap = undefined;
  let callback;
  let tmp = closure_13();
  let obj = navigation(12680);
  const contactSyncAccount = obj.useContactSyncAccount();
  let obj1 = navigation(12680);
  [tmp5, c2] = callback(noop.useState(!obj1.isContactSyncEnabled(contactSyncAccount)), 2);
  callback = noop.useCallback(() => {
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
  }, []);
  const items = [callback, navigation, contactSyncAccount];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        navigation(7863);
        const intl = navigation(1114).intl;
        const obj = {};
        const renderHeaderTextButton = obj.getRenderHeaderTextButton(intl.string(navigation(1114).t.RDE0Sc), callback);
        const merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      }
    });
    const result = ContactSyncUtils.checkContactPermissions();
    result.then((result) => {
      const obj = navigation(1115);
      const tmp2 = navigation;
      let tmp5 = result === constants2.NOT_DETERMINED || navigation(1115).isAndroid() && result === constants2.UNAUTHORIZED;
      if (!tmp5) {
        tmp5 = !tmp2(12680).isContactSyncEnabled(contactSyncAccount);
        const tmp2Result = tmp2(12680);
      }
      dependencyMap(tmp5);
    });
  }, items);
  const items1 = [closure_10(contactSyncAccount(5125), { absolute: true }), ];
  obj = { keyboardShouldPersistTaps: "handled", style: tmp.background, children: null };
  obj = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = navigation(1114).intl;
  obj.children = intl.string(navigation(1114).t.GWMTSE);
  const items2 = [closure_10(navigation(4556).Text, obj), , , ];
  obj1 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = navigation(1114).intl;
  obj1.children = intl2.string(navigation(1114).t["Rn/sLl"]);
  items2[1] = closure_10(navigation(4556).Text, obj1);
  items2[2] = closure_10(contactSyncAccount(13855), { style: tmp.input, autoFocusInput: false, sourcePage: navigation.route.params.sourcePage });
  const obj3 = { style: tmp.otherOptionsContainer, children: null };
  const obj4 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
  const intl3 = navigation(1114).intl;
  obj4.children = intl3.string(navigation(1114).t.dukg0Z);
  const items3 = [closure_10(navigation(4556).Text, obj4), ];
  let tmp10Result = null;
  if (tmp5) {
    const obj5 = { style: tmp.rowContainer, location: "Add Friend Modal" };
    tmp10Result = closure_10(contactSyncAccount(13857), obj5);
  }
  const obj6 = { children: null };
  items3[1] = tmp10Result;
  obj3.children = items3;
  items2[3] = closure_11(closure_5, obj3);
  obj.children = items2;
  items1[1] = closure_11(closure_6, obj);
  obj6.children = items1;
  return closure_11(closure_12, obj6);
};