// discord_app/modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import FavoritesUtils from "../../../../../favorites/FavoritesUtils.tsx";
import getInitialNavigationState from "../../../getInitialNavigationState.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import Stack_Stack from "../../../../../../design/components/Stack/native/Stack.native.tsx";
import CreateGuildModalActionCreatorsDefault from "../../../../../create_guild/native/CreateGuildModalActionCreators.tsx";
import CheersSpotIllustration from "../../../../../../design/components/mana-assets/native/generated/CheersSpotIllustration.native.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../../../../stores/SelectedGuildStore.tsx";

require = fn;
function handleJoinGuild() {
  const result = CreateGuildModalActionCreatorsDefault.openGuildJoinServerScreen();
}
function handleCreateGuild() {
  CreateGuildModalActionCreatorsDefault.openCreateGuildModal();
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const isGuildLurker = fn(4875).isGuildLurker;
const Constants = fn(1084);
({ ME: closure_11, MOBILE_GUILD_UPSELL_LIST: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5005);
let obj = {
  scrollView: { borderTopLeftRadius: nativeDefault.radii.xxl, borderTopRightRadius: nativeDefault.radii.sm },
  header: null,
  headerTitle: null,
  scrollViewContentContainer: null,
  headerInner: null,
  content: null,
  illustrationWrapper: null,
  buttonContainer: null,
  textWrapper: null,
  headerText: null,
  text: null,
};
let obj3 = { borderTopLeftRadius: nativeDefault.radii.xxl, borderTopRightRadius: nativeDefault.radii.sm };
obj.header = { zIndex: 100, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.headerTitle = { height: 56, marginLeft: 16, marginRight: 8, flexDirection: "row", alignItems: "center" };
let obj4 = { zIndex: 100, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.scrollViewContentContainer = {
  flexGrow: 2,
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj.headerInner = { flex: 1, flexDirection: "row", alignItems: "center" };
let obj5 = { flexGrow: 2, justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.content = {
  flexGrow: 2,
  paddingHorizontal: nativeDefault.space.PX_16,
  alignItems: "center",
  justifyContent: "center",
};
let obj6 = {
  flexGrow: 2,
  paddingHorizontal: nativeDefault.space.PX_16,
  alignItems: "center",
  justifyContent: "center",
};
obj.illustrationWrapper = { width: "100%", alignItems: "center", marginBottom: nativeDefault.space.PX_8 };
let obj7 = { width: "100%", alignItems: "center", marginBottom: nativeDefault.space.PX_8 };
obj.buttonContainer = {
  paddingBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let obj8 = {
  paddingBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj.textWrapper = { marginHorizontal: nativeDefault.space.PX_16, marginVertical: nativeDefault.space.PX_24 };
let obj10 = {};
const merged = Object.assign(fn(5271).TextStyleSheet["heading-md/bold"]);
obj10.fontSize = 18;
obj10.marginBottom = 8;
obj.headerText = obj10;
obj.text = { textAlign: "center" };
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildsEmptyContent(contentContainerStyle) {
      const cResult = c.c(34);
      contentContainerStyle = contentContainerStyle.contentContainerStyle;
      const tmp4 = closure_15();
      if (cResult[0] === contentContainerStyle) {
        if (cResult[1] === tmp4.scrollViewContentContainer) {
          let tmp6 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp10 = map1(CheersSpotIllustration.CheersSpotIllustration, { width: 245, accessible: false });
          cResult[3] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== tmp4.illustrationWrapper) {
          const obj2 = { style: tmp4.illustrationWrapper, children: tmp8 };
          const tmp14 = map1(hasOwnProperty, obj2);
          cResult[4] = tmp4.illustrationWrapper;
          cResult[5] = tmp14;
          let tmp11 = tmp14;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] === tmp4.headerText) {
          if (cResult[7] === tmp4.text) {
            let tmp16 = cResult[8];
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t["Y7Ml/I"]);
            cResult[9] = stringResult;
            let tmp17 = stringResult;
          } else {
            tmp17 = cResult[9];
          }
          if (cResult[10] !== tmp16) {
            const obj3 = {
              color: "mobile-text-heading-primary",
              variant: "heading-md/bold",
              style: tmp16,
              children: tmp17,
            };
            const tmp21 = map1(Text_Text.Heading, obj3);
            cResult[10] = tmp16;
            cResult[11] = tmp21;
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[11];
          }
          const _Symbol3 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = util.intl;
            const stringResult1 = intl2.string(util.t.kuyE4r);
            cResult[12] = stringResult1;
            let tmp22 = stringResult1;
          } else {
            tmp22 = cResult[12];
          }
          if (cResult[13] !== tmp4.text) {
            const obj4 = { color: "text-default", variant: "text-md/medium", style: tmp4.text, children: tmp22 };
            const tmp26 = map1(Text_Text.Text, obj4);
            cResult[13] = tmp4.text;
            cResult[14] = tmp26;
            let tmp24 = tmp26;
          } else {
            tmp24 = cResult[14];
          }
          if (cResult[15] === tmp4.textWrapper) {
            if (cResult[16] === tmp24) {
              if (cResult[17] === tmp19) {
                let tmp27 = cResult[18];
              }
              if (cResult[19] === tmp4.content) {
                if (cResult[20] === tmp27) {
                  if (cResult[21] === tmp11) {
                    let tmp31 = cResult[22];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj5 = { size: "lg", text: null, onPress: null };
                    const intl3 = util.intl;
                    obj5.text = intl3.string(util.t.riOUtB);
                    obj5.onPress = handleJoinGuild;
                    const tmp38 = map1(components_Button_Button.Button, obj5);
                    cResult[23] = tmp38;
                    let tmp35 = tmp38;
                  } else {
                    tmp35 = cResult[23];
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj6 = { size: "lg", variant: "secondary", text: null, onPress: null };
                    const intl4 = util.intl;
                    obj6.text = intl4.string(util.t["BetvT+"]);
                    obj6.onPress = handleCreateGuild;
                    const tmp42 = map1(components_Button_Button.Button, obj6);
                    cResult[24] = tmp42;
                    let tmp39 = tmp42;
                  } else {
                    tmp39 = cResult[24];
                  }
                  if (cResult[25] !== tmp4.buttonContainer) {
                    const obj7 = { style: tmp4.buttonContainer, spacing: 12, children: null };
                    const items = [tmp35, tmp39];
                    obj7.children = items;
                    const tmp45 = closure_1_14(Stack_Stack.Stack, obj7);
                    cResult[25] = tmp4.buttonContainer;
                    cResult[26] = tmp45;
                    let tmp43 = tmp45;
                  } else {
                    tmp43 = cResult[26];
                  }
                  if (cResult[27] === tmp31) {
                    if (cResult[28] === tmp43) {
                      let tmp46 = cResult[29];
                    }
                    if (cResult[30] === tmp4.scrollView) {
                      if (cResult[31] === tmp46) {
                        if (cResult[32] === tmp6) {
                          let tmp50 = cResult[33];
                        }
                        return tmp50;
                      }
                    }
                    const obj8 = {
                      alwaysBounceVertical: false,
                      bounces: false,
                      style: tmp5,
                      contentContainerStyle: tmp6,
                      children: tmp46,
                    };
                    const tmp53 = map1(timestampProducer, obj8);
                    cResult[30] = tmp4.scrollView;
                    cResult[31] = tmp46;
                    cResult[32] = tmp6;
                    cResult[33] = tmp53;
                    tmp50 = tmp53;
                  }
                  const obj9 = { children: null };
                  const items1 = [tmp31, tmp43];
                  obj9.children = items1;
                  const tmp49 = closure_1_14(hasOwnProperty, obj9);
                  cResult[27] = tmp31;
                  cResult[28] = tmp43;
                  cResult[29] = tmp49;
                  tmp46 = tmp49;
                }
              }
              const obj10 = { style: tmp4.content, children: null };
              const items2 = [tmp11, tmp27];
              obj10.children = items2;
              const tmp34 = closure_1_14(hasOwnProperty, obj10);
              cResult[19] = tmp4.content;
              cResult[20] = tmp27;
              cResult[21] = tmp11;
              cResult[22] = tmp34;
              tmp31 = tmp34;
            }
          }
          const obj11 = { style: tmp15, children: null };
          const items3 = [tmp19, tmp24];
          obj11.children = items3;
          const tmp30 = closure_1_14(hasOwnProperty, obj11);
          cResult[15] = tmp4.textWrapper;
          cResult[16] = tmp24;
          cResult[17] = tmp19;
          cResult[18] = tmp30;
          tmp27 = tmp30;
        }
        const items4 = [,];
        ({ text: arr2[0], headerText: arr2[1] } = tmp4);
        cResult[6] = tmp4.headerText;
        cResult[7] = tmp4.text;
        cResult[8] = items4;
        tmp16 = items4;
      }
      const items5 = [tmp4.scrollViewContentContainer, contentContainerStyle];
      cResult[0] = contentContainerStyle;
      cResult[1] = tmp4.scrollViewContentContainer;
      cResult[2] = items5;
      tmp6 = items5;
    }
  : function GuildsEmptyContent(contentContainerStyle) {
      const tmp = closure_15();
      const obj = {
        alwaysBounceVertical: false,
        bounces: false,
        style: tmp.scrollView,
        contentContainerStyle: null,
        children: null,
      };
      const items = [tmp.scrollViewContentContainer, contentContainerStyle.contentContainerStyle];
      obj.contentContainerStyle = items;
      const obj2 = { children: null };
      const obj3 = { style: tmp.content, children: null };
      const items1 = [
        map1(hasOwnProperty, {
          style: tmp.illustrationWrapper,
          children: map1(CheersSpotIllustration.CheersSpotIllustration, { width: 245, accessible: false }),
        }),
      ];
      const obj5 = { style: tmp.textWrapper, children: null };
      const obj6 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: null, children: null };
      const items2 = [,];
      ({ text: arr3[0], headerText: arr3[1] } = tmp);
      obj6.style = items2;
      const intl = util.intl;
      obj6.children = intl.string(util.t["Y7Ml/I"]);
      const items3 = [map1(Text_Text.Heading, obj6)];
      const obj7 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
      const intl2 = util.intl;
      obj7.children = intl2.string(util.t.kuyE4r);
      items3[1] = map1(Text_Text.Text, obj7);
      obj5.children = items3;
      items1[1] = closure_1_14(hasOwnProperty, obj5);
      obj3.children = items1;
      const items4 = [closure_1_14(hasOwnProperty, obj3)];
      const obj8 = { style: tmp.buttonContainer, spacing: 12, children: null };
      const obj9 = { size: "lg", text: null, onPress: null };
      const intl3 = util.intl;
      obj9.text = intl3.string(util.t.riOUtB);
      obj9.onPress = handleJoinGuild;
      const items5 = [map1(components_Button_Button.Button, obj9)];
      const obj10 = { size: "lg", variant: "secondary", text: null, onPress: null };
      const intl4 = util.intl;
      obj10.text = intl4.string(util.t["BetvT+"]);
      obj10.onPress = handleCreateGuild;
      items5[1] = map1(components_Button_Button.Button, obj10);
      obj8.children = items5;
      items4[1] = closure_1_14(Stack_Stack.Stack, obj8);
      obj2.children = items4;
      obj.children = closure_1_14(hasOwnProperty, obj2);
      return map1(timestampProducer, obj);
    };
let closure_18 = tmp6;
ReactCompilerGating = fn(558);
let obj9 = { marginHorizontal: nativeDefault.space.PX_16, marginVertical: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GuildsEmpty(style) {
        const cResult = navigation(576).c(25);
        style = style.style;
        const tmp4 = closure_15();
        const obj = navigation(576);
        navigation = navigation(1504).useNavigation();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AuthenticationStore];
          const fn = function y() {
            return null != sessionId.getSessionId();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp6 = items;
          tmp7 = fn;
        } else {
          [tmp6, tmp7] = cResult;
        }
        const obj2 = navigation(1504);
        const stateFromStores = navigation(573).useStateFromStores(tmp6, tmp7);
        let selectedGuildId = null;
        if (stateFromStores) {
          selectedGuildId = style.selectedGuildId;
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = { type: tmp(1272).ImpressionTypes.VIEW, name: tmp(1272).ImpressionNames.GUILDS_EMPTY_NUX };
          cResult[2] = obj3;
          let tmp11 = obj3;
        } else {
          tmp11 = cResult[2];
        }
        selectedGuildId(6016)(tmp11);
        if (cResult[3] === selectedGuildId) {
          if (cResult[4] === navigation) {
            let tmp13 = cResult[5];
            let tmp14 = cResult[6];
          }
          const effect = noop.useEffect(tmp13, tmp14);
          const isScreenLandscape = tmp(8731).useIsScreenLandscape();
          const tmpResult3 = tmp(8731);
          const youBarTotalHeight = tmp(16952).useYouBarTotalHeight();
          if (!stateFromStores) {
            return null;
          } else {
            if (cResult[7] === style) {
              if (cResult[8] === tmp4.header) {
                let tmp20 = cResult[9];
              }
              const _Symbol = Symbol;
              if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = {
                  color: "mobile-text-heading-primary",
                  variant: "heading-lg/bold",
                  maxFontSizeMultiplier: 1.75,
                  accessibilityRole: "header",
                  children: null,
                };
                const intl = tmp(1125).intl;
                obj4.children = intl.string(tmp(1125).t["7hB4kg"]);
                const tmp23 = closure_13(tmp(5271).Text, obj4);
                cResult[10] = tmp23;
                let tmp21 = tmp23;
              } else {
                tmp21 = cResult[10];
              }
              if (cResult[11] !== tmp4.headerInner) {
                const obj5 = { style: tmp4.headerInner, children: tmp21 };
                const tmp27 = closure_13(closure_5, obj5);
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
                  const tmp41 = closure_14(closure_5, obj7);
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
              const tmp31 = closure_13(closure_5, obj9);
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
          const tmpResult4 = tmp(16952);
        }
        class E {
          constructor() {
            tmp = selectedGuildId;
            if (null != selectedGuildId) {
              obj2 = closure_0;
              if (null != closure_0) {
                tmp22 = ME;
                if (tmp !== ME) {
                  tmp23 = closure_0;
                  tmp24 = closure_2;
                  obj3 = closure_0(closure_2[23]);
                  if (!obj3.isFavoritesGuildId(tmp)) {
                    tmp2 = MOBILE_GUILD_UPSELL_LIST;
                    if (tmp !== MOBILE_GUILD_UPSELL_LIST) {
                      found = undefined;
                      if (null != tmp) {
                        tmp3 = closure_9;
                        guild = closure_9.getGuild(tmp);
                        if (null != guild) {
                          tmp6 = isGuildLurker;
                          if (!isGuildLurker(guild)) {
                            found = guild;
                          }
                        }
                      }
                      if (found == null) {
                        tmp7 = closure_10;
                        guildId = closure_10.getGuildId();
                        tmp9 = undefined;
                        if (null != guildId) {
                          tmp10 = closure_9;
                          guild1 = closure_9.getGuild(guildId);
                          if (null != guild1) {
                            tmp12 = isGuildLurker;
                            if (!isGuildLurker(guild1)) {
                              tmp9 = guild1;
                            }
                          }
                        }
                        found = tmp9;
                      }
                      if (found == null) {
                        tmp13 = closure_10;
                        lastSelectedGuildId = closure_10.getLastSelectedGuildId();
                        tmp15 = undefined;
                        if (null != lastSelectedGuildId) {
                          tmp16 = closure_9;
                          guild2 = closure_9.getGuild(lastSelectedGuildId);
                          if (null != guild2) {
                            tmp18 = isGuildLurker;
                            if (!isGuildLurker(guild2)) {
                              tmp15 = guild2;
                            }
                          }
                        }
                        found = tmp15;
                      }
                      if (found == null) {
                        tmp19 = closure_9;
                        guildsArray = closure_9.getGuildsArray();
                        found = guildsArray.find((item) => !closure_1_7(item));
                      }
                      if (null != found) {
                        tmp23Result = tmp23(tmp24[24]);
                        flag = false;
                        tmp20 = closure_3;
                        num = 2;
                        closure_0 = closure_3(tmp23Result.getInitialGuildState(found.id, undefined, false), 2)[1];
                        dispatchResult = obj2.dispatch(() => {
                          const CommonActions = navigation(dependencyMap[19]).CommonActions;
                          return CommonActions.reset(closure_0);
                        });
                      }
                    }
                  }
                }
              }
            }
            return;
          }
        }
        const items3 = [selectedGuildId, navigation];
        cResult[3] = selectedGuildId;
        cResult[4] = navigation;
        cResult[5] = E;
        cResult[6] = items3;
        tmp14 = items3;
        tmp13 = E;
        const tmpResult = navigation(573);
      }
    : function GuildsEmpty(arg0) {
        let navigation;
        selectedGuildId = undefined;
        ({ selectedGuildId, style } = arg0);
        const tmp = closure_15();
        navigation = navigation(1504).useNavigation();
        const obj = navigation(1504);
        const items = [AuthenticationStore];
        const stateFromStores = navigation(573).useStateFromStores(items, () => null != sessionId.getSessionId());
        let tmp6 = null;
        if (stateFromStores) {
          tmp6 = selectedGuildId;
        }
        selectedGuildId = tmp6;
        let obj3 = { type: null, name: null };
        const obj2 = navigation(573);
        obj3.type = navigation(1272).ImpressionTypes.VIEW;
        obj3.name = navigation(1272).ImpressionNames.GUILDS_EMPTY_NUX;
        selectedGuildId(6016)(obj3);
        const items1 = [tmp6, navigation];
        const effect = noop.useEffect(() => {
          if (null != selectedGuildId) {
            if (null != navigation) {
              if (selectedGuildId !== closure_2_11) {
                if (!obj3.isFavoritesGuildId(selectedGuildId)) {
                  if (selectedGuildId !== __initData) {
                    let found;
                    if (null != selectedGuildId) {
                      guild = GuildStore.getGuild(selectedGuildId);
                      if (null != guild) {
                        if (!isGuildLurker(guild)) {
                          found = guild;
                        }
                      }
                    }
                    if (found == null) {
                      const guildId = SelectedGuildStore.getGuildId();
                      let tmp9;
                      if (null != guildId) {
                        const guild1 = GuildStore.getGuild(guildId);
                        if (null != guild1) {
                          if (!isGuildLurker(guild1)) {
                            tmp9 = guild1;
                          }
                        }
                      }
                      found = tmp9;
                    }
                    if (found == null) {
                      const lastSelectedGuildId = SelectedGuildStore.getLastSelectedGuildId();
                      let tmp15;
                      if (null != lastSelectedGuildId) {
                        const guild2 = GuildStore.getGuild(lastSelectedGuildId);
                        if (null != guild2) {
                          if (!isGuildLurker(guild2)) {
                            tmp15 = guild2;
                          }
                        }
                      }
                      found = tmp15;
                    }
                    if (found == null) {
                      const guildsArray = GuildStore.getGuildsArray();
                      found = guildsArray.find((item) => !closure_1_7(item));
                    }
                    if (null != found) {
                      closure_0 = _slicedToArray(
                        getInitialNavigationState.getInitialGuildState(found.id, undefined, false),
                        2,
                      )[1];
                      navigation.dispatch(() => {
                        const CommonActions = navigation(dependencyMap[19]).CommonActions;
                        return CommonActions.reset(closure_0);
                      });
                      const tmp23Result = getInitialNavigationState;
                    }
                  }
                }
                obj3 = FavoritesUtils;
              }
            }
          }
        }, items1);
        const tmp7 = selectedGuildId(6016);
        const isScreenLandscape = navigation(8731).useIsScreenLandscape();
        navigation(16952);
        let tmp14Result = null;
        if (stateFromStores) {
          const obj4 = { style: null, children: null };
          const items2 = [tmp.header, style];
          obj4.style = items2;
          const obj5 = { style: tmp.headerTitle, children: null };
          const obj6 = { style: tmp.headerInner, children: null };
          const obj7 = {
            color: "mobile-text-heading-primary",
            variant: "heading-lg/bold",
            maxFontSizeMultiplier: 1.75,
            accessibilityRole: "header",
            children: null,
          };
          const intl = tmp2(1125).intl;
          obj7.children = intl.string(tmp2(1125).t["7hB4kg"]);
          obj6.children = closure_13(tmp2(5271).Text, obj7);
          obj5.children = closure_13(closure_5, obj6);
          const items3 = [closure_13(closure_5, obj5)];
          let tmp18;
          if (isScreenLandscape) {
            const obj8 = { paddingBottom: tmp12 };
            tmp18 = obj8;
          }
          const obj9 = { contentContainerStyle: tmp18 };
          items3[1] = closure_13(closure_18, obj9);
          obj4.children = items3;
          tmp14Result = closure_14(closure_5, obj4);
        }
        return tmp14Result;
      },
);
export const GuildsEmptyContent = tmp6;
