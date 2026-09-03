// === Module 16864: keyExtractor ===

// Module 16864 (keyExtractor)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 1296 */;
import Text from "Text" /* 4474 */;
import PressableBase from "PressableBase" /* 5077 */;
import closure_3 from "noop" /* 19 */;
import { Fonts } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importDefaultResult from "createTextStyle" /* 5470 */;

require = arg1;
function keyExtractor(item) {
  return item.item.id;
}
function FriendsEmptyComponent() {
  const tmp = callback3();
  let obj = { children: null };
  obj = { title: null, body: null, titleStyle: null, bodyStyle: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.dz4UlO);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.MBQBI7);
  ({ emptyTitle: obj2[2], emptyBody: obj2[3] } = tmp);
  const items = [callback(Button.RefreshEmptyState, obj), ];
  obj = {
    onPress() {
      let obj = callback2(4445);
      obj.hideActionSheet();
      const rootNavigationRef = callback(4333).getRootNavigationRef();
      if (null != rootNavigationRef) {
        obj = { screen: "add-friends", params: null };
        obj[1] = { sourcePage: "Instant Invite Empty State" };
        rootNavigationRef.navigate("friends", obj);
      }
    },
    accessibilityRole: "link",
    accessibilityLabel: null,
    hitSlop: null,
    children: null
  };
  const intl3 = getSystemLocale.intl;
  obj[2] = intl3.string(getSystemLocale.t.a7FVbE);
  obj[3] = { top: 8, left: 8, bottom: 8, right: 8 };
  obj1 = { style: items1, variant: "text-sm/semibold", color: "text-link", children: null };
  items1 = [tmp.goToFriendsLink];
  const intl4 = getSystemLocale.intl;
  obj1[3] = intl4.string(getSystemLocale.t.a7FVbE);
  obj[4] = callback(Text.Text, obj1);
  items[1] = callback(PressableBase.PressableOpacity, obj);
  obj[0] = items;
  return callback2(closure_5, obj);
}
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { emptyTitle: null, emptyBody: null, goToFriendsLink: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
createCacheKey.textTransform = "none";
createCacheKey.lineHeight = 24;
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_SUBTLE, 16));
obj1.lineHeight = 20;
obj1.fontWeight = "600";
createCacheKey[1] = obj1;
createCacheKey[2] = { textAlign: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const importDefaultResult1 = importDefaultResult;
const result = require("set").fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetList.tsx");

export default function ActivityInviteSheetList(data) {
  data = data.data;
  error = data.error;
  const getSendState = data.getSendState;
  const isSubmitting = data.isSubmitting;
  const onInviteSent = data.onInviteSent;
  const onPressAvatar = data.onPressAvatar;
  const items = [error, isSubmitting, getSendState, onPressAvatar, onInviteSent, data.length];
  const callback = isSubmitting.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = { start: 0 === index, end: index === data.length - 1, row: item, onPressAvatar, onInviteSent, isSubmitting, error, sendState: getSendState(item) };
    return onInviteSent(error(getSendState[12]), obj);
  }, items);
  let obj = { contentContainerStyle: null, bounces: false, renderItem: null, data: null, keyExtractor: null, keyboardShouldPersistTaps: "always", ListEmptyComponent: null };
  obj = { paddingBottom: error(getSendState[13])({ isKeyboardAwareOnAndroid: false }).insets.bottom + error(getSendState[5]).space.PX_16, paddingHorizontal: error(getSendState[5]).space.PX_12 };
  obj[0] = obj;
  obj[2] = callback;
  obj[3] = data;
  obj[4] = keyExtractor;
  obj[6] = FriendsEmptyComponent;
  return onInviteSent(data(getSendState[14]).BottomSheetFlatList, obj);
};