// discord_app/modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import makeUserListPillDataDefault from "makeUserListPillData.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj = {
  searchBarContainer: {
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_8,
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  },
  header: null,
  showSearchButton: null,
};
let obj4 = { marginLeft: nativeDefault.space.PX_12, marginBottom: null };
const PlatformUtils = fn(1382);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
obj4.marginBottom = num;
obj.header = obj4;
let obj3 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj.showSearchButton = { marginHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj5 = { marginHorizontal: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function NewMessagesTagListInput(arg0) {
        const cResult = onSelectUser(576).c(27);
        ({ autoFocus, onChangeText, onFocus, onSelectUser } = arg0);
        ({ selectedUserIds, hasQuery, onForceSearchResults, forceSearchResults, tagListInputRef } = arg0);
        const tmp4 = closure_7();
        if (cResult[0] !== selectedUserIds) {
          let items = selectedUserIds;
          if (selectedUserIds == null) {
            items = [];
          }
          const mapped = items.map(UserStore.getUser);
          const found = mapped.filter(onSelectUser(1388).isNotNullish);
          const mapped1 = found.map(tags(10219));
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
                if (cResult[6] === tags.length) {
                  let tmp10 = cResult[7];
                }
                const _Symbol = Symbol;
                if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = onSelectUser(1126).intl;
                  const stringResult = intl2.string(onSelectUser(1126).t.kHyiXs);
                  cResult[8] = stringResult;
                  let tmp16 = stringResult;
                } else {
                  tmp16 = cResult[8];
                }
                if (cResult[9] !== tmp4.header) {
                  const obj2 = {
                    style: tmp4.header,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    accessible: false,
                    children: tmp16,
                  };
                  const tmp20 = jsx(onSelectUser(5088).Text, {
                    style: tmp4.header,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    accessible: false,
                    children: tmp16,
                  });
                  cResult[9] = tmp4.header;
                  cResult[10] = tmp20;
                  let tmp18 = tmp20;
                } else {
                  tmp18 = cResult[10];
                }
                if (cResult[11] === onSelectUser) {
                  if (cResult[12] === tags) {
                    let tmp21 = cResult[13];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl3 = onSelectUser(1126).intl;
                    const stringResult1 = intl3.string(onSelectUser(1126).t.CaEER6);
                    cResult[14] = stringResult1;
                    let tmp22 = stringResult1;
                  } else {
                    tmp22 = cResult[14];
                  }
                  if (cResult[15] === autoFocus) {
                    if (cResult[16] === onChangeText) {
                      if (cResult[17] === onFocus) {
                        if (cResult[18] === tmp10) {
                          if (cResult[19] === tmp18) {
                            if (cResult[20] === tmp21) {
                              if (cResult[21] === tagListInputRef) {
                                if (cResult[22] === tags) {
                                  let tmp24 = cResult[23];
                                }
                                if (cResult[24] === tmp4.searchBarContainer) {
                                  if (cResult[25] === tmp24) {
                                    let tmp28 = cResult[26];
                                  }
                                  return tmp28;
                                }
                                const obj3 = { style: tmp9, children: tmp24 };
                                const tmp31 = <View style={tmp9}>{tmp24}</View>;
                                cResult[24] = tmp4.searchBarContainer;
                                cResult[25] = tmp24;
                                cResult[26] = tmp31;
                                tmp28 = tmp31;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj4 = {
                    autoFocus,
                    focusOnAdd: true,
                    footer: tmp10,
                    icon: tmp18,
                    onChangeText,
                    onFocus,
                    onRemove: tmp21,
                    placeholder: tmp22,
                    tags,
                    ref: tagListInputRef,
                  };
                  const tmp27 = jsx(tags(8625), {
                    autoFocus,
                    focusOnAdd: true,
                    footer: tmp10,
                    icon: tmp18,
                    onChangeText,
                    onFocus,
                    onRemove: tmp21,
                    placeholder: tmp22,
                    tags,
                    ref: tagListInputRef,
                  });
                  cResult[15] = autoFocus;
                  cResult[16] = onChangeText;
                  cResult[17] = onFocus;
                  cResult[18] = tmp10;
                  cResult[19] = tmp18;
                  cResult[20] = tmp21;
                  cResult[21] = tagListInputRef;
                  cResult[22] = tags;
                  cResult[23] = tmp27;
                  tmp24 = tmp27;
                }
                const fn = function w(arg0) {
                  const user = UserStore.getUser(tmp.id);
                  if (null != user) {
                    onSelectUser(user);
                    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                    const intl = util.intl;
                    const obj = { text: tmp.text };
                    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj));
                  }
                };
                cResult[11] = onSelectUser;
                cResult[12] = tags;
                cResult[13] = fn;
                tmp21 = fn;
              }
            }
          }
        }
        let tmp11 = null;
        if (!hasQuery) {
          tmp11 = null;
          if (tags.length > 0) {
            let intl = onSelectUser(1126).intl;
            const string = intl.string;
            const t = onSelectUser(1126).t;
            if (forceSearchResults) {
              let stringResult2 = string(t["4wv+DE"]);
            } else {
              stringResult2 = string(t.fTcQm2);
            }
            const obj5 = {
              accessibilityRole: "button",
              accessibilityLabel: stringResult2,
              onPress: onForceSearchResults,
              style: tmp4.showSearchButton,
              children: null,
            };
            if (forceSearchResults) {
              let CirclePlusIcon = onSelectUser(12066).ChevronLargeRightIcon;
            } else {
              CirclePlusIcon = onSelectUser(10609).CirclePlusIcon;
            }
            obj5.children = <CirclePlusIcon size="xs" />;
            jsx(onSelectUser(6184).PressableOpacity, {
              accessibilityRole: "button",
              accessibilityLabel: stringResult2,
              onPress: onForceSearchResults,
              style: tmp4.showSearchButton,
              children: null,
            });
          }
        }
        cResult[2] = forceSearchResults;
        cResult[3] = hasQuery;
        cResult[4] = onForceSearchResults;
        cResult[5] = tmp4.showSearchButton;
        cResult[6] = tags.length;
        cResult[7] = tmp11;
        tmp10 = tmp11;
        let obj = onSelectUser(576);
      }
    : function NewMessagesTagListInput(forceSearchResults) {
        ({ onSelectUser: require, selectedUserIds } = forceSearchResults);
        ({ autoFocus, onChangeText, onFocus, hasQuery, onForceSearchResults, tagListInputRef } =
          forceSearchResults.forceSearchResults);
        const tmp = closure_7();
        let items = [selectedUserIds];
        const memo = noop.useMemo(() => {
          let items = selectedUserIds;
          if (selectedUserIds == null) {
            items = [];
          }
          const mapped = items.map(UserStore.getUser);
          const found = mapped.filter(GlobalUtils.isNotNullish);
          return found.map(makeUserListPillDataDefault);
        }, items);
        let obj = { style: tmp.searchBarContainer, children: null };
        const obj2 = {
          autoFocus,
          focusOnAdd: true,
          footer: null,
          icon: null,
          onChangeText: null,
          onFocus: null,
          onRemove: null,
          placeholder: null,
          tags: null,
          ref: null,
        };
        let tmp6 = null;
        if (!hasQuery) {
          tmp6 = null;
          if (memo.length > 0) {
            let intl = require("util").intl;
            const string = intl.string;
            const t = require("util").t;
            if (forceSearchResults) {
              let stringResult = string(t["4wv+DE"]);
            } else {
              stringResult = string(t.fTcQm2);
            }
            const obj3 = {
              accessibilityRole: "button",
              accessibilityLabel: stringResult,
              onPress: onForceSearchResults,
              style: tmp.showSearchButton,
              children: null,
            };
            if (forceSearchResults) {
              let CirclePlusIcon = require("ChevronLargeRightIcon").ChevronLargeRightIcon;
            } else {
              CirclePlusIcon = require("CirclePlusIcon").CirclePlusIcon;
            }
            obj3.children = <CirclePlusIcon size="xs" />;
            jsx(require("Pressables").PressableOpacity, {
              accessibilityRole: "button",
              accessibilityLabel: stringResult,
              onPress: onForceSearchResults,
              style: tmp.showSearchButton,
              children: null,
            });
          }
        }
        obj2.footer = tmp6;
        const obj4 = {
          style: tmp.header,
          variant: "text-sm/medium",
          color: "text-muted",
          accessible: false,
          children: null,
        };
        const intl2 = require("util").intl;
        obj4.children = intl2.string(require("util").t.kHyiXs);
        obj2.icon = jsx(require("Text/Text").Text, {
          style: tmp.header,
          variant: "text-sm/medium",
          color: "text-muted",
          accessible: false,
          children: null,
        });
        obj2.onChangeText = onChangeText;
        obj2.onFocus = onFocus;
        obj2.onRemove = function onRemove(arg0) {
          const user = UserStore.getUser(tmp.id);
          if (null != user) {
            closure_1_0(user);
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            const intl = util.intl;
            const obj = { text: tmp.text };
            AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj));
          }
        };
        const intl3 = require("util").intl;
        obj2.placeholder = intl3.string(require("util").t.CaEER6);
        obj2.tags = memo;
        obj2.ref = tagListInputRef;
        obj.children = jsx(selectedUserIds(memo[17]), {
          autoFocus,
          focusOnAdd: true,
          footer: null,
          icon: null,
          onChangeText: null,
          onFocus: null,
          onRemove: null,
          placeholder: null,
          tags: null,
          ref: null,
        });
        return <View style={tmp.searchBarContainer}>{null}</View>;
      },
);
