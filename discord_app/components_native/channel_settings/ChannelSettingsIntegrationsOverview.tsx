// === Module 17043: ChannelSettingsIntegrationsOverview ===

// Module 17043 (ChannelSettingsIntegrationsOverview)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import useNavigation from "useNavigation" /* 1490 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import TableRow3 from "TableRow" /* 6000 */;
import TableRowGroup2 from "TableRowGroup" /* 6081 */;
import Form2 from "Form" /* 8924 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9257 */;
import WebhookIcon from "WebhookIcon" /* 16933 */;
import ChannelsFollowedIcon from "ChannelsFollowedIcon" /* 17044 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let channel, channelId, importDefault, navigation;

let metroImportDefault;
let metroRequire;
let obj2;
const set = ChannelRecord.GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
const ChannelSettingsSections = Constants.ChannelSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let obj5;
  let obj = channel(576);
  const cResult = obj.c(10);
  channel = channel.channel;
  const obj2 = channel(1490);
  navigation = obj2.useNavigation();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const useGetOrFetchApplication = channel(6670).useGetOrFetchApplication;
  channel(6670);
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(application_id);
  let tmp8 = null;
  if (null != getOrFetchApplication) {
    let first;
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(channel(1126).t.oAvIAg);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== getOrFetchApplication) {
      const obj3 = { application: getOrFetchApplication };
      const tmp15 = closure_6(navigation(9257), obj3);
      cResult[1] = getOrFetchApplication;
      cResult[2] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[2];
    }
    if (cResult[3] === channel) {
      let tmp16;
      if (cResult[4] === navigation) {
        tmp16 = cResult[5];
      }
      if (cResult[6] === getOrFetchApplication.name) {
        if (cResult[7] === tmp12) {
          let tmp17;
          if (cResult[8] === tmp16) {
            tmp17 = cResult[9];
          }
          tmp8 = tmp17;
        }
      }
      const obj4 = { title: first, hasIcons: true, children: closure_6(channel(6000).TableRow, obj5) };
      const TableRowGroup = tmp(6081).TableRowGroup;
      obj5 = { label: getOrFetchApplication.name, icon: tmp12, arrow: true, onPress: tmp16 };
      const tmp19 = closure_6(TableRowGroup, obj4);
      cResult[6] = getOrFetchApplication.name;
      cResult[7] = tmp12;
      cResult[8] = tmp16;
      cResult[9] = tmp19;
      tmp17 = tmp19;
    }
    const fn = function c() {
      const obj = { channel, numScreensToPop: 1 };
      navigation.push(ChannelSettingsSections.EDIT_LINKED_LOBBY, obj);
    };
    cResult[3] = channel;
    cResult[4] = navigation;
    cResult[5] = fn;
    tmp16 = fn;
  }
  return tmp8;
}) : ((channel) => {
  let TableRow;
  let closure_1;
  let intl;
  let obj3;
  let obj4;
  channel = channel.channel;
  let obj = channel(1490);
  importDefault = obj.useNavigation();
  const linkedLobby = channel.linkedLobby;
  let application_id;
  const useGetOrFetchApplication = channel(6670).useGetOrFetchApplication;
  channel(6670);
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(application_id);
  let tmp6 = null;
  if (null != getOrFetchApplication) {
    const obj2 = { title: intl.string(channel(1126).t.oAvIAg), hasIcons: true, children: closure_6(TableRow, obj3) };
    const TableRowGroup = tmp(6081).TableRowGroup;
    intl = tmp(1126).intl;
    obj3 = {
      label: getOrFetchApplication.name,
      icon: closure_6(TableRowApplicationIconDefault, obj4),
      arrow: true,
      onPress() {
          const obj = { channel, numScreensToPop: 1 };
          closure_1.push(ChannelSettingsSections.EDIT_LINKED_LOBBY, obj);
        }
    };
    TableRow = tmp(6000).TableRow;
    obj4 = { application: getOrFetchApplication };
    tmp6 = closure_6(TableRowGroup, obj2);
  }
  return tmp6;
});
let obj = { screenContainer: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let canManageWebhooks;
  let canUnlinkLobby;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let tmp7;
  const obj = channelId(576);
  const cResult = obj.c(17);
  channelId = channelId.channelId;
  ({ canManageWebhooks, canUnlinkLobby } = channelId);
  const obj2 = channelId(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function p() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmp9 = closure_9();
  let tmp10 = null;
  if (null != stateFromStores) {
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { paddingHorizontal: navigation(587).space.PX_12 };
      cResult[3] = obj3;
      tmp11 = obj3;
    } else {
      tmp11 = cResult[3];
    }
    if (cResult[4] === canManageWebhooks) {
      if (cResult[5] === stateFromStores) {
        let tmp13;
        if (cResult[6] === navigation) {
          tmp13 = cResult[7];
        }
        if (cResult[8] === canUnlinkLobby) {
          let tmp19;
          if (cResult[9] === stateFromStores) {
            tmp19 = cResult[10];
          }
          if (cResult[11] === tmp13) {
            let tmp23;
            if (cResult[12] === tmp19) {
              tmp23 = cResult[13];
            }
            if (cResult[14] === tmp9.screenContainer) {
              let tmp27;
              if (cResult[15] === tmp23) {
                tmp27 = cResult[16];
              }
              tmp10 = tmp27;
            }
            const obj4 = { style: tmp9.screenContainer, children: tmp23 };
            const tmp29 = closure_6(channelId(8924).Form, obj4);
            cResult[14] = tmp9.screenContainer;
            cResult[15] = tmp23;
            cResult[16] = tmp29;
            tmp27 = tmp29;
          }
          const obj5 = { style: tmp11, spacing: navigation(587).space.PX_24, children: items1 };
          const Stack = tmp(5600).Stack;
          items1 = [tmp13, tmp19];
          const tmp26 = closure_7(Stack, obj5);
          cResult[11] = tmp13;
          cResult[12] = tmp19;
          cResult[13] = tmp26;
          tmp23 = tmp26;
        }
        let tmp20 = canUnlinkLobby && null != stateFromStores.linkedLobby;
        if (tmp20) {
          const obj6 = { channel: stateFromStores };
          tmp20 = closure_6(closure_8, obj6);
        }
        cResult[8] = canUnlinkLobby;
        cResult[9] = stateFromStores;
        cResult[10] = tmp20;
        tmp19 = tmp20;
      }
    }
    let tmp15Result = canManageWebhooks;
    if (tmp15Result) {
      const TableRowGroup = tmp(6081).TableRowGroup;
      const obj7 = {
        label: intl.string(channelId(1126).t.jp25Id),
        subLabel: intl2.string(channelId(1126).t.mKIOkI),
        icon: closure_6(channelId(16933).WebhookIcon, {}),
        arrow: true,
        onPress() {
              return navigation.push(ChannelSettingsSections.WEBHOOKS);
            }
      };
      const TableRow = tmp(6000).TableRow;
      intl = tmp(1126).intl;
      intl2 = tmp(1126).intl;
      const items2 = [closure_6(TableRow, obj7), ];
      let hasItem = set.has(stateFromStores.type);
      if (hasItem) {
        const obj8 = {
          label: intl3.string(channelId(1126).t.OrV60r),
          subLabel: intl4.string(channelId(1126).t.rQREJl),
          icon: closure_6(channelId(17044).ChannelsFollowedIcon, {}),
          arrow: true,
          onPress() {
                  return navigation.push(ChannelSettingsSections.CHANNELS_FOLLOWED);
                }
        };
        const TableRow2 = tmp(6000).TableRow;
        intl3 = tmp(1126).intl;
        intl4 = tmp(1126).intl;
        hasItem = closure_6(TableRow2, obj8);
      }
      const obj9 = { hasIcons: true, children: items2 };
      items2[1] = hasItem;
      tmp15Result = closure_7(TableRowGroup, obj9);
    }
    cResult[4] = canManageWebhooks;
    cResult[5] = stateFromStores;
    cResult[6] = navigation;
    cResult[7] = tmp15Result;
    tmp13 = tmp15Result;
  }
  return tmp10;
}) : ((arg0) => {
  let Stack;
  let canManageWebhooks;
  let canUnlinkLobby;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let obj4;
  let obj5;
  ({ channelId: require, canManageWebhooks, canUnlinkLobby } = arg0);
  const obj = useNavigation;
  importDefault = obj.useNavigation();
  const items = [ChannelStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let tmp6Result = null;
  if (null != stateFromStores) {
    const obj3 = { style: tmp4.screenContainer, children: closure_7(Stack, obj4) };
    const Form = Form2.Form;
    obj4 = { style: obj5, spacing: nativeDefault.space.PX_24, children: items2 };
    obj5 = { paddingHorizontal: nativeDefault.space.PX_12 };
    Stack = Stack_Stack.Stack;
    if (canManageWebhooks) {
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      const obj6 = {
        label: intl.string(intl5.t.jp25Id),
        subLabel: intl2.string(intl5.t.mKIOkI),
        icon: closure_6(WebhookIcon.WebhookIcon, {}),
        arrow: true,
        onPress() {
              return closure_1.push(ChannelSettingsSections.WEBHOOKS);
            }
      };
      const TableRow = TableRow3.TableRow;
      intl = intl5.intl;
      intl2 = intl5.intl;
      const items1 = [closure_6(TableRow, obj6), ];
      let hasItem = set.has(stateFromStores.type);
      if (hasItem) {
        const obj7 = {
          label: intl3.string(intl5.t.OrV60r),
          subLabel: intl4.string(intl5.t.rQREJl),
          icon: closure_6(ChannelsFollowedIcon.ChannelsFollowedIcon, {}),
          arrow: true,
          onPress() {
                  return closure_1.push(ChannelSettingsSections.CHANNELS_FOLLOWED);
                }
        };
        const TableRow2 = TableRow3.TableRow;
        intl3 = intl5.intl;
        intl4 = intl5.intl;
        hasItem = closure_6(TableRow2, obj7);
      }
      const obj8 = { hasIcons: true, children: items1 };
      items1[1] = hasItem;
      canManageWebhooks = closure_7(TableRowGroup, obj8);
    }
    items2 = [canManageWebhooks, ];
    if (canUnlinkLobby) {
      canUnlinkLobby = null != stateFromStores.linkedLobby;
    }
    if (canUnlinkLobby) {
      const obj9 = { channel: stateFromStores };
      canUnlinkLobby = closure_6(closure_8, obj9);
    }
    items2[1] = canUnlinkLobby;
    tmp6Result = closure_6(Form, obj3);
  }
  return tmp6Result;
});
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx");

export default tmp4;