// discord_app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import GuildBoostingUtils from "../../../utils/GuildBoostingUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import _modDef5597 from "../../../../_runtime/metro/05597__.js";
import _modDef13607 from "../../../../_runtime/metro/13607__.js";
import PremiumGuildPreviewDefault from "PremiumGuildPreview.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AppliedGuildBoostStore from "../../../stores/AppliedGuildBoostStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildBoostSlotStore from "../../../stores/billing/GuildBoostSlotStore.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";

require = fn;
function PendingCancellationWarning(slots) {
  slots = slots.slots;
  const tmp = closure_22();
  let obj = initialize;
  const items = [SubscriptionStore];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const found = slots.filter((item) => GuildBoostingUtils.isGuildBoostSlotCanceled(item));
  let tmp5 = null;
  if (0 !== found.length) {
    tmp5 = null;
    if (null != stateFromStores) {
      obj = { style: tmp.pendingCancellation, children: null };
      obj = { style: tmp.pendingCancellationIcon, source: _modDef5597 };
      const items1 = [closure_1_19(timestampProducer, obj)];
      const obj1 = { style: tmp.pendingCancellationMessage, variant: "text-sm/medium", children: null };
      const intl = util.intl;
      const obj2 = { date: stateFromStores.currentPeriodEnd, canceledCount: found.length };
      obj1.children = intl.format(util.t.SFpsCH, obj2);
      items1[1] = closure_1_19(Text_Text.Text, obj1);
      obj.children = items1;
      tmp5 = closure_1_20(React5, obj);
    }
  }
  return tmp5;
}
function SubscribeConfirmation(arg0) {
  ({ slots, onPremiumGuildSubscribe: require } = arg0);
  ({ guild, isModifyingSubscription } = arg0);
  const tmp = closure_22();
  let obj = { children: null };
  obj = { style: tmp.subscribeImage, source: _modDef13607 };
  const items = [closure_1_19(timestampProducer, obj), , , , ,];
  obj = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.yTlZV0);
  items[1] = closure_1_19(Text_Text.Text, obj);
  items[2] = closure_1_19(PremiumGuildPreviewDefault, { style: tmp.guildPreview, guild });
  const obj2 = { style: null, variant: "text-sm/medium", children: null };
  const items1 = [,];
  ({ blurb: arr2[0], warning: arr2[1] } = tmp);
  obj2.style = items1;
  const intl2 = util.intl;
  obj2.children = intl2.format(util.t.KPnDlu, { days, slotCount: slots.length });
  items[3] = closure_1_19(Text_Text.Text, obj2);
  items[4] = closure_1_19(PendingCancellationWarning, { slots });
  const obj4 = { style: tmp.confirmButton, children: null };
  const obj5 = { variant: "primary", text: null, onPress: null, loading: null };
  const intl3 = util.intl;
  obj5.text = intl3.formatToPlainString(util.t.ZU5x5w, { slotCount: slots.length });
  obj5.onPress = function onPress() {
    require(false);
  };
  obj5.loading = isModifyingSubscription;
  obj4.children = closure_1_19(components_Button_Button.Button, obj5);
  items[5] = closure_1_19(React5, obj4);
  obj.children = items;
  return closure_1_20(__initData, obj);
}
function TransferConfirmation(previousGuildSubscriptionSlots) {
  const prop = previousGuildSubscriptionSlots.previousGuildSubscriptionSlots;
  const onPremiumGuildSubscribe = previousGuildSubscriptionSlots.onPremiumGuildSubscribe;
  ({ guild, isModifyingSubscription } = previousGuildSubscriptionSlots);
  const tmp = closure_22();
  let obj = prop(13617);
  const guildSubscriptionRemovalSource = obj.useGuildSubscriptionRemovalSource();
  let obj1 = prop(504);
  const items = [GuildStore];
  const stateFromStores = obj1.useStateFromStores(items, () => {
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
    obj = { style: tmp.loading };
    let tmp8 = closure_19(closure_5, obj);
  } else {
    obj = { children: null };
    obj1 = { style: tmp.transferImage, source: guildSubscriptionRemovalSource };
    const items1 = [closure_19(closure_6, obj1), , , , ,];
    const obj2 = {
      style: tmp.header,
      variant: "heading-lg/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl = tmp2(1114).intl;
    obj2.children = intl.string(tmp2(1114).t.h92jfS);
    items1[1] = closure_19(tmp2(4556).Text, obj2);
    const obj3 = { style: tmp.blurb, variant: "text-sm/medium", children: null };
    const intl2 = tmp2(1114).intl;
    const obj4 = { slotCount: prop.length, guildCount: 1 };
    obj3.children = intl2.format(tmp2(1114).t.SSA2lu, obj4);
    items1[2] = closure_19(tmp2(4556).Text, obj3);
    const obj5 = { style: tmp.transferPreviews, children: null };
    const obj6 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default", children: null };
    const intl3 = tmp2(1114).intl;
    obj6.children = intl3.format(tmp2(1114).t["5zQYEz"], { guildCount: 1 });
    const items2 = [closure_19(tmp2(4556).Text, obj6), , ,];
    const obj7 = { style: tmp.guildPreview, guild: stateFromStores };
    items2[1] = closure_19(onPremiumGuildSubscribe(13608), obj7);
    const obj8 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default", children: null };
    const intl4 = tmp2(1114).intl;
    const obj9 = { slotCount: prop.length };
    obj8.children = intl4.format(tmp2(1114).t.ct6oxD, obj9);
    items2[2] = closure_19(tmp2(4556).Text, obj8);
    const obj10 = { style: null, start: null, end: null, colors: null, children: null };
    const items3 = [,];
    ({ guildPreview: arr5[0], activeTransferGuildCardBorder: arr5[1] } = tmp);
    obj10.style = items3;
    obj10.start = tmp2(1093).HorizontalGradient.START;
    obj10.end = tmp2(1093).HorizontalGradient.END;
    obj10.colors = Gradients.PREMIUM_GUILD;
    const obj11 = { guild };
    obj10.children = closure_19(onPremiumGuildSubscribe(13608), obj11);
    items2[3] = closure_19(onPremiumGuildSubscribe(4987), obj10);
    obj5.children = items2;
    items1[3] = closure_20(closure_7, obj5);
    const obj12 = { slots: prop };
    items1[4] = closure_19(PendingCancellationWarning, obj12);
    const obj13 = { style: tmp.confirmButton, children: null };
    const obj14 = { variant: "primary", text: null, onPress: null, loading: null };
    const intl5 = tmp2(1114).intl;
    const obj15 = { slotCount: prop.length };
    obj14.text = intl5.formatToPlainString(tmp2(1114).t.Oh6mxU, obj15);
    obj14.onPress = function onPress() {
      return onPremiumGuildSubscribe(true);
    };
    obj14.loading = isModifyingSubscription;
    obj13.children = closure_19(tmp2(4975).Button, obj14);
    items1[5] = closure_19(closure_7, obj13);
    obj.children = items1;
    tmp8 = closure_20(closure_21, obj);
    const tmp15 = onPremiumGuildSubscribe(4987);
  }
  return tmp8;
}
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: hasOwnProperty,
  Image: metroRequire,
  View: closure_7,
  ScrollView: closure_8,
  StyleSheet,
} = get_ActivityIndicator);
const Constants = fn(1074);
({
  AnalyticEvents: map1,
  AnalyticsObjects: closure_14,
  AnalyticsSections: closure_15,
  GUILD_BOOST_APPLY_COOLDOWN_DAYS: closure_16,
} = Constants);
const Gradients = fn(7432).Gradients;
const BoostPurchaseIntent = fn(4450).BoostPurchaseIntent;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
fn(4560);
let createStyles = {
  content: { paddingHorizontal: 24, marginBottom: 24 },
  scrollableContent: { alignItems: "center", width: "100%" },
  subscribeImage: { marginTop: 105, alignSelf: "center" },
  transferImage: { marginTop: 65, alignSelf: "center" },
  header: { marginTop: 32, marginBottom: 8 },
  transferPreviews: { marginTop: 16, width: "100%" },
  previewHeader: { lineHeight: 16, marginTop: 16, letterSpacing: 0.2 },
  guildPreview: { marginTop: 8, width: "100%" },
  blurb: { lineHeight: 18, textAlign: "center" },
  warning: { marginTop: 16 },
  pendingCancellation: null,
  pendingCancellationMessage: null,
  pendingCancellationIcon: null,
  loading: null,
  confirmButton: null,
  activeTransferGuildCardBorder: null,
};
createStyles = {
  marginTop: 16,
  padding: 16,
  backgroundColor: null,
  alignItems: "center",
  flexDirection: "row",
  borderRadius: null,
  borderColor: null,
  borderWidth: null,
  width: "100%",
};
const ColorUtils = fn(4409);
createStyles.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.YELLOW_300, 0.1);
createStyles.borderRadius = nativeDefault.radii.xs;
createStyles.borderColor = nativeDefault.unsafe_rawColors.YELLOW_300;
createStyles.borderWidth = StyleSheet.hairlineWidth;
createStyles.pendingCancellation = createStyles;
createStyles.pendingCancellationMessage = { marginLeft: 10, flexShrink: 1 };
createStyles.pendingCancellationIcon = { flexShrink: 0, width: 20, height: 20 };
createStyles.loading = { marginTop: 32 };
createStyles.confirmButton = { marginTop: 32, width: "100%" };
createStyles.activeTransferGuildCardBorder = { padding: 2, borderRadius: nativeDefault.radii.xs };
let closure_22 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx",
);

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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
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
              const obj1 = {
                value: Promise.all(
                  stateFromStoresArray.map((premiumGuildSubscription) => {
                    premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
                    if (null != premiumGuildSubscription) {
                      let unapplyFromGuildResult = closure_1_0(paths[28]).unapplyFromGuild(
                        premiumGuildSubscription.guildId,
                        premiumGuildSubscription.id,
                      );
                      const obj = closure_1_0(paths[28]);
                    } else {
                      unapplyFromGuildResult = Promise.resolve();
                    }
                    return unapplyFromGuildResult;
                  }),
                ),
                done: false,
              };
              return obj1;
            }
            const tmp59 = tmp3(tmp32[27]);
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            if (closure_130_4 != null) {
              closure_130_4(false);
            }
            let obj6 = tmp3(tmp32[29]);
            let obj2 = { title: null, body: null };
            const intl = closure_0(tmp32[18]).intl;
            obj2.title = intl.string(closure_0(tmp32[18]).t.Kx5W0V);
            const intl2 = closure_0(tmp32[18]).intl;
            tmp32 = closure_0;
            obj2.body = intl2.string(closure_0(tmp32[18]).t.XueBVY);
            obj6.show(obj2);
            c6 = 3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (closure_130_4 != null) {
              closure_130_4(true);
            }
            obj = tmp3(tmp32[29]);
            const obj4 = {
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
            };
            obj.openLazy(obj4);
            obj2 = tmp3(tmp32[25]);
            const obj5 = {
              type: constants3.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL,
              location_object: constants2.BUTTON_CTA,
            };
            obj2.track(constants.MODAL_DISMISSED, obj5);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          obj6 = { value, done: true };
          return obj6;
        }
        c5 = 3;
        c6 = 1;
        const obj7 = {
          value: closure_0(tmp32[28]).applyToGuild(
            closure_130_6.id,
            closure_130_7.map((id) => id.id),
            closure_130_3 === constants4.PERK,
          ),
          done: false,
        };
        return obj7;
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
    const obj = { type: constants2.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL, location: ref.current };
    obj.track(constants.OPEN_MODAL, obj);
  }, []);
  require("useFetchGuildBoostSlots")();
  let obj = require("initialize");
  let items1 = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items1, () => GuildStore.getGuild(require));
  let obj1 = require("initialize");
  const items2 = [AppliedGuildBoostStore];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => AppliedGuildBoostStore.isModifyingAppliedBoost);
  let obj2 = require("initialize");
  const items3 = [GuildBoostSlotStore];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items3, () => {
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
    obj = { style: tmp.loading };
    let tmp14Result = closure_19(ref, obj);
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
    obj = { contentContainerStyle: null, style: null, children: null };
    ({ scrollableContent: obj8.contentContainerStyle, content: obj8.style } = tmp);
    if (tmp7) {
      obj1 = {
        guild: stateFromStores,
        onPremiumGuildSubscribe: handleSubscribe,
        previousGuildSubscriptionSlots: stateFromStoresArray,
        isModifyingSubscription: stateFromStores1,
      };
      tmp14Result = closure_19(TransferConfirmation, obj1);
    } else {
      obj2 = {
        guild: stateFromStores,
        slots: stateFromStoresArray,
        isModifyingSubscription: stateFromStores1,
        onPremiumGuildSubscribe: handleSubscribe,
      };
      tmp14Result = closure_19(SubscribeConfirmation, obj2);
    }
    let obj3 = { children: null };
    obj.children = tmp14Result;
    obj3.children = closure_19(closure_8, obj);
    tmp14Result = closure_19(stateFromStoresArray, obj3);
  }
  return tmp14Result;
}
