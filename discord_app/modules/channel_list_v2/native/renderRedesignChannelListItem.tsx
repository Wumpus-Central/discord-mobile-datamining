// discord_app/modules/channel_list_v2/native/renderRedesignChannelListItem.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelTypes from "../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import intl3 from "../../../intl/index.native.tsx";
import ChannelConstants from "../../channel/ChannelConstants.tsx";
import FavoritesUtils from "../../favorites/FavoritesUtils.tsx";
import StageChannelParticipants from "../../stage_channels/StageChannelParticipants.tsx";
import ButtonConstants from "../../../design/components/Button/native/ButtonConstants.native.tsx";
import FastList from "../../../lib/native/FastList.tsx";
import ChannelListState from "../../guild_sidebar/ChannelListState.tsx";
import Divider from "components/Divider.tsx";
import CategoryChannel from "items/index.tsx";
import ThreadChannelDefault from "items/ThreadChannel.tsx";
import VoiceUsers from "../../guild_sidebar/native/VoiceUsers.tsx";
import VoiceUserItem from "../../guild_sidebar/native/VoiceUserItem.tsx";
import VoiceUserSummary from "../../guild_sidebar/native/VoiceUserSummary.tsx";
import channel_list_v2_ChannelListUtils from "ChannelListUtils.tsx";
import GuildLiveChannelNotice from "../../guild_scheduled_events/native/guild_sidebar/GuildLiveChannelNotice.tsx";
import GameClaimCoachmark from "../../game_claim/native/GameClaimCoachmark.tsx";
import AccountLinkBanner from "../../application_account_linking/native/AccountLinkBanner.tsx";
import ShowAllVoiceChannelsButtonDefault from "items/ShowAllVoiceChannelsButton.tsx";
import GuildProgressButton from "../../main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx";
import GuildMFAWarning from "../../guild_sidebar/native/GuildMFAWarning.tsx";
import GuildPowerupsProgressBar from "../../premium/powerups/native/GuildPowerupsProgressBar.tsx";
import VoiceChannel from "items/VoiceChannel.tsx";
import SectionFooterHelpers from "../../guild_sidebar/SectionFooterHelpers.tsx";
import react from "../../../../_runtime/00019_react.js";
import StageChannelParticipantStore from "../../stage_channels/StageChannelParticipantStore.tsx";
import ChannelRecord from "../../../records/ChannelRecord.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import SortedVoiceStateStore from "../../../stores/views/SortedVoiceStateStore.tsx";
import RedesignChannelListConstants from "RedesignChannelListConstants.tsx";
import GuildSidebarConstants from "../../guild_sidebar/GuildSidebarConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import size from "../../../../_runtime/metro/00002__.js";

const DividerDefault = Divider;

let c10;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
const View = react_native.View;
({ THREADED_CHANNEL_TYPES: hasOwnProperty, THREAD_CHANNEL_TYPES: metroRequire } = ChannelRecord);
({
  CATEGORY_MARGIN_TOP: c10,
  getScaledCategoryRowHeight: unpackModuleId,
  getScaledChannelRowHeight: closure_12,
  getScaledChannelSubtitleHeight: map1,
  STICKY_HEADER_MARGIN_BOTTOM: closure_14,
} = RedesignChannelListConstants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ ChannelListChannelNoticeRow: closure_16, ChannelListGuildActionRow: closure_17 } = GuildSidebarConstants);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = Fragment);
let obj = {
  nonChannelContainer: { marginHorizontal: 16 },
  liveChannelNotice: obj2,
  gameClaimNotice: obj3,
  applicationAccountLinkNotice: obj4,
  showAllVoiceChannelsButtonLastShownChannelActive: obj5,
  showAllVoiceChannelsButtonLastShownChannelInactive: obj6,
};
obj2 = {
  marginTop: GuildLiveChannelNotice.LIVE_CHANNEL_NOTICE_MARGIN_TOP,
  marginBottom: GuildLiveChannelNotice.LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM,
  marginHorizontal: 16,
};
obj3 = {
  marginTop: GameClaimCoachmark.GAME_CLAIM_NOTICE_MARGIN_TOP,
  marginBottom: GameClaimCoachmark.GAME_CLAIM_NOTICE_MARGIN_BOTTOM,
  marginHorizontal: 16,
};
obj4 = {
  marginTop: AccountLinkBanner.ACCOUNT_LINK_BANNER_MARGIN_TOP,
  marginBottom: AccountLinkBanner.ACCOUNT_LINK_BANNER_MARGIN_BOTTOM,
  marginHorizontal: 16,
};
obj5 = { marginHorizontal: 16, marginTop: nativeDefault.space.PX_16 };
obj6 = { marginHorizontal: 16, marginTop: nativeDefault.space.PX_8 };
let result = size.fileFinishedImporting("modules/channel_list_v2/native/renderRedesignChannelListItem.tsx");

export const getFastListRecyclerKey = function getFastListRecyclerKey(guildChannels, arg1, arg2, arg3) {
  if (arg1 === FastList.FastListItemTypes.ITEM) {
    if (null != arg3) {
      let id;
      if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES === arg2) {
        const channelNoticeSection = guildChannels.getChannelNoticeSection();
        id = channelNoticeSection.getRow(arg3);
      } else if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS === arg2) {
        const guildActionSection = guildChannels.getGuildActionSection();
        id = guildActionSection.getRow(arg3);
      } else {
        const channelFromSectionRow = guildChannels.getChannelFromSectionRow(arg2, arg3);
        if (channelFromSectionRow != null) {
          const channel = channelFromSectionRow.channel;
          if (channel != null) {
            id = channel.id;
          }
        }
      }
      if (null != id) {
        const _HermesInternal2 = HermesInternal;
        return "" + guildChannels.id + ":SECTION:" + arg2 + ":ITEM:" + id;
      }
    }
  } else if (arg1 === FastList.FastListItemTypes.SECTION) {
    const _HermesInternal = HermesInternal;
    return "" + guildChannels.id + ":SECTION:" + arg2;
  }
};
export const renderChannelListSectionHeader = function renderChannelListSectionHeader(
  guildChannels,
  section,
  recentlyActiveChannelsEnabled,
  withMarginTop,
  categoryStyles,
) {
  let intl;
  let intl2;
  let shownChannelAndThreadIds;
  if (guildChannels.favoritesSectionNumber === section) {
    const obj2 = { name: intl2.string(intl3.t.mlPMCy), withMarginTop, styles: categoryStyles };
    const renderCategoryItem2 = CategoryChannel.renderCategoryItem;
    CategoryChannel;
    intl2 = intl3.intl;
    return renderCategoryItem2(obj2);
  } else if (guildChannels.recentsSectionNumber === section) {
    let tmp20Result;
    const tmp23 = CategoryChannel;
    if (recentlyActiveChannelsEnabled) {
      const obj3 = { guildId: guildChannels.id, withMarginTop };
      tmp20Result = authStore4(tmp23.RecentlyActiveCategory, obj3);
    } else {
      const SuggestedCategory = tmp23.SuggestedCategory;
      const obj4 = { guildId: guildChannels.id, channelIds: shownChannelAndThreadIds, withMarginTop };
      const categoryFromSection = guildChannels.getCategoryFromSection(section);
      shownChannelAndThreadIds = undefined;
      if (categoryFromSection != null) {
        shownChannelAndThreadIds = categoryFromSection.getShownChannelAndThreadIds();
      }
      if (shownChannelAndThreadIds == null) {
        shownChannelAndThreadIds = [];
      }
      tmp20Result = authStore4(SuggestedCategory, obj4);
    }
    return tmp20Result;
  } else if (guildChannels.voiceChannelsSectionNumber === section) {
    const categoryFromSection1 = guildChannels.getCategoryFromSection(guildChannels.voiceChannelsSectionNumber);
    let flag = false;
    let flag2 = false;
    const tmp8 = null == categoryFromSection1 || categoryFromSection1.isEmpty();
    if (!tmp8) {
      let flag3 = false;
      if (categoryFromSection1.isCollapsed) {
        flag3 = true;
      }
      flag2 = true;
      flag = flag3;
    }
    let tmp11 = null;
    if (flag2) {
      tmp11 = authStore4(DividerDefault, {});
    }
    const items = [tmp11];
    let renderCategoryItemResult = null;
    if (flag) {
      const obj5 = { name: intl.string(intl3.t["V/u9Dy"]), styles: categoryStyles };
      const renderCategoryItem = CategoryChannel.renderCategoryItem;
      CategoryChannel;
      intl = intl3.intl;
      renderCategoryItemResult = renderCategoryItem(obj5);
    }
    const obj6 = { children: items };
    items[1] = renderCategoryItemResult;
    return closure_19(View, obj6);
  } else {
    obj = channel_list_v2_ChannelListUtils;
    if (obj.isNamedCategorySection(section)) {
      const namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(section);
      let tmp5 = null;
      if (null != namedCategoryFromSection) {
        const obj7 = { channel: namedCategoryFromSection.record, withMarginTop };
        tmp5 = authStore4(CategoryChannel.CategoryChannel, obj7);
      }
      return tmp5;
    } else {
      return null;
    }
  }
};
export const getChannelListSectionHeaderSize = function getChannelListSectionHeaderSize(
  guildChannels,
  section,
  fontScale,
  arg3,
) {
  const tmp = unpackModuleId(fontScale);
  let num = 0;
  if (arg3) {
    num = authStore;
  }
  if (guildChannels.favoritesSectionNumber !== section) {
    if (guildChannels.recentsSectionNumber !== section) {
      if (guildChannels.voiceChannelsSectionNumber === section) {
        const categoryFromSection = guildChannels.getCategoryFromSection(guildChannels.voiceChannelsSectionNumber);
        let flag = false;
        let flag2 = false;
        const tmp6 = null == categoryFromSection || categoryFromSection.isEmpty();
        if (!tmp6) {
          let flag3 = false;
          if (categoryFromSection.isCollapsed) {
            flag3 = true;
          }
          flag2 = true;
          flag = flag3;
        }
        let num4 = 0;
        if (flag2) {
          num4 = Divider.DIVIDER_HEIGHT;
        }
        let sum = num4;
        if (flag) {
          sum = num4 + tmp;
        }
        return sum;
      } else {
        let num2 = 0;
        obj = channel_list_v2_ChannelListUtils;
        if (obj.isNamedCategorySection(section)) {
          let num3 = 0;
          if (null != guildChannels.getNamedCategoryFromSection(section)) {
            num3 = tmp + num;
          }
          num2 = num3;
        }
        return num2;
      }
    }
  }
  return tmp + num;
};
export const renderChannelListSectionFooter = function renderChannelListSectionFooter(
  guildChannels,
  section,
  ref,
  channels,
) {
  let obj6;
  let tmp = null;
  if (null != channels) {
    obj = { guildId: guildChannels.id, channels };
    tmp = authStore4(CategoryChannel.RedesignVoiceUserSummary, obj);
  }
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES === section) {
    return null;
  } else if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    let flag = false;
    if (!guildActionSection.isEmpty()) {
      const rows = guildActionSection.getRows();
      flag = !(1 === rows.length && rows[0] === constants2.GUILD_SCHEDULED_EVENTS);
      const tmp18 = 1 === rows.length && rows[0] === constants2.GUILD_SCHEDULED_EVENTS;
    }
    let tmp20 = null;
    if (flag) {
      tmp20 = authStore4(DividerDefault, {});
    }
    return tmp20;
  } else {
    if (guildChannels.favoritesSectionNumber !== section) {
      if (guildChannels.recentsSectionNumber !== section) {
        if (guildChannels.voiceChannelsSectionNumber === section) {
          let obj2;
          const categoryFromSection = guildChannels.getCategoryFromSection(section);
          if (null == categoryFromSection) {
            obj2 = { render: false, lastShownChannelActive: false };
          } else {
            obj2 = {
              render: true,
              lastShownChannelActive:
                SortedVoiceStateStore.countVoiceStatesForChannel(
                  categoryFromSection.getShownChannelIds()[
                    categoryFromSection.getShownChannelIds(categoryFromSection).length - 1
                  ],
                ) > 0,
            };
            const obj3 = {
              render: true,
              lastShownChannelActive:
                SortedVoiceStateStore.countVoiceStatesForChannel(
                  categoryFromSection.getShownChannelIds()[
                    categoryFromSection.getShownChannelIds(categoryFromSection).length - 1
                  ],
                ) > 0,
            };
          }
          if (obj2.render) {
            const items = [tmp];
            const obj4 = { children: items };
            const obj5 = {
              style: tmp8
                ? obj.showAllVoiceChannelsButtonLastShownChannelActive
                : obj.showAllVoiceChannelsButtonLastShownChannelInactive,
              children: authStore4(ShowAllVoiceChannelsButtonDefault, obj6),
            };
            obj6 = { guildId: guildChannels.id, section, listRef: ref };
            items[1] = authStore4(View, obj5);
            return closure_19(View, obj4);
          }
        }
        let tmp9 = null;
        const tmp5Result = channel_list_v2_ChannelListUtils;
        if (tmp5Result.isNamedCategorySection(section)) {
          tmp9 = tmp;
        }
        return tmp9;
      }
    }
    return authStore4(DividerDefault, {});
  }
};
export const getChannelListSectionHasFooterDivider = function getChannelListSectionHasFooterDivider(
  guildChannels,
  diff1,
) {
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES === diff1) {
    return false;
  } else if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS === diff1) {
    const guildActionSection = guildChannels.getGuildActionSection();
    let flag3 = false;
    if (!guildActionSection.isEmpty()) {
      const rows = guildActionSection.getRows();
      flag3 = !(1 === rows.length && rows[0] === constants2.GUILD_SCHEDULED_EVENTS);
      const tmp3 = 1 === rows.length && rows[0] === constants2.GUILD_SCHEDULED_EVENTS;
    }
    return flag3;
  } else {
    if (guildChannels.favoritesSectionNumber !== diff1) {
      if (guildChannels.recentsSectionNumber !== diff1) {
        const voiceChannelsSectionNumber = guildChannels.voiceChannelsSectionNumber;
        return false;
      }
    }
    return true;
  }
};
export const getChannelListSectionFooterSize = function getChannelListSectionFooterSize(
  guildChannels,
  section,
  result,
) {
  let num = 0;
  if (null != result) {
    num = VoiceUserSummary.VOICE_USER_SUMMARY_HEIGHT;
  }
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES === section) {
    return 0;
  } else if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    let flag = false;
    if (!guildActionSection.isEmpty()) {
      const rows = guildActionSection.getRows();
      flag = !(1 === rows.length && rows[0] === constants2.GUILD_SCHEDULED_EVENTS);
      const tmp10 = 1 === rows.length && rows[0] === constants2.GUILD_SCHEDULED_EVENTS;
    }
    let num5 = 0;
    if (flag) {
      num5 = Divider.DIVIDER_HEIGHT;
    }
    return num5;
  } else {
    if (guildChannels.favoritesSectionNumber !== section) {
      if (guildChannels.recentsSectionNumber !== section) {
        if (guildChannels.voiceChannelsSectionNumber === section) {
          const categoryFromSection = guildChannels.getCategoryFromSection(section);
          if (null == categoryFromSection) {
            obj = { render: false, lastShownChannelActive: false };
          } else {
            obj = {
              render: true,
              lastShownChannelActive:
                SortedVoiceStateStore.countVoiceStatesForChannel(
                  categoryFromSection.getShownChannelIds()[
                    categoryFromSection.getShownChannelIds(categoryFromSection).length - 1
                  ],
                ) > 0,
            };
            const obj2 = {
              render: true,
              lastShownChannelActive:
                SortedVoiceStateStore.countVoiceStatesForChannel(
                  categoryFromSection.getShownChannelIds()[
                    categoryFromSection.getShownChannelIds(categoryFromSection).length - 1
                  ],
                ) > 0,
            };
          }
          let sum1 = num;
          if (obj.render) {
            let marginTop;
            const sum = num + ButtonConstants.SMALL_BUTTON_HEIGHT;
            if (tmp6) {
              marginTop = tmp9.showAllVoiceChannelsButtonLastShownChannelActive.marginTop;
            } else {
              marginTop = tmp9.showAllVoiceChannelsButtonLastShownChannelInactive.marginTop;
            }
            sum1 = sum + marginTop;
          }
          return sum1;
        } else {
          let num2 = 0;
          const tmp3Result = channel_list_v2_ChannelListUtils;
          if (tmp3Result.isNamedCategorySection(section)) {
            num2 = num;
          }
          return num2;
        }
      }
    }
    return Divider.DIVIDER_HEIGHT;
  }
};
export const renderChannelListItem = function renderChannelListItem(arg0) {
  let accountLinkApplication;
  let applicationAccountLinkMarkAsDismissed;
  let channel;
  let gameClaimMarkAsDismissed;
  let guild;
  let guildChannels;
  let items;
  let items1;
  let items2;
  let obj10;
  let obj12;
  let obj19;
  let obj2;
  let obj5;
  let row;
  let section;
  let selectedChannelId;
  let startApplicationAccountLinkAuthorization;
  let tmp20;
  let tmp52;
  ({
    guildChannels,
    section,
    row,
    selectedChannelId,
    guild,
    gameClaimMarkAsDismissed,
    applicationAccountLinkMarkAsDismissed,
    startApplicationAccountLinkAuthorization,
    accountLinkApplication,
  } = arg0);
  let tmp = channel;
  if (channel(7052).SECTION_INDEX_CHANNEL_NOTICES === section) {
    const channelNoticeSection = guildChannels.getChannelNoticeSection();
    const row1 = channelNoticeSection.getRow(row);
    let tmp61 = null;
    if (null != row1) {
      if (constants.SPACER === row1) {
        obj = { style: obj2 };
        obj2 = { height };
        tmp61 = closure_18(View, obj);
      } else if (constants.GUILD_PROGRESS === row1) {
        const obj4 = { style: obj.nonChannelContainer, children: closure_18(selectedChannelId(16161), obj5) };
        obj5 = { guild };
        tmp61 = closure_18(View, obj4);
      } else if (constants.MFA_WARNING === row1) {
        const obj6 = { style: obj.nonChannelContainer, children: closure_18(selectedChannelId(16163), {}) };
        tmp61 = closure_18(View, obj6);
      } else if (constants.LIVE_CHANNEL_NOTICE === row1) {
        const obj7 = { style: obj.liveChannelNotice, guild };
        tmp61 = closure_18(selectedChannelId(16152), obj7);
      } else if (constants.GAME_CLAIM === row1) {
        let tmp68 = null;
        if (null != gameClaimMarkAsDismissed) {
          const obj9 = { style: obj.gameClaimNotice, children: closure_18(selectedChannelId(16154), obj10) };
          obj10 = { guild, markAsDismissed: gameClaimMarkAsDismissed };
          tmp68 = closure_18(View, obj9);
        }
        tmp61 = tmp68;
      } else if (constants.APPLICATION_ACCOUNT_LINK === row1) {
        let tmp63 = null;
        if (null != applicationAccountLinkMarkAsDismissed) {
          tmp63 = null;
          if (null != startApplicationAccountLinkAuthorization) {
            tmp63 = null;
            if (null != accountLinkApplication) {
              const obj11 = {
                style: obj.applicationAccountLinkNotice,
                children: closure_18(selectedChannelId(16158), obj12),
              };
              obj12 = {
                markAsDismissed: applicationAccountLinkMarkAsDismissed,
                startAuthorization: startApplicationAccountLinkAuthorization,
                application: accountLinkApplication,
              };
              tmp63 = closure_18(View, obj11);
            }
          }
        }
        tmp61 = tmp63;
      } else {
        tmp61 = null;
        if (constants.FAVORITES_SUGGESTIONS === row1) {
          tmp61 = closure_18(selectedChannelId(16165), {});
        }
      }
    }
    return tmp61;
  } else if (tmp(7052).SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const row2 = guildActionSection.getRow(row);
    let tmp51Result = null;
    if (null != row2) {
      if (constants2.GUILD_ROLE_SUBSCRIPTIONS === row2) {
        const obj13 = { guild, selected: selectedChannelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS };
        tmp51Result = closure_18(selectedChannelId(16169), obj13);
      } else if (constants2.GUILD_HOME === row2) {
        const obj14 = { guild, selected: selectedChannelId === StaticChannelRoute.GUILD_HOME };
        tmp51Result = closure_18(selectedChannelId(16171), obj14);
      } else if (constants2.CHANNELS_AND_ROLES === row2) {
        const obj15 = { guild, selected: tmp52 };
        tmp52 = selectedChannelId === StaticChannelRoute.CHANNEL_BROWSER;
        const GuildRolesAndChannelsRow = tmp(16172).GuildRolesAndChannelsRow;
        if (!tmp52) {
          tmp52 = selectedChannelId === StaticChannelRoute.CUSTOMIZE_COMMUNITY;
        }
        tmp51Result = closure_18(GuildRolesAndChannelsRow, obj15);
      } else if (constants2.GUILD_DIRECTORY === row2) {
        const obj16 = {
          guildId: guild.id,
          selected: selectedChannelId === GuildChannelStore.getDirectoryChannelIds(guild.id)[0],
        };
        tmp51Result = closure_18(selectedChannelId(16173), obj16);
      } else if (constants2.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row2) {
        const obj17 = { children: items };
        const obj18 = {
          style: obj.nonChannelContainer,
          children: closure_18(tmp(16174).NewMemberActionsProgress, obj19),
        };
        obj19 = { guildId: guild.id };
        items = [closure_18(View, obj18), closure_18(selectedChannelId(11937), {})];
        tmp51Result = closure_19(View, obj17);
      } else if (constants2.GUILD_HUB_HEADER_OPTIONS === row2) {
        const obj20 = { guild };
        tmp51Result = closure_18(selectedChannelId(16175), obj20);
      } else if (constants2.GUILD_MOD_DASH_MEMBER_SAFETY === row2) {
        const obj21 = { guild, selected: selectedChannelId === StaticChannelRoute.MEMBER_SAFETY };
        tmp51Result = closure_18(selectedChannelId(16178), obj21);
      } else if (constants2.GUILD_CONJURE === row2) {
        const obj22 = { guild, selected: selectedChannelId === StaticChannelRoute.CONJURE };
        tmp51Result = closure_18(selectedChannelId(16180), obj22);
      } else if (constants2.GUILD_BOOSTS === row2) {
        const obj23 = { guildId: guild.id };
        tmp51Result = closure_18(selectedChannelId(16186), obj23);
      } else if (constants2.GUILD_PREMIUM_PROGRESS_BAR === row2) {
        const obj24 = { children: items1 };
        const obj25 = { guildId: guild.id };
        items1 = [closure_18(selectedChannelId(16190), obj25), closure_18(selectedChannelId(11937), {})];
        tmp51Result = closure_19(View, obj24);
      } else {
        tmp51Result = null;
        if (constants2.GUILD_SCHEDULED_EVENTS !== row2) {
          tmp51Result = null;
          if (constants2.GUILD_FAVORITES !== row2) {
            tmp51Result = null;
            if (constants2.GUILD_CHANNEL_LIST_OPT_IN_NOTICE !== row2) {
              tmp51Result = null;
              if (constants2.GUILD_SHOP !== row2) {
                const BROWSE_CHANNELS = constants2.BROWSE_CHANNELS;
                tmp51Result = null;
              }
            }
          }
        }
      }
    }
    return tmp51Result;
  } else {
    const channelFromSectionRow = guildChannels.getChannelFromSectionRow(section, row);
    let tmp13 = null;
    if (null != channelFromSectionRow) {
      channel = channelFromSectionRow.channel;
      const record = channel.record;
      const id = record.id;
      const recentsSectionNumber = guildChannels.recentsSectionNumber;
      let type1 = null;
      if (set.has(record.type)) {
        type1 = record.type;
      }
      const type = record.type;
      if (type1 === type) {
        const obj26 = {
          channel: record,
          selected: id === selectedChannelId,
          muted: null,
          subtitle: null,
          isRulesChannel: guild.rulesChannelId === record.id,
          isSuggestedSection: tmp20,
        };
        tmp20 = section === recentsSectionNumber;
        ({ isMuted: obj8.muted, subtitle: obj8.subtitle } = channel);
        const obj27 = { children: items2 };
        items2 = [closure_18(selectedChannelId(16194), obj26)];
        const threadIds = channel.threadIds;
        items2[1] = threadIds.map((threadId, threadIndex) => {
          let obj2;
          let tmp = null;
          if (null != ChannelStore.getChannel(threadId)) {
            obj = { children: authStore4(ThreadChannelDefault, obj2) };
            obj2 = {
              threadId,
              threadIndex,
              threadCount: channel.threadCount,
              selected: selectedChannelId === threadId,
            };
            tmp = authStore4(View, obj, threadId);
          }
          return tmp;
        });
        tmp13 = closure_19(closure_20, obj27);
      } else if (tmp(1106).ChannelTypes.GUILD_VOICE === type) {
        const obj28 = { channel: record, selected: id === selectedChannelId, subtitle: channel.subtitle };
        tmp13 = closure_18(selectedChannelId(16202), obj28);
      } else if (tmp(1106).ChannelTypes.GUILD_STAGE_VOICE === type) {
        const obj29 = { channel: record, selected: id === selectedChannelId };
        tmp13 = closure_18(selectedChannelId(16205), obj29);
      } else {
        if (tmp(1106).ChannelTypes.DM !== type) {
          if (tmp(1106).ChannelTypes.GROUP_DM !== type) {
            let tmp9;
            if (section === guildChannels.voiceChannelsSectionNumber) {
              if (record.isCategory()) {
                const obj30 = { channel: record, withMarginTop: true };
                tmp9 = closure_18(tmp(16070).CategoryChannel, obj30);
              }
              tmp13 = tmp9;
            }
            const tmpResult = tmp(2077);
            if (tmpResult.isFavoritesGuildId(guildChannels.id)) {
              if (set2.has(record.type)) {
                const obj31 = {
                  channel: record,
                  selected: id === selectedChannelId,
                  muted: null,
                  subtitle: null,
                  isRulesChannel: false,
                };
                ({ isMuted: obj3.muted, subtitle: obj3.subtitle } = channel);
                tmp9 = closure_18(selectedChannelId(16194), obj31);
              }
            }
            const obj32 = { channel: record, selected: id === selectedChannelId };
            tmp9 = closure_18(selectedChannelId(16208), obj32);
          }
        }
        const obj33 = { channel: record, selected: id === selectedChannelId };
        tmp13 = closure_18(selectedChannelId(16207), obj33);
      }
    }
    return tmp13;
  }
};
export const getChannelListItemSize = function getChannelListItemSize(liveChannelNoticeHeight) {
  let favoritesSuggestionsNoticeHeight;
  let fontScale;
  let guildChannels;
  let row;
  let section;
  let voiceStates;
  ({ guildChannels, section, row, fontScale, voiceStates, favoritesSuggestionsNoticeHeight } = liveChannelNoticeHeight);
  liveChannelNoticeHeight = liveChannelNoticeHeight.liveChannelNoticeHeight;
  if (favoritesSuggestionsNoticeHeight === undefined) {
    favoritesSuggestionsNoticeHeight = 0;
  }
  const listViewportHeight = liveChannelNoticeHeight.listViewportHeight;
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES === section) {
    const channelNoticeSection = guildChannels.getChannelNoticeSection();
    const row1 = channelNoticeSection.getRow(row);
    if (constants.SPACER === row1) {
      return closure_14;
    } else if (constants.GUILD_PROGRESS === row1) {
      const tmpResult = GuildProgressButton;
      return tmpResult.getScaledGuildProgressButtonHeight(fontScale);
    } else if (constants.MFA_WARNING === row1) {
      const tmpResult8 = GuildMFAWarning;
      return tmpResult8.getScaledGuildMFAWarningHeight(fontScale);
    } else if (constants.LIVE_CHANNEL_NOTICE === row1) {
      return liveChannelNoticeHeight;
    } else if (constants.GAME_CLAIM === row1) {
      const tmpResult9 = GameClaimCoachmark;
      return tmpResult9.getScaledGameClaimNoticeHeight(fontScale);
    } else if (constants.APPLICATION_ACCOUNT_LINK === row1) {
      const tmpResult10 = AccountLinkBanner;
      return tmpResult10.getScaledAccountLinkBannerHeight(fontScale);
    } else if (constants.FAVORITES_SUGGESTIONS === row1) {
      return favoritesSuggestionsNoticeHeight;
    } else {
      return 0;
    }
  } else if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const row2 = guildActionSection.getRow(row);
    let num4 = 0;
    if (null != row2) {
      const tmp25 = closure_12(fontScale);
      num4 = tmp25;
      if (constants2.GUILD_ROLE_SUBSCRIPTIONS !== row2) {
        num4 = tmp25;
        if (constants2.GUILD_HOME !== row2) {
          num4 = tmp25;
          if (constants2.CHANNELS_AND_ROLES !== row2) {
            num4 = tmp25;
            if (constants2.GUILD_DIRECTORY !== row2) {
              num4 = tmp25;
              if (constants2.GUILD_MOD_DASH_MEMBER_SAFETY !== row2) {
                num4 = tmp25;
                if (constants2.GUILD_BOOSTS !== row2) {
                  num4 = tmp25;
                  if (constants2.GUILD_CONJURE !== row2) {
                    if (constants2.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row2) {
                      num4 = 48 + Divider.DIVIDER_HEIGHT;
                    } else {
                      num4 = listViewportHeight;
                      if (constants2.GUILD_HUB_HEADER_OPTIONS !== row2) {
                        num4 = 0;
                        if (constants2.GUILD_SCHEDULED_EVENTS !== row2) {
                          if (constants2.GUILD_PREMIUM_PROGRESS_BAR === row2) {
                            num4 = GuildPowerupsProgressBar.BOOST_PROGRESS_BAR_HEIGHT + Divider.DIVIDER_HEIGHT;
                          } else {
                            num4 = 0;
                            if (constants2.GUILD_FAVORITES !== row2) {
                              num4 = 0;
                              if (constants2.GUILD_CHANNEL_LIST_OPT_IN_NOTICE !== row2) {
                                num4 = 0;
                                if (constants2.GUILD_SHOP !== row2) {
                                  const BROWSE_CHANNELS = constants2.BROWSE_CHANNELS;
                                  num4 = 0;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return num4;
  } else {
    const tmp31 = closure_12(fontScale);
    const channelFromSectionRow = guildChannels.getChannelFromSectionRow(section, row);
    let num = 0;
    if (null != channelFromSectionRow) {
      const channel = channelFromSectionRow.channel;
      const record = channel.record;
      let type1 = null;
      if (hasOwnProperty.has(record.type)) {
        type1 = record.type;
      }
      const type = record.type;
      if (type1 === type) {
        num = tmp31 + channel.threadCount * tmp31;
      } else {
        let participantCount;
        if (ChannelTypes.ChannelTypes.GUILD_VOICE !== type) {
          if (ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE !== type) {
            num = tmp31;
            if (ChannelTypes.ChannelTypes.DM !== type) {
              num = tmp31;
              if (ChannelTypes.ChannelTypes.GROUP_DM !== type) {
                if (ChannelTypes.ChannelTypes.PUBLIC_THREAD !== type) {
                  if (ChannelTypes.ChannelTypes.PRIVATE_THREAD !== type) {
                    let sum;
                    if (section === guildChannels.voiceChannelsSectionNumber) {
                      if (record.isCategory()) {
                        sum = unpackModuleId(fontScale) + authStore;
                      }
                      num = sum;
                    }
                    sum = tmp31;
                    const tmpResult11 = FavoritesUtils;
                    if (tmpResult11.isFavoritesGuildId(guildChannels.id)) {
                      const hasItem = metroRequire.has(record.type);
                      sum = tmp31;
                    }
                  }
                }
                const result = SortedVoiceStateStore.countVoiceStatesForChannel(record.id);
                let sum1 = tmp31;
                if (result > 0) {
                  const tmpResult12 = VoiceUserItem;
                  sum1 = tmp31 + result * tmpResult12.getVoiceUserHeight(fontScale);
                }
                num = sum1;
              }
            }
          }
        }
        let num2 = 0;
        if (null != channel.subtitle) {
          num2 = map1(fontScale);
        }
        const tmpResult13 = VoiceUserItem;
        const voiceUserHeight = tmpResult13.getVoiceUserHeight(fontScale);
        if (record.type === ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE) {
          participantCount = StageChannelParticipantStore.getParticipantCount(
            record.id,
            StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
          );
        } else {
          participantCount = SortedVoiceStateStore.countVoiceStatesForChannel(record.id);
        }
        let num3 = 0;
        if (record.type === ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE) {
          num3 = 0;
          if (
            StageChannelParticipantStore.getParticipantCount(
              record.id,
              StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
            ) > 0
          ) {
            const tmpResult14 = VoiceUsers;
            num3 = tmpResult14.getAudienceItemHeight(fontScale);
          }
        }
        let sum4 = tmp31;
        if (participantCount > 0) {
          const sum2 = tmp31 + num2;
          const sum3 = sum2 + VoiceChannel.VOICE_USERS_MARGIN_TOP + voiceUserHeight * participantCount;
          sum4 = sum3 + VoiceChannel.VOICE_USERS_MARGIN_BOTTOM + num3;
        }
        num = sum4;
      }
    }
    return num;
  }
};
export const calculateVoiceSummary = function calculateVoiceSummary(arg0) {
  let guildChannels;
  let optInChannelsEnabled;
  let section;
  let selectedChannelId;
  let selectedVoiceChannelId;
  let voiceStates;
  ({ guildChannels, section } = arg0);
  ({ optInChannelsEnabled, voiceStates, selectedChannelId, selectedVoiceChannelId } = arg0);
  obj = channel_list_v2_ChannelListUtils;
  if (!obj.isVoiceChannelsSection(section, guildChannels)) {
    if (section < ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY) {
      return null;
    }
  }
  const tmpResult = SectionFooterHelpers;
  if (tmpResult.getSectionFooterConfig(guildChannels, optInChannelsEnabled, section).canHaveVoiceSummary) {
    const namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(section);
    if (null == namedCategoryFromSection) {
      return null;
    } else {
      const obj2 = { category: namedCategoryFromSection, selectedChannelId, selectedVoiceChannelId, voiceStates };
      const tmpResult2 = SectionFooterHelpers;
      const sectionFooterActiveVoiceChannels = tmpResult2.getSectionFooterActiveVoiceChannels(obj2);
      let tmp5 = null;
      if (0 !== sectionFooterActiveVoiceChannels.length) {
        tmp5 = sectionFooterActiveVoiceChannels;
      }
      return tmp5;
    }
  } else {
    return null;
  }
};
