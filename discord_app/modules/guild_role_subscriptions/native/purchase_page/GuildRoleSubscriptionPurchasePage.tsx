// === Module 18890: GuildRoleSubscriptionPurchasePage ===

// Module 18890 (GuildRoleSubscriptionPurchasePage)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5761 */;
import LinkingDefault from "Linking" /* 5843 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8744 */;
import _modDef12108 from "module_12108" /* 12108 */;
import GuildRoleSubscriptionPurchasePreviewCardDefault from "GuildRoleSubscriptionPurchasePreviewCard" /* 18900 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import GuildStore from "GuildStore" /* 5012 */;

const require = globalThis.__r;

require = fn;
function Separator() {
  return gesture(timestampProducer, { style: closure_17().separator });
}
function LegalDisclaimer() {
  const obj = { variant: "body-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.FSPTDI, { termsURL: constants3.TERMS, paidURL: constants3.PAID_TERMS });
  return gesture(Text_Text.Text, obj);
}
function SocialBadge(onPress) {
  onPress = onPress.onPress;
  ({ iconSource, text } = onPress);
  const tmp = closure_17();
  let tmp5Result = null != onPress;
  const obj = { style: tmp.socialBadge, activeOpacity: null, onPress: null, children: null };
  let num = 1;
  if (tmp5Result) {
    num = 0.5;
  }
  obj.activeOpacity = num;
  obj.onPress = onPress;
  items = [gesture(native.Icon, { source: iconSource, style: tmp.socialBadgeIcon, resizeMode: "contain", disableColor: true }), gesture(Text_Text.Text, { variant: "body-sm/medium", color: "text-default", children: text }), ];
  if (tmp5Result) {
    const obj3 = { source: _modDef12108, style: tmp.socialBadgeArrow };
    tmp5Result = gesture(native.Icon, obj3);
  }
  items[2] = tmp5Result;
  obj.children = items;
  return closure_1_15(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, TouchableOpacity: hasOwnProperty, View: closure_6, ScrollView: metroImportDefault } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticsLocations: closure_11, GuildFeatures: closure_12, MarketingURLs: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(5141);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, heroImage: { aspectRatio: 4, width: "100%" }, guildIconContainer: null, guildIcon: null, contentCard: null, loadingContainer: null, socialBadge: null, socialBadgeIcon: null, socialBadgeArrow: null, separator: null, moneyBirbPlaceholder: null, gatedChannel: null, gatedChannelIcon: null };
const rect = { borderWidth: 3, borderRadius: nativeDefault.radii.md, alignSelf: "flex-start", top: -35, left: 16, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute" };
obj2.guildIconContainer = rect;
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.guildIcon = { borderRadius: nativeDefault.radii.sm };
let obj4 = { borderRadius: nativeDefault.radii.sm };
obj2.contentCard = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 47, paddingHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md, marginTop: -15 };
obj2.loadingContainer = { flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 40 };
let obj5 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 47, paddingHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md, marginTop: -15 };
obj2.socialBadge = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl, paddingVertical: 4, paddingHorizontal: 8, alignItems: "center" };
obj2.socialBadgeIcon = { height: 24, marginRight: 6 };
let obj6 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl, paddingVertical: 4, paddingHorizontal: 8, alignItems: "center" };
obj2.socialBadgeArrow = { height: 24, marginLeft: 6, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 24 };
obj2.separator = size;
obj2.moneyBirbPlaceholder = { marginVertical: 64, alignSelf: "center", backgroundColor: "transparent" };
obj2.gatedChannel = { flexDirection: "row", alignItems: "center", marginBottom: -4 };
let obj7 = { height: 24, marginLeft: 6, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.gatedChannelIcon = { tintColor: nativeDefault.colors.TEXT_DEFAULT, marginHorizontal: 3 };
let closure_17 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx");

export default function GuildRoleSubscriptionPurchasePage(guildId) {
  guildId = guildId.guildId;
  const gatedChannelId = guildId.gatedChannelId;
  let stateFromStores1;
  let children;
  let store_page_trailer_url;
  const tmp = closure_17();
  importAll = tmp;
  gatedChannelId(stateFromStores1[13])({ forceRestore: true });
  const first = guildId(stateFromStores1[14]).useGroupListingsForGuild(guildId)[0];
  let obj = guildId(stateFromStores1[14]);
  const groupListingsFetchContext = guildId(stateFromStores1[15]).useGroupListingsFetchContext();
  let obj2 = guildId(stateFromStores1[15]);
  const subscriptionsSettings = guildId(stateFromStores1[14]).useSubscriptionsSettings(guildId);
  const obj3 = guildId(stateFromStores1[14]);
  items = [GuildStore];
  const stateFromStores = guildId(stateFromStores1[16]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const obj4 = guildId(stateFromStores1[16]);
  let id;
  if (first != null) {
    id = first.id;
  }
  const subscriptionListingsForGroup = guildId(stateFromStores1[14]).useSubscriptionListingsForGroup(id, { includeUnpublished: false });
  const mapped = subscriptionListingsForGroup.map((id) => id.id);
  if (null != gatedChannelId) {
    let ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTIONS_TAB;
  }
  const obj6 = { guildId, groupListingId: null, location: null, relevantSubscriptionListingIds: null };
  let id1;
  const obj5 = guildId(stateFromStores1[14]);
  if (first != null) {
    id1 = first.id;
  }
  obj6.groupListingId = id1;
  obj6.location = ROLE_SUBSCRIPTIONS_TAB;
  obj6.relevantSubscriptionListingIds = mapped;
  gatedChannelId(stateFromStores1[17])(obj6);
  const tmp2Result = gatedChannelId(stateFromStores1[17]);
  const items1 = [ChannelStore];
  const items2 = [gatedChannelId];
  stateFromStores1 = guildId(stateFromStores1[16]).useStateFromStores(items1, () => ChannelStore.getChannel(gatedChannelId), items2);
  children = tmp2(tmp3[18])(stateFromStores1);
  guildId(stateFromStores1[16]);
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
              const intl2 = tmp5(tmp3[10]).intl;
              const obj7 = {
                unlockHook() {
                              const obj = { style: closure_2.gatedChannel, children: null };
                              const obj2 = { size: native.Icon.Sizes.SMALL_20, style: closure_2.gatedChannelIcon, source: utils_ChannelUtils.getChannelIcon(stateFromStores1) };
                              items = [gesture(native.Icon, obj2), gesture(Text_Text.Text, { variant: "body-xs/semibold", color: "text-default", children })];
                              obj.children = items;
                              return closure_2_15(timestampProducer, obj);
                            }
              };
              let formatResult = intl2.format(tmp5(tmp3[10]).t.A1L1hU, obj7);
            }
            const obj8 = { style: tmp.container, scrollIndicatorInsets: { right: 1 }, children: null };
            const obj9 = { source: coverImageURI, style: tmp.heroImage };
            const items3 = [closure_14(tmp2(tmp3[23]), obj9), , ];
            const obj10 = { style: tmp.contentCard, children: null };
            const obj11 = { style: tmp.guildIconContainer, children: null };
            const obj12 = { size: tmp5(tmp3[24]).GuildIconSizes.XLARGE, guild: stateFromStores, style: tmp.guildIcon };
            obj11.children = closure_14(tmp2(tmp3[24]), obj12);
            const items4 = [closure_14(closure_6, obj11), , , , , , , , , , ];
            const obj13 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
            const intl3 = tmp5(tmp3[10]).intl;
            const obj14 = { serverName: stateFromStores.name };
            obj13.children = intl3.format(tmp5(tmp3[10]).t.mqCkpl, obj14);
            items4[1] = closure_14(tmp5(tmp3[9]).Text, obj13);
            items4[2] = closure_14(tmp5(tmp3[11]).Spacer, { size: 8 });
            const obj15 = { variant: "body-sm/normal", color: "text-default", lineClamp: 3, children: subscriptionsSettings.description };
            items4[3] = closure_14(tmp5(tmp3[25]).TruncatedText, obj15);
            let tmp20Result = hasItem;
            if (!hasItem) {
              tmp20Result = null != store_page_trailer_url;
            }
            if (tmp20Result) {
              const items5 = [closure_14(tmp5(tmp3[11]).Spacer, { size: 24 }), ];
              if (hasItem) {
                const obj16 = { iconSource: tmp2(tmp3[27]), text: null };
                const intl4 = tmp5(tmp3[10]).intl;
                obj16.text = intl4.string(tmp5(tmp3[10]).t["2MhjUV"]);
                hasItem = closure_14(SocialBadge, obj16);
              }
              const items6 = [hasItem, ];
              let tmp22Result = null != store_page_trailer_url;
              if (tmp22Result) {
                const obj17 = { iconSource: tmp2(tmp3[28]), text: null, onPress: null };
                const intl5 = tmp5(tmp3[10]).intl;
                obj17.text = intl5.string(tmp5(tmp3[10]).t["4PGeGA"]);
                obj17.onPress = function onPress() {
                  return LinkingDefault.openURL(store_page_trailer_url);
                };
                tmp22Result = closure_14(SocialBadge, obj17);
              }
              const obj18 = { children: null };
              const obj19 = { direction: "horizontal", spacing: 8, children: null };
              items6[1] = tmp22Result;
              obj19.children = items6;
              items5[1] = closure_15(tmp5(tmp3[26]).Stack, obj19);
              obj18.children = items5;
              tmp20Result = closure_15(closure_16, obj18);
            }
            items4[4] = tmp20Result;
            items4[5] = closure_14(tmp5(tmp3[11]).Spacer, { size: 16 });
            items4[6] = closure_14(LegalDisclaimer, {});
            items4[7] = closure_14(Separator, {});
            const obj20 = { variant: "body-sm/medium", color: "text-muted", children: formatResult };
            items4[8] = closure_14(tmp5(tmp3[9]).Text, obj20);
            items4[9] = closure_14(tmp5(tmp3[11]).Spacer, { size: 24 });
            const obj21 = { spacing: 16, children: mapped.map((listingId) => gesture(GuildRoleSubscriptionPurchasePreviewCardDefault, { listingId, guildId }, listingId)) };
            items4[10] = closure_14(tmp5(tmp3[26]).Stack, obj21);
            obj10.children = items4;
            items3[1] = closure_15(closure_6, obj10);
            const obj22 = { source: tmp18, style: tmp.moneyBirbPlaceholder };
            items3[2] = closure_14(tmp2(tmp3[23]), obj22);
            obj8.children = items3;
            return closure_15(closure_7, obj8);
          }
          const intl = tmp5(tmp3[10]).intl;
          formatResult = intl.string(tmp5(tmp3[10]).t["mPHb1/"]);
          const obj25 = require("GuildRoleSubscriptionSettingsUtils");
        }
      }
    }
  }
  const tmp5Result = guildId(stateFromStores1[16]);
  return closure_14(closure_6, { style: tmp.loadingContainer, children: closure_14(children, { size: "large" }) });
};