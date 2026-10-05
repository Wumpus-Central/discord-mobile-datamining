// === Module 16905: AutocompleteScreen ===

// Module 16905 (AutocompleteScreen)
import Fragment from "Fragment" /* 21 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import useChannelName from "useChannelName" /* 5043 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11966 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11982 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11985 */;
import AutocompleteScreenUtils from "AutocompleteScreenUtils" /* 16906 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore_mod from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import SearchAutocompleteStore from "SearchAutocompleteStore" /* 11970 */;
import SearchQueryStore from "SearchQueryStore" /* 11967 */;
import SearchConstants from "SearchConstants" /* 7513 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let c10;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let ChannelStore = ChannelStore_mod;
({ SearchListItemTypes: c10, SearchQueryTagTypes: unpackModuleId, USER_ESTIMATED_ITEM_SIZE: closure_12 } = SearchConstants);
({ SearchPopoutModes: map1, SearchTokenTypes: closure_14 } = Constants);
const jsx = Fragment.jsx;
let closure_16 = [];
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function(searchContext) {
  let autocompletes;
  let closure_3;
  let closure_4;
  let closure_5;
  let first;
  let maybeAddUserItem;
  let mode;
  let set1;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp23;
  let tmp6;
  let tmp7;
  let tokens;
  const tmp = searchContext;
  const tmp2 = P;
  let obj = searchContext(P[11]);
  const cResult = obj.c(42);
  searchContext = searchContext.searchContext;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [set1];
    cResult[0] = items;
    first = items;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let tmpResult = tmp(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7, tmp(tmp2[12]).statesWillNeverBeEqual);
  let obj3 = react;
  [tmp10, importDefault] = _slicedToArray(react.useState(false), 2);
  const tmp9 = _slicedToArray(react.useState(false), 2);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [maybeAddUserItem];
    cResult[4] = items2;
    tmp11 = items2;
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
    tmp14 = items3;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const tmpResult5 = tmp(tmp2[12]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp11, tmp13, tmp14);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { placeholderHeight, numColumns: 1 };
    cResult[8] = obj2;
    tmp16 = obj2;
  } else {
    tmp16 = cResult[8];
  }
  const tmpResult6 = tmp(tmp2[13]);
  const fullscreenPlaceholderCount = tmpResult6.useFullscreenPlaceholderCount(tmp16);
  if (cResult[9] !== searchContext) {
    class P {
      constructor() {
        const obj = SearchPlatformUtilsDefault;
        obj.syncAutocomplete(searchContext);
        const obj2 = SearchPlatformUtilsDefault;
        const initialMessages = obj2.fetchInitialMessages(searchContext);
      }
    }
    cResult[9] = searchContext;
    cResult[10] = P;
  } else {
    class P {
      constructor() {
        const obj = SearchPlatformUtilsDefault;
        obj.syncAutocomplete(searchContext);
        const obj2 = SearchPlatformUtilsDefault;
        const initialMessages = obj2.fetchInitialMessages(searchContext);
      }
    }
  }
  P = tmp19;
  if (cResult[11] === searchContext) {
    class P {
      constructor() {
        const obj = SearchPlatformUtilsDefault;
        obj.syncAutocomplete(searchContext);
        const obj2 = SearchPlatformUtilsDefault;
        const initialMessages = obj2.fetchInitialMessages(searchContext);
      }
    }
    _slicedToArray = Q;
    if (cResult[14] === searchContext) {
      class P {
        constructor() {
          const obj = SearchPlatformUtilsDefault;
          obj.syncAutocomplete(searchContext);
          const obj2 = SearchPlatformUtilsDefault;
          const initialMessages = obj2.fetchInitialMessages(searchContext);
        }
      }
      react = H;
      if (cResult[17] === searchContext) {
        class P {
          constructor() {
            const obj = SearchPlatformUtilsDefault;
            obj.syncAutocomplete(searchContext);
            const obj2 = SearchPlatformUtilsDefault;
            const initialMessages = obj2.fetchInitialMessages(searchContext);
          }
        }
        ChannelStore = tmp23;
        if (cResult[20] !== searchContext) {
          class G {
            constructor() {
              let obj = SearchPlatformUtilsDefault;
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                let prefixTag;
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
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
              const user = UserStore.getUser(arg0);
              if (null != user) {
                const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
                if (null != prefixTag) {
                  let obj = SearchPlatformActionCreatorsDefault;
                  obj.updateSearchQuery(searchContext, (setTextInputValue) => {
                    let obj2;
                    setTextInputValue.setTextInputValue("");
                    const addTag = setTextInputValue.addTag;
                    const obj = { type: constants.ANSWER, text: obj2.getUserTag(user), userId: user.id };
                    obj2 = closure_2_1(closure_2_2[17]);
                    addTag(obj);
                    const result = setTextInputValue.restoreDraftTextInputValue();
                  });
                  let obj2 = search_tracking_TrackingDefault;
                  const obj4 = { searchContext, searchTokenType: null, location: null };
                  ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                  obj2.trackSearchFilterAdd(obj4);
                  P();
                }
              }
            }
          }
          cResult[20] = searchContext;
          cResult[21] = G;
          cResult[22] = items4;
        } else {
          class G {
            constructor() {
              let obj = SearchPlatformUtilsDefault;
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                let prefixTag;
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
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
            const user = UserStore.getUser(arg0);
            if (null != user) {
              const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
              if (null != prefixTag) {
                let obj = SearchPlatformActionCreatorsDefault;
                obj.updateSearchQuery(searchContext, (setTextInputValue) => {
                  let obj2;
                  setTextInputValue.setTextInputValue("");
                  const addTag = setTextInputValue.addTag;
                  const obj = { type: constants.ANSWER, text: obj2.getUserTag(user), userId: user.id };
                  obj2 = closure_2_1(closure_2_2[17]);
                  addTag(obj);
                  const result = setTextInputValue.restoreDraftTextInputValue();
                });
                let obj2 = search_tracking_TrackingDefault;
                const obj4 = { searchContext, searchTokenType: null, location: null };
                ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                obj2.trackSearchFilterAdd(obj4);
                P();
              }
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor() {
              let obj = SearchPlatformUtilsDefault;
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                let prefixTag;
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
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
              const user = UserStore.getUser(arg0);
              if (null != user) {
                const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
                if (null != prefixTag) {
                  let obj = SearchPlatformActionCreatorsDefault;
                  obj.updateSearchQuery(searchContext, (setTextInputValue) => {
                    let obj2;
                    setTextInputValue.setTextInputValue("");
                    const addTag = setTextInputValue.addTag;
                    const obj = { type: constants.ANSWER, text: obj2.getUserTag(user), userId: user.id };
                    obj2 = closure_2_1(closure_2_2[17]);
                    addTag(obj);
                    const result = setTextInputValue.restoreDraftTextInputValue();
                  });
                  let obj2 = search_tracking_TrackingDefault;
                  const obj4 = { searchContext, searchTokenType: null, location: null };
                  ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                  obj2.trackSearchFilterAdd(obj4);
                  P();
                }
              }
            }
          }
        } else {
          class G {
            constructor() {
              let obj = SearchPlatformUtilsDefault;
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                let prefixTag;
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
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
              let obj = SearchPlatformUtilsDefault;
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                let prefixTag;
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
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
              const user = UserStore.getUser(arg0);
              if (null != user) {
                const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
                if (null != prefixTag) {
                  let obj = SearchPlatformActionCreatorsDefault;
                  obj.updateSearchQuery(searchContext, (setTextInputValue) => {
                    let obj2;
                    setTextInputValue.setTextInputValue("");
                    const addTag = setTextInputValue.addTag;
                    const obj = { type: constants.ANSWER, text: obj2.getUserTag(user), userId: user.id };
                    obj2 = closure_2_1(closure_2_2[17]);
                    addTag(obj);
                    const result = setTextInputValue.restoreDraftTextInputValue();
                  });
                  let obj2 = search_tracking_TrackingDefault;
                  const obj4 = { searchContext, searchTokenType: null, location: null };
                  ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                  obj2.trackSearchFilterAdd(obj4);
                  P();
                }
              }
            }
          }
          cResult[25] = tmp29;
        } else {
          class G {
            constructor() {
              let obj = SearchPlatformUtilsDefault;
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                let prefixTag;
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
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
              let obj = SearchPlatformUtilsDefault;
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                let prefixTag;
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
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
              let obj = SearchPlatformUtilsDefault;
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                let prefixTag;
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
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
              const user = UserStore.getUser(arg0);
              if (null != user) {
                const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
                if (null != prefixTag) {
                  let obj = SearchPlatformActionCreatorsDefault;
                  obj.updateSearchQuery(searchContext, (setTextInputValue) => {
                    let obj2;
                    setTextInputValue.setTextInputValue("");
                    const addTag = setTextInputValue.addTag;
                    const obj = { type: constants.ANSWER, text: obj2.getUserTag(user), userId: user.id };
                    obj2 = closure_2_1(closure_2_2[17]);
                    addTag(obj);
                    const result = setTextInputValue.restoreDraftTextInputValue();
                  });
                  let obj2 = search_tracking_TrackingDefault;
                  const obj4 = { searchContext, searchTokenType: null, location: null };
                  ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                  obj2.trackSearchFilterAdd(obj4);
                  P();
                }
              }
            }
          }
          if (0 < fullscreenPlaceholderCount) {
            class G {
              constructor() {
                let obj = SearchPlatformUtilsDefault;
                return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                  let prefixTag;
                  const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                  prefixTag = isAutocompleteVisible.getPrefixTag();
                  if (prefixTag == null) {
                    prefixTag = null;
                  }
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
              let obj = SearchPlatformUtilsDefault;
              return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                let prefixTag;
                const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                prefixTag = isAutocompleteVisible.getPrefixTag();
                if (prefixTag == null) {
                  prefixTag = null;
                }
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
          const self = this;
          const tmpResult7 = tmp(tmp2[20]);
          class H {
            constructor(arg0) {
              const user = UserStore.getUser(arg0);
              if (null != user) {
                const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
                if (null != prefixTag) {
                  let obj = SearchPlatformActionCreatorsDefault;
                  obj.updateSearchQuery(searchContext, (setTextInputValue) => {
                    let obj2;
                    setTextInputValue.setTextInputValue("");
                    const addTag = setTextInputValue.addTag;
                    const obj = { type: constants.ANSWER, text: obj2.getUserTag(user), userId: user.id };
                    obj2 = closure_2_1(closure_2_2[17]);
                    addTag(obj);
                    const result = setTextInputValue.restoreDraftTextInputValue();
                  });
                  let obj2 = search_tracking_TrackingDefault;
                  const obj4 = { searchContext, searchTokenType: null, location: null };
                  ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                  obj2.trackSearchFilterAdd(obj4);
                  P();
                }
              }
            }
          }
          set = new Set(tmpResult7.getSearchQueryUserIds(searchContext));
          const _Set = Set;
          const self2 = this;
          const self3 = this;
          const tmpResult8 = tmp(tmp2[20]);
          set1 = new Set(tmpResult8.getSearchQueryChannelIds(searchContext));
          maybeAddUserItem = function maybeAddUserItem(arg0, arg1) {

          };
          function maybeAddChannelItem(arg0, arg1) {

          }
          ({ autocompletes, tokens, mode } = stateFromStores);
          let item = autocompletes.forEach((item) => {
            let blockedOrIgnored;
            let onPress;
            let results;
            if (mode.type === constants.FILTER) {
              ({ results, group: searchContext } = item);
              if (0 !== results.length) {
                item = results.forEach((item) => {
                  let channel;
                  let id;
                  let obj2;
                  let obj3;
                  let text;
                  let tmpResult3;
                  let tmpResult4;
                  let user;
                  ({ user, channel, text } = item);
                  const obj = AutocompleteScreenUtils;
                  const toSearchListUserItemResult = obj.toSearchListUserItem(searchContext, user, react);
                  if (user != null) {
                    id = user.id;
                  }
                  if (typeof maybeAddUserItem === "function") {
                    let id2;
                    const hasItem = null == toSearchListUserItemResult || null == id || set.has(id) || blockedOrIgnored.isBlockedOrIgnored(id);
                    if (!hasItem) {
                      set.add(id);
                      items5.push(toSearchListUserItemResult);
                    }
                    const tmpResult = AutocompleteScreenUtils;
                    const result = tmpResult.toSearchListChannelItem(channel, ChannelStore);
                    if (channel != null) {
                      id2 = channel.id;
                    }
                    if (typeof maybeAddChannelItem === "function") {
                      const hasItem1 = null == result || null == id2 || set1.has(id2);
                      if (!hasItem1) {
                        set1.add(id2);
                        items5.push(result);
                      }
                      const tmp23 = searchContext === constants2.FILTER_HAS && null != text;
                      if (tmp23) {
                        const element = { type: constants.GENERIC, props: obj2 };
                        const push = items5.push;
                        obj2 = { text, icon: tmpResult3.getSearchFilterHasIcon(text), onPress };
                        tmpResult3 = AutocompleteScreenUtils;
                        push(element);
                      }
                      const tmp28 = searchContext === constants2.FILTER_AUTHOR_TYPE && null != text;
                      if (tmp28) {
                        const element1 = { type: constants.GENERIC, props: obj3 };
                        const push2 = items5.push;
                        obj3 = { text, icon: tmpResult4.getSearchFilterAuthorTypeIcon(text), onPress };
                        tmpResult4 = AutocompleteScreenUtils;
                        push2(element1);
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
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
                let obj = SearchPlatformUtilsDefault;
                return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                  let prefixTag;
                  const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                  prefixTag = isAutocompleteVisible.getPrefixTag();
                  if (prefixTag == null) {
                    prefixTag = null;
                  }
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
                  let obj = SearchPlatformUtilsDefault;
                  return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                    let prefixTag;
                    const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                    prefixTag = isAutocompleteVisible.getPrefixTag();
                    if (prefixTag == null) {
                      prefixTag = null;
                    }
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
                  const user = UserStore.getUser(arg0);
                  if (null != user) {
                    const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
                    if (null != prefixTag) {
                      let obj = SearchPlatformActionCreatorsDefault;
                      obj.updateSearchQuery(searchContext, (setTextInputValue) => {
                        let obj2;
                        setTextInputValue.setTextInputValue("");
                        const addTag = setTextInputValue.addTag;
                        const obj = { type: constants.ANSWER, text: obj2.getUserTag(user), userId: user.id };
                        obj2 = closure_2_1(closure_2_2[17]);
                        addTag(obj);
                        const result = setTextInputValue.restoreDraftTextInputValue();
                      });
                      let obj2 = search_tracking_TrackingDefault;
                      const obj4 = { searchContext, searchTokenType: null, location: null };
                      ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
                      obj2.trackSearchFilterAdd(obj4);
                      P();
                    }
                  }
                }
              }
            }
          }
          if (items5.length <= 0) {
            class G {
              constructor() {
                let obj = SearchPlatformUtilsDefault;
                return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
                  let prefixTag;
                  const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
                  prefixTag = isAutocompleteVisible.getPrefixTag();
                  if (prefixTag == null) {
                    prefixTag = null;
                  }
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
        }
        cResult[26] = stateFromStores;
        cResult[27] = tmp23;
        cResult[28] = Q;
        cResult[29] = H;
        cResult[30] = tmp10;
        cResult[31] = fullscreenPlaceholderCount;
        cResult[32] = searchContext;
        cResult[33] = tmp37;
      }
      class H {
        constructor(arg0) {
          const user = UserStore.getUser(arg0);
          if (null != user) {
            const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
            if (null != prefixTag) {
              let obj = SearchPlatformActionCreatorsDefault;
              obj.updateSearchQuery(searchContext, (setTextInputValue) => {
                let obj2;
                setTextInputValue.setTextInputValue("");
                const addTag = setTextInputValue.addTag;
                const obj = { type: constants.ANSWER, text: obj2.getUserTag(user), userId: user.id };
                obj2 = closure_2_1(closure_2_2[17]);
                addTag(obj);
                const result = setTextInputValue.restoreDraftTextInputValue();
              });
              let obj2 = search_tracking_TrackingDefault;
              const obj4 = { searchContext, searchTokenType: null, location: null };
              ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
              obj2.trackSearchFilterAdd(obj4);
              P();
            }
          }
        }
      }
      cResult[17] = searchContext;
      cResult[18] = tmp19;
      cResult[19] = tmp23;
    }
    class H {
      constructor(arg0) {
        const user = UserStore.getUser(arg0);
        if (null != user) {
          const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
          if (null != prefixTag) {
            let obj = SearchPlatformActionCreatorsDefault;
            obj.updateSearchQuery(searchContext, (setTextInputValue) => {
              let obj2;
              setTextInputValue.setTextInputValue("");
              const addTag = setTextInputValue.addTag;
              const obj = { type: constants.ANSWER, text: obj2.getUserTag(user), userId: user.id };
              obj2 = closure_2_1(closure_2_2[17]);
              addTag(obj);
              const result = setTextInputValue.restoreDraftTextInputValue();
            });
            let obj2 = search_tracking_TrackingDefault;
            const obj4 = { searchContext, searchTokenType: null, location: null };
            ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
            obj2.trackSearchFilterAdd(obj4);
            P();
          }
        }
      }
    }
    cResult[14] = searchContext;
    cResult[15] = tmp19;
    cResult[16] = H;
  }
  class Q {
    constructor(arg0) {
      let closure_0 = arg0;
      const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
      if (null != prefixTag) {
        let obj = SearchPlatformActionCreatorsDefault;
        obj.updateSearchQuery(searchContext, (setTextInputValue) => {
          setTextInputValue.setTextInputValue("");
          const obj = { type: constants.ANSWER, text };
          setTextInputValue.addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        const obj4 = { searchContext, searchTokenType: null, location: null };
        ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
        const obj2 = search_tracking_TrackingDefault;
        obj2.trackSearchFilterAdd(obj4);
        P();
      }
    }
  }
  cResult[11] = searchContext;
  cResult[12] = tmp19;
  cResult[13] = Q;
}) : ((searchContext) => {
  let closure_3;
  let first;
  let tmp18;
  searchContext = searchContext.searchContext;
  first = undefined;
  _slicedToArray = undefined;
  let fullscreenPlaceholderCount;
  let callback3;
  let tmp = searchContext;
  const tmp2 = first;
  let obj = searchContext(first[12]);
  let items = [callback3];
  const items1 = [searchContext];
  const stateFromStores = obj.useStateFromStores(items, () => SearchAutocompleteStore.getState(searchContext), items1, searchContext(first[12]).statesWillNeverBeEqual);
  [first, _slicedToArray] = fullscreenPlaceholderCount.useState(false);
  let obj2 = searchContext(first[12]);
  const items2 = [SearchQueryStore];
  const items3 = [searchContext];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => SearchQueryStore.isTextInputValueEmpty(searchContext), items3);
  let obj3 = searchContext(first[13]);
  let obj4 = { placeholderHeight, numColumns: 1 };
  fullscreenPlaceholderCount = obj3.useFullscreenPlaceholderCount(obj4);
  const items4 = [searchContext];
  const callback = fullscreenPlaceholderCount.useCallback(() => {
    const obj = SearchPlatformUtilsDefault;
    obj.syncAutocomplete(searchContext);
    const obj2 = SearchPlatformUtilsDefault;
    const initialMessages = obj2.fetchInitialMessages(searchContext);
  }, items4);
  const items5 = [callback, searchContext];
  const callback1 = fullscreenPlaceholderCount.useCallback((arg0) => {
    let closure_0 = arg0;
    const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
    if (null != prefixTag) {
      let obj = SearchPlatformActionCreatorsDefault;
      obj.updateSearchQuery(searchContext, (setTextInputValue) => {
        setTextInputValue.setTextInputValue("");
        const obj = { type: constants.ANSWER, text };
        setTextInputValue.addTag(obj);
        const result = setTextInputValue.restoreDraftTextInputValue();
      });
      const obj4 = { searchContext, searchTokenType: null, location: null };
      ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
      const obj2 = search_tracking_TrackingDefault;
      obj2.trackSearchFilterAdd(obj4);
      callback();
    }
  }, items5);
  const items6 = [callback, searchContext];
  const callback2 = fullscreenPlaceholderCount.useCallback((arg0) => {
    const user = UserStore.getUser(arg0);
    if (null != user) {
      const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
      if (null != prefixTag) {
        let obj = SearchPlatformActionCreatorsDefault;
        obj.updateSearchQuery(searchContext, (setTextInputValue) => {
          let obj2;
          setTextInputValue.setTextInputValue("");
          const addTag = setTextInputValue.addTag;
          const obj = { type: constants.ANSWER, text: obj2.getUserTag(user), userId: user.id };
          obj2 = stateFromStores(first[17]);
          addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        let obj2 = search_tracking_TrackingDefault;
        const obj4 = { searchContext, searchTokenType: null, location: null };
        ({ searchTokenType: obj3.searchTokenType, location: obj3.location } = prefixTag);
        obj2.trackSearchFilterAdd(obj4);
        callback();
      }
    }
  }, items6);
  const items7 = [callback, searchContext];
  callback3 = fullscreenPlaceholderCount.useCallback((arg0) => {
    let closure_0 = arg0;
    const channel = ChannelStore.getChannel(arg0);
    if (null != channel) {
      const prefixTag = SearchQueryStore.getPrefixTag(searchContext);
      if (null != prefixTag) {
        const obj5 = useChannelName;
        let userTag = obj5.computeChannelName(channel, UserStore, RelationshipStore);
        if (channel.isDM()) {
          const user = UserStore.getUser(channel.getRecipientId());
          if (null != user) {
            const obj7 = UserUtilsDefault;
            userTag = obj7.getUserTag(user);
          }
        }
        let obj2 = SearchPlatformActionCreatorsDefault;
        obj2.updateSearchQuery(searchContext, (setTextInputValue) => {
          let obj2;
          setTextInputValue.setTextInputValue("");
          const addTag = setTextInputValue.addTag;
          const obj = { type: constants.ANSWER, text: obj2.quoteChannelName(closure_1), channelId };
          obj2 = searchContext(first[19]);
          addTag(obj);
          const result = setTextInputValue.restoreDraftTextInputValue();
        });
        let obj = { searchContext, searchTokenType: null, location: null };
        ({ searchTokenType: obj4.searchTokenType, location: obj4.location } = prefixTag);
        const obj3 = search_tracking_TrackingDefault;
        obj3.trackSearchFilterAdd(obj);
        callback();
      }
    }
  }, items7);
  const items8 = [searchContext];
  const effect = fullscreenPlaceholderCount.useEffect(() => {
    let obj = SearchPlatformUtilsDefault;
    return obj.subscribeSearchQueryState(searchContext, (isAutocompleteVisible) => {
      let prefixTag;
      const obj = { isAutocompleteVisible: isAutocompleteVisible.isAutocompleteVisible(), textInputValue: isAutocompleteVisible.getTextInputValue(), prefixTag };
      prefixTag = isAutocompleteVisible.getPrefixTag();
      if (prefixTag == null) {
        prefixTag = null;
      }
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
    }, true);
  }, items8);
  const items9 = [stateFromStores.autocompletes];
  const effect1 = fullscreenPlaceholderCount.useEffect(() => {
    closure_3(false);
  }, items9);
  const items10 = [first, searchContext, fullscreenPlaceholderCount, stateFromStores, callback2, callback3, callback1];
  const memo = fullscreenPlaceholderCount.useMemo(function() {
    let autocompletes;
    let blockedOrIgnored;
    let mode;
    let set1;
    let tokens;
    const items = [];
    const tmp = set1;
    if (tmp) {
      let num2;
      for (let num2 = 0; num2 < fullscreenPlaceholderCount; num2 = num2 + 1) {
        let obj2 = { type: constants.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num2 };
        let _HermesInternal = HermesInternal;
        let push = items.push;
        let arr = push(obj2);
      }
      return items;
    } else {
      const _Set = Set;
      let obj = searchContext(first[20]);
      const self = this;
      const self2 = this;
      set = new Set(obj.getSearchQueryUserIds(items));
      const _Set2 = Set;
      let obj3 = searchContext(first[20]);
      const self3 = this;
      const self4 = this;
      set1 = new Set(obj3.getSearchQueryChannelIds(items));
      ({ autocompletes, tokens, mode } = set);
      let item = autocompletes.forEach((item) => {
        let results;
        if (mode.type === constants2.FILTER) {
          ({ results, group: items } = item);
          if (0 !== results.length) {
            item = results.forEach((item) => {
              let channel;
              let obj2;
              let obj3;
              let text;
              let tmpResult3;
              let tmpResult4;
              let user;
              ({ user, channel, text } = item);
              const obj = AutocompleteScreenUtils;
              const toSearchListUserItemResult = obj.toSearchListUserItem(searchContext, user, callback2);
              let id;
              if (user != null) {
                id = user.id;
              }
              const hasItem = null == toSearchListUserItemResult || null == id || set.has(id) || blockedOrIgnored.isBlockedOrIgnored(id);
              if (!hasItem) {
                set.add(id);
                items.push(toSearchListUserItemResult);
              }
              const tmpResult = AutocompleteScreenUtils;
              const result = tmpResult.toSearchListChannelItem(channel, callback3);
              let id1;
              if (channel != null) {
                id1 = channel.id;
              }
              const hasItem1 = null == result || null == id1 || set1.has(id1);
              if (!hasItem1) {
                set1.add(id1);
                items.push(result);
              }
              const tmp22 = items === constants2.FILTER_HAS && null != text;
              if (tmp22) {
                const element = { type: constants.GENERIC, props: obj2 };
                const push = items.push;
                obj2 = { text, icon: tmpResult3.getSearchFilterHasIcon(text), onPress: callback1 };
                tmpResult3 = AutocompleteScreenUtils;
                push(element);
              }
              const tmp27 = items === constants2.FILTER_AUTHOR_TYPE && null != text;
              if (tmp27) {
                const element1 = { type: constants.GENERIC, props: obj3 };
                const push2 = items.push;
                obj3 = { text, icon: tmpResult4.getSearchFilterAuthorTypeIcon(text), onPress: callback1 };
                tmpResult4 = AutocompleteScreenUtils;
                push2(element1);
              }
            });
          }
        }
      });
      if (0 === items.length) {
        if (mode.type !== constants2.FILTER) {
          if (null != tokens[tokens.length - 1]) {
            const self5 = this;
            const self6 = this;
            const token = new searchContext(first[21]).Token(tmp29);
            if (token.type === constants3.ANSWER_USERNAME_FROM) {
              const tmp3Result = searchContext(first[22]);
              if (tmp3Result.isValidUserAutocomplete(token)) {
                const data = token.getData("userId");
                if (null != data) {
                  const user = callback2.getUser(data);
                  const tmp3Result3 = searchContext(first[20]);
                  let toSearchListUserItemResult = tmp3Result3.toSearchListUserItem(tmp5, user, callback2);
                  let id;
                  if (user != null) {
                    id = user.id;
                  }
                  const isBlockedOrIgnoredResult = null == toSearchListUserItemResult || null == id || set.has(id) || callback1.isBlockedOrIgnored(id);
                  if (!isBlockedOrIgnoredResult) {
                    set.add(id);
                    items.push(toSearchListUserItemResult);
                  }
                }
              }
            }
            if (token.type === constants3.ANSWER_IN) {
              const tmp3Result4 = searchContext(first[22]);
              if (tmp3Result4.isValidChannelAutocomplete(token, items)) {
                const data1 = token.getData("channelIds");
                if (null != data1) {
                  const item1 = data1.forEach((item) => {
                    const channel = ChannelStore.getChannel(item);
                    const obj = AutocompleteScreenUtils;
                    const result = obj.toSearchListChannelItem(channel, callback3);
                    let id;
                    if (channel != null) {
                      id = channel.id;
                    }
                    const hasItem = null == result || null == id || set1.has(id);
                    if (!hasItem) {
                      set1.add(id);
                      items.push(result);
                    }
                  });
                }
              }
            }
          }
        }
      }
      let tmp22 = items;
      if (items.length <= 0) {
        tmp22 = closure_1_16;
      }
      return tmp22;
    }
  }, items10);
  let obj5 = searchContext(first[23]);
  const messageTabCountsErrorText = obj5.useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    tmp18 = jsx(stateFromStores(tmp2[24]), { text: messageTabCountsErrorText });
  } else {
    if (stateFromStores1) {
      if (0 === memo.length) {
        let tmp22 = stateFromStores;
        stateFromStores(tmp2[24]);
        const intl2 = tmp(tmp2[25]).intl;
        tmp18 = <tmp23 text={intl2.string(tmp(tmp2[25]).t["E4HqQ+"])} />;
      }
    }
    if (!stateFromStores1) {
      const num2 = 0;
      if (0 === memo.length) {
        if (!first) {
          stateFromStores(tmp2[24]);
          const intl = tmp(tmp2[25]).intl;
          tmp18 = <tmp17 text={intl.string(tmp(tmp2[25]).t.Dr1vko)} />;
        }
      }
    }
    tmp18 = jsx(stateFromStores(tmp2[26]), { data: memo });
  }
  return tmp18;
}));
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx");

export default memoResult;