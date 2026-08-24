// === Module 9541: getBrandSafetyContext ===

// Module 9541 (getBrandSafetyContext)
import set from "set" /* 2 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN from "MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN" /* 9543 */;
import SidebarVisibilityMethodStore from "SidebarVisibilityMethodStore" /* 9542 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "createGuildRecordFromRust" /* 1910 */;
import closure_7 from "markAllUserIdListsStale" /* 4033 */;
import closure_8 from "handleConnectionOpen" /* 4201 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;

({ getVisibleChannelIdsMethod: c3, getVisibleGuildIdsMethod: c4 } = SidebarVisibilityMethodStore);
let closure_10 = MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN.MAX_BRAND_SAFETY_CONTEXT_ARRAY_LEN;
let result = set.fileFinishedImporting("modules/quests/lib/analytics/BrandSafetyContext.tsx");

export const getBrandSafetyContext = function getBrandSafetyContext(questContent) {
  let obj = _require(7489);
  const result = obj.isBillableQuestContent(questContent);
  obj1 = _require(7489);
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
            const mapped = tmp4().map((arg0) => {
              if (undefined === dependencyMap[arg0]) {
                return null;
              } else {
                let obj = { id: null, name: null };
                ({ id: obj3[0], name: obj3[1] } = tmp);
                if (null !== tmp.description) {
                  obj.description = tmp.description;
                }
                let tmp2 = null;
                if (null !== tmp.icon) {
                  obj = closure_1_1(closure_1_2[8]);
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
            items = mapped.filter((arg0) => null !== arg0);
            const tmp4Result = tmp4();
          }
          obj = { guilds: null, channels: null };
          obj[0] = items;
          if (!tmp8) {
            if (null != guild) {
              const mapped1 = tmp5().map((arg0) => {
                channel = channel.getChannel(arg0);
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
              let found = mapped1.filter((arg0) => null !== arg0);
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
              const obj4 = getAvatarURLDefault;
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