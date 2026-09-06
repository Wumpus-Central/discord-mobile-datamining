// discord_app/modules/user_settings/privacy_and_safety/native/SettingsSecureFramesScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import UserActionCreators from "../../../../actions/UserActionCreators.tsx";
import SecureFramesUtils from "../../../rtc/SecureFramesUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function UserListItem(userId) {
  userId = userId.userId;
  const onPress = userId.onPress;
  let analyticsLocations;
  ({ start, end } = userId);
  let obj = userId(analyticsLocations[7]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj1 = userId(analyticsLocations[8]);
  const secureFramesUserVerifiedKeys = obj1.useSecureFramesUserVerifiedKeys(userId);
  const items1 = [userId];
  const formattedName = onPress(analyticsLocations[9]).getFormattedName(stateFromStores);
  const effect = noop.useEffect(() => {
    const user = UserActionCreators.getUser(userId);
  }, items1);
  const items2 = [onPress, userId];
  const callback = noop.useCallback(() => {
    onPress(userId);
  }, items2);
  analyticsLocations = onPress(analyticsLocations[11])().analyticsLocations;
  const items3 = [analyticsLocations, userId];
  const callback1 = noop.useCallback(() => {
    showUserProfileActionSheetDefault({ userId, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  let tmp8Result = null != stateFromStores;
  if (tmp8Result) {
    obj = { user: stateFromStores, guildId: "Array", size: tmp(tmp2[14]).AvatarSizes.REFRESH_MEDIUM_32 };
    tmp8Result = closure_7(tmp(tmp2[14]).Avatar, obj);
  }
  obj = {
    icon: tmp8Result,
    subLabel: null,
    label: null,
    start: null,
    end: null,
    onPress: null,
    onLongPress: null,
    trailing: null,
  };
  const intl = tmp(tmp2[15]).intl;
  obj1 = { count: secureFramesUserVerifiedKeys.length };
  obj.subLabel = intl.formatToPlainString(userId(analyticsLocations[15]).t["/MBjYF"], obj1);
  obj.label = formattedName;
  obj.start = start;
  obj.end = end;
  obj.onPress = callback;
  obj.onLongPress = callback1;
  obj.trailing = closure_7(userId(analyticsLocations[16]).TableRowArrow, {});
  return closure_7(userId(analyticsLocations[13]).TableRow, obj);
}
function renderItem(item) {
  item = item.item;
  if (item.type === constants.USER) {
    const obj = {};
    const merged = Object.assign(item);
    return React5(UserListItem, obj);
  }
}
function getItemType(type) {
  return type.type;
}
function keyExtractor(type) {
  return type.type === constants.USER ? type.userId : undefined;
}
function SettingsSecureFramesFooter() {
  let obj = navigation(secureFramesVerifiedUserIds[17]);
  const token = obj.useToken(callback(secureFramesVerifiedUserIds[6]).modules.mobile.TABLE_ROW_HEIGHT);
  let obj1 = navigation(secureFramesVerifiedUserIds[18]);
  navigation = obj1.useNavigation();
  const items = [navigation];
  callback = noop.useCallback((userId) => {
    navigation.navigate(UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES, { userId });
  }, items);
  let obj2 = navigation(secureFramesVerifiedUserIds[19]);
  secureFramesVerifiedUserIds = obj2.useSecureFramesVerifiedUserIds();
  const items1 = [callback, secureFramesVerifiedUserIds];
  let tmp8 = null;
  if (0 !== secureFramesVerifiedUserIds.length) {
    obj = { style: tmp.list, children: null };
    obj = { variant: "text-sm/semibold", color: "text-default", children: null };
    const intl = tmp2(tmp3[15]).intl;
    obj.children = intl.string(tmp2(tmp3[15]).t["5b3FNI"]);
    const items2 = [closure_7(tmp2(tmp3[20]).Text, obj), ,];
    obj1 = { style: null, children: null };
    obj2 = { minHeight: secureFramesVerifiedUserIds.length * token };
    obj1.style = obj2;
    const obj3 = { keyExtractor, getItemType, renderItem, data: tmp7 };
    obj1.children = closure_7(tmp2(tmp3[21]).FlashList, obj3);
    items2[1] = closure_7(View, obj1);
    const obj4 = { variant: "text-xs/normal", color: "text-default", children: null };
    const intl2 = tmp2(tmp3[15]).intl;
    const obj5 = { helpArticle: tmp2(tmp3[22]).getSecureFramesVerifiedDevicesHelpdeskArticle() };
    obj4.children = intl2.format(tmp2(tmp3[15]).t["7w9ymD"], obj5);
    items2[2] = closure_7(tmp2(tmp3[20]).Text, obj4);
    obj.children = items2;
    tmp8 = closure_8(View, obj);
    const tmp2Result = tmp2(tmp3[22]);
  }
  return tmp8;
}
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, list: null };
createStyles = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.header = { marginTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
let obj1 = { marginTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
createStyles.list = { flexGrow: 1, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(createStyles);
const constants = { USER: "USER" };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/SettingsSecureFramesScreen.tsx",
);

export default function SettingsSecureFramesScreen() {
  const tmp = closure_9();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  obj = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["9Q/PQv"]);
  const items = [React5(Text_Text.Text, obj)];
  const obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  const obj2 = { helpArticle: SecureFramesUtils.getSecureFramesHelpdeskArticle() };
  obj1.children = intl2.format(util.t["8IwQfG"], obj2);
  items[1] = React5(Text_Text.Text, obj1);
  obj.children = items;
  const items1 = [React6(View, obj), React5(SettingsSecureFramesFooter, {})];
  obj.children = items1;
  return React6(View, obj);
}
