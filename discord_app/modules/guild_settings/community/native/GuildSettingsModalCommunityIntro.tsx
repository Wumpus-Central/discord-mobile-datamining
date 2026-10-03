// === Module 17806: GuildSettingsModalCommunityIntro ===

// Module 17806 (GuildSettingsModalCommunityIntro)
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4812 */;
import Text_Text from "Text/Text" /* 4886 */;
import LightbulbIcon from "LightbulbIcon" /* 9957 */;
import AnalyticsIcon from "AnalyticsIcon" /* 10108 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 17811 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;

const require = globalThis.__r;

require = fn;
function communityFeatures() {
  const obj = {
    icon() {
      return closure_1_14(AnalyticsIcon.AnalyticsIcon, { color: nativeDefault.unsafe_rawColors.GREEN_360 });
    },
    header: null,
    body: null
  };
  const intl = util.intl;
  obj.header = intl.string(util.t.oVQF2y);
  const intl2 = util.intl;
  obj.body = intl2.format(util.t.A6G7ak, {
    featureHook(children, arg1) {
      return closure_1_14(Text_Text.Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
    }
  });
  const items = [obj, , ];
  const obj3 = {
    icon() {
      return closure_1_14(LightbulbIcon.LightbulbIcon, { color: nativeDefault.unsafe_rawColors.YELLOW_300 });
    },
    header: null,
    body: null
  };
  const intl3 = util.intl;
  obj3.header = intl3.string(util.t["0rJl9y"]);
  const intl4 = util.intl;
  obj3.body = intl4.format(util.t.XsCNky, {
    infoHook() {
      return null;
    },
    featureHook(children, arg1) {
      return closure_1_14(Text_Text.Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children }, arg1);
    }
  });
  items[1] = obj3;
  const obj5 = {
    icon() {
      return closure_1_14(CircleInformationIcon.CircleInformationIcon, { color: nativeDefault.unsafe_rawColors.PLATFORM_PARTNER });
    },
    header: null,
    body: null
  };
  const intl5 = util.intl;
  obj5.header = intl5.string(util.t.W2kLJC);
  const intl6 = util.intl;
  obj5.body = intl6.string(util.t.hyNkHz);
  items[2] = obj5;
  return items;
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ HelpdeskArticles: c10, GuildFeatures: closure_11, GuildSettingsSections: closure_12, Permissions: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { height: "100%" }, contentPadding: { padding: 16 }, header: { textAlign: "center", marginBottom: 8 }, body: { textAlign: "center", marginBottom: 24 }, details: { textAlign: "center", marginTop: 24 }, headerImage: { width: "100%" }, features: { marginTop: 32, marginBottom: 32 }, featureCard: { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, flex: 1, flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.sm, marginTop: 8, alignItems: "flex-start" }, featureIcon: null, featureDescription: null };
let obj3 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, flex: 1, flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.sm, marginTop: 8, alignItems: "flex-start" };
obj2.featureIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 40, marginRight: 16, padding: 8 };
obj2.featureDescription = { overflow: "hidden", flex: 1 };
let closure_17 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ icon, header, body } = arg0);
  const tmp4 = closure_17();
  ({ featureCard, featureIcon } = tmp4);
  if (cResult[0] !== icon) {
    const iconResult = icon();
    cResult[0] = icon;
    cResult[1] = iconResult;
    let tmp5 = iconResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.featureIcon) {
    if (cResult[3] === tmp5) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] !== header) {
      const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: header };
      const tmp11 = state(Text_Text.Heading, obj2);
      cResult[5] = header;
      cResult[6] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] !== body) {
      const obj3 = { variant: "text-sm/medium", color: "text-default", children: body };
      const tmp14 = state(Text_Text.Text, obj3);
      cResult[7] = body;
      cResult[8] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === tmp4.featureDescription) {
      if (cResult[10] === tmp9) {
        if (cResult[11] === tmp12) {
          let tmp15 = cResult[12];
        }
        if (cResult[13] === tmp4.featureCard) {
          if (cResult[14] === tmp7) {
            if (cResult[15] === tmp15) {
              let tmp19 = cResult[16];
            }
            return tmp19;
          }
        }
        const obj4 = { style: featureCard, children: null };
        const items = [tmp7, tmp15];
        obj4.children = items;
        const tmp22 = closure_1_15(React4, obj4);
        cResult[13] = tmp4.featureCard;
        cResult[14] = tmp7;
        cResult[15] = tmp15;
        cResult[16] = tmp22;
        tmp19 = tmp22;
      }
    }
    const obj5 = { style: tmp4.featureDescription, children: null };
    const items1 = [tmp9, tmp12];
    obj5.children = items1;
    const tmp18 = closure_1_15(React4, obj5);
    cResult[9] = tmp4.featureDescription;
    cResult[10] = tmp9;
    cResult[11] = tmp12;
    cResult[12] = tmp18;
    tmp15 = tmp18;
  }
  const tmp8 = state(React4, { style: featureIcon, children: tmp5 });
  cResult[2] = tmp4.featureIcon;
  cResult[3] = tmp5;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((arg0) => {
  ({ icon, header, body } = arg0);
  const tmp = closure_17();
  const obj = { style: tmp.featureCard, children: null };
  const items = [state(React4, { style: tmp.featureIcon, children: icon() }), ];
  const obj3 = { style: tmp.featureDescription, children: null };
  const items1 = [state(Text_Text.Heading, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: header }), state(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: body })];
  obj3.children = items1;
  items[1] = closure_1_15(React4, obj3);
  obj.children = items;
  return closure_1_15(React4, obj);
});
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 40, marginRight: 16, padding: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(navigation[15]).c(54);
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  closure_17();
  let obj = guildId(navigation[15]);
  navigation = guildId(navigation[16]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class I {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
    cResult[1] = guildId;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
  }
  let obj2 = guildId(navigation[16]);
  const stateFromStores = guildId(navigation[17]).useStateFromStores(first, I);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
    const items1 = [PermissionStore];
    cResult[3] = items1;
    const tmp10 = items1;
  } else {
    class I {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
  }
  if (cResult[4] !== stateFromStores) {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = F;
  } else {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
  }
  const tmpResult = guildId(navigation[17]);
  const stateFromStores1 = guildId(navigation[17]).useStateFromStores(tmp10, F);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
    const items2 = [GuildSettingsStore];
    class H {
      constructor() {
        return closure_1_9.isSubmitting();
      }
    }
    cResult[6] = items2;
    cResult[7] = H;
    let tmp14 = H;
    const tmp13 = items2;
  } else {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
    tmp14 = cResult[7];
  }
  const tmpResult3 = guildId(navigation[17]);
  const stateFromStores2 = guildId(navigation[17]).useStateFromStores(tmp13, tmp14);
  if (stateFromStores != null) {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
  }
  if (cResult[8] === undefined) {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
  }
  if (stateFromStores != null) {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
  }
  class Y {
    constructor() {
      tmp = !closure_5;
      if (!closure_5) {
        tmp2 = null;
        hasItem = undefined;
        if (closure_3 != null) {
          features = closure_3.features;
          tmp4 = GuildFeatures;
          hasItem = features.has(GuildFeatures.COMMUNITY);
        }
        tmp = hasItem;
      }
      if (tmp) {
        tmp5 = closure_1;
        tmp6 = closure_2;
        obj = closure_1(closure_2[18]);
        waitResult = obj.wait(() => { ... });
        tmp8 = closure_2;
        tmp9 = GuildSettingsSections;
        obj1 = { onClose: null };
        tmp10 = onClose;
        obj1.onClose = onClose;
        replaced = closure_2.replace(GuildSettingsSections.COMMUNITY, obj1);
      }
      return;
    }
  }
  cResult[8] = undefined;
  cResult[9] = stateFromStores2;
  cResult[10] = navigation;
  cResult[11] = onClose;
  cResult[12] = Y;
  const tmpResult4 = guildId(navigation[17]);
}) : ((contentContainerStyle) => {
  ({ guildId: require, onClose } = contentContainerStyle);
  let navigation;
  let tmp = closure_17();
  navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(require));
  let obj2 = require("initialize");
  const items1 = [PermissionStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = PermissionStore.can(constants4.ADMINISTRATOR, tmp);
    }
    return canResult;
  });
  const obj3 = require("initialize");
  const items2 = [GuildSettingsStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => submitting.isSubmitting());
  const items3 = [stateFromStores, stateFromStores2, navigation, onClose];
  const effect = stateFromStores.useEffect(() => {
    let tmp = !stateFromStores2;
    if (!stateFromStores2) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        hasItem = features.has(constants2.COMMUNITY);
      }
      tmp = hasItem;
    }
    if (tmp) {
      DispatcherDefault.wait(() => onClose(navigation[19]).setSection(constants.COMMUNITY));
      const obj2 = { onClose };
      const replaced = navigation.replace(constants3.COMMUNITY, obj2);
    }
  }, items3);
  const obj4 = require("initialize");
  const obj6 = { children: null };
  const obj7 = { style: tmp.container, contentContainerStyle: null, children: null };
  const items4 = [tmp.contentPadding, contentContainerStyle.contentContainerStyle];
  obj7.contentContainerStyle = items4;
  const obj5 = require("IntroHeader");
  const items5 = [closure_14(stateFromStores2, { resizeMode: "contain", source: require("IntroHeader").useIntroHeaderSource(), style: tmp.headerImage }), , , , , ];
  const obj9 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj9.children = intl.string(require("util").t["M/gBcA"]);
  items5[1] = closure_14(require("Text/Text").Heading, obj9);
  const obj10 = { style: tmp.body, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  const obj11 = { helpdeskArticle: null };
  const obj8 = { resizeMode: "contain", source: require("IntroHeader").useIntroHeaderSource(), style: tmp.headerImage };
  obj11.helpdeskArticle = onClose(navigation[23]).getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES);
  obj10.children = intl2.format(require("util").t["52EgsM"], obj11);
  items5[2] = closure_14(require("Text/Text").Text, obj10);
  const obj13 = { text: null, onPress: null, disabled: null };
  const intl3 = require("util").intl;
  obj13.text = intl3.string(require("util").t.LhlgY9);
  obj13.onPress = function onPress() {
    if (stateFromStores1) {
      EnableCommunityModalActionCreatorsDefault.open();
    } else {
      ToastUtils.communityAdminOnly();
    }
  };
  obj13.disabled = !stateFromStores1;
  items5[3] = closure_14(require("components/Button/Button").Button, obj13);
  const obj14 = { style: tmp.details, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = require("util").intl;
  obj14.children = intl4.string(require("util").t.HgTI2N);
  items5[4] = closure_14(require("Text/Text").Text, obj14);
  const obj15 = { style: tmp.features, children: null };
  const obj12 = onClose(navigation[23]);
  obj15.children = communityFeatures().map((item, index) => {
    const merged = Object.assign(item);
    return closure_1_14(closure_1_19, {}, index);
  });
  items5[5] = closure_14(stateFromStores1, obj15);
  obj7.children = items5;
  const items6 = [closure_15(closure_6, obj7), closure_14(require("NavScrim").NavScrim, {})];
  obj6.children = items6;
  return closure_15(closure_16, obj6);
});