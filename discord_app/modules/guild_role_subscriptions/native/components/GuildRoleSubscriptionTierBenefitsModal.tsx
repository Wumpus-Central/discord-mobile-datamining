// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx
import Row from "Row";
import useRoleSubscriptionSettingsDisabled from "useRoleSubscriptionSettingsDisabled";
import get_ActivityIndicator from "useTrialIntervalOptions";
import { AllChannelAccessOptions } from "AllChannelAccessOptions";
import { useGroupIsFullGateState } from "usePriceTiers";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";
import jsxProd from "FormHeader";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/16966_registerAsset.js";
import { preload } from "../../../../components_native/common/FastImage.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { render } from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getAvatarURL } from "../../../../utils/AvatarUtils.tsx";
import { useEditStateContext } from "../../edit_state/EditStateContextProvider.tsx";
import { useFetchListingsForGuild } from "../../GuildRoleSubscriptionsHooks.tsx";
import { useRoleSubscriptionSettingsDisabled } from "../../RoleSubscriptionSettingsDisabledContext.tsx";
import { items } from "../../useRoleSubscriptionEmojis.tsx";
import { useRoleSubscriptionFormat } from "../../useRoleSubscriptionFormat.tsx";
import { EmojiAlias } from "EmojiAlias.tsx";
import { Header } from "GuildRoleSubscriptionTierEditStep.tsx";

let c10;
let closure_12;
let closure_14;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
function AddBenefitButton(disabled) {
  let label;
  let onPress;
  let flag = disabled.disabled;
  ({ label, onPress } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = createCacheKey();
  const items = [tmp.card, ];
  disabled = flag;
  if (flag) {
    disabled = tmp.disabled;
  }
  let obj = { style: items, accessibilityRole: "button", accessibilityState: { disabled: flag }, onPress, disabled: flag, children: null };
  items[1] = disabled;
  obj = { source: null };
  const tmp2 = closure_13;
  const tmp5 = render;
  obj[0] = registerAsset;
  const items1 = [callback(preload, obj), ];
  obj = { style: tmp.addBenefitLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label };
  items1[1] = callback(Text.Text, obj);
  obj[5] = items1;
  return tmp2(tmp5, obj);
}
function Separator() {
  return callback(closure_7, { style: createCacheKey().separator });
}
function ItemSeparator() {
  const tmp = createCacheKey();
  obj = { style: tmp.itemSeparatorContainer, children: callback(closure_7, obj) };
  obj = { style: tmp.itemSeparator };
  return callback(closure_7, obj);
}
function EmojiRowLabel(emoji) {
  emoji = emoji.emoji;
  let obj = { children: null };
  obj = { style: createCacheKey().emojiImage, source: null };
  obj = { uri: null };
  const tmp = createCacheKey();
  const tmp2 = preload;
  obj[0] = getAvatarURL.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj[1] = obj;
  const items = [callback(tmp2, obj), callback(EmojiAlias, { name: emoji.name })];
  obj[0] = items;
  return callback2(closure_14, obj);
}
function ListFooterSection(onChangeTrialInterval) {
  let interval;
  let onChangeTrialActiveUserLimit;
  let trialActiveUserLimit;
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  let options;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp = createCacheKey();
  const tmp4 = options(13358)();
  const tmp5 = options(14578)(interval);
  options = tmp5.options;
  const selectedOption = tmp5.selectedOption;
  const items = [onChangeTrialInterval, options];
  const callback = React.useCallback((arg0) => {
    const iter = options.find((isDefault) => isDefault.isDefault);
    let value = null;
    options(outer1_3[18])(null != iter, "Missing default trial duartion option");
    if (arg0) {
      value = iter.value;
    }
    onChangeTrialInterval(value);
  }, items);
  let obj = onChangeTrialInterval(16945);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  obj = { style: tmp.listFooterContainer, children: null };
  obj = { label: null, value: null, onValueChange: null, disabled: null };
  const intl = onChangeTrialInterval(1236).intl;
  obj[0] = intl.string(onChangeTrialInterval(1236).t["+hTmdb"]);
  obj[1] = null != selectedOption;
  obj[2] = callback;
  obj[3] = roleSubscriptionSettingsDisabled;
  const items1 = [callback(onChangeTrialInterval(8083).FormSwitchRow, obj), ];
  if (null == selectedOption) {
    const disabledSection = tmp.disabledSection;
  }
  const obj1 = { style: disabledSection, children: null };
  const obj2 = { style: items2, variant: "text-sm/medium", color: "text-default", children: null };
  items2 = [, ];
  ({ listFooterText: arr3[0], listFooterSubtitle: arr3[1] } = tmp);
  const intl2 = tmp8(1236).intl;
  obj2[3] = intl2.string(onChangeTrialInterval(1236).t.urVijS);
  const items3 = [callback(onChangeTrialInterval(4734).Text, obj2), , , , , , ];
  const obj3 = { style: tmp4.header, children: null };
  let tmp2Result = tmp2(8913);
  const intl3 = tmp8(1236).intl;
  obj3[1] = intl3.string(onChangeTrialInterval(1236).t.m1KuWd);
  items3[1] = callback(tmp2Result, obj3);
  const obj4 = { style: items4, variant: "text-sm/medium", color: "text-default", children: null };
  items4 = [, ];
  ({ listFooterSectionDescription: arr5[0], listFooterText: arr5[1] } = tmp);
  const intl4 = tmp8(1236).intl;
  obj4[3] = intl4.string(onChangeTrialInterval(1236).t.NB9NLF);
  items3[2] = callback(onChangeTrialInterval(4734).Text, obj4);
  const obj5 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: null };
  let tmp15 = !tmp7;
  let tmp16 = tmp15;
  tmp2Result = tmp2(16968);
  if (null != selectedOption) {
    tmp16 = roleSubscriptionSettingsDisabled;
  }
  obj5[3] = tmp16;
  items3[3] = callback(tmp2Result, obj5);
  const obj6 = { style: tmp4.header, children: null };
  const intl5 = tmp8(1236).intl;
  obj6[1] = intl5.string(onChangeTrialInterval(1236).t["/JD9oe"]);
  items3[4] = callback(options(8913), obj6);
  const obj7 = { style: items5, variant: "text-sm/medium", color: "text-default", children: null };
  items5 = [, ];
  ({ listFooterSectionDescription: arr6[0], listFooterText: arr6[1] } = tmp);
  const intl6 = tmp8(1236).intl;
  obj7[3] = intl6.string(onChangeTrialInterval(1236).t.Cg5eBm);
  items3[5] = callback(onChangeTrialInterval(4734).Text, obj7);
  const obj8 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: null };
  const tmp2Result1 = options(8913);
  if (null != selectedOption) {
    tmp15 = roleSubscriptionSettingsDisabled;
  }
  obj8[2] = tmp15;
  items3[6] = callback(options(16969), obj8);
  obj1[1] = items3;
  items1[1] = closure_13(closure_7, obj1);
  obj[1] = items1;
  return closure_13(closure_7, obj);
}
function Content(arg0) {
  let onlyChannels;
  let onlyIntangible;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp22;
  let _require;
  let importDefault;
  let importAll;
  let dependencyMap;
  let editStateId;
  let guildId;
  let role_id;
  let first;
  let AllChannelAccessOptions;
  let first1;
  let closure_10;
  let first2;
  let callback;
  let c13;
  let roleSubscriptionSettingsDisabled;
  let c16;
  function addBenefit(ref_type) {
    let closure_0 = ref_type;
    if (ref_type.ref_type === lib.CHANNEL) {
      callback((arg0) => {
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
    const obj = { style: _undefined2(_undefined3[16])().header, children: null };
    const tmp2 = _undefined2(_undefined3[16])();
    const tmp3 = closure_12;
    if (_undefined4.CHANNEL === type) {
      const intl2 = _undefined(tmp[13]).intl;
      let stringResult = intl2.string(_undefined(tmp[13]).t.LtfhAj);
    } else if (tmp5.INTANGIBLE === type) {
      const intl = _undefined(tmp[13]).intl;
      stringResult = intl.string(_undefined(tmp[13]).t["8oxWpO"]);
    } else if (tmp5.EMOJI === type) {
      const intl3 = _undefined(tmp[13]).intl;
      stringResult = intl3.string(_undefined(tmp[13]).t.XBkDoA);
    }
    obj[1] = stringResult;
    return tmp3(_undefined2(_undefined3[21]), obj);
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
  let obj = _useEditStateContext;
  const editStateContext = obj.useEditStateContext();
  editStateId = editStateContext.editStateId;
  guildId = editStateContext.guildId;
  let obj1 = _useFetchListingsForGuild;
  const subscriptionListing = obj1.useSubscriptionListing(editStateId);
  role_id = undefined;
  if (subscriptionListing != null) {
    role_id = subscriptionListing.role_id;
  }
  if (role_id == null) {
    role_id = null;
  }
  const tmp11 = editStateId(importAll(14573).useChannelBenefits(editStateId), 2);
  first = tmp11[0];
  AllChannelAccessOptions = tmp11[1];
  let obj3 = importAll(14573);
  const tmp10 = importDefault;
  const tmp13 = editStateId(importAll(14573).useIntangibleBenefits(editStateId), 2);
  first1 = tmp13[0];
  closure_10 = tmp13[1];
  const obj4 = importAll(14573);
  const tmp15 = editStateId(importAll(14573).useTierEmojiIds(editStateId, guildId), 2);
  first2 = tmp15[0];
  callback = tmp15[1];
  const obj5 = importAll(14573);
  const obj6 = importAll(14573);
  [tmp18, tmp19] = editStateId(importAll(14573).useTrialInterval(editStateId), 2);
  const tmp17 = editStateId(importAll(14573).useTrialInterval(editStateId), 2);
  const obj7 = importAll(14573);
  [tmp21, tmp22] = editStateId(importAll(14573).useTrialLimit(editStateId), 2);
  const tmp20 = editStateId(importAll(14573).useTrialLimit(editStateId), 2);
  const tmp23 = editStateId(importAll(14573).useChannelAccessFormat(editStateId, guildId), 2);
  const first3 = tmp23[0];
  c13 = tmp25;
  const obj8 = importAll(14573);
  roleSubscriptionSettingsDisabled = _useRoleSubscriptionSettingsDisabled.useRoleSubscriptionSettingsDisabled();
  const tmp27 = items(guildId);
  c16 = tmp27;
  let items = [first2, tmp27, true === onlyIntangible, first3 === AllChannelAccessOptions.ALL_CHANNELS_ACCESS, true === onlyChannels, tmp4, first, first1];
  let tmp29 = null;
  const memo = guildId.useMemo(() => {
    let tmp2 = c1;
    const found = _undefined4.filter((id) => set.has(id.id));
    if (!c1) {
      tmp2 = c13;
    }
    const items = [];
    if (!tmp2) {
      let obj = { type: null, data: null };
      obj[0] = _undefined4.CHANNEL;
      obj[1] = first;
      items.push(obj);
    }
    if (!c2) {
      obj = { type: null, data: null };
      obj[0] = _undefined4.INTANGIBLE;
      obj[1] = first1;
      items.push(obj);
    }
    if (!c3) {
      obj = { type: null, data: null };
      obj[0] = _undefined4.EMOJI;
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
        obj[1] = callback2(outer1_20, obj);
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
        const obj1 = { disabled: null };
        obj1[0] = roleSubscriptionSettingsDisabled;
        obj[2] = obj1;
        obj[3] = function onPress() {
          let obj = outer1_2(outer1_3[29]);
          obj = {
            guildId: outer1_5,
            benefit: closure_0,
            onDelete() {
              const ref_type = closure_1;
              if (ref_type.ref_type === outer2_10.CHANNEL) {
                outer1_8((arr) => arr.filter(/* F120848 */ function() { ... }));
              } else {
                outer1_10((arr) => arr.filter(/* F120849 */ function() { ... }));
              }
            },
            onSave(ref_type) {
              let closure_0 = ref_type;
              if (ref_type.ref_type === outer2_10.CHANNEL) {
                outer1_8((arg0) => {
                  const items = [...arg0, closure_0];
                  return items;
                });
              } else {
                outer1_10((arg0) => {
                  const items = [...arg0, closure_0];
                  return items;
                });
              }
            },
            listingId: outer1_4
          };
          obj.showEditBenefitModal(obj);
        };
        obj[4] = roleSubscriptionSettingsDisabled;
        const obj2 = { guildId: null, benefit: null };
        obj2[0] = guildId;
        obj2[1] = item;
        obj[5] = callback2(_undefined(_undefined3[30]).GuildRoleSubscriptionBenefitPreview, obj2);
        tmp3Result = tmp3(_undefined2(_undefined3[9]), obj);
        const tmp5 = _undefined3;
        const tmp6 = _undefined2(_undefined3[9]);
      }
      return tmp3Result;
    },
    keyExtractor: tmp5(14577).getBenefitKey,
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
    if (useRoleSubscriptionFormat(guildId).isFullServerGating) {
      obj1 = { style: null, channelAccessFormat: null, setChannelAccessFormat: null, disabled: null };
      obj1[0] = tmp.allChannelsSwitch;
      obj1[1] = first3;
      obj1[2] = tmp23[1];
      obj1[3] = roleSubscriptionSettingsDisabled;
      tmp32Result = tmp32(tmp10(16982), obj1);
    } else {
      tmp32Result = null;
    }
  }
  obj[4] = tmp32Result;
  obj[5] = function renderSectionHeader(section) {
    return callback2(GuildRoleSubscriptionTierBenefitsModalHeader, { type: section.section.type });
  };
  obj[7] = function renderSectionFooter(section) {
    const type = section.section.type;
    if (_undefined4.CHANNEL === type) {
      const intl2 = _undefined(_undefined3[13]).intl;
      let stringResult = intl2.string(_undefined(_undefined3[13]).t.WEg7PK);
    } else if (tmp3.INTANGIBLE === type) {
      const intl = _undefined(_undefined3[13]).intl;
      stringResult = intl.string(_undefined(_undefined3[13]).t.VinNZr);
    } else if (tmp3.EMOJI === type) {
      const intl3 = _undefined(_undefined3[13]).intl;
      stringResult = intl3.string(_undefined(_undefined3[13]).t["0t1aNC"]);
    }
    return closure_12(GuildRoleSubscriptionTierBenefitsModalHeader, {
      label: stringResult,
      onPress() {
        if (type === constants2.EMOJI) {
          let obj = { guildId: null, subscriptionRoleId: null, initialTierEmojiIds: null, onSave: null, listingId: null };
          obj[0] = outer1_5;
          obj[1] = outer1_6;
          obj[2] = outer1_11;
          obj[3] = outer1_12;
          obj[4] = outer1_4;
          callback(16972).showEditEmojisModal(obj);
          const obj3 = callback(16972);
        } else {
          if (tmp === tmp2.CHANNEL) {
            let INTANGIBLE = constants.CHANNEL;
          } else {
            INTANGIBLE = constants.INTANGIBLE;
          }
          obj = callback(16972);
          obj = { guildId: null, type: null, onSave: null, listingId: null };
          obj[0] = outer1_5;
          obj[1] = INTANGIBLE;
          obj[2] = outer1_15;
          obj[3] = outer1_4;
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
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: require("Themes").radii.none };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: require("Themes").radii.none };
createCacheKey[3] = { borderTopLeftRadius: require("Themes").radii.sm, borderTopRightRadius: require("Themes").radii.sm };
let obj2 = { borderTopLeftRadius: require("Themes").radii.sm, borderTopRightRadius: require("Themes").radii.sm };
createCacheKey[4] = { borderBottomLeftRadius: require("Themes").radii.sm, borderBottomRightRadius: require("Themes").radii.sm };
let obj3 = { borderBottomLeftRadius: require("Themes").radii.sm, borderBottomRightRadius: require("Themes").radii.sm };
createCacheKey[5] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
let obj4 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
createCacheKey[6] = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, alignSelf: "stretch", marginStart: 54, height: 1 };
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
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_16 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
let obj5 = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, alignSelf: "stretch", marginStart: 54, height: 1 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

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
  return callback(Header, obj);
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
  return callback(Header, obj);
};