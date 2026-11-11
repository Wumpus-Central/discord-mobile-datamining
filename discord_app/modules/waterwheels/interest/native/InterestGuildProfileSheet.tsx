// discord_app/modules/waterwheels/interest/native/InterestGuildProfileSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BottomSheetModal from "../../../../../_runtime/05507_BottomSheetModal.js";
import LinearGradientDefault from "../../../../../_runtime/05830_LinearGradient.js";
import ActionSheetHeaderBar from "../../../../design/components/Sheet/native/ActionSheetHeaderBar.native.tsx";
import GuildProfileSheetBodyDefault from "../../../guild_profile/native/components/GuildProfileSheetBody.tsx";
import InterestGuildJoinButtonDefault from "InterestGuildJoinButton.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5243);
let closure_9 = createStyles.createStyles((paddingBottom, paddingBottom2) => {
  const obj = {
    body: { paddingBottom: nativeDefault.space.PX_8 },
    footer: { paddingBottom },
    footerContent: null,
    footerStack: null,
    scrollView: null,
    scrollContent: null,
  };
  const obj2 = { paddingBottom: nativeDefault.space.PX_8 };
  const obj3 = { paddingBottom };
  obj.footerContent = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
  const obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
  obj.footerStack = { gap: nativeDefault.space.PX_8 };
  const obj5 = { gap: nativeDefault.space.PX_8 };
  obj.scrollView = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.scrollContent = { paddingBottom: paddingBottom2 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildProfileSheet.tsx");

export default function InterestGuildProfileSheet(guildId) {
  guildId = guildId.guildId;
  ({ guildName: importDefault, onJoinTapped: dependencyMap, onJoinResult: _slicedToArray } = guildId);
  c8 = undefined;
  c9 = undefined;
  let interestGuildProfileSheetLayout;
  closure_11 = undefined;
  let onLayout;
  let onLayout2;
  colors = undefined;
  const tmp3 = useThemeDefault();
  noop = guildId(5839).useToken(nativeDefault.colors.INTERACTIVE_TEXT_HOVER, tmp3);
  let obj = guildId(5839);
  const token = guildId(5839).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let obj2 = guildId(5839);
  const bottomSheetRef1 = guildId(8493).useBottomSheetRef();
  const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
  const bottomSheetClose = bottomSheetRef1.bottomSheetClose;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj3 = guildId(8493);
  [tmp7, c8] = noop.useState(0);
  const tmp6 = _slicedToArray(noop.useState(0), 2);
  [tmp9, c9] = noop.useState(0);
  const tmp8 = _slicedToArray(noop.useState(0), 2);
  let obj6 = {
    windowHeight: useWindowDimensionsDefault({ ignoreKeyboard: true }).height,
    contentHeight: tmp7,
    footerHeight: null,
    safeAreaBottom: null,
  };
  if (sum <= 0) {
    sum = nativeDefault.space.PX_48 + nativeDefault.space.PX_32;
  }
  obj6.footerHeight = sum;
  obj6.safeAreaBottom = bottom;
  interestGuildProfileSheetLayout = guildId(20195).getInterestGuildProfileSheetLayout(obj6);
  closure_11 = c9(bottom, interestGuildProfileSheetLayout.reservedBottom);
  onLayout = obj4.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  onLayout2 = obj4.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.height);
  }, []);
  items = [interestGuildProfileSheetLayout.height, bottomSheetRef];
  const effect = obj4.useEffect(() => {
    closure_0 = requestAnimationFrame(() => {
      const current = ref.current;
      let expandActionSheetResult;
      if (current != null) {
        expandActionSheetResult = current.expandActionSheet();
      }
      return expandActionSheetResult;
    });
    return () => cancelAnimationFrame(closure_0);
  }, items);
  const items1 = [token];
  colors = obj4.useMemo(() => {
    const obj = _modDef671(token);
    items = [_modDef671(token).alpha(0).hex(), token];
    return items;
  }, items1);
  return bottomSheetClose(GuildProfileSheetBodyDefault, {
    guildId,
    onClose: bottomSheetClose,
    banner(guildProfile) {
      return bottomSheetClose(guildName(onJoinTapped[15]), { profile: guildProfile });
    },
    disableNameNavigation: true,
    footer() {
      const obj = {
        style: closure_11.footerStack,
        children: metroImportDefault(InterestGuildJoinButtonDefault, {
          guildId,
          guildName,
          fullWidth: true,
          onJoinTapped,
          onJoinResult,
        }),
      };
      return metroImportDefault(View, obj);
    },
    children(children, children2) {
      const obj = {
        ref: bottomSheetRef,
        scrollable: true,
        startExpanded: true,
        startHeight: interestGuildProfileSheetLayout.height,
        maxHeight: interestGuildProfileSheetLayout.height,
        handleDisabled: true,
        footer: null,
        children: null,
      };
      const obj2 = {
        start: VerticalGradient.START,
        end: { x: 0, y: 0.5 },
        style: closure_11.footer,
        colors,
        children: metroImportDefault(View, {
          onLayout: onLayout2,
          style: closure_11.footerContent,
          children: children2,
        }),
      };
      obj.footer = metroImportDefault(LinearGradientDefault, obj2);
      const obj4 = {
        enableFooterMarginAdjustment: false,
        scrollEnabled: interestGuildProfileSheetLayout.scrollable,
        contentContainerStyle: closure_11.scrollContent,
        style: closure_11.scrollView,
        children: metroImportDefault(View, { onLayout, style: closure_11.body, children }),
      };
      items = [metroImportDefault(BottomSheetModal.BottomSheetScrollView, obj4)];
      const obj6 = { variant: "floating", tabStyle: { backgroundColor }, onPress: bottomSheetClose };
      items[1] = metroImportDefault(ActionSheetHeaderBar.ActionSheetHeaderBar, obj6);
      obj.children = items;
      return React5(Sheet_BottomSheet.BottomSheet, obj);
    },
  });
}
