// discord_app/modules/multi_account/native/ChooseAccount.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import MultiAccountActionCreatorsAll from "../MultiAccountActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const MultiAccountTokenStatus = fn(12125).MultiAccountTokenStatus;
let Constants = fn(12126);
({ MAX_ACCOUNTS: closure_7, MultiAccountSwitchLocation: closure_8 } = Constants);
Constants = fn(1085);
({ AnalyticEvents: closure_9, AuthStates: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderRadius: nativeDefault.radii.sm,
    paddingTop: nativeDefault.space.PX_16,
    margin: nativeDefault.space.PX_16,
  },
  mainCard: null,
  addAccountLabel: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.sm,
  paddingTop: nativeDefault.space.PX_16,
  margin: nativeDefault.space.PX_16,
};
obj2.mainCard = {
  marginVertical: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "column",
  alignItems: "stretch",
  alignSelf: "stretch",
  display: "flex",
};
let obj4 = {
  marginVertical: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "column",
  alignItems: "stretch",
  alignSelf: "stretch",
  display: "flex",
};
obj2.addAccountLabel = { color: nativeDefault.colors.TEXT_LINK };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.TEXT_LINK };
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/native/ChooseAccount.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChooseAccount() {
      const cResult = navigation(576).c(29);
      const tmp4 = closure_13();
      let obj = navigation(576);
      navigation = navigation(1503).useNavigation();
      let obj2 = navigation(1503);
      const multiAccountUsers = navigation(16353).useMultiAccountUsers().multiAccountUsers;
      if (cResult[0] !== navigation) {
        function handlePressUser(tokenStatus) {
          if (tokenStatus.tokenStatus === MultiAccountTokenStatus.INVALID) {
            navigation.push(constants3.LOGIN);
            AnalyticsUtilsDefault.track(constants2.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
          } else {
            MultiAccountActionCreatorsAll.switchAccount(tokenStatus.id, undefined, constants.CHOOSE_ACCOUNT);
          }
        }
        cResult[0] = navigation;
        cResult[1] = handlePressUser;
        let tmp6 = handlePressUser;
      } else {
        tmp6 = cResult[1];
      }
      closure_2 = tmp6;
      if (cResult[2] === multiAccountUsers.length) {
        if (cResult[3] === navigation) {
          let tmp7 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          closure_129_0 = asyncGeneratorStep(async (arg0) => {
            if (c4 === 2) {
              c4 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                c4 = 2;
                if (0 === dependencyMap) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    let string = navigation;
                    closure_129_0 = navigation;
                    let obj5 = {
                      title: null,
                      body: null,
                      confirmText: null,
                      confirmColor: null,
                      cancelText: null,
                      isDismissable: true,
                    };
                    const intl3 = navigation(1126).intl;
                    obj5.title = intl3.string(navigation(1126).t.n0Fbg6);
                    const intl4 = navigation(1126).intl;
                    let intl = intl4.formatToPlainString;
                    let intl2 = navigation(1126).t.phEQmS;
                    if ("0" === navigation.discriminator) {
                      const _HermesInternal2 = HermesInternal;
                      let combined = "" + string.username;
                    } else {
                      const _HermesInternal = HermesInternal;
                      combined = "" + string.username + "#" + string.discriminator;
                    }
                    const obj6 = { username: combined };
                    obj5.body = intl(intl2, obj6);
                    intl = navigation(1126).intl;
                    obj5.confirmText = intl.string(navigation(1126).t.N86XcP);
                    obj5.confirmColor = navigation(1200).ButtonColors.RED;
                    intl2 = navigation(1126).intl;
                    string = intl2.string;
                    obj5.cancelText = string(navigation(1126).t["ETE/oC"]);
                    obj5 = tmp2(5300).confirm(obj5);
                    dependencyMap = 1;
                    c4 = 1;
                    const obj8 = tmp2(5300);
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  if (value) {
                    tmp2(5056).hideActionSheet();
                    const obj = tmp2(5056);
                    tmp5(12129).removeAccount(closure_129_0.id);
                    const obj2 = tmp5(12129);
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: "+51" };
                }
              } catch (tmp23) {
                c4 = tmp;
                throw tmp23;
              }
            }
          });
          function handlePressRemove() {
            const self = this;
            const apply = navigation.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          cResult[5] = handlePressRemove;
          let tmp10 = handlePressRemove;
        } else {
          tmp10 = cResult[5];
        }
        dependencyMap = tmp10;
        if (cResult[6] !== tmp6) {
          function handlePressMore(arg0) {
            closure_0 = arg0;
            multiAccountUsers(5056).hideActionSheet();
            const obj = multiAccountUsers(5056);
            const obj3 = { key: "RemoveAccount", options: null, hasIcons: false };
            const obj4 = { label: null, onPress: null };
            const intl = navigation(1126).intl;
            obj4.label = intl.string(navigation(1126).t["DSN+hw"]);
            obj4.onPress = function onPress() {
              return closure_2(closure_0);
            };
            const items = [obj4];
            const obj5 = { label: null, onPress: null, isDestructive: true };
            const intl2 = navigation(1126).intl;
            obj5.label = intl2.string(navigation(1126).t.lSLMaU);
            obj5.onPress = function onPress() {
              return closure_3(closure_0);
            };
            items[1] = obj5;
            obj3.options = items;
            const result = navigation(6890).showSimpleActionSheet(obj3);
          }
          cResult[6] = tmp6;
          cResult[7] = handlePressMore;
          let tmp12 = handlePressMore;
        } else {
          tmp12 = cResult[7];
        }
        asyncGeneratorStep = tmp12;
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.bVbB63);
          cResult[8] = stringResult;
          let tmp13 = stringResult;
        } else {
          tmp13 = cResult[8];
        }
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          let obj4 = { variant: "text-sm/medium", color: "text-default", children: null };
          let intl2 = tmp(1126).intl;
          obj4.children = intl2.string(tmp(1126).t["0M5fN7"]);
          const tmp17 = closure_11(tmp(5088).Text, obj4);
          cResult[9] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[9];
        }
        if (cResult[10] === tmp12) {
          if (cResult[11] === tmp6) {
            if (cResult[12] === multiAccountUsers) {
              const _Symbol4 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                let obj5 = {
                  themedColor: multiAccountUsers(587).colors.TEXT_LINK,
                  size: tmp(1200).Icon.Sizes.SMALL_20,
                  source: multiAccountUsers(16355),
                };
                const tmp28 = closure_11(tmp(8579).FormRow.Icon, obj5);
                let intl3 = tmp(1126).intl;
                const stringResult1 = intl3.string(tmp(1126).t.bPP34Q);
                cResult[17] = stringResult1;
                cResult[18] = tmp28;
                let tmp25 = tmp28;
                let tmp24 = stringResult1;
              } else {
                tmp24 = cResult[17];
                tmp25 = cResult[18];
              }
              if (cResult[19] === tmp7) {
                if (cResult[20] === tmp4.addAccountLabel) {
                  let tmp30 = cResult[21];
                }
                if (cResult[22] === tmp4.mainCard) {
                  if (cResult[23] === tmp30) {
                    if (cResult[24] === tmp20) {
                      let tmp33 = cResult[25];
                    }
                    if (cResult[26] === tmp4.container) {
                      if (cResult[27] === tmp33) {
                        let tmp37 = cResult[28];
                      }
                      return tmp37;
                    }
                    let obj6 = {
                      headerText: tmp13,
                      subHeader: tmp15,
                      backgroundImageSource: multiAccountUsers(14063),
                      backgroundImageCover: true,
                      contentStyle: tmp18,
                      children: tmp33,
                    };
                    const tmp40 = multiAccountUsers(6653);
                    cResult[26] = tmp4.container;
                    cResult[27] = tmp33;
                    class R {
                      constructor(arg0) {
                        closure_0 = arg0;
                        obj = {
                          user: arg0,
                          onPressUser() {
                            return closure_2(closure_0);
                          },
                          trailing: null,
                        };
                        tmp = multiAccountUsers(closure_3[21]);
                        obj1 = {
                          accessibilityRole: "button",
                          onPress() {
                            return closure_4(closure_0);
                          },
                          children: null,
                        };
                        obj4 = {
                          size: closure_0(closure_3[17]).Icon.Sizes.SMALL_20,
                          source: multiAccountUsers(closure_3[23]),
                          disableColor: true,
                        };
                        obj1.children = closure_1_11(closure_0(closure_3[17]).Icon, obj4);
                        obj.trailing = closure_1_11(closure_0(closure_3[22]).PressableOpacity, obj1);
                        return closure_1_11(tmp, obj, arg0.id);
                      }
                    }
                    tmp37 = closure_11(multiAccountUsers(6653), obj6);
                    const tmp41 = closure_11(multiAccountUsers(6653), obj6);
                  }
                }
                let obj7 = { style: tmp19, children: null };
                let items = [tmp20, tmp30];
                obj7.children = items;
                const tmp36 = closure_12(View, obj7);
                cResult[22] = tmp4.mainCard;
                cResult[23] = tmp30;
                cResult[24] = tmp20;
                class R {
                  constructor(arg0) {
                    closure_0 = arg0;
                    obj = {
                      user: arg0,
                      onPressUser() {
                        return closure_2(closure_0);
                      },
                      trailing: null,
                    };
                    tmp = multiAccountUsers(closure_3[21]);
                    obj1 = {
                      accessibilityRole: "button",
                      onPress() {
                        return closure_4(closure_0);
                      },
                      children: null,
                    };
                    obj4 = {
                      size: closure_0(closure_3[17]).Icon.Sizes.SMALL_20,
                      source: multiAccountUsers(closure_3[23]),
                      disableColor: true,
                    };
                    obj1.children = closure_1_11(closure_0(closure_3[17]).Icon, obj4);
                    obj.trailing = closure_1_11(closure_0(closure_3[22]).PressableOpacity, obj1);
                    return closure_1_11(tmp, obj, arg0.id);
                  }
                }
                cResult[25] = tmp36;
                tmp33 = tmp36;
              }
              let obj8 = { leading: tmp25, label: tmp24, labelStyle: tmp4.addAccountLabel, onPress: tmp7 };
              cResult[19] = tmp7;
              cResult[20] = tmp4.addAccountLabel;
              class R {
                constructor(arg0) {
                  closure_0 = arg0;
                  obj = {
                    user: arg0,
                    onPressUser() {
                      return closure_2(closure_0);
                    },
                    trailing: null,
                  };
                  tmp = multiAccountUsers(closure_3[21]);
                  obj1 = {
                    accessibilityRole: "button",
                    onPress() {
                      return closure_4(closure_0);
                    },
                    children: null,
                  };
                  obj4 = {
                    size: closure_0(closure_3[17]).Icon.Sizes.SMALL_20,
                    source: multiAccountUsers(closure_3[23]),
                    disableColor: true,
                  };
                  obj1.children = closure_1_11(closure_0(closure_3[17]).Icon, obj4);
                  obj.trailing = closure_1_11(closure_0(closure_3[22]).PressableOpacity, obj1);
                  return closure_1_11(tmp, obj, arg0.id);
                }
              }
              tmp30 = closure_11(tmp(8579).FormRow, obj8);
              const tmp32 = closure_11(tmp(8579).FormRow, obj8);
            }
          }
        }
        if (cResult[14] === tmp12) {
          if (cResult[15] === tmp6) {
            let tmp21 = cResult[16];
          }
          const mapped = multiAccountUsers.map(tmp21);
          cResult[10] = tmp12;
          cResult[11] = tmp6;
          cResult[12] = multiAccountUsers;
          cResult[13] = mapped;
        }
        class R {
          constructor(arg0) {
            closure_0 = arg0;
            obj = {
              user: arg0,
              onPressUser() {
                return closure_2(closure_0);
              },
              trailing: null,
            };
            tmp = multiAccountUsers(closure_3[21]);
            obj1 = {
              accessibilityRole: "button",
              onPress() {
                return closure_4(closure_0);
              },
              children: null,
            };
            obj4 = {
              size: closure_0(closure_3[17]).Icon.Sizes.SMALL_20,
              source: multiAccountUsers(closure_3[23]),
              disableColor: true,
            };
            obj1.children = closure_1_11(closure_0(closure_3[17]).Icon, obj4);
            obj.trailing = closure_1_11(closure_0(closure_3[22]).PressableOpacity, obj1);
            return closure_1_11(tmp, obj, arg0.id);
          }
        }
        cResult[14] = tmp12;
        cResult[15] = tmp6;
        cResult[16] = R;
        tmp21 = R;
      }
      cResult[2] = multiAccountUsers.length;
      cResult[3] = navigation;
      cResult[4] = tmp8;
      tmp7 = tmp8;
      let obj3 = navigation(16353);
    }
  : function ChooseAccount() {
      closure_2 = async function _handlePressRemove2(arg0) {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: "+51" };
          }
        } else {
          try {
            c4 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let string = closure_0;
                closure_129_0 = closure_0;
                let obj5 = {
                  title: null,
                  body: null,
                  confirmText: null,
                  confirmColor: null,
                  cancelText: null,
                  isDismissable: true,
                };
                const intl3 = closure_0(1126).intl;
                obj5.title = intl3.string(closure_0(1126).t.n0Fbg6);
                const intl4 = closure_0(1126).intl;
                let intl = intl4.formatToPlainString;
                let intl2 = closure_0(1126).t.phEQmS;
                if ("0" === closure_0.discriminator) {
                  const _HermesInternal2 = HermesInternal;
                  let combined = "" + string.username;
                } else {
                  const _HermesInternal = HermesInternal;
                  combined = "" + string.username + "#" + string.discriminator;
                }
                const obj6 = { username: combined };
                obj5.body = intl(intl2, obj6);
                intl = closure_0(1126).intl;
                obj5.confirmText = intl.string(closure_0(1126).t.N86XcP);
                obj5.confirmColor = closure_0(1200).ButtonColors.RED;
                intl2 = closure_0(1126).intl;
                string = intl2.string;
                obj5.cancelText = string(closure_0(1126).t["ETE/oC"]);
                obj5 = tmp2(5300).confirm(obj5);
                dependencyMap = 1;
                c4 = 1;
                const obj8 = tmp2(5300);
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              if (value) {
                tmp2(5056).hideActionSheet();
                const obj = tmp2(5056);
                tmp5(12129).removeAccount(closure_129_0.id);
                const obj2 = tmp5(12129);
              }
              c4 = 3;
              return { value: "IconComponent", done: "+51" };
            }
          } catch (tmp23) {
            c4 = tmp;
            throw tmp23;
          }
        }
      };
      let tmp = closure_13();
      _require = require("useNavigation").useNavigation();
      let obj = require("useNavigation");
      const multiAccountUsers = require("useMultiAccount").useMultiAccountUsers().multiAccountUsers;
      let obj3 = {
        headerText: null,
        subHeader: null,
        backgroundImageSource: null,
        backgroundImageCover: true,
        contentStyle: null,
        children: null,
      };
      let obj2 = require("useMultiAccount");
      let intl = require("util").intl;
      obj3.headerText = intl.string(require("util").t.bVbB63);
      let obj4 = { variant: "text-sm/medium", color: "text-default", children: null };
      let intl2 = require("util").intl;
      obj4.children = intl2.string(require("util").t["0M5fN7"]);
      obj3.subHeader = closure_11(require("Text/Text").Text, obj4);
      obj3.backgroundImageSource = multiAccountUsers(14063);
      obj3.contentStyle = tmp.container;
      let obj5 = { style: tmp.mainCard, children: null };
      let items = [
        multiAccountUsers.map((user) => {
          let obj = {
            user,
            onPressUser() {
              if (user.tokenStatus === constants.INVALID) {
                user.push(constants4.LOGIN);
                multiAccountUsers(1265).track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
                const obj2 = multiAccountUsers(1265);
              } else {
                closure_1_2(12129).switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
                const obj = closure_1_2(12129);
              }
              return tmp4;
            },
            trailing: null,
          };
          let obj2 = {
            accessibilityRole: "button",
            onPress() {
              multiAccountUsers(5056).hideActionSheet();
              let obj = multiAccountUsers(5056);
              const obj3 = { key: "RemoveAccount", options: null, hasIcons: false };
              const obj4 = { label: null, onPress: null };
              const intl = user(1126).intl;
              obj4.label = intl.string(user(1126).t["DSN+hw"]);
              obj4.onPress = function onPress() {
                if (closure_0.tokenStatus === constants.INVALID) {
                  closure_0.push(constants4.LOGIN);
                  closure_1_1(1265).track(constants3.LOGIN_VIEWED, { source: "choose_account_user_invalid" });
                  const obj2 = closure_1_1(1265);
                } else {
                  closure_1_2(12129).switchAccount(tmp.id, undefined, constants2.CHOOSE_ACCOUNT);
                  const obj = closure_1_2(12129);
                }
                return tmp4;
              };
              const items = [obj4];
              const obj5 = { label: null, onPress: null, isDestructive: true };
              const intl2 = user(1126).intl;
              obj5.label = intl2.string(user(1126).t.lSLMaU);
              obj5.onPress = function onPress() {
                return (function handlePressRemove(arg0) {
                  const self = this;
                  const apply = closure_1_2.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_0);
              };
              items[1] = obj5;
              obj3.options = items;
              const result = user(6890).showSimpleActionSheet(obj3);
            },
            children: null,
          };
          const tmp = multiAccountUsers(16354);
          obj2.children = closure_1_11(user(1200).Icon, {
            size: user(1200).Icon.Sizes.SMALL_20,
            source: multiAccountUsers(8664),
            disableColor: true,
          });
          obj.trailing = closure_1_11(user(6184).PressableOpacity, obj2);
          return closure_1_11(tmp, obj, user.id);
        }),
      ];
      let obj6 = { leading: null, label: null, labelStyle: null, onPress: null };
      const tmp2 = multiAccountUsers(6653);
      obj6.leading = closure_11(require("Form").FormRow.Icon, {
        themedColor: multiAccountUsers(587).colors.TEXT_LINK,
        size: require("native").Icon.Sizes.SMALL_20,
        source: multiAccountUsers(16355),
      });
      let intl3 = require("util").intl;
      obj6.label = intl3.string(require("util").t.bPP34Q);
      obj6.labelStyle = tmp.addAccountLabel;
      obj6.onPress = function handlePressAddAccount() {
        if (multiAccountUsers.length >= React5) {
          const obj3 = { title: null, body: null, isDismissable: true };
          const intl = util.intl;
          obj3.title = intl.string(util.t.w7wfXi);
          const intl2 = util.intl;
          const obj4 = { maxNumAccounts: tmp };
          obj3.body = intl2.formatToPlainString(util.t.WOyelG, obj4);
          actions_AlertActionCreatorsDefault.show(obj3);
        } else {
          closure_0.push(constants3.LOGIN);
          AnalyticsUtilsDefault.track(constants2.LOGIN_VIEWED, { source: "choose_account_add_account" });
        }
      };
      items[1] = closure_11(require("Form").FormRow, obj6);
      obj5.children = items;
      obj3.children = closure_12(View, obj5);
      return closure_11(tmp2, obj3);
    };
