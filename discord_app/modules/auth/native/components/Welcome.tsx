// discord_app/modules/auth/native/components/Welcome.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import nameFromUserDefault from "../../../../utils/UserUtils.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import renderDefault from "../../../guild/native/GuildInviteIcon.tsx";
import registerAssetDefault from "../../../../../_runtime/12886_registerAsset.js";
import registerAsset from "../../../../../_runtime/13488_registerAsset.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../age_gate/AgeGateStore.tsx";
import closure_8 from "../../../experiments/ExperimentStore.tsx";
import closure_9 from "../../../guild_templates/GuildTemplateStore.tsx";
import closure_10 from "../../../multi_account/MultiAccountStore.tsx";
import closure_11 from "../../../../records/UserRecord.tsx";
import closure_12 from "../../../../stores/InviteStore.tsx";
import closure_13 from "../../../../stores/native/DisplayedInviteStore.tsx";
import ME from "../../../../Constants.tsx";
import { GuildTemplateStates } from "../../../guild_templates/GuildTemplatesConstants.tsx";
import { InviteTypes } from "../../../instant_invite/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function InviteCard(invite) {
  invite = invite.invite;
  const tmp = callback4();
  ({ guild, inviter } = invite);
  if (invite.state !== constants.RESOLVED) {
    return null;
  } else {
    if (null != guild) {
      let obj = { guild: null };
      obj[0] = guild;
      let tmp14 = callback(renderDefault, obj);
      const intl2 = getSystemLocale.intl;
      let stringResult = intl2.string(getSystemLocale.t["3rE1P8"]);
      let name = guild.name;
      let tmp17 = require;
      let tmp18 = callback;
    } else if (null != tmp2) {
      _modDef38(null != inviter, "Null inviter");
      obj = { user: null, guildId: "a" };
      const tmp12 = new closure_11(inviter);
      obj[0] = tmp12;
      tmp14 = callback(Button.Avatar, obj);
      const intl = getSystemLocale.intl;
      stringResult = intl.string(getSystemLocale.t.OsdY8B);
      obj1 = nameFromUserDefault;
      name = obj1.getFormattedName(inviter);
      tmp17 = require;
      tmp18 = callback;
    } else if (null == inviter) {
      return null;
    } else {
      obj = { user: null, guildId: "a" };
      const tmp33 = new closure_11(inviter);
      obj[0] = tmp33;
      const intl3 = getSystemLocale.intl;
      stringResult = intl3.string(getSystemLocale.t["+ITYkQ"]);
      const tmp35 = callback(Button.Avatar, obj);
      name = nameFromUserDefault.getFormattedName(inviter, true);
      tmp14 = tmp35;
      tmp17 = require;
      tmp18 = callback;
      const obj9 = nameFromUserDefault;
    }
    obj1 = { style: null, children: null };
    const items = [tmp.container, invite.style];
    obj1[0] = items;
    const items1 = [tmp14, ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.text;
    const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    obj3[2] = stringResult;
    const items2 = [tmp18(tmp17(4440).Text, obj3), ];
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj4[2] = name;
    items2[1] = tmp18(tmp17(4440).Text, obj4);
    obj2[1] = items2;
    items1[1] = callback2(closure_4, obj2);
    obj1[1] = items1;
    return callback2(closure_4, obj1);
  }
}
function GuildTemplateCard(arg0) {
  ({ guildTemplate, style } = arg0);
  const tmp = callback4();
  let obj = { style: items, children: null };
  items = [tmp.container, style];
  obj = { source: registerAssetDefault };
  const items1 = [callback(closure_5, obj), ];
  obj = { style: tmp.text, children: null };
  obj1 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl = getSystemLocale.intl;
  obj1[2] = intl.string(getSystemLocale.t.QzUORX);
  const items2 = [callback(Text.Text, obj1), callback(Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name })];
  obj[1] = items2;
  items1[1] = callback2(closure_4, obj);
  obj[1] = items1;
  return callback2(closure_4, obj);
}
function Centerpiece(inlineButtons) {
  ({ invite, guildTemplate } = inlineButtons);
  const tmp2 = useIsWindowLargeDefault();
  const tmp3 = callback3(tmp2);
  let tmp7 = null != guildTemplate;
  if (tmp7) {
    tmp7 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  let obj = { style: items, children: null };
  items = [tmp3.centerpieceContainer];
  obj = { alwaysBounceVertical: false, contentContainerStyle: tmp3.scrollViewContainer, children: null };
  obj = { style: tmp3.logo, source: registerAsset };
  const items1 = [callback(closure_5, obj), , ];
  obj1 = { style: tmp3.header, lineClamp: null, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: null };
  let num = 2;
  if (tmp2) {
    num = 1;
  }
  obj1[1] = num;
  const intl = tmp4(1236).intl;
  obj1[5] = intl.string(getSystemLocale.t["3S2xmm"]);
  const items2 = [callback(Text.Heading, obj1), , , ];
  const items3 = [tmp3.subHeader, ];
  if (null != invite) {
    let subHeaderWithInvite = tmp3.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  const obj2 = { variant: "text-md/medium", color: "text-overlay-light", style: items3, maxFontSizeMultiplier: 3, children: null };
  items3[1] = subHeaderWithInvite;
  const intl2 = tmp4(1236).intl;
  obj2[4] = intl2.string(getSystemLocale.t.Gtcthl);
  items2[1] = callback(Text.Text, obj2);
  let tmp9Result = null;
  if (null != invite) {
    const obj3 = { invite: null };
    obj3[0] = invite;
    tmp9Result = tmp9(InviteCard, obj3);
  }
  items2[2] = tmp9Result;
  tmp9Result = null;
  if (tmp7) {
    const obj4 = { guildTemplate: null };
    obj4[0] = guildTemplate;
    tmp9Result = tmp9(GuildTemplateCard, obj4);
  }
  items2[3] = tmp9Result;
  items1[1] = closure_21(closure_4, { children: items2 });
  items1[2] = inlineButtons.inlineButtons;
  obj[2] = items1;
  obj[1] = closure_21(closure_6, obj);
  return callback(closure_4, obj);
}
({ View: c4, Image: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, StorageKeys: closure_15, AuthStates: closure_16, InviteStates: closure_17 } = ME);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let closure_22 = createCacheKey.createStyles((arg0) => {
  const obj = { container: { height: "100%", flex: 1, padding: 16 }, logo: { flex: 0, width: 93, height: 70, tintColor: "white", alignSelf: "center", marginBottom: 24 }, scrollViewContainer: { flexShrink: 0, flexGrow: 1, justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8, textTransform: "uppercase" }, subHeader: null, subHeaderWithInvite: null, centerpieceContainer: null, buttonContainer: null };
  let num = 300;
  if (arg0) {
    num = 480;
  }
  obj[4] = { fontSize: 18, textAlign: "center", alignSelf: "center", maxWidth: num, marginBottom: 24, marginHorizontal: 16 };
  obj[5] = { marginBottom: 16 };
  obj[6] = { flexGrow: 1, flexShrink: 1, justifyContent: "center" };
  obj[7] = { paddingHorizontal: 28, maxWidth: 480, alignSelf: "center", width: "100%" };
  return obj;
});
createCacheKey = { container: null, text: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, flexDirection: "row", borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: 16 };
let closure_23 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default function Welcome() {
  const tmp3 = importDefault(stateFromStores[22])();
  const tmp4 = callback3(tmp3);
  let obj = _require(stateFromStores[24]);
  _require = obj.useNavigation();
  ({ top, bottom } = importDefault(stateFromStores[25])());
  obj1 = _require(stateFromStores[26]);
  const items = [closure_13];
  importDefault = obj1.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj2 = _require(stateFromStores[26]);
  const items1 = [closure_12];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_1) {
      invite = closure_1_12.getInvite(tmp);
    }
    return invite;
  });
  let obj3 = _require(stateFromStores[26]);
  const items2 = [closure_9];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => store.getGuildTemplate(store.getDisplayedGuildTemplateCode()));
  let obj4 = _require(stateFromStores[26]);
  const items3 = [closure_7];
  const React = obj4.useStateFromStores(items3, () => underageAnonymous.isUnderageAnonymous());
  let obj5 = _require(stateFromStores[26]);
  const items4 = [closure_10];
  const stateFromStores2 = obj5.useStateFromStores(items4, () => store2.getHasLoggedInAccounts());
  let obj6 = _require(stateFromStores[26]);
  const items5 = [closure_10];
  const stateFromStores3 = obj6.useStateFromStores(items5, () => store2.getCanUseMultiAccountMobile());
  importDefault(stateFromStores[27])(() => {
    let obj = navigation(stateFromStores[28]);
    obj.trackAppUIViewed();
    const result = navigation(stateFromStores[28]).trackAppLaunchCompleted();
    let tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != tmp5.type) {
        tmp6 = closure_1_19[tmp5.type];
      }
    }
    const obj2 = navigation(stateFromStores[28]);
    const tmp = navigation;
    obj = { last_logout_ts: null, invite_type: null, guild_id: null, channel_id: null, invite_code: null };
    const Storage = tmp(tmp2[30]).Storage;
    obj[0] = Storage.get(closure_1_15.LOGOUT_TIMESTAMP_KEY);
    obj[1] = tmp6;
    let id;
    if (stateFromStores != null) {
      const guild = tmp5.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    obj[2] = id;
    let id1;
    if (stateFromStores != null) {
      const channel = tmp5.channel;
      if (channel != null) {
        id1 = channel.id;
      }
    }
    obj[3] = id1;
    let code;
    if (stateFromStores != null) {
      code = tmp5.code;
    }
    obj[4] = code;
    callback(stateFromStores[29]).track(closure_1_14.APP_LANDING_VIEWED, obj);
  });
  const effect = React.useEffect(() => {
    const locationMetadata = callback(stateFromStores[31]).getLocationMetadata();
  }, []);
  importDefault(stateFromStores[32])(hasLoadedExperiments.hasLoadedExperiments);
  const effect1 = React.useEffect(() => {

  });
  const effect2 = React.useEffect(() => {

  });
  if (stateFromStores3) {
    if (stateFromStores2) {
      return callback(importDefault(tmp2[33]), {});
    }
  }
  obj = { style: tmp4.buttonContainer, children: null };
  obj = { children: null };
  obj1 = {
    size: "lg",
    variant: "primary-overlay",
    onPress: function handlePressRegister() {
      if (closure_3) {
        navigation.navigate(closure_1_16.AGE_GATE_UNDERAGE, { fromRegister: true });
      } else {
        const nextAuthState = navigation(stateFromStores[34]).getNextAuthState(closure_1_16.WELCOME);
        const CommonActions = navigation(stateFromStores[35]).CommonActions;
        navigation.dispatch(CommonActions.navigate(nextAuthState));
        const obj = navigation(stateFromStores[34]);
        callback(stateFromStores[29]).track(closure_1_14.REGISTER_VIEWED);
        const obj2 = callback(stateFromStores[29]);
      }
    },
    text: null
  };
  const intl = tmp5(tmp2[16]).intl;
  obj1[3] = intl.string(_require(stateFromStores[16]).t.pV8xeR);
  const items6 = [callback(_require(stateFromStores[37]).Button, obj1), ];
  obj2 = {
    size: "lg",
    variant: "secondary-overlay",
    onPress: function handlePressLogin() {
      navigation.navigate(closure_1_16.LOGIN);
      callback(stateFromStores[29]).track(closure_1_14.LOGIN_VIEWED, { source: "welcome" });
    },
    text: null
  };
  const intl2 = tmp5(tmp2[16]).intl;
  obj2[3] = intl2.string(_require(stateFromStores[16]).t.dKhVQN);
  items6[1] = callback(_require(stateFromStores[37]).Button, obj2);
  obj[0] = items6;
  obj[1] = callback2(_require(stateFromStores[36]).ButtonGroup, obj);
  const tmp19 = callback(closure_4, obj);
  obj3 = { style: null, children: null };
  const items7 = [tmp4.container, ];
  obj4 = { paddingTop: top + tmp5(tmp2[39]).NAV_BAR_HEIGHT, paddingBottom: bottom };
  items7[1] = obj4;
  obj3[0] = items7;
  obj5 = { invite: stateFromStores, guildTemplate: stateFromStores1, inlineButtons: null };
  let tmp21 = null;
  if (tmp3) {
    tmp21 = tmp19;
  }
  obj5[2] = tmp21;
  const items8 = [callback(Centerpiece, obj5), , ];
  let tmp22 = !tmp3;
  if (!tmp3) {
    tmp22 = tmp19;
  }
  obj6 = { theme: "darker", children: null };
  items8[1] = tmp22;
  items8[2] = callback(_require(stateFromStores[40]).TTIFirstContentfulPaint, { label: "welcome" });
  obj3[1] = items8;
  obj6[1] = callback2(closure_4, obj3);
  return callback(_require(stateFromStores[38]).ThemeContextProvider, obj6);
};