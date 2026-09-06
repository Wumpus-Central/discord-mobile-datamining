// discord_app/modules/search/SearchFetcher.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef1471 from "../../../_runtime/metro/01471__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";

require = fn;
const Constants = fn(1074);
({ SearchTypes: hasOwnProperty, Endpoints: metroRequire } = Constants);
class SearchFetcher {
  constructor(arg0, arg1, arg2) {
    merged = Object.assign({ isCanceled: false });
    merged.searchId = global;
    merged.searchType = fn;
    merged.query = importDefault;
    return merged;
  }
}
const prototype = SearchFetcher.prototype;
prototype["fetch"] = function fetch(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const self = this;
  return self(function* () {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            if (!self.isCanceled) {
              c4 = 1;
              c5 = 2;
              c6 = 1;
              let obj1 = { value: self.makeRequest({ rejectWithError: false }), done: false };
              return obj1;
            }
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            closure_129_2 = closure_3;
            obj1 = new closure_1(tmp3[4])("SearchFetcher");
            obj1.error(closure_129_2);
            closure_130_2(closure_129_2);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = value;
            if (null == closure_129_0) {
              c4 = 0;
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else if (!closure_130_3.isCanceled) {
              if (200 === closure_129_0.status) {
                closure_130_0(closure_129_0);
              } else if (202 === closure_129_0.status) {
                const attempts = closure_130_3.query.attempts;
                c0 = attempts;
                if (attempts == null) {
                  c0 = 0;
                }
                closure_130_3.query.attempts = c0 + 1;
                if (closure_130_3.query.attempts > 5) {
                  c4 = 0;
                  c6 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  const _parseInt = parseInt;
                  closure_129_1 = parseInt(closure_129_0.headers["retry-after"]);
                  const _isNaN = isNaN;
                  let num2 = 5000;
                  if (!isNaN(closure_129_1)) {
                    num2 = 5000;
                    if (0 !== closure_129_1) {
                      num2 = closure_129_1 * closure_1(tmp3[3]).Millis.SECOND;
                    }
                  }
                  closure_130_3.retryDelay = num2;
                  closure_130_3.retryLater(closure_130_0, closure_130_1, closure_130_2);
                  closure_130_1(closure_129_0);
                }
              }
              c4 = 0;
            }
          }
          c4 = 0;
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
        c6 = 3;
      } catch (tmp49) {
        closure_3 = tmp49;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp49;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
prototype["cancel"] = function cancel() {
  this.isCanceled = true;
  if (null != this.indexingPollId) {
    const _clearTimeout = clearTimeout;
    clearTimeout(tmp.indexingPollId);
  }
};
prototype["retryLater"] = function retryLater(c165, cache, serializer) {
  const self = this;
  if (null != this.indexingPollId) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.indexingPollId);
  }
  const _fetch = self.fetch;
  self.indexingPollId = setTimeout(_fetch.bind(self, c165, cache, serializer), self.retryDelay);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/SearchFetcher.tsx");
class SearchFetcherImpl extends SearchFetcher {}
const prototype2 = SearchFetcherImpl.prototype;
prototype2["getEndpoint"] = function getEndpoint() {
  const self = this;
  const searchType = this.searchType;
  if (constants.GUILD === searchType) {
    if (null != self.searchId) {
      if ("" !== self.searchId) {
        return timestampProducer.SEARCH_GUILD(self.searchId);
      }
    }
  } else if (constants.GUILD_CHANNEL === searchType) {
    if (null != self.searchId) {
      if ("" !== self.searchId) {
        const channel = ChannelStore.getChannel(self.searchId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        if (null != guildId) {
          return timestampProducer.SEARCH_GUILD(guildId);
        }
      }
    }
  } else if (constants.CHANNEL === searchType) {
    if (null != self.searchId) {
      if ("" !== self.searchId) {
        return timestampProducer.SEARCH_CHANNEL(self.searchId);
      }
    }
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[SearchFetcher] Unhandled search type: " + self.searchType);
    throw error;
  }
};
prototype2["makeRequest"] = function makeRequest(rejectWithError) {
  const endpoint = this.getEndpoint();
  value = null;
  if (null != endpoint) {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: endpoint,
      query: _modDef1471.stringify(this.query),
      oldFormErrors: true,
      rejectWithError: rejectWithError.rejectWithError,
    };
    value = HTTP.get(request);
  }
  return value;
};
class SearchTabFetcherImpl extends SearchFetcher {
  constructor(arg0, arg1, arg2, arg3) {
    tmp = new tmp(global, fn, importDefault, new.target);
    tmp.payload = importAll;
    return tmp;
  }
}
const prototype3 = SearchTabFetcherImpl.prototype;
prototype3["getEndpoint"] = function getEndpoint() {
  const self = this;
  const searchType = this.searchType;
  if (constants.DMS === searchType) {
    return timestampProducer.SEARCH_TABS_DMS;
  } else {
    if (constants.GUILD_CHANNEL !== searchType) {
      if (constants.GUILD !== searchType) {
        if (constants.THREAD !== searchType) {
          if (constants.CHANNEL === searchType) {
            if (null != self.searchId) {
              if ("" !== self.searchId) {
                return timestampProducer.SEARCH_TABS_CHANNEL(self.searchId);
              }
            }
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("[SearchFetcher] Unhandled search type: " + self.searchType);
            throw error;
          }
        }
      }
    }
    if (null != self.searchId) {
      if ("" !== self.searchId) {
        return timestampProducer.SEARCH_TABS_GUILD(self.searchId);
      }
    }
  }
};
prototype3["makeRequest"] = function makeRequest(rejectWithError) {
  const endpoint = this.getEndpoint();
  let postResult = null;
  if (null != endpoint) {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: endpoint,
      body: this.payload,
      oldFormErrors: true,
      rejectWithError: rejectWithError.rejectWithError,
    };
    postResult = HTTP.post(request);
  }
  return postResult;
};

export { SearchFetcher };
export { SearchFetcherImpl };
export { SearchTabFetcherImpl };
