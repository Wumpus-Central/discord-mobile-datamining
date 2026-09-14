// === Module 17139: ActivityInviteSheetList ===

// Module 17139 (ActivityInviteSheetList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import RootNavigationRef from "RootNavigationRef" /* 4495 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import Text_Text from "Text/Text" /* 4632 */;
import Pressables from "Pressables" /* 5204 */;
import ActivityInviteSheetRowDefault from "ActivityInviteSheetRow" /* 17140 */;
import noop from "module_19" /* 19 */;
import TextStyles_mod from "TextStyles" /* 5605 */;

require = fn;
function keyExtractor(item) {
  return item.item.id;
}
function FriendsEmptyComponent() {
  const tmp = closure_7();
  let obj = { children: null };
  let obj3 = { title: null, body: null, titleStyle: null, bodyStyle: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t.dz4UlO);
  const intl2 = util.intl;
  obj3.body = intl2.string(util.t.MBQBI7);
  ({ emptyTitle: obj2.titleStyle, emptyBody: obj2.bodyStyle } = tmp);
  const items = [React4(native.RefreshEmptyState, obj3), ];
  const obj4 = {
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (null != rootNavigationRef) {
        const obj3 = { screen: "add-friends", params: { sourcePage: "Instant Invite Empty State" } };
        rootNavigationRef.navigate("friends", obj3);
      }
    },
    accessibilityRole: "link",
    accessibilityLabel: null,
    hitSlop: null,
    children: null
  };
  const intl3 = util.intl;
  obj4.accessibilityLabel = intl3.string(util.t.a7FVbE);
  obj4.hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };
  const obj7 = { style: null, variant: "text-sm/semibold", color: "text-link", children: null };
  const items1 = [tmp.goToFriendsLink];
  obj7.style = items1;
  const intl4 = util.intl;
  obj7.children = intl4.string(util.t.a7FVbE);
  obj4.children = React4(Text_Text.Text, obj7);
  items[1] = React4(Pressables.PressableOpacity, obj4);
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
}
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
const obj2 = { emptyTitle: null, emptyBody: null, goToFriendsLink: null };
let obj3 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3.textTransform = "none";
obj3.lineHeight = 24;
obj2.emptyTitle = obj3;
let obj4 = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
obj4.lineHeight = 20;
obj4.fontWeight = "600";
obj2.emptyBody = obj4;
obj2.goToFriendsLink = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetList.tsx");

export default function ActivityInviteSheetList(data) {
  data = data.data;
  const error = data.error;
  const getSendState = data.getSendState;
  const isSubmitting = data.isSubmitting;
  const onInviteSent = data.onInviteSent;
  const onPressAvatar = data.onPressAvatar;
  const items = [error, isSubmitting, getSendState, onPressAvatar, onInviteSent, data.length];
  const callback = isSubmitting.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = { start: 0 === index, end: index === data.length - 1, row: item, onPressAvatar, onInviteSent, isSubmitting, error, sendState: getSendState(item) };
    return React4(ActivityInviteSheetRowDefault, obj);
  }, items);
  let obj = { contentContainerStyle: { paddingBottom: error(getSendState[13])({ isKeyboardAwareOnAndroid: false }).insets.bottom + error(getSendState[5]).space.PX_16, paddingHorizontal: error(getSendState[5]).space.PX_12 }, bounces: false, renderItem: callback, data, keyExtractor, keyboardShouldPersistTaps: "always", ListEmptyComponent: FriendsEmptyComponent };
  return onInviteSent(data(getSendState[14]).BottomSheetFlatList, obj);
};