// === Module 9892: InstantInviteFriendsList ===

// Module 9892 (InstantInviteFriendsList)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import InstantInviteRowDefault from "InstantInviteRow" /* 9893 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
function keyExtractor(item) {
  return item.item.id;
}
function FriendsEmptyComponent() {
  const tmp = closure_7();
  let obj = { children: null };
  obj = { title: null, body: null, titleStyle: null, bodyStyle: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.dz4UlO);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.MBQBI7);
  ({ emptyTitle: obj2.titleStyle, emptyBody: obj2.bodyStyle } = tmp);
  const items = [React4(native.RefreshEmptyState, obj), ];
  obj = {
    onPress() {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (null != rootNavigationRef) {
        obj = { screen: "add-friends", params: { sourcePage: "Instant Invite Empty State" } };
        rootNavigationRef.navigate("friends", obj);
      }
    },
    accessibilityRole: "link",
    accessibilityLabel: null,
    hitSlop: null,
    children: null
  };
  const intl3 = util.intl;
  obj.accessibilityLabel = intl3.string(util.t.a7FVbE);
  obj.hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };
  const obj1 = { style: null, variant: "text-sm/semibold", color: "text-link", children: null };
  const items1 = [tmp.goToFriendsLink];
  obj1.style = items1;
  const intl4 = util.intl;
  obj1.children = intl4.string(util.t.a7FVbE);
  obj.children = React4(Text_Text.Text, obj1);
  items[1] = React4(Pressables.PressableOpacity, obj);
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
}
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { emptyTitle: null, emptyBody: null, goToFriendsLink: null };
createStyles = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
createStyles.textTransform = "none";
createStyles.lineHeight = 24;
createStyles.emptyTitle = createStyles;
let obj1 = {};
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
obj1.lineHeight = 20;
obj1.fontWeight = "600";
createStyles.emptyBody = obj1;
createStyles.goToFriendsLink = { textAlign: "center" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteFriendsList.tsx");

export default function InstantInviteFriendsList(code) {
  code = code.code;
  const onPressAvatar = code.onPressAvatar;
  const onInviteSent = code.onInviteSent;
  const data = code.data;
  const source = code.source;
  const items = [onPressAvatar, onInviteSent, code, source, data.length];
  const callback = data.useCallback((row) => {
    const index = row.index;
    return React4(InstantInviteRowDefault, { start: 0 === index, end: index === data.length - 1, row: row.item, onPressAvatar, onInviteSent, code, source });
  }, items);
  let obj = { contentContainerStyle: null, bounces: false, renderItem: null, data: null, keyExtractor: null, keyboardShouldPersistTaps: "always", ListEmptyComponent: null };
  obj = { paddingBottom: onPressAvatar(onInviteSent[5]).space.PX_16 + onPressAvatar(onInviteSent[13])({ isKeyboardAwareOnAndroid: false }).insets.bottom, paddingHorizontal: onPressAvatar(onInviteSent[5]).space.PX_12 };
  obj.contentContainerStyle = obj;
  obj.renderItem = callback;
  obj.data = data;
  obj.keyExtractor = keyExtractor;
  obj.ListEmptyComponent = FriendsEmptyComponent;
  return source(code(onInviteSent[14]).BottomSheetFlatList, obj);
};