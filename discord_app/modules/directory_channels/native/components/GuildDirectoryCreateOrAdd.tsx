// discord_app/modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import SegmentedControlState from "../../../../design/components/SegmentedControl/native/SegmentedControlState.native.tsx";
import SegmentedControl from "../../../../design/components/SegmentedControl/native/SegmentedControl.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildDirectoryStore from "../../GuildDirectoryStore.tsx";

require = fn;
function GuildDirectoryCreateOrAddHeader(arg0) {
  ({ directoryGuildName, tabIndex, setTabIndex } = arg0);
  const tmp = closure_12();
  let obj = { pageWidth: 0, defaultIndex: tabIndex, onSetActiveIndex: setTabIndex, items: null };
  const intl = util.intl;
  const items = [intl.string(util.t.FTe8HS)];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t.epOumr);
  obj.items = items.map((id) => ({ id, label: id, page: null }));
  obj = { style: tmp.header, children: null };
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const obj1 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl3 = util.intl;
  obj1.children = intl3.format(util.t["9SKJdF"], { guildName: directoryGuildName });
  const items1 = [closure_1_10(Text_Text.Text, obj1), ,];
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = util.intl;
  obj2.children = intl4.string(util.t.pYFZ9p);
  items1[1] = closure_1_10(Text_Text.Text, obj2);
  items1[2] = closure_1_10(hasOwnProperty, {
    style: tmp.segmentedControl,
    children: closure_1_10(SegmentedControl.SegmentedControl, { state: segmentedControlState }),
  });
  obj.children = items1;
  return closure_1_11(hasOwnProperty, obj);
}
function GuildDirectoryCreateOrAddFooter(handleFooterPress) {
  const tmp = closure_12();
  let obj = { style: null, children: null };
  const items = [tmp.footerSafeAreaContainer];
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom };
  items[1] = obj;
  obj.style = items;
  obj = { style: tmp.footerContainer, children: null };
  const obj1 = {
    style: tmp.footerTitle,
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj1.children = intl.string(util.t.pgCZRP);
  const items1 = [closure_1_10(Text_Text.Text, obj1)];
  const obj2 = { variant: "secondary", text: null, onPress: null };
  const intl2 = util.intl;
  obj2.text = intl2.string(util.t.WqJbLi);
  obj2.onPress = handleFooterPress.handleFooterPress;
  items1[1] = closure_1_10(components_Button_Button.Button, obj2);
  obj.children = items1;
  obj.children = closure_1_11(hasOwnProperty, obj);
  return closure_1_10(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, FlatList: closure_7 } = get_ActivityIndicator);
const GuildDirectoryCreate = fn(12310).GuildDirectoryCreate;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let obj = {
  loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  container: { flex: 1 },
  guildIcon: null,
  header: null,
  title: null,
  description: null,
  footerSafeAreaContainer: null,
  footerContainer: null,
  footerTitle: null,
  segmentedControl: null,
};
obj = { borderRadius: nativeDefault.radii.sm };
obj.guildIcon = obj;
obj.header = { padding: 16, alignItems: "center", justifyContent: "center" };
obj.title = { marginBottom: 8, textAlign: "center" };
obj.description = { textAlign: "center" };
const createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  position: "absolute",
  bottom: 0,
  width: "100%",
};
obj.footerSafeAreaContainer = createStyles;
obj.footerContainer = { paddingHorizontal: 16, height: 110, justifyContent: "center" };
obj.footerTitle = { alignSelf: "center", textAlign: "center", marginBottom: 16 };
obj.segmentedControl = { paddingHorizontal: nativeDefault.space.PX_12, width: "100%", marginTop: 18 };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = noop.memo((guild) => {
  guild = guild.guild;
  const directoryChannelId = guild.directoryChannelId;
  ({ start, end } = guild);
  let obj = guild(504);
  const items = [GuildDirectoryStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    GuildDirectoryStore.getDirectoryEntry(directoryChannelId, guild.id),
  );
  obj = {
    label: guild.name,
    icon: null,
    trailing: closure_10(directoryChannelId(12313), { entry: stateFromStores }),
    start,
    end,
  };
  obj = { style: closure_12().guildIcon, guild };
  obj.icon = closure_10(directoryChannelId(5584), obj);
  return closure_10(guild(5605).TableRow, obj);
});
let closure_14 = noop.memo((guild) => {
  guild = guild.guild;
  const handleItemPress = guild.handleItemPress;
  ({ start, end } = guild);
  let obj = {
    onPress() {
      return handleItemPress(guild);
    },
    label: guild.name,
    icon: null,
    trailing: null,
    start: null,
    end: null,
  };
  obj = { style: closure_12().guildIcon, guild };
  obj.icon = closure_1_10(GuildIconDefault, obj);
  obj.trailing = closure_1_10(TableRow.TableRow.Arrow, {});
  obj.start = start;
  obj.end = end;
  return closure_1_10(TableRow.TableRow, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx");

export default function GuildDirectoryCreateOrAdd(set) {
  _require = set;
  const tmp = closure_12();
  let obj = require("useNavigation");
  const navigation = obj.useNavigation();
  ref = addedGuilds.useRef(set);
  let tmp6 = navigation(ref[19])(ref);
  const effect = addedGuilds.useEffect(() => {
    ref.current = current;
  });
  const tmp8 = navigation(ref[20])(tmp6.directoryGuildId, tmp6.directoryChannelId);
  const availableGuilds = tmp8.availableGuilds;
  addedGuilds = tmp8.addedGuilds;
  const bottom = navigation(ref[16])().bottom;
  const tmp9 = availableGuilds(addedGuilds.useState(0), 2);
  const tabIndex = tmp9[0];
  const setTabIndex = tmp9[1];
  const items = [addedGuilds, availableGuilds, tabIndex];
  const memo = addedGuilds.useMemo(() => (0 === first ? availableGuilds : addedGuilds), items);
  const items1 = [navigation];
  const items2 = [memo.length, navigation, tabIndex];
  const callback = addedGuilds.useCallback(() => {
    navigation.push(GuildDirectoryCreate.TEMPLATES, {
      directoryGuildName: ref.current.directoryGuildName,
      onHubGuildInfoSet(name, icon, template) {
        let obj = {
          createGuild: null,
          directoryChannelId: ref.current.directoryChannelId,
          directoryGuildName: ref.current.directoryGuildName,
        };
        obj = { name, icon, template };
        obj.createGuild = obj;
        navigation.push(constants.DESCRIPTION, obj);
      },
    });
  }, items1);
  const items3 = [tabIndex];
  const callback1 = addedGuilds.useCallback((guild) => {
    const index = guild.index;
    let obj = { guild: guild.item, start: 0 === index, end: index === memo.length - 1 };
    if (1 === first) {
      obj = {};
      const merged = Object.assign(obj);
      obj.directoryChannelId = ref.current.directoryChannelId;
      let tmp6 = closure_2_10(closure_13, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(obj);
      obj.handleItemPress = function handleItemPress(guild) {
        navigation.push(constants.DESCRIPTION, {
          guild,
          directoryChannelId: ref.current.directoryChannelId,
          directoryGuildName: ref.current.directoryGuildName,
        });
      };
      tmp6 = closure_2_10(closure_14, obj);
    }
    return tmp6;
  }, items2);
  [][0] = bottom;
  const callback2 = addedGuilds.useCallback(
    () =>
      closure_2_10(GuildDirectoryCreateOrAddHeader, {
        directoryGuildName: ref.current.directoryGuildName,
        tabIndex,
        setTabIndex,
      }),
    items3,
  );
  if (tmp8.loading) {
    obj = { style: tmp.loadingContainer, children: tmp15(tabIndex, {}) };
    let tmp15Result = tmp15(bottom, obj);
  } else {
    obj = { children: null };
    const obj1 = { style: tmp.container, children: null };
    const obj2 = { data: memo, ListHeaderComponent: callback2, renderItem: callback1, contentContainerStyle: tmp14 };
    const items4 = [tmp15(setTabIndex, obj2)];
    const obj3 = { handleFooterPress: callback };
    items4[1] = tmp15(GuildDirectoryCreateOrAddFooter, obj3);
    obj1.children = items4;
    obj.children = closure_11(bottom, obj1);
    tmp15Result = tmp15(require("GuildDirectoryAddModal").GuildDirectoryAddModalScreen, obj);
  }
  return tmp15Result;
}
