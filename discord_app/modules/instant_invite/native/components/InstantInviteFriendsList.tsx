// discord_app/modules/instant_invite/native/components/InstantInviteFriendsList.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import InstantInviteRowDefault from "InstantInviteRow.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let code;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function keyExtractor(item) {
  return item.item.id;
}
const Fonts = Constants.Fonts;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { emptyTitle: obj2, emptyBody: obj3, goToFriendsLink: { textAlign: "center" } };
obj2 = { textTransform: "none", lineHeight: 24 };
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3 = { lineHeight: 20, fontWeight: "600" };
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const ListEmptyComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items1;
      let obj3;
      let tmp5;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(16);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl5.intl;
        const stringResult = intl.string(intl5.t.dz4UlO);
        const intl2 = intl5.intl;
        const stringResult1 = intl2.string(intl5.t.MBQBI7);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp5 = stringResult;
        tmp6 = stringResult1;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] === tmp4.emptyBody) {
        let tmp9;
        let tmp11;
        let tmp13;
        let tmp12;
        let tmp15;
        let tmp16;
        let tmp18;
        if (cResult[3] === tmp4.emptyTitle) {
          tmp9 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function p() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj2 = RootNavigationRef;
            const rootNavigationRef = obj2.getRootNavigationRef();
            if (null != rootNavigationRef) {
              const obj3 = { screen: "add-friends", params: { sourcePage: "Instant Invite Empty State" } };
              rootNavigationRef.navigate("friends", obj3);
            }
          };
          cResult[5] = fn;
          tmp11 = fn;
        } else {
          tmp11 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl5.intl;
          const stringResult2 = intl3.string(intl5.t.a7FVbE);
          const rect = { top: 8, left: 8, bottom: 8, right: 8 };
          cResult[6] = stringResult2;
          cResult[7] = rect;
          tmp13 = rect;
          tmp12 = stringResult2;
        } else {
          tmp12 = cResult[6];
          tmp13 = cResult[7];
        }
        if (cResult[8] !== tmp4.goToFriendsLink) {
          const items = [tmp4.goToFriendsLink];
          cResult[8] = tmp4.goToFriendsLink;
          cResult[9] = items;
          tmp15 = items;
        } else {
          tmp15 = cResult[9];
        }
        const _Symbol3 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = intl5.intl;
          const stringResult3 = intl4.string(intl5.t.a7FVbE);
          cResult[10] = stringResult3;
          tmp16 = stringResult3;
        } else {
          tmp16 = cResult[10];
        }
        if (cResult[11] !== tmp15) {
          let obj2 = {
            onPress: tmp11,
            accessibilityRole: "link",
            accessibilityLabel: tmp12,
            hitSlop: tmp13,
            children: React3(Text_Text.Text, obj3),
          };
          const PressableOpacity = Pressables.PressableOpacity;
          obj3 = { style: tmp15, variant: "text-sm/semibold", color: "text-link", children: tmp16 };
          const tmp20 = React3(PressableOpacity, obj2);
          cResult[11] = tmp15;
          cResult[12] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[12];
        }
        if (cResult[13] === tmp9) {
          let tmp21;
          if (cResult[14] === tmp18) {
            tmp21 = cResult[15];
          }
          return tmp21;
        }
        const obj4 = { children: items1 };
        items1 = [tmp9, tmp18];
        const tmp24 = metroRequire(hasOwnProperty, obj4);
        cResult[13] = tmp9;
        cResult[14] = tmp18;
        cResult[15] = tmp24;
        tmp21 = tmp24;
      }
      const obj5 = { title: tmp5, body: tmp6, titleStyle: tmp4.emptyTitle, bodyStyle: tmp4.emptyBody };
      const tmp10 = React3(native.RefreshEmptyState, obj5);
      cResult[2] = tmp4.emptyBody;
      cResult[3] = tmp4.emptyTitle;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : () => {
      let Text;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let obj7;
      const tmp = closure_7();
      let obj = { children: items };
      let obj3 = {
        title: intl.string(intl5.t.dz4UlO),
        body: intl2.string(intl5.t.MBQBI7),
        titleStyle: null,
        bodyStyle: null,
      };
      const RefreshEmptyState = native.RefreshEmptyState;
      intl = intl5.intl;
      intl2 = intl5.intl;
      ({ emptyTitle: obj2.titleStyle, emptyBody: obj2.bodyStyle } = tmp);
      items = [React3(RefreshEmptyState, obj3)];
      const obj4 = {
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = RootNavigationRef;
          const rootNavigationRef = obj2.getRootNavigationRef();
          if (null != rootNavigationRef) {
            const obj3 = { screen: "add-friends", params: { sourcePage: "Instant Invite Empty State" } };
            rootNavigationRef.navigate("friends", obj3);
          }
        },
        accessibilityRole: "link",
        accessibilityLabel: intl3.string(intl5.t.a7FVbE),
        hitSlop: { top: 8, left: 8, bottom: 8, right: 8 },
        children: React3(Text, obj7),
      };
      const PressableOpacity = Pressables.PressableOpacity;
      intl3 = intl5.intl;
      obj7 = { style: items1, variant: "text-sm/semibold", color: "text-link", children: intl4.string(intl5.t.a7FVbE) };
      items1 = [tmp.goToFriendsLink];
      Text = Text_Text.Text;
      intl4 = intl5.intl;
      items[1] = React3(PressableOpacity, obj4);
      return metroRequire(hasOwnProperty, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (code) => {
      let onInviteSent;
      let obj = code(onInviteSent[7]);
      const cResult = obj.c(13);
      const tmp = code;
      code = code.code;
      const onPressAvatar = code.onPressAvatar;
      onInviteSent = code.onInviteSent;
      const data = code.data;
      const source = code.source;
      if (cResult[0] === code) {
        if (cResult[1] === data.length) {
          if (cResult[2] === onInviteSent) {
            if (cResult[3] === onPressAvatar) {
              let tmp4;
              let tmp6;
              let tmp9;
              if (cResult[4] === source) {
                tmp4 = cResult[5];
              }
              const _Symbol = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { isKeyboardAwareOnAndroid: false };
                cResult[6] = obj2;
                tmp6 = obj2;
              } else {
                tmp6 = cResult[6];
              }
              const sum = onPressAvatar(tmp2[5]).space.PX_16 + onPressAvatar(tmp2[15])(tmp6).insets.bottom;
              const tmp7 = onPressAvatar;
              if (cResult[7] !== sum) {
                const obj3 = { paddingBottom: sum, paddingHorizontal: tmp7(onInviteSent[5]).space.PX_12 };
                cResult[7] = sum;
                cResult[8] = obj3;
                tmp9 = obj3;
              } else {
                tmp9 = cResult[8];
              }
              if (cResult[9] === data) {
                if (cResult[10] === tmp4) {
                  let tmp10;
                  if (cResult[11] === tmp9) {
                    tmp10 = cResult[12];
                  }
                  return tmp10;
                }
              }
              const obj4 = {
                contentContainerStyle: tmp9,
                bounces: false,
                renderItem: tmp4,
                data,
                keyExtractor,
                keyboardShouldPersistTaps: "always",
                ListEmptyComponent,
              };
              const tmp14 = source(tmp(onInviteSent[16]).BottomSheetFlatList, obj4);
              cResult[9] = data;
              cResult[10] = tmp4;
              cResult[11] = tmp9;
              cResult[12] = tmp14;
              tmp10 = tmp14;
            }
          }
        }
      }
      const fn = function n(row) {
        const index = row.index;
        const obj = {
          start: 0 === index,
          end: index === data.length - 1,
          row: row.item,
          onPressAvatar,
          onInviteSent,
          code,
          source,
        };
        return React3(InstantInviteRowDefault, obj);
      };
      cResult[0] = code;
      cResult[1] = data.length;
      cResult[2] = onInviteSent;
      cResult[3] = onPressAvatar;
      cResult[4] = source;
      cResult[5] = fn;
      tmp4 = fn;
    }
  : (code) => {
      let obj2;
      code = code.code;
      const onPressAvatar = code.onPressAvatar;
      const onInviteSent = code.onInviteSent;
      const data = code.data;
      const source = code.source;
      const items = [onPressAvatar, onInviteSent, code, source, data.length];
      const callback = data.useCallback((row) => {
        const index = row.index;
        const obj = {
          start: 0 === index,
          end: index === data.length - 1,
          row: row.item,
          onPressAvatar,
          onInviteSent,
          code,
          source,
        };
        return React3(InstantInviteRowDefault, obj);
      }, items);
      const insets = onPressAvatar(onInviteSent[15])({ isKeyboardAwareOnAndroid: false }).insets;
      let obj = {
        contentContainerStyle: obj2,
        bounces: false,
        renderItem: callback,
        data,
        keyExtractor,
        keyboardShouldPersistTaps: "always",
        ListEmptyComponent,
      };
      obj2 = {
        paddingBottom: onPressAvatar(onInviteSent[5]).space.PX_16 + insets.bottom,
        paddingHorizontal: onPressAvatar(onInviteSent[5]).space.PX_12,
      };
      const BottomSheetFlatList = code(onInviteSent[16]).BottomSheetFlatList;
      return source(BottomSheetFlatList, obj);
    };
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteFriendsList.tsx");

export default tmp8;
