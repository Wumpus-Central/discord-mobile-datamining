// === Module 16071: GuildSettingsModalChannels ===

// Module 16071 (GuildSettingsModalChannels)
import _modDef38 from "module_38" /* 38 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import useNavigation from "useNavigation" /* 1490 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import PermissionUtilsAll from "PermissionUtils" /* 4514 */;
import native2 from "native" /* 4589 */;
import shared from "shared" /* 4729 */;
import useChannelName from "useChannelName" /* 5043 */;
import useFontScale from "useFontScale" /* 5602 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import Pressables from "Pressables" /* 5909 */;
import showSimpleActionSheet2 from "showSimpleActionSheet" /* 6693 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6880 */;
import Form from "Form" /* 8895 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9214 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10035 */;
import ChannelSettingsActionCreators from "ChannelSettingsActionCreators" /* 10062 */;
import ChannelSortingUtils from "ChannelSortingUtils" /* 10734 */;
import AssetRegistryDefault from "AssetRegistry" /* 11415 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15117 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16070 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 16072 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 16074 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 16069 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import TextStyles_mod from "TextStyles" /* 5915 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, currentUser, dependencyMap, guildId, navigation;

let Fonts;
let StyleSheet;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: hasOwnProperty, TouchableHighlight: metroRequire, StyleSheet } = react_native);
({ ChannelTypes: map1, Permissions: closure_14, Fonts, NULL_STRING_CHANNEL_ID: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let obj = { headerRight: obj2, containerView: obj3, categoryText: obj4, categoryView: { paddingTop: 36, paddingBottom: 8 }, sortingCategoryView: { paddingTop: 16 }, edit: obj5, row: { marginTop: -StyleSheet.hairlineWidth }, formRowStyle: { paddingVertical: 12 }, dropHighlight: obj6, floatingActionButtonContainer: { position: "absolute", bottom: 16, right: 0, left: 0, flexDirection: "row", justifyContent: "center" } };
obj2 = { textTransform: "capitalize" };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
let TextStyles = TextStyles_mod;
let merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = {};
const DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true }));
obj5 = {};
TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_SUBTLE, 14));
obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, opacity: 0.3 };
const authStore4 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class Category extends PureComponent {
  render() {
    let actionIconStyle;
    let editStyle;
    let hex2rgbResult;
    let intl;
    let items;
    let items1;
    let obj7;
    let tmp11;
    let tmp3Result;
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
    const obj = {
      accessibilityRole: "button",
      accessibilityActions: items,
      onAccessibilityAction(nativeEvent) {
        let tmp;
        if ("activate" === nativeEvent.nativeEvent.actionName) {
          let tmp2Result;
          if (onPress != null) {
            tmp2Result = tmp2(category.id);
          }
          tmp = tmp2Result;
        }
        return tmp;
      },
      underlayColor: hex2rgbResult,
      children: authStore3(hasOwnProperty, obj7)
    };
    const obj2 = { name: "activate", label: intl.string(intl5.t.bt75uw) };
    intl = intl5.intl;
    items = [obj2];
    const obj3 = shared;
    const isThemeDarkResult = obj3.isThemeDark(self.context.theme);
    const hex2rgb = utils_ColorUtils.hex2rgb;
    utils_ColorUtils;
    const unsafe_rawColors = nativeDefault.unsafe_rawColors;
    if (isThemeDarkResult) {
      hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_700, 0.6);
      tmp11 = importDefault;
    } else {
      hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_200, 0.6);
      tmp11 = importDefault;
    }
    const merged = Object.assign(sortHandlers);
    const obj4 = { title: category.name, numberOfLines: 1, textStyle: tmp.categoryText, viewStyle: items1, icon: tmp3Result };
    items1 = [tmp.categoryView, ];
    let sortingCategoryView = null;
    const FormTitle = Form.FormTitle;
    if (sortingEnabled) {
      sortingCategoryView = tmp.sortingCategoryView;
    }
    items1[1] = sortingCategoryView;
    if (null != onPress) {
      const obj5 = {
        style: editStyle,
        onPress() {
            return onPress(category.id);
          }
      };
      tmp3Result = authStore3(SectionEditAction, obj5);
    } else {
      tmp3Result = null;
      if (null != sortHandlers) {
        const obj6 = { source: tmp11(16072), style: actionIconStyle };
        const Icon = native.Icon;
        tmp3Result = authStore3(Icon, obj6);
      }
    }
    obj7 = { children: authStore3(FormTitle, obj4) };
    return authStore3(metroRequire, obj);
  }
}
const prototype = Category.prototype;
Category.contextType = native2.ThemeContext;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let actionIconStyle;
  let channelIconStyle;
  let first;
  let sortingEnabled;
  let style;
  let obj = actionIconStyle(sortingEnabled[22]);
  const cResult = obj.c(45);
  ({ style, channelIconStyle, actionIconStyle } = channel);
  channel = channel.channel;
  const isFavoritesGuild = channel.isFavoritesGuild;
  sortingEnabled = channel.sortingEnabled;
  const onPress = channel.onPress;
  let obj2 = actionIconStyle(sortingEnabled[10]);
  const legacyClassComponentStyles = obj2.useLegacyClassComponentStyles(closure_18);
  const obj3 = actionIconStyle(sortingEnabled[16]);
  const theme = obj3.useThemeContext().theme;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel) {
    let tmp7;
    let tmp8;
    if (cResult[2] === isFavoritesGuild) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = actionIconStyle(sortingEnabled[23]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] === actionIconStyle) {
      if (cResult[6] === stateFromStores) {
        let tmp10;
        let tmp15;
        if (cResult[7] === sortingEnabled) {
          tmp10 = cResult[8];
        }
        if (cResult[9] !== channel) {
          const tmpResult6 = actionIconStyle(sortingEnabled[24]);
          const channelIcon = tmpResult6.getChannelIcon(channel);
          cResult[9] = channel;
          cResult[10] = channelIcon;
          class T {
            constructor() {
              let tmp = null;
              if (stateFromStores) {
                tmp = null;
                if (sortingEnabled) {
                  const obj = { source: AssetRegistryDefault3, style: actionIconStyle };
                  const Icon = Form.FormRow.Icon;
                  tmp = authStore3(Icon, obj);
                }
              }
              return tmp;
            }
          }
        }
        if (cResult[11] !== channel) {
          const tmpResult7 = actionIconStyle(sortingEnabled[24]);
          const channelIconComponent = tmpResult7.getChannelIconComponent(channel);
          cResult[11] = channel;
          cResult[12] = channelIconComponent;
          class T {
            constructor() {
              let tmp = null;
              if (stateFromStores) {
                tmp = null;
                if (sortingEnabled) {
                  const obj = { source: AssetRegistryDefault3, style: actionIconStyle };
                  const Icon = Form.FormRow.Icon;
                  tmp = authStore3(Icon, obj);
                }
              }
              return tmp;
            }
          }
        }
        if (cResult[13] !== theme) {
          const tmpResult8 = actionIconStyle(sortingEnabled[16]);
          tmpResult8.isThemeDark(theme);
          const hex2rgb = actionIconStyle(sortingEnabled[17]).hex2rgb;
          actionIconStyle(sortingEnabled[17]);
          const unsafe_rawColors = channel(tmp2[12]).unsafe_rawColors;
          class T {
            constructor() {
              let tmp = null;
              if (stateFromStores) {
                tmp = null;
                if (sortingEnabled) {
                  const obj = { source: AssetRegistryDefault3, style: actionIconStyle };
                  const Icon = Form.FormRow.Icon;
                  tmp = authStore3(Icon, obj);
                }
              }
              return tmp;
            }
          }
          cResult[13] = theme;
          cResult[14] = tmp19;
          tmp15 = tmp19;
        } else {
          tmp15 = cResult[14];
        }
        if (cResult[15] === stateFromStores) {
          let tmp21;
          let tmp26;
          if (cResult[16] === sortingEnabled) {
            tmp21 = cResult[17];
          }
          if (cResult[18] === tmp13) {
            if (cResult[19] === tmp11) {
              let tmp23;
              let tmp28;
              if (cResult[20] === channelIconStyle) {
                tmp23 = cResult[21];
              }
              const formRowStyle = legacyClassComponentStyles.formRowStyle;
              if (cResult[22] !== channel) {
                const tmpResult10 = actionIconStyle(sortingEnabled[25]);
                const channelName = tmpResult10.computeChannelName(channel, UserStore, RelationshipStore);
                cResult[22] = channel;
                class T {
                  constructor() {
                    let tmp = null;
                    if (stateFromStores) {
                      tmp = null;
                      if (sortingEnabled) {
                        const obj = { source: AssetRegistryDefault3, style: actionIconStyle };
                        const Icon = Form.FormRow.Icon;
                        tmp = authStore3(Icon, obj);
                      }
                    }
                    return tmp;
                  }
                }
                cResult[23] = channelName;
                tmp28 = channelName;
              } else {
                tmp28 = cResult[23];
              }
              if (cResult[24] === channel) {
                if (cResult[25] === onPress) {
                  let tmp32;
                  let tmp33;
                  if (cResult[26] === sortingEnabled) {
                    tmp32 = cResult[27];
                  }
                  if (cResult[28] !== tmp10) {
                    const tmp10Result = tmp10();
                    cResult[28] = tmp10;
                    cResult[29] = tmp10Result;
                    tmp33 = tmp10Result;
                  } else {
                    tmp33 = cResult[29];
                  }
                  let num24;
                  if (sortingEnabled) {
                    num24 = 1;
                  }
                  if (cResult[30] === legacyClassComponentStyles.formRowStyle) {
                    if (cResult[31] === tmp23) {
                      if (cResult[32] === tmp28) {
                        if (cResult[33] === tmp32) {
                          if (cResult[34] === tmp33) {
                            let tmp35;
                            if (cResult[35] === num24) {
                              tmp35 = cResult[36];
                            }
                            if (cResult[37] === tmp21) {
                              let tmp39;
                              if (cResult[38] === tmp35) {
                                tmp39 = cResult[39];
                              }
                              if (cResult[40] === channel.sortHandlers) {
                                if (cResult[41] === style) {
                                  if (cResult[42] === tmp39) {
                                    let tmp43;
                                    if (cResult[43] === tmp15) {
                                      tmp43 = cResult[44];
                                    }
                                    return tmp43;
                                  }
                                }
                              }
                              const obj4 = { accessibilityRole: "button", underlayColor: tmp15, style: null, children: tmp39 };
                              class T {
                                constructor() {
                                  let tmp = null;
                                  if (stateFromStores) {
                                    tmp = null;
                                    if (sortingEnabled) {
                                      const obj = { source: AssetRegistryDefault3, style: actionIconStyle };
                                      const Icon = Form.FormRow.Icon;
                                      tmp = authStore3(Icon, obj);
                                    }
                                  }
                                  return tmp;
                                }
                              }
                              const merged = Object.assign(sortHandlers);
                              const tmp49 = closure_16(closure_6, obj4);
                              cResult[40] = channel.sortHandlers;
                              cResult[41] = style;
                              cResult[42] = tmp39;
                              cResult[43] = tmp15;
                              cResult[44] = tmp49;
                              tmp43 = tmp49;
                            }
                            const obj5 = { style: tmp21, children: null };
                            class T {
                              constructor() {
                                let tmp = null;
                                if (stateFromStores) {
                                  tmp = null;
                                  if (sortingEnabled) {
                                    const obj = { source: AssetRegistryDefault3, style: actionIconStyle };
                                    const Icon = Form.FormRow.Icon;
                                    tmp = authStore3(Icon, obj);
                                  }
                                }
                                return tmp;
                              }
                            }
                            const tmp42 = closure_16(stateFromStores, obj5);
                            cResult[37] = tmp21;
                            cResult[38] = tmp35;
                            cResult[39] = tmp42;
                            tmp39 = tmp42;
                          }
                        }
                      }
                    }
                  }
                  class T {
                    constructor() {
                      let tmp = null;
                      if (stateFromStores) {
                        tmp = null;
                        if (sortingEnabled) {
                          const obj = { source: AssetRegistryDefault3, style: actionIconStyle };
                          const Icon = Form.FormRow.Icon;
                          tmp = authStore3(Icon, obj);
                        }
                      }
                      return tmp;
                    }
                  }
                  tmp37[0] = tmp23;
                  tmp37[1] = formRowStyle;
                  tmp37[2] = tmp28;
                  tmp37[3] = tmp32;
                  tmp37[4] = tmp33;
                  tmp37[5] = num24;
                  const tmp38 = closure_16(actionIconStyle(sortingEnabled[18]).FormRow, tmp37);
                  cResult[30] = legacyClassComponentStyles.formRowStyle;
                  cResult[31] = tmp23;
                  cResult[32] = tmp28;
                  cResult[33] = tmp32;
                  cResult[34] = tmp33;
                  cResult[35] = num24;
                  cResult[36] = tmp38;
                  tmp35 = tmp38;
                }
              }
              let fn2;
              if (!sortingEnabled) {
                fn2 = () => onPress(channel.id);
              }
              class T {
                constructor() {
                  let tmp = null;
                  if (stateFromStores) {
                    tmp = null;
                    if (sortingEnabled) {
                      const obj = { source: AssetRegistryDefault3, style: actionIconStyle };
                      const Icon = Form.FormRow.Icon;
                      tmp = authStore3(Icon, obj);
                    }
                  }
                  return tmp;
                }
              }
              cResult[24] = channel;
              cResult[25] = onPress;
              cResult[26] = sortingEnabled;
              cResult[27] = fn2;
              tmp32 = fn2;
            }
          }
          if (null != tmp13) {
            const obj6 = { style: channelIconStyle, size: "sm" };
            tmp26 = closure_16(tmp13, obj6);
          } else {
            ({ size: actionIconStyle(sortingEnabled[19]).Icon.Sizes.SMALL_20, source: tmp11, style: channelIconStyle });
            let Icon = actionIconStyle(tmp2[18]).FormRow.Icon;
            class T {
              constructor() {
                let tmp = null;
                if (stateFromStores) {
                  tmp = null;
                  if (sortingEnabled) {
                    const obj = { source: AssetRegistryDefault3, style: actionIconStyle };
                    const Icon = Form.FormRow.Icon;
                    tmp = authStore3(Icon, obj);
                  }
                }
                return tmp;
              }
            }
          }
          cResult[18] = tmp13;
          class T {
            constructor() {
              let tmp = null;
              if (stateFromStores) {
                tmp = null;
                if (sortingEnabled) {
                  const obj = { source: AssetRegistryDefault3, style: actionIconStyle };
                  const Icon = Form.FormRow.Icon;
                  tmp = authStore3(Icon, obj);
                }
              }
              return tmp;
            }
          }
          cResult[19] = tmp11;
          cResult[20] = channelIconStyle;
          cResult[21] = tmp26;
          tmp23 = tmp26;
        }
        class T {
          constructor() {
            let tmp = null;
            if (stateFromStores) {
              tmp = null;
              if (sortingEnabled) {
                const obj = { source: AssetRegistryDefault3, style: actionIconStyle };
                const Icon = Form.FormRow.Icon;
                tmp = authStore3(Icon, obj);
              }
            }
            return tmp;
          }
        }
        cResult[15] = stateFromStores;
        cResult[16] = sortingEnabled;
        cResult[17] = null;
        tmp21 = tmp22;
      }
    }
    class T {
      constructor() {
        let tmp = null;
        if (stateFromStores) {
          tmp = null;
          if (sortingEnabled) {
            const obj = { source: AssetRegistryDefault3, style: actionIconStyle };
            const Icon = Form.FormRow.Icon;
            tmp = authStore3(Icon, obj);
          }
        }
        return tmp;
      }
    }
    cResult[5] = actionIconStyle;
    cResult[6] = stateFromStores;
    cResult[7] = sortingEnabled;
    cResult[8] = T;
    tmp10 = T;
  }
  const fn = function l() {
    let tmp = isFavoritesGuild;
    if (!tmp) {
      let result;
      if (null == channel.parent_id) {
        const obj2 = { guildId: channel.guild_id };
        result = PermissionStore.canWithPartialContext(constants.MANAGE_CHANNELS, obj2);
      } else {
        const obj = { channelId: channel.parent_id };
        result = PermissionStore.canWithPartialContext(constants.MANAGE_CHANNELS, obj);
      }
      tmp = result;
    }
    return tmp;
  };
  const items1 = [channel, isFavoritesGuild];
  cResult[1] = channel;
  cResult[2] = isFavoritesGuild;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((isFavoritesGuild) => {
  let FormRow;
  let actionIconStyle;
  let channel;
  let channelIconStyle;
  let fn;
  let hex2rgbResult;
  let num3;
  let obj6;
  let obj9;
  let sortHandlers;
  let sortingEnabled;
  let style;
  let tmp13;
  let tmp7Result;
  let tmp7Result2;
  let tmpResult8;
  ({ channelIconStyle, channel } = isFavoritesGuild);
  isFavoritesGuild = isFavoritesGuild.isFavoritesGuild;
  ({ sortingEnabled, onPress: importAll, sortHandlers } = isFavoritesGuild);
  ({ style, actionIconStyle } = isFavoritesGuild);
  let obj = channel(4890);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_18);
  let obj2 = channel(4729);
  const theme = obj2.useThemeContext().theme;
  const items = [PermissionStore];
  const items1 = [channel, isFavoritesGuild];
  const obj3 = channel(504);
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let tmp = isFavoritesGuild;
    if (!tmp) {
      let result;
      if (null == channel.parent_id) {
        const obj2 = { guildId: channel.guild_id };
        result = PermissionStore.canWithPartialContext(constants.MANAGE_CHANNELS, obj2);
      } else {
        const obj = { channelId: channel.parent_id };
        result = PermissionStore.canWithPartialContext(constants.MANAGE_CHANNELS, obj);
      }
      tmp = result;
    }
    return tmp;
  }, items1);
  const tmpResult = channel(5812);
  const channelIcon = tmpResult.getChannelIcon(channel);
  const tmpResult5 = channel(5812);
  const channelIconComponent = tmpResult5.getChannelIconComponent(channel);
  const tmpResult6 = channel(4729);
  const isThemeDarkResult = tmpResult6.isThemeDark(theme);
  const hex2rgb = channel(1103).hex2rgb;
  channel(1103);
  const unsafe_rawColors = isFavoritesGuild(587).unsafe_rawColors;
  if (isThemeDarkResult) {
    hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_700, 0.6);
    tmp13 = tmp11;
  } else {
    hex2rgbResult = hex2rgb(unsafe_rawColors.PRIMARY_200, 0.6);
    tmp13 = tmp11;
  }
  const obj4 = { accessibilityRole: "button", underlayColor: hex2rgbResult, style, children: closure_16(closure_5, obj6) };
  const merged = Object.assign(sortHandlers);
  let obj5 = null;
  if (sortingEnabled) {
    obj5 = null;
    if (!stateFromStores) {
      obj5 = { opacity: 0.3 };
    }
  }
  obj6 = { style: obj5, children: closure_16(FormRow, obj9) };
  FormRow = channel(8895).FormRow;
  if (null != channelIconComponent) {
    const obj7 = { style: channelIconStyle, size: "sm" };
    tmp7Result = closure_16(channelIconComponent, obj7);
  } else {
    const obj8 = { size: channel(1188).Icon.Sizes.SMALL_20, source: channelIcon, style: channelIconStyle };
    const Icon = channel(8895).FormRow.Icon;
    tmp7Result = closure_16(Icon, obj8);
  }
  obj9 = { leading: tmp7Result, style: legacyClassComponentStyles.formRowStyle, label: tmpResult8.computeChannelName(channel, UserStore, RelationshipStore), onPress: fn, trailing: tmp7Result2, numberOfLines: num3 };
  fn = undefined;
  tmpResult8 = channel(5043);
  if (!sortingEnabled) {
    fn = () => importAll(channel.id);
  }
  tmp7Result2 = null;
  if (stateFromStores) {
    tmp7Result2 = null;
    if (sortingEnabled) {
      const obj10 = { source: tmp13(16072), style: actionIconStyle };
      const Icon2 = channel(8895).FormRow.Icon;
      tmp7Result2 = closure_16(Icon2, obj10);
    }
  }
  num3 = undefined;
  if (sortingEnabled) {
    num3 = 1;
  }
  return closure_16(closure_6, obj4);
});
const PureComponent2 = react.PureComponent;
class SectionEditAction extends PureComponent2 {
  render() {
    let LegacyText;
    let intl;
    let obj2;
    let onPress;
    let style;
    ({ style, onPress } = this.props);
    const obj = { accessibilityRole: "button", onPress, children: authStore3(LegacyText, obj2) };
    const PressableOpacity = Pressables.PressableOpacity;
    obj2 = { style, children: intl.string(intl5.t.bt75uw) };
    LegacyText = native.LegacyText;
    intl = intl5.intl;
    return authStore3(PressableOpacity, obj);
  }
}
const prototype2 = SectionEditAction.prototype;
SectionEditAction.contextType = native2.ThemeContext;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let tmp6;
  let tmp7;
  const tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(14);
  guild = guild.guild;
  let obj2 = guild(4890);
  const legacyClassComponentStyles = obj2.useLegacyClassComponentStyles(closure_18);
  const sum = 16 + useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== sum) {
    let obj3 = { bottom: sum };
    cResult[0] = sum;
    cResult[1] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== guild) {
    const fn = function p() {
      let intl;
      let intl2;
      let intl3;
      let items;
      let obj2;
      let user;
      let obj = { key: "GuildSettingsChannelsCreate", header: obj2, options: items, hasIcons: false };
      obj2 = { title: intl.string(intl5.t.CumH4u) };
      const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
      showSimpleActionSheet2;
      intl = intl5.intl;
      const obj3 = {
        label: intl2.string(intl5.t.vHCZwr),
        onPress() {
          const obj = CreateChannelModalActionCreatorsDefault;
          obj.open(constants.GUILD_CATEGORY, user.id, null, null);
        }
      };
      intl2 = intl5.intl;
      items = [obj3, ];
      const obj4 = {
        label: intl3.string(intl5.t.GK18KJ),
        onPress() {
          const obj = CreateChannelModalActionCreatorsDefault;
          obj.open(null, user.id, null, null);
        }
      };
      intl3 = intl5.intl;
      items[1] = obj4;
      const result = showSimpleActionSheet(obj);
    };
    cResult[2] = guild;
    cResult[3] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[3];
  }
  let tmp8 = null;
  if (PermissionStore.can(constants2.MANAGE_CHANNELS, guild)) {
    if (cResult[4] === tmp6) {
      let tmp9;
      let tmp11;
      let tmp13;
      let tmp16;
      if (cResult[5] === legacyClassComponentStyles.floatingActionButtonContainer) {
        tmp9 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.CumH4u);
        cResult[7] = stringResult;
        tmp11 = stringResult;
      } else {
        tmp11 = cResult[7];
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = closure_16(tmp(8529).PlusSmallIcon, { color: "white" });
        cResult[8] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] !== tmp7) {
        let obj4 = { text: tmp11, onPress: tmp7, icon: tmp13 };
        const tmp18 = closure_16(tmp(5594).Button, obj4);
        cResult[9] = tmp7;
        cResult[10] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[10];
      }
      if (cResult[11] === tmp9) {
        let tmp19;
        if (cResult[12] === tmp16) {
          tmp19 = cResult[13];
        }
        tmp8 = tmp19;
      }
      const obj5 = { style: tmp9, children: tmp16 };
      const tmp22 = closure_16(closure_5, obj5);
      cResult[11] = tmp9;
      cResult[12] = tmp16;
      cResult[13] = tmp22;
      tmp19 = tmp22;
    }
    let items = [legacyClassComponentStyles.floatingActionButtonContainer, tmp6];
    cResult[4] = tmp6;
    cResult[5] = legacyClassComponentStyles.floatingActionButtonContainer;
    cResult[6] = items;
    tmp9 = items;
  }
  return tmp8;
}) : ((guild) => {
  let Button;
  let intl;
  let items1;
  let obj3;
  guild = guild.guild;
  let bottom;
  const tmp = guild;
  let obj = guild(4890);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_18);
  bottom = bottom(1618)().bottom;
  let items = [bottom];
  const memo = react.useMemo(() => ({ bottom: 16 + bottom }), items);
  let tmp5 = null;
  if (PermissionStore.can(constants2.MANAGE_CHANNELS, guild)) {
    let obj2 = { style: items1, children: closure_16(Button, obj3) };
    items1 = [legacyClassComponentStyles.floatingActionButtonContainer, memo];
    obj3 = {
      text: intl.string(tmp(1126).t.CumH4u),
      onPress() {
          let intl;
          let intl2;
          let intl3;
          let items;
          let obj2;
          let user;
          let obj = { key: "GuildSettingsChannelsCreate", header: obj2, options: items, hasIcons: false };
          obj2 = { title: intl.string(intl5.t.CumH4u) };
          const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
          showSimpleActionSheet2;
          intl = intl5.intl;
          const obj3 = {
            label: intl2.string(intl5.t.vHCZwr),
            onPress() {
              const obj = bottom(dependencyMap[29]);
              obj.open(constants.GUILD_CATEGORY, user.id, null, null);
            }
          };
          intl2 = intl5.intl;
          items = [obj3, ];
          const obj4 = {
            label: intl3.string(intl5.t.GK18KJ),
            onPress() {
              const obj = bottom(dependencyMap[29]);
              obj.open(null, user.id, null, null);
            }
          };
          intl3 = intl5.intl;
          items[1] = obj4;
          const result = showSimpleActionSheet(obj);
        },
      icon: closure_16(tmp(8529).PlusSmallIcon, { color: "white" })
    };
    Button = tmp(5594).Button;
    intl = tmp(1126).intl;
    tmp5 = closure_16(closure_5, obj2);
  }
  return tmp5;
});
const PureComponent3 = react.PureComponent;
class GuildSettingsModalChannels extends PureComponent3 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    applyArgumentsResult.state = { hovering: null };
    applyArgumentsResult.renderActiveDivider = function renderActiveDivider(height, order, order2) {
      let channelList;
      let guild;
      let items;
      const props = require.props;
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
              const tmp4Result = FavoritesUtils;
              let isFavoritesGuildIdResult = tmp4Result.isFavoritesGuildId(guild.id);
              if (!isFavoritesGuildIdResult) {
                let canResult;
                if (null == dropData.parentId) {
                  canResult = PermissionStore.can(constants.MANAGE_CHANNELS, guild);
                } else {
                  canResult = PermissionStore.can(constants.MANAGE_CHANNELS, ChannelStore.getChannel(dropData.parentId));
                }
                isFavoritesGuildIdResult = canResult;
              }
              tmp12 = isFavoritesGuildIdResult;
            }
            let tmp20 = null;
            if (tmp12) {
              const obj2 = { style: items };
              items = [tmp.dropHighlight, ];
              const obj3 = { height };
              items[1] = obj3;
              tmp20 = authStore3(hasOwnProperty, obj2);
            }
            return tmp20;
          }
        }
      }
      return null;
    };
    applyArgumentsResult.renderSectionHeader = function renderSectionHeader(section) {
      let handleChannelPress;
      let hasItem;
      let tmp5Result;
      const id = section.section.category.id;
      const props = require.props;
      const sortingType = props.sortingType;
      let localChannel = null;
      const channels = props.channels;
      const tmp2 = closure_18(require.context);
      if ("null" !== id) {
        localChannel = GuildSettingsModalChannelsStore.getLocalChannel(id);
      }
      if (null != localChannel) {
        const obj2 = { category: localChannel, sortingEnabled: hasItem, editStyle: tmp2.edit, onPress: handleChannelPress };
        hasItem = null != sortingType && sortingType.has(map1.GUILD_CATEGORY);
        handleChannelPress = undefined;
        if (null == sortingType) {
          handleChannelPress = require.handleChannelPress;
        }
        tmp5Result = authStore3(Category, obj2);
      } else {
        let obj = null;
        if (null == sortingType) {
          obj = null;
          if (channels.null.length > 0) {
            obj = { marginTop: 36 };
          }
        }
        const obj3 = { style: obj };
        tmp5Result = authStore3(hasOwnProperty, obj3);
      }
      return tmp5Result;
    };
    applyArgumentsResult.renderItem = function renderItem(item) {
      let obj2;
      let tmp5;
      item = item.item;
      const channel = item.channel;
      const sortingType = item.sortingType;
      if (null != channel) {
        const obj = { channel, isFavoritesGuild: obj2.isFavoritesGuildId(require.props.guild.id), sortingEnabled: null != sortingType, onPress: require.handleChannelPress, style: tmp2.row };
        obj2 = FavoritesUtils;
        tmp5 = authStore3(closure_20, obj);
      } else {
        tmp5 = authStore3(hasOwnProperty, {});
      }
      return tmp5;
    };
    applyArgumentsResult.handleHoverChange = function handleHoverChange(hovering) {
      const obj = { hovering };
      require.setState(obj);
    };
    applyArgumentsResult.handleSortStart = function handleSortStart() {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj5;
      const items = [];
      if (PermissionStore.can(constants.MANAGE_CHANNELS, require.props.guild)) {
        let obj = {
          label: intl.string(intl5.t.ffgJrs),
          icon: AssetRegistryDefault4,
          onPress() {
              const obj = closure_1_1(closure_1_3[39]);
              obj.startReordering(constants.GUILD_CATEGORY);
            }
        };
        const push = items.push;
        intl = intl5.intl;
        push(obj);
      }
      const push2 = items.push;
      const obj2 = {
        label: intl2.string(intl5.t.nIfr0Y),
        icon: AssetRegistryDefault,
        onPress() {
          const obj = closure_1_1(closure_1_3[39]);
          obj.startReordering(constants.GUILD_TEXT, constants.GUILD_ANNOUNCEMENT, constants.GUILD_FORUM, constants.GUILD_MEDIA, constants.GUILD_APP);
        }
      };
      intl2 = intl5.intl;
      push2(obj2);
      const push3 = items.push;
      const obj3 = {
        label: intl3.string(intl5.t.CYnO4s),
        icon: AssetRegistryDefault2,
        onPress() {
          const obj = closure_1_1(closure_1_3[39]);
          obj.startReordering(constants.GUILD_VOICE, constants.GUILD_STAGE_VOICE);
        }
      };
      intl3 = intl5.intl;
      push3(obj3);
      const obj4 = { key: "GuildSettingsChannelsSort", header: obj5, options: items, hasIcons: true };
      obj5 = { title: intl4.string(intl5.t["0dOFq+"]) };
      const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
      showSimpleActionSheet2;
      intl4 = intl5.intl;
      const result = showSimpleActionSheet(obj4);
    };
    applyArgumentsResult.handleDrop = function handleDrop(arg0) {
      let channels;
      let format;
      let guild;
      let intl;
      let intl3;
      let intl4;
      let obj4;
      let order;
      let prop;
      let saveUpdates;
      let str;
      let tmp3Result9;
      const props = require.props;
      ({ order, channels, guild } = props);
      const channelList = props.channelList;
      const localChannel = GuildSettingsModalChannelsStore.getLocalChannel(order[arg0.from]);
      const localChannel1 = GuildSettingsModalChannelsStore.getLocalChannel(order[arg0.to]);
      let obj2 = ChannelSortingUtils;
      const dropData = obj2.getDropData(localChannel, arg0.from, localChannel1, arg0.to, channelList);
      if (null != dropData) {
        if (localChannel1 !== localChannel) {
          if (null != localChannel) {
            if (null != localChannel1) {
              let tmp13 = null != dropData;
              if (tmp13) {
                const tmp3Result = FavoritesUtils;
                let isFavoritesGuildIdResult = tmp3Result.isFavoritesGuildId(guild.id);
                if (!isFavoritesGuildIdResult) {
                  let canResult;
                  if (null == dropData.parentId) {
                    canResult = PermissionStore.can(constants.MANAGE_CHANNELS, guild);
                  } else {
                    canResult = PermissionStore.can(constants.MANAGE_CHANNELS, ChannelStore.getChannel(dropData.parentId));
                  }
                  isFavoritesGuildIdResult = canResult;
                }
                tmp13 = isFavoritesGuildIdResult;
              }
              if (tmp13) {
                const referenceId = dropData.referenceId;
                let localChannel2 = null;
                const getChannelMoveUpdates = ChannelSortingUtils.getChannelMoveUpdates;
                const tmp3Result6 = ChannelSortingUtils;
                if (null != referenceId) {
                  localChannel2 = GuildSettingsModalChannelsStore.getLocalChannel(referenceId);
                }
                const channelMoveUpdates = getChannelMoveUpdates(localChannel, localChannel2, dropData.parentId, channels);
                const tmp3Result7 = FavoritesUtils;
                if (tmp3Result7.isFavoritesGuildId(guild.id)) {
                  const obj11 = GuildSettingsModalChannelsActionCreatorsDefault;
                  obj11.localChannelUpdate(channelMoveUpdates);
                  const tmp3Result8 = FavoritesActionCreators;
                  const result = tmp3Result8.updateFavoriteChannels(channelMoveUpdates);
                } else {
                  const found = channelMoveUpdates.filter((id) => {
                    const channel = closure_2_7.getChannel(id.id);
                    if (null == channel) {
                      return false;
                    } else {
                      const channel1 = closure_2_7.getChannel(channel.parent_id);
                      if (channel.type !== constants.GUILD_CATEGORY) {
                        let canResult;
                        if (null != channel1) {
                          canResult = closure_2_9.can(constants2.MANAGE_CHANNELS, channel1);
                        }
                        return canResult;
                      }
                      canResult = closure_2_9.can(constants2.MANAGE_CHANNELS, guild);
                    }
                  });
                  if (localChannel.parent_id !== dropData.parentId) {
                    const found1 = found.find((id) => {
                      if (id.id !== localChannel.id) {
                        return false;
                      } else {
                        const channel = closure_2_7.getChannel(id.parent_id);
                        if (null != channel) {
                          if (closure_2_9.can(constants2.MANAGE_ROLES, localChannel)) {
                            if (closure_2_9.can(constants2.MANAGE_ROLES, channel)) {
                              const obj2 = closure_2_0(closure_2_3[43]);
                              const appChannelBotUserId = obj2.getAppChannelBotUserId(localChannel);
                              const obj3 = closure_2_2(closure_2_3[33]);
                              const areChannelsLockedResult = obj3.areChannelsLocked(localChannel, channel, appChannelBotUserId);
                              const obj4 = closure_2_2(closure_2_3[33]);
                              let areChannelsLockedResult1 = obj4.areChannelsLocked(localChannel, closure_2_7.getChannel(localChannel.parent_id), appChannelBotUserId);
                              let tmp9 = null == localChannel.parent_id && !areChannelsLockedResult;
                              if (!tmp9) {
                                if (areChannelsLockedResult1) {
                                  areChannelsLockedResult1 = !areChannelsLockedResult;
                                }
                                tmp9 = areChannelsLockedResult1;
                              }
                              if (tmp9) {
                                let closure_1_2 = id;
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
                    let obj3 = {
                      title: intl.string(intl5.t.YWMtRe),
                      body: format(prop, obj4),
                      confirmText: intl3.string(intl5.t.eW8Gy4),
                      cancelText: intl4.string(intl5.t.s4uM3b),
                      onConfirm() {
                                      parent_id.lock_permissions = true;
                                      const obj = closure_2_1(closure_2_3[39]);
                                      obj.localChannelUpdate(found);
                                      const obj2 = closure_2_1(closure_2_3[44]);
                                      obj2.batchChannelUpdate(localChannel.guild_id, found);
                                    },
                      onCancel: saveUpdates,
                      isDismissable: false
                    };
                    const show = AlertActionCreatorsDefault.show;
                    AlertActionCreatorsDefault;
                    intl = intl5.intl;
                    const intl2 = intl5.intl;
                    format = intl2.format;
                    obj4 = { channelName: tmp3Result9.computeChannelName(localChannel, UserStore, RelationshipStore, true), categoryName: str };
                    prop = intl5.t["iKW+jY"];
                    str = "";
                    tmp3Result9 = useChannelName;
                    if (null != channel) {
                      const tmp3Result10 = useChannelName;
                      str = tmp3Result10.computeChannelName(channel, UserStore, RelationshipStore);
                    }
                    saveUpdates = function saveUpdates() {
                      const obj = closure_2_1(closure_2_3[39]);
                      obj.localChannelUpdate(found);
                      const obj2 = closure_2_1(closure_2_3[44]);
                      obj2.batchChannelUpdate(localChannel.guild_id, found);
                    };
                    intl3 = intl5.intl;
                    intl4 = intl5.intl;
                    show(obj3);
                  } else {
                    const obj5 = GuildSettingsModalChannelsActionCreatorsDefault;
                    obj5.localChannelUpdate(found);
                    const obj6 = GuildActionCreatorsDefault;
                    obj6.batchChannelUpdate(localChannel.guild_id, found);
                  }
                }
              }
            }
          }
        }
      }
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this.updateNavigation();
  }
  componentDidUpdate(arg0) {
    this.updateNavigation(arg0);
  }
  updateNavigation(sortingType) {
    let channels;
    let closure_0;
    let fn2;
    let guild;
    let order;
    let stringResult;
    let user;
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
      const setOptions = navigation.setOptions;
      if (null != sortingType) {
        fn = () => null;
      }
      let obj = { headerLeft: fn, headerRight: fn2, headerTitle: stringResult };
      if (null != sortingType) {
        fn2 = () => {
          let intl;
          const obj = { textStyle: closure_0.headerRight, text: intl.string(intl5.t.i4jeWR), onPress: self.props.onDone };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl5.intl;
          return authStore3(HeaderActionButton, obj);
        };
      } else {
        const obj2 = PermissionUtilsAll;
        if (obj2.canManageACategory(user, guild, channels._categories)) {
          fn2 = () => {
            let intl;
            const obj = { textStyle: closure_0.headerRight, text: intl.string(intl5.t["0dOFq+"]), onPress: self.handleSortStart };
            const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
            intl = intl5.intl;
            return authStore3(HeaderActionButton, obj);
          };
        }
      }
      stringResult = undefined;
      if (null != sortingType) {
        let intl = require("intl").intl;
        stringResult = intl.string(require("intl").t.OGiMXJ);
      }
      setOptions(obj);
    }
  }
  render() {
    let channels;
    let items1;
    let items2;
    let order;
    let sortingType;
    const self = this;
    const props = this.props;
    ({ channels, order, sortingType } = props);
    const hovering = this.state.hovering;
    let index;
    const items = [];
    const guild = props.guild;
    const tmp2 = closure_18(this.context);
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
        const arr = obj2[channel.id];
        const item = arr.forEach((channel) => {
          channel = channel.channel;
          const tmp = null == sortingType || sortingType.has(channel.type);
          if (tmp) {
            index = index + 1;
            const data = obj2.data;
            obj2 = { key: channel.id, channel, sortingType, isHovered: hovering === channel.id, index };
            data.push(obj2);
          }
        });
        items.push(obj2);
      });
    }
    const obj3 = { sections: items, sortingEnabled: null != sortingType, renderSectionHeader: self.renderSectionHeader, renderItem: self.renderItem, onRowMoved: self.handleDrop, order: items1, onHoverChange: null, renderActiveDivider: null, contentContainerStyle: self.props.contentContainerStyle, fontScale: self.props.fontScale };
    items1 = [closure_15];
    const obj = { style: tmp2.containerView, children: items2 };
    const tmp8 = sortingType(items[35]);
    HermesBuiltin.arraySpread(items1, order, 1);
    ({ handleHoverChange: obj2.onHoverChange, renderActiveDivider: obj2.renderActiveDivider } = self);
    items2 = [closure_16(tmp8, obj3), , ];
    let tmp6Result = null == sortingType;
    const tmp7 = items;
    if (tmp6Result) {
      const obj5 = { guild };
      tmp6Result = closure_16(closure_22, obj5);
    }
    items2[1] = tmp6Result;
    items2[2] = closure_16(channels(tmp7[36]).NavScrim, {});
    return closure_17(closure_5, obj);
  }
  handleChannelPress(id) {
    const obj = ChannelSettingsActionCreators;
    obj.open(id);
  }
}
const prototype3 = GuildSettingsModalChannels.prototype;
GuildSettingsModalChannels.contextType = native2.ThemeContext;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let contentContainerStyle;
  let first;
  let onDone;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp25;
  let tmp26;
  let tmp7;
  let tmp9;
  const obj = guildId(576);
  const cResult = obj.c(28);
  guildId = guildId.guildId;
  ({ contentContainerStyle, onDone } = guildId);
  const obj2 = guildId(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildSettingsModalChannelsStore];
    const fn2 = function v() {
      return GuildSettingsModalChannelsStore.channels;
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult7 = guildId(504);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp9, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    const fn3 = function f() {
      currentUser = currentUser.getCurrentUser();
      _modDef38(null != currentUser, "GuildSettingsModalChannelsConnected: currentUser cannot be undefined");
      return currentUser;
    };
    cResult[5] = items2;
    cResult[6] = fn3;
    tmp14 = fn3;
    tmp13 = items2;
  } else {
    tmp13 = cResult[5];
    tmp14 = cResult[6];
  }
  const tmpResult8 = guildId(504);
  const stateFromStores2 = tmpResult8.useStateFromStores(tmp13, tmp14);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [GuildSettingsModalChannelsStore];
    class L {
      constructor() {
        return GuildSettingsModalChannelsStore.channelList;
      }
    }
    cResult[7] = items3;
    cResult[8] = L;
    tmp18 = L;
    tmp17 = items3;
  } else {
    tmp17 = cResult[7];
    tmp18 = cResult[8];
  }
  const tmpResult9 = guildId(504);
  const stateFromStores3 = tmpResult9.useStateFromStores(tmp17, tmp18);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildSettingsModalChannelsStore];
    class R {
      constructor() {
        return GuildSettingsModalChannelsStore.order;
      }
    }
    cResult[9] = R;
    cResult[10] = items4;
    tmp22 = items4;
    tmp21 = R;
  } else {
    tmp21 = cResult[9];
    tmp22 = cResult[10];
  }
  const tmpResult10 = guildId(504);
  const stateFromStores4 = tmpResult10.useStateFromStores(tmp22, tmp21);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [GuildSettingsModalChannelsStore];
    class P {
      constructor() {
        return GuildSettingsModalChannelsStore.sortingType;
      }
    }
    cResult[11] = items5;
    cResult[12] = P;
    tmp26 = P;
    tmp25 = items5;
  } else {
    tmp25 = cResult[11];
    tmp26 = cResult[12];
  }
  const tmpResult11 = guildId(504);
  const stateFromStores5 = tmpResult11.useStateFromStores(tmp25, tmp26);
  const tmp29 = useSafeAreaInsetsDefault();
  if (cResult[13] === contentContainerStyle) {
    if (cResult[14] === tmp29.bottom) {
      let tmp30;
      if (cResult[15] === stateFromStores5) {
        tmp30 = cResult[16];
      }
      const tmpResult12 = guildId(5602);
      const fontScale = tmpResult12.useFontScale();
      class P {
        constructor() {
          return GuildSettingsModalChannelsStore.sortingType;
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
                                  let tmp34;
                                  if (cResult[26] === stateFromStores5) {
                                    tmp34 = cResult[27];
                                  }
                                  tmp33 = tmp34;
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
                    return GuildSettingsModalChannelsStore.sortingType;
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
                tmp34 = tmp38;
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
    const obj3 = { paddingBottom: tmp29.bottom + 32 + 44 };
    class P {
      constructor() {
        return GuildSettingsModalChannelsStore.sortingType;
      }
    }
    items6[1] = obj3;
    tmp31 = items6;
  }
  cResult[13] = contentContainerStyle;
  cResult[14] = tmp29.bottom;
  cResult[15] = stateFromStores5;
  cResult[16] = tmp31;
  tmp30 = tmp31;
}) : ((onDone) => {
  let bottom;
  let contentContainerStyle;
  let require;
  ({ guildId: require, contentContainerStyle } = onDone);
  onDone = onDone.onDone;
  let obj = useNavigation;
  navigation = obj.useNavigation();
  let items = [GuildStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(_require));
  const items1 = [GuildSettingsModalChannelsStore];
  const obj3 = get_initialized;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => GuildSettingsModalChannelsStore.channels);
  const items2 = [UserStore];
  const obj4 = get_initialized;
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    contentContainerStyle(bottom[47])(null != currentUser, "GuildSettingsModalChannelsConnected: currentUser cannot be undefined");
    return currentUser;
  });
  const items3 = [GuildSettingsModalChannelsStore];
  const obj5 = get_initialized;
  const stateFromStores3 = obj5.useStateFromStores(items3, () => GuildSettingsModalChannelsStore.channelList);
  const items4 = [GuildSettingsModalChannelsStore];
  const obj6 = get_initialized;
  const stateFromStores4 = obj6.useStateFromStores(items4, () => GuildSettingsModalChannelsStore.order);
  const items5 = [GuildSettingsModalChannelsStore];
  const obj7 = get_initialized;
  const stateFromStores5 = obj7.useStateFromStores(items5, () => GuildSettingsModalChannelsStore.sortingType);
  const tmp8 = contentContainerStyle(1618)();
  dependencyMap = tmp8;
  const items6 = [contentContainerStyle, tmp8.bottom, stateFromStores5];
  const memo = react.useMemo(() => {
    let tmp;
    if (null == stateFromStores5) {
      const items = [contentContainerStyle, ];
      const obj = { paddingBottom: bottom.bottom + 32 + 44 };
      items[1] = obj;
      tmp = items;
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
            const obj8 = { navigation, guild: stateFromStores, channels: stateFromStores1, user: stateFromStores2, channelList: stateFromStores3, order: stateFromStores4, sortingType: stateFromStores5, contentContainerStyle: memo, fontScale: tmp11, onDone };
            tmp12 = closure_16(GuildSettingsModalChannels, obj8);
          }
        }
      }
    }
  }
  return tmp12;
});
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalChannels.tsx");

export default tmp13;