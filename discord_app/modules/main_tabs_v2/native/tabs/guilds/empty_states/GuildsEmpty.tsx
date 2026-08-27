// discord_app/modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import Text from "../../../../../../design/components/Text/native/Text.tsx";
import Stack from "../../../../../../design/components/Stack/native/Stack.native.tsx";
import Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import _modDef12160 from "../../../../../create_guild/native/CreateGuildModalActionCreators.tsx";
import registerAssetDefault from "../../../../../../../_runtime/15773_registerAsset.js";
import closure_3 from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../../../../stores/AuthenticationStore.tsx";
import closure_9 from "../../../../../../stores/GuildStore.tsx";
import closure_10 from "../../../../../../stores/SelectedGuildStore.tsx";
import ME from "../../../../../../Constants.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function handleJoinGuild() {
  const result = _modDef12160.openGuildJoinServerScreen();
}
function handleCreateGuild() {
  _modDef12160.openCreateGuildModal();
}
class GuildsEmptyContent {
  constructor(arg0) {
    tmp = closure_15();
    obj = { alwaysBounceVertical: false, bounces: false, style: tmp.scrollView, contentContainerStyle: items, children: null };
    items = [, ];
    items[0] = tmp.scrollViewContentContainer;
    items[1] = global.contentContainerStyle;
    obj = { children: null };
    obj1 = { style: tmp.content, children: null };
    obj2 = { style: tmp.illustrationWrapper, children: null };
    obj3 = { source: require("registerAsset"), style: tmp.illustration };
    obj2[1] = jsx(Image, obj3);
    items1 = [, ];
    items1[0] = jsx(View, obj2);
    obj4 = { style: tmp.textWrapper, children: null };
    obj5 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items2, children: null };
    items2 = [, ];
    ({ text: arr3[0], headerText: arr3[1] } = tmp);
    intl = require("getSystemLocale").intl;
    obj5[3] = intl.string(require("getSystemLocale").t["Y7Ml/I"]);
    items3 = [, ];
    items3[0] = jsx(require("Text").Heading, obj5);
    obj6 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
    intl2 = require("getSystemLocale").intl;
    obj6[3] = intl2.string(require("getSystemLocale").t.kuyE4r);
    items3[1] = jsx(require("Text").Text, obj6);
    obj4[1] = items3;
    items1[1] = jsxs(View, obj4);
    obj1[1] = items1;
    items4 = [, ];
    items4[0] = jsxs(View, obj1);
    obj7 = { style: tmp.buttonContainer, spacing: 12, children: null };
    obj8 = { size: "lg", text: null, onPress: null };
    intl3 = require("getSystemLocale").intl;
    obj8[1] = intl3.string(require("getSystemLocale").t.riOUtB);
    obj8[2] = handleJoinGuild;
    items5 = [, ];
    items5[0] = jsx(require("Button").Button, obj8);
    obj9 = { size: "lg", variant: "secondary", text: null, onPress: null };
    intl4 = require("getSystemLocale").intl;
    obj9[2] = intl4.string(require("getSystemLocale").t["BetvT+"]);
    obj9[3] = handleCreateGuild;
    items5[1] = jsx(require("Button").Button, obj9);
    obj7[2] = items5;
    items4[1] = jsxs(require("Stack").Stack, obj7);
    obj[0] = items4;
    obj[4] = jsxs(View, obj);
    return jsx(ScrollView, obj);
  }
}
let c4 = importAllResult;
({ Image: c5, View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ ME: unpackModuleId, MOBILE_GUILD_UPSELL_LIST: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { scrollView: null, header: null, headerTitle: null, scrollViewContentContainer: null, headerInner: null, content: null, illustrationWrapper: null, illustration: null, buttonContainer: null, textWrapper: null, headerText: null, text: null };
obj = { borderTopLeftRadius: ThemesDefault.radii.xxl, borderTopRightRadius: ThemesDefault.radii.sm };
obj[0] = obj;
createCacheKey = { zIndex: 100, width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj[1] = createCacheKey;
obj[2] = { height: 56, marginLeft: 16, marginRight: 8, flexDirection: "row", alignItems: "center" };
obj[3] = { flexGrow: 2, justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[4] = { flex: 1, flexDirection: "row", alignItems: "center" };
let obj2 = { flexGrow: 2, justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[5] = { flexGrow: 2, paddingHorizontal: ThemesDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj[6] = { width: "100%", paddingHorizontal: 36 };
let obj3 = { flexGrow: 2, paddingHorizontal: ThemesDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj[7] = { resizeMode: "contain", alignSelf: "center", marginBottom: ThemesDefault.space.PX_24 };
let obj4 = { resizeMode: "contain", alignSelf: "center", marginBottom: ThemesDefault.space.PX_24 };
obj[8] = { paddingBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let obj5 = { paddingBottom: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[9] = { marginHorizontal: ThemesDefault.space.PX_16, marginVertical: ThemesDefault.space.PX_24 };
let obj7 = {};
const merged = Object.assign(require("Text").TextStyleSheet["heading-md/bold"]);
obj7.fontSize = 18;
obj7.marginBottom = 8;
obj[10] = obj7;
obj[11] = { textAlign: "center" };
let closure_15 = createCacheKey.createStyles(obj);
let obj6 = { marginHorizontal: ThemesDefault.space.PX_16, marginVertical: ThemesDefault.space.PX_24 };
const memoResult = importAllResult.memo(function GuildsEmpty(arg0) {
  let navigation;
  selectedGuildId = undefined;
  ({ selectedGuildId, style } = arg0);
  const tmp = callback3();
  let obj = navigation(1501);
  navigation = obj.useNavigation();
  obj1 = navigation(647);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => null != sessionId.getSessionId());
  let tmp6 = null;
  if (stateFromStores) {
    tmp6 = selectedGuildId;
  }
  selectedGuildId = tmp6;
  obj = { type: navigation(503).ImpressionTypes.VIEW, name: navigation(503).ImpressionNames.GUILDS_EMPTY_NUX };
  selectedGuildId(8815)(obj);
  const items1 = [tmp6, navigation];
  const effect = importAllResult.useEffect(() => {
    if (null != selectedGuildId) {
      if (null != closure_0) {
        if (tmp !== closure_1_11) {
          if (!obj3.isFavoritesGuildId(tmp)) {
            if (tmp !== closure_1_12) {
              let guild = closure_1_9.getGuild(tmp);
              if (guild == null) {
                guild = obj4.getGuild(closure_1_10.getGuildId());
              }
              if (guild == null) {
                guild = obj4.getGuild(closure_1_10.getLastSelectedGuildId());
              }
              if (guild == null) {
                const guilds = obj4.getGuilds();
                guild = guilds[obj4.getGuildIds(obj4)[0]];
              }
              if (null != guild) {
                closure_0 = closure_1_3(tmp10(tmp11[21]).getInitialGuildState(guild.id, undefined, false), 2)[1];
                obj2.dispatch(() => {
                  const CommonActions = callback(closure_1_2[16]).CommonActions;
                  return CommonActions.reset(callback);
                });
                const tmp10Result = tmp10(tmp11[21]);
              }
            }
          }
          obj3 = navigation(closure_1_2[20]);
          tmp10 = navigation;
          tmp11 = closure_1_2;
        }
      }
      obj2 = closure_0;
    }
  }, items1);
  let tmp2Result = tmp2(5023);
  const isScreenLandscape = tmp2Result.useIsScreenLandscape();
  tmp2Result = tmp2(14650);
  let tmp14Result = null;
  if (stateFromStores) {
    obj = { style: null, children: null };
    const items2 = [tmp.header, style];
    obj[0] = items2;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.headerTitle;
    let obj2 = { style: null, children: null };
    obj2[0] = tmp.headerInner;
    let obj3 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
    const intl = tmp2(1236).intl;
    obj3[4] = intl.string(tmp2(1236).t["7hB4kg"]);
    obj2[1] = callback(tmp2(4441).Text, obj3);
    obj1[1] = callback(closure_6, obj2);
    const items3 = [callback(closure_6, obj1), ];
    let tmp18;
    if (isScreenLandscape) {
      const obj4 = { paddingBottom: null };
      obj4[0] = tmp12;
      tmp18 = obj4;
    }
    const obj5 = { contentContainerStyle: null };
    obj5[0] = tmp18;
    items3[1] = callback(GuildsEmptyContent, obj5);
    obj[1] = items3;
    tmp14Result = closure_14(closure_6, obj);
    const tmp14 = closure_14;
    const tmp15 = closure_6;
    const tmp16 = callback;
    const tmp17 = GuildsEmptyContent;
  }
  return tmp14Result;
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/empty_states/GuildsEmpty.tsx");

export default memoResult;
export { GuildsEmptyContent };