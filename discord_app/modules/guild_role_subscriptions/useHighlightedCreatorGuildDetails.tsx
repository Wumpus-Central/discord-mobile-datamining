// discord_app/modules/guild_role_subscriptions/useHighlightedCreatorGuildDetails.tsx
import react2 from "../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import useFetchHighlightedCreatorGuildDetailsDefault from "useFetchHighlightedCreatorGuildDetails.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let roles, set;

const MarketingURLs = Constants.MarketingURLs;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1, size) => {
      let error;
      let highlightedCreatorDetails;
      let isLoading;
      const obj = react2;
      const cResult = obj.c(28);
      ({ isLoading, error, highlightedCreatorDetails } = useFetchHighlightedCreatorGuildDetailsDefault(id));
      let store_page;
      useFetchHighlightedCreatorGuildDetailsDefault(id);
      if (highlightedCreatorDetails != null) {
        store_page = highlightedCreatorDetails.store_page;
      }
      let benefit_emojis;
      const first = cResult[0];
      if (store_page != null) {
        const role_subscription = store_page.role_subscription;
        if (role_subscription != null) {
          benefit_emojis = role_subscription.benefit_emojis;
        }
      }
      if (first === benefit_emojis) {
        let arr;
        let group_listings;
        const tmp8 = cResult[1];
        if (store_page != null) {
          const role_subscription2 = store_page.role_subscription;
          if (role_subscription2 != null) {
            group_listings = role_subscription2.group_listings;
          }
        }
        if (tmp8 === group_listings) {
          arr = cResult[2];
        }
        let icon_hash;
        if (store_page != null) {
          icon_hash = store_page.guild.icon_hash;
        }
        if (cResult[3] === icon_hash) {
          if (cResult[4] === size) {
            let tmp19;
            let tmp27;
            let subscriber_count;
            let tmp32;
            if (cResult[5] === id) {
              tmp19 = cResult[6];
            }
            let tmp22 = arr;
            if (null != arr) {
              tmp22 = arr;
              if (arr.length > arg1) {
                if (cResult[7] === arr) {
                  let tmp23;
                  if (cResult[8] === arg1) {
                    tmp23 = cResult[9];
                  }
                  tmp22 = tmp23;
                }
                const substr = arr.slice(0, arg1);
                cResult[7] = arr;
                cResult[8] = arg1;
                cResult[9] = substr;
                tmp23 = substr;
              }
            }
            let diff = null;
            if (null != arr) {
              diff = null;
              if (arr.length > arg1) {
                diff = arr.length - arg1;
              }
            }
            let slug;
            if (highlightedCreatorDetails != null) {
              slug = highlightedCreatorDetails.slug;
            }
            if (cResult[10] !== slug) {
              let result;
              if (null != slug) {
                result = MarketingURLs.ROLE_SUBSCRIPTION_STORE_PAGE(slug);
              }
              cResult[10] = slug;
              cResult[11] = result;
              tmp27 = result;
            } else {
              tmp27 = cResult[11];
            }
            let name;
            if (store_page != null) {
              const guild = store_page.guild;
              if (guild != null) {
                name = guild.name;
              }
            }
            if (store_page != null) {
              const role_subscription7 = store_page.role_subscription;
              if (role_subscription7 != null) {
                subscriber_count = role_subscription7.subscriber_count;
              }
            }
            if (!isLoading && null != name && null != icon_hash && null != tmp19) {
              if (cResult[16] === tmp22) {
                if (cResult[17] === tmp19) {
                  if (cResult[18] === icon_hash) {
                    if (cResult[19] === name) {
                      if (cResult[20] === diff) {
                        if (cResult[21] === tmp27) {
                          let tmp33;
                          if (cResult[22] === subscriber_count) {
                            tmp33 = cResult[23];
                          }
                          if (cResult[24] === (!isLoading && null != name && null != icon_hash && null != tmp19)) {
                            if (cResult[25] === isLoading) {
                              let tmp34;
                              if (cResult[26] === tmp33) {
                                tmp34 = cResult[27];
                              }
                              tmp32 = tmp34;
                            }
                          }
                          const obj2 = {
                            hasAllImperativeDetails: !isLoading && null != name && null != icon_hash && null != tmp19,
                            isLoading,
                            details: tmp33,
                          };
                          cResult[24] = !isLoading && null != name && null != icon_hash && null != tmp19;
                          cResult[25] = isLoading;
                          cResult[26] = tmp33;
                          cResult[27] = obj2;
                          tmp34 = obj2;
                        }
                      }
                    }
                  }
                }
              }
              const obj3 = {
                guildName: name,
                guildIcon: icon_hash,
                guildAvatarUrl: tmp19,
                storePageUrl: tmp27,
                subscriberCount: subscriber_count,
                emojisToShow: tmp22,
                notShownEmojiCount: diff,
              };
              cResult[16] = tmp22;
              cResult[17] = tmp19;
              cResult[18] = icon_hash;
              cResult[19] = name;
              cResult[20] = diff;
              cResult[21] = tmp27;
              cResult[22] = subscriber_count;
              cResult[23] = obj3;
              tmp33 = obj3;
            } else {
              if (cResult[12] === error) {
                if (cResult[13] === (!isLoading && null != name && null != icon_hash && null != tmp19)) {
                  if (cResult[14] === isLoading) {
                    tmp32 = cResult[15];
                  }
                }
              }
              const obj4 = {
                hasAllImperativeDetails: !isLoading && null != name && null != icon_hash && null != tmp19,
                isLoading,
                error,
              };
              cResult[12] = error;
              cResult[13] = !isLoading && null != name && null != icon_hash && null != tmp19;
              cResult[14] = isLoading;
              cResult[15] = obj4;
              tmp32 = obj4;
            }
            return tmp32;
          }
        }
        const obj5 = { id, icon: icon_hash, size };
        const tmp3Result = AvatarUtilsDefault;
        const guildIconURL = tmp3Result.getGuildIconURL(obj5);
        cResult[3] = icon_hash;
        cResult[4] = size;
        cResult[5] = id;
        cResult[6] = guildIconURL;
        tmp19 = guildIconURL;
      }
      let group_listings1;
      if (store_page != null) {
        const role_subscription3 = store_page.role_subscription;
        if (role_subscription3 != null) {
          group_listings1 = role_subscription3.group_listings;
        }
      }
      set = new Set();
      if (group_listings1 != null) {
        const item = group_listings1.forEach((subscription_listings) => {
          const prop = subscription_listings.subscription_listings;
          if (prop != null) {
            const item = prop.forEach((role_id) => {
              set.add(role_id.role_id);
            });
          }
        });
      }
      let benefit_emojis1;
      if (store_page != null) {
        const role_subscription4 = store_page.role_subscription;
        if (role_subscription4 != null) {
          benefit_emojis1 = role_subscription4.benefit_emojis;
        }
      }
      let found;
      if (benefit_emojis1 != null) {
        found = benefit_emojis1.filter((roles) => {
          roles = roles.roles;
          return roles.some((item) => set.has(item));
        });
      }
      let benefit_emojis2;
      if (store_page != null) {
        const role_subscription5 = store_page.role_subscription;
        if (role_subscription5 != null) {
          benefit_emojis2 = role_subscription5.benefit_emojis;
        }
      }
      cResult[0] = benefit_emojis2;
      let group_listings2;
      if (store_page != null) {
        const role_subscription6 = store_page.role_subscription;
        if (role_subscription6 != null) {
          group_listings2 = role_subscription6.group_listings;
        }
      }
      cResult[1] = group_listings2;
      cResult[2] = found;
      arr = found;
    }
  : (id, arg1, size) => {
      let highlightedCreatorDetails;
      let isLoading;
      let memo;
      let obj4;
      let obj5;
      let result;
      let store_page;
      let subscriber_count;
      let closure_0 = arg1;
      const tmp2 = memo;
      const tmp3 = store_page(memo[4])(id);
      ({ isLoading, highlightedCreatorDetails } = tmp3);
      const tmp = store_page;
      store_page = undefined;
      const error = tmp3.error;
      if (highlightedCreatorDetails != null) {
        store_page = highlightedCreatorDetails.store_page;
      }
      let role_subscription1;
      const useMemo = react.useMemo;
      if (store_page != null) {
        role_subscription1 = store_page.role_subscription;
      }
      const items = [role_subscription1];
      memo = useMemo(() => {
        let group_listings;
        if (store_page != null) {
          const role_subscription = store_page.role_subscription;
          if (role_subscription != null) {
            group_listings = role_subscription.group_listings;
          }
        }
        set = new Set();
        if (group_listings != null) {
          let item = group_listings.forEach((subscription_listings) => {
            const prop = subscription_listings.subscription_listings;
            if (prop != null) {
              const item = prop.forEach((role_id) => {
                set.add(role_id.role_id);
              });
            }
          });
        }
        let benefit_emojis;
        if (store_page != null) {
          const role_subscription2 = store_page.role_subscription;
          if (role_subscription2 != null) {
            benefit_emojis = role_subscription2.benefit_emojis;
          }
        }
        let found;
        if (benefit_emojis != null) {
          found = benefit_emojis.filter((roles) => {
            roles = roles.roles;
            return roles.some((item) => set.has(item));
          });
        }
        return found;
      }, items);
      let icon_hash;
      if (store_page != null) {
        icon_hash = store_page.guild.icon_hash;
      }
      const obj2 = { id, icon: icon_hash, size };
      const tmpResult = tmp(tmp2[5]);
      const guildIconURL = tmpResult.getGuildIconURL(obj2);
      const items1 = [memo, arg1];
      let diff = null;
      const memo1 = react.useMemo(() => {
        let substr = memo;
        if (null != memo) {
          substr = memo;
          if (memo.length > closure_0) {
            substr = memo.slice(0, tmp2);
          }
        }
        return substr;
      }, items1);
      if (null != memo) {
        diff = null;
        if (memo.length > arg1) {
          diff = memo.length - arg1;
        }
      }
      let slug;
      if (highlightedCreatorDetails != null) {
        slug = highlightedCreatorDetails.slug;
      }
      if (null != slug) {
        result = MarketingURLs.ROLE_SUBSCRIPTION_STORE_PAGE(slug);
      }
      let name;
      if (store_page != null) {
        const guild = store_page.guild;
        if (guild != null) {
          name = guild.name;
        }
      }
      if (store_page != null) {
        let role_subscription = store_page.role_subscription;
        if (role_subscription != null) {
          subscriber_count = role_subscription.subscriber_count;
        }
      }
      if (!isLoading && null != name && null != icon_hash && null != guildIconURL) {
        const obj3 = {
          hasAllImperativeDetails: !isLoading && null != name && null != icon_hash && null != guildIconURL,
          isLoading,
          details: obj4,
        };
        obj5 = obj3;
        obj4 = {
          guildName: name,
          guildIcon: icon_hash,
          guildAvatarUrl: guildIconURL,
          storePageUrl: result,
          subscriberCount: subscriber_count,
          emojisToShow: memo1,
          notShownEmojiCount: diff,
        };
      } else {
        obj5 = {
          hasAllImperativeDetails: !isLoading && null != name && null != icon_hash && null != guildIconURL,
          isLoading,
          error,
        };
      }
      return obj5;
    };
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/useHighlightedCreatorGuildDetails.tsx");

export default tmp2;
