// === Module 16145: GuildSettingsModalChannels ===

// Module 16145 (GuildSettingsModalChannels)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useNavigation from "useNavigation" /* 1483 */;
import FavoritesUtils from "FavoritesUtils" /* 1982 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import shared from "shared" /* 4411 */;
import useChannelName from "useChannelName" /* 4713 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import useFontScale from "useFontScale" /* 4982 */;
import Pressables from "Pressables" /* 5123 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import showSimpleActionSheet from "showSimpleActionSheet" /* 7195 */;
import HeaderActionButton from "HeaderActionButton" /* 7377 */;
import Form from "Form" /* 8593 */;
import ChannelSettingsActionCreators from "ChannelSettingsActionCreators" /* 8625 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10223 */;
import _modDef11804 from "module_11804" /* 11804 */;
import _modDef15297 from "module_15297" /* 15297 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16144 */;
import ChannelSortingUtils from "ChannelSortingUtils" /* 16147 */;
import _modDef16149 from "module_16149" /* 16149 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 16143 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
function ChannelItem(isFavoritesGuild) {
  ({ channelIconStyle, channel } = isFavoritesGuild);
  isFavoritesGuild = isFavoritesGuild.isFavoritesGuild;
  ({ sortingEnabled, onPress: importAll, sortHandlers } = isFavoritesGuild);
  ({ style, actionIconStyle } = isFavoritesGuild);
  let obj = channel(4560);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_18);
  let obj1 = channel(4411);
  let obj2 = channel(504);
  const items = [PermissionStore];
  const items1 = [channel, isFavoritesGuild];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    if (isFavoritesGuild) {
      return isFavoritesGuild;
    } else {
      let guild_id = channel;
      if (null == channel.parent_id) {
        let obj = { guildId: null };
        guild_id = guild_id.guild_id;
        obj.guildId = guild_id;
        let result = PermissionStore.canWithPartialContext(constants2.MANAGE_CHANNELS, obj);
      } else {
        obj = { channelId: guild_id.parent_id };
        result = PermissionStore.canWithPartialContext(constants2.MANAGE_CHANNELS, obj);
      }
    }
  }, items1);
  let tmpResult = channel(5028);
  const channelIcon = tmpResult.getChannelIcon(channel);
  tmpResult = channel(5028);
  const channelIconComponent = tmpResult.getChannelIconComponent(channel);
  const tmpResult1 = channel(4411);
  const isThemeDarkResult = channel(4411).isThemeDark(obj1.useThemeContext().theme);
  const hex2rgb = channel(1091).hex2rgb;
  const unsafe_rawColors = isFavoritesGuild(576).unsafe_rawColors;
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
    obj2 = { style: channelIconStyle, size: "sm" };
    let tmp7Result = closure_16(channelIconComponent, obj2);
  } else {
    const obj3 = { size: channel(1178).Icon.Sizes.SMALL_20, source: channelIcon, style: channelIconStyle };
    tmp7Result = closure_16(channel(8593).FormRow.Icon, obj3);
  }
  const obj4 = { leading: tmp7Result, style: legacyClassComponentStyles.formRowStyle, label: null, onPress: null, trailing: null, numberOfLines: null };
  const tmpResult2 = channel(1091);
  obj4.label = channel(4713).computeChannelName(channel, UserStore, RelationshipStore);
  let fn;
  if (!sortingEnabled) {
    fn = () => importAll(channel.id);
  }
  obj4.onPress = fn;
  tmp7Result = null;
  if (stateFromStores) {
    tmp7Result = null;
    if (sortingEnabled) {
      const obj5 = { source: tmp13(16146), style: actionIconStyle };
      tmp7Result = closure_16(channel(8593).FormRow.Icon, obj5);
    }
  }
  obj4.trailing = tmp7Result;
  let num3;
  if (sortingEnabled) {
    num3 = 1;
  }
  obj4.numberOfLines = num3;
  obj1.children = closure_16(channel(8593).FormRow, obj4);
  obj.children = closure_16(closure_5, obj1);
  return closure_16(closure_6, obj);
}
function CreateButton(guild) {
  guild = guild.guild;
  let bottom;
  let obj = guild(4560);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_18);
  bottom = bottom(1611)().bottom;
  let items = [bottom];
  const memo = noop.useMemo(() => ({ bottom: 16 + bottom }), items);
  let tmp5 = null;
  if (PermissionStore.can(constants2.MANAGE_CHANNELS, guild)) {
    obj = { style: null, children: null };
    const items1 = [legacyClassComponentStyles.floatingActionButtonContainer, memo];
    obj.style = items1;
    obj = { text: null, onPress: null, icon: null };
    let intl = tmp(1114).intl;
    obj.text = intl.string(tmp(1114).t.CumH4u);
    obj.onPress = function onPress() {
      let obj = { key: "GuildSettingsChannelsCreate", header: null, options: null, hasIcons: false };
      obj = { title: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.CumH4u);
      obj.header = obj;
      const obj1 = { label: null, onPress: null };
      const intl2 = util.intl;
      obj1.label = intl2.string(util.t.vHCZwr);
      obj1.onPress = function onPress() {
        bottom(9737).open(constants.GUILD_CATEGORY, user.id, null, null);
      };
      const items = [obj1, ];
      const obj2 = { label: null, onPress: null };
      const intl3 = util.intl;
      obj2.label = intl3.string(util.t.GK18KJ);
      obj2.onPress = function onPress() {
        bottom(9737).open(null, user.id, null, null);
      };
      items[1] = obj2;
      obj.options = items;
      const result = obj.showSimpleActionSheet(obj);
    };
    obj.icon = closure_16(tmp(8867).PlusSmallIcon, { color: "white" });
    obj.children = closure_16(tmp(4975).Button, obj);
    tmp5 = closure_16(closure_5, obj);
  }
  return tmp5;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, TouchableHighlight: metroRequire, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ ChannelTypes: map1, Permissions: closure_14, Fonts, NULL_STRING_CHANNEL_ID: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
fn(4560);
let createStyles = { headerRight: null, containerView: null, categoryText: null, categoryView: null, sortingCategoryView: null, edit: null, row: null, formRowStyle: null, dropHighlight: null, floatingActionButtonContainer: null };
createStyles = {};
let merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
createStyles.textTransform = "capitalize";
createStyles.headerRight = createStyles;
createStyles.containerView = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true }));
createStyles.categoryText = {};
createStyles.categoryView = { paddingTop: 36, paddingBottom: 8 };
createStyles.sortingCategoryView = { paddingTop: 16 };
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_SUBTLE, 14));
createStyles.edit = {};
createStyles.row = { marginTop: -StyleSheet.hairlineWidth };
createStyles.formRowStyle = { paddingVertical: 12 };
let obj1 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj2 = {};
let obj3 = {};
createStyles.dropHighlight = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, opacity: 0.3 };
createStyles.floatingActionButtonContainer = { position: "absolute", bottom: 16, right: 0, left: 0, flexDirection: "row", justifyContent: "center" };
let closure_18 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class Category extends PureComponent {
}
Category.prototype["render"] = function render() {
  const self = this;
  let tmp = closure_18(this.context);
  const props = this.props;
  const category = props.category;
  const onPress = props.onPress;
  const sortingEnabled = props.sortingEnabled;
  let sortHandlers = null;
  ({ editStyle, actionIconStyle } = props);
  if (sortingEnabled) {
    sortHandlers = self.props.sortHandlers;
  }
  let obj = { accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, underlayColor: null };
  obj = { name: "activate", label: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.bt75uw);
  const items = [obj];
  obj.accessibilityActions = items;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
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
  let obj2 = shared;
  const isThemeDarkResult = obj2.isThemeDark(self.context.theme);
  const hex2rgb = utils_ColorUtils.hex2rgb;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    let hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_700, 0.6);
    let tmp11 = importDefault;
  } else {
    hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_200, 0.6);
    tmp11 = importDefault;
  }
  obj.underlayColor = hex2rgbResult;
  const merged = Object.assign(sortHandlers);
  obj = { title: category.name, numberOfLines: 1, textStyle: tmp.categoryText, viewStyle: null, icon: null };
  const items1 = [tmp.categoryView, ];
  let sortingCategoryView = null;
  if (sortingEnabled) {
    sortingCategoryView = tmp.sortingCategoryView;
  }
  items1[1] = sortingCategoryView;
  obj.viewStyle = items1;
  if (null != onPress) {
    const obj1 = {
      style: editStyle,
      onPress() {
          return onPress(category.id);
        }
    };
    let tmp3Result = value2(SectionEditAction, obj1);
  } else {
    tmp3Result = null;
    if (null != sortHandlers) {
      obj2 = { source: tmp11(16146), style: actionIconStyle };
      tmp3Result = value2(native.Icon, obj2);
    }
  }
  obj.icon = tmp3Result;
  obj.children = value2(hasOwnProperty, { children: value2(Form.FormTitle, obj) });
  return value2(timestampProducer, obj);
};
Category.contextType = fn(4271).ThemeContext;
const PureComponent2 = noop.PureComponent;
class SectionEditAction extends PureComponent2 {
}
SectionEditAction.prototype["render"] = function render() {
  ({ style, onPress } = this.props);
  let obj = { accessibilityRole: "button", onPress, children: null };
  obj = { style, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.bt75uw);
  obj.children = value2(native.LegacyText, obj);
  return value2(Pressables.PressableOpacity, obj);
};
SectionEditAction.contextType = fn(4271).ThemeContext;
const PureComponent3 = noop.PureComponent;
class GuildSettingsModalChannels extends PureComponent3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { hovering: null };
    applyArgumentsResult.renderActiveDivider = function renderActiveDivider(height, order, order) {
      const props = applyArgumentsResult.props;
      ({ order, channelList, guild } = props);
      if (null != props.sortingType) {
        if (null != order) {
          if (null != channelList) {
            const localChannel = GuildSettingsModalChannelsStore.getLocalChannel(order);
            let localChannel1 = null;
            if (null != order) {
              localChannel1 = GuildSettingsModalChannelsStore.getLocalChannel(order);
            }
            let num = -1;
            if (null != order) {
              num = order.indexOf(order);
            }
            const index = order.indexOf(order);
            let obj = ChannelSortingUtils;
            const dropData = obj.getDropData(localChannel1, num, localChannel, index, channelList);
            let tmp12 = null != dropData;
            if (tmp12) {
              const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(guild.id);
              if (isFavoritesGuildIdResult) {
                tmp12 = isFavoritesGuildIdResult;
              } else if (null == dropData.parentId) {
                let canResult = PermissionStore.can(constants2.MANAGE_CHANNELS, guild);
              } else {
                canResult = PermissionStore.can(constants2.MANAGE_CHANNELS, ChannelStore.getChannel(dropData.parentId));
              }
              const tmp4Result = FavoritesUtils;
            }
            let tmp21 = null;
            if (tmp12) {
              obj = { style: null };
              const items = [tmp.dropHighlight, ];
              obj = { height };
              items[1] = obj;
              obj.style = items;
              tmp21 = value2(hasOwnProperty, obj);
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
        localChannel = GuildSettingsModalChannelsStore.getLocalChannel(id);
      }
      if (null != localChannel) {
        let obj = { category: localChannel, sortingEnabled: null, editStyle: null, onPress: null };
        let hasItem = null != sortingType;
        if (hasItem) {
          hasItem = sortingType.has(constants.GUILD_CATEGORY);
        }
        obj.sortingEnabled = hasItem;
        obj.editStyle = tmp2.edit;
        let handleChannelPress;
        if (null == sortingType) {
          handleChannelPress = applyArgumentsResult.handleChannelPress;
        }
        obj.onPress = handleChannelPress;
        let tmp5Result = value2(Category, obj);
      } else {
        obj = null;
        if (null == sortingType) {
          obj = null;
          if (props.channels.null.length > 0) {
            obj = { marginTop: 36 };
          }
        }
        obj = { style: null };
        obj.style = obj;
        tmp5Result = value2(hasOwnProperty, obj);
      }
      return tmp5Result;
    };
    applyArgumentsResult.renderItem = function renderItem(item) {
      item = item.item;
      const channel = item.channel;
      if (null != channel) {
        const obj = { channel, isFavoritesGuild: FavoritesUtils.isFavoritesGuildId(applyArgumentsResult.props.guild.id), sortingEnabled: null != item.sortingType, onPress: applyArgumentsResult.handleChannelPress, style: tmp2.row };
        let tmp5 = value2(ChannelItem, obj);
      } else {
        tmp5 = value2(hasOwnProperty, {});
      }
      return tmp5;
    };
    applyArgumentsResult.handleHoverChange = function handleHoverChange(hovering) {
      applyArgumentsResult.setState({ hovering });
    };
    applyArgumentsResult.handleSortStart = function handleSortStart() {
      const items = [];
      if (PermissionStore.can(constants2.MANAGE_CHANNELS, applyArgumentsResult.props.guild)) {
        let obj = { label: null, icon: null, onPress: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.ffgJrs);
        obj.icon = _modDef16149;
        obj.onPress = function onPress() {
          closure_1_1(16144).startReordering(constants.GUILD_CATEGORY);
        };
        items.push(obj);
      }
      obj = { label: null, icon: null, onPress: null };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t.nIfr0Y);
      obj.icon = _modDef11804;
      obj.onPress = function onPress() {
        closure_1_1(16144).startReordering(constants.GUILD_TEXT, constants.GUILD_ANNOUNCEMENT, constants.GUILD_FORUM, constants.GUILD_MEDIA, constants.GUILD_APP);
      };
      items.push(obj);
      obj = { label: null, icon: null, onPress: null };
      const intl3 = util.intl;
      obj.label = intl3.string(util.t.CYnO4s);
      obj.icon = _modDef15297;
      obj.onPress = function onPress() {
        closure_1_1(16144).startReordering(constants.GUILD_VOICE, constants.GUILD_STAGE_VOICE);
      };
      items.push(obj);
      const obj1 = { key: "GuildSettingsChannelsSort", header: null, options: null, hasIcons: true };
      const obj2 = { title: null };
      const intl4 = util.intl;
      obj2.title = intl4.string(util.t["0dOFq+"]);
      obj1.header = obj2;
      obj1.options = items;
      const result = showSimpleActionSheet.showSimpleActionSheet(obj1);
    };
    applyArgumentsResult.handleDrop = function handleDrop(arg0) {
      const props = applyArgumentsResult.props;
      ({ order, channels, guild } = props);
      let obj = GuildSettingsModalChannelsStore;
      const localChannel = GuildSettingsModalChannelsStore.getLocalChannel(order[arg0.from]);
      const localChannel1 = GuildSettingsModalChannelsStore.getLocalChannel(order[arg0.to]);
      const dropData = ChannelSortingUtils.getDropData(localChannel, arg0.from, localChannel1, arg0.to, props.channelList);
      if (null != dropData) {
        if (localChannel1 !== localChannel) {
          if (null != localChannel) {
            if (null != localChannel1) {
              let tmp14 = null != dropData;
              if (tmp14) {
                let tmp3Result = FavoritesUtils;
                const isFavoritesGuildIdResult = tmp3Result.isFavoritesGuildId(guild.id);
                if (isFavoritesGuildIdResult) {
                  tmp14 = isFavoritesGuildIdResult;
                } else if (null == dropData.parentId) {
                  let canResult = PermissionStore.can(constants2.MANAGE_CHANNELS, guild);
                } else {
                  canResult = PermissionStore.can(constants2.MANAGE_CHANNELS, ChannelStore.getChannel(dropData.parentId));
                }
              }
              if (tmp14) {
                const referenceId = dropData.referenceId;
                tmp3Result = ChannelSortingUtils;
                let localChannel2 = null;
                if (null != referenceId) {
                  localChannel2 = obj.getLocalChannel(referenceId);
                }
                const dnDUpdates = tmp3Result.getDnDUpdates(localChannel, localChannel2, dropData.parentId, channels);
                if (tmp3Result1.isFavoritesGuildId(guild.id)) {
                  GuildSettingsModalChannelsActionCreatorsDefault.localChannelUpdate(dnDUpdates);
                  const result = FavoritesActionCreators.updateFavoriteChannels(dnDUpdates);
                  const tmp3Result2 = FavoritesActionCreators;
                } else {
                  const found = dnDUpdates.filter((id) => {
                    const channel = ChannelStore.getChannel(id.id);
                    if (null == channel) {
                      return false;
                    } else {
                      const channel1 = ChannelStore.getChannel(channel.parent_id);
                      if (channel.type !== constants.GUILD_CATEGORY) {
                        if (null != channel1) {
                          let canResult = PermissionStore.can(constants2.MANAGE_CHANNELS, channel1);
                        }
                        return canResult;
                      }
                      canResult = PermissionStore.can(constants2.MANAGE_CHANNELS, guild);
                    }
                  });
                  if (localChannel.parent_id !== dropData.parentId) {
                    const found1 = found.find((id) => {
                      if (id.id !== localChannel.id) {
                        return false;
                      } else {
                        const channel = ChannelStore.getChannel(id.parent_id);
                        if (null != channel) {
                          if (PermissionStore.can(constants2.MANAGE_ROLES, localChannel)) {
                            if (PermissionStore.can(constants2.MANAGE_ROLES, channel)) {
                              const appChannelBotUserId = applyArgumentsResult(11610).getAppChannelBotUserId(localChannel);
                              const obj2 = applyArgumentsResult(11610);
                              const areChannelsLockedResult = PermissionUtilsAll.areChannelsLocked(localChannel, channel, appChannelBotUserId);
                              let areChannelsLockedResult1 = PermissionUtilsAll.areChannelsLocked(localChannel, ChannelStore.getChannel(localChannel.parent_id), appChannelBotUserId);
                              let tmp9 = null == localChannel.parent_id && !areChannelsLockedResult;
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
                        }
                        return true;
                      }
                    });
                  }
                  if (null != parent_id) {
                    let channel = ChannelStore.getChannel(parent_id.parent_id);
                    obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
                    const intl = util.intl;
                    obj.title = intl.string(util.t.YWMtRe);
                    const intl2 = util.intl;
                    obj = { channelName: null, categoryName: null };
                    const tmp3Result3 = useChannelName;
                    obj.channelName = tmp3Result3.computeChannelName(localChannel, UserStore, RelationshipStore, true);
                    let str = "";
                    if (null != channel) {
                      str = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
                      const tmp3Result4 = useChannelName;
                    }
                    obj.categoryName = str;
                    function saveUpdates() {
                      GuildSettingsModalChannelsActionCreatorsDefault.localChannelUpdate(found);
                      GuildActionCreatorsDefault.batchChannelUpdate(localChannel.guild_id, found);
                    }
                    obj.body = intl2.format(util.t["iKW+jY"], obj);
                    const intl3 = util.intl;
                    obj.confirmText = intl3.string(util.t.eW8Gy4);
                    const intl4 = util.intl;
                    obj.cancelText = intl4.string(util.t.s4uM3b);
                    obj.onConfirm = function onConfirm() {
                      closure_2.lock_permissions = true;
                      GuildSettingsModalChannelsActionCreatorsDefault.localChannelUpdate(found);
                      GuildActionCreatorsDefault.batchChannelUpdate(localChannel.guild_id, found);
                    };
                    obj.onCancel = saveUpdates;
                    AlertActionCreatorsDefault.show(obj);
                  } else {
                    GuildSettingsModalChannelsActionCreatorsDefault.localChannelUpdate(found);
                    GuildActionCreatorsDefault.batchChannelUpdate(localChannel.guild_id, found);
                  }
                }
                tmp3Result1 = FavoritesUtils;
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
  _require = closure_18(this.context);
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
    let obj = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (null != sortingType) {
      let fn2 = () => {
        const obj = { textStyle: closure_0.headerRight, text: null, onPress: null };
        const intl = util.intl;
        obj.text = intl.string(util.t.i4jeWR);
        obj.onPress = self.props.onDone;
        return value2(HeaderActionButton.HeaderActionButton, obj);
      };
    } else {
      if (obj2.canManageACategory(user, guild, channels._categories)) {
        fn2 = () => {
          const obj = { textStyle: closure_0.headerRight, text: null, onPress: null };
          const intl = util.intl;
          obj.text = intl.string(util.t["0dOFq+"]);
          obj.onPress = self.handleSortStart;
          return value2(HeaderActionButton.HeaderActionButton, obj);
        };
      }
      obj2 = PermissionUtilsAll;
    }
    obj.headerRight = fn2;
    let stringResult;
    if (null != sortingType) {
      let intl = require("util").intl;
      stringResult = intl.string(require("util").t.OGiMXJ);
    }
    obj.headerTitle = stringResult;
    navigation.setOptions(obj);
  }
};
prototype["render"] = function render() {
  const self = this;
  const props = this.props;
  ({ channels, order, sortingType } = props);
  const hovering = this.state.hovering;
  let index;
  const items = [];
  if (null != channels) {
    index = -1;
    const _categories = channels._categories;
    let item = _categories.forEach((channel) => {
      channel = channel.channel;
      sortingType = undefined;
      if ("null" !== channel.id) {
        sortingType = channels(items[13]);
      }
      index = index + 1;
      sortingType = { data: [], category: channel, key: channel.id, index };
      let arr = sortingType[channel.id];
      const item = arr.forEach((channel) => {
        channel = channel.channel;
        if (tmp) {
          index = index + 1;
          const data = sortingType.data;
          sortingType = { key: channel.id, channel, sortingType: null, isHovered: null, index: null };
          sortingType.sortingType = sortingType;
          sortingType.isHovered = hovering === channel.id;
          sortingType.index = index;
          data.push(sortingType);
        }
        tmp = null == sortingType || sortingType.has(channel.type);
      });
      arr = items.push(sortingType);
    });
  }
  let obj = { style: closure_18(this.context).containerView, children: null };
  obj = { sections: items, sortingEnabled: null != sortingType, renderSectionHeader: self.renderSectionHeader, renderItem: self.renderItem, onRowMoved: self.handleDrop, order: null, onHoverChange: null, renderActiveDivider: null, contentContainerStyle: null, fontScale: null };
  const items1 = [closure_15];
  let tmp = closure_18(this.context);
  const tmp6 = items;
  HermesBuiltin.arraySpread(order, 1);
  obj.order = items1;
  ({ handleHoverChange: obj2.onHoverChange, renderActiveDivider: obj2.renderActiveDivider } = self);
  obj.contentContainerStyle = self.props.contentContainerStyle;
  obj.fontScale = self.props.fontScale;
  const items2 = [closure_16(sortingType(items[33]), obj), , ];
  let tmp5Result = null == sortingType;
  if (tmp5Result) {
    obj = { guild: props.guild };
    tmp5Result = closure_16(CreateButton, obj);
  }
  items2[1] = tmp5Result;
  items2[2] = closure_16(channels(tmp6[34]).NavScrim, {});
  obj.children = items2;
  return closure_17(closure_5, obj);
};
prototype["handleChannelPress"] = function handleChannelPress(id) {
  ChannelSettingsActionCreators.open(id);
};
GuildSettingsModalChannels.contextType = fn(4271).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalChannels.tsx");

export default function GuildSettingsModalChannelsConnected(onDone) {
  ({ guildId: require, contentContainerStyle } = onDone);
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  let items = [GuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => GuildStore.getGuild(_require));
  const items1 = [GuildSettingsModalChannelsStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => GuildSettingsModalChannelsStore.channels);
  const items2 = [UserStore];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    contentContainerStyle(bottom[45])(null != currentUser, "GuildSettingsModalChannelsConnected: currentUser cannot be undefined");
    return currentUser;
  });
  const items3 = [GuildSettingsModalChannelsStore];
  const stateFromStores3 = initialize.useStateFromStores(items3, () => GuildSettingsModalChannelsStore.channelList);
  const items4 = [GuildSettingsModalChannelsStore];
  const stateFromStores4 = initialize.useStateFromStores(items4, () => GuildSettingsModalChannelsStore.order);
  const items5 = [GuildSettingsModalChannelsStore];
  const stateFromStores5 = initialize.useStateFromStores(items5, () => GuildSettingsModalChannelsStore.sortingType);
  const tmp8 = contentContainerStyle(1611)();
  dependencyMap = tmp8;
  const items6 = [contentContainerStyle, tmp8.bottom, stateFromStores5];
  const memo = noop.useMemo(() => {
    if (null == stateFromStores5) {
      const items = [contentContainerStyle, ];
      const obj = { paddingBottom: bottom.bottom + 32 + 44 };
      items[1] = obj;
      let tmp = items;
    } else {
      tmp = contentContainerStyle;
    }
    return tmp;
  }, items6);
  useFontScale;
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
            obj = { navigation, guild: stateFromStores, channels: stateFromStores1, user: stateFromStores2, channelList: stateFromStores3, order: stateFromStores4, sortingType: stateFromStores5, contentContainerStyle: memo, fontScale: tmp11, onDone: onDone.onDone };
            tmp12 = closure_16(GuildSettingsModalChannels, obj);
          }
        }
      }
    }
  }
  return tmp12;
};