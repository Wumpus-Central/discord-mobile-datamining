// === Module 19999: InterestGuildProfileSheet ===

// Module 19999 (InterestGuildProfileSheet)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useThemeDefault from "useTheme" /* 5371 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5390 */;
import BottomSheetModal from "BottomSheetModal" /* 5394 */;
import LinearGradientDefault from "LinearGradient" /* 5717 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5725 */;
import GuildProfileSheetBodyDefault from "GuildProfileSheetBody" /* 9383 */;
import InterestGuildJoinButtonDefault from "InterestGuildJoinButton" /* 20002 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1072).VerticalGradient;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5142);
let closure_9 = createStyles.createStyles((paddingBottom, paddingBottom2) => {
  const obj = { body: { paddingBottom: nativeDefault.space.PX_8 }, footer: { paddingBottom }, footerContent: null, footerStack: null, scrollView: null, scrollContent: null };
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
  let colors;
  const tmp3 = useThemeDefault();
  noop = guildId(5726).useToken(nativeDefault.colors.INTERACTIVE_TEXT_HOVER, tmp3);
  let obj = guildId(5726);
  const token = guildId(5726).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let obj2 = guildId(5726);
  const bottomSheetRef1 = guildId(8818).useBottomSheetRef();
  const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
  const bottomSheetClose = bottomSheetRef1.bottomSheetClose;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj3 = guildId(8818);
  [tmp7, c8] = noop.useState(0);
  const tmp6 = _slicedToArray(noop.useState(0), 2);
  [tmp9, c9] = noop.useState(0);
  const tmp8 = _slicedToArray(noop.useState(0), 2);
  let obj6 = { windowHeight: useWindowDimensionsDefault({ ignoreKeyboard: true }).height, contentHeight: tmp7, footerHeight: null, safeAreaBottom: null };
  if (sum <= 0) {
    sum = nativeDefault.space.PX_48 + nativeDefault.space.PX_32;
  }
  obj6.footerHeight = sum;
  obj6.safeAreaBottom = bottom;
  interestGuildProfileSheetLayout = guildId(20000).getInterestGuildProfileSheetLayout(obj6);
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
      const obj = { style: closure_11.footerStack, children: metroImportDefault(InterestGuildJoinButtonDefault, { guildId, guildName, fullWidth: true, onJoinTapped, onJoinResult }) };
      return metroImportDefault(View, obj);
    },
    children(children, children2) {
      const obj = { ref: bottomSheetRef, scrollable: true, startExpanded: true, startHeight: interestGuildProfileSheetLayout.height, maxHeight: interestGuildProfileSheetLayout.height, handleDisabled: true, footer: null, children: null };
      const obj2 = { start: VerticalGradient.START, end: { x: 0, y: 0.5 }, style: closure_11.footer, colors, children: metroImportDefault(View, { onLayout: onLayout2, style: closure_11.footerContent, children: children2 }) };
      obj.footer = metroImportDefault(LinearGradientDefault, obj2);
      const obj4 = { enableFooterMarginAdjustment: false, scrollEnabled: interestGuildProfileSheetLayout.scrollable, contentContainerStyle: closure_11.scrollContent, style: closure_11.scrollView, children: metroImportDefault(View, { onLayout, style: closure_11.body, children }) };
      items = [metroImportDefault(BottomSheetModal.BottomSheetScrollView, obj4), ];
      const obj6 = { variant: "floating", tabStyle: { backgroundColor }, onPress: bottomSheetClose };
      items[1] = metroImportDefault(ActionSheetHeaderBar.ActionSheetHeaderBar, obj6);
      obj.children = items;
      return React5(Sheet_BottomSheet.BottomSheet, obj);
    }
  });
};