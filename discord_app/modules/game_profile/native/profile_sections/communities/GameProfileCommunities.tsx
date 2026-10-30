// discord_app/modules/game_profile/native/profile_sections/communities/GameProfileCommunities.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildRecordUtils from "../../../../../utils/GuildRecordUtils.tsx";
import ActionSheetActionCreators from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GameProfileActionCreatorsDefault from "../../../GameProfileActionCreators.native.tsx";
import GameProfileAnalyticUtils from "../../../GameProfileAnalyticUtils.tsx";
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
const JoinGuildSources = fn(1072).JoinGuildSources;
const isStaticChannelRoute = fn(4865).isStaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5009);
let obj = {
  container: {
    marginTop: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT,
    padding: nativeDefault.space.PX_16,
    maxWidth: fn(9350).MOBILE_GAME_PROFILE_MAX_WIDTH,
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
  maxWidth: fn(9350).MOBILE_GAME_PROFILE_MAX_WIDTH,
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
let closure_14 = noop.memo(function GameProfileCommunityCard(gameId) {
  gameId = gameId.gameId;
  let guild = gameId.guild;
  const viewId = gameId.viewId;
  const scrollY = gameId.scrollY;
  const trackAction = gameId.trackAction;
  const closeModal = gameId.closeModal;
  let callback;
  let items = [guild];
  const memo = closeModal.useMemo(() => GuildRecordUtils.fromClientDiscoverableGuild(guild), items);
  let items1 = [callback];
  const items2 = [guild.id];
  const stateFromStores = gameId(viewId[13]).useStateFromStores(
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
          return { value: "HermesInternal", done: null };
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
              trackAction(channelId(tmp3[16]).GameProfileTrackActionActions.CommunityClicked, obj5);
              value = scrollY.get();
              closure_129_0 = value;
              if (stateFromStores) {
                const first = tmp63(channelId(tmp3[17]).getGuildTransitionRoute(guild.id), 1)[0];
                let tmp45 = null == first;
                if (!tmp45) {
                  tmp45 = isStaticChannelRoute(first);
                }
                if (!tmp45) {
                  callback(first, value);
                }
                closeModal();
                const obj10 = channelId(tmp3[18]);
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
                const items = [guild(tmp3[19]).GAME_PROFILE_COMMUNITIES];
                c5 = 2;
                c6 = 1;
                const obj11 = { value: obj10.startLurking(id2, {}, obj7, items), done: false };
                return obj11;
              } else {
                closeModal();
                c4 = 1;
                const obj6 = channelId(tmp3[18]);
                const id = guild.id;
                const obj12 = { joinSource: constants.GAME_PROFILE_COMMUNITIES, loadId: viewId, openChannel: true };
                const items1 = [guild(tmp3[19]).GAME_PROFILE_COMMUNITIES];
                c5 = 3;
                c6 = 1;
                const obj13 = { value: obj6.startLurking(id, {}, obj12, items1), done: false };
                return obj13;
              }
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_129_2 = tmp63;
            const result = channelId(tmp3[20]).ignoreJoinGuildRefused(closure_129_2);
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
            currentlySelectedChannelId2 = currentlySelectedChannelId.getCurrentlySelectedChannelId(closure_130_1.id);
            if (null != currentlySelectedChannelId2) {
              closure_130_7(currentlySelectedChannelId2, closure_129_0);
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
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
  let obj = gameId(viewId[13]);
  const intl = gameId(viewId[22]).intl;
  const string = intl.string;
  const t = gameId(viewId[22]).t;
  if (stateFromStores) {
    let stringResult = string(t.KLOhbO);
  } else {
    stringResult = string(t.SKNnqq);
  }
  obj2.buttonText = stringResult;
  obj2.onJoin = callback1;
  return closure_11(guild(viewId[21]), obj2);
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/game_profile/native/profile_sections/communities/GameProfileCommunities.tsx",
);

export default function GameProfileCommunities(game) {
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
  const intl = game(1114).intl;
  obj3.children = intl.string(game(1114).t.r6bvTh);
  const items1 = [closure_11(game(5619).Heading, obj3)];
  if (showLocaleFilter) {
    const obj4 = {
      size: "sm",
      variant: "secondary",
      icon: closure_11(tmp12(9600).LanguageIcon, { size: "sm" }),
      accessibilityLabel: null,
      onPress: null,
    };
    const intl2 = tmp12(1114).intl;
    obj4.accessibilityLabel = intl2.string(tmp12(1114).t.OlOHDH);
    obj4.onPress = callback;
    showLocaleFilter = closure_11(tmp12(8020).IconButton, obj4);
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
          game(scrollY[21]).GameProfileGuildCardSkeleton,
          { animationDelayMs: item * game(scrollY[31]).SKELETON_CARD_ANIMATION_DELAY_MS },
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
}
