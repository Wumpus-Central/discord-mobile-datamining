// discord_app/modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import SegmentedControlState from "../../../../design/components/SegmentedControl/native/SegmentedControlState.native.tsx";
import SegmentedControl from "../../../../design/components/SegmentedControl/native/SegmentedControl.native.tsx";
import directory_channels_GuildDirectoryConstants from "../GuildDirectoryConstants.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GuildDirectoryStore from "../../GuildDirectoryStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, arr, handleFooterPress, navigation, obj1;

let c10;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire, FlatList: metroImportDefault } = react_native);
const GuildDirectoryCreate = directory_channels_GuildDirectoryConstants.GuildDirectoryCreate;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  container: { flex: 1 },
  guildIcon: obj2,
  header: { padding: 16, alignItems: "center", justifyContent: "center" },
  title: { marginBottom: 8, textAlign: "center" },
  description: { textAlign: "center" },
  footerSafeAreaContainer: obj3,
  footerContainer: { paddingHorizontal: 16, height: 110, justifyContent: "center" },
  footerTitle: { alignSelf: "center", textAlign: "center", marginBottom: 16 },
  segmentedControl: obj4,
};
obj2 = { borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
obj4 = { paddingHorizontal: nativeDefault.space.PX_12, width: "100%", marginTop: 18 };
let closure_12 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guild) => {
        let end;
        let first;
        let start;
        const obj = guild(576);
        const cResult = obj.c(15);
        guild = guild.guild;
        const directoryChannelId = guild.directoryChannelId;
        ({ start, end } = guild);
        const tmp4 = closure_12();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GuildDirectoryStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === directoryChannelId) {
          let tmp7;
          if (cResult[2] === guild.id) {
            tmp7 = cResult[3];
          }
          const tmpResult = guild(504);
          const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
          if (cResult[4] === guild) {
            let tmp9;
            let tmp13;
            if (cResult[5] === tmp4.guildIcon) {
              tmp9 = cResult[6];
            }
            if (cResult[7] !== stateFromStores) {
              const obj2 = { entry: stateFromStores };
              const tmp16 = closure_10(directoryChannelId(11955), obj2);
              cResult[7] = stateFromStores;
              cResult[8] = tmp16;
              tmp13 = tmp16;
            } else {
              tmp13 = cResult[8];
            }
            if (cResult[9] === end) {
              if (cResult[10] === guild.name) {
                if (cResult[11] === start) {
                  if (cResult[12] === tmp9) {
                    let tmp17;
                    if (cResult[13] === tmp13) {
                      tmp17 = cResult[14];
                    }
                    return tmp17;
                  }
                }
              }
            }
            const obj3 = { label: guild.name, icon: tmp9, trailing: tmp13, start, end };
            const tmp19 = closure_10(guild(6000).TableRow, obj3);
            cResult[9] = end;
            cResult[10] = guild.name;
            cResult[11] = start;
            cResult[12] = tmp9;
            cResult[13] = tmp13;
            cResult[14] = tmp19;
            tmp17 = tmp19;
          }
          const obj4 = { style: tmp4.guildIcon, guild };
          const tmp12 = closure_10(directoryChannelId(5978), obj4);
          cResult[4] = guild;
          cResult[5] = tmp4.guildIcon;
          cResult[6] = tmp12;
          tmp9 = tmp12;
        }
        const fn = function o() {
          return GuildDirectoryStore.getDirectoryEntry(directoryChannelId, guild.id);
        };
        cResult[1] = directoryChannelId;
        cResult[2] = guild.id;
        cResult[3] = fn;
        tmp7 = fn;
      }
    : (guild) => {
        let end;
        let obj3;
        let start;
        guild = guild.guild;
        const directoryChannelId = guild.directoryChannelId;
        ({ start, end } = guild);
        const items = [GuildDirectoryStore];
        const tmp = closure_12();
        const obj = guild(504);
        const stateFromStores = obj.useStateFromStores(items, () =>
          GuildDirectoryStore.getDirectoryEntry(directoryChannelId, guild.id),
        );
        const obj2 = {
          label: guild.name,
          icon: closure_10(directoryChannelId(5978), obj3),
          trailing: closure_10(directoryChannelId(11955), { entry: stateFromStores }),
          start,
          end,
        };
        const TableRow = guild(6000).TableRow;
        obj3 = { style: tmp.guildIcon, guild };
        return closure_10(TableRow, obj2);
      },
);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guild) => {
        let end;
        let start;
        const obj = react2;
        const cResult = obj.c(13);
        guild = guild.guild;
        const handleItemPress = guild.handleItemPress;
        ({ start, end } = guild);
        const tmp4 = closure_12();
        if (cResult[0] === guild) {
          let tmp5;
          if (cResult[1] === handleItemPress) {
            tmp5 = cResult[2];
          }
          if (cResult[3] === guild) {
            let tmp6;
            let tmp11;
            if (cResult[4] === tmp4.guildIcon) {
              tmp6 = cResult[5];
            }
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp13 = authStore(TableRow2.TableRow.Arrow, {});
              cResult[6] = tmp13;
              tmp11 = tmp13;
            } else {
              tmp11 = cResult[6];
            }
            if (cResult[7] === end) {
              if (cResult[8] === guild.name) {
                if (cResult[9] === start) {
                  if (cResult[10] === tmp5) {
                    let tmp14;
                    if (cResult[11] === tmp6) {
                      tmp14 = cResult[12];
                    }
                    return tmp14;
                  }
                }
              }
            }
            const obj2 = { onPress: tmp5, label: guild.name, icon: tmp6, trailing: tmp11, start, end };
            const tmp16 = authStore(TableRow2.TableRow, obj2);
            cResult[7] = end;
            cResult[8] = guild.name;
            cResult[9] = start;
            cResult[10] = tmp5;
            cResult[11] = tmp6;
            cResult[12] = tmp16;
            tmp14 = tmp16;
          }
          const obj3 = { style: tmp4.guildIcon, guild };
          const tmp9 = authStore(GuildIconDefault, obj3);
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
      }
    : (guild) => {
        let end;
        let obj2;
        let start;
        guild = guild.guild;
        const handleItemPress = guild.handleItemPress;
        ({ start, end } = guild);
        const obj = {
          onPress() {
            return handleItemPress(guild);
          },
          label: guild.name,
          icon: authStore(GuildIconDefault, obj2),
          trailing: authStore(TableRow2.TableRow.Arrow, {}),
          start,
          end,
        };
        const tmp = closure_12();
        const TableRow = TableRow2.TableRow;
        obj2 = { style: tmp.guildIcon, guild };
        return authStore(TableRow, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let directoryGuildName;
      let first;
      let header;
      let items1;
      let setTabIndex;
      let tabIndex;
      let title;
      const obj = react2;
      const cResult = obj.c(22);
      ({ directoryGuildName, tabIndex, setTabIndex } = arg0);
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl5.intl;
        const items = [intl.string(intl5.t.FTe8HS)];
        const intl2 = intl5.intl;
        items[1] = intl2.string(intl5.t.epOumr);
        const mapped = items.map((id) => ({ id, label: id, page: null }));
        cResult[0] = mapped;
        first = mapped;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === setTabIndex) {
        let tmp7;
        let tmp9;
        if (cResult[2] === tabIndex) {
          tmp7 = cResult[3];
        }
        const tmpResult = SegmentedControlState;
        const segmentedControlState = tmpResult.useSegmentedControlState(tmp7);
        ({ header, title } = tmp4);
        if (cResult[4] !== directoryGuildName) {
          const intl3 = intl5.intl;
          const obj2 = { guildName: directoryGuildName };
          const formatResult = intl3.format(intl5.t["9SKJdF"], obj2);
          cResult[4] = directoryGuildName;
          cResult[5] = formatResult;
          tmp9 = formatResult;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp4.title) {
          let tmp11;
          let tmp14;
          let tmp16;
          let tmp19;
          if (cResult[7] === tmp9) {
            tmp11 = cResult[8];
          }
          const _Symbol = Symbol;
          const description = tmp4.description;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = intl5.intl;
            const stringResult = intl4.string(intl5.t.pYFZ9p);
            cResult[9] = stringResult;
            tmp14 = stringResult;
          } else {
            tmp14 = cResult[9];
          }
          if (cResult[10] !== tmp4.description) {
            const obj3 = { style: description, variant: "text-sm/medium", color: "text-default", children: tmp14 };
            const tmp18 = authStore(Text_Text.Text, obj3);
            cResult[10] = tmp4.description;
            cResult[11] = tmp18;
            tmp16 = tmp18;
          } else {
            tmp16 = cResult[11];
          }
          if (cResult[12] !== segmentedControlState) {
            const obj4 = { state: segmentedControlState };
            const tmp21 = authStore(SegmentedControl.SegmentedControl, obj4);
            cResult[12] = segmentedControlState;
            cResult[13] = tmp21;
            tmp19 = tmp21;
          } else {
            tmp19 = cResult[13];
          }
          if (cResult[14] === tmp4.segmentedControl) {
            let tmp22;
            if (cResult[15] === tmp19) {
              tmp22 = cResult[16];
            }
            if (cResult[17] === tmp4.header) {
              if (cResult[18] === tmp22) {
                if (cResult[19] === tmp11) {
                  let tmp26;
                  if (cResult[20] === tmp16) {
                    tmp26 = cResult[21];
                  }
                  return tmp26;
                }
              }
            }
            const obj5 = { style: header, children: items1 };
            items1 = [tmp11, tmp16, tmp22];
            const tmp29 = unpackModuleId(hasOwnProperty, obj5);
            cResult[17] = tmp4.header;
            cResult[18] = tmp22;
            cResult[19] = tmp11;
            cResult[20] = tmp16;
            cResult[21] = tmp29;
            tmp26 = tmp29;
          }
          const obj6 = { style: tmp4.segmentedControl, children: tmp19 };
          const tmp25 = authStore(hasOwnProperty, obj6);
          cResult[14] = tmp4.segmentedControl;
          cResult[15] = tmp19;
          cResult[16] = tmp25;
          tmp22 = tmp25;
        }
        const obj7 = {
          style: title,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp9,
        };
        const tmp13 = authStore(Text_Text.Text, obj7);
        cResult[6] = tmp4.title;
        cResult[7] = tmp9;
        cResult[8] = tmp13;
        tmp11 = tmp13;
      }
      const obj8 = { pageWidth: 0, defaultIndex: tabIndex, onSetActiveIndex: setTabIndex, items: first };
      cResult[1] = setTabIndex;
      cResult[2] = tabIndex;
      cResult[3] = obj8;
      tmp7 = obj8;
    }
  : (arg0) => {
      let directoryGuildName;
      let intl3;
      let intl4;
      let items;
      let items1;
      let setTabIndex;
      let tabIndex;
      ({ directoryGuildName, tabIndex, setTabIndex } = arg0);
      const tmp = closure_12();
      const obj = {
        pageWidth: 0,
        defaultIndex: tabIndex,
        onSetActiveIndex: setTabIndex,
        items: items.map((id) => ({ id, label: id, page: null })),
      };
      const useSegmentedControlState = SegmentedControlState.useSegmentedControlState;
      SegmentedControlState;
      const intl = intl5.intl;
      items = [intl.string(intl5.t.FTe8HS)];
      const intl2 = intl5.intl;
      items[1] = intl2.string(intl5.t.epOumr);
      const obj2 = { style: tmp.header, children: items1 };
      const segmentedControlState = useSegmentedControlState(obj);
      const obj3 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: intl3.format(intl5.t["9SKJdF"], { guildName: directoryGuildName }),
      };
      const Text = Text_Text.Text;
      intl3 = intl5.intl;
      items1 = [authStore(Text, obj3), ,];
      const obj4 = {
        style: tmp.description,
        variant: "text-sm/medium",
        color: "text-default",
        children: intl4.string(intl5.t.pYFZ9p),
      };
      const Text2 = Text_Text.Text;
      intl4 = intl5.intl;
      items1[1] = authStore(Text2, obj4);
      const obj5 = {
        style: tmp.segmentedControl,
        children: authStore(SegmentedControl.SegmentedControl, { state: segmentedControlState }),
      };
      items1[2] = authStore(hasOwnProperty, obj5);
      return unpackModuleId(hasOwnProperty, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (handleFooterPress) => {
      let footerContainer;
      let footerTitle;
      let items;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(18);
      handleFooterPress = handleFooterPress.handleFooterPress;
      const tmp4 = closure_12();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== bottom) {
        const obj2 = { paddingBottom: bottom };
        cResult[0] = bottom;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.footerSafeAreaContainer) {
        let tmp6;
        let tmp8;
        let tmp10;
        let tmp13;
        let tmp15;
        if (cResult[3] === tmp5) {
          tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        ({ footerContainer, footerTitle } = tmp4);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl5.intl;
          const stringResult = intl.string(intl5.t.pgCZRP);
          cResult[5] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== tmp4.footerTitle) {
          const obj3 = {
            style: footerTitle,
            variant: "heading-lg/semibold",
            color: "mobile-text-heading-primary",
            children: tmp8,
          };
          const tmp12 = authStore(Text_Text.Text, obj3);
          cResult[6] = tmp4.footerTitle;
          cResult[7] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl5.intl;
          const stringResult1 = intl2.string(intl5.t.WqJbLi);
          cResult[8] = stringResult1;
          tmp13 = stringResult1;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] !== handleFooterPress) {
          const obj4 = { variant: "secondary", text: tmp13, onPress: handleFooterPress };
          const tmp17 = authStore(components_Button_Button.Button, obj4);
          cResult[9] = handleFooterPress;
          cResult[10] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp4.footerContainer) {
          if (cResult[12] === tmp10) {
            let tmp18;
            if (cResult[13] === tmp15) {
              tmp18 = cResult[14];
            }
            if (cResult[15] === tmp6) {
              let tmp22;
              if (cResult[16] === tmp18) {
                tmp22 = cResult[17];
              }
              return tmp22;
            }
            const obj5 = { style: tmp6, children: tmp18 };
            const tmp25 = authStore(hasOwnProperty, obj5);
            cResult[15] = tmp6;
            cResult[16] = tmp18;
            cResult[17] = tmp25;
            tmp22 = tmp25;
          }
        }
        const obj6 = { style: footerContainer, children: items };
        items = [tmp10, tmp15];
        const tmp21 = unpackModuleId(hasOwnProperty, obj6);
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
    }
  : (handleFooterPress) => {
      let intl;
      let intl2;
      let items;
      let items1;
      let obj3;
      handleFooterPress = handleFooterPress.handleFooterPress;
      const tmp = closure_12();
      const obj = { style: items, children: unpackModuleId(hasOwnProperty, obj3) };
      items = [tmp.footerSafeAreaContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
      obj3 = { style: tmp.footerContainer, children: items1 };
      const obj4 = {
        style: tmp.footerTitle,
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        children: intl.string(intl5.t.pgCZRP),
      };
      ({ paddingBottom: useSafeAreaInsetsDefault().bottom });
      const Text = Text_Text.Text;
      intl = intl5.intl;
      items1 = [authStore(Text, obj4)];
      const obj5 = { variant: "secondary", text: intl2.string(intl5.t.WqJbLi), onPress: handleFooterPress };
      const Button = components_Button_Button.Button;
      intl2 = intl5.intl;
      items1[1] = authStore(Button, obj5);
      return authStore(hasOwnProperty, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (current) => {
      let addedGuilds;
      let availableGuilds;
      let loading;
      let ref;
      let setTabIndex;
      let tabIndex;
      let tmp8;
      _require = current;
      let obj = require("react");
      const cResult = obj.c(26);
      closure_12();
      let obj2 = require("useNavigation");
      navigation = obj2.useNavigation();
      let obj3 = react;
      ref = react.useRef(current);
      let tmp6 = navigation;
      const tmp7 = navigation(ref[21])(ref);
      if (cResult[0] !== current) {
        const fn = function u() {
          ref.current = current;
        };
        cResult[0] = current;
        cResult[1] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      const effect = obj3.useEffect(tmp8);
      ({ addedGuilds, availableGuilds, loading } = tmp6(tmp[22])(tmp7.directoryGuildId, tmp7.directoryChannelId));
      const tmp10 = tmp6(tmp[22])(tmp7.directoryGuildId, tmp7.directoryChannelId);
      const bottom = tmp6(tmp[18])().bottom;
      const tmp11 = tabIndex(obj3.useState(0), 2);
      tabIndex = tmp11[0];
      react = tmp11[1];
      if (0 === tabIndex) {
        addedGuilds = availableGuilds;
      }
      if (cResult[2] !== navigation) {
        class R {
          constructor() {
            obj = {
              directoryGuildName: closure_2.current.directoryGuildName,
              onHubGuildInfoSet(name, icon, template) {
                let obj2;
                const obj = {
                  createGuild: obj2,
                  directoryChannelId: ref.current.directoryChannelId,
                  directoryGuildName: ref.current.directoryGuildName,
                };
                obj2 = { name, icon, template };
                navigation.push(constants.DESCRIPTION, obj);
              },
            };
            arr = closure_1.push(GuildDirectoryCreate.TEMPLATES, obj);
            return;
          }
        }
        cResult[2] = navigation;
        cResult[3] = R;
      } else {
        class R {
          constructor() {
            obj = {
              directoryGuildName: closure_2.current.directoryGuildName,
              onHubGuildInfoSet(name, icon, template) {
                let obj2;
                const obj = {
                  createGuild: obj2,
                  directoryChannelId: ref.current.directoryChannelId,
                  directoryGuildName: ref.current.directoryGuildName,
                };
                obj2 = { name, icon, template };
                navigation.push(constants.DESCRIPTION, obj);
              },
            };
            arr = closure_1.push(GuildDirectoryCreate.TEMPLATES, obj);
            return;
          }
        }
      }
      if (cResult[4] === addedGuilds.length) {
        class R {
          constructor() {
            obj = {
              directoryGuildName: closure_2.current.directoryGuildName,
              onHubGuildInfoSet(name, icon, template) {
                let obj2;
                const obj = {
                  createGuild: obj2,
                  directoryChannelId: ref.current.directoryChannelId,
                  directoryGuildName: ref.current.directoryGuildName,
                };
                obj2 = { name, icon, template };
                navigation.push(constants.DESCRIPTION, obj);
              },
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
              const obj = {
                guild,
                directoryChannelId: ref.current.directoryChannelId,
                directoryGuildName: ref.current.directoryGuildName,
              };
              navigation.push(constants.DESCRIPTION, obj);
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
    }
  : (current) => {
      let addedGuilds;
      let items4;
      let obj4;
      let ref;
      let tmp15Result;
      _require = current;
      const tmp = closure_12();
      let obj = require("useNavigation");
      navigation = obj.useNavigation();
      const tmp3 = ref;
      ref = addedGuilds.useRef(current);
      let tmp6 = navigation(ref[21])(ref);
      const effect = addedGuilds.useEffect(() => {
        ref.current = current;
      });
      const tmp8 = navigation(ref[22])(tmp6.directoryGuildId, tmp6.directoryChannelId);
      const availableGuilds = tmp8.availableGuilds;
      addedGuilds = tmp8.addedGuilds;
      const loading = tmp8.loading;
      const bottom = navigation(ref[18])().bottom;
      const tmp9 = availableGuilds(addedGuilds.useState(0), 2);
      const tabIndex = tmp9[0];
      const setTabIndex = tmp9[1];
      const items = [addedGuilds, availableGuilds, tabIndex];
      const memo = addedGuilds.useMemo(() => (0 === first ? availableGuilds : addedGuilds), items);
      const items1 = [navigation];
      const items2 = [memo.length, navigation, tabIndex];
      const callback = addedGuilds.useCallback(() => {
        let obj = {
          directoryGuildName: ref.current.directoryGuildName,
          onHubGuildInfoSet(name, icon, template) {
            let obj2;
            const obj = {
              createGuild: obj2,
              directoryChannelId: ref.current.directoryChannelId,
              directoryGuildName: ref.current.directoryGuildName,
            };
            obj2 = { name, icon, template };
            navigation.push(constants.DESCRIPTION, obj);
          },
        };
        navigation.push(GuildDirectoryCreate.TEMPLATES, obj);
      }, items1);
      const items3 = [tabIndex];
      const callback1 = addedGuilds.useCallback((guild) => {
        let tmp6;
        const index = guild.index;
        let obj = { guild: guild.item, start: 0 === index, end: index === memo.length - 1 };
        if (1 === first) {
          const obj2 = { directoryChannelId: ref.current.directoryChannelId };
          const merged = Object.assign(obj);
          tmp6 = authStore(closure_13, obj2);
        } else {
          const obj3 = {
            handleItemPress(guild) {
              const obj = {
                guild,
                directoryChannelId: ref.current.directoryChannelId,
                directoryGuildName: ref.current.directoryGuildName,
              };
              navigation.push(constants.DESCRIPTION, obj);
            },
          };
          const merged1 = Object.assign(obj);
          tmp6 = authStore(closure_14, obj3);
        }
        return tmp6;
      }, items2);
      [][0] = bottom;
      const callback2 = addedGuilds.useCallback(() => {
        const obj = { directoryGuildName: ref.current.directoryGuildName, tabIndex, setTabIndex };
        return authStore(closure_15, obj);
      }, items3);
      const tmp2 = _require;
      if (loading) {
        let obj2 = { style: tmp.loadingContainer, children: closure_10(tabIndex, {}) };
        tmp15Result = closure_10(bottom, obj2);
      } else {
        let obj3 = { children: closure_11(bottom, obj4) };
        obj4 = { style: tmp.container, children: items4 };
        const obj5 = {
          data: memo,
          ListHeaderComponent: callback2,
          renderItem: callback1,
          contentContainerStyle: tmp14,
        };
        const GuildDirectoryAddModalScreen = tmp2(tmp3[23]).GuildDirectoryAddModalScreen;
        items4 = [closure_10(setTabIndex, obj5)];
        const obj6 = { handleFooterPress: callback };
        items4[1] = closure_10(closure_16, obj6);
        tmp15Result = closure_10(GuildDirectoryAddModalScreen, obj3);
      }
      return tmp15Result;
    };
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx");

export default tmp6;
