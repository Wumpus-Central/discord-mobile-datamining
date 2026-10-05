// === Module 11994: NewMessagesTagListInput ===

// Module 11994 (NewMessagesTagListInput)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import makeUserListPillDataDefault from "makeUserListPillData" /* 10595 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import createStyles_mod from "createStyles" /* 4890 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let announceResult, tmp3, tmp5, tmp6;

let num;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { searchBarContainer: obj2, header: obj3, showSearchButton: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { marginLeft: nativeDefault.space.PX_12, marginBottom: num };
num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
obj4 = { marginHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let autoFocus;
  let forceSearchResults;
  let hasQuery;
  let onChangeText;
  let onFocus;
  let onForceSearchResults;
  let onSelectUser;
  let selectedUserIds;
  let tagListInputRef;
  let tags;
  let obj = onSelectUser(576);
  const cResult = obj.c(27);
  ({ autoFocus, onChangeText, onFocus, onSelectUser } = arg0);
  ({ selectedUserIds, hasQuery, onForceSearchResults, forceSearchResults, tagListInputRef } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== selectedUserIds) {
    let items = selectedUserIds;
    if (selectedUserIds == null) {
      items = [];
    }
    const mapped = items.map(UserStore.getUser);
    const found = mapped.filter(onSelectUser(1375).isNotNullish);
    const mapped1 = found.map(tags(10595));
    cResult[0] = selectedUserIds;
    cResult[1] = mapped1;
    tags = mapped1;
  } else {
    tags = cResult[1];
  }
  if (cResult[2] === forceSearchResults) {
    if (cResult[3] === hasQuery) {
      if (cResult[4] === onForceSearchResults) {
        if (cResult[5] === tmp4.showSearchButton) {
          let tmp10;
          let tmp15;
          if (cResult[6] === tags.length) {
            tmp10 = cResult[7];
          }
          const _Symbol = Symbol;
          const header = tmp4.header;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = onSelectUser(1126).intl;
            const stringResult = intl2.string(onSelectUser(1126).t.kHyiXs);
            cResult[8] = stringResult;
            tmp15 = stringResult;
          } else {
            tmp15 = cResult[8];
          }
          if (cResult[9] !== tmp4.header) {
            cResult[9] = tmp4.header;
            cResult[10] = jsx(onSelectUser(4886).Text, { style: header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: tmp15 });
            jsx(onSelectUser(4886).Text, { style: header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: tmp15 });
            class F {
              constructor(arg0) {
                tmp = closure_1[arg0];
                user = closure_5.getUser(tmp.id);
                if (null != user) {
                  tmp3 = onSelectUser;
                  tmp4 = onSelectUser(user);
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                  announce = AccessibilityAnnouncer.announce;
                  intl = closure_0(closure_2[12]).intl;
                  obj = { text: null };
                  obj.text = tmp.text;
                  announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj));
                }
                return;
              }
            }
          }
          if (cResult[11] === onSelectUser) {
            let tmp20;
            let tmp21;
            if (cResult[12] === tags) {
              tmp20 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = onSelectUser(1126).intl;
              const stringResult1 = intl3.string(onSelectUser(1126).t.CaEER6);
              cResult[14] = stringResult1;
              tmp21 = stringResult1;
            } else {
              tmp21 = cResult[14];
            }
            if (cResult[15] === autoFocus) {
              if (cResult[16] === onChangeText) {
                if (cResult[17] === onFocus) {
                  if (cResult[18] === tmp10) {
                    if (cResult[19] === tmp17) {
                      if (cResult[20] === tmp20) {
                        if (cResult[21] === tagListInputRef) {
                          let tmp23;
                          if (cResult[22] === tags) {
                            tmp23 = cResult[23];
                          }
                          if (cResult[24] === tmp4.searchBarContainer) {
                            let tmp27;
                            if (cResult[25] === tmp23) {
                              tmp27 = cResult[26];
                            }
                            return tmp27;
                          }
                          const tmp30 = <View style={tmp9}>{tmp23}</View>;
                          class F {
                            constructor(arg0) {
                              tmp = closure_1[arg0];
                              user = closure_5.getUser(tmp.id);
                              if (null != user) {
                                tmp3 = onSelectUser;
                                tmp4 = onSelectUser(user);
                                tmp5 = closure_0;
                                tmp6 = closure_2;
                                AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                                announce = AccessibilityAnnouncer.announce;
                                intl = closure_0(closure_2[12]).intl;
                                obj = { text: null };
                                obj.text = tmp.text;
                                announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj));
                              }
                              return;
                            }
                          }
                          cResult[25] = tmp23;
                          cResult[26] = tmp30;
                          tmp27 = tmp30;
                        }
                      }
                    }
                  }
                }
              }
            }
            class F {
              constructor(arg0) {
                tmp = closure_1[arg0];
                user = closure_5.getUser(tmp.id);
                if (null != user) {
                  tmp3 = onSelectUser;
                  tmp4 = onSelectUser(user);
                  tmp5 = closure_0;
                  tmp6 = closure_2;
                  AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                  announce = AccessibilityAnnouncer.announce;
                  intl = closure_0(closure_2[12]).intl;
                  obj = { text: null };
                  obj.text = tmp.text;
                  announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj));
                }
                return;
              }
            }
            const tmp26 = jsx(tags(9235), { autoFocus, focusOnAdd: true, footer: null, icon: tmp17, onChangeText, onFocus, onRemove: tmp20, placeholder: tmp21, tags, ref: tagListInputRef });
            cResult[15] = autoFocus;
            cResult[16] = onChangeText;
            cResult[17] = onFocus;
            cResult[18] = tmp10;
            cResult[19] = tmp17;
            cResult[20] = tmp20;
            cResult[21] = tagListInputRef;
            cResult[22] = tags;
            cResult[23] = tmp26;
            tmp23 = tmp26;
          }
          class F {
            constructor(arg0) {
              tmp = closure_1[arg0];
              user = closure_5.getUser(tmp.id);
              if (null != user) {
                tmp3 = onSelectUser;
                tmp4 = onSelectUser(user);
                tmp5 = closure_0;
                tmp6 = closure_2;
                AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
                announce = AccessibilityAnnouncer.announce;
                intl = closure_0(closure_2[12]).intl;
                obj = { text: null };
                obj.text = tmp.text;
                announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj));
              }
              return;
            }
          }
          cResult[11] = onSelectUser;
          cResult[12] = tags;
          cResult[13] = F;
          tmp20 = F;
        }
      }
    }
  }
  let tmp12Result = null;
  if (!hasQuery) {
    tmp12Result = null;
    if (tags.length > 0) {
      let stringResult2;
      const PressableOpacity = onSelectUser(5909).PressableOpacity;
      let intl = onSelectUser(1126).intl;
      const string = intl.string;
      const t = onSelectUser(1126).t;
      if (forceSearchResults) {
        stringResult2 = string(t["4wv+DE"]);
      } else {
        stringResult2 = string(t.fTcQm2);
      }
      class F {
        constructor(arg0) {
          tmp = closure_1[arg0];
          user = closure_5.getUser(tmp.id);
          if (null != user) {
            tmp3 = onSelectUser;
            tmp4 = onSelectUser(user);
            tmp5 = closure_0;
            tmp6 = closure_2;
            AccessibilityAnnouncer = closure_0(closure_2[16]).AccessibilityAnnouncer;
            announce = AccessibilityAnnouncer.announce;
            intl = closure_0(closure_2[12]).intl;
            obj = { text: null };
            obj.text = tmp.text;
            announceResult = announce(intl.formatToPlainString(closure_0(closure_2[12]).t.srlxB8, obj));
          }
          return;
        }
      }
      if (forceSearchResults) {
        let CirclePlusIcon = onSelectUser(11995).ChevronLargeRightIcon;
      } else {
        CirclePlusIcon = onSelectUser(10983).CirclePlusIcon;
      }
      tmp12Result = <PressableOpacity accessibilityRole="button" accessibilityLabel={stringResult2} onPress={onForceSearchResults} style={null}>{null}</PressableOpacity>;
    }
  }
  cResult[2] = forceSearchResults;
  cResult[3] = hasQuery;
  cResult[4] = onForceSearchResults;
  cResult[5] = tmp4.showSearchButton;
  cResult[6] = tags.length;
  cResult[7] = tmp12Result;
  tmp10 = tmp12Result;
}) : ((forceSearchResults) => {
  let autoFocus;
  let hasQuery;
  let intl2;
  let intl3;
  let onChangeText;
  let onFocus;
  let onForceSearchResults;
  let require;
  let selectedUserIds;
  let tagListInputRef;
  let tmp2Result;
  ({ onSelectUser: require, selectedUserIds } = forceSearchResults);
  ({ autoFocus, onChangeText, onFocus, hasQuery, onForceSearchResults, tagListInputRef } = forceSearchResults.forceSearchResults);
  const tmp = closure_7();
  let items = [selectedUserIds];
  const memo = react.useMemo(() => {
    let items = selectedUserIds;
    if (selectedUserIds == null) {
      items = [];
    }
    const mapped = items.map(UserStore.getUser);
    const found = mapped.filter(GlobalUtils.isNotNullish);
    return found.map(makeUserListPillDataDefault);
  }, items);
  ({
    autoFocus,
    focusOnAdd: true,
    footer: tmp2Result,
    icon: null,
    onChangeText,
    onFocus,
    onRemove(arg0) {
      const user = UserStore.getUser(tmp.id);
      if (null != user) {
        _require(user);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = intl4.intl;
        const obj = { text: memo[arg0].text };
        announce(intl.formatToPlainString(intl4.t.srlxB8, obj));
      }
    },
    placeholder: intl3.string(require("intl").t.CaEER6),
    tags: memo,
    ref: tagListInputRef
  });
  tmp2Result = null;
  selectedUserIds(memo[17]);
  if (!hasQuery) {
    tmp2Result = null;
    if (memo.length > 0) {
      let stringResult;
      const PressableOpacity = require("Pressables").PressableOpacity;
      let intl = require("intl").intl;
      const string = intl.string;
      const t = require("intl").t;
      if (forceSearchResults.forceSearchResults) {
        stringResult = string(t["4wv+DE"]);
      } else {
        stringResult = string(t.fTcQm2);
      }
      if (forceSearchResults.forceSearchResults) {
        let CirclePlusIcon = require("ChevronLargeRightIcon").ChevronLargeRightIcon;
      } else {
        CirclePlusIcon = require("CirclePlusIcon").CirclePlusIcon;
      }
      tmp2Result = <PressableOpacity accessibilityRole="button" accessibilityLabel={stringResult} onPress={onForceSearchResults} style={tmp.showSearchButton}>{null}</PressableOpacity>;
    }
  }
  ({ style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: intl2.string(require("intl").t.kHyiXs) });
  const Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  intl3 = require("intl").intl;
  return <View style={tmp.searchBarContainer}>{null}</View>;
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx");

export default memoResult;