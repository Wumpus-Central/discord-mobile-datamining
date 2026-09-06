// discord_app/modules/auth/native/components/Welcome.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import Link from "../../../../../_runtime/01484_Link.js";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import TTIAnalyticsUtils from "../../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import GuildInviteIconDefault from "../../../guild/native/GuildInviteIcon.tsx";
import _modDef13219 from "../../../../../_runtime/metro/13219__.js";
import _mod13862 from "../../../../../_runtime/metro/13862__.js";
import RegistrationStepsUtils from "../RegistrationStepsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AgeGateStore from "../../../age_gate/AgeGateStore.tsx";
import ExperimentStore from "../../../experiments/ExperimentStore.tsx";
import GuildTemplateStore from "../../../guild_templates/GuildTemplateStore.tsx";
import MultiAccountStore from "../../../multi_account/MultiAccountStore.tsx";
import UserRecord from "../../../../records/UserRecord.tsx";
import InviteStore from "../../../../stores/InviteStore.tsx";
import DisplayedInviteStore from "../../../../stores/native/DisplayedInviteStore.tsx";

const Storage2 = tmp(510);
require = fn;
function InviteCard(invite) {
  invite = invite.invite;
  const tmp = closure_23();
  ({ guild, inviter } = invite);
  if (invite.state !== constants4.RESOLVED) {
    return null;
  } else {
    if (null != guild) {
      let obj = { guild };
      let tmp14 = closure_1_20(GuildInviteIconDefault, obj);
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["3rE1P8"]);
      let name = guild.name;
      let tmp17 = require;
      let tmp18 = closure_1_20;
    } else if (null != tmp2) {
      _modDef38(null != inviter, "Null inviter");
      obj = { user: null, guildId: "a" };
      const tmp12 = new UserRecord(inviter);
      obj.user = tmp12;
      tmp14 = closure_1_20(native.Avatar, obj);
      const intl = util.intl;
      stringResult = intl.string(util.t.OsdY8B);
      let obj1 = UserUtilsDefault;
      name = obj1.getFormattedName(inviter);
      tmp17 = require;
      tmp18 = closure_1_20;
    } else if (null == inviter) {
      return null;
    } else {
      obj = { user: null, guildId: "a" };
      const tmp33 = new UserRecord(inviter);
      obj.user = tmp33;
      const intl3 = util.intl;
      stringResult = intl3.string(util.t["+ITYkQ"]);
      const tmp35 = closure_1_20(native.Avatar, obj);
      name = UserUtilsDefault.getFormattedName(inviter, true);
      tmp14 = tmp35;
      tmp17 = require;
      tmp18 = closure_1_20;
    }
    obj1 = { style: null, children: null };
    const items = [tmp.container, invite.style];
    obj1.style = items;
    const items1 = [tmp14];
    const obj2 = { style: tmp.text, children: null };
    const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: stringResult };
    const items2 = [tmp18(tmp17(4556).Text, obj3)];
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
    items2[1] = tmp18(tmp17(4556).Text, obj4);
    obj2.children = items2;
    items1[1] = __initData(React4, obj2);
    obj1.children = items1;
    return __initData(React4, obj1);
  }
}
function GuildTemplateCard(arg0) {
  ({ guildTemplate, style } = arg0);
  const tmp = closure_23();
  let obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  obj = { source: _modDef13219 };
  const items1 = [closure_1_20(hasOwnProperty, obj)];
  obj = { style: tmp.text, children: null };
  const obj1 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t.QzUORX);
  const items2 = [
    closure_1_20(Text_Text.Text, obj1),
    closure_1_20(Text_Text.Text, {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: guildTemplate.name,
    }),
  ];
  obj.children = items2;
  items1[1] = __initData(React4, obj);
  obj.children = items1;
  return __initData(React4, obj);
}
function Centerpiece(inlineButtons) {
  ({ invite, guildTemplate } = inlineButtons);
  const tmp2 = useIsWindowLargeDefault();
  const tmp3 = closure_22(tmp2);
  let tmp7 = null != guildTemplate;
  if (tmp7) {
    tmp7 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  let obj = { style: null, children: null };
  const items = [tmp3.centerpieceContainer];
  obj.style = items;
  obj = { alwaysBounceVertical: false, contentContainerStyle: tmp3.scrollViewContainer, children: null };
  obj = { style: tmp3.logo, source: _mod13862 };
  const items1 = [closure_1_20(hasOwnProperty, obj), ,];
  const obj1 = {
    style: tmp3.header,
    lineClamp: null,
    variant: "display-md",
    color: "text-overlay-light",
    maxFontSizeMultiplier: 1,
    children: null,
  };
  let num = 2;
  if (tmp2) {
    num = 1;
  }
  obj1.lineClamp = num;
  const intl = tmp4(1114).intl;
  obj1.children = intl.string(util.t["3S2xmm"]);
  const items2 = [closure_1_20(Text_Text.Heading, obj1), , ,];
  const items3 = [tmp3.subHeader];
  if (null != invite) {
    let subHeaderWithInvite = tmp3.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  const obj2 = {
    variant: "text-md/medium",
    color: "text-overlay-light",
    style: items3,
    maxFontSizeMultiplier: 3,
    children: null,
  };
  items3[1] = subHeaderWithInvite;
  const intl2 = tmp4(1114).intl;
  obj2.children = intl2.string(util.t.Gtcthl);
  items2[1] = closure_1_20(Text_Text.Text, obj2);
  let tmp9Result = null;
  if (null != invite) {
    const obj3 = { invite };
    tmp9Result = tmp9(InviteCard, obj3);
  }
  items2[2] = tmp9Result;
  tmp9Result = null;
  if (tmp7) {
    const obj4 = { guildTemplate };
    tmp9Result = tmp9(GuildTemplateCard, obj4);
  }
  items2[3] = tmp9Result;
  items1[1] = __initData(React4, { children: items2 });
  items1[2] = inlineButtons.inlineButtons;
  obj.children = items1;
  obj.children = __initData(timestampProducer, obj);
  return closure_1_20(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_14, StorageKeys: closure_15, AuthStates: closure_16, InviteStates: closure_17 } = Constants);
const GuildTemplateStates = fn(7326).GuildTemplateStates;
const InviteTypes = fn(7736).InviteTypes;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let createStyles = fn(4560);
let closure_22 = createStyles.createStyles((arg0) => {
  const obj = {
    container: { height: "100%", flex: 1, padding: 16 },
    logo: { flex: 0, width: 93, height: 70, tintColor: "white", alignSelf: "center", marginBottom: 24 },
    scrollViewContainer: { flexShrink: 0, flexGrow: 1, justifyContent: "center" },
    header: { textAlign: "center", marginBottom: 8, textTransform: "uppercase" },
    subHeader: null,
    subHeaderWithInvite: null,
    centerpieceContainer: null,
    buttonContainer: null,
  };
  let num = 300;
  if (arg0) {
    num = 480;
  }
  obj.subHeader = {
    fontSize: 18,
    textAlign: "center",
    alignSelf: "center",
    maxWidth: num,
    marginBottom: 24,
    marginHorizontal: 16,
  };
  obj.subHeaderWithInvite = { marginBottom: 16 };
  obj.centerpieceContainer = { flexGrow: 1, flexShrink: 1, justifyContent: "center" };
  obj.buttonContainer = { paddingHorizontal: 28, maxWidth: 480, alignSelf: "center", width: "100%" };
  return obj;
});
fn(4560);
createStyles = { container: null, text: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  padding: 16,
  flexDirection: "row",
  borderRadius: nativeDefault.radii.sm,
};
createStyles.container = createStyles;
createStyles.text = { marginLeft: 16 };
let closure_23 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default function Welcome() {
  const tmp3 = require("useIsWindowLarge")();
  const tmp4 = closure_22(tmp3);
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  ({ top, bottom } = require("useSafeAreaInsets")());
  let obj1 = require("initialize");
  const items = [DisplayedInviteStore];
  importDefault = obj1.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj2 = require("initialize");
  const items1 = [InviteStore];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_1) {
      invite = InviteStore.getInvite(tmp);
    }
    return invite;
  });
  let obj3 = require("initialize");
  const items2 = [GuildTemplateStore];
  const stateFromStores1 = obj3.useStateFromStores(items2, () =>
    GuildTemplateStore.getGuildTemplate(GuildTemplateStore.getDisplayedGuildTemplateCode()),
  );
  let obj4 = require("initialize");
  const items3 = [AgeGateStore];
  noop = obj4.useStateFromStores(items3, () => underageAnonymous.isUnderageAnonymous());
  let obj5 = require("initialize");
  const items4 = [MultiAccountStore];
  const stateFromStores2 = obj5.useStateFromStores(items4, () => MultiAccountStore.getHasLoggedInAccounts());
  let obj6 = require("initialize");
  const items5 = [MultiAccountStore];
  const stateFromStores3 = obj6.useStateFromStores(items5, () => MultiAccountStore.getCanUseMultiAccountMobile());
  require("useMountEffect")(() => {
    let obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed();
    const result = TTIAnalyticsUtils.trackAppLaunchCompleted();
    let tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != tmp5.type) {
        tmp6 = InviteTypes[tmp5.type];
      }
    }
    obj = { last_logout_ts: null, invite_type: null, guild_id: null, channel_id: null, invite_code: null };
    const Storage = Storage2.Storage;
    obj.last_logout_ts = Storage.get(constants2.LOGOUT_TIMESTAMP_KEY);
    obj.invite_type = tmp6;
    let id;
    if (stateFromStores != null) {
      const guild = tmp5.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    obj.guild_id = id;
    let id1;
    if (stateFromStores != null) {
      const channel = tmp5.channel;
      if (channel != null) {
        id1 = channel.id;
      }
    }
    obj.channel_id = id1;
    let code;
    if (stateFromStores != null) {
      code = tmp5.code;
    }
    obj.invite_code = code;
    AnalyticsUtilsDefault.track(constants.APP_LANDING_VIEWED, obj);
  });
  const effect = noop.useEffect(() => {
    const locationMetadata = closure_1(stateFromStores[31]).getLocationMetadata();
  }, []);
  require("useInitialValue")(ExperimentStore.hasLoadedExperiments);
  const effect1 = noop.useEffect(() => {});
  const effect2 = noop.useEffect(() => {});
  if (stateFromStores3) {
    if (stateFromStores2) {
      return closure_20(require("ChooseAccount"), {});
    }
  }
  obj = { style: tmp4.buttonContainer, children: null };
  obj = { children: null };
  obj1 = {
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
    text: null,
  };
  const intl = tmp5(tmp2[16]).intl;
  obj1.text = intl.string(require("util").t.pV8xeR);
  const items6 = [closure_20(require("components/Button/Button").Button, obj1)];
  obj2 = {
    size: "lg",
    variant: "secondary-overlay",
    onPress: function handlePressLogin() {
      navigation.navigate(constants3.LOGIN);
      AnalyticsUtilsDefault.track(constants.LOGIN_VIEWED, { source: "welcome" });
    },
    text: null,
  };
  const intl2 = tmp5(tmp2[16]).intl;
  obj2.text = intl2.string(require("util").t.dKhVQN);
  items6[1] = closure_20(require("components/Button/Button").Button, obj2);
  obj.children = items6;
  obj.children = closure_21(require("ButtonGroup").ButtonGroup, obj);
  const tmp19 = closure_20(closure_4, obj);
  obj3 = { style: null, children: null };
  const items7 = [tmp4.container];
  obj4 = { paddingTop: top + tmp5(tmp2[39]).NAV_BAR_HEIGHT, paddingBottom: bottom };
  items7[1] = obj4;
  obj3.style = items7;
  obj5 = { invite: stateFromStores, guildTemplate: stateFromStores1, inlineButtons: null };
  let tmp21 = null;
  if (tmp3) {
    tmp21 = tmp19;
  }
  obj5.inlineButtons = tmp21;
  const items8 = [closure_20(Centerpiece, obj5), ,];
  let tmp22 = !tmp3;
  if (!tmp3) {
    tmp22 = tmp19;
  }
  obj6 = { theme: "darker", children: null };
  items8[1] = tmp22;
  items8[2] = closure_20(require("TTIFirstContentfulPaint").TTIFirstContentfulPaint, { label: "welcome" });
  obj3.children = items8;
  obj6.children = closure_21(closure_4, obj3);
  return closure_20(require("native").ThemeContextProvider, obj6);
}
