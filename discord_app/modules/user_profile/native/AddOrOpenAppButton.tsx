// discord_app/modules/user_profile/native/AddOrOpenAppButton.tsx
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import _slicedToArray from "_slicedToArray";
import fetchApplication from "fetchApplication";
import { getSection } from "getIndexKey";
import { AnalyticEvents } from "ME";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { jsx } from "getBestActiveInput";
import { useIsAppDM } from "../../app_dms/useIsAppDM.tsx";

const require = arg1;
function AddAppButton(application) {
  application = application.application;
  const guildId = application.guildId;
  let obj = React;
  let items = [, , , , ];
  ({ customInstallUrl: arr[0], id: arr[1], installParams: arr[2], integrationTypesConfig: arr[3] } = application);
  items[4] = guildId;
  [][0] = application;
  const callback = React.useCallback(() => {
    let obj = application(outer1_2[8]);
    obj = { applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig, guildId };
    obj.installApplication(obj);
    guildId(outer1_2[9]).hideActionSheet();
  }, items);
  const customInstallUrl = application.customInstallUrl;
  if (null != customInstallUrl) {
    if (!obj2.isDiscordUrl(customInstallUrl)) {
      let PlusSmallIcon = application(6693).LinkExternalSmallIcon;
      let tmp6 = application;
    }
    const items1 = [application];
    const memo = obj.useMemo(() => {
      const obj = { name: "longpress", label: null };
      const intl = application(1236).intl;
      obj[1] = intl.string(application(1236).t.XWDihq);
      const items = [obj];
      return items;
    }, []);
    const callback1 = obj.useCallback((nativeEvent) => {
      if ("longPress" === nativeEvent.nativeEvent.actionName) {
        const obj = application(outer1_2[10]);
        obj.copy(application(outer1_2[11]).getApplicationInstallURL(application));
        const obj2 = application(outer1_2[11]);
        application(outer1_2[12]).presentLinkCopied();
        const obj3 = application(outer1_2[12]);
      }
    }, items1);
    obj = { text: null, onPress: null, onLongPress: null, accessibilityActions: null, onAccessibilityAction: null, icon: null };
    let intl = tmp6(1236).intl;
    obj[0] = intl.string(tmp6(1236).t.NgXl3C);
    obj[1] = callback;
    obj[2] = tmp2;
    obj[3] = memo;
    obj[4] = callback1;
    obj = { size: "sm", color: null };
    obj[1] = guildId(712).colors.WHITE;
    obj[5] = <PlusSmallIcon size="sm" color={null} />;
    return jsx(tmp6(4745).Button, { size: "sm", color: null });
  }
  PlusSmallIcon = application(9262).PlusSmallIcon;
  tmp6 = application;
}
function OpenAppButton(profileApplication) {
  profileApplication = profileApplication.profileApplication;
  const botUserId = profileApplication.botUserId;
  const channel = profileApplication.channel;
  let callback;
  const tmp = callback2(React.useState(false), 2);
  callback = tmp[1];
  const items = [botUserId, channel, profileApplication.id];
  callback = React.useCallback(callback(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let c2 = 0;
            let id = tmp2;
            let closure_0;
            id = undefined;
            const obj1 = { type: "channel", channel: null };
            obj1[1] = outer1_2;
            const tmp44 = outer1_6(obj1, outer1_0.id);
            closure_0 = tmp44;
            const descriptor2 = tmp44.descriptor;
            let application;
            if (descriptor2 != null) {
              application = descriptor2.application;
            }
            if (null == application) {
              v0(true);
            }
            const descriptor = tmp44.descriptor;
            let application1;
            if (descriptor != null) {
              application1 = descriptor.application;
            }
            closure_0 = application1;
            if (application1 == null) {
              v0 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = outer1_1(outer1_2[19]).fetchApplication(tmp43.id);
              return obj2;
            } else {
              id = closure_0;
              v0(false);
              if (null != closure_0) {
                let obj4 = outer1_1(outer1_2[9]);
                obj4.hideActionSheet();
                let obj5 = outer1_1(outer1_2[20]);
                const obj3 = { recipientIds: null };
                obj3[0] = id;
                v0 = 2;
                c4 = 1;
                obj4 = { value: null, done: false };
                obj4[0] = obj5.openPrivateChannel(obj3);
                return obj4;
              } else {
                c4 = 3;
              }
            }
            tmp43 = outer1_0;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            closure_0 = arg1;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            let obj = lib(table[21]);
            const bestActiveInput = obj.getBestActiveInput();
            if (bestActiveInput != null) {
              obj = { type: null, context: null };
              obj[0] = lib(table[22]).KeyboardTypes.APP_LAUNCHER;
              obj = { initialRouteName: null, initiallyExpanded: true, application: null, installOnDemand: null };
              obj[0] = outer1_8.APPLICATION_VIEW;
              obj[2] = closure_1;
              const isGuildInstalled = lib.isGuildInstalled;
              let tmp5 = !isGuildInstalled;
              if (!isGuildInstalled) {
                tmp5 = !lib.isUserInstalled;
              }
              obj[3] = tmp5;
              obj[1] = obj;
              bestActiveInput.openCustomKeyboard(obj);
            }
          }, 0);
          obj = outer1_1(outer1_2[23]);
          const obj6 = { application_id: null };
          obj6[0] = id.id;
          obj.track(outer1_7.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, obj6);
        }
        c4 = 3;
        const obj7 = { value: null, done: true };
        obj7[0] = arg1;
        return obj7;
      } catch (tmp35) {
        c4 = tmp;
        throw tmp35;
      }
    }
  }), items);
  let obj = { text: null, loading: null, onPress: null };
  const intl = profileApplication(channel[16]).intl;
  obj[0] = intl.string(profileApplication(channel[16]).t["Cia+A8"]);
  obj[1] = tmp[0];
  obj[2] = callback;
  return jsx(profileApplication(channel[17]).Button, { text: null, loading: null, onPress: null });
}
const result = require("noop").fileFinishedImporting("modules/user_profile/native/AddOrOpenAppButton.tsx");

export default function AddOrOpenAppButton(arg0) {
  let application;
  let botUserId;
  let channel;
  let guildId;
  ({ application, channel } = arg0);
  ({ botUserId, guildId } = arg0);
  if (useIsAppDM(channel)) {
    if (null != channel) {
      const obj = { profileApplication: null, botUserId: null, channel: null };
      obj[0] = application;
      obj[1] = botUserId;
      obj[2] = channel;
      let tmp2 = <OpenAppButton profileApplication={null} botUserId={null} channel={null} />;
    }
    return tmp2;
  }
  tmp2 = <AddAppButton application={application} guildId={guildId} />;
};