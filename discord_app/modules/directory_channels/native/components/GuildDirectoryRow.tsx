// === Module 12050: GuildDirectoryRow ===

// Module 12050 (GuildDirectoryRow)
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import GuildIconDefault from "GuildIcon" /* 6161 */;
import GuildDirectoryMoreMenuDefault from "GuildDirectoryMoreMenu" /* 12028 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildStore from "GuildStore" /* 2086 */;

const require = fn;
const View = fn(17).View;
const JoinGuildSources = fn(1085).JoinGuildSources;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5090);
let obj = { container: { flexDirection: "row", padding: 16, marginVertical: 6, marginHorizontal: 8 }, guildInfoContainer: { flexDirection: "column", flex: 1 }, guildIcon: { borderRadius: nativeDefault.radii.sm, marginRight: 16 }, guildWrapper: { flex: 1 }, guildDescription: { flexShrink: 1, marginBottom: 8 }, memberInfo: { flexDirection: "row", alignItems: "center", marginBottom: 8 }, dotOnline: null, dotOffline: null, headerContainer: null, titleContainer: null, flex: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm, marginRight: 4, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.dotOnline = size;
const size1 = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm, marginRight: 4, marginLeft: 16, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj.dotOffline = size1;
obj.headerContainer = { flexDirection: "row", marginBottom: 4, justifyContent: "space-between" };
obj.titleContainer = { flexDirection: "row", flex: 1 };
obj.flex = { flex: 1, height: 4 };
let closure_13 = createStyles.createStyles(obj);
let obj3 = { borderRadius: nativeDefault.radii.sm, marginRight: 16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryRow.tsx");

export default noop.memo(function GuildDirectoryRow(entry) {
  entry = entry.entry;
  closure_3 = async function _handleJoinGuild() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            entry = tmp8;
            let channel2;
            dependencyMap(true);
            c3 = 2;
            if (importDefault) {
              entry(tmp50[11]).transitionToGuild(entry.guildId);
              c3 = 0;
              dependencyMap(false);
              c5 = 3;
              const obj7 = { value: undefined, done: true };
              return obj7;
            } else {
              const obj9 = { source: constants.DIRECTORY_ENTRY };
              c4 = 3;
              c5 = 1;
              const obj10 = { value: tmp4(tmp50[12]).joinGuild(entry.guildId, obj9), done: false };
              return obj10;
            }
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_2(false);
          throw tmp50;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_1 = tmp50;
            const result = entry(tmp50[15]).ignoreJoinGuildRefused(closure_128_1);
            c3 = 0;
            closure_129_2(false);
            c5 = 3;
            const obj4 = entry(tmp50[15]);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_2(false);
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            channel2 = channel.getChannel(closure_129_0.channelId);
            if (null != channel2) {
              let guildId;
              if (channel2 != null) {
                guildId = obj2.getGuildId();
              }
              const result1 = entry(tmp50[13]).setHubProgressActionComplete(guildId, entry(tmp50[14]).HubProgressStep.JOIN_GUILD);
              c3 = 1;
              const obj = entry(tmp50[13]);
              obj2 = channel2;
            }
          }
          c3 = 0;
          closure_129_2(false);
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp50) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp50;
        } else if (tmp2 === tmp52) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp = closure_13();
  ({ description, approximateMemberCount, approximatePresenceCount } = entry);
  const items = [GuildStore];
  const tmp4 = null != entry(504).useStateFromStores(items, () => GuildStore.getGuild(entry.guildId));
  importDefault = tmp4;
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  dependencyMap = tmp5[1];
  let obj = entry(504);
  const guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: entry.guildId, icon: entry.icon, size: 40 });
  const intl = tmp2(1126).intl;
  let stringResult = intl.string(tmp2(1126).t.VJlc0S);
  if (tmp4) {
    const intl2 = tmp2(1126).intl;
    stringResult = intl2.string(tmp2(1126).t.cqWE2Z);
  }
  let obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.guildWrapper, children: null };
  let obj6 = { style: tmp.headerContainer, children: null };
  let obj7 = { style: tmp.titleContainer, children: null };
  const obj8 = { style: tmp.guildIcon, icon: guildIconURL, guild: null, selected: false };
  let result;
  let obj3 = { id: entry.guildId, icon: entry.icon, size: 40 };
  if (null == guildIconURL) {
    result = tmp2(2078).fromGuildDirectoryEntry(entry);
    const tmp2Result = tmp2(2078);
  }
  obj8.guild = result;
  const items1 = [closure_10(GuildIconDefault, obj8), ];
  let obj9 = { style: tmp.guildInfoContainer, children: null };
  const items2 = [closure_10(entry(5086).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: entry.name }), ];
  let obj10 = { style: tmp.memberInfo, children: null };
  let tmp10Result = null;
  if (null != approximatePresenceCount) {
    let obj11 = { children: null };
    const obj12 = { style: tmp.dotOnline };
    const items3 = [closure_10(View, obj12), ];
    const obj13 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl3 = tmp2(1126).intl;
    const obj14 = { membersOnline: approximatePresenceCount };
    obj13.children = intl3.format(tmp2(1126).t["LC+S+m"], obj14);
    items3[1] = closure_10(tmp2(5086).Text, obj13);
    obj11.children = items3;
    tmp10Result = closure_12(closure_11, obj11);
  }
  const items4 = [tmp10Result, ];
  let tmp10Result2 = null;
  if (null != approximateMemberCount) {
    const obj15 = { children: null };
    const obj16 = { style: tmp.dotOffline };
    const items5 = [closure_10(View, obj16), ];
    const obj17 = { variant: "text-xs/medium", color: "text-default", children: null };
    const intl4 = tmp2(1126).intl;
    const obj18 = { count: approximateMemberCount };
    obj17.children = intl4.format(tmp2(1126).t.zRl6XR, obj18);
    items5[1] = closure_10(tmp2(5086).Text, obj17);
    obj15.children = items5;
    tmp10Result2 = closure_12(closure_11, obj15);
  }
  items4[1] = tmp10Result2;
  obj10.children = items4;
  items2[1] = closure_12(View, obj10);
  obj9.children = items2;
  items1[1] = closure_12(View, obj9);
  obj7.children = items1;
  const items6 = [closure_12(View, obj7), ];
  const tmp6Result = GuildIconDefault;
  items6[1] = closure_10(View, { children: closure_10(GuildDirectoryMoreMenuDefault, { entry }) });
  obj6.children = items6;
  const items7 = [closure_12(View, obj6), , , ];
  let tmp9Result = null != description;
  if (tmp9Result) {
    tmp9Result = "" !== description;
  }
  if (tmp9Result) {
    const obj20 = { lineClamp: 3, style: tmp.guildDescription, variant: "text-sm/medium", color: "text-default", children: description };
    tmp9Result = closure_10(tmp2(5086).Text, obj20);
  }
  items7[1] = tmp9Result;
  items7[2] = closure_10(View, { style: tmp.flex });
  const obj22 = {
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
    text: null
  };
  let str2 = "active";
  if (tmp4) {
    str2 = "secondary";
  }
  obj22.variant = str2;
  obj22.text = stringResult;
  items7[3] = closure_10(entry(5375).Button, obj22);
  obj5.children = items7;
  obj4.children = closure_12(View, obj5);
  return closure_10(entry(6186).Card, obj4);
});