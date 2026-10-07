// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import BottomSheetModal from "../../../../../_runtime/06119_BottomSheetModal.js";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useArchiveOrDeleteDefault from "useArchiveOrDelete.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 },
  cancel: { alignSelf: "center" },
};
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (groupListingId) => {
      const cResult = c.c(26);
      groupListingId = groupListingId.groupListingId;
      ({ editStateId, guildId } = groupListingId);
      const tmp4 = closure_7();
      const bottom = useSafeAreaInsetsDefault().bottom;
      _modDef38(null != groupListingId, "group listing id cannot be null");
      ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } =
        useArchiveOrDeleteDefault(guildId, groupListingId, editStateId));
      if (cResult[0] !== bottom) {
        const obj2 = { paddingBottom: bottom };
        cResult[0] = bottom;
        cResult[1] = obj2;
        let tmp7 = obj2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== headerText) {
        const obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: headerText };
        const tmp10 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[2] = headerText;
        cResult[3] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp13 = hasOwnProperty(native.Spacer, { size: 12 });
        cResult[4] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== descriptionText) {
        const obj4 = { variant: "text-sm/normal", color: "text-default", children: descriptionText };
        const tmp16 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[5] = descriptionText;
        cResult[6] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp19 = hasOwnProperty(native.Spacer, { size: 24 });
        cResult[7] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[7];
      }
      if (!deleting) {
        deleting = archiving;
      }
      if (cResult[8] === buttonText) {
        if (cResult[9] === handleArchiveOrDelete) {
          if (cResult[10] === deleting) {
            let tmp20 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp24 = hasOwnProperty(native.Spacer, { size: 24 });
            cResult[12] = tmp24;
            let tmp22 = tmp24;
          } else {
            tmp22 = cResult[12];
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class D {
              constructor() {
                obj = closure_1_1(closure_1_2[13]);
                return obj.hideActionSheet();
              }
            }
            cResult[13] = D;
          } else {
            class D {
              constructor() {
                obj = closure_1_1(closure_1_2[13]);
                return obj.hideActionSheet();
              }
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class D {
              constructor() {
                obj = closure_1_1(closure_1_2[13]);
                return obj.hideActionSheet();
              }
            }
            const obj5 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
            const intl = util.intl;
            obj5.children = intl.string(util.t["ETE/oC"]);
            const tmp27 = hasOwnProperty(Text_Text.Text, obj5);
            cResult[14] = tmp27;
            const tmp26 = tmp27;
          } else {
            class D {
              constructor() {
                obj = closure_1_1(closure_1_2[13]);
                return obj.hideActionSheet();
              }
            }
          }
          if (cResult[15] !== tmp4.cancel) {
            class D {
              constructor() {
                obj = closure_1_1(closure_1_2[13]);
                return obj.hideActionSheet();
              }
            }
            const obj6 = { onPress: D, style: tmp4.cancel, activeOpacity: 0.5, children: tmp26 };
            const tmp30 = hasOwnProperty(React3, obj6);
            cResult[15] = tmp4.cancel;
            cResult[16] = tmp30;
          } else {
            class D {
              constructor() {
                obj = closure_1_1(closure_1_2[13]);
                return obj.hideActionSheet();
              }
            }
          }
          if (cResult[17] === tmp7) {
            class D {
              constructor() {
                obj = closure_1_1(closure_1_2[13]);
                return obj.hideActionSheet();
              }
            }
          }
          const obj7 = { contentContainerStyle: tmp7, children: null };
          const items = [tmp8, tmp11, tmp14, tmp17, tmp20, tmp22, tmp28];
          obj7.children = items;
          const tmp33 = timestampProducer(BottomSheetModal.BottomSheetScrollView, obj7);
          cResult[17] = tmp7;
          cResult[18] = tmp28;
          cResult[19] = tmp8;
          cResult[20] = tmp14;
          cResult[21] = tmp20;
          cResult[22] = tmp33;
        }
      }
      const tmp21 = hasOwnProperty(components_Button_Button.Button, {
        text: buttonText,
        variant: "destructive",
        grow: true,
        onPress: handleArchiveOrDelete,
        disabled: deleting,
      });
      cResult[8] = buttonText;
      cResult[9] = handleArchiveOrDelete;
      cResult[10] = deleting;
      cResult[11] = tmp21;
      tmp20 = tmp21;
      const tmp6 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId);
    }
  : (groupListingId) => {
      groupListingId = groupListingId.groupListingId;
      ({ editStateId, guildId } = groupListingId);
      const tmp = closure_7();
      _modDef38(null != groupListingId, "group listing id cannot be null");
      const tmp4 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId);
      let deleting = tmp4.deleting;
      ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, archiving } = tmp4);
      const obj = { style: tmp.container, children: null };
      const obj2 = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
      const items = [
        hasOwnProperty(Text_Text.Text, {
          variant: "heading-lg/semibold",
          color: "mobile-text-heading-primary",
          children: headerText,
        }),
        hasOwnProperty(native.Spacer, { size: 12 }),
        hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: descriptionText }),
        hasOwnProperty(native.Spacer, { size: 24 }),
        ,
        ,
      ];
      const obj3 = {
        text: buttonText,
        variant: "destructive",
        grow: true,
        onPress: handleArchiveOrDelete,
        disabled: null,
      };
      if (!deleting) {
        deleting = archiving;
      }
      const obj4 = { backdropOpacity: 0.8, children: null };
      obj3.disabled = deleting;
      items[4] = hasOwnProperty(components_Button_Button.Button, obj3);
      items[5] = hasOwnProperty(native.Spacer, { size: 24 });
      const obj5 = {
        onPress() {
          return ActionSheetActionCreatorsDefault.hideActionSheet();
        },
        style: tmp.cancel,
        activeOpacity: 0.5,
        children: null,
      };
      const obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
      const intl = util.intl;
      obj6.children = intl.string(util.t["ETE/oC"]);
      obj5.children = hasOwnProperty(Text_Text.Text, obj6);
      items[6] = hasOwnProperty(React3, obj5);
      obj2.children = items;
      obj.children = timestampProducer(BottomSheetModal.BottomSheetScrollView, obj2);
      obj4.children = hasOwnProperty(React4, obj);
      return hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj4);
    };
