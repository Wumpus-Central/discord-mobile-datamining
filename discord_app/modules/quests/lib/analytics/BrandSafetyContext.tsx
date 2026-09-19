// === Module 7966: BrandSafetyContext ===

// Module 7966 (BrandSafetyContext)
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ContentImpressionTrackerConstants from "ContentImpressionTrackerConstants" /* 7968 */;
import SidebarVisibilityMethodStore from "SidebarVisibilityMethodStore" /* 7967 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildStore from "GuildStore" /* 2063 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4577 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ getVisibleChannelIdsMethod: c3, getVisibleGuildIdsMethod: closure_4 } = SidebarVisibilityMethodStore);
let closure_10 = ContentImpressionTrackerConstants.MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN;
let result = size.fileFinishedImporting("modules/quests/lib/analytics/BrandSafetyContext.tsx");

export const getBrandSafetyContext = function getBrandSafetyContext(questContent) {
  const result = require("QuestDataUtils").isBillableQuestContent(questContent);
  let obj = require("QuestDataUtils");
  const adContext = require("QuestDataUtils").getAdContext(questContent);
  const tmp4 = closure_4();
  const tmp5 = closure_3();
  let prop;
  if (adContext != null) {
    prop = adContext.is_campaign_ias_enabled;
  }
  if (prop) {
    if (result) {
      if (undefined !== tmp4) {
        if (undefined !== tmp5) {
          const guildId = SelectedGuildStore.getGuildId();
          let guild = null;
          if (null != guildId) {
            guild = GuildStore.getGuild(guildId);
          }
          if (tmp7) {
            let items = [];
          } else {
            _require = GuildStore.getGuilds();
            const mapped = tmp4().map((item) => {
              if (undefined === dependencyMap[item]) {
                return null;
              } else {
                const obj5 = { id: null, name: null };
                ({ id: obj3.id, name: obj3.name } = tmp);
                if (null !== tmp.description) {
                  obj5.description = tmp.description;
                }
                let tmp2 = null;
                if (null !== tmp.icon) {
                  ({ id: obj2.id, icon: obj2.icon } = tmp);
                  let guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 44, canAnimate: true });
                  if (guildIconURL == null) {
                    guildIconURL = null;
                  }
                  tmp2 = guildIconURL;
                  const obj6 = { id: null, icon: null, size: 44, canAnimate: true };
                }
                if (null !== tmp2) {
                  obj5.icon_url = tmp2;
                }
                return obj5;
              }
            });
            items = mapped.filter((item) => null !== item);
            const tmp4Result = tmp4();
          }
          const obj3 = { guilds: items, channels: null };
          if (!tmp8) {
            if (null != guild) {
              const mapped1 = tmp5().map((item) => {
                channel = channel.getChannel(item);
                if (undefined === channel) {
                  return null;
                } else {
                  const obj = { id: channel.id, name: dependencyMap(closure_1_2[9]).computeChannelName(channel, UserStore, RelationshipStore) };
                  if (channel.topic.length > 0) {
                    obj.channel_topic = channel.topic;
                  }
                  return obj;
                }
              });
              let found = mapped1.filter((item) => null !== item);
              const tmp5Result = tmp5();
            }
            obj3.channels = found;
            if (null != guildId) {
              obj3.selected_guild_id = guildId;
            }
            let banner;
            if (guild != null) {
              banner = guild.banner;
            }
            let tmp15 = null;
            if (null != banner) {
              ({ id: obj5.id, banner: obj5.banner } = guild);
              let guildBannerURL = AvatarUtilsDefault.getGuildBannerURL({ id: null, banner: null }, true);
              if (guildBannerURL == null) {
                guildBannerURL = null;
              }
              tmp15 = guildBannerURL;
              let obj6 = { id: null, banner: null };
            }
            if (null !== tmp15) {
              obj3.selected_guild_banner_url = tmp15;
            }
            if (obj3.guilds.length > closure_10) {
              const guilds = obj3.guilds;
              obj3.guilds = guilds.slice(0, closure_10);
              obj3.truncated = true;
            }
            if (obj3.channels.length > closure_10) {
              const channels = obj3.channels;
              obj3.channels = channels.slice(0, closure_10);
              obj3.truncated = true;
            }
            const obj9 = { brand_safety_context: null };
            const _JSON = JSON;
            obj9.brand_safety_context = JSON.stringify(obj3);
            return obj9;
          }
          found = [];
        }
      }
    }
  }
  return null;
};