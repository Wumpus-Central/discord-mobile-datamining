// discord_app/modules/search/native/components/tabs/SearchTabsPage.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import Constants from "../../../../../Constants.tsx";
import SearchConstants from "../../../SearchConstants.tsx";
import useStateFromSharedValueDefault from "../../../../reanimated/native/useStateFromSharedValue.tsx";
import GuildNSFWDefault from "../../../../../components_native/warnings/GuildNSFW.tsx";
import ChannelSpoilerDefault from "../../../../spoiler_channels/native/ChannelSpoiler.tsx";
import RecentScreenDefault from "pages/RecentScreen.tsx";
import PeopleScreenDefault from "pages/PeopleScreen.tsx";
import MembersScreenDefault from "pages/MembersScreen.tsx";
import ChannelsScreenDefault from "pages/ChannelsScreen.tsx";
import MediaScreenDefault from "pages/messages/MediaScreen.tsx";
import FilesScreenDefault from "pages/messages/FilesScreen.tsx";
import LinksScreenDefault from "pages/messages/LinksScreen.tsx";
import MessagesScreenDefault from "pages/messages/MessagesScreen.tsx";
import messages_PinsScreenDefault from "pages/messages/PinsScreen.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let importDefault;

const View = react_native.View;
const SearchTabs = SearchConstants.SearchTabs;
const SearchTypes = Constants.SearchTypes;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
let context = react.createContext(undefined);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_1;
      let first;
      let isFocused;
      let searchContext;
      let selectMediaTab;
      let tab;
      let tmp6;
      let tmp7;
      let tmp9;
      let width;
      const obj = searchContext(576);
      const cResult = obj.c(47);
      ({ tab, searchContext } = arg0);
      ({ isFocused, selectMediaTab, width } = arg0);
      [first, importDefault] = react.useState(isFocused);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h() {
          const timerId = setTimeout(() => {
            closure_1_1(true);
          }, 10);
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp6 = fn;
        tmp7 = items;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const effect = react.useEffect(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[2] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === searchContext.channelId) {
        let tmp11;
        if (cResult[4] === searchContext.type) {
          tmp11 = cResult[5];
        }
        const tmpResult = searchContext(504);
        const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11);
        const tmpResult3 = searchContext(6832);
        const isChannelSpoilerGated = tmpResult3.useIsChannelSpoilerGated(stateFromStores);
        searchContext(5100);
        if (first) {
          if (tab !== SearchTabs.MEMBERS) {
            if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
              if (tmp15) {
                if (cResult[6] === searchContext.channelId) {
                  let tmp63;
                  if (cResult[7] === searchContext.guildId) {
                    tmp63 = cResult[8];
                  }
                  return tmp63;
                }
                ({ guildId: obj16.guildId, channelId: obj16.channelId } = searchContext);
                const tmp66 = jsx(GuildNSFWDefault, { guildId: null, channelId: null });
                cResult[6] = searchContext.channelId;
                cResult[7] = searchContext.guildId;
                cResult[8] = tmp66;
                tmp63 = tmp66;
              } else if (isChannelSpoilerGated) {
                if (cResult[9] === searchContext.channelId) {
                  let tmp59;
                  if (cResult[10] === searchContext.guildId) {
                    tmp59 = cResult[11];
                  }
                  return tmp59;
                }
                ({ guildId: obj15.guildId, channelId: obj15.channelId } = searchContext);
                const tmp62 = jsx(ChannelSpoilerDefault, { guildId: null, channelId: null });
                cResult[9] = searchContext.channelId;
                cResult[10] = searchContext.guildId;
                cResult[11] = tmp62;
                tmp59 = tmp62;
              }
            }
          }
          if (SearchTabs.RECENT === tab) {
            if (cResult[12] === searchContext) {
              if (cResult[13] === selectMediaTab) {
                let tmp55;
                if (cResult[14] === width) {
                  tmp55 = cResult[15];
                }
                return tmp55;
              }
            }
            const tmp58 = jsx(RecentScreenDefault, { onJumpToMedia: selectMediaTab, searchContext, width });
            cResult[12] = searchContext;
            cResult[13] = selectMediaTab;
            cResult[14] = width;
            cResult[15] = tmp58;
            tmp55 = tmp58;
          } else if (SearchTabs.PEOPLE === tab) {
            let tmp51;
            if (cResult[16] !== searchContext) {
              const tmp54 = jsx(PeopleScreenDefault, { searchContext });
              cResult[16] = searchContext;
              cResult[17] = tmp54;
              tmp51 = tmp54;
            } else {
              tmp51 = cResult[17];
            }
            return tmp51;
          } else if (SearchTabs.MEMBERS === tab) {
            let tmp47;
            if (cResult[18] !== searchContext) {
              const tmp50 = jsx(MembersScreenDefault, { searchContext });
              cResult[18] = searchContext;
              cResult[19] = tmp50;
              tmp47 = tmp50;
            } else {
              tmp47 = cResult[19];
            }
            return tmp47;
          } else if (SearchTabs.GUILD_CHANNELS === tab) {
            let tmp43;
            if (cResult[20] !== searchContext) {
              const tmp46 = jsx(ChannelsScreenDefault, { searchContext });
              cResult[20] = searchContext;
              cResult[21] = tmp46;
              tmp43 = tmp46;
            } else {
              tmp43 = cResult[21];
            }
            return tmp43;
          } else if (SearchTabs.MEDIA === tab) {
            if (cResult[22] === isFocused) {
              if (cResult[23] === searchContext) {
                if (cResult[24] === tab) {
                  let tmp39;
                  if (cResult[25] === width) {
                    tmp39 = cResult[26];
                  }
                  return tmp39;
                }
              }
            }
            const tmp42 = jsx(MediaScreenDefault, { tab, searchContext, isFocused, width });
            cResult[22] = isFocused;
            cResult[23] = searchContext;
            cResult[24] = tab;
            cResult[25] = width;
            cResult[26] = tmp42;
            tmp39 = tmp42;
          } else if (SearchTabs.FILES === tab) {
            if (cResult[27] === isFocused) {
              if (cResult[28] === searchContext) {
                if (cResult[29] === tab) {
                  let tmp35;
                  if (cResult[30] === width) {
                    tmp35 = cResult[31];
                  }
                  return tmp35;
                }
              }
            }
            const tmp38 = jsx(FilesScreenDefault, { tab, searchContext, isFocused, width });
            cResult[27] = isFocused;
            cResult[28] = searchContext;
            cResult[29] = tab;
            cResult[30] = width;
            cResult[31] = tmp38;
            tmp35 = tmp38;
          } else if (SearchTabs.LINKS === tab) {
            if (cResult[32] === isFocused) {
              if (cResult[33] === searchContext) {
                if (cResult[34] === tab) {
                  let tmp31;
                  if (cResult[35] === width) {
                    tmp31 = cResult[36];
                  }
                  return tmp31;
                }
              }
            }
            const tmp34 = jsx(LinksScreenDefault, { tab, searchContext, isFocused, width });
            cResult[32] = isFocused;
            cResult[33] = searchContext;
            cResult[34] = tab;
            cResult[35] = width;
            cResult[36] = tmp34;
            tmp31 = tmp34;
          } else if (SearchTabs.THREADS === tab) {
            let tmp28;
            if (cResult[37] !== searchContext) {
              const tmp30 = jsx(searchContext(16889).SearchTabsThreadScreen, { searchContext });
              cResult[37] = searchContext;
              cResult[38] = tmp30;
              tmp28 = tmp30;
            } else {
              tmp28 = cResult[38];
            }
            return tmp28;
          } else if (SearchTabs.MESSAGES === tab) {
            if (cResult[39] === isFocused) {
              if (cResult[40] === searchContext) {
                let tmp24;
                if (cResult[41] === tab) {
                  tmp24 = cResult[42];
                }
                return tmp24;
              }
            }
            const tmp27 = jsx(MessagesScreenDefault, { tab, searchContext, isFocused });
            cResult[39] = isFocused;
            cResult[40] = searchContext;
            cResult[41] = tab;
            cResult[42] = tmp27;
            tmp24 = tmp27;
          } else if (SearchTabs.PINS === tab) {
            if (cResult[43] === isFocused) {
              if (cResult[44] === searchContext) {
                let tmp20;
                if (cResult[45] === tab) {
                  tmp20 = cResult[46];
                }
                return tmp20;
              }
            }
            const tmp23 = jsx(messages_PinsScreenDefault, { tab, searchContext, isFocused });
            cResult[43] = isFocused;
            cResult[44] = searchContext;
            cResult[45] = tab;
            cResult[46] = tmp23;
            tmp20 = tmp23;
          } else {
            return null;
          }
        } else {
          return null;
        }
      }
      const fn2 = function b() {
        let channelId;
        const getChannel = ChannelStore.getChannel;
        if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
          channelId = searchContext.channelId;
        }
        return getChannel(channelId);
      };
      cResult[3] = searchContext.channelId;
      cResult[4] = searchContext.type;
      cResult[5] = fn2;
      tmp11 = fn2;
    }
  : (selectMediaTab) => {
      let c1;
      let isFocused;
      let searchContext;
      let tab;
      let tmp2;
      let width;
      ({ tab, searchContext } = selectMediaTab);
      ({ isFocused, width } = selectMediaTab);
      importDefault = undefined;
      selectMediaTab = selectMediaTab.selectMediaTab;
      [tmp2, c1] = _slicedToArray(react.useState(isFocused), 2);
      const tmp = _slicedToArray(react.useState(isFocused), 2);
      const effect = react.useEffect(() => {
        const timerId = setTimeout(() => {
          closure_1_1(true);
        }, 10);
      }, []);
      const items = [ChannelStore];
      const obj = searchContext(504);
      const stateFromStores = obj.useStateFromStores(items, () => {
        let channelId;
        const getChannel = ChannelStore.getChannel;
        if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
          channelId = searchContext.channelId;
        }
        return getChannel(channelId);
      });
      const obj2 = searchContext(6832);
      const isChannelSpoilerGated = obj2.useIsChannelSpoilerGated(stateFromStores);
      searchContext(5100);
      if (tmp2) {
        if (tab !== SearchTabs.MEMBERS) {
          if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
            if (tmp9) {
              ({ guildId: obj14.guildId, channelId: obj14.channelId } = searchContext);
              return jsx(GuildNSFWDefault, { guildId: null, channelId: null });
            } else if (isChannelSpoilerGated) {
              ({ guildId: obj13.guildId, channelId: obj13.channelId } = searchContext);
              return jsx(ChannelSpoilerDefault, { guildId: null, channelId: null });
            }
          }
        }
        if (SearchTabs.RECENT === tab) {
          return jsx(RecentScreenDefault, { onJumpToMedia: selectMediaTab, searchContext, width });
        } else if (SearchTabs.PEOPLE === tab) {
          return jsx(PeopleScreenDefault, { searchContext });
        } else if (SearchTabs.MEMBERS === tab) {
          return jsx(MembersScreenDefault, { searchContext });
        } else if (SearchTabs.GUILD_CHANNELS === tab) {
          return jsx(ChannelsScreenDefault, { searchContext });
        } else if (SearchTabs.MEDIA === tab) {
          return jsx(MediaScreenDefault, { tab, searchContext, isFocused, width });
        } else if (SearchTabs.FILES === tab) {
          return jsx(FilesScreenDefault, { tab, searchContext, isFocused, width });
        } else if (SearchTabs.LINKS === tab) {
          return jsx(LinksScreenDefault, { tab, searchContext, isFocused, width });
        } else if (SearchTabs.THREADS === tab) {
          return jsx(searchContext(16889).SearchTabsThreadScreen, { searchContext });
        } else if (SearchTabs.MESSAGES === tab) {
          return jsx(MessagesScreenDefault, { tab, searchContext, isFocused });
        } else if (SearchTabs.PINS === tab) {
          return jsx(messages_PinsScreenDefault, { tab, searchContext, isFocused });
        } else {
          return null;
        }
      } else {
        return null;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let searchContext;
      let tab;
      let width;
      const obj = react2;
      const cResult = obj.c(9);
      ({ tab, searchContext, width } = arg0);
      context = react.useContext(context);
      _modDef38(null != context, "[SearchTabsPageContext] Context should not be null.");
      const tmp4 = closure_10();
      const tmp5 = useStateFromSharedValueDefault(context.selectedTab) === tab;
      if (cResult[0] === context.selectMediaTab) {
        if (cResult[1] === tmp5) {
          if (cResult[2] === searchContext) {
            if (cResult[3] === tab) {
              let tmp6;
              if (cResult[4] === width) {
                tmp6 = cResult[5];
              }
              if (cResult[6] === tmp4.container) {
                let tmp8;
                if (cResult[7] === tmp6) {
                  tmp8 = cResult[8];
                }
                return tmp8;
              }
              const tmp11 = <View style={tmp4.container}>{tmp6}</View>;
              cResult[6] = tmp4.container;
              cResult[7] = tmp6;
              cResult[8] = tmp11;
              tmp8 = tmp11;
            }
          }
        }
      }
      const tmp7 = (
        <closure_12
          isFocused={tmp5}
          selectMediaTab={context.selectMediaTab}
          tab={tab}
          searchContext={searchContext}
          width={width}
        />
      );
      cResult[0] = context.selectMediaTab;
      cResult[1] = tmp5;
      cResult[2] = searchContext;
      cResult[3] = tab;
      cResult[4] = width;
      cResult[5] = tmp7;
      tmp6 = tmp7;
    }
  : (tab) => {
      let searchContext;
      let width;
      tab = tab.tab;
      ({ searchContext, width } = tab);
      context = react.useContext(context);
      _modDef38(null != context, "[SearchTabsPageContext] Context should not be null.");
      ({
        isFocused: useStateFromSharedValueDefault(context.selectedTab) === tab,
        selectMediaTab: context.selectMediaTab,
        tab,
        searchContext,
        width,
      });
      return <View style={closure_10().container}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsPage.tsx");

export default tmp3;
export const SearchTabsPageContext = context;
