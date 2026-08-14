// discord_app/modules/channel_list_v2/native/renderRedesignChannelListItem.tsx
import "Divider";
import { View } from "CategoryChannel";
import getActiveStageChannelIds from "getActiveStageChannelIds";
import createChannelRecord from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import hairlineWidth from "hairlineWidth";
import { StaticChannelRoute } from "set";
import ChannelListGuildActionRow from "ChannelListGuildActionRow";
import jsxProd from "module_15407";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { renderDefaultEmpty } from "../../../lib/native/FastList.tsx";
import { computeSubtitle } from "../../guild_sidebar/ChannelListState.tsx";
import { VOICE_USER_SUMMARY_HEIGHT } from "../../guild_sidebar/native/VoiceUserSummary.tsx";
import { isFavoritesSection } from "ChannelListUtils.tsx";
import { Divider } from "components/Divider.tsx";
import { CategoryChannel } from "items/index.tsx";
import { ShowAllVoiceChannelsButton } from "items/ShowAllVoiceChannelsButton.tsx";

let c10;
let c5;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_6;
let map1;
let unpackModuleId;
const require = arg1;
({ THREADED_CHANNEL_TYPES: c5, THREAD_CHANNEL_TYPES: closure_6 } = createChannelRecord);
({ CATEGORY_MARGIN_TOP: c10, getScaledCategoryRowHeight: unpackModuleId, getScaledChannelRowHeight: closure_12, getScaledChannelSubtitleHeight: map1, STICKY_HEADER_MARGIN_BOTTOM: closure_14 } = hairlineWidth);
({ ChannelListChannelNoticeRow: closure_16, ChannelListGuildActionRow: closure_17 } = ChannelListGuildActionRow);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let obj = { nonChannelContainer: { marginHorizontal: 16 }, liveChannelNotice: null, gameClaimNotice: null, applicationAccountLinkNotice: null, showAllVoiceChannelsButtonLastShownChannelActive: null, showAllVoiceChannelsButtonLastShownChannelInactive: null };
obj = { marginTop: require("UserSummaryRow").LIVE_CHANNEL_NOTICE_MARGIN_TOP, marginBottom: require("UserSummaryRow").LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
obj[1] = obj;
obj = { marginTop: require("PX_8").GAME_CLAIM_NOTICE_MARGIN_TOP, marginBottom: require("PX_8").GAME_CLAIM_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
obj[2] = obj;
obj[3] = { marginTop: require("AccountLinkLargeBanner").ACCOUNT_LINK_BANNER_MARGIN_TOP, marginBottom: require("AccountLinkLargeBanner").ACCOUNT_LINK_BANNER_MARGIN_BOTTOM, marginHorizontal: 16 };
let obj1 = { marginTop: require("AccountLinkLargeBanner").ACCOUNT_LINK_BANNER_MARGIN_TOP, marginBottom: require("AccountLinkLargeBanner").ACCOUNT_LINK_BANNER_MARGIN_BOTTOM, marginHorizontal: 16 };
obj[4] = { marginHorizontal: 16, marginTop: require("Themes").space.PX_16 };
let obj2 = { marginHorizontal: 16, marginTop: require("Themes").space.PX_16 };
obj[5] = { marginHorizontal: 16, marginTop: require("Themes").space.PX_8 };
let obj3 = { marginHorizontal: 16, marginTop: require("Themes").space.PX_8 };
let result = require("getActiveStageChannelIds").fileFinishedImporting("modules/channel_list_v2/native/renderRedesignChannelListItem.tsx");

export const getFastListRecyclerKey = function getFastListRecyclerKey(guildChannels, arg1, arg2, arg3) {
  if (arg1 === renderDefaultEmpty.FastListItemTypes.ITEM) {
    if (null != arg3) {
      if (tmp(7057).SECTION_INDEX_CHANNEL_NOTICES === arg2) {
        const channelNoticeSection = guildChannels.getChannelNoticeSection();
        let id = channelNoticeSection.getRow(arg3);
      } else if (tmp(7057).SECTION_INDEX_GUILD_ACTIONS === arg2) {
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
  } else if (arg1 === tmp(8074).FastListItemTypes.SECTION) {
    const _HermesInternal = HermesInternal;
    return "" + guildChannels.id + ":SECTION:" + arg2;
  }
};
export const renderChannelListSectionHeader = function renderChannelListSectionHeader(guildChannels, section, recentlyActiveChannelsEnabled, arg3, categoryStyles, c9) {
  if (guildChannels.favoritesSectionNumber === section) {
    let obj = { name: null, withMarginTop: null, styles: null, isRefreshEnabled: null };
    const intl2 = getSystemLocale.intl;
    obj[0] = intl2.string(getSystemLocale.t.mlPMCy);
    obj[1] = arg3;
    obj[2] = categoryStyles;
    obj[3] = c9;
    return CategoryChannel.renderCategoryItem(obj);
  } else if (guildChannels.recentsSectionNumber === section) {
    const tmp22 = CategoryChannel;
    if (recentlyActiveChannelsEnabled) {
      obj = { guildId: null, withMarginTop: null };
      obj[0] = guildChannels.id;
      obj[1] = arg3;
      let tmp19Result = tmp19(tmp22.RecentlyActiveCategory, obj);
    } else {
      const obj1 = { guildId: null, channelIds: null, withMarginTop: null };
      obj1[0] = guildChannels.id;
      const categoryFromSection = guildChannels.getCategoryFromSection(section);
      let shownChannelAndThreadIds;
      if (categoryFromSection != null) {
        shownChannelAndThreadIds = categoryFromSection.getShownChannelAndThreadIds();
      }
      if (shownChannelAndThreadIds == null) {
        shownChannelAndThreadIds = [];
      }
      obj1[1] = shownChannelAndThreadIds;
      obj1[2] = arg3;
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
      tmp11 = callback4(Divider, {});
    }
    const items = [tmp11, ];
    let renderCategoryItemResult = null;
    if (flag) {
      let obj3 = CategoryChannel;
      const obj2 = { name: null, styles: null, isRefreshEnabled: null };
      const intl = getSystemLocale.intl;
      obj2[0] = intl.string(getSystemLocale.t["V/u9Dy"]);
      obj2[1] = categoryStyles;
      obj2[2] = c9;
      renderCategoryItemResult = obj3.renderCategoryItem(obj2);
    }
    obj3 = { children: null };
    items[1] = renderCategoryItemResult;
    obj3[0] = items;
    return closure_19(View, obj3);
  } else {
    obj = isFavoritesSection;
    if (obj.isNamedCategorySection(section)) {
      const namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(section);
      let tmp5 = null;
      if (null != namedCategoryFromSection) {
        const obj4 = { channel: null, withMarginTop: null };
        obj4[0] = namedCategoryFromSection.record;
        obj4[1] = arg3;
        tmp5 = callback4(tmp(15318).CategoryChannel, obj4);
      }
      return tmp5;
    } else {
      return null;
    }
    tmp = require;
  }
};
export const getChannelListSectionHeaderSize = function getChannelListSectionHeaderSize(guildChannels, section, fontScale, arg3) {
  const tmp = callback(fontScale);
  let num = 0;
  if (arg3) {
    num = closure_10;
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
export const renderChannelListSectionFooter = function renderChannelListSectionFooter(guildChannels, section, ref, result, c9) {
  let tmp = null;
  if (null != result) {
    let obj = { guildId: null, channels: null };
    obj[0] = guildChannels.id;
    obj[1] = result;
    tmp = callback4(CategoryChannel.RedesignVoiceUserSummary, obj);
  }
  if (computeSubtitle.SECTION_INDEX_CHANNEL_NOTICES === section) {
    return null;
  } else if (tmp5(7057).SECTION_INDEX_GUILD_ACTIONS === section) {
    let tmp19 = null;
    if (c9) {
      const guildActionSection = guildChannels.getGuildActionSection();
      let flag = false;
      if (!guildActionSection.isEmpty()) {
        const rows = guildActionSection.getRows();
        let tmp20 = 1 === rows.length;
        if (tmp20) {
          tmp20 = rows[0] === constants2.GUILD_SCHEDULED_EVENTS;
        }
        flag = !tmp20;
      }
      tmp19 = null;
      if (flag) {
        tmp19 = callback4(Divider, {});
      }
    }
    return tmp19;
  } else {
    if (guildChannels.favoritesSectionNumber !== section) {
      if (guildChannels.recentsSectionNumber !== section) {
        if (guildChannels.voiceChannelsSectionNumber === section) {
          const categoryFromSection = guildChannels.getCategoryFromSection(section);
          if (null == categoryFromSection) {
            obj = { render: false, lastShownChannelActive: false };
          } else {
            obj = { render: true, lastShownChannelActive: null };
            obj[1] = getVoiceStatesForGuild.countVoiceStatesForChannel(categoryFromSection.getShownChannelIds()[categoryFromSection.getShownChannelIds(categoryFromSection).length - 1]) > 0;
          }
          if (obj.render) {
            const items = [tmp, ];
            const obj1 = { children: null };
            const obj2 = { style: null, children: null };
            obj2[0] = tmp8 ? obj.showAllVoiceChannelsButtonLastShownChannelActive : obj.showAllVoiceChannelsButtonLastShownChannelInactive;
            const obj3 = { guildId: null, section: null, listRef: null };
            obj3[0] = guildChannels.id;
            obj3[1] = section;
            obj3[2] = ref;
            obj2[1] = callback4(ShowAllVoiceChannelsButton, obj3);
            items[1] = callback4(View, obj2);
            obj1[0] = items;
            return closure_19(View, obj1);
          }
        }
        let tmp9 = null;
        if (tmp5Result.isNamedCategorySection(section)) {
          tmp9 = tmp;
        }
        return tmp9;
      }
    }
    return callback4(Divider, {});
  }
};
export const getChannelListSectionHasFooterDivider = function getChannelListSectionHasFooterDivider(guildChannels, arg1, c9) {
  if (computeSubtitle.SECTION_INDEX_CHANNEL_NOTICES === arg1) {
    return false;
  } else if (tmp(7057).SECTION_INDEX_GUILD_ACTIONS === arg1) {
    let tmp3 = c9;
    if (c9) {
      const guildActionSection = guildChannels.getGuildActionSection();
      let flag3 = false;
      if (!guildActionSection.isEmpty()) {
        const rows = guildActionSection.getRows();
        let tmp4 = 1 === rows.length;
        if (tmp4) {
          tmp4 = rows[0] === constants2.GUILD_SCHEDULED_EVENTS;
        }
        flag3 = !tmp4;
      }
      tmp3 = flag3;
    }
    return tmp3;
  } else {
    if (guildChannels.favoritesSectionNumber !== arg1) {
      if (guildChannels.recentsSectionNumber !== arg1) {
        const voiceChannelsSectionNumber = guildChannels.voiceChannelsSectionNumber;
        return false;
      }
    }
    return true;
  }
  tmp = require;
};
export const getChannelListSectionFooterSize = function getChannelListSectionFooterSize(guildChannels, section, result, c9) {
  let marginTop;
  let showAllVoiceChannelsButtonLastShownChannelActive;
  let num = 0;
  if (null != result) {
    num = VOICE_USER_SUMMARY_HEIGHT.VOICE_USER_SUMMARY_HEIGHT;
  }
  if (computeSubtitle.SECTION_INDEX_CHANNEL_NOTICES === section) {
    return 0;
  } else if (tmp3(7057).SECTION_INDEX_GUILD_ACTIONS === section) {
    let num4 = 0;
    if (c9) {
      const guildActionSection = guildChannels.getGuildActionSection();
      let flag = false;
      if (!guildActionSection.isEmpty()) {
        const rows = guildActionSection.getRows();
        let tmp11 = 1 === rows.length;
        if (tmp11) {
          tmp11 = rows[0] === constants2.GUILD_SCHEDULED_EVENTS;
        }
        flag = !tmp11;
      }
      num4 = 0;
      if (flag) {
        num4 = tmp3(11742).DIVIDER_HEIGHT;
      }
    }
    return num4;
  } else {
    if (guildChannels.favoritesSectionNumber !== section) {
      if (guildChannels.recentsSectionNumber !== section) {
        if (guildChannels.voiceChannelsSectionNumber === section) {
          const categoryFromSection = guildChannels.getCategoryFromSection(section);
          if (null == categoryFromSection) {
            let obj = { render: false, lastShownChannelActive: false };
          } else {
            obj = { render: true, lastShownChannelActive: null };
            obj[1] = getVoiceStatesForGuild.countVoiceStatesForChannel(categoryFromSection.getShownChannelIds()[categoryFromSection.getShownChannelIds(categoryFromSection).length - 1]) > 0;
          }
          if (!obj.render) {
            return num;
          } else {
            showAllVoiceChannelsButtonLastShownChannelActive = obj;
            const sum = num + tmp3(4781).SMALL_BUTTON_HEIGHT;
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
    return tmp3(11742).DIVIDER_HEIGHT;
  }
};
export const renderChannelListItem = function renderChannelListItem(arg0) {
  let accountLinkApplication;
  let applicationAccountLinkMarkAsDismissed;
  let gameClaimMarkAsDismissed;
  let guild;
  let guildChannels;
  let row;
  let section;
  let selectedChannelId;
  let startApplicationAccountLinkAuthorization;
  ({ guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = arg0);
  if (channel(7057).SECTION_INDEX_CHANNEL_NOTICES === section) {
    const channelNoticeSection = guildChannels.getChannelNoticeSection();
    row = channelNoticeSection.getRow(row);
    let tmp58 = null;
    if (null != row) {
      if (constants.SPACER === row) {
        let obj = { style: null };
        obj = { height: null };
        obj[0] = closure_14;
        obj[0] = obj;
        tmp58 = callback4(View, obj);
      } else if (tmp59.GUILD_PROGRESS === row) {
        const obj1 = { style: null, children: null };
        obj1[0] = obj.nonChannelContainer;
        const obj2 = { guild: null };
        obj2[0] = guild;
        obj1[1] = callback4(selectedChannelId(15409), obj2);
        tmp58 = callback4(View, obj1);
      } else if (tmp59.MFA_WARNING === row) {
        const obj3 = { style: null, children: null };
        obj3[0] = obj.nonChannelContainer;
        obj3[1] = callback4(selectedChannelId(15411), {});
        tmp58 = callback4(View, obj3);
      } else if (tmp59.LIVE_CHANNEL_NOTICE === row) {
        const obj4 = { style: null, guild: null };
        obj4[0] = obj.liveChannelNotice;
        obj4[1] = guild;
        tmp58 = callback4(selectedChannelId(15399), obj4);
      } else if (tmp59.GAME_CLAIM === row) {
        let tmp65 = null;
        if (null != gameClaimMarkAsDismissed) {
          const obj5 = { style: null, children: null };
          obj5[0] = obj.gameClaimNotice;
          const obj6 = { guild: null, markAsDismissed: null };
          obj6[0] = guild;
          obj6[1] = gameClaimMarkAsDismissed;
          obj5[1] = callback4(selectedChannelId(15401), obj6);
          tmp65 = callback4(View, obj5);
        }
        tmp58 = tmp65;
      } else if (tmp59.APPLICATION_ACCOUNT_LINK === row) {
        let tmp60 = null;
        if (null != applicationAccountLinkMarkAsDismissed) {
          tmp60 = null;
          if (null != startApplicationAccountLinkAuthorization) {
            tmp60 = null;
            if (null != accountLinkApplication) {
              const obj7 = { style: null, children: null };
              obj7[0] = obj.applicationAccountLinkNotice;
              const obj8 = { markAsDismissed: null, startAuthorization: null, application: null };
              obj8[0] = applicationAccountLinkMarkAsDismissed;
              obj8[1] = startApplicationAccountLinkAuthorization;
              obj8[2] = accountLinkApplication;
              obj7[1] = callback4(selectedChannelId(15405), obj8);
              tmp60 = callback4(View, obj7);
            }
          }
        }
        tmp58 = tmp60;
      } else {
        tmp58 = null;
        if (tmp59.FAVORITES_SUGGESTIONS === row) {
          tmp58 = callback4(selectedChannelId(15413), {});
        }
      }
    }
    return tmp58;
  } else if (tmp(7057).SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const row1 = guildActionSection.getRow(row);
    let tmp48Result = null;
    if (null != row1) {
      if (constants2.GUILD_ROLE_SUBSCRIPTIONS === row1) {
        const obj9 = { guild: null, selected: null };
        obj9[0] = guild;
        obj9[1] = selectedChannelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS;
        tmp48Result = callback4(selectedChannelId(15417), obj9);
      } else if (tmp28.GUILD_HOME === row1) {
        const obj10 = { guild: null, selected: null };
        obj10[0] = guild;
        obj10[1] = selectedChannelId === StaticChannelRoute.GUILD_HOME;
        tmp48Result = callback4(selectedChannelId(15419), obj10);
      } else if (tmp28.CHANNELS_AND_ROLES === row1) {
        const obj11 = { guild: null, selected: null };
        obj11[0] = guild;
        let tmp49 = selectedChannelId === StaticChannelRoute.CHANNEL_BROWSER;
        if (!tmp49) {
          tmp49 = selectedChannelId === StaticChannelRoute.CUSTOMIZE_COMMUNITY;
        }
        obj11[1] = tmp49;
        tmp48Result = callback4(tmp(15420).GuildRolesAndChannelsRow, obj11);
        const tmp48 = callback4;
      } else if (tmp28.GUILD_DIRECTORY === row1) {
        const obj12 = { guildId: null, selected: null };
        obj12[0] = guild.id;
        obj12[1] = selectedChannelId === directoryChannelIds.getDirectoryChannelIds(guild.id)[0];
        tmp48Result = callback4(selectedChannelId(15421), obj12);
      } else if (tmp28.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row1) {
        const obj13 = { children: null };
        const obj14 = { style: null, children: null };
        obj14[0] = obj.nonChannelContainer;
        const obj15 = { guildId: null };
        obj15[0] = guild.id;
        obj14[1] = callback4(tmp(15422).NewMemberActionsProgress, obj15);
        const items = [callback4(View, obj14), callback4(selectedChannelId(11742), {})];
        obj13[0] = items;
        tmp48Result = callback5(View, obj13);
      } else if (tmp28.GUILD_HUB_HEADER_OPTIONS === row1) {
        const obj16 = { guild: null };
        obj16[0] = guild;
        tmp48Result = callback4(selectedChannelId(15423), obj16);
      } else if (tmp28.GUILD_MOD_DASH_MEMBER_SAFETY === row1) {
        const obj17 = { guild: null, selected: null };
        obj17[0] = guild;
        obj17[1] = selectedChannelId === StaticChannelRoute.MEMBER_SAFETY;
        tmp48Result = callback4(selectedChannelId(15426), obj17);
      } else if (tmp28.GUILD_BOOSTS === row1) {
        const obj18 = { guildId: null };
        obj18[0] = guild.id;
        tmp48Result = callback4(selectedChannelId(15428), obj18);
      } else if (tmp28.GUILD_PREMIUM_PROGRESS_BAR === row1) {
        const obj19 = { children: null };
        const obj20 = { guildId: null };
        obj20[0] = guild.id;
        const items1 = [callback4(selectedChannelId(15431), obj20), callback4(selectedChannelId(11742), {})];
        obj19[0] = items1;
        tmp48Result = callback5(View, obj19);
      } else {
        tmp48Result = null;
        if (tmp28.GUILD_SCHEDULED_EVENTS !== row1) {
          tmp48Result = null;
          if (tmp28.GUILD_FAVORITES !== row1) {
            tmp48Result = null;
            if (tmp28.GUILD_CHANNEL_LIST_OPT_IN_NOTICE !== row1) {
              tmp48Result = null;
              if (tmp28.GUILD_SHOP !== row1) {
                const BROWSE_CHANNELS = tmp28.BROWSE_CHANNELS;
                tmp48Result = null;
              }
            }
          }
        }
      }
    }
    return tmp48Result;
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
      if (type === type) {
        const obj21 = { channel: null, selected: null, muted: null, subtitle: null, isRulesChannel: null, isSuggestedSection: null };
        obj21[0] = record;
        obj21[1] = tmp5;
        ({ isMuted: obj8[2], subtitle: obj8[3] } = channel);
        obj21[4] = guild.rulesChannelId === record.id;
        obj21[5] = section === guildChannels.recentsSectionNumber;
        const obj22 = { children: null };
        const items2 = [callback4(selectedChannelId(15435), obj21), ];
        const threadIds = channel.threadIds;
        items2[1] = threadIds.map((arg0, arg1) => {
          let tmp = null;
          if (null != outer1_7.getChannel(arg0)) {
            let obj = { children: null };
            obj = { threadId: null, threadIndex: null, threadCount: null, selected: null };
            obj[0] = arg0;
            obj[1] = arg1;
            obj[2] = channel.threadCount;
            obj[3] = selectedChannelId === arg0;
            obj[0] = outer1_18(selectedChannelId(outer1_2[36]), obj);
            tmp = outer1_18(outer1_3, obj, arg0);
          }
          return tmp;
        });
        obj22[0] = items2;
        tmp13 = callback5(closure_20, obj22);
        const tmp20 = section === guildChannels.recentsSectionNumber;
      } else if (tmp(692).ChannelTypes.GUILD_VOICE === type) {
        const obj23 = { channel: null, selected: null, subtitle: null };
        obj23[0] = record;
        obj23[1] = tmp5;
        obj23[2] = channel.subtitle;
        tmp13 = callback4(selectedChannelId(15445), obj23);
      } else if (tmp(692).ChannelTypes.GUILD_STAGE_VOICE === type) {
        const obj24 = { channel: null, selected: null };
        obj24[0] = record;
        obj24[1] = tmp5;
        tmp13 = callback4(selectedChannelId(15447), obj24);
      } else {
        if (tmp(692).ChannelTypes.DM !== type) {
          if (tmp(692).ChannelTypes.GROUP_DM !== type) {
            if (section === guildChannels.voiceChannelsSectionNumber) {
              if (record.isCategory()) {
                const obj25 = { channel: null, withMarginTop: true };
                obj25[0] = record;
                let tmp9 = callback4(tmp(15318).CategoryChannel, obj25);
              }
              tmp13 = tmp9;
            }
            if (tmpResult.isFavoritesGuildId(guildChannels.id)) {
              if (set2.has(record.type)) {
                const obj26 = { channel: null, selected: null, muted: null, subtitle: null, isRulesChannel: false };
                obj26[0] = record;
                obj26[1] = tmp5;
                ({ isMuted: obj3[2], subtitle: obj3[3] } = channel);
                tmp9 = callback4(selectedChannelId(15435), obj26);
              }
            }
            const obj27 = { channel: null, selected: null };
            obj27[0] = record;
            obj27[1] = tmp5;
            tmp9 = callback4(selectedChannelId(15450), obj27);
            tmpResult = tmp(1913);
          }
        }
        const obj28 = { channel: null, selected: null };
        obj28[0] = record;
        obj28[1] = tmp5;
        tmp13 = callback4(selectedChannelId(15449), obj28);
      }
    }
    return tmp13;
  }
};
export const getChannelListItemSize = function getChannelListItemSize(liveChannelNoticeHeight) {
  let favoritesSuggestionsNoticeHeight;
  let fontScale;
  let guildChannels;
  let isRefreshEnabled;
  let listViewportHeight;
  let row;
  let section;
  let voiceStates;
  ({ guildChannels, section, row, fontScale, voiceStates, favoritesSuggestionsNoticeHeight } = liveChannelNoticeHeight);
  if (favoritesSuggestionsNoticeHeight === undefined) {
    favoritesSuggestionsNoticeHeight = 0;
  }
  ({ listViewportHeight, isRefreshEnabled } = liveChannelNoticeHeight);
  if (computeSubtitle.SECTION_INDEX_CHANNEL_NOTICES === section) {
    const channelNoticeSection = guildChannels.getChannelNoticeSection();
    row = channelNoticeSection.getRow(row);
    if (constants.SPACER === row) {
      return closure_14;
    } else if (tmp28.GUILD_PROGRESS === row) {
      let tmpResult = tmp(15409);
      return tmpResult.getScaledGuildProgressButtonHeight(fontScale, isRefreshEnabled);
    } else if (tmp28.MFA_WARNING === row) {
      tmpResult = tmp(15411);
      return tmpResult.getScaledGuildMFAWarningHeight(fontScale);
    } else if (tmp28.LIVE_CHANNEL_NOTICE === row) {
      return liveChannelNoticeHeight.liveChannelNoticeHeight;
    } else if (tmp28.GAME_CLAIM === row) {
      return tmp(15401).getScaledGameClaimNoticeHeight(fontScale);
    } else if (tmp28.APPLICATION_ACCOUNT_LINK === row) {
      return tmp(15405).getScaledAccountLinkBannerHeight(fontScale);
    } else if (tmp28.FAVORITES_SUGGESTIONS === row) {
      return favoritesSuggestionsNoticeHeight;
    } else {
      return 0;
    }
  } else if (tmp(7057).SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const row1 = guildActionSection.getRow(row);
    let num4 = 0;
    if (null != row1) {
      const tmp25 = callback2(fontScale);
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
                  if (tmp26.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row1) {
                    num4 = 48 + tmp(11742).DIVIDER_HEIGHT;
                  } else {
                    num4 = listViewportHeight;
                    if (tmp26.GUILD_HUB_HEADER_OPTIONS !== row1) {
                      num4 = 0;
                      if (tmp26.GUILD_SCHEDULED_EVENTS !== row1) {
                        if (tmp26.GUILD_PREMIUM_PROGRESS_BAR === row1) {
                          num4 = tmp(15431).BOOST_PROGRESS_BAR_HEIGHT + tmp(11742).DIVIDER_HEIGHT;
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
    return num4;
  } else {
    const tmp31 = callback2(fontScale);
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
        if (tmp(692).ChannelTypes.GUILD_VOICE !== type) {
          if (tmp(692).ChannelTypes.GUILD_STAGE_VOICE !== type) {
            num = tmp31;
            if (tmp(692).ChannelTypes.DM !== type) {
              num = tmp31;
              if (tmp(692).ChannelTypes.GROUP_DM !== type) {
                if (tmp(692).ChannelTypes.PUBLIC_THREAD !== type) {
                  if (tmp(692).ChannelTypes.PRIVATE_THREAD !== type) {
                    if (section === guildChannels.voiceChannelsSectionNumber) {
                      if (record.isCategory()) {
                        let sum = callback(fontScale) + closure_10;
                      }
                      num = sum;
                    }
                    sum = tmp31;
                    if (tmpResult3.isFavoritesGuildId(guildChannels.id)) {
                      const hasItem = set2.has(record.type);
                      sum = tmp31;
                    }
                    tmpResult3 = tmp(1913);
                  }
                }
                const result = getVoiceStatesForGuild.countVoiceStatesForChannel(record.id);
                let sum1 = tmp31;
                if (result > 0) {
                  sum1 = tmp31 + result * tmp(15335).getVoiceUserHeight(fontScale);
                  const tmpResult4 = tmp(15335);
                }
                num = sum1;
              }
            }
          }
        }
        let num2 = 0;
        if (null != channel.subtitle) {
          num2 = callback3(fontScale);
        }
        const voiceUserHeight = tmp(15335).getVoiceUserHeight(fontScale);
        if (record.type === tmp(692).ChannelTypes.GUILD_STAGE_VOICE) {
          let participantCount = store.getParticipantCount(record.id, tmp(5204).StageChannelParticipantNamedIndex.SPEAKER);
        } else {
          participantCount = getVoiceStatesForGuild.countVoiceStatesForChannel(record.id);
        }
        let num3 = 0;
        if (record.type === tmp(692).ChannelTypes.GUILD_STAGE_VOICE) {
          num3 = 0;
          if (store.getParticipantCount(record.id, tmp(5204).StageChannelParticipantNamedIndex.AUDIENCE) > 0) {
            num3 = tmp(15333).getAudienceItemHeight(fontScale);
            const tmpResult6 = tmp(15333);
          }
        }
        let sum4 = tmp31;
        if (participantCount > 0) {
          const sum2 = tmp31 + num2;
          const sum3 = sum2 + tmp(15445).VOICE_USERS_MARGIN_TOP + voiceUserHeight * participantCount;
          sum4 = sum3 + tmp(15445).VOICE_USERS_MARGIN_BOTTOM + num3;
        }
        num = sum4;
        const tmpResult5 = tmp(15335);
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
  let obj = isFavoritesSection;
  if (!obj.isVoiceChannelsSection(section, guildChannels)) {
    if (section < tmp(7057).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
      return null;
    }
  }
  let tmpResult = tmp(15451);
  if (tmpResult.getSectionFooterConfig(guildChannels, optInChannelsEnabled, section).canHaveVoiceSummary) {
    const namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(section);
    if (null == namedCategoryFromSection) {
      return null;
    } else {
      tmpResult = tmp(15451);
      obj = { category: null, selectedChannelId: null, selectedVoiceChannelId: null, voiceStates: null };
      obj[0] = namedCategoryFromSection;
      obj[1] = selectedChannelId;
      obj[2] = selectedVoiceChannelId;
      obj[3] = voiceStates;
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