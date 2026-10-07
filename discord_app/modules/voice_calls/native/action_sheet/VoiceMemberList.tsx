// === Module 13611: VoiceMemberList ===

// Module 13611 (VoiceMemberList)
import c from "c" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6664 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import Form from "Form" /* 8924 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9494 */;
import _modDef9728 from "module_9728" /* 9728 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11225 */;
import GuildEventVoiceBannerDefault from "GuildEventVoiceBanner" /* 13607 */;
import VoiceMemberUser from "VoiceMemberUser" /* 13613 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import UserRecord from "UserRecord" /* 1391 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import UserStore from "UserStore" /* 1377 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4920 */;

const require = globalThis.__r;
const VoiceMemberUserDefault = VoiceMemberUser;

require = fn;
function renderSectionHeader(section) {
  const title = section.section.title;
  let tmp = null;
  if (null != title) {
    const obj = { title };
    tmp = closure_1_23(closure_30, obj);
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
let closure_4 = ["channel", "isActionSheet", "disableFooter"];
get_ActivityIndicator = fn(17);
({ SectionList: closure_9, View: c10 } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticsPages: closure_17, InstantInviteSources: closure_18, Permissions: closure_19 } = Constants);
const FORM_ROW_VERTICAL_PADDING = fn(1192).FORM_ROW_VERTICAL_PADDING;
const ACTION_SHEET_MAX_WIDTH = fn(6653).ACTION_SHEET_MAX_WIDTH;
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
const createStyles = fn(4896);
let closure_26 = createStyles.createStyles({ container: { flex: 1, flexShrink: 1 }, sectionContainer: { paddingTop: 16, paddingHorizontal: 16 }, sectionTitle: { lineHeight: 16 }, voiceChannelContainer: { overflow: "hidden", flexGrow: 1, flexShrink: 1, minHeight: 1 }, headerFormDivider: { marginLeft: 0 }, rowFormDivider: { marginHorizontal: 16 } });
let ReactCompilerGating = fn(558);
let closure_27 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = c.c(2);
  channel = channel.channel;
  if (cResult[0] !== channel) {
    const obj2 = { channel };
    const tmp6 = closure_1_23(GuildEventVoiceBannerDefault, obj2);
    cResult[0] = channel;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((channel) => closure_1_23(GuildEventVoiceBannerDefault, { channel: channel.channel })));
ReactCompilerGating = fn(558);
let closure_28 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let FormRow = channel;
  let tmp = dependencyMap;
  const cResult = channel(576).c(9);
  channel = channel.channel;
  let obj = channel(576);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function o() {
      return PermissionStore.can(constants3.CREATE_INSTANT_INVITE, channel) || channel.isPrivate();
    };
    const items1 = [channel];
    cResult[1] = channel;
    cResult[2] = fn;
    cResult[3] = items1;
  }
  FormRow(504);
  let tmp11 = null;
  if (!tmp4) {
    tmp11 = null;
    if (tmp10) {
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = closure_23(closure_29, {});
        cResult[4] = tmp15;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[4];
      }
      const _Symbol2 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { accessibilityLabel: null, accessibilityHidden: true, source: null, size: null };
        const intl = FormRow(1126).intl;
        obj2.accessibilityLabel = intl.string(FormRow(1126).t["6Qgrev"]);
        obj2.source = _modDef9728;
        obj2.size = FormRow(13291).CircularIconButton.Sizes.MEDIUM_32;
        const tmp19 = closure_23(FormRow(13291).CircularIconButton, obj2);
        const intl2 = FormRow(1126).intl;
        const stringResult = intl2.string(FormRow(1126).t["6Qgrev"]);
        cResult[5] = tmp19;
        cResult[6] = stringResult;
        let tmp17 = stringResult;
        let tmp16 = tmp19;
      } else {
        tmp16 = cResult[5];
        tmp17 = cResult[6];
      }
      if (cResult[7] !== channel) {
        const obj3 = { children: null };
        const items2 = [tmp12, ];
        FormRow = FormRow(8924).FormRow;
        const obj4 = {
          leading: tmp16,
          label: tmp17,
          onPress() {
                  if (channel.isPrivate()) {
                    openGroupDMAddMembersDefault(channel.id, constants.CHANNEL_CALL);
                  } else {
                    const obj2 = { source: constants2.VOICE_CHANNEL };
                    const result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, obj2);
                  }
                }
        };
        tmp = closure_23(FormRow, obj4);
        items2[1] = tmp;
        obj3.children = items2;
        const tmp25 = closure_24(noop.Fragment, obj3);
        cResult[7] = channel;
        cResult[8] = tmp25;
      }
    }
  }
  return tmp11;
}) : ((channel) => {
  channel = channel.channel;
  channel(504);
  [][0] = channel;
  let tmp7 = null;
  if (!tmp3) {
    tmp7 = null;
    if (tmp6) {
      let obj = { children: null };
      const items = [closure_23(closure_29, {}), ];
      let obj2 = { leading: null, label: null, onPress: null };
      const obj3 = { accessibilityLabel: null, accessibilityHidden: true, source: null, size: null };
      const intl = tmp4(1126).intl;
      obj3.accessibilityLabel = intl.string(tmp4(1126).t["6Qgrev"]);
      obj3.source = _modDef9728;
      obj3.size = tmp4(13291).CircularIconButton.Sizes.MEDIUM_32;
      obj2.leading = closure_23(tmp4(13291).CircularIconButton, obj3);
      const intl2 = tmp4(1126).intl;
      obj2.label = intl2.string(tmp4(1126).t["6Qgrev"]);
      obj2.onPress = function onPress() {
        if (channel.isPrivate()) {
          openGroupDMAddMembersDefault(channel.id, constants.CHANNEL_CALL);
        } else {
          const obj2 = { source: constants2.VOICE_CHANNEL };
          const result = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, obj2);
        }
      };
      items[1] = closure_23(tmp4(8924).FormRow, obj2);
      obj.children = items;
      tmp7 = closure_24(noop.Fragment, obj);
    }
  }
  return tmp7;
}));
ReactCompilerGating = fn(558);
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp4 = closure_26();
  if (cResult[0] !== tmp4.rowFormDivider) {
    const obj2 = { style: tmp4.rowFormDivider };
    const tmp7 = closure_1_23(Form.FormDivider, obj2);
    cResult[0] = tmp4.rowFormDivider;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const tmp = closure_26();
  return closure_1_23(Form.FormDivider, { style: closure_26().rowFormDivider });
});
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? ((title) => {
  const cResult = c.c(8);
  const tmp4 = closure_26();
  ({ sectionContainer, sectionTitle } = tmp4);
  if (cResult[0] !== title.title) {
    const formatted = str.toUpperCase();
    cResult[0] = str;
    cResult[1] = formatted;
    let tmp5 = formatted;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.sectionTitle) {
    if (cResult[3] === tmp5) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4.sectionContainer) {
      if (cResult[6] === tmp7) {
        let tmp9 = cResult[7];
      }
      return tmp9;
    }
    const obj2 = { style: sectionContainer, children: tmp7 };
    const tmp12 = closure_1_23(v65535, obj2);
    cResult[5] = tmp4.sectionContainer;
    cResult[6] = tmp7;
    cResult[7] = tmp12;
    tmp9 = tmp12;
  }
  const tmp8 = closure_1_23(Text_Text.Text, { style: sectionTitle, variant: "text-xs/bold", color: "text-default", children: tmp5 });
  cResult[2] = tmp4.sectionTitle;
  cResult[3] = tmp5;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((title) => {
  const tmp = closure_26();
  const obj = { style: tmp.sectionContainer, children: closure_1_23(Text_Text.Text, { style: tmp.sectionTitle, variant: "text-xs/bold", color: "text-default", children: title.title.toUpperCase() }) };
  return closure_1_23(v65535, obj);
});
const constants4 = { VOICE: 0, [0]: "VOICE", SPECTATING: 1, [1]: "SPECTATING", DISCONNECTED: 2, [2]: "DISCONNECTED" };
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(13);
  ({ item, channelId, onPressUser, isActionSheet } = arg0);
  _require = isActionSheet;
  let obj = require("c");
  const analyticsContext = require("analytics").useAnalyticsContext();
  let analyticsLocations = analyticsContext(6664)().analyticsLocations;
  if (tmp5) {
    if (cResult[0] === analyticsContext) {
      if (cResult[1] === analyticsLocations) {
        if (cResult[2] === isActionSheet) {
          let tmp13 = cResult[3];
        }
        if (cResult[4] === channelId) {
          if (cResult[5] === isActionSheet) {
            if (cResult[6] === tmp13) {
              if (cResult[7] === item) {
                let tmp15 = cResult[8];
              }
              return tmp15;
            }
          }
        }
        let obj3 = { embeddedActivity: item, channelId, onItemPress: tmp13, isActionSheet };
        const tmp17 = closure_23(tmp4(13612), obj3);
        cResult[4] = channelId;
        cResult[5] = isActionSheet;
        cResult[6] = tmp13;
        cResult[7] = item;
        cResult[8] = tmp17;
        tmp15 = tmp17;
      }
    }
    _require = asyncGeneratorStep(async (arg0, arg1, analyticsLocations) => {
      closure_0 = arg0;
      const _location = arg1;
      c5 = 0;
      c6 = 0;
      return (async (arg0, value, arg2) => {
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
                const obj5 = { value, done: true };
                return obj5;
              } else {
                closure_4 = tmp2;
                closure_3 = tmp5;
                closure_131_0 = closure_0;
                let tmp13 = null != closure_0;
                if (tmp13) {
                  tmp13 = null != _location;
                }
                if (tmp13) {
                  tmp13 = null != analyticsLocations;
                }
                if (tmp13) {
                  const result = analyticsLocations(1881).dismissGlobalKeyboard();
                  const obj3 = analyticsLocations(1881);
                  const voiceChannel = analyticsContext(5575).selectVoiceChannel(closure_0.id);
                  const obj6 = { applicationId: analyticsLocations.applicationId, activityChannelId: closure_0.id, locationObject: _location.location, analyticsLocations };
                  c5 = 1;
                  c6 = 1;
                  const obj7 = { value: analyticsContext(9083)(obj6), done: false };
                  return obj7;
                } else {
                  c6 = 3;
                }
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              if (closure_0) {
                const result1 = closure_0(5103).hideVoiceChannelActionSheet(closure_131_0);
                const obj = closure_0(5103);
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
      })();
    });
    function onItemPress() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[0] = analyticsContext;
    cResult[1] = analyticsLocations;
    cResult[2] = isActionSheet;
    cResult[3] = onItemPress;
    tmp13 = onItemPress;
  } else {
    if (cResult[9] === isActionSheet) {
      if (cResult[10] === onPressUser) {
        if (cResult[11] === item) {
          let tmp6 = cResult[12];
        }
        return tmp6;
      }
    }
    const obj4 = {};
    const merged = Object.assign(item);
    obj4.onPress = onPressUser;
    obj4.isActionSheet = isActionSheet;
    const tmp12 = closure_23(tmp4(13613), obj4);
    cResult[9] = isActionSheet;
    cResult[10] = onPressUser;
    cResult[11] = item;
    cResult[12] = tmp12;
    tmp6 = tmp12;
    const tmp4Result = tmp4(13613);
  }
  let obj2 = require("analytics");
  tmp5 = undefined !== item.url && undefined !== item.applicationId;
}) : ((arg0) => {
  ({ item, isActionSheet } = arg0);
  ({ channelId, onPressUser } = arg0);
  importDefault = isActionSheet(9137).useAnalyticsContext();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  if (tmp3) {
    dependencyMap = async function _onItemPress2(arg0) {
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
                const result = analyticsLocations(tmp5[31]).dismissGlobalKeyboard();
                const obj3 = analyticsLocations(tmp5[31]);
                const voiceChannel = closure_1(tmp5[32]).selectVoiceChannel(isActionSheet.id);
                const obj6 = { applicationId: analyticsLocations.applicationId, activityChannelId: isActionSheet.id, locationObject: _location.location, analyticsLocations };
                c5 = 1;
                c6 = 1;
                const obj7 = { value: closure_1(tmp5[33])(obj6), done: false };
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
              const result1 = isActionSheet(tmp5[34]).hideVoiceChannelActionSheet(closure_131_0);
              const obj = isActionSheet(tmp5[34]);
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
    return closure_23(tmp2(13612), obj2);
  } else {
    let obj3 = {};
    const merged = Object.assign(item);
    obj3.onPress = onPressUser;
    obj3.isActionSheet = isActionSheet;
    return closure_23(tmp2(13613), obj3);
  }
  let obj = isActionSheet(9137);
  tmp3 = undefined !== item.url && undefined !== item.applicationId;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberList.tsx");

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceMemberList(channel, arg1) {
  const cResult = require("c").c(88);
  if (cResult[0] !== channel) {
    channel = channel.channel;
    _require = channel;
    ({ isActionSheet, disableFooter } = channel);
    const tmp9 = stateFromStoresArray(channel, bound);
    cResult[0] = channel;
    cResult[1] = channel;
    cResult[2] = tmp9;
    cResult[3] = isActionSheet;
    cResult[4] = disableFooter;
    let tmp5 = isActionSheet;
  } else {
    _require = cResult[1];
    tmp5 = cResult[3];
  }
  importDefault = undefined === tmp5 || tmp5;
  let obj = require("c");
  const rowFormDivider = closure_26();
  analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  bound = Math.min(require("useWindowDimensions")().width, ACTION_SHEET_MAX_WIDTH);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SortedVoiceStateStore];
    cResult[5] = items;
    let tmp13 = items;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== obj2) {
    class P {
      constructor() {
        return closure_16.getVoiceStatesForChannel(closure_0);
      }
    }
    const items1 = [obj2];
    cResult[6] = obj2;
    cResult[7] = P;
    cResult[8] = items1;
    let tmp16 = items1;
  } else {
    class P {
      constructor() {
        return closure_16.getVoiceStatesForChannel(closure_0);
      }
    }
    tmp16 = cResult[8];
  }
  const tmp10 = closure_26();
  const tmp11 = importDefault;
  const stateFromStores = require("initialize").useStateFromStores(tmp13, P, tmp16);
  const tmp17 = tmp11(analyticsLocations[38])(obj2);
  const ownerId = tmp17;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return closure_16.getVoiceStatesForChannel(closure_0);
      }
    }
    const items2 = [ApplicationStreamingStore];
    cResult[9] = items2;
    let tmp18 = items2;
  } else {
    class P {
      constructor() {
        return closure_16.getVoiceStatesForChannel(closure_0);
      }
    }
  }
  if (cResult[10] !== tmp17) {
    class P {
      constructor() {
        return closure_16.getVoiceStatesForChannel(closure_0);
      }
    }
    cResult[10] = tmp17;
    cResult[11] = tmp20;
  } else {
    class P {
      constructor() {
        return closure_16.getVoiceStatesForChannel(closure_0);
      }
    }
  }
  const tmpResult = require("initialize");
  stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp18, tmp20);
  if (cResult[12] !== obj2.id) {
    class P {
      constructor() {
        return closure_16.getVoiceStatesForChannel(closure_0);
      }
    }
    const voiceChannelKey = obj5.getVoiceChannelKey(obj2.id);
    cResult[12] = obj2.id;
    cResult[13] = voiceChannelKey;
    const tmp22 = voiceChannelKey;
  } else {
    class P {
      constructor() {
        return closure_16.getVoiceStatesForChannel(closure_0);
      }
    }
  }
  const tmpResult4 = require("initialize");
  const isModalOpen = require("NavigationRouteUtils").useIsModalOpen(tmp22);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return closure_16.getVoiceStatesForChannel(closure_0);
      }
    }
    const items3 = [EmbeddedActivitiesStore];
    cResult[14] = items3;
    const tmp25 = items3;
  } else {
    class P {
      constructor() {
        return closure_16.getVoiceStatesForChannel(closure_0);
      }
    }
  }
  if (cResult[15] !== obj2.id) {
    class Z {
      constructor() {
        return closure_11.getEmbeddedActivitiesForChannel(closure_0.id);
      }
    }
    cResult[15] = obj2.id;
    cResult[16] = Z;
  } else {
    class Z {
      constructor() {
        return closure_11.getEmbeddedActivitiesForChannel(closure_0.id);
      }
    }
  }
  const tmpResult5 = require("NavigationRouteUtils");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp25, Z);
  if (cResult[17] !== stateFromStores) {
    class Z {
      constructor() {
        return closure_11.getEmbeddedActivitiesForChannel(closure_0.id);
      }
    }
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {
          return closure_11.getEmbeddedActivitiesForChannel(closure_0.id);
        }
      }
      cResult[19] = tmp30;
    } else {
      class Z {
        constructor() {
          return closure_11.getEmbeddedActivitiesForChannel(closure_0.id);
        }
      }
    }
    const _Set = Set;
    const set = new Set(stateFromStores.map(tmp30));
    cResult[17] = stateFromStores;
    cResult[18] = set;
  } else {
    class Z {
      constructor() {
        return closure_11.getEmbeddedActivitiesForChannel(closure_0.id);
      }
    }
    asyncGeneratorStep = tmp28;
    if (cResult[20] === obj2) {
      class Z {
        constructor() {
          return closure_11.getEmbeddedActivitiesForChannel(closure_0.id);
        }
      }
    }
    const items4 = [];
    if (obj2.isPrivate()) {
      class Z {
        constructor() {
          return closure_11.getEmbeddedActivitiesForChannel(closure_0.id);
        }
      }
      const reduced = arr7.reduce((arr, item) => {
        user = UserStore.getUser(item);
        let hasItem = null == user;
        if (!hasItem) {
          hasItem = tmp28.has(user.id);
        }
        if (!hasItem) {
          arr = arr.push(user);
        }
        return arr;
      }, items4);
    } else {
      class Z {
        constructor() {
          return closure_11.getEmbeddedActivitiesForChannel(closure_0.id);
        }
      }
    }
    cResult[20] = obj2;
    cResult[21] = tmp28;
    cResult[22] = reduced;
  }
  const tmpResult6 = require("initialize");
}) : (function VoiceMemberList(channel, ref) {
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
  analyticsLocations = flag(analyticsLocations[30])().analyticsLocations;
  closure_4 = Math.min(flag(analyticsLocations[37])().width, ACTION_SHEET_MAX_WIDTH);
  let items = [SortedVoiceStateStore];
  const items1 = [channel];
  const stateFromStores = channel(analyticsLocations[21]).useStateFromStores(items, () => SortedVoiceStateStore.getVoiceStatesForChannel(channel), items1);
  const tmp6 = flag(analyticsLocations[38])(channel);
  _slicedToArray = tmp6;
  let obj = channel(analyticsLocations[21]);
  const items2 = [ApplicationStreamingStore];
  const stateFromStoresArray = channel(analyticsLocations[21]).useStateFromStoresArray(items2, () => {
    if (null != closure_5) {
      let viewerIds = ApplicationStreamingStore.getViewerIds(tmp);
    } else {
      viewerIds = [];
    }
    return viewerIds;
  });
  let obj2 = channel(analyticsLocations[21]);
  let obj3 = channel(analyticsLocations[39]);
  const isModalOpen = obj3.useIsModalOpen(channel(analyticsLocations[34]).getVoiceChannelKey(channel.id));
  const obj4 = channel(analyticsLocations[34]);
  const items3 = [EmbeddedActivitiesStore];
  const stateFromStores1 = channel(analyticsLocations[21]).useStateFromStores(items3, () => EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id));
  new Set(stateFromStores.map((voiceState) => voiceState.voiceState.userId));
  const items4 = [];
  if (channel.isPrivate()) {
    const recipients = channel.recipients;
    let reduced = recipients.reduce((arr, item) => {
      user = UserStore.getUser(item);
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
        const tmp3Result = tmp3(tmp4[40]);
        [arr10, arr11] = tmp3(tmp4[40]).partition(stateFromStores, (user) => stateFromStoresArray.includes(user.user.id));
        if (arr10.length > 0) {
          const obj6 = { type: constants4.SPECTATING, title: null, data: null };
          const intl = tmp5(tmp4[23]).intl;
          const obj7 = { username: str };
          obj6.title = intl.formatToPlainString(tmp5(tmp4[23]).t.Fb0eT9, obj7);
          obj6.data = arr10;
          items5.push(obj6);
        }
        if (arr11.length > 0) {
          const obj8 = { type: constants4.VOICE, title: null, data: null };
          const intl2 = tmp5(tmp4[23]).intl;
          obj8.title = intl2.string(tmp5(tmp4[23]).t.C7iIKB);
          obj8.data = stateFromStores1.concat(arr11);
          items5.push(obj8);
        }
        if (reduced.length > 0) {
          const obj9 = { type: constants4.DISCONNECTED, title: null, data: null };
          const intl3 = tmp5(tmp4[23]).intl;
          obj9.title = intl3.string(tmp5(tmp4[23]).t.BnSq1I);
          obj9.data = reduced;
          items5.push(obj9);
        }
        const tmp14 = _slicedToArray(tmp3(tmp4[40]).partition(stateFromStores, (user) => stateFromStoresArray.includes(user.user.id)), 2);
      }
      const items6 = [channel.id, analyticsLocations];
      callback = items5.useCallback((id) => {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        showUserProfileActionSheetDefault({ userId: id.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
      }, items6);
      const items7 = [channel, flag, callback];
      callback1 = items5.useCallback((item) => {
        item = item.item;
        const type = item.section.type;
        if (constants.VOICE === type) {
          let tmp18 = null;
          if (!(item instanceof UserRecord)) {
            const obj2 = { item, channelId: channel.id, onPressUser: onPress, isActionSheet: flag };
            tmp18 = closure_2_23(closure_34, obj2);
          }
          return tmp18;
        } else if (constants.SPECTATING === type) {
          const obj3 = {};
          const merged = Object.assign(item);
          obj3.onPress = onPress;
          obj3.isSpectating = true;
          obj3.isActionSheet = true;
          return closure_2_23(VoiceMemberUserDefault, obj3);
        } else if (constants.DISCONNECTED === type) {
          const obj = { user: item, channel, isActionSheet: flag, onPress };
          return closure_2_23(VoiceMemberUser.DisconnectedUserRow, obj);
        }
      }, items7);
      if (flag) {
        const obj10 = { theme: ThemeTypes.DARK, children: null };
        const obj11 = { style: tmp2.container, children: null };
        const obj12 = { channel };
        const items8 = [closure_23(tmp5(tmp4[43]).VoiceChannelHeader, obj12), , ];
        const obj13 = { style: tmp2.headerFormDivider };
        items8[1] = closure_23(tmp5(tmp4[25]).FormDivider, obj13);
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
            items[1] = closure_2_23(Form.FormDivider, obj3);
            obj2.children = items;
            return closure_2_24(closure_2_25, obj2);
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
                tmp4 = tmp4(13612);
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
        items8[2] = closure_23(tmp3(tmp4[44]), obj14);
        obj11.children = items8;
        obj10.children = closure_24(callback1, obj11);
        let tmp24Result = closure_23(tmp5(tmp4[45]).ThemeContextProvider, obj10);
        const tmp3Result2 = tmp3(tmp4[44]);
      } else {
        const obj15 = { ref, sections: items5, renderSectionHeader, renderItem: callback1, keyExtractor: extractKey, ItemSeparatorComponent, ListFooterComponent: null, ListHeaderComponent: null, stickySectionHeadersEnabled: false };
        let tmp24Result2 = null;
        if (!flag2) {
          const obj16 = { channel };
          tmp24Result2 = closure_23(closure_28, obj16);
        }
        obj15.ListFooterComponent = tmp24Result2;
        const obj17 = { channel };
        obj15.ListHeaderComponent = closure_23(closure_27, obj17);
        const merged2 = Object.assign(merged);
        tmp24Result = closure_23(callback, obj15);
      }
      return tmp24Result;
    }
  }
  const obj5 = channel(analyticsLocations[21]);
  items5.push({ type: constants4.VOICE, title: null, data: stateFromStores1.concat(stateFromStores) });
  if (reduced.length > 0) {
    const obj19 = { type: constants4.DISCONNECTED, title: null, data: reduced };
    items5.push(obj19);
  }
  const obj18 = { type: constants4.VOICE, title: null, data: stateFromStores1.concat(stateFromStores) };
}));