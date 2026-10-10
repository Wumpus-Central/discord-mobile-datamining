// discord_app/components_native/add_friend/AddFriendModal.tsx
import c from "../../../_runtime/00576_c.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import useSafeAreaInsetsDefault from "../../modules/safe_area/useSafeAreaInsets.native.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../design/components/Navigator/native/Navigator.native.tsx";
import ContactSyncUtils from "../../modules/contact_sync/native/ContactSyncUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import UserStore from "../../stores/UserStore.tsx";
import TextStyles from "../../modules/rebrand/native/TextStyles.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_8, Fonts } = Constants);
const ContactPermissions = fn(12400).ContactPermissions;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { headerText: null, subheaderText: null, input: null, otherOptionsContainer: null, rowContainer: null };
let obj3 = {};
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.marginTop = 32;
obj3.marginHorizontal = 16;
obj3.textAlign = "center";
obj2.headerText = obj3;
obj2.subheaderText = { lineHeight: 18, marginVertical: 8, marginHorizontal: 16, textAlign: "center" };
obj2.input = { marginTop: 16 };
obj2.otherOptionsContainer = { marginTop: 16, paddingHorizontal: 16 };
obj2.rowContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 8 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AddFriendModalScene(onSkip) {
      const cResult = onSkip(contactSyncAccount[11]).c(32);
      onSkip = onSkip.onSkip;
      const sourceMetadata = onSkip.sourceMetadata;
      let tmp4 = closure_12();
      let obj = onSkip(contactSyncAccount[11]);
      contactSyncAccount = onSkip(contactSyncAccount[12]).useContactSyncAccount();
      if (cResult[0] !== contactSyncAccount) {
        const isContactSyncEnabledResult = tmp(tmp2[12]).isContactSyncEnabled(contactSyncAccount);
        cResult[0] = contactSyncAccount;
        cResult[1] = isContactSyncEnabledResult;
        let tmp6 = isContactSyncEnabledResult;
        const tmpResult = tmp(tmp2[12]);
      } else {
        tmp6 = cResult[1];
      }
      let obj2 = onSkip(contactSyncAccount[12]);
      const obj4 = navigation;
      [tmp9, _slicedToArray] = navigation.useState(!tmp6);
      if (cResult[2] === contactSyncAccount) {
        if (cResult[3] === sourceMetadata) {
          let tmp10 = cResult[4];
        }
        sourceMetadata(tmp2[15])(tmp10);
        navigation = tmp(tmp2[16]).useNavigation();
        if (cResult[5] !== onSkip) {
          class I {
            constructor() {
              if (onSkip != null) {
                tmpResult = tmp();
              }
              arr = closure_1(closure_2[17]);
              arr1 = arr.pop();
              return;
            }
          }
          cResult[5] = onSkip;
          cResult[6] = I;
        } else {
          class I {
            constructor() {
              if (onSkip != null) {
                tmpResult = tmp();
              }
              arr = closure_1(closure_2[17]);
              arr1 = arr.pop();
              return;
            }
          }
        }
        closure_5 = I;
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor() {
              currentUser = closure_1_7.getCurrentUser();
              userTag = undefined;
              if (null != currentUser) {
                tmp3 = sourceMetadata;
                tmp4 = closure_2;
                obj = sourceMetadata(closure_2[18]);
                userTag = obj.getUserTag(currentUser);
              }
              obj2 = sourceMetadata(closure_2[13]);
              trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                friend_add_type: "Invite",
                source_page: "Add Friend Modal",
              });
              intl = onSkip(closure_2[19]).intl;
              formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                url: "https://discord.com/",
                username: userTag,
              });
              obj3 = onSkip(closure_2[20]);
              showShareActionSheetResult = obj3.showShareActionSheet(
                { message: formatToPlainStringResult },
                "Add Friend Modal",
              );
              return;
            }
          }
          cResult[7] = M;
        } else {
          class M {
            constructor() {
              currentUser = closure_1_7.getCurrentUser();
              userTag = undefined;
              if (null != currentUser) {
                tmp3 = sourceMetadata;
                tmp4 = closure_2;
                obj = sourceMetadata(closure_2[18]);
                userTag = obj.getUserTag(currentUser);
              }
              obj2 = sourceMetadata(closure_2[13]);
              trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                friend_add_type: "Invite",
                source_page: "Add Friend Modal",
              });
              intl = onSkip(closure_2[19]).intl;
              formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                url: "https://discord.com/",
                username: userTag,
              });
              obj3 = onSkip(closure_2[20]);
              showShareActionSheetResult = obj3.showShareActionSheet(
                { message: formatToPlainStringResult },
                "Add Friend Modal",
              );
              return;
            }
          }
        }
        closure_6 = M;
        if (cResult[8] === I) {
          class M {
            constructor() {
              currentUser = closure_1_7.getCurrentUser();
              userTag = undefined;
              if (null != currentUser) {
                tmp3 = sourceMetadata;
                tmp4 = closure_2;
                obj = sourceMetadata(closure_2[18]);
                userTag = obj.getUserTag(currentUser);
              }
              obj2 = sourceMetadata(closure_2[13]);
              trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                friend_add_type: "Invite",
                source_page: "Add Friend Modal",
              });
              intl = onSkip(closure_2[19]).intl;
              formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                url: "https://discord.com/",
                username: userTag,
              });
              obj3 = onSkip(closure_2[20]);
              showShareActionSheetResult = obj3.showShareActionSheet(
                { message: formatToPlainStringResult },
                "Add Friend Modal",
              );
              return;
            }
          }
          const layoutEffect = obj4.useLayoutEffect(tmp17, tmp18);
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
            const stringResult = obj6.string(tmp(tmp2[19]).t.GWMTSE);
            cResult[12] = stringResult;
            const tmp20 = stringResult;
          } else {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
          }
          if (cResult[13] !== tmp4.headerText) {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
            let obj3 = {
              style: tmp4.headerText,
              accessibilityRole: "header",
              variant: "heading-xl/extrabold",
              color: "mobile-text-heading-primary",
              children: tmp20,
            };
            const tmp23 = closure_10(tmp(tmp2[24]).Text, obj3);
            cResult[13] = tmp4.headerText;
            cResult[14] = tmp23;
          } else {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
            const stringResult1 = obj8.string(tmp(tmp2[19]).t["Rn/sLl"]);
            cResult[15] = stringResult1;
            const tmp24 = stringResult1;
          } else {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
          }
          if (cResult[16] !== tmp4.subheaderText) {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
            const obj5 = {
              style: tmp4.subheaderText,
              variant: "text-sm/medium",
              color: "text-default",
              children: tmp24,
            };
            const tmp27 = closure_10(tmp(tmp2[24]).Text, obj5);
            cResult[16] = tmp4.subheaderText;
            cResult[17] = tmp27;
          } else {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
          }
          if (cResult[18] !== tmp4.input) {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
            const obj7 = { style: tmp4.input, autoFocusInput: false };
            const tmp29 = closure_10(tmp11(tmp2[25]), obj7);
            cResult[18] = tmp4.input;
            cResult[19] = tmp29;
          } else {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
            const obj9 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
            let intl = tmp(tmp2[19]).intl;
            obj9.children = intl.string(tmp(tmp2[19]).t.dukg0Z);
            const tmp31 = closure_10(tmp(tmp2[24]).Text, obj9);
            cResult[20] = tmp31;
            const tmp30 = tmp31;
          } else {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
          }
          if (cResult[21] === tmp9) {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
              }
            }
            if (cResult[24] === tmp4.otherOptionsContainer) {
              class M {
                constructor() {
                  currentUser = closure_1_7.getCurrentUser();
                  userTag = undefined;
                  if (null != currentUser) {
                    tmp3 = sourceMetadata;
                    tmp4 = closure_2;
                    obj = sourceMetadata(closure_2[18]);
                    userTag = obj.getUserTag(currentUser);
                  }
                  obj2 = sourceMetadata(closure_2[13]);
                  trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                    friend_add_type: "Invite",
                    source_page: "Add Friend Modal",
                  });
                  intl = onSkip(closure_2[19]).intl;
                  formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                    url: "https://discord.com/",
                    username: userTag,
                  });
                  obj3 = onSkip(closure_2[20]);
                  showShareActionSheetResult = obj3.showShareActionSheet(
                    { message: formatToPlainStringResult },
                    "Add Friend Modal",
                  );
                  return;
                }
              }
              if (cResult[27] === tmp26) {
                class M {
                  constructor() {
                    currentUser = closure_1_7.getCurrentUser();
                    userTag = undefined;
                    if (null != currentUser) {
                      tmp3 = sourceMetadata;
                      tmp4 = closure_2;
                      obj = sourceMetadata(closure_2[18]);
                      userTag = obj.getUserTag(currentUser);
                    }
                    obj2 = sourceMetadata(closure_2[13]);
                    trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                      friend_add_type: "Invite",
                      source_page: "Add Friend Modal",
                    });
                    intl = onSkip(closure_2[19]).intl;
                    formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                      url: "https://discord.com/",
                      username: userTag,
                    });
                    obj3 = onSkip(closure_2[20]);
                    showShareActionSheetResult = obj3.showShareActionSheet(
                      { message: formatToPlainStringResult },
                      "Add Friend Modal",
                    );
                    return;
                  }
                }
              }
              const obj10 = { keyboardShouldPersistTaps: "handled", children: null };
              const items = [tmp22, tmp26, tmp28, tmp34];
              obj10.children = items;
              const tmp41 = closure_11(closure_6, obj10);
              cResult[27] = tmp26;
              cResult[28] = tmp28;
              cResult[29] = tmp34;
              cResult[30] = tmp22;
              cResult[31] = tmp41;
            }
            const obj11 = { style: tmp4.otherOptionsContainer, children: null };
            const items1 = [tmp30, tmp32];
            obj11.children = items1;
            const tmp37 = closure_11(closure_5, obj11);
            cResult[24] = tmp4.otherOptionsContainer;
            cResult[25] = tmp32;
            cResult[26] = tmp37;
          }
          let tmp33 = null;
          if (tmp9) {
            class M {
              constructor() {
                currentUser = closure_1_7.getCurrentUser();
                userTag = undefined;
                if (null != currentUser) {
                  tmp3 = sourceMetadata;
                  tmp4 = closure_2;
                  obj = sourceMetadata(closure_2[18]);
                  userTag = obj.getUserTag(currentUser);
                }
                obj2 = sourceMetadata(closure_2[13]);
                trackResult = obj2.track(closure_1_8.FRIEND_ADD_VIEWED, {
                  friend_add_type: "Invite",
                  source_page: "Add Friend Modal",
                });
                intl = onSkip(closure_2[19]).intl;
                formatToPlainStringResult = intl.formatToPlainString(onSkip(closure_2[19]).t["6E9a1J"], {
                  url: "https://discord.com/",
                  username: userTag,
                });
                obj3 = onSkip(closure_2[20]);
                showShareActionSheetResult = obj3.showShareActionSheet(
                  { message: formatToPlainStringResult },
                  "Add Friend Modal",
                );
                return;
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
          let obj = {
            headerRight() {
              const obj = { source: sourceMetadata(contactSyncAccount[22]), onPress, accessibilityLabel: null };
              const intl = onSkip(contactSyncAccount[19]).intl;
              obj.accessibilityLabel = intl.string(onSkip(contactSyncAccount[19]).t.RDE0Sc);
              return closure_2_10(onSkip(contactSyncAccount[21]).HeaderActionButton, obj);
            },
            headerLeft: NavigatorHeader.getHeaderCloseButton(closure_5),
          };
          navigation.setOptions(obj);
        };
        const items2 = [I, M, navigation];
        cResult[8] = I;
        cResult[9] = navigation;
        cResult[10] = fn2;
        cResult[11] = items2;
        tmp17 = fn2;
        tmp18 = items2;
        const tmpResult2 = tmp(tmp2[16]);
      }
      const fn = function b() {
        AnalyticsUtilsDefault.track(constants.FRIEND_ADD_VIEWED, sourceMetadata);
        const result = ContactSyncUtils.checkContactPermissions();
        result.then((result) => {
          const obj = onSkip(contactSyncAccount[14]);
          let tmp5 =
            result === constants2.NOT_DETERMINED ||
            (onSkip(contactSyncAccount[14]).isAndroid() && result === constants2.UNAUTHORIZED);
          if (!tmp5) {
            tmp5 = !onSkip(contactSyncAccount[12]).isContactSyncEnabled(closure_1_2);
            const tmp2Result = onSkip(contactSyncAccount[12]);
          }
          closure_1_3(tmp5);
          const tmp4 = onSkip(contactSyncAccount[14]).isAndroid() && result === constants2.UNAUTHORIZED;
        });
      };
      cResult[2] = contactSyncAccount;
      cResult[3] = sourceMetadata;
      cResult[4] = fn;
      tmp10 = fn;
      const tmp8 = _slicedToArray(navigation.useState(!tmp6), 2);
    }
  : function AddFriendModalScene(onSkip) {
      onSkip = onSkip.onSkip;
      const sourceMetadata = onSkip.sourceMetadata;
      let contactSyncAccount;
      _slicedToArray = undefined;
      let navigation;
      const tmp = closure_12();
      contactSyncAccount = onSkip(contactSyncAccount[12]).useContactSyncAccount();
      let obj = onSkip(contactSyncAccount[12]);
      const tmp2 = contactSyncAccount;
      let obj2 = onSkip(contactSyncAccount[12]);
      [tmp5, c3] = navigation.useState(!onSkip(contactSyncAccount[12]).isContactSyncEnabled(contactSyncAccount));
      sourceMetadata(contactSyncAccount[15])(() => {
        AnalyticsUtilsDefault.track(constants.FRIEND_ADD_VIEWED, sourceMetadata);
        const result = ContactSyncUtils.checkContactPermissions();
        result.then((result) => {
          const obj = onSkip(contactSyncAccount[14]);
          let tmp5 =
            result === constants2.NOT_DETERMINED ||
            (onSkip(contactSyncAccount[14]).isAndroid() && result === constants2.UNAUTHORIZED);
          if (!tmp5) {
            tmp5 = !onSkip(contactSyncAccount[12]).isContactSyncEnabled(closure_1_2);
            const tmp2Result = onSkip(contactSyncAccount[12]);
          }
          closure_1_3(tmp5);
          const tmp4 = onSkip(contactSyncAccount[14]).isAndroid() && result === constants2.UNAUTHORIZED;
        });
      });
      let tmp4 = _slicedToArray(
        navigation.useState(!onSkip(contactSyncAccount[12]).isContactSyncEnabled(contactSyncAccount)),
        2,
      );
      const tmp6 = sourceMetadata;
      navigation = onSkip(contactSyncAccount[16]).useNavigation();
      const items = [onSkip];
      const callback = navigation.useCallback(() => {
        if (onSkip != null) {
          tmp();
        }
        ModalActionCreatorsDefault.pop();
      }, items);
      const callback1 = navigation.useCallback(() => {
        currentUser = currentUser.getCurrentUser();
        let userTag;
        if (null != currentUser) {
          userTag = sourceMetadata(contactSyncAccount[18]).getUserTag(currentUser);
          const obj = sourceMetadata(contactSyncAccount[18]);
        }
        sourceMetadata(contactSyncAccount[13]).track(constants.FRIEND_ADD_VIEWED, {
          friend_add_type: "Invite",
          source_page: "Add Friend Modal",
        });
        const intl = onSkip(contactSyncAccount[19]).intl;
        const obj2 = sourceMetadata(contactSyncAccount[13]);
        const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[19]).t["6E9a1J"], {
          url: "https://discord.com/",
          username: userTag,
        });
        onSkip(contactSyncAccount[20]).showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
        const obj3 = onSkip(contactSyncAccount[20]);
      }, []);
      const items1 = [callback, callback1, navigation];
      const layoutEffect = navigation.useLayoutEffect(() => {
        let obj = {
          headerRight() {
            const obj = { source: sourceMetadata(contactSyncAccount[22]), onPress, accessibilityLabel: null };
            const intl = onSkip(contactSyncAccount[19]).intl;
            obj.accessibilityLabel = intl.string(onSkip(contactSyncAccount[19]).t.RDE0Sc);
            return closure_2_10(onSkip(contactSyncAccount[21]).HeaderActionButton, obj);
          },
          headerLeft: NavigatorHeader.getHeaderCloseButton(callback),
        };
        navigation.setOptions(obj);
      }, items1);
      const obj4 = {
        style: tmp.headerText,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      let intl = onSkip(contactSyncAccount[19]).intl;
      obj4.children = intl.string(onSkip(contactSyncAccount[19]).t.GWMTSE);
      const items2 = [closure_10(onSkip(contactSyncAccount[24]).Text, obj4), , ,];
      const obj5 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = onSkip(contactSyncAccount[19]).intl;
      obj5.children = intl2.string(onSkip(contactSyncAccount[19]).t["Rn/sLl"]);
      items2[1] = closure_10(onSkip(contactSyncAccount[24]).Text, obj5);
      items2[2] = closure_10(sourceMetadata(contactSyncAccount[25]), { style: tmp.input, autoFocusInput: false });
      const obj7 = { style: tmp.otherOptionsContainer, children: null };
      const obj8 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
      const intl3 = onSkip(contactSyncAccount[19]).intl;
      obj8.children = intl3.string(onSkip(contactSyncAccount[19]).t.dukg0Z);
      const items3 = [closure_10(onSkip(contactSyncAccount[24]).Text, obj8)];
      let tmp14Result = null;
      if (tmp5) {
        const obj9 = { style: tmp.rowContainer, location: "Add Friend Modal" };
        tmp14Result = closure_10(tmp6(tmp2[26]), obj9);
      }
      const obj10 = { keyboardShouldPersistTaps: "handled", children: null };
      items3[1] = tmp14Result;
      obj7.children = items3;
      items2[3] = closure_11(callback, obj7);
      obj10.children = items2;
      return closure_11(callback1, obj10);
    };
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 8 };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/add_friend/AddFriendModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AddFriendModal(initialParams) {
      const cResult = c.c(5);
      const top = useSafeAreaInsetsDefault().top;
      if (cResult[0] !== initialParams) {
        const obj2 = { ADD_FRIEND: null };
        const obj3 = { ignoreKeyboard: true, title: null, initialParams: null, render: null };
        const intl = util.intl;
        obj3.title = intl.string(util.t.w5uwoI);
        obj3.initialParams = initialParams;
        obj3.render = function render(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_10(closure_1_13, {});
        };
        obj2.ADD_FRIEND = obj3;
        cResult[0] = initialParams;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp4) {
        if (cResult[3] === top) {
          let tmp5 = cResult[4];
        }
        return tmp5;
      }
      const tmp6 = collapsed(Navigator.Navigator, {
        screens: tmp4,
        initialRouteName: "ADD_FRIEND",
        headerStatusBarHeight: top,
      });
      cResult[2] = tmp4;
      cResult[3] = top;
      cResult[4] = tmp6;
      tmp5 = tmp6;
    }
  : function AddFriendModal(initialParams) {
      _require = initialParams;
      const items = [initialParams];
      const screens = noop.useMemo(() => {
        const obj = { ADD_FRIEND: null };
        const obj2 = { ignoreKeyboard: true, title: null, initialParams: null, render: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t.w5uwoI);
        obj2.initialParams = initialParams;
        obj2.render = function render(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_10(closure_1_13, {});
        };
        obj.ADD_FRIEND = obj2;
        return obj;
      }, items);
      return closure_10(require("Navigator").Navigator, {
        screens,
        initialRouteName: "ADD_FRIEND",
        headerStatusBarHeight: useSafeAreaInsetsDefault().top,
      });
    };
