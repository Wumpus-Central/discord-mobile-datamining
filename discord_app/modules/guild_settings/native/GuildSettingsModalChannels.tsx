// discord_app/modules/guild_settings/native/GuildSettingsModalChannels.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import applyOverwritesAll from "../../../utils/PermissionUtils.tsx";
import getFontScale from "../../screen/native/useFontScale.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import init from "../../../actions/ChannelSettingsActionCreators.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/ChannelStore.tsx";
import closure_8 from "../../../stores/GuildStore.tsx";
import closure_9 from "../../../stores/PermissionStore.tsx";
import closure_10 from "../../../stores/RelationshipStore.tsx";
import closure_11 from "../../../stores/UserStore.tsx";
import closure_12 from "../GuildSettingsModalChannelsStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../rebrand/native/TextStyles.tsx";

require = arg1;
function ChannelItem(isFavoritesGuild) {
  ({ channelIconStyle, channel } = isFavoritesGuild);
  isFavoritesGuild = isFavoritesGuild.isFavoritesGuild;
  ({ sortingEnabled, onPress: importAll, sortHandlers } = isFavoritesGuild);
  ({ style, actionIconStyle } = isFavoritesGuild);
  let obj = channel(4478);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_18);
  obj1 = channel(1362);
  let obj2 = channel(586);
  const items = [closure_9];
  const items1 = [channel, isFavoritesGuild];
  const stateFromStores = obj2.useStateFromStores(
    items,
    () => {
      if (isFavoritesGuild) {
        return isFavoritesGuild;
      } else {
        let guild_id = channel;
        if (null == channel.parent_id) {
          let obj = { guildId: null };
          guild_id = guild_id.guild_id;
          obj[0] = guild_id;
          let result = closure_1_9.canWithPartialContext(closure_1_14.MANAGE_CHANNELS, obj);
        } else {
          obj = { channelId: null };
          obj[0] = guild_id.parent_id;
          result = closure_1_9.canWithPartialContext(closure_1_14.MANAGE_CHANNELS, obj);
        }
      }
    },
    items1,
  );
  let tmpResult = tmp(4981);
  const channelIcon = tmpResult.getChannelIcon(channel);
  tmpResult = tmp(4981);
  const channelIconComponent = tmpResult.getChannelIconComponent(channel);
  const tmp8 = closure_6;
  const tmpResult1 = channel(1362);
  const isThemeDarkResult = channel(1362).isThemeDark(obj1.useThemeContext().theme);
  const hex2rgb = channel(685).hex2rgb;
  const unsafe_rawColors = isFavoritesGuild(709).unsafe_rawColors;
  if (isThemeDarkResult) {
    let hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_700, 0.6);
    let tmp13 = tmp11;
  } else {
    hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_200, 0.6);
    tmp13 = tmp11;
  }
  obj = { accessibilityRole: "button", underlayColor: hex2rgbResult, style };
  const merged = Object.assign(sortHandlers);
  obj = null;
  if (sortingEnabled) {
    obj = null;
    if (!stateFromStores) {
      obj = { opacity: 0.3 };
    }
  }
  obj1 = { style: obj, children: null };
  if (null != channelIconComponent) {
    obj2 = { style: null, size: "sm" };
    obj2[0] = channelIconStyle;
    let tmp7Result = tmp7(channelIconComponent, obj2);
  } else {
    const obj3 = { size: null, source: null, style: null };
    obj3[0] = tmp(1296).Icon.Sizes.SMALL_20;
    obj3[1] = channelIcon;
    obj3[2] = channelIconStyle;
    tmp7Result = tmp7(tmp(8372).FormRow.Icon, obj3);
  }
  const obj4 = {
    leading: tmp7Result,
    style: legacyClassComponentStyles.formRowStyle,
    label: null,
    onPress: null,
    trailing: null,
    numberOfLines: null,
  };
  const tmp15 = closure_5;
  const tmpResult2 = channel(685);
  obj4[2] = channel(4674).computeChannelName(channel, closure_11, closure_10);
  let fn;
  if (!sortingEnabled) {
    fn = () => callback(channel.id);
  }
  obj4[3] = fn;
  tmp7Result = null;
  if (stateFromStores) {
    tmp7Result = null;
    if (sortingEnabled) {
      const obj5 = { source: null, style: null };
      obj5[0] = tmp13(15966);
      obj5[1] = actionIconStyle;
      tmp7Result = tmp7(tmp(8372).FormRow.Icon, obj5);
    }
  }
  obj4[4] = tmp7Result;
  let num3;
  if (sortingEnabled) {
    num3 = 1;
  }
  obj4[5] = num3;
  obj1[1] = closure_16(channel(8372).FormRow, obj4);
  obj.children = closure_16(tmp15, obj1);
  return closure_16(tmp8, obj);
}
function CreateButton(guild) {
  guild = guild.guild;
  let bottom;
  let obj = guild(4478);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_18);
  bottom = bottom(1627)().bottom;
  let items = [bottom];
  const memo = importAllResult.useMemo(() => ({ bottom: 16 + bottom }), items);
  let tmp5 = null;
  if (closure_9.can(constants.MANAGE_CHANNELS, guild)) {
    obj = { style: null, children: null };
    const items1 = [legacyClassComponentStyles.floatingActionButtonContainer, memo];
    obj[0] = items1;
    obj = { text: null, onPress: null, icon: null };
    let intl = tmp(1233).intl;
    obj[0] = intl.string(tmp(1233).t.CumH4u);
    obj[1] = function onPress() {
      let obj = guild(closure_1_3[27]);
      obj = { key: "GuildSettingsChannelsCreate", header: null, options: null, hasIcons: false };
      obj = { title: null };
      const intl = guild(closure_1_3[15]).intl;
      obj[0] = intl.string(guild(closure_1_3[15]).t.CumH4u);
      obj[1] = obj;
      obj1 = { label: null, onPress: null };
      const intl2 = guild(closure_1_3[15]).intl;
      obj1[0] = intl2.string(guild(closure_1_3[15]).t.vHCZwr);
      obj1[1] = function onPress() {
        closure_1_1(closure_1_3[28]).open(closure_1_13.GUILD_CATEGORY, user.id, null, null);
      };
      const items = [obj1];
      const obj2 = { label: null, onPress: null };
      const intl3 = guild(closure_1_3[15]).intl;
      obj2[0] = intl3.string(guild(closure_1_3[15]).t.GK18KJ);
      obj2[1] = function onPress() {
        closure_1_1(closure_1_3[28]).open(null, user.id, null, null);
      };
      items[1] = obj2;
      obj[2] = items;
      const result = obj.showSimpleActionSheet(obj);
    };
    obj[2] = callback(tmp(9394).PlusSmallIcon, { color: "white" });
    obj[1] = callback(tmp(4928).Button, obj);
    tmp5 = callback(closure_5, obj);
  }
  return tmp5;
}
let c4 = importAllResult;
({ View: c5, TouchableHighlight: closure_6, StyleSheet } = get_ActivityIndicator);
({ ChannelTypes: map1, Permissions: closure_14, Fonts, NULL_STRING_CHANNEL_ID: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
createCacheKey = {
  headerRight: null,
  containerView: null,
  categoryText: null,
  categoryView: null,
  sortingCategoryView: null,
  edit: null,
  row: null,
  formRowStyle: null,
  dropHighlight: null,
  floatingActionButtonContainer: null,
};
createCacheKey = {};
let merged = Object.assign(
  importDefaultResult(Fonts.PRIMARY_SEMIBOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16),
);
createCacheKey.textTransform = "capitalize";
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let obj1 = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let obj2 = {};
const merged1 = Object.assign(
  importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.TEXT_SUBTLE, 12, { uppercase: true }),
);
createCacheKey[2] = obj2;
createCacheKey[3] = { paddingTop: 36, paddingBottom: 8 };
createCacheKey[4] = { paddingTop: 16 };
const importDefaultResult1 = importDefaultResult;
let obj3 = {};
const merged2 = Object.assign(importDefaultResult(Fonts.PRIMARY_SEMIBOLD, ThemesDefault.colors.TEXT_SUBTLE, 14));
createCacheKey[5] = obj3;
createCacheKey[6] = { marginTop: -StyleSheet.hairlineWidth };
createCacheKey[7] = { paddingVertical: 12 };
const importDefaultResult2 = importDefaultResult;
createCacheKey[8] = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360, opacity: 0.3 };
createCacheKey[9] = {
  position: "absolute",
  bottom: 16,
  right: 0,
  left: 0,
  flexDirection: "row",
  justifyContent: "center",
};
let closure_18 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class Category extends PureComponent {}
Category.prototype["render"] = function render() {
  const self = this;
  let tmp = callback2(this.context);
  const props = this.props;
  const category = props.category;
  const onPress = props.onPress;
  const sortingEnabled = props.sortingEnabled;
  let sortHandlers = null;
  ({ editStyle, actionIconStyle } = props);
  if (sortingEnabled) {
    sortHandlers = self.props.sortHandlers;
  }
  let obj = {
    accessibilityRole: "button",
    accessibilityActions: null,
    onAccessibilityAction: null,
    underlayColor: null,
  };
  obj = { name: "activate", label: null };
  const intl = category(1233).intl;
  obj[1] = intl.string(category(1233).t.bt75uw);
  const items = [obj];
  obj[1] = items;
  obj[2] = function onAccessibilityAction(nativeEvent) {
    let tmp;
    if ("activate" === nativeEvent.nativeEvent.actionName) {
      let tmp2Result;
      if (onPress != null) {
        tmp2Result = tmp2(category.id);
      }
      tmp = tmp2Result;
    }
    return tmp;
  };
  let obj2 = category(1362);
  const isThemeDarkResult = obj2.isThemeDark(self.context.theme);
  const tmp4 = closure_6;
  const hex2rgb = category(685).hex2rgb;
  const unsafe_rawColors = onPress(709).unsafe_rawColors;
  if (isThemeDarkResult) {
    let hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_700, 0.6);
    let tmp11 = tmp9;
  } else {
    hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_200, 0.6);
    tmp11 = tmp9;
  }
  obj[3] = hex2rgbResult;
  const merged = Object.assign(sortHandlers);
  obj = { title: category.name, numberOfLines: 1, textStyle: tmp.categoryText, viewStyle: null, icon: null };
  const items1 = [tmp.categoryView];
  let sortingCategoryView = null;
  if (sortingEnabled) {
    sortingCategoryView = tmp.sortingCategoryView;
  }
  items1[1] = sortingCategoryView;
  obj[3] = items1;
  if (null != onPress) {
    obj1 = { style: null, onPress: null };
    obj1[0] = editStyle;
    obj1[1] = function onPress() {
      return onPress(category.id);
    };
    let tmp3Result = tmp3(SectionEditAction, obj1);
  } else {
    tmp3Result = null;
    if (null != sortHandlers) {
      obj2 = { source: null, style: null };
      obj2[0] = tmp11(15966);
      obj2[1] = actionIconStyle;
      tmp3Result = tmp3(tmp5(1296).Icon, obj2);
    }
  }
  const tmp13 = closure_5;
  const tmp8 = category(685);
  obj[4] = tmp3Result;
  obj.children = closure_16(tmp13, { children: closure_16(category(8372).FormTitle, obj) });
  return closure_16(tmp4, obj);
};
Category.contextType = require("ManaContext").ThemeContext;
const PureComponent2 = importAllResult.PureComponent;
class SectionEditAction extends PureComponent2 {}
SectionEditAction.prototype["render"] = function render() {
  ({ style, onPress } = this.props);
  let obj = { accessibilityRole: "button", onPress, children: null };
  obj = { style, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.bt75uw);
  obj[2] = callback(Button.LegacyText, obj);
  return callback(PressableBase.PressableOpacity, obj);
};
SectionEditAction.contextType = require("ManaContext").ThemeContext;
const PureComponent3 = importAllResult.PureComponent;
class GuildSettingsModalChannels extends PureComponent3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { hovering: null };
    applyArgumentsResult.renderActiveDivider = function renderActiveDivider(arg0, id, id) {
      const props = applyArgumentsResult.props;
      ({ order, channelList, guild } = props);
      if (null != props.sortingType) {
        if (null != order) {
          if (null != channelList) {
            const localChannel = closure_1_12.getLocalChannel(id);
            let localChannel1 = null;
            if (null != id) {
              localChannel1 = closure_1_12.getLocalChannel(id);
            }
            let num = -1;
            if (null != id) {
              num = order.indexOf(id);
            }
            const index = order.indexOf(id);
            let obj = applyArgumentsResult(closure_1_3[32]);
            const dropData = obj.getDropData(localChannel1, num, localChannel, index, channelList);
            let tmp12 = null != dropData;
            if (tmp12) {
              const isFavoritesGuildIdResult = applyArgumentsResult(closure_1_3[13]).isFavoritesGuildId(guild.id);
              if (isFavoritesGuildIdResult) {
                tmp12 = isFavoritesGuildIdResult;
              } else if (null == dropData.parentId) {
                let canResult = closure_1_9.can(closure_1_14.MANAGE_CHANNELS, guild);
              } else {
                canResult = closure_1_9.can(closure_1_14.MANAGE_CHANNELS, closure_1_7.getChannel(dropData.parentId));
              }
              const tmp4Result = applyArgumentsResult(closure_1_3[13]);
            }
            let tmp21 = null;
            if (tmp12) {
              obj = { style: null };
              const items = [tmp.dropHighlight];
              obj = { height: null };
              obj[0] = arg0;
              items[1] = obj;
              obj[0] = items;
              tmp21 = closure_1_16(closure_1_5, obj);
            }
            return tmp21;
          }
        }
      }
      return null;
    };
    applyArgumentsResult.renderSectionHeader = function renderSectionHeader(section) {
      const id = section.section.category.id;
      const props = applyArgumentsResult.props;
      const sortingType = props.sortingType;
      let localChannel = null;
      if ("null" !== id) {
        localChannel = closure_1_12.getLocalChannel(id);
      }
      if (null != localChannel) {
        let obj = { category: null, sortingEnabled: null, editStyle: null, onPress: null };
        obj[0] = localChannel;
        let hasItem = null != sortingType;
        if (hasItem) {
          hasItem = sortingType.has(closure_1_13.GUILD_CATEGORY);
        }
        obj[1] = hasItem;
        obj[2] = tmp2.edit;
        let handleChannelPress;
        if (null == sortingType) {
          handleChannelPress = applyArgumentsResult.handleChannelPress;
        }
        obj[3] = handleChannelPress;
        let tmp5Result = closure_1_16(closure_1_19, obj);
        const tmp8 = closure_1_16;
        const tmp9 = closure_1_19;
      } else {
        obj = null;
        if (null == sortingType) {
          obj = null;
          if (props.channels.null.length > 0) {
            obj = { marginTop: 36 };
          }
        }
        obj = { style: null };
        obj[0] = obj;
        tmp5Result = closure_1_16(closure_1_5, obj);
        const tmp5 = closure_1_16;
        const tmp6 = closure_1_5;
      }
      return tmp5Result;
    };
    applyArgumentsResult.renderItem = function renderItem(item) {
      item = item.item;
      const channel = item.channel;
      if (null != channel) {
        const obj = { channel: null, isFavoritesGuild: null, sortingEnabled: null, onPress: null, style: null };
        obj[0] = channel;
        obj[1] = applyArgumentsResult(closure_1_3[13]).isFavoritesGuildId(tmp.props.guild.id);
        obj[2] = null != item.sortingType;
        obj[3] = tmp.handleChannelPress;
        obj[4] = tmp2.row;
        let tmp5 = closure_1_16(closure_1_20, obj);
        const obj2 = applyArgumentsResult(closure_1_3[13]);
      } else {
        tmp5 = closure_1_16(closure_1_5, {});
      }
      return tmp5;
    };
    applyArgumentsResult.handleHoverChange = function handleHoverChange(hovering) {
      applyArgumentsResult.setState({ hovering });
    };
    applyArgumentsResult.handleSortStart = function handleSortStart() {
      const items = [];
      if (closure_1_9.can(closure_1_14.MANAGE_CHANNELS, applyArgumentsResult.props.guild)) {
        let obj = { label: null, icon: null, onPress: null };
        const intl = applyArgumentsResult(closure_1_3[15]).intl;
        obj[0] = intl.string(applyArgumentsResult(closure_1_3[15]).t.ffgJrs);
        obj[1] = closure_1_1(closure_1_3[36]);
        obj[2] = function onPress() {
          callback(15964).startReordering(constants.GUILD_CATEGORY);
        };
        items.push(obj);
      }
      obj = { label: null, icon: null, onPress: null };
      const intl2 = applyArgumentsResult(closure_1_3[15]).intl;
      obj[0] = intl2.string(applyArgumentsResult(closure_1_3[15]).t.nIfr0Y);
      obj[1] = closure_1_1(closure_1_3[38]);
      obj[2] = function onPress() {
        callback(15964).startReordering(
          constants.GUILD_TEXT,
          constants.GUILD_ANNOUNCEMENT,
          constants.GUILD_FORUM,
          constants.GUILD_MEDIA,
          constants.GUILD_APP,
        );
      };
      items.push(obj);
      obj = { label: null, icon: null, onPress: null };
      const intl3 = applyArgumentsResult(closure_1_3[15]).intl;
      obj[0] = intl3.string(applyArgumentsResult(closure_1_3[15]).t.CYnO4s);
      obj[1] = closure_1_1(closure_1_3[39]);
      obj[2] = function onPress() {
        callback(15964).startReordering(constants.GUILD_VOICE, constants.GUILD_STAGE_VOICE);
      };
      items.push(obj);
      obj1 = { key: "GuildSettingsChannelsSort", header: null, options: null, hasIcons: true };
      const obj2 = { title: null };
      const intl4 = applyArgumentsResult(closure_1_3[15]).intl;
      obj2[0] = intl4.string(applyArgumentsResult(closure_1_3[15]).t["0dOFq+"]);
      obj1[1] = obj2;
      obj1[2] = items;
      const result = applyArgumentsResult(closure_1_3[27]).showSimpleActionSheet(obj1);
    };
    applyArgumentsResult.handleDrop = function handleDrop(arg0) {
      const props = guild.props;
      ({ order, channels, guild } = props);
      let obj = closure_1_12;
      const localChannel = closure_1_12.getLocalChannel(order[arg0.from]);
      const localChannel1 = closure_1_12.getLocalChannel(order[arg0.to]);
      const dropData = applyArgumentsResult(closure_1_3[32]).getDropData(
        localChannel,
        arg0.from,
        localChannel1,
        arg0.to,
        props.channelList,
      );
      if (null != dropData) {
        if (localChannel1 !== localChannel) {
          if (null != localChannel) {
            if (null != localChannel1) {
              let tmp14 = null != dropData;
              if (tmp14) {
                let tmp3Result = tmp3(tmp4[13]);
                const isFavoritesGuildIdResult = tmp3Result.isFavoritesGuildId(guild.id);
                if (isFavoritesGuildIdResult) {
                  tmp14 = isFavoritesGuildIdResult;
                } else if (null == dropData.parentId) {
                  let canResult = closure_1_9.can(closure_1_14.MANAGE_CHANNELS, guild);
                } else {
                  canResult = closure_1_9.can(closure_1_14.MANAGE_CHANNELS, closure_1_7.getChannel(dropData.parentId));
                }
              }
              if (tmp14) {
                const referenceId = dropData.referenceId;
                tmp3Result = tmp3(tmp4[32]);
                let localChannel2 = null;
                if (null != referenceId) {
                  localChannel2 = obj.getLocalChannel(referenceId);
                }
                const dnDUpdates = tmp3Result.getDnDUpdates(localChannel, localChannel2, dropData.parentId, channels);
                if (tmp3Result1.isFavoritesGuildId(guild.id)) {
                  closure_1_1(tmp4[37]).localChannelUpdate(dnDUpdates);
                  const obj13 = closure_1_1(tmp4[37]);
                  const result = tmp3(tmp4[40]).updateFavoriteChannels(dnDUpdates);
                } else {
                  const found = dnDUpdates.filter((id) => {
                    const channel = closure_1_7.getChannel(id.id);
                    if (null == channel) {
                      return false;
                    } else {
                      const channel1 = closure_1_7.getChannel(channel.parent_id);
                      if (channel.type !== closure_1_13.GUILD_CATEGORY) {
                        if (null != channel1) {
                          let canResult = closure_1_9.can(closure_1_14.MANAGE_CHANNELS, channel1);
                        }
                        return canResult;
                      }
                      canResult = closure_1_9.can(closure_1_14.MANAGE_CHANNELS, guild);
                    }
                  });
                  if (localChannel.parent_id !== dropData.parentId) {
                    const found1 = found.find((id) => {
                      if (id.id !== localChannel.id) {
                        return false;
                      } else {
                        const channel = closure_1_7.getChannel(id.parent_id);
                        if (null != channel) {
                          if (closure_1_9.can(closure_1_14.MANAGE_ROLES, tmp)) {
                            if (obj.can(tmp2.MANAGE_ROLES, channel)) {
                              const appChannelBotUserId = guild(found[41]).getAppChannelBotUserId(tmp);
                              const obj2 = guild(found[41]);
                              const areChannelsLockedResult = closure_1_2(found[31]).areChannelsLocked(
                                tmp,
                                channel,
                                appChannelBotUserId,
                              );
                              const obj3 = closure_1_2(found[31]);
                              let areChannelsLockedResult1 = closure_1_2(found[31]).areChannelsLocked(
                                tmp,
                                closure_1_7.getChannel(tmp.parent_id),
                                appChannelBotUserId,
                              );
                              let tmp9 = null == tmp.parent_id && !areChannelsLockedResult;
                              if (!tmp9) {
                                if (areChannelsLockedResult1) {
                                  areChannelsLockedResult1 = !areChannelsLockedResult;
                                }
                                tmp9 = areChannelsLockedResult1;
                              }
                              if (tmp9) {
                                closure_2 = id;
                              }
                              return true;
                            }
                          }
                          obj = closure_1_9;
                          tmp2 = closure_1_14;
                        }
                        return true;
                      }
                    });
                  }
                  if (null != parent_id) {
                    let channel = closure_1_7.getChannel(parent_id.parent_id);
                    obj = {
                      title: null,
                      body: null,
                      confirmText: null,
                      cancelText: null,
                      onConfirm: null,
                      onCancel: null,
                    };
                    const intl = tmp3(tmp4[15]).intl;
                    obj[0] = intl.string(tmp3(tmp4[15]).t.YWMtRe);
                    const intl2 = tmp3(tmp4[15]).intl;
                    obj = { channelName: null, categoryName: null };
                    const tmp3Result3 = tmp3(tmp4[23]);
                    obj[0] = tmp3Result3.computeChannelName(localChannel, closure_1_11, closure_1_10, true);
                    let str = "";
                    if (null != channel) {
                      str = tmp3(tmp4[23]).computeChannelName(channel, tmp29, tmp30);
                      const tmp3Result4 = tmp3(tmp4[23]);
                    }
                    obj[1] = str;
                    function saveUpdates() {
                      localChannel(found[37]).localChannelUpdate(found);
                      const obj = localChannel(found[37]);
                      localChannel(found[42]).batchChannelUpdate(localChannel.guild_id, found);
                    }
                    obj[1] = intl2.format(tmp3(tmp4[15]).t["iKW+jY"], obj);
                    const intl3 = tmp3(tmp4[15]).intl;
                    obj[2] = intl3.string(tmp3(tmp4[15]).t.eW8Gy4);
                    const intl4 = tmp3(tmp4[15]).intl;
                    obj[3] = intl4.string(tmp3(tmp4[15]).t.s4uM3b);
                    obj[4] = function onConfirm() {
                      closure_2.lock_permissions = true;
                      localChannel(found[37]).localChannelUpdate(found);
                      const obj = localChannel(found[37]);
                      localChannel(found[42]).batchChannelUpdate(localChannel.guild_id, found);
                    };
                    obj[5] = saveUpdates;
                    closure_1_1(tmp4[43]).show(obj);
                    const obj8 = closure_1_1(tmp4[43]);
                    tmp29 = closure_1_11;
                    tmp30 = closure_1_10;
                  } else {
                    closure_1_1(tmp4[37]).localChannelUpdate(found);
                    const obj6 = closure_1_1(tmp4[37]);
                    closure_1_1(tmp4[42]).batchChannelUpdate(localChannel.guild_id, found);
                    const obj7 = closure_1_1(tmp4[42]);
                  }
                }
                tmp3Result1 = tmp3(tmp4[13]);
              }
            }
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildSettingsModalChannels.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this.updateNavigation();
};
prototype["componentDidUpdate"] = function componentDidUpdate(arg0) {
  this.updateNavigation(arg0);
};
prototype["updateNavigation"] = function updateNavigation(sortingType) {
  const self = this;
  const _require = callback2(this.context);
  const props = this.props;
  ({ sortingType, navigation, guild, channels } = props);
  let tmp = null != sortingType;
  ({ order, user } = props);
  if (tmp) {
    tmp = sortingType === sortingType.sortingType;
  }
  if (tmp) {
    tmp = order === sortingType.order;
  }
  if (tmp) {
    tmp = guild === sortingType.guild;
  }
  if (tmp) {
    tmp = channels === sortingType.channels;
  }
  if (!tmp) {
    let fn;
    if (null != sortingType) {
      fn = () => null;
    }
    let obj = { headerLeft: null, headerRight: null, headerTitle: null };
    obj[0] = fn;
    if (null != sortingType) {
      let fn2 = () => {
        const obj = { textStyle: lib.headerRight, text: null, onPress: null };
        const intl = lib(closure_1_3[15]).intl;
        obj[1] = intl.string(lib(closure_1_3[15]).t.i4jeWR);
        obj[2] = self.props.onDone;
        return closure_1_16(lib(closure_1_3[30]).HeaderActionButton, obj);
      };
    } else {
      if (obj2.canManageACategory(user, guild, channels._categories)) {
        fn2 = () => {
          const obj = { textStyle: lib.headerRight, text: null, onPress: null };
          const intl = lib(closure_1_3[15]).intl;
          obj[1] = intl.string(lib(closure_1_3[15]).t["0dOFq+"]);
          obj[2] = self.handleSortStart;
          return closure_1_16(lib(closure_1_3[30]).HeaderActionButton, obj);
        };
      }
      obj2 = applyOverwritesAll;
    }
    obj[1] = fn2;
    let stringResult;
    if (null != sortingType) {
      let intl = require("../../../intl/index.native.tsx").intl;
      stringResult = intl.string(require("../../../intl/index.native.tsx").t.OGiMXJ);
    }
    obj[2] = stringResult;
    navigation.setOptions(obj);
  }
};
prototype["render"] = function render() {
  const self = this;
  const props = this.props;
  ({ channels, order, sortingType } = props);
  const hovering = this.state.hovering;
  c4 = undefined;
  const items = [];
  if (null != channels) {
    c4 = -1;
    const _categories = channels._categories;
    let item = _categories.forEach((channel) => {
      channel = channel.channel;
      let obj;
      if ("null" !== channel.id) {
        obj = channels(items[13]);
      }
      closure_4 = closure_4 + 1;
      obj = { data: [], category: channel, key: channel.id, index: closure_4 };
      let arr = obj[channel.id];
      const item = arr.forEach((channel) => {
        channel = channel.channel;
        obj = closure_1_1;
        if (tmp) {
          closure_4 = closure_4 + 1;
          const data = obj.data;
          obj = { key: null, channel: null, sortingType: null, isHovered: null, index: null };
          obj[0] = channel.id;
          obj[1] = channel;
          obj[2] = obj;
          obj[3] = closure_1_2 === channel.id;
          obj[4] = closure_4;
          data.push(obj);
        }
      });
      arr = items.push(obj);
    });
  }
  let obj = { style: callback2(this.context).containerView, children: null };
  obj = {
    sections: items,
    sortingEnabled: null != sortingType,
    renderSectionHeader: self.renderSectionHeader,
    renderItem: self.renderItem,
    onRowMoved: self.handleDrop,
    order: null,
    onHoverChange: null,
    renderActiveDivider: null,
    contentContainerStyle: null,
    fontScale: null,
  };
  const items1 = [closure_15];
  const tmp = callback2(this.context);
  const tmp3 = closure_17;
  const tmp4 = closure_5;
  const tmp6 = items;
  HermesBuiltin.arraySpread(order, 1);
  obj[5] = items1;
  ({ handleHoverChange: obj2[6], renderActiveDivider: obj2[7] } = self);
  obj[8] = self.props.contentContainerStyle;
  obj[9] = self.props.fontScale;
  const items2 = [callback(sortingType(items[33]), obj), ,];
  let tmp5Result = null == sortingType;
  if (tmp5Result) {
    obj = { guild: null };
    obj[0] = props.guild;
    tmp5Result = tmp5(CreateButton, obj);
  }
  items2[1] = tmp5Result;
  items2[2] = callback(channels(tmp6[34]).NavScrim, {});
  obj[1] = items2;
  return tmp3(tmp4, obj);
};
prototype["handleChannelPress"] = function handleChannelPress(arg0) {
  init.open(arg0);
};
GuildSettingsModalChannels.contextType = require("ManaContext").ThemeContext;
let obj4 = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360, opacity: 0.3 };
let result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalChannels.tsx");

export default function GuildSettingsModalChannelsConnected(onDone) {
  ({ guildId: require, contentContainerStyle } = onDone);
  let stateFromStores5;
  dependencyMap = undefined;
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  let items = [closure_8];
  const stateFromStores = initialize.useStateFromStores(items, () => closure_1_8.getGuild(closure_0));
  const obj2 = initialize;
  const items1 = [closure_12];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => closure_12.channels);
  const obj3 = initialize;
  const items2 = [closure_11];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    contentContainerStyle(bottom[45])(
      null != currentUser,
      "GuildSettingsModalChannelsConnected: currentUser cannot be undefined",
    );
    return currentUser;
  });
  const obj4 = initialize;
  const items3 = [closure_12];
  const stateFromStores3 = initialize.useStateFromStores(items3, () => closure_12.channelList);
  const obj5 = initialize;
  const items4 = [closure_12];
  const stateFromStores4 = initialize.useStateFromStores(items4, () => closure_12.order);
  const obj6 = initialize;
  const items5 = [closure_12];
  stateFromStores5 = initialize.useStateFromStores(items5, () => closure_12.sortingType);
  const tmp8 = contentContainerStyle(1627)();
  dependencyMap = tmp8;
  const items6 = [contentContainerStyle, tmp8.bottom, stateFromStores5];
  const memo = importAllResult.useMemo(() => {
    if (null == stateFromStores5) {
      const items = [contentContainerStyle];
      const obj = { paddingBottom: null };
      obj[0] = bottom.bottom + 32 + 44;
      items[1] = obj;
      let tmp = items;
    } else {
      tmp = contentContainerStyle;
    }
    return tmp;
  }, items6);
  getFontScale;
  let tmp12 = null;
  if (null != stateFromStores4) {
    tmp12 = null;
    if (null != stateFromStores3) {
      tmp12 = null;
      if (null != stateFromStores1) {
        tmp12 = null;
        if (null != stateFromStores) {
          tmp12 = null;
          if (null != stateFromStores2) {
            obj = {
              navigation: null,
              guild: null,
              channels: null,
              user: null,
              channelList: null,
              order: null,
              sortingType: null,
              contentContainerStyle: null,
              fontScale: null,
              onDone: null,
            };
            obj[0] = navigation;
            obj[1] = stateFromStores;
            obj[2] = stateFromStores1;
            obj[3] = stateFromStores2;
            obj[4] = stateFromStores3;
            obj[5] = stateFromStores4;
            obj[6] = stateFromStores5;
            obj[7] = memo;
            obj[8] = tmp11;
            obj[9] = onDone.onDone;
            tmp12 = callback(GuildSettingsModalChannels, obj);
          }
        }
      }
    }
  }
  return tmp12;
}
