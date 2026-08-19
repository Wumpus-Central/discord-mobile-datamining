// discord_app/modules/quests/lib/analytics/BrandSafetyContext.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getAvatarURLDefault from "../../../../utils/AvatarUtils.tsx";
import MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN from "ContentImpressionTrackerConstants.tsx";
import SidebarVisibilityMethodStore from "../../../guild_sidebar/SidebarVisibilityMethodStore.tsx";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import markAllUserIdListsStale from "../../../../stores/RelationshipStore.tsx";
import handleConnectionOpen from "../../../../stores/SelectedGuildStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { getQuestDeliveryDataForPlacement } from "../../utils/QuestDataUtils.tsx";

({ getVisibleChannelIdsMethod: c3, getVisibleGuildIdsMethod: c4 } = SidebarVisibilityMethodStore);
let closure_10 = MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN.MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN;
let result = obj132.fileFinishedImporting("modules/quests/lib/analytics/BrandSafetyContext.tsx");

export const getBrandSafetyContext = function getBrandSafetyContext(questContent) {
  let obj = getQuestDeliveryDataForPlacement;
  const result = obj.isBillableQuestContent(questContent);
  obj1 = getQuestDeliveryDataForPlacement;
  const adContext = obj1.getAdContext(questContent);
  const tmp4 = callback2();
  const tmp5 = callback();
  let prop;
  if (adContext != null) {
    prop = adContext.is_campaign_ias_enabled;
  }
  if (prop) {
    if (result) {
      if (undefined !== tmp4) {
        if (undefined !== tmp5) {
          guildId = guildId.getGuildId();
          let guild = null;
          if (null != guildId) {
            guild = store.getGuild(guildId);
          }
          if (tmp7) {
            let items = [];
          } else {
            _require = store.getGuilds();
            const mapped = tmp4().map((item, index) => {
              if (undefined === dependencyMap[item]) {
                return null;
              } else {
                let obj = { id: null, name: null };
                ({ id: obj3[0], name: obj3[1] } = tmp);
                if (null !== tmp.description) {
                  obj.description = tmp.description;
                }
                let tmp2 = null;
                if (null !== tmp.icon) {
                  importDefault(closure_1_2[8]);
                  obj = { id: null, icon: null, size: 44, canAnimate: true };
                  ({ id: obj2[0], icon: obj2[1] } = tmp);
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
            items = mapped.filter((item, index) => null !== item);
            const tmp4Result = tmp4();
          }
          obj = { guilds: null, channels: null };
          obj[0] = items;
          if (!tmp8) {
            if (null != guild) {
              const mapped1 = tmp5().map((item, index) => {
                channel = channel.getChannel(item);
                if (undefined === channel) {
                  return null;
                } else {
                  const obj = { id: null, name: null };
                  obj[0] = channel.id;
                  obj[1] = dependencyMap(table[9]).computeChannelName(channel, closure_9, closure_7);
                  if (channel.topic.length > 0) {
                    obj.channel_topic = channel.topic;
                  }
                  return obj;
                }
              });
              let found = mapped1.filter((item, index) => null !== item);
              const tmp5Result = tmp5();
            }
            obj[1] = found;
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
              ({ id: obj5[0], banner: obj5[1] } = guild);
              let guildBannerURL = getAvatarURLDefault.getGuildBannerURL(obj, true);
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
              obj.guilds = guilds.slice(0, closure_10);
              obj.truncated = true;
            }
            if (obj.channels.length > closure_10) {
              const channels = obj.channels;
              obj.channels = channels.slice(0, closure_10);
              obj.truncated = true;
            }
            obj1 = { brand_safety_context: null };
            const _JSON = JSON;
            obj1[0] = JSON.stringify(obj);
            return obj1;
          }
          found = [];
        }
      }
    }
  }
  return null;
};