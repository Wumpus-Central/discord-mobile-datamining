// === Module 11012: SuccessResultModal ===

// Module 11012 (SuccessResultModal)
import SafeAreaPaddingView from "SafeAreaPaddingView";
import get_ActivityIndicator from "getBestActiveInput";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import ME from "ME";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let closure_14;
let closure_15;
let closure_6;
let map1;
let unpackModuleId;
const require = arg1;
({ Image: c4, View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: c10, Permissions: unpackModuleId } = ME);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
createCacheKey = { container: null, scrollView: null, scrollViewContentContainer: null, inner: null, text: null, footer: null, footerLandscape: null, footerPortrait: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { height: "100%", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createCacheKey[3] = { flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 16 };
createCacheKey[4] = { marginTop: 24, paddingHorizontal: 40, textAlign: "center" };
createCacheKey[5] = { flexDirection: "column", justifyContent: "space-between", padding: 16, gap: 16 };
createCacheKey[6] = { flexDirection: "row-reverse", padding: 16 };
createCacheKey[7] = { flexDirection: "column", padding: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { height: "100%", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/oauth2/native/SuccessResult.tsx");

export default function SuccessResultModal(guild) {
  guild = guild.guild;
  const application = guild.application;
  let stateFromStores;
  let React;
  let tmp = createCacheKey();
  let obj = guild(stateFromStores[10]);
  let obj1 = React;
  const items = [application, guild];
  const memo = React.useMemo(() => {
    let obj = application;
    let tmp = null;
    if (null != application) {
      if (tmp != guild) {
        const intl3 = guild(stateFromStores[11]).intl;
        let name;
        if (obj != tmp) {
          name = obj.name;
        }
        obj = { installedApplicationName: null, guildName: null };
        obj[0] = name;
        tmp = tmp6 == tmp;
        let name1;
        if (!tmp) {
          name1 = tmp6.name;
        }
        obj[1] = name1;
        let formatResult = intl3.format(guild(stateFromStores[11]).t.IlF6IY, obj);
      } else {
        const intl2 = guild(stateFromStores[11]).intl;
        let name2;
        if (obj != tmp) {
          name2 = obj.name;
        }
        obj = { installedApplicationName: null };
        obj[0] = name2;
        formatResult = intl2.format(guild(stateFromStores[11]).t.vTVC5T, obj);
      }
    } else {
      const intl = guild(stateFromStores[11]).intl;
      return intl.string(guild(stateFromStores[11]).t["Dp+rgP"]);
    }
  }, items);
  const items1 = [guild, ];
  let id;
  if (application != null) {
    id = application.id;
  }
  items1[1] = id;
  const callback = React.useCallback(() => {
    let id;
    if (guild != null) {
      id = tmp.id;
    }
    if (null != id) {
      let arr = application(stateFromStores[12]);
      arr = arr.pop();
      let id1;
      if (tmp != null) {
        id1 = tmp.id;
      }
      guild(stateFromStores[13]).transitionToGuild(id1);
      const obj3 = guild(stateFromStores[13]);
      const tmp10 = stateFromStores;
      const tmp9 = application;
      let id2;
      if (application != null) {
        id2 = application.id;
      }
      const obj = { application_id: null, guild_id: null };
      obj[0] = id2;
      let id3;
      if (tmp != null) {
        id3 = tmp.id;
      }
      obj[1] = id3;
      application(stateFromStores[14]).track(outer1_10.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj);
      const tmp9Result = application(stateFromStores[14]);
    }
  }, items1);
  let tmp2Result = tmp2(tmp3[15]);
  const items2 = [handleConnectionOpen];
  stateFromStores = tmp2Result.useStateFromStores(items2, () => channelId.getChannelId());
  tmp2Result = tmp2(tmp3[15]);
  const items3 = [ensureGuildLoaded];
  React = tmp2Result.useStateFromStores(items3, () => outer1_7.getChannel(stateFromStores));
  const items4 = [application, stateFromStores];
  let id1;
  const callback1 = obj1.useCallback(() => {
    let arr = application(stateFromStores[12]);
    arr = arr.pop();
    let obj = application(stateFromStores[16]);
    obj.hideActionSheet();
    let tmp5 = null != stateFromStores;
    if (tmp5) {
      tmp5 = null != application;
    }
    if (tmp5) {
      obj = { application_id: null };
      obj[0] = application.id;
      application(stateFromStores[14]).track(outer1_10.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj);
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let obj = outer1_0(outer1_2[17]);
        const bestActiveInput = obj.getBestActiveInput();
        if (bestActiveInput != null) {
          obj = { type: null, context: null };
          obj[0] = outer1_0(outer1_2[18]).KeyboardTypes.APP_LAUNCHER;
          obj = { initialRouteName: null, application: null };
          obj[0] = outer1_12.APPLICATION_VIEW;
          obj[1] = closure_1;
          obj[1] = obj;
          bestActiveInput.openCustomKeyboard(obj);
        }
      });
      const tmpResult = application(stateFromStores[14]);
    }
  }, items4);
  if (application != null) {
    id1 = application.id;
  }
  const items5 = [id1];
  let id2;
  const callback2 = obj1.useCallback(() => {
    let arr = application(stateFromStores[12]);
    arr = arr.pop();
    let id;
    if (application != null) {
      id = application.id;
    }
    application(stateFromStores[14]).track(outer1_10.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
  }, items5);
  if (application != null) {
    id2 = application.id;
  }
  const items6 = [id2];
  const effect = obj1.useEffect(() => {
    let id;
    if (application != null) {
      id = application.id;
    }
    application(stateFromStores[14]).track(outer1_10.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
  }, items6);
  const items7 = [getUncachedChannelPermissions];
  const stateFromStores1 = guild(stateFromStores[15]).useStateFromStores(items7, () => outer1_8.can(outer1_11.SEND_MESSAGES, SafeAreaPaddingView));
  obj = { bottom: true, style: tmp.container, children: null };
  obj = { style: tmp.scrollView, contentContainerStyle: tmp.scrollViewContentContainer, children: null };
  obj1 = { style: tmp.inner, children: null };
  const obj2 = { source: null };
  obj2[0] = application(stateFromStores[20]);
  const items8 = [callback(closure_4, obj2), , ];
  let obj3 = { style: tmp.text, variant: "text-lg/medium", children: null };
  let intl = tmp2(tmp3[11]).intl;
  obj3[2] = intl.string(guild(stateFromStores[11]).t.se5gLj);
  items8[1] = callback(guild(stateFromStores[21]).Text, obj3);
  let tmp15Result = null;
  if (null != memo) {
    const obj4 = { style: null, variant: "text-sm/normal", children: null };
    obj4[0] = tmp.text;
    obj4[2] = memo;
    tmp15Result = tmp15(tmp2(tmp3[21]).Text, obj4);
  }
  items8[2] = tmp15Result;
  obj1[1] = items8;
  obj[2] = closure_14(closure_5, obj1);
  const items9 = [callback(closure_6, obj), ];
  const items10 = [tmp.footer, ];
  const obj5 = { style: null, children: null };
  items10[1] = obj.useStore().orientation === guild(stateFromStores[10]).OrientationType.LANDSCAPE ? tmp.footerLandscape : tmp.footerPortrait;
  obj5[0] = items10;
  tmp15Result = null;
  if (null != guild) {
    let intl2 = tmp2(tmp3[11]).intl;
    let name;
    if (guild != null) {
      name = guild.name;
    }
    const obj6 = { size: "lg", text: null, onPress: null };
    const obj7 = { guildName: null };
    obj7[0] = name;
    obj6[1] = intl2.formatToPlainString(tmp2(tmp3[11]).t.UdYYP3, obj7);
    obj6[2] = callback;
    tmp15Result = tmp15(tmp2(tmp3[22]).Button, obj6);
  }
  const items11 = [tmp15Result, , ];
  let tmp15Result1 = null;
  if (null != stateFromStores) {
    tmp15Result1 = null;
    if (stateFromStores1) {
      const obj8 = { size: "lg", text: null, onPress: null };
      let intl3 = tmp2(tmp3[11]).intl;
      obj8[1] = intl3.string(tmp2(tmp3[11]).t["0cCDKP"]);
      obj8[2] = callback1;
      tmp15Result1 = tmp15(tmp2(tmp3[22]).Button, obj8);
    }
  }
  items11[1] = tmp15Result1;
  let str;
  if (null != guild) {
    str = "tertiary";
  }
  const obj9 = { children: null };
  const obj10 = { size: "lg", variant: str, text: null, onPress: null };
  const intl4 = tmp2(tmp3[11]).intl;
  obj10[2] = intl4.string(guild(stateFromStores[11]).t.cpT0Cq);
  obj10[3] = callback2;
  items11[2] = callback(guild(stateFromStores[22]).Button, obj10);
  obj9[0] = items11;
  obj5[1] = closure_14(closure_15, obj9);
  items9[1] = callback(closure_5, obj5);
  obj[2] = items9;
  return closure_14(guild(stateFromStores[19]).SafeAreaPaddingView, obj);
};