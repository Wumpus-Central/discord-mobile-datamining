// discord_app/modules/game_profile/native/profile_sections/communities/GameProfileCommunities.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildRecordUtils from "../../../../../utils/GuildRecordUtils.tsx";
import GameProfileSectionDefault from "../../components/GameProfileSection.tsx";
import useGameProfileCommunitiesDefault from "../../../hooks/useGameProfileCommunities.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";

require = fn;
const View = fn(17).View;
const JoinGuildSources = fn(1085).JoinGuildSources;
const jsx = fn(21).jsx;
const createStyles = fn(5096);
let obj = { container: { marginTop: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, padding: nativeDefault.space.PX_16, maxWidth: fn(8924).MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" }, list: null };
let obj3 = { marginTop: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, padding: nativeDefault.space.PX_16, maxWidth: fn(8924).MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
obj.list = { gap: nativeDefault.space.PX_12 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunityCard(gameId) {
  const cResult = require("c").c(21);
  gameId = gameId.gameId;
  _require = gameId;
  guild = gameId.guild;
  viewId = gameId.viewId;
  let scrollY = gameId.scrollY;
  const trackAction = gameId.trackAction;
  const closeModal = gameId.closeModal;
  if (cResult[0] !== guild) {
    let result = tmp(tmp2[12]).fromClientDiscoverableGuild(guild);
    cResult[0] = guild;
    cResult[1] = result;
    const tmpResult = tmp(tmp2[12]);
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== guild.id) {
    class E {
      constructor() {
        guild = closure_6.getGuild(guild.id);
        joinedAt = undefined;
        if (guild != null) {
          joinedAt = guild.joinedAt;
        }
        return null != joinedAt;
      }
    }
    const items1 = [guild.id];
    cResult[3] = guild.id;
    cResult[4] = E;
    cResult[5] = items1;
    let tmp9 = items1;
  } else {
    class E {
      constructor() {
        guild = closure_6.getGuild(guild.id);
        joinedAt = undefined;
        if (guild != null) {
          joinedAt = guild.joinedAt;
        }
        return null != joinedAt;
      }
    }
    tmp9 = cResult[5];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp6, E, tmp9);
  if (cResult[6] === closeModal) {
    class E {
      constructor() {
        guild = closure_6.getGuild(guild.id);
        joinedAt = undefined;
        if (guild != null) {
          joinedAt = guild.joinedAt;
        }
        return null != joinedAt;
      }
    }
  }
  _require = scrollY(function*() {
    const gameId = tmp5;
    v2(gameId(viewId[14]).GameProfileTrackActionActions.CommunityClicked, undefined, tmp3.id);
    closure_128_0 = scrollY.get();
    v3();
    const id = tmp3.id;
    const items = [guild(viewId[16]).GAME_PROFILE_COMMUNITIES];
    yield gameId(viewId[15]).startLurking(id, {}, { joinSource: constants.GAME_PROFILE_COMMUNITIES, loadId, openChannel: true }, items);
    scrollY = 0;
    const currentlySelectedChannelId2 = currentlySelectedChannelId.getCurrentlySelectedChannelId(tmp3.id);
    if (null != currentlySelectedChannelId2) {
      const result1 = guild(viewId[18]).setGameProfilePendingReturn({ gameId, channelId: currentlySelectedChannelId2, initialScrollOffset: closure_128_0, tab: gameId(viewId[19]).GameProfileNavTab.COMMUNITIES, source: gameId(viewId[14]).GameProfileSources.CommunityPreviewReturn });
      guild(viewId[18]);
      { gameId, channelId: currentlySelectedChannelId2, initialScrollOffset: closure_128_0, tab: gameId(viewId[19]).GameProfileNavTab.COMMUNITIES, source: gameId(viewId[14]).GameProfileSources.CommunityPreviewReturn };
    }
    yield "IconComponent";
    scrollY = 0;
    closure_128_1 = loadId;
    const result = gameId(viewId[17]).ignoreJoinGuildRefused(closure_128_1);
    gameId(viewId[15]);
  });
  function t5() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[6] = closeModal;
  cResult[7] = gameId;
  cResult[8] = guild.id;
  cResult[9] = scrollY;
  cResult[10] = trackAction;
  cResult[11] = viewId;
  cResult[12] = t5;
  const tmpResult2 = require("initialize");
}) : (function GameProfileCommunityCard(gameId) {
  gameId = gameId.gameId;
  guild = gameId.guild;
  const viewId = gameId.viewId;
  const scrollY = gameId.scrollY;
  const trackAction = gameId.trackAction;
  const closeModal = gameId.closeModal;
  let items = [guild];
  const memo = trackAction.useMemo(() => GuildRecordUtils.fromClientDiscoverableGuild(guild), items);
  const items1 = [GuildStore];
  const items2 = [guild.id];
  const stateFromStores = gameId(viewId[13]).useStateFromStores(items1, () => {
    guild = GuildStore.getGuild(guild.id);
    let joinedAt;
    if (guild != null) {
      joinedAt = guild.joinedAt;
    }
    return null != joinedAt;
  }, items2);
  const items3 = [guild.id, trackAction, closeModal, viewId, scrollY, gameId];
  const callback = trackAction.useCallback(scrollY(function*() {
    trackAction(tmp5(tmp17[14]).GameProfileTrackActionActions.CommunityClicked, undefined, guild.id);
    closure_128_0 = scrollY.get();
    closeModal();
    const id = guild.id;
    const items = [tmp3(tmp17[16]).GAME_PROFILE_COMMUNITIES];
    yield tmp5(tmp17[15]).startLurking(id, {}, { joinSource: constants.GAME_PROFILE_COMMUNITIES, loadId: viewId, openChannel: true }, items);
    const currentlySelectedChannelId2 = currentlySelectedChannelId.getCurrentlySelectedChannelId(closure_129_1.id);
    if (null != currentlySelectedChannelId2) {
      const result1 = tmp3(tmp17[18]).setGameProfilePendingReturn({ gameId: closure_129_0, channelId: currentlySelectedChannelId2, initialScrollOffset: closure_128_0, tab: tmp5(tmp17[19]).GameProfileNavTab.COMMUNITIES, source: tmp5(tmp17[14]).GameProfileSources.CommunityPreviewReturn });
      tmp3(tmp17[18]);
      { gameId: closure_129_0, channelId: currentlySelectedChannelId2, initialScrollOffset: closure_128_0, tab: tmp5(tmp17[19]).GameProfileNavTab.COMMUNITIES, source: tmp5(tmp17[14]).GameProfileSources.CommunityPreviewReturn };
    }
    yield "IconComponent";
    closure_128_2 = tmp17;
    const result = tmp5(tmp17[17]).ignoreJoinGuildRefused(closure_128_2);
    tmp5(tmp17[15]);
  }), items3);
  const obj2 = { guild: memo, presenceCount: guild.presenceCount, memberCount: guild.memberCount, buttonText: null, onJoin: null };
  const obj = gameId(viewId[13]);
  const intl = gameId(viewId[20]).intl;
  const string = intl.string;
  const t = gameId(viewId[20]).t;
  if (stateFromStores) {
    let stringResult = string(t.KLOhbO);
  } else {
    stringResult = string(t.SKNnqq);
  }
  obj2.buttonText = stringResult;
  obj2.onJoin = callback;
  return jsx(guild(viewId[21]), { guild: memo, presenceCount: guild.presenceCount, memberCount: guild.memberCount, buttonText: null, onJoin: null });
}));
ReactCompilerGating = fn(558);
let obj4 = { gap: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/profile_sections/communities/GameProfileCommunities.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunities(game) {
  const cResult = id(scrollY[11]).c(15);
  id = game.game;
  const viewId = game.viewId;
  scrollY = game.scrollY;
  const trackAction = game.trackAction;
  const closeModal = game.closeModal;
  const tmp4 = closure_10();
  const obj = id(scrollY[11]);
  ({ data, isLoading } = viewId(scrollY[22])(id.id));
  if (isLoading) {
    let tmp8 = null == data;
    if (!tmp8) {
      tmp8 = 0 === data.length;
    }
    isLoading = tmp8;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[20]).intl;
    const stringResult = intl.string(tmp(tmp2[20]).t.r6bvTh);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === closeModal) {
    if (cResult[2] === id.id) {
      if (cResult[3] === data) {
        if (cResult[4] === scrollY) {
          if (cResult[5] === isLoading) {
            if (cResult[6] === trackAction) {
              if (cResult[7] === viewId) {
                if (cResult[9] === tmp4.list) {
                  if (cResult[10] === tmp11) {
                    let tmp14 = cResult[11];
                  }
                  if (cResult[12] === tmp4.container) {
                    if (cResult[13] === tmp14) {
                      let tmp19 = cResult[14];
                    }
                    return tmp19;
                  }
                  const obj2 = { style: tmp4.container, children: tmp14 };
                  const tmp22 = <View style={tmp4.container}>{tmp14}</View>;
                  cResult[12] = tmp4.container;
                  cResult[13] = tmp14;
                  cResult[14] = tmp22;
                  tmp19 = tmp22;
                }
                const obj3 = { title: first, children: null };
                const obj4 = { style: tmp4.list, children: cResult[8] };
                obj3.children = <View style={tmp4.list}>{cResult[8]}</View>;
                const tmp18 = jsx(tmp5(tmp2[25]), { title: first, children: null });
                cResult[9] = tmp4.list;
                cResult[10] = cResult[8];
                cResult[11] = tmp18;
                tmp14 = tmp18;
                const tmp5Result = tmp5(tmp2[25]);
              }
            }
          }
        }
      }
    }
  }
  if (isLoading) {
    const tmp5Result2 = tmp5(tmp2[23]);
    let mapped = tmp5(tmp2[23]).range(8).map((item) => jsx(id(scrollY[21]).GameProfileGuildCardSkeleton, { animationDelayMs: item * id(scrollY[24]).SKELETON_CARD_ANIMATION_DELAY_MS }, item));
    const rangeResult = tmp5(tmp2[23]).range(8);
  } else {
    let items = data;
    if (data == null) {
      items = [];
    }
    mapped = items.map((guild) => <closure_11 key={guild.id} gameId={id.id} guild={guild} viewId={viewId} scrollY={scrollY} trackAction={trackAction} closeModal={closeModal} />);
  }
  cResult[1] = closeModal;
  id = id.id;
  cResult[2] = id;
  cResult[3] = data;
  cResult[4] = scrollY;
  cResult[5] = isLoading;
  cResult[6] = trackAction;
  cResult[7] = viewId;
  cResult[8] = mapped;
  const tmp6 = viewId(scrollY[22])(id.id);
}) : (function GameProfileCommunities(game) {
  game = game.game;
  ({ viewId: importDefault, scrollY: dependencyMap, trackAction: asyncGeneratorStep, closeModal: noop } = game);
  const tmp = closure_10();
  ({ data, isLoading } = useGameProfileCommunitiesDefault(game.id));
  if (isLoading) {
    let tmp6 = null == data;
    if (!tmp6) {
      tmp6 = 0 === data.length;
    }
    isLoading = tmp6;
  }
  const obj = { style: tmp.container, children: null };
  const obj2 = { title: null, children: null };
  const tmp4 = useGameProfileCommunitiesDefault(game.id);
  const intl = game(1126).intl;
  obj2.title = intl.string(game(1126).t.r6bvTh);
  const obj3 = { style: tmp.list, children: null };
  if (isLoading) {
    const tmp2Result2 = _modDef12;
    let mapped = _modDef12.range(8).map((item) => jsx(game(scrollY[21]).GameProfileGuildCardSkeleton, { animationDelayMs: item * game(scrollY[24]).SKELETON_CARD_ANIMATION_DELAY_MS }, item));
    const rangeResult = _modDef12.range(8);
  } else {
    if (data == null) {
      data = [];
    }
    mapped = data.map((guild) => <closure_11 key={guild.id} gameId={game.id} guild={guild} viewId={viewId} scrollY={scrollY} trackAction={trackAction} closeModal={closeModal} />);
  }
  obj3.children = mapped;
  obj2.children = <View style={tmp.list}>{null}</View>;
  obj.children = jsx(GameProfileSectionDefault, { title: null, children: null });
  return <View style={tmp.container}>{null}</View>;
});