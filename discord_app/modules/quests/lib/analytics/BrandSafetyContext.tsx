// === Module 11194: BrandSafetyContext ===

// Module 11194 (BrandSafetyContext)
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import ContentImpressionTrackerConstants from "ContentImpressionTrackerConstants" /* 11196 */;
import SidebarVisibilityMethodStore from "SidebarVisibilityMethodStore" /* 11195 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import UserStore from "UserStore" /* 1371 */;
import size from "module_2" /* 2 */;

({ getVisibleChannelIdsMethod: c3, getVisibleGuildIdsMethod: closure_4 } = SidebarVisibilityMethodStore);
let closure_10 = ContentImpressionTrackerConstants.MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN;
let result = size.fileFinishedImporting("modules/quests/lib/analytics/BrandSafetyContext.tsx");

export const getBrandSafetyContext = function getBrandSafetyContext(questContent) {
  let obj = require("QuestDataUtils");
  const result = obj.isBillableQuestContent(questContent);
  let obj1 = require("QuestDataUtils");
  const adContext = obj1.getAdContext(questContent);
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
                let obj = { id: null, name: null };
                ({ id: obj3.id, name: obj3.name } = tmp);
                if (null !== tmp.description) {
                  obj.description = tmp.description;
                }
                let tmp2 = null;
                if (null !== tmp.icon) {
                  obj = { id: null, icon: null, size: 44, canAnimate: true };
                  ({ id: obj2.id, icon: obj2.icon } = tmp);
                  let guildIconURL = obj.getGuildIconURL(obj);
                  if (guildIconURL == null) {
                    guildIconURL = null;
                  }
                  tmp2 = guildIconURL;
                }
                if (null !== tmp2) {
                  obj.icon_url = tmp2;
                }
                return obj;
              }
            });
            items = mapped.filter((item) => null !== item);
            const tmp4Result = tmp4();
          }
          obj = { guilds: items, channels: null };
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
            obj.channels = found;
            if (null != guildId) {
              obj.selected_guild_id = guildId;
            }
            let banner;
            if (guild != null) {
              banner = guild.banner;
            }
            let tmp15 = null;
            if (null != banner) {
              obj = { id: null, banner: null };
              ({ id: obj5.id, banner: obj5.banner } = guild);
              let guildBannerURL = AvatarUtilsDefault.getGuildBannerURL(obj, true);
              if (guildBannerURL == null) {
                guildBannerURL = null;
              }
              tmp15 = guildBannerURL;
            }
            if (null !== tmp15) {
              obj.selected_guild_banner_url = tmp15;
            }
            if (obj.guilds.length > closure_10) {
              const guilds = obj.guilds;
              obj.guilds = guilds.slice(0, tmp18);
              obj.truncated = true;
            }
            if (obj.channels.length > closure_10) {
              const channels = obj.channels;
              obj.channels = channels.slice(0, tmp18);
              obj.truncated = true;
            }
            obj1 = { brand_safety_context: null };
            const _JSON = JSON;
            obj1.brand_safety_context = JSON.stringify(obj);
            return obj1;
          }
          found = [];
        }
      }
    }
  }
  return null;
};