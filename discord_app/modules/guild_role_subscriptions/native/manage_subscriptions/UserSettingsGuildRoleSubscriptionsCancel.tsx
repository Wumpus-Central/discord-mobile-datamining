import closure_4 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import notSupported from "notSupported";
import get_ActivityIndicator from "context";
import reset from "reset";
import jsxProd from "_deletePaymentSource";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c10;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function WhatYouLose(subscription) {
  let guild;
  let listingId;
  ({ listingId, guild } = subscription);
  const tmp = callback4();
  let obj = importAll(14364);
  let obj1 = importAll(14364);
  let obj2 = importAll(14364);
  let obj3 = importAll(14364);
  let obj4 = importDefault(3867)(subscription.subscription.currentPeriodEnd);
  const intl = require(1236) /* getSystemLocale */.intl;
  const formatResult = obj4.format(c12);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj = { numEmojis: callback(obj.useTierEmojiIds(listingId, guild.id), 1)[0].size, numChannels: callback(obj1.useChannelBenefits(listingId), 1)[0].length, numIntangibles: callback(obj2.useIntangibleBenefits(listingId), 1)[0].length };
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.header, children: null };
  const formatResult1 = intl.format(require(1236) /* getSystemLocale */.t.EtAXzC, { subscriptionEndDate: obj4.format(c12) });
  const items = [callback2(importDefault(5661), { guild }), callback2(require(1297) /* Button */.Spacer, { size: 16 }), ];
  obj2 = { children: null };
  const items1 = [callback2(require(4281) /* Text */.Text, { variant: "text-md/semibold", color: "interactive-text-active", children: callback(obj3.useName(listingId), 1)[0] }), callback2(require(1297) /* Button */.Spacer, { size: 2 }), ];
  obj3 = { variant: "text-sm/medium", color: "interactive-text-default", children: guild.name };
  items1[2] = callback2(require(4281) /* Text */.Text, obj3);
  obj2[0] = items1;
  items[2] = callback3(closure_7, obj2);
  obj1[1] = items;
  const items2 = [callback3(closure_7, obj1), callback2(importDefault(14354), { style: { marginVertical: 16 } }), , , , , ];
  obj4 = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj4[2] = intl3.string(require(1236) /* getSystemLocale */.t["9SgXmT"]);
  items2[2] = callback2(require(4281) /* Text */.Text, obj4);
  items2[3] = callback2(require(1297) /* Button */.Spacer, { size: 12 });
  const items3 = [formatResult1, "\n"];
  items2[4] = callback3(require(4281) /* Text */.Text, { variant: "text-sm/normal", color: "text-default", children: items3 });
  items2[5] = callback2(require(4281) /* Text */.Text, { variant: "text-sm/medium", color: "text-default", children: intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.OVlNGT, obj) });
  const obj5 = { source: null, style: null };
  const formatToPlainStringResult = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.OVlNGT, obj);
  obj5[0] = importDefault(14372);
  obj5[1] = tmp.cactus;
  items2[6] = callback2(importDefault(5236), obj5);
  obj[1] = items2;
  return callback3(closure_7, obj);
}
function CancelSubscriptionButtonFooter(guild) {
  let c3;
  let tmp3;
  guild = guild.guild;
  const subscription = guild.subscription;
  const onClose = guild.onClose;
  let dependencyMap;
  let analyticsLocations;
  let cancelSubscription;
  let isPurchasedViaAppleGeneric;
  const tmp = createCacheKey();
  [tmp3, c3] = cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  const tmp2 = cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  analyticsLocations = subscription(5610)(subscription(5630).GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL).analyticsLocations;
  let obj = subscription(7572);
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
        return { value: "HermesInternal", done: null };
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
            const code = tmp3;
            let c0 = tmp7;
            c0 = undefined;
            let obj1 = { title: null, body: null, confirmText: null, confirmColor: null };
            const intl2 = outer1_0(1236).intl;
            const obj2 = { guildName: null };
            obj2[0] = outer1_0.name;
            obj1[0] = intl2.formatToPlainString(outer1_0(1236).t.sBs7sh, obj2);
            const obj15 = outer1_1(4624);
            const _HermesInternal = HermesInternal;
            obj1[1] = "You can resubscribe any time before " + outer1_1(3867)(outer1_1.currentPeriodEnd).format(outer1_12) + ".";
            const intl3 = outer1_0(1236).intl;
            obj1[2] = intl3.string(outer1_0(1236).t["3KZjFH"]);
            obj1[3] = outer1_0(1297).ButtonColors.RED;
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
              outer1_0 = false;
              if (outer1_6) {
                c4 = 3;
                v0 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = v0();
                return obj5;
              } else if (outer1_1.isPurchasedViaDesktop) {
                let obj7 = outer1_2(4604);
                c4 = 4;
                v0 = 1;
                let obj6 = { value: null, done: false };
                obj6[0] = obj7.cancelSubscription(outer1_1.id, c4);
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
              outer1_1 = closure_2;
              dependencyMap(false);
              obj6 = outer1_0(3985);
              obj6.presentFailedToast(outer1_1.message);
              let tmp38 = outer1_1 instanceof outer1_1(3953);
              if (tmp38) {
                tmp38 = code.code === outer1_0(3953).ErrorCodes.ALREADY_CANCELED;
              }
              if (tmp38) {
                if (outer1_2 != null) {
                  outer1_2();
                }
              }
            } else {
              if (3 === tmp7) {
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  outer1_0 = arg1;
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
                  obj1 = outer1_2(4604);
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
              if (outer1_0) {
                if (outer1_2 != null) {
                  outer1_2();
                }
              } else {
                obj4 = outer1_0(3985);
                const intl = outer1_0(1236).intl;
                obj4.presentFailedToast(intl.string(outer1_0(1236).t.R0RpRX));
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
  obj[1] = closure_10(guild(4695).Button, obj);
  return closure_10(closure_7, obj);
}
function Content(subscription) {
  let guild;
  let listing;
  subscription = subscription.subscription;
  const tmp = createCacheKey();
  ({ listing, guild } = importDefault(14360)(subscription));
  let obj = require(14349) /* useFetchListingsForGuild */;
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
      const obj1 = { style: null, asset: null };
      obj1[0] = tmp.heroImage;
      obj1[1] = cover_image_asset;
      const items = [callback2(importDefault(14373), obj1), ];
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
      items1[2] = callback2(tmp5(4281).Text, obj4);
      items1[3] = callback2(tmp5(1297).Spacer, { size: 16 });
      const obj5 = { listingId: null, guildId: null };
      obj5[0] = listing.id;
      obj5[1] = guild.id;
      items1[4] = callback2(importAll(14374).Content, obj5);
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
({ View: error, ScrollView: metroImportAll } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let c12 = "M/DD/YY";
createCacheKey = { container: { flex: 1 }, body: { marginVertical: 24, marginHorizontal: 16 }, heroImage: { width: "100%", height: "View", aspectRatio: "<string:2353406737>" }, footer: null };
createCacheKey = { borderTopColor: require("Themes").colors.INTERACTIVE_BACKGROUND_HOVER, borderTopWidth: 1, padding: 16 };
createCacheKey[3] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { container: null, header: null, cactus: null };
obj1[0] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.md, paddingVertical: 12, paddingHorizontal: 16 };
obj1[1] = { flex: 1, flexDirection: "row" };
obj1[2] = { width: 99, position: "absolute", right: 16, bottom: 12 };
let closure_14 = createCacheKey.createStyles(obj1);
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.md, paddingVertical: 12, paddingHorizontal: 16 };
const result = require("noop").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx");

export default function UserSettingsGuildRoleSubscriptionsCancel(subscriptionId) {
  subscriptionId = subscriptionId.subscriptionId;
  let obj = subscriptionId(589);
  const items = [reset];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getSubscriptionById(subscriptionId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { subscription: null, onClose: null };
    obj[0] = stateFromStores;
    obj[1] = subscriptionId.onClose;
    tmp2 = callback2(Content, obj);
  }
  return tmp2;
};