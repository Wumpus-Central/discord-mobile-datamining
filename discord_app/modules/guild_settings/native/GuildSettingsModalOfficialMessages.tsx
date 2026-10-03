// === Module 17963: GuildSettingsModalOfficialMessages ===

// Module 17963 (GuildSettingsModalOfficialMessages)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import DateUtils from "DateUtils" /* 4552 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import GuildOfficialMessageUtils from "GuildOfficialMessageUtils" /* 6770 */;
import HeaderActionButton from "HeaderActionButton" /* 6880 */;
import _modDef15098 from "module_15098" /* 15098 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const MessageConstants = fn(4883);
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_9, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: c10 } = MessageConstants);
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(4890);
let obj2 = { container: { gap: nativeDefault.space.PX_8, height: "100%" }, segmentedControlContainer: null, trailingColorContainer: null, colorBlock: null, chatSection: null, chatContainer: null, chatContainerInner: null, chatContent: null, chatHeader: null, chatTimestamp: null };
let obj3 = { gap: nativeDefault.space.PX_8, height: "100%" };
obj2.segmentedControlContainer = { gap: nativeDefault.space.PX_16, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj2.trailingColorContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center" };
obj2.colorBlock = { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 };
let obj4 = { gap: nativeDefault.space.PX_16, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj2.chatSection = { paddingHorizontal: fn(5989).TABLE_ROW_PADDING, gap: nativeDefault.space.PX_8 };
let obj5 = { paddingHorizontal: fn(5989).TABLE_ROW_PADDING, gap: nativeDefault.space.PX_8 };
obj2.chatContainer = { paddingVertical: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl, borderWidth: StyleSheet.hairlineWidth };
let obj6 = { paddingVertical: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl, borderWidth: StyleSheet.hairlineWidth };
obj2.chatContainerInner = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, gap: nativeDefault.space.PX_8 };
obj2.chatContent = { flex: 1 };
obj2.chatHeader = { flexDirection: "row", alignItems: "baseline", gap: 6 };
obj2.chatTimestamp = { marginTop: -8 };
let closure_14 = createStyles.createStyles(obj2);
createStyles = fn(4890);
let obj7 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, gap: nativeDefault.space.PX_8 };
let closure_15 = createStyles.createAnimatedThemedStyles({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
createStyles = fn(4890);
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_16 = createStyles.createAnimatedThemedStyles({ borderColor: nativeDefault.colors.BORDER_STRONG });
createStyles = fn(4890);
let obj11 = { borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_17 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_DEFAULT });
createStyles = fn(4890);
const obj13 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_18 = createStyles.createAnimatedThemedStyles({ color: nativeDefault.colors.TEXT_MUTED });
const __initData = { code: "function GuildSettingsModalOfficialMessagesTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
const __initData2 = { code: "function GuildSettingsModalOfficialMessagesTsx2(activeIndex_0){const{runOnJS,setCurrentThemeIndex}=this.__closure;runOnJS(setCurrentThemeIndex)(Math.round(activeIndex_0));}" };
const ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(41);
  ({ animatedStyles, selectedColor, theme } = arg0);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Date = Date;
    const date = new Date();
    const calendarFormatResult = DateUtils.calendarFormat(date, true);
    cResult[0] = calendarFormatResult;
    let first = calendarFormatResult;
    const tmpResult = DateUtils;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === selectedColor) {
    if (cResult[2] === theme) {
      let tmp11 = cResult[3];
    }
    if (cResult[4] !== selectedColor) {
      const obj5 = _modDef683(selectedColor);
      const hexResult = _modDef683(selectedColor).alpha(v65535).hex();
      cResult[4] = selectedColor;
      cResult[5] = hexResult;
      let tmp14 = hexResult;
      const alphaResult = _modDef683(selectedColor).alpha(v65535);
    } else {
      tmp14 = cResult[5];
    }
    if (cResult[6] === animatedStyles.bgBaseLow) {
      if (cResult[7] === animatedStyles.borderStrong) {
        if (cResult[8] === tmp4.chatContainer) {
          let tmp18 = cResult[9];
        }
        if (cResult[10] !== tmp14) {
          const obj2 = { backgroundColor: tmp14 };
          cResult[10] = tmp14;
          cResult[11] = obj2;
          let tmp19 = obj2;
        } else {
          tmp19 = cResult[11];
        }
        if (cResult[12] === tmp4.chatContainerInner) {
          if (cResult[13] === tmp19) {
            let tmp20 = cResult[14];
          }
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { source: _modDef15098 };
            const tmp24 = __initData(native.Avatar, obj3);
            cResult[15] = tmp24;
            let tmp21 = tmp24;
          } else {
            tmp21 = cResult[15];
          }
          const _Symbol2 = Symbol;
          ({ chatContent, chatHeader } = tmp4);
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.cqpybK);
            cResult[16] = stringResult;
            let tmp25 = stringResult;
          } else {
            tmp25 = cResult[16];
          }
          if (cResult[17] !== animatedStyles.textStrong) {
            const obj4 = { animated: true, style: animatedStyles.textStrong, variant: "text-md/semibold", lineClamp: 1, children: tmp25 };
            const tmp29 = __initData(Text_Text.Text, obj4);
            cResult[17] = animatedStyles.textStrong;
            cResult[18] = tmp29;
            let tmp27 = tmp29;
          } else {
            tmp27 = cResult[18];
          }
          if (cResult[19] === animatedStyles.textMuted) {
            if (cResult[20] === tmp4.chatTimestamp) {
              let tmp30 = cResult[21];
            }
            if (cResult[22] === tmp4.chatHeader) {
              if (cResult[23] === tmp27) {
                if (cResult[24] === tmp30) {
                  let tmp33 = cResult[25];
                }
                if (cResult[26] !== tmp11) {
                  const obj6 = { color: tmp11 };
                  cResult[26] = tmp11;
                  cResult[27] = obj6;
                  let tmp37 = obj6;
                } else {
                  tmp37 = cResult[27];
                }
                const _Symbol3 = Symbol;
                if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = util.intl;
                  const stringResult1 = intl2.string(util.t.Mi9Kbe);
                  cResult[28] = stringResult1;
                  let tmp38 = stringResult1;
                } else {
                  tmp38 = cResult[28];
                }
                if (cResult[29] !== tmp37) {
                  const obj7 = { animated: true, variant: "text-md/normal", style: tmp37, children: tmp38 };
                  const tmp42 = __initData(Text_Text.Text, obj7);
                  cResult[29] = tmp37;
                  cResult[30] = tmp42;
                  let tmp40 = tmp42;
                } else {
                  tmp40 = cResult[30];
                }
                if (cResult[31] === tmp4.chatContent) {
                  if (cResult[32] === tmp33) {
                    if (cResult[33] === tmp40) {
                      let tmp43 = cResult[34];
                    }
                    if (cResult[35] === tmp43) {
                      if (cResult[36] === tmp20) {
                        let tmp47 = cResult[37];
                      }
                      if (cResult[38] === tmp47) {
                        if (cResult[39] === tmp18) {
                          let tmp51 = cResult[40];
                        }
                        return tmp51;
                      }
                      const obj8 = { style: tmp18, pointerEvents: "none", children: tmp47 };
                      const tmp54 = __initData(ReanimatedRexportDefault.View, obj8);
                      cResult[38] = tmp47;
                      cResult[39] = tmp18;
                      cResult[40] = tmp54;
                      tmp51 = tmp54;
                    }
                    const obj9 = { style: tmp20, children: null };
                    const items = [tmp21, tmp43];
                    obj9.children = items;
                    const tmp50 = __initData2(hasOwnProperty, obj9);
                    cResult[35] = tmp43;
                    cResult[36] = tmp20;
                    cResult[37] = tmp50;
                    tmp47 = tmp50;
                  }
                }
                const obj10 = { style: chatContent, children: null };
                const items1 = [tmp33, tmp40];
                obj10.children = items1;
                const tmp46 = __initData2(hasOwnProperty, obj10);
                cResult[31] = tmp4.chatContent;
                cResult[32] = tmp33;
                cResult[33] = tmp40;
                cResult[34] = tmp46;
                tmp43 = tmp46;
              }
            }
            const obj11 = { style: chatHeader, children: null };
            const items2 = [tmp27, tmp30];
            obj11.children = items2;
            const tmp36 = __initData2(hasOwnProperty, obj11);
            cResult[22] = tmp4.chatHeader;
            cResult[23] = tmp27;
            cResult[24] = tmp30;
            cResult[25] = tmp36;
            tmp33 = tmp36;
          }
          const obj12 = { animated: true, variant: "text-xs/medium", style: null, children: null };
          const items3 = [tmp4.chatTimestamp, animatedStyles.textMuted];
          obj12.style = items3;
          obj12.children = first;
          const tmp32 = __initData(Text_Text.Text, obj12);
          cResult[19] = animatedStyles.textMuted;
          cResult[20] = tmp4.chatTimestamp;
          cResult[21] = tmp32;
          tmp30 = tmp32;
        }
        const items4 = [tmp4.chatContainerInner, tmp19];
        cResult[12] = tmp4.chatContainerInner;
        cResult[13] = tmp19;
        cResult[14] = items4;
        tmp20 = items4;
      }
    }
    const items5 = [tmp4.chatContainer, , ];
    ({ borderStrong: arr[1], bgBaseLow: arr[2] } = animatedStyles);
    cResult[6] = animatedStyles.bgBaseLow;
    cResult[7] = animatedStyles.borderStrong;
    cResult[8] = tmp4.chatContainer;
    cResult[9] = items5;
    tmp18 = items5;
  }
  const internal = nativeDefault.internal;
  let num2 = 1;
  const semanticColor = internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_BASE_LOWER);
  if (AccessibilityStore.desaturateUserColors) {
    num2 = AccessibilityStore.saturation;
  }
  const accessibleGuildOfficialTextColor = GuildOfficialMessageUtils.getAccessibleGuildOfficialTextColor(selectedColor, semanticColor, num2);
  const hexResult1 = accessibleGuildOfficialTextColor.hex();
  cResult[1] = selectedColor;
  cResult[2] = theme;
  cResult[3] = hexResult1;
  tmp11 = hexResult1;
  const tmpResult2 = GuildOfficialMessageUtils;
}) : ((theme) => {
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
  const accessibleGuildOfficialTextColor = GuildOfficialMessageUtils.getAccessibleGuildOfficialTextColor(selectedColor, semanticColor, num);
  const hexResult = accessibleGuildOfficialTextColor.hex();
  const obj3 = _modDef683(selectedColor);
  const alphaResult = _modDef683(selectedColor).alpha(v65535);
  const obj2 = { style: null, pointerEvents: "none", children: null };
  const items = [tmp.chatContainer, , ];
  ({ borderStrong: arr[1], bgBaseLow: arr[2] } = animatedStyles);
  obj2.style = items;
  const obj4 = { style: null, children: null };
  const items1 = [tmp.chatContainerInner, { backgroundColor: _modDef683(selectedColor).alpha(v65535).hex() }];
  obj4.style = items1;
  const hexResult1 = _modDef683(selectedColor).alpha(v65535).hex();
  const items2 = [__initData(native.Avatar, { source: _modDef15098 }), ];
  const obj6 = { style: tmp.chatContent, children: null };
  const obj7 = { style: tmp.chatHeader, children: null };
  const obj8 = { animated: true, style: animatedStyles.textStrong, variant: "text-md/semibold", lineClamp: 1, children: null };
  const intl = util.intl;
  obj8.children = intl.string(util.t.cqpybK);
  const items3 = [__initData(Text_Text.Text, obj8), ];
  const obj9 = { animated: true, variant: "text-xs/medium", style: null, children: memo };
  const items4 = [tmp.chatTimestamp, animatedStyles.textMuted];
  obj9.style = items4;
  items3[1] = __initData(Text_Text.Text, obj9);
  obj7.children = items3;
  const items5 = [__initData2(hasOwnProperty, obj7), ];
  const obj10 = { animated: true, variant: "text-md/normal", style: { color: hexResult }, children: null };
  const intl2 = util.intl;
  obj10.children = intl2.string(util.t.Mi9Kbe);
  items5[1] = __initData(Text_Text.Text, obj10);
  obj6.children = items5;
  items2[1] = __initData2(hasOwnProperty, obj6);
  obj4.children = items2;
  obj2.children = __initData2(hasOwnProperty, obj4);
  return __initData(ReanimatedRexportDefault.View, obj2);
});
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
  const stateFromStoresObject = guildId(submitting[17]).useStateFromStoresObject(items, () => ({ guild: activeIndex.getGuild(), submitting: activeIndex.isSubmitting(), hasChanges: activeIndex.hasChanges() }));
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
  stateFromStores = guildId(submitting[17]).useStateFromStores(items1, () => {
    guild = GuildStore.getGuild(guildId);
    officialMessageColor = undefined;
    if (guild != null) {
      officialMessageColor = guild.officialMessageColor;
    }
    if (officialMessageColor == null) {
      officialMessageColor = options;
    }
    return officialMessageColor;
  }, items2);
  const tmp2Result = guildId(submitting[17]);
  [tmp9, tmp10] = hasChanges(officialMessageColor.useState(0), 2);
  c6 = tmp10;
  const items3 = [guildId];
  const effect = officialMessageColor.useEffect(() => () => {
    navigation(submitting[18]).cancelChanges(guildId);
  }, items3);
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
        return __initData(HeaderActionButton.HeaderActionButton, obj);
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
    obj.openLazy(asyncRequireImpl(16227, dependencyMap.paths), "RoleColorPicker", obj2);
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
    const items = [obj, , ];
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
  const segmentedControlState = guildId(submitting[24]).useSegmentedControlState({ items: memo, pageWidth: tmp15, defaultIndex: tmp9 });
  activeIndex = segmentedControlState.activeIndex;
  const tmp2Result4 = guildId(submitting[24]);
  let fn = function k() {
    return activeIndex.get();
  };
  fn.__closure = { activeIndex };
  fn.__workletHash = 4687220686460;
  fn.__initData = __initData;
  class P {
    constructor(arg0) {
      obj = closure_0(closure_2[25]);
      runOnJSResult = obj.runOnJS(closure_6);
      tmpResult = runOnJSResult(Math.round(guildId));
      return;
    }
  }
  const tmp2Result5 = guildId(submitting[25]);
  P.__closure = { runOnJS: guildId(submitting[25]).runOnJS, setCurrentThemeIndex: tmp10 };
  P.__workletHash = 7527748095229;
  P.__initData = __initData2;
  const animatedReaction = tmp2Result5.useAnimatedReaction(fn, P);
  let obj3 = { runOnJS: guildId(submitting[25]).runOnJS, setCurrentThemeIndex: tmp10 };
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { label: null, onPress: null, arrow: true, trailing: null, subLabel: null };
  let intl = tmp2(tmp3[12]).intl;
  obj6.label = intl.string(guildId(submitting[12]).t["2uQ6wZ"]);
  obj6.onPress = callback;
  const obj7 = { style: tmp.trailingColorContainer, children: closure_12(navigation(submitting[27]), { color: officialMessageColor, style: tmp.colorBlock }) };
  obj6.trailing = closure_12(stateFromStores, obj7);
  const obj4 = { bgBaseLow: closure_15(activeIndex), borderStrong: closure_16(activeIndex), textStrong: closure_17(activeIndex), textMuted: closure_18(activeIndex) };
  const obj8 = { color: officialMessageColor, style: tmp.colorBlock };
  obj6.subLabel = guildId(submitting[28]).int2hex(officialMessageColor);
  const items6 = [closure_12(guildId(submitting[26]).TableRow, obj6), ];
  const obj9 = { style: tmp.chatSection, children: null };
  const obj10 = { variant: "heading-md/semibold", children: null };
  let intl2 = tmp2(tmp3[12]).intl;
  obj10.children = intl2.string(guildId(submitting[12]).t.VI0jGW);
  const items7 = [closure_12(guildId(submitting[29]).Text, obj10), closure_12(closure_21, { animatedStyles: obj4, selectedColor: officialMessageColor, theme: memo[tmp9].id }), ];
  const obj11 = { animatedStyles: obj4, selectedColor: officialMessageColor, theme: memo[tmp9].id };
  const tmp2Result6 = guildId(submitting[28]);
  items7[2] = closure_12(stateFromStores, { style: tmp.segmentedControlContainer, onLayout: callback1, children: closure_12(guildId(submitting[30]).SegmentedControl, { variant: "experimental_Large", state: segmentedControlState }) });
  obj9.children = items7;
  items6[1] = closure_13(stateFromStores, obj9);
  obj5.children = items6;
  return closure_13(stateFromStores, obj5);
};