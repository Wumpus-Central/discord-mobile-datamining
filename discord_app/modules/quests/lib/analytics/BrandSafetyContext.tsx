// === Module 7228: BrandSafetyContext ===

// Module 7228 (BrandSafetyContext)
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import ContentImpressionTrackerConstants from "ContentImpressionTrackerConstants" /* 7230 */;
import SidebarVisibilityMethodStore from "SidebarVisibilityMethodStore" /* 7229 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel;

let c3;
let closure_4;
({ getVisibleChannelIdsMethod: c3, getVisibleGuildIdsMethod: closure_4 } = SidebarVisibilityMethodStore);
let closure_10 = ContentImpressionTrackerConstants.MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN;
let result = size.fileFinishedImporting("modules/quests/lib/analytics/BrandSafetyContext.tsx");

export const getBrandSafetyContext = function getBrandSafetyContext(questContent) {
  let closure_0;
  let obj = require("QuestDataUtils");
  const result = obj.isBillableQuestContent(questContent);
  let obj2 = require("QuestDataUtils");
  const adContext = obj2.getAdContext(questContent);
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
          let items;
          const guildId = SelectedGuildStore.getGuildId();
          let guild = null;
          if (null != guildId) {
            guild = GuildStore.getGuild(guildId);
          }
          if (undefined === tmp4) {
            items = [];
          } else {
            const tmp4Result = tmp4();
            _require = GuildStore.getGuilds();
            const mapped = tmp4Result.map((item) => {
              if (undefined === closure_0[item]) {
                return null;
              } else {
                const obj5 = { id: null, name: null };
                ({ id: obj3.id, name: obj3.name } = closure_0[item]);
                if (null !== closure_0[item].description) {
                  obj5.description = closure_0[item].description;
                }
                let tmp2 = null;
                if (null !== closure_0[item].icon) {
                  const obj6 = { id: null, icon: null, size: 44, canAnimate: true };
                  ({ id: obj2.id, icon: obj2.icon } = closure_0[item]);
                  const obj = AvatarUtilsDefault;
                  let guildIconURL = obj.getGuildIconURL(obj6);
                  if (guildIconURL == null) {
                    guildIconURL = null;
                  }
                  tmp2 = guildIconURL;
                }
                if (null !== tmp2) {
                  obj5.icon_url = tmp2;
                }
                return obj5;
              }
            });
            items = mapped.filter((item) => null !== item);
          }
          const obj3 = { guilds: items, channels: null };
          if (undefined !== tmp5) {
            let found;
            if (null != guild) {
              const tmp5Result = tmp5();
              const mapped1 = tmp5Result.map((item) => {
                let obj2;
                channel = channel.getChannel(item);
                if (undefined === channel) {
                  return null;
                } else {
                  const obj = { id: channel.id, name: obj2.computeChannelName(channel, UserStore, RelationshipStore) };
                  obj2 = closure_0(dependencyMap[9]);
                  if (channel.topic.length > 0) {
                    obj.channel_topic = channel.topic;
                  }
                  return obj;
                }
              });
              found = mapped1.filter((item) => null !== item);
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
              let obj6 = { id: null, banner: null };
              ({ id: obj5.id, banner: obj5.banner } = guild);
              const obj4 = AvatarUtilsDefault;
              let guildBannerURL = obj4.getGuildBannerURL(obj6, true);
              if (guildBannerURL == null) {
                guildBannerURL = null;
              }
              tmp15 = guildBannerURL;
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
            const _JSON = JSON;
            const obj9 = { brand_safety_context: JSON.stringify(obj3) };
            return obj9;
          }
          found = [];
        }
      }
    }
  }
  return null;
};