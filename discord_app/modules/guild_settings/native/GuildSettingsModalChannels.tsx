// === Module 15406: ChannelItem ===

// Module 15406 (ChannelItem)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import useNavigation from "useNavigation" /* 1500 */;
import applyOverwritesAll from "applyOverwrites" /* 4026 */;
import getFontScale from "getFontScale" /* 4751 */;
import obj132Default from "obj132" /* 4827 */;
import PressableBase from "PressableBase" /* 5433 */;
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 6778 */;
import init from "init" /* 8132 */;
import registerAssetDefault from "registerAsset" /* 10983 */;
import registerAssetDefault2 from "registerAsset" /* 14643 */;
import dispatcherDefault from "dispatcher" /* 15405 */;
import registerAssetDefault3 from "registerAsset" /* 15410 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import sortCategoryList from "sortCategoryList" /* 15404 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importDefaultResult from "createTextStyle" /* 6782 */;

require = fn;
function ChannelItem(isFavoritesGuild) {
  ({ channelIconStyle, channel } = isFavoritesGuild);
  isFavoritesGuild = isFavoritesGuild.isFavoritesGuild;
  ({ sortingEnabled, onPress: importAll, sortHandlers } = isFavoritesGuild);
  ({ style, actionIconStyle } = isFavoritesGuild);
  let obj = channel(4661);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_18);
  obj1 = channel(1363);
  let obj2 = channel(589);
  const items = [closure_9];
  const items1 = [channel, isFavoritesGuild];
  const stateFromStores = obj2.useStateFromStores(items, () => {
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
  }, items1);
  let tmpResult = channel(6832);
  const channelIcon = tmpResult.getChannelIcon(channel);
  tmpResult = channel(6832);
  const channelIconComponent = tmpResult.getChannelIconComponent(channel);
  const tmpResult1 = channel(1363);
  const isThemeDarkResult = channel(1363).isThemeDark(obj1.useThemeContext().theme);
  const hex2rgb = channel(688).hex2rgb;
  const unsafe_rawColors = isFavoritesGuild(712).unsafe_rawColors;
  if (isThemeDarkResult) {
    let hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_700, 0.6);
    let tmp13 = tmp11;
  } else {
    hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_200, 0.6);
    tmp13 = tmp11;
  }
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
    let tmp7Result = callback(channelIconComponent, obj2);
  } else {
    const obj3 = { size: null, source: null, style: null };
    obj3[0] = channel(1297).Icon.Sizes.SMALL_20;
    obj3[1] = channelIcon;
    obj3[2] = channelIconStyle;
    tmp7Result = callback(channel(8083).FormRow.Icon, obj3);
  }
  const obj4 = { leading: tmp7Result, style: legacyClassComponentStyles.formRowStyle, label: null, onPress: null, trailing: null, numberOfLines: null };
  const tmpResult2 = channel(688);
  obj4[2] = channel(4984).computeChannelName(channel, closure_11, closure_10);
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
      obj5[0] = tmp13(15407);
      obj5[1] = actionIconStyle;
      tmp7Result = callback(channel(8083).FormRow.Icon, obj5);
    }
  }
  obj4[4] = tmp7Result;
  let num3;
  if (sortingEnabled) {
    num3 = 1;
  }
  obj4[5] = num3;
  obj1[1] = callback(channel(8083).FormRow, obj4);
  obj.children = callback(closure_5, obj1);
  return callback(closure_6, obj);
}
function CreateButton(guild) {
  guild = guild.guild;
  let bottom;
  let obj = guild(4661);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_18);
  bottom = bottom(1629)().bottom;
  let items = [bottom];
  const memo = importAllResult.useMemo(() => ({ bottom: 16 + bottom }), items);
  let tmp5 = null;
  if (closure_9.can(constants.MANAGE_CHANNELS, guild)) {
    obj = { style: null, children: null };
    const items1 = [legacyClassComponentStyles.floatingActionButtonContainer, memo];
    obj[0] = items1;
    obj = { text: null, onPress: null, icon: null };
    let intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t.CumH4u);
    obj[1] = function onPress() {
      guild(dependencyMap[27]);
      const obj = { title: null };
      const intl = guild(dependencyMap[15]).intl;
      obj[0] = intl.string(guild(dependencyMap[15]).t.CumH4u);
      obj[1] = obj;
      obj1 = { label: null, onPress: null };
      const intl2 = guild(dependencyMap[15]).intl;
      obj1[0] = intl2.string(guild(dependencyMap[15]).t.vHCZwr);
      obj1[1] = function onPress() {
        bottom(closure_1_3[28]).open(closure_1_13.GUILD_CATEGORY, user.id, null, null);
      };
      const items = [obj1, ];
      const obj2 = { label: null, onPress: null };
      const intl3 = guild(dependencyMap[15]).intl;
      obj2[0] = intl3.string(guild(dependencyMap[15]).t.GK18KJ);
      obj2[1] = function onPress() {
        bottom(closure_1_3[28]).open(null, user.id, null, null);
      };
      items[1] = obj2;
      obj[2] = items;
      const result = obj.showSimpleActionSheet(obj);
    };
    obj[2] = callback(tmp(9262).PlusSmallIcon, { color: "white" });
    obj[1] = callback(tmp(4745).Button, obj);
    tmp5 = callback(closure_5, obj);
  }
  return tmp5;
}
let c4 = importAllResult;
({ View: c5, TouchableHighlight: closure_6, StyleSheet } = get_ActivityIndicator);
({ ChannelTypes: map1, Permissions: closure_14, Fonts, NULL_STRING_CHANNEL_ID: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createCacheKey = {};
let merged = Object.assign(importDefaultResult(Fonts.PRIMARY_SEMIBOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
createCacheKey.textTransform = "capitalize";
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let obj2 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.TEXT_SUBTLE, 12, { uppercase: true }));
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
createCacheKey[9] = { position: "absolute", bottom: 16, right: 0, left: 0, flexDirection: "row", justifyContent: "center" };
let closure_18 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class Category extends PureComponent {
}
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
  let obj = { name: "activate", label: null };
  const intl = category(1236).intl;
  obj[1] = intl.string(category(1236).t.bt75uw);
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
  let obj2 = category(1363);
  const isThemeDarkResult = obj2.isThemeDark(self.context.theme);
  const hex2rgb = category(688).hex2rgb;
  const unsafe_rawColors = onPress(712).unsafe_rawColors;
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
  const items1 = [tmp.categoryView, ];
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
    let tmp3Result = callback(SectionEditAction, obj1);
  } else {
    tmp3Result = null;
    if (null != sortHandlers) {
      obj2 = { source: null, style: null };
      obj2[0] = tmp11(15407);
      obj2[1] = actionIconStyle;
      tmp3Result = callback(tmp5(1297).Icon, obj2);
    }
  }
  const tmp8 = category(688);
  obj[4] = tmp3Result;
  obj.children = callback(closure_5, { children: callback(category(8083).FormTitle, obj) });
  return callback(closure_6, obj);
};
Category.contextType = require("ManaContext").ThemeContext;
const PureComponent2 = importAllResult.PureComponent;
class SectionEditAction extends PureComponent2 {
}
SectionEditAction.prototype["render"] = function render() {
  ({ style, onPress } = this.props);
  const obj = { style, children: null };
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
    applyArgumentsResult.renderActiveDivider = function renderActiveDivider(arg0, order, order) {
      const props = applyArgumentsResult.props;
      ({ order, channelList, guild } = props);
      if (null != props.sortingType) {
        if (null != order) {
          if (null != channelList) {
            const localChannel = closure_1_12.getLocalChannel(order);
            let localChannel1 = null;
            if (null != order) {
              localChannel1 = closure_1_12.getLocalChannel(order);
            }
            let num = -1;
            if (null != order) {
              num = order.indexOf(order);
            }
            const index = order.indexOf(order);
            let obj = applyArgumentsResult(dependencyMap[32]);
            const dropData = obj.getDropData(localChannel1, num, localChannel, index, channelList);
            let tmp12 = null != dropData;
            if (tmp12) {
              const isFavoritesGuildIdResult = applyArgumentsResult(dependencyMap[13]).isFavoritesGuildId(guild.id);
              if (isFavoritesGuildIdResult) {
                tmp12 = isFavoritesGuildIdResult;
              } else if (null == dropData.parentId) {
                let canResult = closure_1_9.can(closure_1_14.MANAGE_CHANNELS, guild);
              } else {
                canResult = closure_1_9.can(closure_1_14.MANAGE_CHANNELS, closure_1_7.getChannel(dropData.parentId));
              }
              const tmp4Result = applyArgumentsResult(dependencyMap[13]);
            }
            let tmp21 = null;
            if (tmp12) {
              const items = [tmp.dropHighlight, ];
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
        let tmp5Result = closure_1_16(Category, obj);
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
      }
      return tmp5Result;
    };
    applyArgumentsResult.renderItem = function renderItem(item) {
      item = item.item;
      const channel = item.channel;
      if (null != channel) {
        const obj = { channel: null, isFavoritesGuild: null, sortingEnabled: null, onPress: null, style: null };
        obj[0] = channel;
        obj[1] = applyArgumentsResult(dependencyMap[13]).isFavoritesGuildId(applyArgumentsResult.props.guild.id);
        obj[2] = null != item.sortingType;
        obj[3] = applyArgumentsResult.handleChannelPress;
        obj[4] = tmp2.row;
        let tmp5 = closure_1_16(ChannelItem, obj);
        const obj2 = applyArgumentsResult(dependencyMap[13]);
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
        const intl = applyArgumentsResult(dependencyMap[15]).intl;
        obj[0] = intl.string(applyArgumentsResult(dependencyMap[15]).t.ffgJrs);
        obj[1] = registerAssetDefault3;
        obj[2] = function onPress() {
          callback(15405).startReordering(constants.GUILD_CATEGORY);
        };
        items.push(obj);
      }
      obj = { label: null, icon: null, onPress: null };
      const intl2 = applyArgumentsResult(dependencyMap[15]).intl;
      obj[0] = intl2.string(applyArgumentsResult(dependencyMap[15]).t.nIfr0Y);
      obj[1] = registerAssetDefault;
      obj[2] = function onPress() {
        callback(15405).startReordering(constants.GUILD_TEXT, constants.GUILD_ANNOUNCEMENT, constants.GUILD_FORUM, constants.GUILD_MEDIA);
      };
      items.push(obj);
      obj = { label: null, icon: null, onPress: null };
      const intl3 = applyArgumentsResult(dependencyMap[15]).intl;
      obj[0] = intl3.string(applyArgumentsResult(dependencyMap[15]).t.CYnO4s);
      obj[1] = registerAssetDefault2;
      obj[2] = function onPress() {
        callback(15405).startReordering(constants.GUILD_VOICE, constants.GUILD_STAGE_VOICE);
      };
      items.push(obj);
      obj1 = { key: "GuildSettingsChannelsSort", header: null, options: null, hasIcons: true };
      const obj2 = { title: null };
      const intl4 = applyArgumentsResult(dependencyMap[15]).intl;
      obj2[0] = intl4.string(applyArgumentsResult(dependencyMap[15]).t["0dOFq+"]);
      obj1[1] = obj2;
      obj1[2] = items;
      const result = applyArgumentsResult(dependencyMap[27]).showSimpleActionSheet(obj1);
      const obj4 = applyArgumentsResult(dependencyMap[27]);
    };
    applyArgumentsResult.handleDrop = function handleDrop(arg0) {
      const props = guild.props;
      ({ order, channels, guild } = props);
      let obj = closure_1_12;
      const localChannel = closure_1_12.getLocalChannel(order[arg0.from]);
      const localChannel1 = closure_1_12.getLocalChannel(order[arg0.to]);
      const dropData = applyArgumentsResult(dependencyMap[32]).getDropData(localChannel, arg0.from, localChannel1, arg0.to, props.channelList);
      if (null != dropData) {
        if (localChannel1 !== localChannel) {
          if (null != localChannel) {
            if (null != localChannel1) {
              let tmp14 = null != dropData;
              if (tmp14) {
                let tmp3Result = applyArgumentsResult(dependencyMap[13]);
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
                tmp3Result = applyArgumentsResult(dependencyMap[32]);
                let localChannel2 = null;
                if (null != referenceId) {
                  localChannel2 = obj.getLocalChannel(referenceId);
                }
                const dnDUpdates = tmp3Result.getDnDUpdates(localChannel, localChannel2, dropData.parentId, channels);
                if (tmp3Result1.isFavoritesGuildId(guild.id)) {
                  dispatcherDefault.localChannelUpdate(dnDUpdates);
                  const result = applyArgumentsResult(dependencyMap[40]).updateFavoriteChannels(dnDUpdates);
                  const tmp3Result2 = applyArgumentsResult(dependencyMap[40]);
                } else {
                  const found = dnDUpdates.filter((item, index) => {
                    const channel = closure_1_7.getChannel(item.id);
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
                    const found1 = found.find((item, index) => {
                      if (item.id !== localChannel.id) {
                        return false;
                      } else {
                        const channel = closure_1_7.getChannel(item.parent_id);
                        if (null != channel) {
                          if (closure_1_9.can(closure_1_14.MANAGE_ROLES, localChannel)) {
                            if (closure_1_9.can(closure_1_14.MANAGE_ROLES, channel)) {
                              const areChannelsLockedResult = closure_1_2(found[31]).areChannelsLocked(localChannel, channel);
                              const obj2 = closure_1_2(found[31]);
                              let areChannelsLockedResult1 = closure_1_2(found[31]).areChannelsLocked(localChannel, closure_1_7.getChannel(localChannel.parent_id));
                              let tmp7 = null == localChannel.parent_id && !areChannelsLockedResult;
                              if (!tmp7) {
                                if (areChannelsLockedResult1) {
                                  areChannelsLockedResult1 = !areChannelsLockedResult;
                                }
                                tmp7 = areChannelsLockedResult1;
                              }
                              if (tmp7) {
                                closure_2 = item;
                              }
                              return true;
                            }
                          }
                        }
                        return true;
                      }
                    });
                  }
                  if (null != parent_id) {
                    let channel = closure_1_7.getChannel(parent_id.parent_id);
                    obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
                    const intl = applyArgumentsResult(dependencyMap[15]).intl;
                    obj[0] = intl.string(applyArgumentsResult(dependencyMap[15]).t.YWMtRe);
                    const intl2 = applyArgumentsResult(dependencyMap[15]).intl;
                    obj = { channelName: null, categoryName: null };
                    const tmp3Result3 = applyArgumentsResult(dependencyMap[23]);
                    obj[0] = tmp3Result3.computeChannelName(localChannel, closure_1_11, closure_1_10, true);
                    let str = "";
                    if (null != channel) {
                      str = applyArgumentsResult(dependencyMap[23]).computeChannelName(channel, closure_1_11, closure_1_10);
                      const tmp3Result4 = applyArgumentsResult(dependencyMap[23]);
                    }
                    obj[1] = str;
                    function saveUpdates() {
                      localChannel(found[37]).localChannelUpdate(found);
                      const obj = localChannel(found[37]);
                      localChannel(found[41]).batchChannelUpdate(localChannel.guild_id, found);
                    }
                    obj[1] = intl2.format(applyArgumentsResult(dependencyMap[15]).t["iKW+jY"], obj);
                    const intl3 = applyArgumentsResult(dependencyMap[15]).intl;
                    obj[2] = intl3.string(applyArgumentsResult(dependencyMap[15]).t.eW8Gy4);
                    const intl4 = applyArgumentsResult(dependencyMap[15]).intl;
                    obj[3] = intl4.string(applyArgumentsResult(dependencyMap[15]).t.s4uM3b);
                    obj[4] = function onConfirm() {
                      closure_2.lock_permissions = true;
                      localChannel(found[37]).localChannelUpdate(found);
                      const obj = localChannel(found[37]);
                      localChannel(found[41]).batchChannelUpdate(localChannel.guild_id, found);
                    };
                    obj[5] = saveUpdates;
                    obj132Default.show(obj);
                  } else {
                    dispatcherDefault.localChannelUpdate(found);
                    showTooManyUserGuildsAlertDefault.batchChannelUpdate(localChannel.guild_id, found);
                  }
                }
                tmp3Result1 = applyArgumentsResult(dependencyMap[13]);
              }
            }
          }
        }
      }
      let obj2 = applyArgumentsResult(dependencyMap[32]);
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
        const intl = lib(dependencyMap[15]).intl;
        obj[1] = intl.string(lib(dependencyMap[15]).t.i4jeWR);
        obj[2] = self.props.onDone;
        return closure_1_16(lib(dependencyMap[30]).HeaderActionButton, obj);
      };
    } else {
      if (obj2.canManageACategory(user, guild, channels._categories)) {
        fn2 = () => {
          const obj = { textStyle: lib.headerRight, text: null, onPress: null };
          const intl = lib(dependencyMap[15]).intl;
          obj[1] = intl.string(lib(dependencyMap[15]).t["0dOFq+"]);
          obj[2] = self.handleSortStart;
          return closure_1_16(lib(dependencyMap[30]).HeaderActionButton, obj);
        };
      }
      obj2 = applyOverwritesAll;
    }
    obj[1] = fn2;
    let stringResult;
    if (null != sortingType) {
      let intl = _require(1236).intl;
      stringResult = intl.string(_require(1236).t.OGiMXJ);
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
    let item = _categories.forEach((item, index) => {
      let channel = item.channel;
      let obj;
      if ("null" !== channel.id) {
        obj = channels(items[13]);
      }
      closure_4 = closure_4 + 1;
      obj = { data: [], category: channel, key: channel.id, index: closure_4 };
      let arr = obj[channel.id];
      item = arr.forEach((item, index) => {
        const channel = item.channel;
        obj = sortingType;
        if (tmp) {
          closure_4 = closure_4 + 1;
          const data = obj.data;
          obj = { key: null, channel: null, sortingType: null, isHovered: null, index: null };
          obj[0] = channel.id;
          obj[1] = channel;
          obj[2] = obj;
          obj[3] = hovering === channel.id;
          obj[4] = closure_4;
          data.push(obj);
        }
        tmp = null == sortingType || obj.has(channel.type);
      });
      arr = items.push(obj);
    });
  }
  { style: callback2(this.context).containerView, children: null };
  let obj = { sections: items, sortingEnabled: null != sortingType, renderSectionHeader: self.renderSectionHeader, renderItem: self.renderItem, onRowMoved: self.handleDrop, order: null, onHoverChange: null, renderActiveDivider: null, contentContainerStyle: null, fontScale: null };
  const items1 = [closure_15];
  let tmp = callback2(this.context);
  const tmp6 = items;
  HermesBuiltin.arraySpread(order, 1);
  obj[5] = items1;
  ({ handleHoverChange: obj2[6], renderActiveDivider: obj2[7] } = self);
  obj[8] = self.props.contentContainerStyle;
  obj[9] = self.props.fontScale;
  const items2 = [callback(sortingType(items[33]), obj), , ];
  let tmp5Result = null == sortingType;
  if (tmp5Result) {
    obj = { guild: null };
    obj[0] = props.guild;
    tmp5Result = callback(CreateButton, obj);
  }
  items2[1] = tmp5Result;
  items2[2] = callback(channels(tmp6[34]).NavScrim, {});
  obj[1] = items2;
  return callback2(closure_5, obj);
};
prototype["handleChannelPress"] = function handleChannelPress(arg0) {
  init.open(arg0);
};
GuildSettingsModalChannels.contextType = require("ManaContext").ThemeContext;
let result = require("obj132").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalChannels.tsx");

export default function GuildSettingsModalChannelsConnected(onDone) {
  ({ guildId: require, contentContainerStyle } = onDone);
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  let items = [closure_8];
  const stateFromStores = initialize.useStateFromStores(items, () => closure_1_8.getGuild(closure_0));
  const items1 = [closure_12];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => closure_12.channels);
  const items2 = [closure_11];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    contentContainerStyle(bottom[44])(null != currentUser, "GuildSettingsModalChannelsConnected: currentUser cannot be undefined");
    return currentUser;
  });
  const items3 = [closure_12];
  const stateFromStores3 = initialize.useStateFromStores(items3, () => closure_12.channelList);
  const items4 = [closure_12];
  const stateFromStores4 = initialize.useStateFromStores(items4, () => closure_12.order);
  const items5 = [closure_12];
  const stateFromStores5 = initialize.useStateFromStores(items5, () => closure_12.sortingType);
  const tmp8 = contentContainerStyle(1629)();
  dependencyMap = tmp8;
  const items6 = [contentContainerStyle, tmp8.bottom, stateFromStores5];
  const memo = importAllResult.useMemo(() => {
    if (null == stateFromStores5) {
      const items = [contentContainerStyle, ];
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
            obj = { navigation: null, guild: null, channels: null, user: null, channelList: null, order: null, sortingType: null, contentContainerStyle: null, fontScale: null, onDone: null };
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
};