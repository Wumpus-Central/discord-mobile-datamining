// === Module 15226: UserSettingsGuildRoleSubscriptionsCancel ===

// Module 15226 (UserSettingsGuildRoleSubscriptionsCancel)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import _modDef4153 from "module_4153" /* 4153 */;
import Text_Text from "Text/Text" /* 4556 */;
import GuildIconDefault from "GuildIcon" /* 5584 */;
import FastImageDefault from "FastImage" /* 5587 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 15212 */;
import FormSeparatorDefault from "FormSeparator" /* 15217 */;
import useManageSubscriptionCardDataDefault from "useManageSubscriptionCardData" /* 15223 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15227 */;
import _modDef15235 from "module_15235" /* 15235 */;
import FastAssetImageDefault from "FastAssetImage" /* 15236 */;
import GuildRoleSubscriptionCardAll from "GuildRoleSubscriptionCard" /* 15237 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;

require = fn;
function WhatYouLose(subscription) {
  ({ listingId, guild } = subscription);
  const tmp = closure_14();
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  let obj1 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let obj4 = _modDef4153(subscription.subscription.currentPeriodEnd);
  const intl = util.intl;
  const formatResult = obj4.format(c12);
  const intl2 = util.intl;
  obj = { numEmojis: _slicedToArray(obj.useTierEmojiIds(listingId, guild.id), 1)[0].size, numChannels: _slicedToArray(obj1.useChannelBenefits(listingId), 1)[0].length, numIntangibles: _slicedToArray(obj2.useIntangibleBenefits(listingId), 1)[0].length };
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.header, children: null };
  const formatResult1 = intl.format(util.t.EtAXzC, { subscriptionEndDate: obj4.format(c12) });
  const items = [closure_1_10(GuildIconDefault, { guild }), closure_1_10(native.Spacer, { size: 16 }), ];
  obj2 = { children: null };
  const items1 = [closure_1_10(Text_Text.Text, { variant: "text-md/semibold", color: "interactive-text-active", children: _slicedToArray(obj3.useName(listingId), 1)[0] }), closure_1_10(native.Spacer, { size: 2 }), ];
  obj3 = { variant: "text-sm/medium", color: "interactive-text-default", children: guild.name };
  items1[2] = closure_1_10(Text_Text.Text, obj3);
  obj2.children = items1;
  items[2] = closure_1_11(React5, obj2);
  obj1.children = items;
  const items2 = [closure_1_11(React5, obj1), closure_1_10(FormSeparatorDefault, { style: { marginVertical: 16 } }), , , , , ];
  obj4 = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
  const intl3 = util.intl;
  obj4.children = intl3.string(util.t["9SgXmT"]);
  items2[2] = closure_1_10(Text_Text.Text, obj4);
  items2[3] = closure_1_10(native.Spacer, { size: 12 });
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: null };
  const items3 = [formatResult1, "\n"];
  obj5.children = items3;
  items2[4] = closure_1_11(Text_Text.Text, obj5);
  items2[5] = closure_1_10(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: intl2.formatToPlainString(util.t.OVlNGT, obj) });
  const obj6 = { source: null, style: null };
  const formatToPlainStringResult = intl2.formatToPlainString(util.t.OVlNGT, obj);
  obj6.source = _modDef15235;
  obj6.style = tmp.cactus;
  items2[6] = closure_1_10(FastImageDefault, obj6);
  obj.children = items2;
  return closure_1_11(React5, obj);
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
  const analyticsLocations = subscription(7162)(subscription(7182).GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL).analyticsLocations;
  let obj = subscription(9366);
  cancelSubscription = obj.useCancelSubscription(subscription.id, subscription.isACOM);
  cancelSubscription = cancelSubscription.cancelSubscription;
  isPurchasedViaAppleGeneric = subscription.isPurchasedViaAppleGeneric;
  const items = [guild.name, , , , , , , ];
  ({ currentPeriodEnd: arr[1], id: arr[2], isPurchasedViaDesktop: arr[3] } = subscription);
  items[4] = isPurchasedViaAppleGeneric;
  items[5] = onClose;
  items[6] = cancelSubscription;
  items[7] = analyticsLocations;
  obj = { style: tmp.footer, children: null };
  const callback = isPurchasedViaAppleGeneric.useCallback(analyticsLocations(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            guild = tmp7;
            closure_128_0 = undefined;
            let obj1 = { title: null, body: null, confirmText: null, confirmColor: null };
            const intl2 = guild(1114).intl;
            const obj2 = { guildName: guild.name };
            obj1.title = intl2.formatToPlainString(guild(1114).t.sBs7sh, obj2);
            const obj15 = tmp3(4905);
            const _HermesInternal = HermesInternal;
            obj1.body = "You can resubscribe any time before " + tmp3(4153)(subscription.currentPeriodEnd).format(closure_1_12) + ".";
            const intl3 = guild(1114).intl;
            obj1.confirmText = intl3.string(guild(1114).t["3KZjFH"]);
            obj1.confirmColor = guild(1178).ButtonColors.RED;
            c4 = 1;
            c5 = 1;
            const obj3 = { value: obj15.confirm(obj1), done: false };
            return obj3;
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else if (value) {
              closure_129_3(true);
              dependencyMap = 1;
              closure_128_0 = false;
              if (closure_129_6) {
                c4 = 3;
                c5 = 1;
                const obj5 = { value: closure_129_5(), done: false };
                return obj5;
              } else if (closure_129_1.isPurchasedViaDesktop) {
                let obj7 = tmp63(4884);
                c4 = 4;
                c5 = 1;
                let obj6 = { value: obj7.cancelSubscription(closure_129_1.id, closure_129_4), done: false };
                return obj6;
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
              obj6 = guild(4258);
              obj6.presentFailedToast(closure_128_1.message);
              let tmp38 = closure_128_1 instanceof tmp3(4240);
              if (tmp38) {
                tmp38 = closure_128_1.code === guild(4240).ErrorCodes.ALREADY_CANCELED;
              }
              if (tmp38) {
                if (closure_129_2 != null) {
                  closure_129_2();
                }
              }
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
                  obj7 = { value, done: true };
                  return obj7;
                } else {
                  obj1 = tmp63(4884);
                  c4 = 5;
                  c5 = 1;
                  const obj8 = { value: obj1.fetchSubscriptions(), done: false };
                  return obj8;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                c5 = 3;
                obj = { value, done: true };
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
                obj4 = guild(4258);
                const intl = guild(1114).intl;
                obj4.presentFailedToast(intl.string(guild(1114).t.R0RpRX));
              }
              dependencyMap = 0;
            }
            dependencyMap = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
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
      isPurchasedViaAppleGeneric = !cancelSubscription.nativePaymentsConnected;
    }
  }
  obj = { variant: "destructive", loading: tmp3, text: null, onPress: null };
  let intl = tmp10(1114).intl;
  obj.text = intl.string(guild(1114).t.cM1H0K);
  obj.onPress = callback;
  obj.children = closure_10(guild(4975).Button, obj);
  return closure_10(closure_7, obj);
}
function Content(subscription) {
  subscription = subscription.subscription;
  const tmp = closure_13();
  ({ listing, guild } = useManageSubscriptionCardDataDefault(subscription));
  let obj = GuildRoleSubscriptionsHooks;
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const subscriptionsSettings = obj.useSubscriptionsSettings(id);
  let cover_image_asset;
  if (subscriptionsSettings != null) {
    cover_image_asset = subscriptionsSettings.cover_image_asset;
  }
  let tmp9 = null;
  if (null != listing) {
    tmp9 = null;
    if (null != guild) {
      obj = { style: tmp.container, children: null };
      obj = { children: null };
      const obj1 = { style: tmp.heroImage, asset: cover_image_asset };
      const items = [closure_1_10(FastAssetImageDefault, obj1), ];
      const obj2 = { style: tmp.body, children: null };
      const obj3 = { guild, listingId: listing.id, subscription };
      const items1 = [closure_1_10(WhatYouLose, obj3), closure_1_10(native.Spacer, { size: 24 }), , , ];
      const obj4 = { variant: "text-sm/bold", color: "text-default", style: { textTransform: "uppercase" }, children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.xyvN8p);
      items1[2] = closure_1_10(Text_Text.Text, obj4);
      items1[3] = closure_1_10(native.Spacer, { size: 16 });
      const obj5 = { listingId: listing.id, guildId: guild.id };
      items1[4] = closure_1_10(GuildRoleSubscriptionCardAll.Content, obj5);
      obj2.children = items1;
      items[1] = closure_1_11(React5, obj2);
      obj.children = items;
      const items2 = [closure_1_11(React6, obj), ];
      const obj6 = { guild, subscription, onClose: subscription.onClose };
      items2[1] = closure_1_10(CancelSubscriptionButtonFooter, obj6);
      obj.children = items2;
      tmp9 = closure_1_11(React5, obj);
    }
  }
  return tmp9;
}
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = "M/DD/YY";
fn(4560);
let createStyles = { container: { flex: 1 }, body: { marginVertical: 24, marginHorizontal: 16 }, heroImage: { width: "100%", height: "w", aspectRatio: "<string:2353406737>" }, footer: null };
createStyles = { borderTopColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, borderTopWidth: 1, padding: 16 };
createStyles.footer = createStyles;
let closure_13 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let obj1 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, paddingVertical: 12, paddingHorizontal: 16 }, header: { flex: 1, flexDirection: "row" }, cactus: { width: 99, position: "absolute", right: 16, bottom: 12 } };
let closure_14 = createStyles.createStyles(obj1);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx");

export default function UserSettingsGuildRoleSubscriptionsCancel(subscriptionId) {
  subscriptionId = subscriptionId.subscriptionId;
  let obj = subscriptionId(504);
  const items = [SubscriptionStore];
  const stateFromStores = obj.useStateFromStores(items, () => SubscriptionStore.getSubscriptionById(subscriptionId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { subscription: stateFromStores, onClose: subscriptionId.onClose };
    tmp2 = closure_10(Content, obj);
  }
  return tmp2;
};