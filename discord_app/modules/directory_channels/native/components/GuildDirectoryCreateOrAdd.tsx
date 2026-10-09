// === Module 11963: GuildDirectoryCreateOrAdd ===

// Module 11963 (GuildDirectoryCreateOrAdd)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import GuildIconDefault from "GuildIcon" /* 6165 */;
import TableRow from "TableRow" /* 6186 */;
import SegmentedControlState from "SegmentedControlState" /* 8513 */;
import SegmentedControl from "SegmentedControl" /* 8761 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 11964 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, FlatList: closure_7 } = get_ActivityIndicator);
const GuildDirectoryCreate = fn(11962).GuildDirectoryCreate;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let obj = { loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" }, container: { flex: 1 }, guildIcon: { borderRadius: nativeDefault.radii.sm }, header: { padding: 16, alignItems: "center", justifyContent: "center" }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, footerSafeAreaContainer: null, footerContainer: null, footerTitle: null, segmentedControl: null };
let obj3 = { borderRadius: nativeDefault.radii.sm };
obj.footerSafeAreaContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
obj.footerContainer = { paddingHorizontal: 16, height: 110, justifyContent: "center" };
obj.footerTitle = { alignSelf: "center", textAlign: "center", marginBottom: 16 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
obj.segmentedControl = { paddingHorizontal: nativeDefault.space.PX_12, width: "100%", marginTop: 18 };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_13 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryEntryEditRow(guild) {
  const cResult = guild(576).c(15);
  guild = guild.guild;
  const directoryChannelId = guild.directoryChannelId;
  ({ start, end } = guild);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildDirectoryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === directoryChannelId) {
    if (cResult[2] === guild.id) {
      let tmp7 = cResult[3];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp7);
    if (cResult[4] === guild) {
      if (cResult[5] === tmp4.guildIcon) {
        let tmp9 = cResult[6];
      }
      if (cResult[7] !== stateFromStores) {
        const obj2 = { entry: stateFromStores };
        const tmp16 = closure_10(directoryChannelId(11965), obj2);
        cResult[7] = stateFromStores;
        cResult[8] = tmp16;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === end) {
        if (cResult[10] === guild.name) {
          if (cResult[11] === start) {
            if (cResult[12] === tmp9) {
              if (cResult[13] === tmp13) {
                let tmp17 = cResult[14];
              }
              return tmp17;
            }
          }
        }
      }
      const obj3 = { label: guild.name, icon: tmp9, trailing: tmp13, start, end };
      const tmp19 = closure_10(tmp(6186).TableRow, obj3);
      cResult[9] = end;
      cResult[10] = guild.name;
      cResult[11] = start;
      cResult[12] = tmp9;
      cResult[13] = tmp13;
      cResult[14] = tmp19;
      tmp17 = tmp19;
    }
    const obj4 = { style: tmp4.guildIcon, guild };
    const tmp12 = closure_10(directoryChannelId(6165), obj4);
    cResult[4] = guild;
    cResult[5] = tmp4.guildIcon;
    cResult[6] = tmp12;
    tmp9 = tmp12;
    const tmpResult = tmp(504);
  }
  const fn = function o() {
    return GuildDirectoryStore.getDirectoryEntry(directoryChannelId, guild.id);
  };
  cResult[1] = directoryChannelId;
  cResult[2] = guild.id;
  cResult[3] = fn;
  tmp7 = fn;
  const obj = guild(576);
}) : (function GuildDirectoryEntryEditRow(guild) {
  guild = guild.guild;
  const directoryChannelId = guild.directoryChannelId;
  ({ start, end } = guild);
  const tmp = closure_12();
  const items = [GuildDirectoryStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => GuildDirectoryStore.getDirectoryEntry(directoryChannelId, guild.id));
  const obj2 = { label: guild.name, icon: closure_10(directoryChannelId(6165), { style: tmp.guildIcon, guild }), trailing: closure_10(directoryChannelId(11965), { entry: stateFromStores }), start, end };
  return closure_10(guild(6186).TableRow, obj2);
}));
ReactCompilerGating = fn(558);
let closure_14 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryEntryAddRow(guild) {
  const cResult = c.c(13);
  guild = guild.guild;
  const handleItemPress = guild.handleItemPress;
  ({ start, end } = guild);
  const tmp4 = closure_12();
  if (cResult[0] === guild) {
    if (cResult[1] === handleItemPress) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === guild) {
      if (cResult[4] === tmp4.guildIcon) {
        let tmp6 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp13 = collapsed(TableRow.TableRow.Arrow, {});
        cResult[6] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === end) {
        if (cResult[8] === guild.name) {
          if (cResult[9] === start) {
            if (cResult[10] === tmp5) {
              if (cResult[11] === tmp6) {
                let tmp14 = cResult[12];
              }
              return tmp14;
            }
          }
        }
      }
      const obj2 = { onPress: tmp5, label: guild.name, icon: tmp6, trailing: tmp11, start, end };
      const tmp16 = collapsed(TableRow.TableRow, obj2);
      cResult[7] = end;
      cResult[8] = guild.name;
      cResult[9] = start;
      cResult[10] = tmp5;
      cResult[11] = tmp6;
      cResult[12] = tmp16;
      tmp14 = tmp16;
    }
    const obj3 = { style: tmp4.guildIcon, guild };
    const tmp9 = collapsed(GuildIconDefault, obj3);
    cResult[3] = guild;
    cResult[4] = tmp4.guildIcon;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const fn = function n() {
    return handleItemPress(guild);
  };
  cResult[0] = guild;
  cResult[1] = handleItemPress;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function GuildDirectoryEntryAddRow(guild) {
  guild = guild.guild;
  const handleItemPress = guild.handleItemPress;
  ({ start, end } = guild);
  const obj = {
    onPress() {
      return handleItemPress(guild);
    },
    label: guild.name,
    icon: null,
    trailing: collapsed(TableRow.TableRow.Arrow, {}),
    start,
    end
  };
  const tmp = closure_12();
  obj.icon = collapsed(GuildIconDefault, { style: closure_12().guildIcon, guild });
  return collapsed(TableRow.TableRow, obj);
}));
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryCreateOrAddHeader(arg0) {
  const cResult = c.c(22);
  ({ directoryGuildName, tabIndex, setTabIndex } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const items = [intl.string(util.t.FTe8HS), ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.epOumr);
    const mapped = items.map((id) => ({ id, label: id, page: null }));
    cResult[0] = mapped;
    let first = mapped;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === setTabIndex) {
    if (cResult[2] === tabIndex) {
      let tmp7 = cResult[3];
    }
    const segmentedControlState = SegmentedControlState.useSegmentedControlState(tmp7);
    ({ header, title } = tmp4);
    if (cResult[4] !== directoryGuildName) {
      const intl3 = util.intl;
      const obj2 = { guildName: directoryGuildName };
      const formatResult = intl3.format(util.t["9SKJdF"], obj2);
      cResult[4] = directoryGuildName;
      cResult[5] = formatResult;
      let tmp9 = formatResult;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp4.title) {
      if (cResult[7] === tmp9) {
        let tmp11 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = util.intl;
        const stringResult = intl4.string(util.t.pYFZ9p);
        cResult[9] = stringResult;
        let tmp14 = stringResult;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] !== tmp4.description) {
        const obj3 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp14 };
        const tmp18 = collapsed(Text_Text.Text, obj3);
        cResult[10] = tmp4.description;
        cResult[11] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[11];
      }
      if (cResult[12] !== segmentedControlState) {
        const obj4 = { state: segmentedControlState };
        const tmp21 = collapsed(SegmentedControl.SegmentedControl, obj4);
        cResult[12] = segmentedControlState;
        cResult[13] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[13];
      }
      if (cResult[14] === tmp4.segmentedControl) {
        if (cResult[15] === tmp19) {
          let tmp22 = cResult[16];
        }
        if (cResult[17] === tmp4.header) {
          if (cResult[18] === tmp22) {
            if (cResult[19] === tmp11) {
              if (cResult[20] === tmp16) {
                let tmp26 = cResult[21];
              }
              return tmp26;
            }
          }
        }
        const obj5 = { style: header, children: null };
        const items1 = [tmp11, tmp16, tmp22];
        obj5.children = items1;
        const tmp29 = closure_1_11(hasOwnProperty, obj5);
        cResult[17] = tmp4.header;
        cResult[18] = tmp22;
        cResult[19] = tmp11;
        cResult[20] = tmp16;
        cResult[21] = tmp29;
        tmp26 = tmp29;
      }
      const obj6 = { style: tmp4.segmentedControl, children: tmp19 };
      const tmp25 = collapsed(hasOwnProperty, obj6);
      cResult[14] = tmp4.segmentedControl;
      cResult[15] = tmp19;
      cResult[16] = tmp25;
      tmp22 = tmp25;
    }
    const obj7 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp9 };
    const tmp13 = collapsed(Text_Text.Text, obj7);
    cResult[6] = tmp4.title;
    cResult[7] = tmp9;
    cResult[8] = tmp13;
    tmp11 = tmp13;
    const tmpResult = SegmentedControlState;
  }
  const obj8 = { pageWidth: 0, defaultIndex: tabIndex, onSetActiveIndex: setTabIndex, items: first };
  cResult[1] = setTabIndex;
  cResult[2] = tabIndex;
  cResult[3] = obj8;
  tmp7 = obj8;
}) : (function GuildDirectoryCreateOrAddHeader(arg0) {
  ({ directoryGuildName, tabIndex, setTabIndex } = arg0);
  const tmp = closure_12();
  const obj2 = { pageWidth: 0, defaultIndex: tabIndex, onSetActiveIndex: setTabIndex, items: null };
  const intl = util.intl;
  const items = [intl.string(util.t.FTe8HS), ];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t.epOumr);
  obj2.items = items.map((id) => ({ id, label: id, page: null }));
  const obj3 = { style: tmp.header, children: null };
  const segmentedControlState = SegmentedControlState.useSegmentedControlState(obj2);
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = util.intl;
  obj4.children = intl3.format(util.t["9SKJdF"], { guildName: directoryGuildName });
  const items1 = [collapsed(Text_Text.Text, obj4), , ];
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = util.intl;
  obj5.children = intl4.string(util.t.pYFZ9p);
  items1[1] = collapsed(Text_Text.Text, obj5);
  items1[2] = collapsed(hasOwnProperty, { style: tmp.segmentedControl, children: collapsed(SegmentedControl.SegmentedControl, { state: segmentedControlState }) });
  obj3.children = items1;
  return closure_1_11(hasOwnProperty, obj3);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryCreateOrAddFooter(handleFooterPress) {
  const cResult = c.c(18);
  handleFooterPress = handleFooterPress.handleFooterPress;
  const tmp4 = closure_12();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== bottom) {
    const obj2 = { paddingBottom: bottom };
    cResult[0] = bottom;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.footerSafeAreaContainer) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    ({ footerContainer, footerTitle } = tmp4);
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.pgCZRP);
      cResult[5] = stringResult;
      let tmp8 = stringResult;
    } else {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== tmp4.footerTitle) {
      const obj3 = { style: footerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp8 };
      const tmp12 = collapsed(Text_Text.Text, obj3);
      cResult[6] = tmp4.footerTitle;
      cResult[7] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.WqJbLi);
      cResult[8] = stringResult1;
      let tmp13 = stringResult1;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] !== handleFooterPress) {
      const obj4 = { variant: "secondary", text: tmp13, onPress: handleFooterPress };
      const tmp17 = collapsed(components_Button_Button.Button, obj4);
      cResult[9] = handleFooterPress;
      cResult[10] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[10];
    }
    if (cResult[11] === tmp4.footerContainer) {
      if (cResult[12] === tmp10) {
        if (cResult[13] === tmp15) {
          let tmp18 = cResult[14];
        }
        if (cResult[15] === tmp6) {
          if (cResult[16] === tmp18) {
            let tmp22 = cResult[17];
          }
          return tmp22;
        }
        const obj5 = { style: tmp6, children: tmp18 };
        const tmp25 = collapsed(hasOwnProperty, obj5);
        cResult[15] = tmp6;
        cResult[16] = tmp18;
        cResult[17] = tmp25;
        tmp22 = tmp25;
      }
    }
    const obj6 = { style: footerContainer, children: null };
    const items = [tmp10, tmp15];
    obj6.children = items;
    const tmp21 = closure_1_11(hasOwnProperty, obj6);
    cResult[11] = tmp4.footerContainer;
    cResult[12] = tmp10;
    cResult[13] = tmp15;
    cResult[14] = tmp21;
    tmp18 = tmp21;
  }
  const items1 = [tmp4.footerSafeAreaContainer, tmp5];
  cResult[2] = tmp4.footerSafeAreaContainer;
  cResult[3] = tmp5;
  cResult[4] = items1;
  tmp6 = items1;
}) : (function GuildDirectoryCreateOrAddFooter(handleFooterPress) {
  const tmp = closure_12();
  const obj = { style: null, children: null };
  const items = [tmp.footerSafeAreaContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj.style = items;
  const obj3 = { style: tmp.footerContainer, children: null };
  const obj4 = { style: tmp.footerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.pgCZRP);
  const items1 = [collapsed(Text_Text.Text, obj4), ];
  const obj5 = { variant: "secondary", text: null, onPress: null };
  const intl2 = util.intl;
  obj5.text = intl2.string(util.t.WqJbLi);
  obj5.onPress = handleFooterPress.handleFooterPress;
  items1[1] = collapsed(components_Button_Button.Button, obj5);
  obj3.children = items1;
  obj.children = closure_1_11(hasOwnProperty, obj3);
  return collapsed(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: nativeDefault.space.PX_12, width: "100%", marginTop: 18 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryCreateOrAdd(current) {
  _require = current;
  const cResult = require("c").c(26);
  closure_12();
  let obj = require("c");
  const navigation = require("useNavigation").useNavigation();
  ref = noop.useRef(current);
  const tmp7 = navigation(ref[21])(ref);
  if (cResult[0] !== current) {
    const fn = function u() {
      ref.current = current;
    };
    cResult[0] = current;
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  const effect = obj3.useEffect(tmp8);
  let obj2 = require("useNavigation");
  ({ addedGuilds, availableGuilds, loading } = navigation(ref[22])(tmp7.directoryGuildId, tmp7.directoryChannelId));
  const bottom = tmp6(tmp[18])().bottom;
  const tmp11 = tabIndex(noop.useState(0), 2);
  tabIndex = tmp11[0];
  noop = tmp11[1];
  if (0 === tabIndex) {
    addedGuilds = availableGuilds;
  }
  if (cResult[2] !== navigation) {
    class N {
      constructor() {
        obj = {
          directoryGuildName: closure_2.current.directoryGuildName,
          onHubGuildInfoSet(name, icon, template) {
                  const obj = { createGuild: { name, icon, template }, directoryChannelId: ref.current.directoryChannelId, directoryGuildName: ref.current.directoryGuildName };
                  navigation.push(constants.DESCRIPTION, obj);
                }
        };
        arr = closure_1.push(GuildDirectoryCreate.TEMPLATES, obj);
        return;
      }
    }
    cResult[2] = navigation;
    cResult[3] = N;
  } else {
    class N {
      constructor() {
        obj = {
          directoryGuildName: closure_2.current.directoryGuildName,
          onHubGuildInfoSet(name, icon, template) {
                  const obj = { createGuild: { name, icon, template }, directoryChannelId: ref.current.directoryChannelId, directoryGuildName: ref.current.directoryGuildName };
                  navigation.push(constants.DESCRIPTION, obj);
                }
        };
        arr = closure_1.push(GuildDirectoryCreate.TEMPLATES, obj);
        return;
      }
    }
  }
  if (cResult[4] === addedGuilds.length) {
    class N {
      constructor() {
        obj = {
          directoryGuildName: closure_2.current.directoryGuildName,
          onHubGuildInfoSet(name, icon, template) {
                  const obj = { createGuild: { name, icon, template }, directoryChannelId: ref.current.directoryChannelId, directoryGuildName: ref.current.directoryGuildName };
                  navigation.push(constants.DESCRIPTION, obj);
                }
        };
        arr = closure_1.push(GuildDirectoryCreate.TEMPLATES, obj);
        return;
      }
    }
  }
  class L {
    constructor(arg0) {
      index = current.index;
      obj = { guild: current.item, start: 0 === index, end: index === availableGuilds.length - 1 };
      if (1 === closure_3) {
        tmp7 = jsx;
        tmp8 = closure_13;
        obj1 = {};
        tmp9 = obj1;
        tmp10 = obj;
        merged = Object.assign(obj);
        tmp12 = closure_2;
        obj1.directoryChannelId = closure_2.current.directoryChannelId;
        tmp6 = jsx(closure_13, obj1);
      } else {
        tmp = jsx;
        tmp2 = closure_14;
        obj4 = {};
        tmp3 = obj4;
        tmp4 = obj;
        merged1 = Object.assign(obj);
        obj4.handleItemPress = function handleItemPress(guild) {
          navigation.push(constants.DESCRIPTION, { guild, directoryChannelId: ref.current.directoryChannelId, directoryGuildName: ref.current.directoryGuildName });
        };
        tmp6 = jsx(closure_14, obj4);
      }
      return tmp6;
    }
  }
  cResult[4] = addedGuilds.length;
  cResult[5] = navigation;
  cResult[6] = tabIndex;
  cResult[7] = L;
  const tmp10 = navigation(ref[22])(tmp7.directoryGuildId, tmp7.directoryChannelId);
}) : (function GuildDirectoryCreateOrAdd(current) {
  _require = current;
  const tmp = closure_12();
  const navigation = require("useNavigation").useNavigation();
  ref = addedGuilds.useRef(current);
  let tmp6 = navigation(ref[21])(ref);
  const effect = addedGuilds.useEffect(() => {
    ref.current = current;
  });
  const tmp8 = navigation(ref[22])(tmp6.directoryGuildId, tmp6.directoryChannelId);
  const availableGuilds = tmp8.availableGuilds;
  addedGuilds = tmp8.addedGuilds;
  const bottom = navigation(ref[18])().bottom;
  const tmp9 = availableGuilds(addedGuilds.useState(0), 2);
  const tabIndex = tmp9[0];
  const setTabIndex = tmp9[1];
  const items = [addedGuilds, availableGuilds, tabIndex];
  const memo = addedGuilds.useMemo(() => 0 === first ? availableGuilds : addedGuilds, items);
  const items1 = [navigation];
  const items2 = [memo.length, navigation, tabIndex];
  const callback = addedGuilds.useCallback(() => {
    navigation.push(GuildDirectoryCreate.TEMPLATES, {
      directoryGuildName: ref.current.directoryGuildName,
      onHubGuildInfoSet(name, icon, template) {
        const obj = { createGuild: { name, icon, template }, directoryChannelId: ref.current.directoryChannelId, directoryGuildName: ref.current.directoryGuildName };
        navigation.push(constants.DESCRIPTION, obj);
      }
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
      let tmp6 = collapsed(closure_13, obj2);
    } else {
      const obj3 = {};
      const merged1 = Object.assign(obj);
      obj3.handleItemPress = function handleItemPress(guild) {
        navigation.push(constants.DESCRIPTION, { guild, directoryChannelId: ref.current.directoryChannelId, directoryGuildName: ref.current.directoryGuildName });
      };
      tmp6 = collapsed(closure_14, obj3);
    }
    return tmp6;
  }, items2);
  [][0] = bottom;
  const callback2 = addedGuilds.useCallback(() => collapsed(closure_15, { directoryGuildName: ref.current.directoryGuildName, tabIndex, setTabIndex }), items3);
  if (tmp8.loading) {
    let obj2 = { style: tmp.loadingContainer, children: closure_10(tabIndex, {}) };
    let tmp15Result = closure_10(bottom, obj2);
  } else {
    let obj3 = { children: null };
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { data: memo, ListHeaderComponent: callback2, renderItem: callback1, contentContainerStyle: tmp14 };
    const items4 = [closure_10(setTabIndex, obj5), ];
    const obj6 = { handleFooterPress: callback };
    items4[1] = closure_10(closure_16, obj6);
    obj4.children = items4;
    obj3.children = closure_11(bottom, obj4);
    tmp15Result = closure_10(require("GuildDirectoryAddModal").GuildDirectoryAddModalScreen, obj3);
  }
  return tmp15Result;
});