import noop from "noop";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let c4;
let c5;
let closure_6;
const require = arg1;
function keyExtractor(item) {
  return item.item.id;
}
function FriendsEmptyComponent() {
  const tmp = createCacheKey();
  let obj = { children: null };
  obj = { title: null, body: null, titleStyle: null, bodyStyle: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.dz4UlO);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.MBQBI7);
  ({ emptyTitle: obj2[2], emptyBody: obj2[3] } = tmp);
  const items = [callback(require(1297) /* Button */.RefreshEmptyState, obj), ];
  obj = {
    onPress() {
      let obj = callback2(4161);
      obj.hideActionSheet();
      const rootNavigationRef = callback(4045).getRootNavigationRef();
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
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl3.string(require(1236) /* getSystemLocale */.t.a7FVbE);
  obj[3] = { top: 8, left: 8, bottom: 8, right: 8 };
  const obj1 = { style: items1, variant: "text-sm/semibold", color: "text-link", children: null };
  items1 = [tmp.goToFriendsLink];
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj1[3] = intl4.string(require(1236) /* getSystemLocale */.t.a7FVbE);
  obj[4] = callback(require(4189) /* Text */.Text, obj1);
  items[1] = callback(require(4721) /* PressableBase */.PressableOpacity, obj);
  obj[0] = items;
  return callback2(closure_5, obj);
}
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { emptyTitle: null, emptyBody: null, goToFriendsLink: null };
createCacheKey = {};
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
createCacheKey.textTransform = "none";
createCacheKey.lineHeight = 24;
createCacheKey[0] = createCacheKey;
let obj1 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").colors.TEXT_SUBTLE, 16));
obj1.lineHeight = 20;
obj1.fontWeight = "600";
createCacheKey[1] = obj1;
createCacheKey[2] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetList.tsx");

export default function ActivityInviteSheetList(data) {
  data = data.data;
  const error = data.error;
  const getSendState = data.getSendState;
  const isSubmitting = data.isSubmitting;
  const onInviteSent = data.onInviteSent;
  const onPressAvatar = data.onPressAvatar;
  const items = [error, isSubmitting, getSendState, onPressAvatar, onInviteSent, data.length];
  const callback = isSubmitting.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    const obj = { start: 0 === index, end: index === data.length - 1, row: item, onPressAvatar, onInviteSent, isSubmitting, error, sendState: null };
    obj[7] = getSendState(item);
    return onInviteSent(error(getSendState[12]), obj);
  }, items);
  let obj = { contentContainerStyle: null, bounces: false, renderItem: null, data: null, keyExtractor: null, keyboardShouldPersistTaps: "always", ListEmptyComponent: null };
  obj = { paddingBottom: null, paddingHorizontal: null };
  obj[0] = error(getSendState[13])({ isKeyboardAwareOnAndroid: false }).insets.bottom + error(getSendState[5]).space.PX_16;
  obj[1] = error(getSendState[5]).space.PX_12;
  obj[0] = obj;
  obj[2] = callback;
  obj[3] = data;
  obj[4] = keyExtractor;
  obj[6] = FriendsEmptyComponent;
  return onInviteSent(data(getSendState[14]).BottomSheetFlatList, obj);
};