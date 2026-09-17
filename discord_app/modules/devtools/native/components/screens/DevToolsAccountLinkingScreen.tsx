// === Module 15861: DevToolsAccountLinkingScreen ===

// Module 15861 (DevToolsAccountLinkingScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import useStartAuthorizeDefault from "useStartAuthorize" /* 7279 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7282 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7284 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4868 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7221 */;
import GuildStore from "GuildStore" /* 1980 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4461 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, scrollContainer: null, buttonRow: null, rewardImage: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.scrollContainer = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.buttonRow = { gap: nativeDefault.space.PX_8 };
let size = { width: 64, height: 64, borderRadius: nativeDefault.radii.sm };
obj2.rewardImage = size;
let closure_14 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAccountLinkingScreen.tsx");

export default function DevToolsAccountLinkingScreen() {
  const tmp = closure_14();
  const tmp5 = getOrFetchApplication(noop.useState(""), 2);
  value = tmp5[0];
  importDefault = tmp7;
  const tmp4 = useSafeAreaInsetsDefault();
  const items = [SelectedGuildStore];
  dependencyMap = value(504).useStateFromStores(items, () => guildId.getGuildId());
  const obj2 = value(504);
  const items1 = [GuildStore];
  const stateFromStores = value(504).useStateFromStores(items1, () => GuildStore.getGuild(closure_2));
  let gameApplicationIds;
  if (stateFromStores != null) {
    gameApplicationIds = stateFromStores.gameApplicationIds;
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const obj3 = value(504);
  let found = useGetOrFetchApplicationsDefault(gameApplicationIds).filter((item) => null != item);
  const arr4 = useGetOrFetchApplicationsDefault(gameApplicationIds);
  getOrFetchApplication = value(7282).useGetOrFetchApplication(value);
  const tmp8Result = value(7282);
  const items2 = [ApplicationStore];
  const stateFromStoresArray = value(504).useStateFromStoresArray(items2, () => {
    let found;
    if (getOrFetchApplication != null) {
      const linkedGames = getOrFetchApplication.linkedGames;
      if (linkedGames != null) {
        const mapped = linkedGames.map((id) => application.getApplication(id.id));
        found = mapped.filter((item) => null != item);
      }
    }
    if (found == null) {
      found = [];
    }
    return found;
  });
  const tmp11 = useStartAuthorizeDefault(getOrFetchApplication, { debug: true });
  ({ startAuthorization: noop, hasAlreadyLinked, debug, connectionApp } = tmp11);
  let id;
  if (connectionApp != null) {
    id = connectionApp.id;
  }
  closure_129_0 = id;
  const tmp8Result3 = value(504);
  const items3 = [AuthorizedAppsStore];
  const stateFromStores1 = value(504).useStateFromStores(items3, () => AuthorizedAppsStore.getNewestTokenForApplication(first));
  closure_129_1 = stateFromStores1;
  const items4 = [stateFromStores1];
  let str = "N/A";
  let str2 = "N/A";
  const callback = noop.useCallback(() => {
    if (null != closure_1) {
      AuthorizedAppsActionCreatorsDefault.delete(tmp.id);
    }
  }, items4);
  if (stateFromStoresArray.length > 0) {
    let mapped = stateFromStoresArray.map((id) => {
      id = undefined;
      if (connectionApp != null) {
        id = connectionApp.id;
      }
      if (id === id.id) {
        const _HermesInternal = HermesInternal;
        let name = "" + id.name + "*";
      } else {
        name = id.name;
      }
      return name;
    });
    str2 = mapped.join(", ");
  }
  const obj4 = { style: tmp.container, contentContainerStyle: null, children: null };
  const items5 = [tmp.scrollContainer, ];
  const tmp15 = null != stateFromStores1;
  const tmp8Result4 = value(504);
  items5[1] = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
  obj4.contentContainerStyle = items5;
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (name == null) {
    name = str;
  }
  const obj6 = { title: "Guild Official Games - " + name, hasIcons: false, children: null };
  if (null != stateFromStores) {
    if (found.length > 0) {
      let mapped1 = found.map((name) => {
        const obj = {
          label: "" + name.name + " (" + name.id + ")",
          onPress() {
            return closure_1(name.id);
          },
          trailing: null
        };
        let tmpResult;
        if (name === name.id) {
          tmpResult = closure_1_12(first(dependencyMap[17]).Text, { variant: "text-sm/semibold", children: "Selected" });
        }
        obj.trailing = tmpResult;
        return closure_1_12(first(dependencyMap[16]).TableRow, obj, name.id);
      });
    } else {
      mapped1 = closure_12(tmp8(5693).TableRow, { label: "No official games" });
    }
  } else {
    obj6.children = closure_12(tmp8(5693).TableRow, { label: "No guild selected" });
    const items6 = [closure_12(tmp8(5775).TableRowGroup, obj6), , , ];
    const obj7 = { style: null, children: null };
    const obj8 = { padding: tmp2(576).space.PX_12 };
    obj7.style = obj8;
    const obj9 = { label: "Application ID", value, onChange: tmp7 };
    obj7.children = closure_12(tmp8(6717).TextInput, obj9);
    const items7 = [closure_12(closure_7, obj7), , ];
    if (null != getOrFetchApplication) {
      str = getOrFetchApplication.name;
    }
    const obj10 = { title: "Application", hasIcons: false, children: null };
    const obj11 = { label: null };
    let _HermesInternal = HermesInternal;
    obj11.label = "Name: " + str;
    items7[1] = closure_12(tmp8(5693).TableRow, obj11);
    const obj12 = { label: null };
    const _HermesInternal2 = HermesInternal;
    obj12.label = "Linked Games: " + str2;
    items7[2] = closure_12(tmp8(5693).TableRow, obj12);
    obj10.children = items7;
    items6[1] = closure_13(tmp8(5775).TableRowGroup, obj10);
    let str6 = "text-feedback-critical";
    if (debug.hasConnectionEntrypointUrl) {
      str6 = "text-feedback-positive";
    }
    const obj13 = { variant: "text-sm/semibold", color: str6, children: null };
    let str7 = "Not set";
    if (debug.hasConnectionEntrypointUrl) {
      str7 = "Set";
    }
    const obj14 = { label: "Connection Entrypoint URL", trailing: null };
    obj13.children = str7;
    obj14.trailing = closure_12(tmp8(4636).Text, obj13);
    const items8 = [closure_12(tmp8(5693).TableRow, obj14), , ];
    let str8 = "text-muted";
    if (hasAlreadyLinked) {
      str8 = "text-feedback-positive";
    }
    const obj15 = { variant: "text-sm/semibold", color: str8, children: null };
    let str9 = "No";
    if (hasAlreadyLinked) {
      str9 = "Yes";
    }
    const obj16 = { title: "Authorization", hasIcons: false, children: null };
    const obj17 = { label: "Already Linked", trailing: null };
    obj15.children = str9;
    obj17.trailing = closure_12(tmp8(4636).Text, obj15);
    items8[1] = closure_12(tmp8(5693).TableRow, obj17);
    const obj18 = { style: tmp.buttonRow, children: null };
    const obj19 = {
      disabled: !tmp11.canStartAuthorization,
      onPress() {
          return noop({});
        },
      variant: "primary",
      text: "Start Authorization"
    };
    const items9 = [closure_12(tmp8(5062).Button, obj19), ];
    const obj20 = { disabled: !tmp15, onPress: callback, variant: "critical-primary", text: "Deauthorize" };
    items9[1] = closure_12(tmp8(5062).Button, obj20);
    obj18.children = items9;
    items8[2] = closure_13(closure_7, obj18);
    obj16.children = items8;
    items6[2] = closure_13(tmp8(5775).TableRowGroup, obj16);
    let prop;
    if (connectionApp != null) {
      prop = connectionApp.applicationAccountLinkBenefitConfig;
    }
    let tmp16Result = null != prop;
    if (tmp16Result) {
      let tmp18Result = null != connectionApp.applicationAccountLinkBenefitConfig.reward_image;
      if (tmp18Result) {
        const obj21 = { style: null, children: null };
        const obj22 = { padding: tmp2(576).space.PX_12 };
        obj21.style = obj22;
        const obj23 = { source: null, style: null };
        const obj24 = { uri: connectionApp.applicationAccountLinkBenefitConfig.reward_image };
        obj23.source = obj24;
        obj23.style = tmp.rewardImage;
        obj21.children = closure_12(connectionApp, obj23);
        tmp18Result = closure_12(closure_7, obj21);
      }
      const items10 = [tmp18Result, ];
      let str10 = connectionApp.applicationAccountLinkBenefitConfig.reward_name;
      if (str10 == null) {
        str10 = "Unnamed Reward";
      }
      const obj25 = { title: "Reward Configuration", hasIcons: false, children: null };
      const obj26 = { label: null };
      const _HermesInternal3 = HermesInternal;
      obj26.label = "Reward: " + str10;
      items10[1] = closure_12(tmp8(5693).TableRow, obj26);
      obj25.children = items10;
      tmp16Result = closure_13(tmp8(5775).TableRowGroup, obj25);
    }
    items6[3] = tmp16Result;
    obj4.children = items6;
    return closure_13(closure_6, obj4);
  }
  const obj5 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
};