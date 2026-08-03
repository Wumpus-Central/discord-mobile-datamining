import _slicedToArray from "_slicedToArray";
import HeaderActionButton from "HeaderActionButton";
import get_ActivityIndicator from "getSystemLocale";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { ContactPermissions } from "ContactSyncLandingPage";
import jsxProd from "HeaderBackImage";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let Fonts;
let c10;
let c5;
let closure_6;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function AddFriendModalScene(onSkip) {
  let c3;
  let tmp5;
  onSkip = onSkip.onSkip;
  const sourceMetadata = onSkip.sourceMetadata;
  let contactSyncAccount;
  let callback;
  let navigation;
  callback = undefined;
  let callback1;
  let tmp = createCacheKey();
  let obj = onSkip(contactSyncAccount[10]);
  contactSyncAccount = obj.useContactSyncAccount();
  let obj1 = onSkip(contactSyncAccount[10]);
  [tmp5, c3] = callback(navigation.useState(!obj1.isContactSyncEnabled(contactSyncAccount)), 2);
  sourceMetadata(contactSyncAccount[11])(() => {
    sourceMetadata(contactSyncAccount[12]).track(outer1_8.FRIEND_ADD_VIEWED, sourceMetadata);
    let obj = sourceMetadata(contactSyncAccount[12]);
    const result = onSkip(contactSyncAccount[10]).checkContactPermissions();
    result.then((arg0) => {
      const obj = outer1_0(outer1_2[13]);
      const tmp = outer1_9;
      const tmp2 = outer1_0;
      const tmp3 = outer1_2;
      let tmp5 = arg0 === outer1_9.NOT_DETERMINED || outer1_0(outer1_2[13]).isAndroid() && arg0 === outer1_9.UNAUTHORIZED;
      if (!tmp5) {
        tmp5 = !tmp2(tmp3[10]).isContactSyncEnabled(closure_2);
        const tmp2Result = tmp2(tmp3[10]);
      }
      callback(tmp5);
    });
  });
  let obj2 = onSkip(contactSyncAccount[14]);
  navigation = obj2.useNavigation();
  const items = [onSkip];
  callback = navigation.useCallback(() => {
    if (onSkip != null) {
      tmp();
    }
    let arr = sourceMetadata(contactSyncAccount[15]);
    arr = arr.pop();
  }, items);
  callback1 = navigation.useCallback(() => {
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
        const obj = { source: null, onPress: null, accessibilityLabel: null };
        obj[0] = outer1_1(outer1_2[20]);
        obj[1] = closure_6;
        const intl = outer1_0(outer1_2[17]).intl;
        obj[2] = intl.string(outer1_0(outer1_2[17]).t.RDE0Sc);
        return outer1_10(outer1_0(outer1_2[19]).HeaderActionButton, obj);
      },
      headerLeft: null
    };
    obj[1] = onSkip(contactSyncAccount[21]).getHeaderCloseButton(callback);
    navigation.setOptions(obj);
  }, items1);
  obj = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = onSkip(contactSyncAccount[17]).intl;
  obj[4] = intl.string(onSkip(contactSyncAccount[17]).t.GWMTSE);
  const items2 = [callback2(onSkip(contactSyncAccount[22]).Text, obj), , , ];
  obj = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = onSkip(contactSyncAccount[17]).intl;
  obj[3] = intl2.string(onSkip(contactSyncAccount[17]).t["Rn/sLl"]);
  items2[1] = callback2(onSkip(contactSyncAccount[22]).Text, obj);
  obj1 = { style: tmp.input, autoFocusInput: false };
  items2[2] = callback2(sourceMetadata(contactSyncAccount[23]), obj1);
  obj2 = { style: tmp.otherOptionsContainer, children: null };
  const obj3 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
  const intl3 = onSkip(contactSyncAccount[17]).intl;
  obj3[3] = intl3.string(onSkip(contactSyncAccount[17]).t.dukg0Z);
  const items3 = [callback2(onSkip(contactSyncAccount[22]).Text, obj3), ];
  let tmp14Result = null;
  if (tmp5) {
    const obj4 = { style: null, location: "Add Friend Modal" };
    obj4[0] = tmp.rowContainer;
    tmp14Result = callback2(sourceMetadata(contactSyncAccount[24]), obj4);
  }
  const obj5 = { keyboardShouldPersistTaps: "handled", children: null };
  items3[1] = tmp14Result;
  obj2[1] = items3;
  items2[3] = closure_11(callback, obj2);
  obj5[1] = items2;
  return closure_11(callback1, obj5);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: metroImportAll, Fonts } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { headerText: null, subheaderText: null, input: null, otherOptionsContainer: null, rowContainer: null };
createCacheKey = {};
let merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey.marginTop = 32;
createCacheKey.marginHorizontal = 16;
createCacheKey.textAlign = "center";
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { lineHeight: 18, marginVertical: 8, marginHorizontal: 16, textAlign: "center" };
createCacheKey[2] = { marginTop: 16 };
createCacheKey[3] = { marginTop: 16, paddingHorizontal: 16 };
createCacheKey[4] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginTop: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginTop: 8 };
let result = require("get ActivityIndicator").fileFinishedImporting("components_native/add_friend/AddFriendModal.tsx");

export default function AddFriendModal(arg0) {
  const _require = arg0;
  const items = [arg0];
  const screens = React.useMemo(() => {
    let obj = { ADD_FRIEND: null };
    obj = { ignoreKeyboard: true, title: null, initialParams: null, render: null };
    const intl = callback(outer1_2[17]).intl;
    obj[1] = intl.string(callback(outer1_2[17]).t.w5uwoI);
    obj[2] = callback;
    obj[3] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback(closure_13, {});
    };
    obj[0] = obj;
    return obj;
  }, items);
  return callback2(_require(5574).Navigator, { screens, initialRouteName: "ADD_FRIEND", headerStatusBarHeight: importDefault(1581)().top });
};