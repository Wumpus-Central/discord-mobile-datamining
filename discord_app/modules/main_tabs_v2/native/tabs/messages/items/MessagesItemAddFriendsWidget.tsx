// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemAddFriendsWidget.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import Text from "../../../../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../../../../design/void/Pressables/native/Pressables.tsx";
import ButtonBadgeDefault from "../../../shared_components/IconActionButton.tsx";
import registerAssetDefault from "../../../../../../../_runtime/13832_registerAsset.js";
import registerAssetDefault2 from "../../../../../../../_runtime/15935_registerAsset.js";
import closure_3 from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { InstantInviteSources } from "../../../../../../Constants.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function getFriendInviteCode() {
  const self = this;
  const apply = _getFriendInviteCode.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getFriendInviteCode() {
  const self = this;
  const tmp = callback(function* () {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            let code = tmp7;
            code = undefined;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_1(closure_1_2[8]).createFriendInvite(null, closure_1_6.ADD_FRIENDS_WIDGET);
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          let obj2 = code(4193);
          const intl = code(1233).intl;
          obj2.presentError(intl.string(code(1233).t.R0RpRX));
          c5 = 3;
          obj2 = { value: null, done: true };
          obj2[0] = undefined;
          return obj2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          code = arg1.code;
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = code;
          return obj;
        }
      } catch (tmp20) {
        dependencyMap = tmp20;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp20;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleShare() {
  const self = this;
  const apply = _handleShare.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleShare() {
  const self = this;
  const tmp = callback(function* () {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback2 = tmp5;
            let callback = tmp2;
            callback = undefined;
            dependencyMap = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_10();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          callback = arg1;
          const obj5 = callback(9935);
          const intl = callback(1233).intl;
          const obj2 = { link: null };
          obj2[0] = callback2(7514)(callback);
          obj5.handleOpenShareSheet(
            callback,
            null,
            intl.formatToPlainString(callback(1233).t.PJf9P9, obj2),
            constants.ADD_FRIENDS_WIDGET,
          );
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        c3 = tmp;
        throw tmp7;
      }
    }
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleLink() {
  const self = this;
  const apply = _handleLink.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleLink() {
  const self = this;
  const tmp = callback(function* () {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp5;
            let callback = tmp2;
            callback = undefined;
            table = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_10();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          callback = arg1;
          obj = callback(table[11]);
          obj.handleCopy(callback, null, constants.ADD_FRIENDS_WIDGET);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c4 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const sum = require("ButtonBadge").ICON_ACTION_BUTTON_SIZE + ThemesDefault.space.PX_16;
let obj = { container: null, title: null, actions: null, actionIcon: null };
obj = {
  height: sum,
  paddingHorizontal: ThemesDefault.space.PX_8,
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
};
obj[0] = obj;
createCacheKey = {
  flexDirection: "row",
  alignItems: "center",
  borderRadius: ThemesDefault.radii.md,
  paddingHorizontal: ThemesDefault.space.PX_8,
  paddingVertical: ThemesDefault.space.PX_12,
};
obj[1] = createCacheKey;
obj[2] = { paddingHorizontal: ThemesDefault.space.PX_8, flexDirection: "row", justifyContent: "flex-end" };
let obj2 = { paddingHorizontal: ThemesDefault.space.PX_8, flexDirection: "row", justifyContent: "flex-end" };
obj[3] = { marginEnd: 0, marginStart: ThemesDefault.space.PX_8 };
let closure_9 = createCacheKey.createStyles(obj);
let obj3 = { marginEnd: 0, marginStart: ThemesDefault.space.PX_8 };
const memoResult = importAllResult.memo(function MessagesItemAddFriendsWidget() {
  const tmp = callback4();
  let obj = { style: tmp.container, collapsable: false, children: null };
  const callback = importAllResult.useCallback(() => {
    let obj = callback(table[13]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        obj = { screen: "add-friends", params: null };
        obj[1] = { sourcePage: "Add Friends Widget", presentation: "card" };
        current.navigate("friends", obj);
      }
    }
  }, []);
  obj = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.afcl67);
  obj[2] = callback;
  obj[3] = tmp.title;
  obj = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, maxFontSizeMultiplier: 2, children: null };
  const intl2 = getSystemLocale.intl;
  obj[4] = intl2.string(getSystemLocale.t.afcl67);
  obj[4] = callback2(Text.Text, obj);
  const items = [callback2(PressableBase.PressableHighlight, obj)];
  obj1 = { style: tmp.actions, children: null };
  const obj2 = {
    style: tmp.actionIcon,
    variant: "filled",
    source: registerAssetDefault,
    onPress: handleShare,
    accessibilityLabel: null,
  };
  const intl3 = getSystemLocale.intl;
  obj2[4] = intl3.string(getSystemLocale.t.Ej3B3Y);
  const items1 = [callback2(ButtonBadgeDefault, obj2)];
  const obj3 = { style: tmp.actionIcon, variant: "filled", source: null, onPress: null, accessibilityLabel: null };
  const tmp3 = ButtonBadgeDefault;
  obj3[2] = registerAssetDefault2;
  obj3[3] = handleLink;
  const intl4 = getSystemLocale.intl;
  obj3[4] = intl4.string(getSystemLocale.t.WqhZss);
  items1[1] = callback2(ButtonBadgeDefault, obj3);
  obj1[1] = items1;
  items[1] = callback3(View, obj1);
  obj[2] = items;
  return callback3(View, obj);
});
const result = require("set").fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/MessagesItemAddFriendsWidget.tsx",
);

export default memoResult;
export const MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT = sum;
