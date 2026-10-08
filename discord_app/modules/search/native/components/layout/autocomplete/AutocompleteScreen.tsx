// === Module 17211: AutocompleteScreen ===

// Module 17211 (AutocompleteScreen)
import UserUtilsDefault from "UserUtils" /* 4922 */;
import useChannelName from "useChannelName" /* 5417 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12053 */;
import tracking_TrackingDefault from "tracking/Tracking" /* 12074 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12078 */;
import AutocompleteScreenUtils from "AutocompleteScreenUtils" /* 17213 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;
import SearchAutocompleteStore from "SearchAutocompleteStore" /* 17212 */;
import SearchQueryStore from "SearchQueryStore" /* 12067 */;

const require = globalThis.__r;

require = fn;
const SearchConstants = fn(9247);
({ SearchListItemTypes: c10, SearchQueryTagTypes: closure_11, USER_ESTIMATED_ITEM_SIZE: closure_12 } = SearchConstants);
const Constants = fn(1085);
({ SearchPopoutModes: map1, SearchTokenTypes: closure_14 } = Constants);
const jsx = fn(21).jsx;
let closure_16 = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AutocompleteScreen(searchContext) {
  const cResult = searchContext(576).c(42);
  searchContext = searchContext.searchContext;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [set1];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== searchContext) {
    const fn = function x() {
      return SearchAutocompleteStore.getState(searchContext);
    };
    const items1 = [searchContext];
    cResult[1] = searchContext;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = searchContext(576);
  const stateFromStores = searchContext(504).useStateFromStores(first, tmp6, tmp7, tmp(504).statesWillNeverBeEqual);
  let obj3 = noop;
  let tmpResult = searchContext(504);
  [tmp10, importDefault] = noop.useState(false);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [maybeAddUserItem];
    cResult[4] = items2;
    let tmp11 = items2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== searchContext) {
    const fn2 = function _() {
      return SearchQueryStore.isTextInputValueEmpty(searchContext);
    };
    const items3 = [searchContext];
    cResult[5] = searchContext;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp14 = items3;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const stateFromStores1 = searchContext(504).useStateFromStores(tmp11, tmp13, tmp14);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { placeholderHeight, numColumns: 1 };
    cResult[8] = obj2;
    let tmp16 = obj2;
  } else {
    tmp16 = cResult[8];
  }
  const tmpResult5 = searchContext(504);
  const fullscreenPlaceholderCount = searchContext(17116).useFullscreenPlaceholderCount(tmp16);
  if (cResult[9] !== searchContext) {
    class P {
      constructor() {
        obj = closure_1(closure_2[14]);
        syncAutocompleteResult = obj.syncAutocomplete(searchContext);
        obj2 = closure_1(closure_2[14]);
        initialMessages = obj2.fetchInitialMessages(searchContext);
        return;
      }
    }
    cResult[9] = searchContext;
    cResult[10] = P;
  } else {
    class P {
      constructor() {
        obj = closure_1(closure_2[14]);
        syncAutocompleteResult = obj.syncAutocomplete(searchContext);
        obj2 = closure_1(closure_2[14]);
        initialMessages = obj2.fetchInitialMessages(searchContext);
        return;
      }
    }
  }
  dependencyMap = P;
  if (cResult[11] === searchContext) {
    class P {
      constructor() {
        obj = closure_1(closure_2[14]);
        syncAutocompleteResult = obj.syncAutocomplete(searchContext);
        obj2 = closure_1(closure_2[14]);
        initialMessages = obj2.fetchInitialMessages(searchContext);
        return;
      }
    }
    _slicedToArray = Q;
    if (cResult[14] === searchContext) {
      class P {
        constructor() {
          obj = closure_1(closure_2[14]);
          syncAutocompleteResult = obj.syncAutocomplete(searchContext);
          obj2 = closure_1(closure_2[14]);
          initialMessages = obj2.fetchInitialMessages(searchContext);
          return;
        }
      }
      noop = H;
      if (cResult[17] === searchContext) {
        class P {
          constructor() {
            obj = closure_1(closure_2[14]);
            syncAutocompleteResult = obj.syncAutocomplete(searchContext);
            obj2 = closure_1(closure_2[14]);
            initialMessages = obj2.fetchInitialMessages(searchContext);
            return;
          }
        }
        ChannelStore = tmp23;
        if (cResult[20] !== searchContext) {
          class G {
            constructor() {
              obj = closure_1(closure_2[14]);
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                let prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
                obj.prefixTag = prefixTag;
                return obj;
              }, (isAutocompleteVisible, textInputValue) => {
                if (isAutocompleteVisible.isAutocompleteVisible) {
                  textInputValue = undefined;
                  if (textInputValue != null) {
                    textInputValue = textInputValue.textInputValue;
                  }
                  let tmp6 = tmp === textInputValue;
                  if (tmp6) {
                    let prefixTag;
                    if (textInputValue != null) {
                      prefixTag = textInputValue.prefixTag;
                    }
                    tmp6 = tmp2 === prefixTag;
                  }
                  if (!tmp6) {
                    closure_1_1(true);
                  }
                }
              }, true);
            }
          }
          const items4 = [searchContext];
          class H {
            constructor(arg0) {
              user = closure_7.getUser(searchContext);
              closure_0 = user;
              if (null != user) {
                tmp8 = closure_9;
                tmp9 = searchContext;
                prefixTag = closure_9.getPrefixTag(searchContext);
                if (null != prefixTag) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[15]);
                  updateSearchQueryResult = obj.updateSearchQuery(tmp9, (setTextInputValue) => {
                    setTextInputValue.setTextInputValue("");
                    const obj = { type: mode.ANSWER, text: require("UserUtils").getUserTag(user), userId: user.id };
                    setTextInputValue.addTag(obj);
                    const result = setTextInputValue.restoreDraftTextInputValue();
                  });
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { searchContext: null, searchTokenType: null, location: null };
                  obj1.searchContext = tmp9;
                  ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                  trackSearchFilterAddResult = obj2.trackSearchFilterAdd(obj1);
                  tmp6 = closure_2;
                  tmp7 = closure_2();
                }
              }
              return;
            }
          }
          cResult[20] = searchContext;
          cResult[21] = G;
          cResult[22] = items4;
        } else {
          class G {
            constructor() {
              obj = closure_1(closure_2[14]);
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                let prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
                obj.prefixTag = prefixTag;
                return obj;
              }, (isAutocompleteVisible, textInputValue) => {
                if (isAutocompleteVisible.isAutocompleteVisible) {
                  textInputValue = undefined;
                  if (textInputValue != null) {
                    textInputValue = textInputValue.textInputValue;
                  }
                  let tmp6 = tmp === textInputValue;
                  if (tmp6) {
                    let prefixTag;
                    if (textInputValue != null) {
                      prefixTag = textInputValue.prefixTag;
                    }
                    tmp6 = tmp2 === prefixTag;
                  }
                  if (!tmp6) {
                    closure_1_1(true);
                  }
                }
              }, true);
            }
          }
        }
        class H {
          constructor(arg0) {
            user = closure_7.getUser(searchContext);
            closure_0 = user;
            if (null != user) {
              tmp8 = closure_9;
              tmp9 = searchContext;
              prefixTag = closure_9.getPrefixTag(searchContext);
              if (null != prefixTag) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[15]);
                updateSearchQueryResult = obj.updateSearchQuery(tmp9, (setTextInputValue) => {
                  setTextInputValue.setTextInputValue("");
                  const obj = { type: mode.ANSWER, text: require("UserUtils").getUserTag(user), userId: user.id };
                  setTextInputValue.addTag(obj);
                  const result = setTextInputValue.restoreDraftTextInputValue();
                });
                obj2 = closure_1(closure_2[16]);
                obj1 = { searchContext: null, searchTokenType: null, location: null };
                obj1.searchContext = tmp9;
                ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                trackSearchFilterAddResult = obj2.trackSearchFilterAdd(obj1);
                tmp6 = closure_2;
                tmp7 = closure_2();
              }
            }
            return;
          }
        }
        const _Symbol = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor() {
              obj = closure_1(closure_2[14]);
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                let prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
                obj.prefixTag = prefixTag;
                return obj;
              }, (isAutocompleteVisible, textInputValue) => {
                if (isAutocompleteVisible.isAutocompleteVisible) {
                  textInputValue = undefined;
                  if (textInputValue != null) {
                    textInputValue = textInputValue.textInputValue;
                  }
                  let tmp6 = tmp === textInputValue;
                  if (tmp6) {
                    let prefixTag;
                    if (textInputValue != null) {
                      prefixTag = textInputValue.prefixTag;
                    }
                    tmp6 = tmp2 === prefixTag;
                  }
                  if (!tmp6) {
                    closure_1_1(true);
                  }
                }
              }, true);
            }
          }
          cResult[23] = tmp27;
          class H {
            constructor(arg0) {
              user = closure_7.getUser(searchContext);
              closure_0 = user;
              if (null != user) {
                tmp8 = closure_9;
                tmp9 = searchContext;
                prefixTag = closure_9.getPrefixTag(searchContext);
                if (null != prefixTag) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[15]);
                  updateSearchQueryResult = obj.updateSearchQuery(tmp9, (setTextInputValue) => {
                    setTextInputValue.setTextInputValue("");
                    const obj = { type: mode.ANSWER, text: require("UserUtils").getUserTag(user), userId: user.id };
                    setTextInputValue.addTag(obj);
                    const result = setTextInputValue.restoreDraftTextInputValue();
                  });
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { searchContext: null, searchTokenType: null, location: null };
                  obj1.searchContext = tmp9;
                  ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                  trackSearchFilterAddResult = obj2.trackSearchFilterAdd(obj1);
                  tmp6 = closure_2;
                  tmp7 = closure_2();
                }
              }
              return;
            }
          }
        } else {
          class G {
            constructor() {
              obj = closure_1(closure_2[14]);
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                let prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
                obj.prefixTag = prefixTag;
                return obj;
              }, (isAutocompleteVisible, textInputValue) => {
                if (isAutocompleteVisible.isAutocompleteVisible) {
                  textInputValue = undefined;
                  if (textInputValue != null) {
                    textInputValue = textInputValue.textInputValue;
                  }
                  let tmp6 = tmp === textInputValue;
                  if (tmp6) {
                    let prefixTag;
                    if (textInputValue != null) {
                      prefixTag = textInputValue.prefixTag;
                    }
                    tmp6 = tmp2 === prefixTag;
                  }
                  if (!tmp6) {
                    closure_1_1(true);
                  }
                }
              }, true);
            }
          }
        }
        if (cResult[24] !== stateFromStores.autocompletes) {
          class G {
            constructor() {
              obj = closure_1(closure_2[14]);
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                let prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
                obj.prefixTag = prefixTag;
                return obj;
              }, (isAutocompleteVisible, textInputValue) => {
                if (isAutocompleteVisible.isAutocompleteVisible) {
                  textInputValue = undefined;
                  if (textInputValue != null) {
                    textInputValue = textInputValue.textInputValue;
                  }
                  let tmp6 = tmp === textInputValue;
                  if (tmp6) {
                    let prefixTag;
                    if (textInputValue != null) {
                      prefixTag = textInputValue.prefixTag;
                    }
                    tmp6 = tmp2 === prefixTag;
                  }
                  if (!tmp6) {
                    closure_1_1(true);
                  }
                }
              }, true);
            }
          }
          tmp29[0] = stateFromStores.autocompletes;
          class H {
            constructor(arg0) {
              user = closure_7.getUser(searchContext);
              closure_0 = user;
              if (null != user) {
                tmp8 = closure_9;
                tmp9 = searchContext;
                prefixTag = closure_9.getPrefixTag(searchContext);
                if (null != prefixTag) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[15]);
                  updateSearchQueryResult = obj.updateSearchQuery(tmp9, (setTextInputValue) => {
                    setTextInputValue.setTextInputValue("");
                    const obj = { type: mode.ANSWER, text: require("UserUtils").getUserTag(user), userId: user.id };
                    setTextInputValue.addTag(obj);
                    const result = setTextInputValue.restoreDraftTextInputValue();
                  });
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { searchContext: null, searchTokenType: null, location: null };
                  obj1.searchContext = tmp9;
                  ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                  trackSearchFilterAddResult = obj2.trackSearchFilterAdd(obj1);
                  tmp6 = closure_2;
                  tmp7 = closure_2();
                }
              }
              return;
            }
          }
          cResult[25] = tmp29;
        } else {
          class G {
            constructor() {
              obj = closure_1(closure_2[14]);
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                let prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
                obj.prefixTag = prefixTag;
                return obj;
              }, (isAutocompleteVisible, textInputValue) => {
                if (isAutocompleteVisible.isAutocompleteVisible) {
                  textInputValue = undefined;
                  if (textInputValue != null) {
                    textInputValue = textInputValue.textInputValue;
                  }
                  let tmp6 = tmp === textInputValue;
                  if (tmp6) {
                    let prefixTag;
                    if (textInputValue != null) {
                      prefixTag = textInputValue.prefixTag;
                    }
                    tmp6 = tmp2 === prefixTag;
                  }
                  if (!tmp6) {
                    closure_1_1(true);
                  }
                }
              }, true);
            }
          }
        }
        const effect = obj3.useEffect(tmp26, tmp29);
        if (cResult[26] === stateFromStores) {
          class G {
            constructor() {
              obj = closure_1(closure_2[14]);
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                let prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
                obj.prefixTag = prefixTag;
                return obj;
              }, (isAutocompleteVisible, textInputValue) => {
                if (isAutocompleteVisible.isAutocompleteVisible) {
                  textInputValue = undefined;
                  if (textInputValue != null) {
                    textInputValue = textInputValue.textInputValue;
                  }
                  let tmp6 = tmp === textInputValue;
                  if (tmp6) {
                    let prefixTag;
                    if (textInputValue != null) {
                      prefixTag = textInputValue.prefixTag;
                    }
                    tmp6 = tmp2 === prefixTag;
                  }
                  if (!tmp6) {
                    closure_1_1(true);
                  }
                }
              }, true);
            }
          }
        }
        const items5 = [];
        if (tmp10) {
          class G {
            constructor() {
              obj = closure_1(closure_2[14]);
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                let prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
                obj.prefixTag = prefixTag;
                return obj;
              }, (isAutocompleteVisible, textInputValue) => {
                if (isAutocompleteVisible.isAutocompleteVisible) {
                  textInputValue = undefined;
                  if (textInputValue != null) {
                    textInputValue = textInputValue.textInputValue;
                  }
                  let tmp6 = tmp === textInputValue;
                  if (tmp6) {
                    let prefixTag;
                    if (textInputValue != null) {
                      prefixTag = textInputValue.prefixTag;
                    }
                    tmp6 = tmp2 === prefixTag;
                  }
                  if (!tmp6) {
                    closure_1_1(true);
                  }
                }
              }, true);
            }
          }
          class H {
            constructor(arg0) {
              user = closure_7.getUser(searchContext);
              closure_0 = user;
              if (null != user) {
                tmp8 = closure_9;
                tmp9 = searchContext;
                prefixTag = closure_9.getPrefixTag(searchContext);
                if (null != prefixTag) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[15]);
                  updateSearchQueryResult = obj.updateSearchQuery(tmp9, (setTextInputValue) => {
                    setTextInputValue.setTextInputValue("");
                    const obj = { type: mode.ANSWER, text: require("UserUtils").getUserTag(user), userId: user.id };
                    setTextInputValue.addTag(obj);
                    const result = setTextInputValue.restoreDraftTextInputValue();
                  });
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { searchContext: null, searchTokenType: null, location: null };
                  obj1.searchContext = tmp9;
                  ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                  trackSearchFilterAddResult = obj2.trackSearchFilterAdd(obj1);
                  tmp6 = closure_2;
                  tmp7 = closure_2();
                }
              }
              return;
            }
          }
          if (0 < fullscreenPlaceholderCount) {
            class G {
              constructor() {
                obj = closure_1(closure_2[14]);
                return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                  const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                  let prefixTag = isAutocompleteVisible.getPrefixTag();
                  if (prefixTag == null) {
                    prefixTag = null;
                  }
                  obj.prefixTag = prefixTag;
                  return obj;
                }, (isAutocompleteVisible, textInputValue) => {
                  if (isAutocompleteVisible.isAutocompleteVisible) {
                    textInputValue = undefined;
                    if (textInputValue != null) {
                      textInputValue = textInputValue.textInputValue;
                    }
                    let tmp6 = tmp === textInputValue;
                    if (tmp6) {
                      let prefixTag;
                      if (textInputValue != null) {
                        prefixTag = textInputValue.prefixTag;
                      }
                      tmp6 = tmp2 === prefixTag;
                    }
                    if (!tmp6) {
                      closure_1_1(true);
                    }
                  }
                }, true);
              }
            }
          }
        } else {
          class G {
            constructor() {
              obj = closure_1(closure_2[14]);
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                let prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
                obj.prefixTag = prefixTag;
                return obj;
              }, (isAutocompleteVisible, textInputValue) => {
                if (isAutocompleteVisible.isAutocompleteVisible) {
                  textInputValue = undefined;
                  if (textInputValue != null) {
                    textInputValue = textInputValue.textInputValue;
                  }
                  let tmp6 = tmp === textInputValue;
                  if (tmp6) {
                    let prefixTag;
                    if (textInputValue != null) {
                      prefixTag = textInputValue.prefixTag;
                    }
                    tmp6 = tmp2 === prefixTag;
                  }
                  if (!tmp6) {
                    closure_1_1(true);
                  }
                }
              }, true);
            }
          }
          class H {
            constructor(arg0) {
              user = closure_7.getUser(searchContext);
              closure_0 = user;
              if (null != user) {
                tmp8 = closure_9;
                tmp9 = searchContext;
                prefixTag = closure_9.getPrefixTag(searchContext);
                if (null != prefixTag) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[15]);
                  updateSearchQueryResult = obj.updateSearchQuery(tmp9, (setTextInputValue) => {
                    setTextInputValue.setTextInputValue("");
                    const obj = { type: mode.ANSWER, text: require("UserUtils").getUserTag(user), userId: user.id };
                    setTextInputValue.addTag(obj);
                    const result = setTextInputValue.restoreDraftTextInputValue();
                  });
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { searchContext: null, searchTokenType: null, location: null };
                  obj1.searchContext = tmp9;
                  ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                  trackSearchFilterAddResult = obj2.trackSearchFilterAdd(obj1);
                  tmp6 = closure_2;
                  tmp7 = closure_2();
                }
              }
              return;
            }
          }
          const tmpResult7 = tmp(17213);
          const _Set = Set;
          const set = new Set(tmp(17213).getSearchQueryUserIds(searchContext));
          set1 = new Set(tmp(17213).getSearchQueryChannelIds(searchContext));
          maybeAddUserItem = function maybeAddUserItem(arg0, arg1) {

          };
          function maybeAddChannelItem(arg0, arg1) {

          }
          ({ autocompletes, tokens, mode } = stateFromStores);
          let item = autocompletes.forEach((item) => {
            if (mode.type === constants.FILTER) {
              ({ results, group: searchContext } = item);
              if (0 !== results.length) {
                item = results.forEach((item) => {
                  ({ user, channel, text } = item);
                  const toSearchListUserItemResult = AutocompleteScreenUtils.toSearchListUserItem(searchContext, user, closure_4);
                  if (user != null) {
                    const id = user.id;
                  }
                  if (typeof maybeAddUserItem === "function") {
                    let hasItem = null == toSearchListUserItemResult || null == id;
                    if (!hasItem) {
                      hasItem = set.has(id);
                    }
                    if (!hasItem) {
                      hasItem = blockedOrIgnored.isBlockedOrIgnored(id);
                    }
                    if (!hasItem) {
                      set.add(id);
                      items5.push(toSearchListUserItemResult);
                    }
                    const result = AutocompleteScreenUtils.toSearchListChannelItem(channel, closure_5);
                    if (channel != null) {
                      const id2 = channel.id;
                    }
                    if (typeof maybeAddChannelItem === "function") {
                      let hasItem1 = null == result || null == id2;
                      if (!hasItem1) {
                        hasItem1 = set1.has(id2);
                      }
                      if (!hasItem1) {
                        set1.add(id2);
                        items5.push(result);
                      }
                      let tmp23 = closure_1_0 === constants3.FILTER_HAS;
                      if (tmp23) {
                        tmp23 = null != text;
                      }
                      if (tmp23) {
                        const element = { type: constants.GENERIC, props: null };
                        const obj2 = { text, icon: AutocompleteScreenUtils.getSearchFilterHasIcon(text), onPress };
                        element.props = obj2;
                        items5.push(element);
                        const tmpResult3 = AutocompleteScreenUtils;
                      }
                      if (tmp28) {
                        const element1 = { type: constants.GENERIC, props: null };
                        const obj3 = { text, icon: AutocompleteScreenUtils.getSearchFilterAuthorTypeIcon(text), onPress };
                        element1.props = obj3;
                        items5.push(element1);
                        const tmpResult4 = AutocompleteScreenUtils;
                      }
                      tmp28 = closure_1_0 === constants3.FILTER_AUTHOR_TYPE && null != text;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                    const tmpResult = AutocompleteScreenUtils;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                });
              }
            }
          });
          if (0 === items5.length) {
            class G {
              constructor() {
                obj = closure_1(closure_2[14]);
                return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                  const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                  let prefixTag = isAutocompleteVisible.getPrefixTag();
                  if (prefixTag == null) {
                    prefixTag = null;
                  }
                  obj.prefixTag = prefixTag;
                  return obj;
                }, (isAutocompleteVisible, textInputValue) => {
                  if (isAutocompleteVisible.isAutocompleteVisible) {
                    textInputValue = undefined;
                    if (textInputValue != null) {
                      textInputValue = textInputValue.textInputValue;
                    }
                    let tmp6 = tmp === textInputValue;
                    if (tmp6) {
                      let prefixTag;
                      if (textInputValue != null) {
                        prefixTag = textInputValue.prefixTag;
                      }
                      tmp6 = tmp2 === prefixTag;
                    }
                    if (!tmp6) {
                      closure_1_1(true);
                    }
                  }
                }, true);
              }
            }
            if (mode.type !== constants2.FILTER) {
              class G {
                constructor() {
                  obj = closure_1(closure_2[14]);
                  return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                    const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                    let prefixTag = isAutocompleteVisible.getPrefixTag();
                    if (prefixTag == null) {
                      prefixTag = null;
                    }
                    obj.prefixTag = prefixTag;
                    return obj;
                  }, (isAutocompleteVisible, textInputValue) => {
                    if (isAutocompleteVisible.isAutocompleteVisible) {
                      textInputValue = undefined;
                      if (textInputValue != null) {
                        textInputValue = textInputValue.textInputValue;
                      }
                      let tmp6 = tmp === textInputValue;
                      if (tmp6) {
                        let prefixTag;
                        if (textInputValue != null) {
                          prefixTag = textInputValue.prefixTag;
                        }
                        tmp6 = tmp2 === prefixTag;
                      }
                      if (!tmp6) {
                        closure_1_1(true);
                      }
                    }
                  }, true);
                }
              }
              class H {
                constructor(arg0) {
                  user = closure_7.getUser(searchContext);
                  closure_0 = user;
                  if (null != user) {
                    tmp8 = closure_9;
                    tmp9 = searchContext;
                    prefixTag = closure_9.getPrefixTag(searchContext);
                    if (null != prefixTag) {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      obj = closure_1(closure_2[15]);
                      updateSearchQueryResult = obj.updateSearchQuery(tmp9, (setTextInputValue) => {
                        setTextInputValue.setTextInputValue("");
                        const obj = { type: mode.ANSWER, text: require("UserUtils").getUserTag(user), userId: user.id };
                        setTextInputValue.addTag(obj);
                        const result = setTextInputValue.restoreDraftTextInputValue();
                      });
                      obj2 = closure_1(closure_2[16]);
                      obj1 = { searchContext: null, searchTokenType: null, location: null };
                      obj1.searchContext = tmp9;
                      ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                      trackSearchFilterAddResult = obj2.trackSearchFilterAdd(obj1);
                      tmp6 = closure_2;
                      tmp7 = closure_2();
                    }
                  }
                  return;
                }
              }
            }
          }
          if (items5.length <= 0) {
            class G {
              constructor() {
                obj = closure_1(closure_2[14]);
                return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                  const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
                  let prefixTag = isAutocompleteVisible.getPrefixTag();
                  if (prefixTag == null) {
                    prefixTag = null;
                  }
                  obj.prefixTag = prefixTag;
                  return obj;
                }, (isAutocompleteVisible, textInputValue) => {
                  if (isAutocompleteVisible.isAutocompleteVisible) {
                    textInputValue = undefined;
                    if (textInputValue != null) {
                      textInputValue = textInputValue.textInputValue;
                    }
                    let tmp6 = tmp === textInputValue;
                    if (tmp6) {
                      let prefixTag;
                      if (textInputValue != null) {
                        prefixTag = textInputValue.prefixTag;
                      }
                      tmp6 = tmp2 === prefixTag;
                    }
                    if (!tmp6) {
                      closure_1_1(true);
                    }
                  }
                }, true);
              }
            }
          }
          const tmpResult8 = tmp(17213);
        }
        cResult[26] = stateFromStores;
        cResult[27] = tmp23;
        cResult[28] = Q;
        cResult[29] = H;
        cResult[30] = tmp10;
        cResult[31] = fullscreenPlaceholderCount;
        cResult[32] = searchContext;
        cResult[33] = tmp39;
      }
      class H {
        constructor(arg0) {
          user = closure_7.getUser(searchContext);
          closure_0 = user;
          if (null != user) {
            tmp8 = closure_9;
            tmp9 = searchContext;
            prefixTag = closure_9.getPrefixTag(searchContext);
            if (null != prefixTag) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[15]);
              updateSearchQueryResult = obj.updateSearchQuery(tmp9, (setTextInputValue) => {
                setTextInputValue.setTextInputValue("");
                const obj = { type: mode.ANSWER, text: require("UserUtils").getUserTag(user), userId: user.id };
                setTextInputValue.addTag(obj);
                const result = setTextInputValue.restoreDraftTextInputValue();
              });
              obj2 = closure_1(closure_2[16]);
              obj1 = { searchContext: null, searchTokenType: null, location: null };
              obj1.searchContext = tmp9;
              ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
              trackSearchFilterAddResult = obj2.trackSearchFilterAdd(obj1);
              tmp6 = closure_2;
              tmp7 = closure_2();
            }
          }
          return;
        }
      }
      cResult[17] = searchContext;
      cResult[18] = P;
      cResult[19] = tmp23;
    }
    class H {
      constructor(arg0) {
        user = closure_7.getUser(searchContext);
        closure_0 = user;
        if (null != user) {
          tmp8 = closure_9;
          tmp9 = searchContext;
          prefixTag = closure_9.getPrefixTag(searchContext);
          if (null != prefixTag) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            updateSearchQueryResult = obj.updateSearchQuery(tmp9, (setTextInputValue) => {
              setTextInputValue.setTextInputValue("");
              const obj = { type: mode.ANSWER, text: require("UserUtils").getUserTag(user), userId: user.id };
              setTextInputValue.addTag(obj);
              const result = setTextInputValue.restoreDraftTextInputValue();
            });
            obj2 = closure_1(closure_2[16]);
            obj1 = { searchContext: null, searchTokenType: null, location: null };
            obj1.searchContext = tmp9;
            ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
            trackSearchFilterAddResult = obj2.trackSearchFilterAdd(obj1);
            tmp6 = closure_2;
            tmp7 = closure_2();
          }
        }
        return;
      }
    }
    cResult[14] = searchContext;
    cResult[15] = P;
    cResult[16] = H;
  }
  class Q {
    constructor(arg0) {
      closure_0 = searchContext;
      tmp = searchContext;
      prefixTag = closure_9.getPrefixTag(searchContext);
      if (null != prefixTag) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        obj = closure_1(closure_2[15]);
        updateSearchQueryResult = obj.updateSearchQuery(tmp, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          setTextInputValue.addTag({ type: mode.ANSWER, text });
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        obj2 = closure_1(closure_2[16]);
        obj1 = { searchContext: null, searchTokenType: null, location: null };
        obj1.searchContext = tmp;
        ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
        trackSearchFilterAddResult = obj2.trackSearchFilterAdd(obj1);
        tmp7 = closure_2;
        tmp8 = closure_2();
      }
      return;
    }
  }
  cResult[11] = searchContext;
  cResult[12] = P;
  cResult[13] = Q;
  const tmpResult6 = searchContext(17116);
}) : (function AutocompleteScreen(searchContext) {
  searchContext = searchContext.searchContext;
  first = undefined;
  _slicedToArray = undefined;
  let fullscreenPlaceholderCount;
  let callback3;
  let items = [callback3];
  const items1 = [searchContext];
  const stateFromStores = searchContext(first[12]).useStateFromStores(items, () => SearchAutocompleteStore.getState(searchContext), items1, searchContext(first[12]).statesWillNeverBeEqual);
  [first, _slicedToArray] = fullscreenPlaceholderCount.useState(false);
  let obj = searchContext(first[12]);
  const items2 = [SearchQueryStore];
  const items3 = [searchContext];
  const stateFromStores1 = searchContext(first[12]).useStateFromStores(items2, () => SearchQueryStore.isTextInputValueEmpty(searchContext), items3);
  let obj2 = searchContext(first[12]);
  fullscreenPlaceholderCount = searchContext(first[13]).useFullscreenPlaceholderCount({ placeholderHeight, numColumns: 1 });
  const items4 = [searchContext];
  const callback = fullscreenPlaceholderCount.useCallback(() => {
    SearchPlatformUtilsDefault.syncAutocomplete(searchContext);
    const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(searchContext);
  }, items4);
  const items5 = [callback, searchContext];
  const callback1 = fullscreenPlaceholderCount.useCallback((text) => {
    const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
    if (null != prefixTag) {
      SearchPlatformActionCreatorsDefault.updateSearchQuery(searchContext, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        setTextInputValue.addTag({ type: constants2.ANSWER, text });
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      const obj4 = { searchContext, searchTokenType: null, location: null };
      ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
      tracking_TrackingDefault.trackSearchFilterAdd(obj4);
      callback();
    }
  }, items5);
  const items6 = [callback, searchContext];
  const callback2 = fullscreenPlaceholderCount.useCallback((arg0) => {
    const user = UserStore.getUser(arg0);
    if (null != user) {
      const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
      if (null != prefixTag) {
        SearchPlatformActionCreatorsDefault.updateSearchQuery(searchContext, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: constants2.ANSWER, text: stateFromStores(first[17]).getUserTag(user), userId: user.id };
          setTextInputValue.addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        const obj4 = { searchContext, searchTokenType: null, location: null };
        ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
        tracking_TrackingDefault.trackSearchFilterAdd(obj4);
        callback();
      }
    }
  }, items6);
  const items7 = [callback, searchContext];
  callback3 = fullscreenPlaceholderCount.useCallback((channelId) => {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
      if (null != prefixTag) {
        let userTag = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
        if (channel.isDM()) {
          const user = UserStore.getUser(channel.getRecipientId());
          if (null != user) {
            userTag = UserUtilsDefault.getUserTag(user);
          }
        }
        SearchPlatformActionCreatorsDefault.updateSearchQuery(searchContext, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: constants2.ANSWER, text: searchContext(first[19]).quoteChannelName(closure_1), channelId };
          setTextInputValue.addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        let obj = { searchContext, searchTokenType: null, location: null };
        ({ searchTokenType: obj4.searchTokenType, location: obj4.location } = prefixTag);
        tracking_TrackingDefault.trackSearchFilterAdd(obj);
        callback();
      }
    }
  }, items7);
  const items8 = [searchContext];
  const effect = fullscreenPlaceholderCount.useEffect(() => SearchPlatformUtilsDefault.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
    const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag: null };
    let prefixTag = isAutocompleteVisible.getPrefixTag();
    if (prefixTag == null) {
      prefixTag = null;
    }
    obj.prefixTag = prefixTag;
    return obj;
  }, (isAutocompleteVisible, textInputValue) => {
    if (isAutocompleteVisible.isAutocompleteVisible) {
      textInputValue = undefined;
      if (textInputValue != null) {
        textInputValue = textInputValue.textInputValue;
      }
      let tmp6 = tmp === textInputValue;
      if (tmp6) {
        let prefixTag;
        if (textInputValue != null) {
          prefixTag = textInputValue.prefixTag;
        }
        tmp6 = tmp2 === prefixTag;
      }
      if (!tmp6) {
        closure_1_3(true);
      }
    }
  }, true), items8);
  const items9 = [stateFromStores.autocompletes];
  const effect1 = fullscreenPlaceholderCount.useEffect(() => {
    closure_3(false);
  }, items9);
  const items10 = [first, searchContext, fullscreenPlaceholderCount, stateFromStores, callback2, callback3, callback1];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    const items = [];
    if (set1) {
      for (let num2 = 0; num2 < fullscreenPlaceholderCount; num2 = num2 + 1) {
        let obj2 = { type: constants.MESSAGE_PLACEHOLDER, key: null };
        let _HermesInternal = HermesInternal;
        obj2.key = "message-placeholder-" + num2;
        let arr = items.push(obj2);
      }
      return items;
    } else {
      const _Set = Set;
      const set = new Set(searchContext(first[20]).getSearchQueryUserIds(items));
      const _Set2 = Set;
      let obj = searchContext(first[20]);
      set1 = new Set(searchContext(first[20]).getSearchQueryChannelIds(items));
      ({ autocompletes, tokens, mode } = set);
      let item = autocompletes.forEach((item) => {
        if (mode.type === constants3.FILTER) {
          ({ results, group: items } = item);
          if (0 !== results.length) {
            item = results.forEach((item) => {
              ({ user, channel, text } = item);
              const toSearchListUserItemResult = AutocompleteScreenUtils.toSearchListUserItem(searchContext, user, callback2);
              let id;
              if (user != null) {
                id = user.id;
              }
              let hasItem = null == toSearchListUserItemResult || null == id;
              if (!hasItem) {
                hasItem = set.has(id);
              }
              if (!hasItem) {
                hasItem = blockedOrIgnored.isBlockedOrIgnored(id);
              }
              if (!hasItem) {
                set.add(id);
                items.push(toSearchListUserItemResult);
              }
              const result = AutocompleteScreenUtils.toSearchListChannelItem(channel, callback3);
              let id1;
              if (channel != null) {
                id1 = channel.id;
              }
              let hasItem1 = null == result || null == id1;
              if (!hasItem1) {
                hasItem1 = set1.has(id1);
              }
              if (!hasItem1) {
                set1.add(id1);
                items.push(result);
              }
              let tmp22 = closure_1_0 === constants3.FILTER_HAS;
              if (tmp22) {
                tmp22 = null != text;
              }
              if (tmp22) {
                const element = { type: constants.GENERIC, props: null };
                const obj2 = { text, icon: AutocompleteScreenUtils.getSearchFilterHasIcon(text), onPress: callback1 };
                element.props = obj2;
                items.push(element);
                const tmpResult3 = AutocompleteScreenUtils;
              }
              if (tmp27) {
                const element1 = { type: constants.GENERIC, props: null };
                const obj3 = { text, icon: AutocompleteScreenUtils.getSearchFilterAuthorTypeIcon(text), onPress: callback1 };
                element1.props = obj3;
                items.push(element1);
                const tmpResult4 = AutocompleteScreenUtils;
              }
              tmp27 = closure_1_0 === constants3.FILTER_AUTHOR_TYPE && null != text;
              const tmpResult = AutocompleteScreenUtils;
            });
          }
        }
      });
      if (0 === items.length) {
        if (mode.type !== constants3.FILTER) {
          if (null != tokens[tokens.length - 1]) {
            const token = new searchContext(first[21]).Token(tmp32);
            if (token.type === constants4.ANSWER_USERNAME_FROM) {
              if (tmp2Result.isValidUserAutocomplete(token)) {
                const data = token.getData("userId");
                if (null != data) {
                  const user = callback2.getUser(data);
                  let toSearchListUserItemResult = searchContext(first[20]).toSearchListUserItem(tmp4, user, callback2);
                  let id;
                  if (user != null) {
                    id = user.id;
                  }
                  let isBlockedOrIgnoredResult = null == toSearchListUserItemResult || null == id || set.has(id);
                  if (!isBlockedOrIgnoredResult) {
                    isBlockedOrIgnoredResult = callback1.isBlockedOrIgnored(id);
                  }
                  if (!isBlockedOrIgnoredResult) {
                    set.add(id);
                    items.push(toSearchListUserItemResult);
                  }
                  const tmp2Result3 = searchContext(first[20]);
                }
              }
              tmp2Result = searchContext(first[22]);
            }
            if (token.type === constants4.ANSWER_IN) {
              if (tmp2Result4.isValidChannelAutocomplete(token, tmp4)) {
                const data1 = token.getData("channelIds");
                if (null != data1) {
                  const item1 = data1.forEach((item) => {
                    const channel = ChannelStore.getChannel(item);
                    const result = AutocompleteScreenUtils.toSearchListChannelItem(channel, callback3);
                    let id;
                    if (channel != null) {
                      id = channel.id;
                    }
                    let hasItem = null == result || null == id;
                    if (!hasItem) {
                      hasItem = set1.has(id);
                    }
                    if (!hasItem) {
                      set1.add(id);
                      items.push(result);
                    }
                  });
                }
              }
              tmp2Result4 = searchContext(first[22]);
            }
          }
        }
      }
      let tmp25 = items;
      if (items.length <= 0) {
        tmp25 = closure_1_16;
      }
      return tmp25;
    }
  }, items10);
  let obj3 = searchContext(first[13]);
  let obj4 = { placeholderHeight, numColumns: 1 };
  const messageTabCountsErrorText = searchContext(first[23]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    const obj6 = { text: messageTabCountsErrorText };
    let tmp18 = jsx(stateFromStores(tmp2[24]), { text: messageTabCountsErrorText });
  } else {
    if (stateFromStores1) {
      if (0 === memo.length) {
        let obj7 = { text: null };
        const intl2 = tmp(tmp2[25]).intl;
        obj7.text = intl2.string(tmp(tmp2[25]).t["E4HqQ+"]);
        tmp18 = jsx(stateFromStores(tmp2[24]), { text: null });
        const tmp23 = stateFromStores(tmp2[24]);
      }
    }
    if (!stateFromStores1) {
      if (0 === memo.length) {
        if (!first) {
          const obj8 = { text: null };
          const intl = tmp(tmp2[25]).intl;
          obj8.text = intl.string(tmp(tmp2[25]).t.Dr1vko);
          tmp18 = jsx(stateFromStores(tmp2[24]), { text: null });
          const tmp17 = stateFromStores(tmp2[24]);
        }
      }
    }
    const obj9 = { data: memo };
    tmp18 = jsx(stateFromStores(tmp2[26]), { data: memo });
  }
  return tmp18;
}));