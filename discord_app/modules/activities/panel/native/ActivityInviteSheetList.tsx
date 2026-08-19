// discord_app/modules/activities/panel/native/ActivityInviteSheetList.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { Fonts } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importDefaultResult from "../../../rebrand/native/TextStyles.tsx";

require = fn;
function keyExtractor(item) {
  return item.item.id;
}
function FriendsEmptyComponent() {
  const tmp = callback3();
  let obj = { title: null, body: null, titleStyle: null, bodyStyle: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.dz4UlO);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.MBQBI7);
  ({ emptyTitle: obj2[2], emptyBody: obj2[3] } = tmp);
  const items = [callback(Button.RefreshEmptyState, obj), ];
  obj = {
    onPress() {
      let obj = callback2(4342);
      obj.hideActionSheet();
      const rootNavigationRef = callback(4230).getRootNavigationRef();
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
const createCacheKey = {};
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
const result = require("obj132").fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetList.tsx");

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
  let obj = { paddingBottom: error(getSendState[13])({ isKeyboardAwareOnAndroid: false }).insets.bottom + error(getSendState[5]).space.PX_16, paddingHorizontal: error(getSendState[5]).space.PX_12 };
  obj[0] = obj;
  obj[2] = callback;
  obj[3] = data;
  obj[4] = keyExtractor;
  obj[6] = FriendsEmptyComponent;
  return onInviteSent(data(getSendState[14]).BottomSheetFlatList, obj);
};