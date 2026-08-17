// discord_app/modules/devtools/native/components/screens/DevToolsAccountLinkingScreen.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "addApplication" /* 4478 */;
import closure_9 from "recomputeFromAppTokens" /* 5289 */;
import closure_10 from "createGuildRecordFromRust" /* 1910 */;
import closure_11 from "handleConnectionOpen" /* 4197 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ Image: c5, ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { container: null, scrollContainer: null, buttonRow: null, rewardImage: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
let obj1 = { padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[2] = { gap: ThemesDefault.space.PX_8 };
let obj2 = { gap: ThemesDefault.space.PX_8 };
createCacheKey[3] = { width: 64, height: 64, borderRadius: ThemesDefault.radii.sm };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj3 = { width: 64, height: 64, borderRadius: ThemesDefault.radii.sm };
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAccountLinkingScreen.tsx");

export default function DevToolsAccountLinkingScreen() {
  const tmp = callback();
  let obj = React;
  const tmp5 = getOrFetchApplication(React.useState(""), 2);
  const first = tmp5[0];
  let id = first;
  let stateFromStores1 = tmp7;
  obj1 = id(589);
  const items = [closure_11];
  dependencyMap = obj1.useStateFromStores(items, () => guildId.getGuildId());
  let obj2 = id(589);
  const items1 = [closure_10];
  const stateFromStores = obj2.useStateFromStores(items1, () => closure_1_10.getGuild(closure_2));
  let gameApplicationIds;
  if (stateFromStores != null) {
    gameApplicationIds = stateFromStores.gameApplicationIds;
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const tmp4 = stateFromStores1(1629)();
  let found = stateFromStores1(7145)(gameApplicationIds).filter((arg0) => null != arg0);
  let tmp8Result = tmp8(7145);
  getOrFetchApplication = tmp8Result.useGetOrFetchApplication(first);
  tmp8Result = tmp8(589);
  const items2 = [closure_8];
  const stateFromStoresArray = tmp8Result.useStateFromStoresArray(items2, () => {
    let found;
    if (getOrFetchApplication != null) {
      const linkedGames = getOrFetchApplication.linkedGames;
      if (linkedGames != null) {
        const mapped = linkedGames.map((id) => application.getApplication(id.id));
        found = mapped.filter((arg0) => null != arg0);
      }
    }
    if (found == null) {
      found = [];
    }
    return found;
  });
  const tmp11 = stateFromStores1(7142)(getOrFetchApplication, { debug: true });
  ({ startAuthorization: closure_4, hasAlreadyLinked, debug, connectionApp } = tmp11);
  id = undefined;
  if (connectionApp != null) {
    id = connectionApp.id;
  }
  const arr4 = stateFromStores1(7145)(gameApplicationIds);
  const items3 = [closure_9];
  stateFromStores1 = id(589).useStateFromStores(items3, () => closure_1_9.getNewestTokenForApplication(id));
  const items4 = [stateFromStores1];
  let str = "N/A";
  let str2 = "N/A";
  callback = obj.useCallback(() => {
    if (null != stateFromStores1) {
      stateFromStores1(7147).delete(tmp.id);
      const obj = stateFromStores1(7147);
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
  const items5 = [tmp.scrollContainer, ];
  obj = { paddingBottom: tmp4.bottom + tmp2(712).space.PX_16 };
  items5[1] = obj;
  obj[1] = items5;
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
        closure_0 = name;
        const obj = {
          label: "" + name.name + " (" + name.id + ")",
          onPress() {
            return closure_1_1(name.id);
          },
          trailing: null
        };
        let tmpResult;
        if (closure_0 === name.id) {
          tmpResult = tmp(id(4734).Text, { variant: "text-sm/semibold", children: "Selected" });
        }
        obj[2] = tmpResult;
        return closure_1_12(id(6291).TableRow, obj, name.id);
      });
    } else {
      mapped1 = tmp18(tmp8(6291).TableRow, { label: "No official games" });
    }
  } else {
    obj1[2] = tmp18(tmp8(6291).TableRow, { label: "No guild selected" });
    const items6 = [tmp18(tmp8(6286).TableRowGroup, obj1), , , ];
    obj2 = { style: null, children: null };
    const obj3 = { padding: null };
    obj3[0] = tmp2(712).space.PX_12;
    obj2[0] = obj3;
    const obj4 = { label: "Application ID", value: null, onChange: null };
    obj4[1] = first;
    obj4[2] = tmp7;
    obj2[1] = tmp18(tmp8(8071).TextInput, obj4);
    const items7 = [tmp18(closure_7, obj2), , ];
    if (null != getOrFetchApplication) {
      str = getOrFetchApplication.name;
    }
    const obj5 = { title: "Application", hasIcons: false, children: null };
    const obj6 = { label: null };
    let _HermesInternal = HermesInternal;
    obj6[0] = "Name: " + str;
    items7[1] = tmp18(tmp8(6291).TableRow, obj6);
    const obj7 = { label: null };
    const _HermesInternal2 = HermesInternal;
    obj7[0] = "Linked Games: " + str2;
    items7[2] = tmp18(tmp8(6291).TableRow, obj7);
    obj5[2] = items7;
    items6[1] = tmp16(tmp8(6286).TableRowGroup, obj5);
    let str6 = "text-feedback-critical";
    if (debug.hasConnectionEntrypointUrl) {
      str6 = "text-feedback-positive";
    }
    const obj8 = { variant: "text-sm/semibold", color: null, children: null };
    obj8[1] = str6;
    let str7 = "Not set";
    if (debug.hasConnectionEntrypointUrl) {
      str7 = "Set";
    }
    const obj9 = { label: "Connection Entrypoint URL", trailing: null };
    obj8[2] = str7;
    obj9[1] = tmp18(tmp8(4734).Text, obj8);
    const items8 = [tmp18(tmp8(6291).TableRow, obj9), , ];
    let str8 = "text-muted";
    if (hasAlreadyLinked) {
      str8 = "text-feedback-positive";
    }
    const obj10 = { variant: "text-sm/semibold", color: null, children: null };
    obj10[1] = str8;
    let str9 = "No";
    if (hasAlreadyLinked) {
      str9 = "Yes";
    }
    const obj11 = { title: "Authorization", hasIcons: false, children: null };
    const obj12 = { label: "Already Linked", trailing: null };
    obj10[2] = str9;
    obj12[1] = tmp18(tmp8(4734).Text, obj10);
    items8[1] = tmp18(tmp8(6291).TableRow, obj12);
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.buttonRow;
    const obj14 = { disabled: null, onPress: null, variant: "primary", text: "Start Authorization" };
    obj14[0] = !tmp11.canStartAuthorization;
    obj14[1] = function onPress() {
      return callback({});
    };
    const items9 = [tmp18(tmp8(4745).Button, obj14), ];
    const obj15 = { disabled: null, onPress: null, variant: "critical-primary", text: "Deauthorize" };
    obj15[0] = !tmp15;
    obj15[1] = callback;
    items9[1] = tmp18(tmp8(4745).Button, obj15);
    obj13[1] = items9;
    items8[2] = tmp16(closure_7, obj13);
    obj11[2] = items8;
    items6[2] = tmp16(tmp8(6286).TableRowGroup, obj11);
    let prop;
    if (connectionApp != null) {
      prop = connectionApp.applicationAccountLinkBenefitConfig;
    }
    let tmp16Result = null != prop;
    if (tmp16Result) {
      let tmp18Result = null != connectionApp.applicationAccountLinkBenefitConfig.reward_image;
      if (tmp18Result) {
        const obj16 = { style: null, children: null };
        const obj17 = { padding: null };
        obj17[0] = tmp2(712).space.PX_12;
        obj16[0] = obj17;
        const obj18 = { source: null, style: null };
        const obj19 = { uri: null };
        obj19[0] = connectionApp.applicationAccountLinkBenefitConfig.reward_image;
        obj18[0] = obj19;
        obj18[1] = tmp.rewardImage;
        obj16[1] = tmp18(connectionApp, obj18);
        tmp18Result = tmp18(tmp22, obj16);
      }
      const items10 = [tmp18Result, ];
      let str10 = connectionApp.applicationAccountLinkBenefitConfig.reward_name;
      if (str10 == null) {
        str10 = "Unnamed Reward";
      }
      const obj20 = { title: "Reward Configuration", hasIcons: false, children: null };
      const obj21 = { label: null };
      const _HermesInternal3 = HermesInternal;
      obj21[0] = "Reward: " + str10;
      items10[1] = tmp18(tmp8(6291).TableRow, obj21);
      obj20[2] = items10;
      tmp16Result = tmp16(tmp8(6286).TableRowGroup, obj20);
    }
    items6[3] = tmp16Result;
    obj[2] = items6;
    return tmp16(closure_6, obj);
  }
};