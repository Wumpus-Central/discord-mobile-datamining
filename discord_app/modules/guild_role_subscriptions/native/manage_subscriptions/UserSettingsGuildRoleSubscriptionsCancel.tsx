// discord_app/modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import hooksDefault from "../../../../../_runtime/03979_hooks.js";
import Text from "../../../../design/components/Text/native/Text.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import GuildIconSizesDefault from "../../../guild/native/GuildIcon.tsx";
import useFetchListingsForGuild from "../../GuildRoleSubscriptionsHooks.tsx";
import FormSeparatorDefault from "../components/FormSeparator.tsx";
import useManageSubscriptionCardDataDefault from "../../manage_subscriptions/useManageSubscriptionCardData.tsx";
import getRoleEmojisAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import registerAssetDefault from "../../../../../_runtime/14679_registerAsset.js";
import FastAssetImageDefault from "../components/FastAssetImage.tsx";
import SectionTitleAll from "../components/listing_elements/GuildRoleSubscriptionCard.tsx";
import closure_4 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_9 from "../../../../stores/billing/SubscriptionStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function WhatYouLose(subscription) {
  ({ listingId, guild } = subscription);
  const tmp = callback5();
  let obj = getRoleEmojisAll;
  obj1 = getRoleEmojisAll;
  let obj2 = getRoleEmojisAll;
  let obj3 = getRoleEmojisAll;
  let obj4 = hooksDefault(subscription.subscription.currentPeriodEnd);
  const intl = getSystemLocale.intl;
  const formatResult = obj4.format(c12);
  const intl2 = getSystemLocale.intl;
  obj = { numEmojis: callback(obj.useTierEmojiIds(listingId, guild.id), 1)[0].size, numChannels: callback(obj1.useChannelBenefits(listingId), 1)[0].length, numIntangibles: callback(obj2.useIntangibleBenefits(listingId), 1)[0].length };
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.header, children: null };
  const formatResult1 = intl.format(getSystemLocale.t.EtAXzC, { subscriptionEndDate: obj4.format(c12) });
  const items = [callback2(GuildIconSizesDefault, { guild }), callback2(Button.Spacer, { size: 16 }), ];
  obj2 = { children: null };
  const items1 = [callback2(Text.Text, { variant: "text-md/semibold", color: "interactive-text-active", children: callback(obj3.useName(listingId), 1)[0] }), callback2(Button.Spacer, { size: 2 }), ];
  obj3 = { variant: "text-sm/medium", color: "interactive-text-default", children: guild.name };
  items1[2] = callback2(Text.Text, obj3);
  obj2[0] = items1;
  items[2] = callback3(closure_7, obj2);
  obj1[1] = items;
  const items2 = [callback3(closure_7, obj1), callback2(FormSeparatorDefault, { style: { marginVertical: 16 } }), , , , , ];
  obj4 = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
  const intl3 = getSystemLocale.intl;
  obj4[2] = intl3.string(getSystemLocale.t["9SgXmT"]);
  items2[2] = callback2(Text.Text, obj4);
  items2[3] = callback2(Button.Spacer, { size: 12 });
  const items3 = [formatResult1, "\n"];
  items2[4] = callback3(Text.Text, { variant: "text-sm/normal", color: "text-default", children: items3 });
  items2[5] = callback2(Text.Text, { variant: "text-sm/medium", color: "text-default", children: intl2.formatToPlainString(getSystemLocale.t.OVlNGT, obj) });
  const obj5 = { source: null, style: null };
  const formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.OVlNGT, obj);
  obj5[0] = registerAssetDefault;
  obj5[1] = tmp.cactus;
  items2[6] = callback2(preloadDefault, obj5);
  obj[1] = items2;
  return callback3(closure_7, obj);
}
function CancelSubscriptionButtonFooter(guild) {
  guild = guild.guild;
  const subscription = guild.subscription;
  const onClose = guild.onClose;
  dependencyMap = undefined;
  let analyticsLocations;
  let cancelSubscription;
  let isPurchasedViaAppleGeneric;
  const tmp = callback4();
  [tmp3, c3] = cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  const tmp2 = cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  analyticsLocations = subscription(5834)(subscription(5854).GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL).analyticsLocations;
  let obj = subscription(7796);
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
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v0 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let lib2 = tmp3;
            c0 = tmp7;
            c0 = undefined;
            obj1 = { title: null, body: null, confirmText: null, confirmColor: null };
            const intl2 = lib(1236).intl;
            const obj2 = { guildName: null };
            obj2[0] = lib.name;
            obj1[0] = intl2.formatToPlainString(lib(1236).t.sBs7sh, obj2);
            const obj15 = lib2(4745);
            const _HermesInternal = HermesInternal;
            obj1[1] = "You can resubscribe any time before " + lib2(3979)(lib2.currentPeriodEnd).format(closure_1_12) + ".";
            const intl3 = lib(1236).intl;
            obj1[2] = intl3.string(lib(1236).t["3KZjFH"]);
            obj1[3] = lib(1297).ButtonColors.RED;
            c4 = 1;
            v0 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = obj15.confirm(obj1);
            return obj3;
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              let obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else if (arg1) {
              dependencyMap(true);
              dependencyMap = 1;
              lib = false;
              if (closure_1_6) {
                c4 = 3;
                v0 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = v0();
                return obj5;
              } else if (lib2.isPurchasedViaDesktop) {
                let obj7 = closure_1_2(4725);
                c4 = 4;
                v0 = 1;
                let obj6 = { value: null, done: false };
                obj6[0] = obj7.cancelSubscription(lib2.id, c4);
                return obj6;
              } else {
                const _Error = Error;
                error = new Error("Cancellation not supported for subscription");
                throw error;
              }
            }
          } else {
            if (2 === tmp7) {
              dependencyMap = 0;
              lib2 = closure_2;
              dependencyMap(false);
              obj6 = lib(4097);
              obj6.presentFailedToast(lib2.message);
              let tmp38 = lib2 instanceof lib2(4065);
              if (tmp38) {
                tmp38 = lib2.code === lib(4065).ErrorCodes.ALREADY_CANCELED;
              }
              if (tmp38) {
                if (closure_1_2 != null) {
                  closure_1_2();
                }
              }
            } else {
              if (3 === tmp7) {
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  lib = arg1;
                }
              } else if (4 === tmp7) {
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  dependencyMap = 0;
                  v0 = 3;
                  obj7 = { value: null, done: true };
                  obj7[0] = arg1;
                  return obj7;
                } else {
                  obj1 = closure_1_2(4725);
                  c4 = 5;
                  v0 = 1;
                  const obj8 = { value: null, done: false };
                  obj8[0] = obj1.fetchSubscriptions();
                  return obj8;
                }
              } else if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                dependencyMap = 0;
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c0 = true;
              }
              dependencyMap(false);
              if (lib) {
                if (closure_1_2 != null) {
                  closure_1_2();
                }
              } else {
                obj4 = lib(4097);
                const intl = lib(1236).intl;
                obj4.presentFailedToast(intl.string(lib(1236).t.R0RpRX));
              }
              dependencyMap = 0;
            }
            dependencyMap = 0;
            v0 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          }
          v0 = 3;
        }
      } catch (tmp63) {
        closure_2 = tmp63;
        if (tmp4 === dependencyMap) {
          v0 = tmp2;
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
  let intl = tmp10(1236).intl;
  obj[2] = intl.string(guild(1236).t.cM1H0K);
  obj[3] = callback;
  obj[1] = closure_10(guild(4815).Button, obj);
  return closure_10(closure_7, obj);
}
function Content(subscription) {
  subscription = subscription.subscription;
  const tmp = callback4();
  ({ listing, guild } = useManageSubscriptionCardDataDefault(subscription));
  let obj = useFetchListingsForGuild;
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
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { children: null };
      obj1 = { style: null, asset: null };
      obj1[0] = tmp.heroImage;
      obj1[1] = cover_image_asset;
      const items = [callback2(FastAssetImageDefault, obj1), ];
      const obj2 = { style: null, children: null };
      obj2[0] = tmp.body;
      const obj3 = { guild: null, listingId: null, subscription: null };
      obj3[0] = guild;
      obj3[1] = listing.id;
      obj3[2] = subscription;
      const items1 = [callback2(WhatYouLose, obj3), callback2(tmp5(1297).Spacer, { size: 24 }), , , ];
      const obj4 = { variant: "text-sm/bold", color: "text-default", style: null, children: null };
      obj4[2] = { textTransform: "uppercase" };
      const intl = tmp5(1236).intl;
      obj4[3] = intl.string(tmp5(1236).t.xyvN8p);
      items1[2] = callback2(tmp5(4376).Text, obj4);
      items1[3] = callback2(tmp5(1297).Spacer, { size: 16 });
      const obj5 = { listingId: null, guildId: null };
      obj5[0] = listing.id;
      obj5[1] = guild.id;
      items1[4] = callback2(SectionTitleAll.Content, obj5);
      obj2[1] = items1;
      items[1] = callback3(closure_7, obj2);
      obj[0] = items;
      const items2 = [callback3(closure_8, obj), ];
      const obj6 = { guild: null, subscription: null, onClose: null };
      obj6[0] = guild;
      obj6[1] = subscription;
      obj6[2] = subscription.onClose;
      items2[1] = callback2(CancelSubscriptionButtonFooter, obj6);
      obj[1] = items2;
      tmp9 = callback3(closure_7, obj);
    }
  }
  return tmp9;
}
({ View: error, ScrollView: closure_8 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let c12 = "M/DD/YY";
createCacheKey = { container: { flex: 1 }, body: { marginVertical: 24, marginHorizontal: 16 }, heroImage: { width: "100%", height: "View", aspectRatio: "<string:2353406737>" }, footer: null };
createCacheKey = { borderTopColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_HOVER, borderTopWidth: 1, padding: 16 };
createCacheKey[3] = createCacheKey;
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj1 = { container: { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.md, paddingVertical: 12, paddingHorizontal: 16 }, header: { flex: 1, flexDirection: "row" }, cactus: { width: 99, position: "absolute", right: 16, bottom: 12 } };
let closure_14 = createCacheKey.createStyles(obj1);
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.md, paddingVertical: 12, paddingHorizontal: 16 };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx");

export default function UserSettingsGuildRoleSubscriptionsCancel(subscriptionId) {
  subscriptionId = subscriptionId.subscriptionId;
  let obj = subscriptionId(589);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_9.getSubscriptionById(subscriptionId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { subscription: null, onClose: null };
    obj[0] = stateFromStores;
    obj[1] = subscriptionId.onClose;
    tmp2 = callback2(Content, obj);
  }
  return tmp2;
};