// discord_app/components_native/CreateChannelModal.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import react2 from "../../_runtime/00576_react.js";
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import intl16 from "../intl/index.native.tsx";
import native from "../design/void/native.tsx";
import discord_common_AnalyticsUtils from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import GuildRecord from "../records/GuildRecord.tsx";
import HelpdeskUtilsDefault from "../utils/HelpdeskUtils.tsx";
import react_native from "../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import Text_Text from "../design/components/Text/native/Text.tsx";
import ChannelUtils from "../utils/ChannelUtils.tsx";
import TextLockIcon from "../design/components/Icon/native/redesign/generated/TextLockIcon.tsx";
import TextIcon from "../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import ImageLockIcon from "../design/components/Icon/native/redesign/generated/ImageLockIcon.tsx";
import ForumLockIcon from "../design/components/Icon/native/redesign/generated/ForumLockIcon.tsx";
import ImageIcon from "../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import ForumIcon from "../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import AnnouncementsLockIcon from "../design/components/Icon/native/redesign/generated/AnnouncementsLockIcon.tsx";
import AnnouncementsIcon from "../design/components/Icon/native/redesign/generated/AnnouncementsIcon.tsx";
import StageLockIcon from "../design/components/Icon/native/redesign/generated/StageLockIcon.tsx";
import StageIcon from "../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import VoiceLockIcon from "../design/components/Icon/native/redesign/generated/VoiceLockIcon.tsx";
import VoiceNormalIcon from "../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import AppsLockIcon from "../design/components/Icon/native/redesign/generated/AppsLockIcon.tsx";
import AppsIcon from "../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import useInitialValueDefault from "../hooks/useInitialValue.tsx";
import TableRow2 from "../design/components/TableRow/native/TableRow.native.tsx";
import NavigatorHeader from "../design/components/Navigator/native/NavigatorHeader.native.tsx";
import FormRadio from "../design/components/Forms/native/FormRadio.native.tsx";
import HeaderActionButton from "../design/components/Navigator/native/HeaderActionButton.native.tsx";
import ChannelPermissionsConstants from "../modules/channel_permissions/ChannelPermissionsConstants.tsx";
import Form from "../design/void/Form/native/index.tsx";
import useCreateChannelSubmitDefault from "../modules/channel/useCreateChannelSubmit.tsx";
import CreateChannelModalActionCreatorsDefault from "../actions/native/CreateChannelModalActionCreators.tsx";
import sanitizeChannelNameDefault from "../modules/channel/sanitizeChannelName.tsx";
import AddModeratorsDefault from "../modules/stage_channels/native/create_channel/AddModerators.tsx";
import _slicedToArray_mod from "../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../_runtime/00019_react.js";
import react_native2 from "../../_runtime/00017_react-native.js";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import PermissionStore_mod from "../stores/PermissionStore.tsx";
import RelationshipStore from "../stores/RelationshipStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import Constants from "../Constants.tsx";
import Fragment from "../../_runtime/react/00021_Fragment.js";
import createStyles from "../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require,
  arr1,
  constants,
  current,
  dependencyMap,
  importDefault,
  navigation,
  obj1,
  push2Result,
  row,
  selected,
  setOptionsResult,
  tmp12,
  tmp3;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
let closure_22;
let hasOwnProperty;
let metroRequire;
let obj2;
function getChannelTypeLabel(channelType) {
  let format;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let obj12;
  let obj6;
  let obj9;
  let v2Sapx1;
  if (ChannelTypes.GUILD_TEXT === channelType) {
    const obj2 = { label: intl14.string(intl16.t.pnuRXC), description: intl15.string(intl16.t.oG6WsM) };
    intl14 = intl16.intl;
    intl15 = intl16.intl;
    return obj2;
  } else if (ChannelTypes.GUILD_VOICE === channelType) {
    obj3 = { label: intl12.string(intl16.t.Sx55Oh), description: intl13.string(intl16.t.pqfkoF) };
    intl12 = intl16.intl;
    intl13 = intl16.intl;
    return obj3;
  } else if (ChannelTypes.GUILD_FORUM === channelType) {
    const obj4 = { label: intl10.string(intl16.t.eAVID5), description: intl11.string(intl16.t.iZ5pgg) };
    intl10 = intl16.intl;
    intl11 = intl16.intl;
    return obj4;
  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === channelType) {
    const obj5 = { label: intl8.string(intl16.t.qr9dEP), description: intl9.string(intl16.t.gBkfzu) };
    intl8 = intl16.intl;
    intl9 = intl16.intl;
    return obj5;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === channelType) {
    const obj7 = { label: intl6.string(intl16.t.pNWst0), description: intl7.string(intl16.t.VPAwgo) };
    intl6 = intl16.intl;
    intl7 = intl16.intl;
    return obj7;
  } else if (ChannelTypes.GUILD_APP === channelType) {
    const obj8 = { label: intl4.string(intl16.t["A+8d6M"]), description: intl5.string(intl16.t.LVQQ3Z) };
    intl4 = intl16.intl;
    intl5 = intl16.intl;
    return obj8;
  } else if (ChannelTypes.GUILD_MEDIA === channelType) {
    const obj = { label: intl.string(intl16.t["6x6fVg"]), description: afk(closure_21, obj9) };
    intl = intl16.intl;
    obj9 = { children: items };
    const obj10 = { variant: "text-xs/normal", color: "text-muted", children: intl2.string(intl16.t.JyCrwS) };
    const Text = Text_Text.Text;
    intl2 = intl16.intl;
    items = [closure_20(Text, obj10)];
    obj11 = { variant: "text-xs/normal", children: format(v2Sapx1, obj12) };
    const Text2 = Text_Text.Text;
    const intl3 = intl16.intl;
    format = intl3.format;
    obj12 = { hcArticleUrl: obj6.getCreatorSupportArticleURL(constants3.MEDIA_CHANNEL) };
    v2Sapx1 = intl16.t["2Sapx1"];
    obj6 = HelpdeskUtilsDefault;
    items[1] = closure_20(Text2, obj11);
    return obj;
  }
}
function getSceneTitle(first1, stateFromStores1) {
  if (null != stateFromStores1) {
    const intl3 = intl16.intl;
    return intl3.string(intl16.t.dEaPc4);
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
                      const intl = intl16.intl;
                      return intl.string(intl16.t["ISN+NM"]);
                    } else {
                      const _Error = Error;
                      const _HermesInternal = HermesInternal;
                      const self = this;
                      const self2 = this;
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
    const intl2 = intl16.intl;
    return intl2.string(intl16.t["fUYU+j"]);
  }
}
function getScreens() {
  let intl;
  let intl2;
  function render(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    return closure_1_20(closure_1_28, obj);
  }
  let obj = {};
  const CREATE_CHANNEL = constants4.CREATE_CHANNEL;
  obj[CREATE_CHANNEL] = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.CHANNEL_ADD_INFO,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW },
    render,
  };
  const obj2 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.CHANNEL_ADD_INFO,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW },
    render,
  };
  const ADD_MEMBERS = constants4.ADD_MEMBERS;
  const obj4 = {
    headerTitle: intl.string(intl16.t.dMJ3Y6),
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.CHANNEL_ADD_MEMBERS,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW },
    render(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      return closure_1_20(closure_1_29, obj);
    },
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW });
  intl = intl16.intl;
  obj[ADD_MEMBERS] = obj4;
  const ADD_MODERATORS = constants4.ADD_MODERATORS;
  const obj6 = {
    headerTitle: intl2.string(intl16.t.n3bcy8),
    render(arg0) {
      const obj = {};
      const tmp = AddModeratorsDefault;
      const merged = Object.assign(arg0);
      return closure_1_20(tmp, obj);
    },
  };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW });
  intl2 = intl16.intl;
  obj[ADD_MODERATORS] = obj6;
  return obj;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native2);
const isGuildVocalChannelType = ChannelRecord.isGuildVocalChannelType;
let isGuildOwner = GuildRecord.isGuildOwner;
let PermissionStore = PermissionStore_mod;
const ChannelTypes = Constants.ChannelTypes;
({
  GuildFeatures: closure_15,
  Permissions: closure_16,
  AnalyticEvents: closure_17,
  HelpdeskArticles: closure_18,
} = Constants);
const RowType = ChannelPermissionsConstants.RowType;
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = Fragment);
let obj = {
  addMembersContainer: obj2,
  errorMessage: { marginBottom: 0 },
  flexRow: { flexDirection: "row", alignItems: "center" },
  horizontalContainer: { flex: 1, flexDirection: "row" },
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
let closure_23 = createStyles.createStyles(obj);
let obj3 = {};
let obj4 = { IconComponent: TextIcon.TextIcon };
obj3[ChannelTypes.GUILD_TEXT] = obj4;
let obj5 = { IconComponent: ForumIcon.ForumIcon };
obj3[ChannelTypes.GUILD_FORUM] = obj5;
let obj6 = { IconComponent: VoiceNormalIcon.VoiceNormalIcon };
obj3[ChannelTypes.GUILD_VOICE] = obj6;
let obj7 = { IconComponent: StageIcon.StageIcon };
obj3[ChannelTypes.GUILD_STAGE_VOICE] = obj7;
let obj8 = { IconComponent: AnnouncementsIcon.AnnouncementsIcon };
obj3[ChannelTypes.GUILD_ANNOUNCEMENT] = obj8;
let obj9 = { IconComponent: ImageIcon.ImageIcon };
obj3[ChannelTypes.GUILD_MEDIA] = obj9;
let obj10 = { IconComponent: AppsIcon.AppsIcon };
obj3[ChannelTypes.GUILD_APP] = obj10;
let obj11 = {};
let obj12 = { IconComponent: TextLockIcon.TextLockIcon };
obj11[ChannelTypes.GUILD_TEXT] = obj12;
let obj13 = { IconComponent: ForumLockIcon.ForumLockIcon };
obj11[ChannelTypes.GUILD_FORUM] = obj13;
let obj14 = { IconComponent: VoiceLockIcon.VoiceLockIcon };
obj11[ChannelTypes.GUILD_VOICE] = obj14;
let obj15 = { IconComponent: StageLockIcon.StageLockIcon };
obj11[ChannelTypes.GUILD_STAGE_VOICE] = obj15;
let obj16 = { IconComponent: AnnouncementsLockIcon.AnnouncementsLockIcon };
obj11[ChannelTypes.GUILD_ANNOUNCEMENT] = obj16;
let obj17 = { IconComponent: ImageLockIcon.ImageLockIcon };
obj11[ChannelTypes.GUILD_MEDIA] = obj17;
let obj18 = { IconComponent: AppsLockIcon.AppsLockIcon };
obj11[ChannelTypes.GUILD_APP] = obj18;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selected) => {
      let accessibilityRole;
      let accessibilityState;
      let description;
      let isBeta;
      let items;
      let label;
      let onPress;
      let tmp5;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(27);
      selected = selected.selected;
      const channelType = selected.channelType;
      ({ isBeta, onPress } = selected);
      const isPrivate = selected.isPrivate;
      const tmp4 = closure_23();
      if (cResult[0] !== selected) {
        const obj2 = { selected };
        cResult[0] = selected;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult = react_native;
      const radioA11yNative = tmpResult.useRadioA11yNative(tmp5);
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      const IconComponent = (isPrivate ? obj11 : obj3)[channelType].IconComponent;
      if (cResult[2] !== channelType) {
        const tmp9 = getChannelTypeLabel(channelType);
        cResult[2] = channelType;
        cResult[3] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      ({ label, description } = tmp7);
      if (cResult[4] === channelType) {
        if (cResult[5] === onPress) {
          let tmp10;
          let tmp11;
          if (cResult[6] === selected) {
            tmp10 = cResult[7];
          }
          if (cResult[8] !== IconComponent) {
            const tmp13 = closure_20(IconComponent, {});
            cResult[8] = IconComponent;
            cResult[9] = tmp13;
            tmp11 = tmp13;
          } else {
            tmp11 = cResult[9];
          }
          if (cResult[10] === tmp4.flexRow) {
            let tmp14;
            let tmp18;
            if (cResult[11] === tmp11) {
              tmp14 = cResult[12];
            }
            if (cResult[13] !== selected) {
              obj3 = { selected };
              const tmp20 = closure_20(FormRadio.FormRadio, obj3);
              cResult[13] = selected;
              cResult[14] = tmp20;
              tmp18 = tmp20;
            } else {
              tmp18 = cResult[14];
            }
            if (cResult[15] === isBeta) {
              if (cResult[16] === label) {
                let tmp21;
                if (cResult[17] === tmp4.horizontalContainer) {
                  tmp21 = cResult[18];
                }
                if (cResult[19] === accessibilityRole) {
                  if (cResult[20] === accessibilityState) {
                    if (cResult[21] === description) {
                      if (cResult[22] === tmp10) {
                        if (cResult[23] === tmp14) {
                          if (cResult[24] === tmp18) {
                            let tmp23;
                            if (cResult[25] === tmp21) {
                              tmp23 = cResult[26];
                            }
                            return tmp23;
                          }
                        }
                      }
                    }
                  }
                }
                const obj4 = {
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
                const tmp25 = closure_20(TableRow2.TableRow, obj4);
                class L {
                  constructor() {
                    tmp = !selected;
                    if (tmp) {
                      tmp2 = onPress;
                      tmp3 = channelType;
                      tmp4 = onPress(channelType);
                    }
                    return;
                  }
                }
                tmp23 = tmp25;
              }
            }
            let tmp22 = label;
            if (true === isBeta) {
              const obj5 = { style: tmp4.horizontalContainer, children: items };
              const obj6 = { text: label };
              items = [closure_20(Form.FormLabel, obj6)];
              const obj7 = { size: native.BetaSizes.SMALL };
              const BetaTag = native.BetaTag;
              items[1] = closure_20(BetaTag, obj7);
              tmp22 = afk(metroRequire, obj5);
            }
            cResult[15] = isBeta;
            cResult[16] = label;
            cResult[17] = tmp4.horizontalContainer;
            cResult[18] = tmp22;
            tmp21 = tmp22;
          }
          const obj8 = { style: tmp4.flexRow, children: tmp11 };
          const tmp17 = closure_20(metroRequire, obj8);
          cResult[10] = tmp4.flexRow;
          cResult[11] = tmp11;
          cResult[12] = tmp17;
          tmp14 = tmp17;
        }
      }
      class L {
        constructor() {
          tmp = !selected;
          if (tmp) {
            tmp2 = onPress;
            tmp3 = channelType;
            tmp4 = onPress(channelType);
          }
          return;
        }
      }
      cResult[4] = channelType;
      cResult[5] = onPress;
      cResult[6] = selected;
      cResult[7] = L;
      tmp10 = L;
    }
  : (selected) => {
      let accessibilityRole;
      let accessibilityState;
      let isBeta;
      let isPrivate;
      let items;
      let tmp8;
      selected = selected.selected;
      const channelType = selected.channelType;
      const onPress = selected.onPress;
      ({ isPrivate, isBeta } = selected);
      let tmp = closure_23();
      const obj = react_native;
      const radioA11yNative = obj.useRadioA11yNative({ selected });
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      const IconComponent = (isPrivate ? obj11 : obj3)[channelType].IconComponent;
      const tmp5 = getChannelTypeLabel(channelType);
      const label = tmp5.label;
      const description = tmp5.description;
      const obj2 = {
        onPress() {
          const tmp = !selected;
          if (tmp) {
            onPress(channelType);
          }
        },
        accessibilityRole,
        accessibilityState,
        icon: closure_20(metroRequire, obj3),
        trailing: closure_20(FormRadio.FormRadio, { selected }),
        label: tmp8,
        subLabel: description,
      };
      obj3 = { style: tmp.flexRow, children: closure_20(IconComponent, {}) };
      const TableRow = TableRow2.TableRow;
      tmp8 = label;
      if (true === isBeta) {
        const obj4 = { style: tmp.horizontalContainer, children: items };
        const obj5 = { text: label };
        items = [closure_20(Form.FormLabel, obj5)];
        const obj6 = { size: native.BetaSizes.SMALL };
        const BetaTag = native.BetaTag;
        items[1] = closure_20(BetaTag, obj6);
        tmp8 = afk(metroRequire, obj4);
      }
      return closure_20(TableRow, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (categoryId) => {
      let channelType;
      let cloneChannelId;
      let closure_11;
      let closure_15;
      let createMode;
      let first;
      let first2;
      let first4;
      let first5;
      let tmp10;
      let tmp44;
      let tmp45;
      const tmp = categoryId;
      let obj = categoryId(createMode[33]);
      const cResult = obj.c(81);
      categoryId = categoryId.categoryId;
      ({ channelType, cloneChannelId } = categoryId);
      createMode = categoryId.createMode;
      const guildId = categoryId.guildId;
      const onChannelCreated = categoryId.onChannelCreated;
      const tmp4 = closure_23();
      const insets = cloneChannelId(createMode[39])().insets;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = first2;
        let items = [first2];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        cResult[1] = guildId;
        cResult[2] = T;
      } else {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      let tmpResult = tmp(tmp2[40]);
      const stateFromStores = tmpResult.useStateFromStores(first, T);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        const items1 = [closure_9];
        cResult[3] = items1;
        tmp10 = items1;
      } else {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      if (cResult[4] !== cloneChannelId) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        cResult[4] = cloneChannelId;
        cResult[5] = tmp12;
      } else {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      const tmpResult5 = tmp(createMode[40]);
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp10, tmp12);
      if (cResult[6] !== stateFromStores) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        let hasItem = null != stateFromStores;
        if (hasItem) {
          class T {
            constructor() {
              return GuildStore.getGuild(guildId);
            }
          }
          hasItem = obj4.has(constants.COMMUNITY);
        }
        cResult[6] = stateFromStores;
        cResult[7] = hasItem;
      } else {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      if (cResult[8] !== stateFromStores) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        let tmp18 = first5;
        cResult[8] = stateFromStores;
        cResult[9] = PermissionStore.can(first5.VIEW_CHANNEL, stateFromStores);
        const canResult = PermissionStore.can(first5.VIEW_CHANNEL, stateFromStores);
      } else {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      let closure_6 = tmp17;
      if (cResult[10] !== stateFromStores) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        let canResult1 = PermissionStore.can(first5.CONNECT, stateFromStores);
        cResult[10] = stateFromStores;
        cResult[11] = canResult1;
      } else {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      canResult1 = tmp20;
      const currentUser = navigation.getCurrentUser();
      cloneChannelId(createMode[41])(null != currentUser, "CreateChannel: user cannot be undefined");
      const tmp25 = cloneChannelId(createMode[42])(stateFromStores1);
      const useState = onChannelCreated.useState;
      if (tmp25 == null) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      let tmp26 = guildId;
      const tmp27 = guildId(useState(tmp25), 2);
      const first1 = tmp27[0];
      closure_9 = tmp27[1];
      const useState2 = obj5.useState;
      if (null == channelType) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        channelType = first4.GUILD_TEXT;
      }
      const tmp26Result = tmp26(useState2(channelType), 2);
      first2 = tmp26Result[0];
      PermissionStore = tmp26Result[1];
      const tmpResult6 = tmp(createMode[43]);
      const canCreateStageChannelByGuild = tmpResult6.useCanCreateStageChannelByGuild(guildId);
      const tmpResult7 = tmp(createMode[44]);
      const guildEligibleForMediaChannels = tmpResult7.useGuildEligibleForMediaChannels(stateFromStores);
      if (cResult[12] !== guildId) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        tmp34[0] = guildId;
        cResult[12] = guildId;
        cResult[13] = tmp34;
      } else {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      const tmp5Result = cloneChannelId(createMode[45]);
      const enabled = tmp5Result.useConfig(tmp34).enabled;
      const useState3 = obj5.useState;
      if (stateFromStores1 != null) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      if (undefined == null) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      const first3 = tmp26(useState3(undefined), 2)[0];
      tmp26(useState3(undefined), 2);
      const tmpResult8 = tmp(createMode[46]);
      navigation = tmpResult8.useNavigation();
      const tmp26Result5 = tmp26(cloneChannelId(createMode[47])(onChannelCreated), 3);
      first4 = tmp26Result5[0];
      constants = tmp41;
      const tmp26Result6 = tmp26(onChannelCreated.useState(false), 2);
      first5 = tmp26Result6[0];
      let closure_17 = tmp26Result6[1];
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        const items2 = [];
        cResult[14] = items2;
        cResult[15] = tmp46;
        tmp45 = tmp46;
        tmp44 = items2;
      } else {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
        tmp45 = cResult[15];
      }
      const effect = obj5.useEffect(tmp45, tmp44);
      if (cResult[16] === first3) {
        class T {
          constructor() {
            return GuildStore.getGuild(guildId);
          }
        }
      }
      function de() {
        let obj2;
        let obj = {
          headerLeft: obj2.getHeaderCloseButton(CreateChannelModalActionCreatorsDefault.close),
          headerRight() {
            let applicationId;
            let channelType;
            let name;
            let tmp18;
            let tmpResult;
            if (constants) {
              tmpResult = closure_2_20(categoryId(createMode[49]).HeaderSubmittingIndicator, {});
            } else {
              let tmp5 = first5;
              if (!tmp5) {
                let stringResult;
                if (first2 !== first4.GUILD_STAGE_VOICE) {
                  const intl = categoryId(createMode[29]).intl;
                  stringResult = intl.string(categoryId(createMode[29]).t.CumH4u);
                }
                let obj = {
                  text: stringResult,
                  disabled: tmp18,
                  onPress() {
                    let bitrate;
                    let items;
                    let userLimit;
                    if (null != closure_1_5) {
                      const obj = cloneChannelId(closure_2_2[53]);
                      items = obj.values(closure_1_5.permissionOverwrites);
                    } else {
                      items = [];
                    }
                    const obj2 = {
                      overwrites: items,
                      bitrate,
                      userLimit,
                      createMode,
                      guildId,
                      name,
                      channelType,
                      categoryId,
                      applicationId,
                      onChannelCreated,
                    };
                    bitrate = undefined;
                    if (closure_1_5 != null) {
                      bitrate = closure_1_5.bitrate;
                    }
                    userLimit = undefined;
                    if (closure_1_5 != null) {
                      userLimit = closure_1_5.userLimit;
                    }
                    if (closure_1_16) {
                      obj3 = {
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
                  },
                };
                tmp18 = "" === first1;
                if (!tmp18) {
                  if (tmp5) {
                    let obj2 = categoryId(createMode[52]);
                    tmp5 = !obj2.canCreatePrivateChannel(first2, closure_1_6, canResult1);
                  }
                  tmp18 = tmp5;
                }
                if (!tmp18) {
                  tmp18 = first2 === first4.GUILD_APP && null == first3;
                  const tmp26 = first2 === first4.GUILD_APP && null == first3;
                }
                tmpResult = closure_2_20(tmp4, obj);
              }
              const intl2 = categoryId(createMode[29]).intl;
              stringResult = intl2.string(categoryId(createMode[29]).t.PDTjLN);
            }
            return tmpResult;
          },
          headerTitle: getSceneTitle(first2, stateFromStores1),
        };
        const setOptions = navigation.setOptions;
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
      const items3 = [
        navigation,
        first2,
        stateFromStores1,
        tmp17,
        tmp20,
        first5,
        first1,
        first4,
        guildId,
        tmp26Result5[2],
        categoryId,
        createMode,
        onChannelCreated,
        first3,
      ];
      cResult[16] = first3;
      cResult[17] = tmp20;
      cResult[18] = tmp17;
      cResult[19] = categoryId;
      cResult[20] = first2;
      cResult[21] = stateFromStores1;
      cResult[22] = tmp26Result5[2];
      cResult[23] = createMode;
      cResult[24] = guildId;
      cResult[25] = first5;
      cResult[26] = first1;
      cResult[27] = navigation;
      cResult[28] = onChannelCreated;
      cResult[29] = first4;
      cResult[30] = de;
      cResult[31] = items3;
    }
  : (categoryId) => {
      let HelpMessage;
      let HelpMessage2;
      let Stack;
      let TableSwitchRow;
      let channelType;
      let closure_11;
      let closure_15;
      let createMode;
      let first5;
      let intl12;
      let items3;
      let items4;
      let obj20;
      let obj22;
      let obj26;
      let obj6;
      let stringResult;
      let stringResult1;
      let stringResult2;
      let tmp4Result10;
      let tmp4Result8;
      categoryId = categoryId.categoryId;
      ({ channelType, cloneChannelId: importDefault, createMode } = categoryId);
      const guildId = categoryId.guildId;
      const onChannelCreated = categoryId.onChannelCreated;
      let c6;
      let canResult1;
      let value;
      let closure_9;
      let first1;
      PermissionStore = undefined;
      let first2;
      navigation = undefined;
      let first3;
      constants = undefined;
      let first4;
      let closure_17;
      const tmp = closure_23();
      const tmp4 = categoryId;
      const insets = require("useSafeAreaInsetsKeyboardAware")().insets;
      let obj = categoryId(createMode[40]);
      let items = [first1];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
      let obj2 = categoryId(createMode[40]);
      const items1 = [closure_9];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
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
      const tmp11 = navigation;
      const currentUser = navigation.getCurrentUser();
      require("../../_runtime/metro/00038__.js")(null != currentUser, "CreateChannel: user cannot be undefined");
      let str = require("useChannelName")(stateFromStores1);
      obj3 = onChannelCreated;
      const useState = onChannelCreated.useState;
      if (str == null) {
        str = "";
      }
      const tmp15 = guildId(useState(str), 2);
      value = tmp15[0];
      closure_9 = tmp15[1];
      const useState2 = obj3.useState;
      if (null == channelType) {
        channelType = first3.GUILD_TEXT;
      }
      const tmp14Result = guildId(useState2(channelType), 2);
      first1 = tmp14Result[0];
      PermissionStore = tmp14Result[1];
      const tmp4Result = tmp4(createMode[43]);
      const canCreateStageChannelByGuild = tmp4Result.useCanCreateStageChannelByGuild(guildId);
      const tmp4Result6 = tmp4(createMode[44]);
      const guildEligibleForMediaChannels = tmp4Result6.useGuildEligibleForMediaChannels(stateFromStores);
      let application_id;
      const tmp2Result = require("AppChannelExperiment");
      const enabled = tmp2Result.useConfig({ guildId, location: "CreateChannel mobile" }).enabled;
      const useState3 = obj3.useState;
      if (stateFromStores1 != null) {
        application_id = stateFromStores1.application_id;
      }
      if (application_id == null) {
        application_id = null;
      }
      const tmp14Result4 = guildId(useState3(application_id), 2);
      first2 = tmp14Result4[0];
      const tmp25 = tmp14Result4[1];
      const tmp4Result7 = tmp4(createMode[46]);
      navigation = tmp4Result7.useNavigation();
      const tmp14Result5 = guildId(require("useCreateChannelSubmit")(onChannelCreated), 3);
      first3 = tmp14Result5[0];
      constants = tmp30;
      const tmp14Result6 = guildId(obj3.useState(false), 2);
      first4 = tmp14Result6[0];
      closure_17 = tmp14Result6[1];
      const effect = obj3.useEffect(() => {
        const obj = require("AppAnalyticsUtils");
        obj.trackWithMetadata(closure_17.OPEN_MODAL, { type: "Create Channel" });
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
        let obj2;
        let obj = {
          headerLeft: obj2.getHeaderCloseButton(CreateChannelModalActionCreatorsDefault.close),
          headerRight() {
            let applicationId;
            let channelType;
            let name;
            let tmp18;
            let tmpResult;
            if (constants) {
              tmpResult = closure_2_20(categoryId(createMode[49]).HeaderSubmittingIndicator, {});
            } else {
              let tmp5 = first4;
              if (!tmp5) {
                let stringResult;
                if (first1 !== first3.GUILD_STAGE_VOICE) {
                  const intl = categoryId(createMode[29]).intl;
                  stringResult = intl.string(categoryId(createMode[29]).t.CumH4u);
                }
                let obj = {
                  text: stringResult,
                  disabled: tmp18,
                  onPress() {
                    let bitrate;
                    let items;
                    let userLimit;
                    if (null != closure_1_5) {
                      const obj = closure_2_1(closure_2_2[53]);
                      items = obj.values(closure_1_5.permissionOverwrites);
                    } else {
                      items = [];
                    }
                    const obj2 = {
                      overwrites: items,
                      bitrate,
                      userLimit,
                      createMode,
                      guildId,
                      name,
                      channelType,
                      categoryId,
                      applicationId,
                      onChannelCreated,
                    };
                    bitrate = undefined;
                    if (closure_1_5 != null) {
                      bitrate = closure_1_5.bitrate;
                    }
                    userLimit = undefined;
                    if (closure_1_5 != null) {
                      userLimit = closure_1_5.userLimit;
                    }
                    if (closure_1_16) {
                      obj3 = {
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
                  },
                };
                tmp18 = "" === closure_1_8;
                if (!tmp18) {
                  if (tmp5) {
                    let obj2 = categoryId(createMode[52]);
                    tmp5 = !obj2.canCreatePrivateChannel(first1, closure_1_6, canResult1);
                  }
                  tmp18 = tmp5;
                }
                if (!tmp18) {
                  tmp18 = first1 === first3.GUILD_APP && null == first2;
                  const tmp26 = first1 === first3.GUILD_APP && null == first2;
                }
                tmpResult = closure_2_20(tmp4, obj);
              }
              const intl2 = categoryId(createMode[29]).intl;
              stringResult = intl2.string(categoryId(createMode[29]).t.PDTjLN);
            }
            return tmpResult;
          },
          headerTitle: getSceneTitle(first1, stateFromStores1),
        };
        const setOptions = navigation.setOptions;
        obj2 = NavigatorHeader;
        setOptions(obj);
      }, items2);
      const obj4 = {
        keyboardShouldPersistTaps: "always",
        contentContainerStyle: {
          padding: require("native").space.PX_16,
          paddingBottom: require("native").space.PX_16 + insets.bottom,
        },
        children: closure_22(Stack, obj6),
      };
      obj6 = { spacing: require("native").space.PX_16, children: items3 };
      ({ padding: require("native").space.PX_16, paddingBottom: require("native").space.PX_16 + insets.bottom });
      Stack = tmp4(createMode[61]).Stack;
      const TextInput = tmp4(createMode[55]).TextInput;
      const tmp36 = stateFromStores1;
      if (first1 === first3.GUILD_CATEGORY) {
        let intl2 = tmp4(createMode[29]).intl;
        stringResult = intl2.string(tmp4(createMode[29]).t.OCAkGP);
      } else {
        let intl = tmp4(createMode[29]).intl;
        stringResult = intl.string(tmp4(createMode[29]).t.PVbHDl);
      }
      const name = tmp29.name;
      const obj7 = {
        label: stringResult,
        errorMessage: first5,
        description: stringResult1,
        autoFocus: true,
        enableAndroidSanitizedInputWorkaround: true,
        value,
        onChange(arg0) {
          if (first !== arg0) {
            closure_9(sanitizeChannelNameDefault(arg0, first1));
          }
        },
        placeholder: stringResult2,
      };
      first5 = undefined;
      if (name != null) {
        first5 = name[0];
      }
      if (first1 === first3.GUILD_FORUM) {
        const intl4 = tmp4(createMode[29]).intl;
        stringResult1 = intl4.string(tmp4(createMode[29]).t.qBvLY4);
      } else if (null != stateFromStores1) {
        const intl3 = tmp4(createMode[29]).intl;
        const format = intl3.format;
        const obj8 = { name: tmp4Result8.computeChannelName(stateFromStores1, tmp11, first2, true) };
        const s2ZzZZ = tmp4(createMode[29]).t.s2ZzZZ;
        tmp4Result8 = tmp4(createMode[42]);
        stringResult1 = format(s2ZzZZ, obj8);
      }
      if (first1 === first3.GUILD_CATEGORY) {
        const intl7 = tmp4(createMode[29]).intl;
        stringResult2 = intl7.string(tmp4(createMode[29]).t.eTVbtx);
      } else if (first1 === first3.GUILD_FORUM) {
        const intl6 = tmp4(createMode[29]).intl;
        stringResult2 = intl6.string(tmp4(createMode[29]).t["5z1Xat"]);
      } else {
        const intl5 = tmp4(createMode[29]).intl;
        stringResult2 = intl5.string(tmp4(createMode[29]).t["bw/b8E"]);
      }
      items3 = [closure_20(TextInput, obj7), ,];
      let tmp37Result4 = null;
      if (null == stateFromStores1) {
        let tmp37Result = null;
        if (first1 !== first3.GUILD_CATEGORY) {
          function handleTypeChange(arg0) {
            closure_11(arg0);
            closure_9(sanitizeChannelNameDefault(first, arg0));
          }
          const obj9 = { title: intl12.string(tmp4(createMode[29]).t["7ZcXG2"]), hasIcons: true, children: items4 };
          const TableRowGroup = tmp4(createMode[56]).TableRowGroup;
          intl12 = tmp4(createMode[29]).intl;
          const obj10 = {
            channelType: first3.GUILD_TEXT,
            selected: first1 === first3.GUILD_TEXT,
            isPrivate: first4,
            onPress: handleTypeChange,
          };
          items4 = [closure_20(closure_27, obj10), , , , , ,];
          obj11 = {
            channelType: first3.GUILD_VOICE,
            selected: first1 === first3.GUILD_VOICE,
            isPrivate: first4,
            onPress: handleTypeChange,
          };
          items4[1] = closure_20(closure_27, obj11);
          const obj12 = {
            channelType: first3.GUILD_FORUM,
            selected: first1 === first3.GUILD_FORUM,
            isPrivate: first4,
            onPress: handleTypeChange,
          };
          items4[2] = closure_20(closure_27, obj12);
          let tmp35Result = null;
          if (guildEligibleForMediaChannels) {
            const obj13 = {
              channelType: first3.GUILD_MEDIA,
              selected: first1 === first3.GUILD_MEDIA,
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
                channelType: first3.GUILD_ANNOUNCEMENT,
                selected: first1 === first3.GUILD_ANNOUNCEMENT,
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
                channelType: first3.GUILD_STAGE_VOICE,
                selected: first1 === first3.GUILD_STAGE_VOICE,
                isPrivate: first4,
                onPress: handleTypeChange,
              };
              tmp35Result8 = closure_20(closure_27, obj15);
            }
          }
          items4[5] = tmp35Result8;
          let tmp35Result9 = null;
          if (enabled) {
            const obj16 = {
              channelType: first3.GUILD_APP,
              selected: first1 === first3.GUILD_APP,
              isPrivate: first4,
              onPress: handleTypeChange,
            };
            tmp35Result9 = closure_20(closure_27, obj16);
          }
          items4[6] = tmp35Result9;
          tmp37Result = closure_22(TableRowGroup, obj9);
        }
        const items5 = [tmp37Result, , ,];
        let tmp35Result10 = null;
        if (first1 === first3.GUILD_APP) {
          const obj17 = { guildId, channelId: categoryId, selectedApplicationId: first2, onChange: tmp25 };
          tmp35Result10 = closure_20(require("AppChannelApplicationSelector"), obj17);
        }
        items5[1] = tmp35Result10;
        const obj18 = { guildId, channelType: first1 };
        items5[2] = closure_20(require("CreateChannelTypeDescription"), obj18);
        let tmp37Result3 = null;
        if (first1 !== first3.GUILD_STAGE_VOICE) {
          tmp37Result3 = null;
          if (createMode !== tmp4(createMode[47]).CreateChannelMode.PREMIUM_CHANNEL) {
            let stringResult3;
            let stringResult4;
            const TableRowGroup2 = tmp4(createMode[56]).TableRowGroup;
            if (first1 === first3.GUILD_CATEGORY) {
              const intl9 = tmp4(createMode[29]).intl;
              stringResult3 = intl9.string(tmp4(createMode[29]).t.RQUk61);
            } else {
              const tmp57 = canResult1(first1);
              const intl8 = tmp4(createMode[29]).intl;
              const string = intl8.string;
              const t = tmp4(createMode[29]).t;
              if (tmp57) {
                stringResult3 = string(t.cLjvKg);
              } else {
                stringResult3 = string(t.hfbjIH);
              }
            }
            const obj19 = { description: stringResult3, hasIcons: true, children: closure_20(TableSwitchRow, obj20) };
            TableSwitchRow = tmp4(createMode[59]).TableSwitchRow;
            if (first1 === first3.GUILD_CATEGORY) {
              const intl11 = tmp4(createMode[29]).intl;
              stringResult4 = intl11.string(tmp4(createMode[29]).t.lEPAZ5);
            } else {
              const intl10 = tmp4(createMode[29]).intl;
              stringResult4 = intl10.string(tmp4(createMode[29]).t.aUI70g);
            }
            obj20 = {
              label: stringResult4,
              icon: closure_20(tmp4(createMode[60]).LockIcon, {}),
              value: first4,
              onValueChange(arg0) {
                closure_17(arg0);
              },
            };
            const items6 = [closure_20(TableRowGroup2, obj19)];
            let tmp35Result11 = null;
            if (first4) {
              tmp35Result11 = null;
              const tmp4Result9 = tmp4(createMode[52]);
              if (!tmp4Result9.canCreatePrivateChannel(first1, canResult, canResult1)) {
                const obj21 = { style: tmp.errorMessage, children: closure_20(HelpMessage, obj22) };
                obj22 = {
                  messageType: tmp4(createMode[37]).HelpMessageTypes.ERROR,
                  children: tmp4Result10.getPrivateChannelHintText(first1),
                };
                HelpMessage = tmp4(createMode[37]).HelpMessage;
                tmp4Result10 = tmp4(createMode[52]);
                tmp35Result11 = closure_20(c6, obj21);
              }
            }
            const obj23 = { children: items6 };
            items6[1] = tmp35Result11;
            tmp37Result3 = closure_22(closure_21, obj23);
          }
        }
        const obj24 = { children: items5 };
        items5[3] = tmp37Result3;
        tmp37Result4 = closure_22(closure_21, obj24);
      }
      items3[1] = tmp37Result4;
      let tmp35Result12 = null;
      if (null != tmp14Result5[1].message) {
        const obj25 = { style: tmp.errorMessage, children: closure_20(HelpMessage2, obj26) };
        obj26 = { messageType: tmp4(createMode[37]).HelpMessageTypes.ERROR, children: tmp14Result5[1].message };
        HelpMessage2 = tmp4(createMode[37]).HelpMessage;
        tmp35Result12 = closure_20(c6, obj25);
      }
      items3[2] = tmp35Result12;
      return closure_20(tmp36, obj4);
    };
let closure_28 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let HelpMessage;
      let closure_1;
      let closure_8;
      let first;
      let id;
      let items;
      let obj7;
      let ref;
      let tmp23;
      let tmp26;
      let tmp31;
      let tmp6;
      let tmp8;
      _require = guildId;
      let tmp = _require;
      const tmp2 = dependencyMap;
      let obj = require("react");
      const cResult = obj.c(31);
      let tmp4 = closure_23();
      let obj2 = navigation;
      _slicedToArray = navigation.useRef(guildId);
      obj3 = require("useNavigation");
      navigation = obj3.useNavigation();
      if (cResult[0] !== guildId.guildId) {
        const guild = GuildStore.getGuild(guildId.guildId);
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
        tmp8 = tmp22;
        tmp6 = guild;
      } else {
        tmp6 = cResult[1];
        importDefault = cResult[2];
        tmp8 = cResult[3];
        dependencyMap = cResult[4];
      }
      let closure_5 = tmp8;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {};
        cResult[5] = obj4;
        tmp23 = obj4;
      } else {
        tmp23 = cResult[5];
      }
      [first, tmp26] = obj2.useState(tmp23);
      const tmp27 = _slicedToArray(useCreateChannelSubmitDefault(guildId.onChannelCreated), 3);
      const first1 = tmp27[0];
      isGuildOwner = tmp30;
      if (cResult[6] !== guildId) {
        const fn = function b() {
          ref.current = current;
        };
        cResult[6] = guildId;
        cResult[7] = fn;
        tmp31 = fn;
      } else {
        tmp31 = cResult[7];
      }
      const effect = obj2.useEffect(tmp31);
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp8) {
          if (cResult[10] === navigation) {
            if (cResult[11] === tmp27[2]) {
              if (cResult[12] === first) {
                let tmp33;
                if (cResult[13] === tmp9.id) {
                  tmp33 = cResult[14];
                }
                let closure_9 = tmp33;
                if (cResult[15] === tmp33) {
                  if (cResult[16] === navigation) {
                    if (cResult[17] === first) {
                      let tmp34;
                      let tmp35;
                      if (cResult[18] === first1) {
                        tmp34 = cResult[19];
                        tmp35 = cResult[20];
                      }
                      const layoutEffect = obj2.useLayoutEffect(tmp34, tmp35);
                      if (cResult[21] === tmp27[1].message) {
                        let tmp37;
                        if (cResult[22] === tmp4.errorMessage) {
                          tmp37 = cResult[23];
                        }
                        if (cResult[24] === tmp6) {
                          let tmp41;
                          if (cResult[25] === first) {
                            tmp41 = cResult[26];
                          }
                          if (cResult[27] === tmp4.addMembersContainer) {
                            if (cResult[28] === tmp37) {
                              let tmp45;
                              if (cResult[29] === tmp41) {
                                tmp45 = cResult[30];
                              }
                              return tmp45;
                            }
                          }
                          class X {
                            constructor() {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              channelType = closure_3.current.channelType;
                              intl = closure_0(closure_2[29]).intl;
                              closure_0 = intl.string(closure_0(closure_2[29]).t["5Wxrcd"]);
                              if (Object.keys(closure_6).length > 0) {
                                tmp3 = closure_1_14;
                                if (channelType === closure_1_14.GUILD_STAGE_VOICE) {
                                  intl3 = tmp(tmp2[29]).intl;
                                  stringResult = intl3.string(tmp(tmp2[29]).t.PDTjLN);
                                } else {
                                  intl2 = tmp(tmp2[29]).intl;
                                  stringResult = intl2.string(tmp(tmp2[29]).t.CumH4u);
                                }
                                closure_0 = stringResult;
                              }
                              obj = {
                                headerRight: closure_7
                                  ? () => closure_1_20(stringResult(id[49]).HeaderSubmittingIndicator, {})
                                  : () => {
                                      const obj = { text: stringResult, onPress };
                                      return closure_20(HeaderActionButton.HeaderActionButton, obj);
                                    },
                              };
                              setOptionsResult = closure_4.setOptions(obj);
                              return;
                            }
                          }
                          const obj5 = { style: tmp4.addMembersContainer, children: items };
                          items = [tmp37, tmp41];
                          const tmp47 = closure_22(first, obj5);
                          cResult[27] = tmp4.addMembersContainer;
                          cResult[28] = tmp37;
                          cResult[29] = tmp41;
                          cResult[30] = tmp47;
                          tmp45 = tmp47;
                        }
                        class X {
                          constructor() {
                            tmp = closure_0;
                            tmp2 = closure_2;
                            channelType = closure_3.current.channelType;
                            intl = closure_0(closure_2[29]).intl;
                            closure_0 = intl.string(closure_0(closure_2[29]).t["5Wxrcd"]);
                            if (Object.keys(closure_6).length > 0) {
                              tmp3 = closure_1_14;
                              if (channelType === closure_1_14.GUILD_STAGE_VOICE) {
                                intl3 = tmp(tmp2[29]).intl;
                                stringResult = intl3.string(tmp(tmp2[29]).t.PDTjLN);
                              } else {
                                intl2 = tmp(tmp2[29]).intl;
                                stringResult = intl2.string(tmp(tmp2[29]).t.CumH4u);
                              }
                              closure_0 = stringResult;
                            }
                            obj = {
                              headerRight: closure_7
                                ? () => closure_1_20(stringResult(id[49]).HeaderSubmittingIndicator, {})
                                : () => {
                                    const obj = { text: stringResult, onPress };
                                    return closure_20(HeaderActionButton.HeaderActionButton, obj);
                                  },
                            };
                            setOptionsResult = closure_4.setOptions(obj);
                            return;
                          }
                        }
                        tmp43[1] = tmp6;
                        tmp43[2] = first;
                        tmp43[3] = tmp26;
                        const tmp44 = closure_20(tmp(9230).AddMembersBody, tmp43);
                        cResult[24] = tmp6;
                        cResult[25] = first;
                        cResult[26] = tmp44;
                        tmp41 = tmp44;
                      }
                      class X {
                        constructor() {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          channelType = closure_3.current.channelType;
                          intl = closure_0(closure_2[29]).intl;
                          closure_0 = intl.string(closure_0(closure_2[29]).t["5Wxrcd"]);
                          if (Object.keys(closure_6).length > 0) {
                            tmp3 = closure_1_14;
                            if (channelType === closure_1_14.GUILD_STAGE_VOICE) {
                              intl3 = tmp(tmp2[29]).intl;
                              stringResult = intl3.string(tmp(tmp2[29]).t.PDTjLN);
                            } else {
                              intl2 = tmp(tmp2[29]).intl;
                              stringResult = intl2.string(tmp(tmp2[29]).t.CumH4u);
                            }
                            closure_0 = stringResult;
                          }
                          obj = {
                            headerRight: closure_7
                              ? () => closure_1_20(stringResult(id[49]).HeaderSubmittingIndicator, {})
                              : () => {
                                  const obj = { text: stringResult, onPress };
                                  return closure_20(HeaderActionButton.HeaderActionButton, obj);
                                },
                          };
                          setOptionsResult = closure_4.setOptions(obj);
                          return;
                        }
                      }
                      let tmp38 = null;
                      if (null != tmp27[1].message) {
                        tmp38 = null;
                        if ("" !== tmp27[1].message) {
                          const obj6 = { style: null, children: closure_20(HelpMessage, obj7) };
                          class X {
                            constructor() {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              channelType = closure_3.current.channelType;
                              intl = closure_0(closure_2[29]).intl;
                              closure_0 = intl.string(closure_0(closure_2[29]).t["5Wxrcd"]);
                              if (Object.keys(closure_6).length > 0) {
                                tmp3 = closure_1_14;
                                if (channelType === closure_1_14.GUILD_STAGE_VOICE) {
                                  intl3 = tmp(tmp2[29]).intl;
                                  stringResult = intl3.string(tmp(tmp2[29]).t.PDTjLN);
                                } else {
                                  intl2 = tmp(tmp2[29]).intl;
                                  stringResult = intl2.string(tmp(tmp2[29]).t.CumH4u);
                                }
                                closure_0 = stringResult;
                              }
                              obj = {
                                headerRight: closure_7
                                  ? () => closure_1_20(stringResult(id[49]).HeaderSubmittingIndicator, {})
                                  : () => {
                                      const obj = { text: stringResult, onPress };
                                      return closure_20(HeaderActionButton.HeaderActionButton, obj);
                                    },
                              };
                              setOptionsResult = closure_4.setOptions(obj);
                              return;
                            }
                          }
                          obj7 = { messageType: tmp(1188).HelpMessageTypes.ERROR, children: tmp27[1].message };
                          HelpMessage = tmp(1188).HelpMessage;
                          tmp38 = closure_20(first, obj6);
                        }
                      }
                      cResult[21] = tmp27[1].message;
                      cResult[22] = tmp4.errorMessage;
                      cResult[23] = tmp38;
                      tmp37 = tmp38;
                    }
                  }
                }
                class X {
                  constructor() {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    channelType = closure_3.current.channelType;
                    intl = closure_0(closure_2[29]).intl;
                    closure_0 = intl.string(closure_0(closure_2[29]).t["5Wxrcd"]);
                    if (Object.keys(closure_6).length > 0) {
                      tmp3 = closure_1_14;
                      if (channelType === closure_1_14.GUILD_STAGE_VOICE) {
                        intl3 = tmp(tmp2[29]).intl;
                        stringResult = intl3.string(tmp(tmp2[29]).t.PDTjLN);
                      } else {
                        intl2 = tmp(tmp2[29]).intl;
                        stringResult = intl2.string(tmp(tmp2[29]).t.CumH4u);
                      }
                      closure_0 = stringResult;
                    }
                    obj = {
                      headerRight: closure_7
                        ? () => closure_1_20(stringResult(id[49]).HeaderSubmittingIndicator, {})
                        : () => {
                            const obj = { text: stringResult, onPress };
                            return closure_20(HeaderActionButton.HeaderActionButton, obj);
                          },
                    };
                    setOptionsResult = closure_4.setOptions(obj);
                    return;
                  }
                }
                const items1 = [navigation, first, first1, tmp33];
                cResult[15] = tmp33;
                cResult[16] = navigation;
                cResult[17] = first;
                cResult[18] = first1;
                cResult[19] = X;
                cResult[20] = items1;
                tmp35 = items1;
                tmp34 = X;
              }
            }
          }
        }
      }
      class S {
        constructor() {
          current = closure_3.current;
          ({ guildId, channelType } = current);
          ({ name, categoryId, applicationId, onChannelCreated, flags } = current);
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[62]);
          result = obj.permissionOverwritesForRoles(guildId, channelType, [], true);
          closure_1 = result;
          values = Object.values(closure_6);
          item = values.forEach((row) => {
            row = row.row;
            const tmp = null != row.id && "" !== row.id;
            if (tmp) {
              if (row.rowType === constants.ROLE) {
                const push2 = result.push;
                const obj2 = current(id[62]);
                push2(obj2.permissionOverwriteForRole(row.id, channelType));
              } else if (row.rowType === tmp2.MEMBER) {
                const push = result.push;
                const obj = current(id[62]);
                push(obj.permissionOverwriteForUser(row.id, channelType));
              }
            }
          });
          tmp4 = closure_1 || closure_5;
          if (!tmp4) {
            push = result.push;
            tmpResult = tmp(tmp2[62]);
            tmp5 = closure_2;
            arr1 = push(tmpResult.permissionOverwriteForUser(closure_2.id, channelType));
          }
          obj1 = { overwrites: result, guildId, channelType, name, categoryId, applicationId, flags };
          if (channelType === ChannelTypes.GUILD_STAGE_VOICE) {
            tmp9 = closure_4;
            tmp10 = closure_31;
            obj5 = {};
            tmp11 = obj5;
            tmp12 = obj1;
            push2 = closure_4.push;
            ADD_MODERATORS = closure_31.ADD_MODERATORS;
            merged = Object.assign(obj1);
            obj5.guildId = guildId;
            obj5.onChannelCreated = onChannelCreated;
            push2Result = push2(ADD_MODERATORS, obj5);
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
      cResult[11] = tmp27[2];
      cResult[12] = first;
      cResult[13] = tmp9.id;
      cResult[14] = S;
      tmp33 = S;
    }
  : (guildId) => {
      let HelpMessage;
      let closure_8;
      let items2;
      let obj4;
      let ref;
      _require = guildId;
      let tmp = closure_23();
      importDefault = react.useRef(guildId);
      const tmp2 = _require;
      let obj = require("useNavigation");
      navigation = obj.useNavigation();
      const guild = GuildStore.getGuild(guildId.guildId);
      require("../../_runtime/metro/00038__.js")(null != guild, "Guild must not be null");
      const currentUser = UserStore.getCurrentUser();
      require("../../_runtime/metro/00038__.js")(null != currentUser, "AddMembers: user cannot be undefined");
      const canResult = PermissionStore.can(constants2.ADMINISTRATOR, guild);
      react = canResult;
      const tmp10 = isGuildOwner(guild, currentUser);
      let closure_5 = tmp10;
      const tmp11 = currentUser(react.useState({}), 2);
      const pendingAdditions = tmp11[0];
      const tmp13 = tmp11[1];
      const tmp14 = currentUser(require("useCreateChannelSubmit")(guildId.onChannelCreated), 3);
      const first1 = tmp14[0];
      isGuildOwner = tmp17;
      const effect = react.useEffect(() => {
        ref.current = current;
      });
      const items = [canResult, tmp10, navigation, tmp14[2], pendingAdditions, currentUser.id];
      const onPress = react.useCallback(() => {
        let applicationId;
        let categoryId;
        let channelType;
        let flags;
        let guildId;
        let name;
        let onChannelCreated;
        current = ref.current;
        ({ guildId, channelType } = current);
        ({ name, categoryId, applicationId, onChannelCreated, flags } = current);
        let obj = ChannelUtils;
        const result = obj.permissionOverwritesForRoles(guildId, channelType, [], true);
        const values = Object.values(first);
        const item = values.forEach((row) => {
          row = row.row;
          const tmp = null != row.id && "" !== row.id;
          if (tmp) {
            if (row.rowType === constants.ROLE) {
              const push2 = result.push;
              const obj2 = current(navigation[62]);
              push2(obj2.permissionOverwriteForRole(row.id, channelType));
            } else if (row.rowType === tmp2.MEMBER) {
              const push = result.push;
              const obj = current(navigation[62]);
              push(obj.permissionOverwriteForUser(row.id, channelType));
            }
          }
        });
        const tmp4 = react || closure_5;
        if (!tmp4) {
          let push = result.push;
          const tmpResult = ChannelUtils;
          push(tmpResult.permissionOverwriteForUser(currentUser.id, channelType));
        }
        let obj2 = { overwrites: result, guildId, channelType, name, categoryId, applicationId, flags };
        if (channelType === ChannelTypes.GUILD_STAGE_VOICE) {
          let push2 = navigation.push;
          const ADD_MODERATORS = constants2.ADD_MODERATORS;
          obj3 = { guildId, onChannelCreated };
          const merged = Object.assign(obj2);
          push2(ADD_MODERATORS, obj3);
        } else {
          closure_8(obj2);
        }
      }, items);
      const items1 = [navigation, pendingAdditions, first1, onPress];
      const layoutEffect = react.useLayoutEffect(() => {
        const channelType = ref.current.channelType;
        const intl = current(navigation[29]).intl;
        current = intl.string(current(navigation[29]).t["5Wxrcd"]);
        if (Object.keys(first).length > 0) {
          let stringResult;
          if (channelType === constants.GUILD_STAGE_VOICE) {
            const intl3 = tmp(navigation[29]).intl;
            stringResult = intl3.string(tmp(navigation[29]).t.PDTjLN);
          } else {
            const intl2 = tmp(navigation[29]).intl;
            stringResult = intl2.string(tmp(navigation[29]).t.CumH4u);
          }
          current = stringResult;
        }
        let obj = {
          headerRight: first1
            ? () => closure_1_20(stringResult(navigation[49]).HeaderSubmittingIndicator, {})
            : () => {
                const obj = { text: stringResult, onPress };
                return closure_20(HeaderActionButton.HeaderActionButton, obj);
              },
        };
        navigation.setOptions(obj);
      }, items1);
      let obj2 = { style: tmp.addMembersContainer, children: items2 };
      let tmp23 = null;
      if (null != tmp14[1].message) {
        tmp23 = null;
        if ("" !== tmp14[1].message) {
          obj3 = { style: tmp.errorMessage, children: closure_20(HelpMessage, obj4) };
          obj4 = { messageType: tmp2(navigation[37]).HelpMessageTypes.ERROR, children: tmp14[1].message };
          HelpMessage = tmp2(tmp3[37]).HelpMessage;
          tmp23 = closure_20(tmp22, obj3);
        }
      }
      items2 = [
        tmp23,
        closure_20(tmp2(navigation[63]).AddMembersBody, {
          channel: null,
          guild,
          pendingAdditions,
          setPendingAdditions: tmp13,
        }),
      ];
      return closure_22(pendingAdditions, obj2);
    };
const constants4 = { CREATE_CHANNEL: "CREATE_CHANNEL", ADD_MEMBERS: "ADD_MEMBERS", ADD_MODERATORS: "ADD_MODERATORS" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let initialStack;
      let screens;
      let tmp4;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] !== arg0) {
        const fn = function t() {
          let obj2;
          const obj = { name: constants.CREATE_CHANNEL, params: obj2 };
          obj2 = {};
          const merged = Object.assign(closure_0);
          const items = [obj];
          obj3 = { screens: getScreens(), initialStack: items };
          return obj3;
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      ({ screens, initialStack } = useInitialValueDefault(tmp4));
      useInitialValueDefault(tmp4);
      if (cResult[2] === initialStack) {
        let tmp6;
        if (cResult[3] === screens) {
          tmp6 = cResult[4];
        }
        return tmp6;
      }
      const tmp7 = closure_20(tmp(6496).Navigator, { screens, initialRouteStack: initialStack });
      cResult[2] = initialStack;
      cResult[3] = screens;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    }
  : (arg0) => {
      let closure_0;
      let initialStack;
      let screens;
      const f99835 = () => {
        let obj2;
        const obj = { name: constants.CREATE_CHANNEL, params: obj2 };
        obj2 = {};
        const merged = Object.assign(closure_0);
        const items = [obj];
        obj3 = { screens: getScreens(), initialStack: items };
        return obj3;
      };
      _require = arg0;
      ({ screens, initialStack } = useInitialValueDefault(f99835));
      useInitialValueDefault(f99835);
      return closure_20(require("Navigator").Navigator, { screens, initialRouteStack });
    };
let result = size.fileFinishedImporting("components_native/CreateChannelModal.tsx");

export default tmp6;
export const CreateChannel = tmp5;
