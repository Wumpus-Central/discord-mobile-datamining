// === Module 18031: GuildSettingsModalOfficialMessages ===

// Module 18031 (GuildSettingsModalOfficialMessages)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import Constants from "Constants" /* 1096 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import DateUtils from "DateUtils" /* 4558 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import TableRowConstants from "TableRowConstants" /* 5996 */;
import GuildOfficialMessageUtils from "GuildOfficialMessageUtils" /* 6780 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6890 */;
import AssetRegistryDefault from "AssetRegistry" /* 15117 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9283 */;
import MessageConstants from "MessageConstants" /* 4889 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
let navigation;

let StyleSheet;
let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: hasOwnProperty, StyleSheet } = react_native);
const TABLE_ROW_PADDING = TableRowConstants.TABLE_ROW_PADDING;
({ DEFAULT_GUILD_OFFICIAL_COLOR: c9, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: c10 } = MessageConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, segmentedControlContainer: obj3, trailingColorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, colorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 }, chatSection: obj4, chatContainer: obj5, chatContainerInner: obj6, chatContent: { flex: 1 }, chatHeader: { flexDirection: "row", alignItems: "baseline", gap: 6 }, chatTimestamp: { marginTop: -8 } };
obj2 = { gap: nativeDefault.space.PX_8, height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj4 = { paddingHorizontal: TABLE_ROW_PADDING, gap: nativeDefault.space.PX_8 };
obj5 = { paddingVertical: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.xl, borderWidth: StyleSheet.hairlineWidth };
obj6 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj);
createStyles = createStyles_mod;
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_15 = createStyles.createAnimatedThemedStyles(obj7);
createStyles = createStyles_mod;
let obj8 = { borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_16 = createStyles.createAnimatedThemedStyles(obj8);
createStyles = createStyles_mod;
let obj9 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_17 = createStyles.createAnimatedThemedStyles(obj9);
createStyles = createStyles_mod;
let obj10 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_18 = createStyles.createAnimatedThemedStyles(obj10);
const __initData = { code: "function GuildSettingsModalOfficialMessagesTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}" };
const __initData2 = { code: "function GuildSettingsModalOfficialMessagesTsx2(activeIndex_0){const{runOnJS,setCurrentThemeIndex}=this.__closure;runOnJS(setCurrentThemeIndex)(Math.round(activeIndex_0));}" };
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let animatedStyles;
  let chatContent;
  let chatHeader;
  let first;
  let items;
  let items1;
  let items2;
  let items3;
  let selectedColor;
  let theme;
  const obj = react2;
  const cResult = obj.c(41);
  ({ animatedStyles, selectedColor, theme } = arg0);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const calendarFormat = DateUtils.calendarFormat;
    DateUtils;
    const date = new Date();
    const calendarFormatResult = calendarFormat(date, true);
    cResult[0] = calendarFormatResult;
    first = calendarFormatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === selectedColor) {
    let tmp10;
    let tmp13;
    if (cResult[2] === theme) {
      tmp10 = cResult[3];
    }
    if (cResult[4] !== selectedColor) {
      const obj4 = _modDef683(selectedColor);
      const alphaResult = obj4.alpha(authStore);
      const hexResult = alphaResult.hex();
      cResult[4] = selectedColor;
      cResult[5] = hexResult;
      tmp13 = hexResult;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] === animatedStyles.bgBaseLow) {
      if (cResult[7] === animatedStyles.borderStrong) {
        let tmp17;
        let tmp18;
        if (cResult[8] === tmp4.chatContainer) {
          tmp17 = cResult[9];
        }
        if (cResult[10] !== tmp13) {
          const obj2 = { backgroundColor: tmp13 };
          cResult[10] = tmp13;
          cResult[11] = obj2;
          tmp18 = obj2;
        } else {
          tmp18 = cResult[11];
        }
        if (cResult[12] === tmp4.chatContainerInner) {
          let tmp19;
          let tmp20;
          let tmp24;
          let tmp26;
          if (cResult[13] === tmp18) {
            tmp19 = cResult[14];
          }
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { source: AssetRegistryDefault };
            const Avatar = native.Avatar;
            const tmp23 = closure_12(Avatar, obj3);
            cResult[15] = tmp23;
            tmp20 = tmp23;
          } else {
            tmp20 = cResult[15];
          }
          const _Symbol2 = Symbol;
          ({ chatContent, chatHeader } = tmp4);
          const textStrong = animatedStyles.textStrong;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl4.intl;
            const stringResult = intl.string(intl4.t.cqpybK);
            cResult[16] = stringResult;
            tmp24 = stringResult;
          } else {
            tmp24 = cResult[16];
          }
          if (cResult[17] !== animatedStyles.textStrong) {
            const obj5 = { animated: true, style: textStrong, variant: "text-md/semibold", lineClamp: 1, children: tmp24 };
            const tmp28 = closure_12(Text_Text.Text, obj5);
            cResult[17] = animatedStyles.textStrong;
            cResult[18] = tmp28;
            tmp26 = tmp28;
          } else {
            tmp26 = cResult[18];
          }
          if (cResult[19] === animatedStyles.textMuted) {
            let tmp29;
            if (cResult[20] === tmp4.chatTimestamp) {
              tmp29 = cResult[21];
            }
            if (cResult[22] === tmp4.chatHeader) {
              if (cResult[23] === tmp26) {
                let tmp32;
                let tmp36;
                let tmp37;
                let tmp39;
                if (cResult[24] === tmp29) {
                  tmp32 = cResult[25];
                }
                if (cResult[26] !== tmp10) {
                  const obj6 = { color: tmp10 };
                  cResult[26] = tmp10;
                  cResult[27] = obj6;
                  tmp36 = obj6;
                } else {
                  tmp36 = cResult[27];
                }
                const _Symbol3 = Symbol;
                if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = intl4.intl;
                  const stringResult1 = intl2.string(intl4.t.Mi9Kbe);
                  cResult[28] = stringResult1;
                  tmp37 = stringResult1;
                } else {
                  tmp37 = cResult[28];
                }
                if (cResult[29] !== tmp36) {
                  const obj7 = { animated: true, variant: "text-md/normal", style: tmp36, children: tmp37 };
                  const tmp41 = closure_12(Text_Text.Text, obj7);
                  cResult[29] = tmp36;
                  cResult[30] = tmp41;
                  tmp39 = tmp41;
                } else {
                  tmp39 = cResult[30];
                }
                if (cResult[31] === tmp4.chatContent) {
                  if (cResult[32] === tmp32) {
                    let tmp42;
                    if (cResult[33] === tmp39) {
                      tmp42 = cResult[34];
                    }
                    if (cResult[35] === tmp42) {
                      let tmp46;
                      if (cResult[36] === tmp19) {
                        tmp46 = cResult[37];
                      }
                      if (cResult[38] === tmp46) {
                        let tmp50;
                        if (cResult[39] === tmp17) {
                          tmp50 = cResult[40];
                        }
                        return tmp50;
                      }
                      const obj8 = { style: tmp17, pointerEvents: "none", children: tmp46 };
                      const tmp53 = closure_12(ReanimatedRexportDefault.View, obj8);
                      cResult[38] = tmp46;
                      cResult[39] = tmp17;
                      cResult[40] = tmp53;
                      tmp50 = tmp53;
                    }
                    const obj9 = { style: tmp19, children: items };
                    items = [tmp20, tmp42];
                    const tmp49 = map1(hasOwnProperty, obj9);
                    cResult[35] = tmp42;
                    cResult[36] = tmp19;
                    cResult[37] = tmp49;
                    tmp46 = tmp49;
                  }
                }
                const obj10 = { style: chatContent, children: items1 };
                items1 = [tmp32, tmp39];
                const tmp45 = map1(hasOwnProperty, obj10);
                cResult[31] = tmp4.chatContent;
                cResult[32] = tmp32;
                cResult[33] = tmp39;
                cResult[34] = tmp45;
                tmp42 = tmp45;
              }
            }
            const obj11 = { style: chatHeader, children: items2 };
            items2 = [tmp26, tmp29];
            const tmp35 = map1(hasOwnProperty, obj11);
            cResult[22] = tmp4.chatHeader;
            cResult[23] = tmp26;
            cResult[24] = tmp29;
            cResult[25] = tmp35;
            tmp32 = tmp35;
          }
          const obj12 = { animated: true, variant: "text-xs/medium", style: items3, children: first };
          items3 = [tmp4.chatTimestamp, animatedStyles.textMuted];
          const tmp31 = closure_12(Text_Text.Text, obj12);
          cResult[19] = animatedStyles.textMuted;
          cResult[20] = tmp4.chatTimestamp;
          cResult[21] = tmp31;
          tmp29 = tmp31;
        }
        const items4 = [tmp4.chatContainerInner, tmp18];
        cResult[12] = tmp4.chatContainerInner;
        cResult[13] = tmp18;
        cResult[14] = items4;
        tmp19 = items4;
      }
    }
    const items5 = [tmp4.chatContainer, , ];
    ({ borderStrong: arr[1], bgBaseLow: arr[2] } = animatedStyles);
    cResult[6] = animatedStyles.bgBaseLow;
    cResult[7] = animatedStyles.borderStrong;
    cResult[8] = tmp4.chatContainer;
    cResult[9] = items5;
    tmp17 = items5;
  }
  const internal = nativeDefault.internal;
  let num2 = 1;
  const semanticColor = internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_BASE_LOWER);
  if (AccessibilityStore.desaturateUserColors) {
    num2 = AccessibilityStore.saturation;
  }
  const tmpResult2 = GuildOfficialMessageUtils;
  const accessibleGuildOfficialTextColor = tmpResult2.getAccessibleGuildOfficialTextColor(selectedColor, semanticColor, num2);
  const hexResult1 = accessibleGuildOfficialTextColor.hex();
  cResult[1] = selectedColor;
  cResult[2] = theme;
  cResult[3] = hexResult1;
  tmp10 = hexResult1;
}) : ((theme) => {
  let animatedStyles;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj4;
  let selectedColor;
  ({ animatedStyles, selectedColor } = theme);
  theme = theme.theme;
  const tmp = closure_14();
  const memo = react.useMemo(() => {
    const calendarFormat = require("DateUtils").calendarFormat;
    require("DateUtils");
    const date = new Date();
    return calendarFormat(date, true);
  }, []);
  const internal = nativeDefault.internal;
  let num = 1;
  const semanticColor = internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_BASE_LOWER);
  if (AccessibilityStore.desaturateUserColors) {
    num = AccessibilityStore.saturation;
  }
  const obj = GuildOfficialMessageUtils;
  const accessibleGuildOfficialTextColor = obj.getAccessibleGuildOfficialTextColor(selectedColor, semanticColor, num);
  const hexResult = accessibleGuildOfficialTextColor.hex();
  const obj3 = _modDef683(selectedColor);
  const alphaResult = obj3.alpha(authStore);
  const obj2 = { style: items, pointerEvents: "none", children: map1(hasOwnProperty, obj4) };
  items = [tmp.chatContainer, , ];
  ({ borderStrong: arr[1], bgBaseLow: arr[2] } = animatedStyles);
  obj4 = { style: items1, children: items2 };
  items1 = [tmp.chatContainerInner, { backgroundColor: alphaResult.hex() }];
  alphaResult.hex();
  const View = ReanimatedRexportDefault.View;
  const obj5 = { source: AssetRegistryDefault };
  const Avatar = native.Avatar;
  items2 = [closure_12(Avatar, obj5), ];
  const obj6 = { style: tmp.chatContent, children: items5 };
  const obj7 = { style: tmp.chatHeader, children: items3 };
  const obj8 = { animated: true, style: animatedStyles.textStrong, variant: "text-md/semibold", lineClamp: 1, children: intl.string(intl4.t.cqpybK) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items3 = [closure_12(Text, obj8), ];
  const obj9 = { animated: true, variant: "text-xs/medium", style: items4, children: memo };
  items4 = [tmp.chatTimestamp, animatedStyles.textMuted];
  items3[1] = closure_12(Text_Text.Text, obj9);
  items5 = [map1(hasOwnProperty, obj7), ];
  const obj10 = { animated: true, variant: "text-md/normal", style: { color: hexResult }, children: intl2.string(intl4.t.Mi9Kbe) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items5[1] = closure_12(Text2, obj10);
  items2[1] = map1(hasOwnProperty, obj6);
  return closure_12(View, obj2);
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalOfficialMessages.tsx");

export default function GuildSettingsModalOfficialMessages(guildId) {
  let _undefined;
  let c7;
  let guild;
  let intl;
  let intl2;
  let items6;
  let items7;
  let obj7;
  let obj8;
  let submitting;
  let tmp10;
  let tmp15;
  let tmp2Result6;
  let tmp9;
  guildId = guildId.guildId;
  submitting = undefined;
  let stateFromStores;
  let c6;
  c7 = undefined;
  let activeIndex;
  const tmp = closure_14();
  let tmp2 = guildId;
  let obj = guildId(submitting[16]);
  navigation = obj.useNavigation();
  let obj2 = guildId(submitting[17]);
  let items = [activeIndex];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { guild: activeIndex.getGuild(), submitting: activeIndex.isSubmitting(), hasChanges: activeIndex.hasChanges() };
    return obj;
  });
  ({ guild, submitting } = stateFromStoresObject);
  const hasChanges = stateFromStoresObject.hasChanges;
  let officialMessageColor;
  if (guild != null) {
    officialMessageColor = guild.officialMessageColor;
  }
  if (officialMessageColor == null) {
    officialMessageColor = closure_9;
  }
  const items1 = [c7];
  const items2 = [guildId];
  const tmp2Result = tmp2(submitting[17]);
  stateFromStores = tmp2Result.useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(guildId);
    officialMessageColor = undefined;
    if (guild != null) {
      officialMessageColor = guild.officialMessageColor;
    }
    if (officialMessageColor == null) {
      officialMessageColor = React4;
    }
    return officialMessageColor;
  }, items2);
  [tmp9, tmp10] = hasChanges(officialMessageColor.useState(0), 2);
  c6 = tmp10;
  const items3 = [guildId];
  hasChanges(officialMessageColor.useState(0), 2);
  const effect = officialMessageColor.useEffect(() => () => {
    const obj = navigation(submitting[18]);
    obj.cancelChanges(guildId);
  }, items3);
  const items4 = [guildId, officialMessageColor, navigation, submitting, hasChanges];
  const effect1 = officialMessageColor.useEffect(() => {
    let fn2;
    function handleSaveChanges() {
      const obj = navigation(submitting[18]);
      const obj2 = { officialMessageColor };
      obj.saveGuild(handleSaveChanges, obj2);
    }
    let fn;
    const setOptions = navigation.setOptions;
    if (submitting) {
      fn = () => null;
    }
    let obj = { headerLeft: fn, headerRight: fn2 };
    if (submitting) {
      fn2 = () => closure_1_12(handleSaveChanges(submitting[19]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        let intl;
        const obj = { onPress: handleSaveChanges, text: intl.string(intl4.t["R3BPH+"]) };
        const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
        intl = intl4.intl;
        return closure_12(HeaderActionButton, obj);
      };
    }
    setOptions(obj);
  }, items4);
  const items5 = [officialMessageColor, stateFromStores];
  const callback = officialMessageColor.useCallback(() => {
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      color: officialMessageColor,
      defaultColor: stateFromStores,
      confirmLabel: intl.string(intl4.t.XqMe3N),
      onSelect(officialMessageColor) {
        const obj = navigation(submitting[18]);
        const obj2 = { officialMessageColor };
        obj.updateGuild(obj2);
      }
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(16271, dependencyMap.paths);
    intl = intl4.intl;
    openLazy(tmp2, "RoleColorPicker", obj);
  }, items5);
  [tmp15, c7] = hasChanges(officialMessageColor.useState(0), 2);
  hasChanges(officialMessageColor.useState(0), 2);
  const callback1 = officialMessageColor.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = officialMessageColor.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = { label: intl.string(guildId(submitting[12]).t.K2sFfo), id: constants.LIGHT, icon: closure_1_12(guildId(submitting[13]).ThemeLightIcon, {}), page: null };
    intl = guildId(submitting[12]).intl;
    const items = [obj, , ];
    const obj2 = { label: intl2.string(guildId(submitting[12]).t.b8Cei3), id: constants.DARK, icon: closure_1_12(guildId(submitting[14]).ThemeDarkIcon, {}), page: null };
    intl2 = guildId(submitting[12]).intl;
    items[1] = obj2;
    const obj3 = { label: intl3.string(guildId(submitting[12]).t.Do4ZJx), id: constants.ONYX, icon: closure_1_12(guildId(submitting[15]).ThemeMidnightIcon, {}), page: null };
    intl3 = guildId(submitting[12]).intl;
    items[2] = obj3;
    return items;
  }, []);
  const tmp2Result4 = tmp2(submitting[24]);
  const segmentedControlState = tmp2Result4.useSegmentedControlState({ items: memo, pageWidth: tmp15, defaultIndex: tmp9 });
  activeIndex = segmentedControlState.activeIndex;
  let fn = function k() {
    return activeIndex.get();
  };
  fn.__closure = { activeIndex };
  fn.__workletHash = 4687220686460;
  fn.__initData = __initData;
  const tmp2Result5 = tmp2(submitting[25]);
  class P {
    constructor(arg0) {
      const obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(c6);
      runOnJSResult(Math.round(arg0));
    }
  }
  let obj3 = { runOnJS: tmp2(tmp3[25]).runOnJS, setCurrentThemeIndex: tmp10 };
  P.__closure = obj3;
  P.__workletHash = 7527748095229;
  P.__initData = __initData2;
  const animatedReaction = tmp2Result5.useAnimatedReaction(fn, P);
  const obj5 = { style: tmp.container, children: items6 };
  const obj6 = { label: intl.string(tmp2(submitting[12]).t["2uQ6wZ"]), onPress: callback, arrow: true, trailing: closure_12(stateFromStores, obj7), subLabel: tmp2Result6.int2hex(officialMessageColor) };
  const obj4 = { bgBaseLow: closure_15(activeIndex), borderStrong: closure_16(activeIndex), textStrong: closure_17(activeIndex), textMuted: closure_18(activeIndex) };
  const TableRow = tmp2(tmp3[26]).TableRow;
  intl = tmp2(tmp3[12]).intl;
  obj7 = { style: tmp.trailingColorContainer, children: closure_12(navigation(submitting[27]), obj8) };
  obj8 = { color: officialMessageColor, style: tmp.colorBlock };
  tmp2Result6 = tmp2(submitting[28]);
  items6 = [closure_12(TableRow, obj6), ];
  const obj9 = { style: tmp.chatSection, children: items7 };
  const obj10 = { variant: "heading-md/semibold", children: intl2.string(tmp2(submitting[12]).t.VI0jGW) };
  const Text = tmp2(tmp3[29]).Text;
  intl2 = tmp2(tmp3[12]).intl;
  items7 = [closure_12(Text, obj10), , ];
  const obj11 = { animatedStyles: obj4, selectedColor: officialMessageColor, theme: memo[tmp9].id };
  items7[1] = closure_12(closure_21, obj11);
  const obj12 = { style: tmp.segmentedControlContainer, onLayout: callback1, children: closure_12(tmp2(submitting[30]).SegmentedControl, { variant: "experimental_Large", state: segmentedControlState }) };
  items7[2] = closure_12(stateFromStores, obj12);
  items6[1] = closure_13(stateFromStores, obj9);
  return closure_13(stateFromStores, obj5);
};