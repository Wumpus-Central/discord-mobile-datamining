// discord_app/modules/guild_settings/native/GuildSettingsModalOfficialMessages.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../_runtime/metro/00671__.js";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import _modDef1652 from "../../../../_runtime/metro/01652__.js";
import asyncRequireImpl from "../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildOfficialMessageUtils from "../../messages/GuildOfficialMessageUtils.tsx";
import HeaderActionButton from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import _modDef17585 from "../../../../_runtime/metro/17585__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildSettingsStore from "../GuildSettingsStore.tsx";

const require = globalThis.__r;

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
  const obj3 = _modDef671(selectedColor);
  const alphaResult = _modDef671(selectedColor).alpha(closure_1_10);
  const obj2 = { style: null, pointerEvents: "none", children: null };
  items = [tmp.chatContainer, ,];
  ({ borderStrong: arr[1], bgBaseLow: arr[2] } = animatedStyles);
  obj2.style = items;
  const obj4 = { style: null, children: null };
  const items1 = [tmp.chatContainerInner, { backgroundColor: _modDef671(selectedColor).alpha(closure_1_10).hex() }];
  obj4.style = items1;
  const hexResult1 = _modDef671(selectedColor).alpha(closure_1_10).hex();
  const items2 = [application_id(native.Avatar, { source: _modDef17585 })];
  const obj6 = { style: tmp.chatContent, children: null };
  const obj7 = { style: tmp.chatHeader, children: null };
  const obj8 = {
    animated: true,
    style: animatedStyles.textStrong,
    variant: "body-md/semibold",
    lineClamp: 1,
    children: null,
  };
  const intl = util.intl;
  obj8.children = intl.string(util.t.cqpybK);
  const items3 = [application_id(Text_Text.Text, obj8)];
  const obj9 = { animated: true, variant: "body-xs/medium", style: null, children: memo };
  const items4 = [tmp.chatTimestamp, animatedStyles.textMuted];
  obj9.style = items4;
  items3[1] = application_id(Text_Text.Text, obj9);
  obj7.children = items3;
  const items5 = [state(hasOwnProperty, obj7)];
  const obj10 = { animated: true, variant: "body-md/normal", style: { color: hexResult }, children: null };
  const intl2 = util.intl;
  obj10.children = intl2.string(util.t.Mi9Kbe);
  items5[1] = application_id(Text_Text.Text, obj10);
  obj6.children = items5;
  items2[1] = state(hasOwnProperty, obj6);
  obj4.children = items2;
  obj2.children = state(hasOwnProperty, obj4);
  return application_id(_modDef1652.View, obj2);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const MessageConstants = fn(5145);
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_9, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: closure_10 } = MessageConstants);
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(5140);
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
obj2.chatSection = { paddingHorizontal: fn(7036).TABLE_ROW_PADDING, gap: nativeDefault.space.PX_8 };
let obj5 = { paddingHorizontal: fn(7036).TABLE_ROW_PADDING, gap: nativeDefault.space.PX_8 };
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
createStyles = fn(5140);
let obj7 = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  gap: nativeDefault.space.PX_8,
};
let closure_15 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
createStyles = fn(5140);
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_16 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_STRONG });
createStyles = fn(5140);
let obj11 = { borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_17 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_DEFAULT });
createStyles = fn(5140);
const obj13 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_18 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_MUTED });
let closure_19 = {
  code: "(function GuildSettingsModalOfficialMessagesTsx1(){let[activeIndex]=this.__closure;return activeIndex.get();})",
};
let closure_20 = {
  code: "(function GuildSettingsModalOfficialMessagesTsx2(activeIndex){let[scheduleOnRN,setCurrentThemeIndex]=this.__closure;scheduleOnRN(setCurrentThemeIndex,Math.round(activeIndex));})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOfficialMessages.tsx");

export default function GuildSettingsModalOfficialMessages(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  submitting = undefined;
  let stateFromStores;
  const tmp = closure_14();
  const navigation = require("useNavigation").useNavigation();
  importDefault = navigation;
  let obj = require("useNavigation");
  items = [GuildSettingsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({
    guild: GuildSettingsStore.getGuild(),
    submitting: GuildSettingsStore.isSubmitting(),
    hasChanges: GuildSettingsStore.hasChanges(),
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
  let obj2 = require("initialize");
  const items1 = [GuildStore];
  const items2 = [guildId];
  stateFromStores = require("initialize").useStateFromStores(
    items1,
    () => {
      guild = GuildStore.getGuild(c0);
      officialMessageColor = undefined;
      if (guild != null) {
        officialMessageColor = guild.officialMessageColor;
      }
      if (officialMessageColor == null) {
        officialMessageColor = React6;
      }
      return officialMessageColor;
    },
    items2,
  );
  const tmp8 = hasChanges(officialMessageColor.useState(0), 2);
  const first = tmp8[0];
  const items3 = [guildId];
  const effect = officialMessageColor.useEffect(
    () => () => {
      c1(submitting[18]).cancelChanges(_undefined);
    },
    items3,
  );
  const items4 = [guildId, officialMessageColor, navigation, submitting, hasChanges];
  const effect1 = officialMessageColor.useEffect(() => {
    function handleSaveChanges() {
      c1(submitting[18]).saveGuild(handleSaveChanges, { officialMessageColor });
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
        return application_id(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    obj.headerRight = fn2;
    _undefined2.setOptions(obj);
  }, items4);
  const items5 = [officialMessageColor, stateFromStores];
  const callback = officialMessageColor.useCallback(() => {
    const obj2 = { color: officialMessageColor, defaultColor: stateFromStores, confirmLabel: null, onSelect: null };
    const obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.confirmLabel = intl.string(util.t.XqMe3N);
    obj2.onSelect = function onSelect(officialMessageColor) {
      _undefined2(submitting[18]).updateGuild({ officialMessageColor });
    };
    obj.openLazy(asyncRequireImpl(18688, dependencyMap.paths), "RoleColorPicker", obj2);
  }, items5);
  const tmp14 = require("useMeasuredLayout")();
  const width = tmp14.width;
  let num = 0;
  ({ ref, onLayout } = tmp14);
  if (undefined !== width) {
    num = width;
  }
  const memo = officialMessageColor.useMemo(() => {
    const obj = { label: null, id: null, icon: null, page: null };
    const intl = _undefined(submitting[12]).intl;
    obj.label = intl.string(_undefined(submitting[12]).t.K2sFfo);
    obj.id = constants.LIGHT;
    obj.icon = closure_1_12(_undefined(submitting[13]).ThemeLightIcon, {});
    items = [obj, ,];
    const obj2 = { label: null, id: null, icon: null, page: null };
    const intl2 = _undefined(submitting[12]).intl;
    obj2.label = intl2.string(_undefined(submitting[12]).t.b8Cei3);
    obj2.id = constants.DARK;
    obj2.icon = closure_1_12(_undefined(submitting[14]).ThemeDarkIcon, {});
    items[1] = obj2;
    const obj3 = { label: null, id: null, icon: null, page: null };
    const intl3 = _undefined(submitting[12]).intl;
    obj3.label = intl3.string(_undefined(submitting[12]).t.Do4ZJx);
    obj3.id = constants.ONYX;
    obj3.icon = closure_1_12(_undefined(submitting[15]).ThemeMidnightIcon, {});
    items[2] = obj3;
    return items;
  }, []);
  const tmp13 = importDefault;
  const tmp2Result = require("initialize");
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState({
    items: memo,
    pageWidth: num,
    defaultIndex: first,
  });
  const activeIndex = segmentedControlState.activeIndex;
  const tmp2Result4 = require("SegmentedControlState");
  const items6 = [closure_19, activeIndex];
  _require = undefined;
  [tmp17, tmp18] = items6;
  class GuildSettingsModalOfficialMessagesTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items7 = [tmp18];
  GuildSettingsModalOfficialMessagesTsx1.__closure = items7;
  GuildSettingsModalOfficialMessagesTsx1.__workletHash = 403406940357;
  GuildSettingsModalOfficialMessagesTsx1.__initData = tmp17;
  const items8 = [closure_20, require("../../../../_runtime/metro/01705__.js").scheduleOnRN, tmp8[1]];
  _require = undefined;
  importDefault = undefined;
  [tmp19, tmp20, tmp21] = items8;
  class GuildSettingsModalOfficialMessagesTsx2 {
    constructor(arg0) {
      tmp = closure_0(closure_1, Math.round(guildId));
      return;
    }
  }
  const items9 = [tmp20, tmp21];
  GuildSettingsModalOfficialMessagesTsx2.__closure = items9;
  GuildSettingsModalOfficialMessagesTsx2.__workletHash = 12682943328745;
  GuildSettingsModalOfficialMessagesTsx2.__initData = tmp19;
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    GuildSettingsModalOfficialMessagesTsx1,
    GuildSettingsModalOfficialMessagesTsx2,
  );
  const tmp2Result5 = require("../../../../_runtime/metro/01652__.js");
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { label: null, onPress: null, arrow: true, trailing: null, subLabel: null };
  let intl = tmp2(tmp3[12]).intl;
  obj6.label = intl.string(require("util").t["2uQ6wZ"]);
  obj6.onPress = callback;
  const obj7 = {
    style: tmp.trailingColorContainer,
    children: closure_12(tmp13(submitting[29]), { color: officialMessageColor, style: tmp.colorBlock }),
  };
  obj6.trailing = closure_12(stateFromStores, obj7);
  let obj3 = {
    bgBaseLow: closure_15(activeIndex),
    borderStrong: closure_16(activeIndex),
    textStrong: closure_17(activeIndex),
    textMuted: closure_18(activeIndex),
  };
  const obj8 = { color: officialMessageColor, style: tmp.colorBlock };
  obj6.subLabel = require("utils/ColorUtils").int2hex(officialMessageColor);
  const items10 = [closure_12(require("TableRow").TableRow, obj6)];
  const obj9 = { style: tmp.chatSection, children: null };
  const obj10 = { variant: "heading-sm/semibold", children: null };
  let intl2 = tmp2(tmp3[12]).intl;
  obj10.children = intl2.string(require("util").t.VI0jGW);
  const items11 = [
    closure_12(require("Text/Text").Text, obj10),
    closure_12(MessagePreview, { animatedStyles: obj3, selectedColor: officialMessageColor, theme: memo[first].id }),
  ];
  const obj11 = { animatedStyles: obj3, selectedColor: officialMessageColor, theme: memo[first].id };
  const tmp2Result6 = require("utils/ColorUtils");
  items11[2] = closure_12(stateFromStores, {
    style: tmp.segmentedControlContainer,
    ref,
    onLayout,
    children: closure_12(require("SegmentedControl").SegmentedControl, {
      variant: "experimental_Large",
      state: segmentedControlState,
    }),
  });
  obj9.children = items11;
  items10[1] = closure_13(stateFromStores, obj9);
  obj5.children = items10;
  return closure_13(stateFromStores, obj5);
}
