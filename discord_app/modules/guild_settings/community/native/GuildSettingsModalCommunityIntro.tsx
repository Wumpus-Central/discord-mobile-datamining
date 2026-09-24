// === Module 18196: GuildSettingsModalCommunityIntro ===

// Module 18196 (GuildSettingsModalCommunityIntro)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4522 */;
import Text_Text from "Text/Text" /* 4825 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 18201 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;
import PermissionStore from "PermissionStore" /* 4464 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9940 */;

const require = globalThis.__r;

require = fn;
function FeatureCard(arg0) {
  ({ icon, header, body } = arg0);
  const tmp = closure_17();
  const obj = { style: tmp.featureCard, children: null };
  const items = [closure_1_14(React4, { style: tmp.featureIcon, children: icon() }), ];
  const obj3 = { style: tmp.featureDescription, children: null };
  const items1 = [closure_1_14(Text_Text.Heading, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: header }), closure_1_14(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: body })];
  obj3.children = items1;
  items[1] = __initData(React4, obj3);
  obj.children = items;
  return __initData(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ HelpdeskArticles: c10, GuildFeatures: closure_11, GuildSettingsSections: closure_12, Permissions: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { height: "100%" }, contentPadding: { padding: 16 }, header: { textAlign: "center", marginBottom: 8 }, body: { textAlign: "center", marginBottom: 24 }, details: { textAlign: "center", marginTop: 24 }, headerImage: { width: "100%" }, features: { marginTop: 32, marginBottom: 32 }, featureCard: { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, flex: 1, flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.sm, marginTop: 8, alignItems: "flex-start" }, featureIcon: null, featureDescription: null };
let obj3 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, flex: 1, flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.sm, marginTop: 8, alignItems: "flex-start" };
obj2.featureIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 40, marginRight: 16, padding: 8 };
obj2.featureDescription = { overflow: "hidden", flex: 1 };
let closure_17 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx");

export default function GuildSettingsModalCommunityIntro(contentContainerStyle) {
  ({ guildId: require, onClose } = contentContainerStyle);
  let navigation;
  let tmp = closure_17();
  navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(require));
  let obj2 = require("initialize");
  const items1 = [PermissionStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = PermissionStore.can(constants4.ADMINISTRATOR, tmp);
    }
    return canResult;
  });
  const obj3 = require("initialize");
  const items2 = [GuildSettingsStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => submitting.isSubmitting());
  const items3 = [stateFromStores, stateFromStores2, navigation, onClose];
  const effect = stateFromStores.useEffect(() => {
    let tmp = !stateFromStores2;
    if (!stateFromStores2) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        hasItem = features.has(constants2.COMMUNITY);
      }
      tmp = hasItem;
    }
    if (tmp) {
      DispatcherDefault.wait(() => onClose(navigation[17]).setSection(constants.COMMUNITY));
      const obj2 = { onClose };
      const replaced = navigation.replace(constants3.COMMUNITY, obj2);
    }
  }, items3);
  const obj4 = require("initialize");
  const obj6 = { children: null };
  const obj7 = { style: tmp.container, contentContainerStyle: null, children: null };
  const items4 = [tmp.contentPadding, contentContainerStyle.contentContainerStyle];
  obj7.contentContainerStyle = items4;
  const obj5 = require("IntroHeader");
  const items5 = [closure_14(stateFromStores2, { resizeMode: "contain", source: require("IntroHeader").useIntroHeaderSource(), style: tmp.headerImage }), , , , , ];
  const obj9 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj9.children = intl.string(require("util").t["M/gBcA"]);
  items5[1] = closure_14(require("Text/Text").Heading, obj9);
  const obj10 = { style: tmp.body, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  const obj11 = { helpdeskArticle: null };
  const obj8 = { resizeMode: "contain", source: require("IntroHeader").useIntroHeaderSource(), style: tmp.headerImage };
  obj11.helpdeskArticle = onClose(navigation[19]).getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES);
  obj10.children = intl2.format(require("util").t["52EgsM"], obj11);
  items5[2] = closure_14(require("Text/Text").Text, obj10);
  const obj13 = { text: null, onPress: null, disabled: null };
  const intl3 = require("util").intl;
  obj13.text = intl3.string(require("util").t.LhlgY9);
  obj13.onPress = function onPress() {
    if (stateFromStores1) {
      EnableCommunityModalActionCreatorsDefault.open();
    } else {
      ToastUtils.communityAdminOnly();
    }
  };
  obj13.disabled = !stateFromStores1;
  items5[3] = closure_14(require("components/Button/Button").Button, obj13);
  const obj14 = { style: tmp.details, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = require("util").intl;
  obj14.children = intl4.string(require("util").t.HgTI2N);
  items5[4] = closure_14(require("Text/Text").Text, obj14);
  const obj15 = { style: tmp.features, children: null };
  const obj16 = {
    icon() {
      return closure_1_14(require("AnalyticsIcon").AnalyticsIcon, { color: onClose(navigation[8]).unsafe_rawColors.GREEN_360 });
    },
    header: null,
    body: null
  };
  const intl5 = require("util").intl;
  obj16.header = intl5.string(require("util").t.oVQF2y);
  const intl6 = require("util").intl;
  obj16.body = intl6.format(require("util").t.A6G7ak, {
    featureHook(children, arg1) {
      return closure_1_14(require("Text/Text").Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
    }
  });
  const items6 = [obj16, , ];
  const obj18 = {
    icon() {
      return closure_1_14(require("LightbulbIcon").LightbulbIcon, { color: onClose(navigation[8]).unsafe_rawColors.YELLOW_300 });
    },
    header: null,
    body: null
  };
  const intl7 = require("util").intl;
  obj18.header = intl7.string(require("util").t["0rJl9y"]);
  const intl8 = require("util").intl;
  obj18.body = intl8.format(require("util").t.XsCNky, {
    infoHook() {
      return null;
    },
    featureHook(children, arg1) {
      return closure_1_14(require("Text/Text").Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
    }
  });
  items6[1] = obj18;
  const obj20 = {
    icon() {
      return closure_1_14(require("CircleInformationIcon").CircleInformationIcon, { color: onClose(navigation[8]).unsafe_rawColors.PLATFORM_PARTNER });
    },
    header: null,
    body: null
  };
  const intl9 = require("util").intl;
  obj20.header = intl9.string(require("util").t.W2kLJC);
  const intl10 = require("util").intl;
  obj20.body = intl10.string(require("util").t.hyNkHz);
  items6[2] = obj20;
  obj15.children = items6.map((item, index) => {
    const merged = Object.assign(item);
    return closure_1_14(FeatureCard, {}, index);
  });
  items5[5] = closure_14(stateFromStores1, obj15);
  obj7.children = items5;
  const items7 = [closure_15(closure_6, obj7), closure_14(require("NavScrim").NavScrim, {})];
  obj6.children = items7;
  return closure_15(closure_16, obj6);
};