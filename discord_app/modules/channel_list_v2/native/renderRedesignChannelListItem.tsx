// === Module 16539: renderRedesignChannelListItem ===

// Module 16539 (renderRedesignChannelListItem)
import nativeDefault from "native" /* 576 */;
import ChannelTypes from "ChannelTypes" /* 1095 */;
import util from "util" /* 1115 */;
import FavoritesUtils from "FavoritesUtils" /* 2067 */;
import ButtonConstants from "ButtonConstants" /* 5192 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5644 */;
import FastList from "FastList" /* 7319 */;
import ChannelListState from "ChannelListState" /* 7773 */;
import Divider from "Divider" /* 12553 */;
import CategoryChannel from "CategoryChannel" /* 16455 */;
import ThreadChannelDefault from "ThreadChannel" /* 16463 */;
import VoiceUsers from "VoiceUsers" /* 16471 */;
import VoiceUserItem from "VoiceUserItem" /* 16473 */;
import VoiceUserSummary from "VoiceUserSummary" /* 16480 */;
import channel_list_v2_ChannelListUtils from "channel_list_v2/ChannelListUtils" /* 16533 */;
import GameClaimCoachmark from "GameClaimCoachmark" /* 16540 */;
import AccountLinkBanner from "AccountLinkBanner" /* 16544 */;
import ShowAllVoiceChannelsButtonDefault from "ShowAllVoiceChannelsButton" /* 16545 */;
import GuildProgressButton from "GuildProgressButton" /* 16547 */;
import GuildMFAWarning from "GuildMFAWarning" /* 16549 */;
import GuildPowerupsProgressBar from "GuildPowerupsProgressBar" /* 16570 */;
import VoiceChannel from "VoiceChannel" /* 16585 */;
import SectionFooterHelpers from "SectionFooterHelpers" /* 16590 */;
import noop from "module_19" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5637 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildChannelStore from "GuildChannelStore" /* 4394 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4781 */;

const DividerDefault = Divider;

require = fn;
const View = fn(17).View;
const ChannelRecord = fn(2046);
({ THREADED_CHANNEL_TYPES: hasOwnProperty, THREAD_CHANNEL_TYPES: metroRequire } = ChannelRecord);
const RedesignChannelListConstants = fn(10380);
({ CATEGORY_MARGIN_TOP: c10, getScaledCategoryRowHeight: closure_11, getScaledChannelRowHeight: closure_12, getScaledChannelSubtitleHeight: map1, STICKY_HEADER_MARGIN_BOTTOM: closure_14 } = RedesignChannelListConstants);
const StaticChannelRoute = fn(2049).StaticChannelRoute;
const GuildSidebarConstants = fn(7779);
({ ChannelListChannelNoticeRow: closure_16, ChannelListGuildActionRow: closure_17 } = GuildSidebarConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let obj = { nonChannelContainer: { marginHorizontal: 16 }, liveChannelNotice: { marginTop: fn(16538).LIVE_CHANNEL_NOTICE_MARGIN_TOP, marginBottom: fn(16538).LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 }, gameClaimNotice: null, applicationAccountLinkNotice: null, showAllVoiceChannelsButtonLastShownChannelActive: null, showAllVoiceChannelsButtonLastShownChannelInactive: null };
let obj2 = { marginTop: fn(16538).LIVE_CHANNEL_NOTICE_MARGIN_TOP, marginBottom: fn(16538).LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
obj.gameClaimNotice = { marginTop: fn(16540).GAME_CLAIM_NOTICE_MARGIN_TOP, marginBottom: fn(16540).GAME_CLAIM_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
let obj3 = { marginTop: fn(16540).GAME_CLAIM_NOTICE_MARGIN_TOP, marginBottom: fn(16540).GAME_CLAIM_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
obj.applicationAccountLinkNotice = { marginTop: fn(16544).ACCOUNT_LINK_BANNER_MARGIN_TOP, marginBottom: fn(16544).ACCOUNT_LINK_BANNER_MARGIN_BOTTOM, marginHorizontal: 16 };
let obj4 = { marginTop: fn(16544).ACCOUNT_LINK_BANNER_MARGIN_TOP, marginBottom: fn(16544).ACCOUNT_LINK_BANNER_MARGIN_BOTTOM, marginHorizontal: 16 };
obj.showAllVoiceChannelsButtonLastShownChannelActive = { marginHorizontal: 16, marginTop: nativeDefault.space.PX_16 };
let obj5 = { marginHorizontal: 16, marginTop: nativeDefault.space.PX_16 };
obj.showAllVoiceChannelsButtonLastShownChannelInactive = { marginHorizontal: 16, marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/renderRedesignChannelListItem.tsx");

export const getFastListRecyclerKey = function getFastListRecyclerKey(guildChannels, arg1, arg2, arg3) {
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
};
export const renderChannelListSectionHeader = function renderChannelListSectionHeader(guildChannels, section, recentlyActiveChannelsEnabled, withMarginTop, categoryStyles) {
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
    const items = [tmp11, ];
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
    return closure_1_19(View, obj7);
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
};
export const getChannelListSectionHeaderSize = function getChannelListSectionHeaderSize(guildChannels, section, fontScale, arg3) {
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
};
export const renderChannelListSectionFooter = function renderChannelListSectionFooter(guildChannels, section, ref, channels) {
  let tmp = null;
  if (null != channels) {
    obj = { guildId: guildChannels.id, channels };
    tmp = collapsedCategories(CategoryChannel.RedesignVoiceUserSummary, obj);
  }
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES === section) {
    return null;
  } else if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    let flag = false;
    if (!guildActionSection.isEmpty()) {
      const rows = guildActionSection.getRows();
      let tmp18 = 1 === rows.length;
      if (tmp18) {
        tmp18 = rows[0] === constants2.GUILD_SCHEDULED_EVENTS;
      }
      flag = !tmp18;
    }
    let tmp20 = null;
    if (flag) {
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
            const items = [tmp, ];
            const obj4 = { children: null };
            const obj5 = { style: tmp8 ? obj.showAllVoiceChannelsButtonLastShownChannelActive : obj.showAllVoiceChannelsButtonLastShownChannelInactive, children: null };
            const obj6 = { guildId: guildChannels.id, section, listRef: ref };
            obj5.children = collapsedCategories(ShowAllVoiceChannelsButtonDefault, obj6);
            items[1] = collapsedCategories(View, obj5);
            obj4.children = items;
            return closure_1_19(View, obj4);
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
};
export const getChannelListSectionHasFooterDivider = function getChannelListSectionHasFooterDivider(guildChannels, diff1) {
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES === diff1) {
    return false;
  } else if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS === diff1) {
    const guildActionSection = guildChannels.getGuildActionSection();
    let flag3 = false;
    if (!guildActionSection.isEmpty()) {
      const rows = guildActionSection.getRows();
      let tmp3 = 1 === rows.length;
      if (tmp3) {
        tmp3 = rows[0] === constants2.GUILD_SCHEDULED_EVENTS;
      }
      flag3 = !tmp3;
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
export const getChannelListSectionFooterSize = function getChannelListSectionFooterSize(guildChannels, section, result) {
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
      let tmp10 = 1 === rows.length;
      if (tmp10) {
        tmp10 = rows[0] === constants2.GUILD_SCHEDULED_EVENTS;
      }
      flag = !tmp10;
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
};
export const renderChannelListItem = function renderChannelListItem(arg0) {
  ({ guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = arg0);
  if (channel(7773).SECTION_INDEX_CHANNEL_NOTICES === section) {
    const channelNoticeSection = guildChannels.getChannelNoticeSection();
    const row1 = channelNoticeSection.getRow(row);
    let tmp65 = null;
    if (null != row1) {
      if (constants.SPACER === row1) {
        obj = { style: null };
        let obj2 = { height };
        obj.style = obj2;
        tmp65 = closure_18(View, obj);
      } else if (constants.GUILD_PROGRESS === row1) {
        const obj4 = { style: obj.nonChannelContainer, children: null };
        const obj5 = { guild };
        obj4.children = closure_18(selectedChannelId(16547), obj5);
        tmp65 = closure_18(View, obj4);
      } else if (constants.MFA_WARNING === row1) {
        const obj6 = { style: obj.nonChannelContainer, children: closure_18(selectedChannelId(16549), {}) };
        tmp65 = closure_18(View, obj6);
      } else if (constants.LIVE_CHANNEL_NOTICE === row1) {
        const obj7 = { style: obj.liveChannelNotice, guild };
        tmp65 = closure_18(selectedChannelId(16538), obj7);
      } else if (constants.GAME_CLAIM === row1) {
        let tmp72 = null;
        if (null != gameClaimMarkAsDismissed) {
          const obj9 = { style: obj.gameClaimNotice, children: null };
          const obj10 = { guild, markAsDismissed: gameClaimMarkAsDismissed };
          obj9.children = closure_18(selectedChannelId(16540), obj10);
          tmp72 = closure_18(View, obj9);
        }
        tmp65 = tmp72;
      } else if (constants.APPLICATION_ACCOUNT_LINK === row1) {
        let tmp67 = null;
        if (null != applicationAccountLinkMarkAsDismissed) {
          tmp67 = null;
          if (null != startApplicationAccountLinkAuthorization) {
            tmp67 = null;
            if (null != accountLinkApplication) {
              const obj11 = { style: obj.applicationAccountLinkNotice, children: null };
              const obj12 = { markAsDismissed: applicationAccountLinkMarkAsDismissed, startAuthorization: startApplicationAccountLinkAuthorization, application: accountLinkApplication };
              obj11.children = closure_18(selectedChannelId(16544), obj12);
              tmp67 = closure_18(View, obj11);
            }
          }
        }
        tmp65 = tmp67;
      } else {
        tmp65 = null;
        if (constants.FAVORITES_SUGGESTIONS === row1) {
          tmp65 = closure_18(selectedChannelId(16551), {});
        }
      }
    }
    return tmp65;
  } else if (tmp(7773).SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const row2 = guildActionSection.getRow(row);
    let tmp55Result = null;
    if (null != row2) {
      if (constants2.GUILD_ROLE_SUBSCRIPTIONS === row2) {
        const obj13 = { guild, selected: selectedChannelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS };
        tmp55Result = closure_18(selectedChannelId(16555), obj13);
      } else if (constants2.GUILD_HOME === row2) {
        const obj14 = { guild, selected: selectedChannelId === StaticChannelRoute.GUILD_HOME };
        tmp55Result = closure_18(selectedChannelId(16557), obj14);
      } else if (constants2.CHANNELS_AND_ROLES === row2) {
        const obj15 = { guild, selected: null };
        let tmp56 = selectedChannelId === StaticChannelRoute.CHANNEL_BROWSER;
        if (!tmp56) {
          tmp56 = selectedChannelId === StaticChannelRoute.CUSTOMIZE_COMMUNITY;
        }
        obj15.selected = tmp56;
        tmp55Result = closure_18(tmp(16558).GuildRolesAndChannelsRow, obj15);
      } else if (constants2.GUILD_DIRECTORY === row2) {
        const obj16 = { guildId: guild.id, selected: selectedChannelId === GuildChannelStore.getDirectoryChannelIds(guild.id)[0] };
        tmp55Result = closure_18(selectedChannelId(16559), obj16);
      } else if (constants2.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row2) {
        const obj17 = { children: null };
        const obj18 = { style: obj.nonChannelContainer, children: null };
        const obj19 = { guildId: guild.id };
        obj18.children = closure_18(tmp(16560).NewMemberActionsProgress, obj19);
        const items = [closure_18(View, obj18), closure_18(selectedChannelId(12553), {})];
        obj17.children = items;
        tmp55Result = closure_19(View, obj17);
      } else if (constants2.GUILD_HUB_HEADER_OPTIONS === row2) {
        const obj20 = { guild };
        tmp55Result = closure_18(selectedChannelId(16561), obj20);
      } else if (constants2.GUILD_MOD_DASH_MEMBER_SAFETY === row2) {
        const obj21 = { guild, selected: selectedChannelId === StaticChannelRoute.MEMBER_SAFETY };
        tmp55Result = closure_18(selectedChannelId(16564), obj21);
      } else if (constants2.GUILD_VIBEGRATIONS === row2) {
        const obj22 = { guild, selected: selectedChannelId === StaticChannelRoute.VIBEGRATIONS };
        tmp55Result = closure_18(selectedChannelId(16566), obj22);
      } else if (constants2.GUILD_BOOSTS === row2) {
        const obj23 = { guildId: guild.id };
        tmp55Result = closure_18(selectedChannelId(16567), obj23);
      } else if (constants2.GUILD_PREMIUM_PROGRESS_BAR === row2) {
        const obj24 = { children: null };
        const obj25 = { guildId: guild.id };
        const items1 = [closure_18(selectedChannelId(16570), obj25), closure_18(selectedChannelId(12553), {})];
        obj24.children = items1;
        tmp55Result = closure_19(View, obj24);
      } else {
        tmp55Result = null;
        if (constants2.GUILD_SCHEDULED_EVENTS !== row2) {
          tmp55Result = null;
          if (constants2.GUILD_FAVORITES !== row2) {
            tmp55Result = null;
            if (constants2.GUILD_CHANNEL_LIST_OPT_IN_NOTICE !== row2) {
              tmp55Result = null;
              if (constants2.GUILD_SHOP !== row2) {
                const BROWSE_CHANNELS = constants2.BROWSE_CHANNELS;
                tmp55Result = null;
              }
            }
          }
        }
      }
    }
    return tmp55Result;
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
      if (tmp(1095).ChannelTypes.GUILD_APP === type) {
        const obj26 = { children: null };
        const obj27 = { channel: record, selected: tmp5 };
        const items2 = [closure_18(selectedChannelId(16574), obj27), ];
        closure_129_0 = channel;
        closure_129_1 = selectedChannelId;
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
        obj26.children = items2;
        tmp13 = closure_19(closure_20, obj26);
      } else if (type1 === type) {
        const obj28 = { channel: record, selected: tmp5, muted: null, subtitle: null, isRulesChannel: null, isSuggestedSection: null };
        ({ isMuted: obj8.muted, subtitle: obj8.subtitle } = channel);
        obj28.isRulesChannel = guild.rulesChannelId === record.id;
        obj28.isSuggestedSection = section === guildChannels.recentsSectionNumber;
        const obj29 = { children: null };
        const items3 = [closure_18(selectedChannelId(16575), obj28), ];
        const threadIds1 = channel.threadIds;
        items3[1] = threadIds1.map((threadId, threadIndex) => {
          let tmp = null;
          if (null != ChannelStore.getChannel(threadId)) {
            obj = { children: null };
            const obj2 = { threadId, threadIndex, threadCount: channel.threadCount, selected: selectedChannelId === threadId };
            obj.children = collapsedCategories(ThreadChannelDefault, obj2);
            tmp = collapsedCategories(View, obj, threadId);
          }
          return tmp;
        });
        obj29.children = items3;
        tmp13 = closure_19(closure_20, obj29);
        const tmp20 = section === guildChannels.recentsSectionNumber;
      } else if (tmp(1095).ChannelTypes.GUILD_VOICE === type) {
        const obj30 = { channel: record, selected: tmp5, subtitle: channel.subtitle };
        tmp13 = closure_18(selectedChannelId(16585), obj30);
      } else if (tmp(1095).ChannelTypes.GUILD_STAGE_VOICE === type) {
        const obj31 = { channel: record, selected: tmp5 };
        tmp13 = closure_18(selectedChannelId(16587), obj31);
      } else {
        if (tmp(1095).ChannelTypes.DM !== type) {
          if (tmp(1095).ChannelTypes.GROUP_DM !== type) {
            if (section === guildChannels.voiceChannelsSectionNumber) {
              if (record.isCategory()) {
                const obj32 = { channel: record, withMarginTop: true };
                let tmp9 = closure_18(tmp(16455).CategoryChannel, obj32);
              }
              tmp13 = tmp9;
            }
            if (tmpResult.isFavoritesGuildId(guildChannels.id)) {
              if (set2.has(record.type)) {
                const obj33 = { channel: record, selected: tmp5, muted: null, subtitle: null, isRulesChannel: false };
                ({ isMuted: obj3.muted, subtitle: obj3.subtitle } = channel);
                tmp9 = closure_18(selectedChannelId(16575), obj33);
              }
            }
            const obj34 = { channel: record, selected: tmp5 };
            tmp9 = closure_18(selectedChannelId(16574), obj34);
            tmpResult = tmp(2067);
          }
        }
        const obj35 = { channel: record, selected: tmp5 };
        tmp13 = closure_18(selectedChannelId(16589), obj35);
      }
    }
    return tmp13;
  }
};
export const getChannelListItemSize = function getChannelListItemSize(liveChannelNoticeHeight) {
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
      const tmp25 = closure_1_12(fontScale);
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
                  if (constants2.GUILD_VIBEGRATIONS !== row2) {
                    if (constants2.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row2) {
                      num4 = 48 + Divider.DIVIDER_HEIGHT;
                    } else {
                      num4 = liveChannelNoticeHeight.listViewportHeight;
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
    const tmp31 = closure_1_12(fontScale);
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
          num2 = map1(fontScale);
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
};
export const calculateVoiceSummary = function calculateVoiceSummary(arg0) {
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
};