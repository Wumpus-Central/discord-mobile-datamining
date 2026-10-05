// discord_app/modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../../../intl/index.native.tsx";
import FavoritesUtils from "../../../../../favorites/FavoritesUtils.tsx";
import getInitialNavigationState from "../../../getInitialNavigationState.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import CreateGuildModalActionCreatorsDefault from "../../../../../create_guild/native/CreateGuildModalActionCreators.tsx";
import AssetRegistryDefault from "../../../../../../../_runtime/16210_AssetRegistry.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import AuthenticationStore from "../../../../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../../../../stores/SelectedGuildStore.tsx";
import Constants from "../../../../../../Constants.tsx";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let contentContainerStyle, navigation;

let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
function handleJoinGuild() {
  const obj = CreateGuildModalActionCreatorsDefault;
  const result = obj.openGuildJoinServerScreen();
}
function handleCreateGuild() {
  const obj = CreateGuildModalActionCreatorsDefault;
  obj.openCreateGuildModal();
}
({ Image: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ ME: unpackModuleId, MOBILE_GUILD_UPSELL_LIST: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  scrollView: obj2,
  header: obj3,
  headerTitle: { height: 56, marginLeft: 16, marginRight: 8, flexDirection: "row", alignItems: "center" },
  scrollViewContentContainer: obj4,
  headerInner: { flex: 1, flexDirection: "row", alignItems: "center" },
  content: obj5,
  illustrationWrapper: { width: "100%", paddingHorizontal: 36 },
  illustration: obj6,
  buttonContainer: obj7,
  textWrapper: obj8,
  headerText: obj9,
  text: { textAlign: "center" },
};
obj2 = { borderTopLeftRadius: nativeDefault.radii.xxl, borderTopRightRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { zIndex: 100, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj4 = { flexGrow: 2, justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj5 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj6 = { resizeMode: "contain", alignSelf: "center", marginBottom: nativeDefault.space.PX_24 };
obj7 = {
  paddingBottom: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj8 = { marginHorizontal: nativeDefault.space.PX_16, marginVertical: nativeDefault.space.PX_24 };
obj9 = { fontSize: 18, marginBottom: 8 };
const merged = Object.assign(Text_Text.TextStyleSheet["heading-md/bold"]);
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (contentContainerStyle) => {
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let items3;
      const obj = react2;
      const cResult = obj.c(36);
      contentContainerStyle = contentContainerStyle.contentContainerStyle;
      const tmp4 = closure_15();
      if (cResult[0] === contentContainerStyle) {
        let tmp6;
        let tmp7;
        if (cResult[1] === tmp4.scrollViewContentContainer) {
          tmp6 = cResult[2];
        }
        const content = tmp4.content;
        if (cResult[3] !== tmp4.illustration) {
          const obj2 = { source: AssetRegistryDefault, style: tmp4.illustration };
          const tmp11 = map1(hasOwnProperty, obj2);
          cResult[3] = tmp4.illustration;
          cResult[4] = tmp11;
          tmp7 = tmp11;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === tmp4.illustrationWrapper) {
          let tmp12;
          if (cResult[6] === tmp7) {
            tmp12 = cResult[7];
          }
          if (cResult[8] === tmp4.headerText) {
            let tmp17;
            let tmp19;
            let tmp21;
            let tmp24;
            let tmp26;
            if (cResult[9] === tmp4.text) {
              tmp17 = cResult[10];
            }
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = intl5.intl;
              const stringResult = intl.string(intl5.t["Y7Ml/I"]);
              cResult[11] = stringResult;
              tmp19 = stringResult;
            } else {
              tmp19 = cResult[11];
            }
            if (cResult[12] !== tmp17) {
              const obj3 = {
                color: "mobile-text-heading-primary",
                variant: "heading-md/bold",
                style: tmp17,
                children: tmp19,
              };
              const tmp23 = map1(Text_Text.Heading, obj3);
              cResult[12] = tmp17;
              cResult[13] = tmp23;
              tmp21 = tmp23;
            } else {
              tmp21 = cResult[13];
            }
            const _Symbol2 = Symbol;
            const text = tmp4.text;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = intl5.intl;
              const stringResult1 = intl2.string(intl5.t.kuyE4r);
              cResult[14] = stringResult1;
              tmp24 = stringResult1;
            } else {
              tmp24 = cResult[14];
            }
            if (cResult[15] !== tmp4.text) {
              const obj4 = { color: "text-default", variant: "text-md/medium", style: text, children: tmp24 };
              const tmp28 = map1(Text_Text.Text, obj4);
              cResult[15] = tmp4.text;
              cResult[16] = tmp28;
              tmp26 = tmp28;
            } else {
              tmp26 = cResult[16];
            }
            if (cResult[17] === tmp4.textWrapper) {
              if (cResult[18] === tmp26) {
                let tmp29;
                if (cResult[19] === tmp21) {
                  tmp29 = cResult[20];
                }
                if (cResult[21] === tmp4.content) {
                  if (cResult[22] === tmp29) {
                    let tmp33;
                    let tmp37;
                    let tmp41;
                    let tmp45;
                    if (cResult[23] === tmp12) {
                      tmp33 = cResult[24];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj5 = { size: "lg", text: intl3.string(intl5.t.riOUtB), onPress: handleJoinGuild };
                      const Button = components_Button_Button.Button;
                      intl3 = intl5.intl;
                      const tmp40 = map1(Button, obj5);
                      cResult[25] = tmp40;
                      tmp37 = tmp40;
                    } else {
                      tmp37 = cResult[25];
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj6 = {
                        size: "lg",
                        variant: "secondary",
                        text: intl4.string(intl5.t["BetvT+"]),
                        onPress: handleCreateGuild,
                      };
                      const Button2 = components_Button_Button.Button;
                      intl4 = intl5.intl;
                      const tmp44 = map1(Button2, obj6);
                      cResult[26] = tmp44;
                      tmp41 = tmp44;
                    } else {
                      tmp41 = cResult[26];
                    }
                    if (cResult[27] !== tmp4.buttonContainer) {
                      const obj7 = { style: tmp4.buttonContainer, spacing: 12, children: items };
                      items = [tmp37, tmp41];
                      const tmp47 = authStore2(Stack_Stack.Stack, obj7);
                      cResult[27] = tmp4.buttonContainer;
                      cResult[28] = tmp47;
                      tmp45 = tmp47;
                    } else {
                      tmp45 = cResult[28];
                    }
                    if (cResult[29] === tmp33) {
                      let tmp48;
                      if (cResult[30] === tmp45) {
                        tmp48 = cResult[31];
                      }
                      if (cResult[32] === tmp4.scrollView) {
                        if (cResult[33] === tmp48) {
                          let tmp52;
                          if (cResult[34] === tmp6) {
                            tmp52 = cResult[35];
                          }
                          return tmp52;
                        }
                      }
                      const obj8 = {
                        alwaysBounceVertical: false,
                        bounces: false,
                        style: tmp5,
                        contentContainerStyle: tmp6,
                        children: tmp48,
                      };
                      const tmp55 = map1(metroImportDefault, obj8);
                      cResult[32] = tmp4.scrollView;
                      cResult[33] = tmp48;
                      cResult[34] = tmp6;
                      cResult[35] = tmp55;
                      tmp52 = tmp55;
                    }
                    const obj9 = { children: items1 };
                    items1 = [tmp33, tmp45];
                    const tmp51 = authStore2(metroRequire, obj9);
                    cResult[29] = tmp33;
                    cResult[30] = tmp45;
                    cResult[31] = tmp51;
                    tmp48 = tmp51;
                  }
                }
                const obj10 = { style: content, children: items2 };
                items2 = [tmp12, tmp29];
                const tmp36 = authStore2(metroRequire, obj10);
                cResult[21] = tmp4.content;
                cResult[22] = tmp29;
                cResult[23] = tmp12;
                cResult[24] = tmp36;
                tmp33 = tmp36;
              }
            }
            const obj11 = { style: tmp16, children: items3 };
            items3 = [tmp21, tmp26];
            const tmp32 = authStore2(metroRequire, obj11);
            cResult[17] = tmp4.textWrapper;
            cResult[18] = tmp26;
            cResult[19] = tmp21;
            cResult[20] = tmp32;
            tmp29 = tmp32;
          }
          const items4 = [,];
          ({ text: arr2[0], headerText: arr2[1] } = tmp4);
          cResult[8] = tmp4.headerText;
          cResult[9] = tmp4.text;
          cResult[10] = items4;
          tmp17 = items4;
        }
        const obj12 = { style: tmp4.illustrationWrapper, children: tmp7 };
        const tmp15 = map1(metroRequire, obj12);
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
    }
  : (contentContainerStyle) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj2;
      let obj5;
      contentContainerStyle = contentContainerStyle.contentContainerStyle;
      const tmp = closure_15();
      const obj = {
        alwaysBounceVertical: false,
        bounces: false,
        style: tmp.scrollView,
        contentContainerStyle: items,
        children: authStore2(metroRequire, obj2),
      };
      items = [tmp.scrollViewContentContainer, contentContainerStyle];
      obj2 = { children: items4 };
      const obj3 = { style: tmp.content, children: items1 };
      const obj4 = { style: tmp.illustrationWrapper, children: map1(hasOwnProperty, obj5) };
      obj5 = { source: AssetRegistryDefault, style: tmp.illustration };
      items1 = [map1(metroRequire, obj4)];
      const obj6 = { style: tmp.textWrapper, children: items3 };
      const obj7 = {
        color: "mobile-text-heading-primary",
        variant: "heading-md/bold",
        style: items2,
        children: intl.string(intl5.t["Y7Ml/I"]),
      };
      items2 = [,];
      ({ text: arr3[0], headerText: arr3[1] } = tmp);
      const Heading = Text_Text.Heading;
      intl = intl5.intl;
      items3 = [map1(Heading, obj7)];
      const obj8 = {
        color: "text-default",
        variant: "text-md/medium",
        style: tmp.text,
        children: intl2.string(intl5.t.kuyE4r),
      };
      const Text = Text_Text.Text;
      intl2 = intl5.intl;
      items3[1] = map1(Text, obj8);
      items1[1] = authStore2(metroRequire, obj6);
      items4 = [authStore2(metroRequire, obj3)];
      const obj9 = { style: tmp.buttonContainer, spacing: 12, children: items5 };
      const Stack = Stack_Stack.Stack;
      const obj10 = { size: "lg", text: intl3.string(intl5.t.riOUtB), onPress: handleJoinGuild };
      const Button = components_Button_Button.Button;
      intl3 = intl5.intl;
      items5 = [map1(Button, obj10)];
      const obj11 = {
        size: "lg",
        variant: "secondary",
        text: intl4.string(intl5.t["BetvT+"]),
        onPress: handleCreateGuild,
      };
      const Button2 = components_Button_Button.Button;
      intl4 = intl5.intl;
      items5[1] = map1(Button2, obj11);
      items4[1] = authStore2(Stack, obj9);
      return map1(metroImportDefault, obj);
    };
let closure_18 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (style) => {
        let intl;
        let items1;
        let sessionId;
        let tmp11;
        let tmp6;
        let tmp7;
        const obj = navigation(576);
        const cResult = obj.c(25);
        style = style.style;
        let selectedGuildId = style.selectedGuildId;
        const tmp4 = closure_15();
        const obj2 = navigation(1491);
        navigation = obj2.useNavigation();
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
        const tmpResult = navigation(573);
        const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
        let tmp10 = null;
        if (stateFromStores) {
          tmp10 = selectedGuildId;
        }
        selectedGuildId = tmp10;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = {
            type: navigation(1260).ImpressionTypes.VIEW,
            name: navigation(1260).ImpressionNames.GUILDS_EMPTY_NUX,
          };
          cResult[2] = obj3;
          tmp11 = obj3;
        } else {
          tmp11 = cResult[2];
        }
        selectedGuildId(8422)(tmp11);
        if (cResult[3] === tmp10) {
          let tmp13;
          let tmp14;
          if (cResult[4] === navigation) {
            tmp13 = cResult[5];
            tmp14 = cResult[6];
          }
          const effect = react.useEffect(tmp13, tmp14);
          const tmpResult3 = navigation(5912);
          const isScreenLandscape = tmpResult3.useIsScreenLandscape();
          const tmpResult4 = navigation(14901);
          const youBarTotalHeight = tmpResult4.useYouBarTotalHeight();
          let tmp19 = null;
          if (stateFromStores) {
            if (cResult[7] === style) {
              let tmp20;
              let tmp21;
              let tmp24;
              if (cResult[8] === tmp4.header) {
                tmp20 = cResult[9];
              }
              const _Symbol = Symbol;
              if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = {
                  color: "mobile-text-heading-primary",
                  variant: "heading-lg/bold",
                  maxFontSizeMultiplier: 1.75,
                  accessibilityRole: "header",
                  children: intl.string(navigation(1126).t["7hB4kg"]),
                };
                const Text = tmp(4886).Text;
                intl = tmp(1126).intl;
                const tmp23 = closure_13(Text, obj4);
                cResult[10] = tmp23;
                tmp21 = tmp23;
              } else {
                tmp21 = cResult[10];
              }
              if (cResult[11] !== tmp4.headerInner) {
                const obj5 = { style: tmp4.headerInner, children: tmp21 };
                const tmp27 = closure_13(closure_6, obj5);
                cResult[11] = tmp4.headerInner;
                cResult[12] = tmp27;
                tmp24 = tmp27;
              } else {
                tmp24 = cResult[12];
              }
              if (cResult[13] === tmp4.headerTitle) {
                let tmp28;
                if (cResult[14] === tmp24) {
                  tmp28 = cResult[15];
                }
                if (cResult[16] === isScreenLandscape) {
                  let tmp32;
                  let tmp34;
                  if (cResult[17] === youBarTotalHeight) {
                    tmp32 = cResult[18];
                  }
                  if (cResult[19] !== tmp32) {
                    const obj6 = { contentContainerStyle: tmp32 };
                    const tmp37 = closure_13(closure_18, obj6);
                    cResult[19] = tmp32;
                    cResult[20] = tmp37;
                    tmp34 = tmp37;
                  } else {
                    tmp34 = cResult[20];
                  }
                  if (cResult[21] === tmp34) {
                    if (cResult[22] === tmp20) {
                      let tmp38;
                      if (cResult[23] === tmp28) {
                        tmp38 = cResult[24];
                      }
                      tmp19 = tmp38;
                    }
                  }
                  const obj7 = { style: tmp20, children: items1 };
                  items1 = [tmp28, tmp34];
                  const tmp41 = closure_14(closure_6, obj7);
                  cResult[21] = tmp34;
                  cResult[22] = tmp20;
                  cResult[23] = tmp28;
                  cResult[24] = tmp41;
                  tmp38 = tmp41;
                }
                let tmp33;
                if (isScreenLandscape) {
                  tmp33 = { paddingBottom: youBarTotalHeight };
                  const obj8 = { paddingBottom: youBarTotalHeight };
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
          return tmp19;
        }
        const fn2 = function w() {
          if (null != selectedGuildId) {
            if (null != navigation) {
              if (selectedGuildId !== unpackModuleId) {
                const obj3 = FavoritesUtils;
                if (!obj3.isFavoritesGuildId(selectedGuildId)) {
                  if (selectedGuildId !== closure_12) {
                    let guild = GuildStore.getGuild(selectedGuildId);
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
                      const tmp10Result = getInitialNavigationState;
                      let closure_0 = _slicedToArray(
                        tmp10Result.getInitialGuildState(guild.id, undefined, false),
                        2,
                      )[1];
                      navigation.dispatch(() => {
                        const CommonActions = navigation(closure_2_2[18]).CommonActions;
                        return CommonActions.reset(closure_0);
                      });
                    }
                  }
                }
              }
            }
          }
        };
        const items3 = [tmp10, navigation];
        cResult[3] = tmp10;
        cResult[4] = navigation;
        cResult[5] = fn2;
        cResult[6] = items3;
        tmp14 = items3;
        tmp13 = fn2;
      }
    : (arg0) => {
        let Text;
        let intl;
        let items2;
        let items3;
        let obj6;
        let obj7;
        let selectedGuildId;
        let sessionId;
        let style;
        navigation = undefined;
        selectedGuildId = undefined;
        ({ selectedGuildId, style } = arg0);
        const tmp = closure_15();
        const obj = navigation(1491);
        navigation = obj.useNavigation();
        const items = [AuthenticationStore];
        const obj2 = navigation(573);
        const stateFromStores = obj2.useStateFromStores(items, () => null != sessionId.getSessionId());
        let tmp6 = null;
        if (stateFromStores) {
          tmp6 = selectedGuildId;
        }
        selectedGuildId = tmp6;
        let obj3 = {
          type: navigation(1260).ImpressionTypes.VIEW,
          name: navigation(1260).ImpressionNames.GUILDS_EMPTY_NUX,
        };
        const tmp7 = selectedGuildId(8422);
        tmp7(obj3);
        const items1 = [tmp6, navigation];
        const effect = react.useEffect(() => {
          if (null != selectedGuildId) {
            if (null != navigation) {
              if (selectedGuildId !== unpackModuleId) {
                const obj3 = FavoritesUtils;
                if (!obj3.isFavoritesGuildId(selectedGuildId)) {
                  if (selectedGuildId !== closure_12) {
                    let guild = GuildStore.getGuild(selectedGuildId);
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
                      const tmp10Result = getInitialNavigationState;
                      let closure_0 = _slicedToArray(
                        tmp10Result.getInitialGuildState(guild.id, undefined, false),
                        2,
                      )[1];
                      navigation.dispatch(() => {
                        const CommonActions = navigation(closure_2_2[18]).CommonActions;
                        return CommonActions.reset(closure_0);
                      });
                    }
                  }
                }
              }
            }
          }
        }, items1);
        const tmp2Result = navigation(5912);
        const isScreenLandscape = tmp2Result.useIsScreenLandscape();
        navigation(14901);
        let tmp14Result = null;
        if (stateFromStores) {
          const obj4 = { style: items2, children: items3 };
          items2 = [tmp.header, style];
          const obj5 = { style: tmp.headerTitle, children: closure_13(closure_6, obj6) };
          obj6 = { style: tmp.headerInner, children: closure_13(Text, obj7) };
          obj7 = {
            color: "mobile-text-heading-primary",
            variant: "heading-lg/bold",
            maxFontSizeMultiplier: 1.75,
            accessibilityRole: "header",
            children: intl.string(navigation(1126).t["7hB4kg"]),
          };
          Text = tmp2(4886).Text;
          intl = tmp2(1126).intl;
          items3 = [closure_13(closure_6, obj5)];
          let tmp18;
          if (isScreenLandscape) {
            tmp18 = { paddingBottom: tmp12 };
            const obj8 = { paddingBottom: tmp12 };
          }
          const obj9 = { contentContainerStyle: tmp18 };
          items3[1] = closure_13(closure_18, obj9);
          tmp14Result = closure_14(closure_6, obj4);
        }
        return tmp14Result;
      },
);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx");

export default memoResult;
export const GuildsEmptyContent = tmp7;
