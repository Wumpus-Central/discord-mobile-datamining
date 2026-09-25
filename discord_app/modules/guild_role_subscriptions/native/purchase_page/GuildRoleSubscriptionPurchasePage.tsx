// discord_app/modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import utils_ChannelUtils from "../../../../utils/native/ChannelUtils.tsx";
import _modDef9385 from "../../../../../_runtime/metro/09385__.js";
import GuildRoleSubscriptionPurchasePreviewCardDefault from "GuildRoleSubscriptionPurchasePreviewCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
function Separator() {
  return closure_1_14(timestampProducer, { style: closure_17().separator });
}
function LegalDisclaimer() {
  const obj = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.FSPTDI, { termsURL: constants3.TERMS, paidURL: constants3.PAID_TERMS });
  return closure_1_14(Text_Text.Text, obj);
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
  const items = [
    closure_1_14(native.Icon, {
      source: iconSource,
      style: tmp.socialBadgeIcon,
      resizeMode: "contain",
      disableColor: true,
    }),
    closure_1_14(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: text }),
  ];
  if (tmp5Result) {
    const obj3 = { source: _modDef9385, style: tmp.socialBadgeArrow };
    tmp5Result = closure_1_14(native.Icon, obj3);
  }
  items[2] = tmp5Result;
  obj.children = items;
  return __initData(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: closure_4,
  TouchableOpacity: hasOwnProperty,
  View: metroRequire,
  ScrollView: closure_7,
} = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticsLocations: closure_11, GuildFeatures: closure_12, MarketingURLs: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH },
  heroImage: { aspectRatio: 4, width: "100%" },
  guildIconContainer: null,
  guildIcon: null,
  contentCard: null,
  loadingContainer: null,
  socialContainer: null,
  socialBadge: null,
  socialBadgeIcon: null,
  socialBadgeArrow: null,
  separator: null,
  moneyBirbPlaceholder: null,
  gatedChannel: null,
  gatedChannelIcon: null,
};
const rect = {
  borderWidth: 3,
  borderRadius: nativeDefault.radii.md,
  alignSelf: "flex-start",
  top: -35,
  left: 16,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  position: "absolute",
};
obj2.guildIconContainer = rect;
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.guildIcon = { borderRadius: nativeDefault.radii.sm };
let obj4 = { borderRadius: nativeDefault.radii.sm };
obj2.contentCard = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  paddingTop: 47,
  paddingHorizontal: 16,
  borderTopLeftRadius: nativeDefault.radii.md,
  borderTopRightRadius: nativeDefault.radii.md,
  marginTop: -15,
};
obj2.loadingContainer = { flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 40 };
obj2.socialContainer = { flexDirection: "row" };
let obj5 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  paddingTop: 47,
  paddingHorizontal: 16,
  borderTopLeftRadius: nativeDefault.radii.md,
  borderTopRightRadius: nativeDefault.radii.md,
  marginTop: -15,
};
obj2.socialBadge = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.xl,
  paddingVertical: 4,
  paddingHorizontal: 8,
  alignItems: "center",
};
obj2.socialBadgeIcon = { height: 24, marginRight: 6 };
let obj6 = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.xl,
  paddingVertical: 4,
  paddingHorizontal: 8,
  alignItems: "center",
};
obj2.socialBadgeArrow = { height: 24, marginLeft: 6, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let size = {
  width: "100%",
  height: 1,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
  marginVertical: 24,
};
obj2.separator = size;
obj2.moneyBirbPlaceholder = { marginVertical: 64, alignSelf: "center", backgroundColor: "transparent" };
obj2.gatedChannel = { flexDirection: "row", alignItems: "center", marginBottom: -4 };
let obj7 = { height: 24, marginLeft: 6, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.gatedChannelIcon = { tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_17 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePage.tsx",
);

export default function GuildRoleSubscriptionPurchasePage(guildId) {
  guildId = guildId.guildId;
  const gatedChannelId = guildId.gatedChannelId;
  let stateFromStores1;
  let children;
  let store_page_trailer_url;
  const typeConsolidationEyebrow = guildId(stateFromStores1[13]).useTypeConsolidationEyebrow(
    "PurchasePage",
    "text-xs/semibold",
  );
  const tmp4 = closure_17();
  importAll = tmp4;
  gatedChannelId(stateFromStores1[14])({ forceRestore: true });
  let obj = guildId(stateFromStores1[13]);
  const first = guildId(stateFromStores1[15]).useGroupListingsForGuild(guildId)[0];
  let obj2 = guildId(stateFromStores1[15]);
  const groupListingsFetchContext = guildId(stateFromStores1[16]).useGroupListingsFetchContext();
  const obj3 = guildId(stateFromStores1[16]);
  const subscriptionsSettings = guildId(stateFromStores1[15]).useSubscriptionsSettings(guildId);
  const obj4 = guildId(stateFromStores1[15]);
  let items = [GuildStore];
  const stateFromStores = guildId(stateFromStores1[17]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const obj5 = guildId(stateFromStores1[17]);
  let id;
  if (first != null) {
    id = first.id;
  }
  const subscriptionListingsForGroup = guildId(stateFromStores1[15]).useSubscriptionListingsForGroup(id, {
    includeUnpublished: false,
  });
  const mapped = subscriptionListingsForGroup.map((id) => id.id);
  if (null != gatedChannelId) {
    let ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTIONS_TAB;
  }
  const obj7 = { guildId, groupListingId: null, location: null, relevantSubscriptionListingIds: null };
  let id1;
  const obj6 = guildId(stateFromStores1[15]);
  if (first != null) {
    id1 = first.id;
  }
  obj7.groupListingId = id1;
  obj7.location = ROLE_SUBSCRIPTIONS_TAB;
  obj7.relevantSubscriptionListingIds = mapped;
  gatedChannelId(stateFromStores1[18])(obj7);
  const tmp5Result = gatedChannelId(stateFromStores1[18]);
  const items1 = [ChannelStore];
  const items2 = [gatedChannelId];
  stateFromStores1 = guildId(stateFromStores1[17]).useStateFromStores(
    items1,
    () => ChannelStore.getChannel(gatedChannelId),
    items2,
  );
  children = tmp5(tmp2[19])(stateFromStores1);
  guildId(stateFromStores1[17]);
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
              const obj8 = {
                unlockHook() {
                  const obj = { style: closure_2.gatedChannel, children: null };
                  const items = [closure_2_14(native.Spacer, { size: 3 }), , ,];
                  const obj2 = {
                    size: native.Icon.Sizes.SMALL_20,
                    style: closure_2.gatedChannelIcon,
                    source: utils_ChannelUtils.getChannelIcon(stateFromStores1),
                  };
                  items[1] = closure_2_14(native.Icon, obj2);
                  items[2] = closure_2_14(native.Spacer, { size: 3 });
                  items[3] = closure_2_14(Text_Text.Text, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    children,
                  });
                  obj.children = items;
                  return __initData(timestampProducer, obj);
                },
              };
              let formatResult = intl2.format(tmp(tmp2[10]).t.A1L1hU, obj8);
            }
            const obj9 = { style: tmp4.container, scrollIndicatorInsets: { right: 1 }, children: null };
            const obj10 = { source: coverImageURI, style: tmp4.heroImage };
            const items3 = [closure_14(tmp5(tmp2[24]), obj10), ,];
            const obj11 = { style: tmp4.contentCard, children: null };
            const obj12 = { style: tmp4.guildIconContainer, children: null };
            const obj13 = { size: tmp(tmp2[25]).GuildIconSizes.XLARGE, guild: stateFromStores, style: tmp4.guildIcon };
            obj12.children = closure_14(tmp5(tmp2[25]), obj13);
            const items4 = [closure_14(closure_6, obj12), , , , , , , , , ,];
            const obj14 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
            const intl3 = tmp(tmp2[10]).intl;
            const obj15 = { serverName: stateFromStores.name };
            obj14.children = intl3.format(tmp(tmp2[10]).t.mqCkpl, obj15);
            items4[1] = closure_14(tmp(tmp2[9]).Text, obj14);
            items4[2] = closure_14(tmp(tmp2[11]).Spacer, { size: 8 });
            const obj16 = {
              variant: "text-sm/normal",
              color: "text-default",
              lineClamp: 3,
              children: subscriptionsSettings.description,
            };
            items4[3] = closure_14(tmp(tmp2[26]).TruncatedText, obj16);
            let tmp21Result = hasItem;
            if (!hasItem) {
              tmp21Result = null != store_page_trailer_url;
            }
            if (tmp21Result) {
              const items5 = [closure_14(tmp(tmp2[11]).Spacer, { size: 24 })];
              const obj17 = { style: tmp4.socialContainer, children: null };
              if (hasItem) {
                const obj18 = { iconSource: tmp5(tmp2[28]), text: null };
                const intl4 = tmp(tmp2[10]).intl;
                obj18.text = intl4.string(tmp(tmp2[10]).t["2MhjUV"]);
                hasItem = closure_14(SocialBadge, obj18);
              }
              const items6 = [hasItem];
              let tmp23Result = null != store_page_trailer_url;
              if (tmp23Result) {
                const obj19 = { iconSource: tmp5(tmp2[29]), text: null, onPress: null };
                const intl5 = tmp(tmp2[10]).intl;
                obj19.text = intl5.string(tmp(tmp2[10]).t["4PGeGA"]);
                obj19.onPress = function onPress() {
                  return LinkingDefault.openURL(store_page_trailer_url);
                };
                tmp23Result = closure_14(SocialBadge, obj19);
              }
              const obj20 = { children: null };
              const obj21 = { gap: 8, children: null };
              items6[1] = tmp23Result;
              obj21.children = items6;
              obj17.children = closure_15(tmp(tmp2[27]).GappedList, obj21);
              items5[1] = closure_14(closure_6, obj17);
              obj20.children = items5;
              tmp21Result = closure_15(closure_16, obj20);
            }
            items4[4] = tmp21Result;
            items4[5] = closure_14(tmp(tmp2[11]).Spacer, { size: 16 });
            items4[6] = closure_14(LegalDisclaimer, {});
            items4[7] = closure_14(Separator, {});
            const obj22 = {
              variant: typeConsolidationEyebrow.variant,
              color: "text-muted",
              style: null,
              children: null,
            };
            const items7 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
            obj22.style = items7;
            obj22.children = formatResult;
            items4[8] = closure_14(tmp(tmp2[9]).Text, obj22);
            items4[9] = closure_14(tmp(tmp2[11]).Spacer, { size: 24 });
            const obj23 = {
              gap: 16,
              children: mapped.map((listingId) =>
                closure_2_14(GuildRoleSubscriptionPurchasePreviewCardDefault, { listingId, guildId }, listingId),
              ),
            };
            items4[10] = closure_14(tmp(tmp2[27]).GappedList, obj23);
            obj11.children = items4;
            items3[1] = closure_15(closure_6, obj11);
            const obj24 = { source: tmp19, style: tmp4.moneyBirbPlaceholder };
            items3[2] = closure_14(tmp5(tmp2[24]), obj24);
            obj9.children = items3;
            return closure_15(closure_7, obj9);
          }
          const intl = tmp(tmp2[10]).intl;
          formatResult = intl.string(tmp(tmp2[10]).t["mPHb1/"]);
          const obj27 = require("GuildRoleSubscriptionSettingsUtils");
        }
      }
    }
  }
  const tmpResult = guildId(stateFromStores1[17]);
  return closure_14(closure_6, { style: tmp4.loadingContainer, children: closure_14(children, { size: "large" }) });
}
