// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import getAvatarURLDefault from "../../../../utils/AvatarUtils.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import renderDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import getRoleEmojisAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import useRoleSubscriptionFormatDefault from "../../useRoleSubscriptionFormat.tsx";
import HeaderDefault from "GuildRoleSubscriptionTierEditStep.tsx";
import registerAssetDefault from "../../../../../_runtime/17745_registerAsset.js";
import EmojiAliasDefault from "EmojiAlias.tsx";
import itemsDefault from "../../useRoleSubscriptionEmojis.tsx";
import RowDefault from "AllChannelsSwitch.tsx";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { AllChannelAccessOptions } from "../../edit_state/GuildRoleSubscriptionEditStore.tsx";
import { useGroupIsFullGateState } from "../RoleTierEditStore.tsx";
import MAX_SUBSCRIPTION_TIERS from "../../GuildRoleSubscriptionsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { useEditStateContext } from "../../edit_state/EditStateContextProvider.tsx";
import { useFetchListingsForGuild } from "../../GuildRoleSubscriptionsHooks.tsx";

require = arg1;
function AddBenefitButton(disabled) {
  let flag = disabled.disabled;
  ({ label, onPress } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  const items = [tmp.card, ];
  disabled = flag;
  if (flag) {
    disabled = tmp.disabled;
  }
  let obj = { style: items, accessibilityRole: "button", accessibilityState: { disabled: flag }, onPress, disabled: flag, children: null };
  items[1] = disabled;
  obj = { source: null };
  const tmp2 = closure_13;
  const tmp5 = renderDefault;
  obj[0] = registerAssetDefault;
  const items1 = [callback(preloadDefault, obj), ];
  obj = { style: tmp.addBenefitLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
  items1[1] = callback(Text.Text, obj);
  obj[5] = items1;
  return tmp2(tmp5, obj);
}
function Separator() {
  return callback(closure_7, { style: callback3().separator });
}
function ItemSeparator() {
  const tmp = callback3();
  obj = { style: tmp.itemSeparatorContainer, children: callback(closure_7, obj) };
  obj = { style: tmp.itemSeparator };
  return callback(closure_7, obj);
}
function EmojiRowLabel(emoji) {
  emoji = emoji.emoji;
  let obj = { children: null };
  obj = { style: callback3().emojiImage, source: null };
  obj = { uri: null };
  const tmp = callback3();
  const tmp2 = preloadDefault;
  obj[0] = getAvatarURLDefault.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj[1] = obj;
  const items = [callback(tmp2, obj), callback(EmojiAliasDefault, { name: emoji.name })];
  obj[0] = items;
  return callback2(closure_14, obj);
}
function ListFooterSection(onChangeTrialInterval) {
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  let options;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp = callback3();
  const tmp4 = options(13898)();
  const tmp5 = options(15232)(interval);
  options = tmp5.options;
  const selectedOption = tmp5.selectedOption;
  const items = [onChangeTrialInterval, options];
  const callback = React.useCallback((arg0) => {
    const iter = options.find((isDefault) => isDefault.isDefault);
    let value = null;
    options(closure_1_3[18])(null != iter, "Missing default trial duartion option");
    if (arg0) {
      value = iter.value;
    }
    onChangeTrialInterval(value);
  }, items);
  let obj = onChangeTrialInterval(17724);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  obj = { style: tmp.listFooterContainer, children: null };
  obj = { label: null, value: null, onValueChange: null, disabled: null };
  const intl = onChangeTrialInterval(1114).intl;
  obj[0] = intl.string(onChangeTrialInterval(1114).t["+hTmdb"]);
  obj[1] = null != selectedOption;
  obj[2] = callback;
  obj[3] = roleSubscriptionSettingsDisabled;
  const items1 = [callback(onChangeTrialInterval(8593).FormSwitchRow, obj), ];
  if (null == selectedOption) {
    const disabledSection = tmp.disabledSection;
  }
  obj1 = { style: disabledSection, children: null };
  const obj2 = { style: items2, variant: "text-sm/medium", color: "text-default", children: null };
  items2 = [, ];
  ({ listFooterText: arr3[0], listFooterSubtitle: arr3[1] } = tmp);
  const intl2 = tmp8(1114).intl;
  obj2[3] = intl2.string(onChangeTrialInterval(1114).t.urVijS);
  const items3 = [callback(onChangeTrialInterval(4556).Text, obj2), , , , , , ];
  const obj3 = { style: tmp4.header, children: null };
  let tmp2Result = tmp2(9816);
  const intl3 = tmp8(1114).intl;
  obj3[1] = intl3.string(onChangeTrialInterval(1114).t.m1KuWd);
  items3[1] = callback(tmp2Result, obj3);
  const obj4 = { style: items4, variant: "text-sm/medium", color: "text-default", children: null };
  items4 = [, ];
  ({ listFooterSectionDescription: arr5[0], listFooterText: arr5[1] } = tmp);
  const intl4 = tmp8(1114).intl;
  obj4[3] = intl4.string(onChangeTrialInterval(1114).t.NB9NLF);
  items3[2] = callback(onChangeTrialInterval(4556).Text, obj4);
  const obj5 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: null };
  let tmp15 = !tmp7;
  let tmp16 = tmp15;
  tmp2Result = tmp2(17747);
  if (null != selectedOption) {
    tmp16 = roleSubscriptionSettingsDisabled;
  }
  obj5[3] = tmp16;
  items3[3] = callback(tmp2Result, obj5);
  const obj6 = { style: tmp4.header, children: null };
  const intl5 = tmp8(1114).intl;
  obj6[1] = intl5.string(onChangeTrialInterval(1114).t["/JD9oe"]);
  items3[4] = callback(options(9816), obj6);
  const obj7 = { style: items5, variant: "text-sm/medium", color: "text-default", children: null };
  items5 = [, ];
  ({ listFooterSectionDescription: arr6[0], listFooterText: arr6[1] } = tmp);
  const intl6 = tmp8(1114).intl;
  obj7[3] = intl6.string(onChangeTrialInterval(1114).t.Cg5eBm);
  items3[5] = callback(onChangeTrialInterval(4556).Text, obj7);
  const obj8 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: null };
  const tmp2Result1 = options(9816);
  if (null != selectedOption) {
    tmp15 = roleSubscriptionSettingsDisabled;
  }
  obj8[2] = tmp15;
  items3[6] = callback(options(17748), obj8);
  obj1[1] = items3;
  items1[1] = closure_13(closure_7, obj1);
  obj[1] = items1;
  return closure_13(closure_7, obj);
}
function Content(arg0) {
  let _require;
  importDefault = undefined;
  importAll = undefined;
  dependencyMap = undefined;
  let editStateId;
  let guildId;
  let role_id;
  let first;
  AllChannelAccessOptions = undefined;
  let first1;
  closure_10 = undefined;
  let first2;
  let callback;
  closure_13 = undefined;
  let roleSubscriptionSettingsDisabled;
  closure_16 = undefined;
  function addBenefit(ref_type) {
    closure_0 = ref_type;
    if (ref_type.ref_type === lib.CHANNEL) {
      callback3((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    } else {
      lib((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }
  function GuildRoleSubscriptionTierBenefitsModalHeader(type) {
    type = type.type;
    const obj = { style: callback2(13898)().header, children: null };
    const tmp2 = callback2(13898)();
    const tmp3 = closure_12;
    if (closure_16.CHANNEL === type) {
      const intl2 = callback(1114).intl;
      let stringResult = intl2.string(callback(1114).t.LtfhAj);
    } else if (tmp5.INTANGIBLE === type) {
      const intl = callback(1114).intl;
      stringResult = intl.string(callback(1114).t["8oxWpO"]);
    } else if (tmp5.EMOJI === type) {
      const intl3 = callback(1114).intl;
      stringResult = intl3.string(callback(1114).t.XBkDoA);
    }
    obj[1] = stringResult;
    return tmp3(callback2(9816), obj);
  }
  ({ onlyChannels, onlyIntangible } = arg0);
  const tmp = addBenefit();
  _require = tmp;
  importDefault = tmp2;
  importAll = tmp3;
  let tmp4 = tmp2;
  if (true !== onlyIntangible) {
    tmp4 = tmp3;
  }
  dependencyMap = tmp4;
  let obj = useEditStateContext;
  const editStateContext = obj.useEditStateContext();
  editStateId = editStateContext.editStateId;
  guildId = editStateContext.guildId;
  obj1 = useFetchListingsForGuild;
  const subscriptionListing = obj1.useSubscriptionListing(editStateId);
  role_id = undefined;
  if (subscriptionListing != null) {
    role_id = subscriptionListing.role_id;
  }
  if (role_id == null) {
    role_id = null;
  }
  const tmp11 = editStateId(getRoleEmojisAll.useChannelBenefits(editStateId), 2);
  first = tmp11[0];
  AllChannelAccessOptions = tmp11[1];
  let obj3 = getRoleEmojisAll;
  const tmp10 = importDefault;
  const tmp13 = editStateId(getRoleEmojisAll.useIntangibleBenefits(editStateId), 2);
  first1 = tmp13[0];
  closure_10 = tmp13[1];
  const obj4 = getRoleEmojisAll;
  const tmp15 = editStateId(getRoleEmojisAll.useTierEmojiIds(editStateId, guildId), 2);
  first2 = tmp15[0];
  callback = tmp15[1];
  const obj5 = getRoleEmojisAll;
  const obj6 = getRoleEmojisAll;
  [tmp18, tmp19] = editStateId(getRoleEmojisAll.useTrialInterval(editStateId), 2);
  const tmp17 = editStateId(getRoleEmojisAll.useTrialInterval(editStateId), 2);
  const obj7 = getRoleEmojisAll;
  [tmp21, tmp22] = editStateId(getRoleEmojisAll.useTrialLimit(editStateId), 2);
  const tmp20 = editStateId(getRoleEmojisAll.useTrialLimit(editStateId), 2);
  const tmp23 = editStateId(getRoleEmojisAll.useChannelAccessFormat(editStateId, guildId), 2);
  const first3 = tmp23[0];
  closure_13 = tmp25;
  const obj8 = getRoleEmojisAll;
  roleSubscriptionSettingsDisabled = require("../../RoleSubscriptionSettingsDisabledContext.tsx").useRoleSubscriptionSettingsDisabled();
  const tmp27 = itemsDefault(guildId);
  closure_16 = tmp27;
  let items = [first2, tmp27, true === onlyIntangible, first3 === AllChannelAccessOptions.ALL_CHANNELS_ACCESS, true === onlyChannels, tmp4, first, first1];
  let tmp29 = null;
  const memo = guildId.useMemo(() => {
    let tmp2 = closure_1;
    const found = closure_16.filter((id) => set.has(id.id));
    if (!closure_1) {
      tmp2 = closure_13;
    }
    const items = [];
    if (!tmp2) {
      let obj = { type: null, data: null };
      obj[0] = closure_16.CHANNEL;
      obj[1] = first;
      items.push(obj);
    }
    if (!closure_2) {
      obj = { type: null, data: null };
      obj[0] = closure_16.INTANGIBLE;
      obj[1] = first1;
      items.push(obj);
    }
    if (!closure_3) {
      obj = { type: null, data: null };
      obj[0] = closure_16.EMOJI;
      obj[1] = found;
      items.push(obj);
    }
    return items;
  }, items);
  if (true !== onlyIntangible) {
    tmp29 = null;
    if (!tmp3) {
      obj = { interval: null, onChangeTrialInterval: null, trialActiveUserLimit: null, onChangeTrialActiveUserLimit: null };
      obj[0] = tmp18;
      obj[1] = tmp19;
      obj[2] = tmp21;
      obj[3] = tmp22;
      tmp29 = callback(ListFooterSection, obj);
    }
  }
  obj = {
    sections: memo,
    contentContainerStyle: tmp.listContainer,
    renderItem(item) {
      item = item.item;
      const index = item.index;
      let items = [item.item, , ];
      let itemFirst = 0 === index;
      const diff = item.section.data.length - 1;
      if (itemFirst) {
        itemFirst = tmp2.itemFirst;
      }
      let itemLast = index === diff;
      items[1] = itemFirst;
      if (itemLast) {
        itemLast = tmp2.itemLast;
      }
      items[2] = itemLast;
      if ("roles" in item) {
        const items1 = [items, ];
        let disabled2 = roleSubscriptionSettingsDisabled;
        if (roleSubscriptionSettingsDisabled) {
          disabled2 = tmp2.disabled;
        }
        let obj = { style: null, children: null };
        items1[1] = disabled2;
        obj[0] = items1;
        obj = { emoji: null };
        obj[0] = item;
        obj[1] = callback4(closure_1_20, obj);
        let tmp3Result = tmp3(first, obj);
        const tmp12 = first;
      } else {
        const items2 = [items, ];
        let disabled = roleSubscriptionSettingsDisabled;
        if (roleSubscriptionSettingsDisabled) {
          disabled = tmp2.disabled;
        }
        obj = { style: null, accessibilityRole: "button", accessibilityState: null, onPress: null, disabled: null, children: null };
        items2[1] = disabled;
        obj[0] = items2;
        obj1 = { disabled: null };
        obj1[0] = roleSubscriptionSettingsDisabled;
        obj[2] = obj1;
        obj[3] = function onPress() {
          let obj = closure_1_2(closure_1_3[29]);
          obj = {
            guildId: closure_1_5,
            benefit: closure_0,
            onDelete() {
              const ref_type = closure_1;
              if (ref_type.ref_type === closure_2_10.CHANNEL) {
                closure_1_8((arr) => arr.filter(/* F125834 */ function() { ... }));
              } else {
                closure_1_10((arr) => arr.filter(/* F125835 */ function() { ... }));
              }
            },
            onSave(ref_type) {
              closure_0 = ref_type;
              if (ref_type.ref_type === closure_2_10.CHANNEL) {
                closure_1_8((arg0) => {
                  const items = [...arg0, closure_0];
                  return items;
                });
              } else {
                closure_1_10((arg0) => {
                  const items = [...arg0, closure_0];
                  return items;
                });
              }
            },
            listingId: closure_1_4
          };
          obj.showEditBenefitModal(obj);
        };
        obj[4] = roleSubscriptionSettingsDisabled;
        const obj2 = { guildId: null, benefit: null };
        obj2[0] = guildId;
        obj2[1] = item;
        obj[5] = callback4(callback(17760).GuildRoleSubscriptionBenefitPreview, obj2);
        tmp3Result = tmp3(callback2(9050), obj);
        const tmp6 = callback2(9050);
      }
      return tmp3Result;
    },
    keyExtractor: tmp5(15231).getBenefitKey,
    ListHeaderComponent: null,
    renderSectionHeader: null,
    stickySectionHeadersEnabled: false,
    renderSectionFooter: null,
    ItemSeparatorComponent: null,
    SectionSeparatorComponent: null,
    ListFooterComponent: null
  };
  let tmp32Result = null;
  if (true !== onlyIntangible) {
    if (useRoleSubscriptionFormatDefault(guildId).isFullServerGating) {
      obj1 = { style: null, channelAccessFormat: null, setChannelAccessFormat: null, disabled: null };
      obj1[0] = tmp.allChannelsSwitch;
      obj1[1] = first3;
      obj1[2] = tmp23[1];
      obj1[3] = roleSubscriptionSettingsDisabled;
      tmp32Result = tmp32(RowDefault, obj1);
    } else {
      tmp32Result = null;
    }
  }
  obj[4] = tmp32Result;
  obj[5] = function renderSectionHeader(section) {
    return callback4(GuildRoleSubscriptionTierBenefitsModalHeader, { type: section.section.type });
  };
  obj[7] = function renderSectionFooter(section) {
    const type = section.section.type;
    if (closure_16.CHANNEL === type) {
      const intl2 = callback(1114).intl;
      let stringResult = intl2.string(callback(1114).t.WEg7PK);
    } else if (tmp3.INTANGIBLE === type) {
      const intl = callback(1114).intl;
      stringResult = intl.string(callback(1114).t.VinNZr);
    } else if (tmp3.EMOJI === type) {
      const intl3 = callback(1114).intl;
      stringResult = intl3.string(callback(1114).t["0t1aNC"]);
    }
    return closure_12(GuildRoleSubscriptionTierBenefitsModalHeader, {
      label: stringResult,
      onPress() {
        if (type === constants2.EMOJI) {
          let obj = { guildId: null, subscriptionRoleId: null, initialTierEmojiIds: null, onSave: null, listingId: null };
          obj[0] = closure_1_5;
          obj[1] = closure_1_6;
          obj[2] = closure_1_11;
          obj[3] = closure_1_12;
          obj[4] = closure_1_4;
          callback(17751).showEditEmojisModal(obj);
          const obj3 = callback(17751);
        } else {
          if (tmp === tmp2.CHANNEL) {
            let INTANGIBLE = constants.CHANNEL;
          } else {
            INTANGIBLE = constants.INTANGIBLE;
          }
          obj = callback(17751);
          obj = { guildId: null, type: null, onSave: null, listingId: null };
          obj[0] = closure_1_5;
          obj[1] = INTANGIBLE;
          obj[2] = closure_1_15;
          obj[3] = closure_1_4;
          const result = obj.showCreateBenefitModal(obj);
        }
      },
      disabled: roleSubscriptionSettingsDisabled
    });
  };
  obj[8] = ItemSeparator;
  obj[9] = Separator;
  obj[10] = tmp29;
  return callback(role_id, obj);
}
class GuildRoleSubscriptionTierBenefitsTab {
  constructor(arg0) {
    obj = { onlyChannels: global.onlyChannels, onlyIntangible: global.onlyIntangible };
    return jsx(Content, obj);
  }
}
({ SectionList: closure_6, View: error } = get_ActivityIndicator);
({ GuildRoleSubscriptionBenefitTypes: c10, GuildRoleSubscriptionsTierScenes: unpackModuleId } = MAX_SUBSCRIPTION_TIERS);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { listContainer: { paddingBottom: 16 }, card: null, item: null, itemFirst: null, itemLast: null, itemSeparatorContainer: null, itemSeparator: null, listFooterText: null, listFooterSubtitle: null, listFooterSectionDescription: null, listFooterContainer: null, disabledSection: null, allChannelsSwitch: null, addBenefitLabel: null, separator: null, emojiImage: null, disabled: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: ThemesDefault.radii.none };
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: ThemesDefault.radii.none };
createCacheKey[3] = { borderTopLeftRadius: ThemesDefault.radii.sm, borderTopRightRadius: ThemesDefault.radii.sm };
let obj2 = { borderTopLeftRadius: ThemesDefault.radii.sm, borderTopRightRadius: ThemesDefault.radii.sm };
createCacheKey[4] = { borderBottomLeftRadius: ThemesDefault.radii.sm, borderBottomRightRadius: ThemesDefault.radii.sm };
let obj3 = { borderBottomLeftRadius: ThemesDefault.radii.sm, borderBottomRightRadius: ThemesDefault.radii.sm };
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
let obj4 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
createCacheKey[6] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginStart: 54, height: 1 };
createCacheKey[7] = { marginHorizontal: 16 };
createCacheKey[8] = { marginTop: 8 };
createCacheKey[9] = { marginBottom: 16 };
createCacheKey[10] = { marginVertical: 24 };
createCacheKey[11] = { opacity: 0.5 };
createCacheKey[12] = { marginHorizontal: 16, marginTop: 24 };
createCacheKey[13] = { marginStart: 16 };
createCacheKey[14] = { height: 8 };
createCacheKey[15] = { width: 24, height: 24, marginRight: 16 };
createCacheKey[16] = { opacity: 0.5 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let closure_16 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
let obj5 = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginStart: 54, height: 1 };
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export { GuildRoleSubscriptionTierBenefitsTab };
export const GuildRoleSubscriptionTierChannelBenefitsModal = function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["0eV/GY"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.iMSIWp);
  obj[3] = constants.INTANGIBLE_BENEFITS;
  const merged = Object.assign(arg0);
  obj.scrollable = false;
  obj.children = callback(GuildRoleSubscriptionTierBenefitsTab, { onlyChannels: true });
  return callback(HeaderDefault, obj);
};
export const GuildRoleSubscriptionTierIntangibleBenefitsModal = function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg0) {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["+h9nJG"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.oGS4tC);
  obj[3] = constants.DESIGN;
  const merged = Object.assign(arg0);
  obj.scrollable = false;
  obj.children = callback(GuildRoleSubscriptionTierBenefitsTab, { onlyIntangible: true });
  return callback(HeaderDefault, obj);
};