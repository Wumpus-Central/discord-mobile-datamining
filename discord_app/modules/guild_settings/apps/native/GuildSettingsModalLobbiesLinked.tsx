// === Module 18339: GuildSettingsModalLobbiesLinked ===

// Module 18339 (GuildSettingsModalLobbiesLinked)
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

const require = fn;
const GuildSettingsSections = fn(1085).GuildSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function SyncingToGamesItem(channels) {
  const cResult = channels(navigation[6]).c(11);
  channels = channels.channels;
  const isOnlySection = channels.isOnlySection;
  let obj = channels(navigation[6]);
  const tmp = channels;
  const tmp2 = navigation;
  navigation = channels(navigation[7]).useNavigation();
  let obj2 = channels(navigation[7]);
  const getOrFetchApplication = channels(navigation[8]).useGetOrFetchApplication(channels.applicationId);
  let num = 0;
  if (0 === channels.length) {
    return null;
  } else {
    if (getOrFetchApplication != null) {
      const name = getOrFetchApplication.name;
    }
    if (cResult[0] === channels) {
      if (cResult[1] === isOnlySection) {
        if (cResult[2] === navigation) {
          if (cResult[8] === name) {
            if (cResult[9] === tmp6) {
              let tmp10 = cResult[10];
            }
            return tmp10;
          }
          const obj4 = { title: name, hasIcons: true, children: null };
          class I {
            constructor(arg0) {
              closure_0 = channels;
              obj = { label: null, icon: null, arrow: true, onPress: null };
              obj2 = channels(closure_2[10]);
              obj.label = obj2.computeChannelName(channels, closure_1_4, closure_1_3);
              obj1 = { IconComponent: null };
              obj4 = channels(closure_2[11]);
              obj1.IconComponent = obj4.getChannelIconComponent(channels);
              obj.icon = closure_1_6(channels(closure_2[9]).TableRow.Icon, obj1);
              obj.onPress = function onPress() { ... };
              return closure_1_6(channels(closure_2[9]).TableRow, obj, channels.id);
            }
          }
          const tmp12 = closure_6(tmp(tmp2[12]).TableRowGroup, obj4);
          cResult[8] = name;
          cResult[9] = cResult[3];
          cResult[10] = tmp12;
          tmp10 = tmp12;
        }
      }
    }
    if (cResult[4] === channels.length) {
      if (cResult[5] === isOnlySection) {
        if (cResult[6] === navigation) {
          let tmp7 = cResult[7];
        }
        const mapped = channels.map(tmp7);
        cResult[num] = channels;
        cResult[1] = isOnlySection;
        class I {
          constructor(arg0) {
            closure_0 = channels;
            obj = { label: null, icon: null, arrow: true, onPress: null };
            obj2 = channels(closure_2[10]);
            obj.label = obj2.computeChannelName(channels, closure_1_4, closure_1_3);
            obj1 = { IconComponent: null };
            obj4 = channels(closure_2[11]);
            obj1.IconComponent = obj4.getChannelIconComponent(channels);
            obj.icon = closure_1_6(channels(closure_2[9]).TableRow.Icon, obj1);
            obj.onPress = function onPress() { ... };
            return closure_1_6(channels(closure_2[9]).TableRow, obj, channels.id);
          }
        }
        cResult[2] = navigation;
        num = 3;
        cResult[3] = mapped;
      }
    }
    class I {
      constructor(arg0) {
        closure_0 = channels;
        obj = { label: null, icon: null, arrow: true, onPress: null };
        obj2 = channels(closure_2[10]);
        obj.label = obj2.computeChannelName(channels, closure_1_4, closure_1_3);
        obj1 = { IconComponent: null };
        obj4 = channels(closure_2[11]);
        obj1.IconComponent = obj4.getChannelIconComponent(channels);
        obj.icon = closure_1_6(channels(closure_2[9]).TableRow.Icon, obj1);
        obj.onPress = function onPress() { ... };
        return closure_1_6(channels(closure_2[9]).TableRow, obj, channels.id);
      }
    }
    cResult[4] = channels.length;
    cResult[5] = isOnlySection;
    cResult[6] = navigation;
    cResult[7] = I;
    tmp7 = I;
  }
  let obj3 = channels(navigation[8]);
}) : (function SyncingToGamesItem(channels) {
  channels = channels.channels;
  const isOnlySection = channels.isOnlySection;
  dependencyMap = channels(1503).useNavigation();
  let obj = channels(1503);
  const tmp = channels;
  const getOrFetchApplication = channels(6857).useGetOrFetchApplication(channels.applicationId);
  let tmp5Result = null;
  if (0 !== channels.length) {
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    let obj3 = {
      title: name,
      hasIcons: true,
      children: channels.map((id) => {
          const channel = id;
          let obj = { label: channels(5421).computeChannelName(id, UserStore, RelationshipStore), icon: null, arrow: true, onPress: null };
          const obj3 = { IconComponent: null };
          const obj2 = channels(5421);
          obj3.IconComponent = channels(8158).getChannelIconComponent(id);
          obj.icon = closure_1_6(channels(6179).TableRow.Icon, obj3);
          obj.onPress = function onPress() {
            const obj = { channel, numScreensToPop: null };
            let num = 1;
            if (isOnlySection) {
              num = 1;
              if (1 === channels.length) {
                num = 2;
              }
            }
            obj.numScreensToPop = num;
            closure_2.push(GuildSettingsSections.EDIT_LINKED_LOBBY, obj);
          };
          return closure_1_6(channels(6179).TableRow, obj, id.id);
        })
    };
    tmp5Result = closure_6(tmp(6264).TableRowGroup, obj3);
  }
  return tmp5Result;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalLobbiesLinked(arg0) {
  const cResult = require("c").c(22);
  ({ contentContainerStyle, guildId } = arg0);
  const obj = require("c");
  const token = require("useToken").useToken(arr(587).modules.mobile.TABLE_ROW_PADDING);
  const obj2 = require("useToken");
  const channelsAllowedToUnlink = require("useChannelsAllowedToUnlink").useChannelsAllowedToUnlink(guildId);
  if (cResult[0] !== channelsAllowedToUnlink) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function t(linkedLobby) {
        linkedLobby = linkedLobby.linkedLobby;
        let application_id;
        if (linkedLobby != null) {
          application_id = linkedLobby.application_id;
        }
        return application_id;
      };
      cResult[2] = fn;
      let tmp9 = fn;
    } else {
      tmp9 = cResult[2];
    }
    const groupByResult = tmp4(12).groupBy(channelsAllowedToUnlink, tmp9);
    cResult[0] = channelsAllowedToUnlink;
    cResult[1] = groupByResult;
    const tmp4Result = tmp4(12);
  } else {
    _require = tmp7;
    if (cResult[3] !== cResult[1]) {
      const _Object = Object;
      const keys = Object.keys(tmp7);
      cResult[3] = tmp7;
      cResult[4] = keys;
      arr = keys;
    } else {
      arr = cResult[4];
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { paddingTop: tmp4(587).space.PX_16 };
      cResult[5] = obj4;
      let tmp15 = obj4;
    } else {
      tmp15 = cResult[5];
    }
    if (cResult[6] !== contentContainerStyle) {
      const items = [tmp15, contentContainerStyle];
      cResult[6] = contentContainerStyle;
      cResult[7] = items;
      let tmp16 = items;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] !== token) {
      const obj5 = { paddingHorizontal: token };
      cResult[8] = token;
      cResult[9] = obj5;
      let tmp17 = obj5;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === arr) {
      if (cResult[11] === tmp7) {
        let tmp18 = cResult[12];
      }
      if (cResult[13] === tmp17) {
        if (cResult[14] === tmp18) {
          let tmp20 = cResult[15];
        }
        if (cResult[16] === tmp16) {
          if (cResult[17] === tmp20) {
            let tmp23 = cResult[18];
          }
          const _Symbol3 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp28 = closure_6(tmp(6727).NavScrim, {});
            cResult[19] = tmp28;
            let tmp26 = tmp28;
          } else {
            tmp26 = cResult[19];
          }
          if (cResult[20] !== tmp23) {
            const obj6 = { children: null };
            const items1 = [tmp23, tmp26];
            obj6.children = items1;
            const tmp32 = closure_8(closure_7, obj6);
            cResult[20] = tmp23;
            cResult[21] = tmp32;
            let tmp29 = tmp32;
          } else {
            tmp29 = cResult[21];
          }
          return tmp29;
        }
        const obj7 = { contentContainerStyle: tmp16, children: tmp20 };
        const tmp25 = closure_6(tmp(8579).Form, obj7);
        cResult[16] = tmp16;
        cResult[17] = tmp20;
        cResult[18] = tmp25;
        tmp23 = tmp25;
      }
      const obj8 = { style: tmp17, spacing: tmp4(587).space.PX_24, children: tmp18 };
      const tmp22 = closure_6(tmp(5377).Stack, obj8);
      cResult[13] = tmp17;
      cResult[14] = tmp18;
      cResult[15] = tmp22;
      tmp20 = tmp22;
    }
    const mapped = arr.map((applicationId) => timestampProducer(closure_9, { applicationId, channels: closure_0[applicationId], isOnlySection: 1 === arr.length }, applicationId));
    cResult[10] = arr;
    cResult[11] = cResult[1];
    cResult[12] = mapped;
    tmp18 = mapped;
  }
  const obj3 = require("useChannelsAllowedToUnlink");
}) : (function GuildSettingsModalLobbiesLinked(arg0) {
  _require = undefined;
  let keys;
  ({ contentContainerStyle, guildId } = arg0);
  const token = require("useToken").useToken(keys(587).modules.mobile.TABLE_ROW_PADDING);
  const obj = require("useToken");
  const channelsAllowedToUnlink = require("useChannelsAllowedToUnlink").useChannelsAllowedToUnlink(guildId);
  const obj2 = require("useChannelsAllowedToUnlink");
  const groupByResult = keys(12).groupBy(channelsAllowedToUnlink, (linkedLobby) => {
    linkedLobby = linkedLobby.linkedLobby;
    let application_id;
    if (linkedLobby != null) {
      application_id = linkedLobby.application_id;
    }
    return application_id;
  });
  _require = groupByResult;
  keys = Object.keys(groupByResult);
  const obj4 = { children: null };
  const obj5 = { contentContainerStyle: null, children: null };
  const obj3 = keys(12);
  const items = [{ paddingTop: keys(587).space.PX_16 }, contentContainerStyle];
  obj5.contentContainerStyle = items;
  const obj6 = { paddingTop: keys(587).space.PX_16 };
  obj5.children = closure_6(require("Stack/Stack").Stack, { style: { paddingHorizontal: token }, spacing: keys(587).space.PX_24, children: keys.map((applicationId) => timestampProducer(closure_9, { applicationId, channels: _undefined[applicationId], isOnlySection: 1 === keys.length }, applicationId)) });
  const items1 = [closure_6(require("Form").Form, obj5), closure_6(require("NavScrim").NavScrim, {})];
  obj4.children = items1;
  return closure_8(closure_7, obj4);
});