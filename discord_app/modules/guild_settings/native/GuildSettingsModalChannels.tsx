import importAllResult from "registerAsset";
import get_ActivityIndicator from "Form";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import sortCategoryList from "sortCategoryList";
import ME from "ME";
import jsxProd from "getChannelIcon";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import importDefaultResult2 from "createTextStyle";

let Fonts;
let StyleSheet;
let c5;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
let map1;
let require = arg1;
function ChannelItem(arg0) {
  let actionIconStyle;
  let channel;
  let channelIconStyle;
  let importDefault;
  let sortHandlers;
  let sortingEnabled;
  let style;
  ({ channelIconStyle, channel } = arg0);
  ({ sortingEnabled, onPress: importDefault, sortHandlers } = arg0);
  ({ style, actionIconStyle } = arg0);
  let obj = channel(4255);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(createCacheKey);
  let obj1 = channel(4101);
  let obj2 = channel(589);
  const items = [getUncachedChannelPermissions];
  const items1 = [channel];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    if (null == channel.parent_id) {
      let obj = { guildId: null };
      obj[0] = tmp.guild_id;
      let result = outer1_9.canWithPartialContext(outer1_14.MANAGE_CHANNELS, obj);
    } else {
      obj = { channelId: null };
      obj[0] = tmp.parent_id;
      result = outer1_9.canWithPartialContext(outer1_14.MANAGE_CHANNELS, obj);
    }
    return result;
  }, items1);
  let tmpResult = tmp(4716);
  const channelIcon = tmpResult.getChannelIcon(channel);
  tmpResult = tmp(4716);
  const channelIconComponent = tmpResult.getChannelIconComponent(channel);
  const tmp8 = closure_6;
  const tmpResult1 = channel(4101);
  const isThemeDarkResult = channel(4101).isThemeDark(obj1.useThemeContext().theme);
  const hex2rgb = channel(688).hex2rgb;
  const unsafe_rawColors = importDefault(712).unsafe_rawColors;
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
    obj3[0] = tmp(1297).Icon.Sizes.SMALL_20;
    obj3[1] = channelIcon;
    obj3[2] = channelIconStyle;
    tmp7Result = tmp7(tmp(7765).FormRow.Icon, obj3);
  }
  const obj4 = { leading: tmp7Result, style: legacyClassComponentStyles.formRowStyle, label: null, onPress: null, trailing: null, numberOfLines: null };
  const tmp15 = closure_5;
  const tmpResult2 = channel(688);
  obj4[2] = channel(4446).computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
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
      obj5[0] = tmp13(16526);
      obj5[1] = actionIconStyle;
      tmp7Result = tmp7(tmp(7765).FormRow.Icon, obj5);
    }
  }
  obj4[4] = tmp7Result;
  let num3;
  if (sortingEnabled) {
    num3 = 1;
  }
  obj4[5] = num3;
  obj1[1] = closure_16(channel(7765).FormRow, obj4);
  obj.children = closure_16(tmp15, obj1);
  return closure_16(tmp8, obj);
}
function CreateButton(guild) {
  guild = guild.guild;
  let bottom;
  let obj = guild(4255);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(createCacheKey);
  bottom = bottom(1581)().bottom;
  let items = [bottom];
  const memo = importAllResult.useMemo(() => ({ bottom: 16 + bottom }), items);
  let tmp5 = null;
  if (getUncachedChannelPermissions.can(constants.MANAGE_CHANNELS, guild)) {
    obj = { style: null, children: null };
    const items1 = [legacyClassComponentStyles.floatingActionButtonContainer, memo];
    obj[0] = items1;
    obj = { text: null, onPress: null, icon: null };
    let intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t.CumH4u);
    obj[1] = function onPress() {
      let obj = guild(outer1_3[26]);
      obj = { key: "GuildSettingsChannelsCreate", header: null, options: null, hasIcons: false };
      obj = { title: null };
      const intl = guild(outer1_3[14]).intl;
      obj[0] = intl.string(guild(outer1_3[14]).t.CumH4u);
      obj[1] = obj;
      const obj1 = { label: null, onPress: null };
      const intl2 = guild(outer1_3[14]).intl;
      obj1[0] = intl2.string(guild(outer1_3[14]).t.vHCZwr);
      obj1[1] = function onPress() {
        outer1_1(outer1_3[27]).open(outer1_13.GUILD_CATEGORY, user.id, null, null);
      };
      const items = [obj1, ];
      const obj2 = { label: null, onPress: null };
      const intl3 = guild(outer1_3[14]).intl;
      obj2[0] = intl3.string(guild(outer1_3[14]).t.GK18KJ);
      obj2[1] = function onPress() {
        outer1_1(outer1_3[27]).open(null, user.id, null, null);
      };
      items[1] = obj2;
      obj[2] = items;
      const result = obj.showSimpleActionSheet(obj);
    };
    obj[2] = callback(tmp(8915).PlusSmallIcon, { color: "white" });
    obj[1] = callback(tmp(4666).Button, obj);
    tmp5 = callback(closure_5, obj);
  }
  return tmp5;
}
let c4 = importAllResult;
({ View: c5, TouchableHighlight: closure_6, StyleSheet } = get_ActivityIndicator);
({ ChannelTypes: map1, Permissions: closure_14, Fonts, NULL_STRING_CHANNEL_ID: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
createCacheKey = { headerRight: null, containerView: null, categoryText: null, categoryView: null, sortingCategoryView: null, edit: null, row: null, formRowStyle: null, dropHighlight: null, floatingActionButtonContainer: null };
createCacheKey = {};
let merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
createCacheKey.textTransform = "capitalize";
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
let obj1 = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
let obj2 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.TEXT_SUBTLE, 12, { uppercase: true }));
createCacheKey[2] = obj2;
createCacheKey[3] = { paddingTop: 36, paddingBottom: 8 };
createCacheKey[4] = { paddingTop: 16 };
let obj3 = {};
const merged2 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("Themes").colors.TEXT_SUBTLE, 14));
createCacheKey[5] = obj3;
createCacheKey[6] = { marginTop: -StyleSheet.hairlineWidth };
createCacheKey[7] = { paddingVertical: 12 };
createCacheKey[8] = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_360, opacity: 0.3 };
createCacheKey[9] = { position: "absolute", bottom: 16, right: 0, left: 0, flexDirection: "row", justifyContent: "center" };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class Category extends PureComponent {
}
Category.prototype["render"] = function render() {
  let actionIconStyle;
  let editStyle;
  const self = this;
  let tmp = createCacheKey(this.context);
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
  let obj2 = category(4101);
  const isThemeDarkResult = obj2.isThemeDark(self.context.theme);
  const tmp4 = closure_6;
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
    const obj1 = { style: null, onPress: null };
    obj1[0] = editStyle;
    obj1[1] = function onPress() {
      return onPress(category.id);
    };
    let tmp3Result = tmp3(SectionEditAction, obj1);
  } else {
    tmp3Result = null;
    if (null != sortHandlers) {
      obj2 = { source: null, style: null };
      obj2[0] = tmp11(16526);
      obj2[1] = actionIconStyle;
      tmp3Result = tmp3(tmp5(1297).Icon, obj2);
    }
  }
  const tmp13 = closure_5;
  const tmp8 = category(688);
  obj[4] = tmp3Result;
  obj.children = closure_16(tmp13, { children: closure_16(category(7765).FormTitle, obj) });
  return closure_16(tmp4, obj);
};
Category.contextType = require("ManaContext").ThemeContext;
const PureComponent2 = importAllResult.PureComponent;
class SectionEditAction extends PureComponent2 {
}
SectionEditAction.prototype["render"] = function render() {
  let onPress;
  let style;
  ({ style, onPress } = this.props);
  let obj = { accessibilityRole: "button", onPress, children: null };
  obj = { style, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.bt75uw);
  obj[2] = callback(require(1297) /* Button */.LegacyText, obj);
  return callback(require(4783) /* PressableBase */.PressableOpacity, obj);
};
SectionEditAction.contextType = require("ManaContext").ThemeContext;
const PureComponent3 = importAllResult.PureComponent;
class GuildSettingsModalChannels extends PureComponent3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { hovering: null };
    applyArgumentsResult.renderActiveDivider = function renderActiveDivider(arg0, id, id) {
      let channelList;
      let order;
      const props = applyArgumentsResult.props;
      ({ order, channelList } = props);
      if (null != props.sortingType) {
        if (null != order) {
          if (null != channelList) {
            const localChannel = outer1_12.getLocalChannel(id);
            let localChannel1 = null;
            if (null != id) {
              localChannel1 = obj4.getLocalChannel(id);
            }
            let num = -1;
            if (null != id) {
              num = order.indexOf(id);
            }
            const index = order.indexOf(id);
            let obj = applyArgumentsResult(outer1_3[31]);
            const dropData = obj.getDropData(localChannel1, num, localChannel, index, channelList);
            if (null == dropData) {
              let tmp21 = null;
              if (tmp13) {
                obj = { style: null };
                const items = [tmp.dropHighlight, ];
                obj = { height: null };
                obj[0] = arg0;
                items[1] = obj;
                obj[0] = items;
                tmp21 = outer1_16(outer1_5, obj);
              }
              return tmp21;
            } else if (null == dropData.parentId) {
              let canResult = outer1_9.can(outer1_14.MANAGE_CHANNELS, tmp2);
            } else {
              canResult = outer1_9.can(outer1_14.MANAGE_CHANNELS, outer1_7.getChannel(dropData.parentId));
            }
            obj4 = outer1_12;
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
        localChannel = outer1_12.getLocalChannel(id);
      }
      if (null != localChannel) {
        let obj = { category: null, sortingEnabled: null, editStyle: null, onPress: null };
        obj[0] = localChannel;
        let hasItem = null != sortingType;
        if (hasItem) {
          hasItem = sortingType.has(outer1_13.GUILD_CATEGORY);
        }
        obj[1] = hasItem;
        obj[2] = tmp2.edit;
        let handleChannelPress;
        if (null == sortingType) {
          handleChannelPress = applyArgumentsResult.handleChannelPress;
        }
        obj[3] = handleChannelPress;
        let tmp5Result = outer1_16(outer1_19, obj);
        const tmp8 = outer1_16;
        const tmp9 = outer1_19;
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
        tmp5Result = outer1_16(outer1_5, obj);
        const tmp5 = outer1_16;
        const tmp6 = outer1_5;
      }
      return tmp5Result;
    };
    applyArgumentsResult.renderItem = function renderItem(item) {
      item = item.item;
      const channel = item.channel;
      if (null != channel) {
        const obj = { channel: null, sortingEnabled: null, onPress: null, style: null };
        obj[0] = channel;
        obj[1] = null != item.sortingType;
        obj[2] = closure_0.handleChannelPress;
        obj[3] = tmp2.row;
        let tmp5 = outer1_16(outer1_20, obj);
      } else {
        tmp5 = outer1_16(outer1_5, {});
      }
      return tmp5;
    };
    applyArgumentsResult.handleHoverChange = function handleHoverChange(hovering) {
      applyArgumentsResult.setState({ hovering });
    };
    applyArgumentsResult.handleSortStart = function handleSortStart() {
      const items = [];
      if (outer1_9.can(outer1_14.MANAGE_CHANNELS, applyArgumentsResult.props.guild)) {
        let obj = { label: null, icon: null, onPress: null };
        const intl = applyArgumentsResult(outer1_3[14]).intl;
        obj[0] = intl.string(applyArgumentsResult(outer1_3[14]).t.ffgJrs);
        obj[1] = outer1_1(outer1_3[35]);
        obj[2] = function onPress() {
          callback(16439).startReordering(constants.GUILD_CATEGORY);
        };
        items.push(obj);
      }
      obj = { label: null, icon: null, onPress: null };
      const intl2 = applyArgumentsResult(outer1_3[14]).intl;
      obj[0] = intl2.string(applyArgumentsResult(outer1_3[14]).t.nIfr0Y);
      obj[1] = outer1_1(outer1_3[37]);
      obj[2] = function onPress() {
        callback(16439).startReordering(constants.GUILD_TEXT, constants.GUILD_ANNOUNCEMENT, constants.GUILD_FORUM, constants.GUILD_MEDIA);
      };
      items.push(obj);
      obj = { label: null, icon: null, onPress: null };
      const intl3 = applyArgumentsResult(outer1_3[14]).intl;
      obj[0] = intl3.string(applyArgumentsResult(outer1_3[14]).t.CYnO4s);
      obj[1] = outer1_1(outer1_3[38]);
      obj[2] = function onPress() {
        callback(16439).startReordering(constants.GUILD_VOICE, constants.GUILD_STAGE_VOICE);
      };
      items.push(obj);
      const obj1 = { key: "GuildSettingsChannelsSort", header: null, options: null, hasIcons: true };
      const obj2 = { title: null };
      const intl4 = applyArgumentsResult(outer1_3[14]).intl;
      obj2[0] = intl4.string(applyArgumentsResult(outer1_3[14]).t["0dOFq+"]);
      obj1[1] = obj2;
      obj1[2] = items;
      const result = applyArgumentsResult(outer1_3[26]).showSimpleActionSheet(obj1);
    };
    applyArgumentsResult.handleDrop = function handleDrop(arg0) {
      let channels;
      let guild;
      let order;
      const props = guild.props;
      ({ order, channels, guild } = props);
      let obj = outer1_12;
      const localChannel = outer1_12.getLocalChannel(order[arg0.from]);
      const localChannel1 = outer1_12.getLocalChannel(order[arg0.to]);
      const dropData = applyArgumentsResult(outer1_3[31]).getDropData(localChannel, arg0.from, localChannel1, arg0.to, props.channelList);
      if (null != dropData) {
        if (localChannel1 !== localChannel) {
          if (null != localChannel) {
            if (null != localChannel1) {
              if (null == dropData) {
                if (tmp34) {
                  const referenceId = dropData.referenceId;
                  let tmp3Result = tmp3(tmp4[31]);
                  let localChannel2 = null;
                  if (null != referenceId) {
                    localChannel2 = obj.getLocalChannel(referenceId);
                  }
                  const dnDUpdates = tmp3Result.getDnDUpdates(localChannel, localChannel2, dropData.parentId, channels);
                  const found = dnDUpdates.filter((id) => {
                    const channel = outer1_7.getChannel(id.id);
                    if (null == channel) {
                      return false;
                    } else {
                      const channel1 = outer1_7.getChannel(channel.parent_id);
                      if (channel.type !== outer1_13.GUILD_CATEGORY) {
                        if (null != channel1) {
                          let canResult = outer1_9.can(outer1_14.MANAGE_CHANNELS, channel1);
                        }
                        return canResult;
                      }
                      canResult = outer1_9.can(outer1_14.MANAGE_CHANNELS, guild);
                    }
                  });
                  if (localChannel.parent_id !== dropData.parentId) {
                    const found1 = found.find((id) => {
                      if (id.id !== localChannel.id) {
                        return false;
                      } else {
                        const channel = outer1_7.getChannel(id.parent_id);
                        if (null != channel) {
                          if (outer1_9.can(outer1_14.MANAGE_ROLES, tmp)) {
                            if (obj.can(tmp2.MANAGE_ROLES, channel)) {
                              const areChannelsLockedResult = outer1_2(found[30]).areChannelsLocked(tmp, channel);
                              const obj2 = outer1_2(found[30]);
                              let areChannelsLockedResult1 = outer1_2(found[30]).areChannelsLocked(tmp, outer1_7.getChannel(tmp.parent_id));
                              let tmp7 = null == tmp.parent_id && !areChannelsLockedResult;
                              if (!tmp7) {
                                if (areChannelsLockedResult1) {
                                  areChannelsLockedResult1 = !areChannelsLockedResult;
                                }
                                tmp7 = areChannelsLockedResult1;
                              }
                              if (tmp7) {
                                let closure_2 = id;
                              }
                              return true;
                            }
                          }
                          obj = outer1_9;
                          tmp2 = outer1_14;
                        }
                        return true;
                      }
                    });
                  }
                  if (null != parent_id) {
                    let channel = outer1_7.getChannel(parent_id.parent_id);
                    obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
                    const intl = tmp3(tmp4[14]).intl;
                    obj[0] = intl.string(tmp3(tmp4[14]).t.YWMtRe);
                    const intl2 = tmp3(tmp4[14]).intl;
                    obj = { channelName: null, categoryName: null };
                    tmp3Result = tmp3(tmp4[22]);
                    obj[0] = tmp3Result.computeChannelName(localChannel, outer1_11, outer1_10, true);
                    let str = "";
                    if (null != channel) {
                      str = tmp3(tmp4[22]).computeChannelName(channel, tmp27, tmp28);
                      const tmp3Result1 = tmp3(tmp4[22]);
                    }
                    obj[1] = str;
                    function saveUpdates() {
                      localChannel(found[36]).localChannelUpdate(found);
                      const obj = localChannel(found[36]);
                      localChannel(found[39]).batchChannelUpdate(localChannel.guild_id, found);
                    }
                    obj[1] = intl2.format(tmp3(tmp4[14]).t["iKW+jY"], obj);
                    const intl3 = tmp3(tmp4[14]).intl;
                    obj[2] = intl3.string(tmp3(tmp4[14]).t.eW8Gy4);
                    const intl4 = tmp3(tmp4[14]).intl;
                    obj[3] = intl4.string(tmp3(tmp4[14]).t.s4uM3b);
                    obj[4] = function onConfirm() {
                      closure_2.lock_permissions = true;
                      localChannel(found[36]).localChannelUpdate(found);
                      const obj = localChannel(found[36]);
                      localChannel(found[39]).batchChannelUpdate(localChannel.guild_id, found);
                    };
                    obj[5] = saveUpdates;
                    outer1_1(tmp4[40]).show(obj);
                    const obj6 = outer1_1(tmp4[40]);
                    tmp27 = outer1_11;
                    tmp28 = outer1_10;
                  } else {
                    outer1_1(tmp4[36]).localChannelUpdate(found);
                    const obj4 = outer1_1(tmp4[36]);
                    outer1_1(tmp4[39]).batchChannelUpdate(localChannel.guild_id, found);
                    const obj5 = outer1_1(tmp4[39]);
                  }
                }
              } else if (null == dropData.parentId) {
                let canResult = outer1_9.can(outer1_14.MANAGE_CHANNELS, guild);
              } else {
                canResult = outer1_9.can(outer1_14.MANAGE_CHANNELS, outer1_7.getChannel(dropData.parentId));
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
  let channels;
  let guild;
  let navigation;
  let order;
  let user;
  const self = this;
  const _require = createCacheKey(this.context);
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
        const intl = lib(outer1_3[14]).intl;
        obj[1] = intl.string(lib(outer1_3[14]).t.i4jeWR);
        obj[2] = self.handleSortStop;
        return outer1_16(lib(outer1_3[29]).HeaderActionButton, obj);
      };
    } else {
      if (obj2.canManageACategory(user, guild, channels._categories)) {
        fn2 = () => {
          const obj = { textStyle: lib.headerRight, text: null, onPress: null };
          const intl = lib(outer1_3[14]).intl;
          obj[1] = intl.string(lib(outer1_3[14]).t["0dOFq+"]);
          obj[2] = self.handleSortStart;
          return outer1_16(lib(outer1_3[29]).HeaderActionButton, obj);
        };
      }
      obj2 = importAll(3888);
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
  let channels;
  let order;
  let sortingType;
  const self = this;
  const props = this.props;
  ({ channels, order, sortingType } = props);
  const hovering = this.state.hovering;
  let c4;
  const items = [];
  if (null != channels) {
    c4 = -1;
    const _categories = channels._categories;
    let item = _categories.forEach((channel) => {
      channel = channel.channel;
      let obj;
      if ("null" === channel.id) {
        closure_4 = closure_4 + 1;
        obj = { data: null, category: null, key: null, index: null };
        obj[0] = [];
        obj[1] = channel;
        obj[2] = channel.id;
        obj[3] = closure_4;
        let arr = obj[channel.id];
        const item = arr.forEach((channel) => {
          channel = channel.channel;
          let obj = outer1_1;
          if (tmp) {
            closure_4 = closure_4 + 1;
            const data = obj.data;
            obj = { key: null, channel: null, sortingType: null, isHovered: null, index: null };
            obj[0] = channel.id;
            obj[1] = channel;
            obj[2] = obj;
            obj[3] = outer1_2 === channel.id;
            obj[4] = closure_4;
            data.push(obj);
          }
        });
        arr = items.push(obj);
      }
    });
  }
  let obj = { style: createCacheKey(this.context).containerView, children: null };
  obj = { sections: items, sortingEnabled: null != sortingType, renderSectionHeader: self.renderSectionHeader, renderItem: self.renderItem, onRowMoved: self.handleDrop, order: null, onHoverChange: null, renderActiveDivider: null, contentContainerStyle: null, fontScale: null };
  const items1 = [closure_15];
  const tmp = createCacheKey(this.context);
  const tmp3 = closure_17;
  const tmp4 = closure_5;
  const tmp6 = items;
  HermesBuiltin.arraySpread(order, 1);
  obj[5] = items1;
  ({ handleHoverChange: obj2[6], renderActiveDivider: obj2[7] } = self);
  obj[8] = self.props.contentContainerStyle;
  obj[9] = self.props.fontScale;
  const items2 = [callback(sortingType(items[32]), obj), , ];
  let tmp5Result = null == sortingType;
  if (tmp5Result) {
    obj = { guild: null };
    obj[0] = props.guild;
    tmp5Result = tmp5(CreateButton, obj);
  }
  items2[1] = tmp5Result;
  items2[2] = callback(channels(tmp6[33]).NavScrim, {});
  obj[1] = items2;
  return tmp3(tmp4, obj);
};
prototype["handleChannelPress"] = function handleChannelPress(arg0) {
  require(7814) /* init */.open(arg0);
};
prototype["handleSortStop"] = function handleSortStop() {
  importDefault(16439).stopReordering();
};
GuildSettingsModalChannels.contextType = require("ManaContext").ThemeContext;
let obj4 = { backgroundColor: require("Themes").unsafe_rawColors.GREEN_360, opacity: 0.3 };
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalChannels.tsx");

export default function GuildSettingsModalChannelsConnected(arg0) {
  let contentContainerStyle;
  let require;
  ({ guildId: require, contentContainerStyle } = arg0);
  let stateFromStores5;
  let dependencyMap;
  let obj = require(1480) /* useNavigation */;
  const navigation = obj.useNavigation();
  let items = [createGuildRecordFromRust];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => outer1_8.getGuild(closure_0));
  const obj2 = require(589) /* initialize */;
  const items1 = [sortCategoryList];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => sortCategoryList.channels);
  const obj3 = require(589) /* initialize */;
  const items2 = [mergeGuildAvatar];
  const stateFromStores2 = require(589) /* initialize */.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    contentContainerStyle(_undefined[42])(null != currentUser, "GuildSettingsModalChannelsConnected: currentUser cannot be undefined");
    return currentUser;
  });
  const obj4 = require(589) /* initialize */;
  const items3 = [sortCategoryList];
  const stateFromStores3 = require(589) /* initialize */.useStateFromStores(items3, () => sortCategoryList.channelList);
  const obj5 = require(589) /* initialize */;
  const items4 = [sortCategoryList];
  const stateFromStores4 = require(589) /* initialize */.useStateFromStores(items4, () => sortCategoryList.order);
  const obj6 = require(589) /* initialize */;
  const items5 = [sortCategoryList];
  stateFromStores5 = require(589) /* initialize */.useStateFromStores(items5, () => sortCategoryList.sortingType);
  const tmp8 = contentContainerStyle(1581)();
  dependencyMap = tmp8;
  const items6 = [contentContainerStyle, tmp8.bottom, stateFromStores5];
  const memo = importAllResult.useMemo(() => {
    if (null == stateFromStores5) {
      const items = [contentContainerStyle, ];
      const obj = { paddingBottom: null };
      obj[0] = _undefined.bottom + 32 + 44;
      items[1] = obj;
      let tmp = items;
    } else {
      tmp = contentContainerStyle;
    }
    return tmp;
  }, items6);
  require(4672) /* getFontScale */;
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
            obj = { navigation: null, guild: null, channels: null, user: null, channelList: null, order: null, sortingType: null, contentContainerStyle: null, fontScale: null };
            obj[0] = navigation;
            obj[1] = stateFromStores;
            obj[2] = stateFromStores1;
            obj[3] = stateFromStores2;
            obj[4] = stateFromStores3;
            obj[5] = stateFromStores4;
            obj[6] = stateFromStores5;
            obj[7] = memo;
            obj[8] = tmp11;
            tmp12 = callback(GuildSettingsModalChannels, obj);
          }
        }
      }
    }
  }
  return tmp12;
};