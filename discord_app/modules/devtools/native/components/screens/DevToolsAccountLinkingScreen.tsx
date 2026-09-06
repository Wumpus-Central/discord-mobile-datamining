// discord_app/modules/devtools/native/components/screens/DevToolsAccountLinkingScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import useStartAuthorizeDefault from "../../../../application_account_linking/native/useStartAuthorize.tsx";
import useGetOrFetchApplicationsDefault from "../../../../applications/useGetOrFetchApplications.tsx";
import AuthorizedAppsActionCreatorsDefault from "../../../../oauth2/AuthorizedAppsActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../../applications/ApplicationStore.tsx";
import AuthorizedAppsStore from "../../../../oauth2/AuthorizedAppsStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../../../stores/SelectedGuildStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = { container: null, scrollContainer: null, buttonRow: null, rewardImage: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.container = createStyles;
createStyles.scrollContainer = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let obj1 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles.buttonRow = { gap: nativeDefault.space.PX_8 };
let size = { width: 64, height: 64, borderRadius: nativeDefault.radii.sm };
createStyles.rewardImage = size;
let closure_14 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsAccountLinkingScreen.tsx",
);

export default function DevToolsAccountLinkingScreen() {
  const tmp = closure_14();
  let obj = noop;
  const tmp5 = getOrFetchApplication(noop.useState(""), 2);
  value = tmp5[0];
  importDefault = tmp7;
  let obj1 = value(504);
  const items = [SelectedGuildStore];
  dependencyMap = obj1.useStateFromStores(items, () => guildId.getGuildId());
  let obj2 = value(504);
  const items1 = [GuildStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => GuildStore.getGuild(closure_2));
  let gameApplicationIds;
  if (stateFromStores != null) {
    gameApplicationIds = stateFromStores.gameApplicationIds;
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const tmp4 = useSafeAreaInsetsDefault();
  let found = useGetOrFetchApplicationsDefault(gameApplicationIds).filter((item) => null != item);
  let tmp8Result = tmp8(7168);
  getOrFetchApplication = tmp8Result.useGetOrFetchApplication(value);
  tmp8Result = tmp8(504);
  const items2 = [ApplicationStore];
  const stateFromStoresArray = tmp8Result.useStateFromStoresArray(items2, () => {
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
  const arr4 = useGetOrFetchApplicationsDefault(gameApplicationIds);
  const items3 = [AuthorizedAppsStore];
  const stateFromStores1 = value(504).useStateFromStores(items3, () =>
    AuthorizedAppsStore.getNewestTokenForApplication(first),
  );
  closure_129_1 = stateFromStores1;
  const items4 = [stateFromStores1];
  let str = "N/A";
  let str2 = "N/A";
  const callback = obj.useCallback(() => {
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
  obj = { style: tmp.container, contentContainerStyle: null, children: null };
  const items5 = [tmp.scrollContainer];
  obj = { paddingBottom: tmp4.bottom + tmp2(576).space.PX_16 };
  items5[1] = obj;
  obj.contentContainerStyle = items5;
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (name == null) {
    name = str;
  }
  obj1 = { title: "Guild Official Games - " + name, hasIcons: false, children: null };
  if (null != stateFromStores) {
    if (found.length > 0) {
      let mapped1 = found.map((name) => {
        const obj = {
          label: "" + name.name + " (" + name.id + ")",
          onPress() {
            return closure_1(name.id);
          },
          trailing: null,
        };
        let tmpResult;
        if (name === name.id) {
          tmpResult = closure_1_12(first(dependencyMap[17]).Text, {
            variant: "text-sm/semibold",
            children: "Selected",
          });
        }
        obj.trailing = tmpResult;
        return closure_1_12(first(dependencyMap[16]).TableRow, obj, name.id);
      });
    } else {
      mapped1 = closure_12(tmp8(5605).TableRow, { label: "No official games" });
    }
  } else {
    obj1.children = closure_12(tmp8(5605).TableRow, { label: "No guild selected" });
    const items6 = [closure_12(tmp8(5687).TableRowGroup, obj1), , ,];
    obj2 = { style: null, children: null };
    const obj3 = { padding: tmp2(576).space.PX_12 };
    obj2.style = obj3;
    const obj4 = { label: "Application ID", value, onChange: tmp7 };
    obj2.children = closure_12(tmp8(6606).TextInput, obj4);
    const items7 = [closure_12(closure_7, obj2), ,];
    if (null != getOrFetchApplication) {
      str = getOrFetchApplication.name;
    }
    const obj5 = { title: "Application", hasIcons: false, children: null };
    const obj6 = { label: null };
    let _HermesInternal = HermesInternal;
    obj6.label = "Name: " + str;
    items7[1] = closure_12(tmp8(5605).TableRow, obj6);
    const obj7 = { label: null };
    const _HermesInternal2 = HermesInternal;
    obj7.label = "Linked Games: " + str2;
    items7[2] = closure_12(tmp8(5605).TableRow, obj7);
    obj5.children = items7;
    items6[1] = closure_13(tmp8(5687).TableRowGroup, obj5);
    let str6 = "text-feedback-critical";
    if (debug.hasConnectionEntrypointUrl) {
      str6 = "text-feedback-positive";
    }
    const obj8 = { variant: "text-sm/semibold", color: str6, children: null };
    let str7 = "Not set";
    if (debug.hasConnectionEntrypointUrl) {
      str7 = "Set";
    }
    const obj9 = { label: "Connection Entrypoint URL", trailing: null };
    obj8.children = str7;
    obj9.trailing = closure_12(tmp8(4556).Text, obj8);
    const items8 = [closure_12(tmp8(5605).TableRow, obj9), ,];
    let str8 = "text-muted";
    if (hasAlreadyLinked) {
      str8 = "text-feedback-positive";
    }
    const obj10 = { variant: "text-sm/semibold", color: str8, children: null };
    let str9 = "No";
    if (hasAlreadyLinked) {
      str9 = "Yes";
    }
    const obj11 = { title: "Authorization", hasIcons: false, children: null };
    const obj12 = { label: "Already Linked", trailing: null };
    obj10.children = str9;
    obj12.trailing = closure_12(tmp8(4556).Text, obj10);
    items8[1] = closure_12(tmp8(5605).TableRow, obj12);
    const obj13 = { style: tmp.buttonRow, children: null };
    const obj14 = {
      disabled: !tmp11.canStartAuthorization,
      onPress() {
        return noop({});
      },
      variant: "primary",
      text: "Start Authorization",
    };
    const items9 = [closure_12(tmp8(4975).Button, obj14)];
    const obj15 = { disabled: !tmp15, onPress: callback, variant: "critical-primary", text: "Deauthorize" };
    items9[1] = closure_12(tmp8(4975).Button, obj15);
    obj13.children = items9;
    items8[2] = closure_13(closure_7, obj13);
    obj11.children = items8;
    items6[2] = closure_13(tmp8(5687).TableRowGroup, obj11);
    let prop;
    if (connectionApp != null) {
      prop = connectionApp.applicationAccountLinkBenefitConfig;
    }
    let tmp16Result = null != prop;
    if (tmp16Result) {
      let tmp18Result = null != connectionApp.applicationAccountLinkBenefitConfig.reward_image;
      if (tmp18Result) {
        const obj16 = { style: null, children: null };
        const obj17 = { padding: tmp2(576).space.PX_12 };
        obj16.style = obj17;
        const obj18 = { source: null, style: null };
        const obj19 = { uri: connectionApp.applicationAccountLinkBenefitConfig.reward_image };
        obj18.source = obj19;
        obj18.style = tmp.rewardImage;
        obj16.children = closure_12(connectionApp, obj18);
        tmp18Result = closure_12(closure_7, obj16);
      }
      const items10 = [tmp18Result];
      let str10 = connectionApp.applicationAccountLinkBenefitConfig.reward_name;
      if (str10 == null) {
        str10 = "Unnamed Reward";
      }
      const obj20 = { title: "Reward Configuration", hasIcons: false, children: null };
      const obj21 = { label: null };
      const _HermesInternal3 = HermesInternal;
      obj21.label = "Reward: " + str10;
      items10[1] = closure_12(tmp8(5605).TableRow, obj21);
      obj20.children = items10;
      tmp16Result = closure_13(tmp8(5687).TableRowGroup, obj20);
    }
    items6[3] = tmp16Result;
    obj.children = items6;
    return closure_13(closure_6, obj);
  }
  tmp15 = null != stateFromStores1;
  const tmp8Result1 = value(504);
}
