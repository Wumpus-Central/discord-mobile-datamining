// === Module 15056: UserListItem ===

// Module 15056 (UserListItem)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4739 */;
import getCurrentUserSigningKey from "getCurrentUserSigningKey" /* 9747 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import { UserSettingsSections } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function UserListItem(userId) {
  userId = userId.userId;
  const onPress = userId.onPress;
  let analyticsLocations;
  ({ start, end } = userId);
  let obj = userId(analyticsLocations[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getUser(userId));
  obj1 = userId(analyticsLocations[8]);
  const secureFramesUserVerifiedKeys = obj1.useSecureFramesUserVerifiedKeys(userId);
  const items1 = [userId];
  const formattedName = onPress(analyticsLocations[9]).getFormattedName(stateFromStores);
  const effect = React.useEffect(() => {
    const user = userId(analyticsLocations[10]).getUser(userId);
  }, items1);
  const items2 = [onPress, userId];
  const callback = React.useCallback(() => {
    onPress(userId);
  }, items2);
  analyticsLocations = onPress(analyticsLocations[11])().analyticsLocations;
  const items3 = [analyticsLocations, userId];
  const callback1 = React.useCallback(() => {
    onPress(analyticsLocations[12])({ userId, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  let tmp8Result = null != stateFromStores;
  if (tmp8Result) {
    obj = { user: null, guildId: "Array", size: -1 };
    obj[0] = stateFromStores;
    obj[2] = tmp(tmp2[14]).AvatarSizes.REFRESH_MEDIUM_32;
    tmp8Result = tmp8(tmp(tmp2[14]).Avatar, obj);
  }
  obj = { icon: tmp8Result, subLabel: null, label: null, start: null, end: null, onPress: null, onLongPress: null, trailing: null };
  const intl = tmp(tmp2[15]).intl;
  obj1 = { count: secureFramesUserVerifiedKeys.length };
  obj[1] = intl.formatToPlainString(userId(analyticsLocations[15]).t["/MBjYF"], obj1);
  obj[2] = formattedName;
  obj[3] = start;
  obj[4] = end;
  obj[5] = callback;
  obj[6] = callback1;
  obj[7] = closure_7(userId(analyticsLocations[16]).TableRowArrow, {});
  return closure_7(userId(analyticsLocations[13]).TableRow, obj);
}
function renderItem(item) {
  item = item.item;
  if (item.type === constants.USER) {
    const obj = {};
    const merged = Object.assign(item);
    return callback(UserListItem, obj);
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
  obj1 = navigation(secureFramesVerifiedUserIds[18]);
  navigation = obj1.useNavigation();
  const items = [navigation];
  callback = React.useCallback((userId) => {
    navigation.navigate(closure_1_6.SECURE_FRAMES_VERIFIED_DEVICES, { userId });
  }, items);
  let obj2 = navigation(secureFramesVerifiedUserIds[19]);
  secureFramesVerifiedUserIds = obj2.useSecureFramesVerifiedUserIds();
  const items1 = [callback, secureFramesVerifiedUserIds];
  let tmp8 = null;
  if (0 !== secureFramesVerifiedUserIds.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.list;
    obj = { variant: "text-sm/semibold", color: "text-default", children: null };
    const intl = tmp2(tmp3[15]).intl;
    obj[2] = intl.string(tmp2(tmp3[15]).t["5b3FNI"]);
    const items2 = [callback(tmp2(tmp3[20]).Text, obj), , ];
    obj1 = { style: null, children: null };
    obj2 = { minHeight: null };
    obj2[0] = secureFramesVerifiedUserIds.length * token;
    obj1[0] = obj2;
    const obj3 = { keyExtractor: null, getItemType: null, renderItem: null, data: null };
    obj3[0] = keyExtractor;
    obj3[1] = getItemType;
    obj3[2] = renderItem;
    obj3[3] = tmp7;
    obj1[1] = callback(tmp2(tmp3[21]).FlashList, obj3);
    items2[1] = callback(View, obj1);
    const obj4 = { variant: "text-xs/normal", color: "text-default", children: null };
    const intl2 = tmp2(tmp3[15]).intl;
    const obj5 = { helpArticle: null };
    obj5[0] = tmp2(tmp3[22]).getSecureFramesVerifiedDevicesHelpdeskArticle();
    obj4[2] = intl2.format(tmp2(tmp3[15]).t["7w9ymD"], obj5);
    items2[2] = callback(tmp2(tmp3[20]).Text, obj4);
    obj[1] = items2;
    tmp8 = callback2(View, obj);
    const tmp2Result = tmp2(tmp3[22]);
  }
  return tmp8;
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, header: null, list: null };
createCacheKey = { flexGrow: 1, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_8 };
let obj1 = { marginTop: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_8 };
createCacheKey[2] = { flexGrow: 1, gap: ThemesDefault.space.PX_8 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { USER: "USER" };
let obj2 = { flexGrow: 1, gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesScreen.tsx");

export default function SettingsSecureFramesScreen() {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  obj = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["9Q/PQv"]);
  const items = [callback(Text.Text, obj), ];
  obj1 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  const obj2 = { helpArticle: getCurrentUserSigningKey.getSecureFramesHelpdeskArticle() };
  obj1[2] = intl2.format(getSystemLocale.t["8IwQfG"], obj2);
  items[1] = callback(Text.Text, obj1);
  obj[1] = items;
  const items1 = [callback2(View, obj), callback(SettingsSecureFramesFooter, {})];
  obj[1] = items1;
  return callback2(View, obj);
};