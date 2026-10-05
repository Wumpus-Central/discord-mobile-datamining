// === Module 12816: AddOrOpenAppButton ===

// Module 12816 (AddOrOpenAppButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1489 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import ApplicationUtils from "ApplicationUtils" /* 8709 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8795 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 11756 */;
import useIsAppDMDefault from "useIsAppDM" /* 11769 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3, c4, profileApplication;

let _asyncToGenerator = _asyncToGenerator_mod;
const getSection = ApplicationCommandIndexStore.getSection;
const AnalyticEvents = Constants.AnalyticEvents;
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let botUserId;
  let channel;
  let guildId;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(6);
  ({ application, botUserId, channel, guildId } = arg0);
  const tmp2 = useIsAppDMDefault(channel);
  if (cResult[0] === application) {
    if (cResult[1] === botUserId) {
      if (cResult[2] === channel) {
        if (cResult[3] === guildId) {
          if (cResult[4] === tmp2) {
            tmp3 = cResult[5];
          }
          return tmp3;
        }
      }
    }
  }
  if (tmp2) {
    let tmp5;
    if (null != channel) {
      tmp5 = <closure_11 profileApplication={application} botUserId={botUserId} channel={channel} />;
    }
    cResult[0] = application;
    cResult[1] = botUserId;
    cResult[2] = channel;
    cResult[3] = guildId;
    cResult[4] = tmp2;
    cResult[5] = tmp5;
    tmp3 = tmp5;
  }
  tmp5 = <closure_10 application={application} guildId={guildId} />;
}) : ((arg0) => {
  let application;
  let botUserId;
  let channel;
  let guildId;
  ({ application, channel } = arg0);
  ({ botUserId, guildId } = arg0);
  if (useIsAppDMDefault(channel)) {
    let tmp2;
    if (null != channel) {
      tmp2 = <closure_11 profileApplication={application} botUserId={botUserId} channel={channel} />;
    }
    return tmp2;
  }
  tmp2 = <closure_10 application={application} guildId={guildId} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((application) => {
  let intl;
  const tmp = application;
  let obj = application(576);
  const cResult = obj.c(19);
  application = application.application;
  const guildId = application.guildId;
  if (cResult[0] === application.customInstallUrl) {
    if (cResult[1] === application.id) {
      if (cResult[2] === application.installParams) {
        if (cResult[3] === application.integrationTypesConfig) {
          let tmp4;
          let tmp5;
          if (cResult[4] === guildId) {
            tmp4 = cResult[5];
          }
          if (cResult[6] !== application) {
            const fn2 = function c() {
              const copy = ClipboardUtils.copy;
              ClipboardUtils;
              const obj = getApplicationInstallURL;
              copy(obj.getApplicationInstallURL(application));
              const obj2 = ToastUtils;
              obj2.presentLinkCopied();
            };
            cResult[6] = application;
            cResult[7] = fn2;
            tmp5 = fn2;
          } else {
            tmp5 = cResult[7];
          }
          const customInstallUrl = application.customInstallUrl;
          if (null != customInstallUrl) {
            let PlusSmallIcon;
            let tmp9;
            let tmp11;
            let obj2 = guildId(1371);
            if (!obj2.isDiscordUrl(customInstallUrl)) {
              PlusSmallIcon = tmp(8263).LinkExternalSmallIcon;
            }
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              let obj3 = { name: "longpress", label: intl.string(tmp(1126).t.XWDihq) };
              intl = tmp(1126).intl;
              const items = [obj3];
              cResult[8] = items;
              tmp9 = items;
            } else {
              tmp9 = cResult[8];
            }
            if (cResult[9] !== application) {
              class C {
                constructor(nativeEvent) {
                  if ("longPress" === nativeEvent.nativeEvent.actionName) {
                    const copy = ClipboardUtils.copy;
                    ClipboardUtils;
                    const obj = getApplicationInstallURL;
                    copy(obj.getApplicationInstallURL(application));
                    const obj2 = ToastUtils;
                    obj2.presentLinkCopied();
                  }
                }
              }
              cResult[9] = application;
              cResult[10] = C;
            } else {
              class C {
                constructor(nativeEvent) {
                  if ("longPress" === nativeEvent.nativeEvent.actionName) {
                    const copy = ClipboardUtils.copy;
                    ClipboardUtils;
                    const obj = getApplicationInstallURL;
                    copy(obj.getApplicationInstallURL(application));
                    const obj2 = ToastUtils;
                    obj2.presentLinkCopied();
                  }
                }
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              class C {
                constructor(nativeEvent) {
                  if ("longPress" === nativeEvent.nativeEvent.actionName) {
                    const copy = ClipboardUtils.copy;
                    ClipboardUtils;
                    const obj = getApplicationInstallURL;
                    copy(obj.getApplicationInstallURL(application));
                    const obj2 = ToastUtils;
                    obj2.presentLinkCopied();
                  }
                }
              }
              const stringResult = obj4.string(tmp(1126).t.NgXl3C);
              cResult[11] = stringResult;
              tmp11 = stringResult;
            } else {
              class C {
                constructor(nativeEvent) {
                  if ("longPress" === nativeEvent.nativeEvent.actionName) {
                    const copy = ClipboardUtils.copy;
                    ClipboardUtils;
                    const obj = getApplicationInstallURL;
                    copy(obj.getApplicationInstallURL(application));
                    const obj2 = ToastUtils;
                    obj2.presentLinkCopied();
                  }
                }
              }
            }
            if (cResult[12] !== PlusSmallIcon) {
              class C {
                constructor(nativeEvent) {
                  if ("longPress" === nativeEvent.nativeEvent.actionName) {
                    const copy = ClipboardUtils.copy;
                    ClipboardUtils;
                    const obj = getApplicationInstallURL;
                    copy(obj.getApplicationInstallURL(application));
                    const obj2 = ToastUtils;
                    obj2.presentLinkCopied();
                  }
                }
              }
              const tmp15 = <PlusSmallIcon size="sm" color={guildId(587).colors.WHITE} />;
              cResult[12] = PlusSmallIcon;
              cResult[13] = tmp15;
            } else {
              class C {
                constructor(nativeEvent) {
                  if ("longPress" === nativeEvent.nativeEvent.actionName) {
                    const copy = ClipboardUtils.copy;
                    ClipboardUtils;
                    const obj = getApplicationInstallURL;
                    copy(obj.getApplicationInstallURL(application));
                    const obj2 = ToastUtils;
                    obj2.presentLinkCopied();
                  }
                }
              }
            }
            if (cResult[14] === C) {
              class C {
                constructor(nativeEvent) {
                  if ("longPress" === nativeEvent.nativeEvent.actionName) {
                    const copy = ClipboardUtils.copy;
                    ClipboardUtils;
                    const obj = getApplicationInstallURL;
                    copy(obj.getApplicationInstallURL(application));
                    const obj2 = ToastUtils;
                    obj2.presentLinkCopied();
                  }
                }
              }
            }
            cResult[14] = C;
            cResult[15] = tmp5;
            cResult[16] = tmp4;
            cResult[17] = tmp13;
            cResult[18] = jsx(tmp(5594).Button, { text: tmp11, onPress: tmp4, onLongPress: tmp5, accessibilityActions: tmp9, onAccessibilityAction: C, icon: tmp13 });
            const tmp18 = jsx(tmp(5594).Button, { text: tmp11, onPress: tmp4, onLongPress: tmp5, accessibilityActions: tmp9, onAccessibilityAction: C, icon: tmp13 });
          }
          PlusSmallIcon = tmp(8529).PlusSmallIcon;
        }
      }
    }
  }
  const fn = function t() {
    const obj = ApplicationUtils;
    const obj2 = { applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig, guildId };
    obj.installApplication(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  };
  cResult[0] = application.customInstallUrl;
  cResult[1] = application.id;
  cResult[2] = application.installParams;
  cResult[3] = application.integrationTypesConfig;
  cResult[4] = guildId;
  cResult[5] = fn;
  tmp4 = fn;
}) : ((application) => {
  application = application.application;
  const guildId = application.guildId;
  let items = [, , , , ];
  ({ customInstallUrl: arr[0], id: arr[1], installParams: arr[2], integrationTypesConfig: arr[3] } = application);
  items[4] = guildId;
  [][0] = application;
  const callback = react.useCallback(() => {
    const obj = ApplicationUtils;
    const obj2 = { applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig, guildId };
    obj.installApplication(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items);
  const customInstallUrl = application.customInstallUrl;
  if (null != customInstallUrl) {
    let tmp6;
    let obj2 = guildId(1371);
    if (!obj2.isDiscordUrl(customInstallUrl)) {
      let PlusSmallIcon = application(8263).LinkExternalSmallIcon;
      tmp6 = application;
    }
    const items1 = [application];
    const memo = react.useMemo(() => {
      let intl;
      const obj = { name: "longpress", label: intl.string(application(dependencyMap[18]).t.XWDihq) };
      intl = application(dependencyMap[18]).intl;
      const items = [obj];
      return items;
    }, []);
    const callback1 = react.useCallback((nativeEvent) => {
      if ("longPress" === nativeEvent.nativeEvent.actionName) {
        const copy = ClipboardUtils.copy;
        ClipboardUtils;
        const obj = getApplicationInstallURL;
        copy(obj.getApplicationInstallURL(application));
        const obj2 = ToastUtils;
        obj2.presentLinkCopied();
      }
    }, items1);
    const Button = tmp6(5594).Button;
    let intl = tmp6(1126).intl;
    ({ size: "sm", color: guildId(587).colors.WHITE });
    return <Button text={intl.string(tmp6(1126).t.NgXl3C)} onPress={callback} onLongPress={tmp2} accessibilityActions={memo} onAccessibilityAction={callback1} icon={null} />;
  }
  PlusSmallIcon = application(8529).PlusSmallIcon;
  tmp6 = application;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((profileApplication) => {
  let channel;
  let tmp5;
  const tmp = profileApplication;
  let obj = profileApplication(channel[8]);
  const cResult = obj.c(8);
  profileApplication = profileApplication.profileApplication;
  const botUserId = profileApplication.botUserId;
  channel = profileApplication.channel;
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, _asyncToGenerator] = tmp4;
  if (cResult[0] === botUserId) {
    if (cResult[1] === channel) {
      let tmp6;
      let tmp8;
      if (cResult[2] === profileApplication.id) {
        tmp6 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[18]).intl;
        const stringResult = intl.string(tmp(channel[18]).t["Cia+A8"]);
        cResult[4] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === tmp5) {
        let tmp10;
        if (cResult[6] === tmp6) {
          tmp10 = cResult[7];
        }
        return tmp10;
      }
      const tmp12 = jsx(tmp(tmp2[20]).Button, { text: tmp8, loading: tmp5, onPress: tmp6 });
      cResult[5] = tmp5;
      cResult[6] = tmp6;
      cResult[7] = tmp12;
      tmp10 = tmp12;
    }
  }
  let closure_0 = _asyncToGenerator(async () => {
    let application1;
    let obj6;
    let obj9;
    let v2;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let recipientIds;
        c4 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            channel = tmp4;
            recipientIds = undefined;
            const obj4 = { type: "channel", channel };
            const tmp41 = getSection(obj4, application1.id);
            closure_0 = tmp41;
            const descriptor2 = tmp41.descriptor;
            let application;
            const tmp40 = application1;
            if (descriptor2 != null) {
              application = descriptor2.application;
            }
            if (null == application) {
              v2(true);
            }
            const descriptor = tmp41.descriptor;
            application1 = undefined;
            if (descriptor != null) {
              application1 = descriptor.application;
            }
            if (application1 == null) {
              v2 = 1;
              c4 = 1;
              const obj7 = { value: obj9.fetchApplication(tmp40.id), done: false };
              obj9 = botUserId(channel[21]);
              return obj7;
            }
          }
        } else {
          if (1 === v2) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              application1 = value;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              let obj3;
              const obj = application1(channel[23]);
              const bestActiveInput = obj.getBestActiveInput();
              if (bestActiveInput != null) {
                const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
                const obj2 = { type: application1(channel[24]).KeyboardTypes.APP_LAUNCHER, context: obj3 };
                obj3 = { initialRouteName: constants.APPLICATION_VIEW, initiallyExpanded: true, application, installOnDemand: !closure_1_0.isGuildInstalled && !closure_1_0.isUserInstalled };
                openCustomKeyboard(obj2);
              }
            }, 0);
            let obj = botUserId(channel[25]);
            const obj11 = { application_id: recipientIds.id };
            obj.track(constants.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, obj11);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
        recipientIds = application1;
        v2(false);
        if (null != closure_0) {
          const obj5 = botUserId(channel[11]);
          obj5.hideAllActionSheets();
          const obj12 = { recipientIds };
          v2 = 2;
          c4 = 1;
          const obj13 = { value: obj6.openPrivateChannel(obj12), done: false };
          obj6 = botUserId(channel[22]);
          return obj13;
        }
      } catch (tmp34) {
        c4 = 3;
        throw tmp34;
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[0] = botUserId;
  cResult[1] = channel;
  cResult[2] = profileApplication.id;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((profileApplication) => {
  let closure_3;
  let first;
  profileApplication = profileApplication.profileApplication;
  const botUserId = profileApplication.botUserId;
  let channel = profileApplication.channel;
  _asyncToGenerator = undefined;
  [first, _asyncToGenerator] = react.useState(false);
  const items = [botUserId, channel, profileApplication.id];
  const callback = react.useCallback(_asyncToGenerator(async () => {
    let c2;
    let closure_1;
    let constants2;
    let obj6;
    let obj9;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        let closure_0;
        let application1;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            channel = 0;
            tmp = undefined;
            const obj4 = { type: "channel", channel };
            const tmp41 = getSection(obj4, profileApplication.id);
            closure_0 = tmp41;
            const descriptor2 = tmp41.descriptor;
            let application;
            if (descriptor2 != null) {
              application = descriptor2.application;
            }
            if (null == application) {
              v2(true);
            }
            const descriptor = tmp41.descriptor;
            application1 = undefined;
            if (descriptor != null) {
              application1 = descriptor.application;
            }
            if (application1 == null) {
              c3 = 1;
              c4 = 1;
              const obj7 = { value: obj9.fetchApplication(profileApplication.id), done: false };
              obj9 = tmp(channel[21]);
              return obj7;
            }
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              application1 = value;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              let obj3;
              const obj = application1(c2[23]);
              const bestActiveInput = obj.getBestActiveInput();
              if (bestActiveInput != null) {
                const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
                const obj2 = { type: application1(c2[24]).KeyboardTypes.APP_LAUNCHER, context: obj3 };
                obj3 = { initialRouteName: constants2.APPLICATION_VIEW, initiallyExpanded: true, application, installOnDemand: !closure_1_0.isGuildInstalled && !closure_1_0.isUserInstalled };
                openCustomKeyboard(obj2);
              }
            }, 0);
            let obj = tmp(channel[25]);
            const obj11 = { application_id: tmp.id };
            obj.track(constants.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, obj11);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
        tmp = application1;
        closure_130_3(false);
        if (null != closure_0) {
          const obj5 = tmp(channel[11]);
          obj5.hideAllActionSheets();
          const obj12 = { recipientIds: closure_130_1 };
          c3 = 2;
          c4 = 1;
          const obj13 = { value: obj6.openPrivateChannel(obj12), done: false };
          obj6 = tmp(channel[22]);
          return obj13;
        }
      } catch (tmp34) {
        c4 = 3;
        throw tmp34;
      }
    }
  }), items);
  const Button = profileApplication(channel[20]).Button;
  const intl = profileApplication(channel[18]).intl;
  return <Button text={intl.string(profileApplication(channel[18]).t["Cia+A8"])} loading={first} onPress={callback} />;
});
const result = size.fileFinishedImporting("modules/user_profile/native/AddOrOpenAppButton.tsx");

export default tmp2;