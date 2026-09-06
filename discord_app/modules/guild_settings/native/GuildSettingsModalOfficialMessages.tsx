// discord_app/modules/guild_settings/native/GuildSettingsModalOfficialMessages.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../_runtime/metro/00672__.js";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildOfficialMessageUtils from "../../messages/GuildOfficialMessageUtils.tsx";
import HeaderActionButton from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import _modDef15282 from "../../../../_runtime/metro/15282__.js";
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
  let obj = GuildOfficialMessageUtils;
  const accessibleGuildOfficialTextColor = obj.getAccessibleGuildOfficialTextColor(selectedColor, semanticColor, num);
  let obj2 = _modDef672(selectedColor);
  const hexResult = accessibleGuildOfficialTextColor.hex();
  const alphaResult = obj2.alpha(closure_1_10);
  obj = { style: null, pointerEvents: "none", children: null };
  const items = [tmp.chatContainer, ,];
  ({ borderStrong: arr[1], bgBaseLow: arr[2] } = animatedStyles);
  obj.style = items;
  obj = { style: null, children: null };
  const items1 = [tmp.chatContainerInner, { backgroundColor: obj2.alpha(closure_1_10).hex() }];
  obj.style = items1;
  const hexResult1 = obj2.alpha(closure_1_10).hex();
  const items2 = [closure_1_12(native.Avatar, { source: _modDef15282 })];
  obj2 = { style: tmp.chatContent, children: null };
  const obj3 = { style: tmp.chatHeader, children: null };
  const obj4 = {
    animated: true,
    style: animatedStyles.textStrong,
    variant: "text-md/semibold",
    lineClamp: 1,
    children: null,
  };
  const intl = util.intl;
  obj4.children = intl.string(util.t.cqpybK);
  const items3 = [closure_1_12(Text_Text.Text, obj4)];
  const obj5 = { animated: true, variant: "text-xs/medium", style: null, children: memo };
  const items4 = [tmp.chatTimestamp, animatedStyles.textMuted];
  obj5.style = items4;
  items3[1] = closure_1_12(Text_Text.Text, obj5);
  obj3.children = items3;
  const items5 = [map1(hasOwnProperty, obj3)];
  const obj6 = { animated: true, variant: "text-md/normal", style: { color: hexResult }, children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.Mi9Kbe);
  items5[1] = closure_1_12(Text_Text.Text, obj6);
  obj2.children = items5;
  items2[1] = map1(hasOwnProperty, obj2);
  obj.children = items2;
  obj.children = map1(hasOwnProperty, obj);
  return closure_1_12(ReanimatedRexportDefault.View, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const MessageConstants = fn(4553);
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_9, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: c10 } = MessageConstants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
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
createStyles = { gap: nativeDefault.space.PX_8, height: "100%" };
createStyles.container = createStyles;
createStyles.segmentedControlContainer = {
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
};
createStyles.trailingColorContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
createStyles.colorBlock = {
  marginHorizontal: 0,
  marginVertical: 0,
  marginRight: 8,
  minWidth: 24,
  height: 24,
  borderRadius: 3,
};
let obj1 = {
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
};
createStyles.chatSection = { paddingHorizontal: fn(5603).TABLE_ROW_PADDING, gap: nativeDefault.space.PX_8 };
let obj2 = { paddingHorizontal: fn(5603).TABLE_ROW_PADDING, gap: nativeDefault.space.PX_8 };
createStyles.chatContainer = {
  paddingVertical: nativeDefault.space.PX_24,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: StyleSheet.hairlineWidth,
};
let obj3 = {
  paddingVertical: nativeDefault.space.PX_24,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: StyleSheet.hairlineWidth,
};
createStyles.chatContainerInner = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  gap: nativeDefault.space.PX_8,
};
createStyles.chatContent = { flex: 1 };
createStyles.chatHeader = { flexDirection: "row", alignItems: "baseline", gap: 6 };
createStyles.chatTimestamp = { marginTop: -8 };
let closure_14 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let obj4 = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  gap: nativeDefault.space.PX_8,
};
let closure_15 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
createStyles = fn(4560);
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_16 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_STRONG });
fn(4560);
createStyles = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_17 = createStyles.createAnimatedThemedStyles(createStyles);
createStyles = fn(4560);
let obj6 = { borderColor: nativeDefault.colors.BORDER_STRONG };
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
  let obj = guildId(submitting[17]);
  const navigation = obj.useNavigation();
  let obj1 = guildId(submitting[18]);
  let items = [activeIndex];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({
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
  let tmp2Result = tmp2(tmp3[18]);
  const items1 = [c7];
  const items2 = [guildId];
  stateFromStores = tmp2Result.useStateFromStores(
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
  [tmp9, tmp10] = hasChanges(officialMessageColor.useState(0), 2);
  c6 = tmp10;
  const items3 = [guildId];
  const effect = officialMessageColor.useEffect(
    () => () => {
      navigation(submitting[19]).cancelChanges(guildId);
    },
    items3,
  );
  const items4 = [guildId, officialMessageColor, navigation, submitting, hasChanges];
  const effect1 = officialMessageColor.useEffect(() => {
    function handleSaveChanges() {
      navigation(submitting[19]);
      const obj = { officialMessageColor };
      obj.saveGuild(handleSaveChanges, obj);
    }
    let fn;
    if (submitting) {
      fn = () => null;
    }
    let obj = { headerLeft: fn, headerRight: null };
    if (submitting) {
      let fn2 = () => closure_1_12(handleSaveChanges(submitting[20]).HeaderSubmittingIndicator, {});
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
    let obj = { color: officialMessageColor, defaultColor: stateFromStores, confirmLabel: null, onSelect: null };
    const intl = util.intl;
    obj.confirmLabel = intl.string(util.t.XqMe3N);
    obj.onSelect = function onSelect(officialMessageColor) {
      navigation(submitting[19]);
      const obj = { officialMessageColor };
      obj.updateGuild(obj);
    };
    obj.openLazy(asyncRequireImpl(16291, dependencyMap.paths), "RoleColorPicker", obj);
  }, items5);
  const tmp8 = hasChanges(officialMessageColor.useState(0), 2);
  [tmp15, c7] = hasChanges(officialMessageColor.useState(0), 2);
  const callback1 = officialMessageColor.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = officialMessageColor.useMemo(() => {
    let obj = { label: null, id: null, icon: null, page: null };
    const intl = guildId(submitting[12]).intl;
    obj.label = intl.string(guildId(submitting[12]).t.K2sFfo);
    obj.id = constants.LIGHT;
    obj.icon = closure_1_12(guildId(submitting[13]).ThemeLightIcon, {});
    const items = [obj, ,];
    obj = { label: null, id: null, icon: null, page: null };
    const intl2 = guildId(submitting[12]).intl;
    obj.label = intl2.string(guildId(submitting[12]).t.b8Cei3);
    obj.id = constants.DARKER;
    obj.icon = closure_1_12(guildId(submitting[14]).ThemeDarkIcon, {});
    items[1] = obj;
    obj = { label: null, id: null, icon: null, page: null };
    const intl3 = guildId(submitting[12]).intl;
    obj.label = intl3.string(guildId(submitting[12]).t.pQwSpQ);
    obj.id = constants.MIDNIGHT;
    obj.icon = closure_1_12(guildId(submitting[15]).ThemeMidnightIcon, {});
    items[2] = obj;
    return items;
  }, []);
  tmp2Result = tmp2(tmp3[25]);
  const segmentedControlState = tmp2Result.useSegmentedControlState({
    items: memo,
    pageWidth: tmp15,
    defaultIndex: tmp9,
  });
  activeIndex = segmentedControlState.activeIndex;
  const tmp14 = hasChanges(officialMessageColor.useState(0), 2);
  class B {
    constructor() {
      return activeIndex.get();
    }
  }
  B.__closure = { activeIndex };
  B.__workletHash = 4687220686460;
  B.__initData = __initData;
  class P {
    constructor(arg0) {
      obj = closure_0(closure_2[26]);
      runOnJSResult = obj.runOnJS(closure_6);
      tmpResult = runOnJSResult(Math.round(guildId));
      return;
    }
  }
  obj = { runOnJS: tmp2(tmp3[26]).runOnJS, setCurrentThemeIndex: tmp10 };
  P.__closure = obj;
  P.__workletHash = 5332792853021;
  P.__initData = __initData2;
  const animatedReaction = guildId(submitting[26]).useAnimatedReaction(B, P);
  obj = {
    bgBaseLow: closure_15(activeIndex),
    borderStrong: closure_16(activeIndex),
    textStrong: closure_17(activeIndex),
    textMuted: closure_18(activeIndex),
  };
  obj1 = { style: tmp.container, children: null };
  const obj2 = { label: null, onPress: null, arrow: true, trailing: null, subLabel: null };
  let intl = tmp2(tmp3[12]).intl;
  obj2.label = intl.string(guildId(submitting[12]).t["2uQ6wZ"]);
  obj2.onPress = callback;
  const obj3 = {
    style: tmp.trailingColorContainer,
    children: closure_12(navigation(submitting[28]), { color: officialMessageColor, style: tmp.colorBlock }),
  };
  obj2.trailing = closure_12(stateFromStores, obj3);
  const obj4 = { color: officialMessageColor, style: tmp.colorBlock };
  const tmp2Result1 = guildId(submitting[26]);
  obj2.subLabel = guildId(submitting[29]).int2hex(officialMessageColor);
  const items6 = [closure_12(guildId(submitting[27]).TableRow, obj2)];
  const obj5 = { style: tmp.chatSection, children: null };
  const obj6 = { variant: "heading-md/semibold", children: null };
  let intl2 = tmp2(tmp3[12]).intl;
  obj6.children = intl2.string(guildId(submitting[12]).t.VI0jGW);
  const items7 = [
    closure_12(guildId(submitting[30]).Text, obj6),
    closure_12(MessagePreview, { animatedStyles: obj, selectedColor: officialMessageColor, theme: memo[tmp9].id }),
  ];
  const obj7 = { animatedStyles: obj, selectedColor: officialMessageColor, theme: memo[tmp9].id };
  const tmp2Result2 = guildId(submitting[29]);
  items7[2] = closure_12(stateFromStores, {
    style: tmp.segmentedControlContainer,
    onLayout: callback1,
    children: closure_12(guildId(submitting[31]).SegmentedControl, {
      variant: "experimental_Large",
      state: segmentedControlState,
    }),
  });
  obj5.children = items7;
  items6[1] = closure_13(stateFromStores, obj5);
  obj1.children = items6;
  return closure_13(stateFromStores, obj1);
}
