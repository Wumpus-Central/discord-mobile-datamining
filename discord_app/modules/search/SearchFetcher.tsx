// === Module 11570: fetch ===

// Module 11570 (fetch)
import sendRequest from "sendRequest" /* 530 */;
import parseDefault from "parse" /* 1484 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import ME from "ME" /* 676 */;

require = arg1;
({ SearchTypes: c5, Endpoints: closure_6 } = ME);
class SearchFetcher {
  constructor(arg0, arg1, arg2) {
    obj = Object.create(new.target.prototype);
    obj.searchId = global;
    obj.searchType = arg1;
    obj.query = importDefault;
    return obj;
  }
}
const prototype = SearchFetcher.prototype;
prototype["fetch"] = function fetch(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const self = this;
  return self(function*() {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            dependencyMap = tmp3;
            let callback = tmp7;
            let lib;
            callback = undefined;
            if (!closure_1_3.isCanceled) {
              c4 = 1;
              c5 = 2;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_3.makeRequest({ rejectWithError: false });
              return obj1;
            }
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            dependencyMap = closure_3;
            obj1 = new closure_1_1(3)("SearchFetcher");
            obj1.error(dependencyMap);
            dependencyMap(dependencyMap);
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            lib = arg1;
            if (null == lib) {
              c4 = 0;
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else if (!closure_3.isCanceled) {
              if (200 === lib.status) {
                lib(closure_1_0);
              } else if (202 === lib.status) {
                const attempts = closure_3.query.attempts;
                lib = attempts;
                if (attempts == null) {
                  lib = 0;
                }
                closure_3.query.attempts = lib + 1;
                if (closure_3.query.attempts > 5) {
                  c4 = 0;
                  c6 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  const _parseInt = parseInt;
                  callback = parseInt(lib.headers["retry-after"]);
                  const _isNaN = isNaN;
                  let num2 = 5000;
                  if (!isNaN(callback)) {
                    num2 = 5000;
                    if (0 !== callback) {
                      num2 = callback * closure_1_1(687).Millis.SECOND;
                    }
                  }
                  closure_3.retryDelay = num2;
                  closure_3.retryLater(lib, callback, dependencyMap);
                  callback(closure_1_0);
                  const tmp71 = closure_3;
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
prototype["retryLater"] = function retryLater(c0, closure_1, closure_2) {
  const self = this;
  if (null != this.indexingPollId) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.indexingPollId);
  }
  const _fetch = self.fetch;
  self.indexingPollId = setTimeout(_fetch.bind(self, c0, closure_1, closure_2), self.retryDelay);
};
const result = require("set").fileFinishedImporting("modules/search/SearchFetcher.tsx");
class SearchFetcherImpl extends SearchFetcher {
}
const prototype2 = SearchFetcherImpl.prototype;
prototype2["getEndpoint"] = function getEndpoint() {
  const self = this;
  const searchType = this.searchType;
  if (constants.GUILD === searchType) {
    if (null != self.searchId) {
      if ("" !== self.searchId) {
        return closure_6.SEARCH_GUILD(self.searchId);
      }
    }
  } else if (tmp.GUILD_CHANNEL === searchType) {
    if (null != self.searchId) {
      if ("" !== self.searchId) {
        channel = channel.getChannel(self.searchId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        if (null != guildId) {
          return closure_6.SEARCH_GUILD(guildId);
        }
      }
    }
  } else if (tmp.CHANNEL === searchType) {
    if (null != self.searchId) {
      if ("" !== self.searchId) {
        return closure_6.SEARCH_CHANNEL(self.searchId);
      }
    }
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("[SearchFetcher] Unhandled search type: " + self.searchType);
    throw error;
  }
};
prototype2["makeRequest"] = function makeRequest(rejectWithError) {
  const endpoint = this.getEndpoint();
  let value = null;
  if (null != endpoint) {
    const HTTP = sendRequest.HTTP;
    const obj = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
    obj[0] = endpoint;
    obj[1] = parseDefault.stringify(this.query);
    obj[3] = rejectWithError.rejectWithError;
    value = HTTP.get(obj);
    const obj2 = parseDefault;
  }
  return value;
};
class SearchTabFetcherImpl extends SearchFetcher {
  constructor(arg0, arg1, arg2, arg3) {
    tmp = new tmp(global, arg1, importDefault, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp.payload = importAll;
    return tmp;
  }
}
const prototype3 = SearchTabFetcherImpl.prototype;
prototype3["getEndpoint"] = function getEndpoint() {
  const self = this;
  const searchType = this.searchType;
  if (constants.DMS === searchType) {
    return closure_6.SEARCH_TABS_DMS;
  } else {
    if (tmp.GUILD_CHANNEL !== searchType) {
      if (tmp.GUILD !== searchType) {
        if (tmp.THREAD !== searchType) {
          if (tmp.CHANNEL === searchType) {
            if (null != self.searchId) {
              if ("" !== self.searchId) {
                return closure_6.SEARCH_TABS_CHANNEL(self.searchId);
              }
            }
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            error = new Error("[SearchFetcher] Unhandled search type: " + self.searchType);
            throw error;
          }
        }
      }
    }
    if (null != self.searchId) {
      if ("" !== self.searchId) {
        return closure_6.SEARCH_TABS_GUILD(self.searchId);
      }
    }
  }
};
prototype3["makeRequest"] = function makeRequest(rejectWithError) {
  const endpoint = this.getEndpoint();
  let postResult = null;
  if (null != endpoint) {
    const HTTP = sendRequest.HTTP;
    const obj = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
    obj[0] = endpoint;
    obj[1] = this.payload;
    obj[3] = rejectWithError.rejectWithError;
    postResult = HTTP.post(obj);
  }
  return postResult;
};

export { SearchFetcher };
export { SearchFetcherImpl };
export { SearchTabFetcherImpl };