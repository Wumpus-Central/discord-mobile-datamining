// === Module 16935: AddFriendScreen ===

// Module 16935 (AddFriendScreen)
import nativeDefault from "native" /* 587 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12329 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1085).AnalyticEvents;
const ContactPermissions = fn(12327).ContactPermissions;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { headerText: { marginTop: 32, marginHorizontal: 16, textAlign: "center" }, subheaderText: { marginVertical: 8, marginHorizontal: 16, textAlign: "center" }, input: { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, otherOptionsContainer: { marginTop: 16, paddingHorizontal: 16 }, rowContainer: { marginTop: 8 }, background: null };
let obj3 = { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.background = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  const cResult = navigation(576).c(30);
  navigation = navigation.navigation;
  const sourcePage = navigation.route.params.sourcePage;
  let tmp4 = closure_13();
  let obj = navigation(576);
  const contactSyncAccount = navigation(12329).useContactSyncAccount();
  if (cResult[0] !== contactSyncAccount) {
    const isContactSyncEnabledResult = tmp(12329).isContactSyncEnabled(contactSyncAccount);
    cResult[0] = contactSyncAccount;
    cResult[1] = isContactSyncEnabledResult;
    let tmp6 = isContactSyncEnabledResult;
    const tmpResult = tmp(12329);
  } else {
    tmp6 = cResult[1];
  }
  let obj2 = navigation(12329);
  [tmp9, dependencyMap] = noop.useState(!tmp6);
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
        obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
        formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
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
        obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
        formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
        obj4 = navigation(closure_2[15]);
        showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
        return;
      }
    }
  }
  _slicedToArray = C;
  if (cResult[3] === contactSyncAccount) {
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
        obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
        formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
        obj4 = navigation(closure_2[15]);
        showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
        return;
      }
    }
    const layoutEffect = noop.useLayoutEffect(P, items3);
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
          obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
          formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
      const tmp14 = closure_10(contactSyncAccount(5911), { absolute: true });
      cResult[7] = tmp14;
      const tmp12 = tmp14;
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
          obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
          formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
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
          obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
          formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
      const stringResult = obj5.string(tmp(1126).t.GWMTSE);
      cResult[8] = stringResult;
      const tmp15 = stringResult;
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
          obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
          formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
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
          obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
          formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
      let obj3 = { style: headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp15 };
      const tmp18 = closure_10(tmp(4886).Text, obj3);
      cResult[9] = tmp4.headerText;
      cResult[10] = tmp18;
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
          obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
          formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
    }
    const _Symbol3 = Symbol;
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
          obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
          formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
      const stringResult1 = obj7.string(tmp(1126).t["Rn/sLl"]);
      cResult[11] = stringResult1;
      const tmp19 = stringResult1;
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
          obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
          formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
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
          obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
          formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
      const obj6 = { style: tmp4.subheaderText, variant: "text-sm/medium", color: "text-default", children: tmp19 };
      const tmp22 = closure_10(tmp(4886).Text, obj6);
      cResult[12] = tmp4.subheaderText;
      cResult[13] = tmp22;
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
          obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
          formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
          obj4 = navigation(closure_2[15]);
          showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          return;
        }
      }
    }
    if (cResult[14] === sourcePage) {
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
          obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
          formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
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
            obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
            formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
            obj4 = navigation(closure_2[15]);
            showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
            return;
          }
        }
        const obj8 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
        let intl = tmp(1126).intl;
        obj8.children = intl.string(tmp(1126).t.dukg0Z);
        const tmp28 = closure_10(tmp(4886).Text, obj8);
        cResult[17] = tmp28;
        const tmp27 = tmp28;
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
            obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
            formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
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
            obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
            formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
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
              obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
              formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
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
                obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
                formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
                obj4 = navigation(closure_2[15]);
                showShareActionSheetResult = obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
                return;
              }
            }
          }
          const obj9 = { children: null };
          const items = [tmp12, ];
          const obj10 = { keyboardShouldPersistTaps: "handled", style: background, children: null };
          const items1 = [tmp17, tmp21, tmp23, tmp32];
          obj10.children = items1;
          items[1] = closure_11(closure_6, obj10);
          obj9.children = items;
          const tmp40 = closure_11(closure_12, obj9);
          cResult[24] = tmp4.background;
          cResult[25] = tmp17;
          cResult[26] = tmp21;
          cResult[27] = tmp23;
          cResult[28] = tmp32;
          class P {
            constructor() {
              obj = { headerRight() { ... } };
              setOptionsResult = navigation.setOptions(obj);
              obj2 = closure_0(closure_2[11]);
              result = obj2.checkContactPermissions();
              nextPromise = result.then(() => { ... });
              return;
            }
          }
          cResult[29] = tmp40;
        }
        const obj11 = { style: tmp4.otherOptionsContainer, children: null };
        const items2 = [tmp27, tmp29];
        obj11.children = items2;
        const tmp35 = closure_11(closure_5, obj11);
        cResult[21] = tmp4.otherOptionsContainer;
        cResult[22] = tmp29;
        cResult[23] = tmp35;
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
            obj1 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
            formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[14]).t["6E9a1J"], obj1);
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
    class P {
      constructor() {
        obj = { headerRight() { ... } };
        setOptionsResult = navigation.setOptions(obj);
        obj2 = closure_0(closure_2[11]);
        result = obj2.checkContactPermissions();
        nextPromise = result.then(() => { ... });
        return;
      }
    }
    const tmp26 = closure_10(contactSyncAccount(13668), obj13);
  }
  class P {
    constructor() {
      obj = { headerRight() { ... } };
      setOptionsResult = navigation.setOptions(obj);
      obj2 = closure_0(closure_2[11]);
      result = obj2.checkContactPermissions();
      nextPromise = result.then(() => { ... });
      return;
    }
  }
  items3 = [C, navigation, contactSyncAccount];
  cResult[3] = contactSyncAccount;
  cResult[4] = navigation;
  cResult[5] = P;
  cResult[6] = items3;
  const tmp8 = _slicedToArray(noop.useState(!tmp6), 2);
}) : ((navigation) => {
  navigation = navigation.navigation;
  dependencyMap = undefined;
  let callback;
  const tmp = closure_13();
  const contactSyncAccount = navigation(12329).useContactSyncAccount();
  let obj = navigation(12329);
  let obj2 = navigation(12329);
  [tmp5, c2] = callback(noop.useState(!navigation(12329).isContactSyncEnabled(contactSyncAccount)), 2);
  callback = noop.useCallback(() => {
    currentUser = currentUser.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      userTag = contactSyncAccount(_undefined[12]).getUserTag(currentUser);
      const obj = contactSyncAccount(_undefined[12]);
    }
    contactSyncAccount(_undefined[13]).track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
    const intl = navigation(_undefined[14]).intl;
    const obj2 = contactSyncAccount(_undefined[13]);
    const obj3 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
    const formatToPlainStringResult = intl.formatToPlainString(navigation(_undefined[14]).t["6E9a1J"], { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag });
    navigation(_undefined[15]).showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
    const obj4 = navigation(_undefined[15]);
  }, []);
  const items = [callback, navigation, contactSyncAccount];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        const intl = navigation(1126).intl;
        const renderHeaderTextButton = navigation(7498).getRenderHeaderTextButton(intl.string(navigation(1126).t.RDE0Sc), callback);
        const merged = Object.assign(arg0);
        return renderHeaderTextButton({});
      }
    });
    const result = ContactSyncUtils.checkContactPermissions();
    result.then((result) => {
      const obj = navigation(1369);
      let tmp5 = result === constants2.NOT_DETERMINED || navigation(1369).isAndroid() && result === constants2.UNAUTHORIZED;
      if (!tmp5) {
        tmp5 = !navigation(12329).isContactSyncEnabled(contactSyncAccount);
        const tmp2Result = navigation(12329);
      }
      dependencyMap(tmp5);
      const tmp4 = navigation(1369).isAndroid() && result === constants2.UNAUTHORIZED;
    });
  }, items);
  const items1 = [closure_10(contactSyncAccount(5911), { absolute: true }), ];
  let obj3 = { keyboardShouldPersistTaps: "handled", style: tmp.background, children: null };
  let obj4 = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  let intl = navigation(1126).intl;
  obj4.children = intl.string(navigation(1126).t.GWMTSE);
  const items2 = [closure_10(navigation(4886).Text, obj4), , , ];
  const obj5 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = navigation(1126).intl;
  obj5.children = intl2.string(navigation(1126).t["Rn/sLl"]);
  items2[1] = closure_10(navigation(4886).Text, obj5);
  items2[2] = closure_10(contactSyncAccount(13668), { style: tmp.input, autoFocusInput: false, sourcePage: navigation.route.params.sourcePage });
  const obj7 = { style: tmp.otherOptionsContainer, children: null };
  const obj8 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
  const intl3 = navigation(1126).intl;
  obj8.children = intl3.string(navigation(1126).t.dukg0Z);
  const items3 = [closure_10(navigation(4886).Text, obj8), ];
  let tmp10Result = null;
  if (tmp5) {
    const obj9 = { style: tmp.rowContainer, location: "Add Friend Modal" };
    tmp10Result = closure_10(contactSyncAccount(13670), obj9);
  }
  const obj10 = { children: null };
  items3[1] = tmp10Result;
  obj7.children = items3;
  items2[3] = closure_11(closure_5, obj7);
  obj3.children = items2;
  items1[1] = closure_11(closure_6, obj3);
  obj10.children = items1;
  return closure_11(closure_12, obj10);
});