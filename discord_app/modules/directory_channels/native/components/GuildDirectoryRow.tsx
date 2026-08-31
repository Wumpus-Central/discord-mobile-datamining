// discord_app/modules/directory_channels/native/components/GuildDirectoryRow.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../../utils/AvatarUtils.tsx";
import GuildIconSizesDefault from "../../../guild/native/GuildIcon.tsx";
import GuildDirectoryMoreMenuDefault from "GuildDirectoryMoreMenu.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../../stores/ChannelStore.tsx";
import closure_8 from "../../../../stores/GuildStore.tsx";
import { JoinGuildSources } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c5 = importAllResult;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { container: { flexDirection: "row", padding: 16, marginVertical: 6, marginHorizontal: 8 }, guildInfoContainer: { flexDirection: "column", flex: 1 }, guildIcon: null, guildWrapper: null, guildDescription: null, memberInfo: null, dotOnline: null, dotOffline: null, headerContainer: null, titleContainer: null, flex: null };
obj = { borderRadius: ThemesDefault.radii.sm, marginRight: 16 };
obj[2] = obj;
obj[3] = { flex: 1 };
obj[4] = { flexShrink: 1, marginBottom: 8 };
obj[5] = { flexDirection: "row", alignItems: "center", marginBottom: 8 };
createCacheKey = { width: 8, height: 8, borderRadius: ThemesDefault.radii.sm, marginRight: 4, backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
obj[6] = createCacheKey;
obj[7] = { width: 8, height: 8, borderRadius: ThemesDefault.radii.sm, marginRight: 4, marginLeft: 16, backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
obj[8] = { flexDirection: "row", marginBottom: 4, justifyContent: "space-between" };
obj[9] = { flexDirection: "row", flex: 1 };
obj[10] = { flex: 1, height: 4 };
let closure_13 = createCacheKey.createStyles(obj);
let obj2 = { width: 8, height: 8, borderRadius: ThemesDefault.radii.sm, marginRight: 4, marginLeft: 16, backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
const memoResult = importAllResult.memo(function GuildDirectoryRow(entry) {
  entry = entry.entry;
  importDefault = undefined;
  dependencyMap = undefined;
  function _handleJoinGuild() {
    const self = this;
    const tmp = _handleJoinGuild(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              let channelId = tmp7;
              channelId = undefined;
              closure_1_2(true);
              c3 = 1;
              if (closure_1_1) {
                closure_1_0(closure_1_2[11]).transitionToGuild(closure_1_0.guildId);
                c3 = 0;
                closure_1_2(false);
                c5 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = undefined;
                return obj1;
              } else {
                obj1 = closure_1_1(closure_1_2[12]);
                const obj2 = { source: null };
                obj2[0] = closure_1_9.DIRECTORY_ENTRY;
                c4 = 2;
                c5 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj1.joinGuild(closure_1_0.guildId, obj2);
                return obj3;
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_1_2(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_1_2(false);
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            channelId = closure_1_7.getChannel(channelId.channelId);
            if (null == channelId) {
              c3 = 0;
              closure_1_2(false);
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              let guildId;
              if (channelId != null) {
                guildId = channelId.getGuildId();
              }
              const result = closure_1_0(closure_1_2[13]).setHubProgressActionComplete(guildId, closure_1_0(closure_1_2[14]).HubProgressStep.JOIN_GUILD);
              c3 = 0;
              closure_1_2(false);
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          }
        } catch (tmp37) {
          closure_2 = tmp37;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp37;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    closure_3 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2();
  ({ description, approximateMemberCount, approximatePresenceCount } = entry);
  let obj = entry(589);
  const items = [closure_8];
  const tmp4 = null != obj.useStateFromStores(items, () => closure_1_8.getGuild(entry.guildId));
  importDefault = tmp4;
  const tmp5 = callback(importAllResult.useState(false), 2);
  dependencyMap = tmp5[1];
  obj1 = getAvatarURLDefault;
  obj = { id: entry.guildId, icon: entry.icon, size: 40 };
  const guildIconURL = obj1.getGuildIconURL(obj);
  const intl = tmp2(1236).intl;
  let stringResult = intl.string(tmp2(1236).t.VJlc0S);
  if (tmp4) {
    const intl2 = tmp2(1236).intl;
    stringResult = intl2.string(tmp2(1236).t.cqWE2Z);
  }
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.guildWrapper, children: null };
  let obj2 = { style: tmp.headerContainer, children: null };
  let obj3 = { style: tmp.titleContainer, children: null };
  const obj4 = { style: tmp.guildIcon, icon: guildIconURL, guild: null, selected: false };
  let result;
  if (null == guildIconURL) {
    result = tmp2(1426).fromGuildDirectoryEntry(entry);
    const tmp2Result = tmp2(1426);
  }
  obj4[2] = result;
  const items1 = [closure_10(GuildIconSizesDefault, obj4), ];
  const obj5 = { style: tmp.guildInfoContainer, children: null };
  const items2 = [closure_10(entry(4444).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: entry.name }), ];
  const obj6 = { style: tmp.memberInfo, children: null };
  let tmp10Result = null;
  if (null != approximatePresenceCount) {
    const obj7 = { children: null };
    const obj8 = { style: null };
    obj8[0] = tmp.dotOnline;
    const items3 = [tmp9(tmp11, obj8), ];
    const obj9 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl3 = tmp2(1236).intl;
    const obj10 = { membersOnline: null };
    obj10[0] = approximatePresenceCount;
    obj9[2] = intl3.format(tmp2(1236).t["LC+S+m"], obj10);
    items3[1] = tmp9(tmp2(4444).Text, obj9);
    obj7[0] = items3;
    tmp10Result = tmp10(closure_11, obj7);
  }
  const items4 = [tmp10Result, ];
  tmp10Result = null;
  if (null != approximateMemberCount) {
    const obj11 = { children: null };
    const obj12 = { style: null };
    obj12[0] = tmp.dotOffline;
    const items5 = [tmp9(tmp11, obj12), ];
    const obj13 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl4 = tmp2(1236).intl;
    const obj14 = { count: null };
    obj14[0] = approximateMemberCount;
    obj13[2] = intl4.format(tmp2(1236).t.zRl6XR, obj14);
    items5[1] = tmp9(tmp2(4444).Text, obj13);
    obj11[0] = items5;
    tmp10Result = tmp10(closure_11, obj11);
  }
  items4[1] = tmp10Result;
  obj6[1] = items4;
  items2[1] = closure_12(View, obj6);
  obj5[1] = items2;
  items1[1] = closure_12(View, obj5);
  obj3[1] = items1;
  const items6 = [closure_12(View, obj3), ];
  const tmp6Result = GuildIconSizesDefault;
  items6[1] = closure_10(View, { children: closure_10(GuildDirectoryMoreMenuDefault, { entry }) });
  obj2[1] = items6;
  const items7 = [closure_12(View, obj2), , , ];
  let tmp9Result = null != description;
  if (tmp9Result) {
    tmp9Result = "" !== description;
  }
  if (tmp9Result) {
    const obj16 = { lineClamp: 3, style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj16[1] = tmp.guildDescription;
    obj16[4] = description;
    tmp9Result = tmp9(tmp2(4444).Text, obj16);
  }
  items7[1] = tmp9Result;
  items7[2] = closure_10(View, { style: tmp.flex });
  const obj18 = {
    loading: tmp5[0],
    onPress: function handleJoinGuild() {
      const self = this;
      const apply = _handleJoinGuild.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    variant: null,
    text: null
  };
  let str2 = "active";
  if (tmp4) {
    str2 = "secondary";
  }
  obj18[2] = str2;
  obj18[3] = stringResult;
  items7[3] = closure_10(entry(4896).Button, obj18);
  obj1[1] = items7;
  obj[1] = closure_12(View, obj1);
  return closure_10(entry(5569).Card, obj);
});
let result = require("set").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryRow.tsx");

export default memoResult;