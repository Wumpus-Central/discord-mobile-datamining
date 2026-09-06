// discord_app/modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import EnableCommunityModalActionCreatorsDefault from "../../../public_guilds/native/EnableCommunityModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import GuildSettingsStore from "../../GuildSettingsStore.tsx";

require = fn;
function FeatureCard(arg0) {
  ({ icon, header, body } = arg0);
  const tmp = closure_17();
  let obj = { style: tmp.featureCard, children: null };
  obj = { style: tmp.featureIcon, children: icon() };
  const items = [closure_1_14(React4, obj)];
  obj = { style: tmp.featureDescription, children: null };
  const items1 = [
    closure_1_14(Text_Text.Heading, {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: header,
    }),
    closure_1_14(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: body }),
  ];
  obj.children = items1;
  items[1] = __initData(React4, obj);
  obj.children = items;
  return __initData(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({
  HelpdeskArticles: c10,
  GuildFeatures: closure_11,
  GuildSettingsSections: closure_12,
  Permissions: map1,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
fn(4560);
let createStyles = {
  container: { height: "100%" },
  contentPadding: { padding: 16 },
  header: { textAlign: "center", marginBottom: 8 },
  body: { textAlign: "center", marginBottom: 24 },
  details: { textAlign: "center", marginTop: 24 },
  headerImage: { width: "100%" },
  features: { marginTop: 32, marginBottom: 32 },
  featureCard: null,
  featureIcon: null,
  featureDescription: null,
};
createStyles = {
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  flex: 1,
  flexDirection: "row",
  padding: 16,
  borderRadius: nativeDefault.radii.sm,
  marginTop: 8,
  alignItems: "flex-start",
};
createStyles.featureCard = createStyles;
createStyles.featureIcon = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: 40,
  marginRight: 16,
  padding: 8,
};
createStyles.featureDescription = { overflow: "hidden", flex: 1 };
let closure_17 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx",
);

export default function GuildSettingsModalCommunityIntro(contentContainerStyle) {
  ({ guildId: require, onClose } = contentContainerStyle);
  let navigation;
  let tmp = closure_17();
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj1 = require("initialize");
  const items = [GuildStore];
  const stateFromStores = obj1.useStateFromStores(items, () => GuildStore.getGuild(require));
  let obj2 = require("initialize");
  const items1 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = PermissionStore.can(constants4.ADMINISTRATOR, tmp);
    }
    return canResult;
  });
  let obj3 = require("initialize");
  const items2 = [GuildSettingsStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => submitting.isSubmitting());
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
      let obj = DispatcherDefault;
      obj.wait(() => onClose(navigation[17]).setSection(constants.COMMUNITY));
      obj = { onClose };
      const replaced = navigation.replace(constants3.COMMUNITY, obj);
    }
  }, items3);
  let obj4 = require("IntroHeader");
  obj = { children: null };
  obj = { style: tmp.container, contentContainerStyle: null, children: null };
  const items4 = [tmp.contentPadding, contentContainerStyle.contentContainerStyle];
  obj.contentContainerStyle = items4;
  obj1 = { resizeMode: "contain", source: obj4.useIntroHeaderSource(), style: tmp.headerImage };
  const items5 = [closure_14(stateFromStores2, obj1), , , , ,];
  obj2 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj2.children = intl.string(require("util").t["M/gBcA"]);
  items5[1] = closure_14(require("Text/Text").Heading, obj2);
  obj3 = { style: tmp.body, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj4 = { helpdeskArticle: null };
  let obj11 = onClose(navigation[19]);
  obj4.helpdeskArticle = obj11.getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES);
  obj3.children = intl2.format(require("util").t["52EgsM"], obj4);
  items5[2] = closure_14(require("Text/Text").Text, obj3);
  const obj5 = { text: null, onPress: null, disabled: null };
  const intl3 = require("util").intl;
  obj5.text = intl3.string(require("util").t.LhlgY9);
  obj5.onPress = function onPress() {
    if (stateFromStores1) {
      EnableCommunityModalActionCreatorsDefault.open();
    } else {
      ToastUtils.communityAdminOnly();
    }
  };
  obj5.disabled = !stateFromStores1;
  items5[3] = closure_14(require("components/Button/Button").Button, obj5);
  const obj6 = { style: tmp.details, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = require("util").intl;
  obj6.children = intl4.string(require("util").t.HgTI2N);
  items5[4] = closure_14(require("Text/Text").Text, obj6);
  const obj7 = { style: tmp.features, children: null };
  const obj8 = {
    icon() {
      return closure_1_14(require("AnalyticsIcon").AnalyticsIcon, {
        color: onClose(navigation[8]).unsafe_rawColors.GREEN_360,
      });
    },
    header: null,
    body: null,
  };
  const intl5 = require("util").intl;
  obj8.header = intl5.string(require("util").t.oVQF2y);
  const intl6 = require("util").intl;
  obj8.body = intl6.format(require("util").t.A6G7ak, {
    featureHook(children, arg1) {
      return closure_1_14(
        require("Text/Text").Text,
        { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children },
        arg1,
      );
    },
  });
  const items6 = [obj8, ,];
  const obj10 = {
    icon() {
      return closure_1_14(require("LightbulbIcon").LightbulbIcon, {
        color: onClose(navigation[8]).unsafe_rawColors.YELLOW_300,
      });
    },
    header: null,
    body: null,
  };
  const intl7 = require("util").intl;
  obj10.header = intl7.string(require("util").t["0rJl9y"]);
  const intl8 = require("util").intl;
  obj11 = {
    infoHook() {
      return null;
    },
    featureHook(children, arg1) {
      return closure_1_14(
        require("Text/Text").Text,
        { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children },
        arg1,
      );
    },
  };
  obj10.body = intl8.format(require("util").t.XsCNky, obj11);
  items6[1] = obj10;
  const obj12 = {
    icon() {
      return closure_1_14(require("CircleInformationIcon").CircleInformationIcon, {
        color: onClose(navigation[8]).unsafe_rawColors.PLATFORM_PARTNER,
      });
    },
    header: null,
    body: null,
  };
  const intl9 = require("util").intl;
  obj12.header = intl9.string(require("util").t.W2kLJC);
  const intl10 = require("util").intl;
  obj12.body = intl10.string(require("util").t.hyNkHz);
  items6[2] = obj12;
  obj7.children = items6.map((item, index) => {
    const merged = Object.assign(item);
    return closure_1_14(FeatureCard, {}, index);
  });
  items5[5] = closure_14(stateFromStores1, obj7);
  obj.children = items5;
  const items7 = [closure_15(closure_6, obj), closure_14(require("NavScrim").NavScrim, {})];
  obj.children = items7;
  return closure_15(closure_16, obj);
}
