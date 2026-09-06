// discord_app/modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx
import util from "../../../../../../intl/index.native.tsx";
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

({ EMPTY_SEARCH_QUERY_STRING: c3, SearchQueryTagTypes: closure_4 } = SearchConstants);
const SearchFilterAddLocations = TrackingConstants.SearchFilterAddLocations;
({ SEARCH_DATE_FORMAT: metroRequire, SearchTokenTypes: closure_7, SearchTypes: closure_8 } = Constants);
let result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx");

export const getSearchTokenLabel = function getSearchTokenLabel(type, item) {
  if (constants.FILTER_FROM === item) {
    const intl9 = util.intl;
    return intl9.string(util.t["6iuVMn"]);
  } else if (tmp.FILTER_HAS === item) {
    const intl8 = util.intl;
    return intl8.string(util.t.DMAzx8);
  } else if (tmp.FILTER_MENTIONS === item) {
    const intl7 = util.intl;
    return intl7.string(util.t.CMKzQx);
  } else if (tmp.FILTER_IN === item) {
    if (type.type === constants2.DMS) {
      const intl6 = util.intl;
      let stringResult = intl6.string(util.t["8Fmo42"]);
    } else {
      const intl5 = util.intl;
      stringResult = intl5.string(util.t.cdPmq8);
    }
    return stringResult;
  } else if (tmp.FILTER_ON === item) {
    const intl4 = util.intl;
    return intl4.string(util.t.h4qGfp);
  } else if (tmp.FILTER_BEFORE === item) {
    const intl3 = util.intl;
    return intl3.string(util.t.c9qSBR);
  } else if (tmp.FILTER_AFTER === item) {
    const intl2 = util.intl;
    return intl2.string(util.t.hcMwDW);
  } else if (tmp.FILTER_AUTHOR_TYPE === item) {
    const intl = util.intl;
    return intl.string(util.t.C4r6xL);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenLabel] Unhandled search token type: " + item);
    throw error;
  }
};
export const getSearchTokenSubLabel = function getSearchTokenSubLabel(searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    const intl8 = util.intl;
    return intl8.string(util.t.kkGlww);
  } else if (tmp.FILTER_HAS === searchTokenType) {
    const intl7 = util.intl;
    return intl7.string(util.t.gUfZa2);
  } else if (tmp.FILTER_IN === searchTokenType) {
    const intl6 = util.intl;
    return intl6.string(util.t.qDUdlT);
  } else if (tmp.FILTER_MENTIONS === searchTokenType) {
    const intl5 = util.intl;
    return intl5.string(util.t.ILtwK5);
  } else if (tmp.FILTER_ON === searchTokenType) {
    const intl4 = util.intl;
    return intl4.string(util.t.t8bWvr);
  } else if (tmp.FILTER_BEFORE === searchTokenType) {
    const intl3 = util.intl;
    return intl3.string(util.t.YEN3uU);
  } else if (tmp.FILTER_AFTER === searchTokenType) {
    const intl2 = util.intl;
    return intl2.string(util.t.hwbB7s);
  } else if (tmp.FILTER_AUTHOR_TYPE === searchTokenType) {
    const intl = util.intl;
    return intl.string(util.t.tJPdhZ);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenSubLabel] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenIcon = function getSearchTokenIcon(searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    return UserIcon.UserIcon;
  } else if (tmp.FILTER_HAS === searchTokenType) {
    return AttachmentIcon.AttachmentIcon;
  } else if (tmp.FILTER_IN === searchTokenType) {
    return ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon;
  } else if (tmp.FILTER_MENTIONS === searchTokenType) {
    return AtIcon.AtIcon;
  } else if (tmp.FILTER_ON === searchTokenType) {
    return CalendarIcon.CalendarIcon;
  } else if (tmp.FILTER_BEFORE === searchTokenType) {
    return CalendarMinusIcon.CalendarMinusIcon;
  } else if (tmp.FILTER_AFTER === searchTokenType) {
    return CalendarPlusIcon.CalendarPlusIcon;
  } else if (tmp.FILTER_AUTHOR_TYPE === searchTokenType) {
    return RobotIcon.RobotIcon;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenIcon] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenPressHandler = function getSearchTokenPressHandler(arg0, token, CONTEXT_MENU) {
  closure_0 = arg0;
  closure_1 = token;
  closure_2 = CONTEXT_MENU;
  if (constants.FILTER_FROM !== token) {
    if (tmp.FILTER_IN !== token) {
      if (tmp.FILTER_HAS !== token) {
        if (tmp.FILTER_MENTIONS !== token) {
          if (tmp.FILTER_AUTHOR_TYPE !== token) {
            if (tmp.FILTER_ON !== token) {
              if (tmp.FILTER_BEFORE !== token) {
                if (tmp.FILTER_AFTER !== token) {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error = new Error("[getSearchTokenPressHandler] Unhandled search token type: " + token);
                  throw error;
                }
              }
            }
            return () => {
              let result = SearchPlatformUtils.performKeyboardAwareNavigation(() => {
                searchTokenType(paths[15]);
                let obj = {
                  onSubmit(format) {
                    searchContext = format.format(closure_1_6);
                    let obj = searchTokenType(_location[13]);
                    obj.updateSearchQuery(searchContext, (setTextInputValue) => {
                      if (_location === constants2.SEARCH_INPUT_DROPDOWN) {
                        setTextInputValue.setTextInputValue(closure_3_3);
                      }
                      setTextInputValue.removePrefixTags();
                      const obj = { type: constants.COMPLETE, text: null, searchTokenType: null, location: null };
                      let tmp7 = closure_1(closure_2[12])[searchTokenType];
                      if (null == tmp7) {
                        const result = closure_0(tmp6[12]).rebuildSearchTokenConfigs();
                        tmp7 = closure_1(tmp6[12])[str];
                        const obj2 = closure_0(tmp6[12]);
                      }
                      let key;
                      if (tmp7 != null) {
                        key = tmp7.key;
                      }
                      if (key == null) {
                        key = str.toString();
                      }
                      obj.text = "" + key + " " + closure_0;
                      obj.searchTokenType = searchTokenType;
                      obj.location = _location;
                      setTextInputValue.addTag(obj);
                    });
                    obj = { searchContext, searchTokenType, location: _location };
                    searchTokenType(_location[18]).trackSearchFilterAdd(obj);
                    let obj2 = searchTokenType(_location[18]);
                    const initialMessages = searchTokenType(_location[14]).fetchInitialMessages(searchContext);
                  },
                };
                obj.openLazy(searchContext(paths[17])(paths[16], paths.paths), "DatePicker", obj);
              });
            };
          }
        }
      }
    }
  }
  return () => {
    const searchTokenType = _location;
    _location = closure_2;
    SearchPlatformActionCreatorsDefault.updateSearchQuery(searchTokenType, (saveDraftTextInputValue) => {
      if (_location === constants2.CONTEXT_MENU) {
        const result = saveDraftTextInputValue.saveDraftTextInputValue();
      }
      saveDraftTextInputValue.setTextInputValue(closure_2_3);
      const obj = { type: constants.PREFIX, searchTokenType, location: _location, text: null };
      let tmp6 = _location(closure_2[12])[searchTokenType];
      if (null == tmp6) {
        const result1 = searchTokenType(tmp5[12]).rebuildSearchTokenConfigs();
        tmp6 = _location(tmp5[12])[str];
        const obj2 = searchTokenType(tmp5[12]);
      }
      let key;
      if (tmp6 != null) {
        key = tmp6.key;
      }
      if (key == null) {
        key = str.toString();
      }
      obj.text = key;
      saveDraftTextInputValue.addTag(obj);
    });
    SearchPlatformUtilsDefault.syncAutocomplete(searchTokenType);
  };
};
export const getSearchFilterSuggestions = function getSearchFilterSuggestions(textInputValue) {
  closure_0 = textInputValue;
  const items = [];
  const keys = Object.keys(items(12341));
  const item = keys.forEach((token) => {
    let obj = SearchTokens;
    if (obj.isSearchFilterTokenType(token)) {
      const plainText = SearchTokensDefault[token].plainText;
      if (null != plainText) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + plainText + "(?:: ?)?$", "i");
        if (regExp.test(closure_0)) {
          obj = { token, text: plainText };
          items.push(obj);
        }
      }
    }
  });
  return items;
};
