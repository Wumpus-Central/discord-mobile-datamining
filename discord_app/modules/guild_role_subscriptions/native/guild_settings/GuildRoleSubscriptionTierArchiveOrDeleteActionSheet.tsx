// === Module 18426: GuildRoleSubscriptionTierArchiveOrDeleteActionSheet ===

// Module 18426 (GuildRoleSubscriptionTierArchiveOrDeleteActionSheet)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import BottomSheetModal from "BottomSheetModal" /* 6305 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6836 */;
import useArchiveOrDeleteDefault from "useArchiveOrDelete" /* 18427 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 }, cancel: { alignSelf: "center" } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionTierArchiveOrDeleteActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierArchiveOrDeleteActionSheet(groupListingId) {
  const cResult = c.c(26);
  groupListingId = groupListingId.groupListingId;
  ({ editStateId, guildId } = groupListingId);
  const tmp4 = closure_7();
  const bottom = useSafeAreaInsetsDefault().bottom;
  _modDef38(null != groupListingId, "group listing id cannot be null");
  ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId));
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
        const fn = function w() {
          return ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        cResult[13] = fn;
        let tmp25 = fn;
      } else {
        tmp25 = cResult[13];
      }
      const _Symbol3 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
        const intl = util.intl;
        obj5.children = intl.string(util.t["ETE/oC"]);
        const tmp28 = hasOwnProperty(Text_Text.Text, obj5);
        cResult[14] = tmp28;
        let tmp26 = tmp28;
      } else {
        tmp26 = cResult[14];
      }
      if (cResult[15] !== tmp4.cancel) {
        const obj6 = { onPress: tmp25, style: tmp4.cancel, activeOpacity: 0.5, children: tmp26 };
        const tmp32 = hasOwnProperty(React3, obj6);
        cResult[15] = tmp4.cancel;
        cResult[16] = tmp32;
        let tmp29 = tmp32;
      } else {
        tmp29 = cResult[16];
      }
      if (cResult[17] === tmp7) {
        if (cResult[18] === tmp29) {
          if (cResult[19] === tmp8) {
            if (cResult[20] === tmp14) {
              if (cResult[21] === tmp20) {
                let tmp33 = cResult[22];
              }
              if (cResult[23] === tmp4.container) {
                if (cResult[24] === tmp33) {
                  let tmp36 = cResult[25];
                }
                return tmp36;
              }
              const obj7 = { backdropOpacity: 0.8, children: null };
              const obj8 = { style: tmp4.container, children: tmp33 };
              obj7.children = hasOwnProperty(React4, obj8);
              const tmp39 = hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj7);
              cResult[23] = tmp4.container;
              cResult[24] = tmp33;
              cResult[25] = tmp39;
              tmp36 = tmp39;
            }
          }
        }
      }
      const obj9 = { contentContainerStyle: tmp7, children: null };
      const items = [tmp8, tmp11, tmp14, tmp17, tmp20, tmp22, tmp29];
      obj9.children = items;
      const tmp35 = timestampProducer(BottomSheetModal.BottomSheetScrollView, obj9);
      cResult[17] = tmp7;
      cResult[18] = tmp29;
      cResult[19] = tmp8;
      cResult[20] = tmp14;
      cResult[21] = tmp20;
      cResult[22] = tmp35;
      tmp33 = tmp35;
    }
  }
  const tmp21 = hasOwnProperty(components_Button_Button.Button, { text: buttonText, variant: "destructive", grow: true, onPress: handleArchiveOrDelete, disabled: deleting });
  cResult[8] = buttonText;
  cResult[9] = handleArchiveOrDelete;
  cResult[10] = deleting;
  cResult[11] = tmp21;
  tmp20 = tmp21;
  const tmp6 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId);
}) : (function GuildRoleSubscriptionTierArchiveOrDeleteActionSheet(groupListingId) {
  groupListingId = groupListingId.groupListingId;
  ({ editStateId, guildId } = groupListingId);
  const tmp = closure_7();
  _modDef38(null != groupListingId, "group listing id cannot be null");
  const tmp4 = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId);
  let deleting = tmp4.deleting;
  ({ headerText, buttonText, descriptionText, handleArchiveOrDelete, archiving } = tmp4);
  const obj = { style: tmp.container, children: null };
  const obj2 = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: headerText }), hasOwnProperty(native.Spacer, { size: 12 }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: descriptionText }), hasOwnProperty(native.Spacer, { size: 24 }), , , ];
  const obj3 = { text: buttonText, variant: "destructive", grow: true, onPress: handleArchiveOrDelete, disabled: null };
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
    children: null
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
});