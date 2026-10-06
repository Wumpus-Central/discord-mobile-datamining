// === Module 11977: GuildDirectoryRow ===

// Module 11977 (GuildDirectoryRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import GuildIconDefault from "GuildIcon" /* 5978 */;
import GuildDirectoryMoreMenuDefault from "GuildDirectoryMoreMenu" /* 11955 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size_mod from "module_2" /* 2 */;

let c4, c5, closure_2, dependencyMap, importDefault;

let c10;
let closure_12;
let obj2;
let size;
let size1;
let unpackModuleId;
const View = react_native.View;
const JoinGuildSources = Constants.JoinGuildSources;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", padding: 16, marginVertical: 6, marginHorizontal: 8 }, guildInfoContainer: { flexDirection: "column", flex: 1 }, guildIcon: obj2, guildWrapper: { flex: 1 }, guildDescription: { flexShrink: 1, marginBottom: 8 }, memberInfo: { flexDirection: "row", alignItems: "center", marginBottom: 8 }, dotOnline: size, dotOffline: size1, headerContainer: { flexDirection: "row", marginBottom: 4, justifyContent: "space-between" }, titleContainer: { flexDirection: "row", flex: 1 }, flex: { flex: 1, height: 4 } };
obj2 = { borderRadius: nativeDefault.radii.sm, marginRight: 16 };
createStyles = createStyles.createStyles;
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm, marginRight: 4, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
size1 = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm, marginRight: 4, marginLeft: 16, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
let closure_13 = createStyles(obj);
const memoResult = react.memo(function GuildDirectoryRow(entry) {
  let approximateMemberCount;
  let approximatePresenceCount;
  let closure_1;
  let description;
  let first;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj14;
  let obj18;
  let obj5;
  let result;
  let str2;
  entry = entry.entry;
  dependencyMap = undefined;
  let obj = function _handleJoinGuild() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let obj4;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let channel2;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              channel2 = undefined;
              closure_2_2(true);
              c3 = 2;
              if (closure_2_1) {
                const obj7 = channel2(closure_2[11]);
                obj7.transitionToGuild(entry.guildId);
                c3 = 0;
                closure_2_2(false);
                c5 = 3;
                const obj6 = { value: undefined, done: true };
                return obj6;
              } else {
                const obj8 = { source: constants.DIRECTORY_ENTRY };
                c4 = 3;
                c5 = 1;
                const obj9 = { value: obj4.joinGuild(entry.guildId, obj8), done: false };
                obj4 = tmp(closure_2[12]);
                return obj9;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_2(false);
            throw closure_2;
          } else {
            if (2 === c4) {
              c3 = 1;
              const obj3 = channel2(closure_2[15]);
              const result = obj3.ignoreJoinGuildRefused(tmp);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_2(false);
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              channel2 = channel.getChannel(closure_129_0.channelId);
              if (null == channel2) {
                c3 = 0;
                closure_129_2(false);
                c5 = 3;
                return { value: "IconComponent", done: null };
              } else {
                let guildId;
                const setHubProgressActionComplete = channel2(closure_2[13]).setHubProgressActionComplete;
                obj = channel2;
                const tmp9 = channel2(closure_2[13]);
                if (channel2 != null) {
                  guildId = obj.getGuildId();
                }
                const result1 = setHubProgressActionComplete(guildId, channel2(closure_2[14]).HubProgressStep.JOIN_GUILD);
                c3 = 1;
              }
            }
            c3 = 0;
            closure_129_2(false);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp47) {
          closure_2 = tmp47;
          if (0 === c3) {
            c5 = 3;
            throw tmp47;
          } else if (1 === tmp49) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_13();
  ({ description, approximateMemberCount, approximatePresenceCount } = entry);
  const tmp3 = dependencyMap;
  const name = entry.name;
  obj = entry(504);
  const items = [GuildStore];
  const tmp4 = null != obj.useStateFromStores(items, () => GuildStore.getGuild(entry.guildId));
  importDefault = tmp4;
  [first, dependencyMap] = react.useState(false);
  let obj2 = AvatarUtilsDefault;
  let obj3 = { id: entry.guildId, icon: entry.icon, size: 40 };
  const guildIconURL = obj2.getGuildIconURL(obj3);
  const intl = tmp2(1126).intl;
  let stringResult = intl.string(tmp2(1126).t.VJlc0S);
  if (tmp4) {
    const intl2 = tmp2(1126).intl;
    stringResult = intl2.string(tmp2(1126).t.cqWE2Z);
  }
  let obj4 = { style: tmp.container, children: closure_12(View, obj5) };
  obj5 = { style: tmp.guildWrapper, children: items7 };
  let obj6 = { style: tmp.headerContainer, children: items6 };
  let obj7 = { style: tmp.titleContainer, children: items1 };
  const Card = tmp2(6002).Card;
  let obj8 = { style: tmp.guildIcon, icon: guildIconURL, guild: result, selected: false };
  result = undefined;
  const tmp7Result = GuildIconDefault;
  if (null == guildIconURL) {
    const tmp2Result = entry(2066);
    result = tmp2Result.fromGuildDirectoryEntry(entry);
  }
  items1 = [closure_10(tmp7Result, obj8), ];
  let obj9 = { style: tmp.guildInfoContainer, children: items2 };
  items2 = [closure_10(entry(4892).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: name }), ];
  let obj10 = { style: tmp.memberInfo, children: items4 };
  let tmp11Result = null;
  if (null != approximatePresenceCount) {
    const obj11 = { children: items3 };
    const obj12 = { style: tmp.dotOnline };
    items3 = [closure_10(View, obj12), ];
    const obj13 = { variant: "text-xs/medium", color: "text-default", children: intl3.format(entry(1126).t["LC+S+m"], obj14) };
    const Text = tmp2(4892).Text;
    intl3 = tmp2(1126).intl;
    obj14 = { membersOnline: approximatePresenceCount };
    items3[1] = closure_10(Text, obj13);
    tmp11Result = closure_12(closure_11, obj11);
  }
  items4 = [tmp11Result, ];
  let tmp11Result2 = null;
  if (null != approximateMemberCount) {
    const obj15 = { children: items5 };
    const obj16 = { style: tmp.dotOffline };
    items5 = [closure_10(View, obj16), ];
    const obj17 = { variant: "text-xs/medium", color: "text-default", children: intl4.format(entry(1126).t.zRl6XR, obj18) };
    const Text2 = tmp2(4892).Text;
    intl4 = tmp2(1126).intl;
    obj18 = { count: approximateMemberCount };
    items5[1] = closure_10(Text2, obj17);
    tmp11Result2 = closure_12(closure_11, obj15);
  }
  items4[1] = tmp11Result2;
  items2[1] = closure_12(View, obj10);
  items1[1] = closure_12(View, obj9);
  items6 = [closure_12(View, obj7), ];
  const obj19 = { children: closure_10(GuildDirectoryMoreMenuDefault, { entry }) };
  items6[1] = closure_10(View, obj19);
  items7 = [closure_12(View, obj6), , , ];
  let tmp10Result = null != description;
  if (tmp10Result) {
    tmp10Result = "" !== description;
  }
  if (tmp10Result) {
    const obj20 = { lineClamp: 3, style: tmp.guildDescription, variant: "text-sm/medium", color: "text-default", children: description };
    tmp10Result = closure_10(tmp2(4892).Text, obj20);
  }
  items7[1] = tmp10Result;
  const obj21 = { style: tmp.flex };
  items7[2] = closure_10(View, obj21);
  const obj22 = {
    loading: first,
    onPress: function handleJoinGuild() {
      return obj(...arguments);
    },
    variant: str2,
    text: stringResult
  };
  str2 = "active";
  const Button = tmp2(5601).Button;
  if (tmp4) {
    str2 = "secondary";
  }
  items7[3] = closure_10(Button, obj22);
  return closure_10(Card, obj4);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryRow.tsx");

export default memoResult;