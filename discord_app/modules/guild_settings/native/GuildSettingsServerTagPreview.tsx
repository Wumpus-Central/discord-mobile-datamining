// === Module 13459: GuildSettingsServerTagPreview ===

// Module 13459 (GuildSettingsServerTagPreview)
import nativeDefault from "native" /* 576 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const GuildTagBadgeSize = fn(7386).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { card: { padding: nativeDefault.space.PX_16 }, notice: null, message: null, unfocused: null, avatar: null, messageBody: null, usernameRow: null };
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.notice = { marginBottom: nativeDefault.space.PX_12 };
let obj4 = { marginBottom: nativeDefault.space.PX_12 };
obj2.message = { flexDirection: "row", columnGap: nativeDefault.space.PX_12, alignItems: "flex-start" };
obj2.unfocused = { opacity: 0.5 };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.round };
obj2.avatar = size;
obj2.messageBody = { flex: 1 };
let obj5 = { flexDirection: "row", columnGap: nativeDefault.space.PX_12, alignItems: "flex-start" };
obj2.usernameRow = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_4 };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPreview.tsx");

export default function GuildSettingsServerTagPreview(guildId) {
  guildId = guildId.guildId;
  ({ tag, badge, primaryColor, secondaryColor, variant } = guildId);
  if (variant === undefined) {
    variant = "card";
  }
  const onAdopted = guildId.onAdopted;
  dependencyMap = undefined;
  const tmp = closure_13();
  const items = [UserStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = guildId(504);
  const name = onAdopted(4988).useName(guildId, null, stateFromStores);
  let obj3 = onAdopted(4988);
  let avatarURL;
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(guildId, 40);
  }
  let identityGuildId;
  const source = onAdopted(1397).makeSource(avatarURL);
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
  let obj4 = onAdopted(1397);
  [tmp11, c2] = noop.useState(false);
  const items1 = [guildId, onAdopted];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            dependencyMap(true);
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: tmp2(13460).adoptGuildIdentity(guildId, true), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          closure_129_2(false);
          if (closure_128_0.ok) {
            if (closure_129_1 != null) {
              closure_129_1();
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
  const obj2 = { variant: "text-sm/medium", color: "text-muted", style: tmp.notice, children: null };
  const intl = tmp2(1115).intl;
  const string = intl.string;
  const t = tmp2(1115).t;
  if (isDirty) {
    let stringResult = string(t.hRsJ7T);
  } else {
    stringResult = string(t.OVvzY0);
  }
  obj2.children = stringResult;
  const items2 = [closure_10(guildId(4832).Text, obj2), ];
  let obj5 = { spacing: onAdopted(576).space.PX_12, children: null };
  const obj6 = { style: null, children: null };
  const items3 = [, ];
  ({ message: arr4[0], unfocused: arr4[1] } = tmp);
  obj6.style = items3;
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  const items4 = [closure_10(closure_6, { source: onAdopted(9619), style: tmp.avatar, importantForAccessibility: "no" }), ];
  const obj8 = { style: tmp.messageBody, children: null };
  const items5 = [closure_10(guildId(4832).Text, { variant: "text-md/semibold", color: "text-default", children: "Locke" }), ];
  const obj9 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl2 = tmp2(1115).intl;
  obj9.children = intl2.string(guildId(1115).t.KZQ4mF);
  items5[1] = closure_10(guildId(4832).Text, obj9);
  obj8.children = items5;
  items4[1] = closure_11(closure_7, obj8);
  obj6.children = items4;
  const items6 = [closure_11(closure_7, obj6), , , ];
  const obj10 = { style: tmp.message, children: null };
  const items7 = [closure_10(closure_6, { source, style: tmp.avatar, importantForAccessibility: "no" }), ];
  const obj12 = { style: tmp.messageBody, children: null };
  const obj13 = { style: tmp.usernameRow, children: null };
  const items8 = [closure_10(guildId(4832).Text, { variant: "text-md/semibold", color: "text-default", children: name }), ];
  let tmp15Result3 = null != tag;
  if (tmp15Result3) {
    tmp15Result3 = "" !== tag;
  }
  if (tmp15Result3) {
    const obj14 = { guildTag: tag, guildBadge: null };
    let tmp15Result;
    if (null != badge) {
      const size = { badge, primaryTintColor: primaryColor, secondaryTintColor: secondaryColor, width: null, height: null };
      ({ SIZE_12: obj16.width, SIZE_12: obj16.height } = GuildTagBadgeSize);
      tmp15Result = closure_10(tmp2(13461).GuildBadge, size);
    }
    obj14.guildBadge = tmp15Result;
    tmp15Result3 = closure_10(tmp2(9205).BaseGuildTagChiplet, obj14);
  }
  items8[1] = tmp15Result3;
  obj13.children = items8;
  const items9 = [closure_11(closure_7, obj13), ];
  const obj15 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl3 = tmp2(1115).intl;
  obj15.children = intl3.string(guildId(1115).t.LKsPRe);
  items9[1] = closure_10(guildId(4832).Text, obj15);
  obj12.children = items9;
  items7[1] = closure_11(closure_7, obj12);
  obj10.children = items7;
  items6[1] = closure_11(closure_7, obj10);
  const obj17 = { style: null, children: null };
  const items10 = [, ];
  ({ message: arr11[0], unfocused: arr11[1] } = tmp);
  obj17.style = items10;
  const obj11 = { source, style: tmp.avatar, importantForAccessibility: "no" };
  const obj7 = { source: onAdopted(9619), style: tmp.avatar, importantForAccessibility: "no" };
  const items11 = [closure_10(closure_6, { source: onAdopted(13505), style: tmp.avatar, importantForAccessibility: "no" }), ];
  const obj19 = { style: tmp.messageBody, children: null };
  const items12 = [closure_10(guildId(4832).Text, { variant: "text-md/semibold", color: "text-default", children: "Phibi" }), ];
  const obj20 = { variant: "text-md/normal", color: "text-default", children: null };
  const intl4 = tmp2(1115).intl;
  obj20.children = intl4.string(guildId(1115).t.vtCg11);
  items12[1] = closure_10(guildId(4832).Text, obj20);
  obj19.children = items12;
  items11[1] = closure_11(closure_7, obj19);
  obj17.children = items11;
  items6[2] = closure_11(closure_7, obj17);
  const obj21 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
  const intl5 = tmp2(1115).intl;
  obj21.text = intl5.string(guildId(1115).t.cQDYRu);
  obj21.loading = tmp11;
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
  const obj22 = { children: null };
  obj21.disabled = isDirty;
  obj21.onPress = callback;
  items6[3] = closure_10(guildId(5281).Button, obj21);
  obj5.children = items6;
  items2[1] = closure_11(guildId(5279).Stack, obj5);
  obj22.children = items2;
  const tmp13Result = closure_11(closure_12, obj22);
  let tmp15Result4 = tmp13Result;
  if ("plain" !== variant) {
    const obj23 = { variant: "secondary", radius: 16, style: tmp.card, children: tmp13Result };
    tmp15Result4 = closure_10(tmp2(5919).Card, obj23);
  }
  return tmp15Result4;
};