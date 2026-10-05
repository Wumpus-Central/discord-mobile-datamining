// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemAddFriendsWidget.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../../Constants.tsx";
import intl5 from "../../../../../../intl/index.native.tsx";
import RootNavigationRef from "../../../../RootNavigationRef.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../../design/void/Pressables/native/Pressables.tsx";
import InstantInviteActionCreatorsDefault from "../../../../../../actions/InstantInviteActionCreators.tsx";
import IconActionButton from "../../../shared_components/IconActionButton.tsx";
import AssetRegistryDefault from "../../../../../../../_runtime/13667_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../../../_runtime/16023_AssetRegistry.js";
import _asyncToGenerator from "../../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const IconActionButtonDefault = IconActionButton;
let c2, c4, c5;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
function getFriendInviteCode() {
  return obj(...arguments);
}
let obj = function _getFriendInviteCode() {
  obj = _asyncToGenerator(async () => {
    let obj4;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let code;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            let closure_0 = tmp4;
            code = undefined;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj4.createFriendInvite(null, constants.ADD_FRIENDS_WIDGET), done: false };
            obj4 = InstantInviteActionCreatorsDefault;
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          const presentError = closure_129_0(closure_129_2[9]).presentError;
          const tmp11 = closure_129_0(closure_129_2[9]);
          const intl = closure_129_0(closure_129_2[10]).intl;
          presentError(intl.string(closure_129_0(closure_129_2[10]).t.R0RpRX));
          c5 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          code = value.code;
          c3 = 0;
          c5 = 3;
          obj = { value: code, done: true };
          return obj;
        }
      } catch (tmp18) {
        let closure_2 = tmp18;
        if (0 === c3) {
          c5 = 3;
          throw tmp18;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function handleShare() {
  return obj(...arguments);
}
obj = function _handleShare() {
  obj = _asyncToGenerator(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_0;
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
            let closure_1 = tmp4;
            closure_0 = undefined;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          const tmp14 = closure_129_0(closure_129_2[11]);
          const handleOpenShareSheet = tmp14.handleOpenShareSheet;
          const intl = closure_129_0(closure_129_2[10]).intl;
          const formatToPlainString = intl.formatToPlainString;
          const obj5 = { link: closure_129_1(closure_129_2[12])(closure_0) };
          const PJf9P9 = closure_129_0(closure_129_2[10]).t.PJf9P9;
          handleOpenShareSheet(closure_0, null, formatToPlainString(PJf9P9, obj5), closure_129_6.ADD_FRIENDS_WIDGET);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp6) {
        c3 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
function handleLink() {
  return obj(...arguments);
}
obj = function _handleLink() {
  obj = _asyncToGenerator(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_0;
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
            let closure_1 = tmp4;
            closure_0 = undefined;
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
          closure_0 = value;
          obj = closure_129_0(closure_129_2[11]);
          obj.handleCopy(closure_0, null, closure_129_6.ADD_FRIENDS_WIDGET);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
const View = react_native.View;
const InstantInviteSources = Constants.InstantInviteSources;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const sum = IconActionButton.ICON_ACTION_BUTTON_SIZE + nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
obj = { container: obj2, title: obj3, actions: obj4, actionIcon: obj5 };
obj2 = {
  height: sum,
  paddingHorizontal: nativeDefault.space.PX_8,
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
};
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_12,
};
obj4 = { paddingHorizontal: nativeDefault.space.PX_8, flexDirection: "row", justifyContent: "flex-end" };
obj5 = { marginEnd: 0, marginStart: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let actionIcon;
        let actions;
        let first;
        let intl2;
        let items;
        let items1;
        let tmp11;
        let tmp14;
        let tmp16;
        let tmp22;
        let tmp24;
        let tmp6;
        let tmp8;
        obj = react2;
        const cResult = obj.c(19);
        const tmp4 = closure_9();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function t() {
            obj = RootNavigationRef;
            const rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              const current = rootNavigationRef.current;
              if (current != null) {
                const obj2 = {
                  screen: "add-friends",
                  params: { sourcePage: "Add Friends Widget", presentation: "card" },
                };
                current.navigate("friends", obj2);
              }
            }
          };
          cResult[0] = fn;
          first = fn;
        } else {
          first = cResult[0];
        }
        const container = tmp4.container;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl5.intl;
          const stringResult = intl.string(intl5.t.afcl67);
          cResult[1] = stringResult;
          tmp6 = stringResult;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = {
            variant: "text-md/semibold",
            color: "text-default",
            lineClamp: 1,
            maxFontSizeMultiplier: 2,
            children: intl2.string(intl5.t.afcl67),
          };
          const Text = Text_Text.Text;
          intl2 = intl5.intl;
          const tmp10 = metroImportDefault(Text, obj2);
          cResult[2] = tmp10;
          tmp8 = tmp10;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] !== tmp4.title) {
          const obj3 = {
            accessibilityLabel: tmp6,
            accessibilityRole: "button",
            onPress: first,
            style: tmp4.title,
            children: tmp8,
          };
          const tmp13 = metroImportDefault(Pressables.PressableHighlight, obj3);
          cResult[3] = tmp4.title;
          cResult[4] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[4];
        }
        ({ actions, actionIcon } = tmp4);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl5.intl;
          const stringResult1 = intl3.string(intl5.t.Ej3B3Y);
          cResult[5] = stringResult1;
          tmp14 = stringResult1;
        } else {
          tmp14 = cResult[5];
        }
        if (cResult[6] !== tmp4.actionIcon) {
          const obj4 = {
            style: actionIcon,
            variant: "filled",
            source: AssetRegistryDefault,
            onPress: handleShare,
            accessibilityLabel: tmp14,
          };
          const tmp19 = IconActionButtonDefault;
          const tmp21 = metroImportDefault(tmp19, obj4);
          cResult[6] = tmp4.actionIcon;
          cResult[7] = tmp21;
          tmp16 = tmp21;
        } else {
          tmp16 = cResult[7];
        }
        const actionIcon2 = tmp4.actionIcon;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = intl5.intl;
          const stringResult2 = intl4.string(intl5.t.WqhZss);
          cResult[8] = stringResult2;
          tmp22 = stringResult2;
        } else {
          tmp22 = cResult[8];
        }
        if (cResult[9] !== tmp4.actionIcon) {
          const obj5 = {
            style: actionIcon2,
            variant: "filled",
            source: AssetRegistryDefault2,
            onPress: handleLink,
            accessibilityLabel: tmp22,
          };
          const tmp27 = IconActionButtonDefault;
          const tmp29 = metroImportDefault(tmp27, obj5);
          cResult[9] = tmp4.actionIcon;
          cResult[10] = tmp29;
          tmp24 = tmp29;
        } else {
          tmp24 = cResult[10];
        }
        if (cResult[11] === tmp4.actions) {
          if (cResult[12] === tmp24) {
            let tmp30;
            if (cResult[13] === tmp16) {
              tmp30 = cResult[14];
            }
            if (cResult[15] === tmp4.container) {
              if (cResult[16] === tmp30) {
                let tmp32;
                if (cResult[17] === tmp11) {
                  tmp32 = cResult[18];
                }
                return tmp32;
              }
            }
            const obj6 = { style: container, collapsable: false, children: items };
            items = [tmp11, tmp30];
            const tmp35 = metroImportAll(View, obj6);
            cResult[15] = tmp4.container;
            cResult[16] = tmp30;
            cResult[17] = tmp11;
            cResult[18] = tmp35;
            tmp32 = tmp35;
          }
        }
        const obj7 = { style: actions, children: items1 };
        items1 = [tmp16, tmp24];
        const tmp31 = metroImportAll(View, obj7);
        cResult[11] = tmp4.actions;
        cResult[12] = tmp24;
        cResult[13] = tmp16;
        cResult[14] = tmp31;
        tmp30 = tmp31;
      }
    : () => {
        let Text;
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let items;
        let items1;
        let obj3;
        const tmp = closure_9();
        obj = { style: tmp.container, collapsable: false, children: items };
        const callback = react.useCallback(() => {
          obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = {
                screen: "add-friends",
                params: { sourcePage: "Add Friends Widget", presentation: "card" },
              };
              current.navigate("friends", obj2);
            }
          }
        }, []);
        let obj2 = {
          accessibilityLabel: intl.string(intl5.t.afcl67),
          accessibilityRole: "button",
          onPress: callback,
          style: tmp.title,
          children: metroImportDefault(Text, obj3),
        };
        const PressableHighlight = Pressables.PressableHighlight;
        intl = intl5.intl;
        obj3 = {
          variant: "text-md/semibold",
          color: "text-default",
          lineClamp: 1,
          maxFontSizeMultiplier: 2,
          children: intl2.string(intl5.t.afcl67),
        };
        Text = Text_Text.Text;
        intl2 = intl5.intl;
        items = [metroImportDefault(PressableHighlight, obj2)];
        const obj4 = { style: tmp.actions, children: items1 };
        const obj5 = {
          style: tmp.actionIcon,
          variant: "filled",
          source: AssetRegistryDefault,
          onPress: handleShare,
          accessibilityLabel: intl3.string(intl5.t.Ej3B3Y),
        };
        const tmp3 = IconActionButtonDefault;
        intl3 = intl5.intl;
        items1 = [metroImportDefault(tmp3, obj5)];
        const obj6 = {
          style: tmp.actionIcon,
          variant: "filled",
          source: AssetRegistryDefault2,
          onPress: handleLink,
          accessibilityLabel: intl4.string(intl5.t.WqhZss),
        };
        const tmp4 = IconActionButtonDefault;
        intl4 = intl5.intl;
        items1[1] = metroImportDefault(tmp4, obj6);
        items[1] = metroImportAll(View, obj4);
        return metroImportAll(View, obj);
      },
);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/MessagesItemAddFriendsWidget.tsx",
);

export default memoResult;
export const MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT = sum;
