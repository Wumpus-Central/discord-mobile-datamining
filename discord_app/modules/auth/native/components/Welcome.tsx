// === Module 18312: Welcome ===

// Module 18312 (Welcome)
import _modDef38 from "module_38" /* 38 */;
import Storage2 from "Storage" /* 510 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Link from "Link" /* 1500 */;
import UserUtilsDefault from "UserUtils" /* 5194 */;
import Text_Text from "Text/Text" /* 5751 */;
import FastImageDefault from "FastImage" /* 5842 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7183 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7730 */;
import GuildInviteIconDefault from "GuildInviteIcon" /* 14471 */;
import _modDef15390 from "module_15390" /* 15390 */;
import _mod15985 from "module_15985" /* 15985 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 18309 */;
import noop from "module_19" /* 19 */;
import AgeGateStore from "AgeGateStore" /* 18313 */;
import ExperimentStore from "ExperimentStore" /* 5354 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7713 */;
import UserRecord from "UserRecord" /* 1404 */;
import InviteStore from "InviteStore" /* 5874 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 9203 */;

const require = globalThis.__r;

require = fn;
function InviteCard(invite) {
  invite = invite.invite;
  const tmp = closure_22();
  ({ guild, inviter } = invite);
  if (invite.state !== constants4.RESOLVED) {
    return null;
  } else {
    if (null != guild) {
      const obj3 = { guild };
      let tmp14 = expandedHeight(GuildInviteIconDefault, obj3);
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["3rE1P8"]);
      let name = guild.name;
      let tmp17 = require;
      let tmp18 = expandedHeight;
    } else if (null != tmp2) {
      _modDef38(null != inviter, "Null inviter");
      const obj = { user: null, guildId: "r" };
      const tmp12 = new UserRecord(inviter);
      obj.user = tmp12;
      tmp14 = expandedHeight(native.Avatar, obj);
      const intl = util.intl;
      stringResult = intl.string(util.t.OsdY8B);
      name = UserUtilsDefault.getFormattedName(inviter);
      tmp17 = require;
      tmp18 = expandedHeight;
    } else if (null == inviter) {
      return null;
    } else {
      const obj4 = { user: null, guildId: "r" };
      const tmp33 = new UserRecord(inviter);
      obj4.user = tmp33;
      const intl3 = util.intl;
      stringResult = intl3.string(util.t["+ITYkQ"]);
      const tmp35 = expandedHeight(native.Avatar, obj4);
      name = UserUtilsDefault.getFormattedName(inviter, true);
      tmp14 = tmp35;
      tmp17 = require;
      tmp18 = expandedHeight;
    }
    const obj5 = { style: null, children: null };
    items = [tmp.container, invite.style];
    obj5.style = items;
    const items1 = [tmp14, ];
    const obj6 = { style: tmp.text, children: null };
    const obj7 = { variant: "body-sm/medium", color: "text-subtle", children: stringResult };
    const items2 = [tmp18(tmp17(5751).Text, obj7), ];
    const obj8 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: name };
    items2[1] = tmp18(tmp17(5751).Text, obj8);
    obj6.children = items2;
    items1[1] = dependencyMap(React4, obj6);
    obj5.children = items1;
    return dependencyMap(React4, obj5);
  }
}
function GuildTemplateCard(arg0) {
  ({ guildTemplate, style } = arg0);
  const tmp = closure_22();
  const obj = { style: null, children: null };
  items = [tmp.container, style];
  obj.style = items;
  const obj2 = { source: _modDef15390 };
  const items1 = [expandedHeight(FastImageDefault, obj2), ];
  const obj3 = { style: tmp.text, children: null };
  const obj4 = { variant: "body-sm/medium", color: "text-subtle", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.QzUORX);
  const items2 = [expandedHeight(Text_Text.Text, obj4), expandedHeight(Text_Text.Text, { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name })];
  obj3.children = items2;
  items1[1] = dependencyMap(React4, obj3);
  obj.children = items1;
  return dependencyMap(React4, obj);
}
function Centerpiece(inlineButtons) {
  ({ invite, guildTemplate } = inlineButtons);
  const tmp3 = useIsWindowLargeDefault();
  const tmp4 = closure_21(tmp3);
  let tmp8 = null != guildTemplate;
  if (tmp8) {
    tmp8 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  const obj = { style: tmp4.centerpieceContainer, children: null };
  const obj2 = { alwaysBounceVertical: false, contentContainerStyle: tmp4.scrollViewContainer, children: null };
  items = [expandedHeight(FastImageDefault, { style: tmp4.logo, source: _mod15985 }), , ];
  const obj4 = { style: tmp4.header, lineClamp: null, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: null };
  let num = 2;
  if (tmp3) {
    num = 1;
  }
  obj4.lineClamp = num;
  const intl = util.intl;
  obj4.children = intl.string(util.t["3S2xmm"]);
  const items1 = [expandedHeight(Text_Text.Heading, obj4), , , ];
  const items2 = [tmp4.subHeader, ];
  if (null != invite) {
    let subHeaderWithInvite = tmp4.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  const obj5 = { variant: "body-md/medium", color: "text-overlay-light", style: items2, maxFontSizeMultiplier: 3, children: null };
  items2[1] = subHeaderWithInvite;
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.Gtcthl);
  items1[1] = expandedHeight(Text_Text.Text, obj5);
  let tmp10Result = null;
  if (null != invite) {
    const obj6 = { invite };
    tmp10Result = expandedHeight(InviteCard, obj6);
  }
  items1[2] = tmp10Result;
  let tmp10Result2 = null;
  if (tmp8) {
    const obj7 = { guildTemplate };
    tmp10Result2 = expandedHeight(GuildTemplateCard, obj7);
  }
  items1[3] = tmp10Result2;
  items[1] = dependencyMap(React4, { children: items1 });
  items[2] = inlineButtons.inlineButtons;
  obj2.children = items;
  obj.children = dependencyMap(hasOwnProperty, obj2);
  return expandedHeight(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticEvents: closure_12, StorageKeys: map1, AuthStates: closure_14, InviteStates: closure_15, ThemeTypes: closure_16 } = Constants);
const GuildTemplateStates = fn(7573).GuildTemplateStates;
const InviteTypes = fn(7956).InviteTypes;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
let createStyles = fn(5140);
let closure_21 = createStyles.createStyles((arg0) => {
  const obj = { container: { height: "100%", flex: 1, padding: 16 }, logo: { flex: 0, width: 93, height: 70, tintColor: "white", alignSelf: "center", marginBottom: 24 }, scrollViewContainer: { flexShrink: 0, flexGrow: 1, justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8 }, subHeader: null, subHeaderWithInvite: null, centerpieceContainer: null, buttonContainer: null };
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
createStyles = fn(5140);
let obj3 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, flexDirection: "row", borderRadius: nativeDefault.radii.sm }, text: { marginLeft: 16 } };
let closure_22 = createStyles.createStyles(obj3);
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default function Welcome() {
  const tmp3 = require("useIsWindowLarge")();
  const tmp4 = closure_21(tmp3);
  _require = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const tmp = importDefault;
  ({ top, bottom } = require("useSafeAreaInsets")());
  let tmp6 = require("useSafeAreaInsets")();
  items = [DisplayedInviteStore];
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
      guild = stateFromStores.guild;
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
  if (tmp9) {
    return closure_19(tmp(tmp2[34]), {});
  } else {
    const obj6 = { style: tmp4.buttonContainer, children: null };
    const obj7 = { children: null };
    const obj8 = {
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
    const intl = tmp5(tmp2[15]).intl;
    obj8.text = intl.string(tmp5(tmp2[15]).t.pV8xeR);
    const items4 = [closure_19(tmp5(tmp2[38]).Button, obj8), ];
    const obj9 = {
      size: "lg",
      variant: "secondary-overlay",
      onPress: function handlePressLogin() {
          navigation.navigate(constants3.LOGIN);
          AnalyticsUtilsDefault.track(constants.LOGIN_VIEWED, { source: "welcome" });
        },
      text: null
    };
    const intl2 = tmp5(tmp2[15]).intl;
    obj9.text = intl2.string(tmp5(tmp2[15]).t.dKhVQN);
    items4[1] = closure_19(tmp5(tmp2[38]).Button, obj9);
    obj7.children = items4;
    obj6.children = closure_20(tmp5(tmp2[37]).ButtonGroup, obj7);
    const tmp15Result = closure_19(closure_4, obj6);
    const obj10 = { theme: constants5.DARK, children: null };
    const obj11 = { style: null, children: null };
    const items5 = [tmp4.container, ];
    const obj12 = { paddingTop: top + tmp5(tmp2[40]).NAV_BAR_HEIGHT, paddingBottom: bottom };
    items5[1] = obj12;
    obj11.style = items5;
    const obj13 = { invite: stateFromStores, guildTemplate: stateFromStores1, inlineButtons: null };
    let tmp21 = null;
    if (tmp3) {
      tmp21 = tmp15Result;
    }
    obj13.inlineButtons = tmp21;
    const items6 = [closure_19(Centerpiece, obj13), , ];
    let tmp22 = !tmp3;
    if (!tmp3) {
      tmp22 = tmp15Result;
    }
    items6[1] = tmp22;
    items6[2] = closure_19(tmp5(tmp2[41]).TTIFirstContentfulPaint, { label: "welcome" });
    obj11.children = items6;
    obj10.children = closure_20(closure_4, obj11);
    return closure_19(tmp5(tmp2[39]).ThemeContextProvider, obj10);
  }
  tmp9 = require("useShouldShowChooseAccount")();
};