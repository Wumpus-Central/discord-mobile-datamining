// === Module 9323: SuccessResultModal ===

// Module 9323 (SuccessResultModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import transitionToGuild from "transitionToGuild" /* 7582 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import PermissionStore from "PermissionStore" /* 4395 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: c10, Permissions: closure_11 } = Constants);
const AppLauncherRouteName = fn(1483).AppLauncherRouteName;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, scrollView: { flex: 1 }, scrollViewContentContainer: null, inner: null, text: null, footer: null, footerLandscape: null, footerPortrait: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.scrollViewContentContainer = { height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
obj2.inner = { flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 16 };
obj2.text = { marginTop: 24, paddingHorizontal: 40, textAlign: "center" };
obj2.footer = { flexDirection: "column", justifyContent: "space-between", padding: 16, gap: 16 };
obj2.footerLandscape = { flexDirection: "row-reverse", padding: 16 };
obj2.footerPortrait = { flexDirection: "column", padding: 16 };
let closure_16 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/SuccessResult.tsx");

export default function SuccessResultModal(guild) {
  guild = guild.guild;
  const application = guild.application;
  let stateFromStores;
  noop = undefined;
  let tmp = closure_16();
  const items = [application, guild];
  const memo = noop.useMemo(() => {
    let obj = application;
    let tmp = null;
    if (null != application) {
      if (tmp != guild) {
        const intl3 = util.intl;
        let name;
        if (obj != tmp) {
          name = obj.name;
        }
        obj = { installedApplicationName: name, guildName: null };
        tmp = guild == tmp;
        let name1;
        if (!tmp) {
          name1 = guild.name;
        }
        obj.guildName = name1;
        let formatResult = intl3.format(util.t.IlF6IY, obj);
      } else {
        const intl2 = util.intl;
        let name2;
        if (obj != tmp) {
          name2 = obj.name;
        }
        const obj2 = { installedApplicationName: name2 };
        formatResult = intl2.format(util.t.vTVC5T, obj2);
      }
    } else {
      const intl = util.intl;
      return intl.string(util.t["Dp+rgP"]);
    }
  }, items);
  const items1 = [guild, ];
  let id;
  if (application != null) {
    id = application.id;
  }
  items1[1] = id;
  const callback = noop.useCallback(() => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (null != id) {
      ModalActionCreatorsDefault.pop();
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      transitionToGuild.transitionToGuild(id1);
      let id2;
      if (application != null) {
        id2 = application.id;
      }
      const obj = { application_id: id2, guild_id: null };
      let id3;
      if (guild != null) {
        id3 = guild.id;
      }
      obj.guild_id = id3;
      AnalyticsUtilsDefault.track(closure_2_10.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj);
      const tmp9Result = AnalyticsUtilsDefault;
    }
  }, items1);
  let obj = guild(stateFromStores[10]);
  const items2 = [SelectedChannelStore];
  stateFromStores = guild(stateFromStores[15]).useStateFromStores(items2, () => channelId.getChannelId());
  const tmp2Result = guild(stateFromStores[15]);
  const items3 = [ChannelStore];
  noop = guild(stateFromStores[15]).useStateFromStores(items3, () => ChannelStore.getChannel(stateFromStores));
  const items4 = [application, stateFromStores];
  let id1;
  const callback1 = obj2.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    ActionSheetActionCreatorsDefault.hideActionSheet();
    let tmp5 = null != stateFromStores;
    if (tmp5) {
      tmp5 = null != application;
    }
    if (tmp5) {
      let obj2 = { application_id: application.id };
      AnalyticsUtilsDefault.track(closure_2_10.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj2);
      const _setImmediate = setImmediate;
      setImmediate(() => {
        const bestActiveInput = guild(stateFromStores[17]).getBestActiveInput();
        if (bestActiveInput != null) {
          const obj2 = { type: guild(stateFromStores[18]).KeyboardTypes.APP_LAUNCHER, context: null };
          const obj3 = { initialRouteName: constants.APPLICATION_VIEW, application };
          obj2.context = obj3;
          bestActiveInput.openCustomKeyboard(obj2);
        }
        const obj = guild(stateFromStores[17]);
      });
      const tmpResult = AnalyticsUtilsDefault;
    }
  }, items4);
  if (application != null) {
    id1 = application.id;
  }
  const items5 = [id1];
  let id2;
  const callback2 = obj2.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    let id;
    if (application != null) {
      id = application.id;
    }
    AnalyticsUtilsDefault.track(closure_2_10.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: id });
  }, items5);
  if (application != null) {
    id2 = application.id;
  }
  const items6 = [id2];
  const effect = obj2.useEffect(() => {
    let id;
    if (application != null) {
      id = application.id;
    }
    AnalyticsUtilsDefault.track(closure_2_10.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
  }, items6);
  const tmp2Result3 = guild(stateFromStores[15]);
  const items7 = [PermissionStore];
  const stateFromStores1 = guild(stateFromStores[15]).useStateFromStores(items7, () => PermissionStore.can(constants.SEND_MESSAGES, closure_3));
  let obj3 = { bottom: true, style: tmp.container, children: null };
  const obj4 = { style: tmp.scrollView, contentContainerStyle: tmp.scrollViewContentContainer, children: null };
  const obj5 = { style: tmp.inner, children: null };
  const tmp2Result4 = guild(stateFromStores[15]);
  const items8 = [closure_13(closure_4, { source: application(stateFromStores[20]) }), , ];
  const obj7 = { style: tmp.text, variant: "text-lg/medium", children: null };
  let intl = tmp2(tmp3[11]).intl;
  obj7.children = intl.string(guild(stateFromStores[11]).t.se5gLj);
  items8[1] = closure_13(guild(stateFromStores[21]).Text, obj7);
  let tmp15Result = null;
  if (null != memo) {
    const obj8 = { style: tmp.text, variant: "text-sm/normal", children: memo };
    tmp15Result = closure_13(tmp2(tmp3[21]).Text, obj8);
  }
  items8[2] = tmp15Result;
  obj5.children = items8;
  obj4.children = closure_14(closure_5, obj5);
  const items9 = [closure_13(closure_6, obj4), ];
  const items10 = [tmp.footer, ];
  const obj9 = { style: null, children: null };
  items10[1] = obj.useStore().orientation === guild(stateFromStores[10]).OrientationType.LANDSCAPE ? tmp.footerLandscape : tmp.footerPortrait;
  obj9.style = items10;
  let tmp15Result3 = null;
  if (null != guild) {
    let intl2 = tmp2(tmp3[11]).intl;
    let name;
    if (guild != null) {
      name = guild.name;
    }
    const obj10 = { size: "lg", text: null, onPress: null };
    const obj11 = { guildName: name };
    obj10.text = intl2.formatToPlainString(tmp2(tmp3[11]).t.UdYYP3, obj11);
    obj10.onPress = callback;
    tmp15Result3 = closure_13(tmp2(tmp3[22]).Button, obj10);
  }
  const items11 = [tmp15Result3, , ];
  let tmp15Result4 = null;
  if (null != stateFromStores) {
    tmp15Result4 = null;
    if (stateFromStores1) {
      const obj12 = { size: "lg", text: null, onPress: null };
      let intl3 = tmp2(tmp3[11]).intl;
      obj12.text = intl3.string(tmp2(tmp3[11]).t["0cCDKP"]);
      obj12.onPress = callback1;
      tmp15Result4 = closure_13(tmp2(tmp3[22]).Button, obj12);
    }
  }
  items11[1] = tmp15Result4;
  let str;
  if (null != guild) {
    str = "tertiary";
  }
  const obj13 = { children: null };
  const obj14 = { size: "lg", variant: str, text: null, onPress: null };
  const intl4 = tmp2(tmp3[11]).intl;
  obj14.text = intl4.string(guild(stateFromStores[11]).t.cpT0Cq);
  obj14.onPress = callback2;
  items11[2] = closure_13(guild(stateFromStores[22]).Button, obj14);
  obj13.children = items11;
  obj9.children = closure_14(closure_15, obj13);
  items9[1] = closure_13(closure_5, obj9);
  obj3.children = items9;
  return closure_14(guild(stateFromStores[19]).SafeAreaPaddingView, obj3);
};