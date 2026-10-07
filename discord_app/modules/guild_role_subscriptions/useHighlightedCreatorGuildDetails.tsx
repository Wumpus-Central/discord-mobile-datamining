// === Module 17951: useHighlightedCreatorGuildDetails ===

// Module 17951 (useHighlightedCreatorGuildDetails)
import c from "c" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import useFetchHighlightedCreatorGuildDetailsDefault from "useFetchHighlightedCreatorGuildDetails" /* 17952 */;
import noop from "module_19" /* 19 */;

require = fn;
const MarketingURLs = fn(1085).MarketingURLs;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/useHighlightedCreatorGuildDetails.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, size) => {
  const cResult = c.c(28);
  ({ isLoading, error, highlightedCreatorDetails } = useFetchHighlightedCreatorGuildDetailsDefault(id));
  let store_page;
  if (highlightedCreatorDetails != null) {
    store_page = highlightedCreatorDetails.store_page;
  }
  let benefit_emojis;
  if (store_page != null) {
    const role_subscription = store_page.role_subscription;
    if (role_subscription != null) {
      benefit_emojis = role_subscription.benefit_emojis;
    }
  }
  if (cResult[0] === benefit_emojis) {
    let group_listings;
    if (store_page != null) {
      const role_subscription2 = store_page.role_subscription;
      if (role_subscription2 != null) {
        group_listings = role_subscription2.group_listings;
      }
    }
    if (cResult[1] === group_listings) {
      let arr = cResult[2];
    }
    let icon_hash;
    if (store_page != null) {
      icon_hash = store_page.guild.icon_hash;
    }
    if (cResult[3] === icon_hash) {
      if (cResult[4] === size) {
        if (cResult[5] === id) {
          let tmp17 = cResult[6];
        }
        let tmp20 = arr;
        if (null != arr) {
          tmp20 = arr;
          if (arr.length > arg1) {
            if (cResult[7] === arr) {
            }
            const substr = arr.slice(0, arg1);
            cResult[7] = arr;
            cResult[8] = arg1;
            cResult[9] = substr;
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
          let tmp26 = result;
        } else {
          tmp26 = cResult[11];
        }
        if (store_page != null) {
          guild = store_page.guild;
          if (guild != null) {
            const name = guild.name;
          }
        }
        if (store_page != null) {
          const role_subscription7 = store_page.role_subscription;
          if (role_subscription7 != null) {
            const subscriber_count = role_subscription7.subscriber_count;
          }
        }
        let tmp29 = !isLoading;
        if (!isLoading) {
          tmp29 = null != name;
        }
        if (tmp29) {
          tmp29 = null != icon_hash;
        }
        if (tmp29) {
          tmp29 = null != tmp17;
        }
        if (tmp29) {
          if (cResult[16] === tmp20) {
            if (cResult[17] === tmp17) {
              if (cResult[18] === icon_hash) {
                if (cResult[19] === name) {
                  if (cResult[20] === diff) {
                    if (cResult[21] === tmp26) {
                      if (cResult[22] === subscriber_count) {
                        let tmp31 = cResult[23];
                      }
                      if (cResult[24] === tmp29) {
                        if (cResult[25] === isLoading) {
                        }
                      }
                      const obj2 = { hasAllImperativeDetails: tmp29, isLoading, details: tmp31 };
                      cResult[24] = tmp29;
                      cResult[25] = isLoading;
                      cResult[26] = tmp31;
                      cResult[27] = obj2;
                    }
                  }
                }
              }
            }
          }
          const obj3 = { guildName: name, guildIcon: icon_hash, guildAvatarUrl: tmp17, storePageUrl: tmp26, subscriberCount: subscriber_count, emojisToShow: tmp20, notShownEmojiCount: diff };
          cResult[16] = tmp20;
          cResult[17] = tmp17;
          cResult[18] = icon_hash;
          cResult[19] = name;
          cResult[20] = diff;
          cResult[21] = tmp26;
          cResult[22] = subscriber_count;
          cResult[23] = obj3;
          tmp31 = obj3;
        } else {
          if (cResult[12] === error) {
            if (cResult[13] === tmp29) {
              if (cResult[14] === isLoading) {
                let tmp30 = cResult[15];
              }
              return tmp30;
            }
          }
          const obj4 = { hasAllImperativeDetails: tmp29, isLoading, error };
          cResult[12] = error;
          cResult[13] = tmp29;
          cResult[14] = isLoading;
          cResult[15] = obj4;
          tmp30 = obj4;
        }
      }
    }
    const obj5 = { id, icon: icon_hash, size };
    const guildIconURL = AvatarUtilsDefault.getGuildIconURL(obj5);
    cResult[3] = icon_hash;
    cResult[4] = size;
    cResult[5] = id;
    cResult[6] = guildIconURL;
    tmp17 = guildIconURL;
    const tmp3Result = AvatarUtilsDefault;
  }
  let group_listings1;
  if (store_page != null) {
    const role_subscription3 = store_page.role_subscription;
    if (role_subscription3 != null) {
      group_listings1 = role_subscription3.group_listings;
    }
  }
  new Set();
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
  const tmp4 = useFetchHighlightedCreatorGuildDetailsDefault(id);
}) : ((id, arg1, size) => {
  closure_0 = arg1;
  const tmp3 = store_page(memo[4])(id);
  ({ isLoading, highlightedCreatorDetails } = tmp3);
  store_page = undefined;
  if (highlightedCreatorDetails != null) {
    store_page = highlightedCreatorDetails.store_page;
  }
  let role_subscription1;
  if (store_page != null) {
    role_subscription1 = store_page.role_subscription;
  }
  const items = [role_subscription1];
  memo = noop.useMemo(() => {
    let group_listings;
    if (store_page != null) {
      const role_subscription = store_page.role_subscription;
      if (role_subscription != null) {
        group_listings = role_subscription.group_listings;
      }
    }
    new Set();
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
  const guildIconURL = store_page(memo[5]).getGuildIconURL({ id, icon: icon_hash, size });
  const items1 = [memo, arg1];
  let diff = null;
  const memo1 = noop.useMemo(() => {
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
    const result = MarketingURLs.ROLE_SUBSCRIPTION_STORE_PAGE(slug);
  }
  if (store_page != null) {
    guild = store_page.guild;
    if (guild != null) {
      const name = guild.name;
    }
  }
  if (store_page != null) {
    let role_subscription = store_page.role_subscription;
    if (role_subscription != null) {
      const subscriber_count = role_subscription.subscriber_count;
    }
  }
  let tmp13 = !isLoading;
  if (!isLoading) {
    tmp13 = null != name;
  }
  if (tmp13) {
    tmp13 = null != icon_hash;
  }
  if (tmp13) {
    tmp13 = null != guildIconURL;
  }
  if (tmp13) {
    const obj3 = { hasAllImperativeDetails: tmp13, isLoading, details: null };
    const obj4 = { guildName: name, guildIcon: icon_hash, guildAvatarUrl: guildIconURL, storePageUrl: result, subscriberCount: subscriber_count, emojisToShow: memo1, notShownEmojiCount: diff };
    obj3.details = obj4;
    let obj5 = obj3;
  } else {
    obj5 = { hasAllImperativeDetails: tmp13, isLoading, error: tmp3.error };
  }
  return obj5;
});