// discord_app/modules/guild_profile/native/components/GuildProfileActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BottomSheetModal from "../../../../../_runtime/05402_BottomSheetModal.js";
import LinearGradientDefault from "../../../../../_runtime/05725_LinearGradient.js";
import ActionSheetHeaderBar from "../../../../design/components/Sheet/native/ActionSheetHeaderBar.native.tsx";
import GuildProfileSheetBodyDefault from "GuildProfileSheetBody.tsx";
import GuildProfileCreateTagUpsellDefault from "GuildProfileCreateTagUpsell.tsx";
import GuildProfileCTADefault from "GuildProfileCTA.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5143);
let obj2 = {
  footerContainer: { paddingHorizontal: 16, paddingVertical: 40 },
  footerStack: { gap: 8 },
  scrollView: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
};
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
  const backgroundColor = guildId(5734).useToken(nativeDefault.colors.INTERACTIVE_TEXT_HOVER, tmp);
  let obj = guildId(5734);
  const bottomSheetRef = guildId(8887).useBottomSheetRef();
  ({ bottomSheetRef: c5, bottomSheetClose } = bottomSheetRef);
  const obj2 = guildId(8887);
  const token = guildId(5734).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
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
      items = [timestampProducer(GuildProfileCTADefault, { profile, context, inviteKey })];
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
      const obj = {
        ref,
        scrollable: true,
        handleDisabled: true,
        footer: timestampProducer(LinearGradientDefault, {
          start: VerticalGradient.START,
          end: { x: 0, y: 0.5 },
          style: closure_3.footerContainer,
          colors,
          children: children2,
        }),
        children: null,
      };
      items = [
        timestampProducer(BottomSheetModal.BottomSheetScrollView, {
          enableFooterMarginAdjustment: true,
          style: closure_3.scrollView,
          children,
        }),
      ];
      const obj4 = { variant: "floating", tabStyle: { backgroundColor }, onPress: bottomSheetClose };
      items[1] = timestampProducer(ActionSheetHeaderBar.ActionSheetHeaderBar, obj4);
      obj.children = items;
      return metroImportDefault(Sheet_BottomSheet.BottomSheet, obj);
    },
  });
}
