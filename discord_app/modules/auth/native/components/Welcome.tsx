// === Module 16343: Welcome ===

// Module 16343 (Welcome)
import _modDef38 from "module_38" /* 38 */;
import Storage2 from "Storage" /* 510 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Link from "Link" /* 1485 */;
import UserUtilsDefault from "UserUtils" /* 4671 */;
import Text_Text from "Text/Text" /* 4823 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7274 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7310 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7803 */;
import GuildInviteIconDefault from "GuildInviteIcon" /* 12998 */;
import _modDef13613 from "module_13613" /* 13613 */;
import _mod14220 from "module_14220" /* 14220 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 16340 */;
import noop from "module_19" /* 19 */;
import AgeGateStore from "AgeGateStore" /* 16344 */;
import ExperimentStore from "ExperimentStore" /* 4742 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7785 */;
import MultiAccountStore from "MultiAccountStore" /* 12753 */;
import UserRecord from "UserRecord" /* 1386 */;
import InviteStore from "InviteStore" /* 4811 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 9095 */;

const require = globalThis.__r;

require = fn;
function InviteCard(invite) {
  invite = invite.invite;
  const tmp = closure_24();
  ({ guild, inviter } = invite);
  if (invite.state !== constants4.RESOLVED) {
    return null;
  } else {
    if (null != guild) {
      const obj3 = { guild };
      let tmp14 = __initData(GuildInviteIconDefault, obj3);
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["3rE1P8"]);
      let name = guild.name;
      let tmp17 = require;
      let tmp18 = __initData;
    } else if (null != tmp2) {
      _modDef38(null != inviter, "Null inviter");
      const obj = { user: null, guildId: "Array" };
      const tmp12 = new UserRecord(inviter);
      obj.user = tmp12;
      tmp14 = __initData(native.Avatar, obj);
      const intl = util.intl;
      stringResult = intl.string(util.t.OsdY8B);
      name = UserUtilsDefault.getFormattedName(inviter);
      tmp17 = require;
      tmp18 = __initData;
    } else if (null == inviter) {
      return null;
    } else {
      const obj4 = { user: null, guildId: "Array" };
      const tmp33 = new UserRecord(inviter);
      obj4.user = tmp33;
      const intl3 = util.intl;
      stringResult = intl3.string(util.t["+ITYkQ"]);
      const tmp35 = __initData(native.Avatar, obj4);
      name = UserUtilsDefault.getFormattedName(inviter, true);
      tmp14 = tmp35;
      tmp17 = require;
      tmp18 = __initData;
    }
    const obj5 = { style: null, children: null };
    const items = [tmp.container, invite.style];
    obj5.style = items;
    const items1 = [tmp14, ];
    const obj6 = { style: tmp.text, children: null };
    const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: stringResult };
    const items2 = [tmp18(tmp17(4823).Text, obj7), ];
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
    items2[1] = tmp18(tmp17(4823).Text, obj8);
    obj6.children = items2;
    items1[1] = __initData2(React4, obj6);
    obj5.children = items1;
    return __initData2(React4, obj5);
  }
}
function GuildTemplateCard(arg0) {
  ({ guildTemplate, style } = arg0);
  const tmp = closure_24();
  const obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  const items1 = [__initData(hasOwnProperty, { source: _modDef13613 }), ];
  const obj3 = { style: tmp.text, children: null };
  const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.QzUORX);
  const items2 = [__initData(Text_Text.Text, obj4), __initData(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name })];
  obj3.children = items2;
  items1[1] = __initData2(React4, obj3);
  obj.children = items1;
  return __initData2(React4, obj);
}
function Centerpiece(inlineButtons) {
  ({ invite, guildTemplate } = inlineButtons);
  const tmp2 = useIsWindowLargeDefault();
  const tmp3 = closure_23(tmp2);
  const typeConsolidationTextTransform = useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("Welcome");
  let tmp8 = null != guildTemplate;
  if (tmp8) {
    tmp8 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  const obj2 = { style: null, children: null };
  const items = [tmp3.centerpieceContainer];
  obj2.style = items;
  const obj3 = { alwaysBounceVertical: false, contentContainerStyle: tmp3.scrollViewContainer, children: null };
  const items1 = [__initData(hasOwnProperty, { style: tmp3.logo, source: _mod14220 }), , ];
  const obj5 = { style: null, lineClamp: null, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: null };
  const items2 = [tmp3.header, typeConsolidationTextTransform];
  obj5.style = items2;
  let num = 2;
  if (tmp2) {
    num = 1;
  }
  obj5.lineClamp = num;
  const intl = util.intl;
  obj5.children = intl.string(util.t["3S2xmm"]);
  const items3 = [__initData(Text_Text.Heading, obj5), , , ];
  const items4 = [tmp3.subHeader, ];
  if (null != invite) {
    let subHeaderWithInvite = tmp3.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  const obj6 = { variant: "text-md/medium", color: "text-overlay-light", style: items4, maxFontSizeMultiplier: 3, children: null };
  items4[1] = subHeaderWithInvite;
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.Gtcthl);
  items3[1] = __initData(Text_Text.Text, obj6);
  let tmp10Result = null;
  if (null != invite) {
    const obj7 = { invite };
    tmp10Result = __initData(InviteCard, obj7);
  }
  items3[2] = tmp10Result;
  let tmp10Result2 = null;
  if (tmp8) {
    const obj8 = { guildTemplate };
    tmp10Result2 = __initData(GuildTemplateCard, obj8);
  }
  items3[3] = tmp10Result2;
  items1[1] = __initData2(React4, { children: items3 });
  items1[2] = inlineButtons.inlineButtons;
  obj3.children = items1;
  obj2.children = __initData2(timestampProducer, obj3);
  return __initData(React4, obj2);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_14, StorageKeys: closure_15, AuthStates: closure_16, InviteStates: closure_17, ThemeTypes: closure_18 } = Constants);
const GuildTemplateStates = fn(7654).GuildTemplateStates;
const InviteTypes = fn(8063).InviteTypes;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let createStyles = fn(4827);
let closure_23 = createStyles.createStyles((arg0) => {
  const obj = { container: { height: "100%", flex: 1, padding: 16 }, logo: { flex: 0, width: 93, height: 70, tintColor: "white", alignSelf: "center", marginBottom: 24 }, scrollViewContainer: { flexShrink: 0, flexGrow: 1, justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8, textTransform: "uppercase" }, subHeader: null, subHeaderWithInvite: null, centerpieceContainer: null, buttonContainer: null };
  let num = 300;
  if (arg0) {
    num = 480;
  }
  obj.subHeader = { fontSize: 18, textAlign: "center", alignSelf: "center", maxWidth: num, marginBottom: 24, marginHorizontal: 16 };
  obj.subHeaderWithInvite = { marginBottom: 16 };
  obj.centerpieceContainer = { flexGrow: 1, flexShrink: 1, justifyContent: "center" };
  obj.buttonContainer = { paddingHorizontal: 28, maxWidth: 480, alignSelf: "center", width: "100%" };
  return obj;
});
createStyles = fn(4827);
let obj3 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, flexDirection: "row", borderRadius: nativeDefault.radii.sm }, text: { marginLeft: 16 } };
let closure_24 = createStyles.createStyles(obj3);
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default function Welcome() {
  const tmp3 = require("useIsWindowLarge")();
  const tmp4 = closure_23(tmp3);
  _require = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const tmp = importDefault;
  ({ top, bottom } = require("useSafeAreaInsets")());
  let tmp6 = require("useSafeAreaInsets")();
  const items = [DisplayedInviteStore];
  importDefault = require("initialize").useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj2 = require("initialize");
  const items1 = [InviteStore];
  stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_1) {
      invite = InviteStore.getInvite(tmp);
    }
    return invite;
  });
  let obj3 = require("initialize");
  const items2 = [GuildTemplateStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => GuildTemplateStore.getGuildTemplate(GuildTemplateStore.getDisplayedGuildTemplateCode()));
  let obj4 = require("initialize");
  const items3 = [AgeGateStore];
  noop = require("initialize").useStateFromStores(items3, () => underageAnonymous.isUnderageAnonymous());
  const obj5 = require("initialize");
  const items4 = [MultiAccountStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => MultiAccountStore.getHasLoggedInAccounts());
  const obj6 = require("initialize");
  const items5 = [MultiAccountStore];
  const stateFromStores3 = require("initialize").useStateFromStores(items5, () => MultiAccountStore.getCanUseMultiAccountMobile());
  require("useMountEffect")(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
    const result = TTIAnalyticsUtils.trackAppLaunchCompleted();
    let tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != stateFromStores.type) {
        tmp6 = InviteTypes[stateFromStores.type];
      }
    }
    const obj4 = { last_logout_ts: null, invite_type: null, guild_id: null, channel_id: null, invite_code: null };
    const Storage = Storage2.Storage;
    obj4.last_logout_ts = Storage.get(constants2.LOGOUT_TIMESTAMP_KEY);
    obj4.invite_type = tmp6;
    let id;
    if (stateFromStores != null) {
      const guild = stateFromStores.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    obj4.guild_id = id;
    let id1;
    if (stateFromStores != null) {
      const channel = stateFromStores.channel;
      if (channel != null) {
        id1 = channel.id;
      }
    }
    obj4.channel_id = id1;
    let code;
    if (stateFromStores != null) {
      code = stateFromStores.code;
    }
    obj4.invite_code = code;
    AnalyticsUtilsDefault.track(constants.APP_LANDING_VIEWED, obj4);
  });
  const effect = noop.useEffect(() => {
    const locationMetadata = closure_1(stateFromStores[32]).getLocationMetadata();
  }, []);
  require("useInitialValue")(ExperimentStore.hasLoadedExperiments);
  const effect1 = noop.useEffect(() => {

  });
  const effect2 = noop.useEffect(() => {

  });
  if (stateFromStores3) {
    if (stateFromStores2) {
      return closure_21(tmp(tmp2[34]), {});
    }
  }
  const obj8 = { style: tmp4.buttonContainer, children: null };
  const obj9 = { children: null };
  const obj10 = {
    size: "lg",
    variant: "primary-overlay",
    onPress: function handlePressRegister() {
      if (closure_3) {
        navigation.navigate(constants3.AGE_GATE_UNDERAGE, { fromRegister: true });
      } else {
        const nextAuthState = RegistrationStepsUtils.getNextAuthState(constants3.WELCOME);
        const CommonActions = Link.CommonActions;
        navigation.dispatch(CommonActions.navigate(nextAuthState));
        AnalyticsUtilsDefault.track(constants.REGISTER_VIEWED);
      }
    },
    text: null
  };
  const intl = tmp5(tmp2[16]).intl;
  obj10.text = intl.string(require("util").t.pV8xeR);
  const items6 = [closure_21(require("components/Button/Button").Button, obj10), ];
  const obj11 = {
    size: "lg",
    variant: "secondary-overlay",
    onPress: function handlePressLogin() {
      navigation.navigate(constants3.LOGIN);
      AnalyticsUtilsDefault.track(constants.LOGIN_VIEWED, { source: "welcome" });
    },
    text: null
  };
  const intl2 = tmp5(tmp2[16]).intl;
  obj11.text = intl2.string(require("util").t.dKhVQN);
  items6[1] = closure_21(require("components/Button/Button").Button, obj11);
  obj9.children = items6;
  obj8.children = closure_22(require("ButtonGroup").ButtonGroup, obj9);
  const tmp19 = closure_21(closure_4, obj8);
  const obj12 = { theme: constants5.DARK, children: null };
  const obj13 = { style: null, children: null };
  const items7 = [tmp4.container, ];
  const obj7 = require("initialize");
  items7[1] = { paddingTop: top + require("NavigatorConstants").NAV_BAR_HEIGHT, paddingBottom: bottom };
  obj13.style = items7;
  const obj15 = { invite: stateFromStores, guildTemplate: stateFromStores1, inlineButtons: null };
  let tmp21 = null;
  if (tmp3) {
    tmp21 = tmp19;
  }
  obj15.inlineButtons = tmp21;
  const items8 = [closure_21(Centerpiece, obj15), , ];
  let tmp22 = !tmp3;
  if (!tmp3) {
    tmp22 = tmp19;
  }
  items8[1] = tmp22;
  items8[2] = closure_21(require("TTIFirstContentfulPaint").TTIFirstContentfulPaint, { label: "welcome" });
  obj13.children = items8;
  obj12.children = closure_22(closure_4, obj13);
  return closure_21(require("native").ThemeContextProvider, obj12);
};