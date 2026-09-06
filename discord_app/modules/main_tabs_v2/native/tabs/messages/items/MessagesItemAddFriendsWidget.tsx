// === Module 16098: MessagesItemAddFriendsWidget ===

// Module 16098 (MessagesItemAddFriendsWidget)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8378 */;
import IconActionButtonDefault from "IconActionButton" /* 13253 */;
import _modDef13854 from "module_13854" /* 13854 */;
import _modDef16099 from "module_16099" /* 16099 */;
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
let closure_11 = async function _getFriendInviteCode(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          let code;
          c3 = 1;
          c4 = 2;
          c5 = 1;
          const obj1 = { value: InstantInviteActionCreatorsDefault.createFriendInvite(null, constants.ADD_FRIENDS_WIDGET), done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        let obj2 = closure_129_0(closure_129_2[9]);
        const intl = closure_129_0(closure_129_2[10]).intl;
        obj2.presentError(intl.string(closure_129_0(closure_129_2[10]).t.R0RpRX));
        c5 = 3;
        obj2 = { value: undefined, done: true };
        return obj2;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        code = value.code;
        c3 = 0;
        c5 = 3;
        obj = { value: code, done: true };
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
let closure_13 = async function _handleShare(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: getFriendInviteCode(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        const obj5 = closure_129_0(closure_129_2[11]);
        const intl = closure_129_0(closure_129_2[10]).intl;
        const obj2 = { link: closure_129_1(closure_129_2[12])(closure_128_0) };
        obj5.handleOpenShareSheet(closure_128_0, null, intl.formatToPlainString(closure_129_0(closure_129_2[10]).t.PJf9P9, obj2), closure_129_6.ADD_FRIENDS_WIDGET);
        c3 = 3;
        return { value: "HermesInternal", done: null };
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
let closure_15 = async function _handleLink(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: getFriendInviteCode(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        closure_128_0 = value;
        obj = closure_129_0(closure_129_2[11]);
        obj.handleCopy(closure_128_0, null, closure_129_6.ADD_FRIENDS_WIDGET);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp15) {
      c3 = tmp;
      throw tmp15;
    }
  }
};
const View = fn(17).View;
const InstantInviteSources = fn(1074).InstantInviteSources;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const sum = fn(13253).ICON_ACTION_BUTTON_SIZE + nativeDefault.space.PX_16;
fn(4560);
let obj = { container: null, title: null, actions: null, actionIcon: null };
obj = { height: sum, paddingHorizontal: nativeDefault.space.PX_8, justifyContent: "space-between", flexDirection: "row", alignItems: "center" };
obj.container = obj;
const createStyles = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.md, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
obj.title = createStyles;
obj.actions = { paddingHorizontal: nativeDefault.space.PX_8, flexDirection: "row", justifyContent: "flex-end" };
let obj2 = { paddingHorizontal: nativeDefault.space.PX_8, flexDirection: "row", justifyContent: "flex-end" };
obj.actionIcon = { marginEnd: 0, marginStart: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { marginEnd: 0, marginStart: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemAddFriendsWidget.tsx");

export default noop.memo(function MessagesItemAddFriendsWidget() {
  const tmp = closure_9();
  let obj = { style: tmp.container, collapsable: false, children: null };
  const callback = noop.useCallback(() => {
    let obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        obj = { screen: "add-friends", params: { sourcePage: "Add Friends Widget", presentation: "card" } };
        current.navigate("friends", obj);
      }
    }
  }, []);
  obj = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.afcl67);
  obj.onPress = callback;
  obj.style = tmp.title;
  obj = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, maxFontSizeMultiplier: 2, children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.afcl67);
  obj.children = React5(Text_Text.Text, obj);
  const items = [React5(Pressables.PressableHighlight, obj), ];
  const obj1 = { style: tmp.actions, children: null };
  const obj2 = { style: tmp.actionIcon, variant: "filled", source: _modDef13854, onPress: handleShare, accessibilityLabel: null };
  const intl3 = util.intl;
  obj2.accessibilityLabel = intl3.string(util.t.Ej3B3Y);
  const items1 = [React5(IconActionButtonDefault, obj2), ];
  const obj3 = { style: tmp.actionIcon, variant: "filled", source: null, onPress: null, accessibilityLabel: null };
  obj3.source = _modDef16099;
  obj3.onPress = handleLink;
  const intl4 = util.intl;
  obj3.accessibilityLabel = intl4.string(util.t.WqhZss);
  items1[1] = React5(IconActionButtonDefault, obj3);
  obj1.children = items1;
  items[1] = React6(View, obj1);
  obj.children = items;
  return React6(View, obj);
});
export const MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT = sum;