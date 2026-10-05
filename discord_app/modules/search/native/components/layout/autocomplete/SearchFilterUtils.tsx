// discord_app/modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx
import intl10 from "../../../../../../intl/index.native.tsx";
import AtIcon from "../../../../../../design/components/Icon/native/redesign/generated/AtIcon.tsx";
import TrackingConstants from "../../../tracking/TrackingConstants.tsx";
import RobotIcon from "../../../../../../design/components/Icon/native/redesign/generated/RobotIcon.tsx";
import CalendarIcon from "../../../../../../design/components/Icon/native/redesign/generated/CalendarIcon.tsx";
import AttachmentIcon from "../../../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import UserIcon from "../../../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import CalendarPlusIcon from "../../../../../../design/components/Icon/native/redesign/generated/CalendarPlusIcon.tsx";
import SearchPlatformUtils from "../../../SearchPlatformUtils.tsx";
import SearchTokens from "../../../../tokens/SearchTokens.tsx";
import SearchPlatformActionCreatorsDefault from "../../../SearchPlatformActionCreators.tsx";
import ChannelListMagnifyingGlassIcon from "../../../../../../design/components/Icon/native/redesign/generated/ChannelListMagnifyingGlassIcon.tsx";
import CalendarMinusIcon from "../../../../../../design/components/Icon/native/redesign/generated/CalendarMinusIcon.tsx";
import SearchConstants from "../../../../SearchConstants.tsx";
import Constants from "../../../../../../Constants.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const SearchPlatformUtilsDefault = SearchPlatformUtils;
const SearchTokensDefault = SearchTokens;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ EMPTY_SEARCH_QUERY_STRING: c3, SearchQueryTagTypes: closure_4 } = SearchConstants);
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
({ SEARCH_DATE_FORMAT: metroRequire, SearchTokenTypes: metroImportDefault, SearchTypes: metroImportAll } = Constants);
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx");

export const getSearchTokenLabel = function getSearchTokenLabel(searchContext, item) {
  if (metroImportDefault.FILTER_FROM === item) {
    const intl9 = intl10.intl;
    return intl9.string(intl10.t["6iuVMn"]);
  } else if (metroImportDefault.FILTER_HAS === item) {
    const intl8 = intl10.intl;
    return intl8.string(intl10.t.DMAzx8);
  } else if (metroImportDefault.FILTER_MENTIONS === item) {
    const intl7 = intl10.intl;
    return intl7.string(intl10.t.CMKzQx);
  } else if (metroImportDefault.FILTER_IN === item) {
    let stringResult;
    if (searchContext.type === metroImportAll.DMS) {
      const intl6 = intl10.intl;
      stringResult = intl6.string(intl10.t["8Fmo42"]);
    } else {
      const intl5 = intl10.intl;
      stringResult = intl5.string(intl10.t.cdPmq8);
    }
    return stringResult;
  } else if (metroImportDefault.FILTER_ON === item) {
    const intl4 = intl10.intl;
    return intl4.string(intl10.t.h4qGfp);
  } else if (metroImportDefault.FILTER_BEFORE === item) {
    const intl3 = intl10.intl;
    return intl3.string(intl10.t.c9qSBR);
  } else if (metroImportDefault.FILTER_AFTER === item) {
    const intl2 = intl10.intl;
    return intl2.string(intl10.t.hcMwDW);
  } else if (metroImportDefault.FILTER_AUTHOR_TYPE === item) {
    const intl = intl10.intl;
    return intl.string(intl10.t.C4r6xL);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[getSearchTokenLabel] Unhandled search token type: " + item);
    throw error;
  }
};
export const getSearchTokenSubLabel = function getSearchTokenSubLabel(cResult) {
  if (metroImportDefault.FILTER_FROM === cResult) {
    const intl8 = intl10.intl;
    return intl8.string(intl10.t.kkGlww);
  } else if (metroImportDefault.FILTER_HAS === cResult) {
    const intl7 = intl10.intl;
    return intl7.string(intl10.t.gUfZa2);
  } else if (metroImportDefault.FILTER_IN === cResult) {
    const intl6 = intl10.intl;
    return intl6.string(intl10.t.qDUdlT);
  } else if (metroImportDefault.FILTER_MENTIONS === cResult) {
    const intl5 = intl10.intl;
    return intl5.string(intl10.t.ILtwK5);
  } else if (metroImportDefault.FILTER_ON === cResult) {
    const intl4 = intl10.intl;
    return intl4.string(intl10.t.t8bWvr);
  } else if (metroImportDefault.FILTER_BEFORE === cResult) {
    const intl3 = intl10.intl;
    return intl3.string(intl10.t.YEN3uU);
  } else if (metroImportDefault.FILTER_AFTER === cResult) {
    const intl2 = intl10.intl;
    return intl2.string(intl10.t.hwbB7s);
  } else if (metroImportDefault.FILTER_AUTHOR_TYPE === cResult) {
    const intl = intl10.intl;
    return intl.string(intl10.t.tJPdhZ);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[getSearchTokenSubLabel] Unhandled search token type: " + cResult);
    throw error;
  }
};
export const getSearchTokenIcon = function getSearchTokenIcon(cResult) {
  if (metroImportDefault.FILTER_FROM === cResult) {
    return UserIcon.UserIcon;
  } else if (metroImportDefault.FILTER_HAS === cResult) {
    return AttachmentIcon.AttachmentIcon;
  } else if (metroImportDefault.FILTER_IN === cResult) {
    return ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon;
  } else if (metroImportDefault.FILTER_MENTIONS === cResult) {
    return AtIcon.AtIcon;
  } else if (metroImportDefault.FILTER_ON === cResult) {
    return CalendarIcon.CalendarIcon;
  } else if (metroImportDefault.FILTER_BEFORE === cResult) {
    return CalendarMinusIcon.CalendarMinusIcon;
  } else if (metroImportDefault.FILTER_AFTER === cResult) {
    return CalendarPlusIcon.CalendarPlusIcon;
  } else if (metroImportDefault.FILTER_AUTHOR_TYPE === cResult) {
    return RobotIcon.RobotIcon;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[getSearchTokenIcon] Unhandled search token type: " + cResult);
    throw error;
  }
};
export const getSearchTokenPressHandler = function getSearchTokenPressHandler(searchContext, token, CONTEXT_MENU) {
  let closure_0 = searchContext;
  let closure_1 = token;
  let closure_2 = CONTEXT_MENU;
  if (constants.FILTER_FROM !== token) {
    if (constants.FILTER_IN !== token) {
      if (constants.FILTER_HAS !== token) {
        if (constants.FILTER_MENTIONS !== token) {
          if (constants.FILTER_AUTHOR_TYPE !== token) {
            if (constants.FILTER_ON !== token) {
              if (constants.FILTER_BEFORE !== token) {
                if (constants.FILTER_AFTER !== token) {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const self = this;
                  const self2 = this;
                  const error = new Error("[getSearchTokenPressHandler] Unhandled search token type: " + token);
                  throw error;
                }
              }
            }
            return () => {
              let paths;
              let obj = SearchPlatformUtils;
              let result = obj.performKeyboardAwareNavigation(() => {
                let _location;
                let searchTokenType;
                let obj = token(paths[15]);
                let obj2 = {
                  onSubmit(format) {
                    searchContext = format.format(closure_1_6);
                    let obj = searchTokenType(_location[13]);
                    obj.updateSearchQuery(searchContext, (setTextInputValue) => {
                      let key;
                      if (_location === constants2.SEARCH_INPUT_DROPDOWN) {
                        setTextInputValue.setTextInputValue(closure_3_3);
                      }
                      setTextInputValue.removePrefixTags();
                      const addTag = setTextInputValue.addTag;
                      const obj = {
                        type: constants.COMPLETE,
                        text: "" + key + " " + closure_0,
                        searchTokenType,
                        location: _location,
                      };
                      let tmp7 = closure_1(closure_2[12])[searchTokenType];
                      if (null == tmp7) {
                        const obj2 = closure_0(closure_2[12]);
                        const result = obj2.rebuildSearchTokenConfigs();
                        tmp7 = closure_1(closure_2[12])[searchTokenType];
                      }
                      key = undefined;
                      if (tmp7 != null) {
                        key = tmp7.key;
                      }
                      if (key == null) {
                        key = searchTokenType.toString();
                      }
                      addTag(obj);
                    });
                    let obj2 = searchTokenType(_location[18]);
                    const obj3 = { searchContext, searchTokenType, location: _location };
                    obj2.trackSearchFilterAdd(obj3);
                    const obj4 = searchTokenType(_location[14]);
                    const initialMessages = obj4.fetchInitialMessages(searchContext);
                  },
                };
                obj.openLazy(searchContext(paths[17])(paths[16], paths.paths), "DatePicker", obj2);
              });
            };
          }
        }
      }
    }
  }
  return () => {
    let closure_0 = closure_1;
    closure_1 = CONTEXT_MENU;
    let obj = SearchPlatformActionCreatorsDefault;
    obj.updateSearchQuery(closure_0, (saveDraftTextInputValue) => {
      let key;
      if (_location === constants2.CONTEXT_MENU) {
        const result = saveDraftTextInputValue.saveDraftTextInputValue();
      }
      saveDraftTextInputValue.setTextInputValue(closure_2_3);
      const addTag = saveDraftTextInputValue.addTag;
      const obj = { type: constants.PREFIX, searchTokenType, location: _location, text: key };
      let tmp6 = token(CONTEXT_MENU[12])[searchTokenType];
      if (null == tmp6) {
        const obj2 = searchContext(CONTEXT_MENU[12]);
        const result1 = obj2.rebuildSearchTokenConfigs();
        tmp6 = token(CONTEXT_MENU[12])[searchTokenType];
      }
      key = undefined;
      if (tmp6 != null) {
        key = tmp6.key;
      }
      if (key == null) {
        key = searchTokenType.toString();
      }
      addTag(obj);
    });
    let obj2 = SearchPlatformUtilsDefault;
    obj2.syncAutocomplete(closure_0);
  };
};
export const getSearchFilterSuggestions = function getSearchFilterSuggestions(textInputValue) {
  let closure_0 = textInputValue;
  const items = [];
  const keys = Object.keys(items(11969));
  const item = keys.forEach(function (token) {
    const obj = SearchTokens;
    if (obj.isSearchFilterTokenType(token)) {
      const plainText = SearchTokensDefault[token].plainText;
      if (null != plainText) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const regExp = new RegExp("^" + plainText + "(?:: ?)?$", "i");
        if (regExp.test(textInputValue)) {
          const obj2 = { token, text: plainText };
          items.push(obj2);
        }
      }
    }
  });
  return items;
};
