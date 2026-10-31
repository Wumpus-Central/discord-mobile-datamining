// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import useRoleSubscriptionFormatDefault from "../../useRoleSubscriptionFormat.tsx";
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep.tsx";
import EmojiAliasDefault from "EmojiAlias.tsx";
import useRoleSubscriptionEmojisDefault from "../../useRoleSubscriptionEmojis.tsx";
import GuildRoleSubscriptionsModalActionCreatorsAll from "../../GuildRoleSubscriptionsModalActionCreators.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const AllChannelsSwitchDefault = tmp10(19971);
require = fn;
function AddBenefitRow(disabled) {
  let flag = disabled.disabled;
  ({ label, onPress } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  let prop;
  if (disabled.hasBenefits) {
    prop = closure_14().addBenefitRowAfterBenefits;
  }
  const obj = { style: prop, children: null };
  const obj2 = { start: true, end: true, icon: closure_1_12(CirclePlusIcon.CirclePlusIcon, { size: "md", color: nativeDefault.colors.ICON_BRAND }), label, onPress, disabled: flag };
  obj.children = closure_1_12(TableRow.TableRow, obj2);
  return closure_1_12(React5, obj);
}
function EmojiBenefitRow(emoji) {
  emoji = emoji.emoji;
  ({ start, end, disabled } = emoji);
  const obj = { start, end, icon: null, label: null, disabled: null };
  const obj2 = { style: closure_14().emojiImage, source: null };
  const obj3 = { uri: null };
  const tmp = closure_14();
  const tmp2 = FastImageDefault;
  obj3.uri = AvatarUtilsDefault.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj2.source = obj3;
  obj.icon = closure_1_12(tmp2, obj2);
  obj.label = closure_1_12(EmojiAliasDefault, { children: emoji.name });
  obj.disabled = disabled;
  return closure_1_12(TableRow.TableRow, obj);
}
function ListFooterSection(onChangeTrialInterval) {
  onChangeTrialInterval = onChangeTrialInterval.onChangeTrialInterval;
  let options;
  ({ interval, trialActiveUserLimit, onChangeTrialActiveUserLimit } = onChangeTrialInterval);
  const tmp4 = options(17208)(interval);
  options = tmp4.options;
  const selectedOption = tmp4.selectedOption;
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
  const tmp = closure_14();
  const roleSubscriptionSettingsDisabled = onChangeTrialInterval(19938).useRoleSubscriptionSettingsDisabled();
  let tmp9 = !tmp6;
  if (null != selectedOption) {
    tmp9 = roleSubscriptionSettingsDisabled;
  }
  const obj2 = { style: tmp.listFooterContainer, children: null };
  const obj3 = { title: null, hasIcons: false, helperText: null, children: null };
  const intl = tmp7(1113).intl;
  obj3.title = intl.string(onChangeTrialInterval(1113).t["6anton"]);
  const intl2 = tmp7(1113).intl;
  obj3.helperText = intl2.string(onChangeTrialInterval(1113).t.urVijS);
  const obj4 = { label: null, value: null, onValueChange: null, disabled: null };
  const intl3 = tmp7(1113).intl;
  obj4.label = intl3.string(onChangeTrialInterval(1113).t["+hTmdb"]);
  obj4.value = null != selectedOption;
  obj4.onValueChange = callback;
  obj4.disabled = roleSubscriptionSettingsDisabled;
  const items1 = [closure_12(onChangeTrialInterval(7369).TableSwitchRow, obj4), closure_12(options(19958), { interval: selectedOption, onChange: onChangeTrialInterval, trialIntervalOptions: options, disabled: tmp9 }), closure_12(options(19959), { activeTrialUserlimit: trialActiveUserLimit, onChange: onChangeTrialActiveUserLimit, disabled: tmp9 })];
  obj3.children = items1;
  obj2.children = closure_13(onChangeTrialInterval(7060).TableRowGroup, obj3);
  return closure_12(closure_7, obj2);
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
  ({ onlyChannels, onlyIntangible } = arg0);
  const tmp = roleSubscriptionSettingsDisabled();
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
      const obj = { type: addBenefit.CHANNEL, data };
      items.push(obj);
    }
    if (!closure_2) {
      const obj2 = { type: addBenefit.INTANGIBLE, data: first1 };
      items.push(obj2);
    }
    if (!closure_3) {
      const obj3 = { type: addBenefit.EMOJI, data: found };
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
      const tmp2 = index === item.section.data.length - 1;
      if ("roles" in item) {
        const obj2 = { emoji: item, start: tmp, end: tmp2, disabled: roleSubscriptionSettingsDisabled };
        let tmp3Result = closure_12(EmojiBenefitRow, obj2);
      } else {
        const obj = {
          guildId,
          benefit: item,
          start: tmp,
          end: tmp2,
          onPress() {
              let ref_type = item;
              closure_1 = index;
              closure_1_2(dependencyMap[27]).showEditBenefitModal({
                guildId,
                benefit: item,
                onDelete() {
                  ref_type = closure_1;
                  if (ref_type.ref_type === constants.CHANNEL) {
                    closure_2_8((arr) => arr.filter(/* F140233 */ function() { ... }));
                  } else {
                    closure_2_10((arr) => arr.filter(/* F140234 */ function() { ... }));
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
            },
          disabled: roleSubscriptionSettingsDisabled
        };
        tmp3Result = closure_12(closure_1(19970), obj);
      }
      return tmp3Result;
    },
    keyExtractor: require("GuildRoleSubscriptionTypeUtils").getBenefitKey,
    ListHeaderComponent: null,
    renderSectionHeader: null,
    stickySectionHeadersEnabled: false,
    renderSectionFooter: null,
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
    const type = section.section.type;
    const obj = { style: closure_0.sectionTitle, title: null };
    if (addBenefit.CHANNEL === type) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.LtfhAj);
    } else if (addBenefit.INTANGIBLE === type) {
      const intl = util.intl;
      stringResult = intl.string(util.t["8oxWpO"]);
    } else if (addBenefit.EMOJI === type) {
      const intl3 = util.intl;
      stringResult = intl3.string(util.t.XBkDoA);
    }
    obj.title = stringResult;
    return closure_2_12(TableRowGroup.TableRowGroupTitle, obj);
  };
  obj10.renderSectionFooter = function renderAddBenefitRow(section) {
    section = section.section;
    const type = section.type;
    if (addBenefit.CHANNEL === type) {
      const intl2 = closure_0(1113).intl;
      let stringResult = intl2.string(closure_0(1113).t.WEg7PK);
    } else if (addBenefit.INTANGIBLE === type) {
      const intl = closure_0(1113).intl;
      stringResult = intl.string(closure_0(1113).t.VinNZr);
    } else if (addBenefit.EMOJI === type) {
      const intl3 = closure_0(1113).intl;
      stringResult = intl3.string(closure_0(1113).t["0t1aNC"]);
    }
    return onSave(closure_16, {
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
      disabled: roleSubscriptionSettingsDisabled,
      hasBenefits: section.data.length > 0
    });
  };
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
let AllChannelAccessOptions = fn(17204).AllChannelAccessOptions;
const useGroupIsFullGateState = fn(19942).useGroupIsFullGateState;
const GuildRoleSubscriptionsConstants = fn(17183);
({ GuildRoleSubscriptionBenefitTypes: c10, GuildRoleSubscriptionsTierScenes: closure_11 } = GuildRoleSubscriptionsConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { listContainer: { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingBottom: 16 }, sectionTitle: null, listFooterContainer: null, allChannelsSwitch: null, emojiImage: null, addBenefitRowAfterBenefits: null };
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingBottom: 16 };
obj2.sectionTitle = { marginTop: nativeDefault.space.PX_24 };
obj2.listFooterContainer = { marginVertical: 24 };
obj2.allChannelsSwitch = { marginTop: 24 };
obj2.emojiImage = { width: 24, height: 24 };
let obj4 = { marginTop: nativeDefault.space.PX_24 };
obj2.addBenefitRowAfterBenefits = { marginTop: nativeDefault.space.PX_8 };
let closure_14 = createStyles.createStyles(obj2);
let closure_15 = { CHANNEL: 1, [1]: "CHANNEL", INTANGIBLE: 2, [2]: "INTANGIBLE", EMOJI: 3, [3]: "EMOJI" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierBenefitsModal.tsx");

export { GuildRoleSubscriptionTierBenefitsTab };
export function GuildRoleSubscriptionTierChannelBenefitsModal(arg0) {
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
}
export function GuildRoleSubscriptionTierIntangibleBenefitsModal(arg0) {
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
}