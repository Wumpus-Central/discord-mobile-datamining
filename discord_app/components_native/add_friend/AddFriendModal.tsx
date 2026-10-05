// === Module 13666: AddFriendModal ===

// Module 13666 (AddFriendModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import Navigator from "Navigator" /* 6496 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12327 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12329 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import TextStyles from "TextStyles" /* 5915 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, navigation, onSkip;

let Fonts;
let c10;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function render(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return closure_1_10(closure_1_13, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ AnalyticEvents: metroImportAll, Fonts } = Constants);
const ContactPermissions = ContactSyncConstants.ContactPermissions;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerText: obj2, subheaderText: { lineHeight: 18, marginVertical: 8, marginHorizontal: 16, textAlign: "center" }, input: { marginTop: 16 }, otherOptionsContainer: { marginTop: 16, paddingHorizontal: 16 }, rowContainer: obj3 };
obj2 = { marginTop: 32, marginHorizontal: 16, textAlign: "center" };
createStyles = createStyles.createStyles;
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 8 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((onSkip) => {
  let constants2;
  let contactSyncAccount;
  let intl;
  let items;
  let items1;
  let tmp17;
  let tmp18;
  let tmp6;
  let tmp9;
  const tmp = onSkip;
  let obj = onSkip(contactSyncAccount[11]);
  const cResult = obj.c(32);
  onSkip = onSkip.onSkip;
  const sourceMetadata = onSkip.sourceMetadata;
  const tmp4 = closure_12();
  let obj2 = onSkip(contactSyncAccount[12]);
  contactSyncAccount = obj2.useContactSyncAccount();
  if (cResult[0] !== contactSyncAccount) {
    const tmpResult = tmp(tmp2[12]);
    const isContactSyncEnabledResult = tmpResult.isContactSyncEnabled(contactSyncAccount);
    cResult[0] = contactSyncAccount;
    cResult[1] = isContactSyncEnabledResult;
    tmp6 = isContactSyncEnabledResult;
  } else {
    tmp6 = cResult[1];
  }
  const tmp8 = _slicedToArray(navigation.useState(!tmp6), 2);
  [tmp9, _slicedToArray] = tmp8;
  const obj4 = navigation;
  if (cResult[2] === contactSyncAccount) {
    let tmp10;
    if (cResult[3] === sourceMetadata) {
      tmp10 = cResult[4];
    }
    sourceMetadata(contactSyncAccount[15])(tmp10);
    const tmpResult2 = tmp(contactSyncAccount[16]);
    navigation = tmpResult2.useNavigation();
    if (cResult[5] !== onSkip) {
      class I {
        constructor() {
          if (onSkip != null) {
            tmp();
          }
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        }
      }
      cResult[5] = onSkip;
      cResult[6] = I;
    } else {
      class I {
        constructor() {
          if (onSkip != null) {
            tmp();
          }
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        }
      }
    }
    I = tmp14;
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          currentUser = currentUser.getCurrentUser();
          let userTag;
          if (null != currentUser) {
            const obj = sourceMetadata(contactSyncAccount[18]);
            userTag = obj.getUserTag(currentUser);
          }
          const obj2 = sourceMetadata(contactSyncAccount[13]);
          obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          const intl = onSkip(contactSyncAccount[19]).intl;
          const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
          const obj3 = onSkip(contactSyncAccount[20]);
          obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
        }
      }
      cResult[7] = F;
    } else {
      class F {
        constructor() {
          currentUser = currentUser.getCurrentUser();
          let userTag;
          if (null != currentUser) {
            const obj = sourceMetadata(contactSyncAccount[18]);
            userTag = obj.getUserTag(currentUser);
          }
          const obj2 = sourceMetadata(contactSyncAccount[13]);
          obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          const intl = onSkip(contactSyncAccount[19]).intl;
          const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
          const obj3 = onSkip(contactSyncAccount[20]);
          obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
        }
      }
    }
    F = tmp16;
    if (cResult[8] === tmp14) {
      let tmp20;
      let tmp24;
      let tmp30;
      class F {
        constructor() {
          currentUser = currentUser.getCurrentUser();
          let userTag;
          if (null != currentUser) {
            const obj = sourceMetadata(contactSyncAccount[18]);
            userTag = obj.getUserTag(currentUser);
          }
          const obj2 = sourceMetadata(contactSyncAccount[13]);
          obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
          const intl = onSkip(contactSyncAccount[19]).intl;
          const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
          const obj3 = onSkip(contactSyncAccount[20]);
          obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
        }
      }
      const layoutEffect = obj4.useLayoutEffect(tmp17, tmp18);
      const _Symbol2 = Symbol;
      const headerText = tmp4.headerText;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
        const stringResult = obj6.string(tmp(contactSyncAccount[19]).t.GWMTSE);
        cResult[12] = stringResult;
        tmp20 = stringResult;
      } else {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
      }
      if (cResult[13] !== tmp4.headerText) {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
        let obj3 = { style: headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp20 };
        cResult[13] = tmp4.headerText;
        cResult[14] = closure_10(tmp(contactSyncAccount[24]).Text, obj3);
        const tmp23 = closure_10(tmp(contactSyncAccount[24]).Text, obj3);
      } else {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
      }
      const _Symbol3 = Symbol;
      const subheaderText = tmp4.subheaderText;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
        const stringResult1 = obj8.string(tmp(contactSyncAccount[19]).t["Rn/sLl"]);
        cResult[15] = stringResult1;
        tmp24 = stringResult1;
      } else {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
      }
      if (cResult[16] !== tmp4.subheaderText) {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
        const obj5 = { style: subheaderText, variant: "text-sm/medium", color: "text-default", children: tmp24 };
        cResult[16] = tmp4.subheaderText;
        cResult[17] = closure_10(tmp(contactSyncAccount[24]).Text, obj5);
        const tmp27 = closure_10(tmp(contactSyncAccount[24]).Text, obj5);
      } else {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
      }
      if (cResult[18] !== tmp4.input) {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
        const obj7 = { style: tmp4.input, autoFocusInput: false };
        cResult[18] = tmp4.input;
        cResult[19] = closure_10(sourceMetadata(contactSyncAccount[25]), obj7);
        const tmp29 = closure_10(sourceMetadata(contactSyncAccount[25]), obj7);
      } else {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
        const obj9 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: intl.string(tmp(contactSyncAccount[19]).t.dukg0Z) };
        const Text = tmp(tmp2[24]).Text;
        intl = tmp(tmp2[19]).intl;
        const tmp31 = closure_10(Text, obj9);
        cResult[20] = tmp31;
        tmp30 = tmp31;
      } else {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
      }
      if (cResult[21] === tmp9) {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
        if (cResult[24] === tmp4.otherOptionsContainer) {
          class F {
            constructor() {
              currentUser = currentUser.getCurrentUser();
              let userTag;
              if (null != currentUser) {
                const obj = sourceMetadata(contactSyncAccount[18]);
                userTag = obj.getUserTag(currentUser);
              }
              const obj2 = sourceMetadata(contactSyncAccount[13]);
              obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
              const intl = onSkip(contactSyncAccount[19]).intl;
              const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
              const obj3 = onSkip(contactSyncAccount[20]);
              obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
            }
          }
          if (cResult[27] === tmp26) {
            class F {
              constructor() {
                currentUser = currentUser.getCurrentUser();
                let userTag;
                if (null != currentUser) {
                  const obj = sourceMetadata(contactSyncAccount[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                const obj2 = sourceMetadata(contactSyncAccount[13]);
                obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
                const intl = onSkip(contactSyncAccount[19]).intl;
                const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
                const obj3 = onSkip(contactSyncAccount[20]);
                obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
              }
            }
          }
          const obj10 = { keyboardShouldPersistTaps: "handled", children: items };
          items = [tmp22, tmp26, tmp28, tmp34];
          cResult[27] = tmp26;
          cResult[28] = tmp28;
          cResult[29] = tmp34;
          cResult[30] = tmp22;
          cResult[31] = closure_11(F, obj10);
          const tmp41 = closure_11(F, obj10);
        }
        const obj11 = { style: tmp4.otherOptionsContainer, children: items1 };
        items1 = [tmp30, tmp32];
        cResult[24] = tmp4.otherOptionsContainer;
        cResult[25] = tmp32;
        cResult[26] = closure_11(I, obj11);
        const tmp37 = closure_11(I, obj11);
      }
      let tmp33 = null;
      if (tmp9) {
        class F {
          constructor() {
            currentUser = currentUser.getCurrentUser();
            let userTag;
            if (null != currentUser) {
              const obj = sourceMetadata(contactSyncAccount[18]);
              userTag = obj.getUserTag(currentUser);
            }
            const obj2 = sourceMetadata(contactSyncAccount[13]);
            obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
            const intl = onSkip(contactSyncAccount[19]).intl;
            const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
            const obj3 = onSkip(contactSyncAccount[20]);
            obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
          }
        }
        const obj12 = { style: tmp4.rowContainer, location: "Add Friend Modal" };
        tmp33 = closure_10(tmp11(tmp2[26]), obj12);
      }
      cResult[21] = tmp9;
      cResult[22] = tmp4.rowContainer;
      cResult[23] = tmp33;
    }
    const fn2 = function k() {
      let obj2;
      let onPress;
      let obj = {
        headerRight() {
          let intl;
          const obj = { source: sourceMetadata(contactSyncAccount[22]), onPress, accessibilityLabel: intl.string(onSkip(contactSyncAccount[19]).t.RDE0Sc) };
          const HeaderActionButton = onSkip(contactSyncAccount[21]).HeaderActionButton;
          intl = onSkip(contactSyncAccount[19]).intl;
          return closure_2_10(HeaderActionButton, obj);
        },
        headerLeft: obj2.getHeaderCloseButton(I)
      };
      const setOptions = navigation.setOptions;
      obj2 = NavigatorHeader;
      setOptions(obj);
    };
    const items2 = [tmp14, tmp16, navigation];
    cResult[8] = tmp14;
    cResult[9] = navigation;
    cResult[10] = fn2;
    cResult[11] = items2;
    tmp17 = fn2;
    tmp18 = items2;
  }
  const fn = function x() {
    let obj = AnalyticsUtilsDefault;
    obj.track(metroImportAll.FRIEND_ADD_VIEWED, sourceMetadata);
    const obj2 = ContactSyncUtils;
    const result = obj2.checkContactPermissions();
    result.then((result) => {
      const NOT_DETERMINED = constants2.NOT_DETERMINED;
      const obj = onSkip(contactSyncAccount[14]);
      let tmp5 = result === NOT_DETERMINED || obj.isAndroid() && result === constants2.UNAUTHORIZED;
      obj.isAndroid() && result === constants2.UNAUTHORIZED;
      if (!tmp5) {
        const tmp2Result = onSkip(contactSyncAccount[12]);
        tmp5 = !tmp2Result.isContactSyncEnabled(closure_1_2);
      }
      closure_1_3(tmp5);
    });
  };
  cResult[2] = contactSyncAccount;
  cResult[3] = sourceMetadata;
  cResult[4] = fn;
  tmp10 = fn;
}) : ((onSkip) => {
  let c3;
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let items3;
  let tmp5;
  onSkip = onSkip.onSkip;
  const sourceMetadata = onSkip.sourceMetadata;
  let contactSyncAccount;
  _slicedToArray = undefined;
  navigation = undefined;
  const tmp = closure_12();
  let obj = onSkip(contactSyncAccount[12]);
  const tmp2 = contactSyncAccount;
  contactSyncAccount = obj.useContactSyncAccount();
  const useState = navigation.useState;
  let obj2 = onSkip(contactSyncAccount[12]);
  const tmp4 = _slicedToArray(useState(!obj2.isContactSyncEnabled(contactSyncAccount)), 2);
  [tmp5, c3] = tmp4;
  sourceMetadata(contactSyncAccount[15])(() => {
    let obj = AnalyticsUtilsDefault;
    obj.track(metroImportAll.FRIEND_ADD_VIEWED, sourceMetadata);
    const obj2 = ContactSyncUtils;
    const result = obj2.checkContactPermissions();
    result.then((result) => {
      const NOT_DETERMINED = constants2.NOT_DETERMINED;
      const obj = onSkip(contactSyncAccount[14]);
      let tmp5 = result === NOT_DETERMINED || obj.isAndroid() && result === constants2.UNAUTHORIZED;
      obj.isAndroid() && result === constants2.UNAUTHORIZED;
      if (!tmp5) {
        const tmp2Result = onSkip(contactSyncAccount[12]);
        tmp5 = !tmp2Result.isContactSyncEnabled(closure_1_2);
      }
      closure_1_3(tmp5);
    });
  });
  let obj3 = onSkip(contactSyncAccount[16]);
  navigation = obj3.useNavigation();
  const items = [onSkip];
  const callback = navigation.useCallback(() => {
    if (onSkip != null) {
      tmp();
    }
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, items);
  const callback1 = navigation.useCallback(() => {
    currentUser = currentUser.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      const obj = sourceMetadata(contactSyncAccount[18]);
      userTag = obj.getUserTag(currentUser);
    }
    const obj2 = sourceMetadata(contactSyncAccount[13]);
    obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
    const intl = onSkip(contactSyncAccount[19]).intl;
    const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
    const obj3 = onSkip(contactSyncAccount[20]);
    obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
  }, []);
  const items1 = [callback, callback1, navigation];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let obj2;
    let onPress;
    let obj = {
      headerRight() {
        let intl;
        const obj = { source: sourceMetadata(contactSyncAccount[22]), onPress, accessibilityLabel: intl.string(onSkip(contactSyncAccount[19]).t.RDE0Sc) };
        const HeaderActionButton = onSkip(contactSyncAccount[21]).HeaderActionButton;
        intl = onSkip(contactSyncAccount[19]).intl;
        return closure_2_10(HeaderActionButton, obj);
      },
      headerLeft: obj2.getHeaderCloseButton(callback)
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items1);
  const obj4 = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(onSkip(contactSyncAccount[19]).t.GWMTSE) };
  const Text = onSkip(contactSyncAccount[24]).Text;
  intl = onSkip(contactSyncAccount[19]).intl;
  const items2 = [closure_10(Text, obj4), , , ];
  const obj5 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: intl2.string(onSkip(contactSyncAccount[19]).t["Rn/sLl"]) };
  const Text2 = onSkip(contactSyncAccount[24]).Text;
  intl2 = onSkip(contactSyncAccount[19]).intl;
  items2[1] = closure_10(Text2, obj5);
  const obj6 = { style: tmp.input, autoFocusInput: false };
  items2[2] = closure_10(sourceMetadata(contactSyncAccount[25]), obj6);
  const obj7 = { style: tmp.otherOptionsContainer, children: items3 };
  const obj8 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: intl3.string(onSkip(contactSyncAccount[19]).t.dukg0Z) };
  const Text3 = onSkip(contactSyncAccount[24]).Text;
  intl3 = onSkip(contactSyncAccount[19]).intl;
  items3 = [closure_10(Text3, obj8), ];
  let tmp14Result = null;
  const tmp13 = callback1;
  const tmp15 = callback;
  const tmp6 = sourceMetadata;
  if (tmp5) {
    const obj9 = { style: tmp.rowContainer, location: "Add Friend Modal" };
    tmp14Result = closure_10(tmp6(tmp2[26]), obj9);
  }
  const obj10 = { keyboardShouldPersistTaps: "handled", children: items2 };
  items3[1] = tmp14Result;
  items2[3] = closure_11(tmp15, obj7);
  return closure_11(tmp13, obj10);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((initialParams) => {
  let intl;
  let obj3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  const top = useSafeAreaInsetsDefault().top;
  if (cResult[0] !== initialParams) {
    const obj2 = { ADD_FRIEND: obj3 };
    obj3 = { ignoreKeyboard: true, title: intl.string(intl4.t.w5uwoI), initialParams, render };
    intl = intl4.intl;
    cResult[0] = initialParams;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    let tmp5;
    if (cResult[3] === top) {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const tmp6 = authStore(Navigator.Navigator, { screens: tmp4, initialRouteName: "ADD_FRIEND", headerStatusBarHeight: top });
  cResult[2] = tmp4;
  cResult[3] = top;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : ((initialParams) => {
  _require = initialParams;
  const items = [initialParams];
  const headerStatusBarHeight = useSafeAreaInsetsDefault().top;
  const screens = react.useMemo(() => {
    let intl;
    let obj2;
    let obj = { ADD_FRIEND: obj2 };
    obj2 = { ignoreKeyboard: true, title: intl.string(intl4.t.w5uwoI), initialParams, render };
    intl = intl4.intl;
    return obj;
  }, items);
  return closure_10(require("Navigator").Navigator, { screens, initialRouteName: "ADD_FRIEND", headerStatusBarHeight });
});
let result = size.fileFinishedImporting("components_native/add_friend/AddFriendModal.tsx");

export default tmp8;