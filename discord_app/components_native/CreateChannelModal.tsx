// discord_app/components_native/CreateChannelModal.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import c from "../../_runtime/00576_c.js";
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import util from "../intl/index.native.tsx";
import native from "../design/void/native.tsx";
import discord_common_AnalyticsUtils from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import HelpdeskUtilsDefault from "../utils/HelpdeskUtils.tsx";
import useA11yRolesNative from "../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text_Text from "../design/components/Text/native/Text.tsx";
import ChannelUtils from "../utils/ChannelUtils.tsx";
import useInitialValueDefault from "../hooks/useInitialValue.tsx";
import TableRow from "../design/components/TableRow/native/TableRow.native.tsx";
import NavigatorHeader from "../design/components/Navigator/native/NavigatorHeader.native.tsx";
import FormRadio from "../design/components/Forms/native/FormRadio.native.tsx";
import HeaderActionButton from "../design/components/Navigator/native/HeaderActionButton.native.tsx";
import Form from "../design/void/Form/native/index.tsx";
import useCreateChannelSubmitDefault from "../modules/channel/useCreateChannelSubmit.tsx";
import CreateChannelModalActionCreatorsDefault from "../actions/native/CreateChannelModalActionCreators.tsx";
import sanitizeChannelNameDefault from "../modules/channel/sanitizeChannelName.tsx";
import AddModeratorsDefault from "../modules/stage_channels/native/create_channel/AddModerators.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import noop from "../../_runtime/metro/00019__.js";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import PermissionStore from "../stores/PermissionStore.tsx";
import RelationshipStore from "../stores/RelationshipStore.tsx";
import UserStore from "../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function getChannelTypeLabel(channelType) {
  if (ChannelTypes.GUILD_TEXT === channelType) {
    const obj2 = { label: null, description: null };
    const intl14 = util.intl;
    obj2.label = intl14.string(util.t.pnuRXC);
    const intl15 = util.intl;
    obj2.description = intl15.string(util.t.oG6WsM);
    return obj2;
  } else if (ChannelTypes.GUILD_VOICE === channelType) {
    const obj3 = { label: null, description: null };
    const intl12 = util.intl;
    obj3.label = intl12.string(util.t.Sx55Oh);
    const intl13 = util.intl;
    obj3.description = intl13.string(util.t.pqfkoF);
    return obj3;
  } else if (ChannelTypes.GUILD_FORUM === channelType) {
    obj4 = { label: null, description: null };
    const intl10 = util.intl;
    obj4.label = intl10.string(util.t.eAVID5);
    const intl11 = util.intl;
    obj4.description = intl11.string(util.t.iZ5pgg);
    return obj4;
  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === channelType) {
    const obj5 = { label: null, description: null };
    const intl8 = util.intl;
    obj5.label = intl8.string(util.t.qr9dEP);
    const intl9 = util.intl;
    obj5.description = intl9.string(util.t.gBkfzu);
    return obj5;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === channelType) {
    const obj7 = { label: null, description: null };
    const intl6 = util.intl;
    obj7.label = intl6.string(util.t.pNWst0);
    const intl7 = util.intl;
    obj7.description = intl7.string(util.t.VPAwgo);
    return obj7;
  } else if (ChannelTypes.GUILD_APP === channelType) {
    const obj8 = { label: null, description: null };
    const intl4 = util.intl;
    obj8.label = intl4.string(util.t["A+8d6M"]);
    const intl5 = util.intl;
    obj8.description = intl5.string(util.t.LVQQ3Z);
    return obj8;
  } else if (ChannelTypes.GUILD_MEDIA === channelType) {
    const obj = { label: null, description: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["6x6fVg"]);
    const obj9 = { children: null };
    const obj10 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj10.children = intl2.string(util.t.JyCrwS);
    const items = [constants2(Text_Text.Text, obj10)];
    const obj11 = { variant: "text-xs/normal", children: null };
    const intl3 = util.intl;
    obj12 = { hcArticleUrl: HelpdeskUtilsDefault.getCreatorSupportArticleURL(constants3.MEDIA_CHANNEL) };
    obj11.children = intl3.format(util.t["2Sapx1"], obj12);
    items[1] = constants2(Text_Text.Text, obj11);
    obj9.children = items;
    obj.description = closure_1_22(guild, obj9);
    return obj;
  }
}
function getSceneTitle(first1, stateFromStores1) {
  if (null != stateFromStores1) {
    const intl3 = util.intl;
    return intl3.string(util.t.dEaPc4);
  } else {
    if (null !== first1) {
      if (ChannelTypes.GUILD_TEXT !== first1) {
        if (ChannelTypes.GUILD_VOICE !== first1) {
          if (ChannelTypes.GUILD_STAGE_VOICE !== first1) {
            if (ChannelTypes.GUILD_ANNOUNCEMENT !== first1) {
              if (ChannelTypes.GUILD_FORUM !== first1) {
                if (ChannelTypes.GUILD_MEDIA !== first1) {
                  if (ChannelTypes.GUILD_APP !== first1) {
                    if (ChannelTypes.GUILD_CATEGORY === first1) {
                      const intl = util.intl;
                      return intl.string(util.t["ISN+NM"]);
                    } else {
                      const _Error = Error;
                      const _HermesInternal = HermesInternal;
                      const error = new Error("Unsupported channelType: " + first1);
                      throw error;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const intl2 = util.intl;
    return intl2.string(util.t["fUYU+j"]);
  }
}
function getScreens() {
  const obj = {};
  const obj2 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.CHANNEL_ADD_INFO,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW },
    render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_20(closure_1_28, {});
    },
  };
  obj[constants4.CREATE_CHANNEL] = obj2;
  obj4 = { headerTitle: null, impressionName: null, impressionProperties: null, render: null };
  const intl = util.intl;
  obj4.headerTitle = intl.string(util.t.dMJ3Y6);
  obj4.impressionName = discord_common_AnalyticsUtils.ImpressionNames.CHANNEL_ADD_MEMBERS;
  const obj3 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW };
  obj4.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW };
  obj4.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return closure_1_20(closure_1_29, {});
  };
  obj[constants4.ADD_MEMBERS] = obj4;
  const obj6 = { headerTitle: null, render: null };
  const intl2 = util.intl;
  obj6.headerTitle = intl2.string(util.t.n3bcy8);
  obj6.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return closure_1_20(AddModeratorsDefault, {});
  };
  obj[constants4.ADD_MODERATORS] = obj6;
  return obj;
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const isGuildVocalChannelType = fn(2069).isGuildVocalChannelType;
let isGuildOwner = fn(2083).isGuildOwner;
const Constants = fn(1085);
const ChannelTypes = Constants.ChannelTypes;
({
  GuildFeatures: closure_15,
  Permissions: closure_16,
  AnalyticEvents: closure_17,
  HelpdeskArticles: closure_18,
} = Constants);
const RowType = fn(7489).RowType;
const jsxProd = fn(21);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  addMembersContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
  errorMessage: { marginBottom: 0 },
  flexRow: { flexDirection: "row", alignItems: "center" },
  horizontalContainer: { flex: 1, flexDirection: "row" },
};
let closure_23 = createStyles.createStyles(obj2);
let obj4 = {};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj4[ChannelTypes.GUILD_TEXT] = { IconComponent: fn(8207).TextIcon };
let obj5 = { IconComponent: fn(8207).TextIcon };
obj4[ChannelTypes.GUILD_FORUM] = { IconComponent: fn(8215).ForumIcon };
let obj6 = { IconComponent: fn(8215).ForumIcon };
obj4[ChannelTypes.GUILD_VOICE] = { IconComponent: fn(8228).VoiceNormalIcon };
let obj7 = { IconComponent: fn(8228).VoiceNormalIcon };
obj4[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: fn(8224).StageIcon };
let obj8 = { IconComponent: fn(8224).StageIcon };
obj4[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: fn(8221).AnnouncementsIcon };
let obj9 = { IconComponent: fn(8221).AnnouncementsIcon };
obj4[ChannelTypes.GUILD_MEDIA] = { IconComponent: fn(8214).ImageIcon };
let obj10 = { IconComponent: fn(8214).ImageIcon };
obj4[ChannelTypes.GUILD_APP] = { IconComponent: fn(8233).AppsIcon };
let obj12 = {};
let obj11 = { IconComponent: fn(8233).AppsIcon };
obj12[ChannelTypes.GUILD_TEXT] = { IconComponent: fn(8205).TextLockIcon };
let obj13 = { IconComponent: fn(8205).TextLockIcon };
obj12[ChannelTypes.GUILD_FORUM] = { IconComponent: fn(8213).ForumLockIcon };
let obj14 = { IconComponent: fn(8213).ForumLockIcon };
obj12[ChannelTypes.GUILD_VOICE] = { IconComponent: fn(8225).VoiceLockIcon };
let obj15 = { IconComponent: fn(8225).VoiceLockIcon };
obj12[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: fn(8223).StageLockIcon };
let obj16 = { IconComponent: fn(8223).StageLockIcon };
obj12[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: fn(8220).AnnouncementsLockIcon };
let obj17 = { IconComponent: fn(8220).AnnouncementsLockIcon };
obj12[ChannelTypes.GUILD_MEDIA] = { IconComponent: fn(8212).ImageLockIcon };
let obj18 = { IconComponent: fn(8212).ImageLockIcon };
obj12[ChannelTypes.GUILD_APP] = { IconComponent: fn(8232).AppsLockIcon };
let ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelTypeRow(selected) {
      const cResult = c.c(27);
      selected = selected.selected;
      const channelType = selected.channelType;
      ({ isBeta, onPress } = selected);
      const tmp4 = closure_23();
      if (cResult[0] !== selected) {
        const obj2 = { selected };
        cResult[0] = selected;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp5);
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      const IconComponent = selected.isPrivate ? obj12 : obj4[channelType].IconComponent;
      if (cResult[2] !== channelType) {
        const tmp9 = getChannelTypeLabel(channelType);
        cResult[2] = channelType;
        cResult[3] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      ({ label, description } = tmp7);
      if (cResult[4] === channelType) {
        if (cResult[5] === onPress) {
          if (cResult[6] === selected) {
            let tmp10 = cResult[7];
          }
          if (cResult[8] !== IconComponent) {
            const tmp13 = constants2(IconComponent, {});
            cResult[8] = IconComponent;
            cResult[9] = tmp13;
            let tmp11 = tmp13;
          } else {
            tmp11 = cResult[9];
          }
          if (cResult[10] === tmp4.flexRow) {
            if (cResult[11] === tmp11) {
              let tmp14 = cResult[12];
            }
            if (cResult[13] !== selected) {
              const obj3 = { selected };
              const tmp20 = constants2(FormRadio.FormRadio, obj3);
              cResult[13] = selected;
              cResult[14] = tmp20;
              let tmp18 = tmp20;
            } else {
              tmp18 = cResult[14];
            }
            if (cResult[15] === isBeta) {
              if (cResult[16] === label) {
                if (cResult[17] === tmp4.horizontalContainer) {
                  let tmp21 = cResult[18];
                }
                if (cResult[19] === accessibilityRole) {
                  if (cResult[20] === accessibilityState) {
                    if (cResult[21] === description) {
                      if (cResult[22] === tmp10) {
                        if (cResult[23] === tmp14) {
                          if (cResult[24] === tmp18) {
                            if (cResult[25] === tmp21) {
                              let tmp23 = cResult[26];
                            }
                            return tmp23;
                          }
                        }
                      }
                    }
                  }
                }
                obj4 = {
                  onPress: tmp10,
                  accessibilityRole,
                  accessibilityState,
                  icon: tmp14,
                  trailing: tmp18,
                  label: tmp21,
                  subLabel: description,
                };
                cResult[19] = accessibilityRole;
                cResult[20] = accessibilityState;
                cResult[21] = description;
                cResult[22] = tmp10;
                cResult[23] = tmp14;
                cResult[24] = tmp18;
                cResult[25] = tmp21;
                class L {
                  constructor() {
                    if (!selected) {
                      tmp = onPress;
                      tmp2 = channelType;
                      tmp3 = onPress(channelType);
                    }
                    return;
                  }
                }
                tmp23 = constants2(TableRow.TableRow, obj4);
                const tmp25 = constants2(TableRow.TableRow, obj4);
              }
            }
            let tmp22 = label;
            if (true === isBeta) {
              const obj5 = { style: tmp4.horizontalContainer, children: null };
              const obj6 = { text: label };
              const items = [constants2(Form.FormLabel, obj6)];
              const obj7 = { size: native.BetaSizes.SMALL };
              items[1] = constants2(native.BetaTag, obj7);
              obj5.children = items;
              tmp22 = closure_1_22(timestampProducer, obj5);
            }
            cResult[15] = isBeta;
            cResult[16] = label;
            cResult[17] = tmp4.horizontalContainer;
            cResult[18] = tmp22;
            tmp21 = tmp22;
          }
          const obj8 = { style: tmp4.flexRow, children: tmp11 };
          const tmp17 = constants2(timestampProducer, obj8);
          cResult[10] = tmp4.flexRow;
          cResult[11] = tmp11;
          cResult[12] = tmp17;
          tmp14 = tmp17;
        }
      }
      class L {
        constructor() {
          if (!selected) {
            tmp = onPress;
            tmp2 = channelType;
            tmp3 = onPress(channelType);
          }
          return;
        }
      }
      cResult[4] = channelType;
      cResult[5] = onPress;
      cResult[6] = selected;
      cResult[7] = L;
      tmp10 = L;
      const tmpResult = useA11yRolesNative;
    }
  : function ChannelTypeRow(selected) {
      selected = selected.selected;
      const channelType = selected.channelType;
      const onPress = selected.onPress;
      ({ isPrivate, isBeta } = selected);
      const tmp = closure_23();
      const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      const tmp5 = getChannelTypeLabel(channelType);
      const label = tmp5.label;
      const obj2 = {
        onPress() {
          if (!selected) {
            onPress(channelType);
          }
        },
        accessibilityRole,
        accessibilityState,
        icon: null,
        trailing: null,
        label: null,
        subLabel: null,
      };
      obj2.icon = constants2(timestampProducer, {
        style: tmp.flexRow,
        children: constants2(isPrivate ? obj12 : obj4[channelType].IconComponent, {}),
      });
      obj2.trailing = constants2(FormRadio.FormRadio, { selected });
      let tmp8 = label;
      if (true === isBeta) {
        obj4 = { style: tmp.horizontalContainer, children: null };
        const obj5 = { text: label };
        const items = [constants2(Form.FormLabel, obj5)];
        const obj6 = { size: native.BetaSizes.SMALL };
        items[1] = constants2(native.BetaTag, obj6);
        obj4.children = items;
        tmp8 = closure_1_22(timestampProducer, obj4);
      }
      obj2.label = tmp8;
      obj2.subLabel = tmp5.description;
      return constants2(TableRow.TableRow, obj2);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CreateChannel(categoryId) {
      const cResult = categoryId(createMode[33]).c(83);
      categoryId = categoryId.categoryId;
      ({ channelType, cloneChannelId } = categoryId);
      createMode = categoryId.createMode;
      const guildId = categoryId.guildId;
      const onChannelCreated = categoryId.onChannelCreated;
      closure_23();
      const insets = cloneChannelId(createMode[39])().insets;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [first2];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function _() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      let obj = categoryId(createMode[33]);
      const stateFromStores = categoryId(createMode[40]).useStateFromStores(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[3] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== cloneChannelId) {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
        cResult[4] = cloneChannelId;
        cResult[5] = H;
      } else {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
      }
      let tmpResult = categoryId(createMode[40]);
      const stateFromStores1 = categoryId(createMode[40]).useStateFromStores(tmp10, H);
      if (cResult[6] !== stateFromStores) {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
        let hasItem = null != stateFromStores;
        if (hasItem) {
          class H {
            constructor() {
              channel = null;
              if (null != cloneChannelId) {
                tmp3 = closure_9;
                channel = closure_9.getChannel(tmp);
              }
              return channel;
            }
          }
          hasItem = obj4.has(constants.COMMUNITY);
        }
        cResult[6] = stateFromStores;
        cResult[7] = hasItem;
      } else {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
      }
      const canResult = PermissionStore.can(first5.VIEW_CHANNEL, stateFromStores);
      closure_6 = canResult;
      const canResult1 = PermissionStore.can(first5.CONNECT, stateFromStores);
      const currentUser = navigation.getCurrentUser();
      cloneChannelId(createMode[41])(null != currentUser, "CreateChannel: user cannot be undefined");
      const tmp21 = cloneChannelId(createMode[42])(stateFromStores1);
      if (tmp21 == null) {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
      }
      const tmp23 = guildId(onChannelCreated.useState(tmp21), 2);
      const first1 = tmp23[0];
      ChannelStore = tmp23[1];
      if (null == channelType) {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
        channelType = first4.GUILD_TEXT;
      }
      const tmp22Result = guildId(onChannelCreated.useState(channelType), 2);
      first2 = tmp22Result[0];
      PermissionStore = tmp22Result[1];
      const tmpResult5 = categoryId(createMode[40]);
      const canCreateStageChannelByGuild = categoryId(createMode[43]).useCanCreateStageChannelByGuild(guildId);
      const tmpResult6 = categoryId(createMode[43]);
      const guildEligibleForMediaChannels = categoryId(createMode[44]).useGuildEligibleForMediaChannels(
        stateFromStores,
      );
      if (cResult[8] !== guildId) {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
        tmp30[0] = guildId;
        cResult[8] = guildId;
        cResult[9] = tmp30;
      } else {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
      }
      const tmpResult7 = categoryId(createMode[44]);
      const enabled = cloneChannelId(createMode[45]).useConfig(tmp30).enabled;
      if (stateFromStores1 != null) {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
      }
      if (undefined == null) {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
      }
      const tmp5Result = cloneChannelId(createMode[45]);
      const first3 = guildId(onChannelCreated.useState(undefined), 2)[0];
      const tmp22Result4 = guildId(onChannelCreated.useState(undefined), 2);
      navigation = categoryId(createMode[46]).useNavigation();
      const tmp22Result5 = guildId(cloneChannelId(createMode[47])(onChannelCreated), 3);
      first4 = tmp22Result5[0];
      constants = tmp37;
      const tmp22Result6 = guildId(onChannelCreated.useState(false), 2);
      first5 = tmp22Result6[0];
      closure_17 = tmp22Result6[1];
      if (first5) {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
        let privateChannelHintText = null;
        if (!obj10.canCreatePrivateChannel(first2, canResult, canResult1)) {
          class H {
            constructor() {
              channel = null;
              if (null != cloneChannelId) {
                tmp3 = closure_9;
                channel = closure_9.getChannel(tmp);
              }
              return channel;
            }
          }
          privateChannelHintText = obj11.getPrivateChannelHintText(first2);
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
        const items2 = [];
        cResult[10] = tmp43;
        cResult[11] = items2;
        let tmp42 = items2;
      } else {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
        tmp42 = cResult[11];
      }
      const effect = obj5.useEffect(tmp43, tmp42);
      if (cResult[12] === first3) {
        class H {
          constructor() {
            channel = null;
            if (null != cloneChannelId) {
              tmp3 = closure_9;
              channel = closure_9.getChannel(tmp);
            }
            return channel;
          }
        }
      }
      function ce() {
        let obj = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(CreateChannelModalActionCreatorsDefault.close),
          headerRight() {
            if (constants) {
              let tmpResult = closure_2_20(categoryId(createMode[50]).HeaderSubmittingIndicator, {});
            } else {
              let tmp5 = first5;
              if (!first5) {
                if (first2 !== first4.GUILD_STAGE_VOICE) {
                  const intl = categoryId(createMode[29]).intl;
                  let stringResult = intl.string(categoryId(createMode[29]).t.CumH4u);
                }
                let obj = { text: stringResult, disabled: null, onPress: null };
                let tmp18 = "" === first1;
                if (!tmp18) {
                  if (tmp5) {
                    tmp5 = !categoryId(createMode[48]).canCreatePrivateChannel(first2, closure_1_6, canResult1);
                    let obj2 = categoryId(createMode[48]);
                  }
                  tmp18 = tmp5;
                }
                if (!tmp18) {
                  let tmp26 = first2 === first4.GUILD_APP;
                  if (tmp26) {
                    tmp26 = null == first3;
                  }
                  tmp18 = tmp26;
                }
                obj.disabled = tmp18;
                obj.onPress = function onPress() {
                  if (null != closure_1_5) {
                    let items = cloneChannelId(dependencyMap[53]).values(closure_1_5.permissionOverwrites);
                    const obj = cloneChannelId(dependencyMap[53]);
                  } else {
                    items = [];
                  }
                  const obj2 = {
                    overwrites: items,
                    bitrate: null,
                    userLimit: null,
                    createMode: null,
                    guildId: null,
                    name: null,
                    channelType: null,
                    categoryId: null,
                    applicationId: null,
                    onChannelCreated: null,
                  };
                  let bitrate;
                  if (closure_1_5 != null) {
                    bitrate = closure_1_5.bitrate;
                  }
                  obj2.bitrate = bitrate;
                  let userLimit;
                  if (closure_1_5 != null) {
                    userLimit = closure_1_5.userLimit;
                  }
                  obj2.userLimit = userLimit;
                  obj2.createMode = createMode;
                  obj2.guildId = guildId;
                  obj2.name = name;
                  obj2.channelType = channelType;
                  obj2.categoryId = categoryId;
                  obj2.applicationId = applicationId;
                  obj2.onChannelCreated = onChannelCreated;
                  if (closure_1_16) {
                    const obj3 = {
                      guildId: tmp6,
                      channelType,
                      name: tmp7,
                      categoryId: tmp9,
                      applicationId: tmp10,
                      onChannelCreated: tmp11,
                    };
                    closure_1_13.push(constants2.ADD_MEMBERS, obj3);
                  } else if (channelType === constants.GUILD_STAGE_VOICE) {
                    closure_1_13.push(constants2.ADD_MODERATORS, obj2);
                  } else {
                    closure_1_15(obj2);
                  }
                };
                tmpResult = closure_2_20(tmp4, obj);
              }
              const intl2 = categoryId(createMode[29]).intl;
              stringResult = intl2.string(categoryId(createMode[29]).t.PDTjLN);
            }
            return tmpResult;
          },
          headerTitle: getSceneTitle(first2, stateFromStores1),
        };
        navigation.setOptions(obj);
      }
      const items3 = [
        navigation,
        first2,
        stateFromStores1,
        canResult,
        canResult1,
        first5,
        first1,
        first4,
        guildId,
        tmp22Result5[2],
        categoryId,
        createMode,
        onChannelCreated,
        first3,
      ];
      cResult[12] = first3;
      cResult[13] = canResult1;
      cResult[14] = canResult;
      cResult[15] = categoryId;
      cResult[16] = first2;
      cResult[17] = stateFromStores1;
      cResult[18] = tmp22Result5[2];
      cResult[19] = createMode;
      cResult[20] = guildId;
      cResult[21] = first5;
      cResult[22] = first1;
      cResult[23] = navigation;
      cResult[24] = onChannelCreated;
      cResult[25] = first4;
      cResult[26] = items3;
      cResult[27] = ce;
      const tmpResult8 = categoryId(createMode[46]);
    }
  : function CreateChannel(categoryId) {
      categoryId = categoryId.categoryId;
      ({ channelType, cloneChannelId: importDefault, createMode } = categoryId);
      const guildId = categoryId.guildId;
      const onChannelCreated = categoryId.onChannelCreated;
      c6 = undefined;
      let canResult1;
      value = undefined;
      closure_9 = undefined;
      let first1;
      PermissionStore = undefined;
      let first2;
      let navigation;
      let first3;
      constants = undefined;
      let first4;
      closure_17 = undefined;
      const tmp = closure_23();
      let items = [first1];
      const stateFromStores = categoryId(createMode[40]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let obj = categoryId(createMode[40]);
      const items1 = [closure_9];
      const stateFromStores1 = categoryId(createMode[40]).useStateFromStores(items1, () => {
        let channel = null;
        if (null != importDefault) {
          channel = ChannelStore.getChannel(tmp);
        }
        return channel;
      });
      let hasItem = null != stateFromStores;
      if (hasItem) {
        const features = stateFromStores.features;
        hasItem = features.has(constants.COMMUNITY);
      }
      const canResult = PermissionStore.can(first4.VIEW_CHANNEL, stateFromStores);
      c6 = canResult;
      canResult1 = PermissionStore.can(first4.CONNECT, stateFromStores);
      const currentUser = navigation.getCurrentUser();
      require("../../_runtime/metro/00038__.js")(null != currentUser, "CreateChannel: user cannot be undefined");
      let str = require("useChannelName")(stateFromStores1);
      if (str == null) {
        str = "";
      }
      const tmp15 = guildId(onChannelCreated.useState(str), 2);
      value = tmp15[0];
      closure_9 = tmp15[1];
      if (null == channelType) {
        channelType = first3.GUILD_TEXT;
      }
      const tmp14Result = guildId(onChannelCreated.useState(channelType), 2);
      first1 = tmp14Result[0];
      PermissionStore = tmp14Result[1];
      let obj2 = categoryId(createMode[40]);
      const canCreateStageChannelByGuild = categoryId(createMode[43]).useCanCreateStageChannelByGuild(guildId);
      const tmp4Result = categoryId(createMode[43]);
      const guildEligibleForMediaChannels = categoryId(createMode[44]).useGuildEligibleForMediaChannels(
        stateFromStores,
      );
      const tmp4Result6 = categoryId(createMode[44]);
      let application_id;
      if (stateFromStores1 != null) {
        application_id = stateFromStores1.application_id;
      }
      if (application_id == null) {
        application_id = null;
      }
      const tmp14Result4 = guildId(onChannelCreated.useState(application_id), 2);
      first2 = tmp14Result4[0];
      const tmp2Result = require("AppChannelExperiment");
      navigation = categoryId(createMode[46]).useNavigation();
      const tmp14Result5 = guildId(require("useCreateChannelSubmit")(onChannelCreated), 3);
      first3 = tmp14Result5[0];
      constants = tmp29;
      const tmp14Result6 = guildId(onChannelCreated.useState(false), 2);
      first4 = tmp14Result6[0];
      closure_17 = tmp14Result6[1];
      let privateChannelHintText = null;
      if (first4) {
        privateChannelHintText = null;
        if (!tmp4Result8.canCreatePrivateChannel(first1, canResult, canResult1)) {
          privateChannelHintText = tmp4(createMode[48]).getPrivateChannelHintText(first1);
          const tmp4Result9 = tmp4(createMode[48]);
        }
        tmp4Result8 = tmp4(createMode[48]);
      }
      const effect = obj3.useEffect(() => {
        require("AppAnalyticsUtils").trackWithMetadata(closure_17.OPEN_MODAL, { type: "Create Channel" });
      }, []);
      const items2 = [
        navigation,
        first1,
        stateFromStores1,
        canResult,
        canResult1,
        first4,
        value,
        first3,
        guildId,
        tmp14Result5[2],
        categoryId,
        createMode,
        onChannelCreated,
        first2,
      ];
      const effect1 = obj3.useEffect(() => {
        let obj = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(CreateChannelModalActionCreatorsDefault.close),
          headerRight() {
            if (constants) {
              let tmpResult = closure_2_20(categoryId(createMode[50]).HeaderSubmittingIndicator, {});
            } else {
              let tmp5 = first4;
              if (!first4) {
                if (first1 !== first3.GUILD_STAGE_VOICE) {
                  const intl = categoryId(createMode[29]).intl;
                  let stringResult = intl.string(categoryId(createMode[29]).t.CumH4u);
                }
                let obj = { text: stringResult, disabled: null, onPress: null };
                let tmp18 = "" === closure_1_8;
                if (!tmp18) {
                  if (tmp5) {
                    tmp5 = !categoryId(createMode[48]).canCreatePrivateChannel(first1, closure_1_6, canResult1);
                    let obj2 = categoryId(createMode[48]);
                  }
                  tmp18 = tmp5;
                }
                if (!tmp18) {
                  let tmp26 = first1 === first3.GUILD_APP;
                  if (tmp26) {
                    tmp26 = null == first2;
                  }
                  tmp18 = tmp26;
                }
                obj.disabled = tmp18;
                obj.onPress = function onPress() {
                  if (null != closure_1_5) {
                    let items = closure_2_1(dependencyMap[53]).values(closure_1_5.permissionOverwrites);
                    const obj = closure_2_1(dependencyMap[53]);
                  } else {
                    items = [];
                  }
                  const obj2 = {
                    overwrites: items,
                    bitrate: null,
                    userLimit: null,
                    createMode: null,
                    guildId: null,
                    name: null,
                    channelType: null,
                    categoryId: null,
                    applicationId: null,
                    onChannelCreated: null,
                  };
                  let bitrate;
                  if (closure_1_5 != null) {
                    bitrate = closure_1_5.bitrate;
                  }
                  obj2.bitrate = bitrate;
                  let userLimit;
                  if (closure_1_5 != null) {
                    userLimit = closure_1_5.userLimit;
                  }
                  obj2.userLimit = userLimit;
                  obj2.createMode = createMode;
                  obj2.guildId = guildId;
                  obj2.name = name;
                  obj2.channelType = channelType;
                  obj2.categoryId = categoryId;
                  obj2.applicationId = applicationId;
                  obj2.onChannelCreated = onChannelCreated;
                  if (closure_1_16) {
                    const obj3 = {
                      guildId: tmp6,
                      channelType,
                      name: tmp7,
                      categoryId: tmp9,
                      applicationId: tmp10,
                      onChannelCreated: tmp11,
                    };
                    closure_1_13.push(constants2.ADD_MEMBERS, obj3);
                  } else if (channelType === constants.GUILD_STAGE_VOICE) {
                    closure_1_13.push(constants2.ADD_MODERATORS, obj2);
                  } else {
                    closure_1_15(obj2);
                  }
                };
                tmpResult = closure_2_20(tmp4, obj);
              }
              const intl2 = categoryId(createMode[29]).intl;
              stringResult = intl2.string(categoryId(createMode[29]).t.PDTjLN);
            }
            return tmpResult;
          },
          headerTitle: getSceneTitle(first1, stateFromStores1),
        };
        navigation.setOptions(obj);
      }, items2);
      obj4 = { keyboardShouldPersistTaps: "always", contentContainerStyle: null, children: null };
      const tmp4Result7 = categoryId(createMode[46]);
      obj4.contentContainerStyle = {
        padding: require("native").space.PX_16,
        paddingBottom: require("native").space.PX_16 + require("useSafeAreaInsetsKeyboardAware")().insets.bottom,
      };
      const obj6 = { spacing: require("native").space.PX_16, children: null };
      if (first1 === first3.GUILD_CATEGORY) {
        let intl2 = tmp4(createMode[29]).intl;
        let stringResult = intl2.string(tmp4(createMode[29]).t.OCAkGP);
      } else {
        let intl = tmp4(createMode[29]).intl;
        stringResult = intl.string(tmp4(createMode[29]).t.PVbHDl);
      }
      const obj7 = {
        label: stringResult,
        errorMessage: null,
        description: null,
        autoFocus: true,
        enableAndroidSanitizedInputWorkaround: true,
        value: null,
        onChange: null,
        placeholder: null,
      };
      const name = tmp28.name;
      let first5;
      if (name != null) {
        first5 = name[0];
      }
      obj7.errorMessage = first5;
      if (first1 === first3.GUILD_FORUM) {
        const intl4 = tmp4(createMode[29]).intl;
        let stringResult1 = intl4.string(tmp4(createMode[29]).t.qBvLY4);
      } else if (null != stateFromStores1) {
        const intl3 = tmp4(createMode[29]).intl;
        const obj8 = { name: null };
        const tmp4Result10 = tmp4(createMode[42]);
        obj8.name = tmp4Result10.computeChannelName(stateFromStores1, tmp11, first2, true);
        stringResult1 = intl3.format(tmp4(createMode[29]).t.s2ZzZZ, obj8);
      }
      obj7.description = stringResult1;
      obj7.value = value;
      obj7.onChange = function handleNameChange(arg0) {
        if (first !== arg0) {
          closure_9(sanitizeChannelNameDefault(arg0, first1));
        }
      };
      if (first1 === first3.GUILD_CATEGORY) {
        const intl7 = tmp4(createMode[29]).intl;
        let stringResult2 = intl7.string(tmp4(createMode[29]).t.eTVbtx);
      } else if (first1 === tmp38.GUILD_FORUM) {
        const intl6 = tmp4(createMode[29]).intl;
        stringResult2 = intl6.string(tmp4(createMode[29]).t["5z1Xat"]);
      } else {
        const intl5 = tmp4(createMode[29]).intl;
        stringResult2 = intl5.string(tmp4(createMode[29]).t["bw/b8E"]);
      }
      obj7.placeholder = stringResult2;
      const items3 = [closure_20(categoryId(createMode[55]).TextInput, obj7), ,];
      let tmp37Result4 = null;
      if (null == stateFromStores1) {
        let tmp37Result = null;
        if (first1 !== tmp38.GUILD_CATEGORY) {
          function handleTypeChange(arg0) {
            closure_11(arg0);
            closure_9(sanitizeChannelNameDefault(first, arg0));
          }
          const obj9 = { title: null, hasIcons: true, children: null };
          const intl12 = tmp4(createMode[29]).intl;
          obj9.title = intl12.string(tmp4(createMode[29]).t["7ZcXG2"]);
          const obj10 = {
            channelType: tmp38.GUILD_TEXT,
            selected: first1 === tmp38.GUILD_TEXT,
            isPrivate: first4,
            onPress: handleTypeChange,
          };
          const items4 = [closure_20(closure_27, obj10), , , , , ,];
          const obj11 = {
            channelType: tmp38.GUILD_VOICE,
            selected: first1 === tmp38.GUILD_VOICE,
            isPrivate: first4,
            onPress: handleTypeChange,
          };
          items4[1] = closure_20(closure_27, obj11);
          obj12 = {
            channelType: tmp38.GUILD_FORUM,
            selected: first1 === tmp38.GUILD_FORUM,
            isPrivate: first4,
            onPress: handleTypeChange,
          };
          items4[2] = closure_20(closure_27, obj12);
          let tmp35Result = null;
          if (guildEligibleForMediaChannels) {
            const obj13 = {
              channelType: tmp38.GUILD_MEDIA,
              selected: first1 === tmp38.GUILD_MEDIA,
              isPrivate: first4,
              isBeta: true,
              onPress: handleTypeChange,
            };
            tmp35Result = closure_20(closure_27, obj13);
          }
          items4[3] = tmp35Result;
          let tmp35Result7 = null;
          if (hasItem) {
            tmp35Result7 = null;
            if (createMode !== tmp4(createMode[47]).CreateChannelMode.PREMIUM_CHANNEL) {
              const obj14 = {
                channelType: tmp38.GUILD_ANNOUNCEMENT,
                selected: first1 === tmp38.GUILD_ANNOUNCEMENT,
                isPrivate: first4,
                onPress: handleTypeChange,
              };
              tmp35Result7 = closure_20(closure_27, obj14);
            }
          }
          items4[4] = tmp35Result7;
          let tmp35Result8 = null;
          if (canCreateStageChannelByGuild) {
            tmp35Result8 = null;
            if (!first4) {
              const obj15 = {
                channelType: tmp38.GUILD_STAGE_VOICE,
                selected: first1 === tmp38.GUILD_STAGE_VOICE,
                isPrivate: first4,
                onPress: handleTypeChange,
              };
              tmp35Result8 = closure_20(closure_27, obj15);
            }
          }
          items4[5] = tmp35Result8;
          let tmp35Result9 = null;
          if (tmp2Result.useConfig({ guildId, location: "CreateChannel mobile" }).enabled) {
            const obj16 = {
              channelType: tmp38.GUILD_APP,
              selected: first1 === tmp38.GUILD_APP,
              isPrivate: first4,
              onPress: handleTypeChange,
            };
            tmp35Result9 = closure_20(closure_27, obj16);
          }
          items4[6] = tmp35Result9;
          obj9.children = items4;
          tmp37Result = closure_22(tmp4(createMode[56]).TableRowGroup, obj9);
        }
        const items5 = [tmp37Result, , ,];
        let tmp35Result10 = null;
        if (first1 === tmp38.GUILD_APP) {
          const obj17 = { guildId, channelId: categoryId, selectedApplicationId: first2, onChange: tmp14Result4[1] };
          tmp35Result10 = closure_20(require("AppChannelApplicationSelector"), obj17);
        }
        items5[1] = tmp35Result10;
        const obj18 = { guildId, channelType: first1 };
        items5[2] = closure_20(require("CreateChannelTypeDescription"), obj18);
        let tmp37Result3 = null;
        if (first1 !== tmp38.GUILD_STAGE_VOICE) {
          tmp37Result3 = null;
          if (createMode !== tmp4(createMode[47]).CreateChannelMode.PREMIUM_CHANNEL) {
            if (first1 === tmp38.GUILD_CATEGORY) {
              const intl9 = tmp4(createMode[29]).intl;
              let stringResult3 = intl9.string(tmp4(createMode[29]).t.RQUk61);
            } else {
              const intl8 = tmp4(createMode[29]).intl;
              const string = intl8.string;
              const t = tmp4(createMode[29]).t;
              if (tmp57) {
                stringResult3 = string(t.cLjvKg);
              } else {
                stringResult3 = string(t.hfbjIH);
              }
              tmp57 = canResult1(first1);
            }
            const obj19 = { description: stringResult3, hasIcons: true, children: null };
            if (first1 === tmp38.GUILD_CATEGORY) {
              const intl11 = tmp4(createMode[29]).intl;
              let stringResult4 = intl11.string(tmp4(createMode[29]).t.lEPAZ5);
            } else {
              const intl10 = tmp4(createMode[29]).intl;
              stringResult4 = intl10.string(tmp4(createMode[29]).t.aUI70g);
            }
            const obj20 = {
              label: stringResult4,
              icon: closure_20(tmp4(createMode[60]).LockIcon, {}),
              value: first4,
              onValueChange: function handlePrivacyChange(arg0) {
                closure_17(arg0);
              },
            };
            obj19.children = closure_20(tmp4(createMode[59]).TableSwitchRow, obj20);
            const items6 = [closure_20(tmp4(createMode[56]).TableRowGroup, obj19)];
            let tmp35Result11 = null;
            if (null != privateChannelHintText) {
              const obj21 = { style: tmp.errorMessage, children: null };
              const obj22 = { type: "critical", message: privateChannelHintText, role: "status" };
              obj21.children = closure_20(tmp4(createMode[61]).InlineNotice, obj22);
              tmp35Result11 = closure_20(c6, obj21);
            }
            const obj23 = { children: null };
            items6[1] = tmp35Result11;
            obj23.children = items6;
            tmp37Result3 = closure_22(closure_21, obj23);
          }
        }
        const obj24 = { children: null };
        items5[3] = tmp37Result3;
        obj24.children = items5;
        tmp37Result4 = closure_22(closure_21, obj24);
      }
      items3[1] = tmp37Result4;
      let tmp35Result12 = null;
      if (null != tmp14Result5[1].message) {
        const obj25 = { style: tmp.errorMessage, children: null };
        const obj26 = { type: "critical", message: tmp28.message, role: "alert" };
        obj25.children = closure_20(tmp4(createMode[61]).InlineNotice, obj26);
        tmp35Result12 = closure_20(c6, obj25);
      }
      items3[2] = tmp35Result12;
      obj6.children = items3;
      obj4.children = closure_22(categoryId(createMode[62]).Stack, obj6);
      return closure_20(stateFromStores1, obj4);
    };
let closure_28 = tmp5;
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AddMembers(guildId) {
      _require = guildId;
      const cResult = require("c").c(31);
      let tmp4 = closure_23();
      _slicedToArray = navigation.useRef(guildId);
      let obj = require("c");
      navigation = require("useNavigation").useNavigation();
      if (cResult[0] !== guildId.guildId) {
        guild = GuildStore.getGuild(guildId.guildId);
        _modDef38(null != guild, "Guild must not be null");
        const currentUser = UserStore.getCurrentUser();
        dependencyMap = currentUser;
        _modDef38(null != currentUser, "AddMembers: user cannot be undefined");
        const canResult = PermissionStore.can(constants2.ADMINISTRATOR, guild);
        importDefault = canResult;
        const tmp22 = isGuildOwner(guild, currentUser);
        cResult[0] = guildId.guildId;
        cResult[1] = guild;
        cResult[2] = canResult;
        cResult[3] = tmp22;
        cResult[4] = currentUser;
        let tmp8 = tmp22;
        let tmp6 = guild;
      } else {
        tmp6 = cResult[1];
        importDefault = cResult[2];
        tmp8 = cResult[3];
        dependencyMap = cResult[4];
      }
      closure_5 = tmp8;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        obj4 = {};
        cResult[5] = obj4;
        let tmp23 = obj4;
      } else {
        tmp23 = cResult[5];
      }
      const tmp24 = _slicedToArray(navigation.useState(tmp23), 2);
      const first = tmp24[0];
      [first1, , cResult[11]] = useCreateChannelSubmitDefault(guildId.onChannelCreated);
      isGuildOwner = tmp29;
      if (cResult[6] !== guildId) {
        const fn = function b() {
          closure_3.current = current;
        };
        cResult[6] = guildId;
        cResult[7] = fn;
        let tmp30 = fn;
      } else {
        tmp30 = cResult[7];
      }
      const effect = obj2.useEffect(tmp30);
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp8) {
          if (cResult[10] === navigation) {
            if (cResult[11] === tmp29) {
              if (cResult[12] === first) {
                if (cResult[13] === tmp9.id) {
                  let tmp32 = cResult[14];
                }
                closure_9 = tmp32;
                if (cResult[15] === tmp32) {
                  if (cResult[16] === navigation) {
                    if (cResult[17] === first) {
                      if (cResult[18] === first1) {
                        let tmp33 = cResult[19];
                        let tmp34 = cResult[20];
                      }
                      const layoutEffect = obj2.useLayoutEffect(tmp33, tmp34);
                      if (cResult[21] === tmp28.message) {
                        if (cResult[22] === tmp4.errorMessage) {
                          let tmp36 = cResult[23];
                        }
                        if (cResult[24] === tmp6) {
                          if (cResult[25] === first) {
                            let tmp40 = cResult[26];
                          }
                          if (cResult[27] === tmp4.addMembersContainer) {
                            if (cResult[28] === tmp36) {
                              if (cResult[29] === tmp40) {
                                let tmp44 = cResult[30];
                              }
                              return tmp44;
                            }
                          }
                          class X {
                            constructor() {
                              tmp = closure_0;
                              PDTjLN = closure_2;
                              intl = closure_0(closure_2[29]).intl;
                              closure_0 = intl.string(closure_0(closure_2[29]).t["5Wxrcd"]);
                              if (Object.keys(closure_6).length <= 0) {
                                tmp4 = closure_7;
                                obj = { headerRight: null };
                                obj.headerRight = closure_7
                                  ? () => closure_1_20(stringResult(id[50]).HeaderSubmittingIndicator, {})
                                  : () =>
                                      constants2(HeaderActionButton.HeaderActionButton, {
                                        text: stringResult,
                                        onPress,
                                      });
                                setOptionsResult = closure_4.setOptions(obj);
                                return;
                              } else {
                                tmp2 = closure_1_14;
                                if (closure_3.current.channelType === closure_1_14.GUILD_STAGE_VOICE) {
                                  intl3 = tmp(PDTjLN[29]).intl;
                                  PDTjLN = tmp(PDTjLN[29]).t.PDTjLN;
                                  stringResult = intl3.string(PDTjLN);
                                } else {
                                  intl2 = tmp(PDTjLN[29]).intl;
                                  stringResult = intl2.string(tmp(PDTjLN[29]).t.CumH4u);
                                }
                                closure_0 = stringResult;
                              }
                              return;
                            }
                          }
                          const obj5 = { style: tmp4.addMembersContainer, children: null };
                          const items = [tmp36, tmp40];
                          obj5.children = items;
                          const tmp46 = closure_22(first, obj5);
                          cResult[27] = tmp4.addMembersContainer;
                          cResult[28] = tmp36;
                          cResult[29] = tmp40;
                          cResult[30] = tmp46;
                          tmp44 = tmp46;
                        }
                        class X {
                          constructor() {
                            tmp = closure_0;
                            PDTjLN = closure_2;
                            intl = closure_0(closure_2[29]).intl;
                            closure_0 = intl.string(closure_0(closure_2[29]).t["5Wxrcd"]);
                            if (Object.keys(closure_6).length <= 0) {
                              tmp4 = closure_7;
                              obj = { headerRight: null };
                              obj.headerRight = closure_7
                                ? () => closure_1_20(stringResult(id[50]).HeaderSubmittingIndicator, {})
                                : () =>
                                    constants2(HeaderActionButton.HeaderActionButton, { text: stringResult, onPress });
                              setOptionsResult = closure_4.setOptions(obj);
                              return;
                            } else {
                              tmp2 = closure_1_14;
                              if (closure_3.current.channelType === closure_1_14.GUILD_STAGE_VOICE) {
                                intl3 = tmp(PDTjLN[29]).intl;
                                PDTjLN = tmp(PDTjLN[29]).t.PDTjLN;
                                stringResult = intl3.string(PDTjLN);
                              } else {
                                intl2 = tmp(PDTjLN[29]).intl;
                                stringResult = intl2.string(tmp(PDTjLN[29]).t.CumH4u);
                              }
                              closure_0 = stringResult;
                            }
                            return;
                          }
                        }
                        tmp42[1] = tmp6;
                        tmp42[2] = first;
                        tmp42[3] = tmp24[1];
                        const tmp43 = closure_20(tmp(8619).AddMembersBody, tmp42);
                        cResult[24] = tmp6;
                        cResult[25] = first;
                        cResult[26] = tmp43;
                        tmp40 = tmp43;
                      }
                      class X {
                        constructor() {
                          tmp = closure_0;
                          PDTjLN = closure_2;
                          intl = closure_0(closure_2[29]).intl;
                          closure_0 = intl.string(closure_0(closure_2[29]).t["5Wxrcd"]);
                          if (Object.keys(closure_6).length <= 0) {
                            tmp4 = closure_7;
                            obj = { headerRight: null };
                            obj.headerRight = closure_7
                              ? () => closure_1_20(stringResult(id[50]).HeaderSubmittingIndicator, {})
                              : () =>
                                  constants2(HeaderActionButton.HeaderActionButton, { text: stringResult, onPress });
                            setOptionsResult = closure_4.setOptions(obj);
                            return;
                          } else {
                            tmp2 = closure_1_14;
                            if (closure_3.current.channelType === closure_1_14.GUILD_STAGE_VOICE) {
                              intl3 = tmp(PDTjLN[29]).intl;
                              PDTjLN = tmp(PDTjLN[29]).t.PDTjLN;
                              stringResult = intl3.string(PDTjLN);
                            } else {
                              intl2 = tmp(PDTjLN[29]).intl;
                              stringResult = intl2.string(tmp(PDTjLN[29]).t.CumH4u);
                            }
                            closure_0 = stringResult;
                          }
                          return;
                        }
                      }
                      let tmp37 = null;
                      if (null != tmp28.message) {
                        tmp37 = null;
                        if ("" !== tmp28.message) {
                          const obj6 = { style: null, children: null };
                          class X {
                            constructor() {
                              tmp = closure_0;
                              PDTjLN = closure_2;
                              intl = closure_0(closure_2[29]).intl;
                              closure_0 = intl.string(closure_0(closure_2[29]).t["5Wxrcd"]);
                              if (Object.keys(closure_6).length <= 0) {
                                tmp4 = closure_7;
                                obj = { headerRight: null };
                                obj.headerRight = closure_7
                                  ? () => closure_1_20(stringResult(id[50]).HeaderSubmittingIndicator, {})
                                  : () =>
                                      constants2(HeaderActionButton.HeaderActionButton, {
                                        text: stringResult,
                                        onPress,
                                      });
                                setOptionsResult = closure_4.setOptions(obj);
                                return;
                              } else {
                                tmp2 = closure_1_14;
                                if (closure_3.current.channelType === closure_1_14.GUILD_STAGE_VOICE) {
                                  intl3 = tmp(PDTjLN[29]).intl;
                                  PDTjLN = tmp(PDTjLN[29]).t.PDTjLN;
                                  stringResult = intl3.string(PDTjLN);
                                } else {
                                  intl2 = tmp(PDTjLN[29]).intl;
                                  stringResult = intl2.string(tmp(PDTjLN[29]).t.CumH4u);
                                }
                                closure_0 = stringResult;
                              }
                              return;
                            }
                          }
                          const obj7 = { type: "critical", message: tmp28.message, role: "alert" };
                          obj6.children = closure_20(tmp(7567).InlineNotice, obj7);
                          tmp37 = closure_20(first, obj6);
                        }
                      }
                      cResult[21] = tmp28.message;
                      cResult[22] = tmp4.errorMessage;
                      cResult[23] = tmp37;
                      tmp36 = tmp37;
                    }
                  }
                }
                class X {
                  constructor() {
                    tmp = closure_0;
                    PDTjLN = closure_2;
                    intl = closure_0(closure_2[29]).intl;
                    closure_0 = intl.string(closure_0(closure_2[29]).t["5Wxrcd"]);
                    if (Object.keys(closure_6).length <= 0) {
                      tmp4 = closure_7;
                      obj = { headerRight: null };
                      obj.headerRight = closure_7
                        ? () => closure_1_20(stringResult(id[50]).HeaderSubmittingIndicator, {})
                        : () => constants2(HeaderActionButton.HeaderActionButton, { text: stringResult, onPress });
                      setOptionsResult = closure_4.setOptions(obj);
                      return;
                    } else {
                      tmp2 = closure_1_14;
                      if (closure_3.current.channelType === closure_1_14.GUILD_STAGE_VOICE) {
                        intl3 = tmp(PDTjLN[29]).intl;
                        PDTjLN = tmp(PDTjLN[29]).t.PDTjLN;
                        stringResult = intl3.string(PDTjLN);
                      } else {
                        intl2 = tmp(PDTjLN[29]).intl;
                        stringResult = intl2.string(tmp(PDTjLN[29]).t.CumH4u);
                      }
                      closure_0 = stringResult;
                    }
                    return;
                  }
                }
                const items1 = [navigation, first, first1, tmp32];
                cResult[15] = tmp32;
                cResult[16] = navigation;
                cResult[17] = first;
                cResult[18] = first1;
                cResult[19] = X;
                cResult[20] = items1;
                tmp34 = items1;
                tmp33 = X;
              }
            }
          }
        }
      }
      class R {
        constructor() {
          current = closure_3.current;
          ({ guildId, channelType } = current);
          ({ name, categoryId, applicationId, onChannelCreated, flags } = current);
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[63]);
          result = obj.permissionOverwritesForRoles(guildId, channelType, [], true);
          closure_1 = result;
          values = Object.values(closure_6);
          item = values.forEach((row) => {
            row = row.row;
            let tmp = null != row.id;
            if (tmp) {
              tmp = "" !== row.id;
            }
            if (tmp) {
              if (row.rowType === constants2.ROLE) {
                result.push(channelType(5414).permissionOverwriteForRole(row.id, channelType));
                const obj2 = channelType(5414);
              } else if (row.rowType === tmp2.MEMBER) {
                result.push(channelType(5414).permissionOverwriteForUser(row.id, channelType));
                const obj = channelType(5414);
              }
            }
          });
          tmp4 = closure_1;
          if (!closure_1) {
            tmp4 = closure_5;
          }
          if (!tmp4) {
            tmpResult = tmp(tmp2[63]);
            tmp5 = closure_2;
            arr1 = result.push(tmpResult.permissionOverwriteForUser(closure_2.id, channelType));
          }
          obj1 = { overwrites: result, guildId, channelType, name, categoryId, applicationId, flags };
          if (channelType === ChannelTypes.GUILD_STAGE_VOICE) {
            tmp9 = closure_4;
            tmp10 = closure_31;
            obj5 = {};
            tmp11 = obj5;
            tmp12 = obj1;
            merged = Object.assign(obj1);
            obj5.guildId = guildId;
            obj5.onChannelCreated = onChannelCreated;
            arr3 = closure_4.push(closure_31.ADD_MODERATORS, obj5);
          } else {
            tmp7 = closure_8;
            tmp8 = closure_8(obj1);
          }
          return;
        }
      }
      cResult[8] = tmp7;
      cResult[9] = tmp8;
      cResult[10] = navigation;
      cResult[12] = first;
      cResult[13] = tmp9.id;
      cResult[14] = R;
      tmp32 = R;
      let obj3 = require("useNavigation");
    }
  : function AddMembers(guildId) {
      _require = guildId;
      let tmp = closure_23();
      importDefault = noop.useRef(guildId);
      navigation = require("useNavigation").useNavigation();
      guild = GuildStore.getGuild(guildId.guildId);
      require("../../_runtime/metro/00038__.js")(null != guild, "Guild must not be null");
      const currentUser = UserStore.getCurrentUser();
      require("../../_runtime/metro/00038__.js")(null != currentUser, "AddMembers: user cannot be undefined");
      const canResult = PermissionStore.can(constants2.ADMINISTRATOR, guild);
      noop = canResult;
      const tmp10 = isGuildOwner(guild, currentUser);
      closure_5 = tmp10;
      const tmp11 = currentUser(noop.useState({}), 2);
      const pendingAdditions = tmp11[0];
      const tmp13 = currentUser(require("useCreateChannelSubmit")(guildId.onChannelCreated), 3);
      const first1 = tmp13[0];
      isGuildOwner = tmp16;
      const effect = noop.useEffect(() => {
        closure_1.current = current;
      });
      const items = [canResult, tmp10, navigation, tmp13[2], pendingAdditions, currentUser.id];
      const onPress = noop.useCallback(() => {
        current = ref.current;
        ({ guildId, channelType } = current);
        ({ name, categoryId, applicationId, onChannelCreated, flags } = current);
        const result = ChannelUtils.permissionOverwritesForRoles(guildId, channelType, [], true);
        const values = Object.values(first);
        const item = values.forEach((row) => {
          row = row.row;
          let tmp = null != row.id;
          if (tmp) {
            tmp = "" !== row.id;
          }
          if (tmp) {
            if (row.rowType === constants2.ROLE) {
              result.push(channelType(navigation[63]).permissionOverwriteForRole(row.id, channelType));
              const obj2 = channelType(navigation[63]);
            } else if (row.rowType === tmp2.MEMBER) {
              result.push(channelType(navigation[63]).permissionOverwriteForUser(row.id, channelType));
              const obj = channelType(navigation[63]);
            }
          }
        });
        let tmp4 = canResult;
        if (!canResult) {
          tmp4 = closure_5;
        }
        if (!tmp4) {
          result.push(ChannelUtils.permissionOverwriteForUser(currentUser.id, channelType));
          const tmpResult = ChannelUtils;
        }
        let obj2 = { overwrites: result, guildId, channelType, name, categoryId, applicationId, flags };
        if (channelType === ChannelTypes.GUILD_STAGE_VOICE) {
          const obj3 = {};
          const merged = Object.assign(obj2);
          obj3.guildId = guildId;
          obj3.onChannelCreated = onChannelCreated;
          navigation.push(constants3.ADD_MODERATORS, obj3);
        } else {
          closure_8(obj2);
        }
        ref = result;
      }, items);
      const items1 = [navigation, pendingAdditions, first1, onPress];
      const layoutEffect = noop.useLayoutEffect(() => {
        let PDTjLN = navigation;
        const intl = current(navigation[29]).intl;
        current = intl.string(current(navigation[29]).t["5Wxrcd"]);
        if (Object.keys(first).length <= 0) {
          const obj = {
            headerRight: first1
              ? () => closure_1_20(stringResult(navigation[50]).HeaderSubmittingIndicator, {})
              : () => constants2(HeaderActionButton.HeaderActionButton, { text: stringResult, onPress }),
          };
          navigation.setOptions(obj);
        } else {
          if (ref.current.channelType === constants.GUILD_STAGE_VOICE) {
            const intl3 = tmp(PDTjLN[29]).intl;
            PDTjLN = tmp(PDTjLN[29]).t.PDTjLN;
            let stringResult = intl3.string(PDTjLN);
          } else {
            const intl2 = tmp(PDTjLN[29]).intl;
            stringResult = intl2.string(tmp(PDTjLN[29]).t.CumH4u);
          }
          current = stringResult;
        }
      }, items1);
      let obj2 = { style: tmp.addMembersContainer, children: null };
      let tmp22 = null;
      if (null != tmp13[1].message) {
        tmp22 = null;
        if ("" !== tmp15.message) {
          let obj3 = { style: tmp.errorMessage, children: null };
          obj4 = { type: "critical", message: tmp15.message, role: "alert" };
          obj3.children = closure_20(tmp2(tmp3[61]).InlineNotice, obj4);
          tmp22 = closure_20(tmp21, obj3);
        }
      }
      const items2 = [
        tmp22,
        closure_20(require("AddMembersActionSheet").AddMembersBody, {
          channel: null,
          guild,
          pendingAdditions,
          setPendingAdditions: tmp11[1],
        }),
      ];
      obj2.children = items2;
      return closure_22(pendingAdditions, obj2);
    };
const constants4 = { CREATE_CHANNEL: "CREATE_CHANNEL", ADD_MEMBERS: "ADD_MEMBERS", ADD_MODERATORS: "ADD_MODERATORS" };
ReactCompilerGating = fn(558);
let obj19 = { IconComponent: fn(8232).AppsLockIcon };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/CreateChannelModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CreateChannelModal(arg0) {
      _require = arg0;
      const cResult = require("c").c(5);
      if (cResult[0] !== arg0) {
        const fn = function t() {
          const obj = { name: constants.CREATE_CHANNEL, params: null };
          const merged = Object.assign(closure_0);
          obj.params = {};
          const items = [obj];
          return { screens: getScreens(), initialStack: items };
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      let obj = require("c");
      const tmp = _require;
      ({ screens, initialStack } = useInitialValueDefault(tmp4));
      if (cResult[2] === initialStack) {
        if (cResult[3] === screens) {
          let tmp6 = cResult[4];
        }
        return tmp6;
      }
      const tmp7 = closure_20(tmp(6687).Navigator, { screens, initialRouteStack: initialStack });
      cResult[2] = initialStack;
      cResult[3] = screens;
      cResult[4] = tmp7;
      tmp6 = tmp7;
      const tmp5 = useInitialValueDefault(tmp4);
    }
  : function CreateChannelModal(arg0) {
      _require = arg0;
      ({ screens, initialStack } = useInitialValueDefault(() => {
        const obj = { name: constants.CREATE_CHANNEL, params: null };
        const merged = Object.assign(closure_0);
        obj.params = {};
        const items = [obj];
        return { screens: getScreens(), initialStack: items };
      }));
      return closure_20(require("Navigator").Navigator, { screens, initialRouteStack });
    };
export const CreateChannel = tmp5;
