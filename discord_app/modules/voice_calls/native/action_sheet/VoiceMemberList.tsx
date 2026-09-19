// === Module 14046: VoiceMemberList ===

// Module 14046 (VoiceMemberList)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import Text_Text from "Text/Text" /* 4752 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7402 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8447 */;
import Form from "Form" /* 8870 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10075 */;
import _modDef10287 from "module_10287" /* 10287 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11839 */;
import GuildEventVoiceBannerDefault from "GuildEventVoiceBanner" /* 14042 */;
import VoiceMemberUser from "VoiceMemberUser" /* 14048 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;
import UserRecord from "UserRecord" /* 1386 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4778 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import UserStore from "UserStore" /* 1372 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4780 */;

const VoiceMemberUserDefault = VoiceMemberUser;

require = fn;
function ItemSeparator() {
  const tmp = closure_24();
  return __initData(Form.FormDivider, { style: closure_24().rowFormDivider });
}
function VoiceMemberListSectionHeader(title) {
  const tmp = closure_24();
  const obj = { style: tmp.sectionContainer, children: __initData(Text_Text.Text, { style: tmp.sectionTitle, variant: "text-xs/bold", color: "text-default", children: title.title.toUpperCase() }) };
  return __initData(React6, obj);
}
function renderSectionHeader(section) {
  const title = section.section.title;
  let tmp = null;
  if (null != title) {
    const obj = { title };
    tmp = __initData(VoiceMemberListSectionHeader, obj);
  }
  return tmp;
}
function extractKey(id) {
  if (id instanceof UserRecord) {
    id = id.id;
  } else {
    if (tmp) {
      id = id.applicationId;
    } else {
      id = id.user.id;
    }
    tmp = undefined !== id.url && undefined !== id.applicationId;
  }
  return id;
}
function VoiceSectionRow(arg0) {
  ({ item, isActionSheet } = arg0);
  ({ channelId, onPressUser } = arg0);
  importDefault = isActionSheet(9705).useAnalyticsContext();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  if (tmp3) {
    dependencyMap = async function _onItemPress(arg0) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
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
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_4 = tmp2;
              closure_131_0 = isActionSheet;
              let tmp13 = null != isActionSheet;
              if (tmp13) {
                tmp13 = null != closure_1;
              }
              if (tmp13) {
                tmp13 = null != analyticsLocations;
              }
              if (tmp13) {
                const result = analyticsLocations(tmp5[28]).dismissGlobalKeyboard();
                const obj3 = analyticsLocations(tmp5[28]);
                const voiceChannel = closure_1(tmp5[29]).selectVoiceChannel(isActionSheet.id);
                const obj6 = { applicationId: analyticsLocations.applicationId, activityChannelId: isActionSheet.id, locationObject: _location.location, analyticsLocations };
                c5 = 1;
                c6 = 1;
                const obj7 = { value: closure_1(tmp5[30])(obj6), done: false };
                return obj7;
              } else {
                c6 = 3;
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (closure_132_0) {
              const result1 = isActionSheet(tmp5[31]).hideVoiceChannelActionSheet(closure_131_0);
              const obj = isActionSheet(tmp5[31]);
            }
          }
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } catch (tmp23) {
          c6 = tmp;
          throw tmp23;
        }
      }
    };
    let obj2 = {
      embeddedActivity: item,
      channelId,
      onItemPress(application, arg1, stateFromStores) {
          const self = this;
          const apply = closure_3.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
      isActionSheet
    };
    return closure_21(tmp2(14047), obj2);
  } else {
    let obj3 = {};
    const merged = Object.assign(item);
    obj3.onPress = onPressUser;
    obj3.isActionSheet = isActionSheet;
    return closure_21(tmp2(14048), obj3);
  }
  let obj = isActionSheet(9705);
  tmp3 = undefined !== item.url && undefined !== item.applicationId;
}
get_ActivityIndicator = fn(17);
({ SectionList: closure_7, View: closure_8 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticsPages: closure_15, InstantInviteSources: closure_16, Permissions: closure_17 } = Constants);
const FORM_ROW_VERTICAL_PADDING = fn(1181).FORM_ROW_VERTICAL_PADDING;
const ACTION_SHEET_MAX_WIDTH = fn(7391).ACTION_SHEET_MAX_WIDTH;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
const createStyles = fn(4756);
let closure_24 = createStyles.createStyles({ container: { flex: 1, flexShrink: 1 }, sectionContainer: { paddingTop: 16, paddingHorizontal: 16 }, sectionTitle: { lineHeight: 16 }, voiceChannelContainer: { overflow: "hidden", flexGrow: 1, flexShrink: 1, minHeight: 1 }, headerFormDivider: { marginLeft: 0 }, rowFormDivider: { marginHorizontal: 16 } });
let closure_25 = noop.memo((channel) => __initData(GuildEventVoiceBannerDefault, { channel: channel.channel }));
let closure_26 = noop.memo((channel) => {
  channel = channel.channel;
  channel(504);
  [][0] = channel;
  let tmp7 = null;
  if (!tmp3) {
    tmp7 = null;
    if (tmp6) {
      let obj = { children: null };
      const items = [closure_21(ItemSeparator, {}), ];
      let obj2 = { leading: null, label: null, onPress: null };
      const obj3 = { accessibilityLabel: null, accessibilityHidden: true, source: null, size: null };
      const intl = tmp4(1115).intl;
      obj3.accessibilityLabel = intl.string(tmp4(1115).t["6Qgrev"]);
      obj3.source = _modDef10287;
      obj3.size = tmp4(13725).CircularIconButton.Sizes.MEDIUM_32;
      obj2.leading = closure_21(tmp4(13725).CircularIconButton, obj3);
      const intl2 = tmp4(1115).intl;
      obj2.label = intl2.string(tmp4(1115).t["6Qgrev"]);
      obj2.onPress = function onPress() {
        if (channel.isPrivate()) {
          openGroupDMAddMembersDefault(channel.id, constants.CHANNEL_CALL);
        } else {
          const obj2 = { source: constants2.VOICE_CHANNEL };
          const result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, obj2);
        }
      };
      items[1] = closure_21(tmp4(8870).FormRow, obj2);
      obj.children = items;
      tmp7 = closure_22(noop.Fragment, obj);
    }
  }
  return tmp7;
});
const constants4 = { VOICE: 0, [0]: "VOICE", SPECTATING: 1, [1]: "SPECTATING", DISCONNECTED: 2, [2]: "DISCONNECTED" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberList.tsx");

export default noop.forwardRef(function VoiceMemberList(channel, ref) {
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
  const tmp2 = closure_24();
  const rowFormDivider = tmp2;
  analyticsLocations = flag(analyticsLocations[27])().analyticsLocations;
  _slicedToArray = Math.min(flag(analyticsLocations[34])().width, ACTION_SHEET_MAX_WIDTH);
  let items = [SortedVoiceStateStore];
  const items1 = [channel];
  const stateFromStores = channel(analyticsLocations[18]).useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStatesForChannel(channel), items1);
  const tmp6 = flag(analyticsLocations[35])(channel);
  const ownerId = tmp6;
  let obj = channel(analyticsLocations[18]);
  const items2 = [ApplicationStreamingStore];
  const stateFromStoresArray = channel(analyticsLocations[18]).useStateFromStoresArray(items2, () => {
    if (null != closure_5) {
      let viewerIds = ApplicationStreamingStore.getViewerIds(tmp);
    } else {
      viewerIds = [];
    }
    return viewerIds;
  });
  let obj2 = channel(analyticsLocations[18]);
  let obj3 = channel(analyticsLocations[36]);
  const isModalOpen = obj3.useIsModalOpen(channel(analyticsLocations[31]).getVoiceChannelKey(channel.id));
  const obj4 = channel(analyticsLocations[31]);
  const items3 = [callback];
  const stateFromStores1 = channel(analyticsLocations[18]).useStateFromStores(items3, () => EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id));
  const set = new Set(stateFromStores.map((voiceState) => voiceState.voiceState.userId));
  const items4 = [];
  if (channel.isPrivate()) {
    const recipients = channel.recipients;
    let reduced = recipients.reduce((arr, item) => {
      const user = UserStore.getUser(item);
      let hasItem = null == user;
      if (!hasItem) {
        hasItem = set.has(user.id);
      }
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
      if (isModalOpen) {
        const found = stateFromStores.find((user) => user.user.id === ownerId.ownerId);
        let str;
        if (found != null) {
          str = found.nick;
        }
        if (str == null) {
          str = "";
        }
        const tmp3Result = tmp3(tmp4[37]);
        [arr10, arr11] = tmp3(tmp4[37]).partition(stateFromStores, (user) => stateFromStoresArray.includes(user.user.id));
        if (arr10.length > 0) {
          const obj6 = { type: constants4.SPECTATING, title: null, data: null };
          const intl = tmp5(tmp4[21]).intl;
          const obj7 = { username: str };
          obj6.title = intl.formatToPlainString(tmp5(tmp4[21]).t.Fb0eT9, obj7);
          obj6.data = arr10;
          items5.push(obj6);
        }
        if (arr11.length > 0) {
          const obj8 = { type: constants4.VOICE, title: null, data: null };
          const intl2 = tmp5(tmp4[21]).intl;
          obj8.title = intl2.string(tmp5(tmp4[21]).t.C7iIKB);
          obj8.data = stateFromStores1.concat(arr11);
          items5.push(obj8);
        }
        if (reduced.length > 0) {
          const obj9 = { type: constants4.DISCONNECTED, title: null, data: null };
          const intl3 = tmp5(tmp4[21]).intl;
          obj9.title = intl3.string(tmp5(tmp4[21]).t.BnSq1I);
          obj9.data = reduced;
          items5.push(obj9);
        }
        const tmp14 = _slicedToArray(tmp3(tmp4[37]).partition(stateFromStores, (user) => stateFromStoresArray.includes(user.user.id)), 2);
      }
      const items6 = [channel.id, analyticsLocations];
      callback = stateFromStoresArray.useCallback((id) => {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        showUserProfileActionSheetDefault({ userId: id.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
      }, items6);
      const items7 = [channel, flag, callback];
      callback1 = stateFromStoresArray.useCallback((item) => {
        item = item.item;
        const type = item.section.type;
        if (constants.VOICE === type) {
          let tmp18 = null;
          if (!(item instanceof UserRecord)) {
            const obj2 = { item, channelId: channel.id, onPressUser: onPress, isActionSheet: flag };
            tmp18 = __initData(VoiceSectionRow, obj2);
          }
          return tmp18;
        } else if (constants.SPECTATING === type) {
          const obj3 = {};
          const merged = Object.assign(item);
          obj3.onPress = onPress;
          obj3.isSpectating = true;
          obj3.isActionSheet = true;
          return __initData(VoiceMemberUserDefault, obj3);
        } else if (constants.DISCONNECTED === type) {
          const obj = { user: item, channel, isActionSheet: flag, onPress };
          return __initData(VoiceMemberUser.DisconnectedUserRow, obj);
        }
      }, items7);
      if (flag) {
        const obj10 = { theme: ThemeTypes.DARK, children: null };
        const obj11 = { style: tmp2.container, children: null };
        const obj12 = { channel };
        const items8 = [closure_21(tmp5(tmp4[41]).VoiceChannelHeader, obj12), , ];
        const obj13 = { style: tmp2.headerFormDivider };
        items8[1] = closure_21(tmp5(tmp4[19]).FormDivider, obj13);
        const obj14 = { inActionSheet: true, style: tmp2.voiceChannelContainer };
        const merged1 = Object.assign(merged);
        obj14.renderItem = function renderRow(arg0, arg1) {
          if (null == items5[arg0].data[arg1]) {
            return null;
          } else {
            const obj = { item: tmp2, section: tmp[arg0] };
            const obj2 = { children: null };
            const items = [callback1(obj), ];
            const obj3 = { style: rowFormDivider.rowFormDivider };
            items[1] = __initData(Form.FormDivider, obj3);
            obj2.children = items;
            return __initData2(__initData3, obj2);
          }
        };
        obj14.itemSize = function getRowHeight(arg0, arg1) {
          if (null == arg1) {
            return 0;
          } else if (null == items5[arg0].data[arg1]) {
            return 0;
          } else {
            let tmp4 = require;
            let calculateActivityRowHeight = dependencyMap;
            const diff = closure_4 - 2 * VoiceMemberUser.STREAM_PREVIEW_MARGIN;
            const sum = FORM_ROW_VERTICAL_PADDING + 32;
            if (tmp8 instanceof UserRecord) {
              return sum;
            } else {
              if (tmp) {
                tmp4 = tmp4(14047);
                calculateActivityRowHeight = tmp4.calculateActivityRowHeight;
                let result = calculateActivityRowHeight(closure_4);
              } else {
                const voiceState = tmp8.voiceState;
                let selfStream;
                if (voiceState != null) {
                  selfStream = voiceState.selfStream;
                }
                result = sum;
                if (selfStream) {
                  result = sum + tmp11;
                }
              }
              tmp = undefined !== tmp8.url && undefined !== tmp8.applicationId;
            }
          }
        };
        obj14.sections = items5.map((data) => data.data.length);
        items8[2] = closure_21(tmp3(tmp4[42]), obj14);
        obj11.children = items8;
        obj10.children = closure_22(items5, obj11);
        let tmp24Result = closure_21(tmp5(tmp4[40]).ThemeContextProvider, obj10);
        const tmp3Result2 = tmp3(tmp4[42]);
      } else {
        const obj15 = { ref, sections: items5, renderSectionHeader, renderItem: callback1, keyExtractor: extractKey, ItemSeparatorComponent: ItemSeparator, ListFooterComponent: null, ListHeaderComponent: null, stickySectionHeadersEnabled: false };
        let tmp24Result2 = null;
        if (!flag2) {
          const obj16 = { channel };
          tmp24Result2 = closure_21(closure_26, obj16);
        }
        obj15.ListFooterComponent = tmp24Result2;
        const obj17 = { channel };
        obj15.ListHeaderComponent = closure_21(closure_25, obj17);
        const merged2 = Object.assign(merged);
        tmp24Result = closure_21(set, obj15);
      }
      return tmp24Result;
    }
  }
  const obj5 = channel(analyticsLocations[18]);
  items5.push({ type: constants4.VOICE, title: null, data: stateFromStores1.concat(stateFromStores) });
  if (reduced.length > 0) {
    const obj19 = { type: constants4.DISCONNECTED, title: null, data: reduced };
    items5.push(obj19);
  }
  const obj18 = { type: constants4.VOICE, title: null, data: stateFromStores1.concat(stateFromStores) };
});