// discord_app/modules/directory_channels/native/components/GuildDirectoryRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import GuildDirectoryMoreMenuDefault from "GuildDirectoryMoreMenu.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = fn;
const View = fn(17).View;
const JoinGuildSources = fn(1074).JoinGuildSources;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
let obj = {
  container: { flexDirection: "row", padding: 16, marginVertical: 6, marginHorizontal: 8 },
  guildInfoContainer: { flexDirection: "column", flex: 1 },
  guildIcon: null,
  guildWrapper: null,
  guildDescription: null,
  memberInfo: null,
  dotOnline: null,
  dotOffline: null,
  headerContainer: null,
  titleContainer: null,
  flex: null,
};
obj = { borderRadius: nativeDefault.radii.sm, marginRight: 16 };
obj.guildIcon = obj;
obj.guildWrapper = { flex: 1 };
obj.guildDescription = { flexShrink: 1, marginBottom: 8 };
obj.memberInfo = { flexDirection: "row", alignItems: "center", marginBottom: 8 };
let size = {
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 4,
  backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360,
};
obj.dotOnline = size;
const size1 = {
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.sm,
  marginRight: 4,
  marginLeft: 16,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400,
};
obj.dotOffline = size1;
obj.headerContainer = { flexDirection: "row", marginBottom: 4, justifyContent: "space-between" };
obj.titleContainer = { flexDirection: "row", flex: 1 };
obj.flex = { flex: 1, height: 4 };
let closure_13 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryRow.tsx");

export default noop.memo(function GuildDirectoryRow(entry) {
  entry = entry.entry;
  closure_3 = async function _handleJoinGuild() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            entry = tmp7;
            let channel2;
            dependencyMap(true);
            c3 = 1;
            if (importDefault) {
              entry(tmp37[11]).transitionToGuild(entry.guildId);
              c3 = 0;
              dependencyMap(false);
              c5 = 3;
              let obj1 = { value: undefined, done: true };
              return obj1;
            } else {
              obj1 = tmp3(tmp37[12]);
              const obj2 = { source: constants.DIRECTORY_ENTRY };
              c4 = 2;
              c5 = 1;
              const obj3 = { value: obj1.joinGuild(entry.guildId, obj2), done: false };
              return obj3;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_129_2(false);
          throw tmp37;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_2(false);
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          channel2 = channel.getChannel(closure_129_0.channelId);
          if (null == channel2) {
            c3 = 0;
            closure_129_2(false);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            let guildId;
            if (channel2 != null) {
              guildId = channel2.getGuildId();
            }
            const result = entry(tmp37[13]).setHubProgressActionComplete(
              guildId,
              entry(tmp37[14]).HubProgressStep.JOIN_GUILD,
            );
            c3 = 0;
            closure_129_2(false);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } catch (tmp37) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp37;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp = closure_13();
  ({ description, approximateMemberCount, approximatePresenceCount } = entry);
  let obj = entry(504);
  const items = [GuildStore];
  const tmp4 = null != obj.useStateFromStores(items, () => GuildStore.getGuild(entry.guildId));
  importDefault = tmp4;
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp5[1];
  let obj1 = AvatarUtilsDefault;
  obj = { id: entry.guildId, icon: entry.icon, size: 40 };
  const guildIconURL = obj1.getGuildIconURL(obj);
  const intl = tmp2(1114).intl;
  let stringResult = intl.string(tmp2(1114).t.VJlc0S);
  if (tmp4) {
    const intl2 = tmp2(1114).intl;
    stringResult = intl2.string(tmp2(1114).t.cqWE2Z);
  }
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.guildWrapper, children: null };
  let obj2 = { style: tmp.headerContainer, children: null };
  let obj3 = { style: tmp.titleContainer, children: null };
  const obj4 = { style: tmp.guildIcon, icon: guildIconURL, guild: null, selected: false };
  let result;
  if (null == guildIconURL) {
    result = tmp2(1971).fromGuildDirectoryEntry(entry);
    const tmp2Result = tmp2(1971);
  }
  obj4.guild = result;
  const items1 = [closure_10(GuildIconDefault, obj4)];
  const obj5 = { style: tmp.guildInfoContainer, children: null };
  const items2 = [
    closure_10(entry(4556).Text, {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      children: entry.name,
    }),
  ];
  const obj6 = { style: tmp.memberInfo, children: null };
  let tmp10Result = null;
  if (null != approximatePresenceCount) {
    const obj7 = { children: null };
    const obj8 = { style: tmp.dotOnline };
    const items3 = [closure_10(View, obj8)];
    const obj9 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl3 = tmp2(1114).intl;
    const obj10 = { membersOnline: approximatePresenceCount };
    obj9.children = intl3.format(tmp2(1114).t["LC+S+m"], obj10);
    items3[1] = closure_10(tmp2(4556).Text, obj9);
    obj7.children = items3;
    tmp10Result = closure_12(closure_11, obj7);
  }
  const items4 = [tmp10Result];
  tmp10Result = null;
  if (null != approximateMemberCount) {
    const obj11 = { children: null };
    const obj12 = { style: tmp.dotOffline };
    const items5 = [closure_10(View, obj12)];
    const obj13 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl4 = tmp2(1114).intl;
    const obj14 = { count: approximateMemberCount };
    obj13.children = intl4.format(tmp2(1114).t.zRl6XR, obj14);
    items5[1] = closure_10(tmp2(4556).Text, obj13);
    obj11.children = items5;
    tmp10Result = closure_12(closure_11, obj11);
  }
  items4[1] = tmp10Result;
  obj6.children = items4;
  items2[1] = closure_12(View, obj6);
  obj5.children = items2;
  items1[1] = closure_12(View, obj5);
  obj3.children = items1;
  const items6 = [closure_12(View, obj3)];
  const tmp6Result = GuildIconDefault;
  items6[1] = closure_10(View, { children: closure_10(GuildDirectoryMoreMenuDefault, { entry }) });
  obj2.children = items6;
  const items7 = [closure_12(View, obj2), , ,];
  let tmp9Result = null != description;
  if (tmp9Result) {
    tmp9Result = "" !== description;
  }
  if (tmp9Result) {
    const obj16 = {
      lineClamp: 3,
      style: tmp.guildDescription,
      variant: "text-sm/medium",
      color: "text-default",
      children: description,
    };
    tmp9Result = closure_10(tmp2(4556).Text, obj16);
  }
  items7[1] = tmp9Result;
  items7[2] = closure_10(View, { style: tmp.flex });
  const obj18 = {
    loading: tmp5[0],
    onPress: function handleJoinGuild() {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    variant: null,
    text: null,
  };
  let str2 = "active";
  if (tmp4) {
    str2 = "secondary";
  }
  obj18.variant = str2;
  obj18.text = stringResult;
  items7[3] = closure_10(entry(4975).Button, obj18);
  obj1.children = items7;
  obj.children = closure_12(View, obj1);
  return closure_10(entry(5607).Card, obj);
});
