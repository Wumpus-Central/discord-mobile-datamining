// === Module 12362: ContactSyncSuggestions ===

// Module 12362 (ContactSyncSuggestions)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import UserUtils from "UserUtils" /* 4728 */;
import Text_Text from "Text/Text" /* 4892 */;
import useFontScale from "useFontScale" /* 5609 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5997 */;
import Form from "Form" /* 8924 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const SuggestedFriendSource = fn(12363).SuggestedFriendSource;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: fn(6075).NAV_BAR_HEIGHT + 32, justifyContent: "center" }, header: null, title: null, subtitle: null, list: null, divider: null, linearGradient: null, redesignButton: null, sectionHeader: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: fn(6075).NAV_BAR_HEIGHT + 32, justifyContent: "center" };
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
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const fontScale = useFontScale.useFontScale();
  const sum = nativeDefault.space.PX_16 + nativeDefault.space.PX_32 + 40;
  return sum + Math.max(18 * Math.min(fontScale, 2) - 18, 0);
}) : (() => {
  const fontScale = useFontScale.useFontScale();
  const sum = nativeDefault.space.PX_16 + nativeDefault.space.PX_32 + 40;
  return sum + Math.max(18 * Math.min(fontScale, 2) - 18, 0);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((label) => {
  const cResult = c.c(5);
  label = label.label;
  const tmp4 = closure_11();
  if (cResult[0] !== label) {
    const obj2 = { color: "text-muted", variant: "text-sm/semibold", children: label };
    const tmp7 = closure_1_8(Text_Text.Text, obj2);
    cResult[0] = label;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.sectionHeader) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = closure_1_8(View, { style: tmp4.sectionHeader, children: tmp5 });
  cResult[2] = tmp4.sectionHeader;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const obj3 = { style: tmp4.sectionHeader, children: tmp5 };
}) : ((children) => closure_1_8(View, { style: closure_11().sectionHeader, children: closure_1_8(Text_Text.Text, { color: "text-muted", variant: "text-sm/semibold", children: children.label }) }));
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(24);
  ({ start, end, suggestion } = arg0);
  ({ selected, onSelect } = arg0);
  const first = suggestion.reasons[0];
  let name;
  if (first != null) {
    name = first.name;
  }
  if (cResult[0] !== suggestion.suggested_user) {
    const userTag = UserUtils.getUserTag(suggestion.suggested_user);
    cResult[0] = suggestion.suggested_user;
    cResult[1] = userTag;
    let tmp6 = userTag;
    const tmpResult = UserUtils;
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
    const userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(suggestion.suggested_user);
    cResult[2] = suggestion.suggested_user;
    cResult[3] = userAvatarSource;
    let tmp9 = userAvatarSource;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp9) {
    const obj2 = { source: tmp9, size: native.AvatarSizes.REFRESH_MEDIUM_32 };
    const tmp14 = closure_1_8(native.Avatar, obj2);
    cResult[4] = tmp9;
    cResult[5] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== tmp6) {
    const obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp6 };
    const tmp17 = closure_1_8(Text_Text.Text, obj4);
    cResult[6] = tmp6;
    cResult[7] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] !== suggestion.mutual_friends_count) {
    let tmp19 = null != suggestion.mutual_friends_count;
    if (tmp19) {
      const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl = util.intl;
      const obj6 = { count: suggestion.mutual_friends_count };
      obj5.children = intl.format(util.t.z7y34b, obj6);
      tmp19 = closure_1_8(Text_Text.Text, obj5);
    }
    cResult[8] = suggestion.mutual_friends_count;
    cResult[9] = tmp19;
    let tmp18 = tmp19;
  } else {
    tmp18 = cResult[9];
  }
  if (cResult[10] === tmp15) {
    if (cResult[11] === tmp18) {
      let tmp21 = cResult[12];
    }
    if (cResult[13] === onSelect) {
      if (cResult[14] === suggestion.suggested_user.id) {
        let tmp23 = cResult[15];
      }
      if (cResult[16] === end) {
        if (cResult[17] === selected) {
          if (cResult[18] === tmp8) {
            if (cResult[19] === start) {
              if (cResult[20] === tmp12) {
                if (cResult[21] === tmp21) {
                  if (cResult[22] === tmp23) {
                    let tmp24 = cResult[23];
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
      const tmp25 = closure_1_8(TableCheckboxRow.TableCheckboxRow, obj7);
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
  const obj8 = { children: null };
  const items = [tmp15, tmp18];
  obj8.children = items;
  const tmp22 = v65535(options, obj8);
  cResult[10] = tmp15;
  cResult[11] = tmp18;
  cResult[12] = tmp22;
  tmp21 = tmp22;
}) : ((suggestion) => {
  suggestion = suggestion.suggestion;
  onSelect = suggestion.onSelect;
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
  obj3.icon = closure_1_8(native.Avatar, { source: userAvatarSource, size: native.AvatarSizes.REFRESH_MEDIUM_32 });
  obj3.checked = selected;
  obj3.label = tmp6;
  const items = [closure_1_8(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: userTag }), ];
  let tmp8Result = null != suggestion.mutual_friends_count;
  if (tmp8Result) {
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const intl = util.intl;
    const obj6 = { count: suggestion.mutual_friends_count };
    obj5.children = intl.format(util.t.z7y34b, obj6);
    tmp8Result = closure_1_8(Text_Text.Text, obj5);
  }
  items[1] = tmp8Result;
  obj3.subLabel = v65535(options, { children: items });
  obj3.onPress = function onPress() {
    return onSelect(suggestion.suggested_user.id);
  };
  return closure_1_8(TableCheckboxRow.TableCheckboxRow, obj3);
});
ReactCompilerGating = fn(558);
let obj8 = { marginBottom: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSuggestions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((friendSuggestions) => {
  const cResult = friendSuggestions(576).c(51);
  friendSuggestions = friendSuggestions.friendSuggestions;
  const onSubmit = friendSuggestions.onSubmit;
  const tmp4 = closure_11();
  dependencyMap = tmp4;
  if (cResult[0] !== friendSuggestions) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function y(arg0, suggested_user) {
        arg0[suggested_user.suggested_user.id] = true;
        return arg0;
      };
      cResult[2] = fn;
      let tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const reduced = friendSuggestions.reduce(tmp6, {});
    cResult[0] = friendSuggestions;
    cResult[1] = reduced;
  } else {
    const token = tmp(4586).useToken(onSubmit(587).colors.BACKGROUND_BASE_LOW);
    if (cResult[3] !== token) {
      const hexOpacityToRgbaResult = tmp(4733).hexOpacityToRgba(token, 0);
      cResult[3] = token;
      cResult[4] = hexOpacityToRgbaResult;
      let tmp11 = hexOpacityToRgbaResult;
      const tmpResult3 = tmp(4733);
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== token) {
      const hexOpacityToRgbaResult1 = tmp(4733).hexOpacityToRgba(token, 100);
      cResult[5] = token;
      cResult[6] = hexOpacityToRgbaResult1;
      let tmp13 = hexOpacityToRgbaResult1;
      const tmpResult4 = tmp(4733);
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp11) {
      const tmp18 = first(noop.useState(cResult[1]), 2);
      first = tmp18[0];
      noop = tmp18[1];
      closure_12();
      if (cResult[10] !== first) {
        class F {
          constructor(arg0) {
            obj = {};
            merged = Object.assign(closure_3);
            obj[friendSuggestions] = !closure_3[friendSuggestions];
            tmp2 = closure_4(obj);
            return;
          }
        }
        cResult[10] = first;
        cResult[11] = F;
      } else {
        class F {
          constructor(arg0) {
            obj = {};
            merged = Object.assign(closure_3);
            obj[friendSuggestions] = !closure_3[friendSuggestions];
            tmp2 = closure_4(obj);
            return;
          }
        }
      }
      onSelect = F;
      if (cResult[12] === onSubmit) {
        class F {
          constructor(arg0) {
            obj = {};
            merged = Object.assign(closure_3);
            obj[friendSuggestions] = !closure_3[friendSuggestions];
            tmp2 = closure_4(obj);
            return;
          }
        }
        if (cResult[15] !== first) {
          class F {
            constructor(arg0) {
              obj = {};
              merged = Object.assign(closure_3);
              obj[friendSuggestions] = !closure_3[friendSuggestions];
              tmp2 = closure_4(obj);
              return;
            }
          }
          let keys = obj5.keys(first);
          const someResult = keys.some((item) => first[item]);
          cResult[15] = first;
          cResult[16] = someResult;
        } else {
          class F {
            constructor(arg0) {
              obj = {};
              merged = Object.assign(closure_3);
              obj[friendSuggestions] = !closure_3[friendSuggestions];
              tmp2 = closure_4(obj);
              return;
            }
          }
        }
        if (cResult[17] === friendSuggestions) {
          class F {
            constructor(arg0) {
              obj = {};
              merged = Object.assign(closure_3);
              obj[friendSuggestions] = !closure_3[friendSuggestions];
              tmp2 = closure_4(obj);
              return;
            }
          }
          if (cResult[20] === friendSuggestions.length) {
            class F {
              constructor(arg0) {
                obj = {};
                merged = Object.assign(closure_3);
                obj[friendSuggestions] = !closure_3[friendSuggestions];
                tmp2 = closure_4(obj);
                return;
              }
            }
          }
          class L {
            constructor(arg0) {
              ({ item, index } = friendSuggestions);
              if ("header" === item.type) {
                tmp6 = jsxs;
                tmp7 = Fragment;
                obj1 = { children: null };
                tmp8 = jsxs;
                tmp9 = View;
                obj9 = { style: null, children: null };
                tmp10 = closure_2;
                obj9.style = closure_2.header;
                tmp11 = jsx;
                tmp12 = closure_0;
                tmp13 = closure_2;
                obj10 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
                obj10.style = closure_2.title;
                tmp14 = closure_0;
                tmp15 = closure_2;
                intl = closure_0(closure_2[16]).intl;
                tmp16 = closure_0;
                tmp17 = closure_2;
                obj10.children = intl.string(closure_0(closure_2[16]).t["7Fjv54"]);
                items = [, ];
                items[0] = jsx(closure_0(closure_2[12]).Text, obj10);
                tmp18 = jsx;
                tmp19 = closure_0;
                tmp20 = closure_2;
                obj11 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
                obj11.style = closure_2.subtitle;
                tmp21 = closure_0;
                tmp22 = closure_2;
                intl2 = closure_0(closure_2[16]).intl;
                tmp23 = closure_0;
                tmp24 = closure_2;
                obj11.children = intl2.string(closure_0(closure_2[16]).t.ait1x0);
                items[1] = jsx(closure_0(closure_2[12]).Text, obj11);
                obj9.children = items;
                items1 = [, ];
                items1[0] = jsxs(View, obj9);
                tmp25 = jsx;
                tmp26 = f61004;
                obj12 = { label: null };
                tmp27 = closure_0;
                tmp28 = closure_2;
                intl3 = closure_0(closure_2[16]).intl;
                tmp29 = closure_0;
                tmp30 = closure_2;
                obj12.label = intl3.string(closure_0(closure_2[16]).t["1uAmCw"]);
                items1[1] = jsx(f61004, obj12);
                obj1.children = items1;
                return jsxs(Fragment, obj1);
              } else {
                friendSuggestion = item.props.friendSuggestion;
                tmp32 = closure_4;
                tmp33 = jsx;
                tmp34 = f61006;
                obj13 = { start: null, end: null, suggestion: null, selected: null, onSelect: null };
                num = 1;
                obj13.start = 1 === index;
                tmp35 = friendSuggestions;
                obj13.end = index === friendSuggestions.length;
                obj13.suggestion = friendSuggestion;
                obj13.selected = item.props.selected;
                tmp36 = closure_5;
                obj13.onSelect = closure_5;
                tmp31 = jsxs;
                items2 = [, ];
                items2[0] = jsx(f61006, obj13);
                tmp5 = null;
                if (index < friendSuggestions.length) {
                  tmp = jsx;
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = { iconPush: true, style: null };
                  tmp4 = closure_2;
                  obj.style = closure_2.divider;
                  tmp5 = jsx(closure_0(closure_2[22]).FormDivider, obj);
                }
                obj14 = { children: null };
                items2[1] = tmp5;
                obj14.children = items2;
                return tmp31(closure_4.Fragment, obj14, friendSuggestion.suggested_user.id);
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
                onSubmit(closure_1_2[21]).track(constants.FRIEND_SUGGESTION_ADDED, { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" });
              });
              return;
            }
          }
          cResult[25] = F;
          cResult[26] = L;
        }
        let items = [];
        items.push({ type: "header" });
        let item = friendSuggestions.forEach((friendSuggestion) => {
          const element = { type: "suggestedFriend", props: { friendSuggestion, selected: first[friendSuggestion.suggested_user.id] } };
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
              onSubmit(closure_1_2[21]).track(constants.FRIEND_SUGGESTION_ADDED, { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" });
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
            onSubmit(closure_1_2[21]).track(constants.FRIEND_SUGGESTION_ADDED, { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" });
          });
          return;
        }
      }
      cResult[12] = onSubmit;
      cResult[13] = first;
      cResult[14] = N;
    }
    let items1 = [tmp11, tmp13];
    cResult[7] = tmp11;
    cResult[8] = tmp13;
    cResult[9] = items1;
    const tmpResult = tmp(4586);
  }
  let obj = friendSuggestions(576);
}) : ((friendSuggestions) => {
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
  const token = friendSuggestions(4586).useToken(onSubmit(587).colors.BACKGROUND_BASE_LOW);
  let obj = friendSuggestions(4586);
  let items = [friendSuggestions(4733).hexOpacityToRgba(token, 0), ];
  let obj2 = friendSuggestions(4733);
  items[1] = friendSuggestions(4733).hexOpacityToRgba(token, 100);
  const tmp4 = first(noop.useState(reduced), 2);
  first = tmp4[0];
  noop = tmp4[1];
  let items1 = [first];
  let obj3 = friendSuggestions(4733);
  onSelect = noop.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(first);
    obj[arg0] = !first[arg0];
    closure_4(obj);
  }, items1);
  const tmp6 = closure_12();
  let keys = onSubmit(11).keys(first);
  let items2 = [friendSuggestions, first];
  let obj4 = onSubmit(11);
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
  let obj5 = { style: null, children: null };
  const items4 = [, ];
  ({ container: arr6[0], list: arr6[1] } = tmp);
  obj5.style = items4;
  const callback1 = noop.useCallback((arg0) => {
    ({ item, index } = arg0);
    if ("header" === item.type) {
      const obj2 = { children: null };
      const obj3 = { style: closure_2.header, children: null };
      const obj4 = { style: closure_2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t["7Fjv54"]);
      const items = [closure_2_8(Text_Text.Text, obj4), ];
      const obj5 = { style: closure_2.subtitle, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t.ait1x0);
      items[1] = closure_2_8(Text_Text.Text, obj5);
      obj3.children = items;
      const items1 = [v65535(View, obj3), ];
      const obj6 = { label: null };
      const intl3 = util.intl;
      obj6.label = intl3.string(util.t["1uAmCw"]);
      items1[1] = closure_2_8(closure_13, obj6);
      obj2.children = items1;
      return v65535(options, obj2);
    } else {
      const friendSuggestion = item.props.friendSuggestion;
      const obj7 = { start: 1 === index, end: index === friendSuggestions.length, suggestion: friendSuggestion, selected: item.props.selected, onSelect };
      const items2 = [closure_2_8(closure_14, obj7), ];
      let tmp5 = null;
      if (index < friendSuggestions.length) {
        const obj = { iconPush: true, style: closure_2.divider };
        tmp5 = closure_2_8(Form.FormDivider, obj);
      }
      const obj8 = { children: null };
      items2[1] = tmp5;
      obj8.children = items2;
      return v65535(noop.Fragment, obj8, friendSuggestion.suggested_user.id);
    }
  }, items3);
  let obj6 = { contentContainerStyle: null, data: null, renderItem: null };
  const someResult = keys.some((item) => first[item]);
  obj6.contentContainerStyle = { paddingHorizontal: onSubmit(587).space.PX_16, paddingBottom: tmp6 };
  obj6.data = memo;
  obj6.renderItem = callback1;
  const items5 = [closure_8(friendSuggestions(8404).FlashList, obj6), , ];
  let obj8 = { style: tmp.linearGradient, start: null, end: null, pointerEvents: "none", colors: null };
  let obj7 = { paddingHorizontal: onSubmit(587).space.PX_16, paddingBottom: tmp6 };
  obj8.start = friendSuggestions(1105).VerticalGradient.START;
  obj8.end = friendSuggestions(1105).VerticalGradient.END;
  obj8.colors = items;
  items5[1] = closure_8(onSubmit(5612), obj8);
  const obj9 = { style: tmp.redesignButton, children: null };
  const obj10 = { variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  let intl = friendSuggestions(1126).intl;
  obj10.text = intl.string(friendSuggestions(1126).t["J5/69j"]);
  obj10.onPress = function onPress() {
    const keys = SnowflakeUtilsDefault.keys(first);
    const found = keys.filter((item) => first[item]);
    onSubmit(found);
    const item = found.forEach((suggested_user_id) => {
      onSubmit(closure_1_2[21]).track(constants.FRIEND_SUGGESTION_ADDED, { suggested_user_id, suggestion_source: constants2.USER_SUGGESTIONS, location: "Contact Sync Suggestions" });
    });
  };
  obj10.disabled = !someResult;
  obj9.children = closure_8(friendSuggestions(5601).Button, obj10);
  items5[2] = closure_8(onSelect, obj9);
  obj5.children = items5;
  return closure_10(onSelect, obj5);
});