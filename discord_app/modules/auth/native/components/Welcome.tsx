// discord_app/modules/auth/native/components/Welcome.tsx
import nameFromUser from "nameFromUser";
import get_ActivityIndicator from "module_38";
import isUnderageAnonymous from "isUnderageAnonymous";
import getHash from "getHash";
import handleGuildTemplateResolveSuccess from "handleGuildTemplateResolveSuccess";
import initialize from "initialize";
import createdAt from "createdAt";
import updateInvite from "updateInvite";
import getDisplayedInviteCode from "getDisplayedInviteCode";
import ME from "ME";
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";
import { InviteTypes } from "InviteSendStates";
import jsxProd from "registerAsset";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_20;
let closure_21;
let closure_6;
const require = arg1;
function InviteCard(invite) {
  let guild;
  let inviter;
  invite = invite.invite;
  const tmp = createCacheKey();
  ({ guild, inviter } = invite);
  if (invite.state !== constants.RESOLVED) {
    return null;
  } else {
    if (null != guild) {
      let obj = { guild: null };
      obj[0] = guild;
      let tmp14 = callback(importDefault(11928), obj);
      const intl2 = require(1236) /* getSystemLocale */.intl;
      let stringResult = intl2.string(require(1236) /* getSystemLocale */.t["3rE1P8"]);
      let name = guild.name;
      let tmp17 = require;
      let tmp18 = callback;
    } else if (null != tmp2) {
      importDefault(38)(null != inviter, "Null inviter");
      obj = { user: null, guildId: "a" };
      const tmp12 = new createdAt(inviter);
      obj[0] = tmp12;
      tmp14 = callback(require(1297) /* Button */.Avatar, obj);
      const intl = require(1236) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1236) /* getSystemLocale */.t.OsdY8B);
      let obj1 = importDefault(4124);
      name = obj1.getFormattedName(inviter);
      tmp17 = require;
      tmp18 = callback;
    } else if (null == inviter) {
      return null;
    } else {
      obj = { user: null, guildId: "a" };
      const tmp33 = new createdAt(inviter);
      obj[0] = tmp33;
      const intl3 = require(1236) /* getSystemLocale */.intl;
      stringResult = intl3.string(require(1236) /* getSystemLocale */.t["+ITYkQ"]);
      const tmp35 = callback(require(1297) /* Button */.Avatar, obj);
      name = importDefault(4124).getFormattedName(inviter, true);
      tmp14 = tmp35;
      tmp17 = require;
      tmp18 = callback;
      const obj9 = importDefault(4124);
    }
    obj1 = { style: null, children: null };
    const items = [tmp.container, invite.style];
    obj1[0] = items;
    const items1 = [tmp14, ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.text;
    const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    obj3[2] = stringResult;
    const items2 = [tmp18(tmp17(4281).Text, obj3), ];
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj4[2] = name;
    items2[1] = tmp18(tmp17(4281).Text, obj4);
    obj2[1] = items2;
    items1[1] = callback2(closure_4, obj2);
    obj1[1] = items1;
    return callback2(closure_4, obj1);
  }
}
function GuildTemplateCard(arg0) {
  let guildTemplate;
  let style;
  ({ guildTemplate, style } = arg0);
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [tmp.container, style];
  obj = { source: importDefault(12514) };
  const items1 = [callback(closure_5, obj), ];
  obj = { style: tmp.text, children: null };
  const obj1 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[2] = intl.string(require(1236) /* getSystemLocale */.t.QzUORX);
  const items2 = [callback(require(4281) /* Text */.Text, obj1), callback(require(4281) /* Text */.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name })];
  obj[1] = items2;
  items1[1] = callback2(closure_4, obj);
  obj[1] = items1;
  return callback2(closure_4, obj);
}
function Centerpiece(inlineButtons) {
  let guildTemplate;
  let invite;
  ({ invite, guildTemplate } = inlineButtons);
  const tmp2 = importDefault(7562)();
  const tmp3 = callback3(tmp2);
  let tmp7 = null != guildTemplate;
  if (tmp7) {
    tmp7 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  let obj = { style: items, children: null };
  items = [tmp3.centerpieceContainer];
  obj = { alwaysBounceVertical: false, contentContainerStyle: tmp3.scrollViewContainer, children: null };
  obj = { style: tmp3.logo, source: require(13116) /* registerAsset */ };
  const items1 = [callback(closure_5, obj), , ];
  const obj1 = { style: tmp3.header, lineClamp: null, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: null };
  let num = 2;
  if (tmp2) {
    num = 1;
  }
  obj1[1] = num;
  const intl = tmp4(1236).intl;
  obj1[5] = intl.string(require(1236) /* getSystemLocale */.t["3S2xmm"]);
  const items2 = [callback(require(4281) /* Text */.Heading, obj1), , , ];
  const items3 = [tmp3.subHeader, ];
  if (null != invite) {
    let subHeaderWithInvite = tmp3.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  const obj2 = { variant: "text-md/medium", color: "text-overlay-light", style: items3, maxFontSizeMultiplier: 3, children: null };
  items3[1] = subHeaderWithInvite;
  const intl2 = tmp4(1236).intl;
  obj2[4] = intl2.string(require(1236) /* getSystemLocale */.t.Gtcthl);
  items2[1] = callback(require(4281) /* Text */.Text, obj2);
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
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, padding: 16, flexDirection: "row", borderRadius: require("Themes").radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("isUnderageAnonymous").fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default function Welcome() {
  let bottom;
  let top;
  const tmp3 = importDefault(stateFromStores[22])();
  const tmp4 = callback3(tmp3);
  let obj = _require(stateFromStores[24]);
  _require = obj.useNavigation();
  ({ top, bottom } = importDefault(stateFromStores[25])());
  let obj1 = _require(stateFromStores[26]);
  const items = [getDisplayedInviteCode];
  importDefault = obj1.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj2 = _require(stateFromStores[26]);
  const items1 = [updateInvite];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_1) {
      invite = outer1_12.getInvite(tmp);
    }
    return invite;
  });
  let obj3 = _require(stateFromStores[26]);
  const items2 = [handleGuildTemplateResolveSuccess];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => store.getGuildTemplate(store.getDisplayedGuildTemplateCode()));
  let obj4 = _require(stateFromStores[26]);
  const items3 = [isUnderageAnonymous];
  const React = obj4.useStateFromStores(items3, () => underageAnonymous.isUnderageAnonymous());
  let obj5 = _require(stateFromStores[26]);
  const items4 = [initialize];
  const stateFromStores2 = obj5.useStateFromStores(items4, () => store2.getHasLoggedInAccounts());
  let obj6 = _require(stateFromStores[26]);
  const items5 = [initialize];
  const stateFromStores3 = obj6.useStateFromStores(items5, () => store2.getCanUseMultiAccountMobile());
  importDefault(stateFromStores[27])(() => {
    let obj = arr(stateFromStores[28]);
    obj.trackAppUIViewed();
    const result = arr(stateFromStores[28]).trackAppLaunchCompleted();
    let tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != tmp5.type) {
        tmp6 = outer1_19[tmp5.type];
      }
    }
    const obj2 = arr(stateFromStores[28]);
    const tmp = arr;
    obj = { last_logout_ts: null, invite_type: null, guild_id: null, channel_id: null, invite_code: null };
    const Storage = tmp(tmp2[30]).Storage;
    obj[0] = Storage.get(outer1_15.LOGOUT_TIMESTAMP_KEY);
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
    callback(stateFromStores[29]).track(outer1_14.APP_LANDING_VIEWED, obj);
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
      if (nameFromUser) {
        arr = arr.push(outer1_16.AGE_GATE_UNDERAGE, { fromRegister: true });
      } else {
        arr = arr.push(arr(stateFromStores[34]).getNextAuthState(outer1_16.WELCOME));
        const obj = arr(stateFromStores[34]);
        callback(stateFromStores[29]).track(outer1_14.REGISTER_VIEWED);
        const obj2 = callback(stateFromStores[29]);
      }
    },
    text: null
  };
  const intl = tmp5(tmp2[16]).intl;
  obj1[3] = intl.string(_require(stateFromStores[16]).t.pV8xeR);
  const items6 = [callback(_require(stateFromStores[36]).Button, obj1), ];
  obj2 = {
    size: "lg",
    variant: "secondary-overlay",
    onPress: function handlePressLogin() {
      arr = arr.push(outer1_16.LOGIN);
      callback(stateFromStores[29]).track(outer1_14.LOGIN_VIEWED, { source: "welcome" });
    },
    text: null
  };
  const intl2 = tmp5(tmp2[16]).intl;
  obj2[3] = intl2.string(_require(stateFromStores[16]).t.dKhVQN);
  items6[1] = callback(_require(stateFromStores[36]).Button, obj2);
  obj[0] = items6;
  obj[1] = callback2(_require(stateFromStores[35]).ButtonGroup, obj);
  const tmp19 = callback(closure_4, obj);
  obj3 = { style: null, children: null };
  const items7 = [tmp4.container, ];
  obj4 = { paddingTop: null, paddingBottom: null };
  obj4[0] = top + _require(stateFromStores[38]).NAV_BAR_HEIGHT;
  obj4[1] = bottom;
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
  items8[2] = callback(_require(stateFromStores[39]).TTIFirstContentfulPaint, { label: "welcome" });
  obj3[1] = items8;
  obj6[1] = callback2(closure_4, obj3);
  return callback(_require(stateFromStores[37]).ThemeContextProvider, obj6);
};