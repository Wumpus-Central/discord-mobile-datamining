// === Module 16624: GuildRoleSubscriptionPurchasePage ===

// Module 16624 (GuildRoleSubscriptionPurchasePage)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import LinkingDefault from "Linking" /* 4299 */;
import Text_Text from "Text/Text" /* 4601 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5078 */;
import _modDef10009 from "module_10009" /* 10009 */;
import GuildRoleSubscriptionPurchasePreviewCardDefault from "GuildRoleSubscriptionPurchasePreviewCard" /* 16634 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
function Separator() {
  return closure_1_14(timestampProducer, { style: closure_17().separator });
}
function LegalDisclaimer() {
  let obj = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj = { termsURL: constants3.TERMS, paidURL: constants3.PAID_TERMS };
  obj.children = intl.format(util.t.FSPTDI, obj);
  return closure_1_14(Text_Text.Text, obj);
}
function SocialBadge(onPress) {
  onPress = onPress.onPress;
  ({ iconSource, text } = onPress);
  const tmp = closure_17();
  let tmp5Result = null != onPress;
  let obj = { style: tmp.socialBadge, activeOpacity: null, onPress: null, children: null };
  let num = 1;
  if (tmp5Result) {
    num = 0.5;
  }
  obj.activeOpacity = num;
  obj.onPress = onPress;
  obj = { source: iconSource, style: tmp.socialBadgeIcon, resizeMode: "contain", disableColor: true };
  const items = [closure_1_14(native.Icon, obj), closure_1_14(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: text }), ];
  if (tmp5Result) {
    obj = { source: _modDef10009, style: tmp.socialBadgeArrow };
    tmp5Result = closure_1_14(native.Icon, obj);
  }
  items[2] = tmp5Result;
  obj.children = items;
  return __initData(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, TouchableOpacity: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticsLocations: closure_11, GuildFeatures: closure_12, MarketingURLs: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
fn(4605);
let createStyles = { container: null, heroImage: null, guildIconContainer: null, guildIcon: null, contentCard: null, loadingContainer: null, socialContainer: null, socialBadge: null, socialBadgeIcon: null, socialBadgeArrow: null, separator: null, moneyBirbPlaceholder: null, gatedChannel: null, gatedChannelIcon: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.container = createStyles;
createStyles.heroImage = { aspectRatio: 4, width: "100%" };
const rect = { borderWidth: 3, borderRadius: nativeDefault.radii.md, alignSelf: "flex-start", top: -35, left: 16, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute" };
createStyles.guildIconContainer = rect;
createStyles.guildIcon = { borderRadius: nativeDefault.radii.sm };
let obj1 = { borderRadius: nativeDefault.radii.sm };
createStyles.contentCard = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 47, paddingHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md, marginTop: -15 };
createStyles.loadingContainer = { flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 40 };
createStyles.socialContainer = { flexDirection: "row" };
let obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 47, paddingHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md, marginTop: -15 };
createStyles.socialBadge = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl, paddingVertical: 4, paddingHorizontal: 8, alignItems: "center" };
createStyles.socialBadgeIcon = { height: 24, marginRight: 6 };
let obj3 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl, paddingVertical: 4, paddingHorizontal: 8, alignItems: "center" };
createStyles.socialBadgeArrow = { height: 24, marginLeft: 6, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 24 };
createStyles.separator = size;
createStyles.moneyBirbPlaceholder = { marginVertical: 64, alignSelf: "center", backgroundColor: "transparent" };
createStyles.gatedChannel = { flexDirection: "row", alignItems: "center", marginBottom: -4 };
let obj4 = { height: 24, marginLeft: 6, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.gatedChannelIcon = { tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_17 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx");

export default function GuildRoleSubscriptionPurchasePage(guildId) {
  guildId = guildId.guildId;
  const gatedChannelId = guildId.gatedChannelId;
  let stateFromStores1;
  let children;
  let store_page_trailer_url;
  let obj = guildId(stateFromStores1[13]);
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("PurchasePage", "text-xs/semibold");
  const tmp4 = closure_17();
  importAll = tmp4;
  gatedChannelId(stateFromStores1[14])({ forceRestore: true });
  let obj1 = guildId(stateFromStores1[15]);
  const first = obj1.useGroupListingsForGuild(guildId)[0];
  let obj2 = guildId(stateFromStores1[16]);
  const groupListingsFetchContext = obj2.useGroupListingsFetchContext();
  let obj3 = guildId(stateFromStores1[15]);
  const subscriptionsSettings = obj3.useSubscriptionsSettings(guildId);
  let obj4 = guildId(stateFromStores1[17]);
  let items = [GuildStore];
  const stateFromStores = obj4.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj5 = guildId(stateFromStores1[15]);
  let id;
  if (first != null) {
    id = first.id;
  }
  const subscriptionListingsForGroup = obj5.useSubscriptionListingsForGroup(id, { includeUnpublished: false });
  const mapped = subscriptionListingsForGroup.map((id) => id.id);
  if (null != gatedChannelId) {
    let ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTIONS_TAB;
  }
  obj = { guildId, groupListingId: null, location: null, relevantSubscriptionListingIds: null };
  let id1;
  let tmp5Result = tmp5(tmp2[18]);
  if (first != null) {
    id1 = first.id;
  }
  obj.groupListingId = id1;
  obj.location = ROLE_SUBSCRIPTIONS_TAB;
  obj.relevantSubscriptionListingIds = mapped;
  tmp5Result(obj);
  let tmpResult = tmp(tmp2[17]);
  const items1 = [ChannelStore];
  const items2 = [gatedChannelId];
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => ChannelStore.getChannel(gatedChannelId), items2);
  children = tmp5(tmp2[19])(stateFromStores1);
  tmpResult = tmp(tmp2[17]);
  [][0] = ThemeStore;
  if (groupListingsFetchContext) {
    if (null != subscriptionsSettings) {
      if (null != stateFromStores) {
        if (null != first) {
          const features = stateFromStores.features;
          const coverImageURI = require("GuildRoleSubscriptionSettingsUtils").getCoverImageURI(subscriptionsSettings);
          let hasItem = features.has(constants2.PARTNERED);
          store_page_trailer_url = subscriptionsSettings.store_page_trailer_url;
          if (null != gatedChannelId) {
            if (null != stateFromStores1) {
              const intl2 = tmp(tmp2[10]).intl;
              obj = {
                unlockHook() {
                              let obj = { style: closure_2.gatedChannel, children: null };
                              const items = [closure_2_14(native.Spacer, { size: 3 }), , , ];
                              obj = { size: native.Icon.Sizes.SMALL_20, style: closure_2.gatedChannelIcon, source: utils_ChannelUtils.getChannelIcon(stateFromStores1) };
                              items[1] = closure_2_14(native.Icon, obj);
                              items[2] = closure_2_14(native.Spacer, { size: 3 });
                              obj = { variant: "text-xs/semibold", color: "text-default", children };
                              items[3] = closure_2_14(Text_Text.Text, obj);
                              obj.children = items;
                              return __initData(timestampProducer, obj);
                            }
              };
              let formatResult = intl2.format(tmp(tmp2[10]).t.A1L1hU, obj);
            }
            obj1 = { style: tmp4.container, scrollIndicatorInsets: { right: 1 }, children: null };
            obj2 = { source: coverImageURI, style: tmp4.heroImage };
            const items3 = [closure_14(tmp5(tmp2[24]), obj2), , ];
            obj3 = { style: tmp4.contentCard, children: null };
            obj4 = { style: tmp4.guildIconContainer, children: null };
            obj5 = { size: null, guild: null, style: null };
            tmp5Result = tmp5(tmp2[25]);
            obj5.size = tmp(tmp2[25]).GuildIconSizes.XLARGE;
            obj5.guild = stateFromStores;
            obj5.style = tmp4.guildIcon;
            obj4.children = closure_14(tmp5Result, obj5);
            const items4 = [closure_14(closure_6, obj4), , , , , , , , , , ];
            const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
            const intl3 = tmp(tmp2[10]).intl;
            const obj7 = { serverName: stateFromStores.name };
            obj6.children = intl3.format(tmp(tmp2[10]).t.mqCkpl, obj7);
            items4[1] = closure_14(tmp(tmp2[9]).Text, obj6);
            items4[2] = closure_14(tmp(tmp2[11]).Spacer, { size: 8 });
            const obj8 = { variant: "text-sm/normal", color: "text-default", lineClamp: 3, children: subscriptionsSettings.description };
            items4[3] = closure_14(tmp(tmp2[26]).TruncatedText, obj8);
            let tmp21Result = hasItem;
            if (!hasItem) {
              tmp21Result = null != store_page_trailer_url;
            }
            if (tmp21Result) {
              const items5 = [closure_14(tmp(tmp2[11]).Spacer, { size: 24 }), ];
              const obj9 = { style: tmp4.socialContainer, children: null };
              if (hasItem) {
                const obj10 = { iconSource: tmp5(tmp2[28]), text: null };
                const intl4 = tmp(tmp2[10]).intl;
                obj10.text = intl4.string(tmp(tmp2[10]).t["2MhjUV"]);
                hasItem = closure_14(SocialBadge, obj10);
              }
              const items6 = [hasItem, ];
              let tmp23Result = null != store_page_trailer_url;
              if (tmp23Result) {
                const obj11 = { iconSource: tmp5(tmp2[29]), text: null, onPress: null };
                const intl5 = tmp(tmp2[10]).intl;
                obj11.text = intl5.string(tmp(tmp2[10]).t["4PGeGA"]);
                obj11.onPress = function onPress() {
                  return LinkingDefault.openURL(store_page_trailer_url);
                };
                tmp23Result = closure_14(SocialBadge, obj11);
              }
              const obj12 = { children: null };
              const obj13 = { gap: 8, children: null };
              items6[1] = tmp23Result;
              obj13.children = items6;
              obj9.children = closure_15(tmp(tmp2[27]).GappedList, obj13);
              items5[1] = closure_14(closure_6, obj9);
              obj12.children = items5;
              tmp21Result = closure_15(closure_16, obj12);
            }
            items4[4] = tmp21Result;
            items4[5] = closure_14(tmp(tmp2[11]).Spacer, { size: 16 });
            items4[6] = closure_14(LegalDisclaimer, {});
            items4[7] = closure_14(Separator, {});
            const obj14 = { variant: typeConsolidationEyebrow.variant, color: "text-muted", style: null, children: null };
            const items7 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
            obj14.style = items7;
            obj14.children = formatResult;
            items4[8] = closure_14(tmp(tmp2[9]).Text, obj14);
            items4[9] = closure_14(tmp(tmp2[11]).Spacer, { size: 24 });
            const obj15 = { gap: 16, children: mapped.map((listingId) => closure_2_14(GuildRoleSubscriptionPurchasePreviewCardDefault, { listingId, guildId }, listingId)) };
            items4[10] = closure_14(tmp(tmp2[27]).GappedList, obj15);
            obj3.children = items4;
            items3[1] = closure_15(closure_6, obj3);
            const obj16 = { source: tmp19, style: tmp4.moneyBirbPlaceholder };
            items3[2] = closure_14(tmp5(tmp2[24]), obj16);
            obj1.children = items3;
            return closure_15(closure_7, obj1);
          }
          const intl = tmp(tmp2[10]).intl;
          formatResult = intl.string(tmp(tmp2[10]).t["mPHb1/"]);
          const obj27 = require("GuildRoleSubscriptionSettingsUtils");
        }
      }
    }
  }
  return closure_14(closure_6, { style: tmp4.loadingContainer, children: closure_14(children, { size: "large" }) });
};