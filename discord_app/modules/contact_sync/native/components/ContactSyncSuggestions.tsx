// === Module 12698: ContactSyncSuggestions ===

// Module 12698 (ContactSyncSuggestions)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import UserUtils from "UserUtils" /* 4404 */;
import Text_Text from "Text/Text" /* 4556 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5604 */;
import Form from "Form" /* 8593 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function SuggestedFriendsSectionHeader(children) {
  return React6(View, { style: closure_11().sectionHeader, children: React6(Text_Text.Text, { color: "text-muted", variant: "text-sm/semibold", children: children.label }) });
}
function SuggestionRow(suggestion) {
  suggestion = suggestion.suggestion;
  const onSelect = suggestion.onSelect;
  const first = suggestion.reasons[0];
  let name;
  ({ start, end, selected } = suggestion);
  if (first != null) {
    name = first.name;
  }
  let obj = UserUtils;
  const userTag = obj.getUserTag(suggestion.suggested_user);
  let tmp6 = userTag;
  if (null != name) {
    tmp6 = userTag;
    if ("" !== name) {
      tmp6 = name;
    }
  }
  let obj1 = AvatarUtilsDefault;
  const userAvatarSource = obj1.getUserAvatarSource(suggestion.suggested_user);
  obj = { start, end, icon: null, checked: null, label: null, subLabel: null, onPress: null };
  obj = { source: userAvatarSource, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
  obj.icon = React6(native.Avatar, obj);
  obj.checked = selected;
  obj.label = tmp6;
  const items = [React6(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: userTag }), ];
  let tmp8Result = null != suggestion.mutual_friends_count;
  if (tmp8Result) {
    obj1 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = util.intl;
    const obj2 = { count: suggestion.mutual_friends_count };
    obj1.children = intl.format(util.t.z7y34b, obj2);
    tmp8Result = React6(Text_Text.Text, obj1);
  }
  items[1] = tmp8Result;
  obj.subLabel = closure_1_10(React7, { children: items });
  obj.onPress = function onPress() {
    return onSelect(suggestion.suggested_user.id);
  };
  return React6(TableCheckboxRow.TableCheckboxRow, obj);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const SuggestedFriendSource = fn(12699).SuggestedFriendSource;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, title: null, subtitle: null, list: null, divider: null, linearGradient: null, redesignButton: null, sectionHeader: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: fn(5682).NAV_BAR_HEIGHT + 32, justifyContent: "center" };
createStyles.container = createStyles;
createStyles.header = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
createStyles.title = { marginBottom: 8, textAlign: "center" };
createStyles.subtitle = { lineHeight: 18, textAlign: "center" };
let obj1 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
createStyles.list = { flex: 1, marginTop: nativeDefault.space.PX_12 };
let obj2 = { flex: 1, marginTop: nativeDefault.space.PX_12 };
createStyles.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.linearGradient = { position: "absolute", width: "100%", bottom: 0, minHeight: 136 };
let obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.redesignButton = { position: "absolute", width: "100%", bottom: 0, padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let obj4 = { position: "absolute", width: "100%", bottom: 0, padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
createStyles.sectionHeader = { marginBottom: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSuggestions.tsx");

export default function ContactSyncSuggestions(friendSuggestions) {
  friendSuggestions = friendSuggestions.friendSuggestions;
  const onSubmit = friendSuggestions.onSubmit;
  let first;
  noop = undefined;
  const tmp = closure_11();
  dependencyMap = tmp;
  const reduced = friendSuggestions.reduce((acc, suggested_user) => {
    acc[suggested_user.suggested_user.id] = true;
    return acc;
  }, {});
  let obj = friendSuggestions(4262);
  const token = obj.useToken(onSubmit(576).colors.BACKGROUND_BASE_LOW);
  let obj1 = friendSuggestions(4409);
  let items = [obj1.hexOpacityToRgba(token, 0), ];
  let obj2 = friendSuggestions(4409);
  items[1] = obj2.hexOpacityToRgba(token, 100);
  const tmp4 = first(noop.useState(reduced), 2);
  first = tmp4[0];
  noop = tmp4[1];
  let obj3 = friendSuggestions(4982);
  const fontScale = obj3.useFontScale();
  const sum = onSubmit(576).space.PX_16 + onSubmit(576).space.PX_32 + 40;
  let items1 = [first];
  const sum1 = sum + Math.max(18 * Math.min(fontScale, 2) - 18, 0);
  const onSelect = noop.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(first);
    obj[arg0] = !first[arg0];
    closure_4(obj);
  }, items1);
  let obj4 = onSubmit(11);
  let keys = obj4.keys(first);
  let items2 = [friendSuggestions, first];
  const items3 = [friendSuggestions.length, , , , , ];
  ({ divider: arr5[1], header: arr5[2], subtitle: arr5[3], title: arr5[4] } = tmp);
  items3[5] = onSelect;
  const memo = noop.useMemo(() => {
    const items = [];
    items.push({ type: "header" });
    const item = items.forEach((friendSuggestion) => {
      const element = { type: "suggestedFriend", props: { friendSuggestion, selected: first[friendSuggestion.suggested_user.id] } };
      items.push(element);
    });
    return items;
  }, items2);
  obj = { style: null, children: null };
  const items4 = [, ];
  ({ container: arr6[0], list: arr6[1] } = tmp);
  obj.style = items4;
  const callback1 = noop.useCallback((arg0) => {
    ({ item, index } = arg0);
    if ("header" === item.type) {
      let obj = { children: null };
      obj = { style: closure_2.header, children: null };
      const obj1 = { style: closure_2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj1.children = intl.string(util.t["7Fjv54"]);
      const items = [React6(Text_Text.Text, obj1), ];
      const obj2 = { style: closure_2.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = util.intl;
      obj2.children = intl2.string(util.t.ait1x0);
      items[1] = React6(Text_Text.Text, obj2);
      obj.children = items;
      const items1 = [closure_2_10(View, obj), ];
      const obj3 = { label: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t["1uAmCw"]);
      items1[1] = React6(SuggestedFriendsSectionHeader, obj3);
      obj.children = items1;
      return closure_2_10(React7, obj);
    } else {
      const friendSuggestion = item.props.friendSuggestion;
      const obj4 = { start: 1 === index, end: index === friendSuggestions.length, suggestion: friendSuggestion, selected: item.props.selected, onSelect };
      const items2 = [React6(SuggestionRow, obj4), ];
      let tmp5 = null;
      if (index < friendSuggestions.length) {
        obj = { iconPush: true, style: closure_2.divider };
        tmp5 = React6(Form.FormDivider, obj);
      }
      const obj5 = { children: null };
      items2[1] = tmp5;
      obj5.children = items2;
      return closure_2_10(noop.Fragment, obj5, friendSuggestion.suggested_user.id);
    }
  }, items3);
  obj = { contentContainerStyle: null, data: null, renderItem: null };
  obj1 = { paddingHorizontal: onSubmit(576).space.PX_16, paddingBottom: sum1 };
  obj.contentContainerStyle = obj1;
  obj.data = memo;
  obj.renderItem = callback1;
  const items5 = [closure_8(friendSuggestions(8874).FlashList, obj), , ];
  obj2 = { style: tmp.linearGradient, start: null, end: null, pointerEvents: "none", colors: null };
  const someResult = keys.some((item) => first[item]);
  obj2.start = friendSuggestions(1093).VerticalGradient.START;
  obj2.end = friendSuggestions(1093).VerticalGradient.END;
  obj2.colors = items;
  items5[1] = closure_8(onSubmit(4987), obj2);
  obj3 = { style: tmp.redesignButton, children: null };
  obj4 = { variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  let intl = friendSuggestions(1114).intl;
  obj4.text = intl.string(friendSuggestions(1114).t["J5/69j"]);
  obj4.onPress = function onPress() {
    const keys = SnowflakeUtilsDefault.keys(first);
    const found = keys.filter((item) => first[item]);
    onSubmit(found);
    const item = found.forEach((suggested_user_id) => {
      onSubmit(closure_1_2[24]);
      const obj = { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" };
      obj.track(constants.FRIEND_SUGGESTION_ADDED, obj);
    });
  };
  obj4.disabled = !someResult;
  obj3.children = closure_8(friendSuggestions(4975).Button, obj4);
  items5[2] = closure_8(onSelect, obj3);
  obj.children = items5;
  return closure_10(onSelect, obj);
};