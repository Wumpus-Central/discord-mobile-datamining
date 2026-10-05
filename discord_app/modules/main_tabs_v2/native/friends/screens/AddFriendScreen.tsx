// === Module 16935: AddFriendScreen ===

// Module 16935 (AddFriendScreen)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12327 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12329 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser, dependencyMap, navigation, nextPromise, obj1, setOptionsResult, showShareActionSheetResult, tmp3, trackResult;

let c10;
let closure_12;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const ContactPermissions = ContactSyncConstants.ContactPermissions;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerText: { marginTop: 32, marginHorizontal: 16, textAlign: "center" }, subheaderText: { marginVertical: 8, marginHorizontal: 16, textAlign: "center" }, input: obj2, otherOptionsContainer: { marginTop: 16, paddingHorizontal: 16 }, rowContainer: { marginTop: 8 }, background: obj3 };
obj2 = { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_13 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  let background;
  let constants2;
  let headerText;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let tmp6;
  let tmp9;
  const tmp = navigation;
  let obj = navigation(576);
  const cResult = obj.c(30);
  navigation = navigation.navigation;
  const sourcePage = navigation.route.params.sourcePage;
  const tmp4 = closure_13();
  let obj2 = navigation(12329);
  const contactSyncAccount = obj2.useContactSyncAccount();
  if (cResult[0] !== contactSyncAccount) {
    const tmpResult = tmp(12329);
    const isContactSyncEnabledResult = tmpResult.isContactSyncEnabled(contactSyncAccount);
    cResult[0] = contactSyncAccount;
    cResult[1] = isContactSyncEnabledResult;
    tmp6 = isContactSyncEnabledResult;
  } else {
    tmp6 = cResult[1];
  }
  [tmp9, dependencyMap] = C(react.useState(!tmp6), 2);
  C(react.useState(!tmp6), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        userTag = undefined;
        if (null != currentUser) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[12]);
          userTag = obj.getUserTag(currentUser);
        }
        obj2 = closure_1(closure_2[13]);
        trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
        intl = navigation(closure_2[14]).intl;
        formatToPlainString = intl.formatToPlainString;
        obj1 = { url: null, username: null };
        v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
        obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
        obj1.username = userTag;
        formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
        obj4 = navigation(closure_2[15]);
        showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
        return;
      }
    }
    cResult[2] = C;
  } else {
    class C {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        userTag = undefined;
        if (null != currentUser) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[12]);
          userTag = obj.getUserTag(currentUser);
        }
        obj2 = closure_1(closure_2[13]);
        trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
        intl = navigation(closure_2[14]).intl;
        formatToPlainString = intl.formatToPlainString;
        obj1 = { url: null, username: null };
        v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
        obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
        obj1.username = userTag;
        formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
        obj4 = navigation(closure_2[15]);
        showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
        return;
      }
    }
  }
  C = tmp10;
  if (cResult[3] === contactSyncAccount) {
    let tmp12;
    let tmp15;
    let tmp19;
    class C {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        userTag = undefined;
        if (null != currentUser) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[12]);
          userTag = obj.getUserTag(currentUser);
        }
        obj2 = closure_1(closure_2[13]);
        trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
        intl = navigation(closure_2[14]).intl;
        formatToPlainString = intl.formatToPlainString;
        obj1 = { url: null, username: null };
        v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
        obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
        obj1.username = userTag;
        formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
        obj4 = navigation(closure_2[15]);
        showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
        return;
      }
    }
    const layoutEffect = react.useLayoutEffect(P, items3);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          currentUser = closure_1_7.getCurrentUser();
          userTag = undefined;
          if (null != currentUser) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[12]);
            userTag = obj.getUserTag(currentUser);
          }
          obj2 = closure_1(closure_2[13]);
          trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          intl = navigation(closure_2[14]).intl;
          formatToPlainString = intl.formatToPlainString;
          obj1 = { url: null, username: null };
          v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
          obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
          obj1.username = userTag;
          formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
      const tmp14 = closure_10(contactSyncAccount(5911), { absolute: true });
      cResult[7] = tmp14;
      tmp12 = tmp14;
    } else {
      class C {
        constructor() {
          currentUser = closure_1_7.getCurrentUser();
          userTag = undefined;
          if (null != currentUser) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[12]);
            userTag = obj.getUserTag(currentUser);
          }
          obj2 = closure_1(closure_2[13]);
          trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          intl = navigation(closure_2[14]).intl;
          formatToPlainString = intl.formatToPlainString;
          obj1 = { url: null, username: null };
          v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
          obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
          obj1.username = userTag;
          formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    ({ background, headerText } = tmp4);
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          currentUser = closure_1_7.getCurrentUser();
          userTag = undefined;
          if (null != currentUser) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[12]);
            userTag = obj.getUserTag(currentUser);
          }
          obj2 = closure_1(closure_2[13]);
          trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          intl = navigation(closure_2[14]).intl;
          formatToPlainString = intl.formatToPlainString;
          obj1 = { url: null, username: null };
          v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
          obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
          obj1.username = userTag;
          formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
      const stringResult = obj5.string(tmp(1126).t.GWMTSE);
      cResult[8] = stringResult;
      tmp15 = stringResult;
    } else {
      class C {
        constructor() {
          currentUser = closure_1_7.getCurrentUser();
          userTag = undefined;
          if (null != currentUser) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[12]);
            userTag = obj.getUserTag(currentUser);
          }
          obj2 = closure_1(closure_2[13]);
          trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          intl = navigation(closure_2[14]).intl;
          formatToPlainString = intl.formatToPlainString;
          obj1 = { url: null, username: null };
          v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
          obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
          obj1.username = userTag;
          formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
    }
    if (cResult[9] !== tmp4.headerText) {
      class C {
        constructor() {
          currentUser = closure_1_7.getCurrentUser();
          userTag = undefined;
          if (null != currentUser) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[12]);
            userTag = obj.getUserTag(currentUser);
          }
          obj2 = closure_1(closure_2[13]);
          trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          intl = navigation(closure_2[14]).intl;
          formatToPlainString = intl.formatToPlainString;
          obj1 = { url: null, username: null };
          v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
          obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
          obj1.username = userTag;
          formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
      let obj3 = { style: headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp15 };
      cResult[9] = tmp4.headerText;
      cResult[10] = closure_10(tmp(4886).Text, obj3);
      const tmp18 = closure_10(tmp(4886).Text, obj3);
    } else {
      class C {
        constructor() {
          currentUser = closure_1_7.getCurrentUser();
          userTag = undefined;
          if (null != currentUser) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[12]);
            userTag = obj.getUserTag(currentUser);
          }
          obj2 = closure_1(closure_2[13]);
          trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          intl = navigation(closure_2[14]).intl;
          formatToPlainString = intl.formatToPlainString;
          obj1 = { url: null, username: null };
          v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
          obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
          obj1.username = userTag;
          formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
    }
    const _Symbol3 = Symbol;
    const subheaderText = tmp4.subheaderText;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          currentUser = closure_1_7.getCurrentUser();
          userTag = undefined;
          if (null != currentUser) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[12]);
            userTag = obj.getUserTag(currentUser);
          }
          obj2 = closure_1(closure_2[13]);
          trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          intl = navigation(closure_2[14]).intl;
          formatToPlainString = intl.formatToPlainString;
          obj1 = { url: null, username: null };
          v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
          obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
          obj1.username = userTag;
          formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
      const stringResult1 = obj7.string(tmp(1126).t["Rn/sLl"]);
      cResult[11] = stringResult1;
      tmp19 = stringResult1;
    } else {
      class C {
        constructor() {
          currentUser = closure_1_7.getCurrentUser();
          userTag = undefined;
          if (null != currentUser) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[12]);
            userTag = obj.getUserTag(currentUser);
          }
          obj2 = closure_1(closure_2[13]);
          trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          intl = navigation(closure_2[14]).intl;
          formatToPlainString = intl.formatToPlainString;
          obj1 = { url: null, username: null };
          v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
          obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
          obj1.username = userTag;
          formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
    }
    if (cResult[12] !== tmp4.subheaderText) {
      class C {
        constructor() {
          currentUser = closure_1_7.getCurrentUser();
          userTag = undefined;
          if (null != currentUser) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[12]);
            userTag = obj.getUserTag(currentUser);
          }
          obj2 = closure_1(closure_2[13]);
          trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          intl = navigation(closure_2[14]).intl;
          formatToPlainString = intl.formatToPlainString;
          obj1 = { url: null, username: null };
          v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
          obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
          obj1.username = userTag;
          formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
      const obj6 = { style: subheaderText, variant: "text-sm/medium", color: "text-default", children: tmp19 };
      cResult[12] = tmp4.subheaderText;
      cResult[13] = closure_10(tmp(4886).Text, obj6);
      const tmp22 = closure_10(tmp(4886).Text, obj6);
    } else {
      class C {
        constructor() {
          currentUser = closure_1_7.getCurrentUser();
          userTag = undefined;
          if (null != currentUser) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[12]);
            userTag = obj.getUserTag(currentUser);
          }
          obj2 = closure_1(closure_2[13]);
          trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          intl = navigation(closure_2[14]).intl;
          formatToPlainString = intl.formatToPlainString;
          obj1 = { url: null, username: null };
          v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
          obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
          obj1.username = userTag;
          formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
    }
    if (cResult[14] === sourcePage) {
      let tmp27;
      class C {
        constructor() {
          currentUser = closure_1_7.getCurrentUser();
          userTag = undefined;
          if (null != currentUser) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[12]);
            userTag = obj.getUserTag(currentUser);
          }
          obj2 = closure_1(closure_2[13]);
          trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          intl = navigation(closure_2[14]).intl;
          formatToPlainString = intl.formatToPlainString;
          obj1 = { url: null, username: null };
          v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
          obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
          obj1.username = userTag;
          formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            userTag = undefined;
            if (null != currentUser) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[12]);
              userTag = obj.getUserTag(currentUser);
            }
            obj2 = closure_1(closure_2[13]);
            trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            intl = navigation(closure_2[14]).intl;
            formatToPlainString = intl.formatToPlainString;
            obj1 = { url: null, username: null };
            v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
            obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
            obj1.username = userTag;
            formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
            obj4 = navigation(closure_2[15]);
            showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
            return;
          }
        }
        const obj8 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: intl.string(tmp(1126).t.dukg0Z) };
        const Text = tmp(4886).Text;
        intl = tmp(1126).intl;
        const tmp28 = closure_10(Text, obj8);
        cResult[17] = tmp28;
        tmp27 = tmp28;
      } else {
        class C {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            userTag = undefined;
            if (null != currentUser) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[12]);
              userTag = obj.getUserTag(currentUser);
            }
            obj2 = closure_1(closure_2[13]);
            trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            intl = navigation(closure_2[14]).intl;
            formatToPlainString = intl.formatToPlainString;
            obj1 = { url: null, username: null };
            v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
            obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
            obj1.username = userTag;
            formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
            obj4 = navigation(closure_2[15]);
            showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
            return;
          }
        }
      }
      if (cResult[18] === tmp9) {
        class C {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            userTag = undefined;
            if (null != currentUser) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[12]);
              userTag = obj.getUserTag(currentUser);
            }
            obj2 = closure_1(closure_2[13]);
            trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            intl = navigation(closure_2[14]).intl;
            formatToPlainString = intl.formatToPlainString;
            obj1 = { url: null, username: null };
            v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
            obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
            obj1.username = userTag;
            formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
            obj4 = navigation(closure_2[15]);
            showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
            return;
          }
        }
        if (cResult[21] === tmp4.otherOptionsContainer) {
          class C {
            constructor() {
              currentUser = closure_1_7.getCurrentUser();
              userTag = undefined;
              if (null != currentUser) {
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = closure_1(closure_2[12]);
                userTag = obj.getUserTag(currentUser);
              }
              obj2 = closure_1(closure_2[13]);
              trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
              intl = navigation(closure_2[14]).intl;
              formatToPlainString = intl.formatToPlainString;
              obj1 = { url: null, username: null };
              v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
              obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
              obj1.username = userTag;
              formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
              obj4 = navigation(closure_2[15]);
              showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
              return;
            }
          }
          if (cResult[24] === tmp4.background) {
            class C {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[12]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = closure_1(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
                intl = navigation(closure_2[14]).intl;
                formatToPlainString = intl.formatToPlainString;
                obj1 = { url: null, username: null };
                v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
                obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
                obj1.username = userTag;
                formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
                obj4 = navigation(closure_2[15]);
                showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
                return;
              }
            }
          }
          const obj9 = { children: items };
          items = [tmp12, ];
          const obj10 = { keyboardShouldPersistTaps: "handled", style: background, children: items1 };
          items1 = [tmp17, tmp21, tmp23, tmp32];
          items[1] = closure_11(closure_6, obj10);
          cResult[24] = tmp4.background;
          cResult[25] = tmp17;
          cResult[26] = tmp21;
          cResult[27] = tmp23;
          cResult[28] = tmp32;
          const tmp40 = closure_11(closure_12, obj9);
          class P {
            constructor() {
              obj = { headerRight() { /* body not rendered: F147623 */ } };
              setOptionsResult = navigation.setOptions(obj);
              obj2 = closure_0(closure_2[11]);
              result = obj2.checkContactPermissions();
              nextPromise = result.then(() => { /* body not rendered: F147624 */ });
              return;
            }
          }
          cResult[29] = tmp40;
        }
        const obj11 = { style: tmp4.otherOptionsContainer, children: items2 };
        items2 = [tmp27, tmp29];
        cResult[21] = tmp4.otherOptionsContainer;
        cResult[22] = tmp29;
        cResult[23] = closure_11(closure_5, obj11);
        const tmp35 = closure_11(closure_5, obj11);
      }
      let tmp30 = null;
      if (tmp9) {
        class C {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            userTag = undefined;
            if (null != currentUser) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[12]);
              userTag = obj.getUserTag(currentUser);
            }
            obj2 = closure_1(closure_2[13]);
            trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            intl = navigation(closure_2[14]).intl;
            formatToPlainString = intl.formatToPlainString;
            obj1 = { url: null, username: null };
            v6E9a1J = navigation(closure_2[14]).t["6E9a1J"];
            obj1.url = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
            obj1.username = userTag;
            formatToPlainStringResult = formatToPlainString(v6E9a1J, obj1);
            obj4 = navigation(closure_2[15]);
            showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
            return;
          }
        }
        const obj12 = { style: tmp4.rowContainer, location: "Add Friend Modal" };
        tmp30 = closure_10(contactSyncAccount(13670), obj12);
      }
      cResult[18] = tmp9;
      cResult[19] = tmp4.rowContainer;
      cResult[20] = tmp30;
    }
    const obj13 = { style: tmp4.input, autoFocusInput: false, sourcePage };
    cResult[14] = sourcePage;
    cResult[15] = tmp4.input;
    cResult[16] = closure_10(contactSyncAccount(13668), obj13);
    closure_10(contactSyncAccount(13668), obj13);
    class P {
      constructor() {
        obj = { headerRight() { /* body not rendered: F147623 */ } };
        setOptionsResult = navigation.setOptions(obj);
        obj2 = closure_0(closure_2[11]);
        result = obj2.checkContactPermissions();
        nextPromise = result.then(() => { /* body not rendered: F147624 */ });
        return;
      }
    }
  }
  class P {
    constructor() {
      obj = { headerRight() { /* body not rendered: F147623 */ } };
      setOptionsResult = navigation.setOptions(obj);
      obj2 = closure_0(closure_2[11]);
      result = obj2.checkContactPermissions();
      nextPromise = result.then(() => { /* body not rendered: F147624 */ });
      return;
    }
  }
  items3 = [tmp10, navigation, contactSyncAccount];
  cResult[3] = contactSyncAccount;
  cResult[4] = navigation;
  cResult[5] = P;
  cResult[6] = items3;
}) : ((navigation) => {
  let _undefined;
  let c2;
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let tmp5;
  navigation = navigation.navigation;
  dependencyMap = undefined;
  let callback;
  const sourcePage = navigation.route.params.sourcePage;
  const tmp = closure_13();
  let obj = navigation(12329);
  const contactSyncAccount = obj.useContactSyncAccount();
  const useState = react.useState;
  let obj2 = navigation(12329);
  const tmp4 = callback(useState(!obj2.isContactSyncEnabled(contactSyncAccount)), 2);
  [tmp5, c2] = tmp4;
  callback = react.useCallback(() => {
    currentUser = currentUser.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      const obj = contactSyncAccount(c2[12]);
      userTag = obj.getUserTag(currentUser);
    }
    const obj2 = contactSyncAccount(c2[13]);
    obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
    const intl = navigation(c2[14]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
    const v6E9a1J = navigation(c2[14]).t["6E9a1J"];
    const formatToPlainStringResult = formatToPlainString(v6E9a1J, obj3);
    const obj4 = navigation(c2[15]);
    obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
  }, []);
  const items = [callback, navigation, contactSyncAccount];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = {
      headerRight(arg0) {
        const getRenderHeaderTextButton = navigation(c2[16]).getRenderHeaderTextButton;
        navigation(c2[16]);
        const intl = navigation(c2[14]).intl;
        const obj = {};
        const renderHeaderTextButton = getRenderHeaderTextButton(intl.string(navigation(c2[14]).t.RDE0Sc), callback);
        const merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      }
    };
    navigation.setOptions(obj);
    const obj2 = ContactSyncUtils;
    const result = obj2.checkContactPermissions();
    result.then((result) => {
      const NOT_DETERMINED = constants2.NOT_DETERMINED;
      const obj = navigation(c2[17]);
      let tmp5 = result === NOT_DETERMINED || obj.isAndroid() && result === constants2.UNAUTHORIZED;
      obj.isAndroid() && result === constants2.UNAUTHORIZED;
      if (!tmp5) {
        const tmp2Result = navigation(c2[11]);
        tmp5 = !tmp2Result.isContactSyncEnabled(contactSyncAccount);
      }
      _undefined(tmp5);
    });
  }, items);
  const items1 = [closure_10(contactSyncAccount(5911), { absolute: true }), ];
  let obj3 = { keyboardShouldPersistTaps: "handled", style: tmp.background, children: items2 };
  let obj4 = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(navigation(1126).t.GWMTSE) };
  const Text = navigation(4886).Text;
  intl = navigation(1126).intl;
  items2 = [closure_10(Text, obj4), , , ];
  const obj5 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: intl2.string(navigation(1126).t["Rn/sLl"]) };
  const Text2 = navigation(4886).Text;
  intl2 = navigation(1126).intl;
  items2[1] = closure_10(Text2, obj5);
  const obj6 = { style: tmp.input, autoFocusInput: false, sourcePage };
  items2[2] = closure_10(contactSyncAccount(13668), obj6);
  const obj7 = { style: tmp.otherOptionsContainer, children: items3 };
  const obj8 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: intl3.string(navigation(1126).t.dukg0Z) };
  const Text3 = navigation(4886).Text;
  intl3 = navigation(1126).intl;
  items3 = [closure_10(Text3, obj8), ];
  let tmp10Result = null;
  const tmp11 = contactSyncAccount;
  if (tmp5) {
    const obj9 = { style: tmp.rowContainer, location: "Add Friend Modal" };
    tmp10Result = closure_10(tmp11(13670), obj9);
  }
  const obj10 = { children: items1 };
  items3[1] = tmp10Result;
  items2[3] = closure_11(closure_5, obj7);
  items1[1] = closure_11(closure_6, obj3);
  return closure_11(closure_12, obj10);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx");

export default tmp5;