// === Module 18789: AddFriendScreen ===

// Module 18789 (AddFriendScreen)
import nativeDefault from "native" /* 575 */;
import ContactSyncUtils from "ContactSyncUtils" /* 14198 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1384 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1072).AnalyticEvents;
const ContactPermissions = fn(14196).ContactPermissions;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { headerText: { marginTop: 32, marginHorizontal: 16, textAlign: "center" }, subheaderText: { marginVertical: 8, marginHorizontal: 16, textAlign: "center" }, input: { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, otherOptionsContainer: { marginTop: 16, paddingHorizontal: 16 }, rowContainer: { marginTop: 8 }, background: null };
let obj3 = { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.background = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx");

export default function AddFriendScreen(navigation) {
  navigation = navigation.navigation;
  dependencyMap = undefined;
  let callback;
  const tmp = closure_13();
  const contactSyncAccount = navigation(14198).useContactSyncAccount();
  let obj = navigation(14198);
  let obj2 = navigation(14198);
  [tmp5, c2] = callback(noop.useState(!navigation(14198).isContactSyncEnabled(contactSyncAccount)), 2);
  callback = noop.useCallback(() => {
    currentUser = currentUser.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      userTag = contactSyncAccount(_undefined[10]).getUserTag(currentUser);
      const obj = contactSyncAccount(_undefined[10]);
    }
    contactSyncAccount(_undefined[11]).track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
    const intl = navigation(_undefined[12]).intl;
    const obj2 = contactSyncAccount(_undefined[11]);
    const obj3 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
    const formatToPlainStringResult = intl.formatToPlainString(navigation(_undefined[12]).t["6E9a1J"], { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag });
    navigation(_undefined[13]).showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
    const obj4 = navigation(_undefined[13]);
  }, []);
  const items = [callback, navigation, contactSyncAccount];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        const intl = navigation(1114).intl;
        const renderHeaderTextButton = navigation(9791).getRenderHeaderTextButton(intl.string(navigation(1114).t.RDE0Sc), callback);
        const merged = Object.assign(arg0);
        return renderHeaderTextButton({});
      }
    });
    const result = ContactSyncUtils.checkContactPermissions();
    result.then((result) => {
      const obj = navigation(1376);
      let tmp5 = result === constants2.NOT_DETERMINED || navigation(1376).isAndroid() && result === constants2.UNAUTHORIZED;
      if (!tmp5) {
        tmp5 = !navigation(14198).isContactSyncEnabled(contactSyncAccount);
        const tmp2Result = navigation(14198);
      }
      dependencyMap(tmp5);
      const tmp4 = navigation(1376).isAndroid() && result === constants2.UNAUTHORIZED;
    });
  }, items);
  const items1 = [closure_10(contactSyncAccount(10716), { absolute: true }), ];
  let obj3 = { keyboardShouldPersistTaps: "handled", style: tmp.background, children: null };
  let obj4 = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = navigation(1114).intl;
  obj4.children = intl.string(navigation(1114).t.GWMTSE);
  const items2 = [closure_10(navigation(5619).Text, obj4), , , ];
  const obj5 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = navigation(1114).intl;
  obj5.children = intl2.string(navigation(1114).t["Rn/sLl"]);
  items2[1] = closure_10(navigation(5619).Text, obj5);
  items2[2] = closure_10(contactSyncAccount(15634), { style: tmp.input, autoFocusInput: false, sourcePage: navigation.route.params.sourcePage });
  const obj7 = { style: tmp.otherOptionsContainer, children: null };
  const obj8 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
  const intl3 = navigation(1114).intl;
  obj8.children = intl3.string(navigation(1114).t.dukg0Z);
  const items3 = [closure_10(navigation(5619).Text, obj8), ];
  let tmp10Result = null;
  if (tmp5) {
    const obj9 = { style: tmp.rowContainer, location: "Add Friend Modal" };
    tmp10Result = closure_10(contactSyncAccount(15635), obj9);
  }
  const obj10 = { children: null };
  items3[1] = tmp10Result;
  obj7.children = items3;
  items2[3] = closure_11(closure_5, obj7);
  obj3.children = items2;
  items1[1] = closure_11(closure_6, obj3);
  obj10.children = items1;
  return closure_11(closure_12, obj10);
};