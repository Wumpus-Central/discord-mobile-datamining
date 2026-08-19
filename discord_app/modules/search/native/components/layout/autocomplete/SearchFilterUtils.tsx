// discord_app/modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx
import obj132 from "../../../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import AtIcon from "../../../../../../design/components/Icon/native/redesign/generated/AtIcon.tsx";
import SearchEntrypointAnalyticsLocations from "../../../tracking/TrackingConstants.tsx";
import CalendarIcon from "../../../../../../design/components/Icon/native/redesign/generated/CalendarIcon.tsx";
import RobotIcon from "../../../../../../design/components/Icon/native/redesign/generated/RobotIcon.tsx";
import AttachmentIcon from "../../../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import UserIcon from "../../../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import ChannelListMagnifyingGlassIcon from "../../../../../../design/components/Icon/native/redesign/generated/ChannelListMagnifyingGlassIcon.tsx";
import CalendarMinusIcon from "../../../../../../design/components/Icon/native/redesign/generated/CalendarMinusIcon.tsx";
import CalendarPlusIcon from "../../../../../../design/components/Icon/native/redesign/generated/CalendarPlusIcon.tsx";
import MessageEmbedTypes from "../../../../SearchConstants.tsx";
import ME from "../../../../../../Constants.tsx";

({ EMPTY_SEARCH_QUERY_STRING: c3, SearchQueryTagTypes: c4 } = MessageEmbedTypes);
const SearchFilterAddLocations = SearchEntrypointAnalyticsLocations.SearchFilterAddLocations;
({ SEARCH_DATE_FORMAT: closure_6, SearchTokenTypes: error, SearchTypes: closure_8 } = ME);
let result = obj132.fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx");

export const getSearchTokenLabel = function getSearchTokenLabel(closure_0, item) {
  if (constants.FILTER_FROM === item) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t["6iuVMn"]);
  } else if (constants.FILTER_HAS === item) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.DMAzx8);
  } else if (constants.FILTER_MENTIONS === item) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.CMKzQx);
  } else if (constants.FILTER_IN === item) {
    if (_require.type === constants2.DMS) {
      const intl6 = getSystemLocale.intl;
      let stringResult = intl6.string(getSystemLocale.t["8Fmo42"]);
    } else {
      const intl5 = getSystemLocale.intl;
      stringResult = intl5.string(getSystemLocale.t.cdPmq8);
    }
    return stringResult;
  } else if (constants.FILTER_ON === item) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.h4qGfp);
  } else if (constants.FILTER_BEFORE === item) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.c9qSBR);
  } else if (constants.FILTER_AFTER === item) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.hcMwDW);
  } else if (constants.FILTER_AUTHOR_TYPE === item) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.C4r6xL);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("[getSearchTokenLabel] Unhandled search token type: " + item);
    throw error;
  }
};
export const getSearchTokenSubLabel = function getSearchTokenSubLabel(searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.kkGlww);
  } else if (constants.FILTER_HAS === searchTokenType) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.gUfZa2);
  } else if (constants.FILTER_IN === searchTokenType) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.qDUdlT);
  } else if (constants.FILTER_MENTIONS === searchTokenType) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.ILtwK5);
  } else if (constants.FILTER_ON === searchTokenType) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.t8bWvr);
  } else if (constants.FILTER_BEFORE === searchTokenType) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.YEN3uU);
  } else if (constants.FILTER_AFTER === searchTokenType) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.hwbB7s);
  } else if (constants.FILTER_AUTHOR_TYPE === searchTokenType) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.tJPdhZ);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("[getSearchTokenSubLabel] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenIcon = function getSearchTokenIcon(searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    return UserIcon.UserIcon;
  } else if (constants.FILTER_HAS === searchTokenType) {
    return AttachmentIcon.AttachmentIcon;
  } else if (constants.FILTER_IN === searchTokenType) {
    return ChannelListMagnifyingGlassIcon.ChannelListMagnifyingGlassIcon;
  } else if (constants.FILTER_MENTIONS === searchTokenType) {
    return AtIcon.AtIcon;
  } else if (constants.FILTER_ON === searchTokenType) {
    return CalendarIcon.CalendarIcon;
  } else if (constants.FILTER_BEFORE === searchTokenType) {
    return CalendarMinusIcon.CalendarMinusIcon;
  } else if (constants.FILTER_AFTER === searchTokenType) {
    return CalendarPlusIcon.CalendarPlusIcon;
  } else if (constants.FILTER_AUTHOR_TYPE === searchTokenType) {
    return RobotIcon.RobotIcon;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("[getSearchTokenIcon] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenPressHandler = function getSearchTokenPressHandler(closure_0, token, CONTEXT_MENU) {
  closure_1 = token;
  closure_2 = CONTEXT_MENU;
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
                  error = new Error("[getSearchTokenPressHandler] Unhandled search token type: " + token);
                  throw error;
                }
              }
            }
            return () => {
              let result = callback(CONTEXT_MENU[14]).performKeyboardAwareNavigation(() => {
                callback2(paths[15]);
                let obj = {
                  onSubmit(format) {
                    closure_0 = format.format(closure_1_6);
                    let obj = closure_1_1(closure_1_2[13]);
                    obj.updateSearchQuery(closure_0, (setTextInputValue) => {
                      if (closure_1_2 === closure_2_5.SEARCH_INPUT_DROPDOWN) {
                        setTextInputValue.setTextInputValue(closure_2_3);
                      }
                      setTextInputValue.removePrefixTags();
                      const obj = { type: closure_2_4.COMPLETE, text: null, searchTokenType: null, location: null };
                      let tmp7 = closure_2_1(closure_2_2[12])[closure_1_1];
                      if (null == tmp7) {
                        const result = closure_2_0(closure_2_2[12]).rebuildSearchTokenConfigs();
                        tmp7 = closure_2_1(closure_2_2[12])[closure_1_1];
                        const obj2 = closure_2_0(closure_2_2[12]);
                      }
                      let key;
                      if (tmp7 != null) {
                        key = tmp7.key;
                      }
                      if (key == null) {
                        key = closure_1_1.toString();
                      }
                      obj[1] = "" + key + " " + closure_0;
                      obj[2] = closure_1_1;
                      obj[3] = closure_1_2;
                      setTextInputValue.addTag(obj);
                    });
                    obj = { searchContext: closure_0, searchTokenType: closure_1, location: closure_2 };
                    closure_1_1(closure_1_2[18]).trackSearchFilterAdd(obj);
                    let obj2 = closure_1_1(closure_1_2[18]);
                    const initialMessages = closure_1_1(closure_1_2[14]).fetchInitialMessages(closure_0);
                  }
                };
                obj.openLazy(callback(paths[17])(paths[16], paths.paths), "DatePicker", obj);
              });
            };
          }
        }
      }
    }
  }
  return () => {
    closure_0 = token;
    token = CONTEXT_MENU;
    token(CONTEXT_MENU[13]).updateSearchQuery(closure_0, (saveDraftTextInputValue) => {
      if (callback2 === closure_1_5.CONTEXT_MENU) {
        const result = saveDraftTextInputValue.saveDraftTextInputValue();
      }
      saveDraftTextInputValue.setTextInputValue(closure_1_3);
      const obj = { type: closure_1_4.PREFIX, searchTokenType: callback, location: callback2, text: null };
      let tmp6 = callback2(CONTEXT_MENU[12])[callback];
      if (null == tmp6) {
        const result1 = callback(CONTEXT_MENU[12]).rebuildSearchTokenConfigs();
        tmp6 = callback2(CONTEXT_MENU[12])[callback];
        const obj2 = callback(CONTEXT_MENU[12]);
      }
      let key;
      if (tmp6 != null) {
        key = tmp6.key;
      }
      if (key == null) {
        key = callback.toString();
      }
      obj[3] = key;
      saveDraftTextInputValue.addTag(obj);
    });
    let obj = token(CONTEXT_MENU[13]);
    token(CONTEXT_MENU[14]).syncAutocomplete(closure_0);
  };
};
export const getSearchFilterSuggestions = function getSearchFilterSuggestions(textInputValue) {
  closure_0 = textInputValue;
  const items = [];
  const keys = Object.keys(items(11512));
  const item = keys.forEach((item, index) => {
    let obj = textInputValue(dependencyMap[12]);
    if (obj.isSearchFilterTokenType(item)) {
      const plainText = items(dependencyMap[12])[item].plainText;
      if (null != plainText) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + plainText + "(?:: ?)?$", "i");
        if (regExp.test(textInputValue)) {
          obj = { token: null, text: null };
          obj[0] = item;
          obj[1] = plainText;
          items.push(obj);
        }
      }
    }
  });
  return items;
};