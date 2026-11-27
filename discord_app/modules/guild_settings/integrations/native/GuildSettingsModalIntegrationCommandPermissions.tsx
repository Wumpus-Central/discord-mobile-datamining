// discord_app/modules/guild_settings/integrations/native/GuildSettingsModalIntegrationCommandPermissions.tsx
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import IntegrationPermissionActionCreatorsAll from "../permission/IntegrationPermissionActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import IntegrationPermissionStore from "../permission/IntegrationPermissionStore.tsx";

require = fn;
const GuildSettingsSections = fn(1071).GuildSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/native/GuildSettingsModalIntegrationCommandPermissions.tsx",
);

export default function GuildSettingsModalIntegrationCommandPermissions(guildId) {
  guildId = guildId.guildId;
  let hasChanges;
  first = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let callback;
  ({ application, hasCommandsScope } = guildId);
  const navigation = guildId(hasChanges[6]).useNavigation();
  const id = application.id;
  let obj = guildId(hasChanges[6]);
  items = [callback];
  const stateFromStores = guildId(hasChanges[7]).useStateFromStores(items, () => callback.isUnavailable());
  let obj2 = guildId(hasChanges[7]);
  const items1 = [callback];
  const stateFromStores1 = guildId(hasChanges[7]).useStateFromStores(
    items1,
    () => null != callback.getApplicationPermissions() && null != callback.getCommands(),
  );
  const tmp7 = navigation(hasChanges[8])(guildId, id);
  hasChanges = tmp7.hasChanges;
  ({ originalApplicationPermissions, editedTargetPermissions, selectedPermissionCount } = tmp7);
  [first, _slicedToArray] = noop.useState(false);
  const obj3 = guildId(hasChanges[7]);
  [obj4, c6] = noop.useState(null);
  const items2 = [id];
  const effect = noop.useEffect(() => {
    const integrationPermissions = IntegrationPermissionActionCreatorsAll.initIntegrationPermissions(id);
    return () => {
      const result = id(hasChanges[9]).clearIntegrationPermissions();
      const obj = id(hasChanges[9]);
      const result1 = navigation(hasChanges[10]).stopEditingCommandPermissions(closure_1_2);
    };
  }, items2);
  const items3 = [id, guildId];
  const effect1 = noop.useEffect(() => {
    const applicationCommandPermissions = IntegrationPermissionActionCreatorsAll.getApplicationCommandPermissions(
      id,
      guildId,
      id,
    );
    const applicationCommands = IntegrationPermissionActionCreatorsAll.getApplicationCommands(guildId, id);
  }, items3);
  const items4 = [id, guildId];
  callback = noop.useCallback(
    first(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          let getEditedApplication = c4;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              getEditedApplication = getEditedApplication.getEditedApplication;
              const editedApplication = getEditedApplication();
              if (null != editedApplication) {
                _undefined(null);
                v3(true);
                dependencyMap = 1;
                const _Object = Object;
                c4 = 2;
                c5 = 1;
                const obj5 = {
                  value: tmp34(20071).saveApplicationPermissions(id, guildId, Object.values(editedApplication)),
                  done: false,
                };
                return obj5;
              }
            }
          } else {
            if (1 === getEditedApplication) {
              dependencyMap = 0;
              closure_128_0 = tmp34;
              const tmp21 = new tmp3(5793)(closure_128_0);
              closure_129_6(tmp21);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              tmp34(20071).resetPermissions();
              dependencyMap = 0;
              const obj = tmp34(20071);
            }
            getEditedApplication = closure_129_5(false);
          }
          c5 = 3;
        } catch (tmp34) {
          if (tmp4 === dependencyMap) {
            c5 = tmp2;
            throw tmp34;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items4,
  );
  const items5 = [hasChanges, navigation, callback, first];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (first) {
      let fn = () => null;
    } else {
      fn = NavigatorHeader.getHeaderConditionalBackButton(() => navigation(hasChanges[13])(closure_1_3));
    }
    const obj2 = { headerLeft: fn, gestureEnabled: null, headerRight: null };
    let tmp5 = !hasChanges;
    if (!hasChanges) {
      tmp5 = !first;
    }
    obj2.gestureEnabled = tmp5;
    obj2.headerRight = function headerRight() {
      if (first) {
        let tmp2 = closure_2_9(guildId(hasChanges[12]).HeaderSubmittingIndicator, {});
      } else {
        tmp2 = null;
        if (closure_1_3) {
          const obj = { text: null, onPress: null };
          const intl = guildId(hasChanges[15]).intl;
          obj.text = intl.string(guildId(hasChanges[15]).t["R3BPH+"]);
          obj.onPress = onPress;
          tmp2 = closure_2_9(guildId(hasChanges[14]).HeaderActionButton, obj);
        }
      }
      return tmp2;
    };
    navigation.setOptions(obj2);
  }, items5);
  let tmp16Result = null;
  if (!stateFromStores) {
    if (stateFromStores1) {
      let obj5 = { spacing: tmp6(tmp2[17]).space.PX_16, children: null };
      let obj6 = { spacing: tmp6(tmp2[17]).space.PX_8, children: null };
      const obj7 = { icon: tmp(tmp2[19]).SlashBoxIcon, title: null };
      let intl = tmp(tmp2[15]).intl;
      obj7.title = intl.string(tmp(tmp2[15]).t.RGoJNN);
      const items6 = [closure_9(tmp6(tmp2[18]), obj7)];
      const obj8 = { variant: "body-sm/normal", color: "text-muted", children: null };
      const intl2 = tmp(tmp2[15]).intl;
      obj8.children = intl2.string(tmp(tmp2[15]).t.sCkD3Z);
      items6[1] = closure_9(tmp(tmp2[20]).Text, obj8);
      obj6.children = items6;
      const items7 = [closure_10(tmp(tmp2[16]).Stack, obj6), , ,];
      let tmp17Result = null;
      if (null != obj4) {
        tmp17Result = null;
        if (!obj4.hasFieldErrors()) {
          const obj9 = { type: "critical", message: obj4.getAnyErrorMessage(), role: "alert" };
          tmp17Result = closure_9(tmp(tmp2[21]).InlineNotice, obj9);
        }
      }
      items7[1] = tmp17Result;
      const obj10 = {
        applicationId: id,
        guildId,
        editedTargetPermissions,
        originalApplicationPermissions,
        selectedPermissionCount,
      };
      items7[2] = closure_9(tmp6(tmp2[22]), obj10);
      const obj11 = {
        onPressCommand(commandId) {
          return navigation.push(GuildSettingsSections.INTEGRATION_COMMAND_PERMISSIONS, {
            applicationId: id,
            commandId: commandId.id,
          });
        },
      };
      items7[3] = closure_9(tmp6(tmp2[23]), obj11);
      obj5.children = items7;
      tmp16Result = closure_10(tmp(tmp2[16]).Stack, obj5);
      const tmp6Result = tmp6(tmp2[18]);
    } else {
      tmp16Result = null;
    }
  }
  return tmp16Result;
}
