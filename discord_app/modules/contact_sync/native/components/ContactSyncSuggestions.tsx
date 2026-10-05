// === Module 12347: ContactSyncSuggestions ===

// Module 12347 (ContactSyncSuggestions)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import UserUtils from "UserUtils" /* 4722 */;
import Text_Text from "Text/Text" /* 4886 */;
import useFontScale from "useFontScale" /* 5602 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 5990 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import Form from "Form" /* 8895 */;
import FriendsScreenConstants from "FriendsScreenConstants" /* 12348 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, friendSuggestions, label, onSelect;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let react = react_mod;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const SuggestedFriendSource = FriendsScreenConstants.SuggestedFriendSource;
let Fragment = Fragment_mod;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, title: { marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, textAlign: "center" }, list: obj4, divider: obj5, linearGradient: { position: "absolute", width: "100%", bottom: 0, minHeight: 136 }, redesignButton: obj6, sectionHeader: obj7 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32, justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
obj4 = { flex: 1, marginTop: nativeDefault.space.PX_12 };
obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj6 = { position: "absolute", width: "100%", bottom: 0, padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj7 = { marginBottom: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const sum = nativeDefault.space.PX_16 + nativeDefault.space.PX_32 + 40;
  return sum + Math.max(18 * Math.min(fontScale, 2) - 18, 0);
}) : (() => {
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const sum = nativeDefault.space.PX_16 + nativeDefault.space.PX_32 + 40;
  return sum + Math.max(18 * Math.min(fontScale, 2) - 18, 0);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((label) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  label = label.label;
  const tmp4 = closure_11();
  if (cResult[0] !== label) {
    const obj2 = { color: "text-muted", variant: "text-sm/semibold", children: label };
    const tmp7 = metroImportAll(Text_Text.Text, obj2);
    cResult[0] = label;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.sectionHeader) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const obj3 = { style: tmp4.sectionHeader, children: tmp5 };
  const tmp9 = metroImportAll(View, obj3);
  cResult[2] = tmp4.sectionHeader;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((label) => {
  label = label.label;
  const obj = { style: closure_11().sectionHeader, children: metroImportAll(Text_Text.Text, { color: "text-muted", variant: "text-sm/semibold", children: label }) };
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let end;
  let intl;
  let items;
  let obj6;
  let selected;
  let start;
  let suggestion;
  let tmp12;
  let tmp15;
  let tmp18;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(24);
  ({ start, end, suggestion } = arg0);
  ({ selected, onSelect } = arg0);
  const first = suggestion.reasons[0];
  let name;
  if (first != null) {
    name = first.name;
  }
  if (cResult[0] !== suggestion.suggested_user) {
    const tmpResult = UserUtils;
    const userTag = tmpResult.getUserTag(suggestion.suggested_user);
    cResult[0] = suggestion.suggested_user;
    cResult[1] = userTag;
    tmp6 = userTag;
  } else {
    tmp6 = cResult[1];
  }
  let tmp8 = tmp6;
  if (null != name) {
    tmp8 = tmp6;
    if ("" !== name) {
      tmp8 = name;
    }
  }
  if (cResult[2] !== suggestion.suggested_user) {
    const obj3 = AvatarUtilsDefault;
    const userAvatarSource = obj3.getUserAvatarSource(suggestion.suggested_user);
    cResult[2] = suggestion.suggested_user;
    cResult[3] = userAvatarSource;
    tmp9 = userAvatarSource;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp9) {
    const obj2 = { source: tmp9, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
    const Avatar = native.Avatar;
    const tmp14 = metroImportAll(Avatar, obj2);
    cResult[4] = tmp9;
    cResult[5] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== tmp6) {
    const obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp6 };
    const tmp17 = metroImportAll(Text_Text.Text, obj4);
    cResult[6] = tmp6;
    cResult[7] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] !== suggestion.mutual_friends_count) {
    let tmp19 = null != suggestion.mutual_friends_count;
    if (tmp19) {
      const obj5 = { variant: "text-xs/medium", color: "text-muted", children: intl.format(intl4.t.z7y34b, obj6) };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      obj6 = { count: suggestion.mutual_friends_count };
      tmp19 = metroImportAll(Text, obj5);
    }
    cResult[8] = suggestion.mutual_friends_count;
    cResult[9] = tmp19;
    tmp18 = tmp19;
  } else {
    tmp18 = cResult[9];
  }
  if (cResult[10] === tmp15) {
    let tmp21;
    if (cResult[11] === tmp18) {
      tmp21 = cResult[12];
    }
    if (cResult[13] === onSelect) {
      let tmp23;
      if (cResult[14] === suggestion.suggested_user.id) {
        tmp23 = cResult[15];
      }
      if (cResult[16] === end) {
        if (cResult[17] === selected) {
          if (cResult[18] === tmp8) {
            if (cResult[19] === start) {
              if (cResult[20] === tmp12) {
                if (cResult[21] === tmp21) {
                  let tmp24;
                  if (cResult[22] === tmp23) {
                    tmp24 = cResult[23];
                  }
                  return tmp24;
                }
              }
            }
          }
        }
      }
      class A {
        constructor() {
          return onSelect(suggestion.suggested_user.id);
        }
      }
      const obj7 = { start, end, icon: tmp12, checked: selected, label: tmp8, subLabel: tmp21, onPress: tmp23 };
      const tmp25 = metroImportAll(TableCheckboxRow2.TableCheckboxRow, obj7);
      cResult[16] = end;
      cResult[17] = selected;
      cResult[18] = tmp8;
      cResult[19] = start;
      cResult[20] = tmp12;
      cResult[21] = tmp21;
      cResult[22] = tmp23;
      cResult[23] = tmp25;
      tmp24 = tmp25;
    }
    class A {
      constructor() {
        return onSelect(suggestion.suggested_user.id);
      }
    }
    cResult[13] = onSelect;
    cResult[14] = suggestion.suggested_user.id;
    cResult[15] = A;
    tmp23 = A;
  }
  const obj8 = { children: items };
  items = [tmp15, tmp18];
  const tmp22 = authStore(React4, obj8);
  cResult[10] = tmp15;
  cResult[11] = tmp18;
  cResult[12] = tmp22;
  tmp21 = tmp22;
}) : ((suggestion) => {
  let Avatar;
  let end;
  let intl;
  let items;
  let obj4;
  let obj6;
  let selected;
  let start;
  suggestion = suggestion.suggestion;
  onSelect = suggestion.onSelect;
  const first = suggestion.reasons[0];
  let name;
  ({ start, end, selected } = suggestion);
  if (first != null) {
    name = first.name;
  }
  const obj = UserUtils;
  const userTag = obj.getUserTag(suggestion.suggested_user);
  let tmp6 = userTag;
  if (null != name) {
    tmp6 = userTag;
    if ("" !== name) {
      tmp6 = name;
    }
  }
  const obj2 = AvatarUtilsDefault;
  const userAvatarSource = obj2.getUserAvatarSource(suggestion.suggested_user);
  const obj3 = {
    start,
    end,
    icon: metroImportAll(Avatar, obj4),
    checked: selected,
    label: tmp6,
    subLabel: authStore(React4, { children: items }),
    onPress() {
      return onSelect(suggestion.suggested_user.id);
    }
  };
  const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
  obj4 = { source: userAvatarSource, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
  Avatar = native.Avatar;
  items = [metroImportAll(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: userTag }), ];
  let tmp8Result = null != suggestion.mutual_friends_count;
  if (tmp8Result) {
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: intl.format(intl4.t.z7y34b, obj6) };
    const Text = Text_Text.Text;
    intl = intl4.intl;
    obj6 = { count: suggestion.mutual_friends_count };
    tmp8Result = metroImportAll(Text, obj5);
  }
  items[1] = tmp8Result;
  return metroImportAll(TableCheckboxRow, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((friendSuggestions) => {
  let closure_2;
  let closure_4;
  let first;
  let obj5;
  let tmp10;
  let tmp12;
  let tmp5;
  const f111486 = (item) => first[item];
  let obj = friendSuggestions(576);
  const cResult = obj.c(51);
  friendSuggestions = friendSuggestions.friendSuggestions;
  const onSubmit = friendSuggestions.onSubmit;
  const tmp4 = closure_11();
  dependencyMap = tmp4;
  if (cResult[0] !== friendSuggestions) {
    let tmp7;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function y(arg0, suggested_user) {
        arg0[suggested_user.suggested_user.id] = true;
        return arg0;
      };
      cResult[2] = fn;
      tmp7 = fn;
    } else {
      tmp7 = cResult[2];
    }
    const reduced = friendSuggestions.reduce(tmp7, {});
    cResult[0] = friendSuggestions;
    cResult[1] = reduced;
    tmp5 = reduced;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = friendSuggestions(4580);
  const token = tmpResult.useToken(onSubmit(587).colors.BACKGROUND_BASE_LOW);
  if (cResult[3] !== token) {
    const tmpResult3 = friendSuggestions(4727);
    const hexOpacityToRgbaResult = tmpResult3.hexOpacityToRgba(token, 0);
    cResult[3] = token;
    cResult[4] = hexOpacityToRgbaResult;
    tmp10 = hexOpacityToRgbaResult;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== token) {
    const tmpResult4 = friendSuggestions(4727);
    const hexOpacityToRgbaResult1 = tmpResult4.hexOpacityToRgba(token, 100);
    cResult[5] = token;
    cResult[6] = hexOpacityToRgbaResult1;
    tmp12 = hexOpacityToRgbaResult1;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === tmp10) {
    const tmp17 = first(react.useState(tmp5), 2);
    first = tmp17[0];
    react = tmp17[1];
    closure_12();
    if (cResult[10] !== first) {
      class F {
        constructor(arg0) {
          const obj = {};
          const merged = Object.assign(first);
          obj[arg0] = !first[arg0];
          closure_4(obj);
        }
      }
      cResult[10] = first;
      cResult[11] = F;
    } else {
      class F {
        constructor(arg0) {
          const obj = {};
          const merged = Object.assign(first);
          obj[arg0] = !first[arg0];
          closure_4(obj);
        }
      }
    }
    F = tmp21;
    if (cResult[12] === onSubmit) {
      class F {
        constructor(arg0) {
          const obj = {};
          const merged = Object.assign(first);
          obj[arg0] = !first[arg0];
          closure_4(obj);
        }
      }
      if (cResult[15] !== first) {
        class F {
          constructor(arg0) {
            const obj = {};
            const merged = Object.assign(first);
            obj[arg0] = !first[arg0];
            closure_4(obj);
          }
        }
        let keys = obj5.keys(first);
        cResult[15] = first;
        cResult[16] = keys.some(f111486);
        const someResult = keys.some(f111486);
      } else {
        class F {
          constructor(arg0) {
            const obj = {};
            const merged = Object.assign(first);
            obj[arg0] = !first[arg0];
            closure_4(obj);
          }
        }
      }
      if (cResult[17] === friendSuggestions) {
        class F {
          constructor(arg0) {
            const obj = {};
            const merged = Object.assign(first);
            obj[arg0] = !first[arg0];
            closure_4(obj);
          }
        }
        if (cResult[20] === friendSuggestions.length) {
          class F {
            constructor(arg0) {
              const obj = {};
              const merged = Object.assign(first);
              obj[arg0] = !first[arg0];
              closure_4(obj);
            }
          }
        }
        class L {
          constructor(arg0) {
            let index;
            let intl;
            let intl2;
            let intl3;
            let item;
            let items1;
            ({ item, index } = arg0);
            if ("header" === item.type) {
              const obj2 = { children: items1 };
              const obj3 = { style: closure_2.header, children: items };
              const obj4 = { style: closure_2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["7Fjv54"]) };
              const Text = Text_Text.Text;
              intl = intl4.intl;
              items = [metroImportAll(Text, obj4), ];
              const obj5 = { style: closure_2.subtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl4.t.ait1x0) };
              const Text2 = Text_Text.Text;
              intl2 = intl4.intl;
              items[1] = metroImportAll(Text2, obj5);
              items1 = [authStore(View, obj3), ];
              const obj6 = { label: intl3.string(intl4.t["1uAmCw"]) };
              intl3 = intl4.intl;
              items1[1] = metroImportAll(closure_13, obj6);
              return authStore(React4, obj2);
            } else {
              const friendSuggestion = item.props.friendSuggestion;
              const id = friendSuggestion.suggested_user.id;
              const Fragment = react.Fragment;
              const obj7 = { start: 1 === index, end: index === friendSuggestions.length, suggestion: friendSuggestion, selected: item.props.selected, onSelect: F };
              const items2 = [metroImportAll(closure_14, obj7), ];
              let tmp5 = null;
              if (index < friendSuggestions.length) {
                const obj = { iconPush: true, style: closure_2.divider };
                tmp5 = metroImportAll(Form.FormDivider, obj);
              }
              const obj8 = { children: items2 };
              items2[1] = tmp5;
              return authStore(Fragment, obj8, id);
            }
          }
        }
        cResult[20] = friendSuggestions.length;
        cResult[21] = tmp4.divider;
        cResult[22] = tmp4.header;
        cResult[23] = tmp4.subtitle;
        cResult[24] = tmp4.title;
        class N {
          constructor() {
            obj = closure_1(closure_2[20]);
            keys = obj.keys(closure_3);
            found = keys.filter((item) => first[item]);
            tmp = onSubmit(found);
            item = found.forEach((suggested_user_id) => {
              const obj = onSubmit(closure_1_2[21]);
              const obj2 = { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" };
              obj.track(constants.FRIEND_SUGGESTION_ADDED, obj2);
            });
            return;
          }
        }
        cResult[25] = tmp21;
        cResult[26] = L;
      }
      let items = [];
      items.push({ type: "header" });
      let item = friendSuggestions.forEach((friendSuggestion) => {
        let obj;
        const element = { type: "suggestedFriend", props: obj };
        obj = { friendSuggestion, selected: first[friendSuggestion.suggested_user.id] };
        items.push(element);
      });
      cResult[17] = friendSuggestions;
      cResult[18] = first;
      cResult[19] = items;
      class N {
        constructor() {
          obj = closure_1(closure_2[20]);
          keys = obj.keys(closure_3);
          found = keys.filter((item) => first[item]);
          tmp = onSubmit(found);
          item = found.forEach((suggested_user_id) => {
            const obj = onSubmit(closure_1_2[21]);
            const obj2 = { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" };
            obj.track(constants.FRIEND_SUGGESTION_ADDED, obj2);
          });
          return;
        }
      }
    }
    class N {
      constructor() {
        obj = closure_1(closure_2[20]);
        keys = obj.keys(closure_3);
        found = keys.filter((item) => first[item]);
        tmp = onSubmit(found);
        item = found.forEach((suggested_user_id) => {
          const obj = onSubmit(closure_1_2[21]);
          const obj2 = { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" };
          obj.track(constants.FRIEND_SUGGESTION_ADDED, obj2);
        });
        return;
      }
    }
    cResult[12] = onSubmit;
    cResult[13] = first;
    cResult[14] = N;
  }
  let items1 = [tmp10, tmp12];
  cResult[7] = tmp10;
  cResult[8] = tmp12;
  cResult[9] = items1;
}) : ((friendSuggestions) => {
  let Button;
  let closure_2;
  let closure_4;
  let intl;
  let items4;
  let items5;
  let obj10;
  let obj7;
  friendSuggestions = friendSuggestions.friendSuggestions;
  const onSubmit = friendSuggestions.onSubmit;
  let first;
  react = undefined;
  const tmp = closure_11();
  dependencyMap = tmp;
  const reduced = friendSuggestions.reduce((acc, suggested_user) => {
    acc[suggested_user.suggested_user.id] = true;
    return acc;
  }, {});
  let obj = friendSuggestions(4580);
  const token = obj.useToken(onSubmit(587).colors.BACKGROUND_BASE_LOW);
  let obj2 = friendSuggestions(4727);
  let items = [obj2.hexOpacityToRgba(token, 0), ];
  let obj3 = friendSuggestions(4727);
  items[1] = obj3.hexOpacityToRgba(token, 100);
  const tmp4 = first(react.useState(reduced), 2);
  first = tmp4[0];
  react = tmp4[1];
  let items1 = [first];
  const tmp6 = closure_12();
  onSelect = react.useCallback((arg0) => {
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
  const someResult = keys.some((item) => first[item]);
  const memo = react.useMemo(() => {
    const items = [];
    items.push({ type: "header" });
    const item = items.forEach((friendSuggestion) => {
      let obj;
      const element = { type: "suggestedFriend", props: obj };
      obj = { friendSuggestion, selected: first[friendSuggestion.suggested_user.id] };
      items.push(element);
    });
    return items;
  }, items2);
  let obj5 = { style: items4, children: items5 };
  items4 = [, ];
  ({ container: arr6[0], list: arr6[1] } = tmp);
  const callback1 = react.useCallback((arg0) => {
    let index;
    let intl;
    let intl2;
    let intl3;
    let item;
    let items;
    let items1;
    ({ item, index } = arg0);
    if ("header" === item.type) {
      const obj2 = { children: items1 };
      const obj3 = { style: closure_2.header, children: items };
      const obj4 = { style: closure_2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["7Fjv54"]) };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items = [metroImportAll(Text, obj4), ];
      const obj5 = { style: closure_2.subtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl4.t.ait1x0) };
      const Text2 = Text_Text.Text;
      intl2 = intl4.intl;
      items[1] = metroImportAll(Text2, obj5);
      items1 = [authStore(View, obj3), ];
      const obj6 = { label: intl3.string(intl4.t["1uAmCw"]) };
      intl3 = intl4.intl;
      items1[1] = metroImportAll(closure_13, obj6);
      return authStore(React4, obj2);
    } else {
      const friendSuggestion = item.props.friendSuggestion;
      const id = friendSuggestion.suggested_user.id;
      const Fragment = react.Fragment;
      const obj7 = { start: 1 === index, end: index === friendSuggestions.length, suggestion: friendSuggestion, selected: item.props.selected, onSelect };
      const items2 = [metroImportAll(closure_14, obj7), ];
      let tmp5 = null;
      if (index < friendSuggestions.length) {
        const obj = { iconPush: true, style: closure_2.divider };
        tmp5 = metroImportAll(Form.FormDivider, obj);
      }
      const obj8 = { children: items2 };
      items2[1] = tmp5;
      return authStore(Fragment, obj8, id);
    }
  }, items3);
  let obj6 = { contentContainerStyle: obj7, data: memo, renderItem: callback1 };
  obj7 = { paddingHorizontal: onSubmit(587).space.PX_16, paddingBottom: tmp6 };
  const FlashList = friendSuggestions(8371).FlashList;
  items5 = [closure_8(FlashList, obj6), , ];
  let obj8 = { style: tmp.linearGradient, start: friendSuggestions(1105).VerticalGradient.START, end: friendSuggestions(1105).VerticalGradient.END, pointerEvents: "none", colors: items };
  const tmp11 = onSubmit(5605);
  items5[1] = closure_8(tmp11, obj8);
  const obj9 = { style: tmp.redesignButton, children: closure_8(Button, obj10) };
  obj10 = {
    variant: "primary",
    size: "lg",
    text: intl.string(friendSuggestions(1126).t["J5/69j"]),
    onPress() {
      let constants2;
      let obj = SnowflakeUtilsDefault;
      const keys = obj.keys(first);
      const found = keys.filter((item) => first[item]);
      onSubmit(found);
      const item = found.forEach((suggested_user_id) => {
        const obj = onSubmit(closure_1_2[21]);
        const obj2 = { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" };
        obj.track(constants.FRIEND_SUGGESTION_ADDED, obj2);
      });
    },
    disabled: !someResult
  };
  Button = friendSuggestions(5594).Button;
  intl = friendSuggestions(1126).intl;
  items5[2] = closure_8(onSelect, obj9);
  return closure_10(onSelect, obj5);
});
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSuggestions.tsx");

export default tmp4;