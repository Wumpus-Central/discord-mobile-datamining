// === Module 16402: GuildSettingsModalChannels ===

// Module 16402 (GuildSettingsModalChannels)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import useNavigation from "useNavigation" /* 1484 */;
import FavoritesUtils from "FavoritesUtils" /* 1983 */;
import PermissionUtilsAll from "PermissionUtils" /* 4366 */;
import shared from "shared" /* 4573 */;
import useChannelName from "useChannelName" /* 4875 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5066 */;
import useFontScale from "useFontScale" /* 5151 */;
import Pressables from "Pressables" /* 5292 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5690 */;
import showSimpleActionSheet from "showSimpleActionSheet" /* 7390 */;
import HeaderActionButton from "HeaderActionButton" /* 7573 */;
import Form from "Form" /* 8831 */;
import ChannelSettingsActionCreators from "ChannelSettingsActionCreators" /* 8863 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10464 */;
import _modDef12047 from "module_12047" /* 12047 */;
import _modDef15508 from "module_15508" /* 15508 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16401 */;
import ChannelSortingUtils from "ChannelSortingUtils" /* 16404 */;
import _modDef16406 from "module_16406" /* 16406 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4361 */;
import RelationshipStore from "RelationshipStore" /* 4371 */;
import UserStore from "UserStore" /* 1372 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 16400 */;
import TextStyles_mod from "TextStyles" /* 5694 */;

require = fn;
function ChannelItem(isFavoritesGuild) {
  ({ channelIconStyle, channel } = isFavoritesGuild);
  isFavoritesGuild = isFavoritesGuild.isFavoritesGuild;
  ({ sortingEnabled, onPress: importAll, sortHandlers } = isFavoritesGuild);
  ({ style, actionIconStyle } = isFavoritesGuild);
  const legacyClassComponentStyles = channel(4722).useLegacyClassComponentStyles(closure_18);
  let obj = channel(4722);
  let obj2 = channel(4573);
  const items = [PermissionStore];
  const items1 = [channel, isFavoritesGuild];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    if (isFavoritesGuild) {
      return isFavoritesGuild;
    } else {
      let guild_id = channel;
      if (null == channel.parent_id) {
        const obj2 = { guildId: null };
        guild_id = guild_id.guild_id;
        obj2.guildId = guild_id;
        let result = PermissionStore.canWithPartialContext(constants2.MANAGE_CHANNELS, obj2);
      } else {
        const obj = { channelId: guild_id.parent_id };
        result = PermissionStore.canWithPartialContext(constants2.MANAGE_CHANNELS, obj);
      }
    }
  }, items1);
  const obj3 = channel(504);
  const channelIcon = channel(5197).getChannelIcon(channel);
  const tmpResult = channel(5197);
  const channelIconComponent = channel(5197).getChannelIconComponent(channel);
  const tmpResult5 = channel(5197);
  const tmpResult6 = channel(4573);
  const isThemeDarkResult = channel(4573).isThemeDark(obj2.useThemeContext().theme);
  const hex2rgb = channel(1092).hex2rgb;
  const unsafe_rawColors = isFavoritesGuild(576).unsafe_rawColors;
  if (isThemeDarkResult) {
    let hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_700, 0.6);
    let tmp13 = tmp11;
  } else {
    hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_200, 0.6);
    tmp13 = tmp11;
  }
  const obj4 = { accessibilityRole: "button", underlayColor: hex2rgbResult, style };
  const merged = Object.assign(sortHandlers);
  let obj5 = null;
  if (sortingEnabled) {
    obj5 = null;
    if (!stateFromStores) {
      obj5 = { opacity: 0.3 };
    }
  }
  const obj6 = { style: obj5, children: null };
  if (null != channelIconComponent) {
    const obj7 = { style: channelIconStyle, size: "sm" };
    let tmp7Result = closure_16(channelIconComponent, obj7);
  } else {
    const obj8 = { size: channel(1177).Icon.Sizes.SMALL_20, source: channelIcon, style: channelIconStyle };
    tmp7Result = closure_16(channel(8831).FormRow.Icon, obj8);
  }
  const obj9 = { leading: tmp7Result, style: legacyClassComponentStyles.formRowStyle, label: null, onPress: null, trailing: null, numberOfLines: null };
  const tmpResult7 = channel(1092);
  obj9.label = channel(4875).computeChannelName(channel, UserStore, RelationshipStore);
  let fn;
  if (!sortingEnabled) {
    fn = () => importAll(channel.id);
  }
  obj9.onPress = fn;
  let tmp7Result2 = null;
  if (stateFromStores) {
    tmp7Result2 = null;
    if (sortingEnabled) {
      const obj10 = { source: tmp13(16403), style: actionIconStyle };
      tmp7Result2 = closure_16(channel(8831).FormRow.Icon, obj10);
    }
  }
  obj9.trailing = tmp7Result2;
  let num3;
  if (sortingEnabled) {
    num3 = 1;
  }
  obj9.numberOfLines = num3;
  obj6.children = closure_16(channel(8831).FormRow, obj9);
  obj4.children = closure_16(closure_5, obj6);
  return closure_16(closure_6, obj4);
}
function CreateButton(guild) {
  guild = guild.guild;
  let bottom;
  const legacyClassComponentStyles = guild(4722).useLegacyClassComponentStyles(closure_18);
  bottom = bottom(1612)().bottom;
  let items = [bottom];
  const memo = noop.useMemo(() => ({ bottom: 16 + bottom }), items);
  let tmp5 = null;
  if (PermissionStore.can(constants2.MANAGE_CHANNELS, guild)) {
    let obj2 = { style: null, children: null };
    const items1 = [legacyClassComponentStyles.floatingActionButtonContainer, memo];
    obj2.style = items1;
    let obj3 = { text: null, onPress: null, icon: null };
    let intl = tmp(1115).intl;
    obj3.text = intl.string(tmp(1115).t.CumH4u);
    obj3.onPress = function onPress() {
      const obj2 = { key: "GuildSettingsChannelsCreate", header: null, options: null, hasIcons: false };
      const obj3 = { title: null };
      const intl = util.intl;
      obj3.title = intl.string(util.t.CumH4u);
      obj2.header = obj3;
      const obj4 = { label: null, onPress: null };
      const intl2 = util.intl;
      obj4.label = intl2.string(util.t.vHCZwr);
      obj4.onPress = function onPress() {
        bottom(9982).open(constants.GUILD_CATEGORY, user.id, null, null);
      };
      const items = [obj4, ];
      const obj5 = { label: null, onPress: null };
      const intl3 = util.intl;
      obj5.label = intl3.string(util.t.GK18KJ);
      obj5.onPress = function onPress() {
        bottom(9982).open(null, user.id, null, null);
      };
      items[1] = obj5;
      obj2.options = items;
      const result = showSimpleActionSheet.showSimpleActionSheet(obj2);
    };
    obj3.icon = closure_16(tmp(9106).PlusSmallIcon, { color: "white" });
    obj2.children = closure_16(tmp(5144).Button, obj3);
    tmp5 = closure_16(closure_5, obj2);
  }
  return tmp5;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, TouchableHighlight: metroRequire, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ ChannelTypes: map1, Permissions: closure_14, Fonts, NULL_STRING_CHANNEL_ID: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { headerRight: null, containerView: null, categoryText: null, categoryView: null, sortingCategoryView: null, edit: null, row: null, formRowStyle: null, dropHighlight: null, floatingActionButtonContainer: null };
let obj3 = {};
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj3.textTransform = "capitalize";
obj2.headerRight = obj3;
obj2.containerView = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true }));
obj2.categoryText = {};
obj2.categoryView = { paddingTop: 36, paddingBottom: 8 };
obj2.sortingCategoryView = { paddingTop: 16 };
let TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_SUBTLE, 14));
obj2.edit = {};
obj2.row = { marginTop: -StyleSheet.hairlineWidth };
obj2.formRowStyle = { paddingVertical: 12 };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj5 = {};
let obj6 = {};
obj2.dropHighlight = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, opacity: 0.3 };
obj2.floatingActionButtonContainer = { position: "absolute", bottom: 16, right: 0, left: 0, flexDirection: "row", justifyContent: "center" };
let closure_18 = createStyles.createLegacyClassComponentStyles(obj2);
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
  const obj = { accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, underlayColor: null };
  const obj2 = { name: "activate", label: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t.bt75uw);
  const items = [obj2];
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
  const isThemeDarkResult = shared.isThemeDark(self.context.theme);
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
  const obj4 = { title: category.name, numberOfLines: 1, textStyle: tmp.categoryText, viewStyle: null, icon: null };
  const items1 = [tmp.categoryView, ];
  let sortingCategoryView = null;
  if (sortingEnabled) {
    sortingCategoryView = tmp.sortingCategoryView;
  }
  items1[1] = sortingCategoryView;
  obj4.viewStyle = items1;
  if (null != onPress) {
    const obj5 = {
      style: editStyle,
      onPress() {
          return onPress(category.id);
        }
    };
    let tmp3Result = value2(SectionEditAction, obj5);
  } else {
    tmp3Result = null;
    if (null != sortHandlers) {
      const obj6 = { source: tmp11(16403), style: actionIconStyle };
      tmp3Result = value2(native.Icon, obj6);
    }
  }
  obj4.icon = tmp3Result;
  obj.children = value2(hasOwnProperty, { children: value2(Form.FormTitle, obj4) });
  return value2(timestampProducer, obj);
};
Category.contextType = fn(4432).ThemeContext;
const PureComponent2 = noop.PureComponent;
class SectionEditAction extends PureComponent2 {
}
SectionEditAction.prototype["render"] = function render() {
  ({ style, onPress } = this.props);
  const obj = { accessibilityRole: "button", onPress, children: null };
  const obj2 = { style, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.bt75uw);
  obj.children = value2(native.LegacyText, obj2);
  return value2(Pressables.PressableOpacity, obj);
};
SectionEditAction.contextType = fn(4432).ThemeContext;
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
            const obj = ChannelSortingUtils;
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
              const obj2 = { style: null };
              const items = [tmp.dropHighlight, ];
              const obj3 = { height };
              items[1] = obj3;
              obj2.style = items;
              tmp21 = value2(hasOwnProperty, obj2);
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
        const obj2 = { category: localChannel, sortingEnabled: null, editStyle: null, onPress: null };
        let hasItem = null != sortingType;
        if (hasItem) {
          hasItem = sortingType.has(constants.GUILD_CATEGORY);
        }
        obj2.sortingEnabled = hasItem;
        obj2.editStyle = tmp2.edit;
        let handleChannelPress;
        if (null == sortingType) {
          handleChannelPress = applyArgumentsResult.handleChannelPress;
        }
        obj2.onPress = handleChannelPress;
        let tmp5Result = value2(Category, obj2);
      } else {
        let obj = null;
        if (null == sortingType) {
          obj = null;
          if (props.channels.null.length > 0) {
            obj = { marginTop: 36 };
          }
        }
        const obj3 = { style: obj };
        tmp5Result = value2(hasOwnProperty, obj3);
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
        const obj = { label: null, icon: null, onPress: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.ffgJrs);
        obj.icon = _modDef16406;
        obj.onPress = function onPress() {
          closure_1_1(16401).startReordering(constants.GUILD_CATEGORY);
        };
        items.push(obj);
      }
      const obj2 = { label: null, icon: null, onPress: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.nIfr0Y);
      obj2.icon = _modDef12047;
      obj2.onPress = function onPress() {
        closure_1_1(16401).startReordering(constants.GUILD_TEXT, constants.GUILD_ANNOUNCEMENT, constants.GUILD_FORUM, constants.GUILD_MEDIA, constants.GUILD_APP);
      };
      items.push(obj2);
      const obj3 = { label: null, icon: null, onPress: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.CYnO4s);
      obj3.icon = _modDef15508;
      obj3.onPress = function onPress() {
        closure_1_1(16401).startReordering(constants.GUILD_VOICE, constants.GUILD_STAGE_VOICE);
      };
      items.push(obj3);
      const obj5 = { key: "GuildSettingsChannelsSort", header: null, options: null, hasIcons: true };
      const obj6 = { title: null };
      const intl4 = util.intl;
      obj6.title = intl4.string(util.t["0dOFq+"]);
      obj5.header = obj6;
      obj5.options = items;
      const result = showSimpleActionSheet.showSimpleActionSheet(obj5);
    };
    applyArgumentsResult.handleDrop = function handleDrop(arg0) {
      const props = applyArgumentsResult.props;
      ({ order, channels, guild } = props);
      const localChannel = GuildSettingsModalChannelsStore.getLocalChannel(order[arg0.from]);
      const localChannel1 = GuildSettingsModalChannelsStore.getLocalChannel(order[arg0.to]);
      const dropData = ChannelSortingUtils.getDropData(localChannel, arg0.from, localChannel1, arg0.to, props.channelList);
      if (null != dropData) {
        if (localChannel1 !== localChannel) {
          if (null != localChannel) {
            if (null != localChannel1) {
              let tmp14 = null != dropData;
              if (tmp14) {
                const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(guild.id);
                if (isFavoritesGuildIdResult) {
                  tmp14 = isFavoritesGuildIdResult;
                } else if (null == dropData.parentId) {
                  let canResult = PermissionStore.can(constants2.MANAGE_CHANNELS, guild);
                } else {
                  canResult = PermissionStore.can(constants2.MANAGE_CHANNELS, ChannelStore.getChannel(dropData.parentId));
                }
                const tmp3Result = FavoritesUtils;
              }
              if (tmp14) {
                const referenceId = dropData.referenceId;
                const tmp3Result6 = ChannelSortingUtils;
                let localChannel2 = null;
                if (null != referenceId) {
                  localChannel2 = GuildSettingsModalChannelsStore.getLocalChannel(referenceId);
                }
                const dnDUpdates = tmp3Result6.getDnDUpdates(localChannel, localChannel2, dropData.parentId, channels);
                if (tmp3Result7.isFavoritesGuildId(guild.id)) {
                  GuildSettingsModalChannelsActionCreatorsDefault.localChannelUpdate(dnDUpdates);
                  const result = FavoritesActionCreators.updateFavoriteChannels(dnDUpdates);
                  const tmp3Result8 = FavoritesActionCreators;
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
                              const appChannelBotUserId = applyArgumentsResult(11850).getAppChannelBotUserId(localChannel);
                              const obj2 = applyArgumentsResult(11850);
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
                    let obj3 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
                    const intl = util.intl;
                    obj3.title = intl.string(util.t.YWMtRe);
                    const intl2 = util.intl;
                    const obj4 = { channelName: null, categoryName: null };
                    const tmp3Result9 = useChannelName;
                    obj4.channelName = tmp3Result9.computeChannelName(localChannel, UserStore, RelationshipStore, true);
                    let str = "";
                    if (null != channel) {
                      str = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
                      const tmp3Result10 = useChannelName;
                    }
                    obj4.categoryName = str;
                    function saveUpdates() {
                      GuildSettingsModalChannelsActionCreatorsDefault.localChannelUpdate(found);
                      GuildActionCreatorsDefault.batchChannelUpdate(localChannel.guild_id, found);
                    }
                    obj3.body = intl2.format(util.t["iKW+jY"], obj4);
                    const intl3 = util.intl;
                    obj3.confirmText = intl3.string(util.t.eW8Gy4);
                    const intl4 = util.intl;
                    obj3.cancelText = intl4.string(util.t.s4uM3b);
                    obj3.onConfirm = function onConfirm() {
                      closure_2.lock_permissions = true;
                      GuildSettingsModalChannelsActionCreatorsDefault.localChannelUpdate(found);
                      GuildActionCreatorsDefault.batchChannelUpdate(localChannel.guild_id, found);
                    };
                    obj3.onCancel = saveUpdates;
                    AlertActionCreatorsDefault.show(obj3);
                  } else {
                    GuildSettingsModalChannelsActionCreatorsDefault.localChannelUpdate(found);
                    GuildActionCreatorsDefault.batchChannelUpdate(localChannel.guild_id, found);
                  }
                }
                tmp3Result7 = FavoritesUtils;
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
      let obj2;
      if ("null" !== channel.id) {
        channels(items[13]);
      }
      index = index + 1;
      obj2 = { data: [], category: channel, key: channel.id, index };
      const item = obj2[channel.id].forEach((channel) => {
        channel = channel.channel;
        if (tmp) {
          index = index + 1;
          const data = obj2.data;
          obj2 = { key: channel.id, channel, sortingType, isHovered: hovering === channel.id, index };
          data.push(obj2);
        }
        tmp = null == sortingType || sortingType.has(channel.type);
      });
      items.push(obj2);
    });
  }
  const obj = { style: closure_18(this.context).containerView, children: null };
  const obj3 = { sections: items, sortingEnabled: null != sortingType, renderSectionHeader: self.renderSectionHeader, renderItem: self.renderItem, onRowMoved: self.handleDrop, order: null, onHoverChange: null, renderActiveDivider: null, contentContainerStyle: null, fontScale: null };
  const items1 = [closure_15];
  let tmp = closure_18(this.context);
  const tmp6 = items;
  HermesBuiltin.arraySpread(order, 1);
  obj3.order = items1;
  ({ handleHoverChange: obj2.onHoverChange, renderActiveDivider: obj2.renderActiveDivider } = self);
  obj3.contentContainerStyle = self.props.contentContainerStyle;
  obj3.fontScale = self.props.fontScale;
  const items2 = [closure_16(sortingType(items[33]), obj3), , ];
  let tmp5Result = null == sortingType;
  if (tmp5Result) {
    const obj5 = { guild: props.guild };
    tmp5Result = closure_16(CreateButton, obj5);
  }
  items2[1] = tmp5Result;
  items2[2] = closure_16(channels(tmp6[34]).NavScrim, {});
  obj.children = items2;
  return closure_17(closure_5, obj);
};
prototype["handleChannelPress"] = function handleChannelPress(id) {
  ChannelSettingsActionCreators.open(id);
};
GuildSettingsModalChannels.contextType = fn(4432).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalChannels.tsx");

export default function GuildSettingsModalChannelsConnected(onDone) {
  ({ guildId: require, contentContainerStyle } = onDone);
  const navigation = useNavigation.useNavigation();
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
  const tmp8 = contentContainerStyle(1612)();
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
            const obj8 = { navigation, guild: stateFromStores, channels: stateFromStores1, user: stateFromStores2, channelList: stateFromStores3, order: stateFromStores4, sortingType: stateFromStores5, contentContainerStyle: memo, fontScale: tmp11, onDone: onDone.onDone };
            tmp12 = closure_16(GuildSettingsModalChannels, obj8);
          }
        }
      }
    }
  }
  return tmp12;
};