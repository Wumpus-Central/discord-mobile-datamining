// === Module 18610: renderRedesignChannelListItem ===

// Module 18610 (renderRedesignChannelListItem)
import nativeDefault from "native" /* 575 */;
import ChannelTypes from "ChannelTypes" /* 1093 */;
import util from "util" /* 1113 */;
import FavoritesUtils from "FavoritesUtils" /* 5016 */;
import ButtonConstants from "ButtonConstants" /* 5766 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6817 */;
import FastList from "FastList" /* 7307 */;
import ChannelListState from "ChannelListState" /* 7786 */;
import Divider from "Divider" /* 14103 */;
import CategoryChannel from "CategoryChannel" /* 18529 */;
import ThreadChannelDefault from "ThreadChannel" /* 18537 */;
import VoiceUsers from "VoiceUsers" /* 18545 */;
import VoiceUserItem from "VoiceUserItem" /* 18547 */;
import VoiceUserSummary from "VoiceUserSummary" /* 18552 */;
import channel_list_v2_ChannelListUtils from "channel_list_v2/ChannelListUtils" /* 18604 */;
import GameClaimCoachmark from "GameClaimCoachmark" /* 18611 */;
import AccountLinkBanner from "AccountLinkBanner" /* 18615 */;
import ShowAllVoiceChannelsButtonDefault from "ShowAllVoiceChannelsButton" /* 18616 */;
import GuildProgressButton from "GuildProgressButton" /* 18618 */;
import GuildMFAWarning from "GuildMFAWarning" /* 18620 */;
import GuildPowerupsProgressBar from "GuildPowerupsProgressBar" /* 18642 */;
import VoiceChannel from "VoiceChannel" /* 18658 */;
import SectionFooterHelpers from "SectionFooterHelpers" /* 18665 */;
import noop from "module_19" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 6770 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import GuildChannelStore from "GuildChannelStore" /* 5072 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5898 */;

const DividerDefault = Divider;

require = fn;
const View = fn(17).View;
const ChannelRecord = fn(4995);
({ THREADED_CHANNEL_TYPES: hasOwnProperty, THREAD_CHANNEL_TYPES: closure_6 } = ChannelRecord);
const RedesignChannelListConstants = fn(5884);
({ CATEGORY_MARGIN_TOP: closure_10, getScaledCategoryRowHeight: closure_11, getScaledChannelRowHeight: closure_12, getScaledChannelSubtitleHeight: map1, STICKY_HEADER_MARGIN_BOTTOM: closure_14 } = RedesignChannelListConstants);
const StaticChannelRoute = fn(4998).StaticChannelRoute;
const GuildSidebarConstants = fn(7792);
({ ChannelListChannelNoticeRow: closure_16, ChannelListGuildActionRow } = GuildSidebarConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let items = [, , , , , , , , , ];
({ GUILD_ROLE_SUBSCRIPTIONS: arr[0], GUILD_HOME: arr[1], CHANNELS_AND_ROLES: arr[2], GUILD_DIRECTORY: arr[3], GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR: arr[4], GUILD_HUB_HEADER_OPTIONS: arr[5], GUILD_MOD_DASH_MEMBER_SAFETY: arr[6], GUILD_CONJURE: arr[7], GUILD_BOOSTS: arr[8], GUILD_PREMIUM_PROGRESS_BAR: arr[9] } = ChannelListGuildActionRow);
const set = new Set(items);
let obj = { nonChannelContainer: { marginHorizontal: 16 }, liveChannelNotice: { marginTop: fn(18609).LIVE_CHANNEL_NOTICE_MARGIN_TOP, marginBottom: fn(18609).LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 }, gameClaimNotice: null, applicationAccountLinkNotice: null, showAllVoiceChannelsButtonLastShownChannelActive: null, showAllVoiceChannelsButtonLastShownChannelInactive: null };
let obj2 = { marginTop: fn(18609).LIVE_CHANNEL_NOTICE_MARGIN_TOP, marginBottom: fn(18609).LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
obj.gameClaimNotice = { marginTop: fn(18611).GAME_CLAIM_NOTICE_MARGIN_TOP, marginBottom: fn(18611).GAME_CLAIM_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
let obj3 = { marginTop: fn(18611).GAME_CLAIM_NOTICE_MARGIN_TOP, marginBottom: fn(18611).GAME_CLAIM_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
obj.applicationAccountLinkNotice = { marginTop: fn(18615).ACCOUNT_LINK_BANNER_MARGIN_TOP, marginBottom: fn(18615).ACCOUNT_LINK_BANNER_MARGIN_BOTTOM, marginHorizontal: 16 };
let obj4 = { marginTop: fn(18615).ACCOUNT_LINK_BANNER_MARGIN_TOP, marginBottom: fn(18615).ACCOUNT_LINK_BANNER_MARGIN_BOTTOM, marginHorizontal: 16 };
obj.showAllVoiceChannelsButtonLastShownChannelActive = { marginHorizontal: 16, marginTop: nativeDefault.space.PX_16 };
let obj5 = { marginHorizontal: 16, marginTop: nativeDefault.space.PX_16 };
obj.showAllVoiceChannelsButtonLastShownChannelInactive = { marginHorizontal: 16, marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/renderRedesignChannelListItem.tsx");

export function isMobileGuildActionRow(arg0) {
  return set.has(arg0);
}
export function getFastListRecyclerKey(guildChannels, arg1, arg2, arg3) {
  if (arg1 === FastList.FastListItemTypes.ITEM) {
    if (null != arg3) {
      if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES === arg2) {
        const channelNoticeSection = guildChannels.getChannelNoticeSection();
        let id = channelNoticeSection.getRow(arg3);
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
}
export function renderChannelListSectionHeader(guildChannels, section, recentlyActiveChannelsEnabled, withMarginTop, categoryStyles) {
  if (guildChannels.favoritesSectionNumber === section) {
    const obj2 = { name: null, withMarginTop: null, styles: null };
    const intl2 = util.intl;
    obj2.name = intl2.string(util.t.mlPMCy);
    obj2.withMarginTop = withMarginTop;
    obj2.styles = categoryStyles;
    return CategoryChannel.renderCategoryItem(obj2);
  } else if (guildChannels.recentsSectionNumber === section) {
    const tmp22 = CategoryChannel;
    if (recentlyActiveChannelsEnabled) {
      const obj3 = { guildId: guildChannels.id, withMarginTop };
      let tmp19Result = collapsedCategories(tmp22.RecentlyActiveCategory, obj3);
    } else {
      const obj5 = { guildId: guildChannels.id, channelIds: null, withMarginTop: null };
      const categoryFromSection = guildChannels.getCategoryFromSection(section);
      let shownChannelAndThreadIds;
      if (categoryFromSection != null) {
        shownChannelAndThreadIds = categoryFromSection.getShownChannelAndThreadIds();
      }
      if (shownChannelAndThreadIds == null) {
        shownChannelAndThreadIds = [];
      }
      obj5.channelIds = shownChannelAndThreadIds;
      obj5.withMarginTop = withMarginTop;
      tmp19Result = collapsedCategories(tmp22.SuggestedCategory, obj5);
    }
    return tmp19Result;
  } else if (guildChannels.voiceChannelsSectionNumber === section) {
    const categoryFromSection1 = guildChannels.getCategoryFromSection(guildChannels.voiceChannelsSectionNumber);
    let flag = false;
    let flag2 = false;
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
      tmp11 = collapsedCategories(DividerDefault, {});
    }
    items = [tmp11, ];
    let renderCategoryItemResult = null;
    if (flag) {
      const obj6 = { name: null, styles: null };
      const intl = util.intl;
      obj6.name = intl.string(util.t["V/u9Dy"]);
      obj6.styles = categoryStyles;
      renderCategoryItemResult = CategoryChannel.renderCategoryItem(obj6);
    }
    const obj7 = { children: null };
    items[1] = renderCategoryItemResult;
    obj7.children = items;
    return expandedHeight(View, obj7);
  } else {
    if (obj.isNamedCategorySection(section)) {
      const namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(section);
      let tmp5 = null;
      if (null != namedCategoryFromSection) {
        const obj8 = { channel: namedCategoryFromSection.record, withMarginTop };
        tmp5 = collapsedCategories(CategoryChannel.CategoryChannel, obj8);
      }
      return tmp5;
    } else {
      return null;
    }
    obj = channel_list_v2_ChannelListUtils;
  }
}
export function getChannelListSectionHeaderSize(guildChannels, section, fontScale, arg3) {
  const tmp = closure_1_11(fontScale);
  let num = 0;
  if (arg3) {
    num = closure_1_10;
  }
  if (guildChannels.favoritesSectionNumber !== section) {
    if (guildChannels.recentsSectionNumber !== section) {
      if (guildChannels.voiceChannelsSectionNumber === section) {
        const categoryFromSection = guildChannels.getCategoryFromSection(guildChannels.voiceChannelsSectionNumber);
        let flag = false;
        let flag2 = false;
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
}
export function renderChannelListSectionFooter(guildChannels, section, ref, channels) {
  let tmp = null;
  if (null != channels) {
    obj = { guildId: guildChannels.id, channels };
    tmp = collapsedCategories(CategoryChannel.RedesignVoiceUserSummary, obj);
  }
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES === section) {
    return null;
  } else if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const isEmptyResult = guildActionSection.isEmpty();
    let tmp20 = null;
    if (!isEmptyResult) {
      tmp20 = collapsedCategories(DividerDefault, {});
    }
    return tmp20;
  } else {
    if (guildChannels.favoritesSectionNumber !== section) {
      if (guildChannels.recentsSectionNumber !== section) {
        if (guildChannels.voiceChannelsSectionNumber === section) {
          const categoryFromSection = guildChannels.getCategoryFromSection(section);
          if (null == categoryFromSection) {
            let obj2 = { render: false, lastShownChannelActive: false };
          } else {
            const obj3 = { render: true, lastShownChannelActive: SortedVoiceStateStore.countVoiceStatesForChannel(categoryFromSection.getShownChannelIds()[categoryFromSection.getShownChannelIds(categoryFromSection).length - 1]) > 0 };
            obj2 = obj3;
          }
          if (obj2.render) {
            items = [tmp, ];
            const obj4 = { children: null };
            const obj5 = { style: tmp8 ? obj.showAllVoiceChannelsButtonLastShownChannelActive : obj.showAllVoiceChannelsButtonLastShownChannelInactive, children: null };
            const obj6 = { guildId: guildChannels.id, section, listRef: ref };
            obj5.children = collapsedCategories(ShowAllVoiceChannelsButtonDefault, obj6);
            items[1] = collapsedCategories(View, obj5);
            obj4.children = items;
            return expandedHeight(View, obj4);
          }
        }
        let tmp9 = null;
        if (tmp5Result.isNamedCategorySection(section)) {
          tmp9 = tmp;
        }
        return tmp9;
      }
    }
    return collapsedCategories(DividerDefault, {});
  }
}
export function getChannelListSectionHasFooterDivider(guildChannels, diff1) {
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES === diff1) {
    return false;
  } else if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS === diff1) {
    const guildActionSection = guildChannels.getGuildActionSection();
    return !guildActionSection.isEmpty();
  } else {
    if (guildChannels.favoritesSectionNumber !== diff1) {
      if (guildChannels.recentsSectionNumber !== diff1) {
        const voiceChannelsSectionNumber = guildChannels.voiceChannelsSectionNumber;
        return false;
      }
    }
    return true;
  }
}
export function getChannelListSectionFooterSize(guildChannels, section, result) {
  let num = 0;
  if (null != result) {
    num = VoiceUserSummary.VOICE_USER_SUMMARY_HEIGHT;
  }
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES === section) {
    return 0;
  } else if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const isEmptyResult = guildActionSection.isEmpty();
    let num4 = 0;
    if (!isEmptyResult) {
      num4 = Divider.DIVIDER_HEIGHT;
    }
    return num4;
  } else {
    if (guildChannels.favoritesSectionNumber !== section) {
      if (guildChannels.recentsSectionNumber !== section) {
        if (guildChannels.voiceChannelsSectionNumber === section) {
          const categoryFromSection = guildChannels.getCategoryFromSection(section);
          if (null == categoryFromSection) {
            obj = { render: false, lastShownChannelActive: false };
          } else {
            const obj2 = { render: true, lastShownChannelActive: SortedVoiceStateStore.countVoiceStatesForChannel(categoryFromSection.getShownChannelIds()[categoryFromSection.getShownChannelIds(categoryFromSection).length - 1]) > 0 };
            obj = obj2;
          }
          if (!obj.render) {
            return num;
          } else {
            showAllVoiceChannelsButtonLastShownChannelActive = obj;
            const sum = num + ButtonConstants.SMALL_BUTTON_HEIGHT;
            if (tmp6) {
              ({ showAllVoiceChannelsButtonLastShownChannelActive, marginTop } = showAllVoiceChannelsButtonLastShownChannelActive);
            } else {
              marginTop = showAllVoiceChannelsButtonLastShownChannelActive.showAllVoiceChannelsButtonLastShownChannelInactive.marginTop;
            }
            const sum1 = sum + marginTop;
          }
        } else {
          let num2 = 0;
          if (tmp3Result.isNamedCategorySection(section)) {
            num2 = num;
          }
          return num2;
        }
      }
    }
    return Divider.DIVIDER_HEIGHT;
  }
}
export function renderChannelListItem(arg0) {
  ({ guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = arg0);
  if (channel(7786).SECTION_INDEX_CHANNEL_NOTICES === section) {
    const channelNoticeSection = guildChannels.getChannelNoticeSection();
    const row1 = channelNoticeSection.getRow(row);
    let tmp63 = null;
    if (null != row1) {
      if (constants.SPACER === row1) {
        obj = { style: null };
        let obj2 = { height };
        obj.style = obj2;
        tmp63 = closure_18(View, obj);
      } else if (constants.GUILD_PROGRESS === row1) {
        const obj4 = { style: obj.nonChannelContainer, children: null };
        const obj5 = { guild };
        obj4.children = closure_18(selectedChannelId(18618), obj5);
        tmp63 = closure_18(View, obj4);
      } else if (constants.MFA_WARNING === row1) {
        const obj6 = { style: obj.nonChannelContainer, children: closure_18(selectedChannelId(18620), {}) };
        tmp63 = closure_18(View, obj6);
      } else if (constants.LIVE_CHANNEL_NOTICE === row1) {
        const obj7 = { style: obj.liveChannelNotice, guild };
        tmp63 = closure_18(selectedChannelId(18609), obj7);
      } else if (constants.GAME_CLAIM === row1) {
        let tmp70 = null;
        if (null != gameClaimMarkAsDismissed) {
          const obj9 = { style: obj.gameClaimNotice, children: null };
          const obj10 = { guild, markAsDismissed: gameClaimMarkAsDismissed };
          obj9.children = closure_18(selectedChannelId(18611), obj10);
          tmp70 = closure_18(View, obj9);
        }
        tmp63 = tmp70;
      } else if (constants.APPLICATION_ACCOUNT_LINK === row1) {
        let tmp65 = null;
        if (null != applicationAccountLinkMarkAsDismissed) {
          tmp65 = null;
          if (null != startApplicationAccountLinkAuthorization) {
            tmp65 = null;
            if (null != accountLinkApplication) {
              const obj11 = { style: obj.applicationAccountLinkNotice, children: null };
              const obj12 = { markAsDismissed: applicationAccountLinkMarkAsDismissed, startAuthorization: startApplicationAccountLinkAuthorization, application: accountLinkApplication };
              obj11.children = closure_18(selectedChannelId(18615), obj12);
              tmp65 = closure_18(View, obj11);
            }
          }
        }
        tmp63 = tmp65;
      } else {
        tmp63 = null;
        if (constants.FAVORITES_SUGGESTIONS === row1) {
          tmp63 = closure_18(selectedChannelId(18622), {});
        }
      }
    }
    return tmp63;
  } else if (tmp(7786).SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const row2 = guildActionSection.getRow(row);
    let tmp44Result = null;
    if (null != row2) {
      if (ChannelListGuildActionRow.GUILD_ROLE_SUBSCRIPTIONS === row2) {
        const obj13 = { guild, selected: selectedChannelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS };
        tmp44Result = closure_18(selectedChannelId(18626), obj13);
      } else if (ChannelListGuildActionRow.GUILD_HOME === row2) {
        const obj14 = { guild, selected: selectedChannelId === StaticChannelRoute.GUILD_HOME };
        tmp44Result = closure_18(selectedChannelId(18628), obj14);
      } else if (ChannelListGuildActionRow.CHANNELS_AND_ROLES === row2) {
        const obj15 = { guild, selected: null };
        let tmp54 = selectedChannelId === StaticChannelRoute.CHANNEL_BROWSER;
        if (!tmp54) {
          tmp54 = selectedChannelId === StaticChannelRoute.CUSTOMIZE_COMMUNITY;
        }
        obj15.selected = tmp54;
        tmp44Result = closure_18(tmp(18629).GuildRolesAndChannelsRow, obj15);
      } else if (ChannelListGuildActionRow.GUILD_DIRECTORY === row2) {
        const obj16 = { guildId: guild.id, selected: selectedChannelId === GuildChannelStore.getDirectoryChannelIds(guild.id)[0] };
        tmp44Result = closure_18(selectedChannelId(18630), obj16);
      } else if (ChannelListGuildActionRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row2) {
        const obj17 = { style: obj.nonChannelContainer, children: null };
        const obj18 = { guildId: guild.id };
        obj17.children = closure_18(tmp(18631).NewMemberActionsProgress, obj18);
        items = [closure_18(View, obj17), ];
        const guildActionSection1 = guildChannels.getGuildActionSection();
        let tmp46Result = null;
        if (row < guildActionSection1.getRows().length - 1) {
          tmp46Result = closure_18(selectedChannelId(14103), {});
        }
        const obj19 = { children: null };
        items[1] = tmp46Result;
        obj19.children = items;
        tmp44Result = closure_19(View, obj19);
      } else if (ChannelListGuildActionRow.GUILD_HUB_HEADER_OPTIONS === row2) {
        const obj20 = { guild };
        tmp44Result = closure_18(selectedChannelId(18632), obj20);
      } else if (ChannelListGuildActionRow.GUILD_MOD_DASH_MEMBER_SAFETY === row2) {
        const obj21 = { guild, selected: selectedChannelId === StaticChannelRoute.MEMBER_SAFETY };
        tmp44Result = closure_18(selectedChannelId(18635), obj21);
      } else if (ChannelListGuildActionRow.GUILD_CONJURE === row2) {
        const obj22 = { guild, selected: selectedChannelId === StaticChannelRoute.CONJURE };
        tmp44Result = closure_18(selectedChannelId(18637), obj22);
      } else if (ChannelListGuildActionRow.GUILD_BOOSTS === row2) {
        const obj23 = { guildId: guild.id };
        tmp44Result = closure_18(selectedChannelId(18639), obj23);
      } else if (ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR === row2) {
        const obj24 = { guildId: guild.id };
        const items1 = [closure_18(selectedChannelId(18642), obj24), ];
        const guildActionSection2 = guildChannels.getGuildActionSection();
        let tmp31Result = null;
        if (row < guildActionSection2.getRows().length - 1) {
          tmp31Result = closure_18(selectedChannelId(14103), {});
        }
        const obj25 = { children: null };
        items1[1] = tmp31Result;
        obj25.children = items1;
        tmp44Result = closure_19(View, obj25);
      } else {
        tmp44Result = null;
        if (ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS !== row2) {
          tmp44Result = null;
          if (ChannelListGuildActionRow.GUILD_FAVORITES !== row2) {
            tmp44Result = null;
            if (ChannelListGuildActionRow.GUILD_CHANNEL_LIST_OPT_IN_NOTICE !== row2) {
              tmp44Result = null;
              if (ChannelListGuildActionRow.GUILD_SHOP !== row2) {
                const BROWSE_CHANNELS = ChannelListGuildActionRow.BROWSE_CHANNELS;
                tmp44Result = null;
              }
            }
          }
        }
      }
    }
    return tmp44Result;
  } else {
    const channelFromSectionRow = guildChannels.getChannelFromSectionRow(section, row);
    let tmp13 = null;
    if (null != channelFromSectionRow) {
      channel = channelFromSectionRow.channel;
      const record = channel.record;
      let type1 = null;
      if (set.has(record.type)) {
        type1 = record.type;
      }
      const type = record.type;
      if (type1 === type) {
        const obj26 = { channel: record, selected: tmp5, muted: null, subtitle: null, isRulesChannel: null, isSuggestedSection: null };
        ({ isMuted: obj8.muted, subtitle: obj8.subtitle } = channel);
        obj26.isRulesChannel = guild.rulesChannelId === record.id;
        obj26.isSuggestedSection = section === guildChannels.recentsSectionNumber;
        const obj27 = { children: null };
        const items2 = [closure_18(selectedChannelId(18646), obj26), ];
        const threadIds = channel.threadIds;
        items2[1] = threadIds.map((threadId, threadIndex) => {
          let tmp = null;
          if (null != ChannelStore.getChannel(threadId)) {
            obj = { children: null };
            const obj2 = { threadId, threadIndex, threadCount: channel.threadCount, selected: selectedChannelId === threadId };
            obj.children = collapsedCategories(ThreadChannelDefault, obj2);
            tmp = collapsedCategories(View, obj, threadId);
          }
          return tmp;
        });
        obj27.children = items2;
        tmp13 = closure_19(closure_20, obj27);
        const tmp20 = section === guildChannels.recentsSectionNumber;
      } else if (tmp(1093).ChannelTypes.GUILD_VOICE === type) {
        const obj28 = { channel: record, selected: tmp5, subtitle: channel.subtitle };
        tmp13 = closure_18(selectedChannelId(18658), obj28);
      } else if (tmp(1093).ChannelTypes.GUILD_STAGE_VOICE === type) {
        const obj29 = { channel: record, selected: tmp5 };
        tmp13 = closure_18(selectedChannelId(18661), obj29);
      } else {
        if (tmp(1093).ChannelTypes.DM !== type) {
          if (tmp(1093).ChannelTypes.GROUP_DM !== type) {
            if (section === guildChannels.voiceChannelsSectionNumber) {
              if (record.isCategory()) {
                const obj30 = { channel: record, withMarginTop: true };
                let tmp9 = closure_18(tmp(18529).CategoryChannel, obj30);
              }
              tmp13 = tmp9;
            }
            if (tmpResult.isFavoritesGuildId(guildChannels.id)) {
              if (set2.has(record.type)) {
                const obj31 = { channel: record, selected: tmp5, muted: null, subtitle: null, isRulesChannel: false };
                ({ isMuted: obj3.muted, subtitle: obj3.subtitle } = channel);
                tmp9 = closure_18(selectedChannelId(18646), obj31);
              }
            }
            const obj32 = { channel: record, selected: tmp5 };
            tmp9 = closure_18(selectedChannelId(18664), obj32);
            tmpResult = tmp(5016);
          }
        }
        const obj33 = { channel: record, selected: tmp5 };
        tmp13 = closure_18(selectedChannelId(18663), obj33);
      }
    }
    return tmp13;
  }
}
export function getChannelListItemSize(liveChannelNoticeHeight) {
  ({ guildChannels, section, row, fontScale, voiceStates, favoritesSuggestionsNoticeHeight } = liveChannelNoticeHeight);
  if (favoritesSuggestionsNoticeHeight === undefined) {
    favoritesSuggestionsNoticeHeight = 0;
  }
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES === section) {
    const channelNoticeSection = guildChannels.getChannelNoticeSection();
    const row1 = channelNoticeSection.getRow(row);
    if (constants.SPACER === row1) {
      return height;
    } else if (constants.GUILD_PROGRESS === row1) {
      return GuildProgressButton.getScaledGuildProgressButtonHeight(fontScale);
    } else if (constants.MFA_WARNING === row1) {
      return GuildMFAWarning.getScaledGuildMFAWarningHeight(fontScale);
    } else if (constants.LIVE_CHANNEL_NOTICE === row1) {
      return liveChannelNoticeHeight.liveChannelNoticeHeight;
    } else if (constants.GAME_CLAIM === row1) {
      return GameClaimCoachmark.getScaledGameClaimNoticeHeight(fontScale);
    } else if (constants.APPLICATION_ACCOUNT_LINK === row1) {
      return AccountLinkBanner.getScaledAccountLinkBannerHeight(fontScale);
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
      const tmp25 = application_id(fontScale);
      num4 = tmp25;
      if (ChannelListGuildActionRow.GUILD_ROLE_SUBSCRIPTIONS !== row2) {
        num4 = tmp25;
        if (ChannelListGuildActionRow.GUILD_HOME !== row2) {
          num4 = tmp25;
          if (ChannelListGuildActionRow.CHANNELS_AND_ROLES !== row2) {
            num4 = tmp25;
            if (ChannelListGuildActionRow.GUILD_DIRECTORY !== row2) {
              num4 = tmp25;
              if (ChannelListGuildActionRow.GUILD_MOD_DASH_MEMBER_SAFETY !== row2) {
                num4 = tmp25;
                if (ChannelListGuildActionRow.GUILD_BOOSTS !== row2) {
                  num4 = tmp25;
                  if (ChannelListGuildActionRow.GUILD_CONJURE !== row2) {
                    if (ChannelListGuildActionRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row2) {
                      const guildActionSection1 = guildChannels.getGuildActionSection();
                      let num8 = 0;
                      if (row < guildActionSection1.getRows().length - 1) {
                        num8 = Divider.DIVIDER_HEIGHT;
                      }
                      num4 = 48 + num8;
                    } else {
                      num4 = liveChannelNoticeHeight.listViewportHeight;
                      if (ChannelListGuildActionRow.GUILD_HUB_HEADER_OPTIONS !== row2) {
                        num4 = 0;
                        if (ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS !== row2) {
                          if (ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR === row2) {
                            const guildActionSection2 = guildChannels.getGuildActionSection();
                            let num6 = 0;
                            if (row < guildActionSection2.getRows().length - 1) {
                              num6 = Divider.DIVIDER_HEIGHT;
                            }
                            num4 = GuildPowerupsProgressBar.BOOST_PROGRESS_BAR_HEIGHT + num6;
                          } else {
                            num4 = 0;
                            if (ChannelListGuildActionRow.GUILD_FAVORITES !== row2) {
                              num4 = 0;
                              if (ChannelListGuildActionRow.GUILD_CHANNEL_LIST_OPT_IN_NOTICE !== row2) {
                                num4 = 0;
                                if (ChannelListGuildActionRow.GUILD_SHOP !== row2) {
                                  const BROWSE_CHANNELS = ChannelListGuildActionRow.BROWSE_CHANNELS;
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
    const tmp31 = application_id(fontScale);
    const channelFromSectionRow = guildChannels.getChannelFromSectionRow(section, row);
    let num = 0;
    if (null != channelFromSectionRow) {
      const channel = channelFromSectionRow.channel;
      const record = channel.record;
      let type1 = null;
      if (set.has(record.type)) {
        type1 = record.type;
      }
      const type = record.type;
      if (type1 === type) {
        num = tmp31 + channel.threadCount * tmp31;
      } else {
        if (ChannelTypes.ChannelTypes.GUILD_VOICE !== type) {
          if (ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE !== type) {
            num = tmp31;
            if (ChannelTypes.ChannelTypes.DM !== type) {
              num = tmp31;
              if (ChannelTypes.ChannelTypes.GROUP_DM !== type) {
                if (ChannelTypes.ChannelTypes.PUBLIC_THREAD !== type) {
                  if (ChannelTypes.ChannelTypes.PRIVATE_THREAD !== type) {
                    if (section === guildChannels.voiceChannelsSectionNumber) {
                      if (record.isCategory()) {
                        let sum = closure_1_11(fontScale) + closure_1_10;
                      }
                      num = sum;
                    }
                    sum = tmp31;
                    if (tmpResult11.isFavoritesGuildId(guildChannels.id)) {
                      const hasItem = set2.has(record.type);
                      sum = tmp31;
                    }
                    tmpResult11 = FavoritesUtils;
                  }
                }
                const result = SortedVoiceStateStore.countVoiceStatesForChannel(record.id);
                let sum1 = tmp31;
                if (result > 0) {
                  sum1 = tmp31 + result * VoiceUserItem.getVoiceUserHeight(fontScale);
                  const tmpResult12 = VoiceUserItem;
                }
                num = sum1;
              }
            }
          }
        }
        let num2 = 0;
        if (null != channel.subtitle) {
          num2 = state(fontScale);
        }
        const voiceUserHeight = VoiceUserItem.getVoiceUserHeight(fontScale);
        if (record.type === ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE) {
          let participantCount = StageChannelParticipantStore.getParticipantCount(record.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
        } else {
          participantCount = SortedVoiceStateStore.countVoiceStatesForChannel(record.id);
        }
        let num3 = 0;
        if (record.type === ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE) {
          num3 = 0;
          if (StageChannelParticipantStore.getParticipantCount(record.id, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE) > 0) {
            num3 = VoiceUsers.getAudienceItemHeight(fontScale);
            const tmpResult14 = VoiceUsers;
          }
        }
        let sum4 = tmp31;
        if (participantCount > 0) {
          const sum2 = tmp31 + num2;
          const sum3 = sum2 + VoiceChannel.VOICE_USERS_MARGIN_TOP + voiceUserHeight * participantCount;
          sum4 = sum3 + VoiceChannel.VOICE_USERS_MARGIN_BOTTOM + num3;
        }
        num = sum4;
        const tmpResult13 = VoiceUserItem;
      }
    }
    return num;
  }
}
export function calculateVoiceSummary(arg0) {
  ({ guildChannels, section } = arg0);
  ({ optInChannelsEnabled, voiceStates, selectedChannelId, selectedVoiceChannelId } = arg0);
  if (!obj.isVoiceChannelsSection(section, guildChannels)) {
    if (section < ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY) {
      return null;
    }
  }
  obj = channel_list_v2_ChannelListUtils;
  if (tmpResult.getSectionFooterConfig(guildChannels, optInChannelsEnabled, section).canHaveVoiceSummary) {
    const namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(section);
    if (null == namedCategoryFromSection) {
      return null;
    } else {
      const obj2 = { category: namedCategoryFromSection, selectedChannelId, selectedVoiceChannelId, voiceStates };
      const sectionFooterActiveVoiceChannels = SectionFooterHelpers.getSectionFooterActiveVoiceChannels(obj2);
      let tmp5 = null;
      if (0 !== sectionFooterActiveVoiceChannels.length) {
        tmp5 = sectionFooterActiveVoiceChannels;
      }
      return tmp5;
    }
  } else {
    return null;
  }
  tmpResult = SectionFooterHelpers;
}