// discord_app/modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "useRefValue";
import get_ActivityIndicator from "Button";
import isFetching from "isFetching";
import { GuildDirectoryCreate } from "GuildDirectoryCreate";
import jsxProd from "GuildDirectoryAddModal";
import createCacheKey from "createCacheKey";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { SegmentedControl } from "../../../../design/components/SegmentedControl/native/SegmentedControl.native.tsx";
import { useSegmentedControlState } from "../../../../design/components/SegmentedControl/native/SegmentedControlState.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useSafeAreaInsets } from "../../../safe_area/useSafeAreaInsets.native.tsx";

let c10;
let c5;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function GuildDirectoryCreateOrAddHeader(arg0) {
  let directoryGuildName;
  let setTabIndex;
  let tabIndex;
  ({ directoryGuildName, tabIndex, setTabIndex } = arg0);
  const tmp = callback3();
  let obj = useSegmentedControlState;
  obj = { pageWidth: 0, defaultIndex: tabIndex, onSetActiveIndex: setTabIndex, items: null };
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t.FTe8HS), ];
  const intl2 = getSystemLocale.intl;
  items[1] = intl2.string(getSystemLocale.t.epOumr);
  obj[3] = items.map((id) => ({ id, label: id, page: null }));
  obj = { style: tmp.header, children: null };
  const segmentedControlState = obj.useSegmentedControlState(obj);
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = getSystemLocale.intl;
  obj1[4] = intl3.format(getSystemLocale.t["9SKJdF"], { guildName: directoryGuildName });
  const items1 = [callback(Text.Text, obj1), , ];
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = getSystemLocale.intl;
  obj2[3] = intl4.string(getSystemLocale.t.pYFZ9p);
  items1[1] = callback(Text.Text, obj2);
  items1[2] = callback(closure_5, { style: tmp.segmentedControl, children: callback(SegmentedControl.SegmentedControl, { state: segmentedControlState }) });
  obj[1] = items1;
  return callback2(closure_5, obj);
}
function GuildDirectoryCreateOrAddFooter(handleFooterPress) {
  const tmp = callback3();
  let obj = { style: null, children: null };
  const items = [tmp.footerSafeAreaContainer, ];
  obj = { paddingBottom: useSafeAreaInsets().bottom };
  items[1] = obj;
  obj[0] = items;
  obj = { style: tmp.footerContainer, children: null };
  const obj1 = { style: tmp.footerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.string(getSystemLocale.t.pgCZRP);
  const items1 = [callback(Text.Text, obj1), ];
  const obj2 = { variant: "secondary", text: null, onPress: null };
  const intl2 = getSystemLocale.intl;
  obj2[1] = intl2.string(getSystemLocale.t.WqJbLi);
  obj2[2] = handleFooterPress.handleFooterPress;
  items1[1] = callback(Button.Button, obj2);
  obj[1] = items1;
  obj[1] = callback2(closure_5, obj);
  return callback(closure_5, obj);
}
let c4 = importAllResult;
({ View: c5, ActivityIndicator: closure_6, FlatList: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" }, container: { flex: 1 }, guildIcon: null, header: null, title: null, description: null, footerSafeAreaContainer: null, footerContainer: null, footerTitle: null, segmentedControl: null };
obj = { borderRadius: require("Themes").radii.sm };
obj[2] = obj;
obj[3] = { padding: 16, alignItems: "center", justifyContent: "center" };
obj[4] = { marginBottom: 8, textAlign: "center" };
obj[5] = { textAlign: "center" };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
obj[6] = createCacheKey;
obj[7] = { paddingHorizontal: 16, height: 110, justifyContent: "center" };
obj[8] = { alignSelf: "center", textAlign: "center", marginBottom: 16 };
obj[9] = { paddingHorizontal: require("Themes").space.PX_12, width: "100%", marginTop: 18 };
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = importAllResult.memo((guild) => {
  let end;
  let start;
  guild = guild.guild;
  const directoryChannelId = guild.directoryChannelId;
  ({ start, end } = guild);
  let obj = guild(589);
  const items = [isFetching];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getDirectoryEntry(directoryChannelId, guild.id));
  obj = { label: guild.name, icon: null, trailing: null, start: null, end: null };
  obj = { style: callback3().guildIcon, guild };
  obj[1] = callback(directoryChannelId(5819), obj);
  obj[2] = callback(directoryChannelId(11744), { entry: stateFromStores });
  obj[3] = start;
  obj[4] = end;
  return callback(guild(5414).TableRow, obj);
});
let closure_14 = importAllResult.memo((guild) => {
  let end;
  let start;
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
    end: null
  };
  obj = { style: callback3().guildIcon, guild };
  obj[2] = callback(handleItemPress(5819), obj);
  obj[3] = callback(guild(5414).TableRow.Arrow, {});
  obj[4] = start;
  obj[5] = end;
  return callback(guild(5414).TableRow, obj);
});
let obj2 = { paddingHorizontal: require("Themes").space.PX_12, width: "100%", marginTop: 18 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx");

export default function GuildDirectoryCreateOrAdd(stateFromStores) {
  const _require = stateFromStores;
  const tmp = callback3();
  let obj = _require(ref[18]);
  const navigation = obj.useNavigation();
  ref = addedGuilds.useRef(stateFromStores);
  let tmp6 = navigation(ref[19])(ref);
  const effect = addedGuilds.useEffect(() => {
    ref.current = closure_0;
  });
  const tmp8 = navigation(ref[20])(tmp6.directoryGuildId, tmp6.directoryChannelId);
  const availableGuilds = tmp8.availableGuilds;
  addedGuilds = tmp8.addedGuilds;
  const bottom = navigation(ref[16])().bottom;
  const tmp9 = availableGuilds(addedGuilds.useState(0), 2);
  const first = tmp9[0];
  let closure_7 = tmp9[1];
  const items = [addedGuilds, availableGuilds, first];
  const memo = addedGuilds.useMemo(() => 0 === first ? availableGuilds : addedGuilds, items);
  const items1 = [navigation];
  const items2 = [memo.length, navigation, first];
  const callback = addedGuilds.useCallback(() => {
    navigation.push(outer1_9.TEMPLATES, {
      directoryGuildName: ref.current.directoryGuildName,
      onHubGuildInfoSet(name, icon, template) {
        obj = { createGuild: obj, directoryChannelId: ref.current.directoryChannelId, directoryGuildName: ref.current.directoryGuildName };
        obj = { name, icon, template };
      }
    });
  }, items1);
  const items3 = [first];
  const callback1 = addedGuilds.useCallback((guild) => {
    const index = guild.index;
    let obj = { guild: guild.item, start: 0 === index, end: index === memo.length - 1 };
    if (1 === first) {
      obj = {};
      const merged = Object.assign(obj);
      obj.directoryChannelId = ref.current.directoryChannelId;
      let tmp6 = outer1_10(outer1_13, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(obj);
      obj.handleItemPress = function handleItemPress(guild) {

      };
      tmp6 = outer1_10(outer1_14, obj);
    }
    return tmp6;
  }, items2);
  [][0] = bottom;
  const callback2 = addedGuilds.useCallback(() => outer1_10(outer1_15, { directoryGuildName: ref.current.directoryGuildName, tabIndex: first, setTabIndex: closure_7 }), items3);
  if (tmp8.loading) {
    obj = { style: null, children: null };
    obj[0] = tmp.loadingContainer;
    obj[1] = tmp15(first, {});
    let tmp15Result = tmp15(bottom, obj);
  } else {
    obj = { children: null };
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.container;
    const obj2 = { data: null, ListHeaderComponent: null, renderItem: null, contentContainerStyle: null };
    obj2[0] = memo;
    obj2[1] = callback2;
    obj2[2] = callback1;
    obj2[3] = tmp14;
    const items4 = [tmp15(closure_7, obj2), ];
    const obj3 = { handleFooterPress: null };
    obj3[0] = callback;
    items4[1] = tmp15(GuildDirectoryCreateOrAddFooter, obj3);
    obj1[1] = items4;
    obj[0] = callback2(bottom, obj1);
    tmp15Result = tmp15(_require(ref[21]).GuildDirectoryAddModalScreen, obj);
  }
  return tmp15Result;
};