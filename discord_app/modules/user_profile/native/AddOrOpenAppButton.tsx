// === Module 13111: AddOrOpenAppButton ===

// Module 13111 (AddOrOpenAppButton)
import c from "c" /* 576 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import ApplicationUtils from "ApplicationUtils" /* 10862 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 11818 */;
import useIsAppDMDefault from "useIsAppDM" /* 11831 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const getSection = fn(9247).getSection;
const AnalyticEvents = fn(1085).AnalyticEvents;
const AppLauncherRouteName = fn(1502).AppLauncherRouteName;
const jsx = fn(21).jsx;
fn(558);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function AddAppButton(application) {
  const cResult = application(576).c(19);
  application = application.application;
  const guildId = application.guildId;
  if (cResult[0] === application.customInstallUrl) {
    if (cResult[1] === application.id) {
      if (cResult[2] === application.installParams) {
        if (cResult[3] === application.integrationTypesConfig) {
          if (cResult[4] === guildId) {
            let tmp4 = cResult[5];
          }
          if (cResult[6] !== application) {
            const fn2 = function c() {
              const obj = ClipboardUtils;
              obj.copy(getApplicationInstallURL.getApplicationInstallURL(application));
              ToastUtils.presentLinkCopied();
            };
            cResult[6] = application;
            cResult[7] = fn2;
            let tmp5 = fn2;
          } else {
            tmp5 = cResult[7];
          }
          const customInstallUrl = application.customInstallUrl;
          if (null != customInstallUrl) {
            if (!obj2.isDiscordUrl(customInstallUrl)) {
              let PlusSmallIcon = tmp(7705).LinkExternalSmallIcon;
            }
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              let obj3 = { name: "longpress", label: null };
              const intl = tmp(1126).intl;
              obj3.label = intl.string(tmp(1126).t.XWDihq);
              const items = [obj3];
              cResult[8] = items;
              let tmp9 = items;
            } else {
              tmp9 = cResult[8];
            }
            if (cResult[9] !== application) {
              class C {
                constructor(arg0) {
                  if ("longPress" === application.nativeEvent.actionName) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[12]);
                    obj2 = closure_0(closure_2[13]);
                    tmp3 = application;
                    copyResult = obj.copy(obj2.getApplicationInstallURL(application));
                    obj3 = closure_0(closure_2[14]);
                    presentLinkCopiedResult = obj3.presentLinkCopied();
                  }
                  return;
                }
              }
              cResult[9] = application;
              cResult[10] = C;
            } else {
              class C {
                constructor(arg0) {
                  if ("longPress" === application.nativeEvent.actionName) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[12]);
                    obj2 = closure_0(closure_2[13]);
                    tmp3 = application;
                    copyResult = obj.copy(obj2.getApplicationInstallURL(application));
                    obj3 = closure_0(closure_2[14]);
                    presentLinkCopiedResult = obj3.presentLinkCopied();
                  }
                  return;
                }
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              class C {
                constructor(arg0) {
                  if ("longPress" === application.nativeEvent.actionName) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[12]);
                    obj2 = closure_0(closure_2[13]);
                    tmp3 = application;
                    copyResult = obj.copy(obj2.getApplicationInstallURL(application));
                    obj3 = closure_0(closure_2[14]);
                    presentLinkCopiedResult = obj3.presentLinkCopied();
                  }
                  return;
                }
              }
              const stringResult = obj4.string(tmp(1126).t.NgXl3C);
              cResult[11] = stringResult;
              const tmp11 = stringResult;
            } else {
              class C {
                constructor(arg0) {
                  if ("longPress" === application.nativeEvent.actionName) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[12]);
                    obj2 = closure_0(closure_2[13]);
                    tmp3 = application;
                    copyResult = obj.copy(obj2.getApplicationInstallURL(application));
                    obj3 = closure_0(closure_2[14]);
                    presentLinkCopiedResult = obj3.presentLinkCopied();
                  }
                  return;
                }
              }
            }
            if (cResult[12] !== PlusSmallIcon) {
              class C {
                constructor(arg0) {
                  if ("longPress" === application.nativeEvent.actionName) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[12]);
                    obj2 = closure_0(closure_2[13]);
                    tmp3 = application;
                    copyResult = obj.copy(obj2.getApplicationInstallURL(application));
                    obj3 = closure_0(closure_2[14]);
                    presentLinkCopiedResult = obj3.presentLinkCopied();
                  }
                  return;
                }
              }
              const obj5 = { size: "sm", color: guildId(587).colors.WHITE };
              const tmp15 = <PlusSmallIcon size="sm" color={guildId(587).colors.WHITE} />;
              cResult[12] = PlusSmallIcon;
              cResult[13] = tmp15;
            } else {
              class C {
                constructor(arg0) {
                  if ("longPress" === application.nativeEvent.actionName) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[12]);
                    obj2 = closure_0(closure_2[13]);
                    tmp3 = application;
                    copyResult = obj.copy(obj2.getApplicationInstallURL(application));
                    obj3 = closure_0(closure_2[14]);
                    presentLinkCopiedResult = obj3.presentLinkCopied();
                  }
                  return;
                }
              }
            }
            if (cResult[14] === C) {
              class C {
                constructor(arg0) {
                  if ("longPress" === application.nativeEvent.actionName) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[12]);
                    obj2 = closure_0(closure_2[13]);
                    tmp3 = application;
                    copyResult = obj.copy(obj2.getApplicationInstallURL(application));
                    obj3 = closure_0(closure_2[14]);
                    presentLinkCopiedResult = obj3.presentLinkCopied();
                  }
                  return;
                }
              }
            }
            const obj6 = { text: tmp11, onPress: tmp4, onLongPress: tmp5, accessibilityActions: tmp9, onAccessibilityAction: C, icon: tmp13 };
            const tmp18 = jsx(tmp(5379).Button, { text: tmp11, onPress: tmp4, onLongPress: tmp5, accessibilityActions: tmp9, onAccessibilityAction: C, icon: tmp13 });
            cResult[14] = C;
            cResult[15] = tmp5;
            cResult[16] = tmp4;
            cResult[17] = tmp13;
            cResult[18] = tmp18;
            obj2 = guildId(1384);
          }
          PlusSmallIcon = tmp(9081).PlusSmallIcon;
        }
      }
    }
  }
  const fn = function t() {
    ApplicationUtils.installApplication({ applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig, guildId });
    const obj2 = { applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig, guildId };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  cResult[0] = application.customInstallUrl;
  cResult[1] = application.id;
  cResult[2] = application.installParams;
  cResult[3] = application.integrationTypesConfig;
  cResult[4] = guildId;
  cResult[5] = fn;
  tmp4 = fn;
  let obj = application(576);
}) : (function AddAppButton(application) {
  application = application.application;
  const guildId = application.guildId;
  let items = [, , , , ];
  ({ customInstallUrl: arr[0], id: arr[1], installParams: arr[2], integrationTypesConfig: arr[3] } = application);
  items[4] = guildId;
  [][0] = application;
  const callback = noop.useCallback(() => {
    ApplicationUtils.installApplication({ applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig, guildId });
    const obj2 = { applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig, guildId };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const customInstallUrl = application.customInstallUrl;
  if (null != customInstallUrl) {
    if (!obj2.isDiscordUrl(customInstallUrl)) {
      let PlusSmallIcon = application(7705).LinkExternalSmallIcon;
      let tmp6 = application;
    }
    const items1 = [application];
    const memo = noop.useMemo(() => {
      const obj = { name: "longpress", label: null };
      const intl = application(1126).intl;
      obj.label = intl.string(application(1126).t.XWDihq);
      const items = [obj];
      return items;
    }, []);
    const callback1 = noop.useCallback((nativeEvent) => {
      if ("longPress" === nativeEvent.nativeEvent.actionName) {
        const obj = ClipboardUtils;
        obj.copy(getApplicationInstallURL.getApplicationInstallURL(application));
        ToastUtils.presentLinkCopied();
      }
    }, items1);
    let obj3 = { text: null, onPress: null, onLongPress: null, accessibilityActions: null, onAccessibilityAction: null, icon: null };
    let intl = tmp6(1126).intl;
    obj3.text = intl.string(tmp6(1126).t.NgXl3C);
    obj3.onPress = callback;
    obj3.onLongPress = tmp2;
    obj3.accessibilityActions = memo;
    obj3.onAccessibilityAction = callback1;
    const obj4 = { size: "sm", color: guildId(587).colors.WHITE };
    obj3.icon = <PlusSmallIcon size="sm" color={guildId(587).colors.WHITE} />;
    return jsx(tmp6(5379).Button, { text: null, onPress: null, onLongPress: null, accessibilityActions: null, onAccessibilityAction: null, icon: null });
  }
  PlusSmallIcon = application(9081).PlusSmallIcon;
  tmp6 = application;
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function OpenAppButton(profileApplication) {
  const cResult = require("c").c(8);
  profileApplication = profileApplication.profileApplication;
  _require = profileApplication;
  const botUserId = profileApplication.botUserId;
  channel = profileApplication.channel;
  let obj = require("c");
  [tmp5, asyncGeneratorStep] = noop.useState(false);
  if (cResult[0] === botUserId) {
    if (cResult[1] === channel) {
      if (cResult[2] === profileApplication.id) {
        let tmp6 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[18]).intl;
        const stringResult = intl.string(tmp(tmp2[18]).t["Cia+A8"]);
        cResult[4] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] === tmp5) {
        if (cResult[6] === tmp6) {
          let tmp10 = cResult[7];
        }
        return tmp10;
      }
      let obj2 = { text: tmp8, loading: tmp5, onPress: tmp6 };
      const tmp12 = jsx(tmp(tmp2[20]).Button, { text: tmp8, loading: tmp5, onPress: tmp6 });
      cResult[5] = tmp5;
      cResult[6] = tmp6;
      cResult[7] = tmp12;
      tmp10 = tmp12;
    }
  }
  _require = asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
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
            channel = tmp5;
            const recipientIds = tmp2;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            const obj4 = { type: "channel", channel };
            const tmp43 = getSection(obj4, id.id);
            closure_129_0 = tmp43;
            const descriptor2 = tmp43.descriptor;
            let application;
            if (descriptor2 != null) {
              application = descriptor2.application;
            }
            if (null == application) {
              v2(true);
            }
            const descriptor = tmp43.descriptor;
            let application1;
            if (descriptor != null) {
              application1 = descriptor.application;
            }
            id = application1;
            if (application1 == null) {
              v2 = 1;
              c4 = 1;
              const obj7 = { value: botUserId(channel[21]).fetchApplication(tmp42.id), done: false };
              return obj7;
            } else {
              closure_129_1 = id;
              v2(false);
              if (null != closure_129_0) {
                botUserId(channel[11]).hideAllActionSheets();
                const obj5 = botUserId(channel[11]);
                const obj8 = { recipientIds };
                v2 = 2;
                c4 = 1;
                const obj10 = { value: botUserId(channel[22]).openPrivateChannel(obj8), done: false };
                return obj10;
              } else {
                c4 = 3;
              }
            }
            tmp42 = id;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            id = value;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const bestActiveInput = closure_0(dependencyMap[23]).getBestActiveInput();
            if (bestActiveInput != null) {
              const obj2 = { type: closure_0(dependencyMap[24]).KeyboardTypes.APP_LAUNCHER, context: null };
              const obj3 = { initialRouteName: constants.APPLICATION_VIEW, initiallyExpanded: true, application, installOnDemand: null };
              const isGuildInstalled = id.isGuildInstalled;
              let tmp5 = !isGuildInstalled;
              if (!isGuildInstalled) {
                tmp5 = !id.isUserInstalled;
              }
              obj3.installOnDemand = tmp5;
              obj2.context = obj3;
              bestActiveInput.openCustomKeyboard(obj2);
            }
            const obj = closure_0(dependencyMap[23]);
          }, 0);
          const obj12 = { application_id: closure_129_1.id };
          botUserId(channel[25]).track(constants.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, obj12);
          let obj = botUserId(channel[25]);
        }
        c4 = 3;
        const obj13 = { value, done: true };
        return obj13;
      } catch (tmp35) {
        c4 = tmp;
        throw tmp35;
      }
    }
  });
  function t1() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = botUserId;
  cResult[1] = channel;
  cResult[2] = profileApplication.id;
  cResult[3] = t1;
  tmp6 = t1;
  const tmp4 = _slicedToArray(noop.useState(false), 2);
}) : (function OpenAppButton(profileApplication) {
  profileApplication = profileApplication.profileApplication;
  const botUserId = profileApplication.botUserId;
  const channel = profileApplication.channel;
  asyncGeneratorStep = undefined;
  [obj.loading, asyncGeneratorStep] = noop.useState(false);
  const items = [botUserId, channel, profileApplication.id];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
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
            dependencyMap = 0;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            const obj4 = { type: "channel", channel };
            const tmp43 = getSection(obj4, profileApplication.id);
            closure_129_0 = tmp43;
            const descriptor2 = tmp43.descriptor;
            let application;
            if (descriptor2 != null) {
              application = descriptor2.application;
            }
            if (null == application) {
              v2(true);
            }
            const descriptor = tmp43.descriptor;
            let application1;
            if (descriptor != null) {
              application1 = descriptor.application;
            }
            closure_0 = application1;
            if (application1 == null) {
              c3 = 1;
              c4 = 1;
              const obj7 = { value: tmp2(6852).fetchApplication(profileApplication.id), done: false };
              return obj7;
            } else {
              closure_129_1 = closure_0;
              closure_130_3(false);
              if (null != closure_129_0) {
                tmp2(5056).hideAllActionSheets();
                const obj5 = tmp2(5056);
                const obj8 = { recipientIds: closure_130_1 };
                c3 = 2;
                c4 = 1;
                const obj10 = { value: tmp2(7014).openPrivateChannel(obj8), done: false };
                return obj10;
              } else {
                c4 = 3;
              }
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_0 = value;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const bestActiveInput = closure_0(dependencyMap[23]).getBestActiveInput();
            if (bestActiveInput != null) {
              const obj2 = { type: closure_0(dependencyMap[24]).KeyboardTypes.APP_LAUNCHER, context: null };
              const obj3 = { initialRouteName: constants2.APPLICATION_VIEW, initiallyExpanded: true, application, installOnDemand: null };
              const isGuildInstalled = closure_1_0.isGuildInstalled;
              let tmp5 = !isGuildInstalled;
              if (!isGuildInstalled) {
                tmp5 = !closure_1_0.isUserInstalled;
              }
              obj3.installOnDemand = tmp5;
              obj2.context = obj3;
              bestActiveInput.openCustomKeyboard(obj2);
            }
            const obj = closure_0(dependencyMap[23]);
          }, 0);
          const obj12 = { application_id: closure_129_1.id };
          tmp2(1265).track(constants.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, obj12);
          let obj = tmp2(1265);
        }
        c4 = 3;
        const obj13 = { value, done: true };
        return obj13;
      } catch (tmp35) {
        c4 = tmp;
        throw tmp35;
      }
    }
  }), items);
  let obj = { text: null, loading: null, onPress: null };
  const intl = profileApplication(channel[18]).intl;
  obj.text = intl.string(profileApplication(channel[18]).t["Cia+A8"]);
  obj.onPress = callback;
  return jsx(profileApplication(channel[20]).Button, { text: null, loading: null, onPress: null });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/AddOrOpenAppButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AddOrOpenAppButton(arg0) {
  const cResult = c.c(6);
  ({ application, botUserId, channel, guildId } = arg0);
  const tmp2 = useIsAppDMDefault(channel);
  if (cResult[0] === application) {
    if (cResult[1] === botUserId) {
      if (cResult[2] === channel) {
        if (cResult[3] === guildId) {
          if (cResult[4] === tmp2) {
            return cResult[5];
          }
        }
      }
    }
  }
  if (!tmp2) {
    const obj2 = { application, guildId };
    let tmp6 = <closure_10 application={application} guildId={guildId} />;
    cResult[0] = application;
    cResult[1] = botUserId;
    cResult[2] = channel;
    cResult[3] = guildId;
    cResult[4] = tmp2;
    cResult[5] = tmp6;
  }
  tmp6 = <closure_11 profileApplication={application} botUserId={botUserId} channel={channel} />;
}) : (function AddOrOpenAppButton(arg0) {
  ({ application, channel } = arg0);
  ({ botUserId, guildId } = arg0);
  if (useIsAppDMDefault(channel)) {
    if (null != channel) {
      const obj = { profileApplication: application, botUserId, channel };
      let tmp2 = <closure_11 profileApplication={application} botUserId={botUserId} channel={channel} />;
    }
    return tmp2;
  }
  tmp2 = <closure_10 application={application} guildId={guildId} />;
});