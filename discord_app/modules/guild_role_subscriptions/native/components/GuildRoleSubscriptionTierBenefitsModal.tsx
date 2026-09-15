// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import useRoleSubscriptionFormatDefault from "../../useRoleSubscriptionFormat.tsx";
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep.tsx";
import _modDef17900 from "../../../../../_runtime/metro/17900__.js";
import EmojiAliasDefault from "EmojiAlias.tsx";
import useRoleSubscriptionEmojisDefault from "../../useRoleSubscriptionEmojis.tsx";
import GuildRoleSubscriptionsModalActionCreatorsAll from "../../GuildRoleSubscriptionsModalActionCreators.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const AllChannelsSwitchDefault = tmp10(17916);
require = fn;
function AddBenefitButton(disabled) {
  let flag = disabled.disabled;
  ({ label, onPress } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_15();
  const items = [tmp.card, ];
  disabled = flag;
  if (flag) {
    disabled = tmp.disabled;
  }
  const obj = { style: items, accessibilityRole: "button", accessibilityState: { disabled: flag }, onPress, disabled: flag, children: null };
  items[1] = disabled;
  const obj2 = { source: null };
  const tmp5 = TouchableHitBoxDefault;
  obj2.source = _modDef17900;
  const items1 = [closure_1_12(FastImageDefault, obj2), closure_1_12(Text_Text.Text, { style: tmp.addBenefitLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: label })];
  obj.children = items1;
  return map1(tmp5, obj);
}
function Separator() {
  return closure_1_12(React5, { style: closure_15().separator });
}
function ItemSeparator() {
  const tmp = closure_15();
  const obj = { style: tmp.itemSeparatorContainer, children: closure_1_12(React5, { style: tmp.itemSeparator }) };
  return closure_1_12(React5, obj);
}
function EmojiRowLabel(emoji) {
  emoji = emoji.emoji;
  const obj = { children: null };
  const obj2 = { style: closure_15().emojiImage, source: null };
  const obj3 = { uri: null };
  const tmp = closure_15();
  const tmp2 = FastImageDefault;
  obj3.uri = AvatarUtilsDefault.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj2.source = obj3;
  const items = [closure_1_12(tmp2, obj2), closure_1_12(EmojiAliasDefault, { name: emoji.name })];
  obj.children = items;
  return map1(closure_1_14, obj);
}
function ListFooterSection(onChangeTrialInterval) {
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  let options;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp = closure_15();
  const tmp4 = options(13991)();
  const tmp5 = options(15326)(interval);
  options = tmp5.options;
  const selectedOption = tmp5.selectedOption;
  const items = [onChangeTrialInterval, options];
  const callback = noop.useCallback((arg0) => {
    const iter = options.find((isDefault) => isDefault.isDefault);
    value = null;
    _modDef38(null != iter, "Missing default trial duartion option");
    if (arg0) {
      value = iter.value;
    }
    onChangeTrialInterval(value);
  }, items);
  const roleSubscriptionSettingsDisabled = onChangeTrialInterval(17879).useRoleSubscriptionSettingsDisabled();
  const obj2 = { style: tmp.listFooterContainer, children: null };
  const obj3 = { label: null, value: null, onValueChange: null, disabled: null };
  const intl = onChangeTrialInterval(1115).intl;
  obj3.label = intl.string(onChangeTrialInterval(1115).t["+hTmdb"]);
  obj3.value = null != selectedOption;
  obj3.onValueChange = callback;
  obj3.disabled = roleSubscriptionSettingsDisabled;
  const items1 = [closure_12(onChangeTrialInterval(8719).FormSwitchRow, obj3), ];
  if (null == selectedOption) {
    const disabledSection = tmp.disabledSection;
  }
  const obj4 = { style: disabledSection, children: null };
  const obj5 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
  const items2 = [, ];
  ({ listFooterText: arr3[0], listFooterSubtitle: arr3[1] } = tmp);
  obj5.style = items2;
  const intl2 = tmp8(1115).intl;
  obj5.children = intl2.string(onChangeTrialInterval(1115).t.urVijS);
  const items3 = [closure_12(onChangeTrialInterval(4635).Text, obj5), , , , , , ];
  const obj6 = { style: tmp4.header, children: null };
  const obj = onChangeTrialInterval(17879);
  const intl3 = tmp8(1115).intl;
  obj6.children = intl3.string(onChangeTrialInterval(1115).t.m1KuWd);
  items3[1] = closure_12(options(9948), obj6);
  const obj7 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
  const items4 = [, ];
  ({ listFooterSectionDescription: arr5[0], listFooterText: arr5[1] } = tmp);
  obj7.style = items4;
  const intl4 = tmp8(1115).intl;
  obj7.children = intl4.string(onChangeTrialInterval(1115).t.NB9NLF);
  items3[2] = closure_12(onChangeTrialInterval(4635).Text, obj7);
  const obj8 = { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: null };
  let tmp15 = !tmp7;
  let tmp16 = tmp15;
  const tmp2Result = options(9948);
  if (null != selectedOption) {
    tmp16 = roleSubscriptionSettingsDisabled;
  }
  obj8.disabled = tmp16;
  items3[3] = closure_12(options(17902), obj8);
  const obj9 = { style: tmp4.header, children: null };
  const tmp2Result4 = options(17902);
  const intl5 = tmp8(1115).intl;
  obj9.children = intl5.string(onChangeTrialInterval(1115).t["/JD9oe"]);
  items3[4] = closure_12(options(9948), obj9);
  const obj10 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
  const items5 = [, ];
  ({ listFooterSectionDescription: arr6[0], listFooterText: arr6[1] } = tmp);
  obj10.style = items5;
  const intl6 = tmp8(1115).intl;
  obj10.children = intl6.string(onChangeTrialInterval(1115).t.Cg5eBm);
  items3[5] = closure_12(onChangeTrialInterval(4635).Text, obj10);
  const obj11 = { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: null };
  const tmp2Result5 = options(9948);
  if (null != selectedOption) {
    tmp15 = roleSubscriptionSettingsDisabled;
  }
  obj11.disabled = tmp15;
  items3[6] = closure_12(options(17903), obj11);
  obj4.children = items3;
  items1[1] = closure_13(closure_7, obj4);
  obj2.children = items1;
  return closure_13(closure_7, obj2);
}
function Content(arg0) {
  dependencyMap = undefined;
  let editStateId;
  let guildId;
  let role_id;
  let data;
  AllChannelAccessOptions = undefined;
  let first1;
  closure_10 = undefined;
  let first2;
  closure_12 = undefined;
  closure_13 = undefined;
  let roleSubscriptionSettingsDisabled;
  closure_16 = undefined;
  function addBenefit(ref_type) {
    closure_0 = ref_type;
    if (ref_type.ref_type === constants.CHANNEL) {
      closure_8((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    } else {
      closure_10((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
        return items;
      });
    }
  }
  function GuildRoleSubscriptionTierBenefitsModalHeader(type) {
    type = type.type;
    const obj = { style: closure_1(13991)().header, children: null };
    const tmp2 = closure_1(13991)();
    if (closure_16.CHANNEL === type) {
      const intl2 = closure_0(1115).intl;
      let stringResult = intl2.string(closure_0(1115).t.LtfhAj);
    } else if (closure_16.INTANGIBLE === type) {
      const intl = closure_0(1115).intl;
      stringResult = intl.string(closure_0(1115).t["8oxWpO"]);
    } else if (closure_16.EMOJI === type) {
      const intl3 = closure_0(1115).intl;
      stringResult = intl3.string(closure_0(1115).t.XBkDoA);
    }
    obj.children = stringResult;
    return closure_12(closure_1(9948), obj);
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
  const editStateContext = require("EditStateContextProvider").useEditStateContext();
  editStateId = editStateContext.editStateId;
  guildId = editStateContext.guildId;
  let obj = require("EditStateContextProvider");
  const subscriptionListing = require("GuildRoleSubscriptionsHooks").useSubscriptionListing(editStateId);
  role_id = undefined;
  if (subscriptionListing != null) {
    role_id = subscriptionListing.role_id;
  }
  if (role_id == null) {
    role_id = null;
  }
  let obj2 = require("GuildRoleSubscriptionsHooks");
  const tmp11 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(editStateId), 2);
  data = tmp11[0];
  AllChannelAccessOptions = tmp11[1];
  const tmp13 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(editStateId), 2);
  first1 = tmp13[0];
  closure_10 = tmp13[1];
  const tmp15 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTierEmojiIds(editStateId, guildId), 2);
  first2 = tmp15[0];
  closure_12 = tmp15[1];
  [tmp18, tmp19] = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTrialInterval(editStateId), 2);
  const tmp17 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTrialInterval(editStateId), 2);
  [tmp21, tmp22] = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTrialLimit(editStateId), 2);
  const tmp20 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useTrialLimit(editStateId), 2);
  const tmp23 = editStateId(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelAccessFormat(editStateId, guildId), 2);
  const first3 = tmp23[0];
  closure_13 = tmp25;
  roleSubscriptionSettingsDisabled = require("RoleSubscriptionSettingsDisabledContext").useRoleSubscriptionSettingsDisabled();
  const tmp27 = useRoleSubscriptionEmojisDefault(guildId);
  closure_16 = tmp27;
  let items = [first2, tmp27, true === onlyIntangible, first3 === AllChannelAccessOptions.ALL_CHANNELS_ACCESS, true === onlyChannels, tmp4, data, first1];
  let tmp29 = null;
  const memo = guildId.useMemo(() => {
    let tmp2 = closure_1;
    const found = closure_16.filter((id) => set.has(id.id));
    if (!closure_1) {
      tmp2 = closure_13;
    }
    const items = [];
    if (!tmp2) {
      const obj = { type: closure_16.CHANNEL, data };
      items.push(obj);
    }
    if (!closure_2) {
      const obj2 = { type: closure_16.INTANGIBLE, data: first1 };
      items.push(obj2);
    }
    if (!closure_3) {
      const obj3 = { type: closure_16.EMOJI, data: found };
      items.push(obj3);
    }
    return items;
  }, items);
  if (true !== onlyIntangible) {
    tmp29 = null;
    if (!tmp3) {
      const obj9 = { interval: tmp18, onChangeTrialInterval: tmp19, trialActiveUserLimit: tmp21, onChangeTrialActiveUserLimit: tmp22 };
      tmp29 = closure_12(ListFooterSection, obj9);
    }
  }
  const obj10 = {
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
        const obj2 = { style: null, children: null };
        items1[1] = disabled2;
        obj2.style = items1;
        const obj3 = { emoji: item };
        obj2.children = closure_12(EmojiRowLabel, obj3);
        let tmp3Result = closure_12(first, obj2);
      } else {
        const items2 = [items, ];
        let disabled = roleSubscriptionSettingsDisabled;
        if (roleSubscriptionSettingsDisabled) {
          disabled = tmp2.disabled;
        }
        const obj = { style: null, accessibilityRole: "button", accessibilityState: null, onPress: null, disabled: null, children: null };
        items2[1] = disabled;
        obj.style = items2;
        const obj4 = { disabled: roleSubscriptionSettingsDisabled };
        obj.accessibilityState = obj4;
        obj.onPress = function onPress() {
          let ref_type = item;
          closure_1 = index;
          closure_1_2(dependencyMap[29]).showEditBenefitModal({
            guildId,
            benefit: item,
            onDelete() {
              ref_type = closure_1;
              if (ref_type.ref_type === constants.CHANNEL) {
                closure_2_8((arr) => arr.filter(/* F126618 */ function() { ... }));
              } else {
                closure_2_10((arr) => arr.filter(/* F126619 */ function() { ... }));
              }
            },
            onSave(ref_type) {
              closure_0 = ref_type;
              if (ref_type.ref_type === constants.CHANNEL) {
                closure_2_8((arg0) => {
                  const items = [...arg0, closure_0];
                  return items;
                });
              } else {
                closure_2_10((arg0) => {
                  const items = [...arg0, closure_0];
                  return items;
                });
              }
            },
            listingId: editStateId
          });
        };
        obj.disabled = roleSubscriptionSettingsDisabled;
        const obj5 = { guildId, benefit: item };
        obj.children = closure_12(closure_0(17915).GuildRoleSubscriptionBenefitPreview, obj5);
        tmp3Result = closure_12(closure_1(9182), obj);
        const tmp6 = closure_1(9182);
      }
      return tmp3Result;
    },
    keyExtractor: require("GuildRoleSubscriptionTypeUtils").getBenefitKey,
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
      const obj11 = { style: tmp.allChannelsSwitch, channelAccessFormat: first3, setChannelAccessFormat: tmp23[1], disabled: roleSubscriptionSettingsDisabled };
      tmp32Result = tmp32(AllChannelsSwitchDefault, obj11);
    } else {
      tmp32Result = null;
    }
  }
  obj10.ListHeaderComponent = tmp32Result;
  obj10.renderSectionHeader = function renderSectionHeader(section) {
    return closure_2_12(GuildRoleSubscriptionTierBenefitsModalHeader, { type: section.section.type });
  };
  obj10.renderSectionFooter = function renderSectionFooter(section) {
    const type = section.section.type;
    if (constants.CHANNEL === type) {
      const intl2 = closure_0(1115).intl;
      let stringResult = intl2.string(closure_0(1115).t.WEg7PK);
    } else if (constants.INTANGIBLE === type) {
      const intl = closure_0(1115).intl;
      stringResult = intl.string(closure_0(1115).t.VinNZr);
    } else if (constants.EMOJI === type) {
      const intl3 = closure_0(1115).intl;
      stringResult = intl3.string(closure_0(1115).t["0t1aNC"]);
    }
    return onSave(GuildRoleSubscriptionTierBenefitsModalHeader, {
      label: stringResult,
      onPress() {
        if (type === constants.EMOJI) {
          const obj2 = { guildId, subscriptionRoleId: role_id, initialTierEmojiIds: first2, onSave, listingId: editStateId };
          GuildRoleSubscriptionsModalActionCreatorsAll.showEditEmojisModal(obj2);
        } else {
          if (tmp === tmp2.CHANNEL) {
            let INTANGIBLE = constants.CHANNEL;
          } else {
            INTANGIBLE = constants.INTANGIBLE;
          }
          const obj4 = { guildId, type: INTANGIBLE, onSave: addBenefit, listingId: editStateId };
          const result = GuildRoleSubscriptionsModalActionCreatorsAll.showCreateBenefitModal(obj4);
        }
      },
      disabled: roleSubscriptionSettingsDisabled
    });
  };
  obj10.ItemSeparatorComponent = ItemSeparator;
  obj10.SectionSeparatorComponent = Separator;
  obj10.ListFooterComponent = tmp29;
  return closure_12(role_id, obj10);
}
class GuildRoleSubscriptionTierBenefitsTab {
  constructor(arg0) {
    obj = { onlyChannels: global.onlyChannels, onlyIntangible: global.onlyIntangible };
    return jsx(Content, obj);
  }
}
get_ActivityIndicator = fn(17);
({ SectionList: metroRequire, View: closure_7 } = get_ActivityIndicator);
let AllChannelAccessOptions = fn(15322).AllChannelAccessOptions;
const useGroupIsFullGateState = fn(17884).useGroupIsFullGateState;
const GuildRoleSubscriptionsConstants = fn(15299);
({ GuildRoleSubscriptionBenefitTypes: c10, GuildRoleSubscriptionsTierScenes: closure_11 } = GuildRoleSubscriptionsConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { listContainer: { paddingBottom: 16 }, card: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16 }, item: null, itemFirst: null, itemLast: null, itemSeparatorContainer: null, itemSeparator: null, listFooterText: null, listFooterSubtitle: null, listFooterSectionDescription: null, listFooterContainer: null, disabledSection: null, allChannelsSwitch: null, addBenefitLabel: null, separator: null, emojiImage: null, disabled: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16 };
obj2.item = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.none };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.none };
obj2.itemFirst = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
let obj5 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj2.itemLast = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
let obj6 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj2.itemSeparatorContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignSelf: "stretch", marginHorizontal: 16 };
obj2.itemSeparator = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignSelf: "stretch", marginStart: 54, height: 1 };
obj2.listFooterText = { marginHorizontal: 16 };
obj2.listFooterSubtitle = { marginTop: 8 };
obj2.listFooterSectionDescription = { marginBottom: 16 };
obj2.listFooterContainer = { marginVertical: 24 };
obj2.disabledSection = { opacity: 0.5 };
obj2.allChannelsSwitch = { marginHorizontal: 16, marginTop: 24 };
obj2.addBenefitLabel = { marginStart: 16 };
obj2.separator = { height: 8 };
obj2.emojiImage = { width: 24, height: 24, marginRight: 16 };
obj2.disabled = { opacity: 0.5 };
let closure_15 = createStyles.createStyles(obj2);
let closure_16 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export { GuildRoleSubscriptionTierBenefitsTab };
export const GuildRoleSubscriptionTierChannelBenefitsModal = function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["0eV/GY"]);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.iMSIWp);
  obj.nextStep = constants2.INTANGIBLE_BENEFITS;
  const merged = Object.assign(arg0);
  obj.scrollable = false;
  obj.children = closure_1_12(GuildRoleSubscriptionTierBenefitsTab, { onlyChannels: true });
  return closure_1_12(GuildRoleSubscriptionTierEditStepDefault, obj);
};
export const GuildRoleSubscriptionTierIntangibleBenefitsModal = function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg0) {
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["+h9nJG"]);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.oGS4tC);
  obj.nextStep = constants2.DESIGN;
  const merged = Object.assign(arg0);
  obj.scrollable = false;
  obj.children = closure_1_12(GuildRoleSubscriptionTierBenefitsTab, { onlyIntangible: true });
  return closure_1_12(GuildRoleSubscriptionTierEditStepDefault, obj);
};