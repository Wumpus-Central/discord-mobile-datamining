// discord_app/modules/contact_sync/native/components/ContactSyncSuggestions.tsx
import _slicedToArray from "_slicedToArray";
import Form from "Form";
import { View } from "hexToRgba";
import { AnalyticEvents } from "ME";
import { SuggestedFriendSource } from "SuggestedFriendSource";
import jsxProd from "LinearGradient";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";

let c10;
let c9;
let metroImportAll;
const require = arg1;
function SuggestedFriendsSectionHeader(children) {
  return callback(View, { style: createCacheKey().sectionHeader, children: callback(Text.Text, { color: "text-muted", variant: "text-sm/semibold", children: children.label }) });
}
function SuggestionRow(suggestion) {
  let end;
  let selected;
  let start;
  suggestion = suggestion.suggestion;
  const onSelect = suggestion.onSelect;
  const first = suggestion.reasons[0];
  let name;
  ({ start, end, selected } = suggestion);
  if (first != null) {
    name = first.name;
  }
  let obj = suggestion(4189);
  const userTag = obj.getUserTag(suggestion.suggested_user);
  let tmp6 = userTag;
  if (null != name) {
    tmp6 = userTag;
    if ("" !== name) {
      tmp6 = name;
    }
  }
  let obj1 = onSelect(1435);
  const userAvatarSource = obj1.getUserAvatarSource(suggestion.suggested_user);
  obj = { start, end, icon: null, checked: null, label: null, subLabel: null, onPress: null };
  obj = { source: userAvatarSource, size: null };
  obj[1] = suggestion(1297).AvatarSizes.REFRESH_MEDIUM_32;
  obj[2] = callback(suggestion(1297).Avatar, obj);
  obj[3] = selected;
  obj[4] = tmp6;
  const items = [callback(suggestion(4340).Text, { variant: "text-xs/medium", color: "text-muted", children: userTag }), ];
  let tmp8Result = null != suggestion.mutual_friends_count;
  if (tmp8Result) {
    obj1 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = tmp3(1236).intl;
    const obj2 = { count: null };
    obj2[0] = suggestion.mutual_friends_count;
    obj1[2] = intl.format(tmp3(1236).t.z7y34b, obj2);
    tmp8Result = tmp8(tmp3(4340).Text, obj1);
  }
  items[1] = tmp8Result;
  obj[5] = closure_10(closure_9, { children: items });
  obj[6] = function onPress() {
    return onSelect(suggestion.suggested_user.id);
  };
  return callback(suggestion(8493).TableCheckboxRow, obj);
}
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, header: null, title: null, subtitle: null, list: null, divider: null, linearGradient: null, redesignButton: null, sectionHeader: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32, justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", paddingTop: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_24 };
createCacheKey[2] = { marginBottom: 8, textAlign: "center" };
createCacheKey[3] = { lineHeight: 18, textAlign: "center" };
let obj1 = { alignItems: "center", paddingTop: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_24 };
createCacheKey[4] = { flex: 1, marginTop: require("Themes").space.PX_12 };
let obj2 = { flex: 1, marginTop: require("Themes").space.PX_12 };
createCacheKey[5] = { backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[6] = { position: "absolute", width: "100%", bottom: 0, minHeight: 136 };
let obj3 = { backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[7] = { position: "absolute", width: "100%", bottom: 0, padding: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_32 };
let obj4 = { position: "absolute", width: "100%", bottom: 0, padding: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_32 };
createCacheKey[8] = { marginBottom: require("Themes").space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { marginBottom: require("Themes").space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSuggestions.tsx");

export default function ContactSyncSuggestions(friendSuggestions) {
  friendSuggestions = friendSuggestions.friendSuggestions;
  const onSubmit = friendSuggestions.onSubmit;
  let dependencyMap;
  let first;
  let React;
  let callback;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  const reduced = friendSuggestions.reduce((arg0, suggested_user) => {
    arg0[suggested_user.suggested_user.id] = true;
    return arg0;
  }, {});
  let obj = friendSuggestions(4065);
  const token = obj.useToken(onSubmit(712).colors.BACKGROUND_BASE_LOW);
  let obj1 = friendSuggestions(4193);
  let items = [obj1.hexOpacityToRgba(token, 0), ];
  let obj2 = friendSuggestions(4193);
  items[1] = obj2.hexOpacityToRgba(token, 100);
  const tmp4 = first(React.useState(reduced), 2);
  first = tmp4[0];
  React = tmp4[1];
  let obj3 = friendSuggestions(4760);
  const fontScale = obj3.useFontScale();
  const sum = onSubmit(712).space.PX_16 + onSubmit(712).space.PX_32 + 40;
  let items1 = [first];
  const sum1 = sum + Math.max(18 * Math.min(fontScale, 2) - 18, 0);
  callback = React.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(first);
    obj[arg0] = !first[arg0];
    React(obj);
  }, items1);
  let obj4 = onSubmit(11);
  let keys = obj4.keys(first);
  let items2 = [friendSuggestions, first];
  const items3 = [friendSuggestions.length, , , , , ];
  ({ divider: arr5[1], header: arr5[2], subtitle: arr5[3], title: arr5[4] } = tmp);
  items3[5] = callback;
  const memo = React.useMemo(() => {
    const items = [];
    items.push({ type: "header" });
    const item = items.forEach((friendSuggestion) => {
      items.push({ type: "suggestedFriend", props: { friendSuggestion, selected: outer1_3[friendSuggestion.suggested_user.id] } });
    });
    return items;
  }, items2);
  obj = { style: items4, children: null };
  items4 = [, ];
  ({ container: arr6[0], list: arr6[1] } = tmp);
  const callback1 = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    if ("header" === item.type) {
      let obj = { children: null };
      obj = { style: null, children: null };
      obj[0] = _undefined.header;
      const obj1 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      obj1[0] = _undefined.title;
      const intl = friendSuggestions(_undefined[15]).intl;
      obj1[4] = intl.string(friendSuggestions(_undefined[15]).t["7Fjv54"]);
      const items = [outer1_8(friendSuggestions(_undefined[10]).Text, obj1), ];
      const obj2 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj2[0] = _undefined.subtitle;
      const intl2 = friendSuggestions(_undefined[15]).intl;
      obj2[3] = intl2.string(friendSuggestions(_undefined[15]).t.ait1x0);
      items[1] = outer1_8(friendSuggestions(_undefined[10]).Text, obj2);
      obj[1] = items;
      const items1 = [outer1_10(callback, obj), ];
      const obj3 = { label: null };
      const intl3 = friendSuggestions(_undefined[15]).intl;
      obj3[0] = intl3.string(friendSuggestions(_undefined[15]).t["1uAmCw"]);
      items1[1] = outer1_8(outer1_12, obj3);
      obj[0] = items1;
      return outer1_10(outer1_9, obj);
    } else {
      const friendSuggestion = item.props.friendSuggestion;
      const obj4 = { start: null, end: null, suggestion: null, selected: null, onSelect: null };
      obj4[0] = 1 === index;
      obj4[1] = index === friendSuggestions.length;
      obj4[2] = friendSuggestion;
      obj4[3] = item.props.selected;
      obj4[4] = callback;
      const items2 = [outer1_8(outer1_13, obj4), ];
      let tmp5 = null;
      if (index < friendSuggestions.length) {
        obj = { iconPush: true, style: null };
        obj[1] = _undefined.divider;
        tmp5 = outer1_8(friendSuggestions(_undefined[19]).FormDivider, obj);
      }
      const obj5 = { children: null };
      items2[1] = tmp5;
      obj5[0] = items2;
      return outer1_10(React.Fragment, obj5, friendSuggestion.suggested_user.id);
    }
  }, items3);
  obj = { contentContainerStyle: null, data: null, renderItem: null };
  obj1 = { paddingHorizontal: null, paddingBottom: null };
  obj1[0] = onSubmit(712).space.PX_16;
  obj1[1] = sum1;
  obj[0] = obj1;
  obj[1] = memo;
  obj[2] = callback1;
  const items5 = [callback(friendSuggestions(7786).FlashList, obj), , ];
  obj2 = { style: tmp.linearGradient, start: null, end: null, pointerEvents: "none", colors: null };
  const someResult = keys.some((arg0) => first[arg0]);
  obj2[1] = friendSuggestions(691).VerticalGradient.START;
  obj2[2] = friendSuggestions(691).VerticalGradient.END;
  obj2[4] = items;
  items5[1] = callback(onSubmit(4765), obj2);
  obj3 = { style: tmp.redesignButton, children: null };
  obj4 = { variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  let intl = friendSuggestions(1236).intl;
  obj4[2] = intl.string(friendSuggestions(1236).t["J5/69j"]);
  obj4[3] = function onPress() {
    const keys = onSubmit(_undefined[18]).keys(first);
    const found = keys.filter((arg0) => table2[arg0]);
    onSubmit(found);
    const item = found.forEach((suggested_user_id) => {
      let obj = callback(table[24]);
      obj = { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" };
      obj.track(constants.FRIEND_SUGGESTION_ADDED, obj);
    });
  };
  obj4[4] = !someResult;
  obj3[1] = callback(friendSuggestions(4754).Button, obj4);
  items5[2] = callback(callback, obj3);
  obj[1] = items5;
  return callback2(callback, obj);
};