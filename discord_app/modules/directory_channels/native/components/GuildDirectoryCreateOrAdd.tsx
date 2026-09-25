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

const require = globalThis.__r;

require = fn;
function GuildDirectoryCreateOrAddHeader(arg0) {
  ({ directoryGuildName, tabIndex, setTabIndex } = arg0);
  const tmp = closure_12();
  const obj2 = { pageWidth: 0, defaultIndex: tabIndex, onSetActiveIndex: setTabIndex, items: null };
  const intl = util.intl;
  const items = [intl.string(util.t.FTe8HS)];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t.epOumr);
  obj2.items = items.map((id) => ({ id, label: id, page: null }));
  const obj3 = { style: tmp.header, children: null };
  const segmentedControlState = SegmentedControlState.useSegmentedControlState(obj2);
  const obj4 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl3 = util.intl;
  obj4.children = intl3.format(util.t["9SKJdF"], { guildName: directoryGuildName });
  const items1 = [closure_1_10(Text_Text.Text, obj4), ,];
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = util.intl;
  obj5.children = intl4.string(util.t.pYFZ9p);
  items1[1] = closure_1_10(Text_Text.Text, obj5);
  items1[2] = closure_1_10(hasOwnProperty, {
    style: tmp.segmentedControl,
    children: closure_1_10(SegmentedControl.SegmentedControl, { state: segmentedControlState }),
  });
  obj3.children = items1;
  return closure_1_11(hasOwnProperty, obj3);
}
function GuildDirectoryCreateOrAddFooter(handleFooterPress) {
  const tmp = closure_12();
  const obj = { style: null, children: null };
  const items = [tmp.footerSafeAreaContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj.style = items;
  const obj3 = { style: tmp.footerContainer, children: null };
  const obj4 = {
    style: tmp.footerTitle,
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj4.children = intl.string(util.t.pgCZRP);
  const items1 = [closure_1_10(Text_Text.Text, obj4)];
  const obj5 = { variant: "secondary", text: null, onPress: null };
  const intl2 = util.intl;
  obj5.text = intl2.string(util.t.WqJbLi);
  obj5.onPress = handleFooterPress.handleFooterPress;
  items1[1] = closure_1_10(components_Button_Button.Button, obj5);
  obj3.children = items1;
  obj.children = closure_1_11(hasOwnProperty, obj3);
  return closure_1_10(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, FlatList: closure_7 } = get_ActivityIndicator);
const GuildDirectoryCreate = fn(11779).GuildDirectoryCreate;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4829);
let obj = {
  loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  container: { flex: 1 },
  guildIcon: { borderRadius: nativeDefault.radii.sm },
  header: { padding: 16, alignItems: "center", justifyContent: "center" },
  title: { marginBottom: 8, textAlign: "center" },
  description: { textAlign: "center" },
  footerSafeAreaContainer: null,
  footerContainer: null,
  footerTitle: null,
  segmentedControl: null,
};
let obj3 = { borderRadius: nativeDefault.radii.sm };
obj.footerSafeAreaContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  position: "absolute",
  bottom: 0,
  width: "100%",
};
obj.footerContainer = { paddingHorizontal: 16, height: 110, justifyContent: "center" };
obj.footerTitle = { alignSelf: "center", textAlign: "center", marginBottom: 16 };
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  position: "absolute",
  bottom: 0,
  width: "100%",
};
obj.segmentedControl = { paddingHorizontal: nativeDefault.space.PX_12, width: "100%", marginTop: 18 };
let closure_12 = createStyles.createStyles(obj);
let closure_13 = noop.memo((guild) => {
  guild = guild.guild;
  const directoryChannelId = guild.directoryChannelId;
  ({ start, end } = guild);
  const tmp = closure_12();
  const items = [GuildDirectoryStore];
  const stateFromStores = guild(504).useStateFromStores(items, () =>
    GuildDirectoryStore.getDirectoryEntry(directoryChannelId, guild.id),
  );
  const obj2 = {
    label: guild.name,
    icon: closure_10(directoryChannelId(5891), { style: tmp.guildIcon, guild }),
    trailing: closure_10(directoryChannelId(11782), { entry: stateFromStores }),
    start,
    end,
  };
  return closure_10(guild(5912).TableRow, obj2);
});
let closure_14 = noop.memo((guild) => {
  guild = guild.guild;
  const handleItemPress = guild.handleItemPress;
  ({ start, end } = guild);
  const obj = {
    onPress() {
      return handleItemPress(guild);
    },
    label: guild.name,
    icon: null,
    trailing: closure_1_10(TableRow.TableRow.Arrow, {}),
    start,
    end,
  };
  const tmp = closure_12();
  obj.icon = closure_1_10(GuildIconDefault, { style: closure_12().guildIcon, guild });
  return closure_1_10(TableRow.TableRow, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx");

export default function GuildDirectoryCreateOrAdd(current) {
  _require = current;
  const tmp = closure_12();
  const navigation = require("useNavigation").useNavigation();
  ref = addedGuilds.useRef(current);
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
        const obj = {
          createGuild: { name, icon, template },
          directoryChannelId: ref.current.directoryChannelId,
          directoryGuildName: ref.current.directoryGuildName,
        };
        navigation.push(constants.DESCRIPTION, obj);
      },
    });
  }, items1);
  const items3 = [tabIndex];
  const callback1 = addedGuilds.useCallback((guild) => {
    const index = guild.index;
    const obj = { guild: guild.item, start: 0 === index, end: index === memo.length - 1 };
    if (1 === first) {
      const obj2 = {};
      const merged = Object.assign(obj);
      obj2.directoryChannelId = ref.current.directoryChannelId;
      let tmp6 = closure_2_10(closure_13, obj2);
    } else {
      const obj3 = {};
      const merged1 = Object.assign(obj);
      obj3.handleItemPress = function handleItemPress(guild) {
        navigation.push(constants.DESCRIPTION, {
          guild,
          directoryChannelId: ref.current.directoryChannelId,
          directoryGuildName: ref.current.directoryGuildName,
        });
      };
      tmp6 = closure_2_10(closure_14, obj3);
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
    let obj2 = { style: tmp.loadingContainer, children: closure_10(tabIndex, {}) };
    let tmp15Result = closure_10(bottom, obj2);
  } else {
    let obj3 = { children: null };
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { data: memo, ListHeaderComponent: callback2, renderItem: callback1, contentContainerStyle: tmp14 };
    const items4 = [closure_10(setTabIndex, obj5)];
    const obj6 = { handleFooterPress: callback };
    items4[1] = closure_10(GuildDirectoryCreateOrAddFooter, obj6);
    obj4.children = items4;
    obj3.children = closure_11(bottom, obj4);
    tmp15Result = closure_10(require("GuildDirectoryAddModal").GuildDirectoryAddModalScreen, obj3);
  }
  return tmp15Result;
}
