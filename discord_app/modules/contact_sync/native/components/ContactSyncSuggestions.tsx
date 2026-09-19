// === Module 12949: ContactSyncSuggestions ===

// Module 12949 (ContactSyncSuggestions)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import UserUtils from "UserUtils" /* 4600 */;
import Text_Text from "Text/Text" /* 4752 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5816 */;
import Form from "Form" /* 8870 */;
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
  const userTag = UserUtils.getUserTag(suggestion.suggested_user);
  let tmp6 = userTag;
  if (null != name) {
    tmp6 = userTag;
    if ("" !== name) {
      tmp6 = name;
    }
  }
  const userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(suggestion.suggested_user);
  const obj3 = { start, end, icon: null, checked: null, label: null, subLabel: null, onPress: null };
  obj3.icon = React6(native.Avatar, { source: userAvatarSource, size: native.AvatarSizes.REFRESH_MEDIUM_32 });
  obj3.checked = selected;
  obj3.label = tmp6;
  const items = [React6(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: userTag }), ];
  let tmp8Result = null != suggestion.mutual_friends_count;
  if (tmp8Result) {
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = util.intl;
    const obj6 = { count: suggestion.mutual_friends_count };
    obj5.children = intl.format(util.t.z7y34b, obj6);
    tmp8Result = React6(Text_Text.Text, obj5);
  }
  items[1] = tmp8Result;
  obj3.subLabel = closure_1_10(React7, { children: items });
  obj3.onPress = function onPress() {
    return onSelect(suggestion.suggested_user.id);
  };
  return React6(TableCheckboxRow.TableCheckboxRow, obj3);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const SuggestedFriendSource = fn(12950).SuggestedFriendSource;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: fn(5894).NAV_BAR_HEIGHT + 32, justifyContent: "center" }, header: null, title: null, subtitle: null, list: null, divider: null, linearGradient: null, redesignButton: null, sectionHeader: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: fn(5894).NAV_BAR_HEIGHT + 32, justifyContent: "center" };
obj2.header = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
obj2.title = { marginBottom: 8, textAlign: "center" };
obj2.subtitle = { lineHeight: 18, textAlign: "center" };
let obj4 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
obj2.list = { flex: 1, marginTop: nativeDefault.space.PX_12 };
let obj5 = { flex: 1, marginTop: nativeDefault.space.PX_12 };
obj2.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.linearGradient = { position: "absolute", width: "100%", bottom: 0, minHeight: 136 };
let obj6 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.redesignButton = { position: "absolute", width: "100%", bottom: 0, padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let obj7 = { position: "absolute", width: "100%", bottom: 0, padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj2.sectionHeader = { marginBottom: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let closure_11 = createStyles.createStyles(obj2);
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
  const token = friendSuggestions(4457).useToken(onSubmit(576).colors.BACKGROUND_BASE_LOW);
  let obj = friendSuggestions(4457);
  let items = [friendSuggestions(4605).hexOpacityToRgba(token, 0), ];
  let obj2 = friendSuggestions(4605);
  items[1] = friendSuggestions(4605).hexOpacityToRgba(token, 100);
  const tmp4 = first(noop.useState(reduced), 2);
  first = tmp4[0];
  noop = tmp4[1];
  let obj3 = friendSuggestions(4605);
  const fontScale = friendSuggestions(5193).useFontScale();
  const sum = onSubmit(576).space.PX_16 + onSubmit(576).space.PX_32 + 40;
  let items1 = [first];
  const sum1 = sum + Math.max(18 * Math.min(fontScale, 2) - 18, 0);
  const onSelect = noop.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(first);
    obj[arg0] = !first[arg0];
    closure_4(obj);
  }, items1);
  let obj4 = friendSuggestions(5193);
  let keys = onSubmit(11).keys(first);
  let items2 = [friendSuggestions, first];
  let obj5 = onSubmit(11);
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
  let obj6 = { style: null, children: null };
  const items4 = [, ];
  ({ container: arr6[0], list: arr6[1] } = tmp);
  obj6.style = items4;
  const callback1 = noop.useCallback((arg0) => {
    ({ item, index } = arg0);
    if ("header" === item.type) {
      const obj2 = { children: null };
      const obj3 = { style: closure_2.header, children: null };
      const obj4 = { style: closure_2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t["7Fjv54"]);
      const items = [React6(Text_Text.Text, obj4), ];
      const obj5 = { style: closure_2.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t.ait1x0);
      items[1] = React6(Text_Text.Text, obj5);
      obj3.children = items;
      const items1 = [closure_2_10(View, obj3), ];
      const obj6 = { label: null };
      const intl3 = util.intl;
      obj6.label = intl3.string(util.t["1uAmCw"]);
      items1[1] = React6(SuggestedFriendsSectionHeader, obj6);
      obj2.children = items1;
      return closure_2_10(React7, obj2);
    } else {
      const friendSuggestion = item.props.friendSuggestion;
      const obj7 = { start: 1 === index, end: index === friendSuggestions.length, suggestion: friendSuggestion, selected: item.props.selected, onSelect };
      const items2 = [React6(SuggestionRow, obj7), ];
      let tmp5 = null;
      if (index < friendSuggestions.length) {
        const obj = { iconPush: true, style: closure_2.divider };
        tmp5 = React6(Form.FormDivider, obj);
      }
      const obj8 = { children: null };
      items2[1] = tmp5;
      obj8.children = items2;
      return closure_2_10(noop.Fragment, obj8, friendSuggestion.suggested_user.id);
    }
  }, items3);
  let obj7 = { contentContainerStyle: null, data: null, renderItem: null };
  const someResult = keys.some((item) => first[item]);
  obj7.contentContainerStyle = { paddingHorizontal: onSubmit(576).space.PX_16, paddingBottom: sum1 };
  obj7.data = memo;
  obj7.renderItem = callback1;
  const items5 = [closure_8(friendSuggestions(8996).FlashList, obj7), , ];
  const obj9 = { style: tmp.linearGradient, start: null, end: null, pointerEvents: "none", colors: null };
  let obj8 = { paddingHorizontal: onSubmit(576).space.PX_16, paddingBottom: sum1 };
  obj9.start = friendSuggestions(1094).VerticalGradient.START;
  obj9.end = friendSuggestions(1094).VerticalGradient.END;
  obj9.colors = items;
  items5[1] = closure_8(onSubmit(5198), obj9);
  const obj10 = { style: tmp.redesignButton, children: null };
  const obj11 = { variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  let intl = friendSuggestions(1115).intl;
  obj11.text = intl.string(friendSuggestions(1115).t["J5/69j"]);
  obj11.onPress = function onPress() {
    const keys = SnowflakeUtilsDefault.keys(first);
    const found = keys.filter((item) => first[item]);
    onSubmit(found);
    const item = found.forEach((suggested_user_id) => {
      onSubmit(closure_1_2[24]).track(constants.FRIEND_SUGGESTION_ADDED, { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" });
    });
  };
  obj11.disabled = !someResult;
  obj10.children = closure_8(friendSuggestions(5186).Button, obj11);
  items5[2] = closure_8(onSelect, obj10);
  obj6.children = items5;
  return closure_10(onSelect, obj6);
};