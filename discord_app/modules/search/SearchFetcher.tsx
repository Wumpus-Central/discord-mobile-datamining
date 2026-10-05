// === Module 12001: SearchFetcher ===

// Module 12001 (SearchFetcher)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef1478 from "module_1478" /* 1478 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3;

let hasOwnProperty;
let metroRequire;
({ SearchTypes: hasOwnProperty, Endpoints: metroRequire } = Constants);
class SearchFetcher {
  constructor(searchId, searchType, query) {
    const merged = Object.assign({ isCanceled: false });
    merged.searchId = searchId;
    merged.searchType = searchType;
    merged.query = query;
    return merged;
  }
  fetch(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let self = this;
    return self(function*() {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let config;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp;
              config = undefined;
              closure_1 = undefined;
              if (!self.isCanceled) {
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj5 = { value: self.makeRequest({ rejectWithError: false }), done: false };
                return obj5;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            self = this;
            const self2 = this;
            const obj2 = new closure_1(closure_2[4])("SearchFetcher");
            obj2.error(closure_2);
            closure_130_2(closure_2);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            config = value;
            if (null == config) {
              c4 = 0;
              c6 = 3;
              return { value: "IconComponent", done: null };
            } else if (closure_130_3.isCanceled) {
              c4 = 0;
              c6 = 3;
              return { value: "IconComponent", done: null };
            } else {
              if (200 === config.status) {
                closure_130_0(config);
              } else if (202 === config.status) {
                const attempts = closure_130_3.query.attempts;
                let c0 = attempts;
                const query = closure_130_3.query;
                if (attempts == null) {
                  c0 = 0;
                }
                query.attempts = c0 + 1;
                if (closure_130_3.query.attempts > 5) {
                  c4 = 0;
                  c6 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  const _parseInt = parseInt;
                  closure_1 = parseInt(config.headers["retry-after"]);
                  const _isNaN = isNaN;
                  let num2 = 5000;
                  if (!isNaN(closure_1)) {
                    num2 = 5000;
                    if (0 !== closure_1) {
                      num2 = closure_1 * closure_1(closure_2[3]).Millis.SECOND;
                    }
                  }
                  closure_130_3.retryDelay = num2;
                  closure_130_3.retryLater(closure_130_0, closure_130_1, closure_130_2);
                  closure_130_1(config);
                }
              }
              c4 = 0;
            }
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp44) {
          closure_3 = tmp44;
          if (0 === c4) {
            c6 = 3;
            throw tmp44;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  }
  cancel() {
    this.isCanceled = true;
    if (null != this.indexingPollId) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.indexingPollId);
    }
  }
  retryLater(c165, cache, serializer) {
    const self = this;
    if (null != this.indexingPollId) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.indexingPollId);
    }
    const _fetch = self.fetch;
    self.indexingPollId = setTimeout(_fetch.bind(self, c165, cache, serializer), self.retryDelay);
  }
}
const prototype = SearchFetcher.prototype;
const result = size.fileFinishedImporting("modules/search/SearchFetcher.tsx");
class SearchFetcherImpl extends SearchFetcher {
  getEndpoint() {
    const self = this;
    const searchType = this.searchType;
    if (hasOwnProperty.GUILD === searchType) {
      if (null != self.searchId) {
        if ("" !== self.searchId) {
          return metroRequire.SEARCH_GUILD(self.searchId);
        }
      }
    } else if (hasOwnProperty.GUILD_CHANNEL === searchType) {
      if (null != self.searchId) {
        if ("" !== self.searchId) {
          const channel = ChannelStore.getChannel(self.searchId);
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          if (null != guildId) {
            return metroRequire.SEARCH_GUILD(guildId);
          }
        }
      }
    } else if (hasOwnProperty.CHANNEL === searchType) {
      if (null != self.searchId) {
        if ("" !== self.searchId) {
          return metroRequire.SEARCH_CHANNEL(self.searchId);
        }
      }
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const error = new Error("[SearchFetcher] Unhandled search type: " + self.searchType);
      throw error;
    }
  }
  makeRequest(rejectWithError) {
    let obj2;
    rejectWithError = rejectWithError.rejectWithError;
    const endpoint = this.getEndpoint();
    let value = null;
    if (null != endpoint) {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: endpoint, query: obj2.stringify(this.query), oldFormErrors: true, rejectWithError };
      const get = HTTP.get;
      obj2 = _modDef1478;
      value = get(request);
    }
    return value;
  }
}
const prototype2 = SearchFetcherImpl.prototype;
class SearchTabFetcherImpl extends SearchFetcher {
  constructor(channelId, type, searchQuery, requestPayload) {
    const tmp2 = new tmp(channelId, type, searchQuery, new.target);
    tmp2.payload = requestPayload;
    return tmp2;
  }
  getEndpoint() {
    const self = this;
    const searchType = this.searchType;
    if (hasOwnProperty.DMS === searchType) {
      return metroRequire.SEARCH_TABS_DMS;
    } else {
      if (hasOwnProperty.GUILD_CHANNEL !== searchType) {
        if (hasOwnProperty.GUILD !== searchType) {
          if (hasOwnProperty.THREAD !== searchType) {
            if (hasOwnProperty.CHANNEL === searchType) {
              if (null != self.searchId) {
                if ("" !== self.searchId) {
                  return metroRequire.SEARCH_TABS_CHANNEL(self.searchId);
                }
              }
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self2 = this;
              const self3 = this;
              const error = new Error("[SearchFetcher] Unhandled search type: " + self.searchType);
              throw error;
            }
          }
        }
      }
      if (null != self.searchId) {
        if ("" !== self.searchId) {
          return metroRequire.SEARCH_TABS_GUILD(self.searchId);
        }
      }
    }
  }
  makeRequest(rejectWithError) {
    rejectWithError = rejectWithError.rejectWithError;
    const endpoint = this.getEndpoint();
    let postResult = null;
    if (null != endpoint) {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: endpoint, body: this.payload, oldFormErrors: true, rejectWithError };
      postResult = HTTP.post(request);
    }
    return postResult;
  }
}
const prototype3 = SearchTabFetcherImpl.prototype;

export { SearchFetcher };
export { SearchFetcherImpl };
export { SearchTabFetcherImpl };