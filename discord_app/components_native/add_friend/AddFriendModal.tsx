// === Module 13853: AddFriendModal ===

// Module 13853 (AddFriendModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12680 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
function AddFriendModalScene(onSkip) {
  onSkip = onSkip.onSkip;
  const sourceMetadata = onSkip.sourceMetadata;
  let contactSyncAccount;
  _slicedToArray = undefined;
  let navigation;
  let tmp = closure_12();
  let obj = onSkip(contactSyncAccount[10]);
  contactSyncAccount = obj.useContactSyncAccount();
  let obj1 = onSkip(contactSyncAccount[10]);
  [tmp5, c3] = _slicedToArray(navigation.useState(!obj1.isContactSyncEnabled(contactSyncAccount)), 2);
  sourceMetadata(contactSyncAccount[11])(() => {
    AnalyticsUtilsDefault.track(constants.FRIEND_ADD_VIEWED, sourceMetadata);
    const result = ContactSyncUtils.checkContactPermissions();
    result.then((result) => {
      const obj = onSkip(contactSyncAccount[13]);
      const tmp2 = onSkip;
      const tmp3 = contactSyncAccount;
      let tmp5 = result === constants2.NOT_DETERMINED || onSkip(contactSyncAccount[13]).isAndroid() && result === constants2.UNAUTHORIZED;
      if (!tmp5) {
        tmp5 = !tmp2(tmp3[10]).isContactSyncEnabled(closure_1_2);
        const tmp2Result = tmp2(tmp3[10]);
      }
      closure_1_3(tmp5);
    });
  });
  let obj2 = onSkip(contactSyncAccount[14]);
  navigation = obj2.useNavigation();
  const items = [onSkip];
  const callback = navigation.useCallback(() => {
    if (onSkip != null) {
      tmp();
    }
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
  }, items);
  const callback1 = navigation.useCallback(() => {
    currentUser = currentUser.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      userTag = sourceMetadata(contactSyncAccount[16]).getUserTag(currentUser);
      const obj = sourceMetadata(contactSyncAccount[16]);
    }
    sourceMetadata(contactSyncAccount[12]).track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
    const intl = onSkip(contactSyncAccount[17]).intl;
    const obj2 = sourceMetadata(contactSyncAccount[12]);
    const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[17]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
    onSkip(contactSyncAccount[18]).showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
  }, []);
  const items1 = [callback, callback1, navigation];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        const obj = { source: sourceMetadata(contactSyncAccount[20]), onPress, accessibilityLabel: null };
        const intl = onSkip(contactSyncAccount[17]).intl;
        obj.accessibilityLabel = intl.string(onSkip(contactSyncAccount[17]).t.RDE0Sc);
        return closure_2_10(onSkip(contactSyncAccount[19]).HeaderActionButton, obj);
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(callback)
    };
    navigation.setOptions(obj);
  }, items1);
  obj = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = onSkip(contactSyncAccount[17]).intl;
  obj.children = intl.string(onSkip(contactSyncAccount[17]).t.GWMTSE);
  const items2 = [closure_10(onSkip(contactSyncAccount[22]).Text, obj), , , ];
  obj = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = onSkip(contactSyncAccount[17]).intl;
  obj.children = intl2.string(onSkip(contactSyncAccount[17]).t["Rn/sLl"]);
  items2[1] = closure_10(onSkip(contactSyncAccount[22]).Text, obj);
  obj1 = { style: tmp.input, autoFocusInput: false };
  items2[2] = closure_10(sourceMetadata(contactSyncAccount[23]), obj1);
  obj2 = { style: tmp.otherOptionsContainer, children: null };
  const obj3 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
  const intl3 = onSkip(contactSyncAccount[17]).intl;
  obj3.children = intl3.string(onSkip(contactSyncAccount[17]).t.dukg0Z);
  const items3 = [closure_10(onSkip(contactSyncAccount[22]).Text, obj3), ];
  let tmp14Result = null;
  if (tmp5) {
    const obj4 = { style: tmp.rowContainer, location: "Add Friend Modal" };
    tmp14Result = closure_10(sourceMetadata(contactSyncAccount[24]), obj4);
  }
  const obj5 = { keyboardShouldPersistTaps: "handled", children: null };
  items3[1] = tmp14Result;
  obj2.children = items3;
  items2[3] = closure_11(callback, obj2);
  obj5.children = items2;
  return closure_11(callback1, obj5);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_8, Fonts } = Constants);
const ContactPermissions = fn(12678).ContactPermissions;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { headerText: null, subheaderText: null, input: null, otherOptionsContainer: null, rowContainer: null };
createStyles = {};
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createStyles.marginTop = 32;
createStyles.marginHorizontal = 16;
createStyles.textAlign = "center";
createStyles.headerText = createStyles;
createStyles.subheaderText = { lineHeight: 18, marginVertical: 8, marginHorizontal: 16, textAlign: "center" };
createStyles.input = { marginTop: 16 };
createStyles.otherOptionsContainer = { marginTop: 16, paddingHorizontal: 16 };
createStyles.rowContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 8 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/add_friend/AddFriendModal.tsx");

export default function AddFriendModal(initialParams) {
  _require = initialParams;
  const items = [initialParams];
  const screens = noop.useMemo(() => {
    let obj = { ADD_FRIEND: null };
    obj = { ignoreKeyboard: true, title: null, initialParams: null, render: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.w5uwoI);
    obj.initialParams = initialParams;
    obj.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_10(closure_1_13, {});
    };
    obj.ADD_FRIEND = obj;
    return obj;
  }, items);
  return closure_10(require("Navigator").Navigator, { screens, initialRouteName: "ADD_FRIEND", headerStatusBarHeight: useSafeAreaInsetsDefault().top });
};