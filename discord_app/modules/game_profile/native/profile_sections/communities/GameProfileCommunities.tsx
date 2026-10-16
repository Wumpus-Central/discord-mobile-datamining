// discord_app/modules/game_profile/native/profile_sections/communities/GameProfileCommunities.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildRecordUtils from "../../../../../utils/GuildRecordUtils.tsx";
import GameProfileAnalyticUtils from "../../../GameProfileAnalyticUtils.tsx";
import GameProfileActionCreatorsDefault from "../../../GameProfileActionCreators.native.tsx";
import GameProfileNavTypes from "../../../GameProfileNavTypes.tsx";
import useGameProfileCommunitiesDefault from "../../../hooks/useGameProfileCommunities.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";

require = fn;
const View = fn(17).View;
const JoinGuildSources = fn(1087).JoinGuildSources;
const isStaticChannelRoute = fn(2075).isStaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5153);
let obj = {
  container: {
    marginTop: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT,
    padding: nativeDefault.space.PX_16,
    maxWidth: fn(9144).MOBILE_GAME_PROFILE_MAX_WIDTH,
    alignSelf: "center",
    width: "100%",
    gap: nativeDefault.space.PX_8,
  },
  header: null,
  list: null,
};
let obj3 = {
  marginTop: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT,
  padding: nativeDefault.space.PX_16,
  maxWidth: fn(9144).MOBILE_GAME_PROFILE_MAX_WIDTH,
  alignSelf: "center",
  width: "100%",
  gap: nativeDefault.space.PX_8,
};
obj.header = {
  justifyContent: "center",
  minHeight: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_8,
};
let obj4 = {
  justifyContent: "center",
  minHeight: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_8,
};
obj.list = { gap: nativeDefault.space.PX_12 };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GameProfileCommunityCard(gameId) {
        const cResult = require("c").c(24);
        gameId = gameId.gameId;
        _require = gameId;
        guild = gameId.guild;
        viewId = gameId.viewId;
        const scrollY = gameId.scrollY;
        const trackAction = gameId.trackAction;
        const closeModal = gameId.closeModal;
        if (cResult[0] !== guild) {
          let result = tmp(tmp2[14]).fromClientDiscoverableGuild(guild);
          cResult[0] = guild;
          cResult[1] = result;
          const tmpResult = tmp(tmp2[14]);
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [A];
          cResult[2] = items;
          let tmp6 = items;
        } else {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== guild.id) {
          const fn = function p() {
            guild = GuildStore.getGuild(guild.id);
            let joinedAt;
            if (guild != null) {
              joinedAt = guild.joinedAt;
            }
            return null != joinedAt;
          };
          let items1 = [guild.id];
          cResult[3] = guild.id;
          cResult[4] = fn;
          cResult[5] = items1;
          let tmp9 = items1;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[4];
          tmp9 = cResult[5];
        }
        let obj = require("c");
        const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp8, tmp9);
        if (cResult[6] !== gameId) {
          class A {
            constructor(arg0, arg1) {
              obj = closure_1(closure_2[16]);
              obj1 = {
                gameId: closure_0,
                channelId: gameId,
                initialScrollOffset: arg1,
                tab: closure_0(closure_2[17]).GameProfileNavTab.COMMUNITIES,
                source: closure_0(closure_2[18]).GameProfileSources.CommunityPreviewReturn,
              };
              result = obj.setGameProfilePendingReturn(obj1);
              return;
            }
          }
          cResult[6] = gameId;
          cResult[7] = A;
        } else {
          class A {
            constructor(arg0, arg1) {
              obj = closure_1(closure_2[16]);
              obj1 = {
                gameId: closure_0,
                channelId: gameId,
                initialScrollOffset: arg1,
                tab: closure_0(closure_2[17]).GameProfileNavTab.COMMUNITIES,
                source: closure_0(closure_2[18]).GameProfileSources.CommunityPreviewReturn,
              };
              result = obj.setGameProfilePendingReturn(obj1);
              return;
            }
          }
        }
        if (cResult[8] === closeModal) {
          class A {
            constructor(arg0, arg1) {
              obj = closure_1(closure_2[16]);
              obj1 = {
                gameId: closure_0,
                channelId: gameId,
                initialScrollOffset: arg1,
                tab: closure_0(closure_2[17]).GameProfileNavTab.COMMUNITIES,
                source: closure_0(closure_2[18]).GameProfileSources.CommunityPreviewReturn,
              };
              result = obj.setGameProfilePendingReturn(obj1);
              return;
            }
          }
        }
        _require = trackAction(function* () {
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c6 = 2;
              if (0 === v3) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const loadId = tmp3;
                  const user = tmp7;
                  closure_129_0 = undefined;
                  closure_129_1 = undefined;
                  let currentlySelectedChannelId2;
                  const obj5 = { communityGuildId: user.id };
                  v0(channelId(viewId[18]).GameProfileTrackActionActions.CommunityClicked, obj5);
                  value = tmp63.get();
                  closure_129_0 = value;
                  if (c6) {
                    const first = scrollY(channelId(viewId[19]).getGuildTransitionRoute(user.id), 1)[0];
                    let tmp45 = null == first;
                    if (!tmp45) {
                      tmp45 = isStaticChannelRoute(first);
                    }
                    if (!tmp45) {
                      A(first, value);
                    }
                    v3();
                    const obj10 = channelId(viewId[20]);
                    const id2 = user.id;
                    channelId = first;
                    if (first == null) {
                      channelId = undefined;
                    }
                    const obj7 = {
                      channelId,
                      joinSource: constants.GAME_PROFILE_COMMUNITIES,
                      loadId,
                      openChannel: true,
                    };
                    const items = [guild(viewId[21]).GAME_PROFILE_COMMUNITIES];
                    v3 = 2;
                    c6 = 1;
                    const obj11 = { value: obj10.startLurking(id2, {}, obj7, items), done: false };
                    return obj11;
                  } else {
                    v3();
                    v0 = 1;
                    const obj6 = channelId(viewId[20]);
                    const id = user.id;
                    const obj12 = { joinSource: constants.GAME_PROFILE_COMMUNITIES, loadId, openChannel: true };
                    const items1 = [guild(viewId[21]).GAME_PROFILE_COMMUNITIES];
                    v3 = 3;
                    c6 = 1;
                    const obj13 = { value: obj6.startLurking(id, {}, obj12, items1), done: false };
                    return obj13;
                  }
                }
              } else if (1 === tmp7) {
                v0 = 0;
                closure_129_1 = tmp63;
                const result = channelId(viewId[22]).ignoreJoinGuildRefused(closure_129_1);
                c6 = 3;
                const obj14 = { value: undefined, done: true };
                return obj14;
              } else if (2 === tmp7) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj15 = { value, done: true };
                  return obj15;
                } else {
                  c6 = 3;
                  const obj16 = { value: undefined, done: true };
                  return obj16;
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c6 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                v0 = 0;
                currentlySelectedChannelId2 = currentlySelectedChannelId.getCurrentlySelectedChannelId(user.id);
                if (null != currentlySelectedChannelId2) {
                  A(currentlySelectedChannelId2, closure_129_0);
                }
                c6 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp63) {
              if (tmp4 === v0) {
                c6 = tmp2;
                throw tmp63;
              } else {
                v3 = tmp;
              }
            }
          }
        });
        function t6() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[8] = closeModal;
        cResult[9] = guild.id;
        cResult[10] = stateFromStores;
        cResult[11] = scrollY;
        cResult[12] = A;
        cResult[13] = trackAction;
        cResult[14] = viewId;
        cResult[15] = t6;
        const tmpResult2 = require("initialize");
      }
    : function GameProfileCommunityCard(gameId) {
        gameId = gameId.gameId;
        guild = gameId.guild;
        const viewId = gameId.viewId;
        const scrollY = gameId.scrollY;
        const trackAction = gameId.trackAction;
        const closeModal = gameId.closeModal;
        let callback;
        let items = [guild];
        const memo = closeModal.useMemo(() => GuildRecordUtils.fromClientDiscoverableGuild(guild), items);
        let items1 = [callback];
        const items2 = [guild.id];
        const stateFromStores = gameId(viewId[15]).useStateFromStores(
          items1,
          () => {
            guild = GuildStore.getGuild(guild.id);
            let joinedAt;
            if (guild != null) {
              joinedAt = guild.joinedAt;
            }
            return null != joinedAt;
          },
          items2,
        );
        const items3 = [gameId];
        callback = closeModal.useCallback((channelId, initialScrollOffset) => {
          const obj = GameProfileActionCreatorsDefault;
          const result = obj.setGameProfilePendingReturn({
            gameId,
            channelId,
            initialScrollOffset,
            tab: GameProfileNavTypes.GameProfileNavTab.COMMUNITIES,
            source: GameProfileAnalyticUtils.GameProfileSources.CommunityPreviewReturn,
          });
        }, items3);
        const items4 = [guild.id, stateFromStores, trackAction, closeModal, viewId, scrollY, callback];
        const callback1 = closeModal.useCallback(
          trackAction(function* () {
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c6 = 2;
                if (0 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    guild = tmp7;
                    closure_129_0 = undefined;
                    let currentlySelectedChannelId2;
                    const obj5 = { communityGuildId: guild.id };
                    trackAction(channelId(tmp3[18]).GameProfileTrackActionActions.CommunityClicked, obj5);
                    value = scrollY.get();
                    closure_129_0 = value;
                    if (stateFromStores) {
                      const first = tmp63(channelId(tmp3[19]).getGuildTransitionRoute(guild.id), 1)[0];
                      let tmp45 = null == first;
                      if (!tmp45) {
                        tmp45 = isStaticChannelRoute(first);
                      }
                      if (!tmp45) {
                        callback(first, value);
                      }
                      closeModal();
                      const obj10 = channelId(tmp3[20]);
                      const id2 = guild.id;
                      channelId = first;
                      if (first == null) {
                        channelId = undefined;
                      }
                      const obj7 = {
                        channelId,
                        joinSource: constants.GAME_PROFILE_COMMUNITIES,
                        loadId: viewId,
                        openChannel: true,
                      };
                      const items = [guild(tmp3[21]).GAME_PROFILE_COMMUNITIES];
                      c5 = 2;
                      c6 = 1;
                      const obj11 = { value: obj10.startLurking(id2, {}, obj7, items), done: false };
                      return obj11;
                    } else {
                      closeModal();
                      c4 = 1;
                      const obj6 = channelId(tmp3[20]);
                      const id = guild.id;
                      const obj12 = {
                        joinSource: constants.GAME_PROFILE_COMMUNITIES,
                        loadId: viewId,
                        openChannel: true,
                      };
                      const items1 = [guild(tmp3[21]).GAME_PROFILE_COMMUNITIES];
                      c5 = 3;
                      c6 = 1;
                      const obj13 = { value: obj6.startLurking(id, {}, obj12, items1), done: false };
                      return obj13;
                    }
                  }
                } else if (1 === tmp7) {
                  c4 = 0;
                  closure_129_2 = tmp63;
                  const result = channelId(tmp3[22]).ignoreJoinGuildRefused(closure_129_2);
                  c6 = 3;
                  const obj14 = { value: undefined, done: true };
                  return obj14;
                } else if (2 === tmp7) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj15 = { value, done: true };
                    return obj15;
                  } else {
                    c6 = 3;
                    const obj16 = { value: undefined, done: true };
                    return obj16;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c4 = 0;
                  currentlySelectedChannelId2 = currentlySelectedChannelId.getCurrentlySelectedChannelId(
                    closure_130_1.id,
                  );
                  if (null != currentlySelectedChannelId2) {
                    closure_130_7(currentlySelectedChannelId2, closure_129_0);
                  }
                  c6 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp63) {
                if (tmp4 === c4) {
                  c6 = tmp2;
                  throw tmp63;
                } else {
                  c5 = tmp;
                }
              }
            }
          }),
          items4,
        );
        let obj2 = {
          guild: memo,
          presenceCount: guild.presenceCount,
          memberCount: guild.memberCount,
          buttonText: null,
          onJoin: null,
        };
        let obj = gameId(viewId[15]);
        const intl = gameId(viewId[23]).intl;
        const string = intl.string;
        const t = gameId(viewId[23]).t;
        if (stateFromStores) {
          let stringResult = string(t.KLOhbO);
        } else {
          stringResult = string(t.SKNnqq);
        }
        obj2.buttonText = stringResult;
        obj2.onJoin = callback1;
        return closure_11(guild(viewId[24]), obj2);
      },
);
ReactCompilerGating = fn(558);
let obj5 = { gap: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/game_profile/native/profile_sections/communities/GameProfileCommunities.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileCommunities(game) {
      let fn = scrollY;
      const cResult = id(scrollY[13]).c(18);
      id = game.game;
      const viewId = game.viewId;
      scrollY = game.scrollY;
      const trackAction = game.trackAction;
      const closeModal = game.closeModal;
      const tmp3 = closure_13();
      let map = viewId;
      const obj = id(scrollY[13]);
      ({ data, isLoading } = viewId(scrollY[25])(id.id));
      if (isLoading) {
        let tmp6 = null == data;
        if (!tmp6) {
          tmp6 = 0 === data.length;
        }
        isLoading = tmp6;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
        const intl = tmp(fn[23]).intl;
        obj2.children = intl.string(tmp(fn[23]).t.r6bvTh);
        const tmp9 = closure_11(tmp(fn[26]).Heading, obj2);
        cResult[0] = tmp9;
        let first = tmp9;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp3.header) {
        const obj3 = { style: tmp3.header, children: first };
        const tmp13 = closure_11(View, obj3);
        cResult[1] = tmp3.header;
        cResult[2] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] === closeModal) {
        if (cResult[4] === id.id) {
          if (cResult[5] === data) {
            if (cResult[6] === scrollY) {
              if (cResult[7] === isLoading) {
                if (cResult[8] === trackAction) {
                  if (cResult[9] === viewId) {
                    if (cResult[11] === tmp3.list) {
                      if (cResult[12] === tmp14) {
                        let tmp17 = cResult[13];
                      }
                      if (cResult[14] === tmp3.container) {
                        if (cResult[15] === tmp10) {
                          if (cResult[16] === tmp17) {
                            let tmp21 = cResult[17];
                          }
                          return tmp21;
                        }
                      }
                      const obj4 = { style: tmp3.container, children: null };
                      const items = [tmp10, tmp17];
                      obj4.children = items;
                      const tmp24 = closure_12(View, obj4);
                      cResult[14] = tmp3.container;
                      cResult[15] = tmp10;
                      cResult[16] = tmp17;
                      cResult[17] = tmp24;
                      tmp21 = tmp24;
                    }
                    const obj5 = { style: tmp3.list, children: cResult[10] };
                    const tmp20 = closure_11(View, obj5);
                    cResult[11] = tmp3.list;
                    cResult[12] = cResult[10];
                    cResult[13] = tmp20;
                    tmp17 = tmp20;
                  }
                }
              }
            }
          }
        }
      }
      if (isLoading) {
        const mapped = map(fn[27]);
        map = mapped.range(8).map;
        fn = (arg0) =>
          closure_1_11(
            id(scrollY[24]).GameProfileGuildCardSkeleton,
            { animationDelayMs: arg0 * id(scrollY[28]).SKELETON_CARD_ANIMATION_DELAY_MS },
            arg0,
          );
        let mapped1 = map(fn);
        const rangeResult = mapped.range(8);
      } else {
        let items1 = data;
        if (data == null) {
          items1 = [];
        }
        mapped1 = items1.map((guild) =>
          closure_2_11(closure_14, { gameId: id.id, guild, viewId, scrollY, trackAction, closeModal }, guild.id),
        );
      }
      cResult[3] = closeModal;
      id = id.id;
      cResult[4] = id;
      cResult[5] = data;
      cResult[6] = scrollY;
      cResult[7] = isLoading;
      cResult[8] = trackAction;
      cResult[9] = viewId;
      cResult[10] = mapped1;
      const tmp4 = viewId(scrollY[25])(id.id);
    }
  : function GameProfileCommunities(game) {
      game = game.game;
      ({
        viewId: importDefault,
        scrollY: dependencyMap,
        trackAction: _slicedToArray,
        closeModal: asyncGeneratorStep,
      } = game);
      const tmp = closure_13();
      ({ data, isLoading } = useGameProfileCommunitiesDefault(game.id));
      if (isLoading) {
        let tmp6 = null == data;
        if (!tmp6) {
          tmp6 = 0 === data.length;
        }
        isLoading = tmp6;
      }
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.header, children: null };
      const obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
      const intl = game(1128).intl;
      obj3.children = intl.string(game(1128).t.r6bvTh);
      obj2.children = closure_11(game(5149).Heading, obj3);
      const items = [closure_11(View, obj2)];
      const obj4 = { style: tmp.list, children: null };
      if (isLoading) {
        const tmp2Result = _modDef12;
        let mapped = _modDef12
          .range(8)
          .map((item) =>
            closure_1_11(
              game(scrollY[24]).GameProfileGuildCardSkeleton,
              { animationDelayMs: item * game(scrollY[28]).SKELETON_CARD_ANIMATION_DELAY_MS },
              item,
            ),
          );
        const rangeResult = _modDef12.range(8);
      } else {
        if (data == null) {
          data = [];
        }
        mapped = data.map((guild) =>
          closure_2_11(closure_14, { gameId: game.id, guild, viewId, scrollY, trackAction, closeModal }, guild.id),
        );
      }
      obj4.children = mapped;
      items[1] = closure_11(View, obj4);
      obj.children = items;
      return closure_12(View, obj);
    };
