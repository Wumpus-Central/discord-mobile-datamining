// discord_app/modules/instant_invite/native/components/InstantInviteFriendsList.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import InstantInviteRowDefault from "InstantInviteRow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";

require = fn;
function keyExtractor(item) {
  return item.item.id;
}
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { emptyTitle: null, emptyBody: null, goToFriendsLink: null };
let obj3 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3.textTransform = "none";
obj3.lineHeight = 24;
obj2.emptyTitle = obj3;
let obj4 = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
obj4.lineHeight = 20;
obj4.fontWeight = "600";
obj2.emptyBody = obj4;
obj2.goToFriendsLink = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const ListEmptyComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? function FriendsEmptyComponent() {
      const cResult = c.c(14);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.dz4UlO);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.MBQBI7);
        cResult[0] = stringResult;
        cResult[1] = stringResult1;
        tmp5 = stringResult;
        tmp6 = stringResult1;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] === tmp4.emptyBody) {
        if (cResult[3] === tmp4.emptyTitle) {
          let tmp9 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function p() {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
            if (null != rootNavigationRef) {
              const obj3 = { screen: "add-friends", params: { sourcePage: "Instant Invite Empty State" } };
              rootNavigationRef.navigate("friends", obj3);
            }
          };
          cResult[5] = fn;
          let tmp11 = fn;
        } else {
          tmp11 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = util.intl;
          const stringResult2 = intl3.string(util.t.a7FVbE);
          const rect = { top: 8, left: 8, bottom: 8, right: 8 };
          cResult[6] = stringResult2;
          cResult[7] = rect;
          let tmp13 = rect;
          let tmp12 = stringResult2;
        } else {
          tmp12 = cResult[6];
          tmp13 = cResult[7];
        }
        const _Symbol3 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = util.intl;
          const stringResult3 = intl4.string(util.t.a7FVbE);
          cResult[8] = stringResult3;
          let tmp15 = stringResult3;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] !== tmp4.goToFriendsLink) {
          const obj2 = {
            onPress: tmp11,
            accessibilityRole: "link",
            accessibilityLabel: tmp12,
            hitSlop: tmp13,
            children: null,
          };
          let obj3 = { style: tmp4.goToFriendsLink, variant: "text-sm/semibold", color: "text-link", children: tmp15 };
          obj2.children = React4(Text_Text.Text, obj3);
          const tmp19 = React4(Pressables.PressableOpacity, obj2);
          cResult[9] = tmp4.goToFriendsLink;
          cResult[10] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[10];
        }
        if (cResult[11] === tmp9) {
          if (cResult[12] === tmp17) {
            let tmp20 = cResult[13];
          }
          return tmp20;
        }
        const obj4 = { children: null };
        const items = [tmp9, tmp17];
        obj4.children = items;
        const tmp23 = timestampProducer(hasOwnProperty, obj4);
        cResult[11] = tmp9;
        cResult[12] = tmp17;
        cResult[13] = tmp23;
        tmp20 = tmp23;
      }
      const tmp10 = React4(native.RefreshEmptyState, {
        title: tmp5,
        body: tmp6,
        titleStyle: tmp4.emptyTitle,
        bodyStyle: tmp4.emptyBody,
      });
      cResult[2] = tmp4.emptyBody;
      cResult[3] = tmp4.emptyTitle;
      cResult[4] = tmp10;
      tmp9 = tmp10;
      const obj5 = { title: tmp5, body: tmp6, titleStyle: tmp4.emptyTitle, bodyStyle: tmp4.emptyBody };
    }
  : function FriendsEmptyComponent() {
      const tmp = closure_7();
      let obj = { children: null };
      let obj3 = { title: null, body: null, titleStyle: null, bodyStyle: null };
      const intl = util.intl;
      obj3.title = intl.string(util.t.dz4UlO);
      const intl2 = util.intl;
      obj3.body = intl2.string(util.t.MBQBI7);
      ({ emptyTitle: obj2.titleStyle, emptyBody: obj2.bodyStyle } = tmp);
      const items = [React4(native.RefreshEmptyState, obj3)];
      const obj4 = {
        onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
          if (null != rootNavigationRef) {
            const obj3 = { screen: "add-friends", params: { sourcePage: "Instant Invite Empty State" } };
            rootNavigationRef.navigate("friends", obj3);
          }
        },
        accessibilityRole: "link",
        accessibilityLabel: null,
        hitSlop: null,
        children: null,
      };
      const intl3 = util.intl;
      obj4.accessibilityLabel = intl3.string(util.t.a7FVbE);
      obj4.hitSlop = { top: 8, left: 8, bottom: 8, right: 8 };
      const obj7 = { style: tmp.goToFriendsLink, variant: "text-sm/semibold", color: "text-link", children: null };
      const intl4 = util.intl;
      obj7.children = intl4.string(util.t.a7FVbE);
      obj4.children = React4(Text_Text.Text, obj7);
      items[1] = React4(Pressables.PressableOpacity, obj4);
      obj.children = items;
      return timestampProducer(hasOwnProperty, obj);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteFriendsList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function InstantInviteFriendsList(code) {
      const cResult = code(onInviteSent[7]).c(13);
      code = code.code;
      const onPressAvatar = code.onPressAvatar;
      onInviteSent = code.onInviteSent;
      const data = code.data;
      const source = code.source;
      if (cResult[0] === code) {
        if (cResult[1] === data.length) {
          if (cResult[2] === onInviteSent) {
            if (cResult[3] === onPressAvatar) {
              if (cResult[4] === source) {
                let tmp4 = cResult[5];
              }
              const _Symbol = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { isKeyboardAwareOnAndroid: false };
                cResult[6] = obj2;
                let tmp6 = obj2;
              } else {
                tmp6 = cResult[6];
              }
              const sum = onPressAvatar(tmp2[5]).space.PX_16 + onPressAvatar(tmp2[15])(tmp6).insets.bottom;
              if (cResult[7] !== sum) {
                const obj3 = { paddingBottom: sum, paddingHorizontal: tmp7(tmp2[5]).space.PX_12 };
                cResult[7] = sum;
                cResult[8] = obj3;
                let tmp9 = obj3;
              } else {
                tmp9 = cResult[8];
              }
              if (cResult[9] === data) {
                if (cResult[10] === tmp4) {
                  if (cResult[11] === tmp9) {
                    let tmp10 = cResult[12];
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
              const tmp14 = source(tmp(tmp2[16]).BottomSheetFlatList, obj4);
              cResult[9] = data;
              cResult[10] = tmp4;
              cResult[11] = tmp9;
              cResult[12] = tmp14;
              tmp10 = tmp14;
              tmp7 = onPressAvatar;
            }
          }
        }
      }
      const fn = function n(row) {
        const index = row.index;
        return React4(InstantInviteRowDefault, {
          start: 0 === index,
          end: index === data.length - 1,
          row: row.item,
          onPressAvatar,
          onInviteSent,
          code,
          source,
        });
      };
      cResult[0] = code;
      cResult[1] = data.length;
      cResult[2] = onInviteSent;
      cResult[3] = onPressAvatar;
      cResult[4] = source;
      cResult[5] = fn;
      tmp4 = fn;
      const obj = code(onInviteSent[7]);
      tmp = code;
    }
  : function InstantInviteFriendsList(code) {
      code = code.code;
      const onPressAvatar = code.onPressAvatar;
      const onInviteSent = code.onInviteSent;
      const data = code.data;
      const source = code.source;
      const items = [onPressAvatar, onInviteSent, code, source, data.length];
      const callback = data.useCallback((row) => {
        const index = row.index;
        return React4(InstantInviteRowDefault, {
          start: 0 === index,
          end: index === data.length - 1,
          row: row.item,
          onPressAvatar,
          onInviteSent,
          code,
          source,
        });
      }, items);
      const obj = {
        contentContainerStyle: {
          paddingBottom:
            onPressAvatar(onInviteSent[5]).space.PX_16 +
            onPressAvatar(onInviteSent[15])({ isKeyboardAwareOnAndroid: false }).insets.bottom,
          paddingHorizontal: onPressAvatar(onInviteSent[5]).space.PX_12,
        },
        bounces: false,
        renderItem: callback,
        data,
        keyExtractor,
        keyboardShouldPersistTaps: "always",
        ListEmptyComponent,
      };
      return source(code(onInviteSent[16]).BottomSheetFlatList, obj);
    };
