// === Module 16205: GuildsEmpty ===

// Module 16205 (GuildsEmpty)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import getInitialNavigationState from "getInitialNavigationState" /* 4738 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12357 */;
import _modDef16206 from "module_16206" /* 16206 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;

require = fn;
function handleJoinGuild() {
  const result = CreateGuildModalActionCreatorsDefault.openGuildJoinServerScreen();
}
function handleCreateGuild() {
  CreateGuildModalActionCreatorsDefault.openCreateGuildModal();
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1085);
({ ME: closure_11, MOBILE_GUILD_UPSELL_LIST: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4890);
let obj = { scrollView: { borderTopLeftRadius: nativeDefault.radii.xxl, borderTopRightRadius: nativeDefault.radii.sm }, header: null, headerTitle: null, scrollViewContentContainer: null, headerInner: null, content: null, illustrationWrapper: null, illustration: null, buttonContainer: null, textWrapper: null, headerText: null, text: null };
let obj3 = { borderTopLeftRadius: nativeDefault.radii.xxl, borderTopRightRadius: nativeDefault.radii.sm };
obj.header = { zIndex: 100, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.headerTitle = { height: 56, marginLeft: 16, marginRight: 8, flexDirection: "row", alignItems: "center" };
let obj4 = { zIndex: 100, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.scrollViewContentContainer = { flexGrow: 2, justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.headerInner = { flex: 1, flexDirection: "row", alignItems: "center" };
let obj5 = { flexGrow: 2, justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.content = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj.illustrationWrapper = { width: "100%", paddingHorizontal: 36 };
let obj6 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj.illustration = { resizeMode: "contain", alignSelf: "center", marginBottom: nativeDefault.space.PX_24 };
let obj7 = { resizeMode: "contain", alignSelf: "center", marginBottom: nativeDefault.space.PX_24 };
obj.buttonContainer = { paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj8 = { paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.textWrapper = { marginHorizontal: nativeDefault.space.PX_16, marginVertical: nativeDefault.space.PX_24 };
let obj10 = {};
const merged = Object.assign(fn(4886).TextStyleSheet["heading-md/bold"]);
obj10.fontSize = 18;
obj10.marginBottom = 8;
obj.headerText = obj10;
obj.text = { textAlign: "center" };
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((contentContainerStyle) => {
  const cResult = c.c(36);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const tmp4 = closure_15();
  if (cResult[0] === contentContainerStyle) {
    if (cResult[1] === tmp4.scrollViewContentContainer) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp4.illustration) {
      const obj2 = { source: _modDef16206, style: tmp4.illustration };
      const tmp11 = __initData2(hasOwnProperty, obj2);
      cResult[3] = tmp4.illustration;
      cResult[4] = tmp11;
      let tmp7 = tmp11;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4.illustrationWrapper) {
      if (cResult[6] === tmp7) {
        let tmp12 = cResult[7];
      }
      if (cResult[8] === tmp4.headerText) {
        if (cResult[9] === tmp4.text) {
          let tmp17 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["Y7Ml/I"]);
          cResult[11] = stringResult;
          let tmp19 = stringResult;
        } else {
          tmp19 = cResult[11];
        }
        if (cResult[12] !== tmp17) {
          const obj3 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp17, children: tmp19 };
          const tmp23 = __initData2(Text_Text.Heading, obj3);
          cResult[12] = tmp17;
          cResult[13] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[13];
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult1 = intl2.string(util.t.kuyE4r);
          cResult[14] = stringResult1;
          let tmp24 = stringResult1;
        } else {
          tmp24 = cResult[14];
        }
        if (cResult[15] !== tmp4.text) {
          const obj4 = { color: "text-default", variant: "text-md/medium", style: tmp4.text, children: tmp24 };
          const tmp28 = __initData2(Text_Text.Text, obj4);
          cResult[15] = tmp4.text;
          cResult[16] = tmp28;
          let tmp26 = tmp28;
        } else {
          tmp26 = cResult[16];
        }
        if (cResult[17] === tmp4.textWrapper) {
          if (cResult[18] === tmp26) {
            if (cResult[19] === tmp21) {
              let tmp29 = cResult[20];
            }
            if (cResult[21] === tmp4.content) {
              if (cResult[22] === tmp29) {
                if (cResult[23] === tmp12) {
                  let tmp33 = cResult[24];
                }
                const _Symbol3 = Symbol;
                if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { size: "lg", text: null, onPress: null };
                  const intl3 = util.intl;
                  obj5.text = intl3.string(util.t.riOUtB);
                  obj5.onPress = handleJoinGuild;
                  const tmp40 = __initData2(components_Button_Button.Button, obj5);
                  cResult[25] = tmp40;
                  let tmp37 = tmp40;
                } else {
                  tmp37 = cResult[25];
                }
                const _Symbol4 = Symbol;
                if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj6 = { size: "lg", variant: "secondary", text: null, onPress: null };
                  const intl4 = util.intl;
                  obj6.text = intl4.string(util.t["BetvT+"]);
                  obj6.onPress = handleCreateGuild;
                  const tmp44 = __initData2(components_Button_Button.Button, obj6);
                  cResult[26] = tmp44;
                  let tmp41 = tmp44;
                } else {
                  tmp41 = cResult[26];
                }
                if (cResult[27] !== tmp4.buttonContainer) {
                  const obj7 = { style: tmp4.buttonContainer, spacing: 12, children: null };
                  const items = [tmp37, tmp41];
                  obj7.children = items;
                  const tmp47 = state(Stack_Stack.Stack, obj7);
                  cResult[27] = tmp4.buttonContainer;
                  cResult[28] = tmp47;
                  let tmp45 = tmp47;
                } else {
                  tmp45 = cResult[28];
                }
                if (cResult[29] === tmp33) {
                  if (cResult[30] === tmp45) {
                    let tmp48 = cResult[31];
                  }
                  if (cResult[32] === tmp4.scrollView) {
                    if (cResult[33] === tmp48) {
                      if (cResult[34] === tmp6) {
                        let tmp52 = cResult[35];
                      }
                      return tmp52;
                    }
                  }
                  const obj8 = { alwaysBounceVertical: false, bounces: false, style: tmp5, contentContainerStyle: tmp6, children: tmp48 };
                  const tmp55 = __initData2(React5, obj8);
                  cResult[32] = tmp4.scrollView;
                  cResult[33] = tmp48;
                  cResult[34] = tmp6;
                  cResult[35] = tmp55;
                  tmp52 = tmp55;
                }
                const obj9 = { children: null };
                const items1 = [tmp33, tmp45];
                obj9.children = items1;
                const tmp51 = state(timestampProducer, obj9);
                cResult[29] = tmp33;
                cResult[30] = tmp45;
                cResult[31] = tmp51;
                tmp48 = tmp51;
              }
            }
            const obj10 = { style: tmp4.content, children: null };
            const items2 = [tmp12, tmp29];
            obj10.children = items2;
            const tmp36 = state(timestampProducer, obj10);
            cResult[21] = tmp4.content;
            cResult[22] = tmp29;
            cResult[23] = tmp12;
            cResult[24] = tmp36;
            tmp33 = tmp36;
          }
        }
        const obj11 = { style: tmp16, children: null };
        const items3 = [tmp21, tmp26];
        obj11.children = items3;
        const tmp32 = state(timestampProducer, obj11);
        cResult[17] = tmp4.textWrapper;
        cResult[18] = tmp26;
        cResult[19] = tmp21;
        cResult[20] = tmp32;
        tmp29 = tmp32;
      }
      const items4 = [, ];
      ({ text: arr2[0], headerText: arr2[1] } = tmp4);
      cResult[8] = tmp4.headerText;
      cResult[9] = tmp4.text;
      cResult[10] = items4;
      tmp17 = items4;
    }
    const obj12 = { style: tmp4.illustrationWrapper, children: tmp7 };
    const tmp15 = __initData2(timestampProducer, obj12);
    cResult[5] = tmp4.illustrationWrapper;
    cResult[6] = tmp7;
    cResult[7] = tmp15;
    tmp12 = tmp15;
  }
  const items5 = [tmp4.scrollViewContentContainer, contentContainerStyle];
  cResult[0] = contentContainerStyle;
  cResult[1] = tmp4.scrollViewContentContainer;
  cResult[2] = items5;
  tmp6 = items5;
}) : ((contentContainerStyle) => {
  const tmp = closure_15();
  const obj = { alwaysBounceVertical: false, bounces: false, style: tmp.scrollView, contentContainerStyle: null, children: null };
  const items = [tmp.scrollViewContentContainer, contentContainerStyle.contentContainerStyle];
  obj.contentContainerStyle = items;
  const obj2 = { children: null };
  const obj3 = { style: tmp.content, children: null };
  const obj4 = { style: tmp.illustrationWrapper, children: __initData2(hasOwnProperty, { source: _modDef16206, style: tmp.illustration }) };
  const items1 = [__initData2(timestampProducer, obj4), ];
  const obj6 = { style: tmp.textWrapper, children: null };
  const obj7 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: null, children: null };
  const items2 = [, ];
  ({ text: arr3[0], headerText: arr3[1] } = tmp);
  obj7.style = items2;
  const intl = util.intl;
  obj7.children = intl.string(util.t["Y7Ml/I"]);
  const items3 = [__initData2(Text_Text.Heading, obj7), ];
  const obj8 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
  const intl2 = util.intl;
  obj8.children = intl2.string(util.t.kuyE4r);
  items3[1] = __initData2(Text_Text.Text, obj8);
  obj6.children = items3;
  items1[1] = state(timestampProducer, obj6);
  obj3.children = items1;
  const items4 = [state(timestampProducer, obj3), ];
  const obj9 = { style: tmp.buttonContainer, spacing: 12, children: null };
  const obj10 = { size: "lg", text: null, onPress: null };
  const intl3 = util.intl;
  obj10.text = intl3.string(util.t.riOUtB);
  obj10.onPress = handleJoinGuild;
  const items5 = [__initData2(components_Button_Button.Button, obj10), ];
  const obj11 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj11.text = intl4.string(util.t["BetvT+"]);
  obj11.onPress = handleCreateGuild;
  items5[1] = __initData2(components_Button_Button.Button, obj11);
  obj9.children = items5;
  items4[1] = state(Stack_Stack.Stack, obj9);
  obj2.children = items4;
  obj.children = state(timestampProducer, obj2);
  return __initData2(React5, obj);
});
let closure_18 = tmp6;
ReactCompilerGating = fn(558);
let obj9 = { marginHorizontal: nativeDefault.space.PX_16, marginVertical: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = navigation(576).c(25);
  style = style.style;
  const tmp4 = closure_15();
  const obj = navigation(576);
  navigation = navigation(1491).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function c() {
      return null != sessionId.getSessionId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const obj2 = navigation(1491);
  const stateFromStores = navigation(573).useStateFromStores(tmp6, tmp7);
  let selectedGuildId = null;
  if (stateFromStores) {
    selectedGuildId = style.selectedGuildId;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { type: tmp(1260).ImpressionTypes.VIEW, name: tmp(1260).ImpressionNames.GUILDS_EMPTY_NUX };
    cResult[2] = obj3;
    let tmp11 = obj3;
  } else {
    tmp11 = cResult[2];
  }
  selectedGuildId(8422)(tmp11);
  if (cResult[3] === selectedGuildId) {
    if (cResult[4] === navigation) {
      let tmp13 = cResult[5];
      let tmp14 = cResult[6];
    }
    const effect = noop.useEffect(tmp13, tmp14);
    const isScreenLandscape = tmp(5912).useIsScreenLandscape();
    const tmpResult3 = tmp(5912);
    const youBarTotalHeight = tmp(14897).useYouBarTotalHeight();
    if (!stateFromStores) {
      return null;
    } else {
      if (cResult[7] === style) {
        if (cResult[8] === tmp4.header) {
          let tmp20 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
          const intl = tmp(1126).intl;
          obj4.children = intl.string(tmp(1126).t["7hB4kg"]);
          const tmp23 = closure_13(tmp(4886).Text, obj4);
          cResult[10] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[10];
        }
        if (cResult[11] !== tmp4.headerInner) {
          const obj5 = { style: tmp4.headerInner, children: tmp21 };
          const tmp27 = closure_13(closure_6, obj5);
          cResult[11] = tmp4.headerInner;
          cResult[12] = tmp27;
          let tmp24 = tmp27;
        } else {
          tmp24 = cResult[12];
        }
        if (cResult[13] === tmp4.headerTitle) {
          if (cResult[14] === tmp24) {
            let tmp28 = cResult[15];
          }
          if (cResult[16] === isScreenLandscape) {
            if (cResult[17] === youBarTotalHeight) {
              let tmp32 = cResult[18];
            }
            if (cResult[19] !== tmp32) {
              const obj6 = { contentContainerStyle: tmp32 };
              const tmp37 = closure_13(closure_18, obj6);
              cResult[19] = tmp32;
              cResult[20] = tmp37;
              let tmp34 = tmp37;
            } else {
              tmp34 = cResult[20];
            }
            if (cResult[21] === tmp34) {
              if (cResult[22] === tmp20) {
              }
            }
            const obj7 = { style: tmp20, children: null };
            const items1 = [tmp28, tmp34];
            obj7.children = items1;
            const tmp41 = closure_14(closure_6, obj7);
            cResult[21] = tmp34;
            cResult[22] = tmp20;
            cResult[23] = tmp28;
            cResult[24] = tmp41;
          }
          let tmp33;
          if (isScreenLandscape) {
            const obj8 = { paddingBottom: youBarTotalHeight };
            tmp33 = obj8;
          }
          cResult[16] = isScreenLandscape;
          cResult[17] = youBarTotalHeight;
          cResult[18] = tmp33;
          tmp32 = tmp33;
        }
        const obj9 = { style: tmp4.headerTitle, children: tmp24 };
        const tmp31 = closure_13(closure_6, obj9);
        cResult[13] = tmp4.headerTitle;
        cResult[14] = tmp24;
        cResult[15] = tmp31;
        tmp28 = tmp31;
      }
      const items2 = [tmp4.header, style];
      cResult[7] = style;
      cResult[8] = tmp4.header;
      cResult[9] = items2;
      tmp20 = items2;
    }
    const tmpResult4 = tmp(14897);
  }
  const fn2 = function w() {
    if (null != selectedGuildId) {
      if (null != navigation) {
        if (selectedGuildId !== closure_2_11) {
          if (!obj3.isFavoritesGuildId(selectedGuildId)) {
            if (selectedGuildId !== __initData) {
              guild = GuildStore.getGuild(selectedGuildId);
              if (guild == null) {
                guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
              }
              if (guild == null) {
                guild = GuildStore.getGuild(SelectedGuildStore.getLastSelectedGuildId());
              }
              if (guild == null) {
                const guilds = GuildStore.getGuilds();
                guild = guilds[GuildStore.getGuildIds(GuildStore)[0]];
              }
              if (null != guild) {
                closure_0 = _slicedToArray(getInitialNavigationState.getInitialGuildState(guild.id, undefined, false), 2)[1];
                navigation.dispatch(() => {
                  const CommonActions = navigation(dependencyMap[18]).CommonActions;
                  return CommonActions.reset(closure_0);
                });
                const tmp10Result = getInitialNavigationState;
              }
            }
          }
          obj3 = FavoritesUtils;
        }
      }
    }
  };
  const items3 = [selectedGuildId, navigation];
  cResult[3] = selectedGuildId;
  cResult[4] = navigation;
  cResult[5] = fn2;
  cResult[6] = items3;
  tmp14 = items3;
  tmp13 = fn2;
  const tmpResult = navigation(573);
}) : ((arg0) => {
  let navigation;
  selectedGuildId = undefined;
  ({ selectedGuildId, style } = arg0);
  const tmp = closure_15();
  navigation = navigation(1491).useNavigation();
  const obj = navigation(1491);
  const items = [AuthenticationStore];
  const stateFromStores = navigation(573).useStateFromStores(items, () => null != sessionId.getSessionId());
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = selectedGuildId;
  }
  selectedGuildId = tmp6;
  let obj3 = { type: null, name: null };
  const obj2 = navigation(573);
  obj3.type = navigation(1260).ImpressionTypes.VIEW;
  obj3.name = navigation(1260).ImpressionNames.GUILDS_EMPTY_NUX;
  selectedGuildId(8422)(obj3);
  const items1 = [tmp6, navigation];
  const effect = noop.useEffect(() => {
    if (null != selectedGuildId) {
      if (null != navigation) {
        if (selectedGuildId !== closure_2_11) {
          if (!obj3.isFavoritesGuildId(selectedGuildId)) {
            if (selectedGuildId !== __initData) {
              guild = GuildStore.getGuild(selectedGuildId);
              if (guild == null) {
                guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
              }
              if (guild == null) {
                guild = GuildStore.getGuild(SelectedGuildStore.getLastSelectedGuildId());
              }
              if (guild == null) {
                const guilds = GuildStore.getGuilds();
                guild = guilds[GuildStore.getGuildIds(GuildStore)[0]];
              }
              if (null != guild) {
                closure_0 = _slicedToArray(getInitialNavigationState.getInitialGuildState(guild.id, undefined, false), 2)[1];
                navigation.dispatch(() => {
                  const CommonActions = navigation(dependencyMap[18]).CommonActions;
                  return CommonActions.reset(closure_0);
                });
                const tmp10Result = getInitialNavigationState;
              }
            }
          }
          obj3 = FavoritesUtils;
        }
      }
    }
  }, items1);
  const tmp7 = selectedGuildId(8422);
  const isScreenLandscape = navigation(5912).useIsScreenLandscape();
  navigation(14897);
  let tmp14Result = null;
  if (stateFromStores) {
    const obj4 = { style: null, children: null };
    const items2 = [tmp.header, style];
    obj4.style = items2;
    const obj5 = { style: tmp.headerTitle, children: null };
    const obj6 = { style: tmp.headerInner, children: null };
    const obj7 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
    const intl = tmp2(1126).intl;
    obj7.children = intl.string(tmp2(1126).t["7hB4kg"]);
    obj6.children = closure_13(tmp2(4886).Text, obj7);
    obj5.children = closure_13(closure_6, obj6);
    const items3 = [closure_13(closure_6, obj5), ];
    let tmp18;
    if (isScreenLandscape) {
      const obj8 = { paddingBottom: tmp12 };
      tmp18 = obj8;
    }
    const obj9 = { contentContainerStyle: tmp18 };
    items3[1] = closure_13(closure_18, obj9);
    obj4.children = items3;
    tmp14Result = closure_14(closure_6, obj4);
  }
  return tmp14Result;
}));
export const GuildsEmptyContent = tmp6;