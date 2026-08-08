// discord_app/modules/instant_invite/native/components/InstantInviteFriendsList.tsx
import noop from "noop";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { PressableBase } from "../../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

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
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.dz4UlO);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.MBQBI7);
  ({ emptyTitle: obj2[2], emptyBody: obj2[3] } = tmp);
  const items = [callback(Button.RefreshEmptyState, obj), ];
  obj = {
    onPress() {
      let obj = callback2(4271);
      obj.hideActionSheet();
      const rootNavigationRef = callback(4159).getRootNavigationRef();
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
  const obj1 = { style: items1, variant: "text-sm/semibold", color: "text-link", children: null };
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
const result = require("jsxProd").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteFriendsList.tsx");

export default function InstantInviteFriendsList(code) {
  code = code.code;
  const onPressAvatar = code.onPressAvatar;
  const onInviteSent = code.onInviteSent;
  const data = code.data;
  const source = code.source;
  const items = [onPressAvatar, onInviteSent, code, source, data.length];
  const callback = data.useCallback((index) => {
    index = index.index;
    return source(onPressAvatar(onInviteSent[12]), { start: 0 === index, end: index === data.length - 1, row: index.item, onPressAvatar, onInviteSent, code, source });
  }, items);
  let obj = { contentContainerStyle: null, bounces: false, renderItem: null, data: null, keyExtractor: null, keyboardShouldPersistTaps: "always", ListEmptyComponent: null };
  obj = { paddingBottom: null, paddingHorizontal: null };
  obj[0] = onPressAvatar(onInviteSent[5]).space.PX_16 + onPressAvatar(onInviteSent[13])({ isKeyboardAwareOnAndroid: false }).insets.bottom;
  obj[1] = onPressAvatar(onInviteSent[5]).space.PX_12;
  obj[0] = obj;
  obj[2] = callback;
  obj[3] = data;
  obj[4] = keyExtractor;
  obj[6] = FriendsEmptyComponent;
  return source(code(onInviteSent[14]).BottomSheetFlatList, obj);
};