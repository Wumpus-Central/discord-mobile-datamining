// discord_app/modules/game_profile/native/profile_sections/communities/GameProfileCommunities.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildRecordUtils from "../../../../../utils/GuildRecordUtils.tsx";
import ActionSheetActionCreators from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GameProfileAnalyticUtils from "../../../GameProfileAnalyticUtils.tsx";
import GameProfileActionCreatorsDefault from "../../../GameProfileActionCreators.native.tsx";
import GameProfileNavTypes from "../../../GameProfileNavTypes.tsx";
import useGameProfileCommunitiesDefault from "../../../hooks/useGameProfileCommunities.tsx";
import useGameProfileCommunitiesLocaleFilterDefault from "../../../hooks/useGameProfileCommunitiesLocaleFilter.tsx";
import GameProfileCommunitiesLocaleFilterActionSheet from "GameProfileCommunitiesLocaleFilterActionSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";

const GameProfileCommunitiesLocaleFilterActionSheetDefault = GameProfileCommunitiesLocaleFilterActionSheet;

require = fn;
const View = fn(17).View;
const JoinGuildSources = fn(1084).JoinGuildSources;
const isStaticChannelRoute = fn(4864).isStaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5005);
let obj = {
  container: {
    marginTop: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT,
    padding: nativeDefault.space.PX_16,
    maxWidth: fn(9336).MOBILE_GAME_PROFILE_MAX_WIDTH,
    alignSelf: "center",
    width: "100%",
    gap: nativeDefault.space.PX_8,
  },
  header: null,
  heading: null,
  list: null,
};
let obj3 = {
  marginTop: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT,
  padding: nativeDefault.space.PX_16,
  maxWidth: fn(9336).MOBILE_GAME_PROFILE_MAX_WIDTH,
  alignSelf: "center",
  width: "100%",
  gap: nativeDefault.space.PX_8,
};
obj.header = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_8,
};
obj.heading = { flexShrink: 1 };
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
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
          let items = [GuildStore];
          cResult[2] = items;
          let tmp6 = items;
        } else {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== guild.id) {
          class G {
            constructor() {
              guild = closure_7.getGuild(guild.id);
              joinedAt = undefined;
              if (guild != null) {
                joinedAt = guild.joinedAt;
              }
              return null != joinedAt;
            }
          }
          let items1 = [guild.id];
          cResult[3] = guild.id;
          cResult[4] = G;
          cResult[5] = items1;
          let tmp9 = items1;
        } else {
          class G {
            constructor() {
              guild = closure_7.getGuild(guild.id);
              joinedAt = undefined;
              if (guild != null) {
                joinedAt = guild.joinedAt;
              }
              return null != joinedAt;
            }
          }
          tmp9 = cResult[5];
        }
        let obj = require("c");
        const stateFromStores = require("initialize").useStateFromStores(tmp6, G, tmp9);
        if (cResult[6] !== gameId) {
          class P {
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
          cResult[7] = P;
        } else {
          class P {
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
        GuildStore = P;
        if (cResult[8] === closeModal) {
          class P {
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
              return { value: "IconComponent", done: "IconComponent" };
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
                      P(first, value);
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
                  P(currentlySelectedChannelId2, closure_129_0);
                }
                c6 = 3;
                return { value: "IconComponent", done: "IconComponent" };
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
        cResult[12] = P;
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
                return { value: "IconComponent", done: "IconComponent" };
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
                  return { value: "IconComponent", done: "IconComponent" };
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
      const cResult = id(scrollY[13]).c(28);
      id = game.game;
      const viewId = game.viewId;
      scrollY = game.scrollY;
      const trackAction = game.trackAction;
      const closeModal = game.closeModal;
      const tmp3 = closure_13();
      let map = viewId;
      const obj = id(scrollY[13]);
      ({ data, isLoading } = viewId(scrollY[25])(id.id));
      const tmp5 = viewId(scrollY[26])(id.id, data);
      const locales = tmp5.locales;
      ({ filteredGuilds, showLocaleFilter } = tmp5);
      if (cResult[0] === id.id) {
        if (cResult[1] === locales) {
          let tmp6 = cResult[2];
        }
        if (isLoading) {
          let tmp8 = null == data;
          if (!tmp8) {
            tmp8 = 0 === data.length;
          }
          isLoading = tmp8;
        }
        const _Symbol = Symbol;
        ({ container, header, heading } = tmp3);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(fn[23]).intl;
          const stringResult = intl.string(tmp(fn[23]).t.r6bvTh);
          cResult[3] = stringResult;
          let tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp3.heading) {
          let obj2 = {
            variant: "heading-lg/semibold",
            color: "mobile-text-heading-primary",
            style: heading,
            children: tmp10,
          };
          const tmp14 = closure_11(tmp(fn[29]).Heading, obj2);
          cResult[4] = tmp3.heading;
          cResult[5] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp6) {
          if (cResult[7] === showLocaleFilter) {
            let tmp15 = cResult[8];
          }
          if (cResult[9] === tmp3.header) {
            if (cResult[10] === tmp12) {
              if (cResult[11] === tmp15) {
                let tmp18 = cResult[12];
              }
              if (cResult[13] === closeModal) {
                if (cResult[14] === filteredGuilds) {
                  if (cResult[15] === id.id) {
                    if (cResult[16] === scrollY) {
                      if (cResult[17] === isLoading) {
                        if (cResult[18] === trackAction) {
                          if (cResult[19] === viewId) {
                            if (cResult[21] === tmp3.list) {
                              if (cResult[22] === tmp22) {
                                let tmp25 = cResult[23];
                              }
                              if (cResult[24] === tmp3.container) {
                                if (cResult[25] === tmp25) {
                                  if (cResult[26] === tmp18) {
                                    let tmp29 = cResult[27];
                                  }
                                  return tmp29;
                                }
                              }
                              const obj3 = { style: container, children: null };
                              const items = [tmp18, tmp25];
                              obj3.children = items;
                              const tmp32 = closure_12(View, obj3);
                              cResult[24] = tmp3.container;
                              cResult[25] = tmp25;
                              cResult[26] = tmp18;
                              cResult[27] = tmp32;
                              tmp29 = tmp32;
                            }
                            const obj4 = { style: tmp3.list, children: cResult[20] };
                            const tmp28 = closure_11(View, obj4);
                            cResult[21] = tmp3.list;
                            cResult[22] = cResult[20];
                            cResult[23] = tmp28;
                            tmp25 = tmp28;
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (isLoading) {
                const mapped = map(fn[32]);
                map = mapped.range(8).map;
                fn = (arg0) =>
                  closure_1_11(
                    id(scrollY[24]).GameProfileGuildCardSkeleton,
                    { animationDelayMs: arg0 * id(scrollY[33]).SKELETON_CARD_ANIMATION_DELAY_MS },
                    arg0,
                  );
                let mapped1 = map(fn);
                const rangeResult = mapped.range(8);
              } else {
                mapped1 = filteredGuilds.map((guild) =>
                  closure_2_11(
                    closure_14,
                    { gameId: id.id, guild, viewId, scrollY, trackAction, closeModal },
                    guild.id,
                  ),
                );
              }
              cResult[13] = closeModal;
              cResult[14] = filteredGuilds;
              id = id.id;
              cResult[15] = id;
              cResult[16] = scrollY;
              cResult[17] = isLoading;
              cResult[18] = trackAction;
              cResult[19] = viewId;
              cResult[20] = mapped1;
            }
          }
          const obj5 = { style: header, children: null };
          const items1 = [tmp12, tmp15];
          obj5.children = items1;
          const tmp21 = closure_12(View, obj5);
          cResult[9] = tmp3.header;
          cResult[10] = tmp12;
          cResult[11] = tmp15;
          cResult[12] = tmp21;
          tmp18 = tmp21;
        }
        let tmp16 = showLocaleFilter;
        if (showLocaleFilter) {
          const obj6 = {
            size: "sm",
            variant: "secondary",
            icon: closure_11(tmp(fn[31]).LanguageIcon, { size: "sm" }),
            accessibilityLabel: null,
            onPress: null,
          };
          const intl2 = tmp(fn[23]).intl;
          obj6.accessibilityLabel = intl2.string(tmp(fn[23]).t.OlOHDH);
          obj6.onPress = tmp6;
          tmp16 = closure_11(tmp(fn[30]).IconButton, obj6);
        }
        cResult[6] = tmp6;
        cResult[7] = showLocaleFilter;
        cResult[8] = tmp16;
        tmp15 = tmp16;
      }
      const fn2 = function t() {
        const obj2 = {
          key: GameProfileCommunitiesLocaleFilterActionSheet.ACTION_SHEET_KEY,
          content: closure_2_11(GameProfileCommunitiesLocaleFilterActionSheetDefault, { gameId: id.id, locales }),
          stackingBehavior: "stack",
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      };
      cResult[0] = id.id;
      cResult[1] = locales;
      cResult[2] = fn2;
      tmp6 = fn2;
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
      const tmp5 = useGameProfileCommunitiesLocaleFilterDefault(game.id, data);
      const locales = tmp5.locales;
      ({ filteredGuilds, showLocaleFilter } = tmp5);
      const items = [game.id, locales];
      const callback = locales.useCallback(() => {
        const obj2 = {
          key: GameProfileCommunitiesLocaleFilterActionSheet.ACTION_SHEET_KEY,
          content: closure_2_11(GameProfileCommunitiesLocaleFilterActionSheetDefault, { gameId: game.id, locales }),
          stackingBehavior: "stack",
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      }, items);
      if (isLoading) {
        let tmp8 = null == data;
        if (!tmp8) {
          tmp8 = 0 === data.length;
        }
        isLoading = tmp8;
      }
      const obj = { style: tmp.container, children: null };
      let obj2 = { style: tmp.header, children: null };
      const obj3 = {
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        style: tmp.heading,
        children: null,
      };
      const intl = game(1125).intl;
      obj3.children = intl.string(game(1125).t.r6bvTh);
      const items1 = [closure_11(game(5271).Heading, obj3)];
      if (showLocaleFilter) {
        const obj4 = {
          size: "sm",
          variant: "secondary",
          icon: closure_11(tmp12(9577).LanguageIcon, { size: "sm" }),
          accessibilityLabel: null,
          onPress: null,
        };
        const intl2 = tmp12(1125).intl;
        obj4.accessibilityLabel = intl2.string(tmp12(1125).t.OlOHDH);
        obj4.onPress = callback;
        showLocaleFilter = closure_11(tmp12(8014).IconButton, obj4);
      }
      items1[1] = showLocaleFilter;
      obj2.children = items1;
      const items2 = [closure_12(View, obj2)];
      const obj5 = { style: tmp.list, children: null };
      if (isLoading) {
        const tmp2Result = _modDef12;
        let mapped = _modDef12
          .range(8)
          .map((item) =>
            closure_1_11(
              game(scrollY[24]).GameProfileGuildCardSkeleton,
              { animationDelayMs: item * game(scrollY[33]).SKELETON_CARD_ANIMATION_DELAY_MS },
              item,
            ),
          );
        const rangeResult = _modDef12.range(8);
      } else {
        mapped = filteredGuilds.map((guild) =>
          closure_2_11(closure_14, { gameId: game.id, guild, viewId, scrollY, trackAction, closeModal }, guild.id),
        );
      }
      obj5.children = mapped;
      items2[1] = closure_11(View, obj5);
      obj.children = items2;
      return closure_12(View, obj);
    };
