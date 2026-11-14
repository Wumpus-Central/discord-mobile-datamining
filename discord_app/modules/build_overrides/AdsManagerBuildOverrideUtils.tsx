// === Module 1385: AdsManagerBuildOverrideUtils ===

// Module 1385 (AdsManagerBuildOverrideUtils)
import size from "module_2" /* 2 */;

function isAdsManagerBuildOverrideLink(url) {
  if (null != url) {
    if (re0.test(url)) {
      try {
        const _URL = URL;
        const uRL = new URL(url);
        if ("/_dev-tools" === uRL.pathname) {
          const searchParams2 = tmp6.searchParams;
          let hasItem = searchParams2.has("buildOverride");
        } else {
          hasItem = "/__development/link" === tmp7.pathname;
          if (!hasItem) {
            hasItem = "/__development/link/" === tmp7.pathname;
          }
          if (hasItem) {
            const searchParams = tmp7.searchParams;
            hasItem = searchParams.has("s");
          }
        }
        return hasItem;
      } catch (err) {
        return false;
      }
    }
  }
  return false;
}
const re0 = /^https:\/\/(?:dads|dads-stg)\.discord\.tools\/(?:__development\/link\/?|_dev-tools)\?\S+$/i;
const discord_campaign_builder = "discord_campaign_builder";
const result = size.fileFinishedImporting("modules/build_overrides/AdsManagerBuildOverrideUtils.tsx");

export { isAdsManagerBuildOverrideLink };
export function adsManagerOverrideLinkMeta(url) {
  if (isAdsManagerBuildOverrideLink(url)) {
    try {
      const _URL = URL;
      const uRL = new URL(url);
      if ("/_dev-tools" === uRL.pathname) {
        const searchParams = tmp7.searchParams;
        const all = searchParams.getAll("buildOverride");
        if (1 !== all.length) {
          return null;
        } else {
          const first = all[0];
          const index = first.indexOf(":");
          const first1 = all[0];
          const substr = first1.slice(0, index);
          const first2 = all[0];
          const trimmed = first2.slice(index + 1).trim();
          let tmp27 = null;
          if (-1 !== index) {
            if ("branch" === substr) {
              tmp27 = null;
              if (0 !== trimmed.length) {
                if ("id" !== substr) {
                  const obj2 = { targetBuildOverride: null, expiresAt: "", validForUserIds: null };
                  const obj4 = {};
                  const obj6 = { type: substr, id: trimmed };
                  obj4[discord_campaign_builder] = obj6;
                  obj2.targetBuildOverride = obj4;
                  obj2.validForUserIds = [];
                  let tmp31 = obj2;
                } else {
                  tmp31 = null;
                }
                tmp27 = tmp31;
              }
            } else {
              tmp27 = null;
            }
          }
          return tmp27;
        }
      } else {
        const searchParams2 = tmp8.searchParams;
        const all1 = searchParams2.getAll("s");
        if (1 === all1.length) {
          if (tmp36[0].length <= 16384) {
            const match = /^([A-Za-z0-9+/=]+)\.([A-Za-z0-9+/=]+)$/.exec(all1[0]);
            if (null == match) {
              return null;
            } else {
              const _JSON = JSON;
              const _atob = atob;
              const parsed = JSON.parse(atob(match[2]));
              if (null != parsed) {
                if (typeof tmp42 === "object") {
                  if ("targetBuildOverride" in tmp42) {
                    if ("expiresAt" in tmp42) {
                      ({ targetBuildOverride, expiresAt } = parsed);
                      if (typeof expiresAt === "string") {
                        const _Number = Number;
                        const _Date2 = Date;
                        if (Number.isFinite(Date.parse(expiresAt))) {
                          if (null != targetBuildOverride) {
                            if (typeof targetBuildOverride === "object") {
                              const _Object = Object;
                              if (1 === Object.keys(targetBuildOverride).length) {
                                if (discord_campaign_builder in targetBuildOverride) {
                                  let tmp14 = null;
                                  if (null != targetBuildOverride[discord_campaign_builder]) {
                                    tmp14 = null;
                                    if (typeof tmp13 === "object") {
                                      tmp14 = null;
                                      if ("type" in tmp13) {
                                        if ("branch" === tmp13.type) {
                                          tmp14 = null;
                                          if ("id" in tmp13) {
                                            tmp14 = null;
                                            if (typeof tmp13.id === "string") {
                                              tmp14 = null;
                                              if (0 !== str12.trim().length) {
                                                const obj = { targetBuildOverride: null, expiresAt: null, validForUserIds: null };
                                                const obj7 = {};
                                                ({ type: obj3.type, id: obj3.id } = tmp12);
                                                obj7[discord_campaign_builder] = { type: null, id: null };
                                                obj.targetBuildOverride = obj7;
                                                const _Date = Date;
                                                const date = new Date(expiresAt);
                                                obj.expiresAt = date.toUTCString();
                                                obj.validForUserIds = [];
                                                tmp14 = obj;
                                                const obj8 = { type: null, id: null };
                                              }
                                              str12 = tmp13.id;
                                            }
                                          }
                                        } else {
                                          tmp14 = null;
                                        }
                                      }
                                    }
                                  }
                                  return tmp14;
                                } else {
                                  return null;
                                }
                              }
                            }
                          }
                          return null;
                        }
                      }
                      return null;
                    }
                  }
                }
              }
              return null;
            }
            const obj9 = /^([A-Za-z0-9+/=]+)\.([A-Za-z0-9+/=]+)$/;
          }
        }
        return null;
      }
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
}