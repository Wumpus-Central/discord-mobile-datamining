// === Module 12997: AddOrOpenAppButton ===

// Module 12997 (AddOrOpenAppButton)
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import ApplicationUtils from "ApplicationUtils" /* 9573 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 12132 */;
import useIsAppDMDefault from "useIsAppDM" /* 12145 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function AddAppButton(application) {
  application = application.application;
  const guildId = application.guildId;
  let obj = noop;
  let items = [, , , , ];
  ({ customInstallUrl: arr[0], id: arr[1], installParams: arr[2], integrationTypesConfig: arr[3] } = application);
  items[4] = guildId;
  [][0] = application;
  const callback = noop.useCallback(() => {
    const obj = { applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig, guildId };
    obj.installApplication(obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const customInstallUrl = application.customInstallUrl;
  if (null != customInstallUrl) {
    if (!obj2.isDiscordUrl(customInstallUrl)) {
      let PlusSmallIcon = application(8580).LinkExternalSmallIcon;
      let tmp6 = application;
    }
    const items1 = [application];
    const memo = obj.useMemo(() => {
      const obj = { name: "longpress", label: null };
      const intl = application(1114).intl;
      obj.label = intl.string(application(1114).t.XWDihq);
      const items = [obj];
      return items;
    }, []);
    const callback1 = obj.useCallback((nativeEvent) => {
      if ("longPress" === nativeEvent.nativeEvent.actionName) {
        const obj = ClipboardUtils;
        obj.copy(getApplicationInstallURL.getApplicationInstallURL(application));
        ToastUtils.presentLinkCopied();
      }
    }, items1);
    obj = { text: null, onPress: null, onLongPress: null, accessibilityActions: null, onAccessibilityAction: null, icon: null };
    let intl = tmp6(1114).intl;
    obj.text = intl.string(tmp6(1114).t.NgXl3C);
    obj.onPress = callback;
    obj.onLongPress = tmp2;
    obj.accessibilityActions = memo;
    obj.onAccessibilityAction = callback1;
    obj = { size: "sm", color: guildId(576).colors.WHITE };
    obj.icon = <PlusSmallIcon size="sm" color={guildId(576).colors.WHITE} />;
    return jsx(tmp6(4975).Button, { size: "sm", color: guildId(576).colors.WHITE });
  }
  PlusSmallIcon = application(8867).PlusSmallIcon;
  tmp6 = application;
}
function OpenAppButton(profileApplication) {
  profileApplication = profileApplication.profileApplication;
  const botUserId = profileApplication.botUserId;
  const channel = profileApplication.channel;
  const tmp = _slicedToArray(noop.useState(false), 2);
  asyncGeneratorStep = tmp[1];
  const items = [botUserId, channel, profileApplication.id];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            dependencyMap = 0;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            const obj1 = { type: "channel", channel };
            const tmp43 = getSection(obj1, profileApplication.id);
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
              const obj2 = { value: tmp2(7163).fetchApplication(profileApplication.id), done: false };
              return obj2;
            } else {
              closure_129_1 = closure_0;
              closure_130_3(false);
              if (null != closure_129_0) {
                let obj4 = tmp2(4527);
                obj4.hideAllActionSheets();
                let obj5 = tmp2(4573);
                const obj3 = { recipientIds: closure_130_1 };
                c3 = 2;
                c4 = 1;
                obj4 = { value: obj5.openPrivateChannel(obj3), done: false };
                return obj4;
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
            obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = value;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            let obj = closure_0(dependencyMap[21]);
            const bestActiveInput = obj.getBestActiveInput();
            if (bestActiveInput != null) {
              obj = { type: closure_0(dependencyMap[22]).KeyboardTypes.APP_LAUNCHER, context: null };
              obj = { initialRouteName: constants2.APPLICATION_VIEW, initiallyExpanded: true, application, installOnDemand: null };
              const isGuildInstalled = closure_1_0.isGuildInstalled;
              let tmp5 = !isGuildInstalled;
              if (!isGuildInstalled) {
                tmp5 = !closure_1_0.isUserInstalled;
              }
              obj.installOnDemand = tmp5;
              obj.context = obj;
              bestActiveInput.openCustomKeyboard(obj);
            }
          }, 0);
          obj = tmp2(1242);
          const obj6 = { application_id: closure_129_1.id };
          obj.track(constants.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, obj6);
        }
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } catch (tmp35) {
        c4 = tmp;
        throw tmp35;
      }
    }
  }), items);
  let obj = { text: null, loading: null, onPress: null };
  const intl = profileApplication(channel[16]).intl;
  obj.text = intl.string(profileApplication(channel[16]).t["Cia+A8"]);
  obj.loading = tmp[0];
  obj.onPress = callback;
  return jsx(profileApplication(channel[17]).Button, { text: null, loading: null, onPress: null });
}
const getSection = fn(9290).getSection;
const AnalyticEvents = fn(1074).AnalyticEvents;
const AppLauncherRouteName = fn(1482).AppLauncherRouteName;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/AddOrOpenAppButton.tsx");

export default function AddOrOpenAppButton(arg0) {
  ({ application, channel } = arg0);
  ({ botUserId, guildId } = arg0);
  if (useIsAppDMDefault(channel)) {
    if (null != channel) {
      const obj = { profileApplication: application, botUserId, channel };
      let tmp2 = <OpenAppButton profileApplication={application} botUserId={botUserId} channel={channel} />;
    }
    return tmp2;
  }
  tmp2 = <AddAppButton application={application} guildId={guildId} />;
};