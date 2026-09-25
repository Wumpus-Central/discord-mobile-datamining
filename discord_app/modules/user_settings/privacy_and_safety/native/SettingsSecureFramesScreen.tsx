// === Module 15440: SettingsSecureFramesScreen ===

// Module 15440 (SettingsSecureFramesScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7617 */;
import UserActionCreators from "UserActionCreators" /* 7619 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9152 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function UserListItem(userId) {
  userId = userId.userId;
  const onPress = userId.onPress;
  let analyticsLocations;
  ({ start, end } = userId);
  const items = [UserStore];
  const stateFromStores = userId(analyticsLocations[7]).useStateFromStores(items, () => UserStore.getUser(userId));
  const obj = userId(analyticsLocations[7]);
  const secureFramesUserVerifiedKeys = userId(analyticsLocations[8]).useSecureFramesUserVerifiedKeys(userId);
  const obj2 = userId(analyticsLocations[8]);
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
    const obj4 = { user: stateFromStores, guildId: "Array", size: tmp(tmp2[14]).AvatarSizes.REFRESH_MEDIUM_32 };
    tmp8Result = closure_7(tmp(tmp2[14]).Avatar, obj4);
  }
  const obj5 = { icon: tmp8Result, subLabel: null, label: null, start: null, end: null, onPress: null, onLongPress: null, trailing: null };
  const intl = tmp(tmp2[15]).intl;
  obj5.subLabel = intl.formatToPlainString(userId(analyticsLocations[15]).t["/MBjYF"], { count: secureFramesUserVerifiedKeys.length });
  obj5.label = formattedName;
  obj5.start = start;
  obj5.end = end;
  obj5.onPress = callback;
  obj5.onLongPress = callback1;
  obj5.trailing = closure_7(userId(analyticsLocations[16]).TableRowArrow, {});
  return closure_7(userId(analyticsLocations[13]).TableRow, obj5);
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
  const tmp = closure_9();
  const token = navigation(secureFramesVerifiedUserIds[17]).useToken(callback(secureFramesVerifiedUserIds[6]).modules.mobile.TABLE_ROW_HEIGHT);
  const obj = navigation(secureFramesVerifiedUserIds[17]);
  navigation = navigation(secureFramesVerifiedUserIds[18]).useNavigation();
  const items = [navigation];
  callback = noop.useCallback((userId) => {
    navigation.navigate(UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES, { userId });
  }, items);
  const obj2 = navigation(secureFramesVerifiedUserIds[18]);
  secureFramesVerifiedUserIds = navigation(secureFramesVerifiedUserIds[19]).useSecureFramesVerifiedUserIds();
  const items1 = [callback, secureFramesVerifiedUserIds];
  let tmp8 = null;
  if (0 !== secureFramesVerifiedUserIds.length) {
    const obj4 = { style: tmp.list, children: null };
    const obj5 = { variant: "text-sm/semibold", color: "text-default", children: null };
    const intl = tmp2(tmp3[15]).intl;
    obj5.children = intl.string(tmp2(tmp3[15]).t["5b3FNI"]);
    const items2 = [closure_7(tmp2(tmp3[20]).Text, obj5), , ];
    const obj6 = { style: null, children: null };
    const obj7 = { minHeight: secureFramesVerifiedUserIds.length * token };
    obj6.style = obj7;
    const obj8 = { keyExtractor, getItemType, renderItem, data: tmp7 };
    obj6.children = closure_7(tmp2(tmp3[21]).FlashList, obj8);
    items2[1] = closure_7(View, obj6);
    const obj9 = { variant: "text-xs/normal", color: "text-default", children: null };
    const intl2 = tmp2(tmp3[15]).intl;
    const obj10 = { helpArticle: tmp2(tmp3[22]).getSecureFramesVerifiedDevicesHelpdeskArticle() };
    obj9.children = intl2.format(tmp2(tmp3[15]).t["7w9ymD"], obj10);
    items2[2] = closure_7(tmp2(tmp3[20]).Text, obj9);
    obj4.children = items2;
    tmp8 = closure_8(View, obj4);
    const tmp2Result = tmp2(tmp3[22]);
  }
  return tmp8;
}
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, header: null, list: null };
let obj3 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.header = { marginTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
let obj4 = { marginTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
obj2.list = { flexGrow: 1, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const constants = { USER: "USER" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesScreen.tsx");

export default function SettingsSecureFramesScreen() {
  const tmp = closure_9();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.header, children: null };
  const obj3 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["9Q/PQv"]);
  const items = [React5(Text_Text.Text, obj3), ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  const obj5 = { helpArticle: SecureFramesUtils.getSecureFramesHelpdeskArticle() };
  obj4.children = intl2.format(util.t["8IwQfG"], obj5);
  items[1] = React5(Text_Text.Text, obj4);
  obj2.children = items;
  const items1 = [React6(View, obj2), React5(SettingsSecureFramesFooter, {})];
  obj.children = items1;
  return React6(View, obj);
};