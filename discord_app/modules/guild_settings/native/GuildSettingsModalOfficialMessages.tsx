// discord_app/modules/guild_settings/native/GuildSettingsModalOfficialMessages.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../_runtime/metro/00672__.js";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01981_asyncRequireImpl.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildOfficialMessageUtils from "../../messages/GuildOfficialMessageUtils.tsx";
import HeaderActionButton from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import _modDef14831 from "../../../../_runtime/metro/14831__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function MessagePreview(theme) {
  ({ animatedStyles, selectedColor } = theme);
  const tmp = closure_14();
  const memo = noop.useMemo(() => {
    const obj = require("DateUtils");
    return obj.calendarFormat(new Date(), true);
  }, []);
  const internal = nativeDefault.internal;
  let num = 1;
  const semanticColor = internal.resolveSemanticColor(theme.theme, nativeDefault.colors.BACKGROUND_BASE_LOWER);
  if (AccessibilityStore.desaturateUserColors) {
    num = AccessibilityStore.saturation;
  }
  const accessibleGuildOfficialTextColor = GuildOfficialMessageUtils.getAccessibleGuildOfficialTextColor(
    selectedColor,
    semanticColor,
    num,
  );
  const hexResult = accessibleGuildOfficialTextColor.hex();
  const obj3 = _modDef672(selectedColor);
  const alphaResult = _modDef672(selectedColor).alpha(closure_1_10);
  const obj2 = { style: null, pointerEvents: "none", children: null };
  const items = [tmp.chatContainer, ,];
  ({ borderStrong: arr[1], bgBaseLow: arr[2] } = animatedStyles);
  obj2.style = items;
  const obj4 = { style: null, children: null };
  const items1 = [tmp.chatContainerInner, { backgroundColor: _modDef672(selectedColor).alpha(closure_1_10).hex() }];
  obj4.style = items1;
  const hexResult1 = _modDef672(selectedColor).alpha(closure_1_10).hex();
  const items2 = [closure_1_12(native.Avatar, { source: _modDef14831 })];
  const obj6 = { style: tmp.chatContent, children: null };
  const obj7 = { style: tmp.chatHeader, children: null };
  const obj8 = {
    animated: true,
    style: animatedStyles.textStrong,
    variant: "text-md/semibold",
    lineClamp: 1,
    children: null,
  };
  const intl = util.intl;
  obj8.children = intl.string(util.t.cqpybK);
  const items3 = [closure_1_12(Text_Text.Text, obj8)];
  const obj9 = { animated: true, variant: "text-xs/medium", style: null, children: memo };
  const items4 = [tmp.chatTimestamp, animatedStyles.textMuted];
  obj9.style = items4;
  items3[1] = closure_1_12(Text_Text.Text, obj9);
  obj7.children = items3;
  const items5 = [map1(hasOwnProperty, obj7)];
  const obj10 = { animated: true, variant: "text-md/normal", style: { color: hexResult }, children: null };
  const intl2 = util.intl;
  obj10.children = intl2.string(util.t.Mi9Kbe);
  items5[1] = closure_1_12(Text_Text.Text, obj10);
  obj6.children = items5;
  items2[1] = map1(hasOwnProperty, obj6);
  obj4.children = items2;
  obj2.children = map1(hasOwnProperty, obj4);
  return closure_1_12(ReanimatedRexportDefault.View, obj2);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const MessageConstants = fn(4829);
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_9, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: c10 } = MessageConstants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(4836);
let obj2 = {
  container: { gap: nativeDefault.space.PX_8, height: "100%" },
  segmentedControlContainer: null,
  trailingColorContainer: null,
  colorBlock: null,
  chatSection: null,
  chatContainer: null,
  chatContainerInner: null,
  chatContent: null,
  chatHeader: null,
  chatTimestamp: null,
};
let obj3 = { gap: nativeDefault.space.PX_8, height: "100%" };
obj2.segmentedControlContainer = {
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
};
obj2.trailingColorContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
obj2.colorBlock = { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 };
let obj4 = {
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
};
obj2.chatSection = { paddingHorizontal: fn(5915).TABLE_ROW_PADDING, gap: nativeDefault.space.PX_8 };
let obj5 = { paddingHorizontal: fn(5915).TABLE_ROW_PADDING, gap: nativeDefault.space.PX_8 };
obj2.chatContainer = {
  paddingVertical: nativeDefault.space.PX_24,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: StyleSheet.hairlineWidth,
};
let obj6 = {
  paddingVertical: nativeDefault.space.PX_24,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: StyleSheet.hairlineWidth,
};
obj2.chatContainerInner = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  gap: nativeDefault.space.PX_8,
};
obj2.chatContent = { flex: 1 };
obj2.chatHeader = { flexDirection: "row", alignItems: "baseline", gap: 6 };
obj2.chatTimestamp = { marginTop: -8 };
let closure_14 = createStyles.createStyles(obj2);
createStyles = fn(4836);
let obj7 = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  gap: nativeDefault.space.PX_8,
};
let closure_15 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
createStyles = fn(4836);
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_16 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_STRONG });
createStyles = fn(4836);
let obj11 = { borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_17 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_DEFAULT });
createStyles = fn(4836);
const obj13 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_18 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_MUTED });
const __initData = {
  code: "function GuildSettingsModalOfficialMessagesTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}",
};
const __initData2 = {
  code: "function GuildSettingsModalOfficialMessagesTsx2(activeIndex){const{runOnJS,setCurrentThemeIndex}=this.__closure;runOnJS(setCurrentThemeIndex)(Math.round(activeIndex));}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOfficialMessages.tsx");

export default function GuildSettingsModalOfficialMessages(guildId) {
  guildId = guildId.guildId;
  submitting = undefined;
  let stateFromStores;
  c6 = undefined;
  c7 = undefined;
  let activeIndex;
  const tmp = closure_14();
  const navigation = guildId(submitting[16]).useNavigation();
  let obj = guildId(submitting[16]);
  let items = [activeIndex];
  const stateFromStoresObject = guildId(submitting[17]).useStateFromStoresObject(items, () => ({
    guild: activeIndex.getGuild(),
    submitting: activeIndex.isSubmitting(),
    hasChanges: activeIndex.hasChanges(),
  }));
  ({ guild, submitting } = stateFromStoresObject);
  const hasChanges = stateFromStoresObject.hasChanges;
  let officialMessageColor;
  if (guild != null) {
    officialMessageColor = guild.officialMessageColor;
  }
  if (officialMessageColor == null) {
    officialMessageColor = closure_9;
  }
  let obj2 = guildId(submitting[17]);
  const items1 = [c7];
  const items2 = [guildId];
  stateFromStores = guildId(submitting[17]).useStateFromStores(
    items1,
    () => {
      const guild = GuildStore.getGuild(guildId);
      officialMessageColor = undefined;
      if (guild != null) {
        officialMessageColor = guild.officialMessageColor;
      }
      if (officialMessageColor == null) {
        officialMessageColor = React7;
      }
      return officialMessageColor;
    },
    items2,
  );
  const tmp2Result = guildId(submitting[17]);
  [tmp9, tmp10] = hasChanges(officialMessageColor.useState(0), 2);
  c6 = tmp10;
  const items3 = [guildId];
  const effect = officialMessageColor.useEffect(
    () => () => {
      navigation(submitting[18]).cancelChanges(guildId);
    },
    items3,
  );
  const items4 = [guildId, officialMessageColor, navigation, submitting, hasChanges];
  const effect1 = officialMessageColor.useEffect(() => {
    function handleSaveChanges() {
      navigation(submitting[18]).saveGuild(handleSaveChanges, { officialMessageColor });
    }
    let fn;
    if (submitting) {
      fn = () => null;
    }
    let obj = { headerLeft: fn, headerRight: null };
    if (submitting) {
      let fn2 = () => closure_1_12(handleSaveChanges(submitting[19]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: handleSaveChanges, text: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["R3BPH+"]);
        return closure_3_12(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    navigation.setOptions(obj);
  }, items4);
  const items5 = [officialMessageColor, stateFromStores];
  const callback = officialMessageColor.useCallback(() => {
    const obj2 = { color: officialMessageColor, defaultColor: stateFromStores, confirmLabel: null, onSelect: null };
    const obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.confirmLabel = intl.string(util.t.XqMe3N);
    obj2.onSelect = function onSelect(officialMessageColor) {
      navigation(submitting[18]).updateGuild({ officialMessageColor });
    };
    obj.openLazy(asyncRequireImpl(15929, dependencyMap.paths), "RoleColorPicker", obj2);
  }, items5);
  const tmp8 = hasChanges(officialMessageColor.useState(0), 2);
  [tmp15, c7] = hasChanges(officialMessageColor.useState(0), 2);
  const callback1 = officialMessageColor.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = officialMessageColor.useMemo(() => {
    const obj = { label: null, id: null, icon: null, page: null };
    const intl = guildId(submitting[12]).intl;
    obj.label = intl.string(guildId(submitting[12]).t.K2sFfo);
    obj.id = constants.LIGHT;
    obj.icon = closure_1_12(guildId(submitting[13]).ThemeLightIcon, {});
    const items = [obj, ,];
    const obj2 = { label: null, id: null, icon: null, page: null };
    const intl2 = guildId(submitting[12]).intl;
    obj2.label = intl2.string(guildId(submitting[12]).t.b8Cei3);
    obj2.id = constants.DARK;
    obj2.icon = closure_1_12(guildId(submitting[14]).ThemeDarkIcon, {});
    items[1] = obj2;
    const obj3 = { label: null, id: null, icon: null, page: null };
    const intl3 = guildId(submitting[12]).intl;
    obj3.label = intl3.string(guildId(submitting[12]).t.Do4ZJx);
    obj3.id = constants.ONYX;
    obj3.icon = closure_1_12(guildId(submitting[15]).ThemeMidnightIcon, {});
    items[2] = obj3;
    return items;
  }, []);
  const tmp14 = hasChanges(officialMessageColor.useState(0), 2);
  const segmentedControlState = guildId(submitting[24]).useSegmentedControlState({
    items: memo,
    pageWidth: tmp15,
    defaultIndex: tmp9,
  });
  activeIndex = segmentedControlState.activeIndex;
  const tmp2Result4 = guildId(submitting[24]);
  class H {
    constructor() {
      return activeIndex.get();
    }
  }
  H.__closure = { activeIndex };
  H.__workletHash = 4687220686460;
  H.__initData = __initData;
  class E {
    constructor(arg0) {
      obj = closure_0(closure_2[25]);
      runOnJSResult = obj.runOnJS(closure_6);
      tmpResult = runOnJSResult(Math.round(guildId));
      return;
    }
  }
  const tmp2Result5 = guildId(submitting[25]);
  E.__closure = { runOnJS: guildId(submitting[25]).runOnJS, setCurrentThemeIndex: tmp10 };
  E.__workletHash = 5332792853021;
  E.__initData = __initData2;
  const animatedReaction = tmp2Result5.useAnimatedReaction(H, E);
  let obj3 = { runOnJS: guildId(submitting[25]).runOnJS, setCurrentThemeIndex: tmp10 };
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { label: null, onPress: null, arrow: true, trailing: null, subLabel: null };
  let intl = tmp2(tmp3[12]).intl;
  obj6.label = intl.string(guildId(submitting[12]).t["2uQ6wZ"]);
  obj6.onPress = callback;
  const obj7 = {
    style: tmp.trailingColorContainer,
    children: closure_12(navigation(submitting[27]), { color: officialMessageColor, style: tmp.colorBlock }),
  };
  obj6.trailing = closure_12(stateFromStores, obj7);
  const obj4 = {
    bgBaseLow: closure_15(activeIndex),
    borderStrong: closure_16(activeIndex),
    textStrong: closure_17(activeIndex),
    textMuted: closure_18(activeIndex),
  };
  const obj8 = { color: officialMessageColor, style: tmp.colorBlock };
  obj6.subLabel = guildId(submitting[28]).int2hex(officialMessageColor);
  const items6 = [closure_12(guildId(submitting[26]).TableRow, obj6)];
  const obj9 = { style: tmp.chatSection, children: null };
  const obj10 = { variant: "heading-md/semibold", children: null };
  let intl2 = tmp2(tmp3[12]).intl;
  obj10.children = intl2.string(guildId(submitting[12]).t.VI0jGW);
  const items7 = [
    closure_12(guildId(submitting[29]).Text, obj10),
    closure_12(MessagePreview, { animatedStyles: obj4, selectedColor: officialMessageColor, theme: memo[tmp9].id }),
  ];
  const obj11 = { animatedStyles: obj4, selectedColor: officialMessageColor, theme: memo[tmp9].id };
  const tmp2Result6 = guildId(submitting[28]);
  items7[2] = closure_12(stateFromStores, {
    style: tmp.segmentedControlContainer,
    onLayout: callback1,
    children: closure_12(guildId(submitting[30]).SegmentedControl, {
      variant: "experimental_Large",
      state: segmentedControlState,
    }),
  });
  obj9.children = items7;
  items6[1] = closure_13(stateFromStores, obj9);
  obj5.children = items6;
  return closure_13(stateFromStores, obj5);
}
