// === Module 16510: MessagesItemAddFriendsWidget ===

// Module 16510 (MessagesItemAddFriendsWidget)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import Text_Text from "Text/Text" /* 5088 */;
import Pressables from "Pressables" /* 6184 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8496 */;
import IconActionButtonDefault from "IconActionButton" /* 12844 */;
import _modDef14053 from "module_14053" /* 14053 */;
import _modDef16511 from "module_16511" /* 16511 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function getFriendInviteCode() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _getFriendInviteCode() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          let code;
          c3 = 1;
          c4 = 2;
          c5 = 1;
          const obj6 = { value: InstantInviteActionCreatorsDefault.createFriendInvite(null, constants.ADD_FRIENDS_WIDGET), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        const intl = closure_129_0(closure_129_2[10]).intl;
        closure_129_0(closure_129_2[9]).presentError(intl.string(closure_129_0(closure_129_2[10]).t.R0RpRX));
        c5 = 3;
        const obj7 = { value: undefined, done: true };
        return obj7;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        code = value.code;
        c3 = 0;
        c5 = 3;
        const obj = { value: code, done: true };
        return obj;
      }
    } catch (tmp20) {
      closure_2 = tmp20;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp20;
      } else {
        c4 = tmp;
      }
    }
  }
};
function handleShare() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _handleShare() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: getFriendInviteCode(), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        const obj5 = closure_129_0(closure_129_2[11]);
        const intl = closure_129_0(closure_129_2[10]).intl;
        const obj6 = { link: closure_129_1(closure_129_2[12])(closure_128_0) };
        obj5.handleOpenShareSheet(closure_128_0, null, intl.formatToPlainString(closure_129_0(closure_129_2[10]).t.PJf9P9, obj6), closure_129_6.ADD_FRIENDS_WIDGET);
        c3 = 3;
        return { value: "IconComponent", done: "+51" };
      }
    } catch (tmp7) {
      c3 = tmp;
      throw tmp7;
    }
  }
};
function handleLink() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _handleLink() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: getFriendInviteCode(), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_128_0 = value;
        closure_129_0(closure_129_2[11]).handleCopy(closure_128_0, null, closure_129_6.ADD_FRIENDS_WIDGET);
        c3 = 3;
        return { value: "IconComponent", done: "+51" };
      }
    } catch (tmp15) {
      c3 = tmp;
      throw tmp15;
    }
  }
};
const View = fn(17).View;
const InstantInviteSources = fn(1085).InstantInviteSources;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const sum = fn(12844).ICON_ACTION_BUTTON_SIZE + nativeDefault.space.PX_16;
const createStyles = fn(5092);
let obj = { container: { height: sum, paddingHorizontal: nativeDefault.space.PX_8, justifyContent: "space-between", flexDirection: "row", alignItems: "center" }, title: null, actions: null, actionIcon: null };
let obj3 = { height: sum, paddingHorizontal: nativeDefault.space.PX_8, justifyContent: "space-between", flexDirection: "row", alignItems: "center" };
obj.title = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.md, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
let obj4 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.md, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
obj.actions = { paddingHorizontal: nativeDefault.space.PX_8, flexDirection: "row", justifyContent: "flex-end" };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_8, flexDirection: "row", justifyContent: "flex-end" };
obj.actionIcon = { marginEnd: 0, marginStart: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj6 = { marginEnd: 0, marginStart: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemAddFriendsWidget.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesItemAddFriendsWidget() {
  const cResult = c.c(19);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (rootNavigationRef != null) {
        const current = rootNavigationRef.current;
        if (current != null) {
          const obj2 = { screen: "add-friends", params: { sourcePage: "Add Friends Widget", presentation: "card" } };
          current.navigate("friends", obj2);
        }
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.afcl67);
    cResult[1] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, maxFontSizeMultiplier: 2, children: null };
    const intl2 = util.intl;
    obj2.children = intl2.string(util.t.afcl67);
    const tmp10 = React5(Text_Text.Text, obj2);
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp4.title) {
    const obj3 = { accessibilityLabel: tmp6, accessibilityRole: "button", onPress: first, style: tmp4.title, children: tmp8 };
    const tmp13 = React5(Pressables.PressableHighlight, obj3);
    cResult[3] = tmp4.title;
    cResult[4] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  ({ actions, actionIcon } = tmp4);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult1 = intl3.string(util.t.Ej3B3Y);
    cResult[5] = stringResult1;
    let tmp14 = stringResult1;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== tmp4.actionIcon) {
    const obj4 = { style: actionIcon, variant: "filled", source: _modDef14053, onPress: handleShare, accessibilityLabel: tmp14 };
    const tmp21 = React5(IconActionButtonDefault, obj4);
    cResult[6] = tmp4.actionIcon;
    cResult[7] = tmp21;
    let tmp16 = tmp21;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = util.intl;
    const stringResult2 = intl4.string(util.t.WqhZss);
    cResult[8] = stringResult2;
    let tmp22 = stringResult2;
  } else {
    tmp22 = cResult[8];
  }
  if (cResult[9] !== tmp4.actionIcon) {
    const obj5 = { style: tmp4.actionIcon, variant: "filled", source: _modDef16511, onPress: handleLink, accessibilityLabel: tmp22 };
    const tmp29 = React5(IconActionButtonDefault, obj5);
    cResult[9] = tmp4.actionIcon;
    cResult[10] = tmp29;
    let tmp24 = tmp29;
  } else {
    tmp24 = cResult[10];
  }
  if (cResult[11] === tmp4.actions) {
    if (cResult[12] === tmp24) {
      if (cResult[13] === tmp16) {
        let tmp30 = cResult[14];
      }
      if (cResult[15] === tmp4.container) {
        if (cResult[16] === tmp30) {
          if (cResult[17] === tmp11) {
            let tmp32 = cResult[18];
          }
          return tmp32;
        }
      }
      const obj6 = { style: tmp4.container, collapsable: false, children: null };
      const items = [tmp11, tmp30];
      obj6.children = items;
      const tmp35 = closure_1_8(View, obj6);
      cResult[15] = tmp4.container;
      cResult[16] = tmp30;
      cResult[17] = tmp11;
      cResult[18] = tmp35;
      tmp32 = tmp35;
    }
  }
  const obj7 = { style: actions, children: null };
  const items1 = [tmp16, tmp24];
  obj7.children = items1;
  const tmp31 = closure_1_8(View, obj7);
  cResult[11] = tmp4.actions;
  cResult[12] = tmp24;
  cResult[13] = tmp16;
  cResult[14] = tmp31;
  tmp30 = tmp31;
}) : (function MessagesItemAddFriendsWidget() {
  const tmp = closure_9();
  const obj = { style: tmp.container, collapsable: false, children: null };
  const callback = noop.useCallback(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        const obj2 = { screen: "add-friends", params: { sourcePage: "Add Friends Widget", presentation: "card" } };
        current.navigate("friends", obj2);
      }
    }
  }, []);
  let obj2 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.afcl67);
  obj2.onPress = callback;
  obj2.style = tmp.title;
  const obj3 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, maxFontSizeMultiplier: 2, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.afcl67);
  obj2.children = React5(Text_Text.Text, obj3);
  const items = [React5(Pressables.PressableHighlight, obj2), ];
  const obj4 = { style: tmp.actions, children: null };
  const obj5 = { style: tmp.actionIcon, variant: "filled", source: _modDef14053, onPress: handleShare, accessibilityLabel: null };
  const intl3 = util.intl;
  obj5.accessibilityLabel = intl3.string(util.t.Ej3B3Y);
  const items1 = [React5(IconActionButtonDefault, obj5), ];
  const obj6 = { style: tmp.actionIcon, variant: "filled", source: null, onPress: null, accessibilityLabel: null };
  obj6.source = _modDef16511;
  obj6.onPress = handleLink;
  const intl4 = util.intl;
  obj6.accessibilityLabel = intl4.string(util.t.WqhZss);
  items1[1] = React5(IconActionButtonDefault, obj6);
  obj4.children = items1;
  items[1] = closure_1_8(View, obj4);
  obj.children = items;
  return closure_1_8(View, obj);
}));
export const MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT = sum;