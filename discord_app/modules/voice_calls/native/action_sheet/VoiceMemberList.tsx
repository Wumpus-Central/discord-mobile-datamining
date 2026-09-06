// === Module 13784: VoiceMemberList ===

// Module 13784 (VoiceMemberList)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import Form from "Form" /* 8593 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9820 */;
import _modDef10031 from "module_10031" /* 10031 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11590 */;
import GuildEventVoiceBannerDefault from "GuildEventVoiceBanner" /* 13780 */;
import VoiceMemberUser from "VoiceMemberUser" /* 13786 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import UserRecord from "UserRecord" /* 1385 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;

const VoiceMemberUserDefault = VoiceMemberUser;

require = fn;
function ItemSeparator() {
  const tmp = closure_24();
  return __initData(Form.FormDivider, { style: closure_24().rowFormDivider });
}
function VoiceMemberListSectionHeader(title) {
  const tmp = closure_24();
  let obj = { style: tmp.sectionContainer, children: null };
  obj = { style: tmp.sectionTitle, variant: "text-xs/bold", color: "text-default", children: title.title.toUpperCase() };
  obj.children = __initData(Text_Text.Text, obj);
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
  let obj = isActionSheet(9619);
  importDefault = obj.useAnalyticsContext();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  if (tmp3) {
    dependencyMap = async function _onItemPress(arg0, value) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_4 = tmp2;
              closure_131_0 = isActionSheet;
              let tmp13 = null != isActionSheet;
              if (tmp13) {
                tmp13 = null != closure_1;
              }
              if (tmp13) {
                tmp13 = null != tmp29;
              }
              if (tmp13) {
                let obj2 = analyticsLocations(tmp5[28]);
                const result = obj2.dismissGlobalKeyboard();
                let obj3 = closure_1(tmp5[29]);
                const voiceChannel = obj3.selectVoiceChannel(tmp28.id);
                const obj1 = { applicationId: tmp29.applicationId, activityChannelId: tmp28.id, locationObject: _location.location, analyticsLocations };
                c5 = 1;
                c6 = 1;
                obj2 = { value: closure_1(tmp5[30])(obj1), done: false };
                return obj2;
              } else {
                c6 = 3;
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (closure_132_0) {
              obj = isActionSheet(tmp5[31]);
              const result1 = obj.hideVoiceChannelActionSheet(closure_131_0);
            }
          }
          c6 = 3;
          obj3 = { value, done: true };
          return obj3;
        } catch (tmp23) {
          c6 = tmp;
          throw tmp23;
        }
      }
    };
    obj = {
      embeddedActivity: item,
      channelId,
      onItemPress(arg0, arg1, arg2) {
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
    return closure_21(tmp2(13785), obj);
  } else {
    obj = {};
    const merged = Object.assign(item);
    obj.onPress = onPressUser;
    obj.isActionSheet = isActionSheet;
    return closure_21(tmp2(13786), obj);
  }
  tmp3 = undefined !== item.url && undefined !== item.applicationId;
}
get_ActivityIndicator = fn(17);
({ SectionList: closure_7, View: closure_8 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticsPages: closure_15, InstantInviteSources: closure_16, Permissions: closure_17 } = Constants);
const FORM_ROW_VERTICAL_PADDING = fn(1182).FORM_ROW_VERTICAL_PADDING;
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
const createStyles = fn(4560);
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
      obj = { leading: null, label: null, onPress: null };
      obj = { accessibilityLabel: null, accessibilityHidden: true, source: null, size: null };
      const intl = tmp4(1114).intl;
      obj.accessibilityLabel = intl.string(tmp4(1114).t["6Qgrev"]);
      obj.source = _modDef10031;
      obj.size = tmp4(13466).CircularIconButton.Sizes.MEDIUM_32;
      obj.leading = closure_21(tmp4(13466).CircularIconButton, obj);
      const intl2 = tmp4(1114).intl;
      obj.label = intl2.string(tmp4(1114).t["6Qgrev"]);
      obj.onPress = function onPress() {
        if (channel.isPrivate()) {
          openGroupDMAddMembersDefault(tmp.id, constants.CHANNEL_CALL);
        } else {
          const obj = { source: constants2.VOICE_CHANNEL };
          const result = obj.showInstantInviteActionSheet(tmp, obj);
        }
      };
      items[1] = closure_21(tmp4(8593).FormRow, obj);
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
  let obj = channel(analyticsLocations[18]);
  let items = [SortedVoiceStateStore];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStatesForChannel(channel), items1);
  const tmp6 = flag(analyticsLocations[35])(channel);
  const ownerId = tmp6;
  let obj1 = channel(analyticsLocations[18]);
  const items2 = [ApplicationStreamingStore];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items2, () => {
    if (null != closure_5) {
      let viewerIds = ApplicationStreamingStore.getViewerIds(tmp);
    } else {
      viewerIds = [];
    }
    return viewerIds;
  });
  let obj2 = channel(analyticsLocations[36]);
  let obj3 = channel(analyticsLocations[31]);
  const isModalOpen = obj2.useIsModalOpen(obj3.getVoiceChannelKey(channel.id));
  let obj4 = channel(analyticsLocations[18]);
  const items3 = [callback];
  const stateFromStores1 = obj4.useStateFromStores(items3, () => EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id));
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
        arr.push(user);
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
        let tmp3Result = tmp3(tmp4[37]);
        [arr10, arr11] = _slicedToArray(tmp3Result.partition(stateFromStores, (user) => stateFromStoresArray.includes(user.user.id)), 2);
        if (arr10.length > 0) {
          obj = { type: constants4.SPECTATING, title: null, data: null };
          const intl = tmp5(tmp4[21]).intl;
          obj = { username: str };
          obj.title = intl.formatToPlainString(tmp5(tmp4[21]).t.Fb0eT9, obj);
          obj.data = arr10;
          items5.push(obj);
        }
        if (arr11.length > 0) {
          obj1 = { type: constants4.VOICE, title: null, data: null };
          const intl2 = tmp5(tmp4[21]).intl;
          obj1.title = intl2.string(tmp5(tmp4[21]).t.C7iIKB);
          obj1.data = stateFromStores1.concat(arr11);
          items5.push(obj1);
        }
        if (reduced.length > 0) {
          obj2 = { type: constants4.DISCONNECTED, title: null, data: null };
          const intl3 = tmp5(tmp4[21]).intl;
          obj2.title = intl3.string(tmp5(tmp4[21]).t.BnSq1I);
          obj2.data = reduced;
          items5.push(obj2);
        }
        const tmp14 = _slicedToArray(tmp3Result.partition(stateFromStores, (user) => stateFromStoresArray.includes(user.user.id)), 2);
      }
      const items6 = [channel.id, analyticsLocations];
      callback = stateFromStoresArray.useCallback((id) => {
        let obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        obj = { userId: id.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      }, items6);
      const items7 = [channel, flag, callback];
      callback1 = stateFromStoresArray.useCallback((item) => {
        item = item.item;
        const type = item.section.type;
        if (constants.VOICE === type) {
          let tmp18 = null;
          if (!(item instanceof UserRecord)) {
            let obj = { item, channelId: channel.id, onPressUser: onPress, isActionSheet: flag };
            tmp18 = __initData(VoiceSectionRow, obj);
          }
          return tmp18;
        } else if (tmp.SPECTATING === type) {
          obj = {};
          const merged = Object.assign(item);
          obj.onPress = onPress;
          obj.isSpectating = true;
          obj.isActionSheet = true;
          return __initData(VoiceMemberUserDefault, obj);
        } else if (tmp.DISCONNECTED === type) {
          obj = { user: item, channel, isActionSheet: flag, onPress };
          return __initData(VoiceMemberUser.DisconnectedUserRow, obj);
        }
      }, items7);
      if (flag) {
        obj3 = { theme: ThemeTypes.DARK, children: null };
        obj4 = { style: tmp2.container, children: null };
        const obj5 = { channel };
        const items8 = [tmp24(tmp5(tmp4[41]).VoiceChannelHeader, obj5), , ];
        const obj6 = { style: tmp2.headerFormDivider };
        items8[1] = tmp24(tmp5(tmp4[19]).FormDivider, obj6);
        const obj7 = { inActionSheet: true, style: tmp2.voiceChannelContainer };
        tmp3Result = tmp3(tmp4[42]);
        const merged1 = Object.assign(merged);
        obj7.renderItem = function renderRow(arg0, arg1) {
          if (null == items5[arg0].data[arg1]) {
            return null;
          } else {
            let obj = { item: tmp2, section: tmp[arg0] };
            obj = { children: null };
            const items = [callback1(obj), ];
            obj = { style: rowFormDivider.rowFormDivider };
            items[1] = __initData(Form.FormDivider, obj);
            obj.children = items;
            return __initData2(__initData3, obj);
          }
        };
        obj7.itemSize = function getRowHeight(arg0, arg1) {
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
                tmp4 = tmp4(13785);
                calculateActivityRowHeight = tmp4.calculateActivityRowHeight;
                let result = calculateActivityRowHeight(tmp9);
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
            tmp9 = closure_4;
          }
        };
        obj7.sections = items5.map((data) => data.data.length);
        items8[2] = tmp24(tmp3Result, obj7);
        obj4.children = items8;
        obj3.children = closure_22(items5, obj4);
        let tmp24Result = tmp24(tmp5(tmp4[40]).ThemeContextProvider, obj3);
      } else {
        const obj8 = { ref, sections: items5, renderSectionHeader, renderItem: callback1, keyExtractor: extractKey, ItemSeparatorComponent: ItemSeparator, ListFooterComponent: null, ListHeaderComponent: null, stickySectionHeadersEnabled: false };
        tmp24Result = null;
        if (!flag2) {
          const obj9 = { channel };
          tmp24Result = tmp24(closure_26, obj9);
        }
        obj8.ListFooterComponent = tmp24Result;
        const obj10 = { channel };
        obj8.ListHeaderComponent = tmp24(closure_25, obj10);
        const merged2 = Object.assign(merged);
        tmp24Result = tmp24(set, obj8);
      }
      return tmp24Result;
    }
  }
  items5.push({ type: constants4.VOICE, title: null, data: stateFromStores1.concat(stateFromStores) });
  if (reduced.length > 0) {
    const obj12 = { type: constants4.DISCONNECTED, title: null, data: reduced };
    items5.push(obj12);
  }
});