// === Module 9576: SuccessResultModal ===

// Module 9576 (SuccessResultModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import transitionToGuild from "transitionToGuild" /* 7342 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: c10, Permissions: closure_11 } = Constants);
const AppLauncherRouteName = fn(1482).AppLauncherRouteName;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
fn(4560);
let createStyles = { container: null, scrollView: null, scrollViewContentContainer: null, inner: null, text: null, footer: null, footerLandscape: null, footerPortrait: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.container = createStyles;
createStyles.scrollView = { flex: 1 };
createStyles.scrollViewContentContainer = { height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createStyles.inner = { flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: 16 };
createStyles.text = { marginTop: 24, paddingHorizontal: 40, textAlign: "center" };
createStyles.footer = { flexDirection: "column", justifyContent: "space-between", padding: 16, gap: 16 };
createStyles.footerLandscape = { flexDirection: "row-reverse", padding: 16 };
createStyles.footerPortrait = { flexDirection: "column", padding: 16 };
let closure_16 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/SuccessResult.tsx");

export default function SuccessResultModal(guild) {
  guild = guild.guild;
  const application = guild.application;
  let stateFromStores;
  noop = undefined;
  let tmp = closure_16();
  let obj = guild(stateFromStores[10]);
  let obj1 = noop;
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
        tmp = tmp6 == tmp;
        let name1;
        if (!tmp) {
          name1 = tmp6.name;
        }
        obj.guildName = name1;
        let formatResult = intl3.format(util.t.IlF6IY, obj);
      } else {
        const intl2 = util.intl;
        let name2;
        if (obj != tmp) {
          name2 = obj.name;
        }
        obj = { installedApplicationName: name2 };
        formatResult = intl2.format(util.t.vTVC5T, obj);
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
      id = tmp.id;
    }
    if (null != id) {
      let arr = ModalActionCreatorsDefault;
      arr = arr.pop();
      let id1;
      if (tmp != null) {
        id1 = tmp.id;
      }
      transitionToGuild.transitionToGuild(id1);
      let id2;
      if (application != null) {
        id2 = application.id;
      }
      const obj = { application_id: id2, guild_id: null };
      let id3;
      if (tmp != null) {
        id3 = tmp.id;
      }
      obj.guild_id = id3;
      AnalyticsUtilsDefault.track(closure_2_10.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, obj);
      const tmp9Result = AnalyticsUtilsDefault;
    }
  }, items1);
  let tmp2Result = tmp2(tmp3[15]);
  const items2 = [SelectedChannelStore];
  stateFromStores = tmp2Result.useStateFromStores(items2, () => channelId.getChannelId());
  tmp2Result = tmp2(tmp3[15]);
  const items3 = [ChannelStore];
  noop = tmp2Result.useStateFromStores(items3, () => ChannelStore.getChannel(stateFromStores));
  const items4 = [application, stateFromStores];
  let id1;
  const callback1 = obj1.useCallback(() => {
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    let tmp5 = null != stateFromStores;
    if (tmp5) {
      tmp5 = null != application;
    }
    if (tmp5) {
      obj = { application_id: application.id };
      AnalyticsUtilsDefault.track(closure_2_10.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, obj);
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let obj = guild(stateFromStores[17]);
        const bestActiveInput = obj.getBestActiveInput();
        if (bestActiveInput != null) {
          obj = { type: guild(stateFromStores[18]).KeyboardTypes.APP_LAUNCHER, context: null };
          obj = { initialRouteName: constants.APPLICATION_VIEW, application };
          obj.context = obj;
          bestActiveInput.openCustomKeyboard(obj);
        }
      });
      const tmpResult = AnalyticsUtilsDefault;
    }
  }, items4);
  if (application != null) {
    id1 = application.id;
  }
  const items5 = [id1];
  let id2;
  const callback2 = obj1.useCallback(() => {
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
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
  const effect = obj1.useEffect(() => {
    let id;
    if (application != null) {
      id = application.id;
    }
    AnalyticsUtilsDefault.track(closure_2_10.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: id });
  }, items6);
  const items7 = [PermissionStore];
  const stateFromStores1 = guild(stateFromStores[15]).useStateFromStores(items7, () => PermissionStore.can(constants.SEND_MESSAGES, closure_3));
  obj = { bottom: true, style: tmp.container, children: null };
  obj = { style: tmp.scrollView, contentContainerStyle: tmp.scrollViewContentContainer, children: null };
  obj1 = { style: tmp.inner, children: null };
  const tmp2Result1 = guild(stateFromStores[15]);
  const items8 = [closure_13(closure_4, { source: application(stateFromStores[20]) }), , ];
  let obj3 = { style: tmp.text, variant: "text-lg/medium", children: null };
  let intl = tmp2(tmp3[11]).intl;
  obj3.children = intl.string(guild(stateFromStores[11]).t.se5gLj);
  items8[1] = closure_13(guild(stateFromStores[21]).Text, obj3);
  let tmp15Result = null;
  if (null != memo) {
    const obj4 = { style: tmp.text, variant: "text-sm/normal", children: memo };
    tmp15Result = tmp15(tmp2(tmp3[21]).Text, obj4);
  }
  items8[2] = tmp15Result;
  obj1.children = items8;
  obj.children = closure_14(closure_5, obj1);
  const items9 = [closure_13(closure_6, obj), ];
  const items10 = [tmp.footer, ];
  const obj5 = { style: null, children: null };
  items10[1] = obj.useStore().orientation === guild(stateFromStores[10]).OrientationType.LANDSCAPE ? tmp.footerLandscape : tmp.footerPortrait;
  obj5.style = items10;
  tmp15Result = null;
  if (null != guild) {
    let intl2 = tmp2(tmp3[11]).intl;
    let name;
    if (guild != null) {
      name = guild.name;
    }
    const obj6 = { size: "lg", text: null, onPress: null };
    const obj7 = { guildName: name };
    obj6.text = intl2.formatToPlainString(tmp2(tmp3[11]).t.UdYYP3, obj7);
    obj6.onPress = callback;
    tmp15Result = tmp15(tmp2(tmp3[22]).Button, obj6);
  }
  const items11 = [tmp15Result, , ];
  let tmp15Result1 = null;
  if (null != stateFromStores) {
    tmp15Result1 = null;
    if (stateFromStores1) {
      const obj8 = { size: "lg", text: null, onPress: null };
      let intl3 = tmp2(tmp3[11]).intl;
      obj8.text = intl3.string(tmp2(tmp3[11]).t["0cCDKP"]);
      obj8.onPress = callback1;
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
  obj10.text = intl4.string(guild(stateFromStores[11]).t.cpT0Cq);
  obj10.onPress = callback2;
  items11[2] = closure_13(guild(stateFromStores[22]).Button, obj10);
  obj9.children = items11;
  obj5.children = closure_14(closure_15, obj9);
  items9[1] = closure_13(closure_5, obj5);
  obj.children = items9;
  return closure_14(guild(stateFromStores[19]).SafeAreaPaddingView, obj);
};