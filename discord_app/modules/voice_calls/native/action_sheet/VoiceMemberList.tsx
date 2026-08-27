// === Module 13352: ItemSeparator ===

// Module 13352 (ItemSeparator)
import Text from "Text" /* 4441 */;
import Form from "Form" /* 8295 */;
import registerAssetDefault from "registerAsset" /* 10034 */;
import _modDef13348 from "module_13348" /* 13348 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "participantFromServer" /* 1390 */;
import closure_10 from "createdAt" /* 1930 */;
import closure_11 from "reset" /* 4467 */;
import closure_12 from "getUncachedChannelPermissions" /* 4089 */;
import closure_13 from "mergeGuildAvatar" /* 1922 */;
import closure_14 from "getVoiceStatesForGuild" /* 4520 */;
import ME from "ME" /* 676 */;
import { FORM_ROW_VERTICAL_PADDING } from "semanticColor" /* 1301 */;
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 5575 */;
import { ThemeTypes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function ItemSeparator() {
  const tmp = callback4();
  return callback2(Form.FormDivider, { style: callback4().rowFormDivider });
}
function VoiceMemberListSectionHeader(title) {
  const tmp = callback4();
  let obj = { style: tmp.sectionContainer, children: null };
  obj = { style: tmp.sectionTitle, variant: "text-xs/bold", color: "text-default", children: title.title.toUpperCase() };
  obj[1] = callback2(Text.Text, obj);
  return callback2(closure_8, obj);
}
function renderSectionHeader(section) {
  const title = section.section.title;
  let tmp = null;
  if (null != title) {
    const obj = { title: null };
    obj[0] = title;
    tmp = callback2(VoiceMemberListSectionHeader, obj);
  }
  return tmp;
}
function extractKey(id) {
  if (id instanceof closure_10) {
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
  importDefault = undefined;
  let analyticsLocations;
  ({ channelId, onPressUser } = arg0);
  let obj = isActionSheet(_onItemPress[26]);
  importDefault = obj.useAnalyticsContext();
  analyticsLocations = importDefault(_onItemPress[27])().analyticsLocations;
  if (tmp3) {
    _onItemPress = function _onItemPress() {
      const self = this;
      const tmp = closure_1_5((arg0, arg1, arg2) => {
        closure_0 = arg0;
        closure_1 = arg1;
        closure_2 = arg2;
        c5 = 0;
        c6 = 0;
        return (function*(arg0, arg1, arg2) {
          if (c6 === 2) {
            c6 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
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
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_4 = tmp2;
                  closure_3 = tmp5;
                  let tmp13 = null != callback;
                  if (tmp13) {
                    tmp13 = null != lib;
                  }
                  if (tmp13) {
                    tmp13 = null != tmp30;
                  }
                  if (tmp13) {
                    let obj2 = callback2(closure_1_3[28]);
                    const result = obj2.dismissGlobalKeyboard();
                    let obj3 = lib(closure_1_3[29]);
                    const voiceChannel = obj3.selectVoiceChannel(tmp29.id);
                    obj1 = { applicationId: null, activityChannelId: null, locationObject: null, analyticsLocations: null };
                    obj1[0] = tmp30.applicationId;
                    obj1[1] = tmp29.id;
                    obj1[2] = lib.location;
                    obj1[3] = callback2;
                    c5 = 1;
                    c6 = 1;
                    obj2 = { value: null, done: false };
                    obj2[0] = lib(closure_1_3[30])(obj1);
                    return obj2;
                  } else {
                    c6 = 3;
                  }
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                if (callback) {
                  obj = callback(closure_1_3[31]);
                  const result1 = obj.hideVoiceChannelActionSheet(callback);
                }
              }
              c6 = 3;
              obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } catch (tmp23) {
              c6 = tmp;
              throw tmp23;
            }
          }
        })();
      });
      closure_3 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj = { embeddedActivity: null, channelId: null, onItemPress: null, isActionSheet: null };
    obj[0] = item;
    obj[1] = channelId;
    obj[2] = function onItemPress(arg0) {
      const self = this;
      const apply = _onItemPress.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj[3] = isActionSheet;
    return callback2(tmp2(tmp[32]), obj);
  } else {
    obj = {};
    const merged = Object.assign(item);
    obj.onPress = onPressUser;
    obj.isActionSheet = isActionSheet;
    return callback2(tmp2(tmp[33]), obj);
  }
  tmp3 = undefined !== item.url && undefined !== item.applicationId;
}
({ SectionList: error, View: closure_8 } = get_ActivityIndicator);
({ AnalyticsPages: closure_15, InstantInviteSources: closure_16, Permissions: closure_17 } = ME);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
let closure_24 = createCacheKey.createStyles({ container: { flex: 1, flexShrink: 1 }, sectionContainer: { paddingTop: 16, paddingHorizontal: 16 }, sectionTitle: { lineHeight: 16 }, voiceChannelContainer: { overflow: "hidden", flexGrow: 1, flexShrink: 1, minHeight: 1 }, headerFormDivider: { marginLeft: 0 }, rowFormDivider: { marginHorizontal: 16 } });
let closure_25 = importAllResult.memo((channel) => callback2(_modDef13348, { channel: channel.channel }));
let closure_26 = importAllResult.memo((channel) => {
  channel = channel.channel;
  channel(589);
  [][0] = channel;
  let tmp7 = null;
  if (!tmp3) {
    tmp7 = null;
    if (tmp6) {
      let obj = { children: null };
      const items = [callback2(ItemSeparator, {}), ];
      obj = { leading: null, label: null, onPress: null };
      obj = { accessibilityLabel: null, accessibilityHidden: true, source: null, size: null };
      const intl = tmp4(1236).intl;
      obj[0] = intl.string(tmp4(1236).t["6Qgrev"]);
      obj[2] = registerAssetDefault;
      obj[3] = tmp4(13037).CircularIconButton.Sizes.MEDIUM_32;
      obj[0] = callback2(tmp4(13037).CircularIconButton, obj);
      const intl2 = tmp4(1236).intl;
      obj[1] = intl2.string(tmp4(1236).t["6Qgrev"]);
      obj[2] = function onPress() {
        if (channel.isPrivate()) {
          let tmp2Result = tmp2(tmp3[23]);
          tmp2Result.navigateToNewGroupDM(tmp.id, closure_1_15.CHANNEL_CALL);
        } else {
          tmp2Result = tmp2(tmp3[24]);
          const obj = { source: null };
          obj[0] = closure_1_16.VOICE_CHANNEL;
          const result = tmp2Result.showInstantInviteActionSheet(tmp, obj);
        }
      };
      items[1] = callback2(tmp4(8295).FormRow, obj);
      obj[0] = items;
      tmp7 = callback3(importAllResult.Fragment, obj);
    }
  }
  return tmp7;
});
let closure_30 = { VOICE: 0, [0]: "VOICE", SPECTATING: 1, [1]: "SPECTATING", DISCONNECTED: 2, [2]: "DISCONNECTED" };
const forwardRefResult = importAllResult.forwardRef(function VoiceMemberList(channel) {
  channel = channel.channel;
  let flag = channel.isActionSheet;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = channel.disableFooter;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let merged = Object.assign(channel, Object.create(null));
  closure_2 = undefined;
  let analyticsLocations;
  let callback;
  closure_5 = undefined;
  let stateFromStoresArray;
  let set;
  let items5;
  callback = undefined;
  let callback1;
  const tmp2 = callback4();
  closure_2 = tmp2;
  analyticsLocations = flag(analyticsLocations[27])().analyticsLocations;
  callback = Math.min(flag(analyticsLocations[34])().width, ACTION_SHEET_MAX_WIDTH);
  let obj = channel(analyticsLocations[18]);
  let items = [closure_14];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_14.getVoiceStatesForChannel(channel), items1);
  const tmp6 = flag(analyticsLocations[35])(channel);
  closure_5 = tmp6;
  obj1 = channel(analyticsLocations[18]);
  const items2 = [closure_11];
  stateFromStoresArray = obj1.useStateFromStoresArray(items2, () => {
    if (null != closure_5) {
      let viewerIds = closure_1_11.getViewerIds(tmp);
    } else {
      viewerIds = [];
    }
    return viewerIds;
  });
  let obj2 = channel(analyticsLocations[23]);
  let obj3 = channel(analyticsLocations[31]);
  const isModalOpen = obj2.useIsModalOpen(obj3.getVoiceChannelKey(channel.id));
  let obj4 = channel(analyticsLocations[18]);
  const items3 = [callback];
  const stateFromStores1 = obj4.useStateFromStores(items3, () => callback.getEmbeddedActivitiesForChannel(channel.id));
  set = new Set(stateFromStores.map((voiceState) => voiceState.voiceState.userId));
  const items4 = [];
  if (channel.isPrivate()) {
    const recipients = channel.recipients;
    let reduced = recipients.reduce((arr) => {
      const user = closure_1_13.getUser(arg1);
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
        let tmp3Result = tmp3(tmp4[36]);
        [arr10, arr11] = callback(tmp3Result.partition(stateFromStores, (user) => stateFromStoresArray.includes(user.user.id)), 2);
        if (arr10.length > 0) {
          obj = { type: null, title: null, data: null };
          obj[0] = constants.SPECTATING;
          const intl = tmp5(tmp4[21]).intl;
          obj = { username: null };
          obj[0] = str;
          obj[1] = intl.formatToPlainString(tmp5(tmp4[21]).t.Fb0eT9, obj);
          obj[2] = arr10;
          items5.push(obj);
        }
        if (arr11.length > 0) {
          obj1 = { type: null, title: null, data: null };
          obj1[0] = constants.VOICE;
          const intl2 = tmp5(tmp4[21]).intl;
          obj1[1] = intl2.string(tmp5(tmp4[21]).t.C7iIKB);
          obj1[2] = stateFromStores1.concat(arr11);
          items5.push(obj1);
        }
        if (reduced.length > 0) {
          obj2 = { type: null, title: null, data: null };
          obj2[0] = constants.DISCONNECTED;
          const intl3 = tmp5(tmp4[21]).intl;
          obj2[1] = intl3.string(tmp5(tmp4[21]).t.BnSq1I);
          obj2[2] = reduced;
          items5.push(obj2);
        }
        const tmp14 = callback(tmp3Result.partition(stateFromStores, (user) => stateFromStoresArray.includes(user.user.id)), 2);
      }
      const items6 = [channel.id, analyticsLocations];
      callback = stateFromStoresArray.useCallback((id) => {
        let obj = flag(analyticsLocations[37]);
        obj.hideActionSheet();
        obj = { userId: id.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
        flag(analyticsLocations[38])(obj);
      }, items6);
      const items7 = [channel, flag, callback];
      callback1 = stateFromStoresArray.useCallback((item) => {
        item = item.item;
        const type = item.section.type;
        if (closure_1_30.VOICE === type) {
          let tmp18 = null;
          if (!(item instanceof callback1)) {
            let obj = { item: null, channelId: null, onPressUser: null, isActionSheet: null };
            obj[0] = item;
            obj[1] = channel.id;
            obj[2] = callback;
            obj[3] = flag;
            tmp18 = closure_1_21(closure_1_32, obj);
          }
          return tmp18;
        } else if (tmp.SPECTATING === type) {
          obj = {};
          const merged = Object.assign(item);
          obj.onPress = callback;
          obj.isSpectating = true;
          obj.isActionSheet = true;
          return closure_1_21(true(analyticsLocations[33]), obj);
        } else if (tmp.DISCONNECTED === type) {
          obj = { user: null, channel: null, isActionSheet: null, onPress: null };
          obj[0] = item;
          obj[1] = channel;
          obj[2] = flag;
          obj[3] = callback;
          return closure_1_21(channel(analyticsLocations[33]).DisconnectedUserRow, obj);
        }
      }, items7);
      if (flag) {
        obj3 = { theme: null, children: null };
        obj3[0] = ThemeTypes.DARK;
        obj4 = { style: null, children: null };
        obj4[0] = tmp2.container;
        const obj5 = { channel: null };
        obj5[0] = channel;
        const items8 = [tmp24(tmp5(tmp4[40]).VoiceChannelHeader, obj5), , ];
        const obj6 = { style: null };
        obj6[0] = tmp2.headerFormDivider;
        items8[1] = tmp24(tmp5(tmp4[19]).FormDivider, obj6);
        const obj7 = { inActionSheet: true, style: null };
        obj7[1] = tmp2.voiceChannelContainer;
        tmp3Result = tmp3(tmp4[41]);
        const merged1 = Object.assign(merged);
        obj7.renderItem = function renderRow(arg0, arg1) {
          if (null == items5[arg0].data[arg1]) {
            return null;
          } else {
            let obj = { item: null, section: null };
            obj[0] = tmp2;
            obj[1] = tmp[arg0];
            obj = { children: null };
            const items = [callback1(obj), ];
            obj = { style: null };
            obj[0] = rowFormDivider.rowFormDivider;
            items[1] = closure_1_21(channel(analyticsLocations[19]).FormDivider, obj);
            obj[0] = items;
            return closure_1_22(closure_1_23, obj);
          }
        };
        obj7.itemSize = function getRowHeight(arg0, arg1) {
          if (null == arg1) {
            return 0;
          } else if (null == items5[arg0].data[arg1]) {
            return 0;
          } else {
            let tmp4 = channel;
            let calculateActivityRowHeight = analyticsLocations;
            const diff = closure_4 - 2 * channel(analyticsLocations[33]).STREAM_PREVIEW_MARGIN;
            const sum = closure_1_18 + 32;
            if (tmp8 instanceof callback1) {
              return sum;
            } else {
              if (tmp) {
                tmp4 = tmp4(calculateActivityRowHeight[32]);
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
        obj4[1] = items8;
        obj3[1] = callback3(items5, obj4);
        let tmp24Result = tmp24(tmp5(tmp4[39]).ThemeContextProvider, obj3);
      } else {
        const obj8 = { ref: null, sections: null, renderSectionHeader: null, renderItem: null, keyExtractor: null, ItemSeparatorComponent: null, ListFooterComponent: null, ListHeaderComponent: null, stickySectionHeadersEnabled: false };
        obj8[0] = arg1;
        obj8[1] = items5;
        obj8[2] = renderSectionHeader;
        obj8[3] = callback1;
        obj8[4] = extractKey;
        obj8[5] = ItemSeparator;
        tmp24Result = null;
        if (!flag2) {
          const obj9 = { channel: null };
          obj9[0] = channel;
          tmp24Result = tmp24(closure_26, obj9);
        }
        obj8[6] = tmp24Result;
        const obj10 = { channel: null };
        obj10[0] = channel;
        obj8[7] = tmp24(closure_25, obj10);
        const merged2 = Object.assign(merged);
        tmp24Result = tmp24(set, obj8);
        const tmp26 = set;
      }
      return tmp24Result;
    }
  }
  items5.push({ type: constants.VOICE, title: null, data: stateFromStores1.concat(stateFromStores) });
  if (reduced.length > 0) {
    const obj12 = { type: null, title: null, data: null };
    obj12[0] = constants.DISCONNECTED;
    obj12[2] = reduced;
    items5.push(obj12);
  }
});
let result = require("set").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberList.tsx");

export default forwardRefResult;