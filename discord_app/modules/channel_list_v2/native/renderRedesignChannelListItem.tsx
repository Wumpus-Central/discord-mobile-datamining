// === Module 16189: renderRedesignChannelListItem ===

// Module 16189 (renderRedesignChannelListItem)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import FastList from "FastList" /* 7072 */;
import ChannelListState from "ChannelListState" /* 7528 */;
import Divider from "Divider" /* 12295 */;
import CategoryChannel from "CategoryChannel" /* 16105 */;
import ThreadChannelDefault from "ThreadChannel" /* 16113 */;
import VoiceUserSummary from "VoiceUserSummary" /* 16130 */;
import channel_list_v2_ChannelListUtils from "channel_list_v2/ChannelListUtils" /* 16183 */;
import ShowAllVoiceChannelsButtonDefault from "ShowAllVoiceChannelsButton" /* 16195 */;
import noop from "module_19" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5418 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;

const DividerDefault = Divider;

require = fn;
const View = fn(17).View;
const ChannelRecord = fn(1961);
({ THREADED_CHANNEL_TYPES: hasOwnProperty, THREAD_CHANNEL_TYPES: metroRequire } = ChannelRecord);
const RedesignChannelListConstants = fn(10118);
({ CATEGORY_MARGIN_TOP: c10, getScaledCategoryRowHeight: closure_11, getScaledChannelRowHeight: closure_12, getScaledChannelSubtitleHeight: map1, STICKY_HEADER_MARGIN_BOTTOM: closure_14 } = RedesignChannelListConstants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const GuildSidebarConstants = fn(7534);
({ ChannelListChannelNoticeRow: closure_16, ChannelListGuildActionRow: closure_17 } = GuildSidebarConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let gameClaimNotice = { nonChannelContainer: { marginHorizontal: 16 }, liveChannelNotice: null, gameClaimNotice: null, applicationAccountLinkNotice: null, showAllVoiceChannelsButtonLastShownChannelActive: null, showAllVoiceChannelsButtonLastShownChannelInactive: null };
gameClaimNotice = { marginTop: fn(16188).LIVE_CHANNEL_NOTICE_MARGIN_TOP, marginBottom: fn(16188).LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
gameClaimNotice.liveChannelNotice = gameClaimNotice;
gameClaimNotice = { marginTop: fn(16190).GAME_CLAIM_NOTICE_MARGIN_TOP, marginBottom: fn(16190).GAME_CLAIM_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
gameClaimNotice.gameClaimNotice = gameClaimNotice;
gameClaimNotice.applicationAccountLinkNotice = { marginTop: fn(16194).ACCOUNT_LINK_BANNER_MARGIN_TOP, marginBottom: fn(16194).ACCOUNT_LINK_BANNER_MARGIN_BOTTOM, marginHorizontal: 16 };
let obj1 = { marginTop: fn(16194).ACCOUNT_LINK_BANNER_MARGIN_TOP, marginBottom: fn(16194).ACCOUNT_LINK_BANNER_MARGIN_BOTTOM, marginHorizontal: 16 };
gameClaimNotice.showAllVoiceChannelsButtonLastShownChannelActive = { marginHorizontal: 16, marginTop: nativeDefault.space.PX_16 };
let obj2 = { marginHorizontal: 16, marginTop: nativeDefault.space.PX_16 };
gameClaimNotice.showAllVoiceChannelsButtonLastShownChannelInactive = { marginHorizontal: 16, marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/renderRedesignChannelListItem.tsx");

export const getFastListRecyclerKey = function getFastListRecyclerKey(guildChannels, arg1, arg2, arg3) {
  if (arg1 === FastList.FastListItemTypes.ITEM) {
    if (null != arg3) {
      if (tmp(7528).SECTION_INDEX_CHANNEL_NOTICES === arg2) {
        const channelNoticeSection = guildChannels.getChannelNoticeSection();
        let id = channelNoticeSection.getRow(arg3);
      } else if (tmp(7528).SECTION_INDEX_GUILD_ACTIONS === arg2) {
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
  } else if (arg1 === tmp(7072).FastListItemTypes.SECTION) {
    const _HermesInternal = HermesInternal;
    return "" + guildChannels.id + ":SECTION:" + arg2;
  }
};
export const renderChannelListSectionHeader = function renderChannelListSectionHeader(guildChannels, section, recentlyActiveChannelsEnabled, withMarginTop, categoryStyles) {
  if (guildChannels.favoritesSectionNumber === section) {
    obj = { name: null, withMarginTop: null, styles: null };
    const intl2 = util.intl;
    obj.name = intl2.string(util.t.mlPMCy);
    obj.withMarginTop = withMarginTop;
    obj.styles = categoryStyles;
    return CategoryChannel.renderCategoryItem(obj);
  } else if (guildChannels.recentsSectionNumber === section) {
    const tmp22 = CategoryChannel;
    if (recentlyActiveChannelsEnabled) {
      obj = { guildId: guildChannels.id, withMarginTop };
      let tmp19Result = tmp19(tmp22.RecentlyActiveCategory, obj);
    } else {
      const obj1 = { guildId: guildChannels.id, channelIds: null, withMarginTop: null };
      const categoryFromSection = guildChannels.getCategoryFromSection(section);
      let shownChannelAndThreadIds;
      if (categoryFromSection != null) {
        shownChannelAndThreadIds = categoryFromSection.getShownChannelAndThreadIds();
      }
      if (shownChannelAndThreadIds == null) {
        shownChannelAndThreadIds = [];
      }
      obj1.channelIds = shownChannelAndThreadIds;
      obj1.withMarginTop = withMarginTop;
      tmp19Result = tmp19(tmp22.SuggestedCategory, obj1);
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
      let obj3 = CategoryChannel;
      const obj2 = { name: null, styles: null };
      const intl = util.intl;
      obj2.name = intl.string(util.t["V/u9Dy"]);
      obj2.styles = categoryStyles;
      renderCategoryItemResult = obj3.renderCategoryItem(obj2);
    }
    obj3 = { children: null };
    items[1] = renderCategoryItemResult;
    obj3.children = items;
    return closure_1_19(View, obj3);
  } else {
    obj = channel_list_v2_ChannelListUtils;
    if (obj.isNamedCategorySection(section)) {
      const namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(section);
      let tmp5 = null;
      if (null != namedCategoryFromSection) {
        const obj4 = { channel: namedCategoryFromSection.record, withMarginTop };
        tmp5 = collapsedCategories(tmp(16105).CategoryChannel, obj4);
      }
      return tmp5;
    } else {
      return null;
    }
    tmp = require;
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
  } else if (tmp5(7528).SECTION_INDEX_GUILD_ACTIONS === section) {
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
            obj = { render: false, lastShownChannelActive: false };
          } else {
            obj = { render: true, lastShownChannelActive: SortedVoiceStateStore.countVoiceStatesForChannel(categoryFromSection.getShownChannelIds()[categoryFromSection.getShownChannelIds(categoryFromSection).length - 1]) > 0 };
          }
          if (obj.render) {
            const items = [tmp, ];
            const obj1 = { children: null };
            const obj2 = { style: tmp8 ? obj.showAllVoiceChannelsButtonLastShownChannelActive : obj.showAllVoiceChannelsButtonLastShownChannelInactive, children: null };
            const obj3 = { guildId: guildChannels.id, section, listRef: ref };
            obj2.children = collapsedCategories(ShowAllVoiceChannelsButtonDefault, obj3);
            items[1] = collapsedCategories(View, obj2);
            obj1.children = items;
            return closure_1_19(View, obj1);
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
  } else if (tmp3(7528).SECTION_INDEX_GUILD_ACTIONS === section) {
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
      num5 = tmp3(12295).DIVIDER_HEIGHT;
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
            obj = { render: true, lastShownChannelActive: SortedVoiceStateStore.countVoiceStatesForChannel(categoryFromSection.getShownChannelIds()[categoryFromSection.getShownChannelIds(categoryFromSection).length - 1]) > 0 };
          }
          if (!obj.render) {
            return num;
          } else {
            showAllVoiceChannelsButtonLastShownChannelActive = obj;
            const sum = num + tmp3(4980).SMALL_BUTTON_HEIGHT;
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
    return tmp3(12295).DIVIDER_HEIGHT;
  }
};
export const renderChannelListItem = function renderChannelListItem(arg0) {
  ({ guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = arg0);
  if (channel(7528).SECTION_INDEX_CHANNEL_NOTICES === section) {
    const channelNoticeSection = guildChannels.getChannelNoticeSection();
    row = channelNoticeSection.getRow(row);
    let tmp65 = null;
    if (null != row) {
      if (constants.SPACER === row) {
        let style = { style: null };
        style = { height };
        style.style = style;
        tmp65 = closure_18(View, style);
      } else if (tmp66.GUILD_PROGRESS === row) {
        const obj1 = { style: style.nonChannelContainer, children: null };
        const obj2 = { guild };
        obj1.children = closure_18(selectedChannelId(16197), obj2);
        tmp65 = closure_18(View, obj1);
      } else if (tmp66.MFA_WARNING === row) {
        const obj3 = { style: style.nonChannelContainer, children: closure_18(selectedChannelId(16199), {}) };
        tmp65 = closure_18(View, obj3);
      } else if (tmp66.LIVE_CHANNEL_NOTICE === row) {
        const obj4 = { style: style.liveChannelNotice, guild };
        tmp65 = closure_18(selectedChannelId(16188), obj4);
      } else if (tmp66.GAME_CLAIM === row) {
        let tmp72 = null;
        if (null != gameClaimMarkAsDismissed) {
          const obj5 = { style: style.gameClaimNotice, children: null };
          const obj6 = { guild, markAsDismissed: gameClaimMarkAsDismissed };
          obj5.children = closure_18(selectedChannelId(16190), obj6);
          tmp72 = closure_18(View, obj5);
        }
        tmp65 = tmp72;
      } else if (tmp66.APPLICATION_ACCOUNT_LINK === row) {
        let tmp67 = null;
        if (null != applicationAccountLinkMarkAsDismissed) {
          tmp67 = null;
          if (null != startApplicationAccountLinkAuthorization) {
            tmp67 = null;
            if (null != accountLinkApplication) {
              const obj7 = { style: style.applicationAccountLinkNotice, children: null };
              const obj8 = { markAsDismissed: applicationAccountLinkMarkAsDismissed, startAuthorization: startApplicationAccountLinkAuthorization, application: accountLinkApplication };
              obj7.children = closure_18(selectedChannelId(16194), obj8);
              tmp67 = closure_18(View, obj7);
            }
          }
        }
        tmp65 = tmp67;
      } else {
        tmp65 = null;
        if (tmp66.FAVORITES_SUGGESTIONS === row) {
          tmp65 = closure_18(selectedChannelId(16201), {});
        }
      }
    }
    return tmp65;
  } else if (tmp(7528).SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const row1 = guildActionSection.getRow(row);
    let tmp55Result = null;
    if (null != row1) {
      if (constants2.GUILD_ROLE_SUBSCRIPTIONS === row1) {
        const obj9 = { guild, selected: selectedChannelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS };
        tmp55Result = closure_18(selectedChannelId(16205), obj9);
      } else if (tmp32.GUILD_HOME === row1) {
        const obj10 = { guild, selected: selectedChannelId === StaticChannelRoute.GUILD_HOME };
        tmp55Result = closure_18(selectedChannelId(16207), obj10);
      } else if (tmp32.CHANNELS_AND_ROLES === row1) {
        const obj11 = { guild, selected: null };
        let tmp56 = selectedChannelId === StaticChannelRoute.CHANNEL_BROWSER;
        if (!tmp56) {
          tmp56 = selectedChannelId === StaticChannelRoute.CUSTOMIZE_COMMUNITY;
        }
        obj11.selected = tmp56;
        tmp55Result = closure_18(tmp(16208).GuildRolesAndChannelsRow, obj11);
      } else if (tmp32.GUILD_DIRECTORY === row1) {
        const obj12 = { guildId: guild.id, selected: selectedChannelId === GuildChannelStore.getDirectoryChannelIds(guild.id)[0] };
        tmp55Result = closure_18(selectedChannelId(16209), obj12);
      } else if (tmp32.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row1) {
        const obj13 = { children: null };
        const obj14 = { style: style.nonChannelContainer, children: null };
        const obj15 = { guildId: guild.id };
        obj14.children = closure_18(tmp(16210).NewMemberActionsProgress, obj15);
        const items = [closure_18(View, obj14), closure_18(selectedChannelId(12295), {})];
        obj13.children = items;
        tmp55Result = closure_19(View, obj13);
      } else if (tmp32.GUILD_HUB_HEADER_OPTIONS === row1) {
        const obj16 = { guild };
        tmp55Result = closure_18(selectedChannelId(16211), obj16);
      } else if (tmp32.GUILD_MOD_DASH_MEMBER_SAFETY === row1) {
        const obj17 = { guild, selected: selectedChannelId === StaticChannelRoute.MEMBER_SAFETY };
        tmp55Result = closure_18(selectedChannelId(16214), obj17);
      } else if (tmp32.GUILD_VIBEGRATIONS === row1) {
        const obj18 = { guild, selected: selectedChannelId === StaticChannelRoute.VIBEGRATIONS };
        tmp55Result = closure_18(selectedChannelId(16216), obj18);
      } else if (tmp32.GUILD_BOOSTS === row1) {
        const obj19 = { guildId: guild.id };
        tmp55Result = closure_18(selectedChannelId(16217), obj19);
      } else if (tmp32.GUILD_PREMIUM_PROGRESS_BAR === row1) {
        const obj20 = { children: null };
        const obj21 = { guildId: guild.id };
        const items1 = [closure_18(selectedChannelId(16220), obj21), closure_18(selectedChannelId(12295), {})];
        obj20.children = items1;
        tmp55Result = closure_19(View, obj20);
      } else {
        tmp55Result = null;
        if (tmp32.GUILD_SCHEDULED_EVENTS !== row1) {
          tmp55Result = null;
          if (tmp32.GUILD_FAVORITES !== row1) {
            tmp55Result = null;
            if (tmp32.GUILD_CHANNEL_LIST_OPT_IN_NOTICE !== row1) {
              tmp55Result = null;
              if (tmp32.GUILD_SHOP !== row1) {
                const BROWSE_CHANNELS = tmp32.BROWSE_CHANNELS;
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
      let type = null;
      if (set.has(record.type)) {
        type = record.type;
      }
      type = record.type;
      if (tmp(1094).ChannelTypes.GUILD_APP === type) {
        const obj22 = { children: null };
        const obj23 = { channel: record, selected: tmp5 };
        const items2 = [closure_18(selectedChannelId(16224), obj23), ];
        closure_129_0 = channel;
        closure_129_1 = selectedChannelId;
        const threadIds = channel.threadIds;
        items2[1] = threadIds.map((threadId, threadIndex) => {
          let tmp = null;
          if (null != ChannelStore.getChannel(threadId)) {
            obj = { children: null };
            obj = { threadId, threadIndex, threadCount: channel.threadCount, selected: selectedChannelId === threadId };
            obj.children = collapsedCategories(ThreadChannelDefault, obj);
            tmp = collapsedCategories(View, obj, threadId);
          }
          return tmp;
        });
        obj22.children = items2;
        tmp13 = closure_19(closure_20, obj22);
      } else if (type === type) {
        const obj24 = { channel: record, selected: tmp5, muted: null, subtitle: null, isRulesChannel: null, isSuggestedSection: null };
        ({ isMuted: obj8.muted, subtitle: obj8.subtitle } = channel);
        obj24.isRulesChannel = guild.rulesChannelId === record.id;
        obj24.isSuggestedSection = section === guildChannels.recentsSectionNumber;
        const obj25 = { children: null };
        const items3 = [closure_18(selectedChannelId(16225), obj24), ];
        const threadIds1 = channel.threadIds;
        items3[1] = threadIds1.map((threadId, threadIndex) => {
          let tmp = null;
          if (null != ChannelStore.getChannel(threadId)) {
            obj = { children: null };
            obj = { threadId, threadIndex, threadCount: channel.threadCount, selected: selectedChannelId === threadId };
            obj.children = collapsedCategories(ThreadChannelDefault, obj);
            tmp = collapsedCategories(View, obj, threadId);
          }
          return tmp;
        });
        obj25.children = items3;
        tmp13 = closure_19(closure_20, obj25);
        const tmp20 = section === guildChannels.recentsSectionNumber;
      } else if (tmp(1094).ChannelTypes.GUILD_VOICE === type) {
        const obj26 = { channel: record, selected: tmp5, subtitle: channel.subtitle };
        tmp13 = closure_18(selectedChannelId(16235), obj26);
      } else if (tmp(1094).ChannelTypes.GUILD_STAGE_VOICE === type) {
        const obj27 = { channel: record, selected: tmp5 };
        tmp13 = closure_18(selectedChannelId(16237), obj27);
      } else {
        if (tmp(1094).ChannelTypes.DM !== type) {
          if (tmp(1094).ChannelTypes.GROUP_DM !== type) {
            if (section === guildChannels.voiceChannelsSectionNumber) {
              if (record.isCategory()) {
                const obj28 = { channel: record, withMarginTop: true };
                let tmp9 = closure_18(tmp(16105).CategoryChannel, obj28);
              }
              tmp13 = tmp9;
            }
            if (tmpResult.isFavoritesGuildId(guildChannels.id)) {
              if (set2.has(record.type)) {
                const obj29 = { channel: record, selected: tmp5, muted: null, subtitle: null, isRulesChannel: false };
                ({ isMuted: obj3.muted, subtitle: obj3.subtitle } = channel);
                tmp9 = closure_18(selectedChannelId(16225), obj29);
              }
            }
            const obj30 = { channel: record, selected: tmp5 };
            tmp9 = closure_18(selectedChannelId(16224), obj30);
            tmpResult = tmp(1982);
          }
        }
        const obj31 = { channel: record, selected: tmp5 };
        tmp13 = closure_18(selectedChannelId(16239), obj31);
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
    row = channelNoticeSection.getRow(row);
    if (constants.SPACER === row) {
      return height;
    } else if (tmp28.GUILD_PROGRESS === row) {
      let tmpResult = tmp(16197);
      return tmpResult.getScaledGuildProgressButtonHeight(fontScale);
    } else if (tmp28.MFA_WARNING === row) {
      tmpResult = tmp(16199);
      return tmpResult.getScaledGuildMFAWarningHeight(fontScale);
    } else if (tmp28.LIVE_CHANNEL_NOTICE === row) {
      return liveChannelNoticeHeight.liveChannelNoticeHeight;
    } else if (tmp28.GAME_CLAIM === row) {
      return tmp(16190).getScaledGameClaimNoticeHeight(fontScale);
    } else if (tmp28.APPLICATION_ACCOUNT_LINK === row) {
      return tmp(16194).getScaledAccountLinkBannerHeight(fontScale);
    } else if (tmp28.FAVORITES_SUGGESTIONS === row) {
      return favoritesSuggestionsNoticeHeight;
    } else {
      return 0;
    }
  } else if (tmp(7528).SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const row1 = guildActionSection.getRow(row);
    let num4 = 0;
    if (null != row1) {
      const tmp25 = closure_1_12(fontScale);
      num4 = tmp25;
      if (constants2.GUILD_ROLE_SUBSCRIPTIONS !== row1) {
        num4 = tmp25;
        if (tmp26.GUILD_HOME !== row1) {
          num4 = tmp25;
          if (tmp26.CHANNELS_AND_ROLES !== row1) {
            num4 = tmp25;
            if (tmp26.GUILD_DIRECTORY !== row1) {
              num4 = tmp25;
              if (tmp26.GUILD_MOD_DASH_MEMBER_SAFETY !== row1) {
                num4 = tmp25;
                if (tmp26.GUILD_BOOSTS !== row1) {
                  num4 = tmp25;
                  if (tmp26.GUILD_VIBEGRATIONS !== row1) {
                    if (tmp26.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row1) {
                      num4 = 48 + tmp(12295).DIVIDER_HEIGHT;
                    } else {
                      num4 = liveChannelNoticeHeight.listViewportHeight;
                      if (tmp26.GUILD_HUB_HEADER_OPTIONS !== row1) {
                        num4 = 0;
                        if (tmp26.GUILD_SCHEDULED_EVENTS !== row1) {
                          if (tmp26.GUILD_PREMIUM_PROGRESS_BAR === row1) {
                            num4 = tmp(16220).BOOST_PROGRESS_BAR_HEIGHT + tmp(12295).DIVIDER_HEIGHT;
                          } else {
                            num4 = 0;
                            if (tmp26.GUILD_FAVORITES !== row1) {
                              num4 = 0;
                              if (tmp26.GUILD_CHANNEL_LIST_OPT_IN_NOTICE !== row1) {
                                num4 = 0;
                                if (tmp26.GUILD_SHOP !== row1) {
                                  const BROWSE_CHANNELS = tmp26.BROWSE_CHANNELS;
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
      let type = null;
      if (set.has(record.type)) {
        type = record.type;
      }
      type = record.type;
      if (type === type) {
        num = tmp31 + channel.threadCount * tmp31;
      } else {
        if (tmp(1094).ChannelTypes.GUILD_VOICE !== type) {
          if (tmp(1094).ChannelTypes.GUILD_STAGE_VOICE !== type) {
            num = tmp31;
            if (tmp(1094).ChannelTypes.DM !== type) {
              num = tmp31;
              if (tmp(1094).ChannelTypes.GROUP_DM !== type) {
                if (tmp(1094).ChannelTypes.PUBLIC_THREAD !== type) {
                  if (tmp(1094).ChannelTypes.PRIVATE_THREAD !== type) {
                    if (section === guildChannels.voiceChannelsSectionNumber) {
                      if (record.isCategory()) {
                        let sum = closure_1_11(fontScale) + closure_1_10;
                      }
                      num = sum;
                    }
                    sum = tmp31;
                    if (tmpResult3.isFavoritesGuildId(guildChannels.id)) {
                      const hasItem = set2.has(record.type);
                      sum = tmp31;
                    }
                    tmpResult3 = tmp(1982);
                  }
                }
                const result = SortedVoiceStateStore.countVoiceStatesForChannel(record.id);
                let sum1 = tmp31;
                if (result > 0) {
                  sum1 = tmp31 + result * tmp(16123).getVoiceUserHeight(fontScale);
                  const tmpResult4 = tmp(16123);
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
        const voiceUserHeight = tmp(16123).getVoiceUserHeight(fontScale);
        if (record.type === tmp(1094).ChannelTypes.GUILD_STAGE_VOICE) {
          let participantCount = StageChannelParticipantStore.getParticipantCount(record.id, tmp(5425).StageChannelParticipantNamedIndex.SPEAKER);
        } else {
          participantCount = SortedVoiceStateStore.countVoiceStatesForChannel(record.id);
        }
        let num3 = 0;
        if (record.type === tmp(1094).ChannelTypes.GUILD_STAGE_VOICE) {
          num3 = 0;
          if (StageChannelParticipantStore.getParticipantCount(record.id, tmp(5425).StageChannelParticipantNamedIndex.AUDIENCE) > 0) {
            num3 = tmp(16121).getAudienceItemHeight(fontScale);
            const tmpResult6 = tmp(16121);
          }
        }
        let sum4 = tmp31;
        if (participantCount > 0) {
          const sum2 = tmp31 + num2;
          const sum3 = sum2 + tmp(16235).VOICE_USERS_MARGIN_TOP + voiceUserHeight * participantCount;
          sum4 = sum3 + tmp(16235).VOICE_USERS_MARGIN_BOTTOM + num3;
        }
        num = sum4;
        const tmpResult5 = tmp(16123);
      }
    }
    return num;
  }
};
export const calculateVoiceSummary = function calculateVoiceSummary(arg0) {
  ({ guildChannels, section } = arg0);
  ({ optInChannelsEnabled, voiceStates, selectedChannelId, selectedVoiceChannelId } = arg0);
  obj = channel_list_v2_ChannelListUtils;
  if (!obj.isVoiceChannelsSection(section, guildChannels)) {
    if (section < tmp(7528).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
      return null;
    }
  }
  let tmpResult = tmp(16240);
  if (tmpResult.getSectionFooterConfig(guildChannels, optInChannelsEnabled, section).canHaveVoiceSummary) {
    const namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(section);
    if (null == namedCategoryFromSection) {
      return null;
    } else {
      tmpResult = tmp(16240);
      obj = { category: namedCategoryFromSection, selectedChannelId, selectedVoiceChannelId, voiceStates };
      const sectionFooterActiveVoiceChannels = tmpResult.getSectionFooterActiveVoiceChannels(obj);
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