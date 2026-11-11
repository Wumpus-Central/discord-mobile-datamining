// === Module 10588: GuildProfileActionSheet ===

// Module 10588 (GuildProfileActionSheet)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import useThemeDefault from "useTheme" /* 5484 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5503 */;
import BottomSheetModal from "BottomSheetModal" /* 5507 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5838 */;
import GuildProfileSheetBodyDefault from "GuildProfileSheetBody" /* 10589 */;
import GuildProfileCreateTagUpsellDefault from "GuildProfileCreateTagUpsell" /* 10606 */;
import GuildProfileCTADefault from "GuildProfileCTA" /* 10739 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
let obj2 = { footerContainer: { paddingHorizontal: 16, paddingVertical: 40 }, footerStack: { gap: 8 }, scrollView: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default function GuildProfileActionSheet(guildId) {
  guildId = guildId.guildId;
  ({ context: importDefault, inviteKey: dependencyMap } = guildId);
  c5 = undefined;
  bottomSheetClose = undefined;
  colors = undefined;
  noop = colors();
  const tmp = useThemeDefault();
  const backgroundColor = guildId(5839).useToken(nativeDefault.colors.INTERACTIVE_TEXT_HOVER, tmp);
  let obj = guildId(5839);
  const bottomSheetRef = guildId(8493).useBottomSheetRef();
  ({ bottomSheetRef: c5, bottomSheetClose } = bottomSheetRef);
  const obj2 = guildId(8493);
  const token = guildId(5839).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
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