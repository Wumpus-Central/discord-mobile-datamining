import items from "items";
import _slicedToArray from "_slicedToArray";
import registerAsset from "registerAsset";
import get_ActivityIndicator from "memoResult1";
import mergeGuildAvatar from "mergeGuildAvatar";
import { GuildTagBadgeSize } from "items";
import jsxProd from "PressableCard";
import createCacheKey from "createCacheKey";

let c10;
let closure_12;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
({ Image: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = { card: null, notice: null, message: null, unfocused: null, avatar: null, messageBody: null, usernameRow: null };
createCacheKey = { padding: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: require("Themes").space.PX_12 };
let obj1 = { marginBottom: require("Themes").space.PX_12 };
createCacheKey[2] = { flexDirection: "row", columnGap: require("Themes").space.PX_12, alignItems: "flex-start" };
createCacheKey[3] = { opacity: 0.5 };
let obj2 = { flexDirection: "row", columnGap: require("Themes").space.PX_12, alignItems: "flex-start" };
createCacheKey[4] = { width: 40, height: 40, borderRadius: require("Themes").radii.round };
createCacheKey[5] = { flex: 1 };
let obj3 = { width: 40, height: 40, borderRadius: require("Themes").radii.round };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", columnGap: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { flexDirection: "row", alignItems: "center", columnGap: require("Themes").space.PX_4 };
const result = require("noop").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPreview.tsx");

export default function GuildSettingsServerTagPreview(guildId) {
  let badge;
  let c2;
  let primaryColor;
  let secondaryColor;
  let tag;
  let tmp11;
  let variant;
  guildId = guildId.guildId;
  ({ tag, badge, primaryColor, secondaryColor, variant } = guildId);
  if (variant === undefined) {
    variant = "card";
  }
  const onAdopted = guildId.onAdopted;
  let dependencyMap;
  const tmp = createCacheKey();
  let obj = guildId(589);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = onAdopted(4383);
  const name = obj2.useName(guildId, null, stateFromStores);
  let obj3 = onAdopted(1416);
  let avatarURL;
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(guildId, 40);
  }
  let identityGuildId;
  const source = obj3.makeSource(avatarURL);
  if (stateFromStores != null) {
    const primaryGuild = stateFromStores.primaryGuild;
    if (primaryGuild != null) {
      identityGuildId = primaryGuild.identityGuildId;
    }
  }
  let isDirty = identityGuildId === guildId;
  if (isDirty) {
    let identityEnabled;
    if (stateFromStores != null) {
      const primaryGuild2 = stateFromStores.primaryGuild;
      if (primaryGuild2 != null) {
        identityEnabled = primaryGuild2.identityEnabled;
      }
    }
    isDirty = true === identityEnabled;
  }
  [tmp11, c2] = callback2(React.useState(false), 2);
  const items1 = [guildId, onAdopted];
  callback = React.useCallback(callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp5;
            let ok = tmp2;
            ok = undefined;
            dependencyMap(true);
            let obj1 = outer1_0(13072);
            dependencyMap = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.adoptGuildIdentity(outer1_0, true);
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          ok = arg1;
          dependencyMap(false);
          if (ok.ok) {
            if (callback != null) {
              callback();
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp19) {
        c3 = tmp;
        throw tmp19;
      }
    }
  }), items1);
  obj = { variant: "text-sm/medium", color: "text-muted", style: tmp.notice, children: null };
  const intl = tmp2(1236).intl;
  const string = intl.string;
  const t = tmp2(1236).t;
  if (isDirty) {
    let stringResult = string(t.hRsJ7T);
  } else {
    stringResult = string(t.OVvzY0);
  }
  obj[3] = stringResult;
  const items2 = [closure_10(guildId(4189).Text, obj), ];
  obj = { spacing: null, children: null };
  obj[0] = onAdopted(712).space.PX_12;
  let obj1 = { style: items3, children: null };
  items3 = [, ];
  ({ message: arr4[0], unfocused: arr4[1] } = tmp);
  obj2 = { source: tmp4(10336), style: tmp.avatar, importantForAccessibility: "no" };
  const items4 = [closure_10(closure_6, obj2), ];
  obj3 = { style: tmp.messageBody, children: null };
  const items5 = [closure_10(guildId(4189).Text, { variant: "text-md/semibold", color: "text-default", children: "Locke" }), ];
  const obj4 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = tmp2(1236).intl;
  obj4[2] = intl2.string(guildId(1236).t.KZQ4mF);
  items5[1] = closure_10(guildId(4189).Text, obj4);
  obj3[1] = items5;
  items4[1] = closure_11(closure_7, obj3);
  obj1[1] = items4;
  const items6 = [closure_11(closure_7, obj1), , , ];
  const obj5 = { style: tmp.message, children: null };
  const items7 = [closure_10(closure_6, { source, style: tmp.avatar, importantForAccessibility: "no" }), ];
  const obj7 = { style: tmp.messageBody, children: null };
  const obj8 = { style: tmp.usernameRow, children: null };
  const items8 = [closure_10(guildId(4189).Text, { variant: "text-md/semibold", color: "text-default", children: name }), ];
  let tmp15Result = null != tag;
  if (tmp15Result) {
    tmp15Result = "" !== tag;
  }
  if (tmp15Result) {
    const obj9 = { guildTag: null, guildBadge: null };
    obj9[0] = tag;
    tmp15Result = undefined;
    if (null != badge) {
      const obj10 = { badge: null, primaryTintColor: null, secondaryTintColor: null, width: null, height: null };
      obj10[0] = badge;
      obj10[1] = primaryColor;
      obj10[2] = secondaryColor;
      ({ SIZE_12: obj16[3], SIZE_12: obj16[4] } = GuildTagBadgeSize);
      tmp15Result = tmp15(tmp2(13073).GuildBadge, obj10);
    }
    obj9[1] = tmp15Result;
    tmp15Result = tmp15(tmp2(8462).BaseGuildTagChiplet, obj9);
  }
  items8[1] = tmp15Result;
  obj8[1] = items8;
  const items9 = [closure_11(closure_7, obj8), ];
  const obj11 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl3 = tmp2(1236).intl;
  obj11[2] = intl3.string(guildId(1236).t.LKsPRe);
  items9[1] = closure_10(guildId(4189).Text, obj11);
  obj7[1] = items9;
  items7[1] = closure_11(closure_7, obj7);
  obj5[1] = items7;
  items6[1] = closure_11(closure_7, obj5);
  const obj12 = { style: items10, children: null };
  items10 = [, ];
  ({ message: arr11[0], unfocused: arr11[1] } = tmp);
  const obj6 = { source, style: tmp.avatar, importantForAccessibility: "no" };
  const tmp10 = callback2(React.useState(false), 2);
  const tmp14 = closure_12;
  const tmp18 = closure_6;
  const items11 = [closure_10(tmp18, { source: onAdopted(13117), style: tmp.avatar, importantForAccessibility: "no" }), ];
  const obj14 = { style: tmp.messageBody, children: null };
  const items12 = [closure_10(guildId(4189).Text, { variant: "text-md/semibold", color: "text-default", children: "Phibi" }), ];
  const obj15 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl4 = tmp2(1236).intl;
  obj15[2] = intl4.string(guildId(1236).t.vtCg11);
  items12[1] = closure_10(guildId(4189).Text, obj15);
  obj14[1] = items12;
  items11[1] = closure_11(closure_7, obj14);
  obj12[1] = items11;
  items6[2] = closure_11(closure_7, obj12);
  const obj16 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
  const intl5 = tmp2(1236).intl;
  obj16[1] = intl5.string(guildId(1236).t.cQDYRu);
  obj16[2] = tmp11;
  if (!isDirty) {
    isDirty = tmp11;
  }
  if (!isDirty) {
    isDirty = guildId.isDirty;
  }
  if (!isDirty) {
    isDirty = null == tag;
  }
  if (!isDirty) {
    isDirty = "" === tag;
  }
  const obj17 = { children: null };
  obj16[3] = isDirty;
  obj16[4] = callback;
  items6[3] = closure_10(guildId(4604).Button, obj16);
  obj[1] = items6;
  items2[1] = closure_11(guildId(4602).Stack, obj);
  obj17[0] = items2;
  const tmp13Result = closure_11(tmp14, obj17);
  let tmp15Result1 = tmp13Result;
  if ("plain" !== variant) {
    const obj18 = { variant: "secondary", radius: 16, style: null, children: null };
    obj18[2] = tmp.card;
    obj18[3] = tmp13Result;
    tmp15Result1 = tmp15(tmp2(5226).Card, obj18);
  }
  return tmp15Result1;
};