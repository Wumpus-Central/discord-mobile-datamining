// === Module 19765: GuildSettingsModalCommunityIntro ===

// Module 19765 (GuildSettingsModalCommunityIntro)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9055 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 19770 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9056 */;

const require = globalThis.__r;

require = fn;
function FeatureCard(arg0) {
  ({ icon, header, body } = arg0);
  const tmp = closure_16();
  const obj = { style: tmp.featureCard, children: null };
  const items = [map1(React4, { style: tmp.featureIcon, children: icon() }), ];
  const obj3 = { style: tmp.featureDescription, children: null };
  const items1 = [map1(Text_Text.Heading, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: header }), map1(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: body })];
  obj3.children = items1;
  items[1] = closure_1_14(React4, obj3);
  obj.children = items;
  return closure_1_14(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1072);
({ HelpdeskArticles: closure_9, GuildFeatures: c10, GuildSettingsSections: closure_11, Permissions: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { height: "100%" }, contentPadding: { padding: 16 }, header: { textAlign: "center", marginBottom: 8 }, body: { textAlign: "center", marginBottom: 24 }, details: { textAlign: "center", marginTop: 24 }, headerImage: { width: "100%" }, features: { marginTop: 32, marginBottom: 32 }, featureCard: { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, flex: 1, flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.sm, marginTop: 8, alignItems: "flex-start" }, featureIcon: null, featureDescription: null };
let obj3 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, flex: 1, flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.sm, marginTop: 8, alignItems: "flex-start" };
obj2.featureIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 40, marginRight: 16, padding: 8 };
obj2.featureDescription = { overflow: "hidden", flex: 1 };
let closure_16 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx");

export default function GuildSettingsModalCommunityIntro(contentContainerStyle) {
  ({ guildId: require, onClose } = contentContainerStyle);
  let navigation;
  let tmp = closure_16();
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
      GuildSettingsActionCreatorsDefault.setSection(constants3.COMMUNITY);
      const obj2 = { onClose };
      const replaced = navigation.replace(constants3.COMMUNITY, obj2);
    }
  }, items3);
  const obj4 = require("initialize");
  const obj6 = { children: null };
  const obj7 = { style: tmp.container, contentContainerStyle: null, children: null };
  const items4 = [tmp.contentPadding, contentContainerStyle.contentContainerStyle];
  obj7.contentContainerStyle = items4;
  const introHeaderSource = require("IntroHeader").useIntroHeaderSource();
  const items5 = [closure_13(onClose(navigation[18]), { resizeMode: "contain", source: introHeaderSource, style: tmp.headerImage }), , , , , ];
  const obj9 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj9.children = intl.string(require("util").t["M/gBcA"]);
  items5[1] = closure_13(require("Text/Text").Heading, obj9);
  const obj10 = { style: tmp.body, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  const obj11 = { helpdeskArticle: null };
  const obj5 = require("IntroHeader");
  const obj8 = { resizeMode: "contain", source: introHeaderSource, style: tmp.headerImage };
  obj11.helpdeskArticle = onClose(navigation[19]).getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES);
  obj10.children = intl2.format(require("util").t["52EgsM"], obj11);
  items5[2] = closure_13(require("Text/Text").Text, obj10);
  const obj13 = { text: null, onPress: null, disabled: null };
  const intl3 = require("util").intl;
  obj13.text = intl3.string(require("util").t.LhlgY9);
  obj13.onPress = function handlePress() {
    if (stateFromStores1) {
      EnableCommunityModalActionCreatorsDefault.open();
    } else {
      ToastUtils.communityAdminOnly();
    }
  };
  obj13.disabled = !stateFromStores1;
  items5[3] = closure_13(require("components/Button/Button").Button, obj13);
  const obj14 = { style: tmp.details, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = require("util").intl;
  obj14.children = intl4.string(require("util").t.HgTI2N);
  items5[4] = closure_13(require("Text/Text").Text, obj14);
  const obj15 = { style: tmp.features, children: null };
  const obj16 = {
    icon() {
      return closure_1_13(require("AnalyticsIcon").AnalyticsIcon, { color: onClose(navigation[8]).unsafe_rawColors.GREEN_360 });
    },
    header: null,
    body: null
  };
  const intl5 = require("util").intl;
  obj16.header = intl5.string(require("util").t.oVQF2y);
  const intl6 = require("util").intl;
  obj16.body = intl6.format(require("util").t.A6G7ak, {
    featureHook(children, arg1) {
      return closure_1_13(require("Text/Text").Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
    }
  });
  const items6 = [obj16, , ];
  const obj18 = {
    icon() {
      return closure_1_13(require("LightbulbIcon").LightbulbIcon, { color: onClose(navigation[8]).unsafe_rawColors.YELLOW_300 });
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
      return closure_1_13(require("Text/Text").Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
    }
  });
  items6[1] = obj18;
  const obj20 = {
    icon() {
      return closure_1_13(require("CircleInformationIcon").CircleInformationIcon, { color: onClose(navigation[8]).unsafe_rawColors.PLATFORM_PARTNER });
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
    return closure_1_13(FeatureCard, {}, index);
  });
  items5[5] = closure_13(stateFromStores1, obj15);
  obj7.children = items5;
  const items7 = [closure_14(stateFromStores2, obj7), closure_13(require("NavScrim").NavScrim, {})];
  obj6.children = items7;
  return closure_14(closure_15, obj6);
};