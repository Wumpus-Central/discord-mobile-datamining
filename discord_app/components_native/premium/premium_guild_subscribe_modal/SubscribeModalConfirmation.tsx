// === Module 13973: SubscribeModalConfirmation ===

// Module 13973 (SubscribeModalConfirmation)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4722 */;
import Text_Text from "Text/Text" /* 4825 */;
import components_Button_Button from "components/Button/Button" /* 5273 */;
import _modDef5902 from "module_5902" /* 5902 */;
import _modDef13974 from "module_13974" /* 13974 */;
import PremiumGuildPreviewDefault from "PremiumGuildPreview" /* 13975 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AppliedGuildBoostStore from "AppliedGuildBoostStore" /* 12911 */;
import GuildStore from "GuildStore" /* 2066 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4723 */;
import SubscriptionStore from "SubscriptionStore" /* 4489 */;

const require = globalThis.__r;

require = fn;
function PendingCancellationWarning(slots) {
  slots = slots.slots;
  const tmp = closure_22();
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const found = slots.filter((item) => GuildBoostingUtils.isGuildBoostSlotCanceled(item));
  let tmp5 = null;
  if (0 !== found.length) {
    tmp5 = null;
    if (null != stateFromStores) {
      const obj2 = { style: tmp.pendingCancellation, children: null };
      const obj3 = { style: tmp.pendingCancellationIcon, source: _modDef5902 };
      const items1 = [closure_1_19(timestampProducer, obj3), ];
      const obj4 = { style: tmp.pendingCancellationMessage, variant: "text-sm/medium", children: null };
      const intl = util.intl;
      const obj5 = { date: stateFromStores.currentPeriodEnd, canceledCount: found.length };
      obj4.children = intl.format(util.t.SFpsCH, obj5);
      items1[1] = closure_1_19(Text_Text.Text, obj4);
      obj2.children = items1;
      tmp5 = closure_1_20(React5, obj2);
    }
  }
  return tmp5;
}
function SubscribeConfirmation(arg0) {
  ({ slots, onPremiumGuildSubscribe: require } = arg0);
  ({ guild, isModifyingSubscription } = arg0);
  const tmp = closure_22();
  const obj = { children: null };
  const items = [closure_1_19(timestampProducer, { style: tmp.subscribeImage, source: _modDef13974 }), , , , , ];
  const obj3 = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.yTlZV0);
  items[1] = closure_1_19(Text_Text.Text, obj3);
  items[2] = closure_1_19(PremiumGuildPreviewDefault, { style: tmp.guildPreview, guild });
  const obj5 = { style: null, variant: "text-sm/medium", children: null };
  const items1 = [, ];
  ({ blurb: arr2[0], warning: arr2[1] } = tmp);
  obj5.style = items1;
  const intl2 = util.intl;
  obj5.children = intl2.format(util.t.KPnDlu, { days, slotCount: slots.length });
  items[3] = closure_1_19(Text_Text.Text, obj5);
  items[4] = closure_1_19(PendingCancellationWarning, { slots });
  const obj7 = { style: tmp.confirmButton, children: null };
  const obj8 = { variant: "primary", text: null, onPress: null, loading: null };
  const intl3 = util.intl;
  obj8.text = intl3.formatToPlainString(util.t.ZU5x5w, { slotCount: slots.length });
  obj8.onPress = function onPress() {
    require(false);
  };
  obj8.loading = isModifyingSubscription;
  obj7.children = closure_1_19(components_Button_Button.Button, obj8);
  items[5] = closure_1_19(React5, obj7);
  obj.children = items;
  return closure_1_20(__initData, obj);
}
function TransferConfirmation(previousGuildSubscriptionSlots) {
  const prop = previousGuildSubscriptionSlots.previousGuildSubscriptionSlots;
  const onPremiumGuildSubscribe = previousGuildSubscriptionSlots.onPremiumGuildSubscribe;
  ({ guild, isModifyingSubscription } = previousGuildSubscriptionSlots);
  const tmp = closure_22();
  const guildSubscriptionRemovalSource = prop(13984).useGuildSubscriptionRemovalSource();
  const obj = prop(13984);
  const items = [GuildStore];
  const stateFromStores = prop(504).useStateFromStores(items, () => {
    const found = prop.find((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
    let guildId;
    if (found != null) {
      const premiumGuildSubscription = found.premiumGuildSubscription;
      if (premiumGuildSubscription != null) {
        guildId = premiumGuildSubscription.guildId;
      }
    }
    return GuildStore.getGuild(guildId);
  });
  if (null == stateFromStores) {
    const obj3 = { style: tmp.loading };
    let tmp8 = closure_19(closure_5, obj3);
  } else {
    const obj4 = { children: null };
    const obj5 = { style: tmp.transferImage, source: guildSubscriptionRemovalSource };
    const items1 = [closure_19(closure_6, obj5), , , , , ];
    const obj6 = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1115).intl;
    obj6.children = intl.string(tmp2(1115).t.h92jfS);
    items1[1] = closure_19(tmp2(4825).Text, obj6);
    const obj7 = { style: tmp.blurb, variant: "text-sm/medium", children: null };
    const intl2 = tmp2(1115).intl;
    const obj8 = { slotCount: prop.length, guildCount: 1 };
    obj7.children = intl2.format(tmp2(1115).t.SSA2lu, obj8);
    items1[2] = closure_19(tmp2(4825).Text, obj7);
    const obj9 = { style: tmp.transferPreviews, children: null };
    const obj10 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default", children: null };
    const intl3 = tmp2(1115).intl;
    obj10.children = intl3.format(tmp2(1115).t["5zQYEz"], { guildCount: 1 });
    const items2 = [closure_19(tmp2(4825).Text, obj10), , , ];
    const obj11 = { style: tmp.guildPreview, guild: stateFromStores };
    items2[1] = closure_19(onPremiumGuildSubscribe(13975), obj11);
    const obj12 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default", children: null };
    const intl4 = tmp2(1115).intl;
    const obj13 = { slotCount: prop.length };
    obj12.children = intl4.format(tmp2(1115).t.ct6oxD, obj13);
    items2[2] = closure_19(tmp2(4825).Text, obj12);
    const obj14 = { style: null, start: null, end: null, colors: null, children: null };
    const items3 = [, ];
    ({ guildPreview: arr5[0], activeTransferGuildCardBorder: arr5[1] } = tmp);
    obj14.style = items3;
    obj14.start = tmp2(1094).HorizontalGradient.START;
    obj14.end = tmp2(1094).HorizontalGradient.END;
    obj14.colors = Gradients.PREMIUM_GUILD;
    const obj15 = { guild };
    obj14.children = closure_19(onPremiumGuildSubscribe(13975), obj15);
    items2[3] = closure_19(onPremiumGuildSubscribe(5285), obj14);
    obj9.children = items2;
    items1[3] = closure_20(closure_7, obj9);
    const obj16 = { slots: prop };
    items1[4] = closure_19(PendingCancellationWarning, obj16);
    const obj17 = { style: tmp.confirmButton, children: null };
    const obj18 = { variant: "primary", text: null, onPress: null, loading: null };
    const intl5 = tmp2(1115).intl;
    const obj19 = { slotCount: prop.length };
    obj18.text = intl5.formatToPlainString(tmp2(1115).t.Oh6mxU, obj19);
    obj18.onPress = function onPress() {
      return onPremiumGuildSubscribe(true);
    };
    obj18.loading = isModifyingSubscription;
    obj17.children = closure_19(tmp2(5273).Button, obj18);
    items1[5] = closure_19(closure_7, obj17);
    obj4.children = items1;
    tmp8 = closure_20(closure_21, obj4);
    const tmp15 = onPremiumGuildSubscribe(5285);
  }
  return tmp8;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, View: closure_7, ScrollView: closure_8, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: map1, AnalyticsObjects: closure_14, AnalyticsSections: closure_15, GUILD_BOOST_APPLY_COOLDOWN_DAYS: closure_16 } = Constants);
const Gradients = fn(7762).Gradients;
const BoostPurchaseIntent = fn(4718).BoostPurchaseIntent;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { content: { paddingHorizontal: 24, marginBottom: 24 }, scrollableContent: { alignItems: "center", width: "100%" }, subscribeImage: { marginTop: 105, alignSelf: "center" }, transferImage: { marginTop: 65, alignSelf: "center" }, header: { marginTop: 32, marginBottom: 8 }, transferPreviews: { marginTop: 16, width: "100%" }, previewHeader: { lineHeight: 16, marginTop: 16, letterSpacing: 0.2 }, guildPreview: { marginTop: 8, width: "100%" }, blurb: { lineHeight: 18, textAlign: "center" }, warning: { marginTop: 16 }, pendingCancellation: null, pendingCancellationMessage: null, pendingCancellationIcon: null, loading: null, confirmButton: null, activeTransferGuildCardBorder: null };
let obj3 = { marginTop: 16, padding: 16, backgroundColor: null, alignItems: "center", flexDirection: "row", borderRadius: null, borderColor: null, borderWidth: null, width: "100%" };
const ColorUtils = fn(4678);
obj3.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.YELLOW_300, 0.1);
obj3.borderRadius = nativeDefault.radii.xs;
obj3.borderColor = nativeDefault.unsafe_rawColors.YELLOW_300;
obj3.borderWidth = StyleSheet.hairlineWidth;
obj2.pendingCancellation = obj3;
obj2.pendingCancellationMessage = { marginLeft: 10, flexShrink: 1 };
obj2.pendingCancellationIcon = { flexShrink: 0, width: 20, height: 20 };
obj2.loading = { marginTop: 32 };
obj2.confirmButton = { marginTop: 32, width: "100%" };
obj2.activeTransferGuildCardBorder = { padding: 2, borderRadius: nativeDefault.radii.xs };
let closure_22 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx");

export default function SubscribeModalConfirmation(arg0) {
  ({ guildId: require, guildBoostSlots: importDefault, location: _location } = arg0);
  ({ intent: asyncGeneratorStep, onResult: noop } = arg0);
  closure_8 = async function _handleSubscribe(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let tmp32 = tmp3;
            let everyResult = stateFromStoresArray.length > 0;
            if (everyResult) {
              everyResult = stateFromStoresArray.every((cooldownEndsAt) => {
                let tmp = null == cooldownEndsAt.cooldownEndsAt;
                if (!tmp) {
                  const _Date = Date;
                  const date = new Date(cooldownEndsAt.cooldownEndsAt);
                  const _Date2 = Date;
                  tmp = date.valueOf() < Date.now();
                  const valueOfResult = date.valueOf();
                }
                return tmp;
              });
            }
            tmp3(tmp32[27])(everyResult, "Cannot use a premium guild subscription slot while on cooldown");
            c4 = 1;
            if (closure_0) {
              c5 = 2;
              c6 = 1;
              const obj5 = {
                value: Promise.all(stateFromStoresArray.map((premiumGuildSubscription) => {
                            premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
                            if (null != premiumGuildSubscription) {
                              let unapplyFromGuildResult = closure_1_0(paths[28]).unapplyFromGuild(premiumGuildSubscription.guildId, premiumGuildSubscription.id);
                              const obj = closure_1_0(paths[28]);
                            } else {
                              unapplyFromGuildResult = Promise.resolve();
                            }
                            return unapplyFromGuildResult;
                          })),
                done: false
              };
              return obj5;
            }
            const tmp59 = tmp3(tmp32[27]);
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            if (closure_130_4 != null) {
              closure_130_4(false);
            }
            const obj6 = { title: null, body: null };
            const intl = closure_0(tmp32[18]).intl;
            obj6.title = intl.string(closure_0(tmp32[18]).t.Kx5W0V);
            const intl2 = closure_0(tmp32[18]).intl;
            tmp32 = closure_0;
            obj6.body = intl2.string(closure_0(tmp32[18]).t.XueBVY);
            tmp3(tmp32[29]).show(obj6);
            c6 = 3;
            const obj7 = tmp3(tmp32[29]);
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (closure_130_4 != null) {
              closure_130_4(true);
            }
            const obj10 = {
              importer() {
                        return guildId(paths[31])(paths[30], paths.paths).then((result) => {
                          closure_0 = result.default;
                          return (arg0) => {
                            const obj = {};
                            const merged = Object.assign(arg0);
                            obj.guildId = guildId;
                            obj.guildBoostSlots = guildBoostSlots;
                            return closure_3_19(closure_0, obj);
                          };
                        });
                      },
              isDismissable: false
            };
            tmp3(tmp32[29]).openLazy(obj10);
            let obj = tmp3(tmp32[29]);
            const obj11 = { type: constants3.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL, location_object: constants2.BUTTON_CTA };
            tmp3(tmp32[25]).track(constants.MODAL_DISMISSED, obj11);
            c4 = 0;
            const obj3 = tmp3(tmp32[25]);
          }
          c4 = 0;
          c6 = 3;
          const obj12 = { value, done: true };
          return obj12;
        }
        c5 = 3;
        c6 = 1;
        const obj13 = { value: closure_0(tmp32[28]).applyToGuild(closure_130_6.id, closure_130_7.map((id) => id.id), closure_130_3 === constants4.PERK), done: false };
        return obj13;
      } catch (tmp46) {
        closure_3 = tmp46;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp46;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  let tmp = closure_22();
  const ref = noop.useRef(_location);
  let items = [_location];
  const effect = noop.useEffect(() => {
    closure_5.current = _location;
  }, items);
  const effect1 = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: constants2.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL, location: ref.current });
  }, []);
  require("useFetchGuildBoostSlots")();
  let items1 = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(require));
  let obj = require("initialize");
  const items2 = [AppliedGuildBoostStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => AppliedGuildBoostStore.isModifyingAppliedBoost);
  let obj2 = require("initialize");
  const items3 = [GuildBoostSlotStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items3, () => {
    if (null != importDefault) {
      if (importDefault.length > 0) {
        return importDefault;
      }
    }
    if (GuildBoostSlotStore.hasFetched) {
      const _Object = Object;
      const values = Object.values(tmp.boostSlots);
      const found = values.filter((isAvailable) => isAvailable.isAvailable());
      let sorted = found.sort((subscription) => {
        let num = -1;
        if (obj.isGuildBoostSlotCanceled(subscription)) {
          num = 1;
        }
        return num;
      });
    } else {
      sorted = [];
    }
    if (sorted.length > 0) {
      const items = [sorted[0]];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
  if (0 === stateFromStoresArray.length) {
    let obj4 = { style: tmp.loading };
    let tmp14Result2 = closure_19(ref, obj4);
  } else {
    function handleSubscribe() {
      const self = this;
      const apply = closure_8.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let obj5 = { contentContainerStyle: null, style: null, children: null };
    ({ scrollableContent: obj8.contentContainerStyle, content: obj8.style } = tmp);
    if (tmp7) {
      let obj6 = { guild: stateFromStores, onPremiumGuildSubscribe: handleSubscribe, previousGuildSubscriptionSlots: stateFromStoresArray, isModifyingSubscription: stateFromStores1 };
      let tmp14Result = closure_19(TransferConfirmation, obj6);
    } else {
      let obj7 = { guild: stateFromStores, slots: stateFromStoresArray, isModifyingSubscription: stateFromStores1, onPremiumGuildSubscribe: handleSubscribe };
      tmp14Result = closure_19(SubscribeConfirmation, obj7);
    }
    let obj13 = { children: null };
    obj5.children = tmp14Result;
    obj13.children = closure_19(closure_8, obj5);
    tmp14Result2 = closure_19(stateFromStoresArray, obj13);
  }
  return tmp14Result2;
};