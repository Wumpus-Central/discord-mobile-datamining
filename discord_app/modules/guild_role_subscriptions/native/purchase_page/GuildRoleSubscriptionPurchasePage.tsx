// discord_app/modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx
import "registerAsset";
import get_ActivityIndicator from "useTrackRoleSubscriptionUpsellAnalytics";
import handleThemeChange from "handleThemeChange";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import ME from "ME";
import jsxProd from "getCoverImageURI";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/10875_registerAsset.js";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let c4;
let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
function Separator() {
  return callback(closure_6, { style: createCacheKey().separator });
}
function LegalDisclaimer() {
  let obj = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj = { termsURL: constants3.TERMS, paidURL: constants3.PAID_TERMS };
  obj[2] = intl.format(getSystemLocale.t.FSPTDI, obj);
  return callback(Text.Text, obj);
}
function SocialBadge(onPress) {
  let iconSource;
  let text;
  onPress = onPress.onPress;
  ({ iconSource, text } = onPress);
  const tmp = createCacheKey();
  let tmp5Result = null != onPress;
  let obj = { style: tmp.socialBadge, activeOpacity: null, onPress: null, children: null };
  let num = 1;
  if (tmp5Result) {
    num = 0.5;
  }
  obj[1] = num;
  obj[2] = onPress;
  obj = { source: iconSource, style: tmp.socialBadgeIcon, resizeMode: "contain", disableColor: true };
  const items = [callback(Button.Icon, obj), callback(Text.Text, { variant: "text-sm/medium", color: "text-default", children: text }), ];
  if (tmp5Result) {
    obj = { source: null, style: null };
    obj[0] = registerAsset;
    obj[1] = tmp.socialBadgeArrow;
    tmp5Result = callback(Button.Icon, obj);
  }
  items[2] = tmp5Result;
  obj[3] = items;
  return closure_15(closure_5, obj);
}
({ ActivityIndicator: c4, TouchableOpacity: c5, View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ AnalyticsLocations: unpackModuleId, GuildFeatures: closure_12, MarketingURLs: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
createCacheKey = { container: null, heroImage: null, guildIconContainer: null, guildIcon: null, contentCard: null, loadingContainer: null, socialContainer: null, socialBadge: null, socialBadgeIcon: null, socialBadgeArrow: null, separator: null, moneyBirbPlaceholder: null, gatedChannel: null, gatedChannelIcon: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { aspectRatio: 4, width: "100%" };
createCacheKey[2] = { borderWidth: 3, borderRadius: require("Themes").radii.md, alignSelf: "flex-start", top: -35, left: 16, borderColor: require("Themes").colors.BACKGROUND_BASE_LOW, position: "absolute" };
let obj1 = { borderWidth: 3, borderRadius: require("Themes").radii.md, alignSelf: "flex-start", top: -35, left: 16, borderColor: require("Themes").colors.BACKGROUND_BASE_LOW, position: "absolute" };
createCacheKey[3] = { borderRadius: require("Themes").radii.sm };
let obj2 = { borderRadius: require("Themes").radii.sm };
createCacheKey[4] = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, paddingTop: 47, paddingHorizontal: 16, borderTopLeftRadius: require("Themes").radii.md, borderTopRightRadius: require("Themes").radii.md, marginTop: -15 };
createCacheKey[5] = { flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 40 };
createCacheKey[6] = { flexDirection: "row" };
let obj3 = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, paddingTop: 47, paddingHorizontal: 16, borderTopLeftRadius: require("Themes").radii.md, borderTopRightRadius: require("Themes").radii.md, marginTop: -15 };
createCacheKey[7] = { flexDirection: "row", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderRadius: require("Themes").radii.xl, paddingVertical: 4, paddingHorizontal: 8, alignItems: "center" };
createCacheKey[8] = { height: 24, marginRight: 6 };
let obj4 = { flexDirection: "row", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderRadius: require("Themes").radii.xl, paddingVertical: 4, paddingHorizontal: 8, alignItems: "center" };
createCacheKey[9] = { height: 24, marginLeft: 6, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
let obj5 = { height: 24, marginLeft: 6, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[10] = { width: "100%", height: 1, backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 24 };
createCacheKey[11] = { marginVertical: 64, alignSelf: "center", backgroundColor: "transparent" };
createCacheKey[12] = { flexDirection: "row", alignItems: "center", marginBottom: -4 };
let obj6 = { width: "100%", height: 1, backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 24 };
createCacheKey[13] = { tintColor: require("Themes").colors.TEXT_DEFAULT };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj7 = { tintColor: require("Themes").colors.TEXT_DEFAULT };
const result = require("handleThemeChange").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx");

export default function GuildRoleSubscriptionPurchasePage(guildId) {
  guildId = guildId.guildId;
  const gatedChannelId = guildId.gatedChannelId;
  let importAll;
  let stateFromStores1;
  let closure_4;
  let store_page_trailer_url;
  const tmp = createCacheKey();
  importAll = tmp;
  gatedChannelId(stateFromStores1[13])({ forceRestore: true });
  let obj = guildId(stateFromStores1[14]);
  const first = obj.useGroupListingsForGuild(guildId)[0];
  let obj1 = guildId(stateFromStores1[15]);
  const groupListingsFetchContext = obj1.useGroupListingsFetchContext();
  let obj2 = guildId(stateFromStores1[14]);
  const subscriptionsSettings = obj2.useSubscriptionsSettings(guildId);
  let obj3 = guildId(stateFromStores1[16]);
  let items = [createGuildRecordFromRust];
  const stateFromStores = obj3.useStateFromStores(items, () => outer1_10.getGuild(guildId));
  let obj4 = guildId(stateFromStores1[14]);
  let id;
  if (first != null) {
    id = first.id;
  }
  const subscriptionListingsForGroup = obj4.useSubscriptionListingsForGroup(id, { includeUnpublished: false });
  const mapped = subscriptionListingsForGroup.map((id) => id.id);
  if (null != gatedChannelId) {
    let ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTIONS_TAB;
  }
  obj = { guildId, groupListingId: null, location: null, relevantSubscriptionListingIds: null };
  let id1;
  let tmp2Result = tmp2(tmp3[17]);
  if (first != null) {
    id1 = first.id;
  }
  obj[1] = id1;
  obj[2] = ROLE_SUBSCRIPTIONS_TAB;
  obj[3] = mapped;
  tmp2Result(obj);
  let tmp5Result = tmp5(tmp3[16]);
  const items1 = [ensureGuildLoaded];
  const items2 = [gatedChannelId];
  stateFromStores1 = tmp5Result.useStateFromStores(items1, () => outer1_9.getChannel(gatedChannelId), items2);
  closure_4 = tmp2(tmp3[18])(stateFromStores1);
  tmp5Result = tmp5(tmp3[16]);
  [][0] = handleThemeChange;
  if (groupListingsFetchContext) {
    if (null != subscriptionsSettings) {
      if (null != stateFromStores) {
        if (null != first) {
          const features = stateFromStores.features;
          const coverImageURI = importAll(tmp3[21]).getCoverImageURI(subscriptionsSettings);
          let hasItem = features.has(constants2.PARTNERED);
          store_page_trailer_url = subscriptionsSettings.store_page_trailer_url;
          if (null != gatedChannelId) {
            if (null != stateFromStores1) {
              const intl2 = tmp5(tmp3[10]).intl;
              obj = { unlockHook: null };
              obj[0] = function unlockHook() {
                let obj = { style: _undefined.gatedChannel, children: null };
                const items = [outer1_14(guildId(stateFromStores1[11]).Spacer, { size: 3 }), , , ];
                obj = { size: null, style: null, source: null };
                obj[0] = guildId(stateFromStores1[11]).Icon.Sizes.SMALL_20;
                obj[1] = _undefined.gatedChannelIcon;
                obj[2] = guildId(stateFromStores1[22]).getChannelIcon(stateFromStores1);
                items[1] = outer1_14(guildId(stateFromStores1[11]).Icon, obj);
                items[2] = outer1_14(guildId(stateFromStores1[11]).Spacer, { size: 3 });
                obj = { variant: "text-xs/semibold", color: "text-default", children: closure_4 };
                items[3] = outer1_14(guildId(stateFromStores1[9]).Text, obj);
                obj[1] = items;
                return outer1_15(outer1_6, obj);
              };
              let formatResult = intl2.format(tmp5(tmp3[10]).t.A1L1hU, obj);
            }
            obj1 = { style: null, scrollIndicatorInsets: null, children: null };
            obj1[0] = tmp.container;
            obj1[1] = { right: 1 };
            obj2 = { source: null, style: null };
            obj2[0] = coverImageURI;
            obj2[1] = tmp.heroImage;
            const items3 = [callback(tmp2(tmp3[23]), obj2), , ];
            obj3 = { style: null, children: null };
            obj3[0] = tmp.contentCard;
            obj4 = { style: null, children: null };
            obj4[0] = tmp.guildIconContainer;
            const obj5 = { size: null, guild: null, style: null };
            tmp2Result = tmp2(tmp3[24]);
            obj5[0] = tmp5(tmp3[24]).GuildIconSizes.XLARGE;
            obj5[1] = stateFromStores;
            obj5[2] = tmp.guildIcon;
            obj4[1] = callback(tmp2Result, obj5);
            const items4 = [callback(closure_6, obj4), , , , , , , , , , ];
            const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
            const intl3 = tmp5(tmp3[10]).intl;
            const obj7 = { serverName: null };
            obj7[0] = stateFromStores.name;
            obj6[2] = intl3.format(tmp5(tmp3[10]).t.mqCkpl, obj7);
            items4[1] = callback(tmp5(tmp3[9]).Text, obj6);
            items4[2] = callback(tmp5(tmp3[11]).Spacer, { size: 8 });
            const obj8 = { variant: "text-sm/normal", color: "text-default", lineClamp: 3, children: null };
            obj8[3] = subscriptionsSettings.description;
            items4[3] = callback(tmp5(tmp3[25]).TruncatedText, obj8);
            let tmp20Result = hasItem;
            if (!hasItem) {
              tmp20Result = null != store_page_trailer_url;
            }
            if (tmp20Result) {
              const items5 = [tmp22(tmp5(tmp3[11]).Spacer, { size: 24 }), ];
              const obj9 = { style: null, children: null };
              obj9[0] = tmp.socialContainer;
              if (hasItem) {
                const obj10 = { iconSource: null, text: null };
                obj10[0] = tmp2(tmp3[27]);
                const intl4 = tmp5(tmp3[10]).intl;
                obj10[1] = intl4.string(tmp5(tmp3[10]).t["2MhjUV"]);
                hasItem = tmp22(SocialBadge, obj10);
              }
              const items6 = [hasItem, ];
              let tmp22Result = null != store_page_trailer_url;
              if (tmp22Result) {
                const obj11 = { iconSource: null, text: null, onPress: null };
                obj11[0] = tmp2(tmp3[28]);
                const intl5 = tmp5(tmp3[10]).intl;
                obj11[1] = intl5.string(tmp5(tmp3[10]).t["4PGeGA"]);
                obj11[2] = function onPress() {
                  return gatedChannelId(stateFromStores1[29]).openURL(store_page_trailer_url);
                };
                tmp22Result = tmp22(SocialBadge, obj11);
              }
              const obj12 = { children: null };
              const obj13 = { gap: 8, children: null };
              items6[1] = tmp22Result;
              obj13[1] = items6;
              obj9[1] = tmp20(tmp5(tmp3[26]).GappedList, obj13);
              items5[1] = tmp22(tmp23, obj9);
              obj12[0] = items5;
              tmp20Result = tmp20(closure_16, obj12);
              const tmp26 = closure_16;
            }
            items4[4] = tmp20Result;
            items4[5] = callback(tmp5(tmp3[11]).Spacer, { size: 16 });
            items4[6] = callback(LegalDisclaimer, {});
            items4[7] = callback(Separator, {});
            const obj14 = { variant: "text-xs/semibold", color: "text-muted", style: null, children: null };
            obj14[2] = { textTransform: "uppercase" };
            obj14[3] = formatResult;
            items4[8] = callback(tmp5(tmp3[9]).Text, obj14);
            items4[9] = callback(tmp5(tmp3[11]).Spacer, { size: 24 });
            const obj15 = { gap: 16, children: null };
            obj15[1] = mapped.map((listingId) => outer1_14(gatedChannelId(stateFromStores1[30]), { listingId, guildId }, listingId));
            items4[10] = callback(tmp5(tmp3[26]).GappedList, obj15);
            obj3[1] = items4;
            items3[1] = closure_15(closure_6, obj3);
            const obj16 = { source: null, style: null };
            obj16[0] = tmp18;
            obj16[1] = tmp.moneyBirbPlaceholder;
            items3[2] = callback(tmp2(tmp3[23]), obj16);
            obj1[2] = items3;
            return closure_15(closure_7, obj1);
          }
          const intl = tmp5(tmp3[10]).intl;
          formatResult = intl.string(tmp5(tmp3[10]).t["mPHb1/"]);
          const obj26 = importAll(tmp3[21]);
        }
      }
    }
  }
  return callback(closure_6, { style: tmp.loadingContainer, children: callback(closure_4, { size: "large" }) });
};