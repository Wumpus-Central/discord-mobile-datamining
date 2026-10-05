// discord_app/modules/voice_calls/native/action_sheet/VoiceMemberList.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import Constants2 from "../../../../../discord_common/js/shared/Constants.tsx";
import FormConstants from "../../../../design/void/Form/native/FormConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ActionSheetConstants from "../../../action_sheet/native/ActionSheetConstants.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import useIsVoiceChannelFullDefault from "../../useIsVoiceChannelFull.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09715_AssetRegistry.js";
import openGroupDMAddMembersDefault from "../../../group_dm/native/openGroupDMAddMembers.tsx";
import GuildEventVoiceBannerDefault from "../../../guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx";
import VoiceMemberEmbeddedActivity from "VoiceMemberEmbeddedActivity.tsx";
import VoiceMemberUser from "VoiceMemberUser.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import UserRecord from "../../../../records/UserRecord.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const VoiceMemberUserDefault = VoiceMemberUser;
let importDefault, set;

let c10;
let c9;
let closure_17;
let closure_18;
let closure_19;
let closure_23;
let closure_24;
let closure_25;
function renderSectionHeader(section) {
  const title = section.section.title;
  let tmp = null;
  if (null != title) {
    const obj = { title };
    tmp = closure_23(closure_30, obj);
  }
  return tmp;
}
function extractKey(id) {
  if (id instanceof UserRecord) {
    id = id.id;
  } else {
    const tmp = undefined !== id.url && undefined !== id.applicationId;
    if (tmp) {
      id = id.applicationId;
    } else {
      id = id.user.id;
    }
  }
  return id;
}
let closure_4 = ["channel", "isActionSheet", "disableFooter"];
let _slicedToArray = _slicedToArray_mod;
({ SectionList: c9, View: c10 } = react_native);
({ AnalyticsPages: closure_17, InstantInviteSources: closure_18, Permissions: closure_19 } = Constants);
const FORM_ROW_VERTICAL_PADDING = FormConstants.FORM_ROW_VERTICAL_PADDING;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const ThemeTypes = Constants2.ThemeTypes;
let Fragment = Fragment_mod;
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = Fragment);
let closure_26 = createStyles.createStyles({
  container: { flex: 1, flexShrink: 1 },
  sectionContainer: { paddingTop: 16, paddingHorizontal: 16 },
  sectionTitle: { lineHeight: 16 },
  voiceChannelContainer: { overflow: "hidden", flexGrow: 1, flexShrink: 1, minHeight: 1 },
  headerFormDivider: { marginLeft: 0 },
  rowFormDivider: { marginHorizontal: 16 },
});
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let tmp3;
        const obj = react2;
        const cResult = obj.c(2);
        channel = channel.channel;
        if (cResult[0] !== channel) {
          const obj2 = { channel };
          const tmp6 = closure_23(GuildEventVoiceBannerDefault, obj2);
          cResult[0] = channel;
          cResult[1] = tmp6;
          tmp3 = tmp6;
        } else {
          tmp3 = cResult[1];
        }
        return tmp3;
      }
    : (channel) => closure_23(GuildEventVoiceBannerDefault, { channel: channel.channel }),
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let intl;
        let items2;
        let tmp = channel;
        let obj = channel(576);
        const cResult = obj.c(9);
        channel = channel.channel;
        const tmp5 = useIsVoiceChannelFullDefault(channel);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [PermissionStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channel) {
          const fn = function o() {
            const tmp = PermissionStore.can(constants3.CREATE_INSTANT_INVITE, channel) || channel.isPrivate();
            return tmp;
          };
          const items1 = [channel];
          cResult[1] = channel;
          cResult[2] = fn;
          cResult[3] = items1;
        }
        tmp(504);
        let tmp12 = null;
        if (!tmp5) {
          tmp12 = null;
          if (tmp11) {
            let tmp13;
            let tmp18;
            let tmp17;
            let tmp22;
            const _Symbol = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp16 = closure_23(closure_29, {});
              cResult[4] = tmp16;
              tmp13 = tmp16;
            } else {
              tmp13 = cResult[4];
            }
            const _Symbol2 = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              let obj2 = {
                accessibilityLabel: intl.string(tmp(1126).t["6Qgrev"]),
                accessibilityHidden: true,
                source: AssetRegistryDefault,
                size: tmp(13272).CircularIconButton.Sizes.MEDIUM_32,
              };
              const CircularIconButton = tmp(13272).CircularIconButton;
              intl = tmp(1126).intl;
              const tmp20 = closure_23(CircularIconButton, obj2);
              const intl2 = tmp(1126).intl;
              const stringResult = intl2.string(tmp(1126).t["6Qgrev"]);
              cResult[5] = tmp20;
              cResult[6] = stringResult;
              tmp18 = stringResult;
              tmp17 = tmp20;
            } else {
              tmp17 = cResult[5];
              tmp18 = cResult[6];
            }
            if (cResult[7] !== channel) {
              const obj3 = { children: items2 };
              items2 = [tmp13];
              const Fragment = react.Fragment;
              const obj4 = {
                leading: tmp17,
                label: tmp18,
                onPress() {
                  if (channel.isPrivate()) {
                    openGroupDMAddMembersDefault(channel.id, constants.CHANNEL_CALL);
                  } else {
                    const obj2 = { source: constants2.VOICE_CHANNEL };
                    const obj = instant_invite_InstantInviteUtils;
                    const result = obj.showInstantInviteActionSheet(channel, obj2);
                  }
                },
              };
              items2[1] = closure_23(tmp(8895).FormRow, obj4);
              const tmp26 = closure_24(Fragment, obj3);
              cResult[7] = channel;
              cResult[8] = tmp26;
              tmp22 = tmp26;
            } else {
              tmp22 = cResult[8];
            }
            tmp12 = tmp22;
          }
        }
        return tmp12;
      }
    : (channel) => {
        let CircularIconButton;
        let intl;
        let intl2;
        let items;
        let obj3;
        channel = channel.channel;
        const tmp3 = useIsVoiceChannelFullDefault(channel);
        channel(504);
        [][0] = channel;
        let tmp7 = null;
        if (!tmp3) {
          tmp7 = null;
          if (tmp6) {
            let obj = { children: items };
            const Fragment = react.Fragment;
            items = [closure_23(closure_29, {})];
            let obj2 = {
              leading: closure_23(CircularIconButton, obj3),
              label: intl2.string(channel(1126).t["6Qgrev"]),
              onPress() {
                if (channel.isPrivate()) {
                  openGroupDMAddMembersDefault(channel.id, constants.CHANNEL_CALL);
                } else {
                  const obj2 = { source: constants2.VOICE_CHANNEL };
                  const obj = instant_invite_InstantInviteUtils;
                  const result = obj.showInstantInviteActionSheet(channel, obj2);
                }
              },
            };
            const FormRow = tmp4(8895).FormRow;
            obj3 = {
              accessibilityLabel: intl.string(channel(1126).t["6Qgrev"]),
              accessibilityHidden: true,
              source: AssetRegistryDefault,
              size: channel(13272).CircularIconButton.Sizes.MEDIUM_32,
            };
            CircularIconButton = tmp4(13272).CircularIconButton;
            intl = tmp4(1126).intl;
            intl2 = tmp4(1126).intl;
            items[1] = closure_23(FormRow, obj2);
            tmp7 = closure_24(Fragment, obj);
          }
        }
        return tmp7;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp4 = closure_26();
      if (cResult[0] !== tmp4.rowFormDivider) {
        const obj2 = { style: tmp4.rowFormDivider };
        const tmp7 = closure_23(Form.FormDivider, obj2);
        cResult[0] = tmp4.rowFormDivider;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const obj = { style: closure_26().rowFormDivider };
      return closure_23(Form.FormDivider, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? (title) => {
      let sectionContainer;
      let sectionTitle;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(8);
      const tmp4 = closure_26();
      ({ sectionContainer, sectionTitle } = tmp4);
      if (cResult[0] !== title.title) {
        const formatted = str.toUpperCase();
        cResult[0] = title.title;
        cResult[1] = formatted;
        tmp5 = formatted;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.sectionTitle) {
        let tmp7;
        if (cResult[3] === tmp5) {
          tmp7 = cResult[4];
        }
        if (cResult[5] === tmp4.sectionContainer) {
          let tmp9;
          if (cResult[6] === tmp7) {
            tmp9 = cResult[7];
          }
          return tmp9;
        }
        const obj2 = { style: sectionContainer, children: tmp7 };
        const tmp12 = closure_23(authStore, obj2);
        cResult[5] = tmp4.sectionContainer;
        cResult[6] = tmp7;
        cResult[7] = tmp12;
        tmp9 = tmp12;
      }
      const tmp8 = closure_23(Text_Text.Text, {
        style: sectionTitle,
        variant: "text-xs/bold",
        color: "text-default",
        children: tmp5,
      });
      cResult[2] = tmp4.sectionTitle;
      cResult[3] = tmp5;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : (title) => {
      let Text;
      let obj2;
      const str = title.title;
      const tmp = closure_26();
      const obj = { style: tmp.sectionContainer, children: closure_23(Text, obj2) };
      obj2 = { style: tmp.sectionTitle, variant: "text-xs/bold", color: "text-default", children: str.toUpperCase() };
      Text = Text_Text.Text;
      return closure_23(authStore, obj);
    };
const constants4 = { VOICE: 0, [0]: "VOICE", SPECTATING: 1, [1]: "SPECTATING", DISCONNECTED: 2, [2]: "DISCONNECTED" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channelId;
      let isActionSheet;
      let item;
      let onPressUser;
      let obj = isActionSheet(576);
      const cResult = obj.c(13);
      ({ item, channelId, onPressUser, isActionSheet } = arg0);
      const obj2 = isActionSheet(9101);
      const analyticsContext = obj2.useAnalyticsContext();
      const tmp4 = analyticsContext;
      let analyticsLocations = analyticsContext(6657)().analyticsLocations;
      const tmp5 = undefined !== item.url && undefined !== item.applicationId;
      if (tmp5) {
        if (cResult[0] === analyticsContext) {
          if (cResult[1] === analyticsLocations) {
            let tmp13;
            if (cResult[2] === isActionSheet) {
              tmp13 = cResult[3];
            }
            if (cResult[4] === channelId) {
              if (cResult[5] === isActionSheet) {
                if (cResult[6] === tmp13) {
                  let tmp15;
                  if (cResult[7] === item) {
                    tmp15 = cResult[8];
                  }
                  return tmp15;
                }
              }
            }
            let obj3 = { embeddedActivity: item, channelId, onItemPress: tmp13, isActionSheet };
            const tmp17 = closure_23(tmp4(13596), obj3);
            cResult[4] = channelId;
            cResult[5] = isActionSheet;
            cResult[6] = tmp13;
            cResult[7] = item;
            cResult[8] = tmp17;
            tmp15 = tmp17;
          }
        }
        let closure_0 = _asyncToGenerator(async (arg0, arg1, analyticsLocations) => {
          closure_0 = arg0;
          const _location = arg1;
          let c5 = 0;
          let c6 = 0;
          return (async (arg0, value, arg2) => {
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                return { value, done: true };
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c6 = 2;
                if (0 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    return { value, done: true };
                  } else {
                    closure_4 = tmp;
                    closure_3 = tmp4;
                    const tmp12 = null != closure_0 && null != _location && null != analyticsLocations;
                    if (tmp12) {
                      const obj3 = closure_2_2(closure_2_3[31]);
                      const result = obj3.dismissGlobalKeyboard();
                      const obj4 = analyticsContext(closure_2_3[32]);
                      const voiceChannel = obj4.selectVoiceChannel(closure_0.id);
                      c5 = 1;
                      c6 = 1;
                      const obj6 = {
                        applicationId: analyticsLocations.applicationId,
                        activityChannelId: closure_0.id,
                        locationObject: _location.location,
                        analyticsLocations,
                      };
                      const obj7 = { value: analyticsContext(closure_2_3[33])(obj6), done: false };
                      return obj7;
                    }
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  return { value, done: true };
                } else if (closure_0) {
                  const obj = closure_0(closure_2_3[34]);
                  const result1 = obj.hideVoiceChannelActionSheet(closure_0);
                }
                c6 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp22) {
                c6 = 3;
                throw tmp22;
              }
            }
          })();
        });
        function onItemPress() {
          return closure_0(...arguments);
        }
        cResult[0] = analyticsContext;
        cResult[1] = analyticsLocations;
        cResult[2] = isActionSheet;
        cResult[3] = onItemPress;
        tmp13 = onItemPress;
      } else {
        if (cResult[9] === isActionSheet) {
          if (cResult[10] === onPressUser) {
            let tmp6;
            if (cResult[11] === item) {
              tmp6 = cResult[12];
            }
            return tmp6;
          }
        }
        let obj4 = { onPress: onPressUser, isActionSheet };
        const tmp4Result = tmp4(13597);
        const merged = Object.assign(item);
        let tmp12 = closure_23(tmp4Result, obj4);
        cResult[9] = isActionSheet;
        cResult[10] = onPressUser;
        cResult[11] = item;
        cResult[12] = tmp12;
        tmp6 = tmp12;
      }
    }
  : (arg0) => {
      let channelId;
      let closure_1;
      let isActionSheet;
      let item;
      let obj;
      let onPressUser;
      ({ item, isActionSheet } = arg0);
      const tmp = obj;
      ({ channelId, onPressUser } = arg0);
      obj = isActionSheet(obj[29]);
      importDefault = obj.useAnalyticsContext();
      let analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
      const tmp3 = undefined !== item.url && undefined !== item.applicationId;
      if (tmp3) {
        obj = function _onItemPress2() {
          obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
            let closure_2;
            let closure_0 = arg0;
            _location = arg1;
            analyticsLocations = arg2;
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let closure_3;
                c6 = 2;
                if (0 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else {
                    closure_4 = tmp;
                    closure_3 = tmp4;
                    const tmp12 = null != closure_0 && null != _location && null != analyticsLocations;
                    if (tmp12) {
                      const obj3 = analyticsLocations(closure_3[31]);
                      const result = obj3.dismissGlobalKeyboard();
                      const obj4 = _location(closure_3[32]);
                      const voiceChannel = obj4.selectVoiceChannel(closure_0.id);
                      const obj6 = {
                        applicationId: analyticsLocations.applicationId,
                        activityChannelId: closure_0.id,
                        locationObject: _location.location,
                        analyticsLocations,
                      };
                      c5 = 1;
                      c6 = 1;
                      const obj7 = { value: _location(closure_3[33])(obj6), done: false };
                      return obj7;
                    }
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                } else if (closure_132_0) {
                  obj = closure_0(closure_3[34]);
                  const result1 = obj.hideVoiceChannelActionSheet(closure_0);
                }
                c6 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp22) {
                c6 = 3;
                throw tmp22;
              }
            }
          });
          return obj(...arguments);
        };
        let obj2 = {
          embeddedActivity: item,
          channelId,
          onItemPress(arg0, arg1, arg2) {
            return obj(...arguments);
          },
          isActionSheet,
        };
        return closure_23(require("VoiceMemberEmbeddedActivity"), obj2);
      } else {
        let obj3 = { onPress: onPressUser, isActionSheet };
        const tmp2Result = require("VoiceMemberUser");
        const merged = Object.assign(item);
        return closure_23(tmp2Result, obj3);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = react.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoiceMemberList(channel, arg1) {
        let _require;
        let analyticsLocations;
        let bound;
        let disableFooter;
        let isActionSheet;
        let obj2;
        let reduced;
        let stateFromStoresArray;
        let tmp13;
        let tmp16;
        let tmp18;
        let tmp22;
        let tmp25;
        let tmp5;
        let tmp = _require;
        let obj = require("react");
        const cResult = obj.c(88);
        if (cResult[0] !== channel) {
          channel = channel.channel;
          _require = channel;
          ({ isActionSheet, disableFooter } = channel);
          const tmp7 = stateFromStoresArray;
          const tmp9 = stateFromStoresArray(channel, bound);
          cResult[0] = channel;
          cResult[1] = channel;
          cResult[2] = tmp9;
          cResult[3] = isActionSheet;
          cResult[4] = disableFooter;
          tmp5 = isActionSheet;
          let tmp4 = tmp9;
          obj2 = channel;
        } else {
          _require = cResult[1];
          tmp4 = cResult[2];
          tmp5 = cResult[3];
        }
        importDefault = undefined === tmp5 || tmp5;
        const rowFormDivider = closure_26();
        let tmp11 = importDefault;
        closure_26();
        analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
        bound = Math.min(require("useWindowDimensions")().width, ACTION_SHEET_MAX_WIDTH);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [SortedVoiceStateStore];
          cResult[5] = items;
          tmp13 = items;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] !== obj2) {
          class P {
            constructor() {
              return SortedVoiceStateStore.getVoiceStatesForChannel(channel);
            }
          }
          const items1 = [obj2];
          cResult[6] = obj2;
          cResult[7] = P;
          cResult[8] = items1;
          tmp16 = items1;
        } else {
          class P {
            constructor() {
              return SortedVoiceStateStore.getVoiceStatesForChannel(channel);
            }
          }
          tmp16 = cResult[8];
        }
        const tmpResult = tmp(analyticsLocations[21]);
        const stateFromStores = tmpResult.useStateFromStores(tmp13, P, tmp16);
        const tmp17 = tmp11(analyticsLocations[38])(obj2);
        const ownerId = tmp17;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              return SortedVoiceStateStore.getVoiceStatesForChannel(channel);
            }
          }
          const items2 = [ApplicationStreamingStore];
          cResult[9] = items2;
          tmp18 = items2;
        } else {
          class P {
            constructor() {
              return SortedVoiceStateStore.getVoiceStatesForChannel(channel);
            }
          }
        }
        if (cResult[10] !== tmp17) {
          class P {
            constructor() {
              return SortedVoiceStateStore.getVoiceStatesForChannel(channel);
            }
          }
          cResult[10] = tmp17;
          cResult[11] = tmp20;
        } else {
          class P {
            constructor() {
              return SortedVoiceStateStore.getVoiceStatesForChannel(channel);
            }
          }
        }
        const tmpResult4 = tmp(analyticsLocations[21]);
        stateFromStoresArray = tmpResult4.useStateFromStoresArray(tmp18, tmp20);
        if (cResult[12] !== obj2.id) {
          class P {
            constructor() {
              return SortedVoiceStateStore.getVoiceStatesForChannel(channel);
            }
          }
          const voiceChannelKey = obj5.getVoiceChannelKey(obj2.id);
          cResult[12] = obj2.id;
          cResult[13] = voiceChannelKey;
          tmp22 = voiceChannelKey;
        } else {
          class P {
            constructor() {
              return SortedVoiceStateStore.getVoiceStatesForChannel(channel);
            }
          }
        }
        const tmpResult5 = tmp(analyticsLocations[39]);
        const isModalOpen = tmpResult5.useIsModalOpen(tmp22);
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              return SortedVoiceStateStore.getVoiceStatesForChannel(channel);
            }
          }
          const items3 = [EmbeddedActivitiesStore];
          cResult[14] = items3;
          tmp25 = items3;
        } else {
          class P {
            constructor() {
              return SortedVoiceStateStore.getVoiceStatesForChannel(channel);
            }
          }
        }
        if (cResult[15] !== obj2.id) {
          class Z {
            constructor() {
              return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
            }
          }
          cResult[15] = obj2.id;
          cResult[16] = Z;
        } else {
          class Z {
            constructor() {
              return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
            }
          }
        }
        const tmpResult6 = tmp(analyticsLocations[21]);
        const stateFromStores1 = tmpResult6.useStateFromStores(tmp25, Z);
        if (cResult[17] !== stateFromStores) {
          class Z {
            constructor() {
              return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
            }
          }
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            class Z {
              constructor() {
                return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
              }
            }
            cResult[19] = tmp29;
          } else {
            class Z {
              constructor() {
                return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
              }
            }
          }
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set(stateFromStores.map(tmp29));
          cResult[17] = stateFromStores;
          cResult[18] = set;
        } else {
          class Z {
            constructor() {
              return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
            }
          }
        }
        set = tmp27;
        if (cResult[20] === obj2) {
          class Z {
            constructor() {
              return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
            }
          }
          if (cResult[23] === arr6) {
            class Z {
              constructor() {
                return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
              }
            }
          }
          const items4 = [];
          if (null != tmp17) {
            class Z {
              constructor() {
                return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
              }
            }
          }
          if (cResult[38] === stateFromStores1) {
            class Z {
              constructor() {
                return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
              }
            }
            if (cResult[41] !== tmp34) {
              class Z {
                constructor() {
                  return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
                }
              }
              tmp37[0] = constants4.VOICE;
              tmp37[2] = tmp34;
              cResult[41] = tmp34;
              cResult[42] = tmp37;
            } else {
              class Z {
                constructor() {
                  return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
                }
              }
            }
            let arr = items4.push(tmp37);
            if (arr6.length > 0) {
              class Z {
                constructor() {
                  return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
                }
              }
              items4.push(tmp40);
            }
          }
          const combined = stateFromStores1.concat(stateFromStores);
          cResult[38] = stateFromStores1;
          cResult[39] = stateFromStores;
          cResult[40] = combined;
        }
        if (obj2.isPrivate()) {
          class Z {
            constructor() {
              return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
            }
          }
          reduced = arr7.reduce((arr, item) => {
            user = UserStore.getUser(item);
            const hasItem = null == user || set.has(user.id);
            if (!hasItem) {
              arr = arr.push(user);
            }
            return arr;
          }, []);
        } else {
          class Z {
            constructor() {
              return EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
            }
          }
        }
        cResult[20] = obj2;
        cResult[21] = tmp27;
        cResult[22] = reduced;
      }
    : function VoiceMemberList(channel, ref) {
        let arr10;
        let arr11;
        let intl;
        let intl2;
        let intl3;
        let items8;
        let obj10;
        let obj16;
        let obj6;
        let ownerId;
        let reduced;
        let tmp25Result2;
        const f115092 = (user) => stateFromStoresArray.includes(user.user.id);
        channel = channel.channel;
        let flag = channel.isActionSheet;
        if (flag === undefined) {
          flag = true;
        }
        let flag2 = channel.disableFooter;
        if (flag2 === undefined) {
          flag2 = false;
        }
        let merged = Object.assign(channel, Object.assign({ channel: 0, isActionSheet: 0, disableFooter: 0 }));
        let analyticsLocations;
        let items5;
        let callback;
        let callback1;
        const tmp2 = closure_26();
        const rowFormDivider = tmp2;
        let tmp4 = analyticsLocations;
        analyticsLocations = flag(analyticsLocations[30])().analyticsLocations;
        closure_4 = Math.min(flag(analyticsLocations[37])().width, ACTION_SHEET_MAX_WIDTH);
        let obj = channel(analyticsLocations[21]);
        let items = [SortedVoiceStateStore];
        const items1 = [channel];
        const stateFromStores = obj.useStateFromStores(
          items,
          () => SortedVoiceStateStore.getVoiceStatesForChannel(channel),
          items1,
        );
        const tmp6 = flag(analyticsLocations[38])(channel);
        _slicedToArray = tmp6;
        let obj2 = channel(analyticsLocations[21]);
        const items2 = [ApplicationStreamingStore];
        const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
          let viewerIds;
          if (null != ownerId) {
            viewerIds = ApplicationStreamingStore.getViewerIds(tmp);
          } else {
            viewerIds = [];
          }
          return viewerIds;
        });
        const useIsModalOpen = channel(analyticsLocations[39]).useIsModalOpen;
        channel(analyticsLocations[39]);
        let obj3 = channel(analyticsLocations[34]);
        const isModalOpen = useIsModalOpen(obj3.getVoiceChannelKey(channel.id));
        const items3 = [EmbeddedActivitiesStore];
        const obj4 = channel(analyticsLocations[21]);
        const stateFromStores1 = obj4.useStateFromStores(items3, () =>
          EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id),
        );
        set = new Set(stateFromStores.map((voiceState) => voiceState.voiceState.userId));
        const items4 = [];
        if (channel.isPrivate()) {
          const recipients = channel.recipients;
          reduced = recipients.reduce((arr, item) => {
            user = UserStore.getUser(item);
            const hasItem = null == user || set.has(user.id);
            if (!hasItem) {
              arr = arr.push(user);
            }
            return arr;
          }, items4);
        } else {
          reduced = items4;
        }
        items5 = [];
        if (null != tmp6) {
          if (null != stateFromStoresArray) {
            let tmp25Result;
            if (isModalOpen) {
              const found = stateFromStores.find((user) => user.user.id === ownerId.ownerId);
              let str;
              if (found != null) {
                str = found.nick;
              }
              if (str == null) {
                str = "";
              }
              const tmp3Result = flag(tmp4[40]);
              [arr10, arr11] = tmp3Result.partition(stateFromStores, f115092);
              _slicedToArray(tmp3Result.partition(stateFromStores, f115092), 2);
              if (arr10.length > 0) {
                const push = items5.push;
                const obj5 = {
                  type: constants4.SPECTATING,
                  title: intl.formatToPlainString(channel(tmp4[23]).t.Fb0eT9, obj6),
                  data: arr10,
                };
                intl = tmp5(tmp4[23]).intl;
                obj6 = { username: str };
                let arr = push(obj5);
              }
              if (arr11.length > 0) {
                const push2 = items5.push;
                const obj7 = {
                  type: constants4.VOICE,
                  title: intl2.string(channel(tmp4[23]).t.C7iIKB),
                  data: stateFromStores1.concat(arr11),
                };
                intl2 = tmp5(tmp4[23]).intl;
                push2(obj7);
              }
              if (reduced.length > 0) {
                const push3 = items5.push;
                const obj8 = {
                  type: constants4.DISCONNECTED,
                  title: intl3.string(channel(tmp4[23]).t.BnSq1I),
                  data: reduced,
                };
                intl3 = tmp5(tmp4[23]).intl;
                push3(obj8);
              }
            }
            const items6 = [channel.id, analyticsLocations];
            callback = items5.useCallback((id) => {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              const obj2 = {
                userId: id.id,
                channelId: channel.id,
                isVoiceContext: true,
                sourceAnalyticsLocations: analyticsLocations,
              };
              showUserProfileActionSheetDefault(obj2);
            }, items6);
            const items7 = [channel, flag, callback];
            callback1 = items5.useCallback((item) => {
              item = item.item;
              const type = item.section.type;
              if (constants.VOICE === type) {
                let tmp18 = null;
                if (!(item instanceof UserRecord)) {
                  const obj2 = { item, channelId: channel.id, onPressUser: onPress, isActionSheet: flag };
                  tmp18 = closure_23(closure_34, obj2);
                }
                return tmp18;
              } else if (constants.SPECTATING === type) {
                const obj3 = { onPress, isSpectating: true, isActionSheet: true };
                const tmp11 = VoiceMemberUserDefault;
                const merged = Object.assign(item);
                return closure_23(tmp11, obj3);
              } else if (constants.DISCONNECTED === type) {
                const obj = { user: item, channel, isActionSheet: flag, onPress };
                return closure_23(VoiceMemberUser.DisconnectedUserRow, obj);
              }
            }, items7);
            if (flag) {
              const obj9 = { theme: ThemeTypes.DARK, children: closure_24(callback1, obj10) };
              obj10 = { style: tmp2.container, children: items8 };
              const ThemeContextProvider = tmp5(tmp4[45]).ThemeContextProvider;
              const obj11 = { channel };
              items8 = [closure_23(tmp5(tmp4[43]).VoiceChannelHeader, obj11), ,];
              const obj12 = { style: tmp2.headerFormDivider };
              items8[1] = closure_23(channel(tmp4[25]).FormDivider, obj12);
              const obj13 = {
                inActionSheet: true,
                style: tmp2.voiceChannelContainer,
                renderItem: function renderRow(arg0, arg1) {
                  let items;
                  if (null == items5[arg0].data[arg1]) {
                    return null;
                  } else {
                    const obj = { item: items5[arg0].data[arg1], section: tmp[arg0] };
                    const obj2 = { children: items };
                    items = [callback1(obj)];
                    const obj3 = { style: rowFormDivider.rowFormDivider };
                    items[1] = closure_23(Form.FormDivider, obj3);
                    return closure_24(closure_25, obj2);
                  }
                },
                itemSize: function getRowHeight(arg0, arg1) {
                  if (null == arg1) {
                    return 0;
                  } else if (null == items5[arg0].data[arg1]) {
                    return 0;
                  } else {
                    const diff = closure_4 - 2 * VoiceMemberUser.STREAM_PREVIEW_MARGIN;
                    const sum = FORM_ROW_VERTICAL_PADDING + 32;
                    let tmp4 = sum;
                    if (!(items5[arg0].data[arg1] instanceof UserRecord)) {
                      let result;
                      const tmp =
                        undefined !== items5[arg0].data[arg1].url &&
                        undefined !== items5[arg0].data[arg1].applicationId;
                      if (tmp) {
                        const tmp9Result = VoiceMemberEmbeddedActivity;
                        result = tmp9Result.calculateActivityRowHeight(closure_4);
                      } else {
                        const voiceState = tmp7.voiceState;
                        let selfStream;
                        if (voiceState != null) {
                          selfStream = voiceState.selfStream;
                        }
                        result = sum;
                        if (selfStream) {
                          result = sum + tmp12;
                        }
                      }
                      tmp4 = result;
                    }
                    return tmp4;
                  }
                },
                sections: items5.map((data) => data.data.length),
              };
              const tmp3Result2 = flag(tmp4[44]);
              const merged1 = Object.assign(merged);
              items8[2] = closure_23(tmp3Result2, obj13);
              tmp25Result = closure_23(ThemeContextProvider, obj9);
            } else {
              const obj14 = {
                ref,
                sections: items5,
                renderSectionHeader,
                renderItem: callback1,
                keyExtractor: extractKey,
                ItemSeparatorComponent,
                ListFooterComponent: tmp25Result2,
                ListHeaderComponent: closure_23(closure_27, obj16),
                stickySectionHeadersEnabled: false,
              };
              tmp25Result2 = null;
              const tmp27 = callback;
              if (!flag2) {
                const obj15 = { channel };
                tmp25Result2 = closure_23(closure_28, obj15);
              }
              obj16 = { channel };
              const merged2 = Object.assign(merged);
              tmp25Result = closure_23(tmp27, obj14);
            }
            return tmp25Result;
          }
        }
        const obj17 = { type: constants4.VOICE, title: null, data: stateFromStores1.concat(stateFromStores) };
        items5.push(obj17);
        if (reduced.length > 0) {
          const obj18 = { type: constants4.DISCONNECTED, title: null, data: reduced };
          items5.push(obj18);
        }
      },
);
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberList.tsx");

export default forwardRefResult;
