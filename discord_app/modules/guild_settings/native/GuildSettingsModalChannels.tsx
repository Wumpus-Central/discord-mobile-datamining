// === Module 16559: GuildSettingsModalChannels ===

// Module 16559 (GuildSettingsModalChannels)
import _modDef38 from "module_38" /* 38 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import useNavigation from "useNavigation" /* 1503 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import FavoritesUtils from "FavoritesUtils" /* 2090 */;
import PermissionUtilsAll from "PermissionUtils" /* 4755 */;
import shared from "shared" /* 4969 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import useFontScale from "useFontScale" /* 5386 */;
import useChannelName from "useChannelName" /* 5421 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import Pressables from "Pressables" /* 6184 */;
import showSimpleActionSheet from "showSimpleActionSheet" /* 6890 */;
import HeaderActionButton from "HeaderActionButton" /* 7088 */;
import Form from "Form" /* 8579 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 8605 */;
import ChannelSettingsActionCreators from "ChannelSettingsActionCreators" /* 9696 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10311 */;
import _modDef11359 from "module_11359" /* 11359 */;
import ChannelSortingUtils from "ChannelSortingUtils" /* 12699 */;
import _modDef15569 from "module_15569" /* 15569 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16558 */;
import _modDef16560 from "module_16560" /* 16560 */;
import _modDef16562 from "module_16562" /* 16562 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 16557 */;
import TextStyles_mod from "TextStyles" /* 5906 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, TouchableHighlight: metroRequire, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1085);
({ ChannelTypes: map1, Permissions: closure_14, Fonts, NULL_STRING_CHANNEL_ID: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5092);
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
    let tmp3Result = value3(SectionEditAction, obj5);
  } else {
    tmp3Result = null;
    if (null != sortHandlers) {
      const obj6 = { source: tmp11(16560), style: actionIconStyle };
      tmp3Result = value3(native.Icon, obj6);
    }
  }
  obj4.icon = tmp3Result;
  obj.children = value3(hasOwnProperty, { children: value3(Form.FormTitle, obj4) });
  return value3(timestampProducer, obj);
};
Category.contextType = fn(4827).ThemeContext;
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelItem(channel) {
  const cResult = actionIconStyle(sortingEnabled[22]).c(45);
  ({ style, channelIconStyle, actionIconStyle } = channel);
  channel = channel.channel;
  const isFavoritesGuild = channel.isFavoritesGuild;
  sortingEnabled = channel.sortingEnabled;
  const onPress = channel.onPress;
  let obj = actionIconStyle(sortingEnabled[22]);
  const legacyClassComponentStyles = actionIconStyle(sortingEnabled[10]).useLegacyClassComponentStyles(closure_18);
  let obj2 = actionIconStyle(sortingEnabled[10]);
  const theme = actionIconStyle(sortingEnabled[16]).useThemeContext().theme;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel) {
    if (cResult[2] === isFavoritesGuild) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStores = actionIconStyle(tmp2[23]).useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] === actionIconStyle) {
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === sortingEnabled) {
          let tmp10 = cResult[8];
        }
        if (cResult[9] !== channel) {
          const channelIcon = actionIconStyle(tmp2[24]).getChannelIcon(channel);
          cResult[9] = channel;
          cResult[10] = channelIcon;
          let tmp11 = channelIcon;
          const tmpResult6 = actionIconStyle(tmp2[24]);
        } else {
          tmp11 = cResult[10];
        }
        if (cResult[11] !== channel) {
          const channelIconComponent = actionIconStyle(tmp2[24]).getChannelIconComponent(channel);
          cResult[11] = channel;
          cResult[12] = channelIconComponent;
          let tmp13 = channelIconComponent;
          const tmpResult7 = actionIconStyle(tmp2[24]);
        } else {
          tmp13 = cResult[12];
        }
        if (cResult[13] !== theme) {
          const tmpResult8 = actionIconStyle(tmp2[16]);
          const isThemeDarkResult = actionIconStyle(tmp2[16]).isThemeDark(theme);
          const hex2rgb = actionIconStyle(tmp2[17]).hex2rgb;
          const unsafe_rawColors = channel(tmp2[12]).unsafe_rawColors;
          if (isThemeDarkResult) {
            let hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_700, 0.6);
          } else {
            hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_200, 0.6);
          }
          cResult[13] = theme;
          cResult[14] = hex2rgbResult;
          let tmp15 = hex2rgbResult;
          const tmpResult9 = actionIconStyle(tmp2[17]);
        } else {
          tmp15 = cResult[14];
        }
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === sortingEnabled) {
            let tmp21 = cResult[17];
          }
          if (cResult[18] === tmp13) {
            if (cResult[19] === tmp11) {
              if (cResult[20] === channelIconStyle) {
                if (cResult[22] !== channel) {
                  const channelName = actionIconStyle(tmp2[25]).computeChannelName(channel, UserStore, RelationshipStore);
                  cResult[22] = channel;
                  cResult[23] = channelName;
                  let tmp28 = channelName;
                  const tmpResult10 = actionIconStyle(tmp2[25]);
                } else {
                  tmp28 = cResult[23];
                }
                if (cResult[24] === channel) {
                  if (cResult[25] === onPress) {
                    if (cResult[26] === sortingEnabled) {
                      let tmp32 = cResult[27];
                    }
                    if (cResult[28] !== tmp10) {
                      const tmp10Result = tmp10();
                      cResult[28] = tmp10;
                      cResult[29] = tmp10Result;
                      let tmp33 = tmp10Result;
                    } else {
                      tmp33 = cResult[29];
                    }
                    let num29;
                    if (sortingEnabled) {
                      num29 = 1;
                    }
                    if (cResult[30] === legacyClassComponentStyles.formRowStyle) {
                      if (cResult[31] === tmp22) {
                        if (cResult[32] === tmp28) {
                          if (cResult[33] === tmp32) {
                            if (cResult[34] === tmp33) {
                              if (cResult[35] === num29) {
                                let tmp35 = cResult[36];
                              }
                              if (cResult[37] === tmp21) {
                                if (cResult[38] === tmp35) {
                                  let tmp38 = cResult[39];
                                }
                                if (cResult[40] === sortHandlers) {
                                  if (cResult[41] === style) {
                                    if (cResult[42] === tmp38) {
                                      if (cResult[43] === tmp15) {
                                        let tmp42 = cResult[44];
                                      }
                                      return tmp42;
                                    }
                                  }
                                }
                                const obj4 = { accessibilityRole: "button", underlayColor: tmp15, style };
                                const merged = Object.assign(sortHandlers);
                                obj4.children = tmp38;
                                const tmp48 = closure_16(closure_6, obj4);
                                cResult[40] = sortHandlers;
                                cResult[41] = style;
                                cResult[42] = tmp38;
                                cResult[43] = tmp15;
                                cResult[44] = tmp48;
                                tmp42 = tmp48;
                              }
                              const obj5 = { style: tmp21, children: tmp35 };
                              const tmp41 = closure_16(stateFromStores, obj5);
                              cResult[37] = tmp21;
                              cResult[38] = tmp35;
                              cResult[39] = tmp41;
                              tmp38 = tmp41;
                            }
                          }
                        }
                      }
                    }
                    const obj6 = { leading: tmp22, style: legacyClassComponentStyles.formRowStyle, label: tmp28, onPress: tmp32, trailing: tmp33, numberOfLines: num29 };
                    const tmp37 = closure_16(actionIconStyle(tmp2[18]).FormRow, obj6);
                    cResult[30] = legacyClassComponentStyles.formRowStyle;
                    cResult[31] = tmp22;
                    cResult[32] = tmp28;
                    cResult[33] = tmp32;
                    cResult[34] = tmp33;
                    cResult[35] = num29;
                    cResult[36] = tmp37;
                    tmp35 = tmp37;
                  }
                }
                let fn2;
                if (!sortingEnabled) {
                  fn2 = () => onPress(channel.id);
                }
                cResult[24] = channel;
                cResult[25] = onPress;
                cResult[26] = sortingEnabled;
                cResult[27] = fn2;
                tmp32 = fn2;
              }
            }
          }
          if (null != tmp13) {
            const obj7 = { style: channelIconStyle, size: "sm" };
            let tmp25 = closure_16(tmp13, obj7);
          } else {
            const obj8 = { size: actionIconStyle(tmp2[19]).Icon.Sizes.SMALL_20, source: tmp11, style: channelIconStyle };
            tmp25 = closure_16(actionIconStyle(tmp2[18]).FormRow.Icon, obj8);
          }
          cResult[18] = tmp13;
          cResult[19] = tmp11;
          cResult[20] = channelIconStyle;
          cResult[21] = tmp25;
        }
        let obj9 = null;
        if (sortingEnabled) {
          obj9 = null;
          if (!stateFromStores) {
            obj9 = { opacity: 0.3 };
          }
        }
        cResult[15] = stateFromStores;
        cResult[16] = sortingEnabled;
        cResult[17] = obj9;
        tmp21 = obj9;
      }
    }
    function getTrailing() {
      let tmp = null;
      if (stateFromStores) {
        tmp = null;
        if (sortingEnabled) {
          const obj = { source: _modDef16560, style: actionIconStyle };
          tmp = value3(Form.FormRow.Icon, obj);
        }
      }
      return tmp;
    }
    cResult[5] = actionIconStyle;
    cResult[6] = stateFromStores;
    cResult[7] = sortingEnabled;
    cResult[8] = getTrailing;
    tmp10 = getTrailing;
    const tmpResult = actionIconStyle(tmp2[23]);
  }
  const fn = function o() {
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
  };
  const items1 = [channel, isFavoritesGuild];
  cResult[1] = channel;
  cResult[2] = isFavoritesGuild;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  const obj3 = actionIconStyle(sortingEnabled[16]);
}) : (function ChannelItem(isFavoritesGuild) {
  ({ channelIconStyle, channel } = isFavoritesGuild);
  isFavoritesGuild = isFavoritesGuild.isFavoritesGuild;
  ({ sortingEnabled, onPress: importAll, sortHandlers } = isFavoritesGuild);
  ({ style, actionIconStyle } = isFavoritesGuild);
  const legacyClassComponentStyles = channel(5092).useLegacyClassComponentStyles(closure_18);
  let obj = channel(5092);
  let obj2 = channel(4969);
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
  const channelIcon = channel(8158).getChannelIcon(channel);
  const tmpResult = channel(8158);
  const channelIconComponent = channel(8158).getChannelIconComponent(channel);
  const tmpResult5 = channel(8158);
  const tmpResult6 = channel(4969);
  const isThemeDarkResult = channel(4969).isThemeDark(obj2.useThemeContext().theme);
  const hex2rgb = channel(1103).hex2rgb;
  const unsafe_rawColors = isFavoritesGuild(587).unsafe_rawColors;
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
    const obj8 = { size: channel(1200).Icon.Sizes.SMALL_20, source: channelIcon, style: channelIconStyle };
    tmp7Result = closure_16(channel(8579).FormRow.Icon, obj8);
  }
  const obj9 = { leading: tmp7Result, style: legacyClassComponentStyles.formRowStyle, label: null, onPress: null, trailing: null, numberOfLines: null };
  const tmpResult7 = channel(1103);
  obj9.label = channel(5421).computeChannelName(channel, UserStore, RelationshipStore);
  let fn;
  if (!sortingEnabled) {
    fn = () => importAll(channel.id);
  }
  obj9.onPress = fn;
  let tmp7Result2 = null;
  if (stateFromStores) {
    tmp7Result2 = null;
    if (sortingEnabled) {
      const obj10 = { source: tmp13(16560), style: actionIconStyle };
      tmp7Result2 = closure_16(channel(8579).FormRow.Icon, obj10);
    }
  }
  obj9.trailing = tmp7Result2;
  let num3;
  if (sortingEnabled) {
    num3 = 1;
  }
  obj9.numberOfLines = num3;
  obj6.children = closure_16(channel(8579).FormRow, obj9);
  obj4.children = closure_16(closure_5, obj6);
  return closure_16(closure_6, obj4);
});
const PureComponent2 = noop.PureComponent;
class SectionEditAction extends PureComponent2 {
}
SectionEditAction.prototype["render"] = function render() {
  ({ style, onPress } = this.props);
  const obj = { accessibilityRole: "button", onPress, children: null };
  const obj2 = { style, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.bt75uw);
  obj.children = value3(native.LegacyText, obj2);
  return value3(Pressables.PressableOpacity, obj);
};
SectionEditAction.contextType = fn(4827).ThemeContext;
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function CreateButton(guild) {
  const cResult = guild(576).c(14);
  guild = guild.guild;
  const obj = guild(576);
  const legacyClassComponentStyles = guild(5092).useLegacyClassComponentStyles(closure_18);
  const sum = 16 + useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== sum) {
    let obj3 = { bottom: sum };
    cResult[0] = sum;
    cResult[1] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== guild) {
    function handlePressButton() {
      const obj2 = { key: "GuildSettingsChannelsCreate", header: null, options: null, hasIcons: false };
      const obj3 = { title: null };
      const intl = util.intl;
      obj3.title = intl.string(util.t.CumH4u);
      obj2.header = obj3;
      const obj4 = { label: null, onPress: null };
      const intl2 = util.intl;
      obj4.label = intl2.string(util.t.vHCZwr);
      obj4.onPress = function onPress() {
        CreateChannelModalActionCreatorsDefault.open(constants.GUILD_CATEGORY, user.id, null, null);
      };
      const items = [obj4, ];
      const obj5 = { label: null, onPress: null };
      const intl3 = util.intl;
      obj5.label = intl3.string(util.t.GK18KJ);
      obj5.onPress = function onPress() {
        CreateChannelModalActionCreatorsDefault.open(null, user.id, null, null);
      };
      items[1] = obj5;
      obj2.options = items;
      const result = showSimpleActionSheet.showSimpleActionSheet(obj2);
    }
    cResult[2] = guild;
    cResult[3] = handlePressButton;
    let tmp7 = handlePressButton;
  } else {
    tmp7 = cResult[3];
  }
  if (!PermissionStore.can(constants2.MANAGE_CHANNELS, guild)) {
    return null;
  } else {
    if (cResult[4] === tmp6) {
      if (cResult[5] === legacyClassComponentStyles.floatingActionButtonContainer) {
        let tmp8 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.CumH4u);
        cResult[7] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[7];
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = closure_16(tmp(9081).PlusSmallIcon, { color: "white" });
        cResult[8] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[8];
      }
      if (cResult[9] !== tmp7) {
        let obj4 = { text: tmp10, onPress: tmp7, icon: tmp12 };
        const tmp17 = closure_16(tmp(5379).Button, obj4);
        cResult[9] = tmp7;
        cResult[10] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[10];
      }
      if (cResult[11] === tmp8) {
      }
      let obj5 = { style: tmp8, children: tmp15 };
      const tmp21 = closure_16(closure_5, obj5);
      cResult[11] = tmp8;
      cResult[12] = tmp15;
      cResult[13] = tmp21;
    }
    let items = [legacyClassComponentStyles.floatingActionButtonContainer, tmp6];
    cResult[4] = tmp6;
    cResult[5] = legacyClassComponentStyles.floatingActionButtonContainer;
    cResult[6] = items;
    tmp8 = items;
  }
  let obj2 = guild(5092);
}) : (function CreateButton(guild) {
  guild = guild.guild;
  let bottom;
  const legacyClassComponentStyles = guild(5092).useLegacyClassComponentStyles(closure_18);
  bottom = bottom(1631)().bottom;
  let items = [bottom];
  const memo = noop.useMemo(() => ({ bottom: 16 + bottom }), items);
  let tmp5 = null;
  if (PermissionStore.can(constants2.MANAGE_CHANNELS, guild)) {
    let obj2 = { style: null, children: null };
    const items1 = [legacyClassComponentStyles.floatingActionButtonContainer, memo];
    obj2.style = items1;
    let obj3 = { text: null, onPress: null, icon: null };
    let intl = tmp(1126).intl;
    obj3.text = intl.string(tmp(1126).t.CumH4u);
    obj3.onPress = function handlePressButton() {
      const obj2 = { key: "GuildSettingsChannelsCreate", header: null, options: null, hasIcons: false };
      const obj3 = { title: null };
      const intl = util.intl;
      obj3.title = intl.string(util.t.CumH4u);
      obj2.header = obj3;
      const obj4 = { label: null, onPress: null };
      const intl2 = util.intl;
      obj4.label = intl2.string(util.t.vHCZwr);
      obj4.onPress = function onPress() {
        bottom(8605).open(constants.GUILD_CATEGORY, user.id, null, null);
      };
      const items = [obj4, ];
      const obj5 = { label: null, onPress: null };
      const intl3 = util.intl;
      obj5.label = intl3.string(util.t.GK18KJ);
      obj5.onPress = function onPress() {
        bottom(8605).open(null, user.id, null, null);
      };
      items[1] = obj5;
      obj2.options = items;
      const result = showSimpleActionSheet.showSimpleActionSheet(obj2);
    };
    obj3.icon = closure_16(tmp(9081).PlusSmallIcon, { color: "white" });
    obj2.children = closure_16(tmp(5379).Button, obj3);
    tmp5 = closure_16(closure_5, obj2);
  }
  return tmp5;
});
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
              tmp21 = value3(hasOwnProperty, obj2);
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
        let tmp5Result = value3(Category, obj2);
      } else {
        let obj = null;
        if (null == sortingType) {
          obj = null;
          if (props.channels.null.length > 0) {
            obj = { marginTop: 36 };
          }
        }
        const obj3 = { style: obj };
        tmp5Result = value3(hasOwnProperty, obj3);
      }
      return tmp5Result;
    };
    applyArgumentsResult.renderItem = function renderItem(item) {
      item = item.item;
      const channel = item.channel;
      if (null != channel) {
        const obj = { channel, isFavoritesGuild: FavoritesUtils.isFavoritesGuildId(applyArgumentsResult.props.guild.id), sortingEnabled: null != item.sortingType, onPress: applyArgumentsResult.handleChannelPress, style: tmp2.row };
        let tmp5 = value3(closure_20, obj);
      } else {
        tmp5 = value3(hasOwnProperty, {});
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
        obj.icon = _modDef16562;
        obj.onPress = function onPress() {
          closure_1_1(16558).startReordering(constants.GUILD_CATEGORY);
        };
        items.push(obj);
      }
      const obj2 = { label: null, icon: null, onPress: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.nIfr0Y);
      obj2.icon = _modDef11359;
      obj2.onPress = function onPress() {
        closure_1_1(16558).startReordering(constants.GUILD_TEXT, constants.GUILD_ANNOUNCEMENT, constants.GUILD_FORUM, constants.GUILD_MEDIA, constants.GUILD_APP);
      };
      items.push(obj2);
      const obj3 = { label: null, icon: null, onPress: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.CYnO4s);
      obj3.icon = _modDef15569;
      obj3.onPress = function onPress() {
        closure_1_1(16558).startReordering(constants.GUILD_VOICE, constants.GUILD_STAGE_VOICE);
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
                const channelMoveUpdates = tmp3Result6.getChannelMoveUpdates(localChannel, localChannel2, dropData.parentId, channels);
                if (tmp3Result7.isFavoritesGuildId(guild.id)) {
                  GuildSettingsModalChannelsActionCreatorsDefault.localChannelUpdate(channelMoveUpdates);
                  const result = FavoritesActionCreators.updateFavoriteChannels(channelMoveUpdates);
                  const tmp3Result8 = FavoritesActionCreators;
                } else {
                  const found = channelMoveUpdates.filter((id) => {
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
                              const appChannelBotUserId = applyArgumentsResult(10768).getAppChannelBotUserId(localChannel);
                              const obj2 = applyArgumentsResult(10768);
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
                    let obj3 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, isDismissable: false };
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
        return value3(HeaderActionButton.HeaderActionButton, obj);
      };
    } else {
      if (obj2.canManageACategory(user, guild, channels._categories)) {
        fn2 = () => {
          const obj = { textStyle: closure_0.headerRight, text: null, onPress: null };
          const intl = util.intl;
          obj.text = intl.string(util.t["0dOFq+"]);
          obj.onPress = self.handleSortStart;
          return value3(HeaderActionButton.HeaderActionButton, obj);
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
  const items2 = [closure_16(sortingType(items[35]), obj3), , ];
  let tmp5Result = null == sortingType;
  if (tmp5Result) {
    const obj5 = { guild: props.guild };
    tmp5Result = closure_16(closure_22, obj5);
  }
  items2[1] = tmp5Result;
  items2[2] = closure_16(channels(tmp6[36]).NavScrim, {});
  obj.children = items2;
  return closure_17(closure_5, obj);
};
prototype["handleChannelPress"] = function handleChannelPress(id) {
  ChannelSettingsActionCreators.open(id);
};
GuildSettingsModalChannels.contextType = fn(4827).ThemeContext;
ReactCompilerGating = fn(558);
let obj7 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, opacity: 0.3 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalChannels.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalChannelsConnected(guildId) {
  const cResult = guildId(576).c(28);
  guildId = guildId.guildId;
  ({ contentContainerStyle, onDone } = guildId);
  const obj = guildId(576);
  const navigation = guildId(1503).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj2 = guildId(1503);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildSettingsModalChannelsStore];
    const fn2 = function v() {
      return GuildSettingsModalChannelsStore.channels;
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult = guildId(504);
  const stateFromStores1 = guildId(504).useStateFromStores(tmp9, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    const fn3 = function f() {
      currentUser = currentUser.getCurrentUser();
      _modDef38(null != currentUser, "GuildSettingsModalChannelsConnected: currentUser cannot be undefined");
      return currentUser;
    };
    cResult[5] = items2;
    cResult[6] = fn3;
    let tmp14 = fn3;
    let tmp13 = items2;
  } else {
    tmp13 = cResult[5];
    tmp14 = cResult[6];
  }
  const tmpResult7 = guildId(504);
  const stateFromStores2 = guildId(504).useStateFromStores(tmp13, tmp14);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [GuildSettingsModalChannelsStore];
    class L {
      constructor() {
        return closure_1_12.channelList;
      }
    }
    cResult[7] = items3;
    cResult[8] = L;
    let tmp18 = L;
    let tmp17 = items3;
  } else {
    tmp17 = cResult[7];
    tmp18 = cResult[8];
  }
  const tmpResult8 = guildId(504);
  const stateFromStores3 = guildId(504).useStateFromStores(tmp17, tmp18);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildSettingsModalChannelsStore];
    class G {
      constructor() {
        return closure_1_12.order;
      }
    }
    cResult[9] = G;
    cResult[10] = items4;
    let tmp22 = items4;
    let tmp21 = G;
  } else {
    tmp21 = cResult[9];
    tmp22 = cResult[10];
  }
  const tmpResult9 = guildId(504);
  const stateFromStores4 = guildId(504).useStateFromStores(tmp22, tmp21);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [GuildSettingsModalChannelsStore];
    class P {
      constructor() {
        return closure_1_12.sortingType;
      }
    }
    cResult[11] = items5;
    cResult[12] = P;
    let tmp26 = P;
    let tmp25 = items5;
  } else {
    tmp25 = cResult[11];
    tmp26 = cResult[12];
  }
  const tmpResult10 = guildId(504);
  const stateFromStores5 = guildId(504).useStateFromStores(tmp25, tmp26);
  const tmp29 = useSafeAreaInsetsDefault();
  if (cResult[13] === contentContainerStyle) {
    if (cResult[14] === tmp29.bottom) {
      if (cResult[15] === stateFromStores5) {
        let tmp30 = cResult[16];
      }
      const fontScale = tmp(5386).useFontScale();
      class P {
        constructor() {
          return closure_1_12.sortingType;
        }
      }
      let tmp33 = null;
      if (null != stateFromStores4) {
        tmp33 = null;
        if (null != stateFromStores3) {
          tmp33 = null;
          if (null != stateFromStores1) {
            tmp33 = null;
            if (null != stateFromStores) {
              tmp33 = null;
              if (null != stateFromStores2) {
                if (cResult[17] === tmp30) {
                  if (cResult[18] === stateFromStores3) {
                    if (cResult[19] === stateFromStores1) {
                      if (cResult[20] === stateFromStores2) {
                        if (cResult[21] === fontScale) {
                          if (cResult[22] === stateFromStores) {
                            if (cResult[23] === navigation) {
                              if (cResult[24] === onDone) {
                                if (cResult[25] === stateFromStores4) {
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                class P {
                  constructor() {
                    return closure_1_12.sortingType;
                  }
                }
                tmp37[0] = navigation;
                tmp37[1] = stateFromStores;
                tmp37[2] = stateFromStores1;
                tmp37[3] = stateFromStores2;
                tmp37[4] = stateFromStores3;
                tmp37[5] = stateFromStores4;
                tmp37[6] = stateFromStores5;
                tmp37[7] = tmp30;
                tmp37[8] = fontScale;
                tmp37[9] = onDone;
                const tmp38 = closure_16(GuildSettingsModalChannels, tmp37);
                cResult[17] = tmp30;
                cResult[18] = stateFromStores3;
                cResult[19] = stateFromStores1;
                cResult[20] = stateFromStores2;
                cResult[21] = fontScale;
                cResult[22] = stateFromStores;
                cResult[23] = navigation;
                cResult[24] = onDone;
                cResult[25] = stateFromStores4;
                cResult[26] = stateFromStores5;
                cResult[27] = tmp38;
              }
            }
          }
        }
      }
      return tmp33;
    }
  }
  let tmp31 = contentContainerStyle;
  if (null == stateFromStores5) {
    const items6 = [contentContainerStyle, ];
    const obj3 = { paddingBottom: null };
    class P {
      constructor() {
        return closure_1_12.sortingType;
      }
    }
    obj3.paddingBottom = tmp29.bottom + 32 + 44;
    items6[1] = obj3;
    tmp31 = items6;
  }
  cResult[13] = contentContainerStyle;
  cResult[14] = tmp29.bottom;
  cResult[15] = stateFromStores5;
  cResult[16] = tmp31;
  tmp30 = tmp31;
  const tmpResult11 = guildId(504);
}) : (function GuildSettingsModalChannelsConnected(onDone) {
  ({ guildId: require, contentContainerStyle } = onDone);
  const navigation = useNavigation.useNavigation();
  let items = [GuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => GuildStore.getGuild(_require));
  const items1 = [GuildSettingsModalChannelsStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => GuildSettingsModalChannelsStore.channels);
  const items2 = [UserStore];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    contentContainerStyle(bottom[47])(null != currentUser, "GuildSettingsModalChannelsConnected: currentUser cannot be undefined");
    return currentUser;
  });
  const items3 = [GuildSettingsModalChannelsStore];
  const stateFromStores3 = initialize.useStateFromStores(items3, () => GuildSettingsModalChannelsStore.channelList);
  const items4 = [GuildSettingsModalChannelsStore];
  const stateFromStores4 = initialize.useStateFromStores(items4, () => GuildSettingsModalChannelsStore.order);
  const items5 = [GuildSettingsModalChannelsStore];
  const stateFromStores5 = initialize.useStateFromStores(items5, () => GuildSettingsModalChannelsStore.sortingType);
  const tmp8 = contentContainerStyle(1631)();
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
});