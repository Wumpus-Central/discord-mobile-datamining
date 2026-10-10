// === Module 17331: SearchTabsPage ===

// Module 17331 (SearchTabsPage)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 576 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8394 */;
import GuildNSFWDefault from "GuildNSFW" /* 11190 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 12391 */;
import RecentScreenDefault from "RecentScreen" /* 17332 */;
import PeopleScreenDefault from "PeopleScreen" /* 17397 */;
import MembersScreenDefault from "MembersScreen" /* 17399 */;
import ChannelsScreenDefault from "ChannelsScreen" /* 17405 */;
import MediaScreenDefault from "MediaScreen" /* 17406 */;
import FilesScreenDefault from "FilesScreen" /* 17414 */;
import LinksScreenDefault from "LinksScreen" /* 17416 */;
import MessagesScreenDefault from "MessagesScreen" /* 17423 */;
import messages_PinsScreenDefault from "messages/PinsScreen" /* 17425 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;

require = fn;
const View = fn(17).View;
const SearchTabs = fn(9312).SearchTabs;
const SearchTypes = fn(1085).SearchTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
let context = noop.createContext(undefined);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function SearchTabsPage(arg0) {
  const cResult = searchContext(576).c(47);
  ({ tab, searchContext } = arg0);
  ({ isFocused, selectMediaTab, width } = arg0);
  const tmp4 = _slicedToArray(noop.useState(isFocused), 2);
  importDefault = tmp4[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const timerId = setTimeout(() => {
        closure_1_1(true);
      }, 10);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === searchContext.channelId) {
    if (cResult[4] === searchContext.type) {
      let tmp10 = cResult[5];
    }
    const stateFromStores = searchContext(504).useStateFromStores(tmp8, tmp10);
    const tmpResult = searchContext(504);
    const isChannelSpoilerGated = searchContext(5944).useIsChannelSpoilerGated(stateFromStores);
    searchContext(5924);
    if (tmp4[0]) {
      if (tab !== SearchTabs.MEMBERS) {
        if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
          if (tmp14) {
            if (cResult[6] === searchContext.channelId) {
              if (cResult[7] === searchContext.guildId) {
                let tmp62 = cResult[8];
              }
              return tmp62;
            }
            ({ guildId: obj16.guildId, channelId: obj16.channelId } = searchContext);
            const tmp65 = jsx(GuildNSFWDefault, { guildId: null, channelId: null });
            cResult[6] = searchContext.channelId;
            cResult[7] = searchContext.guildId;
            cResult[8] = tmp65;
            tmp62 = tmp65;
            const obj3 = { guildId: null, channelId: null };
          } else if (isChannelSpoilerGated) {
            if (cResult[9] === searchContext.channelId) {
              if (cResult[10] === searchContext.guildId) {
                let tmp58 = cResult[11];
              }
              return tmp58;
            }
            ({ guildId: obj15.guildId, channelId: obj15.channelId } = searchContext);
            const tmp61 = jsx(ChannelSpoilerDefault, { guildId: null, channelId: null });
            cResult[9] = searchContext.channelId;
            cResult[10] = searchContext.guildId;
            cResult[11] = tmp61;
            tmp58 = tmp61;
            const obj4 = { guildId: null, channelId: null };
          }
        }
      }
      if (SearchTabs.RECENT === tab) {
        if (cResult[12] === searchContext) {
          if (cResult[13] === selectMediaTab) {
            if (cResult[14] === width) {
              let tmp54 = cResult[15];
            }
            return tmp54;
          }
        }
        const obj5 = { onJumpToMedia: selectMediaTab, searchContext, width };
        const tmp57 = jsx(RecentScreenDefault, { onJumpToMedia: selectMediaTab, searchContext, width });
        cResult[12] = searchContext;
        cResult[13] = selectMediaTab;
        cResult[14] = width;
        cResult[15] = tmp57;
        tmp54 = tmp57;
      } else if (SearchTabs.PEOPLE === tab) {
        if (cResult[16] !== searchContext) {
          const obj6 = { searchContext };
          const tmp53 = jsx(PeopleScreenDefault, { searchContext });
          cResult[16] = searchContext;
          cResult[17] = tmp53;
          let tmp50 = tmp53;
        } else {
          tmp50 = cResult[17];
        }
        return tmp50;
      } else if (SearchTabs.MEMBERS === tab) {
        if (cResult[18] !== searchContext) {
          const obj7 = { searchContext };
          const tmp49 = jsx(MembersScreenDefault, { searchContext });
          cResult[18] = searchContext;
          cResult[19] = tmp49;
          let tmp46 = tmp49;
        } else {
          tmp46 = cResult[19];
        }
        return tmp46;
      } else if (SearchTabs.GUILD_CHANNELS === tab) {
        if (cResult[20] !== searchContext) {
          const obj8 = { searchContext };
          const tmp45 = jsx(ChannelsScreenDefault, { searchContext });
          cResult[20] = searchContext;
          cResult[21] = tmp45;
          let tmp42 = tmp45;
        } else {
          tmp42 = cResult[21];
        }
        return tmp42;
      } else if (SearchTabs.MEDIA === tab) {
        if (cResult[22] === isFocused) {
          if (cResult[23] === searchContext) {
            if (cResult[24] === tab) {
              if (cResult[25] === width) {
                let tmp38 = cResult[26];
              }
              return tmp38;
            }
          }
        }
        const obj9 = { tab, searchContext, isFocused, width };
        const tmp41 = jsx(MediaScreenDefault, { tab, searchContext, isFocused, width });
        cResult[22] = isFocused;
        cResult[23] = searchContext;
        cResult[24] = tab;
        cResult[25] = width;
        cResult[26] = tmp41;
        tmp38 = tmp41;
      } else if (SearchTabs.FILES === tab) {
        if (cResult[27] === isFocused) {
          if (cResult[28] === searchContext) {
            if (cResult[29] === tab) {
              if (cResult[30] === width) {
                let tmp34 = cResult[31];
              }
              return tmp34;
            }
          }
        }
        const obj10 = { tab, searchContext, isFocused, width };
        const tmp37 = jsx(FilesScreenDefault, { tab, searchContext, isFocused, width });
        cResult[27] = isFocused;
        cResult[28] = searchContext;
        cResult[29] = tab;
        cResult[30] = width;
        cResult[31] = tmp37;
        tmp34 = tmp37;
      } else if (SearchTabs.LINKS === tab) {
        if (cResult[32] === isFocused) {
          if (cResult[33] === searchContext) {
            if (cResult[34] === tab) {
              if (cResult[35] === width) {
                let tmp30 = cResult[36];
              }
              return tmp30;
            }
          }
        }
        const obj11 = { tab, searchContext, isFocused, width };
        const tmp33 = jsx(LinksScreenDefault, { tab, searchContext, isFocused, width });
        cResult[32] = isFocused;
        cResult[33] = searchContext;
        cResult[34] = tab;
        cResult[35] = width;
        cResult[36] = tmp33;
        tmp30 = tmp33;
      } else if (SearchTabs.THREADS === tab) {
        if (cResult[37] !== searchContext) {
          const obj12 = { searchContext };
          const tmp29 = jsx(searchContext(17417).SearchTabsThreadScreen, { searchContext });
          cResult[37] = searchContext;
          cResult[38] = tmp29;
          let tmp27 = tmp29;
        } else {
          tmp27 = cResult[38];
        }
        return tmp27;
      } else if (SearchTabs.MESSAGES === tab) {
        if (cResult[39] === isFocused) {
          if (cResult[40] === searchContext) {
            if (cResult[41] === tab) {
              let tmp23 = cResult[42];
            }
            return tmp23;
          }
        }
        const obj13 = { tab, searchContext, isFocused };
        const tmp26 = jsx(MessagesScreenDefault, { tab, searchContext, isFocused });
        cResult[39] = isFocused;
        cResult[40] = searchContext;
        cResult[41] = tab;
        cResult[42] = tmp26;
        tmp23 = tmp26;
      } else if (SearchTabs.PINS === tab) {
        if (cResult[43] === isFocused) {
          if (cResult[44] === searchContext) {
            if (cResult[45] === tab) {
              let tmp19 = cResult[46];
            }
            return tmp19;
          }
        }
        const obj14 = { tab, searchContext, isFocused };
        const tmp22 = jsx(messages_PinsScreenDefault, { tab, searchContext, isFocused });
        cResult[43] = isFocused;
        cResult[44] = searchContext;
        cResult[45] = tab;
        cResult[46] = tmp22;
        tmp19 = tmp22;
      } else {
        return null;
      }
    } else {
      return null;
    }
    const tmpResult3 = searchContext(5944);
  }
  const fn2 = function b() {
    if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
      const channelId = searchContext.channelId;
    }
    return ChannelStore.getChannel(channelId);
  };
  cResult[3] = searchContext.channelId;
  cResult[4] = searchContext.type;
  cResult[5] = fn2;
  tmp10 = fn2;
  const obj = searchContext(576);
}) : (function SearchTabsPage(selectMediaTab) {
  ({ tab, searchContext } = selectMediaTab);
  ({ isFocused, width } = selectMediaTab);
  importDefault = undefined;
  [tmp2, c1] = noop.useState(isFocused);
  const effect = noop.useEffect(() => {
    const timerId = setTimeout(() => {
      closure_1_1(true);
    }, 10);
  }, []);
  const tmp = _slicedToArray(noop.useState(isFocused), 2);
  const items = [ChannelStore];
  const stateFromStores = searchContext(504).useStateFromStores(items, () => {
    if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
      const channelId = searchContext.channelId;
    }
    return ChannelStore.getChannel(channelId);
  });
  const obj = searchContext(504);
  const isChannelSpoilerGated = searchContext(5944).useIsChannelSpoilerGated(stateFromStores);
  searchContext(5924);
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
      const obj5 = { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width };
      return jsx(RecentScreenDefault, { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width });
    } else if (SearchTabs.PEOPLE === tab) {
      const obj6 = { searchContext };
      return jsx(PeopleScreenDefault, { searchContext });
    } else if (SearchTabs.MEMBERS === tab) {
      const obj7 = { searchContext };
      return jsx(MembersScreenDefault, { searchContext });
    } else if (SearchTabs.GUILD_CHANNELS === tab) {
      const obj8 = { searchContext };
      return jsx(ChannelsScreenDefault, { searchContext });
    } else if (SearchTabs.MEDIA === tab) {
      const obj9 = { tab, searchContext, isFocused, width };
      return jsx(MediaScreenDefault, { tab, searchContext, isFocused, width });
    } else if (SearchTabs.FILES === tab) {
      const obj10 = { tab, searchContext, isFocused, width };
      return jsx(FilesScreenDefault, { tab, searchContext, isFocused, width });
    } else if (SearchTabs.LINKS === tab) {
      const obj11 = { tab, searchContext, isFocused, width };
      return jsx(LinksScreenDefault, { tab, searchContext, isFocused, width });
    } else if (SearchTabs.THREADS === tab) {
      const obj12 = { searchContext };
      return jsx(searchContext(17417).SearchTabsThreadScreen, { searchContext });
    } else if (SearchTabs.MESSAGES === tab) {
      const obj26 = { tab, searchContext, isFocused };
      return jsx(MessagesScreenDefault, { tab, searchContext, isFocused });
    } else if (SearchTabs.PINS === tab) {
      const obj27 = { tab, searchContext, isFocused };
      return jsx(messages_PinsScreenDefault, { tab, searchContext, isFocused });
    } else {
      return null;
    }
  } else {
    return null;
  }
  const obj2 = searchContext(5944);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsPage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedSearchTabsPage(arg0) {
  const cResult = c.c(9);
  ({ tab, searchContext, width } = arg0);
  context = noop.useContext(context);
  _modDef38(null != context, "[SearchTabsPageContext] Context should not be null.");
  const tmp4 = closure_10();
  const tmp5 = useStateFromSharedValueDefault(context.selectedTab) === tab;
  if (cResult[0] === context.selectMediaTab) {
    if (cResult[1] === tmp5) {
      if (cResult[2] === searchContext) {
        if (cResult[3] === tab) {
          if (cResult[4] === width) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === tmp4.container) {
            if (cResult[7] === tmp6) {
              let tmp8 = cResult[8];
            }
            return tmp8;
          }
          const obj2 = { style: tmp4.container, children: tmp6 };
          const tmp11 = <View style={tmp4.container}>{tmp6}</View>;
          cResult[6] = tmp4.container;
          cResult[7] = tmp6;
          cResult[8] = tmp11;
          tmp8 = tmp11;
        }
      }
    }
  }
  const tmp7 = <closure_12 isFocused={tmp5} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
  cResult[0] = context.selectMediaTab;
  cResult[1] = tmp5;
  cResult[2] = searchContext;
  cResult[3] = tab;
  cResult[4] = width;
  cResult[5] = tmp7;
  tmp6 = tmp7;
  const obj3 = { isFocused: tmp5, selectMediaTab: context.selectMediaTab, tab, searchContext, width };
}) : (function ConnectedSearchTabsPage(tab) {
  tab = tab.tab;
  ({ searchContext, width } = tab);
  context = noop.useContext(context);
  _modDef38(null != context, "[SearchTabsPageContext] Context should not be null.");
  const obj = { style: closure_10().container, children: null };
  const tmp3 = closure_10();
  obj.children = <closure_12 isFocused={useStateFromSharedValueDefault(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
  return <View style={closure_10().container}>{null}</View>;
});
export const SearchTabsPageContext = context;