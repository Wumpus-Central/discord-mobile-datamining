// === Module 17818: GuildSettingsModalLobbiesLinked ===

// Module 17818 (GuildSettingsModalLobbiesLinked)
import Constants from "Constants" /* 1085 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channels, dependencyMap, navigation;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const GuildSettingsSections = Constants.GuildSettingsSections;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((channels) => {
  let obj = channels(navigation[6]);
  const cResult = obj.c(11);
  const tmp = channels;
  channels = channels.channels;
  const isOnlySection = channels.isOnlySection;
  const applicationId = channels.applicationId;
  let obj2 = channels(navigation[7]);
  const tmp2 = navigation;
  navigation = obj2.useNavigation();
  let obj3 = channels(navigation[8]);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(applicationId);
  if (0 === channels.length) {
    return null;
  } else {
    let name;
    let tmp6;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    if (cResult[0] === channels) {
      if (cResult[1] === isOnlySection) {
        if (cResult[2] === navigation) {
          tmp6 = cResult[3];
        }
        if (cResult[8] === name) {
          let tmp9;
          if (cResult[9] === tmp6) {
            tmp9 = cResult[10];
          }
          return tmp9;
        }
        let obj4 = { title: name, hasIcons: true, children: tmp6 };
        const tmp11 = closure_6(tmp(tmp2[12]).TableRowGroup, obj4);
        cResult[8] = name;
        cResult[9] = tmp6;
        cResult[10] = tmp11;
        tmp9 = tmp11;
      }
    }
    if (cResult[4] === channels.length) {
      if (cResult[5] === isOnlySection) {
        let tmp7;
        if (cResult[6] === navigation) {
          tmp7 = cResult[7];
        }
        const mapped = channels.map(tmp7);
        cResult[0] = channels;
        cResult[1] = isOnlySection;
        cResult[2] = navigation;
        cResult[3] = mapped;
        tmp6 = mapped;
      }
    }
    const fn = function y(id) {
      let Icon;
      let obj2;
      let obj3;
      let obj4;
      const channel = id;
      let obj = {
        label: obj2.computeChannelName(id, UserStore, RelationshipStore),
        icon: closure_1_6(Icon, obj3),
        arrow: true,
        onPress() {
          let num;
          const obj = { channel, numScreensToPop: num };
          num = 1;
          const push = navigation.push;
          const EDIT_LINKED_LOBBY = GuildSettingsSections.EDIT_LINKED_LOBBY;
          if (isOnlySection) {
            num = 1;
            if (1 === channels.length) {
              num = 2;
            }
          }
          push(EDIT_LINKED_LOBBY, obj);
        }
      };
      const TableRow = channels(navigation[9]).TableRow;
      obj2 = channels(navigation[10]);
      obj3 = { IconComponent: obj4.getChannelIconComponent(id) };
      Icon = channels(navigation[9]).TableRow.Icon;
      obj4 = channels(navigation[11]);
      return closure_1_6(TableRow, obj, id.id);
    };
    let num = 4;
    cResult[4] = channels.length;
    cResult[5] = isOnlySection;
    cResult[6] = navigation;
    cResult[7] = fn;
    tmp7 = fn;
  }
}) : ((channels) => {
  let closure_2;
  channels = channels.channels;
  const isOnlySection = channels.isOnlySection;
  const applicationId = channels.applicationId;
  let obj = channels(1490);
  dependencyMap = obj.useNavigation();
  let obj2 = channels(6670);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(applicationId);
  let tmp5Result = null;
  const tmp = channels;
  if (0 !== channels.length) {
    let name;
    const TableRowGroup = tmp(6081).TableRowGroup;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    let obj3 = {
      title: name,
      hasIcons: true,
      children: channels.map((id) => {
          let Icon;
          let obj2;
          let obj3;
          let obj4;
          const channel = id;
          let obj = {
            label: obj2.computeChannelName(id, UserStore, RelationshipStore),
            icon: closure_1_6(Icon, obj3),
            arrow: true,
            onPress() {
              let num;
              const obj = { channel, numScreensToPop: num };
              num = 1;
              const push = navigation.push;
              const EDIT_LINKED_LOBBY = GuildSettingsSections.EDIT_LINKED_LOBBY;
              if (isOnlySection) {
                num = 1;
                if (1 === channels.length) {
                  num = 2;
                }
              }
              push(EDIT_LINKED_LOBBY, obj);
            }
          };
          const TableRow = channels(navigation[9]).TableRow;
          obj2 = channels(navigation[10]);
          obj3 = { IconComponent: obj4.getChannelIconComponent(id) };
          Icon = channels(navigation[9]).TableRow.Icon;
          obj4 = channels(navigation[11]);
          return closure_1_6(TableRow, obj, id.id);
        })
    };
    tmp5Result = closure_6(TableRowGroup, obj3);
  }
  return tmp5Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr;
  let closure_0;
  let contentContainerStyle;
  let guildId;
  let items1;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(22);
  ({ contentContainerStyle, guildId } = arg0);
  const obj2 = require("useToken");
  const token = obj2.useToken(arr(587).modules.mobile.TABLE_ROW_PADDING);
  const obj3 = require("useChannelsAllowedToUnlink");
  const channelsAllowedToUnlink = obj3.useChannelsAllowedToUnlink(guildId);
  if (cResult[0] !== channelsAllowedToUnlink) {
    let tmp9;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function l(linkedLobby) {
        linkedLobby = linkedLobby.linkedLobby;
        let application_id;
        if (linkedLobby != null) {
          application_id = linkedLobby.application_id;
        }
        return application_id;
      };
      cResult[2] = fn;
      tmp9 = fn;
    } else {
      tmp9 = cResult[2];
    }
    const tmp4Result = arr(12);
    const groupByResult = tmp4Result.groupBy(channelsAllowedToUnlink, tmp9);
    cResult[0] = channelsAllowedToUnlink;
    cResult[1] = groupByResult;
    tmp7 = groupByResult;
  } else {
    tmp7 = cResult[1];
  }
  _require = tmp7;
  if (cResult[3] !== tmp7) {
    const _Object = Object;
    const keys = Object.keys(tmp7);
    cResult[3] = tmp7;
    cResult[4] = keys;
    arr = keys;
  } else {
    arr = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { paddingTop: arr(587).space.PX_16 };
    cResult[5] = obj4;
    tmp13 = obj4;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== contentContainerStyle) {
    const items = [tmp13, contentContainerStyle];
    cResult[6] = contentContainerStyle;
    cResult[7] = items;
    tmp14 = items;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] !== token) {
    const obj5 = { paddingHorizontal: token };
    cResult[8] = token;
    cResult[9] = obj5;
    tmp15 = obj5;
  } else {
    tmp15 = cResult[9];
  }
  if (cResult[10] === arr) {
    let tmp16;
    if (cResult[11] === tmp7) {
      tmp16 = cResult[12];
    }
    if (cResult[13] === tmp15) {
      let tmp18;
      if (cResult[14] === tmp16) {
        tmp18 = cResult[15];
      }
      if (cResult[16] === tmp14) {
        let tmp21;
        let tmp24;
        let tmp27;
        if (cResult[17] === tmp18) {
          tmp21 = cResult[18];
        }
        const _Symbol2 = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp26 = closure_6(require("NavScrim").NavScrim, {});
          cResult[19] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[19];
        }
        if (cResult[20] !== tmp21) {
          const obj6 = { children: items1 };
          items1 = [tmp21, tmp24];
          const tmp30 = closure_8(closure_7, obj6);
          cResult[20] = tmp21;
          cResult[21] = tmp30;
          tmp27 = tmp30;
        } else {
          tmp27 = cResult[21];
        }
        return tmp27;
      }
      const obj7 = { contentContainerStyle: tmp14, children: tmp18 };
      const tmp23 = closure_6(require("Form").Form, obj7);
      cResult[16] = tmp14;
      cResult[17] = tmp18;
      cResult[18] = tmp23;
      tmp21 = tmp23;
    }
    const obj8 = { style: tmp15, spacing: arr(587).space.PX_24, children: tmp16 };
    const Stack = tmp(5600).Stack;
    const tmp20 = closure_6(Stack, obj8);
    cResult[13] = tmp15;
    cResult[14] = tmp16;
    cResult[15] = tmp20;
    tmp18 = tmp20;
  }
  const mapped = arr.map((applicationId) => {
    const obj = { applicationId, channels: closure_0[applicationId], isOnlySection: 1 === arr.length };
    return metroRequire(closure_9, obj, applicationId);
  });
  cResult[10] = arr;
  cResult[11] = tmp7;
  cResult[12] = mapped;
  tmp16 = mapped;
}) : ((arg0) => {
  let Stack;
  let _undefined;
  let contentContainerStyle;
  let guildId;
  let items;
  let items1;
  let obj7;
  _require = undefined;
  let keys;
  ({ contentContainerStyle, guildId } = arg0);
  let obj = require("useToken");
  const token = obj.useToken(keys(587).modules.mobile.TABLE_ROW_PADDING);
  const obj2 = require("useChannelsAllowedToUnlink");
  const channelsAllowedToUnlink = obj2.useChannelsAllowedToUnlink(guildId);
  const obj3 = keys(12);
  const groupByResult = obj3.groupBy(channelsAllowedToUnlink, (linkedLobby) => {
    linkedLobby = linkedLobby.linkedLobby;
    let application_id;
    if (linkedLobby != null) {
      application_id = linkedLobby.application_id;
    }
    return application_id;
  });
  _require = groupByResult;
  keys = Object.keys(groupByResult);
  const obj4 = { children: items1 };
  const obj5 = { contentContainerStyle: items, children: closure_6(Stack, obj7) };
  const obj6 = { paddingTop: keys(587).space.PX_16 };
  const Form = require("Form").Form;
  items = [obj6, contentContainerStyle];
  obj7 = {
    style: { paddingHorizontal: token },
    spacing: keys(587).space.PX_24,
    children: keys.map((applicationId) => {
      const obj = { applicationId, channels: _undefined[applicationId], isOnlySection: 1 === keys.length };
      return metroRequire(closure_9, obj, applicationId);
    })
  };
  Stack = require("Stack/Stack").Stack;
  items1 = [closure_6(Form, obj5), closure_6(require("NavScrim").NavScrim, {})];
  return closure_8(closure_7, obj4);
});
const result = size.fileFinishedImporting("modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx");

export default tmp4;