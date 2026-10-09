// discord_app/modules/forums/native/ForumChannelSearch.tsx
import Tracking from "../tracking/Tracking.tsx";
import ForumActionCreatorsDefault from "../ForumActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import ForumSearchStore from "../ForumSearchStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_8 = createStyles.createStyles({
  inputContainer: { flexGrow: 1, marginLeft: 8 },
  cancelButtonContainer: { paddingLeft: 8 },
});
fn(558);
const ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SearchButton(channelId) {
        const cResult = channelId(route[7]).c(12);
        channelId = channelId.channelId;
        const tmp4 = closure_8();
        let obj = channelId(route[7]);
        const navigation = channelId(route[8]).useNavigation();
        let obj2 = channelId(route[8]);
        route = channelId(route[8]).useRoute();
        channelId(route[9]);
        if (cResult[0] === navigation) {
          if (cResult[1] === route) {
            let tmp9 = cResult[2];
            let tmp10 = cResult[3];
          }
          const effect = noop.useEffect(tmp9, tmp10);
          if (tmp8) {
            if (cResult[4] !== channelId) {
              function onPress() {
                if (null != channelId) {
                  const result = ForumActionCreatorsDefault.updateForumSearchQuery(tmp, null);
                }
              }
              cResult[4] = channelId;
              cResult[5] = onPress;
              let tmp14 = onPress;
            } else {
              tmp14 = cResult[5];
            }
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[12]).intl;
              const stringResult = intl.string(tmp(tmp2[12]).t["ETE/oC"]);
              cResult[6] = stringResult;
              let tmp16 = stringResult;
            } else {
              tmp16 = cResult[6];
            }
            if (cResult[7] !== tmp14) {
              const obj4 = { variant: "tertiary", size: "sm", text: tmp16, onPress: tmp14 };
              const tmp20 = jsx(tmp(tmp2[13]).Button, { variant: "tertiary", size: "sm", text: tmp16, onPress: tmp14 });
              cResult[7] = tmp14;
              cResult[8] = tmp20;
              let tmp18 = tmp20;
            } else {
              tmp18 = cResult[8];
            }
            if (cResult[9] === tmp4.cancelButtonContainer) {
              if (cResult[10] === tmp18) {
                let tmp21 = cResult[11];
              }
              return tmp21;
            }
            const obj5 = { style: tmp4.cancelButtonContainer, children: tmp18 };
            const tmp24 = <View style={tmp4.cancelButtonContainer}>{tmp18}</View>;
            cResult[9] = tmp4.cancelButtonContainer;
            cResult[10] = tmp18;
            cResult[11] = tmp24;
            tmp21 = tmp24;
          } else {
            return null;
          }
        }
        const fn = function u() {
          return () => {
            if (null != navigation) {
              navigation.setOptions(channelId(route[10]).getDefaultChannelStackHeaderProps(navigation, closure_1_2));
              const obj2 = channelId(route[10]);
            }
          };
        };
        const items = [navigation, route];
        cResult[0] = navigation;
        cResult[1] = route;
        cResult[2] = fn;
        cResult[3] = items;
        tmp10 = items;
        tmp9 = fn;
        const obj3 = channelId(route[8]);
      }
    : function SearchButton(channelId) {
        channelId = channelId.channelId;
        let route;
        const tmp = closure_8();
        const navigation = channelId(route[8]).useNavigation();
        let obj = channelId(route[8]);
        route = channelId(route[8]).useRoute();
        let obj2 = channelId(route[8]);
        const items = [navigation, route];
        const canSearchForumPostsByChannelId = channelId(route[9]).useCanSearchForumPostsByChannelId(channelId);
        const effect = noop.useEffect(
          () => () => {
            if (null != navigation) {
              navigation.setOptions(channelId(route[10]).getDefaultChannelStackHeaderProps(navigation, closure_1_2));
              const obj2 = channelId(route[10]);
            }
          },
          items,
        );
        let tmp8 = null;
        if (canSearchForumPostsByChannelId) {
          const obj4 = { style: tmp.cancelButtonContainer, children: null };
          const obj5 = { variant: "tertiary", size: "sm", text: null, onPress: null };
          const intl = tmp2(tmp3[12]).intl;
          obj5.text = intl.string(tmp2(tmp3[12]).t["ETE/oC"]);
          obj5.onPress = function onPress() {
            if (null != channelId) {
              const result = ForumActionCreatorsDefault.updateForumSearchQuery(tmp, null);
            }
          };
          obj4.children = jsx(tmp2(tmp3[13]).Button, { variant: "tertiary", size: "sm", text: null, onPress: null });
          tmp8 = <View style={tmp.cancelButtonContainer}>{null}</View>;
        }
        return tmp8;
      },
);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/ForumChannelSearch.tsx");

export const ForumChannelCloseSearchButton = memoResult;
export const ForumChannelSearchInput = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SearchInput(channelId) {
        const cResult = channelId(576).c(25);
        channelId = channelId.channelId;
        const guildId = channelId.guildId;
        closure_8();
        let obj = channelId(576);
        const canSearchForumPostsByChannelId = channelId(12799).useCanSearchForumPostsByChannelId(channelId);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ForumSearchStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function h() {
            let searchQuery = null;
            if (null != channelId) {
              searchQuery = ForumSearchStore.getSearchQuery(tmp);
            }
            return searchQuery;
          };
          const items1 = [channelId];
          cResult[1] = channelId;
          cResult[2] = fn;
          cResult[3] = items1;
          let tmp9 = items1;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[2];
          tmp9 = cResult[3];
        }
        let obj2 = channelId(12799);
        const stateFromStores = channelId(504).useStateFromStores(first, tmp8, tmp9);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ChannelStore];
          cResult[4] = items2;
          let tmp11 = items2;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== channelId) {
          class B {
            constructor() {
              tmp2 = null != channelId;
              if (tmp2) {
                tmp3 = closure_5;
                channel = closure_5.getChannel(tmp);
                flag = undefined;
                if (channel != null) {
                  flag = channel.isGameInvitesChannel();
                }
                if (flag == null) {
                  flag = false;
                }
                tmp2 = flag;
              }
              return tmp2;
            }
          }
          const items3 = [channelId];
          cResult[5] = channelId;
          cResult[6] = B;
          cResult[7] = items3;
          let tmp14 = items3;
        } else {
          class B {
            constructor() {
              tmp2 = null != channelId;
              if (tmp2) {
                tmp3 = closure_5;
                channel = closure_5.getChannel(tmp);
                flag = undefined;
                if (channel != null) {
                  flag = channel.isGameInvitesChannel();
                }
                if (flag == null) {
                  flag = false;
                }
                tmp2 = flag;
              }
              return tmp2;
            }
          }
          tmp14 = cResult[7];
        }
        const tmpResult = channelId(504);
        const stateFromStores1 = channelId(504).useStateFromStores(tmp11, B, tmp14);
        if (canSearchForumPostsByChannelId) {
          class B {
            constructor() {
              tmp2 = null != channelId;
              if (tmp2) {
                tmp3 = closure_5;
                channel = closure_5.getChannel(tmp);
                flag = undefined;
                if (channel != null) {
                  flag = channel.isGameInvitesChannel();
                }
                if (flag == null) {
                  flag = false;
                }
                tmp2 = flag;
              }
              return tmp2;
            }
          }
          if (null != stateFromStores) {
            class B {
              constructor() {
                tmp2 = null != channelId;
                if (tmp2) {
                  tmp3 = closure_5;
                  channel = closure_5.getChannel(tmp);
                  flag = undefined;
                  if (channel != null) {
                    flag = channel.isGameInvitesChannel();
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  tmp2 = flag;
                }
                return tmp2;
              }
            }
            function clearSearchInput() {
              let tmp2 = null != guildId;
              if (tmp2) {
                tmp2 = null != channelId;
              }
              if (tmp2) {
                const obj2 = { guildId, channelId };
                const result = Tracking.trackForumSearchCleared(obj2);
              }
              if (null != channelId) {
                const result1 = ForumActionCreatorsDefault.updateForumSearchQuery(tmp8, "");
              }
            }
            cResult[8] = channelId;
            cResult[9] = guildId;
            cResult[10] = clearSearchInput;
          }
        }
        return null;
      }
    : function SearchInput(channelId) {
        channelId = channelId.channelId;
        ({ guildId: importDefault, placeholder } = channelId);
        const tmp = closure_8();
        const canSearchForumPostsByChannelId = channelId(12799).useCanSearchForumPostsByChannelId(channelId);
        let obj = channelId(12799);
        const items = [ForumSearchStore];
        const items1 = [channelId];
        const stateFromStores = channelId(504).useStateFromStores(
          items,
          () => {
            let searchQuery = null;
            if (null != channelId) {
              searchQuery = ForumSearchStore.getSearchQuery(tmp);
            }
            return searchQuery;
          },
          items1,
        );
        channelId(504);
        [][0] = channelId;
        let tmp8Result = null;
        if (canSearchForumPostsByChannelId) {
          tmp8Result = null;
          if (null != stateFromStores) {
            let obj3 = { style: tmp.inputContainer, children: null };
            const obj4 = {
              size: "sm",
              defaultValue: stateFromStores,
              onChange: function onChangeText(query) {
                if (null != channelId) {
                  const result = ForumActionCreatorsDefault.updateForumSearchQuery(tmp, query);
                }
              },
              placeholder: null,
              autoFocus: null,
              onClear: null,
              grow: false,
            };
            if (null != placeholder) {
              obj4.placeholder = placeholder;
              obj4.autoFocus = 0 === stateFromStores.length;
              obj4.onClear = function clearSearchInput() {
                let tmp2 = null != guildId;
                if (tmp2) {
                  tmp2 = null != channelId;
                }
                if (tmp2) {
                  const obj2 = { guildId, channelId };
                  const result = Tracking.trackForumSearchCleared(obj2);
                }
                if (null != channelId) {
                  const result1 = ForumActionCreatorsDefault.updateForumSearchQuery(tmp8, "");
                }
              };
              obj3.children = <tmp10 {...obj4} />;
              tmp8Result = <View {...obj3} />;
            } else {
              const intl = tmp2(1126).intl;
              const t = tmp2(1126).t;
              intl.string(tmp6 ? t["5h0QOP"] : t.Iy2gnS);
            }
          }
        }
        return tmp8Result;
      },
);
