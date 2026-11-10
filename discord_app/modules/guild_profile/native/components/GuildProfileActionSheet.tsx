// === Module 9382: GuildProfileActionSheet ===

// Module 9382 (GuildProfileActionSheet)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import useThemeDefault from "useTheme" /* 5371 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5390 */;
import BottomSheetModal from "BottomSheetModal" /* 5394 */;
import LinearGradientDefault from "LinearGradient" /* 5717 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5725 */;
import GuildProfileSheetBodyDefault from "GuildProfileSheetBody" /* 9383 */;
import GuildProfileCreateTagUpsellDefault from "GuildProfileCreateTagUpsell" /* 14993 */;
import GuildProfileCTADefault from "GuildProfileCTA" /* 14999 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5142);
let obj2 = { footerContainer: { paddingHorizontal: 16, paddingVertical: 40 }, footerStack: { gap: 8 }, scrollView: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default function GuildProfileActionSheet(guildId) {
  guildId = guildId.guildId;
  ({ context: importDefault, inviteKey: dependencyMap } = guildId);
  c5 = undefined;
  bottomSheetClose = undefined;
  let colors;
  noop = colors();
  const tmp = useThemeDefault();
  const backgroundColor = guildId(5726).useToken(nativeDefault.colors.INTERACTIVE_TEXT_HOVER, tmp);
  let obj = guildId(5726);
  const bottomSheetRef = guildId(8818).useBottomSheetRef();
  ({ bottomSheetRef: c5, bottomSheetClose } = bottomSheetRef);
  const obj2 = guildId(8818);
  const token = guildId(5726).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  items = [token];
  colors = noop.useMemo(() => {
    const obj = _modDef671(token);
    items = [_modDef671(token).alpha(0).hex(), token];
    return items;
  }, items);
  return bottomSheetClose(GuildProfileSheetBodyDefault, {
    guildId,
    onClose: bottomSheetClose,
    footer(profile) {
      const obj = { style: closure_3.footerStack, children: null };
      items = [timestampProducer(GuildProfileCTADefault, { profile, context, inviteKey }), ];
      let tmp3Result = null != profile.tag;
      if (tmp3Result) {
        const obj3 = { guildId };
        tmp3Result = timestampProducer(GuildProfileCreateTagUpsellDefault, obj3);
      }
      items[1] = tmp3Result;
      obj.children = items;
      return metroImportDefault(View, obj);
    },
    children(children, children2) {
      const obj = { ref, scrollable: true, handleDisabled: true, footer: timestampProducer(LinearGradientDefault, { start: VerticalGradient.START, end: { x: 0, y: 0.5 }, style: closure_3.footerContainer, colors, children: children2 }), children: null };
      items = [timestampProducer(BottomSheetModal.BottomSheetScrollView, { enableFooterMarginAdjustment: true, style: closure_3.scrollView, children }), ];
      const obj4 = { variant: "floating", tabStyle: { backgroundColor }, onPress: bottomSheetClose };
      items[1] = timestampProducer(ActionSheetHeaderBar.ActionSheetHeaderBar, obj4);
      obj.children = items;
      return metroImportDefault(Sheet_BottomSheet.BottomSheet, obj);
    }
  });
};