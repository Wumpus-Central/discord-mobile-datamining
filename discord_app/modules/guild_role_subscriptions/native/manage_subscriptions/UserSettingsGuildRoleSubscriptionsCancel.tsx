// === Module 17476: UserSettingsGuildRoleSubscriptionsCancel ===

// Module 17476 (UserSettingsGuildRoleSubscriptionsCancel)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import _modDef2166 from "module_2166" /* 2166 */;
import Text_Text from "Text/Text" /* 5781 */;
import FastImageDefault from "FastImage" /* 5872 */;
import GuildIconDefault from "GuildIcon" /* 7045 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 17464 */;
import FormSeparatorDefault from "FormSeparator" /* 17469 */;
import useManageSubscriptionCardDataDefault from "useManageSubscriptionCardData" /* 17473 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17477 */;
import _modDef17485 from "module_17485" /* 17485 */;
import FastAssetImageDefault from "FastAssetImage" /* 17486 */;
import GuildRoleSubscriptionCardAll from "GuildRoleSubscriptionCard" /* 17487 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;

require = fn;
function WhatYouLose(subscription) {
  ({ listingId, guild } = subscription);
  const tmp = closure_14();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj5 = _modDef2166(subscription.subscription.currentPeriodEnd);
  const intl = util.intl;
  const formatResult = _modDef2166(subscription.subscription.currentPeriodEnd).format(c12);
  const intl2 = util.intl;
  const formatResult1 = intl.format(util.t.EtAXzC, { subscriptionEndDate: _modDef2166(subscription.subscription.currentPeriodEnd).format(c12) });
  const obj7 = { style: tmp.container, children: null };
  const obj8 = { style: tmp.header, children: null };
  const obj6 = { numEmojis: _slicedToArray(obj.useTierEmojiIds(listingId, guild.id), 1)[0].size, numChannels: _slicedToArray(obj2.useChannelBenefits(listingId), 1)[0].length, numIntangibles: _slicedToArray(obj3.useIntangibleBenefits(listingId), 1)[0].length };
  items = [closure_1_10(GuildIconDefault, { guild }), closure_1_10(native.Spacer, { size: 16 }), ];
  const obj9 = { children: null };
  const items1 = [closure_1_10(Text_Text.Text, { variant: "body-md/semibold", color: "interactive-text-active", children: _slicedToArray(obj4.useName(listingId), 1)[0] }), closure_1_10(native.Spacer, { size: 2 }), closure_1_10(Text_Text.Text, { variant: "body-sm/medium", color: "interactive-text-default", children: guild.name })];
  obj9.children = items1;
  items[2] = closure_1_11(metroImportDefault, obj9);
  obj8.children = items;
  const items2 = [closure_1_11(metroImportDefault, obj8), closure_1_10(FormSeparatorDefault, { style: { marginVertical: 16 } }), , , , , ];
  const obj11 = { variant: "body-md/semibold", color: "interactive-text-active", children: null };
  const intl3 = util.intl;
  obj11.children = intl3.string(util.t["9SgXmT"]);
  items2[2] = closure_1_10(Text_Text.Text, obj11);
  items2[3] = closure_1_10(native.Spacer, { size: 12 });
  const obj12 = { variant: "body-sm/normal", color: "text-default", children: null };
  const items3 = [formatResult1, "\n"];
  obj12.children = items3;
  items2[4] = closure_1_11(Text_Text.Text, obj12);
  items2[5] = closure_1_10(Text_Text.Text, { variant: "body-sm/medium", color: "text-default", children: intl2.formatToPlainString(util.t.OVlNGT, { numEmojis: _slicedToArray(obj.useTierEmojiIds(listingId, guild.id), 1)[0].size, numChannels: _slicedToArray(obj2.useChannelBenefits(listingId), 1)[0].length, numIntangibles: _slicedToArray(obj3.useIntangibleBenefits(listingId), 1)[0].length }) });
  const obj13 = { source: null, style: null };
  const formatToPlainStringResult = intl2.formatToPlainString(util.t.OVlNGT, { numEmojis: _slicedToArray(obj.useTierEmojiIds(listingId, guild.id), 1)[0].size, numChannels: _slicedToArray(obj2.useChannelBenefits(listingId), 1)[0].length, numIntangibles: _slicedToArray(obj3.useIntangibleBenefits(listingId), 1)[0].length });
  const obj10 = { variant: "body-sm/medium", color: "interactive-text-default", children: guild.name };
  obj13.source = _modDef17485;
  obj13.style = tmp.cactus;
  items2[6] = closure_1_10(FastImageDefault, obj13);
  obj7.children = items2;
  return closure_1_11(metroImportDefault, obj7);
}
function CancelSubscriptionButtonFooter(guild) {
  guild = guild.guild;
  const subscription = guild.subscription;
  const onClose = guild.onClose;
  dependencyMap = undefined;
  let cancelSubscription;
  let isPurchasedViaAppleGeneric;
  const tmp = closure_13();
  [tmp3, c3] = cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  const tmp2 = cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  const analyticsLocations = subscription(7410)(subscription(7435).GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL).analyticsLocations;
  const tmp5 = subscription(7410);
  const cancelSubscription1 = subscription(10048).useCancelSubscription(subscription.id, subscription.isACOM);
  cancelSubscription = cancelSubscription1.cancelSubscription;
  isPurchasedViaAppleGeneric = subscription.isPurchasedViaAppleGeneric;
  items = [guild.name, , , , , , , ];
  ({ currentPeriodEnd: arr[1], id: arr[2], isPurchasedViaDesktop: arr[3] } = subscription);
  items[4] = isPurchasedViaAppleGeneric;
  items[5] = onClose;
  items[6] = cancelSubscription;
  items[7] = analyticsLocations;
  const obj2 = { style: tmp.footer, children: null };
  const callback = isPurchasedViaAppleGeneric.useCallback(analyticsLocations(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            guild = tmp7;
            closure_128_0 = undefined;
            const obj6 = { title: null, body: null, confirmText: null, confirmColor: null };
            const intl2 = guild(1113).intl;
            const obj9 = { guildName: guild.name };
            obj6.title = intl2.formatToPlainString(guild(1113).t.sBs7sh, obj9);
            const obj15 = tmp3(6117);
            const _HermesInternal = HermesInternal;
            obj6.body = "You can resubscribe any time before " + tmp3(2166)(subscription.currentPeriodEnd).format(closure_1_12) + ".";
            const intl3 = guild(1113).intl;
            obj6.confirmText = intl3.string(guild(1113).t["3KZjFH"]);
            obj6.confirmColor = guild(1187).ButtonColors.RED;
            c4 = 1;
            c5 = 1;
            const obj10 = { value: obj15.confirm(obj6), done: false };
            return obj10;
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else if (value) {
              closure_129_3(true);
              dependencyMap = 1;
              closure_128_0 = false;
              if (closure_129_6) {
                c4 = 3;
                c5 = 1;
                const obj12 = { value: closure_129_5(), done: false };
                return obj12;
              } else if (closure_129_1.isPurchasedViaDesktop) {
                c4 = 4;
                c5 = 1;
                const obj13 = { value: tmp63(6614).cancelSubscription(closure_129_1.id, closure_129_4), done: false };
                return obj13;
              } else {
                const _Error = Error;
                const error = new Error("Cancellation not supported for subscription");
                throw error;
              }
            }
          } else {
            if (2 === tmp7) {
              dependencyMap = 0;
              closure_128_1 = tmp63;
              closure_129_3(false);
              guild(5866).presentFailedToast(closure_128_1.message);
              let tmp38 = closure_128_1 instanceof tmp3(4990);
              if (tmp38) {
                tmp38 = closure_128_1.code === guild(4990).ErrorCodes.ALREADY_CANCELED;
              }
              if (tmp38) {
                if (closure_129_2 != null) {
                  closure_129_2();
                }
              }
              const obj7 = guild(5866);
            } else {
              if (3 === tmp7) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_128_0 = value;
                }
              } else if (4 === tmp7) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 0;
                  c5 = 3;
                  const obj14 = { value, done: true };
                  return obj14;
                } else {
                  c4 = 5;
                  c5 = 1;
                  const obj16 = { value: tmp63(6614).fetchSubscriptions(), done: false };
                  return obj16;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_128_0 = true;
              }
              closure_129_3(false);
              if (closure_128_0) {
                if (closure_129_2 != null) {
                  closure_129_2();
                }
              } else {
                const intl = guild(1113).intl;
                guild(5866).presentFailedToast(intl.string(guild(1113).t.R0RpRX));
                const obj5 = guild(5866);
              }
              dependencyMap = 0;
            }
            dependencyMap = 0;
            c5 = 3;
            const obj17 = { value, done: true };
            return obj17;
          }
          c5 = 3;
        }
      } catch (tmp63) {
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp63;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items);
  if (!tmp3) {
    if (isPurchasedViaAppleGeneric) {
      isPurchasedViaAppleGeneric = !cancelSubscription1.nativePaymentsConnected;
    }
  }
  let obj3 = { variant: "destructive", loading: tmp3, text: null, onPress: null };
  let intl = tmp10(1113).intl;
  obj3.text = intl.string(guild(1113).t.cM1H0K);
  obj3.onPress = callback;
  obj2.children = closure_10(guild(5788).Button, obj3);
  return closure_10(closure_7, obj2);
}
function Content(subscription) {
  subscription = subscription.subscription;
  const tmp = closure_13();
  ({ listing, guild } = useManageSubscriptionCardDataDefault(subscription));
  const tmp4 = useManageSubscriptionCardDataDefault(subscription);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const subscriptionsSettings = GuildRoleSubscriptionsHooks.useSubscriptionsSettings(id);
  let cover_image_asset;
  if (subscriptionsSettings != null) {
    cover_image_asset = subscriptionsSettings.cover_image_asset;
  }
  let tmp9 = null;
  if (null != listing) {
    tmp9 = null;
    if (null != guild) {
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { children: null };
      const obj4 = { style: tmp.heroImage, asset: cover_image_asset };
      items = [closure_1_10(FastAssetImageDefault, obj4), ];
      const obj5 = { style: tmp.body, children: null };
      const obj6 = { guild, listingId: listing.id, subscription };
      const items1 = [closure_1_10(WhatYouLose, obj6), closure_1_10(native.Spacer, { size: 24 }), , , ];
      const obj7 = { variant: "body-sm/semibold", color: "text-default", children: null };
      const intl = util.intl;
      obj7.children = intl.string(util.t.xyvN8p);
      items1[2] = closure_1_10(Text_Text.Text, obj7);
      items1[3] = closure_1_10(native.Spacer, { size: 16 });
      const obj8 = { listingId: listing.id, guildId: guild.id };
      items1[4] = closure_1_10(GuildRoleSubscriptionCardAll.Content, obj8);
      obj5.children = items1;
      items[1] = closure_1_11(metroImportDefault, obj5);
      obj3.children = items;
      const items2 = [closure_1_11(React5, obj3), ];
      const obj9 = { guild, subscription, onClose: subscription.onClose };
      items2[1] = closure_1_10(CancelSubscriptionButtonFooter, obj9);
      obj2.children = items2;
      tmp9 = closure_1_11(metroImportDefault, obj2);
    }
  }
  return tmp9;
}
get_ActivityIndicator = fn(17);
({ View: metroImportDefault, ScrollView: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let c12 = "M/DD/YY";
let createStyles = fn(5170);
let obj2 = { container: { flex: 1 }, body: { marginVertical: 24, marginHorizontal: 16 }, heroImage: { width: "100%", height: "WireType", aspectRatio: "<string:2353406737>" }, footer: { borderTopColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, borderTopWidth: 1, padding: 16 } };
let closure_13 = createStyles.createStyles(obj2);
createStyles = fn(5170);
let obj5 = { container: null, header: null, cactus: null };
let obj3 = { borderTopColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, borderTopWidth: 1, padding: 16 };
obj5.container = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, paddingVertical: 12, paddingHorizontal: 16 };
obj5.header = { flex: 1, flexDirection: "row" };
obj5.cactus = { width: 99, position: "absolute", right: 16, bottom: 12 };
let closure_14 = createStyles.createStyles(obj5);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx");

export default function UserSettingsGuildRoleSubscriptionsCancel(subscriptionId) {
  subscriptionId = subscriptionId.subscriptionId;
  items = [SubscriptionStore];
  const stateFromStores = subscriptionId(504).useStateFromStores(items, () => SubscriptionStore.getSubscriptionById(subscriptionId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { subscription: stateFromStores, onClose: subscriptionId.onClose };
    tmp2 = closure_10(Content, obj2);
  }
  return tmp2;
};