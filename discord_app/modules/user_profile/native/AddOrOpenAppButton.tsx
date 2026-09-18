// discord_app/modules/user_profile/native/AddOrOpenAppButton.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import ApplicationUtils from "../../../utils/native/ApplicationUtils.tsx";
import getApplicationInstallURL from "../../applications/getApplicationInstallURL.tsx";
import useIsAppDMDefault from "../../app_dms/useIsAppDM.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function AddAppButton(application) {
  application = application.application;
  const guildId = application.guildId;
  let items = [, , , ,];
  ({ customInstallUrl: arr[0], id: arr[1], installParams: arr[2], integrationTypesConfig: arr[3] } = application);
  items[4] = guildId;
  [][0] = application;
  const callback = noop.useCallback(() => {
    ApplicationUtils.installApplication({
      applicationId: application.id,
      customInstallUrl: application.customInstallUrl,
      installParams: application.installParams,
      integrationTypesConfig: application.integrationTypesConfig,
      guildId,
    });
    const obj2 = {
      applicationId: application.id,
      customInstallUrl: application.customInstallUrl,
      installParams: application.installParams,
      integrationTypesConfig: application.integrationTypesConfig,
      guildId,
    };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const customInstallUrl = application.customInstallUrl;
  if (null != customInstallUrl) {
    if (!obj2.isDiscordUrl(customInstallUrl)) {
      let PlusSmallIcon = application(8816).LinkExternalSmallIcon;
      let tmp6 = application;
    }
    const items1 = [application];
    const memo = noop.useMemo(() => {
      const obj = { name: "longpress", label: null };
      const intl = application(1115).intl;
      obj.label = intl.string(application(1115).t.XWDihq);
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
    let obj3 = {
      text: null,
      onPress: null,
      onLongPress: null,
      accessibilityActions: null,
      onAccessibilityAction: null,
      icon: null,
    };
    let intl = tmp6(1115).intl;
    obj3.text = intl.string(tmp6(1115).t.NgXl3C);
    obj3.onPress = callback;
    obj3.onLongPress = tmp2;
    obj3.accessibilityActions = memo;
    obj3.onAccessibilityAction = callback1;
    const obj4 = { size: "sm", color: guildId(576).colors.WHITE };
    obj3.icon = <PlusSmallIcon size="sm" color={guildId(576).colors.WHITE} />;
    return jsx(tmp6(5144).Button, {
      text: null,
      onPress: null,
      onLongPress: null,
      accessibilityActions: null,
      onAccessibilityAction: null,
      icon: null,
    });
  }
  PlusSmallIcon = application(9106).PlusSmallIcon;
  tmp6 = application;
}
function OpenAppButton(profileApplication) {
  profileApplication = profileApplication.profileApplication;
  const botUserId = profileApplication.botUserId;
  const channel = profileApplication.channel;
  asyncGeneratorStep = undefined;
  [obj.loading, asyncGeneratorStep] = noop.useState(false);
  const items = [botUserId, channel, profileApplication.id];
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
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
                const obj7 = { value: tmp2(7359).fetchApplication(profileApplication.id), done: false };
                return obj7;
              } else {
                closure_129_1 = closure_0;
                closure_130_3(false);
                if (null != closure_129_0) {
                  tmp2(4689).hideAllActionSheets();
                  const obj5 = tmp2(4689);
                  const obj8 = { recipientIds: closure_130_1 };
                  c3 = 2;
                  c4 = 1;
                  const obj10 = { value: tmp2(4735).openPrivateChannel(obj8), done: false };
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
              const bestActiveInput = closure_0(dependencyMap[21]).getBestActiveInput();
              if (bestActiveInput != null) {
                const obj2 = { type: closure_0(dependencyMap[22]).KeyboardTypes.APP_LAUNCHER, context: null };
                const obj3 = {
                  initialRouteName: constants2.APPLICATION_VIEW,
                  initiallyExpanded: true,
                  application,
                  installOnDemand: null,
                };
                const isGuildInstalled = closure_1_0.isGuildInstalled;
                let tmp5 = !isGuildInstalled;
                if (!isGuildInstalled) {
                  tmp5 = !closure_1_0.isUserInstalled;
                }
                obj3.installOnDemand = tmp5;
                obj2.context = obj3;
                bestActiveInput.openCustomKeyboard(obj2);
              }
              const obj = closure_0(dependencyMap[21]);
            }, 0);
            const obj12 = { application_id: closure_129_1.id };
            tmp2(1241).track(constants.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, obj12);
            let obj = tmp2(1241);
          }
          c4 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } catch (tmp35) {
          c4 = tmp;
          throw tmp35;
        }
      }
    }),
    items,
  );
  let obj = { text: null, loading: null, onPress: null };
  const intl = profileApplication(channel[16]).intl;
  obj.text = intl.string(profileApplication(channel[16]).t["Cia+A8"]);
  obj.onPress = callback;
  return jsx(profileApplication(channel[17]).Button, { text: null, loading: null, onPress: null });
}
const getSection = fn(9528).getSection;
const AnalyticEvents = fn(1074).AnalyticEvents;
const AppLauncherRouteName = fn(1483).AppLauncherRouteName;
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
}
