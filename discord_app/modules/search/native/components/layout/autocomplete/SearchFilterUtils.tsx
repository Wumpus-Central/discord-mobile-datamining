// discord_app/modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx
import MessageEmbedTypes from "MessageEmbedTypes";
import { SearchFilterAddLocations } from "SearchEntrypointAnalyticsLocations";
import ME from "ME";
import { AtIcon } from "../../../../../../design/components/Icon/native/redesign/generated/AtIcon.tsx";
import { AttachmentIcon } from "../../../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import { CalendarIcon } from "../../../../../../design/components/Icon/native/redesign/generated/CalendarIcon.tsx";
import { CalendarMinusIcon } from "../../../../../../design/components/Icon/native/redesign/generated/CalendarMinusIcon.tsx";
import { CalendarPlusIcon } from "../../../../../../design/components/Icon/native/redesign/generated/CalendarPlusIcon.tsx";
import { ChannelListMagnifyingGlassIcon } from "../../../../../../design/components/Icon/native/redesign/generated/ChannelListMagnifyingGlassIcon.tsx";
import { RobotIcon } from "../../../../../../design/components/Icon/native/redesign/generated/RobotIcon.tsx";
import { UserIcon } from "../../../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import { getSystemLocale } from "../../../../../../intl/index.native.tsx";

let c3;
let c4;
let closure_6;
let error;
let metroImportAll;
({ EMPTY_SEARCH_QUERY_STRING: c3, SearchQueryTagTypes: c4 } = MessageEmbedTypes);
({ SEARCH_DATE_FORMAT: closure_6, SearchTokenTypes: error, SearchTypes: metroImportAll } = ME);
let result = require("ME").fileFinishedImporting("modules/search/native/components/layout/autocomplete/SearchFilterUtils.tsx");

export const getSearchTokenLabel = function getSearchTokenLabel(closure_0, searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t["6iuVMn"]);
  } else if (tmp.FILTER_HAS === searchTokenType) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.DMAzx8);
  } else if (tmp.FILTER_MENTIONS === searchTokenType) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.CMKzQx);
  } else if (tmp.FILTER_IN === searchTokenType) {
    if (closure_0.type === constants2.DMS) {
      const intl6 = getSystemLocale.intl;
      let stringResult = intl6.string(getSystemLocale.t["8Fmo42"]);
    } else {
      const intl5 = getSystemLocale.intl;
      stringResult = intl5.string(getSystemLocale.t.cdPmq8);
    }
    return stringResult;
  } else if (tmp.FILTER_ON === searchTokenType) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.h4qGfp);
  } else if (tmp.FILTER_BEFORE === searchTokenType) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.c9qSBR);
  } else if (tmp.FILTER_AFTER === searchTokenType) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.hcMwDW);
  } else if (tmp.FILTER_AUTHOR_TYPE === searchTokenType) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.C4r6xL);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getSearchTokenLabel] Unhandled search token type: " + searchTokenType);
    throw error;
  }
};
export const getSearchTokenSubLabel = function getSearchTokenSubLabel(searchTokenType) {
  if (constants.FILTER_FROM === searchTokenType) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.kkGlww);
  } else if (tmp.FILTER_HAS === searchTokenType) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.gUfZa2);
  } else if (tmp.FILTER_IN === searchTokenType) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.qDUdlT);
  } else if (tmp.FILTER_MENTIONS === searchTokenType) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.ILtwK5);
  } else if (tmp.FILTER_ON === searchTokenType) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.t8bWvr);
  } else if (tmp.FILTER_BEFORE === searchTokenType) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.YEN3uU);
  } else if (tmp.FILTER_AFTER === searchTokenType) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.hwbB7s);
  } else if (tmp.FILTER_AUTHOR_TYPE === searchTokenType) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.tJPdhZ);
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
export const getSearchTokenPressHandler = function getSearchTokenPressHandler(closure_0, token, CONTEXT_MENU) {
  let closure_1 = token;
  let closure_2 = CONTEXT_MENU;
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
              let result = callback(CONTEXT_MENU[14]).performKeyboardAwareNavigation(() => {
                let obj = callback2(paths[15]);
                obj = {
                  onSubmit(format) {
                    let closure_0 = format.format(outer1_6);
                    let obj = outer1_1(outer1_2[13]);
                    obj.updateSearchQuery(closure_0, (setTextInputValue) => {
                      if (outer1_2 === outer2_5.SEARCH_INPUT_DROPDOWN) {
                        setTextInputValue.setTextInputValue(outer2_3);
                      }
                      setTextInputValue.removePrefixTags();
                      const obj = { type: outer2_4.COMPLETE, text: null, searchTokenType: null, location: null };
                      let tmp7 = outer2_1(outer2_2[12])[outer1_1];
                      if (null == tmp7) {
                        const result = outer2_0(tmp6[12]).rebuildSearchTokenConfigs();
                        tmp7 = outer2_1(tmp6[12])[str];
                        const obj2 = outer2_0(tmp6[12]);
                      }
                      let key;
                      if (tmp7 != null) {
                        key = tmp7.key;
                      }
                      if (key == null) {
                        key = str.toString();
                      }
                      obj[1] = "" + key + " " + closure_0;
                      obj[2] = outer1_1;
                      obj[3] = outer1_2;
                      setTextInputValue.addTag(obj);
                    });
                    obj = { searchContext: closure_0, searchTokenType: closure_1, location: closure_2 };
                    outer1_1(outer1_2[18]).trackSearchFilterAdd(obj);
                    let obj2 = outer1_1(outer1_2[18]);
                    const initialMessages = outer1_1(outer1_2[14]).fetchInitialMessages(closure_0);
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
    let closure_0 = token;
    token = CONTEXT_MENU;
    token(CONTEXT_MENU[13]).updateSearchQuery(closure_0, (saveDraftTextInputValue) => {
      if (callback2 === outer1_5.CONTEXT_MENU) {
        const result = saveDraftTextInputValue.saveDraftTextInputValue();
      }
      saveDraftTextInputValue.setTextInputValue(outer1_3);
      const obj = { type: outer1_4.PREFIX, searchTokenType: callback, location: callback2, text: null };
      let tmp6 = callback2(outer1_2[12])[callback];
      if (null == tmp6) {
        const result1 = callback(tmp5[12]).rebuildSearchTokenConfigs();
        tmp6 = callback2(tmp5[12])[str];
        const obj2 = callback(tmp5[12]);
      }
      let key;
      if (tmp6 != null) {
        key = tmp6.key;
      }
      if (key == null) {
        key = str.toString();
      }
      obj[3] = key;
      saveDraftTextInputValue.addTag(obj);
    });
    let obj = token(CONTEXT_MENU[13]);
    token(CONTEXT_MENU[14]).syncAutocomplete(closure_0);
  };
};
export const getSearchFilterSuggestions = function getSearchFilterSuggestions(textInputValue) {
  let closure_0 = textInputValue;
  const items = [];
  const keys = Object.keys(items(11716));
  const item = keys.forEach((type) => {
    let obj = textInputValue(outer1_2[12]);
    if (obj.isSearchFilterTokenType(type)) {
      const plainText = items(outer1_2[12])[type].plainText;
      if (null != plainText) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + plainText + "(?:: ?)?$", "i");
        if (regExp.test(textInputValue)) {
          obj = { token: null, text: null };
          obj[0] = type;
          obj[1] = plainText;
          items.push(obj);
        }
      }
    }
  });
  return items;
};