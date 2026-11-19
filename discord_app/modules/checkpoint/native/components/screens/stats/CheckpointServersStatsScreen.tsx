// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointServersStatsScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3307 from "../../../../Checkpoint.messages.js";
import _modDef3339 from "../../../../Checkpoint2026.messages.js";
import GuildIconDefault from "../../../../../guild/native/GuildIcon.tsx";
import CheckpointScreen from "../../CheckpointScreen.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import CheckpointApngPlayerDefault from "../../CheckpointApngPlayer.tsx";
import _modDef12633 from "../../../../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef12634 from "../../../../../../../discord_assets/assets/checkpoint/voice-globe-static.png.js";
import useIsCheckpointWideDefault from "../../../useIsCheckpointWide.tsx";
import CheckpointDisplayTextDefault from "../../CheckpointDisplayText.tsx";
import CheckpointGuildStatsDefault from "../../CheckpointGuildStats.tsx";
import CheckpointRankTagDefault from "../../CheckpointRankTag.tsx";
import CheckpointTruncatedTextDefault from "../../CheckpointTruncatedText.tsx";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../../../../CheckpointStore.tsx";

const require = globalThis.__r;
const CheckpointScreenDefault = CheckpointScreen;

require = fn;
function ServersLayout(containerStyle) {
  ({ header, children, guildsStyle } = containerStyle);
  const tmp = closure_11();
  const tmp2 = useIsCheckpointWideDefault();
  const checkpointScreenContentHeight = CheckpointScreen.useCheckpointScreenContentHeight(true);
  if (tmp2) {
    const obj2 = { centered: true, children: null };
    const obj3 = { style: null, children: null };
    items = [tmp.wideContainer];
    const obj4 = { height: checkpointScreenContentHeight };
    items[1] = obj4;
    obj3.style = items;
    const obj5 = { style: tmp.wideHeader, children: header };
    const items1 = [React6(timestampProducer, obj5)];
    const obj6 = {
      style: null,
      contentContainerStyle: null,
      showsVerticalScrollIndicator: false,
      nestedScrollEnabled: true,
      children: null,
    };
    ({ wideGuildsScroll: obj9.style, wideGuildsContent: obj9.contentContainerStyle } = tmp);
    const obj7 = { style: guildsStyle, children };
    obj6.children = React6(timestampProducer, obj7);
    items1[1] = React6(hasOwnProperty, obj6);
    obj3.children = items1;
    obj2.children = refs(timestampProducer, obj3);
    let obj8 = obj2;
  } else {
    obj8 = { children: null };
    const obj10 = { style: containerStyle.containerStyle, children: null };
    const items2 = [header];
    const obj19 = { style: guildsStyle, children };
    items2[1] = React6(timestampProducer, obj19);
    obj10.children = items2;
    obj8.children = refs(timestampProducer, obj10);
  }
  return React6(CheckpointScreenDefault, obj8);
}
function GuildCard(children) {
  ({ guild, iconFillsHeight } = children);
  ({ rank, iconStyle } = children);
  if (iconFillsHeight === undefined) {
    iconFillsHeight = false;
  }
  _require = undefined;
  const tmp = closure_11();
  [tmp3, c0] = noop.useState(0);
  const callback = noop.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    const sum = layout.y + layout.height;
    _undefined(sum + nativeDefault.space.PX_12);
  }, []);
  const bound = Math.max(96, tmp3);
  const obj = { style: tmp.guildCard, children: null };
  const obj2 = { style: tmp.guildContent, children: null };
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  items = [
    closure_9(closure_6, {
      style: tmp.guildRankRow,
      children: closure_9(CheckpointRankTagDefault, { rank, chamferCorner: "bottom-right" }),
    }),
  ];
  const obj4 = { style: tmp.guildDetails, onLayout: null, children: null };
  let tmp11;
  if (iconFillsHeight) {
    tmp11 = callback;
  }
  obj4.onLayout = tmp11;
  const items1 = [
    closure_9(CheckpointTruncatedTextDefault, {
      text: guild.name,
      guildId: guild.id,
      variant: "heading-lg/medium",
      style: tmp.guildName,
    }),
    children.children,
  ];
  obj4.children = items1;
  items[1] = closure_10(closure_6, obj4);
  obj2.children = items;
  const items2 = [closure_10(closure_6, obj2)];
  const obj6 = { guild, size: null, style: null };
  const obj3 = {
    style: tmp.guildRankRow,
    children: closure_9(CheckpointRankTagDefault, { rank, chamferCorner: "bottom-right" }),
  };
  const obj5 = { text: guild.name, guildId: guild.id, variant: "heading-lg/medium", style: tmp.guildName };
  obj6.size = require("GuildIcon").GuildIconSizes.XXLARGE;
  const items3 = [iconStyle];
  if (iconFillsHeight) {
    const size = { width: bound, height: bound };
    iconFillsHeight = size;
  }
  items3[1] = iconFillsHeight;
  obj6.style = items3;
  items2[1] = closure_9(GuildIconDefault, obj6);
  obj.children = items2;
  return closure_10(closure_6, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const CheckpointConstants = fn(5848);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_GUILD_CARD_BACKGROUND, CHECKPOINT_NAV_HEIGHT, CHECKPOINT_WHITE } =
  CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(4792);
let obj2 = {
  container: {
    width: "100%",
    flexGrow: 1,
    justifyContent: "center",
    gap: nativeDefault.space.PX_40,
    paddingBottom: nativeDefault.space.PX_64,
  },
  globalContainer: null,
  header: null,
  heading: null,
  globalHeading: null,
  globe: null,
  title: null,
  titleText: null,
  guilds: null,
  globalGuilds: null,
  guildCard: null,
  guildContent: null,
  guildRankRow: null,
  guildDetails: null,
  guildName: null,
  topGuildIcon: null,
  guildIcon: null,
  globalGuildIcon: null,
  wideContainer: null,
  wideHeader: null,
  wideGuildsScroll: null,
  wideGuildsContent: null,
};
let obj3 = {
  width: "100%",
  flexGrow: 1,
  justifyContent: "center",
  gap: nativeDefault.space.PX_40,
  paddingBottom: nativeDefault.space.PX_64,
};
obj2.globalContainer = { justifyContent: "flex-start", gap: nativeDefault.space.PX_24 };
let obj4 = { justifyContent: "flex-start", gap: nativeDefault.space.PX_24 };
obj2.header = { gap: nativeDefault.space.PX_12 };
let obj5 = { gap: nativeDefault.space.PX_12 };
obj2.heading = { gap: nativeDefault.space.PX_8 };
let obj6 = { gap: nativeDefault.space.PX_8 };
obj2.globalHeading = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj2.globe = { width: 75, height: 56 };
let obj7 = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.titleText = { flexShrink: 1 };
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.guilds = { gap: nativeDefault.space.PX_24 };
let obj9 = { gap: nativeDefault.space.PX_24 };
obj2.globalGuilds = { gap: nativeDefault.space.PX_16 };
let obj10 = { gap: nativeDefault.space.PX_16 };
obj2.guildCard = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  borderWidth: 1,
  borderColor: CHECKPOINT_PRIMARY,
  backgroundColor: CHECKPOINT_GUILD_CARD_BACKGROUND,
};
let obj11 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  borderWidth: 1,
  borderColor: CHECKPOINT_PRIMARY,
  backgroundColor: CHECKPOINT_GUILD_CARD_BACKGROUND,
};
obj2.guildContent = {
  flex: 1,
  alignSelf: "stretch",
  gap: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_12,
};
obj2.guildRankRow = { flexDirection: "row" };
let obj12 = { flex: 1, alignSelf: "stretch", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_12 };
obj2.guildDetails = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
obj2.guildName = { color: CHECKPOINT_WHITE };
let size = { width: 96, height: 96, borderRadius: nativeDefault.radii.none };
obj2.topGuildIcon = size;
const size1 = { width: 72, height: 72, borderRadius: nativeDefault.radii.none };
obj2.guildIcon = size1;
const size2 = { width: 64, height: 64, borderRadius: nativeDefault.radii.none };
obj2.globalGuildIcon = size2;
let obj13 = { gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
obj2.wideContainer = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  width: "100%",
  maxWidth: fn(12637).CHECKPOINT_WIDE_MAX_WIDTH,
};
let obj14 = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  width: "100%",
  maxWidth: fn(12637).CHECKPOINT_WIDE_MAX_WIDTH,
};
obj2.wideHeader = { width: "50%", paddingRight: nativeDefault.space.PX_32 };
obj2.wideGuildsScroll = { flexGrow: 0, width: "50%", alignSelf: "stretch" };
const obj16 = {
  flexGrow: 1,
  justifyContent: "center",
  paddingTop: CHECKPOINT_NAV_HEIGHT,
  paddingBottom: CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_32,
  paddingRight: null,
};
const result = 2 * fn(12421).CHECKPOINT_HEADER_BUTTON_SIZE;
let sum = result + nativeDefault.space.PX_12;
obj16.paddingRight = sum + nativeDefault.space.PX_8;
obj2.wideGuildsContent = obj16;
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
const result1 = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointServersStatsScreen.tsx",
);

export default function CheckpointServersStatsScreen() {
  let tmp = closure_11();
  _require = tmp;
  items = [CheckpointStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    stats = stats.stats;
    let guilds1;
    if (stats != null) {
      const guilds = stats.guilds;
      if (guilds != null) {
        guilds1 = guilds.guilds;
      }
    }
    const obj = { guilds: guilds1, globalGuilds: null };
    const globalStats = stats.globalStats;
    let guildsByMembers;
    if (globalStats != null) {
      const guilds2 = globalStats.guilds;
      if (guilds2 != null) {
        guildsByMembers = guilds2.guildsByMembers;
      }
    }
    obj.globalGuilds = guildsByMembers;
    return obj;
  });
  ({ guilds, globalGuilds } = stateFromStoresObject);
  if (null != guilds) {
    if (0 !== guilds.length) {
      let obj2 = { containerStyle: tmp.container, header: null, guildsStyle: null, children: null };
      const obj3 = { style: tmp.header, children: null };
      const obj4 = { style: tmp.heading, children: null };
      const obj5 = { style: tmp.title, children: null };
      const obj6 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
      const items1 = [closure_9(tmp2(12372).ServerIcon, obj6)];
      const obj7 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: null };
      const intl3 = tmp2(1113).intl;
      const tmp18 = CheckpointTextDefault;
      obj7.children = intl3.string(_modDef3339.Mb5E6r).toLocaleUpperCase();
      items1[1] = closure_9(tmp18, obj7);
      obj5.children = items1;
      const items2 = [closure_10(closure_6, obj5)];
      const obj8 = { children: null };
      const stringResult = intl3.string(_modDef3339.Mb5E6r);
      const intl4 = tmp2(1113).intl;
      const tmp19 = CheckpointDisplayTextDefault;
      obj8.children = intl4.string(_modDef3307.F0fkrh).toLocaleUpperCase();
      items2[1] = closure_9(tmp19, obj8);
      obj4.children = items2;
      const items3 = [closure_10(closure_6, obj4)];
      const obj9 = { variant: "heading-lg/medium", children: null };
      const stringResult1 = intl4.string(_modDef3307.F0fkrh);
      const intl5 = tmp2(1113).intl;
      obj9.children = intl5.string(_modDef3339.IN1DaS);
      items3[1] = closure_9(CheckpointTextDefault, obj9);
      obj3.children = items3;
      obj2.header = closure_10(closure_6, obj3);
      obj2.guildsStyle = tmp.guilds;
      obj2.children = guilds.map((item, index) => {
        ({ guild, numMessagesSent, numVoiceMinutes } = item);
        let tmp = 0 === index;
        const obj = {
          guild,
          rank: index + 1,
          iconStyle: tmp ? globalGuildIcon.topGuildIcon : globalGuildIcon.guildIcon,
          iconFillsHeight: tmp,
          children: null,
        };
        if (tmp) {
          if (numMessagesSent == null) {
            numMessagesSent = 0;
          }
          const obj2 = { numMessagesSent, numVoiceMinutes: null };
          if (numVoiceMinutes == null) {
            numVoiceMinutes = 0;
          }
          obj2.numVoiceMinutes = numVoiceMinutes;
          tmp = React6(CheckpointGuildStatsDefault, obj2);
        }
        obj.children = tmp;
        return React6(GuildCard, obj, guild.id);
      });
      let tmp5Result = closure_9(ServersLayout, obj2);
    }
    return tmp5Result;
  }
  const obj10 = { containerStyle: null, header: null, guildsStyle: null, children: null };
  const items4 = [,];
  ({ container: arr2[0], globalContainer: arr2[1] } = tmp);
  obj10.containerStyle = items4;
  const obj11 = { style: tmp.header, children: null };
  const obj12 = { style: tmp.globalHeading, children: null };
  const obj13 = { animatedUri: null, staticUri: null, style: null };
  let obj = require("initialize");
  obj13.animatedUri = _modDef12633;
  obj13.staticUri = _modDef12634;
  obj13.style = tmp.globe;
  const items5 = [closure_9(CheckpointApngPlayerDefault, obj13)];
  const obj14 = { isStepHeading: true, children: null };
  const intl = tmp2(1113).intl;
  const tmp8 = CheckpointDisplayTextDefault;
  obj14.children = intl.string(_modDef3307.F0fkrh).toLocaleUpperCase();
  items5[1] = closure_9(tmp8, obj14);
  obj12.children = items5;
  const items6 = [closure_10(closure_6, obj12)];
  const obj15 = { variant: "heading-lg/medium", children: null };
  const stringResult2 = intl.string(_modDef3307.F0fkrh);
  const intl2 = tmp2(1113).intl;
  obj15.children = intl2.string(_modDef3339.bhnqop);
  items6[1] = closure_9(CheckpointTextDefault, obj15);
  obj11.children = items6;
  obj10.header = closure_10(closure_6, obj11);
  obj10.guildsStyle = tmp.globalGuilds;
  let mapped;
  if (globalGuilds != null) {
    mapped = globalGuilds.map((guild, index) =>
      React6(GuildCard, { guild, rank: index + 1, iconStyle: globalGuildIcon.globalGuildIcon }, guild.id),
    );
  }
  obj10.children = mapped;
  tmp5Result = closure_9(ServersLayout, obj10);
}
