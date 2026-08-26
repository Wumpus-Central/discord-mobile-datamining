// discord_app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import registerAssetDefault from "../../../../_runtime/08670_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/13156_registerAsset.js";
import PremiumGuildTierPillDefault from "PremiumGuildPreview.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_9 from "../../../stores/AppliedGuildBoostStore.tsx";
import closure_10 from "../../../stores/GuildStore.tsx";
import closure_11 from "../../../stores/billing/GuildBoostSlotStore.tsx";
import closure_12 from "../../../stores/billing/SubscriptionStore.tsx";
import ME from "../../../Constants.tsx";
import { Gradients } from "../../../modules/colors/native/ColorConstants.tsx";
import { BoostPurchaseIntent } from "../../../modules/premium/powerups/constants/GuildPowerupsConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import hexToRgba from "../../../utils/ColorUtils.tsx";

require = arg1;
function PendingCancellationWarning(slots) {
  slots = slots.slots;
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const found = slots.filter((subscription) => callback(table[15]).isGuildBoostSlotCanceled(subscription));
  let tmp5 = null;
  if (0 !== found.length) {
    tmp5 = null;
    if (null != stateFromStores) {
      obj = { style: null, children: null };
      obj[0] = tmp.pendingCancellation;
      obj = { style: null, source: null };
      obj[0] = tmp.pendingCancellationIcon;
      obj[1] = registerAssetDefault;
      const items1 = [callback(closure_6, obj), ];
      obj1 = { style: null, variant: "text-sm/medium", children: null };
      obj1[0] = tmp.pendingCancellationMessage;
      const intl = tmp2(1236).intl;
      const obj2 = { date: null, canceledCount: null };
      obj2[0] = stateFromStores.currentPeriodEnd;
      obj2[1] = found.length;
      obj1[2] = intl.format(tmp2(1236).t.SFpsCH, obj2);
      items1[1] = callback(tmp2(4440).Text, obj1);
      obj[1] = items1;
      tmp5 = callback2(closure_7, obj);
    }
  }
  return tmp5;
}
function SubscribeConfirmation(arg0) {
  ({ slots, onPremiumGuildSubscribe: require } = arg0);
  ({ guild, isModifyingSubscription } = arg0);
  const tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.subscribeImage, source: registerAssetDefault2 };
  const items = [callback(closure_6, obj), , , , , ];
  obj = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.yTlZV0);
  items[1] = callback(Text.Text, obj);
  items[2] = callback(PremiumGuildTierPillDefault, { style: tmp.guildPreview, guild });
  const obj2 = { style: items1, variant: "text-sm/medium", children: null };
  items1 = [, ];
  ({ blurb: arr2[0], warning: arr2[1] } = tmp);
  const intl2 = getSystemLocale.intl;
  obj2[2] = intl2.format(getSystemLocale.t.KPnDlu, { days: closure_16, slotCount: slots.length });
  items[3] = callback(Text.Text, obj2);
  items[4] = callback(PendingCancellationWarning, { slots });
  const obj4 = { style: tmp.confirmButton, children: null };
  const obj5 = { variant: "primary", text: null, onPress: null, loading: null };
  const intl3 = getSystemLocale.intl;
  obj5[1] = intl3.formatToPlainString(getSystemLocale.t.ZU5x5w, { slotCount: slots.length });
  obj5[2] = function onPress() {
    callback(false);
  };
  obj5[3] = isModifyingSubscription;
  obj4[1] = callback(Button.Button, obj5);
  items[5] = callback(closure_7, obj4);
  obj[0] = items;
  return callback2(closure_21, obj);
}
function TransferConfirmation(previousGuildSubscriptionSlots) {
  const prop = previousGuildSubscriptionSlots.previousGuildSubscriptionSlots;
  const onPremiumGuildSubscribe = previousGuildSubscriptionSlots.onPremiumGuildSubscribe;
  ({ guild, isModifyingSubscription } = previousGuildSubscriptionSlots);
  const tmp = callback3();
  let obj = prop(13166);
  const guildSubscriptionRemovalSource = obj.useGuildSubscriptionRemovalSource();
  obj1 = prop(589);
  const items = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const found = prop.find((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
    let guildId;
    if (found != null) {
      const premiumGuildSubscription = found.premiumGuildSubscription;
      if (premiumGuildSubscription != null) {
        guildId = premiumGuildSubscription.guildId;
      }
    }
    return closure_1_10.getGuild(guildId);
  });
  if (null == stateFromStores) {
    obj = { style: null };
    obj[0] = tmp.loading;
    let tmp8 = callback(closure_5, obj);
  } else {
    obj = { children: null };
    obj1 = { style: null, source: null };
    obj1[0] = tmp.transferImage;
    obj1[1] = guildSubscriptionRemovalSource;
    const items1 = [callback(closure_6, obj1), , , , , ];
    const obj2 = { style: null, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
    obj2[0] = tmp.header;
    const intl = tmp2(1236).intl;
    obj2[3] = intl.string(tmp2(1236).t.h92jfS);
    items1[1] = callback(tmp2(4440).Text, obj2);
    const obj3 = { style: null, variant: "text-sm/medium", children: null };
    obj3[0] = tmp.blurb;
    const intl2 = tmp2(1236).intl;
    const obj4 = { slotCount: null, guildCount: 1 };
    obj4[0] = prop.length;
    obj3[2] = intl2.format(tmp2(1236).t.SSA2lu, obj4);
    items1[2] = callback(tmp2(4440).Text, obj3);
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.transferPreviews;
    const obj6 = { style: null, variant: "eyebrow", color: "text-default", children: null };
    obj6[0] = tmp.previewHeader;
    const intl3 = tmp2(1236).intl;
    obj6[3] = intl3.format(tmp2(1236).t["5zQYEz"], { guildCount: 1 });
    const items2 = [callback(tmp2(4440).Text, obj6), , , ];
    const obj7 = { style: null, guild: null };
    obj7[0] = tmp.guildPreview;
    obj7[1] = stateFromStores;
    items2[1] = callback(onPremiumGuildSubscribe(13157), obj7);
    const obj8 = { style: null, variant: "eyebrow", color: "text-default", children: null };
    obj8[0] = tmp.previewHeader;
    const intl4 = tmp2(1236).intl;
    const obj9 = { slotCount: null };
    obj9[0] = prop.length;
    obj8[3] = intl4.format(tmp2(1236).t.ct6oxD, obj9);
    items2[2] = callback(tmp2(4440).Text, obj8);
    const obj10 = { style: null, start: null, end: null, colors: null, children: null };
    const items3 = [, ];
    ({ guildPreview: arr5[0], activeTransferGuildCardBorder: arr5[1] } = tmp);
    obj10[0] = items3;
    obj10[1] = tmp2(691).HorizontalGradient.START;
    obj10[2] = tmp2(691).HorizontalGradient.END;
    obj10[3] = Gradients.PREMIUM_GUILD;
    const obj11 = { guild: null };
    obj11[0] = guild;
    obj10[4] = callback(onPremiumGuildSubscribe(13157), obj11);
    items2[3] = callback(onPremiumGuildSubscribe(4891), obj10);
    obj5[1] = items2;
    items1[3] = callback2(closure_7, obj5);
    const obj12 = { slots: null };
    obj12[0] = prop;
    items1[4] = callback(PendingCancellationWarning, obj12);
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.confirmButton;
    const obj14 = { variant: "primary", text: null, onPress: null, loading: null };
    const intl5 = tmp2(1236).intl;
    const obj15 = { slotCount: null };
    obj15[0] = prop.length;
    obj14[1] = intl5.formatToPlainString(tmp2(1236).t.Oh6mxU, obj15);
    obj14[2] = function onPress() {
      return onPremiumGuildSubscribe(true);
    };
    obj14[3] = isModifyingSubscription;
    obj13[1] = callback(tmp2(4879).Button, obj14);
    items1[5] = callback(closure_7, obj13);
    obj[0] = items1;
    tmp8 = callback2(closure_21, obj);
    const tmp15 = onPremiumGuildSubscribe(4891);
  }
  return tmp8;
}
({ ActivityIndicator: c5, Image: closure_6, View: error, ScrollView: closure_8, StyleSheet } = get_ActivityIndicator);
({ AnalyticEvents: map1, AnalyticsObjects: closure_14, AnalyticsSections: closure_15, GUILD_BOOST_APPLY_COOLDOWN_DAYS: closure_16 } = ME);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
createCacheKey = { content: { paddingHorizontal: 24, marginBottom: 24 }, scrollableContent: { alignItems: "center", width: "100%" }, subscribeImage: { marginTop: 105, alignSelf: "center" }, transferImage: { marginTop: 65, alignSelf: "center" }, header: { marginTop: 32, marginBottom: 8 }, transferPreviews: { marginTop: 16, width: "100%" }, previewHeader: { lineHeight: 16, marginTop: 16, letterSpacing: 0.2 }, guildPreview: { marginTop: 8, width: "100%" }, blurb: { lineHeight: 18, textAlign: "center" }, warning: { marginTop: 16 }, pendingCancellation: null, pendingCancellationMessage: null, pendingCancellationIcon: null, loading: null, confirmButton: null, activeTransferGuildCardBorder: null };
createCacheKey = { marginTop: 16, padding: 16, backgroundColor: null, alignItems: "center", flexDirection: "row", borderRadius: null, borderColor: null, borderWidth: null, width: "100%" };
createCacheKey[2] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.YELLOW_300, 0.1);
createCacheKey[5] = ThemesDefault.radii.xs;
createCacheKey[6] = ThemesDefault.unsafe_rawColors.YELLOW_300;
createCacheKey[7] = StyleSheet.hairlineWidth;
createCacheKey[10] = createCacheKey;
createCacheKey[11] = { marginLeft: 10, flexShrink: 1 };
createCacheKey[12] = { flexShrink: 0, width: 20, height: 20 };
createCacheKey[13] = { marginTop: 32 };
createCacheKey[14] = { marginTop: 32, width: "100%" };
createCacheKey[15] = { padding: 2, borderRadius: ThemesDefault.radii.xs };
let closure_22 = createCacheKey.createStyles(createCacheKey);
let obj1 = { padding: 2, borderRadius: ThemesDefault.radii.xs };
const result = require("set").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx");

export default function SubscribeModalConfirmation(arg0) {
  ({ guildId: require, guildBoostSlots: importDefault, location: _location } = arg0);
  ({ intent: closure_3, onResult: closure_4 } = arg0);
  closure_5 = undefined;
  let stateFromStores;
  let stateFromStoresArray;
  function _handleSubscribe() {
    const self = this;
    let tmp = closure_1_3((arg0) => {
      closure_0 = arg0;
      c5 = 0;
      c6 = 0;
      c4 = 0;
      return (function*(arg0) {
        if (id === 2) {
          id = 3;
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
            id = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                id = 3;
                throw arg1;
              } else if (arg0 === 2) {
                id = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp3;
                closure_1 = tmp3;
                let everyResult = closure_1_7.length > 0;
                if (everyResult) {
                  everyResult = closure_1_7.every((cooldownEndsAt) => {
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
                closure_1_1(closure_1_2[27])(everyResult, "Cannot use a premium guild subscription slot while on cooldown");
                let v0 = 1;
                if (tmp57) {
                  c5 = 2;
                  id = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = Promise.all(closure_1_7.map((premiumGuildSubscription) => {
                    premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
                    if (null != premiumGuildSubscription) {
                      let unapplyFromGuildResult = callback(callback[28]).unapplyFromGuild(premiumGuildSubscription.guildId, premiumGuildSubscription.id);
                      const obj = callback(callback[28]);
                    } else {
                      unapplyFromGuildResult = Promise.resolve();
                    }
                    return unapplyFromGuildResult;
                  }));
                  return obj1;
                }
                tmp57 = callback;
                const tmp60 = closure_1_1(closure_1_2[27]);
              }
            } else {
              if (1 === tmp7) {
                v0 = 0;
                if (v0 != null) {
                  v0(false);
                }
                let obj6 = closure_1_1(closure_1_2[29]);
                let obj2 = { title: null, body: null };
                const intl = callback(closure_1_2[18]).intl;
                obj2[0] = intl.string(callback(closure_1_2[18]).t.Kx5W0V);
                const intl2 = callback(closure_1_2[18]).intl;
                obj2[1] = intl2.string(callback(closure_1_2[18]).t.XueBVY);
                obj6.show(obj2);
                id = 3;
              } else if (2 === tmp7) {
                if (arg0 === 1) {
                  id = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 0;
                  id = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                }
              } else if (arg0 === 1) {
                id = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                if (v0 != null) {
                  v0(true);
                }
                obj = closure_1_1(closure_1_2[29]);
                const obj4 = { importer: null };
                obj4[0] = function importer() {
                  return closure_1_0(tmp3[31])(tmp3[30], tmp3.paths).then(() => { ... });
                };
                obj.openLazy(obj4);
                obj2 = closure_1_1(closure_1_2[25]);
                const obj5 = { type: null, location_object: null };
                obj5[0] = closure_1_15.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL;
                obj5[1] = closure_1_14.BUTTON_CTA;
                obj2.track(closure_1_13.MODAL_DISMISSED, obj5);
                v0 = 0;
              }
              v0 = 0;
              id = 3;
              obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            }
            c5 = 3;
            id = 1;
            const obj7 = { value: null, done: false };
            obj7[0] = callback(closure_1_2[28]).applyToGuild(id.id, closure_7.map((id) => id.id), closure_3 === closure_1_18.PERK);
            return obj7;
          } catch (tmp46) {
            closure_3 = tmp46;
            if (tmp4 === v0) {
              id = tmp2;
              throw tmp46;
            } else {
              c5 = tmp;
            }
          }
        }
      })();
    });
    closure_8 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback3();
  closure_5 = React.useRef(_location);
  let items = [_location];
  const effect = React.useEffect(() => {
    closure_5.current = _location;
  }, items);
  const effect1 = React.useEffect(() => {
    let obj = closure_1_1(_location[25]);
    obj = { type: closure_1_15.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL, location: ref.current };
    obj.track(closure_1_13.OPEN_MODAL, obj);
  }, []);
  importDefault(_location[26])();
  let obj = require(_location[14]);
  let items1 = [closure_10];
  stateFromStores = obj.useStateFromStores(items1, () => closure_1_10.getGuild(closure_0));
  obj1 = require(_location[14]);
  const items2 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => obj.isModifyingAppliedBoost);
  let obj2 = require(_location[14]);
  const items3 = [closure_11];
  stateFromStoresArray = obj2.useStateFromStoresArray(items3, () => {
    if (null != closure_1) {
      if (arr.length > 0) {
        return arr;
      }
    }
    if (closure_1_11.hasFetched) {
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
    obj = { style: null };
    obj[0] = tmp.loading;
    let tmp14Result = callback(closure_5, obj);
  } else {
    function handleSubscribe() {
      const self = this;
      const apply = _handleSubscribe.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    obj = { contentContainerStyle: null, style: null, children: null };
    ({ scrollableContent: obj8[0], content: obj8[1] } = tmp);
    if (tmp7) {
      obj1 = { guild: null, onPremiumGuildSubscribe: null, previousGuildSubscriptionSlots: null, isModifyingSubscription: null };
      obj1[0] = stateFromStores;
      obj1[1] = handleSubscribe;
      obj1[2] = stateFromStoresArray;
      obj1[3] = stateFromStores1;
      tmp14Result = tmp14(TransferConfirmation, obj1);
    } else {
      obj2 = { guild: null, slots: null, isModifyingSubscription: null, onPremiumGuildSubscribe: null };
      obj2[0] = stateFromStores;
      obj2[1] = stateFromStoresArray;
      obj2[2] = stateFromStores1;
      obj2[3] = handleSubscribe;
      tmp14Result = tmp14(SubscribeConfirmation, obj2);
    }
    let obj3 = { children: null };
    obj[2] = tmp14Result;
    obj3[0] = callback(_handleSubscribe, obj);
    tmp14Result = tmp14(stateFromStoresArray, obj3);
    const tmp15 = stateFromStoresArray;
    const tmp16 = _handleSubscribe;
  }
  return tmp14Result;
};