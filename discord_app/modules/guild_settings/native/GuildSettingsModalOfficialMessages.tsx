// === Module 17136: MessagePreview ===

// Module 17136 (MessagePreview)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import _modDef4120 from "module_4120" /* 4120 */;
import Text from "Text" /* 4376 */;
import useCanManageGuildOfficialMessages from "useCanManageGuildOfficialMessages" /* 5994 */;
import registerAssetDefault from "registerAsset" /* 14726 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
import closure_7 from "createGuildRecordFromRust" /* 1910 */;
import closure_8 from "handleFormInit" /* 9169 */;
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING" /* 4373 */;
import { ThemeTypes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
function MessagePreview(theme) {
  ({ animatedStyles, selectedColor } = theme);
  const tmp = callback3();
  const memo = React.useMemo(() => {
    const obj = callback(table[32]);
    return obj.calendarFormat(new Date(), true);
  }, []);
  const internal = ThemesDefault.internal;
  let num = 1;
  const semanticColor = internal.resolveSemanticColor(theme.theme, ThemesDefault.colors.BACKGROUND_BASE_LOWER);
  if (closure_6.desaturateUserColors) {
    num = closure_6.saturation;
  }
  let obj = useCanManageGuildOfficialMessages;
  const accessibleGuildOfficialTextColor = obj.getAccessibleGuildOfficialTextColor(selectedColor, semanticColor, num);
  let obj2 = tmp3(689)(selectedColor);
  const hexResult = accessibleGuildOfficialTextColor.hex();
  const alphaResult = obj2.alpha(closure_10);
  obj = { style: items, pointerEvents: "none", children: null };
  items = [tmp.chatContainer, , ];
  ({ borderStrong: arr[1], bgBaseLow: arr[2] } = animatedStyles);
  obj = { style: items1, children: null };
  items1 = [tmp.chatContainerInner, { backgroundColor: obj2.alpha(closure_10).hex() }];
  const hexResult1 = obj2.alpha(closure_10).hex();
  const items2 = [callback(Button.Avatar, { source: registerAssetDefault }), ];
  obj2 = { style: tmp.chatContent, children: null };
  const obj3 = { style: tmp.chatHeader, children: null };
  const obj4 = { animated: true, style: animatedStyles.textStrong, variant: "text-md/semibold", lineClamp: 1, children: null };
  const intl = getSystemLocale.intl;
  obj4[4] = intl.string(getSystemLocale.t.cqpybK);
  const items3 = [callback(Text.Text, obj4), ];
  const items4 = [tmp.chatTimestamp, animatedStyles.textMuted];
  items3[1] = callback(Text.Text, { animated: true, variant: "text-xs/medium", style: items4, children: memo });
  obj3[1] = items3;
  const items5 = [callback2(closure_5, obj3), ];
  const obj5 = { animated: true, variant: "text-md/normal", style: { color: hexResult }, children: null };
  const intl2 = getSystemLocale.intl;
  obj5[3] = intl2.string(getSystemLocale.t.Mi9Kbe);
  items5[1] = callback(Text.Text, obj5);
  obj2[1] = items5;
  items2[1] = callback2(closure_5, obj2);
  obj[1] = items2;
  obj[2] = callback2(closure_5, obj);
  return callback(_modDef4120.View, obj);
}
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ DEFAULT_GUILD_OFFICIAL_COLOR: c9, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: c10 } = MESSAGE_GROUP_SPACING);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { container: null, segmentedControlContainer: null, trailingColorContainer: null, colorBlock: null, chatSection: null, chatContainer: null, chatContainerInner: null, chatContent: null, chatHeader: null, chatTimestamp: null };
createCacheKey = { gap: ThemesDefault.space.PX_8, height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: ThemesDefault.space.PX_16, alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
createCacheKey[3] = { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 };
let obj1 = { gap: ThemesDefault.space.PX_16, alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[4] = { paddingHorizontal: require("TABLE_ROW_HEIGHT").TABLE_ROW_PADDING, gap: ThemesDefault.space.PX_8 };
let obj2 = { paddingHorizontal: require("TABLE_ROW_HEIGHT").TABLE_ROW_PADDING, gap: ThemesDefault.space.PX_8 };
createCacheKey[5] = { paddingVertical: ThemesDefault.space.PX_24, borderRadius: ThemesDefault.radii.xl, borderWidth: StyleSheet.hairlineWidth };
let obj3 = { paddingVertical: ThemesDefault.space.PX_24, borderRadius: ThemesDefault.radii.xl, borderWidth: StyleSheet.hairlineWidth };
createCacheKey[6] = { flexDirection: "row", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, gap: ThemesDefault.space.PX_8 };
createCacheKey[7] = { flex: 1 };
createCacheKey[8] = { flexDirection: "row", alignItems: "baseline", gap: 6 };
createCacheKey[9] = { marginTop: -8 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj4 = { flexDirection: "row", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, gap: ThemesDefault.space.PX_8 };
let closure_15 = createCacheKey.createAnimatedThemedStyles({ backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW });
let obj5 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let closure_16 = createCacheKey.createAnimatedThemedStyles({ borderColor: ThemesDefault.colors.BORDER_STRONG });
createCacheKey = { color: ThemesDefault.colors.TEXT_DEFAULT };
let closure_17 = createCacheKey.createAnimatedThemedStyles(createCacheKey);
let obj6 = { borderColor: ThemesDefault.colors.BORDER_STRONG };
let closure_18 = createCacheKey.createAnimatedThemedStyles({ color: ThemesDefault.colors.TEXT_MUTED });
let closure_19 = { code: "function GuildSettingsModalOfficialMessagesTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
let closure_20 = { code: "function GuildSettingsModalOfficialMessagesTsx2(activeIndex){const{runOnJS,setCurrentThemeIndex}=this.__closure;runOnJS(setCurrentThemeIndex)(Math.round(activeIndex));}" };
const obj8 = { color: ThemesDefault.colors.TEXT_MUTED };
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOfficialMessages.tsx");

export default function GuildSettingsModalOfficialMessages(guildId) {
  guildId = guildId.guildId;
  let navigation;
  submitting = undefined;
  let hasChanges;
  let officialMessageColor;
  let stateFromStores;
  c6 = undefined;
  c7 = undefined;
  let activeIndex;
  const tmp = callback3();
  let obj = guildId(submitting[17]);
  navigation = obj.useNavigation();
  obj1 = guildId(submitting[18]);
  let items = [activeIndex];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ guild: activeIndex.getGuild(), submitting: activeIndex.isSubmitting(), hasChanges: activeIndex.hasChanges() }));
  ({ guild, submitting } = stateFromStoresObject);
  hasChanges = stateFromStoresObject.hasChanges;
  officialMessageColor = undefined;
  if (guild != null) {
    officialMessageColor = guild.officialMessageColor;
  }
  if (officialMessageColor == null) {
    officialMessageColor = closure_9;
  }
  let tmp2Result = tmp2(tmp3[18]);
  const items1 = [c7];
  const items2 = [guildId];
  stateFromStores = tmp2Result.useStateFromStores(items1, () => {
    const guild = _undefined.getGuild(guildId);
    officialMessageColor = undefined;
    if (guild != null) {
      officialMessageColor = guild.officialMessageColor;
    }
    if (officialMessageColor == null) {
      officialMessageColor = closure_1_9;
    }
    return officialMessageColor;
  }, items2);
  [tmp9, tmp10] = hasChanges(officialMessageColor.useState(0), 2);
  c6 = tmp10;
  const items3 = [guildId];
  const effect = officialMessageColor.useEffect(() => () => {
    closure_1_1(closure_1_2[19]).cancelChanges(closure_0);
  }, items3);
  const items4 = [guildId, officialMessageColor, navigation, submitting, hasChanges];
  const effect1 = officialMessageColor.useEffect(() => {
    function handleSaveChanges() {
      let obj = closure_1_1(closure_1_2[19]);
      obj = { officialMessageColor: closure_4 };
      obj.saveGuild(handleSaveChanges, obj);
    }
    let fn;
    if (submitting) {
      fn = () => null;
    }
    let obj = { headerLeft: fn, headerRight: null };
    if (submitting) {
      let fn2 = () => callback(handleSaveChanges(table[20]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: handleSaveChanges, text: null };
        const intl = guildId(submitting[12]).intl;
        obj[1] = intl.string(guildId(submitting[12]).t["R3BPH+"]);
        return closure_2_12(guildId(submitting[21]).HeaderActionButton, obj);
      };
    }
    obj[1] = fn2;
    navigation.setOptions(obj);
  }, items4);
  const items5 = [officialMessageColor, stateFromStores];
  const callback = officialMessageColor.useCallback(() => {
    let obj = navigation(submitting[22]);
    obj = { color: officialMessageColor, defaultColor: stateFromStores, confirmLabel: null, onSelect: null };
    const intl = guildId(submitting[12]).intl;
    obj[2] = intl.string(guildId(submitting[12]).t.XqMe3N);
    obj[3] = function onSelect(officialMessageColor) {
      let obj = callback(table[19]);
      obj = { officialMessageColor };
      obj.updateGuild(obj);
    };
    obj.openLazy(guildId(submitting[24])(submitting[23], submitting.paths), "RoleColorPicker", obj);
  }, items5);
  const tmp8 = hasChanges(officialMessageColor.useState(0), 2);
  [tmp15, c7] = hasChanges(officialMessageColor.useState(0), 2);
  const callback1 = officialMessageColor.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = officialMessageColor.useMemo(() => {
    let obj = { label: null, id: null, icon: null, page: null };
    const intl = guildId(submitting[12]).intl;
    obj[0] = intl.string(guildId(submitting[12]).t.K2sFfo);
    obj[1] = constants.LIGHT;
    obj[2] = callback(guildId(submitting[13]).ThemeLightIcon, {});
    const items = [obj, , ];
    obj = { label: null, id: null, icon: null, page: null };
    const intl2 = guildId(submitting[12]).intl;
    obj[0] = intl2.string(guildId(submitting[12]).t.b8Cei3);
    obj[1] = constants.DARKER;
    obj[2] = callback(guildId(submitting[14]).ThemeDarkIcon, {});
    items[1] = obj;
    obj = { label: null, id: null, icon: null, page: null };
    const intl3 = guildId(submitting[12]).intl;
    obj[0] = intl3.string(guildId(submitting[12]).t.pQwSpQ);
    obj[1] = constants.MIDNIGHT;
    obj[2] = callback(guildId(submitting[15]).ThemeMidnightIcon, {});
    items[2] = obj;
    return items;
  }, []);
  tmp2Result = tmp2(tmp3[25]);
  const segmentedControlState = tmp2Result.useSegmentedControlState({ items: memo, pageWidth: tmp15, defaultIndex: tmp9 });
  activeIndex = segmentedControlState.activeIndex;
  const tmp14 = hasChanges(officialMessageColor.useState(0), 2);
  class B {
    constructor() {
      return activeIndex.get();
    }
  }
  B.__closure = { activeIndex };
  B.__workletHash = 4687220686460;
  B.__initData = closure_19;
  class P {
    constructor(arg0) {
      obj = guildId(submitting[26]);
      runOnJSResult = obj.runOnJS(closure_6);
      tmpResult = runOnJSResult(Math.round(guildId));
      return;
    }
  }
  obj = { runOnJS: tmp2(tmp3[26]).runOnJS, setCurrentThemeIndex: tmp10 };
  P.__closure = obj;
  P.__workletHash = 5332792853021;
  P.__initData = closure_20;
  const animatedReaction = guildId(submitting[26]).useAnimatedReaction(B, P);
  obj = { bgBaseLow: callback4(activeIndex), borderStrong: callback5(activeIndex), textStrong: callback6(activeIndex), textMuted: callback7(activeIndex) };
  obj1 = { style: tmp.container, children: null };
  const obj2 = { label: null, onPress: null, arrow: true, trailing: null, subLabel: null };
  let intl = tmp2(tmp3[12]).intl;
  obj2[0] = intl.string(guildId(submitting[12]).t["2uQ6wZ"]);
  obj2[1] = callback;
  const tmp2Result1 = guildId(submitting[26]);
  obj2[3] = callback(stateFromStores, { style: tmp.trailingColorContainer, children: callback(navigation(submitting[28]), obj4) });
  const obj3 = { style: tmp.trailingColorContainer, children: callback(navigation(submitting[28]), obj4) };
  obj2[4] = guildId(submitting[29]).int2hex(officialMessageColor);
  const items6 = [callback(guildId(submitting[27]).TableRow, obj2), ];
  const obj5 = { style: tmp.chatSection, children: null };
  const obj6 = { variant: "heading-md/semibold", children: null };
  let intl2 = tmp2(tmp3[12]).intl;
  obj6[1] = intl2.string(guildId(submitting[12]).t.VI0jGW);
  const items7 = [callback(guildId(submitting[30]).Text, obj6), callback(MessagePreview, { animatedStyles: obj, selectedColor: officialMessageColor, theme: memo[tmp9].id }), ];
  const obj7 = { animatedStyles: obj, selectedColor: officialMessageColor, theme: memo[tmp9].id };
  const tmp2Result2 = guildId(submitting[29]);
  items7[2] = callback(stateFromStores, { style: tmp.segmentedControlContainer, onLayout: callback1, children: callback(guildId(submitting[31]).SegmentedControl, { variant: "experimental_Large", state: segmentedControlState }) });
  obj5[1] = items7;
  items6[1] = callback2(stateFromStores, obj5);
  obj1[1] = items6;
  return callback2(stateFromStores, obj1);
};