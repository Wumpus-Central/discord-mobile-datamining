// discord_app/modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx
import combined from "combined";
import get_ActivityIndicator from "module_9084";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleFormInit from "handleFormInit";
import ME from "ME";
import jsxProd from "module_16836";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";

let c10;
let c4;
let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
let map1;
let unpackModuleId;
const require = arg1;
function FeatureCard(arg0) {
  let body;
  let header;
  let icon;
  ({ icon, header, body } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.featureCard, children: null };
  obj = { style: tmp.featureIcon, children: icon() };
  const items = [callback(closure_4, obj), ];
  obj = { style: tmp.featureDescription, children: null };
  const items1 = [callback(Text.Heading, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: header }), callback(Text.Text, { variant: "text-sm/medium", color: "text-default", children: body })];
  obj[1] = items1;
  items[1] = callback2(closure_4, obj);
  obj[1] = items;
  return callback2(closure_4, obj);
}
({ View: c4, Image: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ HelpdeskArticles: c10, GuildFeatures: unpackModuleId, GuildSettingsSections: closure_12, Permissions: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
createCacheKey = { container: { height: "100%" }, contentPadding: { padding: 16 }, header: { textAlign: "center", marginBottom: 8 }, body: { textAlign: "center", marginBottom: 24 }, details: { textAlign: "center", marginTop: 24 }, headerImage: { width: "100%" }, features: { marginTop: 32, marginBottom: 32 }, featureCard: null, featureIcon: null, featureDescription: null };
createCacheKey = { backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, flex: 1, flexDirection: "row", padding: 16, borderRadius: require("Themes").radii.sm, marginTop: 8, alignItems: "flex-start" };
createCacheKey[7] = createCacheKey;
createCacheKey[8] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, borderRadius: 40, marginRight: 16, padding: 8 };
createCacheKey[9] = { overflow: "hidden", flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, borderRadius: 40, marginRight: 16, padding: 8 };
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx");

export default function GuildSettingsModalCommunityIntro(contentContainerStyle) {
  let onClose;
  let require;
  ({ guildId: require, onClose } = contentContainerStyle);
  let navigation;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let tmp = createCacheKey();
  let obj = require(navigation[14]);
  navigation = obj.useNavigation();
  let obj1 = require(navigation[15]);
  const items = [createGuildRecordFromRust];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_7.getGuild(closure_0));
  let obj2 = require(navigation[15]);
  const items1 = [getUncachedChannelPermissions];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = outer1_8.can(outer1_13.ADMINISTRATOR, tmp);
    }
    return canResult;
  });
  let obj3 = require(navigation[15]);
  const items2 = [handleFormInit];
  stateFromStores2 = obj3.useStateFromStores(items2, () => submitting.isSubmitting());
  const items3 = [stateFromStores, stateFromStores2, navigation, onClose];
  const effect = stateFromStores.useEffect(() => {
    let tmp = !stateFromStores2;
    if (!stateFromStores2) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        hasItem = features.has(outer1_11.COMMUNITY);
      }
      tmp = hasItem;
    }
    if (tmp) {
      let obj = onClose(navigation[16]);
      obj.wait(() => callback(table[17]).setSection(constants.COMMUNITY));
      obj = { onClose: null };
      obj[0] = onClose;
      const replaced = navigation.replace(outer1_12.COMMUNITY, obj);
    }
  }, items3);
  let obj4 = require(navigation[18]);
  obj = { children: null };
  obj = { style: tmp.container, contentContainerStyle: items4, children: null };
  items4 = [tmp.contentPadding, contentContainerStyle.contentContainerStyle];
  obj1 = { resizeMode: "contain", source: obj4.useIntroHeaderSource(), style: tmp.headerImage };
  const items5 = [callback(stateFromStores2, obj1), , , , , ];
  obj2 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require(navigation[10]).intl;
  obj2[3] = intl.string(require(navigation[10]).t["M/gBcA"]);
  items5[1] = callback(require(navigation[11]).Heading, obj2);
  obj3 = { style: tmp.body, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = require(navigation[10]).intl;
  obj4 = { helpdeskArticle: null };
  let obj11 = onClose(navigation[19]);
  obj4[0] = obj11.getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES);
  obj3[3] = intl2.format(require(navigation[10]).t["52EgsM"], obj4);
  items5[2] = callback(require(navigation[11]).Text, obj3);
  const obj5 = { text: null, onPress: null, disabled: null };
  const intl3 = require(navigation[10]).intl;
  obj5[0] = intl3.string(require(navigation[10]).t.LhlgY9);
  obj5[1] = function onPress() {
    if (stateFromStores1) {
      onClose(navigation[21]).open();
      const obj2 = onClose(navigation[21]);
    } else {
      outer1_0(navigation[22]).communityAdminOnly();
      const obj = outer1_0(navigation[22]);
    }
  };
  obj5[2] = !stateFromStores1;
  items5[3] = callback(require(navigation[20]).Button, obj5);
  const obj6 = { style: tmp.details, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = require(navigation[10]).intl;
  obj6[3] = intl4.string(require(navigation[10]).t.HgTI2N);
  items5[4] = callback(require(navigation[11]).Text, obj6);
  const obj7 = { style: tmp.features, children: null };
  const obj8 = {
    icon() {
      const obj = { color: null };
      obj[0] = onClose(navigation[8]).unsafe_rawColors.GREEN_360;
      return callback2(callback(navigation[9]).AnalyticsIcon, obj);
    },
    header: null,
    body: null
  };
  const intl5 = require(navigation[10]).intl;
  obj8[1] = intl5.string(require(navigation[10]).t.oVQF2y);
  const intl6 = require(navigation[10]).intl;
  obj8[2] = intl6.format(require(navigation[10]).t.A6G7ak, {
    featureHook(children) {
      return callback2(callback(navigation[11]).Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
    }
  });
  const items6 = [obj8, , ];
  const obj10 = {
    icon() {
      const obj = { color: null };
      obj[0] = onClose(navigation[8]).unsafe_rawColors.YELLOW_300;
      return callback2(callback(navigation[12]).LightbulbIcon, obj);
    },
    header: null,
    body: null
  };
  const intl7 = require(navigation[10]).intl;
  obj10[1] = intl7.string(require(navigation[10]).t["0rJl9y"]);
  const intl8 = require(navigation[10]).intl;
  obj11 = {
    infoHook() {
      return null;
    },
    featureHook(children) {
      return callback2(callback(navigation[11]).Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
    }
  };
  obj10[2] = intl8.format(require(navigation[10]).t.XsCNky, obj11);
  items6[1] = obj10;
  const obj12 = {
    icon() {
      const obj = { color: null };
      obj[0] = onClose(navigation[8]).unsafe_rawColors.PLATFORM_PARTNER;
      return callback2(callback(navigation[13]).CircleInformationIcon, obj);
    },
    header: null,
    body: null
  };
  const intl9 = require(navigation[10]).intl;
  obj12[1] = intl9.string(require(navigation[10]).t.W2kLJC);
  const intl10 = require(navigation[10]).intl;
  obj12[2] = intl10.string(require(navigation[10]).t.hyNkHz);
  items6[2] = obj12;
  obj7[1] = items6.map((arg0, arg1) => {
    const merged = Object.assign(arg0);
    return callback2(closure_18, {}, arg1);
  });
  items5[5] = callback(stateFromStores1, obj7);
  obj[2] = items5;
  const items7 = [callback2(closure_6, obj), callback(require(navigation[23]).NavScrim, {})];
  obj[0] = items7;
  return callback2(closure_16, obj);
};